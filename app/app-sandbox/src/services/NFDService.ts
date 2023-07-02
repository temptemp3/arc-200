import axios from "axios";

const baseUrl = "https://api.nf.domains";

const getNFDByName = async (name: string) => {
  const response = await axios.get(`${baseUrl}/nfd/${name}`);
  return response.data;
};

/*
const getNFDByAddress = (address: string) => {
  const stored = localStorage.getItem(`nfd-${address}`);
  if (!stored) {
    axios
      .get(`${baseUrl}/nfd/lookup`, {
        params: {
          address,
        },
      })
      .then((response) => {
        localStorage.setItem(`nfd-${address}`, JSON.stringify(response.data));
      });
    return null;
  } else {
    return JSON.parse(stored);
  }
};
*/

const requestNFDByAddress = async (address: string) => {
  return axios
    .get(`${baseUrl}/nfd/lookup`, {
      params: {
        address,
      },
    })
    .then((response) => {
      localStorage.setItem(`nfd-${address}`, JSON.stringify(response.data));
    });
};

/*
 * fetchNFDByAddress
 * - return promise or false
 */
const fetchNFDByAddress = async (address: string) => {
  const stored = localStorage.getItem(`nfd-${address}`);
  if (!stored) {
    requestNFDByAddress(address);
    return true;
  }
  return false;
};

const getNFDByAddress = (address: string) => {
  const stored = localStorage.getItem(`nfd-${address}`);
  if (!stored) {
    return address;
  } else {
    return JSON.parse(stored);
  }
};

export default {
  getNFDByName,
  getNFDByAddress,
  fetchNFDByAddress,
  requestNFDByAddress
};
