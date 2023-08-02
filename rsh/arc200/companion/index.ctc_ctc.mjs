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
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2]);
  const ctc9 = stdlib.T_Data({
    DepositEvent: ctc3,
    HarvestEvent: ctc6,
    SwapEvent: ctc7,
    WithdrawEvent: ctc8
    });
  return {
    Approval: [ctc0, ctc0, ctc1],
    Event: [ctc9],
    Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Object({
    decimals: ctc0,
    name: ctc1,
    symbol: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc7], ['locked', ctc4]]);
  const ctc9 = stdlib.T_Contract;
  const ctc10 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc0,
    lptBals: ctc6,
    name: ctc1,
    poolBals: ctc6,
    protoBals: ctc6,
    protoInfo: ctc8,
    symbol: ctc2,
    tokA: ctc9,
    tokB: ctc9,
    totalSupply: ctc5,
    zeroAddress: ctc7
    });
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Struct([['lptBals', ctc6], ['poolBals', ctc6], ['protoInfo', ctc8], ['protoBals', ctc6], ['tokB', ctc9], ['tokA', ctc9]]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Data({
    None: ctc13,
    Some: ctc5
    });
  const map0_ctc = ctc14;
  
  const map1_ctc = ctc14;
  
  const map2_ctc = ctc14;
  
  const map3_ctc = ctc14;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      return (await ((async () => {
        
        const v20125 = v4482.lptBals;
        const v20126 = v4482.poolBals;
        const v20127 = v4482.protoInfo;
        const v20128 = v4482.protoBals;
        const v20129 = v4482.tokB;
        const v20130 = v4482.tokA;
        const v20131 = {
          lptBals: v20125,
          poolBals: v20126,
          protoBals: v20128,
          protoInfo: v20127,
          tokA: v20130,
          tokB: v20129
          };
        
        return v20131;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      return (await ((async () => {
        
        const v4570 = v4482.lptBals;
        const v4571 = v4482.poolBals;
        const v4572 = v4482.protoInfo;
        const v4573 = v4482.protoBals;
        const v4574 = v4482.tokB;
        const v4575 = v4482.tokA;
        const v4576 = {
          lptBals: v4570,
          poolBals: v4571,
          protoBals: v4573,
          protoInfo: v4572,
          tokA: v4575,
          tokB: v4574
          };
        
        return v4576;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      return (await ((async () => {
        
        
        return v4423;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      return (await ((async () => {
        
        
        return v4423;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      return (await ((async () => {
        
        const v4466 = v4422.name;
        
        return v4466;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      return (await ((async () => {
        
        const v4466 = v4422.name;
        
        return v4466;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _reserve = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      return (await ((async (_v20118 ) => {
          const v20118 = stdlib.protect(ctc7, _v20118, null);
        
        const v20119 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc7, v20118, ctc5), null);
        const v20120 = stdlib.fromSome(v20119, stdlib.checkedBigNumberify('./index.rsh:784:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v20121 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc7, v20118, ctc5), null);
        const v20122 = stdlib.fromSome(v20121, stdlib.checkedBigNumberify('./index.rsh:785:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v20123 = {
          A: v20120,
          B: v20122
          };
        
        return v20123;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      return (await ((async (_v4563 ) => {
          const v4563 = stdlib.protect(ctc7, _v4563, null);
        
        const v4564 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc7, v4563, ctc5), null);
        const v4565 = stdlib.fromSome(v4564, stdlib.checkedBigNumberify('./index.rsh:784:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4566 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc7, v4563, ctc5), null);
        const v4567 = stdlib.fromSome(v4566, stdlib.checkedBigNumberify('./index.rsh:785:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4568 = {
          A: v4565,
          B: v4567
          };
        
        return v4568;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      return (await ((async () => {
        
        const v4467 = v4422.symbol;
        
        return v4467;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      return (await ((async () => {
        
        const v4467 = v4422.symbol;
        
        return v4467;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4422, v4423, v4482] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc12
        },
      allowance: {
        decode: _allowance,
        dom: [ctc7, ctc7],
        rng: ctc5
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc7],
        rng: ctc5
        },
      decimals: {
        decode: _decimals,
        dom: [],
        rng: ctc0
        },
      name: {
        decode: _name,
        dom: [],
        rng: ctc1
        },
      reserve: {
        decode: _reserve,
        dom: [ctc7],
        rng: ctc6
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc2
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc5
        },
      v_exactSwapAForB: {
        decode: _v_exactSwapAForB,
        dom: [ctc0],
        rng: ctc0
        },
      v_exactSwapBForA: {
        decode: _v_exactSwapBForA,
        dom: [ctc0],
        rng: ctc0
        },
      v_swapAForB: {
        decode: _v_swapAForB,
        dom: [ctc0],
        rng: ctc0
        },
      v_swapBForA: {
        decode: _v_swapBForA,
        dom: [ctc0],
        rng: ctc0
        }
      },
    views: {
      2: [ctc3, ctc0, ctc10],
      4: [ctc9, ctc9, ctc3, ctc0, ctc7, ctc11, ctc7, ctc6, ctc10, ctc0, ctc6, ctc5, ctc5, ctc6]
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
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2, ctc2]);
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Object({
    proto: ctc7,
    tokA: ctc7,
    tokB: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Object({
    meta: ctc6,
    swap: ctc8,
    zeroAddress: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc9], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc9, ctc12]);
  const ctc15 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc15, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc15]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc22 = stdlib.T_Data({
    Protocol_harvest0_468: ctc14,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc19,
    Trader_exactSwapBForA0_468: ctc19,
    Trader_swapAForB0_468: ctc19,
    Trader_swapBForA0_468: ctc19,
    approve0_468: ctc20,
    transfer0_468: ctc20,
    transferFrom0_468: ctc21
    });
  const ctc23 = stdlib.T_Tuple([ctc3, ctc11]);
  const ctc24 = stdlib.T_Tuple([ctc15, ctc3]);
  const ctc25 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc26 = stdlib.T_Tuple([]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  
  const v4380 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  const v4381 = v4380.meta;
  const v4382 = v4380.swap;
  const v4384 = v4381.decimals;
  const v4388 = v4382.tokA;
  const v4389 = v4382.tokB;
  
  const v4398 = stdlib.digest([ctc7], [v4388]);
  const v4399 = stdlib.digest([ctc7], [v4389]);
  const v4400 = stdlib.digestEq(v4398, v4399);
  const v4401 = v4400 ? false : true;
  stdlib.assert(v4401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:696:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:711:19:application call to "checkInput" (defined at: ./index.rsh:694:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v4405 = stdlib.le(v4384, stdlib.checkedBigNumberify('./index.rsh:585:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v4405, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:697:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:711:19:application call to "checkInput" (defined at: ./index.rsh:694:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4380],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:708:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:708:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4408], secs: v4410, time: v4409, didSend: v156, from: v4407 } = txn1;
      
      const v4413 = v4408.swap;
      const v4414 = v4413.tokA;
      const v4416 = v4413.tokB;
      const v4422 = v4408.meta;
      const v4423 = v4422.decimals;
      ;
      const v4426 = v4408.zeroAddress;
      const v4430 = v4413.proto;
      const v4432 = await ctc.getContractInfo();
      const v4435 = [];
      const v4436 = ['Some', v4414];
      const v4437 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v4430,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:725:71:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:725:71:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
      const v4438 = await txn1.getOutput('internal', 'v4437', ctc13, v4437);
      const v4440 = v4438[stdlib.checkedBigNumberify('./index.rsh:725:71:application', stdlib.UInt_max, '0')];
      const v4441 = v4438[stdlib.checkedBigNumberify('./index.rsh:725:71:application', stdlib.UInt_max, '1')];
      const v4442 = v4441.protoFee;
      const v4443 = v4441.lpFee;
      const v4444 = v4441.totFee;
      const v4460 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc9, v4460, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc9, v4426, ctc1, stdlib.checkedBigNumberify('./index.rsh:748:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4462 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      
      const v4470 = v4422.name;
      const v4471 = v4422.symbol;
      const v4475 = v4441.protoAddr;
      const v4476 = v4441.locked;
      const v4477 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v4478 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v4480 = {
        locked: v4476,
        lpFee: v4443,
        protoAddr: v4475,
        protoFee: v4442,
        totFee: v4444
        };
      const v4481 = {
        closed: false,
        decimals: v4423,
        lptBals: v4477,
        name: v4470,
        poolBals: v4478,
        protoBals: v4478,
        protoInfo: v4480,
        symbol: v4471,
        tokA: v4414,
        tokB: v4416,
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        zeroAddress: v4426
        };
      const v4482 = v4481;
      const v4483 = v4409;
      const v4486 = v4440;
      
      if (await (async () => {
        const v4561 = v4482.closed;
        const v4562 = v4561 ? false : true;
        
        return v4562;})()) {
        const v4578 = v4482.lptBals;
        const v4579 = v4578.A;
        const v4580 = v4578.B;
        const v4583 = v4482.poolBals;
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v4408], secs: v4410, time: v4409, didSend: v156, from: v4407 } = txn1;
  const v4413 = v4408.swap;
  const v4414 = v4413.tokA;
  const v4416 = v4413.tokB;
  const v4417 = stdlib.digest([ctc7], [v4414]);
  const v4418 = stdlib.digest([ctc7], [v4416]);
  const v4419 = stdlib.digestEq(v4417, v4418);
  const v4420 = v4419 ? false : true;
  stdlib.assert(v4420, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:696:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:711:19:application call to "checkInput" (defined at: ./index.rsh:694:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v4422 = v4408.meta;
  const v4423 = v4422.decimals;
  const v4424 = stdlib.le(v4423, stdlib.checkedBigNumberify('./index.rsh:585:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v4424, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:697:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:711:19:application call to "checkInput" (defined at: ./index.rsh:694:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  ;
  const v4426 = v4408.zeroAddress;
  const v4430 = v4413.proto;
  const v4432 = await ctc.getContractInfo();
  const v4435 = [];
  const v4436 = ['Some', v4414];
  const v4437 = undefined /* Remote */;
  const v4438 = await txn1.getOutput('internal', 'v4437', ctc13, v4437);
  const v4440 = v4438[stdlib.checkedBigNumberify('./index.rsh:725:71:application', stdlib.UInt_max, '0')];
  const v4441 = v4438[stdlib.checkedBigNumberify('./index.rsh:725:71:application', stdlib.UInt_max, '1')];
  const v4442 = v4441.protoFee;
  const v4443 = v4441.lpFee;
  const v4444 = v4441.totFee;
  const v4445 = stdlib.lt256(v4442, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4446 = stdlib.lt256(v4443, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4447 = v4445 ? v4446 : false;
  let v4448;
  if (v4447) {
    const v4449 = stdlib.safeAdd256(v4443, v4442);
    const v4450 = stdlib.eq256(v4444, v4449);
    v4448 = v4450;
    }
  else {
    v4448 = false;
    }
  const v4451 = stdlib.lt256(v4444, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4452 = v4448 ? v4451 : false;
  const v4453 = stdlib.gt256(v4444, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4454 = v4452 ? v4453 : false;
  stdlib.assert(v4454, {
    at: './index.rsh:725:71:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v4459 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4440);
  stdlib.assert(v4459, {
    at: './index.rsh:725:71:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  const v4460 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc9, v4460, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc9, v4426, ctc1, stdlib.checkedBigNumberify('./index.rsh:748:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4462 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  stdlib.protect(ctc0, await interact.ready(v4432), {
    at: './index.rsh:761:21:application',
    fs: ['at ./index.rsh:761:21:application call to [unknown function] (defined at: ./index.rsh:761:21:function exp)', 'at ./index.rsh:761:21:application call to "liftedInteract" (defined at: ./index.rsh:761:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v4470 = v4422.name;
  const v4471 = v4422.symbol;
  const v4475 = v4441.protoAddr;
  const v4476 = v4441.locked;
  const v4477 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4478 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4480 = {
    locked: v4476,
    lpFee: v4443,
    protoAddr: v4475,
    protoFee: v4442,
    totFee: v4444
    };
  const v4481 = {
    closed: false,
    decimals: v4423,
    lptBals: v4477,
    name: v4470,
    poolBals: v4478,
    protoBals: v4478,
    protoInfo: v4480,
    symbol: v4471,
    tokA: v4414,
    tokB: v4416,
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    zeroAddress: v4426
    };
  let v4482 = v4481;
  let v4483 = v4409;
  let v4486 = v4440;
  
  let txn2 = txn1;
  while (await (async () => {
    const v4561 = v4482.closed;
    const v4562 = v4561 ? false : true;
    
    return v4562;})()) {
    const v4578 = v4482.lptBals;
    const v4579 = v4578.A;
    const v4580 = v4578.B;
    const v4583 = v4482.poolBals;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc22],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn3;
    switch (v5177[0]) {
      case 'Protocol_harvest0_468': {
        const v5180 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v5199 = v5180[stdlib.checkedBigNumberify('./index.rsh:995:12:spread', stdlib.UInt_max, '0')];
        const v5200 = v5180[stdlib.checkedBigNumberify('./index.rsh:995:12:spread', stdlib.UInt_max, '1')];
        const v5202 = v4482.protoInfo;
        const v5203 = v5202.protoAddr;
        const v5204 = stdlib.addressEq(v5176, v5203);
        stdlib.assert(v5204, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:989:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:996:21:application call to "chkProtoAddr" (defined at: ./index.rsh:988:42:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Deployer'
          });
        const v5206 = v5200.protoFee;
        const v5207 = v5200.lpFee;
        const v5208 = v5200.totFee;
        const v5209 = stdlib.lt256(v5206, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v5210 = stdlib.lt256(v5207, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v5211 = v5209 ? v5210 : false;
        let v5212;
        if (v5211) {
          const v5213 = stdlib.safeAdd256(v5207, v5206);
          const v5214 = stdlib.eq256(v5208, v5213);
          v5212 = v5214;
          }
        else {
          v5212 = false;
          }
        const v5215 = stdlib.lt256(v5208, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v5216 = v5212 ? v5215 : false;
        const v5217 = stdlib.gt256(v5208, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5218 = v5216 ? v5217 : false;
        stdlib.assert(v5218, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:332:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:16:application call to "chkFees" (defined at: ./index.rsh:332:21:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v5223 = (stdlib.le(await ctc.getBalance(), v4486) ? stdlib.checkedBigNumberify('./index.rsh:1000:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4486));
        const v5224 = stdlib.safeAdd(v5223, v4486);
        const v5225 = v5200.locked;
        const v5226 = v5225 ? false : false;
        const v5228 = v4583.A;
        const v5229 = v4583.B;
        const v5230 = stdlib.eq256(v5228, stdlib.checkedBigNumberify('./index.rsh:74:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5231 = stdlib.eq256(v5229, stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5232 = v5230 ? v5231 : false;
        const v5233 = v5226 ? v5232 : false;
        if (v5233) {
          await stdlib.mapSet(map0, ctc9, v4426, ctc1, undefined /* Nothing */);
          const v5237 = stdlib.sub(v5224, v5223);
          ;
          const v5238 = v4482.protoBals;
          const v5239 = v5238.A;
          const v5241 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v5242 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
          const v5246 = undefined /* Remote */;
          const v5247 = await txn3.getOutput('internal', 'v5246', ctc23, v5246);
          const v5249 = v5247[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
          const v5254 = stdlib.add(v5237, v5249);
          const v5255 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5249);
          stdlib.assert(v5255, {
            at: './index.rsh:966:15:application',
            fs: ['at ./index.rsh:1007:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v5257 = v5238.B;
          const v5259 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v5260 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
          const v5264 = undefined /* Remote */;
          const v5265 = await txn3.getOutput('internal', 'v5264', ctc23, v5264);
          const v5267 = v5265[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
          const v5272 = stdlib.add(v5254, v5267);
          const v5273 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5267);
          stdlib.assert(v5273, {
            at: './index.rsh:966:15:application',
            fs: ['at ./index.rsh:1008:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v5277 = {
            A: v5239,
            B: v5257
            };
          const v5278 = [v5277, v5223];
          await txn3.getOutput('Protocol_harvest', 'v5278', ctc24, v5278);
          const v5306 = v5200.protoAddr;
          const v5308 = {
            locked: false,
            lpFee: v5207,
            protoAddr: v5306,
            protoFee: v5206,
            totFee: v5208
            };
          const v5309 = [v5308];
          const v5310 = ['HarvestEvent', v5309];
          null;
          const v5312 = v4482.decimals;
          const v5314 = v4482.name;
          const v5318 = v4482.symbol;
          const v5319 = v4482.tokA;
          const v5320 = v4482.tokB;
          const v5321 = v4482.totalSupply;
          const v5322 = v4482.zeroAddress;
          const v5324 = {
            closed: true,
            decimals: v5312,
            lptBals: v4578,
            name: v5314,
            poolBals: v4583,
            protoBals: v4478,
            protoInfo: v5200,
            symbol: v5318,
            tokA: v5319,
            tokB: v5320,
            totalSupply: v5321,
            zeroAddress: v5322
            };
          const cv4482 = v5324;
          const cv4483 = v5178;
          const cv4486 = v5272;
          
          v4482 = cv4482;
          v4483 = cv4483;
          v4486 = cv4486;
          
          txn2 = txn3;
          continue;}
        else {
          const v5331 = stdlib.sub(v5224, v5223);
          ;
          const v5332 = v4482.protoBals;
          const v5333 = v5332.A;
          const v5335 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v5336 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
          const v5340 = undefined /* Remote */;
          const v5341 = await txn3.getOutput('internal', 'v5340', ctc23, v5340);
          const v5343 = v5341[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
          const v5348 = stdlib.add(v5331, v5343);
          const v5349 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5343);
          stdlib.assert(v5349, {
            at: './index.rsh:966:15:application',
            fs: ['at ./index.rsh:1007:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v5351 = v5332.B;
          const v5353 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v5354 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
          const v5358 = undefined /* Remote */;
          const v5359 = await txn3.getOutput('internal', 'v5358', ctc23, v5358);
          const v5361 = v5359[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
          const v5366 = stdlib.add(v5348, v5361);
          const v5367 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5361);
          stdlib.assert(v5367, {
            at: './index.rsh:966:15:application',
            fs: ['at ./index.rsh:1008:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
            msg: 'remote bill check',
            who: 'Deployer'
            });
          const v5371 = {
            A: v5333,
            B: v5351
            };
          const v5372 = [v5371, v5223];
          await txn3.getOutput('Protocol_harvest', 'v5372', ctc24, v5372);
          const v5400 = v5200.protoAddr;
          const v5402 = {
            locked: v5225,
            lpFee: v5207,
            protoAddr: v5400,
            protoFee: v5206,
            totFee: v5208
            };
          const v5403 = [v5402];
          const v5404 = ['HarvestEvent', v5403];
          null;
          const v5406 = v4482.decimals;
          const v5408 = v4482.name;
          const v5412 = v4482.symbol;
          const v5413 = v4482.tokA;
          const v5414 = v4482.tokB;
          const v5415 = v4482.totalSupply;
          const v5416 = v4482.zeroAddress;
          const v5418 = {
            closed: false,
            decimals: v5406,
            lptBals: v4578,
            name: v5408,
            poolBals: v4583,
            protoBals: v4478,
            protoInfo: v5200,
            symbol: v5412,
            tokA: v5413,
            tokB: v5414,
            totalSupply: v5415,
            zeroAddress: v5416
            };
          const cv4482 = v5418;
          const cv4483 = v5178;
          const cv4486 = v5366;
          
          v4482 = cv4482;
          v4483 = cv4483;
          v4486 = cv4486;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Provider_deposit0_468': {
        const v6247 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v6490 = v6247[stdlib.checkedBigNumberify('./index.rsh:1052:12:spread', stdlib.UInt_max, '0')];
        const v6491 = v6247[stdlib.checkedBigNumberify('./index.rsh:1052:12:spread', stdlib.UInt_max, '1')];
        const v6492 = v4482.protoInfo;
        const v6493 = v6492.locked;
        const v6494 = v6493 ? false : true;
        stdlib.assert(v6494, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1053:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v6496 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5176, ctc1), null);
        const v6497 = stdlib.fromSome(v6496, stdlib.checkedBigNumberify('./index.rsh:1054:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6498 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5176, ctc1), null);
        const v6499 = stdlib.fromSome(v6498, stdlib.checkedBigNumberify('./index.rsh:1055:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6500 = v6490.A;
        const v6501 = stdlib.ge256(v6497, v6500);
        stdlib.assert(v6501, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1056:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
          msg: 'inBals A balance insufficient',
          who: 'Deployer'
          });
        const v6503 = v6490.B;
        const v6504 = stdlib.ge256(v6499, v6503);
        stdlib.assert(v6504, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1057:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
          msg: 'inBals B balance insufficient',
          who: 'Deployer'
          });
        let v6506;
        const v6512 = stdlib.eq256(v4580, stdlib.checkedBigNumberify('./index.rsh:316:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v6512) {
          const v6513 = stdlib.safeMul256(v6500, v6503);
          const v6514 = stdlib.sqrt256(v6513);
          v6506 = v6514;
          }
        else {
          const v6515 = v4583.A;
          const v6516 = v4583.B;
          const v6520 = stdlib.safeMul256(v6500, v4580);
          const v6521 = stdlib.safeDiv256(v6520, v6515);
          const v6525 = stdlib.safeMul256(v6503, v4580);
          const v6526 = stdlib.safeDiv256(v6525, v6516);
          const v6527 = stdlib.lt256(v6521, v6526);
          const v6528 = v6527 ? v6521 : v6526;
          v6506 = v6528;
          }
        const v6529 = stdlib.le256(v6491, v6506);
        stdlib.assert(v6529, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1059:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v6533 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4460, ctc1), null);
        const v6534 = stdlib.fromSome(v6533, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6535 = stdlib.ge256(v6534, v6506);
        stdlib.assert(v6535, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:846:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1060:22:application call to "checkTransfer" (defined at: ./index.rsh:845:52:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v6540 = stdlib.safeSub256(v6497, v6500);
        await stdlib.mapSet(map2, ctc9, v5176, ctc1, v6540);
        const v6542 = stdlib.safeSub256(v6499, v6503);
        await stdlib.mapSet(map3, ctc9, v5176, ctc1, v6542);
        const v6546 = stdlib.safeSub256(v6534, v6506);
        await stdlib.mapSet(map0, ctc9, v4460, ctc1, v6546);
        const v6547 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5176, ctc1), null);
        const v6548 = stdlib.fromSome(v6547, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6549 = stdlib.safeAdd256(v6548, v6506);
        await stdlib.mapSet(map0, ctc9, v5176, ctc1, v6549);
        null;
        await txn3.getOutput('Provider_deposit', 'v6506', ctc1, v6506);
        const v6560 = v4482.closed;
        const v6561 = v4482.decimals;
        const v6563 = v4482.name;
        const v6565 = v4482.protoBals;
        const v6567 = v4482.symbol;
        const v6568 = v4482.tokA;
        const v6569 = v4482.tokB;
        const v6570 = v4482.totalSupply;
        const v6571 = v4482.zeroAddress;
        const v6573 = v4583.A;
        const v6578 = stdlib.safeAdd256(v6573, v6500);
        const v6579 = v4583.B;
        const v6584 = stdlib.safeAdd256(v6579, v6503);
        const v6593 = stdlib.safeSub256(v4579, v6506);
        const v6597 = stdlib.safeAdd256(v4580, v6506);
        const v6600 = {
          A: v6593,
          B: v6597
          };
        const v6601 = {
          A: v6578,
          B: v6584
          };
        const v6602 = {
          closed: v6560,
          decimals: v6561,
          lptBals: v6600,
          name: v6563,
          poolBals: v6601,
          protoBals: v6565,
          protoInfo: v6492,
          symbol: v6567,
          tokA: v6568,
          tokB: v6569,
          totalSupply: v6570,
          zeroAddress: v6571
          };
        const cv4482 = v6602;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositA0_468': {
        const v7314 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v7675 = v7314[stdlib.checkedBigNumberify('./index.rsh:1028:12:spread', stdlib.UInt_max, '0')];
        const v7676 = v4482.protoInfo;
        const v7677 = v7676.locked;
        const v7678 = v7677 ? false : true;
        stdlib.assert(v7678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1029:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1031:15:application call to [unknown function] (defined at: ./index.rsh:1031:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v7683 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
        const v7684 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v7685 = [v5176, v4460];
        const v7686 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7685];
        const v7690 = undefined /* Remote */;
        const v7691 = await txn3.getOutput('internal', 'v7690', ctc23, v7690);
        const v7693 = v7691[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
        const v7698 = stdlib.add(v4486, v7693);
        const v7699 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7693);
        stdlib.assert(v7699, {
          at: './index.rsh:981:15:application',
          fs: ['at ./index.rsh:1032:37:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1031:15:application call to [unknown function] (defined at: ./index.rsh:1031:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v7700 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5176, ctc1), null);
        const v7701 = stdlib.fromSome(v7700, stdlib.checkedBigNumberify('./index.rsh:1033:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v7702 = stdlib.safeAdd256(v7701, v7675);
        await stdlib.mapSet(map2, ctc9, v5176, ctc1, v7702);
        await txn3.getOutput('Provider_depositA', 'v7702', ctc1, v7702);
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v7698;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositB0_468': {
        const v8381 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v8778 = v8381[stdlib.checkedBigNumberify('./index.rsh:1040:12:spread', stdlib.UInt_max, '0')];
        const v8779 = v4482.protoInfo;
        const v8780 = v8779.locked;
        const v8781 = v8780 ? false : true;
        stdlib.assert(v8781, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1041:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1043:15:application call to [unknown function] (defined at: ./index.rsh:1043:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v8786 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
        const v8787 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v8788 = [v5176, v4460];
        const v8789 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v8788];
        const v8793 = undefined /* Remote */;
        const v8794 = await txn3.getOutput('internal', 'v8793', ctc23, v8793);
        const v8796 = v8794[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
        const v8801 = stdlib.add(v4486, v8796);
        const v8802 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8796);
        stdlib.assert(v8802, {
          at: './index.rsh:981:15:application',
          fs: ['at ./index.rsh:1044:37:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1043:15:application call to [unknown function] (defined at: ./index.rsh:1043:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v8803 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5176, ctc1), null);
        const v8804 = stdlib.fromSome(v8803, stdlib.checkedBigNumberify('./index.rsh:1045:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v8805 = stdlib.safeAdd256(v8804, v8778);
        await stdlib.mapSet(map3, ctc9, v5176, ctc1, v8805);
        await txn3.getOutput('Provider_depositB', 'v8805', ctc1, v8805);
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v8801;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_468': {
        const v9448 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v9881 = v9448[stdlib.checkedBigNumberify('./index.rsh:1114:12:spread', stdlib.UInt_max, '0')];
        const v9882 = v9448[stdlib.checkedBigNumberify('./index.rsh:1114:12:spread', stdlib.UInt_max, '1')];
        const v9883 = v9882.A;
        const v9884 = v9882.B;
        const v9886 = v4583.A;
        const v9887 = v4583.B;
        const v9891 = stdlib.safeMul256(v9881, v9886);
        const v9892 = stdlib.safeDiv256(v9891, v4580);
        const v9896 = stdlib.safeMul256(v9881, v9887);
        const v9897 = stdlib.safeDiv256(v9896, v4580);
        const v9899 = stdlib.le256(v9883, v9892);
        stdlib.assert(v9899, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage A',
          who: 'Deployer'
          });
        const v9901 = stdlib.le256(v9884, v9897);
        stdlib.assert(v9901, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage B',
          who: 'Deployer'
          });
        const v9906 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5176, ctc1), null);
        const v9907 = stdlib.fromSome(v9906, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9908 = stdlib.ge256(v9907, v9881);
        stdlib.assert(v9908, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:860:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1120:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v9910 = [v5176, v4460];
        const v9911 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc25, v9910, ctc1), null);
        const v9912 = stdlib.fromSome(v9911, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9913 = stdlib.ge256(v9912, v9881);
        stdlib.assert(v9913, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:864:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1120:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v9921 = stdlib.safeSub256(v9907, v9881);
        await stdlib.mapSet(map0, ctc9, v5176, ctc1, v9921);
        const v9922 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4460, ctc1), null);
        const v9923 = stdlib.fromSome(v9922, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9924 = stdlib.safeAdd256(v9923, v9881);
        await stdlib.mapSet(map0, ctc9, v4460, ctc1, v9924);
        null;
        const v9929 = stdlib.safeSub256(v9912, v9881);
        await stdlib.mapSet(map1, ctc25, v9910, ctc1, v9929);
        null;
        const v9932 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5176, ctc1), null);
        const v9933 = stdlib.fromSome(v9932, stdlib.checkedBigNumberify('./index.rsh:1124:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9934 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5176, ctc1), null);
        const v9935 = stdlib.fromSome(v9934, stdlib.checkedBigNumberify('./index.rsh:1125:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9936 = stdlib.safeAdd256(v9933, v9892);
        await stdlib.mapSet(map2, ctc9, v5176, ctc1, v9936);
        const v9937 = stdlib.safeAdd256(v9935, v9897);
        await stdlib.mapSet(map3, ctc9, v5176, ctc1, v9937);
        const v9938 = {
          A: v9892,
          B: v9897
          };
        await txn3.getOutput('Provider_withdraw', 'v9938', ctc15, v9938);
        const v9950 = v4482.closed;
        const v9951 = v4482.decimals;
        const v9953 = v4482.name;
        const v9955 = v4482.protoBals;
        const v9956 = v4482.protoInfo;
        const v9957 = v4482.symbol;
        const v9958 = v4482.tokA;
        const v9959 = v4482.tokB;
        const v9960 = v4482.totalSupply;
        const v9961 = v4482.zeroAddress;
        const v9970 = stdlib.safeAdd256(v4579, v9881);
        const v9973 = stdlib.safeSub256(v4580, v9881);
        const v9980 = stdlib.safeSub256(v9886, v9892);
        const v9984 = stdlib.safeSub256(v9887, v9897);
        const v9986 = {
          A: v9970,
          B: v9973
          };
        const v9987 = {
          A: v9980,
          B: v9984
          };
        const v9988 = {
          closed: v9950,
          decimals: v9951,
          lptBals: v9986,
          name: v9953,
          poolBals: v9987,
          protoBals: v9955,
          protoInfo: v9956,
          symbol: v9957,
          tokA: v9958,
          tokB: v9959,
          totalSupply: v9960,
          zeroAddress: v9961
          };
        const cv4482 = v9988;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawA0_468': {
        const v10515 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v11061 = v10515[stdlib.checkedBigNumberify('./index.rsh:1088:12:spread', stdlib.UInt_max, '0')];
        const v11062 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5176, ctc1), null);
        const v11063 = stdlib.fromSome(v11062, stdlib.checkedBigNumberify('./index.rsh:1089:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11064 = stdlib.ge256(v11063, v11061);
        stdlib.assert(v11064, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1090:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1092:15:application call to [unknown function] (defined at: ./index.rsh:1092:15:function exp)'],
          msg: 'Reserve A balances insufficient',
          who: 'Deployer'
          });
        const v11067 = stdlib.safeSub256(v11063, v11061);
        await stdlib.mapSet(map2, ctc9, v5176, ctc1, v11067);
        await txn3.getOutput('Provider_withdrawA', 'v11067', ctc1, v11067);
        const v11075 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v11076 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
        const v11080 = undefined /* Remote */;
        const v11081 = await txn3.getOutput('internal', 'v11080', ctc23, v11080);
        const v11083 = v11081[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
        const v11088 = stdlib.add(v4486, v11083);
        const v11089 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11083);
        stdlib.assert(v11089, {
          at: './index.rsh:966:15:application',
          fs: ['at ./index.rsh:1096:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:1092:15:application call to [unknown function] (defined at: ./index.rsh:1092:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v11088;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawB0_468': {
        const v11582 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v12159 = v11582[stdlib.checkedBigNumberify('./index.rsh:1101:12:spread', stdlib.UInt_max, '0')];
        const v12160 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5176, ctc1), null);
        const v12161 = stdlib.fromSome(v12160, stdlib.checkedBigNumberify('./index.rsh:1102:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v12162 = stdlib.ge256(v12161, v12159);
        stdlib.assert(v12162, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1105:15:application call to [unknown function] (defined at: ./index.rsh:1105:15:function exp)'],
          msg: 'Reserve B balances insufficient',
          who: 'Deployer'
          });
        const v12165 = stdlib.safeSub256(v12161, v12159);
        await stdlib.mapSet(map3, ctc9, v5176, ctc1, v12165);
        await txn3.getOutput('Provider_withdrawB', 'v12165', ctc1, v12165);
        const v12173 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v12174 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
        const v12178 = undefined /* Remote */;
        const v12179 = await txn3.getOutput('internal', 'v12178', ctc23, v12178);
        const v12181 = v12179[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
        const v12186 = stdlib.add(v4486, v12181);
        const v12187 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v12181);
        stdlib.assert(v12187, {
          at: './index.rsh:966:15:application',
          fs: ['at ./index.rsh:1109:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:1105:15:application call to [unknown function] (defined at: ./index.rsh:1105:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v12186;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_468': {
        const v12649 = v5177[1];
        undefined /* setApiDetails */;
        ;
        await txn3.getOutput('Trader_exactSwapAForB', 'v4478', ctc15, v4478);
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_468': {
        const v13716 = v5177[1];
        undefined /* setApiDetails */;
        ;
        await txn3.getOutput('Trader_exactSwapBForA', 'v4478', ctc15, v4478);
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_468': {
        const v14783 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v15423 = v14783[stdlib.checkedBigNumberify('./index.rsh:1291:12:spread', stdlib.UInt_max, '0')];
        const v15424 = v14783[stdlib.checkedBigNumberify('./index.rsh:1291:12:spread', stdlib.UInt_max, '1')];
        const v15428 = v4482.protoInfo;
        const v15430 = v4583.A;
        const v15431 = v4583.B;
        const v15432 = v15428.protoFee;
        const v15433 = v15428.totFee;
        const v15434 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15433);
        const v15435 = stdlib.safeMul256(v15423, v15434);
        const v15436 = stdlib.safeMul256(v15430, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v15437 = stdlib.safeAdd256(v15436, v15435);
        const v15438 = stdlib.safeMul256(v15435, v15431);
        const v15439 = stdlib.safeDiv256(v15438, v15437);
        const v15443 = stdlib.safeMul256(v15432, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v15444 = stdlib.safeDiv256(v15443, v15433);
        const v15448 = stdlib.safeAdd256(v15430, v15423);
        const v15452 = stdlib.safeMul256(v15423, v15431);
        const v15453 = stdlib.safeDiv256(v15452, v15448);
        const v15454 = stdlib.safeSub256(v15453, v15439);
        const v15456 = stdlib.safeMul256(v15454, v15444);
        const v15457 = stdlib.safeDiv256(v15456, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v15458 = stdlib.safeMul256(v15423, v15432);
        const v15459 = stdlib.safeDiv256(v15458, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v15463 = stdlib.safeMul256(v15459, v15431);
        const v15464 = stdlib.safeDiv256(v15463, v15448);
        const v15465 = stdlib.gt256(v15464, v15457);
        const v15466 = [v15459, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v15467 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15457];
        const v15468 = v15465 ? v15466 : v15467;
        const v15470 = v15468[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '0')];
        const v15471 = v15468[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '1')];
        const v15476 = v15428.locked;
        const v15477 = v15476 ? false : true;
        stdlib.assert(v15477, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v15494 = stdlib.safeSub256(v15431, v15439);
        const v15498 = stdlib.safeSub256(v15448, v15470);
        const v15501 = stdlib.safeSub256(v15494, v15471);
        const v15503 = v4482.protoBals;
        const v15504 = v15503.A;
        const v15508 = stdlib.safeAdd256(v15504, v15470);
        const v15509 = v15503.B;
        const v15513 = stdlib.safeAdd256(v15509, v15471);
        const v15515 = stdlib.le256(v15424, v15439);
        stdlib.assert(v15515, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1192:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v15520 = stdlib.safeMul256(v15430, v15431);
        const v15521 = stdlib.safeMul256(v15498, v15501);
        const v15522 = stdlib.ge256(v15521, v15520);
        stdlib.assert(v15522, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1202:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v15531 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
        const v15532 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v15533 = [v5176, v4460];
        const v15534 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v15533];
        const v15538 = undefined /* Remote */;
        const v15539 = await txn3.getOutput('internal', 'v15538', ctc23, v15538);
        const v15541 = v15539[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
        const v15546 = stdlib.add(v4486, v15541);
        const v15547 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15541);
        stdlib.assert(v15547, {
          at: './index.rsh:981:15:application',
          fs: ['at ./index.rsh:1240:39:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1293:25:application call to "c" (defined at: ./index.rsh:1237:22:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v15548 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5176, ctc1), null);
        const v15549 = stdlib.fromSome(v15548, stdlib.checkedBigNumberify('./index.rsh:1242:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v15550 = stdlib.safeAdd256(v15549, v15439);
        await stdlib.mapSet(map3, ctc9, v5176, ctc1, v15550);
        const v15551 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5176, ctc1), null);
        const v15552 = stdlib.fromSome(v15551, stdlib.checkedBigNumberify('./index.rsh:1244:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map2, ctc9, v5176, ctc1, v15552);
        const v15553 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v15439
          };
        await txn3.getOutput('Trader_swapAForB', 'v15553', ctc15, v15553);
        const v15563 = {
          A: v15423,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v15565 = {
          A: v15498,
          B: v15501
          };
        const v15566 = [v5176, v15563, v15553, v15565];
        const v15567 = ['SwapEvent', v15566];
        null;
        const v15568 = v4482.closed;
        const v15569 = v4482.decimals;
        const v15571 = v4482.name;
        const v15575 = v4482.symbol;
        const v15576 = v4482.tokA;
        const v15577 = v4482.tokB;
        const v15578 = v4482.totalSupply;
        const v15579 = v4482.zeroAddress;
        const v15581 = {
          A: v15508,
          B: v15513
          };
        const v15582 = {
          closed: v15568,
          decimals: v15569,
          lptBals: v4578,
          name: v15571,
          poolBals: v15565,
          protoBals: v15581,
          protoInfo: v15428,
          symbol: v15575,
          tokA: v15576,
          tokB: v15577,
          totalSupply: v15578,
          zeroAddress: v15579
          };
        const cv4482 = v15582;
        const cv4483 = v5178;
        const cv4486 = v15546;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_468': {
        const v15850 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v16659 = v15850[stdlib.checkedBigNumberify('./index.rsh:1296:12:spread', stdlib.UInt_max, '0')];
        const v16660 = v15850[stdlib.checkedBigNumberify('./index.rsh:1296:12:spread', stdlib.UInt_max, '1')];
        const v16664 = v4482.protoInfo;
        const v16666 = v4583.B;
        const v16667 = v4583.A;
        const v16668 = v16664.protoFee;
        const v16669 = v16664.totFee;
        const v16670 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16669);
        const v16671 = stdlib.safeMul256(v16659, v16670);
        const v16672 = stdlib.safeMul256(v16666, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v16673 = stdlib.safeAdd256(v16672, v16671);
        const v16674 = stdlib.safeMul256(v16671, v16667);
        const v16675 = stdlib.safeDiv256(v16674, v16673);
        const v16679 = stdlib.safeMul256(v16668, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v16680 = stdlib.safeDiv256(v16679, v16669);
        const v16684 = stdlib.safeAdd256(v16666, v16659);
        const v16688 = stdlib.safeMul256(v16659, v16667);
        const v16689 = stdlib.safeDiv256(v16688, v16684);
        const v16690 = stdlib.safeSub256(v16689, v16675);
        const v16692 = stdlib.safeMul256(v16690, v16680);
        const v16693 = stdlib.safeDiv256(v16692, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v16694 = stdlib.safeMul256(v16659, v16668);
        const v16695 = stdlib.safeDiv256(v16694, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v16699 = stdlib.safeMul256(v16695, v16667);
        const v16700 = stdlib.safeDiv256(v16699, v16684);
        const v16701 = stdlib.gt256(v16700, v16693);
        const v16702 = [v16695, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v16703 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16693];
        const v16704 = v16701 ? v16702 : v16703;
        const v16706 = v16704[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '0')];
        const v16707 = v16704[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '1')];
        const v16712 = v16664.locked;
        const v16713 = v16712 ? false : true;
        stdlib.assert(v16713, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v16728 = stdlib.safeSub256(v16667, v16675);
        const v16734 = stdlib.safeSub256(v16728, v16707);
        const v16737 = stdlib.safeSub256(v16684, v16706);
        const v16739 = v4482.protoBals;
        const v16740 = v16739.A;
        const v16744 = stdlib.safeAdd256(v16740, v16707);
        const v16745 = v16739.B;
        const v16749 = stdlib.safeAdd256(v16745, v16706);
        const v16751 = stdlib.le256(v16660, v16675);
        stdlib.assert(v16751, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1192:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v16757 = stdlib.safeMul256(v16667, v16666);
        const v16758 = stdlib.safeMul256(v16734, v16737);
        const v16759 = stdlib.ge256(v16758, v16757);
        stdlib.assert(v16759, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1202:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v16768 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
        const v16769 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v16770 = [v5176, v4460];
        const v16771 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v16770];
        const v16775 = undefined /* Remote */;
        const v16776 = await txn3.getOutput('internal', 'v16775', ctc23, v16775);
        const v16778 = v16776[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
        const v16783 = stdlib.add(v4486, v16778);
        const v16784 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16778);
        stdlib.assert(v16784, {
          at: './index.rsh:981:15:application',
          fs: ['at ./index.rsh:1246:39:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1298:25:application call to "c" (defined at: ./index.rsh:1237:22:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v16785 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5176, ctc1), null);
        const v16786 = stdlib.fromSome(v16785, stdlib.checkedBigNumberify('./index.rsh:1248:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v16787 = stdlib.safeAdd256(v16786, v16675);
        await stdlib.mapSet(map2, ctc9, v5176, ctc1, v16787);
        const v16788 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5176, ctc1), null);
        const v16789 = stdlib.fromSome(v16788, stdlib.checkedBigNumberify('./index.rsh:1250:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map3, ctc9, v5176, ctc1, v16789);
        const v16790 = {
          A: v16675,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v16790', ctc15, v16790);
        const v16800 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v16659
          };
        const v16802 = {
          A: v16734,
          B: v16737
          };
        const v16803 = [v5176, v16800, v16790, v16802];
        const v16804 = ['SwapEvent', v16803];
        null;
        const v16805 = v4482.closed;
        const v16806 = v4482.decimals;
        const v16808 = v4482.name;
        const v16812 = v4482.symbol;
        const v16813 = v4482.tokA;
        const v16814 = v4482.tokB;
        const v16815 = v4482.totalSupply;
        const v16816 = v4482.zeroAddress;
        const v16818 = {
          A: v16744,
          B: v16749
          };
        const v16819 = {
          closed: v16805,
          decimals: v16806,
          lptBals: v4578,
          name: v16808,
          poolBals: v16802,
          protoBals: v16818,
          protoInfo: v16664,
          symbol: v16812,
          tokA: v16813,
          tokB: v16814,
          totalSupply: v16815,
          zeroAddress: v16816
          };
        const cv4482 = v16819;
        const cv4483 = v5178;
        const cv4486 = v16783;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'approve0_468': {
        const v16917 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v17896 = v16917[stdlib.checkedBigNumberify('./index.rsh:897:12:spread', stdlib.UInt_max, '0')];
        const v17897 = v16917[stdlib.checkedBigNumberify('./index.rsh:897:12:spread', stdlib.UInt_max, '1')];
        const v17899 = stdlib.addressEq(v5176, v4426);
        const v17900 = v17899 ? false : true;
        stdlib.assert(v17900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:852:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:20:application call to "chkApprove_" (defined at: ./index.rsh:851:56:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v17902 = stdlib.addressEq(v17896, v4426);
        const v17903 = v17902 ? false : true;
        stdlib.assert(v17903, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:853:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:20:application call to "chkApprove_" (defined at: ./index.rsh:851:56:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v17907 = [v5176, v17896];
        await stdlib.mapSet(map1, ctc25, v17907, ctc1, v17897);
        null;
        const v17909 = true;
        await txn3.getOutput('approve', 'v17909', ctc11, v17909);
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_468': {
        const v17984 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v18986 = v17984[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '0')];
        const v18987 = v17984[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '1')];
        const v18989 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5176, ctc1), null);
        const v18990 = stdlib.fromSome(v18989, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18991 = stdlib.ge256(v18990, v18987);
        stdlib.assert(v18991, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:846:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:877:22:application call to "checkTransfer" (defined at: ./index.rsh:845:52:function exp)', 'at ./index.rsh:879:15:application call to [unknown function] (defined at: ./index.rsh:879:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v18995 = true;
        await txn3.getOutput('transfer', 'v18995', ctc11, v18995);
        const v19005 = stdlib.safeSub256(v18990, v18987);
        await stdlib.mapSet(map0, ctc9, v5176, ctc1, v19005);
        const v19006 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v18986, ctc1), null);
        const v19007 = stdlib.fromSome(v19006, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v19008 = stdlib.safeAdd256(v19007, v18987);
        await stdlib.mapSet(map0, ctc9, v18986, ctc1, v19008);
        null;
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_468': {
        const v19051 = v5177[1];
        undefined /* setApiDetails */;
        ;
        const v20079 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '0')];
        const v20080 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '1')];
        const v20081 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '2')];
        const v20083 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v20079, ctc1), null);
        const v20084 = stdlib.fromSome(v20083, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v20085 = stdlib.ge256(v20084, v20081);
        stdlib.assert(v20085, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:860:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:888:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:890:15:application call to [unknown function] (defined at: ./index.rsh:890:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v20087 = [v20079, v5176];
        const v20088 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc25, v20087, ctc1), null);
        const v20089 = stdlib.fromSome(v20088, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v20090 = stdlib.ge256(v20089, v20081);
        stdlib.assert(v20090, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:864:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:888:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:890:15:application call to [unknown function] (defined at: ./index.rsh:890:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v20097 = stdlib.safeSub256(v20084, v20081);
        await stdlib.mapSet(map0, ctc9, v20079, ctc1, v20097);
        const v20098 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v20080, ctc1), null);
        const v20099 = stdlib.fromSome(v20098, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v20100 = stdlib.safeAdd256(v20099, v20081);
        await stdlib.mapSet(map0, ctc9, v20080, ctc1, v20100);
        null;
        const v20105 = stdlib.safeSub256(v20089, v20081);
        await stdlib.mapSet(map1, ctc25, v20087, ctc1, v20105);
        null;
        const v20108 = true;
        await txn3.getOutput('transferFrom', 'v20108', ctc11, v20108);
        const cv4482 = v4482;
        const cv4483 = v5178;
        const cv4486 = v4486;
        
        v4482 = cv4482;
        v4483 = cv4483;
        v4486 = cv4486;
        
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
    out_tys: [ctc26],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v20144], secs: v20146, time: v20145, didSend: v4358, from: v20143 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v20147 = null;
  await txn3.getOutput('Protocol_delete', 'v20147', ctc0, v20147);
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc9], ['locked', ctc7]]);
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Object({
    closed: ctc7,
    decimals: ctc3,
    lptBals: ctc8,
    name: ctc4,
    poolBals: ctc8,
    protoBals: ctc8,
    protoInfo: ctc10,
    symbol: ctc5,
    tokA: ctc11,
    tokB: ctc11,
    totalSupply: ctc1,
    zeroAddress: ctc9
    });
  const ctc13 = stdlib.T_Tuple([]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4422, v4423, v4482] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc3, ctc12]);
  const v20142 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1323:5:application',
    fs: ['at ./index.rsh:1323:5:application call to [unknown function] (defined at: ./index.rsh:1323:5:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4422, v4423, v4482, v20142],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1323:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v20144], secs: v20146, time: v20145, didSend: v4358, from: v20143 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v20147 = null;
      const v20148 = await txn1.getOutput('Protocol_delete', 'v20147', ctc0, v20147);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc12, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v20144], secs: v20146, time: v20145, didSend: v4358, from: v20143 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v20147 = null;
  const v20148 = await txn1.getOutput('Protocol_delete', 'v20147', ctc0, v20147);
  stdlib.protect(ctc0, await interact.out(v20144, v20148), {
    at: './index.rsh:1323:5:application',
    fs: ['at ./index.rsh:1323:5:application call to [unknown function] (defined at: ./index.rsh:1323:5:function exp)', 'at ./index.rsh:1324:6:application call to "k" (defined at: ./index.rsh:1323:5:function exp)'],
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc14,
    Provider_deposit0_468: ctc15,
    Provider_depositA0_468: ctc16,
    Provider_depositB0_468: ctc16,
    Provider_withdraw0_468: ctc17,
    Provider_withdrawA0_468: ctc16,
    Provider_withdrawB0_468: ctc16,
    Trader_exactSwapAForB0_468: ctc18,
    Trader_exactSwapBForA0_468: ctc18,
    Trader_swapAForB0_468: ctc18,
    Trader_swapBForA0_468: ctc18,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc10, ctc4]);
  const ctc24 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4659 = ctc.selfAddress();
  const v4661 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:995:60:application call to [unknown function] (defined at: ./index.rsh:995:60:function exp)', 'at ./index.rsh:781:31:application call to "runProtocol_harvest0_468" (defined at: ./index.rsh:995:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v4663 = v4661[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4664 = v4663.protoFee;
  const v4665 = v4663.lpFee;
  const v4666 = v4663.totFee;
  const v4667 = stdlib.lt256(v4664, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4668 = stdlib.lt256(v4665, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4669 = v4667 ? v4668 : false;
  let v4670;
  if (v4669) {
    const v4671 = stdlib.safeAdd256(v4665, v4664);
    const v4672 = stdlib.eq256(v4666, v4671);
    v4670 = v4672;
    }
  else {
    v4670 = false;
    }
  const v4673 = stdlib.lt256(v4666, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4674 = v4670 ? v4673 : false;
  const v4675 = stdlib.gt256(v4666, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4676 = v4674 ? v4675 : false;
  stdlib.assert(v4676, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:995:60:application call to [unknown function] (defined at: ./index.rsh:995:60:function exp)', 'at ./index.rsh:781:31:application call to "runProtocol_harvest0_468" (defined at: ./index.rsh:995:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v4680 = v4482.protoInfo;
  const v4681 = v4680.protoAddr;
  const v4682 = stdlib.addressEq(v4659, v4681);
  stdlib.assert(v4682, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:989:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:996:21:application call to "chkProtoAddr" (defined at: ./index.rsh:988:42:function exp)', 'at ./index.rsh:995:60:application call to [unknown function] (defined at: ./index.rsh:995:60:function exp)', 'at ./index.rsh:781:31:application call to "runProtocol_harvest0_468" (defined at: ./index.rsh:995:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v4690;
  if (v4669) {
    const v4691 = stdlib.safeAdd256(v4665, v4664);
    const v4692 = stdlib.eq256(v4666, v4691);
    v4690 = v4692;
    }
  else {
    v4690 = false;
    }
  const v4694 = v4690 ? v4673 : false;
  const v4696 = v4694 ? v4675 : false;
  stdlib.assert(v4696, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:332:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:16:application call to "chkFees" (defined at: ./index.rsh:332:21:function exp)', 'at ./index.rsh:995:60:application call to [unknown function] (defined at: ./index.rsh:995:60:function exp)', 'at ./index.rsh:781:31:application call to "runProtocol_harvest0_468" (defined at: ./index.rsh:995:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v4710 = ['Protocol_harvest0_468', v4661];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4710],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:995:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          const v5199 = v5180[stdlib.checkedBigNumberify('./index.rsh:995:12:spread', stdlib.UInt_max, '0')];
          const v5200 = v5180[stdlib.checkedBigNumberify('./index.rsh:995:12:spread', stdlib.UInt_max, '1')];
          const v5206 = v5200.protoFee;
          const v5207 = v5200.lpFee;
          const v5208 = v5200.totFee;
          const v5223 = (stdlib.le(await ctc.getBalance(), v4486) ? stdlib.checkedBigNumberify('./index.rsh:1000:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4486));
          const v5224 = stdlib.safeAdd(v5223, v4486);
          const v5225 = v5200.locked;
          const v5226 = v5225 ? false : false;
          const v5228 = v4583.A;
          const v5229 = v4583.B;
          const v5230 = stdlib.eq256(v5228, stdlib.checkedBigNumberify('./index.rsh:74:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5231 = stdlib.eq256(v5229, stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5232 = v5230 ? v5231 : false;
          const v5233 = v5226 ? v5232 : false;
          if (v5233) {
            await stdlib.simMapSet(sim_r, 0, ctc8, v4426, ctc1, undefined /* Nothing */);
            const v5237 = stdlib.sub(v5224, v5223);
            sim_r.txns.push({
              kind: 'from',
              to: v5199,
              tok: undefined /* Nothing */
              });
            const v5238 = v4482.protoBals;
            const v5239 = v5238.A;
            const v5241 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
            const v5242 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
            const v5246 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4414,
                remote: ({
                  accs: [v5199],
                  apps: [v4414],
                  bills: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc24, v5241], [ctc24, v5242]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:960:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5247 = await txn1.getOutput('internal', 'v5246', ctc22, v5246);
            const v5249 = v5247[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
            const v5254 = stdlib.add(v5237, v5249);
            const v5257 = v5238.B;
            const v5259 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
            const v5260 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
            const v5264 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4416,
                remote: ({
                  accs: [v5199],
                  apps: [v4416],
                  bills: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc24, v5259], [ctc24, v5260]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:960:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5265 = await txn1.getOutput('internal', 'v5264', ctc22, v5264);
            const v5267 = v5265[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
            const v5272 = stdlib.add(v5254, v5267);
            const v5277 = {
              A: v5239,
              B: v5257
              };
            const v5278 = [v5277, v5223];
            const v5279 = await txn1.getOutput('Protocol_harvest', 'v5278', ctc23, v5278);
            
            const v5306 = v5200.protoAddr;
            const v5308 = {
              locked: false,
              lpFee: v5207,
              protoAddr: v5306,
              protoFee: v5206,
              totFee: v5208
              };
            const v5309 = [v5308];
            const v5310 = ['HarvestEvent', v5309];
            null;
            const v5312 = v4482.decimals;
            const v5314 = v4482.name;
            const v5318 = v4482.symbol;
            const v5319 = v4482.tokA;
            const v5320 = v4482.tokB;
            const v5321 = v4482.totalSupply;
            const v5322 = v4482.zeroAddress;
            const v5324 = {
              closed: true,
              decimals: v5312,
              lptBals: v4578,
              name: v5314,
              poolBals: v4583,
              protoBals: v4478,
              protoInfo: v5200,
              symbol: v5318,
              tokA: v5319,
              tokB: v5320,
              totalSupply: v5321,
              zeroAddress: v5322
              };
            const v46946 = v5324;
            const v46948 = v5272;
            const v46949 = v5324.closed;
            if (v46949) {
              sim_r.isHalt = false;
              }
            else {
              const v46951 = v5324.lptBals;
              const v46952 = v46951.A;
              const v46953 = v46951.B;
              const v46954 = v5324.poolBals;
              sim_r.isHalt = false;
              }}
          else {
            const v5331 = stdlib.sub(v5224, v5223);
            sim_r.txns.push({
              kind: 'from',
              to: v5199,
              tok: undefined /* Nothing */
              });
            const v5332 = v4482.protoBals;
            const v5333 = v5332.A;
            const v5335 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
            const v5336 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
            const v5340 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4414,
                remote: ({
                  accs: [v5199],
                  apps: [v4414],
                  bills: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc24, v5335], [ctc24, v5336]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:960:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5341 = await txn1.getOutput('internal', 'v5340', ctc22, v5340);
            const v5343 = v5341[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
            const v5348 = stdlib.add(v5331, v5343);
            const v5351 = v5332.B;
            const v5353 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
            const v5354 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
            const v5358 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v4416,
                remote: ({
                  accs: [v5199],
                  apps: [v4416],
                  bills: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  boxes: [[ctc24, v5353], [ctc24, v5354]],
                  fees: stdlib.checkedBigNumberify('./index.rsh:960:21:decimal', stdlib.UInt_max, '1'),
                  pays: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
            const v5359 = await txn1.getOutput('internal', 'v5358', ctc22, v5358);
            const v5361 = v5359[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
            const v5366 = stdlib.add(v5348, v5361);
            const v5371 = {
              A: v5333,
              B: v5351
              };
            const v5372 = [v5371, v5223];
            const v5373 = await txn1.getOutput('Protocol_harvest', 'v5372', ctc23, v5372);
            
            const v5400 = v5200.protoAddr;
            const v5402 = {
              locked: v5225,
              lpFee: v5207,
              protoAddr: v5400,
              protoFee: v5206,
              totFee: v5208
              };
            const v5403 = [v5402];
            const v5404 = ['HarvestEvent', v5403];
            null;
            const v5406 = v4482.decimals;
            const v5408 = v4482.name;
            const v5412 = v4482.symbol;
            const v5413 = v4482.tokA;
            const v5414 = v4482.tokB;
            const v5415 = v4482.totalSupply;
            const v5416 = v4482.zeroAddress;
            const v5418 = {
              closed: false,
              decimals: v5406,
              lptBals: v4578,
              name: v5408,
              poolBals: v4583,
              protoBals: v4478,
              protoInfo: v5200,
              symbol: v5412,
              tokA: v5413,
              tokB: v5414,
              totalSupply: v5415,
              zeroAddress: v5416
              };
            const v46962 = v5418;
            const v46964 = v5366;
            const v46965 = v5418.closed;
            if (v46965) {
              sim_r.isHalt = false;
              }
            else {
              const v46967 = v5418.lptBals;
              const v46968 = v46967.A;
              const v46969 = v46967.B;
              const v46970 = v5418.poolBals;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v5199 = v5180[stdlib.checkedBigNumberify('./index.rsh:995:12:spread', stdlib.UInt_max, '0')];
      const v5200 = v5180[stdlib.checkedBigNumberify('./index.rsh:995:12:spread', stdlib.UInt_max, '1')];
      const v5202 = v4482.protoInfo;
      const v5203 = v5202.protoAddr;
      const v5204 = stdlib.addressEq(v5176, v5203);
      stdlib.assert(v5204, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:989:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:996:21:application call to "chkProtoAddr" (defined at: ./index.rsh:988:42:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v5206 = v5200.protoFee;
      const v5207 = v5200.lpFee;
      const v5208 = v5200.totFee;
      const v5209 = stdlib.lt256(v5206, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v5210 = stdlib.lt256(v5207, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v5211 = v5209 ? v5210 : false;
      let v5212;
      if (v5211) {
        const v5213 = stdlib.safeAdd256(v5207, v5206);
        const v5214 = stdlib.eq256(v5208, v5213);
        v5212 = v5214;
        }
      else {
        v5212 = false;
        }
      const v5215 = stdlib.lt256(v5208, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v5216 = v5212 ? v5215 : false;
      const v5217 = stdlib.gt256(v5208, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5218 = v5216 ? v5217 : false;
      stdlib.assert(v5218, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:332:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:16:application call to "chkFees" (defined at: ./index.rsh:332:21:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v5223 = (stdlib.le(await ctc.getBalance(), v4486) ? stdlib.checkedBigNumberify('./index.rsh:1000:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4486));
      const v5224 = stdlib.safeAdd(v5223, v4486);
      const v5225 = v5200.locked;
      const v5226 = v5225 ? false : false;
      const v5228 = v4583.A;
      const v5229 = v4583.B;
      const v5230 = stdlib.eq256(v5228, stdlib.checkedBigNumberify('./index.rsh:74:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5231 = stdlib.eq256(v5229, stdlib.checkedBigNumberify('./index.rsh:74:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5232 = v5230 ? v5231 : false;
      const v5233 = v5226 ? v5232 : false;
      if (v5233) {
        await stdlib.mapSet(map0, ctc8, v4426, ctc1, undefined /* Nothing */);
        const v5237 = stdlib.sub(v5224, v5223);
        ;
        const v5238 = v4482.protoBals;
        const v5239 = v5238.A;
        const v5241 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v5242 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
        const v5246 = undefined /* Remote */;
        const v5247 = await txn1.getOutput('internal', 'v5246', ctc22, v5246);
        const v5249 = v5247[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
        const v5254 = stdlib.add(v5237, v5249);
        const v5255 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5249);
        stdlib.assert(v5255, {
          at: './index.rsh:966:15:application',
          fs: ['at ./index.rsh:1007:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'remote bill check',
          who: 'Protocol_harvest'
          });
        const v5257 = v5238.B;
        const v5259 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v5260 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
        const v5264 = undefined /* Remote */;
        const v5265 = await txn1.getOutput('internal', 'v5264', ctc22, v5264);
        const v5267 = v5265[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
        const v5272 = stdlib.add(v5254, v5267);
        const v5273 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5267);
        stdlib.assert(v5273, {
          at: './index.rsh:966:15:application',
          fs: ['at ./index.rsh:1008:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'remote bill check',
          who: 'Protocol_harvest'
          });
        const v5277 = {
          A: v5239,
          B: v5257
          };
        const v5278 = [v5277, v5223];
        const v5279 = await txn1.getOutput('Protocol_harvest', 'v5278', ctc23, v5278);
        if (v2757) {
          stdlib.protect(ctc0, await interact.out(v5180, v5279), {
            at: './index.rsh:995:13:application',
            fs: ['at ./index.rsh:995:13:application call to [unknown function] (defined at: ./index.rsh:995:13:function exp)', 'at ./index.rsh:1009:14:application call to "k" (defined at: ./index.rsh:999:15:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
            msg: 'out',
            who: 'Protocol_harvest'
            });
          }
        else {
          }
        
        const v5306 = v5200.protoAddr;
        const v5308 = {
          locked: false,
          lpFee: v5207,
          protoAddr: v5306,
          protoFee: v5206,
          totFee: v5208
          };
        const v5309 = [v5308];
        const v5310 = ['HarvestEvent', v5309];
        null;
        const v5312 = v4482.decimals;
        const v5314 = v4482.name;
        const v5318 = v4482.symbol;
        const v5319 = v4482.tokA;
        const v5320 = v4482.tokB;
        const v5321 = v4482.totalSupply;
        const v5322 = v4482.zeroAddress;
        const v5324 = {
          closed: true,
          decimals: v5312,
          lptBals: v4578,
          name: v5314,
          poolBals: v4583,
          protoBals: v4478,
          protoInfo: v5200,
          symbol: v5318,
          tokA: v5319,
          tokB: v5320,
          totalSupply: v5321,
          zeroAddress: v5322
          };
        const v46946 = v5324;
        const v46948 = v5272;
        const v46949 = v5324.closed;
        if (v46949) {
          return;
          }
        else {
          const v46951 = v5324.lptBals;
          const v46952 = v46951.A;
          const v46953 = v46951.B;
          const v46954 = v5324.poolBals;
          return;
          }}
      else {
        const v5331 = stdlib.sub(v5224, v5223);
        ;
        const v5332 = v4482.protoBals;
        const v5333 = v5332.A;
        const v5335 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v5336 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
        const v5340 = undefined /* Remote */;
        const v5341 = await txn1.getOutput('internal', 'v5340', ctc22, v5340);
        const v5343 = v5341[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
        const v5348 = stdlib.add(v5331, v5343);
        const v5349 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5343);
        stdlib.assert(v5349, {
          at: './index.rsh:966:15:application',
          fs: ['at ./index.rsh:1007:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'remote bill check',
          who: 'Protocol_harvest'
          });
        const v5351 = v5332.B;
        const v5353 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
        const v5354 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5199];
        const v5358 = undefined /* Remote */;
        const v5359 = await txn1.getOutput('internal', 'v5358', ctc22, v5358);
        const v5361 = v5359[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
        const v5366 = stdlib.add(v5348, v5361);
        const v5367 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5361);
        stdlib.assert(v5367, {
          at: './index.rsh:966:15:application',
          fs: ['at ./index.rsh:1008:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'remote bill check',
          who: 'Protocol_harvest'
          });
        const v5371 = {
          A: v5333,
          B: v5351
          };
        const v5372 = [v5371, v5223];
        const v5373 = await txn1.getOutput('Protocol_harvest', 'v5372', ctc23, v5372);
        if (v2757) {
          stdlib.protect(ctc0, await interact.out(v5180, v5373), {
            at: './index.rsh:995:13:application',
            fs: ['at ./index.rsh:995:13:application call to [unknown function] (defined at: ./index.rsh:995:13:function exp)', 'at ./index.rsh:1009:14:application call to "k" (defined at: ./index.rsh:999:15:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
            msg: 'out',
            who: 'Protocol_harvest'
            });
          }
        else {
          }
        
        const v5400 = v5200.protoAddr;
        const v5402 = {
          locked: v5225,
          lpFee: v5207,
          protoAddr: v5400,
          protoFee: v5206,
          totFee: v5208
          };
        const v5403 = [v5402];
        const v5404 = ['HarvestEvent', v5403];
        null;
        const v5406 = v4482.decimals;
        const v5408 = v4482.name;
        const v5412 = v4482.symbol;
        const v5413 = v4482.tokA;
        const v5414 = v4482.tokB;
        const v5415 = v4482.totalSupply;
        const v5416 = v4482.zeroAddress;
        const v5418 = {
          closed: false,
          decimals: v5406,
          lptBals: v4578,
          name: v5408,
          poolBals: v4583,
          protoBals: v4478,
          protoInfo: v5200,
          symbol: v5412,
          tokA: v5413,
          tokB: v5414,
          totalSupply: v5415,
          zeroAddress: v5416
          };
        const v46962 = v5418;
        const v46964 = v5366;
        const v46965 = v5418.closed;
        if (v46965) {
          return;
          }
        else {
          const v46967 = v5418.lptBals;
          const v46968 = v46967.A;
          const v46969 = v46967.B;
          const v46970 = v5418.poolBals;
          return;
          }}
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc14,
    Provider_depositA0_468: ctc16,
    Provider_depositB0_468: ctc16,
    Provider_withdraw0_468: ctc17,
    Provider_withdrawA0_468: ctc16,
    Provider_withdrawB0_468: ctc16,
    Trader_exactSwapAForB0_468: ctc18,
    Trader_exactSwapBForA0_468: ctc18,
    Trader_swapAForB0_468: ctc18,
    Trader_swapBForA0_468: ctc18,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4744 = ctc.selfAddress();
  const v4746 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1052:45:application call to [unknown function] (defined at: ./index.rsh:1052:45:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_deposit0_468" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v4747 = v4746[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4748 = v4746[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4749 = v4747.A;
  const v4750 = v4747.B;
  const v4753 = v4482.protoInfo;
  const v4754 = v4753.locked;
  const v4755 = v4754 ? false : true;
  stdlib.assert(v4755, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1053:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1052:45:application call to [unknown function] (defined at: ./index.rsh:1052:45:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_deposit0_468" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v4757 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v4744, ctc1), null);
  const v4758 = stdlib.fromSome(v4757, stdlib.checkedBigNumberify('./index.rsh:1054:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4759 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v4744, ctc1), null);
  const v4760 = stdlib.fromSome(v4759, stdlib.checkedBigNumberify('./index.rsh:1055:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4762 = stdlib.ge256(v4758, v4749);
  stdlib.assert(v4762, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1056:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1052:45:application call to [unknown function] (defined at: ./index.rsh:1052:45:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_deposit0_468" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'inBals A balance insufficient',
    who: 'Provider_deposit'
    });
  const v4765 = stdlib.ge256(v4760, v4750);
  stdlib.assert(v4765, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1057:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1052:45:application call to [unknown function] (defined at: ./index.rsh:1052:45:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_deposit0_468" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'inBals B balance insufficient',
    who: 'Provider_deposit'
    });
  let v4767;
  const v4773 = stdlib.eq256(v4580, stdlib.checkedBigNumberify('./index.rsh:316:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  if (v4773) {
    const v4774 = stdlib.safeMul256(v4749, v4750);
    const v4775 = stdlib.sqrt256(v4774);
    v4767 = v4775;
    }
  else {
    const v4776 = v4583.A;
    const v4777 = v4583.B;
    const v4781 = stdlib.safeMul256(v4749, v4580);
    const v4782 = stdlib.safeDiv256(v4781, v4776);
    const v4786 = stdlib.safeMul256(v4750, v4580);
    const v4787 = stdlib.safeDiv256(v4786, v4777);
    const v4788 = stdlib.lt256(v4782, v4787);
    const v4789 = v4788 ? v4782 : v4787;
    v4767 = v4789;
    }
  const v4790 = stdlib.le256(v4748, v4767);
  stdlib.assert(v4790, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1059:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1052:45:application call to [unknown function] (defined at: ./index.rsh:1052:45:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_deposit0_468" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v4794 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4460, ctc1), null);
  const v4795 = stdlib.fromSome(v4794, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4796 = stdlib.ge256(v4795, v4767);
  stdlib.assert(v4796, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:846:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1060:22:application call to "checkTransfer" (defined at: ./index.rsh:845:52:function exp)', 'at ./index.rsh:1052:45:application call to [unknown function] (defined at: ./index.rsh:1052:45:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_deposit0_468" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'Provider_deposit'
    });
  const v4807 = ['Provider_deposit0_468', v4746];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4807],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1052:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          ;
          const v6490 = v6247[stdlib.checkedBigNumberify('./index.rsh:1052:12:spread', stdlib.UInt_max, '0')];
          const v6492 = v4482.protoInfo;
          const v6496 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5176, ctc1), null);
          const v6497 = stdlib.fromSome(v6496, stdlib.checkedBigNumberify('./index.rsh:1054:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6498 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5176, ctc1), null);
          const v6499 = stdlib.fromSome(v6498, stdlib.checkedBigNumberify('./index.rsh:1055:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6500 = v6490.A;
          const v6503 = v6490.B;
          let v6506;
          const v6512 = stdlib.eq256(v4580, stdlib.checkedBigNumberify('./index.rsh:316:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          if (v6512) {
            const v6513 = stdlib.safeMul256(v6500, v6503);
            const v6514 = stdlib.sqrt256(v6513);
            v6506 = v6514;
            }
          else {
            const v6515 = v4583.A;
            const v6516 = v4583.B;
            const v6520 = stdlib.safeMul256(v6500, v4580);
            const v6521 = stdlib.safeDiv256(v6520, v6515);
            const v6525 = stdlib.safeMul256(v6503, v4580);
            const v6526 = stdlib.safeDiv256(v6525, v6516);
            const v6527 = stdlib.lt256(v6521, v6526);
            const v6528 = v6527 ? v6521 : v6526;
            v6506 = v6528;
            }
          const v6533 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v4460, ctc1), null);
          const v6534 = stdlib.fromSome(v6533, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6540 = stdlib.safeSub256(v6497, v6500);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5176, ctc1, v6540);
          const v6542 = stdlib.safeSub256(v6499, v6503);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5176, ctc1, v6542);
          const v6546 = stdlib.safeSub256(v6534, v6506);
          await stdlib.simMapSet(sim_r, 0, ctc8, v4460, ctc1, v6546);
          const v6547 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v5176, ctc1), null);
          const v6548 = stdlib.fromSome(v6547, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6549 = stdlib.safeAdd256(v6548, v6506);
          await stdlib.simMapSet(sim_r, 0, ctc8, v5176, ctc1, v6549);
          null;
          const v6551 = await txn1.getOutput('Provider_deposit', 'v6506', ctc1, v6506);
          
          const v6560 = v4482.closed;
          const v6561 = v4482.decimals;
          const v6563 = v4482.name;
          const v6565 = v4482.protoBals;
          const v6567 = v4482.symbol;
          const v6568 = v4482.tokA;
          const v6569 = v4482.tokB;
          const v6570 = v4482.totalSupply;
          const v6571 = v4482.zeroAddress;
          const v6573 = v4583.A;
          const v6578 = stdlib.safeAdd256(v6573, v6500);
          const v6579 = v4583.B;
          const v6584 = stdlib.safeAdd256(v6579, v6503);
          const v6593 = stdlib.safeSub256(v4579, v6506);
          const v6597 = stdlib.safeAdd256(v4580, v6506);
          const v6600 = {
            A: v6593,
            B: v6597
            };
          const v6601 = {
            A: v6578,
            B: v6584
            };
          const v6602 = {
            closed: v6560,
            decimals: v6561,
            lptBals: v6600,
            name: v6563,
            poolBals: v6601,
            protoBals: v6565,
            protoInfo: v6492,
            symbol: v6567,
            tokA: v6568,
            tokB: v6569,
            totalSupply: v6570,
            zeroAddress: v6571
            };
          const v47218 = v6602;
          const v47220 = v4486;
          const v47221 = v6602.closed;
          if (v47221) {
            sim_r.isHalt = false;
            }
          else {
            const v47223 = v6602.lptBals;
            const v47224 = v47223.A;
            const v47225 = v47223.B;
            const v47226 = v6602.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v6490 = v6247[stdlib.checkedBigNumberify('./index.rsh:1052:12:spread', stdlib.UInt_max, '0')];
      const v6491 = v6247[stdlib.checkedBigNumberify('./index.rsh:1052:12:spread', stdlib.UInt_max, '1')];
      const v6492 = v4482.protoInfo;
      const v6493 = v6492.locked;
      const v6494 = v6493 ? false : true;
      stdlib.assert(v6494, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1053:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      const v6496 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5176, ctc1), null);
      const v6497 = stdlib.fromSome(v6496, stdlib.checkedBigNumberify('./index.rsh:1054:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6498 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5176, ctc1), null);
      const v6499 = stdlib.fromSome(v6498, stdlib.checkedBigNumberify('./index.rsh:1055:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6500 = v6490.A;
      const v6501 = stdlib.ge256(v6497, v6500);
      stdlib.assert(v6501, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1056:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
        msg: 'inBals A balance insufficient',
        who: 'Provider_deposit'
        });
      const v6503 = v6490.B;
      const v6504 = stdlib.ge256(v6499, v6503);
      stdlib.assert(v6504, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1057:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
        msg: 'inBals B balance insufficient',
        who: 'Provider_deposit'
        });
      let v6506;
      const v6512 = stdlib.eq256(v4580, stdlib.checkedBigNumberify('./index.rsh:316:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v6512) {
        const v6513 = stdlib.safeMul256(v6500, v6503);
        const v6514 = stdlib.sqrt256(v6513);
        v6506 = v6514;
        }
      else {
        const v6515 = v4583.A;
        const v6516 = v4583.B;
        const v6520 = stdlib.safeMul256(v6500, v4580);
        const v6521 = stdlib.safeDiv256(v6520, v6515);
        const v6525 = stdlib.safeMul256(v6503, v4580);
        const v6526 = stdlib.safeDiv256(v6525, v6516);
        const v6527 = stdlib.lt256(v6521, v6526);
        const v6528 = v6527 ? v6521 : v6526;
        v6506 = v6528;
        }
      const v6529 = stdlib.le256(v6491, v6506);
      stdlib.assert(v6529, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1059:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v6533 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4460, ctc1), null);
      const v6534 = stdlib.fromSome(v6533, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6535 = stdlib.ge256(v6534, v6506);
      stdlib.assert(v6535, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:846:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1060:22:application call to "checkTransfer" (defined at: ./index.rsh:845:52:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'Provider_deposit'
        });
      const v6540 = stdlib.safeSub256(v6497, v6500);
      await stdlib.mapSet(map2, ctc8, v5176, ctc1, v6540);
      const v6542 = stdlib.safeSub256(v6499, v6503);
      await stdlib.mapSet(map3, ctc8, v5176, ctc1, v6542);
      const v6546 = stdlib.safeSub256(v6534, v6506);
      await stdlib.mapSet(map0, ctc8, v4460, ctc1, v6546);
      const v6547 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5176, ctc1), null);
      const v6548 = stdlib.fromSome(v6547, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6549 = stdlib.safeAdd256(v6548, v6506);
      await stdlib.mapSet(map0, ctc8, v5176, ctc1, v6549);
      null;
      const v6551 = await txn1.getOutput('Provider_deposit', 'v6506', ctc1, v6506);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v6247, v6551), {
          at: './index.rsh:1052:13:application',
          fs: ['at ./index.rsh:1052:13:application call to [unknown function] (defined at: ./index.rsh:1052:13:function exp)', 'at ./index.rsh:1066:14:application call to "k" (defined at: ./index.rsh:1062:15:function exp)', 'at ./index.rsh:1062:15:application call to [unknown function] (defined at: ./index.rsh:1062:15:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v6560 = v4482.closed;
      const v6561 = v4482.decimals;
      const v6563 = v4482.name;
      const v6565 = v4482.protoBals;
      const v6567 = v4482.symbol;
      const v6568 = v4482.tokA;
      const v6569 = v4482.tokB;
      const v6570 = v4482.totalSupply;
      const v6571 = v4482.zeroAddress;
      const v6573 = v4583.A;
      const v6578 = stdlib.safeAdd256(v6573, v6500);
      const v6579 = v4583.B;
      const v6584 = stdlib.safeAdd256(v6579, v6503);
      const v6593 = stdlib.safeSub256(v4579, v6506);
      const v6597 = stdlib.safeAdd256(v4580, v6506);
      const v6600 = {
        A: v6593,
        B: v6597
        };
      const v6601 = {
        A: v6578,
        B: v6584
        };
      const v6602 = {
        closed: v6560,
        decimals: v6561,
        lptBals: v6600,
        name: v6563,
        poolBals: v6601,
        protoBals: v6565,
        protoInfo: v6492,
        symbol: v6567,
        tokA: v6568,
        tokB: v6569,
        totalSupply: v6570,
        zeroAddress: v6571
        };
      const v47218 = v6602;
      const v47220 = v4486;
      const v47221 = v6602.closed;
      if (v47221) {
        return;
        }
      else {
        const v47223 = v6602.lptBals;
        const v47224 = v47223.A;
        const v47225 = v47223.B;
        const v47226 = v6602.poolBals;
        return;
        }
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_depositA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_depositA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_depositA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc14,
    Provider_depositB0_468: ctc14,
    Provider_withdraw0_468: ctc17,
    Provider_withdrawA0_468: ctc14,
    Provider_withdrawB0_468: ctc14,
    Trader_exactSwapAForB0_468: ctc18,
    Trader_exactSwapBForA0_468: ctc18,
    Trader_swapAForB0_468: ctc18,
    Trader_swapBForA0_468: ctc18,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc24 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc24]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4714 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1028:38:application call to [unknown function] (defined at: ./index.rsh:1028:38:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_depositA0_468" (defined at: ./index.rsh:1028:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositA'
    });
  const v4717 = v4482.protoInfo;
  const v4718 = v4717.locked;
  const v4719 = v4718 ? false : true;
  stdlib.assert(v4719, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1029:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1028:38:application call to [unknown function] (defined at: ./index.rsh:1028:38:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_depositA0_468" (defined at: ./index.rsh:1028:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'locked',
    who: 'Provider_depositA'
    });
  const v4726 = ['Provider_depositA0_468', v4714];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4726],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1028:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositA"
            });
          ;
          const v7675 = v7314[stdlib.checkedBigNumberify('./index.rsh:1028:12:spread', stdlib.UInt_max, '0')];
          const v7683 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
          const v7684 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v7685 = [v5176, v4460];
          const v7686 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7685];
          const v7690 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4414,
              remote: ({
                accs: [v5176, v4460],
                apps: [v4414],
                bills: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v7683], [ctc23, v7684], [ctc25, v7686]],
                fees: stdlib.checkedBigNumberify('./index.rsh:974:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v7691 = await txn1.getOutput('internal', 'v7690', ctc22, v7690);
          const v7693 = v7691[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
          const v7698 = stdlib.add(v4486, v7693);
          const v7700 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5176, ctc1), null);
          const v7701 = stdlib.fromSome(v7700, stdlib.checkedBigNumberify('./index.rsh:1033:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7702 = stdlib.safeAdd256(v7701, v7675);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5176, ctc1, v7702);
          const v7703 = await txn1.getOutput('Provider_depositA', 'v7702', ctc1, v7702);
          
          const v47474 = v4482;
          const v47476 = v7698;
          const v47477 = v4482.closed;
          if (v47477) {
            sim_r.isHalt = false;
            }
          else {
            const v47479 = v4482.lptBals;
            const v47480 = v47479.A;
            const v47481 = v47479.B;
            const v47482 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v7675 = v7314[stdlib.checkedBigNumberify('./index.rsh:1028:12:spread', stdlib.UInt_max, '0')];
      const v7676 = v4482.protoInfo;
      const v7677 = v7676.locked;
      const v7678 = v7677 ? false : true;
      stdlib.assert(v7678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1029:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1031:15:application call to [unknown function] (defined at: ./index.rsh:1031:15:function exp)'],
        msg: 'locked',
        who: 'Provider_depositA'
        });
      const v7683 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
      const v7684 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
      const v7685 = [v5176, v4460];
      const v7686 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7685];
      const v7690 = undefined /* Remote */;
      const v7691 = await txn1.getOutput('internal', 'v7690', ctc22, v7690);
      const v7693 = v7691[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
      const v7698 = stdlib.add(v4486, v7693);
      const v7699 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7693);
      stdlib.assert(v7699, {
        at: './index.rsh:981:15:application',
        fs: ['at ./index.rsh:1032:37:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1031:15:application call to [unknown function] (defined at: ./index.rsh:1031:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositA'
        });
      const v7700 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5176, ctc1), null);
      const v7701 = stdlib.fromSome(v7700, stdlib.checkedBigNumberify('./index.rsh:1033:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7702 = stdlib.safeAdd256(v7701, v7675);
      await stdlib.mapSet(map2, ctc8, v5176, ctc1, v7702);
      const v7703 = await txn1.getOutput('Provider_depositA', 'v7702', ctc1, v7702);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v7314, v7703), {
          at: './index.rsh:1028:13:application',
          fs: ['at ./index.rsh:1028:13:application call to [unknown function] (defined at: ./index.rsh:1028:13:function exp)', 'at ./index.rsh:1035:14:application call to "k" (defined at: ./index.rsh:1031:15:function exp)', 'at ./index.rsh:1031:15:application call to [unknown function] (defined at: ./index.rsh:1031:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositA'
          });
        }
      else {
        }
      
      const v47474 = v4482;
      const v47476 = v7698;
      const v47477 = v4482.closed;
      if (v47477) {
        return;
        }
      else {
        const v47479 = v4482.lptBals;
        const v47480 = v47479.A;
        const v47481 = v47479.B;
        const v47482 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc14,
    Provider_depositB0_468: ctc14,
    Provider_withdraw0_468: ctc17,
    Provider_withdrawA0_468: ctc14,
    Provider_withdrawB0_468: ctc14,
    Trader_exactSwapAForB0_468: ctc18,
    Trader_exactSwapBForA0_468: ctc18,
    Trader_swapAForB0_468: ctc18,
    Trader_swapBForA0_468: ctc18,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc24 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc24]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4730 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1040:38:application call to [unknown function] (defined at: ./index.rsh:1040:38:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_depositB0_468" (defined at: ./index.rsh:1040:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositB'
    });
  const v4733 = v4482.protoInfo;
  const v4734 = v4733.locked;
  const v4735 = v4734 ? false : true;
  stdlib.assert(v4735, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1041:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:38:application call to [unknown function] (defined at: ./index.rsh:1040:38:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_depositB0_468" (defined at: ./index.rsh:1040:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'locked',
    who: 'Provider_depositB'
    });
  const v4742 = ['Provider_depositB0_468', v4730];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4742],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1040:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositB"
            });
          ;
          const v8778 = v8381[stdlib.checkedBigNumberify('./index.rsh:1040:12:spread', stdlib.UInt_max, '0')];
          const v8786 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
          const v8787 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v8788 = [v5176, v4460];
          const v8789 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v8788];
          const v8793 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4416,
              remote: ({
                accs: [v5176, v4460],
                apps: [v4416],
                bills: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v8786], [ctc23, v8787], [ctc25, v8789]],
                fees: stdlib.checkedBigNumberify('./index.rsh:974:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v8794 = await txn1.getOutput('internal', 'v8793', ctc22, v8793);
          const v8796 = v8794[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
          const v8801 = stdlib.add(v4486, v8796);
          const v8803 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5176, ctc1), null);
          const v8804 = stdlib.fromSome(v8803, stdlib.checkedBigNumberify('./index.rsh:1045:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8805 = stdlib.safeAdd256(v8804, v8778);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5176, ctc1, v8805);
          const v8806 = await txn1.getOutput('Provider_depositB', 'v8805', ctc1, v8805);
          
          const v47730 = v4482;
          const v47732 = v8801;
          const v47733 = v4482.closed;
          if (v47733) {
            sim_r.isHalt = false;
            }
          else {
            const v47735 = v4482.lptBals;
            const v47736 = v47735.A;
            const v47737 = v47735.B;
            const v47738 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v8778 = v8381[stdlib.checkedBigNumberify('./index.rsh:1040:12:spread', stdlib.UInt_max, '0')];
      const v8779 = v4482.protoInfo;
      const v8780 = v8779.locked;
      const v8781 = v8780 ? false : true;
      stdlib.assert(v8781, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1041:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1043:15:application call to [unknown function] (defined at: ./index.rsh:1043:15:function exp)'],
        msg: 'locked',
        who: 'Provider_depositB'
        });
      const v8786 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
      const v8787 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
      const v8788 = [v5176, v4460];
      const v8789 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v8788];
      const v8793 = undefined /* Remote */;
      const v8794 = await txn1.getOutput('internal', 'v8793', ctc22, v8793);
      const v8796 = v8794[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
      const v8801 = stdlib.add(v4486, v8796);
      const v8802 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8796);
      stdlib.assert(v8802, {
        at: './index.rsh:981:15:application',
        fs: ['at ./index.rsh:1044:37:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1043:15:application call to [unknown function] (defined at: ./index.rsh:1043:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositB'
        });
      const v8803 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5176, ctc1), null);
      const v8804 = stdlib.fromSome(v8803, stdlib.checkedBigNumberify('./index.rsh:1045:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8805 = stdlib.safeAdd256(v8804, v8778);
      await stdlib.mapSet(map3, ctc8, v5176, ctc1, v8805);
      const v8806 = await txn1.getOutput('Provider_depositB', 'v8805', ctc1, v8805);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v8381, v8806), {
          at: './index.rsh:1040:13:application',
          fs: ['at ./index.rsh:1040:13:application call to [unknown function] (defined at: ./index.rsh:1040:13:function exp)', 'at ./index.rsh:1047:14:application call to "k" (defined at: ./index.rsh:1043:15:function exp)', 'at ./index.rsh:1043:15:application call to [unknown function] (defined at: ./index.rsh:1043:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositB'
          });
        }
      else {
        }
      
      const v47730 = v4482;
      const v47732 = v8801;
      const v47733 = v4482.closed;
      if (v47733) {
        return;
        }
      else {
        const v47735 = v4482.lptBals;
        const v47736 = v47735.A;
        const v47737 = v47735.B;
        const v47738 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Provider_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Provider_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc17 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc22 = stdlib.T_Data({
    Protocol_harvest0_468: ctc16,
    Provider_deposit0_468: ctc17,
    Provider_depositA0_468: ctc18,
    Provider_depositB0_468: ctc18,
    Provider_withdraw0_468: ctc14,
    Provider_withdrawA0_468: ctc18,
    Provider_withdrawB0_468: ctc18,
    Trader_exactSwapAForB0_468: ctc19,
    Trader_exactSwapBForA0_468: ctc19,
    Trader_swapAForB0_468: ctc19,
    Trader_swapBForA0_468: ctc19,
    approve0_468: ctc20,
    transfer0_468: ctc20,
    transferFrom0_468: ctc21
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4841 = ctc.selfAddress();
  const v4843 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1114:44:application call to [unknown function] (defined at: ./index.rsh:1114:44:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdraw0_468" (defined at: ./index.rsh:1114:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v4844 = v4843[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4845 = v4843[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4846 = v4845.A;
  const v4847 = v4845.B;
  const v4853 = v4583.A;
  const v4854 = v4583.B;
  const v4858 = stdlib.safeMul256(v4844, v4853);
  const v4859 = stdlib.safeDiv256(v4858, v4580);
  const v4863 = stdlib.safeMul256(v4844, v4854);
  const v4864 = stdlib.safeDiv256(v4863, v4580);
  const v4866 = stdlib.le256(v4846, v4859);
  stdlib.assert(v4866, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1114:44:application call to [unknown function] (defined at: ./index.rsh:1114:44:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdraw0_468" (defined at: ./index.rsh:1114:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage A',
    who: 'Provider_withdraw'
    });
  const v4868 = stdlib.le256(v4847, v4864);
  stdlib.assert(v4868, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1114:44:application call to [unknown function] (defined at: ./index.rsh:1114:44:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdraw0_468" (defined at: ./index.rsh:1114:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage B',
    who: 'Provider_withdraw'
    });
  const v4873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4841, ctc1), null);
  const v4874 = stdlib.fromSome(v4873, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4875 = stdlib.ge256(v4874, v4844);
  stdlib.assert(v4875, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:860:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1120:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:1114:44:application call to [unknown function] (defined at: ./index.rsh:1114:44:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdraw0_468" (defined at: ./index.rsh:1114:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'Provider_withdraw'
    });
  const v4877 = [v4841, v4460];
  const v4878 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v4877, ctc1), null);
  const v4879 = stdlib.fromSome(v4878, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4880 = stdlib.ge256(v4879, v4844);
  stdlib.assert(v4880, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:864:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1120:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:1114:44:application call to [unknown function] (defined at: ./index.rsh:1114:44:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdraw0_468" (defined at: ./index.rsh:1114:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'Provider_withdraw'
    });
  const v4891 = ['Provider_withdraw0_468', v4843];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4891],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1114:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          ;
          const v9881 = v9448[stdlib.checkedBigNumberify('./index.rsh:1114:12:spread', stdlib.UInt_max, '0')];
          const v9886 = v4583.A;
          const v9887 = v4583.B;
          const v9891 = stdlib.safeMul256(v9881, v9886);
          const v9892 = stdlib.safeDiv256(v9891, v4580);
          const v9896 = stdlib.safeMul256(v9881, v9887);
          const v9897 = stdlib.safeDiv256(v9896, v4580);
          const v9906 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v5176, ctc1), null);
          const v9907 = stdlib.fromSome(v9906, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9910 = [v5176, v4460];
          const v9911 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v9910, ctc1), null);
          const v9912 = stdlib.fromSome(v9911, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9921 = stdlib.safeSub256(v9907, v9881);
          await stdlib.simMapSet(sim_r, 0, ctc8, v5176, ctc1, v9921);
          const v9922 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v4460, ctc1), null);
          const v9923 = stdlib.fromSome(v9922, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9924 = stdlib.safeAdd256(v9923, v9881);
          await stdlib.simMapSet(sim_r, 0, ctc8, v4460, ctc1, v9924);
          null;
          const v9929 = stdlib.safeSub256(v9912, v9881);
          await stdlib.simMapSet(sim_r, 1, ctc15, v9910, ctc1, v9929);
          null;
          const v9932 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5176, ctc1), null);
          const v9933 = stdlib.fromSome(v9932, stdlib.checkedBigNumberify('./index.rsh:1124:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9934 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5176, ctc1), null);
          const v9935 = stdlib.fromSome(v9934, stdlib.checkedBigNumberify('./index.rsh:1125:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9936 = stdlib.safeAdd256(v9933, v9892);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5176, ctc1, v9936);
          const v9937 = stdlib.safeAdd256(v9935, v9897);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5176, ctc1, v9937);
          const v9938 = {
            A: v9892,
            B: v9897
            };
          const v9939 = await txn1.getOutput('Provider_withdraw', 'v9938', ctc10, v9938);
          
          const v9950 = v4482.closed;
          const v9951 = v4482.decimals;
          const v9953 = v4482.name;
          const v9955 = v4482.protoBals;
          const v9956 = v4482.protoInfo;
          const v9957 = v4482.symbol;
          const v9958 = v4482.tokA;
          const v9959 = v4482.tokB;
          const v9960 = v4482.totalSupply;
          const v9961 = v4482.zeroAddress;
          const v9970 = stdlib.safeAdd256(v4579, v9881);
          const v9973 = stdlib.safeSub256(v4580, v9881);
          const v9980 = stdlib.safeSub256(v9886, v9892);
          const v9984 = stdlib.safeSub256(v9887, v9897);
          const v9986 = {
            A: v9970,
            B: v9973
            };
          const v9987 = {
            A: v9980,
            B: v9984
            };
          const v9988 = {
            closed: v9950,
            decimals: v9951,
            lptBals: v9986,
            name: v9953,
            poolBals: v9987,
            protoBals: v9955,
            protoInfo: v9956,
            symbol: v9957,
            tokA: v9958,
            tokB: v9959,
            totalSupply: v9960,
            zeroAddress: v9961
            };
          const v47986 = v9988;
          const v47988 = v4486;
          const v47989 = v9988.closed;
          if (v47989) {
            sim_r.isHalt = false;
            }
          else {
            const v47991 = v9988.lptBals;
            const v47992 = v47991.A;
            const v47993 = v47991.B;
            const v47994 = v9988.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v9881 = v9448[stdlib.checkedBigNumberify('./index.rsh:1114:12:spread', stdlib.UInt_max, '0')];
      const v9882 = v9448[stdlib.checkedBigNumberify('./index.rsh:1114:12:spread', stdlib.UInt_max, '1')];
      const v9883 = v9882.A;
      const v9884 = v9882.B;
      const v9886 = v4583.A;
      const v9887 = v4583.B;
      const v9891 = stdlib.safeMul256(v9881, v9886);
      const v9892 = stdlib.safeDiv256(v9891, v4580);
      const v9896 = stdlib.safeMul256(v9881, v9887);
      const v9897 = stdlib.safeDiv256(v9896, v4580);
      const v9899 = stdlib.le256(v9883, v9892);
      stdlib.assert(v9899, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage A',
        who: 'Provider_withdraw'
        });
      const v9901 = stdlib.le256(v9884, v9897);
      stdlib.assert(v9901, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage B',
        who: 'Provider_withdraw'
        });
      const v9906 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5176, ctc1), null);
      const v9907 = stdlib.fromSome(v9906, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9908 = stdlib.ge256(v9907, v9881);
      stdlib.assert(v9908, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:860:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1120:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'Provider_withdraw'
        });
      const v9910 = [v5176, v4460];
      const v9911 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v9910, ctc1), null);
      const v9912 = stdlib.fromSome(v9911, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9913 = stdlib.ge256(v9912, v9881);
      stdlib.assert(v9913, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:864:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1120:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'Provider_withdraw'
        });
      const v9921 = stdlib.safeSub256(v9907, v9881);
      await stdlib.mapSet(map0, ctc8, v5176, ctc1, v9921);
      const v9922 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4460, ctc1), null);
      const v9923 = stdlib.fromSome(v9922, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9924 = stdlib.safeAdd256(v9923, v9881);
      await stdlib.mapSet(map0, ctc8, v4460, ctc1, v9924);
      null;
      const v9929 = stdlib.safeSub256(v9912, v9881);
      await stdlib.mapSet(map1, ctc15, v9910, ctc1, v9929);
      null;
      const v9932 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5176, ctc1), null);
      const v9933 = stdlib.fromSome(v9932, stdlib.checkedBigNumberify('./index.rsh:1124:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9934 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5176, ctc1), null);
      const v9935 = stdlib.fromSome(v9934, stdlib.checkedBigNumberify('./index.rsh:1125:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9936 = stdlib.safeAdd256(v9933, v9892);
      await stdlib.mapSet(map2, ctc8, v5176, ctc1, v9936);
      const v9937 = stdlib.safeAdd256(v9935, v9897);
      await stdlib.mapSet(map3, ctc8, v5176, ctc1, v9937);
      const v9938 = {
        A: v9892,
        B: v9897
        };
      const v9939 = await txn1.getOutput('Provider_withdraw', 'v9938', ctc10, v9938);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v9448, v9939), {
          at: './index.rsh:1114:13:application',
          fs: ['at ./index.rsh:1114:13:application call to [unknown function] (defined at: ./index.rsh:1114:13:function exp)', 'at ./index.rsh:1128:14:application call to "k" (defined at: ./index.rsh:1122:15:function exp)', 'at ./index.rsh:1122:15:application call to [unknown function] (defined at: ./index.rsh:1122:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v9950 = v4482.closed;
      const v9951 = v4482.decimals;
      const v9953 = v4482.name;
      const v9955 = v4482.protoBals;
      const v9956 = v4482.protoInfo;
      const v9957 = v4482.symbol;
      const v9958 = v4482.tokA;
      const v9959 = v4482.tokB;
      const v9960 = v4482.totalSupply;
      const v9961 = v4482.zeroAddress;
      const v9970 = stdlib.safeAdd256(v4579, v9881);
      const v9973 = stdlib.safeSub256(v4580, v9881);
      const v9980 = stdlib.safeSub256(v9886, v9892);
      const v9984 = stdlib.safeSub256(v9887, v9897);
      const v9986 = {
        A: v9970,
        B: v9973
        };
      const v9987 = {
        A: v9980,
        B: v9984
        };
      const v9988 = {
        closed: v9950,
        decimals: v9951,
        lptBals: v9986,
        name: v9953,
        poolBals: v9987,
        protoBals: v9955,
        protoInfo: v9956,
        symbol: v9957,
        tokA: v9958,
        tokB: v9959,
        totalSupply: v9960,
        zeroAddress: v9961
        };
      const v47986 = v9988;
      const v47988 = v4486;
      const v47989 = v9988.closed;
      if (v47989) {
        return;
        }
      else {
        const v47991 = v9988.lptBals;
        const v47992 = v47991.A;
        const v47993 = v47991.B;
        const v47994 = v9988.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc14,
    Provider_depositB0_468: ctc14,
    Provider_withdraw0_468: ctc17,
    Provider_withdrawA0_468: ctc14,
    Provider_withdrawB0_468: ctc14,
    Trader_exactSwapAForB0_468: ctc18,
    Trader_exactSwapBForA0_468: ctc18,
    Trader_swapAForB0_468: ctc18,
    Trader_swapBForA0_468: ctc18,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4809 = ctc.selfAddress();
  const v4811 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1088:40:application call to [unknown function] (defined at: ./index.rsh:1088:40:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdrawA0_468" (defined at: ./index.rsh:1088:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawA'
    });
  const v4812 = v4811[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4814 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v4809, ctc1), null);
  const v4815 = stdlib.fromSome(v4814, stdlib.checkedBigNumberify('./index.rsh:1089:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4816 = stdlib.ge256(v4815, v4812);
  stdlib.assert(v4816, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1090:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1088:40:application call to [unknown function] (defined at: ./index.rsh:1088:40:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdrawA0_468" (defined at: ./index.rsh:1088:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'Reserve A balances insufficient',
    who: 'Provider_withdrawA'
    });
  const v4823 = ['Provider_withdrawA0_468', v4811];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4823],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1088:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawA"
            });
          ;
          const v11061 = v10515[stdlib.checkedBigNumberify('./index.rsh:1088:12:spread', stdlib.UInt_max, '0')];
          const v11062 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5176, ctc1), null);
          const v11063 = stdlib.fromSome(v11062, stdlib.checkedBigNumberify('./index.rsh:1089:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v11067 = stdlib.safeSub256(v11063, v11061);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5176, ctc1, v11067);
          const v11068 = await txn1.getOutput('Provider_withdrawA', 'v11067', ctc1, v11067);
          
          const v11075 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v11076 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
          const v11080 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4414,
              remote: ({
                accs: [v5176],
                apps: [v4414],
                bills: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v11075], [ctc23, v11076]],
                fees: stdlib.checkedBigNumberify('./index.rsh:960:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v11081 = await txn1.getOutput('internal', 'v11080', ctc22, v11080);
          const v11083 = v11081[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
          const v11088 = stdlib.add(v4486, v11083);
          const v48242 = v4482;
          const v48244 = v11088;
          const v48245 = v4482.closed;
          if (v48245) {
            sim_r.isHalt = false;
            }
          else {
            const v48247 = v4482.lptBals;
            const v48248 = v48247.A;
            const v48249 = v48247.B;
            const v48250 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v11061 = v10515[stdlib.checkedBigNumberify('./index.rsh:1088:12:spread', stdlib.UInt_max, '0')];
      const v11062 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5176, ctc1), null);
      const v11063 = stdlib.fromSome(v11062, stdlib.checkedBigNumberify('./index.rsh:1089:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11064 = stdlib.ge256(v11063, v11061);
      stdlib.assert(v11064, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1090:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1092:15:application call to [unknown function] (defined at: ./index.rsh:1092:15:function exp)'],
        msg: 'Reserve A balances insufficient',
        who: 'Provider_withdrawA'
        });
      const v11067 = stdlib.safeSub256(v11063, v11061);
      await stdlib.mapSet(map2, ctc8, v5176, ctc1, v11067);
      const v11068 = await txn1.getOutput('Provider_withdrawA', 'v11067', ctc1, v11067);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v10515, v11068), {
          at: './index.rsh:1088:13:application',
          fs: ['at ./index.rsh:1088:13:application call to [unknown function] (defined at: ./index.rsh:1088:13:function exp)', 'at ./index.rsh:1095:14:application call to "k" (defined at: ./index.rsh:1092:15:function exp)', 'at ./index.rsh:1092:15:application call to [unknown function] (defined at: ./index.rsh:1092:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawA'
          });
        }
      else {
        }
      
      const v11075 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
      const v11076 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
      const v11080 = undefined /* Remote */;
      const v11081 = await txn1.getOutput('internal', 'v11080', ctc22, v11080);
      const v11083 = v11081[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
      const v11088 = stdlib.add(v4486, v11083);
      const v11089 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11083);
      stdlib.assert(v11089, {
        at: './index.rsh:966:15:application',
        fs: ['at ./index.rsh:1096:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:1092:15:application call to [unknown function] (defined at: ./index.rsh:1092:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawA'
        });
      const v48242 = v4482;
      const v48244 = v11088;
      const v48245 = v4482.closed;
      if (v48245) {
        return;
        }
      else {
        const v48247 = v4482.lptBals;
        const v48248 = v48247.A;
        const v48249 = v48247.B;
        const v48250 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc14,
    Provider_depositB0_468: ctc14,
    Provider_withdraw0_468: ctc17,
    Provider_withdrawA0_468: ctc14,
    Provider_withdrawB0_468: ctc14,
    Trader_exactSwapAForB0_468: ctc18,
    Trader_exactSwapBForA0_468: ctc18,
    Trader_swapAForB0_468: ctc18,
    Trader_swapBForA0_468: ctc18,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4825 = ctc.selfAddress();
  const v4827 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1101:40:application call to [unknown function] (defined at: ./index.rsh:1101:40:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdrawB0_468" (defined at: ./index.rsh:1101:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawB'
    });
  const v4828 = v4827[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4830 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v4825, ctc1), null);
  const v4831 = stdlib.fromSome(v4830, stdlib.checkedBigNumberify('./index.rsh:1102:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4832 = stdlib.ge256(v4831, v4828);
  stdlib.assert(v4832, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1101:40:application call to [unknown function] (defined at: ./index.rsh:1101:40:function exp)', 'at ./index.rsh:781:31:application call to "runProvider_withdrawB0_468" (defined at: ./index.rsh:1101:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'Reserve B balances insufficient',
    who: 'Provider_withdrawB'
    });
  const v4839 = ['Provider_withdrawB0_468', v4827];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4839],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1101:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawB"
            });
          ;
          const v12159 = v11582[stdlib.checkedBigNumberify('./index.rsh:1101:12:spread', stdlib.UInt_max, '0')];
          const v12160 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5176, ctc1), null);
          const v12161 = stdlib.fromSome(v12160, stdlib.checkedBigNumberify('./index.rsh:1102:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v12165 = stdlib.safeSub256(v12161, v12159);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5176, ctc1, v12165);
          const v12166 = await txn1.getOutput('Provider_withdrawB', 'v12165', ctc1, v12165);
          
          const v12173 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v12174 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
          const v12178 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4416,
              remote: ({
                accs: [v5176],
                apps: [v4416],
                bills: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v12173], [ctc23, v12174]],
                fees: stdlib.checkedBigNumberify('./index.rsh:960:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v12179 = await txn1.getOutput('internal', 'v12178', ctc22, v12178);
          const v12181 = v12179[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
          const v12186 = stdlib.add(v4486, v12181);
          const v48498 = v4482;
          const v48500 = v12186;
          const v48501 = v4482.closed;
          if (v48501) {
            sim_r.isHalt = false;
            }
          else {
            const v48503 = v4482.lptBals;
            const v48504 = v48503.A;
            const v48505 = v48503.B;
            const v48506 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v12159 = v11582[stdlib.checkedBigNumberify('./index.rsh:1101:12:spread', stdlib.UInt_max, '0')];
      const v12160 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5176, ctc1), null);
      const v12161 = stdlib.fromSome(v12160, stdlib.checkedBigNumberify('./index.rsh:1102:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v12162 = stdlib.ge256(v12161, v12159);
      stdlib.assert(v12162, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1105:15:application call to [unknown function] (defined at: ./index.rsh:1105:15:function exp)'],
        msg: 'Reserve B balances insufficient',
        who: 'Provider_withdrawB'
        });
      const v12165 = stdlib.safeSub256(v12161, v12159);
      await stdlib.mapSet(map3, ctc8, v5176, ctc1, v12165);
      const v12166 = await txn1.getOutput('Provider_withdrawB', 'v12165', ctc1, v12165);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v11582, v12166), {
          at: './index.rsh:1101:13:application',
          fs: ['at ./index.rsh:1101:13:application call to [unknown function] (defined at: ./index.rsh:1101:13:function exp)', 'at ./index.rsh:1108:14:application call to "k" (defined at: ./index.rsh:1105:15:function exp)', 'at ./index.rsh:1105:15:application call to [unknown function] (defined at: ./index.rsh:1105:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawB'
          });
        }
      else {
        }
      
      const v12173 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
      const v12174 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
      const v12178 = undefined /* Remote */;
      const v12179 = await txn1.getOutput('internal', 'v12178', ctc22, v12178);
      const v12181 = v12179[stdlib.checkedBigNumberify('./index.rsh:966:15:application', stdlib.UInt_max, '0')];
      const v12186 = stdlib.add(v4486, v12181);
      const v12187 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v12181);
      stdlib.assert(v12187, {
        at: './index.rsh:966:15:application',
        fs: ['at ./index.rsh:1109:33:application call to [unknown function] (defined at: ./index.rsh:954:45:function exp)', 'at ./index.rsh:1105:15:application call to [unknown function] (defined at: ./index.rsh:1105:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawB'
        });
      const v48498 = v4482;
      const v48500 = v12186;
      const v48501 = v4482.closed;
      if (v48501) {
        return;
        }
      else {
        const v48503 = v4482.lptBals;
        const v48504 = v48503.A;
        const v48505 = v48503.B;
        const v48506 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_exactSwapAForB4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapAForB4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapAForB4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc14,
    Trader_exactSwapBForA0_468: ctc14,
    Trader_swapAForB0_468: ctc14,
    Trader_swapBForA0_468: ctc14,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v5132 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1301:44:application call to [unknown function] (defined at: ./index.rsh:1301:44:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_exactSwapAForB0_468" (defined at: ./index.rsh:1301:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v5144 = ['Trader_exactSwapAForB0_468', v5132];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v5144],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1301:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          ;
          const v13262 = await txn1.getOutput('Trader_exactSwapAForB', 'v4478', ctc10, v4478);
          
          const v48754 = v4482;
          const v48756 = v4486;
          const v48757 = v4482.closed;
          if (v48757) {
            sim_r.isHalt = false;
            }
          else {
            const v48759 = v4482.lptBals;
            const v48760 = v48759.A;
            const v48761 = v48759.B;
            const v48762 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v13262 = await txn1.getOutput('Trader_exactSwapAForB', 'v4478', ctc10, v4478);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v12649, v13262), {
          at: './index.rsh:1301:13:application',
          fs: ['at ./index.rsh:1301:13:application call to [unknown function] (defined at: ./index.rsh:1301:13:function exp)', 'at ./index.rsh:1306:14:application call to "k" (defined at: ./index.rsh:1305:15:function exp)', 'at ./index.rsh:1305:15:application call to [unknown function] (defined at: ./index.rsh:1305:15:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v48754 = v4482;
      const v48756 = v4486;
      const v48757 = v4482.closed;
      if (v48757) {
        return;
        }
      else {
        const v48759 = v4482.lptBals;
        const v48760 = v48759.A;
        const v48761 = v48759.B;
        const v48762 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_exactSwapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_exactSwapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc14,
    Trader_exactSwapBForA0_468: ctc14,
    Trader_swapAForB0_468: ctc14,
    Trader_swapBForA0_468: ctc14,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v5148 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1312:44:application call to [unknown function] (defined at: ./index.rsh:1312:44:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_exactSwapBForA0_468" (defined at: ./index.rsh:1312:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v5160 = ['Trader_exactSwapBForA0_468', v5148];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v5160],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1312:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          ;
          const v14345 = await txn1.getOutput('Trader_exactSwapBForA', 'v4478', ctc10, v4478);
          
          const v49010 = v4482;
          const v49012 = v4486;
          const v49013 = v4482.closed;
          if (v49013) {
            sim_r.isHalt = false;
            }
          else {
            const v49015 = v4482.lptBals;
            const v49016 = v49015.A;
            const v49017 = v49015.B;
            const v49018 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v14345 = await txn1.getOutput('Trader_exactSwapBForA', 'v4478', ctc10, v4478);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v13716, v14345), {
          at: './index.rsh:1312:13:application',
          fs: ['at ./index.rsh:1312:13:application call to [unknown function] (defined at: ./index.rsh:1312:13:function exp)', 'at ./index.rsh:1317:14:application call to "k" (defined at: ./index.rsh:1316:15:function exp)', 'at ./index.rsh:1316:15:application call to [unknown function] (defined at: ./index.rsh:1316:15:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v49010 = v4482;
      const v49012 = v4486;
      const v49013 = v4482.closed;
      if (v49013) {
        return;
        }
      else {
        const v49015 = v4482.lptBals;
        const v49016 = v49015.A;
        const v49017 = v49015.B;
        const v49018 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc14,
    Trader_exactSwapBForA0_468: ctc14,
    Trader_swapAForB0_468: ctc14,
    Trader_swapBForA0_468: ctc14,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc24 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc24]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4895 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1291:39:application call to [unknown function] (defined at: ./index.rsh:1291:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapAForB0_468" (defined at: ./index.rsh:1291:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v4896 = v4895[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4897 = v4895[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4903 = v4482.protoInfo;
  const v4905 = v4583.A;
  const v4906 = v4583.B;
  const v4907 = v4903.protoFee;
  const v4908 = v4903.totFee;
  const v4909 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v4908);
  const v4910 = stdlib.safeMul256(v4896, v4909);
  const v4911 = stdlib.safeMul256(v4905, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v4912 = stdlib.safeAdd256(v4911, v4910);
  const v4913 = stdlib.safeMul256(v4910, v4906);
  const v4914 = stdlib.safeDiv256(v4913, v4912);
  const v4918 = stdlib.safeMul256(v4907, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4919 = stdlib.safeDiv256(v4918, v4908);
  const v4923 = stdlib.safeAdd256(v4905, v4896);
  const v4927 = stdlib.safeMul256(v4896, v4906);
  const v4928 = stdlib.safeDiv256(v4927, v4923);
  const v4929 = stdlib.safeSub256(v4928, v4914);
  const v4931 = stdlib.safeMul256(v4929, v4919);
  const v4932 = stdlib.safeDiv256(v4931, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4933 = stdlib.safeMul256(v4896, v4907);
  const v4934 = stdlib.safeDiv256(v4933, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v4938 = stdlib.safeMul256(v4934, v4906);
  const v4939 = stdlib.safeDiv256(v4938, v4923);
  const v4940 = stdlib.gt256(v4939, v4932);
  const v4941 = [v4934, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v4942 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v4932];
  const v4943 = v4940 ? v4941 : v4942;
  const v4945 = v4943[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '0')];
  const v4946 = v4943[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '1')];
  const v4951 = v4903.locked;
  const v4952 = v4951 ? false : true;
  stdlib.assert(v4952, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1291:39:application call to [unknown function] (defined at: ./index.rsh:1291:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapAForB0_468" (defined at: ./index.rsh:1291:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v4969 = stdlib.safeSub256(v4906, v4914);
  const v4973 = stdlib.safeSub256(v4923, v4945);
  const v4976 = stdlib.safeSub256(v4969, v4946);
  const v4990 = stdlib.le256(v4897, v4914);
  stdlib.assert(v4990, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1192:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1291:39:application call to [unknown function] (defined at: ./index.rsh:1291:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapAForB0_468" (defined at: ./index.rsh:1291:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v4995 = stdlib.safeMul256(v4905, v4906);
  const v4996 = stdlib.safeMul256(v4973, v4976);
  const v4997 = stdlib.ge256(v4996, v4995);
  stdlib.assert(v4997, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1202:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1291:39:application call to [unknown function] (defined at: ./index.rsh:1291:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapAForB0_468" (defined at: ./index.rsh:1291:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v5009 = ['Trader_swapAForB0_468', v4895];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v5009],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1291:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          ;
          const v15423 = v14783[stdlib.checkedBigNumberify('./index.rsh:1291:12:spread', stdlib.UInt_max, '0')];
          const v15428 = v4482.protoInfo;
          const v15430 = v4583.A;
          const v15431 = v4583.B;
          const v15432 = v15428.protoFee;
          const v15433 = v15428.totFee;
          const v15434 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15433);
          const v15435 = stdlib.safeMul256(v15423, v15434);
          const v15436 = stdlib.safeMul256(v15430, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v15437 = stdlib.safeAdd256(v15436, v15435);
          const v15438 = stdlib.safeMul256(v15435, v15431);
          const v15439 = stdlib.safeDiv256(v15438, v15437);
          const v15443 = stdlib.safeMul256(v15432, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v15444 = stdlib.safeDiv256(v15443, v15433);
          const v15448 = stdlib.safeAdd256(v15430, v15423);
          const v15452 = stdlib.safeMul256(v15423, v15431);
          const v15453 = stdlib.safeDiv256(v15452, v15448);
          const v15454 = stdlib.safeSub256(v15453, v15439);
          const v15456 = stdlib.safeMul256(v15454, v15444);
          const v15457 = stdlib.safeDiv256(v15456, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v15458 = stdlib.safeMul256(v15423, v15432);
          const v15459 = stdlib.safeDiv256(v15458, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v15463 = stdlib.safeMul256(v15459, v15431);
          const v15464 = stdlib.safeDiv256(v15463, v15448);
          const v15465 = stdlib.gt256(v15464, v15457);
          const v15466 = [v15459, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v15467 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15457];
          const v15468 = v15465 ? v15466 : v15467;
          const v15470 = v15468[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '0')];
          const v15471 = v15468[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '1')];
          const v15494 = stdlib.safeSub256(v15431, v15439);
          const v15498 = stdlib.safeSub256(v15448, v15470);
          const v15501 = stdlib.safeSub256(v15494, v15471);
          const v15503 = v4482.protoBals;
          const v15504 = v15503.A;
          const v15508 = stdlib.safeAdd256(v15504, v15470);
          const v15509 = v15503.B;
          const v15513 = stdlib.safeAdd256(v15509, v15471);
          const v15531 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
          const v15532 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v15533 = [v5176, v4460];
          const v15534 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v15533];
          const v15538 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4414,
              remote: ({
                accs: [v5176, v4460],
                apps: [v4414],
                bills: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v15531], [ctc23, v15532], [ctc25, v15534]],
                fees: stdlib.checkedBigNumberify('./index.rsh:974:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v15539 = await txn1.getOutput('internal', 'v15538', ctc22, v15538);
          const v15541 = v15539[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
          const v15546 = stdlib.add(v4486, v15541);
          const v15548 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5176, ctc1), null);
          const v15549 = stdlib.fromSome(v15548, stdlib.checkedBigNumberify('./index.rsh:1242:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v15550 = stdlib.safeAdd256(v15549, v15439);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5176, ctc1, v15550);
          const v15551 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5176, ctc1), null);
          const v15552 = stdlib.fromSome(v15551, stdlib.checkedBigNumberify('./index.rsh:1244:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.simMapSet(sim_r, 2, ctc8, v5176, ctc1, v15552);
          const v15553 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v15439
            };
          const v15554 = await txn1.getOutput('Trader_swapAForB', 'v15553', ctc10, v15553);
          
          const v15563 = {
            A: v15423,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v15565 = {
            A: v15498,
            B: v15501
            };
          const v15566 = [v5176, v15563, v15553, v15565];
          const v15567 = ['SwapEvent', v15566];
          null;
          const v15568 = v4482.closed;
          const v15569 = v4482.decimals;
          const v15571 = v4482.name;
          const v15575 = v4482.symbol;
          const v15576 = v4482.tokA;
          const v15577 = v4482.tokB;
          const v15578 = v4482.totalSupply;
          const v15579 = v4482.zeroAddress;
          const v15581 = {
            A: v15508,
            B: v15513
            };
          const v15582 = {
            closed: v15568,
            decimals: v15569,
            lptBals: v4578,
            name: v15571,
            poolBals: v15565,
            protoBals: v15581,
            protoInfo: v15428,
            symbol: v15575,
            tokA: v15576,
            tokB: v15577,
            totalSupply: v15578,
            zeroAddress: v15579
            };
          const v49266 = v15582;
          const v49268 = v15546;
          const v49269 = v15582.closed;
          if (v49269) {
            sim_r.isHalt = false;
            }
          else {
            const v49271 = v15582.lptBals;
            const v49272 = v49271.A;
            const v49273 = v49271.B;
            const v49274 = v15582.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v15423 = v14783[stdlib.checkedBigNumberify('./index.rsh:1291:12:spread', stdlib.UInt_max, '0')];
      const v15424 = v14783[stdlib.checkedBigNumberify('./index.rsh:1291:12:spread', stdlib.UInt_max, '1')];
      const v15428 = v4482.protoInfo;
      const v15430 = v4583.A;
      const v15431 = v4583.B;
      const v15432 = v15428.protoFee;
      const v15433 = v15428.totFee;
      const v15434 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15433);
      const v15435 = stdlib.safeMul256(v15423, v15434);
      const v15436 = stdlib.safeMul256(v15430, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v15437 = stdlib.safeAdd256(v15436, v15435);
      const v15438 = stdlib.safeMul256(v15435, v15431);
      const v15439 = stdlib.safeDiv256(v15438, v15437);
      const v15443 = stdlib.safeMul256(v15432, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v15444 = stdlib.safeDiv256(v15443, v15433);
      const v15448 = stdlib.safeAdd256(v15430, v15423);
      const v15452 = stdlib.safeMul256(v15423, v15431);
      const v15453 = stdlib.safeDiv256(v15452, v15448);
      const v15454 = stdlib.safeSub256(v15453, v15439);
      const v15456 = stdlib.safeMul256(v15454, v15444);
      const v15457 = stdlib.safeDiv256(v15456, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v15458 = stdlib.safeMul256(v15423, v15432);
      const v15459 = stdlib.safeDiv256(v15458, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v15463 = stdlib.safeMul256(v15459, v15431);
      const v15464 = stdlib.safeDiv256(v15463, v15448);
      const v15465 = stdlib.gt256(v15464, v15457);
      const v15466 = [v15459, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v15467 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15457];
      const v15468 = v15465 ? v15466 : v15467;
      const v15470 = v15468[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '0')];
      const v15471 = v15468[stdlib.checkedBigNumberify('./index.rsh:250:29:array', stdlib.UInt_max, '1')];
      const v15476 = v15428.locked;
      const v15477 = v15476 ? false : true;
      stdlib.assert(v15477, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v15494 = stdlib.safeSub256(v15431, v15439);
      const v15498 = stdlib.safeSub256(v15448, v15470);
      const v15501 = stdlib.safeSub256(v15494, v15471);
      const v15503 = v4482.protoBals;
      const v15504 = v15503.A;
      const v15508 = stdlib.safeAdd256(v15504, v15470);
      const v15509 = v15503.B;
      const v15513 = stdlib.safeAdd256(v15509, v15471);
      const v15515 = stdlib.le256(v15424, v15439);
      stdlib.assert(v15515, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1192:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v15520 = stdlib.safeMul256(v15430, v15431);
      const v15521 = stdlib.safeMul256(v15498, v15501);
      const v15522 = stdlib.ge256(v15521, v15520);
      stdlib.assert(v15522, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1202:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1292:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      const v15531 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
      const v15532 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
      const v15533 = [v5176, v4460];
      const v15534 = [v4414, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v15533];
      const v15538 = undefined /* Remote */;
      const v15539 = await txn1.getOutput('internal', 'v15538', ctc22, v15538);
      const v15541 = v15539[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
      const v15546 = stdlib.add(v4486, v15541);
      const v15547 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15541);
      stdlib.assert(v15547, {
        at: './index.rsh:981:15:application',
        fs: ['at ./index.rsh:1240:39:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1293:25:application call to "c" (defined at: ./index.rsh:1237:22:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapAForB'
        });
      const v15548 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5176, ctc1), null);
      const v15549 = stdlib.fromSome(v15548, stdlib.checkedBigNumberify('./index.rsh:1242:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v15550 = stdlib.safeAdd256(v15549, v15439);
      await stdlib.mapSet(map3, ctc8, v5176, ctc1, v15550);
      const v15551 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5176, ctc1), null);
      const v15552 = stdlib.fromSome(v15551, stdlib.checkedBigNumberify('./index.rsh:1244:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      await stdlib.mapSet(map2, ctc8, v5176, ctc1, v15552);
      const v15553 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v15439
        };
      const v15554 = await txn1.getOutput('Trader_swapAForB', 'v15553', ctc10, v15553);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v14783, v15554), {
          at: './index.rsh:1291:13:application',
          fs: ['at ./index.rsh:1291:13:application call to [unknown function] (defined at: ./index.rsh:1291:13:function exp)', 'at ./index.rsh:1253:14:application call to "k" (defined at: ./index.rsh:1293:21:function exp)', 'at ./index.rsh:1293:25:application call to "c" (defined at: ./index.rsh:1237:22:function exp)', 'at ./index.rsh:1293:21:application call to [unknown function] (defined at: ./index.rsh:1293:21:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v15563 = {
        A: v15423,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v15565 = {
        A: v15498,
        B: v15501
        };
      const v15566 = [v5176, v15563, v15553, v15565];
      const v15567 = ['SwapEvent', v15566];
      null;
      const v15568 = v4482.closed;
      const v15569 = v4482.decimals;
      const v15571 = v4482.name;
      const v15575 = v4482.symbol;
      const v15576 = v4482.tokA;
      const v15577 = v4482.tokB;
      const v15578 = v4482.totalSupply;
      const v15579 = v4482.zeroAddress;
      const v15581 = {
        A: v15508,
        B: v15513
        };
      const v15582 = {
        closed: v15568,
        decimals: v15569,
        lptBals: v4578,
        name: v15571,
        poolBals: v15565,
        protoBals: v15581,
        protoInfo: v15428,
        symbol: v15575,
        tokA: v15576,
        tokB: v15577,
        totalSupply: v15578,
        zeroAddress: v15579
        };
      const v49266 = v15582;
      const v49268 = v15546;
      const v49269 = v15582.closed;
      if (v49269) {
        return;
        }
      else {
        const v49271 = v15582.lptBals;
        const v49272 = v49271.A;
        const v49273 = v49271.B;
        const v49274 = v15582.poolBals;
        return;
        }
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Trader_swapBForA4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Trader_swapBForA4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc14,
    Trader_exactSwapBForA0_468: ctc14,
    Trader_swapAForB0_468: ctc14,
    Trader_swapBForA0_468: ctc14,
    approve0_468: ctc19,
    transfer0_468: ctc19,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc23 = stdlib.T_Tuple([ctc3, ctc4, ctc8]);
  const ctc24 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc25 = stdlib.T_Tuple([ctc3, ctc4, ctc24]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v5013 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1296:39:application call to [unknown function] (defined at: ./index.rsh:1296:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapBForA0_468" (defined at: ./index.rsh:1296:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v5014 = v5013[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v5015 = v5013[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v5021 = v4482.protoInfo;
  const v5023 = v4583.B;
  const v5024 = v4583.A;
  const v5025 = v5021.protoFee;
  const v5026 = v5021.totFee;
  const v5027 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v5026);
  const v5028 = stdlib.safeMul256(v5014, v5027);
  const v5029 = stdlib.safeMul256(v5023, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v5030 = stdlib.safeAdd256(v5029, v5028);
  const v5031 = stdlib.safeMul256(v5028, v5024);
  const v5032 = stdlib.safeDiv256(v5031, v5030);
  const v5036 = stdlib.safeMul256(v5025, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v5037 = stdlib.safeDiv256(v5036, v5026);
  const v5041 = stdlib.safeAdd256(v5023, v5014);
  const v5045 = stdlib.safeMul256(v5014, v5024);
  const v5046 = stdlib.safeDiv256(v5045, v5041);
  const v5047 = stdlib.safeSub256(v5046, v5032);
  const v5049 = stdlib.safeMul256(v5047, v5037);
  const v5050 = stdlib.safeDiv256(v5049, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v5051 = stdlib.safeMul256(v5014, v5025);
  const v5052 = stdlib.safeDiv256(v5051, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v5056 = stdlib.safeMul256(v5052, v5024);
  const v5057 = stdlib.safeDiv256(v5056, v5041);
  const v5058 = stdlib.gt256(v5057, v5050);
  const v5059 = [v5052, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v5060 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v5050];
  const v5061 = v5058 ? v5059 : v5060;
  const v5063 = v5061[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '0')];
  const v5064 = v5061[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '1')];
  const v5069 = v5021.locked;
  const v5070 = v5069 ? false : true;
  stdlib.assert(v5070, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1296:39:application call to [unknown function] (defined at: ./index.rsh:1296:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapBForA0_468" (defined at: ./index.rsh:1296:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v5085 = stdlib.safeSub256(v5024, v5032);
  const v5091 = stdlib.safeSub256(v5085, v5064);
  const v5094 = stdlib.safeSub256(v5041, v5063);
  const v5108 = stdlib.le256(v5015, v5032);
  stdlib.assert(v5108, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1192:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1296:39:application call to [unknown function] (defined at: ./index.rsh:1296:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapBForA0_468" (defined at: ./index.rsh:1296:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v5114 = stdlib.safeMul256(v5024, v5023);
  const v5115 = stdlib.safeMul256(v5091, v5094);
  const v5116 = stdlib.ge256(v5115, v5114);
  stdlib.assert(v5116, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1202:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1296:39:application call to [unknown function] (defined at: ./index.rsh:1296:39:function exp)', 'at ./index.rsh:781:31:application call to "runTrader_swapBForA0_468" (defined at: ./index.rsh:1296:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v5128 = ['Trader_swapBForA0_468', v5013];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v5128],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1296:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          ;
          const v16659 = v15850[stdlib.checkedBigNumberify('./index.rsh:1296:12:spread', stdlib.UInt_max, '0')];
          const v16664 = v4482.protoInfo;
          const v16666 = v4583.B;
          const v16667 = v4583.A;
          const v16668 = v16664.protoFee;
          const v16669 = v16664.totFee;
          const v16670 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16669);
          const v16671 = stdlib.safeMul256(v16659, v16670);
          const v16672 = stdlib.safeMul256(v16666, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v16673 = stdlib.safeAdd256(v16672, v16671);
          const v16674 = stdlib.safeMul256(v16671, v16667);
          const v16675 = stdlib.safeDiv256(v16674, v16673);
          const v16679 = stdlib.safeMul256(v16668, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v16680 = stdlib.safeDiv256(v16679, v16669);
          const v16684 = stdlib.safeAdd256(v16666, v16659);
          const v16688 = stdlib.safeMul256(v16659, v16667);
          const v16689 = stdlib.safeDiv256(v16688, v16684);
          const v16690 = stdlib.safeSub256(v16689, v16675);
          const v16692 = stdlib.safeMul256(v16690, v16680);
          const v16693 = stdlib.safeDiv256(v16692, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v16694 = stdlib.safeMul256(v16659, v16668);
          const v16695 = stdlib.safeDiv256(v16694, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v16699 = stdlib.safeMul256(v16695, v16667);
          const v16700 = stdlib.safeDiv256(v16699, v16684);
          const v16701 = stdlib.gt256(v16700, v16693);
          const v16702 = [v16695, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v16703 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16693];
          const v16704 = v16701 ? v16702 : v16703;
          const v16706 = v16704[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '0')];
          const v16707 = v16704[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '1')];
          const v16728 = stdlib.safeSub256(v16667, v16675);
          const v16734 = stdlib.safeSub256(v16728, v16707);
          const v16737 = stdlib.safeSub256(v16684, v16706);
          const v16739 = v4482.protoBals;
          const v16740 = v16739.A;
          const v16744 = stdlib.safeAdd256(v16740, v16707);
          const v16745 = v16739.B;
          const v16749 = stdlib.safeAdd256(v16745, v16706);
          const v16768 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
          const v16769 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
          const v16770 = [v5176, v4460];
          const v16771 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v16770];
          const v16775 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4416,
              remote: ({
                accs: [v5176, v4460],
                apps: [v4416],
                bills: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v16768], [ctc23, v16769], [ctc25, v16771]],
                fees: stdlib.checkedBigNumberify('./index.rsh:974:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v16776 = await txn1.getOutput('internal', 'v16775', ctc22, v16775);
          const v16778 = v16776[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
          const v16783 = stdlib.add(v4486, v16778);
          const v16785 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5176, ctc1), null);
          const v16786 = stdlib.fromSome(v16785, stdlib.checkedBigNumberify('./index.rsh:1248:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v16787 = stdlib.safeAdd256(v16786, v16675);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5176, ctc1, v16787);
          const v16788 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5176, ctc1), null);
          const v16789 = stdlib.fromSome(v16788, stdlib.checkedBigNumberify('./index.rsh:1250:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.simMapSet(sim_r, 3, ctc8, v5176, ctc1, v16789);
          const v16790 = {
            A: v16675,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v16791 = await txn1.getOutput('Trader_swapBForA', 'v16790', ctc10, v16790);
          
          const v16800 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v16659
            };
          const v16802 = {
            A: v16734,
            B: v16737
            };
          const v16803 = [v5176, v16800, v16790, v16802];
          const v16804 = ['SwapEvent', v16803];
          null;
          const v16805 = v4482.closed;
          const v16806 = v4482.decimals;
          const v16808 = v4482.name;
          const v16812 = v4482.symbol;
          const v16813 = v4482.tokA;
          const v16814 = v4482.tokB;
          const v16815 = v4482.totalSupply;
          const v16816 = v4482.zeroAddress;
          const v16818 = {
            A: v16744,
            B: v16749
            };
          const v16819 = {
            closed: v16805,
            decimals: v16806,
            lptBals: v4578,
            name: v16808,
            poolBals: v16802,
            protoBals: v16818,
            protoInfo: v16664,
            symbol: v16812,
            tokA: v16813,
            tokB: v16814,
            totalSupply: v16815,
            zeroAddress: v16816
            };
          const v49522 = v16819;
          const v49524 = v16783;
          const v49525 = v16819.closed;
          if (v49525) {
            sim_r.isHalt = false;
            }
          else {
            const v49527 = v16819.lptBals;
            const v49528 = v49527.A;
            const v49529 = v49527.B;
            const v49530 = v16819.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v16659 = v15850[stdlib.checkedBigNumberify('./index.rsh:1296:12:spread', stdlib.UInt_max, '0')];
      const v16660 = v15850[stdlib.checkedBigNumberify('./index.rsh:1296:12:spread', stdlib.UInt_max, '1')];
      const v16664 = v4482.protoInfo;
      const v16666 = v4583.B;
      const v16667 = v4583.A;
      const v16668 = v16664.protoFee;
      const v16669 = v16664.totFee;
      const v16670 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v16669);
      const v16671 = stdlib.safeMul256(v16659, v16670);
      const v16672 = stdlib.safeMul256(v16666, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v16673 = stdlib.safeAdd256(v16672, v16671);
      const v16674 = stdlib.safeMul256(v16671, v16667);
      const v16675 = stdlib.safeDiv256(v16674, v16673);
      const v16679 = stdlib.safeMul256(v16668, stdlib.checkedBigNumberify('./index.rsh:182:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v16680 = stdlib.safeDiv256(v16679, v16669);
      const v16684 = stdlib.safeAdd256(v16666, v16659);
      const v16688 = stdlib.safeMul256(v16659, v16667);
      const v16689 = stdlib.safeDiv256(v16688, v16684);
      const v16690 = stdlib.safeSub256(v16689, v16675);
      const v16692 = stdlib.safeMul256(v16690, v16680);
      const v16693 = stdlib.safeDiv256(v16692, stdlib.checkedBigNumberify('./index.rsh:188:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v16694 = stdlib.safeMul256(v16659, v16668);
      const v16695 = stdlib.safeDiv256(v16694, stdlib.checkedBigNumberify('./index.rsh:209:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v16699 = stdlib.safeMul256(v16695, v16667);
      const v16700 = stdlib.safeDiv256(v16699, v16684);
      const v16701 = stdlib.gt256(v16700, v16693);
      const v16702 = [v16695, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v16703 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v16693];
      const v16704 = v16701 ? v16702 : v16703;
      const v16706 = v16704[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '0')];
      const v16707 = v16704[stdlib.checkedBigNumberify('./index.rsh:266:29:array', stdlib.UInt_max, '1')];
      const v16712 = v16664.locked;
      const v16713 = v16712 ? false : true;
      stdlib.assert(v16713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v16728 = stdlib.safeSub256(v16667, v16675);
      const v16734 = stdlib.safeSub256(v16728, v16707);
      const v16737 = stdlib.safeSub256(v16684, v16706);
      const v16739 = v4482.protoBals;
      const v16740 = v16739.A;
      const v16744 = stdlib.safeAdd256(v16740, v16707);
      const v16745 = v16739.B;
      const v16749 = stdlib.safeAdd256(v16745, v16706);
      const v16751 = stdlib.le256(v16660, v16675);
      stdlib.assert(v16751, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1192:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v16757 = stdlib.safeMul256(v16667, v16666);
      const v16758 = stdlib.safeMul256(v16734, v16737);
      const v16759 = stdlib.ge256(v16758, v16757);
      stdlib.assert(v16759, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1202:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1231:51:application call to "calcSwap" (defined at: ./index.rsh:1172:73:function exp)', 'at ./index.rsh:1297:25:application call to "doSwap" (defined at: ./index.rsh:1218:70:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      const v16768 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5176];
      const v16769 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4460];
      const v16770 = [v5176, v4460];
      const v16771 = [v4416, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v16770];
      const v16775 = undefined /* Remote */;
      const v16776 = await txn1.getOutput('internal', 'v16775', ctc22, v16775);
      const v16778 = v16776[stdlib.checkedBigNumberify('./index.rsh:981:15:application', stdlib.UInt_max, '0')];
      const v16783 = stdlib.add(v4486, v16778);
      const v16784 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16778);
      stdlib.assert(v16784, {
        at: './index.rsh:981:15:application',
        fs: ['at ./index.rsh:1246:39:application call to [unknown function] (defined at: ./index.rsh:968:56:function exp)', 'at ./index.rsh:1298:25:application call to "c" (defined at: ./index.rsh:1237:22:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapBForA'
        });
      const v16785 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5176, ctc1), null);
      const v16786 = stdlib.fromSome(v16785, stdlib.checkedBigNumberify('./index.rsh:1248:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v16787 = stdlib.safeAdd256(v16786, v16675);
      await stdlib.mapSet(map2, ctc8, v5176, ctc1, v16787);
      const v16788 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5176, ctc1), null);
      const v16789 = stdlib.fromSome(v16788, stdlib.checkedBigNumberify('./index.rsh:1250:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      await stdlib.mapSet(map3, ctc8, v5176, ctc1, v16789);
      const v16790 = {
        A: v16675,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v16791 = await txn1.getOutput('Trader_swapBForA', 'v16790', ctc10, v16790);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v15850, v16791), {
          at: './index.rsh:1296:13:application',
          fs: ['at ./index.rsh:1296:13:application call to [unknown function] (defined at: ./index.rsh:1296:13:function exp)', 'at ./index.rsh:1253:14:application call to "k" (defined at: ./index.rsh:1298:21:function exp)', 'at ./index.rsh:1298:25:application call to "c" (defined at: ./index.rsh:1237:22:function exp)', 'at ./index.rsh:1298:21:application call to [unknown function] (defined at: ./index.rsh:1298:21:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v16800 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v16659
        };
      const v16802 = {
        A: v16734,
        B: v16737
        };
      const v16803 = [v5176, v16800, v16790, v16802];
      const v16804 = ['SwapEvent', v16803];
      null;
      const v16805 = v4482.closed;
      const v16806 = v4482.decimals;
      const v16808 = v4482.name;
      const v16812 = v4482.symbol;
      const v16813 = v4482.tokA;
      const v16814 = v4482.tokB;
      const v16815 = v4482.totalSupply;
      const v16816 = v4482.zeroAddress;
      const v16818 = {
        A: v16744,
        B: v16749
        };
      const v16819 = {
        closed: v16805,
        decimals: v16806,
        lptBals: v4578,
        name: v16808,
        poolBals: v16802,
        protoBals: v16818,
        protoInfo: v16664,
        symbol: v16812,
        tokA: v16813,
        tokB: v16814,
        totalSupply: v16815,
        zeroAddress: v16816
        };
      const v49522 = v16819;
      const v49524 = v16783;
      const v49525 = v16819.closed;
      if (v49525) {
        return;
        }
      else {
        const v49527 = v16819.lptBals;
        const v49528 = v49527.A;
        const v49529 = v49527.B;
        const v49530 = v16819.poolBals;
        return;
        }
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _approve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc19,
    Trader_exactSwapBForA0_468: ctc19,
    Trader_swapAForB0_468: ctc19,
    Trader_swapBForA0_468: ctc19,
    approve0_468: ctc14,
    transfer0_468: ctc14,
    transferFrom0_468: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc8, ctc8]);
  
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4636 = ctc.selfAddress();
  const v4638 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:897:44:application call to [unknown function] (defined at: ./index.rsh:897:44:function exp)', 'at ./index.rsh:781:31:application call to "runapprove0_468" (defined at: ./index.rsh:897:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v4639 = v4638[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4644 = stdlib.addressEq(v4636, v4426);
  const v4645 = v4644 ? false : true;
  stdlib.assert(v4645, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:852:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:20:application call to "chkApprove_" (defined at: ./index.rsh:851:56:function exp)', 'at ./index.rsh:897:44:application call to [unknown function] (defined at: ./index.rsh:897:44:function exp)', 'at ./index.rsh:781:31:application call to "runapprove0_468" (defined at: ./index.rsh:897:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v4647 = stdlib.addressEq(v4639, v4426);
  const v4648 = v4647 ? false : true;
  stdlib.assert(v4648, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:853:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:20:application call to "chkApprove_" (defined at: ./index.rsh:851:56:function exp)', 'at ./index.rsh:897:44:application call to [unknown function] (defined at: ./index.rsh:897:44:function exp)', 'at ./index.rsh:781:31:application call to "runapprove0_468" (defined at: ./index.rsh:897:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v4657 = ['approve0_468', v4638];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4657],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:897:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v17896 = v16917[stdlib.checkedBigNumberify('./index.rsh:897:12:spread', stdlib.UInt_max, '0')];
          const v17897 = v16917[stdlib.checkedBigNumberify('./index.rsh:897:12:spread', stdlib.UInt_max, '1')];
          const v17907 = [v5176, v17896];
          await stdlib.simMapSet(sim_r, 1, ctc22, v17907, ctc1, v17897);
          null;
          const v17909 = true;
          const v17910 = await txn1.getOutput('approve', 'v17909', ctc11, v17909);
          
          const v49778 = v4482;
          const v49780 = v4486;
          const v49781 = v4482.closed;
          if (v49781) {
            sim_r.isHalt = false;
            }
          else {
            const v49783 = v4482.lptBals;
            const v49784 = v49783.A;
            const v49785 = v49783.B;
            const v49786 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v17896 = v16917[stdlib.checkedBigNumberify('./index.rsh:897:12:spread', stdlib.UInt_max, '0')];
      const v17897 = v16917[stdlib.checkedBigNumberify('./index.rsh:897:12:spread', stdlib.UInt_max, '1')];
      const v17899 = stdlib.addressEq(v5176, v4426);
      const v17900 = v17899 ? false : true;
      stdlib.assert(v17900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:852:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:20:application call to "chkApprove_" (defined at: ./index.rsh:851:56:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v17902 = stdlib.addressEq(v17896, v4426);
      const v17903 = v17902 ? false : true;
      stdlib.assert(v17903, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:853:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:898:20:application call to "chkApprove_" (defined at: ./index.rsh:851:56:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v17907 = [v5176, v17896];
      await stdlib.mapSet(map1, ctc22, v17907, ctc1, v17897);
      null;
      const v17909 = true;
      const v17910 = await txn1.getOutput('approve', 'v17909', ctc11, v17909);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v16917, v17910), {
          at: './index.rsh:897:13:application',
          fs: ['at ./index.rsh:897:13:application call to [unknown function] (defined at: ./index.rsh:897:13:function exp)', 'at ./index.rsh:902:14:application call to "k" (defined at: ./index.rsh:900:15:function exp)', 'at ./index.rsh:900:15:application call to [unknown function] (defined at: ./index.rsh:900:15:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v49778 = v4482;
      const v49780 = v4486;
      const v49781 = v4482.closed;
      if (v49781) {
        return;
        }
      else {
        const v49783 = v4482.lptBals;
        const v49784 = v49783.A;
        const v49785 = v49783.B;
        const v49786 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transfer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transfer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transfer4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Protocol_harvest0_468: ctc15,
    Provider_deposit0_468: ctc16,
    Provider_depositA0_468: ctc17,
    Provider_depositB0_468: ctc17,
    Provider_withdraw0_468: ctc18,
    Provider_withdrawA0_468: ctc17,
    Provider_withdrawB0_468: ctc17,
    Trader_exactSwapAForB0_468: ctc19,
    Trader_exactSwapBForA0_468: ctc19,
    Trader_swapAForB0_468: ctc19,
    Trader_swapBForA0_468: ctc19,
    approve0_468: ctc14,
    transfer0_468: ctc14,
    transferFrom0_468: ctc20
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4585 = ctc.selfAddress();
  const v4587 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:876:40:application call to [unknown function] (defined at: ./index.rsh:876:40:function exp)', 'at ./index.rsh:781:31:application call to "runtransfer0_468" (defined at: ./index.rsh:876:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v4589 = v4587[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4593 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4585, ctc1), null);
  const v4594 = stdlib.fromSome(v4593, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4595 = stdlib.ge256(v4594, v4589);
  stdlib.assert(v4595, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:846:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:877:22:application call to "checkTransfer" (defined at: ./index.rsh:845:52:function exp)', 'at ./index.rsh:876:40:application call to [unknown function] (defined at: ./index.rsh:876:40:function exp)', 'at ./index.rsh:781:31:application call to "runtransfer0_468" (defined at: ./index.rsh:876:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v4604 = ['transfer0_468', v4587];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4604],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:876:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v18986 = v17984[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '0')];
          const v18987 = v17984[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '1')];
          const v18989 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v5176, ctc1), null);
          const v18990 = stdlib.fromSome(v18989, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18995 = true;
          const v18996 = await txn1.getOutput('transfer', 'v18995', ctc11, v18995);
          
          const v19005 = stdlib.safeSub256(v18990, v18987);
          await stdlib.simMapSet(sim_r, 0, ctc8, v5176, ctc1, v19005);
          const v19006 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v18986, ctc1), null);
          const v19007 = stdlib.fromSome(v19006, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v19008 = stdlib.safeAdd256(v19007, v18987);
          await stdlib.simMapSet(sim_r, 0, ctc8, v18986, ctc1, v19008);
          null;
          const v50034 = v4482;
          const v50036 = v4486;
          const v50037 = v4482.closed;
          if (v50037) {
            sim_r.isHalt = false;
            }
          else {
            const v50039 = v4482.lptBals;
            const v50040 = v50039.A;
            const v50041 = v50039.B;
            const v50042 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v18986 = v17984[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '0')];
      const v18987 = v17984[stdlib.checkedBigNumberify('./index.rsh:876:12:spread', stdlib.UInt_max, '1')];
      const v18989 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5176, ctc1), null);
      const v18990 = stdlib.fromSome(v18989, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18991 = stdlib.ge256(v18990, v18987);
      stdlib.assert(v18991, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:846:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:877:22:application call to "checkTransfer" (defined at: ./index.rsh:845:52:function exp)', 'at ./index.rsh:879:15:application call to [unknown function] (defined at: ./index.rsh:879:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v18995 = true;
      const v18996 = await txn1.getOutput('transfer', 'v18995', ctc11, v18995);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v17984, v18996), {
          at: './index.rsh:876:13:application',
          fs: ['at ./index.rsh:876:13:application call to [unknown function] (defined at: ./index.rsh:876:13:function exp)', 'at ./index.rsh:880:14:application call to "k" (defined at: ./index.rsh:879:15:function exp)', 'at ./index.rsh:879:15:application call to [unknown function] (defined at: ./index.rsh:879:15:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v19005 = stdlib.safeSub256(v18990, v18987);
      await stdlib.mapSet(map0, ctc8, v5176, ctc1, v19005);
      const v19006 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v18986, ctc1), null);
      const v19007 = stdlib.fromSome(v19006, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v19008 = stdlib.safeAdd256(v19007, v18987);
      await stdlib.mapSet(map0, ctc8, v18986, ctc1, v19008);
      null;
      const v50034 = v4482;
      const v50036 = v4486;
      const v50037 = v4482.closed;
      if (v50037) {
        return;
        }
      else {
        const v50039 = v4482.lptBals;
        const v50040 = v50039.A;
        const v50041 = v50039.B;
        const v50042 = v4482.poolBals;
        return;
        }
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc8], ['locked', ctc11]]);
  const ctc13 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    lptBals: ctc10,
    name: ctc5,
    poolBals: ctc10,
    protoBals: ctc10,
    protoInfo: ctc12,
    symbol: ctc6,
    tokA: ctc3,
    tokB: ctc3,
    totalSupply: ctc1,
    zeroAddress: ctc8
    });
  const ctc14 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc8, ctc12]);
  const ctc17 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc22 = stdlib.T_Data({
    Protocol_harvest0_468: ctc16,
    Provider_deposit0_468: ctc17,
    Provider_depositA0_468: ctc18,
    Provider_depositB0_468: ctc18,
    Provider_withdraw0_468: ctc19,
    Provider_withdrawA0_468: ctc18,
    Provider_withdrawB0_468: ctc18,
    Trader_exactSwapAForB0_468: ctc20,
    Trader_exactSwapBForA0_468: ctc20,
    Trader_swapAForB0_468: ctc20,
    Trader_swapBForA0_468: ctc20,
    approve0_468: ctc21,
    transfer0_468: ctc21,
    transferFrom0_468: ctc14
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
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4606 = ctc.selfAddress();
  const v4608 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:887:51:application call to [unknown function] (defined at: ./index.rsh:887:51:function exp)', 'at ./index.rsh:781:31:application call to "runtransferFrom0_468" (defined at: ./index.rsh:887:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v4609 = v4608[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4611 = v4608[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4616 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4609, ctc1), null);
  const v4617 = stdlib.fromSome(v4616, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4618 = stdlib.ge256(v4617, v4611);
  stdlib.assert(v4618, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:860:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:888:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:887:51:application call to [unknown function] (defined at: ./index.rsh:887:51:function exp)', 'at ./index.rsh:781:31:application call to "runtransferFrom0_468" (defined at: ./index.rsh:887:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v4620 = [v4609, v4606];
  const v4621 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v4620, ctc1), null);
  const v4622 = stdlib.fromSome(v4621, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4623 = stdlib.ge256(v4622, v4611);
  stdlib.assert(v4623, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:864:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:888:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:887:51:application call to [unknown function] (defined at: ./index.rsh:887:51:function exp)', 'at ./index.rsh:781:31:application call to "runtransferFrom0_468" (defined at: ./index.rsh:887:12:function exp)', 'at ./index.rsh:781:31:application call to [unknown function] (defined at: ./index.rsh:781:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v4634 = ['transferFrom0_468', v4608];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4414, v4416, v4422, v4423, v4426, v4435, v4460, v4478, v4482, v4486, v4578, v4579, v4580, v4583, v4634],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:887:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
      
      switch (v5177[0]) {
        case 'Protocol_harvest0_468': {
          const v5180 = v5177[1];
          
          break;
          }
        case 'Provider_deposit0_468': {
          const v6247 = v5177[1];
          
          break;
          }
        case 'Provider_depositA0_468': {
          const v7314 = v5177[1];
          
          break;
          }
        case 'Provider_depositB0_468': {
          const v8381 = v5177[1];
          
          break;
          }
        case 'Provider_withdraw0_468': {
          const v9448 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawA0_468': {
          const v10515 = v5177[1];
          
          break;
          }
        case 'Provider_withdrawB0_468': {
          const v11582 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_468': {
          const v12649 = v5177[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_468': {
          const v13716 = v5177[1];
          
          break;
          }
        case 'Trader_swapAForB0_468': {
          const v14783 = v5177[1];
          
          break;
          }
        case 'Trader_swapBForA0_468': {
          const v15850 = v5177[1];
          
          break;
          }
        case 'approve0_468': {
          const v16917 = v5177[1];
          
          break;
          }
        case 'transfer0_468': {
          const v17984 = v5177[1];
          
          break;
          }
        case 'transferFrom0_468': {
          const v19051 = v5177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v20079 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '0')];
          const v20080 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '1')];
          const v20081 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '2')];
          const v20083 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v20079, ctc1), null);
          const v20084 = stdlib.fromSome(v20083, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v20087 = [v20079, v5176];
          const v20088 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v20087, ctc1), null);
          const v20089 = stdlib.fromSome(v20088, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v20097 = stdlib.safeSub256(v20084, v20081);
          await stdlib.simMapSet(sim_r, 0, ctc8, v20079, ctc1, v20097);
          const v20098 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v20080, ctc1), null);
          const v20099 = stdlib.fromSome(v20098, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v20100 = stdlib.safeAdd256(v20099, v20081);
          await stdlib.simMapSet(sim_r, 0, ctc8, v20080, ctc1, v20100);
          null;
          const v20105 = stdlib.safeSub256(v20089, v20081);
          await stdlib.simMapSet(sim_r, 1, ctc15, v20087, ctc1, v20105);
          null;
          const v20108 = true;
          const v20109 = await txn1.getOutput('transferFrom', 'v20108', ctc11, v20108);
          
          const v50290 = v4482;
          const v50292 = v4486;
          const v50293 = v4482.closed;
          if (v50293) {
            sim_r.isHalt = false;
            }
          else {
            const v50295 = v4482.lptBals;
            const v50296 = v50295.A;
            const v50297 = v50295.B;
            const v50298 = v4482.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10, ctc22],
    waitIfNotPresent: false
    }));
  const {data: [v5177], secs: v5179, time: v5178, didSend: v2757, from: v5176 } = txn1;
  switch (v5177[0]) {
    case 'Protocol_harvest0_468': {
      const v5180 = v5177[1];
      return;
      break;
      }
    case 'Provider_deposit0_468': {
      const v6247 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositA0_468': {
      const v7314 = v5177[1];
      return;
      break;
      }
    case 'Provider_depositB0_468': {
      const v8381 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdraw0_468': {
      const v9448 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_468': {
      const v10515 = v5177[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_468': {
      const v11582 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_468': {
      const v12649 = v5177[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_468': {
      const v13716 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_468': {
      const v14783 = v5177[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_468': {
      const v15850 = v5177[1];
      return;
      break;
      }
    case 'approve0_468': {
      const v16917 = v5177[1];
      return;
      break;
      }
    case 'transfer0_468': {
      const v17984 = v5177[1];
      return;
      break;
      }
    case 'transferFrom0_468': {
      const v19051 = v5177[1];
      undefined /* setApiDetails */;
      ;
      const v20079 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '0')];
      const v20080 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '1')];
      const v20081 = v19051[stdlib.checkedBigNumberify('./index.rsh:887:12:spread', stdlib.UInt_max, '2')];
      const v20083 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v20079, ctc1), null);
      const v20084 = stdlib.fromSome(v20083, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v20085 = stdlib.ge256(v20084, v20081);
      stdlib.assert(v20085, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:860:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:888:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:890:15:application call to [unknown function] (defined at: ./index.rsh:890:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v20087 = [v20079, v5176];
      const v20088 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v20087, ctc1), null);
      const v20089 = stdlib.fromSome(v20088, stdlib.checkedBigNumberify('./index.rsh:838:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v20090 = stdlib.ge256(v20089, v20081);
      stdlib.assert(v20090, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:864:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:888:24:application call to "chkTransferFrom" (defined at: ./index.rsh:859:64:function exp)', 'at ./index.rsh:890:15:application call to [unknown function] (defined at: ./index.rsh:890:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v20097 = stdlib.safeSub256(v20084, v20081);
      await stdlib.mapSet(map0, ctc8, v20079, ctc1, v20097);
      const v20098 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v20080, ctc1), null);
      const v20099 = stdlib.fromSome(v20098, stdlib.checkedBigNumberify('./index.rsh:834:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v20100 = stdlib.safeAdd256(v20099, v20081);
      await stdlib.mapSet(map0, ctc8, v20080, ctc1, v20100);
      null;
      const v20105 = stdlib.safeSub256(v20089, v20081);
      await stdlib.mapSet(map1, ctc15, v20087, ctc1, v20105);
      null;
      const v20108 = true;
      const v20109 = await txn1.getOutput('transferFrom', 'v20108', ctc11, v20108);
      if (v2757) {
        stdlib.protect(ctc0, await interact.out(v19051, v20109), {
          at: './index.rsh:887:13:application',
          fs: ['at ./index.rsh:887:13:application call to [unknown function] (defined at: ./index.rsh:887:13:function exp)', 'at ./index.rsh:892:14:application call to "k" (defined at: ./index.rsh:890:15:function exp)', 'at ./index.rsh:890:15:application call to [unknown function] (defined at: ./index.rsh:890:15:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v50290 = v4482;
      const v50292 = v4486;
      const v50293 = v4482.closed;
      if (v50293) {
        return;
        }
      else {
        const v50295 = v4482.lptBals;
        const v50296 = v50295.A;
        const v50297 = v50295.B;
        const v50298 = v4482.poolBals;
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
export async function Provider_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Provider_depositA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_depositA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_depositA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_depositA4(ctcTop, interact);}
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
export async function Provider_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Provider_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Provider_withdraw4(ctcTop, interact);}
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
export async function Trader_exactSwapAForB(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_exactSwapAForB expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_exactSwapAForB expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_exactSwapAForB4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Trader_exactSwapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_exactSwapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_exactSwapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_exactSwapBForA4(ctcTop, interact);}
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
export async function Trader_swapBForA(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Trader_swapBForA expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Trader_swapBForA4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _approve4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _transfer4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256)uint256`, `Provider_depositA(uint256)uint256`, `Provider_depositB(uint256)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_exactSwapAForB(uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,uint64,uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `approve(address,uint256)byte`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`],
    pure: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `allowance(address,address)uint256`, `balanceOf(address)uint256`, `decimals()uint64`, `name()byte[32]`, `reserve(address)(uint256,uint256)`, `symbol()byte[8]`, `totalSupply()uint256`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`],
    sigs: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256)uint256`, `Provider_depositA(uint256)uint256`, `Provider_depositB(uint256)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_exactSwapAForB(uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,uint64,uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `allowance(address,address)uint256`, `approve(address,uint256)byte`, `balanceOf(address)uint256`, `decimals()uint64`, `name()byte[32]`, `reserve(address)(uint256,uint256)`, `symbol()byte[8]`, `totalSupply()uint256`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAWAAjU3gEgBAYC+gLyAgFh6gKCA6IDf4EBQEHE2wEQBcIDJhQAAQABAgEDBWFwcElEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAQEEcV/BRiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAQokYhhCAAAAAAAAAABIP//////////////////////////////////////////BNPs4wIEAIpycgEEAQUBBgQY4JRhAQgIAAAAAAAAEX4xGEEVMihkSSJbNQFJI1s1AiETWzUFKWQnBmRQKmRQK2RQJw5kUCcPZFAnEGRQgh4EAIpycgQN+OUwBBk6ARsEG2CazAQzuo93BD0QPyUES24bXgRWfOOBBF2FTQ4EZDlFmARsyzzCBG6UhfcEbsxyJARxX8FGBHPltxcEefq0ZQSBlUzUBIO618wEj/wcLgSh+b9MBLaO/zAEuHee5wTA8/g8BMU2MJIEzqDnVQTP0hvYBNnjCsIE4NlbtQTz0GEQBP2ptu82GgCOHhe6FCUYDBe0AcgCBhgVGB4UUwFgF6kAARQaF8wASxe3F6wUbQGqFGABLRR1AUIBdhPtARgB5wC0AYwYJwA0ASEEDEEU8zQBIQYSRIgYqDQUVwlANBRXaUBQNBRX6YFQNBRXqUBQNBQhByNYUDQUIQgjWFA1BDEZIhJEgAQVH3x1NARQsCEJQyOvNQshBjQBEkSIGGI0CyJbNQyABMUfw1c0DBZQsDQMiBh3KDULgAgAAAAAAABOszQLULA0CzUEMRkhFBJEsSKyASEFshA0BbIYIRSyGbOBoI0GiBhaiBhLIjIKMgmIGFs0A0D/l0L/ijYaATYaAjULNQwjryk0DDQLUFBQNQshBDQBEkSIF4g0CyJbNQw0C1cIojUNgAStC75ENAwWUDQNULA0DIgX8jQNIlWNDhOPE5kToxOmE6kTsxO2E7kTvBO/E8kT0xPdFBpC/ug2GgE1CyOvKjQLUCEPr1BQNQtC/502GgE1CyOvKzQLUCEPr1BQNQtC/4g2GgE2GgI1CzUMI68nBjQMNAtQUCERr1BQNQtC/2o2GgE1CyOvJw80C1AhD69QUDULQv9UNhoBNQsjrycQNAtQIQ+vUFA1C0L/PjYaATYaAjULNQwjrycONAw0C1BQIRGvUFA1C0L/IDYaATYaAjULNQwjrycSNAw0C1BQIQqvUFA1C0L/AjYaATYaAjULNQwjr4ABBzQMNAtQUCEKr1BQNQtC/uM2GgE2GgI1CzUMI6+AAQk0DDQLUFAhCq9QUDULQv7ENhoBNhoCNQs1DCOvgAEKNAw0C1BQIQqvUFA1C0L+pYgWpjQLVwAgNQ00C1cggTUMMQA0FFfpgVdgIBJENAxXACA1IzQMVyAgNSI0DFdAIDUhNCMnBaQ0IicFpBBBEtQ0ITQiNCOgiBXBqDULNAs0IScFpBA0ITIDpRBEMgpgMgp4CTQSCUk1IDQSCDUfNAxXgAEXSTUeFCIQNA5XACAyA6g0DlcgIDIDqBAQQRKLJCk0GFC8Ik4CTYgWOjQgNA2IFhk0FFepQEk1C1cAIDUdJwQ0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HLIYJweyGjQNSbIcsho0HbIaNByyMrMyCmA0CQk0ChcJFrcAPlcEAFA1EIAIAAAAAAAAFH40EFCwNBBJNQ8iWzUQIjQQEkQ0C1cgIDUPJwQ0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYJweyGjQNSbIcsho0D7IaNBuyMrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAFJA0C1CwNAtJNQ0iWzULIjQLEkQ0HTQPUDQgFlA1DYAIAAAAAAAAFJ40DVCwNA01BCcGNCM0IlA0IVA0DFdgIFApUFAhDq9QNQ0nDDQNULAnBjQUVwEIUDQRUDQUV0kgUDQOUDQVUDQMUDQUIQsjWFA0FCEII1hQNBQhByNYUDQUIQwlWFA0FCENJVhQMgY0HzQgCTQQCDQLCDUSNRM1FDQUVwABF0ESrzQaNBkWUDQUUIHYAq9QIQYyBjUCNQEpSwFXAH9nJwZLAVd/f2cqSwFX/n9nK0sBgf0CIQ5YZycOSwGB/AMhDlhnJw9LAYH7BCEOWGcnEEyB+gWBWFhnKDQBFjQCFlA0BRZQZzEZIhJEiBRDQvv9iBQcNAtXAEA1DDQUV+mBSTUhV4ABFxREMgMoMgMqMQBQiBNviBNjNSAyAygyAysxAFCIE16IE1I1HzQMVwAgNR40IDQep0Q0DFcgIDUdNB80HadENA8yA6hBEbI0HjQdo4gTHZaIExk1ETQLV0AgNBGmRDIDKDIDKTQWUIgTFIgTCEk1CzQRp0QkKjEAUDQgNB6hiBLriBMFJCsxAFA0HzQdoYgS24gS9SQpNBZQNAs0EaGIEsuIEuUkKTEAUDIDKDIDKTEAUIgSyYgSvTQRoIgSrogSyCcJNBZQMQBQNBFQsIAIAAAAAAAAGWo0EVCwNBE1BDQUVwABNBRXAQhQNBA0EaGIEno0DzQRoIgSclBQNBRXSSBQNA5XACA0HqCIEl80DlcgIDQdoIgSVFBQNBRXqUBQNCFQNBQhCyNYUDQUIQgjWFA0FCEHI1hQNBQhDCVYUDQUIQ0lWFAyBjUTNRRC/iU0DVcBIDULNBRX6YFXgAEXFEQnBDQcFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQcshgnDbIaMQBJshyyGjQWSbIcsho0C7IaNByyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAAHgo0DVCwNA1JNQwiWzUNIjQNEkQyAygyAyoxAFCIEaKIEZY0C6CIEYc1DCQqMQBQNAyIEZiACAAAAAAAAB4WNAxQsDQMNQQyBjQSNA0INRI1E0L9YzQNVwEgNQs0FFfpgVeAARcURCcENBsWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNBuyGCcNshoxAEmyHLIaNBZJshyyGjQLsho0G7IyszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAAiWTQNULA0DUk1DCJbNQ0iNA0SRDIDKDIDKzEAUIgQ4IgQ1DQLoIgQxTUMJCsxAFA0DIgQ1oAIAAAAAAAAImU0DFCwNAw1BDIGNBI0DQg1EjUTQvyhiBE0NAtXACA1DTQLVyBANQw0DlcAIDURNA5XICA1CzQNNBGjiBByNA+iiBBsNR00DTQLo4gQYjQPoogQXDUONAxXACA0HaZENAxXICA0DqZEMgMoMgMpMQBQiBBOiBBCSTUMNA2nRDEANBZQNR8yAygyAycKNB9QAYgQL4gQI0k1HjQNp0QkKTEAUDQMNA2hiBAGiBAgJCk0FlAyAygyAyk0FlCIEASID/g0DaCID+mIEAMnCTEAUDQWUDQNULA0HjQNoYgP0jUMIRInCjQfUAE0DIgP4CcRMQBQNBZQNAxQsCQqMQBQMgMoMgMqMQBQiA+4iA+sNB2giA+diA+3JCsxAFAyAygyAysxAFCID5uID480DqCID4CID5o0HTQOUDUMgAgAAAAAAAAm0jQMULA0DDUENBRXAAE0FFcBCFA0EDQNoIgPUTQPNA2hiA9JUFA0FFdJIFA0ETQdoYgPOTQLNA6hiA8xUFA0FFepQFA0FFfpgVA0FCELI1hQNBQhCCNYUDQUIQcjWFA0FCEMJVhQNBQhDSVYUDIGNRM1FEL6/zQNVwEgNQsyAygyAyoxAFCIDvaIDupJNQ00C6dENA00C6GIDtI1DCQqMQBQNAyIDuOACAAAAAAAACs7NAxQsDQMNQQnBDQcFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQcshgnB7IaMQBJshyyGjQLsho0HLIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAArSDQMULA0DEk1CyJbNQwiNAwSRDIGNBI0DAg1EjUTQvpGNA1XASA1CzIDKDIDKzEAUIgOPYgOMUk1DTQLp0Q0DTQLoYgOGTUMJCsxAFA0DIgOKoAIAAAAAAAAL4U0DFCwNAw1BCcENBsWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNBuyGCcHshoxAEmyHLIaNAuyGjQbsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAC+SNAxQsDQMSTULIls1DCI0DBJEMgY0EjQMCDUSNRNC+Y0nEzQVULA0FTUEMgY1E0L5fCcTNBVQsDQVNQQyBjUTQvlriA3+iA37NAtXACA1EDQUV+mBNQ80DlcAIDUNNA5XICA1DDQPVwAgNR00D1dAIDUeNBAnCDQeoYgNKaOIDSVJNQ40DKOIDRw0DScIo4gNFDQOoIgNDqKIDQo1ITQNNBCgiA0ANQ40EDQMo4gM9jQOoogM8DQhoYgM6jQdJwWjiAziNB6iiAzco4gM2CcFoogM0jUfNBA0HaOIDMgnCKKIDMI1HjIDNB9QNB4yA1A0HjQMo4gMrjQOoogMqDQfpU1JNR1XACA1IDQdVyAgNR80D1eAARcURDQONCChiAyFNR40DDQhoYgMezQfoYgMdTUdNBRXqUA1DjQLVyAgNCGmRDQeNB2jiAxbNA00DKOIDFOnRCcENBwWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNByyGCcNshoxAEmyHLIaNBZJshyyGjQQsho0HLIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAA8sjQMULA0DEk1CyJbNQwiNAwSRCQrMQBQMgMoMgMrMQBQiAvjiAvXNCGgiAvIiAviJCoxAFAyAygyAyoxAFCIC8aIC7qIC8syAzQhUDULgAgAAAAAAAA8wTQLULA0CzUENB40HVA1DSoxADQQMgNQUDQLUDQNUFAyA1A1HScMNB1QsDQUVwABNBRXAQhQNBFQNBRXSSBQNA1QNA5XACA0IKCIC1E0DlcgIDQfoIgLRlBQNA9QNBQhCyNYUDQUIQgjWFA0FCEHI1hQNBQhDCVYUDQUIQ0lWFAyBjQSNAwINRI1EzUUQvcWiAupiAumNAtXACA1EDQUV+mBNQ80DlcgIDUNNA5XACA1DDQPVwAgNR00D1dAIDUeNBAnCDQeoYgK1KOICtBJNQ40DKOICsc0DScIo4gKvzQOoIgKuaKICrU1ITQNNBCgiAqrNQ40EDQMo4gKoTQOoogKmzQhoYgKlTQdJwWjiAqNNB6iiAqHo4gKgycFoogKfTUfNBA0HaOICnMnCKKICm01HjIDNB9QNB4yA1A0HjQMo4gKWTQOoogKUzQfpU1JNR1XACA1IDQdVyAgNR80D1eAARcURDQMNCGhiAowNB+hiAoqNR40DjQgoYgKIDUdNBRXqUA1DjQLVyAgNCGmRDQeNB2jiAoGNAw0DaOICf6nRCcENBsWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNBuyGCcNshoxAEmyHLIaNBZJshyyGjQQsho0G7IyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAABBhzQMULA0DEk1CyJbNQwiNAwSRCQqMQBQMgMoMgMqMQBQiAmOiAmCNCGgiAlziAmNJCsxAFAyAygyAysxAFCICXGICWWICXY0ITIDUDULgAgAAAAAAABBljQLULA0CzUENB40HVA1DSoxADIDNBBQUDQLUDQNUFAyA1A1HScMNB1QsDQUVwABNBRXAQhQNBFQNBRXSSBQNA1QNA5XACA0H6CICPw0DlcgIDQgoIgI8VBQNA9QNBQhCyNYUDQUIQgjWFA0FCEHI1hQNBQhDCVYUDQUIQ0lWFAyBjQSNAwINRI1EzUUQvTBNAtXACA1DTQLVyAgNQwxADQYE0Q0DTQYE0QhEicKMQA0DVBQATQMiAisJxExAFA0DVA0DFCwIQk1C4AIAAAAAAAARfU0CxZRBwhQsDQLFlEHCDUEMgY1E0L0ZjQLVwAgNQ00C1cgIDUMMgMoMgMpMQBQiAhWiAhKSTUONAynRCEJNQuACAAAAAAAAEozNAsWUQcIULA0CxZRBwg1BCQpMQBQNA40DKGICA+ICCkkKTQNUDIDKDIDKTQNUIgIDYgIATQMoIgH8ogIDCcJMQBQNA1QNAxQsDIGNRNC8+Q0C1cAIDUONAtXICA1DTQLV0AgNQwyAygyAyk0DlCIB82IB8FJNRA0DKdENA4xAFA1DzIDKDIDJwo0D1ABiAeuiAeiSTULNAynRCQpNA5QNBA0DKGIB4WIB58kKTQNUDIDKDIDKTQNUIgHg4gHdzQMoIgHaIgHgicJNA5QNA1QNAxQsDQLNAyhiAdRNQ0hEicKNA9QATQNiAdfJxE0DlAxAFA0DVCwIQk1C4AIAAAAAAAATow0CxZRBwhQsDQLFlEHCDUEMgY1E0LzGSJEQu8VI6+AAQs0DDQLUFAhCq9QUDULQu+RIkRC7vs0ASEEDEEGCzQBIQYSRIgHazQZFjUEQu7iNAEhBAxBBgM0ASEGEkSIB1I0GlcIIEk1CzUEQu7ENAEhBAxBBfs0ASEGEkSIBzQ0CzUMMgMoMgMqNAxQiAasiAagMgMoMgMrNAxQiAadiAaRUDUEQu6LNAEhBAxBAsI0ASEGEkSIBvs0GlcoCEk1CzUEQu5tNAEhBAxBAro0ASEGEkSIBt0nCzUEQu5VI6+AAQw0DDQLUFAhCq9QUDULQu7RI6+AAQ00DTQMUDQLUFAhEa9QUDULQu65IkRC7iMiRELuHiJEQu4ZIkRC7hQ0CyJbNQ00C1cIaDUMgAQgYlI2NA0WUDQMULA0DYgGoDQMVzAYSTULI1s1HDQLIRNbNRs0HBYBNBsWARNENAxXADBJNRoiW0k1GYGAAg5ENAxXSCA1GCg1FycENAtXAAhQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0CyJbshiABK1DxSGyGjEYFrIaJwY0HBZQsho0GxayGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAEVU0DFCwNAxJNQsiWzUPNAtXCIFJNQ5XACA1DTQOVyAgNQw0DldAIDULNA0nBaQ0DCcFpBBBAYk0CzQMNA2giAURqDUQNBA0CycFpBA0CzIDpRBEIjQPEkQyCjUWJCk0FlAnC4gFCSQpNBhQMgOIBP8nCzUQJwk0GFA0FlA0EFCwIRCvNRUpNBkWUIBA//////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFA0GlcIIFA0FVA0FVA0DTQMUDQLUDQOV2AgUDQOV4ABUFA0GlcoCFA0HBZQNBsWUCcLUDQYUDIGNA81EjUTNRRC8EuIBOyBwJoMiAUKsSKyASEFshCABggxADIJErIeJxKyH7O0PTUFNhoBNQtC/guIBL82GgE1C0LsKogEtDYaATULQuyaIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQWIBJKB0gavIiJC8AA2GgE2GgI1CzUMQvy/NhoBNhoCNQs1DEL8tzYaATULQvzEQvzGNAEhBBJEiAPaNBpXKAhJNQs1BELrqzQBIQQSRIgDxCcLNQRC65siNRBC/n40DVcBoTULQu13NA1XAWA1C0Lv90LxWELyFzQNVwFgNQtC8s9C9G5C9SRC9dpC9eg0DVcBQDULQvXvNA1XAUA1C0L4OjQNVwFANQtC+oU0DVcBQDULQvrWNAEhBBJEiANWNBRXCUA0FFdpQFA0FFfpgVA0FFepQFA0FCEHI1hQNBQhCCNYUDUEQusKNA1XAWA1C0L7GyI1C0LtMzQgNA2IA5s0FFepQEk1C1cAIDUdJwQ0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HLIYJweyGjQNSbIcsho0HbIaNByyMrMyCmA0CQk0ChcJFrcAPlcEAFA1EIAIAAAAAAAAFNw0EFCwNBBJNQ8iWzUQIjQQEkQ0C1cgIDUPJwQ0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYJweyGjQNSbIcsho0D7IaNBuyMrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAFO40C1CwNAtJNQ0iWzULIjQLEkQ0HTQPUDQgFlA1DYAIAAAAAAAAFPw0DVCwNA01BCcGNCM0IlA0IVA0DFdgIFA0HhZRBwhQUCEOr1A1DScMNA1QsCk0FFcBCFA0EVA0FFdJIFA0DlA0FVA0DFA0FCELI1hQNBQhCCNYUDQUIQcjWFA0FCEMJVhQNBQhDSVYUDIGNB80IAk0EAg0Cwg1EjUTNRRC7Xs0HjQPo4gBazQOVwAgoogBYjUNNB00D6OIAVg0DlcgIKKIAU9JNQw0DUk0DKRNNRFC7ik0FFcJQEk1EVcAIDUQNBFXICA1DzQUV2lANQ40HBY0GxZQNBpQNBkWUDQYUDQXUDQWUDQVUDQUUDQSFlA0EVA0EFA0D1A0DlAhBDIGQu0USEy/SIkisgEhCbIQsgeyCLOJNAEhBBJEiAEBNBkWNQRC6Nc0ASEEEkSIAPA0GlcIIEk1CzUEQujBNAEhBBJEiADaNAs1DDIDKDIDKjQMUIgAsYgApTIDKDIDKzQMUIgAoogAllA1BELokEL5qzYaATULQvnBQvn3QvoSNhoBNhoCNhoDNQs1DDUNQvotNhoBNhoCNQs1DEL6C0iJTAlJNQYyCYgA/IkJSUH/7kk1BjEWNAAhCQhJNQAJRwI4BzIKEkQ4ECEJEkQ4CBJEiTYaARc1C0L5/DYaARc1C0L5+DYaARc1C0L59DYaARc1C0L58EkVJUwJr0xQiUlXAQBMIlVNib5JFlEHCEUETVCJTEm9QP7sSwOIAKlC/uRJIls1HEkjWzUbSVcQMDUaSSEQWzUZSVdIIDUYSUgoNRdJV2ggNRZJV4hANRVJgcgBIRVYNRRJgYoFWzUSSYGSBSEQWDURSYHSBSVYNRBJgfIFJVg1D4GSBiEQWDUOiUlXADA1GkmBMFs1GYE4IRVYNRSJsSKyASEFshA0BbIYs4khCTUDibFC/l9JIhJMNAISEUSJNAY0B0oPQf7jQv7rNAcINQeJNAYINQaJsbIJQv43`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `393`,
    1001: `394`,
    1002: `394`,
    1003: `395`,
    1004: `396`,
    1005: `397`,
    1006: `397`,
    1007: `398`,
    1008: `399`,
    1009: `400`,
    101: `2`,
    1010: `401`,
    1011: `401`,
    1012: `402`,
    1013: `402`,
    1014: `402`,
    1015: `405`,
    1016: `405`,
    1017: `405`,
    1018: `407`,
    1019: `407`,
    102: `2`,
    1020: `408`,
    1021: `408`,
    1022: `408`,
    1023: `409`,
    1024: `409`,
    1025: `410`,
    1026: `410`,
    1027: `411`,
    1028: `411`,
    1029: `411`,
    103: `2`,
    1030: `412`,
    1031: `412`,
    1032: `413`,
    1033: `413`,
    1034: `414`,
    1035: `414`,
    1036: `415`,
    1037: `415`,
    1038: `415`,
    1039: `416`,
    104: `2`,
    1040: `416`,
    1041: `416`,
    1042: `417`,
    1043: `418`,
    1044: `424`,
    1045: `424`,
    1046: `425`,
    1047: `425`,
    1048: `425`,
    1049: `426`,
    105: `2`,
    1050: `426`,
    1051: `427`,
    1052: `427`,
    1053: `428`,
    1054: `428`,
    1055: `428`,
    1056: `429`,
    1057: `429`,
    1058: `430`,
    1059: `430`,
    106: `2`,
    1060: `431`,
    1061: `431`,
    1062: `431`,
    1063: `432`,
    1064: `432`,
    1065: `433`,
    1066: `433`,
    1067: `434`,
    1068: `434`,
    1069: `435`,
    107: `2`,
    1070: `436`,
    1071: `436`,
    1072: `437`,
    1073: `437`,
    1074: `438`,
    1075: `439`,
    1076: `440`,
    1077: `440`,
    1078: `440`,
    1079: `441`,
    108: `2`,
    1080: `441`,
    1081: `442`,
    1082: `442`,
    1083: `443`,
    1084: `443`,
    1085: `444`,
    1086: `445`,
    1087: `445`,
    1088: `445`,
    1089: `446`,
    109: `2`,
    1090: `447`,
    1091: `447`,
    1092: `449`,
    1093: `449`,
    1094: `450`,
    1095: `450`,
    1096: `451`,
    1097: `451`,
    1098: `452`,
    1099: `453`,
    11: `2`,
    110: `2`,
    1100: `454`,
    1101: `454`,
    1102: `455`,
    1103: `455`,
    1104: `456`,
    1105: `457`,
    1106: `458`,
    1107: `464`,
    1108: `464`,
    1109: `465`,
    111: `2`,
    1110: `466`,
    1111: `466`,
    1112: `467`,
    1113: `468`,
    1114: `469`,
    1115: `469`,
    1116: `470`,
    1117: `472`,
    1118: `473`,
    1119: `473`,
    112: `2`,
    1120: `474`,
    1121: `474`,
    1122: `475`,
    1123: `476`,
    1124: `476`,
    1125: `477`,
    1126: `477`,
    1127: `478`,
    1128: `478`,
    1129: `478`,
    113: `2`,
    1130: `479`,
    1131: `480`,
    1132: `481`,
    1133: `481`,
    1134: `482`,
    1135: `483`,
    1136: `484`,
    1137: `485`,
    1138: `485`,
    1139: `486`,
    114: `2`,
    1140: `486`,
    1141: `486`,
    1142: `487`,
    1143: `487`,
    1144: `488`,
    1145: `489`,
    1146: `489`,
    1147: `490`,
    1148: `490`,
    1149: `490`,
    115: `2`,
    1150: `491`,
    1151: `491`,
    1152: `492`,
    1153: `493`,
    1154: `494`,
    1155: `495`,
    1156: `495`,
    1157: `495`,
    1158: `497`,
    1159: `498`,
    116: `2`,
    1160: `499`,
    1161: `499`,
    1162: `500`,
    1163: `502`,
    1164: `503`,
    1165: `504`,
    1166: `504`,
    1167: `505`,
    1168: `506`,
    1169: `506`,
    117: `2`,
    1170: `506`,
    1171: `507`,
    1172: `507`,
    1173: `509`,
    1174: `509`,
    1175: `510`,
    1176: `510`,
    1177: `510`,
    1178: `511`,
    1179: `511`,
    118: `2`,
    1180: `512`,
    1181: `512`,
    1182: `512`,
    1183: `513`,
    1184: `514`,
    1185: `514`,
    1186: `515`,
    1187: `515`,
    1188: `515`,
    1189: `516`,
    119: `2`,
    1190: `516`,
    1191: `517`,
    1192: `517`,
    1193: `518`,
    1194: `518`,
    1195: `519`,
    1196: `520`,
    1197: `521`,
    1198: `522`,
    1199: `522`,
    12: `2`,
    120: `2`,
    1200: `523`,
    1201: `523`,
    1202: `524`,
    1203: `525`,
    1204: `525`,
    1205: `526`,
    1206: `527`,
    1207: `527`,
    1208: `528`,
    1209: `529`,
    121: `2`,
    1210: `529`,
    1211: `530`,
    1212: `531`,
    1213: `532`,
    1214: `532`,
    1215: `533`,
    1216: `534`,
    1217: `535`,
    1218: `535`,
    1219: `536`,
    122: `2`,
    1220: `536`,
    1221: `537`,
    1222: `537`,
    1223: `538`,
    1224: `538`,
    1225: `540`,
    1226: `540`,
    1227: `541`,
    1228: `541`,
    1229: `542`,
    123: `2`,
    1230: `542`,
    1231: `543`,
    1232: `543`,
    1233: `544`,
    1234: `545`,
    1235: `545`,
    1236: `546`,
    1237: `546`,
    1238: `547`,
    1239: `547`,
    124: `2`,
    1240: `548`,
    1241: `548`,
    1242: `551`,
    1243: `551`,
    1244: `552`,
    1245: `552`,
    1246: `553`,
    1247: `558`,
    1248: `558`,
    1249: `559`,
    125: `2`,
    1250: `560`,
    1251: `560`,
    1252: `561`,
    1253: `562`,
    1254: `562`,
    1255: `563`,
    1256: `564`,
    1257: `565`,
    1258: `566`,
    1259: `566`,
    126: `2`,
    1260: `566`,
    1261: `567`,
    1262: `567`,
    1263: `567`,
    1264: `568`,
    1265: `569`,
    1266: `569`,
    1267: `570`,
    1268: `570`,
    1269: `570`,
    127: `2`,
    1270: `570`,
    1271: `570`,
    1272: `570`,
    1273: `570`,
    1274: `570`,
    1275: `570`,
    1276: `570`,
    1277: `571`,
    1278: `571`,
    1279: `572`,
    128: `2`,
    1280: `573`,
    1281: `574`,
    1282: `574`,
    1283: `575`,
    1284: `576`,
    1285: `576`,
    1286: `577`,
    1287: `578`,
    1288: `579`,
    1289: `579`,
    129: `2`,
    1290: `580`,
    1291: `581`,
    1292: `581`,
    1293: `582`,
    1294: `583`,
    1295: `588`,
    1296: `588`,
    1297: `589`,
    1298: `589`,
    1299: `589`,
    13: `2`,
    130: `2`,
    1300: `590`,
    1301: `590`,
    1302: `591`,
    1303: `591`,
    1304: `592`,
    1305: `592`,
    1306: `593`,
    1307: `594`,
    1308: `595`,
    1309: `596`,
    131: `2`,
    1310: `596`,
    1311: `597`,
    1312: `597`,
    1313: `598`,
    1314: `599`,
    1315: `599`,
    1316: `600`,
    1317: `601`,
    1318: `601`,
    1319: `602`,
    132: `2`,
    1320: `603`,
    1321: `603`,
    1322: `604`,
    1323: `605`,
    1324: `606`,
    1325: `606`,
    1326: `607`,
    1327: `608`,
    1328: `609`,
    1329: `609`,
    133: `2`,
    1330: `610`,
    1331: `610`,
    1332: `611`,
    1333: `611`,
    1334: `612`,
    1335: `612`,
    1336: `614`,
    1337: `614`,
    1338: `615`,
    1339: `615`,
    134: `2`,
    1340: `616`,
    1341: `616`,
    1342: `617`,
    1343: `617`,
    1344: `618`,
    1345: `619`,
    1346: `619`,
    1347: `620`,
    1348: `620`,
    1349: `621`,
    135: `2`,
    1350: `621`,
    1351: `622`,
    1352: `622`,
    1353: `625`,
    1354: `625`,
    1355: `626`,
    1356: `626`,
    1357: `627`,
    1358: `632`,
    1359: `632`,
    136: `2`,
    1360: `633`,
    1361: `634`,
    1362: `634`,
    1363: `635`,
    1364: `636`,
    1365: `636`,
    1366: `637`,
    1367: `638`,
    1368: `639`,
    1369: `640`,
    137: `2`,
    1370: `640`,
    1371: `640`,
    1372: `641`,
    1373: `641`,
    1374: `641`,
    1375: `642`,
    1376: `643`,
    1377: `643`,
    1378: `644`,
    1379: `644`,
    138: `2`,
    1380: `644`,
    1381: `644`,
    1382: `644`,
    1383: `644`,
    1384: `644`,
    1385: `644`,
    1386: `644`,
    1387: `644`,
    1388: `645`,
    1389: `645`,
    139: `2`,
    1390: `646`,
    1391: `647`,
    1392: `648`,
    1393: `648`,
    1394: `649`,
    1395: `650`,
    1396: `650`,
    1397: `651`,
    1398: `652`,
    1399: `653`,
    14: `2`,
    140: `2`,
    1400: `653`,
    1401: `654`,
    1402: `655`,
    1403: `655`,
    1404: `656`,
    1405: `657`,
    1406: `662`,
    1407: `662`,
    1408: `663`,
    1409: `663`,
    141: `2`,
    1410: `664`,
    1411: `665`,
    1412: `665`,
    1413: `666`,
    1414: `667`,
    1415: `668`,
    1416: `668`,
    1417: `669`,
    1418: `669`,
    1419: `669`,
    142: `2`,
    1420: `669`,
    1421: `669`,
    1422: `669`,
    1423: `669`,
    1424: `669`,
    1425: `669`,
    1426: `669`,
    1427: `670`,
    1428: `670`,
    1429: `671`,
    143: `2`,
    1430: `672`,
    1431: `673`,
    1432: `673`,
    1433: `674`,
    1434: `674`,
    1435: `675`,
    1436: `675`,
    1437: `676`,
    1438: `676`,
    1439: `677`,
    144: `2`,
    1440: `677`,
    1441: `678`,
    1442: `679`,
    1443: `679`,
    1444: `680`,
    1445: `681`,
    1446: `681`,
    1447: `682`,
    1448: `682`,
    1449: `682`,
    145: `2`,
    1450: `683`,
    1451: `684`,
    1452: `685`,
    1453: `686`,
    1454: `687`,
    1455: `687`,
    1456: `688`,
    1457: `689`,
    1458: `690`,
    1459: `690`,
    146: `2`,
    1460: `691`,
    1461: `691`,
    1462: `692`,
    1463: `692`,
    1464: `693`,
    1465: `694`,
    1466: `696`,
    1467: `696`,
    1468: `697`,
    1469: `697`,
    147: `2`,
    1470: `698`,
    1471: `698`,
    1472: `698`,
    1473: `699`,
    1474: `700`,
    1475: `700`,
    1476: `701`,
    1477: `702`,
    1478: `702`,
    1479: `703`,
    148: `2`,
    1480: `703`,
    1481: `703`,
    1482: `704`,
    1483: `705`,
    1484: `705`,
    1485: `706`,
    1486: `707`,
    1487: `707`,
    1488: `708`,
    1489: `709`,
    149: `2`,
    1490: `709`,
    1491: `710`,
    1492: `711`,
    1493: `711`,
    1494: `712`,
    1495: `712`,
    1496: `713`,
    1497: `714`,
    1498: `715`,
    1499: `716`,
    15: `2`,
    150: `2`,
    1500: `716`,
    1501: `717`,
    1502: `717`,
    1503: `718`,
    1504: `719`,
    1505: `720`,
    1506: `721`,
    1507: `721`,
    1508: `722`,
    1509: `722`,
    151: `2`,
    1510: `723`,
    1511: `724`,
    1512: `725`,
    1513: `726`,
    1514: `726`,
    1515: `727`,
    1516: `727`,
    1517: `728`,
    1518: `729`,
    1519: `730`,
    152: `2`,
    1520: `731`,
    1521: `731`,
    1522: `732`,
    1523: `732`,
    1524: `733`,
    1525: `734`,
    1526: `735`,
    1527: `736`,
    1528: `736`,
    1529: `737`,
    153: `2`,
    1530: `737`,
    1531: `738`,
    1532: `738`,
    1533: `739`,
    1534: `740`,
    1535: `740`,
    1536: `741`,
    1537: `742`,
    1538: `742`,
    1539: `743`,
    154: `2`,
    1540: `744`,
    1541: `744`,
    1542: `745`,
    1543: `745`,
    1544: `746`,
    1545: `746`,
    1546: `749`,
    1547: `749`,
    1548: `750`,
    1549: `750`,
    155: `2`,
    1550: `750`,
    1551: `751`,
    1552: `752`,
    1553: `752`,
    1554: `752`,
    1555: `754`,
    1556: `754`,
    1557: `755`,
    1558: `755`,
    1559: `756`,
    156: `2`,
    1560: `757`,
    1561: `758`,
    1562: `758`,
    1563: `759`,
    1564: `760`,
    1565: `760`,
    1566: `760`,
    1567: `761`,
    1568: `762`,
    1569: `763`,
    157: `2`,
    1570: `763`,
    1571: `764`,
    1572: `764`,
    1573: `766`,
    1574: `766`,
    1575: `767`,
    1576: `767`,
    1577: `768`,
    1578: `769`,
    1579: `769`,
    158: `2`,
    1580: `770`,
    1581: `770`,
    1582: `770`,
    1583: `771`,
    1584: `772`,
    1585: `772`,
    1586: `773`,
    1587: `773`,
    1588: `774`,
    1589: `774`,
    159: `2`,
    1590: `774`,
    1591: `775`,
    1592: `776`,
    1593: `777`,
    1594: `777`,
    1595: `778`,
    1596: `778`,
    1597: `778`,
    1598: `779`,
    1599: `780`,
    16: `2`,
    160: `2`,
    1600: `781`,
    1601: `781`,
    1602: `782`,
    1603: `782`,
    1604: `782`,
    1605: `783`,
    1606: `783`,
    1607: `784`,
    1608: `785`,
    1609: `786`,
    161: `2`,
    1610: `786`,
    1611: `787`,
    1612: `787`,
    1613: `788`,
    1614: `788`,
    1615: `788`,
    1616: `789`,
    1617: `789`,
    1618: `790`,
    1619: `791`,
    162: `2`,
    1620: `792`,
    1621: `792`,
    1622: `793`,
    1623: `793`,
    1624: `794`,
    1625: `794`,
    1626: `794`,
    1627: `795`,
    1628: `795`,
    1629: `796`,
    163: `2`,
    1630: `797`,
    1631: `798`,
    1632: `798`,
    1633: `799`,
    1634: `800`,
    1635: `800`,
    1636: `800`,
    1637: `801`,
    1638: `801`,
    1639: `802`,
    164: `2`,
    1640: `803`,
    1641: `804`,
    1642: `805`,
    1643: `805`,
    1644: `806`,
    1645: `807`,
    1646: `807`,
    1647: `808`,
    1648: `809`,
    1649: `810`,
    165: `2`,
    1650: `810`,
    1651: `811`,
    1652: `812`,
    1653: `813`,
    1654: `814`,
    1655: `814`,
    1656: `815`,
    1657: `816`,
    1658: `817`,
    1659: `819`,
    166: `2`,
    1660: `819`,
    1661: `819`,
    1662: `820`,
    1663: `820`,
    1664: `820`,
    1665: `823`,
    1666: `823`,
    1667: `823`,
    1668: `825`,
    1669: `825`,
    167: `2`,
    1670: `826`,
    1671: `826`,
    1672: `826`,
    1673: `827`,
    1674: `827`,
    1675: `828`,
    1676: `828`,
    1677: `829`,
    1678: `829`,
    1679: `829`,
    168: `2`,
    1680: `830`,
    1681: `831`,
    1682: `831`,
    1683: `832`,
    1684: `832`,
    1685: `832`,
    1686: `833`,
    1687: `834`,
    1688: `835`,
    1689: `840`,
    169: `2`,
    1690: `840`,
    1691: `842`,
    1692: `843`,
    1693: `843`,
    1694: `844`,
    1695: `845`,
    1696: `845`,
    1697: `846`,
    1698: `847`,
    1699: `847`,
    17: `2`,
    170: `2`,
    1700: `847`,
    1701: `848`,
    1702: `848`,
    1703: `848`,
    1704: `849`,
    1705: `849`,
    1706: `850`,
    1707: `850`,
    1708: `852`,
    1709: `853`,
    171: `2`,
    1710: `853`,
    1711: `854`,
    1712: `855`,
    1713: `855`,
    1714: `856`,
    1715: `857`,
    1716: `857`,
    1717: `857`,
    1718: `858`,
    1719: `858`,
    172: `2`,
    1720: `858`,
    1721: `859`,
    1722: `859`,
    1723: `860`,
    1724: `860`,
    1725: `861`,
    1726: `861`,
    1727: `861`,
    1728: `862`,
    1729: `862`,
    173: `2`,
    1730: `863`,
    1731: `863`,
    1732: `864`,
    1733: `864`,
    1734: `865`,
    1735: `866`,
    1736: `871`,
    1737: `871`,
    1738: `872`,
    1739: `872`,
    174: `2`,
    1740: `872`,
    1741: `873`,
    1742: `873`,
    1743: `874`,
    1744: `874`,
    1745: `875`,
    1746: `875`,
    1747: `876`,
    1748: `877`,
    1749: `882`,
    175: `2`,
    1750: `882`,
    1751: `883`,
    1752: `883`,
    1753: `884`,
    1754: `885`,
    1755: `885`,
    1756: `885`,
    1757: `886`,
    1758: `886`,
    1759: `887`,
    176: `2`,
    1760: `887`,
    1761: `888`,
    1762: `889`,
    1763: `889`,
    1764: `889`,
    1765: `890`,
    1766: `891`,
    1767: `891`,
    1768: `891`,
    1769: `892`,
    177: `2`,
    1770: `892`,
    1771: `894`,
    1772: `894`,
    1773: `895`,
    1774: `895`,
    1775: `895`,
    1776: `896`,
    1777: `896`,
    1778: `897`,
    1779: `898`,
    178: `2`,
    1780: `903`,
    1781: `903`,
    1782: `905`,
    1783: `906`,
    1784: `906`,
    1785: `907`,
    1786: `908`,
    1787: `908`,
    1788: `909`,
    1789: `910`,
    179: `2`,
    1790: `910`,
    1791: `910`,
    1792: `911`,
    1793: `911`,
    1794: `911`,
    1795: `912`,
    1796: `913`,
    1797: `913`,
    1798: `914`,
    1799: `914`,
    18: `2`,
    180: `2`,
    1800: `915`,
    1801: `916`,
    1802: `922`,
    1803: `923`,
    1804: `924`,
    1805: `924`,
    1806: `925`,
    1807: `926`,
    1808: `926`,
    1809: `927`,
    181: `2`,
    1810: `927`,
    1811: `928`,
    1812: `929`,
    1813: `929`,
    1814: `929`,
    1815: `930`,
    1816: `930`,
    1817: `930`,
    1818: `931`,
    1819: `932`,
    182: `2`,
    1820: `933`,
    1821: `933`,
    1822: `934`,
    1823: `935`,
    1824: `935`,
    1825: `936`,
    1826: `936`,
    1827: `937`,
    1828: `938`,
    1829: `938`,
    183: `2`,
    1830: `938`,
    1831: `939`,
    1832: `939`,
    1833: `939`,
    1834: `940`,
    1835: `941`,
    1836: `942`,
    1837: `942`,
    1838: `943`,
    1839: `944`,
    184: `2`,
    1840: `944`,
    1841: `945`,
    1842: `945`,
    1843: `946`,
    1844: `947`,
    1845: `947`,
    1846: `947`,
    1847: `948`,
    1848: `948`,
    1849: `948`,
    185: `2`,
    1850: `950`,
    1851: `951`,
    1852: `952`,
    1853: `952`,
    1854: `953`,
    1855: `954`,
    1856: `954`,
    1857: `955`,
    1858: `956`,
    1859: `956`,
    186: `2`,
    1860: `957`,
    1861: `958`,
    1862: `958`,
    1863: `959`,
    1864: `960`,
    1865: `960`,
    1866: `960`,
    1867: `961`,
    1868: `961`,
    1869: `961`,
    187: `2`,
    1870: `962`,
    1871: `962`,
    1872: `963`,
    1873: `964`,
    1874: `964`,
    1875: `964`,
    1876: `965`,
    1877: `965`,
    1878: `965`,
    1879: `966`,
    188: `2`,
    1880: `966`,
    1881: `967`,
    1882: `967`,
    1883: `968`,
    1884: `969`,
    1885: `969`,
    1886: `970`,
    1887: `971`,
    1888: `971`,
    1889: `972`,
    189: `2`,
    1890: `973`,
    1891: `975`,
    1892: `975`,
    1893: `975`,
    1894: `975`,
    1895: `975`,
    1896: `975`,
    1897: `975`,
    1898: `975`,
    1899: `975`,
    19: `2`,
    190: `2`,
    1900: `975`,
    1901: `976`,
    1902: `976`,
    1903: `977`,
    1904: `978`,
    1905: `979`,
    1906: `979`,
    1907: `980`,
    1908: `980`,
    1909: `981`,
    191: `2`,
    1910: `981`,
    1911: `982`,
    1912: `982`,
    1913: `982`,
    1914: `983`,
    1915: `983`,
    1916: `984`,
    1917: `984`,
    1918: `984`,
    1919: `985`,
    192: `2`,
    1920: `986`,
    1921: `986`,
    1922: `987`,
    1923: `987`,
    1924: `988`,
    1925: `989`,
    1926: `989`,
    1927: `989`,
    1928: `990`,
    1929: `990`,
    193: `2`,
    1930: `991`,
    1931: `991`,
    1932: `992`,
    1933: `993`,
    1934: `993`,
    1935: `993`,
    1936: `994`,
    1937: `995`,
    1938: `996`,
    1939: `996`,
    194: `2`,
    1940: `997`,
    1941: `997`,
    1942: `997`,
    1943: `998`,
    1944: `999`,
    1945: `999`,
    1946: `1000`,
    1947: `1000`,
    1948: `1000`,
    1949: `1001`,
    195: `2`,
    1950: `1001`,
    1951: `1002`,
    1952: `1003`,
    1953: `1003`,
    1954: `1003`,
    1955: `1004`,
    1956: `1004`,
    1957: `1005`,
    1958: `1005`,
    1959: `1005`,
    196: `2`,
    1960: `1006`,
    1961: `1006`,
    1962: `1007`,
    1963: `1008`,
    1964: `1008`,
    1965: `1008`,
    1966: `1009`,
    1967: `1010`,
    1968: `1011`,
    1969: `1011`,
    197: `2`,
    1970: `1012`,
    1971: `1012`,
    1972: `1012`,
    1973: `1013`,
    1974: `1014`,
    1975: `1014`,
    1976: `1015`,
    1977: `1016`,
    1978: `1016`,
    1979: `1017`,
    198: `2`,
    1980: `1017`,
    1981: `1018`,
    1982: `1019`,
    1983: `1020`,
    1984: `1021`,
    1985: `1021`,
    1986: `1022`,
    1987: `1022`,
    1988: `1023`,
    1989: `1024`,
    199: `2`,
    1990: `1025`,
    1991: `1026`,
    1992: `1026`,
    1993: `1027`,
    1994: `1027`,
    1995: `1028`,
    1996: `1029`,
    1997: `1030`,
    1998: `1031`,
    1999: `1031`,
    2: `2`,
    20: `2`,
    200: `2`,
    2000: `1032`,
    2001: `1032`,
    2002: `1033`,
    2003: `1034`,
    2004: `1035`,
    2005: `1036`,
    2006: `1036`,
    2007: `1037`,
    2008: `1037`,
    2009: `1038`,
    201: `2`,
    2010: `1039`,
    2011: `1040`,
    2012: `1041`,
    2013: `1041`,
    2014: `1042`,
    2015: `1042`,
    2016: `1043`,
    2017: `1043`,
    2018: `1044`,
    2019: `1044`,
    202: `2`,
    2020: `1044`,
    2021: `1047`,
    2022: `1047`,
    2023: `1048`,
    2024: `1048`,
    2025: `1048`,
    2026: `1049`,
    2027: `1049`,
    2028: `1050`,
    2029: `1050`,
    203: `4`,
    2030: `1051`,
    2031: `1051`,
    2032: `1051`,
    2033: `1052`,
    2034: `1052`,
    2035: `1052`,
    2036: `1053`,
    2037: `1054`,
    2038: `1055`,
    2039: `1060`,
    204: `4`,
    2040: `1060`,
    2041: `1061`,
    2042: `1061`,
    2043: `1062`,
    2044: `1063`,
    2045: `1064`,
    2046: `1065`,
    2047: `1065`,
    2048: `1066`,
    2049: `1066`,
    205: `5`,
    2050: `1067`,
    2051: `1068`,
    2052: `1068`,
    2053: `1069`,
    2054: `1070`,
    2055: `1070`,
    2056: `1071`,
    2057: `1072`,
    2058: `1072`,
    2059: `1073`,
    206: `5`,
    2060: `1074`,
    2061: `1075`,
    2062: `1075`,
    2063: `1076`,
    2064: `1077`,
    2065: `1078`,
    2066: `1078`,
    2067: `1079`,
    2068: `1079`,
    2069: `1080`,
    207: `5`,
    2070: `1080`,
    2071: `1081`,
    2072: `1081`,
    2073: `1083`,
    2074: `1083`,
    2075: `1084`,
    2076: `1084`,
    2077: `1085`,
    2078: `1085`,
    2079: `1086`,
    208: `6`,
    2080: `1086`,
    2081: `1087`,
    2082: `1088`,
    2083: `1088`,
    2084: `1089`,
    2085: `1089`,
    2086: `1090`,
    2087: `1090`,
    2088: `1092`,
    2089: `1093`,
    209: `7`,
    2090: `1093`,
    2091: `1094`,
    2092: `1094`,
    2093: `1095`,
    2094: `1095`,
    2095: `1096`,
    2096: `1096`,
    2097: `1100`,
    2098: `1100`,
    2099: `1101`,
    21: `2`,
    210: `8`,
    2100: `1101`,
    2101: `1102`,
    2102: `1107`,
    2103: `1107`,
    2104: `1108`,
    2105: `1109`,
    2106: `1109`,
    2107: `1110`,
    2108: `1111`,
    2109: `1111`,
    211: `9`,
    2110: `1112`,
    2111: `1113`,
    2112: `1114`,
    2113: `1115`,
    2114: `1115`,
    2115: `1115`,
    2116: `1116`,
    2117: `1116`,
    2118: `1116`,
    2119: `1117`,
    212: `10`,
    2120: `1118`,
    2121: `1118`,
    2122: `1119`,
    2123: `1119`,
    2124: `1119`,
    2125: `1119`,
    2126: `1119`,
    2127: `1119`,
    2128: `1119`,
    2129: `1119`,
    213: `11`,
    2130: `1119`,
    2131: `1119`,
    2132: `1120`,
    2133: `1120`,
    2134: `1121`,
    2135: `1122`,
    2136: `1123`,
    2137: `1123`,
    2138: `1124`,
    2139: `1125`,
    214: `11`,
    2140: `1125`,
    2141: `1126`,
    2142: `1127`,
    2143: `1128`,
    2144: `1128`,
    2145: `1129`,
    2146: `1130`,
    2147: `1130`,
    2148: `1131`,
    2149: `1132`,
    215: `12`,
    2150: `1137`,
    2151: `1137`,
    2152: `1139`,
    2153: `1140`,
    2154: `1140`,
    2155: `1141`,
    2156: `1142`,
    2157: `1142`,
    2158: `1143`,
    2159: `1144`,
    216: `13`,
    2160: `1144`,
    2161: `1144`,
    2162: `1145`,
    2163: `1145`,
    2164: `1145`,
    2165: `1146`,
    2166: `1146`,
    2167: `1147`,
    2168: `1148`,
    2169: `1148`,
    217: `14`,
    2170: `1148`,
    2171: `1149`,
    2172: `1149`,
    2173: `1150`,
    2174: `1151`,
    2175: `1152`,
    2176: `1152`,
    2177: `1153`,
    2178: `1154`,
    2179: `1154`,
    218: `15`,
    2180: `1155`,
    2181: `1155`,
    2182: `1155`,
    2183: `1156`,
    2184: `1156`,
    2185: `1156`,
    2186: `1156`,
    2187: `1156`,
    2188: `1156`,
    2189: `1156`,
    219: `15`,
    2190: `1156`,
    2191: `1156`,
    2192: `1156`,
    2193: `1157`,
    2194: `1157`,
    2195: `1158`,
    2196: `1159`,
    2197: `1160`,
    2198: `1160`,
    2199: `1161`,
    22: `2`,
    220: `16`,
    2200: `1161`,
    2201: `1162`,
    2202: `1162`,
    2203: `1163`,
    2204: `1163`,
    2205: `1164`,
    2206: `1164`,
    2207: `1165`,
    2208: `1166`,
    2209: `1166`,
    221: `16`,
    2210: `1167`,
    2211: `1167`,
    2212: `1168`,
    2213: `1168`,
    2214: `1168`,
    2215: `1171`,
    2216: `1171`,
    2217: `1172`,
    2218: `1172`,
    2219: `1172`,
    222: `17`,
    2220: `1173`,
    2221: `1173`,
    2222: `1174`,
    2223: `1174`,
    2224: `1175`,
    2225: `1175`,
    2226: `1175`,
    2227: `1176`,
    2228: `1176`,
    2229: `1176`,
    223: `18`,
    2230: `1177`,
    2231: `1178`,
    2232: `1179`,
    2233: `1184`,
    2234: `1184`,
    2235: `1185`,
    2236: `1185`,
    2237: `1186`,
    2238: `1187`,
    2239: `1188`,
    224: `18`,
    2240: `1189`,
    2241: `1189`,
    2242: `1190`,
    2243: `1190`,
    2244: `1191`,
    2245: `1192`,
    2246: `1192`,
    2247: `1193`,
    2248: `1194`,
    2249: `1194`,
    225: `19`,
    2250: `1195`,
    2251: `1196`,
    2252: `1196`,
    2253: `1197`,
    2254: `1198`,
    2255: `1199`,
    2256: `1199`,
    2257: `1200`,
    2258: `1201`,
    2259: `1202`,
    226: `20`,
    2260: `1202`,
    2261: `1203`,
    2262: `1203`,
    2263: `1204`,
    2264: `1204`,
    2265: `1205`,
    2266: `1205`,
    2267: `1207`,
    2268: `1207`,
    2269: `1208`,
    227: `21`,
    2270: `1208`,
    2271: `1209`,
    2272: `1209`,
    2273: `1210`,
    2274: `1210`,
    2275: `1211`,
    2276: `1212`,
    2277: `1212`,
    2278: `1213`,
    2279: `1213`,
    228: `21`,
    2280: `1214`,
    2281: `1214`,
    2282: `1216`,
    2283: `1217`,
    2284: `1217`,
    2285: `1218`,
    2286: `1218`,
    2287: `1219`,
    2288: `1219`,
    2289: `1220`,
    229: `22`,
    2290: `1220`,
    2291: `1224`,
    2292: `1224`,
    2293: `1225`,
    2294: `1225`,
    2295: `1226`,
    2296: `1231`,
    2297: `1231`,
    2298: `1232`,
    2299: `1233`,
    23: `2`,
    230: `23`,
    2300: `1233`,
    2301: `1234`,
    2302: `1235`,
    2303: `1235`,
    2304: `1236`,
    2305: `1237`,
    2306: `1238`,
    2307: `1239`,
    2308: `1239`,
    2309: `1239`,
    231: `24`,
    2310: `1240`,
    2311: `1240`,
    2312: `1240`,
    2313: `1241`,
    2314: `1242`,
    2315: `1242`,
    2316: `1243`,
    2317: `1243`,
    2318: `1243`,
    2319: `1243`,
    232: `25`,
    2320: `1243`,
    2321: `1243`,
    2322: `1243`,
    2323: `1243`,
    2324: `1243`,
    2325: `1243`,
    2326: `1244`,
    2327: `1244`,
    2328: `1245`,
    2329: `1246`,
    233: `26`,
    2330: `1247`,
    2331: `1247`,
    2332: `1248`,
    2333: `1249`,
    2334: `1249`,
    2335: `1250`,
    2336: `1251`,
    2337: `1252`,
    2338: `1252`,
    2339: `1253`,
    234: `27`,
    2340: `1254`,
    2341: `1254`,
    2342: `1255`,
    2343: `1256`,
    2344: `1261`,
    2345: `1261`,
    2346: `1263`,
    2347: `1264`,
    2348: `1264`,
    2349: `1265`,
    235: `28`,
    2350: `1266`,
    2351: `1266`,
    2352: `1267`,
    2353: `1268`,
    2354: `1268`,
    2355: `1268`,
    2356: `1269`,
    2357: `1269`,
    2358: `1269`,
    2359: `1270`,
    236: `29`,
    2360: `1270`,
    2361: `1271`,
    2362: `1272`,
    2363: `1272`,
    2364: `1272`,
    2365: `1273`,
    2366: `1273`,
    2367: `1274`,
    2368: `1275`,
    2369: `1276`,
    237: `30`,
    2370: `1276`,
    2371: `1277`,
    2372: `1278`,
    2373: `1278`,
    2374: `1279`,
    2375: `1279`,
    2376: `1279`,
    2377: `1280`,
    2378: `1280`,
    2379: `1280`,
    238: `30`,
    2380: `1280`,
    2381: `1280`,
    2382: `1280`,
    2383: `1280`,
    2384: `1280`,
    2385: `1280`,
    2386: `1280`,
    2387: `1281`,
    2388: `1281`,
    2389: `1282`,
    239: `31`,
    2390: `1283`,
    2391: `1284`,
    2392: `1284`,
    2393: `1285`,
    2394: `1285`,
    2395: `1286`,
    2396: `1286`,
    2397: `1287`,
    2398: `1287`,
    2399: `1288`,
    24: `2`,
    240: `32`,
    2400: `1288`,
    2401: `1289`,
    2402: `1290`,
    2403: `1290`,
    2404: `1291`,
    2405: `1291`,
    2406: `1292`,
    2407: `1292`,
    2408: `1292`,
    2409: `1295`,
    241: `33`,
    2410: `1295`,
    2411: `1295`,
    2412: `1297`,
    2413: `1297`,
    2414: `1298`,
    2415: `1298`,
    2416: `1298`,
    2417: `1299`,
    2418: `1299`,
    2419: `1300`,
    242: `33`,
    2420: `1300`,
    2421: `1301`,
    2422: `1301`,
    2423: `1301`,
    2424: `1302`,
    2425: `1302`,
    2426: `1303`,
    2427: `1303`,
    2428: `1304`,
    2429: `1304`,
    243: `34`,
    2430: `1304`,
    2431: `1305`,
    2432: `1305`,
    2433: `1306`,
    2434: `1306`,
    2435: `1307`,
    2436: `1307`,
    2437: `1307`,
    2438: `1308`,
    2439: `1308`,
    244: `35`,
    2440: `1309`,
    2441: `1309`,
    2442: `1310`,
    2443: `1310`,
    2444: `1311`,
    2445: `1312`,
    2446: `1312`,
    2447: `1312`,
    2448: `1313`,
    2449: `1313`,
    245: `36`,
    2450: `1314`,
    2451: `1315`,
    2452: `1315`,
    2453: `1315`,
    2454: `1316`,
    2455: `1316`,
    2456: `1317`,
    2457: `1317`,
    2458: `1318`,
    2459: `1318`,
    246: `36`,
    2460: `1319`,
    2461: `1320`,
    2462: `1320`,
    2463: `1320`,
    2464: `1321`,
    2465: `1321`,
    2466: `1322`,
    2467: `1323`,
    2468: `1323`,
    2469: `1323`,
    247: `37`,
    2470: `1324`,
    2471: `1324`,
    2472: `1325`,
    2473: `1325`,
    2474: `1326`,
    2475: `1326`,
    2476: `1326`,
    2477: `1327`,
    2478: `1327`,
    2479: `1328`,
    248: `38`,
    2480: `1329`,
    2481: `1334`,
    2482: `1334`,
    2483: `1335`,
    2484: `1335`,
    2485: `1335`,
    2486: `1336`,
    2487: `1336`,
    2488: `1337`,
    2489: `1338`,
    249: `40`,
    2490: `1343`,
    2491: `1343`,
    2492: `1345`,
    2493: `1346`,
    2494: `1346`,
    2495: `1347`,
    2496: `1348`,
    2497: `1348`,
    2498: `1349`,
    2499: `1350`,
    25: `2`,
    250: `40`,
    2500: `1350`,
    2501: `1350`,
    2502: `1351`,
    2503: `1351`,
    2504: `1351`,
    2505: `1352`,
    2506: `1353`,
    2507: `1353`,
    2508: `1354`,
    2509: `1354`,
    251: `40`,
    2510: `1355`,
    2511: `1356`,
    2512: `1362`,
    2513: `1362`,
    2514: `1363`,
    2515: `1363`,
    2516: `1364`,
    2517: `1365`,
    2518: `1365`,
    2519: `1366`,
    252: `40`,
    2520: `1366`,
    2521: `1368`,
    2522: `1369`,
    2523: `1369`,
    2524: `1370`,
    2525: `1370`,
    2526: `1371`,
    2527: `1371`,
    2528: `1372`,
    2529: `1373`,
    253: `40`,
    2530: `1374`,
    2531: `1374`,
    2532: `1374`,
    2533: `1375`,
    2534: `1375`,
    2535: `1375`,
    2536: `1376`,
    2537: `1377`,
    2538: `1377`,
    2539: `1378`,
    254: `40`,
    2540: `1378`,
    2541: `1379`,
    2542: `1380`,
    2543: `1386`,
    2544: `1387`,
    2545: `1388`,
    2546: `1388`,
    2547: `1389`,
    2548: `1390`,
    2549: `1390`,
    255: `40`,
    2550: `1391`,
    2551: `1391`,
    2552: `1392`,
    2553: `1393`,
    2554: `1393`,
    2555: `1393`,
    2556: `1394`,
    2557: `1394`,
    2558: `1394`,
    2559: `1396`,
    256: `40`,
    2560: `1397`,
    2561: `1398`,
    2562: `1398`,
    2563: `1399`,
    2564: `1400`,
    2565: `1400`,
    2566: `1401`,
    2567: `1402`,
    2568: `1402`,
    2569: `1403`,
    257: `40`,
    2570: `1404`,
    2571: `1404`,
    2572: `1405`,
    2573: `1406`,
    2574: `1406`,
    2575: `1406`,
    2576: `1407`,
    2577: `1407`,
    2578: `1407`,
    2579: `1408`,
    258: `40`,
    2580: `1408`,
    2581: `1409`,
    2582: `1410`,
    2583: `1410`,
    2584: `1410`,
    2585: `1411`,
    2586: `1411`,
    2587: `1411`,
    2588: `1412`,
    2589: `1412`,
    259: `40`,
    2590: `1413`,
    2591: `1413`,
    2592: `1414`,
    2593: `1415`,
    2594: `1415`,
    2595: `1416`,
    2596: `1417`,
    2597: `1417`,
    2598: `1418`,
    2599: `1419`,
    26: `2`,
    260: `40`,
    2600: `1421`,
    2601: `1421`,
    2602: `1422`,
    2603: `1422`,
    2604: `1423`,
    2605: `1424`,
    2606: `1424`,
    2607: `1424`,
    2608: `1425`,
    2609: `1425`,
    261: `40`,
    2610: `1426`,
    2611: `1426`,
    2612: `1427`,
    2613: `1427`,
    2614: `1428`,
    2615: `1428`,
    2616: `1429`,
    2617: `1430`,
    2618: `1431`,
    2619: `1431`,
    262: `40`,
    2620: `1432`,
    2621: `1432`,
    2622: `1432`,
    2623: `1433`,
    2624: `1433`,
    2625: `1434`,
    2626: `1434`,
    2627: `1435`,
    2628: `1436`,
    2629: `1436`,
    263: `40`,
    2630: `1437`,
    2631: `1438`,
    2632: `1438`,
    2633: `1439`,
    2634: `1440`,
    2635: `1443`,
    2636: `1444`,
    2637: `1445`,
    2638: `1445`,
    2639: `1446`,
    264: `40`,
    2640: `1447`,
    2641: `1447`,
    2642: `1448`,
    2643: `1449`,
    2644: `1449`,
    2645: `1450`,
    2646: `1451`,
    2647: `1451`,
    2648: `1452`,
    2649: `1453`,
    265: `40`,
    2650: `1453`,
    2651: `1453`,
    2652: `1454`,
    2653: `1454`,
    2654: `1454`,
    2655: `1455`,
    2656: `1455`,
    2657: `1456`,
    2658: `1457`,
    2659: `1457`,
    266: `40`,
    2660: `1457`,
    2661: `1458`,
    2662: `1458`,
    2663: `1458`,
    2664: `1460`,
    2665: `1461`,
    2666: `1462`,
    2667: `1462`,
    2668: `1463`,
    2669: `1464`,
    267: `40`,
    2670: `1464`,
    2671: `1465`,
    2672: `1466`,
    2673: `1466`,
    2674: `1467`,
    2675: `1468`,
    2676: `1468`,
    2677: `1469`,
    2678: `1470`,
    2679: `1470`,
    268: `40`,
    2680: `1470`,
    2681: `1471`,
    2682: `1471`,
    2683: `1471`,
    2684: `1472`,
    2685: `1472`,
    2686: `1473`,
    2687: `1474`,
    2688: `1474`,
    2689: `1474`,
    269: `40`,
    2690: `1475`,
    2691: `1475`,
    2692: `1475`,
    2693: `1476`,
    2694: `1476`,
    2695: `1477`,
    2696: `1477`,
    2697: `1478`,
    2698: `1479`,
    2699: `1479`,
    27: `2`,
    270: `40`,
    2700: `1480`,
    2701: `1480`,
    2702: `1480`,
    2703: `1480`,
    2704: `1480`,
    2705: `1480`,
    2706: `1480`,
    2707: `1480`,
    2708: `1480`,
    2709: `1480`,
    271: `40`,
    2710: `1481`,
    2711: `1481`,
    2712: `1482`,
    2713: `1483`,
    2714: `1484`,
    2715: `1484`,
    2716: `1485`,
    2717: `1485`,
    2718: `1486`,
    2719: `1486`,
    272: `40`,
    2720: `1487`,
    2721: `1487`,
    2722: `1487`,
    2723: `1488`,
    2724: `1488`,
    2725: `1489`,
    2726: `1489`,
    2727: `1489`,
    2728: `1490`,
    2729: `1491`,
    273: `40`,
    2730: `1491`,
    2731: `1492`,
    2732: `1492`,
    2733: `1493`,
    2734: `1494`,
    2735: `1494`,
    2736: `1494`,
    2737: `1495`,
    2738: `1495`,
    2739: `1496`,
    274: `40`,
    2740: `1496`,
    2741: `1497`,
    2742: `1498`,
    2743: `1498`,
    2744: `1498`,
    2745: `1499`,
    2746: `1500`,
    2747: `1501`,
    2748: `1501`,
    2749: `1502`,
    275: `40`,
    2750: `1502`,
    2751: `1502`,
    2752: `1503`,
    2753: `1504`,
    2754: `1504`,
    2755: `1505`,
    2756: `1505`,
    2757: `1506`,
    2758: `1507`,
    2759: `1507`,
    276: `40`,
    2760: `1507`,
    2761: `1508`,
    2762: `1508`,
    2763: `1509`,
    2764: `1509`,
    2765: `1510`,
    2766: `1511`,
    2767: `1511`,
    2768: `1511`,
    2769: `1512`,
    277: `40`,
    2770: `1513`,
    2771: `1514`,
    2772: `1514`,
    2773: `1515`,
    2774: `1515`,
    2775: `1515`,
    2776: `1516`,
    2777: `1517`,
    2778: `1517`,
    2779: `1518`,
    278: `40`,
    2780: `1518`,
    2781: `1518`,
    2782: `1519`,
    2783: `1520`,
    2784: `1520`,
    2785: `1521`,
    2786: `1521`,
    2787: `1522`,
    2788: `1523`,
    2789: `1524`,
    279: `40`,
    2790: `1525`,
    2791: `1525`,
    2792: `1526`,
    2793: `1526`,
    2794: `1527`,
    2795: `1528`,
    2796: `1529`,
    2797: `1530`,
    2798: `1530`,
    2799: `1531`,
    28: `2`,
    280: `40`,
    2800: `1531`,
    2801: `1532`,
    2802: `1533`,
    2803: `1534`,
    2804: `1535`,
    2805: `1535`,
    2806: `1536`,
    2807: `1536`,
    2808: `1537`,
    2809: `1538`,
    281: `40`,
    2810: `1539`,
    2811: `1540`,
    2812: `1540`,
    2813: `1541`,
    2814: `1541`,
    2815: `1542`,
    2816: `1543`,
    2817: `1544`,
    2818: `1545`,
    2819: `1545`,
    282: `40`,
    2820: `1546`,
    2821: `1546`,
    2822: `1547`,
    2823: `1547`,
    2824: `1548`,
    2825: `1548`,
    2826: `1548`,
    2827: `1551`,
    2828: `1551`,
    2829: `1552`,
    283: `40`,
    2830: `1552`,
    2831: `1552`,
    2832: `1553`,
    2833: `1553`,
    2834: `1554`,
    2835: `1554`,
    2836: `1556`,
    2837: `1557`,
    2838: `1557`,
    2839: `1558`,
    284: `40`,
    2840: `1559`,
    2841: `1559`,
    2842: `1560`,
    2843: `1561`,
    2844: `1561`,
    2845: `1561`,
    2846: `1562`,
    2847: `1562`,
    2848: `1562`,
    2849: `1563`,
    285: `40`,
    2850: `1564`,
    2851: `1564`,
    2852: `1565`,
    2853: `1565`,
    2854: `1566`,
    2855: `1567`,
    2856: `1572`,
    2857: `1572`,
    2858: `1573`,
    2859: `1573`,
    286: `40`,
    2860: `1574`,
    2861: `1575`,
    2862: `1575`,
    2863: `1575`,
    2864: `1576`,
    2865: `1576`,
    2866: `1577`,
    2867: `1578`,
    2868: `1579`,
    2869: `1579`,
    287: `40`,
    2870: `1580`,
    2871: `1581`,
    2872: `1581`,
    2873: `1582`,
    2874: `1582`,
    2875: `1582`,
    2876: `1583`,
    2877: `1583`,
    2878: `1583`,
    2879: `1583`,
    288: `40`,
    2880: `1583`,
    2881: `1583`,
    2882: `1583`,
    2883: `1583`,
    2884: `1583`,
    2885: `1583`,
    2886: `1584`,
    2887: `1584`,
    2888: `1585`,
    2889: `1586`,
    289: `40`,
    2890: `1587`,
    2891: `1587`,
    2892: `1588`,
    2893: `1588`,
    2894: `1589`,
    2895: `1589`,
    2896: `1590`,
    2897: `1590`,
    2898: `1591`,
    2899: `1592`,
    29: `2`,
    290: `40`,
    2900: `1593`,
    2901: `1594`,
    2902: `1594`,
    2903: `1595`,
    2904: `1595`,
    2905: `1596`,
    2906: `1597`,
    2907: `1597`,
    2908: `1598`,
    2909: `1599`,
    291: `40`,
    2910: `1599`,
    2911: `1600`,
    2912: `1601`,
    2913: `1601`,
    2914: `1602`,
    2915: `1603`,
    2916: `1604`,
    2917: `1604`,
    2918: `1605`,
    2919: `1606`,
    292: `40`,
    2920: `1607`,
    2921: `1607`,
    2922: `1608`,
    2923: `1608`,
    2924: `1609`,
    2925: `1609`,
    2926: `1610`,
    2927: `1610`,
    2928: `1612`,
    2929: `1612`,
    293: `40`,
    2930: `1613`,
    2931: `1613`,
    2932: `1614`,
    2933: `1614`,
    2934: `1615`,
    2935: `1615`,
    2936: `1616`,
    2937: `1617`,
    2938: `1617`,
    2939: `1618`,
    294: `40`,
    2940: `1618`,
    2941: `1619`,
    2942: `1619`,
    2943: `1620`,
    2944: `1620`,
    2945: `1623`,
    2946: `1623`,
    2947: `1624`,
    2948: `1624`,
    2949: `1625`,
    295: `40`,
    2950: `1630`,
    2951: `1630`,
    2952: `1631`,
    2953: `1632`,
    2954: `1632`,
    2955: `1633`,
    2956: `1634`,
    2957: `1634`,
    2958: `1635`,
    2959: `1636`,
    296: `40`,
    2960: `1637`,
    2961: `1638`,
    2962: `1638`,
    2963: `1638`,
    2964: `1639`,
    2965: `1639`,
    2966: `1639`,
    2967: `1640`,
    2968: `1641`,
    2969: `1641`,
    297: `40`,
    2970: `1642`,
    2971: `1642`,
    2972: `1642`,
    2973: `1642`,
    2974: `1642`,
    2975: `1642`,
    2976: `1642`,
    2977: `1642`,
    2978: `1642`,
    2979: `1642`,
    298: `40`,
    2980: `1643`,
    2981: `1643`,
    2982: `1644`,
    2983: `1645`,
    2984: `1646`,
    2985: `1646`,
    2986: `1647`,
    2987: `1648`,
    2988: `1648`,
    2989: `1649`,
    299: `40`,
    2990: `1650`,
    2991: `1651`,
    2992: `1651`,
    2993: `1652`,
    2994: `1653`,
    2995: `1653`,
    2996: `1654`,
    2997: `1655`,
    2998: `1660`,
    2999: `1660`,
    3: `2`,
    30: `2`,
    300: `40`,
    3000: `1661`,
    3001: `1661`,
    3002: `1662`,
    3003: `1662`,
    3004: `1663`,
    3005: `1664`,
    3006: `1664`,
    3007: `1665`,
    3008: `1665`,
    3009: `1666`,
    301: `40`,
    3010: `1666`,
    3011: `1666`,
    3012: `1669`,
    3013: `1669`,
    3014: `1670`,
    3015: `1670`,
    3016: `1670`,
    3017: `1671`,
    3018: `1671`,
    3019: `1672`,
    302: `40`,
    3020: `1672`,
    3021: `1674`,
    3022: `1675`,
    3023: `1675`,
    3024: `1676`,
    3025: `1677`,
    3026: `1677`,
    3027: `1678`,
    3028: `1679`,
    3029: `1679`,
    303: `40`,
    3030: `1679`,
    3031: `1680`,
    3032: `1680`,
    3033: `1680`,
    3034: `1681`,
    3035: `1682`,
    3036: `1682`,
    3037: `1683`,
    3038: `1683`,
    3039: `1684`,
    304: `40`,
    3040: `1685`,
    3041: `1690`,
    3042: `1690`,
    3043: `1691`,
    3044: `1691`,
    3045: `1692`,
    3046: `1693`,
    3047: `1693`,
    3048: `1693`,
    3049: `1694`,
    305: `40`,
    3050: `1694`,
    3051: `1695`,
    3052: `1696`,
    3053: `1697`,
    3054: `1697`,
    3055: `1698`,
    3056: `1699`,
    3057: `1699`,
    3058: `1700`,
    3059: `1700`,
    306: `40`,
    3060: `1700`,
    3061: `1701`,
    3062: `1701`,
    3063: `1701`,
    3064: `1701`,
    3065: `1701`,
    3066: `1701`,
    3067: `1701`,
    3068: `1701`,
    3069: `1701`,
    307: `40`,
    3070: `1701`,
    3071: `1702`,
    3072: `1702`,
    3073: `1703`,
    3074: `1704`,
    3075: `1705`,
    3076: `1705`,
    3077: `1706`,
    3078: `1706`,
    3079: `1707`,
    308: `40`,
    3080: `1707`,
    3081: `1708`,
    3082: `1708`,
    3083: `1709`,
    3084: `1710`,
    3085: `1711`,
    3086: `1712`,
    3087: `1712`,
    3088: `1713`,
    3089: `1713`,
    309: `40`,
    3090: `1714`,
    3091: `1715`,
    3092: `1715`,
    3093: `1716`,
    3094: `1717`,
    3095: `1717`,
    3096: `1718`,
    3097: `1719`,
    3098: `1719`,
    3099: `1720`,
    31: `2`,
    310: `40`,
    3100: `1721`,
    3101: `1722`,
    3102: `1722`,
    3103: `1723`,
    3104: `1724`,
    3105: `1725`,
    3106: `1725`,
    3107: `1726`,
    3108: `1726`,
    3109: `1727`,
    311: `40`,
    3110: `1727`,
    3111: `1728`,
    3112: `1728`,
    3113: `1730`,
    3114: `1730`,
    3115: `1731`,
    3116: `1731`,
    3117: `1732`,
    3118: `1732`,
    3119: `1733`,
    312: `40`,
    3120: `1733`,
    3121: `1734`,
    3122: `1735`,
    3123: `1735`,
    3124: `1736`,
    3125: `1736`,
    3126: `1737`,
    3127: `1737`,
    3128: `1738`,
    3129: `1738`,
    313: `40`,
    3130: `1741`,
    3131: `1741`,
    3132: `1742`,
    3133: `1742`,
    3134: `1743`,
    3135: `1748`,
    3136: `1748`,
    3137: `1749`,
    3138: `1750`,
    3139: `1750`,
    314: `40`,
    3140: `1751`,
    3141: `1752`,
    3142: `1752`,
    3143: `1753`,
    3144: `1754`,
    3145: `1755`,
    3146: `1756`,
    3147: `1756`,
    3148: `1756`,
    3149: `1757`,
    315: `40`,
    3150: `1757`,
    3151: `1757`,
    3152: `1758`,
    3153: `1759`,
    3154: `1759`,
    3155: `1760`,
    3156: `1760`,
    3157: `1760`,
    3158: `1760`,
    3159: `1760`,
    316: `40`,
    3160: `1760`,
    3161: `1760`,
    3162: `1760`,
    3163: `1760`,
    3164: `1760`,
    3165: `1761`,
    3166: `1761`,
    3167: `1762`,
    3168: `1763`,
    3169: `1764`,
    317: `40`,
    3170: `1764`,
    3171: `1765`,
    3172: `1766`,
    3173: `1766`,
    3174: `1767`,
    3175: `1768`,
    3176: `1769`,
    3177: `1769`,
    3178: `1770`,
    3179: `1771`,
    318: `40`,
    3180: `1771`,
    3181: `1772`,
    3182: `1773`,
    3183: `1778`,
    3184: `1778`,
    3185: `1779`,
    3186: `1779`,
    3187: `1780`,
    3188: `1780`,
    3189: `1781`,
    319: `40`,
    3190: `1782`,
    3191: `1782`,
    3192: `1783`,
    3193: `1783`,
    3194: `1784`,
    3195: `1784`,
    3196: `1784`,
    3197: `1787`,
    3198: `1787`,
    3199: `1788`,
    32: `2`,
    320: `40`,
    3200: `1788`,
    3201: `1789`,
    3202: `1790`,
    3203: `1791`,
    3204: `1791`,
    3205: `1792`,
    3206: `1792`,
    3207: `1793`,
    3208: `1793`,
    3209: `1794`,
    321: `40`,
    3210: `1794`,
    3211: `1795`,
    3212: `1795`,
    3213: `1795`,
    3214: `1798`,
    3215: `1798`,
    3216: `1799`,
    3217: `1799`,
    3218: `1800`,
    3219: `1801`,
    322: `40`,
    3220: `1802`,
    3221: `1802`,
    3222: `1803`,
    3223: `1803`,
    3224: `1804`,
    3225: `1804`,
    3226: `1805`,
    3227: `1805`,
    3228: `1806`,
    3229: `1806`,
    323: `40`,
    3230: `1806`,
    3231: `1809`,
    3232: `1809`,
    3233: `1809`,
    3234: `1810`,
    3235: `1810`,
    3236: `1810`,
    3237: `1813`,
    3238: `1813`,
    3239: `1814`,
    324: `40`,
    3240: `1814`,
    3241: `1814`,
    3242: `1815`,
    3243: `1815`,
    3244: `1816`,
    3245: `1816`,
    3246: `1817`,
    3247: `1817`,
    3248: `1817`,
    3249: `1818`,
    325: `40`,
    3250: `1818`,
    3251: `1819`,
    3252: `1819`,
    3253: `1820`,
    3254: `1820`,
    3255: `1820`,
    3256: `1821`,
    3257: `1821`,
    3258: `1822`,
    3259: `1822`,
    326: `40`,
    3260: `1823`,
    3261: `1823`,
    3262: `1823`,
    3263: `1824`,
    3264: `1824`,
    3265: `1825`,
    3266: `1825`,
    3267: `1826`,
    3268: `1826`,
    3269: `1826`,
    327: `40`,
    3270: `1827`,
    3271: `1827`,
    3272: `1828`,
    3273: `1828`,
    3274: `1829`,
    3275: `1829`,
    3276: `1829`,
    3277: `1830`,
    3278: `1830`,
    3279: `1831`,
    328: `40`,
    3280: `1831`,
    3281: `1832`,
    3282: `1832`,
    3283: `1833`,
    3284: `1833`,
    3285: `1834`,
    3286: `1835`,
    3287: `1835`,
    3288: `1835`,
    3289: `1836`,
    329: `40`,
    3290: `1837`,
    3291: `1837`,
    3292: `1837`,
    3293: `1838`,
    3294: `1839`,
    3295: `1839`,
    3296: `1840`,
    3297: `1840`,
    3298: `1841`,
    3299: `1842`,
    33: `2`,
    330: `40`,
    3300: `1842`,
    3301: `1842`,
    3302: `1843`,
    3303: `1843`,
    3304: `1844`,
    3305: `1844`,
    3306: `1845`,
    3307: `1846`,
    3308: `1846`,
    3309: `1846`,
    331: `40`,
    3310: `1847`,
    3311: `1847`,
    3312: `1848`,
    3313: `1849`,
    3314: `1849`,
    3315: `1849`,
    3316: `1850`,
    3317: `1851`,
    3318: `1851`,
    3319: `1851`,
    332: `40`,
    3320: `1852`,
    3321: `1852`,
    3322: `1853`,
    3323: `1853`,
    3324: `1854`,
    3325: `1854`,
    3326: `1855`,
    3327: `1856`,
    3328: `1856`,
    3329: `1856`,
    333: `40`,
    3330: `1857`,
    3331: `1857`,
    3332: `1858`,
    3333: `1858`,
    3334: `1859`,
    3335: `1859`,
    3336: `1860`,
    3337: `1861`,
    3338: `1861`,
    3339: `1861`,
    334: `40`,
    3340: `1862`,
    3341: `1862`,
    3342: `1863`,
    3343: `1864`,
    3344: `1864`,
    3345: `1864`,
    3346: `1865`,
    3347: `1865`,
    3348: `1866`,
    3349: `1867`,
    335: `40`,
    3350: `1867`,
    3351: `1867`,
    3352: `1868`,
    3353: `1868`,
    3354: `1869`,
    3355: `1869`,
    3356: `1870`,
    3357: `1871`,
    3358: `1871`,
    3359: `1871`,
    336: `40`,
    3360: `1872`,
    3361: `1872`,
    3362: `1873`,
    3363: `1874`,
    3364: `1874`,
    3365: `1874`,
    3366: `1875`,
    3367: `1876`,
    3368: `1876`,
    3369: `1876`,
    337: `40`,
    3370: `1877`,
    3371: `1877`,
    3372: `1878`,
    3373: `1879`,
    3374: `1879`,
    3375: `1879`,
    3376: `1880`,
    3377: `1880`,
    3378: `1881`,
    3379: `1881`,
    338: `40`,
    3380: `1882`,
    3381: `1882`,
    3382: `1883`,
    3383: `1884`,
    3384: `1884`,
    3385: `1884`,
    3386: `1885`,
    3387: `1885`,
    3388: `1886`,
    3389: `1887`,
    339: `40`,
    3390: `1887`,
    3391: `1887`,
    3392: `1888`,
    3393: `1888`,
    3394: `1889`,
    3395: `1889`,
    3396: `1890`,
    3397: `1890`,
    3398: `1891`,
    3399: `1892`,
    34: `2`,
    340: `40`,
    3400: `1892`,
    3401: `1893`,
    3402: `1893`,
    3403: `1894`,
    3404: `1895`,
    3405: `1895`,
    3406: `1896`,
    3407: `1896`,
    3408: `1897`,
    3409: `1898`,
    341: `40`,
    3410: `1898`,
    3411: `1898`,
    3412: `1899`,
    3413: `1899`,
    3414: `1900`,
    3415: `1901`,
    3416: `1901`,
    3417: `1901`,
    3418: `1902`,
    3419: `1902`,
    342: `40`,
    3420: `1903`,
    3421: `1904`,
    3422: `1905`,
    3423: `1906`,
    3424: `1906`,
    3425: `1907`,
    3426: `1907`,
    3427: `1907`,
    3428: `1908`,
    3429: `1908`,
    343: `40`,
    3430: `1909`,
    3431: `1909`,
    3432: `1910`,
    3433: `1910`,
    3434: `1910`,
    3435: `1911`,
    3436: `1911`,
    3437: `1912`,
    3438: `1912`,
    3439: `1913`,
    344: `40`,
    3440: `1913`,
    3441: `1913`,
    3442: `1914`,
    3443: `1915`,
    3444: `1916`,
    3445: `1923`,
    3446: `1923`,
    3447: `1924`,
    3448: `1924`,
    3449: `1925`,
    345: `40`,
    3450: `1926`,
    3451: `1926`,
    3452: `1926`,
    3453: `1927`,
    3454: `1927`,
    3455: `1928`,
    3456: `1928`,
    3457: `1929`,
    3458: `1929`,
    3459: `1930`,
    346: `40`,
    3460: `1931`,
    3461: `1931`,
    3462: `1931`,
    3463: `1932`,
    3464: `1932`,
    3465: `1933`,
    3466: `1934`,
    3467: `1934`,
    3468: `1934`,
    3469: `1935`,
    347: `40`,
    3470: `1935`,
    3471: `1936`,
    3472: `1936`,
    3473: `1937`,
    3474: `1937`,
    3475: `1937`,
    3476: `1938`,
    3477: `1938`,
    3478: `1939`,
    3479: `1939`,
    348: `40`,
    3480: `1940`,
    3481: `1940`,
    3482: `1940`,
    3483: `1941`,
    3484: `1941`,
    3485: `1942`,
    3486: `1943`,
    3487: `1950`,
    3488: `1950`,
    3489: `1951`,
    349: `40`,
    3490: `1951`,
    3491: `1952`,
    3492: `1953`,
    3493: `1953`,
    3494: `1953`,
    3495: `1954`,
    3496: `1954`,
    3497: `1955`,
    3498: `1955`,
    3499: `1956`,
    35: `2`,
    350: `40`,
    3500: `1957`,
    3501: `1957`,
    3502: `1957`,
    3503: `1958`,
    3504: `1959`,
    3505: `1966`,
    3506: `1966`,
    3507: `1967`,
    3508: `1967`,
    3509: `1968`,
    351: `40`,
    3510: `1969`,
    3511: `1970`,
    3512: `1971`,
    3513: `1971`,
    3514: `1972`,
    3515: `1972`,
    3516: `1973`,
    3517: `1974`,
    3518: `1974`,
    3519: `1975`,
    352: `40`,
    3520: `1976`,
    3521: `1976`,
    3522: `1977`,
    3523: `1978`,
    3524: `1978`,
    3525: `1979`,
    3526: `1980`,
    3527: `1981`,
    3528: `1981`,
    3529: `1982`,
    353: `40`,
    3530: `1983`,
    3531: `1984`,
    3532: `1984`,
    3533: `1985`,
    3534: `1985`,
    3535: `1986`,
    3536: `1986`,
    3537: `1987`,
    3538: `1987`,
    3539: `1989`,
    354: `40`,
    3540: `1989`,
    3541: `1990`,
    3542: `1990`,
    3543: `1991`,
    3544: `1991`,
    3545: `1992`,
    3546: `1992`,
    3547: `1993`,
    3548: `1994`,
    3549: `1994`,
    355: `40`,
    3550: `1995`,
    3551: `1995`,
    3552: `1996`,
    3553: `1996`,
    3554: `1998`,
    3555: `1999`,
    3556: `1999`,
    3557: `2000`,
    3558: `2000`,
    3559: `2001`,
    356: `40`,
    3560: `2001`,
    3561: `2002`,
    3562: `2002`,
    3563: `2006`,
    3564: `2006`,
    3565: `2007`,
    3566: `2007`,
    3567: `2008`,
    3568: `2014`,
    3569: `2014`,
    357: `40`,
    3570: `2015`,
    3571: `2016`,
    3572: `2016`,
    3573: `2017`,
    3574: `2018`,
    3575: `2018`,
    3576: `2019`,
    3577: `2020`,
    3578: `2021`,
    3579: `2022`,
    358: `40`,
    3580: `2022`,
    3581: `2022`,
    3582: `2023`,
    3583: `2023`,
    3584: `2023`,
    3585: `2024`,
    3586: `2025`,
    3587: `2025`,
    3588: `2026`,
    3589: `2026`,
    359: `40`,
    3590: `2026`,
    3591: `2026`,
    3592: `2026`,
    3593: `2026`,
    3594: `2026`,
    3595: `2026`,
    3596: `2026`,
    3597: `2026`,
    3598: `2027`,
    3599: `2027`,
    36: `2`,
    360: `40`,
    3600: `2028`,
    3601: `2029`,
    3602: `2030`,
    3603: `2030`,
    3604: `2031`,
    3605: `2032`,
    3606: `2032`,
    3607: `2033`,
    3608: `2034`,
    3609: `2035`,
    361: `40`,
    3610: `2035`,
    3611: `2036`,
    3612: `2037`,
    3613: `2037`,
    3614: `2038`,
    3615: `2039`,
    3616: `2046`,
    3617: `2047`,
    3618: `2048`,
    3619: `2048`,
    362: `40`,
    3620: `2049`,
    3621: `2050`,
    3622: `2050`,
    3623: `2051`,
    3624: `2052`,
    3625: `2052`,
    3626: `2053`,
    3627: `2054`,
    3628: `2054`,
    3629: `2055`,
    363: `40`,
    3630: `2056`,
    3631: `2056`,
    3632: `2056`,
    3633: `2057`,
    3634: `2057`,
    3635: `2057`,
    3636: `2058`,
    3637: `2058`,
    3638: `2059`,
    3639: `2060`,
    364: `40`,
    3640: `2060`,
    3641: `2060`,
    3642: `2061`,
    3643: `2061`,
    3644: `2061`,
    3645: `2063`,
    3646: `2064`,
    3647: `2065`,
    3648: `2065`,
    3649: `2066`,
    365: `40`,
    3650: `2067`,
    3651: `2067`,
    3652: `2068`,
    3653: `2069`,
    3654: `2069`,
    3655: `2070`,
    3656: `2071`,
    3657: `2071`,
    3658: `2072`,
    3659: `2073`,
    366: `40`,
    3660: `2073`,
    3661: `2073`,
    3662: `2074`,
    3663: `2074`,
    3664: `2074`,
    3665: `2075`,
    3666: `2075`,
    3667: `2075`,
    3668: `2076`,
    3669: `2076`,
    367: `40`,
    3670: `2077`,
    3671: `2077`,
    3672: `2078`,
    3673: `2079`,
    3674: `2079`,
    3675: `2080`,
    3676: `2080`,
    3677: `2080`,
    3678: `2080`,
    3679: `2080`,
    368: `40`,
    3680: `2080`,
    3681: `2080`,
    3682: `2080`,
    3683: `2080`,
    3684: `2080`,
    3685: `2081`,
    3686: `2081`,
    3687: `2082`,
    3688: `2083`,
    3689: `2084`,
    369: `40`,
    3690: `2084`,
    3691: `2085`,
    3692: `2085`,
    3693: `2086`,
    3694: `2086`,
    3695: `2087`,
    3696: `2087`,
    3697: `2088`,
    3698: `2089`,
    3699: `2089`,
    37: `2`,
    370: `40`,
    3700: `2090`,
    3701: `2091`,
    3702: `2091`,
    3703: `2092`,
    3704: `2092`,
    3705: `2093`,
    3706: `2093`,
    3707: `2094`,
    3708: `2095`,
    3709: `2096`,
    371: `40`,
    3710: `2096`,
    3711: `2097`,
    3712: `2098`,
    3713: `2098`,
    3714: `2099`,
    3715: `2100`,
    3716: `2101`,
    3717: `2101`,
    3718: `2102`,
    3719: `2103`,
    372: `40`,
    3720: `2103`,
    3721: `2104`,
    3722: `2104`,
    3723: `2105`,
    3724: `2105`,
    3725: `2106`,
    3726: `2107`,
    3727: `2109`,
    3728: `2109`,
    3729: `2110`,
    373: `40`,
    3730: `2110`,
    3731: `2110`,
    3732: `2111`,
    3733: `2111`,
    3734: `2112`,
    3735: `2112`,
    3736: `2112`,
    3737: `2113`,
    3738: `2114`,
    3739: `2114`,
    374: `40`,
    3740: `2115`,
    3741: `2116`,
    3742: `2116`,
    3743: `2117`,
    3744: `2117`,
    3745: `2117`,
    3746: `2118`,
    3747: `2119`,
    3748: `2119`,
    3749: `2120`,
    375: `40`,
    3750: `2121`,
    3751: `2121`,
    3752: `2122`,
    3753: `2122`,
    3754: `2122`,
    3755: `2123`,
    3756: `2123`,
    3757: `2124`,
    3758: `2125`,
    3759: `2125`,
    376: `40`,
    3760: `2125`,
    3761: `2126`,
    3762: `2126`,
    3763: `2127`,
    3764: `2127`,
    3765: `2127`,
    3766: `2128`,
    3767: `2128`,
    3768: `2129`,
    3769: `2130`,
    377: `40`,
    3770: `2130`,
    3771: `2130`,
    3772: `2131`,
    3773: `2132`,
    3774: `2133`,
    3775: `2133`,
    3776: `2134`,
    3777: `2135`,
    3778: `2135`,
    3779: `2136`,
    378: `40`,
    3780: `2136`,
    3781: `2137`,
    3782: `2138`,
    3783: `2139`,
    3784: `2140`,
    3785: `2140`,
    3786: `2141`,
    3787: `2141`,
    3788: `2142`,
    3789: `2143`,
    379: `40`,
    3790: `2144`,
    3791: `2145`,
    3792: `2145`,
    3793: `2146`,
    3794: `2146`,
    3795: `2147`,
    3796: `2148`,
    3797: `2149`,
    3798: `2150`,
    3799: `2150`,
    38: `2`,
    380: `40`,
    3800: `2151`,
    3801: `2151`,
    3802: `2152`,
    3803: `2153`,
    3804: `2154`,
    3805: `2155`,
    3806: `2155`,
    3807: `2156`,
    3808: `2156`,
    3809: `2157`,
    381: `40`,
    3810: `2158`,
    3811: `2159`,
    3812: `2160`,
    3813: `2160`,
    3814: `2161`,
    3815: `2161`,
    3816: `2162`,
    3817: `2162`,
    3818: `2163`,
    3819: `2164`,
    382: `40`,
    3820: `2164`,
    3821: `2165`,
    3822: `2165`,
    3823: `2166`,
    3824: `2166`,
    3825: `2167`,
    3826: `2167`,
    3827: `2167`,
    3828: `2170`,
    3829: `2170`,
    383: `40`,
    3830: `2170`,
    3831: `2171`,
    3832: `2171`,
    3833: `2171`,
    3834: `2174`,
    3835: `2174`,
    3836: `2175`,
    3837: `2175`,
    3838: `2175`,
    3839: `2176`,
    384: `40`,
    3840: `2176`,
    3841: `2177`,
    3842: `2177`,
    3843: `2178`,
    3844: `2178`,
    3845: `2178`,
    3846: `2179`,
    3847: `2179`,
    3848: `2180`,
    3849: `2180`,
    385: `40`,
    3850: `2181`,
    3851: `2181`,
    3852: `2181`,
    3853: `2182`,
    3854: `2182`,
    3855: `2183`,
    3856: `2183`,
    3857: `2184`,
    3858: `2184`,
    3859: `2184`,
    386: `40`,
    3860: `2185`,
    3861: `2185`,
    3862: `2186`,
    3863: `2186`,
    3864: `2187`,
    3865: `2187`,
    3866: `2187`,
    3867: `2188`,
    3868: `2188`,
    3869: `2189`,
    387: `40`,
    3870: `2189`,
    3871: `2190`,
    3872: `2190`,
    3873: `2190`,
    3874: `2191`,
    3875: `2191`,
    3876: `2192`,
    3877: `2192`,
    3878: `2193`,
    3879: `2193`,
    388: `40`,
    3880: `2194`,
    3881: `2194`,
    3882: `2195`,
    3883: `2196`,
    3884: `2196`,
    3885: `2196`,
    3886: `2197`,
    3887: `2198`,
    3888: `2198`,
    3889: `2198`,
    389: `40`,
    3890: `2199`,
    3891: `2200`,
    3892: `2200`,
    3893: `2201`,
    3894: `2201`,
    3895: `2202`,
    3896: `2203`,
    3897: `2203`,
    3898: `2203`,
    3899: `2204`,
    39: `2`,
    390: `40`,
    3900: `2204`,
    3901: `2205`,
    3902: `2205`,
    3903: `2206`,
    3904: `2207`,
    3905: `2207`,
    3906: `2207`,
    3907: `2208`,
    3908: `2208`,
    3909: `2209`,
    391: `40`,
    3910: `2210`,
    3911: `2210`,
    3912: `2210`,
    3913: `2211`,
    3914: `2212`,
    3915: `2212`,
    3916: `2212`,
    3917: `2213`,
    3918: `2213`,
    3919: `2214`,
    392: `40`,
    3920: `2214`,
    3921: `2215`,
    3922: `2215`,
    3923: `2216`,
    3924: `2217`,
    3925: `2217`,
    3926: `2217`,
    3927: `2218`,
    3928: `2218`,
    3929: `2219`,
    393: `40`,
    3930: `2219`,
    3931: `2220`,
    3932: `2220`,
    3933: `2221`,
    3934: `2222`,
    3935: `2222`,
    3936: `2222`,
    3937: `2223`,
    3938: `2223`,
    3939: `2224`,
    394: `40`,
    3940: `2225`,
    3941: `2225`,
    3942: `2225`,
    3943: `2226`,
    3944: `2226`,
    3945: `2227`,
    3946: `2228`,
    3947: `2228`,
    3948: `2228`,
    3949: `2229`,
    395: `40`,
    3950: `2229`,
    3951: `2230`,
    3952: `2230`,
    3953: `2231`,
    3954: `2232`,
    3955: `2232`,
    3956: `2232`,
    3957: `2233`,
    3958: `2233`,
    3959: `2234`,
    396: `40`,
    3960: `2235`,
    3961: `2235`,
    3962: `2235`,
    3963: `2236`,
    3964: `2237`,
    3965: `2237`,
    3966: `2237`,
    3967: `2238`,
    3968: `2238`,
    3969: `2239`,
    397: `40`,
    3970: `2240`,
    3971: `2240`,
    3972: `2240`,
    3973: `2241`,
    3974: `2241`,
    3975: `2242`,
    3976: `2242`,
    3977: `2243`,
    3978: `2243`,
    3979: `2244`,
    398: `40`,
    3980: `2245`,
    3981: `2245`,
    3982: `2245`,
    3983: `2246`,
    3984: `2246`,
    3985: `2247`,
    3986: `2248`,
    3987: `2248`,
    3988: `2248`,
    3989: `2249`,
    399: `40`,
    3990: `2249`,
    3991: `2250`,
    3992: `2250`,
    3993: `2251`,
    3994: `2251`,
    3995: `2252`,
    3996: `2253`,
    3997: `2253`,
    3998: `2254`,
    3999: `2254`,
    4: `2`,
    40: `2`,
    400: `40`,
    4000: `2255`,
    4001: `2256`,
    4002: `2256`,
    4003: `2257`,
    4004: `2257`,
    4005: `2258`,
    4006: `2259`,
    4007: `2259`,
    4008: `2259`,
    4009: `2260`,
    401: `41`,
    4010: `2260`,
    4011: `2261`,
    4012: `2262`,
    4013: `2262`,
    4014: `2262`,
    4015: `2263`,
    4016: `2263`,
    4017: `2264`,
    4018: `2265`,
    4019: `2266`,
    402: `41`,
    4020: `2267`,
    4021: `2267`,
    4022: `2268`,
    4023: `2268`,
    4024: `2268`,
    4025: `2269`,
    4026: `2269`,
    4027: `2270`,
    4028: `2270`,
    4029: `2271`,
    403: `41`,
    4030: `2271`,
    4031: `2271`,
    4032: `2272`,
    4033: `2272`,
    4034: `2273`,
    4035: `2273`,
    4036: `2274`,
    4037: `2274`,
    4038: `2274`,
    4039: `2275`,
    404: `42`,
    4040: `2276`,
    4041: `2277`,
    4042: `2284`,
    4043: `2284`,
    4044: `2285`,
    4045: `2285`,
    4046: `2286`,
    4047: `2287`,
    4048: `2287`,
    4049: `2287`,
    405: `42`,
    4050: `2288`,
    4051: `2288`,
    4052: `2289`,
    4053: `2290`,
    4054: `2290`,
    4055: `2290`,
    4056: `2291`,
    4057: `2291`,
    4058: `2292`,
    4059: `2292`,
    406: `42`,
    4060: `2293`,
    4061: `2293`,
    4062: `2294`,
    4063: `2295`,
    4064: `2295`,
    4065: `2295`,
    4066: `2296`,
    4067: `2296`,
    4068: `2297`,
    4069: `2297`,
    407: `42`,
    4070: `2298`,
    4071: `2298`,
    4072: `2298`,
    4073: `2299`,
    4074: `2299`,
    4075: `2300`,
    4076: `2300`,
    4077: `2301`,
    4078: `2301`,
    4079: `2301`,
    408: `42`,
    4080: `2302`,
    4081: `2302`,
    4082: `2303`,
    4083: `2304`,
    4084: `2311`,
    4085: `2311`,
    4086: `2312`,
    4087: `2312`,
    4088: `2313`,
    4089: `2314`,
    409: `42`,
    4090: `2314`,
    4091: `2314`,
    4092: `2315`,
    4093: `2315`,
    4094: `2316`,
    4095: `2316`,
    4096: `2317`,
    4097: `2318`,
    4098: `2318`,
    4099: `2318`,
    41: `2`,
    410: `42`,
    4100: `2319`,
    4101: `2320`,
    4102: `2327`,
    4103: `2327`,
    4104: `2328`,
    4105: `2328`,
    4106: `2329`,
    4107: `2330`,
    4108: `2331`,
    4109: `2332`,
    411: `42`,
    4110: `2332`,
    4111: `2333`,
    4112: `2333`,
    4113: `2334`,
    4114: `2335`,
    4115: `2335`,
    4116: `2336`,
    4117: `2337`,
    4118: `2337`,
    4119: `2338`,
    412: `42`,
    4120: `2339`,
    4121: `2339`,
    4122: `2340`,
    4123: `2341`,
    4124: `2342`,
    4125: `2342`,
    4126: `2343`,
    4127: `2344`,
    4128: `2345`,
    4129: `2345`,
    413: `42`,
    4130: `2346`,
    4131: `2346`,
    4132: `2347`,
    4133: `2347`,
    4134: `2348`,
    4135: `2348`,
    4136: `2350`,
    4137: `2350`,
    4138: `2351`,
    4139: `2351`,
    414: `42`,
    4140: `2352`,
    4141: `2352`,
    4142: `2353`,
    4143: `2353`,
    4144: `2354`,
    4145: `2355`,
    4146: `2355`,
    4147: `2356`,
    4148: `2356`,
    4149: `2357`,
    415: `42`,
    4150: `2357`,
    4151: `2359`,
    4152: `2360`,
    4153: `2360`,
    4154: `2361`,
    4155: `2361`,
    4156: `2362`,
    4157: `2362`,
    4158: `2363`,
    4159: `2363`,
    416: `42`,
    4160: `2367`,
    4161: `2367`,
    4162: `2368`,
    4163: `2368`,
    4164: `2369`,
    4165: `2375`,
    4166: `2375`,
    4167: `2376`,
    4168: `2377`,
    4169: `2377`,
    417: `42`,
    4170: `2378`,
    4171: `2379`,
    4172: `2379`,
    4173: `2380`,
    4174: `2381`,
    4175: `2382`,
    4176: `2383`,
    4177: `2383`,
    4178: `2383`,
    4179: `2384`,
    418: `42`,
    4180: `2384`,
    4181: `2384`,
    4182: `2385`,
    4183: `2386`,
    4184: `2386`,
    4185: `2387`,
    4186: `2387`,
    4187: `2387`,
    4188: `2387`,
    4189: `2387`,
    419: `42`,
    4190: `2387`,
    4191: `2387`,
    4192: `2387`,
    4193: `2387`,
    4194: `2387`,
    4195: `2388`,
    4196: `2388`,
    4197: `2389`,
    4198: `2390`,
    4199: `2391`,
    42: `2`,
    420: `42`,
    4200: `2391`,
    4201: `2392`,
    4202: `2393`,
    4203: `2393`,
    4204: `2394`,
    4205: `2395`,
    4206: `2396`,
    4207: `2396`,
    4208: `2397`,
    4209: `2398`,
    421: `42`,
    4210: `2398`,
    4211: `2399`,
    4212: `2400`,
    4213: `2407`,
    4214: `2408`,
    4215: `2409`,
    4216: `2409`,
    4217: `2410`,
    4218: `2411`,
    4219: `2411`,
    422: `42`,
    4220: `2412`,
    4221: `2413`,
    4222: `2413`,
    4223: `2414`,
    4224: `2415`,
    4225: `2415`,
    4226: `2416`,
    4227: `2417`,
    4228: `2417`,
    4229: `2417`,
    423: `42`,
    4230: `2418`,
    4231: `2418`,
    4232: `2418`,
    4233: `2419`,
    4234: `2419`,
    4235: `2420`,
    4236: `2421`,
    4237: `2421`,
    4238: `2421`,
    4239: `2422`,
    424: `42`,
    4240: `2422`,
    4241: `2422`,
    4242: `2424`,
    4243: `2425`,
    4244: `2426`,
    4245: `2426`,
    4246: `2427`,
    4247: `2428`,
    4248: `2428`,
    4249: `2429`,
    425: `42`,
    4250: `2430`,
    4251: `2430`,
    4252: `2431`,
    4253: `2432`,
    4254: `2432`,
    4255: `2433`,
    4256: `2434`,
    4257: `2434`,
    4258: `2434`,
    4259: `2435`,
    426: `42`,
    4260: `2435`,
    4261: `2435`,
    4262: `2436`,
    4263: `2436`,
    4264: `2436`,
    4265: `2437`,
    4266: `2437`,
    4267: `2438`,
    4268: `2438`,
    4269: `2439`,
    427: `42`,
    4270: `2440`,
    4271: `2440`,
    4272: `2441`,
    4273: `2441`,
    4274: `2441`,
    4275: `2441`,
    4276: `2441`,
    4277: `2441`,
    4278: `2441`,
    4279: `2441`,
    428: `42`,
    4280: `2441`,
    4281: `2441`,
    4282: `2442`,
    4283: `2442`,
    4284: `2443`,
    4285: `2444`,
    4286: `2445`,
    4287: `2445`,
    4288: `2446`,
    4289: `2446`,
    429: `42`,
    4290: `2447`,
    4291: `2447`,
    4292: `2448`,
    4293: `2448`,
    4294: `2449`,
    4295: `2450`,
    4296: `2450`,
    4297: `2451`,
    4298: `2452`,
    4299: `2452`,
    43: `2`,
    430: `42`,
    4300: `2453`,
    4301: `2453`,
    4302: `2454`,
    4303: `2454`,
    4304: `2455`,
    4305: `2456`,
    4306: `2457`,
    4307: `2457`,
    4308: `2458`,
    4309: `2459`,
    431: `42`,
    4310: `2459`,
    4311: `2460`,
    4312: `2461`,
    4313: `2462`,
    4314: `2462`,
    4315: `2463`,
    4316: `2464`,
    4317: `2464`,
    4318: `2465`,
    4319: `2465`,
    432: `42`,
    4320: `2466`,
    4321: `2466`,
    4322: `2467`,
    4323: `2468`,
    4324: `2470`,
    4325: `2470`,
    4326: `2471`,
    4327: `2471`,
    4328: `2471`,
    4329: `2472`,
    433: `42`,
    4330: `2472`,
    4331: `2473`,
    4332: `2473`,
    4333: `2473`,
    4334: `2474`,
    4335: `2475`,
    4336: `2475`,
    4337: `2476`,
    4338: `2477`,
    4339: `2477`,
    434: `42`,
    4340: `2478`,
    4341: `2478`,
    4342: `2478`,
    4343: `2479`,
    4344: `2480`,
    4345: `2480`,
    4346: `2481`,
    4347: `2482`,
    4348: `2482`,
    4349: `2483`,
    435: `42`,
    4350: `2483`,
    4351: `2483`,
    4352: `2484`,
    4353: `2484`,
    4354: `2485`,
    4355: `2486`,
    4356: `2486`,
    4357: `2486`,
    4358: `2487`,
    4359: `2487`,
    436: `42`,
    4360: `2488`,
    4361: `2488`,
    4362: `2488`,
    4363: `2489`,
    4364: `2489`,
    4365: `2490`,
    4366: `2491`,
    4367: `2491`,
    4368: `2491`,
    4369: `2492`,
    437: `42`,
    4370: `2493`,
    4371: `2494`,
    4372: `2494`,
    4373: `2495`,
    4374: `2496`,
    4375: `2496`,
    4376: `2497`,
    4377: `2497`,
    4378: `2498`,
    4379: `2499`,
    438: `42`,
    4380: `2500`,
    4381: `2501`,
    4382: `2501`,
    4383: `2502`,
    4384: `2502`,
    4385: `2503`,
    4386: `2504`,
    4387: `2505`,
    4388: `2506`,
    4389: `2506`,
    439: `42`,
    4390: `2507`,
    4391: `2507`,
    4392: `2508`,
    4393: `2509`,
    4394: `2510`,
    4395: `2511`,
    4396: `2511`,
    4397: `2512`,
    4398: `2512`,
    4399: `2513`,
    44: `2`,
    440: `42`,
    4400: `2514`,
    4401: `2515`,
    4402: `2516`,
    4403: `2516`,
    4404: `2517`,
    4405: `2517`,
    4406: `2518`,
    4407: `2519`,
    4408: `2520`,
    4409: `2521`,
    441: `42`,
    4410: `2521`,
    4411: `2522`,
    4412: `2522`,
    4413: `2523`,
    4414: `2523`,
    4415: `2524`,
    4416: `2525`,
    4417: `2525`,
    4418: `2526`,
    4419: `2526`,
    442: `42`,
    4420: `2527`,
    4421: `2527`,
    4422: `2528`,
    4423: `2528`,
    4424: `2528`,
    4425: `2531`,
    4426: `2531`,
    4427: `2532`,
    4428: `2532`,
    4429: `2532`,
    443: `42`,
    4430: `2533`,
    4431: `2533`,
    4432: `2534`,
    4433: `2534`,
    4434: `2535`,
    4435: `2535`,
    4436: `2535`,
    4437: `2536`,
    4438: `2536`,
    4439: `2537`,
    444: `42`,
    4440: `2537`,
    4441: `2538`,
    4442: `2538`,
    4443: `2539`,
    4444: `2540`,
    4445: `2546`,
    4446: `2546`,
    4447: `2547`,
    4448: `2547`,
    4449: `2548`,
    445: `42`,
    4450: `2549`,
    4451: `2556`,
    4452: `2556`,
    4453: `2557`,
    4454: `2557`,
    4455: `2558`,
    4456: `2558`,
    4457: `2559`,
    4458: `2559`,
    4459: `2560`,
    446: `42`,
    4460: `2561`,
    4461: `2562`,
    4462: `2563`,
    4463: `2563`,
    4464: `2564`,
    4465: `2564`,
    4466: `2564`,
    4467: `2565`,
    4468: `2565`,
    4469: `2566`,
    447: `42`,
    4470: `2566`,
    4471: `2567`,
    4472: `2568`,
    4473: `2568`,
    4474: `2569`,
    4475: `2570`,
    4476: `2570`,
    4477: `2571`,
    4478: `2572`,
    4479: `2574`,
    448: `42`,
    4480: `2574`,
    4481: `2575`,
    4482: `2575`,
    4483: `2576`,
    4484: `2576`,
    4485: `2576`,
    4486: `2576`,
    4487: `2576`,
    4488: `2576`,
    4489: `2576`,
    449: `42`,
    4490: `2576`,
    4491: `2576`,
    4492: `2576`,
    4493: `2577`,
    4494: `2577`,
    4495: `2578`,
    4496: `2579`,
    4497: `2579`,
    4498: `2579`,
    4499: `2580`,
    45: `2`,
    450: `42`,
    4500: `2581`,
    4501: `2582`,
    4502: `2582`,
    4503: `2583`,
    4504: `2584`,
    4505: `2584`,
    4506: `2584`,
    4507: `2585`,
    4508: `2585`,
    4509: `2586`,
    451: `42`,
    4510: `2586`,
    4511: `2587`,
    4512: `2587`,
    4513: `2588`,
    4514: `2588`,
    4515: `2588`,
    4516: `2591`,
    4517: `2591`,
    4518: `2592`,
    4519: `2592`,
    452: `42`,
    4520: `2592`,
    4521: `2593`,
    4522: `2593`,
    4523: `2594`,
    4524: `2594`,
    4525: `2595`,
    4526: `2595`,
    4527: `2595`,
    4528: `2596`,
    4529: `2596`,
    453: `42`,
    4530: `2597`,
    4531: `2597`,
    4532: `2599`,
    4533: `2600`,
    4534: `2600`,
    4535: `2601`,
    4536: `2602`,
    4537: `2602`,
    4538: `2603`,
    4539: `2604`,
    454: `42`,
    4540: `2604`,
    4541: `2604`,
    4542: `2605`,
    4543: `2605`,
    4544: `2605`,
    4545: `2606`,
    4546: `2607`,
    4547: `2607`,
    4548: `2608`,
    4549: `2608`,
    455: `42`,
    4550: `2609`,
    4551: `2610`,
    4552: `2616`,
    4553: `2616`,
    4554: `2617`,
    4555: `2617`,
    4556: `2618`,
    4557: `2618`,
    4558: `2618`,
    4559: `2618`,
    456: `42`,
    4560: `2618`,
    4561: `2618`,
    4562: `2618`,
    4563: `2618`,
    4564: `2618`,
    4565: `2618`,
    4566: `2619`,
    4567: `2619`,
    4568: `2620`,
    4569: `2621`,
    457: `42`,
    4570: `2621`,
    4571: `2621`,
    4572: `2622`,
    4573: `2623`,
    4574: `2624`,
    4575: `2624`,
    4576: `2625`,
    4577: `2626`,
    4578: `2626`,
    4579: `2626`,
    458: `42`,
    4580: `2627`,
    4581: `2627`,
    4582: `2628`,
    4583: `2629`,
    4584: `2630`,
    4585: `2630`,
    4586: `2631`,
    4587: `2632`,
    4588: `2632`,
    4589: `2633`,
    459: `42`,
    4590: `2633`,
    4591: `2634`,
    4592: `2635`,
    4593: `2635`,
    4594: `2635`,
    4595: `2636`,
    4596: `2636`,
    4597: `2636`,
    4598: `2638`,
    4599: `2639`,
    46: `2`,
    460: `42`,
    4600: `2640`,
    4601: `2640`,
    4602: `2641`,
    4603: `2642`,
    4604: `2642`,
    4605: `2643`,
    4606: `2644`,
    4607: `2644`,
    4608: `2645`,
    4609: `2646`,
    461: `42`,
    4610: `2646`,
    4611: `2647`,
    4612: `2648`,
    4613: `2648`,
    4614: `2648`,
    4615: `2649`,
    4616: `2649`,
    4617: `2649`,
    4618: `2650`,
    4619: `2650`,
    462: `42`,
    4620: `2651`,
    4621: `2652`,
    4622: `2652`,
    4623: `2652`,
    4624: `2653`,
    4625: `2653`,
    4626: `2653`,
    4627: `2654`,
    4628: `2654`,
    4629: `2655`,
    463: `42`,
    4630: `2655`,
    4631: `2656`,
    4632: `2657`,
    4633: `2657`,
    4634: `2658`,
    4635: `2659`,
    4636: `2659`,
    4637: `2660`,
    4638: `2661`,
    4639: `2663`,
    464: `42`,
    4640: `2663`,
    4641: `2664`,
    4642: `2664`,
    4643: `2665`,
    4644: `2665`,
    4645: `2665`,
    4646: `2668`,
    4647: `2668`,
    4648: `2669`,
    4649: `2669`,
    465: `42`,
    4650: `2669`,
    4651: `2670`,
    4652: `2670`,
    4653: `2671`,
    4654: `2671`,
    4655: `2672`,
    4656: `2672`,
    4657: `2672`,
    4658: `2673`,
    4659: `2673`,
    466: `44`,
    4660: `2674`,
    4661: `2674`,
    4662: `2675`,
    4663: `2675`,
    4664: `2675`,
    4665: `2676`,
    4666: `2676`,
    4667: `2677`,
    4668: `2677`,
    4669: `2679`,
    467: `49`,
    4670: `2680`,
    4671: `2680`,
    4672: `2681`,
    4673: `2682`,
    4674: `2682`,
    4675: `2683`,
    4676: `2684`,
    4677: `2684`,
    4678: `2684`,
    4679: `2685`,
    468: `49`,
    4680: `2685`,
    4681: `2685`,
    4682: `2686`,
    4683: `2687`,
    4684: `2687`,
    4685: `2688`,
    4686: `2688`,
    4687: `2689`,
    4688: `2690`,
    4689: `2696`,
    469: `50`,
    4690: `2696`,
    4691: `2697`,
    4692: `2697`,
    4693: `2698`,
    4694: `2699`,
    4695: `2699`,
    4696: `2700`,
    4697: `2700`,
    4698: `2702`,
    4699: `2703`,
    47: `2`,
    470: `50`,
    4700: `2703`,
    4701: `2704`,
    4702: `2704`,
    4703: `2705`,
    4704: `2705`,
    4705: `2706`,
    4706: `2707`,
    4707: `2708`,
    4708: `2708`,
    4709: `2708`,
    471: `51`,
    4710: `2709`,
    4711: `2709`,
    4712: `2709`,
    4713: `2710`,
    4714: `2711`,
    4715: `2711`,
    4716: `2712`,
    4717: `2712`,
    4718: `2713`,
    4719: `2714`,
    472: `52`,
    4720: `2720`,
    4721: `2721`,
    4722: `2722`,
    4723: `2722`,
    4724: `2723`,
    4725: `2724`,
    4726: `2724`,
    4727: `2725`,
    4728: `2725`,
    4729: `2726`,
    473: `52`,
    4730: `2727`,
    4731: `2727`,
    4732: `2727`,
    4733: `2728`,
    4734: `2728`,
    4735: `2728`,
    4736: `2730`,
    4737: `2731`,
    4738: `2732`,
    4739: `2732`,
    474: `52`,
    4740: `2733`,
    4741: `2734`,
    4742: `2734`,
    4743: `2735`,
    4744: `2736`,
    4745: `2736`,
    4746: `2737`,
    4747: `2738`,
    4748: `2738`,
    4749: `2739`,
    475: `53`,
    4750: `2740`,
    4751: `2740`,
    4752: `2740`,
    4753: `2741`,
    4754: `2741`,
    4755: `2741`,
    4756: `2742`,
    4757: `2742`,
    4758: `2743`,
    4759: `2744`,
    476: `53`,
    4760: `2744`,
    4761: `2744`,
    4762: `2745`,
    4763: `2745`,
    4764: `2745`,
    4765: `2746`,
    4766: `2746`,
    4767: `2747`,
    4768: `2747`,
    4769: `2748`,
    477: `54`,
    4770: `2749`,
    4771: `2749`,
    4772: `2750`,
    4773: `2751`,
    4774: `2751`,
    4775: `2752`,
    4776: `2753`,
    4777: `2755`,
    4778: `2755`,
    4779: `2756`,
    478: `54`,
    4780: `2756`,
    4781: `2757`,
    4782: `2758`,
    4783: `2758`,
    4784: `2758`,
    4785: `2759`,
    4786: `2759`,
    4787: `2760`,
    4788: `2760`,
    4789: `2761`,
    479: `55`,
    4790: `2761`,
    4791: `2762`,
    4792: `2762`,
    4793: `2763`,
    4794: `2764`,
    4795: `2765`,
    4796: `2765`,
    4797: `2766`,
    4798: `2766`,
    4799: `2766`,
    48: `2`,
    480: `56`,
    4800: `2767`,
    4801: `2767`,
    4802: `2768`,
    4803: `2768`,
    4804: `2769`,
    4805: `2770`,
    4806: `2770`,
    4807: `2771`,
    4808: `2772`,
    4809: `2772`,
    481: `59`,
    4810: `2773`,
    4811: `2774`,
    4812: `2776`,
    4813: `2776`,
    4814: `2777`,
    4815: `2777`,
    4816: `2778`,
    4817: `2778`,
    4818: `2778`,
    4819: `2778`,
    482: `59`,
    4820: `2778`,
    4821: `2778`,
    4822: `2778`,
    4823: `2778`,
    4824: `2778`,
    4825: `2778`,
    4826: `2779`,
    4827: `2779`,
    4828: `2780`,
    4829: `2781`,
    483: `59`,
    4830: `2781`,
    4831: `2781`,
    4832: `2782`,
    4833: `2783`,
    4834: `2784`,
    4835: `2784`,
    4836: `2785`,
    4837: `2786`,
    4838: `2786`,
    4839: `2786`,
    484: `60`,
    4840: `2787`,
    4841: `2787`,
    4842: `2788`,
    4843: `2788`,
    4844: `2789`,
    4845: `2789`,
    4846: `2790`,
    4847: `2790`,
    4848: `2790`,
    4849: `2793`,
    485: `60`,
    4850: `2794`,
    4851: `2797`,
    4852: `2797`,
    4853: `2797`,
    4854: `2800`,
    4855: `2801`,
    4856: `2802`,
    4857: `2802`,
    4858: `2802`,
    4859: `2803`,
    486: `61`,
    4860: `2803`,
    4861: `2804`,
    4862: `2804`,
    4863: `2805`,
    4864: `2806`,
    4865: `2807`,
    4866: `2807`,
    4867: `2808`,
    4868: `2809`,
    4869: `2810`,
    487: `61`,
    4870: `2811`,
    4871: `2811`,
    4872: `2812`,
    4873: `2812`,
    4874: `2812`,
    4875: `2815`,
    4876: `2816`,
    4877: `2819`,
    4878: `2819`,
    4879: `2819`,
    488: `61`,
    4880: `2822`,
    4881: `2822`,
    4882: `2823`,
    4883: `2823`,
    4884: `2824`,
    4885: `2825`,
    4886: `2825`,
    4887: `2825`,
    4888: `2826`,
    4889: `2826`,
    489: `62`,
    4890: `2827`,
    4891: `2827`,
    4892: `2828`,
    4893: `2829`,
    4894: `2832`,
    4895: `2832`,
    4896: `2832`,
    4897: `2833`,
    4898: `2833`,
    4899: `2834`,
    49: `2`,
    490: `62`,
    4900: `2835`,
    4901: `2835`,
    4902: `2836`,
    4903: `2836`,
    4904: `2836`,
    4905: `2839`,
    4906: `2839`,
    4907: `2840`,
    4908: `2840`,
    4909: `2841`,
    491: `63`,
    4910: `2842`,
    4911: `2842`,
    4912: `2842`,
    4913: `2843`,
    4914: `2843`,
    4915: `2844`,
    4916: `2844`,
    4917: `2845`,
    4918: `2846`,
    4919: `2849`,
    492: `63`,
    4920: `2849`,
    4921: `2849`,
    4922: `2850`,
    4923: `2850`,
    4924: `2851`,
    4925: `2851`,
    4926: `2851`,
    4927: `2852`,
    4928: `2853`,
    4929: `2853`,
    493: `63`,
    4930: `2854`,
    4931: `2854`,
    4932: `2855`,
    4933: `2855`,
    4934: `2855`,
    4935: `2858`,
    4936: `2858`,
    4937: `2859`,
    4938: `2859`,
    4939: `2860`,
    494: `64`,
    4940: `2861`,
    4941: `2861`,
    4942: `2861`,
    4943: `2862`,
    4944: `2862`,
    4945: `2863`,
    4946: `2863`,
    4947: `2864`,
    4948: `2865`,
    4949: `2868`,
    495: `65`,
    4950: `2868`,
    4951: `2868`,
    4952: `2869`,
    4953: `2869`,
    4954: `2870`,
    4955: `2870`,
    4956: `2871`,
    4957: `2871`,
    4958: `2873`,
    4959: `2874`,
    496: `65`,
    4960: `2874`,
    4961: `2875`,
    4962: `2876`,
    4963: `2876`,
    4964: `2877`,
    4965: `2878`,
    4966: `2878`,
    4967: `2878`,
    4968: `2879`,
    4969: `2879`,
    497: `66`,
    4970: `2879`,
    4971: `2880`,
    4972: `2880`,
    4973: `2882`,
    4974: `2883`,
    4975: `2883`,
    4976: `2884`,
    4977: `2885`,
    4978: `2885`,
    4979: `2886`,
    498: `66`,
    4980: `2887`,
    4981: `2887`,
    4982: `2887`,
    4983: `2888`,
    4984: `2888`,
    4985: `2888`,
    4986: `2889`,
    4987: `2890`,
    4988: `2890`,
    4989: `2891`,
    499: `66`,
    4990: `2891`,
    4991: `2891`,
    4992: `2894`,
    4993: `2894`,
    4994: `2895`,
    4995: `2895`,
    4996: `2896`,
    4997: `2897`,
    4998: `2897`,
    4999: `2897`,
    5: `2`,
    50: `2`,
    500: `67`,
    5000: `2898`,
    5001: `2898`,
    5002: `2899`,
    5003: `2899`,
    5004: `2900`,
    5005: `2901`,
    5006: `2904`,
    5007: `2904`,
    5008: `2904`,
    5009: `2905`,
    501: `68`,
    5010: `2905`,
    5011: `2906`,
    5012: `2906`,
    5013: `2906`,
    5014: `2907`,
    5015: `2908`,
    5016: `2908`,
    5017: `2909`,
    5018: `2909`,
    5019: `2910`,
    502: `68`,
    5020: `2910`,
    5021: `2910`,
    5022: `2913`,
    5023: `2913`,
    5024: `2914`,
    5025: `2914`,
    5026: `2915`,
    5027: `2916`,
    5028: `2916`,
    5029: `2916`,
    503: `69`,
    5030: `2917`,
    5031: `2917`,
    5032: `2918`,
    5033: `2918`,
    5034: `2919`,
    5035: `2920`,
    5036: `2923`,
    5037: `2923`,
    5038: `2923`,
    5039: `2924`,
    504: `69`,
    5040: `2924`,
    5041: `2925`,
    5042: `2925`,
    5043: `2926`,
    5044: `2926`,
    5045: `2926`,
    5046: `2929`,
    5047: `2930`,
    5048: `2931`,
    5049: `2931`,
    505: `69`,
    5050: `2931`,
    5051: `2932`,
    5052: `2932`,
    5053: `2933`,
    5054: `2933`,
    5055: `2934`,
    5056: `2935`,
    5057: `2936`,
    5058: `2936`,
    5059: `2937`,
    506: `70`,
    5060: `2938`,
    5061: `2939`,
    5062: `2940`,
    5063: `2940`,
    5064: `2941`,
    5065: `2941`,
    5066: `2941`,
    5067: `2944`,
    5068: `2945`,
    5069: `2946`,
    507: `71`,
    5070: `2946`,
    5071: `2946`,
    5072: `2947`,
    5073: `2947`,
    5074: `2948`,
    5075: `2948`,
    5076: `2949`,
    5077: `2950`,
    5078: `2950`,
    5079: `2951`,
    508: `71`,
    5080: `2952`,
    5081: `2953`,
    5082: `2953`,
    5083: `2954`,
    5084: `2955`,
    5085: `2956`,
    5086: `2957`,
    5087: `2957`,
    5088: `2958`,
    5089: `2958`,
    509: `72`,
    5090: `2958`,
    5091: `2961`,
    5092: `2962`,
    5093: `2965`,
    5094: `2965`,
    5095: `2965`,
    5096: `2968`,
    5097: `2969`,
    5098: `2972`,
    5099: `2972`,
    51: `2`,
    510: `72`,
    5100: `2972`,
    5101: `2975`,
    5102: `2976`,
    5103: `2979`,
    5104: `2979`,
    5105: `2979`,
    5106: `2982`,
    5107: `2983`,
    5108: `2986`,
    5109: `2986`,
    511: `73`,
    5110: `2986`,
    5111: `2989`,
    5112: `2989`,
    5113: `2990`,
    5114: `2991`,
    5115: `2992`,
    5116: `2992`,
    5117: `2993`,
    5118: `2993`,
    5119: `2994`,
    512: `74`,
    5120: `2994`,
    5121: `2994`,
    5122: `2995`,
    5123: `2995`,
    5124: `2996`,
    5125: `2996`,
    5126: `2996`,
    5127: `2996`,
    5128: `2996`,
    5129: `2996`,
    513: `75`,
    5130: `2997`,
    5131: `2997`,
    5132: `2998`,
    5133: `2999`,
    5134: `3000`,
    5135: `3000`,
    5136: `3001`,
    5137: `3002`,
    5138: `3004`,
    5139: `3004`,
    514: `76`,
    5140: `3005`,
    5141: `3005`,
    5142: `3005`,
    5143: `3006`,
    5144: `3006`,
    5145: `3007`,
    5146: `3007`,
    5147: `3007`,
    5148: `3008`,
    5149: `3009`,
    515: `76`,
    5150: `3009`,
    5151: `3010`,
    5152: `3011`,
    5153: `3012`,
    5154: `3012`,
    5155: `3013`,
    5156: `3013`,
    5157: `3014`,
    5158: `3014`,
    5159: `3015`,
    516: `77`,
    5160: `3016`,
    5161: `3016`,
    5162: `3017`,
    5163: `3017`,
    5164: `3018`,
    5165: `3019`,
    5166: `3020`,
    5167: `3020`,
    5168: `3021`,
    5169: `3022`,
    517: `77`,
    5170: `3023`,
    5171: `3024`,
    5172: `3029`,
    5173: `3029`,
    5174: `3030`,
    5175: `3030`,
    5176: `3030`,
    5177: `3031`,
    5178: `3032`,
    5179: `3032`,
    518: `78`,
    5180: `3033`,
    5181: `3034`,
    5182: `3035`,
    5183: `3036`,
    5184: `3036`,
    5185: `3037`,
    5186: `3037`,
    5187: `3037`,
    5188: `3038`,
    5189: `3039`,
    519: `79`,
    5190: `3044`,
    5191: `3044`,
    5192: `3045`,
    5193: `3045`,
    5194: `3045`,
    5195: `3046`,
    5196: `3046`,
    5197: `3047`,
    5198: `3048`,
    5199: `3048`,
    52: `2`,
    520: `80`,
    5200: `3049`,
    5201: `3049`,
    5202: `3050`,
    5203: `3050`,
    5204: `3051`,
    5205: `3051`,
    5206: `3051`,
    5207: `3052`,
    5208: `3053`,
    5209: `3054`,
    521: `81`,
    5210: `3054`,
    5211: `3055`,
    5212: `3055`,
    5213: `3056`,
    5214: `3057`,
    5215: `3057`,
    5216: `3058`,
    5217: `3059`,
    5218: `3059`,
    5219: `3060`,
    522: `81`,
    5220: `3061`,
    5221: `3061`,
    5222: `3062`,
    5223: `3063`,
    5224: `3064`,
    5225: `3064`,
    5226: `3065`,
    5227: `3066`,
    5228: `3067`,
    5229: `3067`,
    523: `83`,
    5230: `3068`,
    5231: `3068`,
    5232: `3069`,
    5233: `3069`,
    5234: `3070`,
    5235: `3070`,
    5236: `3071`,
    5237: `3072`,
    5238: `3074`,
    5239: `3074`,
    524: `83`,
    5240: `3075`,
    5241: `3075`,
    5242: `3075`,
    5243: `3075`,
    5244: `3075`,
    5245: `3075`,
    5246: `3076`,
    5247: `3076`,
    5248: `3077`,
    5249: `3077`,
    525: `84`,
    5250: `3078`,
    5251: `3079`,
    5252: `3079`,
    5253: `3080`,
    5254: `3080`,
    5255: `3081`,
    5256: `3081`,
    5257: `3082`,
    5258: `3083`,
    5259: `3084`,
    526: `85`,
    5260: `3084`,
    5261: `3085`,
    5262: `3085`,
    5263: `3086`,
    5264: `3087`,
    5265: `3087`,
    5266: `3088`,
    5267: `3091`,
    5268: `3091`,
    5269: `3092`,
    527: `86`,
    5270: `3093`,
    5271: `3093`,
    5272: `3094`,
    5273: `3095`,
    5274: `3095`,
    5275: `3096`,
    5276: `3097`,
    5277: `3098`,
    5278: `3099`,
    5279: `3099`,
    528: `89`,
    5280: `3099`,
    5281: `3100`,
    5282: `3100`,
    5283: `3100`,
    5284: `3101`,
    5285: `3102`,
    5286: `3102`,
    5287: `3103`,
    5288: `3103`,
    5289: `3103`,
    529: `89`,
    5290: `3103`,
    5291: `3103`,
    5292: `3103`,
    5293: `3103`,
    5294: `3103`,
    5295: `3103`,
    5296: `3103`,
    5297: `3104`,
    5298: `3104`,
    5299: `3105`,
    53: `2`,
    530: `89`,
    5300: `3106`,
    5301: `3107`,
    5302: `3107`,
    5303: `3108`,
    5304: `3109`,
    5305: `3109`,
    5306: `3110`,
    5307: `3111`,
    5308: `3112`,
    5309: `3112`,
    531: `89`,
    5310: `3113`,
    5311: `3113`,
    5312: `3114`,
    5313: `3114`,
    5314: `3114`,
    5315: `3115`,
    5316: `3116`,
    5317: `3116`,
    5318: `3117`,
    5319: `3117`,
    532: `89`,
    5320: `3117`,
    5321: `3118`,
    5322: `3118`,
    5323: `3119`,
    5324: `3119`,
    5325: `3120`,
    5326: `3120`,
    5327: `3120`,
    5328: `3121`,
    5329: `3121`,
    533: `89`,
    5330: `3122`,
    5331: `3122`,
    5332: `3123`,
    5333: `3123`,
    5334: `3123`,
    5335: `3124`,
    5336: `3124`,
    5337: `3125`,
    5338: `3125`,
    5339: `3126`,
    534: `90`,
    5340: `3126`,
    5341: `3127`,
    5342: `3128`,
    5343: `3128`,
    5344: `3129`,
    5345: `3129`,
    5346: `3130`,
    5347: `3131`,
    5348: `3132`,
    5349: `3132`,
    535: `90`,
    5350: `3132`,
    5351: `3133`,
    5352: `3133`,
    5353: `3134`,
    5354: `3134`,
    5355: `3135`,
    5356: `3135`,
    5357: `3136`,
    5358: `3137`,
    5359: `3137`,
    536: `91`,
    5360: `3137`,
    5361: `3138`,
    5362: `3139`,
    5363: `3139`,
    5364: `3141`,
    5365: `3141`,
    5366: `3142`,
    5367: `3142`,
    5368: `3143`,
    5369: `3143`,
    537: `92`,
    5370: `3144`,
    5371: `3145`,
    5372: `3146`,
    5373: `3146`,
    5374: `3147`,
    5375: `3147`,
    5376: `3148`,
    5377: `3149`,
    5378: `3150`,
    5379: `3153`,
    538: `94`,
    5380: `3154`,
    5381: `3154`,
    5382: `3155`,
    5383: `3156`,
    5384: `3159`,
    5385: `3159`,
    5386: `3160`,
    5387: `3160`,
    5388: `3162`,
    5389: `3163`,
    539: `94`,
    5390: `3164`,
    5391: `3164`,
    5392: `3165`,
    5393: `3166`,
    5394: `3166`,
    5395: `3167`,
    5396: `3167`,
    5397: `3167`,
    5398: `3169`,
    5399: `3170`,
    54: `2`,
    540: `95`,
    5400: `3171`,
    5401: `3171`,
    5402: `3172`,
    5403: `3173`,
    5404: `3173`,
    5405: `3174`,
    5406: `3174`,
    5407: `3174`,
    5408: `3175`,
    5409: `3175`,
    541: `100`,
    5410: `3176`,
    5411: `3176`,
    5412: `3177`,
    5413: `3177`,
    5414: `3178`,
    5415: `3178`,
    5416: `3179`,
    5417: `3180`,
    5418: `3180`,
    5419: `3181`,
    542: `101`,
    5420: `3182`,
    5421: `3182`,
    5422: `3183`,
    5423: `3184`,
    5424: `3186`,
    5425: `3186`,
    5426: `3187`,
    5427: `3188`,
    5428: `3188`,
    5429: `3189`,
    543: `102`,
    5430: `3190`,
    5431: `3190`,
    5432: `3191`,
    5433: `3192`,
    5434: `3193`,
    5435: `3193`,
    5436: `3193`,
    5437: `3193`,
    5438: `3193`,
    5439: `3193`,
    544: `102`,
    5440: `3193`,
    5441: `3193`,
    5442: `3193`,
    5443: `3193`,
    5444: `3193`,
    5445: `3193`,
    5446: `3193`,
    5447: `3193`,
    5448: `3193`,
    5449: `3193`,
    545: `105`,
    5450: `3193`,
    5451: `3193`,
    5452: `3193`,
    5453: `3193`,
    5454: `3193`,
    5455: `3193`,
    5456: `3193`,
    5457: `3193`,
    5458: `3193`,
    5459: `3193`,
    546: `105`,
    5460: `3193`,
    5461: `3193`,
    5462: `3193`,
    5463: `3193`,
    5464: `3193`,
    5465: `3193`,
    5466: `3193`,
    5467: `3193`,
    5468: `3193`,
    5469: `3193`,
    547: `106`,
    5470: `3193`,
    5471: `3193`,
    5472: `3193`,
    5473: `3193`,
    5474: `3193`,
    5475: `3193`,
    5476: `3193`,
    5477: `3193`,
    5478: `3193`,
    5479: `3193`,
    548: `106`,
    5480: `3193`,
    5481: `3193`,
    5482: `3193`,
    5483: `3193`,
    5484: `3193`,
    5485: `3193`,
    5486: `3193`,
    5487: `3193`,
    5488: `3193`,
    5489: `3193`,
    549: `107`,
    5490: `3193`,
    5491: `3193`,
    5492: `3193`,
    5493: `3193`,
    5494: `3193`,
    5495: `3193`,
    5496: `3193`,
    5497: `3193`,
    5498: `3193`,
    5499: `3193`,
    55: `2`,
    550: `108`,
    5500: `3194`,
    5501: `3195`,
    5502: `3195`,
    5503: `3196`,
    5504: `3196`,
    5505: `3196`,
    5506: `3197`,
    5507: `3198`,
    5508: `3198`,
    5509: `3199`,
    551: `109`,
    5510: `3200`,
    5511: `3200`,
    5512: `3201`,
    5513: `3202`,
    5514: `3202`,
    5515: `3203`,
    5516: `3203`,
    5517: `3204`,
    5518: `3205`,
    5519: `3205`,
    552: `109`,
    5520: `3206`,
    5521: `3207`,
    5522: `3207`,
    5523: `3208`,
    5524: `3208`,
    5525: `3208`,
    5526: `3209`,
    5527: `3210`,
    5528: `3210`,
    5529: `3211`,
    553: `109`,
    5530: `3211`,
    5531: `3211`,
    5532: `3212`,
    5533: `3213`,
    5534: `3214`,
    5535: `3214`,
    5536: `3215`,
    5537: `3215`,
    5538: `3215`,
    5539: `3216`,
    554: `110`,
    5540: `3217`,
    5541: `3217`,
    5542: `3218`,
    5543: `3219`,
    5544: `3220`,
    5545: `3220`,
    5546: `3221`,
    5547: `3222`,
    5548: `3223`,
    5549: `3223`,
    555: `110`,
    5550: `3224`,
    5551: `3225`,
    5552: `3225`,
    5553: `3226`,
    5554: `3227`,
    5555: `3227`,
    5556: `3228`,
    5557: `3228`,
    5558: `3229`,
    5559: `3229`,
    556: `111`,
    5560: `3230`,
    5561: `3230`,
    5562: `3231`,
    5563: `3231`,
    5564: `3232`,
    5565: `3232`,
    5566: `3232`,
    5567: `3234`,
    5568: `3234`,
    5569: `3234`,
    557: `112`,
    5570: `3235`,
    5571: `3235`,
    5572: `3235`,
    5573: `3235`,
    5574: `3236`,
    5575: `3236`,
    5576: `3236`,
    5577: `3238`,
    5578: `3239`,
    5579: `3240`,
    558: `113`,
    5580: `3240`,
    5581: `3241`,
    5582: `3241`,
    5583: `3242`,
    5584: `3242`,
    5585: `3244`,
    5586: `3244`,
    5587: `3244`,
    5588: `3244`,
    5589: `3244`,
    559: `113`,
    5590: `3244`,
    5591: `3244`,
    5592: `3244`,
    5593: `3245`,
    5594: `3245`,
    5595: `3246`,
    5596: `3246`,
    5597: `3247`,
    5598: `3247`,
    5599: `3248`,
    56: `2`,
    560: `114`,
    5600: `3250`,
    5601: `3250`,
    5602: `3251`,
    5603: `3251`,
    5604: `3253`,
    5605: `3253`,
    5606: `3253`,
    5607: `3254`,
    5608: `3254`,
    5609: `3255`,
    561: `114`,
    5610: `3255`,
    5611: `3255`,
    5612: `3257`,
    5613: `3257`,
    5614: `3257`,
    5615: `3259`,
    5616: `3259`,
    5617: `3259`,
    5618: `3260`,
    5619: `3260`,
    562: `114`,
    5620: `3261`,
    5621: `3261`,
    5622: `3261`,
    5623: `3263`,
    5624: `3263`,
    5625: `3263`,
    5626: `3265`,
    5627: `3265`,
    5628: `3265`,
    5629: `3266`,
    563: `114`,
    5630: `3266`,
    5631: `3267`,
    5632: `3267`,
    5633: `3267`,
    5634: `3269`,
    5635: `3270`,
    5636: `3270`,
    5637: `3271`,
    5638: `3272`,
    5639: `3273`,
    564: `114`,
    5640: `3274`,
    5641: `3274`,
    5642: `3275`,
    5643: `3276`,
    5644: `3277`,
    5645: `3278`,
    5646: `3278`,
    5647: `3279`,
    5648: `3280`,
    5649: `3281`,
    565: `114`,
    5650: `3282`,
    5651: `3282`,
    5652: `3283`,
    5653: `3284`,
    5654: `3285`,
    5655: `3286`,
    5656: `3286`,
    5657: `3287`,
    5658: `3287`,
    5659: `3287`,
    566: `115`,
    5660: `3288`,
    5661: `3288`,
    5662: `3288`,
    5663: `3289`,
    5664: `3290`,
    5665: `3291`,
    5666: `3292`,
    5667: `3292`,
    5668: `3292`,
    5669: `3295`,
    567: `115`,
    5670: `3295`,
    5671: `3295`,
    5672: `3296`,
    5673: `3296`,
    5674: `3296`,
    5675: `3297`,
    5676: `3297`,
    5677: `3298`,
    5678: `3298`,
    5679: `3299`,
    568: `116`,
    5680: `3299`,
    5681: `3299`,
    5682: `3302`,
    5683: `3302`,
    5684: `3302`,
    5685: `3303`,
    5686: `3303`,
    5687: `3303`,
    5688: `3304`,
    5689: `3304`,
    569: `117`,
    5690: `3305`,
    5691: `3305`,
    5692: `3306`,
    5693: `3306`,
    5694: `3306`,
    5695: `3309`,
    5696: `3309`,
    5697: `3309`,
    5698: `3310`,
    5699: `3310`,
    57: `2`,
    570: `118`,
    5700: `3311`,
    5701: `3311`,
    5702: `3311`,
    5703: `3314`,
    5704: `3314`,
    5705: `3314`,
    5706: `3316`,
    5707: `3316`,
    5708: `3317`,
    5709: `3317`,
    571: `120`,
    5710: `3318`,
    5711: `3319`,
    5712: `3322`,
    5713: `3322`,
    5714: `3322`,
    5715: `3323`,
    5716: `3323`,
    5717: `3324`,
    5718: `3324`,
    5719: `3324`,
    572: `120`,
    5720: `3325`,
    5721: `3326`,
    5722: `3326`,
    5723: `3327`,
    5724: `3327`,
    5725: `3328`,
    5726: `3328`,
    5727: `3328`,
    5728: `3330`,
    5729: `3330`,
    573: `121`,
    5730: `3331`,
    5731: `3331`,
    5732: `3332`,
    5733: `3333`,
    5734: `3336`,
    5735: `3336`,
    5736: `3336`,
    5737: `3337`,
    5738: `3337`,
    5739: `3338`,
    574: `121`,
    5740: `3338`,
    5741: `3339`,
    5742: `3339`,
    5743: `3339`,
    5744: `3341`,
    5745: `3342`,
    5746: `3342`,
    5747: `3343`,
    5748: `3343`,
    5749: `3343`,
    575: `121`,
    5750: `3345`,
    5751: `3345`,
    5752: `3346`,
    5753: `3346`,
    5754: `3346`,
    5755: `3347`,
    5756: `3347`,
    5757: `3348`,
    5758: `3348`,
    5759: `3348`,
    576: `124`,
    5760: `3350`,
    5761: `3350`,
    5762: `3351`,
    5763: `3351`,
    5764: `3351`,
    5765: `3352`,
    5766: `3352`,
    5767: `3353`,
    5768: `3353`,
    5769: `3353`,
    577: `125`,
    5770: `3355`,
    5771: `3355`,
    5772: `3355`,
    5773: `3357`,
    5774: `3357`,
    5775: `3357`,
    5776: `3359`,
    5777: `3359`,
    5778: `3360`,
    5779: `3360`,
    578: `125`,
    5780: `3360`,
    5781: `3361`,
    5782: `3361`,
    5783: `3362`,
    5784: `3362`,
    5785: `3362`,
    5786: `3364`,
    5787: `3364`,
    5788: `3364`,
    5789: `3366`,
    579: `126`,
    5790: `3366`,
    5791: `3366`,
    5792: `3368`,
    5793: `3368`,
    5794: `3368`,
    5795: `3370`,
    5796: `3370`,
    5797: `3370`,
    5798: `3372`,
    5799: `3372`,
    58: `2`,
    580: `126`,
    5800: `3373`,
    5801: `3373`,
    5802: `3373`,
    5803: `3374`,
    5804: `3374`,
    5805: `3375`,
    5806: `3375`,
    5807: `3375`,
    5808: `3377`,
    5809: `3377`,
    581: `126`,
    5810: `3378`,
    5811: `3378`,
    5812: `3378`,
    5813: `3379`,
    5814: `3379`,
    5815: `3380`,
    5816: `3380`,
    5817: `3380`,
    5818: `3382`,
    5819: `3382`,
    582: `126`,
    5820: `3383`,
    5821: `3383`,
    5822: `3383`,
    5823: `3384`,
    5824: `3384`,
    5825: `3385`,
    5826: `3385`,
    5827: `3385`,
    5828: `3387`,
    5829: `3387`,
    583: `126`,
    5830: `3388`,
    5831: `3388`,
    5832: `3388`,
    5833: `3389`,
    5834: `3389`,
    5835: `3390`,
    5836: `3390`,
    5837: `3390`,
    5838: `3392`,
    5839: `3392`,
    584: `126`,
    5840: `3393`,
    5841: `3393`,
    5842: `3394`,
    5843: `3395`,
    5844: `3398`,
    5845: `3398`,
    5846: `3398`,
    5847: `3399`,
    5848: `3399`,
    5849: `3400`,
    585: `126`,
    5850: `3400`,
    5851: `3400`,
    5852: `3401`,
    5853: `3401`,
    5854: `3402`,
    5855: `3402`,
    5856: `3402`,
    5857: `3403`,
    5858: `3404`,
    5859: `3404`,
    586: `126`,
    5860: `3405`,
    5861: `3405`,
    5862: `3405`,
    5863: `3406`,
    5864: `3407`,
    5865: `3407`,
    5866: `3408`,
    5867: `3408`,
    5868: `3408`,
    5869: `3409`,
    587: `126`,
    5870: `3410`,
    5871: `3410`,
    5872: `3411`,
    5873: `3411`,
    5874: `3412`,
    5875: `3413`,
    5876: `3414`,
    5877: `3415`,
    5878: `3415`,
    5879: `3416`,
    588: `126`,
    5880: `3416`,
    5881: `3417`,
    5882: `3418`,
    5883: `3419`,
    5884: `3420`,
    5885: `3420`,
    5886: `3421`,
    5887: `3421`,
    5888: `3421`,
    5889: `3423`,
    589: `127`,
    5890: `3423`,
    5891: `3424`,
    5892: `3424`,
    5893: `3424`,
    5894: `3425`,
    5895: `3425`,
    5896: `3426`,
    5897: `3426`,
    5898: `3426`,
    5899: `3428`,
    59: `2`,
    590: `127`,
    5900: `3429`,
    5901: `3429`,
    5902: `3430`,
    5903: `3430`,
    5904: `3430`,
    5905: `3432`,
    5906: `3432`,
    5907: `3434`,
    5908: `3434`,
    5909: `3435`,
    591: `128`,
    5910: `3435`,
    5911: `3435`,
    5912: `3436`,
    5913: `3436`,
    5914: `3437`,
    5915: `3437`,
    5916: `3437`,
    5917: `3438`,
    5918: `3439`,
    5919: `3439`,
    592: `129`,
    5920: `3440`,
    5921: `3440`,
    5922: `3440`,
    5923: `3441`,
    5924: `3441`,
    5925: `3442`,
    5926: `3442`,
    5927: `3443`,
    5928: `3443`,
    5929: `3444`,
    593: `130`,
    5930: `3445`,
    5931: `3446`,
    5932: `3447`,
    5933: `3447`,
    5934: `3448`,
    5935: `3448`,
    5936: `3449`,
    5937: `3450`,
    5938: `3450`,
    5939: `3451`,
    594: `130`,
    5940: `3452`,
    5941: `3452`,
    5942: `3453`,
    5943: `3454`,
    5944: `3454`,
    5945: `3455`,
    5946: `3456`,
    5947: `3457`,
    5948: `3457`,
    5949: `3458`,
    595: `131`,
    5950: `3459`,
    5951: `3460`,
    5952: `3460`,
    5953: `3461`,
    5954: `3461`,
    5955: `3462`,
    5956: `3462`,
    5957: `3463`,
    5958: `3463`,
    5959: `3465`,
    596: `131`,
    5960: `3465`,
    5961: `3466`,
    5962: `3466`,
    5963: `3467`,
    5964: `3467`,
    5965: `3468`,
    5966: `3468`,
    5967: `3469`,
    5968: `3470`,
    5969: `3470`,
    597: `134`,
    5970: `3471`,
    5971: `3471`,
    5972: `3472`,
    5973: `3472`,
    5974: `3473`,
    5975: `3473`,
    5976: `3476`,
    5977: `3476`,
    5978: `3477`,
    5979: `3477`,
    598: `134`,
    5980: `3478`,
    5981: `3483`,
    5982: `3483`,
    5983: `3484`,
    5984: `3485`,
    5985: `3485`,
    5986: `3486`,
    5987: `3487`,
    5988: `3487`,
    5989: `3488`,
    599: `135`,
    5990: `3489`,
    5991: `3490`,
    5992: `3491`,
    5993: `3491`,
    5994: `3491`,
    5995: `3492`,
    5996: `3492`,
    5997: `3492`,
    5998: `3493`,
    5999: `3494`,
    6: `2`,
    60: `2`,
    600: `135`,
    6000: `3494`,
    6001: `3495`,
    6002: `3495`,
    6003: `3495`,
    6004: `3495`,
    6005: `3495`,
    6006: `3495`,
    6007: `3495`,
    6008: `3495`,
    6009: `3495`,
    601: `136`,
    6010: `3495`,
    6011: `3496`,
    6012: `3496`,
    6013: `3497`,
    6014: `3498`,
    6015: `3499`,
    6016: `3499`,
    6017: `3500`,
    6018: `3501`,
    6019: `3501`,
    602: `137`,
    6020: `3502`,
    6021: `3503`,
    6022: `3504`,
    6023: `3504`,
    6024: `3505`,
    6025: `3506`,
    6026: `3506`,
    6027: `3507`,
    6028: `3508`,
    6029: `3513`,
    603: `140`,
    6030: `3513`,
    6031: `3514`,
    6032: `3514`,
    6033: `3514`,
    6034: `3515`,
    6035: `3515`,
    6036: `3516`,
    6037: `3516`,
    6038: `3517`,
    6039: `3517`,
    604: `141`,
    6040: `3518`,
    6041: `3519`,
    6042: `3520`,
    6043: `3521`,
    6044: `3521`,
    6045: `3522`,
    6046: `3522`,
    6047: `3523`,
    6048: `3524`,
    6049: `3524`,
    605: `142`,
    6050: `3525`,
    6051: `3526`,
    6052: `3526`,
    6053: `3527`,
    6054: `3528`,
    6055: `3528`,
    6056: `3529`,
    6057: `3530`,
    6058: `3531`,
    6059: `3531`,
    606: `142`,
    6060: `3532`,
    6061: `3533`,
    6062: `3534`,
    6063: `3534`,
    6064: `3535`,
    6065: `3535`,
    6066: `3536`,
    6067: `3536`,
    6068: `3537`,
    6069: `3537`,
    607: `143`,
    6070: `3539`,
    6071: `3539`,
    6072: `3540`,
    6073: `3540`,
    6074: `3541`,
    6075: `3541`,
    6076: `3542`,
    6077: `3542`,
    6078: `3543`,
    6079: `3544`,
    608: `143`,
    6080: `3544`,
    6081: `3545`,
    6082: `3545`,
    6083: `3546`,
    6084: `3546`,
    6085: `3547`,
    6086: `3547`,
    6087: `3550`,
    6088: `3550`,
    6089: `3551`,
    609: `144`,
    6090: `3551`,
    6091: `3552`,
    6092: `3557`,
    6093: `3557`,
    6094: `3558`,
    6095: `3559`,
    6096: `3559`,
    6097: `3560`,
    6098: `3561`,
    6099: `3561`,
    61: `2`,
    610: `144`,
    6100: `3562`,
    6101: `3563`,
    6102: `3564`,
    6103: `3565`,
    6104: `3565`,
    6105: `3565`,
    6106: `3566`,
    6107: `3566`,
    6108: `3566`,
    6109: `3567`,
    611: `145`,
    6110: `3568`,
    6111: `3568`,
    6112: `3569`,
    6113: `3569`,
    6114: `3569`,
    6115: `3569`,
    6116: `3569`,
    6117: `3569`,
    6118: `3569`,
    6119: `3569`,
    612: `145`,
    6120: `3569`,
    6121: `3569`,
    6122: `3570`,
    6123: `3570`,
    6124: `3571`,
    6125: `3572`,
    6126: `3573`,
    6127: `3573`,
    6128: `3574`,
    6129: `3575`,
    613: `146`,
    6130: `3575`,
    6131: `3576`,
    6132: `3577`,
    6133: `3578`,
    6134: `3578`,
    6135: `3579`,
    6136: `3580`,
    6137: `3580`,
    6138: `3581`,
    6139: `3582`,
    614: `146`,
    6140: `3587`,
    6141: `3587`,
    6142: `3588`,
    6143: `3588`,
    6144: `3589`,
    6145: `3590`,
    6146: `3590`,
    6147: `3591`,
    6148: `3592`,
    6149: `3593`,
    615: `147`,
    6150: `3593`,
    6151: `3594`,
    6152: `3594`,
    6153: `3594`,
    6154: `3594`,
    6155: `3594`,
    6156: `3594`,
    6157: `3594`,
    6158: `3594`,
    6159: `3594`,
    616: `147`,
    6160: `3594`,
    6161: `3595`,
    6162: `3595`,
    6163: `3596`,
    6164: `3597`,
    6165: `3598`,
    6166: `3598`,
    6167: `3599`,
    6168: `3599`,
    6169: `3600`,
    617: `148`,
    6170: `3600`,
    6171: `3601`,
    6172: `3601`,
    6173: `3602`,
    6174: `3602`,
    6175: `3603`,
    6176: `3604`,
    6177: `3604`,
    6178: `3605`,
    6179: `3606`,
    618: `148`,
    6180: `3606`,
    6181: `3607`,
    6182: `3607`,
    6183: `3607`,
    6184: `3608`,
    6185: `3609`,
    6186: `3609`,
    6187: `3610`,
    6188: `3611`,
    6189: `3611`,
    619: `149`,
    6190: `3611`,
    6191: `3612`,
    6192: `3613`,
    6193: `3614`,
    6194: `3614`,
    6195: `3615`,
    6196: `3616`,
    6197: `3617`,
    6198: `3617`,
    6199: `3618`,
    62: `2`,
    620: `151`,
    6200: `3618`,
    6201: `3619`,
    6202: `3619`,
    6203: `3620`,
    6204: `3621`,
    6205: `3623`,
    6206: `3624`,
    6207: `3624`,
    6208: `3625`,
    6209: `3625`,
    621: `151`,
    6210: `3625`,
    6211: `3626`,
    6212: `3627`,
    6213: `3627`,
    6214: `3628`,
    6215: `3629`,
    6216: `3629`,
    6217: `3630`,
    6218: `3630`,
    6219: `3630`,
    622: `151`,
    6220: `3631`,
    6221: `3632`,
    6222: `3632`,
    6223: `3633`,
    6224: `3634`,
    6225: `3634`,
    6226: `3635`,
    6227: `3636`,
    6228: `3636`,
    6229: `3637`,
    623: `151`,
    6230: `3638`,
    6231: `3638`,
    6232: `3639`,
    6233: `3639`,
    6234: `3640`,
    6235: `3641`,
    6236: `3642`,
    6237: `3643`,
    6238: `3643`,
    6239: `3644`,
    624: `152`,
    6240: `3644`,
    6241: `3645`,
    6242: `3646`,
    6243: `3647`,
    6244: `3648`,
    6245: `3648`,
    6246: `3649`,
    6247: `3649`,
    6248: `3650`,
    6249: `3651`,
    625: `152`,
    6250: `3652`,
    6251: `3653`,
    6252: `3653`,
    6253: `3654`,
    6254: `3654`,
    6255: `3655`,
    6256: `3656`,
    6257: `3657`,
    6258: `3658`,
    6259: `3658`,
    626: `152`,
    6260: `3659`,
    6261: `3659`,
    6262: `3660`,
    6263: `3661`,
    6264: `3662`,
    6265: `3663`,
    6266: `3663`,
    6267: `3664`,
    6268: `3664`,
    6269: `3665`,
    627: `153`,
    6270: `3665`,
    6271: `3666`,
    6272: `3667`,
    6273: `3667`,
    6274: `3668`,
    6275: `3669`,
    6276: `3669`,
    6277: `3670`,
    6278: `3671`,
    6279: `3671`,
    628: `153`,
    6280: `3672`,
    6281: `3672`,
    6282: `3673`,
    6283: `3673`,
    6284: `3674`,
    6285: `3674`,
    6286: `3674`,
    6287: `3676`,
    6288: `3676`,
    6289: `3677`,
    629: `153`,
    6290: `3677`,
    6291: `3678`,
    6292: `3679`,
    6293: `3679`,
    6294: `3679`,
    6295: `3680`,
    6296: `3680`,
    6297: `3681`,
    6298: `3681`,
    6299: `3681`,
    63: `2`,
    630: `155`,
    6300: `3682`,
    6301: `3683`,
    6302: `3683`,
    6303: `3683`,
    6304: `3684`,
    6305: `3684`,
    6306: `3685`,
    6307: `3685`,
    6308: `3686`,
    6309: `3686`,
    631: `156`,
    6310: `3687`,
    6311: `3688`,
    6312: `3688`,
    6313: `3688`,
    6314: `3689`,
    6315: `3689`,
    6316: `3690`,
    6317: `3690`,
    6318: `3690`,
    6319: `3691`,
    632: `156`,
    6320: `3692`,
    6321: `3692`,
    6322: `3692`,
    6323: `3693`,
    6324: `3694`,
    6325: `3694`,
    6326: `3695`,
    6327: `3695`,
    6328: `3696`,
    6329: `3697`,
    633: `157`,
    6330: `3697`,
    6331: `3698`,
    6332: `3699`,
    6333: `3700`,
    6334: `3700`,
    6335: `3701`,
    6336: `3701`,
    6337: `3701`,
    6338: `3703`,
    6339: `3703`,
    634: `157`,
    6340: `3704`,
    6341: `3704`,
    6342: `3704`,
    6343: `3705`,
    6344: `3706`,
    6345: `3706`,
    6346: `3707`,
    6347: `3707`,
    6348: `3707`,
    6349: `3708`,
    635: `158`,
    6350: `3708`,
    6351: `3709`,
    6352: `3709`,
    6353: `3710`,
    6354: `3710`,
    6355: `3710`,
    6356: `3711`,
    6357: `3711`,
    6358: `3712`,
    6359: `3712`,
    636: `158`,
    6360: `3713`,
    6361: `3713`,
    6362: `3713`,
    6363: `3714`,
    6364: `3714`,
    6365: `3716`,
    6366: `3716`,
    6367: `3717`,
    6368: `3718`,
    6369: `3718`,
    637: `158`,
    6370: `3719`,
    6371: `3720`,
    6372: `3721`,
    6373: `3721`,
    6374: `3722`,
    6375: `3723`,
    6376: `3723`,
    6377: `3724`,
    6378: `3725`,
    6379: `3726`,
    638: `160`,
    6380: `3726`,
    6381: `3727`,
    6382: `3728`,
    6383: `3728`,
    6384: `3729`,
    6385: `3730`,
    6386: `3730`,
    6387: `3731`,
    6388: `3732`,
    6389: `3732`,
    639: `160`,
    6390: `3733`,
    6391: `3734`,
    6392: `3734`,
    6393: `3735`,
    6394: `3736`,
    6395: `3736`,
    6396: `3737`,
    6397: `3738`,
    6398: `3739`,
    6399: `3739`,
    64: `2`,
    640: `161`,
    6400: `3740`,
    6401: `3741`,
    6402: `3741`,
    6403: `3742`,
    6404: `3743`,
    6405: `3743`,
    6406: `3744`,
    6407: `3745`,
    6408: `3745`,
    6409: `3746`,
    641: `161`,
    6410: `3747`,
    6411: `3747`,
    6412: `3748`,
    6413: `3748`,
    6414: `3749`,
    6415: `3749`,
    6416: `3749`,
    6417: `3751`,
    6418: `3752`,
    6419: `3753`,
    642: `161`,
    6420: `3754`,
    6421: `3755`,
    6422: `3757`,
    6423: `3758`,
    6424: `3758`,
    6425: `3759`,
    6426: `3759`,
    6427: `3760`,
    6428: `3760`,
    6429: `3761`,
    643: `162`,
    6430: `3761`,
    6431: `3762`,
    6432: `3762`,
    6433: `3763`,
    6434: `3764`,
    6435: `3766`,
    6436: `3766`,
    6437: `3767`,
    6438: `3767`,
    6439: `3768`,
    644: `162`,
    6440: `3769`,
    6441: `3772`,
    6442: `3772`,
    6443: `3772`,
    6444: `3773`,
    6445: `3773`,
    6446: `3774`,
    6447: `3775`,
    6448: `3775`,
    6449: `3776`,
    645: `162`,
    6450: `3776`,
    6451: `3776`,
    6452: `3778`,
    6453: `3778`,
    6454: `3779`,
    6455: `3779`,
    6456: `3780`,
    6457: `3781`,
    6458: `3784`,
    6459: `3784`,
    646: `165`,
    6460: `3784`,
    6461: `3785`,
    6462: `3785`,
    6463: `3786`,
    6464: `3786`,
    6465: `3786`,
    6466: `3787`,
    6467: `3788`,
    6468: `3788`,
    6469: `3789`,
    647: `165`,
    6470: `3789`,
    6471: `3790`,
    6472: `3790`,
    6473: `3790`,
    6474: `3792`,
    6475: `3792`,
    6476: `3793`,
    6477: `3793`,
    6478: `3794`,
    6479: `3795`,
    648: `165`,
    6480: `3798`,
    6481: `3798`,
    6482: `3798`,
    6483: `3799`,
    6484: `3799`,
    6485: `3800`,
    6486: `3800`,
    6487: `3801`,
    6488: `3801`,
    6489: `3803`,
    649: `166`,
    6490: `3804`,
    6491: `3804`,
    6492: `3805`,
    6493: `3806`,
    6494: `3806`,
    6495: `3807`,
    6496: `3808`,
    6497: `3808`,
    6498: `3808`,
    6499: `3809`,
    65: `2`,
    650: `166`,
    6500: `3809`,
    6501: `3809`,
    6502: `3810`,
    6503: `3810`,
    6504: `3812`,
    6505: `3813`,
    6506: `3813`,
    6507: `3814`,
    6508: `3815`,
    6509: `3815`,
    651: `166`,
    6510: `3816`,
    6511: `3817`,
    6512: `3817`,
    6513: `3817`,
    6514: `3818`,
    6515: `3818`,
    6516: `3818`,
    6517: `3819`,
    6518: `3820`,
    6519: `3820`,
    652: `167`,
    6520: `3821`,
    6521: `3821`,
    6522: `3821`,
    6523: `3824`,
    6524: `3824`,
    6525: `3824`,
    6526: `3827`,
    6527: `3827`,
    6528: `3827`,
    6529: `3828`,
    653: `167`,
    6530: `3828`,
    6531: `3829`,
    6532: `3829`,
    6533: `3829`,
    6534: `3832`,
    6535: `3832`,
    6536: `3832`,
    6537: `3835`,
    6538: `3835`,
    6539: `3835`,
    654: `168`,
    6540: `3838`,
    6541: `3838`,
    6542: `3838`,
    6543: `3839`,
    6544: `3839`,
    6545: `3839`,
    6546: `3840`,
    6547: `3840`,
    6548: `3840`,
    6549: `3841`,
    655: `168`,
    6550: `3841`,
    6551: `3842`,
    6552: `3842`,
    6553: `3843`,
    6554: `3843`,
    6555: `3844`,
    6556: `3844`,
    6557: `3844`,
    6558: `3847`,
    6559: `3847`,
    656: `171`,
    6560: `3847`,
    6561: `3848`,
    6562: `3848`,
    6563: `3848`,
    6564: `3849`,
    6565: `3849`,
    6566: `3850`,
    6567: `3850`,
    6568: `3851`,
    6569: `3851`,
    657: `172`,
    6570: `3851`,
    6571: `3853`,
    6572: `3854`,
    6573: `3856`,
    6574: `3857`,
    6575: `3858`,
    6576: `3859`,
    6577: `3859`,
    6578: `3860`,
    6579: `3860`,
    658: `173`,
    6580: `3861`,
    6581: `3861`,
    6582: `3861`,
    6583: `3862`,
    6584: `3864`,
    6585: `3865`,
    6586: `3866`,
    6587: `3866`,
    6588: `3866`,
    6589: `3867`,
    659: `174`,
    6590: `3868`,
    6591: `3868`,
    6592: `3871`,
    6593: `3871`,
    6594: `3872`,
    6595: `3872`,
    6596: `3873`,
    6597: `3873`,
    6598: `3874`,
    6599: `3875`,
    66: `2`,
    660: `174`,
    6600: `3876`,
    6601: `3876`,
    6602: `3877`,
    6603: `3878`,
    6604: `3878`,
    6605: `3879`,
    6606: `3879`,
    6607: `3880`,
    6608: `3880`,
    6609: `3881`,
    661: `175`,
    6610: `3882`,
    6611: `3883`,
    6612: `3883`,
    6613: `3884`,
    6614: `3884`,
    6615: `3885`,
    6616: `3886`,
    6617: `3887`,
    6618: `3887`,
    6619: `3888`,
    662: `175`,
    6620: `3889`,
    6621: `3890`,
    6622: `3893`,
    6623: `3893`,
    6624: `3893`,
    6625: `3894`,
    6626: `3895`,
    6627: `3895`,
    6628: `3896`,
    6629: `3896`,
    663: `176`,
    6630: `3896`,
    6631: `3899`,
    6632: `3899`,
    6633: `3899`,
    6634: `3900`,
    6635: `3901`,
    6636: `3901`,
    6637: `3902`,
    6638: `3902`,
    6639: `3902`,
    664: `177`,
    6640: `3905`,
    6641: `3905`,
    6642: `3905`,
    6643: `3906`,
    6644: `3907`,
    6645: `3907`,
    6646: `3908`,
    6647: `3908`,
    6648: `3908`,
    6649: `3911`,
    665: `178`,
    6650: `3911`,
    6651: `3911`,
    6652: `3912`,
    6653: `3913`,
    6654: `3913`,
    6655: `3914`,
    6656: `3914`,
    6657: `3914`,
    6658: `3916`,
    6659: `3917`,
    666: `179`,
    6660: `3918`,
    6661: `3919`,
    6662: `3920`,
    6663: `3921`,
    6664: `3922`,
    6665: `3923`,
    6666: `3924`,
    6667: `3926`,
    6668: `3927`,
    6669: `3927`,
    667: `179`,
    6670: `3927`,
    6671: `3928`,
    6672: `3929`,
    6673: `3930`,
    6674: `3931`,
    6675: `3932`,
    6676: `3934`,
    6677: `3935`,
    6678: `3936`,
    6679: `3937`,
    668: `182`,
    6680: `3937`,
    6681: `3937`,
    6682: `3938`,
    6683: `3938`,
    6684: `3939`,
    6685: `3940`,
    6686: `3941`,
    6687: `3943`,
    6688: `3944`,
    6689: `3945`,
    669: `182`,
    6690: `3946`,
    6691: `3946`,
    6692: `3946`,
    6693: `3947`,
    6694: `3947`,
    6695: `3948`,
    6696: `3948`,
    6697: `3948`,
    6698: `3949`,
    6699: `3949`,
    67: `2`,
    670: `183`,
    6700: `3949`,
    6701: `3951`,
    6702: `3952`,
    6703: `3953`,
    6704: `3954`,
    6705: `3954`,
    6706: `3955`,
    6707: `3956`,
    6708: `3957`,
    6709: `3958`,
    671: `183`,
    6710: `3958`,
    6711: `3959`,
    6712: `3960`,
    6713: `3960`,
    6714: `3960`,
    6715: `3961`,
    6716: `3961`,
    6717: `3962`,
    6718: `3963`,
    6719: `3963`,
    672: `184`,
    6720: `3964`,
    6721: `3965`,
    6722: `3965`,
    6723: `3966`,
    6724: `3967`,
    6725: `3967`,
    6726: `3967`,
    6727: `3968`,
    6728: `3968`,
    6729: `3969`,
    673: `185`,
    6730: `3970`,
    6731: `3971`,
    6732: `3972`,
    6733: `3972`,
    6734: `3973`,
    6735: `3974`,
    6736: `3974`,
    6737: `3974`,
    6738: `3975`,
    6739: `3975`,
    674: `186`,
    6740: `3976`,
    6741: `3977`,
    6742: `3977`,
    6743: `3977`,
    6744: `3978`,
    6745: `3978`,
    6746: `3979`,
    6747: `3980`,
    6748: `3980`,
    6749: `3980`,
    675: `186`,
    6750: `3981`,
    6751: `3981`,
    6752: `3982`,
    6753: `3983`,
    6754: `3983`,
    6755: `3984`,
    6756: `3985`,
    6757: `3985`,
    6758: `3985`,
    6759: `3986`,
    676: `186`,
    6760: `3987`,
    6761: `3987`,
    6762: `3988`,
    6763: `3989`,
    6764: `3989`,
    6765: `3989`,
    6766: `3990`,
    6767: `3990`,
    6768: `3991`,
    6769: `3992`,
    677: `187`,
    6770: `3992`,
    6771: `3993`,
    6772: `3994`,
    6773: `3994`,
    6774: `3994`,
    6775: `3995`,
    6776: `3996`,
    6777: `3997`,
    6778: `3997`,
    6779: `3998`,
    678: `187`,
    6780: `3999`,
    6781: `3999`,
    6782: `3999`,
    6783: `4000`,
    6784: `4001`,
    6785: `4002`,
    6786: `4002`,
    6787: `4003`,
    6788: `4003`,
    6789: `4003`,
    679: `188`,
    6790: `4004`,
    6791: `4004`,
    6792: `4005`,
    6793: `4006`,
    6794: `4006`,
    6795: `4007`,
    6796: `4009`,
    6797: `4010`,
    6798: `4010`,
    6799: `4010`,
    68: `2`,
    680: `189`,
    6800: `4011`,
    6801: `4011`,
    6802: `4012`,
    6803: `4013`,
    6804: `4013`,
    6805: `4014`,
    6806: `4015`,
    6807: `4015`,
    6808: `4016`,
    6809: `4016`,
    681: `190`,
    6810: `4017`,
    6811: `4017`,
    6812: `4018`,
    6813: `4019`,
    6814: `4019`,
    6815: `4020`,
    6816: `4022`,
    6817: `4023`,
    6818: `4024`,
    6819: `4024`,
    682: `190`,
    6820: `4025`,
    6821: `4025`,
    6822: `4026`,
    6823: `4026`,
    6824: `4027`,
    6825: `4027`,
    6826: `4028`,
    6827: `4028`,
    6828: `4029`,
    6829: `4030`,
    683: `191`,
    6830: `4032`,
    6831: `4032`,
    6832: `4033`,
    6833: `4033`,
    6834: `4034`,
    6835: `4036`,
    6836: `4037`,
    6837: `4037`,
    6838: `4037`,
    6839: `4039`,
    684: `191`,
    6840: `4040`,
    6841: `4041`,
    6842: `4042`,
    6843: `4043`,
    6844: `4043`,
    6845: `4044`,
    6846: `4045`,
    6847: `4046`,
    6848: `4047`,
    6849: `4049`,
    685: `192`,
    6850: `4049`,
    6851: `4050`,
    6852: `4050`,
    6853: `4051`,
    6854: `4052`,
    6855: `4053`,
    6856: `4053`,
    6857: `4053`,
    6858: `4054`,
    6859: `4054`,
    686: `192`,
    6860: `4054`,
    6861: `4056`,
    6862: `4056`,
    6863: `4057`,
    6864: `4058`,
    6865: `4058`,
    6866: `4059`,
    6867: `4061`,
    6868: `4061`,
    6869: `4062`,
    687: `192`,
    6870: `4063`,
    6871: `4063`,
    6872: `4064`,
    6873: `4066`,
    6874: `4067`,
    6875: `4067`,
    6876: `4068`,
    688: `193`,
    689: `193`,
    69: `2`,
    690: `194`,
    691: `194`,
    692: `194`,
    693: `194`,
    694: `194`,
    695: `194`,
    696: `195`,
    697: `195`,
    698: `196`,
    699: `197`,
    7: `2`,
    70: `2`,
    700: `198`,
    701: `198`,
    702: `199`,
    703: `200`,
    704: `202`,
    705: `202`,
    706: `203`,
    707: `203`,
    708: `203`,
    709: `204`,
    71: `2`,
    710: `204`,
    711: `205`,
    712: `206`,
    713: `207`,
    714: `207`,
    715: `207`,
    716: `207`,
    717: `207`,
    718: `207`,
    719: `207`,
    72: `2`,
    720: `207`,
    721: `207`,
    722: `207`,
    723: `207`,
    724: `207`,
    725: `207`,
    726: `207`,
    727: `207`,
    728: `207`,
    729: `207`,
    73: `2`,
    730: `207`,
    731: `207`,
    732: `207`,
    733: `207`,
    734: `207`,
    735: `207`,
    736: `207`,
    737: `207`,
    738: `207`,
    739: `207`,
    74: `2`,
    740: `207`,
    741: `207`,
    742: `207`,
    743: `208`,
    744: `208`,
    745: `208`,
    746: `211`,
    747: `211`,
    748: `211`,
    749: `212`,
    75: `2`,
    750: `212`,
    751: `215`,
    752: `216`,
    753: `217`,
    754: `218`,
    755: `218`,
    756: `219`,
    757: `220`,
    758: `220`,
    759: `221`,
    76: `2`,
    760: `222`,
    761: `223`,
    762: `224`,
    763: `224`,
    764: `225`,
    765: `225`,
    766: `225`,
    767: `228`,
    768: `228`,
    769: `228`,
    77: `2`,
    770: `229`,
    771: `229`,
    772: `232`,
    773: `233`,
    774: `234`,
    775: `235`,
    776: `235`,
    777: `236`,
    778: `237`,
    779: `237`,
    78: `2`,
    780: `238`,
    781: `239`,
    782: `240`,
    783: `241`,
    784: `241`,
    785: `242`,
    786: `242`,
    787: `242`,
    788: `245`,
    789: `245`,
    79: `2`,
    790: `245`,
    791: `246`,
    792: `246`,
    793: `246`,
    794: `247`,
    795: `247`,
    796: `248`,
    797: `248`,
    798: `251`,
    799: `252`,
    8: `2`,
    80: `2`,
    800: `253`,
    801: `253`,
    802: `254`,
    803: `254`,
    804: `255`,
    805: `255`,
    806: `256`,
    807: `257`,
    808: `258`,
    809: `258`,
    81: `2`,
    810: `259`,
    811: `260`,
    812: `261`,
    813: `262`,
    814: `262`,
    815: `263`,
    816: `263`,
    817: `263`,
    818: `266`,
    819: `266`,
    82: `2`,
    820: `266`,
    821: `267`,
    822: `267`,
    823: `270`,
    824: `271`,
    825: `272`,
    826: `272`,
    827: `273`,
    828: `273`,
    829: `274`,
    83: `2`,
    830: `275`,
    831: `275`,
    832: `276`,
    833: `277`,
    834: `278`,
    835: `279`,
    836: `279`,
    837: `280`,
    838: `280`,
    839: `280`,
    84: `2`,
    840: `283`,
    841: `283`,
    842: `283`,
    843: `284`,
    844: `284`,
    845: `287`,
    846: `288`,
    847: `289`,
    848: `289`,
    849: `290`,
    85: `2`,
    850: `290`,
    851: `291`,
    852: `292`,
    853: `292`,
    854: `293`,
    855: `294`,
    856: `295`,
    857: `296`,
    858: `296`,
    859: `297`,
    86: `2`,
    860: `297`,
    861: `297`,
    862: `300`,
    863: `300`,
    864: `300`,
    865: `301`,
    866: `301`,
    867: `301`,
    868: `302`,
    869: `302`,
    87: `2`,
    870: `303`,
    871: `303`,
    872: `306`,
    873: `307`,
    874: `308`,
    875: `308`,
    876: `309`,
    877: `309`,
    878: `310`,
    879: `310`,
    88: `2`,
    880: `311`,
    881: `312`,
    882: `313`,
    883: `313`,
    884: `314`,
    885: `315`,
    886: `316`,
    887: `317`,
    888: `317`,
    889: `318`,
    89: `2`,
    890: `318`,
    891: `318`,
    892: `321`,
    893: `321`,
    894: `321`,
    895: `322`,
    896: `322`,
    897: `322`,
    898: `323`,
    899: `323`,
    9: `2`,
    90: `2`,
    900: `324`,
    901: `324`,
    902: `327`,
    903: `328`,
    904: `329`,
    905: `329`,
    906: `330`,
    907: `330`,
    908: `331`,
    909: `331`,
    91: `2`,
    910: `332`,
    911: `333`,
    912: `334`,
    913: `334`,
    914: `335`,
    915: `336`,
    916: `337`,
    917: `338`,
    918: `338`,
    919: `339`,
    92: `2`,
    920: `339`,
    921: `339`,
    922: `342`,
    923: `342`,
    924: `342`,
    925: `343`,
    926: `343`,
    927: `343`,
    928: `344`,
    929: `344`,
    93: `2`,
    930: `345`,
    931: `345`,
    932: `348`,
    933: `349`,
    934: `350`,
    935: `350`,
    936: `350`,
    937: `351`,
    938: `351`,
    939: `352`,
    94: `2`,
    940: `352`,
    941: `353`,
    942: `354`,
    943: `355`,
    944: `355`,
    945: `356`,
    946: `357`,
    947: `358`,
    948: `359`,
    949: `359`,
    95: `2`,
    950: `360`,
    951: `360`,
    952: `360`,
    953: `363`,
    954: `363`,
    955: `363`,
    956: `364`,
    957: `364`,
    958: `364`,
    959: `365`,
    96: `2`,
    960: `365`,
    961: `366`,
    962: `366`,
    963: `369`,
    964: `370`,
    965: `371`,
    966: `371`,
    967: `371`,
    968: `372`,
    969: `372`,
    97: `2`,
    970: `373`,
    971: `373`,
    972: `374`,
    973: `375`,
    974: `376`,
    975: `376`,
    976: `377`,
    977: `378`,
    978: `379`,
    979: `380`,
    98: `2`,
    980: `380`,
    981: `381`,
    982: `381`,
    983: `381`,
    984: `384`,
    985: `384`,
    986: `384`,
    987: `385`,
    988: `385`,
    989: `385`,
    99: `2`,
    990: `386`,
    991: `386`,
    992: `387`,
    993: `387`,
    994: `390`,
    995: `391`,
    996: `392`,
    997: `392`,
    998: `392`,
    999: `393`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Protocol_harvest3: 1,
    _api_Provider_deposit3: 1,
    _api_Provider_withdraw3: 1,
    _api_Trader_swapAForB3: 2,
    _api_Trader_swapBForA3: 2
    },
  extraPages: 3,
  stateKeys: 7,
  stateSize: 850,
  unsupported: [],
  version: 13,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:725:71:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:966:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:981:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:1322:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:1325:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:781:31:after expr stmt semicolon',
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
  "Provider_deposit": Provider_deposit,
  "Provider_depositA": Provider_depositA,
  "Provider_depositB": Provider_depositB,
  "Provider_withdraw": Provider_withdraw,
  "Provider_withdrawA": Provider_withdrawA,
  "Provider_withdrawB": Provider_withdrawB,
  "Trader_exactSwapAForB": Trader_exactSwapAForB,
  "Trader_exactSwapBForA": Trader_exactSwapBForA,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA,
  "approve": approve,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    deposit: Provider_deposit,
    depositA: Provider_depositA,
    depositB: Provider_depositB,
    withdraw: Provider_withdraw,
    withdrawA: Provider_withdrawA,
    withdrawB: Provider_withdrawB
    },
  Trader: {
    exactSwapAForB: Trader_exactSwapAForB,
    exactSwapBForA: Trader_exactSwapBForA,
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    },
  approve: approve,
  transfer: transfer,
  transferFrom: transferFrom
  };
