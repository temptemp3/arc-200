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
    Approval: [ctc0, ctc0, ctc1],
    Transfer: [ctc0, ctc0, ctc1]
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
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async (_v1488, _v1489 ) => {
          const v1488 = stdlib.protect(ctc0, _v1488, null);
          const v1489 = stdlib.protect(ctc0, _v1489, null);
        
        const v1490 = [v1488, v1489];
        const v1491 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v1490, ctc5), null);
        const v1492 = stdlib.fromSome(v1491, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1492;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async (_v1485 ) => {
          const v1485 = stdlib.protect(ctc0, _v1485, null);
        
        const v1486 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1485, ctc5), null);
        const v1487 = stdlib.fromSome(v1486, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1487;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        
        return v1460;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        const v1467 = v1451.name;
        
        return v1467;}))(...args));
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
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        const v1468 = v1451.symbol;
        
        return v1468;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1448, v1450, v1451, v1457, v1460, v1476] = svs;
      return (await ((async () => {
        
        
        return v1457;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc0, ctc0],
        rng: ctc5
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0],
        rng: ctc5
        },
      decimals: {
        decode: _decimals,
        dom: [],
        rng: ctc2
        },
      name: {
        decode: _name,
        dom: [],
        rng: ctc3
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc9
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc4
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc5
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
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc15 = stdlib.T_Data({
    approve0_245: ctc10,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc12,
    destroy0_245: ctc13,
    transfer0_245: ctc10,
    transferFrom0_245: ctc14
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
    fs: ['at ./index.rsh:74:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1442 = stdlib.gt256(v1431, stdlib.checkedBigNumberify('./index.rsh:79:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1442, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1445 = stdlib.le(v1428, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1445, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1427, v1425, v1424, v1426],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:73:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
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
      await stdlib.simMapSet(sim_r, 0, ctc4, v1448, ctc1, stdlib.checkedBigNumberify('./index.rsh:92:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
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
    fs: ['at ./index.rsh:74:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1457 = v1451.totalSupply;
  const v1458 = stdlib.gt256(v1457, stdlib.checkedBigNumberify('./index.rsh:79:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1460 = v1451.decimals;
  const v1461 = stdlib.le(v1460, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1449, ctc1, v1457);
  await stdlib.mapSet(map0, ctc4, v1448, ctc1, stdlib.checkedBigNumberify('./index.rsh:92:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  null;
  const v1465 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1465), {
    at: './index.rsh:95:19:application',
    fs: ['at ./index.rsh:95:19:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)', 'at ./index.rsh:95:19:application call to "liftedInteract" (defined at: ./index.rsh:95:19:application)'],
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
      case 'approve0_245': {
        const v1655 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v1666 = v1655[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
        const v1667 = v1655[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
        const v1668 = stdlib.addressEq(v1651, v1448);
        const v1669 = v1668 ? false : true;
        stdlib.assert(v1669, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v1671 = stdlib.addressEq(v1666, v1448);
        const v1672 = v1671 ? false : true;
        stdlib.assert(v1672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1676 = [v1651, v1666];
        await stdlib.mapSet(map1, ctc11, v1676, ctc1, v1667);
        null;
        const v1677 = true;
        await txn3.getOutput('approve', 'v1677', ctc3, v1677);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_245': {
        const v1828 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v1860 = v1828[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '0')];
        const v1861 = v1828[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '1')];
        const v1862 = [v1860, v1861];
        const v1863 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1862, ctc1), null);
        const v1864 = {
          None: 0,
          Some: 1
          }[v1863[0]];
        const v1865 = stdlib.eq(v1864, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1865, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v1869 = stdlib.fromSome(v1863, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v1870 = stdlib.eq256(v1869, stdlib.checkedBigNumberify('./index.rsh:222:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v1870, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc11, v1862, ctc1, undefined /* Nothing */);
        const v1875 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v1875', ctc3, v1875);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_245': {
        const v2001 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2058 = v2001[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
        const v2059 = stdlib.addressEq(v2058, v1448);
        const v2060 = v2059 ? false : true;
        stdlib.assert(v2060, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v2062 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2058, ctc1), null);
        const v2063 = {
          None: 0,
          Some: 1
          }[v2062[0]];
        const v2064 = stdlib.eq(v2063, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2064, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2067 = stdlib.fromSome(v2062, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2068 = stdlib.eq256(v2067, stdlib.checkedBigNumberify('./index.rsh:204:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2068, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v2058, ctc1, undefined /* Nothing */);
        const v2071 = true;
        await txn3.getOutput('deleteBalanceBox', 'v2071', ctc3, v2071);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_245': {
        const v2174 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2253 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v2254 = {
          None: 0,
          Some: 1
          }[v2253[0]];
        const v2255 = stdlib.eq(v2254, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2255, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1448, ctc1, undefined /* Nothing */);
        const v2257 = null;
        await txn3.getOutput('destroy', 'v2257', ctc0, v2257);
        const v2264 = v1476.decimals;
        const v2265 = v1476.enableZeroAddressBurn;
        const v2266 = v1476.manager;
        const v2267 = v1476.name;
        const v2268 = v1476.symbol;
        const v2269 = v1476.totalSupply;
        const v2270 = v1476.zeroAddress;
        const v2271 = {
          closed: true,
          decimals: v2264,
          enableZeroAddressBurn: v2265,
          manager: v2266,
          name: v2267,
          symbol: v2268,
          totalSupply: v2269,
          zeroAddress: v2270
          };
        const cv1476 = v2271;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_245': {
        const v2347 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2448 = v2347[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
        const v2449 = v2347[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
        const v2450 = stdlib.addressEq(v2448, v1448);
        const v2451 = v2450 ? false : true;
        const v2452 = v1450 ? true : v2451;
        stdlib.assert(v2452, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2454 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1651, ctc1), null);
        const v2455 = stdlib.fromSome(v2454, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2456 = stdlib.ge256(v2455, v2449);
        stdlib.assert(v2456, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2462 = stdlib.safeSub256(v2455, v2449);
        await stdlib.mapSet(map0, ctc4, v1651, ctc1, v2462);
        const v2463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2448, ctc1), null);
        const v2464 = stdlib.fromSome(v2463, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2465 = stdlib.safeAdd256(v2464, v2449);
        await stdlib.mapSet(map0, ctc4, v2448, ctc1, v2465);
        null;
        const v2467 = true;
        await txn3.getOutput('transfer', 'v2467', ctc3, v2467);
        const cv1476 = v1476;
        const cv1477 = v1653;
        
        v1476 = cv1476;
        v1477 = cv1477;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_245': {
        const v2520 = v1652[1];
        undefined /* setApiDetails */;
        ;
        const v2650 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
        const v2651 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
        const v2652 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
        const v2653 = stdlib.addressEq(v2650, v1448);
        const v2654 = v2653 ? false : true;
        stdlib.assert(v2654, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2656 = stdlib.addressEq(v2651, v1448);
        const v2657 = v2656 ? false : true;
        stdlib.assert(v2657, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2659 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2650, ctc1), null);
        const v2660 = stdlib.fromSome(v2659, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2661 = stdlib.ge256(v2660, v2652);
        stdlib.assert(v2661, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2663 = [v2650, v1651];
        const v2664 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2663, ctc1), null);
        const v2665 = stdlib.fromSome(v2664, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2666 = stdlib.ge256(v2665, v2652);
        stdlib.assert(v2666, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2673 = stdlib.safeSub256(v2660, v2652);
        await stdlib.mapSet(map0, ctc4, v2650, ctc1, v2673);
        const v2674 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2651, ctc1), null);
        const v2675 = stdlib.fromSome(v2674, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2676 = stdlib.safeAdd256(v2675, v2652);
        await stdlib.mapSet(map0, ctc4, v2651, ctc1, v2676);
        null;
        const v2681 = stdlib.safeSub256(v2665, v2652);
        await stdlib.mapSet(map1, ctc11, v2663, ctc1, v2681);
        null;
        const v2683 = true;
        await txn3.getOutput('transferFrom', 'v2683', ctc3, v2683);
        const cv1476 = v1476;
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
export async function _approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approve3 expects to receive an interact object as its second argument.`));}
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
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Data({
    approve0_245: ctc10,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc12,
    destroy0_245: ctc13,
    transfer0_245: ctc10,
    transferFrom0_245: ctc14
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
    fs: ['at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_245" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v1565 = v1564[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1569 = stdlib.addressEq(v1562, v1448);
  const v1570 = v1569 ? false : true;
  stdlib.assert(v1570, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_245" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v1572 = stdlib.addressEq(v1565, v1448);
  const v1573 = v1572 ? false : true;
  stdlib.assert(v1573, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_245" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v1582 = ['approve0_245', v1564];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1582],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'approve0_245': {
          const v1655 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v1666 = v1655[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
          const v1667 = v1655[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
          const v1676 = [v1651, v1666];
          await stdlib.simMapSet(sim_r, 1, ctc11, v1676, ctc1, v1667);
          null;
          const v1677 = true;
          const v1678 = await txn1.getOutput('approve', 'v1677', ctc4, v1677);
          
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
        case 'deleteAllowanceBox0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'transferFrom0_245': {
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
    case 'approve0_245': {
      const v1655 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v1666 = v1655[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
      const v1667 = v1655[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
      const v1668 = stdlib.addressEq(v1651, v1448);
      const v1669 = v1668 ? false : true;
      stdlib.assert(v1669, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v1671 = stdlib.addressEq(v1666, v1448);
      const v1672 = v1671 ? false : true;
      stdlib.assert(v1672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v1676 = [v1651, v1666];
      await stdlib.mapSet(map1, ctc11, v1676, ctc1, v1667);
      null;
      const v1677 = true;
      const v1678 = await txn1.getOutput('approve', 'v1677', ctc4, v1677);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v1655, v1678), {
          at: './index.rsh:184:11:application',
          fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)', 'at ./index.rsh:191:12:application call to "k" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'out',
          who: 'approve'
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
    case 'deleteAllowanceBox0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
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
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Data({
    approve0_245: ctc11,
    deleteAllowanceBox0_245: ctc10,
    deleteBalanceBox0_245: ctc12,
    destroy0_245: ctc13,
    transfer0_245: ctc11,
    transferFrom0_245: ctc14
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
    fs: ['at ./index.rsh:217:50:application call to [unknown function] (defined at: ./index.rsh:217:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
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
    fs: ['at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:217:50:application call to [unknown function] (defined at: ./index.rsh:217:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1621 = stdlib.fromSome(v1615, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1622 = stdlib.eq256(v1621, stdlib.checkedBigNumberify('./index.rsh:222:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1622, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:217:50:application call to [unknown function] (defined at: ./index.rsh:217:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_245" (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:217:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1828 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v1860 = v1828[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '0')];
          const v1861 = v1828[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '1')];
          const v1862 = [v1860, v1861];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v1862, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc10, v1862, ctc1, undefined /* Nothing */);
          const v1875 = true;
          const v1876 = await txn1.getOutput('deleteAllowanceBox', 'v1875', ctc4, v1875);
          
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
        case 'deleteBalanceBox0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'transferFrom0_245': {
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
    case 'approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1828 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v1860 = v1828[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '0')];
      const v1861 = v1828[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '1')];
      const v1862 = [v1860, v1861];
      const v1863 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1862, ctc1), null);
      const v1864 = {
        None: 0,
        Some: 1
        }[v1863[0]];
      const v1865 = stdlib.eq(v1864, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1865, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v1869 = stdlib.fromSome(v1863, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1870 = stdlib.eq256(v1869, stdlib.checkedBigNumberify('./index.rsh:222:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v1870, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc10, v1862, ctc1, undefined /* Nothing */);
      const v1875 = true;
      const v1876 = await txn1.getOutput('deleteAllowanceBox', 'v1875', ctc4, v1875);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v1828, v1876), {
          at: './index.rsh:217:11:application',
          fs: ['at ./index.rsh:217:11:application call to [unknown function] (defined at: ./index.rsh:217:11:function exp)', 'at ./index.rsh:226:12:application call to "k" (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
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
    case 'deleteBalanceBox0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
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
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Data({
    approve0_245: ctc11,
    deleteAllowanceBox0_245: ctc12,
    deleteBalanceBox0_245: ctc10,
    destroy0_245: ctc13,
    transfer0_245: ctc11,
    transferFrom0_245: ctc14
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
    fs: ['at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1587 = v1586[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1589 = stdlib.addressEq(v1587, v1448);
  const v1590 = v1589 ? false : true;
  stdlib.assert(v1590, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
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
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1597 = stdlib.fromSome(v1592, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1598 = stdlib.eq256(v1597, stdlib.checkedBigNumberify('./index.rsh:204:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1598, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_245" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:201:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2001 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2058 = v2001[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2058, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2058, ctc1, undefined /* Nothing */);
          const v2071 = true;
          const v2072 = await txn1.getOutput('deleteBalanceBox', 'v2071', ctc4, v2071);
          
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
        case 'destroy0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'transferFrom0_245': {
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
    case 'approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2001 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2058 = v2001[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
      const v2059 = stdlib.addressEq(v2058, v1448);
      const v2060 = v2059 ? false : true;
      stdlib.assert(v2060, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v2062 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2058, ctc1), null);
      const v2063 = {
        None: 0,
        Some: 1
        }[v2062[0]];
      const v2064 = stdlib.eq(v2063, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2064, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2067 = stdlib.fromSome(v2062, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2068 = stdlib.eq256(v2067, stdlib.checkedBigNumberify('./index.rsh:204:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2068, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v2058, ctc1, undefined /* Nothing */);
      const v2071 = true;
      const v2072 = await txn1.getOutput('deleteBalanceBox', 'v2071', ctc4, v2071);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2001, v2072), {
          at: './index.rsh:201:11:application',
          fs: ['at ./index.rsh:201:11:application call to [unknown function] (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:208:12:application call to "k" (defined at: ./index.rsh:206:13:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
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
    case 'destroy0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
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
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Data({
    approve0_245: ctc11,
    deleteAllowanceBox0_245: ctc12,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc10,
    transfer0_245: ctc11,
    transferFrom0_245: ctc14
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
    fs: ['at ./index.rsh:236:25:application call to [unknown function] (defined at: ./index.rsh:236:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_245" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
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
    fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:25:application call to [unknown function] (defined at: ./index.rsh:236:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_245" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:236:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2174 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1448, ctc1, undefined /* Nothing */);
          const v2257 = null;
          const v2258 = await txn1.getOutput('destroy', 'v2257', ctc0, v2257);
          
          const v2264 = v1476.decimals;
          const v2265 = v1476.enableZeroAddressBurn;
          const v2266 = v1476.manager;
          const v2267 = v1476.name;
          const v2268 = v1476.symbol;
          const v2269 = v1476.totalSupply;
          const v2270 = v1476.zeroAddress;
          const v2271 = {
            closed: true,
            decimals: v2264,
            enableZeroAddressBurn: v2265,
            manager: v2266,
            name: v2267,
            symbol: v2268,
            totalSupply: v2269,
            zeroAddress: v2270
            };
          const v3645 = v2271;
          const v3647 = v2271.closed;
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
        case 'transfer0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'transferFrom0_245': {
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
    case 'approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2174 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2253 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v2254 = {
        None: 0,
        Some: 1
        }[v2253[0]];
      const v2255 = stdlib.eq(v2254, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2255, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1448, ctc1, undefined /* Nothing */);
      const v2257 = null;
      const v2258 = await txn1.getOutput('destroy', 'v2257', ctc0, v2257);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2174, v2258), {
          at: './index.rsh:236:11:application',
          fs: ['at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:244:12:application call to "k" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v2264 = v1476.decimals;
      const v2265 = v1476.enableZeroAddressBurn;
      const v2266 = v1476.manager;
      const v2267 = v1476.name;
      const v2268 = v1476.symbol;
      const v2269 = v1476.totalSupply;
      const v2270 = v1476.zeroAddress;
      const v2271 = {
        closed: true,
        decimals: v2264,
        enableZeroAddressBurn: v2265,
        manager: v2266,
        name: v2267,
        symbol: v2268,
        totalSupply: v2269,
        zeroAddress: v2270
        };
      const v3645 = v2271;
      const v3647 = v2271.closed;
      if (v3647) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transfer0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2520 = v1652[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transfer3 expects to receive an interact object as its second argument.`));}
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
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Data({
    approve0_245: ctc10,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc12,
    destroy0_245: ctc13,
    transfer0_245: ctc10,
    transferFrom0_245: ctc14
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
    fs: ['at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_245" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v1506 = v1505[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1507 = v1505[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1510 = stdlib.addressEq(v1506, v1448);
  const v1511 = v1510 ? false : true;
  const v1512 = v1450 ? true : v1511;
  stdlib.assert(v1512, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_245" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v1514 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1503, ctc1), null);
  const v1515 = stdlib.fromSome(v1514, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1516 = stdlib.ge256(v1515, v1507);
  stdlib.assert(v1516, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_245" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v1525 = ['transfer0_245', v1505];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1525],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2347 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v2448 = v2347[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
          const v2449 = v2347[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
          const v2454 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1651, ctc1), null);
          const v2455 = stdlib.fromSome(v2454, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2462 = stdlib.safeSub256(v2455, v2449);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1651, ctc1, v2462);
          const v2463 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2448, ctc1), null);
          const v2464 = stdlib.fromSome(v2463, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2465 = stdlib.safeAdd256(v2464, v2449);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2448, ctc1, v2465);
          null;
          const v2467 = true;
          const v2468 = await txn1.getOutput('transfer', 'v2467', ctc4, v2467);
          
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
        case 'transferFrom0_245': {
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
    case 'approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2347 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2448 = v2347[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
      const v2449 = v2347[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
      const v2450 = stdlib.addressEq(v2448, v1448);
      const v2451 = v2450 ? false : true;
      const v2452 = v1450 ? true : v2451;
      stdlib.assert(v2452, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v2454 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1651, ctc1), null);
      const v2455 = stdlib.fromSome(v2454, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2456 = stdlib.ge256(v2455, v2449);
      stdlib.assert(v2456, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v2462 = stdlib.safeSub256(v2455, v2449);
      await stdlib.mapSet(map0, ctc3, v1651, ctc1, v2462);
      const v2463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2448, ctc1), null);
      const v2464 = stdlib.fromSome(v2463, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2465 = stdlib.safeAdd256(v2464, v2449);
      await stdlib.mapSet(map0, ctc3, v2448, ctc1, v2465);
      null;
      const v2467 = true;
      const v2468 = await txn1.getOutput('transfer', 'v2467', ctc4, v2467);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2347, v2468), {
          at: './index.rsh:137:11:application',
          fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:11:function exp)', 'at ./index.rsh:149:12:application call to "k" (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'out',
          who: 'transfer'
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
    case 'transferFrom0_245': {
      const v2520 = v1652[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transferFrom3 expects to receive an interact object as its second argument.`));}
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
    approve0_245: ctc12,
    deleteAllowanceBox0_245: ctc11,
    deleteBalanceBox0_245: ctc13,
    destroy0_245: ctc14,
    transfer0_245: ctc12,
    transferFrom0_245: ctc10
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
    fs: ['at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v1530 = v1529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1531 = v1529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1532 = v1529[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1536 = stdlib.addressEq(v1530, v1448);
  const v1537 = v1536 ? false : true;
  stdlib.assert(v1537, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v1539 = stdlib.addressEq(v1531, v1448);
  const v1540 = v1539 ? false : true;
  stdlib.assert(v1540, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v1542 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1530, ctc1), null);
  const v1543 = stdlib.fromSome(v1542, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1544 = stdlib.ge256(v1543, v1532);
  stdlib.assert(v1544, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v1546 = [v1530, v1527];
  const v1547 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1546, ctc1), null);
  const v1548 = stdlib.fromSome(v1547, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1549 = stdlib.ge256(v1548, v1532);
  stdlib.assert(v1549, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_245" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v1560 = ['transferFrom0_245', v1529];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1448, v1450, v1451, v1457, v1460, v1476, v1560],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:158:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1652], secs: v1654, time: v1653, didSend: v996, from: v1651 } = txn1;
      
      switch (v1652[0]) {
        case 'approve0_245': {
          const v1655 = v1652[1];
          
          break;
          }
        case 'deleteAllowanceBox0_245': {
          const v1828 = v1652[1];
          
          break;
          }
        case 'deleteBalanceBox0_245': {
          const v2001 = v1652[1];
          
          break;
          }
        case 'destroy0_245': {
          const v2174 = v1652[1];
          
          break;
          }
        case 'transfer0_245': {
          const v2347 = v1652[1];
          
          break;
          }
        case 'transferFrom0_245': {
          const v2520 = v1652[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v2650 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
          const v2651 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
          const v2652 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
          const v2659 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2650, ctc1), null);
          const v2660 = stdlib.fromSome(v2659, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2663 = [v2650, v1651];
          const v2664 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v2663, ctc1), null);
          const v2665 = stdlib.fromSome(v2664, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2673 = stdlib.safeSub256(v2660, v2652);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2650, ctc1, v2673);
          const v2674 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2651, ctc1), null);
          const v2675 = stdlib.fromSome(v2674, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2676 = stdlib.safeAdd256(v2675, v2652);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2651, ctc1, v2676);
          null;
          const v2681 = stdlib.safeSub256(v2665, v2652);
          await stdlib.simMapSet(sim_r, 1, ctc11, v2663, ctc1, v2681);
          null;
          const v2683 = true;
          const v2684 = await txn1.getOutput('transferFrom', 'v2683', ctc4, v2683);
          
          const v3701 = v1476;
          const v3703 = v1476.closed;
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
    case 'approve0_245': {
      const v1655 = v1652[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_245': {
      const v1828 = v1652[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_245': {
      const v2001 = v1652[1];
      return;
      break;
      }
    case 'destroy0_245': {
      const v2174 = v1652[1];
      return;
      break;
      }
    case 'transfer0_245': {
      const v2347 = v1652[1];
      return;
      break;
      }
    case 'transferFrom0_245': {
      const v2520 = v1652[1];
      undefined /* setApiDetails */;
      ;
      const v2650 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
      const v2651 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
      const v2652 = v2520[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
      const v2653 = stdlib.addressEq(v2650, v1448);
      const v2654 = v2653 ? false : true;
      stdlib.assert(v2654, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v2656 = stdlib.addressEq(v2651, v1448);
      const v2657 = v2656 ? false : true;
      stdlib.assert(v2657, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v2659 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2650, ctc1), null);
      const v2660 = stdlib.fromSome(v2659, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2661 = stdlib.ge256(v2660, v2652);
      stdlib.assert(v2661, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v2663 = [v2650, v1651];
      const v2664 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2663, ctc1), null);
      const v2665 = stdlib.fromSome(v2664, stdlib.checkedBigNumberify('./index.rsh:119:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2666 = stdlib.ge256(v2665, v2652);
      stdlib.assert(v2666, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v2673 = stdlib.safeSub256(v2660, v2652);
      await stdlib.mapSet(map0, ctc3, v2650, ctc1, v2673);
      const v2674 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2651, ctc1), null);
      const v2675 = stdlib.fromSome(v2674, stdlib.checkedBigNumberify('./index.rsh:114:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2676 = stdlib.safeAdd256(v2675, v2652);
      await stdlib.mapSet(map0, ctc3, v2651, ctc1, v2676);
      null;
      const v2681 = stdlib.safeSub256(v2665, v2652);
      await stdlib.mapSet(map1, ctc11, v2663, ctc1, v2681);
      null;
      const v2683 = true;
      const v2684 = await txn1.getOutput('transferFrom', 'v2683', ctc4, v2683);
      if (v996) {
        stdlib.protect(ctc0, await interact.out(v2520, v2684), {
          at: './index.rsh:158:11:application',
          fs: ['at ./index.rsh:158:11:application call to [unknown function] (defined at: ./index.rsh:158:11:function exp)', 'at ./index.rsh:175:12:application call to "k" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v3701 = v1476;
      const v3703 = v1476.closed;
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
export async function approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _approve3(ctcTop, interact);}
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
export async function transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `approve(address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`],
    pure: [`allowance(address,address)uint256`, `balanceOf(address)uint256`, `decimals()uint64`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`, `symbol()byte[8]`, `totalSupply()uint256`],
    sigs: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `allowance(address,address)uint256`, `approve(address,uint256)byte`, `balanceOf(address)uint256`, `decimals()uint64`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`, `symbol()byte[8]`, `totalSupply()uint256`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAGAAED1N4BCMTbASYHAQAACAAAAAAAAAABAQEBAgQokYhhBBjglGExGEEGIClkSSJbNQEhBFs1AihkK2RQJwRkUIIPBACKcnIEG2CazARdhU0OBGpDtgUEbMs8wgRxX8FGBHn6tGUEg7rXzASPlRtZBJyGoYUEnNaFWASh+b9MBLh3nucEvDwVbwT8MLakNhoAjg8GigaEBeYFfgZ+BpwGhwYABgsGIAYYBfMGCAWQBoEANAtXACA1DTQLVyAgNQwxADQUE0Q0DTQUE0QhBSoxADQNUFABNAyIBsQnBjEAUDQNUDQMULAjNQuACAAAAAAAAAaNNAsWUQcIULA0CxZRBwg1BDIGNQ40D1cAARdBBdoxGYEFEkSIBuIiMgoyCYgG6jQDQAAKgAQVH3x1NARQsCNDNAtXACA0C1cgIFA1DCkyAyo0DFABiAZJSTULIlUjEkQyAzQLiAYxMgOoRCEFKjQMUAGIBnUjNQuACAAAAAAAAAdTNAsWUQcIULA0CxZRBwg1BDIGNQ5C/3w0DVcBIEk1CzQUE0QpMgMoNAtQiAXySTUMIlUjEkQyAzQMiAXaMgOoRCUoNAtQiAYgIzULgAgAAAAAAAAIFzQLFlEHCFCwNAsWUQcINQQyBjUOQv8ngCEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiVSMSRCUoNBRQiAXMKTULgAgAAAAAAAAI0TQLULA0CzUEKzQPVwEIUDQPVwkBUDQPVwogUDQPVyogUDQPV0oIUDQPV1IgUDQPV3IgUDIGNQ41D0L+rjQLVwAgNQ00C1cgIDUMNBM0DTQUExFEMgMpMgMoMQBQiAUXiAULSTULNAynRCUoMQBQNAs0DKGIBT+IBQglKDQNUDIDKTIDKDQNUIgE7IgE4DQMoIgFIogE6ycFMQBQNA1QNAxQsCM1C4AIAAAAAAAACaM0CxZRBwhQsDQLFlEHCDUEMgY1DkL+JDQLVwAgNRU0C1cgIDUNNAtXQCA1DDQVNBQTRDQNNBQTRDIDKTIDKDQVUIgEg4gEd0k1FzQMp0Q0FTEAUDUWMgMpMgMqNBZQAYgEZYgEWUk1CzQMp0QlKDQVUDQXNAyhiASNiARWJSg0DVAyAykyAyg0DVCIBDqIBC40DKCIBHCIBDknBTQVUDQNUDQMULA0CzQMoYgEWTUNIQUqNBZQATQNiAQXJwY0FVAxAFA0DVCwIzULgAgAAAAAAAAKezQLFlEHCFCwNAsWUQcINQQyBjUOQv1QNAEkEkSIA+0yAykyAyo0DDQLUFABiAPEiAO4NQQxGSISREL9SiEEryg0DDQLUFAyA1BQNQskNAESRIgDuDQLIls1DDQLVwhhNQ2ABNkeTdo0DBZQNA1QsDQMiAPXNA0iVY0GAvEC+wMFAq0CsAK6QvyHNAEkEkSIA3syAykyAyg0C1CIA1aIA0o1BEL/jzQBJBJEiANfNBAWNQRC/38hBK8rNAw0C1BQMgNQUDULQv+EIQSvJwQ0C1CBQK9QUDULQv9ygGkAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/AjQBJBJEiAK6NBJXCCA1BEL+2DQBJBJEiAKoNA9XKiA0D1dKCFA0D1cBCFA0D1dSIFA0D1dyIFA0D1cKIFA0D1cJAVA0D1cAAVA1BEL+nDQBJBJEiAJsNBJXKAg1BEL+ijQBJBJEiAJaNBE1BEL+eyEEr4ABBDQMNAtQUDIDUFA1C0L+fiEEr4ABBTQNNAxQNAtQUFA1C0L+aTQMIls1DTQMVwggNRQ0DFcoIDULNAxXSAEXNRM0DFdJUDUSgATkSnsyNA0WUDQUUDQLUDQTFlEHCFA0ElCwNA2IAiU0FDQLE0Q0ElcwIEk1ETIDpUQ0EiJbSTUQgYACDkQlKDQLUDQRiAGwJSg0FFAyA4gBpicFNBRQNAtQNBFQsCg0EBZQNBMWUQcIUDQLUDQSVwggUDQSVygIUDQRUDQUUDIGNQ41D0L62YgBtoGgjQaIAb02GgE1DEL/Q4gBpDYaATULQv2hIjE0EkSBBDE1EkQiMTYSRCIxNxJEiAGEgasCryIiNQI1AShLAVcAf2crSwFXf39nJwRMV/4tZyk0ARY0AhZQZzEZIhJEiAFoQvqLNhoBNhoCNQs1DEL9FDYaATYaAjULNQxC/Sw2GgE1C0L9cUL9ijYaATYaAjULNQxC/Y02GgE1C0L9mEL9p0L7CjQNVwFANQtC+3k0DVcBYDULQvv5NBQ0ExZRBwhQNBJQNBFQNBAWUDQPUCQyBkL/Y0hMv0iJIrIBI7IQsgeyCLOJNA1XAUA1C0L5kDQNVwFANQtC+gdC+l1C/blC/chC/gFC/hA2GgE2GgI2GgM1CzUMNQ1C/iI2GgE2GgI1CzUMQv4ASIlMCUk1BjIJiACiiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiUlXAQBMIlVNib5JFlEHCEUETVCJTEm9QP9iSwOIAExC/1pJVwAgNRRJVyABFzUTSVchUDUSSVdxIDURSYGRAVs1EFeZkjUPiUkVgSBMCa9MUIm8Ik4CTTQHCDUHiSM1A4lJIhJMNAISEUSJNAYINQaJNAY0B0oPQf9XQv9fsUL/ALGyCUL++g==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `539`,
    1001: `540`,
    1002: `540`,
    1003: `541`,
    1004: `542`,
    1005: `543`,
    1006: `543`,
    1007: `545`,
    1008: `546`,
    1009: `546`,
    101: `24`,
    1010: `547`,
    1011: `548`,
    1012: `549`,
    1013: `549`,
    1014: `549`,
    1015: `550`,
    1016: `550`,
    1017: `551`,
    1018: `552`,
    1019: `553`,
    102: `24`,
    1020: `553`,
    1021: `554`,
    1022: `554`,
    1023: `555`,
    1024: `555`,
    1025: `555`,
    1026: `556`,
    1027: `556`,
    1028: `557`,
    1029: `557`,
    103: `24`,
    1030: `557`,
    1031: `557`,
    1032: `557`,
    1033: `557`,
    1034: `558`,
    1035: `558`,
    1036: `559`,
    1037: `560`,
    1038: `561`,
    1039: `561`,
    104: `24`,
    1040: `562`,
    1041: `563`,
    1042: `565`,
    1043: `565`,
    1044: `566`,
    1045: `566`,
    1046: `566`,
    1047: `567`,
    1048: `567`,
    1049: `568`,
    105: `24`,
    1050: `569`,
    1051: `570`,
    1052: `570`,
    1053: `570`,
    1054: `570`,
    1055: `570`,
    1056: `570`,
    1057: `570`,
    1058: `570`,
    1059: `570`,
    106: `24`,
    1060: `570`,
    1061: `570`,
    1062: `570`,
    1063: `570`,
    1064: `570`,
    1065: `571`,
    1066: `571`,
    1067: `571`,
    1068: `573`,
    1069: `573`,
    107: `24`,
    1070: `574`,
    1071: `575`,
    1072: `576`,
    1073: `579`,
    1074: `579`,
    1075: `579`,
    1076: `580`,
    1077: `580`,
    1078: `582`,
    1079: `583`,
    108: `24`,
    1080: `583`,
    1081: `584`,
    1082: `585`,
    1083: `585`,
    1084: `586`,
    1085: `587`,
    1086: `587`,
    1087: `587`,
    1088: `588`,
    1089: `588`,
    109: `24`,
    1090: `588`,
    1091: `589`,
    1092: `589`,
    1093: `590`,
    1094: `590`,
    1095: `590`,
    1096: `592`,
    1097: `592`,
    1098: `593`,
    1099: `594`,
    11: `2`,
    110: `24`,
    1100: `595`,
    1101: `598`,
    1102: `598`,
    1103: `598`,
    1104: `599`,
    1105: `599`,
    1106: `600`,
    1107: `601`,
    1108: `601`,
    1109: `602`,
    111: `24`,
    1110: `602`,
    1111: `602`,
    1112: `604`,
    1113: `604`,
    1114: `605`,
    1115: `606`,
    1116: `607`,
    1117: `607`,
    1118: `608`,
    1119: `608`,
    112: `24`,
    1120: `609`,
    1121: `610`,
    1122: `611`,
    1123: `611`,
    1124: `612`,
    1125: `613`,
    1126: `614`,
    1127: `614`,
    1128: `615`,
    1129: `615`,
    113: `24`,
    1130: `615`,
    1131: `617`,
    1132: `617`,
    1133: `618`,
    1134: `619`,
    1135: `619`,
    1136: `620`,
    1137: `620`,
    1138: `621`,
    1139: `622`,
    114: `24`,
    1140: `622`,
    1141: `623`,
    1142: `624`,
    1143: `625`,
    1144: `626`,
    1145: `626`,
    1146: `627`,
    1147: `627`,
    1148: `627`,
    1149: `629`,
    115: `24`,
    1150: `629`,
    1151: `629`,
    1152: `629`,
    1153: `629`,
    1154: `629`,
    1155: `629`,
    1156: `629`,
    1157: `629`,
    1158: `629`,
    1159: `629`,
    116: `24`,
    1160: `629`,
    1161: `629`,
    1162: `629`,
    1163: `629`,
    1164: `629`,
    1165: `629`,
    1166: `629`,
    1167: `629`,
    1168: `629`,
    1169: `629`,
    117: `24`,
    1170: `629`,
    1171: `629`,
    1172: `629`,
    1173: `629`,
    1174: `629`,
    1175: `629`,
    1176: `629`,
    1177: `629`,
    1178: `629`,
    1179: `629`,
    118: `24`,
    1180: `629`,
    1181: `629`,
    1182: `629`,
    1183: `629`,
    1184: `629`,
    1185: `629`,
    1186: `629`,
    1187: `629`,
    1188: `629`,
    1189: `629`,
    119: `24`,
    1190: `629`,
    1191: `629`,
    1192: `629`,
    1193: `629`,
    1194: `629`,
    1195: `629`,
    1196: `629`,
    1197: `629`,
    1198: `629`,
    1199: `629`,
    12: `2`,
    120: `24`,
    1200: `629`,
    1201: `629`,
    1202: `629`,
    1203: `629`,
    1204: `629`,
    1205: `629`,
    1206: `629`,
    1207: `629`,
    1208: `629`,
    1209: `629`,
    121: `24`,
    1210: `629`,
    1211: `629`,
    1212: `629`,
    1213: `629`,
    1214: `629`,
    1215: `629`,
    1216: `629`,
    1217: `629`,
    1218: `629`,
    1219: `629`,
    122: `24`,
    1220: `629`,
    1221: `629`,
    1222: `629`,
    1223: `629`,
    1224: `629`,
    1225: `629`,
    1226: `629`,
    1227: `629`,
    1228: `629`,
    1229: `629`,
    123: `24`,
    1230: `629`,
    1231: `629`,
    1232: `629`,
    1233: `629`,
    1234: `629`,
    1235: `629`,
    1236: `629`,
    1237: `629`,
    1238: `629`,
    1239: `629`,
    124: `24`,
    1240: `629`,
    1241: `629`,
    1242: `629`,
    1243: `629`,
    1244: `629`,
    1245: `629`,
    1246: `629`,
    1247: `629`,
    1248: `629`,
    1249: `629`,
    125: `24`,
    1250: `629`,
    1251: `629`,
    1252: `629`,
    1253: `629`,
    1254: `629`,
    1255: `629`,
    1256: `630`,
    1257: `630`,
    1258: `631`,
    1259: `631`,
    126: `24`,
    1260: `631`,
    1261: `633`,
    1262: `633`,
    1263: `634`,
    1264: `635`,
    1265: `636`,
    1266: `639`,
    1267: `639`,
    1268: `639`,
    1269: `640`,
    127: `24`,
    1270: `640`,
    1271: `641`,
    1272: `641`,
    1273: `641`,
    1274: `642`,
    1275: `642`,
    1276: `643`,
    1277: `643`,
    1278: `643`,
    1279: `645`,
    128: `24`,
    1280: `645`,
    1281: `646`,
    1282: `647`,
    1283: `648`,
    1284: `651`,
    1285: `651`,
    1286: `651`,
    1287: `652`,
    1288: `652`,
    1289: `653`,
    129: `24`,
    1290: `653`,
    1291: `653`,
    1292: `654`,
    1293: `654`,
    1294: `655`,
    1295: `655`,
    1296: `655`,
    1297: `656`,
    1298: `657`,
    1299: `657`,
    13: `2`,
    130: `24`,
    1300: `658`,
    1301: `658`,
    1302: `658`,
    1303: `659`,
    1304: `660`,
    1305: `660`,
    1306: `661`,
    1307: `661`,
    1308: `661`,
    1309: `662`,
    131: `24`,
    1310: `663`,
    1311: `663`,
    1312: `664`,
    1313: `664`,
    1314: `664`,
    1315: `665`,
    1316: `666`,
    1317: `666`,
    1318: `667`,
    1319: `667`,
    132: `24`,
    1320: `667`,
    1321: `668`,
    1322: `669`,
    1323: `669`,
    1324: `670`,
    1325: `670`,
    1326: `670`,
    1327: `671`,
    1328: `672`,
    1329: `672`,
    133: `24`,
    1330: `673`,
    1331: `673`,
    1332: `673`,
    1333: `674`,
    1334: `675`,
    1335: `675`,
    1336: `676`,
    1337: `676`,
    1338: `676`,
    1339: `678`,
    134: `24`,
    1340: `678`,
    1341: `679`,
    1342: `680`,
    1343: `681`,
    1344: `684`,
    1345: `684`,
    1346: `684`,
    1347: `685`,
    1348: `685`,
    1349: `686`,
    135: `24`,
    1350: `686`,
    1351: `686`,
    1352: `687`,
    1353: `687`,
    1354: `688`,
    1355: `688`,
    1356: `688`,
    1357: `690`,
    1358: `690`,
    1359: `691`,
    136: `24`,
    1360: `692`,
    1361: `693`,
    1362: `696`,
    1363: `696`,
    1364: `696`,
    1365: `697`,
    1366: `697`,
    1367: `698`,
    1368: `698`,
    1369: `699`,
    137: `24`,
    1370: `699`,
    1371: `699`,
    1372: `701`,
    1373: `701`,
    1374: `702`,
    1375: `703`,
    1376: `703`,
    1377: `703`,
    1378: `704`,
    1379: `704`,
    138: `24`,
    1380: `705`,
    1381: `705`,
    1382: `706`,
    1383: `707`,
    1384: `708`,
    1385: `708`,
    1386: `709`,
    1387: `710`,
    1388: `711`,
    1389: `711`,
    139: `24`,
    1390: `712`,
    1391: `712`,
    1392: `712`,
    1393: `714`,
    1394: `714`,
    1395: `715`,
    1396: `716`,
    1397: `716`,
    1398: `716`,
    1399: `717`,
    14: `2`,
    140: `24`,
    1400: `717`,
    1401: `718`,
    1402: `718`,
    1403: `719`,
    1404: `720`,
    1405: `720`,
    1406: `721`,
    1407: `722`,
    1408: `723`,
    1409: `724`,
    141: `24`,
    1410: `724`,
    1411: `725`,
    1412: `725`,
    1413: `725`,
    1414: `727`,
    1415: `727`,
    1416: `728`,
    1417: `729`,
    1418: `730`,
    1419: `730`,
    142: `24`,
    1420: `731`,
    1421: `731`,
    1422: `732`,
    1423: `732`,
    1424: `732`,
    1425: `733`,
    1426: `733`,
    1427: `734`,
    1428: `734`,
    1429: `735`,
    143: `24`,
    1430: `735`,
    1431: `735`,
    1432: `736`,
    1433: `736`,
    1434: `737`,
    1435: `737`,
    1436: `738`,
    1437: `738`,
    1438: `738`,
    1439: `739`,
    144: `25`,
    1440: `740`,
    1441: `740`,
    1442: `741`,
    1443: `741`,
    1444: `742`,
    1445: `742`,
    1446: `742`,
    1447: `743`,
    1448: `743`,
    1449: `744`,
    145: `25`,
    1450: `744`,
    1451: `744`,
    1452: `744`,
    1453: `744`,
    1454: `744`,
    1455: `745`,
    1456: `745`,
    1457: `746`,
    1458: `747`,
    1459: `748`,
    146: `25`,
    1460: `748`,
    1461: `749`,
    1462: `750`,
    1463: `750`,
    1464: `751`,
    1465: `752`,
    1466: `752`,
    1467: `753`,
    1468: `754`,
    1469: `754`,
    147: `26`,
    1470: `754`,
    1471: `755`,
    1472: `756`,
    1473: `756`,
    1474: `757`,
    1475: `758`,
    1476: `760`,
    1477: `760`,
    1478: `761`,
    1479: `761`,
    148: `26`,
    1480: `761`,
    1481: `762`,
    1482: `762`,
    1483: `763`,
    1484: `763`,
    1485: `764`,
    1486: `765`,
    1487: `769`,
    1488: `769`,
    1489: `770`,
    149: `26`,
    1490: `770`,
    1491: `770`,
    1492: `771`,
    1493: `772`,
    1494: `772`,
    1495: `773`,
    1496: `773`,
    1497: `774`,
    1498: `775`,
    1499: `779`,
    15: `2`,
    150: `26`,
    1500: `779`,
    1501: `780`,
    1502: `781`,
    1503: `782`,
    1504: `783`,
    1505: `783`,
    1506: `784`,
    1507: `784`,
    1508: `784`,
    1509: `785`,
    151: `26`,
    1510: `786`,
    1511: `791`,
    1512: `792`,
    1513: `793`,
    1514: `793`,
    1515: `794`,
    1516: `795`,
    1517: `795`,
    1518: `796`,
    1519: `796`,
    152: `26`,
    1520: `796`,
    1521: `798`,
    1522: `799`,
    1523: `800`,
    1524: `800`,
    1525: `801`,
    1526: `802`,
    1527: `802`,
    1528: `803`,
    1529: `803`,
    153: `26`,
    1530: `803`,
    1531: `804`,
    1532: `804`,
    1533: `805`,
    1534: `805`,
    1535: `806`,
    1536: `807`,
    1537: `807`,
    1538: `808`,
    1539: `809`,
    154: `26`,
    1540: `809`,
    1541: `810`,
    1542: `811`,
    1543: `813`,
    1544: `814`,
    1545: `814`,
    1546: `815`,
    1547: `816`,
    1548: `817`,
    1549: `817`,
    155: `26`,
    1550: `818`,
    1551: `819`,
    1552: `819`,
    1553: `819`,
    1554: `820`,
    1555: `821`,
    1556: `821`,
    1557: `822`,
    1558: `823`,
    1559: `823`,
    156: `26`,
    1560: `824`,
    1561: `824`,
    1562: `824`,
    1563: `825`,
    1564: `826`,
    1565: `826`,
    1566: `827`,
    1567: `827`,
    1568: `827`,
    1569: `828`,
    157: `26`,
    1570: `829`,
    1571: `829`,
    1572: `830`,
    1573: `831`,
    1574: `831`,
    1575: `832`,
    1576: `833`,
    1577: `833`,
    1578: `834`,
    1579: `834`,
    158: `26`,
    1580: `835`,
    1581: `835`,
    1582: `836`,
    1583: `836`,
    1584: `836`,
    1585: `838`,
    1586: `838`,
    1587: `838`,
    1588: `839`,
    1589: `839`,
    159: `26`,
    1590: `839`,
    1591: `839`,
    1592: `840`,
    1593: `840`,
    1594: `840`,
    1595: `841`,
    1596: `841`,
    1597: `841`,
    1598: `842`,
    1599: `842`,
    16: `2`,
    160: `26`,
    1600: `843`,
    1601: `843`,
    1602: `843`,
    1603: `845`,
    1604: `845`,
    1605: `845`,
    1606: `846`,
    1607: `846`,
    1608: `846`,
    1609: `847`,
    161: `26`,
    1610: `847`,
    1611: `848`,
    1612: `848`,
    1613: `848`,
    1614: `850`,
    1615: `851`,
    1616: `851`,
    1617: `852`,
    1618: `853`,
    1619: `854`,
    162: `26`,
    1620: `854`,
    1621: `855`,
    1622: `855`,
    1623: `856`,
    1624: `857`,
    1625: `858`,
    1626: `859`,
    1627: `859`,
    1628: `860`,
    1629: `861`,
    163: `26`,
    1630: `862`,
    1631: `863`,
    1632: `863`,
    1633: `864`,
    1634: `865`,
    1635: `866`,
    1636: `866`,
    1637: `866`,
    1638: `867`,
    1639: `867`,
    164: `26`,
    1640: `867`,
    1641: `868`,
    1642: `869`,
    1643: `870`,
    1644: `872`,
    1645: `872`,
    1646: `873`,
    1647: `873`,
    1648: `874`,
    1649: `875`,
    165: `26`,
    1650: `875`,
    1651: `876`,
    1652: `876`,
    1653: `876`,
    1654: `877`,
    1655: `878`,
    1656: `879`,
    1657: `879`,
    1658: `880`,
    1659: `880`,
    166: `26`,
    1660: `880`,
    1661: `881`,
    1662: `882`,
    1663: `882`,
    1664: `883`,
    1665: `884`,
    1666: `884`,
    1667: `884`,
    1668: `885`,
    1669: `886`,
    167: `26`,
    1670: `887`,
    1671: `887`,
    1672: `888`,
    1673: `889`,
    1674: `889`,
    1675: `890`,
    1676: `891`,
    1677: `892`,
    1678: `893`,
    1679: `893`,
    168: `26`,
    1680: `894`,
    1681: `895`,
    1682: `896`,
    1683: `898`,
    1684: `898`,
    1685: `898`,
    1686: `899`,
    1687: `899`,
    1688: `899`,
    1689: `901`,
    169: `26`,
    1690: `901`,
    1691: `901`,
    1692: `902`,
    1693: `902`,
    1694: `902`,
    1695: `903`,
    1696: `903`,
    1697: `904`,
    1698: `904`,
    1699: `905`,
    17: `2`,
    170: `26`,
    1700: `905`,
    1701: `905`,
    1702: `907`,
    1703: `907`,
    1704: `907`,
    1705: `908`,
    1706: `908`,
    1707: `908`,
    1708: `909`,
    1709: `909`,
    171: `26`,
    1710: `910`,
    1711: `910`,
    1712: `911`,
    1713: `911`,
    1714: `911`,
    1715: `913`,
    1716: `913`,
    1717: `913`,
    1718: `914`,
    1719: `914`,
    172: `26`,
    1720: `915`,
    1721: `915`,
    1722: `915`,
    1723: `917`,
    1724: `917`,
    1725: `917`,
    1726: `919`,
    1727: `919`,
    1728: `919`,
    1729: `920`,
    173: `26`,
    1730: `920`,
    1731: `920`,
    1732: `921`,
    1733: `921`,
    1734: `922`,
    1735: `922`,
    1736: `923`,
    1737: `923`,
    1738: `923`,
    1739: `925`,
    174: `26`,
    1740: `925`,
    1741: `925`,
    1742: `926`,
    1743: `926`,
    1744: `927`,
    1745: `927`,
    1746: `927`,
    1747: `929`,
    1748: `929`,
    1749: `929`,
    175: `26`,
    1750: `931`,
    1751: `931`,
    1752: `931`,
    1753: `933`,
    1754: `933`,
    1755: `934`,
    1756: `934`,
    1757: `934`,
    1758: `935`,
    1759: `935`,
    176: `26`,
    1760: `936`,
    1761: `936`,
    1762: `936`,
    1763: `938`,
    1764: `938`,
    1765: `939`,
    1766: `939`,
    1767: `939`,
    1768: `940`,
    1769: `940`,
    177: `26`,
    1770: `941`,
    1771: `941`,
    1772: `941`,
    1773: `944`,
    1774: `944`,
    1775: `945`,
    1776: `945`,
    1777: `946`,
    1778: `947`,
    1779: `947`,
    178: `26`,
    1780: `947`,
    1781: `948`,
    1782: `949`,
    1783: `949`,
    1784: `950`,
    1785: `951`,
    1786: `951`,
    1787: `952`,
    1788: `953`,
    1789: `953`,
    179: `28`,
    1790: `954`,
    1791: `955`,
    1792: `956`,
    1793: `956`,
    1794: `957`,
    1795: `958`,
    1796: `959`,
    1797: `959`,
    1798: `960`,
    1799: `960`,
    18: `2`,
    180: `30`,
    1800: `960`,
    1801: `962`,
    1802: `963`,
    1803: `964`,
    1804: `965`,
    1805: `966`,
    1806: `968`,
    1807: `969`,
    1808: `969`,
    1809: `970`,
    181: `30`,
    1810: `971`,
    1811: `971`,
    1812: `972`,
    1813: `972`,
    1814: `973`,
    1815: `973`,
    1816: `974`,
    1817: `975`,
    1818: `977`,
    1819: `977`,
    182: `31`,
    1820: `978`,
    1821: `978`,
    1822: `978`,
    1823: `979`,
    1824: `979`,
    1825: `980`,
    1826: `980`,
    1827: `980`,
    1828: `982`,
    1829: `982`,
    183: `31`,
    1830: `983`,
    1831: `983`,
    1832: `983`,
    1833: `984`,
    1834: `984`,
    1835: `985`,
    1836: `985`,
    1837: `985`,
    1838: `987`,
    1839: `987`,
    184: `31`,
    1840: `987`,
    1841: `989`,
    1842: `989`,
    1843: `989`,
    1844: `991`,
    1845: `991`,
    1846: `991`,
    1847: `993`,
    1848: `993`,
    1849: `993`,
    185: `32`,
    1850: `995`,
    1851: `995`,
    1852: `995`,
    1853: `997`,
    1854: `997`,
    1855: `997`,
    1856: `998`,
    1857: `998`,
    1858: `998`,
    1859: `999`,
    186: `32`,
    1860: `999`,
    1861: `999`,
    1862: `1000`,
    1863: `1000`,
    1864: `1001`,
    1865: `1001`,
    1866: `1002`,
    1867: `1002`,
    1868: `1003`,
    1869: `1003`,
    187: `33`,
    1870: `1003`,
    1871: `1005`,
    1872: `1005`,
    1873: `1005`,
    1874: `1006`,
    1875: `1006`,
    1876: `1006`,
    1877: `1007`,
    1878: `1007`,
    1879: `1008`,
    188: `33`,
    1880: `1008`,
    1881: `1009`,
    1882: `1009`,
    1883: `1009`,
    1884: `1011`,
    1885: `1012`,
    1886: `1014`,
    1887: `1015`,
    1888: `1016`,
    1889: `1017`,
    189: `34`,
    1890: `1017`,
    1891: `1018`,
    1892: `1018`,
    1893: `1019`,
    1894: `1019`,
    1895: `1019`,
    1896: `1020`,
    1897: `1022`,
    1898: `1023`,
    1899: `1024`,
    19: `2`,
    190: `34`,
    1900: `1024`,
    1901: `1024`,
    1902: `1025`,
    1903: `1026`,
    1904: `1026`,
    1905: `1029`,
    1906: `1029`,
    1907: `1030`,
    1908: `1030`,
    1909: `1031`,
    191: `34`,
    1910: `1032`,
    1911: `1033`,
    1912: `1034`,
    1913: `1034`,
    1914: `1035`,
    1915: `1036`,
    1916: `1036`,
    1917: `1037`,
    1918: `1037`,
    1919: `1038`,
    192: `35`,
    1920: `1038`,
    1921: `1039`,
    1922: `1040`,
    1923: `1041`,
    1924: `1041`,
    1925: `1042`,
    1926: `1043`,
    1927: `1044`,
    1928: `1045`,
    1929: `1045`,
    193: `35`,
    1930: `1046`,
    1931: `1047`,
    1932: `1048`,
    1933: `1050`,
    1934: `1051`,
    1935: `1051`,
    1936: `1051`,
    1937: `1052`,
    1938: `1053`,
    1939: `1054`,
    194: `36`,
    1940: `1055`,
    1941: `1056`,
    1942: `1058`,
    1943: `1059`,
    1944: `1060`,
    1945: `1061`,
    1946: `1061`,
    1947: `1061`,
    1948: `1062`,
    1949: `1062`,
    195: `36`,
    1950: `1063`,
    1951: `1064`,
    1952: `1065`,
    1953: `1067`,
    1954: `1068`,
    1955: `1069`,
    1956: `1070`,
    1957: `1070`,
    1958: `1070`,
    1959: `1071`,
    196: `37`,
    1960: `1071`,
    1961: `1072`,
    1962: `1072`,
    1963: `1072`,
    1964: `1073`,
    1965: `1073`,
    1966: `1073`,
    1967: `1075`,
    1968: `1076`,
    1969: `1076`,
    197: `37`,
    1970: `1076`,
    1971: `1077`,
    1972: `1077`,
    1973: `1078`,
    1974: `1079`,
    1975: `1079`,
    1976: `1079`,
    1977: `1080`,
    1978: `1081`,
    1979: `1081`,
    198: `38`,
    1980: `1082`,
    1981: `1083`,
    1982: `1083`,
    1983: `1083`,
    1984: `1084`,
    1985: `1084`,
    1986: `1085`,
    1987: `1086`,
    1988: `1086`,
    1989: `1086`,
    199: `39`,
    1990: `1087`,
    1991: `1087`,
    1992: `1088`,
    1993: `1089`,
    1994: `1089`,
    1995: `1089`,
    1996: `1090`,
    1997: `1091`,
    1998: `1091`,
    1999: `1092`,
    2: `2`,
    20: `2`,
    200: `44`,
    2000: `1092`,
    2001: `1092`,
    2002: `1093`,
    2003: `1093`,
    2004: `1094`,
    2005: `1096`,
    2006: `1097`,
    2007: `1098`,
    2008: `1098`,
    2009: `1099`,
    201: `44`,
    2010: `1100`,
    2011: `1101`,
    2012: `1102`,
    2013: `1103`,
    2014: `1104`,
    2015: `1106`,
    2016: `1107`,
    2017: `1108`,
    2018: `1108`,
    2019: `1109`,
    202: `45`,
    2020: `1111`,
    2021: `1111`,
    2022: `1112`,
    2023: `1113`,
    2024: `1113`,
    2025: `1114`,
    2026: `1116`,
    2027: `1117`,
    2028: `1117`,
    2029: `1118`,
    203: `45`,
    2030: `1120`,
    2031: `1121`,
    2032: `1122`,
    2033: `1123`,
    2034: `1124`,
    2035: `1124`,
    2036: `1125`,
    2037: `1126`,
    2038: `1127`,
    2039: `1128`,
    204: `46`,
    2040: `1130`,
    2041: `1130`,
    2042: `1131`,
    2043: `1132`,
    2044: `1132`,
    2045: `1133`,
    2046: `1135`,
    2047: `1135`,
    2048: `1136`,
    2049: `1136`,
    205: `47`,
    2050: `1137`,
    2051: `1138`,
    2052: `1139`,
    2053: `1139`,
    2054: `1139`,
    2055: `1140`,
    2056: `1140`,
    2057: `1140`,
    2058: `1142`,
    2059: `1143`,
    206: `53`,
    2060: `1143`,
    2061: `1143`,
    2062: `1145`,
    2063: `1146`,
    2064: `1146`,
    2065: `1147`,
    207: `53`,
    208: `54`,
    209: `55`,
    21: `2`,
    210: `55`,
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
    318: `117`,
    319: `118`,
    32: `2`,
    320: `119`,
    321: `119`,
    322: `121`,
    323: `122`,
    324: `122`,
    325: `123`,
    326: `124`,
    327: `124`,
    328: `125`,
    329: `126`,
    33: `2`,
    330: `127`,
    331: `127`,
    332: `127`,
    333: `128`,
    334: `129`,
    335: `129`,
    336: `130`,
    337: `131`,
    338: `132`,
    339: `133`,
    34: `2`,
    340: `134`,
    341: `139`,
    342: `139`,
    343: `140`,
    344: `140`,
    345: `141`,
    346: `141`,
    347: `141`,
    348: `142`,
    349: `142`,
    35: `2`,
    350: `143`,
    351: `144`,
    352: `149`,
    353: `149`,
    354: `150`,
    355: `151`,
    356: `151`,
    357: `152`,
    358: `153`,
    359: `154`,
    36: `2`,
    360: `154`,
    361: `154`,
    362: `155`,
    363: `156`,
    364: `156`,
    365: `157`,
    366: `157`,
    367: `157`,
    368: `157`,
    369: `157`,
    37: `2`,
    370: `157`,
    371: `157`,
    372: `157`,
    373: `157`,
    374: `157`,
    375: `158`,
    376: `158`,
    377: `159`,
    378: `160`,
    379: `160`,
    38: `2`,
    380: `160`,
    381: `161`,
    382: `162`,
    383: `163`,
    384: `163`,
    385: `164`,
    386: `165`,
    387: `165`,
    388: `165`,
    389: `166`,
    39: `2`,
    390: `166`,
    391: `167`,
    392: `167`,
    393: `168`,
    394: `168`,
    395: `169`,
    396: `169`,
    397: `169`,
    398: `171`,
    399: `171`,
    4: `2`,
    40: `2`,
    400: `172`,
    401: `172`,
    402: `172`,
    403: `173`,
    404: `174`,
    405: `174`,
    406: `175`,
    407: `175`,
    408: `176`,
    409: `177`,
    41: `4`,
    410: `183`,
    411: `184`,
    412: `184`,
    413: `185`,
    414: `186`,
    415: `186`,
    416: `187`,
    417: `188`,
    418: `188`,
    419: `188`,
    42: `4`,
    420: `189`,
    421: `190`,
    422: `190`,
    423: `191`,
    424: `192`,
    425: `193`,
    426: `194`,
    427: `195`,
    428: `200`,
    429: `200`,
    43: `5`,
    430: `201`,
    431: `201`,
    432: `202`,
    433: `202`,
    434: `202`,
    435: `203`,
    436: `203`,
    437: `204`,
    438: `205`,
    439: `210`,
    44: `5`,
    440: `211`,
    441: `212`,
    442: `212`,
    443: `213`,
    444: `214`,
    445: `214`,
    446: `214`,
    447: `215`,
    448: `216`,
    449: `216`,
    45: `5`,
    450: `217`,
    451: `217`,
    452: `217`,
    453: `217`,
    454: `217`,
    455: `217`,
    456: `217`,
    457: `217`,
    458: `217`,
    459: `217`,
    46: `6`,
    460: `218`,
    461: `218`,
    462: `219`,
    463: `220`,
    464: `220`,
    465: `220`,
    466: `221`,
    467: `222`,
    468: `223`,
    469: `223`,
    47: `7`,
    470: `224`,
    471: `225`,
    472: `225`,
    473: `225`,
    474: `226`,
    475: `226`,
    476: `227`,
    477: `227`,
    478: `228`,
    479: `228`,
    48: `8`,
    480: `229`,
    481: `229`,
    482: `229`,
    483: `231`,
    484: `231`,
    485: `231`,
    486: `231`,
    487: `231`,
    488: `231`,
    489: `231`,
    49: `9`,
    490: `231`,
    491: `231`,
    492: `231`,
    493: `231`,
    494: `231`,
    495: `231`,
    496: `231`,
    497: `231`,
    498: `231`,
    499: `231`,
    5: `2`,
    50: `10`,
    500: `231`,
    501: `231`,
    502: `231`,
    503: `231`,
    504: `231`,
    505: `231`,
    506: `231`,
    507: `231`,
    508: `231`,
    509: `231`,
    51: `11`,
    510: `231`,
    511: `231`,
    512: `231`,
    513: `231`,
    514: `231`,
    515: `231`,
    516: `231`,
    517: `231`,
    518: `232`,
    519: `233`,
    52: `11`,
    520: `234`,
    521: `235`,
    522: `236`,
    523: `242`,
    524: `243`,
    525: `244`,
    526: `244`,
    527: `245`,
    528: `246`,
    529: `246`,
    53: `12`,
    530: `246`,
    531: `247`,
    532: `248`,
    533: `248`,
    534: `249`,
    535: `249`,
    536: `249`,
    537: `249`,
    538: `249`,
    539: `249`,
    54: `12`,
    540: `249`,
    541: `249`,
    542: `249`,
    543: `249`,
    544: `250`,
    545: `250`,
    546: `251`,
    547: `252`,
    548: `253`,
    549: `253`,
    55: `13`,
    550: `254`,
    551: `254`,
    552: `255`,
    553: `256`,
    554: `256`,
    555: `257`,
    556: `257`,
    557: `257`,
    558: `258`,
    559: `259`,
    56: `14`,
    560: `259`,
    561: `260`,
    562: `260`,
    563: `260`,
    564: `261`,
    565: `262`,
    566: `262`,
    567: `263`,
    568: `263`,
    569: `263`,
    57: `14`,
    570: `264`,
    571: `265`,
    572: `265`,
    573: `266`,
    574: `266`,
    575: `266`,
    576: `267`,
    577: `268`,
    578: `268`,
    579: `269`,
    58: `15`,
    580: `269`,
    581: `269`,
    582: `270`,
    583: `271`,
    584: `271`,
    585: `272`,
    586: `272`,
    587: `272`,
    588: `273`,
    589: `274`,
    59: `16`,
    590: `274`,
    591: `275`,
    592: `275`,
    593: `275`,
    594: `276`,
    595: `277`,
    596: `277`,
    597: `278`,
    598: `278`,
    599: `279`,
    6: `2`,
    60: `17`,
    600: `279`,
    601: `280`,
    602: `280`,
    603: `280`,
    604: `282`,
    605: `282`,
    606: `283`,
    607: `283`,
    608: `283`,
    609: `284`,
    61: `18`,
    610: `284`,
    611: `285`,
    612: `285`,
    613: `286`,
    614: `286`,
    615: `286`,
    616: `287`,
    617: `287`,
    618: `288`,
    619: `288`,
    62: `19`,
    620: `289`,
    621: `289`,
    622: `290`,
    623: `290`,
    624: `291`,
    625: `292`,
    626: `293`,
    627: `298`,
    628: `298`,
    629: `300`,
    63: `20`,
    630: `301`,
    631: `301`,
    632: `302`,
    633: `303`,
    634: `303`,
    635: `304`,
    636: `305`,
    637: `305`,
    638: `305`,
    639: `306`,
    64: `20`,
    640: `306`,
    641: `306`,
    642: `307`,
    643: `308`,
    644: `308`,
    645: `309`,
    646: `309`,
    647: `310`,
    648: `311`,
    649: `316`,
    65: `21`,
    650: `317`,
    651: `318`,
    652: `318`,
    653: `319`,
    654: `320`,
    655: `320`,
    656: `321`,
    657: `321`,
    658: `322`,
    659: `323`,
    66: `22`,
    660: `323`,
    661: `323`,
    662: `324`,
    663: `324`,
    664: `324`,
    665: `326`,
    666: `327`,
    667: `328`,
    668: `328`,
    669: `329`,
    67: `24`,
    670: `330`,
    671: `330`,
    672: `331`,
    673: `332`,
    674: `332`,
    675: `333`,
    676: `334`,
    677: `334`,
    678: `335`,
    679: `336`,
    68: `24`,
    680: `336`,
    681: `336`,
    682: `337`,
    683: `337`,
    684: `337`,
    685: `338`,
    686: `338`,
    687: `339`,
    688: `340`,
    689: `340`,
    69: `24`,
    690: `340`,
    691: `341`,
    692: `341`,
    693: `341`,
    694: `342`,
    695: `342`,
    696: `343`,
    697: `343`,
    698: `344`,
    699: `345`,
    7: `2`,
    70: `24`,
    700: `345`,
    701: `346`,
    702: `347`,
    703: `347`,
    704: `348`,
    705: `349`,
    706: `351`,
    707: `352`,
    708: `352`,
    709: `353`,
    71: `24`,
    710: `353`,
    711: `353`,
    712: `353`,
    713: `353`,
    714: `353`,
    715: `353`,
    716: `353`,
    717: `353`,
    718: `353`,
    719: `354`,
    72: `24`,
    720: `354`,
    721: `355`,
    722: `356`,
    723: `356`,
    724: `356`,
    725: `357`,
    726: `358`,
    727: `359`,
    728: `359`,
    729: `360`,
    73: `24`,
    730: `361`,
    731: `361`,
    732: `361`,
    733: `362`,
    734: `362`,
    735: `363`,
    736: `363`,
    737: `364`,
    738: `364`,
    739: `365`,
    74: `24`,
    740: `365`,
    741: `365`,
    742: `367`,
    743: `367`,
    744: `368`,
    745: `368`,
    746: `368`,
    747: `369`,
    748: `369`,
    749: `370`,
    75: `24`,
    750: `370`,
    751: `371`,
    752: `371`,
    753: `371`,
    754: `372`,
    755: `372`,
    756: `373`,
    757: `373`,
    758: `374`,
    759: `374`,
    76: `24`,
    760: `374`,
    761: `375`,
    762: `375`,
    763: `376`,
    764: `376`,
    765: `377`,
    766: `377`,
    767: `378`,
    768: `379`,
    769: `384`,
    77: `24`,
    770: `384`,
    771: `385`,
    772: `385`,
    773: `386`,
    774: `387`,
    775: `392`,
    776: `392`,
    777: `394`,
    778: `395`,
    779: `395`,
    78: `24`,
    780: `396`,
    781: `397`,
    782: `397`,
    783: `398`,
    784: `399`,
    785: `399`,
    786: `399`,
    787: `400`,
    788: `400`,
    789: `400`,
    79: `24`,
    790: `401`,
    791: `402`,
    792: `402`,
    793: `403`,
    794: `403`,
    795: `404`,
    796: `405`,
    797: `410`,
    798: `410`,
    799: `411`,
    8: `2`,
    80: `24`,
    800: `411`,
    801: `412`,
    802: `413`,
    803: `413`,
    804: `414`,
    805: `414`,
    806: `416`,
    807: `417`,
    808: `417`,
    809: `418`,
    81: `24`,
    810: `419`,
    811: `419`,
    812: `420`,
    813: `421`,
    814: `422`,
    815: `422`,
    816: `422`,
    817: `423`,
    818: `423`,
    819: `423`,
    82: `24`,
    820: `424`,
    821: `425`,
    822: `425`,
    823: `426`,
    824: `426`,
    825: `427`,
    826: `428`,
    827: `433`,
    828: `434`,
    829: `435`,
    83: `24`,
    830: `435`,
    831: `436`,
    832: `437`,
    833: `437`,
    834: `438`,
    835: `438`,
    836: `439`,
    837: `440`,
    838: `440`,
    839: `440`,
    84: `24`,
    840: `441`,
    841: `441`,
    842: `441`,
    843: `443`,
    844: `444`,
    845: `445`,
    846: `445`,
    847: `446`,
    848: `447`,
    849: `447`,
    85: `24`,
    850: `448`,
    851: `449`,
    852: `449`,
    853: `450`,
    854: `451`,
    855: `451`,
    856: `452`,
    857: `453`,
    858: `453`,
    859: `453`,
    86: `24`,
    860: `454`,
    861: `454`,
    862: `454`,
    863: `455`,
    864: `455`,
    865: `456`,
    866: `457`,
    867: `457`,
    868: `457`,
    869: `458`,
    87: `24`,
    870: `458`,
    871: `458`,
    872: `459`,
    873: `459`,
    874: `460`,
    875: `460`,
    876: `461`,
    877: `462`,
    878: `462`,
    879: `463`,
    88: `24`,
    880: `464`,
    881: `464`,
    882: `465`,
    883: `466`,
    884: `468`,
    885: `468`,
    886: `469`,
    887: `469`,
    888: `470`,
    889: `471`,
    89: `24`,
    890: `471`,
    891: `471`,
    892: `472`,
    893: `472`,
    894: `473`,
    895: `473`,
    896: `474`,
    897: `475`,
    898: `475`,
    899: `476`,
    9: `2`,
    90: `24`,
    900: `477`,
    901: `478`,
    902: `478`,
    903: `479`,
    904: `479`,
    905: `479`,
    906: `480`,
    907: `480`,
    908: `481`,
    909: `481`,
    91: `24`,
    910: `482`,
    911: `483`,
    912: `483`,
    913: `484`,
    914: `485`,
    915: `485`,
    916: `486`,
    917: `487`,
    918: `489`,
    919: `490`,
    92: `24`,
    920: `490`,
    921: `491`,
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
    931: `492`,
    932: `492`,
    933: `493`,
    934: `494`,
    935: `494`,
    936: `494`,
    937: `495`,
    938: `496`,
    939: `497`,
    94: `24`,
    940: `497`,
    941: `498`,
    942: `499`,
    943: `499`,
    944: `499`,
    945: `500`,
    946: `500`,
    947: `501`,
    948: `501`,
    949: `502`,
    95: `24`,
    950: `502`,
    951: `503`,
    952: `503`,
    953: `503`,
    954: `505`,
    955: `505`,
    956: `506`,
    957: `507`,
    958: `508`,
    959: `511`,
    96: `24`,
    960: `511`,
    961: `511`,
    962: `512`,
    963: `512`,
    964: `514`,
    965: `515`,
    966: `515`,
    967: `516`,
    968: `517`,
    969: `517`,
    97: `24`,
    970: `518`,
    971: `518`,
    972: `519`,
    973: `520`,
    974: `521`,
    975: `522`,
    976: `522`,
    977: `522`,
    978: `523`,
    979: `523`,
    98: `24`,
    980: `523`,
    981: `524`,
    982: `524`,
    983: `526`,
    984: `526`,
    985: `527`,
    986: `528`,
    987: `529`,
    988: `531`,
    989: `531`,
    99: `24`,
    990: `531`,
    991: `533`,
    992: `533`,
    993: `534`,
    994: `535`,
    995: `536`,
    996: `536`,
    997: `537`,
    998: `537`,
    999: `538`
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
    at: './index.rsh:249:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:110:29:after expr stmt semicolon',
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
  "approve": approve,
  "deleteAllowanceBox": deleteAllowanceBox,
  "deleteBalanceBox": deleteBalanceBox,
  "destroy": destroy,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy,
  transfer: transfer,
  transferFrom: transferFrom
  };
