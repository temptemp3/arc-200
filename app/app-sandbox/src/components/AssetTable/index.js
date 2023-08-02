import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EmptyBoxIcon from './empty-box-icon'; // Replace with the path to your empty box icon
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    minWidth: 433,
  },
  emptyBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  emptyBoxIcon: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(1),
  },
  viewMarketplaceButton: {
    marginTop: theme.spacing(2),
  },
}));

const AssetTable = ({ assets, onSort }) => {
  const classes = useStyles();

  const handleSort = (columnName) => {
    // Implement your sorting logic here
    onSort(columnName);
  };

  const renderTableContent = () => {
    if (assets.length === 0) {
      return (
        <Box className={classes.emptyBoxContainer}>
          <EmptyBoxIcon className={classes.emptyBoxIcon} />
          <Typography variant="subtitle1">No assets yet</Typography>
          <Button variant="contained" color="primary" className={classes.viewMarketplaceButton}>
            View Marketplace
          </Button>
        </Box>
      );
    } else {
      return (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell onClick={() => handleSort('investment')}>Investment</TableCell>
                <TableCell onClick={() => handleSort('balance')}>Balance</TableCell>
                <TableCell onClick={() => handleSort('distribution')}>Distribution</TableCell>
                <TableCell onClick={() => handleSort('ownership')}>Ownership</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset, index) => (
                <TableRow key={index}>
                  <TableCell>{asset.investment}</TableCell>
                  <TableCell>{asset.balance}</TableCell>
                  <TableCell>{asset.distribution}</TableCell>
                  <TableCell>{asset.ownership}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  };

  return renderTableContent();
};

export default AssetTable;
