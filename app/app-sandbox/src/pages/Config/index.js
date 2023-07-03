import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { makeStdLib } from "../../utils/reach";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const stdlib = makeStdLib();
const pc = stdlib.parseCurrency;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;

const [initialNode, initialCustomNode, initialCustomIndexer] = (
  localStorage.getItem("node") || "algorand-testnet::"
).split(":");

function NodeSelection() {
  const [node, setNode] = React.useState(initialNode);
  const [customName, setCustomName] = React.useState(
    initialNode.indexOf("custom") === 0 ? initialNode.split("-")[1] : ""
  );
  const [customNode, setCustomNode] = React.useState(
    initialNode.indexOf("custom") === 0 ? initialCustomNode : ""
  );
  const [customIndexer, setCustomIndexer] = React.useState(
    initialNode.indexOf("custom") === 0 ? initialCustomIndexer : ""
  );
  return (
    <Stack gap={2}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Node</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={node.indexOf("custom") === 0 ? "custom" : node}
          onChange={(e) => setNode(e.target.value)}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="voi-testnet"
            control={<Radio />}
            label="Voi (Testnet)"
            disabled
          />
          <FormControlLabel
            value="algorand"
            control={<Radio />}
            label="Algorand"
            //disabled
          />
          <FormControlLabel
            value="algorand-testnet"
            control={<Radio />}
            label="Algorand (Testnet)"
          />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        </RadioGroup>
      </FormControl>
      {node.indexOf("custom") === 0 && (
        <Stack gap={5}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            defaultValue={customName}
            onChange={(e) => setCustomName(e.target.value)}
          />
          <TextField
            id="node"
            label="Node"
            variant="outlined"
            defaultValue={customNode}
            onChange={(e) => setCustomNode(e.target.value)}
          />
          <TextField
            id="indexer"
            label="Indexer"
            variant="outlined"
            defaultValue={customIndexer}
            onChange={(e) => setCustomIndexer(e.target.value)}
          />
        </Stack>
      )}
      <Button
        onClick={() => {
          localStorage.setItem(
            "node",
            [
              node === "custom" ? `custom-${customName}` : node,
              node === "custom" ? customNode : "",
              node === "custom" ? customIndexer : "",
            ].join(":")
          );
          window.location.reload();
        }}
      >
        Update
      </Button>
    </Stack>
  );
}

const User = (props) => {
  return (
    <Container sx={{ mt: 5, textAlign: "left" }}>
      <Stack>
        <Typography variant="h2">Config</Typography>
      </Stack>
      <Box>
        <Typography variant="h5">Node Selection</Typography>
        <NodeSelection />
      </Box>
    </Container>
  );
};

function Page() {
  return <User />;
}

export default Page;
