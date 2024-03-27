import * as React from "react";
import { db } from "../../db.js";
import { useLiveQuery } from "dexie-react-hooks";
import { Autocomplete, TextField } from "@mui/material";
import { getCurrentNode } from "../../utils/reach.js";

const getNentworkToken = (node) => {
  switch (node) {
    case "voi":
    case "voi-testnet":
      return {
        name: "VOI",
        tokenId: 0,
        decimals: 6,
        symbol: "VOI",
      };
    case "algorand":
    case "algorand-testnet":
      return {
        name: "Algo",
        tokenId: 0,
        decimals: 6,
        symbol: "ALGO",
      };
    case "ethereum":
    case "ethereum-testnet":
      return {
        name: "Ether",
        tokenId: 0,
        decimals: 18,
        symbol: "ETH",
      };
  }
};

export default function TokenSelect({ onChange }) {
  const [node] = getCurrentNode();
  const dbTokens = useLiveQuery(() => db.tokens.toArray());
  const isLoading = React.useMemo(() => !dbTokens, [dbTokens]);
  const networkToken = getNentworkToken(node);
  const tokens = React.useMemo(() => {
    if (!dbTokens) return [networkToken];
    return [networkToken, ...dbTokens]
      .map((token) => ({
        ...token,
        decimals: Number(token.decimals),
        totalSupply: Number(token.totalSupply),
      }))
      .filter((token) => token.name.indexOf("ARC200 LP") === -1)
      .sort((a, b) => a.tokenId - b.tokenId);
  }, [dbTokens]);
  console.log(tokens);
  return (
    !isLoading && (
      <div>
        <Autocomplete
          sx={{ my: 2 }}
          fullWidth
          disablePortal
          id="combo-box-demo"
          isOptionEqualToValue={(option, value) => false}
          options={tokens.map((token) => ({
            label: token.name,
            value: token,
          }))}
          renderInput={(params) => <TextField {...params} label="Token" />}
          onChange={(e, value) => onChange(value?.value ?? null)}
        />
      </div>
    )
  );
}
