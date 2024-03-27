import axios from "axios";

const getProjects = async (query) => {
  const response = await axios.get(
    `https://test-voi.api.highforge.io/projects`,
    {
      params: query,
    }
  );
  return response.data;
};

export default {
  getProjects,
};
