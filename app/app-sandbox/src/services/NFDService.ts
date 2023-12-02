import nfdjs from "nfdjs";

const getNFDByName = nfdjs.getNFDByName;

const requestNFDByAddress = async (address: string) => {
  return nfdjs.getNFDByAddress(address).then((response: any) => {
    localStorage.setItem(`nfd-${address}`, JSON.stringify(response.name));
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
  getNFDByAddressBatch: nfdjs.getNFDByAddressBatch,
  getNFDs: nfdjs.getNFDs,
  fetchNFDByAddressBatch: async (data: string[]) => {
    const reqData: string[] = [];
    data.forEach((el) => {
      const stored = localStorage.getItem(`nfd-${el}`);
      if (!stored) {
        reqData.push(el);
      }
    });
    const nfds = await nfdjs.getNFDByAddressBatch(reqData);
    const nfdsKeys = Object.keys(nfds);
    // store to localStorage
    Object.entries(nfds).forEach(([k, v]) => {
      localStorage.setItem(`nfd-${k}`, JSON.stringify(v));
    });
    reqData
      .filter((el) => !nfdsKeys.includes(el))
      .forEach((el) => {
        localStorage.setItem(`nfd-${el}`, JSON.stringify({ appId: 0 }));
      });
    return reqData.length > 0 && Object.keys(nfds).length > 0;
  },
  fetchNFDByAddress,
  requestNFDByAddress,
};
