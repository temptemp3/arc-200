// Leaderboard.js

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Chip,
} from "@mui/material";
import NFTImage from "../NFTImage";

const Leaderboard = ({ collectionId, data }) => {
  const [ranks, setRanks] = React.useState(null);
  React.useEffect(() => {
    if (!data) return;
    const rank = {};
    for (let [key, value] of data) {
      value.forEach((el) => {
        if (!rank[key]) rank[key] = 1;
        else rank[key]++;
      });
    }
    setRanks(Object.entries(rank).sort((a, b) => b[1] - a[1]));
  }, [data]);
  console.log({ ranks, data });
  return (
    ranks && (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Collection</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranks.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>
                  {data.get(row[0]).map((el) => (
                    <Tooltip
                      title={
                        <NFTImage
                          collectionId={collectionId}
                          tokenId={el.toString()}
                        />
                      }
                      placement="left-end"
                    >
                      <a
                        href={`/#/nft/collection/${collectionId}/token/${el.toString()}`}
                      >
                        <Chip label={el.toString()} />
                      </a>
                    </Tooltip>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default Leaderboard;
