import { Stack, Container } from "@mui/material";
import * as React from "react";

const Connect = () => {
  const handleClick = () => {
    alert("Use icon in app bar to connect to wallet.");
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 10,
      }}
    >
      <Stack direction="column" sx={{ mt: 5, gap: 2 }}>
        <button onClick={handleClick}>Kibisis</button>
        <button onClick={handleClick}>A-Wallet</button>
      </Stack>
    </Container>
  );
};

export default Connect;
