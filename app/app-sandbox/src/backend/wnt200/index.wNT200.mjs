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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Struct([['votekey', ctc2], ['selkey', ctc2], ['spkey', ctc3], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  return {
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1],
    e_deregister: [ctc5],
    e_register: [ctc5],
    e_selkey: [ctc2],
    e_spkey: [ctc3],
    e_votefst: [ctc4],
    e_votekd: [ctc4],
    e_votekey: [ctc2],
    e_votelst: [ctc4]
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
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc7 = stdlib.T_Struct([['votekey', ctc2], ['selkey', ctc2], ['spkey', ctc6], ['votefst', ctc1], ['votelst', ctc1], ['votekd', ctc1]]);
  const ctc8 = stdlib.T_Data({
    None: ctc5,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_UInt256;
  const ctc11 = stdlib.T_Object({
    closed: ctc9,
    decimals: ctc1,
    keyInfo: ctc8,
    manager: ctc0,
    name: ctc2,
    registered: ctc9,
    symbol: ctc3,
    tokenAmount: ctc1,
    totalSupply: ctc10,
    zeroAddress: ctc0
    });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc13 = stdlib.T_Struct([['name', ctc2], ['symbol', ctc3], ['decimals', ctc1], ['totalSupply', ctc10], ['zeroAddress', ctc0], ['manager', ctc0], ['tokenAmount', ctc1], ['registered', ctc9], ['keyInfo', ctc8], ['closed', ctc9]]);
  const ctc14 = stdlib.T_Data({
    None: ctc5,
    Some: ctc10
    });
  const map0_ctc = ctc14;
  
  const map1_ctc = ctc14;
  
  
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async (_v3088, _v3089 ) => {
          const v3088 = stdlib.protect(ctc0, _v3088, null);
          const v3089 = stdlib.protect(ctc0, _v3089, null);
        
        const v3090 = [v3088, v3089];
        const v3091 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v3090, ctc10), null);
        const v3092 = stdlib.fromSome(v3091, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v3092;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async (_v3085 ) => {
          const v3085 = stdlib.protect(ctc0, _v3085, null);
        
        const v3086 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3085, ctc10), null);
        const v3087 = stdlib.fromSome(v3086, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v3087;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        
        return v3050;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        const v3058 = v3047.name;
        
        return v3058;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        const v3059 = v3047.symbol;
        
        return v3059;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _circulatingSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        const v3115 = v3066.tokenAmount;
        const v3116 = stdlib.cast("UInt", "UInt256", v3115, false, true);
        
        return v3116;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasAllowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async (_v3097, _v3098 ) => {
          const v3097 = stdlib.protect(ctc0, _v3097, null);
          const v3098 = stdlib.protect(ctc0, _v3098, null);
        
        const v3099 = [v3097, v3098];
        const v3100 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v3099, ctc10), null);
        const v3101 = {
          None: 0,
          Some: 1
          }[v3100[0]];
        const v3102 = stdlib.eq(v3101, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3102;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBalance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async (_v3093 ) => {
          const v3093 = stdlib.protect(ctc0, _v3093, null);
        
        const v3094 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v3093, ctc10), null);
        const v3095 = {
          None: 0,
          Some: 1
          }[v3094[0]];
        const v3096 = stdlib.eq(v3095, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v3096;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        const v3117 = v3066.manager;
        
        return v3117;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = svs;
      return (await ((async () => {
        
        const v3103 = v3066.name;
        const v3104 = v3066.symbol;
        const v3105 = v3066.decimals;
        const v3106 = v3066.totalSupply;
        const v3107 = v3066.zeroAddress;
        const v3108 = v3066.manager;
        const v3109 = v3066.tokenAmount;
        const v3110 = v3066.registered;
        const v3111 = v3066.keyInfo;
        const v3112 = v3066.closed;
        const v3113 = {
          closed: v3112,
          decimals: v3105,
          keyInfo: v3111,
          manager: v3108,
          name: v3103,
          registered: v3110,
          symbol: v3104,
          tokenAmount: v3109,
          totalSupply: v3106,
          zeroAddress: v3107
          };
        
        return v3113;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc0, ctc0],
        rng: ctc10
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc0],
        rng: ctc10
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc1
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc2
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc3
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc10
        },
      circulatingSupply: {
        decode: _circulatingSupply,
        dom: [],
        rng: ctc10
        },
      hasAllowance: {
        decode: _hasAllowance,
        dom: [ctc0, ctc0],
        rng: ctc9
        },
      hasBalance: {
        decode: _hasBalance,
        dom: [ctc0],
        rng: ctc9
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc13
        }
      },
    views: {
      3: [ctc0, ctc4, ctc1, ctc0, ctc8, ctc11, ctc1]
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Object({
    meta: ctc6,
    zeroAddress: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc7]);
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc16 = stdlib.T_Tuple([ctc4, ctc4, ctc15, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Data({
    arc200_approve0_299: ctc9,
    arc200_transfer0_299: ctc9,
    arc200_transferFrom0_299: ctc10,
    createBalanceBox0_299: ctc11,
    deleteAllowanceBox0_299: ctc12,
    deleteBalanceBox0_299: ctc11,
    deposit0_299: ctc13,
    deregister0_299: ctc14,
    destroy0_299: ctc14,
    grant0_299: ctc11,
    register0_299: ctc16,
    touch0_299: ctc14,
    withdraw0_299: ctc13
    });
  const ctc18 = stdlib.T_Bool;
  
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
  
  
  const v3032 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v3033 = v3032.meta;
  const v3034 = v3032.zeroAddress;
  const v3035 = v3033.decimals;
  
  const v3043 = stdlib.le(v3035, stdlib.checkedBigNumberify('./wNT200.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v3043, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3034, v3033],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./wNT200.rsh:101:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc6],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:101:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3046, v3047], secs: v3049, time: v3048, didSend: v72, from: v3045 } = txn1;
      
      const v3050 = v3047.decimals;
      ;
      const v3053 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc7, v3053, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc7, v3046, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:115:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3055 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      const v3056 = await ctc.getContractInfo();
      
      const v3062 = v3047.name;
      const v3063 = v3047.symbol;
      const v3064 = ['None', null];
      const v3065 = {
        closed: false,
        decimals: v3050,
        keyInfo: v3064,
        manager: v3045,
        name: v3062,
        registered: false,
        symbol: v3063,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        zeroAddress: v3046
        };
      const v3066 = v3065;
      const v3067 = v3048;
      const v3070 = stdlib.checkedBigNumberify('./wNT200.rsh:96:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v3083 = v3066.closed;
        const v3084 = v3083 ? false : true;
        
        return v3084;})()) {
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
    tys: [ctc7, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v3046, v3047], secs: v3049, time: v3048, didSend: v72, from: v3045 } = txn1;
  const v3050 = v3047.decimals;
  const v3051 = stdlib.le(v3050, stdlib.checkedBigNumberify('./wNT200.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v3051, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  const v3053 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc7, v3053, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc7, v3046, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:115:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3055 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  const v3056 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v3056), {
    at: './wNT200.rsh:118:21:application',
    fs: ['at ./wNT200.rsh:118:21:application call to [unknown function] (defined at: ./wNT200.rsh:118:21:function exp)', 'at ./wNT200.rsh:118:21:application call to "liftedInteract" (defined at: ./wNT200.rsh:118:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v3062 = v3047.name;
  const v3063 = v3047.symbol;
  const v3064 = ['None', null];
  const v3065 = {
    closed: false,
    decimals: v3050,
    keyInfo: v3064,
    manager: v3045,
    name: v3062,
    registered: false,
    symbol: v3063,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    zeroAddress: v3046
    };
  let v3066 = v3065;
  let v3067 = v3048;
  let v3070 = stdlib.checkedBigNumberify('./wNT200.rsh:96:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v3083 = v3066.closed;
    const v3084 = v3083 ? false : true;
    
    return v3084;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn3;
    switch (v3458[0]) {
      case 'arc200_approve0_299': {
        const v3461 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v3511 = v3461[stdlib.checkedBigNumberify('./wNT200.rsh:239:12:spread', stdlib.UInt_max, '0')];
        const v3512 = v3461[stdlib.checkedBigNumberify('./wNT200.rsh:239:12:spread', stdlib.UInt_max, '1')];
        const v3514 = stdlib.addressEq(v3457, v3046);
        const v3515 = v3514 ? false : true;
        stdlib.assert(v3515, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:231:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:240:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:230:56:function exp)', 'at ./wNT200.rsh:242:15:application call to [unknown function] (defined at: ./wNT200.rsh:242:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v3517 = stdlib.addressEq(v3511, v3046);
        const v3518 = v3517 ? false : true;
        stdlib.assert(v3518, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:232:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:240:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:230:56:function exp)', 'at ./wNT200.rsh:242:15:application call to [unknown function] (defined at: ./wNT200.rsh:242:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v3522 = [v3457, v3511];
        await stdlib.mapSet(map1, ctc12, v3522, ctc1, v3512);
        null;
        const v3524 = true;
        await txn3.getOutput('arc200_approve', 'v3524', ctc18, v3524);
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_299': {
        const v3971 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v4044 = v3971[stdlib.checkedBigNumberify('./wNT200.rsh:192:12:spread', stdlib.UInt_max, '0')];
        const v4045 = v3971[stdlib.checkedBigNumberify('./wNT200.rsh:192:12:spread', stdlib.UInt_max, '1')];
        const v4047 = stdlib.addressEq(v3457, v4044);
        const v4048 = v4047 ? false : true;
        stdlib.assert(v4048, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:182:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:193:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:195:15:application call to [unknown function] (defined at: ./wNT200.rsh:195:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v4050 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3457, ctc1), null);
        const v4051 = stdlib.fromSome(v4050, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4052 = stdlib.ge256(v4051, v4045);
        stdlib.assert(v4052, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:183:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:193:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:195:15:application call to [unknown function] (defined at: ./wNT200.rsh:195:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v4056 = true;
        await txn3.getOutput('arc200_transfer', 'v4056', ctc18, v4056);
        const v4068 = stdlib.safeSub256(v4051, v4045);
        await stdlib.mapSet(map0, ctc7, v3457, ctc1, v4068);
        const v4069 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4044, ctc1), null);
        const v4070 = stdlib.fromSome(v4069, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4071 = stdlib.safeAdd256(v4070, v4045);
        await stdlib.mapSet(map0, ctc7, v4044, ctc1, v4071);
        null;
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_299': {
        const v4481 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v4585 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '0')];
        const v4586 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '1')];
        const v4587 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '2')];
        const v4589 = stdlib.addressEq(v4585, v4586);
        const v4590 = v4589 ? false : true;
        stdlib.assert(v4590, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v4592 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4585, ctc1), null);
        const v4593 = stdlib.fromSome(v4592, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4594 = stdlib.ge256(v4593, v4587);
        stdlib.assert(v4594, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:205:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v4596 = [v4585, v3457];
        const v4597 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v4596, ctc1), null);
        const v4598 = stdlib.fromSome(v4597, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4599 = stdlib.ge256(v4598, v4587);
        stdlib.assert(v4599, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v4608 = stdlib.safeSub256(v4593, v4587);
        await stdlib.mapSet(map0, ctc7, v4585, ctc1, v4608);
        const v4609 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4586, ctc1), null);
        const v4610 = stdlib.fromSome(v4609, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v4611 = stdlib.safeAdd256(v4610, v4587);
        await stdlib.mapSet(map0, ctc7, v4586, ctc1, v4611);
        null;
        const v4616 = stdlib.safeSub256(v4598, v4587);
        await stdlib.mapSet(map1, ctc12, v4596, ctc1, v4616);
        null;
        const v4619 = true;
        await txn3.getOutput('arc200_transferFrom', 'v4619', ctc18, v4619);
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createBalanceBox0_299': {
        const v4991 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v5140 = v4991[stdlib.checkedBigNumberify('./wNT200.rsh:286:12:spread', stdlib.UInt_max, '0')];
        const v5141 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5140, ctc1), null);
        const v5142 = {
          None: 0,
          Some: 1
          }[v5141[0]];
        const v5143 = stdlib.eq(v5142, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5143, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:287:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:289:15:application call to [unknown function] (defined at: ./wNT200.rsh:289:15:function exp)'],
          msg: 'ARC200: Balance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc7, v5140, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:290:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5146 = true;
        await txn3.getOutput('createBalanceBox', 'v5146', ctc18, v5146);
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_299': {
        const v5501 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v5665 = v5501[stdlib.checkedBigNumberify('./wNT200.rsh:320:12:spread', stdlib.UInt_max, '0')];
        const v5666 = v5501[stdlib.checkedBigNumberify('./wNT200.rsh:320:12:spread', stdlib.UInt_max, '1')];
        const v5667 = [v5665, v5666];
        const v5668 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v5667, ctc1), null);
        const v5669 = {
          None: 0,
          Some: 1
          }[v5668[0]];
        const v5670 = stdlib.eq(v5669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5670, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:321:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:330:15:application call to [unknown function] (defined at: ./wNT200.rsh:330:15:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v5674 = stdlib.fromSome(v5668, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v5675 = stdlib.eq256(v5674, stdlib.checkedBigNumberify('./wNT200.rsh:326:48:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v5675, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:325:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:330:15:application call to [unknown function] (defined at: ./wNT200.rsh:330:15:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc12, v5667, ctc1, undefined /* Nothing */);
        const v5680 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v5680', ctc18, v5680);
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_299': {
        const v6011 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v6200 = v6011[stdlib.checkedBigNumberify('./wNT200.rsh:301:12:spread', stdlib.UInt_max, '0')];
        const v6201 = stdlib.addressEq(v6200, v3046);
        const v6202 = v6201 ? false : true;
        stdlib.assert(v6202, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:302:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v6204 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6200, ctc1), null);
        const v6205 = {
          None: 0,
          Some: 1
          }[v6204[0]];
        const v6206 = stdlib.eq(v6205, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6206, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:306:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v6209 = stdlib.fromSome(v6204, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6210 = stdlib.eq256(v6209, stdlib.checkedBigNumberify('./wNT200.rsh:307:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v6210, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:307:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc7, v6200, ctc1, undefined /* Nothing */);
        const v6213 = true;
        await txn3.getOutput('deleteBalanceBox', 'v6213', ctc18, v6213);
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deposit0_299': {
        const v6521 = v3458[1];
        undefined /* setApiDetails */;
        const v6532 = v6521[stdlib.checkedBigNumberify('./wNT200.rsh:249:12:spread', stdlib.UInt_max, '0')];
        const v6534 = stdlib.cast("UInt", "UInt256", v6532, false, true);
        const v6536 = stdlib.addressEq(v3053, v3457);
        const v6537 = v6536 ? false : true;
        stdlib.assert(v6537, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:182:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:250:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v6539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3053, ctc1), null);
        const v6540 = stdlib.fromSome(v6539, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6541 = stdlib.ge256(v6540, v6534);
        stdlib.assert(v6541, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:183:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:250:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v6569 = stdlib.add(v3070, v6532);
        ;
        const v6750 = stdlib.safeSub256(v6540, v6534);
        await stdlib.mapSet(map0, ctc7, v3053, ctc1, v6750);
        const v6751 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3457, ctc1), null);
        const v6752 = stdlib.fromSome(v6751, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v6753 = stdlib.safeAdd256(v6752, v6534);
        await stdlib.mapSet(map0, ctc7, v3457, ctc1, v6753);
        null;
        const v6756 = v6753;
        await txn3.getOutput('deposit', 'v6756', ctc1, v6756);
        const v6763 = v3066.closed;
        const v6764 = v3066.decimals;
        const v6765 = v3066.keyInfo;
        const v6766 = v3066.manager;
        const v6767 = v3066.name;
        const v6768 = v3066.registered;
        const v6769 = v3066.symbol;
        const v6770 = v3066.tokenAmount;
        const v6771 = v3066.totalSupply;
        const v6772 = v3066.zeroAddress;
        const v6774 = stdlib.safeAdd(v6770, v6532);
        const v6775 = {
          closed: v6763,
          decimals: v6764,
          keyInfo: v6765,
          manager: v6766,
          name: v6767,
          registered: v6768,
          symbol: v6769,
          tokenAmount: v6774,
          totalSupply: v6771,
          zeroAddress: v6772
          };
        const cv3066 = v6775;
        const cv3067 = v3459;
        const cv3070 = v6569;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deregister0_299': {
        const v7031 = v3458[1];
        undefined /* setApiDetails */;
        const v7054 = v3066.manager;
        const v7055 = stdlib.addressEq(v3457, v7054);
        stdlib.assert(v7055, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:365:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v7057 = v3066.registered;
        stdlib.assert(v7057, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:366:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
          msg: 'Must be registered',
          who: 'Deployer'
          });
        const v7059 = v3066.keyInfo;
        const v7060 = {
          None: 0,
          Some: 1
          }[v7059[0]];
        const v7061 = stdlib.eq(v7060, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v7062 = v7061 ? false : true;
        stdlib.assert(v7062, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:367:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
          msg: 'Must have key info',
          who: 'Deployer'
          });
        const v7079 = stdlib.add(v3070, stdlib.checkedBigNumberify('./wNT200.rsh:369:11:decimal', stdlib.UInt_max, '1000'));
        ;
        switch (v7059[0]) {
          case 'None': {
            const v7300 = v7059[1];
            const v7301 = false;
            await txn3.getOutput('deregister', 'v7301', ctc18, v7301);
            const cv3066 = v3066;
            const cv3067 = v3459;
            const cv3070 = v7079;
            
            v3066 = cv3066;
            v3067 = cv3067;
            v3070 = cv3070;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v7310 = v7059[1];
            const v7311 = true;
            await txn3.getOutput('deregister', 'v7311', ctc18, v7311);
            null;
            const v7326 = stdlib.sub(v7079, stdlib.checkedBigNumberify('./wNT200.rsh:377:26:decimal', stdlib.UInt_max, '1000'));
            ;
            const v7327 = v3066.closed;
            const v7328 = v3066.decimals;
            const v7331 = v3066.name;
            const v7333 = v3066.symbol;
            const v7334 = v3066.tokenAmount;
            const v7335 = v3066.totalSupply;
            const v7336 = v3066.zeroAddress;
            const v7338 = {
              closed: v7327,
              decimals: v7328,
              keyInfo: v3064,
              manager: v7054,
              name: v7331,
              registered: false,
              symbol: v7333,
              tokenAmount: v7334,
              totalSupply: v7335,
              zeroAddress: v7336
              };
            const cv3066 = v7338;
            const cv3067 = v3459;
            const cv3070 = v7326;
            
            v3066 = cv3066;
            v3067 = cv3067;
            v3070 = cv3070;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'destroy0_299': {
        const v7541 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v7853 = v3066.manager;
        const v7854 = stdlib.addressEq(v3457, v7853);
        stdlib.assert(v7854, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:425:15:application call to [unknown function] (defined at: ./wNT200.rsh:425:15:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v7856 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v7857 = {
          None: 0,
          Some: 1
          }[v7856[0]];
        const v7858 = stdlib.eq(v7857, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v7858, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:425:15:application call to [unknown function] (defined at: ./wNT200.rsh:425:15:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc7, v3046, ctc1, undefined /* Nothing */);
        await stdlib.mapSet(map0, ctc7, v3053, ctc1, undefined /* Nothing */);
        const v7861 = v3066.tokenAmount;
        const v7866 = stdlib.sub(v3070, v7861);
        ;
        const v7867 = null;
        await txn3.getOutput('destroy', 'v7867', ctc0, v7867);
        const v7874 = v3066.decimals;
        const v7875 = v3066.keyInfo;
        const v7877 = v3066.name;
        const v7878 = v3066.registered;
        const v7879 = v3066.symbol;
        const v7881 = v3066.totalSupply;
        const v7882 = v3066.zeroAddress;
        const v7883 = {
          closed: true,
          decimals: v7874,
          keyInfo: v7875,
          manager: v7853,
          name: v7877,
          registered: v7878,
          symbol: v7879,
          tokenAmount: v7861,
          totalSupply: v7881,
          zeroAddress: v7882
          };
        const cv3066 = v7883;
        const cv3067 = v3459;
        const cv3070 = v7866;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'grant0_299': {
        const v8051 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v8397 = v8051[stdlib.checkedBigNumberify('./wNT200.rsh:402:12:spread', stdlib.UInt_max, '0')];
        const v8398 = stdlib.addressEq(v8397, v3046);
        const v8399 = v8398 ? false : true;
        stdlib.assert(v8399, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:403:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
          msg: 'ARC200: Grant zero address',
          who: 'Deployer'
          });
        const v8401 = v3066.manager;
        const v8402 = stdlib.addressEq(v8397, v8401);
        const v8403 = v8402 ? false : true;
        stdlib.assert(v8403, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:404:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
          msg: 'ARC200: Grant to manager',
          who: 'Deployer'
          });
        const v8406 = stdlib.addressEq(v3457, v8401);
        stdlib.assert(v8406, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:405:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v8409 = null;
        await txn3.getOutput('grant', 'v8409', ctc0, v8409);
        const v8416 = v3066.closed;
        const v8417 = v3066.decimals;
        const v8418 = v3066.keyInfo;
        const v8420 = v3066.name;
        const v8421 = v3066.registered;
        const v8422 = v3066.symbol;
        const v8423 = v3066.tokenAmount;
        const v8424 = v3066.totalSupply;
        const v8425 = v3066.zeroAddress;
        const v8426 = {
          closed: v8416,
          decimals: v8417,
          keyInfo: v8418,
          manager: v8397,
          name: v8420,
          registered: v8421,
          symbol: v8422,
          tokenAmount: v8423,
          totalSupply: v8424,
          zeroAddress: v8425
          };
        const cv3066 = v8426;
        const cv3067 = v3459;
        const cv3070 = v3070;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'register0_299': {
        const v8561 = v3458[1];
        undefined /* setApiDetails */;
        const v8603 = v3066.manager;
        const v8604 = stdlib.addressEq(v3457, v8603);
        stdlib.assert(v8604, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:338:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:337:76:application call to [unknown function] (defined at: ./wNT200.rsh:337:76:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:337:76:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v8609 = stdlib.add(v3070, stdlib.checkedBigNumberify('./wNT200.rsh:340:11:decimal', stdlib.UInt_max, '1000'));
        ;
        const v8940 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '0')];
        const v8941 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '1')];
        const v8942 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '2')];
        const v8943 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '3')];
        const v8944 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '4')];
        const v8945 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '5')];
        const v8955 = true;
        await txn3.getOutput('register', 'v8955', ctc18, v8955);
        const v8967 = {
          selkey: v8941,
          spkey: v8942,
          votefst: v8943,
          votekd: v8945,
          votekey: v8940,
          votelst: v8944
          };
        null;
        null;
        null;
        null;
        null;
        null;
        null;
        const v8971 = stdlib.sub(v8609, stdlib.checkedBigNumberify('./wNT200.rsh:359:22:decimal', stdlib.UInt_max, '1000'));
        ;
        const v8972 = v3066.closed;
        const v8973 = v3066.decimals;
        const v8976 = v3066.name;
        const v8978 = v3066.symbol;
        const v8979 = v3066.tokenAmount;
        const v8980 = v3066.totalSupply;
        const v8981 = v3066.zeroAddress;
        const v8983 = ['Some', v8967];
        const v8984 = {
          closed: v8972,
          decimals: v8973,
          keyInfo: v8983,
          manager: v8603,
          name: v8976,
          registered: true,
          symbol: v8978,
          tokenAmount: v8979,
          totalSupply: v8980,
          zeroAddress: v8981
          };
        const cv3066 = v8984;
        const cv3067 = v3459;
        const cv3070 = v8971;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_299': {
        const v9071 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v9501 = (stdlib.le(await ctc.getBalance(), v3070) ? stdlib.checkedBigNumberify('./wNT200.rsh:392:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3070));
        const v9502 = stdlib.safeAdd(v9501, v3070);
        const v9503 = v3066.manager;
        const v9507 = stdlib.sub(v9502, v9501);
        ;
        await txn3.getOutput('touch', 'v9501', ctc3, v9501);
        const cv3066 = v3066;
        const cv3067 = v3459;
        const cv3070 = v9507;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_299': {
        const v9581 = v3458[1];
        undefined /* setApiDetails */;
        ;
        const v10025 = v9581[stdlib.checkedBigNumberify('./wNT200.rsh:267:12:spread', stdlib.UInt_max, '0')];
        const v10026 = v3066.tokenAmount;
        const v10027 = stdlib.le(v10025, v10026);
        stdlib.assert(v10027, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
          msg: 'ARC200: Withdraw amount too large',
          who: 'Deployer'
          });
        const v10031 = stdlib.cast("UInt", "UInt256", v10025, false, true);
        const v10033 = stdlib.addressEq(v3457, v3053);
        const v10034 = v10033 ? false : true;
        stdlib.assert(v10034, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v10036 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3457, ctc1), null);
        const v10037 = stdlib.fromSome(v10036, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v10038 = stdlib.ge256(v10037, v10031);
        stdlib.assert(v10038, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:205:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v10040 = [v3457, v3053];
        const v10041 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v10040, ctc1), null);
        const v10042 = stdlib.fromSome(v10041, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v10043 = stdlib.ge256(v10042, v10031);
        stdlib.assert(v10043, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./wNT200.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v10053 = stdlib.safeSub256(v10037, v10031);
        await stdlib.mapSet(map0, ctc7, v3457, ctc1, v10053);
        const v10054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3053, ctc1), null);
        const v10055 = stdlib.fromSome(v10054, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v10056 = stdlib.safeAdd256(v10055, v10031);
        await stdlib.mapSet(map0, ctc7, v3053, ctc1, v10056);
        null;
        const v10061 = stdlib.safeSub256(v10042, v10031);
        await stdlib.mapSet(map1, ctc12, v10040, ctc1, v10061);
        null;
        const v10067 = stdlib.sub(v3070, v10025);
        ;
        const v10068 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3457, ctc1), null);
        const v10069 = stdlib.fromSome(v10068, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        await txn3.getOutput('withdraw', 'v10069', ctc1, v10069);
        const v10076 = v3066.closed;
        const v10077 = v3066.decimals;
        const v10078 = v3066.keyInfo;
        const v10079 = v3066.manager;
        const v10080 = v3066.name;
        const v10081 = v3066.registered;
        const v10082 = v3066.symbol;
        const v10084 = v3066.totalSupply;
        const v10085 = v3066.zeroAddress;
        const v10087 = stdlib.safeSub(v10026, v10025);
        const v10088 = {
          closed: v10076,
          decimals: v10077,
          keyInfo: v10078,
          manager: v10079,
          name: v10080,
          registered: v10081,
          symbol: v10082,
          tokenAmount: v10087,
          totalSupply: v10084,
          zeroAddress: v10085
          };
        const cv3066 = v10088;
        const cv3067 = v3459;
        const cv3070 = v10067;
        
        v3066 = cv3066;
        v3067 = cv3067;
        v3070 = cv3070;
        
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc13,
    arc200_transfer0_299: ctc13,
    arc200_transferFrom0_299: ctc14,
    createBalanceBox0_299: ctc15,
    deleteAllowanceBox0_299: ctc16,
    deleteBalanceBox0_299: ctc15,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc15,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3175 = ctc.selfAddress();
  const v3177 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:239:50:application call to [unknown function] (defined at: ./wNT200.rsh:239:50:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_approve0_299" (defined at: ./wNT200.rsh:239:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v3178 = v3177[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3183 = stdlib.addressEq(v3175, v3046);
  const v3184 = v3183 ? false : true;
  stdlib.assert(v3184, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:231:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:240:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:230:56:function exp)', 'at ./wNT200.rsh:239:50:application call to [unknown function] (defined at: ./wNT200.rsh:239:50:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_approve0_299" (defined at: ./wNT200.rsh:239:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v3186 = stdlib.addressEq(v3178, v3046);
  const v3187 = v3186 ? false : true;
  stdlib.assert(v3187, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:232:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:240:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:230:56:function exp)', 'at ./wNT200.rsh:239:50:application call to [unknown function] (defined at: ./wNT200.rsh:239:50:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_approve0_299" (defined at: ./wNT200.rsh:239:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v3196 = ['arc200_approve0_299', v3177];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3196],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:239:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v3511 = v3461[stdlib.checkedBigNumberify('./wNT200.rsh:239:12:spread', stdlib.UInt_max, '0')];
          const v3512 = v3461[stdlib.checkedBigNumberify('./wNT200.rsh:239:12:spread', stdlib.UInt_max, '1')];
          const v3522 = [v3457, v3511];
          await stdlib.simMapSet(sim_r, 1, ctc16, v3522, ctc1, v3512);
          null;
          const v3524 = true;
          const v3525 = await txn1.getOutput('arc200_approve', 'v3524', ctc11, v3524);
          
          const v17752 = v3066;
          const v17754 = v3070;
          const v17755 = v3066.closed;
          if (v17755) {
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
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v3511 = v3461[stdlib.checkedBigNumberify('./wNT200.rsh:239:12:spread', stdlib.UInt_max, '0')];
      const v3512 = v3461[stdlib.checkedBigNumberify('./wNT200.rsh:239:12:spread', stdlib.UInt_max, '1')];
      const v3514 = stdlib.addressEq(v3457, v3046);
      const v3515 = v3514 ? false : true;
      stdlib.assert(v3515, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:231:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:240:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:230:56:function exp)', 'at ./wNT200.rsh:242:15:application call to [unknown function] (defined at: ./wNT200.rsh:242:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v3517 = stdlib.addressEq(v3511, v3046);
      const v3518 = v3517 ? false : true;
      stdlib.assert(v3518, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:232:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:240:20:application call to "chkApprove_" (defined at: ./wNT200.rsh:230:56:function exp)', 'at ./wNT200.rsh:242:15:application call to [unknown function] (defined at: ./wNT200.rsh:242:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v3522 = [v3457, v3511];
      await stdlib.mapSet(map1, ctc16, v3522, ctc1, v3512);
      null;
      const v3524 = true;
      const v3525 = await txn1.getOutput('arc200_approve', 'v3524', ctc11, v3524);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v3461, v3525), {
          at: './wNT200.rsh:239:13:application',
          fs: ['at ./wNT200.rsh:239:13:application call to [unknown function] (defined at: ./wNT200.rsh:239:13:function exp)', 'at ./wNT200.rsh:244:14:application call to "k" (defined at: ./wNT200.rsh:242:15:function exp)', 'at ./wNT200.rsh:242:15:application call to [unknown function] (defined at: ./wNT200.rsh:242:15:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v17752 = v3066;
      const v17754 = v3070;
      const v17755 = v3066.closed;
      if (v17755) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc13,
    arc200_transfer0_299: ctc13,
    arc200_transferFrom0_299: ctc14,
    createBalanceBox0_299: ctc15,
    deleteAllowanceBox0_299: ctc16,
    deleteBalanceBox0_299: ctc15,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc15,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3118 = ctc.selfAddress();
  const v3120 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:192:46:application call to [unknown function] (defined at: ./wNT200.rsh:192:46:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transfer0_299" (defined at: ./wNT200.rsh:192:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v3121 = v3120[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3122 = v3120[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3126 = stdlib.addressEq(v3118, v3121);
  const v3127 = v3126 ? false : true;
  stdlib.assert(v3127, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:182:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:193:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:192:46:application call to [unknown function] (defined at: ./wNT200.rsh:192:46:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transfer0_299" (defined at: ./wNT200.rsh:192:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transfer'
    });
  const v3129 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3118, ctc1), null);
  const v3130 = stdlib.fromSome(v3129, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3131 = stdlib.ge256(v3130, v3122);
  stdlib.assert(v3131, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:183:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:193:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:192:46:application call to [unknown function] (defined at: ./wNT200.rsh:192:46:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transfer0_299" (defined at: ./wNT200.rsh:192:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v3140 = ['arc200_transfer0_299', v3120];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3140],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:192:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v4044 = v3971[stdlib.checkedBigNumberify('./wNT200.rsh:192:12:spread', stdlib.UInt_max, '0')];
          const v4045 = v3971[stdlib.checkedBigNumberify('./wNT200.rsh:192:12:spread', stdlib.UInt_max, '1')];
          const v4050 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3457, ctc1), null);
          const v4051 = stdlib.fromSome(v4050, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4056 = true;
          const v4057 = await txn1.getOutput('arc200_transfer', 'v4056', ctc11, v4056);
          
          const v4068 = stdlib.safeSub256(v4051, v4045);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3457, ctc1, v4068);
          const v4069 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4044, ctc1), null);
          const v4070 = stdlib.fromSome(v4069, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4071 = stdlib.safeAdd256(v4070, v4045);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4044, ctc1, v4071);
          null;
          const v17827 = v3066;
          const v17829 = v3070;
          const v17830 = v3066.closed;
          if (v17830) {
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
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v4044 = v3971[stdlib.checkedBigNumberify('./wNT200.rsh:192:12:spread', stdlib.UInt_max, '0')];
      const v4045 = v3971[stdlib.checkedBigNumberify('./wNT200.rsh:192:12:spread', stdlib.UInt_max, '1')];
      const v4047 = stdlib.addressEq(v3457, v4044);
      const v4048 = v4047 ? false : true;
      stdlib.assert(v4048, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:182:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:193:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:195:15:application call to [unknown function] (defined at: ./wNT200.rsh:195:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transfer'
        });
      const v4050 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3457, ctc1), null);
      const v4051 = stdlib.fromSome(v4050, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4052 = stdlib.ge256(v4051, v4045);
      stdlib.assert(v4052, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:183:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:193:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:195:15:application call to [unknown function] (defined at: ./wNT200.rsh:195:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v4056 = true;
      const v4057 = await txn1.getOutput('arc200_transfer', 'v4056', ctc11, v4056);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v3971, v4057), {
          at: './wNT200.rsh:192:13:application',
          fs: ['at ./wNT200.rsh:192:13:application call to [unknown function] (defined at: ./wNT200.rsh:192:13:function exp)', 'at ./wNT200.rsh:196:14:application call to "k" (defined at: ./wNT200.rsh:195:15:function exp)', 'at ./wNT200.rsh:195:15:application call to [unknown function] (defined at: ./wNT200.rsh:195:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v4068 = stdlib.safeSub256(v4051, v4045);
      await stdlib.mapSet(map0, ctc3, v3457, ctc1, v4068);
      const v4069 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4044, ctc1), null);
      const v4070 = stdlib.fromSome(v4069, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4071 = stdlib.safeAdd256(v4070, v4045);
      await stdlib.mapSet(map0, ctc3, v4044, ctc1, v4071);
      null;
      const v17827 = v3066;
      const v17829 = v3070;
      const v17830 = v3066.closed;
      if (v17830) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc15,
    arc200_transfer0_299: ctc15,
    arc200_transferFrom0_299: ctc13,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc14,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc16,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3142 = ctc.selfAddress();
  const v3144 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:219:57:application call to [unknown function] (defined at: ./wNT200.rsh:219:57:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transferFrom0_299" (defined at: ./wNT200.rsh:219:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v3145 = v3144[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3146 = v3144[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3147 = v3144[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3152 = stdlib.addressEq(v3145, v3146);
  const v3153 = v3152 ? false : true;
  stdlib.assert(v3153, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:219:57:application call to [unknown function] (defined at: ./wNT200.rsh:219:57:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transferFrom0_299" (defined at: ./wNT200.rsh:219:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transferFrom'
    });
  const v3155 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3145, ctc1), null);
  const v3156 = stdlib.fromSome(v3155, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3157 = stdlib.ge256(v3156, v3147);
  stdlib.assert(v3157, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:205:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:219:57:application call to [unknown function] (defined at: ./wNT200.rsh:219:57:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transferFrom0_299" (defined at: ./wNT200.rsh:219:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v3159 = [v3145, v3142];
  const v3160 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3159, ctc1), null);
  const v3161 = stdlib.fromSome(v3160, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3162 = stdlib.ge256(v3161, v3147);
  stdlib.assert(v3162, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:219:57:application call to [unknown function] (defined at: ./wNT200.rsh:219:57:function exp)', 'at ./wNT200.rsh:136:31:application call to "runarc200_transferFrom0_299" (defined at: ./wNT200.rsh:219:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v3173 = ['arc200_transferFrom0_299', v3144];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3173],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:219:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v4585 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '0')];
          const v4586 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '1')];
          const v4587 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '2')];
          const v4592 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4585, ctc1), null);
          const v4593 = stdlib.fromSome(v4592, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4596 = [v4585, v3457];
          const v4597 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v4596, ctc1), null);
          const v4598 = stdlib.fromSome(v4597, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4608 = stdlib.safeSub256(v4593, v4587);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4585, ctc1, v4608);
          const v4609 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4586, ctc1), null);
          const v4610 = stdlib.fromSome(v4609, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v4611 = stdlib.safeAdd256(v4610, v4587);
          await stdlib.simMapSet(sim_r, 0, ctc3, v4586, ctc1, v4611);
          null;
          const v4616 = stdlib.safeSub256(v4598, v4587);
          await stdlib.simMapSet(sim_r, 1, ctc14, v4596, ctc1, v4616);
          null;
          const v4619 = true;
          const v4620 = await txn1.getOutput('arc200_transferFrom', 'v4619', ctc11, v4619);
          
          const v17902 = v3066;
          const v17904 = v3070;
          const v17905 = v3066.closed;
          if (v17905) {
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
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v4585 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '0')];
      const v4586 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '1')];
      const v4587 = v4481[stdlib.checkedBigNumberify('./wNT200.rsh:219:12:spread', stdlib.UInt_max, '2')];
      const v4589 = stdlib.addressEq(v4585, v4586);
      const v4590 = v4589 ? false : true;
      stdlib.assert(v4590, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transferFrom'
        });
      const v4592 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4585, ctc1), null);
      const v4593 = stdlib.fromSome(v4592, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4594 = stdlib.ge256(v4593, v4587);
      stdlib.assert(v4594, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:205:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v4596 = [v4585, v3457];
      const v4597 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v4596, ctc1), null);
      const v4598 = stdlib.fromSome(v4597, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4599 = stdlib.ge256(v4598, v4587);
      stdlib.assert(v4599, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:220:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v4608 = stdlib.safeSub256(v4593, v4587);
      await stdlib.mapSet(map0, ctc3, v4585, ctc1, v4608);
      const v4609 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4586, ctc1), null);
      const v4610 = stdlib.fromSome(v4609, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v4611 = stdlib.safeAdd256(v4610, v4587);
      await stdlib.mapSet(map0, ctc3, v4586, ctc1, v4611);
      null;
      const v4616 = stdlib.safeSub256(v4598, v4587);
      await stdlib.mapSet(map1, ctc14, v4596, ctc1, v4616);
      null;
      const v4619 = true;
      const v4620 = await txn1.getOutput('arc200_transferFrom', 'v4619', ctc11, v4619);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v4481, v4620), {
          at: './wNT200.rsh:219:13:application',
          fs: ['at ./wNT200.rsh:219:13:application call to [unknown function] (defined at: ./wNT200.rsh:219:13:function exp)', 'at ./wNT200.rsh:224:14:application call to "k" (defined at: ./wNT200.rsh:222:15:function exp)', 'at ./wNT200.rsh:222:15:application call to [unknown function] (defined at: ./wNT200.rsh:222:15:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v17902 = v3066;
      const v17904 = v3070;
      const v17905 = v3066.closed;
      if (v17905) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createBalanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createBalanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createBalanceBox3 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc13,
    deleteAllowanceBox0_299: ctc16,
    deleteBalanceBox0_299: ctc13,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc13,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3253 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:286:40:application call to [unknown function] (defined at: ./wNT200.rsh:286:40:function exp)', 'at ./wNT200.rsh:136:31:application call to "runcreateBalanceBox0_299" (defined at: ./wNT200.rsh:286:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'createBalanceBox'
    });
  const v3254 = v3253[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3256 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3254, ctc1), null);
  const v3257 = {
    None: 0,
    Some: 1
    }[v3256[0]];
  const v3258 = stdlib.eq(v3257, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3258, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:287:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:286:40:application call to [unknown function] (defined at: ./wNT200.rsh:286:40:function exp)', 'at ./wNT200.rsh:136:31:application call to "runcreateBalanceBox0_299" (defined at: ./wNT200.rsh:286:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Balance box already exists',
    who: 'createBalanceBox'
    });
  const v3265 = ['createBalanceBox0_299', v3253];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3265],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:286:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createBalanceBox"
            });
          ;
          const v5140 = v4991[stdlib.checkedBigNumberify('./wNT200.rsh:286:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v5140, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v5140, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:290:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v5146 = true;
          const v5147 = await txn1.getOutput('createBalanceBox', 'v5146', ctc11, v5146);
          
          const v17977 = v3066;
          const v17979 = v3070;
          const v17980 = v3066.closed;
          if (v17980) {
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
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v5140 = v4991[stdlib.checkedBigNumberify('./wNT200.rsh:286:12:spread', stdlib.UInt_max, '0')];
      const v5141 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v5140, ctc1), null);
      const v5142 = {
        None: 0,
        Some: 1
        }[v5141[0]];
      const v5143 = stdlib.eq(v5142, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5143, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:287:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:289:15:application call to [unknown function] (defined at: ./wNT200.rsh:289:15:function exp)'],
        msg: 'ARC200: Balance box already exists',
        who: 'createBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v5140, ctc1, stdlib.checkedBigNumberify('./wNT200.rsh:290:38:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5146 = true;
      const v5147 = await txn1.getOutput('createBalanceBox', 'v5146', ctc11, v5146);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v4991, v5147), {
          at: './wNT200.rsh:286:13:application',
          fs: ['at ./wNT200.rsh:286:13:application call to [unknown function] (defined at: ./wNT200.rsh:286:13:function exp)', 'at ./wNT200.rsh:291:14:application call to "k" (defined at: ./wNT200.rsh:289:15:function exp)', 'at ./wNT200.rsh:289:15:application call to [unknown function] (defined at: ./wNT200.rsh:289:15:function exp)'],
          msg: 'out',
          who: 'createBalanceBox'
          });
        }
      else {
        }
      
      const v17977 = v3066;
      const v17979 = v3070;
      const v17980 = v3066.closed;
      if (v17980) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc13,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc16,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3292 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:320:52:application call to [unknown function] (defined at: ./wNT200.rsh:320:52:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteAllowanceBox0_299" (defined at: ./wNT200.rsh:320:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v3293 = v3292[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3294 = v3292[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3297 = [v3293, v3294];
  const v3298 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3297, ctc1), null);
  const v3299 = {
    None: 0,
    Some: 1
    }[v3298[0]];
  const v3300 = stdlib.eq(v3299, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3300, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:321:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:320:52:application call to [unknown function] (defined at: ./wNT200.rsh:320:52:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteAllowanceBox0_299" (defined at: ./wNT200.rsh:320:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v3304 = stdlib.fromSome(v3298, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3305 = stdlib.eq256(v3304, stdlib.checkedBigNumberify('./wNT200.rsh:326:48:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3305, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:325:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:320:52:application call to [unknown function] (defined at: ./wNT200.rsh:320:52:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteAllowanceBox0_299" (defined at: ./wNT200.rsh:320:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v3314 = ['deleteAllowanceBox0_299', v3292];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3314],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:320:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v5665 = v5501[stdlib.checkedBigNumberify('./wNT200.rsh:320:12:spread', stdlib.UInt_max, '0')];
          const v5666 = v5501[stdlib.checkedBigNumberify('./wNT200.rsh:320:12:spread', stdlib.UInt_max, '1')];
          const v5667 = [v5665, v5666];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v5667, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc13, v5667, ctc1, undefined /* Nothing */);
          const v5680 = true;
          const v5681 = await txn1.getOutput('deleteAllowanceBox', 'v5680', ctc11, v5680);
          
          const v18052 = v3066;
          const v18054 = v3070;
          const v18055 = v3066.closed;
          if (v18055) {
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
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v5665 = v5501[stdlib.checkedBigNumberify('./wNT200.rsh:320:12:spread', stdlib.UInt_max, '0')];
      const v5666 = v5501[stdlib.checkedBigNumberify('./wNT200.rsh:320:12:spread', stdlib.UInt_max, '1')];
      const v5667 = [v5665, v5666];
      const v5668 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v5667, ctc1), null);
      const v5669 = {
        None: 0,
        Some: 1
        }[v5668[0]];
      const v5670 = stdlib.eq(v5669, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5670, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:321:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:330:15:application call to [unknown function] (defined at: ./wNT200.rsh:330:15:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v5674 = stdlib.fromSome(v5668, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v5675 = stdlib.eq256(v5674, stdlib.checkedBigNumberify('./wNT200.rsh:326:48:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5675, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:325:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:330:15:application call to [unknown function] (defined at: ./wNT200.rsh:330:15:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc13, v5667, ctc1, undefined /* Nothing */);
      const v5680 = true;
      const v5681 = await txn1.getOutput('deleteAllowanceBox', 'v5680', ctc11, v5680);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v5501, v5681), {
          at: './wNT200.rsh:320:13:application',
          fs: ['at ./wNT200.rsh:320:13:application call to [unknown function] (defined at: ./wNT200.rsh:320:13:function exp)', 'at ./wNT200.rsh:332:14:application call to "k" (defined at: ./wNT200.rsh:330:15:function exp)', 'at ./wNT200.rsh:330:15:application call to [unknown function] (defined at: ./wNT200.rsh:330:15:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v18052 = v3066;
      const v18054 = v3070;
      const v18055 = v3066.closed;
      if (v18055) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc13,
    deleteAllowanceBox0_299: ctc16,
    deleteBalanceBox0_299: ctc13,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc13,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3269 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:301:40:application call to [unknown function] (defined at: ./wNT200.rsh:301:40:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteBalanceBox0_299" (defined at: ./wNT200.rsh:301:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v3270 = v3269[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3272 = stdlib.addressEq(v3270, v3046);
  const v3273 = v3272 ? false : true;
  stdlib.assert(v3273, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:302:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:301:40:application call to [unknown function] (defined at: ./wNT200.rsh:301:40:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteBalanceBox0_299" (defined at: ./wNT200.rsh:301:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v3275 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3270, ctc1), null);
  const v3276 = {
    None: 0,
    Some: 1
    }[v3275[0]];
  const v3277 = stdlib.eq(v3276, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3277, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:306:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:301:40:application call to [unknown function] (defined at: ./wNT200.rsh:301:40:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteBalanceBox0_299" (defined at: ./wNT200.rsh:301:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v3280 = stdlib.fromSome(v3275, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3281 = stdlib.eq256(v3280, stdlib.checkedBigNumberify('./wNT200.rsh:307:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3281, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:307:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:301:40:application call to [unknown function] (defined at: ./wNT200.rsh:301:40:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeleteBalanceBox0_299" (defined at: ./wNT200.rsh:301:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v3288 = ['deleteBalanceBox0_299', v3269];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3288],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:301:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v6200 = v6011[stdlib.checkedBigNumberify('./wNT200.rsh:301:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v6200, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v6200, ctc1, undefined /* Nothing */);
          const v6213 = true;
          const v6214 = await txn1.getOutput('deleteBalanceBox', 'v6213', ctc11, v6213);
          
          const v18127 = v3066;
          const v18129 = v3070;
          const v18130 = v3066.closed;
          if (v18130) {
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
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v6200 = v6011[stdlib.checkedBigNumberify('./wNT200.rsh:301:12:spread', stdlib.UInt_max, '0')];
      const v6201 = stdlib.addressEq(v6200, v3046);
      const v6202 = v6201 ? false : true;
      stdlib.assert(v6202, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:302:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v6204 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v6200, ctc1), null);
      const v6205 = {
        None: 0,
        Some: 1
        }[v6204[0]];
      const v6206 = stdlib.eq(v6205, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6206, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:306:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v6209 = stdlib.fromSome(v6204, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6210 = stdlib.eq256(v6209, stdlib.checkedBigNumberify('./wNT200.rsh:307:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v6210, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:307:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v6200, ctc1, undefined /* Nothing */);
      const v6213 = true;
      const v6214 = await txn1.getOutput('deleteBalanceBox', 'v6213', ctc11, v6213);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v6011, v6214), {
          at: './wNT200.rsh:301:13:application',
          fs: ['at ./wNT200.rsh:301:13:application call to [unknown function] (defined at: ./wNT200.rsh:301:13:function exp)', 'at ./wNT200.rsh:311:14:application call to "k" (defined at: ./wNT200.rsh:309:15:function exp)', 'at ./wNT200.rsh:309:15:application call to [unknown function] (defined at: ./wNT200.rsh:309:15:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v18127 = v3066;
      const v18129 = v3070;
      const v18130 = v3066.closed;
      if (v18130) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc17,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc13,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc16,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc13
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3198 = ctc.selfAddress();
  const v3200 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeposit0_299" (defined at: ./wNT200.rsh:249:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v3201 = v3200[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3204 = stdlib.cast("UInt", "UInt256", v3201, false, true);
  const v3206 = stdlib.addressEq(v3053, v3198);
  const v3207 = v3206 ? false : true;
  stdlib.assert(v3207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:182:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:250:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeposit0_299" (defined at: ./wNT200.rsh:249:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'deposit'
    });
  const v3209 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3053, ctc1), null);
  const v3210 = stdlib.fromSome(v3209, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3211 = stdlib.ge256(v3210, v3204);
  stdlib.assert(v3211, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:183:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:250:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundeposit0_299" (defined at: ./wNT200.rsh:249:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'deposit'
    });
  const v3218 = ['deposit0_299', v3200];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3218],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v3201, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v6532 = v6521[stdlib.checkedBigNumberify('./wNT200.rsh:249:12:spread', stdlib.UInt_max, '0')];
          const v6534 = stdlib.cast("UInt", "UInt256", v6532, false, true);
          const v6539 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3053, ctc1), null);
          const v6540 = stdlib.fromSome(v6539, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6569 = stdlib.add(v3070, v6532);
          sim_r.txns.push({
            amt: v6532,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6750 = stdlib.safeSub256(v6540, v6534);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3053, ctc1, v6750);
          const v6751 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3457, ctc1), null);
          const v6752 = stdlib.fromSome(v6751, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v6753 = stdlib.safeAdd256(v6752, v6534);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3457, ctc1, v6753);
          null;
          const v6756 = v6753;
          const v6757 = await txn1.getOutput('deposit', 'v6756', ctc1, v6756);
          
          const v6763 = v3066.closed;
          const v6764 = v3066.decimals;
          const v6765 = v3066.keyInfo;
          const v6766 = v3066.manager;
          const v6767 = v3066.name;
          const v6768 = v3066.registered;
          const v6769 = v3066.symbol;
          const v6770 = v3066.tokenAmount;
          const v6771 = v3066.totalSupply;
          const v6772 = v3066.zeroAddress;
          const v6774 = stdlib.safeAdd(v6770, v6532);
          const v6775 = {
            closed: v6763,
            decimals: v6764,
            keyInfo: v6765,
            manager: v6766,
            name: v6767,
            registered: v6768,
            symbol: v6769,
            tokenAmount: v6774,
            totalSupply: v6771,
            zeroAddress: v6772
            };
          const v18202 = v6775;
          const v18204 = v6569;
          const v18205 = v6775.closed;
          if (v18205) {
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
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      undefined /* setApiDetails */;
      const v6532 = v6521[stdlib.checkedBigNumberify('./wNT200.rsh:249:12:spread', stdlib.UInt_max, '0')];
      const v6534 = stdlib.cast("UInt", "UInt256", v6532, false, true);
      const v6536 = stdlib.addressEq(v3053, v3457);
      const v6537 = v6536 ? false : true;
      stdlib.assert(v6537, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:182:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:250:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'deposit'
        });
      const v6539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3053, ctc1), null);
      const v6540 = stdlib.fromSome(v6539, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6541 = stdlib.ge256(v6540, v6534);
      stdlib.assert(v6541, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:183:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:250:20:application call to "chkTransfer" (defined at: ./wNT200.rsh:181:50:function exp)', 'at ./wNT200.rsh:249:33:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:249:33:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'deposit'
        });
      const v6569 = stdlib.add(v3070, v6532);
      ;
      const v6750 = stdlib.safeSub256(v6540, v6534);
      await stdlib.mapSet(map0, ctc3, v3053, ctc1, v6750);
      const v6751 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3457, ctc1), null);
      const v6752 = stdlib.fromSome(v6751, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6753 = stdlib.safeAdd256(v6752, v6534);
      await stdlib.mapSet(map0, ctc3, v3457, ctc1, v6753);
      null;
      const v6756 = v6753;
      const v6757 = await txn1.getOutput('deposit', 'v6756', ctc1, v6756);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v6521, v6757), {
          at: './wNT200.rsh:249:13:application',
          fs: ['at ./wNT200.rsh:249:13:application call to [unknown function] (defined at: ./wNT200.rsh:249:13:function exp)', 'at ./wNT200.rsh:255:14:application call to "k" (defined at: ./wNT200.rsh:253:15:function exp)', 'at ./wNT200.rsh:253:15:application call to [unknown function] (defined at: ./wNT200.rsh:253:15:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v6763 = v3066.closed;
      const v6764 = v3066.decimals;
      const v6765 = v3066.keyInfo;
      const v6766 = v3066.manager;
      const v6767 = v3066.name;
      const v6768 = v3066.registered;
      const v6769 = v3066.symbol;
      const v6770 = v3066.tokenAmount;
      const v6771 = v3066.totalSupply;
      const v6772 = v3066.zeroAddress;
      const v6774 = stdlib.safeAdd(v6770, v6532);
      const v6775 = {
        closed: v6763,
        decimals: v6764,
        keyInfo: v6765,
        manager: v6766,
        name: v6767,
        registered: v6768,
        symbol: v6769,
        tokenAmount: v6774,
        totalSupply: v6771,
        zeroAddress: v6772
        };
      const v18202 = v6775;
      const v18204 = v6569;
      const v18205 = v6775.closed;
      if (v18205) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deregister3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deregister3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deregister3 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc4]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc17,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc18,
    deregister0_299: ctc13,
    destroy0_299: ctc13,
    grant0_299: ctc16,
    register0_299: ctc19,
    touch0_299: ctc13,
    withdraw0_299: ctc18
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3351 = ctc.selfAddress();
  const v3353 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to "runderegister0_299" (defined at: ./wNT200.rsh:364:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'deregister'
    });
  const v3354 = v3066.manager;
  const v3355 = stdlib.addressEq(v3351, v3354);
  stdlib.assert(v3355, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:365:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to "runderegister0_299" (defined at: ./wNT200.rsh:364:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'deregister'
    });
  const v3357 = v3066.registered;
  stdlib.assert(v3357, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:366:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to "runderegister0_299" (defined at: ./wNT200.rsh:364:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'Must be registered',
    who: 'deregister'
    });
  const v3359 = v3066.keyInfo;
  const v3360 = {
    None: 0,
    Some: 1
    }[v3359[0]];
  const v3361 = stdlib.eq(v3360, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  const v3362 = v3361 ? false : true;
  stdlib.assert(v3362, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:367:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to "runderegister0_299" (defined at: ./wNT200.rsh:364:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'Must have key info',
    who: 'deregister'
    });
  const v3367 = ['deregister0_299', v3353];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3367],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:369:11:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deregister"
            });
          const v7054 = v3066.manager;
          const v7059 = v3066.keyInfo;
          const v7079 = stdlib.add(v3070, stdlib.checkedBigNumberify('./wNT200.rsh:369:11:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./wNT200.rsh:369:11:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          switch (v7059[0]) {
            case 'None': {
              const v7300 = v7059[1];
              const v7301 = false;
              const v7302 = await txn1.getOutput('deregister', 'v7301', ctc11, v7301);
              
              const v18277 = v3066;
              const v18279 = v7079;
              const v18280 = v3066.closed;
              if (v18280) {
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
            case 'Some': {
              const v7310 = v7059[1];
              const v7311 = true;
              const v7312 = await txn1.getOutput('deregister', 'v7311', ctc11, v7311);
              
              null;
              const v7326 = stdlib.sub(v7079, stdlib.checkedBigNumberify('./wNT200.rsh:377:26:decimal', stdlib.UInt_max, '1000'));
              sim_r.txns.push({
                kind: 'from',
                to: v3457,
                tok: undefined /* Nothing */
                });
              const v7327 = v3066.closed;
              const v7328 = v3066.decimals;
              const v7331 = v3066.name;
              const v7333 = v3066.symbol;
              const v7334 = v3066.tokenAmount;
              const v7335 = v3066.totalSupply;
              const v7336 = v3066.zeroAddress;
              const v7338 = {
                closed: v7327,
                decimals: v7328,
                keyInfo: v3064,
                manager: v7054,
                name: v7331,
                registered: false,
                symbol: v7333,
                tokenAmount: v7334,
                totalSupply: v7335,
                zeroAddress: v7336
                };
              const v18282 = v7338;
              const v18284 = v7326;
              const v18285 = v7338.closed;
              if (v18285) {
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
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      undefined /* setApiDetails */;
      const v7054 = v3066.manager;
      const v7055 = stdlib.addressEq(v3457, v7054);
      stdlib.assert(v7055, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:365:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'deregister'
        });
      const v7057 = v3066.registered;
      stdlib.assert(v7057, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:366:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
        msg: 'Must be registered',
        who: 'deregister'
        });
      const v7059 = v3066.keyInfo;
      const v7060 = {
        None: 0,
        Some: 1
        }[v7059[0]];
      const v7061 = stdlib.eq(v7060, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      const v7062 = v7061 ? false : true;
      stdlib.assert(v7062, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:367:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:364:30:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:364:30:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
        msg: 'Must have key info',
        who: 'deregister'
        });
      const v7079 = stdlib.add(v3070, stdlib.checkedBigNumberify('./wNT200.rsh:369:11:decimal', stdlib.UInt_max, '1000'));
      ;
      switch (v7059[0]) {
        case 'None': {
          const v7300 = v7059[1];
          const v7301 = false;
          const v7302 = await txn1.getOutput('deregister', 'v7301', ctc11, v7301);
          if (v2058) {
            stdlib.protect(ctc0, await interact.out(v7031, v7302), {
              at: './wNT200.rsh:364:13:application',
              fs: ['at ./wNT200.rsh:364:13:application call to [unknown function] (defined at: ./wNT200.rsh:364:13:function exp)', 'at ./wNT200.rsh:380:18:application call to "k" (defined at: ./wNT200.rsh:370:15:function exp)', 'at ./wNT200.rsh:370:15:application call to [unknown function] (defined at: ./wNT200.rsh:370:15:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          const v18277 = v3066;
          const v18279 = v7079;
          const v18280 = v3066.closed;
          if (v18280) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v7310 = v7059[1];
          const v7311 = true;
          const v7312 = await txn1.getOutput('deregister', 'v7311', ctc11, v7311);
          if (v2058) {
            stdlib.protect(ctc0, await interact.out(v7031, v7312), {
              at: './wNT200.rsh:364:13:application',
              fs: ['at ./wNT200.rsh:364:13:application call to [unknown function] (defined at: ./wNT200.rsh:364:13:function exp)', 'at ./wNT200.rsh:374:18:application call to "k" (defined at: ./wNT200.rsh:370:15:function exp)', 'at ./wNT200.rsh:370:15:application call to [unknown function] (defined at: ./wNT200.rsh:370:15:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          null;
          const v7326 = stdlib.sub(v7079, stdlib.checkedBigNumberify('./wNT200.rsh:377:26:decimal', stdlib.UInt_max, '1000'));
          ;
          const v7327 = v3066.closed;
          const v7328 = v3066.decimals;
          const v7331 = v3066.name;
          const v7333 = v3066.symbol;
          const v7334 = v3066.tokenAmount;
          const v7335 = v3066.totalSupply;
          const v7336 = v3066.zeroAddress;
          const v7338 = {
            closed: v7327,
            decimals: v7328,
            keyInfo: v3064,
            manager: v7054,
            name: v7331,
            registered: false,
            symbol: v7333,
            tokenAmount: v7334,
            totalSupply: v7335,
            zeroAddress: v7336
            };
          const v18282 = v7338;
          const v18284 = v7326;
          const v18285 = v7338.closed;
          if (v18285) {
            return;
            }
          else {
            return;
            }
          break;
          }
        }
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc4]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc17,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc18,
    deregister0_299: ctc13,
    destroy0_299: ctc13,
    grant0_299: ctc16,
    register0_299: ctc19,
    touch0_299: ctc13,
    withdraw0_299: ctc18
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3399 = ctc.selfAddress();
  const v3401 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:418:27:application call to [unknown function] (defined at: ./wNT200.rsh:418:27:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundestroy0_299" (defined at: ./wNT200.rsh:418:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v3402 = v3066.manager;
  const v3403 = stdlib.addressEq(v3399, v3402);
  stdlib.assert(v3403, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:418:27:application call to [unknown function] (defined at: ./wNT200.rsh:418:27:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundestroy0_299" (defined at: ./wNT200.rsh:418:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'destroy'
    });
  const v3405 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v3406 = {
    None: 0,
    Some: 1
    }[v3405[0]];
  const v3407 = stdlib.eq(v3406, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3407, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:418:27:application call to [unknown function] (defined at: ./wNT200.rsh:418:27:function exp)', 'at ./wNT200.rsh:136:31:application call to "rundestroy0_299" (defined at: ./wNT200.rsh:418:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v3412 = ['destroy0_299', v3401];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3412],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:418:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          const v7853 = v3066.manager;
          await stdlib.simMapSet(sim_r, 0, ctc3, v3046, ctc1, undefined /* Nothing */);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3053, ctc1, undefined /* Nothing */);
          const v7861 = v3066.tokenAmount;
          const v7866 = stdlib.sub(v3070, v7861);
          sim_r.txns.push({
            kind: 'from',
            to: v7853,
            tok: undefined /* Nothing */
            });
          const v7867 = null;
          const v7868 = await txn1.getOutput('destroy', 'v7867', ctc0, v7867);
          
          const v7874 = v3066.decimals;
          const v7875 = v3066.keyInfo;
          const v7877 = v3066.name;
          const v7878 = v3066.registered;
          const v7879 = v3066.symbol;
          const v7881 = v3066.totalSupply;
          const v7882 = v3066.zeroAddress;
          const v7883 = {
            closed: true,
            decimals: v7874,
            keyInfo: v7875,
            manager: v7853,
            name: v7877,
            registered: v7878,
            symbol: v7879,
            tokenAmount: v7861,
            totalSupply: v7881,
            zeroAddress: v7882
            };
          const v18357 = v7883;
          const v18359 = v7866;
          const v18360 = v7883.closed;
          if (v18360) {
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
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v7853 = v3066.manager;
      const v7854 = stdlib.addressEq(v3457, v7853);
      stdlib.assert(v7854, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:419:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:425:15:application call to [unknown function] (defined at: ./wNT200.rsh:425:15:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'destroy'
        });
      const v7856 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v7857 = {
        None: 0,
        Some: 1
        }[v7856[0]];
      const v7858 = stdlib.eq(v7857, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7858, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:420:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:425:15:application call to [unknown function] (defined at: ./wNT200.rsh:425:15:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v3046, ctc1, undefined /* Nothing */);
      await stdlib.mapSet(map0, ctc3, v3053, ctc1, undefined /* Nothing */);
      const v7861 = v3066.tokenAmount;
      const v7866 = stdlib.sub(v3070, v7861);
      ;
      const v7867 = null;
      const v7868 = await txn1.getOutput('destroy', 'v7867', ctc0, v7867);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v7541, v7868), {
          at: './wNT200.rsh:418:13:application',
          fs: ['at ./wNT200.rsh:418:13:application call to [unknown function] (defined at: ./wNT200.rsh:418:13:function exp)', 'at ./wNT200.rsh:429:14:application call to "k" (defined at: ./wNT200.rsh:425:15:function exp)', 'at ./wNT200.rsh:425:15:application call to [unknown function] (defined at: ./wNT200.rsh:425:15:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v7874 = v3066.decimals;
      const v7875 = v3066.keyInfo;
      const v7877 = v3066.name;
      const v7878 = v3066.registered;
      const v7879 = v3066.symbol;
      const v7881 = v3066.totalSupply;
      const v7882 = v3066.zeroAddress;
      const v7883 = {
        closed: true,
        decimals: v7874,
        keyInfo: v7875,
        manager: v7853,
        name: v7877,
        registered: v7878,
        symbol: v7879,
        tokenAmount: v7861,
        totalSupply: v7881,
        zeroAddress: v7882
        };
      const v18357 = v7883;
      const v18359 = v7866;
      const v18360 = v7883.closed;
      if (v18360) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
      return;
      break;
      }
    }
  
  
  };
export async function _grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc4]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc13,
    deleteAllowanceBox0_299: ctc16,
    deleteBalanceBox0_299: ctc13,
    deposit0_299: ctc17,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc13,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc17
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3377 = ctc.selfAddress();
  const v3379 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:402:29:application call to [unknown function] (defined at: ./wNT200.rsh:402:29:function exp)', 'at ./wNT200.rsh:136:31:application call to "rungrant0_299" (defined at: ./wNT200.rsh:402:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v3380 = v3379[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3382 = stdlib.addressEq(v3380, v3046);
  const v3383 = v3382 ? false : true;
  stdlib.assert(v3383, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:403:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:402:29:application call to [unknown function] (defined at: ./wNT200.rsh:402:29:function exp)', 'at ./wNT200.rsh:136:31:application call to "rungrant0_299" (defined at: ./wNT200.rsh:402:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Grant zero address',
    who: 'grant'
    });
  const v3385 = v3066.manager;
  const v3386 = stdlib.addressEq(v3380, v3385);
  const v3387 = v3386 ? false : true;
  stdlib.assert(v3387, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:404:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:402:29:application call to [unknown function] (defined at: ./wNT200.rsh:402:29:function exp)', 'at ./wNT200.rsh:136:31:application call to "rungrant0_299" (defined at: ./wNT200.rsh:402:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Grant to manager',
    who: 'grant'
    });
  const v3390 = stdlib.addressEq(v3377, v3385);
  stdlib.assert(v3390, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:405:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:402:29:application call to [unknown function] (defined at: ./wNT200.rsh:402:29:function exp)', 'at ./wNT200.rsh:136:31:application call to "rungrant0_299" (defined at: ./wNT200.rsh:402:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'grant'
    });
  const v3397 = ['grant0_299', v3379];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3397],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:402:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v8397 = v8051[stdlib.checkedBigNumberify('./wNT200.rsh:402:12:spread', stdlib.UInt_max, '0')];
          const v8409 = null;
          const v8410 = await txn1.getOutput('grant', 'v8409', ctc0, v8409);
          
          const v8416 = v3066.closed;
          const v8417 = v3066.decimals;
          const v8418 = v3066.keyInfo;
          const v8420 = v3066.name;
          const v8421 = v3066.registered;
          const v8422 = v3066.symbol;
          const v8423 = v3066.tokenAmount;
          const v8424 = v3066.totalSupply;
          const v8425 = v3066.zeroAddress;
          const v8426 = {
            closed: v8416,
            decimals: v8417,
            keyInfo: v8418,
            manager: v8397,
            name: v8420,
            registered: v8421,
            symbol: v8422,
            tokenAmount: v8423,
            totalSupply: v8424,
            zeroAddress: v8425
            };
          const v18432 = v8426;
          const v18434 = v3070;
          const v18435 = v8426.closed;
          if (v18435) {
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
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v8397 = v8051[stdlib.checkedBigNumberify('./wNT200.rsh:402:12:spread', stdlib.UInt_max, '0')];
      const v8398 = stdlib.addressEq(v8397, v3046);
      const v8399 = v8398 ? false : true;
      stdlib.assert(v8399, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:403:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
        msg: 'ARC200: Grant zero address',
        who: 'grant'
        });
      const v8401 = v3066.manager;
      const v8402 = stdlib.addressEq(v8397, v8401);
      const v8403 = v8402 ? false : true;
      stdlib.assert(v8403, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:404:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
        msg: 'ARC200: Grant to manager',
        who: 'grant'
        });
      const v8406 = stdlib.addressEq(v3457, v8401);
      stdlib.assert(v8406, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:405:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'grant'
        });
      const v8409 = null;
      const v8410 = await txn1.getOutput('grant', 'v8409', ctc0, v8409);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v8051, v8410), {
          at: './wNT200.rsh:402:13:application',
          fs: ['at ./wNT200.rsh:402:13:application call to [unknown function] (defined at: ./wNT200.rsh:402:13:function exp)', 'at ./wNT200.rsh:408:14:application call to "k" (defined at: ./wNT200.rsh:407:15:function exp)', 'at ./wNT200.rsh:407:15:application call to [unknown function] (defined at: ./wNT200.rsh:407:15:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v8416 = v3066.closed;
      const v8417 = v3066.decimals;
      const v8418 = v3066.keyInfo;
      const v8420 = v3066.name;
      const v8421 = v3066.registered;
      const v8422 = v3066.symbol;
      const v8423 = v3066.tokenAmount;
      const v8424 = v3066.totalSupply;
      const v8425 = v3066.zeroAddress;
      const v8426 = {
        closed: v8416,
        decimals: v8417,
        keyInfo: v8418,
        manager: v8397,
        name: v8420,
        registered: v8421,
        symbol: v8422,
        tokenAmount: v8423,
        totalSupply: v8424,
        zeroAddress: v8425
        };
      const v18432 = v8426;
      const v18434 = v3070;
      const v18435 = v8426.closed;
      if (v18435) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
      return;
      break;
      }
    }
  
  
  };
export async function _register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _register3 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc4]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc17,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc18,
    deregister0_299: ctc19,
    destroy0_299: ctc19,
    grant0_299: ctc16,
    register0_299: ctc13,
    touch0_299: ctc19,
    withdraw0_299: ctc18
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3316 = ctc.selfAddress();
  const v3318 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:337:76:application call to [unknown function] (defined at: ./wNT200.rsh:337:76:function exp)', 'at ./wNT200.rsh:136:31:application call to "runregister0_299" (defined at: ./wNT200.rsh:337:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v3331 = v3066.manager;
  const v3332 = stdlib.addressEq(v3316, v3331);
  stdlib.assert(v3332, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:338:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:337:76:application call to [unknown function] (defined at: ./wNT200.rsh:337:76:function exp)', 'at ./wNT200.rsh:136:31:application call to "runregister0_299" (defined at: ./wNT200.rsh:337:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'register'
    });
  const v3349 = ['register0_299', v3318];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3349],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:340:11:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v8603 = v3066.manager;
          const v8609 = stdlib.add(v3070, stdlib.checkedBigNumberify('./wNT200.rsh:340:11:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./wNT200.rsh:340:11:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v8940 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '0')];
          const v8941 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '1')];
          const v8942 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '2')];
          const v8943 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '3')];
          const v8944 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '4')];
          const v8945 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '5')];
          const v8955 = true;
          const v8956 = await txn1.getOutput('register', 'v8955', ctc11, v8955);
          
          const v8967 = {
            selkey: v8941,
            spkey: v8942,
            votefst: v8943,
            votekd: v8945,
            votekey: v8940,
            votelst: v8944
            };
          null;
          null;
          null;
          null;
          null;
          null;
          null;
          const v8971 = stdlib.sub(v8609, stdlib.checkedBigNumberify('./wNT200.rsh:359:22:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            kind: 'from',
            to: v3457,
            tok: undefined /* Nothing */
            });
          const v8972 = v3066.closed;
          const v8973 = v3066.decimals;
          const v8976 = v3066.name;
          const v8978 = v3066.symbol;
          const v8979 = v3066.tokenAmount;
          const v8980 = v3066.totalSupply;
          const v8981 = v3066.zeroAddress;
          const v8983 = ['Some', v8967];
          const v8984 = {
            closed: v8972,
            decimals: v8973,
            keyInfo: v8983,
            manager: v8603,
            name: v8976,
            registered: true,
            symbol: v8978,
            tokenAmount: v8979,
            totalSupply: v8980,
            zeroAddress: v8981
            };
          const v18507 = v8984;
          const v18509 = v8971;
          const v18510 = v8984.closed;
          if (v18510) {
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
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      undefined /* setApiDetails */;
      const v8603 = v3066.manager;
      const v8604 = stdlib.addressEq(v3457, v8603);
      stdlib.assert(v8604, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:338:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:337:76:application call to [unknown function] (defined at: ./wNT200.rsh:337:76:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:337:76:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'register'
        });
      const v8609 = stdlib.add(v3070, stdlib.checkedBigNumberify('./wNT200.rsh:340:11:decimal', stdlib.UInt_max, '1000'));
      ;
      const v8940 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '0')];
      const v8941 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '1')];
      const v8942 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '2')];
      const v8943 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '3')];
      const v8944 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '4')];
      const v8945 = v8561[stdlib.checkedBigNumberify('./wNT200.rsh:337:12:spread', stdlib.UInt_max, '5')];
      const v8955 = true;
      const v8956 = await txn1.getOutput('register', 'v8955', ctc11, v8955);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v8561, v8956), {
          at: './wNT200.rsh:337:13:application',
          fs: ['at ./wNT200.rsh:337:13:application call to [unknown function] (defined at: ./wNT200.rsh:337:13:function exp)', 'at ./wNT200.rsh:342:14:application call to "k" (defined at: ./wNT200.rsh:341:15:function exp)', 'at ./wNT200.rsh:341:15:application call to [unknown function] (defined at: ./wNT200.rsh:341:15:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v8967 = {
        selkey: v8941,
        spkey: v8942,
        votefst: v8943,
        votekd: v8945,
        votekey: v8940,
        votelst: v8944
        };
      null;
      null;
      null;
      null;
      null;
      null;
      null;
      const v8971 = stdlib.sub(v8609, stdlib.checkedBigNumberify('./wNT200.rsh:359:22:decimal', stdlib.UInt_max, '1000'));
      ;
      const v8972 = v3066.closed;
      const v8973 = v3066.decimals;
      const v8976 = v3066.name;
      const v8978 = v3066.symbol;
      const v8979 = v3066.tokenAmount;
      const v8980 = v3066.totalSupply;
      const v8981 = v3066.zeroAddress;
      const v8983 = ['Some', v8967];
      const v8984 = {
        closed: v8972,
        decimals: v8973,
        keyInfo: v8983,
        manager: v8603,
        name: v8976,
        registered: true,
        symbol: v8978,
        tokenAmount: v8979,
        totalSupply: v8980,
        zeroAddress: v8981
        };
      const v18507 = v8984;
      const v18509 = v8971;
      const v18510 = v8984.closed;
      if (v18510) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc4]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc14,
    arc200_transfer0_299: ctc14,
    arc200_transferFrom0_299: ctc15,
    createBalanceBox0_299: ctc16,
    deleteAllowanceBox0_299: ctc17,
    deleteBalanceBox0_299: ctc16,
    deposit0_299: ctc18,
    deregister0_299: ctc13,
    destroy0_299: ctc13,
    grant0_299: ctc16,
    register0_299: ctc19,
    touch0_299: ctc13,
    withdraw0_299: ctc18
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3371 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:389:25:application call to [unknown function] (defined at: ./wNT200.rsh:389:25:function exp)', 'at ./wNT200.rsh:136:31:application call to "runtouch0_299" (defined at: ./wNT200.rsh:389:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v3375 = ['touch0_299', v3371];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3375],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:389:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v9501 = (stdlib.le(await ctc.getBalance(), v3070) ? stdlib.checkedBigNumberify('./wNT200.rsh:392:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3070));
          const v9502 = stdlib.safeAdd(v9501, v3070);
          const v9503 = v3066.manager;
          const v9507 = stdlib.sub(v9502, v9501);
          sim_r.txns.push({
            kind: 'from',
            to: v9503,
            tok: undefined /* Nothing */
            });
          const v9508 = await txn1.getOutput('touch', 'v9501', ctc4, v9501);
          
          const v18582 = v3066;
          const v18584 = v9507;
          const v18585 = v3066.closed;
          if (v18585) {
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
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v9501 = (stdlib.le(await ctc.getBalance(), v3070) ? stdlib.checkedBigNumberify('./wNT200.rsh:392:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v3070));
      const v9502 = stdlib.safeAdd(v9501, v3070);
      const v9503 = v3066.manager;
      const v9507 = stdlib.sub(v9502, v9501);
      ;
      const v9508 = await txn1.getOutput('touch', 'v9501', ctc4, v9501);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v9071, v9508), {
          at: './wNT200.rsh:389:13:application',
          fs: ['at ./wNT200.rsh:389:13:application call to [unknown function] (defined at: ./wNT200.rsh:389:13:function exp)', 'at ./wNT200.rsh:394:14:application call to "k" (defined at: ./wNT200.rsh:391:15:function exp)', 'at ./wNT200.rsh:391:15:application call to [unknown function] (defined at: ./wNT200.rsh:391:15:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v18582 = v3066;
      const v18584 = v9507;
      const v18585 = v3066.closed;
      if (v18585) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
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
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    closed: ctc11,
    decimals: ctc4,
    keyInfo: ctc10,
    manager: ctc3,
    name: ctc5,
    registered: ctc11,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc20 = stdlib.T_Data({
    arc200_approve0_299: ctc15,
    arc200_transfer0_299: ctc15,
    arc200_transferFrom0_299: ctc16,
    createBalanceBox0_299: ctc17,
    deleteAllowanceBox0_299: ctc14,
    deleteBalanceBox0_299: ctc17,
    deposit0_299: ctc13,
    deregister0_299: ctc18,
    destroy0_299: ctc18,
    grant0_299: ctc17,
    register0_299: ctc19,
    touch0_299: ctc18,
    withdraw0_299: ctc13
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
  
  
  const [v3046, v3047, v3050, v3053, v3064, v3066, v3070] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4]);
  const v3220 = ctc.selfAddress();
  const v3222 = stdlib.protect(ctc13, await interact.in(), {
    at: './wNT200.rsh:1:23:application',
    fs: ['at ./wNT200.rsh:267:34:application call to [unknown function] (defined at: ./wNT200.rsh:267:34:function exp)', 'at ./wNT200.rsh:136:31:application call to "runwithdraw0_299" (defined at: ./wNT200.rsh:267:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v3223 = v3222[stdlib.checkedBigNumberify('./wNT200.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3225 = v3066.tokenAmount;
  const v3226 = stdlib.le(v3223, v3225);
  stdlib.assert(v3226, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:267:34:application call to [unknown function] (defined at: ./wNT200.rsh:267:34:function exp)', 'at ./wNT200.rsh:136:31:application call to "runwithdraw0_299" (defined at: ./wNT200.rsh:267:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Withdraw amount too large',
    who: 'withdraw'
    });
  const v3230 = stdlib.cast("UInt", "UInt256", v3223, false, true);
  const v3232 = stdlib.addressEq(v3220, v3053);
  const v3233 = v3232 ? false : true;
  stdlib.assert(v3233, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:267:34:application call to [unknown function] (defined at: ./wNT200.rsh:267:34:function exp)', 'at ./wNT200.rsh:136:31:application call to "runwithdraw0_299" (defined at: ./wNT200.rsh:267:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'withdraw'
    });
  const v3235 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3220, ctc1), null);
  const v3236 = stdlib.fromSome(v3235, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3237 = stdlib.ge256(v3236, v3230);
  stdlib.assert(v3237, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:205:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:267:34:application call to [unknown function] (defined at: ./wNT200.rsh:267:34:function exp)', 'at ./wNT200.rsh:136:31:application call to "runwithdraw0_299" (defined at: ./wNT200.rsh:267:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'withdraw'
    });
  const v3239 = [v3220, v3053];
  const v3240 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3239, ctc1), null);
  const v3241 = stdlib.fromSome(v3240, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v3242 = stdlib.ge256(v3241, v3230);
  stdlib.assert(v3242, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./wNT200.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:267:34:application call to [unknown function] (defined at: ./wNT200.rsh:267:34:function exp)', 'at ./wNT200.rsh:136:31:application call to "runwithdraw0_299" (defined at: ./wNT200.rsh:267:12:function exp)', 'at ./wNT200.rsh:136:31:application call to [unknown function] (defined at: ./wNT200.rsh:136:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'withdraw'
    });
  const v3249 = ['withdraw0_299', v3222];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3046, v3047, v3050, v3053, v3064, v3066, v3070, v3249],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./wNT200.rsh:267:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
      
      switch (v3458[0]) {
        case 'arc200_approve0_299': {
          const v3461 = v3458[1];
          
          break;
          }
        case 'arc200_transfer0_299': {
          const v3971 = v3458[1];
          
          break;
          }
        case 'arc200_transferFrom0_299': {
          const v4481 = v3458[1];
          
          break;
          }
        case 'createBalanceBox0_299': {
          const v4991 = v3458[1];
          
          break;
          }
        case 'deleteAllowanceBox0_299': {
          const v5501 = v3458[1];
          
          break;
          }
        case 'deleteBalanceBox0_299': {
          const v6011 = v3458[1];
          
          break;
          }
        case 'deposit0_299': {
          const v6521 = v3458[1];
          
          break;
          }
        case 'deregister0_299': {
          const v7031 = v3458[1];
          
          break;
          }
        case 'destroy0_299': {
          const v7541 = v3458[1];
          
          break;
          }
        case 'grant0_299': {
          const v8051 = v3458[1];
          
          break;
          }
        case 'register0_299': {
          const v8561 = v3458[1];
          
          break;
          }
        case 'touch0_299': {
          const v9071 = v3458[1];
          
          break;
          }
        case 'withdraw0_299': {
          const v9581 = v3458[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          const v10025 = v9581[stdlib.checkedBigNumberify('./wNT200.rsh:267:12:spread', stdlib.UInt_max, '0')];
          const v10026 = v3066.tokenAmount;
          const v10031 = stdlib.cast("UInt", "UInt256", v10025, false, true);
          const v10036 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3457, ctc1), null);
          const v10037 = stdlib.fromSome(v10036, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v10040 = [v3457, v3053];
          const v10041 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v10040, ctc1), null);
          const v10042 = stdlib.fromSome(v10041, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v10053 = stdlib.safeSub256(v10037, v10031);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3457, ctc1, v10053);
          const v10054 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3053, ctc1), null);
          const v10055 = stdlib.fromSome(v10054, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v10056 = stdlib.safeAdd256(v10055, v10031);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3053, ctc1, v10056);
          null;
          const v10061 = stdlib.safeSub256(v10042, v10031);
          await stdlib.simMapSet(sim_r, 1, ctc14, v10040, ctc1, v10061);
          null;
          const v10067 = stdlib.sub(v3070, v10025);
          sim_r.txns.push({
            kind: 'from',
            to: v3457,
            tok: undefined /* Nothing */
            });
          const v10068 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3457, ctc1), null);
          const v10069 = stdlib.fromSome(v10068, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v10070 = await txn1.getOutput('withdraw', 'v10069', ctc1, v10069);
          
          const v10076 = v3066.closed;
          const v10077 = v3066.decimals;
          const v10078 = v3066.keyInfo;
          const v10079 = v3066.manager;
          const v10080 = v3066.name;
          const v10081 = v3066.registered;
          const v10082 = v3066.symbol;
          const v10084 = v3066.totalSupply;
          const v10085 = v3066.zeroAddress;
          const v10087 = stdlib.safeSub(v10026, v10025);
          const v10088 = {
            closed: v10076,
            decimals: v10077,
            keyInfo: v10078,
            manager: v10079,
            name: v10080,
            registered: v10081,
            symbol: v10082,
            tokenAmount: v10087,
            totalSupply: v10084,
            zeroAddress: v10085
            };
          const v18657 = v10088;
          const v18659 = v10067;
          const v18660 = v10088.closed;
          if (v18660) {
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
    tys: [ctc3, ctc7, ctc4, ctc3, ctc10, ctc12, ctc4, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3458], secs: v3460, time: v3459, didSend: v2058, from: v3457 } = txn1;
  switch (v3458[0]) {
    case 'arc200_approve0_299': {
      const v3461 = v3458[1];
      return;
      break;
      }
    case 'arc200_transfer0_299': {
      const v3971 = v3458[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_299': {
      const v4481 = v3458[1];
      return;
      break;
      }
    case 'createBalanceBox0_299': {
      const v4991 = v3458[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_299': {
      const v5501 = v3458[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_299': {
      const v6011 = v3458[1];
      return;
      break;
      }
    case 'deposit0_299': {
      const v6521 = v3458[1];
      return;
      break;
      }
    case 'deregister0_299': {
      const v7031 = v3458[1];
      return;
      break;
      }
    case 'destroy0_299': {
      const v7541 = v3458[1];
      return;
      break;
      }
    case 'grant0_299': {
      const v8051 = v3458[1];
      return;
      break;
      }
    case 'register0_299': {
      const v8561 = v3458[1];
      return;
      break;
      }
    case 'touch0_299': {
      const v9071 = v3458[1];
      return;
      break;
      }
    case 'withdraw0_299': {
      const v9581 = v3458[1];
      undefined /* setApiDetails */;
      ;
      const v10025 = v9581[stdlib.checkedBigNumberify('./wNT200.rsh:267:12:spread', stdlib.UInt_max, '0')];
      const v10026 = v3066.tokenAmount;
      const v10027 = stdlib.le(v10025, v10026);
      stdlib.assert(v10027, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
        msg: 'ARC200: Withdraw amount too large',
        who: 'withdraw'
        });
      const v10031 = stdlib.cast("UInt", "UInt256", v10025, false, true);
      const v10033 = stdlib.addressEq(v3457, v3053);
      const v10034 = v10033 ? false : true;
      stdlib.assert(v10034, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'withdraw'
        });
      const v10036 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3457, ctc1), null);
      const v10037 = stdlib.fromSome(v10036, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v10038 = stdlib.ge256(v10037, v10031);
      stdlib.assert(v10038, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:205:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'withdraw'
        });
      const v10040 = [v3457, v3053];
      const v10041 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v10040, ctc1), null);
      const v10042 = stdlib.fromSome(v10041, stdlib.checkedBigNumberify('./wNT200.rsh:145:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v10043 = stdlib.ge256(v10042, v10031);
      stdlib.assert(v10043, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./wNT200.rsh:209:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./wNT200.rsh:269:24:application call to "chkTransferFrom" (defined at: ./wNT200.rsh:203:64:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'withdraw'
        });
      const v10053 = stdlib.safeSub256(v10037, v10031);
      await stdlib.mapSet(map0, ctc3, v3457, ctc1, v10053);
      const v10054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3053, ctc1), null);
      const v10055 = stdlib.fromSome(v10054, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v10056 = stdlib.safeAdd256(v10055, v10031);
      await stdlib.mapSet(map0, ctc3, v3053, ctc1, v10056);
      null;
      const v10061 = stdlib.safeSub256(v10042, v10031);
      await stdlib.mapSet(map1, ctc14, v10040, ctc1, v10061);
      null;
      const v10067 = stdlib.sub(v3070, v10025);
      ;
      const v10068 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3457, ctc1), null);
      const v10069 = stdlib.fromSome(v10068, stdlib.checkedBigNumberify('./wNT200.rsh:140:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v10070 = await txn1.getOutput('withdraw', 'v10069', ctc1, v10069);
      if (v2058) {
        stdlib.protect(ctc0, await interact.out(v9581, v10070), {
          at: './wNT200.rsh:267:13:application',
          fs: ['at ./wNT200.rsh:267:13:application call to [unknown function] (defined at: ./wNT200.rsh:267:13:function exp)', 'at ./wNT200.rsh:274:14:application call to "k" (defined at: ./wNT200.rsh:271:15:function exp)', 'at ./wNT200.rsh:271:15:application call to [unknown function] (defined at: ./wNT200.rsh:271:15:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v10076 = v3066.closed;
      const v10077 = v3066.decimals;
      const v10078 = v3066.keyInfo;
      const v10079 = v3066.manager;
      const v10080 = v3066.name;
      const v10081 = v3066.registered;
      const v10082 = v3066.symbol;
      const v10084 = v3066.totalSupply;
      const v10085 = v3066.zeroAddress;
      const v10087 = stdlib.safeSub(v10026, v10025);
      const v10088 = {
        closed: v10076,
        decimals: v10077,
        keyInfo: v10078,
        manager: v10079,
        name: v10080,
        registered: v10081,
        symbol: v10082,
        tokenAmount: v10087,
        totalSupply: v10084,
        zeroAddress: v10085
        };
      const v18657 = v10088;
      const v18659 = v10067;
      const v18660 = v10088.closed;
      if (v18660) {
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
export async function createBalanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createBalanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createBalanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _createBalanceBox3(ctcTop, interact);}
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
export async function deregister(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deregister expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deregister expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deregister3(ctcTop, interact);}
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
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
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
    impure: [`_reachp_0((uint64,address,(uint64,byte[32],byte[8])))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `createBalanceBox(address)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `deposit(uint64)uint256`, `deregister()byte`, `destroy()void`, `grant(address)void`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`, `touch()uint64`, `withdraw(uint64)uint256`],
    pure: [`arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `circulatingSupply()uint256`, `hasAllowance(address,address)byte`, `hasBalance(address)byte`, `manager()address`, `state()(byte[32],byte[8],uint64,uint256,address,address,uint64,byte,(byte,byte[152]),byte)`],
    sigs: [`_reachp_0((uint64,address,(uint64,byte[32],byte[8])))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `circulatingSupply()uint256`, `createBalanceBox(address)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `deposit(uint64)uint256`, `deregister()byte`, `destroy()void`, `grant(address)void`, `hasAllowance(address,address)byte`, `hasBalance(address)byte`, `manager()address`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`, `state()(byte[32],byte[8],uint64,uint256,address,address,uint64,byte,(byte,byte[152]),byte)`, `touch()uint64`, `withdraw(uint64)uint256`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAQAAHU3gEDCOgHIJMCxNsBGOsBkAFYeFACJgoBAAAIAAAAAAAAAAEBAQR5g8NcIP//////////////////////////////////////////AQIBAwEEBBlp+GUxGEENXClkSSJbNQEhBFs1AihkK2RQJwZkUCcHZFAnCGRQghoEAiMmfAQJZQFuBLVCISUEPCpXoQSE7BPVBGV9E+wEZdjoCQRnQ0AxBGjPmM4EefWwjQSC3Ry6BILlc8QEj5UbWQSchqGFBJzWhVgEo1nkdQS2rholBLuzGfMEyzpMkQRKlo+PBNdhAVIE3ZTKygTorFe4BOyZYEEE2nAluQT7brVzNhoAjhoNUA7tDPAMdw0FDQgNWQ7GDwwNXw0wDP0NOw1cDUgNMw0LDOMNZw0RDskMZQ10DQ4NIw7wADQLVwAgNQ00C1cgIDUMMQA0FRNENA00FRNEIQgqMQA0DVBQATQMiA7/JwkxAFA0DVA0DFCwIzULgAgAAAAAAAANxDQLFlEHCFCwNAuBB5AWUQcINQQyBjUPNBBXAAEXQQ3rMRmBBRJEiA89IjIKMgmID0c0A0AACoAEFR98dTQEULAjQzQLVwAgNQ00C1cgIDUMMQA0DRNEMgMpMgMoMQBQiA5wiA54STUWNAynRCM1C4AIAAAAAAAAD9g0CxZRBwhQsDQLgQeQFlEHCDUEJCgxAFA0FjQMoYgOiogOSiQoNA1QMgMpMgMoNA1QiA4liA4tNAygiA5tiA4tJwQxAFA0DVA0DFCwMgY1D0L/SzQLVwAgNRY0C1cgIDUNNAtXQCA1DDQWNA0TRDIDKTIDKDQWUIgN34gN50k1GDQMp0Q0FjEAUDUXMgMpMgMqNBdQAYgNwYgNyUk1CzQMp0QkKDQWUDQYNAyhiA37iA27JCg0DVAyAykyAyg0DVCIDZaIDZ40DKCIDd6IDZ4nBDQWUDQNUDQMULA0CzQMoYgNxzUNIQgqNBdQATQNiA18Jwk0FlAxAFA0DVCwIzULgAgAAAAAAAASCzQLFlEHCFCwNAuBB5AWUQcINQQyBjUPQv56NA1XASA1CykyAyg0C1CIDSQiVSISRCQoNAtQMgOIDSkjNQuACAAAAAAAABQaNAsWUQcIULA0C4EHkBZRBwg1BDIGNQ9C/jM0C1cAIDQLVyAgUDUMKTIDKjQMUAGIDNZJNQsiVSMSRDIDNAuIDNIyA6hEIQgqNAxQAYgNNCM1C4AIAAAAAAAAFjA0CxZRBwhQsDQLgQeQFlEHCDUEMgY1D0L91zQNVwEgSTULNBUTRCkyAyg0C1CIDHxJNQwiVSMSRDIDNAyIDHgyA6hEJCg0C1CIDNwjNQuACAAAAAAAABhFNAsWUQcIULA0C4EHkBZRBwg1BDIGNQ9C/X80DSNbNQshCa80CxZQNQw0EjEAE0QyAykyAyg0ElCIDBmIDCFJNQ00DKdENAuIDGkkKDQSUDQNNAyhiAxOiAwOMgMpMgMoMQBQiAvuiAv2NAygiAw2NQ0kKDEAUDQNiAvtJwQ0ElAxAFA0DFCwNA01DIAIAAAAAAAAGmQ0DFCwNAw1BDQQVwABNBBXAQhQNBBXCZlQNBBXoiBQNBBXwiBQNBBX4gFQNBBX4whQNBAhCls0CwgWUDQQV/MgUDQQIQchBlhQMgY0DjQLCDUONQ81EEL8qzQQV6IgNRYxADQWEkQ0EFfiARdENBBXCZlJNQsiVUQ0DiEFCDUNIQWIC5qICpI0CyJVjQIJwQnsQvwWNBBXoiA1DTEANA0SRIAhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIlUjEkQkKDQVUIgLaSQoNBJQiAthNBAhCltJNQw0DYgLNCk1C4AIAAAAAAAAHrs0C1CwNAs1BCs0EFcBCFA0EFcJmVA0DVA0EFfCIFA0EFfiAVA0EFfjCFA0DBZQNBBX8yBQNBAhByEGWFAyBjQONAwJNQ41DzUQQvvFNA1XASBJNQs0FRNENBBXoiA1DDQLNAwTRDEANAwSRCk1DIAIAAAAAAAAINk0DFCwNAw1BDQQVwABNBBXAQhQNBBXCZlQNAtQNBBXwiBQNBBX4gFQNBBX4whQNBBX6whQNBBX8yBQNBAhByEGWFAyBjUPNRBC+040EFeiIDUaMQA0GhJEIQWIClY0C1cAIDUZNAtXICA1GDQLV0BANRc0C4GAAVs1FjQLgYgBWzUNNAshC1s1DCM1C4AIAAAAAAAAIvs0CxZRBwhQsDQLgQeQFlEHCDUENBk0GFA0F1A0FhZQNA0WUDQMFlA1C4AENXZsETQLULCABMU9sC40GVCwgASFHshhNBhQsIAEJ8cM7jQXULCABHBzUdA0FhZQsIAEwsceCDQNFlCwgAQpdSfsNAwWULAhBTEAiAmgiAimNBBXAAE0EFcBCFArNAtQUDQaUDQQV8IgUCtQNBBX4whQNBBX6whQNBBX8yBQNBAhByEGWFAyBjQOIQUIIQUJNQ41DzUQQvo/MgpgMgp4CTQOCUk1CzQQV6IgiAlAgAgAAAAAAAAlHTQLFlCwNAsWNQQyBjQLNA4INAsJNQ41D0L6BTQNI1s1CzQQIQpbNQ00CzQNDkQhCa80CxZQNRgxADQSE0QyAykyAygxAFCICJKICJpJNQw0GKdEMQA0ElA1FzIDKTIDKjQXUAGICHSICHxJNRY0GKdEJCgxAFA0DDQYoYgIrogIbiQoNBJQMgMpMgMoNBJQiAhJiAhRNBigiAiRiAhRJwQxAFA0ElA0GFCwNBY0GKGICHo1DCEIKjQXUAE0DIgILycJMQBQNBJQNAxQsDQLMQCICGMyAykyAygxAFCIB/yICAQ1DIAIAAAAAAAAJ1U0DFCwNAw1BDQQVwABNBBXAQhQNBBXCZlQNBBXoiBQNBBXwiBQNBBX4gFQNBBX4whQNA00CwkWUDQQV/MgUDQQIQchBlhQMgY0DjQLCTUONQ81EEL43DQBJRJEiAexMgMpMgMqNAw0C1BQAYgHf4gHhzUEMRkiEkRC+NYhBK8oNAw0C1BQIQyvUFA1CyU0ARJEiAd7NAsiWzUMNAtXCJk1DYAEd8o/pDQMFlA0DVCwNAyIB8M0DSJVjQ0GrAa2BsAFgAWDBY0FkAWTBZYFmQWcBaYFqUL4ATQBJRJEiAcwMgMpMgMoNAtQiAcCiAcKNQRC/4A0ASUSRIgHFDQTFlcHADUEQv9tNAElEkSIBwE0FFcIIDUEQv9bNAElEkSIBu80FFcoCDUEQv9JNAElEkSIBt0nBTUEQv86IQSvKzQMNAtQUCEMr1BQNQtC/z8hBK8nBjQNNAxQNAtQUIE4r1BQNQtC/yc0ASUSRIgGoiEJrzQQV+sIUDUEQv74IQSvJwc0C1AhDa9QUDULQv7/IQSvJwg0DDQLUFAhDK9QUDULQv7qIQSvgAEFNAtQIQ2vUFA1C0L+1yEEr4ABBjQLFlAhC69QUDULQv7DgKEBAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+GoChAQAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/XEhBK+AAQk0C1AhDa9QUDULQv1eNAElEkSIBNkpMgMqNAw0C1BQAYgEqSJVIxIWUQcINQRC/SI0ASUSRIgEtikyAyg0C1CIBIoiVSMSFlEHCDUEQv0DNAElEkSIBJc0EFeiIDUEQvzxIQSvgAEKNBA0D1A0DlA0DRZQNAwWUDQLFlBQUDULQvzpNAElEkSIBGQ0EFfCIDQQV+MIUDQQVwEIUDQQV/MgUDQQIQchBlhQNBBXoiBQNBBX6whQNBBX4gFQNBBXCZlQNBBXAAFQNQRC/IaAoQEAAAAAAAAAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQvv2IQSvgAEMNAsWUCELr1BQNQtC++I0CyJbNQw0C1cIIDUVNAtXKDA1FIAESSmKSDQMFlA0FVA0FFCwNAyIA6M0FCJbSTUTgYACDkQyCjUSJCg0ElAnBYgDEyQoNBVQMgOIAwknBTULJwQ0FVA0ElA0C1CwgZkBrzURKDQTFlA0EVAxAFA0FFcIIFAoUDQUVygIUCEEr1AnBVA0FVAyBiI1DjUPNRBC8/WIAzOBoI0GiANGNhoBNQtC/1uIAyE2GgE1C0L7MiIxNBJEgQYxNRJEIjE2EkQiMTcSRIgDAYHMBK8iIjUCNQEoSwFXAH9nK0sBV39/ZycGSwFX/n9nJwdLAYH9AoF/WGcnCEyB/AMhDlhnKTQBFjQCFlBnMRkiEkSIAslC85E2GgE2GgI1CzUMQvqONhoBNhoCNQs1DEL6pjYaATULQvr6QvsTQvsjQvsyQvtBNhoBNhoCNhoDNQs1DDUNQvtSNhoBNhoCNQs1DEL7MUL7WjYaATULQvtoNhoBNhoCNQs1DEL7bTYaATULQvt6NhoBFzULQvuEQvuVQvw7NhoBNQtC/Nw2GgE2GgI1CzUMQvziNhoBNQtC/P1C9GE0DVcBQDULQvSeQvT3QvVMQvYdQvZVQvb9NA1XAZg1C0L3akL4dkL4rSI1C4AIAAAAAAAAHIU0CxZRBwhQsDQLgQeQFlEHCDUEMgY0DTUONQ9C8oc0C1cBmDUMIzULgAgAAAAAAAAcjzQLFlEHCFCwNAuBB5AWUQcINQSABNbWYEw0DFCwIQUxAIgBZTQQVwABNBBXAQhQNBFQNBZQNBBXwiBQKFA0EFfjCFA0EFfrCFA0EFfzIFA0ECEHIQZYUDIGNA0hBQk1DjUPNRBC8gw0FTQUUDQTFlA0ElA0EVA0EFA0DhZQJTIGQv42SEy/SImxIQ+yECKyAbOJsSEPshA0GLILNBmyCjQXsj80FrIMNA2yDTQMsg4hBbIBs4kisgEjshCyB7IIs4k0DVcBQDULQvFPNA1XAUA1C0LxyTQNVwFgNQtC8klC+882GgE2GgI2GgM2GgQXNhoFFzYaBhc1CzUMNQ01DjUPNRBC+71C+9tC/CJIiUwJSTUGMgmIAHGJCUlB/+5JNQaIAGmJNhoBFzULQvypvkkWUQcIRQRNUIlJVwEATCJVTYlMSb1A/ztLA4gAgUL/M0lXACA1FUlXIDA1FEkhDls1E0lXWCA1EklXeJk1EUmBkQKBswJYNRCBxARbNQ6JSRUhBkwJr0xQibFC/ygxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIDkSJvCJOAk00Bwg1B4kjNQOJSSISTDQCEhFEiTQGNAdKD0H/Q0L/SzQGCDUGibGyCUL+2w==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `10`,
    1000: `484`,
    1001: `484`,
    1002: `484`,
    1003: `484`,
    1004: `485`,
    1005: `485`,
    1006: `486`,
    1007: `487`,
    1008: `487`,
    1009: `487`,
    101: `11`,
    1010: `488`,
    1011: `489`,
    1012: `490`,
    1013: `490`,
    1014: `491`,
    1015: `492`,
    1016: `492`,
    1017: `492`,
    1018: `493`,
    1019: `493`,
    102: `11`,
    1020: `494`,
    1021: `494`,
    1022: `495`,
    1023: `495`,
    1024: `496`,
    1025: `496`,
    1026: `496`,
    1027: `498`,
    1028: `498`,
    1029: `499`,
    103: `12`,
    1030: `500`,
    1031: `501`,
    1032: `501`,
    1033: `502`,
    1034: `502`,
    1035: `503`,
    1036: `504`,
    1037: `504`,
    1038: `505`,
    1039: `506`,
    104: `12`,
    1040: `507`,
    1041: `507`,
    1042: `508`,
    1043: `508`,
    1044: `509`,
    1045: `509`,
    1046: `510`,
    1047: `511`,
    1048: `519`,
    1049: `519`,
    105: `13`,
    1050: `521`,
    1051: `522`,
    1052: `522`,
    1053: `523`,
    1054: `524`,
    1055: `524`,
    1056: `525`,
    1057: `526`,
    1058: `526`,
    1059: `526`,
    106: `14`,
    1060: `527`,
    1061: `527`,
    1062: `527`,
    1063: `528`,
    1064: `529`,
    1065: `529`,
    1066: `530`,
    1067: `530`,
    1068: `531`,
    1069: `532`,
    107: `14`,
    1070: `540`,
    1071: `540`,
    1072: `541`,
    1073: `541`,
    1074: `541`,
    1075: `544`,
    1076: `545`,
    1077: `546`,
    1078: `546`,
    1079: `547`,
    108: `15`,
    1080: `548`,
    1081: `548`,
    1082: `549`,
    1083: `549`,
    1084: `550`,
    1085: `551`,
    1086: `551`,
    1087: `551`,
    1088: `552`,
    1089: `552`,
    109: `16`,
    1090: `552`,
    1091: `553`,
    1092: `553`,
    1093: `555`,
    1094: `556`,
    1095: `556`,
    1096: `557`,
    1097: `558`,
    1098: `558`,
    1099: `559`,
    11: `2`,
    110: `17`,
    1100: `560`,
    1101: `560`,
    1102: `560`,
    1103: `561`,
    1104: `561`,
    1105: `561`,
    1106: `562`,
    1107: `562`,
    1108: `563`,
    1109: `564`,
    111: `18`,
    1110: `564`,
    1111: `564`,
    1112: `565`,
    1113: `565`,
    1114: `566`,
    1115: `567`,
    1116: `568`,
    1117: `568`,
    1118: `569`,
    1119: `570`,
    112: `19`,
    1120: `570`,
    1121: `571`,
    1122: `571`,
    1123: `571`,
    1124: `572`,
    1125: `572`,
    1126: `573`,
    1127: `573`,
    1128: `574`,
    1129: `575`,
    113: `20`,
    1130: `575`,
    1131: `576`,
    1132: `577`,
    1133: `577`,
    1134: `578`,
    1135: `579`,
    1136: `581`,
    1137: `581`,
    1138: `582`,
    1139: `582`,
    114: `20`,
    1140: `583`,
    1141: `583`,
    1142: `583`,
    1143: `583`,
    1144: `583`,
    1145: `583`,
    1146: `583`,
    1147: `583`,
    1148: `583`,
    1149: `583`,
    115: `21`,
    1150: `584`,
    1151: `584`,
    1152: `585`,
    1153: `586`,
    1154: `587`,
    1155: `587`,
    1156: `588`,
    1157: `588`,
    1158: `589`,
    1159: `589`,
    116: `22`,
    1160: `590`,
    1161: `590`,
    1162: `590`,
    1163: `591`,
    1164: `591`,
    1165: `592`,
    1166: `592`,
    1167: `592`,
    1168: `593`,
    1169: `594`,
    117: `23`,
    1170: `594`,
    1171: `595`,
    1172: `595`,
    1173: `595`,
    1174: `596`,
    1175: `597`,
    1176: `597`,
    1177: `598`,
    1178: `598`,
    1179: `598`,
    118: `23`,
    1180: `599`,
    1181: `600`,
    1182: `600`,
    1183: `601`,
    1184: `601`,
    1185: `601`,
    1186: `602`,
    1187: `603`,
    1188: `603`,
    1189: `604`,
    119: `24`,
    1190: `604`,
    1191: `604`,
    1192: `605`,
    1193: `606`,
    1194: `606`,
    1195: `607`,
    1196: `607`,
    1197: `607`,
    1198: `608`,
    1199: `609`,
    12: `2`,
    120: `25`,
    1200: `609`,
    1201: `610`,
    1202: `610`,
    1203: `611`,
    1204: `612`,
    1205: `612`,
    1206: `613`,
    1207: `614`,
    1208: `615`,
    1209: `616`,
    121: `26`,
    1210: `616`,
    1211: `617`,
    1212: `617`,
    1213: `617`,
    1214: `618`,
    1215: `619`,
    1216: `619`,
    1217: `620`,
    1218: `620`,
    1219: `621`,
    122: `26`,
    1220: `621`,
    1221: `622`,
    1222: `623`,
    1223: `624`,
    1224: `624`,
    1225: `625`,
    1226: `625`,
    1227: `626`,
    1228: `626`,
    1229: `627`,
    123: `27`,
    1230: `628`,
    1231: `628`,
    1232: `629`,
    1233: `629`,
    1234: `630`,
    1235: `630`,
    1236: `631`,
    1237: `631`,
    1238: `631`,
    1239: `633`,
    124: `28`,
    1240: `633`,
    1241: `634`,
    1242: `634`,
    1243: `634`,
    1244: `635`,
    1245: `635`,
    1246: `636`,
    1247: `636`,
    1248: `637`,
    1249: `637`,
    125: `30`,
    1250: `638`,
    1251: `639`,
    1252: `646`,
    1253: `646`,
    1254: `647`,
    1255: `647`,
    1256: `647`,
    1257: `648`,
    1258: `649`,
    1259: `656`,
    126: `30`,
    1260: `656`,
    1261: `657`,
    1262: `657`,
    1263: `657`,
    1264: `658`,
    1265: `659`,
    1266: `659`,
    1267: `660`,
    1268: `661`,
    1269: `662`,
    127: `30`,
    1270: `669`,
    1271: `669`,
    1272: `670`,
    1273: `670`,
    1274: `671`,
    1275: `672`,
    1276: `672`,
    1277: `673`,
    1278: `673`,
    1279: `674`,
    128: `30`,
    1280: `674`,
    1281: `674`,
    1282: `677`,
    1283: `677`,
    1284: `678`,
    1285: `679`,
    1286: `680`,
    1287: `680`,
    1288: `680`,
    1289: `680`,
    129: `30`,
    1290: `680`,
    1291: `680`,
    1292: `681`,
    1293: `681`,
    1294: `681`,
    1295: `683`,
    1296: `683`,
    1297: `684`,
    1298: `684`,
    1299: `684`,
    13: `2`,
    130: `30`,
    1300: `685`,
    1301: `685`,
    1302: `686`,
    1303: `686`,
    1304: `687`,
    1305: `687`,
    1306: `688`,
    1307: `689`,
    1308: `694`,
    1309: `694`,
    131: `30`,
    1310: `694`,
    1311: `694`,
    1312: `694`,
    1313: `694`,
    1314: `694`,
    1315: `694`,
    1316: `694`,
    1317: `694`,
    1318: `694`,
    1319: `694`,
    132: `30`,
    1320: `694`,
    1321: `694`,
    1322: `694`,
    1323: `694`,
    1324: `694`,
    1325: `694`,
    1326: `694`,
    1327: `694`,
    1328: `694`,
    1329: `694`,
    133: `30`,
    1330: `694`,
    1331: `694`,
    1332: `694`,
    1333: `694`,
    1334: `694`,
    1335: `694`,
    1336: `694`,
    1337: `694`,
    1338: `694`,
    1339: `694`,
    134: `30`,
    1340: `694`,
    1341: `694`,
    1342: `694`,
    1343: `695`,
    1344: `696`,
    1345: `697`,
    1346: `698`,
    1347: `699`,
    1348: `705`,
    1349: `706`,
    135: `30`,
    1350: `707`,
    1351: `707`,
    1352: `708`,
    1353: `709`,
    1354: `709`,
    1355: `709`,
    1356: `711`,
    1357: `712`,
    1358: `713`,
    1359: `713`,
    136: `30`,
    1360: `714`,
    1361: `715`,
    1362: `715`,
    1363: `715`,
    1364: `716`,
    1365: `716`,
    1366: `717`,
    1367: `717`,
    1368: `718`,
    1369: `719`,
    137: `30`,
    1370: `720`,
    1371: `720`,
    1372: `722`,
    1373: `722`,
    1374: `723`,
    1375: `723`,
    1376: `723`,
    1377: `724`,
    1378: `725`,
    1379: `725`,
    138: `30`,
    1380: `726`,
    1381: `726`,
    1382: `726`,
    1383: `726`,
    1384: `726`,
    1385: `726`,
    1386: `726`,
    1387: `726`,
    1388: `726`,
    1389: `726`,
    139: `30`,
    1390: `727`,
    1391: `727`,
    1392: `728`,
    1393: `729`,
    1394: `730`,
    1395: `730`,
    1396: `731`,
    1397: `731`,
    1398: `732`,
    1399: `733`,
    14: `2`,
    140: `30`,
    1400: `733`,
    1401: `734`,
    1402: `734`,
    1403: `734`,
    1404: `735`,
    1405: `736`,
    1406: `736`,
    1407: `737`,
    1408: `737`,
    1409: `737`,
    141: `30`,
    1410: `738`,
    1411: `739`,
    1412: `739`,
    1413: `740`,
    1414: `741`,
    1415: `741`,
    1416: `742`,
    1417: `742`,
    1418: `742`,
    1419: `743`,
    142: `30`,
    1420: `744`,
    1421: `744`,
    1422: `745`,
    1423: `745`,
    1424: `745`,
    1425: `746`,
    1426: `747`,
    1427: `747`,
    1428: `748`,
    1429: `748`,
    143: `30`,
    1430: `748`,
    1431: `749`,
    1432: `750`,
    1433: `750`,
    1434: `751`,
    1435: `752`,
    1436: `753`,
    1437: `753`,
    1438: `754`,
    1439: `754`,
    144: `30`,
    1440: `754`,
    1441: `755`,
    1442: `756`,
    1443: `756`,
    1444: `757`,
    1445: `757`,
    1446: `758`,
    1447: `758`,
    1448: `759`,
    1449: `760`,
    145: `30`,
    1450: `761`,
    1451: `761`,
    1452: `762`,
    1453: `762`,
    1454: `763`,
    1455: `763`,
    1456: `764`,
    1457: `765`,
    1458: `765`,
    1459: `766`,
    146: `30`,
    1460: `766`,
    1461: `767`,
    1462: `767`,
    1463: `768`,
    1464: `768`,
    1465: `768`,
    1466: `770`,
    1467: `770`,
    1468: `771`,
    1469: `771`,
    147: `30`,
    1470: `771`,
    1471: `772`,
    1472: `773`,
    1473: `773`,
    1474: `774`,
    1475: `774`,
    1476: `775`,
    1477: `776`,
    1478: `781`,
    1479: `781`,
    148: `30`,
    1480: `782`,
    1481: `782`,
    1482: `782`,
    1483: `783`,
    1484: `783`,
    1485: `784`,
    1486: `784`,
    1487: `785`,
    1488: `785`,
    1489: `786`,
    149: `30`,
    1490: `787`,
    1491: `792`,
    1492: `792`,
    1493: `793`,
    1494: `793`,
    1495: `794`,
    1496: `795`,
    1497: `800`,
    1498: `801`,
    1499: `801`,
    15: `2`,
    150: `30`,
    1500: `802`,
    1501: `802`,
    1502: `802`,
    1503: `802`,
    1504: `802`,
    1505: `802`,
    1506: `802`,
    1507: `802`,
    1508: `802`,
    1509: `802`,
    151: `30`,
    1510: `803`,
    1511: `803`,
    1512: `804`,
    1513: `805`,
    1514: `806`,
    1515: `806`,
    1516: `807`,
    1517: `807`,
    1518: `808`,
    1519: `808`,
    152: `30`,
    1520: `809`,
    1521: `809`,
    1522: `809`,
    1523: `810`,
    1524: `810`,
    1525: `811`,
    1526: `811`,
    1527: `811`,
    1528: `812`,
    1529: `813`,
    153: `30`,
    1530: `813`,
    1531: `814`,
    1532: `814`,
    1533: `814`,
    1534: `815`,
    1535: `816`,
    1536: `816`,
    1537: `817`,
    1538: `818`,
    1539: `818`,
    154: `30`,
    1540: `819`,
    1541: `819`,
    1542: `819`,
    1543: `820`,
    1544: `821`,
    1545: `821`,
    1546: `822`,
    1547: `822`,
    1548: `822`,
    1549: `823`,
    155: `30`,
    1550: `824`,
    1551: `824`,
    1552: `825`,
    1553: `825`,
    1554: `825`,
    1555: `826`,
    1556: `827`,
    1557: `827`,
    1558: `828`,
    1559: `828`,
    156: `30`,
    1560: `828`,
    1561: `829`,
    1562: `830`,
    1563: `830`,
    1564: `831`,
    1565: `831`,
    1566: `831`,
    1567: `832`,
    1568: `833`,
    1569: `833`,
    157: `30`,
    1570: `834`,
    1571: `834`,
    1572: `835`,
    1573: `835`,
    1574: `836`,
    1575: `837`,
    1576: `838`,
    1577: `838`,
    1578: `839`,
    1579: `839`,
    158: `30`,
    1580: `840`,
    1581: `840`,
    1582: `841`,
    1583: `841`,
    1584: `841`,
    1585: `843`,
    1586: `843`,
    1587: `844`,
    1588: `844`,
    1589: `844`,
    159: `30`,
    1590: `845`,
    1591: `845`,
    1592: `846`,
    1593: `846`,
    1594: `847`,
    1595: `847`,
    1596: `848`,
    1597: `849`,
    1598: `856`,
    1599: `856`,
    16: `2`,
    160: `30`,
    1600: `857`,
    1601: `857`,
    1602: `857`,
    1603: `860`,
    1604: `860`,
    1605: `861`,
    1606: `861`,
    1607: `861`,
    1608: `862`,
    1609: `862`,
    161: `30`,
    1610: `863`,
    1611: `863`,
    1612: `864`,
    1613: `864`,
    1614: `864`,
    1615: `865`,
    1616: `865`,
    1617: `866`,
    1618: `866`,
    1619: `867`,
    162: `30`,
    1620: `867`,
    1621: `867`,
    1622: `868`,
    1623: `868`,
    1624: `869`,
    1625: `869`,
    1626: `870`,
    1627: `870`,
    1628: `870`,
    1629: `871`,
    163: `30`,
    1630: `872`,
    1631: `872`,
    1632: `873`,
    1633: `873`,
    1634: `874`,
    1635: `874`,
    1636: `874`,
    1637: `875`,
    1638: `876`,
    1639: `876`,
    164: `30`,
    1640: `877`,
    1641: `877`,
    1642: `878`,
    1643: `878`,
    1644: `879`,
    1645: `880`,
    1646: `880`,
    1647: `881`,
    1648: `882`,
    1649: `882`,
    165: `30`,
    1650: `883`,
    1651: `883`,
    1652: `883`,
    1653: `883`,
    1654: `883`,
    1655: `883`,
    1656: `883`,
    1657: `883`,
    1658: `883`,
    1659: `883`,
    166: `30`,
    1660: `884`,
    1661: `884`,
    1662: `885`,
    1663: `886`,
    1664: `886`,
    1665: `886`,
    1666: `887`,
    1667: `888`,
    1668: `889`,
    1669: `889`,
    167: `30`,
    1670: `890`,
    1671: `891`,
    1672: `891`,
    1673: `891`,
    1674: `892`,
    1675: `892`,
    1676: `893`,
    1677: `893`,
    1678: `894`,
    1679: `894`,
    168: `30`,
    1680: `895`,
    1681: `896`,
    1682: `896`,
    1683: `897`,
    1684: `898`,
    1685: `898`,
    1686: `899`,
    1687: `900`,
    1688: `901`,
    1689: `901`,
    169: `30`,
    1690: `902`,
    1691: `903`,
    1692: `904`,
    1693: `904`,
    1694: `905`,
    1695: `906`,
    1696: `907`,
    1697: `907`,
    1698: `908`,
    1699: `908`,
    17: `2`,
    170: `30`,
    1700: `908`,
    1701: `908`,
    1702: `908`,
    1703: `908`,
    1704: `909`,
    1705: `909`,
    1706: `910`,
    1707: `911`,
    1708: `913`,
    1709: `913`,
    171: `30`,
    1710: `913`,
    1711: `913`,
    1712: `913`,
    1713: `913`,
    1714: `914`,
    1715: `914`,
    1716: `915`,
    1717: `916`,
    1718: `918`,
    1719: `918`,
    172: `30`,
    1720: `918`,
    1721: `918`,
    1722: `918`,
    1723: `918`,
    1724: `919`,
    1725: `919`,
    1726: `920`,
    1727: `921`,
    1728: `923`,
    1729: `923`,
    173: `30`,
    1730: `923`,
    1731: `923`,
    1732: `923`,
    1733: `923`,
    1734: `924`,
    1735: `924`,
    1736: `925`,
    1737: `926`,
    1738: `928`,
    1739: `928`,
    174: `30`,
    1740: `928`,
    1741: `928`,
    1742: `928`,
    1743: `928`,
    1744: `929`,
    1745: `929`,
    1746: `930`,
    1747: `931`,
    1748: `932`,
    1749: `934`,
    175: `30`,
    1750: `934`,
    1751: `934`,
    1752: `934`,
    1753: `934`,
    1754: `934`,
    1755: `935`,
    1756: `935`,
    1757: `936`,
    1758: `937`,
    1759: `938`,
    176: `30`,
    1760: `940`,
    1761: `940`,
    1762: `940`,
    1763: `940`,
    1764: `940`,
    1765: `940`,
    1766: `941`,
    1767: `941`,
    1768: `942`,
    1769: `943`,
    177: `30`,
    1770: `944`,
    1771: `946`,
    1772: `946`,
    1773: `947`,
    1774: `947`,
    1775: `948`,
    1776: `948`,
    1777: `948`,
    1778: `949`,
    1779: `949`,
    178: `30`,
    1780: `950`,
    1781: `950`,
    1782: `950`,
    1783: `951`,
    1784: `951`,
    1785: `952`,
    1786: `952`,
    1787: `952`,
    1788: `953`,
    1789: `954`,
    179: `30`,
    1790: `955`,
    1791: `955`,
    1792: `956`,
    1793: `957`,
    1794: `958`,
    1795: `958`,
    1796: `959`,
    1797: `960`,
    1798: `960`,
    1799: `961`,
    18: `2`,
    180: `30`,
    1800: `961`,
    1801: `961`,
    1802: `962`,
    1803: `963`,
    1804: `964`,
    1805: `965`,
    1806: `965`,
    1807: `966`,
    1808: `966`,
    1809: `966`,
    181: `30`,
    1810: `967`,
    1811: `968`,
    1812: `968`,
    1813: `969`,
    1814: `969`,
    1815: `969`,
    1816: `970`,
    1817: `971`,
    1818: `971`,
    1819: `972`,
    182: `30`,
    1820: `972`,
    1821: `972`,
    1822: `973`,
    1823: `974`,
    1824: `974`,
    1825: `975`,
    1826: `975`,
    1827: `976`,
    1828: `976`,
    1829: `977`,
    183: `30`,
    1830: `978`,
    1831: `979`,
    1832: `979`,
    1833: `980`,
    1834: `980`,
    1835: `981`,
    1836: `981`,
    1837: `982`,
    1838: `983`,
    1839: `983`,
    184: `30`,
    1840: `984`,
    1841: `985`,
    1842: `985`,
    1843: `986`,
    1844: `986`,
    1845: `987`,
    1846: `987`,
    1847: `988`,
    1848: `988`,
    1849: `988`,
    185: `30`,
    1850: `990`,
    1851: `990`,
    1852: `991`,
    1853: `992`,
    1854: `992`,
    1855: `993`,
    1856: `994`,
    1857: `995`,
    1858: `995`,
    1859: `996`,
    186: `30`,
    1860: `998`,
    1861: `999`,
    1862: `999`,
    1863: `1001`,
    1864: `1001`,
    1865: `1002`,
    1866: `1002`,
    1867: `1002`,
    1868: `1003`,
    1869: `1003`,
    187: `30`,
    1870: `1003`,
    1871: `1004`,
    1872: `1004`,
    1873: `1004`,
    1874: `1004`,
    1875: `1004`,
    1876: `1004`,
    1877: `1004`,
    1878: `1004`,
    1879: `1004`,
    188: `30`,
    1880: `1004`,
    1881: `1005`,
    1882: `1005`,
    1883: `1006`,
    1884: `1007`,
    1885: `1008`,
    1886: `1009`,
    1887: `1009`,
    1888: `1010`,
    1889: `1011`,
    189: `30`,
    1890: `1011`,
    1891: `1012`,
    1892: `1012`,
    1893: `1013`,
    1894: `1013`,
    1895: `1014`,
    1896: `1014`,
    1897: `1015`,
    1898: `1016`,
    1899: `1016`,
    19: `2`,
    190: `30`,
    1900: `1017`,
    1901: `1018`,
    1902: `1018`,
    1903: `1019`,
    1904: `1019`,
    1905: `1020`,
    1906: `1020`,
    1907: `1020`,
    1908: `1022`,
    1909: `1022`,
    191: `30`,
    1910: `1023`,
    1911: `1024`,
    1912: `1025`,
    1913: `1025`,
    1914: `1026`,
    1915: `1026`,
    1916: `1027`,
    1917: `1027`,
    1918: `1028`,
    1919: `1029`,
    192: `30`,
    1920: `1029`,
    1921: `1030`,
    1922: `1030`,
    1923: `1031`,
    1924: `1031`,
    1925: `1032`,
    1926: `1033`,
    1927: `1038`,
    1928: `1038`,
    1929: `1039`,
    193: `30`,
    1930: `1040`,
    1931: `1040`,
    1932: `1041`,
    1933: `1042`,
    1934: `1043`,
    1935: `1043`,
    1936: `1044`,
    1937: `1044`,
    1938: `1045`,
    1939: `1045`,
    194: `30`,
    1940: `1046`,
    1941: `1047`,
    1942: `1053`,
    1943: `1053`,
    1944: `1055`,
    1945: `1056`,
    1946: `1056`,
    1947: `1057`,
    1948: `1058`,
    1949: `1058`,
    195: `30`,
    1950: `1059`,
    1951: `1060`,
    1952: `1060`,
    1953: `1060`,
    1954: `1061`,
    1955: `1061`,
    1956: `1061`,
    1957: `1062`,
    1958: `1063`,
    1959: `1063`,
    196: `30`,
    1960: `1064`,
    1961: `1064`,
    1962: `1065`,
    1963: `1066`,
    1964: `1072`,
    1965: `1072`,
    1966: `1073`,
    1967: `1073`,
    1968: `1074`,
    1969: `1075`,
    197: `30`,
    1970: `1075`,
    1971: `1076`,
    1972: `1076`,
    1973: `1078`,
    1974: `1079`,
    1975: `1079`,
    1976: `1080`,
    1977: `1081`,
    1978: `1081`,
    1979: `1082`,
    198: `30`,
    1980: `1083`,
    1981: `1084`,
    1982: `1084`,
    1983: `1084`,
    1984: `1085`,
    1985: `1085`,
    1986: `1085`,
    1987: `1086`,
    1988: `1087`,
    1989: `1087`,
    199: `30`,
    1990: `1088`,
    1991: `1088`,
    1992: `1089`,
    1993: `1090`,
    1994: `1096`,
    1995: `1097`,
    1996: `1098`,
    1997: `1098`,
    1998: `1099`,
    1999: `1100`,
    2: `2`,
    20: `2`,
    200: `30`,
    2000: `1100`,
    2001: `1101`,
    2002: `1101`,
    2003: `1102`,
    2004: `1103`,
    2005: `1103`,
    2006: `1103`,
    2007: `1104`,
    2008: `1104`,
    2009: `1104`,
    201: `30`,
    2010: `1106`,
    2011: `1107`,
    2012: `1108`,
    2013: `1108`,
    2014: `1109`,
    2015: `1110`,
    2016: `1110`,
    2017: `1111`,
    2018: `1112`,
    2019: `1112`,
    202: `30`,
    2020: `1113`,
    2021: `1114`,
    2022: `1114`,
    2023: `1115`,
    2024: `1116`,
    2025: `1116`,
    2026: `1116`,
    2027: `1117`,
    2028: `1117`,
    2029: `1117`,
    203: `30`,
    2030: `1118`,
    2031: `1118`,
    2032: `1119`,
    2033: `1120`,
    2034: `1120`,
    2035: `1120`,
    2036: `1121`,
    2037: `1121`,
    2038: `1121`,
    2039: `1122`,
    204: `30`,
    2040: `1122`,
    2041: `1123`,
    2042: `1123`,
    2043: `1124`,
    2044: `1125`,
    2045: `1125`,
    2046: `1126`,
    2047: `1127`,
    2048: `1127`,
    2049: `1128`,
    205: `30`,
    2050: `1129`,
    2051: `1131`,
    2052: `1131`,
    2053: `1132`,
    2054: `1132`,
    2055: `1133`,
    2056: `1134`,
    2057: `1134`,
    2058: `1134`,
    2059: `1135`,
    206: `30`,
    2060: `1135`,
    2061: `1136`,
    2062: `1136`,
    2063: `1137`,
    2064: `1138`,
    2065: `1138`,
    2066: `1139`,
    2067: `1140`,
    2068: `1141`,
    2069: `1141`,
    207: `30`,
    2070: `1142`,
    2071: `1142`,
    2072: `1142`,
    2073: `1143`,
    2074: `1143`,
    2075: `1144`,
    2076: `1144`,
    2077: `1145`,
    2078: `1146`,
    2079: `1146`,
    208: `30`,
    2080: `1147`,
    2081: `1148`,
    2082: `1148`,
    2083: `1149`,
    2084: `1150`,
    2085: `1152`,
    2086: `1152`,
    2087: `1153`,
    2088: `1153`,
    2089: `1154`,
    209: `30`,
    2090: `1154`,
    2091: `1154`,
    2092: `1155`,
    2093: `1155`,
    2094: `1156`,
    2095: `1157`,
    2096: `1157`,
    2097: `1158`,
    2098: `1159`,
    2099: `1159`,
    21: `2`,
    210: `30`,
    2100: `1160`,
    2101: `1161`,
    2102: `1161`,
    2103: `1161`,
    2104: `1162`,
    2105: `1162`,
    2106: `1162`,
    2107: `1163`,
    2108: `1163`,
    2109: `1164`,
    211: `30`,
    2110: `1164`,
    2111: `1164`,
    2112: `1164`,
    2113: `1164`,
    2114: `1164`,
    2115: `1164`,
    2116: `1164`,
    2117: `1164`,
    2118: `1164`,
    2119: `1165`,
    212: `30`,
    2120: `1165`,
    2121: `1166`,
    2122: `1167`,
    2123: `1168`,
    2124: `1168`,
    2125: `1169`,
    2126: `1169`,
    2127: `1170`,
    2128: `1170`,
    2129: `1171`,
    213: `30`,
    2130: `1171`,
    2131: `1171`,
    2132: `1172`,
    2133: `1172`,
    2134: `1173`,
    2135: `1173`,
    2136: `1173`,
    2137: `1174`,
    2138: `1175`,
    2139: `1175`,
    214: `30`,
    2140: `1176`,
    2141: `1176`,
    2142: `1176`,
    2143: `1177`,
    2144: `1178`,
    2145: `1178`,
    2146: `1179`,
    2147: `1179`,
    2148: `1179`,
    2149: `1180`,
    215: `30`,
    2150: `1181`,
    2151: `1181`,
    2152: `1182`,
    2153: `1182`,
    2154: `1182`,
    2155: `1183`,
    2156: `1184`,
    2157: `1184`,
    2158: `1185`,
    2159: `1185`,
    216: `30`,
    2160: `1185`,
    2161: `1186`,
    2162: `1187`,
    2163: `1187`,
    2164: `1188`,
    2165: `1188`,
    2166: `1188`,
    2167: `1189`,
    2168: `1190`,
    2169: `1190`,
    217: `30`,
    2170: `1191`,
    2171: `1191`,
    2172: `1192`,
    2173: `1193`,
    2174: `1194`,
    2175: `1195`,
    2176: `1195`,
    2177: `1196`,
    2178: `1196`,
    2179: `1196`,
    218: `30`,
    2180: `1197`,
    2181: `1198`,
    2182: `1198`,
    2183: `1199`,
    2184: `1199`,
    2185: `1200`,
    2186: `1200`,
    2187: `1201`,
    2188: `1202`,
    2189: `1203`,
    219: `30`,
    2190: `1203`,
    2191: `1204`,
    2192: `1204`,
    2193: `1205`,
    2194: `1205`,
    2195: `1206`,
    2196: `1207`,
    2197: `1207`,
    2198: `1208`,
    2199: `1208`,
    22: `2`,
    220: `30`,
    2200: `1209`,
    2201: `1209`,
    2202: `1210`,
    2203: `1210`,
    2204: `1210`,
    2205: `1212`,
    2206: `1212`,
    2207: `1213`,
    2208: `1214`,
    2209: `1215`,
    221: `30`,
    2210: `1218`,
    2211: `1218`,
    2212: `1218`,
    2213: `1219`,
    2214: `1219`,
    2215: `1221`,
    2216: `1222`,
    2217: `1222`,
    2218: `1223`,
    2219: `1224`,
    222: `30`,
    2220: `1224`,
    2221: `1225`,
    2222: `1225`,
    2223: `1226`,
    2224: `1227`,
    2225: `1228`,
    2226: `1229`,
    2227: `1229`,
    2228: `1229`,
    2229: `1230`,
    223: `30`,
    2230: `1230`,
    2231: `1230`,
    2232: `1231`,
    2233: `1231`,
    2234: `1233`,
    2235: `1233`,
    2236: `1234`,
    2237: `1235`,
    2238: `1236`,
    2239: `1238`,
    224: `30`,
    2240: `1238`,
    2241: `1238`,
    2242: `1240`,
    2243: `1240`,
    2244: `1241`,
    2245: `1242`,
    2246: `1243`,
    2247: `1243`,
    2248: `1244`,
    2249: `1244`,
    225: `30`,
    2250: `1245`,
    2251: `1246`,
    2252: `1247`,
    2253: `1247`,
    2254: `1248`,
    2255: `1249`,
    2256: `1250`,
    2257: `1251`,
    2258: `1251`,
    2259: `1253`,
    226: `30`,
    2260: `1254`,
    2261: `1254`,
    2262: `1255`,
    2263: `1256`,
    2264: `1257`,
    2265: `1257`,
    2266: `1257`,
    2267: `1258`,
    2268: `1258`,
    2269: `1259`,
    227: `30`,
    2270: `1260`,
    2271: `1261`,
    2272: `1261`,
    2273: `1262`,
    2274: `1262`,
    2275: `1263`,
    2276: `1263`,
    2277: `1263`,
    2278: `1264`,
    2279: `1264`,
    228: `30`,
    2280: `1265`,
    2281: `1265`,
    2282: `1265`,
    2283: `1265`,
    2284: `1265`,
    2285: `1265`,
    2286: `1266`,
    2287: `1266`,
    2288: `1267`,
    2289: `1268`,
    229: `30`,
    2290: `1269`,
    2291: `1269`,
    2292: `1270`,
    2293: `1271`,
    2294: `1273`,
    2295: `1273`,
    2296: `1274`,
    2297: `1274`,
    2298: `1274`,
    2299: `1275`,
    23: `2`,
    230: `30`,
    2300: `1275`,
    2301: `1276`,
    2302: `1277`,
    2303: `1278`,
    2304: `1278`,
    2305: `1278`,
    2306: `1278`,
    2307: `1278`,
    2308: `1278`,
    2309: `1278`,
    231: `30`,
    2310: `1278`,
    2311: `1278`,
    2312: `1278`,
    2313: `1278`,
    2314: `1278`,
    2315: `1278`,
    2316: `1278`,
    2317: `1278`,
    2318: `1278`,
    2319: `1278`,
    232: `30`,
    2320: `1278`,
    2321: `1278`,
    2322: `1278`,
    2323: `1278`,
    2324: `1278`,
    2325: `1278`,
    2326: `1278`,
    2327: `1278`,
    2328: `1278`,
    2329: `1278`,
    233: `30`,
    2330: `1278`,
    2331: `1279`,
    2332: `1279`,
    2333: `1279`,
    2334: `1281`,
    2335: `1281`,
    2336: `1282`,
    2337: `1283`,
    2338: `1284`,
    2339: `1287`,
    234: `30`,
    2340: `1287`,
    2341: `1287`,
    2342: `1288`,
    2343: `1288`,
    2344: `1290`,
    2345: `1291`,
    2346: `1291`,
    2347: `1292`,
    2348: `1293`,
    2349: `1293`,
    235: `30`,
    2350: `1294`,
    2351: `1295`,
    2352: `1295`,
    2353: `1295`,
    2354: `1296`,
    2355: `1296`,
    2356: `1296`,
    2357: `1297`,
    2358: `1297`,
    2359: `1298`,
    236: `30`,
    2360: `1298`,
    2361: `1298`,
    2362: `1300`,
    2363: `1300`,
    2364: `1301`,
    2365: `1302`,
    2366: `1303`,
    2367: `1306`,
    2368: `1306`,
    2369: `1306`,
    237: `30`,
    2370: `1307`,
    2371: `1307`,
    2372: `1308`,
    2373: `1309`,
    2374: `1309`,
    2375: `1310`,
    2376: `1310`,
    2377: `1310`,
    2378: `1312`,
    2379: `1312`,
    238: `30`,
    2380: `1313`,
    2381: `1314`,
    2382: `1315`,
    2383: `1318`,
    2384: `1318`,
    2385: `1318`,
    2386: `1319`,
    2387: `1319`,
    2388: `1320`,
    2389: `1320`,
    239: `30`,
    2390: `1320`,
    2391: `1321`,
    2392: `1321`,
    2393: `1322`,
    2394: `1322`,
    2395: `1322`,
    2396: `1324`,
    2397: `1324`,
    2398: `1325`,
    2399: `1326`,
    24: `2`,
    240: `30`,
    2400: `1327`,
    2401: `1330`,
    2402: `1330`,
    2403: `1330`,
    2404: `1331`,
    2405: `1331`,
    2406: `1332`,
    2407: `1332`,
    2408: `1332`,
    2409: `1333`,
    241: `30`,
    2410: `1333`,
    2411: `1334`,
    2412: `1334`,
    2413: `1334`,
    2414: `1336`,
    2415: `1336`,
    2416: `1337`,
    2417: `1338`,
    2418: `1339`,
    2419: `1342`,
    242: `30`,
    2420: `1342`,
    2421: `1342`,
    2422: `1343`,
    2423: `1343`,
    2424: `1344`,
    2425: `1344`,
    2426: `1345`,
    2427: `1345`,
    2428: `1345`,
    2429: `1347`,
    243: `30`,
    2430: `1347`,
    2431: `1348`,
    2432: `1349`,
    2433: `1350`,
    2434: `1350`,
    2435: `1351`,
    2436: `1351`,
    2437: `1352`,
    2438: `1353`,
    2439: `1354`,
    244: `30`,
    2440: `1354`,
    2441: `1355`,
    2442: `1356`,
    2443: `1357`,
    2444: `1358`,
    2445: `1358`,
    2446: `1359`,
    2447: `1359`,
    2448: `1359`,
    2449: `1361`,
    245: `30`,
    2450: `1361`,
    2451: `1362`,
    2452: `1363`,
    2453: `1363`,
    2454: `1364`,
    2455: `1364`,
    2456: `1365`,
    2457: `1365`,
    2458: `1366`,
    2459: `1367`,
    246: `30`,
    2460: `1367`,
    2461: `1368`,
    2462: `1369`,
    2463: `1370`,
    2464: `1370`,
    2465: `1371`,
    2466: `1372`,
    2467: `1373`,
    2468: `1374`,
    2469: `1374`,
    247: `30`,
    2470: `1375`,
    2471: `1375`,
    2472: `1375`,
    2473: `1377`,
    2474: `1377`,
    2475: `1378`,
    2476: `1379`,
    2477: `1380`,
    2478: `1383`,
    2479: `1383`,
    248: `30`,
    2480: `1383`,
    2481: `1384`,
    2482: `1384`,
    2483: `1385`,
    2484: `1386`,
    2485: `1386`,
    2486: `1387`,
    2487: `1387`,
    2488: `1387`,
    2489: `1388`,
    249: `30`,
    2490: `1389`,
    2491: `1389`,
    2492: `1390`,
    2493: `1390`,
    2494: `1390`,
    2495: `1392`,
    2496: `1392`,
    2497: `1393`,
    2498: `1394`,
    2499: `1394`,
    25: `2`,
    250: `30`,
    2500: `1395`,
    2501: `1395`,
    2502: `1396`,
    2503: `1397`,
    2504: `1397`,
    2505: `1398`,
    2506: `1399`,
    2507: `1400`,
    2508: `1401`,
    2509: `1401`,
    251: `30`,
    2510: `1402`,
    2511: `1402`,
    2512: `1402`,
    2513: `1404`,
    2514: `1404`,
    2515: `1405`,
    2516: `1406`,
    2517: `1406`,
    2518: `1407`,
    2519: `1407`,
    252: `30`,
    2520: `1408`,
    2521: `1408`,
    2522: `1409`,
    2523: `1410`,
    2524: `1411`,
    2525: `1411`,
    2526: `1412`,
    2527: `1413`,
    2528: `1414`,
    2529: `1415`,
    253: `30`,
    2530: `1415`,
    2531: `1416`,
    2532: `1416`,
    2533: `1416`,
    2534: `1418`,
    2535: `1418`,
    2536: `1419`,
    2537: `1420`,
    2538: `1420`,
    2539: `1420`,
    254: `30`,
    2540: `1421`,
    2541: `1421`,
    2542: `1422`,
    2543: `1423`,
    2544: `1423`,
    2545: `1424`,
    2546: `1425`,
    2547: `1426`,
    2548: `1427`,
    2549: `1427`,
    255: `30`,
    2550: `1428`,
    2551: `1428`,
    2552: `1428`,
    2553: `1430`,
    2554: `1430`,
    2555: `1431`,
    2556: `1432`,
    2557: `1432`,
    2558: `1432`,
    2559: `1433`,
    256: `30`,
    2560: `1433`,
    2561: `1434`,
    2562: `1435`,
    2563: `1436`,
    2564: `1436`,
    2565: `1437`,
    2566: `1438`,
    2567: `1439`,
    2568: `1440`,
    2569: `1440`,
    257: `31`,
    2570: `1441`,
    2571: `1441`,
    2572: `1441`,
    2573: `1443`,
    2574: `1443`,
    2575: `1443`,
    2576: `1443`,
    2577: `1443`,
    2578: `1443`,
    2579: `1443`,
    258: `31`,
    2580: `1443`,
    2581: `1443`,
    2582: `1443`,
    2583: `1443`,
    2584: `1443`,
    2585: `1443`,
    2586: `1443`,
    2587: `1443`,
    2588: `1443`,
    2589: `1443`,
    259: `31`,
    2590: `1443`,
    2591: `1443`,
    2592: `1443`,
    2593: `1443`,
    2594: `1443`,
    2595: `1443`,
    2596: `1443`,
    2597: `1443`,
    2598: `1443`,
    2599: `1443`,
    26: `2`,
    260: `32`,
    2600: `1443`,
    2601: `1443`,
    2602: `1443`,
    2603: `1443`,
    2604: `1443`,
    2605: `1443`,
    2606: `1443`,
    2607: `1443`,
    2608: `1443`,
    2609: `1443`,
    261: `32`,
    2610: `1443`,
    2611: `1443`,
    2612: `1443`,
    2613: `1443`,
    2614: `1443`,
    2615: `1443`,
    2616: `1443`,
    2617: `1443`,
    2618: `1443`,
    2619: `1443`,
    262: `32`,
    2620: `1443`,
    2621: `1443`,
    2622: `1443`,
    2623: `1443`,
    2624: `1443`,
    2625: `1443`,
    2626: `1443`,
    2627: `1443`,
    2628: `1443`,
    2629: `1443`,
    263: `32`,
    2630: `1443`,
    2631: `1443`,
    2632: `1443`,
    2633: `1443`,
    2634: `1443`,
    2635: `1443`,
    2636: `1443`,
    2637: `1443`,
    2638: `1443`,
    2639: `1443`,
    264: `32`,
    2640: `1443`,
    2641: `1443`,
    2642: `1443`,
    2643: `1443`,
    2644: `1443`,
    2645: `1443`,
    2646: `1443`,
    2647: `1443`,
    2648: `1443`,
    2649: `1443`,
    265: `32`,
    2650: `1443`,
    2651: `1443`,
    2652: `1443`,
    2653: `1443`,
    2654: `1443`,
    2655: `1443`,
    2656: `1443`,
    2657: `1443`,
    2658: `1443`,
    2659: `1443`,
    266: `32`,
    2660: `1443`,
    2661: `1443`,
    2662: `1443`,
    2663: `1443`,
    2664: `1443`,
    2665: `1443`,
    2666: `1443`,
    2667: `1443`,
    2668: `1443`,
    2669: `1443`,
    267: `32`,
    2670: `1443`,
    2671: `1443`,
    2672: `1443`,
    2673: `1443`,
    2674: `1443`,
    2675: `1443`,
    2676: `1443`,
    2677: `1443`,
    2678: `1443`,
    2679: `1443`,
    268: `32`,
    2680: `1443`,
    2681: `1443`,
    2682: `1443`,
    2683: `1443`,
    2684: `1443`,
    2685: `1443`,
    2686: `1443`,
    2687: `1443`,
    2688: `1443`,
    2689: `1443`,
    269: `32`,
    2690: `1443`,
    2691: `1443`,
    2692: `1443`,
    2693: `1443`,
    2694: `1443`,
    2695: `1443`,
    2696: `1443`,
    2697: `1443`,
    2698: `1443`,
    2699: `1443`,
    27: `2`,
    270: `32`,
    2700: `1443`,
    2701: `1443`,
    2702: `1443`,
    2703: `1443`,
    2704: `1443`,
    2705: `1443`,
    2706: `1443`,
    2707: `1443`,
    2708: `1443`,
    2709: `1443`,
    271: `32`,
    2710: `1443`,
    2711: `1443`,
    2712: `1443`,
    2713: `1443`,
    2714: `1443`,
    2715: `1443`,
    2716: `1443`,
    2717: `1443`,
    2718: `1443`,
    2719: `1443`,
    272: `32`,
    2720: `1443`,
    2721: `1443`,
    2722: `1443`,
    2723: `1443`,
    2724: `1443`,
    2725: `1443`,
    2726: `1443`,
    2727: `1443`,
    2728: `1443`,
    2729: `1443`,
    273: `32`,
    2730: `1443`,
    2731: `1443`,
    2732: `1443`,
    2733: `1443`,
    2734: `1443`,
    2735: `1443`,
    2736: `1443`,
    2737: `1444`,
    2738: `1444`,
    2739: `1445`,
    274: `32`,
    2740: `1445`,
    2741: `1445`,
    2742: `1447`,
    2743: `1447`,
    2744: `1447`,
    2745: `1447`,
    2746: `1447`,
    2747: `1447`,
    2748: `1447`,
    2749: `1447`,
    275: `32`,
    2750: `1447`,
    2751: `1447`,
    2752: `1447`,
    2753: `1447`,
    2754: `1447`,
    2755: `1447`,
    2756: `1447`,
    2757: `1447`,
    2758: `1447`,
    2759: `1447`,
    276: `32`,
    2760: `1447`,
    2761: `1447`,
    2762: `1447`,
    2763: `1447`,
    2764: `1447`,
    2765: `1447`,
    2766: `1447`,
    2767: `1447`,
    2768: `1447`,
    2769: `1447`,
    277: `32`,
    2770: `1447`,
    2771: `1447`,
    2772: `1447`,
    2773: `1447`,
    2774: `1447`,
    2775: `1447`,
    2776: `1447`,
    2777: `1447`,
    2778: `1447`,
    2779: `1447`,
    278: `32`,
    2780: `1447`,
    2781: `1447`,
    2782: `1447`,
    2783: `1447`,
    2784: `1447`,
    2785: `1447`,
    2786: `1447`,
    2787: `1447`,
    2788: `1447`,
    2789: `1447`,
    279: `32`,
    2790: `1447`,
    2791: `1447`,
    2792: `1447`,
    2793: `1447`,
    2794: `1447`,
    2795: `1447`,
    2796: `1447`,
    2797: `1447`,
    2798: `1447`,
    2799: `1447`,
    28: `2`,
    280: `32`,
    2800: `1447`,
    2801: `1447`,
    2802: `1447`,
    2803: `1447`,
    2804: `1447`,
    2805: `1447`,
    2806: `1447`,
    2807: `1447`,
    2808: `1447`,
    2809: `1447`,
    281: `32`,
    2810: `1447`,
    2811: `1447`,
    2812: `1447`,
    2813: `1447`,
    2814: `1447`,
    2815: `1447`,
    2816: `1447`,
    2817: `1447`,
    2818: `1447`,
    2819: `1447`,
    282: `32`,
    2820: `1447`,
    2821: `1447`,
    2822: `1447`,
    2823: `1447`,
    2824: `1447`,
    2825: `1447`,
    2826: `1447`,
    2827: `1447`,
    2828: `1447`,
    2829: `1447`,
    283: `32`,
    2830: `1447`,
    2831: `1447`,
    2832: `1447`,
    2833: `1447`,
    2834: `1447`,
    2835: `1447`,
    2836: `1447`,
    2837: `1447`,
    2838: `1447`,
    2839: `1447`,
    284: `32`,
    2840: `1447`,
    2841: `1447`,
    2842: `1447`,
    2843: `1447`,
    2844: `1447`,
    2845: `1447`,
    2846: `1447`,
    2847: `1447`,
    2848: `1447`,
    2849: `1447`,
    285: `32`,
    2850: `1447`,
    2851: `1447`,
    2852: `1447`,
    2853: `1447`,
    2854: `1447`,
    2855: `1447`,
    2856: `1447`,
    2857: `1447`,
    2858: `1447`,
    2859: `1447`,
    286: `32`,
    2860: `1447`,
    2861: `1447`,
    2862: `1447`,
    2863: `1447`,
    2864: `1447`,
    2865: `1447`,
    2866: `1447`,
    2867: `1447`,
    2868: `1447`,
    2869: `1447`,
    287: `32`,
    2870: `1447`,
    2871: `1447`,
    2872: `1447`,
    2873: `1447`,
    2874: `1447`,
    2875: `1447`,
    2876: `1447`,
    2877: `1447`,
    2878: `1447`,
    2879: `1447`,
    288: `32`,
    2880: `1447`,
    2881: `1447`,
    2882: `1447`,
    2883: `1447`,
    2884: `1447`,
    2885: `1447`,
    2886: `1447`,
    2887: `1447`,
    2888: `1447`,
    2889: `1447`,
    289: `32`,
    2890: `1447`,
    2891: `1447`,
    2892: `1447`,
    2893: `1447`,
    2894: `1447`,
    2895: `1447`,
    2896: `1447`,
    2897: `1447`,
    2898: `1447`,
    2899: `1447`,
    29: `2`,
    290: `32`,
    2900: `1447`,
    2901: `1447`,
    2902: `1447`,
    2903: `1447`,
    2904: `1447`,
    2905: `1447`,
    2906: `1448`,
    2907: `1448`,
    2908: `1449`,
    2909: `1449`,
    291: `32`,
    2910: `1449`,
    2911: `1451`,
    2912: `1451`,
    2913: `1452`,
    2914: `1453`,
    2915: `1453`,
    2916: `1453`,
    2917: `1454`,
    2918: `1454`,
    2919: `1455`,
    292: `32`,
    2920: `1456`,
    2921: `1456`,
    2922: `1457`,
    2923: `1458`,
    2924: `1459`,
    2925: `1460`,
    2926: `1460`,
    2927: `1461`,
    2928: `1461`,
    2929: `1461`,
    293: `32`,
    2930: `1463`,
    2931: `1463`,
    2932: `1464`,
    2933: `1465`,
    2934: `1466`,
    2935: `1469`,
    2936: `1469`,
    2937: `1469`,
    2938: `1471`,
    2939: `1472`,
    294: `32`,
    2940: `1472`,
    2941: `1473`,
    2942: `1474`,
    2943: `1474`,
    2944: `1475`,
    2945: `1475`,
    2946: `1476`,
    2947: `1477`,
    2948: `1478`,
    2949: `1479`,
    295: `32`,
    2950: `1479`,
    2951: `1479`,
    2952: `1480`,
    2953: `1481`,
    2954: `1482`,
    2955: `1483`,
    2956: `1484`,
    2957: `1485`,
    2958: `1485`,
    2959: `1485`,
    296: `32`,
    2960: `1486`,
    2961: `1486`,
    2962: `1487`,
    2963: `1487`,
    2964: `1487`,
    2965: `1489`,
    2966: `1489`,
    2967: `1490`,
    2968: `1491`,
    2969: `1492`,
    297: `32`,
    2970: `1495`,
    2971: `1495`,
    2972: `1495`,
    2973: `1497`,
    2974: `1498`,
    2975: `1498`,
    2976: `1499`,
    2977: `1500`,
    2978: `1500`,
    2979: `1501`,
    298: `32`,
    2980: `1502`,
    2981: `1502`,
    2982: `1502`,
    2983: `1503`,
    2984: `1504`,
    2985: `1505`,
    2986: `1506`,
    2987: `1507`,
    2988: `1508`,
    2989: `1508`,
    299: `32`,
    2990: `1508`,
    2991: `1509`,
    2992: `1509`,
    2993: `1510`,
    2994: `1510`,
    2995: `1510`,
    2996: `1512`,
    2997: `1512`,
    2998: `1513`,
    2999: `1514`,
    3: `2`,
    30: `2`,
    300: `32`,
    3000: `1515`,
    3001: `1518`,
    3002: `1518`,
    3003: `1518`,
    3004: `1519`,
    3005: `1519`,
    3006: `1520`,
    3007: `1520`,
    3008: `1520`,
    3009: `1521`,
    301: `32`,
    3010: `1521`,
    3011: `1522`,
    3012: `1522`,
    3013: `1522`,
    3014: `1524`,
    3015: `1524`,
    3016: `1525`,
    3017: `1526`,
    3018: `1526`,
    3019: `1526`,
    302: `32`,
    3020: `1527`,
    3021: `1527`,
    3022: `1528`,
    3023: `1528`,
    3024: `1529`,
    3025: `1530`,
    3026: `1530`,
    3027: `1531`,
    3028: `1532`,
    3029: `1532`,
    303: `32`,
    3030: `1533`,
    3031: `1534`,
    3032: `1535`,
    3033: `1535`,
    3034: `1536`,
    3035: `1537`,
    3036: `1538`,
    3037: `1538`,
    3038: `1539`,
    3039: `1540`,
    304: `32`,
    3040: `1541`,
    3041: `1542`,
    3042: `1543`,
    3043: `1543`,
    3044: `1544`,
    3045: `1544`,
    3046: `1544`,
    3047: `1546`,
    3048: `1546`,
    3049: `1547`,
    305: `32`,
    3050: `1548`,
    3051: `1549`,
    3052: `1552`,
    3053: `1552`,
    3054: `1552`,
    3055: `1553`,
    3056: `1553`,
    3057: `1554`,
    3058: `1554`,
    3059: `1554`,
    306: `32`,
    3060: `1555`,
    3061: `1555`,
    3062: `1556`,
    3063: `1556`,
    3064: `1556`,
    3065: `1557`,
    3066: `1558`,
    3067: `1558`,
    3068: `1559`,
    3069: `1559`,
    307: `32`,
    3070: `1559`,
    3071: `1560`,
    3072: `1561`,
    3073: `1561`,
    3074: `1562`,
    3075: `1562`,
    3076: `1562`,
    3077: `1563`,
    3078: `1564`,
    3079: `1564`,
    308: `32`,
    3080: `1565`,
    3081: `1565`,
    3082: `1566`,
    3083: `1566`,
    3084: `1567`,
    3085: `1568`,
    3086: `1569`,
    3087: `1569`,
    3088: `1570`,
    3089: `1570`,
    309: `32`,
    3090: `1570`,
    3091: `1571`,
    3092: `1572`,
    3093: `1572`,
    3094: `1573`,
    3095: `1573`,
    3096: `1573`,
    3097: `1574`,
    3098: `1575`,
    3099: `1575`,
    31: `2`,
    310: `32`,
    3100: `1576`,
    3101: `1576`,
    3102: `1576`,
    3103: `1577`,
    3104: `1578`,
    3105: `1578`,
    3106: `1579`,
    3107: `1579`,
    3108: `1579`,
    3109: `1580`,
    311: `32`,
    3110: `1581`,
    3111: `1581`,
    3112: `1582`,
    3113: `1582`,
    3114: `1582`,
    3115: `1583`,
    3116: `1584`,
    3117: `1584`,
    3118: `1585`,
    3119: `1585`,
    312: `32`,
    3120: `1585`,
    3121: `1587`,
    3122: `1587`,
    3123: `1587`,
    3124: `1587`,
    3125: `1587`,
    3126: `1587`,
    3127: `1587`,
    3128: `1587`,
    3129: `1587`,
    313: `32`,
    3130: `1587`,
    3131: `1587`,
    3132: `1587`,
    3133: `1587`,
    3134: `1587`,
    3135: `1587`,
    3136: `1587`,
    3137: `1587`,
    3138: `1587`,
    3139: `1587`,
    314: `34`,
    3140: `1587`,
    3141: `1587`,
    3142: `1587`,
    3143: `1587`,
    3144: `1587`,
    3145: `1587`,
    3146: `1587`,
    3147: `1587`,
    3148: `1587`,
    3149: `1587`,
    315: `36`,
    3150: `1587`,
    3151: `1587`,
    3152: `1587`,
    3153: `1587`,
    3154: `1587`,
    3155: `1587`,
    3156: `1587`,
    3157: `1587`,
    3158: `1587`,
    3159: `1587`,
    316: `36`,
    3160: `1587`,
    3161: `1587`,
    3162: `1587`,
    3163: `1587`,
    3164: `1587`,
    3165: `1587`,
    3166: `1587`,
    3167: `1587`,
    3168: `1587`,
    3169: `1587`,
    317: `37`,
    3170: `1587`,
    3171: `1587`,
    3172: `1587`,
    3173: `1587`,
    3174: `1587`,
    3175: `1587`,
    3176: `1587`,
    3177: `1587`,
    3178: `1587`,
    3179: `1587`,
    318: `37`,
    3180: `1587`,
    3181: `1587`,
    3182: `1587`,
    3183: `1587`,
    3184: `1587`,
    3185: `1587`,
    3186: `1587`,
    3187: `1587`,
    3188: `1587`,
    3189: `1587`,
    319: `37`,
    3190: `1587`,
    3191: `1587`,
    3192: `1587`,
    3193: `1587`,
    3194: `1587`,
    3195: `1587`,
    3196: `1587`,
    3197: `1587`,
    3198: `1587`,
    3199: `1587`,
    32: `2`,
    320: `38`,
    3200: `1587`,
    3201: `1587`,
    3202: `1587`,
    3203: `1587`,
    3204: `1587`,
    3205: `1587`,
    3206: `1587`,
    3207: `1587`,
    3208: `1587`,
    3209: `1587`,
    321: `38`,
    3210: `1587`,
    3211: `1587`,
    3212: `1587`,
    3213: `1587`,
    3214: `1587`,
    3215: `1587`,
    3216: `1587`,
    3217: `1587`,
    3218: `1587`,
    3219: `1587`,
    322: `39`,
    3220: `1587`,
    3221: `1587`,
    3222: `1587`,
    3223: `1587`,
    3224: `1587`,
    3225: `1587`,
    3226: `1587`,
    3227: `1587`,
    3228: `1587`,
    3229: `1587`,
    323: `39`,
    3230: `1587`,
    3231: `1587`,
    3232: `1587`,
    3233: `1587`,
    3234: `1587`,
    3235: `1587`,
    3236: `1587`,
    3237: `1587`,
    3238: `1587`,
    3239: `1587`,
    324: `40`,
    3240: `1587`,
    3241: `1587`,
    3242: `1587`,
    3243: `1587`,
    3244: `1587`,
    3245: `1587`,
    3246: `1587`,
    3247: `1587`,
    3248: `1587`,
    3249: `1587`,
    325: `40`,
    3250: `1587`,
    3251: `1587`,
    3252: `1587`,
    3253: `1587`,
    3254: `1587`,
    3255: `1587`,
    3256: `1587`,
    3257: `1587`,
    3258: `1587`,
    3259: `1587`,
    326: `40`,
    3260: `1587`,
    3261: `1587`,
    3262: `1587`,
    3263: `1587`,
    3264: `1587`,
    3265: `1587`,
    3266: `1587`,
    3267: `1587`,
    3268: `1587`,
    3269: `1587`,
    327: `41`,
    3270: `1587`,
    3271: `1587`,
    3272: `1587`,
    3273: `1587`,
    3274: `1587`,
    3275: `1587`,
    3276: `1587`,
    3277: `1587`,
    3278: `1587`,
    3279: `1587`,
    328: `41`,
    3280: `1587`,
    3281: `1587`,
    3282: `1587`,
    3283: `1587`,
    3284: `1587`,
    3285: `1588`,
    3286: `1588`,
    3287: `1589`,
    3288: `1589`,
    3289: `1589`,
    329: `42`,
    3290: `1591`,
    3291: `1591`,
    3292: `1592`,
    3293: `1593`,
    3294: `1593`,
    3295: `1593`,
    3296: `1594`,
    3297: `1594`,
    3298: `1595`,
    3299: `1596`,
    33: `2`,
    330: `42`,
    3300: `1597`,
    3301: `1597`,
    3302: `1598`,
    3303: `1599`,
    3304: `1600`,
    3305: `1601`,
    3306: `1601`,
    3307: `1602`,
    3308: `1602`,
    3309: `1602`,
    331: `43`,
    3310: `1604`,
    3311: `1604`,
    3312: `1605`,
    3313: `1606`,
    3314: `1607`,
    3315: `1607`,
    3316: `1608`,
    3317: `1608`,
    3318: `1609`,
    3319: `1609`,
    332: `43`,
    3320: `1609`,
    3321: `1610`,
    3322: `1610`,
    3323: `1611`,
    3324: `1611`,
    3325: `1612`,
    3326: `1612`,
    3327: `1612`,
    3328: `1613`,
    3329: `1613`,
    333: `44`,
    3330: `1614`,
    3331: `1614`,
    3332: `1614`,
    3333: `1614`,
    3334: `1614`,
    3335: `1614`,
    3336: `1615`,
    3337: `1615`,
    3338: `1616`,
    3339: `1617`,
    334: `45`,
    3340: `1618`,
    3341: `1618`,
    3342: `1619`,
    3343: `1620`,
    3344: `1620`,
    3345: `1621`,
    3346: `1622`,
    3347: `1624`,
    3348: `1624`,
    3349: `1625`,
    335: `51`,
    3350: `1625`,
    3351: `1625`,
    3352: `1626`,
    3353: `1626`,
    3354: `1627`,
    3355: `1628`,
    3356: `1629`,
    3357: `1630`,
    3358: `1630`,
    3359: `1631`,
    336: `51`,
    3360: `1631`,
    3361: `1631`,
    3362: `1632`,
    3363: `1633`,
    3364: `1637`,
    3365: `1637`,
    3366: `1638`,
    3367: `1638`,
    3368: `1640`,
    3369: `1641`,
    337: `52`,
    3370: `1642`,
    3371: `1642`,
    3372: `1643`,
    3373: `1644`,
    3374: `1644`,
    3375: `1645`,
    3376: `1645`,
    3377: `1645`,
    3378: `1647`,
    3379: `1648`,
    338: `52`,
    3380: `1649`,
    3381: `1649`,
    3382: `1650`,
    3383: `1651`,
    3384: `1651`,
    3385: `1652`,
    3386: `1652`,
    3387: `1652`,
    3388: `1653`,
    3389: `1653`,
    339: `53`,
    3390: `1654`,
    3391: `1654`,
    3392: `1655`,
    3393: `1655`,
    3394: `1656`,
    3395: `1656`,
    3396: `1657`,
    3397: `1658`,
    3398: `1658`,
    3399: `1659`,
    34: `2`,
    340: `54`,
    3400: `1660`,
    3401: `1660`,
    3402: `1661`,
    3403: `1662`,
    3404: `1664`,
    3405: `1664`,
    3406: `1664`,
    3407: `1665`,
    3408: `1666`,
    3409: `1666`,
    341: `61`,
    3410: `1667`,
    3411: `1668`,
    3412: `1668`,
    3413: `1669`,
    3414: `1670`,
    3415: `1671`,
    3416: `1671`,
    3417: `1672`,
    3418: `1673`,
    3419: `1673`,
    342: `61`,
    3420: `1674`,
    3421: `1675`,
    3422: `1675`,
    3423: `1676`,
    3424: `1676`,
    3425: `1676`,
    3426: `1677`,
    3427: `1678`,
    3428: `1679`,
    3429: `1680`,
    343: `62`,
    3430: `1680`,
    3431: `1681`,
    3432: `1681`,
    3433: `1681`,
    3434: `1682`,
    3435: `1683`,
    3436: `1683`,
    3437: `1684`,
    3438: `1685`,
    3439: `1686`,
    344: `63`,
    3440: `1686`,
    3441: `1687`,
    3442: `1688`,
    3443: `1688`,
    3444: `1689`,
    3445: `1690`,
    3446: `1690`,
    3447: `1691`,
    3448: `1692`,
    3449: `1692`,
    345: `63`,
    3450: `1693`,
    3451: `1693`,
    3452: `1694`,
    3453: `1694`,
    3454: `1695`,
    3455: `1695`,
    3456: `1695`,
    3457: `1697`,
    3458: `1697`,
    3459: `1697`,
    346: `64`,
    3460: `1698`,
    3461: `1698`,
    3462: `1698`,
    3463: `1698`,
    3464: `1699`,
    3465: `1699`,
    3466: `1699`,
    3467: `1700`,
    3468: `1700`,
    3469: `1700`,
    347: `64`,
    3470: `1701`,
    3471: `1701`,
    3472: `1702`,
    3473: `1702`,
    3474: `1702`,
    3475: `1704`,
    3476: `1704`,
    3477: `1704`,
    3478: `1705`,
    3479: `1705`,
    348: `65`,
    3480: `1705`,
    3481: `1706`,
    3482: `1706`,
    3483: `1707`,
    3484: `1707`,
    3485: `1707`,
    3486: `1709`,
    3487: `1710`,
    3488: `1710`,
    3489: `1711`,
    349: `66`,
    3490: `1712`,
    3491: `1713`,
    3492: `1713`,
    3493: `1714`,
    3494: `1714`,
    3495: `1715`,
    3496: `1716`,
    3497: `1717`,
    3498: `1718`,
    3499: `1718`,
    35: `2`,
    350: `67`,
    3500: `1719`,
    3501: `1720`,
    3502: `1721`,
    3503: `1722`,
    3504: `1722`,
    3505: `1723`,
    3506: `1724`,
    3507: `1725`,
    3508: `1725`,
    3509: `1725`,
    351: `68`,
    3510: `1726`,
    3511: `1726`,
    3512: `1726`,
    3513: `1727`,
    3514: `1728`,
    3515: `1729`,
    3516: `1731`,
    3517: `1731`,
    3518: `1732`,
    3519: `1732`,
    352: `68`,
    3520: `1733`,
    3521: `1734`,
    3522: `1734`,
    3523: `1735`,
    3524: `1735`,
    3525: `1735`,
    3526: `1736`,
    3527: `1737`,
    3528: `1738`,
    3529: `1738`,
    353: `69`,
    3530: `1739`,
    3531: `1739`,
    3532: `1739`,
    3533: `1740`,
    3534: `1741`,
    3535: `1741`,
    3536: `1742`,
    3537: `1742`,
    3538: `1743`,
    3539: `1743`,
    354: `69`,
    3540: `1743`,
    3541: `1744`,
    3542: `1745`,
    3543: `1745`,
    3544: `1746`,
    3545: `1746`,
    3546: `1747`,
    3547: `1747`,
    3548: `1747`,
    3549: `1748`,
    355: `69`,
    3550: `1748`,
    3551: `1749`,
    3552: `1750`,
    3553: `1751`,
    3554: `1751`,
    3555: `1752`,
    3556: `1753`,
    3557: `1753`,
    3558: `1753`,
    3559: `1754`,
    356: `70`,
    3560: `1754`,
    3561: `1755`,
    3562: `1756`,
    3563: `1757`,
    3564: `1758`,
    3565: `1758`,
    3566: `1759`,
    3567: `1760`,
    3568: `1760`,
    3569: `1761`,
    357: `70`,
    3570: `1762`,
    3571: `1763`,
    3572: `1764`,
    3573: `1764`,
    3574: `1765`,
    3575: `1766`,
    3576: `1767`,
    3577: `1769`,
    3578: `1769`,
    3579: `1769`,
    358: `71`,
    3580: `1770`,
    3581: `1770`,
    3582: `1770`,
    3583: `1772`,
    3584: `1772`,
    3585: `1772`,
    3586: `1773`,
    3587: `1773`,
    3588: `1773`,
    3589: `1774`,
    359: `71`,
    3590: `1774`,
    3591: `1775`,
    3592: `1775`,
    3593: `1776`,
    3594: `1776`,
    3595: `1776`,
    3596: `1778`,
    3597: `1778`,
    3598: `1778`,
    3599: `1779`,
    36: `2`,
    360: `72`,
    3600: `1779`,
    3601: `1779`,
    3602: `1780`,
    3603: `1780`,
    3604: `1781`,
    3605: `1781`,
    3606: `1782`,
    3607: `1782`,
    3608: `1782`,
    3609: `1784`,
    361: `73`,
    3610: `1784`,
    3611: `1784`,
    3612: `1785`,
    3613: `1785`,
    3614: `1786`,
    3615: `1786`,
    3616: `1786`,
    3617: `1788`,
    3618: `1788`,
    3619: `1788`,
    362: `73`,
    3620: `1790`,
    3621: `1790`,
    3622: `1790`,
    3623: `1792`,
    3624: `1792`,
    3625: `1792`,
    3626: `1794`,
    3627: `1794`,
    3628: `1794`,
    3629: `1796`,
    363: `74`,
    3630: `1796`,
    3631: `1796`,
    3632: `1797`,
    3633: `1797`,
    3634: `1797`,
    3635: `1798`,
    3636: `1798`,
    3637: `1798`,
    3638: `1799`,
    3639: `1799`,
    364: `75`,
    3640: `1800`,
    3641: `1800`,
    3642: `1801`,
    3643: `1801`,
    3644: `1802`,
    3645: `1802`,
    3646: `1802`,
    3647: `1804`,
    3648: `1804`,
    3649: `1804`,
    365: `75`,
    3650: `1805`,
    3651: `1805`,
    3652: `1805`,
    3653: `1806`,
    3654: `1806`,
    3655: `1807`,
    3656: `1807`,
    3657: `1808`,
    3658: `1808`,
    3659: `1808`,
    366: `76`,
    3660: `1810`,
    3661: `1810`,
    3662: `1810`,
    3663: `1812`,
    3664: `1812`,
    3665: `1812`,
    3666: `1813`,
    3667: `1813`,
    3668: `1814`,
    3669: `1814`,
    367: `77`,
    3670: `1814`,
    3671: `1816`,
    3672: `1816`,
    3673: `1816`,
    3674: `1817`,
    3675: `1817`,
    3676: `1817`,
    3677: `1818`,
    3678: `1818`,
    3679: `1819`,
    368: `79`,
    3680: `1819`,
    3681: `1820`,
    3682: `1820`,
    3683: `1820`,
    3684: `1822`,
    3685: `1822`,
    3686: `1822`,
    3687: `1823`,
    3688: `1823`,
    3689: `1824`,
    369: `80`,
    3690: `1824`,
    3691: `1824`,
    3692: `1826`,
    3693: `1826`,
    3694: `1826`,
    3695: `1827`,
    3696: `1828`,
    3697: `1828`,
    3698: `1829`,
    3699: `1829`,
    37: `2`,
    370: `80`,
    3700: `1829`,
    3701: `1831`,
    3702: `1831`,
    3703: `1831`,
    3704: `1833`,
    3705: `1833`,
    3706: `1833`,
    3707: `1835`,
    3708: `1835`,
    3709: `1835`,
    371: `81`,
    3710: `1836`,
    3711: `1836`,
    3712: `1837`,
    3713: `1837`,
    3714: `1837`,
    3715: `1839`,
    3716: `1839`,
    3717: `1839`,
    3718: `1840`,
    3719: `1840`,
    372: `81`,
    3720: `1840`,
    3721: `1841`,
    3722: `1841`,
    3723: `1842`,
    3724: `1842`,
    3725: `1843`,
    3726: `1843`,
    3727: `1843`,
    3728: `1845`,
    3729: `1845`,
    373: `81`,
    3730: `1845`,
    3731: `1846`,
    3732: `1846`,
    3733: `1847`,
    3734: `1847`,
    3735: `1847`,
    3736: `1849`,
    3737: `1849`,
    3738: `1849`,
    3739: `1851`,
    374: `81`,
    3740: `1851`,
    3741: `1852`,
    3742: `1852`,
    3743: `1852`,
    3744: `1853`,
    3745: `1853`,
    3746: `1854`,
    3747: `1854`,
    3748: `1854`,
    3749: `1856`,
    375: `81`,
    3750: `1856`,
    3751: `1856`,
    3752: `1858`,
    3753: `1858`,
    3754: `1858`,
    3755: `1860`,
    3756: `1860`,
    3757: `1860`,
    3758: `1862`,
    3759: `1862`,
    376: `81`,
    3760: `1862`,
    3761: `1864`,
    3762: `1864`,
    3763: `1864`,
    3764: `1866`,
    3765: `1866`,
    3766: `1867`,
    3767: `1867`,
    3768: `1867`,
    3769: `1868`,
    377: `81`,
    3770: `1868`,
    3771: `1869`,
    3772: `1869`,
    3773: `1869`,
    3774: `1871`,
    3775: `1871`,
    3776: `1871`,
    3777: `1873`,
    3778: `1873`,
    3779: `1873`,
    378: `81`,
    3780: `1875`,
    3781: `1876`,
    3782: `1876`,
    3783: `1877`,
    3784: `1877`,
    3785: `1877`,
    3786: `1877`,
    3787: `1877`,
    3788: `1877`,
    3789: `1877`,
    379: `81`,
    3790: `1877`,
    3791: `1877`,
    3792: `1877`,
    3793: `1878`,
    3794: `1878`,
    3795: `1879`,
    3796: `1880`,
    3797: `1880`,
    3798: `1880`,
    3799: `1881`,
    38: `2`,
    380: `81`,
    3800: `1882`,
    3801: `1883`,
    3802: `1883`,
    3803: `1884`,
    3804: `1885`,
    3805: `1885`,
    3806: `1885`,
    3807: `1886`,
    3808: `1886`,
    3809: `1887`,
    381: `82`,
    3810: `1887`,
    3811: `1888`,
    3812: `1888`,
    3813: `1889`,
    3814: `1889`,
    3815: `1890`,
    3816: `1890`,
    3817: `1891`,
    3818: `1891`,
    3819: `1891`,
    382: `82`,
    3820: `1893`,
    3821: `1893`,
    3822: `1894`,
    3823: `1894`,
    3824: `1894`,
    3825: `1895`,
    3826: `1895`,
    3827: `1896`,
    3828: `1897`,
    3829: `1897`,
    383: `83`,
    3830: `1898`,
    3831: `1898`,
    3832: `1898`,
    3833: `1898`,
    3834: `1898`,
    3835: `1898`,
    3836: `1898`,
    3837: `1898`,
    3838: `1898`,
    3839: `1898`,
    384: `84`,
    3840: `1899`,
    3841: `1899`,
    3842: `1900`,
    3843: `1901`,
    3844: `1901`,
    3845: `1901`,
    3846: `1902`,
    3847: `1903`,
    3848: `1904`,
    3849: `1904`,
    385: `84`,
    3850: `1905`,
    3851: `1906`,
    3852: `1906`,
    3853: `1906`,
    3854: `1907`,
    3855: `1907`,
    3856: `1908`,
    3857: `1908`,
    3858: `1908`,
    3859: `1908`,
    386: `84`,
    3860: `1908`,
    3861: `1908`,
    3862: `1909`,
    3863: `1909`,
    3864: `1910`,
    3865: `1911`,
    3866: `1913`,
    3867: `1913`,
    3868: `1914`,
    3869: `1914`,
    387: `85`,
    3870: `1915`,
    3871: `1915`,
    3872: `1915`,
    3873: `1916`,
    3874: `1916`,
    3875: `1917`,
    3876: `1917`,
    3877: `1917`,
    3878: `1918`,
    3879: `1918`,
    388: `86`,
    3880: `1919`,
    3881: `1919`,
    3882: `1919`,
    3883: `1920`,
    3884: `1921`,
    3885: `1921`,
    3886: `1922`,
    3887: `1923`,
    3888: `1923`,
    3889: `1924`,
    389: `87`,
    3890: `1925`,
    3891: `1925`,
    3892: `1926`,
    3893: `1926`,
    3894: `1926`,
    3895: `1927`,
    3896: `1928`,
    3897: `1929`,
    3898: `1930`,
    3899: `1930`,
    39: `2`,
    390: `87`,
    3900: `1931`,
    3901: `1931`,
    3902: `1931`,
    3903: `1932`,
    3904: `1933`,
    3905: `1933`,
    3906: `1934`,
    3907: `1934`,
    3908: `1934`,
    3909: `1935`,
    391: `88`,
    3910: `1936`,
    3911: `1936`,
    3912: `1937`,
    3913: `1937`,
    3914: `1937`,
    3915: `1938`,
    3916: `1939`,
    3917: `1939`,
    3918: `1940`,
    3919: `1940`,
    392: `89`,
    3920: `1941`,
    3921: `1941`,
    3922: `1942`,
    3923: `1943`,
    3924: `1944`,
    3925: `1944`,
    3926: `1945`,
    3927: `1945`,
    3928: `1946`,
    3929: `1946`,
    393: `89`,
    3930: `1947`,
    3931: `1948`,
    3932: `1948`,
    3933: `1949`,
    3934: `1949`,
    3935: `1950`,
    3936: `1950`,
    3937: `1951`,
    3938: `1951`,
    3939: `1951`,
    394: `89`,
    3940: `1954`,
    3941: `1954`,
    3942: `1955`,
    3943: `1955`,
    3944: `1956`,
    3945: `1957`,
    3946: `1957`,
    3947: `1958`,
    3948: `1959`,
    3949: `1960`,
    395: `90`,
    3950: `1960`,
    3951: `1961`,
    3952: `1962`,
    3953: `1962`,
    3954: `1963`,
    3955: `1964`,
    3956: `1964`,
    3957: `1965`,
    3958: `1966`,
    3959: `1966`,
    396: `90`,
    3960: `1967`,
    3961: `1968`,
    3962: `1969`,
    3963: `1970`,
    3964: `1970`,
    3965: `1971`,
    3966: `1971`,
    3967: `1971`,
    3968: `1973`,
    3969: `1974`,
    397: `91`,
    3970: `1975`,
    3971: `1976`,
    3972: `1977`,
    3973: `1979`,
    3974: `1980`,
    3975: `1980`,
    3976: `1981`,
    3977: `1982`,
    3978: `1982`,
    3979: `1983`,
    398: `91`,
    3980: `1983`,
    3981: `1984`,
    3982: `1984`,
    3983: `1985`,
    3984: `1986`,
    3985: `1988`,
    3986: `1988`,
    3987: `1989`,
    3988: `1989`,
    3989: `1989`,
    399: `92`,
    3990: `1990`,
    3991: `1990`,
    3992: `1991`,
    3993: `1991`,
    3994: `1991`,
    3995: `1993`,
    3996: `1993`,
    3997: `1994`,
    3998: `1994`,
    3999: `1994`,
    4: `2`,
    40: `2`,
    400: `92`,
    4000: `1995`,
    4001: `1995`,
    4002: `1996`,
    4003: `1996`,
    4004: `1996`,
    4005: `1998`,
    4006: `1998`,
    4007: `1999`,
    4008: `1999`,
    4009: `1999`,
    401: `94`,
    4010: `2000`,
    4011: `2000`,
    4012: `2001`,
    4013: `2001`,
    4014: `2001`,
    4015: `2003`,
    4016: `2003`,
    4017: `2003`,
    4018: `2005`,
    4019: `2005`,
    402: `94`,
    4020: `2005`,
    4021: `2006`,
    4022: `2006`,
    4023: `2006`,
    4024: `2007`,
    4025: `2007`,
    4026: `2007`,
    4027: `2008`,
    4028: `2008`,
    4029: `2008`,
    403: `95`,
    4030: `2009`,
    4031: `2010`,
    4032: `2010`,
    4033: `2010`,
    4034: `2011`,
    4035: `2012`,
    4036: `2012`,
    4037: `2012`,
    4038: `2013`,
    4039: `2014`,
    404: `95`,
    4040: `2014`,
    4041: `2015`,
    4042: `2015`,
    4043: `2016`,
    4044: `2016`,
    4045: `2017`,
    4046: `2017`,
    4047: `2018`,
    4048: `2018`,
    4049: `2019`,
    405: `95`,
    4050: `2019`,
    4051: `2020`,
    4052: `2020`,
    4053: `2020`,
    4054: `2022`,
    4055: `2022`,
    4056: `2022`,
    4057: `2024`,
    4058: `2024`,
    4059: `2024`,
    406: `96`,
    4060: `2026`,
    4061: `2027`,
    4062: `2029`,
    4063: `2030`,
    4064: `2031`,
    4065: `2032`,
    4066: `2032`,
    4067: `2033`,
    4068: `2033`,
    4069: `2034`,
    407: `97`,
    4070: `2034`,
    4071: `2034`,
    4072: `2035`,
    4073: `2037`,
    4074: `2038`,
    4075: `2039`,
    4076: `2039`,
    4077: `2039`,
    4078: `2040`,
    4079: `2041`,
    408: `97`,
    4080: `2041`,
    4081: `2042`,
    4082: `2042`,
    4083: `2042`,
    4084: `2043`,
    4085: `2045`,
    4086: `2045`,
    4087: `2045`,
    4088: `2046`,
    4089: `2047`,
    409: `97`,
    4090: `2047`,
    4091: `2048`,
    4092: `2048`,
    4093: `2048`,
    4094: `2050`,
    4095: `2051`,
    4096: `2052`,
    4097: `2053`,
    4098: `2053`,
    4099: `2053`,
    41: `2`,
    410: `99`,
    4100: `2054`,
    4101: `2054`,
    4102: `2055`,
    4103: `2056`,
    4104: `2057`,
    4105: `2059`,
    4106: `2060`,
    4107: `2060`,
    4108: `2060`,
    4109: `2061`,
    411: `99`,
    4110: `2062`,
    4111: `2063`,
    4112: `2064`,
    4113: `2065`,
    4114: `2067`,
    4115: `2068`,
    4116: `2069`,
    4117: `2070`,
    4118: `2070`,
    4119: `2070`,
    412: `100`,
    4120: `2071`,
    4121: `2071`,
    4122: `2072`,
    4123: `2072`,
    4124: `2072`,
    4125: `2073`,
    4126: `2073`,
    4127: `2073`,
    4128: `2075`,
    4129: `2076`,
    413: `100`,
    4130: `2076`,
    4131: `2076`,
    4132: `2077`,
    4133: `2077`,
    4134: `2078`,
    4135: `2079`,
    4136: `2079`,
    4137: `2079`,
    4138: `2080`,
    4139: `2080`,
    414: `101`,
    4140: `2081`,
    4141: `2082`,
    4142: `2082`,
    4143: `2083`,
    4144: `2084`,
    4145: `2084`,
    4146: `2085`,
    4147: `2086`,
    4148: `2086`,
    4149: `2086`,
    415: `102`,
    4150: `2087`,
    4151: `2087`,
    4152: `2088`,
    4153: `2089`,
    4154: `2089`,
    4155: `2089`,
    4156: `2090`,
    4157: `2090`,
    4158: `2091`,
    4159: `2092`,
    416: `104`,
    4160: `2092`,
    4161: `2092`,
    4162: `2093`,
    4163: `2093`,
    4164: `2093`,
    4165: `2094`,
    4166: `2095`,
    4167: `2095`,
    4168: `2096`,
    4169: `2096`,
    417: `104`,
    4170: `2096`,
    4171: `2097`,
    4172: `2098`,
    4173: `2098`,
    4174: `2099`,
    4175: `2101`,
    4176: `2102`,
    4177: `2103`,
    4178: `2103`,
    4179: `2104`,
    418: `104`,
    4180: `2105`,
    4181: `2106`,
    4182: `2107`,
    4183: `2108`,
    4184: `2109`,
    4185: `2111`,
    4186: `2112`,
    4187: `2112`,
    4188: `2112`,
    4189: `2115`,
    419: `106`,
    4190: `2115`,
    4191: `2116`,
    4192: `2116`,
    4193: `2117`,
    4194: `2118`,
    4195: `2119`,
    4196: `2120`,
    4197: `2120`,
    4198: `2121`,
    4199: `2122`,
    42: `2`,
    420: `107`,
    4200: `2122`,
    4201: `2123`,
    4202: `2123`,
    4203: `2124`,
    4204: `2124`,
    4205: `2125`,
    4206: `2126`,
    4207: `2127`,
    4208: `2127`,
    4209: `2128`,
    421: `107`,
    4210: `2129`,
    4211: `2130`,
    4212: `2131`,
    4213: `2131`,
    4214: `2132`,
    4215: `2133`,
    4216: `2134`,
    4217: `2136`,
    4218: `2137`,
    4219: `2138`,
    422: `108`,
    4220: `2138`,
    4221: `2139`,
    4222: `2141`,
    4223: `2141`,
    4224: `2142`,
    4225: `2143`,
    4226: `2143`,
    4227: `2144`,
    4228: `2146`,
    4229: `2147`,
    423: `108`,
    4230: `2147`,
    4231: `2148`,
    4232: `2150`,
    4233: `2151`,
    4234: `2152`,
    4235: `2153`,
    4236: `2154`,
    4237: `2154`,
    4238: `2155`,
    4239: `2156`,
    424: `109`,
    4240: `2157`,
    4241: `2158`,
    4242: `2160`,
    4243: `2160`,
    4244: `2161`,
    4245: `2161`,
    4246: `2162`,
    4247: `2163`,
    4248: `2164`,
    4249: `2164`,
    425: `109`,
    4250: `2164`,
    4251: `2165`,
    4252: `2165`,
    4253: `2165`,
    4254: `2167`,
    4255: `2167`,
    4256: `2168`,
    4257: `2169`,
    4258: `2169`,
    4259: `2170`,
    426: `109`,
    4260: `2172`,
    4261: `2173`,
    4262: `2173`,
    4263: `2174`,
    427: `111`,
    428: `111`,
    429: `112`,
    43: `2`,
    430: `112`,
    431: `112`,
    432: `114`,
    433: `114`,
    434: `114`,
    435: `114`,
    436: `114`,
    437: `114`,
    438: `115`,
    439: `115`,
    44: `2`,
    440: `116`,
    441: `117`,
    442: `119`,
    443: `120`,
    444: `122`,
    445: `122`,
    446: `123`,
    447: `123`,
    448: `123`,
    449: `124`,
    45: `2`,
    450: `124`,
    451: `125`,
    452: `125`,
    453: `126`,
    454: `126`,
    455: `126`,
    456: `127`,
    457: `127`,
    458: `128`,
    459: `128`,
    46: `2`,
    460: `129`,
    461: `129`,
    462: `130`,
    463: `131`,
    464: `137`,
    465: `137`,
    466: `139`,
    467: `140`,
    468: `140`,
    469: `141`,
    47: `2`,
    470: `142`,
    471: `142`,
    472: `143`,
    473: `144`,
    474: `144`,
    475: `144`,
    476: `145`,
    477: `145`,
    478: `145`,
    479: `146`,
    48: `2`,
    480: `147`,
    481: `147`,
    482: `148`,
    483: `148`,
    484: `149`,
    485: `150`,
    486: `156`,
    487: `157`,
    488: `157`,
    489: `158`,
    49: `2`,
    490: `158`,
    491: `158`,
    492: `158`,
    493: `158`,
    494: `158`,
    495: `158`,
    496: `158`,
    497: `158`,
    498: `158`,
    499: `159`,
    5: `2`,
    50: `2`,
    500: `159`,
    501: `160`,
    502: `161`,
    503: `161`,
    504: `161`,
    505: `162`,
    506: `163`,
    507: `164`,
    508: `164`,
    509: `165`,
    51: `2`,
    510: `166`,
    511: `166`,
    512: `166`,
    513: `167`,
    514: `167`,
    515: `168`,
    516: `169`,
    517: `170`,
    518: `170`,
    519: `171`,
    52: `2`,
    520: `172`,
    521: `172`,
    522: `173`,
    523: `173`,
    524: `174`,
    525: `175`,
    526: `175`,
    527: `175`,
    528: `176`,
    529: `176`,
    53: `2`,
    530: `176`,
    531: `178`,
    532: `179`,
    533: `180`,
    534: `180`,
    535: `181`,
    536: `182`,
    537: `182`,
    538: `183`,
    539: `184`,
    54: `2`,
    540: `184`,
    541: `185`,
    542: `186`,
    543: `186`,
    544: `187`,
    545: `188`,
    546: `188`,
    547: `188`,
    548: `189`,
    549: `189`,
    55: `2`,
    550: `189`,
    551: `190`,
    552: `190`,
    553: `191`,
    554: `192`,
    555: `192`,
    556: `192`,
    557: `193`,
    558: `193`,
    559: `193`,
    56: `2`,
    560: `194`,
    561: `194`,
    562: `195`,
    563: `195`,
    564: `196`,
    565: `197`,
    566: `197`,
    567: `198`,
    568: `199`,
    569: `199`,
    57: `2`,
    570: `200`,
    571: `201`,
    572: `203`,
    573: `203`,
    574: `204`,
    575: `204`,
    576: `205`,
    577: `205`,
    578: `205`,
    579: `207`,
    58: `2`,
    580: `207`,
    581: `208`,
    582: `208`,
    583: `208`,
    584: `209`,
    585: `209`,
    586: `210`,
    587: `210`,
    588: `211`,
    589: `211`,
    59: `2`,
    590: `211`,
    591: `212`,
    592: `212`,
    593: `213`,
    594: `213`,
    595: `214`,
    596: `214`,
    597: `214`,
    598: `215`,
    599: `215`,
    6: `2`,
    60: `2`,
    600: `216`,
    601: `216`,
    602: `217`,
    603: `217`,
    604: `218`,
    605: `219`,
    606: `225`,
    607: `225`,
    608: `227`,
    609: `228`,
    61: `2`,
    610: `228`,
    611: `229`,
    612: `230`,
    613: `230`,
    614: `231`,
    615: `232`,
    616: `232`,
    617: `232`,
    618: `233`,
    619: `233`,
    62: `2`,
    620: `233`,
    621: `234`,
    622: `235`,
    623: `235`,
    624: `236`,
    625: `236`,
    626: `237`,
    627: `238`,
    628: `244`,
    629: `244`,
    63: `2`,
    630: `245`,
    631: `245`,
    632: `246`,
    633: `247`,
    634: `247`,
    635: `248`,
    636: `248`,
    637: `250`,
    638: `251`,
    639: `251`,
    64: `2`,
    640: `252`,
    641: `253`,
    642: `253`,
    643: `254`,
    644: `255`,
    645: `256`,
    646: `256`,
    647: `256`,
    648: `257`,
    649: `257`,
    65: `2`,
    650: `257`,
    651: `258`,
    652: `259`,
    653: `259`,
    654: `260`,
    655: `260`,
    656: `261`,
    657: `262`,
    658: `268`,
    659: `269`,
    66: `2`,
    660: `270`,
    661: `270`,
    662: `271`,
    663: `272`,
    664: `272`,
    665: `273`,
    666: `273`,
    667: `274`,
    668: `275`,
    669: `275`,
    67: `2`,
    670: `275`,
    671: `276`,
    672: `276`,
    673: `276`,
    674: `278`,
    675: `279`,
    676: `280`,
    677: `280`,
    678: `281`,
    679: `282`,
    68: `2`,
    680: `282`,
    681: `283`,
    682: `284`,
    683: `284`,
    684: `285`,
    685: `286`,
    686: `286`,
    687: `287`,
    688: `288`,
    689: `288`,
    69: `2`,
    690: `288`,
    691: `289`,
    692: `289`,
    693: `289`,
    694: `290`,
    695: `290`,
    696: `291`,
    697: `292`,
    698: `292`,
    699: `292`,
    7: `2`,
    70: `2`,
    700: `293`,
    701: `293`,
    702: `293`,
    703: `294`,
    704: `294`,
    705: `295`,
    706: `295`,
    707: `296`,
    708: `297`,
    709: `297`,
    71: `2`,
    710: `298`,
    711: `299`,
    712: `299`,
    713: `300`,
    714: `301`,
    715: `303`,
    716: `303`,
    717: `304`,
    718: `304`,
    719: `305`,
    72: `2`,
    720: `306`,
    721: `306`,
    722: `306`,
    723: `307`,
    724: `307`,
    725: `308`,
    726: `308`,
    727: `309`,
    728: `310`,
    729: `310`,
    73: `2`,
    730: `311`,
    731: `312`,
    732: `313`,
    733: `313`,
    734: `314`,
    735: `314`,
    736: `314`,
    737: `315`,
    738: `315`,
    739: `316`,
    74: `2`,
    740: `316`,
    741: `317`,
    742: `318`,
    743: `318`,
    744: `319`,
    745: `320`,
    746: `320`,
    747: `321`,
    748: `322`,
    749: `324`,
    75: `2`,
    750: `325`,
    751: `325`,
    752: `326`,
    753: `326`,
    754: `326`,
    755: `326`,
    756: `326`,
    757: `326`,
    758: `326`,
    759: `326`,
    76: `2`,
    760: `326`,
    761: `326`,
    762: `327`,
    763: `327`,
    764: `328`,
    765: `329`,
    766: `329`,
    767: `329`,
    768: `330`,
    769: `331`,
    77: `2`,
    770: `332`,
    771: `332`,
    772: `333`,
    773: `334`,
    774: `334`,
    775: `334`,
    776: `335`,
    777: `335`,
    778: `336`,
    779: `336`,
    78: `2`,
    780: `337`,
    781: `337`,
    782: `338`,
    783: `338`,
    784: `338`,
    785: `340`,
    786: `340`,
    787: `341`,
    788: `341`,
    789: `341`,
    79: `2`,
    790: `342`,
    791: `342`,
    792: `344`,
    793: `345`,
    794: `345`,
    795: `346`,
    796: `347`,
    797: `347`,
    798: `348`,
    799: `349`,
    8: `2`,
    80: `2`,
    800: `349`,
    801: `349`,
    802: `350`,
    803: `351`,
    804: `352`,
    805: `353`,
    806: `354`,
    807: `359`,
    808: `360`,
    809: `361`,
    81: `2`,
    810: `361`,
    811: `362`,
    812: `363`,
    813: `363`,
    814: `364`,
    815: `364`,
    816: `364`,
    817: `365`,
    818: `366`,
    819: `366`,
    82: `2`,
    820: `367`,
    821: `367`,
    822: `367`,
    823: `367`,
    824: `367`,
    825: `367`,
    826: `367`,
    827: `367`,
    828: `367`,
    829: `367`,
    83: `2`,
    830: `368`,
    831: `368`,
    832: `369`,
    833: `370`,
    834: `370`,
    835: `370`,
    836: `371`,
    837: `372`,
    838: `373`,
    839: `373`,
    84: `2`,
    840: `374`,
    841: `375`,
    842: `375`,
    843: `375`,
    844: `376`,
    845: `376`,
    846: `377`,
    847: `377`,
    848: `378`,
    849: `378`,
    85: `2`,
    850: `379`,
    851: `379`,
    852: `379`,
    853: `381`,
    854: `381`,
    855: `382`,
    856: `382`,
    857: `382`,
    858: `383`,
    859: `383`,
    86: `2`,
    860: `384`,
    861: `384`,
    862: `384`,
    863: `385`,
    864: `386`,
    865: `386`,
    866: `388`,
    867: `389`,
    868: `389`,
    869: `390`,
    87: `2`,
    870: `391`,
    871: `391`,
    872: `392`,
    873: `393`,
    874: `394`,
    875: `394`,
    876: `394`,
    877: `395`,
    878: `396`,
    879: `396`,
    88: `2`,
    880: `397`,
    881: `398`,
    882: `399`,
    883: `400`,
    884: `401`,
    885: `406`,
    886: `406`,
    887: `407`,
    888: `407`,
    889: `408`,
    89: `2`,
    890: `408`,
    891: `408`,
    892: `409`,
    893: `409`,
    894: `410`,
    895: `411`,
    896: `416`,
    897: `416`,
    898: `417`,
    899: `418`,
    9: `2`,
    90: `2`,
    900: `418`,
    901: `419`,
    902: `420`,
    903: `421`,
    904: `421`,
    905: `421`,
    906: `422`,
    907: `423`,
    908: `423`,
    909: `424`,
    91: `4`,
    910: `424`,
    911: `424`,
    912: `424`,
    913: `424`,
    914: `424`,
    915: `424`,
    916: `424`,
    917: `424`,
    918: `424`,
    919: `425`,
    92: `4`,
    920: `425`,
    921: `426`,
    922: `427`,
    923: `427`,
    924: `427`,
    925: `428`,
    926: `429`,
    927: `430`,
    928: `430`,
    929: `431`,
    93: `5`,
    930: `432`,
    931: `432`,
    932: `432`,
    933: `433`,
    934: `433`,
    935: `434`,
    936: `434`,
    937: `435`,
    938: `435`,
    939: `436`,
    94: `5`,
    940: `436`,
    941: `436`,
    942: `438`,
    943: `438`,
    944: `439`,
    945: `439`,
    946: `439`,
    947: `440`,
    948: `441`,
    949: `441`,
    95: `5`,
    950: `442`,
    951: `442`,
    952: `443`,
    953: `444`,
    954: `450`,
    955: `451`,
    956: `451`,
    957: `452`,
    958: `453`,
    959: `453`,
    96: `6`,
    960: `454`,
    961: `455`,
    962: `455`,
    963: `455`,
    964: `456`,
    965: `457`,
    966: `457`,
    967: `458`,
    968: `459`,
    969: `460`,
    97: `7`,
    970: `461`,
    971: `462`,
    972: `467`,
    973: `467`,
    974: `468`,
    975: `468`,
    976: `469`,
    977: `469`,
    978: `469`,
    979: `470`,
    98: `8`,
    980: `470`,
    981: `471`,
    982: `472`,
    983: `477`,
    984: `478`,
    985: `479`,
    986: `479`,
    987: `480`,
    988: `481`,
    989: `481`,
    99: `9`,
    990: `481`,
    991: `482`,
    992: `483`,
    993: `483`,
    994: `484`,
    995: `484`,
    996: `484`,
    997: `484`,
    998: `484`,
    999: `484`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 5,
  stateSize: 588,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './wNT200.rsh:434:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './wNT200.rsh:136:31:after expr stmt semicolon',
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
  "createBalanceBox": createBalanceBox,
  "deleteAllowanceBox": deleteAllowanceBox,
  "deleteBalanceBox": deleteBalanceBox,
  "deposit": deposit,
  "deregister": deregister,
  "destroy": destroy,
  "grant": grant,
  "register": register,
  "touch": touch,
  "withdraw": withdraw
  };
export const _APIs = {
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  createBalanceBox: createBalanceBox,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  deposit: deposit,
  deregister: deregister,
  destroy: destroy,
  grant: grant,
  register: register,
  touch: touch,
  withdraw: withdraw
  };
