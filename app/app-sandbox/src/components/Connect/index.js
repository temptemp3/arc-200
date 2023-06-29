import { Stack } from "@mui/material";
import * as React from "react";
import Blink from "react-blink-text";

const Connect = () => {
  return (
    <div className="Home">
      <Stack direction="column" gap={1}>
        <Stack direction="column" gap={5} style={{ textAlign: "center" }}>
          <Blink
            color="grey"
            blinkTime={3}
            text="Connect wallet to continue"
            fontSize="20"
          >
            Connect wallet to continue
          </Blink>
        </Stack>
      </Stack>
    </div>
  );
};

export default Connect;
