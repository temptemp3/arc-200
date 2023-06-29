import { makeStdLib } from "../utils/reach.js";

const stdlib = makeStdLib();

const getAsset = async (assetId: number) => {
  if (localStorage.getItem(`asset-${assetId}`)) {
    const asset = JSON.parse(localStorage.getItem(`asset-${assetId}`) ?? "{}");
    return asset;
  } else {
    console.log("Fetching asset...");
    const { indexer } = await stdlib.getProvider();
    const { asset } = await indexer.lookupAssetByID(assetId).do();
    localStorage.setItem(`asset-${assetId}`, JSON.stringify(asset));
    return asset;
  }
};

export default {
  getAsset,
};
