import { ethers } from "ethers";

type BigNumber = ethers.BigNumber;
const BigNumber = ethers.BigNumber;

export const bigNumberify = (x: any): BigNumber => {
  const xp = typeof x === "number" ? x.toString() : x;
  return BigNumber.from(xp);
};

export const bigNumberToNumber = (x: any) => bigNumberify(x).toNumber();

export const bigNumberToBigInt = (x: BigNumber): bigint =>
  BigInt(bigNumberify(x).toHexString());

export const formatWithDecimals = (
  x: BigNumber | string | bigint | number,
  y: number
): string => {
  const l = bigNumberify(x)
    .div(bigNumberify(10).pow(bigNumberify(y)))
    .toString();
  const r = bigNumberify(x).toString().slice(-Number(y));

  return `${l}.${r}`;
};
