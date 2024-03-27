// db.js
import Dexie from "dexie";

export const db = new Dexie("arc200Database");
db.version(1).stores({
  registerEvents: "txId, round, timestamp, poolId, tokA, tokB", // pools, tokenIds
  tokens: "pk, name, network, symbol, decimals, assetType, tokenId", // tokens
});

// {
//   "contractId": 26168759,
//   "tokenId": 1,
//   "owner": "AUSTSGSNXEGTUD3TIO7ORZADRB5BPAMHKMHQXGLWONMSJNZEP42XCHMVOI",
//   "metadataURI": "https://prod.cdn.highforge.io/t/26168759/1.json#arc3",
//   "metadata": "{\"name\":\"TestSkull #1\",\"description\":\"These skulls are just for testing.\",\"image\":\"https://prod.cdn.highforge.io/t/26168759/1.webp\",\"image_integrity\":\"CBl++f37p5FGhX+dhpGVhfcO3B86/DOzVybAE/iVpgU=\",\"image_mimetype\":\"image/png\",\"properties\":{\"Background\":\"Green\",\"Floor\":\"Disco\",\"Background Item\":\"Planets\",\"Base\":\"Ruby\"},\"royalties\":\"AfQnEAAAAAAFJTkaTbkNOg9zQ77o5AOIeheBh1MPC5l2c1kktyR/NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\"}",
//   "mint-round": 3183812
// }

export const nftDb = new Dexie("nftDatabase");
nftDb.version(1).stores({
  nfts: "pk, name, network, symbol, decimals, supply, assetType, collectionId, tokenId, mintRound, metadata, metadataURI",
  collections: "pk, contractId, mintRound, totalSupply",
  transfers: "pk, txId, round, timestamp, collectionId, tokenId, from, to",
});

export const mpDb = new Dexie("mpDatabase");
mpDb.version(1).stores({
  // ListEvent: [UInt256, Contract, UInt256, Address, Price], // ListId, CollectionId, TokenId, ListAddr, ListPrice
  listings: "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc",
  // BuyEvent: [UInt256, Address], // ListId BuyAddr
  //sales: "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, bAddr",
  sales: "pk, mp, txId, round, timestamp, lId",
  // ClaimEvent: [UInt256], // ListId
  //claims: "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, bAddr",
  claims: "pk, mp, txId, round, timestamp, lId",
  // DeleteListingEvent: [UInt256], // ListId
  deletions: "pk, mp, txId, round, timestamp, lId",
  // AuctionEvent: [UInt256, Contract, UInt256, Address, Price, UInt], // AuctionId, CollectionId, TokenId, ListAddr, ListPrice, EndTime
  auctions:
    "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, endTime",
  // BidEvent: [UInt256, Address, Price], // AuctionId, BidAddr, BidPrice
  bids: "pk, mp, txId, round, timestamp, lId, bAddr, bPrc",
  // DeleteAuctionEvent: [UInt256], // AuctionId
  auctionDeletions: "pk, mp, txId, round, timestamp, lId",
  // ReverseListEvent: [
  //   UInt256,
  //   Contract,
  //   UInt256,
  //   Address,
  //   Price,
  //   Price,
  //   UInt,
  // ], // ListId, CollectionId, TokenId, ListAddr, ListPrice, FloorPrice, EndTime
  reverseListings:
    "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, fPrc, endTime",
});

// export const lpDb = new Dexie("lpDatabase");
// lpDb.version(1).stores({
//   projects: "pk, lp, info",
// });
