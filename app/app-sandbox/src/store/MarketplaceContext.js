// MyContext.js
import { createContext, useMemo } from "react";
import { nftDb, db, mpDb } from "../db";
import { decodeRoyalties } from "../utils/hf";
import { useLiveQuery } from "dexie-react-hooks";
import {
  decodePrice,
  getPriceSymbol,
  decodeDecimals,
  computeExtraPayment,
  decodeTokenId,
} from "../utils/mp";
import { getCurrentNode } from "../utils/reach";
import { fee } from "../constants/mp.js";

const [node] = getCurrentNode();

const MarketplaceContext = createContext();

const MarketplaceProvider = ({ children }) => {
  const dbNfts = useLiveQuery(() => nftDb.nfts.toArray());
  const dbCollections = useLiveQuery(() => nftDb.collections.toArray());
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const dbPools = useLiveQuery(() => db.registerEvents.toArray());
  const dbMpListings = useLiveQuery(() => mpDb.listings.toArray());
  const dbMpAuctions = useLiveQuery(() => mpDb.auctions.toArray());
  const dbMpReverseAuctions = useLiveQuery(() =>
    mpDb.reverseListings.toArray()
  );
  const dbMpSales = useLiveQuery(() => mpDb.sales.toArray());
  const dbMpDeletions = useLiveQuery(() => mpDb.deletions.toArray());
  const dbMpAuctionDeletions = useLiveQuery(() =>
    mpDb.auctionDeletions.toArray()
  );
  const dbMpClaims = useLiveQuery(() => mpDb.claims.toArray());
  const dbMpBids = useLiveQuery(() => mpDb.bids.toArray());
  const isLoading = useMemo(
    () =>
      !dbNfts ||
      !dbTokens ||
      !dbMpListings ||
      !dbMpSales ||
      !dbMpDeletions ||
      !dbMpAuctionDeletions ||
      !dbMpClaims ||
      !dbMpAuctions ||
      !dbMpBids ||
      !dbPools ||
      !dbCollections,
    [
      dbNfts,
      dbTokens,
      dbMpListings,
      dbMpAuctions,
      dbMpAuctionDeletions,
      dbMpSales,
      dbMpDeletions,
      dbMpClaims,
      dbMpBids,
      dbPools,
      dbCollections,
    ]
  );
  const collections = useMemo(() => {
    if (!dbCollections) return [];
    return dbCollections;
  }, [dbCollections]);
  const pools = useMemo(() => {
    if (!dbPools) return [];
    return dbPools;
  }, [dbPools]);
  const nfts = useMemo(() => {
    if (!dbNfts) return [];
    return dbNfts.map((nft) => {
      const metadata = JSON.parse(nft.metadata);
      const royalties = decodeRoyalties(metadata.royalties);
      return {
        ...nft,
        metadata,
        royalties,
      };
    });
  }, [dbNfts]);
  const tokens = useMemo(() => {
    if (!dbTokens) return [];
    return dbTokens.map((token) => {
      const decimals = Number(token.decimals);
      return {
        ...token,
        decimals,
      };
    });
  }, [dbTokens]);
  const listings = useMemo(() => {
    if (!dbMpListings) return [];
    return dbMpListings;
  }, [dbMpListings]);
  const auctions = useMemo(() => {
    if (!dbMpAuctions) return [];
    return dbMpAuctions;
  }, [dbMpAuctions]);
  const reverseAuctions = useMemo(() => {
    if (!dbMpReverseAuctions) return [];
    return dbMpReverseAuctions;
  }, [dbMpReverseAuctions]);
  const bids = useMemo(() => {
    if (!dbMpBids) return [];
    return dbMpBids;
  }, [dbMpBids]);
  const sales = useMemo(() => {
    if (!dbMpSales) return [];
    return dbMpSales.map((sale) => {
      if (sale?.lPrc === undefined) return sale;
      const price = decodePrice(sale.lPrc);
      return {
        ...sale,
        price,
      };
    });
  }, [dbMpSales]);
  const deletions = useMemo(() => {
    if (!dbMpDeletions) return [];
    return dbMpDeletions;
  }, [dbMpDeletions]);
  const auctionDeletions = useMemo(() => {
    if (!dbMpAuctionDeletions) return [];
    return dbMpAuctionDeletions;
  }, [dbMpAuctionDeletions]);
  const claims = useMemo(() => {
    if (!dbMpClaims) return [];
    return dbMpClaims;
  }, [dbMpClaims]);
  const liveAuctions = useMemo(() => {
    if (isLoading) return [];
    const deletionsK = auctionDeletions.map(({ mp, lId }) => `${mp}:${lId}`);
    // TODO add closes
    // TODO add announcments
    return auctions
      .filter(({ mp, lId }) => [...deletionsK].indexOf(`${mp}:${lId}`) < 0)
      .map((auction) => {
        const tokenId = decodeTokenId(auction.lPrc);
        const payment = decodePrice(auction.lPrc);
        const symbol = getPriceSymbol(auction.lPrc, node, tokens);
        const decimals = decodeDecimals(auction.lPrc, node, tokens);
        const lTokens = [];
        const lToken = tokens.find((t) => t.tokenId === tokenId);
        if (lToken) lTokens.push(lToken);
        const wVOI = 24590664;
        const lPools = pools.filter(
          (p) =>
            [p.tokA, p.tokB].includes(tokenId) &&
            [p.tokA, p.tokB].includes(wVOI)
        );
        const extraPayment = symbol === "wVOI" ? 0 : 0;
        const priceDisplay = `${(
          Number(payment + extraPayment) /
          10 ** decimals
        ).toLocaleString()} ${symbol}`;
        return {
          ...auction,
          tokens: lTokens,
          pools: lPools,
          tokenId,
          payment,
          extraPayment,
          symbol,
          decimals,
          priceDisplay,
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [isLoading, auctions, tokens, pools]);
  const forSale = useMemo(() => {
    if (isLoading) return [];
    const deletionsK = deletions.map(({ mp, lId }) => `${mp}:${lId}`);
    const claimsK = claims.map(({ mp, lId }) => `${mp}:${lId}`);
    const salesK = sales.map(({ mp, lId }) => `${mp}:${lId}`);
    return listings
      .filter(
        ({ mp, lId }) =>
          [...deletionsK, ...claimsK, ...salesK].indexOf(`${mp}:${lId}`) < 0
      )
      .map((listing) => {
        const nft = nfts.find(
          (n) =>
            n.collectionId === Number(listing.cId) &&
            n.tokenId === Number(listing.tId)
        );
        const tokenId = decodeTokenId(listing.lPrc);
        const payment = decodePrice(listing.lPrc);
        const symbol = getPriceSymbol(listing.lPrc, node, tokens);
        const decimals = decodeDecimals(listing.lPrc, node, tokens);
        const lTokens = [];
        const lToken = tokens.find((t) => t.tokenId === tokenId);
        if (lToken) lTokens.push(lToken);
        const wVOI = 24590664;
        const lPools = pools.filter(
          (p) =>
            [p.tokA, p.tokB].includes(tokenId) &&
            [p.tokA, p.tokB].includes(wVOI)
        );
        const extraPayment = nft
          ? listing.lPrc[0] === "00"
            ? computeExtraPayment(payment, nft?.royalties, fee, 1)
            : symbol === "wVOI"
            ? computeExtraPayment(payment, nft?.royalties, fee, 1)
            : computeExtraPayment(payment, nft?.royalties, fee, 1)
          : 0;
        const priceDisplay =
          listing.lPrc[0] === "00"
            ? `${(
                Number(payment + extraPayment) /
                10 ** decimals
              ).toLocaleString()} ${symbol}`
            : `${(
                Number(payment) /
                10 ** decimals
              ).toLocaleString()} ${symbol}`;
        return {
          ...listing,
          tokens: lTokens,
          pools: lPools,
          tokenId,
          payment,
          extraPayment,
          symbol,
          decimals,
          nft,
          priceDisplay,
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [isLoading, listings, claims, sales, nfts, tokens, pools]);
  const properties = useMemo(() => {
    const properties = new Map();
    nfts.forEach((t) => {
      if (t.metadata.properties) {
        Object.keys(t.metadata.properties).forEach((k) => {
          if (!properties.has(k)) {
            properties.set(k, new Set([t.metadata.properties[k]]));
          } else {
            properties.set(k, properties.get(k).add(t.metadata.properties[k]));
          }
        });
      }
    });
    return properties;
  }, [isLoading, nfts]);
  const unclaimed = useMemo(() => {
    const soldK = sales
      .filter(({ lPrc }) => {
        if (lPrc === undefined) return false;
        return lPrc[0] === "01";
      })
      .map(({ mp, lId }) => `${mp}:${lId}`);
    const claimedK = claims.map(({ mp, lId }) => `${mp}:${lId}`);
    const unclaimedListings = listings.filter(
      ({ mp, lId }) =>
        soldK.indexOf(`${mp}:${lId}`) >= 0 &&
        claimedK.indexOf(`${mp}:${lId}`) < 0
    );
    return unclaimedListings.map((listing) => {
      const { mp, lId } = listing;
      const sale = sales.find(
        ({ mp: smp, lId: slId }) => mp === smp && lId === slId
      );
      return { ...listing, bAddr: sale.bAddr };
    });
  }, [isLoading, listings, claims, sales]);
  const metrics = useMemo(() => {
    if (isLoading) return {};
    const saleCount = sales.length;
    const saleVolume = sales
      .filter(({ lPrc }) => {
        if (lPrc === undefined) return false;
        return lPrc[0] === "00";
      })
      .reduce((acc, { price }) => acc + price, 0);
    const saleAverage = saleVolume / saleCount;
    const networkTokenSymbol = getPriceSymbol(["00"], node, tokens);
    return {
      ["All-time"]: {
        ["Volume"]: `${(
          saleVolume / 1e6
        ).toLocaleString()} ${networkTokenSymbol}`,
        ["Sales"]: saleCount,
        ["Average"]: `${(
          saleAverage / 1e6
        ).toLocaleString()} ${networkTokenSymbol}`,
      },
    };
  }, [isLoading, sales, tokens]);
  return (
    <MarketplaceContext.Provider
      value={{
        nfts: nfts.reverse(),
        tokens,
        listings,
        auctions,
        reverseAuctions,
        sales,
        deletions,
        auctionDeletions,
        claims,
        forSale,
        liveAuctions,
        isLoading,
        pools,
        properties,
        unclaimed,
        metrics,
        collections,
        bids,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export { MarketplaceContext, MarketplaceProvider };
