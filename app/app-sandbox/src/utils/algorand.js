export const zeroAddress =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

/*
 * This function takes a token object and returns a string
 */
export const displayTokenValue = (token) => {
  console.log({ token });
  const intermediateValue = [
    Number(Math.floor(token?.amount ?? 0)).toLocaleString(),
    String(Number(token?.amount ?? 0).toFixed(token.decimals)).split(".")[1],
  ];
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
          String(Number(token?.amount ?? 0).toFixed(token.decimals)).split(
            "."
          )[1]
        : ""}
      &nbsp;
      {token.symbol}
    </div>
  );
};
