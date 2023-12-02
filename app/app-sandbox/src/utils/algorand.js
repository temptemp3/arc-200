import algosdk from "algosdk";
import { getCurrentNode, getCurrentNodeEnv } from "./reach";

export const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

/*
 * This function takes a token object and returns a string
 */
export const displayTokenValue = (token) => {
  const intermediateValue = [
    Number(Math.floor(token?.amount ?? 0)).toLocaleString(),
    String(
      Number(token?.amount ?? 0).toFixed(Number(token.decimals.toString()))
    ).split(".")[1],
  ].filter((el) => !!el);
  if (intermediateValue.length === 1) return intermediateValue[0];
  // intermediate value is an array of length 2 or greater
  return intermediateValue[1].replace(/0+$/, "").length > 0
    ? intermediateValue.join(".").replace(/0+$/, "")
    : intermediateValue[0];
};

// TODO replace references to this with displayTokenValue
export const displayToken = (token) => {
  return (
    <div>
      {Number(Math.floor(token?.amount ?? 0)).toLocaleString()}
      {token.decimals > 0
        ? "." +
          String(Number(token?.amount ?? 0).toFixed(token.decimals ?? 0)).split(
            "."
          )[1]
        : ""}
      &nbsp;
      {token.symbol}
    </div>
  );
};

export function isValidAlgorandAddress(address) {
  // Algorand address format: must be a string of length 58
  if (typeof address !== "string" || address.length !== 58) {
    return false;
  }
  // Algorand address characters: can only contain base32 encoded alphanumeric characters
  const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 1; i < address.length; i++) {
    const char = address.charAt(i);
    if (!validChars.includes(char)) {
      return false;
    }
  }
  return true;
}

export const getAlgorandClients = () => {
  const { ALGO_SERVER: algodServer, ALGO_INDEXER_SERVER: indexerServer } =
    getCurrentNodeEnv();
  const algodToken = ""; // Your Algod API token
  const algodPort = ""; // Port of your Algod node
  const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  const token = "";
  const port = "";
  const indexerClient = new algosdk.Indexer(token, indexerServer, port);
  return {
    algodClient,
    indexerClient,
  };
};
