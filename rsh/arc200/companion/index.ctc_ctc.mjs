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
  const ctc8 = stdlib.T_Data({
    DepositEvent: ctc3,
    HarvestEvent: ctc6,
    SwapEvent: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2]);
  return {
    Event: [ctc8],
    WithdrawEvent: [ctc9],
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1]
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
      const [v4419, v4420, v4478] = svs;
      return (await ((async () => {
        
        const v18735 = v4478.lptBals;
        const v18736 = v4478.poolBals;
        const v18737 = v4478.protoInfo;
        const v18738 = v4478.protoBals;
        const v18739 = v4478.tokB;
        const v18740 = v4478.tokA;
        const v18741 = {
          lptBals: v18735,
          poolBals: v18736,
          protoBals: v18738,
          protoInfo: v18737,
          tokA: v18740,
          tokB: v18739
          };
        
        return v18741;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      return (await ((async () => {
        
        const v4566 = v4478.lptBals;
        const v4567 = v4478.poolBals;
        const v4568 = v4478.protoInfo;
        const v4569 = v4478.protoBals;
        const v4570 = v4478.tokB;
        const v4571 = v4478.tokA;
        const v4572 = {
          lptBals: v4566,
          poolBals: v4567,
          protoBals: v4569,
          protoInfo: v4568,
          tokA: v4571,
          tokB: v4570
          };
        
        return v4572;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      return (await ((async () => {
        
        
        return v4420;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      return (await ((async () => {
        
        
        return v4420;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      return (await ((async () => {
        
        const v4462 = v4419.name;
        
        return v4462;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      return (await ((async () => {
        
        const v4462 = v4419.name;
        
        return v4462;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      return (await ((async () => {
        
        const v4463 = v4419.symbol;
        
        return v4463;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      return (await ((async () => {
        
        const v4463 = v4419.symbol;
        
        return v4463;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _reserve = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      return (await ((async (_v18728 ) => {
          const v18728 = stdlib.protect(ctc7, _v18728, null);
        
        const v18729 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc7, v18728, ctc5), null);
        const v18730 = stdlib.fromSome(v18729, stdlib.checkedBigNumberify('./index.rsh:824:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18731 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc7, v18728, ctc5), null);
        const v18732 = stdlib.fromSome(v18731, stdlib.checkedBigNumberify('./index.rsh:825:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18733 = {
          A: v18730,
          B: v18732
          };
        
        return v18733;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      return (await ((async (_v4559 ) => {
          const v4559 = stdlib.protect(ctc7, _v4559, null);
        
        const v4560 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc7, v4559, ctc5), null);
        const v4561 = stdlib.fromSome(v4560, stdlib.checkedBigNumberify('./index.rsh:824:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4562 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc7, v4559, ctc5), null);
        const v4563 = stdlib.fromSome(v4562, stdlib.checkedBigNumberify('./index.rsh:825:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4564 = {
          A: v4561,
          B: v4563
          };
        
        return v4564;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v4419, v4420, v4478] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = svs;
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
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc7, ctc7],
        rng: ctc5
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc7],
        rng: ctc5
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc0
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc1
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc2
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc5
        },
      reserve: {
        decode: _reserve,
        dom: [ctc7],
        rng: ctc6
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
    Protocol_harvest0_471: ctc14,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc19,
    Trader_exactSwapBForA0_471: ctc19,
    Trader_swapAForB0_471: ctc19,
    Trader_swapBForA0_471: ctc19,
    arc200_approve0_471: ctc20,
    arc200_transfer0_471: ctc20,
    arc200_transferFrom0_471: ctc21
    });
  const ctc23 = stdlib.T_Tuple([ctc15, ctc3]);
  const ctc24 = stdlib.T_Tuple([ctc3, ctc11]);
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
  
  
  const v4377 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  const v4378 = v4377.meta;
  const v4379 = v4377.swap;
  const v4381 = v4378.decimals;
  const v4385 = v4379.tokA;
  const v4386 = v4379.tokB;
  
  const v4395 = stdlib.digest([ctc7], [v4385]);
  const v4396 = stdlib.digest([ctc7], [v4386]);
  const v4397 = stdlib.digestEq(v4395, v4396);
  const v4398 = v4397 ? false : true;
  stdlib.assert(v4398, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:736:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:749:17:application call to "checkInput" (defined at: ./index.rsh:734:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v4402 = stdlib.le(v4381, stdlib.checkedBigNumberify('./index.rsh:626:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v4402, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:737:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:749:17:application call to "checkInput" (defined at: ./index.rsh:734:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4377],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:748:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:748:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v4405], secs: v4407, time: v4406, didSend: v162, from: v4404 } = txn1;
      
      const v4410 = v4405.swap;
      const v4411 = v4410.tokA;
      const v4413 = v4410.tokB;
      const v4419 = v4405.meta;
      const v4420 = v4419.decimals;
      ;
      const v4423 = v4405.zeroAddress;
      const v4427 = v4410.proto;
      const v4429 = await ctc.getContractInfo();
      const v4432 = [];
      const v4433 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v4427,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:761:71:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:761:71:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
      const v4434 = await txn1.getOutput('internal', 'v4433', ctc13, v4433);
      const v4436 = v4434[stdlib.checkedBigNumberify('./index.rsh:761:71:application', stdlib.UInt_max, '0')];
      const v4437 = v4434[stdlib.checkedBigNumberify('./index.rsh:761:71:application', stdlib.UInt_max, '1')];
      const v4438 = v4437.protoFee;
      const v4439 = v4437.lpFee;
      const v4440 = v4437.totFee;
      const v4456 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc9, v4456, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc9, v4423, ctc1, stdlib.checkedBigNumberify('./index.rsh:788:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4458 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      
      const v4466 = v4419.name;
      const v4467 = v4419.symbol;
      const v4471 = v4437.protoAddr;
      const v4472 = v4437.locked;
      const v4473 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v4474 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v4476 = {
        locked: v4472,
        lpFee: v4439,
        protoAddr: v4471,
        protoFee: v4438,
        totFee: v4440
        };
      const v4477 = {
        closed: false,
        decimals: v4420,
        lptBals: v4473,
        name: v4466,
        poolBals: v4474,
        protoBals: v4474,
        protoInfo: v4476,
        symbol: v4467,
        tokA: v4411,
        tokB: v4413,
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        zeroAddress: v4423
        };
      const v4478 = v4477;
      const v4479 = v4406;
      const v4482 = v4436;
      
      if (await (async () => {
        const v4557 = v4478.closed;
        const v4558 = v4557 ? false : true;
        
        return v4558;})()) {
        const v4574 = v4478.lptBals;
        const v4575 = v4574.A;
        const v4576 = v4574.B;
        const v4579 = v4478.poolBals;
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
  const {data: [v4405], secs: v4407, time: v4406, didSend: v162, from: v4404 } = txn1;
  const v4410 = v4405.swap;
  const v4411 = v4410.tokA;
  const v4413 = v4410.tokB;
  const v4414 = stdlib.digest([ctc7], [v4411]);
  const v4415 = stdlib.digest([ctc7], [v4413]);
  const v4416 = stdlib.digestEq(v4414, v4415);
  const v4417 = v4416 ? false : true;
  stdlib.assert(v4417, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:736:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:749:17:application call to "checkInput" (defined at: ./index.rsh:734:28:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v4419 = v4405.meta;
  const v4420 = v4419.decimals;
  const v4421 = stdlib.le(v4420, stdlib.checkedBigNumberify('./index.rsh:626:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v4421, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:737:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:749:17:application call to "checkInput" (defined at: ./index.rsh:734:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  ;
  const v4423 = v4405.zeroAddress;
  const v4427 = v4410.proto;
  const v4429 = await ctc.getContractInfo();
  const v4432 = [];
  const v4433 = undefined /* Remote */;
  const v4434 = await txn1.getOutput('internal', 'v4433', ctc13, v4433);
  const v4436 = v4434[stdlib.checkedBigNumberify('./index.rsh:761:71:application', stdlib.UInt_max, '0')];
  const v4437 = v4434[stdlib.checkedBigNumberify('./index.rsh:761:71:application', stdlib.UInt_max, '1')];
  const v4438 = v4437.protoFee;
  const v4439 = v4437.lpFee;
  const v4440 = v4437.totFee;
  const v4441 = stdlib.lt256(v4438, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4442 = stdlib.lt256(v4439, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4443 = v4441 ? v4442 : false;
  let v4444;
  if (v4443) {
    const v4445 = stdlib.safeAdd256(v4439, v4438);
    const v4446 = stdlib.eq256(v4440, v4445);
    v4444 = v4446;
    }
  else {
    v4444 = false;
    }
  const v4447 = stdlib.lt256(v4440, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4448 = v4444 ? v4447 : false;
  const v4449 = stdlib.gt256(v4440, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4450 = v4448 ? v4449 : false;
  stdlib.assert(v4450, {
    at: './index.rsh:761:71:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v4455 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4436);
  stdlib.assert(v4455, {
    at: './index.rsh:761:71:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  const v4456 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc9, v4456, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc9, v4423, ctc1, stdlib.checkedBigNumberify('./index.rsh:788:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4458 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  stdlib.protect(ctc0, await interact.ready(v4429), {
    at: './index.rsh:801:21:application',
    fs: ['at ./index.rsh:801:21:application call to [unknown function] (defined at: ./index.rsh:801:21:function exp)', 'at ./index.rsh:801:21:application call to "liftedInteract" (defined at: ./index.rsh:801:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v4466 = v4419.name;
  const v4467 = v4419.symbol;
  const v4471 = v4437.protoAddr;
  const v4472 = v4437.locked;
  const v4473 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4474 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v4476 = {
    locked: v4472,
    lpFee: v4439,
    protoAddr: v4471,
    protoFee: v4438,
    totFee: v4440
    };
  const v4477 = {
    closed: false,
    decimals: v4420,
    lptBals: v4473,
    name: v4466,
    poolBals: v4474,
    protoBals: v4474,
    protoInfo: v4476,
    symbol: v4467,
    tokA: v4411,
    tokB: v4413,
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    zeroAddress: v4423
    };
  let v4478 = v4477;
  let v4479 = v4406;
  let v4482 = v4436;
  
  let txn2 = txn1;
  while (await (async () => {
    const v4557 = v4478.closed;
    const v4558 = v4557 ? false : true;
    
    return v4558;})()) {
    const v4574 = v4478.lptBals;
    const v4575 = v4574.A;
    const v4576 = v4574.B;
    const v4579 = v4478.poolBals;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc22],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn3;
    switch (v5173[0]) {
      case 'Protocol_harvest0_471': {
        const v5176 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v5195 = v5176[stdlib.checkedBigNumberify('./index.rsh:1038:12:spread', stdlib.UInt_max, '0')];
        const v5196 = v5176[stdlib.checkedBigNumberify('./index.rsh:1038:12:spread', stdlib.UInt_max, '1')];
        const v5198 = v4478.protoInfo;
        const v5199 = v5198.protoAddr;
        const v5200 = stdlib.addressEq(v5172, v5199);
        stdlib.assert(v5200, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1030:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1039:21:application call to "chkProtoAddr" (defined at: ./index.rsh:1029:42:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Deployer'
          });
        const v5202 = v5196.protoFee;
        const v5203 = v5196.lpFee;
        const v5204 = v5196.totFee;
        const v5205 = stdlib.lt256(v5202, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v5206 = stdlib.lt256(v5203, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v5207 = v5205 ? v5206 : false;
        let v5208;
        if (v5207) {
          const v5209 = stdlib.safeAdd256(v5203, v5202);
          const v5210 = stdlib.eq256(v5204, v5209);
          v5208 = v5210;
          }
        else {
          v5208 = false;
          }
        const v5211 = stdlib.lt256(v5204, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v5212 = v5208 ? v5211 : false;
        const v5213 = stdlib.gt256(v5204, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5214 = v5212 ? v5213 : false;
        stdlib.assert(v5214, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:336:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:16:application call to "chkFees" (defined at: ./index.rsh:336:21:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v5219 = (stdlib.le(await ctc.getBalance(), v4482) ? stdlib.checkedBigNumberify('./index.rsh:1043:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4482));
        const v5220 = stdlib.safeAdd(v5219, v4482);
        const v5224 = stdlib.sub(v5220, v5219);
        ;
        const v5225 = v4478.protoBals;
        const v5226 = v5225.A;
        const v5227 = v5225.B;
        const v5228 = {
          A: v5226,
          B: v5227
          };
        const v5229 = [v5228, v5219];
        await txn3.getOutput('Protocol_harvest', 'v5229', ctc23, v5229);
        const v5254 = v4478.tokA;
        const v5258 = [v5254, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v5259 = [v5254, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5195];
        const v5263 = undefined /* Remote */;
        const v5264 = await txn3.getOutput('internal', 'v5263', ctc24, v5263);
        const v5266 = v5264[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
        const v5271 = stdlib.add(v5224, v5266);
        const v5272 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5266);
        stdlib.assert(v5272, {
          at: './index.rsh:1009:15:application',
          fs: ['at ./index.rsh:1046:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v5273 = v4478.tokB;
        const v5277 = [v5273, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v5278 = [v5273, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5195];
        const v5282 = undefined /* Remote */;
        const v5283 = await txn3.getOutput('internal', 'v5282', ctc24, v5282);
        const v5285 = v5283[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
        const v5290 = stdlib.add(v5271, v5285);
        const v5291 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5285);
        stdlib.assert(v5291, {
          at: './index.rsh:1009:15:application',
          fs: ['at ./index.rsh:1047:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v5295 = v5196.protoAddr;
        const v5296 = v5196.locked;
        const v5297 = {
          locked: v5296,
          lpFee: v5203,
          protoAddr: v5295,
          protoFee: v5202,
          totFee: v5204
          };
        const v5298 = [v5297];
        const v5299 = ['HarvestEvent', v5298];
        null;
        const v5300 = v4478.closed;
        const v5301 = v4478.decimals;
        const v5303 = v4478.name;
        const v5307 = v4478.symbol;
        const v5310 = v4478.totalSupply;
        const v5311 = v4478.zeroAddress;
        const v5313 = {
          closed: v5300,
          decimals: v5301,
          lptBals: v4574,
          name: v5303,
          poolBals: v4579,
          protoBals: v4474,
          protoInfo: v5196,
          symbol: v5307,
          tokA: v5254,
          tokB: v5273,
          totalSupply: v5310,
          zeroAddress: v5311
          };
        const cv4478 = v5313;
        const cv4479 = v5174;
        const cv4482 = v5290;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_471': {
        const v6144 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v6286 = v6144[stdlib.checkedBigNumberify('./index.rsh:1139:12:spread', stdlib.UInt_max, '0')];
        const v6287 = v6144[stdlib.checkedBigNumberify('./index.rsh:1139:12:spread', stdlib.UInt_max, '1')];
        const v6288 = v4478.protoInfo;
        const v6289 = v6288.locked;
        const v6290 = v6289 ? false : true;
        stdlib.assert(v6290, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1140:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v6292 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5172, ctc1), null);
        const v6293 = stdlib.fromSome(v6292, stdlib.checkedBigNumberify('./index.rsh:1141:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6294 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5172, ctc1), null);
        const v6295 = stdlib.fromSome(v6294, stdlib.checkedBigNumberify('./index.rsh:1142:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6296 = v6286.A;
        const v6297 = stdlib.ge256(v6293, v6296);
        stdlib.assert(v6297, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1143:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
          msg: 'inBals A balance insufficient',
          who: 'Deployer'
          });
        const v6299 = v6286.B;
        const v6300 = stdlib.ge256(v6295, v6299);
        stdlib.assert(v6300, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1144:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
          msg: 'inBals B balance insufficient',
          who: 'Deployer'
          });
        let v6302;
        const v6308 = stdlib.eq256(v4576, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v6308) {
          const v6309 = stdlib.safeMul256(v6296, v6299);
          const v6310 = stdlib.sqrt256(v6309);
          v6302 = v6310;
          }
        else {
          const v6311 = v4579.A;
          const v6312 = v4579.B;
          const v6316 = stdlib.safeMul256(v6296, v4576);
          const v6317 = stdlib.safeDiv256(v6316, v6311);
          const v6321 = stdlib.safeMul256(v6299, v4576);
          const v6322 = stdlib.safeDiv256(v6321, v6312);
          const v6323 = stdlib.lt256(v6317, v6322);
          const v6324 = v6323 ? v6317 : v6322;
          v6302 = v6324;
          }
        const v6325 = stdlib.le256(v6287, v6302);
        stdlib.assert(v6325, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v6329 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4456, ctc1), null);
        const v6330 = stdlib.fromSome(v6329, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6331 = stdlib.ge256(v6330, v6302);
        stdlib.assert(v6331, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:885:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1147:22:application call to "checkTransfer" (defined at: ./index.rsh:884:52:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v6336 = stdlib.safeSub256(v6293, v6296);
        await stdlib.mapSet(map2, ctc9, v5172, ctc1, v6336);
        const v6338 = stdlib.safeSub256(v6295, v6299);
        await stdlib.mapSet(map3, ctc9, v5172, ctc1, v6338);
        const v6342 = stdlib.safeSub256(v6330, v6302);
        await stdlib.mapSet(map0, ctc9, v4456, ctc1, v6342);
        const v6343 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5172, ctc1), null);
        const v6344 = stdlib.fromSome(v6343, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6345 = stdlib.safeAdd256(v6344, v6302);
        await stdlib.mapSet(map0, ctc9, v5172, ctc1, v6345);
        null;
        await txn3.getOutput('Provider_deposit', 'v6302', ctc1, v6302);
        const v6356 = v4478.closed;
        const v6357 = v4478.decimals;
        const v6359 = v4478.name;
        const v6361 = v4478.protoBals;
        const v6363 = v4478.symbol;
        const v6364 = v4478.tokA;
        const v6365 = v4478.tokB;
        const v6366 = v4478.totalSupply;
        const v6367 = v4478.zeroAddress;
        const v6369 = v4579.A;
        const v6374 = stdlib.safeAdd256(v6369, v6296);
        const v6375 = v4579.B;
        const v6380 = stdlib.safeAdd256(v6375, v6299);
        const v6389 = stdlib.safeSub256(v4575, v6302);
        const v6393 = stdlib.safeAdd256(v4576, v6302);
        const v6396 = {
          A: v6389,
          B: v6393
          };
        const v6397 = {
          A: v6374,
          B: v6380
          };
        const v6398 = {
          closed: v6356,
          decimals: v6357,
          lptBals: v6396,
          name: v6359,
          poolBals: v6397,
          protoBals: v6361,
          protoInfo: v6288,
          symbol: v6363,
          tokA: v6364,
          tokB: v6365,
          totalSupply: v6366,
          zeroAddress: v6367
          };
        const cv4478 = v6398;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositA0_471': {
        const v7112 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v7372 = v7112[stdlib.checkedBigNumberify('./index.rsh:1111:12:spread', stdlib.UInt_max, '0')];
        const v7373 = v4478.protoInfo;
        const v7374 = v7373.locked;
        const v7375 = v7374 ? false : true;
        stdlib.assert(v7375, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1112:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v7380 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
        const v7381 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v7382 = [v5172, v4456];
        const v7383 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7382];
        const v7387 = undefined /* Remote */;
        const v7388 = await txn3.getOutput('internal', 'v7387', ctc24, v7387);
        const v7390 = v7388[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
        const v7395 = stdlib.add(v4482, v7390);
        const v7396 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7390);
        stdlib.assert(v7396, {
          at: './index.rsh:1024:15:application',
          fs: ['at ./index.rsh:1115:37:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v7397 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5172, ctc1), null);
        const v7398 = stdlib.fromSome(v7397, stdlib.checkedBigNumberify('./index.rsh:1116:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v7399 = stdlib.safeAdd256(v7398, v7372);
        await stdlib.mapSet(map2, ctc9, v5172, ctc1, v7399);
        await txn3.getOutput('Provider_depositA', 'v7399', ctc1, v7399);
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v7395;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_depositB0_471': {
        const v8080 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v8376 = v8080[stdlib.checkedBigNumberify('./index.rsh:1125:12:spread', stdlib.UInt_max, '0')];
        const v8377 = v4478.protoInfo;
        const v8378 = v8377.locked;
        const v8379 = v8378 ? false : true;
        stdlib.assert(v8379, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1128:15:application call to [unknown function] (defined at: ./index.rsh:1128:15:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v8384 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
        const v8385 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v8386 = [v5172, v4456];
        const v8387 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v8386];
        const v8391 = undefined /* Remote */;
        const v8392 = await txn3.getOutput('internal', 'v8391', ctc24, v8391);
        const v8394 = v8392[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
        const v8399 = stdlib.add(v4482, v8394);
        const v8400 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8394);
        stdlib.assert(v8400, {
          at: './index.rsh:1024:15:application',
          fs: ['at ./index.rsh:1129:37:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1128:15:application call to [unknown function] (defined at: ./index.rsh:1128:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v8401 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5172, ctc1), null);
        const v8402 = stdlib.fromSome(v8401, stdlib.checkedBigNumberify('./index.rsh:1130:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v8403 = stdlib.safeAdd256(v8402, v8376);
        await stdlib.mapSet(map3, ctc9, v5172, ctc1, v8403);
        await txn3.getOutput('Provider_depositB', 'v8403', ctc1, v8403);
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v8399;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_471': {
        const v9048 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v9380 = v9048[stdlib.checkedBigNumberify('./index.rsh:1214:12:spread', stdlib.UInt_max, '0')];
        const v9381 = v9048[stdlib.checkedBigNumberify('./index.rsh:1214:12:spread', stdlib.UInt_max, '1')];
        const v9382 = v9381.A;
        const v9383 = v9381.B;
        const v9385 = v4579.A;
        const v9386 = v4579.B;
        const v9390 = stdlib.safeMul256(v9380, v9385);
        const v9391 = stdlib.safeDiv256(v9390, v4576);
        const v9395 = stdlib.safeMul256(v9380, v9386);
        const v9396 = stdlib.safeDiv256(v9395, v4576);
        const v9398 = stdlib.le256(v9382, v9391);
        stdlib.assert(v9398, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1218:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage A',
          who: 'Deployer'
          });
        const v9400 = stdlib.le256(v9383, v9396);
        stdlib.assert(v9400, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1219:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage B',
          who: 'Deployer'
          });
        const v9405 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5172, ctc1), null);
        const v9406 = stdlib.fromSome(v9405, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9407 = stdlib.ge256(v9406, v9380);
        stdlib.assert(v9407, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:899:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1220:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v9409 = [v5172, v4456];
        const v9410 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc25, v9409, ctc1), null);
        const v9411 = stdlib.fromSome(v9410, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9412 = stdlib.ge256(v9411, v9380);
        stdlib.assert(v9412, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:903:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1220:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v9420 = stdlib.safeSub256(v9406, v9380);
        await stdlib.mapSet(map0, ctc9, v5172, ctc1, v9420);
        const v9421 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v4456, ctc1), null);
        const v9422 = stdlib.fromSome(v9421, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9423 = stdlib.safeAdd256(v9422, v9380);
        await stdlib.mapSet(map0, ctc9, v4456, ctc1, v9423);
        null;
        const v9428 = stdlib.safeSub256(v9411, v9380);
        await stdlib.mapSet(map1, ctc25, v9409, ctc1, v9428);
        null;
        const v9431 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5172, ctc1), null);
        const v9432 = stdlib.fromSome(v9431, stdlib.checkedBigNumberify('./index.rsh:1224:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9433 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5172, ctc1), null);
        const v9434 = stdlib.fromSome(v9433, stdlib.checkedBigNumberify('./index.rsh:1225:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9435 = stdlib.safeAdd256(v9432, v9391);
        await stdlib.mapSet(map2, ctc9, v5172, ctc1, v9435);
        const v9436 = stdlib.safeAdd256(v9434, v9396);
        await stdlib.mapSet(map3, ctc9, v5172, ctc1, v9436);
        const v9437 = {
          A: v9391,
          B: v9396
          };
        await txn3.getOutput('Provider_withdraw', 'v9437', ctc15, v9437);
        const v9457 = stdlib.safeAdd256(v4575, v9380);
        const v9460 = stdlib.safeSub256(v4576, v9380);
        const v9467 = stdlib.safeSub256(v9385, v9391);
        const v9471 = stdlib.safeSub256(v9386, v9396);
        const v9474 = [v5172, v9437];
        null;
        const v9475 = v4478.closed;
        const v9476 = v4478.decimals;
        const v9478 = v4478.name;
        const v9480 = v4478.protoBals;
        const v9481 = v4478.protoInfo;
        const v9482 = v4478.symbol;
        const v9483 = v4478.tokA;
        const v9484 = v4478.tokB;
        const v9485 = v4478.totalSupply;
        const v9486 = v4478.zeroAddress;
        const v9487 = {
          A: v9457,
          B: v9460
          };
        const v9488 = {
          A: v9467,
          B: v9471
          };
        const v9489 = {
          closed: v9475,
          decimals: v9476,
          lptBals: v9487,
          name: v9478,
          poolBals: v9488,
          protoBals: v9480,
          protoInfo: v9481,
          symbol: v9482,
          tokA: v9483,
          tokB: v9484,
          totalSupply: v9485,
          zeroAddress: v9486
          };
        const cv4478 = v9489;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawA0_471': {
        const v10016 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v10463 = v10016[stdlib.checkedBigNumberify('./index.rsh:1178:12:spread', stdlib.UInt_max, '0')];
        const v10464 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5172, ctc1), null);
        const v10465 = stdlib.fromSome(v10464, stdlib.checkedBigNumberify('./index.rsh:1179:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v10466 = stdlib.ge256(v10465, v10463);
        stdlib.assert(v10466, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1180:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1182:15:application call to [unknown function] (defined at: ./index.rsh:1182:15:function exp)'],
          msg: 'Reserve A balances insufficient',
          who: 'Deployer'
          });
        const v10469 = stdlib.safeSub256(v10465, v10463);
        await stdlib.mapSet(map2, ctc9, v5172, ctc1, v10469);
        await txn3.getOutput('Provider_withdrawA', 'v10469', ctc1, v10469);
        const v10477 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v10478 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
        const v10482 = undefined /* Remote */;
        const v10483 = await txn3.getOutput('internal', 'v10482', ctc24, v10482);
        const v10485 = v10483[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
        const v10490 = stdlib.add(v4482, v10485);
        const v10491 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10485);
        stdlib.assert(v10491, {
          at: './index.rsh:1009:15:application',
          fs: ['at ./index.rsh:1186:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1182:15:application call to [unknown function] (defined at: ./index.rsh:1182:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v10490;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdrawB0_471': {
        const v10984 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v11462 = v10984[stdlib.checkedBigNumberify('./index.rsh:1196:12:spread', stdlib.UInt_max, '0')];
        const v11463 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5172, ctc1), null);
        const v11464 = stdlib.fromSome(v11463, stdlib.checkedBigNumberify('./index.rsh:1197:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11465 = stdlib.ge256(v11464, v11462);
        stdlib.assert(v11465, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1198:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1200:15:application call to [unknown function] (defined at: ./index.rsh:1200:15:function exp)'],
          msg: 'Reserve B balances insufficient',
          who: 'Deployer'
          });
        const v11468 = stdlib.safeSub256(v11464, v11462);
        await stdlib.mapSet(map3, ctc9, v5172, ctc1, v11468);
        await txn3.getOutput('Provider_withdrawB', 'v11468', ctc1, v11468);
        const v11476 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v11477 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
        const v11481 = undefined /* Remote */;
        const v11482 = await txn3.getOutput('internal', 'v11481', ctc24, v11481);
        const v11484 = v11482[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
        const v11489 = stdlib.add(v4482, v11484);
        const v11490 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11484);
        stdlib.assert(v11490, {
          at: './index.rsh:1009:15:application',
          fs: ['at ./index.rsh:1204:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1200:15:application call to [unknown function] (defined at: ./index.rsh:1200:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v11489;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_471': {
        const v11952 = v5173[1];
        undefined /* setApiDetails */;
        ;
        await txn3.getOutput('Trader_exactSwapAForB', 'v4474', ctc15, v4474);
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_471': {
        const v12920 = v5173[1];
        undefined /* setApiDetails */;
        ;
        await txn3.getOutput('Trader_exactSwapBForA', 'v4474', ctc15, v4474);
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_471': {
        const v13888 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v14429 = v13888[stdlib.checkedBigNumberify('./index.rsh:1383:12:spread', stdlib.UInt_max, '0')];
        const v14430 = v13888[stdlib.checkedBigNumberify('./index.rsh:1383:12:spread', stdlib.UInt_max, '1')];
        const v14434 = v4478.protoInfo;
        const v14436 = v4579.A;
        const v14437 = v4579.B;
        const v14438 = v14434.protoFee;
        const v14439 = v14434.totFee;
        const v14440 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14439);
        const v14441 = stdlib.safeMul256(v14429, v14440);
        const v14442 = stdlib.safeMul256(v14436, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v14443 = stdlib.safeAdd256(v14442, v14441);
        const v14444 = stdlib.safeMul256(v14441, v14437);
        const v14445 = stdlib.safeDiv256(v14444, v14443);
        const v14449 = stdlib.safeMul256(v14438, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v14450 = stdlib.safeDiv256(v14449, v14439);
        const v14454 = stdlib.safeAdd256(v14436, v14429);
        const v14458 = stdlib.safeMul256(v14429, v14437);
        const v14459 = stdlib.safeDiv256(v14458, v14454);
        const v14460 = stdlib.safeSub256(v14459, v14445);
        const v14462 = stdlib.safeMul256(v14460, v14450);
        const v14463 = stdlib.safeDiv256(v14462, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v14464 = stdlib.safeMul256(v14429, v14438);
        const v14465 = stdlib.safeDiv256(v14464, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v14469 = stdlib.safeMul256(v14465, v14437);
        const v14470 = stdlib.safeDiv256(v14469, v14454);
        const v14471 = stdlib.gt256(v14470, v14463);
        const v14472 = [v14465, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v14473 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14463];
        const v14474 = v14471 ? v14472 : v14473;
        const v14476 = v14474[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '0')];
        const v14477 = v14474[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '1')];
        const v14482 = v14434.locked;
        const v14483 = v14482 ? false : true;
        stdlib.assert(v14483, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1265:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v14500 = stdlib.safeSub256(v14437, v14445);
        const v14504 = stdlib.safeSub256(v14454, v14476);
        const v14507 = stdlib.safeSub256(v14500, v14477);
        const v14509 = v4478.protoBals;
        const v14510 = v14509.A;
        const v14514 = stdlib.safeAdd256(v14510, v14476);
        const v14515 = v14509.B;
        const v14519 = stdlib.safeAdd256(v14515, v14477);
        const v14521 = stdlib.le256(v14430, v14445);
        stdlib.assert(v14521, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1284:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v14526 = stdlib.safeMul256(v14436, v14437);
        const v14527 = stdlib.safeMul256(v14504, v14507);
        const v14528 = stdlib.ge256(v14527, v14526);
        stdlib.assert(v14528, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1294:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v14537 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
        const v14538 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v14539 = [v5172, v4456];
        const v14540 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v14539];
        const v14544 = undefined /* Remote */;
        const v14545 = await txn3.getOutput('internal', 'v14544', ctc24, v14544);
        const v14547 = v14545[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
        const v14552 = stdlib.add(v4482, v14547);
        const v14553 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14547);
        stdlib.assert(v14553, {
          at: './index.rsh:1024:15:application',
          fs: ['at ./index.rsh:1332:39:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1385:25:application call to "c" (defined at: ./index.rsh:1329:22:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v14554 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5172, ctc1), null);
        const v14555 = stdlib.fromSome(v14554, stdlib.checkedBigNumberify('./index.rsh:1334:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v14556 = stdlib.safeAdd256(v14555, v14445);
        await stdlib.mapSet(map3, ctc9, v5172, ctc1, v14556);
        const v14557 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5172, ctc1), null);
        const v14558 = stdlib.fromSome(v14557, stdlib.checkedBigNumberify('./index.rsh:1336:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map2, ctc9, v5172, ctc1, v14558);
        const v14559 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v14445
          };
        await txn3.getOutput('Trader_swapAForB', 'v14559', ctc15, v14559);
        const v14569 = {
          A: v14429,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v14571 = {
          A: v14504,
          B: v14507
          };
        const v14572 = [v5172, v14569, v14559, v14571];
        const v14573 = ['SwapEvent', v14572];
        null;
        const v14574 = v4478.closed;
        const v14575 = v4478.decimals;
        const v14577 = v4478.name;
        const v14581 = v4478.symbol;
        const v14582 = v4478.tokA;
        const v14583 = v4478.tokB;
        const v14584 = v4478.totalSupply;
        const v14585 = v4478.zeroAddress;
        const v14587 = {
          A: v14514,
          B: v14519
          };
        const v14588 = {
          closed: v14574,
          decimals: v14575,
          lptBals: v4574,
          name: v14577,
          poolBals: v14571,
          protoBals: v14587,
          protoInfo: v14434,
          symbol: v14581,
          tokA: v14582,
          tokB: v14583,
          totalSupply: v14584,
          zeroAddress: v14585
          };
        const cv4478 = v14588;
        const cv4479 = v5174;
        const cv4482 = v14552;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_471': {
        const v14856 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v15566 = v14856[stdlib.checkedBigNumberify('./index.rsh:1388:12:spread', stdlib.UInt_max, '0')];
        const v15567 = v14856[stdlib.checkedBigNumberify('./index.rsh:1388:12:spread', stdlib.UInt_max, '1')];
        const v15571 = v4478.protoInfo;
        const v15573 = v4579.B;
        const v15574 = v4579.A;
        const v15575 = v15571.protoFee;
        const v15576 = v15571.totFee;
        const v15577 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15576);
        const v15578 = stdlib.safeMul256(v15566, v15577);
        const v15579 = stdlib.safeMul256(v15573, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v15580 = stdlib.safeAdd256(v15579, v15578);
        const v15581 = stdlib.safeMul256(v15578, v15574);
        const v15582 = stdlib.safeDiv256(v15581, v15580);
        const v15586 = stdlib.safeMul256(v15575, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v15587 = stdlib.safeDiv256(v15586, v15576);
        const v15591 = stdlib.safeAdd256(v15573, v15566);
        const v15595 = stdlib.safeMul256(v15566, v15574);
        const v15596 = stdlib.safeDiv256(v15595, v15591);
        const v15597 = stdlib.safeSub256(v15596, v15582);
        const v15599 = stdlib.safeMul256(v15597, v15587);
        const v15600 = stdlib.safeDiv256(v15599, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v15601 = stdlib.safeMul256(v15566, v15575);
        const v15602 = stdlib.safeDiv256(v15601, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v15606 = stdlib.safeMul256(v15602, v15574);
        const v15607 = stdlib.safeDiv256(v15606, v15591);
        const v15608 = stdlib.gt256(v15607, v15600);
        const v15609 = [v15602, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v15610 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15600];
        const v15611 = v15608 ? v15609 : v15610;
        const v15613 = v15611[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '0')];
        const v15614 = v15611[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '1')];
        const v15619 = v15571.locked;
        const v15620 = v15619 ? false : true;
        stdlib.assert(v15620, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1265:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v15635 = stdlib.safeSub256(v15574, v15582);
        const v15641 = stdlib.safeSub256(v15635, v15614);
        const v15644 = stdlib.safeSub256(v15591, v15613);
        const v15646 = v4478.protoBals;
        const v15647 = v15646.A;
        const v15651 = stdlib.safeAdd256(v15647, v15614);
        const v15652 = v15646.B;
        const v15656 = stdlib.safeAdd256(v15652, v15613);
        const v15658 = stdlib.le256(v15567, v15582);
        stdlib.assert(v15658, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1284:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v15664 = stdlib.safeMul256(v15574, v15573);
        const v15665 = stdlib.safeMul256(v15641, v15644);
        const v15666 = stdlib.ge256(v15665, v15664);
        stdlib.assert(v15666, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1294:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v15675 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
        const v15676 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
        const v15677 = [v5172, v4456];
        const v15678 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v15677];
        const v15682 = undefined /* Remote */;
        const v15683 = await txn3.getOutput('internal', 'v15682', ctc24, v15682);
        const v15685 = v15683[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
        const v15690 = stdlib.add(v4482, v15685);
        const v15691 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15685);
        stdlib.assert(v15691, {
          at: './index.rsh:1024:15:application',
          fs: ['at ./index.rsh:1338:39:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1390:25:application call to "c" (defined at: ./index.rsh:1329:22:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v15692 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc9, v5172, ctc1), null);
        const v15693 = stdlib.fromSome(v15692, stdlib.checkedBigNumberify('./index.rsh:1340:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v15694 = stdlib.safeAdd256(v15693, v15582);
        await stdlib.mapSet(map2, ctc9, v5172, ctc1, v15694);
        const v15695 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v5172, ctc1), null);
        const v15696 = stdlib.fromSome(v15695, stdlib.checkedBigNumberify('./index.rsh:1342:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await stdlib.mapSet(map3, ctc9, v5172, ctc1, v15696);
        const v15697 = {
          A: v15582,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v15697', ctc15, v15697);
        const v15707 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v15566
          };
        const v15709 = {
          A: v15641,
          B: v15644
          };
        const v15710 = [v5172, v15707, v15697, v15709];
        const v15711 = ['SwapEvent', v15710];
        null;
        const v15712 = v4478.closed;
        const v15713 = v4478.decimals;
        const v15715 = v4478.name;
        const v15719 = v4478.symbol;
        const v15720 = v4478.tokA;
        const v15721 = v4478.tokB;
        const v15722 = v4478.totalSupply;
        const v15723 = v4478.zeroAddress;
        const v15725 = {
          A: v15651,
          B: v15656
          };
        const v15726 = {
          closed: v15712,
          decimals: v15713,
          lptBals: v4574,
          name: v15715,
          poolBals: v15709,
          protoBals: v15725,
          protoInfo: v15571,
          symbol: v15719,
          tokA: v15720,
          tokB: v15721,
          totalSupply: v15722,
          zeroAddress: v15723
          };
        const cv4478 = v15726;
        const cv4479 = v5174;
        const cv4482 = v15690;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_approve0_471': {
        const v15824 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v16704 = v15824[stdlib.checkedBigNumberify('./index.rsh:944:12:spread', stdlib.UInt_max, '0')];
        const v16705 = v15824[stdlib.checkedBigNumberify('./index.rsh:944:12:spread', stdlib.UInt_max, '1')];
        const v16707 = stdlib.addressEq(v5172, v4423);
        const v16708 = v16707 ? false : true;
        stdlib.assert(v16708, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:891:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:945:20:application call to "chkApprove_" (defined at: ./index.rsh:890:56:function exp)', 'at ./index.rsh:947:15:application call to [unknown function] (defined at: ./index.rsh:947:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v16710 = stdlib.addressEq(v16704, v4423);
        const v16711 = v16710 ? false : true;
        stdlib.assert(v16711, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:892:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:945:20:application call to "chkApprove_" (defined at: ./index.rsh:890:56:function exp)', 'at ./index.rsh:947:15:application call to [unknown function] (defined at: ./index.rsh:947:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v16715 = [v5172, v16704];
        await stdlib.mapSet(map1, ctc25, v16715, ctc1, v16705);
        null;
        const v16717 = true;
        await txn3.getOutput('arc200_approve', 'v16717', ctc11, v16717);
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_471': {
        const v16792 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v17695 = v16792[stdlib.checkedBigNumberify('./index.rsh:918:12:spread', stdlib.UInt_max, '0')];
        const v17696 = v16792[stdlib.checkedBigNumberify('./index.rsh:918:12:spread', stdlib.UInt_max, '1')];
        const v17698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v5172, ctc1), null);
        const v17699 = stdlib.fromSome(v17698, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v17700 = stdlib.ge256(v17699, v17696);
        stdlib.assert(v17700, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:885:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:919:22:application call to "checkTransfer" (defined at: ./index.rsh:884:52:function exp)', 'at ./index.rsh:921:15:application call to [unknown function] (defined at: ./index.rsh:921:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v17704 = true;
        await txn3.getOutput('arc200_transfer', 'v17704', ctc11, v17704);
        const v17714 = stdlib.safeSub256(v17699, v17696);
        await stdlib.mapSet(map0, ctc9, v5172, ctc1, v17714);
        const v17715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v17695, ctc1), null);
        const v17716 = stdlib.fromSome(v17715, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v17717 = stdlib.safeAdd256(v17716, v17696);
        await stdlib.mapSet(map0, ctc9, v17695, ctc1, v17717);
        null;
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_471': {
        const v17760 = v5173[1];
        undefined /* setApiDetails */;
        ;
        const v18689 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '0')];
        const v18690 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '1')];
        const v18691 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '2')];
        const v18693 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v18689, ctc1), null);
        const v18694 = stdlib.fromSome(v18693, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18695 = stdlib.ge256(v18694, v18691);
        stdlib.assert(v18695, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:899:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:933:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:935:15:application call to [unknown function] (defined at: ./index.rsh:935:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v18697 = [v18689, v5172];
        const v18698 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc25, v18697, ctc1), null);
        const v18699 = stdlib.fromSome(v18698, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18700 = stdlib.ge256(v18699, v18691);
        stdlib.assert(v18700, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:903:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:933:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:935:15:application call to [unknown function] (defined at: ./index.rsh:935:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v18707 = stdlib.safeSub256(v18694, v18691);
        await stdlib.mapSet(map0, ctc9, v18689, ctc1, v18707);
        const v18708 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v18690, ctc1), null);
        const v18709 = stdlib.fromSome(v18708, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v18710 = stdlib.safeAdd256(v18709, v18691);
        await stdlib.mapSet(map0, ctc9, v18690, ctc1, v18710);
        null;
        const v18715 = stdlib.safeSub256(v18699, v18691);
        await stdlib.mapSet(map1, ctc25, v18697, ctc1, v18715);
        null;
        const v18718 = true;
        await txn3.getOutput('arc200_transferFrom', 'v18718', ctc11, v18718);
        const cv4478 = v4478;
        const cv4479 = v5174;
        const cv4482 = v4482;
        
        v4478 = cv4478;
        v4479 = cv4479;
        v4482 = cv4482;
        
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
  const {data: [v18754], secs: v18756, time: v18755, didSend: v4355, from: v18753 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v18757 = null;
  await txn3.getOutput('Protocol_delete', 'v18757', ctc0, v18757);
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
  
  
  const [v4419, v4420, v4478] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc3, ctc12]);
  const v18752 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1415:5:application',
    fs: ['at ./index.rsh:1415:5:application call to [unknown function] (defined at: ./index.rsh:1415:5:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v4419, v4420, v4478, v18752],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1415:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v18754], secs: v18756, time: v18755, didSend: v4355, from: v18753 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v18757 = null;
      const v18758 = await txn1.getOutput('Protocol_delete', 'v18757', ctc0, v18757);
      
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
  const {data: [v18754], secs: v18756, time: v18755, didSend: v4355, from: v18753 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v18757 = null;
  const v18758 = await txn1.getOutput('Protocol_delete', 'v18757', ctc0, v18757);
  stdlib.protect(ctc0, await interact.out(v18754, v18758), {
    at: './index.rsh:1415:5:application',
    fs: ['at ./index.rsh:1415:5:application call to [unknown function] (defined at: ./index.rsh:1415:5:function exp)', 'at ./index.rsh:1416:6:application call to "k" (defined at: ./index.rsh:1415:5:function exp)'],
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
    Protocol_harvest0_471: ctc14,
    Provider_deposit0_471: ctc15,
    Provider_depositA0_471: ctc16,
    Provider_depositB0_471: ctc16,
    Provider_withdraw0_471: ctc17,
    Provider_withdrawA0_471: ctc16,
    Provider_withdrawB0_471: ctc16,
    Trader_exactSwapAForB0_471: ctc18,
    Trader_exactSwapBForA0_471: ctc18,
    Trader_swapAForB0_471: ctc18,
    Trader_swapBForA0_471: ctc18,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
    });
  const ctc22 = stdlib.T_Tuple([ctc10, ctc4]);
  const ctc23 = stdlib.T_Tuple([ctc4, ctc11]);
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4655 = ctc.selfAddress();
  const v4657 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1038:60:application call to [unknown function] (defined at: ./index.rsh:1038:60:function exp)', 'at ./index.rsh:821:31:application call to "runProtocol_harvest0_471" (defined at: ./index.rsh:1038:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v4659 = v4657[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4660 = v4659.protoFee;
  const v4661 = v4659.lpFee;
  const v4662 = v4659.totFee;
  const v4663 = stdlib.lt256(v4660, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4664 = stdlib.lt256(v4661, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4665 = v4663 ? v4664 : false;
  let v4666;
  if (v4665) {
    const v4667 = stdlib.safeAdd256(v4661, v4660);
    const v4668 = stdlib.eq256(v4662, v4667);
    v4666 = v4668;
    }
  else {
    v4666 = false;
    }
  const v4669 = stdlib.lt256(v4662, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4670 = v4666 ? v4669 : false;
  const v4671 = stdlib.gt256(v4662, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4672 = v4670 ? v4671 : false;
  stdlib.assert(v4672, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1038:60:application call to [unknown function] (defined at: ./index.rsh:1038:60:function exp)', 'at ./index.rsh:821:31:application call to "runProtocol_harvest0_471" (defined at: ./index.rsh:1038:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v4676 = v4478.protoInfo;
  const v4677 = v4676.protoAddr;
  const v4678 = stdlib.addressEq(v4655, v4677);
  stdlib.assert(v4678, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1030:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1039:21:application call to "chkProtoAddr" (defined at: ./index.rsh:1029:42:function exp)', 'at ./index.rsh:1038:60:application call to [unknown function] (defined at: ./index.rsh:1038:60:function exp)', 'at ./index.rsh:821:31:application call to "runProtocol_harvest0_471" (defined at: ./index.rsh:1038:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v4686;
  if (v4665) {
    const v4687 = stdlib.safeAdd256(v4661, v4660);
    const v4688 = stdlib.eq256(v4662, v4687);
    v4686 = v4688;
    }
  else {
    v4686 = false;
    }
  const v4690 = v4686 ? v4669 : false;
  const v4692 = v4690 ? v4671 : false;
  stdlib.assert(v4692, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:336:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:16:application call to "chkFees" (defined at: ./index.rsh:336:21:function exp)', 'at ./index.rsh:1038:60:application call to [unknown function] (defined at: ./index.rsh:1038:60:function exp)', 'at ./index.rsh:821:31:application call to "runProtocol_harvest0_471" (defined at: ./index.rsh:1038:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v4706 = ['Protocol_harvest0_471', v4657];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4706],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1038:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          const v5195 = v5176[stdlib.checkedBigNumberify('./index.rsh:1038:12:spread', stdlib.UInt_max, '0')];
          const v5196 = v5176[stdlib.checkedBigNumberify('./index.rsh:1038:12:spread', stdlib.UInt_max, '1')];
          const v5202 = v5196.protoFee;
          const v5203 = v5196.lpFee;
          const v5204 = v5196.totFee;
          const v5219 = (stdlib.le(await ctc.getBalance(), v4482) ? stdlib.checkedBigNumberify('./index.rsh:1043:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4482));
          const v5220 = stdlib.safeAdd(v5219, v4482);
          const v5224 = stdlib.sub(v5220, v5219);
          sim_r.txns.push({
            kind: 'from',
            to: v5195,
            tok: undefined /* Nothing */
            });
          const v5225 = v4478.protoBals;
          const v5226 = v5225.A;
          const v5227 = v5225.B;
          const v5228 = {
            A: v5226,
            B: v5227
            };
          const v5229 = [v5228, v5219];
          const v5230 = await txn1.getOutput('Protocol_harvest', 'v5229', ctc22, v5229);
          
          const v5254 = v4478.tokA;
          const v5258 = [v5254, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v5259 = [v5254, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5195];
          const v5263 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v5254,
              remote: ({
                accs: [v5195],
                apps: [v5254],
                bills: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc24, v5258], [ctc24, v5259]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1003:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v5264 = await txn1.getOutput('internal', 'v5263', ctc23, v5263);
          const v5266 = v5264[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
          const v5271 = stdlib.add(v5224, v5266);
          const v5273 = v4478.tokB;
          const v5277 = [v5273, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v5278 = [v5273, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5195];
          const v5282 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v5273,
              remote: ({
                accs: [v5195],
                apps: [v5273],
                bills: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc24, v5277], [ctc24, v5278]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1003:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v5283 = await txn1.getOutput('internal', 'v5282', ctc23, v5282);
          const v5285 = v5283[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
          const v5290 = stdlib.add(v5271, v5285);
          const v5295 = v5196.protoAddr;
          const v5296 = v5196.locked;
          const v5297 = {
            locked: v5296,
            lpFee: v5203,
            protoAddr: v5295,
            protoFee: v5202,
            totFee: v5204
            };
          const v5298 = [v5297];
          const v5299 = ['HarvestEvent', v5298];
          null;
          const v5300 = v4478.closed;
          const v5301 = v4478.decimals;
          const v5303 = v4478.name;
          const v5307 = v4478.symbol;
          const v5310 = v4478.totalSupply;
          const v5311 = v4478.zeroAddress;
          const v5313 = {
            closed: v5300,
            decimals: v5301,
            lptBals: v4574,
            name: v5303,
            poolBals: v4579,
            protoBals: v4474,
            protoInfo: v5196,
            symbol: v5307,
            tokA: v5254,
            tokB: v5273,
            totalSupply: v5310,
            zeroAddress: v5311
            };
          const v43848 = v5313;
          const v43850 = v5290;
          const v43851 = v5313.closed;
          if (v43851) {
            sim_r.isHalt = false;
            }
          else {
            const v43853 = v5313.lptBals;
            const v43854 = v43853.A;
            const v43855 = v43853.B;
            const v43856 = v5313.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v5195 = v5176[stdlib.checkedBigNumberify('./index.rsh:1038:12:spread', stdlib.UInt_max, '0')];
      const v5196 = v5176[stdlib.checkedBigNumberify('./index.rsh:1038:12:spread', stdlib.UInt_max, '1')];
      const v5198 = v4478.protoInfo;
      const v5199 = v5198.protoAddr;
      const v5200 = stdlib.addressEq(v5172, v5199);
      stdlib.assert(v5200, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1030:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1039:21:application call to "chkProtoAddr" (defined at: ./index.rsh:1029:42:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v5202 = v5196.protoFee;
      const v5203 = v5196.lpFee;
      const v5204 = v5196.totFee;
      const v5205 = stdlib.lt256(v5202, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v5206 = stdlib.lt256(v5203, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v5207 = v5205 ? v5206 : false;
      let v5208;
      if (v5207) {
        const v5209 = stdlib.safeAdd256(v5203, v5202);
        const v5210 = stdlib.eq256(v5204, v5209);
        v5208 = v5210;
        }
      else {
        v5208 = false;
        }
      const v5211 = stdlib.lt256(v5204, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v5212 = v5208 ? v5211 : false;
      const v5213 = stdlib.gt256(v5204, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5214 = v5212 ? v5213 : false;
      stdlib.assert(v5214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:336:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:16:application call to "chkFees" (defined at: ./index.rsh:336:21:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v5219 = (stdlib.le(await ctc.getBalance(), v4482) ? stdlib.checkedBigNumberify('./index.rsh:1043:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v4482));
      const v5220 = stdlib.safeAdd(v5219, v4482);
      const v5224 = stdlib.sub(v5220, v5219);
      ;
      const v5225 = v4478.protoBals;
      const v5226 = v5225.A;
      const v5227 = v5225.B;
      const v5228 = {
        A: v5226,
        B: v5227
        };
      const v5229 = [v5228, v5219];
      const v5230 = await txn1.getOutput('Protocol_harvest', 'v5229', ctc22, v5229);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v5176, v5230), {
          at: './index.rsh:1038:13:application',
          fs: ['at ./index.rsh:1038:13:application call to [unknown function] (defined at: ./index.rsh:1038:13:function exp)', 'at ./index.rsh:1045:14:application call to "k" (defined at: ./index.rsh:1042:15:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v5254 = v4478.tokA;
      const v5258 = [v5254, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v5259 = [v5254, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5195];
      const v5263 = undefined /* Remote */;
      const v5264 = await txn1.getOutput('internal', 'v5263', ctc23, v5263);
      const v5266 = v5264[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
      const v5271 = stdlib.add(v5224, v5266);
      const v5272 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5266);
      stdlib.assert(v5272, {
        at: './index.rsh:1009:15:application',
        fs: ['at ./index.rsh:1046:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v5273 = v4478.tokB;
      const v5277 = [v5273, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v5278 = [v5273, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5195];
      const v5282 = undefined /* Remote */;
      const v5283 = await txn1.getOutput('internal', 'v5282', ctc23, v5282);
      const v5285 = v5283[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
      const v5290 = stdlib.add(v5271, v5285);
      const v5291 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5285);
      stdlib.assert(v5291, {
        at: './index.rsh:1009:15:application',
        fs: ['at ./index.rsh:1047:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1042:15:application call to [unknown function] (defined at: ./index.rsh:1042:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v5295 = v5196.protoAddr;
      const v5296 = v5196.locked;
      const v5297 = {
        locked: v5296,
        lpFee: v5203,
        protoAddr: v5295,
        protoFee: v5202,
        totFee: v5204
        };
      const v5298 = [v5297];
      const v5299 = ['HarvestEvent', v5298];
      null;
      const v5300 = v4478.closed;
      const v5301 = v4478.decimals;
      const v5303 = v4478.name;
      const v5307 = v4478.symbol;
      const v5310 = v4478.totalSupply;
      const v5311 = v4478.zeroAddress;
      const v5313 = {
        closed: v5300,
        decimals: v5301,
        lptBals: v4574,
        name: v5303,
        poolBals: v4579,
        protoBals: v4474,
        protoInfo: v5196,
        symbol: v5307,
        tokA: v5254,
        tokB: v5273,
        totalSupply: v5310,
        zeroAddress: v5311
        };
      const v43848 = v5313;
      const v43850 = v5290;
      const v43851 = v5313.closed;
      if (v43851) {
        return;
        }
      else {
        const v43853 = v5313.lptBals;
        const v43854 = v43853.A;
        const v43855 = v43853.B;
        const v43856 = v5313.poolBals;
        return;
        }
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc14,
    Provider_depositA0_471: ctc16,
    Provider_depositB0_471: ctc16,
    Provider_withdraw0_471: ctc17,
    Provider_withdrawA0_471: ctc16,
    Provider_withdrawB0_471: ctc16,
    Trader_exactSwapAForB0_471: ctc18,
    Trader_exactSwapBForA0_471: ctc18,
    Trader_swapAForB0_471: ctc18,
    Trader_swapBForA0_471: ctc18,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4740 = ctc.selfAddress();
  const v4742 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1139:45:application call to [unknown function] (defined at: ./index.rsh:1139:45:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_deposit0_471" (defined at: ./index.rsh:1139:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v4743 = v4742[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4744 = v4742[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4745 = v4743.A;
  const v4746 = v4743.B;
  const v4749 = v4478.protoInfo;
  const v4750 = v4749.locked;
  const v4751 = v4750 ? false : true;
  stdlib.assert(v4751, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1140:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1139:45:application call to [unknown function] (defined at: ./index.rsh:1139:45:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_deposit0_471" (defined at: ./index.rsh:1139:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v4753 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v4740, ctc1), null);
  const v4754 = stdlib.fromSome(v4753, stdlib.checkedBigNumberify('./index.rsh:1141:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4755 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v4740, ctc1), null);
  const v4756 = stdlib.fromSome(v4755, stdlib.checkedBigNumberify('./index.rsh:1142:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4758 = stdlib.ge256(v4754, v4745);
  stdlib.assert(v4758, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1143:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1139:45:application call to [unknown function] (defined at: ./index.rsh:1139:45:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_deposit0_471" (defined at: ./index.rsh:1139:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'inBals A balance insufficient',
    who: 'Provider_deposit'
    });
  const v4761 = stdlib.ge256(v4756, v4746);
  stdlib.assert(v4761, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1144:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1139:45:application call to [unknown function] (defined at: ./index.rsh:1139:45:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_deposit0_471" (defined at: ./index.rsh:1139:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'inBals B balance insufficient',
    who: 'Provider_deposit'
    });
  let v4763;
  const v4769 = stdlib.eq256(v4576, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  if (v4769) {
    const v4770 = stdlib.safeMul256(v4745, v4746);
    const v4771 = stdlib.sqrt256(v4770);
    v4763 = v4771;
    }
  else {
    const v4772 = v4579.A;
    const v4773 = v4579.B;
    const v4777 = stdlib.safeMul256(v4745, v4576);
    const v4778 = stdlib.safeDiv256(v4777, v4772);
    const v4782 = stdlib.safeMul256(v4746, v4576);
    const v4783 = stdlib.safeDiv256(v4782, v4773);
    const v4784 = stdlib.lt256(v4778, v4783);
    const v4785 = v4784 ? v4778 : v4783;
    v4763 = v4785;
    }
  const v4786 = stdlib.le256(v4744, v4763);
  stdlib.assert(v4786, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1139:45:application call to [unknown function] (defined at: ./index.rsh:1139:45:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_deposit0_471" (defined at: ./index.rsh:1139:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v4790 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4456, ctc1), null);
  const v4791 = stdlib.fromSome(v4790, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4792 = stdlib.ge256(v4791, v4763);
  stdlib.assert(v4792, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:885:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1147:22:application call to "checkTransfer" (defined at: ./index.rsh:884:52:function exp)', 'at ./index.rsh:1139:45:application call to [unknown function] (defined at: ./index.rsh:1139:45:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_deposit0_471" (defined at: ./index.rsh:1139:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'Provider_deposit'
    });
  const v4803 = ['Provider_deposit0_471', v4742];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4803],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1139:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          ;
          const v6286 = v6144[stdlib.checkedBigNumberify('./index.rsh:1139:12:spread', stdlib.UInt_max, '0')];
          const v6288 = v4478.protoInfo;
          const v6292 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5172, ctc1), null);
          const v6293 = stdlib.fromSome(v6292, stdlib.checkedBigNumberify('./index.rsh:1141:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6294 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5172, ctc1), null);
          const v6295 = stdlib.fromSome(v6294, stdlib.checkedBigNumberify('./index.rsh:1142:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6296 = v6286.A;
          const v6299 = v6286.B;
          let v6302;
          const v6308 = stdlib.eq256(v4576, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          if (v6308) {
            const v6309 = stdlib.safeMul256(v6296, v6299);
            const v6310 = stdlib.sqrt256(v6309);
            v6302 = v6310;
            }
          else {
            const v6311 = v4579.A;
            const v6312 = v4579.B;
            const v6316 = stdlib.safeMul256(v6296, v4576);
            const v6317 = stdlib.safeDiv256(v6316, v6311);
            const v6321 = stdlib.safeMul256(v6299, v4576);
            const v6322 = stdlib.safeDiv256(v6321, v6312);
            const v6323 = stdlib.lt256(v6317, v6322);
            const v6324 = v6323 ? v6317 : v6322;
            v6302 = v6324;
            }
          const v6329 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v4456, ctc1), null);
          const v6330 = stdlib.fromSome(v6329, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6336 = stdlib.safeSub256(v6293, v6296);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5172, ctc1, v6336);
          const v6338 = stdlib.safeSub256(v6295, v6299);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5172, ctc1, v6338);
          const v6342 = stdlib.safeSub256(v6330, v6302);
          await stdlib.simMapSet(sim_r, 0, ctc8, v4456, ctc1, v6342);
          const v6343 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v5172, ctc1), null);
          const v6344 = stdlib.fromSome(v6343, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6345 = stdlib.safeAdd256(v6344, v6302);
          await stdlib.simMapSet(sim_r, 0, ctc8, v5172, ctc1, v6345);
          null;
          const v6347 = await txn1.getOutput('Provider_deposit', 'v6302', ctc1, v6302);
          
          const v6356 = v4478.closed;
          const v6357 = v4478.decimals;
          const v6359 = v4478.name;
          const v6361 = v4478.protoBals;
          const v6363 = v4478.symbol;
          const v6364 = v4478.tokA;
          const v6365 = v4478.tokB;
          const v6366 = v4478.totalSupply;
          const v6367 = v4478.zeroAddress;
          const v6369 = v4579.A;
          const v6374 = stdlib.safeAdd256(v6369, v6296);
          const v6375 = v4579.B;
          const v6380 = stdlib.safeAdd256(v6375, v6299);
          const v6389 = stdlib.safeSub256(v4575, v6302);
          const v6393 = stdlib.safeAdd256(v4576, v6302);
          const v6396 = {
            A: v6389,
            B: v6393
            };
          const v6397 = {
            A: v6374,
            B: v6380
            };
          const v6398 = {
            closed: v6356,
            decimals: v6357,
            lptBals: v6396,
            name: v6359,
            poolBals: v6397,
            protoBals: v6361,
            protoInfo: v6288,
            symbol: v6363,
            tokA: v6364,
            tokB: v6365,
            totalSupply: v6366,
            zeroAddress: v6367
            };
          const v44088 = v6398;
          const v44090 = v4482;
          const v44091 = v6398.closed;
          if (v44091) {
            sim_r.isHalt = false;
            }
          else {
            const v44093 = v6398.lptBals;
            const v44094 = v44093.A;
            const v44095 = v44093.B;
            const v44096 = v6398.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v6286 = v6144[stdlib.checkedBigNumberify('./index.rsh:1139:12:spread', stdlib.UInt_max, '0')];
      const v6287 = v6144[stdlib.checkedBigNumberify('./index.rsh:1139:12:spread', stdlib.UInt_max, '1')];
      const v6288 = v4478.protoInfo;
      const v6289 = v6288.locked;
      const v6290 = v6289 ? false : true;
      stdlib.assert(v6290, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1140:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      const v6292 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5172, ctc1), null);
      const v6293 = stdlib.fromSome(v6292, stdlib.checkedBigNumberify('./index.rsh:1141:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6294 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5172, ctc1), null);
      const v6295 = stdlib.fromSome(v6294, stdlib.checkedBigNumberify('./index.rsh:1142:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6296 = v6286.A;
      const v6297 = stdlib.ge256(v6293, v6296);
      stdlib.assert(v6297, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1143:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
        msg: 'inBals A balance insufficient',
        who: 'Provider_deposit'
        });
      const v6299 = v6286.B;
      const v6300 = stdlib.ge256(v6295, v6299);
      stdlib.assert(v6300, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1144:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
        msg: 'inBals B balance insufficient',
        who: 'Provider_deposit'
        });
      let v6302;
      const v6308 = stdlib.eq256(v4576, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v6308) {
        const v6309 = stdlib.safeMul256(v6296, v6299);
        const v6310 = stdlib.sqrt256(v6309);
        v6302 = v6310;
        }
      else {
        const v6311 = v4579.A;
        const v6312 = v4579.B;
        const v6316 = stdlib.safeMul256(v6296, v4576);
        const v6317 = stdlib.safeDiv256(v6316, v6311);
        const v6321 = stdlib.safeMul256(v6299, v4576);
        const v6322 = stdlib.safeDiv256(v6321, v6312);
        const v6323 = stdlib.lt256(v6317, v6322);
        const v6324 = v6323 ? v6317 : v6322;
        v6302 = v6324;
        }
      const v6325 = stdlib.le256(v6287, v6302);
      stdlib.assert(v6325, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v6329 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4456, ctc1), null);
      const v6330 = stdlib.fromSome(v6329, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6331 = stdlib.ge256(v6330, v6302);
      stdlib.assert(v6331, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:885:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1147:22:application call to "checkTransfer" (defined at: ./index.rsh:884:52:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'Provider_deposit'
        });
      const v6336 = stdlib.safeSub256(v6293, v6296);
      await stdlib.mapSet(map2, ctc8, v5172, ctc1, v6336);
      const v6338 = stdlib.safeSub256(v6295, v6299);
      await stdlib.mapSet(map3, ctc8, v5172, ctc1, v6338);
      const v6342 = stdlib.safeSub256(v6330, v6302);
      await stdlib.mapSet(map0, ctc8, v4456, ctc1, v6342);
      const v6343 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5172, ctc1), null);
      const v6344 = stdlib.fromSome(v6343, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6345 = stdlib.safeAdd256(v6344, v6302);
      await stdlib.mapSet(map0, ctc8, v5172, ctc1, v6345);
      null;
      const v6347 = await txn1.getOutput('Provider_deposit', 'v6302', ctc1, v6302);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v6144, v6347), {
          at: './index.rsh:1139:13:application',
          fs: ['at ./index.rsh:1139:13:application call to [unknown function] (defined at: ./index.rsh:1139:13:function exp)', 'at ./index.rsh:1153:14:application call to "k" (defined at: ./index.rsh:1149:15:function exp)', 'at ./index.rsh:1149:15:application call to [unknown function] (defined at: ./index.rsh:1149:15:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v6356 = v4478.closed;
      const v6357 = v4478.decimals;
      const v6359 = v4478.name;
      const v6361 = v4478.protoBals;
      const v6363 = v4478.symbol;
      const v6364 = v4478.tokA;
      const v6365 = v4478.tokB;
      const v6366 = v4478.totalSupply;
      const v6367 = v4478.zeroAddress;
      const v6369 = v4579.A;
      const v6374 = stdlib.safeAdd256(v6369, v6296);
      const v6375 = v4579.B;
      const v6380 = stdlib.safeAdd256(v6375, v6299);
      const v6389 = stdlib.safeSub256(v4575, v6302);
      const v6393 = stdlib.safeAdd256(v4576, v6302);
      const v6396 = {
        A: v6389,
        B: v6393
        };
      const v6397 = {
        A: v6374,
        B: v6380
        };
      const v6398 = {
        closed: v6356,
        decimals: v6357,
        lptBals: v6396,
        name: v6359,
        poolBals: v6397,
        protoBals: v6361,
        protoInfo: v6288,
        symbol: v6363,
        tokA: v6364,
        tokB: v6365,
        totalSupply: v6366,
        zeroAddress: v6367
        };
      const v44088 = v6398;
      const v44090 = v4482;
      const v44091 = v6398.closed;
      if (v44091) {
        return;
        }
      else {
        const v44093 = v6398.lptBals;
        const v44094 = v44093.A;
        const v44095 = v44093.B;
        const v44096 = v6398.poolBals;
        return;
        }
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc14,
    Provider_depositB0_471: ctc14,
    Provider_withdraw0_471: ctc17,
    Provider_withdrawA0_471: ctc14,
    Provider_withdrawB0_471: ctc14,
    Trader_exactSwapAForB0_471: ctc18,
    Trader_exactSwapBForA0_471: ctc18,
    Trader_swapAForB0_471: ctc18,
    Trader_swapBForA0_471: ctc18,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4710 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1111:38:application call to [unknown function] (defined at: ./index.rsh:1111:38:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_depositA0_471" (defined at: ./index.rsh:1111:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositA'
    });
  const v4713 = v4478.protoInfo;
  const v4714 = v4713.locked;
  const v4715 = v4714 ? false : true;
  stdlib.assert(v4715, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1112:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:38:application call to [unknown function] (defined at: ./index.rsh:1111:38:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_depositA0_471" (defined at: ./index.rsh:1111:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'locked',
    who: 'Provider_depositA'
    });
  const v4722 = ['Provider_depositA0_471', v4710];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4722],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1111:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositA"
            });
          ;
          const v7372 = v7112[stdlib.checkedBigNumberify('./index.rsh:1111:12:spread', stdlib.UInt_max, '0')];
          const v7380 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
          const v7381 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v7382 = [v5172, v4456];
          const v7383 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7382];
          const v7387 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4411,
              remote: ({
                accs: [v5172, v4456],
                apps: [v4411],
                bills: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v7380], [ctc23, v7381], [ctc25, v7383]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1017:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v7388 = await txn1.getOutput('internal', 'v7387', ctc22, v7387);
          const v7390 = v7388[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
          const v7395 = stdlib.add(v4482, v7390);
          const v7397 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5172, ctc1), null);
          const v7398 = stdlib.fromSome(v7397, stdlib.checkedBigNumberify('./index.rsh:1116:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v7399 = stdlib.safeAdd256(v7398, v7372);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5172, ctc1, v7399);
          const v7400 = await txn1.getOutput('Provider_depositA', 'v7399', ctc1, v7399);
          
          const v44328 = v4478;
          const v44330 = v7395;
          const v44331 = v4478.closed;
          if (v44331) {
            sim_r.isHalt = false;
            }
          else {
            const v44333 = v4478.lptBals;
            const v44334 = v44333.A;
            const v44335 = v44333.B;
            const v44336 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v7372 = v7112[stdlib.checkedBigNumberify('./index.rsh:1111:12:spread', stdlib.UInt_max, '0')];
      const v7373 = v4478.protoInfo;
      const v7374 = v7373.locked;
      const v7375 = v7374 ? false : true;
      stdlib.assert(v7375, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1112:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
        msg: 'locked',
        who: 'Provider_depositA'
        });
      const v7380 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
      const v7381 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v7382 = [v5172, v4456];
      const v7383 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v7382];
      const v7387 = undefined /* Remote */;
      const v7388 = await txn1.getOutput('internal', 'v7387', ctc22, v7387);
      const v7390 = v7388[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
      const v7395 = stdlib.add(v4482, v7390);
      const v7396 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7390);
      stdlib.assert(v7396, {
        at: './index.rsh:1024:15:application',
        fs: ['at ./index.rsh:1115:37:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositA'
        });
      const v7397 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5172, ctc1), null);
      const v7398 = stdlib.fromSome(v7397, stdlib.checkedBigNumberify('./index.rsh:1116:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v7399 = stdlib.safeAdd256(v7398, v7372);
      await stdlib.mapSet(map2, ctc8, v5172, ctc1, v7399);
      const v7400 = await txn1.getOutput('Provider_depositA', 'v7399', ctc1, v7399);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v7112, v7400), {
          at: './index.rsh:1111:13:application',
          fs: ['at ./index.rsh:1111:13:application call to [unknown function] (defined at: ./index.rsh:1111:13:function exp)', 'at ./index.rsh:1118:14:application call to "k" (defined at: ./index.rsh:1114:15:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositA'
          });
        }
      else {
        }
      
      const v44328 = v4478;
      const v44330 = v7395;
      const v44331 = v4478.closed;
      if (v44331) {
        return;
        }
      else {
        const v44333 = v4478.lptBals;
        const v44334 = v44333.A;
        const v44335 = v44333.B;
        const v44336 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc14,
    Provider_depositB0_471: ctc14,
    Provider_withdraw0_471: ctc17,
    Provider_withdrawA0_471: ctc14,
    Provider_withdrawB0_471: ctc14,
    Trader_exactSwapAForB0_471: ctc18,
    Trader_exactSwapBForA0_471: ctc18,
    Trader_swapAForB0_471: ctc18,
    Trader_swapBForA0_471: ctc18,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4726 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1125:38:application call to [unknown function] (defined at: ./index.rsh:1125:38:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_depositB0_471" (defined at: ./index.rsh:1125:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Provider_depositB'
    });
  const v4729 = v4478.protoInfo;
  const v4730 = v4729.locked;
  const v4731 = v4730 ? false : true;
  stdlib.assert(v4731, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1125:38:application call to [unknown function] (defined at: ./index.rsh:1125:38:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_depositB0_471" (defined at: ./index.rsh:1125:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'locked',
    who: 'Provider_depositB'
    });
  const v4738 = ['Provider_depositB0_471', v4726];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4738],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1125:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_depositB"
            });
          ;
          const v8376 = v8080[stdlib.checkedBigNumberify('./index.rsh:1125:12:spread', stdlib.UInt_max, '0')];
          const v8384 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
          const v8385 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v8386 = [v5172, v4456];
          const v8387 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v8386];
          const v8391 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4413,
              remote: ({
                accs: [v5172, v4456],
                apps: [v4413],
                bills: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v8384], [ctc23, v8385], [ctc25, v8387]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1017:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v8392 = await txn1.getOutput('internal', 'v8391', ctc22, v8391);
          const v8394 = v8392[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
          const v8399 = stdlib.add(v4482, v8394);
          const v8401 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5172, ctc1), null);
          const v8402 = stdlib.fromSome(v8401, stdlib.checkedBigNumberify('./index.rsh:1130:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8403 = stdlib.safeAdd256(v8402, v8376);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5172, ctc1, v8403);
          const v8404 = await txn1.getOutput('Provider_depositB', 'v8403', ctc1, v8403);
          
          const v44568 = v4478;
          const v44570 = v8399;
          const v44571 = v4478.closed;
          if (v44571) {
            sim_r.isHalt = false;
            }
          else {
            const v44573 = v4478.lptBals;
            const v44574 = v44573.A;
            const v44575 = v44573.B;
            const v44576 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v8376 = v8080[stdlib.checkedBigNumberify('./index.rsh:1125:12:spread', stdlib.UInt_max, '0')];
      const v8377 = v4478.protoInfo;
      const v8378 = v8377.locked;
      const v8379 = v8378 ? false : true;
      stdlib.assert(v8379, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1128:15:application call to [unknown function] (defined at: ./index.rsh:1128:15:function exp)'],
        msg: 'locked',
        who: 'Provider_depositB'
        });
      const v8384 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
      const v8385 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v8386 = [v5172, v4456];
      const v8387 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v8386];
      const v8391 = undefined /* Remote */;
      const v8392 = await txn1.getOutput('internal', 'v8391', ctc22, v8391);
      const v8394 = v8392[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
      const v8399 = stdlib.add(v4482, v8394);
      const v8400 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8394);
      stdlib.assert(v8400, {
        at: './index.rsh:1024:15:application',
        fs: ['at ./index.rsh:1129:37:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1128:15:application call to [unknown function] (defined at: ./index.rsh:1128:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_depositB'
        });
      const v8401 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5172, ctc1), null);
      const v8402 = stdlib.fromSome(v8401, stdlib.checkedBigNumberify('./index.rsh:1130:66:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8403 = stdlib.safeAdd256(v8402, v8376);
      await stdlib.mapSet(map3, ctc8, v5172, ctc1, v8403);
      const v8404 = await txn1.getOutput('Provider_depositB', 'v8403', ctc1, v8403);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v8080, v8404), {
          at: './index.rsh:1125:13:application',
          fs: ['at ./index.rsh:1125:13:application call to [unknown function] (defined at: ./index.rsh:1125:13:function exp)', 'at ./index.rsh:1132:14:application call to "k" (defined at: ./index.rsh:1128:15:function exp)', 'at ./index.rsh:1128:15:application call to [unknown function] (defined at: ./index.rsh:1128:15:function exp)'],
          msg: 'out',
          who: 'Provider_depositB'
          });
        }
      else {
        }
      
      const v44568 = v4478;
      const v44570 = v8399;
      const v44571 = v4478.closed;
      if (v44571) {
        return;
        }
      else {
        const v44573 = v4478.lptBals;
        const v44574 = v44573.A;
        const v44575 = v44573.B;
        const v44576 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc16,
    Provider_deposit0_471: ctc17,
    Provider_depositA0_471: ctc18,
    Provider_depositB0_471: ctc18,
    Provider_withdraw0_471: ctc14,
    Provider_withdrawA0_471: ctc18,
    Provider_withdrawB0_471: ctc18,
    Trader_exactSwapAForB0_471: ctc19,
    Trader_exactSwapBForA0_471: ctc19,
    Trader_swapAForB0_471: ctc19,
    Trader_swapBForA0_471: ctc19,
    arc200_approve0_471: ctc20,
    arc200_transfer0_471: ctc20,
    arc200_transferFrom0_471: ctc21
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4837 = ctc.selfAddress();
  const v4839 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1214:44:application call to [unknown function] (defined at: ./index.rsh:1214:44:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdraw0_471" (defined at: ./index.rsh:1214:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v4840 = v4839[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4841 = v4839[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4842 = v4841.A;
  const v4843 = v4841.B;
  const v4849 = v4579.A;
  const v4850 = v4579.B;
  const v4854 = stdlib.safeMul256(v4840, v4849);
  const v4855 = stdlib.safeDiv256(v4854, v4576);
  const v4859 = stdlib.safeMul256(v4840, v4850);
  const v4860 = stdlib.safeDiv256(v4859, v4576);
  const v4862 = stdlib.le256(v4842, v4855);
  stdlib.assert(v4862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1218:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1214:44:application call to [unknown function] (defined at: ./index.rsh:1214:44:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdraw0_471" (defined at: ./index.rsh:1214:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage A',
    who: 'Provider_withdraw'
    });
  const v4864 = stdlib.le256(v4843, v4860);
  stdlib.assert(v4864, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1219:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1214:44:application call to [unknown function] (defined at: ./index.rsh:1214:44:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdraw0_471" (defined at: ./index.rsh:1214:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage B',
    who: 'Provider_withdraw'
    });
  const v4869 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4837, ctc1), null);
  const v4870 = stdlib.fromSome(v4869, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4871 = stdlib.ge256(v4870, v4840);
  stdlib.assert(v4871, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:899:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1220:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:1214:44:application call to [unknown function] (defined at: ./index.rsh:1214:44:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdraw0_471" (defined at: ./index.rsh:1214:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'Provider_withdraw'
    });
  const v4873 = [v4837, v4456];
  const v4874 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v4873, ctc1), null);
  const v4875 = stdlib.fromSome(v4874, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4876 = stdlib.ge256(v4875, v4840);
  stdlib.assert(v4876, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:903:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1220:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:1214:44:application call to [unknown function] (defined at: ./index.rsh:1214:44:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdraw0_471" (defined at: ./index.rsh:1214:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'Provider_withdraw'
    });
  const v4887 = ['Provider_withdraw0_471', v4839];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4887],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1214:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          ;
          const v9380 = v9048[stdlib.checkedBigNumberify('./index.rsh:1214:12:spread', stdlib.UInt_max, '0')];
          const v9385 = v4579.A;
          const v9386 = v4579.B;
          const v9390 = stdlib.safeMul256(v9380, v9385);
          const v9391 = stdlib.safeDiv256(v9390, v4576);
          const v9395 = stdlib.safeMul256(v9380, v9386);
          const v9396 = stdlib.safeDiv256(v9395, v4576);
          const v9405 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v5172, ctc1), null);
          const v9406 = stdlib.fromSome(v9405, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9409 = [v5172, v4456];
          const v9410 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v9409, ctc1), null);
          const v9411 = stdlib.fromSome(v9410, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9420 = stdlib.safeSub256(v9406, v9380);
          await stdlib.simMapSet(sim_r, 0, ctc8, v5172, ctc1, v9420);
          const v9421 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v4456, ctc1), null);
          const v9422 = stdlib.fromSome(v9421, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9423 = stdlib.safeAdd256(v9422, v9380);
          await stdlib.simMapSet(sim_r, 0, ctc8, v4456, ctc1, v9423);
          null;
          const v9428 = stdlib.safeSub256(v9411, v9380);
          await stdlib.simMapSet(sim_r, 1, ctc15, v9409, ctc1, v9428);
          null;
          const v9431 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5172, ctc1), null);
          const v9432 = stdlib.fromSome(v9431, stdlib.checkedBigNumberify('./index.rsh:1224:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9433 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5172, ctc1), null);
          const v9434 = stdlib.fromSome(v9433, stdlib.checkedBigNumberify('./index.rsh:1225:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9435 = stdlib.safeAdd256(v9432, v9391);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5172, ctc1, v9435);
          const v9436 = stdlib.safeAdd256(v9434, v9396);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5172, ctc1, v9436);
          const v9437 = {
            A: v9391,
            B: v9396
            };
          const v9438 = await txn1.getOutput('Provider_withdraw', 'v9437', ctc10, v9437);
          
          const v9457 = stdlib.safeAdd256(v4575, v9380);
          const v9460 = stdlib.safeSub256(v4576, v9380);
          const v9467 = stdlib.safeSub256(v9385, v9391);
          const v9471 = stdlib.safeSub256(v9386, v9396);
          const v9474 = [v5172, v9437];
          null;
          const v9475 = v4478.closed;
          const v9476 = v4478.decimals;
          const v9478 = v4478.name;
          const v9480 = v4478.protoBals;
          const v9481 = v4478.protoInfo;
          const v9482 = v4478.symbol;
          const v9483 = v4478.tokA;
          const v9484 = v4478.tokB;
          const v9485 = v4478.totalSupply;
          const v9486 = v4478.zeroAddress;
          const v9487 = {
            A: v9457,
            B: v9460
            };
          const v9488 = {
            A: v9467,
            B: v9471
            };
          const v9489 = {
            closed: v9475,
            decimals: v9476,
            lptBals: v9487,
            name: v9478,
            poolBals: v9488,
            protoBals: v9480,
            protoInfo: v9481,
            symbol: v9482,
            tokA: v9483,
            tokB: v9484,
            totalSupply: v9485,
            zeroAddress: v9486
            };
          const v44808 = v9489;
          const v44810 = v4482;
          const v44811 = v9489.closed;
          if (v44811) {
            sim_r.isHalt = false;
            }
          else {
            const v44813 = v9489.lptBals;
            const v44814 = v44813.A;
            const v44815 = v44813.B;
            const v44816 = v9489.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v9380 = v9048[stdlib.checkedBigNumberify('./index.rsh:1214:12:spread', stdlib.UInt_max, '0')];
      const v9381 = v9048[stdlib.checkedBigNumberify('./index.rsh:1214:12:spread', stdlib.UInt_max, '1')];
      const v9382 = v9381.A;
      const v9383 = v9381.B;
      const v9385 = v4579.A;
      const v9386 = v4579.B;
      const v9390 = stdlib.safeMul256(v9380, v9385);
      const v9391 = stdlib.safeDiv256(v9390, v4576);
      const v9395 = stdlib.safeMul256(v9380, v9386);
      const v9396 = stdlib.safeDiv256(v9395, v4576);
      const v9398 = stdlib.le256(v9382, v9391);
      stdlib.assert(v9398, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1218:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage A',
        who: 'Provider_withdraw'
        });
      const v9400 = stdlib.le256(v9383, v9396);
      stdlib.assert(v9400, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1219:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage B',
        who: 'Provider_withdraw'
        });
      const v9405 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5172, ctc1), null);
      const v9406 = stdlib.fromSome(v9405, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9407 = stdlib.ge256(v9406, v9380);
      stdlib.assert(v9407, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:899:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1220:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'Provider_withdraw'
        });
      const v9409 = [v5172, v4456];
      const v9410 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v9409, ctc1), null);
      const v9411 = stdlib.fromSome(v9410, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9412 = stdlib.ge256(v9411, v9380);
      stdlib.assert(v9412, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:903:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1220:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'Provider_withdraw'
        });
      const v9420 = stdlib.safeSub256(v9406, v9380);
      await stdlib.mapSet(map0, ctc8, v5172, ctc1, v9420);
      const v9421 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4456, ctc1), null);
      const v9422 = stdlib.fromSome(v9421, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9423 = stdlib.safeAdd256(v9422, v9380);
      await stdlib.mapSet(map0, ctc8, v4456, ctc1, v9423);
      null;
      const v9428 = stdlib.safeSub256(v9411, v9380);
      await stdlib.mapSet(map1, ctc15, v9409, ctc1, v9428);
      null;
      const v9431 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5172, ctc1), null);
      const v9432 = stdlib.fromSome(v9431, stdlib.checkedBigNumberify('./index.rsh:1224:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9433 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5172, ctc1), null);
      const v9434 = stdlib.fromSome(v9433, stdlib.checkedBigNumberify('./index.rsh:1225:60:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9435 = stdlib.safeAdd256(v9432, v9391);
      await stdlib.mapSet(map2, ctc8, v5172, ctc1, v9435);
      const v9436 = stdlib.safeAdd256(v9434, v9396);
      await stdlib.mapSet(map3, ctc8, v5172, ctc1, v9436);
      const v9437 = {
        A: v9391,
        B: v9396
        };
      const v9438 = await txn1.getOutput('Provider_withdraw', 'v9437', ctc10, v9437);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v9048, v9438), {
          at: './index.rsh:1214:13:application',
          fs: ['at ./index.rsh:1214:13:application call to [unknown function] (defined at: ./index.rsh:1214:13:function exp)', 'at ./index.rsh:1228:14:application call to "k" (defined at: ./index.rsh:1222:15:function exp)', 'at ./index.rsh:1222:15:application call to [unknown function] (defined at: ./index.rsh:1222:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v9457 = stdlib.safeAdd256(v4575, v9380);
      const v9460 = stdlib.safeSub256(v4576, v9380);
      const v9467 = stdlib.safeSub256(v9385, v9391);
      const v9471 = stdlib.safeSub256(v9386, v9396);
      const v9474 = [v5172, v9437];
      null;
      const v9475 = v4478.closed;
      const v9476 = v4478.decimals;
      const v9478 = v4478.name;
      const v9480 = v4478.protoBals;
      const v9481 = v4478.protoInfo;
      const v9482 = v4478.symbol;
      const v9483 = v4478.tokA;
      const v9484 = v4478.tokB;
      const v9485 = v4478.totalSupply;
      const v9486 = v4478.zeroAddress;
      const v9487 = {
        A: v9457,
        B: v9460
        };
      const v9488 = {
        A: v9467,
        B: v9471
        };
      const v9489 = {
        closed: v9475,
        decimals: v9476,
        lptBals: v9487,
        name: v9478,
        poolBals: v9488,
        protoBals: v9480,
        protoInfo: v9481,
        symbol: v9482,
        tokA: v9483,
        tokB: v9484,
        totalSupply: v9485,
        zeroAddress: v9486
        };
      const v44808 = v9489;
      const v44810 = v4482;
      const v44811 = v9489.closed;
      if (v44811) {
        return;
        }
      else {
        const v44813 = v9489.lptBals;
        const v44814 = v44813.A;
        const v44815 = v44813.B;
        const v44816 = v9489.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc14,
    Provider_depositB0_471: ctc14,
    Provider_withdraw0_471: ctc17,
    Provider_withdrawA0_471: ctc14,
    Provider_withdrawB0_471: ctc14,
    Trader_exactSwapAForB0_471: ctc18,
    Trader_exactSwapBForA0_471: ctc18,
    Trader_swapAForB0_471: ctc18,
    Trader_swapBForA0_471: ctc18,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4805 = ctc.selfAddress();
  const v4807 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1178:40:application call to [unknown function] (defined at: ./index.rsh:1178:40:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdrawA0_471" (defined at: ./index.rsh:1178:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawA'
    });
  const v4808 = v4807[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4810 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v4805, ctc1), null);
  const v4811 = stdlib.fromSome(v4810, stdlib.checkedBigNumberify('./index.rsh:1179:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4812 = stdlib.ge256(v4811, v4808);
  stdlib.assert(v4812, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1180:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1178:40:application call to [unknown function] (defined at: ./index.rsh:1178:40:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdrawA0_471" (defined at: ./index.rsh:1178:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'Reserve A balances insufficient',
    who: 'Provider_withdrawA'
    });
  const v4819 = ['Provider_withdrawA0_471', v4807];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4819],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1178:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawA"
            });
          ;
          const v10463 = v10016[stdlib.checkedBigNumberify('./index.rsh:1178:12:spread', stdlib.UInt_max, '0')];
          const v10464 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5172, ctc1), null);
          const v10465 = stdlib.fromSome(v10464, stdlib.checkedBigNumberify('./index.rsh:1179:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v10469 = stdlib.safeSub256(v10465, v10463);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5172, ctc1, v10469);
          const v10470 = await txn1.getOutput('Provider_withdrawA', 'v10469', ctc1, v10469);
          
          const v10477 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v10478 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
          const v10482 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4411,
              remote: ({
                accs: [v5172],
                apps: [v4411],
                bills: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v10477], [ctc23, v10478]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1003:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v10483 = await txn1.getOutput('internal', 'v10482', ctc22, v10482);
          const v10485 = v10483[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
          const v10490 = stdlib.add(v4482, v10485);
          const v45048 = v4478;
          const v45050 = v10490;
          const v45051 = v4478.closed;
          if (v45051) {
            sim_r.isHalt = false;
            }
          else {
            const v45053 = v4478.lptBals;
            const v45054 = v45053.A;
            const v45055 = v45053.B;
            const v45056 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v10463 = v10016[stdlib.checkedBigNumberify('./index.rsh:1178:12:spread', stdlib.UInt_max, '0')];
      const v10464 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5172, ctc1), null);
      const v10465 = stdlib.fromSome(v10464, stdlib.checkedBigNumberify('./index.rsh:1179:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v10466 = stdlib.ge256(v10465, v10463);
      stdlib.assert(v10466, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1180:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1182:15:application call to [unknown function] (defined at: ./index.rsh:1182:15:function exp)'],
        msg: 'Reserve A balances insufficient',
        who: 'Provider_withdrawA'
        });
      const v10469 = stdlib.safeSub256(v10465, v10463);
      await stdlib.mapSet(map2, ctc8, v5172, ctc1, v10469);
      const v10470 = await txn1.getOutput('Provider_withdrawA', 'v10469', ctc1, v10469);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v10016, v10470), {
          at: './index.rsh:1178:13:application',
          fs: ['at ./index.rsh:1178:13:application call to [unknown function] (defined at: ./index.rsh:1178:13:function exp)', 'at ./index.rsh:1185:14:application call to "k" (defined at: ./index.rsh:1182:15:function exp)', 'at ./index.rsh:1182:15:application call to [unknown function] (defined at: ./index.rsh:1182:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawA'
          });
        }
      else {
        }
      
      const v10477 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v10478 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
      const v10482 = undefined /* Remote */;
      const v10483 = await txn1.getOutput('internal', 'v10482', ctc22, v10482);
      const v10485 = v10483[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
      const v10490 = stdlib.add(v4482, v10485);
      const v10491 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10485);
      stdlib.assert(v10491, {
        at: './index.rsh:1009:15:application',
        fs: ['at ./index.rsh:1186:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1182:15:application call to [unknown function] (defined at: ./index.rsh:1182:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawA'
        });
      const v45048 = v4478;
      const v45050 = v10490;
      const v45051 = v4478.closed;
      if (v45051) {
        return;
        }
      else {
        const v45053 = v4478.lptBals;
        const v45054 = v45053.A;
        const v45055 = v45053.B;
        const v45056 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc14,
    Provider_depositB0_471: ctc14,
    Provider_withdraw0_471: ctc17,
    Provider_withdrawA0_471: ctc14,
    Provider_withdrawB0_471: ctc14,
    Trader_exactSwapAForB0_471: ctc18,
    Trader_exactSwapBForA0_471: ctc18,
    Trader_swapAForB0_471: ctc18,
    Trader_swapBForA0_471: ctc18,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4821 = ctc.selfAddress();
  const v4823 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1196:40:application call to [unknown function] (defined at: ./index.rsh:1196:40:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdrawB0_471" (defined at: ./index.rsh:1196:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdrawB'
    });
  const v4824 = v4823[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4826 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v4821, ctc1), null);
  const v4827 = stdlib.fromSome(v4826, stdlib.checkedBigNumberify('./index.rsh:1197:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4828 = stdlib.ge256(v4827, v4824);
  stdlib.assert(v4828, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1198:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1196:40:application call to [unknown function] (defined at: ./index.rsh:1196:40:function exp)', 'at ./index.rsh:821:31:application call to "runProvider_withdrawB0_471" (defined at: ./index.rsh:1196:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'Reserve B balances insufficient',
    who: 'Provider_withdrawB'
    });
  const v4835 = ['Provider_withdrawB0_471', v4823];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4835],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1196:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdrawB"
            });
          ;
          const v11462 = v10984[stdlib.checkedBigNumberify('./index.rsh:1196:12:spread', stdlib.UInt_max, '0')];
          const v11463 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5172, ctc1), null);
          const v11464 = stdlib.fromSome(v11463, stdlib.checkedBigNumberify('./index.rsh:1197:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v11468 = stdlib.safeSub256(v11464, v11462);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5172, ctc1, v11468);
          const v11469 = await txn1.getOutput('Provider_withdrawB', 'v11468', ctc1, v11468);
          
          const v11476 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v11477 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
          const v11481 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4413,
              remote: ({
                accs: [v5172],
                apps: [v4413],
                bills: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v11476], [ctc23, v11477]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1003:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v11482 = await txn1.getOutput('internal', 'v11481', ctc22, v11481);
          const v11484 = v11482[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
          const v11489 = stdlib.add(v4482, v11484);
          const v45288 = v4478;
          const v45290 = v11489;
          const v45291 = v4478.closed;
          if (v45291) {
            sim_r.isHalt = false;
            }
          else {
            const v45293 = v4478.lptBals;
            const v45294 = v45293.A;
            const v45295 = v45293.B;
            const v45296 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v11462 = v10984[stdlib.checkedBigNumberify('./index.rsh:1196:12:spread', stdlib.UInt_max, '0')];
      const v11463 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5172, ctc1), null);
      const v11464 = stdlib.fromSome(v11463, stdlib.checkedBigNumberify('./index.rsh:1197:56:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11465 = stdlib.ge256(v11464, v11462);
      stdlib.assert(v11465, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1198:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1200:15:application call to [unknown function] (defined at: ./index.rsh:1200:15:function exp)'],
        msg: 'Reserve B balances insufficient',
        who: 'Provider_withdrawB'
        });
      const v11468 = stdlib.safeSub256(v11464, v11462);
      await stdlib.mapSet(map3, ctc8, v5172, ctc1, v11468);
      const v11469 = await txn1.getOutput('Provider_withdrawB', 'v11468', ctc1, v11468);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v10984, v11469), {
          at: './index.rsh:1196:13:application',
          fs: ['at ./index.rsh:1196:13:application call to [unknown function] (defined at: ./index.rsh:1196:13:function exp)', 'at ./index.rsh:1203:14:application call to "k" (defined at: ./index.rsh:1200:15:function exp)', 'at ./index.rsh:1200:15:application call to [unknown function] (defined at: ./index.rsh:1200:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdrawB'
          });
        }
      else {
        }
      
      const v11476 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v11477 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
      const v11481 = undefined /* Remote */;
      const v11482 = await txn1.getOutput('internal', 'v11481', ctc22, v11481);
      const v11484 = v11482[stdlib.checkedBigNumberify('./index.rsh:1009:15:application', stdlib.UInt_max, '0')];
      const v11489 = stdlib.add(v4482, v11484);
      const v11490 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11484);
      stdlib.assert(v11490, {
        at: './index.rsh:1009:15:application',
        fs: ['at ./index.rsh:1204:33:application call to [unknown function] (defined at: ./index.rsh:997:45:function exp)', 'at ./index.rsh:1200:15:application call to [unknown function] (defined at: ./index.rsh:1200:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdrawB'
        });
      const v45288 = v4478;
      const v45290 = v11489;
      const v45291 = v4478.closed;
      if (v45291) {
        return;
        }
      else {
        const v45293 = v4478.lptBals;
        const v45294 = v45293.A;
        const v45295 = v45293.B;
        const v45296 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc14,
    Trader_exactSwapBForA0_471: ctc14,
    Trader_swapAForB0_471: ctc14,
    Trader_swapBForA0_471: ctc14,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v5128 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1393:44:application call to [unknown function] (defined at: ./index.rsh:1393:44:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_exactSwapAForB0_471" (defined at: ./index.rsh:1393:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v5140 = ['Trader_exactSwapAForB0_471', v5128];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v5140],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1393:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          ;
          const v12466 = await txn1.getOutput('Trader_exactSwapAForB', 'v4474', ctc10, v4474);
          
          const v45528 = v4478;
          const v45530 = v4482;
          const v45531 = v4478.closed;
          if (v45531) {
            sim_r.isHalt = false;
            }
          else {
            const v45533 = v4478.lptBals;
            const v45534 = v45533.A;
            const v45535 = v45533.B;
            const v45536 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v12466 = await txn1.getOutput('Trader_exactSwapAForB', 'v4474', ctc10, v4474);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v11952, v12466), {
          at: './index.rsh:1393:13:application',
          fs: ['at ./index.rsh:1393:13:application call to [unknown function] (defined at: ./index.rsh:1393:13:function exp)', 'at ./index.rsh:1398:14:application call to "k" (defined at: ./index.rsh:1397:15:function exp)', 'at ./index.rsh:1397:15:application call to [unknown function] (defined at: ./index.rsh:1397:15:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v45528 = v4478;
      const v45530 = v4482;
      const v45531 = v4478.closed;
      if (v45531) {
        return;
        }
      else {
        const v45533 = v4478.lptBals;
        const v45534 = v45533.A;
        const v45535 = v45533.B;
        const v45536 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc14,
    Trader_exactSwapBForA0_471: ctc14,
    Trader_swapAForB0_471: ctc14,
    Trader_swapBForA0_471: ctc14,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v5144 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1404:44:application call to [unknown function] (defined at: ./index.rsh:1404:44:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_exactSwapBForA0_471" (defined at: ./index.rsh:1404:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v5156 = ['Trader_exactSwapBForA0_471', v5144];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v5156],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1404:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          ;
          const v13450 = await txn1.getOutput('Trader_exactSwapBForA', 'v4474', ctc10, v4474);
          
          const v45768 = v4478;
          const v45770 = v4482;
          const v45771 = v4478.closed;
          if (v45771) {
            sim_r.isHalt = false;
            }
          else {
            const v45773 = v4478.lptBals;
            const v45774 = v45773.A;
            const v45775 = v45773.B;
            const v45776 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v13450 = await txn1.getOutput('Trader_exactSwapBForA', 'v4474', ctc10, v4474);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v12920, v13450), {
          at: './index.rsh:1404:13:application',
          fs: ['at ./index.rsh:1404:13:application call to [unknown function] (defined at: ./index.rsh:1404:13:function exp)', 'at ./index.rsh:1409:14:application call to "k" (defined at: ./index.rsh:1408:15:function exp)', 'at ./index.rsh:1408:15:application call to [unknown function] (defined at: ./index.rsh:1408:15:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v45768 = v4478;
      const v45770 = v4482;
      const v45771 = v4478.closed;
      if (v45771) {
        return;
        }
      else {
        const v45773 = v4478.lptBals;
        const v45774 = v45773.A;
        const v45775 = v45773.B;
        const v45776 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc14,
    Trader_exactSwapBForA0_471: ctc14,
    Trader_swapAForB0_471: ctc14,
    Trader_swapBForA0_471: ctc14,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4891 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1383:39:application call to [unknown function] (defined at: ./index.rsh:1383:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapAForB0_471" (defined at: ./index.rsh:1383:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v4892 = v4891[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4893 = v4891[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4899 = v4478.protoInfo;
  const v4901 = v4579.A;
  const v4902 = v4579.B;
  const v4903 = v4899.protoFee;
  const v4904 = v4899.totFee;
  const v4905 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v4904);
  const v4906 = stdlib.safeMul256(v4892, v4905);
  const v4907 = stdlib.safeMul256(v4901, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v4908 = stdlib.safeAdd256(v4907, v4906);
  const v4909 = stdlib.safeMul256(v4906, v4902);
  const v4910 = stdlib.safeDiv256(v4909, v4908);
  const v4914 = stdlib.safeMul256(v4903, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4915 = stdlib.safeDiv256(v4914, v4904);
  const v4919 = stdlib.safeAdd256(v4901, v4892);
  const v4923 = stdlib.safeMul256(v4892, v4902);
  const v4924 = stdlib.safeDiv256(v4923, v4919);
  const v4925 = stdlib.safeSub256(v4924, v4910);
  const v4927 = stdlib.safeMul256(v4925, v4915);
  const v4928 = stdlib.safeDiv256(v4927, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v4929 = stdlib.safeMul256(v4892, v4903);
  const v4930 = stdlib.safeDiv256(v4929, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v4934 = stdlib.safeMul256(v4930, v4902);
  const v4935 = stdlib.safeDiv256(v4934, v4919);
  const v4936 = stdlib.gt256(v4935, v4928);
  const v4937 = [v4930, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v4938 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v4928];
  const v4939 = v4936 ? v4937 : v4938;
  const v4941 = v4939[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '0')];
  const v4942 = v4939[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '1')];
  const v4947 = v4899.locked;
  const v4948 = v4947 ? false : true;
  stdlib.assert(v4948, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1265:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1383:39:application call to [unknown function] (defined at: ./index.rsh:1383:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapAForB0_471" (defined at: ./index.rsh:1383:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v4965 = stdlib.safeSub256(v4902, v4910);
  const v4969 = stdlib.safeSub256(v4919, v4941);
  const v4972 = stdlib.safeSub256(v4965, v4942);
  const v4986 = stdlib.le256(v4893, v4910);
  stdlib.assert(v4986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1284:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1383:39:application call to [unknown function] (defined at: ./index.rsh:1383:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapAForB0_471" (defined at: ./index.rsh:1383:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v4991 = stdlib.safeMul256(v4901, v4902);
  const v4992 = stdlib.safeMul256(v4969, v4972);
  const v4993 = stdlib.ge256(v4992, v4991);
  stdlib.assert(v4993, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1294:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1383:39:application call to [unknown function] (defined at: ./index.rsh:1383:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapAForB0_471" (defined at: ./index.rsh:1383:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v5005 = ['Trader_swapAForB0_471', v4891];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v5005],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1383:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          ;
          const v14429 = v13888[stdlib.checkedBigNumberify('./index.rsh:1383:12:spread', stdlib.UInt_max, '0')];
          const v14434 = v4478.protoInfo;
          const v14436 = v4579.A;
          const v14437 = v4579.B;
          const v14438 = v14434.protoFee;
          const v14439 = v14434.totFee;
          const v14440 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14439);
          const v14441 = stdlib.safeMul256(v14429, v14440);
          const v14442 = stdlib.safeMul256(v14436, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v14443 = stdlib.safeAdd256(v14442, v14441);
          const v14444 = stdlib.safeMul256(v14441, v14437);
          const v14445 = stdlib.safeDiv256(v14444, v14443);
          const v14449 = stdlib.safeMul256(v14438, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v14450 = stdlib.safeDiv256(v14449, v14439);
          const v14454 = stdlib.safeAdd256(v14436, v14429);
          const v14458 = stdlib.safeMul256(v14429, v14437);
          const v14459 = stdlib.safeDiv256(v14458, v14454);
          const v14460 = stdlib.safeSub256(v14459, v14445);
          const v14462 = stdlib.safeMul256(v14460, v14450);
          const v14463 = stdlib.safeDiv256(v14462, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v14464 = stdlib.safeMul256(v14429, v14438);
          const v14465 = stdlib.safeDiv256(v14464, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v14469 = stdlib.safeMul256(v14465, v14437);
          const v14470 = stdlib.safeDiv256(v14469, v14454);
          const v14471 = stdlib.gt256(v14470, v14463);
          const v14472 = [v14465, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v14473 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14463];
          const v14474 = v14471 ? v14472 : v14473;
          const v14476 = v14474[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '0')];
          const v14477 = v14474[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '1')];
          const v14500 = stdlib.safeSub256(v14437, v14445);
          const v14504 = stdlib.safeSub256(v14454, v14476);
          const v14507 = stdlib.safeSub256(v14500, v14477);
          const v14509 = v4478.protoBals;
          const v14510 = v14509.A;
          const v14514 = stdlib.safeAdd256(v14510, v14476);
          const v14515 = v14509.B;
          const v14519 = stdlib.safeAdd256(v14515, v14477);
          const v14537 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
          const v14538 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v14539 = [v5172, v4456];
          const v14540 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v14539];
          const v14544 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4411,
              remote: ({
                accs: [v5172, v4456],
                apps: [v4411],
                bills: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v14537], [ctc23, v14538], [ctc25, v14540]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1017:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v14545 = await txn1.getOutput('internal', 'v14544', ctc22, v14544);
          const v14547 = v14545[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
          const v14552 = stdlib.add(v4482, v14547);
          const v14554 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5172, ctc1), null);
          const v14555 = stdlib.fromSome(v14554, stdlib.checkedBigNumberify('./index.rsh:1334:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v14556 = stdlib.safeAdd256(v14555, v14445);
          await stdlib.simMapSet(sim_r, 3, ctc8, v5172, ctc1, v14556);
          const v14557 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5172, ctc1), null);
          const v14558 = stdlib.fromSome(v14557, stdlib.checkedBigNumberify('./index.rsh:1336:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.simMapSet(sim_r, 2, ctc8, v5172, ctc1, v14558);
          const v14559 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v14445
            };
          const v14560 = await txn1.getOutput('Trader_swapAForB', 'v14559', ctc10, v14559);
          
          const v14569 = {
            A: v14429,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v14571 = {
            A: v14504,
            B: v14507
            };
          const v14572 = [v5172, v14569, v14559, v14571];
          const v14573 = ['SwapEvent', v14572];
          null;
          const v14574 = v4478.closed;
          const v14575 = v4478.decimals;
          const v14577 = v4478.name;
          const v14581 = v4478.symbol;
          const v14582 = v4478.tokA;
          const v14583 = v4478.tokB;
          const v14584 = v4478.totalSupply;
          const v14585 = v4478.zeroAddress;
          const v14587 = {
            A: v14514,
            B: v14519
            };
          const v14588 = {
            closed: v14574,
            decimals: v14575,
            lptBals: v4574,
            name: v14577,
            poolBals: v14571,
            protoBals: v14587,
            protoInfo: v14434,
            symbol: v14581,
            tokA: v14582,
            tokB: v14583,
            totalSupply: v14584,
            zeroAddress: v14585
            };
          const v46008 = v14588;
          const v46010 = v14552;
          const v46011 = v14588.closed;
          if (v46011) {
            sim_r.isHalt = false;
            }
          else {
            const v46013 = v14588.lptBals;
            const v46014 = v46013.A;
            const v46015 = v46013.B;
            const v46016 = v14588.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v14429 = v13888[stdlib.checkedBigNumberify('./index.rsh:1383:12:spread', stdlib.UInt_max, '0')];
      const v14430 = v13888[stdlib.checkedBigNumberify('./index.rsh:1383:12:spread', stdlib.UInt_max, '1')];
      const v14434 = v4478.protoInfo;
      const v14436 = v4579.A;
      const v14437 = v4579.B;
      const v14438 = v14434.protoFee;
      const v14439 = v14434.totFee;
      const v14440 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14439);
      const v14441 = stdlib.safeMul256(v14429, v14440);
      const v14442 = stdlib.safeMul256(v14436, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v14443 = stdlib.safeAdd256(v14442, v14441);
      const v14444 = stdlib.safeMul256(v14441, v14437);
      const v14445 = stdlib.safeDiv256(v14444, v14443);
      const v14449 = stdlib.safeMul256(v14438, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v14450 = stdlib.safeDiv256(v14449, v14439);
      const v14454 = stdlib.safeAdd256(v14436, v14429);
      const v14458 = stdlib.safeMul256(v14429, v14437);
      const v14459 = stdlib.safeDiv256(v14458, v14454);
      const v14460 = stdlib.safeSub256(v14459, v14445);
      const v14462 = stdlib.safeMul256(v14460, v14450);
      const v14463 = stdlib.safeDiv256(v14462, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v14464 = stdlib.safeMul256(v14429, v14438);
      const v14465 = stdlib.safeDiv256(v14464, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v14469 = stdlib.safeMul256(v14465, v14437);
      const v14470 = stdlib.safeDiv256(v14469, v14454);
      const v14471 = stdlib.gt256(v14470, v14463);
      const v14472 = [v14465, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v14473 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14463];
      const v14474 = v14471 ? v14472 : v14473;
      const v14476 = v14474[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '0')];
      const v14477 = v14474[stdlib.checkedBigNumberify('./index.rsh:254:29:array', stdlib.UInt_max, '1')];
      const v14482 = v14434.locked;
      const v14483 = v14482 ? false : true;
      stdlib.assert(v14483, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1265:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v14500 = stdlib.safeSub256(v14437, v14445);
      const v14504 = stdlib.safeSub256(v14454, v14476);
      const v14507 = stdlib.safeSub256(v14500, v14477);
      const v14509 = v4478.protoBals;
      const v14510 = v14509.A;
      const v14514 = stdlib.safeAdd256(v14510, v14476);
      const v14515 = v14509.B;
      const v14519 = stdlib.safeAdd256(v14515, v14477);
      const v14521 = stdlib.le256(v14430, v14445);
      stdlib.assert(v14521, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1284:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v14526 = stdlib.safeMul256(v14436, v14437);
      const v14527 = stdlib.safeMul256(v14504, v14507);
      const v14528 = stdlib.ge256(v14527, v14526);
      stdlib.assert(v14528, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1294:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1384:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      const v14537 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
      const v14538 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v14539 = [v5172, v4456];
      const v14540 = [v4411, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v14539];
      const v14544 = undefined /* Remote */;
      const v14545 = await txn1.getOutput('internal', 'v14544', ctc22, v14544);
      const v14547 = v14545[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
      const v14552 = stdlib.add(v4482, v14547);
      const v14553 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14547);
      stdlib.assert(v14553, {
        at: './index.rsh:1024:15:application',
        fs: ['at ./index.rsh:1332:39:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1385:25:application call to "c" (defined at: ./index.rsh:1329:22:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapAForB'
        });
      const v14554 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5172, ctc1), null);
      const v14555 = stdlib.fromSome(v14554, stdlib.checkedBigNumberify('./index.rsh:1334:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v14556 = stdlib.safeAdd256(v14555, v14445);
      await stdlib.mapSet(map3, ctc8, v5172, ctc1, v14556);
      const v14557 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5172, ctc1), null);
      const v14558 = stdlib.fromSome(v14557, stdlib.checkedBigNumberify('./index.rsh:1336:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      await stdlib.mapSet(map2, ctc8, v5172, ctc1, v14558);
      const v14559 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v14445
        };
      const v14560 = await txn1.getOutput('Trader_swapAForB', 'v14559', ctc10, v14559);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v13888, v14560), {
          at: './index.rsh:1383:13:application',
          fs: ['at ./index.rsh:1383:13:application call to [unknown function] (defined at: ./index.rsh:1383:13:function exp)', 'at ./index.rsh:1345:14:application call to "k" (defined at: ./index.rsh:1385:21:function exp)', 'at ./index.rsh:1385:25:application call to "c" (defined at: ./index.rsh:1329:22:function exp)', 'at ./index.rsh:1385:21:application call to [unknown function] (defined at: ./index.rsh:1385:21:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v14569 = {
        A: v14429,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v14571 = {
        A: v14504,
        B: v14507
        };
      const v14572 = [v5172, v14569, v14559, v14571];
      const v14573 = ['SwapEvent', v14572];
      null;
      const v14574 = v4478.closed;
      const v14575 = v4478.decimals;
      const v14577 = v4478.name;
      const v14581 = v4478.symbol;
      const v14582 = v4478.tokA;
      const v14583 = v4478.tokB;
      const v14584 = v4478.totalSupply;
      const v14585 = v4478.zeroAddress;
      const v14587 = {
        A: v14514,
        B: v14519
        };
      const v14588 = {
        closed: v14574,
        decimals: v14575,
        lptBals: v4574,
        name: v14577,
        poolBals: v14571,
        protoBals: v14587,
        protoInfo: v14434,
        symbol: v14581,
        tokA: v14582,
        tokB: v14583,
        totalSupply: v14584,
        zeroAddress: v14585
        };
      const v46008 = v14588;
      const v46010 = v14552;
      const v46011 = v14588.closed;
      if (v46011) {
        return;
        }
      else {
        const v46013 = v14588.lptBals;
        const v46014 = v46013.A;
        const v46015 = v46013.B;
        const v46016 = v14588.poolBals;
        return;
        }
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc14,
    Trader_exactSwapBForA0_471: ctc14,
    Trader_swapAForB0_471: ctc14,
    Trader_swapBForA0_471: ctc14,
    arc200_approve0_471: ctc19,
    arc200_transfer0_471: ctc19,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v5009 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1388:39:application call to [unknown function] (defined at: ./index.rsh:1388:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapBForA0_471" (defined at: ./index.rsh:1388:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v5010 = v5009[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v5011 = v5009[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v5017 = v4478.protoInfo;
  const v5019 = v4579.B;
  const v5020 = v4579.A;
  const v5021 = v5017.protoFee;
  const v5022 = v5017.totFee;
  const v5023 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v5022);
  const v5024 = stdlib.safeMul256(v5010, v5023);
  const v5025 = stdlib.safeMul256(v5019, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v5026 = stdlib.safeAdd256(v5025, v5024);
  const v5027 = stdlib.safeMul256(v5024, v5020);
  const v5028 = stdlib.safeDiv256(v5027, v5026);
  const v5032 = stdlib.safeMul256(v5021, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v5033 = stdlib.safeDiv256(v5032, v5022);
  const v5037 = stdlib.safeAdd256(v5019, v5010);
  const v5041 = stdlib.safeMul256(v5010, v5020);
  const v5042 = stdlib.safeDiv256(v5041, v5037);
  const v5043 = stdlib.safeSub256(v5042, v5028);
  const v5045 = stdlib.safeMul256(v5043, v5033);
  const v5046 = stdlib.safeDiv256(v5045, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v5047 = stdlib.safeMul256(v5010, v5021);
  const v5048 = stdlib.safeDiv256(v5047, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v5052 = stdlib.safeMul256(v5048, v5020);
  const v5053 = stdlib.safeDiv256(v5052, v5037);
  const v5054 = stdlib.gt256(v5053, v5046);
  const v5055 = [v5048, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v5056 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v5046];
  const v5057 = v5054 ? v5055 : v5056;
  const v5059 = v5057[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '0')];
  const v5060 = v5057[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '1')];
  const v5065 = v5017.locked;
  const v5066 = v5065 ? false : true;
  stdlib.assert(v5066, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1265:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1388:39:application call to [unknown function] (defined at: ./index.rsh:1388:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapBForA0_471" (defined at: ./index.rsh:1388:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v5081 = stdlib.safeSub256(v5020, v5028);
  const v5087 = stdlib.safeSub256(v5081, v5060);
  const v5090 = stdlib.safeSub256(v5037, v5059);
  const v5104 = stdlib.le256(v5011, v5028);
  stdlib.assert(v5104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1284:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1388:39:application call to [unknown function] (defined at: ./index.rsh:1388:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapBForA0_471" (defined at: ./index.rsh:1388:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v5110 = stdlib.safeMul256(v5020, v5019);
  const v5111 = stdlib.safeMul256(v5087, v5090);
  const v5112 = stdlib.ge256(v5111, v5110);
  stdlib.assert(v5112, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1294:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1388:39:application call to [unknown function] (defined at: ./index.rsh:1388:39:function exp)', 'at ./index.rsh:821:31:application call to "runTrader_swapBForA0_471" (defined at: ./index.rsh:1388:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v5124 = ['Trader_swapBForA0_471', v5009];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v5124],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1388:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          ;
          const v15566 = v14856[stdlib.checkedBigNumberify('./index.rsh:1388:12:spread', stdlib.UInt_max, '0')];
          const v15571 = v4478.protoInfo;
          const v15573 = v4579.B;
          const v15574 = v4579.A;
          const v15575 = v15571.protoFee;
          const v15576 = v15571.totFee;
          const v15577 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15576);
          const v15578 = stdlib.safeMul256(v15566, v15577);
          const v15579 = stdlib.safeMul256(v15573, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v15580 = stdlib.safeAdd256(v15579, v15578);
          const v15581 = stdlib.safeMul256(v15578, v15574);
          const v15582 = stdlib.safeDiv256(v15581, v15580);
          const v15586 = stdlib.safeMul256(v15575, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v15587 = stdlib.safeDiv256(v15586, v15576);
          const v15591 = stdlib.safeAdd256(v15573, v15566);
          const v15595 = stdlib.safeMul256(v15566, v15574);
          const v15596 = stdlib.safeDiv256(v15595, v15591);
          const v15597 = stdlib.safeSub256(v15596, v15582);
          const v15599 = stdlib.safeMul256(v15597, v15587);
          const v15600 = stdlib.safeDiv256(v15599, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v15601 = stdlib.safeMul256(v15566, v15575);
          const v15602 = stdlib.safeDiv256(v15601, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v15606 = stdlib.safeMul256(v15602, v15574);
          const v15607 = stdlib.safeDiv256(v15606, v15591);
          const v15608 = stdlib.gt256(v15607, v15600);
          const v15609 = [v15602, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v15610 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15600];
          const v15611 = v15608 ? v15609 : v15610;
          const v15613 = v15611[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '0')];
          const v15614 = v15611[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '1')];
          const v15635 = stdlib.safeSub256(v15574, v15582);
          const v15641 = stdlib.safeSub256(v15635, v15614);
          const v15644 = stdlib.safeSub256(v15591, v15613);
          const v15646 = v4478.protoBals;
          const v15647 = v15646.A;
          const v15651 = stdlib.safeAdd256(v15647, v15614);
          const v15652 = v15646.B;
          const v15656 = stdlib.safeAdd256(v15652, v15613);
          const v15675 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
          const v15676 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
          const v15677 = [v5172, v4456];
          const v15678 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v15677];
          const v15682 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4413,
              remote: ({
                accs: [v5172, v4456],
                apps: [v4413],
                bills: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc23, v15675], [ctc23, v15676], [ctc25, v15678]],
                fees: stdlib.checkedBigNumberify('./index.rsh:1017:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v15683 = await txn1.getOutput('internal', 'v15682', ctc22, v15682);
          const v15685 = v15683[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
          const v15690 = stdlib.add(v4482, v15685);
          const v15692 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc8, v5172, ctc1), null);
          const v15693 = stdlib.fromSome(v15692, stdlib.checkedBigNumberify('./index.rsh:1340:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v15694 = stdlib.safeAdd256(v15693, v15582);
          await stdlib.simMapSet(sim_r, 2, ctc8, v5172, ctc1, v15694);
          const v15695 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc8, v5172, ctc1), null);
          const v15696 = stdlib.fromSome(v15695, stdlib.checkedBigNumberify('./index.rsh:1342:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          await stdlib.simMapSet(sim_r, 3, ctc8, v5172, ctc1, v15696);
          const v15697 = {
            A: v15582,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v15698 = await txn1.getOutput('Trader_swapBForA', 'v15697', ctc10, v15697);
          
          const v15707 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v15566
            };
          const v15709 = {
            A: v15641,
            B: v15644
            };
          const v15710 = [v5172, v15707, v15697, v15709];
          const v15711 = ['SwapEvent', v15710];
          null;
          const v15712 = v4478.closed;
          const v15713 = v4478.decimals;
          const v15715 = v4478.name;
          const v15719 = v4478.symbol;
          const v15720 = v4478.tokA;
          const v15721 = v4478.tokB;
          const v15722 = v4478.totalSupply;
          const v15723 = v4478.zeroAddress;
          const v15725 = {
            A: v15651,
            B: v15656
            };
          const v15726 = {
            closed: v15712,
            decimals: v15713,
            lptBals: v4574,
            name: v15715,
            poolBals: v15709,
            protoBals: v15725,
            protoInfo: v15571,
            symbol: v15719,
            tokA: v15720,
            tokB: v15721,
            totalSupply: v15722,
            zeroAddress: v15723
            };
          const v46248 = v15726;
          const v46250 = v15690;
          const v46251 = v15726.closed;
          if (v46251) {
            sim_r.isHalt = false;
            }
          else {
            const v46253 = v15726.lptBals;
            const v46254 = v46253.A;
            const v46255 = v46253.B;
            const v46256 = v15726.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v15566 = v14856[stdlib.checkedBigNumberify('./index.rsh:1388:12:spread', stdlib.UInt_max, '0')];
      const v15567 = v14856[stdlib.checkedBigNumberify('./index.rsh:1388:12:spread', stdlib.UInt_max, '1')];
      const v15571 = v4478.protoInfo;
      const v15573 = v4579.B;
      const v15574 = v4579.A;
      const v15575 = v15571.protoFee;
      const v15576 = v15571.totFee;
      const v15577 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15576);
      const v15578 = stdlib.safeMul256(v15566, v15577);
      const v15579 = stdlib.safeMul256(v15573, stdlib.checkedBigNumberify('./index.rsh:17:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v15580 = stdlib.safeAdd256(v15579, v15578);
      const v15581 = stdlib.safeMul256(v15578, v15574);
      const v15582 = stdlib.safeDiv256(v15581, v15580);
      const v15586 = stdlib.safeMul256(v15575, stdlib.checkedBigNumberify('./index.rsh:186:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v15587 = stdlib.safeDiv256(v15586, v15576);
      const v15591 = stdlib.safeAdd256(v15573, v15566);
      const v15595 = stdlib.safeMul256(v15566, v15574);
      const v15596 = stdlib.safeDiv256(v15595, v15591);
      const v15597 = stdlib.safeSub256(v15596, v15582);
      const v15599 = stdlib.safeMul256(v15597, v15587);
      const v15600 = stdlib.safeDiv256(v15599, stdlib.checkedBigNumberify('./index.rsh:192:70:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v15601 = stdlib.safeMul256(v15566, v15575);
      const v15602 = stdlib.safeDiv256(v15601, stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v15606 = stdlib.safeMul256(v15602, v15574);
      const v15607 = stdlib.safeDiv256(v15606, v15591);
      const v15608 = stdlib.gt256(v15607, v15600);
      const v15609 = [v15602, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v15610 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15600];
      const v15611 = v15608 ? v15609 : v15610;
      const v15613 = v15611[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '0')];
      const v15614 = v15611[stdlib.checkedBigNumberify('./index.rsh:270:29:array', stdlib.UInt_max, '1')];
      const v15619 = v15571.locked;
      const v15620 = v15619 ? false : true;
      stdlib.assert(v15620, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1265:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v15635 = stdlib.safeSub256(v15574, v15582);
      const v15641 = stdlib.safeSub256(v15635, v15614);
      const v15644 = stdlib.safeSub256(v15591, v15613);
      const v15646 = v4478.protoBals;
      const v15647 = v15646.A;
      const v15651 = stdlib.safeAdd256(v15647, v15614);
      const v15652 = v15646.B;
      const v15656 = stdlib.safeAdd256(v15652, v15613);
      const v15658 = stdlib.le256(v15567, v15582);
      stdlib.assert(v15658, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1284:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v15664 = stdlib.safeMul256(v15574, v15573);
      const v15665 = stdlib.safeMul256(v15641, v15644);
      const v15666 = stdlib.ge256(v15665, v15664);
      stdlib.assert(v15666, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1294:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1323:51:application call to "calcSwap" (defined at: ./index.rsh:1264:73:function exp)', 'at ./index.rsh:1389:25:application call to "doSwap" (defined at: ./index.rsh:1310:70:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      const v15675 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5172];
      const v15676 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4456];
      const v15677 = [v5172, v4456];
      const v15678 = [v4413, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v15677];
      const v15682 = undefined /* Remote */;
      const v15683 = await txn1.getOutput('internal', 'v15682', ctc22, v15682);
      const v15685 = v15683[stdlib.checkedBigNumberify('./index.rsh:1024:15:application', stdlib.UInt_max, '0')];
      const v15690 = stdlib.add(v4482, v15685);
      const v15691 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v15685);
      stdlib.assert(v15691, {
        at: './index.rsh:1024:15:application',
        fs: ['at ./index.rsh:1338:39:application call to [unknown function] (defined at: ./index.rsh:1011:56:function exp)', 'at ./index.rsh:1390:25:application call to "c" (defined at: ./index.rsh:1329:22:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapBForA'
        });
      const v15692 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v5172, ctc1), null);
      const v15693 = stdlib.fromSome(v15692, stdlib.checkedBigNumberify('./index.rsh:1340:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v15694 = stdlib.safeAdd256(v15693, v15582);
      await stdlib.mapSet(map2, ctc8, v5172, ctc1, v15694);
      const v15695 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v5172, ctc1), null);
      const v15696 = stdlib.fromSome(v15695, stdlib.checkedBigNumberify('./index.rsh:1342:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      await stdlib.mapSet(map3, ctc8, v5172, ctc1, v15696);
      const v15697 = {
        A: v15582,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v15698 = await txn1.getOutput('Trader_swapBForA', 'v15697', ctc10, v15697);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v14856, v15698), {
          at: './index.rsh:1388:13:application',
          fs: ['at ./index.rsh:1388:13:application call to [unknown function] (defined at: ./index.rsh:1388:13:function exp)', 'at ./index.rsh:1345:14:application call to "k" (defined at: ./index.rsh:1390:21:function exp)', 'at ./index.rsh:1390:25:application call to "c" (defined at: ./index.rsh:1329:22:function exp)', 'at ./index.rsh:1390:21:application call to [unknown function] (defined at: ./index.rsh:1390:21:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v15707 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v15566
        };
      const v15709 = {
        A: v15641,
        B: v15644
        };
      const v15710 = [v5172, v15707, v15697, v15709];
      const v15711 = ['SwapEvent', v15710];
      null;
      const v15712 = v4478.closed;
      const v15713 = v4478.decimals;
      const v15715 = v4478.name;
      const v15719 = v4478.symbol;
      const v15720 = v4478.tokA;
      const v15721 = v4478.tokB;
      const v15722 = v4478.totalSupply;
      const v15723 = v4478.zeroAddress;
      const v15725 = {
        A: v15651,
        B: v15656
        };
      const v15726 = {
        closed: v15712,
        decimals: v15713,
        lptBals: v4574,
        name: v15715,
        poolBals: v15709,
        protoBals: v15725,
        protoInfo: v15571,
        symbol: v15719,
        tokA: v15720,
        tokB: v15721,
        totalSupply: v15722,
        zeroAddress: v15723
        };
      const v46248 = v15726;
      const v46250 = v15690;
      const v46251 = v15726.closed;
      if (v46251) {
        return;
        }
      else {
        const v46253 = v15726.lptBals;
        const v46254 = v46253.A;
        const v46255 = v46253.B;
        const v46256 = v15726.poolBals;
        return;
        }
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_approve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_approve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_approve4 expects to receive an interact object as its second argument.`));}
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc19,
    Trader_exactSwapBForA0_471: ctc19,
    Trader_swapAForB0_471: ctc19,
    Trader_swapBForA0_471: ctc19,
    arc200_approve0_471: ctc14,
    arc200_transfer0_471: ctc14,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4632 = ctc.selfAddress();
  const v4634 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:944:51:application call to [unknown function] (defined at: ./index.rsh:944:51:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_approve0_471" (defined at: ./index.rsh:944:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v4635 = v4634[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4640 = stdlib.addressEq(v4632, v4423);
  const v4641 = v4640 ? false : true;
  stdlib.assert(v4641, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:891:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:945:20:application call to "chkApprove_" (defined at: ./index.rsh:890:56:function exp)', 'at ./index.rsh:944:51:application call to [unknown function] (defined at: ./index.rsh:944:51:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_approve0_471" (defined at: ./index.rsh:944:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v4643 = stdlib.addressEq(v4635, v4423);
  const v4644 = v4643 ? false : true;
  stdlib.assert(v4644, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:892:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:945:20:application call to "chkApprove_" (defined at: ./index.rsh:890:56:function exp)', 'at ./index.rsh:944:51:application call to [unknown function] (defined at: ./index.rsh:944:51:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_approve0_471" (defined at: ./index.rsh:944:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v4653 = ['arc200_approve0_471', v4634];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4653],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:944:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v16704 = v15824[stdlib.checkedBigNumberify('./index.rsh:944:12:spread', stdlib.UInt_max, '0')];
          const v16705 = v15824[stdlib.checkedBigNumberify('./index.rsh:944:12:spread', stdlib.UInt_max, '1')];
          const v16715 = [v5172, v16704];
          await stdlib.simMapSet(sim_r, 1, ctc22, v16715, ctc1, v16705);
          null;
          const v16717 = true;
          const v16718 = await txn1.getOutput('arc200_approve', 'v16717', ctc11, v16717);
          
          const v46488 = v4478;
          const v46490 = v4482;
          const v46491 = v4478.closed;
          if (v46491) {
            sim_r.isHalt = false;
            }
          else {
            const v46493 = v4478.lptBals;
            const v46494 = v46493.A;
            const v46495 = v46493.B;
            const v46496 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v16704 = v15824[stdlib.checkedBigNumberify('./index.rsh:944:12:spread', stdlib.UInt_max, '0')];
      const v16705 = v15824[stdlib.checkedBigNumberify('./index.rsh:944:12:spread', stdlib.UInt_max, '1')];
      const v16707 = stdlib.addressEq(v5172, v4423);
      const v16708 = v16707 ? false : true;
      stdlib.assert(v16708, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:891:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:945:20:application call to "chkApprove_" (defined at: ./index.rsh:890:56:function exp)', 'at ./index.rsh:947:15:application call to [unknown function] (defined at: ./index.rsh:947:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v16710 = stdlib.addressEq(v16704, v4423);
      const v16711 = v16710 ? false : true;
      stdlib.assert(v16711, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:892:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:945:20:application call to "chkApprove_" (defined at: ./index.rsh:890:56:function exp)', 'at ./index.rsh:947:15:application call to [unknown function] (defined at: ./index.rsh:947:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v16715 = [v5172, v16704];
      await stdlib.mapSet(map1, ctc22, v16715, ctc1, v16705);
      null;
      const v16717 = true;
      const v16718 = await txn1.getOutput('arc200_approve', 'v16717', ctc11, v16717);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v15824, v16718), {
          at: './index.rsh:944:13:application',
          fs: ['at ./index.rsh:944:13:application call to [unknown function] (defined at: ./index.rsh:944:13:function exp)', 'at ./index.rsh:949:14:application call to "k" (defined at: ./index.rsh:947:15:function exp)', 'at ./index.rsh:947:15:application call to [unknown function] (defined at: ./index.rsh:947:15:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v46488 = v4478;
      const v46490 = v4482;
      const v46491 = v4478.closed;
      if (v46491) {
        return;
        }
      else {
        const v46493 = v4478.lptBals;
        const v46494 = v46493.A;
        const v46495 = v46493.B;
        const v46496 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer4 expects to receive an interact object as its second argument.`));}
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
    Protocol_harvest0_471: ctc15,
    Provider_deposit0_471: ctc16,
    Provider_depositA0_471: ctc17,
    Provider_depositB0_471: ctc17,
    Provider_withdraw0_471: ctc18,
    Provider_withdrawA0_471: ctc17,
    Provider_withdrawB0_471: ctc17,
    Trader_exactSwapAForB0_471: ctc19,
    Trader_exactSwapBForA0_471: ctc19,
    Trader_swapAForB0_471: ctc19,
    Trader_swapBForA0_471: ctc19,
    arc200_approve0_471: ctc14,
    arc200_transfer0_471: ctc14,
    arc200_transferFrom0_471: ctc20
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4581 = ctc.selfAddress();
  const v4583 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:918:47:application call to [unknown function] (defined at: ./index.rsh:918:47:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_transfer0_471" (defined at: ./index.rsh:918:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v4585 = v4583[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v4589 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4581, ctc1), null);
  const v4590 = stdlib.fromSome(v4589, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4591 = stdlib.ge256(v4590, v4585);
  stdlib.assert(v4591, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:885:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:919:22:application call to "checkTransfer" (defined at: ./index.rsh:884:52:function exp)', 'at ./index.rsh:918:47:application call to [unknown function] (defined at: ./index.rsh:918:47:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_transfer0_471" (defined at: ./index.rsh:918:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v4600 = ['arc200_transfer0_471', v4583];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4600],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./index.rsh:918:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v17695 = v16792[stdlib.checkedBigNumberify('./index.rsh:918:12:spread', stdlib.UInt_max, '0')];
          const v17696 = v16792[stdlib.checkedBigNumberify('./index.rsh:918:12:spread', stdlib.UInt_max, '1')];
          const v17698 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v5172, ctc1), null);
          const v17699 = stdlib.fromSome(v17698, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v17704 = true;
          const v17705 = await txn1.getOutput('arc200_transfer', 'v17704', ctc11, v17704);
          
          const v17714 = stdlib.safeSub256(v17699, v17696);
          await stdlib.simMapSet(sim_r, 0, ctc8, v5172, ctc1, v17714);
          const v17715 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v17695, ctc1), null);
          const v17716 = stdlib.fromSome(v17715, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v17717 = stdlib.safeAdd256(v17716, v17696);
          await stdlib.simMapSet(sim_r, 0, ctc8, v17695, ctc1, v17717);
          null;
          const v46728 = v4478;
          const v46730 = v4482;
          const v46731 = v4478.closed;
          if (v46731) {
            sim_r.isHalt = false;
            }
          else {
            const v46733 = v4478.lptBals;
            const v46734 = v46733.A;
            const v46735 = v46733.B;
            const v46736 = v4478.poolBals;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v17695 = v16792[stdlib.checkedBigNumberify('./index.rsh:918:12:spread', stdlib.UInt_max, '0')];
      const v17696 = v16792[stdlib.checkedBigNumberify('./index.rsh:918:12:spread', stdlib.UInt_max, '1')];
      const v17698 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5172, ctc1), null);
      const v17699 = stdlib.fromSome(v17698, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v17700 = stdlib.ge256(v17699, v17696);
      stdlib.assert(v17700, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:885:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:919:22:application call to "checkTransfer" (defined at: ./index.rsh:884:52:function exp)', 'at ./index.rsh:921:15:application call to [unknown function] (defined at: ./index.rsh:921:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v17704 = true;
      const v17705 = await txn1.getOutput('arc200_transfer', 'v17704', ctc11, v17704);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v16792, v17705), {
          at: './index.rsh:918:13:application',
          fs: ['at ./index.rsh:918:13:application call to [unknown function] (defined at: ./index.rsh:918:13:function exp)', 'at ./index.rsh:922:14:application call to "k" (defined at: ./index.rsh:921:15:function exp)', 'at ./index.rsh:921:15:application call to [unknown function] (defined at: ./index.rsh:921:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v17714 = stdlib.safeSub256(v17699, v17696);
      await stdlib.mapSet(map0, ctc8, v5172, ctc1, v17714);
      const v17715 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v17695, ctc1), null);
      const v17716 = stdlib.fromSome(v17715, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v17717 = stdlib.safeAdd256(v17716, v17696);
      await stdlib.mapSet(map0, ctc8, v17695, ctc1, v17717);
      null;
      const v46728 = v4478;
      const v46730 = v4482;
      const v46731 = v4478.closed;
      if (v46731) {
        return;
        }
      else {
        const v46733 = v4478.lptBals;
        const v46734 = v46733.A;
        const v46735 = v46733.B;
        const v46736 = v4478.poolBals;
        return;
        }
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom4 expects to receive an interact object as its second argument.`));}
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
    Protocol_harvest0_471: ctc16,
    Provider_deposit0_471: ctc17,
    Provider_depositA0_471: ctc18,
    Provider_depositB0_471: ctc18,
    Provider_withdraw0_471: ctc19,
    Provider_withdrawA0_471: ctc18,
    Provider_withdrawB0_471: ctc18,
    Trader_exactSwapAForB0_471: ctc20,
    Trader_exactSwapBForA0_471: ctc20,
    Trader_swapAForB0_471: ctc20,
    Trader_swapBForA0_471: ctc20,
    arc200_approve0_471: ctc21,
    arc200_transfer0_471: ctc21,
    arc200_transferFrom0_471: ctc14
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
  
  
  const [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc7, ctc4, ctc8, ctc9, ctc8, ctc10, ctc13, ctc4, ctc10, ctc1, ctc1, ctc10]);
  const v4602 = ctc.selfAddress();
  const v4604 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:932:58:application call to [unknown function] (defined at: ./index.rsh:932:58:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_transferFrom0_471" (defined at: ./index.rsh:932:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v4605 = v4604[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4607 = v4604[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v4612 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4605, ctc1), null);
  const v4613 = stdlib.fromSome(v4612, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4614 = stdlib.ge256(v4613, v4607);
  stdlib.assert(v4614, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:899:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:933:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:932:58:application call to [unknown function] (defined at: ./index.rsh:932:58:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_transferFrom0_471" (defined at: ./index.rsh:932:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v4616 = [v4605, v4602];
  const v4617 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v4616, ctc1), null);
  const v4618 = stdlib.fromSome(v4617, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v4619 = stdlib.ge256(v4618, v4607);
  stdlib.assert(v4619, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:903:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:933:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:932:58:application call to [unknown function] (defined at: ./index.rsh:932:58:function exp)', 'at ./index.rsh:821:31:application call to "runarc200_transferFrom0_471" (defined at: ./index.rsh:932:12:function exp)', 'at ./index.rsh:821:31:application call to [unknown function] (defined at: ./index.rsh:821:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v4630 = ['arc200_transferFrom0_471', v4604];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4411, v4413, v4419, v4420, v4423, v4432, v4456, v4474, v4478, v4482, v4574, v4575, v4576, v4579, v4630],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc22],
    pay: [stdlib.checkedBigNumberify('./index.rsh:932:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
      
      switch (v5173[0]) {
        case 'Protocol_harvest0_471': {
          const v5176 = v5173[1];
          
          break;
          }
        case 'Provider_deposit0_471': {
          const v6144 = v5173[1];
          
          break;
          }
        case 'Provider_depositA0_471': {
          const v7112 = v5173[1];
          
          break;
          }
        case 'Provider_depositB0_471': {
          const v8080 = v5173[1];
          
          break;
          }
        case 'Provider_withdraw0_471': {
          const v9048 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawA0_471': {
          const v10016 = v5173[1];
          
          break;
          }
        case 'Provider_withdrawB0_471': {
          const v10984 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_471': {
          const v11952 = v5173[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_471': {
          const v12920 = v5173[1];
          
          break;
          }
        case 'Trader_swapAForB0_471': {
          const v13888 = v5173[1];
          
          break;
          }
        case 'Trader_swapBForA0_471': {
          const v14856 = v5173[1];
          
          break;
          }
        case 'arc200_approve0_471': {
          const v15824 = v5173[1];
          
          break;
          }
        case 'arc200_transfer0_471': {
          const v16792 = v5173[1];
          
          break;
          }
        case 'arc200_transferFrom0_471': {
          const v17760 = v5173[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v18689 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '0')];
          const v18690 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '1')];
          const v18691 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '2')];
          const v18693 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v18689, ctc1), null);
          const v18694 = stdlib.fromSome(v18693, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18697 = [v18689, v5172];
          const v18698 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v18697, ctc1), null);
          const v18699 = stdlib.fromSome(v18698, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18707 = stdlib.safeSub256(v18694, v18691);
          await stdlib.simMapSet(sim_r, 0, ctc8, v18689, ctc1, v18707);
          const v18708 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc8, v18690, ctc1), null);
          const v18709 = stdlib.fromSome(v18708, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v18710 = stdlib.safeAdd256(v18709, v18691);
          await stdlib.simMapSet(sim_r, 0, ctc8, v18690, ctc1, v18710);
          null;
          const v18715 = stdlib.safeSub256(v18699, v18691);
          await stdlib.simMapSet(sim_r, 1, ctc15, v18697, ctc1, v18715);
          null;
          const v18718 = true;
          const v18719 = await txn1.getOutput('arc200_transferFrom', 'v18718', ctc11, v18718);
          
          const v46968 = v4478;
          const v46970 = v4482;
          const v46971 = v4478.closed;
          if (v46971) {
            sim_r.isHalt = false;
            }
          else {
            const v46973 = v4478.lptBals;
            const v46974 = v46973.A;
            const v46975 = v46973.B;
            const v46976 = v4478.poolBals;
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
  const {data: [v5173], secs: v5175, time: v5174, didSend: v2760, from: v5172 } = txn1;
  switch (v5173[0]) {
    case 'Protocol_harvest0_471': {
      const v5176 = v5173[1];
      return;
      break;
      }
    case 'Provider_deposit0_471': {
      const v6144 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositA0_471': {
      const v7112 = v5173[1];
      return;
      break;
      }
    case 'Provider_depositB0_471': {
      const v8080 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdraw0_471': {
      const v9048 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawA0_471': {
      const v10016 = v5173[1];
      return;
      break;
      }
    case 'Provider_withdrawB0_471': {
      const v10984 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_471': {
      const v11952 = v5173[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_471': {
      const v12920 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_471': {
      const v13888 = v5173[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_471': {
      const v14856 = v5173[1];
      return;
      break;
      }
    case 'arc200_approve0_471': {
      const v15824 = v5173[1];
      return;
      break;
      }
    case 'arc200_transfer0_471': {
      const v16792 = v5173[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_471': {
      const v17760 = v5173[1];
      undefined /* setApiDetails */;
      ;
      const v18689 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '0')];
      const v18690 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '1')];
      const v18691 = v17760[stdlib.checkedBigNumberify('./index.rsh:932:12:spread', stdlib.UInt_max, '2')];
      const v18693 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v18689, ctc1), null);
      const v18694 = stdlib.fromSome(v18693, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18695 = stdlib.ge256(v18694, v18691);
      stdlib.assert(v18695, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:899:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:933:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:935:15:application call to [unknown function] (defined at: ./index.rsh:935:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v18697 = [v18689, v5172];
      const v18698 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v18697, ctc1), null);
      const v18699 = stdlib.fromSome(v18698, stdlib.checkedBigNumberify('./index.rsh:877:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18700 = stdlib.ge256(v18699, v18691);
      stdlib.assert(v18700, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:903:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:933:24:application call to "chkTransferFrom" (defined at: ./index.rsh:898:64:function exp)', 'at ./index.rsh:935:15:application call to [unknown function] (defined at: ./index.rsh:935:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v18707 = stdlib.safeSub256(v18694, v18691);
      await stdlib.mapSet(map0, ctc8, v18689, ctc1, v18707);
      const v18708 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v18690, ctc1), null);
      const v18709 = stdlib.fromSome(v18708, stdlib.checkedBigNumberify('./index.rsh:873:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v18710 = stdlib.safeAdd256(v18709, v18691);
      await stdlib.mapSet(map0, ctc8, v18690, ctc1, v18710);
      null;
      const v18715 = stdlib.safeSub256(v18699, v18691);
      await stdlib.mapSet(map1, ctc15, v18697, ctc1, v18715);
      null;
      const v18718 = true;
      const v18719 = await txn1.getOutput('arc200_transferFrom', 'v18718', ctc11, v18718);
      if (v2760) {
        stdlib.protect(ctc0, await interact.out(v17760, v18719), {
          at: './index.rsh:932:13:application',
          fs: ['at ./index.rsh:932:13:application call to [unknown function] (defined at: ./index.rsh:932:13:function exp)', 'at ./index.rsh:937:14:application call to "k" (defined at: ./index.rsh:935:15:function exp)', 'at ./index.rsh:935:15:application call to [unknown function] (defined at: ./index.rsh:935:15:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v46968 = v4478;
      const v46970 = v4482;
      const v46971 = v4478.closed;
      if (v46971) {
        return;
        }
      else {
        const v46973 = v4478.lptBals;
        const v46974 = v46973.A;
        const v46975 = v46973.B;
        const v46976 = v4478.poolBals;
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
export async function arc200_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _arc200_approve4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _arc200_transfer4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _arc200_transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256)uint256`, `Provider_depositA(uint256)uint256`, `Provider_depositB(uint256)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_exactSwapAForB(uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,uint64,uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`],
    pure: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `reserve(address)(uint256,uint256)`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`],
    sigs: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`, `Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256)uint256`, `Provider_depositA(uint256)uint256`, `Provider_depositB(uint256)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Provider_withdrawA(uint256)uint256`, `Provider_withdrawB(uint256)uint256`, `Trader_exactSwapAForB(uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,uint64,uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `reserve(address)(uint256,uint256)`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAWAAjU3gEEIAYCAfoC8gJh6gKCA6IDgQF/QEHE2wEQBcIDJhQAAQABAgEDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkBWFwcElEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQBHmDw1wIAAAAAAAAAAEg//////////////////////////////////////////8BAQTza02/BNChzBUBBAEFAQYE0+zjAgQZafhlAQgIAAAAAAAAEXoxGEEVHyhkSSJbNQFJI1s1AiETWzUFKWQnCmRQKmRQK2RQJw1kUCcOZFAnD2RQgh4EDfjlMAQZOgEbBBxTeK0EM7qPdwQ9ED8lBEtuG14EVnzjgQRkNtzgBGQ5RZgEZX0T7ARulIX3BG7MciQEc+W3FwSBlUzUBILlc8QEj/wcLgS2jv8wBLauGiUEu7MZ8wTA8/g8BMU2MJIEzqDnVQTP0hvYBNChzBUE2eMKwgTg2Vu1BOyZYEEE82tNvwTz0GEQBP2ptu82GgCOHhQSFnQUTQHIAgYWfRaGFGIBYBRlAAEUBwBKFjkUWgGqAS0UaBRAAUIBdhPaARgUbgHnALUUaxSAAYwWjwA0ASUMQRTjNAEhBhJEiBcUNBRXCUA0FFdpQFA0FFfpgVA0FFepQFA0FCEII1hQNBQhCSNYUDUEMRkiEkSABBUffHU0BFCwIQdDI681CyEGNAESRIgWzjQLIls1DIAExR/DVzQMFlCwNAyIFt8oNQuACAAAAAAAAElFNAtQsDQLNQQxGSEUEkSxIrIBIQWyEDQFshghFLIZs4GgjQY0Bwg1B4gWsSIyCjIJiBa/NANA/5VC/4g2GgE2GgI1CzUMI68pNAw0C1BQUDULJTQBEkSIFfE0CyJbNQw0C1cIojUNgAStC75ENAwWUDQNULA0DIgWWTQNIlWNDhN+E4gTkhOVE5gTohOlE6gTqxOuE7gTwhPMFAhC/ug2GgE1CyOvKjQLUCEOr1BQNQtC/542GgE1CyOvKzQLUCEOr1BQNQtC/4k2GgE2GgI1CzUMI68nCjQMNAtQUCERr1BQNQtC/2s2GgE1CyOvJw40C1AhDq9QUDULQv9VNhoBNQsjrycPNAtQIQ6vUFA1C0L/PzYaATYaAjULNQwjrycNNAw0C1BQIRGvUFA1C0L/ITYaATYaAjULNQwjrycSNAw0C1BQIQqvUFA1C0L/AzYaATYaAjULNQwjr4ABBzQMNAtQUCEKr1BQNQtC/uQ2GgE2GgI1CzUMI6+AAQk0DDQLUFAhCq9QUDULQv7FNhoBNhoCNQs1DCOvgAEKNAw0C1BQIQqvUFA1C0L+pjQLVwAgNQ00C1cggTUMMQA0FFfpgVdgIBJENAxXACA1IjQMVyAgNSE0DFdAIDUgNCInBKQ0IScEpBBBEsU0IDQhNCKgiBQsqDULNAs0ICcEpBA0IDIDpRBEMgpgMgp4CTQSCUk1HzQNiBTSNBRXqUBJNQ9XACA1CzQPVyAgNR40CzQeUDQfFlA1D4AIAAAAAAAAFG00D1CwNA81BDQUIQlbNR0nBTQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQdshgnC7IaNA1JshyyGjQLsho0HbIyszIKYDQJCTQKFwkWtwA+VwQAUDUPgAgAAAAAAAAUjzQPULA0D0k1CyJbNRAiNBASRDQUIQhbNQ8nBTQPFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQPshgnC7IaNA1JshyyGjQesho0D7IyszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAUojQLULA0C0k1DSJbNQsiNAsSRCcKNCI0IVA0IFA0DFdgIFA0DFeAAVBQIQ+vUDUNJxA0DVCwNBRXAAE0FFcBCFA0EVA0FFdJIFA0DlA0FVA0DFA0FCELI1hQNB0WUDQPFlA0FCEMIQRYUDQUIQ0hBFhQMgY0HzQSCDQfCTQQCDQLCDUSNRM1FDQUVwABF0ERQzQaNBkWUDQUUIHYAq9QIQYyBjUCNQEpSwFXAH9nJwpLAVd/f2cqSwFX/n9nK0sBgf0CIQ9YZycNSwGB/AMhD1hnJw5LAYH7BCEPWGcnD0yB+gWBWFhnKDQBFjQCFlA0BRZQZzEZIhJEiBLOQvwiiBKrNAtXAEA1DDQUV+mBSTUhV4ABFxREMgMoMgMqMQBQiBH8iBHwNSAyAygyAysxAFCIEeuIEd81HzQMVwAgNR40IDQep0Q0DFcgIDUdNB80HadENA8yA6hBEEY0HjQdo4gRqZaIEaU1ETQLV0AgNBGmRDIDKDIDKTQWUIgRoYgRlUk1CzQRp0QkKjEAUDQgNB6hiBF3iBGSJCsxAFA0HzQdoYgRZ4gRgiQpNBZQNAs0EaGIEVeIEXIkKTEAUDIDKDIDKTEAUIgRVogRSjQRoIgROogRVScHNBZQMQBQNBFQsIAIAAAAAAAAGJ40EVCwNBE1BDQUVwABNBRXAQhQNBA0EaGIEQY0DzQRoIgQ/lBQNBRXSSBQNA5XACA0HqCIEOs0DlcgIDQdoIgQ4FBQNBRXqUBQNCFQNBQhCyNYUDQUIQkjWFA0FCEII1hQNBQhDCEEWFA0FCENIQRYUDIGNRM1FEL+IzQNVwEgNQs0FFfpgVeAARcURCcFNBwWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNByyGCcMshoxAEmyHLIaNBZJshyyGjQLsho0HLIyszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAAc2zQNULA0DUk1DCJbNQ0iNA0SRDIDKDIDKjEAUIgQLYgQITQLoIgQETUMJCoxAFA0DIgQI4AIAAAAAAAAHOc0DFCwNAw1BDIGNBI0DQg1EjUTQv1hNA1XASA1CzQUV+mBV4ABFxREJwU0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYJwyyGjEASbIcsho0FkmyHLIaNAuyGjQbsjKzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAACDHNA1QsDQNSTUMIls1DSI0DRJEMgMoMgMrMQBQiA9riA9fNAugiA9PNQwkKzEAUDQMiA9hgAgAAAAAAAAg0zQMULA0DDUEMgY0EjQNCDUSNRNC/J+ID8E0C1cAIDUNNAtXIEA1DDQOVwAgNRE0DlcgIDULNA00EaOIDvw0D6KIDvY1HTQNNAujiA7sNA+iiA7mNQ40DFcAIDQdpkQ0DFcgIDQOpkQyAygyAykxAFCIDtmIDs1JNQw0DadEMQA0FlA1HzIDKDIDJwg0H1ABiA66iA6uSTUeNA2nRCQpMQBQNAw0DaGIDpCIDqskKTQWUDIDKDIDKTQWUIgOj4gOgzQNoIgOc4gOjicHMQBQNBZQNA1QsDQeNA2hiA5cNQwhEicINB9QATQMiA5rJxExAFA0FlA0DFCwJCoxAFAyAygyAyoxAFCIDkOIDjc0HaCIDieIDkIkKzEAUDIDKDIDKzEAUIgOJogOGjQOoIgOCogOJTQdNA5QNR6ACAAAAAAAACTdNB5QsDQeNQQxADQeUDUMgARFdsa0NAxQsDQUVwABNBRXAQhQNBA0DaCIDco0DzQNoYgNwlBQNBRXSSBQNBE0HaGIDbI0CzQOoYgNqlBQNBRXqUBQNBRX6YFQNBQhCyNYUDQUIQkjWFA0FCEII1hQNBQhDCEEWFA0FCENIQRYUDIGNRM1FEL66jQNVwEgNQsyAygyAyoxAFCIDW6IDWJJNQ00C6dENA00C6GIDUk1DCQqMQBQNAyIDVuACAAAAAAAACjlNAxQsDQMNQQnBTQcFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQcshgnC7IaMQBJshyyGjQLsho0HLIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAo8jQMULA0DEk1CyJbNQwiNAwSRDIGNBI0DAg1EjUTQvoxNA1XASA1CzIDKDIDKzEAUIgMtYgMqUk1DTQLp0Q0DTQLoYgMkDUMJCsxAFA0DIgMooAIAAAAAAAALMw0DFCwNAw1BCcFNBsWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNBuyGCcLshoxAEmyHLIaNAuyGjQbsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAACzZNAxQsDQMSTULIls1DCI0DBJEMgY0EjQMCDUSNRNC+XgnEzQVULA0FTUEMgY1E0L5ZycTNBVQsDQVNQQyBjUTQvlWiAx4iAx1NAtXACA1EDQUV+mBNQ80DlcAIDUNNA5XICA1DDQPVwAgNR00D1dAIDUeNBAnBjQeoYgLoKOIC5xJNQ40DKOIC5M0DScGo4gLizQOoIgLhaKIC4E1ITQNNBCgiAt3NQ40EDQMo4gLbTQOoogLZzQhoYgLYTQdJwSjiAtZNB6iiAtTo4gLTycEoogLSTUfNBA0HaOICz8nBqKICzk1HjIDNB9QNB4yA1A0HjQMo4gLJTQOoogLHzQfpU1JNR1XACA1IDQdVyAgNR80D1eAARcURDQONCChiAr8NR40DDQhoYgK8jQfoYgK7DUdNBRXqUA1DjQLVyAgNCGmRDQeNB2jiArSNA00DKOICsqnRCcFNBwWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNByyGCcMshoxAEmyHLIaNBZJshyyGjQQsho0HLIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAA40DQMULA0DEk1CyJbNQwiNAwSRCQrMQBQMgMoMgMrMQBQiApbiApPNCGgiAo/iApaJCoxAFAyAygyAyoxAFCICj6ICjKICkMyAzQhUDULgAgAAAAAAAA43zQLULA0CzUENB40HVA1DSoxADQQMgNQUDQLUDQNUFAyA1A1HScQNB1QsDQUVwABNBRXAQhQNBFQNBRXSSBQNA1QNA5XACA0IKCICcg0DlcgIDQfoIgJvVBQNA9QNBQhCyNYUDQUIQkjWFA0FCEII1hQNBQhDCEEWFA0FCENIQRYUDIGNBI0DAg1EjUTNRRC9v+ICiGICh40C1cAIDUQNBRX6YE1DzQOVyAgNQ00DlcAIDUMNA9XACA1HTQPV0AgNR40ECcGNB6hiAlJo4gJRUk1DjQMo4gJPDQNJwajiAk0NA6giAkuoogJKjUhNA00EKCICSA1DjQQNAyjiAkWNA6iiAkQNCGhiAkKNB0nBKOICQI0HqKICPyjiAj4JwSiiAjyNR80EDQdo4gI6CcGoogI4jUeMgM0H1A0HjIDUDQeNAyjiAjONA6iiAjINB+lTUk1HVcAIDUgNB1XICA1HzQPV4ABFxRENAw0IaGICKU0H6GICJ81HjQONCChiAiVNR00FFepQDUONAtXICA0IaZENB40HaOICHs0DDQNo4gIc6dEJwU0GxZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0G7IYJwyyGjEASbIcsho0FkmyHLIaNBCyGjQbsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAD1CNAxQsDQMSTULIls1DCI0DBJEJCoxAFAyAygyAyoxAFCICASIB/g0IaCIB+iICAMkKzEAUDIDKDIDKzEAUIgH54gH24gH7DQhMgNQNQuACAAAAAAAAD1RNAtQsDQLNQQ0HjQdUDUNKjEAMgM0EFBQNAtQNA1QUDIDUDUdJxA0HVCwNBRXAAE0FFcBCFA0EVA0FFdJIFA0DVA0DlcAIDQfoIgHcTQOVyAgNCCgiAdmUFA0D1A0FCELI1hQNBQhCSNYUDQUIQgjWFA0FCEMIQRYUDQUIQ0hBFhQMgY0EjQMCDUSNRM1FEL0qDQLVwAgNQ00C1cgIDUMMQA0GBNENA00GBNEIRInCDEANA1QUAE0DIgHICcRMQBQNA1QNAxQsCEHNQuACAAAAAAAAEFNNAsWUQcIULA0CxZRBwg1BDIGNRNC9E00C1cAIDUNNAtXICA1DDIDKDIDKTEAUIgGyogGvkk1DjQMp0QhBzULgAgAAAAAAABFKDQLFlEHCFCwNAsWUQcINQQkKTEAUDQONAyhiAaCiAadJCk0DVAyAygyAyk0DVCIBoGIBnU0DKCIBmWIBoAnBzEAUDQNUDQMULAyBjUTQvPLNAtXACA1DjQLVyAgNQ00C1dAIDUMMgMoMgMpNA5QiAZBiAY1STUQNAynRDQOMQBQNQ8yAygyAycINA9QAYgGIogGFkk1CzQMp0QkKTQOUDQQNAyhiAX4iAYTJCk0DVAyAygyAyk0DVCIBfeIBes0DKCIBduIBfYnBzQOUDQNUDQMULA0CzQMoYgFxDUNIRInCDQPUAE0DYgF0ycRNA5QMQBQNA1QsCEHNQuACAAAAAAAAEkeNAsWUQcIULA0CxZRBwg1BDIGNRNC8wAiRELvHyOvgAELNAw0C1BQIQqvUFA1C0LvnSJEQu8FNAElDEEEhjQBIQYSRIgF4jQZFjUEQu7tNAElDEEEfjQBIQYSRIgFyjQaVwggSTULNQRC7tA0ASUMQQR2NAEhBhJEiAWtNBpXKAhJNQs1BELuszQBJQxBBG40ASEGEkSIBZAnCTUEQu6cI6+AAQw0DDQLUFAhCq9QUDULQu8aI6+AAQ00DTQMUDQLUFAhEa9QUDULQu8CNAElDEEEOTQBIQYSRIgFTDQLNQwyAygyAyo0DFCIBMKIBLYyAygyAys0DFCIBLOIBKdQNQRC7jciRELuMiJEQu4tIkRC7igiRELuIzQLIls1DTQLVwhoNQyABCBiUjY0DRZQNAxQsDQNiAUXNAxXMBhJNQsjWzUcNAshE1s1GzQcFgE0GxYBE0Q0DFcAMEk1GiJbSTUZgYACDkQ0DFdIIDUYKDUXJwU0C1cACFADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQLIluyGIAE88VKLbIaMRgWsho0HBayGjQbFrIaszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAARUTQMULA0DEk1CyJbNQ80C1cIgUk1DlcAIDUNNA5XICA1DDQOV0AgNQs0DScEpDQMJwSkEEEBizQLNAw0DaCIA4yoNRA0EDQLJwSkEDQLMgOlEEQiNA8SRDIKNRYkKTQWUCcJiAOFJCk0GFAyA4gDeycJNRAnBzQYUDQWUDQQULAhEK81FSk0GRZQgED//////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUDQaVwggUDQVUDQVUDQNNAxQNAtQNA5XYCBQNA5XgAFQUDQaVygIUDQcFlA0GxZQJwlQNBhQMgY0DzUSNRM1FELwOogDaoHAmgyIA4KxIrIBIQWyEIAGCDEAMgkSsh4nErIfs7Q9NQU2GgE1C0L+DogDPTYaATULQuw8iAMyNhoBNQtC7K4iMTQSRCMxNRJEIjE2EkQiMTcSRCI1BYgDEIHSBq8iIkLv7zYaATYaAjULNQxC/Mc2GgE2GgI1CzUMQvy/NhoBNQtC/MxC/M5C/ONC/P1C/Rc2GgE2GgI2GgM1CzUMNQ1C/TE2GgE2GgI1CzUMQv0PIjUQQv58NA1XAaE1C0LtiDQNVwFgNQtC7+RC8UdC8gY0DVcBYDULQvK+QvRwQvUmQvXcQvXqNA1XAUA1C0L18TQNVwFANQtC+D40DVcBQDULQvqLNA1XAUA1C0L63DQBJRJEiAHRNBRXCUA0FFdpQFA0FFfpgVA0FFepQFA0FCEII1hQNBQhCSNYUDUEQusbNA1XAWA1C0L7IiI1C0LtQjQeNA+jiAFjNA5XACCiiAFaNQ00HTQPo4gBUDQOVyAgoogBR0k1DDQNSTQMpE01EULvlTQUVwlASTURVwAgNRA0EVcgIDUPNBRXaUA1DjQcFjQbFlA0GlA0GRZQNBhQNBdQNBZQNBVQNBRQNBIWUDQRUDQQUDQPUDQOUCUyBkLugUhMv0iJIrIBIQeyELIHsgiziTQBJRJEiAD8NBkWNQRC6mg0ASUSRIgA7DQaVwggSTULNQRC6lM0ASUSRIgA1zQaVygISTULNQRC6j40ASUSRIgAwicJNQRC6i80ASUSRIgAszQLNQwyAygyAyo0DFCIAIqIAH4yAygyAys0DFCIAHuIAG9QNQRC6f82GgE1C0L7iEiJTAlJNQYyCYgBFYkJSUH/7kk1BjEWNAAhBwhJNQAJRwI4BzIKEkQ4ECEHEkQ4CBJEiTYaARc1C0L7hDYaARc1C0L7gDYaARc1C0L7fDYaARc1C0L7eEkVIQRMCa9MUIlJVwEATCJVTYm+SRZRBwhFBE1QiUxJvUD+8ksDiAClQv7qSSJbNRxJI1s1G0lXEDA1GkkhEFs1GUlXSCA1GElIKDUXSVdoIDUWSVeIQDUVSYHIASEVWDUUSYGKBVs1EkmBkgUhEFg1EUmB0gUhBFg1EEmB8gUhBFg1D4GSBiEQWDUOiUlXADA1GkmBMFs1GYE4IRVYNRSJsSKyASEFshA0BbIYs4khBzUDiUkiEkw0AhIRRIk0BjQHSg9B/uRC/uyxQv5NNAYINQaJsbIJQv5B`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `396`,
    1001: `397`,
    1002: `397`,
    1003: `398`,
    1004: `399`,
    1005: `400`,
    1006: `400`,
    1007: `401`,
    1008: `402`,
    1009: `403`,
    101: `2`,
    1010: `404`,
    1011: `404`,
    1012: `405`,
    1013: `405`,
    1014: `405`,
    1015: `408`,
    1016: `408`,
    1017: `409`,
    1018: `409`,
    1019: `409`,
    102: `2`,
    1020: `410`,
    1021: `410`,
    1022: `411`,
    1023: `411`,
    1024: `412`,
    1025: `412`,
    1026: `412`,
    1027: `413`,
    1028: `413`,
    1029: `414`,
    103: `2`,
    1030: `414`,
    1031: `415`,
    1032: `415`,
    1033: `416`,
    1034: `416`,
    1035: `416`,
    1036: `417`,
    1037: `417`,
    1038: `417`,
    1039: `418`,
    104: `2`,
    1040: `419`,
    1041: `425`,
    1042: `425`,
    1043: `426`,
    1044: `426`,
    1045: `426`,
    1046: `427`,
    1047: `427`,
    1048: `428`,
    1049: `428`,
    105: `2`,
    1050: `429`,
    1051: `429`,
    1052: `429`,
    1053: `430`,
    1054: `430`,
    1055: `431`,
    1056: `431`,
    1057: `432`,
    1058: `432`,
    1059: `432`,
    106: `2`,
    1060: `433`,
    1061: `433`,
    1062: `434`,
    1063: `434`,
    1064: `435`,
    1065: `435`,
    1066: `436`,
    1067: `437`,
    1068: `437`,
    1069: `438`,
    107: `2`,
    1070: `438`,
    1071: `439`,
    1072: `440`,
    1073: `441`,
    1074: `441`,
    1075: `441`,
    1076: `442`,
    1077: `442`,
    1078: `443`,
    1079: `443`,
    108: `2`,
    1080: `444`,
    1081: `444`,
    1082: `445`,
    1083: `446`,
    1084: `446`,
    1085: `446`,
    1086: `447`,
    1087: `448`,
    1088: `448`,
    1089: `450`,
    109: `2`,
    1090: `450`,
    1091: `451`,
    1092: `451`,
    1093: `452`,
    1094: `452`,
    1095: `453`,
    1096: `454`,
    1097: `455`,
    1098: `455`,
    1099: `456`,
    11: `2`,
    110: `2`,
    1100: `456`,
    1101: `457`,
    1102: `458`,
    1103: `459`,
    1104: `465`,
    1105: `465`,
    1106: `466`,
    1107: `467`,
    1108: `467`,
    1109: `468`,
    111: `2`,
    1110: `469`,
    1111: `470`,
    1112: `470`,
    1113: `471`,
    1114: `473`,
    1115: `474`,
    1116: `474`,
    1117: `476`,
    1118: `476`,
    1119: `477`,
    112: `2`,
    1120: `477`,
    1121: `477`,
    1122: `478`,
    1123: `478`,
    1124: `479`,
    1125: `479`,
    1126: `479`,
    1127: `480`,
    1128: `481`,
    1129: `481`,
    113: `2`,
    1130: `482`,
    1131: `482`,
    1132: `482`,
    1133: `483`,
    1134: `483`,
    1135: `484`,
    1136: `484`,
    1137: `485`,
    1138: `485`,
    1139: `485`,
    114: `2`,
    1140: `486`,
    1141: `486`,
    1142: `487`,
    1143: `487`,
    1144: `488`,
    1145: `488`,
    1146: `489`,
    1147: `490`,
    1148: `490`,
    1149: `491`,
    115: `2`,
    1150: `492`,
    1151: `493`,
    1152: `493`,
    1153: `494`,
    1154: `494`,
    1155: `494`,
    1156: `494`,
    1157: `494`,
    1158: `494`,
    1159: `494`,
    116: `2`,
    1160: `494`,
    1161: `494`,
    1162: `494`,
    1163: `495`,
    1164: `495`,
    1165: `496`,
    1166: `497`,
    1167: `498`,
    1168: `498`,
    1169: `499`,
    117: `2`,
    1170: `499`,
    1171: `500`,
    1172: `500`,
    1173: `501`,
    1174: `501`,
    1175: `502`,
    1176: `503`,
    1177: `503`,
    1178: `504`,
    1179: `504`,
    118: `2`,
    1180: `505`,
    1181: `505`,
    1182: `506`,
    1183: `507`,
    1184: `508`,
    1185: `509`,
    1186: `509`,
    1187: `510`,
    1188: `510`,
    1189: `511`,
    119: `2`,
    1190: `512`,
    1191: `512`,
    1192: `513`,
    1193: `514`,
    1194: `514`,
    1195: `515`,
    1196: `516`,
    1197: `516`,
    1198: `517`,
    1199: `518`,
    12: `2`,
    120: `2`,
    1200: `519`,
    1201: `519`,
    1202: `520`,
    1203: `521`,
    1204: `522`,
    1205: `522`,
    1206: `523`,
    1207: `523`,
    1208: `524`,
    1209: `524`,
    121: `2`,
    1210: `525`,
    1211: `525`,
    1212: `527`,
    1213: `527`,
    1214: `528`,
    1215: `528`,
    1216: `529`,
    1217: `529`,
    1218: `530`,
    1219: `530`,
    122: `2`,
    1220: `531`,
    1221: `532`,
    1222: `532`,
    1223: `533`,
    1224: `533`,
    1225: `534`,
    1226: `534`,
    1227: `535`,
    1228: `535`,
    1229: `538`,
    123: `2`,
    1230: `538`,
    1231: `539`,
    1232: `539`,
    1233: `540`,
    1234: `545`,
    1235: `545`,
    1236: `546`,
    1237: `547`,
    1238: `547`,
    1239: `548`,
    124: `2`,
    1240: `549`,
    1241: `549`,
    1242: `550`,
    1243: `551`,
    1244: `552`,
    1245: `553`,
    1246: `553`,
    1247: `553`,
    1248: `554`,
    1249: `554`,
    125: `2`,
    1250: `554`,
    1251: `555`,
    1252: `556`,
    1253: `556`,
    1254: `557`,
    1255: `557`,
    1256: `557`,
    1257: `557`,
    1258: `557`,
    1259: `557`,
    126: `2`,
    1260: `557`,
    1261: `557`,
    1262: `557`,
    1263: `557`,
    1264: `558`,
    1265: `558`,
    1266: `559`,
    1267: `560`,
    1268: `561`,
    1269: `561`,
    127: `2`,
    1270: `562`,
    1271: `563`,
    1272: `563`,
    1273: `564`,
    1274: `565`,
    1275: `566`,
    1276: `566`,
    1277: `567`,
    1278: `568`,
    1279: `568`,
    128: `2`,
    1280: `569`,
    1281: `570`,
    1282: `575`,
    1283: `575`,
    1284: `576`,
    1285: `576`,
    1286: `577`,
    1287: `578`,
    1288: `578`,
    1289: `579`,
    129: `2`,
    1290: `579`,
    1291: `580`,
    1292: `580`,
    1293: `581`,
    1294: `582`,
    1295: `583`,
    1296: `584`,
    1297: `584`,
    1298: `585`,
    1299: `585`,
    13: `2`,
    130: `2`,
    1300: `586`,
    1301: `587`,
    1302: `587`,
    1303: `588`,
    1304: `589`,
    1305: `589`,
    1306: `590`,
    1307: `591`,
    1308: `591`,
    1309: `592`,
    131: `2`,
    1310: `593`,
    1311: `594`,
    1312: `594`,
    1313: `595`,
    1314: `596`,
    1315: `597`,
    1316: `597`,
    1317: `598`,
    1318: `598`,
    1319: `599`,
    132: `2`,
    1320: `599`,
    1321: `600`,
    1322: `600`,
    1323: `602`,
    1324: `602`,
    1325: `603`,
    1326: `603`,
    1327: `604`,
    1328: `604`,
    1329: `605`,
    133: `2`,
    1330: `605`,
    1331: `606`,
    1332: `607`,
    1333: `607`,
    1334: `608`,
    1335: `608`,
    1336: `609`,
    1337: `609`,
    1338: `610`,
    1339: `610`,
    134: `2`,
    1340: `613`,
    1341: `613`,
    1342: `614`,
    1343: `614`,
    1344: `615`,
    1345: `620`,
    1346: `620`,
    1347: `621`,
    1348: `622`,
    1349: `622`,
    135: `2`,
    1350: `623`,
    1351: `624`,
    1352: `624`,
    1353: `625`,
    1354: `626`,
    1355: `627`,
    1356: `628`,
    1357: `628`,
    1358: `628`,
    1359: `629`,
    136: `2`,
    1360: `629`,
    1361: `629`,
    1362: `630`,
    1363: `631`,
    1364: `631`,
    1365: `632`,
    1366: `632`,
    1367: `632`,
    1368: `632`,
    1369: `632`,
    137: `2`,
    1370: `632`,
    1371: `632`,
    1372: `632`,
    1373: `632`,
    1374: `632`,
    1375: `633`,
    1376: `633`,
    1377: `634`,
    1378: `635`,
    1379: `636`,
    138: `2`,
    1380: `636`,
    1381: `637`,
    1382: `638`,
    1383: `638`,
    1384: `639`,
    1385: `640`,
    1386: `641`,
    1387: `641`,
    1388: `642`,
    1389: `643`,
    139: `2`,
    1390: `643`,
    1391: `644`,
    1392: `645`,
    1393: `650`,
    1394: `650`,
    1395: `651`,
    1396: `651`,
    1397: `652`,
    1398: `652`,
    1399: `653`,
    14: `2`,
    140: `2`,
    1400: `654`,
    1401: `654`,
    1402: `655`,
    1403: `656`,
    1404: `656`,
    1405: `657`,
    1406: `657`,
    1407: `657`,
    1408: `658`,
    1409: `659`,
    141: `2`,
    1410: `659`,
    1411: `660`,
    1412: `660`,
    1413: `660`,
    1414: `661`,
    1415: `662`,
    1416: `663`,
    1417: `663`,
    1418: `664`,
    1419: `665`,
    142: `2`,
    1420: `666`,
    1421: `666`,
    1422: `667`,
    1423: `667`,
    1424: `668`,
    1425: `668`,
    1426: `669`,
    1427: `670`,
    1428: `672`,
    1429: `672`,
    143: `2`,
    1430: `673`,
    1431: `673`,
    1432: `673`,
    1433: `674`,
    1434: `674`,
    1435: `675`,
    1436: `675`,
    1437: `675`,
    1438: `676`,
    1439: `677`,
    144: `2`,
    1440: `677`,
    1441: `678`,
    1442: `679`,
    1443: `679`,
    1444: `680`,
    1445: `680`,
    1446: `680`,
    1447: `681`,
    1448: `682`,
    1449: `682`,
    145: `2`,
    1450: `683`,
    1451: `684`,
    1452: `684`,
    1453: `685`,
    1454: `686`,
    1455: `686`,
    1456: `687`,
    1457: `688`,
    1458: `688`,
    1459: `689`,
    146: `2`,
    1460: `689`,
    1461: `690`,
    1462: `691`,
    1463: `692`,
    1464: `693`,
    1465: `693`,
    1466: `694`,
    1467: `695`,
    1468: `696`,
    1469: `696`,
    147: `2`,
    1470: `697`,
    1471: `698`,
    1472: `699`,
    1473: `699`,
    1474: `700`,
    1475: `700`,
    1476: `701`,
    1477: `701`,
    1478: `702`,
    1479: `703`,
    148: `2`,
    1480: `704`,
    1481: `704`,
    1482: `705`,
    1483: `705`,
    1484: `706`,
    1485: `706`,
    1486: `707`,
    1487: `708`,
    1488: `709`,
    1489: `709`,
    149: `2`,
    1490: `710`,
    1491: `710`,
    1492: `711`,
    1493: `711`,
    1494: `712`,
    1495: `713`,
    1496: `713`,
    1497: `714`,
    1498: `715`,
    1499: `715`,
    15: `2`,
    150: `2`,
    1500: `716`,
    1501: `717`,
    1502: `717`,
    1503: `718`,
    1504: `719`,
    1505: `719`,
    1506: `720`,
    1507: `720`,
    1508: `721`,
    1509: `721`,
    151: `2`,
    1510: `724`,
    1511: `724`,
    1512: `725`,
    1513: `725`,
    1514: `725`,
    1515: `726`,
    1516: `727`,
    1517: `727`,
    1518: `727`,
    1519: `729`,
    152: `2`,
    1520: `729`,
    1521: `730`,
    1522: `730`,
    1523: `731`,
    1524: `732`,
    1525: `733`,
    1526: `733`,
    1527: `734`,
    1528: `735`,
    1529: `735`,
    153: `2`,
    1530: `735`,
    1531: `736`,
    1532: `737`,
    1533: `738`,
    1534: `738`,
    1535: `739`,
    1536: `739`,
    1537: `741`,
    1538: `741`,
    1539: `742`,
    154: `2`,
    1540: `742`,
    1541: `743`,
    1542: `744`,
    1543: `744`,
    1544: `745`,
    1545: `745`,
    1546: `745`,
    1547: `746`,
    1548: `747`,
    1549: `747`,
    155: `2`,
    1550: `748`,
    1551: `748`,
    1552: `749`,
    1553: `749`,
    1554: `749`,
    1555: `750`,
    1556: `751`,
    1557: `752`,
    1558: `752`,
    1559: `753`,
    156: `2`,
    1560: `753`,
    1561: `753`,
    1562: `754`,
    1563: `755`,
    1564: `756`,
    1565: `756`,
    1566: `757`,
    1567: `757`,
    1568: `757`,
    1569: `758`,
    157: `2`,
    1570: `758`,
    1571: `759`,
    1572: `760`,
    1573: `761`,
    1574: `761`,
    1575: `762`,
    1576: `762`,
    1577: `763`,
    1578: `763`,
    1579: `763`,
    158: `2`,
    1580: `764`,
    1581: `764`,
    1582: `765`,
    1583: `766`,
    1584: `767`,
    1585: `767`,
    1586: `768`,
    1587: `768`,
    1588: `769`,
    1589: `769`,
    159: `2`,
    1590: `769`,
    1591: `770`,
    1592: `770`,
    1593: `771`,
    1594: `772`,
    1595: `773`,
    1596: `773`,
    1597: `774`,
    1598: `775`,
    1599: `775`,
    16: `2`,
    160: `2`,
    1600: `775`,
    1601: `776`,
    1602: `776`,
    1603: `777`,
    1604: `778`,
    1605: `779`,
    1606: `780`,
    1607: `780`,
    1608: `781`,
    1609: `782`,
    161: `2`,
    1610: `782`,
    1611: `783`,
    1612: `784`,
    1613: `785`,
    1614: `785`,
    1615: `786`,
    1616: `787`,
    1617: `788`,
    1618: `789`,
    1619: `789`,
    162: `2`,
    1620: `790`,
    1621: `791`,
    1622: `792`,
    1623: `794`,
    1624: `794`,
    1625: `794`,
    1626: `795`,
    1627: `795`,
    1628: `795`,
    1629: `798`,
    163: `2`,
    1630: `798`,
    1631: `798`,
    1632: `800`,
    1633: `800`,
    1634: `801`,
    1635: `801`,
    1636: `801`,
    1637: `802`,
    1638: `802`,
    1639: `803`,
    164: `2`,
    1640: `803`,
    1641: `804`,
    1642: `804`,
    1643: `804`,
    1644: `805`,
    1645: `806`,
    1646: `806`,
    1647: `807`,
    1648: `807`,
    1649: `807`,
    165: `2`,
    1650: `808`,
    1651: `809`,
    1652: `810`,
    1653: `815`,
    1654: `815`,
    1655: `817`,
    1656: `818`,
    1657: `818`,
    1658: `819`,
    1659: `820`,
    166: `2`,
    1660: `820`,
    1661: `821`,
    1662: `822`,
    1663: `822`,
    1664: `822`,
    1665: `823`,
    1666: `823`,
    1667: `823`,
    1668: `824`,
    1669: `824`,
    167: `2`,
    1670: `825`,
    1671: `825`,
    1672: `827`,
    1673: `828`,
    1674: `828`,
    1675: `829`,
    1676: `830`,
    1677: `830`,
    1678: `831`,
    1679: `832`,
    168: `2`,
    1680: `832`,
    1681: `832`,
    1682: `833`,
    1683: `833`,
    1684: `833`,
    1685: `834`,
    1686: `834`,
    1687: `835`,
    1688: `835`,
    1689: `836`,
    169: `2`,
    1690: `836`,
    1691: `836`,
    1692: `837`,
    1693: `837`,
    1694: `838`,
    1695: `838`,
    1696: `839`,
    1697: `839`,
    1698: `840`,
    1699: `841`,
    17: `2`,
    170: `2`,
    1700: `846`,
    1701: `846`,
    1702: `847`,
    1703: `847`,
    1704: `847`,
    1705: `848`,
    1706: `848`,
    1707: `849`,
    1708: `849`,
    1709: `850`,
    171: `2`,
    1710: `850`,
    1711: `851`,
    1712: `852`,
    1713: `857`,
    1714: `857`,
    1715: `858`,
    1716: `858`,
    1717: `859`,
    1718: `860`,
    1719: `860`,
    172: `2`,
    1720: `860`,
    1721: `861`,
    1722: `861`,
    1723: `862`,
    1724: `862`,
    1725: `863`,
    1726: `864`,
    1727: `864`,
    1728: `864`,
    1729: `865`,
    173: `2`,
    1730: `866`,
    1731: `866`,
    1732: `866`,
    1733: `867`,
    1734: `867`,
    1735: `869`,
    1736: `869`,
    1737: `870`,
    1738: `870`,
    1739: `870`,
    174: `2`,
    1740: `871`,
    1741: `871`,
    1742: `872`,
    1743: `873`,
    1744: `878`,
    1745: `878`,
    1746: `880`,
    1747: `881`,
    1748: `881`,
    1749: `882`,
    175: `2`,
    1750: `883`,
    1751: `883`,
    1752: `884`,
    1753: `885`,
    1754: `885`,
    1755: `885`,
    1756: `886`,
    1757: `886`,
    1758: `886`,
    1759: `887`,
    176: `2`,
    1760: `888`,
    1761: `888`,
    1762: `889`,
    1763: `889`,
    1764: `890`,
    1765: `891`,
    1766: `897`,
    1767: `898`,
    1768: `899`,
    1769: `899`,
    177: `2`,
    1770: `900`,
    1771: `901`,
    1772: `901`,
    1773: `902`,
    1774: `902`,
    1775: `903`,
    1776: `904`,
    1777: `904`,
    1778: `904`,
    1779: `905`,
    178: `2`,
    1780: `905`,
    1781: `905`,
    1782: `906`,
    1783: `907`,
    1784: `908`,
    1785: `908`,
    1786: `909`,
    1787: `910`,
    1788: `910`,
    1789: `911`,
    179: `2`,
    1790: `911`,
    1791: `912`,
    1792: `913`,
    1793: `913`,
    1794: `913`,
    1795: `914`,
    1796: `914`,
    1797: `914`,
    1798: `915`,
    1799: `916`,
    18: `2`,
    180: `2`,
    1800: `917`,
    1801: `917`,
    1802: `918`,
    1803: `919`,
    1804: `919`,
    1805: `920`,
    1806: `920`,
    1807: `921`,
    1808: `922`,
    1809: `922`,
    181: `2`,
    1810: `922`,
    1811: `923`,
    1812: `923`,
    1813: `923`,
    1814: `925`,
    1815: `926`,
    1816: `927`,
    1817: `927`,
    1818: `928`,
    1819: `929`,
    182: `2`,
    1820: `929`,
    1821: `930`,
    1822: `931`,
    1823: `931`,
    1824: `932`,
    1825: `933`,
    1826: `933`,
    1827: `934`,
    1828: `935`,
    1829: `935`,
    183: `2`,
    1830: `935`,
    1831: `936`,
    1832: `936`,
    1833: `936`,
    1834: `937`,
    1835: `937`,
    1836: `938`,
    1837: `939`,
    1838: `939`,
    1839: `939`,
    184: `2`,
    1840: `940`,
    1841: `940`,
    1842: `940`,
    1843: `941`,
    1844: `941`,
    1845: `942`,
    1846: `942`,
    1847: `943`,
    1848: `944`,
    1849: `944`,
    185: `2`,
    1850: `945`,
    1851: `946`,
    1852: `946`,
    1853: `947`,
    1854: `948`,
    1855: `950`,
    1856: `950`,
    1857: `950`,
    1858: `950`,
    1859: `950`,
    186: `2`,
    1860: `950`,
    1861: `950`,
    1862: `950`,
    1863: `950`,
    1864: `950`,
    1865: `951`,
    1866: `951`,
    1867: `952`,
    1868: `953`,
    1869: `954`,
    187: `2`,
    1870: `954`,
    1871: `955`,
    1872: `955`,
    1873: `956`,
    1874: `956`,
    1875: `957`,
    1876: `957`,
    1877: `957`,
    1878: `958`,
    1879: `958`,
    188: `2`,
    1880: `959`,
    1881: `959`,
    1882: `959`,
    1883: `960`,
    1884: `961`,
    1885: `961`,
    1886: `962`,
    1887: `962`,
    1888: `963`,
    1889: `964`,
    189: `2`,
    1890: `964`,
    1891: `964`,
    1892: `965`,
    1893: `965`,
    1894: `966`,
    1895: `966`,
    1896: `967`,
    1897: `968`,
    1898: `968`,
    1899: `968`,
    19: `2`,
    190: `2`,
    1900: `969`,
    1901: `970`,
    1902: `971`,
    1903: `971`,
    1904: `972`,
    1905: `972`,
    1906: `972`,
    1907: `973`,
    1908: `974`,
    1909: `974`,
    191: `2`,
    1910: `975`,
    1911: `975`,
    1912: `975`,
    1913: `976`,
    1914: `976`,
    1915: `977`,
    1916: `978`,
    1917: `978`,
    1918: `978`,
    1919: `979`,
    192: `2`,
    1920: `979`,
    1921: `980`,
    1922: `980`,
    1923: `980`,
    1924: `981`,
    1925: `981`,
    1926: `982`,
    1927: `983`,
    1928: `983`,
    1929: `983`,
    193: `2`,
    1930: `984`,
    1931: `985`,
    1932: `986`,
    1933: `986`,
    1934: `987`,
    1935: `987`,
    1936: `987`,
    1937: `988`,
    1938: `989`,
    1939: `989`,
    194: `2`,
    1940: `990`,
    1941: `991`,
    1942: `991`,
    1943: `992`,
    1944: `992`,
    1945: `993`,
    1946: `994`,
    1947: `995`,
    1948: `996`,
    1949: `996`,
    195: `2`,
    1950: `997`,
    1951: `997`,
    1952: `998`,
    1953: `999`,
    1954: `1000`,
    1955: `1001`,
    1956: `1001`,
    1957: `1002`,
    1958: `1002`,
    1959: `1003`,
    196: `2`,
    1960: `1004`,
    1961: `1005`,
    1962: `1006`,
    1963: `1006`,
    1964: `1007`,
    1965: `1007`,
    1966: `1008`,
    1967: `1008`,
    1968: `1009`,
    1969: `1010`,
    197: `2`,
    1970: `1011`,
    1971: `1011`,
    1972: `1012`,
    1973: `1012`,
    1974: `1013`,
    1975: `1013`,
    1976: `1014`,
    1977: `1015`,
    1978: `1016`,
    1979: `1016`,
    198: `2`,
    1980: `1017`,
    1981: `1017`,
    1982: `1018`,
    1983: `1018`,
    1984: `1019`,
    1985: `1019`,
    1986: `1019`,
    1987: `1022`,
    1988: `1022`,
    1989: `1023`,
    199: `2`,
    1990: `1023`,
    1991: `1023`,
    1992: `1024`,
    1993: `1024`,
    1994: `1025`,
    1995: `1025`,
    1996: `1026`,
    1997: `1026`,
    1998: `1026`,
    1999: `1027`,
    2: `2`,
    20: `2`,
    200: `2`,
    2000: `1027`,
    2001: `1027`,
    2002: `1028`,
    2003: `1029`,
    2004: `1030`,
    2005: `1035`,
    2006: `1035`,
    2007: `1036`,
    2008: `1036`,
    2009: `1037`,
    201: `2`,
    2010: `1038`,
    2011: `1039`,
    2012: `1040`,
    2013: `1040`,
    2014: `1041`,
    2015: `1041`,
    2016: `1042`,
    2017: `1043`,
    2018: `1043`,
    2019: `1044`,
    202: `2`,
    2020: `1045`,
    2021: `1045`,
    2022: `1046`,
    2023: `1047`,
    2024: `1047`,
    2025: `1048`,
    2026: `1049`,
    2027: `1050`,
    2028: `1050`,
    2029: `1051`,
    203: `4`,
    2030: `1052`,
    2031: `1053`,
    2032: `1053`,
    2033: `1054`,
    2034: `1054`,
    2035: `1055`,
    2036: `1055`,
    2037: `1056`,
    2038: `1056`,
    2039: `1058`,
    204: `4`,
    2040: `1058`,
    2041: `1059`,
    2042: `1059`,
    2043: `1060`,
    2044: `1060`,
    2045: `1061`,
    2046: `1061`,
    2047: `1062`,
    2048: `1063`,
    2049: `1063`,
    205: `5`,
    2050: `1064`,
    2051: `1064`,
    2052: `1065`,
    2053: `1065`,
    2054: `1067`,
    2055: `1068`,
    2056: `1068`,
    2057: `1069`,
    2058: `1069`,
    2059: `1070`,
    206: `5`,
    2060: `1070`,
    2061: `1071`,
    2062: `1071`,
    2063: `1075`,
    2064: `1075`,
    2065: `1076`,
    2066: `1076`,
    2067: `1077`,
    2068: `1082`,
    2069: `1082`,
    207: `5`,
    2070: `1083`,
    2071: `1084`,
    2072: `1084`,
    2073: `1085`,
    2074: `1086`,
    2075: `1086`,
    2076: `1087`,
    2077: `1088`,
    2078: `1089`,
    2079: `1090`,
    208: `6`,
    2080: `1090`,
    2081: `1090`,
    2082: `1091`,
    2083: `1091`,
    2084: `1091`,
    2085: `1092`,
    2086: `1093`,
    2087: `1093`,
    2088: `1094`,
    2089: `1094`,
    209: `7`,
    2090: `1094`,
    2091: `1094`,
    2092: `1094`,
    2093: `1094`,
    2094: `1094`,
    2095: `1094`,
    2096: `1094`,
    2097: `1094`,
    2098: `1095`,
    2099: `1095`,
    21: `2`,
    210: `8`,
    2100: `1096`,
    2101: `1097`,
    2102: `1098`,
    2103: `1098`,
    2104: `1099`,
    2105: `1100`,
    2106: `1100`,
    2107: `1101`,
    2108: `1102`,
    2109: `1103`,
    211: `9`,
    2110: `1103`,
    2111: `1104`,
    2112: `1105`,
    2113: `1105`,
    2114: `1106`,
    2115: `1107`,
    2116: `1112`,
    2117: `1112`,
    2118: `1114`,
    2119: `1115`,
    212: `10`,
    2120: `1115`,
    2121: `1116`,
    2122: `1117`,
    2123: `1117`,
    2124: `1118`,
    2125: `1119`,
    2126: `1119`,
    2127: `1119`,
    2128: `1120`,
    2129: `1120`,
    213: `11`,
    2130: `1120`,
    2131: `1121`,
    2132: `1121`,
    2133: `1122`,
    2134: `1123`,
    2135: `1123`,
    2136: `1123`,
    2137: `1124`,
    2138: `1124`,
    2139: `1125`,
    214: `11`,
    2140: `1126`,
    2141: `1127`,
    2142: `1127`,
    2143: `1128`,
    2144: `1129`,
    2145: `1129`,
    2146: `1130`,
    2147: `1130`,
    2148: `1130`,
    2149: `1131`,
    215: `12`,
    2150: `1131`,
    2151: `1131`,
    2152: `1131`,
    2153: `1131`,
    2154: `1131`,
    2155: `1131`,
    2156: `1131`,
    2157: `1131`,
    2158: `1131`,
    2159: `1132`,
    216: `13`,
    2160: `1132`,
    2161: `1133`,
    2162: `1134`,
    2163: `1135`,
    2164: `1135`,
    2165: `1136`,
    2166: `1136`,
    2167: `1137`,
    2168: `1137`,
    2169: `1138`,
    217: `14`,
    2170: `1138`,
    2171: `1139`,
    2172: `1139`,
    2173: `1140`,
    2174: `1141`,
    2175: `1141`,
    2176: `1142`,
    2177: `1142`,
    2178: `1143`,
    2179: `1143`,
    218: `15`,
    2180: `1143`,
    2181: `1146`,
    2182: `1146`,
    2183: `1147`,
    2184: `1147`,
    2185: `1147`,
    2186: `1148`,
    2187: `1148`,
    2188: `1149`,
    2189: `1149`,
    219: `15`,
    2190: `1150`,
    2191: `1150`,
    2192: `1150`,
    2193: `1151`,
    2194: `1151`,
    2195: `1151`,
    2196: `1152`,
    2197: `1153`,
    2198: `1154`,
    2199: `1159`,
    22: `2`,
    220: `16`,
    2200: `1159`,
    2201: `1160`,
    2202: `1160`,
    2203: `1161`,
    2204: `1162`,
    2205: `1163`,
    2206: `1164`,
    2207: `1164`,
    2208: `1165`,
    2209: `1165`,
    221: `16`,
    2210: `1166`,
    2211: `1167`,
    2212: `1167`,
    2213: `1168`,
    2214: `1169`,
    2215: `1169`,
    2216: `1170`,
    2217: `1171`,
    2218: `1171`,
    2219: `1172`,
    222: `17`,
    2220: `1173`,
    2221: `1174`,
    2222: `1174`,
    2223: `1175`,
    2224: `1176`,
    2225: `1177`,
    2226: `1177`,
    2227: `1178`,
    2228: `1178`,
    2229: `1179`,
    223: `18`,
    2230: `1179`,
    2231: `1180`,
    2232: `1180`,
    2233: `1182`,
    2234: `1182`,
    2235: `1183`,
    2236: `1183`,
    2237: `1184`,
    2238: `1184`,
    2239: `1185`,
    224: `18`,
    2240: `1185`,
    2241: `1186`,
    2242: `1187`,
    2243: `1187`,
    2244: `1188`,
    2245: `1188`,
    2246: `1189`,
    2247: `1189`,
    2248: `1191`,
    2249: `1192`,
    225: `19`,
    2250: `1192`,
    2251: `1193`,
    2252: `1193`,
    2253: `1194`,
    2254: `1194`,
    2255: `1195`,
    2256: `1195`,
    2257: `1199`,
    2258: `1199`,
    2259: `1200`,
    226: `20`,
    2260: `1200`,
    2261: `1201`,
    2262: `1206`,
    2263: `1206`,
    2264: `1207`,
    2265: `1208`,
    2266: `1208`,
    2267: `1209`,
    2268: `1210`,
    2269: `1210`,
    227: `21`,
    2270: `1211`,
    2271: `1212`,
    2272: `1213`,
    2273: `1214`,
    2274: `1214`,
    2275: `1214`,
    2276: `1215`,
    2277: `1215`,
    2278: `1215`,
    2279: `1216`,
    228: `21`,
    2280: `1217`,
    2281: `1217`,
    2282: `1218`,
    2283: `1218`,
    2284: `1218`,
    2285: `1218`,
    2286: `1218`,
    2287: `1218`,
    2288: `1218`,
    2289: `1218`,
    229: `22`,
    2290: `1218`,
    2291: `1218`,
    2292: `1219`,
    2293: `1219`,
    2294: `1220`,
    2295: `1221`,
    2296: `1222`,
    2297: `1222`,
    2298: `1223`,
    2299: `1224`,
    23: `2`,
    230: `23`,
    2300: `1224`,
    2301: `1225`,
    2302: `1226`,
    2303: `1227`,
    2304: `1227`,
    2305: `1228`,
    2306: `1229`,
    2307: `1229`,
    2308: `1230`,
    2309: `1231`,
    231: `24`,
    2310: `1236`,
    2311: `1236`,
    2312: `1238`,
    2313: `1239`,
    2314: `1239`,
    2315: `1240`,
    2316: `1241`,
    2317: `1241`,
    2318: `1242`,
    2319: `1243`,
    232: `25`,
    2320: `1243`,
    2321: `1243`,
    2322: `1244`,
    2323: `1244`,
    2324: `1244`,
    2325: `1245`,
    2326: `1245`,
    2327: `1246`,
    2328: `1247`,
    2329: `1247`,
    233: `26`,
    2330: `1247`,
    2331: `1248`,
    2332: `1248`,
    2333: `1249`,
    2334: `1250`,
    2335: `1251`,
    2336: `1251`,
    2337: `1252`,
    2338: `1253`,
    2339: `1253`,
    234: `27`,
    2340: `1254`,
    2341: `1254`,
    2342: `1254`,
    2343: `1255`,
    2344: `1255`,
    2345: `1255`,
    2346: `1255`,
    2347: `1255`,
    2348: `1255`,
    2349: `1255`,
    235: `28`,
    2350: `1255`,
    2351: `1255`,
    2352: `1255`,
    2353: `1256`,
    2354: `1256`,
    2355: `1257`,
    2356: `1258`,
    2357: `1259`,
    2358: `1259`,
    2359: `1260`,
    236: `29`,
    2360: `1260`,
    2361: `1261`,
    2362: `1261`,
    2363: `1262`,
    2364: `1262`,
    2365: `1263`,
    2366: `1263`,
    2367: `1264`,
    2368: `1265`,
    2369: `1265`,
    237: `30`,
    2370: `1266`,
    2371: `1266`,
    2372: `1267`,
    2373: `1267`,
    2374: `1267`,
    2375: `1270`,
    2376: `1270`,
    2377: `1270`,
    2378: `1272`,
    2379: `1272`,
    238: `30`,
    2380: `1273`,
    2381: `1273`,
    2382: `1273`,
    2383: `1274`,
    2384: `1274`,
    2385: `1275`,
    2386: `1275`,
    2387: `1276`,
    2388: `1276`,
    2389: `1276`,
    239: `31`,
    2390: `1277`,
    2391: `1277`,
    2392: `1278`,
    2393: `1278`,
    2394: `1279`,
    2395: `1279`,
    2396: `1279`,
    2397: `1280`,
    2398: `1280`,
    2399: `1281`,
    24: `2`,
    240: `32`,
    2400: `1281`,
    2401: `1282`,
    2402: `1282`,
    2403: `1282`,
    2404: `1283`,
    2405: `1283`,
    2406: `1284`,
    2407: `1284`,
    2408: `1285`,
    2409: `1285`,
    241: `33`,
    2410: `1286`,
    2411: `1287`,
    2412: `1287`,
    2413: `1287`,
    2414: `1288`,
    2415: `1288`,
    2416: `1289`,
    2417: `1290`,
    2418: `1290`,
    2419: `1290`,
    242: `33`,
    2420: `1291`,
    2421: `1291`,
    2422: `1292`,
    2423: `1292`,
    2424: `1293`,
    2425: `1293`,
    2426: `1294`,
    2427: `1295`,
    2428: `1295`,
    2429: `1295`,
    243: `34`,
    2430: `1296`,
    2431: `1296`,
    2432: `1297`,
    2433: `1298`,
    2434: `1298`,
    2435: `1298`,
    2436: `1299`,
    2437: `1299`,
    2438: `1300`,
    2439: `1300`,
    244: `35`,
    2440: `1301`,
    2441: `1301`,
    2442: `1301`,
    2443: `1302`,
    2444: `1302`,
    2445: `1303`,
    2446: `1304`,
    2447: `1309`,
    2448: `1309`,
    2449: `1310`,
    245: `36`,
    2450: `1310`,
    2451: `1310`,
    2452: `1311`,
    2453: `1311`,
    2454: `1312`,
    2455: `1313`,
    2456: `1318`,
    2457: `1318`,
    2458: `1320`,
    2459: `1321`,
    246: `36`,
    2460: `1321`,
    2461: `1322`,
    2462: `1323`,
    2463: `1323`,
    2464: `1324`,
    2465: `1325`,
    2466: `1325`,
    2467: `1325`,
    2468: `1326`,
    2469: `1326`,
    247: `37`,
    2470: `1326`,
    2471: `1327`,
    2472: `1328`,
    2473: `1328`,
    2474: `1329`,
    2475: `1329`,
    2476: `1330`,
    2477: `1331`,
    2478: `1337`,
    2479: `1337`,
    248: `38`,
    2480: `1338`,
    2481: `1338`,
    2482: `1339`,
    2483: `1340`,
    2484: `1340`,
    2485: `1341`,
    2486: `1341`,
    2487: `1343`,
    2488: `1344`,
    2489: `1344`,
    249: `40`,
    2490: `1345`,
    2491: `1345`,
    2492: `1346`,
    2493: `1346`,
    2494: `1347`,
    2495: `1348`,
    2496: `1349`,
    2497: `1349`,
    2498: `1349`,
    2499: `1350`,
    25: `2`,
    250: `40`,
    2500: `1350`,
    2501: `1350`,
    2502: `1351`,
    2503: `1352`,
    2504: `1352`,
    2505: `1353`,
    2506: `1353`,
    2507: `1354`,
    2508: `1355`,
    2509: `1361`,
    251: `40`,
    2510: `1362`,
    2511: `1363`,
    2512: `1363`,
    2513: `1364`,
    2514: `1365`,
    2515: `1365`,
    2516: `1366`,
    2517: `1366`,
    2518: `1367`,
    2519: `1368`,
    252: `40`,
    2520: `1368`,
    2521: `1368`,
    2522: `1369`,
    2523: `1369`,
    2524: `1369`,
    2525: `1371`,
    2526: `1372`,
    2527: `1373`,
    2528: `1373`,
    2529: `1374`,
    253: `40`,
    2530: `1375`,
    2531: `1375`,
    2532: `1376`,
    2533: `1377`,
    2534: `1377`,
    2535: `1378`,
    2536: `1379`,
    2537: `1379`,
    2538: `1380`,
    2539: `1381`,
    254: `40`,
    2540: `1381`,
    2541: `1381`,
    2542: `1382`,
    2543: `1382`,
    2544: `1382`,
    2545: `1383`,
    2546: `1383`,
    2547: `1384`,
    2548: `1385`,
    2549: `1385`,
    255: `40`,
    2550: `1385`,
    2551: `1386`,
    2552: `1386`,
    2553: `1386`,
    2554: `1387`,
    2555: `1387`,
    2556: `1388`,
    2557: `1388`,
    2558: `1389`,
    2559: `1390`,
    256: `40`,
    2560: `1390`,
    2561: `1391`,
    2562: `1392`,
    2563: `1392`,
    2564: `1393`,
    2565: `1394`,
    2566: `1396`,
    2567: `1396`,
    2568: `1397`,
    2569: `1397`,
    257: `40`,
    2570: `1398`,
    2571: `1399`,
    2572: `1399`,
    2573: `1399`,
    2574: `1400`,
    2575: `1400`,
    2576: `1401`,
    2577: `1401`,
    2578: `1402`,
    2579: `1402`,
    258: `40`,
    2580: `1403`,
    2581: `1403`,
    2582: `1404`,
    2583: `1405`,
    2584: `1406`,
    2585: `1406`,
    2586: `1407`,
    2587: `1407`,
    2588: `1407`,
    2589: `1408`,
    259: `40`,
    2590: `1408`,
    2591: `1409`,
    2592: `1409`,
    2593: `1410`,
    2594: `1411`,
    2595: `1411`,
    2596: `1412`,
    2597: `1413`,
    2598: `1413`,
    2599: `1414`,
    26: `2`,
    260: `40`,
    2600: `1415`,
    2601: `1418`,
    2602: `1419`,
    2603: `1420`,
    2604: `1420`,
    2605: `1421`,
    2606: `1422`,
    2607: `1422`,
    2608: `1423`,
    2609: `1424`,
    261: `40`,
    2610: `1424`,
    2611: `1425`,
    2612: `1426`,
    2613: `1426`,
    2614: `1427`,
    2615: `1428`,
    2616: `1428`,
    2617: `1428`,
    2618: `1429`,
    2619: `1429`,
    262: `40`,
    2620: `1429`,
    2621: `1430`,
    2622: `1430`,
    2623: `1431`,
    2624: `1432`,
    2625: `1432`,
    2626: `1432`,
    2627: `1433`,
    2628: `1433`,
    2629: `1433`,
    263: `40`,
    2630: `1435`,
    2631: `1436`,
    2632: `1437`,
    2633: `1437`,
    2634: `1438`,
    2635: `1439`,
    2636: `1439`,
    2637: `1440`,
    2638: `1441`,
    2639: `1441`,
    264: `40`,
    2640: `1442`,
    2641: `1443`,
    2642: `1443`,
    2643: `1444`,
    2644: `1445`,
    2645: `1445`,
    2646: `1445`,
    2647: `1446`,
    2648: `1446`,
    2649: `1446`,
    265: `40`,
    2650: `1447`,
    2651: `1447`,
    2652: `1448`,
    2653: `1449`,
    2654: `1449`,
    2655: `1449`,
    2656: `1450`,
    2657: `1450`,
    2658: `1450`,
    2659: `1451`,
    266: `40`,
    2660: `1451`,
    2661: `1452`,
    2662: `1452`,
    2663: `1453`,
    2664: `1454`,
    2665: `1454`,
    2666: `1455`,
    2667: `1455`,
    2668: `1455`,
    2669: `1455`,
    267: `40`,
    2670: `1455`,
    2671: `1455`,
    2672: `1455`,
    2673: `1455`,
    2674: `1455`,
    2675: `1455`,
    2676: `1456`,
    2677: `1456`,
    2678: `1457`,
    2679: `1458`,
    268: `40`,
    2680: `1459`,
    2681: `1459`,
    2682: `1460`,
    2683: `1460`,
    2684: `1461`,
    2685: `1461`,
    2686: `1462`,
    2687: `1462`,
    2688: `1463`,
    2689: `1464`,
    269: `40`,
    2690: `1464`,
    2691: `1465`,
    2692: `1465`,
    2693: `1465`,
    2694: `1465`,
    2695: `1465`,
    2696: `1465`,
    2697: `1466`,
    2698: `1466`,
    2699: `1467`,
    27: `2`,
    270: `40`,
    2700: `1468`,
    2701: `1470`,
    2702: `1470`,
    2703: `1471`,
    2704: `1471`,
    2705: `1471`,
    2706: `1472`,
    2707: `1472`,
    2708: `1473`,
    2709: `1473`,
    271: `40`,
    2710: `1473`,
    2711: `1474`,
    2712: `1475`,
    2713: `1475`,
    2714: `1476`,
    2715: `1476`,
    2716: `1477`,
    2717: `1478`,
    2718: `1478`,
    2719: `1478`,
    272: `40`,
    2720: `1479`,
    2721: `1479`,
    2722: `1480`,
    2723: `1480`,
    2724: `1481`,
    2725: `1482`,
    2726: `1482`,
    2727: `1482`,
    2728: `1483`,
    2729: `1484`,
    273: `40`,
    2730: `1485`,
    2731: `1485`,
    2732: `1486`,
    2733: `1486`,
    2734: `1486`,
    2735: `1487`,
    2736: `1488`,
    2737: `1488`,
    2738: `1489`,
    2739: `1489`,
    274: `40`,
    2740: `1490`,
    2741: `1491`,
    2742: `1491`,
    2743: `1491`,
    2744: `1492`,
    2745: `1492`,
    2746: `1493`,
    2747: `1493`,
    2748: `1494`,
    2749: `1495`,
    275: `40`,
    2750: `1495`,
    2751: `1495`,
    2752: `1496`,
    2753: `1497`,
    2754: `1498`,
    2755: `1498`,
    2756: `1499`,
    2757: `1499`,
    2758: `1499`,
    2759: `1500`,
    276: `40`,
    2760: `1501`,
    2761: `1501`,
    2762: `1502`,
    2763: `1502`,
    2764: `1502`,
    2765: `1503`,
    2766: `1504`,
    2767: `1504`,
    2768: `1505`,
    2769: `1505`,
    277: `40`,
    2770: `1506`,
    2771: `1507`,
    2772: `1508`,
    2773: `1509`,
    2774: `1509`,
    2775: `1510`,
    2776: `1510`,
    2777: `1511`,
    2778: `1512`,
    2779: `1513`,
    278: `40`,
    2780: `1514`,
    2781: `1514`,
    2782: `1515`,
    2783: `1515`,
    2784: `1516`,
    2785: `1517`,
    2786: `1518`,
    2787: `1519`,
    2788: `1519`,
    2789: `1520`,
    279: `40`,
    2790: `1520`,
    2791: `1521`,
    2792: `1521`,
    2793: `1522`,
    2794: `1523`,
    2795: `1524`,
    2796: `1524`,
    2797: `1525`,
    2798: `1525`,
    2799: `1526`,
    28: `2`,
    280: `40`,
    2800: `1526`,
    2801: `1527`,
    2802: `1528`,
    2803: `1529`,
    2804: `1529`,
    2805: `1530`,
    2806: `1530`,
    2807: `1531`,
    2808: `1531`,
    2809: `1532`,
    281: `40`,
    2810: `1532`,
    2811: `1532`,
    2812: `1535`,
    2813: `1535`,
    2814: `1536`,
    2815: `1536`,
    2816: `1536`,
    2817: `1537`,
    2818: `1537`,
    2819: `1538`,
    282: `40`,
    2820: `1538`,
    2821: `1540`,
    2822: `1541`,
    2823: `1541`,
    2824: `1542`,
    2825: `1543`,
    2826: `1543`,
    2827: `1544`,
    2828: `1545`,
    2829: `1545`,
    283: `40`,
    2830: `1545`,
    2831: `1546`,
    2832: `1546`,
    2833: `1546`,
    2834: `1547`,
    2835: `1548`,
    2836: `1548`,
    2837: `1549`,
    2838: `1549`,
    2839: `1550`,
    284: `40`,
    2840: `1551`,
    2841: `1556`,
    2842: `1556`,
    2843: `1557`,
    2844: `1557`,
    2845: `1558`,
    2846: `1559`,
    2847: `1559`,
    2848: `1559`,
    2849: `1560`,
    285: `40`,
    2850: `1560`,
    2851: `1561`,
    2852: `1562`,
    2853: `1563`,
    2854: `1563`,
    2855: `1564`,
    2856: `1565`,
    2857: `1565`,
    2858: `1566`,
    2859: `1566`,
    286: `40`,
    2860: `1566`,
    2861: `1567`,
    2862: `1567`,
    2863: `1567`,
    2864: `1567`,
    2865: `1567`,
    2866: `1567`,
    2867: `1567`,
    2868: `1567`,
    2869: `1567`,
    287: `40`,
    2870: `1567`,
    2871: `1568`,
    2872: `1568`,
    2873: `1569`,
    2874: `1570`,
    2875: `1571`,
    2876: `1571`,
    2877: `1572`,
    2878: `1572`,
    2879: `1573`,
    288: `40`,
    2880: `1573`,
    2881: `1574`,
    2882: `1574`,
    2883: `1575`,
    2884: `1576`,
    2885: `1577`,
    2886: `1578`,
    2887: `1578`,
    2888: `1579`,
    2889: `1579`,
    289: `40`,
    2890: `1580`,
    2891: `1581`,
    2892: `1581`,
    2893: `1582`,
    2894: `1583`,
    2895: `1583`,
    2896: `1584`,
    2897: `1585`,
    2898: `1585`,
    2899: `1586`,
    29: `2`,
    290: `40`,
    2900: `1587`,
    2901: `1588`,
    2902: `1588`,
    2903: `1589`,
    2904: `1590`,
    2905: `1591`,
    2906: `1591`,
    2907: `1592`,
    2908: `1592`,
    2909: `1593`,
    291: `40`,
    2910: `1593`,
    2911: `1594`,
    2912: `1594`,
    2913: `1596`,
    2914: `1596`,
    2915: `1597`,
    2916: `1597`,
    2917: `1598`,
    2918: `1598`,
    2919: `1599`,
    292: `40`,
    2920: `1599`,
    2921: `1600`,
    2922: `1601`,
    2923: `1601`,
    2924: `1602`,
    2925: `1602`,
    2926: `1603`,
    2927: `1603`,
    2928: `1604`,
    2929: `1604`,
    293: `40`,
    2930: `1607`,
    2931: `1607`,
    2932: `1608`,
    2933: `1608`,
    2934: `1609`,
    2935: `1614`,
    2936: `1614`,
    2937: `1615`,
    2938: `1616`,
    2939: `1616`,
    294: `40`,
    2940: `1617`,
    2941: `1618`,
    2942: `1618`,
    2943: `1619`,
    2944: `1620`,
    2945: `1621`,
    2946: `1622`,
    2947: `1622`,
    2948: `1622`,
    2949: `1623`,
    295: `40`,
    2950: `1623`,
    2951: `1623`,
    2952: `1624`,
    2953: `1625`,
    2954: `1625`,
    2955: `1626`,
    2956: `1626`,
    2957: `1626`,
    2958: `1626`,
    2959: `1626`,
    296: `40`,
    2960: `1626`,
    2961: `1626`,
    2962: `1626`,
    2963: `1626`,
    2964: `1626`,
    2965: `1627`,
    2966: `1627`,
    2967: `1628`,
    2968: `1629`,
    2969: `1630`,
    297: `40`,
    2970: `1630`,
    2971: `1631`,
    2972: `1632`,
    2973: `1632`,
    2974: `1633`,
    2975: `1634`,
    2976: `1635`,
    2977: `1635`,
    2978: `1636`,
    2979: `1637`,
    298: `40`,
    2980: `1637`,
    2981: `1638`,
    2982: `1639`,
    2983: `1644`,
    2984: `1644`,
    2985: `1645`,
    2986: `1645`,
    2987: `1646`,
    2988: `1646`,
    2989: `1647`,
    299: `40`,
    2990: `1648`,
    2991: `1648`,
    2992: `1649`,
    2993: `1649`,
    2994: `1650`,
    2995: `1650`,
    2996: `1650`,
    2997: `1653`,
    2998: `1653`,
    2999: `1654`,
    3: `2`,
    30: `2`,
    300: `40`,
    3000: `1654`,
    3001: `1654`,
    3002: `1655`,
    3003: `1655`,
    3004: `1656`,
    3005: `1656`,
    3006: `1658`,
    3007: `1659`,
    3008: `1659`,
    3009: `1660`,
    301: `40`,
    3010: `1661`,
    3011: `1661`,
    3012: `1662`,
    3013: `1663`,
    3014: `1663`,
    3015: `1663`,
    3016: `1664`,
    3017: `1664`,
    3018: `1664`,
    3019: `1665`,
    302: `40`,
    3020: `1666`,
    3021: `1666`,
    3022: `1667`,
    3023: `1667`,
    3024: `1668`,
    3025: `1669`,
    3026: `1674`,
    3027: `1674`,
    3028: `1675`,
    3029: `1675`,
    303: `40`,
    3030: `1676`,
    3031: `1677`,
    3032: `1677`,
    3033: `1677`,
    3034: `1678`,
    3035: `1678`,
    3036: `1679`,
    3037: `1680`,
    3038: `1681`,
    3039: `1681`,
    304: `40`,
    3040: `1682`,
    3041: `1683`,
    3042: `1683`,
    3043: `1684`,
    3044: `1684`,
    3045: `1684`,
    3046: `1685`,
    3047: `1685`,
    3048: `1685`,
    3049: `1685`,
    305: `40`,
    3050: `1685`,
    3051: `1685`,
    3052: `1685`,
    3053: `1685`,
    3054: `1685`,
    3055: `1685`,
    3056: `1686`,
    3057: `1686`,
    3058: `1687`,
    3059: `1688`,
    306: `40`,
    3060: `1689`,
    3061: `1689`,
    3062: `1690`,
    3063: `1690`,
    3064: `1691`,
    3065: `1691`,
    3066: `1692`,
    3067: `1692`,
    3068: `1693`,
    3069: `1694`,
    307: `40`,
    3070: `1695`,
    3071: `1696`,
    3072: `1696`,
    3073: `1697`,
    3074: `1697`,
    3075: `1698`,
    3076: `1699`,
    3077: `1699`,
    3078: `1700`,
    3079: `1701`,
    308: `40`,
    3080: `1701`,
    3081: `1702`,
    3082: `1703`,
    3083: `1703`,
    3084: `1704`,
    3085: `1705`,
    3086: `1706`,
    3087: `1706`,
    3088: `1707`,
    3089: `1708`,
    309: `40`,
    3090: `1709`,
    3091: `1709`,
    3092: `1710`,
    3093: `1710`,
    3094: `1711`,
    3095: `1711`,
    3096: `1712`,
    3097: `1712`,
    3098: `1714`,
    3099: `1714`,
    31: `2`,
    310: `40`,
    3100: `1715`,
    3101: `1715`,
    3102: `1716`,
    3103: `1716`,
    3104: `1717`,
    3105: `1717`,
    3106: `1718`,
    3107: `1719`,
    3108: `1719`,
    3109: `1720`,
    311: `40`,
    3110: `1720`,
    3111: `1721`,
    3112: `1721`,
    3113: `1722`,
    3114: `1722`,
    3115: `1725`,
    3116: `1725`,
    3117: `1726`,
    3118: `1726`,
    3119: `1727`,
    312: `40`,
    3120: `1732`,
    3121: `1732`,
    3122: `1733`,
    3123: `1734`,
    3124: `1734`,
    3125: `1735`,
    3126: `1736`,
    3127: `1736`,
    3128: `1737`,
    3129: `1738`,
    313: `40`,
    3130: `1739`,
    3131: `1740`,
    3132: `1740`,
    3133: `1740`,
    3134: `1741`,
    3135: `1741`,
    3136: `1741`,
    3137: `1742`,
    3138: `1743`,
    3139: `1743`,
    314: `40`,
    3140: `1744`,
    3141: `1744`,
    3142: `1744`,
    3143: `1744`,
    3144: `1744`,
    3145: `1744`,
    3146: `1744`,
    3147: `1744`,
    3148: `1744`,
    3149: `1744`,
    315: `40`,
    3150: `1745`,
    3151: `1745`,
    3152: `1746`,
    3153: `1747`,
    3154: `1748`,
    3155: `1748`,
    3156: `1749`,
    3157: `1750`,
    3158: `1750`,
    3159: `1751`,
    316: `40`,
    3160: `1752`,
    3161: `1753`,
    3162: `1753`,
    3163: `1754`,
    3164: `1755`,
    3165: `1755`,
    3166: `1756`,
    3167: `1757`,
    3168: `1762`,
    3169: `1762`,
    317: `40`,
    3170: `1763`,
    3171: `1763`,
    3172: `1764`,
    3173: `1764`,
    3174: `1765`,
    3175: `1766`,
    3176: `1766`,
    3177: `1767`,
    3178: `1767`,
    3179: `1768`,
    318: `40`,
    3180: `1768`,
    3181: `1768`,
    3182: `1771`,
    3183: `1771`,
    3184: `1772`,
    3185: `1772`,
    3186: `1773`,
    3187: `1774`,
    3188: `1775`,
    3189: `1775`,
    319: `40`,
    3190: `1776`,
    3191: `1776`,
    3192: `1777`,
    3193: `1777`,
    3194: `1778`,
    3195: `1778`,
    3196: `1779`,
    3197: `1779`,
    3198: `1779`,
    3199: `1782`,
    32: `2`,
    320: `40`,
    3200: `1782`,
    3201: `1783`,
    3202: `1783`,
    3203: `1784`,
    3204: `1785`,
    3205: `1786`,
    3206: `1786`,
    3207: `1787`,
    3208: `1787`,
    3209: `1788`,
    321: `40`,
    3210: `1788`,
    3211: `1789`,
    3212: `1789`,
    3213: `1790`,
    3214: `1790`,
    3215: `1790`,
    3216: `1793`,
    3217: `1793`,
    3218: `1793`,
    3219: `1794`,
    322: `40`,
    3220: `1794`,
    3221: `1794`,
    3222: `1797`,
    3223: `1797`,
    3224: `1798`,
    3225: `1798`,
    3226: `1798`,
    3227: `1799`,
    3228: `1799`,
    3229: `1800`,
    323: `40`,
    3230: `1800`,
    3231: `1801`,
    3232: `1801`,
    3233: `1801`,
    3234: `1802`,
    3235: `1802`,
    3236: `1803`,
    3237: `1803`,
    3238: `1804`,
    3239: `1804`,
    324: `40`,
    3240: `1804`,
    3241: `1805`,
    3242: `1805`,
    3243: `1806`,
    3244: `1806`,
    3245: `1807`,
    3246: `1807`,
    3247: `1807`,
    3248: `1808`,
    3249: `1808`,
    325: `40`,
    3250: `1809`,
    3251: `1809`,
    3252: `1810`,
    3253: `1810`,
    3254: `1810`,
    3255: `1811`,
    3256: `1811`,
    3257: `1812`,
    3258: `1812`,
    3259: `1813`,
    326: `40`,
    3260: `1813`,
    3261: `1813`,
    3262: `1814`,
    3263: `1814`,
    3264: `1815`,
    3265: `1815`,
    3266: `1816`,
    3267: `1816`,
    3268: `1817`,
    3269: `1817`,
    327: `40`,
    3270: `1818`,
    3271: `1819`,
    3272: `1819`,
    3273: `1819`,
    3274: `1820`,
    3275: `1821`,
    3276: `1821`,
    3277: `1821`,
    3278: `1822`,
    3279: `1823`,
    328: `40`,
    3280: `1823`,
    3281: `1824`,
    3282: `1824`,
    3283: `1825`,
    3284: `1826`,
    3285: `1826`,
    3286: `1826`,
    3287: `1827`,
    3288: `1827`,
    3289: `1828`,
    329: `40`,
    3290: `1828`,
    3291: `1829`,
    3292: `1830`,
    3293: `1830`,
    3294: `1830`,
    3295: `1831`,
    3296: `1831`,
    3297: `1832`,
    3298: `1833`,
    3299: `1833`,
    33: `2`,
    330: `40`,
    3300: `1833`,
    3301: `1834`,
    3302: `1835`,
    3303: `1835`,
    3304: `1835`,
    3305: `1836`,
    3306: `1836`,
    3307: `1837`,
    3308: `1837`,
    3309: `1838`,
    331: `40`,
    3310: `1838`,
    3311: `1839`,
    3312: `1840`,
    3313: `1840`,
    3314: `1840`,
    3315: `1841`,
    3316: `1841`,
    3317: `1842`,
    3318: `1842`,
    3319: `1843`,
    332: `40`,
    3320: `1843`,
    3321: `1844`,
    3322: `1845`,
    3323: `1845`,
    3324: `1845`,
    3325: `1846`,
    3326: `1846`,
    3327: `1847`,
    3328: `1848`,
    3329: `1848`,
    333: `40`,
    3330: `1848`,
    3331: `1849`,
    3332: `1849`,
    3333: `1850`,
    3334: `1851`,
    3335: `1851`,
    3336: `1851`,
    3337: `1852`,
    3338: `1852`,
    3339: `1853`,
    334: `40`,
    3340: `1853`,
    3341: `1854`,
    3342: `1855`,
    3343: `1855`,
    3344: `1855`,
    3345: `1856`,
    3346: `1856`,
    3347: `1857`,
    3348: `1858`,
    3349: `1858`,
    335: `40`,
    3350: `1858`,
    3351: `1859`,
    3352: `1860`,
    3353: `1860`,
    3354: `1860`,
    3355: `1861`,
    3356: `1861`,
    3357: `1862`,
    3358: `1863`,
    3359: `1863`,
    336: `40`,
    3360: `1863`,
    3361: `1864`,
    3362: `1864`,
    3363: `1865`,
    3364: `1865`,
    3365: `1866`,
    3366: `1866`,
    3367: `1867`,
    3368: `1868`,
    3369: `1868`,
    337: `40`,
    3370: `1868`,
    3371: `1869`,
    3372: `1869`,
    3373: `1870`,
    3374: `1871`,
    3375: `1871`,
    3376: `1871`,
    3377: `1872`,
    3378: `1872`,
    3379: `1873`,
    338: `40`,
    3380: `1873`,
    3381: `1874`,
    3382: `1874`,
    3383: `1875`,
    3384: `1876`,
    3385: `1876`,
    3386: `1877`,
    3387: `1877`,
    3388: `1878`,
    3389: `1879`,
    339: `40`,
    3390: `1879`,
    3391: `1880`,
    3392: `1880`,
    3393: `1881`,
    3394: `1882`,
    3395: `1882`,
    3396: `1882`,
    3397: `1883`,
    3398: `1883`,
    3399: `1884`,
    34: `2`,
    340: `40`,
    3400: `1885`,
    3401: `1885`,
    3402: `1885`,
    3403: `1886`,
    3404: `1886`,
    3405: `1887`,
    3406: `1888`,
    3407: `1889`,
    3408: `1890`,
    3409: `1890`,
    341: `40`,
    3410: `1891`,
    3411: `1891`,
    3412: `1891`,
    3413: `1892`,
    3414: `1892`,
    3415: `1893`,
    3416: `1893`,
    3417: `1894`,
    3418: `1894`,
    3419: `1894`,
    342: `40`,
    3420: `1895`,
    3421: `1895`,
    3422: `1896`,
    3423: `1896`,
    3424: `1897`,
    3425: `1897`,
    3426: `1897`,
    3427: `1898`,
    3428: `1899`,
    3429: `1900`,
    343: `40`,
    3430: `1907`,
    3431: `1907`,
    3432: `1908`,
    3433: `1908`,
    3434: `1909`,
    3435: `1910`,
    3436: `1910`,
    3437: `1910`,
    3438: `1911`,
    3439: `1911`,
    344: `40`,
    3440: `1912`,
    3441: `1912`,
    3442: `1913`,
    3443: `1913`,
    3444: `1914`,
    3445: `1915`,
    3446: `1915`,
    3447: `1915`,
    3448: `1916`,
    3449: `1916`,
    345: `40`,
    3450: `1917`,
    3451: `1918`,
    3452: `1918`,
    3453: `1918`,
    3454: `1919`,
    3455: `1919`,
    3456: `1920`,
    3457: `1920`,
    3458: `1921`,
    3459: `1921`,
    346: `40`,
    3460: `1921`,
    3461: `1922`,
    3462: `1922`,
    3463: `1923`,
    3464: `1923`,
    3465: `1924`,
    3466: `1924`,
    3467: `1924`,
    3468: `1925`,
    3469: `1925`,
    347: `40`,
    3470: `1926`,
    3471: `1927`,
    3472: `1934`,
    3473: `1934`,
    3474: `1935`,
    3475: `1935`,
    3476: `1936`,
    3477: `1937`,
    3478: `1937`,
    3479: `1937`,
    348: `40`,
    3480: `1938`,
    3481: `1938`,
    3482: `1939`,
    3483: `1939`,
    3484: `1940`,
    3485: `1941`,
    3486: `1941`,
    3487: `1941`,
    3488: `1942`,
    3489: `1943`,
    349: `40`,
    3490: `1950`,
    3491: `1950`,
    3492: `1951`,
    3493: `1951`,
    3494: `1952`,
    3495: `1953`,
    3496: `1954`,
    3497: `1955`,
    3498: `1955`,
    3499: `1956`,
    35: `2`,
    350: `40`,
    3500: `1956`,
    3501: `1957`,
    3502: `1958`,
    3503: `1958`,
    3504: `1959`,
    3505: `1960`,
    3506: `1960`,
    3507: `1961`,
    3508: `1962`,
    3509: `1962`,
    351: `40`,
    3510: `1963`,
    3511: `1964`,
    3512: `1965`,
    3513: `1965`,
    3514: `1966`,
    3515: `1967`,
    3516: `1968`,
    3517: `1968`,
    3518: `1969`,
    3519: `1969`,
    352: `40`,
    3520: `1970`,
    3521: `1970`,
    3522: `1971`,
    3523: `1971`,
    3524: `1973`,
    3525: `1973`,
    3526: `1974`,
    3527: `1974`,
    3528: `1975`,
    3529: `1975`,
    353: `40`,
    3530: `1976`,
    3531: `1976`,
    3532: `1977`,
    3533: `1978`,
    3534: `1978`,
    3535: `1979`,
    3536: `1979`,
    3537: `1980`,
    3538: `1980`,
    3539: `1982`,
    354: `40`,
    3540: `1983`,
    3541: `1983`,
    3542: `1984`,
    3543: `1984`,
    3544: `1985`,
    3545: `1985`,
    3546: `1986`,
    3547: `1986`,
    3548: `1990`,
    3549: `1990`,
    355: `40`,
    3550: `1991`,
    3551: `1991`,
    3552: `1992`,
    3553: `1998`,
    3554: `1998`,
    3555: `1999`,
    3556: `2000`,
    3557: `2000`,
    3558: `2001`,
    3559: `2002`,
    356: `40`,
    3560: `2002`,
    3561: `2003`,
    3562: `2004`,
    3563: `2005`,
    3564: `2006`,
    3565: `2006`,
    3566: `2006`,
    3567: `2007`,
    3568: `2007`,
    3569: `2007`,
    357: `40`,
    3570: `2008`,
    3571: `2009`,
    3572: `2009`,
    3573: `2010`,
    3574: `2010`,
    3575: `2010`,
    3576: `2010`,
    3577: `2010`,
    3578: `2010`,
    3579: `2010`,
    358: `40`,
    3580: `2010`,
    3581: `2010`,
    3582: `2010`,
    3583: `2011`,
    3584: `2011`,
    3585: `2012`,
    3586: `2013`,
    3587: `2014`,
    3588: `2014`,
    3589: `2015`,
    359: `40`,
    3590: `2016`,
    3591: `2016`,
    3592: `2017`,
    3593: `2018`,
    3594: `2019`,
    3595: `2019`,
    3596: `2020`,
    3597: `2021`,
    3598: `2021`,
    3599: `2022`,
    36: `2`,
    360: `40`,
    3600: `2023`,
    3601: `2030`,
    3602: `2031`,
    3603: `2032`,
    3604: `2032`,
    3605: `2033`,
    3606: `2034`,
    3607: `2034`,
    3608: `2035`,
    3609: `2036`,
    361: `40`,
    3610: `2036`,
    3611: `2037`,
    3612: `2038`,
    3613: `2038`,
    3614: `2039`,
    3615: `2040`,
    3616: `2040`,
    3617: `2040`,
    3618: `2041`,
    3619: `2041`,
    362: `40`,
    3620: `2041`,
    3621: `2042`,
    3622: `2042`,
    3623: `2043`,
    3624: `2044`,
    3625: `2044`,
    3626: `2044`,
    3627: `2045`,
    3628: `2045`,
    3629: `2045`,
    363: `40`,
    3630: `2047`,
    3631: `2048`,
    3632: `2049`,
    3633: `2049`,
    3634: `2050`,
    3635: `2051`,
    3636: `2051`,
    3637: `2052`,
    3638: `2053`,
    3639: `2053`,
    364: `40`,
    3640: `2054`,
    3641: `2055`,
    3642: `2055`,
    3643: `2056`,
    3644: `2057`,
    3645: `2057`,
    3646: `2057`,
    3647: `2058`,
    3648: `2058`,
    3649: `2058`,
    365: `40`,
    3650: `2059`,
    3651: `2059`,
    3652: `2059`,
    3653: `2060`,
    3654: `2060`,
    3655: `2061`,
    3656: `2061`,
    3657: `2062`,
    3658: `2063`,
    3659: `2063`,
    366: `40`,
    3660: `2064`,
    3661: `2064`,
    3662: `2064`,
    3663: `2064`,
    3664: `2064`,
    3665: `2064`,
    3666: `2064`,
    3667: `2064`,
    3668: `2064`,
    3669: `2064`,
    367: `40`,
    3670: `2065`,
    3671: `2065`,
    3672: `2066`,
    3673: `2067`,
    3674: `2068`,
    3675: `2068`,
    3676: `2069`,
    3677: `2069`,
    3678: `2070`,
    3679: `2070`,
    368: `40`,
    3680: `2071`,
    3681: `2071`,
    3682: `2072`,
    3683: `2073`,
    3684: `2073`,
    3685: `2074`,
    3686: `2075`,
    3687: `2075`,
    3688: `2076`,
    3689: `2076`,
    369: `40`,
    3690: `2077`,
    3691: `2077`,
    3692: `2078`,
    3693: `2079`,
    3694: `2080`,
    3695: `2080`,
    3696: `2081`,
    3697: `2082`,
    3698: `2082`,
    3699: `2083`,
    37: `2`,
    370: `40`,
    3700: `2084`,
    3701: `2085`,
    3702: `2085`,
    3703: `2086`,
    3704: `2087`,
    3705: `2087`,
    3706: `2088`,
    3707: `2088`,
    3708: `2089`,
    3709: `2089`,
    371: `40`,
    3710: `2090`,
    3711: `2091`,
    3712: `2093`,
    3713: `2093`,
    3714: `2094`,
    3715: `2094`,
    3716: `2094`,
    3717: `2095`,
    3718: `2095`,
    3719: `2096`,
    372: `40`,
    3720: `2096`,
    3721: `2096`,
    3722: `2097`,
    3723: `2098`,
    3724: `2098`,
    3725: `2099`,
    3726: `2100`,
    3727: `2100`,
    3728: `2101`,
    3729: `2101`,
    373: `40`,
    3730: `2101`,
    3731: `2102`,
    3732: `2103`,
    3733: `2103`,
    3734: `2104`,
    3735: `2105`,
    3736: `2105`,
    3737: `2106`,
    3738: `2106`,
    3739: `2106`,
    374: `40`,
    3740: `2107`,
    3741: `2107`,
    3742: `2108`,
    3743: `2109`,
    3744: `2109`,
    3745: `2109`,
    3746: `2110`,
    3747: `2110`,
    3748: `2111`,
    3749: `2111`,
    375: `40`,
    3750: `2111`,
    3751: `2112`,
    3752: `2112`,
    3753: `2113`,
    3754: `2114`,
    3755: `2114`,
    3756: `2114`,
    3757: `2115`,
    3758: `2116`,
    3759: `2117`,
    376: `40`,
    3760: `2117`,
    3761: `2118`,
    3762: `2119`,
    3763: `2119`,
    3764: `2120`,
    3765: `2120`,
    3766: `2121`,
    3767: `2122`,
    3768: `2123`,
    3769: `2124`,
    377: `40`,
    3770: `2124`,
    3771: `2125`,
    3772: `2125`,
    3773: `2126`,
    3774: `2127`,
    3775: `2128`,
    3776: `2129`,
    3777: `2129`,
    3778: `2130`,
    3779: `2130`,
    378: `40`,
    3780: `2131`,
    3781: `2132`,
    3782: `2133`,
    3783: `2134`,
    3784: `2134`,
    3785: `2135`,
    3786: `2135`,
    3787: `2136`,
    3788: `2136`,
    3789: `2137`,
    379: `40`,
    3790: `2138`,
    3791: `2139`,
    3792: `2139`,
    3793: `2140`,
    3794: `2140`,
    3795: `2141`,
    3796: `2141`,
    3797: `2142`,
    3798: `2143`,
    3799: `2144`,
    38: `2`,
    380: `40`,
    3800: `2144`,
    3801: `2145`,
    3802: `2145`,
    3803: `2146`,
    3804: `2146`,
    3805: `2147`,
    3806: `2148`,
    3807: `2148`,
    3808: `2149`,
    3809: `2149`,
    381: `40`,
    3810: `2150`,
    3811: `2150`,
    3812: `2151`,
    3813: `2151`,
    3814: `2151`,
    3815: `2154`,
    3816: `2154`,
    3817: `2154`,
    3818: `2155`,
    3819: `2155`,
    382: `40`,
    3820: `2155`,
    3821: `2158`,
    3822: `2158`,
    3823: `2159`,
    3824: `2159`,
    3825: `2159`,
    3826: `2160`,
    3827: `2160`,
    3828: `2161`,
    3829: `2161`,
    383: `40`,
    3830: `2162`,
    3831: `2162`,
    3832: `2162`,
    3833: `2163`,
    3834: `2163`,
    3835: `2164`,
    3836: `2164`,
    3837: `2165`,
    3838: `2165`,
    3839: `2165`,
    384: `40`,
    3840: `2166`,
    3841: `2166`,
    3842: `2167`,
    3843: `2167`,
    3844: `2168`,
    3845: `2168`,
    3846: `2168`,
    3847: `2169`,
    3848: `2169`,
    3849: `2170`,
    385: `40`,
    3850: `2170`,
    3851: `2171`,
    3852: `2171`,
    3853: `2171`,
    3854: `2172`,
    3855: `2172`,
    3856: `2173`,
    3857: `2173`,
    3858: `2174`,
    3859: `2174`,
    386: `40`,
    3860: `2174`,
    3861: `2175`,
    3862: `2175`,
    3863: `2176`,
    3864: `2176`,
    3865: `2177`,
    3866: `2177`,
    3867: `2178`,
    3868: `2178`,
    3869: `2179`,
    387: `40`,
    3870: `2180`,
    3871: `2180`,
    3872: `2180`,
    3873: `2181`,
    3874: `2182`,
    3875: `2182`,
    3876: `2182`,
    3877: `2183`,
    3878: `2184`,
    3879: `2184`,
    388: `40`,
    3880: `2185`,
    3881: `2185`,
    3882: `2186`,
    3883: `2187`,
    3884: `2187`,
    3885: `2187`,
    3886: `2188`,
    3887: `2188`,
    3888: `2189`,
    3889: `2189`,
    389: `40`,
    3890: `2190`,
    3891: `2191`,
    3892: `2191`,
    3893: `2191`,
    3894: `2192`,
    3895: `2192`,
    3896: `2193`,
    3897: `2194`,
    3898: `2194`,
    3899: `2194`,
    39: `2`,
    390: `40`,
    3900: `2195`,
    3901: `2196`,
    3902: `2196`,
    3903: `2196`,
    3904: `2197`,
    3905: `2197`,
    3906: `2198`,
    3907: `2198`,
    3908: `2199`,
    3909: `2199`,
    391: `40`,
    3910: `2200`,
    3911: `2201`,
    3912: `2201`,
    3913: `2201`,
    3914: `2202`,
    3915: `2202`,
    3916: `2203`,
    3917: `2203`,
    3918: `2204`,
    3919: `2204`,
    392: `40`,
    3920: `2205`,
    3921: `2206`,
    3922: `2206`,
    3923: `2206`,
    3924: `2207`,
    3925: `2207`,
    3926: `2208`,
    3927: `2209`,
    3928: `2209`,
    3929: `2209`,
    393: `40`,
    3930: `2210`,
    3931: `2210`,
    3932: `2211`,
    3933: `2212`,
    3934: `2212`,
    3935: `2212`,
    3936: `2213`,
    3937: `2213`,
    3938: `2214`,
    3939: `2214`,
    394: `40`,
    3940: `2215`,
    3941: `2216`,
    3942: `2216`,
    3943: `2216`,
    3944: `2217`,
    3945: `2217`,
    3946: `2218`,
    3947: `2219`,
    3948: `2219`,
    3949: `2219`,
    395: `40`,
    3950: `2220`,
    3951: `2221`,
    3952: `2221`,
    3953: `2221`,
    3954: `2222`,
    3955: `2222`,
    3956: `2223`,
    3957: `2224`,
    3958: `2224`,
    3959: `2224`,
    396: `40`,
    3960: `2225`,
    3961: `2225`,
    3962: `2226`,
    3963: `2226`,
    3964: `2227`,
    3965: `2227`,
    3966: `2228`,
    3967: `2229`,
    3968: `2229`,
    3969: `2229`,
    397: `40`,
    3970: `2230`,
    3971: `2230`,
    3972: `2231`,
    3973: `2232`,
    3974: `2232`,
    3975: `2232`,
    3976: `2233`,
    3977: `2233`,
    3978: `2234`,
    3979: `2234`,
    398: `40`,
    3980: `2235`,
    3981: `2235`,
    3982: `2236`,
    3983: `2237`,
    3984: `2237`,
    3985: `2238`,
    3986: `2238`,
    3987: `2239`,
    3988: `2240`,
    3989: `2240`,
    399: `40`,
    3990: `2241`,
    3991: `2241`,
    3992: `2242`,
    3993: `2243`,
    3994: `2243`,
    3995: `2243`,
    3996: `2244`,
    3997: `2244`,
    3998: `2245`,
    3999: `2246`,
    4: `2`,
    40: `2`,
    400: `40`,
    4000: `2246`,
    4001: `2246`,
    4002: `2247`,
    4003: `2247`,
    4004: `2248`,
    4005: `2249`,
    4006: `2250`,
    4007: `2251`,
    4008: `2251`,
    4009: `2252`,
    401: `41`,
    4010: `2252`,
    4011: `2252`,
    4012: `2253`,
    4013: `2253`,
    4014: `2254`,
    4015: `2254`,
    4016: `2255`,
    4017: `2255`,
    4018: `2255`,
    4019: `2256`,
    402: `41`,
    4020: `2256`,
    4021: `2257`,
    4022: `2257`,
    4023: `2258`,
    4024: `2258`,
    4025: `2258`,
    4026: `2259`,
    4027: `2260`,
    4028: `2261`,
    4029: `2268`,
    403: `41`,
    4030: `2268`,
    4031: `2269`,
    4032: `2269`,
    4033: `2270`,
    4034: `2271`,
    4035: `2271`,
    4036: `2271`,
    4037: `2272`,
    4038: `2272`,
    4039: `2273`,
    404: `42`,
    4040: `2274`,
    4041: `2274`,
    4042: `2274`,
    4043: `2275`,
    4044: `2275`,
    4045: `2276`,
    4046: `2276`,
    4047: `2277`,
    4048: `2277`,
    4049: `2278`,
    405: `42`,
    4050: `2279`,
    4051: `2279`,
    4052: `2279`,
    4053: `2280`,
    4054: `2280`,
    4055: `2281`,
    4056: `2281`,
    4057: `2282`,
    4058: `2282`,
    4059: `2282`,
    406: `42`,
    4060: `2283`,
    4061: `2283`,
    4062: `2284`,
    4063: `2284`,
    4064: `2285`,
    4065: `2285`,
    4066: `2285`,
    4067: `2286`,
    4068: `2286`,
    4069: `2287`,
    407: `42`,
    4070: `2288`,
    4071: `2295`,
    4072: `2295`,
    4073: `2296`,
    4074: `2296`,
    4075: `2297`,
    4076: `2298`,
    4077: `2298`,
    4078: `2298`,
    4079: `2299`,
    408: `42`,
    4080: `2299`,
    4081: `2300`,
    4082: `2300`,
    4083: `2301`,
    4084: `2302`,
    4085: `2302`,
    4086: `2302`,
    4087: `2303`,
    4088: `2304`,
    4089: `2311`,
    409: `42`,
    4090: `2311`,
    4091: `2312`,
    4092: `2312`,
    4093: `2313`,
    4094: `2314`,
    4095: `2315`,
    4096: `2316`,
    4097: `2316`,
    4098: `2317`,
    4099: `2317`,
    41: `2`,
    410: `42`,
    4100: `2318`,
    4101: `2319`,
    4102: `2319`,
    4103: `2320`,
    4104: `2321`,
    4105: `2321`,
    4106: `2322`,
    4107: `2323`,
    4108: `2323`,
    4109: `2324`,
    411: `42`,
    4110: `2325`,
    4111: `2326`,
    4112: `2326`,
    4113: `2327`,
    4114: `2328`,
    4115: `2329`,
    4116: `2329`,
    4117: `2330`,
    4118: `2330`,
    4119: `2331`,
    412: `42`,
    4120: `2331`,
    4121: `2332`,
    4122: `2332`,
    4123: `2334`,
    4124: `2334`,
    4125: `2335`,
    4126: `2335`,
    4127: `2336`,
    4128: `2336`,
    4129: `2337`,
    413: `42`,
    4130: `2337`,
    4131: `2338`,
    4132: `2339`,
    4133: `2339`,
    4134: `2340`,
    4135: `2340`,
    4136: `2341`,
    4137: `2341`,
    4138: `2343`,
    4139: `2344`,
    414: `42`,
    4140: `2344`,
    4141: `2345`,
    4142: `2345`,
    4143: `2346`,
    4144: `2346`,
    4145: `2347`,
    4146: `2347`,
    4147: `2351`,
    4148: `2351`,
    4149: `2352`,
    415: `42`,
    4150: `2352`,
    4151: `2353`,
    4152: `2359`,
    4153: `2359`,
    4154: `2360`,
    4155: `2361`,
    4156: `2361`,
    4157: `2362`,
    4158: `2363`,
    4159: `2363`,
    416: `42`,
    4160: `2364`,
    4161: `2365`,
    4162: `2366`,
    4163: `2367`,
    4164: `2367`,
    4165: `2367`,
    4166: `2368`,
    4167: `2368`,
    4168: `2368`,
    4169: `2369`,
    417: `42`,
    4170: `2370`,
    4171: `2370`,
    4172: `2371`,
    4173: `2371`,
    4174: `2371`,
    4175: `2371`,
    4176: `2371`,
    4177: `2371`,
    4178: `2371`,
    4179: `2371`,
    418: `42`,
    4180: `2371`,
    4181: `2371`,
    4182: `2372`,
    4183: `2372`,
    4184: `2373`,
    4185: `2374`,
    4186: `2375`,
    4187: `2375`,
    4188: `2376`,
    4189: `2377`,
    419: `42`,
    4190: `2377`,
    4191: `2378`,
    4192: `2379`,
    4193: `2380`,
    4194: `2380`,
    4195: `2381`,
    4196: `2382`,
    4197: `2382`,
    4198: `2383`,
    4199: `2384`,
    42: `2`,
    420: `42`,
    4200: `2391`,
    4201: `2392`,
    4202: `2393`,
    4203: `2393`,
    4204: `2394`,
    4205: `2395`,
    4206: `2395`,
    4207: `2396`,
    4208: `2397`,
    4209: `2397`,
    421: `42`,
    4210: `2398`,
    4211: `2399`,
    4212: `2399`,
    4213: `2400`,
    4214: `2401`,
    4215: `2401`,
    4216: `2401`,
    4217: `2402`,
    4218: `2402`,
    4219: `2402`,
    422: `42`,
    4220: `2403`,
    4221: `2403`,
    4222: `2404`,
    4223: `2405`,
    4224: `2405`,
    4225: `2405`,
    4226: `2406`,
    4227: `2406`,
    4228: `2406`,
    4229: `2408`,
    423: `42`,
    4230: `2409`,
    4231: `2410`,
    4232: `2410`,
    4233: `2411`,
    4234: `2412`,
    4235: `2412`,
    4236: `2413`,
    4237: `2414`,
    4238: `2414`,
    4239: `2415`,
    424: `42`,
    4240: `2416`,
    4241: `2416`,
    4242: `2417`,
    4243: `2418`,
    4244: `2418`,
    4245: `2418`,
    4246: `2419`,
    4247: `2419`,
    4248: `2419`,
    4249: `2420`,
    425: `42`,
    4250: `2420`,
    4251: `2420`,
    4252: `2421`,
    4253: `2421`,
    4254: `2422`,
    4255: `2422`,
    4256: `2423`,
    4257: `2424`,
    4258: `2424`,
    4259: `2425`,
    426: `42`,
    4260: `2425`,
    4261: `2425`,
    4262: `2425`,
    4263: `2425`,
    4264: `2425`,
    4265: `2425`,
    4266: `2425`,
    4267: `2425`,
    4268: `2425`,
    4269: `2426`,
    427: `42`,
    4270: `2426`,
    4271: `2427`,
    4272: `2428`,
    4273: `2429`,
    4274: `2429`,
    4275: `2430`,
    4276: `2430`,
    4277: `2431`,
    4278: `2431`,
    4279: `2432`,
    428: `42`,
    4280: `2432`,
    4281: `2433`,
    4282: `2434`,
    4283: `2434`,
    4284: `2435`,
    4285: `2436`,
    4286: `2436`,
    4287: `2437`,
    4288: `2437`,
    4289: `2438`,
    429: `42`,
    4290: `2438`,
    4291: `2439`,
    4292: `2440`,
    4293: `2441`,
    4294: `2441`,
    4295: `2442`,
    4296: `2443`,
    4297: `2443`,
    4298: `2444`,
    4299: `2445`,
    43: `2`,
    430: `42`,
    4300: `2446`,
    4301: `2446`,
    4302: `2447`,
    4303: `2448`,
    4304: `2448`,
    4305: `2449`,
    4306: `2449`,
    4307: `2450`,
    4308: `2450`,
    4309: `2451`,
    431: `42`,
    4310: `2452`,
    4311: `2454`,
    4312: `2454`,
    4313: `2455`,
    4314: `2455`,
    4315: `2455`,
    4316: `2456`,
    4317: `2456`,
    4318: `2457`,
    4319: `2457`,
    432: `42`,
    4320: `2457`,
    4321: `2458`,
    4322: `2459`,
    4323: `2459`,
    4324: `2460`,
    4325: `2461`,
    4326: `2461`,
    4327: `2462`,
    4328: `2462`,
    4329: `2462`,
    433: `42`,
    4330: `2463`,
    4331: `2464`,
    4332: `2464`,
    4333: `2465`,
    4334: `2466`,
    4335: `2466`,
    4336: `2467`,
    4337: `2467`,
    4338: `2467`,
    4339: `2468`,
    434: `42`,
    4340: `2468`,
    4341: `2469`,
    4342: `2470`,
    4343: `2470`,
    4344: `2470`,
    4345: `2471`,
    4346: `2471`,
    4347: `2472`,
    4348: `2472`,
    4349: `2472`,
    435: `42`,
    4350: `2473`,
    4351: `2473`,
    4352: `2474`,
    4353: `2475`,
    4354: `2475`,
    4355: `2475`,
    4356: `2476`,
    4357: `2477`,
    4358: `2478`,
    4359: `2478`,
    436: `42`,
    4360: `2479`,
    4361: `2480`,
    4362: `2480`,
    4363: `2481`,
    4364: `2481`,
    4365: `2482`,
    4366: `2483`,
    4367: `2484`,
    4368: `2485`,
    4369: `2485`,
    437: `42`,
    4370: `2486`,
    4371: `2486`,
    4372: `2487`,
    4373: `2488`,
    4374: `2489`,
    4375: `2490`,
    4376: `2490`,
    4377: `2491`,
    4378: `2491`,
    4379: `2492`,
    438: `42`,
    4380: `2493`,
    4381: `2494`,
    4382: `2495`,
    4383: `2495`,
    4384: `2496`,
    4385: `2496`,
    4386: `2497`,
    4387: `2497`,
    4388: `2498`,
    4389: `2499`,
    439: `42`,
    4390: `2500`,
    4391: `2500`,
    4392: `2501`,
    4393: `2501`,
    4394: `2502`,
    4395: `2502`,
    4396: `2503`,
    4397: `2504`,
    4398: `2505`,
    4399: `2505`,
    44: `2`,
    440: `42`,
    4400: `2506`,
    4401: `2506`,
    4402: `2507`,
    4403: `2507`,
    4404: `2508`,
    4405: `2509`,
    4406: `2509`,
    4407: `2510`,
    4408: `2510`,
    4409: `2511`,
    441: `42`,
    4410: `2511`,
    4411: `2512`,
    4412: `2512`,
    4413: `2512`,
    4414: `2515`,
    4415: `2515`,
    4416: `2516`,
    4417: `2516`,
    4418: `2516`,
    4419: `2517`,
    442: `42`,
    4420: `2517`,
    4421: `2518`,
    4422: `2518`,
    4423: `2519`,
    4424: `2519`,
    4425: `2519`,
    4426: `2520`,
    4427: `2520`,
    4428: `2521`,
    4429: `2521`,
    443: `42`,
    4430: `2522`,
    4431: `2522`,
    4432: `2523`,
    4433: `2524`,
    4434: `2530`,
    4435: `2530`,
    4436: `2531`,
    4437: `2531`,
    4438: `2532`,
    4439: `2533`,
    444: `42`,
    4440: `2540`,
    4441: `2540`,
    4442: `2541`,
    4443: `2541`,
    4444: `2542`,
    4445: `2542`,
    4446: `2543`,
    4447: `2543`,
    4448: `2544`,
    4449: `2545`,
    445: `42`,
    4450: `2546`,
    4451: `2547`,
    4452: `2547`,
    4453: `2548`,
    4454: `2548`,
    4455: `2548`,
    4456: `2549`,
    4457: `2549`,
    4458: `2550`,
    4459: `2550`,
    446: `42`,
    4460: `2551`,
    4461: `2552`,
    4462: `2552`,
    4463: `2553`,
    4464: `2554`,
    4465: `2554`,
    4466: `2555`,
    4467: `2556`,
    4468: `2558`,
    4469: `2558`,
    447: `42`,
    4470: `2559`,
    4471: `2559`,
    4472: `2560`,
    4473: `2560`,
    4474: `2560`,
    4475: `2560`,
    4476: `2560`,
    4477: `2560`,
    4478: `2560`,
    4479: `2560`,
    448: `42`,
    4480: `2560`,
    4481: `2560`,
    4482: `2561`,
    4483: `2561`,
    4484: `2562`,
    4485: `2563`,
    4486: `2563`,
    4487: `2563`,
    4488: `2564`,
    4489: `2565`,
    449: `42`,
    4490: `2566`,
    4491: `2566`,
    4492: `2567`,
    4493: `2568`,
    4494: `2568`,
    4495: `2568`,
    4496: `2569`,
    4497: `2569`,
    4498: `2570`,
    4499: `2570`,
    45: `2`,
    450: `42`,
    4500: `2571`,
    4501: `2571`,
    4502: `2572`,
    4503: `2572`,
    4504: `2572`,
    4505: `2575`,
    4506: `2575`,
    4507: `2576`,
    4508: `2576`,
    4509: `2576`,
    451: `42`,
    4510: `2577`,
    4511: `2577`,
    4512: `2578`,
    4513: `2578`,
    4514: `2579`,
    4515: `2579`,
    4516: `2579`,
    4517: `2580`,
    4518: `2580`,
    4519: `2581`,
    452: `42`,
    4520: `2581`,
    4521: `2583`,
    4522: `2584`,
    4523: `2584`,
    4524: `2585`,
    4525: `2586`,
    4526: `2586`,
    4527: `2587`,
    4528: `2588`,
    4529: `2588`,
    453: `42`,
    4530: `2588`,
    4531: `2589`,
    4532: `2589`,
    4533: `2589`,
    4534: `2590`,
    4535: `2591`,
    4536: `2591`,
    4537: `2592`,
    4538: `2592`,
    4539: `2593`,
    454: `42`,
    4540: `2594`,
    4541: `2600`,
    4542: `2600`,
    4543: `2601`,
    4544: `2601`,
    4545: `2602`,
    4546: `2602`,
    4547: `2602`,
    4548: `2602`,
    4549: `2602`,
    455: `42`,
    4550: `2602`,
    4551: `2602`,
    4552: `2602`,
    4553: `2602`,
    4554: `2602`,
    4555: `2603`,
    4556: `2603`,
    4557: `2604`,
    4558: `2605`,
    4559: `2605`,
    456: `42`,
    4560: `2605`,
    4561: `2606`,
    4562: `2607`,
    4563: `2608`,
    4564: `2608`,
    4565: `2609`,
    4566: `2610`,
    4567: `2610`,
    4568: `2610`,
    4569: `2611`,
    457: `42`,
    4570: `2611`,
    4571: `2612`,
    4572: `2613`,
    4573: `2614`,
    4574: `2614`,
    4575: `2615`,
    4576: `2616`,
    4577: `2616`,
    4578: `2617`,
    4579: `2617`,
    458: `42`,
    4580: `2618`,
    4581: `2619`,
    4582: `2619`,
    4583: `2619`,
    4584: `2620`,
    4585: `2620`,
    4586: `2620`,
    4587: `2622`,
    4588: `2623`,
    4589: `2624`,
    459: `42`,
    4590: `2624`,
    4591: `2625`,
    4592: `2626`,
    4593: `2626`,
    4594: `2627`,
    4595: `2628`,
    4596: `2628`,
    4597: `2629`,
    4598: `2630`,
    4599: `2630`,
    46: `2`,
    460: `42`,
    4600: `2631`,
    4601: `2632`,
    4602: `2632`,
    4603: `2632`,
    4604: `2633`,
    4605: `2633`,
    4606: `2633`,
    4607: `2634`,
    4608: `2634`,
    4609: `2635`,
    461: `42`,
    4610: `2636`,
    4611: `2636`,
    4612: `2636`,
    4613: `2637`,
    4614: `2637`,
    4615: `2637`,
    4616: `2638`,
    4617: `2638`,
    4618: `2639`,
    4619: `2639`,
    462: `42`,
    4620: `2640`,
    4621: `2641`,
    4622: `2641`,
    4623: `2642`,
    4624: `2643`,
    4625: `2643`,
    4626: `2644`,
    4627: `2645`,
    4628: `2647`,
    4629: `2647`,
    463: `42`,
    4630: `2648`,
    4631: `2648`,
    4632: `2649`,
    4633: `2649`,
    4634: `2649`,
    4635: `2652`,
    4636: `2652`,
    4637: `2653`,
    4638: `2653`,
    4639: `2653`,
    464: `42`,
    4640: `2654`,
    4641: `2654`,
    4642: `2655`,
    4643: `2655`,
    4644: `2656`,
    4645: `2656`,
    4646: `2656`,
    4647: `2657`,
    4648: `2657`,
    4649: `2658`,
    465: `42`,
    4650: `2658`,
    4651: `2659`,
    4652: `2659`,
    4653: `2659`,
    4654: `2660`,
    4655: `2660`,
    4656: `2661`,
    4657: `2661`,
    4658: `2663`,
    4659: `2664`,
    466: `44`,
    4660: `2664`,
    4661: `2665`,
    4662: `2666`,
    4663: `2666`,
    4664: `2667`,
    4665: `2668`,
    4666: `2668`,
    4667: `2668`,
    4668: `2669`,
    4669: `2669`,
    467: `49`,
    4670: `2669`,
    4671: `2670`,
    4672: `2671`,
    4673: `2671`,
    4674: `2672`,
    4675: `2672`,
    4676: `2673`,
    4677: `2674`,
    4678: `2680`,
    4679: `2680`,
    468: `49`,
    4680: `2681`,
    4681: `2681`,
    4682: `2682`,
    4683: `2683`,
    4684: `2683`,
    4685: `2684`,
    4686: `2684`,
    4687: `2686`,
    4688: `2687`,
    4689: `2687`,
    469: `50`,
    4690: `2688`,
    4691: `2688`,
    4692: `2689`,
    4693: `2689`,
    4694: `2690`,
    4695: `2691`,
    4696: `2692`,
    4697: `2692`,
    4698: `2692`,
    4699: `2693`,
    47: `2`,
    470: `51`,
    4700: `2693`,
    4701: `2693`,
    4702: `2694`,
    4703: `2695`,
    4704: `2695`,
    4705: `2696`,
    4706: `2696`,
    4707: `2697`,
    4708: `2698`,
    4709: `2704`,
    471: `52`,
    4710: `2705`,
    4711: `2706`,
    4712: `2706`,
    4713: `2707`,
    4714: `2708`,
    4715: `2708`,
    4716: `2709`,
    4717: `2709`,
    4718: `2710`,
    4719: `2711`,
    472: `52`,
    4720: `2711`,
    4721: `2711`,
    4722: `2712`,
    4723: `2712`,
    4724: `2712`,
    4725: `2714`,
    4726: `2715`,
    4727: `2716`,
    4728: `2716`,
    4729: `2717`,
    473: `52`,
    4730: `2718`,
    4731: `2718`,
    4732: `2719`,
    4733: `2720`,
    4734: `2720`,
    4735: `2721`,
    4736: `2722`,
    4737: `2722`,
    4738: `2723`,
    4739: `2724`,
    474: `53`,
    4740: `2724`,
    4741: `2724`,
    4742: `2725`,
    4743: `2725`,
    4744: `2725`,
    4745: `2726`,
    4746: `2726`,
    4747: `2727`,
    4748: `2728`,
    4749: `2728`,
    475: `53`,
    4750: `2728`,
    4751: `2729`,
    4752: `2729`,
    4753: `2729`,
    4754: `2730`,
    4755: `2730`,
    4756: `2731`,
    4757: `2731`,
    4758: `2732`,
    4759: `2733`,
    476: `54`,
    4760: `2733`,
    4761: `2734`,
    4762: `2735`,
    4763: `2735`,
    4764: `2736`,
    4765: `2737`,
    4766: `2739`,
    4767: `2739`,
    4768: `2740`,
    4769: `2740`,
    477: `54`,
    4770: `2741`,
    4771: `2742`,
    4772: `2742`,
    4773: `2742`,
    4774: `2743`,
    4775: `2743`,
    4776: `2744`,
    4777: `2744`,
    4778: `2745`,
    4779: `2745`,
    478: `55`,
    4780: `2746`,
    4781: `2746`,
    4782: `2747`,
    4783: `2748`,
    4784: `2749`,
    4785: `2749`,
    4786: `2750`,
    4787: `2750`,
    4788: `2750`,
    4789: `2751`,
    479: `56`,
    4790: `2751`,
    4791: `2752`,
    4792: `2752`,
    4793: `2753`,
    4794: `2754`,
    4795: `2754`,
    4796: `2755`,
    4797: `2756`,
    4798: `2756`,
    4799: `2757`,
    48: `2`,
    480: `59`,
    4800: `2758`,
    4801: `2760`,
    4802: `2760`,
    4803: `2761`,
    4804: `2761`,
    4805: `2762`,
    4806: `2762`,
    4807: `2762`,
    4808: `2762`,
    4809: `2762`,
    481: `59`,
    4810: `2762`,
    4811: `2762`,
    4812: `2762`,
    4813: `2762`,
    4814: `2762`,
    4815: `2763`,
    4816: `2763`,
    4817: `2764`,
    4818: `2765`,
    4819: `2765`,
    482: `59`,
    4820: `2765`,
    4821: `2766`,
    4822: `2767`,
    4823: `2768`,
    4824: `2768`,
    4825: `2769`,
    4826: `2770`,
    4827: `2770`,
    4828: `2770`,
    4829: `2771`,
    483: `60`,
    4830: `2771`,
    4831: `2772`,
    4832: `2772`,
    4833: `2773`,
    4834: `2773`,
    4835: `2774`,
    4836: `2774`,
    4837: `2774`,
    4838: `2777`,
    4839: `2778`,
    484: `60`,
    4840: `2781`,
    4841: `2781`,
    4842: `2781`,
    4843: `2784`,
    4844: `2785`,
    4845: `2786`,
    4846: `2786`,
    4847: `2786`,
    4848: `2787`,
    4849: `2787`,
    485: `61`,
    4850: `2788`,
    4851: `2788`,
    4852: `2789`,
    4853: `2790`,
    4854: `2791`,
    4855: `2791`,
    4856: `2792`,
    4857: `2793`,
    4858: `2794`,
    4859: `2795`,
    486: `61`,
    4860: `2795`,
    4861: `2796`,
    4862: `2796`,
    4863: `2796`,
    4864: `2799`,
    4865: `2800`,
    4866: `2803`,
    4867: `2803`,
    4868: `2803`,
    4869: `2806`,
    487: `61`,
    4870: `2806`,
    4871: `2807`,
    4872: `2808`,
    4873: `2809`,
    4874: `2809`,
    4875: `2809`,
    4876: `2810`,
    4877: `2810`,
    4878: `2811`,
    4879: `2811`,
    488: `62`,
    4880: `2812`,
    4881: `2813`,
    4882: `2816`,
    4883: `2816`,
    4884: `2816`,
    4885: `2817`,
    4886: `2817`,
    4887: `2818`,
    4888: `2819`,
    4889: `2819`,
    489: `62`,
    4890: `2820`,
    4891: `2820`,
    4892: `2820`,
    4893: `2823`,
    4894: `2823`,
    4895: `2824`,
    4896: `2825`,
    4897: `2826`,
    4898: `2826`,
    4899: `2826`,
    49: `2`,
    490: `63`,
    4900: `2827`,
    4901: `2827`,
    4902: `2828`,
    4903: `2828`,
    4904: `2829`,
    4905: `2830`,
    4906: `2833`,
    4907: `2833`,
    4908: `2833`,
    4909: `2834`,
    491: `63`,
    4910: `2834`,
    4911: `2835`,
    4912: `2835`,
    4913: `2835`,
    4914: `2836`,
    4915: `2837`,
    4916: `2837`,
    4917: `2838`,
    4918: `2838`,
    4919: `2839`,
    492: `63`,
    4920: `2839`,
    4921: `2839`,
    4922: `2842`,
    4923: `2842`,
    4924: `2843`,
    4925: `2844`,
    4926: `2845`,
    4927: `2845`,
    4928: `2845`,
    4929: `2846`,
    493: `64`,
    4930: `2846`,
    4931: `2847`,
    4932: `2847`,
    4933: `2848`,
    4934: `2849`,
    4935: `2852`,
    4936: `2852`,
    4937: `2852`,
    4938: `2853`,
    4939: `2853`,
    494: `65`,
    4940: `2854`,
    4941: `2854`,
    4942: `2854`,
    4943: `2855`,
    4944: `2856`,
    4945: `2856`,
    4946: `2857`,
    4947: `2857`,
    4948: `2858`,
    4949: `2858`,
    495: `65`,
    4950: `2858`,
    4951: `2861`,
    4952: `2861`,
    4953: `2862`,
    4954: `2863`,
    4955: `2864`,
    4956: `2864`,
    4957: `2864`,
    4958: `2865`,
    4959: `2865`,
    496: `66`,
    4960: `2866`,
    4961: `2866`,
    4962: `2867`,
    4963: `2868`,
    4964: `2871`,
    4965: `2871`,
    4966: `2871`,
    4967: `2872`,
    4968: `2872`,
    4969: `2873`,
    497: `66`,
    4970: `2873`,
    4971: `2874`,
    4972: `2874`,
    4973: `2874`,
    4974: `2877`,
    4975: `2878`,
    4976: `2879`,
    4977: `2879`,
    4978: `2879`,
    4979: `2880`,
    498: `66`,
    4980: `2880`,
    4981: `2881`,
    4982: `2881`,
    4983: `2882`,
    4984: `2883`,
    4985: `2884`,
    4986: `2884`,
    4987: `2885`,
    4988: `2886`,
    4989: `2887`,
    499: `67`,
    4990: `2888`,
    4991: `2888`,
    4992: `2889`,
    4993: `2889`,
    4994: `2889`,
    4995: `2892`,
    4996: `2893`,
    4997: `2894`,
    4998: `2894`,
    4999: `2894`,
    5: `2`,
    50: `2`,
    500: `68`,
    5000: `2895`,
    5001: `2895`,
    5002: `2896`,
    5003: `2896`,
    5004: `2897`,
    5005: `2898`,
    5006: `2898`,
    5007: `2899`,
    5008: `2900`,
    5009: `2901`,
    501: `68`,
    5010: `2901`,
    5011: `2902`,
    5012: `2903`,
    5013: `2904`,
    5014: `2905`,
    5015: `2905`,
    5016: `2906`,
    5017: `2906`,
    5018: `2906`,
    5019: `2909`,
    502: `69`,
    5020: `2909`,
    5021: `2910`,
    5022: `2911`,
    5023: `2912`,
    5024: `2912`,
    5025: `2912`,
    5026: `2913`,
    5027: `2913`,
    5028: `2914`,
    5029: `2914`,
    503: `69`,
    5030: `2915`,
    5031: `2916`,
    5032: `2919`,
    5033: `2919`,
    5034: `2919`,
    5035: `2920`,
    5036: `2920`,
    5037: `2921`,
    5038: `2921`,
    5039: `2922`,
    504: `69`,
    5040: `2922`,
    5041: `2924`,
    5042: `2925`,
    5043: `2925`,
    5044: `2926`,
    5045: `2927`,
    5046: `2927`,
    5047: `2928`,
    5048: `2929`,
    5049: `2929`,
    505: `70`,
    5050: `2929`,
    5051: `2930`,
    5052: `2930`,
    5053: `2930`,
    5054: `2931`,
    5055: `2931`,
    5056: `2933`,
    5057: `2934`,
    5058: `2934`,
    5059: `2935`,
    506: `71`,
    5060: `2936`,
    5061: `2936`,
    5062: `2937`,
    5063: `2938`,
    5064: `2938`,
    5065: `2938`,
    5066: `2939`,
    5067: `2939`,
    5068: `2939`,
    5069: `2940`,
    507: `71`,
    5070: `2941`,
    5071: `2941`,
    5072: `2942`,
    5073: `2942`,
    5074: `2942`,
    5075: `2945`,
    5076: `2946`,
    5077: `2949`,
    5078: `2949`,
    5079: `2949`,
    508: `72`,
    5080: `2952`,
    5081: `2953`,
    5082: `2956`,
    5083: `2956`,
    5084: `2956`,
    5085: `2959`,
    5086: `2960`,
    5087: `2963`,
    5088: `2963`,
    5089: `2963`,
    509: `72`,
    5090: `2966`,
    5091: `2967`,
    5092: `2970`,
    5093: `2970`,
    5094: `2970`,
    5095: `2973`,
    5096: `2973`,
    5097: `2974`,
    5098: `2975`,
    5099: `2976`,
    51: `2`,
    510: `73`,
    5100: `2976`,
    5101: `2977`,
    5102: `2977`,
    5103: `2978`,
    5104: `2978`,
    5105: `2978`,
    5106: `2979`,
    5107: `2979`,
    5108: `2980`,
    5109: `2980`,
    511: `74`,
    5110: `2980`,
    5111: `2980`,
    5112: `2980`,
    5113: `2980`,
    5114: `2981`,
    5115: `2981`,
    5116: `2982`,
    5117: `2983`,
    5118: `2984`,
    5119: `2984`,
    512: `75`,
    5120: `2985`,
    5121: `2986`,
    5122: `2988`,
    5123: `2988`,
    5124: `2989`,
    5125: `2989`,
    5126: `2989`,
    5127: `2990`,
    5128: `2990`,
    5129: `2991`,
    513: `76`,
    5130: `2991`,
    5131: `2991`,
    5132: `2992`,
    5133: `2993`,
    5134: `2993`,
    5135: `2994`,
    5136: `2995`,
    5137: `2996`,
    5138: `2996`,
    5139: `2997`,
    514: `76`,
    5140: `2997`,
    5141: `2998`,
    5142: `2998`,
    5143: `2999`,
    5144: `3000`,
    5145: `3000`,
    5146: `3001`,
    5147: `3001`,
    5148: `3002`,
    5149: `3003`,
    515: `77`,
    5150: `3004`,
    5151: `3004`,
    5152: `3005`,
    5153: `3006`,
    5154: `3007`,
    5155: `3008`,
    5156: `3013`,
    5157: `3013`,
    5158: `3014`,
    5159: `3014`,
    516: `77`,
    5160: `3014`,
    5161: `3015`,
    5162: `3016`,
    5163: `3016`,
    5164: `3017`,
    5165: `3018`,
    5166: `3019`,
    5167: `3020`,
    5168: `3020`,
    5169: `3021`,
    517: `78`,
    5170: `3021`,
    5171: `3021`,
    5172: `3022`,
    5173: `3023`,
    5174: `3028`,
    5175: `3028`,
    5176: `3029`,
    5177: `3029`,
    5178: `3029`,
    5179: `3030`,
    518: `79`,
    5180: `3030`,
    5181: `3031`,
    5182: `3032`,
    5183: `3032`,
    5184: `3033`,
    5185: `3033`,
    5186: `3034`,
    5187: `3034`,
    5188: `3035`,
    5189: `3035`,
    519: `80`,
    5190: `3035`,
    5191: `3036`,
    5192: `3037`,
    5193: `3038`,
    5194: `3038`,
    5195: `3039`,
    5196: `3039`,
    5197: `3040`,
    5198: `3041`,
    5199: `3041`,
    52: `2`,
    520: `81`,
    5200: `3042`,
    5201: `3043`,
    5202: `3043`,
    5203: `3044`,
    5204: `3045`,
    5205: `3045`,
    5206: `3046`,
    5207: `3047`,
    5208: `3048`,
    5209: `3048`,
    521: `81`,
    5210: `3049`,
    5211: `3050`,
    5212: `3051`,
    5213: `3051`,
    5214: `3052`,
    5215: `3052`,
    5216: `3053`,
    5217: `3053`,
    5218: `3054`,
    5219: `3054`,
    522: `83`,
    5220: `3055`,
    5221: `3056`,
    5222: `3058`,
    5223: `3058`,
    5224: `3059`,
    5225: `3059`,
    5226: `3059`,
    5227: `3059`,
    5228: `3059`,
    5229: `3059`,
    523: `83`,
    5230: `3060`,
    5231: `3060`,
    5232: `3061`,
    5233: `3061`,
    5234: `3062`,
    5235: `3063`,
    5236: `3063`,
    5237: `3064`,
    5238: `3064`,
    5239: `3065`,
    524: `84`,
    5240: `3066`,
    5241: `3066`,
    5242: `3067`,
    5243: `3067`,
    5244: `3068`,
    5245: `3069`,
    5246: `3069`,
    5247: `3070`,
    5248: `3073`,
    5249: `3073`,
    525: `85`,
    5250: `3074`,
    5251: `3075`,
    5252: `3075`,
    5253: `3076`,
    5254: `3077`,
    5255: `3077`,
    5256: `3078`,
    5257: `3079`,
    5258: `3080`,
    5259: `3081`,
    526: `86`,
    5260: `3081`,
    5261: `3081`,
    5262: `3082`,
    5263: `3082`,
    5264: `3082`,
    5265: `3083`,
    5266: `3084`,
    5267: `3084`,
    5268: `3085`,
    5269: `3085`,
    527: `89`,
    5270: `3085`,
    5271: `3085`,
    5272: `3085`,
    5273: `3085`,
    5274: `3085`,
    5275: `3085`,
    5276: `3085`,
    5277: `3085`,
    5278: `3086`,
    5279: `3086`,
    528: `89`,
    5280: `3087`,
    5281: `3088`,
    5282: `3089`,
    5283: `3089`,
    5284: `3090`,
    5285: `3091`,
    5286: `3091`,
    5287: `3092`,
    5288: `3093`,
    5289: `3094`,
    529: `89`,
    5290: `3094`,
    5291: `3095`,
    5292: `3095`,
    5293: `3096`,
    5294: `3096`,
    5295: `3096`,
    5296: `3097`,
    5297: `3098`,
    5298: `3098`,
    5299: `3099`,
    53: `2`,
    530: `89`,
    5300: `3099`,
    5301: `3099`,
    5302: `3100`,
    5303: `3100`,
    5304: `3101`,
    5305: `3101`,
    5306: `3102`,
    5307: `3102`,
    5308: `3102`,
    5309: `3103`,
    531: `89`,
    5310: `3103`,
    5311: `3104`,
    5312: `3104`,
    5313: `3105`,
    5314: `3105`,
    5315: `3105`,
    5316: `3106`,
    5317: `3106`,
    5318: `3107`,
    5319: `3107`,
    532: `89`,
    5320: `3108`,
    5321: `3108`,
    5322: `3109`,
    5323: `3110`,
    5324: `3110`,
    5325: `3111`,
    5326: `3111`,
    5327: `3112`,
    5328: `3113`,
    5329: `3114`,
    533: `90`,
    5330: `3114`,
    5331: `3114`,
    5332: `3115`,
    5333: `3115`,
    5334: `3116`,
    5335: `3116`,
    5336: `3117`,
    5337: `3117`,
    5338: `3118`,
    5339: `3119`,
    534: `90`,
    5340: `3119`,
    5341: `3119`,
    5342: `3120`,
    5343: `3121`,
    5344: `3121`,
    5345: `3123`,
    5346: `3123`,
    5347: `3124`,
    5348: `3124`,
    5349: `3125`,
    535: `91`,
    5350: `3125`,
    5351: `3126`,
    5352: `3127`,
    5353: `3128`,
    5354: `3128`,
    5355: `3129`,
    5356: `3129`,
    5357: `3130`,
    5358: `3131`,
    5359: `3132`,
    536: `92`,
    5360: `3135`,
    5361: `3136`,
    5362: `3136`,
    5363: `3137`,
    5364: `3138`,
    5365: `3141`,
    5366: `3141`,
    5367: `3142`,
    5368: `3142`,
    5369: `3144`,
    537: `94`,
    5370: `3145`,
    5371: `3146`,
    5372: `3146`,
    5373: `3147`,
    5374: `3148`,
    5375: `3148`,
    5376: `3149`,
    5377: `3149`,
    5378: `3149`,
    5379: `3151`,
    538: `94`,
    5380: `3152`,
    5381: `3153`,
    5382: `3153`,
    5383: `3154`,
    5384: `3155`,
    5385: `3155`,
    5386: `3156`,
    5387: `3156`,
    5388: `3156`,
    5389: `3157`,
    539: `95`,
    5390: `3157`,
    5391: `3158`,
    5392: `3158`,
    5393: `3159`,
    5394: `3159`,
    5395: `3160`,
    5396: `3160`,
    5397: `3161`,
    5398: `3162`,
    5399: `3162`,
    54: `2`,
    540: `100`,
    5400: `3163`,
    5401: `3164`,
    5402: `3164`,
    5403: `3165`,
    5404: `3166`,
    5405: `3168`,
    5406: `3168`,
    5407: `3169`,
    5408: `3170`,
    5409: `3170`,
    541: `101`,
    5410: `3171`,
    5411: `3172`,
    5412: `3172`,
    5413: `3173`,
    5414: `3174`,
    5415: `3175`,
    5416: `3175`,
    5417: `3175`,
    5418: `3175`,
    5419: `3175`,
    542: `102`,
    5420: `3175`,
    5421: `3175`,
    5422: `3175`,
    5423: `3175`,
    5424: `3175`,
    5425: `3175`,
    5426: `3175`,
    5427: `3175`,
    5428: `3175`,
    5429: `3175`,
    543: `102`,
    5430: `3175`,
    5431: `3175`,
    5432: `3175`,
    5433: `3175`,
    5434: `3175`,
    5435: `3175`,
    5436: `3175`,
    5437: `3175`,
    5438: `3175`,
    5439: `3175`,
    544: `105`,
    5440: `3175`,
    5441: `3175`,
    5442: `3175`,
    5443: `3175`,
    5444: `3175`,
    5445: `3175`,
    5446: `3175`,
    5447: `3175`,
    5448: `3175`,
    5449: `3175`,
    545: `105`,
    5450: `3175`,
    5451: `3175`,
    5452: `3175`,
    5453: `3175`,
    5454: `3175`,
    5455: `3175`,
    5456: `3175`,
    5457: `3175`,
    5458: `3175`,
    5459: `3175`,
    546: `106`,
    5460: `3175`,
    5461: `3175`,
    5462: `3175`,
    5463: `3175`,
    5464: `3175`,
    5465: `3175`,
    5466: `3175`,
    5467: `3175`,
    5468: `3175`,
    5469: `3175`,
    547: `106`,
    5470: `3175`,
    5471: `3175`,
    5472: `3175`,
    5473: `3175`,
    5474: `3175`,
    5475: `3175`,
    5476: `3175`,
    5477: `3175`,
    5478: `3175`,
    5479: `3175`,
    548: `107`,
    5480: `3175`,
    5481: `3176`,
    5482: `3177`,
    5483: `3177`,
    5484: `3178`,
    5485: `3178`,
    5486: `3178`,
    5487: `3179`,
    5488: `3180`,
    5489: `3180`,
    549: `108`,
    5490: `3181`,
    5491: `3182`,
    5492: `3182`,
    5493: `3183`,
    5494: `3184`,
    5495: `3184`,
    5496: `3185`,
    5497: `3185`,
    5498: `3186`,
    5499: `3187`,
    55: `2`,
    550: `109`,
    5500: `3187`,
    5501: `3188`,
    5502: `3189`,
    5503: `3189`,
    5504: `3190`,
    5505: `3190`,
    5506: `3190`,
    5507: `3191`,
    5508: `3192`,
    5509: `3192`,
    551: `109`,
    5510: `3193`,
    5511: `3193`,
    5512: `3193`,
    5513: `3194`,
    5514: `3195`,
    5515: `3196`,
    5516: `3196`,
    5517: `3197`,
    5518: `3197`,
    5519: `3197`,
    552: `109`,
    5520: `3198`,
    5521: `3199`,
    5522: `3199`,
    5523: `3200`,
    5524: `3201`,
    5525: `3202`,
    5526: `3202`,
    5527: `3203`,
    5528: `3204`,
    5529: `3205`,
    553: `110`,
    5530: `3205`,
    5531: `3206`,
    5532: `3207`,
    5533: `3207`,
    5534: `3208`,
    5535: `3209`,
    5536: `3209`,
    5537: `3210`,
    5538: `3210`,
    5539: `3211`,
    554: `110`,
    5540: `3211`,
    5541: `3212`,
    5542: `3212`,
    5543: `3213`,
    5544: `3213`,
    5545: `3214`,
    5546: `3214`,
    5547: `3214`,
    5548: `3216`,
    5549: `3216`,
    555: `111`,
    5550: `3216`,
    5551: `3217`,
    5552: `3217`,
    5553: `3217`,
    5554: `3217`,
    5555: `3218`,
    5556: `3218`,
    5557: `3218`,
    5558: `3220`,
    5559: `3221`,
    556: `112`,
    5560: `3222`,
    5561: `3222`,
    5562: `3223`,
    5563: `3223`,
    5564: `3224`,
    5565: `3224`,
    5566: `3226`,
    5567: `3226`,
    5568: `3226`,
    5569: `3226`,
    557: `113`,
    5570: `3226`,
    5571: `3226`,
    5572: `3226`,
    5573: `3226`,
    5574: `3227`,
    5575: `3227`,
    5576: `3228`,
    5577: `3228`,
    5578: `3229`,
    5579: `3229`,
    558: `113`,
    5580: `3230`,
    5581: `3232`,
    5582: `3232`,
    5583: `3233`,
    5584: `3233`,
    5585: `3235`,
    5586: `3235`,
    5587: `3235`,
    5588: `3236`,
    5589: `3236`,
    559: `114`,
    5590: `3237`,
    5591: `3237`,
    5592: `3237`,
    5593: `3239`,
    5594: `3239`,
    5595: `3239`,
    5596: `3241`,
    5597: `3241`,
    5598: `3241`,
    5599: `3242`,
    56: `2`,
    560: `114`,
    5600: `3242`,
    5601: `3243`,
    5602: `3243`,
    5603: `3243`,
    5604: `3245`,
    5605: `3245`,
    5606: `3245`,
    5607: `3247`,
    5608: `3247`,
    5609: `3247`,
    561: `114`,
    5610: `3248`,
    5611: `3248`,
    5612: `3249`,
    5613: `3249`,
    5614: `3249`,
    5615: `3251`,
    5616: `3252`,
    5617: `3252`,
    5618: `3253`,
    5619: `3254`,
    562: `114`,
    5620: `3255`,
    5621: `3256`,
    5622: `3256`,
    5623: `3257`,
    5624: `3258`,
    5625: `3259`,
    5626: `3260`,
    5627: `3260`,
    5628: `3261`,
    5629: `3262`,
    563: `114`,
    5630: `3263`,
    5631: `3264`,
    5632: `3264`,
    5633: `3265`,
    5634: `3266`,
    5635: `3267`,
    5636: `3268`,
    5637: `3268`,
    5638: `3269`,
    5639: `3269`,
    564: `114`,
    5640: `3269`,
    5641: `3270`,
    5642: `3270`,
    5643: `3270`,
    5644: `3271`,
    5645: `3272`,
    5646: `3273`,
    5647: `3274`,
    5648: `3274`,
    5649: `3274`,
    565: `115`,
    5650: `3277`,
    5651: `3277`,
    5652: `3277`,
    5653: `3278`,
    5654: `3278`,
    5655: `3278`,
    5656: `3279`,
    5657: `3279`,
    5658: `3280`,
    5659: `3280`,
    566: `115`,
    5660: `3281`,
    5661: `3281`,
    5662: `3281`,
    5663: `3284`,
    5664: `3284`,
    5665: `3284`,
    5666: `3285`,
    5667: `3285`,
    5668: `3285`,
    5669: `3286`,
    567: `116`,
    5670: `3286`,
    5671: `3287`,
    5672: `3287`,
    5673: `3288`,
    5674: `3288`,
    5675: `3288`,
    5676: `3291`,
    5677: `3291`,
    5678: `3291`,
    5679: `3292`,
    568: `117`,
    5680: `3292`,
    5681: `3293`,
    5682: `3293`,
    5683: `3293`,
    5684: `3296`,
    5685: `3296`,
    5686: `3296`,
    5687: `3299`,
    5688: `3299`,
    5689: `3299`,
    569: `118`,
    5690: `3302`,
    5691: `3302`,
    5692: `3302`,
    5693: `3305`,
    5694: `3305`,
    5695: `3305`,
    5696: `3308`,
    5697: `3308`,
    5698: `3308`,
    5699: `3309`,
    57: `2`,
    570: `120`,
    5700: `3309`,
    5701: `3309`,
    5702: `3310`,
    5703: `3310`,
    5704: `3310`,
    5705: `3311`,
    5706: `3311`,
    5707: `3312`,
    5708: `3312`,
    5709: `3313`,
    571: `120`,
    5710: `3313`,
    5711: `3314`,
    5712: `3314`,
    5713: `3314`,
    5714: `3317`,
    5715: `3317`,
    5716: `3317`,
    5717: `3318`,
    5718: `3318`,
    5719: `3318`,
    572: `121`,
    5720: `3319`,
    5721: `3319`,
    5722: `3320`,
    5723: `3320`,
    5724: `3321`,
    5725: `3321`,
    5726: `3321`,
    5727: `3323`,
    5728: `3324`,
    5729: `3324`,
    573: `121`,
    5730: `3325`,
    5731: `3325`,
    5732: `3325`,
    5733: `3327`,
    5734: `3327`,
    5735: `3328`,
    5736: `3328`,
    5737: `3328`,
    5738: `3329`,
    5739: `3329`,
    574: `121`,
    5740: `3330`,
    5741: `3330`,
    5742: `3330`,
    5743: `3332`,
    5744: `3332`,
    5745: `3333`,
    5746: `3333`,
    5747: `3333`,
    5748: `3334`,
    5749: `3334`,
    575: `124`,
    5750: `3335`,
    5751: `3335`,
    5752: `3335`,
    5753: `3337`,
    5754: `3337`,
    5755: `3337`,
    5756: `3339`,
    5757: `3339`,
    5758: `3339`,
    5759: `3341`,
    576: `125`,
    5760: `3341`,
    5761: `3342`,
    5762: `3342`,
    5763: `3342`,
    5764: `3343`,
    5765: `3343`,
    5766: `3344`,
    5767: `3344`,
    5768: `3344`,
    5769: `3346`,
    577: `125`,
    5770: `3346`,
    5771: `3346`,
    5772: `3348`,
    5773: `3348`,
    5774: `3348`,
    5775: `3350`,
    5776: `3350`,
    5777: `3350`,
    5778: `3352`,
    5779: `3352`,
    578: `126`,
    5780: `3352`,
    5781: `3354`,
    5782: `3354`,
    5783: `3355`,
    5784: `3355`,
    5785: `3355`,
    5786: `3356`,
    5787: `3356`,
    5788: `3357`,
    5789: `3357`,
    579: `126`,
    5790: `3357`,
    5791: `3359`,
    5792: `3359`,
    5793: `3360`,
    5794: `3360`,
    5795: `3360`,
    5796: `3361`,
    5797: `3361`,
    5798: `3362`,
    5799: `3362`,
    58: `2`,
    580: `126`,
    5800: `3362`,
    5801: `3364`,
    5802: `3364`,
    5803: `3365`,
    5804: `3365`,
    5805: `3365`,
    5806: `3366`,
    5807: `3366`,
    5808: `3367`,
    5809: `3367`,
    581: `126`,
    5810: `3367`,
    5811: `3369`,
    5812: `3369`,
    5813: `3370`,
    5814: `3370`,
    5815: `3370`,
    5816: `3371`,
    5817: `3371`,
    5818: `3372`,
    5819: `3372`,
    582: `126`,
    5820: `3372`,
    5821: `3374`,
    5822: `3374`,
    5823: `3375`,
    5824: `3376`,
    5825: `3377`,
    5826: `3380`,
    5827: `3380`,
    5828: `3380`,
    5829: `3381`,
    583: `126`,
    5830: `3381`,
    5831: `3382`,
    5832: `3382`,
    5833: `3382`,
    5834: `3383`,
    5835: `3383`,
    5836: `3384`,
    5837: `3384`,
    5838: `3384`,
    5839: `3385`,
    584: `126`,
    5840: `3386`,
    5841: `3386`,
    5842: `3387`,
    5843: `3387`,
    5844: `3387`,
    5845: `3388`,
    5846: `3389`,
    5847: `3389`,
    5848: `3390`,
    5849: `3390`,
    585: `126`,
    5850: `3390`,
    5851: `3391`,
    5852: `3392`,
    5853: `3392`,
    5854: `3393`,
    5855: `3393`,
    5856: `3394`,
    5857: `3395`,
    5858: `3396`,
    5859: `3397`,
    586: `126`,
    5860: `3397`,
    5861: `3398`,
    5862: `3398`,
    5863: `3399`,
    5864: `3400`,
    5865: `3401`,
    5866: `3402`,
    5867: `3402`,
    5868: `3403`,
    5869: `3403`,
    587: `126`,
    5870: `3403`,
    5871: `3405`,
    5872: `3405`,
    5873: `3406`,
    5874: `3406`,
    5875: `3406`,
    5876: `3407`,
    5877: `3407`,
    5878: `3408`,
    5879: `3408`,
    588: `127`,
    5880: `3408`,
    5881: `3410`,
    5882: `3411`,
    5883: `3411`,
    5884: `3412`,
    5885: `3412`,
    5886: `3412`,
    5887: `3414`,
    5888: `3414`,
    5889: `3415`,
    589: `127`,
    5890: `3415`,
    5891: `3416`,
    5892: `3417`,
    5893: `3417`,
    5894: `3417`,
    5895: `3418`,
    5896: `3418`,
    5897: `3419`,
    5898: `3419`,
    5899: `3419`,
    59: `2`,
    590: `128`,
    5900: `3420`,
    5901: `3421`,
    5902: `3421`,
    5903: `3421`,
    5904: `3422`,
    5905: `3422`,
    5906: `3423`,
    5907: `3423`,
    5908: `3424`,
    5909: `3424`,
    591: `129`,
    5910: `3425`,
    5911: `3426`,
    5912: `3426`,
    5913: `3426`,
    5914: `3427`,
    5915: `3427`,
    5916: `3428`,
    5917: `3428`,
    5918: `3428`,
    5919: `3429`,
    592: `130`,
    5920: `3430`,
    5921: `3430`,
    5922: `3430`,
    5923: `3431`,
    5924: `3432`,
    5925: `3432`,
    5926: `3433`,
    5927: `3433`,
    5928: `3434`,
    5929: `3435`,
    593: `130`,
    5930: `3435`,
    5931: `3436`,
    5932: `3437`,
    5933: `3438`,
    5934: `3438`,
    5935: `3439`,
    5936: `3439`,
    5937: `3439`,
    5938: `3441`,
    5939: `3441`,
    594: `131`,
    5940: `3442`,
    5941: `3442`,
    5942: `3442`,
    5943: `3443`,
    5944: `3444`,
    5945: `3444`,
    5946: `3445`,
    5947: `3445`,
    5948: `3445`,
    5949: `3446`,
    595: `131`,
    5950: `3446`,
    5951: `3447`,
    5952: `3447`,
    5953: `3448`,
    5954: `3448`,
    5955: `3448`,
    5956: `3449`,
    5957: `3449`,
    5958: `3450`,
    5959: `3450`,
    596: `134`,
    5960: `3451`,
    5961: `3451`,
    5962: `3451`,
    5963: `3452`,
    5964: `3452`,
    5965: `3454`,
    5966: `3454`,
    5967: `3455`,
    5968: `3456`,
    5969: `3456`,
    597: `134`,
    5970: `3457`,
    5971: `3458`,
    5972: `3459`,
    5973: `3459`,
    5974: `3460`,
    5975: `3461`,
    5976: `3461`,
    5977: `3462`,
    5978: `3463`,
    5979: `3464`,
    598: `135`,
    5980: `3464`,
    5981: `3465`,
    5982: `3466`,
    5983: `3466`,
    5984: `3467`,
    5985: `3468`,
    5986: `3468`,
    5987: `3469`,
    5988: `3470`,
    5989: `3470`,
    599: `135`,
    5990: `3471`,
    5991: `3472`,
    5992: `3472`,
    5993: `3473`,
    5994: `3474`,
    5995: `3474`,
    5996: `3475`,
    5997: `3476`,
    5998: `3477`,
    5999: `3477`,
    6: `2`,
    60: `2`,
    600: `136`,
    6000: `3478`,
    6001: `3479`,
    6002: `3479`,
    6003: `3480`,
    6004: `3481`,
    6005: `3481`,
    6006: `3482`,
    6007: `3483`,
    6008: `3483`,
    6009: `3484`,
    601: `137`,
    6010: `3485`,
    6011: `3486`,
    6012: `3486`,
    6013: `3487`,
    6014: `3487`,
    6015: `3487`,
    6016: `3489`,
    6017: `3490`,
    6018: `3491`,
    6019: `3492`,
    602: `140`,
    6020: `3493`,
    6021: `3495`,
    6022: `3496`,
    6023: `3496`,
    6024: `3497`,
    6025: `3497`,
    6026: `3498`,
    6027: `3498`,
    6028: `3499`,
    6029: `3499`,
    603: `141`,
    6030: `3500`,
    6031: `3500`,
    6032: `3501`,
    6033: `3502`,
    6034: `3504`,
    6035: `3504`,
    6036: `3505`,
    6037: `3506`,
    6038: `3507`,
    6039: `3510`,
    604: `142`,
    6040: `3510`,
    6041: `3510`,
    6042: `3511`,
    6043: `3511`,
    6044: `3512`,
    6045: `3513`,
    6046: `3513`,
    6047: `3514`,
    6048: `3514`,
    6049: `3514`,
    605: `142`,
    6050: `3516`,
    6051: `3516`,
    6052: `3517`,
    6053: `3518`,
    6054: `3519`,
    6055: `3522`,
    6056: `3522`,
    6057: `3522`,
    6058: `3523`,
    6059: `3523`,
    606: `143`,
    6060: `3524`,
    6061: `3524`,
    6062: `3524`,
    6063: `3525`,
    6064: `3526`,
    6065: `3526`,
    6066: `3527`,
    6067: `3527`,
    6068: `3528`,
    6069: `3528`,
    607: `143`,
    6070: `3528`,
    6071: `3530`,
    6072: `3530`,
    6073: `3531`,
    6074: `3532`,
    6075: `3533`,
    6076: `3536`,
    6077: `3536`,
    6078: `3536`,
    6079: `3537`,
    608: `144`,
    6080: `3537`,
    6081: `3538`,
    6082: `3538`,
    6083: `3538`,
    6084: `3539`,
    6085: `3540`,
    6086: `3540`,
    6087: `3541`,
    6088: `3541`,
    6089: `3542`,
    609: `144`,
    6090: `3542`,
    6091: `3542`,
    6092: `3544`,
    6093: `3544`,
    6094: `3545`,
    6095: `3546`,
    6096: `3547`,
    6097: `3550`,
    6098: `3550`,
    6099: `3550`,
    61: `2`,
    610: `145`,
    6100: `3551`,
    6101: `3551`,
    6102: `3552`,
    6103: `3552`,
    6104: `3553`,
    6105: `3553`,
    6106: `3553`,
    6107: `3555`,
    6108: `3555`,
    6109: `3556`,
    611: `145`,
    6110: `3557`,
    6111: `3558`,
    6112: `3561`,
    6113: `3561`,
    6114: `3561`,
    6115: `3562`,
    6116: `3562`,
    6117: `3563`,
    6118: `3563`,
    6119: `3564`,
    612: `146`,
    6120: `3564`,
    6121: `3566`,
    6122: `3567`,
    6123: `3567`,
    6124: `3568`,
    6125: `3569`,
    6126: `3569`,
    6127: `3570`,
    6128: `3571`,
    6129: `3571`,
    613: `146`,
    6130: `3571`,
    6131: `3572`,
    6132: `3572`,
    6133: `3572`,
    6134: `3573`,
    6135: `3573`,
    6136: `3575`,
    6137: `3576`,
    6138: `3576`,
    6139: `3577`,
    614: `147`,
    6140: `3578`,
    6141: `3578`,
    6142: `3579`,
    6143: `3580`,
    6144: `3580`,
    6145: `3580`,
    6146: `3581`,
    6147: `3581`,
    6148: `3581`,
    6149: `3582`,
    615: `147`,
    6150: `3583`,
    6151: `3583`,
    6152: `3584`,
    6153: `3584`,
    6154: `3584`,
    6155: `3587`,
    6156: `3587`,
    6157: `3587`,
    6158: `3588`,
    6159: `3588`,
    616: `148`,
    6160: `3589`,
    6161: `3589`,
    6162: `3589`,
    6163: `3591`,
    6164: `3592`,
    6165: `3594`,
    6166: `3595`,
    6167: `3596`,
    6168: `3597`,
    6169: `3597`,
    617: `148`,
    6170: `3598`,
    6171: `3598`,
    6172: `3599`,
    6173: `3599`,
    6174: `3599`,
    6175: `3600`,
    6176: `3602`,
    6177: `3603`,
    6178: `3604`,
    6179: `3604`,
    618: `149`,
    6180: `3604`,
    6181: `3605`,
    6182: `3606`,
    6183: `3606`,
    6184: `3609`,
    6185: `3609`,
    6186: `3610`,
    6187: `3610`,
    6188: `3611`,
    6189: `3611`,
    619: `151`,
    6190: `3612`,
    6191: `3613`,
    6192: `3614`,
    6193: `3614`,
    6194: `3615`,
    6195: `3616`,
    6196: `3616`,
    6197: `3617`,
    6198: `3617`,
    6199: `3618`,
    62: `2`,
    620: `151`,
    6200: `3618`,
    6201: `3619`,
    6202: `3620`,
    6203: `3621`,
    6204: `3621`,
    6205: `3622`,
    6206: `3622`,
    6207: `3623`,
    6208: `3624`,
    6209: `3625`,
    621: `151`,
    6210: `3625`,
    6211: `3626`,
    6212: `3627`,
    6213: `3628`,
    6214: `3631`,
    6215: `3631`,
    6216: `3631`,
    6217: `3632`,
    6218: `3633`,
    6219: `3633`,
    622: `151`,
    6220: `3634`,
    6221: `3634`,
    6222: `3634`,
    6223: `3637`,
    6224: `3637`,
    6225: `3637`,
    6226: `3638`,
    6227: `3639`,
    6228: `3639`,
    6229: `3640`,
    623: `153`,
    6230: `3640`,
    6231: `3640`,
    6232: `3643`,
    6233: `3643`,
    6234: `3643`,
    6235: `3644`,
    6236: `3645`,
    6237: `3645`,
    6238: `3646`,
    6239: `3646`,
    624: `153`,
    6240: `3646`,
    6241: `3649`,
    6242: `3649`,
    6243: `3649`,
    6244: `3650`,
    6245: `3651`,
    6246: `3651`,
    6247: `3652`,
    6248: `3652`,
    6249: `3652`,
    625: `154`,
    6250: `3654`,
    6251: `3655`,
    6252: `3656`,
    6253: `3656`,
    6254: `3657`,
    6255: `3658`,
    6256: `3659`,
    6257: `3660`,
    6258: `3661`,
    6259: `3662`,
    626: `155`,
    6260: `3664`,
    6261: `3665`,
    6262: `3665`,
    6263: `3665`,
    6264: `3666`,
    6265: `3667`,
    6266: `3668`,
    6267: `3669`,
    6268: `3670`,
    6269: `3672`,
    627: `155`,
    6270: `3673`,
    6271: `3674`,
    6272: `3675`,
    6273: `3675`,
    6274: `3675`,
    6275: `3676`,
    6276: `3676`,
    6277: `3677`,
    6278: `3678`,
    6279: `3679`,
    628: `156`,
    6280: `3681`,
    6281: `3682`,
    6282: `3683`,
    6283: `3684`,
    6284: `3684`,
    6285: `3684`,
    6286: `3685`,
    6287: `3685`,
    6288: `3686`,
    6289: `3686`,
    629: `156`,
    6290: `3686`,
    6291: `3687`,
    6292: `3687`,
    6293: `3687`,
    6294: `3689`,
    6295: `3690`,
    6296: `3691`,
    6297: `3692`,
    6298: `3692`,
    6299: `3693`,
    63: `2`,
    630: `156`,
    6300: `3694`,
    6301: `3695`,
    6302: `3696`,
    6303: `3696`,
    6304: `3697`,
    6305: `3698`,
    6306: `3698`,
    6307: `3698`,
    6308: `3699`,
    6309: `3699`,
    631: `158`,
    6310: `3700`,
    6311: `3701`,
    6312: `3701`,
    6313: `3702`,
    6314: `3703`,
    6315: `3703`,
    6316: `3704`,
    6317: `3705`,
    6318: `3705`,
    6319: `3705`,
    632: `159`,
    6320: `3706`,
    6321: `3706`,
    6322: `3707`,
    6323: `3708`,
    6324: `3709`,
    6325: `3710`,
    6326: `3710`,
    6327: `3711`,
    6328: `3712`,
    6329: `3712`,
    633: `159`,
    6330: `3712`,
    6331: `3713`,
    6332: `3713`,
    6333: `3714`,
    6334: `3715`,
    6335: `3715`,
    6336: `3715`,
    6337: `3716`,
    6338: `3716`,
    6339: `3717`,
    634: `160`,
    6340: `3718`,
    6341: `3718`,
    6342: `3718`,
    6343: `3719`,
    6344: `3719`,
    6345: `3720`,
    6346: `3721`,
    6347: `3721`,
    6348: `3722`,
    6349: `3723`,
    635: `160`,
    6350: `3723`,
    6351: `3723`,
    6352: `3724`,
    6353: `3725`,
    6354: `3725`,
    6355: `3726`,
    6356: `3727`,
    6357: `3727`,
    6358: `3727`,
    6359: `3728`,
    636: `161`,
    6360: `3728`,
    6361: `3729`,
    6362: `3730`,
    6363: `3730`,
    6364: `3731`,
    6365: `3732`,
    6366: `3732`,
    6367: `3732`,
    6368: `3733`,
    6369: `3733`,
    637: `161`,
    6370: `3734`,
    6371: `3735`,
    6372: `3735`,
    6373: `3736`,
    6374: `3737`,
    6375: `3737`,
    6376: `3737`,
    6377: `3738`,
    6378: `3738`,
    6379: `3739`,
    638: `161`,
    6380: `3740`,
    6381: `3740`,
    6382: `3741`,
    6383: `3741`,
    6384: `3741`,
    6385: `3742`,
    6386: `3742`,
    6387: `3743`,
    6388: `3744`,
    6389: `3744`,
    639: `163`,
    6390: `3745`,
    6391: `3747`,
    6392: `3748`,
    6393: `3748`,
    6394: `3748`,
    6395: `3749`,
    6396: `3749`,
    6397: `3750`,
    6398: `3751`,
    6399: `3751`,
    64: `2`,
    640: `163`,
    6400: `3752`,
    6401: `3753`,
    6402: `3753`,
    6403: `3754`,
    6404: `3754`,
    6405: `3755`,
    6406: `3755`,
    6407: `3756`,
    6408: `3757`,
    6409: `3757`,
    641: `164`,
    6410: `3758`,
    6411: `3760`,
    6412: `3761`,
    6413: `3762`,
    6414: `3762`,
    6415: `3763`,
    6416: `3763`,
    6417: `3764`,
    6418: `3764`,
    6419: `3765`,
    642: `164`,
    6420: `3765`,
    6421: `3766`,
    6422: `3766`,
    6423: `3767`,
    6424: `3768`,
    6425: `3770`,
    6426: `3770`,
    6427: `3771`,
    6428: `3771`,
    6429: `3772`,
    643: `164`,
    6430: `3774`,
    6431: `3775`,
    6432: `3776`,
    6433: `3777`,
    6434: `3778`,
    6435: `3778`,
    6436: `3779`,
    6437: `3780`,
    6438: `3781`,
    6439: `3782`,
    644: `165`,
    6440: `3784`,
    6441: `3784`,
    6442: `3785`,
    6443: `3785`,
    6444: `3786`,
    6445: `3787`,
    6446: `3788`,
    6447: `3788`,
    6448: `3788`,
    6449: `3789`,
    645: `165`,
    6450: `3789`,
    6451: `3789`,
    6452: `3791`,
    6453: `3792`,
    6454: `3792`,
    6455: `3792`,
    6456: `3794`,
    6457: `3794`,
    6458: `3795`,
    6459: `3796`,
    646: `165`,
    6460: `3796`,
    6461: `3797`,
    6462: `3799`,
    6463: `3800`,
    6464: `3800`,
    6465: `3801`,
    647: `168`,
    648: `168`,
    649: `168`,
    65: `2`,
    650: `169`,
    651: `169`,
    652: `169`,
    653: `170`,
    654: `170`,
    655: `171`,
    656: `171`,
    657: `174`,
    658: `175`,
    659: `176`,
    66: `2`,
    660: `177`,
    661: `177`,
    662: `178`,
    663: `178`,
    664: `179`,
    665: `180`,
    666: `181`,
    667: `182`,
    668: `182`,
    669: `185`,
    67: `2`,
    670: `186`,
    671: `186`,
    672: `187`,
    673: `188`,
    674: `189`,
    675: `189`,
    676: `189`,
    677: `190`,
    678: `190`,
    679: `191`,
    68: `2`,
    680: `192`,
    681: `193`,
    682: `193`,
    683: `194`,
    684: `194`,
    685: `195`,
    686: `195`,
    687: `195`,
    688: `196`,
    689: `196`,
    69: `2`,
    690: `197`,
    691: `197`,
    692: `197`,
    693: `197`,
    694: `197`,
    695: `197`,
    696: `198`,
    697: `198`,
    698: `199`,
    699: `200`,
    7: `2`,
    70: `2`,
    700: `201`,
    701: `201`,
    702: `202`,
    703: `203`,
    704: `205`,
    705: `205`,
    706: `206`,
    707: `206`,
    708: `206`,
    709: `207`,
    71: `2`,
    710: `207`,
    711: `208`,
    712: `209`,
    713: `210`,
    714: `210`,
    715: `210`,
    716: `210`,
    717: `210`,
    718: `210`,
    719: `210`,
    72: `2`,
    720: `210`,
    721: `210`,
    722: `210`,
    723: `210`,
    724: `210`,
    725: `210`,
    726: `210`,
    727: `210`,
    728: `210`,
    729: `210`,
    73: `2`,
    730: `210`,
    731: `210`,
    732: `210`,
    733: `210`,
    734: `210`,
    735: `210`,
    736: `210`,
    737: `210`,
    738: `210`,
    739: `210`,
    74: `2`,
    740: `210`,
    741: `210`,
    742: `210`,
    743: `211`,
    744: `211`,
    745: `211`,
    746: `214`,
    747: `214`,
    748: `214`,
    749: `215`,
    75: `2`,
    750: `215`,
    751: `218`,
    752: `219`,
    753: `220`,
    754: `221`,
    755: `221`,
    756: `222`,
    757: `223`,
    758: `223`,
    759: `224`,
    76: `2`,
    760: `225`,
    761: `226`,
    762: `227`,
    763: `227`,
    764: `228`,
    765: `228`,
    766: `228`,
    767: `231`,
    768: `231`,
    769: `231`,
    77: `2`,
    770: `232`,
    771: `232`,
    772: `235`,
    773: `236`,
    774: `237`,
    775: `238`,
    776: `238`,
    777: `239`,
    778: `240`,
    779: `240`,
    78: `2`,
    780: `241`,
    781: `242`,
    782: `243`,
    783: `244`,
    784: `244`,
    785: `245`,
    786: `245`,
    787: `245`,
    788: `248`,
    789: `248`,
    79: `2`,
    790: `248`,
    791: `249`,
    792: `249`,
    793: `249`,
    794: `250`,
    795: `250`,
    796: `251`,
    797: `251`,
    798: `254`,
    799: `255`,
    8: `2`,
    80: `2`,
    800: `256`,
    801: `256`,
    802: `257`,
    803: `257`,
    804: `258`,
    805: `258`,
    806: `259`,
    807: `260`,
    808: `261`,
    809: `261`,
    81: `2`,
    810: `262`,
    811: `263`,
    812: `264`,
    813: `265`,
    814: `265`,
    815: `266`,
    816: `266`,
    817: `266`,
    818: `269`,
    819: `269`,
    82: `2`,
    820: `269`,
    821: `270`,
    822: `270`,
    823: `273`,
    824: `274`,
    825: `275`,
    826: `275`,
    827: `276`,
    828: `276`,
    829: `277`,
    83: `2`,
    830: `278`,
    831: `278`,
    832: `279`,
    833: `280`,
    834: `281`,
    835: `282`,
    836: `282`,
    837: `283`,
    838: `283`,
    839: `283`,
    84: `2`,
    840: `286`,
    841: `286`,
    842: `286`,
    843: `287`,
    844: `287`,
    845: `290`,
    846: `291`,
    847: `292`,
    848: `292`,
    849: `293`,
    85: `2`,
    850: `293`,
    851: `294`,
    852: `295`,
    853: `295`,
    854: `296`,
    855: `297`,
    856: `298`,
    857: `299`,
    858: `299`,
    859: `300`,
    86: `2`,
    860: `300`,
    861: `300`,
    862: `303`,
    863: `303`,
    864: `303`,
    865: `304`,
    866: `304`,
    867: `304`,
    868: `305`,
    869: `305`,
    87: `2`,
    870: `306`,
    871: `306`,
    872: `309`,
    873: `310`,
    874: `311`,
    875: `311`,
    876: `312`,
    877: `312`,
    878: `313`,
    879: `313`,
    88: `2`,
    880: `314`,
    881: `315`,
    882: `316`,
    883: `316`,
    884: `317`,
    885: `318`,
    886: `319`,
    887: `320`,
    888: `320`,
    889: `321`,
    89: `2`,
    890: `321`,
    891: `321`,
    892: `324`,
    893: `324`,
    894: `324`,
    895: `325`,
    896: `325`,
    897: `325`,
    898: `326`,
    899: `326`,
    9: `2`,
    90: `2`,
    900: `327`,
    901: `327`,
    902: `330`,
    903: `331`,
    904: `332`,
    905: `332`,
    906: `333`,
    907: `333`,
    908: `334`,
    909: `334`,
    91: `2`,
    910: `335`,
    911: `336`,
    912: `337`,
    913: `337`,
    914: `338`,
    915: `339`,
    916: `340`,
    917: `341`,
    918: `341`,
    919: `342`,
    92: `2`,
    920: `342`,
    921: `342`,
    922: `345`,
    923: `345`,
    924: `345`,
    925: `346`,
    926: `346`,
    927: `346`,
    928: `347`,
    929: `347`,
    93: `2`,
    930: `348`,
    931: `348`,
    932: `351`,
    933: `352`,
    934: `353`,
    935: `353`,
    936: `353`,
    937: `354`,
    938: `354`,
    939: `355`,
    94: `2`,
    940: `355`,
    941: `356`,
    942: `357`,
    943: `358`,
    944: `358`,
    945: `359`,
    946: `360`,
    947: `361`,
    948: `362`,
    949: `362`,
    95: `2`,
    950: `363`,
    951: `363`,
    952: `363`,
    953: `366`,
    954: `366`,
    955: `366`,
    956: `367`,
    957: `367`,
    958: `367`,
    959: `368`,
    96: `2`,
    960: `368`,
    961: `369`,
    962: `369`,
    963: `372`,
    964: `373`,
    965: `374`,
    966: `374`,
    967: `374`,
    968: `375`,
    969: `375`,
    97: `2`,
    970: `376`,
    971: `376`,
    972: `377`,
    973: `378`,
    974: `379`,
    975: `379`,
    976: `380`,
    977: `381`,
    978: `382`,
    979: `383`,
    98: `2`,
    980: `383`,
    981: `384`,
    982: `384`,
    983: `384`,
    984: `387`,
    985: `387`,
    986: `387`,
    987: `388`,
    988: `388`,
    989: `388`,
    99: `2`,
    990: `389`,
    991: `389`,
    992: `390`,
    993: `390`,
    994: `393`,
    995: `394`,
    996: `395`,
    997: `395`,
    998: `395`,
    999: `396`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
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
  warnings: [`Step 0 calls a remote object at /app/index.rsh:761:71:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:1009:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:1024:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:1414:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:1417:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:821:31:after expr stmt semicolon',
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
  "arc200_approve": arc200_approve,
  "arc200_transfer": arc200_transfer,
  "arc200_transferFrom": arc200_transferFrom
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
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom
  };
