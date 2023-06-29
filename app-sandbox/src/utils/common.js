export const fromSome = (x, d) => {
  if (x.length !== 2 || x[0] === "None") {
    return d;
  } else {
    return x[1];
  }
}