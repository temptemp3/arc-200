import { fee } from "../constants/mp.js";

export const computeExtraPayment = (price, royalties, fee, rate = 1) => {
  const { royaltyPercent } = royalties;
  return (
    rate *
    ((price * (royaltyPercent + computeMarketplaceFee(royalties, fee))) / 100)
  );
};
export const computeMarketplaceFee = (royalties, fee) =>
  Math.max(
    1,
    Math.min(
      fee,
      Math.ceil(royalties.royaltyPercent / royalties.creatorAddressCount)
    )
  );
export const getPriceSymbol = (price, node, tokens) => {
  const [pType, ...prc] = price;
  switch (pType) {
    case "00": {
      switch (node) {
        case "voi":
        case "voi-testnet":
          return "VOI";
        default:
          return "ALGO";
      }
    }
    case "01": {
      const [_, tidr, tprcr] = price;
      const tid = Number("0x" + tidr);
      const token = tokens.find((el) => el.tokenId === tid);
      return token?.symbol || "UNK";
    }
  }
};
export const decodeDecimals = (price, node, tokens) => {
  const [pType, ...prc] = price;
  switch (pType) {
    case "00": {
      switch (node) {
        case "algorand":
        case "algorand-testnet":
        case "voi":
        case "voi-testnet":
          return 6;
        default:
          return 0;
      }
    }
    case "01": {
      const [, tidr] = price;
      const tid = Number("0x" + tidr);
      const token = tokens?.find((el) => el.tokenId === tid);
      return Number(token?.decimals || 1);
    }
  }
};

export const decodeTokenId = (price) => {
  const [pType, ...prc] = price;
  switch (pType) {
    case "00": {
      return 0;
    }
    case "01": {
      const [_, tidr] = price;
      const tid = Number("0x" + tidr);
      return tid;
    }
  }
};

export const decodePrice = (price) => {
  const [pType, ...prc] = price;
  switch (pType) {
    case "00": {
      const prcn = Number(prc);
      return prcn;
    }
    case "01": {
      const [_, tidr, tprcr] = price;
      const tprc = Number("0x" + tprcr);
      return tprc;
    }
  }
};

export const computeSalePrice = (price, royalties, token) => {
  const salePrice = (prc) => prc + computeExtraPayment(prc, royalties, fee);
  return salePrice(price);
};
export const computeNFTSalePrice = (
  tokens,
  price,
  royalties,
  fee,
  addFee = false
) => {
  console.log({ tokens, price, royalties, fee, addFee });
  const [pType, ...prc] = price;
  const salePrice = (prc) => prc + computeExtraPayment(prc, royalties, fee);
  switch (pType) {
    case "00": {
      const prcn = Number(prc);
      return addFee ? salePrice(prcn) : prcn; /// 1e6;
    }
    case "01": {
      /*
      const l = nfts.find((el) => {
        const [lmp, txId, round, ts, llId, cId, tId, lAddr, lPrc] = el;
        return llId === lId && lmp === mp;
      });
      const LPRC = 8;
      */
      const [_, tidr, tprcr] = price;
      const tid = Number("0x" + tidr);
      const tprc = Number("0x" + tprcr.slice(0, tprcr.length - 6));
      //const token = tokens?.find((el) => el.tokenId === tid);
      const au = tprc;
      //const decimals = Number(token?.decimals || 1);
      return au; /// decimals;
    }
  }
};
