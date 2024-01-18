// db.js
import Dexie from "dexie";

export const db = new Dexie("arc200Database");
db.version(1).stores({
  registerEvents: "txId, round, timestamp, poolId, tokA, tokB", // pools, tokenIds
  tokens: "pk, name, network, symbol, decimals, assetType, tokenId", // tokens
});
