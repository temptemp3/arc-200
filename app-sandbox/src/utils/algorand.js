export const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

export const displayToken = (token) => {
  return (
    <div>
      {Number(Math.floor(token?.amount ?? 0)).toLocaleString()}
      {token.decimals > 0
        ? "." +
          String(Number(token?.amount ?? 0).toFixed(token.decimals)).split(
            "."
          )[1]
        : ""}
      &nbsp;
      {token.symbol}
    </div>
  );
};
