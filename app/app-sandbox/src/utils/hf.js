import { encodeAddress } from "algosdk";
import { zeroAddress } from "./algorand";

export const decodeRoyalties = (royalties) => {
  const buf = Buffer.from(royalties, "base64");
  const royaltyPoints = buf.slice(0, 2).readUInt16BE(0);
  const creator1Points = buf.slice(2, 4).readUInt16BE(0);
  const creator2Points = buf.slice(4, 6).readUInt16BE(0);
  const creator3Points = buf.slice(6, 8).readUInt16BE(0);
  const creator1Address = encodeAddress(buf.slice(8, 8 + 32 * 1));
  const creator2Address = encodeAddress(buf.slice(8 + 32, 8 + 32 * 2));
  const creator3Address = encodeAddress(buf.slice(8 + 32 * 2, 8 + 32 * 3));
  const creatorAddressCount = [
    creator1Address,
    creator2Address,
    creator3Address,
  ].filter((el) => el !== zeroAddress).length;
  const royaltyPercent = (royaltyPoints / 10000) * 100;
  return {
    royaltyPercent,
    royaltyPoints,
    creator1Address,
    creator2Address,
    creator3Address,
    creator1Points,
    creator2Points,
    creator3Points,
    creatorAddressCount,
  };
};
