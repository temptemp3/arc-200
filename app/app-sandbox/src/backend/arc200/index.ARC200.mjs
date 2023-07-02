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
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async (_v1590, _v1591 ) => {
          const v1590 = stdlib.protect(ctc0, _v1590, null);
          const v1591 = stdlib.protect(ctc0, _v1591, null);
        
        const v1592 = [v1590, v1591];
        const v1593 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc7, v1592, ctc2), null);
        const v1594 = stdlib.fromSome(v1593, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
        
        return v1594;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async (_v1587 ) => {
          const v1587 = stdlib.protect(ctc0, _v1587, null);
        
        const v1588 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1587, ctc2), null);
        const v1589 = stdlib.fromSome(v1588, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        
        return v1589;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async () => {
        
        
        return v1561;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async () => {
        
        const v1569 = v1552.name;
        
        return v1569;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async () => {
        
        const v1595 = v1578.name;
        const v1596 = v1578.symbol;
        const v1597 = v1578.decimals;
        const v1598 = v1578.totalSupply;
        const v1599 = v1578.zeroAddress;
        const v1600 = v1578.manager;
        const v1601 = v1578.enableZeroAddressBurn;
        const v1602 = v1578.closed;
        const v1603 = {
          closed: v1602,
          decimals: v1597,
          enableZeroAddressBurn: v1601,
          manager: v1600,
          name: v1595,
          symbol: v1596,
          totalSupply: v1598,
          zeroAddress: v1599
          };
        
        return v1603;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async () => {
        
        const v1570 = v1552.symbol;
        
        return v1570;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1549, v1551, v1552, v1558, v1561, v1578] = svs;
      return (await ((async () => {
        
        
        return v1558;}))(...args));
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
  
  
  const v1524 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v1525 = v1524.enableZeroAddressBurn;
  const v1526 = v1524.manager;
  const v1527 = v1524.meta;
  const v1528 = v1524.zeroAddress;
  const v1529 = v1527.decimals;
  const v1532 = v1527.totalSupply;
  
  const v1539 = stdlib.addressEq(v1528, v1526);
  const v1540 = v1539 ? false : true;
  stdlib.assert(v1540, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1543 = stdlib.gt(v1532, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1543, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1546 = stdlib.lt(v1529, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '19'));
  stdlib.assert(v1546, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1528, v1526, v1525, v1527],
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
      
      const {data: [v1549, v1550, v1551, v1552], secs: v1554, time: v1553, didSend: v146, from: v1548 } = txn1;
      
      const v1558 = v1552.totalSupply;
      const v1561 = v1552.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1550, ctc1, v1558);
      await stdlib.simMapSet(sim_r, 0, ctc4, v1549, ctc1, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'));
      const v1566 = v1554;
      null;
      const v1567 = await ctc.getContractInfo();
      
      const v1574 = v1552.name;
      const v1575 = v1552.symbol;
      const v1577 = {
        closed: false,
        decimals: v1561,
        enableZeroAddressBurn: v1551,
        manager: v1550,
        name: v1574,
        symbol: v1575,
        totalSupply: v1558,
        zeroAddress: v1549
        };
      const v1578 = v1577;
      const v1579 = v1553;
      
      if (await (async () => {
        const v1585 = v1578.closed;
        const v1586 = v1585 ? false : true;
        
        return v1586;})()) {
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
  const {data: [v1549, v1550, v1551, v1552], secs: v1554, time: v1553, didSend: v146, from: v1548 } = txn1;
  const v1555 = stdlib.addressEq(v1549, v1550);
  const v1556 = v1555 ? false : true;
  stdlib.assert(v1556, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1558 = v1552.totalSupply;
  const v1559 = stdlib.gt(v1558, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1559, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1561 = v1552.decimals;
  const v1562 = stdlib.lt(v1561, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '19'));
  stdlib.assert(v1562, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1550, ctc1, v1558);
  await stdlib.mapSet(map0, ctc4, v1549, ctc1, stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'));
  const v1566 = v1554;
  null;
  const v1567 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1567), {
    at: './index.rsh:95:19:application',
    fs: ['at ./index.rsh:95:19:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)', 'at ./index.rsh:95:19:application call to "liftedInteract" (defined at: ./index.rsh:95:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1574 = v1552.name;
  const v1575 = v1552.symbol;
  const v1577 = {
    closed: false,
    decimals: v1561,
    enableZeroAddressBurn: v1551,
    manager: v1550,
    name: v1574,
    symbol: v1575,
    totalSupply: v1558,
    zeroAddress: v1549
    };
  let v1578 = v1577;
  let v1579 = v1553;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1585 = v1578.closed;
    const v1586 = v1585 ? false : true;
    
    return v1586;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn3;
    switch (v1769[0]) {
      case 'approve0_246': {
        const v1772 = v1769[1];
        undefined /* setApiDetails */;
        ;
        const v1783 = v1772[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
        const v1784 = v1772[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
        const v1785 = stdlib.addressEq(v1768, v1549);
        const v1786 = v1785 ? false : true;
        stdlib.assert(v1786, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v1788 = stdlib.addressEq(v1783, v1549);
        const v1789 = v1788 ? false : true;
        stdlib.assert(v1789, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v1793 = [v1768, v1783];
        await stdlib.mapSet(map1, ctc10, v1793, ctc1, v1784);
        const v1794 = v1771;
        null;
        const v1795 = true;
        await txn3.getOutput('approve', 'v1795', ctc3, v1795);
        const cv1578 = v1578;
        const cv1579 = v1770;
        
        v1578 = cv1578;
        v1579 = cv1579;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_246': {
        const v1964 = v1769[1];
        undefined /* setApiDetails */;
        ;
        const v1997 = v1964[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
        const v1998 = v1964[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '1')];
        const v1999 = [v1997, v1998];
        const v2000 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1999, ctc1), null);
        const v2001 = {
          None: 0,
          Some: 1
          }[v2000[0]];
        const v2002 = stdlib.eq(v2001, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2002, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v2006 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
        const v2007 = stdlib.eq(v2006, stdlib.checkedBigNumberify('./index.rsh:226:38:decimal', stdlib.UInt_max, '0'));
        const v2011 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
        const v2012 = v2007 ? true : v2011;
        stdlib.assert(v2012, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'ARC200: Allowance box not empty or zero address balance box not total supply',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc10, v1999, ctc1, undefined /* Nothing */);
        const v2017 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v2017', ctc3, v2017);
        const cv1578 = v1578;
        const cv1579 = v1770;
        
        v1578 = cv1578;
        v1579 = cv1579;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_246': {
        const v2156 = v1769[1];
        undefined /* setApiDetails */;
        ;
        const v2219 = v2156[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
        const v2220 = stdlib.addressEq(v2219, v1549);
        const v2221 = v2220 ? false : true;
        stdlib.assert(v2221, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v2223 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2219, ctc1), null);
        const v2224 = {
          None: 0,
          Some: 1
          }[v2223[0]];
        const v2225 = stdlib.eq(v2224, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2225, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v2228 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2229 = stdlib.eq(v2228, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
        const v2233 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
        const v2234 = v2229 ? true : v2233;
        stdlib.assert(v2234, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'ARC200: Balance box not empty or zero address balance box not total supply',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v2219, ctc1, undefined /* Nothing */);
        const v2237 = true;
        await txn3.getOutput('deleteBalanceBox', 'v2237', ctc3, v2237);
        const cv1578 = v1578;
        const cv1579 = v1770;
        
        v1578 = cv1578;
        v1579 = cv1579;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_246': {
        const v2348 = v1769[1];
        undefined /* setApiDetails */;
        ;
        const v2438 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2439 = {
          None: 0,
          Some: 1
          }[v2438[0]];
        const v2440 = stdlib.eq(v2439, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2440, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        const v2445 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
        stdlib.assert(v2445, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:248:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
          msg: 'ARC200: Zero address balance box not total supply',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1549, ctc1, undefined /* Nothing */);
        const v2447 = null;
        await txn3.getOutput('destroy', 'v2447', ctc0, v2447);
        const v2454 = v1578.decimals;
        const v2455 = v1578.enableZeroAddressBurn;
        const v2456 = v1578.manager;
        const v2457 = v1578.name;
        const v2458 = v1578.symbol;
        const v2459 = v1578.totalSupply;
        const v2460 = v1578.zeroAddress;
        const v2461 = {
          closed: true,
          decimals: v2454,
          enableZeroAddressBurn: v2455,
          manager: v2456,
          name: v2457,
          symbol: v2458,
          totalSupply: v2459,
          zeroAddress: v2460
          };
        const cv1578 = v2461;
        const cv1579 = v1770;
        
        v1578 = cv1578;
        v1579 = cv1579;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_246': {
        const v2540 = v1769[1];
        undefined /* setApiDetails */;
        ;
        const v2657 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
        const v2658 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
        const v2659 = stdlib.addressEq(v2657, v1549);
        const v2660 = v2659 ? false : true;
        const v2661 = v1551 ? true : v2660;
        stdlib.assert(v2661, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2663 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v1768, ctc1), null);
        const v2664 = stdlib.fromSome(v2663, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2665 = stdlib.ge(v2664, v2658);
        stdlib.assert(v2665, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2671 = stdlib.safeSub(v2664, v2658);
        await stdlib.mapSet(map0, ctc4, v1768, ctc1, v2671);
        const v2672 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2657, ctc1), null);
        const v2673 = stdlib.fromSome(v2672, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2674 = stdlib.safeAdd(v2673, v2658);
        await stdlib.mapSet(map0, ctc4, v2657, ctc1, v2674);
        const v2675 = v1771;
        null;
        const v2677 = true;
        await txn3.getOutput('transfer', 'v2677', ctc3, v2677);
        const cv1578 = v1578;
        const cv1579 = v1770;
        
        v1578 = cv1578;
        v1579 = cv1579;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_246': {
        const v2732 = v1769[1];
        undefined /* setApiDetails */;
        ;
        const v2879 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
        const v2880 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
        const v2881 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
        const v2882 = stdlib.addressEq(v2879, v1549);
        const v2883 = v2882 ? false : true;
        stdlib.assert(v2883, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2885 = stdlib.addressEq(v2880, v1549);
        const v2886 = v2885 ? false : true;
        stdlib.assert(v2886, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2888 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2879, ctc1), null);
        const v2889 = stdlib.fromSome(v2888, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2890 = stdlib.ge(v2889, v2881);
        stdlib.assert(v2890, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2892 = [v2879, v1768];
        const v2893 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2892, ctc1), null);
        const v2894 = stdlib.fromSome(v2893, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
        const v2895 = stdlib.ge(v2894, v2881);
        stdlib.assert(v2895, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2902 = stdlib.safeSub(v2889, v2881);
        await stdlib.mapSet(map0, ctc4, v2879, ctc1, v2902);
        const v2903 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2880, ctc1), null);
        const v2904 = stdlib.fromSome(v2903, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
        const v2905 = stdlib.safeAdd(v2904, v2881);
        await stdlib.mapSet(map0, ctc4, v2880, ctc1, v2905);
        const v2906 = v1771;
        null;
        const v2911 = stdlib.safeSub(v2894, v2881);
        await stdlib.mapSet(map1, ctc10, v2892, ctc1, v2911);
        const v2913 = v1771;
        null;
        const v2914 = true;
        await txn3.getOutput('transferFrom', 'v2914', ctc3, v2914);
        const cv1578 = v1578;
        const cv1579 = v1770;
        
        v1578 = cv1578;
        v1579 = cv1579;
        
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
  
  
  const [v1549, v1551, v1552, v1558, v1561, v1578] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1664 = ctc.selfAddress();
  const v1666 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_246" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1671 = stdlib.addressEq(v1664, v1549);
  const v1672 = v1671 ? false : true;
  stdlib.assert(v1672, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_246" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v1674 = stdlib.addressEq(v1667, v1549);
  const v1675 = v1674 ? false : true;
  stdlib.assert(v1675, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:40:application call to [unknown function] (defined at: ./index.rsh:184:40:function exp)', 'at ./index.rsh:110:29:application call to "runapprove0_246" (defined at: ./index.rsh:184:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v1684 = ['approve0_246', v1666];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1549, v1551, v1552, v1558, v1561, v1578, v1684],
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
      
      const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
      
      switch (v1769[0]) {
        case 'approve0_246': {
          const v1772 = v1769[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v1783 = v1772[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
          const v1784 = v1772[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
          const v1793 = [v1768, v1783];
          await stdlib.simMapSet(sim_r, 1, ctc10, v1793, ctc1, v1784);
          const v1794 = v1771;
          null;
          const v1795 = true;
          const v1796 = await txn1.getOutput('approve', 'v1795', ctc4, v1795);
          
          const v3792 = v1578;
          const v3794 = v1578.closed;
          if (v3794) {
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
          const v1964 = v1769[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2156 = v1769[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2348 = v1769[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2540 = v1769[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2732 = v1769[1];
          
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
  const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
  switch (v1769[0]) {
    case 'approve0_246': {
      const v1772 = v1769[1];
      undefined /* setApiDetails */;
      ;
      const v1783 = v1772[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '0')];
      const v1784 = v1772[stdlib.checkedBigNumberify('./index.rsh:184:10:spread', stdlib.UInt_max, '1')];
      const v1785 = stdlib.addressEq(v1768, v1549);
      const v1786 = v1785 ? false : true;
      stdlib.assert(v1786, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:185:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v1788 = stdlib.addressEq(v1783, v1549);
      const v1789 = v1788 ? false : true;
      stdlib.assert(v1789, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:186:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v1793 = [v1768, v1783];
      await stdlib.mapSet(map1, ctc10, v1793, ctc1, v1784);
      const v1794 = v1771;
      null;
      const v1795 = true;
      const v1796 = await txn1.getOutput('approve', 'v1795', ctc4, v1795);
      if (v1061) {
        stdlib.protect(ctc0, await interact.out(v1772, v1796), {
          at: './index.rsh:184:11:application',
          fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)', 'at ./index.rsh:191:12:application call to "k" (defined at: ./index.rsh:188:13:function exp)', 'at ./index.rsh:188:13:application call to [unknown function] (defined at: ./index.rsh:188:13:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v3792 = v1578;
      const v3794 = v1578.closed;
      if (v3794) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1964 = v1769[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2156 = v1769[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2348 = v1769[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2540 = v1769[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2732 = v1769[1];
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
  
  
  const [v1549, v1551, v1552, v1558, v1561, v1578] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1716 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:50:application call to [unknown function] (defined at: ./index.rsh:220:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_246" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1717 = v1716[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1718 = v1716[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1721 = [v1717, v1718];
  const v1722 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1721, ctc1), null);
  const v1723 = {
    None: 0,
    Some: 1
    }[v1722[0]];
  const v1724 = stdlib.eq(v1723, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1724, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:50:application call to [unknown function] (defined at: ./index.rsh:220:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_246" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1728 = stdlib.fromSome(v1722, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
  const v1729 = stdlib.eq(v1728, stdlib.checkedBigNumberify('./index.rsh:226:38:decimal', stdlib.UInt_max, '0'));
  const v1733 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
  const v1734 = v1729 ? true : v1733;
  stdlib.assert(v1734, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:50:application call to [unknown function] (defined at: ./index.rsh:220:50:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteAllowanceBox0_246" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Allowance box not empty or zero address balance box not total supply',
    who: 'deleteAllowanceBox'
    });
  const v1743 = ['deleteAllowanceBox0_246', v1716];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1549, v1551, v1552, v1558, v1561, v1578, v1743],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
      
      switch (v1769[0]) {
        case 'approve0_246': {
          const v1772 = v1769[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1964 = v1769[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v1997 = v1964[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
          const v1998 = v1964[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '1')];
          const v1999 = [v1997, v1998];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v1999, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc9, v1999, ctc1, undefined /* Nothing */);
          const v2017 = true;
          const v2018 = await txn1.getOutput('deleteAllowanceBox', 'v2017', ctc4, v2017);
          
          const v3820 = v1578;
          const v3822 = v1578.closed;
          if (v3822) {
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
          const v2156 = v1769[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2348 = v1769[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2540 = v1769[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2732 = v1769[1];
          
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
  const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
  switch (v1769[0]) {
    case 'approve0_246': {
      const v1772 = v1769[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1964 = v1769[1];
      undefined /* setApiDetails */;
      ;
      const v1997 = v1964[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
      const v1998 = v1964[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '1')];
      const v1999 = [v1997, v1998];
      const v2000 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v1999, ctc1), null);
      const v2001 = {
        None: 0,
        Some: 1
        }[v2000[0]];
      const v2002 = stdlib.eq(v2001, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2002, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v2006 = stdlib.fromSome(v2000, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
      const v2007 = stdlib.eq(v2006, stdlib.checkedBigNumberify('./index.rsh:226:38:decimal', stdlib.UInt_max, '0'));
      const v2011 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
      const v2012 = v2007 ? true : v2011;
      stdlib.assert(v2012, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
        msg: 'ARC200: Allowance box not empty or zero address balance box not total supply',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc9, v1999, ctc1, undefined /* Nothing */);
      const v2017 = true;
      const v2018 = await txn1.getOutput('deleteAllowanceBox', 'v2017', ctc4, v2017);
      if (v1061) {
        stdlib.protect(ctc0, await interact.out(v1964, v2018), {
          at: './index.rsh:220:11:application',
          fs: ['at ./index.rsh:220:11:application call to [unknown function] (defined at: ./index.rsh:220:11:function exp)', 'at ./index.rsh:233:12:application call to "k" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v3820 = v1578;
      const v3822 = v1578.closed;
      if (v3822) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2156 = v1769[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2348 = v1769[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2540 = v1769[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2732 = v1769[1];
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
  
  
  const [v1549, v1551, v1552, v1558, v1561, v1578] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1688 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1689 = v1688[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1691 = stdlib.addressEq(v1689, v1549);
  const v1692 = v1691 ? false : true;
  stdlib.assert(v1692, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v1694 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1689, ctc1), null);
  const v1695 = {
    None: 0,
    Some: 1
    }[v1694[0]];
  const v1696 = stdlib.eq(v1695, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1696, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1699 = stdlib.fromSome(v1694, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
  const v1700 = stdlib.eq(v1699, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
  const v1704 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
  const v1705 = v1700 ? true : v1704;
  stdlib.assert(v1705, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:201:38:application call to [unknown function] (defined at: ./index.rsh:201:38:function exp)', 'at ./index.rsh:110:29:application call to "rundeleteBalanceBox0_246" (defined at: ./index.rsh:201:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Balance box not empty or zero address balance box not total supply',
    who: 'deleteBalanceBox'
    });
  const v1712 = ['deleteBalanceBox0_246', v1688];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1549, v1551, v1552, v1558, v1561, v1578, v1712],
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
      
      const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
      
      switch (v1769[0]) {
        case 'approve0_246': {
          const v1772 = v1769[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1964 = v1769[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2156 = v1769[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v2219 = v2156[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2219, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2219, ctc1, undefined /* Nothing */);
          const v2237 = true;
          const v2238 = await txn1.getOutput('deleteBalanceBox', 'v2237', ctc4, v2237);
          
          const v3848 = v1578;
          const v3850 = v1578.closed;
          if (v3850) {
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
          const v2348 = v1769[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2540 = v1769[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2732 = v1769[1];
          
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
  const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
  switch (v1769[0]) {
    case 'approve0_246': {
      const v1772 = v1769[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1964 = v1769[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2156 = v1769[1];
      undefined /* setApiDetails */;
      ;
      const v2219 = v2156[stdlib.checkedBigNumberify('./index.rsh:201:10:spread', stdlib.UInt_max, '0')];
      const v2220 = stdlib.addressEq(v2219, v1549);
      const v2221 = v2220 ? false : true;
      stdlib.assert(v2221, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v2223 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2219, ctc1), null);
      const v2224 = {
        None: 0,
        Some: 1
        }[v2223[0]];
      const v2225 = stdlib.eq(v2224, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2225, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v2228 = stdlib.fromSome(v2223, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2229 = stdlib.eq(v2228, stdlib.checkedBigNumberify('./index.rsh:205:28:decimal', stdlib.UInt_max, '0'));
      const v2233 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
      const v2234 = v2229 ? true : v2233;
      stdlib.assert(v2234, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
        msg: 'ARC200: Balance box not empty or zero address balance box not total supply',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v2219, ctc1, undefined /* Nothing */);
      const v2237 = true;
      const v2238 = await txn1.getOutput('deleteBalanceBox', 'v2237', ctc4, v2237);
      if (v1061) {
        stdlib.protect(ctc0, await interact.out(v2156, v2238), {
          at: './index.rsh:201:11:application',
          fs: ['at ./index.rsh:201:11:application call to [unknown function] (defined at: ./index.rsh:201:11:function exp)', 'at ./index.rsh:211:12:application call to "k" (defined at: ./index.rsh:209:13:function exp)', 'at ./index.rsh:209:13:application call to [unknown function] (defined at: ./index.rsh:209:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v3848 = v1578;
      const v3850 = v1578.closed;
      if (v3850) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_246': {
      const v2348 = v1769[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2540 = v1769[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2732 = v1769[1];
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
  
  
  const [v1549, v1551, v1552, v1558, v1561, v1578] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1747 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:25:application call to [unknown function] (defined at: ./index.rsh:243:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_246" (defined at: ./index.rsh:243:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1748 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v1749 = {
    None: 0,
    Some: 1
    }[v1748[0]];
  const v1750 = stdlib.eq(v1749, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1750, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:25:application call to [unknown function] (defined at: ./index.rsh:243:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_246" (defined at: ./index.rsh:243:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v1755 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
  stdlib.assert(v1755, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:248:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:25:application call to [unknown function] (defined at: ./index.rsh:243:25:function exp)', 'at ./index.rsh:110:29:application call to "rundestroy0_246" (defined at: ./index.rsh:243:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Zero address balance box not total supply',
    who: 'destroy'
    });
  const v1760 = ['destroy0_246', v1747];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1549, v1551, v1552, v1558, v1561, v1578, v1760],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:243:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
      
      switch (v1769[0]) {
        case 'approve0_246': {
          const v1772 = v1769[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1964 = v1769[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2156 = v1769[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2348 = v1769[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1549, ctc1, undefined /* Nothing */);
          const v2447 = null;
          const v2448 = await txn1.getOutput('destroy', 'v2447', ctc0, v2447);
          
          const v2454 = v1578.decimals;
          const v2455 = v1578.enableZeroAddressBurn;
          const v2456 = v1578.manager;
          const v2457 = v1578.name;
          const v2458 = v1578.symbol;
          const v2459 = v1578.totalSupply;
          const v2460 = v1578.zeroAddress;
          const v2461 = {
            closed: true,
            decimals: v2454,
            enableZeroAddressBurn: v2455,
            manager: v2456,
            name: v2457,
            symbol: v2458,
            totalSupply: v2459,
            zeroAddress: v2460
            };
          const v3876 = v2461;
          const v3878 = v2461.closed;
          if (v3878) {
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
          const v2540 = v1769[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2732 = v1769[1];
          
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
  const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
  switch (v1769[0]) {
    case 'approve0_246': {
      const v1772 = v1769[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1964 = v1769[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2156 = v1769[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2348 = v1769[1];
      undefined /* setApiDetails */;
      ;
      const v2438 = ['Some', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2439 = {
        None: 0,
        Some: 1
        }[v2438[0]];
      const v2440 = stdlib.eq(v2439, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2440, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:244:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      const v2445 = stdlib.eq(stdlib.checkedBigNumberify('./index.rsh:92:27:decimal', stdlib.UInt_max, '0'), v1558);
      stdlib.assert(v2445, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:248:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
        msg: 'ARC200: Zero address balance box not total supply',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1549, ctc1, undefined /* Nothing */);
      const v2447 = null;
      const v2448 = await txn1.getOutput('destroy', 'v2447', ctc0, v2447);
      if (v1061) {
        stdlib.protect(ctc0, await interact.out(v2348, v2448), {
          at: './index.rsh:243:11:application',
          fs: ['at ./index.rsh:243:11:application call to [unknown function] (defined at: ./index.rsh:243:11:function exp)', 'at ./index.rsh:255:12:application call to "k" (defined at: ./index.rsh:253:13:function exp)', 'at ./index.rsh:253:13:application call to [unknown function] (defined at: ./index.rsh:253:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v2454 = v1578.decimals;
      const v2455 = v1578.enableZeroAddressBurn;
      const v2456 = v1578.manager;
      const v2457 = v1578.name;
      const v2458 = v1578.symbol;
      const v2459 = v1578.totalSupply;
      const v2460 = v1578.zeroAddress;
      const v2461 = {
        closed: true,
        decimals: v2454,
        enableZeroAddressBurn: v2455,
        manager: v2456,
        name: v2457,
        symbol: v2458,
        totalSupply: v2459,
        zeroAddress: v2460
        };
      const v3876 = v2461;
      const v3878 = v2461.closed;
      if (v3878) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transfer0_246': {
      const v2540 = v1769[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2732 = v1769[1];
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
  
  
  const [v1549, v1551, v1552, v1558, v1561, v1578] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1605 = ctc.selfAddress();
  const v1607 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_246" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v1608 = v1607[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1609 = v1607[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1612 = stdlib.addressEq(v1608, v1549);
  const v1613 = v1612 ? false : true;
  const v1614 = v1551 ? true : v1613;
  stdlib.assert(v1614, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_246" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v1616 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1605, ctc1), null);
  const v1617 = stdlib.fromSome(v1616, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
  const v1618 = stdlib.ge(v1617, v1609);
  stdlib.assert(v1618, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:36:application call to [unknown function] (defined at: ./index.rsh:137:36:function exp)', 'at ./index.rsh:110:29:application call to "runtransfer0_246" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v1627 = ['transfer0_246', v1607];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1549, v1551, v1552, v1558, v1561, v1578, v1627],
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
      
      const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
      
      switch (v1769[0]) {
        case 'approve0_246': {
          const v1772 = v1769[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1964 = v1769[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2156 = v1769[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2348 = v1769[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2540 = v1769[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v2657 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
          const v2658 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
          const v2663 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1768, ctc1), null);
          const v2664 = stdlib.fromSome(v2663, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2671 = stdlib.safeSub(v2664, v2658);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1768, ctc1, v2671);
          const v2672 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2657, ctc1), null);
          const v2673 = stdlib.fromSome(v2672, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2674 = stdlib.safeAdd(v2673, v2658);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2657, ctc1, v2674);
          const v2675 = v1771;
          null;
          const v2677 = true;
          const v2678 = await txn1.getOutput('transfer', 'v2677', ctc4, v2677);
          
          const v3904 = v1578;
          const v3906 = v1578.closed;
          if (v3906) {
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
          const v2732 = v1769[1];
          
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
  const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
  switch (v1769[0]) {
    case 'approve0_246': {
      const v1772 = v1769[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1964 = v1769[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2156 = v1769[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2348 = v1769[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2540 = v1769[1];
      undefined /* setApiDetails */;
      ;
      const v2657 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '0')];
      const v2658 = v2540[stdlib.checkedBigNumberify('./index.rsh:137:10:spread', stdlib.UInt_max, '1')];
      const v2659 = stdlib.addressEq(v2657, v1549);
      const v2660 = v2659 ? false : true;
      const v2661 = v1551 ? true : v2660;
      stdlib.assert(v2661, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v2663 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1768, ctc1), null);
      const v2664 = stdlib.fromSome(v2663, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2665 = stdlib.ge(v2664, v2658);
      stdlib.assert(v2665, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v2671 = stdlib.safeSub(v2664, v2658);
      await stdlib.mapSet(map0, ctc3, v1768, ctc1, v2671);
      const v2672 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2657, ctc1), null);
      const v2673 = stdlib.fromSome(v2672, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2674 = stdlib.safeAdd(v2673, v2658);
      await stdlib.mapSet(map0, ctc3, v2657, ctc1, v2674);
      const v2675 = v1771;
      null;
      const v2677 = true;
      const v2678 = await txn1.getOutput('transfer', 'v2677', ctc4, v2677);
      if (v1061) {
        stdlib.protect(ctc0, await interact.out(v2540, v2678), {
          at: './index.rsh:137:11:application',
          fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:11:function exp)', 'at ./index.rsh:149:12:application call to "k" (defined at: ./index.rsh:147:13:function exp)', 'at ./index.rsh:147:13:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v3904 = v1578;
      const v3906 = v1578.closed;
      if (v3906) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transferFrom0_246': {
      const v2732 = v1769[1];
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
  
  
  const [v1549, v1551, v1552, v1558, v1561, v1578] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc7, ctc1, ctc1, ctc8]);
  const v1629 = ctc.selfAddress();
  const v1631 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v1632 = v1631[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1633 = v1631[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1634 = v1631[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1638 = stdlib.addressEq(v1632, v1549);
  const v1639 = v1638 ? false : true;
  stdlib.assert(v1639, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v1641 = stdlib.addressEq(v1633, v1549);
  const v1642 = v1641 ? false : true;
  stdlib.assert(v1642, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v1644 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1632, ctc1), null);
  const v1645 = stdlib.fromSome(v1644, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
  const v1646 = stdlib.ge(v1645, v1634);
  stdlib.assert(v1646, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v1648 = [v1632, v1629];
  const v1649 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1648, ctc1), null);
  const v1650 = stdlib.fromSome(v1649, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
  const v1651 = stdlib.ge(v1650, v1634);
  stdlib.assert(v1651, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:47:application call to [unknown function] (defined at: ./index.rsh:158:47:function exp)', 'at ./index.rsh:110:29:application call to "runtransferFrom0_246" (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:110:29:application call to [unknown function] (defined at: ./index.rsh:110:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v1662 = ['transferFrom0_246', v1631];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1549, v1551, v1552, v1558, v1561, v1578, v1662],
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
      
      const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
      
      switch (v1769[0]) {
        case 'approve0_246': {
          const v1772 = v1769[1];
          
          break;
          }
        case 'deleteAllowanceBox0_246': {
          const v1964 = v1769[1];
          
          break;
          }
        case 'deleteBalanceBox0_246': {
          const v2156 = v1769[1];
          
          break;
          }
        case 'destroy0_246': {
          const v2348 = v1769[1];
          
          break;
          }
        case 'transfer0_246': {
          const v2540 = v1769[1];
          
          break;
          }
        case 'transferFrom0_246': {
          const v2732 = v1769[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v2879 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
          const v2880 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
          const v2881 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
          const v2888 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2879, ctc1), null);
          const v2889 = stdlib.fromSome(v2888, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2892 = [v2879, v1768];
          const v2893 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v2892, ctc1), null);
          const v2894 = stdlib.fromSome(v2893, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
          const v2902 = stdlib.safeSub(v2889, v2881);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2879, ctc1, v2902);
          const v2903 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2880, ctc1), null);
          const v2904 = stdlib.fromSome(v2903, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
          const v2905 = stdlib.safeAdd(v2904, v2881);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2880, ctc1, v2905);
          const v2906 = v1771;
          null;
          const v2911 = stdlib.safeSub(v2894, v2881);
          await stdlib.simMapSet(sim_r, 1, ctc10, v2892, ctc1, v2911);
          const v2913 = v1771;
          null;
          const v2914 = true;
          const v2915 = await txn1.getOutput('transferFrom', 'v2914', ctc4, v2914);
          
          const v3932 = v1578;
          const v3934 = v1578.closed;
          if (v3934) {
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
  const {data: [v1769], secs: v1771, time: v1770, didSend: v1061, from: v1768 } = txn1;
  switch (v1769[0]) {
    case 'approve0_246': {
      const v1772 = v1769[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_246': {
      const v1964 = v1769[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_246': {
      const v2156 = v1769[1];
      return;
      break;
      }
    case 'destroy0_246': {
      const v2348 = v1769[1];
      return;
      break;
      }
    case 'transfer0_246': {
      const v2540 = v1769[1];
      return;
      break;
      }
    case 'transferFrom0_246': {
      const v2732 = v1769[1];
      undefined /* setApiDetails */;
      ;
      const v2879 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '0')];
      const v2880 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '1')];
      const v2881 = v2732[stdlib.checkedBigNumberify('./index.rsh:158:10:spread', stdlib.UInt_max, '2')];
      const v2882 = stdlib.addressEq(v2879, v1549);
      const v2883 = v2882 ? false : true;
      stdlib.assert(v2883, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v2885 = stdlib.addressEq(v2880, v1549);
      const v2886 = v2885 ? false : true;
      stdlib.assert(v2886, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v2888 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2879, ctc1), null);
      const v2889 = stdlib.fromSome(v2888, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2890 = stdlib.ge(v2889, v2881);
      stdlib.assert(v2890, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v2892 = [v2879, v1768];
      const v2893 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2892, ctc1), null);
      const v2894 = stdlib.fromSome(v2893, stdlib.checkedBigNumberify('./index.rsh:119:32:decimal', stdlib.UInt_max, '0'));
      const v2895 = stdlib.ge(v2894, v2881);
      stdlib.assert(v2895, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v2902 = stdlib.safeSub(v2889, v2881);
      await stdlib.mapSet(map0, ctc3, v2879, ctc1, v2902);
      const v2903 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2880, ctc1), null);
      const v2904 = stdlib.fromSome(v2903, stdlib.checkedBigNumberify('./index.rsh:114:32:decimal', stdlib.UInt_max, '0'));
      const v2905 = stdlib.safeAdd(v2904, v2881);
      await stdlib.mapSet(map0, ctc3, v2880, ctc1, v2905);
      const v2906 = v1771;
      null;
      const v2911 = stdlib.safeSub(v2894, v2881);
      await stdlib.mapSet(map1, ctc10, v2892, ctc1, v2911);
      const v2913 = v1771;
      null;
      const v2914 = true;
      const v2915 = await txn1.getOutput('transferFrom', 'v2914', ctc4, v2914);
      if (v1061) {
        stdlib.protect(ctc0, await interact.out(v2732, v2915), {
          at: './index.rsh:158:11:application',
          fs: ['at ./index.rsh:158:11:application call to [unknown function] (defined at: ./index.rsh:158:11:function exp)', 'at ./index.rsh:175:12:application call to "k" (defined at: ./index.rsh:170:13:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:13:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v3932 = v1578;
      const v3934 = v1578.closed;
      if (v3934) {
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
  appApproval: `CCAHAAgBA9STAcSQASAmBgEAAAgAAAAAAAAAAQEBBKc5iuUEIdAO2TEYQQYrKWRJIls1ASNbNQIoZCtkUIIPBARSJdMED7AkHgQXBQq9BBtgmswEHeAZFQRGJUHTBEZ7x6QETkcyuwRsyzzCBI+VG1kEnIahhQSc1oVYBLh3nucEwj9tBgT0vCQkNhoAjg8FoAamBggGjQaTBfoF7QWOBocGEwYoBiAGEAaKBpAANAtXACA1DTQLIQZbNQwxADQUE0Q0DTQUE0QhBSoxADQNUFABNAwWiAbOMgc1CycFMQBQNA1QNAwWUDQLFlCwJDULgAgAAAAAAAAHAzQLFlEHCFCwNAsWUQcINQQyBjUONA9XAAEXQQXYMRmBBRJEiAbYIjIKMgmIBuA0A0AACoAEFR98dTQEULAkQzQLVwAgNAtXICBQNQwpI68qNAxQAYgGSkk1CyJVJBJEI680C4gGMhciEiI0ERIRRCEFKjQMUAGIBmYkNQuACAAAAAAAAAfhNAsWUQcIULA0CxZRBwg1BDIGNQ5C/3c0DVcBIEk1CzQUE0QpI68oNAtQiAXuSTUMIlUkEkQjrzQMiAXWFyISIjQREhFEIQQoNAtQiAYLJDULgAgAAAAAAAAIvTQLFlEHCFCwNAsWUQcINQQyBjUOQv8cgAkBAAAAAAAAAAAiVSQSRCI0ERJEIQQoNBRQiAXJKTULgAgAAAAAAAAJjzQLULA0CzUEKzQPVwEIUDQPVwkBUDQPVwogUDQPVyogUDQPV0oIUDQPV1IIUDQPV1ogUDIGNQ41D0L+tTQLVwAgNQ00CyEGWzUMNBM0DTQUExFEI68pI68oMQBQiAUfiAUTF0k1CzQMD0QhBCgxAFA0CzQMCRaIBRAhBCg0DVAjrykjryg0DVCIBPOIBOcXNAwIFogE8zIHNQsnBDEAUDQNUDQMFlA0CxZQsCQ1C4AIAAAAAAAACnU0CxZRBwhQsDQLFlEHCDUEMgY1DkL+IjQLVwAgNRU0C1cgIDUNNAuBQFs1DDQVNBQTRDQNNBQTRCOvKSOvKDQVUIgEgogEdhdJNQs0DA9ENBUxAFA1FyOvKSOvKjQXUAGIBGOIBFcXSTUWNAwPRCEEKDQVUDQLNAwJFogEVCEEKDQNUCOvKSOvKDQNUIgEN4gEKxc0DAgWiAQ3Mgc1CycENBVQNA1QNAwWUDQLFlCwNBY0DAk1CyEFKjQXUAE0CxaIBA4yBzUMJwU0FVAxAFA0CxZQNAwWULAkNQuACAAAAAAAAAtiNAsWUQcIULA0CxZRBwg1BDIGNQ5C/T00ASUSRIgD2yOvKSOvKjQMNAtQUAGIA7KIA6Y1BDEZIhJEQv03I68oNAw0CxZQUDIDUFA1CyU0ARJEiAOmNAsiWzUMNAtXCEk1DYAE+Z8pFTQMFlA0DVCwNAyIA7o0DSJVjQYC3QLnAvECmAKbAqVC/Go0ASUSRIgDaSOvKSOvKDQLUIgDRIgDODUEQv+PNAElEkSIA000EBY1BEL/fyOvKzQMNAtQUCOvUFA1C0L/hSOvgAECNAtQgSivUFA1C0L/c4BRAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/xs0ASUSRIgCwTQSVwggNQRC/vE0ASUSRIgCrzQPVyogNA9XSghQNA9XAQhQNA9XUghQNA9XWiBQNA9XCiBQNA9XCQFQNA9XAAFQNQRC/rU0ASUSRIgCczQSVygINQRC/qM0ASUSRIgCYTQRFjUEQv6TI6+AAQQ0DDQLFlBQMgNQUDULQv6WI6+AAQU0DTQMUDQLFlBQUDULQv6BNAsiWzUNNAtXCCA1FDQLVyggNQw0C1dIARc1EzQLV0k4NRKABB+QRNg0DRZQNBRQNAxQNBMWUQcIUDQSULA0DYgCIDQUNAwTRDQSgTBbSTURIg1ENBIiW0k1EIETDEQhBCg0DFA0ERaIAbYhBCg0FFAjr4gBqzIHNQsnBDQUUDQMUDQRFlA0CxZQsCg0EBZQNBMWUQcIUDQMUDQSVwggUDQSVygIUDQRFlA0FFAyBjUONQ9C+tOIAaaBoI0GiAGtNhoBNQtC/ziIAZQ2GgE1C0L9riIxNBJEJTE1EkQiMTYSRCIxNxJEiAF1geMBryIiNQI1AShLAVcAf2crTFd/ZGcpNAEWNAIWUGcxGSISRIgBYUL6jjYaATYaAjULNQxC/So2GgE2GgIXNQs1DEL9QTYaATULQv2GQv2fNhoBNhoCNQs1DEL9ojYaATULQv2sQv27QvsXNA1XASg1C0L7dDQNVwFINQtC+/00FDQTFlEHCFA0ElA0ERZQNBAWUDQPUCUyBkL/aUhMv0iJIrIBJLIQsgeyCLOJNA1XASg1C0L5hzQNVwFANQtC+ghC+mNC/bRC/cNC/fxC/gs2GgE2GgI2GgMXNQs1DDUNQv4dNhoBNhoCFzULNQxC/fpIiUwJSTUGMgmIAJeJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJSVcBAEwiVU2JvkkWUQcIRQRNUIlMSb1A/2BLA4gAQUL/WElXACA1FElXIAEXNRNJVyE4NRJJgVlbNRFJgWFbNRBXaXo1D4m8Ik4CTTQHCDUHiSQ1A4lJIhJMNAISEUSJNAYINQaJNAY0B0oPQf9iQv9qsUL/CbGyCUL/Aw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `586`,
    1001: `587`,
    1002: `587`,
    1003: `587`,
    1004: `588`,
    1005: `588`,
    1006: `590`,
    1007: `590`,
    1008: `591`,
    1009: `592`,
    101: `21`,
    1010: `593`,
    1011: `595`,
    1012: `595`,
    1013: `595`,
    1014: `597`,
    1015: `598`,
    1016: `599`,
    1017: `600`,
    1018: `600`,
    1019: `601`,
    102: `21`,
    1020: `601`,
    1021: `602`,
    1022: `603`,
    1023: `604`,
    1024: `605`,
    1025: `605`,
    1026: `606`,
    1027: `607`,
    1028: `608`,
    1029: `608`,
    103: `21`,
    1030: `610`,
    1031: `611`,
    1032: `611`,
    1033: `612`,
    1034: `613`,
    1035: `614`,
    1036: `614`,
    1037: `614`,
    1038: `615`,
    1039: `615`,
    104: `21`,
    1040: `616`,
    1041: `617`,
    1042: `618`,
    1043: `618`,
    1044: `619`,
    1045: `619`,
    1046: `620`,
    1047: `620`,
    1048: `620`,
    1049: `621`,
    105: `21`,
    1050: `621`,
    1051: `622`,
    1052: `622`,
    1053: `622`,
    1054: `622`,
    1055: `622`,
    1056: `622`,
    1057: `623`,
    1058: `623`,
    1059: `624`,
    106: `21`,
    1060: `625`,
    1061: `626`,
    1062: `626`,
    1063: `627`,
    1064: `628`,
    1065: `630`,
    1066: `630`,
    1067: `631`,
    1068: `631`,
    1069: `631`,
    107: `21`,
    1070: `632`,
    1071: `632`,
    1072: `633`,
    1073: `634`,
    1074: `635`,
    1075: `635`,
    1076: `635`,
    1077: `635`,
    1078: `635`,
    1079: `635`,
    108: `21`,
    1080: `635`,
    1081: `635`,
    1082: `635`,
    1083: `635`,
    1084: `635`,
    1085: `635`,
    1086: `635`,
    1087: `635`,
    1088: `636`,
    1089: `636`,
    109: `21`,
    1090: `636`,
    1091: `638`,
    1092: `638`,
    1093: `639`,
    1094: `640`,
    1095: `641`,
    1096: `644`,
    1097: `644`,
    1098: `644`,
    1099: `645`,
    11: `2`,
    110: `21`,
    1100: `646`,
    1101: `648`,
    1102: `649`,
    1103: `650`,
    1104: `651`,
    1105: `652`,
    1106: `652`,
    1107: `653`,
    1108: `654`,
    1109: `654`,
    111: `21`,
    1110: `654`,
    1111: `655`,
    1112: `655`,
    1113: `655`,
    1114: `656`,
    1115: `656`,
    1116: `657`,
    1117: `657`,
    1118: `657`,
    1119: `659`,
    112: `21`,
    1120: `659`,
    1121: `660`,
    1122: `661`,
    1123: `662`,
    1124: `665`,
    1125: `665`,
    1126: `665`,
    1127: `666`,
    1128: `666`,
    1129: `667`,
    113: `21`,
    1130: `668`,
    1131: `668`,
    1132: `669`,
    1133: `669`,
    1134: `669`,
    1135: `671`,
    1136: `672`,
    1137: `673`,
    1138: `674`,
    1139: `674`,
    114: `21`,
    1140: `675`,
    1141: `675`,
    1142: `676`,
    1143: `677`,
    1144: `678`,
    1145: `679`,
    1146: `680`,
    1147: `681`,
    1148: `682`,
    1149: `682`,
    115: `21`,
    1150: `683`,
    1151: `683`,
    1152: `683`,
    1153: `685`,
    1154: `686`,
    1155: `687`,
    1156: `687`,
    1157: `687`,
    1158: `688`,
    1159: `688`,
    116: `21`,
    1160: `689`,
    1161: `690`,
    1162: `690`,
    1163: `691`,
    1164: `692`,
    1165: `693`,
    1166: `694`,
    1167: `694`,
    1168: `695`,
    1169: `695`,
    117: `21`,
    1170: `695`,
    1171: `697`,
    1172: `697`,
    1173: `697`,
    1174: `697`,
    1175: `697`,
    1176: `697`,
    1177: `697`,
    1178: `697`,
    1179: `697`,
    118: `21`,
    1180: `697`,
    1181: `697`,
    1182: `697`,
    1183: `697`,
    1184: `697`,
    1185: `697`,
    1186: `697`,
    1187: `697`,
    1188: `697`,
    1189: `697`,
    119: `21`,
    1190: `697`,
    1191: `697`,
    1192: `697`,
    1193: `697`,
    1194: `697`,
    1195: `697`,
    1196: `697`,
    1197: `697`,
    1198: `697`,
    1199: `697`,
    12: `2`,
    120: `21`,
    1200: `697`,
    1201: `697`,
    1202: `697`,
    1203: `697`,
    1204: `697`,
    1205: `697`,
    1206: `697`,
    1207: `697`,
    1208: `697`,
    1209: `697`,
    121: `21`,
    1210: `697`,
    1211: `697`,
    1212: `697`,
    1213: `697`,
    1214: `697`,
    1215: `697`,
    1216: `697`,
    1217: `697`,
    1218: `697`,
    1219: `697`,
    122: `21`,
    1220: `697`,
    1221: `697`,
    1222: `697`,
    1223: `697`,
    1224: `697`,
    1225: `697`,
    1226: `697`,
    1227: `697`,
    1228: `697`,
    1229: `697`,
    123: `21`,
    1230: `697`,
    1231: `697`,
    1232: `697`,
    1233: `697`,
    1234: `697`,
    1235: `697`,
    1236: `697`,
    1237: `697`,
    1238: `697`,
    1239: `697`,
    124: `21`,
    1240: `697`,
    1241: `697`,
    1242: `697`,
    1243: `697`,
    1244: `697`,
    1245: `697`,
    1246: `697`,
    1247: `697`,
    1248: `697`,
    1249: `697`,
    125: `21`,
    1250: `697`,
    1251: `697`,
    1252: `697`,
    1253: `697`,
    1254: `698`,
    1255: `698`,
    1256: `699`,
    1257: `699`,
    1258: `699`,
    1259: `701`,
    126: `21`,
    1260: `701`,
    1261: `702`,
    1262: `703`,
    1263: `704`,
    1264: `707`,
    1265: `707`,
    1266: `707`,
    1267: `708`,
    1268: `708`,
    1269: `709`,
    127: `21`,
    1270: `709`,
    1271: `709`,
    1272: `710`,
    1273: `710`,
    1274: `711`,
    1275: `711`,
    1276: `711`,
    1277: `713`,
    1278: `713`,
    1279: `714`,
    128: `21`,
    1280: `715`,
    1281: `716`,
    1282: `719`,
    1283: `719`,
    1284: `719`,
    1285: `720`,
    1286: `720`,
    1287: `721`,
    1288: `721`,
    1289: `721`,
    129: `21`,
    1290: `722`,
    1291: `722`,
    1292: `723`,
    1293: `723`,
    1294: `723`,
    1295: `724`,
    1296: `725`,
    1297: `725`,
    1298: `726`,
    1299: `726`,
    13: `2`,
    130: `21`,
    1300: `726`,
    1301: `727`,
    1302: `728`,
    1303: `728`,
    1304: `729`,
    1305: `729`,
    1306: `729`,
    1307: `730`,
    1308: `731`,
    1309: `731`,
    131: `21`,
    1310: `732`,
    1311: `732`,
    1312: `732`,
    1313: `733`,
    1314: `734`,
    1315: `734`,
    1316: `735`,
    1317: `735`,
    1318: `735`,
    1319: `736`,
    132: `21`,
    1320: `737`,
    1321: `737`,
    1322: `738`,
    1323: `738`,
    1324: `738`,
    1325: `739`,
    1326: `740`,
    1327: `740`,
    1328: `741`,
    1329: `741`,
    133: `21`,
    1330: `741`,
    1331: `742`,
    1332: `743`,
    1333: `743`,
    1334: `744`,
    1335: `744`,
    1336: `744`,
    1337: `746`,
    1338: `746`,
    1339: `747`,
    134: `21`,
    1340: `748`,
    1341: `749`,
    1342: `752`,
    1343: `752`,
    1344: `752`,
    1345: `753`,
    1346: `753`,
    1347: `754`,
    1348: `754`,
    1349: `754`,
    135: `21`,
    1350: `755`,
    1351: `755`,
    1352: `756`,
    1353: `756`,
    1354: `756`,
    1355: `758`,
    1356: `758`,
    1357: `759`,
    1358: `760`,
    1359: `761`,
    136: `21`,
    1360: `764`,
    1361: `764`,
    1362: `764`,
    1363: `765`,
    1364: `765`,
    1365: `766`,
    1366: `767`,
    1367: `767`,
    1368: `768`,
    1369: `768`,
    137: `21`,
    1370: `768`,
    1371: `770`,
    1372: `771`,
    1373: `772`,
    1374: `772`,
    1375: `772`,
    1376: `773`,
    1377: `773`,
    1378: `774`,
    1379: `774`,
    138: `22`,
    1380: `775`,
    1381: `776`,
    1382: `777`,
    1383: `778`,
    1384: `778`,
    1385: `779`,
    1386: `780`,
    1387: `781`,
    1388: `781`,
    1389: `782`,
    139: `22`,
    1390: `782`,
    1391: `782`,
    1392: `784`,
    1393: `785`,
    1394: `786`,
    1395: `786`,
    1396: `786`,
    1397: `787`,
    1398: `787`,
    1399: `788`,
    14: `2`,
    140: `22`,
    1400: `788`,
    1401: `789`,
    1402: `790`,
    1403: `790`,
    1404: `791`,
    1405: `792`,
    1406: `793`,
    1407: `794`,
    1408: `795`,
    1409: `795`,
    141: `23`,
    1410: `796`,
    1411: `796`,
    1412: `796`,
    1413: `798`,
    1414: `798`,
    1415: `799`,
    1416: `800`,
    1417: `801`,
    1418: `801`,
    1419: `802`,
    142: `23`,
    1420: `802`,
    1421: `803`,
    1422: `803`,
    1423: `803`,
    1424: `804`,
    1425: `804`,
    1426: `805`,
    1427: `805`,
    1428: `806`,
    1429: `806`,
    143: `23`,
    1430: `806`,
    1431: `807`,
    1432: `807`,
    1433: `808`,
    1434: `808`,
    1435: `809`,
    1436: `809`,
    1437: `809`,
    1438: `810`,
    1439: `811`,
    144: `23`,
    1440: `811`,
    1441: `812`,
    1442: `812`,
    1443: `813`,
    1444: `813`,
    1445: `813`,
    1446: `814`,
    1447: `814`,
    1448: `815`,
    1449: `815`,
    145: `23`,
    1450: `815`,
    1451: `815`,
    1452: `815`,
    1453: `815`,
    1454: `816`,
    1455: `816`,
    1456: `817`,
    1457: `818`,
    1458: `819`,
    1459: `819`,
    146: `23`,
    1460: `820`,
    1461: `821`,
    1462: `821`,
    1463: `822`,
    1464: `823`,
    1465: `823`,
    1466: `824`,
    1467: `825`,
    1468: `825`,
    1469: `825`,
    147: `23`,
    1470: `826`,
    1471: `827`,
    1472: `827`,
    1473: `828`,
    1474: `829`,
    1475: `831`,
    1476: `831`,
    1477: `832`,
    1478: `832`,
    1479: `832`,
    148: `23`,
    1480: `833`,
    1481: `833`,
    1482: `834`,
    1483: `834`,
    1484: `835`,
    1485: `836`,
    1486: `840`,
    1487: `840`,
    1488: `841`,
    1489: `841`,
    149: `23`,
    1490: `842`,
    1491: `843`,
    1492: `844`,
    1493: `844`,
    1494: `845`,
    1495: `846`,
    1496: `847`,
    1497: `851`,
    1498: `851`,
    1499: `852`,
    15: `2`,
    150: `23`,
    1500: `853`,
    1501: `854`,
    1502: `855`,
    1503: `855`,
    1504: `856`,
    1505: `856`,
    1506: `857`,
    1507: `858`,
    1508: `863`,
    1509: `863`,
    151: `23`,
    1510: `864`,
    1511: `865`,
    1512: `865`,
    1513: `866`,
    1514: `867`,
    1515: `867`,
    1516: `868`,
    1517: `869`,
    1518: `869`,
    1519: `869`,
    152: `23`,
    1520: `871`,
    1521: `871`,
    1522: `872`,
    1523: `873`,
    1524: `873`,
    1525: `874`,
    1526: `875`,
    1527: `876`,
    1528: `877`,
    1529: `877`,
    153: `23`,
    1530: `877`,
    1531: `878`,
    1532: `878`,
    1533: `879`,
    1534: `879`,
    1535: `880`,
    1536: `880`,
    1537: `881`,
    1538: `881`,
    1539: `882`,
    154: `23`,
    1540: `883`,
    1541: `883`,
    1542: `884`,
    1543: `885`,
    1544: `885`,
    1545: `886`,
    1546: `887`,
    1547: `888`,
    1548: `888`,
    1549: `889`,
    155: `23`,
    1550: `890`,
    1551: `891`,
    1552: `893`,
    1553: `894`,
    1554: `894`,
    1555: `895`,
    1556: `896`,
    1557: `897`,
    1558: `897`,
    1559: `898`,
    156: `23`,
    1560: `899`,
    1561: `899`,
    1562: `899`,
    1563: `900`,
    1564: `901`,
    1565: `901`,
    1566: `902`,
    1567: `903`,
    1568: `903`,
    1569: `904`,
    157: `23`,
    1570: `904`,
    1571: `904`,
    1572: `905`,
    1573: `906`,
    1574: `906`,
    1575: `907`,
    1576: `907`,
    1577: `907`,
    1578: `908`,
    1579: `909`,
    158: `23`,
    1580: `909`,
    1581: `910`,
    1582: `911`,
    1583: `912`,
    1584: `912`,
    1585: `913`,
    1586: `914`,
    1587: `914`,
    1588: `915`,
    1589: `915`,
    159: `23`,
    1590: `916`,
    1591: `916`,
    1592: `917`,
    1593: `917`,
    1594: `917`,
    1595: `919`,
    1596: `919`,
    1597: `919`,
    1598: `920`,
    1599: `920`,
    16: `2`,
    160: `23`,
    1600: `920`,
    1601: `920`,
    1602: `921`,
    1603: `921`,
    1604: `921`,
    1605: `922`,
    1606: `922`,
    1607: `922`,
    1608: `923`,
    1609: `923`,
    161: `23`,
    1610: `924`,
    1611: `924`,
    1612: `924`,
    1613: `926`,
    1614: `926`,
    1615: `926`,
    1616: `927`,
    1617: `927`,
    1618: `927`,
    1619: `928`,
    162: `23`,
    1620: `928`,
    1621: `929`,
    1622: `929`,
    1623: `929`,
    1624: `931`,
    1625: `932`,
    1626: `932`,
    1627: `933`,
    1628: `934`,
    1629: `935`,
    163: `23`,
    1630: `936`,
    1631: `936`,
    1632: `937`,
    1633: `938`,
    1634: `939`,
    1635: `940`,
    1636: `940`,
    1637: `941`,
    1638: `942`,
    1639: `943`,
    164: `23`,
    1640: `944`,
    1641: `944`,
    1642: `945`,
    1643: `946`,
    1644: `947`,
    1645: `947`,
    1646: `947`,
    1647: `948`,
    1648: `948`,
    1649: `948`,
    165: `23`,
    1650: `949`,
    1651: `950`,
    1652: `951`,
    1653: `953`,
    1654: `953`,
    1655: `954`,
    1656: `954`,
    1657: `955`,
    1658: `956`,
    1659: `956`,
    166: `23`,
    1660: `957`,
    1661: `957`,
    1662: `957`,
    1663: `958`,
    1664: `959`,
    1665: `960`,
    1666: `961`,
    1667: `961`,
    1668: `961`,
    1669: `962`,
    167: `23`,
    1670: `963`,
    1671: `964`,
    1672: `964`,
    1673: `965`,
    1674: `966`,
    1675: `966`,
    1676: `967`,
    1677: `968`,
    1678: `969`,
    1679: `970`,
    168: `23`,
    1680: `970`,
    1681: `971`,
    1682: `972`,
    1683: `973`,
    1684: `975`,
    1685: `975`,
    1686: `975`,
    1687: `976`,
    1688: `976`,
    1689: `976`,
    169: `23`,
    1690: `978`,
    1691: `978`,
    1692: `978`,
    1693: `979`,
    1694: `979`,
    1695: `979`,
    1696: `980`,
    1697: `980`,
    1698: `981`,
    1699: `981`,
    17: `2`,
    170: `23`,
    1700: `982`,
    1701: `982`,
    1702: `982`,
    1703: `984`,
    1704: `984`,
    1705: `984`,
    1706: `985`,
    1707: `985`,
    1708: `985`,
    1709: `986`,
    171: `23`,
    1710: `987`,
    1711: `987`,
    1712: `988`,
    1713: `988`,
    1714: `989`,
    1715: `989`,
    1716: `989`,
    1717: `991`,
    1718: `991`,
    1719: `991`,
    172: `23`,
    1720: `992`,
    1721: `992`,
    1722: `993`,
    1723: `993`,
    1724: `993`,
    1725: `995`,
    1726: `995`,
    1727: `995`,
    1728: `997`,
    1729: `997`,
    173: `25`,
    1730: `997`,
    1731: `998`,
    1732: `998`,
    1733: `998`,
    1734: `999`,
    1735: `999`,
    1736: `1000`,
    1737: `1000`,
    1738: `1001`,
    1739: `1001`,
    174: `27`,
    1740: `1001`,
    1741: `1003`,
    1742: `1003`,
    1743: `1003`,
    1744: `1004`,
    1745: `1004`,
    1746: `1005`,
    1747: `1005`,
    1748: `1005`,
    1749: `1007`,
    175: `27`,
    1750: `1007`,
    1751: `1007`,
    1752: `1009`,
    1753: `1009`,
    1754: `1009`,
    1755: `1011`,
    1756: `1011`,
    1757: `1012`,
    1758: `1012`,
    1759: `1012`,
    176: `28`,
    1760: `1013`,
    1761: `1013`,
    1762: `1014`,
    1763: `1014`,
    1764: `1014`,
    1765: `1016`,
    1766: `1016`,
    1767: `1017`,
    1768: `1017`,
    1769: `1017`,
    177: `28`,
    1770: `1018`,
    1771: `1018`,
    1772: `1019`,
    1773: `1019`,
    1774: `1019`,
    1775: `1022`,
    1776: `1022`,
    1777: `1023`,
    1778: `1023`,
    1779: `1024`,
    178: `28`,
    1780: `1025`,
    1781: `1025`,
    1782: `1025`,
    1783: `1026`,
    1784: `1027`,
    1785: `1027`,
    1786: `1028`,
    1787: `1029`,
    1788: `1029`,
    1789: `1030`,
    179: `29`,
    1790: `1031`,
    1791: `1032`,
    1792: `1032`,
    1793: `1033`,
    1794: `1034`,
    1795: `1035`,
    1796: `1035`,
    1797: `1036`,
    1798: `1037`,
    1799: `1038`,
    18: `2`,
    180: `29`,
    1800: `1038`,
    1801: `1039`,
    1802: `1039`,
    1803: `1039`,
    1804: `1041`,
    1805: `1042`,
    1806: `1043`,
    1807: `1044`,
    1808: `1045`,
    1809: `1047`,
    181: `30`,
    1810: `1048`,
    1811: `1048`,
    1812: `1049`,
    1813: `1050`,
    1814: `1050`,
    1815: `1051`,
    1816: `1051`,
    1817: `1052`,
    1818: `1052`,
    1819: `1053`,
    182: `30`,
    1820: `1054`,
    1821: `1056`,
    1822: `1056`,
    1823: `1057`,
    1824: `1057`,
    1825: `1057`,
    1826: `1058`,
    1827: `1058`,
    1828: `1059`,
    1829: `1059`,
    183: `31`,
    1830: `1059`,
    1831: `1061`,
    1832: `1061`,
    1833: `1062`,
    1834: `1062`,
    1835: `1062`,
    1836: `1063`,
    1837: `1063`,
    1838: `1064`,
    1839: `1064`,
    184: `31`,
    1840: `1064`,
    1841: `1066`,
    1842: `1066`,
    1843: `1066`,
    1844: `1068`,
    1845: `1068`,
    1846: `1068`,
    1847: `1070`,
    1848: `1070`,
    1849: `1070`,
    185: `32`,
    1850: `1072`,
    1851: `1072`,
    1852: `1072`,
    1853: `1074`,
    1854: `1074`,
    1855: `1074`,
    1856: `1076`,
    1857: `1076`,
    1858: `1076`,
    1859: `1077`,
    186: `33`,
    1860: `1077`,
    1861: `1077`,
    1862: `1078`,
    1863: `1078`,
    1864: `1078`,
    1865: `1079`,
    1866: `1080`,
    1867: `1080`,
    1868: `1081`,
    1869: `1081`,
    187: `33`,
    1870: `1082`,
    1871: `1082`,
    1872: `1083`,
    1873: `1083`,
    1874: `1083`,
    1875: `1085`,
    1876: `1085`,
    1877: `1085`,
    1878: `1086`,
    1879: `1086`,
    188: `34`,
    1880: `1086`,
    1881: `1087`,
    1882: `1088`,
    1883: `1088`,
    1884: `1089`,
    1885: `1089`,
    1886: `1090`,
    1887: `1090`,
    1888: `1090`,
    1889: `1092`,
    189: `34`,
    1890: `1093`,
    1891: `1095`,
    1892: `1096`,
    1893: `1097`,
    1894: `1098`,
    1895: `1098`,
    1896: `1099`,
    1897: `1099`,
    1898: `1100`,
    1899: `1100`,
    19: `2`,
    190: `35`,
    1900: `1100`,
    1901: `1101`,
    1902: `1103`,
    1903: `1104`,
    1904: `1105`,
    1905: `1105`,
    1906: `1105`,
    1907: `1106`,
    1908: `1107`,
    1909: `1107`,
    191: `35`,
    1910: `1110`,
    1911: `1110`,
    1912: `1111`,
    1913: `1111`,
    1914: `1112`,
    1915: `1113`,
    1916: `1114`,
    1917: `1115`,
    1918: `1115`,
    1919: `1116`,
    192: `36`,
    1920: `1117`,
    1921: `1117`,
    1922: `1118`,
    1923: `1118`,
    1924: `1119`,
    1925: `1119`,
    1926: `1120`,
    1927: `1121`,
    1928: `1122`,
    1929: `1122`,
    193: `37`,
    1930: `1123`,
    1931: `1124`,
    1932: `1125`,
    1933: `1126`,
    1934: `1126`,
    1935: `1127`,
    1936: `1128`,
    1937: `1129`,
    1938: `1131`,
    1939: `1132`,
    194: `42`,
    1940: `1132`,
    1941: `1132`,
    1942: `1133`,
    1943: `1134`,
    1944: `1135`,
    1945: `1136`,
    1946: `1137`,
    1947: `1139`,
    1948: `1140`,
    1949: `1141`,
    195: `42`,
    1950: `1142`,
    1951: `1142`,
    1952: `1142`,
    1953: `1143`,
    1954: `1143`,
    1955: `1144`,
    1956: `1145`,
    1957: `1146`,
    1958: `1148`,
    1959: `1149`,
    196: `43`,
    1960: `1150`,
    1961: `1151`,
    1962: `1151`,
    1963: `1151`,
    1964: `1152`,
    1965: `1152`,
    1966: `1153`,
    1967: `1153`,
    1968: `1153`,
    1969: `1154`,
    197: `43`,
    1970: `1154`,
    1971: `1154`,
    1972: `1156`,
    1973: `1157`,
    1974: `1157`,
    1975: `1157`,
    1976: `1158`,
    1977: `1158`,
    1978: `1159`,
    1979: `1160`,
    198: `44`,
    1980: `1160`,
    1981: `1160`,
    1982: `1161`,
    1983: `1162`,
    1984: `1162`,
    1985: `1163`,
    1986: `1164`,
    1987: `1164`,
    1988: `1164`,
    1989: `1165`,
    199: `45`,
    1990: `1165`,
    1991: `1166`,
    1992: `1167`,
    1993: `1167`,
    1994: `1168`,
    1995: `1169`,
    1996: `1169`,
    1997: `1170`,
    1998: `1171`,
    1999: `1171`,
    2: `2`,
    20: `2`,
    200: `51`,
    2000: `1172`,
    2001: `1173`,
    2002: `1173`,
    2003: `1174`,
    2004: `1174`,
    2005: `1174`,
    2006: `1175`,
    2007: `1175`,
    2008: `1176`,
    2009: `1178`,
    201: `51`,
    2010: `1179`,
    2011: `1180`,
    2012: `1180`,
    2013: `1181`,
    2014: `1183`,
    2015: `1183`,
    2016: `1184`,
    2017: `1185`,
    2018: `1185`,
    2019: `1186`,
    202: `52`,
    2020: `1188`,
    2021: `1189`,
    2022: `1189`,
    2023: `1190`,
    2024: `1192`,
    2025: `1193`,
    2026: `1194`,
    2027: `1195`,
    2028: `1196`,
    2029: `1196`,
    203: `53`,
    2030: `1197`,
    2031: `1198`,
    2032: `1199`,
    2033: `1200`,
    2034: `1202`,
    2035: `1202`,
    2036: `1203`,
    2037: `1204`,
    2038: `1204`,
    2039: `1205`,
    204: `53`,
    2040: `1207`,
    2041: `1207`,
    2042: `1208`,
    2043: `1208`,
    2044: `1209`,
    2045: `1210`,
    2046: `1211`,
    2047: `1211`,
    2048: `1211`,
    2049: `1212`,
    205: `54`,
    2050: `1212`,
    2051: `1212`,
    2052: `1214`,
    2053: `1215`,
    2054: `1215`,
    2055: `1215`,
    2056: `1217`,
    2057: `1218`,
    2058: `1218`,
    2059: `1219`,
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
    356: `153`,
    357: `153`,
    358: `154`,
    359: `155`,
    36: `2`,
    360: `156`,
    361: `161`,
    362: `161`,
    363: `162`,
    364: `163`,
    365: `163`,
    366: `164`,
    367: `165`,
    368: `166`,
    369: `166`,
    37: `2`,
    370: `166`,
    371: `167`,
    372: `168`,
    373: `168`,
    374: `169`,
    375: `169`,
    376: `169`,
    377: `169`,
    378: `169`,
    379: `169`,
    38: `2`,
    380: `169`,
    381: `169`,
    382: `169`,
    383: `169`,
    384: `170`,
    385: `170`,
    386: `171`,
    387: `172`,
    388: `172`,
    389: `172`,
    39: `2`,
    390: `173`,
    391: `174`,
    392: `175`,
    393: `175`,
    394: `176`,
    395: `177`,
    396: `177`,
    397: `177`,
    398: `178`,
    399: `178`,
    4: `2`,
    40: `4`,
    400: `179`,
    401: `179`,
    402: `180`,
    403: `180`,
    404: `181`,
    405: `181`,
    406: `181`,
    407: `183`,
    408: `183`,
    409: `184`,
    41: `4`,
    410: `184`,
    411: `184`,
    412: `185`,
    413: `186`,
    414: `186`,
    415: `187`,
    416: `187`,
    417: `188`,
    418: `189`,
    419: `195`,
    42: `5`,
    420: `196`,
    421: `197`,
    422: `198`,
    423: `199`,
    424: `199`,
    425: `200`,
    426: `201`,
    427: `201`,
    428: `201`,
    429: `202`,
    43: `5`,
    430: `203`,
    431: `203`,
    432: `204`,
    433: `205`,
    434: `206`,
    435: `207`,
    436: `208`,
    437: `213`,
    438: `214`,
    439: `215`,
    44: `5`,
    440: `215`,
    441: `216`,
    442: `216`,
    443: `216`,
    444: `217`,
    445: `218`,
    446: `219`,
    447: `220`,
    448: `221`,
    449: `221`,
    45: `6`,
    450: `222`,
    451: `223`,
    452: `224`,
    453: `229`,
    454: `229`,
    455: `230`,
    456: `231`,
    457: `231`,
    458: `232`,
    459: `233`,
    46: `7`,
    460: `233`,
    461: `233`,
    462: `234`,
    463: `235`,
    464: `235`,
    465: `236`,
    466: `236`,
    467: `236`,
    468: `236`,
    469: `236`,
    47: `8`,
    470: `236`,
    471: `236`,
    472: `236`,
    473: `236`,
    474: `236`,
    475: `237`,
    476: `237`,
    477: `238`,
    478: `239`,
    479: `239`,
    48: `9`,
    480: `239`,
    481: `240`,
    482: `241`,
    483: `242`,
    484: `242`,
    485: `243`,
    486: `244`,
    487: `244`,
    488: `244`,
    489: `245`,
    49: `10`,
    490: `245`,
    491: `246`,
    492: `246`,
    493: `247`,
    494: `247`,
    495: `248`,
    496: `248`,
    497: `248`,
    498: `250`,
    499: `250`,
    5: `2`,
    50: `11`,
    500: `250`,
    501: `250`,
    502: `250`,
    503: `250`,
    504: `250`,
    505: `250`,
    506: `250`,
    507: `250`,
    508: `250`,
    509: `251`,
    51: `11`,
    510: `252`,
    511: `253`,
    512: `254`,
    513: `255`,
    514: `260`,
    515: `261`,
    516: `261`,
    517: `262`,
    518: `263`,
    519: `269`,
    52: `12`,
    520: `269`,
    521: `270`,
    522: `271`,
    523: `271`,
    524: `272`,
    525: `273`,
    526: `273`,
    527: `273`,
    528: `274`,
    529: `275`,
    53: `13`,
    530: `275`,
    531: `276`,
    532: `276`,
    533: `276`,
    534: `276`,
    535: `276`,
    536: `276`,
    537: `276`,
    538: `276`,
    539: `276`,
    54: `14`,
    540: `276`,
    541: `277`,
    542: `277`,
    543: `278`,
    544: `279`,
    545: `280`,
    546: `280`,
    547: `281`,
    548: `281`,
    549: `282`,
    55: `14`,
    550: `283`,
    551: `283`,
    552: `284`,
    553: `284`,
    554: `284`,
    555: `285`,
    556: `286`,
    557: `286`,
    558: `287`,
    559: `287`,
    56: `15`,
    560: `287`,
    561: `288`,
    562: `289`,
    563: `289`,
    564: `290`,
    565: `290`,
    566: `290`,
    567: `291`,
    568: `292`,
    569: `292`,
    57: `16`,
    570: `293`,
    571: `293`,
    572: `293`,
    573: `294`,
    574: `295`,
    575: `295`,
    576: `296`,
    577: `296`,
    578: `296`,
    579: `297`,
    58: `17`,
    580: `298`,
    581: `298`,
    582: `299`,
    583: `299`,
    584: `299`,
    585: `300`,
    586: `301`,
    587: `301`,
    588: `302`,
    589: `302`,
    59: `18`,
    590: `302`,
    591: `303`,
    592: `304`,
    593: `304`,
    594: `305`,
    595: `305`,
    596: `306`,
    597: `306`,
    598: `307`,
    599: `307`,
    6: `2`,
    60: `19`,
    600: `307`,
    601: `309`,
    602: `309`,
    603: `310`,
    604: `310`,
    605: `310`,
    606: `311`,
    607: `311`,
    608: `312`,
    609: `312`,
    61: `21`,
    610: `313`,
    611: `313`,
    612: `314`,
    613: `315`,
    614: `315`,
    615: `316`,
    616: `316`,
    617: `317`,
    618: `317`,
    619: `318`,
    62: `21`,
    620: `318`,
    621: `319`,
    622: `320`,
    623: `321`,
    624: `326`,
    625: `327`,
    626: `329`,
    627: `330`,
    628: `331`,
    629: `332`,
    63: `21`,
    630: `333`,
    631: `333`,
    632: `334`,
    633: `335`,
    634: `335`,
    635: `335`,
    636: `336`,
    637: `336`,
    638: `336`,
    639: `337`,
    64: `21`,
    640: `338`,
    641: `339`,
    642: `339`,
    643: `340`,
    644: `340`,
    645: `341`,
    646: `342`,
    647: `347`,
    648: `347`,
    649: `348`,
    65: `21`,
    650: `349`,
    651: `349`,
    652: `350`,
    653: `351`,
    654: `351`,
    655: `352`,
    656: `352`,
    657: `353`,
    658: `354`,
    659: `355`,
    66: `21`,
    660: `355`,
    661: `355`,
    662: `357`,
    663: `357`,
    664: `358`,
    665: `359`,
    666: `359`,
    667: `360`,
    668: `361`,
    669: `362`,
    67: `21`,
    670: `363`,
    671: `364`,
    672: `365`,
    673: `366`,
    674: `367`,
    675: `367`,
    676: `368`,
    677: `369`,
    678: `369`,
    679: `369`,
    68: `21`,
    680: `370`,
    681: `370`,
    682: `370`,
    683: `371`,
    684: `372`,
    685: `372`,
    686: `373`,
    687: `374`,
    688: `375`,
    689: `375`,
    69: `21`,
    690: `375`,
    691: `376`,
    692: `376`,
    693: `377`,
    694: `377`,
    695: `378`,
    696: `378`,
    697: `379`,
    698: `379`,
    699: `380`,
    7: `2`,
    70: `21`,
    700: `381`,
    701: `381`,
    702: `382`,
    703: `383`,
    704: `383`,
    705: `384`,
    706: `385`,
    707: `386`,
    708: `386`,
    709: `387`,
    71: `21`,
    710: `388`,
    711: `389`,
    712: `391`,
    713: `392`,
    714: `392`,
    715: `393`,
    716: `393`,
    717: `393`,
    718: `393`,
    719: `393`,
    72: `21`,
    720: `393`,
    721: `393`,
    722: `393`,
    723: `393`,
    724: `393`,
    725: `394`,
    726: `394`,
    727: `395`,
    728: `396`,
    729: `396`,
    73: `21`,
    730: `396`,
    731: `397`,
    732: `398`,
    733: `399`,
    734: `399`,
    735: `400`,
    736: `401`,
    737: `401`,
    738: `401`,
    739: `402`,
    74: `21`,
    740: `402`,
    741: `403`,
    742: `403`,
    743: `404`,
    744: `404`,
    745: `405`,
    746: `405`,
    747: `405`,
    748: `407`,
    749: `407`,
    75: `21`,
    750: `408`,
    751: `408`,
    752: `408`,
    753: `409`,
    754: `409`,
    755: `410`,
    756: `410`,
    757: `411`,
    758: `411`,
    759: `411`,
    76: `21`,
    760: `412`,
    761: `412`,
    762: `413`,
    763: `413`,
    764: `414`,
    765: `414`,
    766: `415`,
    767: `416`,
    768: `416`,
    769: `417`,
    77: `21`,
    770: `417`,
    771: `418`,
    772: `418`,
    773: `419`,
    774: `420`,
    775: `425`,
    776: `425`,
    777: `426`,
    778: `426`,
    779: `427`,
    78: `21`,
    780: `428`,
    781: `433`,
    782: `434`,
    783: `436`,
    784: `437`,
    785: `438`,
    786: `439`,
    787: `440`,
    788: `440`,
    789: `441`,
    79: `21`,
    790: `442`,
    791: `442`,
    792: `442`,
    793: `443`,
    794: `443`,
    795: `443`,
    796: `444`,
    797: `445`,
    798: `446`,
    799: `446`,
    8: `2`,
    80: `21`,
    800: `447`,
    801: `447`,
    802: `448`,
    803: `449`,
    804: `454`,
    805: `454`,
    806: `455`,
    807: `455`,
    808: `456`,
    809: `457`,
    81: `21`,
    810: `457`,
    811: `458`,
    812: `459`,
    813: `461`,
    814: `462`,
    815: `463`,
    816: `464`,
    817: `465`,
    818: `465`,
    819: `466`,
    82: `21`,
    820: `467`,
    821: `468`,
    822: `468`,
    823: `468`,
    824: `469`,
    825: `469`,
    826: `469`,
    827: `470`,
    828: `471`,
    829: `472`,
    83: `21`,
    830: `472`,
    831: `473`,
    832: `473`,
    833: `474`,
    834: `475`,
    835: `480`,
    836: `480`,
    837: `481`,
    838: `482`,
    839: `482`,
    84: `21`,
    840: `483`,
    841: `484`,
    842: `484`,
    843: `485`,
    844: `485`,
    845: `486`,
    846: `487`,
    847: `488`,
    848: `488`,
    849: `488`,
    85: `21`,
    850: `490`,
    851: `490`,
    852: `491`,
    853: `492`,
    854: `492`,
    855: `493`,
    856: `494`,
    857: `495`,
    858: `496`,
    859: `497`,
    86: `21`,
    860: `498`,
    861: `499`,
    862: `500`,
    863: `500`,
    864: `501`,
    865: `502`,
    866: `502`,
    867: `502`,
    868: `503`,
    869: `503`,
    87: `21`,
    870: `503`,
    871: `504`,
    872: `505`,
    873: `505`,
    874: `506`,
    875: `507`,
    876: `508`,
    877: `508`,
    878: `508`,
    879: `509`,
    88: `21`,
    880: `509`,
    881: `510`,
    882: `510`,
    883: `511`,
    884: `511`,
    885: `512`,
    886: `512`,
    887: `513`,
    888: `514`,
    889: `514`,
    89: `21`,
    890: `515`,
    891: `516`,
    892: `516`,
    893: `517`,
    894: `518`,
    895: `519`,
    896: `519`,
    897: `520`,
    898: `521`,
    899: `522`,
    9: `2`,
    90: `21`,
    900: `524`,
    901: `524`,
    902: `525`,
    903: `525`,
    904: `526`,
    905: `527`,
    906: `527`,
    907: `528`,
    908: `528`,
    909: `529`,
    91: `21`,
    910: `530`,
    911: `530`,
    912: `531`,
    913: `532`,
    914: `533`,
    915: `533`,
    916: `534`,
    917: `535`,
    918: `535`,
    919: `535`,
    92: `21`,
    920: `536`,
    921: `536`,
    922: `537`,
    923: `537`,
    924: `538`,
    925: `538`,
    926: `539`,
    927: `539`,
    928: `540`,
    929: `541`,
    93: `21`,
    930: `541`,
    931: `542`,
    932: `543`,
    933: `543`,
    934: `544`,
    935: `545`,
    936: `546`,
    937: `546`,
    938: `547`,
    939: `548`,
    94: `21`,
    940: `549`,
    941: `551`,
    942: `552`,
    943: `552`,
    944: `553`,
    945: `553`,
    946: `553`,
    947: `553`,
    948: `553`,
    949: `553`,
    95: `21`,
    950: `553`,
    951: `553`,
    952: `553`,
    953: `553`,
    954: `554`,
    955: `554`,
    956: `555`,
    957: `556`,
    958: `556`,
    959: `556`,
    96: `21`,
    960: `557`,
    961: `558`,
    962: `559`,
    963: `559`,
    964: `560`,
    965: `561`,
    966: `561`,
    967: `561`,
    968: `562`,
    969: `562`,
    97: `21`,
    970: `563`,
    971: `563`,
    972: `564`,
    973: `564`,
    974: `565`,
    975: `565`,
    976: `565`,
    977: `567`,
    978: `567`,
    979: `568`,
    98: `21`,
    980: `569`,
    981: `570`,
    982: `573`,
    983: `573`,
    984: `573`,
    985: `574`,
    986: `575`,
    987: `577`,
    988: `578`,
    989: `579`,
    99: `21`,
    990: `580`,
    991: `581`,
    992: `581`,
    993: `582`,
    994: `582`,
    995: `583`,
    996: `584`,
    997: `585`,
    998: `586`,
    999: `586`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 227,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:260:11:after expr stmt semicolon',
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
