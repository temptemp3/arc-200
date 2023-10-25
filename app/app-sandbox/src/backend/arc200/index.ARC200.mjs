// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  return {
    DeleteAllowanceBox: [ctc0, ctc0],
    DeleteBalanceBox: [ctc0],
    Destroy: [],
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    decimals: ctc2,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc5
    });
  const ctc7 = stdlib.T_Object({
    closed: ctc1,
    decimals: ctc2,
    enableZeroAddressBurn: ctc1,
    manager: ctc0,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc5,
    zeroAddress: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc9 = stdlib.T_Struct([['name', ctc3], ['symbol', ctc4], ['decimals', ctc2], ['totalSupply', ctc5], ['zeroAddress', ctc0], ['manager', ctc0], ['enableZeroAddressBurn', ctc1], ['closed', ctc1]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc5
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async (_v1544, _v1545 ) => {
          const v1544 = stdlib.protect(ctc0, _v1544, null);
          const v1545 = stdlib.protect(ctc0, _v1545, null);
        
        const v1546 = [v1544, v1545];
        const v1547 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v1546, ctc5), null);
        const v1548 = stdlib.fromSome(v1547, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1548;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async (_v1541 ) => {
          const v1541 = stdlib.protect(ctc0, _v1541, null);
        
        const v1542 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1541, ctc5), null);
        const v1543 = stdlib.fromSome(v1542, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1543;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async () => {
        
        
        return v1516;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async () => {
        
        const v1523 = v1507.name;
        
        return v1523;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async () => {
        
        const v1524 = v1507.symbol;
        
        return v1524;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async () => {
        
        
        return v1513;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasAllowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async (_v1553, _v1554 ) => {
          const v1553 = stdlib.protect(ctc0, _v1553, null);
          const v1554 = stdlib.protect(ctc0, _v1554, null);
        
        const v1555 = [v1553, v1554];
        const v1556 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v1555, ctc5), null);
        const v1557 = {
          None: 0,
          Some: 1
          }[v1556[0]];
        const v1558 = stdlib.eq(v1557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1558;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBalance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async (_v1549 ) => {
          const v1549 = stdlib.protect(ctc0, _v1549, null);
        
        const v1550 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1549, ctc5), null);
        const v1551 = {
          None: 0,
          Some: 1
          }[v1550[0]];
        const v1552 = stdlib.eq(v1551, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1552;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1504, v1506, v1507, v1513, v1516, v1532] = svs;
      return (await ((async () => {
        
        const v1559 = v1532.name;
        const v1560 = v1532.symbol;
        const v1561 = v1532.decimals;
        const v1562 = v1532.totalSupply;
        const v1563 = v1532.zeroAddress;
        const v1564 = v1532.manager;
        const v1565 = v1532.enableZeroAddressBurn;
        const v1566 = v1532.closed;
        const v1567 = {
          closed: v1566,
          decimals: v1561,
          enableZeroAddressBurn: v1565,
          manager: v1564,
          name: v1559,
          symbol: v1560,
          totalSupply: v1562,
          zeroAddress: v1563
          };
        
        return v1567;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc0, ctc0],
        rng: ctc5
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc0],
        rng: ctc5
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc2
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc3
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc4
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc5
        },
      hasAllowance: {
        decode: _hasAllowance,
        dom: [ctc0, ctc0],
        rng: ctc1
        },
      hasBalance: {
        decode: _hasBalance,
        dom: [ctc0],
        rng: ctc1
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc9
        }
      },
    views: {
      3: [ctc0, ctc1, ctc6, ctc5, ctc2, ctc7]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    manager: ctc4,
    meta: ctc8,
    zeroAddress: ctc4
    });
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc10,
    arc200_transfer0_287: ctc10,
    arc200_transferFrom0_287: ctc11,
    deleteAllowanceBox0_287: ctc12,
    deleteBalanceBox0_287: ctc13,
    destroy0_287: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v1479 = stdlib.protect(ctc9, interact.params, 'for Deployer\'s interact field params');
  const v1480 = v1479.enableZeroAddressBurn;
  const v1481 = v1479.manager;
  const v1482 = v1479.meta;
  const v1483 = v1479.zeroAddress;
  const v1484 = v1482.decimals;
  const v1487 = v1482.totalSupply;
  
  const v1494 = stdlib.addressEq(v1483, v1481);
  const v1495 = v1494 ? false : true;
  stdlib.assert(v1495, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1498 = stdlib.gt256(v1487, stdlib.checkedBigNumberify('./index.rsh:84:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1498, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:83:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1501 = stdlib.le(v1484, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1501, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1483, v1481, v1480, v1482],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:78:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1504, v1505, v1506, v1507], secs: v1509, time: v1508, didSend: v146, from: v1503 } = txn1;
      
      const v1513 = v1507.totalSupply;
      const v1516 = v1507.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1505, ctc1, v1513);
      await stdlib.simMapSet(sim_r, 0, ctc4, v1504, ctc1, stdlib.checkedBigNumberify('./index.rsh:97:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      null;
      const v1521 = await ctc.getContractInfo();
      
      const v1528 = v1507.name;
      const v1529 = v1507.symbol;
      const v1531 = {
        closed: false,
        decimals: v1516,
        enableZeroAddressBurn: v1506,
        manager: v1505,
        name: v1528,
        symbol: v1529,
        totalSupply: v1513,
        zeroAddress: v1504
        };
      const v1532 = v1531;
      const v1533 = v1508;
      
      if (await (async () => {
        const v1539 = v1532.closed;
        const v1540 = v1539 ? false : true;
        
        return v1540;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1504, v1505, v1506, v1507], secs: v1509, time: v1508, didSend: v146, from: v1503 } = txn1;
  const v1510 = stdlib.addressEq(v1504, v1505);
  const v1511 = v1510 ? false : true;
  stdlib.assert(v1511, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1513 = v1507.totalSupply;
  const v1514 = stdlib.gt256(v1513, stdlib.checkedBigNumberify('./index.rsh:84:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1514, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:83:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1516 = v1507.decimals;
  const v1517 = stdlib.le(v1516, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1517, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1505, ctc1, v1513);
  await stdlib.mapSet(map0, ctc4, v1504, ctc1, stdlib.checkedBigNumberify('./index.rsh:97:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  null;
  const v1521 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1521), {
    at: './index.rsh:100:19:application',
    fs: ['at ./index.rsh:100:19:application call to [unknown function] (defined at: ./index.rsh:100:19:function exp)', 'at ./index.rsh:100:19:application call to "liftedInteract" (defined at: ./index.rsh:100:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1528 = v1507.name;
  const v1529 = v1507.symbol;
  const v1531 = {
    closed: false,
    decimals: v1516,
    enableZeroAddressBurn: v1506,
    manager: v1505,
    name: v1528,
    symbol: v1529,
    totalSupply: v1513,
    zeroAddress: v1504
    };
  let v1532 = v1531;
  let v1533 = v1508;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1539 = v1532.closed;
    const v1540 = v1539 ? false : true;
    
    return v1540;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn3;
    switch (v1718[0]) {
      case 'arc200_approve0_287': {
        const v1721 = v1718[1];
        undefined /* setApiDetails */;
        ;
        const v1732 = v1721[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
        const v1733 = v1721[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
        const v1734 = stdlib.addressEq(v1717, v1504);
        const v1735 = v1734 ? false : true;
        stdlib.assert(v1735, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v1737 = stdlib.addressEq(v1732, v1504);
        const v1738 = v1737 ? false : true;
        stdlib.assert(v1738, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1742 = [v1717, v1732];
        await stdlib.mapSet(map1, ctc12, v1742, ctc1, v1733);
        null;
        const v1743 = true;
        await txn3.getOutput('arc200_approve', 'v1743', ctc3, v1743);
        const cv1532 = v1532;
        const cv1533 = v1719;
        
        v1532 = cv1532;
        v1533 = cv1533;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_287': {
        const v1894 = v1718[1];
        undefined /* setApiDetails */;
        ;
        const v1926 = v1894[stdlib.checkedBigNumberify('./index.rsh:146:10:spread', stdlib.UInt_max, '0')];
        const v1927 = v1894[stdlib.checkedBigNumberify('./index.rsh:146:10:spread', stdlib.UInt_max, '1')];
        const v1928 = stdlib.addressEq(v1926, v1504);
        const v1929 = v1928 ? false : true;
        const v1930 = v1506 ? true : v1929;
        stdlib.assert(v1930, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:147:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v1932 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1717, ctc1), null);
        const v1933 = stdlib.fromSome(v1932, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1934 = stdlib.ge256(v1933, v1927);
        stdlib.assert(v1934, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v1940 = stdlib.safeSub256(v1933, v1927);
        await stdlib.mapSet(map0, ctc4, v1717, ctc1, v1940);
        const v1941 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1926, ctc1), null);
        const v1942 = stdlib.fromSome(v1941, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1943 = stdlib.safeAdd256(v1942, v1927);
        await stdlib.mapSet(map0, ctc4, v1926, ctc1, v1943);
        null;
        const v1945 = true;
        await txn3.getOutput('arc200_transfer', 'v1945', ctc3, v1945);
        const cv1532 = v1532;
        const cv1533 = v1719;
        
        v1532 = cv1532;
        v1533 = cv1533;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_287': {
        const v2067 = v1718[1];
        undefined /* setApiDetails */;
        ;
        const v2128 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '0')];
        const v2129 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '1')];
        const v2130 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '2')];
        const v2131 = stdlib.addressEq(v2128, v1504);
        const v2132 = v2131 ? false : true;
        stdlib.assert(v2132, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2134 = stdlib.addressEq(v2129, v1504);
        const v2135 = v2134 ? false : true;
        stdlib.assert(v2135, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2137 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2128, ctc1), null);
        const v2138 = stdlib.fromSome(v2137, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2139 = stdlib.ge256(v2138, v2130);
        stdlib.assert(v2139, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2141 = [v2128, v1717];
        const v2142 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2141, ctc1), null);
        const v2143 = stdlib.fromSome(v2142, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2144 = stdlib.ge256(v2143, v2130);
        stdlib.assert(v2144, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2151 = stdlib.safeSub256(v2138, v2130);
        await stdlib.mapSet(map0, ctc4, v2128, ctc1, v2151);
        const v2152 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2129, ctc1), null);
        const v2153 = stdlib.fromSome(v2152, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2154 = stdlib.safeAdd256(v2153, v2130);
        await stdlib.mapSet(map0, ctc4, v2129, ctc1, v2154);
        null;
        const v2159 = stdlib.safeSub256(v2143, v2130);
        await stdlib.mapSet(map1, ctc12, v2141, ctc1, v2159);
        null;
        const v2161 = true;
        await txn3.getOutput('arc200_transferFrom', 'v2161', ctc3, v2161);
        const cv1532 = v1532;
        const cv1533 = v1719;
        
        v1532 = cv1532;
        v1533 = cv1533;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_287': {
        const v2240 = v1718[1];
        undefined /* setApiDetails */;
        ;
        const v2345 = v2240[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '0')];
        const v2346 = v2240[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '1')];
        const v2347 = [v2345, v2346];
        const v2348 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2347, ctc1), null);
        const v2349 = {
          None: 0,
          Some: 1
          }[v2348[0]];
        const v2350 = stdlib.eq(v2349, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2350, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v2354 = stdlib.fromSome(v2348, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2355 = stdlib.eq256(v2354, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2355, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc12, v2347, ctc1, undefined /* Nothing */);
        null;
        const v2360 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v2360', ctc3, v2360);
        const cv1532 = v1532;
        const cv1533 = v1719;
        
        v1532 = cv1532;
        v1533 = cv1533;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_287': {
        const v2413 = v1718[1];
        undefined /* setApiDetails */;
        ;
        const v2543 = v2413[stdlib.checkedBigNumberify('./index.rsh:210:10:spread', stdlib.UInt_max, '0')];
        const v2544 = stdlib.addressEq(v2543, v1504);
        const v2545 = v2544 ? false : true;
        stdlib.assert(v2545, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v2547 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2543, ctc1), null);
        const v2548 = {
          None: 0,
          Some: 1
          }[v2547[0]];
        const v2549 = stdlib.eq(v2548, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2549, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2552 = stdlib.fromSome(v2547, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2553 = stdlib.eq256(v2552, stdlib.checkedBigNumberify('./index.rsh:213:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2553, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v2543, ctc1, undefined /* Nothing */);
        null;
        const v2556 = true;
        await txn3.getOutput('deleteBalanceBox', 'v2556', ctc3, v2556);
        const cv1532 = v1532;
        const cv1533 = v1719;
        
        v1532 = cv1532;
        v1533 = cv1533;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_287': {
        const v2586 = v1718[1];
        undefined /* setApiDetails */;
        ;
        const v2738 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v2739 = {
          None: 0,
          Some: 1
          }[v2738[0]];
        const v2740 = stdlib.eq(v2739, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2740, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1504, ctc1, undefined /* Nothing */);
        null;
        const v2742 = null;
        await txn3.getOutput('destroy', 'v2742', ctc0, v2742);
        const v2749 = v1532.decimals;
        const v2750 = v1532.enableZeroAddressBurn;
        const v2751 = v1532.manager;
        const v2752 = v1532.name;
        const v2753 = v1532.symbol;
        const v2754 = v1532.totalSupply;
        const v2755 = v1532.zeroAddress;
        const v2756 = {
          closed: true,
          decimals: v2749,
          enableZeroAddressBurn: v2750,
          manager: v2751,
          name: v2752,
          symbol: v2753,
          totalSupply: v2754,
          zeroAddress: v2755
          };
        const cv1532 = v2756;
        const cv1533 = v1719;
        
        v1532 = cv1532;
        v1533 = cv1533;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _arc200_approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_approve3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc10,
    arc200_transfer0_287: ctc10,
    arc200_transferFrom0_287: ctc11,
    deleteAllowanceBox0_287: ctc12,
    deleteBalanceBox0_287: ctc13,
    destroy0_287: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1504, v1506, v1507, v1513, v1516, v1532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1628 = ctc.selfAddress();
  const v1630 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:193:47:application call to [unknown function] (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_approve0_287" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v1631 = v1630[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1635 = stdlib.addressEq(v1628, v1504);
  const v1636 = v1635 ? false : true;
  stdlib.assert(v1636, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:193:47:application call to [unknown function] (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_approve0_287" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v1638 = stdlib.addressEq(v1631, v1504);
  const v1639 = v1638 ? false : true;
  stdlib.assert(v1639, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:193:47:application call to [unknown function] (defined at: ./index.rsh:193:47:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_approve0_287" (defined at: ./index.rsh:193:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v1648 = ['arc200_approve0_287', v1630];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1504, v1506, v1507, v1513, v1516, v1532, v1648],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:193:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
      
      switch (v1718[0]) {
        case 'arc200_approve0_287': {
          const v1721 = v1718[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v1732 = v1721[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v1733 = v1721[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
          const v1742 = [v1717, v1732];
          await stdlib.simMapSet(sim_r, 1, ctc12, v1742, ctc1, v1733);
          null;
          const v1743 = true;
          const v1744 = await txn1.getOutput('arc200_approve', 'v1743', ctc4, v1743);
          
          const v3693 = v1532;
          const v3695 = v1532.closed;
          if (v3695) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_transfer0_287': {
          const v1894 = v1718[1];
          
          break;
          }
        case 'arc200_transferFrom0_287': {
          const v2067 = v1718[1];
          
          break;
          }
        case 'deleteAllowanceBox0_287': {
          const v2240 = v1718[1];
          
          break;
          }
        case 'deleteBalanceBox0_287': {
          const v2413 = v1718[1];
          
          break;
          }
        case 'destroy0_287': {
          const v2586 = v1718[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
  switch (v1718[0]) {
    case 'arc200_approve0_287': {
      const v1721 = v1718[1];
      undefined /* setApiDetails */;
      ;
      const v1732 = v1721[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '0')];
      const v1733 = v1721[stdlib.checkedBigNumberify('./index.rsh:193:10:spread', stdlib.UInt_max, '1')];
      const v1734 = stdlib.addressEq(v1717, v1504);
      const v1735 = v1734 ? false : true;
      stdlib.assert(v1735, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v1737 = stdlib.addressEq(v1732, v1504);
      const v1738 = v1737 ? false : true;
      stdlib.assert(v1738, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v1742 = [v1717, v1732];
      await stdlib.mapSet(map1, ctc12, v1742, ctc1, v1733);
      null;
      const v1743 = true;
      const v1744 = await txn1.getOutput('arc200_approve', 'v1743', ctc4, v1743);
      if (v1038) {
        stdlib.protect(ctc0, await interact.out(v1721, v1744), {
          at: './index.rsh:193:11:application',
          fs: ['at ./index.rsh:193:11:application call to [unknown function] (defined at: ./index.rsh:193:11:function exp)', 'at ./index.rsh:200:12:application call to "k" (defined at: ./index.rsh:197:13:function exp)', 'at ./index.rsh:197:13:application call to [unknown function] (defined at: ./index.rsh:197:13:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v3693 = v1532;
      const v3695 = v1532.closed;
      if (v3695) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transfer0_287': {
      const v1894 = v1718[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_287': {
      const v2067 = v1718[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_287': {
      const v2240 = v1718[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_287': {
      const v2413 = v1718[1];
      return;
      break;
      }
    case 'destroy0_287': {
      const v2586 = v1718[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc10,
    arc200_transfer0_287: ctc10,
    arc200_transferFrom0_287: ctc11,
    deleteAllowanceBox0_287: ctc12,
    deleteBalanceBox0_287: ctc13,
    destroy0_287: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1504, v1506, v1507, v1513, v1516, v1532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1569 = ctc.selfAddress();
  const v1571 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:146:43:application call to [unknown function] (defined at: ./index.rsh:146:43:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transfer0_287" (defined at: ./index.rsh:146:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v1572 = v1571[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1573 = v1571[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1576 = stdlib.addressEq(v1572, v1504);
  const v1577 = v1576 ? false : true;
  const v1578 = v1506 ? true : v1577;
  stdlib.assert(v1578, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:147:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:146:43:application call to [unknown function] (defined at: ./index.rsh:146:43:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transfer0_287" (defined at: ./index.rsh:146:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'arc200_transfer'
    });
  const v1580 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1569, ctc1), null);
  const v1581 = stdlib.fromSome(v1580, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1582 = stdlib.ge256(v1581, v1573);
  stdlib.assert(v1582, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:146:43:application call to [unknown function] (defined at: ./index.rsh:146:43:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transfer0_287" (defined at: ./index.rsh:146:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v1591 = ['arc200_transfer0_287', v1571];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1504, v1506, v1507, v1513, v1516, v1532, v1591],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:146:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
      
      switch (v1718[0]) {
        case 'arc200_approve0_287': {
          const v1721 = v1718[1];
          
          break;
          }
        case 'arc200_transfer0_287': {
          const v1894 = v1718[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v1926 = v1894[stdlib.checkedBigNumberify('./index.rsh:146:10:spread', stdlib.UInt_max, '0')];
          const v1927 = v1894[stdlib.checkedBigNumberify('./index.rsh:146:10:spread', stdlib.UInt_max, '1')];
          const v1932 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1717, ctc1), null);
          const v1933 = stdlib.fromSome(v1932, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1940 = stdlib.safeSub256(v1933, v1927);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1717, ctc1, v1940);
          const v1941 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1926, ctc1), null);
          const v1942 = stdlib.fromSome(v1941, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1943 = stdlib.safeAdd256(v1942, v1927);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1926, ctc1, v1943);
          null;
          const v1945 = true;
          const v1946 = await txn1.getOutput('arc200_transfer', 'v1945', ctc4, v1945);
          
          const v3721 = v1532;
          const v3723 = v1532.closed;
          if (v3723) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_transferFrom0_287': {
          const v2067 = v1718[1];
          
          break;
          }
        case 'deleteAllowanceBox0_287': {
          const v2240 = v1718[1];
          
          break;
          }
        case 'deleteBalanceBox0_287': {
          const v2413 = v1718[1];
          
          break;
          }
        case 'destroy0_287': {
          const v2586 = v1718[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
  switch (v1718[0]) {
    case 'arc200_approve0_287': {
      const v1721 = v1718[1];
      return;
      break;
      }
    case 'arc200_transfer0_287': {
      const v1894 = v1718[1];
      undefined /* setApiDetails */;
      ;
      const v1926 = v1894[stdlib.checkedBigNumberify('./index.rsh:146:10:spread', stdlib.UInt_max, '0')];
      const v1927 = v1894[stdlib.checkedBigNumberify('./index.rsh:146:10:spread', stdlib.UInt_max, '1')];
      const v1928 = stdlib.addressEq(v1926, v1504);
      const v1929 = v1928 ? false : true;
      const v1930 = v1506 ? true : v1929;
      stdlib.assert(v1930, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:147:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'arc200_transfer'
        });
      const v1932 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1717, ctc1), null);
      const v1933 = stdlib.fromSome(v1932, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1934 = stdlib.ge256(v1933, v1927);
      stdlib.assert(v1934, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v1940 = stdlib.safeSub256(v1933, v1927);
      await stdlib.mapSet(map0, ctc3, v1717, ctc1, v1940);
      const v1941 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1926, ctc1), null);
      const v1942 = stdlib.fromSome(v1941, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1943 = stdlib.safeAdd256(v1942, v1927);
      await stdlib.mapSet(map0, ctc3, v1926, ctc1, v1943);
      null;
      const v1945 = true;
      const v1946 = await txn1.getOutput('arc200_transfer', 'v1945', ctc4, v1945);
      if (v1038) {
        stdlib.protect(ctc0, await interact.out(v1894, v1946), {
          at: './index.rsh:146:11:application',
          fs: ['at ./index.rsh:146:11:application call to [unknown function] (defined at: ./index.rsh:146:11:function exp)', 'at ./index.rsh:158:12:application call to "k" (defined at: ./index.rsh:156:13:function exp)', 'at ./index.rsh:156:13:application call to [unknown function] (defined at: ./index.rsh:156:13:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v3721 = v1532;
      const v3723 = v1532.closed;
      if (v3723) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transferFrom0_287': {
      const v2067 = v1718[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_287': {
      const v2240 = v1718[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_287': {
      const v2413 = v1718[1];
      return;
      break;
      }
    case 'destroy0_287': {
      const v2586 = v1718[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc12,
    arc200_transfer0_287: ctc12,
    arc200_transferFrom0_287: ctc10,
    deleteAllowanceBox0_287: ctc11,
    deleteBalanceBox0_287: ctc13,
    destroy0_287: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1504, v1506, v1507, v1513, v1516, v1532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1593 = ctc.selfAddress();
  const v1595 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:167:54:application call to [unknown function] (defined at: ./index.rsh:167:54:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transferFrom0_287" (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v1596 = v1595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1597 = v1595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1598 = v1595[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1602 = stdlib.addressEq(v1596, v1504);
  const v1603 = v1602 ? false : true;
  stdlib.assert(v1603, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:167:54:application call to [unknown function] (defined at: ./index.rsh:167:54:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transferFrom0_287" (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'arc200_transferFrom'
    });
  const v1605 = stdlib.addressEq(v1597, v1504);
  const v1606 = v1605 ? false : true;
  stdlib.assert(v1606, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:167:54:application call to [unknown function] (defined at: ./index.rsh:167:54:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transferFrom0_287" (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'arc200_transferFrom'
    });
  const v1608 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1596, ctc1), null);
  const v1609 = stdlib.fromSome(v1608, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1610 = stdlib.ge256(v1609, v1598);
  stdlib.assert(v1610, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:167:54:application call to [unknown function] (defined at: ./index.rsh:167:54:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transferFrom0_287" (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v1612 = [v1596, v1593];
  const v1613 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1612, ctc1), null);
  const v1614 = stdlib.fromSome(v1613, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1615 = stdlib.ge256(v1614, v1598);
  stdlib.assert(v1615, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:167:54:application call to [unknown function] (defined at: ./index.rsh:167:54:function exp)', 'at ./index.rsh:115:29:application call to "runarc200_transferFrom0_287" (defined at: ./index.rsh:167:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v1626 = ['arc200_transferFrom0_287', v1595];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1504, v1506, v1507, v1513, v1516, v1532, v1626],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:167:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
      
      switch (v1718[0]) {
        case 'arc200_approve0_287': {
          const v1721 = v1718[1];
          
          break;
          }
        case 'arc200_transfer0_287': {
          const v1894 = v1718[1];
          
          break;
          }
        case 'arc200_transferFrom0_287': {
          const v2067 = v1718[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v2128 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '0')];
          const v2129 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '1')];
          const v2130 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '2')];
          const v2137 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2128, ctc1), null);
          const v2138 = stdlib.fromSome(v2137, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2141 = [v2128, v1717];
          const v2142 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v2141, ctc1), null);
          const v2143 = stdlib.fromSome(v2142, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2151 = stdlib.safeSub256(v2138, v2130);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2128, ctc1, v2151);
          const v2152 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2129, ctc1), null);
          const v2153 = stdlib.fromSome(v2152, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2154 = stdlib.safeAdd256(v2153, v2130);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2129, ctc1, v2154);
          null;
          const v2159 = stdlib.safeSub256(v2143, v2130);
          await stdlib.simMapSet(sim_r, 1, ctc11, v2141, ctc1, v2159);
          null;
          const v2161 = true;
          const v2162 = await txn1.getOutput('arc200_transferFrom', 'v2161', ctc4, v2161);
          
          const v3749 = v1532;
          const v3751 = v1532.closed;
          if (v3751) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deleteAllowanceBox0_287': {
          const v2240 = v1718[1];
          
          break;
          }
        case 'deleteBalanceBox0_287': {
          const v2413 = v1718[1];
          
          break;
          }
        case 'destroy0_287': {
          const v2586 = v1718[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
  switch (v1718[0]) {
    case 'arc200_approve0_287': {
      const v1721 = v1718[1];
      return;
      break;
      }
    case 'arc200_transfer0_287': {
      const v1894 = v1718[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_287': {
      const v2067 = v1718[1];
      undefined /* setApiDetails */;
      ;
      const v2128 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '0')];
      const v2129 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '1')];
      const v2130 = v2067[stdlib.checkedBigNumberify('./index.rsh:167:10:spread', stdlib.UInt_max, '2')];
      const v2131 = stdlib.addressEq(v2128, v1504);
      const v2132 = v2131 ? false : true;
      stdlib.assert(v2132, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'arc200_transferFrom'
        });
      const v2134 = stdlib.addressEq(v2129, v1504);
      const v2135 = v2134 ? false : true;
      stdlib.assert(v2135, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'arc200_transferFrom'
        });
      const v2137 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2128, ctc1), null);
      const v2138 = stdlib.fromSome(v2137, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2139 = stdlib.ge256(v2138, v2130);
      stdlib.assert(v2139, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v2141 = [v2128, v1717];
      const v2142 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2141, ctc1), null);
      const v2143 = stdlib.fromSome(v2142, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2144 = stdlib.ge256(v2143, v2130);
      stdlib.assert(v2144, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v2151 = stdlib.safeSub256(v2138, v2130);
      await stdlib.mapSet(map0, ctc3, v2128, ctc1, v2151);
      const v2152 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2129, ctc1), null);
      const v2153 = stdlib.fromSome(v2152, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2154 = stdlib.safeAdd256(v2153, v2130);
      await stdlib.mapSet(map0, ctc3, v2129, ctc1, v2154);
      null;
      const v2159 = stdlib.safeSub256(v2143, v2130);
      await stdlib.mapSet(map1, ctc11, v2141, ctc1, v2159);
      null;
      const v2161 = true;
      const v2162 = await txn1.getOutput('arc200_transferFrom', 'v2161', ctc4, v2161);
      if (v1038) {
        stdlib.protect(ctc0, await interact.out(v2067, v2162), {
          at: './index.rsh:167:11:application',
          fs: ['at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)', 'at ./index.rsh:184:12:application call to "k" (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v3749 = v1532;
      const v3751 = v1532.closed;
      if (v3751) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_287': {
      const v2240 = v1718[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_287': {
      const v2413 = v1718[1];
      return;
      break;
      }
    case 'destroy0_287': {
      const v2586 = v1718[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteAllowanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteAllowanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteAllowanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc11,
    arc200_transfer0_287: ctc11,
    arc200_transferFrom0_287: ctc12,
    deleteAllowanceBox0_287: ctc10,
    deleteBalanceBox0_287: ctc13,
    destroy0_287: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1504, v1506, v1507, v1513, v1516, v1532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1675 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:227:50:application call to [unknown function] (defined at: ./index.rsh:227:50:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteAllowanceBox0_287" (defined at: ./index.rsh:227:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1676 = v1675[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1677 = v1675[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1680 = [v1676, v1677];
  const v1681 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1680, ctc1), null);
  const v1682 = {
    None: 0,
    Some: 1
    }[v1681[0]];
  const v1683 = stdlib.eq(v1682, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1683, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:227:50:application call to [unknown function] (defined at: ./index.rsh:227:50:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteAllowanceBox0_287" (defined at: ./index.rsh:227:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1687 = stdlib.fromSome(v1681, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1688 = stdlib.eq256(v1687, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1688, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:227:50:application call to [unknown function] (defined at: ./index.rsh:227:50:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteAllowanceBox0_287" (defined at: ./index.rsh:227:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v1697 = ['deleteAllowanceBox0_287', v1675];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1504, v1506, v1507, v1513, v1516, v1532, v1697],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:227:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
      
      switch (v1718[0]) {
        case 'arc200_approve0_287': {
          const v1721 = v1718[1];
          
          break;
          }
        case 'arc200_transfer0_287': {
          const v1894 = v1718[1];
          
          break;
          }
        case 'arc200_transferFrom0_287': {
          const v2067 = v1718[1];
          
          break;
          }
        case 'deleteAllowanceBox0_287': {
          const v2240 = v1718[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v2345 = v2240[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '0')];
          const v2346 = v2240[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '1')];
          const v2347 = [v2345, v2346];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v2347, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc10, v2347, ctc1, undefined /* Nothing */);
          null;
          const v2360 = true;
          const v2361 = await txn1.getOutput('deleteAllowanceBox', 'v2360', ctc4, v2360);
          
          const v3777 = v1532;
          const v3779 = v1532.closed;
          if (v3779) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deleteBalanceBox0_287': {
          const v2413 = v1718[1];
          
          break;
          }
        case 'destroy0_287': {
          const v2586 = v1718[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
  switch (v1718[0]) {
    case 'arc200_approve0_287': {
      const v1721 = v1718[1];
      return;
      break;
      }
    case 'arc200_transfer0_287': {
      const v1894 = v1718[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_287': {
      const v2067 = v1718[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_287': {
      const v2240 = v1718[1];
      undefined /* setApiDetails */;
      ;
      const v2345 = v2240[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '0')];
      const v2346 = v2240[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '1')];
      const v2347 = [v2345, v2346];
      const v2348 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2347, ctc1), null);
      const v2349 = {
        None: 0,
        Some: 1
        }[v2348[0]];
      const v2350 = stdlib.eq(v2349, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2350, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v2354 = stdlib.fromSome(v2348, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2355 = stdlib.eq256(v2354, stdlib.checkedBigNumberify('./index.rsh:233:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2355, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc10, v2347, ctc1, undefined /* Nothing */);
      null;
      const v2360 = true;
      const v2361 = await txn1.getOutput('deleteAllowanceBox', 'v2360', ctc4, v2360);
      if (v1038) {
        stdlib.protect(ctc0, await interact.out(v2240, v2361), {
          at: './index.rsh:227:11:application',
          fs: ['at ./index.rsh:227:11:application call to [unknown function] (defined at: ./index.rsh:227:11:function exp)', 'at ./index.rsh:240:12:application call to "k" (defined at: ./index.rsh:237:13:function exp)', 'at ./index.rsh:237:13:application call to [unknown function] (defined at: ./index.rsh:237:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v3777 = v1532;
      const v3779 = v1532.closed;
      if (v3779) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_287': {
      const v2413 = v1718[1];
      return;
      break;
      }
    case 'destroy0_287': {
      const v2586 = v1718[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteBalanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteBalanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteBalanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc11,
    arc200_transfer0_287: ctc11,
    arc200_transferFrom0_287: ctc12,
    deleteAllowanceBox0_287: ctc13,
    deleteBalanceBox0_287: ctc10,
    destroy0_287: ctc14
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1504, v1506, v1507, v1513, v1516, v1532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1652 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:210:38:application call to [unknown function] (defined at: ./index.rsh:210:38:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteBalanceBox0_287" (defined at: ./index.rsh:210:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1653 = v1652[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1655 = stdlib.addressEq(v1653, v1504);
  const v1656 = v1655 ? false : true;
  stdlib.assert(v1656, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:210:38:application call to [unknown function] (defined at: ./index.rsh:210:38:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteBalanceBox0_287" (defined at: ./index.rsh:210:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v1658 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1653, ctc1), null);
  const v1659 = {
    None: 0,
    Some: 1
    }[v1658[0]];
  const v1660 = stdlib.eq(v1659, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1660, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:210:38:application call to [unknown function] (defined at: ./index.rsh:210:38:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteBalanceBox0_287" (defined at: ./index.rsh:210:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1663 = stdlib.fromSome(v1658, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1664 = stdlib.eq256(v1663, stdlib.checkedBigNumberify('./index.rsh:213:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1664, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:210:38:application call to [unknown function] (defined at: ./index.rsh:210:38:function exp)', 'at ./index.rsh:115:29:application call to "rundeleteBalanceBox0_287" (defined at: ./index.rsh:210:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v1671 = ['deleteBalanceBox0_287', v1652];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1504, v1506, v1507, v1513, v1516, v1532, v1671],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:210:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
      
      switch (v1718[0]) {
        case 'arc200_approve0_287': {
          const v1721 = v1718[1];
          
          break;
          }
        case 'arc200_transfer0_287': {
          const v1894 = v1718[1];
          
          break;
          }
        case 'arc200_transferFrom0_287': {
          const v2067 = v1718[1];
          
          break;
          }
        case 'deleteAllowanceBox0_287': {
          const v2240 = v1718[1];
          
          break;
          }
        case 'deleteBalanceBox0_287': {
          const v2413 = v1718[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2543 = v2413[stdlib.checkedBigNumberify('./index.rsh:210:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2543, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2543, ctc1, undefined /* Nothing */);
          null;
          const v2556 = true;
          const v2557 = await txn1.getOutput('deleteBalanceBox', 'v2556', ctc4, v2556);
          
          const v3805 = v1532;
          const v3807 = v1532.closed;
          if (v3807) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'destroy0_287': {
          const v2586 = v1718[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
  switch (v1718[0]) {
    case 'arc200_approve0_287': {
      const v1721 = v1718[1];
      return;
      break;
      }
    case 'arc200_transfer0_287': {
      const v1894 = v1718[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_287': {
      const v2067 = v1718[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_287': {
      const v2240 = v1718[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_287': {
      const v2413 = v1718[1];
      undefined /* setApiDetails */;
      ;
      const v2543 = v2413[stdlib.checkedBigNumberify('./index.rsh:210:10:spread', stdlib.UInt_max, '0')];
      const v2544 = stdlib.addressEq(v2543, v1504);
      const v2545 = v2544 ? false : true;
      stdlib.assert(v2545, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:211:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v2547 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2543, ctc1), null);
      const v2548 = {
        None: 0,
        Some: 1
        }[v2547[0]];
      const v2549 = stdlib.eq(v2548, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2549, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:212:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2552 = stdlib.fromSome(v2547, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2553 = stdlib.eq256(v2552, stdlib.checkedBigNumberify('./index.rsh:213:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2553, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v2543, ctc1, undefined /* Nothing */);
      null;
      const v2556 = true;
      const v2557 = await txn1.getOutput('deleteBalanceBox', 'v2556', ctc4, v2556);
      if (v1038) {
        stdlib.protect(ctc0, await interact.out(v2413, v2557), {
          at: './index.rsh:210:11:application',
          fs: ['at ./index.rsh:210:11:application call to [unknown function] (defined at: ./index.rsh:210:11:function exp)', 'at ./index.rsh:218:12:application call to "k" (defined at: ./index.rsh:215:13:function exp)', 'at ./index.rsh:215:13:application call to [unknown function] (defined at: ./index.rsh:215:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v3805 = v1532;
      const v3807 = v1532.closed;
      if (v3807) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_287': {
      const v2586 = v1718[1];
      return;
      break;
      }
    }
  
  
  };
export async function _destroy3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _destroy3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _destroy3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_287: ctc11,
    arc200_transfer0_287: ctc11,
    arc200_transferFrom0_287: ctc12,
    deleteAllowanceBox0_287: ctc13,
    deleteBalanceBox0_287: ctc14,
    destroy0_287: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v1504, v1506, v1507, v1513, v1516, v1532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1701 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:250:25:application call to [unknown function] (defined at: ./index.rsh:250:25:function exp)', 'at ./index.rsh:115:29:application call to "rundestroy0_287" (defined at: ./index.rsh:250:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1702 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v1703 = {
    None: 0,
    Some: 1
    }[v1702[0]];
  const v1704 = stdlib.eq(v1703, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1704, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:250:25:application call to [unknown function] (defined at: ./index.rsh:250:25:function exp)', 'at ./index.rsh:115:29:application call to "rundestroy0_287" (defined at: ./index.rsh:250:10:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v1709 = ['destroy0_287', v1701];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1504, v1506, v1507, v1513, v1516, v1532, v1709],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:250:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
      
      switch (v1718[0]) {
        case 'arc200_approve0_287': {
          const v1721 = v1718[1];
          
          break;
          }
        case 'arc200_transfer0_287': {
          const v1894 = v1718[1];
          
          break;
          }
        case 'arc200_transferFrom0_287': {
          const v2067 = v1718[1];
          
          break;
          }
        case 'deleteAllowanceBox0_287': {
          const v2240 = v1718[1];
          
          break;
          }
        case 'deleteBalanceBox0_287': {
          const v2413 = v1718[1];
          
          break;
          }
        case 'destroy0_287': {
          const v2586 = v1718[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1504, ctc1, undefined /* Nothing */);
          null;
          const v2742 = null;
          const v2743 = await txn1.getOutput('destroy', 'v2742', ctc0, v2742);
          
          const v2749 = v1532.decimals;
          const v2750 = v1532.enableZeroAddressBurn;
          const v2751 = v1532.manager;
          const v2752 = v1532.name;
          const v2753 = v1532.symbol;
          const v2754 = v1532.totalSupply;
          const v2755 = v1532.zeroAddress;
          const v2756 = {
            closed: true,
            decimals: v2749,
            enableZeroAddressBurn: v2750,
            manager: v2751,
            name: v2752,
            symbol: v2753,
            totalSupply: v2754,
            zeroAddress: v2755
            };
          const v3833 = v2756;
          const v3835 = v2756.closed;
          if (v3835) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1718], secs: v1720, time: v1719, didSend: v1038, from: v1717 } = txn1;
  switch (v1718[0]) {
    case 'arc200_approve0_287': {
      const v1721 = v1718[1];
      return;
      break;
      }
    case 'arc200_transfer0_287': {
      const v1894 = v1718[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_287': {
      const v2067 = v1718[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_287': {
      const v2240 = v1718[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_287': {
      const v2413 = v1718[1];
      return;
      break;
      }
    case 'destroy0_287': {
      const v2586 = v1718[1];
      undefined /* setApiDetails */;
      ;
      const v2738 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v2739 = {
        None: 0,
        Some: 1
        }[v2738[0]];
      const v2740 = stdlib.eq(v2739, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2740, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:251:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1504, ctc1, undefined /* Nothing */);
      null;
      const v2742 = null;
      const v2743 = await txn1.getOutput('destroy', 'v2742', ctc0, v2742);
      if (v1038) {
        stdlib.protect(ctc0, await interact.out(v2586, v2743), {
          at: './index.rsh:250:11:application',
          fs: ['at ./index.rsh:250:11:application call to [unknown function] (defined at: ./index.rsh:250:11:function exp)', 'at ./index.rsh:259:12:application call to "k" (defined at: ./index.rsh:256:13:function exp)', 'at ./index.rsh:256:13:application call to [unknown function] (defined at: ./index.rsh:256:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v2749 = v1532.decimals;
      const v2750 = v1532.enableZeroAddressBurn;
      const v2751 = v1532.manager;
      const v2752 = v1532.name;
      const v2753 = v1532.symbol;
      const v2754 = v1532.totalSupply;
      const v2755 = v1532.zeroAddress;
      const v2756 = {
        closed: true,
        decimals: v2749,
        enableZeroAddressBurn: v2750,
        manager: v2751,
        name: v2752,
        symbol: v2753,
        totalSupply: v2754,
        zeroAddress: v2755
        };
      const v3833 = v2756;
      const v3835 = v2756.closed;
      if (v3835) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function arc200_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_approve3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteAllowanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteAllowanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteAllowanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteAllowanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteBalanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteBalanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteBalanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteBalanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function destroy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for destroy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for destroy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _destroy3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`],
    pure: [`arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `hasAllowance(address,address)byte`, `hasBalance(address)byte`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`],
    sigs: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `hasAllowance(address,address)byte`, `hasBalance(address)byte`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAED1N4BCMTbASYHAQAACAAAAAAAAAABAQEBAgR5g8NcBBlp+GUxGEEGlilkSSJbNQEhBFs1AihkK2RQJwRkUIIRBBxTeK0EZDbc4ARlfRPsBGpDtgUEguVzxASPlRtZBJyGoYUEnNaFWAS2rholBLuzGfMEvDwVbwTLOkyRBNChzBUE6KxXuATsmWBBBPNrTb8E/DC2pDYaAI4RBlsGcAZzBeYGaAabBrAGqAZ2Bk4F+AazBnwGwAZ5Bo4HIwA0C1cAIDUNNAtXICA1DDEANBQTRDQNNBQTRCEFKjEANA1QUAE0DIgHZycGMQBQNA1QNAxQsCM1C4AIAAAAAAAABs80CxZRBwhQsDQLFlEHCDUEMgY1DjQPVwABF0EGeDEZgQUSRIgHXyIyCjIJiAdnNANAAAqABBUffHU0BFCwI0M0C1cAIDUNNAtXICA1DDQTNA00FBMRRDIDKTIDKDEAUIgGsogG4Ek1CzQMp0QlKDEAUDQLNAyhiAbjiAbSJSg0DVAyAykyAyg0DVCIBoeIBrU0DKCIBsaIBrUnBTEAUDQNUDQMULAjNQuACAAAAAAAAAeZNAsWUQcIULA0CxZRBwg1BDIGNQ5C/0s0C1cAIDUVNAtXICA1DTQLV0AgNQw0FTQUE0Q0DTQUE0QyAykyAyg0FVCIBh6IBkxJNRc0DKdENBUxAFA1FjIDKTIDKjQWUAGIBgCIBi5JNQs0DKdEJSg0FVA0FzQMoYgGMYgGICUoNA1QMgMpMgMoNA1QiAXViAYDNAygiAYUiAYDJwU0FVA0DVA0DFCwNAs0DKGIBf01DSEFKjQWUAE0DYgF4ScGNBVQMQBQNA1QsCM1C4AIAAAAAAAACHE0CxZRBwhQsDQLFlEHCDUEMgY1DkL+dzQLVwAgNQ00C1cgIDUMNA00DFA1FSkyAyo0FVABiAVXSTULIlUjEkQyAzQLiAV5MgOoRCEFKjQVUAGIBYyABC6u9Ek0DVA0DFCwIzULgAgAAAAAAAAJODQLFlEHCFCwNAsWUQcINQQyBjUOQv4JNA1XASBJNQs0FBNEKTIDKDQLUIgE80k1DCJVIxJEMgM0DIgFFTIDqEQlKDQLUIgFKoAElEdsSjQLULAjNQuACAAAAAAAAAn8NAsWUQcIULA0CxZRBwg1BDIGNQ5C/aqAIQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJVIxJEJSg0FFCIBMyABExtpvKwKTULgAgAAAAAAAAKtjQLULA0CzUEKzQPVwEIUDQPVwkBUDQPVwogUDQPVyogUDQPV0oIUDQPV1IgUDQPV3IgUDIGNQ41D0L9KjQBJBJEiAQtMgMpMgMqNAw0C1BQAYgEEogEQDUEMRkiEkRC/SQhBK8oNAw0C1BQMgNQUDULJDQBEkSIA/g0CyJbNQw0C1cIYTUNgATZHk3aNAwWUDQNULA0DIgELjQNIlWNBgNpA3MDfQMsAzYDOUL8YTQBJBJEiAO7MgMpMgMoNAtQiAOkiAPSNQRC/480ASQSRIgDnzQQFjUEQv9/NAEkEkSIA480ElcIIDUEQv9tNAEkEkSIA300ElcoCDUEQv9bNAEkEkSIA2s0ETUEQv9MIQSvKzQMNAtQUDIDUFA1C0L/USEErycENA00DFA0C1BQUDULQv89IQSvgAEDNAw0C1BQMgNQUDULQv8oIQSvgAEENAtQgUCvUFA1C0L/FYBpAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/qU0ASQSRIgCnSkyAyo0DDQLUFABiAKEIlUjEhZRBwg1BEL+ajQBJBJEiAJ6KTIDKDQLUIgCZSJVIxIWUQcINQRC/ks0ASQSRIgCWzQPVyogNA9XSghQNA9XAQhQNA9XUiBQNA9XciBQNA9XCiBQNA9XCQFQNA9XAAFQNQRC/g80DCJbNQ00DFcIIDUUNAxXKCA1CzQMV0gBFzUTNAxXSVA1EoAE5Ep7MjQNFlA0FFA0C1A0ExZRBwhQNBJQsDQNiAI6NBQ0CxNENBJXMCBJNREyA6VENBIiW0k1EIGAAg5EJSg0C1A0EYgB6yUoNBRQMgOIAeEnBTQUUDQLUDQRULAoNBAWUDQTFlEHCFA0C1A0ElcIIFA0ElcoCFA0EVA0FFAyBjUONQ9C+nGIAcuBoI0GiAHSNhoBNQxC/0OIAbk2GgE1C0L9XyIxNBJEgQQxNRJEIjE2EkQiMTcSRIgBmYGrAq8iIjUCNQEoSwFXAH9nK0sBV39/ZycETFf+LWcpNAEWNAIWUGcxGSISRIgBfUL6IzYaATYaAjULNQxC/NI2GgE2GgI1CzUMQvzqNhoBNQtC/S9C/UhC/VVC/WRC/XM2GgE2GgI2GgM1CzUMNQ1C/YM2GgE2GgI1CzUMQv1jNhoBNhoCNQs1DEL9fTYaATULQv2KQv2aNhoBNhoCNQs1DEL9/TYaATULQv4YNA1XAUA1C0L7DkL7eUL71TQUNBMWUQcIUDQSUDQRUDQQFlA0D1AkMgZC/y1ITL9IiSKyASOyELIHsgiziTQNVwFANQtC+PI0DVcBQDULQvlpNA1XAWA1C0L56UL92UiJTAlJNQYyCYgAookJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIm+SRZRBwhFBE1QiUlXACA1FElXIAEXNRNJVyFQNRJJV3EgNRFJgZEBWzUQV5mSNQ+JSVcBAEwiVU2JTEm9QP9dSwOIACZC/1VJFYEgTAmvTFCJvCJOAk00Bwg1B4kjNQOJSSISTDQCEhFEiTQGCDUGiTQGNAdKD0H/V0L/X7FC/yGxsglC/xs=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `520`,
    1001: `521`,
    1002: `521`,
    1003: `522`,
    1004: `522`,
    1005: `522`,
    1006: `524`,
    1007: `524`,
    1008: `525`,
    1009: `526`,
    101: `24`,
    1010: `527`,
    1011: `530`,
    1012: `530`,
    1013: `530`,
    1014: `531`,
    1015: `531`,
    1016: `533`,
    1017: `534`,
    1018: `534`,
    1019: `535`,
    102: `24`,
    1020: `536`,
    1021: `536`,
    1022: `537`,
    1023: `537`,
    1024: `538`,
    1025: `539`,
    1026: `540`,
    1027: `541`,
    1028: `541`,
    1029: `541`,
    103: `24`,
    1030: `542`,
    1031: `542`,
    1032: `542`,
    1033: `543`,
    1034: `543`,
    1035: `545`,
    1036: `545`,
    1037: `546`,
    1038: `547`,
    1039: `548`,
    104: `24`,
    1040: `550`,
    1041: `550`,
    1042: `550`,
    1043: `552`,
    1044: `552`,
    1045: `553`,
    1046: `554`,
    1047: `555`,
    1048: `555`,
    1049: `556`,
    105: `24`,
    1050: `556`,
    1051: `557`,
    1052: `558`,
    1053: `559`,
    1054: `559`,
    1055: `560`,
    1056: `561`,
    1057: `562`,
    1058: `562`,
    1059: `564`,
    106: `24`,
    1060: `565`,
    1061: `565`,
    1062: `566`,
    1063: `567`,
    1064: `568`,
    1065: `568`,
    1066: `568`,
    1067: `569`,
    1068: `569`,
    1069: `570`,
    107: `24`,
    1070: `571`,
    1071: `572`,
    1072: `572`,
    1073: `573`,
    1074: `573`,
    1075: `574`,
    1076: `574`,
    1077: `574`,
    1078: `575`,
    1079: `575`,
    108: `24`,
    1080: `576`,
    1081: `576`,
    1082: `576`,
    1083: `576`,
    1084: `576`,
    1085: `576`,
    1086: `577`,
    1087: `577`,
    1088: `578`,
    1089: `579`,
    109: `24`,
    1090: `580`,
    1091: `580`,
    1092: `581`,
    1093: `582`,
    1094: `584`,
    1095: `584`,
    1096: `585`,
    1097: `585`,
    1098: `585`,
    1099: `586`,
    11: `2`,
    110: `24`,
    1100: `586`,
    1101: `587`,
    1102: `588`,
    1103: `589`,
    1104: `589`,
    1105: `589`,
    1106: `589`,
    1107: `589`,
    1108: `589`,
    1109: `589`,
    111: `24`,
    1110: `589`,
    1111: `589`,
    1112: `589`,
    1113: `589`,
    1114: `589`,
    1115: `589`,
    1116: `589`,
    1117: `590`,
    1118: `590`,
    1119: `590`,
    112: `24`,
    1120: `592`,
    1121: `592`,
    1122: `593`,
    1123: `594`,
    1124: `595`,
    1125: `598`,
    1126: `598`,
    1127: `598`,
    1128: `599`,
    1129: `599`,
    113: `24`,
    1130: `601`,
    1131: `602`,
    1132: `602`,
    1133: `603`,
    1134: `604`,
    1135: `604`,
    1136: `605`,
    1137: `606`,
    1138: `606`,
    1139: `606`,
    114: `24`,
    1140: `607`,
    1141: `607`,
    1142: `607`,
    1143: `608`,
    1144: `608`,
    1145: `609`,
    1146: `609`,
    1147: `609`,
    1148: `611`,
    1149: `611`,
    115: `24`,
    1150: `612`,
    1151: `613`,
    1152: `614`,
    1153: `617`,
    1154: `617`,
    1155: `617`,
    1156: `618`,
    1157: `618`,
    1158: `619`,
    1159: `620`,
    116: `24`,
    1160: `620`,
    1161: `621`,
    1162: `621`,
    1163: `621`,
    1164: `623`,
    1165: `623`,
    1166: `624`,
    1167: `625`,
    1168: `626`,
    1169: `629`,
    117: `24`,
    1170: `629`,
    1171: `629`,
    1172: `630`,
    1173: `630`,
    1174: `631`,
    1175: `631`,
    1176: `631`,
    1177: `632`,
    1178: `632`,
    1179: `633`,
    118: `24`,
    1180: `633`,
    1181: `633`,
    1182: `635`,
    1183: `635`,
    1184: `636`,
    1185: `637`,
    1186: `638`,
    1187: `641`,
    1188: `641`,
    1189: `641`,
    119: `24`,
    1190: `642`,
    1191: `642`,
    1192: `643`,
    1193: `643`,
    1194: `643`,
    1195: `644`,
    1196: `644`,
    1197: `645`,
    1198: `645`,
    1199: `645`,
    12: `2`,
    120: `24`,
    1200: `647`,
    1201: `647`,
    1202: `648`,
    1203: `649`,
    1204: `650`,
    1205: `653`,
    1206: `653`,
    1207: `653`,
    1208: `654`,
    1209: `654`,
    121: `24`,
    1210: `655`,
    1211: `655`,
    1212: `656`,
    1213: `656`,
    1214: `656`,
    1215: `658`,
    1216: `658`,
    1217: `659`,
    1218: `660`,
    1219: `661`,
    122: `24`,
    1220: `661`,
    1221: `662`,
    1222: `662`,
    1223: `663`,
    1224: `664`,
    1225: `665`,
    1226: `665`,
    1227: `666`,
    1228: `667`,
    1229: `668`,
    123: `24`,
    1230: `668`,
    1231: `669`,
    1232: `669`,
    1233: `669`,
    1234: `671`,
    1235: `671`,
    1236: `672`,
    1237: `673`,
    1238: `673`,
    1239: `674`,
    124: `24`,
    1240: `674`,
    1241: `675`,
    1242: `675`,
    1243: `676`,
    1244: `677`,
    1245: `677`,
    1246: `678`,
    1247: `679`,
    1248: `680`,
    1249: `681`,
    125: `24`,
    1250: `681`,
    1251: `682`,
    1252: `682`,
    1253: `682`,
    1254: `684`,
    1255: `684`,
    1256: `685`,
    1257: `686`,
    1258: `686`,
    1259: `686`,
    126: `24`,
    1260: `687`,
    1261: `687`,
    1262: `688`,
    1263: `688`,
    1264: `689`,
    1265: `690`,
    1266: `691`,
    1267: `691`,
    1268: `692`,
    1269: `693`,
    127: `24`,
    1270: `694`,
    1271: `694`,
    1272: `695`,
    1273: `695`,
    1274: `695`,
    1275: `697`,
    1276: `697`,
    1277: `698`,
    1278: `699`,
    1279: `699`,
    128: `24`,
    1280: `699`,
    1281: `700`,
    1282: `700`,
    1283: `701`,
    1284: `702`,
    1285: `702`,
    1286: `703`,
    1287: `704`,
    1288: `705`,
    1289: `706`,
    129: `24`,
    1290: `706`,
    1291: `707`,
    1292: `707`,
    1293: `707`,
    1294: `709`,
    1295: `709`,
    1296: `709`,
    1297: `709`,
    1298: `709`,
    1299: `709`,
    13: `2`,
    130: `24`,
    1300: `709`,
    1301: `709`,
    1302: `709`,
    1303: `709`,
    1304: `709`,
    1305: `709`,
    1306: `709`,
    1307: `709`,
    1308: `709`,
    1309: `709`,
    131: `24`,
    1310: `709`,
    1311: `709`,
    1312: `709`,
    1313: `709`,
    1314: `709`,
    1315: `709`,
    1316: `709`,
    1317: `709`,
    1318: `709`,
    1319: `709`,
    132: `24`,
    1320: `709`,
    1321: `709`,
    1322: `709`,
    1323: `709`,
    1324: `709`,
    1325: `709`,
    1326: `709`,
    1327: `709`,
    1328: `709`,
    1329: `709`,
    133: `24`,
    1330: `709`,
    1331: `709`,
    1332: `709`,
    1333: `709`,
    1334: `709`,
    1335: `709`,
    1336: `709`,
    1337: `709`,
    1338: `709`,
    1339: `709`,
    134: `24`,
    1340: `709`,
    1341: `709`,
    1342: `709`,
    1343: `709`,
    1344: `709`,
    1345: `709`,
    1346: `709`,
    1347: `709`,
    1348: `709`,
    1349: `709`,
    135: `24`,
    1350: `709`,
    1351: `709`,
    1352: `709`,
    1353: `709`,
    1354: `709`,
    1355: `709`,
    1356: `709`,
    1357: `709`,
    1358: `709`,
    1359: `709`,
    136: `24`,
    1360: `709`,
    1361: `709`,
    1362: `709`,
    1363: `709`,
    1364: `709`,
    1365: `709`,
    1366: `709`,
    1367: `709`,
    1368: `709`,
    1369: `709`,
    137: `24`,
    1370: `709`,
    1371: `709`,
    1372: `709`,
    1373: `709`,
    1374: `709`,
    1375: `709`,
    1376: `709`,
    1377: `709`,
    1378: `709`,
    1379: `709`,
    138: `24`,
    1380: `709`,
    1381: `709`,
    1382: `709`,
    1383: `709`,
    1384: `709`,
    1385: `709`,
    1386: `709`,
    1387: `709`,
    1388: `709`,
    1389: `709`,
    139: `24`,
    1390: `709`,
    1391: `709`,
    1392: `709`,
    1393: `709`,
    1394: `709`,
    1395: `709`,
    1396: `709`,
    1397: `709`,
    1398: `709`,
    1399: `709`,
    14: `2`,
    140: `24`,
    1400: `709`,
    1401: `710`,
    1402: `710`,
    1403: `711`,
    1404: `711`,
    1405: `711`,
    1406: `713`,
    1407: `713`,
    1408: `714`,
    1409: `715`,
    141: `24`,
    1410: `716`,
    1411: `719`,
    1412: `719`,
    1413: `719`,
    1414: `721`,
    1415: `722`,
    1416: `722`,
    1417: `723`,
    1418: `724`,
    1419: `724`,
    142: `24`,
    1420: `725`,
    1421: `725`,
    1422: `726`,
    1423: `727`,
    1424: `728`,
    1425: `729`,
    1426: `729`,
    1427: `729`,
    1428: `730`,
    1429: `731`,
    143: `24`,
    1430: `732`,
    1431: `733`,
    1432: `734`,
    1433: `735`,
    1434: `735`,
    1435: `735`,
    1436: `736`,
    1437: `736`,
    1438: `737`,
    1439: `737`,
    144: `24`,
    1440: `737`,
    1441: `739`,
    1442: `739`,
    1443: `740`,
    1444: `741`,
    1445: `742`,
    1446: `745`,
    1447: `745`,
    1448: `745`,
    1449: `747`,
    145: `24`,
    1450: `748`,
    1451: `748`,
    1452: `749`,
    1453: `750`,
    1454: `750`,
    1455: `751`,
    1456: `752`,
    1457: `752`,
    1458: `752`,
    1459: `753`,
    146: `24`,
    1460: `754`,
    1461: `755`,
    1462: `756`,
    1463: `757`,
    1464: `758`,
    1465: `758`,
    1466: `758`,
    1467: `759`,
    1468: `759`,
    1469: `760`,
    147: `24`,
    1470: `760`,
    1471: `760`,
    1472: `762`,
    1473: `762`,
    1474: `763`,
    1475: `764`,
    1476: `765`,
    1477: `768`,
    1478: `768`,
    1479: `768`,
    148: `24`,
    1480: `769`,
    1481: `769`,
    1482: `770`,
    1483: `770`,
    1484: `770`,
    1485: `771`,
    1486: `771`,
    1487: `772`,
    1488: `772`,
    1489: `772`,
    149: `24`,
    1490: `773`,
    1491: `774`,
    1492: `774`,
    1493: `775`,
    1494: `775`,
    1495: `775`,
    1496: `776`,
    1497: `777`,
    1498: `777`,
    1499: `778`,
    15: `2`,
    150: `24`,
    1500: `778`,
    1501: `778`,
    1502: `779`,
    1503: `780`,
    1504: `780`,
    1505: `781`,
    1506: `781`,
    1507: `781`,
    1508: `782`,
    1509: `783`,
    151: `24`,
    1510: `783`,
    1511: `784`,
    1512: `784`,
    1513: `784`,
    1514: `785`,
    1515: `786`,
    1516: `786`,
    1517: `787`,
    1518: `787`,
    1519: `787`,
    152: `24`,
    1520: `788`,
    1521: `789`,
    1522: `789`,
    1523: `790`,
    1524: `790`,
    1525: `790`,
    1526: `791`,
    1527: `792`,
    1528: `792`,
    1529: `793`,
    153: `24`,
    1530: `793`,
    1531: `793`,
    1532: `795`,
    1533: `795`,
    1534: `796`,
    1535: `797`,
    1536: `798`,
    1537: `798`,
    1538: `799`,
    1539: `799`,
    154: `25`,
    1540: `800`,
    1541: `800`,
    1542: `800`,
    1543: `801`,
    1544: `801`,
    1545: `802`,
    1546: `802`,
    1547: `803`,
    1548: `803`,
    1549: `803`,
    155: `25`,
    1550: `804`,
    1551: `804`,
    1552: `805`,
    1553: `805`,
    1554: `806`,
    1555: `806`,
    1556: `806`,
    1557: `807`,
    1558: `808`,
    1559: `808`,
    156: `25`,
    1560: `809`,
    1561: `809`,
    1562: `810`,
    1563: `810`,
    1564: `810`,
    1565: `811`,
    1566: `811`,
    1567: `812`,
    1568: `812`,
    1569: `812`,
    157: `26`,
    1570: `812`,
    1571: `812`,
    1572: `812`,
    1573: `813`,
    1574: `813`,
    1575: `814`,
    1576: `815`,
    1577: `816`,
    1578: `816`,
    1579: `817`,
    158: `26`,
    1580: `818`,
    1581: `818`,
    1582: `819`,
    1583: `820`,
    1584: `820`,
    1585: `821`,
    1586: `822`,
    1587: `822`,
    1588: `822`,
    1589: `823`,
    159: `26`,
    1590: `824`,
    1591: `824`,
    1592: `825`,
    1593: `826`,
    1594: `828`,
    1595: `828`,
    1596: `829`,
    1597: `829`,
    1598: `829`,
    1599: `830`,
    16: `2`,
    160: `26`,
    1600: `830`,
    1601: `831`,
    1602: `831`,
    1603: `832`,
    1604: `833`,
    1605: `837`,
    1606: `837`,
    1607: `838`,
    1608: `838`,
    1609: `838`,
    161: `26`,
    1610: `839`,
    1611: `840`,
    1612: `840`,
    1613: `841`,
    1614: `841`,
    1615: `842`,
    1616: `843`,
    1617: `847`,
    1618: `847`,
    1619: `848`,
    162: `26`,
    1620: `849`,
    1621: `850`,
    1622: `851`,
    1623: `851`,
    1624: `852`,
    1625: `852`,
    1626: `852`,
    1627: `853`,
    1628: `854`,
    1629: `859`,
    163: `26`,
    1630: `860`,
    1631: `861`,
    1632: `861`,
    1633: `862`,
    1634: `863`,
    1635: `863`,
    1636: `864`,
    1637: `864`,
    1638: `864`,
    1639: `866`,
    164: `26`,
    1640: `867`,
    1641: `868`,
    1642: `868`,
    1643: `869`,
    1644: `870`,
    1645: `870`,
    1646: `871`,
    1647: `871`,
    1648: `871`,
    1649: `872`,
    165: `26`,
    1650: `872`,
    1651: `873`,
    1652: `873`,
    1653: `874`,
    1654: `875`,
    1655: `875`,
    1656: `876`,
    1657: `877`,
    1658: `877`,
    1659: `878`,
    166: `26`,
    1660: `879`,
    1661: `881`,
    1662: `882`,
    1663: `882`,
    1664: `883`,
    1665: `884`,
    1666: `885`,
    1667: `885`,
    1668: `886`,
    1669: `887`,
    167: `26`,
    1670: `887`,
    1671: `887`,
    1672: `888`,
    1673: `889`,
    1674: `889`,
    1675: `890`,
    1676: `891`,
    1677: `891`,
    1678: `892`,
    1679: `892`,
    168: `26`,
    1680: `892`,
    1681: `893`,
    1682: `894`,
    1683: `894`,
    1684: `895`,
    1685: `895`,
    1686: `895`,
    1687: `896`,
    1688: `897`,
    1689: `897`,
    169: `26`,
    1690: `898`,
    1691: `899`,
    1692: `899`,
    1693: `900`,
    1694: `901`,
    1695: `901`,
    1696: `902`,
    1697: `902`,
    1698: `903`,
    1699: `903`,
    17: `2`,
    170: `26`,
    1700: `904`,
    1701: `904`,
    1702: `904`,
    1703: `906`,
    1704: `906`,
    1705: `906`,
    1706: `907`,
    1707: `907`,
    1708: `907`,
    1709: `907`,
    171: `26`,
    1710: `908`,
    1711: `908`,
    1712: `908`,
    1713: `909`,
    1714: `909`,
    1715: `909`,
    1716: `910`,
    1717: `910`,
    1718: `911`,
    1719: `911`,
    172: `26`,
    1720: `911`,
    1721: `913`,
    1722: `913`,
    1723: `913`,
    1724: `914`,
    1725: `914`,
    1726: `914`,
    1727: `915`,
    1728: `915`,
    1729: `916`,
    173: `26`,
    1730: `916`,
    1731: `916`,
    1732: `918`,
    1733: `919`,
    1734: `919`,
    1735: `920`,
    1736: `921`,
    1737: `922`,
    1738: `922`,
    1739: `923`,
    174: `26`,
    1740: `923`,
    1741: `924`,
    1742: `925`,
    1743: `926`,
    1744: `927`,
    1745: `927`,
    1746: `928`,
    1747: `929`,
    1748: `930`,
    1749: `931`,
    175: `26`,
    1750: `931`,
    1751: `932`,
    1752: `933`,
    1753: `934`,
    1754: `934`,
    1755: `934`,
    1756: `935`,
    1757: `935`,
    1758: `935`,
    1759: `936`,
    176: `26`,
    1760: `937`,
    1761: `938`,
    1762: `940`,
    1763: `940`,
    1764: `941`,
    1765: `941`,
    1766: `942`,
    1767: `943`,
    1768: `943`,
    1769: `944`,
    177: `26`,
    1770: `944`,
    1771: `944`,
    1772: `945`,
    1773: `946`,
    1774: `947`,
    1775: `947`,
    1776: `948`,
    1777: `948`,
    1778: `948`,
    1779: `949`,
    178: `26`,
    1780: `950`,
    1781: `950`,
    1782: `951`,
    1783: `952`,
    1784: `952`,
    1785: `952`,
    1786: `953`,
    1787: `954`,
    1788: `955`,
    1789: `955`,
    179: `26`,
    1790: `956`,
    1791: `957`,
    1792: `957`,
    1793: `958`,
    1794: `959`,
    1795: `960`,
    1796: `961`,
    1797: `961`,
    1798: `962`,
    1799: `963`,
    18: `2`,
    180: `26`,
    1800: `964`,
    1801: `966`,
    1802: `966`,
    1803: `966`,
    1804: `967`,
    1805: `967`,
    1806: `967`,
    1807: `969`,
    1808: `969`,
    1809: `969`,
    181: `26`,
    1810: `970`,
    1811: `970`,
    1812: `970`,
    1813: `971`,
    1814: `971`,
    1815: `972`,
    1816: `972`,
    1817: `973`,
    1818: `973`,
    1819: `973`,
    182: `26`,
    1820: `975`,
    1821: `975`,
    1822: `975`,
    1823: `976`,
    1824: `976`,
    1825: `976`,
    1826: `977`,
    1827: `977`,
    1828: `978`,
    1829: `978`,
    183: `26`,
    1830: `979`,
    1831: `979`,
    1832: `979`,
    1833: `981`,
    1834: `981`,
    1835: `981`,
    1836: `982`,
    1837: `982`,
    1838: `983`,
    1839: `983`,
    184: `26`,
    1840: `983`,
    1841: `985`,
    1842: `985`,
    1843: `985`,
    1844: `987`,
    1845: `987`,
    1846: `987`,
    1847: `989`,
    1848: `989`,
    1849: `989`,
    185: `26`,
    1850: `991`,
    1851: `991`,
    1852: `991`,
    1853: `993`,
    1854: `993`,
    1855: `993`,
    1856: `994`,
    1857: `994`,
    1858: `994`,
    1859: `995`,
    186: `26`,
    1860: `995`,
    1861: `995`,
    1862: `996`,
    1863: `996`,
    1864: `997`,
    1865: `997`,
    1866: `998`,
    1867: `998`,
    1868: `999`,
    1869: `999`,
    187: `26`,
    1870: `999`,
    1871: `1001`,
    1872: `1001`,
    1873: `1001`,
    1874: `1002`,
    1875: `1002`,
    1876: `1002`,
    1877: `1003`,
    1878: `1003`,
    1879: `1004`,
    188: `26`,
    1880: `1004`,
    1881: `1005`,
    1882: `1005`,
    1883: `1005`,
    1884: `1007`,
    1885: `1007`,
    1886: `1007`,
    1887: `1008`,
    1888: `1008`,
    1889: `1008`,
    189: `26`,
    1890: `1009`,
    1891: `1009`,
    1892: `1010`,
    1893: `1010`,
    1894: `1011`,
    1895: `1011`,
    1896: `1011`,
    1897: `1013`,
    1898: `1013`,
    1899: `1013`,
    19: `2`,
    190: `26`,
    1900: `1014`,
    1901: `1014`,
    1902: `1015`,
    1903: `1015`,
    1904: `1015`,
    1905: `1017`,
    1906: `1017`,
    1907: `1017`,
    1908: `1019`,
    1909: `1019`,
    191: `26`,
    1910: `1019`,
    1911: `1020`,
    1912: `1020`,
    1913: `1020`,
    1914: `1021`,
    1915: `1021`,
    1916: `1022`,
    1917: `1022`,
    1918: `1023`,
    1919: `1023`,
    192: `26`,
    1920: `1023`,
    1921: `1025`,
    1922: `1025`,
    1923: `1025`,
    1924: `1026`,
    1925: `1026`,
    1926: `1027`,
    1927: `1027`,
    1928: `1027`,
    1929: `1029`,
    193: `28`,
    1930: `1029`,
    1931: `1030`,
    1932: `1030`,
    1933: `1030`,
    1934: `1031`,
    1935: `1031`,
    1936: `1032`,
    1937: `1032`,
    1938: `1032`,
    1939: `1034`,
    194: `30`,
    1940: `1034`,
    1941: `1034`,
    1942: `1036`,
    1943: `1036`,
    1944: `1036`,
    1945: `1039`,
    1946: `1039`,
    1947: `1040`,
    1948: `1040`,
    1949: `1041`,
    195: `30`,
    1950: `1042`,
    1951: `1042`,
    1952: `1042`,
    1953: `1043`,
    1954: `1044`,
    1955: `1044`,
    1956: `1045`,
    1957: `1046`,
    1958: `1046`,
    1959: `1047`,
    196: `31`,
    1960: `1048`,
    1961: `1048`,
    1962: `1049`,
    1963: `1050`,
    1964: `1051`,
    1965: `1051`,
    1966: `1052`,
    1967: `1053`,
    1968: `1054`,
    1969: `1054`,
    197: `31`,
    1970: `1055`,
    1971: `1055`,
    1972: `1055`,
    1973: `1057`,
    1974: `1058`,
    1975: `1059`,
    1976: `1060`,
    1977: `1061`,
    1978: `1063`,
    1979: `1064`,
    198: `31`,
    1980: `1064`,
    1981: `1065`,
    1982: `1066`,
    1983: `1066`,
    1984: `1067`,
    1985: `1067`,
    1986: `1068`,
    1987: `1068`,
    1988: `1069`,
    1989: `1070`,
    199: `32`,
    1990: `1072`,
    1991: `1072`,
    1992: `1073`,
    1993: `1073`,
    1994: `1073`,
    1995: `1074`,
    1996: `1074`,
    1997: `1075`,
    1998: `1075`,
    1999: `1075`,
    2: `2`,
    20: `2`,
    200: `32`,
    2000: `1077`,
    2001: `1077`,
    2002: `1078`,
    2003: `1078`,
    2004: `1078`,
    2005: `1079`,
    2006: `1079`,
    2007: `1080`,
    2008: `1080`,
    2009: `1080`,
    201: `33`,
    2010: `1082`,
    2011: `1082`,
    2012: `1083`,
    2013: `1083`,
    2014: `1083`,
    2015: `1084`,
    2016: `1084`,
    2017: `1085`,
    2018: `1085`,
    2019: `1085`,
    202: `33`,
    2020: `1087`,
    2021: `1087`,
    2022: `1087`,
    2023: `1089`,
    2024: `1090`,
    2025: `1092`,
    2026: `1093`,
    2027: `1094`,
    2028: `1095`,
    2029: `1095`,
    203: `34`,
    2030: `1096`,
    2031: `1096`,
    2032: `1097`,
    2033: `1097`,
    2034: `1097`,
    2035: `1098`,
    2036: `1100`,
    2037: `1101`,
    2038: `1102`,
    2039: `1102`,
    204: `34`,
    2040: `1102`,
    2041: `1103`,
    2042: `1104`,
    2043: `1104`,
    2044: `1107`,
    2045: `1107`,
    2046: `1108`,
    2047: `1108`,
    2048: `1109`,
    2049: `1110`,
    205: `34`,
    2050: `1111`,
    2051: `1112`,
    2052: `1112`,
    2053: `1113`,
    2054: `1114`,
    2055: `1114`,
    2056: `1115`,
    2057: `1115`,
    2058: `1116`,
    2059: `1116`,
    206: `35`,
    2060: `1117`,
    2061: `1118`,
    2062: `1119`,
    2063: `1119`,
    2064: `1120`,
    2065: `1121`,
    2066: `1122`,
    2067: `1123`,
    2068: `1123`,
    2069: `1124`,
    207: `35`,
    2070: `1125`,
    2071: `1126`,
    2072: `1128`,
    2073: `1129`,
    2074: `1130`,
    2075: `1131`,
    2076: `1131`,
    2077: `1131`,
    2078: `1132`,
    2079: `1132`,
    208: `36`,
    2080: `1133`,
    2081: `1134`,
    2082: `1135`,
    2083: `1137`,
    2084: `1138`,
    2085: `1138`,
    2086: `1138`,
    2087: `1139`,
    2088: `1139`,
    2089: `1140`,
    209: `36`,
    2090: `1141`,
    2091: `1141`,
    2092: `1141`,
    2093: `1142`,
    2094: `1143`,
    2095: `1143`,
    2096: `1144`,
    2097: `1145`,
    2098: `1145`,
    2099: `1145`,
    21: `2`,
    210: `37`,
    2100: `1146`,
    2101: `1146`,
    2102: `1147`,
    2103: `1148`,
    2104: `1148`,
    2105: `1148`,
    2106: `1149`,
    2107: `1149`,
    2108: `1150`,
    2109: `1151`,
    211: `37`,
    2110: `1151`,
    2111: `1151`,
    2112: `1152`,
    2113: `1153`,
    2114: `1153`,
    2115: `1154`,
    2116: `1154`,
    2117: `1154`,
    2118: `1155`,
    2119: `1155`,
    212: `38`,
    2120: `1156`,
    2121: `1158`,
    2122: `1159`,
    2123: `1159`,
    2124: `1159`,
    2125: `1160`,
    2126: `1161`,
    2127: `1162`,
    2128: `1163`,
    2129: `1164`,
    213: `39`,
    2130: `1166`,
    2131: `1167`,
    2132: `1168`,
    2133: `1169`,
    2134: `1169`,
    2135: `1169`,
    2136: `1170`,
    2137: `1170`,
    2138: `1171`,
    2139: `1171`,
    214: `44`,
    2140: `1171`,
    2141: `1172`,
    2142: `1172`,
    2143: `1172`,
    2144: `1174`,
    2145: `1175`,
    2146: `1176`,
    2147: `1176`,
    2148: `1177`,
    2149: `1178`,
    215: `44`,
    2150: `1179`,
    2151: `1180`,
    2152: `1181`,
    2153: `1182`,
    2154: `1184`,
    2155: `1185`,
    2156: `1186`,
    2157: `1186`,
    2158: `1187`,
    2159: `1189`,
    216: `45`,
    2160: `1189`,
    2161: `1190`,
    2162: `1191`,
    2163: `1191`,
    2164: `1192`,
    2165: `1194`,
    2166: `1195`,
    2167: `1195`,
    2168: `1196`,
    2169: `1198`,
    217: `45`,
    2170: `1199`,
    2171: `1200`,
    2172: `1201`,
    2173: `1202`,
    2174: `1202`,
    2175: `1203`,
    2176: `1204`,
    2177: `1205`,
    2178: `1206`,
    2179: `1208`,
    218: `46`,
    2180: `1208`,
    2181: `1209`,
    2182: `1210`,
    2183: `1210`,
    2184: `1211`,
    2185: `1213`,
    2186: `1213`,
    2187: `1214`,
    2188: `1214`,
    2189: `1215`,
    219: `47`,
    2190: `1216`,
    2191: `1217`,
    2192: `1217`,
    2193: `1217`,
    2194: `1218`,
    2195: `1218`,
    2196: `1218`,
    2197: `1220`,
    2198: `1221`,
    2199: `1221`,
    22: `2`,
    220: `53`,
    2200: `1221`,
    2201: `1223`,
    2202: `1224`,
    2203: `1224`,
    2204: `1225`,
    221: `53`,
    222: `54`,
    223: `55`,
    224: `55`,
    225: `56`,
    226: `56`,
    227: `57`,
    228: `58`,
    229: `59`,
    23: `2`,
    230: `60`,
    231: `60`,
    232: `61`,
    233: `61`,
    234: `61`,
    235: `62`,
    236: `62`,
    237: `63`,
    238: `63`,
    239: `64`,
    24: `2`,
    240: `65`,
    241: `65`,
    242: `66`,
    243: `67`,
    244: `67`,
    245: `68`,
    246: `69`,
    247: `71`,
    248: `72`,
    249: `72`,
    25: `2`,
    250: `73`,
    251: `73`,
    252: `73`,
    253: `73`,
    254: `73`,
    255: `73`,
    256: `73`,
    257: `73`,
    258: `73`,
    259: `73`,
    26: `2`,
    260: `74`,
    261: `74`,
    262: `75`,
    263: `76`,
    264: `76`,
    265: `76`,
    266: `77`,
    267: `78`,
    268: `79`,
    269: `79`,
    27: `2`,
    270: `80`,
    271: `81`,
    272: `81`,
    273: `81`,
    274: `82`,
    275: `82`,
    276: `83`,
    277: `83`,
    278: `84`,
    279: `84`,
    28: `2`,
    280: `86`,
    281: `86`,
    282: `87`,
    283: `87`,
    284: `87`,
    285: `88`,
    286: `89`,
    287: `89`,
    288: `89`,
    289: `91`,
    29: `2`,
    290: `91`,
    291: `92`,
    292: `92`,
    293: `93`,
    294: `94`,
    295: `96`,
    296: `96`,
    297: `96`,
    298: `98`,
    299: `99`,
    3: `2`,
    30: `2`,
    300: `99`,
    301: `100`,
    302: `100`,
    303: `101`,
    304: `101`,
    305: `101`,
    306: `103`,
    307: `103`,
    308: `104`,
    309: `104`,
    31: `2`,
    310: `104`,
    311: `106`,
    312: `106`,
    313: `106`,
    314: `106`,
    315: `106`,
    316: `106`,
    317: `107`,
    318: `107`,
    319: `108`,
    32: `2`,
    320: `109`,
    321: `111`,
    322: `112`,
    323: `114`,
    324: `114`,
    325: `115`,
    326: `115`,
    327: `115`,
    328: `116`,
    329: `116`,
    33: `2`,
    330: `117`,
    331: `117`,
    332: `118`,
    333: `118`,
    334: `118`,
    335: `119`,
    336: `119`,
    337: `120`,
    338: `120`,
    339: `121`,
    34: `2`,
    340: `121`,
    341: `122`,
    342: `122`,
    343: `123`,
    344: `124`,
    345: `125`,
    346: `130`,
    347: `130`,
    348: `132`,
    349: `133`,
    35: `2`,
    350: `133`,
    351: `134`,
    352: `135`,
    353: `135`,
    354: `136`,
    355: `137`,
    356: `137`,
    357: `137`,
    358: `138`,
    359: `138`,
    36: `2`,
    360: `138`,
    361: `139`,
    362: `140`,
    363: `140`,
    364: `141`,
    365: `141`,
    366: `142`,
    367: `143`,
    368: `148`,
    369: `149`,
    37: `2`,
    370: `150`,
    371: `150`,
    372: `151`,
    373: `152`,
    374: `152`,
    375: `153`,
    376: `153`,
    377: `154`,
    378: `155`,
    379: `155`,
    38: `2`,
    380: `155`,
    381: `156`,
    382: `156`,
    383: `156`,
    384: `158`,
    385: `159`,
    386: `160`,
    387: `160`,
    388: `161`,
    389: `162`,
    39: `2`,
    390: `162`,
    391: `163`,
    392: `164`,
    393: `164`,
    394: `165`,
    395: `166`,
    396: `166`,
    397: `167`,
    398: `168`,
    399: `168`,
    4: `2`,
    40: `2`,
    400: `168`,
    401: `169`,
    402: `169`,
    403: `169`,
    404: `170`,
    405: `170`,
    406: `171`,
    407: `172`,
    408: `172`,
    409: `172`,
    41: `4`,
    410: `173`,
    411: `173`,
    412: `173`,
    413: `174`,
    414: `174`,
    415: `175`,
    416: `175`,
    417: `176`,
    418: `177`,
    419: `177`,
    42: `4`,
    420: `178`,
    421: `179`,
    422: `179`,
    423: `180`,
    424: `181`,
    425: `183`,
    426: `184`,
    427: `184`,
    428: `185`,
    429: `185`,
    43: `5`,
    430: `185`,
    431: `185`,
    432: `185`,
    433: `185`,
    434: `185`,
    435: `185`,
    436: `185`,
    437: `185`,
    438: `186`,
    439: `186`,
    44: `5`,
    440: `187`,
    441: `188`,
    442: `188`,
    443: `188`,
    444: `189`,
    445: `190`,
    446: `191`,
    447: `191`,
    448: `192`,
    449: `193`,
    45: `5`,
    450: `193`,
    451: `193`,
    452: `194`,
    453: `194`,
    454: `195`,
    455: `195`,
    456: `196`,
    457: `196`,
    458: `197`,
    459: `197`,
    46: `6`,
    460: `197`,
    461: `199`,
    462: `199`,
    463: `200`,
    464: `200`,
    465: `200`,
    466: `201`,
    467: `201`,
    468: `202`,
    469: `202`,
    47: `7`,
    470: `203`,
    471: `203`,
    472: `203`,
    473: `204`,
    474: `204`,
    475: `205`,
    476: `205`,
    477: `206`,
    478: `206`,
    479: `206`,
    48: `8`,
    480: `207`,
    481: `207`,
    482: `208`,
    483: `208`,
    484: `209`,
    485: `209`,
    486: `210`,
    487: `211`,
    488: `216`,
    489: `216`,
    49: `9`,
    490: `217`,
    491: `217`,
    492: `218`,
    493: `219`,
    494: `224`,
    495: `224`,
    496: `226`,
    497: `227`,
    498: `227`,
    499: `228`,
    5: `2`,
    50: `10`,
    500: `229`,
    501: `229`,
    502: `230`,
    503: `231`,
    504: `231`,
    505: `231`,
    506: `232`,
    507: `232`,
    508: `232`,
    509: `233`,
    51: `11`,
    510: `234`,
    511: `234`,
    512: `235`,
    513: `235`,
    514: `236`,
    515: `237`,
    516: `242`,
    517: `242`,
    518: `243`,
    519: `243`,
    52: `11`,
    520: `244`,
    521: `245`,
    522: `245`,
    523: `246`,
    524: `246`,
    525: `248`,
    526: `249`,
    527: `249`,
    528: `250`,
    529: `251`,
    53: `12`,
    530: `251`,
    531: `252`,
    532: `253`,
    533: `254`,
    534: `254`,
    535: `254`,
    536: `255`,
    537: `255`,
    538: `255`,
    539: `256`,
    54: `12`,
    540: `257`,
    541: `257`,
    542: `258`,
    543: `258`,
    544: `259`,
    545: `260`,
    546: `265`,
    547: `266`,
    548: `267`,
    549: `267`,
    55: `13`,
    550: `268`,
    551: `269`,
    552: `269`,
    553: `270`,
    554: `270`,
    555: `271`,
    556: `272`,
    557: `272`,
    558: `272`,
    559: `273`,
    56: `14`,
    560: `273`,
    561: `273`,
    562: `275`,
    563: `276`,
    564: `277`,
    565: `277`,
    566: `278`,
    567: `279`,
    568: `279`,
    569: `280`,
    57: `14`,
    570: `281`,
    571: `281`,
    572: `282`,
    573: `283`,
    574: `283`,
    575: `284`,
    576: `285`,
    577: `285`,
    578: `285`,
    579: `286`,
    58: `15`,
    580: `286`,
    581: `286`,
    582: `287`,
    583: `287`,
    584: `288`,
    585: `289`,
    586: `289`,
    587: `289`,
    588: `290`,
    589: `290`,
    59: `16`,
    590: `290`,
    591: `291`,
    592: `291`,
    593: `292`,
    594: `292`,
    595: `293`,
    596: `294`,
    597: `294`,
    598: `295`,
    599: `296`,
    6: `2`,
    60: `17`,
    600: `296`,
    601: `297`,
    602: `298`,
    603: `300`,
    604: `300`,
    605: `301`,
    606: `301`,
    607: `302`,
    608: `303`,
    609: `303`,
    61: `18`,
    610: `303`,
    611: `304`,
    612: `304`,
    613: `305`,
    614: `305`,
    615: `306`,
    616: `307`,
    617: `307`,
    618: `308`,
    619: `309`,
    62: `19`,
    620: `310`,
    621: `310`,
    622: `311`,
    623: `311`,
    624: `311`,
    625: `312`,
    626: `312`,
    627: `313`,
    628: `313`,
    629: `314`,
    63: `20`,
    630: `315`,
    631: `315`,
    632: `316`,
    633: `317`,
    634: `317`,
    635: `318`,
    636: `319`,
    637: `321`,
    638: `322`,
    639: `322`,
    64: `20`,
    640: `323`,
    641: `323`,
    642: `323`,
    643: `323`,
    644: `323`,
    645: `323`,
    646: `323`,
    647: `323`,
    648: `323`,
    649: `323`,
    65: `21`,
    650: `324`,
    651: `324`,
    652: `325`,
    653: `326`,
    654: `326`,
    655: `326`,
    656: `327`,
    657: `328`,
    658: `329`,
    659: `329`,
    66: `22`,
    660: `330`,
    661: `331`,
    662: `331`,
    663: `331`,
    664: `332`,
    665: `332`,
    666: `333`,
    667: `333`,
    668: `334`,
    669: `334`,
    67: `24`,
    670: `335`,
    671: `335`,
    672: `335`,
    673: `337`,
    674: `337`,
    675: `338`,
    676: `338`,
    677: `338`,
    678: `339`,
    679: `339`,
    68: `24`,
    680: `340`,
    681: `340`,
    682: `341`,
    683: `341`,
    684: `341`,
    685: `342`,
    686: `342`,
    687: `343`,
    688: `343`,
    689: `344`,
    69: `24`,
    690: `344`,
    691: `345`,
    692: `346`,
    693: `346`,
    694: `348`,
    695: `349`,
    696: `349`,
    697: `350`,
    698: `351`,
    699: `351`,
    7: `2`,
    70: `24`,
    700: `352`,
    701: `353`,
    702: `354`,
    703: `354`,
    704: `354`,
    705: `355`,
    706: `356`,
    707: `356`,
    708: `357`,
    709: `358`,
    71: `24`,
    710: `359`,
    711: `360`,
    712: `361`,
    713: `366`,
    714: `366`,
    715: `367`,
    716: `367`,
    717: `368`,
    718: `368`,
    719: `368`,
    72: `24`,
    720: `369`,
    721: `369`,
    722: `370`,
    723: `371`,
    724: `376`,
    725: `376`,
    726: `377`,
    727: `378`,
    728: `378`,
    729: `379`,
    73: `24`,
    730: `380`,
    731: `381`,
    732: `381`,
    733: `381`,
    734: `382`,
    735: `382`,
    736: `382`,
    737: `382`,
    738: `382`,
    739: `382`,
    74: `24`,
    740: `383`,
    741: `383`,
    742: `384`,
    743: `385`,
    744: `385`,
    745: `386`,
    746: `387`,
    747: `389`,
    748: `390`,
    749: `390`,
    75: `24`,
    750: `391`,
    751: `391`,
    752: `391`,
    753: `391`,
    754: `391`,
    755: `391`,
    756: `391`,
    757: `391`,
    758: `391`,
    759: `391`,
    76: `24`,
    760: `392`,
    761: `392`,
    762: `393`,
    763: `394`,
    764: `394`,
    765: `394`,
    766: `395`,
    767: `396`,
    768: `397`,
    769: `397`,
    77: `24`,
    770: `398`,
    771: `399`,
    772: `399`,
    773: `399`,
    774: `400`,
    775: `400`,
    776: `401`,
    777: `401`,
    778: `402`,
    779: `402`,
    78: `24`,
    780: `403`,
    781: `403`,
    782: `403`,
    783: `405`,
    784: `405`,
    785: `406`,
    786: `406`,
    787: `406`,
    788: `407`,
    789: `408`,
    79: `24`,
    790: `408`,
    791: `409`,
    792: `409`,
    793: `410`,
    794: `411`,
    795: `417`,
    796: `418`,
    797: `418`,
    798: `419`,
    799: `420`,
    8: `2`,
    80: `24`,
    800: `420`,
    801: `421`,
    802: `422`,
    803: `422`,
    804: `422`,
    805: `423`,
    806: `424`,
    807: `424`,
    808: `425`,
    809: `426`,
    81: `24`,
    810: `427`,
    811: `428`,
    812: `429`,
    813: `434`,
    814: `434`,
    815: `435`,
    816: `435`,
    817: `436`,
    818: `436`,
    819: `436`,
    82: `24`,
    820: `437`,
    821: `437`,
    822: `438`,
    823: `439`,
    824: `444`,
    825: `445`,
    826: `446`,
    827: `446`,
    828: `447`,
    829: `448`,
    83: `24`,
    830: `448`,
    831: `448`,
    832: `449`,
    833: `449`,
    834: `449`,
    835: `449`,
    836: `449`,
    837: `449`,
    838: `450`,
    839: `450`,
    84: `24`,
    840: `451`,
    841: `452`,
    842: `454`,
    843: `455`,
    844: `455`,
    845: `456`,
    846: `456`,
    847: `456`,
    848: `456`,
    849: `456`,
    85: `24`,
    850: `456`,
    851: `456`,
    852: `456`,
    853: `456`,
    854: `456`,
    855: `457`,
    856: `457`,
    857: `458`,
    858: `459`,
    859: `459`,
    86: `24`,
    860: `459`,
    861: `460`,
    862: `461`,
    863: `462`,
    864: `462`,
    865: `463`,
    866: `464`,
    867: `464`,
    868: `464`,
    869: `465`,
    87: `24`,
    870: `465`,
    871: `466`,
    872: `466`,
    873: `467`,
    874: `467`,
    875: `468`,
    876: `468`,
    877: `468`,
    878: `470`,
    879: `470`,
    88: `24`,
    880: `470`,
    881: `470`,
    882: `470`,
    883: `470`,
    884: `470`,
    885: `470`,
    886: `470`,
    887: `470`,
    888: `470`,
    889: `470`,
    89: `24`,
    890: `470`,
    891: `470`,
    892: `470`,
    893: `470`,
    894: `470`,
    895: `470`,
    896: `470`,
    897: `470`,
    898: `470`,
    899: `470`,
    9: `2`,
    90: `24`,
    900: `470`,
    901: `470`,
    902: `470`,
    903: `470`,
    904: `470`,
    905: `470`,
    906: `470`,
    907: `470`,
    908: `470`,
    909: `470`,
    91: `24`,
    910: `470`,
    911: `470`,
    912: `470`,
    913: `471`,
    914: `472`,
    915: `473`,
    916: `474`,
    917: `475`,
    918: `481`,
    919: `482`,
    92: `24`,
    920: `483`,
    921: `483`,
    922: `484`,
    923: `485`,
    924: `485`,
    925: `485`,
    926: `486`,
    927: `486`,
    928: `486`,
    929: `486`,
    93: `24`,
    930: `486`,
    931: `486`,
    932: `487`,
    933: `489`,
    934: `490`,
    935: `490`,
    936: `491`,
    937: `491`,
    938: `491`,
    939: `491`,
    94: `24`,
    940: `491`,
    941: `491`,
    942: `491`,
    943: `491`,
    944: `491`,
    945: `491`,
    946: `492`,
    947: `492`,
    948: `493`,
    949: `494`,
    95: `24`,
    950: `495`,
    951: `495`,
    952: `496`,
    953: `496`,
    954: `497`,
    955: `498`,
    956: `498`,
    957: `499`,
    958: `499`,
    959: `499`,
    96: `24`,
    960: `500`,
    961: `501`,
    962: `501`,
    963: `502`,
    964: `502`,
    965: `502`,
    966: `503`,
    967: `504`,
    968: `504`,
    969: `505`,
    97: `24`,
    970: `505`,
    971: `505`,
    972: `506`,
    973: `507`,
    974: `507`,
    975: `508`,
    976: `508`,
    977: `508`,
    978: `509`,
    979: `510`,
    98: `24`,
    980: `510`,
    981: `511`,
    982: `511`,
    983: `511`,
    984: `512`,
    985: `513`,
    986: `513`,
    987: `514`,
    988: `514`,
    989: `514`,
    99: `24`,
    990: `515`,
    991: `516`,
    992: `516`,
    993: `517`,
    994: `517`,
    995: `517`,
    996: `518`,
    997: `519`,
    998: `519`,
    999: `520`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 299,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:264:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:115:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "arc200_approve": arc200_approve,
  "arc200_transfer": arc200_transfer,
  "arc200_transferFrom": arc200_transferFrom,
  "deleteAllowanceBox": deleteAllowanceBox,
  "deleteBalanceBox": deleteBalanceBox,
  "destroy": destroy
  };
export const _APIs = {
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy
  };
