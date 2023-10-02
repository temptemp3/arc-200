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
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async (_v1488, _v1489 ) => {
          const v1488 = stdlib.protect(ctc0, _v1488, null);
          const v1489 = stdlib.protect(ctc0, _v1489, null);
        
        const v1490 = [v1488, v1489];
        const v1491 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v1490, ctc5), null);
        const v1492 = stdlib.fromSome(v1491, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1492;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async (_v1485 ) => {
          const v1485 = stdlib.protect(ctc0, _v1485, null);
        
        const v1486 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1485, ctc5), null);
        const v1487 = stdlib.fromSome(v1486, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1487;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        
        return v1460;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        const v1467 = v1451.name;
        
        return v1467;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        const v1468 = v1451.symbol;
        
        return v1468;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        
        return v1457;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        const v1493 = v1476.name;
        const v1494 = v1476.symbol;
        const v1495 = v1476.decimals;
        const v1496 = v1476.totalSupply;
        const v1497 = v1476.zeroAddress;
        const v1498 = v1476.manager;
        const v1499 = v1476.enableZeroAddressBurn;
        const v1500 = v1476.closed;
        const v1501 = {
          closed: v1500,
          decimals: v1495,
          enableZeroAddressBurn: v1499,
          manager: v1498,
          name: v1493,
          symbol: v1494,
          totalSupply: v1496,
          zeroAddress: v1497
          };
        
        return v1501;}))(...args));
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
    arc200_approve0_245: ctc10,
    arc200_transfer0_245: ctc10,
    arc200_transferFrom0_245: ctc11,
    deleteAllowanceBox0_245: ctc12,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc14
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
  
  
  const v1423 = stdlib.protect(ctc9, interact.params, 'for Deployer\'s interact field params');
  const v1424 = v1423.enableZeroAddressBurn;
  const v1425 = v1423.manager;
  const v1426 = v1423.meta;
  const v1427 = v1423.zeroAddress;
  const v1428 = v1426.decimals;
  const v1431 = v1426.totalSupply;
  
  const v1438 = stdlib.addressEq(v1427, v1425);
  const v1439 = v1438 ? false : true;
  stdlib.assert(v1439, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:77:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1442 = stdlib.gt256(v1431, stdlib.checkedBigNumberify('./index.rsh:82:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1442, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1445 = stdlib.le(v1428, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1445, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1427, v1425, v1424, v1426],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:76:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1448, v1449, v1450, v1451], secs: v1453, time: v1452, didSend: v146, from: v1447 } = txn1;
      
      const v1457 = v1451.totalSupply;
      const v1460 = v1451.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1449, ctc1, v1457);
      await stdlib.simMapSet(sim_r, 0, ctc4, v1448, ctc1, stdlib.checkedBigNumberify('./index.rsh:95:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      null;
      const v1465 = await ctc.getContractInfo();
      
      const v1472 = v1451.name;
      const v1473 = v1451.symbol;
      const v1475 = {
        closed: false,
        decimals: v1460,
        enableZeroAddressBurn: v1450,
        manager: v1449,
        name: v1472,
        symbol: v1473,
        totalSupply: v1457,
        zeroAddress: v1448
        };
      const v1476 = v1475;
      const v1477 = v1452;
      
      if (await (async () => {
        const v1483 = v1476.closed;
        const v1484 = v1483 ? false : true;
        
        return v1484;})()) {
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
  const {data: [v1448, v1449, v1450, v1451], secs: v1453, time: v1452, didSend: v146, from: v1447 } = txn1;
  const v1454 = stdlib.addressEq(v1448, v1449);
  const v1455 = v1454 ? false : true;
  stdlib.assert(v1455, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:77:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1457 = v1451.totalSupply;
  const v1458 = stdlib.gt256(v1457, stdlib.checkedBigNumberify('./index.rsh:82:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:81:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1460 = v1451.decimals;
  const v1461 = stdlib.le(v1460, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1449, ctc1, v1457);
  await stdlib.mapSet(map0, ctc4, v1448, ctc1, stdlib.checkedBigNumberify('./index.rsh:95:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  null;
  const v1465 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1465), {
    at: './index.rsh:98:19:application',
    fs: ['at ./index.rsh:98:19:application call to [unknown function] (defined at: ./index.rsh:98:19:function exp)', 'at ./index.rsh:98:19:application call to "liftedInteract" (defined at: ./index.rsh:98:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1472 = v1451.name;
  const v1473 = v1451.symbol;
  const v1475 = {
    closed: false,
    decimals: v1460,
    enableZeroAddressBurn: v1450,
    manager: v1449,
    name: v1472,
    symbol: v1473,
    totalSupply: v1457,
    zeroAddress: v1448
    };
  let v1476 = v1475;
  let v1477 = v1452;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1483 = v1476.closed;
    const v1484 = v1483 ? false : true;
    
    return v1484;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn3;
    switch (v1652[0]) {
      case 'arc200_approve0_245': {
        const v1655 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v1666 = v1655[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
        const v1667 = v1655[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
        const v1668 = stdlib.addressEq(v1651, v1448);
        const v1669 = v1668 ? false : true;
        stdlib.assert(v1669, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:188:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v1671 = stdlib.addressEq(v1666, v1448);
        const v1672 = v1671 ? false : true;
        stdlib.assert(v1672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1676 = [v1651, v1666];
        await stdlib.mapSet(map1, ctc12, v1676, ctc1, v1667);
        null;
        const v1677 = true;
        await txn3.getOutput('arc200_approve', 'v1677', ctc3, v1677);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_245': {
        const v1828 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v1860 = v1828[stdlib.checkedBigNumberify('./index.rsh:140:10:spread', stdlib.UInt_max, '0')];
        const v1861 = v1828[stdlib.checkedBigNumberify('./index.rsh:140:10:spread', stdlib.UInt_max, '1')];
        const v1862 = stdlib.addressEq(v1860, v1448);
        const v1863 = v1862 ? false : true;
        const v1864 = v1450 ? true : v1863;
        stdlib.assert(v1864, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v1866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1651, ctc1), null);
        const v1867 = stdlib.fromSome(v1866, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1868 = stdlib.ge256(v1867, v1861);
        stdlib.assert(v1868, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v1874 = stdlib.safeSub256(v1867, v1861);
        await stdlib.mapSet(map0, ctc4, v1651, ctc1, v1874);
        const v1875 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1860, ctc1), null);
        const v1876 = stdlib.fromSome(v1875, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1877 = stdlib.safeAdd256(v1876, v1861);
        await stdlib.mapSet(map0, ctc4, v1860, ctc1, v1877);
        null;
        const v1879 = true;
        await txn3.getOutput('arc200_transfer', 'v1879', ctc3, v1879);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_245': {
        const v2001 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2062 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
        const v2063 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
        const v2064 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
        const v2065 = stdlib.addressEq(v2062, v1448);
        const v2066 = v2065 ? false : true;
        stdlib.assert(v2066, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2068 = stdlib.addressEq(v2063, v1448);
        const v2069 = v2068 ? false : true;
        stdlib.assert(v2069, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2071 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2062, ctc1), null);
        const v2072 = stdlib.fromSome(v2071, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2073 = stdlib.ge256(v2072, v2064);
        stdlib.assert(v2073, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2075 = [v2062, v1651];
        const v2076 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2075, ctc1), null);
        const v2077 = stdlib.fromSome(v2076, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2078 = stdlib.ge256(v2077, v2064);
        stdlib.assert(v2078, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2085 = stdlib.safeSub256(v2072, v2064);
        await stdlib.mapSet(map0, ctc4, v2062, ctc1, v2085);
        const v2086 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2063, ctc1), null);
        const v2087 = stdlib.fromSome(v2086, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2088 = stdlib.safeAdd256(v2087, v2064);
        await stdlib.mapSet(map0, ctc4, v2063, ctc1, v2088);
        null;
        const v2093 = stdlib.safeSub256(v2077, v2064);
        await stdlib.mapSet(map1, ctc12, v2075, ctc1, v2093);
        null;
        const v2095 = true;
        await txn3.getOutput('arc200_transferFrom', 'v2095', ctc3, v2095);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_245': {
        const v2174 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2279 = v2174[stdlib.checkedBigNumberify('./index.rsh:221:10:spread', stdlib.UInt_max, '0')];
        const v2280 = v2174[stdlib.checkedBigNumberify('./index.rsh:221:10:spread', stdlib.UInt_max, '1')];
        const v2281 = [v2279, v2280];
        const v2282 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2281, ctc1), null);
        const v2283 = {
          None: 0,
          Some: 1
          }[v2282[0]];
        const v2284 = stdlib.eq(v2283, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v2288 = stdlib.fromSome(v2282, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2289 = stdlib.eq256(v2288, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2289, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc12, v2281, ctc1, undefined /* Nothing */);
        null;
        const v2294 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v2294', ctc3, v2294);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_245': {
        const v2347 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2477 = v2347[stdlib.checkedBigNumberify('./index.rsh:204:10:spread', stdlib.UInt_max, '0')];
        const v2478 = stdlib.addressEq(v2477, v1448);
        const v2479 = v2478 ? false : true;
        stdlib.assert(v2479, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v2481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2477, ctc1), null);
        const v2482 = {
          None: 0,
          Some: 1
          }[v2481[0]];
        const v2483 = stdlib.eq(v2482, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2483, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2486 = stdlib.fromSome(v2481, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2487 = stdlib.eq256(v2486, stdlib.checkedBigNumberify('./index.rsh:207:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2487, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v2477, ctc1, undefined /* Nothing */);
        null;
        const v2490 = true;
        await txn3.getOutput('deleteBalanceBox', 'v2490', ctc3, v2490);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_245': {
        const v2520 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2672 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v2673 = {
          None: 0,
          Some: 1
          }[v2672[0]];
        const v2674 = stdlib.eq(v2673, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2674, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1448, ctc1, undefined /* Nothing */);
        null;
        const v2676 = null;
        await txn3.getOutput('destroy', 'v2676', ctc0, v2676);
        const v2683 = v1476.decimals;
        const v2684 = v1476.enableZeroAddressBurn;
        const v2685 = v1476.manager;
        const v2686 = v1476.name;
        const v2687 = v1476.symbol;
        const v2688 = v1476.totalSupply;
        const v2689 = v1476.zeroAddress;
        const v2690 = {
          closed: true,
          decimals: v2683,
          enableZeroAddressBurn: v2684,
          manager: v2685,
          name: v2686,
          symbol: v2687,
          totalSupply: v2688,
          zeroAddress: v2689
          };
        const cv1476 = v2690;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
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
    arc200_approve0_245: ctc10,
    arc200_transfer0_245: ctc10,
    arc200_transferFrom0_245: ctc11,
    deleteAllowanceBox0_245: ctc12,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc14
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
  
  
  const [v1448, v1450, v1451, v1457, v1460, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1562 = ctc.selfAddress();
  const v1564 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:187:47:application call to [unknown function] (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_approve0_245" (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v1565 = v1564[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1569 = stdlib.addressEq(v1562, v1448);
  const v1570 = v1569 ? false : true;
  stdlib.assert(v1570, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:188:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:47:application call to [unknown function] (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_approve0_245" (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v1572 = stdlib.addressEq(v1565, v1448);
  const v1573 = v1572 ? false : true;
  stdlib.assert(v1573, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:47:application call to [unknown function] (defined at: ./index.rsh:187:47:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_approve0_245" (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v1582 = ['arc200_approve0_245', v1564];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1582],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:187:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'arc200_approve0_245': {
          const v1655 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v1666 = v1655[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
          const v1667 = v1655[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
          const v1676 = [v1651, v1666];
          await stdlib.simMapSet(sim_r, 1, ctc12, v1676, ctc1, v1667);
          null;
          const v1677 = true;
          const v1678 = await txn1.getOutput('arc200_approve', 'v1677', ctc4, v1677);
          
          const v3561 = v1476;
          const v3563 = v1476.closed;
          if (v3563) {
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
        case 'arc200_transfer0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'arc200_transferFrom0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2520 = v1652[1];
          
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
  const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
  switch (v1652[0]) {
    case 'arc200_approve0_245': {
      const v1655 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v1666 = v1655[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
      const v1667 = v1655[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
      const v1668 = stdlib.addressEq(v1651, v1448);
      const v1669 = v1668 ? false : true;
      stdlib.assert(v1669, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:188:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v1671 = stdlib.addressEq(v1666, v1448);
      const v1672 = v1671 ? false : true;
      stdlib.assert(v1672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:189:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v1676 = [v1651, v1666];
      await stdlib.mapSet(map1, ctc12, v1676, ctc1, v1667);
      null;
      const v1677 = true;
      const v1678 = await txn1.getOutput('arc200_approve', 'v1677', ctc4, v1677);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v1655, v1678), {
          at: './index.rsh:187:11:application',
          fs: ['at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)', 'at ./index.rsh:194:12:application call to "k" (defined at: ./index.rsh:191:13:function exp)', 'at ./index.rsh:191:13:application call to [unknown function] (defined at: ./index.rsh:191:13:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v3561 = v1476;
      const v3563 = v1476.closed;
      if (v3563) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transfer0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2520 = v1652[1];
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
    arc200_approve0_245: ctc10,
    arc200_transfer0_245: ctc10,
    arc200_transferFrom0_245: ctc11,
    deleteAllowanceBox0_245: ctc12,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc14
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
  
  
  const [v1448, v1450, v1451, v1457, v1460, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1503 = ctc.selfAddress();
  const v1505 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:140:43:application call to [unknown function] (defined at: ./index.rsh:140:43:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transfer0_245" (defined at: ./index.rsh:140:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v1506 = v1505[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1507 = v1505[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1510 = stdlib.addressEq(v1506, v1448);
  const v1511 = v1510 ? false : true;
  const v1512 = v1450 ? true : v1511;
  stdlib.assert(v1512, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:140:43:application call to [unknown function] (defined at: ./index.rsh:140:43:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transfer0_245" (defined at: ./index.rsh:140:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'arc200_transfer'
    });
  const v1514 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1503, ctc1), null);
  const v1515 = stdlib.fromSome(v1514, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1516 = stdlib.ge256(v1515, v1507);
  stdlib.assert(v1516, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:140:43:application call to [unknown function] (defined at: ./index.rsh:140:43:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transfer0_245" (defined at: ./index.rsh:140:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v1525 = ['arc200_transfer0_245', v1505];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1525],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'arc200_approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'arc200_transfer0_245': {
          const v1828 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v1860 = v1828[stdlib.checkedBigNumberify('./index.rsh:140:10:spread', stdlib.UInt_max, '0')];
          const v1861 = v1828[stdlib.checkedBigNumberify('./index.rsh:140:10:spread', stdlib.UInt_max, '1')];
          const v1866 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1651, ctc1), null);
          const v1867 = stdlib.fromSome(v1866, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1874 = stdlib.safeSub256(v1867, v1861);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1651, ctc1, v1874);
          const v1875 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1860, ctc1), null);
          const v1876 = stdlib.fromSome(v1875, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v1877 = stdlib.safeAdd256(v1876, v1861);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1860, ctc1, v1877);
          null;
          const v1879 = true;
          const v1880 = await txn1.getOutput('arc200_transfer', 'v1879', ctc4, v1879);
          
          const v3589 = v1476;
          const v3591 = v1476.closed;
          if (v3591) {
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
        case 'arc200_transferFrom0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2520 = v1652[1];
          
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
  const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
  switch (v1652[0]) {
    case 'arc200_approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'arc200_transfer0_245': {
      const v1828 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v1860 = v1828[stdlib.checkedBigNumberify('./index.rsh:140:10:spread', stdlib.UInt_max, '0')];
      const v1861 = v1828[stdlib.checkedBigNumberify('./index.rsh:140:10:spread', stdlib.UInt_max, '1')];
      const v1862 = stdlib.addressEq(v1860, v1448);
      const v1863 = v1862 ? false : true;
      const v1864 = v1450 ? true : v1863;
      stdlib.assert(v1864, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'arc200_transfer'
        });
      const v1866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1651, ctc1), null);
      const v1867 = stdlib.fromSome(v1866, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1868 = stdlib.ge256(v1867, v1861);
      stdlib.assert(v1868, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:145:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v1874 = stdlib.safeSub256(v1867, v1861);
      await stdlib.mapSet(map0, ctc3, v1651, ctc1, v1874);
      const v1875 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1860, ctc1), null);
      const v1876 = stdlib.fromSome(v1875, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1877 = stdlib.safeAdd256(v1876, v1861);
      await stdlib.mapSet(map0, ctc3, v1860, ctc1, v1877);
      null;
      const v1879 = true;
      const v1880 = await txn1.getOutput('arc200_transfer', 'v1879', ctc4, v1879);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v1828, v1880), {
          at: './index.rsh:140:11:application',
          fs: ['at ./index.rsh:140:11:application call to [unknown function] (defined at: ./index.rsh:140:11:function exp)', 'at ./index.rsh:152:12:application call to "k" (defined at: ./index.rsh:150:13:function exp)', 'at ./index.rsh:150:13:application call to [unknown function] (defined at: ./index.rsh:150:13:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v3589 = v1476;
      const v3591 = v1476.closed;
      if (v3591) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transferFrom0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2520 = v1652[1];
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
    arc200_approve0_245: ctc12,
    arc200_transfer0_245: ctc12,
    arc200_transferFrom0_245: ctc10,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc14
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
  
  
  const [v1448, v1450, v1451, v1457, v1460, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1527 = ctc.selfAddress();
  const v1529 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:54:application call to [unknown function] (defined at: ./index.rsh:161:54:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transferFrom0_245" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v1530 = v1529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1531 = v1529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1532 = v1529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1536 = stdlib.addressEq(v1530, v1448);
  const v1537 = v1536 ? false : true;
  stdlib.assert(v1537, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:54:application call to [unknown function] (defined at: ./index.rsh:161:54:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transferFrom0_245" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'arc200_transferFrom'
    });
  const v1539 = stdlib.addressEq(v1531, v1448);
  const v1540 = v1539 ? false : true;
  stdlib.assert(v1540, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:54:application call to [unknown function] (defined at: ./index.rsh:161:54:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transferFrom0_245" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'arc200_transferFrom'
    });
  const v1542 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1530, ctc1), null);
  const v1543 = stdlib.fromSome(v1542, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1544 = stdlib.ge256(v1543, v1532);
  stdlib.assert(v1544, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:54:application call to [unknown function] (defined at: ./index.rsh:161:54:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transferFrom0_245" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v1546 = [v1530, v1527];
  const v1547 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1546, ctc1), null);
  const v1548 = stdlib.fromSome(v1547, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1549 = stdlib.ge256(v1548, v1532);
  stdlib.assert(v1549, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:54:application call to [unknown function] (defined at: ./index.rsh:161:54:function exp)', 'at ./index.rsh:113:29:application call to "runarc200_transferFrom0_245" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v1560 = ['arc200_transferFrom0_245', v1529];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1560],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'arc200_approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'arc200_transfer0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'arc200_transferFrom0_245': {
          const v2001 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v2062 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
          const v2063 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
          const v2064 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
          const v2071 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2062, ctc1), null);
          const v2072 = stdlib.fromSome(v2071, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2075 = [v2062, v1651];
          const v2076 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v2075, ctc1), null);
          const v2077 = stdlib.fromSome(v2076, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2085 = stdlib.safeSub256(v2072, v2064);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2062, ctc1, v2085);
          const v2086 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2063, ctc1), null);
          const v2087 = stdlib.fromSome(v2086, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2088 = stdlib.safeAdd256(v2087, v2064);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2063, ctc1, v2088);
          null;
          const v2093 = stdlib.safeSub256(v2077, v2064);
          await stdlib.simMapSet(sim_r, 1, ctc11, v2075, ctc1, v2093);
          null;
          const v2095 = true;
          const v2096 = await txn1.getOutput('arc200_transferFrom', 'v2095', ctc4, v2095);
          
          const v3617 = v1476;
          const v3619 = v1476.closed;
          if (v3619) {
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
        case 'deleteAllowanceBox0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2520 = v1652[1];
          
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
  const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
  switch (v1652[0]) {
    case 'arc200_approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'arc200_transfer0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_245': {
      const v2001 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2062 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
      const v2063 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
      const v2064 = v2001[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
      const v2065 = stdlib.addressEq(v2062, v1448);
      const v2066 = v2065 ? false : true;
      stdlib.assert(v2066, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'arc200_transferFrom'
        });
      const v2068 = stdlib.addressEq(v2063, v1448);
      const v2069 = v2068 ? false : true;
      stdlib.assert(v2069, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'arc200_transferFrom'
        });
      const v2071 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2062, ctc1), null);
      const v2072 = stdlib.fromSome(v2071, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2073 = stdlib.ge256(v2072, v2064);
      stdlib.assert(v2073, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v2075 = [v2062, v1651];
      const v2076 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2075, ctc1), null);
      const v2077 = stdlib.fromSome(v2076, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2078 = stdlib.ge256(v2077, v2064);
      stdlib.assert(v2078, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v2085 = stdlib.safeSub256(v2072, v2064);
      await stdlib.mapSet(map0, ctc3, v2062, ctc1, v2085);
      const v2086 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2063, ctc1), null);
      const v2087 = stdlib.fromSome(v2086, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2088 = stdlib.safeAdd256(v2087, v2064);
      await stdlib.mapSet(map0, ctc3, v2063, ctc1, v2088);
      null;
      const v2093 = stdlib.safeSub256(v2077, v2064);
      await stdlib.mapSet(map1, ctc11, v2075, ctc1, v2093);
      null;
      const v2095 = true;
      const v2096 = await txn1.getOutput('arc200_transferFrom', 'v2095', ctc4, v2095);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2001, v2096), {
          at: './index.rsh:161:11:application',
          fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:11:function exp)', 'at ./index.rsh:178:12:application call to "k" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v3617 = v1476;
      const v3619 = v1476.closed;
      if (v3619) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2520 = v1652[1];
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
    arc200_approve0_245: ctc11,
    arc200_transfer0_245: ctc11,
    arc200_transferFrom0_245: ctc12,
    deleteAllowanceBox0_245: ctc10,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc14
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
  
  
  const [v1448, v1450, v1451, v1457, v1460, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1609 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:50:application call to [unknown function] (defined at: ./index.rsh:221:50:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1610 = v1609[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1611 = v1609[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1614 = [v1610, v1611];
  const v1615 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1614, ctc1), null);
  const v1616 = {
    None: 0,
    Some: 1
    }[v1615[0]];
  const v1617 = stdlib.eq(v1616, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1617, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:50:application call to [unknown function] (defined at: ./index.rsh:221:50:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1621 = stdlib.fromSome(v1615, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1622 = stdlib.eq256(v1621, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1622, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:50:application call to [unknown function] (defined at: ./index.rsh:221:50:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:221:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v1631 = ['deleteAllowanceBox0_245', v1609];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1631],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'arc200_approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'arc200_transfer0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'arc200_transferFrom0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v2174 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v2279 = v2174[stdlib.checkedBigNumberify('./index.rsh:221:10:spread', stdlib.UInt_max, '0')];
          const v2280 = v2174[stdlib.checkedBigNumberify('./index.rsh:221:10:spread', stdlib.UInt_max, '1')];
          const v2281 = [v2279, v2280];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v2281, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc10, v2281, ctc1, undefined /* Nothing */);
          null;
          const v2294 = true;
          const v2295 = await txn1.getOutput('deleteAllowanceBox', 'v2294', ctc4, v2294);
          
          const v3645 = v1476;
          const v3647 = v1476.closed;
          if (v3647) {
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
        case 'deleteBalanceBox0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2520 = v1652[1];
          
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
  const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
  switch (v1652[0]) {
    case 'arc200_approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'arc200_transfer0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v2174 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2279 = v2174[stdlib.checkedBigNumberify('./index.rsh:221:10:spread', stdlib.UInt_max, '0')];
      const v2280 = v2174[stdlib.checkedBigNumberify('./index.rsh:221:10:spread', stdlib.UInt_max, '1')];
      const v2281 = [v2279, v2280];
      const v2282 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2281, ctc1), null);
      const v2283 = {
        None: 0,
        Some: 1
        }[v2282[0]];
      const v2284 = stdlib.eq(v2283, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v2288 = stdlib.fromSome(v2282, stdlib.checkedBigNumberify('./index.rsh:122:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2289 = stdlib.eq256(v2288, stdlib.checkedBigNumberify('./index.rsh:227:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2289, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:226:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc10, v2281, ctc1, undefined /* Nothing */);
      null;
      const v2294 = true;
      const v2295 = await txn1.getOutput('deleteAllowanceBox', 'v2294', ctc4, v2294);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2174, v2295), {
          at: './index.rsh:221:11:application',
          fs: ['at ./index.rsh:221:11:application call to [unknown function] (defined at: ./index.rsh:221:11:function exp)', 'at ./index.rsh:234:12:application call to "k" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v3645 = v1476;
      const v3647 = v1476.closed;
      if (v3647) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2520 = v1652[1];
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
    arc200_approve0_245: ctc11,
    arc200_transfer0_245: ctc11,
    arc200_transferFrom0_245: ctc12,
    deleteAllowanceBox0_245: ctc13,
    deleteBalanceBox0_245: ctc10,
    destroy0_245: ctc14
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
  
  
  const [v1448, v1450, v1451, v1457, v1460, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1586 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:204:38:application call to [unknown function] (defined at: ./index.rsh:204:38:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:204:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1589 = stdlib.addressEq(v1587, v1448);
  const v1590 = v1589 ? false : true;
  stdlib.assert(v1590, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:38:application call to [unknown function] (defined at: ./index.rsh:204:38:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:204:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v1592 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1587, ctc1), null);
  const v1593 = {
    None: 0,
    Some: 1
    }[v1592[0]];
  const v1594 = stdlib.eq(v1593, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1594, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:38:application call to [unknown function] (defined at: ./index.rsh:204:38:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:204:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1597 = stdlib.fromSome(v1592, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1598 = stdlib.eq256(v1597, stdlib.checkedBigNumberify('./index.rsh:207:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1598, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:38:application call to [unknown function] (defined at: ./index.rsh:204:38:function exp)', 'at ./index.rsh:113:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:204:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v1605 = ['deleteBalanceBox0_245', v1586];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1605],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:204:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'arc200_approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'arc200_transfer0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'arc200_transferFrom0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2347 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2477 = v2347[stdlib.checkedBigNumberify('./index.rsh:204:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2477, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2477, ctc1, undefined /* Nothing */);
          null;
          const v2490 = true;
          const v2491 = await txn1.getOutput('deleteBalanceBox', 'v2490', ctc4, v2490);
          
          const v3673 = v1476;
          const v3675 = v1476.closed;
          if (v3675) {
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
        case 'destroy0_245': {
          const v2520 = v1652[1];
          
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
  const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
  switch (v1652[0]) {
    case 'arc200_approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'arc200_transfer0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2347 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2477 = v2347[stdlib.checkedBigNumberify('./index.rsh:204:10:spread', stdlib.UInt_max, '0')];
      const v2478 = stdlib.addressEq(v2477, v1448);
      const v2479 = v2478 ? false : true;
      stdlib.assert(v2479, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v2481 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2477, ctc1), null);
      const v2482 = {
        None: 0,
        Some: 1
        }[v2481[0]];
      const v2483 = stdlib.eq(v2482, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2483, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:206:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2486 = stdlib.fromSome(v2481, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2487 = stdlib.eq256(v2486, stdlib.checkedBigNumberify('./index.rsh:207:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2487, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:207:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v2477, ctc1, undefined /* Nothing */);
      null;
      const v2490 = true;
      const v2491 = await txn1.getOutput('deleteBalanceBox', 'v2490', ctc4, v2490);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2347, v2491), {
          at: './index.rsh:204:11:application',
          fs: ['at ./index.rsh:204:11:application call to [unknown function] (defined at: ./index.rsh:204:11:function exp)', 'at ./index.rsh:212:12:application call to "k" (defined at: ./index.rsh:209:13:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v3673 = v1476;
      const v3675 = v1476.closed;
      if (v3675) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_245': {
      const v2520 = v1652[1];
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
    arc200_approve0_245: ctc11,
    arc200_transfer0_245: ctc11,
    arc200_transferFrom0_245: ctc12,
    deleteAllowanceBox0_245: ctc13,
    deleteBalanceBox0_245: ctc14,
    destroy0_245: ctc10
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
  
  
  const [v1448, v1450, v1451, v1457, v1460, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9]);
  const v1635 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:244:25:application call to [unknown function] (defined at: ./index.rsh:244:25:function exp)', 'at ./index.rsh:113:29:application call to "rundestroy0_245" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1636 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v1637 = {
    None: 0,
    Some: 1
    }[v1636[0]];
  const v1638 = stdlib.eq(v1637, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1638, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:25:application call to [unknown function] (defined at: ./index.rsh:244:25:function exp)', 'at ./index.rsh:113:29:application call to "rundestroy0_245" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:113:29:application call to [unknown function] (defined at: ./index.rsh:113:29:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v1643 = ['destroy0_245', v1635];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1643],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:244:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'arc200_approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'arc200_transfer0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'arc200_transferFrom0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2520 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1448, ctc1, undefined /* Nothing */);
          null;
          const v2676 = null;
          const v2677 = await txn1.getOutput('destroy', 'v2676', ctc0, v2676);
          
          const v2683 = v1476.decimals;
          const v2684 = v1476.enableZeroAddressBurn;
          const v2685 = v1476.manager;
          const v2686 = v1476.name;
          const v2687 = v1476.symbol;
          const v2688 = v1476.totalSupply;
          const v2689 = v1476.zeroAddress;
          const v2690 = {
            closed: true,
            decimals: v2683,
            enableZeroAddressBurn: v2684,
            manager: v2685,
            name: v2686,
            symbol: v2687,
            totalSupply: v2688,
            zeroAddress: v2689
            };
          const v3701 = v2690;
          const v3703 = v2690.closed;
          if (v3703) {
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
  const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
  switch (v1652[0]) {
    case 'arc200_approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'arc200_transfer0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2520 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2672 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v2673 = {
        None: 0,
        Some: 1
        }[v2672[0]];
      const v2674 = stdlib.eq(v2673, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2674, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1448, ctc1, undefined /* Nothing */);
      null;
      const v2676 = null;
      const v2677 = await txn1.getOutput('destroy', 'v2676', ctc0, v2676);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2520, v2677), {
          at: './index.rsh:244:11:application',
          fs: ['at ./index.rsh:244:11:application call to [unknown function] (defined at: ./index.rsh:244:11:function exp)', 'at ./index.rsh:253:12:application call to "k" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v2683 = v1476.decimals;
      const v2684 = v1476.enableZeroAddressBurn;
      const v2685 = v1476.manager;
      const v2686 = v1476.name;
      const v2687 = v1476.symbol;
      const v2688 = v1476.totalSupply;
      const v2689 = v1476.zeroAddress;
      const v2690 = {
        closed: true,
        decimals: v2683,
        enableZeroAddressBurn: v2684,
        manager: v2685,
        name: v2686,
        symbol: v2687,
        totalSupply: v2688,
        zeroAddress: v2689
        };
      const v3701 = v2690;
      const v3703 = v2690.closed;
      if (v3703) {
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
    pure: [`arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`],
    sigs: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAED1N4BCMTbASYHAQAACAAAAAAAAAABAQEBAgR5g8NcBBlp+GUxGEEGRilkSSJbNQEhBFs1AihkK2RQJwRkUIIPBBxTeK0EZDbc4ARlfRPsBGpDtgUEguVzxASPlRtZBJyGoYUEnNaFWAS2rholBLuzGfMEvDwVbwTQocwVBOyZYEEE82tNvwT8MLakNhoAjg8GGQYuBjEFpAYmBlkGbgZmBjQGDAW2BjoGNwZMBswANAtXACA1DTQLVyAgNQwxADQUE0Q0DTQUE0QhBSoxADQNUFABNAyIBuonBjEAUDQNUDQMULAjNQuACAAAAAAAAAaNNAsWUQcIULA0CxZRBwg1BDIGNQ40D1cAARdBBiExGYEFEkSIBwgiMgoyCYgHEDQDQAAKgAQVH3x1NARQsCNDNAtXACA1DTQLVyAgNQw0EzQNNBQTEUQyAykyAygxAFCIBmSIBlhJNQs0DKdEJSgxAFA0CzQMoYgGjIgGVSUoNA1QMgMpMgMoNA1QiAY5iAYtNAygiAZviAY4JwUxAFA0DVA0DFCwIzULgAgAAAAAAAAHVzQLFlEHCFCwNAsWUQcINQQyBjUOQv9LNAtXACA1FTQLVyAgNQ00C1dAIDUMNBU0FBNENA00FBNEMgMpMgMoNBVQiAXQiAXESTUXNAynRDQVMQBQNRYyAykyAyo0FlABiAWyiAWmSTULNAynRCUoNBVQNBc0DKGIBdqIBaMlKDQNUDIDKTIDKDQNUIgFh4gFezQMoIgFvYgFhicFNBVQNA1QNAxQsDQLNAyhiAWmNQ0hBSo0FlABNA2IBWQnBjQVUDEAUDQNULAjNQuACAAAAAAAAAgvNAsWUQcIULA0CxZRBwg1BDIGNQ5C/nc0C1cAIDUNNAtXICA1DDQNNAxQNRUpMgMqNBVQAYgFCUk1CyJVIxJEMgM0C4gE8TIDqEQhBSo0FVABiAU1gAQurvRJNA1QNAxQsCM1C4AIAAAAAAAACPY0CxZRBwhQsDQLFlEHCDUEMgY1DkL+CTQNVwEgSTULNBQTRCkyAyg0C1CIBKVJNQwiVSMSRDIDNAyIBI0yA6hEJSg0C1CIBNOABJRHbEo0C1CwIzULgAgAAAAAAAAJujQLFlEHCFCwNAsWUQcINQQyBjUOQv2qgCEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiVSMSRCUoNBRQiAR1gARMbabysCk1C4AIAAAAAAAACnQ0C1CwNAs1BCs0D1cBCFA0D1cJAVA0D1cKIFA0D1cqIFA0D1dKCFA0D1dSIFA0D1dyIFAyBjUONQ9C/So0ASQSRIgD7TIDKTIDKjQMNAtQUAGIA8SIA7g1BDEZIhJEQv0kIQSvKDQMNAtQUDIDUFA1CyQ0ARJEiAO4NAsiWzUMNAtXCGE1DYAE2R5N2jQMFlA0DVCwNAyIA9c0DSJVjQYDEgMcAyYC1QLfAuJC/GE0ASQSRIgDezIDKTIDKDQLUIgDVogDSjUEQv+PNAEkEkSIA180EBY1BEL/fzQBJBJEiANPNBJXCCA1BEL/bTQBJBJEiAM9NBJXKAg1BEL/WzQBJBJEiAMrNBE1BEL/TCEErys0DDQLUFAyA1BQNQtC/1EhBK8nBDQNNAxQNAtQUFA1C0L/PSEEr4ABAzQMNAtQUDIDUFA1C0L/KCEEr4ABBDQLUIFAr1BQNQtC/xWAaQAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv6lNAEkEkSIAl00D1cqIDQPV0oIUDQPVwEIUDQPV1IgUDQPV3IgUDQPVwogUDQPVwkBUDQPVwABUDUEQv5RNAwiWzUNNAxXCCA1FDQMVyggNQs0DFdIARc1EzQMV0lQNRKABORKezI0DRZQNBRQNAtQNBMWUQcIUDQSULA0DYgCJTQUNAsTRDQSVzAgSTURMgOlRDQSIltJNRCBgAIORCUoNAtQNBGIAbAlKDQUUDIDiAGmJwU0FFA0C1A0EVCwKDQQFlA0ExZRBwhQNAtQNBJXCCBQNBJXKAhQNBFQNBRQMgY1DjUPQvqziAG2gaCNBogBvTYaATUMQv9DiAGkNhoBNQtC/aEiMTQSRIEEMTUSRCIxNhJEIjE3EkSIAYSBqwKvIiI1AjUBKEsBVwB/ZytLAVd/f2cnBExX/i1nKTQBFjQCFlBnMRkiEkSIAWhC+mU2GgE2GgI1CzUMQv0UNhoBNhoCNQs1DEL9LDYaATULQv1xQv2KQv2XQv2mQv21NhoBNhoCNhoDNQs1DDUNQv3FNhoBNhoCNQs1DEL9pTYaATYaAjULNQxC/b82GgE1C0L9zEL93DQNVwFANQtC+2VC+9BC/Cw0FDQTFlEHCFA0ElA0EVA0EBZQNA9QJDIGQv9CSEy/SIkisgEjshCyB7IIs4k0DVcBQDULQvlJNA1XAUA1C0L5wDQNVwFgNQtC+kBC/e5IiUwJSTUGMgmIAKKJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcBAEwiVU2JvkkWUQcIRQRNUIlMSb1A/4NLA4gATEL/e0lXACA1FElXIAEXNRNJVyFQNRJJV3EgNRFJgZEBWzUQV5mSNQ+JSRWBIEwJr0xQibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0Bgg1Bok0BjQHSg9B/1dC/1+xQv8hsbIJQv8b`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `531`,
    1001: `531`,
    1002: `533`,
    1003: `534`,
    1004: `534`,
    1005: `535`,
    1006: `536`,
    1007: `536`,
    1008: `537`,
    1009: `537`,
    101: `24`,
    1010: `538`,
    1011: `539`,
    1012: `540`,
    1013: `541`,
    1014: `541`,
    1015: `541`,
    1016: `542`,
    1017: `542`,
    1018: `542`,
    1019: `543`,
    102: `24`,
    1020: `543`,
    1021: `545`,
    1022: `545`,
    1023: `546`,
    1024: `547`,
    1025: `548`,
    1026: `550`,
    1027: `550`,
    1028: `550`,
    1029: `552`,
    103: `24`,
    1030: `552`,
    1031: `553`,
    1032: `554`,
    1033: `555`,
    1034: `555`,
    1035: `556`,
    1036: `556`,
    1037: `557`,
    1038: `558`,
    1039: `559`,
    104: `24`,
    1040: `559`,
    1041: `560`,
    1042: `561`,
    1043: `562`,
    1044: `562`,
    1045: `564`,
    1046: `565`,
    1047: `565`,
    1048: `566`,
    1049: `567`,
    105: `24`,
    1050: `568`,
    1051: `568`,
    1052: `568`,
    1053: `569`,
    1054: `569`,
    1055: `570`,
    1056: `571`,
    1057: `572`,
    1058: `572`,
    1059: `573`,
    106: `24`,
    1060: `573`,
    1061: `574`,
    1062: `574`,
    1063: `574`,
    1064: `575`,
    1065: `575`,
    1066: `576`,
    1067: `576`,
    1068: `576`,
    1069: `576`,
    107: `24`,
    1070: `576`,
    1071: `576`,
    1072: `577`,
    1073: `577`,
    1074: `578`,
    1075: `579`,
    1076: `580`,
    1077: `580`,
    1078: `581`,
    1079: `582`,
    108: `24`,
    1080: `584`,
    1081: `584`,
    1082: `585`,
    1083: `585`,
    1084: `585`,
    1085: `586`,
    1086: `586`,
    1087: `587`,
    1088: `588`,
    1089: `589`,
    109: `24`,
    1090: `589`,
    1091: `589`,
    1092: `589`,
    1093: `589`,
    1094: `589`,
    1095: `589`,
    1096: `589`,
    1097: `589`,
    1098: `589`,
    1099: `589`,
    11: `2`,
    110: `24`,
    1100: `589`,
    1101: `589`,
    1102: `589`,
    1103: `590`,
    1104: `590`,
    1105: `590`,
    1106: `592`,
    1107: `592`,
    1108: `593`,
    1109: `594`,
    111: `24`,
    1110: `595`,
    1111: `598`,
    1112: `598`,
    1113: `598`,
    1114: `599`,
    1115: `599`,
    1116: `601`,
    1117: `602`,
    1118: `602`,
    1119: `603`,
    112: `24`,
    1120: `604`,
    1121: `604`,
    1122: `605`,
    1123: `606`,
    1124: `606`,
    1125: `606`,
    1126: `607`,
    1127: `607`,
    1128: `607`,
    1129: `608`,
    113: `24`,
    1130: `608`,
    1131: `609`,
    1132: `609`,
    1133: `609`,
    1134: `611`,
    1135: `611`,
    1136: `612`,
    1137: `613`,
    1138: `614`,
    1139: `617`,
    114: `24`,
    1140: `617`,
    1141: `617`,
    1142: `618`,
    1143: `618`,
    1144: `619`,
    1145: `620`,
    1146: `620`,
    1147: `621`,
    1148: `621`,
    1149: `621`,
    115: `24`,
    1150: `623`,
    1151: `623`,
    1152: `624`,
    1153: `625`,
    1154: `626`,
    1155: `629`,
    1156: `629`,
    1157: `629`,
    1158: `630`,
    1159: `630`,
    116: `24`,
    1160: `631`,
    1161: `631`,
    1162: `631`,
    1163: `632`,
    1164: `632`,
    1165: `633`,
    1166: `633`,
    1167: `633`,
    1168: `635`,
    1169: `635`,
    117: `24`,
    1170: `636`,
    1171: `637`,
    1172: `638`,
    1173: `641`,
    1174: `641`,
    1175: `641`,
    1176: `642`,
    1177: `642`,
    1178: `643`,
    1179: `643`,
    118: `24`,
    1180: `643`,
    1181: `644`,
    1182: `644`,
    1183: `645`,
    1184: `645`,
    1185: `645`,
    1186: `647`,
    1187: `647`,
    1188: `648`,
    1189: `649`,
    119: `24`,
    1190: `650`,
    1191: `653`,
    1192: `653`,
    1193: `653`,
    1194: `654`,
    1195: `654`,
    1196: `655`,
    1197: `655`,
    1198: `656`,
    1199: `656`,
    12: `2`,
    120: `24`,
    1200: `656`,
    1201: `658`,
    1202: `658`,
    1203: `659`,
    1204: `660`,
    1205: `661`,
    1206: `661`,
    1207: `662`,
    1208: `662`,
    1209: `663`,
    121: `24`,
    1210: `664`,
    1211: `665`,
    1212: `665`,
    1213: `666`,
    1214: `667`,
    1215: `668`,
    1216: `668`,
    1217: `669`,
    1218: `669`,
    1219: `669`,
    122: `24`,
    1220: `671`,
    1221: `671`,
    1222: `672`,
    1223: `673`,
    1224: `673`,
    1225: `674`,
    1226: `674`,
    1227: `675`,
    1228: `675`,
    1229: `676`,
    123: `24`,
    1230: `677`,
    1231: `677`,
    1232: `678`,
    1233: `679`,
    1234: `680`,
    1235: `681`,
    1236: `681`,
    1237: `682`,
    1238: `682`,
    1239: `682`,
    124: `24`,
    1240: `684`,
    1241: `684`,
    1242: `685`,
    1243: `686`,
    1244: `686`,
    1245: `686`,
    1246: `687`,
    1247: `687`,
    1248: `688`,
    1249: `688`,
    125: `24`,
    1250: `689`,
    1251: `690`,
    1252: `691`,
    1253: `691`,
    1254: `692`,
    1255: `693`,
    1256: `694`,
    1257: `694`,
    1258: `695`,
    1259: `695`,
    126: `24`,
    1260: `695`,
    1261: `697`,
    1262: `697`,
    1263: `698`,
    1264: `699`,
    1265: `699`,
    1266: `699`,
    1267: `700`,
    1268: `700`,
    1269: `701`,
    127: `24`,
    1270: `702`,
    1271: `702`,
    1272: `703`,
    1273: `704`,
    1274: `705`,
    1275: `706`,
    1276: `706`,
    1277: `707`,
    1278: `707`,
    1279: `707`,
    128: `24`,
    1280: `709`,
    1281: `709`,
    1282: `709`,
    1283: `709`,
    1284: `709`,
    1285: `709`,
    1286: `709`,
    1287: `709`,
    1288: `709`,
    1289: `709`,
    129: `24`,
    1290: `709`,
    1291: `709`,
    1292: `709`,
    1293: `709`,
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
    1387: `710`,
    1388: `710`,
    1389: `711`,
    139: `24`,
    1390: `711`,
    1391: `711`,
    1392: `713`,
    1393: `713`,
    1394: `714`,
    1395: `715`,
    1396: `716`,
    1397: `719`,
    1398: `719`,
    1399: `719`,
    14: `2`,
    140: `24`,
    1400: `720`,
    1401: `720`,
    1402: `721`,
    1403: `721`,
    1404: `721`,
    1405: `722`,
    1406: `722`,
    1407: `723`,
    1408: `723`,
    1409: `723`,
    141: `24`,
    1410: `724`,
    1411: `725`,
    1412: `725`,
    1413: `726`,
    1414: `726`,
    1415: `726`,
    1416: `727`,
    1417: `728`,
    1418: `728`,
    1419: `729`,
    142: `24`,
    1420: `729`,
    1421: `729`,
    1422: `730`,
    1423: `731`,
    1424: `731`,
    1425: `732`,
    1426: `732`,
    1427: `732`,
    1428: `733`,
    1429: `734`,
    143: `24`,
    1430: `734`,
    1431: `735`,
    1432: `735`,
    1433: `735`,
    1434: `736`,
    1435: `737`,
    1436: `737`,
    1437: `738`,
    1438: `738`,
    1439: `738`,
    144: `25`,
    1440: `739`,
    1441: `740`,
    1442: `740`,
    1443: `741`,
    1444: `741`,
    1445: `741`,
    1446: `742`,
    1447: `743`,
    1448: `743`,
    1449: `744`,
    145: `25`,
    1450: `744`,
    1451: `744`,
    1452: `746`,
    1453: `746`,
    1454: `747`,
    1455: `748`,
    1456: `749`,
    1457: `749`,
    1458: `750`,
    1459: `750`,
    146: `25`,
    1460: `751`,
    1461: `751`,
    1462: `751`,
    1463: `752`,
    1464: `752`,
    1465: `753`,
    1466: `753`,
    1467: `754`,
    1468: `754`,
    1469: `754`,
    147: `26`,
    1470: `755`,
    1471: `755`,
    1472: `756`,
    1473: `756`,
    1474: `757`,
    1475: `757`,
    1476: `757`,
    1477: `758`,
    1478: `759`,
    1479: `759`,
    148: `26`,
    1480: `760`,
    1481: `760`,
    1482: `761`,
    1483: `761`,
    1484: `761`,
    1485: `762`,
    1486: `762`,
    1487: `763`,
    1488: `763`,
    1489: `763`,
    149: `26`,
    1490: `763`,
    1491: `763`,
    1492: `763`,
    1493: `764`,
    1494: `764`,
    1495: `765`,
    1496: `766`,
    1497: `767`,
    1498: `767`,
    1499: `768`,
    15: `2`,
    150: `26`,
    1500: `769`,
    1501: `769`,
    1502: `770`,
    1503: `771`,
    1504: `771`,
    1505: `772`,
    1506: `773`,
    1507: `773`,
    1508: `773`,
    1509: `774`,
    151: `26`,
    1510: `775`,
    1511: `775`,
    1512: `776`,
    1513: `777`,
    1514: `779`,
    1515: `779`,
    1516: `780`,
    1517: `780`,
    1518: `780`,
    1519: `781`,
    152: `26`,
    1520: `781`,
    1521: `782`,
    1522: `782`,
    1523: `783`,
    1524: `784`,
    1525: `788`,
    1526: `788`,
    1527: `789`,
    1528: `789`,
    1529: `789`,
    153: `26`,
    1530: `790`,
    1531: `791`,
    1532: `791`,
    1533: `792`,
    1534: `792`,
    1535: `793`,
    1536: `794`,
    1537: `798`,
    1538: `798`,
    1539: `799`,
    154: `26`,
    1540: `800`,
    1541: `801`,
    1542: `802`,
    1543: `802`,
    1544: `803`,
    1545: `803`,
    1546: `803`,
    1547: `804`,
    1548: `805`,
    1549: `810`,
    155: `26`,
    1550: `811`,
    1551: `812`,
    1552: `812`,
    1553: `813`,
    1554: `814`,
    1555: `814`,
    1556: `815`,
    1557: `815`,
    1558: `815`,
    1559: `817`,
    156: `26`,
    1560: `818`,
    1561: `819`,
    1562: `819`,
    1563: `820`,
    1564: `821`,
    1565: `821`,
    1566: `822`,
    1567: `822`,
    1568: `822`,
    1569: `823`,
    157: `26`,
    1570: `823`,
    1571: `824`,
    1572: `824`,
    1573: `825`,
    1574: `826`,
    1575: `826`,
    1576: `827`,
    1577: `828`,
    1578: `828`,
    1579: `829`,
    158: `26`,
    1580: `830`,
    1581: `832`,
    1582: `833`,
    1583: `833`,
    1584: `834`,
    1585: `835`,
    1586: `836`,
    1587: `836`,
    1588: `837`,
    1589: `838`,
    159: `26`,
    1590: `838`,
    1591: `838`,
    1592: `839`,
    1593: `840`,
    1594: `840`,
    1595: `841`,
    1596: `842`,
    1597: `842`,
    1598: `843`,
    1599: `843`,
    16: `2`,
    160: `26`,
    1600: `843`,
    1601: `844`,
    1602: `845`,
    1603: `845`,
    1604: `846`,
    1605: `846`,
    1606: `846`,
    1607: `847`,
    1608: `848`,
    1609: `848`,
    161: `26`,
    1610: `849`,
    1611: `850`,
    1612: `850`,
    1613: `851`,
    1614: `852`,
    1615: `852`,
    1616: `853`,
    1617: `853`,
    1618: `854`,
    1619: `854`,
    162: `26`,
    1620: `855`,
    1621: `855`,
    1622: `855`,
    1623: `857`,
    1624: `857`,
    1625: `857`,
    1626: `858`,
    1627: `858`,
    1628: `858`,
    1629: `858`,
    163: `26`,
    1630: `859`,
    1631: `859`,
    1632: `859`,
    1633: `860`,
    1634: `860`,
    1635: `860`,
    1636: `861`,
    1637: `861`,
    1638: `862`,
    1639: `862`,
    164: `26`,
    1640: `862`,
    1641: `864`,
    1642: `864`,
    1643: `864`,
    1644: `865`,
    1645: `865`,
    1646: `865`,
    1647: `866`,
    1648: `866`,
    1649: `867`,
    165: `26`,
    1650: `867`,
    1651: `867`,
    1652: `869`,
    1653: `870`,
    1654: `870`,
    1655: `871`,
    1656: `872`,
    1657: `873`,
    1658: `873`,
    1659: `874`,
    166: `26`,
    1660: `874`,
    1661: `875`,
    1662: `876`,
    1663: `877`,
    1664: `878`,
    1665: `878`,
    1666: `879`,
    1667: `880`,
    1668: `881`,
    1669: `882`,
    167: `26`,
    1670: `882`,
    1671: `883`,
    1672: `884`,
    1673: `885`,
    1674: `885`,
    1675: `885`,
    1676: `886`,
    1677: `886`,
    1678: `886`,
    1679: `887`,
    168: `26`,
    1680: `888`,
    1681: `889`,
    1682: `891`,
    1683: `891`,
    1684: `892`,
    1685: `892`,
    1686: `893`,
    1687: `894`,
    1688: `894`,
    1689: `895`,
    169: `26`,
    1690: `895`,
    1691: `895`,
    1692: `896`,
    1693: `897`,
    1694: `898`,
    1695: `898`,
    1696: `899`,
    1697: `899`,
    1698: `899`,
    1699: `900`,
    17: `2`,
    170: `26`,
    1700: `901`,
    1701: `901`,
    1702: `902`,
    1703: `903`,
    1704: `903`,
    1705: `903`,
    1706: `904`,
    1707: `905`,
    1708: `906`,
    1709: `906`,
    171: `26`,
    1710: `907`,
    1711: `908`,
    1712: `908`,
    1713: `909`,
    1714: `910`,
    1715: `911`,
    1716: `912`,
    1717: `912`,
    1718: `913`,
    1719: `914`,
    172: `26`,
    1720: `915`,
    1721: `917`,
    1722: `917`,
    1723: `917`,
    1724: `918`,
    1725: `918`,
    1726: `918`,
    1727: `920`,
    1728: `920`,
    1729: `920`,
    173: `26`,
    1730: `921`,
    1731: `921`,
    1732: `921`,
    1733: `922`,
    1734: `922`,
    1735: `923`,
    1736: `923`,
    1737: `924`,
    1738: `924`,
    1739: `924`,
    174: `26`,
    1740: `926`,
    1741: `926`,
    1742: `926`,
    1743: `927`,
    1744: `927`,
    1745: `927`,
    1746: `928`,
    1747: `928`,
    1748: `929`,
    1749: `929`,
    175: `26`,
    1750: `930`,
    1751: `930`,
    1752: `930`,
    1753: `932`,
    1754: `932`,
    1755: `932`,
    1756: `933`,
    1757: `933`,
    1758: `934`,
    1759: `934`,
    176: `26`,
    1760: `934`,
    1761: `936`,
    1762: `936`,
    1763: `936`,
    1764: `938`,
    1765: `938`,
    1766: `938`,
    1767: `940`,
    1768: `940`,
    1769: `940`,
    177: `26`,
    1770: `942`,
    1771: `942`,
    1772: `942`,
    1773: `944`,
    1774: `944`,
    1775: `944`,
    1776: `945`,
    1777: `945`,
    1778: `945`,
    1779: `946`,
    178: `26`,
    1780: `946`,
    1781: `946`,
    1782: `947`,
    1783: `947`,
    1784: `948`,
    1785: `948`,
    1786: `949`,
    1787: `949`,
    1788: `950`,
    1789: `950`,
    179: `28`,
    1790: `950`,
    1791: `952`,
    1792: `952`,
    1793: `952`,
    1794: `953`,
    1795: `953`,
    1796: `953`,
    1797: `954`,
    1798: `954`,
    1799: `955`,
    18: `2`,
    180: `30`,
    1800: `955`,
    1801: `956`,
    1802: `956`,
    1803: `956`,
    1804: `958`,
    1805: `958`,
    1806: `958`,
    1807: `959`,
    1808: `959`,
    1809: `959`,
    181: `30`,
    1810: `960`,
    1811: `960`,
    1812: `961`,
    1813: `961`,
    1814: `962`,
    1815: `962`,
    1816: `962`,
    1817: `964`,
    1818: `964`,
    1819: `964`,
    182: `31`,
    1820: `965`,
    1821: `965`,
    1822: `966`,
    1823: `966`,
    1824: `966`,
    1825: `968`,
    1826: `968`,
    1827: `968`,
    1828: `970`,
    1829: `970`,
    183: `31`,
    1830: `971`,
    1831: `971`,
    1832: `971`,
    1833: `972`,
    1834: `972`,
    1835: `973`,
    1836: `973`,
    1837: `973`,
    1838: `975`,
    1839: `975`,
    184: `31`,
    1840: `975`,
    1841: `977`,
    1842: `977`,
    1843: `977`,
    1844: `980`,
    1845: `980`,
    1846: `981`,
    1847: `981`,
    1848: `982`,
    1849: `983`,
    185: `32`,
    1850: `983`,
    1851: `983`,
    1852: `984`,
    1853: `985`,
    1854: `985`,
    1855: `986`,
    1856: `987`,
    1857: `987`,
    1858: `988`,
    1859: `989`,
    186: `32`,
    1860: `989`,
    1861: `990`,
    1862: `991`,
    1863: `992`,
    1864: `992`,
    1865: `993`,
    1866: `994`,
    1867: `995`,
    1868: `995`,
    1869: `996`,
    187: `33`,
    1870: `996`,
    1871: `996`,
    1872: `998`,
    1873: `999`,
    1874: `1000`,
    1875: `1001`,
    1876: `1002`,
    1877: `1004`,
    1878: `1005`,
    1879: `1005`,
    188: `33`,
    1880: `1006`,
    1881: `1007`,
    1882: `1007`,
    1883: `1008`,
    1884: `1008`,
    1885: `1009`,
    1886: `1009`,
    1887: `1010`,
    1888: `1011`,
    1889: `1013`,
    189: `34`,
    1890: `1013`,
    1891: `1014`,
    1892: `1014`,
    1893: `1014`,
    1894: `1015`,
    1895: `1015`,
    1896: `1016`,
    1897: `1016`,
    1898: `1016`,
    1899: `1018`,
    19: `2`,
    190: `34`,
    1900: `1018`,
    1901: `1019`,
    1902: `1019`,
    1903: `1019`,
    1904: `1020`,
    1905: `1020`,
    1906: `1021`,
    1907: `1021`,
    1908: `1021`,
    1909: `1023`,
    191: `34`,
    1910: `1023`,
    1911: `1024`,
    1912: `1024`,
    1913: `1024`,
    1914: `1025`,
    1915: `1025`,
    1916: `1026`,
    1917: `1026`,
    1918: `1026`,
    1919: `1028`,
    192: `35`,
    1920: `1028`,
    1921: `1028`,
    1922: `1030`,
    1923: `1031`,
    1924: `1033`,
    1925: `1034`,
    1926: `1035`,
    1927: `1036`,
    1928: `1036`,
    1929: `1037`,
    193: `35`,
    1930: `1037`,
    1931: `1038`,
    1932: `1038`,
    1933: `1038`,
    1934: `1039`,
    1935: `1041`,
    1936: `1042`,
    1937: `1043`,
    1938: `1043`,
    1939: `1043`,
    194: `36`,
    1940: `1044`,
    1941: `1045`,
    1942: `1045`,
    1943: `1048`,
    1944: `1048`,
    1945: `1049`,
    1946: `1049`,
    1947: `1050`,
    1948: `1051`,
    1949: `1052`,
    195: `36`,
    1950: `1053`,
    1951: `1053`,
    1952: `1054`,
    1953: `1055`,
    1954: `1055`,
    1955: `1056`,
    1956: `1056`,
    1957: `1057`,
    1958: `1057`,
    1959: `1058`,
    196: `37`,
    1960: `1059`,
    1961: `1060`,
    1962: `1060`,
    1963: `1061`,
    1964: `1062`,
    1965: `1063`,
    1966: `1064`,
    1967: `1064`,
    1968: `1065`,
    1969: `1066`,
    197: `37`,
    1970: `1067`,
    1971: `1069`,
    1972: `1070`,
    1973: `1070`,
    1974: `1070`,
    1975: `1071`,
    1976: `1072`,
    1977: `1073`,
    1978: `1074`,
    1979: `1075`,
    198: `38`,
    1980: `1077`,
    1981: `1078`,
    1982: `1079`,
    1983: `1080`,
    1984: `1080`,
    1985: `1080`,
    1986: `1081`,
    1987: `1081`,
    1988: `1082`,
    1989: `1083`,
    199: `39`,
    1990: `1084`,
    1991: `1086`,
    1992: `1087`,
    1993: `1088`,
    1994: `1089`,
    1995: `1089`,
    1996: `1089`,
    1997: `1090`,
    1998: `1090`,
    1999: `1091`,
    2: `2`,
    20: `2`,
    200: `44`,
    2000: `1091`,
    2001: `1091`,
    2002: `1092`,
    2003: `1092`,
    2004: `1092`,
    2005: `1094`,
    2006: `1095`,
    2007: `1095`,
    2008: `1095`,
    2009: `1096`,
    201: `44`,
    2010: `1096`,
    2011: `1097`,
    2012: `1098`,
    2013: `1098`,
    2014: `1098`,
    2015: `1099`,
    2016: `1100`,
    2017: `1100`,
    2018: `1101`,
    2019: `1102`,
    202: `45`,
    2020: `1102`,
    2021: `1102`,
    2022: `1103`,
    2023: `1103`,
    2024: `1104`,
    2025: `1105`,
    2026: `1105`,
    2027: `1105`,
    2028: `1106`,
    2029: `1106`,
    203: `45`,
    2030: `1107`,
    2031: `1108`,
    2032: `1108`,
    2033: `1108`,
    2034: `1109`,
    2035: `1110`,
    2036: `1110`,
    2037: `1111`,
    2038: `1111`,
    2039: `1111`,
    204: `46`,
    2040: `1112`,
    2041: `1112`,
    2042: `1113`,
    2043: `1115`,
    2044: `1116`,
    2045: `1117`,
    2046: `1117`,
    2047: `1118`,
    2048: `1119`,
    2049: `1120`,
    205: `47`,
    2050: `1121`,
    2051: `1122`,
    2052: `1123`,
    2053: `1125`,
    2054: `1126`,
    2055: `1127`,
    2056: `1127`,
    2057: `1128`,
    2058: `1130`,
    2059: `1130`,
    206: `53`,
    2060: `1131`,
    2061: `1132`,
    2062: `1132`,
    2063: `1133`,
    2064: `1135`,
    2065: `1136`,
    2066: `1136`,
    2067: `1137`,
    2068: `1139`,
    2069: `1140`,
    207: `53`,
    2070: `1141`,
    2071: `1142`,
    2072: `1143`,
    2073: `1143`,
    2074: `1144`,
    2075: `1145`,
    2076: `1146`,
    2077: `1147`,
    2078: `1149`,
    2079: `1149`,
    208: `54`,
    2080: `1150`,
    2081: `1151`,
    2082: `1151`,
    2083: `1152`,
    2084: `1154`,
    2085: `1154`,
    2086: `1155`,
    2087: `1155`,
    2088: `1156`,
    2089: `1157`,
    209: `55`,
    2090: `1158`,
    2091: `1158`,
    2092: `1158`,
    2093: `1159`,
    2094: `1159`,
    2095: `1159`,
    2096: `1161`,
    2097: `1162`,
    2098: `1162`,
    2099: `1162`,
    21: `2`,
    210: `55`,
    2100: `1164`,
    2101: `1165`,
    2102: `1165`,
    2103: `1166`,
    211: `56`,
    212: `56`,
    213: `57`,
    214: `58`,
    215: `59`,
    216: `60`,
    217: `60`,
    218: `61`,
    219: `61`,
    22: `2`,
    220: `61`,
    221: `62`,
    222: `62`,
    223: `63`,
    224: `63`,
    225: `64`,
    226: `65`,
    227: `65`,
    228: `66`,
    229: `67`,
    23: `2`,
    230: `67`,
    231: `68`,
    232: `69`,
    233: `71`,
    234: `72`,
    235: `72`,
    236: `73`,
    237: `73`,
    238: `73`,
    239: `73`,
    24: `2`,
    240: `73`,
    241: `73`,
    242: `73`,
    243: `73`,
    244: `73`,
    245: `73`,
    246: `74`,
    247: `74`,
    248: `75`,
    249: `76`,
    25: `2`,
    250: `76`,
    251: `76`,
    252: `77`,
    253: `78`,
    254: `79`,
    255: `79`,
    256: `80`,
    257: `81`,
    258: `81`,
    259: `81`,
    26: `2`,
    260: `82`,
    261: `82`,
    262: `83`,
    263: `83`,
    264: `84`,
    265: `84`,
    266: `86`,
    267: `86`,
    268: `87`,
    269: `87`,
    27: `2`,
    270: `87`,
    271: `88`,
    272: `89`,
    273: `89`,
    274: `89`,
    275: `91`,
    276: `91`,
    277: `92`,
    278: `92`,
    279: `93`,
    28: `2`,
    280: `94`,
    281: `96`,
    282: `96`,
    283: `96`,
    284: `98`,
    285: `99`,
    286: `99`,
    287: `100`,
    288: `100`,
    289: `101`,
    29: `2`,
    290: `101`,
    291: `101`,
    292: `103`,
    293: `103`,
    294: `104`,
    295: `104`,
    296: `104`,
    297: `106`,
    298: `106`,
    299: `106`,
    3: `2`,
    30: `2`,
    300: `106`,
    301: `106`,
    302: `106`,
    303: `107`,
    304: `107`,
    305: `108`,
    306: `109`,
    307: `111`,
    308: `112`,
    309: `114`,
    31: `2`,
    310: `114`,
    311: `115`,
    312: `115`,
    313: `115`,
    314: `116`,
    315: `116`,
    316: `117`,
    317: `117`,
    318: `118`,
    319: `118`,
    32: `2`,
    320: `118`,
    321: `119`,
    322: `119`,
    323: `120`,
    324: `120`,
    325: `121`,
    326: `121`,
    327: `122`,
    328: `122`,
    329: `123`,
    33: `2`,
    330: `124`,
    331: `125`,
    332: `130`,
    333: `130`,
    334: `132`,
    335: `133`,
    336: `133`,
    337: `134`,
    338: `135`,
    339: `135`,
    34: `2`,
    340: `136`,
    341: `137`,
    342: `137`,
    343: `137`,
    344: `138`,
    345: `138`,
    346: `138`,
    347: `139`,
    348: `140`,
    349: `140`,
    35: `2`,
    350: `141`,
    351: `141`,
    352: `142`,
    353: `143`,
    354: `148`,
    355: `149`,
    356: `150`,
    357: `150`,
    358: `151`,
    359: `152`,
    36: `2`,
    360: `152`,
    361: `153`,
    362: `153`,
    363: `154`,
    364: `155`,
    365: `155`,
    366: `155`,
    367: `156`,
    368: `156`,
    369: `156`,
    37: `2`,
    370: `158`,
    371: `159`,
    372: `160`,
    373: `160`,
    374: `161`,
    375: `162`,
    376: `162`,
    377: `163`,
    378: `164`,
    379: `164`,
    38: `2`,
    380: `165`,
    381: `166`,
    382: `166`,
    383: `167`,
    384: `168`,
    385: `168`,
    386: `168`,
    387: `169`,
    388: `169`,
    389: `169`,
    39: `2`,
    390: `170`,
    391: `170`,
    392: `171`,
    393: `172`,
    394: `172`,
    395: `172`,
    396: `173`,
    397: `173`,
    398: `173`,
    399: `174`,
    4: `2`,
    40: `2`,
    400: `174`,
    401: `175`,
    402: `175`,
    403: `176`,
    404: `177`,
    405: `177`,
    406: `178`,
    407: `179`,
    408: `179`,
    409: `180`,
    41: `4`,
    410: `181`,
    411: `183`,
    412: `184`,
    413: `184`,
    414: `185`,
    415: `185`,
    416: `185`,
    417: `185`,
    418: `185`,
    419: `185`,
    42: `4`,
    420: `185`,
    421: `185`,
    422: `185`,
    423: `185`,
    424: `186`,
    425: `186`,
    426: `187`,
    427: `188`,
    428: `188`,
    429: `188`,
    43: `5`,
    430: `189`,
    431: `190`,
    432: `191`,
    433: `191`,
    434: `192`,
    435: `193`,
    436: `193`,
    437: `193`,
    438: `194`,
    439: `194`,
    44: `5`,
    440: `195`,
    441: `195`,
    442: `196`,
    443: `196`,
    444: `197`,
    445: `197`,
    446: `197`,
    447: `199`,
    448: `199`,
    449: `200`,
    45: `5`,
    450: `200`,
    451: `200`,
    452: `201`,
    453: `201`,
    454: `202`,
    455: `202`,
    456: `203`,
    457: `203`,
    458: `203`,
    459: `204`,
    46: `6`,
    460: `204`,
    461: `205`,
    462: `205`,
    463: `206`,
    464: `206`,
    465: `206`,
    466: `207`,
    467: `207`,
    468: `208`,
    469: `208`,
    47: `7`,
    470: `209`,
    471: `209`,
    472: `210`,
    473: `211`,
    474: `216`,
    475: `216`,
    476: `217`,
    477: `217`,
    478: `218`,
    479: `219`,
    48: `8`,
    480: `224`,
    481: `224`,
    482: `226`,
    483: `227`,
    484: `227`,
    485: `228`,
    486: `229`,
    487: `229`,
    488: `230`,
    489: `231`,
    49: `9`,
    490: `231`,
    491: `231`,
    492: `232`,
    493: `232`,
    494: `232`,
    495: `233`,
    496: `234`,
    497: `234`,
    498: `235`,
    499: `235`,
    5: `2`,
    50: `10`,
    500: `236`,
    501: `237`,
    502: `242`,
    503: `242`,
    504: `243`,
    505: `243`,
    506: `244`,
    507: `245`,
    508: `245`,
    509: `246`,
    51: `11`,
    510: `246`,
    511: `248`,
    512: `249`,
    513: `249`,
    514: `250`,
    515: `251`,
    516: `251`,
    517: `252`,
    518: `253`,
    519: `254`,
    52: `11`,
    520: `254`,
    521: `254`,
    522: `255`,
    523: `255`,
    524: `255`,
    525: `256`,
    526: `257`,
    527: `257`,
    528: `258`,
    529: `258`,
    53: `12`,
    530: `259`,
    531: `260`,
    532: `265`,
    533: `266`,
    534: `267`,
    535: `267`,
    536: `268`,
    537: `269`,
    538: `269`,
    539: `270`,
    54: `12`,
    540: `270`,
    541: `271`,
    542: `272`,
    543: `272`,
    544: `272`,
    545: `273`,
    546: `273`,
    547: `273`,
    548: `275`,
    549: `276`,
    55: `13`,
    550: `277`,
    551: `277`,
    552: `278`,
    553: `279`,
    554: `279`,
    555: `280`,
    556: `281`,
    557: `281`,
    558: `282`,
    559: `283`,
    56: `14`,
    560: `283`,
    561: `284`,
    562: `285`,
    563: `285`,
    564: `285`,
    565: `286`,
    566: `286`,
    567: `286`,
    568: `287`,
    569: `287`,
    57: `14`,
    570: `288`,
    571: `289`,
    572: `289`,
    573: `289`,
    574: `290`,
    575: `290`,
    576: `290`,
    577: `291`,
    578: `291`,
    579: `292`,
    58: `15`,
    580: `292`,
    581: `293`,
    582: `294`,
    583: `294`,
    584: `295`,
    585: `296`,
    586: `296`,
    587: `297`,
    588: `298`,
    589: `300`,
    59: `16`,
    590: `300`,
    591: `301`,
    592: `301`,
    593: `302`,
    594: `303`,
    595: `303`,
    596: `303`,
    597: `304`,
    598: `304`,
    599: `305`,
    6: `2`,
    60: `17`,
    600: `305`,
    601: `306`,
    602: `307`,
    603: `307`,
    604: `308`,
    605: `309`,
    606: `310`,
    607: `310`,
    608: `311`,
    609: `311`,
    61: `18`,
    610: `311`,
    611: `312`,
    612: `312`,
    613: `313`,
    614: `313`,
    615: `314`,
    616: `315`,
    617: `315`,
    618: `316`,
    619: `317`,
    62: `19`,
    620: `317`,
    621: `318`,
    622: `319`,
    623: `321`,
    624: `322`,
    625: `322`,
    626: `323`,
    627: `323`,
    628: `323`,
    629: `323`,
    63: `20`,
    630: `323`,
    631: `323`,
    632: `323`,
    633: `323`,
    634: `323`,
    635: `323`,
    636: `324`,
    637: `324`,
    638: `325`,
    639: `326`,
    64: `20`,
    640: `326`,
    641: `326`,
    642: `327`,
    643: `328`,
    644: `329`,
    645: `329`,
    646: `330`,
    647: `331`,
    648: `331`,
    649: `331`,
    65: `21`,
    650: `332`,
    651: `332`,
    652: `333`,
    653: `333`,
    654: `334`,
    655: `334`,
    656: `335`,
    657: `335`,
    658: `335`,
    659: `337`,
    66: `22`,
    660: `337`,
    661: `338`,
    662: `338`,
    663: `338`,
    664: `339`,
    665: `339`,
    666: `340`,
    667: `340`,
    668: `341`,
    669: `341`,
    67: `24`,
    670: `341`,
    671: `342`,
    672: `342`,
    673: `343`,
    674: `343`,
    675: `344`,
    676: `344`,
    677: `345`,
    678: `346`,
    679: `346`,
    68: `24`,
    680: `348`,
    681: `349`,
    682: `349`,
    683: `350`,
    684: `351`,
    685: `351`,
    686: `352`,
    687: `353`,
    688: `354`,
    689: `354`,
    69: `24`,
    690: `354`,
    691: `355`,
    692: `356`,
    693: `356`,
    694: `357`,
    695: `358`,
    696: `359`,
    697: `360`,
    698: `361`,
    699: `366`,
    7: `2`,
    70: `24`,
    700: `366`,
    701: `367`,
    702: `367`,
    703: `368`,
    704: `368`,
    705: `368`,
    706: `369`,
    707: `369`,
    708: `370`,
    709: `371`,
    71: `24`,
    710: `376`,
    711: `376`,
    712: `377`,
    713: `378`,
    714: `378`,
    715: `379`,
    716: `380`,
    717: `381`,
    718: `381`,
    719: `381`,
    72: `24`,
    720: `382`,
    721: `382`,
    722: `382`,
    723: `382`,
    724: `382`,
    725: `382`,
    726: `383`,
    727: `383`,
    728: `384`,
    729: `385`,
    73: `24`,
    730: `385`,
    731: `386`,
    732: `387`,
    733: `389`,
    734: `390`,
    735: `390`,
    736: `391`,
    737: `391`,
    738: `391`,
    739: `391`,
    74: `24`,
    740: `391`,
    741: `391`,
    742: `391`,
    743: `391`,
    744: `391`,
    745: `391`,
    746: `392`,
    747: `392`,
    748: `393`,
    749: `394`,
    75: `24`,
    750: `394`,
    751: `394`,
    752: `395`,
    753: `396`,
    754: `397`,
    755: `397`,
    756: `398`,
    757: `399`,
    758: `399`,
    759: `399`,
    76: `24`,
    760: `400`,
    761: `400`,
    762: `401`,
    763: `401`,
    764: `402`,
    765: `402`,
    766: `403`,
    767: `403`,
    768: `403`,
    769: `405`,
    77: `24`,
    770: `405`,
    771: `406`,
    772: `406`,
    773: `406`,
    774: `407`,
    775: `408`,
    776: `408`,
    777: `409`,
    778: `409`,
    779: `410`,
    78: `24`,
    780: `411`,
    781: `417`,
    782: `418`,
    783: `418`,
    784: `419`,
    785: `420`,
    786: `420`,
    787: `421`,
    788: `422`,
    789: `422`,
    79: `24`,
    790: `422`,
    791: `423`,
    792: `424`,
    793: `424`,
    794: `425`,
    795: `426`,
    796: `427`,
    797: `428`,
    798: `429`,
    799: `434`,
    8: `2`,
    80: `24`,
    800: `434`,
    801: `435`,
    802: `435`,
    803: `436`,
    804: `436`,
    805: `436`,
    806: `437`,
    807: `437`,
    808: `438`,
    809: `439`,
    81: `24`,
    810: `444`,
    811: `445`,
    812: `446`,
    813: `446`,
    814: `447`,
    815: `448`,
    816: `448`,
    817: `448`,
    818: `449`,
    819: `449`,
    82: `24`,
    820: `449`,
    821: `449`,
    822: `449`,
    823: `449`,
    824: `450`,
    825: `450`,
    826: `451`,
    827: `452`,
    828: `454`,
    829: `455`,
    83: `24`,
    830: `455`,
    831: `456`,
    832: `456`,
    833: `456`,
    834: `456`,
    835: `456`,
    836: `456`,
    837: `456`,
    838: `456`,
    839: `456`,
    84: `24`,
    840: `456`,
    841: `457`,
    842: `457`,
    843: `458`,
    844: `459`,
    845: `459`,
    846: `459`,
    847: `460`,
    848: `461`,
    849: `462`,
    85: `24`,
    850: `462`,
    851: `463`,
    852: `464`,
    853: `464`,
    854: `464`,
    855: `465`,
    856: `465`,
    857: `466`,
    858: `466`,
    859: `467`,
    86: `24`,
    860: `467`,
    861: `468`,
    862: `468`,
    863: `468`,
    864: `470`,
    865: `470`,
    866: `470`,
    867: `470`,
    868: `470`,
    869: `470`,
    87: `24`,
    870: `470`,
    871: `470`,
    872: `470`,
    873: `470`,
    874: `470`,
    875: `470`,
    876: `470`,
    877: `470`,
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
    899: `471`,
    9: `2`,
    90: `24`,
    900: `472`,
    901: `473`,
    902: `474`,
    903: `475`,
    904: `481`,
    905: `482`,
    906: `483`,
    907: `483`,
    908: `484`,
    909: `485`,
    91: `24`,
    910: `485`,
    911: `485`,
    912: `486`,
    913: `486`,
    914: `486`,
    915: `486`,
    916: `486`,
    917: `486`,
    918: `487`,
    919: `489`,
    92: `24`,
    920: `490`,
    921: `490`,
    922: `491`,
    923: `491`,
    924: `491`,
    925: `491`,
    926: `491`,
    927: `491`,
    928: `491`,
    929: `491`,
    93: `24`,
    930: `491`,
    931: `491`,
    932: `492`,
    933: `492`,
    934: `493`,
    935: `494`,
    936: `495`,
    937: `495`,
    938: `496`,
    939: `496`,
    94: `24`,
    940: `497`,
    941: `498`,
    942: `498`,
    943: `499`,
    944: `499`,
    945: `499`,
    946: `500`,
    947: `501`,
    948: `501`,
    949: `502`,
    95: `24`,
    950: `502`,
    951: `502`,
    952: `503`,
    953: `504`,
    954: `504`,
    955: `505`,
    956: `505`,
    957: `505`,
    958: `506`,
    959: `507`,
    96: `24`,
    960: `507`,
    961: `508`,
    962: `508`,
    963: `508`,
    964: `509`,
    965: `510`,
    966: `510`,
    967: `511`,
    968: `511`,
    969: `511`,
    97: `24`,
    970: `512`,
    971: `513`,
    972: `513`,
    973: `514`,
    974: `514`,
    975: `514`,
    976: `515`,
    977: `516`,
    978: `516`,
    979: `517`,
    98: `24`,
    980: `517`,
    981: `517`,
    982: `518`,
    983: `519`,
    984: `519`,
    985: `520`,
    986: `520`,
    987: `521`,
    988: `521`,
    989: `522`,
    99: `24`,
    990: `522`,
    991: `522`,
    992: `524`,
    993: `524`,
    994: `525`,
    995: `526`,
    996: `527`,
    997: `530`,
    998: `530`,
    999: `530`
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
    at: './index.rsh:258:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:113:29:after expr stmt semicolon',
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
