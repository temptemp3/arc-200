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
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Object({
    closed: ctc5,
    decimals: ctc1,
    enableZeroAddressBurn: ctc5,
    manager: ctc0,
    name: ctc2,
    symbol: ctc3,
    tokenAmount: ctc1,
    totalSupply: ctc6,
    zeroAddress: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc9 = stdlib.T_Struct([['name', ctc2], ['symbol', ctc3], ['decimals', ctc1], ['totalSupply', ctc6], ['zeroAddress', ctc0], ['manager', ctc0], ['enableZeroAddressBurn', ctc5], ['closed', ctc5], ['tokenAmount', ctc1]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc6
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
      return (await ((async (_v11138, _v11139 ) => {
          const v11138 = stdlib.protect(ctc0, _v11138, null);
          const v11139 = stdlib.protect(ctc0, _v11139, null);
        
        const v11140 = [v11138, v11139];
        const v11141 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v11140, ctc6), null);
        const v11142 = stdlib.fromSome(v11141, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v11142;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
      return (await ((async (_v11135 ) => {
          const v11135 = stdlib.protect(ctc0, _v11135, null);
        
        const v11136 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v11135, ctc6), null);
        const v11137 = stdlib.fromSome(v11136, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v11137;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
      return (await ((async () => {
        
        
        return v11090;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
      return (await ((async () => {
        
        const v11098 = v11087.name;
        
        return v11098;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
      return (await ((async () => {
        
        const v11124 = v11105.name;
        const v11125 = v11105.symbol;
        const v11126 = v11105.decimals;
        const v11127 = v11105.totalSupply;
        const v11128 = v11105.zeroAddress;
        const v11129 = v11105.manager;
        const v11130 = v11105.enableZeroAddressBurn;
        const v11131 = v11105.closed;
        const v11132 = v11105.tokenAmount;
        const v11133 = {
          closed: v11131,
          decimals: v11126,
          enableZeroAddressBurn: v11130,
          manager: v11129,
          name: v11124,
          symbol: v11125,
          tokenAmount: v11132,
          totalSupply: v11127,
          zeroAddress: v11128
          };
        
        return v11133;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
      return (await ((async () => {
        
        const v11099 = v11087.symbol;
        
        return v11099;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v11085, v11087, v11090, v11093, v11105] = svs;
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
        rng: ctc6
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0],
        rng: ctc6
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
        rng: ctc9
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc3
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc6
        }
      },
    views: {
      3: [ctc0, ctc4, ctc1, ctc0, ctc7]
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
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    meta: ctc7,
    zeroAddress: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc10,
    deleteAllowanceBox0_9567: ctc11,
    deleteBalanceBox0_9567: ctc12,
    deposit0_9567: ctc13,
    destroy0_9567: ctc14,
    transfer0_9567: ctc10,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc13
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
  
  
  const v11069 = stdlib.protect(ctc9, interact.params, 'for Deployer\'s interact field params');
  const v11070 = v11069.enableZeroAddressBurn;
  const v11071 = v11069.meta;
  const v11072 = v11069.zeroAddress;
  const v11073 = v11071.decimals;
  
  const v11082 = stdlib.le(v11073, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v11082, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v11072, v11070, v11071],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:82:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc3, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11085, v11086, v11087], secs: v11089, time: v11088, didSend: v9426, from: v11084 } = txn1;
      
      const v11090 = v11087.decimals;
      ;
      const v11093 = await ctc.getContractAddress();
      await stdlib.simMapSet(sim_r, 0, ctc8, v11093, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc8, v11085, ctc1, stdlib.checkedBigNumberify('./index.rsh:103:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11095 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      const v11096 = await ctc.getContractInfo();
      
      const v11102 = v11087.name;
      const v11103 = v11087.symbol;
      const v11104 = {
        closed: false,
        decimals: v11090,
        enableZeroAddressBurn: v11086,
        manager: v11093,
        name: v11102,
        symbol: v11103,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        zeroAddress: v11085
        };
      const v11105 = v11104;
      const v11106 = v11088;
      
      if (await (async () => {
        const v11122 = v11105.closed;
        const v11123 = v11122 ? false : true;
        
        return v11123;})()) {
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
    tys: [ctc8, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v11085, v11086, v11087], secs: v11089, time: v11088, didSend: v9426, from: v11084 } = txn1;
  const v11090 = v11087.decimals;
  const v11091 = stdlib.le(v11090, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v11091, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 19',
    who: 'Deployer'
    });
  ;
  const v11093 = await ctc.getContractAddress();
  await stdlib.mapSet(map0, ctc8, v11093, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc8, v11085, ctc1, stdlib.checkedBigNumberify('./index.rsh:103:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11095 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  const v11096 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v11096), {
    at: './index.rsh:106:21:application',
    fs: ['at ./index.rsh:106:21:application call to [unknown function] (defined at: ./index.rsh:106:21:function exp)', 'at ./index.rsh:106:21:application call to "liftedInteract" (defined at: ./index.rsh:106:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v11102 = v11087.name;
  const v11103 = v11087.symbol;
  const v11104 = {
    closed: false,
    decimals: v11090,
    enableZeroAddressBurn: v11086,
    manager: v11093,
    name: v11102,
    symbol: v11103,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    zeroAddress: v11085
    };
  let v11105 = v11104;
  let v11106 = v11088;
  
  let txn2 = txn1;
  while (await (async () => {
    const v11122 = v11105.closed;
    const v11123 = v11122 ? false : true;
    
    return v11123;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn3;
    switch (v11329[0]) {
      case 'approve0_9567': {
        const v11332 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v11348 = v11332[stdlib.checkedBigNumberify('./index.rsh:202:12:spread', stdlib.UInt_max, '0')];
        const v11349 = v11332[stdlib.checkedBigNumberify('./index.rsh:202:12:spread', stdlib.UInt_max, '1')];
        const v11350 = stdlib.addressEq(v11328, v11085);
        const v11351 = v11350 ? false : true;
        stdlib.assert(v11351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:15:application call to [unknown function] (defined at: ./index.rsh:206:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v11353 = stdlib.addressEq(v11348, v11085);
        const v11354 = v11353 ? false : true;
        stdlib.assert(v11354, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:15:application call to [unknown function] (defined at: ./index.rsh:206:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v11358 = [v11328, v11348];
        await stdlib.mapSet(map1, ctc11, v11358, ctc1, v11349);
        null;
        const v11359 = true;
        await txn3.getOutput('approve', 'v11359', ctc3, v11359);
        const cv11105 = v11105;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_9567': {
        const v11605 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v11642 = v11605[stdlib.checkedBigNumberify('./index.rsh:276:12:spread', stdlib.UInt_max, '0')];
        const v11643 = v11605[stdlib.checkedBigNumberify('./index.rsh:276:12:spread', stdlib.UInt_max, '1')];
        const v11644 = [v11642, v11643];
        const v11645 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v11644, ctc1), null);
        const v11646 = {
          None: 0,
          Some: 1
          }[v11645[0]];
        const v11647 = stdlib.eq(v11646, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v11647, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:277:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:15:application call to [unknown function] (defined at: ./index.rsh:286:15:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v11651 = stdlib.fromSome(v11645, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11652 = stdlib.eq256(v11651, stdlib.checkedBigNumberify('./index.rsh:282:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v11652, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:281:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:15:application call to [unknown function] (defined at: ./index.rsh:286:15:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc11, v11644, ctc1, undefined /* Nothing */);
        const v11657 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v11657', ctc3, v11657);
        const cv11105 = v11105;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_9567': {
        const v11878 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v11940 = v11878[stdlib.checkedBigNumberify('./index.rsh:254:12:spread', stdlib.UInt_max, '0')];
        const v11941 = stdlib.addressEq(v11940, v11085);
        const v11942 = v11941 ? false : true;
        stdlib.assert(v11942, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:255:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v11944 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11940, ctc1), null);
        const v11945 = {
          None: 0,
          Some: 1
          }[v11944[0]];
        const v11946 = stdlib.eq(v11945, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v11946, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:259:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v11949 = stdlib.fromSome(v11944, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11950 = stdlib.eq256(v11949, stdlib.checkedBigNumberify('./index.rsh:261:45:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v11950, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:260:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v11940, ctc1, undefined /* Nothing */);
        const v11953 = true;
        await txn3.getOutput('deleteBalanceBox', 'v11953', ctc3, v11953);
        const cv11105 = v11105;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deposit0_9567': {
        const v12151 = v11329[1];
        undefined /* setApiDetails */;
        const v12159 = v12151[stdlib.checkedBigNumberify('./index.rsh:214:12:spread', stdlib.UInt_max, '0')];
        ;
        const v12238 = stdlib.cast("UInt", "UInt256", v12159, false, true);
        const v12239 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11093, ctc1), null);
        const v12240 = stdlib.fromSome(v12239, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v12241 = stdlib.safeSub256(v12240, v12238);
        await stdlib.mapSet(map0, ctc8, v11093, ctc1, v12241);
        const v12242 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11328, ctc1), null);
        const v12243 = stdlib.fromSome(v12242, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v12244 = stdlib.safeAdd256(v12243, v12238);
        await stdlib.mapSet(map0, ctc8, v11328, ctc1, v12244);
        null;
        const v12249 = stdlib.safeAdd256(v12244, v12238);
        await txn3.getOutput('deposit', 'v12249', ctc1, v12249);
        const v12256 = v11105.closed;
        const v12257 = v11105.decimals;
        const v12258 = v11105.enableZeroAddressBurn;
        const v12259 = v11105.manager;
        const v12260 = v11105.name;
        const v12261 = v11105.symbol;
        const v12262 = v11105.tokenAmount;
        const v12263 = v11105.totalSupply;
        const v12264 = v11105.zeroAddress;
        const v12266 = stdlib.safeAdd(v12262, v12159);
        const v12267 = {
          closed: v12256,
          decimals: v12257,
          enableZeroAddressBurn: v12258,
          manager: v12259,
          name: v12260,
          symbol: v12261,
          tokenAmount: v12266,
          totalSupply: v12263,
          zeroAddress: v12264
          };
        const cv11105 = v12267;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_9567': {
        const v12424 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v12544 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v12545 = {
          None: 0,
          Some: 1
          }[v12544[0]];
        const v12546 = stdlib.eq(v12545, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v12546, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:299:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:305:15:application call to [unknown function] (defined at: ./index.rsh:305:15:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        const v12548 = v11105.tokenAmount;
        const v12549 = stdlib.eq(v12548, stdlib.checkedBigNumberify('./index.rsh:303:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v12549, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:305:15:application call to [unknown function] (defined at: ./index.rsh:305:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc8, v11085, ctc1, undefined /* Nothing */);
        const v12551 = null;
        await txn3.getOutput('destroy', 'v12551', ctc0, v12551);
        const v12558 = v11105.decimals;
        const v12559 = v11105.enableZeroAddressBurn;
        const v12560 = v11105.manager;
        const v12561 = v11105.name;
        const v12562 = v11105.symbol;
        const v12564 = v11105.totalSupply;
        const v12565 = v11105.zeroAddress;
        const v12566 = {
          closed: true,
          decimals: v12558,
          enableZeroAddressBurn: v12559,
          manager: v12560,
          name: v12561,
          symbol: v12562,
          tokenAmount: v12548,
          totalSupply: v12564,
          zeroAddress: v12565
          };
        const cv11105 = v12566;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_9567': {
        const v12697 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v12843 = v12697[stdlib.checkedBigNumberify('./index.rsh:161:12:spread', stdlib.UInt_max, '0')];
        const v12844 = v12697[stdlib.checkedBigNumberify('./index.rsh:161:12:spread', stdlib.UInt_max, '1')];
        const v12845 = stdlib.addressEq(v12843, v11085);
        const v12846 = v12845 ? false : true;
        stdlib.assert(v12846, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:162:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v12848 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11328, ctc1), null);
        const v12849 = stdlib.fromSome(v12848, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v12850 = stdlib.ge256(v12849, v12844);
        stdlib.assert(v12850, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:163:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v12856 = stdlib.safeSub256(v12849, v12844);
        await stdlib.mapSet(map0, ctc8, v11328, ctc1, v12856);
        const v12857 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v12843, ctc1), null);
        const v12858 = stdlib.fromSome(v12857, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v12859 = stdlib.safeAdd256(v12858, v12844);
        await stdlib.mapSet(map0, ctc8, v12843, ctc1, v12859);
        null;
        const v12861 = true;
        await txn3.getOutput('transfer', 'v12861', ctc3, v12861);
        const cv11105 = v11105;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_9567': {
        const v12970 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v13144 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '0')];
        const v13145 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '1')];
        const v13146 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '2')];
        const v13147 = stdlib.addressEq(v13144, v11085);
        const v13148 = v13147 ? false : true;
        stdlib.assert(v13148, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:180:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v13150 = stdlib.addressEq(v13145, v11085);
        const v13151 = v13150 ? false : true;
        stdlib.assert(v13151, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v13153 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v13144, ctc1), null);
        const v13154 = stdlib.fromSome(v13153, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13155 = stdlib.ge256(v13154, v13146);
        stdlib.assert(v13155, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v13157 = [v13144, v11328];
        const v13158 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v13157, ctc1), null);
        const v13159 = stdlib.fromSome(v13158, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13160 = stdlib.ge256(v13159, v13146);
        stdlib.assert(v13160, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v13167 = stdlib.safeSub256(v13154, v13146);
        await stdlib.mapSet(map0, ctc8, v13144, ctc1, v13167);
        const v13168 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v13145, ctc1), null);
        const v13169 = stdlib.fromSome(v13168, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13170 = stdlib.safeAdd256(v13169, v13146);
        await stdlib.mapSet(map0, ctc8, v13145, ctc1, v13170);
        null;
        const v13175 = stdlib.safeSub256(v13159, v13146);
        await stdlib.mapSet(map1, ctc11, v13157, ctc1, v13175);
        null;
        const v13178 = true;
        await txn3.getOutput('transferFrom', 'v13178', ctc3, v13178);
        const cv11105 = v11105;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_9567': {
        const v13243 = v11329[1];
        undefined /* setApiDetails */;
        ;
        const v13462 = v13243[stdlib.checkedBigNumberify('./index.rsh:229:12:spread', stdlib.UInt_max, '0')];
        const v13463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11328, ctc1), null);
        const v13464 = stdlib.fromSome(v13463, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13465 = stdlib.cast("UInt", "UInt256", v13462, false, true);
        const v13466 = stdlib.ge256(v13464, v13465);
        stdlib.assert(v13466, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:230:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:15:application call to [unknown function] (defined at: ./index.rsh:236:15:function exp)'],
          msg: 'Withdraw: insufficient balance',
          who: 'Deployer'
          });
        const v13468 = v11105.tokenAmount;
        const v13469 = stdlib.ge(v13468, v13462);
        stdlib.assert(v13469, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:234:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:15:application call to [unknown function] (defined at: ./index.rsh:236:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v13477 = stdlib.safeSub256(v13464, v13465);
        await stdlib.mapSet(map0, ctc8, v11328, ctc1, v13477);
        const v13478 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11093, ctc1), null);
        const v13479 = stdlib.fromSome(v13478, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13480 = stdlib.safeAdd256(v13479, v13465);
        await stdlib.mapSet(map0, ctc8, v11093, ctc1, v13480);
        null;
        const v13482 = [v11328, v11093];
        const v13483 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v13482, ctc1), null);
        const v13484 = stdlib.fromSome(v13483, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13485 = stdlib.safeSub256(v13484, v13465);
        await stdlib.mapSet(map1, ctc11, v13482, ctc1, v13485);
        null;
        ;
        const v13492 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v11328, ctc1), null);
        const v13493 = stdlib.fromSome(v13492, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v13495 = stdlib.safeSub256(v13493, v13465);
        await txn3.getOutput('withdraw', 'v13495', ctc1, v13495);
        const v13502 = v11105.closed;
        const v13503 = v11105.decimals;
        const v13504 = v11105.enableZeroAddressBurn;
        const v13505 = v11105.manager;
        const v13506 = v11105.name;
        const v13507 = v11105.symbol;
        const v13509 = v11105.totalSupply;
        const v13510 = v11105.zeroAddress;
        const v13512 = stdlib.safeSub(v13468, v13462);
        const v13513 = {
          closed: v13502,
          decimals: v13503,
          enableZeroAddressBurn: v13504,
          manager: v13505,
          name: v13506,
          symbol: v13507,
          tokenAmount: v13512,
          totalSupply: v13509,
          zeroAddress: v13510
          };
        const cv11105 = v13513;
        const cv11106 = v11330;
        
        v11105 = cv11105;
        v11106 = cv11106;
        
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc10,
    deleteAllowanceBox0_9567: ctc11,
    deleteBalanceBox0_9567: ctc12,
    deposit0_9567: ctc13,
    destroy0_9567: ctc14,
    transfer0_9567: ctc10,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc13
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11201 = ctc.selfAddress();
  const v11203 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:202:47:application call to [unknown function] (defined at: ./index.rsh:202:47:function exp)', 'at ./index.rsh:123:31:application call to "runapprove0_9567" (defined at: ./index.rsh:202:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v11204 = v11203[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11208 = stdlib.addressEq(v11201, v11085);
  const v11209 = v11208 ? false : true;
  stdlib.assert(v11209, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:47:application call to [unknown function] (defined at: ./index.rsh:202:47:function exp)', 'at ./index.rsh:123:31:application call to "runapprove0_9567" (defined at: ./index.rsh:202:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v11211 = stdlib.addressEq(v11204, v11085);
  const v11212 = v11211 ? false : true;
  stdlib.assert(v11212, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:204:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:202:47:application call to [unknown function] (defined at: ./index.rsh:202:47:function exp)', 'at ./index.rsh:123:31:application call to "runapprove0_9567" (defined at: ./index.rsh:202:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v11221 = ['approve0_9567', v11203];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11221],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:202:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v11348 = v11332[stdlib.checkedBigNumberify('./index.rsh:202:12:spread', stdlib.UInt_max, '0')];
          const v11349 = v11332[stdlib.checkedBigNumberify('./index.rsh:202:12:spread', stdlib.UInt_max, '1')];
          const v11358 = [v11328, v11348];
          await stdlib.simMapSet(sim_r, 1, ctc11, v11358, ctc1, v11349);
          null;
          const v11359 = true;
          const v11360 = await txn1.getOutput('approve', 'v11359', ctc8, v11359);
          
          const v16365 = v11105;
          const v16367 = v11105.closed;
          if (v16367) {
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
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v11348 = v11332[stdlib.checkedBigNumberify('./index.rsh:202:12:spread', stdlib.UInt_max, '0')];
      const v11349 = v11332[stdlib.checkedBigNumberify('./index.rsh:202:12:spread', stdlib.UInt_max, '1')];
      const v11350 = stdlib.addressEq(v11328, v11085);
      const v11351 = v11350 ? false : true;
      stdlib.assert(v11351, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:15:application call to [unknown function] (defined at: ./index.rsh:206:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v11353 = stdlib.addressEq(v11348, v11085);
      const v11354 = v11353 ? false : true;
      stdlib.assert(v11354, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:204:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:15:application call to [unknown function] (defined at: ./index.rsh:206:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v11358 = [v11328, v11348];
      await stdlib.mapSet(map1, ctc11, v11358, ctc1, v11349);
      null;
      const v11359 = true;
      const v11360 = await txn1.getOutput('approve', 'v11359', ctc8, v11359);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v11332, v11360), {
          at: './index.rsh:202:13:application',
          fs: ['at ./index.rsh:202:13:application call to [unknown function] (defined at: ./index.rsh:202:13:function exp)', 'at ./index.rsh:209:14:application call to "k" (defined at: ./index.rsh:206:15:function exp)', 'at ./index.rsh:206:15:application call to [unknown function] (defined at: ./index.rsh:206:15:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v16365 = v11105;
      const v16367 = v11105.closed;
      if (v16367) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc11,
    deleteAllowanceBox0_9567: ctc10,
    deleteBalanceBox0_9567: ctc12,
    deposit0_9567: ctc13,
    destroy0_9567: ctc14,
    transfer0_9567: ctc11,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc13
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11280 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:276:55:application call to [unknown function] (defined at: ./index.rsh:276:55:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteAllowanceBox0_9567" (defined at: ./index.rsh:276:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v11281 = v11280[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11282 = v11280[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11285 = [v11281, v11282];
  const v11286 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v11285, ctc1), null);
  const v11287 = {
    None: 0,
    Some: 1
    }[v11286[0]];
  const v11288 = stdlib.eq(v11287, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v11288, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:277:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:276:55:application call to [unknown function] (defined at: ./index.rsh:276:55:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteAllowanceBox0_9567" (defined at: ./index.rsh:276:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v11292 = stdlib.fromSome(v11286, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11293 = stdlib.eq256(v11292, stdlib.checkedBigNumberify('./index.rsh:282:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v11293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:281:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:276:55:application call to [unknown function] (defined at: ./index.rsh:276:55:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteAllowanceBox0_9567" (defined at: ./index.rsh:276:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v11302 = ['deleteAllowanceBox0_9567', v11280];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11302],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:276:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v11642 = v11605[stdlib.checkedBigNumberify('./index.rsh:276:12:spread', stdlib.UInt_max, '0')];
          const v11643 = v11605[stdlib.checkedBigNumberify('./index.rsh:276:12:spread', stdlib.UInt_max, '1')];
          const v11644 = [v11642, v11643];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v11644, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc10, v11644, ctc1, undefined /* Nothing */);
          const v11657 = true;
          const v11658 = await txn1.getOutput('deleteAllowanceBox', 'v11657', ctc8, v11657);
          
          const v16401 = v11105;
          const v16403 = v11105.closed;
          if (v16403) {
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
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v11642 = v11605[stdlib.checkedBigNumberify('./index.rsh:276:12:spread', stdlib.UInt_max, '0')];
      const v11643 = v11605[stdlib.checkedBigNumberify('./index.rsh:276:12:spread', stdlib.UInt_max, '1')];
      const v11644 = [v11642, v11643];
      const v11645 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v11644, ctc1), null);
      const v11646 = {
        None: 0,
        Some: 1
        }[v11645[0]];
      const v11647 = stdlib.eq(v11646, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v11647, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:277:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:15:application call to [unknown function] (defined at: ./index.rsh:286:15:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v11651 = stdlib.fromSome(v11645, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11652 = stdlib.eq256(v11651, stdlib.checkedBigNumberify('./index.rsh:282:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v11652, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:281:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:286:15:application call to [unknown function] (defined at: ./index.rsh:286:15:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc10, v11644, ctc1, undefined /* Nothing */);
      const v11657 = true;
      const v11658 = await txn1.getOutput('deleteAllowanceBox', 'v11657', ctc8, v11657);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v11605, v11658), {
          at: './index.rsh:276:13:application',
          fs: ['at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:288:14:application call to "k" (defined at: ./index.rsh:286:15:function exp)', 'at ./index.rsh:286:15:application call to [unknown function] (defined at: ./index.rsh:286:15:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v16401 = v11105;
      const v16403 = v11105.closed;
      if (v16403) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc11,
    deleteAllowanceBox0_9567: ctc12,
    deleteBalanceBox0_9567: ctc10,
    deposit0_9567: ctc13,
    destroy0_9567: ctc14,
    transfer0_9567: ctc11,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc13
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11257 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:254:43:application call to [unknown function] (defined at: ./index.rsh:254:43:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteBalanceBox0_9567" (defined at: ./index.rsh:254:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v11258 = v11257[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11260 = stdlib.addressEq(v11258, v11085);
  const v11261 = v11260 ? false : true;
  stdlib.assert(v11261, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:255:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:254:43:application call to [unknown function] (defined at: ./index.rsh:254:43:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteBalanceBox0_9567" (defined at: ./index.rsh:254:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v11263 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11258, ctc1), null);
  const v11264 = {
    None: 0,
    Some: 1
    }[v11263[0]];
  const v11265 = stdlib.eq(v11264, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v11265, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:259:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:254:43:application call to [unknown function] (defined at: ./index.rsh:254:43:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteBalanceBox0_9567" (defined at: ./index.rsh:254:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v11268 = stdlib.fromSome(v11263, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11269 = stdlib.eq256(v11268, stdlib.checkedBigNumberify('./index.rsh:261:45:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v11269, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:260:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:254:43:application call to [unknown function] (defined at: ./index.rsh:254:43:function exp)', 'at ./index.rsh:123:31:application call to "rundeleteBalanceBox0_9567" (defined at: ./index.rsh:254:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v11276 = ['deleteBalanceBox0_9567', v11257];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11276],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:254:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v11940 = v11878[stdlib.checkedBigNumberify('./index.rsh:254:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11940, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v11940, ctc1, undefined /* Nothing */);
          const v11953 = true;
          const v11954 = await txn1.getOutput('deleteBalanceBox', 'v11953', ctc8, v11953);
          
          const v16437 = v11105;
          const v16439 = v11105.closed;
          if (v16439) {
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
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v11940 = v11878[stdlib.checkedBigNumberify('./index.rsh:254:12:spread', stdlib.UInt_max, '0')];
      const v11941 = stdlib.addressEq(v11940, v11085);
      const v11942 = v11941 ? false : true;
      stdlib.assert(v11942, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:255:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v11944 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11940, ctc1), null);
      const v11945 = {
        None: 0,
        Some: 1
        }[v11944[0]];
      const v11946 = stdlib.eq(v11945, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v11946, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:259:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v11949 = stdlib.fromSome(v11944, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11950 = stdlib.eq256(v11949, stdlib.checkedBigNumberify('./index.rsh:261:45:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v11950, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:260:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v11940, ctc1, undefined /* Nothing */);
      const v11953 = true;
      const v11954 = await txn1.getOutput('deleteBalanceBox', 'v11953', ctc8, v11953);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v11878, v11954), {
          at: './index.rsh:254:13:application',
          fs: ['at ./index.rsh:254:13:application call to [unknown function] (defined at: ./index.rsh:254:13:function exp)', 'at ./index.rsh:267:14:application call to "k" (defined at: ./index.rsh:265:15:function exp)', 'at ./index.rsh:265:15:application call to [unknown function] (defined at: ./index.rsh:265:15:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v16437 = v11105;
      const v16439 = v11105.closed;
      if (v16439) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc11,
    deleteAllowanceBox0_9567: ctc12,
    deleteBalanceBox0_9567: ctc13,
    deposit0_9567: ctc10,
    destroy0_9567: ctc14,
    transfer0_9567: ctc11,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc10
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11225 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:214:35:application call to [unknown function] (defined at: ./index.rsh:214:35:function exp)', 'at ./index.rsh:123:31:application call to "rundeposit0_9567" (defined at: ./index.rsh:214:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v11226 = v11225[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11233 = ['deposit0_9567', v11225];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11233],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v11226, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v12159 = v12151[stdlib.checkedBigNumberify('./index.rsh:214:12:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v12159,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v12238 = stdlib.cast("UInt", "UInt256", v12159, false, true);
          const v12239 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11093, ctc1), null);
          const v12240 = stdlib.fromSome(v12239, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v12241 = stdlib.safeSub256(v12240, v12238);
          await stdlib.simMapSet(sim_r, 0, ctc3, v11093, ctc1, v12241);
          const v12242 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11328, ctc1), null);
          const v12243 = stdlib.fromSome(v12242, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v12244 = stdlib.safeAdd256(v12243, v12238);
          await stdlib.simMapSet(sim_r, 0, ctc3, v11328, ctc1, v12244);
          null;
          const v12249 = stdlib.safeAdd256(v12244, v12238);
          const v12250 = await txn1.getOutput('deposit', 'v12249', ctc1, v12249);
          
          const v12256 = v11105.closed;
          const v12257 = v11105.decimals;
          const v12258 = v11105.enableZeroAddressBurn;
          const v12259 = v11105.manager;
          const v12260 = v11105.name;
          const v12261 = v11105.symbol;
          const v12262 = v11105.tokenAmount;
          const v12263 = v11105.totalSupply;
          const v12264 = v11105.zeroAddress;
          const v12266 = stdlib.safeAdd(v12262, v12159);
          const v12267 = {
            closed: v12256,
            decimals: v12257,
            enableZeroAddressBurn: v12258,
            manager: v12259,
            name: v12260,
            symbol: v12261,
            tokenAmount: v12266,
            totalSupply: v12263,
            zeroAddress: v12264
            };
          const v16473 = v12267;
          const v16475 = v12267.closed;
          if (v16475) {
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
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      undefined /* setApiDetails */;
      const v12159 = v12151[stdlib.checkedBigNumberify('./index.rsh:214:12:spread', stdlib.UInt_max, '0')];
      ;
      const v12238 = stdlib.cast("UInt", "UInt256", v12159, false, true);
      const v12239 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11093, ctc1), null);
      const v12240 = stdlib.fromSome(v12239, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v12241 = stdlib.safeSub256(v12240, v12238);
      await stdlib.mapSet(map0, ctc3, v11093, ctc1, v12241);
      const v12242 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11328, ctc1), null);
      const v12243 = stdlib.fromSome(v12242, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v12244 = stdlib.safeAdd256(v12243, v12238);
      await stdlib.mapSet(map0, ctc3, v11328, ctc1, v12244);
      null;
      const v12249 = stdlib.safeAdd256(v12244, v12238);
      const v12250 = await txn1.getOutput('deposit', 'v12249', ctc1, v12249);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v12151, v12250), {
          at: './index.rsh:214:13:application',
          fs: ['at ./index.rsh:214:13:application call to [unknown function] (defined at: ./index.rsh:214:13:function exp)', 'at ./index.rsh:219:14:application call to "k" (defined at: ./index.rsh:217:15:function exp)', 'at ./index.rsh:217:15:application call to [unknown function] (defined at: ./index.rsh:217:15:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v12256 = v11105.closed;
      const v12257 = v11105.decimals;
      const v12258 = v11105.enableZeroAddressBurn;
      const v12259 = v11105.manager;
      const v12260 = v11105.name;
      const v12261 = v11105.symbol;
      const v12262 = v11105.tokenAmount;
      const v12263 = v11105.totalSupply;
      const v12264 = v11105.zeroAddress;
      const v12266 = stdlib.safeAdd(v12262, v12159);
      const v12267 = {
        closed: v12256,
        decimals: v12257,
        enableZeroAddressBurn: v12258,
        manager: v12259,
        name: v12260,
        symbol: v12261,
        tokenAmount: v12266,
        totalSupply: v12263,
        zeroAddress: v12264
        };
      const v16473 = v12267;
      const v16475 = v12267.closed;
      if (v16475) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc11,
    deleteAllowanceBox0_9567: ctc12,
    deleteBalanceBox0_9567: ctc13,
    deposit0_9567: ctc14,
    destroy0_9567: ctc10,
    transfer0_9567: ctc11,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc14
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11306 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:298:30:application call to [unknown function] (defined at: ./index.rsh:298:30:function exp)', 'at ./index.rsh:123:31:application call to "rundestroy0_9567" (defined at: ./index.rsh:298:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v11307 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v11308 = {
    None: 0,
    Some: 1
    }[v11307[0]];
  const v11309 = stdlib.eq(v11308, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v11309, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:299:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:298:30:application call to [unknown function] (defined at: ./index.rsh:298:30:function exp)', 'at ./index.rsh:123:31:application call to "rundestroy0_9567" (defined at: ./index.rsh:298:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v11311 = v11105.tokenAmount;
  const v11312 = stdlib.eq(v11311, stdlib.checkedBigNumberify('./index.rsh:303:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v11312, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:298:30:application call to [unknown function] (defined at: ./index.rsh:298:30:function exp)', 'at ./index.rsh:123:31:application call to "rundestroy0_9567" (defined at: ./index.rsh:298:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: null,
    who: 'destroy'
    });
  const v11317 = ['destroy0_9567', v11306];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11317],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:298:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          const v12548 = v11105.tokenAmount;
          await stdlib.simMapSet(sim_r, 0, ctc3, v11085, ctc1, undefined /* Nothing */);
          const v12551 = null;
          const v12552 = await txn1.getOutput('destroy', 'v12551', ctc0, v12551);
          
          const v12558 = v11105.decimals;
          const v12559 = v11105.enableZeroAddressBurn;
          const v12560 = v11105.manager;
          const v12561 = v11105.name;
          const v12562 = v11105.symbol;
          const v12564 = v11105.totalSupply;
          const v12565 = v11105.zeroAddress;
          const v12566 = {
            closed: true,
            decimals: v12558,
            enableZeroAddressBurn: v12559,
            manager: v12560,
            name: v12561,
            symbol: v12562,
            tokenAmount: v12548,
            totalSupply: v12564,
            zeroAddress: v12565
            };
          const v16509 = v12566;
          const v16511 = v12566.closed;
          if (v16511) {
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
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v12544 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v12545 = {
        None: 0,
        Some: 1
        }[v12544[0]];
      const v12546 = stdlib.eq(v12545, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v12546, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:299:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:305:15:application call to [unknown function] (defined at: ./index.rsh:305:15:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      const v12548 = v11105.tokenAmount;
      const v12549 = stdlib.eq(v12548, stdlib.checkedBigNumberify('./index.rsh:303:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v12549, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:305:15:application call to [unknown function] (defined at: ./index.rsh:305:15:function exp)'],
        msg: null,
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v11085, ctc1, undefined /* Nothing */);
      const v12551 = null;
      const v12552 = await txn1.getOutput('destroy', 'v12551', ctc0, v12551);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v12424, v12552), {
          at: './index.rsh:298:13:application',
          fs: ['at ./index.rsh:298:13:application call to [unknown function] (defined at: ./index.rsh:298:13:function exp)', 'at ./index.rsh:307:14:application call to "k" (defined at: ./index.rsh:305:15:function exp)', 'at ./index.rsh:305:15:application call to [unknown function] (defined at: ./index.rsh:305:15:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v12558 = v11105.decimals;
      const v12559 = v11105.enableZeroAddressBurn;
      const v12560 = v11105.manager;
      const v12561 = v11105.name;
      const v12562 = v11105.symbol;
      const v12564 = v11105.totalSupply;
      const v12565 = v11105.zeroAddress;
      const v12566 = {
        closed: true,
        decimals: v12558,
        enableZeroAddressBurn: v12559,
        manager: v12560,
        name: v12561,
        symbol: v12562,
        tokenAmount: v12548,
        totalSupply: v12564,
        zeroAddress: v12565
        };
      const v16509 = v12566;
      const v16511 = v12566.closed;
      if (v16511) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc10,
    deleteAllowanceBox0_9567: ctc11,
    deleteBalanceBox0_9567: ctc12,
    deposit0_9567: ctc13,
    destroy0_9567: ctc14,
    transfer0_9567: ctc10,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc13
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11143 = ctc.selfAddress();
  const v11145 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:43:application call to [unknown function] (defined at: ./index.rsh:161:43:function exp)', 'at ./index.rsh:123:31:application call to "runtransfer0_9567" (defined at: ./index.rsh:161:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v11146 = v11145[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11147 = v11145[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11150 = stdlib.addressEq(v11146, v11085);
  const v11151 = v11150 ? false : true;
  stdlib.assert(v11151, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:43:application call to [unknown function] (defined at: ./index.rsh:161:43:function exp)', 'at ./index.rsh:123:31:application call to "runtransfer0_9567" (defined at: ./index.rsh:161:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v11153 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11143, ctc1), null);
  const v11154 = stdlib.fromSome(v11153, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11155 = stdlib.ge256(v11154, v11147);
  stdlib.assert(v11155, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:43:application call to [unknown function] (defined at: ./index.rsh:161:43:function exp)', 'at ./index.rsh:123:31:application call to "runtransfer0_9567" (defined at: ./index.rsh:161:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v11164 = ['transfer0_9567', v11145];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11164],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v12843 = v12697[stdlib.checkedBigNumberify('./index.rsh:161:12:spread', stdlib.UInt_max, '0')];
          const v12844 = v12697[stdlib.checkedBigNumberify('./index.rsh:161:12:spread', stdlib.UInt_max, '1')];
          const v12848 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11328, ctc1), null);
          const v12849 = stdlib.fromSome(v12848, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v12856 = stdlib.safeSub256(v12849, v12844);
          await stdlib.simMapSet(sim_r, 0, ctc3, v11328, ctc1, v12856);
          const v12857 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v12843, ctc1), null);
          const v12858 = stdlib.fromSome(v12857, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v12859 = stdlib.safeAdd256(v12858, v12844);
          await stdlib.simMapSet(sim_r, 0, ctc3, v12843, ctc1, v12859);
          null;
          const v12861 = true;
          const v12862 = await txn1.getOutput('transfer', 'v12861', ctc8, v12861);
          
          const v16545 = v11105;
          const v16547 = v11105.closed;
          if (v16547) {
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
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v12843 = v12697[stdlib.checkedBigNumberify('./index.rsh:161:12:spread', stdlib.UInt_max, '0')];
      const v12844 = v12697[stdlib.checkedBigNumberify('./index.rsh:161:12:spread', stdlib.UInt_max, '1')];
      const v12845 = stdlib.addressEq(v12843, v11085);
      const v12846 = v12845 ? false : true;
      stdlib.assert(v12846, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v12848 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11328, ctc1), null);
      const v12849 = stdlib.fromSome(v12848, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v12850 = stdlib.ge256(v12849, v12844);
      stdlib.assert(v12850, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v12856 = stdlib.safeSub256(v12849, v12844);
      await stdlib.mapSet(map0, ctc3, v11328, ctc1, v12856);
      const v12857 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v12843, ctc1), null);
      const v12858 = stdlib.fromSome(v12857, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v12859 = stdlib.safeAdd256(v12858, v12844);
      await stdlib.mapSet(map0, ctc3, v12843, ctc1, v12859);
      null;
      const v12861 = true;
      const v12862 = await txn1.getOutput('transfer', 'v12861', ctc8, v12861);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v12697, v12862), {
          at: './index.rsh:161:13:application',
          fs: ['at ./index.rsh:161:13:application call to [unknown function] (defined at: ./index.rsh:161:13:function exp)', 'at ./index.rsh:170:14:application call to "k" (defined at: ./index.rsh:168:15:function exp)', 'at ./index.rsh:168:15:application call to [unknown function] (defined at: ./index.rsh:168:15:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v16545 = v11105;
      const v16547 = v11105.closed;
      if (v16547) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc12,
    deleteAllowanceBox0_9567: ctc11,
    deleteBalanceBox0_9567: ctc13,
    deposit0_9567: ctc14,
    destroy0_9567: ctc15,
    transfer0_9567: ctc12,
    transferFrom0_9567: ctc10,
    withdraw0_9567: ctc14
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11166 = ctc.selfAddress();
  const v11168 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:179:54:application call to [unknown function] (defined at: ./index.rsh:179:54:function exp)', 'at ./index.rsh:123:31:application call to "runtransferFrom0_9567" (defined at: ./index.rsh:179:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v11169 = v11168[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11170 = v11168[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v11171 = v11168[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v11175 = stdlib.addressEq(v11169, v11085);
  const v11176 = v11175 ? false : true;
  stdlib.assert(v11176, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:180:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:54:application call to [unknown function] (defined at: ./index.rsh:179:54:function exp)', 'at ./index.rsh:123:31:application call to "runtransferFrom0_9567" (defined at: ./index.rsh:179:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v11178 = stdlib.addressEq(v11170, v11085);
  const v11179 = v11178 ? false : true;
  stdlib.assert(v11179, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:54:application call to [unknown function] (defined at: ./index.rsh:179:54:function exp)', 'at ./index.rsh:123:31:application call to "runtransferFrom0_9567" (defined at: ./index.rsh:179:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v11181 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11169, ctc1), null);
  const v11182 = stdlib.fromSome(v11181, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11183 = stdlib.ge256(v11182, v11171);
  stdlib.assert(v11183, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:54:application call to [unknown function] (defined at: ./index.rsh:179:54:function exp)', 'at ./index.rsh:123:31:application call to "runtransferFrom0_9567" (defined at: ./index.rsh:179:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v11185 = [v11169, v11166];
  const v11186 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v11185, ctc1), null);
  const v11187 = stdlib.fromSome(v11186, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11188 = stdlib.ge256(v11187, v11171);
  stdlib.assert(v11188, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:186:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:179:54:application call to [unknown function] (defined at: ./index.rsh:179:54:function exp)', 'at ./index.rsh:123:31:application call to "runtransferFrom0_9567" (defined at: ./index.rsh:179:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v11199 = ['transferFrom0_9567', v11168];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11199],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:179:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v13144 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '0')];
          const v13145 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '1')];
          const v13146 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '2')];
          const v13153 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v13144, ctc1), null);
          const v13154 = stdlib.fromSome(v13153, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13157 = [v13144, v11328];
          const v13158 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v13157, ctc1), null);
          const v13159 = stdlib.fromSome(v13158, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13167 = stdlib.safeSub256(v13154, v13146);
          await stdlib.simMapSet(sim_r, 0, ctc3, v13144, ctc1, v13167);
          const v13168 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v13145, ctc1), null);
          const v13169 = stdlib.fromSome(v13168, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13170 = stdlib.safeAdd256(v13169, v13146);
          await stdlib.simMapSet(sim_r, 0, ctc3, v13145, ctc1, v13170);
          null;
          const v13175 = stdlib.safeSub256(v13159, v13146);
          await stdlib.simMapSet(sim_r, 1, ctc11, v13157, ctc1, v13175);
          null;
          const v13178 = true;
          const v13179 = await txn1.getOutput('transferFrom', 'v13178', ctc8, v13178);
          
          const v16581 = v11105;
          const v16583 = v11105.closed;
          if (v16583) {
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
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v13144 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '0')];
      const v13145 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '1')];
      const v13146 = v12970[stdlib.checkedBigNumberify('./index.rsh:179:12:spread', stdlib.UInt_max, '2')];
      const v13147 = stdlib.addressEq(v13144, v11085);
      const v13148 = v13147 ? false : true;
      stdlib.assert(v13148, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:180:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v13150 = stdlib.addressEq(v13145, v11085);
      const v13151 = v13150 ? false : true;
      stdlib.assert(v13151, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:181:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v13153 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v13144, ctc1), null);
      const v13154 = stdlib.fromSome(v13153, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13155 = stdlib.ge256(v13154, v13146);
      stdlib.assert(v13155, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v13157 = [v13144, v11328];
      const v13158 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v13157, ctc1), null);
      const v13159 = stdlib.fromSome(v13158, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13160 = stdlib.ge256(v13159, v13146);
      stdlib.assert(v13160, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:186:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v13167 = stdlib.safeSub256(v13154, v13146);
      await stdlib.mapSet(map0, ctc3, v13144, ctc1, v13167);
      const v13168 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v13145, ctc1), null);
      const v13169 = stdlib.fromSome(v13168, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13170 = stdlib.safeAdd256(v13169, v13146);
      await stdlib.mapSet(map0, ctc3, v13145, ctc1, v13170);
      null;
      const v13175 = stdlib.safeSub256(v13159, v13146);
      await stdlib.mapSet(map1, ctc11, v13157, ctc1, v13175);
      null;
      const v13178 = true;
      const v13179 = await txn1.getOutput('transferFrom', 'v13178', ctc8, v13178);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v12970, v13179), {
          at: './index.rsh:179:13:application',
          fs: ['at ./index.rsh:179:13:application call to [unknown function] (defined at: ./index.rsh:179:13:function exp)', 'at ./index.rsh:193:14:application call to "k" (defined at: ./index.rsh:191:15:function exp)', 'at ./index.rsh:191:15:application call to [unknown function] (defined at: ./index.rsh:191:15:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v16581 = v11105;
      const v16583 = v11105.closed;
      if (v16583) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
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
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    closed: ctc8,
    decimals: ctc4,
    enableZeroAddressBurn: ctc8,
    manager: ctc3,
    name: ctc5,
    symbol: ctc6,
    tokenAmount: ctc4,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Data({
    approve0_9567: ctc11,
    deleteAllowanceBox0_9567: ctc12,
    deleteBalanceBox0_9567: ctc13,
    deposit0_9567: ctc10,
    destroy0_9567: ctc14,
    transfer0_9567: ctc11,
    transferFrom0_9567: ctc15,
    withdraw0_9567: ctc10
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
  
  
  const [v11085, v11087, v11090, v11093, v11105] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc7, ctc4, ctc3, ctc9]);
  const v11235 = ctc.selfAddress();
  const v11237 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:229:36:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:123:31:application call to "runwithdraw0_9567" (defined at: ./index.rsh:229:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v11238 = v11237[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v11240 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11235, ctc1), null);
  const v11241 = stdlib.fromSome(v11240, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v11242 = stdlib.cast("UInt", "UInt256", v11238, false, true);
  const v11243 = stdlib.ge256(v11241, v11242);
  stdlib.assert(v11243, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:230:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:36:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:123:31:application call to "runwithdraw0_9567" (defined at: ./index.rsh:229:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: 'Withdraw: insufficient balance',
    who: 'withdraw'
    });
  const v11245 = v11105.tokenAmount;
  const v11246 = stdlib.ge(v11245, v11238);
  stdlib.assert(v11246, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:234:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:36:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:123:31:application call to "runwithdraw0_9567" (defined at: ./index.rsh:229:12:function exp)', 'at ./index.rsh:123:31:application call to [unknown function] (defined at: ./index.rsh:123:31:function exp)'],
    msg: null,
    who: 'withdraw'
    });
  const v11253 = ['withdraw0_9567', v11237];
  
  const txn1 = await (ctc.sendrecv({
    args: [v11085, v11087, v11090, v11093, v11105, v11253],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:229:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
      
      switch (v11329[0]) {
        case 'approve0_9567': {
          const v11332 = v11329[1];
          
          break;
          }
        case 'deleteAllowanceBox0_9567': {
          const v11605 = v11329[1];
          
          break;
          }
        case 'deleteBalanceBox0_9567': {
          const v11878 = v11329[1];
          
          break;
          }
        case 'deposit0_9567': {
          const v12151 = v11329[1];
          
          break;
          }
        case 'destroy0_9567': {
          const v12424 = v11329[1];
          
          break;
          }
        case 'transfer0_9567': {
          const v12697 = v11329[1];
          
          break;
          }
        case 'transferFrom0_9567': {
          const v12970 = v11329[1];
          
          break;
          }
        case 'withdraw0_9567': {
          const v13243 = v11329[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          const v13462 = v13243[stdlib.checkedBigNumberify('./index.rsh:229:12:spread', stdlib.UInt_max, '0')];
          const v13463 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11328, ctc1), null);
          const v13464 = stdlib.fromSome(v13463, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13465 = stdlib.cast("UInt", "UInt256", v13462, false, true);
          const v13468 = v11105.tokenAmount;
          const v13477 = stdlib.safeSub256(v13464, v13465);
          await stdlib.simMapSet(sim_r, 0, ctc3, v11328, ctc1, v13477);
          const v13478 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11093, ctc1), null);
          const v13479 = stdlib.fromSome(v13478, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13480 = stdlib.safeAdd256(v13479, v13465);
          await stdlib.simMapSet(sim_r, 0, ctc3, v11093, ctc1, v13480);
          null;
          const v13482 = [v11328, v11093];
          const v13483 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v13482, ctc1), null);
          const v13484 = stdlib.fromSome(v13483, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13485 = stdlib.safeSub256(v13484, v13465);
          await stdlib.simMapSet(sim_r, 1, ctc12, v13482, ctc1, v13485);
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v11328,
            tok: undefined /* Nothing */
            });
          const v13492 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v11328, ctc1), null);
          const v13493 = stdlib.fromSome(v13492, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v13495 = stdlib.safeSub256(v13493, v13465);
          const v13496 = await txn1.getOutput('withdraw', 'v13495', ctc1, v13495);
          
          const v13502 = v11105.closed;
          const v13503 = v11105.decimals;
          const v13504 = v11105.enableZeroAddressBurn;
          const v13505 = v11105.manager;
          const v13506 = v11105.name;
          const v13507 = v11105.symbol;
          const v13509 = v11105.totalSupply;
          const v13510 = v11105.zeroAddress;
          const v13512 = stdlib.safeSub(v13468, v13462);
          const v13513 = {
            closed: v13502,
            decimals: v13503,
            enableZeroAddressBurn: v13504,
            manager: v13505,
            name: v13506,
            symbol: v13507,
            tokenAmount: v13512,
            totalSupply: v13509,
            zeroAddress: v13510
            };
          const v16617 = v13513;
          const v16619 = v13513.closed;
          if (v16619) {
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
    tys: [ctc3, ctc7, ctc4, ctc3, ctc9, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v11329], secs: v11331, time: v11330, didSend: v10492, from: v11328 } = txn1;
  switch (v11329[0]) {
    case 'approve0_9567': {
      const v11332 = v11329[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_9567': {
      const v11605 = v11329[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_9567': {
      const v11878 = v11329[1];
      return;
      break;
      }
    case 'deposit0_9567': {
      const v12151 = v11329[1];
      return;
      break;
      }
    case 'destroy0_9567': {
      const v12424 = v11329[1];
      return;
      break;
      }
    case 'transfer0_9567': {
      const v12697 = v11329[1];
      return;
      break;
      }
    case 'transferFrom0_9567': {
      const v12970 = v11329[1];
      return;
      break;
      }
    case 'withdraw0_9567': {
      const v13243 = v11329[1];
      undefined /* setApiDetails */;
      ;
      const v13462 = v13243[stdlib.checkedBigNumberify('./index.rsh:229:12:spread', stdlib.UInt_max, '0')];
      const v13463 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11328, ctc1), null);
      const v13464 = stdlib.fromSome(v13463, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13465 = stdlib.cast("UInt", "UInt256", v13462, false, true);
      const v13466 = stdlib.ge256(v13464, v13465);
      stdlib.assert(v13466, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:230:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:15:application call to [unknown function] (defined at: ./index.rsh:236:15:function exp)'],
        msg: 'Withdraw: insufficient balance',
        who: 'withdraw'
        });
      const v13468 = v11105.tokenAmount;
      const v13469 = stdlib.ge(v13468, v13462);
      stdlib.assert(v13469, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:234:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:15:application call to [unknown function] (defined at: ./index.rsh:236:15:function exp)'],
        msg: null,
        who: 'withdraw'
        });
      const v13477 = stdlib.safeSub256(v13464, v13465);
      await stdlib.mapSet(map0, ctc3, v11328, ctc1, v13477);
      const v13478 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11093, ctc1), null);
      const v13479 = stdlib.fromSome(v13478, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13480 = stdlib.safeAdd256(v13479, v13465);
      await stdlib.mapSet(map0, ctc3, v11093, ctc1, v13480);
      null;
      const v13482 = [v11328, v11093];
      const v13483 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v13482, ctc1), null);
      const v13484 = stdlib.fromSome(v13483, stdlib.checkedBigNumberify('./index.rsh:133:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13485 = stdlib.safeSub256(v13484, v13465);
      await stdlib.mapSet(map1, ctc12, v13482, ctc1, v13485);
      null;
      ;
      const v13492 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v11328, ctc1), null);
      const v13493 = stdlib.fromSome(v13492, stdlib.checkedBigNumberify('./index.rsh:129:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v13495 = stdlib.safeSub256(v13493, v13465);
      const v13496 = await txn1.getOutput('withdraw', 'v13495', ctc1, v13495);
      if (v10492) {
        stdlib.protect(ctc0, await interact.out(v13243, v13496), {
          at: './index.rsh:229:13:application',
          fs: ['at ./index.rsh:229:13:application call to [unknown function] (defined at: ./index.rsh:229:13:function exp)', 'at ./index.rsh:239:14:application call to "k" (defined at: ./index.rsh:236:15:function exp)', 'at ./index.rsh:236:15:application call to [unknown function] (defined at: ./index.rsh:236:15:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v13502 = v11105.closed;
      const v13503 = v11105.decimals;
      const v13504 = v11105.enableZeroAddressBurn;
      const v13505 = v11105.manager;
      const v13506 = v11105.name;
      const v13507 = v11105.symbol;
      const v13509 = v11105.totalSupply;
      const v13510 = v11105.zeroAddress;
      const v13512 = stdlib.safeSub(v13468, v13462);
      const v13513 = {
        closed: v13502,
        decimals: v13503,
        enableZeroAddressBurn: v13504,
        manager: v13505,
        name: v13506,
        symbol: v13507,
        tokenAmount: v13512,
        totalSupply: v13509,
        zeroAddress: v13510
        };
      const v16617 = v13513;
      const v16619 = v13513.closed;
      if (v16619) {
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
    impure: [`_reachp_0((uint64,address,byte,(uint64,byte[32],byte[8])))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `approve(address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `deposit(uint64)uint256`, `destroy()void`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`, `withdraw(uint64)uint256`],
    pure: [`allowance(address,address)uint256`, `balanceOf(address)uint256`, `decimals()uint64`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte,uint64)`, `symbol()byte[8]`, `totalSupply()uint256`],
    sigs: [`_reachp_0((uint64,address,byte,(uint64,byte[32],byte[8])))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `allowance(address,address)uint256`, `approve(address,uint256)byte`, `balanceOf(address)uint256`, `decimals()uint64`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `deposit(uint64)uint256`, `destroy()void`, `name()byte[32]`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte,uint64)`, `symbol()byte[8]`, `totalSupply()uint256`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`, `withdraw(uint64)uint256`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAHU3gEIA8TbAVIYWCYIAQAACAAAAAAAAAABBCiRiGEBASD//////////////////////////////////////////wECBBjglGExGEEIJSlkSSJbNQElWzUCKGQnBGRQJwZkUIIRBACKcnIEAiMmfAQbYJrMBEOoJVQEXYVNDgRoz5jOBGzLPMIEcV/BRgR5+rRlBHrPZ1IEg7rXzASPlRtZBJyGoYUEnNaFWASh+b9MBLh3nucEvDwVbzYaAI4RCIsIGAiFB3UH3gjDCH8InQiICIIH+AgDCCEIEAfrCAAHhwA0C1cAIDUNNAtXICA1DDEANBMTRDQNNBMTRCEFKjEANA1QUAE0DIgIticHMQBQNA1QNAxQsCM1C4AIAAAAAAAALF80CxZRBwhQsDQLFlEHCDUEMgY1DjQPVwABF0EH4TEZgQUSRIgIxiIyCjIJiAjwNANAAAqABBUffHU0BFCwI0M0C1cAIDQLVyAgUDUMKTIDKjQMUAGICDtJNQsiVSMSRDIDNAuICCMyA6hEIQUqNAxQAYgIXyM1C4AIAAAAAAAALYk0CxZRBwhQsDQLFlEHCDUEMgY1DkL/fDQNVwEgSTULNBMTRCkyAyg0C1CIB+RJNQwiVSMSRDIDNAyIB8wyA6hEJCg0C1CICAojNQuACAAAAAAAAC6xNAsWUQcIULA0CxZRBwg1BDIGNQ5C/yc0DSNbSTULiAgLIQevNAsWUDUUJCg0EFAyAykyAyg0EFCIB4GIB3U0FKGIB5GIB4AyAykyAygxAFCIB2mIB100FKCIB3k1DSQoMQBQNA2IB18rNBBQMQBQNBRQsDQNNBSgiAdaNQyACAAAAAAAAC/ZNAxQsDQMNQQ0D1cAATQPVwEIUDQPVwkBUDQPVwogUDQPVyogUDQPV0oIUDQPIQZbNAsIFlA0D1daIFA0D1d6IFAyBjUONQ9C/m2AIQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJVIxJENA8hBltJNQwiEkQkKDQTUIgG8Sk1C4AIAAAAAAAAMQc0C1CwNAs1BCcENA9XAQhQNA9XCQFQNA9XCiBQNA9XKiBQNA9XSghQNAwWUDQPV1ogUDQPV3ogUDIGNQ41D0L95DQLVwAgNQ00C1cgIDUMNA00ExNEMgMpMgMoMQBQiAZCiAY2STULNAynRCQoMQBQNAs0DKGIBkSIBjMkKDQNUDIDKTIDKDQNUIgGF4gGCzQMoIgGJ4gGFisxAFA0DVA0DFCwIzULgAgAAAAAAAAyPTQLFlEHCFCwNAsWUQcINQQyBjUOQv1eNAtXACA1FDQLVyAgNQ00C1dAIDUMNBQ0ExNENA00ExNEMgMpMgMoNBRQiAWviAWjSTUWNAynRDQUMQBQNRUyAykyAyo0FVABiAWRiAWFSTULNAynRCQoNBRQNBY0DKGIBZOIBYIkKDQNUDIDKTIDKDQNUIgFZogFWjQMoIgFdogFZSs0FFA0DVA0DFCwNAs0DKGIBWA1DSEFKjQVUAE0DYgFRCcHNBRQMQBQNA1QsCM1C4AIAAAAAAAAM3o0CxZRBwhQsDQLFlEHCDUEMgY1DkL8izQNI1s1CzIDKTIDKDEAUIgE94gE6zUMIQevNAsWUDUUNAw0FKdENA8hBltJNQ00Cw9EJCgxAFA0DDQUoYgE44gE0iQoNBBQMgMpMgMoNBBQiAS2iASqNBSgiATGiAS1KzEAUDQQUDQUULAxADQQUDUVMgMpMgMqNBVQAYgEi4gEfzQUoYgEmzUMIQUqNBVQATQMiAR/JwcxAFA0EFA0DFCwNAsxAIgEzTIDKTIDKDEAUIgEVYgESTQUoYgEZTUMgAgAAAAAAAA0tzQMULA0DDUENA9XAAE0D1cBCFA0D1cJAVA0D1cKIFA0D1cqIFA0D1dKCFA0DTQLCRZQNA9XWiBQNA9XeiBQMgY1DjUPQvt7NAEhBBJEiAQTMgMpMgMqNAw0C1BQAYgD4IgD1DUEMRkiEkRC+3Qlryg0DDQLUFAyA1BQNQshBDQBEkSIA940CyJbNQw0C1cIYTUNgATZHk3aNAwWUDQNULA0DIgD6zQNIlWNCAMYAyIDLALUAtcC2gLkAu5C+q00ASEEEkSIA5wyAykyAyg0C1CIA22IA2E1BEL/ijQBIQQSRIgDfzQRFjUEQv95Ja8nBDQMNAtQUDIDUFA1C0L/fSWvJwY0C1CBQK9QUDULQv9sJa+AAQM0CxZQIQivUFA1C0L/WYBpAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/uk0ASEEEkSIAsc0ElcIIDUEQv6/NAEhBBJEiAK0NA9XKiA0D1dKCFA0D1cBCFA0D1daIFA0D1d6IFA0D1cKIFA0D1cJAVA0D1cAAVA0D1dSCFA1BEL+fDQBIQQSRIgCcTQSVygINQRC/mk0ASEEEkSIAl4nBTUEQv5ZJa+AAQU0DDQLUFAyA1BQNQtC/lwlr4ABBjQNNAxQNAtQUFA1C0L+SCWvgAEHNAsWUCEIr1BQNQtC/jU0CyJbNQ00C1cIIDUTNAtXKAEXNQw0C1cpMDUSgARy1N9lNA0WUDQTUDQMFlEHCFA0ElCwNA2IAhA0EiJbSTURgYACDkQyCjUQJCg0EFAnBYgBsSQoNBNQMgOIAacnBTULKzQTUDQQUDQLULAoNBEWUDQMFlEHCFA0EFA0ElcIIFA0ElcoCFAlr1AnBVA0E1AyBjUONQ9C+OKIAamBoI0GiAG8NhoBNQtC/1WIAZc2GgE1C0L9fyIxNBJEgQQxNRJEIjE2EkQiMTcSRIgBd4GSAq8iIjUCNQEoSwFXAH9nJwRLAVd/f2cnBkxX/hRnKTQBFjQCFlBnMRkiEkSIAVRC+JM2GgE2GgI1CzUMQvzxNhoBNhoCNQs1DEL9CjYaATULQv1TQv1tNhoBNhoCNQs1DEL9cTYaATULQv18NhoBFzULQv2EQv2UQvkJQvnANA1XAUA1C0L6PzQNVwFgNQtC+rtC+4s0EzQSUDQRFlA0EFA0D1AhBDIGQv9ZSEy/SIkisgEjshCyB7IIs4k0DVcBQDULQvePNA1XAUA1C0L4BkL4XEL9pkL9tkL99kL+BjYaATYaAjYaAzULNQw1DUL+GDYaATYaAjULNQxC/fdIiUwJSTUGMgmIAIuJCUlB/+5JNQaIAIOJNhoBFzULQv39SVcBAEwiVU2JvkkWUQcIRQRNUIlMSb1A/3FLA4gAUEL/aUkVgSBMCa9MUIlJVwAgNRNJVyAwNRJJgVBbNRFJV1ggNRBXeJo1D4m8Ik4CTTQHCDUHiSM1A4lJIhJMNAISEUSJNAY0B0oPQf90Qv98NAYINQaJsUL/FzEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRImxsglC/vU=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `489`,
    1001: `489`,
    1002: `490`,
    1003: `490`,
    1004: `491`,
    1005: `491`,
    1006: `492`,
    1007: `492`,
    1008: `492`,
    1009: `493`,
    101: `21`,
    1010: `493`,
    1011: `494`,
    1012: `494`,
    1013: `495`,
    1014: `495`,
    1015: `496`,
    1016: `497`,
    1017: `502`,
    1018: `502`,
    1019: `503`,
    102: `22`,
    1020: `503`,
    1021: `504`,
    1022: `505`,
    1023: `510`,
    1024: `510`,
    1025: `512`,
    1026: `513`,
    1027: `513`,
    1028: `514`,
    1029: `515`,
    103: `24`,
    1030: `515`,
    1031: `516`,
    1032: `517`,
    1033: `517`,
    1034: `517`,
    1035: `518`,
    1036: `518`,
    1037: `518`,
    1038: `519`,
    1039: `520`,
    104: `24`,
    1040: `520`,
    1041: `521`,
    1042: `521`,
    1043: `522`,
    1044: `523`,
    1045: `528`,
    1046: `528`,
    1047: `529`,
    1048: `529`,
    1049: `530`,
    105: `24`,
    1050: `531`,
    1051: `531`,
    1052: `532`,
    1053: `532`,
    1054: `534`,
    1055: `535`,
    1056: `535`,
    1057: `536`,
    1058: `537`,
    1059: `537`,
    106: `24`,
    1060: `538`,
    1061: `539`,
    1062: `540`,
    1063: `540`,
    1064: `540`,
    1065: `541`,
    1066: `541`,
    1067: `541`,
    1068: `542`,
    1069: `543`,
    107: `24`,
    1070: `543`,
    1071: `544`,
    1072: `544`,
    1073: `545`,
    1074: `546`,
    1075: `551`,
    1076: `552`,
    1077: `553`,
    1078: `553`,
    1079: `554`,
    108: `24`,
    1080: `555`,
    1081: `555`,
    1082: `556`,
    1083: `556`,
    1084: `557`,
    1085: `558`,
    1086: `558`,
    1087: `558`,
    1088: `559`,
    1089: `559`,
    109: `24`,
    1090: `559`,
    1091: `561`,
    1092: `562`,
    1093: `563`,
    1094: `563`,
    1095: `564`,
    1096: `565`,
    1097: `565`,
    1098: `566`,
    1099: `567`,
    11: `2`,
    110: `24`,
    1100: `567`,
    1101: `568`,
    1102: `569`,
    1103: `569`,
    1104: `570`,
    1105: `571`,
    1106: `571`,
    1107: `571`,
    1108: `572`,
    1109: `572`,
    111: `24`,
    1110: `572`,
    1111: `573`,
    1112: `573`,
    1113: `574`,
    1114: `575`,
    1115: `575`,
    1116: `575`,
    1117: `576`,
    1118: `576`,
    1119: `576`,
    112: `24`,
    1120: `577`,
    1121: `578`,
    1122: `578`,
    1123: `579`,
    1124: `580`,
    1125: `580`,
    1126: `581`,
    1127: `582`,
    1128: `582`,
    1129: `583`,
    113: `24`,
    1130: `584`,
    1131: `586`,
    1132: `586`,
    1133: `587`,
    1134: `587`,
    1135: `588`,
    1136: `589`,
    1137: `589`,
    1138: `589`,
    1139: `590`,
    114: `24`,
    1140: `590`,
    1141: `591`,
    1142: `591`,
    1143: `592`,
    1144: `593`,
    1145: `593`,
    1146: `594`,
    1147: `595`,
    1148: `596`,
    1149: `596`,
    115: `24`,
    1150: `597`,
    1151: `597`,
    1152: `597`,
    1153: `598`,
    1154: `598`,
    1155: `599`,
    1156: `599`,
    1157: `600`,
    1158: `601`,
    1159: `601`,
    116: `24`,
    1160: `602`,
    1161: `603`,
    1162: `603`,
    1163: `604`,
    1164: `605`,
    1165: `607`,
    1166: `608`,
    1167: `608`,
    1168: `609`,
    1169: `609`,
    117: `24`,
    1170: `609`,
    1171: `609`,
    1172: `609`,
    1173: `609`,
    1174: `609`,
    1175: `609`,
    1176: `609`,
    1177: `609`,
    1178: `610`,
    1179: `610`,
    118: `24`,
    1180: `611`,
    1181: `612`,
    1182: `612`,
    1183: `612`,
    1184: `613`,
    1185: `614`,
    1186: `615`,
    1187: `615`,
    1188: `616`,
    1189: `617`,
    119: `24`,
    1190: `617`,
    1191: `617`,
    1192: `618`,
    1193: `618`,
    1194: `619`,
    1195: `619`,
    1196: `620`,
    1197: `620`,
    1198: `621`,
    1199: `621`,
    12: `2`,
    120: `24`,
    1200: `621`,
    1201: `623`,
    1202: `623`,
    1203: `624`,
    1204: `625`,
    1205: `626`,
    1206: `626`,
    1207: `627`,
    1208: `627`,
    1209: `629`,
    121: `24`,
    1210: `630`,
    1211: `630`,
    1212: `631`,
    1213: `632`,
    1214: `632`,
    1215: `633`,
    1216: `634`,
    1217: `634`,
    1218: `634`,
    1219: `635`,
    122: `24`,
    1220: `635`,
    1221: `635`,
    1222: `636`,
    1223: `636`,
    1224: `637`,
    1225: `637`,
    1226: `638`,
    1227: `639`,
    1228: `639`,
    1229: `640`,
    123: `24`,
    1230: `641`,
    1231: `642`,
    1232: `642`,
    1233: `643`,
    1234: `643`,
    1235: `644`,
    1236: `644`,
    1237: `645`,
    1238: `646`,
    1239: `651`,
    124: `24`,
    1240: `651`,
    1241: `652`,
    1242: `652`,
    1243: `653`,
    1244: `654`,
    1245: `655`,
    1246: `655`,
    1247: `656`,
    1248: `656`,
    1249: `657`,
    125: `24`,
    1250: `658`,
    1251: `663`,
    1252: `664`,
    1253: `665`,
    1254: `665`,
    1255: `666`,
    1256: `667`,
    1257: `667`,
    1258: `668`,
    1259: `668`,
    126: `24`,
    1260: `669`,
    1261: `670`,
    1262: `670`,
    1263: `670`,
    1264: `671`,
    1265: `671`,
    1266: `671`,
    1267: `673`,
    1268: `674`,
    1269: `675`,
    127: `24`,
    1270: `675`,
    1271: `676`,
    1272: `677`,
    1273: `677`,
    1274: `678`,
    1275: `679`,
    1276: `679`,
    1277: `680`,
    1278: `681`,
    1279: `681`,
    128: `24`,
    1280: `682`,
    1281: `683`,
    1282: `683`,
    1283: `683`,
    1284: `684`,
    1285: `684`,
    1286: `684`,
    1287: `685`,
    1288: `685`,
    1289: `686`,
    129: `24`,
    1290: `687`,
    1291: `687`,
    1292: `687`,
    1293: `688`,
    1294: `688`,
    1295: `688`,
    1296: `689`,
    1297: `690`,
    1298: `690`,
    1299: `691`,
    13: `2`,
    130: `24`,
    1300: `692`,
    1301: `692`,
    1302: `693`,
    1303: `694`,
    1304: `694`,
    1305: `695`,
    1306: `696`,
    1307: `698`,
    1308: `698`,
    1309: `699`,
    131: `24`,
    1310: `699`,
    1311: `700`,
    1312: `701`,
    1313: `701`,
    1314: `702`,
    1315: `702`,
    1316: `704`,
    1317: `705`,
    1318: `705`,
    1319: `706`,
    132: `24`,
    1320: `707`,
    1321: `707`,
    1322: `708`,
    1323: `709`,
    1324: `710`,
    1325: `710`,
    1326: `710`,
    1327: `711`,
    1328: `711`,
    1329: `711`,
    133: `24`,
    1330: `712`,
    1331: `712`,
    1332: `713`,
    1333: `714`,
    1334: `714`,
    1335: `714`,
    1336: `715`,
    1337: `715`,
    1338: `716`,
    1339: `716`,
    134: `24`,
    1340: `717`,
    1341: `718`,
    1342: `718`,
    1343: `719`,
    1344: `720`,
    1345: `721`,
    1346: `721`,
    1347: `722`,
    1348: `722`,
    1349: `722`,
    135: `24`,
    1350: `723`,
    1351: `723`,
    1352: `724`,
    1353: `724`,
    1354: `725`,
    1355: `726`,
    1356: `726`,
    1357: `727`,
    1358: `728`,
    1359: `728`,
    136: `24`,
    1360: `729`,
    1361: `730`,
    1362: `732`,
    1363: `732`,
    1364: `733`,
    1365: `733`,
    1366: `734`,
    1367: `734`,
    1368: `734`,
    1369: `735`,
    137: `24`,
    1370: `735`,
    1371: `736`,
    1372: `737`,
    1373: `737`,
    1374: `738`,
    1375: `739`,
    1376: `739`,
    1377: `740`,
    1378: `741`,
    1379: `741`,
    138: `24`,
    1380: `741`,
    1381: `742`,
    1382: `742`,
    1383: `742`,
    1384: `743`,
    1385: `743`,
    1386: `744`,
    1387: `745`,
    1388: `745`,
    1389: `745`,
    139: `24`,
    1390: `746`,
    1391: `746`,
    1392: `747`,
    1393: `747`,
    1394: `747`,
    1395: `747`,
    1396: `747`,
    1397: `747`,
    1398: `747`,
    1399: `747`,
    14: `2`,
    140: `24`,
    1400: `747`,
    1401: `747`,
    1402: `748`,
    1403: `748`,
    1404: `749`,
    1405: `750`,
    1406: `751`,
    1407: `751`,
    1408: `752`,
    1409: `752`,
    141: `24`,
    1410: `753`,
    1411: `753`,
    1412: `754`,
    1413: `754`,
    1414: `754`,
    1415: `755`,
    1416: `755`,
    1417: `756`,
    1418: `756`,
    1419: `756`,
    142: `24`,
    1420: `757`,
    1421: `758`,
    1422: `758`,
    1423: `759`,
    1424: `759`,
    1425: `759`,
    1426: `760`,
    1427: `761`,
    1428: `761`,
    1429: `762`,
    143: `24`,
    1430: `762`,
    1431: `762`,
    1432: `763`,
    1433: `764`,
    1434: `764`,
    1435: `765`,
    1436: `765`,
    1437: `765`,
    1438: `766`,
    1439: `767`,
    144: `24`,
    1440: `767`,
    1441: `768`,
    1442: `768`,
    1443: `768`,
    1444: `769`,
    1445: `770`,
    1446: `770`,
    1447: `771`,
    1448: `771`,
    1449: `772`,
    145: `24`,
    1450: `773`,
    1451: `774`,
    1452: `775`,
    1453: `775`,
    1454: `776`,
    1455: `776`,
    1456: `776`,
    1457: `777`,
    1458: `778`,
    1459: `778`,
    146: `24`,
    1460: `779`,
    1461: `779`,
    1462: `779`,
    1463: `780`,
    1464: `781`,
    1465: `781`,
    1466: `782`,
    1467: `782`,
    1468: `783`,
    1469: `783`,
    147: `24`,
    1470: `784`,
    1471: `784`,
    1472: `784`,
    1473: `786`,
    1474: `786`,
    1475: `787`,
    1476: `787`,
    1477: `788`,
    1478: `789`,
    1479: `792`,
    148: `24`,
    1480: `792`,
    1481: `792`,
    1482: `793`,
    1483: `793`,
    1484: `795`,
    1485: `796`,
    1486: `796`,
    1487: `797`,
    1488: `798`,
    1489: `798`,
    149: `24`,
    1490: `799`,
    1491: `799`,
    1492: `800`,
    1493: `801`,
    1494: `802`,
    1495: `803`,
    1496: `803`,
    1497: `803`,
    1498: `804`,
    1499: `804`,
    15: `2`,
    150: `24`,
    1500: `804`,
    1501: `805`,
    1502: `805`,
    1503: `807`,
    1504: `807`,
    1505: `808`,
    1506: `809`,
    1507: `810`,
    1508: `812`,
    1509: `812`,
    151: `24`,
    1510: `812`,
    1511: `814`,
    1512: `815`,
    1513: `816`,
    1514: `817`,
    1515: `817`,
    1516: `818`,
    1517: `818`,
    1518: `819`,
    1519: `820`,
    152: `24`,
    1520: `821`,
    1521: `821`,
    1522: `822`,
    1523: `823`,
    1524: `824`,
    1525: `824`,
    1526: `826`,
    1527: `826`,
    1528: `827`,
    1529: `827`,
    153: `24`,
    1530: `828`,
    1531: `829`,
    1532: `830`,
    1533: `830`,
    1534: `830`,
    1535: `831`,
    1536: `831`,
    1537: `832`,
    1538: `833`,
    1539: `834`,
    154: `24`,
    1540: `834`,
    1541: `835`,
    1542: `835`,
    1543: `836`,
    1544: `836`,
    1545: `836`,
    1546: `837`,
    1547: `837`,
    1548: `838`,
    1549: `838`,
    155: `24`,
    1550: `838`,
    1551: `838`,
    1552: `838`,
    1553: `838`,
    1554: `839`,
    1555: `839`,
    1556: `840`,
    1557: `841`,
    1558: `842`,
    1559: `842`,
    156: `24`,
    1560: `843`,
    1561: `844`,
    1562: `846`,
    1563: `846`,
    1564: `847`,
    1565: `847`,
    1566: `847`,
    1567: `848`,
    1568: `848`,
    1569: `849`,
    157: `24`,
    1570: `850`,
    1571: `851`,
    1572: `851`,
    1573: `851`,
    1574: `851`,
    1575: `851`,
    1576: `851`,
    1577: `851`,
    1578: `851`,
    1579: `851`,
    158: `24`,
    1580: `851`,
    1581: `851`,
    1582: `851`,
    1583: `851`,
    1584: `851`,
    1585: `851`,
    1586: `851`,
    1587: `851`,
    1588: `851`,
    1589: `852`,
    159: `24`,
    1590: `852`,
    1591: `852`,
    1592: `854`,
    1593: `854`,
    1594: `855`,
    1595: `855`,
    1596: `856`,
    1597: `857`,
    1598: `860`,
    1599: `860`,
    16: `2`,
    160: `24`,
    1600: `860`,
    1601: `861`,
    1602: `861`,
    1603: `863`,
    1604: `864`,
    1605: `864`,
    1606: `865`,
    1607: `866`,
    1608: `866`,
    1609: `867`,
    161: `24`,
    1610: `868`,
    1611: `868`,
    1612: `868`,
    1613: `869`,
    1614: `869`,
    1615: `869`,
    1616: `870`,
    1617: `870`,
    1618: `871`,
    1619: `871`,
    162: `24`,
    1620: `871`,
    1621: `873`,
    1622: `873`,
    1623: `874`,
    1624: `874`,
    1625: `875`,
    1626: `876`,
    1627: `879`,
    1628: `879`,
    1629: `879`,
    163: `24`,
    1630: `880`,
    1631: `880`,
    1632: `881`,
    1633: `882`,
    1634: `882`,
    1635: `883`,
    1636: `883`,
    1637: `883`,
    1638: `885`,
    1639: `886`,
    164: `24`,
    1640: `887`,
    1641: `887`,
    1642: `888`,
    1643: `888`,
    1644: `889`,
    1645: `889`,
    1646: `890`,
    1647: `891`,
    1648: `892`,
    1649: `892`,
    165: `24`,
    1650: `893`,
    1651: `894`,
    1652: `895`,
    1653: `895`,
    1654: `896`,
    1655: `896`,
    1656: `896`,
    1657: `898`,
    1658: `899`,
    1659: `900`,
    166: `24`,
    1660: `900`,
    1661: `901`,
    1662: `901`,
    1663: `902`,
    1664: `903`,
    1665: `903`,
    1666: `904`,
    1667: `905`,
    1668: `906`,
    1669: `907`,
    167: `24`,
    1670: `907`,
    1671: `908`,
    1672: `908`,
    1673: `908`,
    1674: `910`,
    1675: `911`,
    1676: `912`,
    1677: `912`,
    1678: `912`,
    1679: `913`,
    168: `24`,
    1680: `913`,
    1681: `914`,
    1682: `915`,
    1683: `916`,
    1684: `916`,
    1685: `917`,
    1686: `918`,
    1687: `919`,
    1688: `920`,
    1689: `920`,
    169: `24`,
    1690: `921`,
    1691: `921`,
    1692: `921`,
    1693: `923`,
    1694: `923`,
    1695: `923`,
    1696: `923`,
    1697: `923`,
    1698: `923`,
    1699: `923`,
    17: `2`,
    170: `24`,
    1700: `923`,
    1701: `923`,
    1702: `923`,
    1703: `923`,
    1704: `923`,
    1705: `923`,
    1706: `923`,
    1707: `923`,
    1708: `923`,
    1709: `923`,
    171: `24`,
    1710: `923`,
    1711: `923`,
    1712: `923`,
    1713: `923`,
    1714: `923`,
    1715: `923`,
    1716: `923`,
    1717: `923`,
    1718: `923`,
    1719: `923`,
    172: `24`,
    1720: `923`,
    1721: `923`,
    1722: `923`,
    1723: `923`,
    1724: `923`,
    1725: `923`,
    1726: `923`,
    1727: `923`,
    1728: `923`,
    1729: `923`,
    173: `24`,
    1730: `923`,
    1731: `923`,
    1732: `923`,
    1733: `923`,
    1734: `923`,
    1735: `923`,
    1736: `923`,
    1737: `923`,
    1738: `923`,
    1739: `923`,
    174: `24`,
    1740: `923`,
    1741: `923`,
    1742: `923`,
    1743: `923`,
    1744: `923`,
    1745: `923`,
    1746: `923`,
    1747: `923`,
    1748: `923`,
    1749: `923`,
    175: `24`,
    1750: `923`,
    1751: `923`,
    1752: `923`,
    1753: `923`,
    1754: `923`,
    1755: `923`,
    1756: `923`,
    1757: `923`,
    1758: `923`,
    1759: `923`,
    176: `24`,
    1760: `923`,
    1761: `923`,
    1762: `923`,
    1763: `923`,
    1764: `923`,
    1765: `923`,
    1766: `923`,
    1767: `923`,
    1768: `923`,
    1769: `923`,
    177: `24`,
    1770: `923`,
    1771: `923`,
    1772: `923`,
    1773: `923`,
    1774: `923`,
    1775: `923`,
    1776: `923`,
    1777: `923`,
    1778: `923`,
    1779: `923`,
    178: `24`,
    1780: `923`,
    1781: `923`,
    1782: `923`,
    1783: `923`,
    1784: `923`,
    1785: `923`,
    1786: `923`,
    1787: `923`,
    1788: `923`,
    1789: `923`,
    179: `24`,
    1790: `923`,
    1791: `923`,
    1792: `923`,
    1793: `923`,
    1794: `923`,
    1795: `923`,
    1796: `923`,
    1797: `923`,
    1798: `923`,
    1799: `923`,
    18: `2`,
    180: `24`,
    1800: `924`,
    1801: `924`,
    1802: `925`,
    1803: `925`,
    1804: `925`,
    1805: `927`,
    1806: `927`,
    1807: `928`,
    1808: `928`,
    1809: `929`,
    181: `24`,
    1810: `930`,
    1811: `933`,
    1812: `933`,
    1813: `933`,
    1814: `934`,
    1815: `934`,
    1816: `935`,
    1817: `935`,
    1818: `935`,
    1819: `936`,
    182: `24`,
    1820: `936`,
    1821: `937`,
    1822: `937`,
    1823: `937`,
    1824: `939`,
    1825: `939`,
    1826: `940`,
    1827: `940`,
    1828: `941`,
    1829: `942`,
    183: `24`,
    1830: `945`,
    1831: `945`,
    1832: `945`,
    1833: `946`,
    1834: `946`,
    1835: `947`,
    1836: `947`,
    1837: `947`,
    1838: `948`,
    1839: `948`,
    184: `24`,
    1840: `949`,
    1841: `949`,
    1842: `949`,
    1843: `950`,
    1844: `951`,
    1845: `951`,
    1846: `952`,
    1847: `952`,
    1848: `952`,
    1849: `953`,
    185: `24`,
    1850: `954`,
    1851: `954`,
    1852: `955`,
    1853: `955`,
    1854: `955`,
    1855: `956`,
    1856: `957`,
    1857: `957`,
    1858: `958`,
    1859: `958`,
    186: `24`,
    1860: `958`,
    1861: `959`,
    1862: `960`,
    1863: `960`,
    1864: `961`,
    1865: `961`,
    1866: `961`,
    1867: `962`,
    1868: `963`,
    1869: `963`,
    187: `24`,
    1870: `964`,
    1871: `964`,
    1872: `964`,
    1873: `965`,
    1874: `966`,
    1875: `966`,
    1876: `967`,
    1877: `967`,
    1878: `967`,
    1879: `968`,
    188: `24`,
    1880: `969`,
    1881: `969`,
    1882: `970`,
    1883: `970`,
    1884: `970`,
    1885: `971`,
    1886: `972`,
    1887: `972`,
    1888: `973`,
    1889: `973`,
    189: `24`,
    1890: `973`,
    1891: `975`,
    1892: `975`,
    1893: `976`,
    1894: `976`,
    1895: `977`,
    1896: `978`,
    1897: `981`,
    1898: `981`,
    1899: `981`,
    19: `2`,
    190: `25`,
    1900: `982`,
    1901: `982`,
    1902: `983`,
    1903: `983`,
    1904: `983`,
    1905: `984`,
    1906: `984`,
    1907: `985`,
    1908: `985`,
    1909: `985`,
    191: `25`,
    1910: `987`,
    1911: `987`,
    1912: `988`,
    1913: `988`,
    1914: `989`,
    1915: `990`,
    1916: `993`,
    1917: `993`,
    1918: `993`,
    1919: `994`,
    192: `25`,
    1920: `994`,
    1921: `995`,
    1922: `995`,
    1923: `996`,
    1924: `996`,
    1925: `996`,
    1926: `998`,
    1927: `999`,
    1928: `1000`,
    1929: `1000`,
    193: `26`,
    1930: `1000`,
    1931: `1001`,
    1932: `1001`,
    1933: `1002`,
    1934: `1002`,
    1935: `1003`,
    1936: `1004`,
    1937: `1005`,
    1938: `1005`,
    1939: `1006`,
    194: `26`,
    1940: `1007`,
    1941: `1008`,
    1942: `1008`,
    1943: `1009`,
    1944: `1009`,
    1945: `1009`,
    1946: `1011`,
    1947: `1012`,
    1948: `1013`,
    1949: `1013`,
    195: `26`,
    1950: `1013`,
    1951: `1014`,
    1952: `1014`,
    1953: `1015`,
    1954: `1015`,
    1955: `1016`,
    1956: `1017`,
    1957: `1017`,
    1958: `1018`,
    1959: `1019`,
    196: `26`,
    1960: `1020`,
    1961: `1021`,
    1962: `1021`,
    1963: `1022`,
    1964: `1022`,
    1965: `1022`,
    1966: `1024`,
    1967: `1025`,
    1968: `1026`,
    1969: `1026`,
    197: `26`,
    1970: `1026`,
    1971: `1027`,
    1972: `1027`,
    1973: `1028`,
    1974: `1029`,
    1975: `1030`,
    1976: `1030`,
    1977: `1031`,
    1978: `1032`,
    1979: `1033`,
    198: `26`,
    1980: `1034`,
    1981: `1034`,
    1982: `1035`,
    1983: `1035`,
    1984: `1035`,
    1985: `1037`,
    1986: `1037`,
    1987: `1038`,
    1988: `1039`,
    1989: `1040`,
    199: `26`,
    1990: `1040`,
    1991: `1041`,
    1992: `1041`,
    1993: `1042`,
    1994: `1042`,
    1995: `1042`,
    1996: `1043`,
    1997: `1043`,
    1998: `1044`,
    1999: `1044`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `1045`,
    2001: `1045`,
    2002: `1045`,
    2003: `1046`,
    2004: `1047`,
    2005: `1047`,
    2006: `1048`,
    2007: `1048`,
    2008: `1049`,
    2009: `1049`,
    201: `26`,
    2010: `1049`,
    2011: `1050`,
    2012: `1050`,
    2013: `1051`,
    2014: `1051`,
    2015: `1051`,
    2016: `1051`,
    2017: `1051`,
    2018: `1051`,
    2019: `1052`,
    202: `26`,
    2020: `1052`,
    2021: `1053`,
    2022: `1054`,
    2023: `1055`,
    2024: `1055`,
    2025: `1056`,
    2026: `1057`,
    2027: `1057`,
    2028: `1058`,
    2029: `1059`,
    203: `26`,
    2030: `1059`,
    2031: `1059`,
    2032: `1060`,
    2033: `1061`,
    2034: `1061`,
    2035: `1062`,
    2036: `1063`,
    2037: `1065`,
    2038: `1065`,
    2039: `1066`,
    204: `26`,
    2040: `1066`,
    2041: `1066`,
    2042: `1067`,
    2043: `1067`,
    2044: `1068`,
    2045: `1069`,
    2046: `1070`,
    2047: `1071`,
    2048: `1071`,
    2049: `1072`,
    205: `26`,
    2050: `1072`,
    2051: `1072`,
    2052: `1073`,
    2053: `1074`,
    2054: `1078`,
    2055: `1078`,
    2056: `1079`,
    2057: `1079`,
    2058: `1081`,
    2059: `1082`,
    206: `26`,
    2060: `1083`,
    2061: `1083`,
    2062: `1084`,
    2063: `1085`,
    2064: `1085`,
    2065: `1086`,
    2066: `1086`,
    2067: `1086`,
    2068: `1088`,
    2069: `1089`,
    207: `26`,
    2070: `1090`,
    2071: `1090`,
    2072: `1091`,
    2073: `1092`,
    2074: `1092`,
    2075: `1093`,
    2076: `1093`,
    2077: `1093`,
    2078: `1094`,
    2079: `1094`,
    208: `26`,
    2080: `1095`,
    2081: `1095`,
    2082: `1096`,
    2083: `1097`,
    2084: `1097`,
    2085: `1098`,
    2086: `1099`,
    2087: `1099`,
    2088: `1100`,
    2089: `1101`,
    209: `26`,
    2090: `1101`,
    2091: `1102`,
    2092: `1103`,
    2093: `1105`,
    2094: `1106`,
    2095: `1106`,
    2096: `1107`,
    2097: `1108`,
    2098: `1109`,
    2099: `1109`,
    21: `2`,
    210: `26`,
    2100: `1110`,
    2101: `1111`,
    2102: `1111`,
    2103: `1111`,
    2104: `1112`,
    2105: `1113`,
    2106: `1113`,
    2107: `1114`,
    2108: `1115`,
    2109: `1115`,
    211: `26`,
    2110: `1116`,
    2111: `1116`,
    2112: `1116`,
    2113: `1117`,
    2114: `1118`,
    2115: `1118`,
    2116: `1119`,
    2117: `1119`,
    2118: `1119`,
    2119: `1120`,
    212: `26`,
    2120: `1121`,
    2121: `1122`,
    2122: `1123`,
    2123: `1124`,
    2124: `1124`,
    2125: `1125`,
    2126: `1126`,
    2127: `1126`,
    2128: `1127`,
    2129: `1128`,
    213: `26`,
    2130: `1128`,
    2131: `1129`,
    2132: `1129`,
    2133: `1130`,
    2134: `1130`,
    2135: `1131`,
    2136: `1131`,
    2137: `1131`,
    2138: `1133`,
    2139: `1133`,
    214: `26`,
    2140: `1133`,
    2141: `1134`,
    2142: `1134`,
    2143: `1134`,
    2144: `1134`,
    2145: `1135`,
    2146: `1135`,
    2147: `1135`,
    2148: `1136`,
    2149: `1136`,
    215: `26`,
    2150: `1136`,
    2151: `1137`,
    2152: `1137`,
    2153: `1138`,
    2154: `1138`,
    2155: `1138`,
    2156: `1140`,
    2157: `1140`,
    2158: `1140`,
    2159: `1141`,
    216: `26`,
    2160: `1141`,
    2161: `1141`,
    2162: `1142`,
    2163: `1142`,
    2164: `1143`,
    2165: `1143`,
    2166: `1143`,
    2167: `1145`,
    2168: `1146`,
    2169: `1146`,
    217: `26`,
    2170: `1147`,
    2171: `1148`,
    2172: `1149`,
    2173: `1149`,
    2174: `1150`,
    2175: `1150`,
    2176: `1151`,
    2177: `1152`,
    2178: `1153`,
    2179: `1154`,
    218: `26`,
    2180: `1154`,
    2181: `1155`,
    2182: `1156`,
    2183: `1157`,
    2184: `1158`,
    2185: `1158`,
    2186: `1159`,
    2187: `1160`,
    2188: `1161`,
    2189: `1161`,
    219: `26`,
    2190: `1161`,
    2191: `1162`,
    2192: `1162`,
    2193: `1162`,
    2194: `1163`,
    2195: `1164`,
    2196: `1165`,
    2197: `1167`,
    2198: `1167`,
    2199: `1168`,
    22: `2`,
    220: `26`,
    2200: `1168`,
    2201: `1169`,
    2202: `1170`,
    2203: `1170`,
    2204: `1171`,
    2205: `1171`,
    2206: `1171`,
    2207: `1172`,
    2208: `1173`,
    2209: `1173`,
    221: `26`,
    2210: `1174`,
    2211: `1174`,
    2212: `1175`,
    2213: `1175`,
    2214: `1175`,
    2215: `1176`,
    2216: `1177`,
    2217: `1177`,
    2218: `1178`,
    2219: `1179`,
    222: `26`,
    2220: `1179`,
    2221: `1179`,
    2222: `1180`,
    2223: `1181`,
    2224: `1182`,
    2225: `1182`,
    2226: `1183`,
    2227: `1184`,
    2228: `1184`,
    2229: `1185`,
    223: `26`,
    2230: `1186`,
    2231: `1187`,
    2232: `1188`,
    2233: `1188`,
    2234: `1189`,
    2235: `1190`,
    2236: `1191`,
    2237: `1193`,
    2238: `1193`,
    2239: `1193`,
    224: `26`,
    2240: `1194`,
    2241: `1194`,
    2242: `1194`,
    2243: `1196`,
    2244: `1196`,
    2245: `1196`,
    2246: `1197`,
    2247: `1197`,
    2248: `1197`,
    2249: `1198`,
    225: `26`,
    2250: `1198`,
    2251: `1199`,
    2252: `1199`,
    2253: `1200`,
    2254: `1200`,
    2255: `1200`,
    2256: `1202`,
    2257: `1202`,
    2258: `1202`,
    2259: `1203`,
    226: `26`,
    2260: `1203`,
    2261: `1203`,
    2262: `1204`,
    2263: `1204`,
    2264: `1205`,
    2265: `1205`,
    2266: `1206`,
    2267: `1206`,
    2268: `1206`,
    2269: `1208`,
    227: `26`,
    2270: `1208`,
    2271: `1208`,
    2272: `1209`,
    2273: `1209`,
    2274: `1210`,
    2275: `1210`,
    2276: `1210`,
    2277: `1212`,
    2278: `1212`,
    2279: `1212`,
    228: `26`,
    2280: `1214`,
    2281: `1214`,
    2282: `1214`,
    2283: `1215`,
    2284: `1215`,
    2285: `1215`,
    2286: `1216`,
    2287: `1216`,
    2288: `1217`,
    2289: `1217`,
    229: `28`,
    2290: `1218`,
    2291: `1218`,
    2292: `1218`,
    2293: `1220`,
    2294: `1220`,
    2295: `1220`,
    2296: `1221`,
    2297: `1221`,
    2298: `1222`,
    2299: `1222`,
    23: `2`,
    230: `30`,
    2300: `1222`,
    2301: `1224`,
    2302: `1224`,
    2303: `1224`,
    2304: `1225`,
    2305: `1226`,
    2306: `1226`,
    2307: `1227`,
    2308: `1227`,
    2309: `1227`,
    231: `30`,
    2310: `1229`,
    2311: `1229`,
    2312: `1229`,
    2313: `1231`,
    2314: `1231`,
    2315: `1231`,
    2316: `1233`,
    2317: `1233`,
    2318: `1233`,
    2319: `1235`,
    232: `31`,
    2320: `1235`,
    2321: `1236`,
    2322: `1236`,
    2323: `1236`,
    2324: `1237`,
    2325: `1237`,
    2326: `1238`,
    2327: `1238`,
    2328: `1238`,
    2329: `1240`,
    233: `31`,
    2330: `1240`,
    2331: `1241`,
    2332: `1241`,
    2333: `1241`,
    2334: `1242`,
    2335: `1242`,
    2336: `1243`,
    2337: `1243`,
    2338: `1243`,
    2339: `1245`,
    234: `31`,
    2340: `1245`,
    2341: `1245`,
    2342: `1248`,
    2343: `1248`,
    2344: `1249`,
    2345: `1249`,
    2346: `1250`,
    2347: `1251`,
    2348: `1251`,
    2349: `1252`,
    235: `32`,
    2350: `1253`,
    2351: `1254`,
    2352: `1254`,
    2353: `1255`,
    2354: `1256`,
    2355: `1256`,
    2356: `1257`,
    2357: `1258`,
    2358: `1258`,
    2359: `1259`,
    236: `32`,
    2360: `1259`,
    2361: `1260`,
    2362: `1260`,
    2363: `1260`,
    2364: `1262`,
    2365: `1263`,
    2366: `1264`,
    2367: `1265`,
    2368: `1266`,
    2369: `1268`,
    237: `33`,
    2370: `1269`,
    2371: `1269`,
    2372: `1270`,
    2373: `1271`,
    2374: `1271`,
    2375: `1272`,
    2376: `1272`,
    2377: `1273`,
    2378: `1273`,
    2379: `1274`,
    238: `33`,
    2380: `1275`,
    2381: `1277`,
    2382: `1277`,
    2383: `1278`,
    2384: `1278`,
    2385: `1278`,
    2386: `1279`,
    2387: `1279`,
    2388: `1280`,
    2389: `1280`,
    239: `34`,
    2390: `1280`,
    2391: `1282`,
    2392: `1282`,
    2393: `1283`,
    2394: `1283`,
    2395: `1283`,
    2396: `1284`,
    2397: `1284`,
    2398: `1285`,
    2399: `1285`,
    24: `2`,
    240: `34`,
    2400: `1285`,
    2401: `1287`,
    2402: `1287`,
    2403: `1287`,
    2404: `1289`,
    2405: `1289`,
    2406: `1289`,
    2407: `1291`,
    2408: `1291`,
    2409: `1291`,
    241: `34`,
    2410: `1293`,
    2411: `1293`,
    2412: `1293`,
    2413: `1295`,
    2414: `1295`,
    2415: `1295`,
    2416: `1297`,
    2417: `1297`,
    2418: `1297`,
    2419: `1298`,
    242: `35`,
    2420: `1298`,
    2421: `1298`,
    2422: `1299`,
    2423: `1299`,
    2424: `1299`,
    2425: `1300`,
    2426: `1300`,
    2427: `1301`,
    2428: `1301`,
    2429: `1302`,
    243: `35`,
    2430: `1302`,
    2431: `1303`,
    2432: `1303`,
    2433: `1303`,
    2434: `1305`,
    2435: `1305`,
    2436: `1305`,
    2437: `1306`,
    2438: `1306`,
    2439: `1306`,
    244: `36`,
    2440: `1307`,
    2441: `1307`,
    2442: `1308`,
    2443: `1308`,
    2444: `1309`,
    2445: `1309`,
    2446: `1309`,
    2447: `1311`,
    2448: `1312`,
    2449: `1314`,
    245: `36`,
    2450: `1315`,
    2451: `1316`,
    2452: `1317`,
    2453: `1317`,
    2454: `1318`,
    2455: `1318`,
    2456: `1319`,
    2457: `1319`,
    2458: `1319`,
    2459: `1320`,
    246: `37`,
    2460: `1322`,
    2461: `1323`,
    2462: `1324`,
    2463: `1324`,
    2464: `1324`,
    2465: `1325`,
    2466: `1326`,
    2467: `1326`,
    2468: `1327`,
    2469: `1327`,
    247: `37`,
    2470: `1327`,
    2471: `1328`,
    2472: `1330`,
    2473: `1330`,
    2474: `1330`,
    2475: `1331`,
    2476: `1332`,
    2477: `1332`,
    2478: `1333`,
    2479: `1333`,
    248: `38`,
    2480: `1333`,
    2481: `1335`,
    2482: `1336`,
    2483: `1336`,
    2484: `1336`,
    2485: `1337`,
    2486: `1338`,
    2487: `1339`,
    2488: `1340`,
    2489: `1341`,
    249: `39`,
    2490: `1343`,
    2491: `1344`,
    2492: `1345`,
    2493: `1346`,
    2494: `1346`,
    2495: `1346`,
    2496: `1347`,
    2497: `1347`,
    2498: `1348`,
    2499: `1349`,
    25: `2`,
    250: `44`,
    2500: `1350`,
    2501: `1352`,
    2502: `1353`,
    2503: `1354`,
    2504: `1355`,
    2505: `1355`,
    2506: `1355`,
    2507: `1356`,
    2508: `1356`,
    2509: `1357`,
    251: `44`,
    2510: `1357`,
    2511: `1357`,
    2512: `1358`,
    2513: `1358`,
    2514: `1358`,
    2515: `1360`,
    2516: `1361`,
    2517: `1362`,
    2518: `1362`,
    2519: `1363`,
    252: `45`,
    2520: `1364`,
    2521: `1365`,
    2522: `1366`,
    2523: `1367`,
    2524: `1368`,
    2525: `1370`,
    2526: `1371`,
    2527: `1371`,
    2528: `1371`,
    2529: `1372`,
    253: `45`,
    2530: `1372`,
    2531: `1373`,
    2532: `1374`,
    2533: `1374`,
    2534: `1374`,
    2535: `1375`,
    2536: `1375`,
    2537: `1376`,
    2538: `1377`,
    2539: `1377`,
    254: `46`,
    2540: `1378`,
    2541: `1379`,
    2542: `1379`,
    2543: `1380`,
    2544: `1381`,
    2545: `1381`,
    2546: `1381`,
    2547: `1382`,
    2548: `1382`,
    2549: `1383`,
    255: `47`,
    2550: `1383`,
    2551: `1383`,
    2552: `1384`,
    2553: `1384`,
    2554: `1385`,
    2555: `1387`,
    2556: `1388`,
    2557: `1389`,
    2558: `1389`,
    2559: `1390`,
    256: `53`,
    2560: `1392`,
    2561: `1392`,
    2562: `1393`,
    2563: `1394`,
    2564: `1394`,
    2565: `1395`,
    2566: `1397`,
    2567: `1398`,
    2568: `1398`,
    2569: `1399`,
    257: `53`,
    2570: `1401`,
    2571: `1402`,
    2572: `1403`,
    2573: `1404`,
    2574: `1405`,
    2575: `1405`,
    2576: `1406`,
    2577: `1407`,
    2578: `1408`,
    2579: `1409`,
    258: `54`,
    2580: `1411`,
    2581: `1411`,
    2582: `1412`,
    2583: `1412`,
    2584: `1413`,
    2585: `1414`,
    2586: `1415`,
    2587: `1415`,
    2588: `1415`,
    2589: `1416`,
    259: `55`,
    2590: `1416`,
    2591: `1416`,
    2592: `1418`,
    2593: `1418`,
    2594: `1419`,
    2595: `1420`,
    2596: `1420`,
    2597: `1421`,
    2598: `1423`,
    2599: `1424`,
    26: `2`,
    260: `55`,
    2600: `1424`,
    2601: `1424`,
    2602: `1427`,
    2603: `1427`,
    2604: `1428`,
    2605: `1428`,
    2606: `1429`,
    2607: `1430`,
    2608: `1431`,
    2609: `1432`,
    261: `56`,
    2610: `1432`,
    2611: `1433`,
    2612: `1434`,
    2613: `1434`,
    2614: `1435`,
    2615: `1435`,
    2616: `1436`,
    2617: `1436`,
    2618: `1437`,
    2619: `1438`,
    262: `56`,
    2620: `1439`,
    2621: `1439`,
    2622: `1440`,
    2623: `1441`,
    2624: `1442`,
    2625: `1443`,
    2626: `1443`,
    2627: `1444`,
    2628: `1445`,
    2629: `1446`,
    263: `57`,
    2630: `1448`,
    2631: `1449`,
    2632: `1449`,
    2633: `1450`,
    264: `58`,
    265: `59`,
    266: `60`,
    267: `60`,
    268: `61`,
    269: `61`,
    27: `2`,
    270: `61`,
    271: `62`,
    272: `62`,
    273: `63`,
    274: `63`,
    275: `64`,
    276: `65`,
    277: `65`,
    278: `66`,
    279: `67`,
    28: `2`,
    280: `67`,
    281: `68`,
    282: `69`,
    283: `71`,
    284: `72`,
    285: `72`,
    286: `73`,
    287: `73`,
    288: `73`,
    289: `73`,
    29: `2`,
    290: `73`,
    291: `73`,
    292: `73`,
    293: `73`,
    294: `73`,
    295: `73`,
    296: `74`,
    297: `74`,
    298: `75`,
    299: `76`,
    3: `2`,
    30: `2`,
    300: `76`,
    301: `76`,
    302: `77`,
    303: `78`,
    304: `79`,
    305: `79`,
    306: `80`,
    307: `81`,
    308: `81`,
    309: `81`,
    31: `2`,
    310: `82`,
    311: `82`,
    312: `83`,
    313: `83`,
    314: `84`,
    315: `84`,
    316: `86`,
    317: `86`,
    318: `87`,
    319: `87`,
    32: `2`,
    320: `87`,
    321: `88`,
    322: `89`,
    323: `89`,
    324: `89`,
    325: `91`,
    326: `91`,
    327: `92`,
    328: `92`,
    329: `93`,
    33: `2`,
    330: `94`,
    331: `96`,
    332: `96`,
    333: `96`,
    334: `98`,
    335: `99`,
    336: `99`,
    337: `100`,
    338: `100`,
    339: `101`,
    34: `2`,
    340: `101`,
    341: `101`,
    342: `103`,
    343: `103`,
    344: `104`,
    345: `104`,
    346: `104`,
    347: `106`,
    348: `106`,
    349: `106`,
    35: `2`,
    350: `106`,
    351: `106`,
    352: `106`,
    353: `107`,
    354: `107`,
    355: `108`,
    356: `109`,
    357: `111`,
    358: `112`,
    359: `114`,
    36: `2`,
    360: `114`,
    361: `115`,
    362: `115`,
    363: `115`,
    364: `116`,
    365: `116`,
    366: `117`,
    367: `117`,
    368: `117`,
    369: `118`,
    37: `2`,
    370: `119`,
    371: `119`,
    372: `121`,
    373: `122`,
    374: `122`,
    375: `123`,
    376: `124`,
    377: `124`,
    378: `125`,
    379: `126`,
    38: `2`,
    380: `127`,
    381: `127`,
    382: `127`,
    383: `128`,
    384: `129`,
    385: `129`,
    386: `130`,
    387: `131`,
    388: `132`,
    389: `133`,
    39: `2`,
    390: `134`,
    391: `139`,
    392: `139`,
    393: `140`,
    394: `140`,
    395: `141`,
    396: `141`,
    397: `141`,
    398: `142`,
    399: `142`,
    4: `2`,
    40: `2`,
    400: `143`,
    401: `144`,
    402: `149`,
    403: `149`,
    404: `150`,
    405: `151`,
    406: `151`,
    407: `152`,
    408: `153`,
    409: `154`,
    41: `2`,
    410: `154`,
    411: `154`,
    412: `155`,
    413: `156`,
    414: `156`,
    415: `157`,
    416: `157`,
    417: `157`,
    418: `157`,
    419: `157`,
    42: `2`,
    420: `157`,
    421: `157`,
    422: `157`,
    423: `157`,
    424: `157`,
    425: `158`,
    426: `158`,
    427: `159`,
    428: `160`,
    429: `160`,
    43: `2`,
    430: `160`,
    431: `161`,
    432: `162`,
    433: `163`,
    434: `163`,
    435: `164`,
    436: `165`,
    437: `165`,
    438: `165`,
    439: `166`,
    44: `2`,
    440: `166`,
    441: `167`,
    442: `167`,
    443: `168`,
    444: `168`,
    445: `169`,
    446: `169`,
    447: `169`,
    448: `171`,
    449: `171`,
    45: `2`,
    450: `172`,
    451: `172`,
    452: `172`,
    453: `173`,
    454: `174`,
    455: `174`,
    456: `175`,
    457: `175`,
    458: `176`,
    459: `177`,
    46: `2`,
    460: `183`,
    461: `184`,
    462: `184`,
    463: `185`,
    464: `186`,
    465: `186`,
    466: `187`,
    467: `188`,
    468: `188`,
    469: `188`,
    47: `2`,
    470: `189`,
    471: `190`,
    472: `190`,
    473: `191`,
    474: `192`,
    475: `193`,
    476: `194`,
    477: `195`,
    478: `200`,
    479: `200`,
    48: `2`,
    480: `201`,
    481: `201`,
    482: `202`,
    483: `202`,
    484: `202`,
    485: `203`,
    486: `203`,
    487: `204`,
    488: `205`,
    489: `210`,
    49: `2`,
    490: `211`,
    491: `212`,
    492: `212`,
    493: `213`,
    494: `214`,
    495: `214`,
    496: `214`,
    497: `215`,
    498: `216`,
    499: `216`,
    5: `2`,
    50: `2`,
    500: `217`,
    501: `217`,
    502: `217`,
    503: `217`,
    504: `217`,
    505: `217`,
    506: `217`,
    507: `217`,
    508: `217`,
    509: `217`,
    51: `2`,
    510: `218`,
    511: `218`,
    512: `219`,
    513: `220`,
    514: `220`,
    515: `220`,
    516: `221`,
    517: `222`,
    518: `223`,
    519: `223`,
    52: `2`,
    520: `224`,
    521: `225`,
    522: `225`,
    523: `225`,
    524: `226`,
    525: `226`,
    526: `227`,
    527: `227`,
    528: `228`,
    529: `228`,
    53: `2`,
    530: `229`,
    531: `229`,
    532: `229`,
    533: `231`,
    534: `231`,
    535: `232`,
    536: `233`,
    537: `234`,
    538: `235`,
    539: `235`,
    54: `2`,
    540: `236`,
    541: `236`,
    542: `236`,
    543: `239`,
    544: `239`,
    545: `240`,
    546: `241`,
    547: `241`,
    548: `242`,
    549: `243`,
    55: `2`,
    550: `244`,
    551: `244`,
    552: `246`,
    553: `247`,
    554: `248`,
    555: `248`,
    556: `249`,
    557: `250`,
    558: `250`,
    559: `251`,
    56: `2`,
    560: `252`,
    561: `252`,
    562: `253`,
    563: `254`,
    564: `254`,
    565: `255`,
    566: `256`,
    567: `256`,
    568: `256`,
    569: `257`,
    57: `2`,
    570: `257`,
    571: `257`,
    572: `258`,
    573: `258`,
    574: `259`,
    575: `260`,
    576: `260`,
    577: `260`,
    578: `261`,
    579: `261`,
    58: `2`,
    580: `261`,
    581: `262`,
    582: `262`,
    583: `264`,
    584: `265`,
    585: `265`,
    586: `266`,
    587: `267`,
    588: `267`,
    589: `268`,
    59: `2`,
    590: `269`,
    591: `269`,
    592: `269`,
    593: `270`,
    594: `270`,
    595: `270`,
    596: `271`,
    597: `271`,
    598: `272`,
    599: `273`,
    6: `2`,
    60: `2`,
    600: `273`,
    601: `273`,
    602: `274`,
    603: `274`,
    604: `275`,
    605: `276`,
    606: `277`,
    607: `277`,
    608: `278`,
    609: `279`,
    61: `2`,
    610: `279`,
    611: `280`,
    612: `280`,
    613: `280`,
    614: `281`,
    615: `282`,
    616: `282`,
    617: `283`,
    618: `284`,
    619: `284`,
    62: `2`,
    620: `285`,
    621: `286`,
    622: `286`,
    623: `287`,
    624: `288`,
    625: `290`,
    626: `290`,
    627: `291`,
    628: `291`,
    629: `292`,
    63: `2`,
    630: `293`,
    631: `293`,
    632: `293`,
    633: `294`,
    634: `294`,
    635: `295`,
    636: `295`,
    637: `295`,
    638: `295`,
    639: `295`,
    64: `2`,
    640: `295`,
    641: `295`,
    642: `295`,
    643: `295`,
    644: `295`,
    645: `296`,
    646: `296`,
    647: `297`,
    648: `298`,
    649: `299`,
    65: `2`,
    650: `299`,
    651: `300`,
    652: `300`,
    653: `301`,
    654: `301`,
    655: `302`,
    656: `302`,
    657: `302`,
    658: `303`,
    659: `303`,
    66: `2`,
    660: `304`,
    661: `304`,
    662: `304`,
    663: `305`,
    664: `306`,
    665: `306`,
    666: `307`,
    667: `307`,
    668: `307`,
    669: `308`,
    67: `2`,
    670: `309`,
    671: `309`,
    672: `310`,
    673: `310`,
    674: `310`,
    675: `311`,
    676: `312`,
    677: `312`,
    678: `313`,
    679: `313`,
    68: `2`,
    680: `313`,
    681: `314`,
    682: `315`,
    683: `315`,
    684: `316`,
    685: `316`,
    686: `316`,
    687: `317`,
    688: `318`,
    689: `318`,
    69: `2`,
    690: `319`,
    691: `319`,
    692: `320`,
    693: `321`,
    694: `321`,
    695: `322`,
    696: `323`,
    697: `324`,
    698: `325`,
    699: `325`,
    7: `2`,
    70: `2`,
    700: `326`,
    701: `326`,
    702: `326`,
    703: `327`,
    704: `328`,
    705: `328`,
    706: `329`,
    707: `329`,
    708: `329`,
    709: `330`,
    71: `2`,
    710: `331`,
    711: `331`,
    712: `332`,
    713: `332`,
    714: `333`,
    715: `333`,
    716: `334`,
    717: `334`,
    718: `334`,
    719: `336`,
    72: `2`,
    720: `336`,
    721: `336`,
    722: `336`,
    723: `336`,
    724: `336`,
    725: `336`,
    726: `336`,
    727: `336`,
    728: `336`,
    729: `336`,
    73: `2`,
    730: `336`,
    731: `336`,
    732: `336`,
    733: `336`,
    734: `336`,
    735: `336`,
    736: `336`,
    737: `336`,
    738: `336`,
    739: `336`,
    74: `2`,
    740: `336`,
    741: `336`,
    742: `336`,
    743: `336`,
    744: `336`,
    745: `336`,
    746: `336`,
    747: `336`,
    748: `336`,
    749: `336`,
    75: `2`,
    750: `336`,
    751: `336`,
    752: `336`,
    753: `336`,
    754: `337`,
    755: `338`,
    756: `339`,
    757: `340`,
    758: `341`,
    759: `346`,
    76: `2`,
    760: `346`,
    761: `347`,
    762: `347`,
    763: `348`,
    764: `349`,
    765: `350`,
    766: `350`,
    767: `351`,
    768: `352`,
    769: `353`,
    77: `4`,
    770: `359`,
    771: `360`,
    772: `361`,
    773: `361`,
    774: `362`,
    775: `363`,
    776: `363`,
    777: `363`,
    778: `364`,
    779: `365`,
    78: `4`,
    780: `365`,
    781: `366`,
    782: `366`,
    783: `366`,
    784: `366`,
    785: `366`,
    786: `366`,
    787: `366`,
    788: `366`,
    789: `366`,
    79: `5`,
    790: `366`,
    791: `367`,
    792: `367`,
    793: `368`,
    794: `369`,
    795: `370`,
    796: `370`,
    797: `371`,
    798: `371`,
    799: `372`,
    8: `2`,
    80: `5`,
    800: `372`,
    801: `373`,
    802: `373`,
    803: `374`,
    804: `374`,
    805: `374`,
    806: `375`,
    807: `376`,
    808: `376`,
    809: `377`,
    81: `5`,
    810: `377`,
    811: `377`,
    812: `378`,
    813: `379`,
    814: `379`,
    815: `380`,
    816: `380`,
    817: `380`,
    818: `381`,
    819: `382`,
    82: `6`,
    820: `382`,
    821: `383`,
    822: `383`,
    823: `383`,
    824: `384`,
    825: `385`,
    826: `385`,
    827: `386`,
    828: `386`,
    829: `386`,
    83: `7`,
    830: `387`,
    831: `388`,
    832: `388`,
    833: `389`,
    834: `390`,
    835: `391`,
    836: `391`,
    837: `392`,
    838: `392`,
    839: `392`,
    84: `8`,
    840: `393`,
    841: `394`,
    842: `394`,
    843: `395`,
    844: `395`,
    845: `395`,
    846: `396`,
    847: `397`,
    848: `397`,
    849: `398`,
    85: `9`,
    850: `398`,
    851: `399`,
    852: `399`,
    853: `400`,
    854: `400`,
    855: `400`,
    856: `402`,
    857: `402`,
    858: `403`,
    859: `403`,
    86: `10`,
    860: `403`,
    861: `404`,
    862: `404`,
    863: `405`,
    864: `405`,
    865: `406`,
    866: `406`,
    867: `406`,
    868: `407`,
    869: `407`,
    87: `11`,
    870: `408`,
    871: `408`,
    872: `409`,
    873: `409`,
    874: `410`,
    875: `411`,
    876: `416`,
    877: `416`,
    878: `418`,
    879: `419`,
    88: `11`,
    880: `419`,
    881: `420`,
    882: `421`,
    883: `421`,
    884: `422`,
    885: `423`,
    886: `423`,
    887: `423`,
    888: `424`,
    889: `424`,
    89: `12`,
    890: `424`,
    891: `425`,
    892: `426`,
    893: `426`,
    894: `427`,
    895: `427`,
    896: `428`,
    897: `429`,
    898: `434`,
    899: `435`,
    9: `2`,
    90: `13`,
    900: `436`,
    901: `436`,
    902: `437`,
    903: `438`,
    904: `438`,
    905: `439`,
    906: `439`,
    907: `440`,
    908: `441`,
    909: `441`,
    91: `14`,
    910: `441`,
    911: `442`,
    912: `442`,
    913: `442`,
    914: `444`,
    915: `445`,
    916: `446`,
    917: `446`,
    918: `447`,
    919: `448`,
    92: `14`,
    920: `448`,
    921: `449`,
    922: `450`,
    923: `450`,
    924: `451`,
    925: `452`,
    926: `452`,
    927: `453`,
    928: `454`,
    929: `454`,
    93: `15`,
    930: `454`,
    931: `455`,
    932: `455`,
    933: `455`,
    934: `456`,
    935: `456`,
    936: `457`,
    937: `458`,
    938: `458`,
    939: `458`,
    94: `16`,
    940: `459`,
    941: `459`,
    942: `459`,
    943: `460`,
    944: `461`,
    945: `461`,
    946: `462`,
    947: `463`,
    948: `463`,
    949: `464`,
    95: `17`,
    950: `465`,
    951: `465`,
    952: `466`,
    953: `467`,
    954: `469`,
    955: `470`,
    956: `470`,
    957: `471`,
    958: `471`,
    959: `471`,
    96: `17`,
    960: `471`,
    961: `471`,
    962: `471`,
    963: `471`,
    964: `471`,
    965: `471`,
    966: `471`,
    967: `472`,
    968: `472`,
    969: `473`,
    97: `18`,
    970: `474`,
    971: `474`,
    972: `474`,
    973: `475`,
    974: `476`,
    975: `477`,
    976: `477`,
    977: `478`,
    978: `479`,
    979: `479`,
    98: `19`,
    980: `479`,
    981: `480`,
    982: `480`,
    983: `481`,
    984: `481`,
    985: `482`,
    986: `482`,
    987: `483`,
    988: `483`,
    989: `483`,
    99: `20`,
    990: `485`,
    991: `485`,
    992: `486`,
    993: `486`,
    994: `486`,
    995: `487`,
    996: `487`,
    997: `488`,
    998: `488`,
    999: `489`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 274,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:312:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:123:31:after expr stmt semicolon',
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
