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
  const ctc2 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2, ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc0], ['locked', ctc4]]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2]);
  const ctc8 = stdlib.T_Data({
    DepositEvent: ctc3,
    HarvestEvent: ctc6,
    WithdrawEvent: ctc7
    });
  return {
    Approval: [ctc0, ctc0, ctc1],
    Event: [ctc8],
    Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Struct([['A', ctc2], ['B', ctc2]]);
  const ctc4 = stdlib.T_Struct([['protoFee', ctc2], ['lpFee', ctc2], ['totFee', ctc2], ['protoAddr', ctc1], ['locked', ctc0]]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Object({
    closed: ctc0,
    manager: ctc1,
    price: ctc2,
    protoBals: ctc3,
    protoInfo: ctc4,
    remaining: ctc2,
    tokA: ctc5,
    tokB: ctc5,
    tokenUnit: ctc2,
    totalCommitment: ctc2,
    unclaimed: ctc2
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_UInt;
  const ctc9 = stdlib.T_Struct([['protoInfo', ctc4], ['protoBals', ctc3], ['tokB', ctc5], ['tokA', ctc5]]);
  const ctc10 = stdlib.T_Struct([['protoInfo', ctc4], ['protoBals', ctc3], ['tokB', ctc5], ['tokA', ctc5], ['manager', ctc1], ['price', ctc2], ['tokenUnit', ctc2], ['remaining', ctc2], ['closed', ctc0], ['totalCommitment', ctc2]]);
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc2
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc12;
  
  const map2_ctc = ctc12;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2050] = svs;
      return (await ((async () => {
        
        const v6648 = v2050.protoInfo;
        const v6649 = v2050.protoBals;
        const v6650 = v2050.tokB;
        const v6651 = v2050.tokA;
        const v6652 = {
          protoBals: v6649,
          protoInfo: v6648,
          tokA: v6651,
          tokB: v6650
          };
        
        return v6652;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = svs;
      return (await ((async () => {
        
        const v2095 = v2050.protoInfo;
        const v2096 = v2050.protoBals;
        const v2097 = v2050.tokB;
        const v2098 = v2050.tokA;
        const v2099 = {
          protoBals: v2096,
          protoInfo: v2095,
          tokA: v2098,
          tokB: v2097
          };
        
        return v2099;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _commitment = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2050] = svs;
      return (await ((async (_v6645 ) => {
          const v6645 = stdlib.protect(ctc1, _v6645, null);
        
        const v6646 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc1, v6645, ctc2), null);
        const v6647 = stdlib.fromSome(v6646, stdlib.checkedBigNumberify('./index.rsh:1504:76:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v6647;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = svs;
      return (await ((async (_v2092 ) => {
          const v2092 = stdlib.protect(ctc1, _v2092, null);
        
        const v2093 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc1, v2092, ctc2), null);
        const v2094 = stdlib.fromSome(v2093, stdlib.checkedBigNumberify('./index.rsh:1504:76:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2094;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _price = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2050] = svs;
      return (await ((async () => {
        
        const v6666 = v2050.price;
        
        return v6666;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = svs;
      return (await ((async () => {
        
        const v2113 = v2050.price;
        
        return v2113;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _reserve = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2050] = svs;
      return (await ((async (_v6638 ) => {
          const v6638 = stdlib.protect(ctc1, _v6638, null);
        
        const v6639 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v6638, ctc2), null);
        const v6640 = stdlib.fromSome(v6639, stdlib.checkedBigNumberify('./index.rsh:1499:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6641 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc1, v6638, ctc2), null);
        const v6642 = stdlib.fromSome(v6641, stdlib.checkedBigNumberify('./index.rsh:1500:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6643 = {
          A: v6640,
          B: v6642
          };
        
        return v6643;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = svs;
      return (await ((async (_v2085 ) => {
          const v2085 = stdlib.protect(ctc1, _v2085, null);
        
        const v2086 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc1, v2085, ctc2), null);
        const v2087 = stdlib.fromSome(v2086, stdlib.checkedBigNumberify('./index.rsh:1499:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2088 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc1, v2085, ctc2), null);
        const v2089 = stdlib.fromSome(v2088, stdlib.checkedBigNumberify('./index.rsh:1500:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2090 = {
          A: v2087,
          B: v2089
          };
        
        return v2090;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2050] = svs;
      return (await ((async () => {
        
        const v6654 = v2050.protoInfo;
        const v6655 = v2050.protoBals;
        const v6656 = v2050.tokB;
        const v6657 = v2050.tokA;
        const v6658 = v2050.manager;
        const v6659 = v2050.price;
        const v6660 = v2050.tokenUnit;
        const v6661 = v2050.remaining;
        const v6662 = v2050.closed;
        const v6663 = v2050.totalCommitment;
        const v6664 = {
          closed: v6662,
          manager: v6658,
          price: v6659,
          protoBals: v6655,
          protoInfo: v6654,
          remaining: v6661,
          tokA: v6657,
          tokB: v6656,
          tokenUnit: v6660,
          totalCommitment: v6663
          };
        
        return v6664;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = svs;
      return (await ((async () => {
        
        const v2101 = v2050.protoInfo;
        const v2102 = v2050.protoBals;
        const v2103 = v2050.tokB;
        const v2104 = v2050.tokA;
        const v2105 = v2050.manager;
        const v2106 = v2050.price;
        const v2107 = v2050.tokenUnit;
        const v2108 = v2050.remaining;
        const v2109 = v2050.closed;
        const v2110 = v2050.totalCommitment;
        const v2111 = {
          closed: v2109,
          manager: v2105,
          price: v2106,
          protoBals: v2102,
          protoInfo: v2101,
          remaining: v2108,
          tokA: v2104,
          tokB: v2103,
          tokenUnit: v2107,
          totalCommitment: v2110
          };
        
        return v2111;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v2050] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc9
        },
      commitment: {
        decode: _commitment,
        dom: [ctc1],
        rng: ctc2
        },
      price: {
        decode: _price,
        dom: [],
        rng: ctc2
        },
      reserve: {
        decode: _reserve,
        dom: [ctc1],
        rng: ctc3
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc10
        },
      v_swapAForB: {
        decode: _v_swapAForB,
        dom: [ctc8],
        rng: ctc8
        }
      },
    views: {
      2: [ctc6],
      4: [ctc5, ctc5, ctc2, ctc2, ctc7, ctc3, ctc6, ctc8]
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
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
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
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Object({
    proto: ctc3,
    tokA: ctc3,
    tokB: ctc3
    });
  const ctc5 = stdlib.T_Object({
    price: ctc1,
    swap: ctc4,
    tokenUnit: ctc1
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc7, ctc9]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc11,
    Provider_depositB0_424: ctc12,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc12,
    Provider_withdrawB0_424: ctc12,
    Trader_makeCommitment0_424: ctc12,
    Trader_swapAForB0_424: ctc12,
    Trader_withdrawA0_424: ctc12,
    Trader_withdrawB0_424: ctc12
    });
  const ctc15 = stdlib.T_Tuple([ctc6, ctc8]);
  const ctc16 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc17 = stdlib.T_Tuple([ctc16, ctc6]);
  const ctc18 = stdlib.T_Tuple([]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  
  const v1965 = stdlib.protect(ctc5, interact.params, 'for Deployer\'s interact field params');
  const v1967 = v1965.swap;
  const v1968 = v1965.tokenUnit;
  const v1970 = v1967.tokA;
  const v1971 = v1967.tokB;
  
  const v1980 = stdlib.digest([ctc3], [v1970]);
  const v1981 = stdlib.digest([ctc3], [v1971]);
  const v1982 = stdlib.digestEq(v1980, v1981);
  const v1983 = v1982 ? false : true;
  stdlib.assert(v1983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1439:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1454:19:application call to "checkInput" (defined at: ./index.rsh:1437:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v1986 = stdlib.gt256(v1968, stdlib.checkedBigNumberify('./index.rsh:1442:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1442:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1454:19:application call to "checkInput" (defined at: ./index.rsh:1437:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1965],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:1451:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1451:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1989], secs: v1991, time: v1990, didSend: v151, from: v1988 } = txn1;
      
      const v1994 = v1989.swap;
      const v1995 = v1994.tokA;
      const v1997 = v1994.tokB;
      const v2003 = v1989.tokenUnit;
      ;
      const v2009 = v1994.proto;
      const v2011 = v1989.price;
      const v2012 = await ctc.getContractInfo();
      const v2015 = [];
      const v2016 = ['Some', v1995];
      const v2017 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2009,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:1467:71:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:1467:71:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc9.defaultValue /* simReturnVal */];})();
      const v2018 = await txn1.getOutput('internal', 'v2017', ctc10, v2017);
      const v2020 = v2018[stdlib.checkedBigNumberify('./index.rsh:1467:71:application', stdlib.UInt_max, '0')];
      const v2021 = v2018[stdlib.checkedBigNumberify('./index.rsh:1467:71:application', stdlib.UInt_max, '1')];
      const v2022 = v2021.protoFee;
      const v2023 = v2021.lpFee;
      const v2024 = v2021.totFee;
      
      const v2045 = v2021.protoAddr;
      const v2046 = v2021.locked;
      const v2047 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v2048 = {
        locked: v2046,
        lpFee: v2023,
        protoAddr: v2045,
        protoFee: v2022,
        totFee: v2024
        };
      const v2049 = {
        closed: false,
        manager: v1988,
        price: v2011,
        protoBals: v2047,
        protoInfo: v2048,
        remaining: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        tokA: v1995,
        tokB: v1997,
        tokenUnit: v2003,
        totalCommitment: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        unclaimed: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v2050 = v2049;
      const v2051 = v1990;
      const v2054 = v2020;
      
      if (await (async () => {
        const v2083 = v2050.closed;
        const v2084 = v2083 ? false : true;
        
        return v2084;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1989], secs: v1991, time: v1990, didSend: v151, from: v1988 } = txn1;
  const v1994 = v1989.swap;
  const v1995 = v1994.tokA;
  const v1997 = v1994.tokB;
  const v1998 = stdlib.digest([ctc3], [v1995]);
  const v1999 = stdlib.digest([ctc3], [v1997]);
  const v2000 = stdlib.digestEq(v1998, v1999);
  const v2001 = v2000 ? false : true;
  stdlib.assert(v2001, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1439:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1454:19:application call to "checkInput" (defined at: ./index.rsh:1437:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v2003 = v1989.tokenUnit;
  const v2004 = stdlib.gt256(v2003, stdlib.checkedBigNumberify('./index.rsh:1442:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2004, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1442:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1454:19:application call to "checkInput" (defined at: ./index.rsh:1437:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  ;
  const v2009 = v1994.proto;
  const v2011 = v1989.price;
  const v2012 = await ctc.getContractInfo();
  const v2015 = [];
  const v2016 = ['Some', v1995];
  const v2017 = undefined /* Remote */;
  const v2018 = await txn1.getOutput('internal', 'v2017', ctc10, v2017);
  const v2020 = v2018[stdlib.checkedBigNumberify('./index.rsh:1467:71:application', stdlib.UInt_max, '0')];
  const v2021 = v2018[stdlib.checkedBigNumberify('./index.rsh:1467:71:application', stdlib.UInt_max, '1')];
  const v2022 = v2021.protoFee;
  const v2023 = v2021.lpFee;
  const v2024 = v2021.totFee;
  const v2025 = stdlib.lt256(v2022, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v2026 = stdlib.lt256(v2023, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v2027 = v2025 ? v2026 : false;
  let v2028;
  if (v2027) {
    const v2029 = stdlib.safeAdd256(v2023, v2022);
    const v2030 = stdlib.eq256(v2024, v2029);
    v2028 = v2030;
    }
  else {
    v2028 = false;
    }
  const v2031 = stdlib.lt256(v2024, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v2032 = v2028 ? v2031 : false;
  const v2033 = stdlib.gt256(v2024, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2034 = v2032 ? v2033 : false;
  stdlib.assert(v2034, {
    at: './index.rsh:1467:71:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v2039 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2020);
  stdlib.assert(v2039, {
    at: './index.rsh:1467:71:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.ready(v2012), {
    at: './index.rsh:1480:21:application',
    fs: ['at ./index.rsh:1480:21:application call to [unknown function] (defined at: ./index.rsh:1480:21:function exp)', 'at ./index.rsh:1480:21:application call to "liftedInteract" (defined at: ./index.rsh:1480:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2045 = v2021.protoAddr;
  const v2046 = v2021.locked;
  const v2047 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v2048 = {
    locked: v2046,
    lpFee: v2023,
    protoAddr: v2045,
    protoFee: v2022,
    totFee: v2024
    };
  const v2049 = {
    closed: false,
    manager: v1988,
    price: v2011,
    protoBals: v2047,
    protoInfo: v2048,
    remaining: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    tokA: v1995,
    tokB: v1997,
    tokenUnit: v2003,
    totalCommitment: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    unclaimed: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  let v2050 = v2049;
  let v2051 = v1990;
  let v2054 = v2020;
  
  let txn2 = txn1;
  while (await (async () => {
    const v2083 = v2050.closed;
    const v2084 = v2083 ? false : true;
    
    return v2084;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn3;
    switch (v2315[0]) {
      case 'Protocol_harvest0_424': {
        const v2318 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v2332 = v2318[stdlib.checkedBigNumberify('./index.rsh:1537:12:spread', stdlib.UInt_max, '0')];
        const v2333 = v2318[stdlib.checkedBigNumberify('./index.rsh:1537:12:spread', stdlib.UInt_max, '1')];
        const v2335 = v2050.protoInfo;
        const v2336 = v2335.protoAddr;
        const v2337 = stdlib.addressEq(v2314, v2336);
        stdlib.assert(v2337, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1531:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1538:21:application call to "chkProtoAddr" (defined at: ./index.rsh:1530:42:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Deployer'
          });
        const v2339 = v2333.protoFee;
        const v2340 = v2333.lpFee;
        const v2341 = v2333.totFee;
        const v2342 = stdlib.lt256(v2339, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v2343 = stdlib.lt256(v2340, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v2344 = v2342 ? v2343 : false;
        let v2345;
        if (v2344) {
          const v2346 = stdlib.safeAdd256(v2340, v2339);
          const v2347 = stdlib.eq256(v2341, v2346);
          v2345 = v2347;
          }
        else {
          v2345 = false;
          }
        const v2348 = stdlib.lt256(v2341, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v2349 = v2345 ? v2348 : false;
        const v2350 = stdlib.gt256(v2341, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2351 = v2349 ? v2350 : false;
        stdlib.assert(v2351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:332:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1539:16:application call to "chkFees" (defined at: ./index.rsh:332:21:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v2356 = (stdlib.le(await ctc.getBalance(), v2054) ? stdlib.checkedBigNumberify('./index.rsh:1542:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2054));
        const v2357 = stdlib.safeAdd(v2356, v2054);
        const v2358 = v2333.locked;
        const v2362 = stdlib.sub(v2357, v2356);
        ;
        const v2363 = v2050.protoBals;
        const v2364 = v2363.A;
        const v2365 = await ctc.getContractAddress();
        const v2366 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2365];
        const v2367 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2332];
        const v2371 = undefined /* Remote */;
        const v2372 = await txn3.getOutput('internal', 'v2371', ctc15, v2371);
        const v2374 = v2372[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
        const v2379 = stdlib.add(v2362, v2374);
        const v2380 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2374);
        stdlib.assert(v2380, {
          at: './index.rsh:1418:11:application',
          fs: ['at ./index.rsh:1545:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v2382 = v2363.B;
        const v2384 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2365];
        const v2385 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2332];
        const v2389 = undefined /* Remote */;
        const v2390 = await txn3.getOutput('internal', 'v2389', ctc15, v2389);
        const v2392 = v2390[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
        const v2397 = stdlib.add(v2379, v2392);
        const v2398 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2392);
        stdlib.assert(v2398, {
          at: './index.rsh:1418:11:application',
          fs: ['at ./index.rsh:1546:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v2402 = {
          A: v2364,
          B: v2382
          };
        const v2403 = [v2402, v2356];
        await txn3.getOutput('Protocol_harvest', 'v2403', ctc17, v2403);
        const v2431 = v2333.protoAddr;
        const v2433 = {
          locked: v2358,
          lpFee: v2340,
          protoAddr: v2431,
          protoFee: v2339,
          totFee: v2341
          };
        const v2434 = [v2433];
        const v2435 = ['HarvestEvent', v2434];
        null;
        const v2437 = v2050.manager;
        const v2438 = v2050.price;
        const v2441 = v2050.remaining;
        const v2442 = v2050.tokA;
        const v2443 = v2050.tokB;
        const v2444 = v2050.tokenUnit;
        const v2445 = v2050.totalCommitment;
        const v2446 = v2050.unclaimed;
        const v2448 = {
          closed: v2358,
          manager: v2437,
          price: v2438,
          protoBals: v2047,
          protoInfo: v2333,
          remaining: v2441,
          tokA: v2442,
          tokB: v2443,
          tokenUnit: v2444,
          totalCommitment: v2445,
          unclaimed: v2446
          };
        const cv2050 = v2448;
        const cv2051 = v2316;
        const cv2054 = v2397;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositB0_424': {
        const v2798 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v2933 = v2798[stdlib.checkedBigNumberify('./index.rsh:1560:12:spread', stdlib.UInt_max, '0')];
        const v2935 = await ctc.getContractAddress();
        const v2937 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
        const v2938 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2935];
        const v2939 = [v2314, v2935];
        const v2940 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2939];
        const v2944 = undefined /* Remote */;
        const v2945 = await txn3.getOutput('internal', 'v2944', ctc15, v2944);
        const v2947 = v2945[stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0')];
        const v2952 = stdlib.add(v2054, v2947);
        const v2953 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2947);
        stdlib.assert(v2953, {
          at: './index.rsh:1433:11:application',
          fs: ['at ./index.rsh:1563:37:application call to [unknown function] (defined at: ./index.rsh:1420:52:function exp)', 'at ./index.rsh:1562:15:application call to [unknown function] (defined at: ./index.rsh:1562:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v2954 = v2050.remaining;
        const v2955 = stdlib.safeAdd256(v2954, v2933);
        await txn3.getOutput('Provider_depositB', 'v2955', ctc1, v2955);
        const v2962 = v2050.closed;
        const v2963 = v2050.manager;
        const v2964 = v2050.price;
        const v2965 = v2050.protoBals;
        const v2966 = v2050.protoInfo;
        const v2968 = v2050.tokA;
        const v2969 = v2050.tokB;
        const v2970 = v2050.tokenUnit;
        const v2971 = v2050.totalCommitment;
        const v2972 = v2050.unclaimed;
        const v2973 = {
          closed: v2962,
          manager: v2963,
          price: v2964,
          protoBals: v2965,
          protoInfo: v2966,
          remaining: v2955,
          tokA: v2968,
          tokB: v2969,
          tokenUnit: v2970,
          totalCommitment: v2971,
          unclaimed: v2972
          };
        const cv2050 = v2973;
        const cv2051 = v2316;
        const cv2054 = v2952;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_grant0_424': {
        const v3278 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v3457 = v3278[stdlib.checkedBigNumberify('./index.rsh:1609:12:spread', stdlib.UInt_max, '0')];
        const v3458 = v2050.manager;
        const v3459 = stdlib.addressEq(v2314, v3458);
        stdlib.assert(v3459, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1610:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1612:15:application call to [unknown function] (defined at: ./index.rsh:1612:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v3462 = true;
        await txn3.getOutput('Provider_grant', 'v3462', ctc8, v3462);
        const v3469 = v2050.closed;
        const v3471 = v2050.price;
        const v3472 = v2050.protoBals;
        const v3473 = v2050.protoInfo;
        const v3474 = v2050.remaining;
        const v3475 = v2050.tokA;
        const v3476 = v2050.tokB;
        const v3477 = v2050.tokenUnit;
        const v3478 = v2050.totalCommitment;
        const v3479 = v2050.unclaimed;
        const v3480 = {
          closed: v3469,
          manager: v3457,
          price: v3471,
          protoBals: v3472,
          protoInfo: v3473,
          remaining: v3474,
          tokA: v3475,
          tokB: v3476,
          tokenUnit: v3477,
          totalCommitment: v3478,
          unclaimed: v3479
          };
        const cv2050 = v3480;
        const cv2051 = v2316;
        const cv2054 = v2054;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawA0_424': {
        const v3758 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v3964 = v3758[stdlib.checkedBigNumberify('./index.rsh:1575:12:spread', stdlib.UInt_max, '0')];
        const v3965 = v2050.manager;
        const v3966 = stdlib.addressEq(v2314, v3965);
        stdlib.assert(v3966, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1576:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v3968 = v2050.unclaimed;
        const v3969 = stdlib.le256(v3964, v3968);
        stdlib.assert(v3969, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1577:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v3973 = stdlib.safeSub256(v3968, v3964);
        await txn3.getOutput('Provider_withdrawA', 'v3973', ctc1, v3973);
        const v3980 = await ctc.getContractAddress();
        const v3981 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3980];
        const v3982 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
        const v3986 = undefined /* Remote */;
        const v3987 = await txn3.getOutput('internal', 'v3986', ctc15, v3986);
        const v3989 = v3987[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
        const v3994 = stdlib.add(v2054, v3989);
        const v3995 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3989);
        stdlib.assert(v3995, {
          at: './index.rsh:1418:11:application',
          fs: ['at ./index.rsh:1582:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3996 = v2050.closed;
        const v3998 = v2050.price;
        const v3999 = v2050.protoBals;
        const v4000 = v2050.protoInfo;
        const v4001 = v2050.remaining;
        const v4002 = v2050.tokA;
        const v4003 = v2050.tokB;
        const v4004 = v2050.tokenUnit;
        const v4005 = v2050.totalCommitment;
        const v4007 = {
          closed: v3996,
          manager: v3965,
          price: v3998,
          protoBals: v3999,
          protoInfo: v4000,
          remaining: v4001,
          tokA: v4002,
          tokB: v4003,
          tokenUnit: v4004,
          totalCommitment: v4005,
          unclaimed: v3973
          };
        const cv2050 = v4007;
        const cv2051 = v2316;
        const cv2054 = v3994;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawB0_424': {
        const v4238 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v4491 = v4238[stdlib.checkedBigNumberify('./index.rsh:1592:12:spread', stdlib.UInt_max, '0')];
        const v4492 = v2050.manager;
        const v4493 = stdlib.addressEq(v2314, v4492);
        stdlib.assert(v4493, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1593:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v4495 = v2050.remaining;
        const v4496 = stdlib.le256(v4491, v4495);
        stdlib.assert(v4496, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1594:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v4500 = stdlib.safeSub256(v4495, v4491);
        await txn3.getOutput('Provider_withdrawB', 'v4500', ctc1, v4500);
        const v4507 = await ctc.getContractAddress();
        const v4508 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4507];
        const v4509 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
        const v4513 = undefined /* Remote */;
        const v4514 = await txn3.getOutput('internal', 'v4513', ctc15, v4513);
        const v4516 = v4514[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
        const v4521 = stdlib.add(v2054, v4516);
        const v4522 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4516);
        stdlib.assert(v4522, {
          at: './index.rsh:1418:11:application',
          fs: ['at ./index.rsh:1599:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v4523 = v2050.closed;
        const v4525 = v2050.price;
        const v4526 = v2050.protoBals;
        const v4527 = v2050.protoInfo;
        const v4529 = v2050.tokA;
        const v4530 = v2050.tokB;
        const v4531 = v2050.tokenUnit;
        const v4532 = v2050.totalCommitment;
        const v4533 = v2050.unclaimed;
        const v4534 = {
          closed: v4523,
          manager: v4492,
          price: v4525,
          protoBals: v4526,
          protoInfo: v4527,
          remaining: v4500,
          tokA: v4529,
          tokB: v4530,
          tokenUnit: v4531,
          totalCommitment: v4532,
          unclaimed: v4533
          };
        const cv2050 = v4534;
        const cv2051 = v2316;
        const cv2054 = v4521;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_makeCommitment0_424': {
        const v4718 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v5018 = v4718[stdlib.checkedBigNumberify('./index.rsh:1623:12:spread', stdlib.UInt_max, '0')];
        const v5019 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2314, ctc1), null);
        const v5020 = stdlib.fromSome(v5019, stdlib.checkedBigNumberify('./index.rsh:1624:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5021 = v2050.totalCommitment;
        const v5022 = stdlib.ge256(v5021, v5020);
        stdlib.assert(v5022, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1625:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1627:15:application call to [unknown function] (defined at: ./index.rsh:1627:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc7, v2314, ctc1, v5018);
        const v5025 = true;
        await txn3.getOutput('Trader_makeCommitment', 'v5025', ctc8, v5025);
        const v5032 = v2050.closed;
        const v5033 = v2050.manager;
        const v5034 = v2050.price;
        const v5035 = v2050.protoBals;
        const v5036 = v2050.protoInfo;
        const v5037 = v2050.remaining;
        const v5038 = v2050.tokA;
        const v5039 = v2050.tokB;
        const v5040 = v2050.tokenUnit;
        const v5042 = v2050.unclaimed;
        const v5044 = stdlib.safeSub256(v5021, v5020);
        const v5045 = stdlib.safeAdd256(v5044, v5018);
        const v5046 = {
          closed: v5032,
          manager: v5033,
          price: v5034,
          protoBals: v5035,
          protoInfo: v5036,
          remaining: v5037,
          tokA: v5038,
          tokB: v5039,
          tokenUnit: v5040,
          totalCommitment: v5045,
          unclaimed: v5042
          };
        const cv2050 = v5046;
        const cv2051 = v2316;
        const cv2054 = v2054;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_424': {
        const v5198 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v5530 = v5198[stdlib.checkedBigNumberify('./index.rsh:1709:12:spread', stdlib.UInt_max, '0')];
        const v5532 = v2050.protoInfo;
        const v5533 = v5532.protoFee;
        const v5534 = stdlib.safeDiv256(v5530, v2011);
        const v5535 = stdlib.safeMod256(v5530, v2011);
        const v5536 = stdlib.safeMul256(v5534, v2003);
        const v5537 = stdlib.safeSub256(v5530, v5535);
        const v5538 = stdlib.safeMul256(v5533, v5537);
        const v5539 = stdlib.safeDiv256(v5538, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v5540 = stdlib.gt256(v5534, stdlib.checkedBigNumberify('./index.rsh:1676:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v5540, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1676:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1710:25:application call to "doSwap" (defined at: ./index.rsh:1666:40:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v5542 = v2050.remaining;
        const v5543 = stdlib.ge256(v5542, v5536);
        stdlib.assert(v5543, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1677:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1710:25:application call to "doSwap" (defined at: ./index.rsh:1666:40:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v5546 = await ctc.getContractAddress();
        const v5548 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
        const v5549 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5546];
        const v5550 = [v2314, v5546];
        const v5551 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5550];
        const v5555 = undefined /* Remote */;
        const v5556 = await txn3.getOutput('internal', 'v5555', ctc15, v5555);
        const v5558 = v5556[stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0')];
        const v5563 = stdlib.add(v2054, v5558);
        const v5564 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5558);
        stdlib.assert(v5564, {
          at: './index.rsh:1433:11:application',
          fs: ['at ./index.rsh:1679:37:application call to [unknown function] (defined at: ./index.rsh:1420:52:function exp)', 'at ./index.rsh:1711:25:application call to "c" (defined at: ./index.rsh:1678:22:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v5565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2314, ctc1), null);
        const v5566 = stdlib.fromSome(v5565, stdlib.checkedBigNumberify('./index.rsh:1680:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5567 = stdlib.safeAdd256(v5566, v5535);
        await stdlib.mapSet(map0, ctc7, v2314, ctc1, v5567);
        const v5568 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2314, ctc1), null);
        const v5569 = stdlib.fromSome(v5568, stdlib.checkedBigNumberify('./index.rsh:1681:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5570 = stdlib.safeAdd256(v5569, v5536);
        await stdlib.mapSet(map1, ctc7, v2314, ctc1, v5570);
        const v5571 = {
          A: v5535,
          B: v5536
          };
        await txn3.getOutput('Trader_swapAForB', 'v5571', ctc16, v5571);
        const v5580 = v2050.closed;
        const v5581 = v2050.manager;
        const v5582 = v2050.price;
        const v5583 = v2050.protoBals;
        const v5586 = v2050.tokA;
        const v5587 = v2050.tokB;
        const v5588 = v2050.tokenUnit;
        const v5589 = v2050.totalCommitment;
        const v5590 = v2050.unclaimed;
        const v5592 = stdlib.safeSub256(v5542, v5536);
        const v5594 = stdlib.safeAdd256(v5590, v5537);
        const v5595 = stdlib.safeSub256(v5594, v5539);
        const v5598 = v5583.A;
        const v5602 = stdlib.safeAdd256(v5598, v5539);
        const v5603 = v5583.B;
        const v5608 = {
          A: v5602,
          B: v5603
          };
        const v5609 = {
          closed: v5580,
          manager: v5581,
          price: v5582,
          protoBals: v5608,
          protoInfo: v5532,
          remaining: v5592,
          tokA: v5586,
          tokB: v5587,
          tokenUnit: v5588,
          totalCommitment: v5589,
          unclaimed: v5595
          };
        const cv2050 = v5609;
        const cv2051 = v2316;
        const cv2054 = v5563;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_withdrawA0_424': {
        const v5678 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v6097 = v5678[stdlib.checkedBigNumberify('./index.rsh:1639:12:spread', stdlib.UInt_max, '0')];
        const v6098 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2314, ctc1), null);
        const v6099 = stdlib.fromSome(v6098, stdlib.checkedBigNumberify('./index.rsh:1640:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6100 = stdlib.ge256(v6099, v6097);
        stdlib.assert(v6100, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1641:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1643:15:application call to [unknown function] (defined at: ./index.rsh:1643:15:function exp)'],
          msg: 'Reserve A balances insufficient',
          who: 'Deployer'
          });
        const v6103 = stdlib.safeSub256(v6099, v6097);
        await stdlib.mapSet(map0, ctc7, v2314, ctc1, v6103);
        await txn3.getOutput('Trader_withdrawA', 'v6103', ctc1, v6103);
        const v6110 = await ctc.getContractAddress();
        const v6111 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6110];
        const v6112 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
        const v6116 = undefined /* Remote */;
        const v6117 = await txn3.getOutput('internal', 'v6116', ctc15, v6116);
        const v6119 = v6117[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
        const v6124 = stdlib.add(v2054, v6119);
        const v6125 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6119);
        stdlib.assert(v6125, {
          at: './index.rsh:1418:11:application',
          fs: ['at ./index.rsh:1647:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1643:15:application call to [unknown function] (defined at: ./index.rsh:1643:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv2050 = v2050;
        const cv2051 = v2316;
        const cv2054 = v6124;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_withdrawB0_424': {
        const v6158 = v2315[1];
        undefined /* setApiDetails */;
        ;
        const v6608 = v6158[stdlib.checkedBigNumberify('./index.rsh:1652:12:spread', stdlib.UInt_max, '0')];
        const v6609 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2314, ctc1), null);
        const v6610 = stdlib.fromSome(v6609, stdlib.checkedBigNumberify('./index.rsh:1653:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6611 = stdlib.ge256(v6610, v6608);
        stdlib.assert(v6611, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1654:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1656:15:application call to [unknown function] (defined at: ./index.rsh:1656:15:function exp)'],
          msg: 'Reserve B balances insufficient',
          who: 'Deployer'
          });
        const v6614 = stdlib.safeSub256(v6610, v6608);
        await stdlib.mapSet(map1, ctc7, v2314, ctc1, v6614);
        await txn3.getOutput('Trader_withdrawB', 'v6614', ctc1, v6614);
        const v6621 = await ctc.getContractAddress();
        const v6622 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6621];
        const v6623 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
        const v6627 = undefined /* Remote */;
        const v6628 = await txn3.getOutput('internal', 'v6627', ctc15, v6627);
        const v6630 = v6628[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
        const v6635 = stdlib.add(v2054, v6630);
        const v6636 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6630);
        stdlib.assert(v6636, {
          at: './index.rsh:1418:11:application',
          fs: ['at ./index.rsh:1660:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1656:15:application call to [unknown function] (defined at: ./index.rsh:1656:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv2050 = v2050;
        const cv2051 = v2316;
        const cv2054 = v6635;
        
        v2050 = cv2050;
        v2051 = cv2051;
        v2054 = cv2054;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc18],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v6671], secs: v6673, time: v6672, didSend: v1943, from: v6670 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v6674 = null;
  await txn3.getOutput('Protocol_delete', 'v6674', ctc0, v6674);
  return;
  
  
  
  
  };
export async function _Protocol_delete2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_delete2 expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc4], ['locked', ctc3]]);
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Object({
    closed: ctc3,
    manager: ctc4,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc6,
    remaining: ctc1,
    tokA: ctc7,
    tokB: ctc7,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc9 = stdlib.T_Tuple([]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v2050] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc8]);
  const v6669 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1714:5:application',
    fs: ['at ./index.rsh:1714:5:application call to [unknown function] (defined at: ./index.rsh:1714:5:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2050, v6669],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1714:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v6671], secs: v6673, time: v6672, didSend: v1943, from: v6670 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v6674 = null;
      const v6675 = await txn1.getOutput('Protocol_delete', 'v6674', ctc0, v6674);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6671], secs: v6673, time: v6672, didSend: v1943, from: v6670 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v6674 = null;
  const v6675 = await txn1.getOutput('Protocol_delete', 'v6674', ctc0, v6674);
  stdlib.protect(ctc0, await interact.out(v6671, v6675), {
    at: './index.rsh:1714:5:application',
    fs: ['at ./index.rsh:1714:5:application call to [unknown function] (defined at: ./index.rsh:1714:5:function exp)', 'at ./index.rsh:1715:6:application call to "k" (defined at: ./index.rsh:1714:5:function exp)'],
    msg: 'out',
    who: 'Protocol_delete'
    });
  
  return;
  
  
  
  };
export async function _Protocol_harvest4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Protocol_harvest4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc11,
    Provider_depositB0_424: ctc12,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc12,
    Provider_withdrawB0_424: ctc12,
    Trader_makeCommitment0_424: ctc12,
    Trader_swapAForB0_424: ctc12,
    Trader_withdrawA0_424: ctc12,
    Trader_withdrawB0_424: ctc12
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc5, ctc10]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2114 = ctc.selfAddress();
  const v2116 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1537:60:application call to [unknown function] (defined at: ./index.rsh:1537:60:function exp)', 'at ./index.rsh:1496:31:application call to "runProtocol_harvest0_424" (defined at: ./index.rsh:1537:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v2118 = v2116[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2119 = v2118.protoFee;
  const v2120 = v2118.lpFee;
  const v2121 = v2118.totFee;
  const v2122 = stdlib.lt256(v2119, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v2123 = stdlib.lt256(v2120, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v2124 = v2122 ? v2123 : false;
  let v2125;
  if (v2124) {
    const v2126 = stdlib.safeAdd256(v2120, v2119);
    const v2127 = stdlib.eq256(v2121, v2126);
    v2125 = v2127;
    }
  else {
    v2125 = false;
    }
  const v2128 = stdlib.lt256(v2121, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v2129 = v2125 ? v2128 : false;
  const v2130 = stdlib.gt256(v2121, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2131 = v2129 ? v2130 : false;
  stdlib.assert(v2131, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1537:60:application call to [unknown function] (defined at: ./index.rsh:1537:60:function exp)', 'at ./index.rsh:1496:31:application call to "runProtocol_harvest0_424" (defined at: ./index.rsh:1537:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v2135 = v2050.protoInfo;
  const v2136 = v2135.protoAddr;
  const v2137 = stdlib.addressEq(v2114, v2136);
  stdlib.assert(v2137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1531:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1538:21:application call to "chkProtoAddr" (defined at: ./index.rsh:1530:42:function exp)', 'at ./index.rsh:1537:60:application call to [unknown function] (defined at: ./index.rsh:1537:60:function exp)', 'at ./index.rsh:1496:31:application call to "runProtocol_harvest0_424" (defined at: ./index.rsh:1537:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v2145;
  if (v2124) {
    const v2146 = stdlib.safeAdd256(v2120, v2119);
    const v2147 = stdlib.eq256(v2121, v2146);
    v2145 = v2147;
    }
  else {
    v2145 = false;
    }
  const v2149 = v2145 ? v2128 : false;
  const v2151 = v2149 ? v2130 : false;
  stdlib.assert(v2151, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:332:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1539:16:application call to "chkFees" (defined at: ./index.rsh:332:21:function exp)', 'at ./index.rsh:1537:60:application call to [unknown function] (defined at: ./index.rsh:1537:60:function exp)', 'at ./index.rsh:1496:31:application call to "runProtocol_harvest0_424" (defined at: ./index.rsh:1537:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v2165 = ['Protocol_harvest0_424', v2116];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2165],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1537:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          const v2332 = v2318[stdlib.checkedBigNumberify('./index.rsh:1537:12:spread', stdlib.UInt_max, '0')];
          const v2333 = v2318[stdlib.checkedBigNumberify('./index.rsh:1537:12:spread', stdlib.UInt_max, '1')];
          const v2339 = v2333.protoFee;
          const v2340 = v2333.lpFee;
          const v2341 = v2333.totFee;
          const v2356 = (stdlib.le(await ctc.getBalance(), v2054) ? stdlib.checkedBigNumberify('./index.rsh:1542:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2054));
          const v2357 = stdlib.safeAdd(v2356, v2054);
          const v2358 = v2333.locked;
          const v2362 = stdlib.sub(v2357, v2356);
          sim_r.txns.push({
            kind: 'from',
            to: v2332,
            tok: undefined /* Nothing */
            });
          const v2363 = v2050.protoBals;
          const v2364 = v2363.A;
          const v2365 = await ctc.getContractAddress();
          const v2366 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2365];
          const v2367 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2332];
          const v2371 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1995,
              remote: ({
                accs: [v2332],
                apps: [v1995],
                bills: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v2366], [ctc17, v2367]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1412:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v2372 = await txn1.getOutput('internal', 'v2371', ctc15, v2371);
          const v2374 = v2372[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
          const v2379 = stdlib.add(v2362, v2374);
          const v2382 = v2363.B;
          const v2384 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2365];
          const v2385 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2332];
          const v2389 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1997,
              remote: ({
                accs: [v2332],
                apps: [v1997],
                bills: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v2384], [ctc17, v2385]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1412:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v2390 = await txn1.getOutput('internal', 'v2389', ctc15, v2389);
          const v2392 = v2390[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
          const v2397 = stdlib.add(v2379, v2392);
          const v2402 = {
            A: v2364,
            B: v2382
            };
          const v2403 = [v2402, v2356];
          const v2404 = await txn1.getOutput('Protocol_harvest', 'v2403', ctc16, v2403);
          
          const v2431 = v2333.protoAddr;
          const v2433 = {
            locked: v2358,
            lpFee: v2340,
            protoAddr: v2431,
            protoFee: v2339,
            totFee: v2341
            };
          const v2434 = [v2433];
          const v2435 = ['HarvestEvent', v2434];
          null;
          const v2437 = v2050.manager;
          const v2438 = v2050.price;
          const v2441 = v2050.remaining;
          const v2442 = v2050.tokA;
          const v2443 = v2050.tokB;
          const v2444 = v2050.tokenUnit;
          const v2445 = v2050.totalCommitment;
          const v2446 = v2050.unclaimed;
          const v2448 = {
            closed: v2358,
            manager: v2437,
            price: v2438,
            protoBals: v2047,
            protoInfo: v2333,
            remaining: v2441,
            tokA: v2442,
            tokB: v2443,
            tokenUnit: v2444,
            totalCommitment: v2445,
            unclaimed: v2446
            };
          const v13978 = v2448;
          const v13980 = v2397;
          const v13981 = v2448.closed;
          if (v13981) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v2332 = v2318[stdlib.checkedBigNumberify('./index.rsh:1537:12:spread', stdlib.UInt_max, '0')];
      const v2333 = v2318[stdlib.checkedBigNumberify('./index.rsh:1537:12:spread', stdlib.UInt_max, '1')];
      const v2335 = v2050.protoInfo;
      const v2336 = v2335.protoAddr;
      const v2337 = stdlib.addressEq(v2314, v2336);
      stdlib.assert(v2337, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1531:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1538:21:application call to "chkProtoAddr" (defined at: ./index.rsh:1530:42:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v2339 = v2333.protoFee;
      const v2340 = v2333.lpFee;
      const v2341 = v2333.totFee;
      const v2342 = stdlib.lt256(v2339, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2343 = stdlib.lt256(v2340, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2344 = v2342 ? v2343 : false;
      let v2345;
      if (v2344) {
        const v2346 = stdlib.safeAdd256(v2340, v2339);
        const v2347 = stdlib.eq256(v2341, v2346);
        v2345 = v2347;
        }
      else {
        v2345 = false;
        }
      const v2348 = stdlib.lt256(v2341, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2349 = v2345 ? v2348 : false;
      const v2350 = stdlib.gt256(v2341, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2351 = v2349 ? v2350 : false;
      stdlib.assert(v2351, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:332:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1539:16:application call to "chkFees" (defined at: ./index.rsh:332:21:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v2356 = (stdlib.le(await ctc.getBalance(), v2054) ? stdlib.checkedBigNumberify('./index.rsh:1542:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2054));
      const v2357 = stdlib.safeAdd(v2356, v2054);
      const v2358 = v2333.locked;
      const v2362 = stdlib.sub(v2357, v2356);
      ;
      const v2363 = v2050.protoBals;
      const v2364 = v2363.A;
      const v2365 = await ctc.getContractAddress();
      const v2366 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2365];
      const v2367 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2332];
      const v2371 = undefined /* Remote */;
      const v2372 = await txn1.getOutput('internal', 'v2371', ctc15, v2371);
      const v2374 = v2372[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
      const v2379 = stdlib.add(v2362, v2374);
      const v2380 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2374);
      stdlib.assert(v2380, {
        at: './index.rsh:1418:11:application',
        fs: ['at ./index.rsh:1545:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v2382 = v2363.B;
      const v2384 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2365];
      const v2385 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2332];
      const v2389 = undefined /* Remote */;
      const v2390 = await txn1.getOutput('internal', 'v2389', ctc15, v2389);
      const v2392 = v2390[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
      const v2397 = stdlib.add(v2379, v2392);
      const v2398 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2392);
      stdlib.assert(v2398, {
        at: './index.rsh:1418:11:application',
        fs: ['at ./index.rsh:1546:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v2402 = {
        A: v2364,
        B: v2382
        };
      const v2403 = [v2402, v2356];
      const v2404 = await txn1.getOutput('Protocol_harvest', 'v2403', ctc16, v2403);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v2318, v2404), {
          at: './index.rsh:1537:13:application',
          fs: ['at ./index.rsh:1537:13:application call to [unknown function] (defined at: ./index.rsh:1537:13:function exp)', 'at ./index.rsh:1547:14:application call to "k" (defined at: ./index.rsh:1541:15:function exp)', 'at ./index.rsh:1541:15:application call to [unknown function] (defined at: ./index.rsh:1541:15:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v2431 = v2333.protoAddr;
      const v2433 = {
        locked: v2358,
        lpFee: v2340,
        protoAddr: v2431,
        protoFee: v2339,
        totFee: v2341
        };
      const v2434 = [v2433];
      const v2435 = ['HarvestEvent', v2434];
      null;
      const v2437 = v2050.manager;
      const v2438 = v2050.price;
      const v2441 = v2050.remaining;
      const v2442 = v2050.tokA;
      const v2443 = v2050.tokB;
      const v2444 = v2050.tokenUnit;
      const v2445 = v2050.totalCommitment;
      const v2446 = v2050.unclaimed;
      const v2448 = {
        closed: v2358,
        manager: v2437,
        price: v2438,
        protoBals: v2047,
        protoInfo: v2333,
        remaining: v2441,
        tokA: v2442,
        tokB: v2443,
        tokenUnit: v2444,
        totalCommitment: v2445,
        unclaimed: v2446
        };
      const v13978 = v2448;
      const v13980 = v2397;
      const v13981 = v2448.closed;
      if (v13981) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_depositB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_depositB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_depositB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc18 = stdlib.T_Tuple([ctc3, ctc10, ctc17]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2169 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1560:38:application call to [unknown function] (defined at: ./index.rsh:1560:38:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_depositB0_424" (defined at: ./index.rsh:1560:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositB'
    });
  const v2177 = ['Provider_depositB0_424', v2169];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2177],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1560:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositB"
            });
          ;
          const v2933 = v2798[stdlib.checkedBigNumberify('./index.rsh:1560:12:spread', stdlib.UInt_max, '0')];
          const v2935 = await ctc.getContractAddress();
          const v2937 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
          const v2938 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2935];
          const v2939 = [v2314, v2935];
          const v2940 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2939];
          const v2944 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1997,
              remote: ({
                accs: [v2314, v2935],
                apps: [v1997],
                bills: stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc16, v2937], [ctc16, v2938], [ctc18, v2940]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1426:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v2945 = await txn1.getOutput('internal', 'v2944', ctc15, v2944);
          const v2947 = v2945[stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0')];
          const v2952 = stdlib.add(v2054, v2947);
          const v2954 = v2050.remaining;
          const v2955 = stdlib.safeAdd256(v2954, v2933);
          const v2956 = await txn1.getOutput('Provider_depositB', 'v2955', ctc1, v2955);
          
          const v2962 = v2050.closed;
          const v2963 = v2050.manager;
          const v2964 = v2050.price;
          const v2965 = v2050.protoBals;
          const v2966 = v2050.protoInfo;
          const v2968 = v2050.tokA;
          const v2969 = v2050.tokB;
          const v2970 = v2050.tokenUnit;
          const v2971 = v2050.totalCommitment;
          const v2972 = v2050.unclaimed;
          const v2973 = {
            closed: v2962,
            manager: v2963,
            price: v2964,
            protoBals: v2965,
            protoInfo: v2966,
            remaining: v2955,
            tokA: v2968,
            tokB: v2969,
            tokenUnit: v2970,
            totalCommitment: v2971,
            unclaimed: v2972
            };
          const v14098 = v2973;
          const v14100 = v2952;
          const v14101 = v2973.closed;
          if (v14101) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v2933 = v2798[stdlib.checkedBigNumberify('./index.rsh:1560:12:spread', stdlib.UInt_max, '0')];
      const v2935 = await ctc.getContractAddress();
      const v2937 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
      const v2938 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2935];
      const v2939 = [v2314, v2935];
      const v2940 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v2939];
      const v2944 = undefined /* Remote */;
      const v2945 = await txn1.getOutput('internal', 'v2944', ctc15, v2944);
      const v2947 = v2945[stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0')];
      const v2952 = stdlib.add(v2054, v2947);
      const v2953 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2947);
      stdlib.assert(v2953, {
        at: './index.rsh:1433:11:application',
        fs: ['at ./index.rsh:1563:37:application call to [unknown function] (defined at: ./index.rsh:1420:52:function exp)', 'at ./index.rsh:1562:15:application call to [unknown function] (defined at: ./index.rsh:1562:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositB'
        });
      const v2954 = v2050.remaining;
      const v2955 = stdlib.safeAdd256(v2954, v2933);
      const v2956 = await txn1.getOutput('Provider_depositB', 'v2955', ctc1, v2955);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v2798, v2956), {
          at: './index.rsh:1560:13:application',
          fs: ['at ./index.rsh:1560:13:application call to [unknown function] (defined at: ./index.rsh:1560:13:function exp)', 'at ./index.rsh:1565:14:application call to "k" (defined at: ./index.rsh:1562:15:function exp)', 'at ./index.rsh:1562:15:application call to [unknown function] (defined at: ./index.rsh:1562:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositB'
          });
        }
      else {
        }
      
      const v2962 = v2050.closed;
      const v2963 = v2050.manager;
      const v2964 = v2050.price;
      const v2965 = v2050.protoBals;
      const v2966 = v2050.protoInfo;
      const v2968 = v2050.tokA;
      const v2969 = v2050.tokB;
      const v2970 = v2050.tokenUnit;
      const v2971 = v2050.totalCommitment;
      const v2972 = v2050.unclaimed;
      const v2973 = {
        closed: v2962,
        manager: v2963,
        price: v2964,
        protoBals: v2965,
        protoInfo: v2966,
        remaining: v2955,
        tokA: v2968,
        tokB: v2969,
        tokenUnit: v2970,
        totalCommitment: v2971,
        unclaimed: v2972
        };
      const v14098 = v2973;
      const v14100 = v2952;
      const v14101 = v2973.closed;
      if (v14101) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_grant4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_grant4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_grant4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc13,
    Provider_grant0_424: ctc11,
    Provider_withdrawA0_424: ctc13,
    Provider_withdrawB0_424: ctc13,
    Trader_makeCommitment0_424: ctc13,
    Trader_swapAForB0_424: ctc13,
    Trader_withdrawA0_424: ctc13,
    Trader_withdrawB0_424: ctc13
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2215 = ctc.selfAddress();
  const v2217 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1609:36:application call to [unknown function] (defined at: ./index.rsh:1609:36:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_grant0_424" (defined at: ./index.rsh:1609:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Provider_grant'
    });
  const v2220 = v2050.manager;
  const v2221 = stdlib.addressEq(v2215, v2220);
  stdlib.assert(v2221, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1610:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1609:36:application call to [unknown function] (defined at: ./index.rsh:1609:36:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_grant0_424" (defined at: ./index.rsh:1609:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Provider_grant'
    });
  const v2228 = ['Provider_grant0_424', v2217];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2228],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1609:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_grant"
            });
          ;
          const v3457 = v3278[stdlib.checkedBigNumberify('./index.rsh:1609:12:spread', stdlib.UInt_max, '0')];
          const v3462 = true;
          const v3463 = await txn1.getOutput('Provider_grant', 'v3462', ctc6, v3462);
          
          const v3469 = v2050.closed;
          const v3471 = v2050.price;
          const v3472 = v2050.protoBals;
          const v3473 = v2050.protoInfo;
          const v3474 = v2050.remaining;
          const v3475 = v2050.tokA;
          const v3476 = v2050.tokB;
          const v3477 = v2050.tokenUnit;
          const v3478 = v2050.totalCommitment;
          const v3479 = v2050.unclaimed;
          const v3480 = {
            closed: v3469,
            manager: v3457,
            price: v3471,
            protoBals: v3472,
            protoInfo: v3473,
            remaining: v3474,
            tokA: v3475,
            tokB: v3476,
            tokenUnit: v3477,
            totalCommitment: v3478,
            unclaimed: v3479
            };
          const v14218 = v3480;
          const v14220 = v2054;
          const v14221 = v3480.closed;
          if (v14221) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v3457 = v3278[stdlib.checkedBigNumberify('./index.rsh:1609:12:spread', stdlib.UInt_max, '0')];
      const v3458 = v2050.manager;
      const v3459 = stdlib.addressEq(v2314, v3458);
      stdlib.assert(v3459, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1610:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1612:15:application call to [unknown function] (defined at: ./index.rsh:1612:15:function exp)'],
        msg: null,
        who: 'Provider_grant'
        });
      const v3462 = true;
      const v3463 = await txn1.getOutput('Provider_grant', 'v3462', ctc6, v3462);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v3278, v3463), {
          at: './index.rsh:1609:13:application',
          fs: ['at ./index.rsh:1609:13:application call to [unknown function] (defined at: ./index.rsh:1609:13:function exp)', 'at ./index.rsh:1613:14:application call to "k" (defined at: ./index.rsh:1612:15:function exp)', 'at ./index.rsh:1612:15:application call to [unknown function] (defined at: ./index.rsh:1612:15:function exp)'],
          msg: 'out',
          who: 'Provider_grant'
          });
        }
      else {
        }
      
      const v3469 = v2050.closed;
      const v3471 = v2050.price;
      const v3472 = v2050.protoBals;
      const v3473 = v2050.protoInfo;
      const v3474 = v2050.remaining;
      const v3475 = v2050.tokA;
      const v3476 = v2050.tokB;
      const v3477 = v2050.tokenUnit;
      const v3478 = v2050.totalCommitment;
      const v3479 = v2050.unclaimed;
      const v3480 = {
        closed: v3469,
        manager: v3457,
        price: v3471,
        protoBals: v3472,
        protoInfo: v3473,
        remaining: v3474,
        tokA: v3475,
        tokB: v3476,
        tokenUnit: v3477,
        totalCommitment: v3478,
        unclaimed: v3479
        };
      const v14218 = v3480;
      const v14220 = v2054;
      const v14221 = v3480.closed;
      if (v14221) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdrawA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdrawA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdrawA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2179 = ctc.selfAddress();
  const v2181 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1575:40:application call to [unknown function] (defined at: ./index.rsh:1575:40:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_withdrawA0_424" (defined at: ./index.rsh:1575:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawA'
    });
  const v2182 = v2181[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2184 = v2050.manager;
  const v2185 = stdlib.addressEq(v2179, v2184);
  stdlib.assert(v2185, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1576:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1575:40:application call to [unknown function] (defined at: ./index.rsh:1575:40:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_withdrawA0_424" (defined at: ./index.rsh:1575:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Provider_withdrawA'
    });
  const v2187 = v2050.unclaimed;
  const v2188 = stdlib.le256(v2182, v2187);
  stdlib.assert(v2188, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1577:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1575:40:application call to [unknown function] (defined at: ./index.rsh:1575:40:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_withdrawA0_424" (defined at: ./index.rsh:1575:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Provider_withdrawA'
    });
  const v2195 = ['Provider_withdrawA0_424', v2181];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2195],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1575:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawA"
            });
          ;
          const v3964 = v3758[stdlib.checkedBigNumberify('./index.rsh:1575:12:spread', stdlib.UInt_max, '0')];
          const v3965 = v2050.manager;
          const v3968 = v2050.unclaimed;
          const v3973 = stdlib.safeSub256(v3968, v3964);
          const v3974 = await txn1.getOutput('Provider_withdrawA', 'v3973', ctc1, v3973);
          
          const v3980 = await ctc.getContractAddress();
          const v3981 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3980];
          const v3982 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
          const v3986 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1995,
              remote: ({
                accs: [v2314],
                apps: [v1995],
                bills: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc16, v3981], [ctc16, v3982]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1412:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v3987 = await txn1.getOutput('internal', 'v3986', ctc15, v3986);
          const v3989 = v3987[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
          const v3994 = stdlib.add(v2054, v3989);
          const v3996 = v2050.closed;
          const v3998 = v2050.price;
          const v3999 = v2050.protoBals;
          const v4000 = v2050.protoInfo;
          const v4001 = v2050.remaining;
          const v4002 = v2050.tokA;
          const v4003 = v2050.tokB;
          const v4004 = v2050.tokenUnit;
          const v4005 = v2050.totalCommitment;
          const v4007 = {
            closed: v3996,
            manager: v3965,
            price: v3998,
            protoBals: v3999,
            protoInfo: v4000,
            remaining: v4001,
            tokA: v4002,
            tokB: v4003,
            tokenUnit: v4004,
            totalCommitment: v4005,
            unclaimed: v3973
            };
          const v14338 = v4007;
          const v14340 = v3994;
          const v14341 = v4007.closed;
          if (v14341) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v3964 = v3758[stdlib.checkedBigNumberify('./index.rsh:1575:12:spread', stdlib.UInt_max, '0')];
      const v3965 = v2050.manager;
      const v3966 = stdlib.addressEq(v2314, v3965);
      stdlib.assert(v3966, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1576:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
        msg: null,
        who: 'Provider_withdrawA'
        });
      const v3968 = v2050.unclaimed;
      const v3969 = stdlib.le256(v3964, v3968);
      stdlib.assert(v3969, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1577:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
        msg: null,
        who: 'Provider_withdrawA'
        });
      const v3973 = stdlib.safeSub256(v3968, v3964);
      const v3974 = await txn1.getOutput('Provider_withdrawA', 'v3973', ctc1, v3973);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v3758, v3974), {
          at: './index.rsh:1575:13:application',
          fs: ['at ./index.rsh:1575:13:application call to [unknown function] (defined at: ./index.rsh:1575:13:function exp)', 'at ./index.rsh:1581:14:application call to "k" (defined at: ./index.rsh:1579:15:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawA'
          });
        }
      else {
        }
      
      const v3980 = await ctc.getContractAddress();
      const v3981 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3980];
      const v3982 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
      const v3986 = undefined /* Remote */;
      const v3987 = await txn1.getOutput('internal', 'v3986', ctc15, v3986);
      const v3989 = v3987[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
      const v3994 = stdlib.add(v2054, v3989);
      const v3995 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3989);
      stdlib.assert(v3995, {
        at: './index.rsh:1418:11:application',
        fs: ['at ./index.rsh:1582:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1579:15:application call to [unknown function] (defined at: ./index.rsh:1579:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawA'
        });
      const v3996 = v2050.closed;
      const v3998 = v2050.price;
      const v3999 = v2050.protoBals;
      const v4000 = v2050.protoInfo;
      const v4001 = v2050.remaining;
      const v4002 = v2050.tokA;
      const v4003 = v2050.tokB;
      const v4004 = v2050.tokenUnit;
      const v4005 = v2050.totalCommitment;
      const v4007 = {
        closed: v3996,
        manager: v3965,
        price: v3998,
        protoBals: v3999,
        protoInfo: v4000,
        remaining: v4001,
        tokA: v4002,
        tokB: v4003,
        tokenUnit: v4004,
        totalCommitment: v4005,
        unclaimed: v3973
        };
      const v14338 = v4007;
      const v14340 = v3994;
      const v14341 = v4007.closed;
      if (v14341) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdrawB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdrawB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdrawB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2197 = ctc.selfAddress();
  const v2199 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1592:40:application call to [unknown function] (defined at: ./index.rsh:1592:40:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_withdrawB0_424" (defined at: ./index.rsh:1592:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawB'
    });
  const v2200 = v2199[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2202 = v2050.manager;
  const v2203 = stdlib.addressEq(v2197, v2202);
  stdlib.assert(v2203, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1593:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1592:40:application call to [unknown function] (defined at: ./index.rsh:1592:40:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_withdrawB0_424" (defined at: ./index.rsh:1592:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Provider_withdrawB'
    });
  const v2205 = v2050.remaining;
  const v2206 = stdlib.le256(v2200, v2205);
  stdlib.assert(v2206, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1594:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1592:40:application call to [unknown function] (defined at: ./index.rsh:1592:40:function exp)', 'at ./index.rsh:1496:31:application call to "runProvider_withdrawB0_424" (defined at: ./index.rsh:1592:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Provider_withdrawB'
    });
  const v2213 = ['Provider_withdrawB0_424', v2199];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2213],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1592:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawB"
            });
          ;
          const v4491 = v4238[stdlib.checkedBigNumberify('./index.rsh:1592:12:spread', stdlib.UInt_max, '0')];
          const v4492 = v2050.manager;
          const v4495 = v2050.remaining;
          const v4500 = stdlib.safeSub256(v4495, v4491);
          const v4501 = await txn1.getOutput('Provider_withdrawB', 'v4500', ctc1, v4500);
          
          const v4507 = await ctc.getContractAddress();
          const v4508 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4507];
          const v4509 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
          const v4513 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1997,
              remote: ({
                accs: [v2314],
                apps: [v1997],
                bills: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc16, v4508], [ctc16, v4509]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1412:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v4514 = await txn1.getOutput('internal', 'v4513', ctc15, v4513);
          const v4516 = v4514[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
          const v4521 = stdlib.add(v2054, v4516);
          const v4523 = v2050.closed;
          const v4525 = v2050.price;
          const v4526 = v2050.protoBals;
          const v4527 = v2050.protoInfo;
          const v4529 = v2050.tokA;
          const v4530 = v2050.tokB;
          const v4531 = v2050.tokenUnit;
          const v4532 = v2050.totalCommitment;
          const v4533 = v2050.unclaimed;
          const v4534 = {
            closed: v4523,
            manager: v4492,
            price: v4525,
            protoBals: v4526,
            protoInfo: v4527,
            remaining: v4500,
            tokA: v4529,
            tokB: v4530,
            tokenUnit: v4531,
            totalCommitment: v4532,
            unclaimed: v4533
            };
          const v14458 = v4534;
          const v14460 = v4521;
          const v14461 = v4534.closed;
          if (v14461) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v4491 = v4238[stdlib.checkedBigNumberify('./index.rsh:1592:12:spread', stdlib.UInt_max, '0')];
      const v4492 = v2050.manager;
      const v4493 = stdlib.addressEq(v2314, v4492);
      stdlib.assert(v4493, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1593:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
        msg: null,
        who: 'Provider_withdrawB'
        });
      const v4495 = v2050.remaining;
      const v4496 = stdlib.le256(v4491, v4495);
      stdlib.assert(v4496, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1594:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
        msg: null,
        who: 'Provider_withdrawB'
        });
      const v4500 = stdlib.safeSub256(v4495, v4491);
      const v4501 = await txn1.getOutput('Provider_withdrawB', 'v4500', ctc1, v4500);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v4238, v4501), {
          at: './index.rsh:1592:13:application',
          fs: ['at ./index.rsh:1592:13:application call to [unknown function] (defined at: ./index.rsh:1592:13:function exp)', 'at ./index.rsh:1598:14:application call to "k" (defined at: ./index.rsh:1596:15:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawB'
          });
        }
      else {
        }
      
      const v4507 = await ctc.getContractAddress();
      const v4508 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4507];
      const v4509 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
      const v4513 = undefined /* Remote */;
      const v4514 = await txn1.getOutput('internal', 'v4513', ctc15, v4513);
      const v4516 = v4514[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
      const v4521 = stdlib.add(v2054, v4516);
      const v4522 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4516);
      stdlib.assert(v4522, {
        at: './index.rsh:1418:11:application',
        fs: ['at ./index.rsh:1599:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1596:15:application call to [unknown function] (defined at: ./index.rsh:1596:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawB'
        });
      const v4523 = v2050.closed;
      const v4525 = v2050.price;
      const v4526 = v2050.protoBals;
      const v4527 = v2050.protoInfo;
      const v4529 = v2050.tokA;
      const v4530 = v2050.tokB;
      const v4531 = v2050.tokenUnit;
      const v4532 = v2050.totalCommitment;
      const v4533 = v2050.unclaimed;
      const v4534 = {
        closed: v4523,
        manager: v4492,
        price: v4525,
        protoBals: v4526,
        protoInfo: v4527,
        remaining: v4500,
        tokA: v4529,
        tokB: v4530,
        tokenUnit: v4531,
        totalCommitment: v4532,
        unclaimed: v4533
        };
      const v14458 = v4534;
      const v14460 = v4521;
      const v14461 = v4534.closed;
      if (v14461) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_makeCommitment4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_makeCommitment4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_makeCommitment4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2230 = ctc.selfAddress();
  const v2232 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1623:42:application call to [unknown function] (defined at: ./index.rsh:1623:42:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_makeCommitment0_424" (defined at: ./index.rsh:1623:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Trader_makeCommitment'
    });
  const v2235 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2230, ctc1), null);
  const v2236 = stdlib.fromSome(v2235, stdlib.checkedBigNumberify('./index.rsh:1624:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2237 = v2050.totalCommitment;
  const v2238 = stdlib.ge256(v2237, v2236);
  stdlib.assert(v2238, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1625:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1623:42:application call to [unknown function] (defined at: ./index.rsh:1623:42:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_makeCommitment0_424" (defined at: ./index.rsh:1623:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Trader_makeCommitment'
    });
  const v2245 = ['Trader_makeCommitment0_424', v2232];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2245],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1623:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_makeCommitment"
            });
          ;
          const v5018 = v4718[stdlib.checkedBigNumberify('./index.rsh:1623:12:spread', stdlib.UInt_max, '0')];
          const v5019 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc7, v2314, ctc1), null);
          const v5020 = stdlib.fromSome(v5019, stdlib.checkedBigNumberify('./index.rsh:1624:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5021 = v2050.totalCommitment;
          await stdlib.simMapSet(sim_r, 2, ctc7, v2314, ctc1, v5018);
          const v5025 = true;
          const v5026 = await txn1.getOutput('Trader_makeCommitment', 'v5025', ctc6, v5025);
          
          const v5032 = v2050.closed;
          const v5033 = v2050.manager;
          const v5034 = v2050.price;
          const v5035 = v2050.protoBals;
          const v5036 = v2050.protoInfo;
          const v5037 = v2050.remaining;
          const v5038 = v2050.tokA;
          const v5039 = v2050.tokB;
          const v5040 = v2050.tokenUnit;
          const v5042 = v2050.unclaimed;
          const v5044 = stdlib.safeSub256(v5021, v5020);
          const v5045 = stdlib.safeAdd256(v5044, v5018);
          const v5046 = {
            closed: v5032,
            manager: v5033,
            price: v5034,
            protoBals: v5035,
            protoInfo: v5036,
            remaining: v5037,
            tokA: v5038,
            tokB: v5039,
            tokenUnit: v5040,
            totalCommitment: v5045,
            unclaimed: v5042
            };
          const v14578 = v5046;
          const v14580 = v2054;
          const v14581 = v5046.closed;
          if (v14581) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v5018 = v4718[stdlib.checkedBigNumberify('./index.rsh:1623:12:spread', stdlib.UInt_max, '0')];
      const v5019 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc7, v2314, ctc1), null);
      const v5020 = stdlib.fromSome(v5019, stdlib.checkedBigNumberify('./index.rsh:1624:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5021 = v2050.totalCommitment;
      const v5022 = stdlib.ge256(v5021, v5020);
      stdlib.assert(v5022, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1625:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1627:15:application call to [unknown function] (defined at: ./index.rsh:1627:15:function exp)'],
        msg: null,
        who: 'Trader_makeCommitment'
        });
      await stdlib.mapSet(map2, ctc7, v2314, ctc1, v5018);
      const v5025 = true;
      const v5026 = await txn1.getOutput('Trader_makeCommitment', 'v5025', ctc6, v5025);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v4718, v5026), {
          at: './index.rsh:1623:13:application',
          fs: ['at ./index.rsh:1623:13:application call to [unknown function] (defined at: ./index.rsh:1623:13:function exp)', 'at ./index.rsh:1629:14:application call to "k" (defined at: ./index.rsh:1627:15:function exp)', 'at ./index.rsh:1627:15:application call to [unknown function] (defined at: ./index.rsh:1627:15:function exp)'],
          msg: 'out',
          who: 'Trader_makeCommitment'
          });
        }
      else {
        }
      
      const v5032 = v2050.closed;
      const v5033 = v2050.manager;
      const v5034 = v2050.price;
      const v5035 = v2050.protoBals;
      const v5036 = v2050.protoInfo;
      const v5037 = v2050.remaining;
      const v5038 = v2050.tokA;
      const v5039 = v2050.tokB;
      const v5040 = v2050.tokenUnit;
      const v5042 = v2050.unclaimed;
      const v5044 = stdlib.safeSub256(v5021, v5020);
      const v5045 = stdlib.safeAdd256(v5044, v5018);
      const v5046 = {
        closed: v5032,
        manager: v5033,
        price: v5034,
        protoBals: v5035,
        protoInfo: v5036,
        remaining: v5037,
        tokA: v5038,
        tokB: v5039,
        tokenUnit: v5040,
        totalCommitment: v5045,
        unclaimed: v5042
        };
      const v14578 = v5046;
      const v14580 = v2054;
      const v14581 = v5046.closed;
      if (v14581) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc18 = stdlib.T_Tuple([ctc3, ctc10, ctc17]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2281 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1709:35:application call to [unknown function] (defined at: ./index.rsh:1709:35:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_swapAForB0_424" (defined at: ./index.rsh:1709:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v2282 = v2281[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2287 = stdlib.safeDiv256(v2282, v2011);
  const v2289 = stdlib.safeMul256(v2287, v2003);
  const v2293 = stdlib.gt256(v2287, stdlib.checkedBigNumberify('./index.rsh:1676:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1676:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1710:25:application call to "doSwap" (defined at: ./index.rsh:1666:40:function exp)', 'at ./index.rsh:1709:35:application call to [unknown function] (defined at: ./index.rsh:1709:35:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_swapAForB0_424" (defined at: ./index.rsh:1709:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2295 = v2050.remaining;
  const v2296 = stdlib.ge256(v2295, v2289);
  stdlib.assert(v2296, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1677:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1710:25:application call to "doSwap" (defined at: ./index.rsh:1666:40:function exp)', 'at ./index.rsh:1709:35:application call to [unknown function] (defined at: ./index.rsh:1709:35:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_swapAForB0_424" (defined at: ./index.rsh:1709:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: null,
    who: 'Trader_swapAForB'
    });
  const v2303 = ['Trader_swapAForB0_424', v2281];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2303],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1709:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          ;
          const v5530 = v5198[stdlib.checkedBigNumberify('./index.rsh:1709:12:spread', stdlib.UInt_max, '0')];
          const v5532 = v2050.protoInfo;
          const v5533 = v5532.protoFee;
          const v5534 = stdlib.safeDiv256(v5530, v2011);
          const v5535 = stdlib.safeMod256(v5530, v2011);
          const v5536 = stdlib.safeMul256(v5534, v2003);
          const v5537 = stdlib.safeSub256(v5530, v5535);
          const v5538 = stdlib.safeMul256(v5533, v5537);
          const v5539 = stdlib.safeDiv256(v5538, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v5542 = v2050.remaining;
          const v5546 = await ctc.getContractAddress();
          const v5548 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
          const v5549 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5546];
          const v5550 = [v2314, v5546];
          const v5551 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5550];
          const v5555 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1995,
              remote: ({
                accs: [v2314, v5546],
                apps: [v1995],
                bills: stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc16, v5548], [ctc16, v5549], [ctc18, v5551]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1426:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v5556 = await txn1.getOutput('internal', 'v5555', ctc15, v5555);
          const v5558 = v5556[stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0')];
          const v5563 = stdlib.add(v2054, v5558);
          const v5565 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2314, ctc1), null);
          const v5566 = stdlib.fromSome(v5565, stdlib.checkedBigNumberify('./index.rsh:1680:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5567 = stdlib.safeAdd256(v5566, v5535);
          await stdlib.simMapSet(sim_r, 0, ctc7, v2314, ctc1, v5567);
          const v5568 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2314, ctc1), null);
          const v5569 = stdlib.fromSome(v5568, stdlib.checkedBigNumberify('./index.rsh:1681:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5570 = stdlib.safeAdd256(v5569, v5536);
          await stdlib.simMapSet(sim_r, 1, ctc7, v2314, ctc1, v5570);
          const v5571 = {
            A: v5535,
            B: v5536
            };
          const v5572 = await txn1.getOutput('Trader_swapAForB', 'v5571', ctc5, v5571);
          
          const v5580 = v2050.closed;
          const v5581 = v2050.manager;
          const v5582 = v2050.price;
          const v5583 = v2050.protoBals;
          const v5586 = v2050.tokA;
          const v5587 = v2050.tokB;
          const v5588 = v2050.tokenUnit;
          const v5589 = v2050.totalCommitment;
          const v5590 = v2050.unclaimed;
          const v5592 = stdlib.safeSub256(v5542, v5536);
          const v5594 = stdlib.safeAdd256(v5590, v5537);
          const v5595 = stdlib.safeSub256(v5594, v5539);
          const v5598 = v5583.A;
          const v5602 = stdlib.safeAdd256(v5598, v5539);
          const v5603 = v5583.B;
          const v5608 = {
            A: v5602,
            B: v5603
            };
          const v5609 = {
            closed: v5580,
            manager: v5581,
            price: v5582,
            protoBals: v5608,
            protoInfo: v5532,
            remaining: v5592,
            tokA: v5586,
            tokB: v5587,
            tokenUnit: v5588,
            totalCommitment: v5589,
            unclaimed: v5595
            };
          const v14698 = v5609;
          const v14700 = v5563;
          const v14701 = v5609.closed;
          if (v14701) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v5530 = v5198[stdlib.checkedBigNumberify('./index.rsh:1709:12:spread', stdlib.UInt_max, '0')];
      const v5532 = v2050.protoInfo;
      const v5533 = v5532.protoFee;
      const v5534 = stdlib.safeDiv256(v5530, v2011);
      const v5535 = stdlib.safeMod256(v5530, v2011);
      const v5536 = stdlib.safeMul256(v5534, v2003);
      const v5537 = stdlib.safeSub256(v5530, v5535);
      const v5538 = stdlib.safeMul256(v5533, v5537);
      const v5539 = stdlib.safeDiv256(v5538, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v5540 = stdlib.gt256(v5534, stdlib.checkedBigNumberify('./index.rsh:1676:39:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5540, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1676:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1710:25:application call to "doSwap" (defined at: ./index.rsh:1666:40:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v5542 = v2050.remaining;
      const v5543 = stdlib.ge256(v5542, v5536);
      stdlib.assert(v5543, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1677:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1710:25:application call to "doSwap" (defined at: ./index.rsh:1666:40:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
        msg: null,
        who: 'Trader_swapAForB'
        });
      const v5546 = await ctc.getContractAddress();
      const v5548 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
      const v5549 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5546];
      const v5550 = [v2314, v5546];
      const v5551 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5550];
      const v5555 = undefined /* Remote */;
      const v5556 = await txn1.getOutput('internal', 'v5555', ctc15, v5555);
      const v5558 = v5556[stdlib.checkedBigNumberify('./index.rsh:1433:11:application', stdlib.UInt_max, '0')];
      const v5563 = stdlib.add(v2054, v5558);
      const v5564 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5558);
      stdlib.assert(v5564, {
        at: './index.rsh:1433:11:application',
        fs: ['at ./index.rsh:1679:37:application call to [unknown function] (defined at: ./index.rsh:1420:52:function exp)', 'at ./index.rsh:1711:25:application call to "c" (defined at: ./index.rsh:1678:22:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapAForB'
        });
      const v5565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2314, ctc1), null);
      const v5566 = stdlib.fromSome(v5565, stdlib.checkedBigNumberify('./index.rsh:1680:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5567 = stdlib.safeAdd256(v5566, v5535);
      await stdlib.mapSet(map0, ctc7, v2314, ctc1, v5567);
      const v5568 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2314, ctc1), null);
      const v5569 = stdlib.fromSome(v5568, stdlib.checkedBigNumberify('./index.rsh:1681:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5570 = stdlib.safeAdd256(v5569, v5536);
      await stdlib.mapSet(map1, ctc7, v2314, ctc1, v5570);
      const v5571 = {
        A: v5535,
        B: v5536
        };
      const v5572 = await txn1.getOutput('Trader_swapAForB', 'v5571', ctc5, v5571);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v5198, v5572), {
          at: './index.rsh:1709:13:application',
          fs: ['at ./index.rsh:1709:13:application call to [unknown function] (defined at: ./index.rsh:1709:13:function exp)', 'at ./index.rsh:1682:14:application call to "k" (defined at: ./index.rsh:1711:21:function exp)', 'at ./index.rsh:1711:25:application call to "c" (defined at: ./index.rsh:1678:22:function exp)', 'at ./index.rsh:1711:21:application call to [unknown function] (defined at: ./index.rsh:1711:21:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v5580 = v2050.closed;
      const v5581 = v2050.manager;
      const v5582 = v2050.price;
      const v5583 = v2050.protoBals;
      const v5586 = v2050.tokA;
      const v5587 = v2050.tokB;
      const v5588 = v2050.tokenUnit;
      const v5589 = v2050.totalCommitment;
      const v5590 = v2050.unclaimed;
      const v5592 = stdlib.safeSub256(v5542, v5536);
      const v5594 = stdlib.safeAdd256(v5590, v5537);
      const v5595 = stdlib.safeSub256(v5594, v5539);
      const v5598 = v5583.A;
      const v5602 = stdlib.safeAdd256(v5598, v5539);
      const v5603 = v5583.B;
      const v5608 = {
        A: v5602,
        B: v5603
        };
      const v5609 = {
        closed: v5580,
        manager: v5581,
        price: v5582,
        protoBals: v5608,
        protoInfo: v5532,
        remaining: v5592,
        tokA: v5586,
        tokB: v5587,
        tokenUnit: v5588,
        totalCommitment: v5589,
        unclaimed: v5595
        };
      const v14698 = v5609;
      const v14700 = v5563;
      const v14701 = v5609.closed;
      if (v14701) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_withdrawA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_withdrawA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_withdrawA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2247 = ctc.selfAddress();
  const v2249 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1639:38:application call to [unknown function] (defined at: ./index.rsh:1639:38:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_withdrawA0_424" (defined at: ./index.rsh:1639:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Trader_withdrawA'
    });
  const v2250 = v2249[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2252 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2247, ctc1), null);
  const v2253 = stdlib.fromSome(v2252, stdlib.checkedBigNumberify('./index.rsh:1640:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2254 = stdlib.ge256(v2253, v2250);
  stdlib.assert(v2254, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1641:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1639:38:application call to [unknown function] (defined at: ./index.rsh:1639:38:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_withdrawA0_424" (defined at: ./index.rsh:1639:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'Reserve A balances insufficient',
    who: 'Trader_withdrawA'
    });
  const v2261 = ['Trader_withdrawA0_424', v2249];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2261],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1639:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_withdrawA"
            });
          ;
          const v6097 = v5678[stdlib.checkedBigNumberify('./index.rsh:1639:12:spread', stdlib.UInt_max, '0')];
          const v6098 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v2314, ctc1), null);
          const v6099 = stdlib.fromSome(v6098, stdlib.checkedBigNumberify('./index.rsh:1640:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6103 = stdlib.safeSub256(v6099, v6097);
          await stdlib.simMapSet(sim_r, 0, ctc7, v2314, ctc1, v6103);
          const v6104 = await txn1.getOutput('Trader_withdrawA', 'v6103', ctc1, v6103);
          
          const v6110 = await ctc.getContractAddress();
          const v6111 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6110];
          const v6112 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
          const v6116 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1995,
              remote: ({
                accs: [v2314],
                apps: [v1995],
                bills: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc16, v6111], [ctc16, v6112]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1412:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v6117 = await txn1.getOutput('internal', 'v6116', ctc15, v6116);
          const v6119 = v6117[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
          const v6124 = stdlib.add(v2054, v6119);
          const v14818 = v2050;
          const v14820 = v6124;
          const v14821 = v2050.closed;
          if (v14821) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v6097 = v5678[stdlib.checkedBigNumberify('./index.rsh:1639:12:spread', stdlib.UInt_max, '0')];
      const v6098 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2314, ctc1), null);
      const v6099 = stdlib.fromSome(v6098, stdlib.checkedBigNumberify('./index.rsh:1640:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6100 = stdlib.ge256(v6099, v6097);
      stdlib.assert(v6100, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1641:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1643:15:application call to [unknown function] (defined at: ./index.rsh:1643:15:function exp)'],
        msg: 'Reserve A balances insufficient',
        who: 'Trader_withdrawA'
        });
      const v6103 = stdlib.safeSub256(v6099, v6097);
      await stdlib.mapSet(map0, ctc7, v2314, ctc1, v6103);
      const v6104 = await txn1.getOutput('Trader_withdrawA', 'v6103', ctc1, v6103);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v5678, v6104), {
          at: './index.rsh:1639:13:application',
          fs: ['at ./index.rsh:1639:13:application call to [unknown function] (defined at: ./index.rsh:1639:13:function exp)', 'at ./index.rsh:1646:14:application call to "k" (defined at: ./index.rsh:1643:15:function exp)', 'at ./index.rsh:1643:15:application call to [unknown function] (defined at: ./index.rsh:1643:15:function exp)'],
          msg: 'out',
          who: 'Trader_withdrawA'
          });
        }
      else {
        }
      
      const v6110 = await ctc.getContractAddress();
      const v6111 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6110];
      const v6112 = [v1995, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
      const v6116 = undefined /* Remote */;
      const v6117 = await txn1.getOutput('internal', 'v6116', ctc15, v6116);
      const v6119 = v6117[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
      const v6124 = stdlib.add(v2054, v6119);
      const v6125 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6119);
      stdlib.assert(v6125, {
        at: './index.rsh:1418:11:application',
        fs: ['at ./index.rsh:1647:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1643:15:application call to [unknown function] (defined at: ./index.rsh:1643:15:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_withdrawA'
        });
      const v14818 = v2050;
      const v14820 = v6124;
      const v14821 = v2050.closed;
      if (v14821) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_withdrawB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_withdrawB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_withdrawB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc6]]);
  const ctc9 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc7,
    price: ctc1,
    protoBals: ctc5,
    protoInfo: ctc8,
    remaining: ctc1,
    tokA: ctc3,
    tokB: ctc3,
    tokenUnit: ctc1,
    totalCommitment: ctc1,
    unclaimed: ctc1
    });
  const ctc10 = stdlib.T_UInt;
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Protocol_harvest0_424: ctc12,
    Provider_depositB0_424: ctc11,
    Provider_grant0_424: ctc13,
    Provider_withdrawA0_424: ctc11,
    Provider_withdrawB0_424: ctc11,
    Trader_makeCommitment0_424: ctc11,
    Trader_swapAForB0_424: ctc11,
    Trader_withdrawA0_424: ctc11,
    Trader_withdrawB0_424: ctc11
    });
  const ctc15 = stdlib.T_Tuple([ctc10, ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc10, ctc7]);
  
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
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  
  const [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10]);
  const v2263 = ctc.selfAddress();
  const v2265 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1652:38:application call to [unknown function] (defined at: ./index.rsh:1652:38:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_withdrawB0_424" (defined at: ./index.rsh:1652:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'in',
    who: 'Trader_withdrawB'
    });
  const v2266 = v2265[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2268 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2263, ctc1), null);
  const v2269 = stdlib.fromSome(v2268, stdlib.checkedBigNumberify('./index.rsh:1653:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2270 = stdlib.ge256(v2269, v2266);
  stdlib.assert(v2270, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1654:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1652:38:application call to [unknown function] (defined at: ./index.rsh:1652:38:function exp)', 'at ./index.rsh:1496:31:application call to "runTrader_withdrawB0_424" (defined at: ./index.rsh:1652:12:function exp)', 'at ./index.rsh:1496:31:application call to [unknown function] (defined at: ./index.rsh:1496:31:function exp)'],
    msg: 'Reserve B balances insufficient',
    who: 'Trader_withdrawB'
    });
  const v2277 = ['Trader_withdrawB0_424', v2265];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1995, v1997, v2003, v2011, v2015, v2047, v2050, v2054, v2277],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1652:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
      
      switch (v2315[0]) {
        case 'Protocol_harvest0_424': {
          const v2318 = v2315[1];
          
          break;
          }
        case 'Provider_depositB0_424': {
          const v2798 = v2315[1];
          
          break;
          }
        case 'Provider_grant0_424': {
          const v3278 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawA0_424': {
          const v3758 = v2315[1];
          
          break;
          }
        case 'Provider_withdrawB0_424': {
          const v4238 = v2315[1];
          
          break;
          }
        case 'Trader_makeCommitment0_424': {
          const v4718 = v2315[1];
          
          break;
          }
        case 'Trader_swapAForB0_424': {
          const v5198 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawA0_424': {
          const v5678 = v2315[1];
          
          break;
          }
        case 'Trader_withdrawB0_424': {
          const v6158 = v2315[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_withdrawB"
            });
          ;
          const v6608 = v6158[stdlib.checkedBigNumberify('./index.rsh:1652:12:spread', stdlib.UInt_max, '0')];
          const v6609 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc7, v2314, ctc1), null);
          const v6610 = stdlib.fromSome(v6609, stdlib.checkedBigNumberify('./index.rsh:1653:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6614 = stdlib.safeSub256(v6610, v6608);
          await stdlib.simMapSet(sim_r, 1, ctc7, v2314, ctc1, v6614);
          const v6615 = await txn1.getOutput('Trader_withdrawB', 'v6614', ctc1, v6614);
          
          const v6621 = await ctc.getContractAddress();
          const v6622 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6621];
          const v6623 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
          const v6627 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v1997,
              remote: ({
                accs: [v2314],
                apps: [v1997],
                bills: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                boxes: [[ctc16, v6622], [ctc16, v6623]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1412:17:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v6628 = await txn1.getOutput('internal', 'v6627', ctc15, v6627);
          const v6630 = v6628[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
          const v6635 = stdlib.add(v2054, v6630);
          const v14938 = v2050;
          const v14940 = v6635;
          const v14941 = v2050.closed;
          if (v14941) {
            sim_r.isHalt = false;
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
    tys: [ctc3, ctc3, ctc1, ctc1, ctc4, ctc5, ctc9, ctc10, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v2315], secs: v2317, time: v2316, didSend: v1218, from: v2314 } = txn1;
  switch (v2315[0]) {
    case 'Protocol_harvest0_424': {
      const v2318 = v2315[1];
      return;
      break;
      }
    case 'Provider_depositB0_424': {
      const v2798 = v2315[1];
      return;
      break;
      }
    case 'Provider_grant0_424': {
      const v3278 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_424': {
      const v3758 = v2315[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_424': {
      const v4238 = v2315[1];
      return;
      break;
      }
    case 'Trader_makeCommitment0_424': {
      const v4718 = v2315[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_424': {
      const v5198 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawA0_424': {
      const v5678 = v2315[1];
      return;
      break;
      }
    case 'Trader_withdrawB0_424': {
      const v6158 = v2315[1];
      undefined /* setApiDetails */;
      ;
      const v6608 = v6158[stdlib.checkedBigNumberify('./index.rsh:1652:12:spread', stdlib.UInt_max, '0')];
      const v6609 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc7, v2314, ctc1), null);
      const v6610 = stdlib.fromSome(v6609, stdlib.checkedBigNumberify('./index.rsh:1653:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6611 = stdlib.ge256(v6610, v6608);
      stdlib.assert(v6611, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1654:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1656:15:application call to [unknown function] (defined at: ./index.rsh:1656:15:function exp)'],
        msg: 'Reserve B balances insufficient',
        who: 'Trader_withdrawB'
        });
      const v6614 = stdlib.safeSub256(v6610, v6608);
      await stdlib.mapSet(map1, ctc7, v2314, ctc1, v6614);
      const v6615 = await txn1.getOutput('Trader_withdrawB', 'v6614', ctc1, v6614);
      if (v1218) {
        stdlib.protect(ctc0, await interact.out(v6158, v6615), {
          at: './index.rsh:1652:13:application',
          fs: ['at ./index.rsh:1652:13:application call to [unknown function] (defined at: ./index.rsh:1652:13:function exp)', 'at ./index.rsh:1659:14:application call to "k" (defined at: ./index.rsh:1656:15:function exp)', 'at ./index.rsh:1656:15:application call to [unknown function] (defined at: ./index.rsh:1656:15:function exp)'],
          msg: 'out',
          who: 'Trader_withdrawB'
          });
        }
      else {
        }
      
      const v6621 = await ctc.getContractAddress();
      const v6622 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6621];
      const v6623 = [v1997, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2314];
      const v6627 = undefined /* Remote */;
      const v6628 = await txn1.getOutput('internal', 'v6627', ctc15, v6627);
      const v6630 = v6628[stdlib.checkedBigNumberify('./index.rsh:1418:11:application', stdlib.UInt_max, '0')];
      const v6635 = stdlib.add(v2054, v6630);
      const v6636 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6630);
      stdlib.assert(v6636, {
        at: './index.rsh:1418:11:application',
        fs: ['at ./index.rsh:1660:33:application call to [unknown function] (defined at: ./index.rsh:1406:41:function exp)', 'at ./index.rsh:1656:15:application call to [unknown function] (defined at: ./index.rsh:1656:15:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_withdrawB'
        });
      const v14938 = v2050;
      const v14940 = v6635;
      const v14941 = v2050.closed;
      if (v14941) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Protocol_delete(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_delete expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 2) {return _Protocol_delete2(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Protocol_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Protocol_harvest4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_depositB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_depositB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_depositB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_depositB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_grant4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_withdrawA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdrawA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdrawA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdrawA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_withdrawB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdrawB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdrawB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdrawB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_makeCommitment(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_makeCommitment expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_makeCommitment expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_makeCommitment4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_swapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_swapAForB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_withdrawA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_withdrawA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_withdrawA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_withdrawA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_withdrawB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_withdrawB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_withdrawB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_withdrawB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_depositB(uint256)uint256`, `Provider_grant(address)byte`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_makeCommitment(uint256)byte`, `Trader_swapAForB(uint256)(uint256,uint256)`, `Trader_withdrawA(uint256)uint256`, `Trader_withdrawB(uint256)uint256`, `_reachp_0((uint64,(uint256,(uint64,uint64,uint64),uint256)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`],
    pure: [`Info()((uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `commitment(address)uint256`, `price()uint256`, `reserve(address)(uint256,uint256)`, `state()((uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64,address,uint256,uint256,uint256,byte,uint256)`, `v_swapAForB(uint64)uint64`],
    sigs: [`Info()((uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_depositB(uint256)uint256`, `Provider_grant(address)byte`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_makeCommitment(uint256)byte`, `Trader_swapAForB(uint256)(uint256,uint256)`, `Trader_withdrawA(uint256)uint256`, `Trader_withdrawB(uint256)uint256`, `_reachp_0((uint64,(uint256,(uint64,uint64,uint64),uint256)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `commitment(address)uint256`, `price()uint256`, `reserve(address)(uint256,uint256)`, `state()((uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64,address,uint256,uint256,uint256,byte,uint256)`, `v_swapAForB(uint64)uint64`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCATAAggBgSqAqICggKyAtICgQECAfIC1N4BEAV/kgMmCwABAQEABWFwcElEAQIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQEcV/BRgEDAQQBCAQAinJyMRhBDjsoZEkiWzUBSSNbNQIhD1s1BSpkKWRQJwRkUCcHZFAnCGRQghMEBuK36gQN+OUwBBILlTAEG+77hwQ/V2nyBFZ844EEZDlFmARnOd1kBG7MciQEc+W3FwSBlUzUBJSlwAcEsdoCIQS2jv8wBL+KGKcEwJCnlwTCDix8BMU2MJIE4NlbtTYaAI4TAVoNggABDUsBcQ8xAS4NsA13AD8O8wEYAYgBAwGfDvsO8AFEAKkANAEhBAxBDis0ASELEkSID3Y0EFeBgTQQV0FAUDQQIQUjWFA0ECEGI1hQNQQxGSISRIAEFR98dTQEULAhDEMjrzULIQs0ARJEiA88NAsiWzUMgATFH8NXNAwWULA0DIgPQCg1C4AIAAAAAAAAGhI0C1CwNAs1BDEZIRASRLEisgElshA0BbIYIRCyGbOBoI0GNAcINQeIDxMiMgoyCYgPITQDQP+WQv+JNhoBNhoCNQs1DCOvKjQMNAtQUFA1CyEENAESRIgOjzQLIls1DDQLVwiiNQ2ABK0LvkQ0DBZQNA1QsDQMiA66NA0iVY0JDQwNFg0ZDRwNHw0iDSUNKA0rQv79NhoBNQsjryk0C1AhCq9QUDULQv+nNhoBNQsjrycENAtQIQqvUFA1C0L/kTYaATULI68nBzQLUCEKr1BQNQtC/3s2GgE1CyOvJwg0C1AhCq9QUDULQv9lNhoBNQsjr4ABBTQLUCEKr1BQNQtC/042GgE1CyOvgAEGNAtQIQqvUFA1C0L/NzYaATULI6+AAQc0C1AhCq9QUDULQv8gNhoBNQsjrycJNAtQIQqvUFA1C0L/CjQLVwAgNQ00C1cggTUMMQA0EFeBgVdgIBJENAxXACA1HzQMVyAgNR40DFdAIDUdNB8nBaQ0HicFpBBBDDw0HTQeNB+giA0+qDULNAs0HScFpBA0HTIDpRBEMgpgMgp4CTQOCTUcNAxXgAEXNRs0HDQNiA2PNBBXQUBJNQtXACA1GjIKNRkrNBYWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FrIYJwayGjQNSbIcsho0GrIaNBayMrMyCmA0CQk0ChcJFrcAPlcEAFA1GIAIAAAAAAAACUM0GFCwNBhJNRciWzUYIjQYEkQ0C1cgIDUXKzQVFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBWyGCcGsho0DUmyHLIaNBeyGjQVsjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAlVNAtQsDQLSTUNIls1CyI0CxJENBo0F1A0HBZQNQ2ACAAAAAAAAAljNA1QsDQNNQQpNB80HlA0HVA0DFdgIFA0GxZRBwhQUCERr1A1DYAE0+zjAjQNULA0GxZRBwg0EFcBIFA0EFchIFA0EVA0DFA0ECEHJFhQNBAhBiNYUDQQIQUjWFA0ECEIJFhQNBAhCSRYUDQQIQ0kWFAyBjQcNA4INBwJNBgINAsINQ41DzUQNBBXAAEXQQqpNBCBmAGvUCELMgY1AjUBKksBVwB/ZylLAVd/f2cnBEsBV/5/ZycHSwGB/QIhEVhnJwhMgfwDgS5YZyg0ARY0AhZQNAUWUGcxGSISRIgLq0L8nTQNVwEgNQsyCjUMKzQVFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBWyGCcKshoxAEmyHLIaNAxJshyyGjQLsho0FbIyszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAALgDQNULA0DUk1DCJbNQ0iNA0SRDQQIQckWDQLoIgKsjUMgAgAAAAAAAALizQMULA0DDUENBBXAAE0EFcBIFA0EFchIFA0EFdBQFA0EFeBgVA0DFA0ECEGI1hQNBAhBSNYUDQQIQgkWFA0ECEJJFhQNBAhDSRYUDIGNA40DQg1DjUPNRBC/roxADQQVwEgEkQhDDULgAgAAAAAAAANhjQLFlEHCFCwNAsWUQcINQQ0EFcAATQNVwEgUDQQVyEgUDQQV0FAUDQQV4GBUDQQIQckWFA0ECEGI1hQNBAhBSNYUDQQIQgkWFA0ECEJJFhQNBAhDSRYUDIGNQ81EEL+QzQNVwEgNQs0EFcBIDUXMQA0FxJENBAhDSRYNQw0CzQMpkQ0DDQLoYgJqjUNgAgAAAAAAAAPhTQNULA0DTUEKzQWFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBayGCcGshoxAEmyHLIaNAuyGjQWsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAA+SNAxQsDQMSTULIls1DCI0DBJENBBXAAE0F1A0EFchIFA0EFdBQFA0EFeBgVA0ECEHJFhQNBAhBiNYUDQQIQUjWFA0ECEIJFhQNBAhCSRYUDQNUDIGNA40DAg1DjUPNRBC/U80DVcBIDULNBBXASA1FzEANBcSRDQQIQckWDUMNAs0DKZENAw0C6GICLY1DYAIAAAAAAAAEZQ0DVCwNA01BCs0FRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQVshgnBrIaMQBJshyyGjQLsho0FbIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAARoTQMULA0DEk1CyJbNQwiNAwSRDQQVwABNBdQNBBXISBQNBBXQUBQNBBXgYFQNA1QNBAhBiNYUDQQIQUjWFA0ECEIJFhQNBAhCSRYUDQQIQ0kWFAyBjQONAwINQ41DzUQQvxbNA1XASA1CzIDKDIDJwQxAFCIB+qIB941FzQQIQkkWEk1DTQXp0QhDicEMQBQNAuICA8hDDUMgAgAAAAAAAAToTQMFlEHCFCwNAwWUQcINQQ0EFcAATQQVwEgUDQQVyEgUDQQV0FAUDQQV4GBUDQQIQckWFA0ECEGI1hQNBAhBSNYUDQQIQgkWFA0DTQXoYgHWzQLoIgHVVA0ECENJFhQMgY1DzUQQvuzsSKyASWyEDQFshizNA1XASA1CzQQV4GBNRk0CzQToogHIjUYNAs0E6qIBxg1FzQYNBSjiAcONQ00CzQXoYgHBDUMNBlXACA0DKOIBveAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQoogG0TULNBgyA6VENBAhByRYSTUbNA2nRDIKNRgrNBYWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FrIYJwqyGjEASbIcsho0GEmyHLIaNAyyGjQWsjKzMgpgNAkJNAoXCRa3AD5XBABQNRqACAAAAAAAABWzNBpQsDQaSTUYIls1GiI0GhJEIQ4qMQBQMgMoMgMqMQBQiAZLiAY/NBegiAYwiAaCIQ4pMQBQMgMoMgMpMQBQiAYtiAYhNA2giAYSiAZkNBc0DVA1GIAIAAAAAAAAFcM0GFCwNBg1BDQQV0FANRc0EFcAATQQVwEgUDQQVyEgUDQXVwAgNAugiAXTNBdXICBQUDQZUDQbNA2hiAXBUDQQIQYjWFA0ECEFI1hQNBAhCCRYUDQQIQkkWFA0ECENJFg0DKCIBZg0C6GIBZJQMgY0DjQaCDUONQ81EEL58DQNVwEgNQsyAygyAyoxAFCIBYCIBXRJNQ00C6dENA00C6GIBVw1DCEOKjEAUDQMiAWkgAgAAAAAAAAX1zQMULA0DDUEKzQWFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBayGCcGshoxAEmyHLIaNAuyGjQWsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAABfkNAxQsDQMSTULIls1DCI0DBJEMgY0DjQMCDUONQ9C+Tg0DVcBIDULMgMoMgMpMQBQiATIiAS8STUNNAunRDQNNAuhiASkNQwhDikxAFA0DIgE7IAIAAAAAAAAGdY0DFCwNAw1BCs0FRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQVshgnBrIaMQBJshyyGjQLsho0FbIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAZ4zQMULA0DEk1CyJbNQwiNAwSRDIGNA40DAg1DjUPQviANAEhBAxBA100ASELEkSIBE4yAygyAycENAtQiAQFiAP5NQRC9N40ASEEDEEDVTQBIQsSRIgEKDQQVyEgNQRC9MM0ASEEDEEDTTQBIQsSRIgEDTQLNQwyAygyAyo0DFCIA8GIA7UyAygyAyk0DFCIA7KIA6ZQNQRC9Io0ASEEDEECDTQBIQsSRIgD1DQQV4GBNBBXQUBQNBAhBSNYUDQQIQYjWFA0EFcBIFA0EFchIFA0ECEIJFhQNBAhByRYUDQQVwABUDQQIQkkWFA1BEL0NCJEQvQvNAsiWzUNNAtXCFg1DIAEd50S+TQNFlA0DFCwNA2IA4Q0DFcgGEk1CyNbNRY0CyEPWzUVNBYWATQVFgETRDQMVzggSTUUMgOlRDQMVwAgNRMoNRIrNAtXAAhQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQLIluyGIAErUPFIbIaMRgWshopNBYWULIaNBUWshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAfhNAxQsDQMSTULIls1GDQLVwiBSTUXVwAgNQ00F1cgIDUMNBdXQCA1CzQNJwWkNAwnBaQQQQEhNAs0DDQNoIgCS6g1ETQRNAsnBaQQNAsyA6UQRCI0GBJEgUCvNREqMQBQNBNQNBFQNA00DFA0C1A0F1dgIFA0F1eAAVBQMgNQNBYWUDQVFlA0FFAyA1AyA1AyBjQYNQ41DzUQQvZeiAJPgcCaDIgCZ7EisgElshCABggxADIJErIeJwmyH7O0PTUFNhoBNQtC/oeIAiM2GgE1C0LywYgCGDYaATULQvMyIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQWIAfaBqgSvIiJC9g02GgE1C0L9cTQBIQQSRIgBljQQV4GBNBBXQUBQNBAhBSNYUDQQIQYjWFA0EFcBIFA0EFchIFA0ECEIJFhQNBAhByRYUDQQVwABUDQQIQkkWFA1BELyJyI1EUL+5jQNVwGhNQtC859C9etC9tNC90dC+DhC+SlC+c5C+45C/EMiNQtC88s0ASEEEkSIARo0EFeBgTQQV0FAUDQQIQUjWFA0ECEGI1hQNQRC8dI0FhY0FRZQNBRQNBNQNBJQNBFQNBBQNA4WUCEEMgZC9UFITL9IiSKyASEMshCyB7IIs4k0ASEEEkSIAMAyAygyAycENAtQiACoiACcNQRC8YE0ASEEEkSIAKI0EFchIDUEQvFuNAEhBBJEiACPNAs1DDIDKDIDKjQMUIgAdIgAaDIDKDIDKTQMUIgAZYgAWVA1BELxPUL8XDYaATULQvxvQvylSIlMCUk1BjIJiACuiQlJQf/uSTUGMRY0ACEMCEk1AAlHAjgHMgoSRDgQIQwSRDgIEkSJNhoBFzULQvy/SRUkTAmvTFCJSVcBAEwiVU2JvkkWUQcIRQRNUIlJIls1FkkjWzUVSVcQIDUUSVcwIDUTSUgoNRJJV1BANRFJgZABIRJYNRCBogRbNQ6JIiESWDUQiUxJvUD+50sDiAAiQv7fIQw1A4lJIhJMNAISEUSJNAY0B0oPQf9LQv9TsUL+xTQGCDUGibGyCUL+uQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `5`,
    1000: `524`,
    1001: `525`,
    1002: `525`,
    1003: `528`,
    1004: `528`,
    1005: `529`,
    1006: `529`,
    1007: `530`,
    1008: `535`,
    1009: `535`,
    101: `6`,
    1010: `536`,
    1011: `537`,
    1012: `537`,
    1013: `538`,
    1014: `539`,
    1015: `539`,
    1016: `540`,
    1017: `541`,
    1018: `542`,
    1019: `543`,
    102: `7`,
    1020: `543`,
    1021: `543`,
    1022: `544`,
    1023: `544`,
    1024: `544`,
    1025: `545`,
    1026: `546`,
    1027: `546`,
    1028: `547`,
    1029: `547`,
    103: `8`,
    1030: `547`,
    1031: `547`,
    1032: `547`,
    1033: `547`,
    1034: `547`,
    1035: `547`,
    1036: `547`,
    1037: `547`,
    1038: `548`,
    1039: `548`,
    104: `9`,
    1040: `549`,
    1041: `550`,
    1042: `551`,
    1043: `551`,
    1044: `552`,
    1045: `553`,
    1046: `553`,
    1047: `554`,
    1048: `555`,
    1049: `556`,
    105: `10`,
    1050: `556`,
    1051: `557`,
    1052: `558`,
    1053: `558`,
    1054: `559`,
    1055: `560`,
    1056: `565`,
    1057: `565`,
    1058: `566`,
    1059: `566`,
    106: `11`,
    1060: `567`,
    1061: `568`,
    1062: `568`,
    1063: `569`,
    1064: `570`,
    1065: `571`,
    1066: `571`,
    1067: `572`,
    1068: `572`,
    1069: `572`,
    107: `11`,
    1070: `572`,
    1071: `572`,
    1072: `572`,
    1073: `572`,
    1074: `572`,
    1075: `572`,
    1076: `572`,
    1077: `573`,
    1078: `573`,
    1079: `574`,
    108: `12`,
    1080: `575`,
    1081: `576`,
    1082: `576`,
    1083: `577`,
    1084: `577`,
    1085: `578`,
    1086: `579`,
    1087: `579`,
    1088: `580`,
    1089: `580`,
    109: `13`,
    1090: `581`,
    1091: `582`,
    1092: `582`,
    1093: `583`,
    1094: `584`,
    1095: `584`,
    1096: `585`,
    1097: `585`,
    1098: `585`,
    1099: `586`,
    11: `2`,
    110: `14`,
    1100: `587`,
    1101: `587`,
    1102: `588`,
    1103: `589`,
    1104: `589`,
    1105: `589`,
    1106: `590`,
    1107: `591`,
    1108: `592`,
    1109: `592`,
    111: `15`,
    1110: `593`,
    1111: `594`,
    1112: `595`,
    1113: `595`,
    1114: `596`,
    1115: `596`,
    1116: `596`,
    1117: `596`,
    1118: `596`,
    1119: `596`,
    112: `15`,
    1120: `597`,
    1121: `597`,
    1122: `598`,
    1123: `599`,
    1124: `601`,
    1125: `601`,
    1126: `602`,
    1127: `603`,
    1128: `603`,
    1129: `603`,
    113: `16`,
    1130: `604`,
    1131: `604`,
    1132: `605`,
    1133: `605`,
    1134: `605`,
    1135: `606`,
    1136: `607`,
    1137: `607`,
    1138: `608`,
    1139: `608`,
    114: `16`,
    1140: `608`,
    1141: `609`,
    1142: `610`,
    1143: `610`,
    1144: `611`,
    1145: `612`,
    1146: `612`,
    1147: `613`,
    1148: `614`,
    1149: `614`,
    115: `17`,
    1150: `615`,
    1151: `615`,
    1152: `616`,
    1153: `617`,
    1154: `618`,
    1155: `619`,
    1156: `619`,
    1157: `620`,
    1158: `620`,
    1159: `621`,
    116: `18`,
    1160: `622`,
    1161: `623`,
    1162: `624`,
    1163: `624`,
    1164: `625`,
    1165: `625`,
    1166: `626`,
    1167: `627`,
    1168: `628`,
    1169: `629`,
    117: `18`,
    1170: `629`,
    1171: `630`,
    1172: `630`,
    1173: `631`,
    1174: `632`,
    1175: `633`,
    1176: `634`,
    1177: `634`,
    1178: `635`,
    1179: `635`,
    118: `19`,
    1180: `636`,
    1181: `637`,
    1182: `638`,
    1183: `639`,
    1184: `639`,
    1185: `640`,
    1186: `640`,
    1187: `641`,
    1188: `642`,
    1189: `643`,
    119: `20`,
    1190: `644`,
    1191: `644`,
    1192: `645`,
    1193: `645`,
    1194: `646`,
    1195: `646`,
    1196: `647`,
    1197: `648`,
    1198: `648`,
    1199: `649`,
    12: `2`,
    120: `21`,
    1200: `650`,
    1201: `650`,
    1202: `651`,
    1203: `652`,
    1204: `652`,
    1205: `653`,
    1206: `654`,
    1207: `654`,
    1208: `655`,
    1209: `655`,
    121: `22`,
    1210: `656`,
    1211: `656`,
    1212: `659`,
    1213: `659`,
    1214: `660`,
    1215: `660`,
    1216: `660`,
    1217: `661`,
    1218: `662`,
    1219: `662`,
    122: `23`,
    1220: `662`,
    1221: `664`,
    1222: `664`,
    1223: `665`,
    1224: `665`,
    1225: `665`,
    1226: `666`,
    1227: `667`,
    1228: `668`,
    1229: `668`,
    123: `24`,
    1230: `669`,
    1231: `669`,
    1232: `671`,
    1233: `671`,
    1234: `672`,
    1235: `672`,
    1236: `673`,
    1237: `674`,
    1238: `674`,
    1239: `675`,
    124: `24`,
    1240: `675`,
    1241: `675`,
    1242: `676`,
    1243: `677`,
    1244: `678`,
    1245: `678`,
    1246: `679`,
    1247: `679`,
    1248: `679`,
    1249: `680`,
    125: `25`,
    1250: `681`,
    1251: `681`,
    1252: `682`,
    1253: `682`,
    1254: `683`,
    1255: `683`,
    1256: `683`,
    1257: `684`,
    1258: `685`,
    1259: `685`,
    126: `26`,
    1260: `686`,
    1261: `686`,
    1262: `687`,
    1263: `687`,
    1264: `687`,
    1265: `688`,
    1266: `688`,
    1267: `689`,
    1268: `690`,
    1269: `691`,
    127: `27`,
    1270: `691`,
    1271: `692`,
    1272: `693`,
    1273: `693`,
    1274: `693`,
    1275: `694`,
    1276: `694`,
    1277: `695`,
    1278: `696`,
    1279: `697`,
    128: `27`,
    1280: `698`,
    1281: `698`,
    1282: `699`,
    1283: `700`,
    1284: `700`,
    1285: `701`,
    1286: `702`,
    1287: `703`,
    1288: `703`,
    1289: `704`,
    129: `28`,
    1290: `705`,
    1291: `706`,
    1292: `707`,
    1293: `707`,
    1294: `708`,
    1295: `709`,
    1296: `710`,
    1297: `712`,
    1298: `712`,
    1299: `712`,
    13: `2`,
    130: `29`,
    1300: `713`,
    1301: `713`,
    1302: `713`,
    1303: `716`,
    1304: `716`,
    1305: `717`,
    1306: `717`,
    1307: `717`,
    1308: `718`,
    1309: `718`,
    131: `30`,
    1310: `719`,
    1311: `719`,
    1312: `720`,
    1313: `720`,
    1314: `721`,
    1315: `722`,
    1316: `722`,
    1317: `723`,
    1318: `724`,
    1319: `725`,
    132: `30`,
    1320: `726`,
    1321: `726`,
    1322: `727`,
    1323: `727`,
    1324: `728`,
    1325: `729`,
    1326: `729`,
    1327: `730`,
    1328: `731`,
    1329: `731`,
    133: `31`,
    1330: `732`,
    1331: `733`,
    1332: `733`,
    1333: `734`,
    1334: `735`,
    1335: `736`,
    1336: `736`,
    1337: `737`,
    1338: `738`,
    1339: `739`,
    134: `32`,
    1340: `739`,
    1341: `740`,
    1342: `741`,
    1343: `741`,
    1344: `742`,
    1345: `742`,
    1346: `744`,
    1347: `744`,
    1348: `745`,
    1349: `745`,
    135: `34`,
    1350: `746`,
    1351: `746`,
    1352: `747`,
    1353: `747`,
    1354: `748`,
    1355: `749`,
    1356: `749`,
    1357: `750`,
    1358: `750`,
    1359: `751`,
    136: `34`,
    1360: `751`,
    1361: `753`,
    1362: `754`,
    1363: `754`,
    1364: `755`,
    1365: `755`,
    1366: `756`,
    1367: `756`,
    1368: `757`,
    1369: `757`,
    137: `34`,
    1370: `761`,
    1371: `761`,
    1372: `762`,
    1373: `762`,
    1374: `763`,
    1375: `768`,
    1376: `768`,
    1377: `769`,
    1378: `770`,
    1379: `770`,
    138: `34`,
    1380: `771`,
    1381: `772`,
    1382: `772`,
    1383: `773`,
    1384: `774`,
    1385: `775`,
    1386: `776`,
    1387: `776`,
    1388: `776`,
    1389: `777`,
    139: `34`,
    1390: `777`,
    1391: `777`,
    1392: `778`,
    1393: `779`,
    1394: `779`,
    1395: `780`,
    1396: `780`,
    1397: `780`,
    1398: `780`,
    1399: `780`,
    14: `2`,
    140: `34`,
    1400: `780`,
    1401: `780`,
    1402: `780`,
    1403: `780`,
    1404: `780`,
    1405: `781`,
    1406: `781`,
    1407: `782`,
    1408: `783`,
    1409: `784`,
    141: `34`,
    1410: `784`,
    1411: `785`,
    1412: `786`,
    1413: `786`,
    1414: `787`,
    1415: `788`,
    1416: `789`,
    1417: `789`,
    1418: `790`,
    1419: `791`,
    142: `34`,
    1420: `791`,
    1421: `792`,
    1422: `793`,
    1423: `798`,
    1424: `798`,
    1425: `799`,
    1426: `799`,
    1427: `800`,
    1428: `801`,
    1429: `802`,
    143: `34`,
    1430: `802`,
    1431: `803`,
    1432: `804`,
    1433: `804`,
    1434: `804`,
    1435: `805`,
    1436: `805`,
    1437: `806`,
    1438: `806`,
    1439: `806`,
    144: `34`,
    1440: `806`,
    1441: `806`,
    1442: `806`,
    1443: `806`,
    1444: `806`,
    1445: `806`,
    1446: `806`,
    1447: `807`,
    1448: `807`,
    1449: `808`,
    145: `34`,
    1450: `809`,
    1451: `810`,
    1452: `810`,
    1453: `811`,
    1454: `811`,
    1455: `812`,
    1456: `812`,
    1457: `813`,
    1458: `813`,
    1459: `813`,
    146: `34`,
    1460: `814`,
    1461: `814`,
    1462: `815`,
    1463: `815`,
    1464: `815`,
    1465: `816`,
    1466: `817`,
    1467: `817`,
    1468: `818`,
    1469: `818`,
    147: `34`,
    1470: `818`,
    1471: `819`,
    1472: `820`,
    1473: `820`,
    1474: `821`,
    1475: `821`,
    1476: `821`,
    1477: `822`,
    1478: `823`,
    1479: `823`,
    148: `34`,
    1480: `824`,
    1481: `824`,
    1482: `824`,
    1483: `825`,
    1484: `826`,
    1485: `826`,
    1486: `827`,
    1487: `828`,
    1488: `828`,
    1489: `829`,
    149: `34`,
    1490: `829`,
    1491: `830`,
    1492: `831`,
    1493: `832`,
    1494: `833`,
    1495: `833`,
    1496: `834`,
    1497: `834`,
    1498: `835`,
    1499: `836`,
    15: `2`,
    150: `34`,
    1500: `837`,
    1501: `838`,
    1502: `838`,
    1503: `839`,
    1504: `839`,
    1505: `840`,
    1506: `841`,
    1507: `842`,
    1508: `843`,
    1509: `843`,
    151: `34`,
    1510: `844`,
    1511: `844`,
    1512: `845`,
    1513: `846`,
    1514: `847`,
    1515: `848`,
    1516: `848`,
    1517: `849`,
    1518: `849`,
    1519: `850`,
    152: `34`,
    1520: `851`,
    1521: `852`,
    1522: `853`,
    1523: `853`,
    1524: `854`,
    1525: `854`,
    1526: `855`,
    1527: `855`,
    1528: `856`,
    1529: `857`,
    153: `34`,
    1530: `857`,
    1531: `858`,
    1532: `858`,
    1533: `859`,
    1534: `859`,
    1535: `860`,
    1536: `860`,
    1537: `860`,
    1538: `863`,
    1539: `863`,
    154: `34`,
    1540: `864`,
    1541: `864`,
    1542: `865`,
    1543: `865`,
    1544: `865`,
    1545: `866`,
    1546: `867`,
    1547: `872`,
    1548: `872`,
    1549: `873`,
    155: `34`,
    1550: `873`,
    1551: `874`,
    1552: `874`,
    1553: `874`,
    1554: `874`,
    1555: `874`,
    1556: `874`,
    1557: `874`,
    1558: `874`,
    1559: `874`,
    156: `34`,
    1560: `874`,
    1561: `875`,
    1562: `875`,
    1563: `876`,
    1564: `877`,
    1565: `877`,
    1566: `877`,
    1567: `878`,
    1568: `879`,
    1569: `880`,
    157: `34`,
    1570: `880`,
    1571: `881`,
    1572: `882`,
    1573: `882`,
    1574: `882`,
    1575: `883`,
    1576: `883`,
    1577: `884`,
    1578: `884`,
    1579: `885`,
    158: `34`,
    1580: `885`,
    1581: `885`,
    1582: `886`,
    1583: `886`,
    1584: `887`,
    1585: `887`,
    1586: `887`,
    1587: `888`,
    1588: `889`,
    1589: `889`,
    159: `34`,
    1590: `890`,
    1591: `890`,
    1592: `890`,
    1593: `891`,
    1594: `892`,
    1595: `892`,
    1596: `893`,
    1597: `893`,
    1598: `893`,
    1599: `894`,
    16: `2`,
    160: `34`,
    1600: `895`,
    1601: `895`,
    1602: `896`,
    1603: `896`,
    1604: `896`,
    1605: `897`,
    1606: `898`,
    1607: `898`,
    1608: `899`,
    1609: `899`,
    161: `34`,
    1610: `900`,
    1611: `901`,
    1612: `902`,
    1613: `903`,
    1614: `903`,
    1615: `904`,
    1616: `904`,
    1617: `905`,
    1618: `906`,
    1619: `907`,
    162: `34`,
    1620: `908`,
    1621: `908`,
    1622: `909`,
    1623: `909`,
    1624: `910`,
    1625: `911`,
    1626: `912`,
    1627: `913`,
    1628: `913`,
    1629: `914`,
    163: `34`,
    1630: `914`,
    1631: `915`,
    1632: `916`,
    1633: `917`,
    1634: `918`,
    1635: `918`,
    1636: `919`,
    1637: `919`,
    1638: `920`,
    1639: `921`,
    164: `34`,
    1640: `922`,
    1641: `923`,
    1642: `923`,
    1643: `924`,
    1644: `924`,
    1645: `925`,
    1646: `926`,
    1647: `927`,
    1648: `928`,
    1649: `928`,
    165: `34`,
    1650: `929`,
    1651: `929`,
    1652: `930`,
    1653: `930`,
    1654: `931`,
    1655: `931`,
    1656: `931`,
    1657: `934`,
    1658: `934`,
    1659: `935`,
    166: `34`,
    1660: `935`,
    1661: `935`,
    1662: `936`,
    1663: `936`,
    1664: `937`,
    1665: `937`,
    1666: `938`,
    1667: `938`,
    1668: `938`,
    1669: `939`,
    167: `34`,
    1670: `939`,
    1671: `940`,
    1672: `940`,
    1673: `941`,
    1674: `941`,
    1675: `942`,
    1676: `943`,
    1677: `948`,
    1678: `948`,
    1679: `949`,
    168: `34`,
    1680: `949`,
    1681: `950`,
    1682: `951`,
    1683: `952`,
    1684: `952`,
    1685: `953`,
    1686: `953`,
    1687: `954`,
    1688: `954`,
    1689: `955`,
    169: `34`,
    1690: `956`,
    1691: `961`,
    1692: `961`,
    1693: `962`,
    1694: `962`,
    1695: `963`,
    1696: `964`,
    1697: `964`,
    1698: `964`,
    1699: `965`,
    17: `2`,
    170: `34`,
    1700: `965`,
    1701: `966`,
    1702: `966`,
    1703: `966`,
    1704: `966`,
    1705: `966`,
    1706: `966`,
    1707: `966`,
    1708: `966`,
    1709: `966`,
    171: `34`,
    1710: `966`,
    1711: `967`,
    1712: `967`,
    1713: `968`,
    1714: `969`,
    1715: `970`,
    1716: `970`,
    1717: `971`,
    1718: `971`,
    1719: `972`,
    172: `34`,
    1720: `973`,
    1721: `973`,
    1722: `974`,
    1723: `975`,
    1724: `976`,
    1725: `977`,
    1726: `977`,
    1727: `978`,
    1728: `978`,
    1729: `979`,
    173: `34`,
    1730: `980`,
    1731: `980`,
    1732: `981`,
    1733: `982`,
    1734: `982`,
    1735: `983`,
    1736: `984`,
    1737: `984`,
    1738: `985`,
    1739: `986`,
    174: `34`,
    1740: `987`,
    1741: `987`,
    1742: `988`,
    1743: `989`,
    1744: `990`,
    1745: `990`,
    1746: `991`,
    1747: `992`,
    1748: `992`,
    1749: `993`,
    175: `34`,
    1750: `993`,
    1751: `995`,
    1752: `995`,
    1753: `996`,
    1754: `996`,
    1755: `997`,
    1756: `997`,
    1757: `998`,
    1758: `998`,
    1759: `999`,
    176: `34`,
    1760: `1000`,
    1761: `1000`,
    1762: `1001`,
    1763: `1001`,
    1764: `1002`,
    1765: `1002`,
    1766: `1003`,
    1767: `1003`,
    1768: `1006`,
    1769: `1006`,
    177: `34`,
    1770: `1007`,
    1771: `1007`,
    1772: `1008`,
    1773: `1013`,
    1774: `1013`,
    1775: `1014`,
    1776: `1015`,
    1777: `1015`,
    1778: `1016`,
    1779: `1017`,
    178: `34`,
    1780: `1017`,
    1781: `1018`,
    1782: `1019`,
    1783: `1020`,
    1784: `1021`,
    1785: `1021`,
    1786: `1021`,
    1787: `1022`,
    1788: `1022`,
    1789: `1022`,
    179: `34`,
    1790: `1023`,
    1791: `1024`,
    1792: `1024`,
    1793: `1025`,
    1794: `1025`,
    1795: `1025`,
    1796: `1025`,
    1797: `1025`,
    1798: `1025`,
    1799: `1025`,
    18: `2`,
    180: `34`,
    1800: `1025`,
    1801: `1025`,
    1802: `1025`,
    1803: `1026`,
    1804: `1026`,
    1805: `1027`,
    1806: `1028`,
    1807: `1029`,
    1808: `1029`,
    1809: `1030`,
    181: `34`,
    1810: `1031`,
    1811: `1031`,
    1812: `1032`,
    1813: `1033`,
    1814: `1034`,
    1815: `1034`,
    1816: `1035`,
    1817: `1036`,
    1818: `1036`,
    1819: `1037`,
    182: `34`,
    1820: `1038`,
    1821: `1043`,
    1822: `1043`,
    1823: `1044`,
    1824: `1044`,
    1825: `1044`,
    1826: `1045`,
    1827: `1045`,
    1828: `1046`,
    1829: `1047`,
    183: `34`,
    1830: `1047`,
    1831: `1048`,
    1832: `1048`,
    1833: `1048`,
    1834: `1049`,
    1835: `1050`,
    1836: `1050`,
    1837: `1051`,
    1838: `1051`,
    1839: `1051`,
    184: `34`,
    1840: `1052`,
    1841: `1053`,
    1842: `1053`,
    1843: `1054`,
    1844: `1054`,
    1845: `1054`,
    1846: `1055`,
    1847: `1056`,
    1848: `1056`,
    1849: `1057`,
    185: `34`,
    1850: `1057`,
    1851: `1058`,
    1852: `1059`,
    1853: `1060`,
    1854: `1061`,
    1855: `1061`,
    1856: `1062`,
    1857: `1062`,
    1858: `1063`,
    1859: `1064`,
    186: `34`,
    1860: `1065`,
    1861: `1066`,
    1862: `1066`,
    1863: `1067`,
    1864: `1067`,
    1865: `1068`,
    1866: `1069`,
    1867: `1070`,
    1868: `1071`,
    1869: `1071`,
    187: `34`,
    1870: `1072`,
    1871: `1072`,
    1872: `1073`,
    1873: `1074`,
    1874: `1075`,
    1875: `1076`,
    1876: `1076`,
    1877: `1077`,
    1878: `1077`,
    1879: `1078`,
    188: `34`,
    1880: `1079`,
    1881: `1080`,
    1882: `1081`,
    1883: `1081`,
    1884: `1082`,
    1885: `1083`,
    1886: `1083`,
    1887: `1084`,
    1888: `1084`,
    1889: `1085`,
    189: `34`,
    1890: `1085`,
    1891: `1086`,
    1892: `1087`,
    1893: `1087`,
    1894: `1088`,
    1895: `1088`,
    1896: `1089`,
    1897: `1089`,
    1898: `1090`,
    1899: `1090`,
    19: `2`,
    190: `34`,
    1900: `1090`,
    1901: `1093`,
    1902: `1093`,
    1903: `1094`,
    1904: `1094`,
    1905: `1094`,
    1906: `1095`,
    1907: `1095`,
    1908: `1096`,
    1909: `1096`,
    191: `34`,
    1910: `1097`,
    1911: `1097`,
    1912: `1097`,
    1913: `1098`,
    1914: `1098`,
    1915: `1099`,
    1916: `1099`,
    1917: `1100`,
    1918: `1100`,
    1919: `1101`,
    192: `34`,
    1920: `1102`,
    1921: `1107`,
    1922: `1107`,
    1923: `1108`,
    1924: `1108`,
    1925: `1109`,
    1926: `1110`,
    1927: `1111`,
    1928: `1111`,
    1929: `1112`,
    193: `34`,
    1930: `1112`,
    1931: `1113`,
    1932: `1113`,
    1933: `1114`,
    1934: `1115`,
    1935: `1120`,
    1936: `1120`,
    1937: `1121`,
    1938: `1121`,
    1939: `1122`,
    194: `34`,
    1940: `1123`,
    1941: `1123`,
    1942: `1123`,
    1943: `1124`,
    1944: `1124`,
    1945: `1125`,
    1946: `1125`,
    1947: `1125`,
    1948: `1125`,
    1949: `1125`,
    195: `34`,
    1950: `1125`,
    1951: `1125`,
    1952: `1125`,
    1953: `1125`,
    1954: `1125`,
    1955: `1126`,
    1956: `1126`,
    1957: `1127`,
    1958: `1128`,
    1959: `1129`,
    196: `34`,
    1960: `1129`,
    1961: `1130`,
    1962: `1130`,
    1963: `1131`,
    1964: `1132`,
    1965: `1132`,
    1966: `1133`,
    1967: `1134`,
    1968: `1135`,
    1969: `1136`,
    197: `34`,
    1970: `1136`,
    1971: `1137`,
    1972: `1137`,
    1973: `1138`,
    1974: `1139`,
    1975: `1139`,
    1976: `1140`,
    1977: `1141`,
    1978: `1141`,
    1979: `1142`,
    198: `34`,
    1980: `1143`,
    1981: `1143`,
    1982: `1144`,
    1983: `1145`,
    1984: `1146`,
    1985: `1146`,
    1986: `1147`,
    1987: `1148`,
    1988: `1149`,
    1989: `1149`,
    199: `34`,
    1990: `1150`,
    1991: `1151`,
    1992: `1151`,
    1993: `1152`,
    1994: `1152`,
    1995: `1154`,
    1996: `1154`,
    1997: `1155`,
    1998: `1155`,
    1999: `1156`,
    2: `2`,
    20: `2`,
    200: `34`,
    2000: `1156`,
    2001: `1157`,
    2002: `1157`,
    2003: `1158`,
    2004: `1159`,
    2005: `1159`,
    2006: `1160`,
    2007: `1160`,
    2008: `1161`,
    2009: `1161`,
    201: `34`,
    2010: `1162`,
    2011: `1162`,
    2012: `1165`,
    2013: `1165`,
    2014: `1166`,
    2015: `1166`,
    2016: `1167`,
    2017: `1172`,
    2018: `1172`,
    2019: `1173`,
    202: `34`,
    2020: `1174`,
    2021: `1174`,
    2022: `1175`,
    2023: `1176`,
    2024: `1176`,
    2025: `1177`,
    2026: `1178`,
    2027: `1179`,
    2028: `1180`,
    2029: `1180`,
    203: `34`,
    2030: `1180`,
    2031: `1181`,
    2032: `1181`,
    2033: `1181`,
    2034: `1182`,
    2035: `1183`,
    2036: `1183`,
    2037: `1184`,
    2038: `1184`,
    2039: `1184`,
    204: `34`,
    2040: `1184`,
    2041: `1184`,
    2042: `1184`,
    2043: `1184`,
    2044: `1184`,
    2045: `1184`,
    2046: `1184`,
    2047: `1185`,
    2048: `1185`,
    2049: `1186`,
    205: `34`,
    2050: `1187`,
    2051: `1188`,
    2052: `1188`,
    2053: `1189`,
    2054: `1190`,
    2055: `1190`,
    2056: `1191`,
    2057: `1192`,
    2058: `1193`,
    2059: `1193`,
    206: `34`,
    2060: `1194`,
    2061: `1195`,
    2062: `1195`,
    2063: `1196`,
    2064: `1197`,
    2065: `1202`,
    2066: `1202`,
    2067: `1203`,
    2068: `1203`,
    2069: `1203`,
    207: `34`,
    2070: `1204`,
    2071: `1204`,
    2072: `1205`,
    2073: `1206`,
    2074: `1206`,
    2075: `1207`,
    2076: `1207`,
    2077: `1207`,
    2078: `1208`,
    2079: `1209`,
    208: `34`,
    2080: `1209`,
    2081: `1210`,
    2082: `1210`,
    2083: `1210`,
    2084: `1211`,
    2085: `1212`,
    2086: `1212`,
    2087: `1213`,
    2088: `1213`,
    2089: `1213`,
    209: `34`,
    2090: `1214`,
    2091: `1215`,
    2092: `1215`,
    2093: `1216`,
    2094: `1217`,
    2095: `1217`,
    2096: `1218`,
    2097: `1218`,
    2098: `1219`,
    2099: `1220`,
    21: `2`,
    210: `34`,
    2100: `1221`,
    2101: `1222`,
    2102: `1222`,
    2103: `1223`,
    2104: `1223`,
    2105: `1224`,
    2106: `1225`,
    2107: `1226`,
    2108: `1227`,
    2109: `1227`,
    211: `34`,
    2110: `1228`,
    2111: `1228`,
    2112: `1229`,
    2113: `1230`,
    2114: `1231`,
    2115: `1232`,
    2116: `1232`,
    2117: `1233`,
    2118: `1233`,
    2119: `1234`,
    212: `34`,
    2120: `1235`,
    2121: `1236`,
    2122: `1237`,
    2123: `1237`,
    2124: `1238`,
    2125: `1238`,
    2126: `1239`,
    2127: `1240`,
    2128: `1241`,
    2129: `1242`,
    213: `34`,
    2130: `1242`,
    2131: `1243`,
    2132: `1243`,
    2133: `1244`,
    2134: `1244`,
    2135: `1245`,
    2136: `1246`,
    2137: `1246`,
    2138: `1247`,
    2139: `1247`,
    214: `34`,
    2140: `1248`,
    2141: `1248`,
    2142: `1249`,
    2143: `1249`,
    2144: `1249`,
    2145: `1252`,
    2146: `1252`,
    2147: `1253`,
    2148: `1253`,
    2149: `1253`,
    215: `34`,
    2150: `1254`,
    2151: `1254`,
    2152: `1255`,
    2153: `1255`,
    2154: `1257`,
    2155: `1258`,
    2156: `1258`,
    2157: `1259`,
    2158: `1259`,
    2159: `1260`,
    216: `34`,
    2160: `1260`,
    2161: `1261`,
    2162: `1262`,
    2163: `1262`,
    2164: `1262`,
    2165: `1263`,
    2166: `1263`,
    2167: `1263`,
    2168: `1264`,
    2169: `1264`,
    217: `34`,
    2170: `1265`,
    2171: `1265`,
    2172: `1266`,
    2173: `1266`,
    2174: `1267`,
    2175: `1268`,
    2176: `1269`,
    2177: `1270`,
    2178: `1270`,
    2179: `1271`,
    218: `34`,
    2180: `1271`,
    2181: `1272`,
    2182: `1273`,
    2183: `1278`,
    2184: `1278`,
    2185: `1279`,
    2186: `1279`,
    2187: `1280`,
    2188: `1280`,
    2189: `1281`,
    219: `34`,
    2190: `1282`,
    2191: `1282`,
    2192: `1283`,
    2193: `1283`,
    2194: `1283`,
    2195: `1284`,
    2196: `1284`,
    2197: `1285`,
    2198: `1285`,
    2199: `1286`,
    22: `2`,
    220: `34`,
    2200: `1286`,
    2201: `1286`,
    2202: `1286`,
    2203: `1286`,
    2204: `1286`,
    2205: `1286`,
    2206: `1286`,
    2207: `1286`,
    2208: `1286`,
    2209: `1287`,
    221: `34`,
    2210: `1287`,
    2211: `1288`,
    2212: `1289`,
    2213: `1289`,
    2214: `1289`,
    2215: `1290`,
    2216: `1291`,
    2217: `1292`,
    2218: `1292`,
    2219: `1293`,
    222: `34`,
    2220: `1294`,
    2221: `1294`,
    2222: `1294`,
    2223: `1295`,
    2224: `1295`,
    2225: `1296`,
    2226: `1296`,
    2227: `1297`,
    2228: `1297`,
    2229: `1297`,
    223: `34`,
    2230: `1298`,
    2231: `1298`,
    2232: `1299`,
    2233: `1299`,
    2234: `1299`,
    2235: `1300`,
    2236: `1301`,
    2237: `1301`,
    2238: `1302`,
    2239: `1302`,
    224: `34`,
    2240: `1302`,
    2241: `1303`,
    2242: `1304`,
    2243: `1304`,
    2244: `1305`,
    2245: `1305`,
    2246: `1305`,
    2247: `1306`,
    2248: `1307`,
    2249: `1307`,
    225: `34`,
    2250: `1308`,
    2251: `1308`,
    2252: `1308`,
    2253: `1309`,
    2254: `1310`,
    2255: `1310`,
    2256: `1311`,
    2257: `1311`,
    2258: `1312`,
    2259: `1313`,
    226: `34`,
    2260: `1314`,
    2261: `1315`,
    2262: `1315`,
    2263: `1316`,
    2264: `1316`,
    2265: `1317`,
    2266: `1318`,
    2267: `1319`,
    2268: `1320`,
    2269: `1320`,
    227: `34`,
    2270: `1321`,
    2271: `1321`,
    2272: `1322`,
    2273: `1323`,
    2274: `1324`,
    2275: `1325`,
    2276: `1325`,
    2277: `1326`,
    2278: `1326`,
    2279: `1327`,
    228: `34`,
    2280: `1328`,
    2281: `1329`,
    2282: `1330`,
    2283: `1330`,
    2284: `1331`,
    2285: `1331`,
    2286: `1332`,
    2287: `1333`,
    2288: `1333`,
    2289: `1333`,
    229: `34`,
    2290: `1334`,
    2291: `1334`,
    2292: `1335`,
    2293: `1336`,
    2294: `1336`,
    2295: `1336`,
    2296: `1337`,
    2297: `1338`,
    2298: `1338`,
    2299: `1339`,
    23: `2`,
    230: `34`,
    2300: `1339`,
    2301: `1340`,
    2302: `1341`,
    2303: `1342`,
    2304: `1343`,
    2305: `1343`,
    2306: `1344`,
    2307: `1344`,
    2308: `1345`,
    2309: `1345`,
    231: `34`,
    2310: `1346`,
    2311: `1346`,
    2312: `1346`,
    2313: `1350`,
    2314: `1351`,
    2315: `1352`,
    2316: `1352`,
    2317: `1353`,
    2318: `1354`,
    2319: `1354`,
    232: `35`,
    2320: `1355`,
    2321: `1355`,
    2322: `1356`,
    2323: `1356`,
    2324: `1357`,
    2325: `1359`,
    2326: `1359`,
    2327: `1360`,
    2328: `1360`,
    2329: `1360`,
    233: `35`,
    2330: `1361`,
    2331: `1361`,
    2332: `1362`,
    2333: `1362`,
    2334: `1363`,
    2335: `1363`,
    2336: `1363`,
    2337: `1364`,
    2338: `1364`,
    2339: `1365`,
    234: `35`,
    2340: `1365`,
    2341: `1366`,
    2342: `1366`,
    2343: `1367`,
    2344: `1368`,
    2345: `1368`,
    2346: `1368`,
    2347: `1369`,
    2348: `1369`,
    2349: `1370`,
    235: `36`,
    2350: `1370`,
    2351: `1371`,
    2352: `1371`,
    2353: `1372`,
    2354: `1373`,
    2355: `1373`,
    2356: `1373`,
    2357: `1374`,
    2358: `1374`,
    2359: `1375`,
    236: `36`,
    2360: `1375`,
    2361: `1376`,
    2362: `1376`,
    2363: `1377`,
    2364: `1378`,
    2365: `1378`,
    2366: `1378`,
    2367: `1379`,
    2368: `1379`,
    2369: `1380`,
    237: `36`,
    2370: `1380`,
    2371: `1381`,
    2372: `1381`,
    2373: `1382`,
    2374: `1383`,
    2375: `1383`,
    2376: `1383`,
    2377: `1384`,
    2378: `1384`,
    2379: `1385`,
    238: `36`,
    2380: `1385`,
    2381: `1386`,
    2382: `1386`,
    2383: `1386`,
    2384: `1387`,
    2385: `1387`,
    2386: `1388`,
    2387: `1389`,
    2388: `1389`,
    2389: `1389`,
    239: `36`,
    2390: `1390`,
    2391: `1390`,
    2392: `1390`,
    2393: `1390`,
    2394: `1390`,
    2395: `1390`,
    2396: `1390`,
    2397: `1390`,
    2398: `1390`,
    2399: `1390`,
    24: `2`,
    240: `36`,
    2400: `1390`,
    2401: `1390`,
    2402: `1390`,
    2403: `1390`,
    2404: `1390`,
    2405: `1390`,
    2406: `1390`,
    2407: `1390`,
    2408: `1390`,
    2409: `1390`,
    241: `36`,
    2410: `1390`,
    2411: `1390`,
    2412: `1390`,
    2413: `1390`,
    2414: `1390`,
    2415: `1390`,
    2416: `1390`,
    2417: `1390`,
    2418: `1390`,
    2419: `1390`,
    242: `36`,
    2420: `1390`,
    2421: `1390`,
    2422: `1390`,
    2423: `1390`,
    2424: `1391`,
    2425: `1392`,
    2426: `1392`,
    2427: `1392`,
    2428: `1393`,
    2429: `1393`,
    243: `36`,
    2430: `1394`,
    2431: `1394`,
    2432: `1395`,
    2433: `1395`,
    2434: `1396`,
    2435: `1397`,
    2436: `1403`,
    2437: `1403`,
    2438: `1404`,
    2439: `1404`,
    244: `36`,
    2440: `1405`,
    2441: `1406`,
    2442: `1407`,
    2443: `1408`,
    2444: `1408`,
    2445: `1409`,
    2446: `1409`,
    2447: `1410`,
    2448: `1411`,
    2449: `1417`,
    245: `36`,
    2450: `1417`,
    2451: `1418`,
    2452: `1418`,
    2453: `1419`,
    2454: `1420`,
    2455: `1420`,
    2456: `1421`,
    2457: `1422`,
    2458: `1423`,
    2459: `1424`,
    246: `36`,
    2460: `1424`,
    2461: `1425`,
    2462: `1425`,
    2463: `1426`,
    2464: `1427`,
    2465: `1427`,
    2466: `1428`,
    2467: `1429`,
    2468: `1429`,
    2469: `1430`,
    247: `36`,
    2470: `1431`,
    2471: `1431`,
    2472: `1432`,
    2473: `1433`,
    2474: `1434`,
    2475: `1434`,
    2476: `1435`,
    2477: `1436`,
    2478: `1437`,
    2479: `1437`,
    248: `36`,
    2480: `1438`,
    2481: `1439`,
    2482: `1439`,
    2483: `1440`,
    2484: `1440`,
    2485: `1442`,
    2486: `1442`,
    2487: `1443`,
    2488: `1443`,
    2489: `1444`,
    249: `36`,
    2490: `1444`,
    2491: `1445`,
    2492: `1445`,
    2493: `1446`,
    2494: `1447`,
    2495: `1447`,
    2496: `1448`,
    2497: `1448`,
    2498: `1449`,
    2499: `1449`,
    25: `2`,
    250: `36`,
    2500: `1451`,
    2501: `1452`,
    2502: `1452`,
    2503: `1453`,
    2504: `1453`,
    2505: `1454`,
    2506: `1454`,
    2507: `1455`,
    2508: `1455`,
    2509: `1459`,
    251: `36`,
    2510: `1459`,
    2511: `1460`,
    2512: `1460`,
    2513: `1461`,
    2514: `1467`,
    2515: `1467`,
    2516: `1468`,
    2517: `1469`,
    2518: `1469`,
    2519: `1470`,
    252: `36`,
    2520: `1471`,
    2521: `1471`,
    2522: `1472`,
    2523: `1473`,
    2524: `1474`,
    2525: `1475`,
    2526: `1475`,
    2527: `1475`,
    2528: `1476`,
    2529: `1476`,
    253: `36`,
    2530: `1476`,
    2531: `1477`,
    2532: `1478`,
    2533: `1478`,
    2534: `1479`,
    2535: `1479`,
    2536: `1479`,
    2537: `1479`,
    2538: `1479`,
    2539: `1479`,
    254: `36`,
    2540: `1479`,
    2541: `1479`,
    2542: `1479`,
    2543: `1479`,
    2544: `1480`,
    2545: `1480`,
    2546: `1481`,
    2547: `1482`,
    2548: `1483`,
    2549: `1483`,
    255: `36`,
    2550: `1484`,
    2551: `1485`,
    2552: `1485`,
    2553: `1486`,
    2554: `1487`,
    2555: `1488`,
    2556: `1488`,
    2557: `1489`,
    2558: `1490`,
    2559: `1490`,
    256: `36`,
    2560: `1491`,
    2561: `1492`,
    2562: `1499`,
    2563: `1499`,
    2564: `1500`,
    2565: `1501`,
    2566: `1501`,
    2567: `1502`,
    2568: `1503`,
    2569: `1503`,
    257: `36`,
    2570: `1504`,
    2571: `1505`,
    2572: `1505`,
    2573: `1506`,
    2574: `1507`,
    2575: `1507`,
    2576: `1508`,
    2577: `1509`,
    2578: `1509`,
    2579: `1509`,
    258: `36`,
    2580: `1510`,
    2581: `1510`,
    2582: `1510`,
    2583: `1511`,
    2584: `1511`,
    2585: `1512`,
    2586: `1513`,
    2587: `1513`,
    2588: `1513`,
    2589: `1514`,
    259: `36`,
    2590: `1514`,
    2591: `1514`,
    2592: `1516`,
    2593: `1516`,
    2594: `1517`,
    2595: `1518`,
    2596: `1518`,
    2597: `1519`,
    2598: `1520`,
    2599: `1520`,
    26: `2`,
    260: `36`,
    2600: `1521`,
    2601: `1522`,
    2602: `1522`,
    2603: `1523`,
    2604: `1524`,
    2605: `1524`,
    2606: `1525`,
    2607: `1526`,
    2608: `1526`,
    2609: `1526`,
    261: `36`,
    2610: `1527`,
    2611: `1527`,
    2612: `1527`,
    2613: `1528`,
    2614: `1528`,
    2615: `1529`,
    2616: `1530`,
    2617: `1530`,
    2618: `1530`,
    2619: `1531`,
    262: `36`,
    2620: `1531`,
    2621: `1531`,
    2622: `1532`,
    2623: `1532`,
    2624: `1533`,
    2625: `1533`,
    2626: `1534`,
    2627: `1535`,
    2628: `1535`,
    2629: `1536`,
    263: `36`,
    2630: `1536`,
    2631: `1536`,
    2632: `1536`,
    2633: `1536`,
    2634: `1536`,
    2635: `1536`,
    2636: `1536`,
    2637: `1536`,
    2638: `1536`,
    2639: `1537`,
    264: `36`,
    2640: `1537`,
    2641: `1538`,
    2642: `1539`,
    2643: `1540`,
    2644: `1540`,
    2645: `1541`,
    2646: `1541`,
    2647: `1542`,
    2648: `1542`,
    2649: `1543`,
    265: `36`,
    2650: `1543`,
    2651: `1543`,
    2652: `1544`,
    2653: `1544`,
    2654: `1545`,
    2655: `1545`,
    2656: `1546`,
    2657: `1546`,
    2658: `1546`,
    2659: `1547`,
    266: `36`,
    2660: `1547`,
    2661: `1548`,
    2662: `1548`,
    2663: `1548`,
    2664: `1549`,
    2665: `1550`,
    2666: `1550`,
    2667: `1551`,
    2668: `1551`,
    2669: `1551`,
    267: `36`,
    2670: `1552`,
    2671: `1553`,
    2672: `1553`,
    2673: `1554`,
    2674: `1554`,
    2675: `1554`,
    2676: `1555`,
    2677: `1555`,
    2678: `1556`,
    2679: `1557`,
    268: `36`,
    2680: `1557`,
    2681: `1557`,
    2682: `1558`,
    2683: `1558`,
    2684: `1559`,
    2685: `1559`,
    2686: `1559`,
    2687: `1560`,
    2688: `1561`,
    2689: `1562`,
    269: `36`,
    2690: `1562`,
    2691: `1563`,
    2692: `1564`,
    2693: `1564`,
    2694: `1565`,
    2695: `1565`,
    2696: `1566`,
    2697: `1567`,
    2698: `1567`,
    2699: `1567`,
    27: `2`,
    270: `36`,
    2700: `1568`,
    2701: `1569`,
    2702: `1569`,
    2703: `1570`,
    2704: `1570`,
    2705: `1571`,
    2706: `1572`,
    2707: `1573`,
    2708: `1574`,
    2709: `1574`,
    271: `36`,
    2710: `1575`,
    2711: `1575`,
    2712: `1576`,
    2713: `1577`,
    2714: `1578`,
    2715: `1579`,
    2716: `1579`,
    2717: `1580`,
    2718: `1580`,
    2719: `1581`,
    272: `36`,
    2720: `1582`,
    2721: `1583`,
    2722: `1584`,
    2723: `1584`,
    2724: `1585`,
    2725: `1585`,
    2726: `1586`,
    2727: `1587`,
    2728: `1588`,
    2729: `1589`,
    273: `36`,
    2730: `1589`,
    2731: `1590`,
    2732: `1590`,
    2733: `1591`,
    2734: `1592`,
    2735: `1593`,
    2736: `1593`,
    2737: `1594`,
    2738: `1595`,
    2739: `1595`,
    274: `36`,
    2740: `1595`,
    2741: `1596`,
    2742: `1596`,
    2743: `1597`,
    2744: `1598`,
    2745: `1598`,
    2746: `1598`,
    2747: `1599`,
    2748: `1600`,
    2749: `1600`,
    275: `38`,
    2750: `1601`,
    2751: `1601`,
    2752: `1602`,
    2753: `1602`,
    2754: `1603`,
    2755: `1604`,
    2756: `1604`,
    2757: `1605`,
    2758: `1605`,
    2759: `1606`,
    276: `43`,
    2760: `1606`,
    2761: `1607`,
    2762: `1607`,
    2763: `1607`,
    2764: `1610`,
    2765: `1610`,
    2766: `1611`,
    2767: `1611`,
    2768: `1611`,
    2769: `1612`,
    277: `43`,
    2770: `1612`,
    2771: `1613`,
    2772: `1613`,
    2773: `1615`,
    2774: `1616`,
    2775: `1616`,
    2776: `1617`,
    2777: `1618`,
    2778: `1618`,
    2779: `1619`,
    278: `44`,
    2780: `1620`,
    2781: `1620`,
    2782: `1620`,
    2783: `1621`,
    2784: `1621`,
    2785: `1621`,
    2786: `1622`,
    2787: `1623`,
    2788: `1623`,
    2789: `1624`,
    279: `44`,
    2790: `1624`,
    2791: `1625`,
    2792: `1626`,
    2793: `1631`,
    2794: `1631`,
    2795: `1632`,
    2796: `1632`,
    2797: `1633`,
    2798: `1634`,
    2799: `1634`,
    28: `2`,
    280: `45`,
    2800: `1634`,
    2801: `1635`,
    2802: `1635`,
    2803: `1636`,
    2804: `1636`,
    2805: `1637`,
    2806: `1638`,
    2807: `1638`,
    2808: `1639`,
    2809: `1640`,
    281: `46`,
    2810: `1640`,
    2811: `1641`,
    2812: `1641`,
    2813: `1641`,
    2814: `1642`,
    2815: `1642`,
    2816: `1642`,
    2817: `1642`,
    2818: `1642`,
    2819: `1642`,
    282: `46`,
    2820: `1642`,
    2821: `1642`,
    2822: `1642`,
    2823: `1642`,
    2824: `1643`,
    2825: `1643`,
    2826: `1644`,
    2827: `1645`,
    2828: `1646`,
    2829: `1646`,
    283: `46`,
    2830: `1647`,
    2831: `1647`,
    2832: `1648`,
    2833: `1649`,
    2834: `1649`,
    2835: `1650`,
    2836: `1651`,
    2837: `1652`,
    2838: `1653`,
    2839: `1653`,
    284: `47`,
    2840: `1654`,
    2841: `1654`,
    2842: `1655`,
    2843: `1656`,
    2844: `1656`,
    2845: `1657`,
    2846: `1658`,
    2847: `1658`,
    2848: `1659`,
    2849: `1660`,
    285: `47`,
    2850: `1660`,
    2851: `1661`,
    2852: `1662`,
    2853: `1663`,
    2854: `1663`,
    2855: `1664`,
    2856: `1665`,
    2857: `1666`,
    2858: `1666`,
    2859: `1667`,
    286: `48`,
    2860: `1668`,
    2861: `1668`,
    2862: `1669`,
    2863: `1669`,
    2864: `1671`,
    2865: `1671`,
    2866: `1672`,
    2867: `1672`,
    2868: `1673`,
    2869: `1673`,
    287: `48`,
    2870: `1674`,
    2871: `1674`,
    2872: `1675`,
    2873: `1676`,
    2874: `1676`,
    2875: `1677`,
    2876: `1677`,
    2877: `1678`,
    2878: `1678`,
    2879: `1679`,
    288: `49`,
    2880: `1679`,
    2881: `1682`,
    2882: `1682`,
    2883: `1683`,
    2884: `1683`,
    2885: `1684`,
    2886: `1689`,
    2887: `1689`,
    2888: `1690`,
    2889: `1691`,
    289: `50`,
    2890: `1691`,
    2891: `1692`,
    2892: `1693`,
    2893: `1693`,
    2894: `1694`,
    2895: `1695`,
    2896: `1696`,
    2897: `1697`,
    2898: `1697`,
    2899: `1697`,
    29: `2`,
    290: `53`,
    2900: `1698`,
    2901: `1698`,
    2902: `1698`,
    2903: `1699`,
    2904: `1700`,
    2905: `1700`,
    2906: `1701`,
    2907: `1701`,
    2908: `1701`,
    2909: `1701`,
    291: `53`,
    2910: `1701`,
    2911: `1701`,
    2912: `1701`,
    2913: `1701`,
    2914: `1701`,
    2915: `1701`,
    2916: `1702`,
    2917: `1702`,
    2918: `1703`,
    2919: `1704`,
    292: `53`,
    2920: `1705`,
    2921: `1705`,
    2922: `1706`,
    2923: `1707`,
    2924: `1707`,
    2925: `1708`,
    2926: `1709`,
    2927: `1710`,
    2928: `1710`,
    2929: `1711`,
    293: `54`,
    2930: `1712`,
    2931: `1712`,
    2932: `1713`,
    2933: `1714`,
    2934: `1719`,
    2935: `1719`,
    2936: `1720`,
    2937: `1720`,
    2938: `1721`,
    2939: `1721`,
    294: `54`,
    2940: `1722`,
    2941: `1723`,
    2942: `1723`,
    2943: `1724`,
    2944: `1724`,
    2945: `1725`,
    2946: `1725`,
    2947: `1725`,
    2948: `1728`,
    2949: `1728`,
    295: `55`,
    2950: `1729`,
    2951: `1729`,
    2952: `1729`,
    2953: `1730`,
    2954: `1730`,
    2955: `1731`,
    2956: `1731`,
    2957: `1733`,
    2958: `1734`,
    2959: `1734`,
    296: `55`,
    2960: `1735`,
    2961: `1736`,
    2962: `1736`,
    2963: `1737`,
    2964: `1738`,
    2965: `1738`,
    2966: `1738`,
    2967: `1739`,
    2968: `1739`,
    2969: `1739`,
    297: `55`,
    2970: `1740`,
    2971: `1741`,
    2972: `1741`,
    2973: `1742`,
    2974: `1742`,
    2975: `1743`,
    2976: `1744`,
    2977: `1749`,
    2978: `1749`,
    2979: `1750`,
    298: `56`,
    2980: `1750`,
    2981: `1751`,
    2982: `1752`,
    2983: `1752`,
    2984: `1752`,
    2985: `1753`,
    2986: `1753`,
    2987: `1754`,
    2988: `1754`,
    2989: `1755`,
    299: `56`,
    2990: `1756`,
    2991: `1756`,
    2992: `1757`,
    2993: `1758`,
    2994: `1758`,
    2995: `1759`,
    2996: `1759`,
    2997: `1759`,
    2998: `1760`,
    2999: `1760`,
    3: `2`,
    30: `2`,
    300: `57`,
    3000: `1760`,
    3001: `1760`,
    3002: `1760`,
    3003: `1760`,
    3004: `1760`,
    3005: `1760`,
    3006: `1760`,
    3007: `1760`,
    3008: `1761`,
    3009: `1761`,
    301: `57`,
    3010: `1762`,
    3011: `1763`,
    3012: `1764`,
    3013: `1764`,
    3014: `1765`,
    3015: `1765`,
    3016: `1766`,
    3017: `1767`,
    3018: `1767`,
    3019: `1768`,
    302: `57`,
    3020: `1769`,
    3021: `1770`,
    3022: `1771`,
    3023: `1771`,
    3024: `1772`,
    3025: `1772`,
    3026: `1773`,
    3027: `1774`,
    3028: `1774`,
    3029: `1775`,
    303: `58`,
    3030: `1776`,
    3031: `1776`,
    3032: `1777`,
    3033: `1778`,
    3034: `1778`,
    3035: `1779`,
    3036: `1780`,
    3037: `1781`,
    3038: `1781`,
    3039: `1782`,
    304: `59`,
    3040: `1783`,
    3041: `1784`,
    3042: `1784`,
    3043: `1785`,
    3044: `1786`,
    3045: `1786`,
    3046: `1787`,
    3047: `1787`,
    3048: `1789`,
    3049: `1789`,
    305: `59`,
    3050: `1790`,
    3051: `1790`,
    3052: `1791`,
    3053: `1791`,
    3054: `1792`,
    3055: `1792`,
    3056: `1793`,
    3057: `1794`,
    3058: `1794`,
    3059: `1795`,
    306: `60`,
    3060: `1795`,
    3061: `1796`,
    3062: `1796`,
    3063: `1797`,
    3064: `1797`,
    3065: `1800`,
    3066: `1800`,
    3067: `1801`,
    3068: `1801`,
    3069: `1802`,
    307: `60`,
    3070: `1807`,
    3071: `1807`,
    3072: `1808`,
    3073: `1809`,
    3074: `1809`,
    3075: `1810`,
    3076: `1811`,
    3077: `1811`,
    3078: `1812`,
    3079: `1813`,
    308: `61`,
    3080: `1814`,
    3081: `1815`,
    3082: `1815`,
    3083: `1815`,
    3084: `1816`,
    3085: `1816`,
    3086: `1816`,
    3087: `1817`,
    3088: `1818`,
    3089: `1818`,
    309: `62`,
    3090: `1819`,
    3091: `1819`,
    3092: `1819`,
    3093: `1819`,
    3094: `1819`,
    3095: `1819`,
    3096: `1819`,
    3097: `1819`,
    3098: `1819`,
    3099: `1819`,
    31: `2`,
    310: `63`,
    3100: `1820`,
    3101: `1820`,
    3102: `1821`,
    3103: `1822`,
    3104: `1823`,
    3105: `1823`,
    3106: `1824`,
    3107: `1825`,
    3108: `1825`,
    3109: `1826`,
    311: `64`,
    3110: `1827`,
    3111: `1828`,
    3112: `1828`,
    3113: `1829`,
    3114: `1830`,
    3115: `1830`,
    3116: `1831`,
    3117: `1832`,
    3118: `1837`,
    3119: `1837`,
    312: `64`,
    3120: `1838`,
    3121: `1838`,
    3122: `1839`,
    3123: `1839`,
    3124: `1840`,
    3125: `1841`,
    3126: `1841`,
    3127: `1842`,
    3128: `1842`,
    3129: `1843`,
    313: `65`,
    3130: `1843`,
    3131: `1843`,
    3132: `1846`,
    3133: `1846`,
    3134: `1847`,
    3135: `1847`,
    3136: `1848`,
    3137: `1849`,
    3138: `1849`,
    3139: `1849`,
    314: `65`,
    3140: `1850`,
    3141: `1850`,
    3142: `1851`,
    3143: `1851`,
    3144: `1852`,
    3145: `1853`,
    3146: `1856`,
    3147: `1856`,
    3148: `1856`,
    3149: `1857`,
    315: `66`,
    3150: `1857`,
    3151: `1859`,
    3152: `1860`,
    3153: `1860`,
    3154: `1861`,
    3155: `1861`,
    3156: `1862`,
    3157: `1862`,
    3158: `1863`,
    3159: `1864`,
    316: `67`,
    3160: `1864`,
    3161: `1864`,
    3162: `1865`,
    3163: `1865`,
    3164: `1865`,
    3165: `1866`,
    3166: `1866`,
    3167: `1867`,
    3168: `1867`,
    3169: `1867`,
    317: `68`,
    3170: `1870`,
    3171: `1870`,
    3172: `1871`,
    3173: `1871`,
    3174: `1872`,
    3175: `1873`,
    3176: `1873`,
    3177: `1873`,
    3178: `1874`,
    3179: `1874`,
    318: `69`,
    3180: `1875`,
    3181: `1875`,
    3182: `1876`,
    3183: `1877`,
    3184: `1880`,
    3185: `1880`,
    3186: `1880`,
    3187: `1881`,
    3188: `1881`,
    3189: `1882`,
    319: `69`,
    3190: `1882`,
    3191: `1882`,
    3192: `1883`,
    3193: `1883`,
    3194: `1884`,
    3195: `1884`,
    3196: `1884`,
    3197: `1887`,
    3198: `1887`,
    3199: `1888`,
    32: `2`,
    320: `71`,
    3200: `1888`,
    3201: `1889`,
    3202: `1890`,
    3203: `1890`,
    3204: `1890`,
    3205: `1891`,
    3206: `1891`,
    3207: `1892`,
    3208: `1892`,
    3209: `1893`,
    321: `71`,
    3210: `1894`,
    3211: `1897`,
    3212: `1897`,
    3213: `1897`,
    3214: `1898`,
    3215: `1898`,
    3216: `1899`,
    3217: `1899`,
    3218: `1900`,
    3219: `1900`,
    322: `72`,
    3220: `1902`,
    3221: `1903`,
    3222: `1903`,
    3223: `1904`,
    3224: `1905`,
    3225: `1905`,
    3226: `1906`,
    3227: `1907`,
    3228: `1907`,
    3229: `1907`,
    323: `73`,
    3230: `1908`,
    3231: `1908`,
    3232: `1908`,
    3233: `1909`,
    3234: `1909`,
    3235: `1911`,
    3236: `1912`,
    3237: `1912`,
    3238: `1913`,
    3239: `1914`,
    324: `74`,
    3240: `1914`,
    3241: `1915`,
    3242: `1916`,
    3243: `1916`,
    3244: `1916`,
    3245: `1917`,
    3246: `1917`,
    3247: `1917`,
    3248: `1918`,
    3249: `1919`,
    325: `77`,
    3250: `1919`,
    3251: `1920`,
    3252: `1920`,
    3253: `1920`,
    3254: `1923`,
    3255: `1923`,
    3256: `1924`,
    3257: `1924`,
    3258: `1925`,
    3259: `1926`,
    326: `77`,
    3260: `1926`,
    3261: `1926`,
    3262: `1927`,
    3263: `1927`,
    3264: `1928`,
    3265: `1928`,
    3266: `1929`,
    3267: `1930`,
    3268: `1933`,
    3269: `1933`,
    327: `77`,
    3270: `1933`,
    3271: `1934`,
    3272: `1934`,
    3273: `1935`,
    3274: `1935`,
    3275: `1935`,
    3276: `1936`,
    3277: `1936`,
    3278: `1937`,
    3279: `1937`,
    328: `77`,
    3280: `1937`,
    3281: `1938`,
    3282: `1939`,
    3283: `1939`,
    3284: `1940`,
    3285: `1940`,
    3286: `1941`,
    3287: `1942`,
    3288: `1943`,
    3289: `1944`,
    329: `77`,
    3290: `1944`,
    3291: `1945`,
    3292: `1945`,
    3293: `1946`,
    3294: `1947`,
    3295: `1948`,
    3296: `1949`,
    3297: `1949`,
    3298: `1950`,
    3299: `1950`,
    33: `2`,
    330: `77`,
    3300: `1950`,
    3301: `1951`,
    3302: `1952`,
    3303: `1952`,
    3304: `1953`,
    3305: `1953`,
    3306: `1953`,
    3307: `1954`,
    3308: `1955`,
    3309: `1955`,
    331: `78`,
    3310: `1956`,
    3311: `1956`,
    3312: `1957`,
    3313: `1958`,
    3314: `1959`,
    3315: `1960`,
    3316: `1960`,
    3317: `1961`,
    3318: `1961`,
    3319: `1962`,
    332: `78`,
    3320: `1963`,
    3321: `1964`,
    3322: `1965`,
    3323: `1965`,
    3324: `1966`,
    3325: `1966`,
    3326: `1966`,
    3327: `1967`,
    3328: `1968`,
    3329: `1968`,
    333: `79`,
    3330: `1969`,
    3331: `1969`,
    3332: `1970`,
    3333: `1971`,
    3334: `1972`,
    3335: `1973`,
    3336: `1973`,
    3337: `1974`,
    3338: `1974`,
    3339: `1974`,
    334: `80`,
    3340: `1977`,
    3341: `1978`,
    3342: `1981`,
    3343: `1981`,
    3344: `1981`,
    3345: `1984`,
    3346: `1984`,
    3347: `1985`,
    3348: `1986`,
    3349: `1987`,
    335: `82`,
    3350: `1987`,
    3351: `1988`,
    3352: `1988`,
    3353: `1989`,
    3354: `1989`,
    3355: `1989`,
    3356: `1990`,
    3357: `1990`,
    3358: `1991`,
    3359: `1991`,
    336: `82`,
    3360: `1991`,
    3361: `1991`,
    3362: `1991`,
    3363: `1991`,
    3364: `1992`,
    3365: `1992`,
    3366: `1993`,
    3367: `1994`,
    3368: `1995`,
    3369: `1995`,
    337: `83`,
    3370: `1996`,
    3371: `1997`,
    3372: `1999`,
    3373: `1999`,
    3374: `2000`,
    3375: `2000`,
    3376: `2000`,
    3377: `2001`,
    3378: `2001`,
    3379: `2002`,
    338: `88`,
    3380: `2002`,
    3381: `2002`,
    3382: `2003`,
    3383: `2004`,
    3384: `2004`,
    3385: `2005`,
    3386: `2006`,
    3387: `2007`,
    3388: `2007`,
    3389: `2008`,
    339: `89`,
    3390: `2008`,
    3391: `2009`,
    3392: `2009`,
    3393: `2010`,
    3394: `2011`,
    3395: `2011`,
    3396: `2012`,
    3397: `2012`,
    3398: `2013`,
    3399: `2014`,
    34: `2`,
    340: `90`,
    3400: `2015`,
    3401: `2015`,
    3402: `2016`,
    3403: `2017`,
    3404: `2018`,
    3405: `2019`,
    3406: `2024`,
    3407: `2024`,
    3408: `2025`,
    3409: `2025`,
    341: `90`,
    3410: `2025`,
    3411: `2026`,
    3412: `2027`,
    3413: `2027`,
    3414: `2028`,
    3415: `2028`,
    3416: `2029`,
    3417: `2030`,
    3418: `2035`,
    3419: `2035`,
    342: `93`,
    3420: `2036`,
    3421: `2036`,
    3422: `2036`,
    3423: `2037`,
    3424: `2037`,
    3425: `2038`,
    3426: `2039`,
    3427: `2039`,
    3428: `2040`,
    3429: `2041`,
    343: `93`,
    3430: `2041`,
    3431: `2042`,
    3432: `2042`,
    3433: `2042`,
    3434: `2043`,
    3435: `2044`,
    3436: `2045`,
    3437: `2045`,
    3438: `2046`,
    3439: `2046`,
    344: `94`,
    3440: `2047`,
    3441: `2048`,
    3442: `2048`,
    3443: `2049`,
    3444: `2050`,
    3445: `2050`,
    3446: `2051`,
    3447: `2052`,
    3448: `2052`,
    3449: `2053`,
    345: `94`,
    3450: `2054`,
    3451: `2055`,
    3452: `2055`,
    3453: `2056`,
    3454: `2057`,
    3455: `2058`,
    3456: `2058`,
    3457: `2059`,
    3458: `2060`,
    3459: `2060`,
    346: `95`,
    3460: `2061`,
    3461: `2061`,
    3462: `2062`,
    3463: `2063`,
    3464: `2065`,
    3465: `2065`,
    3466: `2066`,
    3467: `2066`,
    3468: `2066`,
    3469: `2066`,
    347: `96`,
    3470: `2066`,
    3471: `2066`,
    3472: `2067`,
    3473: `2067`,
    3474: `2068`,
    3475: `2068`,
    3476: `2069`,
    3477: `2070`,
    3478: `2070`,
    3479: `2071`,
    348: `97`,
    3480: `2072`,
    3481: `2072`,
    3482: `2073`,
    3483: `2074`,
    3484: `2075`,
    3485: `2075`,
    3486: `2076`,
    3487: `2076`,
    3488: `2077`,
    3489: `2078`,
    349: `97`,
    3490: `2078`,
    3491: `2079`,
    3492: `2082`,
    3493: `2082`,
    3494: `2083`,
    3495: `2084`,
    3496: `2084`,
    3497: `2085`,
    3498: `2086`,
    3499: `2086`,
    35: `2`,
    350: `97`,
    3500: `2087`,
    3501: `2088`,
    3502: `2089`,
    3503: `2090`,
    3504: `2090`,
    3505: `2090`,
    3506: `2091`,
    3507: `2091`,
    3508: `2091`,
    3509: `2092`,
    351: `98`,
    3510: `2093`,
    3511: `2093`,
    3512: `2094`,
    3513: `2094`,
    3514: `2094`,
    3515: `2094`,
    3516: `2094`,
    3517: `2094`,
    3518: `2094`,
    3519: `2094`,
    352: `98`,
    3520: `2094`,
    3521: `2094`,
    3522: `2095`,
    3523: `2095`,
    3524: `2096`,
    3525: `2097`,
    3526: `2098`,
    3527: `2098`,
    3528: `2099`,
    3529: `2100`,
    353: `99`,
    3530: `2100`,
    3531: `2101`,
    3532: `2102`,
    3533: `2103`,
    3534: `2103`,
    3535: `2104`,
    3536: `2104`,
    3537: `2105`,
    3538: `2105`,
    3539: `2105`,
    354: `100`,
    3540: `2106`,
    3541: `2107`,
    3542: `2107`,
    3543: `2108`,
    3544: `2108`,
    3545: `2108`,
    3546: `2109`,
    3547: `2109`,
    3548: `2110`,
    3549: `2110`,
    355: `101`,
    3550: `2111`,
    3551: `2111`,
    3552: `2111`,
    3553: `2112`,
    3554: `2112`,
    3555: `2113`,
    3556: `2113`,
    3557: `2114`,
    3558: `2114`,
    3559: `2114`,
    356: `101`,
    3560: `2115`,
    3561: `2115`,
    3562: `2116`,
    3563: `2116`,
    3564: `2117`,
    3565: `2117`,
    3566: `2118`,
    3567: `2119`,
    3568: `2119`,
    3569: `2120`,
    357: `102`,
    3570: `2120`,
    3571: `2121`,
    3572: `2122`,
    3573: `2123`,
    3574: `2123`,
    3575: `2123`,
    3576: `2124`,
    3577: `2124`,
    3578: `2125`,
    3579: `2125`,
    358: `102`,
    3580: `2126`,
    3581: `2126`,
    3582: `2127`,
    3583: `2128`,
    3584: `2128`,
    3585: `2128`,
    3586: `2129`,
    3587: `2130`,
    3588: `2130`,
    3589: `2132`,
    359: `102`,
    3590: `2132`,
    3591: `2133`,
    3592: `2133`,
    3593: `2134`,
    3594: `2134`,
    3595: `2135`,
    3596: `2136`,
    3597: `2137`,
    3598: `2137`,
    3599: `2138`,
    36: `2`,
    360: `102`,
    3600: `2138`,
    3601: `2139`,
    3602: `2140`,
    3603: `2141`,
    3604: `2144`,
    3605: `2145`,
    3606: `2145`,
    3607: `2146`,
    3608: `2147`,
    3609: `2150`,
    361: `102`,
    3610: `2150`,
    3611: `2151`,
    3612: `2152`,
    3613: `2152`,
    3614: `2153`,
    3615: `2154`,
    3616: `2154`,
    3617: `2155`,
    3618: `2156`,
    3619: `2156`,
    362: `102`,
    3620: `2157`,
    3621: `2158`,
    3622: `2158`,
    3623: `2159`,
    3624: `2160`,
    3625: `2160`,
    3626: `2161`,
    3627: `2161`,
    3628: `2162`,
    3629: `2163`,
    363: `103`,
    3630: `2163`,
    3631: `2164`,
    3632: `2165`,
    3633: `2165`,
    3634: `2166`,
    3635: `2166`,
    3636: `2166`,
    3637: `2167`,
    3638: `2168`,
    3639: `2168`,
    364: `103`,
    3640: `2169`,
    3641: `2169`,
    3642: `2169`,
    3643: `2170`,
    3644: `2171`,
    3645: `2172`,
    3646: `2172`,
    3647: `2173`,
    3648: `2174`,
    3649: `2174`,
    365: `104`,
    3650: `2175`,
    3651: `2176`,
    3652: `2177`,
    3653: `2177`,
    3654: `2178`,
    3655: `2179`,
    3656: `2180`,
    3657: `2180`,
    3658: `2181`,
    3659: `2182`,
    366: `105`,
    3660: `2182`,
    3661: `2183`,
    3662: `2184`,
    3663: `2184`,
    3664: `2185`,
    3665: `2186`,
    3666: `2186`,
    3667: `2187`,
    3668: `2187`,
    3669: `2188`,
    367: `106`,
    3670: `2188`,
    3671: `2189`,
    3672: `2189`,
    3673: `2190`,
    3674: `2190`,
    3675: `2191`,
    3676: `2191`,
    3677: `2191`,
    3678: `2193`,
    3679: `2193`,
    368: `108`,
    3680: `2193`,
    3681: `2194`,
    3682: `2194`,
    3683: `2194`,
    3684: `2194`,
    3685: `2195`,
    3686: `2195`,
    3687: `2195`,
    3688: `2197`,
    3689: `2198`,
    369: `108`,
    3690: `2199`,
    3691: `2199`,
    3692: `2200`,
    3693: `2201`,
    3694: `2201`,
    3695: `2203`,
    3696: `2203`,
    3697: `2203`,
    3698: `2203`,
    3699: `2203`,
    37: `2`,
    370: `109`,
    3700: `2203`,
    3701: `2203`,
    3702: `2203`,
    3703: `2204`,
    3704: `2204`,
    3705: `2205`,
    3706: `2205`,
    3707: `2206`,
    3708: `2206`,
    3709: `2207`,
    371: `109`,
    3710: `2209`,
    3711: `2209`,
    3712: `2210`,
    3713: `2210`,
    3714: `2212`,
    3715: `2212`,
    3716: `2212`,
    3717: `2213`,
    3718: `2213`,
    3719: `2214`,
    372: `109`,
    3720: `2214`,
    3721: `2214`,
    3722: `2216`,
    3723: `2216`,
    3724: `2216`,
    3725: `2218`,
    3726: `2218`,
    3727: `2218`,
    3728: `2219`,
    3729: `2219`,
    373: `112`,
    3730: `2220`,
    3731: `2220`,
    3732: `2220`,
    3733: `2222`,
    3734: `2222`,
    3735: `2222`,
    3736: `2224`,
    3737: `2224`,
    3738: `2224`,
    3739: `2225`,
    374: `113`,
    3740: `2225`,
    3741: `2226`,
    3742: `2226`,
    3743: `2226`,
    3744: `2228`,
    3745: `2229`,
    3746: `2229`,
    3747: `2230`,
    3748: `2231`,
    3749: `2232`,
    375: `113`,
    3750: `2233`,
    3751: `2233`,
    3752: `2234`,
    3753: `2235`,
    3754: `2236`,
    3755: `2237`,
    3756: `2237`,
    3757: `2238`,
    3758: `2239`,
    3759: `2240`,
    376: `114`,
    3760: `2241`,
    3761: `2241`,
    3762: `2242`,
    3763: `2243`,
    3764: `2244`,
    3765: `2245`,
    3766: `2245`,
    3767: `2246`,
    3768: `2246`,
    3769: `2246`,
    377: `114`,
    3770: `2247`,
    3771: `2247`,
    3772: `2247`,
    3773: `2248`,
    3774: `2249`,
    3775: `2250`,
    3776: `2251`,
    3777: `2251`,
    3778: `2251`,
    3779: `2254`,
    378: `114`,
    3780: `2254`,
    3781: `2254`,
    3782: `2255`,
    3783: `2255`,
    3784: `2256`,
    3785: `2256`,
    3786: `2256`,
    3787: `2258`,
    3788: `2258`,
    3789: `2259`,
    379: `114`,
    3790: `2259`,
    3791: `2260`,
    3792: `2261`,
    3793: `2264`,
    3794: `2264`,
    3795: `2264`,
    3796: `2265`,
    3797: `2265`,
    3798: `2266`,
    3799: `2266`,
    38: `2`,
    380: `114`,
    3800: `2266`,
    3801: `2267`,
    3802: `2267`,
    3803: `2268`,
    3804: `2268`,
    3805: `2268`,
    3806: `2269`,
    3807: `2270`,
    3808: `2270`,
    3809: `2271`,
    381: `114`,
    3810: `2271`,
    3811: `2272`,
    3812: `2273`,
    3813: `2274`,
    3814: `2275`,
    3815: `2275`,
    3816: `2276`,
    3817: `2276`,
    3818: `2277`,
    3819: `2278`,
    382: `114`,
    3820: `2279`,
    3821: `2280`,
    3822: `2280`,
    3823: `2281`,
    3824: `2281`,
    3825: `2281`,
    3826: `2282`,
    3827: `2283`,
    3828: `2283`,
    3829: `2284`,
    383: `114`,
    3830: `2284`,
    3831: `2284`,
    3832: `2285`,
    3833: `2286`,
    3834: `2286`,
    3835: `2287`,
    3836: `2287`,
    3837: `2288`,
    3838: `2289`,
    3839: `2290`,
    384: `114`,
    3840: `2291`,
    3841: `2291`,
    3842: `2292`,
    3843: `2292`,
    3844: `2293`,
    3845: `2294`,
    3846: `2295`,
    3847: `2296`,
    3848: `2296`,
    3849: `2297`,
    385: `114`,
    3850: `2297`,
    3851: `2297`,
    3852: `2298`,
    3853: `2299`,
    3854: `2299`,
    3855: `2300`,
    3856: `2300`,
    3857: `2301`,
    3858: `2302`,
    3859: `2303`,
    386: `115`,
    3860: `2304`,
    3861: `2304`,
    3862: `2305`,
    3863: `2305`,
    3864: `2305`,
    3865: `2307`,
    3866: `2308`,
    3867: `2308`,
    3868: `2309`,
    3869: `2309`,
    387: `115`,
    3870: `2309`,
    3871: `2311`,
    3872: `2311`,
    3873: `2312`,
    3874: `2312`,
    3875: `2312`,
    3876: `2313`,
    3877: `2313`,
    3878: `2314`,
    3879: `2314`,
    388: `116`,
    3880: `2314`,
    3881: `2316`,
    3882: `2316`,
    3883: `2316`,
    3884: `2318`,
    3885: `2318`,
    3886: `2318`,
    3887: `2320`,
    3888: `2320`,
    3889: `2320`,
    389: `117`,
    3890: `2322`,
    3891: `2322`,
    3892: `2322`,
    3893: `2324`,
    3894: `2324`,
    3895: `2324`,
    3896: `2326`,
    3897: `2326`,
    3898: `2326`,
    3899: `2328`,
    39: `2`,
    390: `118`,
    3900: `2328`,
    3901: `2328`,
    3902: `2330`,
    3903: `2330`,
    3904: `2330`,
    3905: `2332`,
    3906: `2333`,
    3907: `2333`,
    3908: `2334`,
    3909: `2334`,
    391: `118`,
    3910: `2334`,
    3911: `2336`,
    3912: `2336`,
    3913: `2337`,
    3914: `2337`,
    3915: `2338`,
    3916: `2339`,
    3917: `2342`,
    3918: `2342`,
    3919: `2342`,
    392: `119`,
    3920: `2343`,
    3921: `2343`,
    3922: `2344`,
    3923: `2344`,
    3924: `2344`,
    3925: `2345`,
    3926: `2345`,
    3927: `2346`,
    3928: `2346`,
    3929: `2346`,
    393: `119`,
    3930: `2347`,
    3931: `2348`,
    3932: `2348`,
    3933: `2349`,
    3934: `2349`,
    3935: `2350`,
    3936: `2351`,
    3937: `2352`,
    3938: `2353`,
    3939: `2353`,
    394: `122`,
    3940: `2354`,
    3941: `2354`,
    3942: `2355`,
    3943: `2356`,
    3944: `2357`,
    3945: `2358`,
    3946: `2358`,
    3947: `2359`,
    3948: `2359`,
    3949: `2359`,
    395: `122`,
    3950: `2362`,
    3951: `2362`,
    3952: `2363`,
    3953: `2364`,
    3954: `2364`,
    3955: `2365`,
    3956: `2366`,
    3957: `2367`,
    3958: `2367`,
    3959: `2368`,
    396: `123`,
    3960: `2369`,
    3961: `2369`,
    3962: `2370`,
    3963: `2371`,
    3964: `2371`,
    3965: `2372`,
    3966: `2373`,
    3967: `2373`,
    3968: `2374`,
    3969: `2375`,
    397: `123`,
    3970: `2375`,
    3971: `2376`,
    3972: `2377`,
    3973: `2377`,
    3974: `2378`,
    3975: `2379`,
    3976: `2380`,
    3977: `2380`,
    3978: `2381`,
    3979: `2381`,
    398: `124`,
    3980: `2382`,
    3981: `2382`,
    3982: `2382`,
    3983: `2384`,
    3984: `2385`,
    3985: `2386`,
    3986: `2387`,
    3987: `2388`,
    3988: `2390`,
    3989: `2391`,
    399: `125`,
    3990: `2391`,
    3991: `2392`,
    3992: `2392`,
    3993: `2393`,
    3994: `2393`,
    3995: `2394`,
    3996: `2394`,
    3997: `2395`,
    3998: `2395`,
    3999: `2396`,
    4: `2`,
    40: `2`,
    400: `128`,
    4000: `2397`,
    4001: `2399`,
    4002: `2399`,
    4003: `2400`,
    4004: `2400`,
    4005: `2401`,
    4006: `2402`,
    4007: `2405`,
    4008: `2405`,
    4009: `2405`,
    401: `129`,
    4010: `2406`,
    4011: `2406`,
    4012: `2408`,
    4013: `2409`,
    4014: `2409`,
    4015: `2410`,
    4016: `2410`,
    4017: `2411`,
    4018: `2411`,
    4019: `2412`,
    402: `130`,
    4020: `2413`,
    4021: `2413`,
    4022: `2413`,
    4023: `2414`,
    4024: `2414`,
    4025: `2414`,
    4026: `2415`,
    4027: `2415`,
    4028: `2416`,
    4029: `2416`,
    403: `130`,
    4030: `2416`,
    4031: `2418`,
    4032: `2418`,
    4033: `2419`,
    4034: `2419`,
    4035: `2420`,
    4036: `2421`,
    4037: `2424`,
    4038: `2424`,
    4039: `2424`,
    404: `131`,
    4040: `2425`,
    4041: `2425`,
    4042: `2426`,
    4043: `2426`,
    4044: `2426`,
    4045: `2427`,
    4046: `2427`,
    4047: `2428`,
    4048: `2428`,
    4049: `2428`,
    405: `132`,
    4050: `2430`,
    4051: `2430`,
    4052: `2431`,
    4053: `2431`,
    4054: `2432`,
    4055: `2433`,
    4056: `2436`,
    4057: `2436`,
    4058: `2436`,
    4059: `2437`,
    406: `132`,
    4060: `2437`,
    4061: `2438`,
    4062: `2438`,
    4063: `2439`,
    4064: `2439`,
    4065: `2441`,
    4066: `2442`,
    4067: `2442`,
    4068: `2443`,
    4069: `2444`,
    407: `133`,
    4070: `2444`,
    4071: `2445`,
    4072: `2446`,
    4073: `2446`,
    4074: `2446`,
    4075: `2447`,
    4076: `2447`,
    4077: `2447`,
    4078: `2448`,
    4079: `2448`,
    408: `133`,
    4080: `2450`,
    4081: `2451`,
    4082: `2451`,
    4083: `2452`,
    4084: `2453`,
    4085: `2453`,
    4086: `2454`,
    4087: `2455`,
    4088: `2455`,
    4089: `2455`,
    409: `134`,
    4090: `2456`,
    4091: `2456`,
    4092: `2456`,
    4093: `2457`,
    4094: `2458`,
    4095: `2458`,
    4096: `2459`,
    4097: `2459`,
    4098: `2459`,
    4099: `2462`,
    41: `2`,
    410: `134`,
    4100: `2462`,
    4101: `2462`,
    4102: `2465`,
    4103: `2465`,
    4104: `2465`,
    4105: `2466`,
    4106: `2466`,
    4107: `2467`,
    4108: `2467`,
    4109: `2467`,
    411: `135`,
    4110: `2470`,
    4111: `2470`,
    4112: `2470`,
    4113: `2472`,
    4114: `2473`,
    4115: `2475`,
    4116: `2476`,
    4117: `2477`,
    4118: `2478`,
    4119: `2478`,
    412: `135`,
    4120: `2479`,
    4121: `2479`,
    4122: `2480`,
    4123: `2480`,
    4124: `2480`,
    4125: `2481`,
    4126: `2483`,
    4127: `2484`,
    4128: `2485`,
    4129: `2485`,
    413: `136`,
    4130: `2485`,
    4131: `2486`,
    4132: `2487`,
    4133: `2487`,
    4134: `2490`,
    4135: `2490`,
    4136: `2491`,
    4137: `2491`,
    4138: `2492`,
    4139: `2492`,
    414: `136`,
    4140: `2493`,
    4141: `2494`,
    4142: `2495`,
    4143: `2495`,
    4144: `2496`,
    4145: `2497`,
    4146: `2497`,
    4147: `2498`,
    4148: `2498`,
    4149: `2499`,
    415: `137`,
    4150: `2499`,
    4151: `2500`,
    4152: `2501`,
    4153: `2502`,
    4154: `2502`,
    4155: `2503`,
    4156: `2503`,
    4157: `2504`,
    4158: `2505`,
    4159: `2506`,
    416: `139`,
    4160: `2506`,
    4161: `2507`,
    4162: `2508`,
    4163: `2509`,
    4164: `2512`,
    4165: `2512`,
    4166: `2512`,
    4167: `2513`,
    4168: `2514`,
    4169: `2514`,
    417: `139`,
    4170: `2515`,
    4171: `2515`,
    4172: `2515`,
    4173: `2517`,
    4174: `2518`,
    4175: `2519`,
    4176: `2520`,
    4177: `2521`,
    4178: `2522`,
    4179: `2523`,
    418: `139`,
    4180: `2524`,
    4181: `2525`,
    4182: `2527`,
    4183: `2528`,
    4184: `2528`,
    4185: `2528`,
    4186: `2529`,
    4187: `2530`,
    4188: `2531`,
    4189: `2532`,
    419: `139`,
    4190: `2533`,
    4191: `2535`,
    4192: `2536`,
    4193: `2537`,
    4194: `2538`,
    4195: `2538`,
    4196: `2538`,
    4197: `2539`,
    4198: `2539`,
    4199: `2540`,
    42: `2`,
    420: `141`,
    4200: `2541`,
    4201: `2542`,
    4202: `2544`,
    4203: `2545`,
    4204: `2546`,
    4205: `2547`,
    4206: `2547`,
    4207: `2548`,
    4208: `2549`,
    4209: `2550`,
    421: `141`,
    4210: `2551`,
    4211: `2551`,
    4212: `2552`,
    4213: `2553`,
    4214: `2553`,
    4215: `2553`,
    4216: `2554`,
    4217: `2554`,
    4218: `2555`,
    4219: `2556`,
    422: `142`,
    4220: `2556`,
    4221: `2556`,
    4222: `2557`,
    4223: `2557`,
    4224: `2558`,
    4225: `2559`,
    4226: `2560`,
    4227: `2561`,
    4228: `2561`,
    4229: `2562`,
    423: `143`,
    4230: `2563`,
    4231: `2563`,
    4232: `2563`,
    4233: `2564`,
    4234: `2564`,
    4235: `2565`,
    4236: `2566`,
    4237: `2566`,
    4238: `2566`,
    4239: `2567`,
    424: `143`,
    4240: `2567`,
    4241: `2568`,
    4242: `2569`,
    4243: `2569`,
    4244: `2570`,
    4245: `2570`,
    4246: `2570`,
    4247: `2571`,
    4248: `2572`,
    4249: `2572`,
    425: `144`,
    4250: `2573`,
    4251: `2575`,
    4252: `2576`,
    4253: `2576`,
    4254: `2577`,
    4255: `2578`,
    4256: `2578`,
    4257: `2579`,
    4258: `2581`,
    4259: `2582`,
    426: `144`,
    4260: `2583`,
    4261: `2584`,
    4262: `2584`,
    4263: `2584`,
    4264: `2585`,
    4265: `2585`,
    4266: `2586`,
    4267: `2586`,
    4268: `2586`,
    4269: `2587`,
    427: `144`,
    4270: `2587`,
    4271: `2587`,
    4272: `2589`,
    4273: `2589`,
    4274: `2590`,
    4275: `2590`,
    4276: `2591`,
    4277: `2593`,
    4278: `2594`,
    4279: `2595`,
    428: `146`,
    4280: `2596`,
    4281: `2597`,
    4282: `2597`,
    4283: `2598`,
    4284: `2599`,
    4285: `2600`,
    4286: `2601`,
    4287: `2603`,
    4288: `2603`,
    4289: `2604`,
    429: `147`,
    4290: `2604`,
    4291: `2605`,
    4292: `2606`,
    4293: `2607`,
    4294: `2607`,
    4295: `2607`,
    4296: `2608`,
    4297: `2608`,
    4298: `2608`,
    4299: `2610`,
    43: `2`,
    430: `147`,
    4300: `2611`,
    4301: `2611`,
    4302: `2611`,
    4303: `2613`,
    4304: `2613`,
    4305: `2614`,
    4306: `2615`,
    4307: `2615`,
    4308: `2616`,
    4309: `2618`,
    431: `148`,
    4310: `2619`,
    4311: `2619`,
    4312: `2620`,
    432: `148`,
    433: `149`,
    434: `149`,
    435: `149`,
    436: `151`,
    437: `151`,
    438: `152`,
    439: `152`,
    44: `2`,
    440: `152`,
    441: `153`,
    442: `153`,
    443: `153`,
    444: `156`,
    445: `156`,
    446: `156`,
    447: `157`,
    448: `157`,
    449: `157`,
    45: `2`,
    450: `158`,
    451: `158`,
    452: `159`,
    453: `159`,
    454: `162`,
    455: `163`,
    456: `164`,
    457: `165`,
    458: `165`,
    459: `166`,
    46: `2`,
    460: `166`,
    461: `167`,
    462: `168`,
    463: `169`,
    464: `170`,
    465: `170`,
    466: `173`,
    467: `173`,
    468: `174`,
    469: `174`,
    47: `2`,
    470: `175`,
    471: `176`,
    472: `177`,
    473: `177`,
    474: `177`,
    475: `178`,
    476: `178`,
    477: `179`,
    478: `180`,
    479: `181`,
    48: `2`,
    480: `181`,
    481: `182`,
    482: `182`,
    483: `183`,
    484: `183`,
    485: `183`,
    486: `184`,
    487: `184`,
    488: `185`,
    489: `185`,
    49: `2`,
    490: `185`,
    491: `185`,
    492: `185`,
    493: `185`,
    494: `186`,
    495: `186`,
    496: `187`,
    497: `188`,
    498: `189`,
    499: `189`,
    5: `2`,
    50: `2`,
    500: `190`,
    501: `191`,
    502: `193`,
    503: `193`,
    504: `194`,
    505: `194`,
    506: `194`,
    507: `195`,
    508: `195`,
    509: `196`,
    51: `2`,
    510: `197`,
    511: `198`,
    512: `198`,
    513: `198`,
    514: `198`,
    515: `198`,
    516: `198`,
    517: `198`,
    518: `198`,
    519: `198`,
    52: `2`,
    520: `198`,
    521: `198`,
    522: `198`,
    523: `198`,
    524: `198`,
    525: `198`,
    526: `198`,
    527: `198`,
    528: `198`,
    529: `198`,
    53: `2`,
    530: `198`,
    531: `199`,
    532: `199`,
    533: `199`,
    534: `202`,
    535: `202`,
    536: `202`,
    537: `203`,
    538: `203`,
    539: `206`,
    54: `2`,
    540: `207`,
    541: `208`,
    542: `209`,
    543: `209`,
    544: `210`,
    545: `211`,
    546: `211`,
    547: `212`,
    548: `213`,
    549: `214`,
    55: `2`,
    550: `215`,
    551: `215`,
    552: `216`,
    553: `216`,
    554: `216`,
    555: `219`,
    556: `219`,
    557: `219`,
    558: `220`,
    559: `220`,
    56: `2`,
    560: `223`,
    561: `224`,
    562: `225`,
    563: `225`,
    564: `226`,
    565: `226`,
    566: `227`,
    567: `228`,
    568: `228`,
    569: `229`,
    57: `2`,
    570: `230`,
    571: `231`,
    572: `232`,
    573: `232`,
    574: `233`,
    575: `233`,
    576: `233`,
    577: `236`,
    578: `236`,
    579: `236`,
    58: `2`,
    580: `237`,
    581: `237`,
    582: `240`,
    583: `241`,
    584: `242`,
    585: `242`,
    586: `243`,
    587: `243`,
    588: `244`,
    589: `245`,
    59: `2`,
    590: `245`,
    591: `246`,
    592: `247`,
    593: `248`,
    594: `249`,
    595: `249`,
    596: `250`,
    597: `250`,
    598: `250`,
    599: `253`,
    6: `2`,
    60: `2`,
    600: `253`,
    601: `253`,
    602: `254`,
    603: `254`,
    604: `257`,
    605: `258`,
    606: `259`,
    607: `259`,
    608: `260`,
    609: `260`,
    61: `2`,
    610: `261`,
    611: `262`,
    612: `262`,
    613: `263`,
    614: `264`,
    615: `265`,
    616: `266`,
    617: `266`,
    618: `267`,
    619: `267`,
    62: `2`,
    620: `267`,
    621: `270`,
    622: `270`,
    623: `270`,
    624: `271`,
    625: `271`,
    626: `274`,
    627: `275`,
    628: `276`,
    629: `276`,
    63: `2`,
    630: `276`,
    631: `277`,
    632: `277`,
    633: `278`,
    634: `279`,
    635: `279`,
    636: `280`,
    637: `281`,
    638: `282`,
    639: `283`,
    64: `2`,
    640: `283`,
    641: `284`,
    642: `284`,
    643: `284`,
    644: `287`,
    645: `287`,
    646: `287`,
    647: `288`,
    648: `288`,
    649: `291`,
    65: `2`,
    650: `292`,
    651: `293`,
    652: `293`,
    653: `293`,
    654: `294`,
    655: `294`,
    656: `295`,
    657: `296`,
    658: `296`,
    659: `297`,
    66: `2`,
    660: `298`,
    661: `299`,
    662: `300`,
    663: `300`,
    664: `301`,
    665: `301`,
    666: `301`,
    667: `304`,
    668: `304`,
    669: `304`,
    67: `2`,
    670: `305`,
    671: `305`,
    672: `308`,
    673: `309`,
    674: `310`,
    675: `310`,
    676: `310`,
    677: `311`,
    678: `311`,
    679: `312`,
    68: `2`,
    680: `313`,
    681: `313`,
    682: `314`,
    683: `315`,
    684: `316`,
    685: `317`,
    686: `317`,
    687: `318`,
    688: `318`,
    689: `318`,
    69: `2`,
    690: `321`,
    691: `321`,
    692: `321`,
    693: `322`,
    694: `322`,
    695: `325`,
    696: `326`,
    697: `327`,
    698: `327`,
    699: `328`,
    7: `2`,
    70: `2`,
    700: `328`,
    701: `329`,
    702: `330`,
    703: `330`,
    704: `331`,
    705: `332`,
    706: `333`,
    707: `334`,
    708: `334`,
    709: `335`,
    71: `2`,
    710: `335`,
    711: `335`,
    712: `338`,
    713: `338`,
    714: `339`,
    715: `339`,
    716: `339`,
    717: `340`,
    718: `340`,
    719: `341`,
    72: `2`,
    720: `341`,
    721: `342`,
    722: `342`,
    723: `342`,
    724: `343`,
    725: `343`,
    726: `344`,
    727: `344`,
    728: `345`,
    729: `345`,
    73: `2`,
    730: `346`,
    731: `346`,
    732: `346`,
    733: `347`,
    734: `347`,
    735: `347`,
    736: `348`,
    737: `349`,
    738: `355`,
    739: `355`,
    74: `2`,
    740: `356`,
    741: `356`,
    742: `356`,
    743: `357`,
    744: `357`,
    745: `358`,
    746: `358`,
    747: `359`,
    748: `359`,
    749: `359`,
    75: `2`,
    750: `360`,
    751: `360`,
    752: `361`,
    753: `361`,
    754: `362`,
    755: `362`,
    756: `362`,
    757: `363`,
    758: `363`,
    759: `364`,
    76: `2`,
    760: `364`,
    761: `365`,
    762: `365`,
    763: `366`,
    764: `367`,
    765: `367`,
    766: `368`,
    767: `368`,
    768: `369`,
    769: `370`,
    77: `2`,
    770: `371`,
    771: `371`,
    772: `371`,
    773: `372`,
    774: `372`,
    775: `373`,
    776: `373`,
    777: `374`,
    778: `374`,
    779: `375`,
    78: `2`,
    780: `376`,
    781: `376`,
    782: `376`,
    783: `377`,
    784: `378`,
    785: `378`,
    786: `380`,
    787: `380`,
    788: `381`,
    789: `381`,
    79: `2`,
    790: `382`,
    791: `382`,
    792: `383`,
    793: `384`,
    794: `385`,
    795: `385`,
    796: `386`,
    797: `386`,
    798: `387`,
    799: `388`,
    8: `2`,
    80: `2`,
    800: `389`,
    801: `395`,
    802: `395`,
    803: `396`,
    804: `397`,
    805: `397`,
    806: `398`,
    807: `399`,
    808: `400`,
    809: `400`,
    81: `2`,
    810: `401`,
    811: `403`,
    812: `403`,
    813: `404`,
    814: `404`,
    815: `405`,
    816: `405`,
    817: `405`,
    818: `406`,
    819: `407`,
    82: `2`,
    820: `407`,
    821: `408`,
    822: `408`,
    823: `410`,
    824: `410`,
    825: `411`,
    826: `411`,
    827: `411`,
    828: `412`,
    829: `412`,
    83: `2`,
    830: `413`,
    831: `413`,
    832: `413`,
    833: `414`,
    834: `415`,
    835: `415`,
    836: `416`,
    837: `416`,
    838: `416`,
    839: `417`,
    84: `2`,
    840: `417`,
    841: `418`,
    842: `418`,
    843: `419`,
    844: `419`,
    845: `420`,
    846: `421`,
    847: `421`,
    848: `422`,
    849: `423`,
    85: `2`,
    850: `424`,
    851: `425`,
    852: `425`,
    853: `426`,
    854: `426`,
    855: `427`,
    856: `428`,
    857: `428`,
    858: `429`,
    859: `430`,
    86: `2`,
    860: `430`,
    861: `431`,
    862: `432`,
    863: `432`,
    864: `433`,
    865: `434`,
    866: `435`,
    867: `435`,
    868: `436`,
    869: `437`,
    87: `2`,
    870: `438`,
    871: `438`,
    872: `439`,
    873: `440`,
    874: `440`,
    875: `441`,
    876: `441`,
    877: `443`,
    878: `443`,
    879: `444`,
    88: `2`,
    880: `444`,
    881: `445`,
    882: `445`,
    883: `446`,
    884: `446`,
    885: `447`,
    886: `448`,
    887: `448`,
    888: `449`,
    889: `449`,
    89: `2`,
    890: `450`,
    891: `450`,
    892: `451`,
    893: `451`,
    894: `454`,
    895: `454`,
    896: `455`,
    897: `455`,
    898: `456`,
    899: `461`,
    9: `2`,
    90: `2`,
    900: `461`,
    901: `462`,
    902: `463`,
    903: `463`,
    904: `464`,
    905: `465`,
    906: `465`,
    907: `466`,
    908: `467`,
    909: `468`,
    91: `2`,
    910: `469`,
    911: `469`,
    912: `469`,
    913: `470`,
    914: `470`,
    915: `470`,
    916: `471`,
    917: `472`,
    918: `472`,
    919: `473`,
    92: `2`,
    920: `473`,
    921: `473`,
    922: `473`,
    923: `473`,
    924: `473`,
    925: `473`,
    926: `473`,
    927: `473`,
    928: `473`,
    929: `474`,
    93: `2`,
    930: `474`,
    931: `475`,
    932: `476`,
    933: `477`,
    934: `477`,
    935: `478`,
    936: `479`,
    937: `479`,
    938: `480`,
    939: `481`,
    94: `2`,
    940: `482`,
    941: `482`,
    942: `483`,
    943: `484`,
    944: `484`,
    945: `485`,
    946: `486`,
    947: `491`,
    948: `491`,
    949: `492`,
    95: `2`,
    950: `492`,
    951: `492`,
    952: `493`,
    953: `493`,
    954: `494`,
    955: `495`,
    956: `495`,
    957: `496`,
    958: `497`,
    959: `498`,
    96: `4`,
    960: `499`,
    961: `499`,
    962: `500`,
    963: `500`,
    964: `501`,
    965: `502`,
    966: `502`,
    967: `503`,
    968: `504`,
    969: `504`,
    97: `4`,
    970: `505`,
    971: `506`,
    972: `506`,
    973: `507`,
    974: `508`,
    975: `509`,
    976: `509`,
    977: `510`,
    978: `511`,
    979: `512`,
    98: `5`,
    980: `512`,
    981: `513`,
    982: `514`,
    983: `514`,
    984: `515`,
    985: `515`,
    986: `517`,
    987: `517`,
    988: `518`,
    989: `518`,
    99: `5`,
    990: `519`,
    991: `519`,
    992: `520`,
    993: `520`,
    994: `521`,
    995: `522`,
    996: `522`,
    997: `523`,
    998: `523`,
    999: `524`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Trader_swapAForB3: 1
    },
  extraPages: 2,
  stateKeys: 5,
  stateSize: 554,
  unsupported: [],
  version: 13,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:1467:71:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:1418:11:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:1433:11:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:1713:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:1716:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:1496:31:after expr stmt semicolon',
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
  "Protocol_delete": Protocol_delete,
  "Protocol_harvest": Protocol_harvest,
  "Provider_depositB": Provider_depositB,
  "Provider_grant": Provider_grant,
  "Provider_withdrawA": Provider_withdrawA,
  "Provider_withdrawB": Provider_withdrawB,
  "Trader_makeCommitment": Trader_makeCommitment,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_withdrawA": Trader_withdrawA,
  "Trader_withdrawB": Trader_withdrawB
  };
export const _APIs = {
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    depositB: Provider_depositB,
    grant: Provider_grant,
    withdrawA: Provider_withdrawA,
    withdrawB: Provider_withdrawB
    },
  Trader: {
    makeCommitment: Trader_makeCommitment,
    swapAForB: Trader_swapAForB,
    withdrawA: Trader_withdrawA,
    withdrawB: Trader_withdrawB
    }
  };
