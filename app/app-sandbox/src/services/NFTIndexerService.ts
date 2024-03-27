import axios from "axios";

const getCollections = async (query = {}) => {
  const response = await axios.get(
    `https://arc72-idx.voirewards.com/nft-indexer/v1/collections`,
    {
      params: query,
    }
  );
  return response.data;
}

const getTokens = async (query = {}) => {
  const response = await axios.get(
    `https://arc72-idx.voirewards.com/nft-indexer/v1/tokens`,
    {
      params: query,
    }
  );
  return response.data;
};

export default {
  getCollections,
  getTokens,
};
