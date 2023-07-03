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
  const ctc1 = stdlib.T_UInt;
  return {
    Approval: [ctc0, ctc0, ctc1, ctc1],
    Transfer: [ctc0, ctc0, ctc1, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Object({
    decimals: ctc2,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc2
    });
  const ctc6 = stdlib.T_Object({
    closed: ctc1,
    decimals: ctc2,
    enableZeroAddressBurn: ctc1,
    manager: ctc0,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc2,
    zeroAddress: ctc0
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc8 = stdlib.T_Struct([['name', ctc3], ['symbol', ctc4], ['decimals', ctc2], ['totalSupply', ctc2], ['zeroAddress', ctc0], ['manager', ctc0], ['enableZeroAddressBurn', ctc1], ['closed', ctc1]]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc2
    });
  const map0_ctc = ctc10;
  
  const map1_ctc = ctc10;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async (_v1494, _v1495 ) => {
          const v1494 = stdlib.protect(ctc0, _v1494, null);
          const v1495 = stdlib.protect(ctc0, _v1495, null);
        
        const v1496 = [v1494, v1495];
        const v1497 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v1496, ctc2), null);
        const v1498 = stdlib.fromSome(v1497, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
        
        return v1498;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async (_v1491 ) => {
          const v1491 = stdlib.protect(ctc0, _v1491, null);
        
        const v1492 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1491, ctc2), null);
        const v1493 = stdlib.fromSome(v1492, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        
        return v1493;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async () => {
        
        
        return v1465;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async () => {
        
        const v1473 = v1456.name;
        
        return v1473;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async () => {
        
        const v1499 = v1482.name;
        const v1500 = v1482.symbol;
        const v1501 = v1482.decimals;
        const v1502 = v1482.totalSupply;
        const v1503 = v1482.zeroAddress;
        const v1504 = v1482.manager;
        const v1505 = v1482.enableZeroAddressBurn;
        const v1506 = v1482.closed;
        const v1507 = {
          closed: v1506,
          decimals: v1501,
          enableZeroAddressBurn: v1505,
          manager: v1504,
          name: v1499,
          symbol: v1500,
          totalSupply: v1502,
          zeroAddress: v1503
          };
        
        return v1507;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async () => {
        
        const v1474 = v1456.symbol;
        
        return v1474;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1453, v1455, v1456, v1462, v1465, v1482] = svs;
      return (await ((async () => {
        
        
        return v1462;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc0, ctc0],
        rng: ctc2
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0],
        rng: ctc2
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
        rng: ctc8
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc4
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc2
        }
      },
    views: {
      3: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    manager: ctc4,
    meta: ctc7,
    zeroAddress: ctc4
    });
  const ctc9 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc9,
    deleteAllowanceBox0_246: ctc10,
    deleteBalanceBox0_246: ctc11,
    destroy0_246: ctc12,
    transfer0_246: ctc9,
    transferFrom0_246: ctc13
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
  
  
  const v1428 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v1429 = v1428.enableZeroAddressBurn;
  const v1430 = v1428.manager;
  const v1431 = v1428.meta;
  const v1432 = v1428.zeroAddress;
  const v1433 = v1431.decimals;
  const v1436 = v1431.totalSupply;
  
  const v1443 = stdlib.addressEq(v1432, v1430);
  const v1444 = v1443 ? false : true;
  stdlib.assert(v1444, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1447 = stdlib.gt(v1436, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1447, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1450 = stdlib.le(v1433, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '19'));
  stdlib.assert(v1450, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1432, v1430, v1429, v1431],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:73:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1453, v1454, v1455, v1456], secs: v1458, time: v1457, didSend: v146, from: v1452 } = txn1;
      
      const v1462 = v1456.totalSupply;
      const v1465 = v1456.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1454, ctc1, v1462);
      await stdlib.simMapSet(sim_r, 0, ctc4, v1453, ctc1, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'));
      const v1470 = v1458;
      null;
      const v1471 = await ctc.getContractInfo();
      
      const v1478 = v1456.name;
      const v1479 = v1456.symbol;
      const v1481 = {
        closed: false,
        decimals: v1465,
        enableZeroAddressBurn: v1455,
        manager: v1454,
        name: v1478,
        symbol: v1479,
        totalSupply: v1462,
        zeroAddress: v1453
        };
      const v1482 = v1481;
      const v1483 = v1457;
      
      if (await (async () => {
        const v1489 = v1482.closed;
        const v1490 = v1489 ? false : true;
        
        return v1490;})()) {
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
    tys: [ctc4, ctc4, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1453, v1454, v1455, v1456], secs: v1458, time: v1457, didSend: v146, from: v1452 } = txn1;
  const v1459 = stdlib.addressEq(v1453, v1454);
  const v1460 = v1459 ? false : true;
  stdlib.assert(v1460, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1462 = v1456.totalSupply;
  const v1463 = stdlib.gt(v1462, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1463, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1465 = v1456.decimals;
  const v1466 = stdlib.le(v1465, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '19'));
  stdlib.assert(v1466, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1454, ctc1, v1462);
  await stdlib.mapSet(map0, ctc4, v1453, ctc1, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'));
  const v1470 = v1458;
  null;
  const v1471 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1471), {
    at: './index.rsh:95:19:application',
    fs: ['at ./index.rsh:95:19:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)', 'at ./index.rsh:95:19:application call to "liftedInteract" (defined at: ./index.rsh:95:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1478 = v1456.name;
  const v1479 = v1456.symbol;
  const v1481 = {
    closed: false,
    decimals: v1465,
    enableZeroAddressBurn: v1455,
    manager: v1454,
    name: v1478,
    symbol: v1479,
    totalSupply: v1462,
    zeroAddress: v1453
    };
  let v1482 = v1481;
  let v1483 = v1457;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1489 = v1482.closed;
    const v1490 = v1489 ? false : true;
    
    return v1490;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn3;
    switch (v1658[0]) {
      case 'approve0_246': {
        const v1661 = v1658[1];
        undefined /* setApiDetails */;
        ;
        const v1672 = v1661[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
        const v1673 = v1661[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
        const v1674 = stdlib.addressEq(v1657, v1453);
        const v1675 = v1674 ? false : true;
        stdlib.assert(v1675, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v1677 = stdlib.addressEq(v1672, v1453);
        const v1678 = v1677 ? false : true;
        stdlib.assert(v1678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1682 = [v1657, v1672];
        await stdlib.mapSet(map1, ctc10, v1682, ctc1, v1673);
        const v1683 = v1660;
        null;
        const v1684 = true;
        await txn3.getOutput('approve', 'v1684', ctc3, v1684);
        const cv1482 = v1482;
        const cv1483 = v1659;
        
        v1482 = cv1482;
        v1483 = cv1483;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_246': {
        const v1838 = v1658[1];
        undefined /* setApiDetails */;
        ;
        const v1871 = v1838[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '0')];
        const v1872 = v1838[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '1')];
        const v1873 = [v1871, v1872];
        const v1874 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1873, ctc1), null);
        const v1875 = {
          None: 0,
          Some: 1
          }[v1874[0]];
        const v1876 = stdlib.eq(v1875, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v1876, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v1880 = stdlib.fromSome(v1874, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
        const v1881 = stdlib.eq(v1880, stdlib.checkedBigNumberify('./index.rsh:222:42:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1881, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc10, v1873, ctc1, undefined /* Nothing */);
        const v1886 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v1886', ctc3, v1886);
        const cv1482 = v1482;
        const cv1483 = v1659;
        
        v1482 = cv1482;
        v1483 = cv1483;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_246': {
        const v2015 = v1658[1];
        undefined /* setApiDetails */;
        ;
        const v2073 = v2015[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
        const v2074 = stdlib.addressEq(v2073, v1453);
        const v2075 = v2074 ? false : true;
        stdlib.assert(v2075, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v2077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2073, ctc1), null);
        const v2078 = {
          None: 0,
          Some: 1
          }[v2077[0]];
        const v2079 = stdlib.eq(v2078, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2079, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2082 = stdlib.fromSome(v2077, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./index.rsh:204:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2083, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v2073, ctc1, undefined /* Nothing */);
        const v2086 = true;
        await txn3.getOutput('deleteBalanceBox', 'v2086', ctc3, v2086);
        const cv1482 = v1482;
        const cv1483 = v1659;
        
        v1482 = cv1482;
        v1483 = cv1483;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_246': {
        const v2192 = v1658[1];
        undefined /* setApiDetails */;
        ;
        const v2272 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2273 = {
          None: 0,
          Some: 1
          }[v2272[0]];
        const v2274 = stdlib.eq(v2273, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2274, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1453, ctc1, undefined /* Nothing */);
        const v2276 = null;
        await txn3.getOutput('destroy', 'v2276', ctc0, v2276);
        const v2283 = v1482.decimals;
        const v2284 = v1482.enableZeroAddressBurn;
        const v2285 = v1482.manager;
        const v2286 = v1482.name;
        const v2287 = v1482.symbol;
        const v2288 = v1482.totalSupply;
        const v2289 = v1482.zeroAddress;
        const v2290 = {
          closed: true,
          decimals: v2283,
          enableZeroAddressBurn: v2284,
          manager: v2285,
          name: v2286,
          symbol: v2287,
          totalSupply: v2288,
          zeroAddress: v2289
          };
        const cv1482 = v2290;
        const cv1483 = v1659;
        
        v1482 = cv1482;
        v1483 = cv1483;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_246': {
        const v2369 = v1658[1];
        undefined /* setApiDetails */;
        ;
        const v2471 = v2369[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
        const v2472 = v2369[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
        const v2473 = stdlib.addressEq(v2471, v1453);
        const v2474 = v2473 ? false : true;
        const v2475 = v1455 ? true : v2474;
        stdlib.assert(v2475, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2477 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1657, ctc1), null);
        const v2478 = stdlib.fromSome(v2477, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2479 = stdlib.ge(v2478, v2472);
        stdlib.assert(v2479, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2485 = stdlib.safeSub(v2478, v2472);
        await stdlib.mapSet(map0, ctc4, v1657, ctc1, v2485);
        const v2486 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2471, ctc1), null);
        const v2487 = stdlib.fromSome(v2486, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2488 = stdlib.safeAdd(v2487, v2472);
        await stdlib.mapSet(map0, ctc4, v2471, ctc1, v2488);
        const v2489 = v1660;
        null;
        const v2491 = true;
        await txn3.getOutput('transfer', 'v2491', ctc3, v2491);
        const cv1482 = v1482;
        const cv1483 = v1659;
        
        v1482 = cv1482;
        v1483 = cv1483;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_246': {
        const v2546 = v1658[1];
        undefined /* setApiDetails */;
        ;
        const v2678 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
        const v2679 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
        const v2680 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
        const v2681 = stdlib.addressEq(v2678, v1453);
        const v2682 = v2681 ? false : true;
        stdlib.assert(v2682, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2684 = stdlib.addressEq(v2679, v1453);
        const v2685 = v2684 ? false : true;
        stdlib.assert(v2685, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2678, ctc1), null);
        const v2688 = stdlib.fromSome(v2687, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2689 = stdlib.ge(v2688, v2680);
        stdlib.assert(v2689, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2691 = [v2678, v1657];
        const v2692 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2691, ctc1), null);
        const v2693 = stdlib.fromSome(v2692, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
        const v2694 = stdlib.ge(v2693, v2680);
        stdlib.assert(v2694, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2701 = stdlib.safeSub(v2688, v2680);
        await stdlib.mapSet(map0, ctc4, v2678, ctc1, v2701);
        const v2702 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2679, ctc1), null);
        const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2704 = stdlib.safeAdd(v2703, v2680);
        await stdlib.mapSet(map0, ctc4, v2679, ctc1, v2704);
        const v2705 = v1660;
        null;
        const v2710 = stdlib.safeSub(v2693, v2680);
        await stdlib.mapSet(map1, ctc10, v2691, ctc1, v2710);
        const v2712 = v1660;
        null;
        const v2713 = true;
        await txn3.getOutput('transferFrom', 'v2713', ctc3, v2713);
        const cv1482 = v1482;
        const cv1483 = v1659;
        
        v1482 = cv1482;
        v1483 = cv1483;
        
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc9,
    deleteAllowanceBox0_246: ctc10,
    deleteBalanceBox0_246: ctc11,
    destroy0_246: ctc12,
    transfer0_246: ctc9,
    transferFrom0_246: ctc13
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
  
  
  const [v1453, v1455, v1456, v1462, v1465, v1482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1568 = ctc.selfAddress();
  const v1570 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_246" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v1571 = v1570[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1575 = stdlib.addressEq(v1568, v1453);
  const v1576 = v1575 ? false : true;
  stdlib.assert(v1576, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_246" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v1578 = stdlib.addressEq(v1571, v1453);
  const v1579 = v1578 ? false : true;
  stdlib.assert(v1579, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_246" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v1588 = ['approve0_246', v1570];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1462, v1465, v1482, v1588],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'approve0_246': {
          const v1661 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v1672 = v1661[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
          const v1673 = v1661[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
          const v1682 = [v1657, v1672];
          await stdlib.simMapSet(sim_r, 1, ctc10, v1682, ctc1, v1673);
          const v1683 = v1660;
          null;
          const v1684 = true;
          const v1685 = await txn1.getOutput('approve', 'v1684', ctc4, v1684);
          
          const v3591 = v1482;
          const v3593 = v1482.closed;
          if (v3593) {
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
        case 'deleteAllowanceBox0_246': {
          const v1838 = v1658[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2015 = v1658[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2192 = v1658[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2369 = v1658[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2546 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'approve0_246': {
      const v1661 = v1658[1];
      undefined /* setApiDetails */;
      ;
      const v1672 = v1661[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
      const v1673 = v1661[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
      const v1674 = stdlib.addressEq(v1657, v1453);
      const v1675 = v1674 ? false : true;
      stdlib.assert(v1675, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v1677 = stdlib.addressEq(v1672, v1453);
      const v1678 = v1677 ? false : true;
      stdlib.assert(v1678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v1682 = [v1657, v1672];
      await stdlib.mapSet(map1, ctc10, v1682, ctc1, v1673);
      const v1683 = v1660;
      null;
      const v1684 = true;
      const v1685 = await txn1.getOutput('approve', 'v1684', ctc4, v1684);
      if (v997) {
        stdlib.protect(ctc0, await interact.out(v1661, v1685), {
          at: './index.rsh:184:11:application',
          fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)', 'at ./index.rsh:191:12:application call to "k" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v3591 = v1482;
      const v3593 = v1482.closed;
      if (v3593) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1838 = v1658[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2015 = v1658[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2192 = v1658[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2369 = v1658[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2546 = v1658[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc10,
    deleteAllowanceBox0_246: ctc9,
    deleteBalanceBox0_246: ctc11,
    destroy0_246: ctc12,
    transfer0_246: ctc10,
    transferFrom0_246: ctc13
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
  
  
  const [v1453, v1455, v1456, v1462, v1465, v1482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1615 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:217:50:application call to [unknown function] (defined at: ./index.rsh:217:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_246" (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1616 = v1615[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1617 = v1615[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1620 = [v1616, v1617];
  const v1621 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1620, ctc1), null);
  const v1622 = {
    None: 0,
    Some: 1
    }[v1621[0]];
  const v1623 = stdlib.eq(v1622, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1623, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:217:50:application call to [unknown function] (defined at: ./index.rsh:217:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_246" (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1627 = stdlib.fromSome(v1621, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
  const v1628 = stdlib.eq(v1627, stdlib.checkedBigNumberify('./index.rsh:222:42:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1628, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:217:50:application call to [unknown function] (defined at: ./index.rsh:217:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_246" (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v1637 = ['deleteAllowanceBox0_246', v1615];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1462, v1465, v1482, v1637],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:217:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'approve0_246': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1838 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v1871 = v1838[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '0')];
          const v1872 = v1838[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '1')];
          const v1873 = [v1871, v1872];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v1873, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc9, v1873, ctc1, undefined /* Nothing */);
          const v1886 = true;
          const v1887 = await txn1.getOutput('deleteAllowanceBox', 'v1886', ctc4, v1886);
          
          const v3619 = v1482;
          const v3621 = v1482.closed;
          if (v3621) {
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
        case 'deleteBalanceBox0_246': {
          const v2015 = v1658[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2192 = v1658[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2369 = v1658[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2546 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'approve0_246': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1838 = v1658[1];
      undefined /* setApiDetails */;
      ;
      const v1871 = v1838[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '0')];
      const v1872 = v1838[stdlib.checkedBigNumberify('./index.rsh:217:10:spread', stdlib.UInt_max, '1')];
      const v1873 = [v1871, v1872];
      const v1874 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1873, ctc1), null);
      const v1875 = {
        None: 0,
        Some: 1
        }[v1874[0]];
      const v1876 = stdlib.eq(v1875, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1876, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v1880 = stdlib.fromSome(v1874, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
      const v1881 = stdlib.eq(v1880, stdlib.checkedBigNumberify('./index.rsh:222:42:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1881, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc9, v1873, ctc1, undefined /* Nothing */);
      const v1886 = true;
      const v1887 = await txn1.getOutput('deleteAllowanceBox', 'v1886', ctc4, v1886);
      if (v997) {
        stdlib.protect(ctc0, await interact.out(v1838, v1887), {
          at: './index.rsh:217:11:application',
          fs: ['at ./index.rsh:217:11:application call to [unknown function] (defined at: ./index.rsh:217:11:function exp)', 'at ./index.rsh:226:12:application call to "k" (defined at: ./index.rsh:224:13:function exp)', 'at ./index.rsh:224:13:application call to [unknown function] (defined at: ./index.rsh:224:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v3619 = v1482;
      const v3621 = v1482.closed;
      if (v3621) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2015 = v1658[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2192 = v1658[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2369 = v1658[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2546 = v1658[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc10,
    deleteAllowanceBox0_246: ctc11,
    deleteBalanceBox0_246: ctc9,
    destroy0_246: ctc12,
    transfer0_246: ctc10,
    transferFrom0_246: ctc13
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
  
  
  const [v1453, v1455, v1456, v1462, v1465, v1482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1592 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1593 = v1592[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1595 = stdlib.addressEq(v1593, v1453);
  const v1596 = v1595 ? false : true;
  stdlib.assert(v1596, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v1598 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1593, ctc1), null);
  const v1599 = {
    None: 0,
    Some: 1
    }[v1598[0]];
  const v1600 = stdlib.eq(v1599, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1600, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1603 = stdlib.fromSome(v1598, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
  const v1604 = stdlib.eq(v1603, stdlib.checkedBigNumberify('./index.rsh:204:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1604, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v1611 = ['deleteBalanceBox0_246', v1592];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1462, v1465, v1482, v1611],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:201:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'approve0_246': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1838 = v1658[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2015 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2073 = v2015[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2073, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2073, ctc1, undefined /* Nothing */);
          const v2086 = true;
          const v2087 = await txn1.getOutput('deleteBalanceBox', 'v2086', ctc4, v2086);
          
          const v3647 = v1482;
          const v3649 = v1482.closed;
          if (v3649) {
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
        case 'destroy0_246': {
          const v2192 = v1658[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2369 = v1658[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2546 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'approve0_246': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1838 = v1658[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2015 = v1658[1];
      undefined /* setApiDetails */;
      ;
      const v2073 = v2015[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
      const v2074 = stdlib.addressEq(v2073, v1453);
      const v2075 = v2074 ? false : true;
      stdlib.assert(v2075, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v2077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2073, ctc1), null);
      const v2078 = {
        None: 0,
        Some: 1
        }[v2077[0]];
      const v2079 = stdlib.eq(v2078, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2079, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2082 = stdlib.fromSome(v2077, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./index.rsh:204:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2083, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v2073, ctc1, undefined /* Nothing */);
      const v2086 = true;
      const v2087 = await txn1.getOutput('deleteBalanceBox', 'v2086', ctc4, v2086);
      if (v997) {
        stdlib.protect(ctc0, await interact.out(v2015, v2087), {
          at: './index.rsh:201:11:application',
          fs: ['at ./index.rsh:201:11:application call to [unknown function] (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:208:12:application call to "k" (defined at: ./index.rsh:206:13:function exp)', 'at ./index.rsh:206:13:application call to [unknown function] (defined at: ./index.rsh:206:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v3647 = v1482;
      const v3649 = v1482.closed;
      if (v3649) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_246': {
      const v2192 = v1658[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2369 = v1658[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2546 = v1658[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc10,
    deleteAllowanceBox0_246: ctc11,
    deleteBalanceBox0_246: ctc12,
    destroy0_246: ctc9,
    transfer0_246: ctc10,
    transferFrom0_246: ctc13
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
  
  
  const [v1453, v1455, v1456, v1462, v1465, v1482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1641 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:236:25:application call to [unknown function] (defined at: ./index.rsh:236:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_246" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1642 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1643 = {
    None: 0,
    Some: 1
    }[v1642[0]];
  const v1644 = stdlib.eq(v1643, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1644, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:25:application call to [unknown function] (defined at: ./index.rsh:236:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_246" (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v1649 = ['destroy0_246', v1641];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1462, v1465, v1482, v1649],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:236:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'approve0_246': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1838 = v1658[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2015 = v1658[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2192 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1453, ctc1, undefined /* Nothing */);
          const v2276 = null;
          const v2277 = await txn1.getOutput('destroy', 'v2276', ctc0, v2276);
          
          const v2283 = v1482.decimals;
          const v2284 = v1482.enableZeroAddressBurn;
          const v2285 = v1482.manager;
          const v2286 = v1482.name;
          const v2287 = v1482.symbol;
          const v2288 = v1482.totalSupply;
          const v2289 = v1482.zeroAddress;
          const v2290 = {
            closed: true,
            decimals: v2283,
            enableZeroAddressBurn: v2284,
            manager: v2285,
            name: v2286,
            symbol: v2287,
            totalSupply: v2288,
            zeroAddress: v2289
            };
          const v3675 = v2290;
          const v3677 = v2290.closed;
          if (v3677) {
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
        case 'transfer0_246': {
          const v2369 = v1658[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2546 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'approve0_246': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1838 = v1658[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2015 = v1658[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2192 = v1658[1];
      undefined /* setApiDetails */;
      ;
      const v2272 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2273 = {
        None: 0,
        Some: 1
        }[v2272[0]];
      const v2274 = stdlib.eq(v2273, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2274, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1453, ctc1, undefined /* Nothing */);
      const v2276 = null;
      const v2277 = await txn1.getOutput('destroy', 'v2276', ctc0, v2276);
      if (v997) {
        stdlib.protect(ctc0, await interact.out(v2192, v2277), {
          at: './index.rsh:236:11:application',
          fs: ['at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)', 'at ./index.rsh:244:12:application call to "k" (defined at: ./index.rsh:242:13:function exp)', 'at ./index.rsh:242:13:application call to [unknown function] (defined at: ./index.rsh:242:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v2283 = v1482.decimals;
      const v2284 = v1482.enableZeroAddressBurn;
      const v2285 = v1482.manager;
      const v2286 = v1482.name;
      const v2287 = v1482.symbol;
      const v2288 = v1482.totalSupply;
      const v2289 = v1482.zeroAddress;
      const v2290 = {
        closed: true,
        decimals: v2283,
        enableZeroAddressBurn: v2284,
        manager: v2285,
        name: v2286,
        symbol: v2287,
        totalSupply: v2288,
        zeroAddress: v2289
        };
      const v3675 = v2290;
      const v3677 = v2290.closed;
      if (v3677) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transfer0_246': {
      const v2369 = v1658[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2546 = v1658[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc9,
    deleteAllowanceBox0_246: ctc10,
    deleteBalanceBox0_246: ctc11,
    destroy0_246: ctc12,
    transfer0_246: ctc9,
    transferFrom0_246: ctc13
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
  
  
  const [v1453, v1455, v1456, v1462, v1465, v1482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1509 = ctc.selfAddress();
  const v1511 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_246" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v1512 = v1511[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1513 = v1511[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1516 = stdlib.addressEq(v1512, v1453);
  const v1517 = v1516 ? false : true;
  const v1518 = v1455 ? true : v1517;
  stdlib.assert(v1518, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_246" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v1520 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1509, ctc1), null);
  const v1521 = stdlib.fromSome(v1520, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
  const v1522 = stdlib.ge(v1521, v1513);
  stdlib.assert(v1522, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_246" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v1531 = ['transfer0_246', v1511];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1462, v1465, v1482, v1531],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'approve0_246': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1838 = v1658[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2015 = v1658[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2192 = v1658[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2369 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v2471 = v2369[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
          const v2472 = v2369[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
          const v2477 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1657, ctc1), null);
          const v2478 = stdlib.fromSome(v2477, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2485 = stdlib.safeSub(v2478, v2472);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1657, ctc1, v2485);
          const v2486 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2471, ctc1), null);
          const v2487 = stdlib.fromSome(v2486, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2488 = stdlib.safeAdd(v2487, v2472);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2471, ctc1, v2488);
          const v2489 = v1660;
          null;
          const v2491 = true;
          const v2492 = await txn1.getOutput('transfer', 'v2491', ctc4, v2491);
          
          const v3703 = v1482;
          const v3705 = v1482.closed;
          if (v3705) {
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
        case 'transferFrom0_246': {
          const v2546 = v1658[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'approve0_246': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1838 = v1658[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2015 = v1658[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2192 = v1658[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2369 = v1658[1];
      undefined /* setApiDetails */;
      ;
      const v2471 = v2369[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
      const v2472 = v2369[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
      const v2473 = stdlib.addressEq(v2471, v1453);
      const v2474 = v2473 ? false : true;
      const v2475 = v1455 ? true : v2474;
      stdlib.assert(v2475, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v2477 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1657, ctc1), null);
      const v2478 = stdlib.fromSome(v2477, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2479 = stdlib.ge(v2478, v2472);
      stdlib.assert(v2479, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v2485 = stdlib.safeSub(v2478, v2472);
      await stdlib.mapSet(map0, ctc3, v1657, ctc1, v2485);
      const v2486 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2471, ctc1), null);
      const v2487 = stdlib.fromSome(v2486, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2488 = stdlib.safeAdd(v2487, v2472);
      await stdlib.mapSet(map0, ctc3, v2471, ctc1, v2488);
      const v2489 = v1660;
      null;
      const v2491 = true;
      const v2492 = await txn1.getOutput('transfer', 'v2491', ctc4, v2491);
      if (v997) {
        stdlib.protect(ctc0, await interact.out(v2369, v2492), {
          at: './index.rsh:137:11:application',
          fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:11:function exp)', 'at ./index.rsh:149:12:application call to "k" (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v3703 = v1482;
      const v3705 = v1482.closed;
      if (v3705) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transferFrom0_246': {
      const v2546 = v1658[1];
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc1,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Data({
    approve0_246: ctc11,
    deleteAllowanceBox0_246: ctc10,
    deleteBalanceBox0_246: ctc12,
    destroy0_246: ctc13,
    transfer0_246: ctc11,
    transferFrom0_246: ctc9
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
  
  
  const [v1453, v1455, v1456, v1462, v1465, v1482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1533 = ctc.selfAddress();
  const v1535 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v1536 = v1535[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1537 = v1535[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1538 = v1535[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1542 = stdlib.addressEq(v1536, v1453);
  const v1543 = v1542 ? false : true;
  stdlib.assert(v1543, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v1545 = stdlib.addressEq(v1537, v1453);
  const v1546 = v1545 ? false : true;
  stdlib.assert(v1546, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v1548 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1536, ctc1), null);
  const v1549 = stdlib.fromSome(v1548, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
  const v1550 = stdlib.ge(v1549, v1538);
  stdlib.assert(v1550, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v1552 = [v1536, v1533];
  const v1553 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1552, ctc1), null);
  const v1554 = stdlib.fromSome(v1553, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
  const v1555 = stdlib.ge(v1554, v1538);
  stdlib.assert(v1555, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v1566 = ['transferFrom0_246', v1535];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453, v1455, v1456, v1462, v1465, v1482, v1566],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:158:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
      
      switch (v1658[0]) {
        case 'approve0_246': {
          const v1661 = v1658[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1838 = v1658[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2015 = v1658[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2192 = v1658[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2369 = v1658[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2546 = v1658[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v2678 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
          const v2679 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
          const v2680 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
          const v2687 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2678, ctc1), null);
          const v2688 = stdlib.fromSome(v2687, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2691 = [v2678, v1657];
          const v2692 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v2691, ctc1), null);
          const v2693 = stdlib.fromSome(v2692, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
          const v2701 = stdlib.safeSub(v2688, v2680);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2678, ctc1, v2701);
          const v2702 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2679, ctc1), null);
          const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2704 = stdlib.safeAdd(v2703, v2680);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2679, ctc1, v2704);
          const v2705 = v1660;
          null;
          const v2710 = stdlib.safeSub(v2693, v2680);
          await stdlib.simMapSet(sim_r, 1, ctc10, v2691, ctc1, v2710);
          const v2712 = v1660;
          null;
          const v2713 = true;
          const v2714 = await txn1.getOutput('transferFrom', 'v2713', ctc4, v2713);
          
          const v3731 = v1482;
          const v3733 = v1482.closed;
          if (v3733) {
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
    tys: [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1658], secs: v1660, time: v1659, didSend: v997, from: v1657 } = txn1;
  switch (v1658[0]) {
    case 'approve0_246': {
      const v1661 = v1658[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1838 = v1658[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2015 = v1658[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2192 = v1658[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2369 = v1658[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2546 = v1658[1];
      undefined /* setApiDetails */;
      ;
      const v2678 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
      const v2679 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
      const v2680 = v2546[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
      const v2681 = stdlib.addressEq(v2678, v1453);
      const v2682 = v2681 ? false : true;
      stdlib.assert(v2682, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v2684 = stdlib.addressEq(v2679, v1453);
      const v2685 = v2684 ? false : true;
      stdlib.assert(v2685, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v2687 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2678, ctc1), null);
      const v2688 = stdlib.fromSome(v2687, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2689 = stdlib.ge(v2688, v2680);
      stdlib.assert(v2689, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v2691 = [v2678, v1657];
      const v2692 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2691, ctc1), null);
      const v2693 = stdlib.fromSome(v2692, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
      const v2694 = stdlib.ge(v2693, v2680);
      stdlib.assert(v2694, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v2701 = stdlib.safeSub(v2688, v2680);
      await stdlib.mapSet(map0, ctc3, v2678, ctc1, v2701);
      const v2702 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2679, ctc1), null);
      const v2703 = stdlib.fromSome(v2702, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2704 = stdlib.safeAdd(v2703, v2680);
      await stdlib.mapSet(map0, ctc3, v2679, ctc1, v2704);
      const v2705 = v1660;
      null;
      const v2710 = stdlib.safeSub(v2693, v2680);
      await stdlib.mapSet(map1, ctc10, v2691, ctc1, v2710);
      const v2712 = v1660;
      null;
      const v2713 = true;
      const v2714 = await txn1.getOutput('transferFrom', 'v2713', ctc4, v2713);
      if (v997) {
        stdlib.protect(ctc0, await interact.out(v2546, v2714), {
          at: './index.rsh:158:11:application',
          fs: ['at ./index.rsh:158:11:application call to [unknown function] (defined at: ./index.rsh:158:11:function exp)', 'at ./index.rsh:175:12:application call to "k" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v3731 = v1482;
      const v3733 = v1482.closed;
      if (v3733) {
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
    impure: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint64)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `approve(address,uint64)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`],
    pure: [`allowance(address,address)uint64`, `balanceOf(address)uint64`, `decimals()uint64`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint64,address,address,byte,byte)`, `symbol()byte[8]`, `totalSupply()uint64`],
    sigs: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint64)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `allowance(address,address)uint64`, `approve(address,uint64)byte`, `balanceOf(address)uint64`, `decimals()uint64`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint64,address,address,byte,byte)`, `symbol()byte[8]`, `totalSupply()uint64`, `transfer(address,uint64)byte`, `transferFrom(address,address,uint64)byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAHCAABA9STAcSQASAmBgEAAAgAAAAAAAAAAQEBBKc5iuUEIdAO2TEYQQYcKWRJI1s1ASJbNQIoZCtkUIIPBARSJdMED7AkHgQXBQq9BBtgmswEHeAZFQRGJUHTBEZ7x6QETkcyuwRsyzzCBI+VG1kEnIahhQSc1oVYBLh3nucEwj9tBgT0vCQkNhoAjg8FkQaXBfkGfgaEBesF3gV/BngGBAYZBhEGAQZ7BoEANAtXACA1DTQLIQZbNQwxADQUE0Q0DTQUE0QhBSoxADQNUFABNAwWiAa/Mgc1CycFMQBQNA1QNAwWUDQLFlCwJDULgAgAAAAAAAAGlDQLFlEHCFCwNAsWUQcINQQyBjUONA9XAAEXQQXJMRmBBRJEiAbJIzIKMgmIBtE0A0AACoAEFR98dTQEULAkQzQLVwAgNAtXICBQNQwpIq8qNAxQAYgGO0k1CyNVJBJEIq80C4gGIxcjEkQhBSo0DFABiAZcJDULgAgAAAAAAAAHXjQLFlEHCFCwNAsWUQcINQQyBjUOQv98NA1XASBJNQs0FBNEKSKvKDQLUIgF5Ek1DCNVJBJEIq80DIgFzBcjEkQhBCg0C1CIBgYkNQuACAAAAAAAAAgmNAsWUQcIULA0CxZRBwg1BDIGNQ5C/yaACQEAAAAAAAAAACNVJBJEIQQoNBRQiAXJKTULgAgAAAAAAAAI5DQLULA0CzUEKzQPVwEIUDQPVwkBUDQPVwogUDQPVyogUDQPV0oIUDQPV1IIUDQPV1ogUDIGNQ41D0L+xDQLVwAgNQ00CyEGWzUMNBM0DTQUExFEIq8pIq8oMQBQiAUfiAUTF0k1CzQMD0QhBCgxAFA0CzQMCRaIBRAhBCg0DVAirykiryg0DVCIBPOIBOcXNAwIFogE8zIHNQsnBDEAUDQNUDQMFlA0CxZQsCQ1C4AIAAAAAAAACbs0CxZRBwhQsDQLFlEHCDUEMgY1DkL+MTQLVwAgNRU0C1cgIDUNNAuBQFs1DDQVNBQTRDQNNBQTRCKvKSKvKDQVUIgEgogEdhdJNQs0DA9ENBUxAFA1FyKvKSKvKjQXUAGIBGOIBFcXSTUWNAwPRCEEKDQVUDQLNAwJFogEVCEEKDQNUCKvKSKvKDQNUIgEN4gEKxc0DAgWiAQ3Mgc1CycENBVQNA1QNAwWUDQLFlCwNBY0DAk1CyEFKjQXUAE0CxaIBA4yBzUMJwU0FVAxAFA0CxZQNAwWULAkNQuACAAAAAAAAAqZNAsWUQcIULA0CxZRBwg1BDIGNQ5C/Uw0ASUSRIgD2yKvKSKvKjQMNAtQUAGIA7KIA6Y1BDEZIxJEQv1GIq8oNAw0CxZQUDIDUFA1CyU0ARJEiAOmNAsjWzUMNAtXCEk1DYAE+Z8pFTQMFlA0DVCwNAyIA7o0DSNVjQYC3QLnAvECmAKbAqVC/Hk0ASUSRIgDaSKvKSKvKDQLUIgDRIgDODUEQv+PNAElEkSIA000EBY1BEL/fyKvKzQMNAtQUCKvUFA1C0L/hSKvgAECNAtQgSivUFA1C0L/c4BRAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/xs0ASUSRIgCwTQSVwggNQRC/vE0ASUSRIgCrzQPVyogNA9XSghQNA9XAQhQNA9XUghQNA9XWiBQNA9XCiBQNA9XCQFQNA9XAAFQNQRC/rU0ASUSRIgCczQSVygINQRC/qM0ASUSRIgCYTQRFjUEQv6TIq+AAQQ0DDQLFlBQMgNQUDULQv6WIq+AAQU0DTQMUDQLFlBQUDULQv6BNAsjWzUNNAtXCCA1FDQLVyggNQw0C1dIARc1EzQLV0k4NRKABB+QRNg0DRZQNBRQNAxQNBMWUQcIUDQSULA0DYgCIDQUNAwTRDQSgTBbSTURIw1ENBIjW0k1EIETDkQhBCg0DFA0ERaIAbYhBCg0FFAir4gBqzIHNQsnBDQUUDQMUDQRFlA0CxZQsCg0EBZQNBMWUQcIUDQMUDQSVwggUDQSVygIUDQRFlA0FFAyBjUONQ9C+uKIAaaBoI0GiAGtNhoBNQtC/ziIAZQ2GgE1C0L9riMxNBJEJTE1EkQjMTYSRCMxNxJEiAF1geMBryMjNQI1AShLAVcAf2crTFd/ZGcpNAEWNAIWUGcxGSMSRIgBYUL6nTYaATYaAjULNQxC/So2GgE2GgIXNQs1DEL9QTYaATULQv2GQv2fNhoBNhoCNQs1DEL9ojYaATULQv2sQv27QvscNA1XASg1C0L7dDQNVwFINQtC+/00FDQTFlEHCFA0ElA0ERZQNBAWUDQPUCUyBkL/aUhMv0iJI7IBJLIQsgeyCLOJNA1XASg1C0L5ljQNVwFANQtC+hdC+m1C/bRC/cNC/fxC/gs2GgE2GgI2GgMXNQs1DDUNQv4dNhoBNhoCFzULNQxC/fpIiUwJSTUGMgmIAJeJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJSVcBAEwjVU2JvkkWUQcIRQRNUIlMSb1A/2BLA4gAQUL/WElXACA1FElXIAEXNRNJVyE4NRJJgVlbNRFJgWFbNRBXaXo1D4m8I04CTTQHCDUHiSQ1A4lJIxJMNAISEUSJNAYINQaJNAY0B0oPQf9iQv9qsUL/CbGyCUL/Aw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `582`,
    1001: `583`,
    1002: `584`,
    1003: `584`,
    1004: `585`,
    1005: `585`,
    1006: `586`,
    1007: `587`,
    1008: `588`,
    1009: `589`,
    101: `21`,
    1010: `589`,
    1011: `590`,
    1012: `591`,
    1013: `592`,
    1014: `592`,
    1015: `594`,
    1016: `595`,
    1017: `595`,
    1018: `596`,
    1019: `597`,
    102: `21`,
    1020: `598`,
    1021: `598`,
    1022: `598`,
    1023: `599`,
    1024: `599`,
    1025: `600`,
    1026: `601`,
    1027: `602`,
    1028: `602`,
    1029: `603`,
    103: `21`,
    1030: `603`,
    1031: `604`,
    1032: `604`,
    1033: `604`,
    1034: `605`,
    1035: `605`,
    1036: `606`,
    1037: `606`,
    1038: `606`,
    1039: `606`,
    104: `21`,
    1040: `606`,
    1041: `606`,
    1042: `607`,
    1043: `607`,
    1044: `608`,
    1045: `609`,
    1046: `610`,
    1047: `610`,
    1048: `611`,
    1049: `612`,
    105: `21`,
    1050: `614`,
    1051: `614`,
    1052: `615`,
    1053: `615`,
    1054: `615`,
    1055: `616`,
    1056: `616`,
    1057: `617`,
    1058: `618`,
    1059: `619`,
    106: `21`,
    1060: `619`,
    1061: `619`,
    1062: `619`,
    1063: `619`,
    1064: `619`,
    1065: `619`,
    1066: `619`,
    1067: `619`,
    1068: `619`,
    1069: `619`,
    107: `21`,
    1070: `619`,
    1071: `619`,
    1072: `619`,
    1073: `620`,
    1074: `620`,
    1075: `620`,
    1076: `622`,
    1077: `622`,
    1078: `623`,
    1079: `624`,
    108: `21`,
    1080: `625`,
    1081: `628`,
    1082: `628`,
    1083: `628`,
    1084: `629`,
    1085: `630`,
    1086: `632`,
    1087: `633`,
    1088: `634`,
    1089: `635`,
    109: `21`,
    1090: `636`,
    1091: `636`,
    1092: `637`,
    1093: `638`,
    1094: `638`,
    1095: `638`,
    1096: `639`,
    1097: `639`,
    1098: `639`,
    1099: `640`,
    11: `2`,
    110: `21`,
    1100: `640`,
    1101: `641`,
    1102: `641`,
    1103: `641`,
    1104: `643`,
    1105: `643`,
    1106: `644`,
    1107: `645`,
    1108: `646`,
    1109: `649`,
    111: `21`,
    1110: `649`,
    1111: `649`,
    1112: `650`,
    1113: `650`,
    1114: `651`,
    1115: `652`,
    1116: `652`,
    1117: `653`,
    1118: `653`,
    1119: `653`,
    112: `21`,
    1120: `655`,
    1121: `656`,
    1122: `657`,
    1123: `658`,
    1124: `658`,
    1125: `659`,
    1126: `659`,
    1127: `660`,
    1128: `661`,
    1129: `662`,
    113: `21`,
    1130: `663`,
    1131: `664`,
    1132: `665`,
    1133: `666`,
    1134: `666`,
    1135: `667`,
    1136: `667`,
    1137: `667`,
    1138: `669`,
    1139: `670`,
    114: `21`,
    1140: `671`,
    1141: `671`,
    1142: `671`,
    1143: `672`,
    1144: `672`,
    1145: `673`,
    1146: `674`,
    1147: `674`,
    1148: `675`,
    1149: `676`,
    115: `21`,
    1150: `677`,
    1151: `678`,
    1152: `678`,
    1153: `679`,
    1154: `679`,
    1155: `679`,
    1156: `681`,
    1157: `681`,
    1158: `681`,
    1159: `681`,
    116: `21`,
    1160: `681`,
    1161: `681`,
    1162: `681`,
    1163: `681`,
    1164: `681`,
    1165: `681`,
    1166: `681`,
    1167: `681`,
    1168: `681`,
    1169: `681`,
    117: `21`,
    1170: `681`,
    1171: `681`,
    1172: `681`,
    1173: `681`,
    1174: `681`,
    1175: `681`,
    1176: `681`,
    1177: `681`,
    1178: `681`,
    1179: `681`,
    118: `21`,
    1180: `681`,
    1181: `681`,
    1182: `681`,
    1183: `681`,
    1184: `681`,
    1185: `681`,
    1186: `681`,
    1187: `681`,
    1188: `681`,
    1189: `681`,
    119: `21`,
    1190: `681`,
    1191: `681`,
    1192: `681`,
    1193: `681`,
    1194: `681`,
    1195: `681`,
    1196: `681`,
    1197: `681`,
    1198: `681`,
    1199: `681`,
    12: `2`,
    120: `21`,
    1200: `681`,
    1201: `681`,
    1202: `681`,
    1203: `681`,
    1204: `681`,
    1205: `681`,
    1206: `681`,
    1207: `681`,
    1208: `681`,
    1209: `681`,
    121: `21`,
    1210: `681`,
    1211: `681`,
    1212: `681`,
    1213: `681`,
    1214: `681`,
    1215: `681`,
    1216: `681`,
    1217: `681`,
    1218: `681`,
    1219: `681`,
    122: `21`,
    1220: `681`,
    1221: `681`,
    1222: `681`,
    1223: `681`,
    1224: `681`,
    1225: `681`,
    1226: `681`,
    1227: `681`,
    1228: `681`,
    1229: `681`,
    123: `21`,
    1230: `681`,
    1231: `681`,
    1232: `681`,
    1233: `681`,
    1234: `681`,
    1235: `681`,
    1236: `681`,
    1237: `681`,
    1238: `681`,
    1239: `682`,
    124: `21`,
    1240: `682`,
    1241: `683`,
    1242: `683`,
    1243: `683`,
    1244: `685`,
    1245: `685`,
    1246: `686`,
    1247: `687`,
    1248: `688`,
    1249: `691`,
    125: `21`,
    1250: `691`,
    1251: `691`,
    1252: `692`,
    1253: `692`,
    1254: `693`,
    1255: `693`,
    1256: `693`,
    1257: `694`,
    1258: `694`,
    1259: `695`,
    126: `21`,
    1260: `695`,
    1261: `695`,
    1262: `697`,
    1263: `697`,
    1264: `698`,
    1265: `699`,
    1266: `700`,
    1267: `703`,
    1268: `703`,
    1269: `703`,
    127: `21`,
    1270: `704`,
    1271: `704`,
    1272: `705`,
    1273: `705`,
    1274: `705`,
    1275: `706`,
    1276: `706`,
    1277: `707`,
    1278: `707`,
    1279: `707`,
    128: `21`,
    1280: `708`,
    1281: `709`,
    1282: `709`,
    1283: `710`,
    1284: `710`,
    1285: `710`,
    1286: `711`,
    1287: `712`,
    1288: `712`,
    1289: `713`,
    129: `21`,
    1290: `713`,
    1291: `713`,
    1292: `714`,
    1293: `715`,
    1294: `715`,
    1295: `716`,
    1296: `716`,
    1297: `716`,
    1298: `717`,
    1299: `718`,
    13: `2`,
    130: `21`,
    1300: `718`,
    1301: `719`,
    1302: `719`,
    1303: `719`,
    1304: `720`,
    1305: `721`,
    1306: `721`,
    1307: `722`,
    1308: `722`,
    1309: `722`,
    131: `21`,
    1310: `723`,
    1311: `724`,
    1312: `724`,
    1313: `725`,
    1314: `725`,
    1315: `725`,
    1316: `726`,
    1317: `727`,
    1318: `727`,
    1319: `728`,
    132: `21`,
    1320: `728`,
    1321: `728`,
    1322: `730`,
    1323: `730`,
    1324: `731`,
    1325: `732`,
    1326: `733`,
    1327: `736`,
    1328: `736`,
    1329: `736`,
    133: `21`,
    1330: `737`,
    1331: `737`,
    1332: `738`,
    1333: `738`,
    1334: `738`,
    1335: `739`,
    1336: `739`,
    1337: `740`,
    1338: `740`,
    1339: `740`,
    134: `21`,
    1340: `742`,
    1341: `742`,
    1342: `743`,
    1343: `744`,
    1344: `745`,
    1345: `748`,
    1346: `748`,
    1347: `748`,
    1348: `749`,
    1349: `749`,
    135: `21`,
    1350: `750`,
    1351: `751`,
    1352: `751`,
    1353: `752`,
    1354: `752`,
    1355: `752`,
    1356: `754`,
    1357: `755`,
    1358: `756`,
    1359: `756`,
    136: `21`,
    1360: `756`,
    1361: `757`,
    1362: `757`,
    1363: `758`,
    1364: `758`,
    1365: `759`,
    1366: `760`,
    1367: `761`,
    1368: `762`,
    1369: `762`,
    137: `21`,
    1370: `763`,
    1371: `764`,
    1372: `765`,
    1373: `765`,
    1374: `766`,
    1375: `766`,
    1376: `766`,
    1377: `768`,
    1378: `769`,
    1379: `770`,
    138: `22`,
    1380: `770`,
    1381: `770`,
    1382: `771`,
    1383: `771`,
    1384: `772`,
    1385: `772`,
    1386: `773`,
    1387: `774`,
    1388: `774`,
    1389: `775`,
    139: `22`,
    1390: `776`,
    1391: `777`,
    1392: `778`,
    1393: `779`,
    1394: `779`,
    1395: `780`,
    1396: `780`,
    1397: `780`,
    1398: `782`,
    1399: `782`,
    14: `2`,
    140: `22`,
    1400: `783`,
    1401: `784`,
    1402: `785`,
    1403: `785`,
    1404: `786`,
    1405: `786`,
    1406: `787`,
    1407: `787`,
    1408: `787`,
    1409: `788`,
    141: `23`,
    1410: `788`,
    1411: `789`,
    1412: `789`,
    1413: `790`,
    1414: `790`,
    1415: `790`,
    1416: `791`,
    1417: `791`,
    1418: `792`,
    1419: `792`,
    142: `23`,
    1420: `793`,
    1421: `793`,
    1422: `793`,
    1423: `794`,
    1424: `795`,
    1425: `795`,
    1426: `796`,
    1427: `796`,
    1428: `797`,
    1429: `797`,
    143: `23`,
    1430: `797`,
    1431: `798`,
    1432: `798`,
    1433: `799`,
    1434: `799`,
    1435: `799`,
    1436: `799`,
    1437: `799`,
    1438: `799`,
    1439: `800`,
    144: `23`,
    1440: `800`,
    1441: `801`,
    1442: `802`,
    1443: `803`,
    1444: `803`,
    1445: `804`,
    1446: `805`,
    1447: `805`,
    1448: `806`,
    1449: `807`,
    145: `23`,
    1450: `807`,
    1451: `808`,
    1452: `809`,
    1453: `809`,
    1454: `809`,
    1455: `810`,
    1456: `811`,
    1457: `811`,
    1458: `812`,
    1459: `813`,
    146: `23`,
    1460: `815`,
    1461: `815`,
    1462: `816`,
    1463: `816`,
    1464: `816`,
    1465: `817`,
    1466: `817`,
    1467: `818`,
    1468: `818`,
    1469: `819`,
    147: `23`,
    1470: `820`,
    1471: `824`,
    1472: `824`,
    1473: `825`,
    1474: `825`,
    1475: `826`,
    1476: `827`,
    1477: `828`,
    1478: `828`,
    1479: `829`,
    148: `23`,
    1480: `830`,
    1481: `831`,
    1482: `835`,
    1483: `835`,
    1484: `836`,
    1485: `837`,
    1486: `838`,
    1487: `839`,
    1488: `839`,
    1489: `840`,
    149: `23`,
    1490: `840`,
    1491: `841`,
    1492: `842`,
    1493: `847`,
    1494: `847`,
    1495: `848`,
    1496: `849`,
    1497: `849`,
    1498: `850`,
    1499: `851`,
    15: `2`,
    150: `23`,
    1500: `851`,
    1501: `852`,
    1502: `853`,
    1503: `853`,
    1504: `853`,
    1505: `855`,
    1506: `855`,
    1507: `856`,
    1508: `857`,
    1509: `857`,
    151: `23`,
    1510: `858`,
    1511: `859`,
    1512: `860`,
    1513: `861`,
    1514: `861`,
    1515: `861`,
    1516: `862`,
    1517: `862`,
    1518: `863`,
    1519: `863`,
    152: `23`,
    1520: `864`,
    1521: `864`,
    1522: `865`,
    1523: `865`,
    1524: `866`,
    1525: `867`,
    1526: `867`,
    1527: `868`,
    1528: `869`,
    1529: `869`,
    153: `23`,
    1530: `870`,
    1531: `871`,
    1532: `872`,
    1533: `872`,
    1534: `873`,
    1535: `874`,
    1536: `875`,
    1537: `877`,
    1538: `878`,
    1539: `878`,
    154: `23`,
    1540: `879`,
    1541: `880`,
    1542: `881`,
    1543: `881`,
    1544: `882`,
    1545: `883`,
    1546: `883`,
    1547: `883`,
    1548: `884`,
    1549: `885`,
    155: `23`,
    1550: `885`,
    1551: `886`,
    1552: `887`,
    1553: `887`,
    1554: `888`,
    1555: `888`,
    1556: `888`,
    1557: `889`,
    1558: `890`,
    1559: `890`,
    156: `23`,
    1560: `891`,
    1561: `891`,
    1562: `891`,
    1563: `892`,
    1564: `893`,
    1565: `893`,
    1566: `894`,
    1567: `895`,
    1568: `896`,
    1569: `896`,
    157: `23`,
    1570: `897`,
    1571: `898`,
    1572: `898`,
    1573: `899`,
    1574: `899`,
    1575: `900`,
    1576: `900`,
    1577: `901`,
    1578: `901`,
    1579: `901`,
    158: `23`,
    1580: `903`,
    1581: `903`,
    1582: `903`,
    1583: `904`,
    1584: `904`,
    1585: `904`,
    1586: `904`,
    1587: `905`,
    1588: `905`,
    1589: `905`,
    159: `23`,
    1590: `906`,
    1591: `906`,
    1592: `906`,
    1593: `907`,
    1594: `907`,
    1595: `908`,
    1596: `908`,
    1597: `908`,
    1598: `910`,
    1599: `910`,
    16: `2`,
    160: `23`,
    1600: `910`,
    1601: `911`,
    1602: `911`,
    1603: `911`,
    1604: `912`,
    1605: `912`,
    1606: `913`,
    1607: `913`,
    1608: `913`,
    1609: `915`,
    161: `23`,
    1610: `916`,
    1611: `916`,
    1612: `917`,
    1613: `918`,
    1614: `919`,
    1615: `920`,
    1616: `920`,
    1617: `921`,
    1618: `922`,
    1619: `923`,
    162: `23`,
    1620: `924`,
    1621: `924`,
    1622: `925`,
    1623: `926`,
    1624: `927`,
    1625: `928`,
    1626: `928`,
    1627: `929`,
    1628: `930`,
    1629: `931`,
    163: `23`,
    1630: `931`,
    1631: `931`,
    1632: `932`,
    1633: `932`,
    1634: `932`,
    1635: `933`,
    1636: `934`,
    1637: `935`,
    1638: `937`,
    1639: `937`,
    164: `23`,
    1640: `938`,
    1641: `938`,
    1642: `939`,
    1643: `940`,
    1644: `940`,
    1645: `941`,
    1646: `941`,
    1647: `941`,
    1648: `942`,
    1649: `943`,
    165: `23`,
    1650: `944`,
    1651: `945`,
    1652: `945`,
    1653: `945`,
    1654: `946`,
    1655: `947`,
    1656: `948`,
    1657: `948`,
    1658: `949`,
    1659: `950`,
    166: `23`,
    1660: `950`,
    1661: `951`,
    1662: `952`,
    1663: `953`,
    1664: `954`,
    1665: `954`,
    1666: `955`,
    1667: `956`,
    1668: `957`,
    1669: `959`,
    167: `23`,
    1670: `959`,
    1671: `959`,
    1672: `960`,
    1673: `960`,
    1674: `960`,
    1675: `962`,
    1676: `962`,
    1677: `962`,
    1678: `963`,
    1679: `963`,
    168: `23`,
    1680: `963`,
    1681: `964`,
    1682: `964`,
    1683: `965`,
    1684: `965`,
    1685: `966`,
    1686: `966`,
    1687: `966`,
    1688: `968`,
    1689: `968`,
    169: `23`,
    1690: `968`,
    1691: `969`,
    1692: `969`,
    1693: `969`,
    1694: `970`,
    1695: `971`,
    1696: `971`,
    1697: `972`,
    1698: `972`,
    1699: `973`,
    17: `2`,
    170: `23`,
    1700: `973`,
    1701: `973`,
    1702: `975`,
    1703: `975`,
    1704: `975`,
    1705: `976`,
    1706: `976`,
    1707: `977`,
    1708: `977`,
    1709: `977`,
    171: `23`,
    1710: `979`,
    1711: `979`,
    1712: `979`,
    1713: `981`,
    1714: `981`,
    1715: `981`,
    1716: `982`,
    1717: `982`,
    1718: `982`,
    1719: `983`,
    172: `23`,
    1720: `983`,
    1721: `984`,
    1722: `984`,
    1723: `985`,
    1724: `985`,
    1725: `985`,
    1726: `987`,
    1727: `987`,
    1728: `987`,
    1729: `988`,
    173: `25`,
    1730: `988`,
    1731: `989`,
    1732: `989`,
    1733: `989`,
    1734: `991`,
    1735: `991`,
    1736: `991`,
    1737: `993`,
    1738: `993`,
    1739: `993`,
    174: `27`,
    1740: `995`,
    1741: `995`,
    1742: `996`,
    1743: `996`,
    1744: `996`,
    1745: `997`,
    1746: `997`,
    1747: `998`,
    1748: `998`,
    1749: `998`,
    175: `27`,
    1750: `1000`,
    1751: `1000`,
    1752: `1001`,
    1753: `1001`,
    1754: `1001`,
    1755: `1002`,
    1756: `1002`,
    1757: `1003`,
    1758: `1003`,
    1759: `1003`,
    176: `28`,
    1760: `1006`,
    1761: `1006`,
    1762: `1007`,
    1763: `1007`,
    1764: `1008`,
    1765: `1009`,
    1766: `1009`,
    1767: `1009`,
    1768: `1010`,
    1769: `1011`,
    177: `28`,
    1770: `1011`,
    1771: `1012`,
    1772: `1013`,
    1773: `1013`,
    1774: `1014`,
    1775: `1015`,
    1776: `1016`,
    1777: `1016`,
    1778: `1017`,
    1779: `1018`,
    178: `28`,
    1780: `1019`,
    1781: `1019`,
    1782: `1020`,
    1783: `1021`,
    1784: `1022`,
    1785: `1022`,
    1786: `1023`,
    1787: `1023`,
    1788: `1023`,
    1789: `1025`,
    179: `29`,
    1790: `1026`,
    1791: `1027`,
    1792: `1028`,
    1793: `1029`,
    1794: `1031`,
    1795: `1032`,
    1796: `1032`,
    1797: `1033`,
    1798: `1034`,
    1799: `1034`,
    18: `2`,
    180: `29`,
    1800: `1035`,
    1801: `1035`,
    1802: `1036`,
    1803: `1036`,
    1804: `1037`,
    1805: `1038`,
    1806: `1040`,
    1807: `1040`,
    1808: `1041`,
    1809: `1041`,
    181: `30`,
    1810: `1041`,
    1811: `1042`,
    1812: `1042`,
    1813: `1043`,
    1814: `1043`,
    1815: `1043`,
    1816: `1045`,
    1817: `1045`,
    1818: `1046`,
    1819: `1046`,
    182: `30`,
    1820: `1046`,
    1821: `1047`,
    1822: `1047`,
    1823: `1048`,
    1824: `1048`,
    1825: `1048`,
    1826: `1050`,
    1827: `1050`,
    1828: `1050`,
    1829: `1052`,
    183: `31`,
    1830: `1052`,
    1831: `1052`,
    1832: `1054`,
    1833: `1054`,
    1834: `1054`,
    1835: `1056`,
    1836: `1056`,
    1837: `1056`,
    1838: `1058`,
    1839: `1058`,
    184: `31`,
    1840: `1058`,
    1841: `1060`,
    1842: `1060`,
    1843: `1060`,
    1844: `1061`,
    1845: `1061`,
    1846: `1061`,
    1847: `1062`,
    1848: `1062`,
    1849: `1062`,
    185: `32`,
    1850: `1063`,
    1851: `1064`,
    1852: `1064`,
    1853: `1065`,
    1854: `1065`,
    1855: `1066`,
    1856: `1066`,
    1857: `1067`,
    1858: `1067`,
    1859: `1067`,
    186: `33`,
    1860: `1069`,
    1861: `1069`,
    1862: `1069`,
    1863: `1070`,
    1864: `1070`,
    1865: `1070`,
    1866: `1071`,
    1867: `1072`,
    1868: `1072`,
    1869: `1073`,
    187: `33`,
    1870: `1073`,
    1871: `1074`,
    1872: `1074`,
    1873: `1074`,
    1874: `1076`,
    1875: `1077`,
    1876: `1079`,
    1877: `1080`,
    1878: `1081`,
    1879: `1082`,
    188: `34`,
    1880: `1082`,
    1881: `1083`,
    1882: `1083`,
    1883: `1084`,
    1884: `1084`,
    1885: `1084`,
    1886: `1085`,
    1887: `1087`,
    1888: `1088`,
    1889: `1089`,
    189: `34`,
    1890: `1089`,
    1891: `1089`,
    1892: `1090`,
    1893: `1091`,
    1894: `1091`,
    1895: `1094`,
    1896: `1094`,
    1897: `1095`,
    1898: `1095`,
    1899: `1096`,
    19: `2`,
    190: `35`,
    1900: `1097`,
    1901: `1098`,
    1902: `1099`,
    1903: `1099`,
    1904: `1100`,
    1905: `1101`,
    1906: `1101`,
    1907: `1102`,
    1908: `1102`,
    1909: `1103`,
    191: `35`,
    1910: `1103`,
    1911: `1104`,
    1912: `1105`,
    1913: `1106`,
    1914: `1106`,
    1915: `1107`,
    1916: `1108`,
    1917: `1109`,
    1918: `1110`,
    1919: `1110`,
    192: `36`,
    1920: `1111`,
    1921: `1112`,
    1922: `1113`,
    1923: `1115`,
    1924: `1116`,
    1925: `1116`,
    1926: `1116`,
    1927: `1117`,
    1928: `1118`,
    1929: `1119`,
    193: `37`,
    1930: `1120`,
    1931: `1121`,
    1932: `1123`,
    1933: `1124`,
    1934: `1125`,
    1935: `1126`,
    1936: `1126`,
    1937: `1126`,
    1938: `1127`,
    1939: `1127`,
    194: `42`,
    1940: `1128`,
    1941: `1129`,
    1942: `1130`,
    1943: `1132`,
    1944: `1133`,
    1945: `1134`,
    1946: `1135`,
    1947: `1135`,
    1948: `1135`,
    1949: `1136`,
    195: `42`,
    1950: `1136`,
    1951: `1137`,
    1952: `1137`,
    1953: `1137`,
    1954: `1138`,
    1955: `1138`,
    1956: `1138`,
    1957: `1140`,
    1958: `1141`,
    1959: `1141`,
    196: `43`,
    1960: `1141`,
    1961: `1142`,
    1962: `1142`,
    1963: `1143`,
    1964: `1144`,
    1965: `1144`,
    1966: `1144`,
    1967: `1145`,
    1968: `1146`,
    1969: `1146`,
    197: `43`,
    1970: `1147`,
    1971: `1148`,
    1972: `1148`,
    1973: `1148`,
    1974: `1149`,
    1975: `1149`,
    1976: `1150`,
    1977: `1151`,
    1978: `1151`,
    1979: `1152`,
    198: `44`,
    1980: `1153`,
    1981: `1153`,
    1982: `1154`,
    1983: `1155`,
    1984: `1155`,
    1985: `1156`,
    1986: `1157`,
    1987: `1157`,
    1988: `1158`,
    1989: `1158`,
    199: `45`,
    1990: `1158`,
    1991: `1159`,
    1992: `1159`,
    1993: `1160`,
    1994: `1162`,
    1995: `1163`,
    1996: `1164`,
    1997: `1164`,
    1998: `1165`,
    1999: `1167`,
    2: `2`,
    20: `2`,
    200: `51`,
    2000: `1167`,
    2001: `1168`,
    2002: `1169`,
    2003: `1169`,
    2004: `1170`,
    2005: `1172`,
    2006: `1173`,
    2007: `1173`,
    2008: `1174`,
    2009: `1176`,
    201: `51`,
    2010: `1177`,
    2011: `1178`,
    2012: `1179`,
    2013: `1180`,
    2014: `1180`,
    2015: `1181`,
    2016: `1182`,
    2017: `1183`,
    2018: `1184`,
    2019: `1186`,
    202: `52`,
    2020: `1186`,
    2021: `1187`,
    2022: `1188`,
    2023: `1188`,
    2024: `1189`,
    2025: `1191`,
    2026: `1191`,
    2027: `1192`,
    2028: `1192`,
    2029: `1193`,
    203: `53`,
    2030: `1194`,
    2031: `1195`,
    2032: `1195`,
    2033: `1195`,
    2034: `1196`,
    2035: `1196`,
    2036: `1196`,
    2037: `1198`,
    2038: `1199`,
    2039: `1199`,
    204: `53`,
    2040: `1199`,
    2041: `1201`,
    2042: `1202`,
    2043: `1202`,
    2044: `1203`,
    205: `54`,
    206: `54`,
    207: `55`,
    208: `56`,
    209: `57`,
    21: `2`,
    210: `58`,
    211: `58`,
    212: `59`,
    213: `60`,
    214: `60`,
    215: `60`,
    216: `61`,
    217: `61`,
    218: `62`,
    219: `62`,
    22: `2`,
    220: `63`,
    221: `63`,
    222: `64`,
    223: `64`,
    224: `65`,
    225: `66`,
    226: `66`,
    227: `67`,
    228: `68`,
    229: `68`,
    23: `2`,
    230: `69`,
    231: `70`,
    232: `71`,
    233: `71`,
    234: `72`,
    235: `73`,
    236: `74`,
    237: `76`,
    238: `77`,
    239: `77`,
    24: `2`,
    240: `78`,
    241: `78`,
    242: `78`,
    243: `78`,
    244: `78`,
    245: `78`,
    246: `78`,
    247: `78`,
    248: `78`,
    249: `78`,
    25: `2`,
    250: `79`,
    251: `79`,
    252: `80`,
    253: `81`,
    254: `81`,
    255: `81`,
    256: `82`,
    257: `83`,
    258: `84`,
    259: `84`,
    26: `2`,
    260: `85`,
    261: `86`,
    262: `86`,
    263: `86`,
    264: `87`,
    265: `87`,
    266: `88`,
    267: `88`,
    268: `89`,
    269: `89`,
    27: `2`,
    270: `91`,
    271: `91`,
    272: `92`,
    273: `92`,
    274: `92`,
    275: `93`,
    276: `94`,
    277: `94`,
    278: `94`,
    279: `96`,
    28: `2`,
    280: `96`,
    281: `97`,
    282: `97`,
    283: `98`,
    284: `99`,
    285: `101`,
    286: `101`,
    287: `101`,
    288: `103`,
    289: `104`,
    29: `2`,
    290: `104`,
    291: `105`,
    292: `105`,
    293: `106`,
    294: `106`,
    295: `106`,
    296: `108`,
    297: `108`,
    298: `109`,
    299: `109`,
    3: `2`,
    30: `2`,
    300: `109`,
    301: `111`,
    302: `111`,
    303: `111`,
    304: `111`,
    305: `111`,
    306: `111`,
    307: `112`,
    308: `112`,
    309: `113`,
    31: `2`,
    310: `114`,
    311: `116`,
    312: `117`,
    313: `119`,
    314: `119`,
    315: `120`,
    316: `120`,
    317: `120`,
    318: `121`,
    319: `121`,
    32: `2`,
    320: `122`,
    321: `122`,
    322: `122`,
    323: `123`,
    324: `124`,
    325: `124`,
    326: `126`,
    327: `127`,
    328: `128`,
    329: `129`,
    33: `2`,
    330: `130`,
    331: `130`,
    332: `131`,
    333: `132`,
    334: `133`,
    335: `133`,
    336: `133`,
    337: `134`,
    338: `135`,
    339: `135`,
    34: `2`,
    340: `136`,
    341: `137`,
    342: `138`,
    343: `139`,
    344: `140`,
    345: `145`,
    346: `146`,
    347: `147`,
    348: `147`,
    349: `148`,
    35: `2`,
    350: `148`,
    351: `148`,
    352: `149`,
    353: `150`,
    354: `151`,
    355: `152`,
    356: `157`,
    357: `157`,
    358: `158`,
    359: `159`,
    36: `2`,
    360: `159`,
    361: `160`,
    362: `161`,
    363: `162`,
    364: `162`,
    365: `162`,
    366: `163`,
    367: `164`,
    368: `164`,
    369: `165`,
    37: `2`,
    370: `165`,
    371: `165`,
    372: `165`,
    373: `165`,
    374: `165`,
    375: `165`,
    376: `165`,
    377: `165`,
    378: `165`,
    379: `166`,
    38: `2`,
    380: `166`,
    381: `167`,
    382: `168`,
    383: `168`,
    384: `168`,
    385: `169`,
    386: `170`,
    387: `171`,
    388: `171`,
    389: `172`,
    39: `2`,
    390: `173`,
    391: `173`,
    392: `173`,
    393: `174`,
    394: `174`,
    395: `175`,
    396: `175`,
    397: `176`,
    398: `176`,
    399: `177`,
    4: `2`,
    40: `4`,
    400: `177`,
    401: `177`,
    402: `179`,
    403: `179`,
    404: `180`,
    405: `180`,
    406: `180`,
    407: `181`,
    408: `182`,
    409: `182`,
    41: `4`,
    410: `183`,
    411: `183`,
    412: `184`,
    413: `185`,
    414: `191`,
    415: `192`,
    416: `193`,
    417: `194`,
    418: `195`,
    419: `195`,
    42: `5`,
    420: `196`,
    421: `197`,
    422: `197`,
    423: `197`,
    424: `198`,
    425: `199`,
    426: `199`,
    427: `200`,
    428: `201`,
    429: `202`,
    43: `5`,
    430: `203`,
    431: `204`,
    432: `209`,
    433: `210`,
    434: `211`,
    435: `211`,
    436: `212`,
    437: `212`,
    438: `212`,
    439: `213`,
    44: `5`,
    440: `214`,
    441: `215`,
    442: `216`,
    443: `221`,
    444: `221`,
    445: `222`,
    446: `223`,
    447: `223`,
    448: `224`,
    449: `225`,
    45: `6`,
    450: `225`,
    451: `225`,
    452: `226`,
    453: `227`,
    454: `227`,
    455: `228`,
    456: `228`,
    457: `228`,
    458: `228`,
    459: `228`,
    46: `7`,
    460: `228`,
    461: `228`,
    462: `228`,
    463: `228`,
    464: `228`,
    465: `229`,
    466: `229`,
    467: `230`,
    468: `231`,
    469: `231`,
    47: `8`,
    470: `231`,
    471: `232`,
    472: `233`,
    473: `234`,
    474: `234`,
    475: `235`,
    476: `236`,
    477: `236`,
    478: `236`,
    479: `237`,
    48: `9`,
    480: `237`,
    481: `238`,
    482: `238`,
    483: `239`,
    484: `239`,
    485: `240`,
    486: `240`,
    487: `240`,
    488: `242`,
    489: `242`,
    49: `10`,
    490: `242`,
    491: `242`,
    492: `242`,
    493: `242`,
    494: `242`,
    495: `242`,
    496: `242`,
    497: `242`,
    498: `242`,
    499: `243`,
    5: `2`,
    50: `11`,
    500: `244`,
    501: `245`,
    502: `246`,
    503: `247`,
    504: `253`,
    505: `253`,
    506: `254`,
    507: `255`,
    508: `255`,
    509: `256`,
    51: `11`,
    510: `257`,
    511: `257`,
    512: `257`,
    513: `258`,
    514: `259`,
    515: `259`,
    516: `260`,
    517: `260`,
    518: `260`,
    519: `260`,
    52: `12`,
    520: `260`,
    521: `260`,
    522: `260`,
    523: `260`,
    524: `260`,
    525: `260`,
    526: `261`,
    527: `261`,
    528: `262`,
    529: `263`,
    53: `13`,
    530: `264`,
    531: `264`,
    532: `265`,
    533: `265`,
    534: `266`,
    535: `267`,
    536: `267`,
    537: `268`,
    538: `268`,
    539: `268`,
    54: `14`,
    540: `269`,
    541: `270`,
    542: `270`,
    543: `271`,
    544: `271`,
    545: `271`,
    546: `272`,
    547: `273`,
    548: `273`,
    549: `274`,
    55: `14`,
    550: `274`,
    551: `274`,
    552: `275`,
    553: `276`,
    554: `276`,
    555: `277`,
    556: `277`,
    557: `277`,
    558: `278`,
    559: `279`,
    56: `15`,
    560: `279`,
    561: `280`,
    562: `280`,
    563: `280`,
    564: `281`,
    565: `282`,
    566: `282`,
    567: `283`,
    568: `283`,
    569: `283`,
    57: `16`,
    570: `284`,
    571: `285`,
    572: `285`,
    573: `286`,
    574: `286`,
    575: `286`,
    576: `287`,
    577: `288`,
    578: `288`,
    579: `289`,
    58: `17`,
    580: `289`,
    581: `290`,
    582: `290`,
    583: `291`,
    584: `291`,
    585: `291`,
    586: `293`,
    587: `293`,
    588: `294`,
    589: `294`,
    59: `18`,
    590: `294`,
    591: `295`,
    592: `295`,
    593: `296`,
    594: `296`,
    595: `297`,
    596: `297`,
    597: `298`,
    598: `299`,
    599: `299`,
    6: `2`,
    60: `19`,
    600: `300`,
    601: `300`,
    602: `301`,
    603: `301`,
    604: `302`,
    605: `302`,
    606: `303`,
    607: `304`,
    608: `305`,
    609: `310`,
    61: `21`,
    610: `311`,
    611: `313`,
    612: `314`,
    613: `315`,
    614: `316`,
    615: `317`,
    616: `317`,
    617: `318`,
    618: `319`,
    619: `319`,
    62: `21`,
    620: `319`,
    621: `320`,
    622: `320`,
    623: `320`,
    624: `321`,
    625: `322`,
    626: `323`,
    627: `323`,
    628: `324`,
    629: `324`,
    63: `21`,
    630: `325`,
    631: `326`,
    632: `331`,
    633: `331`,
    634: `332`,
    635: `333`,
    636: `333`,
    637: `334`,
    638: `335`,
    639: `335`,
    64: `21`,
    640: `336`,
    641: `336`,
    642: `337`,
    643: `338`,
    644: `339`,
    645: `339`,
    646: `339`,
    647: `341`,
    648: `341`,
    649: `342`,
    65: `21`,
    650: `343`,
    651: `343`,
    652: `344`,
    653: `345`,
    654: `346`,
    655: `347`,
    656: `348`,
    657: `349`,
    658: `350`,
    659: `351`,
    66: `21`,
    660: `351`,
    661: `352`,
    662: `353`,
    663: `353`,
    664: `353`,
    665: `354`,
    666: `354`,
    667: `354`,
    668: `355`,
    669: `356`,
    67: `21`,
    670: `356`,
    671: `357`,
    672: `358`,
    673: `359`,
    674: `359`,
    675: `359`,
    676: `360`,
    677: `360`,
    678: `361`,
    679: `361`,
    68: `21`,
    680: `362`,
    681: `362`,
    682: `363`,
    683: `363`,
    684: `364`,
    685: `365`,
    686: `365`,
    687: `366`,
    688: `367`,
    689: `367`,
    69: `21`,
    690: `368`,
    691: `369`,
    692: `370`,
    693: `370`,
    694: `371`,
    695: `372`,
    696: `373`,
    697: `375`,
    698: `376`,
    699: `376`,
    7: `2`,
    70: `21`,
    700: `377`,
    701: `377`,
    702: `377`,
    703: `377`,
    704: `377`,
    705: `377`,
    706: `377`,
    707: `377`,
    708: `377`,
    709: `377`,
    71: `21`,
    710: `378`,
    711: `378`,
    712: `379`,
    713: `380`,
    714: `380`,
    715: `380`,
    716: `381`,
    717: `382`,
    718: `383`,
    719: `383`,
    72: `21`,
    720: `384`,
    721: `385`,
    722: `385`,
    723: `385`,
    724: `386`,
    725: `386`,
    726: `387`,
    727: `387`,
    728: `388`,
    729: `388`,
    73: `21`,
    730: `389`,
    731: `389`,
    732: `389`,
    733: `391`,
    734: `391`,
    735: `392`,
    736: `392`,
    737: `392`,
    738: `393`,
    739: `393`,
    74: `21`,
    740: `394`,
    741: `394`,
    742: `395`,
    743: `395`,
    744: `395`,
    745: `396`,
    746: `396`,
    747: `397`,
    748: `397`,
    749: `398`,
    75: `21`,
    750: `398`,
    751: `399`,
    752: `400`,
    753: `400`,
    754: `401`,
    755: `401`,
    756: `402`,
    757: `402`,
    758: `403`,
    759: `404`,
    76: `21`,
    760: `409`,
    761: `409`,
    762: `410`,
    763: `410`,
    764: `411`,
    765: `412`,
    766: `417`,
    767: `418`,
    768: `420`,
    769: `421`,
    77: `21`,
    770: `422`,
    771: `423`,
    772: `424`,
    773: `424`,
    774: `425`,
    775: `426`,
    776: `426`,
    777: `426`,
    778: `427`,
    779: `427`,
    78: `21`,
    780: `427`,
    781: `428`,
    782: `429`,
    783: `430`,
    784: `430`,
    785: `431`,
    786: `431`,
    787: `432`,
    788: `433`,
    789: `438`,
    79: `21`,
    790: `438`,
    791: `439`,
    792: `439`,
    793: `440`,
    794: `441`,
    795: `441`,
    796: `442`,
    797: `443`,
    798: `445`,
    799: `446`,
    8: `2`,
    80: `21`,
    800: `447`,
    801: `448`,
    802: `449`,
    803: `449`,
    804: `450`,
    805: `451`,
    806: `452`,
    807: `452`,
    808: `452`,
    809: `453`,
    81: `21`,
    810: `453`,
    811: `453`,
    812: `454`,
    813: `455`,
    814: `456`,
    815: `456`,
    816: `457`,
    817: `457`,
    818: `458`,
    819: `459`,
    82: `21`,
    820: `464`,
    821: `464`,
    822: `465`,
    823: `466`,
    824: `466`,
    825: `467`,
    826: `468`,
    827: `468`,
    828: `469`,
    829: `469`,
    83: `21`,
    830: `470`,
    831: `471`,
    832: `472`,
    833: `472`,
    834: `472`,
    835: `474`,
    836: `474`,
    837: `475`,
    838: `476`,
    839: `476`,
    84: `21`,
    840: `477`,
    841: `478`,
    842: `479`,
    843: `480`,
    844: `481`,
    845: `482`,
    846: `483`,
    847: `484`,
    848: `484`,
    849: `485`,
    85: `21`,
    850: `486`,
    851: `486`,
    852: `486`,
    853: `487`,
    854: `487`,
    855: `487`,
    856: `488`,
    857: `489`,
    858: `489`,
    859: `490`,
    86: `21`,
    860: `491`,
    861: `492`,
    862: `492`,
    863: `492`,
    864: `493`,
    865: `493`,
    866: `494`,
    867: `494`,
    868: `495`,
    869: `495`,
    87: `21`,
    870: `496`,
    871: `496`,
    872: `497`,
    873: `498`,
    874: `498`,
    875: `499`,
    876: `500`,
    877: `500`,
    878: `501`,
    879: `502`,
    88: `21`,
    880: `503`,
    881: `503`,
    882: `504`,
    883: `505`,
    884: `506`,
    885: `508`,
    886: `508`,
    887: `509`,
    888: `509`,
    889: `510`,
    89: `21`,
    890: `511`,
    891: `511`,
    892: `512`,
    893: `512`,
    894: `513`,
    895: `514`,
    896: `514`,
    897: `515`,
    898: `516`,
    899: `517`,
    9: `2`,
    90: `21`,
    900: `517`,
    901: `518`,
    902: `519`,
    903: `519`,
    904: `519`,
    905: `520`,
    906: `520`,
    907: `521`,
    908: `521`,
    909: `522`,
    91: `21`,
    910: `522`,
    911: `523`,
    912: `523`,
    913: `524`,
    914: `525`,
    915: `525`,
    916: `526`,
    917: `527`,
    918: `527`,
    919: `528`,
    92: `21`,
    920: `529`,
    921: `530`,
    922: `530`,
    923: `531`,
    924: `532`,
    925: `533`,
    926: `535`,
    927: `536`,
    928: `536`,
    929: `537`,
    93: `21`,
    930: `537`,
    931: `537`,
    932: `537`,
    933: `537`,
    934: `537`,
    935: `537`,
    936: `537`,
    937: `537`,
    938: `537`,
    939: `538`,
    94: `21`,
    940: `538`,
    941: `539`,
    942: `540`,
    943: `540`,
    944: `540`,
    945: `541`,
    946: `542`,
    947: `543`,
    948: `543`,
    949: `544`,
    95: `21`,
    950: `545`,
    951: `545`,
    952: `545`,
    953: `546`,
    954: `546`,
    955: `547`,
    956: `547`,
    957: `548`,
    958: `548`,
    959: `549`,
    96: `21`,
    960: `549`,
    961: `549`,
    962: `551`,
    963: `551`,
    964: `552`,
    965: `553`,
    966: `554`,
    967: `557`,
    968: `557`,
    969: `557`,
    97: `21`,
    970: `558`,
    971: `559`,
    972: `561`,
    973: `562`,
    974: `563`,
    975: `564`,
    976: `565`,
    977: `565`,
    978: `566`,
    979: `566`,
    98: `21`,
    980: `567`,
    981: `568`,
    982: `569`,
    983: `570`,
    984: `570`,
    985: `570`,
    986: `571`,
    987: `571`,
    988: `571`,
    989: `572`,
    99: `21`,
    990: `572`,
    991: `574`,
    992: `574`,
    993: `575`,
    994: `576`,
    995: `577`,
    996: `579`,
    997: `579`,
    998: `579`,
    999: `581`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 227,
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
