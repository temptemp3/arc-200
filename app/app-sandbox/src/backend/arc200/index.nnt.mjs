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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc4 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc2,
    symbol: ctc3
    });
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_UInt256;
  const ctc8 = stdlib.T_Object({
    closed: ctc6,
    decimals: ctc1,
    enableZeroAddressBurn: ctc6,
    manager: ctc0,
    name: ctc2,
    symbol: ctc3,
    token: ctc5,
    tokenAmount: ctc1,
    totalSupply: ctc7,
    zeroAddress: ctc0
    });
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc10 = stdlib.T_Struct([['name', ctc2], ['symbol', ctc3], ['decimals', ctc1], ['totalSupply', ctc7], ['zeroAddress', ctc0], ['manager', ctc0], ['enableZeroAddressBurn', ctc6], ['closed', ctc6], ['token', ctc5], ['tokenAmount', ctc1]]);
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc7
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc12;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async (_v2026, _v2027 ) => {
          const v2026 = stdlib.protect(ctc0, _v2026, null);
          const v2027 = stdlib.protect(ctc0, _v2027, null);
        
        const v2028 = [v2026, v2027];
        const v2029 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc9, v2028, ctc7), null);
        const v2030 = stdlib.fromSome(v2029, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2030;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async (_v2023 ) => {
          const v2023 = stdlib.protect(ctc0, _v2023, null);
        
        const v2024 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2023, ctc7), null);
        const v2025 = stdlib.fromSome(v2024, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2025;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async () => {
        
        
        return v1973;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async () => {
        
        const v1981 = v1965.name;
        
        return v1981;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async () => {
        
        const v2011 = v1988.name;
        const v2012 = v1988.symbol;
        const v2013 = v1988.decimals;
        const v2014 = v1988.totalSupply;
        const v2015 = v1988.zeroAddress;
        const v2016 = v1988.manager;
        const v2017 = v1988.enableZeroAddressBurn;
        const v2018 = v1988.closed;
        const v2019 = v1988.token;
        const v2020 = v1988.tokenAmount;
        const v2021 = {
          closed: v2018,
          decimals: v2013,
          enableZeroAddressBurn: v2017,
          manager: v2016,
          name: v2011,
          symbol: v2012,
          token: v2019,
          tokenAmount: v2020,
          totalSupply: v2014,
          zeroAddress: v2015
          };
        
        return v2021;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async () => {
        
        const v1982 = v1965.symbol;
        
        return v1982;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1963, v1965, v1966, v1973, v1976, v1988] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc0, ctc0],
        rng: ctc7
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0],
        rng: ctc7
        },
      decimals: {
        decode: _decimals,
        dom: [],
        rng: ctc1
        },
      name: {
        decode: _name,
        dom: [],
        rng: ctc2
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc10
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc3
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc7
        }
      },
    views: {
      3: [ctc0, ctc4, ctc5, ctc1, ctc0, ctc8]
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    meta: ctc7,
    tok: ctc8,
    zeroAddress: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc11,
    deleteAllowanceBox0_248: ctc12,
    deleteBalanceBox0_248: ctc13,
    deposit0_248: ctc14,
    destroy0_248: ctc15,
    transfer0_248: ctc11,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc14
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
  
  
  const v1945 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  const v1946 = v1945.enableZeroAddressBurn;
  const v1947 = v1945.meta;
  const v1948 = v1945.tok;
  const v1949 = v1945.zeroAddress;
  const v1950 = v1947.decimals;
  
  const v1960 = stdlib.le(v1950, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1960, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1949, v1946, v1947, v1948],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:381:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9, ctc3, ctc7, ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:381:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1963, v1964, v1965, v1966], secs: v1968, time: v1967, didSend: v77, from: v1962 } = txn1;
      
      const v1973 = v1965.decimals;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1966
        });
      ;
      const v1976 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc9, v1976, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc9, v1963, ctc1, stdlib.checkedBigNumberify('./index.rsh:402:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1978 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      const v1979 = await ctc.getContractInfo();
      
      const v1985 = v1965.name;
      const v1986 = v1965.symbol;
      const v1987 = {
        closed: false,
        decimals: v1973,
        enableZeroAddressBurn: v1964,
        manager: v1976,
        name: v1985,
        symbol: v1986,
        token: v1966,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        zeroAddress: v1963
        };
      const v1988 = v1987;
      const v1989 = v1967;
      
      if (await (async () => {
        const v2009 = v1988.closed;
        const v2010 = v2009 ? false : true;
        
        return v2010;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1966
          })
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
    tys: [ctc9, ctc3, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1963, v1964, v1965, v1966], secs: v1968, time: v1967, didSend: v77, from: v1962 } = txn1;
  const v1973 = v1965.decimals;
  const v1974 = stdlib.le(v1973, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1974, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:390:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  ;
  const v1976 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc9, v1976, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc9, v1963, ctc1, stdlib.checkedBigNumberify('./index.rsh:402:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1978 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  const v1979 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1979), {
    at: './index.rsh:405:21:application',
    fs: ['at ./index.rsh:405:21:application call to [unknown function] (defined at: ./index.rsh:405:21:function exp)', 'at ./index.rsh:405:21:application call to "liftedInteract" (defined at: ./index.rsh:405:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1985 = v1965.name;
  const v1986 = v1965.symbol;
  const v1987 = {
    closed: false,
    decimals: v1973,
    enableZeroAddressBurn: v1964,
    manager: v1976,
    name: v1985,
    symbol: v1986,
    token: v1966,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    zeroAddress: v1963
    };
  let v1988 = v1987;
  let v1989 = v1967;
  
  let txn2 = txn1;
  while (await (async () => {
    const v2009 = v1988.closed;
    const v2010 = v2009 ? false : true;
    
    return v2010;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn3;
    switch (v2275[0]) {
      case 'approve0_248': {
        const v2278 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2341 = v2278[stdlib.checkedBigNumberify('./index.rsh:504:12:spread', stdlib.UInt_max, '0')];
        const v2342 = v2278[stdlib.checkedBigNumberify('./index.rsh:504:12:spread', stdlib.UInt_max, '1')];
        const v2343 = stdlib.addressEq(v2274, v1963);
        const v2344 = v2343 ? false : true;
        stdlib.assert(v2344, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:505:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:508:15:application call to [unknown function] (defined at: ./index.rsh:508:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v2346 = stdlib.addressEq(v2341, v1963);
        const v2347 = v2346 ? false : true;
        stdlib.assert(v2347, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:506:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:508:15:application call to [unknown function] (defined at: ./index.rsh:508:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v2351 = [v2274, v2341];
        await stdlib.mapSet(map1, ctc12, v2351, ctc1, v2342);
        null;
        const v2352 = true;
        await txn3.getOutput('approve', 'v2352', ctc3, v2352);
        const cv1988 = v1988;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_248': {
        const v2606 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2690 = v2606[stdlib.checkedBigNumberify('./index.rsh:578:12:spread', stdlib.UInt_max, '0')];
        const v2691 = v2606[stdlib.checkedBigNumberify('./index.rsh:578:12:spread', stdlib.UInt_max, '1')];
        const v2692 = [v2690, v2691];
        const v2693 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2692, ctc1), null);
        const v2694 = {
          None: 0,
          Some: 1
          }[v2693[0]];
        const v2695 = stdlib.eq(v2694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2695, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:579:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:588:15:application call to [unknown function] (defined at: ./index.rsh:588:15:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v2699 = stdlib.fromSome(v2693, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2700 = stdlib.eq256(v2699, stdlib.checkedBigNumberify('./index.rsh:584:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2700, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:583:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:588:15:application call to [unknown function] (defined at: ./index.rsh:588:15:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc12, v2692, ctc1, undefined /* Nothing */);
        const v2705 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v2705', ctc3, v2705);
        const cv1988 = v1988;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_248': {
        const v2934 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3043 = v2934[stdlib.checkedBigNumberify('./index.rsh:556:12:spread', stdlib.UInt_max, '0')];
        const v3044 = stdlib.addressEq(v3043, v1963);
        const v3045 = v3044 ? false : true;
        stdlib.assert(v3045, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v3047 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v3043, ctc1), null);
        const v3048 = {
          None: 0,
          Some: 1
          }[v3047[0]];
        const v3049 = stdlib.eq(v3048, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3049, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:561:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v3052 = stdlib.fromSome(v3047, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3053 = stdlib.eq256(v3052, stdlib.checkedBigNumberify('./index.rsh:563:45:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v3053, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:562:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc9, v3043, ctc1, undefined /* Nothing */);
        const v3056 = true;
        await txn3.getOutput('deleteBalanceBox', 'v3056', ctc3, v3056);
        const cv1988 = v1988;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deposit0_248': {
        const v3262 = v2275[1];
        undefined /* setApiDetails */;
        const v3282 = v3262[stdlib.checkedBigNumberify('./index.rsh:516:12:spread', stdlib.UInt_max, '0')];
        ;
        ;
        const v3396 = stdlib.cast("UInt", "UInt256", v3282, false, true);
        const v3397 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v1976, ctc1), null);
        const v3398 = stdlib.fromSome(v3397, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3399 = stdlib.safeSub256(v3398, v3396);
        await stdlib.mapSet(map0, ctc9, v1976, ctc1, v3399);
        const v3400 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2274, ctc1), null);
        const v3401 = stdlib.fromSome(v3400, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3402 = stdlib.safeAdd256(v3401, v3396);
        await stdlib.mapSet(map0, ctc9, v2274, ctc1, v3402);
        null;
        const v3407 = stdlib.safeAdd256(v3402, v3396);
        await txn3.getOutput('deposit', 'v3407', ctc1, v3407);
        const v3414 = v1988.closed;
        const v3415 = v1988.decimals;
        const v3416 = v1988.enableZeroAddressBurn;
        const v3417 = v1988.manager;
        const v3418 = v1988.name;
        const v3419 = v1988.symbol;
        const v3420 = v1988.token;
        const v3421 = v1988.tokenAmount;
        const v3422 = v1988.totalSupply;
        const v3423 = v1988.zeroAddress;
        const v3425 = stdlib.safeAdd(v3421, v3282);
        const v3426 = {
          closed: v3414,
          decimals: v3415,
          enableZeroAddressBurn: v3416,
          manager: v3417,
          name: v3418,
          symbol: v3419,
          token: v3420,
          tokenAmount: v3425,
          totalSupply: v3422,
          zeroAddress: v3423
          };
        const cv1988 = v3426;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_248': {
        const v3590 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3758 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v3759 = {
          None: 0,
          Some: 1
          }[v3758[0]];
        const v3760 = stdlib.eq(v3759, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3760, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:601:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:607:15:application call to [unknown function] (defined at: ./index.rsh:607:15:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        const v3762 = v1988.tokenAmount;
        const v3763 = stdlib.eq(v3762, stdlib.checkedBigNumberify('./index.rsh:605:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3763, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:605:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:607:15:application call to [unknown function] (defined at: ./index.rsh:607:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc9, v1963, ctc1, undefined /* Nothing */);
        const v3765 = null;
        await txn3.getOutput('destroy', 'v3765', ctc0, v3765);
        const v3772 = v1988.decimals;
        const v3773 = v1988.enableZeroAddressBurn;
        const v3774 = v1988.manager;
        const v3775 = v1988.name;
        const v3776 = v1988.symbol;
        const v3777 = v1988.token;
        const v3779 = v1988.totalSupply;
        const v3780 = v1988.zeroAddress;
        const v3781 = {
          closed: true,
          decimals: v3772,
          enableZeroAddressBurn: v3773,
          manager: v3774,
          name: v3775,
          symbol: v3776,
          token: v3777,
          tokenAmount: v3762,
          totalSupply: v3779,
          zeroAddress: v3780
          };
        const cv1988 = v3781;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_248': {
        const v3918 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4113 = v3918[stdlib.checkedBigNumberify('./index.rsh:463:12:spread', stdlib.UInt_max, '0')];
        const v4114 = v3918[stdlib.checkedBigNumberify('./index.rsh:463:12:spread', stdlib.UInt_max, '1')];
        const v4115 = stdlib.addressEq(v4113, v1963);
        const v4116 = v4115 ? false : true;
        stdlib.assert(v4116, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:464:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:470:15:application call to [unknown function] (defined at: ./index.rsh:470:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v4118 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2274, ctc1), null);
        const v4119 = stdlib.fromSome(v4118, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4120 = stdlib.ge256(v4119, v4114);
        stdlib.assert(v4120, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:465:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:470:15:application call to [unknown function] (defined at: ./index.rsh:470:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v4126 = stdlib.safeSub256(v4119, v4114);
        await stdlib.mapSet(map0, ctc9, v2274, ctc1, v4126);
        const v4127 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4113, ctc1), null);
        const v4128 = stdlib.fromSome(v4127, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4129 = stdlib.safeAdd256(v4128, v4114);
        await stdlib.mapSet(map0, ctc9, v4113, ctc1, v4129);
        null;
        const v4131 = true;
        await txn3.getOutput('transfer', 'v4131', ctc3, v4131);
        const cv1988 = v1988;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_248': {
        const v4246 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4469 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '0')];
        const v4470 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '1')];
        const v4471 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '2')];
        const v4472 = stdlib.addressEq(v4469, v1963);
        const v4473 = v4472 ? false : true;
        stdlib.assert(v4473, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v4475 = stdlib.addressEq(v4470, v1963);
        const v4476 = v4475 ? false : true;
        stdlib.assert(v4476, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v4478 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4469, ctc1), null);
        const v4479 = stdlib.fromSome(v4478, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4480 = stdlib.ge256(v4479, v4471);
        stdlib.assert(v4480, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:484:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v4482 = [v4469, v2274];
        const v4483 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v4482, ctc1), null);
        const v4484 = stdlib.fromSome(v4483, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4485 = stdlib.ge256(v4484, v4471);
        stdlib.assert(v4485, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:488:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v4492 = stdlib.safeSub256(v4479, v4471);
        await stdlib.mapSet(map0, ctc9, v4469, ctc1, v4492);
        const v4493 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4470, ctc1), null);
        const v4494 = stdlib.fromSome(v4493, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4495 = stdlib.safeAdd256(v4494, v4471);
        await stdlib.mapSet(map0, ctc9, v4470, ctc1, v4495);
        null;
        const v4500 = stdlib.safeSub256(v4484, v4471);
        await stdlib.mapSet(map1, ctc12, v4482, ctc1, v4500);
        null;
        const v4503 = true;
        await txn3.getOutput('transferFrom', 'v4503', ctc3, v4503);
        const cv1988 = v1988;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_248': {
        const v4574 = v2275[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4842 = v4574[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '0')];
        const v4843 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2274, ctc1), null);
        const v4844 = stdlib.fromSome(v4843, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4845 = stdlib.cast("UInt", "UInt256", v4842, false, true);
        const v4846 = stdlib.ge256(v4844, v4845);
        stdlib.assert(v4846, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:532:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:538:15:application call to [unknown function] (defined at: ./index.rsh:538:15:function exp)'],
          msg: 'Withdraw: insufficient balance',
          who: 'Deployer'
          });
        const v4848 = v1988.tokenAmount;
        const v4849 = stdlib.ge(v4848, v4842);
        stdlib.assert(v4849, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:536:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:538:15:application call to [unknown function] (defined at: ./index.rsh:538:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v4857 = stdlib.safeSub256(v4844, v4845);
        await stdlib.mapSet(map0, ctc9, v2274, ctc1, v4857);
        const v4858 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v1976, ctc1), null);
        const v4859 = stdlib.fromSome(v4858, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4860 = stdlib.safeAdd256(v4859, v4845);
        await stdlib.mapSet(map0, ctc9, v1976, ctc1, v4860);
        null;
        const v4862 = [v2274, v1976];
        const v4863 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v4862, ctc1), null);
        const v4864 = stdlib.fromSome(v4863, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4865 = stdlib.safeSub256(v4864, v4845);
        await stdlib.mapSet(map1, ctc12, v4862, ctc1, v4865);
        null;
        ;
        const v4877 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v2274, ctc1), null);
        const v4878 = stdlib.fromSome(v4877, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4880 = stdlib.safeSub256(v4878, v4845);
        await txn3.getOutput('withdraw', 'v4880', ctc1, v4880);
        const v4887 = v1988.closed;
        const v4888 = v1988.decimals;
        const v4889 = v1988.enableZeroAddressBurn;
        const v4890 = v1988.manager;
        const v4891 = v1988.name;
        const v4892 = v1988.symbol;
        const v4893 = v1988.token;
        const v4895 = v1988.totalSupply;
        const v4896 = v1988.zeroAddress;
        const v4898 = stdlib.safeSub(v4848, v4842);
        const v4899 = {
          closed: v4887,
          decimals: v4888,
          enableZeroAddressBurn: v4889,
          manager: v4890,
          name: v4891,
          symbol: v4892,
          token: v4893,
          tokenAmount: v4898,
          totalSupply: v4895,
          zeroAddress: v4896
          };
        const cv1988 = v4899;
        const cv1989 = v2276;
        
        v1988 = cv1988;
        v1989 = cv1989;
        
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc11,
    deleteAllowanceBox0_248: ctc12,
    deleteBalanceBox0_248: ctc13,
    deposit0_248: ctc14,
    destroy0_248: ctc15,
    transfer0_248: ctc11,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc14
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2089 = ctc.selfAddress();
  const v2091 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:504:47:application call to [unknown function] (defined at: ./index.rsh:504:47:function exp)', 'at ./index.rsh:423:31:application call to "runapprove0_248" (defined at: ./index.rsh:504:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v2092 = v2091[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2096 = stdlib.addressEq(v2089, v1963);
  const v2097 = v2096 ? false : true;
  stdlib.assert(v2097, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:505:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:504:47:application call to [unknown function] (defined at: ./index.rsh:504:47:function exp)', 'at ./index.rsh:423:31:application call to "runapprove0_248" (defined at: ./index.rsh:504:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v2099 = stdlib.addressEq(v2092, v1963);
  const v2100 = v2099 ? false : true;
  stdlib.assert(v2100, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:506:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:504:47:application call to [unknown function] (defined at: ./index.rsh:504:47:function exp)', 'at ./index.rsh:423:31:application call to "runapprove0_248" (defined at: ./index.rsh:504:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v2109 = ['approve0_248', v2091];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2109],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:504:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          ;
          const v2341 = v2278[stdlib.checkedBigNumberify('./index.rsh:504:12:spread', stdlib.UInt_max, '0')];
          const v2342 = v2278[stdlib.checkedBigNumberify('./index.rsh:504:12:spread', stdlib.UInt_max, '1')];
          const v2351 = [v2274, v2341];
          await stdlib.simMapSet(sim_r, 1, ctc12, v2351, ctc1, v2342);
          null;
          const v2352 = true;
          const v2353 = await txn1.getOutput('approve', 'v2352', ctc9, v2352);
          
          const v9035 = v1988;
          const v9037 = v1988.closed;
          if (v9037) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2341 = v2278[stdlib.checkedBigNumberify('./index.rsh:504:12:spread', stdlib.UInt_max, '0')];
      const v2342 = v2278[stdlib.checkedBigNumberify('./index.rsh:504:12:spread', stdlib.UInt_max, '1')];
      const v2343 = stdlib.addressEq(v2274, v1963);
      const v2344 = v2343 ? false : true;
      stdlib.assert(v2344, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:505:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:508:15:application call to [unknown function] (defined at: ./index.rsh:508:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v2346 = stdlib.addressEq(v2341, v1963);
      const v2347 = v2346 ? false : true;
      stdlib.assert(v2347, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:506:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:508:15:application call to [unknown function] (defined at: ./index.rsh:508:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v2351 = [v2274, v2341];
      await stdlib.mapSet(map1, ctc12, v2351, ctc1, v2342);
      null;
      const v2352 = true;
      const v2353 = await txn1.getOutput('approve', 'v2352', ctc9, v2352);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v2278, v2353), {
          at: './index.rsh:504:13:application',
          fs: ['at ./index.rsh:504:13:application call to [unknown function] (defined at: ./index.rsh:504:13:function exp)', 'at ./index.rsh:511:14:application call to "k" (defined at: ./index.rsh:508:15:function exp)', 'at ./index.rsh:508:15:application call to [unknown function] (defined at: ./index.rsh:508:15:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v9035 = v1988;
      const v9037 = v1988.closed;
      if (v9037) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc12,
    deleteAllowanceBox0_248: ctc11,
    deleteBalanceBox0_248: ctc13,
    deposit0_248: ctc14,
    destroy0_248: ctc15,
    transfer0_248: ctc12,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc14
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2168 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:578:55:application call to [unknown function] (defined at: ./index.rsh:578:55:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteAllowanceBox0_248" (defined at: ./index.rsh:578:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v2169 = v2168[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2170 = v2168[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2173 = [v2169, v2170];
  const v2174 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2173, ctc1), null);
  const v2175 = {
    None: 0,
    Some: 1
    }[v2174[0]];
  const v2176 = stdlib.eq(v2175, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2176, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:579:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:578:55:application call to [unknown function] (defined at: ./index.rsh:578:55:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteAllowanceBox0_248" (defined at: ./index.rsh:578:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v2180 = stdlib.fromSome(v2174, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2181 = stdlib.eq256(v2180, stdlib.checkedBigNumberify('./index.rsh:584:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2181, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:583:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:578:55:application call to [unknown function] (defined at: ./index.rsh:578:55:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteAllowanceBox0_248" (defined at: ./index.rsh:578:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v2190 = ['deleteAllowanceBox0_248', v2168];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2190],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:578:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          ;
          const v2690 = v2606[stdlib.checkedBigNumberify('./index.rsh:578:12:spread', stdlib.UInt_max, '0')];
          const v2691 = v2606[stdlib.checkedBigNumberify('./index.rsh:578:12:spread', stdlib.UInt_max, '1')];
          const v2692 = [v2690, v2691];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v2692, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc11, v2692, ctc1, undefined /* Nothing */);
          const v2705 = true;
          const v2706 = await txn1.getOutput('deleteAllowanceBox', 'v2705', ctc9, v2705);
          
          const v9071 = v1988;
          const v9073 = v1988.closed;
          if (v9073) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2690 = v2606[stdlib.checkedBigNumberify('./index.rsh:578:12:spread', stdlib.UInt_max, '0')];
      const v2691 = v2606[stdlib.checkedBigNumberify('./index.rsh:578:12:spread', stdlib.UInt_max, '1')];
      const v2692 = [v2690, v2691];
      const v2693 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2692, ctc1), null);
      const v2694 = {
        None: 0,
        Some: 1
        }[v2693[0]];
      const v2695 = stdlib.eq(v2694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2695, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:579:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:588:15:application call to [unknown function] (defined at: ./index.rsh:588:15:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v2699 = stdlib.fromSome(v2693, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2700 = stdlib.eq256(v2699, stdlib.checkedBigNumberify('./index.rsh:584:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2700, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:583:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:588:15:application call to [unknown function] (defined at: ./index.rsh:588:15:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc11, v2692, ctc1, undefined /* Nothing */);
      const v2705 = true;
      const v2706 = await txn1.getOutput('deleteAllowanceBox', 'v2705', ctc9, v2705);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v2606, v2706), {
          at: './index.rsh:578:13:application',
          fs: ['at ./index.rsh:578:13:application call to [unknown function] (defined at: ./index.rsh:578:13:function exp)', 'at ./index.rsh:590:14:application call to "k" (defined at: ./index.rsh:588:15:function exp)', 'at ./index.rsh:588:15:application call to [unknown function] (defined at: ./index.rsh:588:15:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v9071 = v1988;
      const v9073 = v1988.closed;
      if (v9073) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc12,
    deleteAllowanceBox0_248: ctc13,
    deleteBalanceBox0_248: ctc11,
    deposit0_248: ctc14,
    destroy0_248: ctc15,
    transfer0_248: ctc12,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc14
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2145 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:556:43:application call to [unknown function] (defined at: ./index.rsh:556:43:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteBalanceBox0_248" (defined at: ./index.rsh:556:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v2146 = v2145[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2148 = stdlib.addressEq(v2146, v1963);
  const v2149 = v2148 ? false : true;
  stdlib.assert(v2149, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:556:43:application call to [unknown function] (defined at: ./index.rsh:556:43:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteBalanceBox0_248" (defined at: ./index.rsh:556:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v2151 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2146, ctc1), null);
  const v2152 = {
    None: 0,
    Some: 1
    }[v2151[0]];
  const v2153 = stdlib.eq(v2152, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2153, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:561:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:556:43:application call to [unknown function] (defined at: ./index.rsh:556:43:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteBalanceBox0_248" (defined at: ./index.rsh:556:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v2156 = stdlib.fromSome(v2151, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2157 = stdlib.eq256(v2156, stdlib.checkedBigNumberify('./index.rsh:563:45:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2157, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:562:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:556:43:application call to [unknown function] (defined at: ./index.rsh:556:43:function exp)', 'at ./index.rsh:423:31:application call to "rundeleteBalanceBox0_248" (defined at: ./index.rsh:556:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v2164 = ['deleteBalanceBox0_248', v2145];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2164],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:556:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          ;
          const v3043 = v2934[stdlib.checkedBigNumberify('./index.rsh:556:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3043, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3043, ctc1, undefined /* Nothing */);
          const v3056 = true;
          const v3057 = await txn1.getOutput('deleteBalanceBox', 'v3056', ctc9, v3056);
          
          const v9107 = v1988;
          const v9109 = v1988.closed;
          if (v9109) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3043 = v2934[stdlib.checkedBigNumberify('./index.rsh:556:12:spread', stdlib.UInt_max, '0')];
      const v3044 = stdlib.addressEq(v3043, v1963);
      const v3045 = v3044 ? false : true;
      stdlib.assert(v3045, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:557:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v3047 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3043, ctc1), null);
      const v3048 = {
        None: 0,
        Some: 1
        }[v3047[0]];
      const v3049 = stdlib.eq(v3048, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3049, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:561:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v3052 = stdlib.fromSome(v3047, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3053 = stdlib.eq256(v3052, stdlib.checkedBigNumberify('./index.rsh:563:45:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3053, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:562:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v3043, ctc1, undefined /* Nothing */);
      const v3056 = true;
      const v3057 = await txn1.getOutput('deleteBalanceBox', 'v3056', ctc9, v3056);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v2934, v3057), {
          at: './index.rsh:556:13:application',
          fs: ['at ./index.rsh:556:13:application call to [unknown function] (defined at: ./index.rsh:556:13:function exp)', 'at ./index.rsh:569:14:application call to "k" (defined at: ./index.rsh:567:15:function exp)', 'at ./index.rsh:567:15:application call to [unknown function] (defined at: ./index.rsh:567:15:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v9107 = v1988;
      const v9109 = v1988.closed;
      if (v9109) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc12,
    deleteAllowanceBox0_248: ctc13,
    deleteBalanceBox0_248: ctc14,
    deposit0_248: ctc11,
    destroy0_248: ctc15,
    transfer0_248: ctc12,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc11
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2113 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:516:35:application call to [unknown function] (defined at: ./index.rsh:516:35:function exp)', 'at ./index.rsh:423:31:application call to "rundeposit0_248" (defined at: ./index.rsh:516:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v2114 = v2113[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2121 = ['deposit0_248', v2113];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2121],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:518:12:decimal', stdlib.UInt_max, '0'), [[v2114, v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v3282 = v3262[stdlib.checkedBigNumberify('./index.rsh:516:12:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v3282,
            kind: 'to',
            tok: v1966
            });
          const v3396 = stdlib.cast("UInt", "UInt256", v3282, false, true);
          const v3397 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1976, ctc1), null);
          const v3398 = stdlib.fromSome(v3397, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3399 = stdlib.safeSub256(v3398, v3396);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1976, ctc1, v3399);
          const v3400 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2274, ctc1), null);
          const v3401 = stdlib.fromSome(v3400, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3402 = stdlib.safeAdd256(v3401, v3396);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2274, ctc1, v3402);
          null;
          const v3407 = stdlib.safeAdd256(v3402, v3396);
          const v3408 = await txn1.getOutput('deposit', 'v3407', ctc1, v3407);
          
          const v3414 = v1988.closed;
          const v3415 = v1988.decimals;
          const v3416 = v1988.enableZeroAddressBurn;
          const v3417 = v1988.manager;
          const v3418 = v1988.name;
          const v3419 = v1988.symbol;
          const v3420 = v1988.token;
          const v3421 = v1988.tokenAmount;
          const v3422 = v1988.totalSupply;
          const v3423 = v1988.zeroAddress;
          const v3425 = stdlib.safeAdd(v3421, v3282);
          const v3426 = {
            closed: v3414,
            decimals: v3415,
            enableZeroAddressBurn: v3416,
            manager: v3417,
            name: v3418,
            symbol: v3419,
            token: v3420,
            tokenAmount: v3425,
            totalSupply: v3422,
            zeroAddress: v3423
            };
          const v9143 = v3426;
          const v9145 = v3426.closed;
          if (v9145) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      undefined /* setApiDetails */;
      const v3282 = v3262[stdlib.checkedBigNumberify('./index.rsh:516:12:spread', stdlib.UInt_max, '0')];
      ;
      ;
      const v3396 = stdlib.cast("UInt", "UInt256", v3282, false, true);
      const v3397 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1976, ctc1), null);
      const v3398 = stdlib.fromSome(v3397, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3399 = stdlib.safeSub256(v3398, v3396);
      await stdlib.mapSet(map0, ctc3, v1976, ctc1, v3399);
      const v3400 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2274, ctc1), null);
      const v3401 = stdlib.fromSome(v3400, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3402 = stdlib.safeAdd256(v3401, v3396);
      await stdlib.mapSet(map0, ctc3, v2274, ctc1, v3402);
      null;
      const v3407 = stdlib.safeAdd256(v3402, v3396);
      const v3408 = await txn1.getOutput('deposit', 'v3407', ctc1, v3407);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v3262, v3408), {
          at: './index.rsh:516:13:application',
          fs: ['at ./index.rsh:516:13:application call to [unknown function] (defined at: ./index.rsh:516:13:function exp)', 'at ./index.rsh:521:14:application call to "k" (defined at: ./index.rsh:519:15:function exp)', 'at ./index.rsh:519:15:application call to [unknown function] (defined at: ./index.rsh:519:15:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v3414 = v1988.closed;
      const v3415 = v1988.decimals;
      const v3416 = v1988.enableZeroAddressBurn;
      const v3417 = v1988.manager;
      const v3418 = v1988.name;
      const v3419 = v1988.symbol;
      const v3420 = v1988.token;
      const v3421 = v1988.tokenAmount;
      const v3422 = v1988.totalSupply;
      const v3423 = v1988.zeroAddress;
      const v3425 = stdlib.safeAdd(v3421, v3282);
      const v3426 = {
        closed: v3414,
        decimals: v3415,
        enableZeroAddressBurn: v3416,
        manager: v3417,
        name: v3418,
        symbol: v3419,
        token: v3420,
        tokenAmount: v3425,
        totalSupply: v3422,
        zeroAddress: v3423
        };
      const v9143 = v3426;
      const v9145 = v3426.closed;
      if (v9145) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc12,
    deleteAllowanceBox0_248: ctc13,
    deleteBalanceBox0_248: ctc14,
    deposit0_248: ctc15,
    destroy0_248: ctc11,
    transfer0_248: ctc12,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc15
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2194 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:600:30:application call to [unknown function] (defined at: ./index.rsh:600:30:function exp)', 'at ./index.rsh:423:31:application call to "rundestroy0_248" (defined at: ./index.rsh:600:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v2195 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v2196 = {
    None: 0,
    Some: 1
    }[v2195[0]];
  const v2197 = stdlib.eq(v2196, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2197, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:601:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:600:30:application call to [unknown function] (defined at: ./index.rsh:600:30:function exp)', 'at ./index.rsh:423:31:application call to "rundestroy0_248" (defined at: ./index.rsh:600:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v2199 = v1988.tokenAmount;
  const v2200 = stdlib.eq(v2199, stdlib.checkedBigNumberify('./index.rsh:605:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2200, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:605:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:600:30:application call to [unknown function] (defined at: ./index.rsh:600:30:function exp)', 'at ./index.rsh:423:31:application call to "rundestroy0_248" (defined at: ./index.rsh:600:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: null,
    who: 'destroy'
    });
  const v2205 = ['destroy0_248', v2194];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2205],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:600:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          ;
          const v3762 = v1988.tokenAmount;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1963, ctc1, undefined /* Nothing */);
          const v3765 = null;
          const v3766 = await txn1.getOutput('destroy', 'v3765', ctc0, v3765);
          
          const v3772 = v1988.decimals;
          const v3773 = v1988.enableZeroAddressBurn;
          const v3774 = v1988.manager;
          const v3775 = v1988.name;
          const v3776 = v1988.symbol;
          const v3777 = v1988.token;
          const v3779 = v1988.totalSupply;
          const v3780 = v1988.zeroAddress;
          const v3781 = {
            closed: true,
            decimals: v3772,
            enableZeroAddressBurn: v3773,
            manager: v3774,
            name: v3775,
            symbol: v3776,
            token: v3777,
            tokenAmount: v3762,
            totalSupply: v3779,
            zeroAddress: v3780
            };
          const v9179 = v3781;
          const v9181 = v3781.closed;
          if (v9181) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3758 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v3759 = {
        None: 0,
        Some: 1
        }[v3758[0]];
      const v3760 = stdlib.eq(v3759, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3760, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:601:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:607:15:application call to [unknown function] (defined at: ./index.rsh:607:15:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      const v3762 = v1988.tokenAmount;
      const v3763 = stdlib.eq(v3762, stdlib.checkedBigNumberify('./index.rsh:605:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3763, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:605:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:607:15:application call to [unknown function] (defined at: ./index.rsh:607:15:function exp)'],
        msg: null,
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1963, ctc1, undefined /* Nothing */);
      const v3765 = null;
      const v3766 = await txn1.getOutput('destroy', 'v3765', ctc0, v3765);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v3590, v3766), {
          at: './index.rsh:600:13:application',
          fs: ['at ./index.rsh:600:13:application call to [unknown function] (defined at: ./index.rsh:600:13:function exp)', 'at ./index.rsh:609:14:application call to "k" (defined at: ./index.rsh:607:15:function exp)', 'at ./index.rsh:607:15:application call to [unknown function] (defined at: ./index.rsh:607:15:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v3772 = v1988.decimals;
      const v3773 = v1988.enableZeroAddressBurn;
      const v3774 = v1988.manager;
      const v3775 = v1988.name;
      const v3776 = v1988.symbol;
      const v3777 = v1988.token;
      const v3779 = v1988.totalSupply;
      const v3780 = v1988.zeroAddress;
      const v3781 = {
        closed: true,
        decimals: v3772,
        enableZeroAddressBurn: v3773,
        manager: v3774,
        name: v3775,
        symbol: v3776,
        token: v3777,
        tokenAmount: v3762,
        totalSupply: v3779,
        zeroAddress: v3780
        };
      const v9179 = v3781;
      const v9181 = v3781.closed;
      if (v9181) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc11,
    deleteAllowanceBox0_248: ctc12,
    deleteBalanceBox0_248: ctc13,
    deposit0_248: ctc14,
    destroy0_248: ctc15,
    transfer0_248: ctc11,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc14
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2031 = ctc.selfAddress();
  const v2033 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:463:43:application call to [unknown function] (defined at: ./index.rsh:463:43:function exp)', 'at ./index.rsh:423:31:application call to "runtransfer0_248" (defined at: ./index.rsh:463:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v2034 = v2033[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2035 = v2033[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2038 = stdlib.addressEq(v2034, v1963);
  const v2039 = v2038 ? false : true;
  stdlib.assert(v2039, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:464:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:463:43:application call to [unknown function] (defined at: ./index.rsh:463:43:function exp)', 'at ./index.rsh:423:31:application call to "runtransfer0_248" (defined at: ./index.rsh:463:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v2041 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2031, ctc1), null);
  const v2042 = stdlib.fromSome(v2041, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2043 = stdlib.ge256(v2042, v2035);
  stdlib.assert(v2043, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:465:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:463:43:application call to [unknown function] (defined at: ./index.rsh:463:43:function exp)', 'at ./index.rsh:423:31:application call to "runtransfer0_248" (defined at: ./index.rsh:463:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v2052 = ['transfer0_248', v2033];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2052],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:463:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          ;
          const v4113 = v3918[stdlib.checkedBigNumberify('./index.rsh:463:12:spread', stdlib.UInt_max, '0')];
          const v4114 = v3918[stdlib.checkedBigNumberify('./index.rsh:463:12:spread', stdlib.UInt_max, '1')];
          const v4118 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2274, ctc1), null);
          const v4119 = stdlib.fromSome(v4118, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4126 = stdlib.safeSub256(v4119, v4114);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2274, ctc1, v4126);
          const v4127 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4113, ctc1), null);
          const v4128 = stdlib.fromSome(v4127, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4129 = stdlib.safeAdd256(v4128, v4114);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4113, ctc1, v4129);
          null;
          const v4131 = true;
          const v4132 = await txn1.getOutput('transfer', 'v4131', ctc9, v4131);
          
          const v9215 = v1988;
          const v9217 = v1988.closed;
          if (v9217) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4113 = v3918[stdlib.checkedBigNumberify('./index.rsh:463:12:spread', stdlib.UInt_max, '0')];
      const v4114 = v3918[stdlib.checkedBigNumberify('./index.rsh:463:12:spread', stdlib.UInt_max, '1')];
      const v4115 = stdlib.addressEq(v4113, v1963);
      const v4116 = v4115 ? false : true;
      stdlib.assert(v4116, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:464:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:470:15:application call to [unknown function] (defined at: ./index.rsh:470:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v4118 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2274, ctc1), null);
      const v4119 = stdlib.fromSome(v4118, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4120 = stdlib.ge256(v4119, v4114);
      stdlib.assert(v4120, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:465:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:470:15:application call to [unknown function] (defined at: ./index.rsh:470:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v4126 = stdlib.safeSub256(v4119, v4114);
      await stdlib.mapSet(map0, ctc3, v2274, ctc1, v4126);
      const v4127 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4113, ctc1), null);
      const v4128 = stdlib.fromSome(v4127, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4129 = stdlib.safeAdd256(v4128, v4114);
      await stdlib.mapSet(map0, ctc3, v4113, ctc1, v4129);
      null;
      const v4131 = true;
      const v4132 = await txn1.getOutput('transfer', 'v4131', ctc9, v4131);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v3918, v4132), {
          at: './index.rsh:463:13:application',
          fs: ['at ./index.rsh:463:13:application call to [unknown function] (defined at: ./index.rsh:463:13:function exp)', 'at ./index.rsh:472:14:application call to "k" (defined at: ./index.rsh:470:15:function exp)', 'at ./index.rsh:470:15:application call to [unknown function] (defined at: ./index.rsh:470:15:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v9215 = v1988;
      const v9217 = v1988.closed;
      if (v9217) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc13,
    deleteAllowanceBox0_248: ctc12,
    deleteBalanceBox0_248: ctc14,
    deposit0_248: ctc15,
    destroy0_248: ctc16,
    transfer0_248: ctc13,
    transferFrom0_248: ctc11,
    withdraw0_248: ctc15
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2054 = ctc.selfAddress();
  const v2056 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:481:54:application call to [unknown function] (defined at: ./index.rsh:481:54:function exp)', 'at ./index.rsh:423:31:application call to "runtransferFrom0_248" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v2057 = v2056[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2058 = v2056[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2059 = v2056[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2063 = stdlib.addressEq(v2057, v1963);
  const v2064 = v2063 ? false : true;
  stdlib.assert(v2064, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:54:application call to [unknown function] (defined at: ./index.rsh:481:54:function exp)', 'at ./index.rsh:423:31:application call to "runtransferFrom0_248" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v2066 = stdlib.addressEq(v2058, v1963);
  const v2067 = v2066 ? false : true;
  stdlib.assert(v2067, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:54:application call to [unknown function] (defined at: ./index.rsh:481:54:function exp)', 'at ./index.rsh:423:31:application call to "runtransferFrom0_248" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v2069 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2057, ctc1), null);
  const v2070 = stdlib.fromSome(v2069, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2071 = stdlib.ge256(v2070, v2059);
  stdlib.assert(v2071, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:484:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:54:application call to [unknown function] (defined at: ./index.rsh:481:54:function exp)', 'at ./index.rsh:423:31:application call to "runtransferFrom0_248" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v2073 = [v2057, v2054];
  const v2074 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2073, ctc1), null);
  const v2075 = stdlib.fromSome(v2074, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2076 = stdlib.ge256(v2075, v2059);
  stdlib.assert(v2076, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:488:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:54:application call to [unknown function] (defined at: ./index.rsh:481:54:function exp)', 'at ./index.rsh:423:31:application call to "runtransferFrom0_248" (defined at: ./index.rsh:481:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v2087 = ['transferFrom0_248', v2056];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2087],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:481:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          ;
          const v4469 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '0')];
          const v4470 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '1')];
          const v4471 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '2')];
          const v4478 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4469, ctc1), null);
          const v4479 = stdlib.fromSome(v4478, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4482 = [v4469, v2274];
          const v4483 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v4482, ctc1), null);
          const v4484 = stdlib.fromSome(v4483, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4492 = stdlib.safeSub256(v4479, v4471);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4469, ctc1, v4492);
          const v4493 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4470, ctc1), null);
          const v4494 = stdlib.fromSome(v4493, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4495 = stdlib.safeAdd256(v4494, v4471);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4470, ctc1, v4495);
          null;
          const v4500 = stdlib.safeSub256(v4484, v4471);
          await stdlib.simMapSet(sim_r, 1, ctc12, v4482, ctc1, v4500);
          null;
          const v4503 = true;
          const v4504 = await txn1.getOutput('transferFrom', 'v4503', ctc9, v4503);
          
          const v9251 = v1988;
          const v9253 = v1988.closed;
          if (v9253) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4469 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '0')];
      const v4470 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '1')];
      const v4471 = v4246[stdlib.checkedBigNumberify('./index.rsh:481:12:spread', stdlib.UInt_max, '2')];
      const v4472 = stdlib.addressEq(v4469, v1963);
      const v4473 = v4472 ? false : true;
      stdlib.assert(v4473, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:482:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v4475 = stdlib.addressEq(v4470, v1963);
      const v4476 = v4475 ? false : true;
      stdlib.assert(v4476, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:483:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v4478 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4469, ctc1), null);
      const v4479 = stdlib.fromSome(v4478, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4480 = stdlib.ge256(v4479, v4471);
      stdlib.assert(v4480, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:484:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v4482 = [v4469, v2274];
      const v4483 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v4482, ctc1), null);
      const v4484 = stdlib.fromSome(v4483, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4485 = stdlib.ge256(v4484, v4471);
      stdlib.assert(v4485, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:488:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v4492 = stdlib.safeSub256(v4479, v4471);
      await stdlib.mapSet(map0, ctc3, v4469, ctc1, v4492);
      const v4493 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4470, ctc1), null);
      const v4494 = stdlib.fromSome(v4493, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4495 = stdlib.safeAdd256(v4494, v4471);
      await stdlib.mapSet(map0, ctc3, v4470, ctc1, v4495);
      null;
      const v4500 = stdlib.safeSub256(v4484, v4471);
      await stdlib.mapSet(map1, ctc12, v4482, ctc1, v4500);
      null;
      const v4503 = true;
      const v4504 = await txn1.getOutput('transferFrom', 'v4503', ctc9, v4503);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v4246, v4504), {
          at: './index.rsh:481:13:application',
          fs: ['at ./index.rsh:481:13:application call to [unknown function] (defined at: ./index.rsh:481:13:function exp)', 'at ./index.rsh:495:14:application call to "k" (defined at: ./index.rsh:493:15:function exp)', 'at ./index.rsh:493:15:application call to [unknown function] (defined at: ./index.rsh:493:15:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v9251 = v1988;
      const v9253 = v1988.closed;
      if (v9253) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc4,
    enableZeroAddressBurn: ctc9,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    token: ctc8,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Data({
    approve0_248: ctc12,
    deleteAllowanceBox0_248: ctc13,
    deleteBalanceBox0_248: ctc14,
    deposit0_248: ctc11,
    destroy0_248: ctc15,
    transfer0_248: ctc12,
    transferFrom0_248: ctc16,
    withdraw0_248: ctc11
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
  
  
  const [v1963, v1965, v1966, v1973, v1976, v1988] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10]);
  const v2123 = ctc.selfAddress();
  const v2125 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:531:36:application call to [unknown function] (defined at: ./index.rsh:531:36:function exp)', 'at ./index.rsh:423:31:application call to "runwithdraw0_248" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v2126 = v2125[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2128 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2123, ctc1), null);
  const v2129 = stdlib.fromSome(v2128, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2130 = stdlib.cast("UInt", "UInt256", v2126, false, true);
  const v2131 = stdlib.ge256(v2129, v2130);
  stdlib.assert(v2131, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:532:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:36:application call to [unknown function] (defined at: ./index.rsh:531:36:function exp)', 'at ./index.rsh:423:31:application call to "runwithdraw0_248" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: 'Withdraw: insufficient balance',
    who: 'withdraw'
    });
  const v2133 = v1988.tokenAmount;
  const v2134 = stdlib.ge(v2133, v2126);
  stdlib.assert(v2134, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:536:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:36:application call to [unknown function] (defined at: ./index.rsh:531:36:function exp)', 'at ./index.rsh:423:31:application call to "runwithdraw0_248" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:423:31:application call to [unknown function] (defined at: ./index.rsh:423:31:function exp)'],
    msg: null,
    who: 'withdraw'
    });
  const v2141 = ['withdraw0_248', v2125];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1963, v1965, v1966, v1973, v1976, v1988, v2141],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:531:12:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:459:16:decimal', stdlib.UInt_max, '0'), v1966]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
      
      switch (v2275[0]) {
        case 'approve0_248': {
          const v2278 = v2275[1];
          
          break;
          }
        case 'deleteAllowanceBox0_248': {
          const v2606 = v2275[1];
          
          break;
          }
        case 'deleteBalanceBox0_248': {
          const v2934 = v2275[1];
          
          break;
          }
        case 'deposit0_248': {
          const v3262 = v2275[1];
          
          break;
          }
        case 'destroy0_248': {
          const v3590 = v2275[1];
          
          break;
          }
        case 'transfer0_248': {
          const v3918 = v2275[1];
          
          break;
          }
        case 'transferFrom0_248': {
          const v4246 = v2275[1];
          
          break;
          }
        case 'withdraw0_248': {
          const v4574 = v2275[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          ;
          const v4842 = v4574[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '0')];
          const v4843 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2274, ctc1), null);
          const v4844 = stdlib.fromSome(v4843, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4845 = stdlib.cast("UInt", "UInt256", v4842, false, true);
          const v4848 = v1988.tokenAmount;
          const v4857 = stdlib.safeSub256(v4844, v4845);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2274, ctc1, v4857);
          const v4858 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v1976, ctc1), null);
          const v4859 = stdlib.fromSome(v4858, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4860 = stdlib.safeAdd256(v4859, v4845);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1976, ctc1, v4860);
          null;
          const v4862 = [v2274, v1976];
          const v4863 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v4862, ctc1), null);
          const v4864 = stdlib.fromSome(v4863, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4865 = stdlib.safeSub256(v4864, v4845);
          await stdlib.simMapSet(sim_r, 1, ctc13, v4862, ctc1, v4865);
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v2274,
            tok: v1966
            });
          const v4877 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2274, ctc1), null);
          const v4878 = stdlib.fromSome(v4877, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4880 = stdlib.safeSub256(v4878, v4845);
          const v4881 = await txn1.getOutput('withdraw', 'v4880', ctc1, v4880);
          
          const v4887 = v1988.closed;
          const v4888 = v1988.decimals;
          const v4889 = v1988.enableZeroAddressBurn;
          const v4890 = v1988.manager;
          const v4891 = v1988.name;
          const v4892 = v1988.symbol;
          const v4893 = v1988.token;
          const v4895 = v1988.totalSupply;
          const v4896 = v1988.zeroAddress;
          const v4898 = stdlib.safeSub(v4848, v4842);
          const v4899 = {
            closed: v4887,
            decimals: v4888,
            enableZeroAddressBurn: v4889,
            manager: v4890,
            name: v4891,
            symbol: v4892,
            token: v4893,
            tokenAmount: v4898,
            totalSupply: v4895,
            zeroAddress: v4896
            };
          const v9287 = v4899;
          const v9289 = v4899.closed;
          if (v9289) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1966
              })
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
    tys: [ctc3, ctc7, ctc8, ctc4, ctc3, ctc10, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2275], secs: v2277, time: v2276, didSend: v1283, from: v2274 } = txn1;
  switch (v2275[0]) {
    case 'approve0_248': {
      const v2278 = v2275[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_248': {
      const v2606 = v2275[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_248': {
      const v2934 = v2275[1];
      return;
      break;
      }
    case 'deposit0_248': {
      const v3262 = v2275[1];
      return;
      break;
      }
    case 'destroy0_248': {
      const v3590 = v2275[1];
      return;
      break;
      }
    case 'transfer0_248': {
      const v3918 = v2275[1];
      return;
      break;
      }
    case 'transferFrom0_248': {
      const v4246 = v2275[1];
      return;
      break;
      }
    case 'withdraw0_248': {
      const v4574 = v2275[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4842 = v4574[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '0')];
      const v4843 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2274, ctc1), null);
      const v4844 = stdlib.fromSome(v4843, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4845 = stdlib.cast("UInt", "UInt256", v4842, false, true);
      const v4846 = stdlib.ge256(v4844, v4845);
      stdlib.assert(v4846, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:532:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:538:15:application call to [unknown function] (defined at: ./index.rsh:538:15:function exp)'],
        msg: 'Withdraw: insufficient balance',
        who: 'withdraw'
        });
      const v4848 = v1988.tokenAmount;
      const v4849 = stdlib.ge(v4848, v4842);
      stdlib.assert(v4849, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:536:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:538:15:application call to [unknown function] (defined at: ./index.rsh:538:15:function exp)'],
        msg: null,
        who: 'withdraw'
        });
      const v4857 = stdlib.safeSub256(v4844, v4845);
      await stdlib.mapSet(map0, ctc3, v2274, ctc1, v4857);
      const v4858 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1976, ctc1), null);
      const v4859 = stdlib.fromSome(v4858, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4860 = stdlib.safeAdd256(v4859, v4845);
      await stdlib.mapSet(map0, ctc3, v1976, ctc1, v4860);
      null;
      const v4862 = [v2274, v1976];
      const v4863 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v4862, ctc1), null);
      const v4864 = stdlib.fromSome(v4863, stdlib.checkedBigNumberify('./index.rsh:433:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4865 = stdlib.safeSub256(v4864, v4845);
      await stdlib.mapSet(map1, ctc13, v4862, ctc1, v4865);
      null;
      ;
      const v4877 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2274, ctc1), null);
      const v4878 = stdlib.fromSome(v4877, stdlib.checkedBigNumberify('./index.rsh:429:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4880 = stdlib.safeSub256(v4878, v4845);
      const v4881 = await txn1.getOutput('withdraw', 'v4880', ctc1, v4880);
      if (v1283) {
        stdlib.protect(ctc0, await interact.out(v4574, v4881), {
          at: './index.rsh:531:13:application',
          fs: ['at ./index.rsh:531:13:application call to [unknown function] (defined at: ./index.rsh:531:13:function exp)', 'at ./index.rsh:541:14:application call to "k" (defined at: ./index.rsh:538:15:function exp)', 'at ./index.rsh:538:15:application call to [unknown function] (defined at: ./index.rsh:538:15:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v4887 = v1988.closed;
      const v4888 = v1988.decimals;
      const v4889 = v1988.enableZeroAddressBurn;
      const v4890 = v1988.manager;
      const v4891 = v1988.name;
      const v4892 = v1988.symbol;
      const v4893 = v1988.token;
      const v4895 = v1988.totalSupply;
      const v4896 = v1988.zeroAddress;
      const v4898 = stdlib.safeSub(v4848, v4842);
      const v4899 = {
        closed: v4887,
        decimals: v4888,
        enableZeroAddressBurn: v4889,
        manager: v4890,
        name: v4891,
        symbol: v4892,
        token: v4893,
        tokenAmount: v4898,
        totalSupply: v4895,
        zeroAddress: v4896
        };
      const v9287 = v4899;
      const v9289 = v4899.closed;
      if (v9289) {
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
export async function deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deposit3(ctcTop, interact);}
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
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address,byte,(uint64,byte[32],byte[8]),uint64))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `approve(address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `deposit(uint64)uint256`, `destroy()void`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`, `withdraw(uint64)uint256`],
    pure: [`allowance(address,address)uint256`, `balanceOf(address)uint256`, `decimals()uint64`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte,uint64,uint64)`, `symbol()byte[8]`, `totalSupply()uint256`],
    sigs: [`_reachp_0((uint64,address,byte,(uint64,byte[32],byte[8]),uint64))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `allowance(address,address)uint256`, `approve(address,uint256)byte`, `balanceOf(address)uint256`, `decimals()uint64`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `deposit(uint64)uint256`, `destroy()void`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte,uint64,uint64)`, `symbol()byte[8]`, `totalSupply()uint256`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`, `withdraw(uint64)uint256`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAHU3gEIA8TbAQRaWBigjQYmCAEAAAgAAAAAAAAAAQQokYhhAQEg//////////////////////////////////////////8BAgQY4JRhMRhBCIQpZEkiWzUBJVs1AihkJwRkUCcGZFCCEQQAinJyBAIjJnwEG2CazARdhU0OBGjPmM4EbMs8wgRxX8FGBHn6tGUEg7rXzASPlRtZBJyGoYUEnNaFWASh+b9MBKfuf9wEuHee5wS8PBVvBMcCQIk2GgCOEQj9CHcI9wg9CU0I8QkPCPoIVwhiCIAIbwhKB9YIXwfmCPQANAtXACA1DTQLVyAgNQwxADQUE0Q0DTQUE0QhBSoxADQNUFABNAyICUAnBzEAUDQNUDQMULAjNQuACAAAAAAAAAkwNAsWUQcIULA0CxZRBwg1BDIGNQ40D1cAARdBCEMiNBIyCjIJiAl1MRmBBRJEiAlWIjIKMgmICV40A0AACoAEFR98dTQEULAjQzQLVwAgNAtXICBQNQwpMgMqNAxQAYgIu0k1CyJVIxJEMgM0C4gIozIDqEQhBSo0DFABiAjrIzULgAgAAAAAAAAKkTQLFlEHCFCwNAsWUQcINQQyBjUOQv9yNA1XASBJNQs0FBNEKTIDKDQLUIgIZEk1DCJVIxJEMgM0DIgITDIDqEQkKDQLUIgIliM1C4AIAAAAAAAAC/A0CxZRBwhQsDQLFlEHCDUEMgY1DkL/HTQNI1tJNQs0EjEWNAAjCEk1AAlHAzgUMgoSRDgQIQYSRDgRTwISRDgSEkQhCa80CxZQNRUkKDQQUDIDKTIDKDQQUIgH4IgH1DQVoYgH8IgH3zIDKTIDKDEAUIgHyIgHvDQVoIgH2DUNJCgxAFA0DYgHvis0EFAxAFA0FVCwNA00FaCIB7k1DIAIAAAAAAAADU80DFCwNAw1BDQPVwABNA9XAQhQNA9XCQFQNA9XCiBQNA9XKiBQNA9XSghQNA9XUghQNA8hB1s0CwgWUDQPV2IgUDQPV4IgUDIGNQ41D0L+PIAhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIlUjEkQ0DyEHW0k1DCISRCQoNBRQiAdWKTULgAgAAAAAAAAOtTQLULA0CzUEJwQ0D1cBCFA0D1cJAVA0D1cKIFA0D1cqIFA0D1dKCFA0D1dSCFA0DBZQNA9XYiBQNA9XgiBQMgY1DjUPQv2tNAtXACA1DTQLVyAgNQw0DTQUE0QyAykyAygxAFCIBpWIBolJNQs0DKdEJCgxAFA0CzQMoYgGl4gGhiQoNA1QMgMpMgMoNA1QiAZqiAZeNAygiAZ6iAZpKzEAUDQNUDQMULAjNQuACAAAAAAAABAjNAsWUQcIULA0CxZRBwg1BDIGNQ5C/Sc0C1cAIDUVNAtXICA1DTQLV0AgNQw0FTQUE0Q0DTQUE0QyAykyAyg0FVCIBgKIBfZJNRc0DKdENBUxAFA1FjIDKTIDKjQWUAGIBeSIBdhJNQs0DKdEJCg0FVA0FzQMoYgF5ogF1SQoNA1QMgMpMgMoNA1QiAW5iAWtNAygiAXJiAW4KzQVUDQNUDQMULA0CzQMoYgFszUNIQUqNBZQATQNiAWXJwc0FVAxAFA0DVCwIzULgAgAAAAAAAARlzQLFlEHCFCwNAsWUQcINQQyBjUOQvxUNA0jWzULMgMpMgMoMQBQiAVKiAU+NQwhCa80CxZQNRU0DDQVp0Q0DyEHW0k1DTQLD0QkKDEAUDQMNBWhiAU2iAUlJCg0EFAyAykyAyg0EFCIBQmIBP00FaCIBRmIBQgrMQBQNBBQNBVQsDEANBBQNRYyAykyAyo0FlABiATeiATSNBWhiATuNQwhBSo0FlABNAyIBNInBzEAUDQQUDQMULA0CzQSMQCIBQ4yAykyAygxAFCIBKaIBJo0FaGIBLY1DIAIAAAAAAAAExA0DFCwNAw1BDQPVwABNA9XAQhQNA9XCQFQNA9XCiBQNA9XKiBQNA9XSghQNA9XUghQNA00CwkWUDQPV2IgUDQPV4IgUDIGNQ41D0L7PDQBIQQSRIgEXjIDKTIDKjQMNAtQUAGIBCuIBB81BDEZIhJEQvs/Ja8oNAw0C1BQMgNQUDULIQQ0ARJEiAQpNAsiWzUMNAtXCGE1DYAE2R5N2jQMFlA0DVCwNAyIBEY0DSJVjQgDTgNYAvQC9wL6Av0DBwMRQvpuNAEhBBJEiAPnMgMpMgMoNAtQiAO4iAOsNQRC/4o0ASEEEkSIA8o0ERY1BEL/eSWvJwQ0DDQLUFAyA1BQNQtC/30lrycGNAtQgUCvUFA1C0L/bCWvgAEDNAsWUCEIr1BQNQtC/1mAaQAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv7pNAEhBBJEiAMSNBNXCCA1BEL+vzQBIQQSRIgC/zQPVyogNA9XSghQNA9XAQhQNA9XYiBQNA9XgiBQNA9XCiBQNA9XCQFQNA9XAAFQNA9XUghQNA9XWghQNQRC/nY0ASEEEkSIArY0E1coCDUEQv5jNAEhBBJEiAKjJwU1BEL+UyWvgAEFNAw0C1BQMgNQUDULQv5WJa+AAQY0DTQMUDQLUFBQNQtC/kIlr4ABBzQLFlAhCK9QUDULQv4vNAsiWzUNNAtXCCA1FDQLVygBFzUMNAtXKTA1EzQLgVlbNRKABJ1OjFE0DRZQNBRQNAwWUQcIUDQTUDQSFlCwNA2IAlo0EyJbSTURgYACDkQhCogCMCI0EjIKiAI9Mgo1ECQoNBBQJwWIAd4kKDQUUDIDiAHUJwU1Cys0FFA0EFA0C1CwKDQRFlA0DBZRBwhQNBBQNBNXCCBQNBNXKAhQNBIWUCWvUCcFUDQUUDIGNQ41D0L4gYgB3iEKiAHINhoBNQtC/zuIAc42GgE1C0L9XyIxNBJEIQYxNRJEIjE2EkQiMTcSRIgBroGiAq8iIjUCNQEoSwFXAH9nJwRLAVd/f2cnBkxX/iRnKTQBFjQCFlBnMRkiEkSIAY9C+D42GgE2GgI1CzUMQvzRNhoBNhoCNQs1DEL86jYaATULQv0zQv1NNhoBNhoCNQs1DEL9UTYaATULQv1cNhoBFzULQv1kQv10QvhfQvixQvmPNA1XAUA1C0L6FDQNVwFgNQtC+pBC+2A0FDQTUDQSFlA0ERZQNBBQNA9QIQQyBkL/UkhMv0iJIrIBIQayELIUshGyErOJIrIBI7IQsgeyCLOJNA1XAUA1C0L3GjQNVwFANQtC95tC/XNC/YNC/clC/dk2GgE2GgI2GgM1CzUMNQ1C/es2GgE2GgI1CzUMQv3KSIlMCUk1BjIJiACtiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiTYaARc1C0L9uElXAQBMIlVNib5JFlEHCEUETVCJTEm9QP9NSwOIADFC/0VJFYEgTAmvTFCJSVcAIDUUSVcgMDUTSYFQWzUSSSEIWzURSVdgIDUQV4CiNQ+JNAYINQaJvCJOAk00Bwg1B4kjNQOJsUL/A0kiEkw0AhIRRIk0BjQHSg9B/0xC/1SxQv74sbIJQv7ysbIVQv7d`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `17`,
    1000: `497`,
    1001: `497`,
    1002: `498`,
    1003: `499`,
    1004: `499`,
    1005: `500`,
    1006: `501`,
    1007: `501`,
    1008: `502`,
    1009: `503`,
    101: `18`,
    1010: `503`,
    1011: `504`,
    1012: `505`,
    1013: `507`,
    1014: `508`,
    1015: `508`,
    1016: `509`,
    1017: `509`,
    1018: `509`,
    1019: `509`,
    102: `19`,
    1020: `509`,
    1021: `509`,
    1022: `509`,
    1023: `509`,
    1024: `509`,
    1025: `509`,
    1026: `510`,
    1027: `510`,
    1028: `511`,
    1029: `512`,
    103: `20`,
    1030: `512`,
    1031: `512`,
    1032: `513`,
    1033: `514`,
    1034: `515`,
    1035: `515`,
    1036: `516`,
    1037: `517`,
    1038: `517`,
    1039: `517`,
    104: `20`,
    1040: `518`,
    1041: `518`,
    1042: `519`,
    1043: `519`,
    1044: `520`,
    1045: `520`,
    1046: `521`,
    1047: `521`,
    1048: `521`,
    1049: `523`,
    105: `21`,
    1050: `523`,
    1051: `524`,
    1052: `524`,
    1053: `524`,
    1054: `525`,
    1055: `525`,
    1056: `526`,
    1057: `526`,
    1058: `527`,
    1059: `527`,
    106: `22`,
    1060: `527`,
    1061: `528`,
    1062: `528`,
    1063: `529`,
    1064: `529`,
    1065: `530`,
    1066: `530`,
    1067: `530`,
    1068: `531`,
    1069: `531`,
    107: `24`,
    1070: `532`,
    1071: `532`,
    1072: `533`,
    1073: `533`,
    1074: `534`,
    1075: `535`,
    1076: `540`,
    1077: `540`,
    1078: `541`,
    1079: `541`,
    108: `24`,
    1080: `542`,
    1081: `543`,
    1082: `548`,
    1083: `548`,
    1084: `550`,
    1085: `551`,
    1086: `551`,
    1087: `552`,
    1088: `553`,
    1089: `553`,
    109: `24`,
    1090: `554`,
    1091: `555`,
    1092: `555`,
    1093: `555`,
    1094: `556`,
    1095: `556`,
    1096: `556`,
    1097: `557`,
    1098: `558`,
    1099: `558`,
    11: `2`,
    110: `24`,
    1100: `559`,
    1101: `559`,
    1102: `560`,
    1103: `561`,
    1104: `566`,
    1105: `566`,
    1106: `567`,
    1107: `567`,
    1108: `568`,
    1109: `569`,
    111: `24`,
    1110: `569`,
    1111: `570`,
    1112: `570`,
    1113: `572`,
    1114: `573`,
    1115: `573`,
    1116: `574`,
    1117: `575`,
    1118: `575`,
    1119: `576`,
    112: `24`,
    1120: `577`,
    1121: `578`,
    1122: `578`,
    1123: `578`,
    1124: `579`,
    1125: `579`,
    1126: `579`,
    1127: `580`,
    1128: `581`,
    1129: `581`,
    113: `24`,
    1130: `582`,
    1131: `582`,
    1132: `583`,
    1133: `584`,
    1134: `589`,
    1135: `590`,
    1136: `591`,
    1137: `591`,
    1138: `592`,
    1139: `593`,
    114: `24`,
    1140: `593`,
    1141: `594`,
    1142: `594`,
    1143: `595`,
    1144: `596`,
    1145: `596`,
    1146: `596`,
    1147: `597`,
    1148: `597`,
    1149: `597`,
    115: `24`,
    1150: `599`,
    1151: `600`,
    1152: `601`,
    1153: `601`,
    1154: `602`,
    1155: `603`,
    1156: `603`,
    1157: `604`,
    1158: `605`,
    1159: `605`,
    116: `24`,
    1160: `606`,
    1161: `607`,
    1162: `607`,
    1163: `608`,
    1164: `609`,
    1165: `609`,
    1166: `609`,
    1167: `610`,
    1168: `610`,
    1169: `610`,
    117: `24`,
    1170: `611`,
    1171: `611`,
    1172: `612`,
    1173: `613`,
    1174: `613`,
    1175: `613`,
    1176: `614`,
    1177: `614`,
    1178: `614`,
    1179: `615`,
    118: `24`,
    1180: `616`,
    1181: `616`,
    1182: `617`,
    1183: `618`,
    1184: `618`,
    1185: `619`,
    1186: `620`,
    1187: `620`,
    1188: `621`,
    1189: `622`,
    119: `24`,
    1190: `624`,
    1191: `624`,
    1192: `625`,
    1193: `625`,
    1194: `626`,
    1195: `627`,
    1196: `627`,
    1197: `627`,
    1198: `628`,
    1199: `628`,
    12: `2`,
    120: `24`,
    1200: `629`,
    1201: `629`,
    1202: `630`,
    1203: `631`,
    1204: `631`,
    1205: `632`,
    1206: `633`,
    1207: `634`,
    1208: `634`,
    1209: `635`,
    121: `24`,
    1210: `635`,
    1211: `635`,
    1212: `636`,
    1213: `636`,
    1214: `637`,
    1215: `637`,
    1216: `638`,
    1217: `639`,
    1218: `639`,
    1219: `640`,
    122: `24`,
    1220: `641`,
    1221: `641`,
    1222: `642`,
    1223: `643`,
    1224: `645`,
    1225: `646`,
    1226: `646`,
    1227: `647`,
    1228: `647`,
    1229: `647`,
    123: `24`,
    1230: `647`,
    1231: `647`,
    1232: `647`,
    1233: `647`,
    1234: `647`,
    1235: `647`,
    1236: `647`,
    1237: `648`,
    1238: `648`,
    1239: `649`,
    124: `24`,
    1240: `650`,
    1241: `650`,
    1242: `650`,
    1243: `651`,
    1244: `652`,
    1245: `653`,
    1246: `653`,
    1247: `654`,
    1248: `655`,
    1249: `655`,
    125: `24`,
    1250: `655`,
    1251: `656`,
    1252: `656`,
    1253: `657`,
    1254: `657`,
    1255: `658`,
    1256: `658`,
    1257: `659`,
    1258: `659`,
    1259: `659`,
    126: `24`,
    1260: `661`,
    1261: `661`,
    1262: `662`,
    1263: `663`,
    1264: `664`,
    1265: `664`,
    1266: `665`,
    1267: `665`,
    1268: `667`,
    1269: `668`,
    127: `24`,
    1270: `668`,
    1271: `669`,
    1272: `670`,
    1273: `670`,
    1274: `671`,
    1275: `672`,
    1276: `672`,
    1277: `672`,
    1278: `673`,
    1279: `673`,
    128: `24`,
    1280: `673`,
    1281: `674`,
    1282: `674`,
    1283: `675`,
    1284: `675`,
    1285: `676`,
    1286: `677`,
    1287: `677`,
    1288: `678`,
    1289: `679`,
    129: `24`,
    1290: `680`,
    1291: `680`,
    1292: `681`,
    1293: `681`,
    1294: `682`,
    1295: `682`,
    1296: `683`,
    1297: `684`,
    1298: `689`,
    1299: `689`,
    13: `2`,
    130: `24`,
    1300: `690`,
    1301: `690`,
    1302: `691`,
    1303: `692`,
    1304: `693`,
    1305: `693`,
    1306: `694`,
    1307: `694`,
    1308: `695`,
    1309: `696`,
    131: `24`,
    1310: `701`,
    1311: `702`,
    1312: `703`,
    1313: `703`,
    1314: `704`,
    1315: `705`,
    1316: `705`,
    1317: `706`,
    1318: `706`,
    1319: `707`,
    132: `24`,
    1320: `708`,
    1321: `708`,
    1322: `708`,
    1323: `709`,
    1324: `709`,
    1325: `709`,
    1326: `711`,
    1327: `712`,
    1328: `713`,
    1329: `713`,
    133: `24`,
    1330: `714`,
    1331: `715`,
    1332: `715`,
    1333: `716`,
    1334: `717`,
    1335: `717`,
    1336: `718`,
    1337: `719`,
    1338: `719`,
    1339: `720`,
    134: `24`,
    1340: `721`,
    1341: `721`,
    1342: `721`,
    1343: `722`,
    1344: `722`,
    1345: `722`,
    1346: `723`,
    1347: `723`,
    1348: `724`,
    1349: `725`,
    135: `24`,
    1350: `725`,
    1351: `725`,
    1352: `726`,
    1353: `726`,
    1354: `726`,
    1355: `727`,
    1356: `728`,
    1357: `728`,
    1358: `729`,
    1359: `730`,
    136: `24`,
    1360: `730`,
    1361: `731`,
    1362: `732`,
    1363: `732`,
    1364: `733`,
    1365: `734`,
    1366: `736`,
    1367: `736`,
    1368: `737`,
    1369: `737`,
    137: `24`,
    1370: `738`,
    1371: `739`,
    1372: `739`,
    1373: `740`,
    1374: `740`,
    1375: `742`,
    1376: `743`,
    1377: `743`,
    1378: `744`,
    1379: `745`,
    138: `24`,
    1380: `745`,
    1381: `746`,
    1382: `747`,
    1383: `748`,
    1384: `748`,
    1385: `748`,
    1386: `749`,
    1387: `749`,
    1388: `749`,
    1389: `750`,
    139: `24`,
    1390: `750`,
    1391: `751`,
    1392: `752`,
    1393: `752`,
    1394: `752`,
    1395: `753`,
    1396: `753`,
    1397: `754`,
    1398: `754`,
    1399: `755`,
    14: `2`,
    140: `24`,
    1400: `756`,
    1401: `756`,
    1402: `757`,
    1403: `758`,
    1404: `759`,
    1405: `759`,
    1406: `760`,
    1407: `760`,
    1408: `760`,
    1409: `761`,
    141: `24`,
    1410: `761`,
    1411: `762`,
    1412: `762`,
    1413: `763`,
    1414: `764`,
    1415: `764`,
    1416: `765`,
    1417: `766`,
    1418: `766`,
    1419: `767`,
    142: `24`,
    1420: `768`,
    1421: `770`,
    1422: `770`,
    1423: `772`,
    1424: `772`,
    1425: `773`,
    1426: `773`,
    1427: `774`,
    1428: `774`,
    1429: `774`,
    143: `24`,
    1430: `775`,
    1431: `775`,
    1432: `776`,
    1433: `777`,
    1434: `777`,
    1435: `778`,
    1436: `779`,
    1437: `779`,
    1438: `780`,
    1439: `781`,
    144: `24`,
    1440: `781`,
    1441: `781`,
    1442: `782`,
    1443: `782`,
    1444: `782`,
    1445: `783`,
    1446: `783`,
    1447: `784`,
    1448: `785`,
    1449: `785`,
    145: `24`,
    1450: `785`,
    1451: `786`,
    1452: `786`,
    1453: `787`,
    1454: `787`,
    1455: `787`,
    1456: `787`,
    1457: `787`,
    1458: `787`,
    1459: `787`,
    146: `24`,
    1460: `787`,
    1461: `787`,
    1462: `787`,
    1463: `788`,
    1464: `788`,
    1465: `789`,
    1466: `790`,
    1467: `791`,
    1468: `791`,
    1469: `792`,
    147: `24`,
    1470: `792`,
    1471: `793`,
    1472: `793`,
    1473: `794`,
    1474: `794`,
    1475: `794`,
    1476: `795`,
    1477: `795`,
    1478: `796`,
    1479: `796`,
    148: `24`,
    1480: `796`,
    1481: `797`,
    1482: `798`,
    1483: `798`,
    1484: `799`,
    1485: `799`,
    1486: `799`,
    1487: `800`,
    1488: `801`,
    1489: `801`,
    149: `24`,
    1490: `802`,
    1491: `802`,
    1492: `802`,
    1493: `803`,
    1494: `804`,
    1495: `804`,
    1496: `805`,
    1497: `805`,
    1498: `805`,
    1499: `806`,
    15: `2`,
    150: `24`,
    1500: `807`,
    1501: `807`,
    1502: `808`,
    1503: `808`,
    1504: `808`,
    1505: `809`,
    1506: `810`,
    1507: `810`,
    1508: `811`,
    1509: `811`,
    151: `24`,
    1510: `811`,
    1511: `812`,
    1512: `813`,
    1513: `813`,
    1514: `814`,
    1515: `814`,
    1516: `815`,
    1517: `816`,
    1518: `817`,
    1519: `818`,
    152: `24`,
    1520: `818`,
    1521: `819`,
    1522: `819`,
    1523: `819`,
    1524: `820`,
    1525: `821`,
    1526: `821`,
    1527: `822`,
    1528: `822`,
    1529: `822`,
    153: `24`,
    1530: `823`,
    1531: `824`,
    1532: `824`,
    1533: `825`,
    1534: `825`,
    1535: `826`,
    1536: `826`,
    1537: `827`,
    1538: `827`,
    1539: `827`,
    154: `24`,
    1540: `829`,
    1541: `829`,
    1542: `830`,
    1543: `830`,
    1544: `831`,
    1545: `832`,
    1546: `835`,
    1547: `835`,
    1548: `835`,
    1549: `836`,
    155: `24`,
    1550: `836`,
    1551: `838`,
    1552: `839`,
    1553: `839`,
    1554: `840`,
    1555: `841`,
    1556: `841`,
    1557: `842`,
    1558: `842`,
    1559: `843`,
    156: `24`,
    1560: `844`,
    1561: `845`,
    1562: `846`,
    1563: `846`,
    1564: `846`,
    1565: `847`,
    1566: `847`,
    1567: `847`,
    1568: `848`,
    1569: `848`,
    157: `24`,
    1570: `850`,
    1571: `850`,
    1572: `851`,
    1573: `852`,
    1574: `853`,
    1575: `855`,
    1576: `855`,
    1577: `855`,
    1578: `857`,
    1579: `858`,
    158: `24`,
    1580: `859`,
    1581: `860`,
    1582: `860`,
    1583: `861`,
    1584: `861`,
    1585: `862`,
    1586: `863`,
    1587: `864`,
    1588: `864`,
    1589: `865`,
    159: `24`,
    1590: `866`,
    1591: `867`,
    1592: `867`,
    1593: `869`,
    1594: `869`,
    1595: `870`,
    1596: `870`,
    1597: `871`,
    1598: `872`,
    1599: `873`,
    16: `2`,
    160: `24`,
    1600: `873`,
    1601: `873`,
    1602: `874`,
    1603: `874`,
    1604: `875`,
    1605: `876`,
    1606: `877`,
    1607: `877`,
    1608: `878`,
    1609: `878`,
    161: `24`,
    1610: `879`,
    1611: `879`,
    1612: `879`,
    1613: `880`,
    1614: `880`,
    1615: `881`,
    1616: `881`,
    1617: `881`,
    1618: `881`,
    1619: `881`,
    162: `24`,
    1620: `881`,
    1621: `882`,
    1622: `882`,
    1623: `883`,
    1624: `884`,
    1625: `885`,
    1626: `885`,
    1627: `886`,
    1628: `887`,
    1629: `889`,
    163: `24`,
    1630: `889`,
    1631: `890`,
    1632: `890`,
    1633: `890`,
    1634: `891`,
    1635: `891`,
    1636: `892`,
    1637: `893`,
    1638: `894`,
    1639: `894`,
    164: `24`,
    1640: `894`,
    1641: `894`,
    1642: `894`,
    1643: `894`,
    1644: `894`,
    1645: `894`,
    1646: `894`,
    1647: `894`,
    1648: `894`,
    1649: `894`,
    165: `24`,
    1650: `894`,
    1651: `894`,
    1652: `894`,
    1653: `894`,
    1654: `894`,
    1655: `894`,
    1656: `895`,
    1657: `895`,
    1658: `895`,
    1659: `897`,
    166: `24`,
    1660: `897`,
    1661: `898`,
    1662: `898`,
    1663: `899`,
    1664: `900`,
    1665: `903`,
    1666: `903`,
    1667: `903`,
    1668: `904`,
    1669: `904`,
    167: `24`,
    1670: `906`,
    1671: `907`,
    1672: `907`,
    1673: `908`,
    1674: `909`,
    1675: `909`,
    1676: `910`,
    1677: `911`,
    1678: `911`,
    1679: `911`,
    168: `24`,
    1680: `912`,
    1681: `912`,
    1682: `912`,
    1683: `913`,
    1684: `913`,
    1685: `914`,
    1686: `914`,
    1687: `914`,
    1688: `916`,
    1689: `916`,
    169: `24`,
    1690: `917`,
    1691: `917`,
    1692: `918`,
    1693: `919`,
    1694: `922`,
    1695: `922`,
    1696: `922`,
    1697: `923`,
    1698: `923`,
    1699: `924`,
    17: `2`,
    170: `24`,
    1700: `925`,
    1701: `925`,
    1702: `926`,
    1703: `926`,
    1704: `926`,
    1705: `928`,
    1706: `929`,
    1707: `930`,
    1708: `930`,
    1709: `931`,
    171: `24`,
    1710: `931`,
    1711: `932`,
    1712: `932`,
    1713: `933`,
    1714: `934`,
    1715: `935`,
    1716: `935`,
    1717: `936`,
    1718: `937`,
    1719: `938`,
    172: `24`,
    1720: `938`,
    1721: `939`,
    1722: `939`,
    1723: `939`,
    1724: `941`,
    1725: `942`,
    1726: `943`,
    1727: `943`,
    1728: `944`,
    1729: `944`,
    173: `24`,
    1730: `945`,
    1731: `946`,
    1732: `946`,
    1733: `947`,
    1734: `948`,
    1735: `949`,
    1736: `950`,
    1737: `950`,
    1738: `951`,
    1739: `951`,
    174: `24`,
    1740: `951`,
    1741: `953`,
    1742: `954`,
    1743: `955`,
    1744: `955`,
    1745: `955`,
    1746: `956`,
    1747: `956`,
    1748: `957`,
    1749: `958`,
    175: `24`,
    1750: `959`,
    1751: `959`,
    1752: `960`,
    1753: `961`,
    1754: `962`,
    1755: `963`,
    1756: `963`,
    1757: `964`,
    1758: `964`,
    1759: `964`,
    176: `24`,
    1760: `966`,
    1761: `966`,
    1762: `966`,
    1763: `966`,
    1764: `966`,
    1765: `966`,
    1766: `966`,
    1767: `966`,
    1768: `966`,
    1769: `966`,
    177: `24`,
    1770: `966`,
    1771: `966`,
    1772: `966`,
    1773: `966`,
    1774: `966`,
    1775: `966`,
    1776: `966`,
    1777: `966`,
    1778: `966`,
    1779: `966`,
    178: `24`,
    1780: `966`,
    1781: `966`,
    1782: `966`,
    1783: `966`,
    1784: `966`,
    1785: `966`,
    1786: `966`,
    1787: `966`,
    1788: `966`,
    1789: `966`,
    179: `24`,
    1790: `966`,
    1791: `966`,
    1792: `966`,
    1793: `966`,
    1794: `966`,
    1795: `966`,
    1796: `966`,
    1797: `966`,
    1798: `966`,
    1799: `966`,
    18: `2`,
    180: `24`,
    1800: `966`,
    1801: `966`,
    1802: `966`,
    1803: `966`,
    1804: `966`,
    1805: `966`,
    1806: `966`,
    1807: `966`,
    1808: `966`,
    1809: `966`,
    181: `24`,
    1810: `966`,
    1811: `966`,
    1812: `966`,
    1813: `966`,
    1814: `966`,
    1815: `966`,
    1816: `966`,
    1817: `966`,
    1818: `966`,
    1819: `966`,
    182: `24`,
    1820: `966`,
    1821: `966`,
    1822: `966`,
    1823: `966`,
    1824: `966`,
    1825: `966`,
    1826: `966`,
    1827: `966`,
    1828: `966`,
    1829: `966`,
    183: `24`,
    1830: `966`,
    1831: `966`,
    1832: `966`,
    1833: `966`,
    1834: `966`,
    1835: `966`,
    1836: `966`,
    1837: `966`,
    1838: `966`,
    1839: `966`,
    184: `24`,
    1840: `966`,
    1841: `966`,
    1842: `966`,
    1843: `966`,
    1844: `966`,
    1845: `966`,
    1846: `966`,
    1847: `966`,
    1848: `966`,
    1849: `966`,
    185: `24`,
    1850: `966`,
    1851: `966`,
    1852: `966`,
    1853: `966`,
    1854: `966`,
    1855: `966`,
    1856: `966`,
    1857: `966`,
    1858: `966`,
    1859: `966`,
    186: `24`,
    1860: `966`,
    1861: `966`,
    1862: `966`,
    1863: `966`,
    1864: `966`,
    1865: `966`,
    1866: `966`,
    1867: `967`,
    1868: `967`,
    1869: `968`,
    187: `24`,
    1870: `968`,
    1871: `968`,
    1872: `970`,
    1873: `970`,
    1874: `971`,
    1875: `971`,
    1876: `972`,
    1877: `973`,
    1878: `976`,
    1879: `976`,
    188: `24`,
    1880: `976`,
    1881: `977`,
    1882: `977`,
    1883: `978`,
    1884: `978`,
    1885: `978`,
    1886: `979`,
    1887: `979`,
    1888: `980`,
    1889: `980`,
    189: `24`,
    1890: `980`,
    1891: `982`,
    1892: `982`,
    1893: `983`,
    1894: `983`,
    1895: `984`,
    1896: `985`,
    1897: `988`,
    1898: `988`,
    1899: `988`,
    19: `2`,
    190: `24`,
    1900: `989`,
    1901: `989`,
    1902: `990`,
    1903: `990`,
    1904: `990`,
    1905: `991`,
    1906: `991`,
    1907: `992`,
    1908: `992`,
    1909: `992`,
    191: `24`,
    1910: `993`,
    1911: `994`,
    1912: `994`,
    1913: `995`,
    1914: `995`,
    1915: `995`,
    1916: `996`,
    1917: `997`,
    1918: `997`,
    1919: `998`,
    192: `24`,
    1920: `998`,
    1921: `998`,
    1922: `999`,
    1923: `1000`,
    1924: `1000`,
    1925: `1001`,
    1926: `1001`,
    1927: `1001`,
    1928: `1002`,
    1929: `1003`,
    193: `24`,
    1930: `1003`,
    1931: `1004`,
    1932: `1004`,
    1933: `1004`,
    1934: `1005`,
    1935: `1006`,
    1936: `1006`,
    1937: `1007`,
    1938: `1007`,
    1939: `1007`,
    194: `25`,
    1940: `1008`,
    1941: `1009`,
    1942: `1009`,
    1943: `1010`,
    1944: `1010`,
    1945: `1010`,
    1946: `1011`,
    1947: `1012`,
    1948: `1012`,
    1949: `1013`,
    195: `25`,
    1950: `1013`,
    1951: `1013`,
    1952: `1014`,
    1953: `1015`,
    1954: `1015`,
    1955: `1016`,
    1956: `1016`,
    1957: `1016`,
    1958: `1017`,
    1959: `1018`,
    196: `25`,
    1960: `1018`,
    1961: `1019`,
    1962: `1019`,
    1963: `1019`,
    1964: `1021`,
    1965: `1021`,
    1966: `1022`,
    1967: `1022`,
    1968: `1023`,
    1969: `1024`,
    197: `26`,
    1970: `1027`,
    1971: `1027`,
    1972: `1027`,
    1973: `1028`,
    1974: `1028`,
    1975: `1029`,
    1976: `1029`,
    1977: `1029`,
    1978: `1030`,
    1979: `1030`,
    198: `26`,
    1980: `1031`,
    1981: `1031`,
    1982: `1031`,
    1983: `1033`,
    1984: `1033`,
    1985: `1034`,
    1986: `1034`,
    1987: `1035`,
    1988: `1036`,
    1989: `1039`,
    199: `26`,
    1990: `1039`,
    1991: `1039`,
    1992: `1040`,
    1993: `1040`,
    1994: `1041`,
    1995: `1041`,
    1996: `1042`,
    1997: `1042`,
    1998: `1042`,
    1999: `1044`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `1045`,
    2001: `1046`,
    2002: `1046`,
    2003: `1046`,
    2004: `1047`,
    2005: `1047`,
    2006: `1048`,
    2007: `1048`,
    2008: `1049`,
    2009: `1050`,
    201: `26`,
    2010: `1051`,
    2011: `1051`,
    2012: `1052`,
    2013: `1053`,
    2014: `1054`,
    2015: `1054`,
    2016: `1055`,
    2017: `1055`,
    2018: `1055`,
    2019: `1057`,
    202: `26`,
    2020: `1058`,
    2021: `1059`,
    2022: `1059`,
    2023: `1059`,
    2024: `1060`,
    2025: `1060`,
    2026: `1061`,
    2027: `1061`,
    2028: `1062`,
    2029: `1063`,
    203: `26`,
    2030: `1063`,
    2031: `1064`,
    2032: `1065`,
    2033: `1066`,
    2034: `1067`,
    2035: `1067`,
    2036: `1068`,
    2037: `1068`,
    2038: `1068`,
    2039: `1070`,
    204: `26`,
    2040: `1071`,
    2041: `1072`,
    2042: `1072`,
    2043: `1072`,
    2044: `1073`,
    2045: `1073`,
    2046: `1074`,
    2047: `1075`,
    2048: `1076`,
    2049: `1076`,
    205: `26`,
    2050: `1077`,
    2051: `1078`,
    2052: `1079`,
    2053: `1080`,
    2054: `1080`,
    2055: `1081`,
    2056: `1081`,
    2057: `1081`,
    2058: `1083`,
    2059: `1083`,
    206: `26`,
    2060: `1084`,
    2061: `1085`,
    2062: `1086`,
    2063: `1086`,
    2064: `1087`,
    2065: `1087`,
    2066: `1088`,
    2067: `1088`,
    2068: `1088`,
    2069: `1089`,
    207: `26`,
    2070: `1089`,
    2071: `1090`,
    2072: `1090`,
    2073: `1091`,
    2074: `1091`,
    2075: `1091`,
    2076: `1092`,
    2077: `1093`,
    2078: `1093`,
    2079: `1094`,
    208: `26`,
    2080: `1094`,
    2081: `1095`,
    2082: `1095`,
    2083: `1095`,
    2084: `1096`,
    2085: `1096`,
    2086: `1097`,
    2087: `1097`,
    2088: `1098`,
    2089: `1098`,
    209: `26`,
    2090: `1099`,
    2091: `1100`,
    2092: `1100`,
    2093: `1101`,
    2094: `1101`,
    2095: `1101`,
    2096: `1101`,
    2097: `1101`,
    2098: `1101`,
    2099: `1102`,
    21: `2`,
    210: `26`,
    2100: `1102`,
    2101: `1103`,
    2102: `1104`,
    2103: `1105`,
    2104: `1105`,
    2105: `1106`,
    2106: `1107`,
    2107: `1107`,
    2108: `1108`,
    2109: `1109`,
    211: `26`,
    2110: `1109`,
    2111: `1109`,
    2112: `1110`,
    2113: `1111`,
    2114: `1111`,
    2115: `1112`,
    2116: `1113`,
    2117: `1113`,
    2118: `1114`,
    2119: `1115`,
    212: `26`,
    2120: `1116`,
    2121: `1118`,
    2122: `1118`,
    2123: `1119`,
    2124: `1119`,
    2125: `1119`,
    2126: `1120`,
    2127: `1120`,
    2128: `1121`,
    2129: `1122`,
    213: `26`,
    2130: `1123`,
    2131: `1124`,
    2132: `1124`,
    2133: `1125`,
    2134: `1125`,
    2135: `1125`,
    2136: `1126`,
    2137: `1127`,
    2138: `1131`,
    2139: `1131`,
    214: `26`,
    2140: `1132`,
    2141: `1132`,
    2142: `1132`,
    2143: `1133`,
    2144: `1135`,
    2145: `1135`,
    2146: `1136`,
    2147: `1136`,
    2148: `1137`,
    2149: `1137`,
    215: `26`,
    2150: `1137`,
    2151: `1138`,
    2152: `1138`,
    2153: `1139`,
    2154: `1139`,
    2155: `1141`,
    2156: `1142`,
    2157: `1143`,
    2158: `1143`,
    2159: `1144`,
    216: `26`,
    2160: `1145`,
    2161: `1145`,
    2162: `1146`,
    2163: `1146`,
    2164: `1146`,
    2165: `1148`,
    2166: `1149`,
    2167: `1150`,
    2168: `1150`,
    2169: `1151`,
    217: `26`,
    2170: `1152`,
    2171: `1152`,
    2172: `1153`,
    2173: `1153`,
    2174: `1153`,
    2175: `1154`,
    2176: `1154`,
    2177: `1155`,
    2178: `1155`,
    2179: `1156`,
    218: `26`,
    2180: `1157`,
    2181: `1157`,
    2182: `1158`,
    2183: `1159`,
    2184: `1159`,
    2185: `1160`,
    2186: `1161`,
    2187: `1161`,
    2188: `1162`,
    2189: `1163`,
    219: `26`,
    2190: `1165`,
    2191: `1166`,
    2192: `1166`,
    2193: `1167`,
    2194: `1168`,
    2195: `1169`,
    2196: `1169`,
    2197: `1170`,
    2198: `1171`,
    2199: `1171`,
    22: `2`,
    220: `26`,
    2200: `1171`,
    2201: `1172`,
    2202: `1173`,
    2203: `1173`,
    2204: `1174`,
    2205: `1175`,
    2206: `1175`,
    2207: `1176`,
    2208: `1176`,
    2209: `1176`,
    221: `26`,
    2210: `1177`,
    2211: `1178`,
    2212: `1178`,
    2213: `1179`,
    2214: `1179`,
    2215: `1179`,
    2216: `1180`,
    2217: `1181`,
    2218: `1181`,
    2219: `1182`,
    222: `26`,
    2220: `1183`,
    2221: `1184`,
    2222: `1185`,
    2223: `1186`,
    2224: `1187`,
    2225: `1187`,
    2226: `1188`,
    2227: `1189`,
    2228: `1189`,
    2229: `1190`,
    223: `26`,
    2230: `1191`,
    2231: `1191`,
    2232: `1192`,
    2233: `1192`,
    2234: `1193`,
    2235: `1193`,
    2236: `1194`,
    2237: `1194`,
    2238: `1194`,
    2239: `1196`,
    224: `26`,
    2240: `1196`,
    2241: `1196`,
    2242: `1197`,
    2243: `1197`,
    2244: `1198`,
    2245: `1198`,
    2246: `1198`,
    2247: `1199`,
    2248: `1199`,
    2249: `1199`,
    225: `26`,
    2250: `1200`,
    2251: `1200`,
    2252: `1201`,
    2253: `1201`,
    2254: `1201`,
    2255: `1203`,
    2256: `1203`,
    2257: `1203`,
    2258: `1204`,
    2259: `1204`,
    226: `26`,
    2260: `1204`,
    2261: `1205`,
    2262: `1205`,
    2263: `1206`,
    2264: `1206`,
    2265: `1206`,
    2266: `1208`,
    2267: `1209`,
    2268: `1209`,
    2269: `1210`,
    227: `26`,
    2270: `1211`,
    2271: `1212`,
    2272: `1212`,
    2273: `1213`,
    2274: `1213`,
    2275: `1214`,
    2276: `1215`,
    2277: `1216`,
    2278: `1217`,
    2279: `1217`,
    228: `26`,
    2280: `1218`,
    2281: `1219`,
    2282: `1220`,
    2283: `1221`,
    2284: `1221`,
    2285: `1222`,
    2286: `1223`,
    2287: `1224`,
    2288: `1224`,
    2289: `1224`,
    229: `26`,
    2290: `1225`,
    2291: `1225`,
    2292: `1225`,
    2293: `1226`,
    2294: `1227`,
    2295: `1228`,
    2296: `1230`,
    2297: `1230`,
    2298: `1231`,
    2299: `1231`,
    23: `2`,
    230: `26`,
    2300: `1232`,
    2301: `1233`,
    2302: `1233`,
    2303: `1234`,
    2304: `1234`,
    2305: `1234`,
    2306: `1235`,
    2307: `1236`,
    2308: `1236`,
    2309: `1237`,
    231: `26`,
    2310: `1237`,
    2311: `1238`,
    2312: `1238`,
    2313: `1238`,
    2314: `1239`,
    2315: `1240`,
    2316: `1240`,
    2317: `1241`,
    2318: `1242`,
    2319: `1242`,
    232: `26`,
    2320: `1242`,
    2321: `1243`,
    2322: `1244`,
    2323: `1245`,
    2324: `1245`,
    2325: `1246`,
    2326: `1247`,
    2327: `1247`,
    2328: `1248`,
    2329: `1249`,
    233: `28`,
    2330: `1250`,
    2331: `1251`,
    2332: `1251`,
    2333: `1252`,
    2334: `1253`,
    2335: `1254`,
    2336: `1256`,
    2337: `1256`,
    2338: `1256`,
    2339: `1257`,
    234: `30`,
    2340: `1257`,
    2341: `1257`,
    2342: `1259`,
    2343: `1259`,
    2344: `1259`,
    2345: `1260`,
    2346: `1260`,
    2347: `1260`,
    2348: `1261`,
    2349: `1261`,
    235: `30`,
    2350: `1262`,
    2351: `1262`,
    2352: `1263`,
    2353: `1263`,
    2354: `1263`,
    2355: `1265`,
    2356: `1265`,
    2357: `1265`,
    2358: `1266`,
    2359: `1266`,
    236: `31`,
    2360: `1266`,
    2361: `1267`,
    2362: `1267`,
    2363: `1268`,
    2364: `1268`,
    2365: `1269`,
    2366: `1269`,
    2367: `1269`,
    2368: `1271`,
    2369: `1271`,
    237: `31`,
    2370: `1271`,
    2371: `1272`,
    2372: `1272`,
    2373: `1273`,
    2374: `1273`,
    2375: `1273`,
    2376: `1275`,
    2377: `1275`,
    2378: `1275`,
    2379: `1277`,
    238: `31`,
    2380: `1277`,
    2381: `1277`,
    2382: `1278`,
    2383: `1278`,
    2384: `1278`,
    2385: `1279`,
    2386: `1279`,
    2387: `1280`,
    2388: `1280`,
    2389: `1281`,
    239: `32`,
    2390: `1281`,
    2391: `1281`,
    2392: `1283`,
    2393: `1283`,
    2394: `1283`,
    2395: `1284`,
    2396: `1284`,
    2397: `1285`,
    2398: `1285`,
    2399: `1285`,
    24: `2`,
    240: `32`,
    2400: `1287`,
    2401: `1287`,
    2402: `1287`,
    2403: `1288`,
    2404: `1289`,
    2405: `1289`,
    2406: `1290`,
    2407: `1290`,
    2408: `1290`,
    2409: `1292`,
    241: `33`,
    2410: `1292`,
    2411: `1292`,
    2412: `1294`,
    2413: `1294`,
    2414: `1294`,
    2415: `1296`,
    2416: `1296`,
    2417: `1296`,
    2418: `1298`,
    2419: `1298`,
    242: `33`,
    2420: `1298`,
    2421: `1300`,
    2422: `1300`,
    2423: `1301`,
    2424: `1301`,
    2425: `1301`,
    2426: `1302`,
    2427: `1302`,
    2428: `1303`,
    2429: `1303`,
    243: `34`,
    2430: `1303`,
    2431: `1305`,
    2432: `1305`,
    2433: `1306`,
    2434: `1306`,
    2435: `1306`,
    2436: `1307`,
    2437: `1307`,
    2438: `1308`,
    2439: `1308`,
    244: `34`,
    2440: `1308`,
    2441: `1310`,
    2442: `1310`,
    2443: `1310`,
    2444: `1313`,
    2445: `1313`,
    2446: `1314`,
    2447: `1314`,
    2448: `1315`,
    2449: `1316`,
    245: `34`,
    2450: `1316`,
    2451: `1317`,
    2452: `1318`,
    2453: `1319`,
    2454: `1319`,
    2455: `1320`,
    2456: `1321`,
    2457: `1322`,
    2458: `1322`,
    2459: `1323`,
    246: `35`,
    2460: `1324`,
    2461: `1324`,
    2462: `1325`,
    2463: `1326`,
    2464: `1326`,
    2465: `1327`,
    2466: `1327`,
    2467: `1328`,
    2468: `1328`,
    2469: `1328`,
    247: `35`,
    2470: `1330`,
    2471: `1331`,
    2472: `1332`,
    2473: `1333`,
    2474: `1334`,
    2475: `1336`,
    2476: `1337`,
    2477: `1337`,
    2478: `1338`,
    2479: `1338`,
    248: `36`,
    2480: `1339`,
    2481: `1339`,
    2482: `1340`,
    2483: `1340`,
    2484: `1341`,
    2485: `1341`,
    2486: `1342`,
    2487: `1342`,
    2488: `1343`,
    2489: `1344`,
    249: `36`,
    2490: `1346`,
    2491: `1347`,
    2492: `1347`,
    2493: `1348`,
    2494: `1349`,
    2495: `1349`,
    2496: `1350`,
    2497: `1350`,
    2498: `1351`,
    2499: `1351`,
    25: `2`,
    250: `37`,
    2500: `1352`,
    2501: `1353`,
    2502: `1355`,
    2503: `1355`,
    2504: `1356`,
    2505: `1356`,
    2506: `1356`,
    2507: `1357`,
    2508: `1357`,
    2509: `1358`,
    251: `37`,
    2510: `1358`,
    2511: `1358`,
    2512: `1360`,
    2513: `1360`,
    2514: `1361`,
    2515: `1361`,
    2516: `1361`,
    2517: `1362`,
    2518: `1362`,
    2519: `1363`,
    252: `38`,
    2520: `1363`,
    2521: `1363`,
    2522: `1365`,
    2523: `1365`,
    2524: `1365`,
    2525: `1367`,
    2526: `1367`,
    2527: `1367`,
    2528: `1369`,
    2529: `1369`,
    253: `39`,
    2530: `1369`,
    2531: `1371`,
    2532: `1371`,
    2533: `1371`,
    2534: `1373`,
    2535: `1373`,
    2536: `1373`,
    2537: `1374`,
    2538: `1374`,
    2539: `1374`,
    254: `44`,
    2540: `1375`,
    2541: `1375`,
    2542: `1375`,
    2543: `1376`,
    2544: `1376`,
    2545: `1377`,
    2546: `1377`,
    2547: `1378`,
    2548: `1378`,
    2549: `1379`,
    255: `44`,
    2550: `1379`,
    2551: `1379`,
    2552: `1381`,
    2553: `1381`,
    2554: `1381`,
    2555: `1382`,
    2556: `1382`,
    2557: `1382`,
    2558: `1383`,
    2559: `1383`,
    256: `45`,
    2560: `1384`,
    2561: `1384`,
    2562: `1385`,
    2563: `1385`,
    2564: `1385`,
    2565: `1387`,
    2566: `1388`,
    2567: `1390`,
    2568: `1391`,
    2569: `1392`,
    257: `45`,
    2570: `1393`,
    2571: `1393`,
    2572: `1394`,
    2573: `1394`,
    2574: `1395`,
    2575: `1395`,
    2576: `1395`,
    2577: `1396`,
    2578: `1398`,
    2579: `1399`,
    258: `46`,
    2580: `1400`,
    2581: `1400`,
    2582: `1400`,
    2583: `1401`,
    2584: `1402`,
    2585: `1402`,
    2586: `1405`,
    2587: `1405`,
    2588: `1406`,
    2589: `1406`,
    259: `47`,
    2590: `1407`,
    2591: `1408`,
    2592: `1409`,
    2593: `1410`,
    2594: `1410`,
    2595: `1411`,
    2596: `1412`,
    2597: `1412`,
    2598: `1413`,
    2599: `1413`,
    26: `2`,
    260: `53`,
    2600: `1414`,
    2601: `1414`,
    2602: `1415`,
    2603: `1416`,
    2604: `1417`,
    2605: `1417`,
    2606: `1418`,
    2607: `1419`,
    2608: `1420`,
    2609: `1421`,
    261: `53`,
    2610: `1421`,
    2611: `1422`,
    2612: `1423`,
    2613: `1424`,
    2614: `1426`,
    2615: `1426`,
    2616: `1426`,
    2617: `1427`,
    2618: `1428`,
    2619: `1428`,
    262: `54`,
    2620: `1429`,
    2621: `1429`,
    2622: `1429`,
    2623: `1431`,
    2624: `1432`,
    2625: `1432`,
    2626: `1432`,
    2627: `1433`,
    2628: `1434`,
    2629: `1435`,
    263: `55`,
    2630: `1436`,
    2631: `1437`,
    2632: `1439`,
    2633: `1440`,
    2634: `1441`,
    2635: `1442`,
    2636: `1442`,
    2637: `1442`,
    2638: `1443`,
    2639: `1443`,
    264: `55`,
    2640: `1444`,
    2641: `1445`,
    2642: `1446`,
    2643: `1448`,
    2644: `1449`,
    2645: `1450`,
    2646: `1451`,
    2647: `1451`,
    2648: `1451`,
    2649: `1452`,
    265: `56`,
    2650: `1452`,
    2651: `1453`,
    2652: `1453`,
    2653: `1453`,
    2654: `1454`,
    2655: `1454`,
    2656: `1454`,
    2657: `1456`,
    2658: `1457`,
    2659: `1458`,
    266: `56`,
    2660: `1458`,
    2661: `1459`,
    2662: `1460`,
    2663: `1461`,
    2664: `1462`,
    2665: `1463`,
    2666: `1464`,
    2667: `1466`,
    2668: `1467`,
    2669: `1467`,
    267: `57`,
    2670: `1467`,
    2671: `1468`,
    2672: `1468`,
    2673: `1469`,
    2674: `1470`,
    2675: `1470`,
    2676: `1470`,
    2677: `1471`,
    2678: `1471`,
    2679: `1472`,
    268: `58`,
    2680: `1473`,
    2681: `1473`,
    2682: `1474`,
    2683: `1475`,
    2684: `1475`,
    2685: `1476`,
    2686: `1477`,
    2687: `1477`,
    2688: `1478`,
    2689: `1479`,
    269: `59`,
    2690: `1479`,
    2691: `1480`,
    2692: `1481`,
    2693: `1481`,
    2694: `1481`,
    2695: `1482`,
    2696: `1482`,
    2697: `1483`,
    2698: `1483`,
    2699: `1483`,
    27: `2`,
    270: `60`,
    2700: `1484`,
    2701: `1484`,
    2702: `1485`,
    2703: `1487`,
    2704: `1487`,
    2705: `1488`,
    2706: `1489`,
    2707: `1489`,
    2708: `1490`,
    2709: `1492`,
    271: `60`,
    2710: `1493`,
    2711: `1494`,
    2712: `1494`,
    2713: `1495`,
    2714: `1497`,
    2715: `1497`,
    2716: `1498`,
    2717: `1499`,
    2718: `1499`,
    2719: `1500`,
    272: `61`,
    2720: `1502`,
    2721: `1503`,
    2722: `1503`,
    2723: `1504`,
    2724: `1506`,
    2725: `1507`,
    2726: `1507`,
    2727: `1507`,
    2728: `1509`,
    2729: `1510`,
    273: `61`,
    2730: `1511`,
    2731: `1512`,
    2732: `1513`,
    2733: `1513`,
    2734: `1514`,
    2735: `1515`,
    2736: `1516`,
    2737: `1517`,
    2738: `1519`,
    2739: `1519`,
    274: `61`,
    2740: `1520`,
    2741: `1520`,
    2742: `1521`,
    2743: `1522`,
    2744: `1523`,
    2745: `1523`,
    2746: `1523`,
    2747: `1524`,
    2748: `1524`,
    2749: `1524`,
    275: `62`,
    2750: `1526`,
    2751: `1527`,
    2752: `1527`,
    2753: `1527`,
    2754: `1529`,
    2755: `1530`,
    2756: `1530`,
    2757: `1531`,
    2758: `1531`,
    2759: `1531`,
    276: `62`,
    2760: `1533`,
    2761: `1534`,
    2762: `1534`,
    2763: `1535`,
    277: `63`,
    278: `63`,
    279: `64`,
    28: `2`,
    280: `65`,
    281: `65`,
    282: `66`,
    283: `67`,
    284: `67`,
    285: `68`,
    286: `69`,
    287: `71`,
    288: `72`,
    289: `72`,
    29: `2`,
    290: `73`,
    291: `73`,
    292: `73`,
    293: `73`,
    294: `73`,
    295: `73`,
    296: `73`,
    297: `73`,
    298: `73`,
    299: `73`,
    3: `2`,
    30: `2`,
    300: `74`,
    301: `74`,
    302: `75`,
    303: `76`,
    304: `76`,
    305: `76`,
    306: `77`,
    307: `78`,
    308: `79`,
    309: `79`,
    31: `2`,
    310: `80`,
    311: `81`,
    312: `81`,
    313: `81`,
    314: `82`,
    315: `82`,
    316: `83`,
    317: `83`,
    318: `84`,
    319: `84`,
    32: `2`,
    320: `86`,
    321: `86`,
    322: `87`,
    323: `87`,
    324: `87`,
    325: `88`,
    326: `89`,
    327: `89`,
    328: `89`,
    329: `91`,
    33: `2`,
    330: `93`,
    331: `93`,
    332: `94`,
    333: `94`,
    334: `95`,
    335: `95`,
    336: `96`,
    337: `96`,
    338: `96`,
    339: `98`,
    34: `2`,
    340: `98`,
    341: `99`,
    342: `99`,
    343: `100`,
    344: `101`,
    345: `103`,
    346: `103`,
    347: `103`,
    348: `105`,
    349: `106`,
    35: `2`,
    350: `106`,
    351: `107`,
    352: `107`,
    353: `108`,
    354: `108`,
    355: `108`,
    356: `110`,
    357: `110`,
    358: `111`,
    359: `111`,
    36: `2`,
    360: `111`,
    361: `113`,
    362: `113`,
    363: `113`,
    364: `113`,
    365: `113`,
    366: `113`,
    367: `114`,
    368: `114`,
    369: `115`,
    37: `2`,
    370: `116`,
    371: `118`,
    372: `119`,
    373: `121`,
    374: `121`,
    375: `122`,
    376: `122`,
    377: `122`,
    378: `123`,
    379: `123`,
    38: `2`,
    380: `124`,
    381: `124`,
    382: `124`,
    383: `125`,
    384: `126`,
    385: `126`,
    386: `128`,
    387: `129`,
    388: `129`,
    389: `130`,
    39: `2`,
    390: `131`,
    391: `131`,
    392: `132`,
    393: `133`,
    394: `134`,
    395: `134`,
    396: `134`,
    397: `135`,
    398: `136`,
    399: `136`,
    4: `2`,
    40: `2`,
    400: `137`,
    401: `138`,
    402: `139`,
    403: `140`,
    404: `141`,
    405: `146`,
    406: `146`,
    407: `147`,
    408: `147`,
    409: `148`,
    41: `2`,
    410: `148`,
    411: `148`,
    412: `149`,
    413: `149`,
    414: `150`,
    415: `151`,
    416: `156`,
    417: `156`,
    418: `157`,
    419: `158`,
    42: `2`,
    420: `158`,
    421: `159`,
    422: `160`,
    423: `161`,
    424: `161`,
    425: `161`,
    426: `162`,
    427: `163`,
    428: `163`,
    429: `164`,
    43: `2`,
    430: `164`,
    431: `164`,
    432: `164`,
    433: `164`,
    434: `164`,
    435: `164`,
    436: `164`,
    437: `164`,
    438: `164`,
    439: `165`,
    44: `2`,
    440: `165`,
    441: `166`,
    442: `167`,
    443: `167`,
    444: `167`,
    445: `168`,
    446: `169`,
    447: `170`,
    448: `170`,
    449: `171`,
    45: `2`,
    450: `172`,
    451: `172`,
    452: `172`,
    453: `173`,
    454: `173`,
    455: `174`,
    456: `174`,
    457: `175`,
    458: `175`,
    459: `176`,
    46: `2`,
    460: `176`,
    461: `176`,
    462: `178`,
    463: `178`,
    464: `179`,
    465: `179`,
    466: `179`,
    467: `180`,
    468: `181`,
    469: `181`,
    47: `2`,
    470: `182`,
    471: `182`,
    472: `183`,
    473: `184`,
    474: `190`,
    475: `191`,
    476: `191`,
    477: `192`,
    478: `193`,
    479: `193`,
    48: `2`,
    480: `194`,
    481: `195`,
    482: `195`,
    483: `195`,
    484: `196`,
    485: `197`,
    486: `197`,
    487: `198`,
    488: `199`,
    489: `200`,
    49: `2`,
    490: `201`,
    491: `202`,
    492: `207`,
    493: `207`,
    494: `208`,
    495: `208`,
    496: `209`,
    497: `209`,
    498: `209`,
    499: `210`,
    5: `2`,
    50: `2`,
    500: `210`,
    501: `211`,
    502: `212`,
    503: `217`,
    504: `218`,
    505: `219`,
    506: `219`,
    507: `220`,
    508: `221`,
    509: `221`,
    51: `2`,
    510: `221`,
    511: `222`,
    512: `223`,
    513: `223`,
    514: `224`,
    515: `224`,
    516: `224`,
    517: `224`,
    518: `224`,
    519: `224`,
    52: `2`,
    520: `224`,
    521: `224`,
    522: `224`,
    523: `224`,
    524: `225`,
    525: `225`,
    526: `226`,
    527: `227`,
    528: `227`,
    529: `227`,
    53: `2`,
    530: `228`,
    531: `229`,
    532: `230`,
    533: `230`,
    534: `231`,
    535: `232`,
    536: `232`,
    537: `232`,
    538: `233`,
    539: `233`,
    54: `2`,
    540: `234`,
    541: `234`,
    542: `235`,
    543: `235`,
    544: `236`,
    545: `236`,
    546: `236`,
    547: `238`,
    548: `238`,
    549: `239`,
    55: `2`,
    550: `240`,
    551: `241`,
    552: `242`,
    553: `242`,
    554: `243`,
    555: `243`,
    556: `246`,
    557: `246`,
    558: `247`,
    559: `247`,
    56: `2`,
    560: `248`,
    561: `249`,
    562: `250`,
    563: `251`,
    564: `251`,
    565: `252`,
    566: `253`,
    567: `253`,
    568: `254`,
    569: `254`,
    57: `2`,
    570: `255`,
    571: `255`,
    572: `256`,
    573: `257`,
    574: `258`,
    575: `258`,
    576: `259`,
    577: `259`,
    578: `260`,
    579: `261`,
    58: `2`,
    580: `262`,
    581: `262`,
    582: `263`,
    583: `263`,
    584: `264`,
    585: `265`,
    586: `266`,
    587: `266`,
    588: `267`,
    589: `268`,
    59: `2`,
    590: `271`,
    591: `271`,
    592: `272`,
    593: `273`,
    594: `273`,
    595: `274`,
    596: `275`,
    597: `276`,
    598: `276`,
    599: `278`,
    6: `2`,
    60: `2`,
    600: `279`,
    601: `280`,
    602: `280`,
    603: `281`,
    604: `282`,
    605: `282`,
    606: `283`,
    607: `284`,
    608: `284`,
    609: `285`,
    61: `2`,
    610: `286`,
    611: `286`,
    612: `287`,
    613: `288`,
    614: `288`,
    615: `288`,
    616: `289`,
    617: `289`,
    618: `289`,
    619: `290`,
    62: `2`,
    620: `290`,
    621: `291`,
    622: `292`,
    623: `292`,
    624: `292`,
    625: `293`,
    626: `293`,
    627: `293`,
    628: `294`,
    629: `294`,
    63: `2`,
    630: `296`,
    631: `297`,
    632: `297`,
    633: `298`,
    634: `299`,
    635: `299`,
    636: `300`,
    637: `301`,
    638: `301`,
    639: `301`,
    64: `2`,
    640: `302`,
    641: `302`,
    642: `302`,
    643: `303`,
    644: `303`,
    645: `304`,
    646: `305`,
    647: `305`,
    648: `305`,
    649: `306`,
    65: `2`,
    650: `306`,
    651: `307`,
    652: `308`,
    653: `309`,
    654: `309`,
    655: `310`,
    656: `311`,
    657: `311`,
    658: `312`,
    659: `312`,
    66: `2`,
    660: `312`,
    661: `313`,
    662: `314`,
    663: `314`,
    664: `315`,
    665: `316`,
    666: `316`,
    667: `317`,
    668: `318`,
    669: `318`,
    67: `2`,
    670: `319`,
    671: `320`,
    672: `322`,
    673: `322`,
    674: `323`,
    675: `323`,
    676: `324`,
    677: `325`,
    678: `325`,
    679: `325`,
    68: `2`,
    680: `326`,
    681: `326`,
    682: `327`,
    683: `327`,
    684: `327`,
    685: `327`,
    686: `327`,
    687: `327`,
    688: `327`,
    689: `327`,
    69: `2`,
    690: `327`,
    691: `327`,
    692: `328`,
    693: `328`,
    694: `329`,
    695: `330`,
    696: `331`,
    697: `331`,
    698: `332`,
    699: `332`,
    7: `2`,
    70: `2`,
    700: `333`,
    701: `333`,
    702: `334`,
    703: `334`,
    704: `334`,
    705: `335`,
    706: `335`,
    707: `336`,
    708: `336`,
    709: `336`,
    71: `2`,
    710: `337`,
    711: `338`,
    712: `338`,
    713: `339`,
    714: `339`,
    715: `339`,
    716: `340`,
    717: `341`,
    718: `341`,
    719: `342`,
    72: `2`,
    720: `342`,
    721: `342`,
    722: `343`,
    723: `344`,
    724: `344`,
    725: `345`,
    726: `345`,
    727: `345`,
    728: `346`,
    729: `347`,
    73: `2`,
    730: `347`,
    731: `348`,
    732: `348`,
    733: `348`,
    734: `349`,
    735: `350`,
    736: `350`,
    737: `351`,
    738: `351`,
    739: `351`,
    74: `2`,
    740: `352`,
    741: `353`,
    742: `353`,
    743: `354`,
    744: `354`,
    745: `355`,
    746: `356`,
    747: `356`,
    748: `357`,
    749: `358`,
    75: `2`,
    750: `359`,
    751: `360`,
    752: `360`,
    753: `361`,
    754: `361`,
    755: `361`,
    756: `362`,
    757: `363`,
    758: `363`,
    759: `364`,
    76: `2`,
    760: `364`,
    761: `364`,
    762: `365`,
    763: `366`,
    764: `366`,
    765: `367`,
    766: `367`,
    767: `368`,
    768: `368`,
    769: `369`,
    77: `2`,
    770: `369`,
    771: `369`,
    772: `371`,
    773: `371`,
    774: `371`,
    775: `371`,
    776: `371`,
    777: `371`,
    778: `371`,
    779: `371`,
    78: `2`,
    780: `371`,
    781: `371`,
    782: `371`,
    783: `371`,
    784: `371`,
    785: `371`,
    786: `371`,
    787: `371`,
    788: `371`,
    789: `371`,
    79: `2`,
    790: `371`,
    791: `371`,
    792: `371`,
    793: `371`,
    794: `371`,
    795: `371`,
    796: `371`,
    797: `371`,
    798: `371`,
    799: `371`,
    8: `2`,
    80: `2`,
    800: `371`,
    801: `371`,
    802: `371`,
    803: `371`,
    804: `371`,
    805: `371`,
    806: `371`,
    807: `372`,
    808: `373`,
    809: `374`,
    81: `4`,
    810: `375`,
    811: `376`,
    812: `381`,
    813: `381`,
    814: `382`,
    815: `382`,
    816: `383`,
    817: `384`,
    818: `385`,
    819: `385`,
    82: `4`,
    820: `386`,
    821: `387`,
    822: `388`,
    823: `394`,
    824: `395`,
    825: `396`,
    826: `396`,
    827: `397`,
    828: `398`,
    829: `398`,
    83: `5`,
    830: `398`,
    831: `399`,
    832: `400`,
    833: `400`,
    834: `401`,
    835: `401`,
    836: `401`,
    837: `401`,
    838: `401`,
    839: `401`,
    84: `5`,
    840: `401`,
    841: `401`,
    842: `401`,
    843: `401`,
    844: `402`,
    845: `402`,
    846: `403`,
    847: `404`,
    848: `405`,
    849: `405`,
    85: `5`,
    850: `406`,
    851: `406`,
    852: `407`,
    853: `407`,
    854: `408`,
    855: `408`,
    856: `409`,
    857: `409`,
    858: `409`,
    859: `410`,
    86: `6`,
    860: `411`,
    861: `411`,
    862: `412`,
    863: `412`,
    864: `412`,
    865: `413`,
    866: `414`,
    867: `414`,
    868: `415`,
    869: `415`,
    87: `7`,
    870: `415`,
    871: `416`,
    872: `417`,
    873: `417`,
    874: `418`,
    875: `418`,
    876: `418`,
    877: `419`,
    878: `420`,
    879: `420`,
    88: `8`,
    880: `421`,
    881: `421`,
    882: `421`,
    883: `422`,
    884: `423`,
    885: `423`,
    886: `424`,
    887: `424`,
    888: `424`,
    889: `425`,
    89: `9`,
    890: `426`,
    891: `426`,
    892: `427`,
    893: `428`,
    894: `429`,
    895: `429`,
    896: `430`,
    897: `430`,
    898: `430`,
    899: `431`,
    9: `2`,
    90: `10`,
    900: `432`,
    901: `432`,
    902: `433`,
    903: `433`,
    904: `433`,
    905: `434`,
    906: `435`,
    907: `435`,
    908: `436`,
    909: `436`,
    91: `11`,
    910: `437`,
    911: `437`,
    912: `438`,
    913: `438`,
    914: `438`,
    915: `440`,
    916: `440`,
    917: `441`,
    918: `441`,
    919: `441`,
    92: `11`,
    920: `442`,
    921: `442`,
    922: `443`,
    923: `443`,
    924: `444`,
    925: `444`,
    926: `444`,
    927: `445`,
    928: `445`,
    929: `446`,
    93: `12`,
    930: `446`,
    931: `447`,
    932: `447`,
    933: `448`,
    934: `449`,
    935: `454`,
    936: `454`,
    937: `456`,
    938: `457`,
    939: `457`,
    94: `13`,
    940: `458`,
    941: `459`,
    942: `459`,
    943: `460`,
    944: `461`,
    945: `461`,
    946: `461`,
    947: `462`,
    948: `462`,
    949: `462`,
    95: `14`,
    950: `463`,
    951: `464`,
    952: `464`,
    953: `465`,
    954: `465`,
    955: `466`,
    956: `467`,
    957: `472`,
    958: `473`,
    959: `474`,
    96: `14`,
    960: `474`,
    961: `475`,
    962: `476`,
    963: `476`,
    964: `477`,
    965: `477`,
    966: `478`,
    967: `479`,
    968: `479`,
    969: `479`,
    97: `15`,
    970: `480`,
    971: `480`,
    972: `480`,
    973: `482`,
    974: `483`,
    975: `484`,
    976: `484`,
    977: `485`,
    978: `486`,
    979: `486`,
    98: `16`,
    980: `487`,
    981: `488`,
    982: `488`,
    983: `489`,
    984: `490`,
    985: `490`,
    986: `491`,
    987: `492`,
    988: `492`,
    989: `492`,
    99: `17`,
    990: `493`,
    991: `493`,
    992: `493`,
    993: `494`,
    994: `494`,
    995: `495`,
    996: `496`,
    997: `496`,
    998: `496`,
    999: `497`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 290,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:614:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:423:31:after expr stmt semicolon',
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
  "deposit": deposit,
  "destroy": destroy,
  "transfer": transfer,
  "transferFrom": transferFrom,
  "withdraw": withdraw
  };
export const _APIs = {
  approve: approve,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  deposit: deposit,
  destroy: destroy,
  transfer: transfer,
  transferFrom: transferFrom,
  withdraw: withdraw
  };
