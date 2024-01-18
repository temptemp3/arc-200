import tokens from "./tokens.json";
export const registeredToken = (node, id) => {
  const token = tokens[node][id];
  return token;
};
export const tokenURL = (node, id) => {
  if (!registeredToken(node, id)) {
    return "/static/images/token/_.png";
  } else {
    return `/static/images/token/${id}.png`;
  }
};
