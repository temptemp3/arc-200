// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    minBal: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:6:23:decimal', stdlib.UInt_max, '100000');})()
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    constructor: ctc3,
    manager: ctc3,
    token: ctc1,
    tokenAmount: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Struct([['constructor', ctc3], ['manager', ctc3], ['token', ctc1], ['tokenAmount', ctc4]]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc4
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc9;
  
  
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2022, v2023, v2034, v2055] = svs;
      return (await ((async (_v2046, _v2047 ) => {
          const v2046 = stdlib.protect(ctc3, _v2046, null);
          const v2047 = stdlib.protect(ctc3, _v2047, null);
        
        const v2048 = [v2046, v2047];
        const v2049 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc6, v2048, ctc4), null);
        const v2050 = stdlib.fromSome(v2049, stdlib.checkedBigNumberify('./index.rsh:89:68:decimal', stdlib.UInt_max, '0'));
        
        return v2050;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2022, v2023, v2034, v2055] = svs;
      return (await ((async (_v2051 ) => {
          const v2051 = stdlib.protect(ctc3, _v2051, null);
        
        const v2052 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc3, v2051, ctc4), null);
        const v2053 = stdlib.fromSome(v2052, stdlib.checkedBigNumberify('./index.rsh:90:51:decimal', stdlib.UInt_max, '0'));
        
        return v2053;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2022, v2023, v2034, v2055] = svs;
      return (await ((async () => {
        
        const v2078 = v2055.constructor;
        const v2079 = v2055.manager;
        const v2080 = v2055.token;
        const v2081 = v2055.tokenAmount;
        const v2082 = {
          constructor: v2078,
          manager: v2079,
          token: v2080,
          tokenAmount: v2081
          };
        
        return v2082;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2022, v2023, v2034, v2055] = svs;
      return (await ((async () => {
        
        const v2077 = v2055.tokenAmount;
        
        return v2077;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      allowance: {
        decode: _allowance,
        dom: [ctc3, ctc3],
        rng: ctc4
        },
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc3],
        rng: ctc4
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc7
        },
      totalSupply: {
        decode: _totalSupply,
        dom: [],
        rng: ctc4
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc1, ctc2, ctc5]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    ctc: ctc3,
    token: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc8, ctc1]);
  const ctc12 = stdlib.T_Data({
    C_grant0_136: ctc9,
    U1_approve0_136: ctc10,
    U1_transfer0_136: ctc10,
    U1_transferFrom0_136: ctc11,
    U2_deposit0_136: ctc10,
    U2_withdraw0_136: ctc10,
    U3_transferFrom0_136: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc8, ctc8]);
  
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2013, time: v2012, didSend: v22, from: v2011 } = txn1;
  ;
  const v2016 = stdlib.protect(ctc5, await interact.getParams(), {
    at: './index.rsh:67:57:application',
    fs: ['at ./index.rsh:66:9:application call to [unknown function] (defined at: ./index.rsh:66:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v2017 = v2016.ctc;
  const v2018 = v2016.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v2017, v2018],
    evt_cnt: 2,
    funcNum: 1,
    lct: v2012,
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2022, v2023], secs: v2025, time: v2024, didSend: v36, from: v2021 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2023
        });
      ;
      
      const v2031 = await ctc.getContractInfo();
      const v2034 = [];
      const v2035 = [v2031, v2023];
      const v2036 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2022,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:78:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:78:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2036', ctc7, v2036);
      const v2054 = {
        constructor: v2021,
        manager: v2021,
        token: v2023,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2055 = v2054;
      const v2056 = v2024;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v2023
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
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v2022, v2023], secs: v2025, time: v2024, didSend: v36, from: v2021 } = txn2;
  ;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:70:19:application',
    fs: ['at ./index.rsh:70:19:application call to [unknown function] (defined at: ./index.rsh:70:19:function exp)', 'at ./index.rsh:70:19:application call to "liftedInteract" (defined at: ./index.rsh:70:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v2031 = await ctc.getContractInfo();
  const v2034 = [];
  const v2035 = [v2031, v2023];
  const v2036 = undefined /* Remote */;
  const v2037 = await txn2.getOutput('internal', 'v2036', ctc7, v2036);
  const v2039 = v2037[stdlib.checkedBigNumberify('./index.rsh:78:18:application', stdlib.UInt_max, '0')];
  const v2040 = v2037[stdlib.checkedBigNumberify('./index.rsh:78:18:application', stdlib.UInt_max, '1')];
  const v2045 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2039);
  stdlib.assert(v2045, {
    at: './index.rsh:78:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v2040, {
    at: './index.rsh:77:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v2054 = {
    constructor: v2021,
    manager: v2021,
    token: v2023,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2055 = v2054;
  let v2056 = v2024;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn4;
    switch (v2320[0]) {
      case 'C_grant0_136': {
        const v2323 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2382 = v2323[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
        const v2383 = v2055.manager;
        const v2384 = stdlib.addressEq(v2319, v2383);
        stdlib.assert(v2384, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v2390 = [v2022, v2023, v2382];
        const v2391 = undefined /* Remote */;
        const v2392 = await txn4.getOutput('internal', 'v2391', ctc7, v2391);
        const v2394 = v2392[stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '0')];
        const v2395 = v2392[stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '1')];
        const v2400 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2394);
        stdlib.assert(v2400, {
          at: './index.rsh:262:32:application',
          fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2395, {
          at: './index.rsh:262:18:application',
          fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v2401 = true;
        await txn4.getOutput('C_grant', 'v2401', ctc6, v2401);
        const v2408 = v2055.constructor;
        const v2410 = v2055.token;
        const v2411 = v2055.tokenAmount;
        const v2412 = {
          constructor: v2408,
          manager: v2382,
          token: v2410,
          tokenAmount: v2411
          };
        const cv2055 = v2412;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_approve0_136': {
        const v2776 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2869 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
        const v2870 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
        const v2873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2319, ctc1), null);
        const v2874 = {
          None: 0,
          Some: 1
          }[v2873[0]];
        const v2875 = stdlib.eq(v2874, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2875) {
          await stdlib.mapSet(map0, ctc8, v2319, ctc1, stdlib.checkedBigNumberify('./index.rsh:191:62:decimal', stdlib.UInt_max, '0'));
          const v2876 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2869, ctc1), null);
          const v2877 = {
            None: 0,
            Some: 1
            }[v2876[0]];
          const v2878 = stdlib.eq(v2877, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2878) {
            await stdlib.mapSet(map0, ctc8, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
            const v2879 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc13, v2879, ctc1, v2870);
            const v2883 = [v2022, v2023, v2319, v2869, v2870];
            const v2884 = undefined /* Remote */;
            const v2885 = await txn4.getOutput('internal', 'v2884', ctc7, v2884);
            const v2887 = v2885[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2888 = v2885[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2893 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2887);
            stdlib.assert(v2893, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2888, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2894 = true;
            await txn4.getOutput('U1_approve', 'v2894', ctc6, v2894);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}
          else {
            const v2903 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc13, v2903, ctc1, v2870);
            const v2907 = [v2022, v2023, v2319, v2869, v2870];
            const v2908 = undefined /* Remote */;
            const v2909 = await txn4.getOutput('internal', 'v2908', ctc7, v2908);
            const v2911 = v2909[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2912 = v2909[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2917 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2911);
            stdlib.assert(v2917, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2912, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2918 = true;
            await txn4.getOutput('U1_approve', 'v2918', ctc6, v2918);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}}
        else {
          const v2927 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2869, ctc1), null);
          const v2928 = {
            None: 0,
            Some: 1
            }[v2927[0]];
          const v2929 = stdlib.eq(v2928, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2929) {
            await stdlib.mapSet(map0, ctc8, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
            const v2930 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc13, v2930, ctc1, v2870);
            const v2934 = [v2022, v2023, v2319, v2869, v2870];
            const v2935 = undefined /* Remote */;
            const v2936 = await txn4.getOutput('internal', 'v2935', ctc7, v2935);
            const v2938 = v2936[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2939 = v2936[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2944 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2938);
            stdlib.assert(v2944, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2939, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2945 = true;
            await txn4.getOutput('U1_approve', 'v2945', ctc6, v2945);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}
          else {
            const v2954 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc13, v2954, ctc1, v2870);
            const v2958 = [v2022, v2023, v2319, v2869, v2870];
            const v2959 = undefined /* Remote */;
            const v2960 = await txn4.getOutput('internal', 'v2959', ctc7, v2959);
            const v2962 = v2960[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2963 = v2960[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2968 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2962);
            stdlib.assert(v2968, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v2963, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Alice'
              });
            const v2969 = true;
            await txn4.getOutput('U1_approve', 'v2969', ctc6, v2969);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      case 'U1_transfer0_136': {
        const v3229 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3432 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '0')];
        const v3433 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '1')];
        const v3434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2319, ctc1), null);
        const v3435 = {
          None: 0,
          Some: 1
          }[v3434[0]];
        const v3436 = stdlib.eq(v3435, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3436, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Alice'
          });
        const v3439 = stdlib.fromSome(v3434, stdlib.checkedBigNumberify('./index.rsh:107:42:decimal', stdlib.UInt_max, '0'));
        const v3440 = stdlib.le(v3433, v3439);
        stdlib.assert(v3440, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:107:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        const v3446 = stdlib.safeSub(v3439, v3433);
        await stdlib.mapSet(map0, ctc8, v2319, ctc1, v3446);
        const v3447 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3432, ctc1), null);
        const v3448 = stdlib.fromSome(v3447, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
        const v3449 = stdlib.safeAdd(v3448, v3433);
        await stdlib.mapSet(map0, ctc8, v3432, ctc1, v3449);
        const v3453 = [v2022, v2023, v2319, v3432, v3433];
        const v3454 = ['Transfer', v3453];
        const v3455 = undefined /* Remote */;
        const v3456 = await txn4.getOutput('internal', 'v3455', ctc7, v3455);
        const v3458 = v3456[stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '0')];
        const v3459 = v3456[stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '1')];
        const v3464 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3458);
        stdlib.assert(v3464, {
          at: './index.rsh:114:29:application',
          fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3459, {
          at: './index.rsh:113:18:application',
          fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Alice'
          });
        const v3465 = true;
        await txn4.getOutput('U1_transfer', 'v3465', ctc6, v3465);
        const cv2055 = v2055;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_transferFrom0_136': {
        const v3682 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3928 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
        const v3929 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
        const v3930 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
        const v3931 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3928, ctc1), null);
        const v3932 = {
          None: 0,
          Some: 1
          }[v3931[0]];
        const v3933 = stdlib.eq(v3932, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3933, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Alice'
          });
        const v3935 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3929, ctc1), null);
        const v3936 = {
          None: 0,
          Some: 1
          }[v3935[0]];
        const v3937 = stdlib.eq(v3936, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3937, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Alice'
          });
        const v3939 = [v3928, v2319];
        const v3940 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3939, ctc1), null);
        const v3941 = {
          None: 0,
          Some: 1
          }[v3940[0]];
        const v3942 = stdlib.eq(v3941, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3942, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'No allowance',
          who: 'Alice'
          });
        const v3946 = stdlib.fromSome(v3940, stdlib.checkedBigNumberify('./index.rsh:134:52:decimal', stdlib.UInt_max, '0'));
        const v3947 = stdlib.le(v3930, v3946);
        stdlib.assert(v3947, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Alice'
          });
        const v3950 = stdlib.fromSome(v3931, stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '0'));
        const v3951 = stdlib.le(v3930, v3950);
        stdlib.assert(v3951, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        const v3958 = stdlib.safeSub(v3950, v3930);
        await stdlib.mapSet(map0, ctc8, v3928, ctc1, v3958);
        const v3959 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v3929, ctc1), null);
        const v3960 = stdlib.fromSome(v3959, stdlib.checkedBigNumberify('./index.rsh:142:53:decimal', stdlib.UInt_max, '0'));
        const v3961 = stdlib.safeAdd(v3960, v3930);
        await stdlib.mapSet(map0, ctc8, v3929, ctc1, v3961);
        const v3966 = stdlib.safeSub(v3946, v3930);
        await stdlib.mapSet(map1, ctc13, v3939, ctc1, v3966);
        const v3970 = [v2022, v2023, v3928, v3929, v3930];
        const v3971 = ['TransferFrom', v3970];
        const v3972 = undefined /* Remote */;
        const v3973 = await txn4.getOutput('internal', 'v3972', ctc7, v3972);
        const v3975 = v3973[stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '0')];
        const v3976 = v3973[stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '1')];
        const v3981 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3975);
        stdlib.assert(v3981, {
          at: './index.rsh:146:29:application',
          fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v3976, {
          at: './index.rsh:145:18:application',
          fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Child app rejected transferFrom',
          who: 'Alice'
          });
        const v3982 = true;
        await txn4.getOutput('U1_transferFrom', 'v3982', ctc6, v3982);
        const cv2055 = v2055;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_deposit0_136': {
        const v4135 = v2320[1];
        undefined /* setApiDetails */;
        const v4161 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '1')];
        ;
        ;
        const v4446 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '0')];
        const v4450 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v4446, ctc1), null);
        const v4451 = stdlib.fromSome(v4450, stdlib.checkedBigNumberify('./index.rsh:211:47:decimal', stdlib.UInt_max, '0'));
        const v4452 = stdlib.safeAdd(v4451, v4161);
        await stdlib.mapSet(map0, ctc8, v4446, ctc1, v4452);
        const v4456 = [v2022, v2023, v2319, v4446, v4161];
        const v4457 = ['Deposit', v4456];
        const v4458 = undefined /* Remote */;
        const v4459 = await txn4.getOutput('internal', 'v4458', ctc7, v4458);
        const v4461 = v4459[stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '0')];
        const v4462 = v4459[stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '1')];
        const v4467 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4461);
        stdlib.assert(v4467, {
          at: './index.rsh:213:29:application',
          fs: ['at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4462, {
          at: './index.rsh:212:18:application',
          fs: ['at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Alice'
          });
        const v4468 = true;
        await txn4.getOutput('U2_deposit', 'v4468', ctc6, v4468);
        const v4476 = v2055.constructor;
        const v4477 = v2055.manager;
        const v4478 = v2055.token;
        const v4479 = v2055.tokenAmount;
        const v4481 = stdlib.safeAdd(v4479, v4161);
        const v4482 = {
          constructor: v4476,
          manager: v4477,
          token: v4478,
          tokenAmount: v4481
          };
        const cv2055 = v4482;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_withdraw0_136': {
        const v4588 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4939 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
        const v4940 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '1')];
        const v4941 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2319, ctc1), null);
        const v4942 = stdlib.fromSome(v4941, stdlib.checkedBigNumberify('./index.rsh:233:42:decimal', stdlib.UInt_max, '0'));
        const v4943 = stdlib.le(v4940, v4942);
        stdlib.assert(v4943, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        ;
        const v4958 = stdlib.safeSub(v4942, v4940);
        await stdlib.mapSet(map0, ctc8, v2319, ctc1, v4958);
        const v4962 = [v2022, v2023, v2319, v4939, v4940];
        const v4963 = ['Withdraw', v4962];
        const v4964 = undefined /* Remote */;
        const v4965 = await txn4.getOutput('internal', 'v4964', ctc7, v4964);
        const v4967 = v4965[stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '0')];
        const v4968 = v4965[stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '1')];
        const v4973 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4967);
        stdlib.assert(v4973, {
          at: './index.rsh:239:29:application',
          fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4968, {
          at: './index.rsh:238:18:application',
          fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'Child app rejected withdraw',
          who: 'Alice'
          });
        const v4974 = true;
        await txn4.getOutput('U2_withdraw', 'v4974', ctc6, v4974);
        const v4982 = v2055.constructor;
        const v4983 = v2055.manager;
        const v4984 = v2055.token;
        const v4985 = v2055.tokenAmount;
        const v4987 = stdlib.safeSub(v4985, v4940);
        const v4988 = {
          constructor: v4982,
          manager: v4983,
          token: v4984,
          tokenAmount: v4987
          };
        const cv2055 = v4988;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U3_transferFrom0_136': {
        const v5041 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v5445 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
        const v5446 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
        const v5447 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
        const v5448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5445, ctc1), null);
        const v5449 = {
          None: 0,
          Some: 1
          }[v5448[0]];
        const v5450 = stdlib.eq(v5449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5450, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Alice'
          });
        const v5452 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5446, ctc1), null);
        const v5453 = {
          None: 0,
          Some: 1
          }[v5452[0]];
        const v5454 = stdlib.eq(v5453, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5454, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Alice'
          });
        const v5456 = [v5445, v2319];
        const v5457 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v5456, ctc1), null);
        const v5458 = {
          None: 0,
          Some: 1
          }[v5457[0]];
        const v5459 = stdlib.eq(v5458, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5459, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'No allowance',
          who: 'Alice'
          });
        const v5463 = stdlib.fromSome(v5457, stdlib.checkedBigNumberify('./index.rsh:166:52:decimal', stdlib.UInt_max, '0'));
        const v5464 = stdlib.le(v5447, v5463);
        stdlib.assert(v5464, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Alice'
          });
        const v5467 = stdlib.fromSome(v5448, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '0'));
        const v5468 = stdlib.le(v5447, v5467);
        stdlib.assert(v5468, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Alice'
          });
        const v5475 = stdlib.safeSub(v5467, v5447);
        await stdlib.mapSet(map0, ctc8, v5445, ctc1, v5475);
        const v5476 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5446, ctc1), null);
        const v5477 = stdlib.fromSome(v5476, stdlib.checkedBigNumberify('./index.rsh:174:53:decimal', stdlib.UInt_max, '0'));
        const v5478 = stdlib.safeAdd(v5477, v5447);
        await stdlib.mapSet(map0, ctc8, v5446, ctc1, v5478);
        const v5483 = stdlib.safeSub(v5463, v5447);
        await stdlib.mapSet(map1, ctc13, v5456, ctc1, v5483);
        const v5484 = true;
        await txn4.getOutput('U3_transferFrom', 'v5484', ctc6, v5484);
        const cv2055 = v2055;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _C_grant4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_grant4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_grant4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_136: ctc8,
    U1_approve0_136: ctc9,
    U1_transfer0_136: ctc9,
    U1_transferFrom0_136: ctc10,
    U2_deposit0_136: ctc9,
    U2_withdraw0_136: ctc9,
    U3_transferFrom0_136: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2244 = ctc.selfAddress();
  const v2246 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:258:29:application call to [unknown function] (defined at: ./index.rsh:258:29:function exp)', 'at ./index.rsh:91:29:application call to "runC_grant0_136" (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v2249 = v2055.manager;
  const v2250 = stdlib.addressEq(v2244, v2249);
  stdlib.assert(v2250, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:258:29:application call to [unknown function] (defined at: ./index.rsh:258:29:function exp)', 'at ./index.rsh:91:29:application call to "runC_grant0_136" (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v2257 = ['C_grant0_136', v2246];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2257],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:258:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:99:14:decimal', stdlib.UInt_max, '0'), v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          ;
          const v2382 = v2323[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
          const v2390 = [v2022, v2023, v2382];
          const v2391 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2022,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2391', ctc13, v2391);
          const v2401 = true;
          const v2402 = await txn1.getOutput('C_grant', 'v2401', ctc12, v2401);
          
          const v2408 = v2055.constructor;
          const v2410 = v2055.token;
          const v2411 = v2055.tokenAmount;
          const v2412 = {
            constructor: v2408,
            manager: v2382,
            token: v2410,
            tokenAmount: v2411
            };
          const v13982 = v2412;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2382 = v2323[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
      const v2383 = v2055.manager;
      const v2384 = stdlib.addressEq(v2319, v2383);
      stdlib.assert(v2384, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v2390 = [v2022, v2023, v2382];
      const v2391 = undefined /* Remote */;
      const v2392 = await txn1.getOutput('internal', 'v2391', ctc13, v2391);
      const v2394 = v2392[stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '0')];
      const v2395 = v2392[stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '1')];
      const v2400 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2394);
      stdlib.assert(v2400, {
        at: './index.rsh:262:32:application',
        fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v2395, {
        at: './index.rsh:262:18:application',
        fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v2401 = true;
      const v2402 = await txn1.getOutput('C_grant', 'v2401', ctc12, v2401);
      if (v1377) {
        stdlib.protect(ctc0, await interact.out(v2323, v2402), {
          at: './index.rsh:258:11:application',
          fs: ['at ./index.rsh:258:11:application call to [unknown function] (defined at: ./index.rsh:258:11:function exp)', 'at ./index.rsh:263:12:application call to "k" (defined at: ./index.rsh:261:13:function exp)', 'at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v2408 = v2055.constructor;
      const v2410 = v2055.token;
      const v2411 = v2055.tokenAmount;
      const v2412 = {
        constructor: v2408,
        manager: v2382,
        token: v2410,
        tokenAmount: v2411
        };
      const v13982 = v2412;
      return;
      
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      return;
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      return;
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      return;
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      return;
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      return;
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      return;
      break;
      }
    }
  
  
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
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_136: ctc8,
    U1_approve0_136: ctc9,
    U1_transfer0_136: ctc9,
    U1_transferFrom0_136: ctc10,
    U2_deposit0_136: ctc9,
    U2_withdraw0_136: ctc9,
    U3_transferFrom0_136: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc7, ctc7]);
  
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
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:64:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2013, time: v2012, didSend: v22, from: v2011 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2013, time: v2012, didSend: v22, from: v2011 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2022, v2023], secs: v2025, time: v2024, didSend: v36, from: v2021 } = txn2;
  ;
  ;
  const v2031 = await ctc.getContractInfo();
  const v2034 = [];
  const v2035 = [v2031, v2023];
  const v2036 = undefined /* Remote */;
  const v2037 = await txn2.getOutput('internal', 'v2036', ctc6, v2036);
  const v2039 = v2037[stdlib.checkedBigNumberify('./index.rsh:78:18:application', stdlib.UInt_max, '0')];
  const v2040 = v2037[stdlib.checkedBigNumberify('./index.rsh:78:18:application', stdlib.UInt_max, '1')];
  const v2045 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2039);
  stdlib.assert(v2045, {
    at: './index.rsh:78:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v2040, {
    at: './index.rsh:77:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v2054 = {
    constructor: v2021,
    manager: v2021,
    token: v2023,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2055 = v2054;
  let v2056 = v2024;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn4;
    switch (v2320[0]) {
      case 'C_grant0_136': {
        const v2323 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2382 = v2323[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
        const v2383 = v2055.manager;
        const v2384 = stdlib.addressEq(v2319, v2383);
        stdlib.assert(v2384, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v2390 = [v2022, v2023, v2382];
        const v2391 = undefined /* Remote */;
        const v2392 = await txn4.getOutput('internal', 'v2391', ctc6, v2391);
        const v2394 = v2392[stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '0')];
        const v2395 = v2392[stdlib.checkedBigNumberify('./index.rsh:262:32:application', stdlib.UInt_max, '1')];
        const v2400 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2394);
        stdlib.assert(v2400, {
          at: './index.rsh:262:32:application',
          fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2395, {
          at: './index.rsh:262:18:application',
          fs: ['at ./index.rsh:261:13:application call to [unknown function] (defined at: ./index.rsh:261:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v2401 = true;
        await txn4.getOutput('C_grant', 'v2401', ctc5, v2401);
        const v2408 = v2055.constructor;
        const v2410 = v2055.token;
        const v2411 = v2055.tokenAmount;
        const v2412 = {
          constructor: v2408,
          manager: v2382,
          token: v2410,
          tokenAmount: v2411
          };
        const cv2055 = v2412;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_approve0_136': {
        const v2776 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v2869 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
        const v2870 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
        const v2873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2319, ctc1), null);
        const v2874 = {
          None: 0,
          Some: 1
          }[v2873[0]];
        const v2875 = stdlib.eq(v2874, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2875) {
          await stdlib.mapSet(map0, ctc7, v2319, ctc1, stdlib.checkedBigNumberify('./index.rsh:191:62:decimal', stdlib.UInt_max, '0'));
          const v2876 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2869, ctc1), null);
          const v2877 = {
            None: 0,
            Some: 1
            }[v2876[0]];
          const v2878 = stdlib.eq(v2877, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2878) {
            await stdlib.mapSet(map0, ctc7, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
            const v2879 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc12, v2879, ctc1, v2870);
            const v2883 = [v2022, v2023, v2319, v2869, v2870];
            const v2884 = undefined /* Remote */;
            const v2885 = await txn4.getOutput('internal', 'v2884', ctc6, v2884);
            const v2887 = v2885[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2888 = v2885[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2893 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2887);
            stdlib.assert(v2893, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2888, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2894 = true;
            await txn4.getOutput('U1_approve', 'v2894', ctc5, v2894);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}
          else {
            const v2903 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc12, v2903, ctc1, v2870);
            const v2907 = [v2022, v2023, v2319, v2869, v2870];
            const v2908 = undefined /* Remote */;
            const v2909 = await txn4.getOutput('internal', 'v2908', ctc6, v2908);
            const v2911 = v2909[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2912 = v2909[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2917 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2911);
            stdlib.assert(v2917, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2912, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2918 = true;
            await txn4.getOutput('U1_approve', 'v2918', ctc5, v2918);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}}
        else {
          const v2927 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2869, ctc1), null);
          const v2928 = {
            None: 0,
            Some: 1
            }[v2927[0]];
          const v2929 = stdlib.eq(v2928, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2929) {
            await stdlib.mapSet(map0, ctc7, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
            const v2930 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc12, v2930, ctc1, v2870);
            const v2934 = [v2022, v2023, v2319, v2869, v2870];
            const v2935 = undefined /* Remote */;
            const v2936 = await txn4.getOutput('internal', 'v2935', ctc6, v2935);
            const v2938 = v2936[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2939 = v2936[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2944 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2938);
            stdlib.assert(v2944, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2939, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2945 = true;
            await txn4.getOutput('U1_approve', 'v2945', ctc5, v2945);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}
          else {
            const v2954 = [v2319, v2869];
            await stdlib.mapSet(map1, ctc12, v2954, ctc1, v2870);
            const v2958 = [v2022, v2023, v2319, v2869, v2870];
            const v2959 = undefined /* Remote */;
            const v2960 = await txn4.getOutput('internal', 'v2959', ctc6, v2959);
            const v2962 = v2960[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
            const v2963 = v2960[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
            const v2968 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2962);
            stdlib.assert(v2968, {
              at: './index.rsh:195:28:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v2963, {
              at: './index.rsh:194:18:application',
              fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'Child app rejected allow',
              who: 'Deployer'
              });
            const v2969 = true;
            await txn4.getOutput('U1_approve', 'v2969', ctc5, v2969);
            const cv2055 = v2055;
            const cv2056 = v2321;
            
            v2055 = cv2055;
            v2056 = cv2056;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      case 'U1_transfer0_136': {
        const v3229 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3432 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '0')];
        const v3433 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '1')];
        const v3434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2319, ctc1), null);
        const v3435 = {
          None: 0,
          Some: 1
          }[v3434[0]];
        const v3436 = stdlib.eq(v3435, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3436, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Deployer'
          });
        const v3439 = stdlib.fromSome(v3434, stdlib.checkedBigNumberify('./index.rsh:107:42:decimal', stdlib.UInt_max, '0'));
        const v3440 = stdlib.le(v3433, v3439);
        stdlib.assert(v3440, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:107:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        const v3446 = stdlib.safeSub(v3439, v3433);
        await stdlib.mapSet(map0, ctc7, v2319, ctc1, v3446);
        const v3447 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3432, ctc1), null);
        const v3448 = stdlib.fromSome(v3447, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
        const v3449 = stdlib.safeAdd(v3448, v3433);
        await stdlib.mapSet(map0, ctc7, v3432, ctc1, v3449);
        const v3453 = [v2022, v2023, v2319, v3432, v3433];
        const v3454 = ['Transfer', v3453];
        const v3455 = undefined /* Remote */;
        const v3456 = await txn4.getOutput('internal', 'v3455', ctc6, v3455);
        const v3458 = v3456[stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '0')];
        const v3459 = v3456[stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '1')];
        const v3464 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3458);
        stdlib.assert(v3464, {
          at: './index.rsh:114:29:application',
          fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3459, {
          at: './index.rsh:113:18:application',
          fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Deployer'
          });
        const v3465 = true;
        await txn4.getOutput('U1_transfer', 'v3465', ctc5, v3465);
        const cv2055 = v2055;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_transferFrom0_136': {
        const v3682 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3928 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
        const v3929 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
        const v3930 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
        const v3931 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3928, ctc1), null);
        const v3932 = {
          None: 0,
          Some: 1
          }[v3931[0]];
        const v3933 = stdlib.eq(v3932, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3933, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Deployer'
          });
        const v3935 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3929, ctc1), null);
        const v3936 = {
          None: 0,
          Some: 1
          }[v3935[0]];
        const v3937 = stdlib.eq(v3936, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3937, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Deployer'
          });
        const v3939 = [v3928, v2319];
        const v3940 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3939, ctc1), null);
        const v3941 = {
          None: 0,
          Some: 1
          }[v3940[0]];
        const v3942 = stdlib.eq(v3941, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3942, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'No allowance',
          who: 'Deployer'
          });
        const v3946 = stdlib.fromSome(v3940, stdlib.checkedBigNumberify('./index.rsh:134:52:decimal', stdlib.UInt_max, '0'));
        const v3947 = stdlib.le(v3930, v3946);
        stdlib.assert(v3947, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Deployer'
          });
        const v3950 = stdlib.fromSome(v3931, stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '0'));
        const v3951 = stdlib.le(v3930, v3950);
        stdlib.assert(v3951, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        const v3958 = stdlib.safeSub(v3950, v3930);
        await stdlib.mapSet(map0, ctc7, v3928, ctc1, v3958);
        const v3959 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v3929, ctc1), null);
        const v3960 = stdlib.fromSome(v3959, stdlib.checkedBigNumberify('./index.rsh:142:53:decimal', stdlib.UInt_max, '0'));
        const v3961 = stdlib.safeAdd(v3960, v3930);
        await stdlib.mapSet(map0, ctc7, v3929, ctc1, v3961);
        const v3966 = stdlib.safeSub(v3946, v3930);
        await stdlib.mapSet(map1, ctc12, v3939, ctc1, v3966);
        const v3970 = [v2022, v2023, v3928, v3929, v3930];
        const v3971 = ['TransferFrom', v3970];
        const v3972 = undefined /* Remote */;
        const v3973 = await txn4.getOutput('internal', 'v3972', ctc6, v3972);
        const v3975 = v3973[stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '0')];
        const v3976 = v3973[stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '1')];
        const v3981 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3975);
        stdlib.assert(v3981, {
          at: './index.rsh:146:29:application',
          fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3976, {
          at: './index.rsh:145:18:application',
          fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'Child app rejected transferFrom',
          who: 'Deployer'
          });
        const v3982 = true;
        await txn4.getOutput('U1_transferFrom', 'v3982', ctc5, v3982);
        const cv2055 = v2055;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_deposit0_136': {
        const v4135 = v2320[1];
        undefined /* setApiDetails */;
        const v4161 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '1')];
        ;
        ;
        const v4446 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '0')];
        const v4450 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v4446, ctc1), null);
        const v4451 = stdlib.fromSome(v4450, stdlib.checkedBigNumberify('./index.rsh:211:47:decimal', stdlib.UInt_max, '0'));
        const v4452 = stdlib.safeAdd(v4451, v4161);
        await stdlib.mapSet(map0, ctc7, v4446, ctc1, v4452);
        const v4456 = [v2022, v2023, v2319, v4446, v4161];
        const v4457 = ['Deposit', v4456];
        const v4458 = undefined /* Remote */;
        const v4459 = await txn4.getOutput('internal', 'v4458', ctc6, v4458);
        const v4461 = v4459[stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '0')];
        const v4462 = v4459[stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '1')];
        const v4467 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4461);
        stdlib.assert(v4467, {
          at: './index.rsh:213:29:application',
          fs: ['at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4462, {
          at: './index.rsh:212:18:application',
          fs: ['at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
          msg: 'Child app rejected send',
          who: 'Deployer'
          });
        const v4468 = true;
        await txn4.getOutput('U2_deposit', 'v4468', ctc5, v4468);
        const v4476 = v2055.constructor;
        const v4477 = v2055.manager;
        const v4478 = v2055.token;
        const v4479 = v2055.tokenAmount;
        const v4481 = stdlib.safeAdd(v4479, v4161);
        const v4482 = {
          constructor: v4476,
          manager: v4477,
          token: v4478,
          tokenAmount: v4481
          };
        const cv2055 = v4482;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_withdraw0_136': {
        const v4588 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v4939 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
        const v4940 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '1')];
        const v4941 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v2319, ctc1), null);
        const v4942 = stdlib.fromSome(v4941, stdlib.checkedBigNumberify('./index.rsh:233:42:decimal', stdlib.UInt_max, '0'));
        const v4943 = stdlib.le(v4940, v4942);
        stdlib.assert(v4943, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        ;
        const v4958 = stdlib.safeSub(v4942, v4940);
        await stdlib.mapSet(map0, ctc7, v2319, ctc1, v4958);
        const v4962 = [v2022, v2023, v2319, v4939, v4940];
        const v4963 = ['Withdraw', v4962];
        const v4964 = undefined /* Remote */;
        const v4965 = await txn4.getOutput('internal', 'v4964', ctc6, v4964);
        const v4967 = v4965[stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '0')];
        const v4968 = v4965[stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '1')];
        const v4973 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4967);
        stdlib.assert(v4973, {
          at: './index.rsh:239:29:application',
          fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4968, {
          at: './index.rsh:238:18:application',
          fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'Child app rejected withdraw',
          who: 'Deployer'
          });
        const v4974 = true;
        await txn4.getOutput('U2_withdraw', 'v4974', ctc5, v4974);
        const v4982 = v2055.constructor;
        const v4983 = v2055.manager;
        const v4984 = v2055.token;
        const v4985 = v2055.tokenAmount;
        const v4987 = stdlib.safeSub(v4985, v4940);
        const v4988 = {
          constructor: v4982,
          manager: v4983,
          token: v4984,
          tokenAmount: v4987
          };
        const cv2055 = v4988;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U3_transferFrom0_136': {
        const v5041 = v2320[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v5445 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
        const v5446 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
        const v5447 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
        const v5448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5445, ctc1), null);
        const v5449 = {
          None: 0,
          Some: 1
          }[v5448[0]];
        const v5450 = stdlib.eq(v5449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5450, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Sender has no balance',
          who: 'Deployer'
          });
        const v5452 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5446, ctc1), null);
        const v5453 = {
          None: 0,
          Some: 1
          }[v5452[0]];
        const v5454 = stdlib.eq(v5453, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5454, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Recipient has no balance',
          who: 'Deployer'
          });
        const v5456 = [v5445, v2319];
        const v5457 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v5456, ctc1), null);
        const v5458 = {
          None: 0,
          Some: 1
          }[v5457[0]];
        const v5459 = stdlib.eq(v5458, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5459, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'No allowance',
          who: 'Deployer'
          });
        const v5463 = stdlib.fromSome(v5457, stdlib.checkedBigNumberify('./index.rsh:166:52:decimal', stdlib.UInt_max, '0'));
        const v5464 = stdlib.le(v5447, v5463);
        stdlib.assert(v5464, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Insufficient allowance',
          who: 'Deployer'
          });
        const v5467 = stdlib.fromSome(v5448, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '0'));
        const v5468 = stdlib.le(v5447, v5467);
        stdlib.assert(v5468, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'Insufficient funds',
          who: 'Deployer'
          });
        const v5475 = stdlib.safeSub(v5467, v5447);
        await stdlib.mapSet(map0, ctc7, v5445, ctc1, v5475);
        const v5476 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v5446, ctc1), null);
        const v5477 = stdlib.fromSome(v5476, stdlib.checkedBigNumberify('./index.rsh:174:53:decimal', stdlib.UInt_max, '0'));
        const v5478 = stdlib.safeAdd(v5477, v5447);
        await stdlib.mapSet(map0, ctc7, v5446, ctc1, v5478);
        const v5483 = stdlib.safeSub(v5463, v5447);
        await stdlib.mapSet(map1, ctc12, v5456, ctc1, v5483);
        const v5484 = true;
        await txn4.getOutput('U3_transferFrom', 'v5484', ctc5, v5484);
        const cv2055 = v2055;
        const cv2056 = v2321;
        
        v2055 = cv2055;
        v2056 = cv2056;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _U1_approve4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_approve4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_approve4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_136: ctc9,
    U1_approve0_136: ctc8,
    U1_transfer0_136: ctc8,
    U1_transferFrom0_136: ctc10,
    U2_deposit0_136: ctc8,
    U2_withdraw0_136: ctc8,
    U3_transferFrom0_136: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc13]);
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2194 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:187:45:application call to [unknown function] (defined at: ./index.rsh:187:45:function exp)', 'at ./index.rsh:91:29:application call to "runU1_approve0_136" (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'U1_approve'
    });
  const v2206 = ['U1_approve0_136', v2194];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2206],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:187:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:99:14:decimal', stdlib.UInt_max, '0'), v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_approve"
            });
          ;
          ;
          const v2869 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
          const v2870 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
          const v2873 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2319, ctc1), null);
          const v2874 = {
            None: 0,
            Some: 1
            }[v2873[0]];
          const v2875 = stdlib.eq(v2874, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          if (v2875) {
            await stdlib.simMapSet(sim_r, 0, ctc6, v2319, ctc1, stdlib.checkedBigNumberify('./index.rsh:191:62:decimal', stdlib.UInt_max, '0'));
            const v2876 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2869, ctc1), null);
            const v2877 = {
              None: 0,
              Some: 1
              }[v2876[0]];
            const v2878 = stdlib.eq(v2877, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            if (v2878) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
              const v2879 = [v2319, v2869];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2879, ctc1, v2870);
              const v2883 = [v2022, v2023, v2319, v2869, v2870];
              const v2884 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2022,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2884', ctc14, v2884);
              const v2894 = true;
              const v2895 = await txn1.getOutput('U1_approve', 'v2894', ctc13, v2894);
              
              const v14004 = v2055;
              sim_r.isHalt = false;
              }
            else {
              const v2903 = [v2319, v2869];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2903, ctc1, v2870);
              const v2907 = [v2022, v2023, v2319, v2869, v2870];
              const v2908 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2022,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2908', ctc14, v2908);
              const v2918 = true;
              const v2919 = await txn1.getOutput('U1_approve', 'v2918', ctc13, v2918);
              
              const v14006 = v2055;
              sim_r.isHalt = false;
              }}
          else {
            const v2927 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2869, ctc1), null);
            const v2928 = {
              None: 0,
              Some: 1
              }[v2927[0]];
            const v2929 = stdlib.eq(v2928, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            if (v2929) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
              const v2930 = [v2319, v2869];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2930, ctc1, v2870);
              const v2934 = [v2022, v2023, v2319, v2869, v2870];
              const v2935 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2022,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2935', ctc14, v2935);
              const v2945 = true;
              const v2946 = await txn1.getOutput('U1_approve', 'v2945', ctc13, v2945);
              
              const v14008 = v2055;
              sim_r.isHalt = false;
              }
            else {
              const v2954 = [v2319, v2869];
              await stdlib.simMapSet(sim_r, 1, ctc12, v2954, ctc1, v2870);
              const v2958 = [v2022, v2023, v2319, v2869, v2870];
              const v2959 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2022,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v2959', ctc14, v2959);
              const v2969 = true;
              const v2970 = await txn1.getOutput('U1_approve', 'v2969', ctc13, v2969);
              
              const v14010 = v2055;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      return;
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v2869 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '0')];
      const v2870 = v2776[stdlib.checkedBigNumberify('./index.rsh:187:10:spread', stdlib.UInt_max, '1')];
      const v2873 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2319, ctc1), null);
      const v2874 = {
        None: 0,
        Some: 1
        }[v2873[0]];
      const v2875 = stdlib.eq(v2874, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      if (v2875) {
        await stdlib.mapSet(map0, ctc6, v2319, ctc1, stdlib.checkedBigNumberify('./index.rsh:191:62:decimal', stdlib.UInt_max, '0'));
        const v2876 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2869, ctc1), null);
        const v2877 = {
          None: 0,
          Some: 1
          }[v2876[0]];
        const v2878 = stdlib.eq(v2877, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2878) {
          await stdlib.mapSet(map0, ctc6, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
          const v2879 = [v2319, v2869];
          await stdlib.mapSet(map1, ctc12, v2879, ctc1, v2870);
          const v2883 = [v2022, v2023, v2319, v2869, v2870];
          const v2884 = undefined /* Remote */;
          const v2885 = await txn1.getOutput('internal', 'v2884', ctc14, v2884);
          const v2887 = v2885[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
          const v2888 = v2885[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
          const v2893 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2887);
          stdlib.assert(v2893, {
            at: './index.rsh:195:28:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2888, {
            at: './index.rsh:194:18:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2894 = true;
          const v2895 = await txn1.getOutput('U1_approve', 'v2894', ctc13, v2894);
          if (v1377) {
            stdlib.protect(ctc0, await interact.out(v2776, v2895), {
              at: './index.rsh:187:11:application',
              fs: ['at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)', 'at ./index.rsh:198:12:application call to "k" (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v14004 = v2055;
          return;
          }
        else {
          const v2903 = [v2319, v2869];
          await stdlib.mapSet(map1, ctc12, v2903, ctc1, v2870);
          const v2907 = [v2022, v2023, v2319, v2869, v2870];
          const v2908 = undefined /* Remote */;
          const v2909 = await txn1.getOutput('internal', 'v2908', ctc14, v2908);
          const v2911 = v2909[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
          const v2912 = v2909[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
          const v2917 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2911);
          stdlib.assert(v2917, {
            at: './index.rsh:195:28:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2912, {
            at: './index.rsh:194:18:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2918 = true;
          const v2919 = await txn1.getOutput('U1_approve', 'v2918', ctc13, v2918);
          if (v1377) {
            stdlib.protect(ctc0, await interact.out(v2776, v2919), {
              at: './index.rsh:187:11:application',
              fs: ['at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)', 'at ./index.rsh:198:12:application call to "k" (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v14006 = v2055;
          return;
          }}
      else {
        const v2927 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2869, ctc1), null);
        const v2928 = {
          None: 0,
          Some: 1
          }[v2927[0]];
        const v2929 = stdlib.eq(v2928, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        if (v2929) {
          await stdlib.mapSet(map0, ctc6, v2869, ctc1, stdlib.checkedBigNumberify('./index.rsh:192:66:decimal', stdlib.UInt_max, '0'));
          const v2930 = [v2319, v2869];
          await stdlib.mapSet(map1, ctc12, v2930, ctc1, v2870);
          const v2934 = [v2022, v2023, v2319, v2869, v2870];
          const v2935 = undefined /* Remote */;
          const v2936 = await txn1.getOutput('internal', 'v2935', ctc14, v2935);
          const v2938 = v2936[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
          const v2939 = v2936[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
          const v2944 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2938);
          stdlib.assert(v2944, {
            at: './index.rsh:195:28:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2939, {
            at: './index.rsh:194:18:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2945 = true;
          const v2946 = await txn1.getOutput('U1_approve', 'v2945', ctc13, v2945);
          if (v1377) {
            stdlib.protect(ctc0, await interact.out(v2776, v2946), {
              at: './index.rsh:187:11:application',
              fs: ['at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)', 'at ./index.rsh:198:12:application call to "k" (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v14008 = v2055;
          return;
          }
        else {
          const v2954 = [v2319, v2869];
          await stdlib.mapSet(map1, ctc12, v2954, ctc1, v2870);
          const v2958 = [v2022, v2023, v2319, v2869, v2870];
          const v2959 = undefined /* Remote */;
          const v2960 = await txn1.getOutput('internal', 'v2959', ctc14, v2959);
          const v2962 = v2960[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '0')];
          const v2963 = v2960[stdlib.checkedBigNumberify('./index.rsh:195:28:application', stdlib.UInt_max, '1')];
          const v2968 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2962);
          stdlib.assert(v2968, {
            at: './index.rsh:195:28:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'remote bill check',
            who: 'U1_approve'
            });
          stdlib.assert(v2963, {
            at: './index.rsh:194:18:application',
            fs: ['at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
            msg: 'Child app rejected allow',
            who: 'U1_approve'
            });
          const v2969 = true;
          const v2970 = await txn1.getOutput('U1_approve', 'v2969', ctc13, v2969);
          if (v1377) {
            stdlib.protect(ctc0, await interact.out(v2776, v2970), {
              at: './index.rsh:187:11:application',
              fs: ['at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)', 'at ./index.rsh:198:12:application call to "k" (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
              msg: 'out',
              who: 'U1_approve'
              });
            }
          else {
            }
          
          const v14010 = v2055;
          return;
          }}
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      return;
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      return;
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      return;
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      return;
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U1_transfer4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_transfer4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_transfer4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_136: ctc9,
    U1_approve0_136: ctc8,
    U1_transfer0_136: ctc8,
    U1_transferFrom0_136: ctc10,
    U2_deposit0_136: ctc8,
    U2_withdraw0_136: ctc8,
    U3_transferFrom0_136: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2084 = ctc.selfAddress();
  const v2086 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transfer0_136" (defined at: ./index.rsh:105:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'U1_transfer'
    });
  const v2088 = v2086[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2091 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2084, ctc1), null);
  const v2092 = {
    None: 0,
    Some: 1
    }[v2091[0]];
  const v2093 = stdlib.eq(v2092, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2093, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transfer0_136" (defined at: ./index.rsh:105:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Sender has no balance',
    who: 'U1_transfer'
    });
  const v2096 = stdlib.fromSome(v2091, stdlib.checkedBigNumberify('./index.rsh:107:42:decimal', stdlib.UInt_max, '0'));
  const v2097 = stdlib.le(v2088, v2096);
  stdlib.assert(v2097, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:107:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:105:41:application call to [unknown function] (defined at: ./index.rsh:105:41:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transfer0_136" (defined at: ./index.rsh:105:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U1_transfer'
    });
  const v2106 = ['U1_transfer0_136', v2086];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2106],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:99:14:decimal', stdlib.UInt_max, '0'), v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_transfer"
            });
          ;
          ;
          const v3432 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '0')];
          const v3433 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '1')];
          const v3434 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2319, ctc1), null);
          const v3439 = stdlib.fromSome(v3434, stdlib.checkedBigNumberify('./index.rsh:107:42:decimal', stdlib.UInt_max, '0'));
          const v3446 = stdlib.safeSub(v3439, v3433);
          await stdlib.simMapSet(sim_r, 0, ctc6, v2319, ctc1, v3446);
          const v3447 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3432, ctc1), null);
          const v3448 = stdlib.fromSome(v3447, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
          const v3449 = stdlib.safeAdd(v3448, v3433);
          await stdlib.simMapSet(sim_r, 0, ctc6, v3432, ctc1, v3449);
          const v3453 = [v2022, v2023, v2319, v3432, v3433];
          const v3454 = ['Transfer', v3453];
          const v3455 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2022,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3455', ctc13, v3455);
          const v3465 = true;
          const v3466 = await txn1.getOutput('U1_transfer', 'v3465', ctc12, v3465);
          
          const v14032 = v2055;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      return;
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      return;
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3432 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '0')];
      const v3433 = v3229[stdlib.checkedBigNumberify('./index.rsh:105:10:spread', stdlib.UInt_max, '1')];
      const v3434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2319, ctc1), null);
      const v3435 = {
        None: 0,
        Some: 1
        }[v3434[0]];
      const v3436 = stdlib.eq(v3435, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3436, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'Sender has no balance',
        who: 'U1_transfer'
        });
      const v3439 = stdlib.fromSome(v3434, stdlib.checkedBigNumberify('./index.rsh:107:42:decimal', stdlib.UInt_max, '0'));
      const v3440 = stdlib.le(v3433, v3439);
      stdlib.assert(v3440, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:107:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U1_transfer'
        });
      const v3446 = stdlib.safeSub(v3439, v3433);
      await stdlib.mapSet(map0, ctc6, v2319, ctc1, v3446);
      const v3447 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3432, ctc1), null);
      const v3448 = stdlib.fromSome(v3447, stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, '0'));
      const v3449 = stdlib.safeAdd(v3448, v3433);
      await stdlib.mapSet(map0, ctc6, v3432, ctc1, v3449);
      const v3453 = [v2022, v2023, v2319, v3432, v3433];
      const v3454 = ['Transfer', v3453];
      const v3455 = undefined /* Remote */;
      const v3456 = await txn1.getOutput('internal', 'v3455', ctc13, v3455);
      const v3458 = v3456[stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '0')];
      const v3459 = v3456[stdlib.checkedBigNumberify('./index.rsh:114:29:application', stdlib.UInt_max, '1')];
      const v3464 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3458);
      stdlib.assert(v3464, {
        at: './index.rsh:114:29:application',
        fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_transfer'
        });
      stdlib.assert(v3459, {
        at: './index.rsh:113:18:application',
        fs: ['at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'Child app rejected send',
        who: 'U1_transfer'
        });
      const v3465 = true;
      const v3466 = await txn1.getOutput('U1_transfer', 'v3465', ctc12, v3465);
      if (v1377) {
        stdlib.protect(ctc0, await interact.out(v3229, v3466), {
          at: './index.rsh:105:11:application',
          fs: ['at ./index.rsh:105:11:application call to [unknown function] (defined at: ./index.rsh:105:11:function exp)', 'at ./index.rsh:119:12:application call to "k" (defined at: ./index.rsh:109:13:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'out',
          who: 'U1_transfer'
          });
        }
      else {
        }
      
      const v14032 = v2055;
      return;
      
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      return;
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      return;
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      return;
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U1_transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Data({
    C_grant0_136: ctc10,
    U1_approve0_136: ctc11,
    U1_transfer0_136: ctc11,
    U1_transferFrom0_136: ctc8,
    U2_deposit0_136: ctc11,
    U2_withdraw0_136: ctc11,
    U3_transferFrom0_136: ctc8
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc13]);
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2108 = ctc.selfAddress();
  const v2110 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transferFrom0_136" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'U1_transferFrom'
    });
  const v2111 = v2110[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2112 = v2110[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2113 = v2110[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2117 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2111, ctc1), null);
  const v2118 = {
    None: 0,
    Some: 1
    }[v2117[0]];
  const v2119 = stdlib.eq(v2118, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2119, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transferFrom0_136" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Sender has no balance',
    who: 'U1_transferFrom'
    });
  const v2121 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2112, ctc1), null);
  const v2122 = {
    None: 0,
    Some: 1
    }[v2121[0]];
  const v2123 = stdlib.eq(v2122, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2123, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transferFrom0_136" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Recipient has no balance',
    who: 'U1_transferFrom'
    });
  const v2125 = [v2111, v2108];
  const v2126 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2125, ctc1), null);
  const v2127 = {
    None: 0,
    Some: 1
    }[v2126[0]];
  const v2128 = stdlib.eq(v2127, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2128, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transferFrom0_136" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'No allowance',
    who: 'U1_transferFrom'
    });
  const v2132 = stdlib.fromSome(v2126, stdlib.checkedBigNumberify('./index.rsh:134:52:decimal', stdlib.UInt_max, '0'));
  const v2133 = stdlib.le(v2113, v2132);
  stdlib.assert(v2133, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transferFrom0_136" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Insufficient allowance',
    who: 'U1_transferFrom'
    });
  const v2136 = stdlib.fromSome(v2117, stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '0'));
  const v2137 = stdlib.le(v2113, v2136);
  stdlib.assert(v2137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:129:56:application call to [unknown function] (defined at: ./index.rsh:129:56:function exp)', 'at ./index.rsh:91:29:application call to "runU1_transferFrom0_136" (defined at: ./index.rsh:129:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U1_transferFrom'
    });
  const v2148 = ['U1_transferFrom0_136', v2110];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2148],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:99:14:decimal', stdlib.UInt_max, '0'), v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_transferFrom"
            });
          ;
          ;
          const v3928 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
          const v3929 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
          const v3930 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
          const v3931 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3928, ctc1), null);
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3929, ctc1), null);
          const v3939 = [v3928, v2319];
          const v3940 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v3939, ctc1), null);
          const v3946 = stdlib.fromSome(v3940, stdlib.checkedBigNumberify('./index.rsh:134:52:decimal', stdlib.UInt_max, '0'));
          const v3950 = stdlib.fromSome(v3931, stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '0'));
          const v3958 = stdlib.safeSub(v3950, v3930);
          await stdlib.simMapSet(sim_r, 0, ctc6, v3928, ctc1, v3958);
          const v3959 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v3929, ctc1), null);
          const v3960 = stdlib.fromSome(v3959, stdlib.checkedBigNumberify('./index.rsh:142:53:decimal', stdlib.UInt_max, '0'));
          const v3961 = stdlib.safeAdd(v3960, v3930);
          await stdlib.simMapSet(sim_r, 0, ctc6, v3929, ctc1, v3961);
          const v3966 = stdlib.safeSub(v3946, v3930);
          await stdlib.simMapSet(sim_r, 1, ctc9, v3939, ctc1, v3966);
          const v3970 = [v2022, v2023, v3928, v3929, v3930];
          const v3971 = ['TransferFrom', v3970];
          const v3972 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2022,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3972', ctc14, v3972);
          const v3982 = true;
          const v3983 = await txn1.getOutput('U1_transferFrom', 'v3982', ctc13, v3982);
          
          const v14054 = v2055;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      return;
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      return;
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      return;
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3928 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '0')];
      const v3929 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '1')];
      const v3930 = v3682[stdlib.checkedBigNumberify('./index.rsh:129:10:spread', stdlib.UInt_max, '2')];
      const v3931 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3928, ctc1), null);
      const v3932 = {
        None: 0,
        Some: 1
        }[v3931[0]];
      const v3933 = stdlib.eq(v3932, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3933, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'Sender has no balance',
        who: 'U1_transferFrom'
        });
      const v3935 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3929, ctc1), null);
      const v3936 = {
        None: 0,
        Some: 1
        }[v3935[0]];
      const v3937 = stdlib.eq(v3936, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3937, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'Recipient has no balance',
        who: 'U1_transferFrom'
        });
      const v3939 = [v3928, v2319];
      const v3940 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v3939, ctc1), null);
      const v3941 = {
        None: 0,
        Some: 1
        }[v3940[0]];
      const v3942 = stdlib.eq(v3941, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3942, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:132:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'No allowance',
        who: 'U1_transferFrom'
        });
      const v3946 = stdlib.fromSome(v3940, stdlib.checkedBigNumberify('./index.rsh:134:52:decimal', stdlib.UInt_max, '0'));
      const v3947 = stdlib.le(v3930, v3946);
      stdlib.assert(v3947, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'Insufficient allowance',
        who: 'U1_transferFrom'
        });
      const v3950 = stdlib.fromSome(v3931, stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '0'));
      const v3951 = stdlib.le(v3930, v3950);
      stdlib.assert(v3951, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U1_transferFrom'
        });
      const v3958 = stdlib.safeSub(v3950, v3930);
      await stdlib.mapSet(map0, ctc6, v3928, ctc1, v3958);
      const v3959 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v3929, ctc1), null);
      const v3960 = stdlib.fromSome(v3959, stdlib.checkedBigNumberify('./index.rsh:142:53:decimal', stdlib.UInt_max, '0'));
      const v3961 = stdlib.safeAdd(v3960, v3930);
      await stdlib.mapSet(map0, ctc6, v3929, ctc1, v3961);
      const v3966 = stdlib.safeSub(v3946, v3930);
      await stdlib.mapSet(map1, ctc9, v3939, ctc1, v3966);
      const v3970 = [v2022, v2023, v3928, v3929, v3930];
      const v3971 = ['TransferFrom', v3970];
      const v3972 = undefined /* Remote */;
      const v3973 = await txn1.getOutput('internal', 'v3972', ctc14, v3972);
      const v3975 = v3973[stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '0')];
      const v3976 = v3973[stdlib.checkedBigNumberify('./index.rsh:146:29:application', stdlib.UInt_max, '1')];
      const v3981 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3975);
      stdlib.assert(v3981, {
        at: './index.rsh:146:29:application',
        fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'remote bill check',
        who: 'U1_transferFrom'
        });
      stdlib.assert(v3976, {
        at: './index.rsh:145:18:application',
        fs: ['at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
        msg: 'Child app rejected transferFrom',
        who: 'U1_transferFrom'
        });
      const v3982 = true;
      const v3983 = await txn1.getOutput('U1_transferFrom', 'v3982', ctc13, v3982);
      if (v1377) {
        stdlib.protect(ctc0, await interact.out(v3682, v3983), {
          at: './index.rsh:129:11:application',
          fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:11:function exp)', 'at ./index.rsh:151:12:application call to "k" (defined at: ./index.rsh:139:13:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:13:function exp)'],
          msg: 'out',
          who: 'U1_transferFrom'
          });
        }
      else {
        }
      
      const v14054 = v2055;
      return;
      
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      return;
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      return;
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_136: ctc9,
    U1_approve0_136: ctc8,
    U1_transfer0_136: ctc8,
    U1_transferFrom0_136: ctc10,
    U2_deposit0_136: ctc8,
    U2_withdraw0_136: ctc8,
    U3_transferFrom0_136: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2210 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:207:37:application call to [unknown function] (defined at: ./index.rsh:207:37:function exp)', 'at ./index.rsh:91:29:application call to "runU2_deposit0_136" (defined at: ./index.rsh:207:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'U2_deposit'
    });
  const v2212 = v2210[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2222 = ['U2_deposit0_136', v2210];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2222],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:209:10:decimal', stdlib.UInt_max, '0'), [[v2212, v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_deposit"
            });
          const v4161 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '1')];
          ;
          sim_r.txns.push({
            amt: v4161,
            kind: 'to',
            tok: v2023
            });
          const v4446 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '0')];
          const v4450 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v4446, ctc1), null);
          const v4451 = stdlib.fromSome(v4450, stdlib.checkedBigNumberify('./index.rsh:211:47:decimal', stdlib.UInt_max, '0'));
          const v4452 = stdlib.safeAdd(v4451, v4161);
          await stdlib.simMapSet(sim_r, 0, ctc6, v4446, ctc1, v4452);
          const v4456 = [v2022, v2023, v2319, v4446, v4161];
          const v4457 = ['Deposit', v4456];
          const v4458 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2022,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4458', ctc13, v4458);
          const v4468 = true;
          const v4469 = await txn1.getOutput('U2_deposit', 'v4468', ctc12, v4468);
          
          const v4476 = v2055.constructor;
          const v4477 = v2055.manager;
          const v4478 = v2055.token;
          const v4479 = v2055.tokenAmount;
          const v4481 = stdlib.safeAdd(v4479, v4161);
          const v4482 = {
            constructor: v4476,
            manager: v4477,
            token: v4478,
            tokenAmount: v4481
            };
          const v14076 = v4482;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      return;
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      return;
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      return;
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      return;
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      undefined /* setApiDetails */;
      const v4161 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '1')];
      ;
      ;
      const v4446 = v4135[stdlib.checkedBigNumberify('./index.rsh:207:10:spread', stdlib.UInt_max, '0')];
      const v4450 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v4446, ctc1), null);
      const v4451 = stdlib.fromSome(v4450, stdlib.checkedBigNumberify('./index.rsh:211:47:decimal', stdlib.UInt_max, '0'));
      const v4452 = stdlib.safeAdd(v4451, v4161);
      await stdlib.mapSet(map0, ctc6, v4446, ctc1, v4452);
      const v4456 = [v2022, v2023, v2319, v4446, v4161];
      const v4457 = ['Deposit', v4456];
      const v4458 = undefined /* Remote */;
      const v4459 = await txn1.getOutput('internal', 'v4458', ctc13, v4458);
      const v4461 = v4459[stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '0')];
      const v4462 = v4459[stdlib.checkedBigNumberify('./index.rsh:213:29:application', stdlib.UInt_max, '1')];
      const v4467 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4461);
      stdlib.assert(v4467, {
        at: './index.rsh:213:29:application',
        fs: ['at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_deposit'
        });
      stdlib.assert(v4462, {
        at: './index.rsh:212:18:application',
        fs: ['at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
        msg: 'Child app rejected send',
        who: 'U2_deposit'
        });
      const v4468 = true;
      const v4469 = await txn1.getOutput('U2_deposit', 'v4468', ctc12, v4468);
      if (v1377) {
        stdlib.protect(ctc0, await interact.out(v4135, v4469), {
          at: './index.rsh:207:11:application',
          fs: ['at ./index.rsh:207:11:application call to [unknown function] (defined at: ./index.rsh:207:11:function exp)', 'at ./index.rsh:218:12:application call to "k" (defined at: ./index.rsh:210:13:function exp)', 'at ./index.rsh:210:13:application call to [unknown function] (defined at: ./index.rsh:210:13:function exp)'],
          msg: 'out',
          who: 'U2_deposit'
          });
        }
      else {
        }
      
      const v4476 = v2055.constructor;
      const v4477 = v2055.manager;
      const v4478 = v2055.token;
      const v4479 = v2055.tokenAmount;
      const v4481 = stdlib.safeAdd(v4479, v4161);
      const v4482 = {
        constructor: v4476,
        manager: v4477,
        token: v4478,
        tokenAmount: v4481
        };
      const v14076 = v4482;
      return;
      
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      return;
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc11 = stdlib.T_Data({
    C_grant0_136: ctc9,
    U1_approve0_136: ctc8,
    U1_transfer0_136: ctc8,
    U1_transferFrom0_136: ctc10,
    U2_deposit0_136: ctc8,
    U2_withdraw0_136: ctc8,
    U3_transferFrom0_136: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc12]);
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2224 = ctc.selfAddress();
  const v2226 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:232:38:application call to [unknown function] (defined at: ./index.rsh:232:38:function exp)', 'at ./index.rsh:91:29:application call to "runU2_withdraw0_136" (defined at: ./index.rsh:232:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'U2_withdraw'
    });
  const v2228 = v2226[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2231 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2224, ctc1), null);
  const v2232 = stdlib.fromSome(v2231, stdlib.checkedBigNumberify('./index.rsh:233:42:decimal', stdlib.UInt_max, '0'));
  const v2233 = stdlib.le(v2228, v2232);
  stdlib.assert(v2233, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:232:38:application call to [unknown function] (defined at: ./index.rsh:232:38:function exp)', 'at ./index.rsh:91:29:application call to "runU2_withdraw0_136" (defined at: ./index.rsh:232:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U2_withdraw'
    });
  const v2242 = ['U2_withdraw0_136', v2226];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2242],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:232:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:99:14:decimal', stdlib.UInt_max, '0'), v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_withdraw"
            });
          ;
          ;
          const v4939 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
          const v4940 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '1')];
          const v4941 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2319, ctc1), null);
          const v4942 = stdlib.fromSome(v4941, stdlib.checkedBigNumberify('./index.rsh:233:42:decimal', stdlib.UInt_max, '0'));
          sim_r.txns.push({
            kind: 'from',
            to: v4939,
            tok: v2023
            });
          const v4958 = stdlib.safeSub(v4942, v4940);
          await stdlib.simMapSet(sim_r, 0, ctc6, v2319, ctc1, v4958);
          const v4962 = [v2022, v2023, v2319, v4939, v4940];
          const v4963 = ['Withdraw', v4962];
          const v4964 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2022,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4964', ctc13, v4964);
          const v4974 = true;
          const v4975 = await txn1.getOutput('U2_withdraw', 'v4974', ctc12, v4974);
          
          const v4982 = v2055.constructor;
          const v4983 = v2055.manager;
          const v4984 = v2055.token;
          const v4985 = v2055.tokenAmount;
          const v4987 = stdlib.safeSub(v4985, v4940);
          const v4988 = {
            constructor: v4982,
            manager: v4983,
            token: v4984,
            tokenAmount: v4987
            };
          const v14098 = v4988;
          sim_r.isHalt = false;
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      return;
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      return;
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      return;
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      return;
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      return;
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v4939 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '0')];
      const v4940 = v4588[stdlib.checkedBigNumberify('./index.rsh:232:10:spread', stdlib.UInt_max, '1')];
      const v4941 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2319, ctc1), null);
      const v4942 = stdlib.fromSome(v4941, stdlib.checkedBigNumberify('./index.rsh:233:42:decimal', stdlib.UInt_max, '0'));
      const v4943 = stdlib.le(v4940, v4942);
      stdlib.assert(v4943, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U2_withdraw'
        });
      ;
      const v4958 = stdlib.safeSub(v4942, v4940);
      await stdlib.mapSet(map0, ctc6, v2319, ctc1, v4958);
      const v4962 = [v2022, v2023, v2319, v4939, v4940];
      const v4963 = ['Withdraw', v4962];
      const v4964 = undefined /* Remote */;
      const v4965 = await txn1.getOutput('internal', 'v4964', ctc13, v4964);
      const v4967 = v4965[stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '0')];
      const v4968 = v4965[stdlib.checkedBigNumberify('./index.rsh:239:29:application', stdlib.UInt_max, '1')];
      const v4973 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4967);
      stdlib.assert(v4973, {
        at: './index.rsh:239:29:application',
        fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_withdraw'
        });
      stdlib.assert(v4968, {
        at: './index.rsh:238:18:application',
        fs: ['at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
        msg: 'Child app rejected withdraw',
        who: 'U2_withdraw'
        });
      const v4974 = true;
      const v4975 = await txn1.getOutput('U2_withdraw', 'v4974', ctc12, v4974);
      if (v1377) {
        stdlib.protect(ctc0, await interact.out(v4588, v4975), {
          at: './index.rsh:232:11:application',
          fs: ['at ./index.rsh:232:11:application call to [unknown function] (defined at: ./index.rsh:232:11:function exp)', 'at ./index.rsh:244:12:application call to "k" (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'out',
          who: 'U2_withdraw'
          });
        }
      else {
        }
      
      const v4982 = v2055.constructor;
      const v4983 = v2055.manager;
      const v4984 = v2055.token;
      const v4985 = v2055.tokenAmount;
      const v4987 = stdlib.safeSub(v4985, v4940);
      const v4988 = {
        constructor: v4982,
        manager: v4983,
        token: v4984,
        tokenAmount: v4987
        };
      const v14098 = v4988;
      return;
      
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U3_transferFrom4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U3_transferFrom4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U3_transferFrom4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Object({
    constructor: ctc6,
    manager: ctc6,
    token: ctc4,
    tokenAmount: ctc1
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Data({
    C_grant0_136: ctc10,
    U1_approve0_136: ctc11,
    U1_transfer0_136: ctc11,
    U1_transferFrom0_136: ctc8,
    U2_deposit0_136: ctc11,
    U2_withdraw0_136: ctc11,
    U3_transferFrom0_136: ctc8
    });
  const ctc13 = stdlib.T_Bool;
  
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
  
  
  const [v2022, v2023, v2034, v2055] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc4, ctc5, ctc7]);
  const v2150 = ctc.selfAddress();
  const v2152 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:56:application call to [unknown function] (defined at: ./index.rsh:161:56:function exp)', 'at ./index.rsh:91:29:application call to "runU3_transferFrom0_136" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'in',
    who: 'U3_transferFrom'
    });
  const v2153 = v2152[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2154 = v2152[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2155 = v2152[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2159 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2153, ctc1), null);
  const v2160 = {
    None: 0,
    Some: 1
    }[v2159[0]];
  const v2161 = stdlib.eq(v2160, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2161, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:56:application call to [unknown function] (defined at: ./index.rsh:161:56:function exp)', 'at ./index.rsh:91:29:application call to "runU3_transferFrom0_136" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Sender has no balance',
    who: 'U3_transferFrom'
    });
  const v2163 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2154, ctc1), null);
  const v2164 = {
    None: 0,
    Some: 1
    }[v2163[0]];
  const v2165 = stdlib.eq(v2164, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2165, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:56:application call to [unknown function] (defined at: ./index.rsh:161:56:function exp)', 'at ./index.rsh:91:29:application call to "runU3_transferFrom0_136" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Recipient has no balance',
    who: 'U3_transferFrom'
    });
  const v2167 = [v2153, v2150];
  const v2168 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v2167, ctc1), null);
  const v2169 = {
    None: 0,
    Some: 1
    }[v2168[0]];
  const v2170 = stdlib.eq(v2169, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2170, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:56:application call to [unknown function] (defined at: ./index.rsh:161:56:function exp)', 'at ./index.rsh:91:29:application call to "runU3_transferFrom0_136" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'No allowance',
    who: 'U3_transferFrom'
    });
  const v2174 = stdlib.fromSome(v2168, stdlib.checkedBigNumberify('./index.rsh:166:52:decimal', stdlib.UInt_max, '0'));
  const v2175 = stdlib.le(v2155, v2174);
  stdlib.assert(v2175, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:56:application call to [unknown function] (defined at: ./index.rsh:161:56:function exp)', 'at ./index.rsh:91:29:application call to "runU3_transferFrom0_136" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Insufficient allowance',
    who: 'U3_transferFrom'
    });
  const v2178 = stdlib.fromSome(v2159, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '0'));
  const v2179 = stdlib.le(v2155, v2178);
  stdlib.assert(v2179, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:161:56:application call to [unknown function] (defined at: ./index.rsh:161:56:function exp)', 'at ./index.rsh:91:29:application call to "runU3_transferFrom0_136" (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:91:29:application call to [unknown function] (defined at: ./index.rsh:91:29:function exp)'],
    msg: 'Insufficient funds',
    who: 'U3_transferFrom'
    });
  const v2190 = ['U3_transferFrom0_136', v2152];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2022, v2023, v2034, v2055, v2190],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:161:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:99:14:decimal', stdlib.UInt_max, '0'), v2023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
      
      switch (v2320[0]) {
        case 'C_grant0_136': {
          const v2323 = v2320[1];
          
          break;
          }
        case 'U1_approve0_136': {
          const v2776 = v2320[1];
          
          break;
          }
        case 'U1_transfer0_136': {
          const v3229 = v2320[1];
          
          break;
          }
        case 'U1_transferFrom0_136': {
          const v3682 = v2320[1];
          
          break;
          }
        case 'U2_deposit0_136': {
          const v4135 = v2320[1];
          
          break;
          }
        case 'U2_withdraw0_136': {
          const v4588 = v2320[1];
          
          break;
          }
        case 'U3_transferFrom0_136': {
          const v5041 = v2320[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U3_transferFrom"
            });
          ;
          ;
          const v5445 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
          const v5446 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
          const v5447 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
          const v5448 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5445, ctc1), null);
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5446, ctc1), null);
          const v5456 = [v5445, v2319];
          const v5457 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc9, v5456, ctc1), null);
          const v5463 = stdlib.fromSome(v5457, stdlib.checkedBigNumberify('./index.rsh:166:52:decimal', stdlib.UInt_max, '0'));
          const v5467 = stdlib.fromSome(v5448, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '0'));
          const v5475 = stdlib.safeSub(v5467, v5447);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5445, ctc1, v5475);
          const v5476 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5446, ctc1), null);
          const v5477 = stdlib.fromSome(v5476, stdlib.checkedBigNumberify('./index.rsh:174:53:decimal', stdlib.UInt_max, '0'));
          const v5478 = stdlib.safeAdd(v5477, v5447);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5446, ctc1, v5478);
          const v5483 = stdlib.safeSub(v5463, v5447);
          await stdlib.simMapSet(sim_r, 1, ctc9, v5456, ctc1, v5483);
          const v5484 = true;
          const v5485 = await txn1.getOutput('U3_transferFrom', 'v5484', ctc13, v5484);
          
          const v14120 = v2055;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2320], secs: v2322, time: v2321, didSend: v1377, from: v2319 } = txn1;
  switch (v2320[0]) {
    case 'C_grant0_136': {
      const v2323 = v2320[1];
      return;
      break;
      }
    case 'U1_approve0_136': {
      const v2776 = v2320[1];
      return;
      break;
      }
    case 'U1_transfer0_136': {
      const v3229 = v2320[1];
      return;
      break;
      }
    case 'U1_transferFrom0_136': {
      const v3682 = v2320[1];
      return;
      break;
      }
    case 'U2_deposit0_136': {
      const v4135 = v2320[1];
      return;
      break;
      }
    case 'U2_withdraw0_136': {
      const v4588 = v2320[1];
      return;
      break;
      }
    case 'U3_transferFrom0_136': {
      const v5041 = v2320[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v5445 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '0')];
      const v5446 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '1')];
      const v5447 = v5041[stdlib.checkedBigNumberify('./index.rsh:161:10:spread', stdlib.UInt_max, '2')];
      const v5448 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5445, ctc1), null);
      const v5449 = {
        None: 0,
        Some: 1
        }[v5448[0]];
      const v5450 = stdlib.eq(v5449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5450, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
        msg: 'Sender has no balance',
        who: 'U3_transferFrom'
        });
      const v5452 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5446, ctc1), null);
      const v5453 = {
        None: 0,
        Some: 1
        }[v5452[0]];
      const v5454 = stdlib.eq(v5453, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5454, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
        msg: 'Recipient has no balance',
        who: 'U3_transferFrom'
        });
      const v5456 = [v5445, v2319];
      const v5457 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc9, v5456, ctc1), null);
      const v5458 = {
        None: 0,
        Some: 1
        }[v5457[0]];
      const v5459 = stdlib.eq(v5458, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5459, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
        msg: 'No allowance',
        who: 'U3_transferFrom'
        });
      const v5463 = stdlib.fromSome(v5457, stdlib.checkedBigNumberify('./index.rsh:166:52:decimal', stdlib.UInt_max, '0'));
      const v5464 = stdlib.le(v5447, v5463);
      stdlib.assert(v5464, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
        msg: 'Insufficient allowance',
        who: 'U3_transferFrom'
        });
      const v5467 = stdlib.fromSome(v5448, stdlib.checkedBigNumberify('./index.rsh:169:47:decimal', stdlib.UInt_max, '0'));
      const v5468 = stdlib.le(v5447, v5467);
      stdlib.assert(v5468, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
        msg: 'Insufficient funds',
        who: 'U3_transferFrom'
        });
      const v5475 = stdlib.safeSub(v5467, v5447);
      await stdlib.mapSet(map0, ctc6, v5445, ctc1, v5475);
      const v5476 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5446, ctc1), null);
      const v5477 = stdlib.fromSome(v5476, stdlib.checkedBigNumberify('./index.rsh:174:53:decimal', stdlib.UInt_max, '0'));
      const v5478 = stdlib.safeAdd(v5477, v5447);
      await stdlib.mapSet(map0, ctc6, v5446, ctc1, v5478);
      const v5483 = stdlib.safeSub(v5463, v5447);
      await stdlib.mapSet(map1, ctc9, v5456, ctc1, v5483);
      const v5484 = true;
      const v5485 = await txn1.getOutput('U3_transferFrom', 'v5484', ctc13, v5484);
      if (v1377) {
        stdlib.protect(ctc0, await interact.out(v5041, v5485), {
          at: './index.rsh:161:11:application',
          fs: ['at ./index.rsh:161:11:application call to [unknown function] (defined at: ./index.rsh:161:11:function exp)', 'at ./index.rsh:177:12:application call to "k" (defined at: ./index.rsh:171:13:function exp)', 'at ./index.rsh:171:13:application call to [unknown function] (defined at: ./index.rsh:171:13:function exp)'],
          msg: 'out',
          who: 'U3_transferFrom'
          });
        }
      else {
        }
      
      const v14120 = v2055;
      return;
      
      break;
      }
    }
  
  
  };
export async function C_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _C_grant4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U1_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_approve4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U1_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_transfer4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U1_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_withdraw4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U3_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U3_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U3_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U3_transferFrom4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`C_grant(address)byte`, `U1_approve(address,uint64)byte`, `U1_transfer(address,uint64)byte`, `U1_transferFrom(address,address,uint64)byte`, `U2_deposit(address,uint64)byte`, `U2_withdraw(address,uint64)byte`, `U3_transferFrom(address,address,uint64)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`],
    pure: [`allowance(address,address)uint64`, `balanceOf(address)uint64`, `state()(address,address,uint64,uint64)`, `totalSupply()uint64`],
    sigs: [`C_grant(address)byte`, `U1_approve(address,uint64)byte`, `U1_transfer(address,uint64)byte`, `U1_transferFrom(address,address,uint64)byte`, `U2_deposit(address,uint64)byte`, `U2_withdraw(address,uint64)byte`, `U3_transferFrom(address,address,uint64)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[72])))void`, `allowance(address,address)uint64`, `balanceOf(address)uint64`, `state()(address,address,uint64,uint64)`, `totalSupply()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAAgB1JMBBgTEkAEgQEhgoI0GJgkAAQAFYXBwSUQIAAAAAAAAAAEEFaWiHQQeN6MqAQEBAwECMRhBCc8oZEkiWzUBI1s1Ailkgg4EDEaPgAQXBQq9BC/5nE4ERnvHpARN7kFMBFDK9vsEVwVJegRYN5+hBHCnB3kEgkYrDASebw4xBMGUrZkEwrYdgwT0vCQkNhoAjg4JQwmGCU4JeQBTAHIAlgD1ANUAtQvvCTMAAQvyADYaATULI68pNAtQgSivUFA1CyEFNAESRIgMQDQLIls1DDQLVwhJNQ2ABJ3BTlc0DBZQNA1QsDQMiAw5NA0iVY0HC5wJPglICVIJXAlmCXBC/602GgE2GgIXNQs1DCOvJwY0DDQLFlBQMgNQUDULQv+hNhoBNhoCNhoDFzULNQw1DSOvJwc0DTQMUDQLFlBQUDULQv99NhoBNhoCFzULNQwjrycINAw0CxZQUDIDUFA1C0L/XjYaATYaAhc1CzUMI6+AAQQ0DDQLFlBQMgNQUDULQv8+NhoBNhoCFzULNQwjr4ABBTQMNAsWUFAyA1BQNQtC/x42GgE2GgI2GgMXNQs1DDUNI6+AAQY0DTQMUDQLFlBQUDULQv75NA1XASA1CzEANA9XICASRCo0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYgARvYOeqsho0EhY0ERZQNAtQshqzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAAAlXNA1QsDQNNQwiNAwiWxJENAxXCAEXRCQ1DIAIAAAAAAAACWE0DBZRBwhQsDQMFlEHCDUENA9XACA0C1A0D1dACFA0D1dICFAyBjUONQ80EhY0ERZQNBBQNA9QIQUyBjUCNQEpTFcAYGcoNAEWNAIWUGcxGSISRIgKkDQDQAAKgAQVH3x1NARQsCRDNAtXACA1DTQLIQdbNQwoI68pMQBQiAoYIlVAB6MlKTEAUCOviAoUKCOvKTQNUIgJ/yJVQAhGJSk0DVAjr4gJ+yEGKzEANA1QUAE0DBaICesqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGCcEsho0EhY0ERZQMQBQNA1QNAwWULIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAALRDQLULA0CzUMIjQMIlsSRDQMVwgBF0QkNQuACAAAAAAAAAtONAsWUQcIULA0CxZRBwg1BDIGNQ5C/uA0C1cAIDUNNAshB1s1DCgjrykxAFCICTVJNRMiVSQSRCOvNBOICT8XNQs0DDQLDkQlKTEAUDQLNAwJFogJGiUpNA1QI68oI68pNA1QiAj+iAkUFzQMCBaICP4qNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGCcFshonBjQSFjQRFlAxAFA0DVA0DBZQULIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAANfzQLULA0CzUMIjQMIlsSRDQMVwgBF0QkNQuACAAAAAAAAA2JNAsWUQcIULA0CxZRBwg1BDIGNQ5C/fA0C1cAIDUTNAtXICA1DTQLIQhbNQwoI68pNBNQiAg+STUWIlUkEkQoI68pNA1QiAgsIlUkEkQ0EzEAUDUVKCOvKzQVUAGICBVJNQsiVSQSRCOvNAuICB8XNRQ0DDQUDkQjrzQWiAgPFzULNAw0Cw5EJSk0E1A0CzQMCRaIB+olKTQNUCOvKCOvKTQNUIgHzogH5Bc0DAgWiAfOIQYrNBVQATQUNAwJFogHvio0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYJwWyGicINBIWNBEWUDQTUDQNUDQMFlBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAA+ENAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAAD440CxZRBwhQsDQLFlEHCDUEMgY1DkL8sDQLIQdbSTUNNBExFjQAJAhJNQAJRwM4FDIKEkQ4ECEFEkQ4EU8CEkQ4EhJENAtXACA1DCUpNAxQI68oI68pNAxQiAbZiAbvFzQNCBaIBtkqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGCcFshopNBIWNBEWUDEAUDQMUDQNFlBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAABFqNAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAAEXQ0CxZRBwhQsDQLFlEHCDUENA9XACA0D1cgIFA0D1dACFA0DyEJWzQNCBZQMgY1DjUPQvuvNAtXACA1DTQLIQdbNQwjrygjrykxAFCIBgKIBhgXNQs0DDQLDkQ0DDQRNA2IBjglKTEAUDQLNAwJFogF6io0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYJwWyGicHNBIWNBEWUDEAUDQNUDQMFlBQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAABNkNAtQsDQLNQ0iNA0iWxJENA1XCAEXRCQ1C4AIAAAAAAAAE240CxZRBwhQsDQLFlEHCDUENA9XACA0D1cgIFA0D1dACFA0DyEJWzQMCRZQMgY1DjUPQvq/NAtXACA1EzQLVyAgNQ00CyEIWzUMKCOvKTQTUIgFDUk1FiJVJBJEKCOvKTQNUIgE+yJVJBJENBMxAFA1FSgjrys0FVABiATkSTULIlUkEkQjrzQLiATuFzUUNAw0FA5EI680FogE3hc1CzQMNAsORCUpNBNQNAs0DAkWiAS5JSk0DVAjrygjryk0DVCIBJ2IBLMXNAwIFogEnSEGKzQVUAE0FDQMCRaIBI0kNQuACAAAAAAAABVsNAsWUQcIULA0CxZRBwg1BDIGNQ5C+fE0ASEFEkSIBHcjrygjrys0DDQLUFABiARFiARbNQQxGSISREL5/DQBIQUSRIgEUSOvKCOvKTQLUIgEI4gEOTUEQv/bNAEhBRJEiAQ0NA9XACA0D1cgIFA0D1dACFA0D1dICFA1BEL/tjQBIQUSRIgEDzQPV0gINQRC/6M0Cxc1DIAEgsRh/jQMFlCwNAyIBAkhCq8kMgZC+WkkNAESRDQLIls1DDQLI1s1EjQLgRBbNRGABM35pJQ0DBZQNBIWUDQRFlCwNAyIA9AhC4gD1SI0ETIKiAPTKDUQKjQSFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQSshiABNHy4eiyGjEYFjQRFlCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAB/Q0DFCwNAw1CyI0CyJbEkQ0C1cIARdEMQAxAFA0ERZQI69QMgY1DjUPQviaiAM7IQuIA0Q2GgE1C0L/FIgDKzYaATULQv8niAMgNhoBNQtC9roiMTQSRIECMTUSRCIxNhJEIjE3EkSIAwAhCq8iIkL4ZTYaATYaAjULNQxC/lY2GgE1C0L+dDQNVwEoNQtC+HI0DVcBKDULQvlLNA1XAUg1C0L6MTQNVwEoNQtC+2c0DVcBKDULQvxeNA1XAUg1C0L9RCgjryk0DVCIAmYiVUABUCUpNA1QI6+IAmIhBisxADQNUFABNAwWiAJSKjQSFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQSyEDQSshgnBLIaNBIWNBEWUDEAUDQNUDQMFlCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAC3c0C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAALgTQLFlEHCFCwNAsWUQcINQQyBjUOQvdHIQYrMQA0DVBQATQMFogBryo0EhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEEshA0ErIYJwSyGjQSFjQRFlAxAFA0DVA0DBZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAtcNAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAAC2Y0CxZRBwhQsDQLFlEHCDUEMgY1DkL2pCEGKzEANA1QUAE0DBaIAQwqNBIWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBLIQNBKyGCcEsho0EhY0ERZQMQBQNA1QNAwWULIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAALjzQLULA0CzUMIjQMIlsSRDQMVwgBF0QkNQuACAAAAAAAAAuZNAsWUQcIULA0CxZRBwg1BDIGNQ5C9gFITL9IiSKyASEFshCyFLIRshKziSKyASSyELIHsgiziUL1K0L8LUL8T0iJTAlJNQYyCYgAlIkJSUH/7kk1BjEWNAAkCEk1AAlHAjgHMgoSRDgQJBJEOAgSRIkxGYEFEkSIAFoiMgoyCYgAYkL1v75JFlEHCEUETVCJTEm9QP+BSwOIAC9C/3lJVwEATCJVTYlJIls1EkkjWzURSUgoNRBXEFA1D4kkNQOJSSISTDQCEhFEiTQGCDUGibFC/0g0BjQHSg9B/2VC/22xQv9HsbIJQv9B`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `18`,
    1000: `549`,
    1001: `550`,
    1002: `551`,
    1003: `551`,
    1004: `552`,
    1005: `553`,
    1006: `553`,
    1007: `553`,
    1008: `554`,
    1009: `554`,
    101: `18`,
    1010: `554`,
    1011: `555`,
    1012: `556`,
    1013: `556`,
    1014: `557`,
    1015: `558`,
    1016: `559`,
    1017: `559`,
    1018: `559`,
    1019: `560`,
    102: `18`,
    1020: `561`,
    1021: `561`,
    1022: `562`,
    1023: `563`,
    1024: `564`,
    1025: `565`,
    1026: `565`,
    1027: `566`,
    1028: `566`,
    1029: `567`,
    103: `18`,
    1030: `568`,
    1031: `568`,
    1032: `569`,
    1033: `570`,
    1034: `570`,
    1035: `571`,
    1036: `572`,
    1037: `572`,
    1038: `573`,
    1039: `574`,
    104: `18`,
    1040: `575`,
    1041: `575`,
    1042: `576`,
    1043: `577`,
    1044: `578`,
    1045: `578`,
    1046: `579`,
    1047: `579`,
    1048: `580`,
    1049: `580`,
    105: `18`,
    1050: `581`,
    1051: `581`,
    1052: `583`,
    1053: `583`,
    1054: `584`,
    1055: `584`,
    1056: `585`,
    1057: `585`,
    1058: `586`,
    1059: `586`,
    106: `18`,
    1060: `587`,
    1061: `587`,
    1062: `588`,
    1063: `589`,
    1064: `589`,
    1065: `590`,
    1066: `591`,
    1067: `592`,
    1068: `592`,
    1069: `593`,
    107: `18`,
    1070: `594`,
    1071: `594`,
    1072: `595`,
    1073: `596`,
    1074: `596`,
    1075: `597`,
    1076: `598`,
    1077: `599`,
    1078: `600`,
    1079: `600`,
    108: `18`,
    1080: `601`,
    1081: `605`,
    1082: `605`,
    1083: `606`,
    1084: `607`,
    1085: `607`,
    1086: `608`,
    1087: `609`,
    1088: `609`,
    1089: `610`,
    109: `18`,
    1090: `611`,
    1091: `612`,
    1092: `613`,
    1093: `613`,
    1094: `613`,
    1095: `614`,
    1096: `614`,
    1097: `614`,
    1098: `615`,
    1099: `616`,
    11: `2`,
    110: `18`,
    1100: `616`,
    1101: `617`,
    1102: `617`,
    1103: `617`,
    1104: `617`,
    1105: `617`,
    1106: `617`,
    1107: `617`,
    1108: `617`,
    1109: `617`,
    111: `18`,
    1110: `617`,
    1111: `618`,
    1112: `618`,
    1113: `619`,
    1114: `620`,
    1115: `621`,
    1116: `621`,
    1117: `622`,
    1118: `622`,
    1119: `623`,
    112: `18`,
    1120: `624`,
    1121: `624`,
    1122: `625`,
    1123: `626`,
    1124: `627`,
    1125: `628`,
    1126: `632`,
    1127: `632`,
    1128: `633`,
    1129: `633`,
    113: `18`,
    1130: `633`,
    1131: `634`,
    1132: `635`,
    1133: `639`,
    1134: `640`,
    1135: `640`,
    1136: `641`,
    1137: `641`,
    1138: `641`,
    1139: `641`,
    114: `18`,
    1140: `641`,
    1141: `641`,
    1142: `641`,
    1143: `641`,
    1144: `641`,
    1145: `641`,
    1146: `642`,
    1147: `642`,
    1148: `643`,
    1149: `644`,
    115: `18`,
    1150: `644`,
    1151: `644`,
    1152: `645`,
    1153: `646`,
    1154: `647`,
    1155: `647`,
    1156: `648`,
    1157: `649`,
    1158: `649`,
    1159: `649`,
    116: `18`,
    1160: `650`,
    1161: `650`,
    1162: `651`,
    1163: `651`,
    1164: `652`,
    1165: `652`,
    1166: `653`,
    1167: `653`,
    1168: `653`,
    1169: `655`,
    117: `18`,
    1170: `655`,
    1171: `656`,
    1172: `656`,
    1173: `656`,
    1174: `657`,
    1175: `657`,
    1176: `658`,
    1177: `658`,
    1178: `659`,
    1179: `659`,
    118: `18`,
    1180: `659`,
    1181: `660`,
    1182: `660`,
    1183: `661`,
    1184: `661`,
    1185: `662`,
    1186: `662`,
    1187: `663`,
    1188: `664`,
    1189: `664`,
    119: `18`,
    1190: `666`,
    1191: `667`,
    1192: `668`,
    1193: `669`,
    1194: `670`,
    1195: `670`,
    1196: `671`,
    1197: `672`,
    1198: `672`,
    1199: `672`,
    12: `2`,
    120: `18`,
    1200: `673`,
    1201: `674`,
    1202: `674`,
    1203: `675`,
    1204: `676`,
    1205: `677`,
    1206: `678`,
    1207: `679`,
    1208: `685`,
    1209: `686`,
    121: `18`,
    1210: `687`,
    1211: `688`,
    1212: `689`,
    1213: `689`,
    1214: `690`,
    1215: `691`,
    1216: `691`,
    1217: `691`,
    1218: `692`,
    1219: `693`,
    122: `18`,
    1220: `694`,
    1221: `695`,
    1222: `696`,
    1223: `701`,
    1224: `701`,
    1225: `702`,
    1226: `702`,
    1227: `703`,
    1228: `704`,
    1229: `704`,
    123: `18`,
    1230: `706`,
    1231: `707`,
    1232: `708`,
    1233: `709`,
    1234: `710`,
    1235: `710`,
    1236: `711`,
    1237: `712`,
    1238: `713`,
    1239: `713`,
    124: `18`,
    1240: `713`,
    1241: `714`,
    1242: `715`,
    1243: `715`,
    1244: `716`,
    1245: `717`,
    1246: `718`,
    1247: `719`,
    1248: `720`,
    1249: `725`,
    125: `18`,
    1250: `726`,
    1251: `727`,
    1252: `727`,
    1253: `728`,
    1254: `728`,
    1255: `728`,
    1256: `729`,
    1257: `730`,
    1258: `730`,
    1259: `731`,
    126: `18`,
    1260: `731`,
    1261: `732`,
    1262: `732`,
    1263: `733`,
    1264: `734`,
    1265: `739`,
    1266: `740`,
    1267: `741`,
    1268: `741`,
    1269: `742`,
    127: `18`,
    1270: `742`,
    1271: `742`,
    1272: `743`,
    1273: `744`,
    1274: `744`,
    1275: `745`,
    1276: `745`,
    1277: `746`,
    1278: `746`,
    1279: `747`,
    128: `18`,
    1280: `748`,
    1281: `753`,
    1282: `754`,
    1283: `755`,
    1284: `755`,
    1285: `756`,
    1286: `757`,
    1287: `757`,
    1288: `758`,
    1289: `758`,
    129: `18`,
    1290: `759`,
    1291: `760`,
    1292: `761`,
    1293: `761`,
    1294: `761`,
    1295: `762`,
    1296: `763`,
    1297: `764`,
    1298: `764`,
    1299: `765`,
    13: `2`,
    130: `18`,
    1300: `766`,
    1301: `767`,
    1302: `768`,
    1303: `769`,
    1304: `770`,
    1305: `771`,
    1306: `772`,
    1307: `772`,
    1308: `773`,
    1309: `774`,
    131: `18`,
    1310: `774`,
    1311: `774`,
    1312: `775`,
    1313: `775`,
    1314: `775`,
    1315: `776`,
    1316: `777`,
    1317: `777`,
    1318: `778`,
    1319: `779`,
    132: `18`,
    1320: `780`,
    1321: `780`,
    1322: `780`,
    1323: `781`,
    1324: `781`,
    1325: `782`,
    1326: `783`,
    1327: `783`,
    1328: `784`,
    1329: `785`,
    133: `18`,
    1330: `786`,
    1331: `786`,
    1332: `787`,
    1333: `787`,
    1334: `788`,
    1335: `789`,
    1336: `790`,
    1337: `790`,
    1338: `790`,
    1339: `791`,
    134: `18`,
    1340: `792`,
    1341: `792`,
    1342: `793`,
    1343: `794`,
    1344: `795`,
    1345: `796`,
    1346: `796`,
    1347: `797`,
    1348: `797`,
    1349: `798`,
    135: `18`,
    1350: `799`,
    1351: `799`,
    1352: `800`,
    1353: `801`,
    1354: `801`,
    1355: `802`,
    1356: `803`,
    1357: `803`,
    1358: `804`,
    1359: `805`,
    136: `18`,
    1360: `806`,
    1361: `806`,
    1362: `807`,
    1363: `808`,
    1364: `809`,
    1365: `809`,
    1366: `810`,
    1367: `810`,
    1368: `811`,
    1369: `811`,
    137: `18`,
    1370: `812`,
    1371: `812`,
    1372: `814`,
    1373: `814`,
    1374: `815`,
    1375: `815`,
    1376: `816`,
    1377: `816`,
    1378: `817`,
    1379: `817`,
    138: `18`,
    1380: `818`,
    1381: `818`,
    1382: `819`,
    1383: `820`,
    1384: `820`,
    1385: `821`,
    1386: `822`,
    1387: `823`,
    1388: `823`,
    1389: `824`,
    139: `18`,
    1390: `825`,
    1391: `825`,
    1392: `826`,
    1393: `827`,
    1394: `827`,
    1395: `828`,
    1396: `829`,
    1397: `830`,
    1398: `831`,
    1399: `831`,
    14: `2`,
    140: `18`,
    1400: `832`,
    1401: `836`,
    1402: `836`,
    1403: `837`,
    1404: `838`,
    1405: `838`,
    1406: `839`,
    1407: `840`,
    1408: `840`,
    1409: `841`,
    141: `18`,
    1410: `842`,
    1411: `843`,
    1412: `844`,
    1413: `844`,
    1414: `844`,
    1415: `845`,
    1416: `845`,
    1417: `845`,
    1418: `846`,
    1419: `847`,
    142: `18`,
    1420: `847`,
    1421: `848`,
    1422: `848`,
    1423: `848`,
    1424: `848`,
    1425: `848`,
    1426: `848`,
    1427: `848`,
    1428: `848`,
    1429: `848`,
    143: `18`,
    1430: `848`,
    1431: `849`,
    1432: `849`,
    1433: `850`,
    1434: `851`,
    1435: `852`,
    1436: `852`,
    1437: `853`,
    1438: `853`,
    1439: `854`,
    144: `18`,
    1440: `855`,
    1441: `855`,
    1442: `856`,
    1443: `857`,
    1444: `858`,
    1445: `859`,
    1446: `863`,
    1447: `863`,
    1448: `864`,
    1449: `864`,
    145: `18`,
    1450: `864`,
    1451: `865`,
    1452: `866`,
    1453: `870`,
    1454: `871`,
    1455: `871`,
    1456: `872`,
    1457: `872`,
    1458: `872`,
    1459: `872`,
    146: `18`,
    1460: `872`,
    1461: `872`,
    1462: `872`,
    1463: `872`,
    1464: `872`,
    1465: `872`,
    1466: `873`,
    1467: `873`,
    1468: `874`,
    1469: `875`,
    147: `19`,
    1470: `875`,
    1471: `875`,
    1472: `876`,
    1473: `877`,
    1474: `878`,
    1475: `878`,
    1476: `879`,
    1477: `880`,
    1478: `880`,
    1479: `880`,
    148: `19`,
    1480: `881`,
    1481: `881`,
    1482: `882`,
    1483: `882`,
    1484: `883`,
    1485: `883`,
    1486: `884`,
    1487: `884`,
    1488: `884`,
    1489: `886`,
    149: `19`,
    1490: `886`,
    1491: `887`,
    1492: `887`,
    1493: `888`,
    1494: `889`,
    1495: `890`,
    1496: `890`,
    1497: `891`,
    1498: `891`,
    1499: `894`,
    15: `2`,
    150: `20`,
    1500: `894`,
    1501: `895`,
    1502: `895`,
    1503: `896`,
    1504: `897`,
    1505: `898`,
    1506: `899`,
    1507: `899`,
    1508: `900`,
    1509: `901`,
    151: `20`,
    1510: `901`,
    1511: `902`,
    1512: `902`,
    1513: `903`,
    1514: `903`,
    1515: `904`,
    1516: `905`,
    1517: `906`,
    1518: `906`,
    1519: `907`,
    152: `20`,
    1520: `907`,
    1521: `908`,
    1522: `909`,
    1523: `910`,
    1524: `910`,
    1525: `911`,
    1526: `911`,
    1527: `912`,
    1528: `913`,
    1529: `914`,
    153: `20`,
    1530: `914`,
    1531: `915`,
    1532: `916`,
    1533: `919`,
    1534: `919`,
    1535: `920`,
    1536: `920`,
    1537: `920`,
    1538: `921`,
    1539: `921`,
    154: `20`,
    1540: `923`,
    1541: `924`,
    1542: `925`,
    1543: `925`,
    1544: `926`,
    1545: `927`,
    1546: `928`,
    1547: `929`,
    1548: `930`,
    1549: `931`,
    155: `20`,
    1550: `932`,
    1551: `933`,
    1552: `933`,
    1553: `934`,
    1554: `935`,
    1555: `935`,
    1556: `935`,
    1557: `936`,
    1558: `936`,
    1559: `936`,
    156: `20`,
    1560: `937`,
    1561: `938`,
    1562: `938`,
    1563: `939`,
    1564: `940`,
    1565: `941`,
    1566: `941`,
    1567: `941`,
    1568: `942`,
    1569: `943`,
    157: `20`,
    1570: `943`,
    1571: `944`,
    1572: `945`,
    1573: `946`,
    1574: `947`,
    1575: `947`,
    1576: `948`,
    1577: `948`,
    1578: `949`,
    1579: `950`,
    158: `20`,
    1580: `950`,
    1581: `951`,
    1582: `952`,
    1583: `952`,
    1584: `953`,
    1585: `954`,
    1586: `954`,
    1587: `955`,
    1588: `956`,
    1589: `957`,
    159: `20`,
    1590: `957`,
    1591: `958`,
    1592: `959`,
    1593: `960`,
    1594: `960`,
    1595: `961`,
    1596: `961`,
    1597: `962`,
    1598: `962`,
    1599: `963`,
    16: `2`,
    160: `20`,
    1600: `963`,
    1601: `965`,
    1602: `965`,
    1603: `966`,
    1604: `966`,
    1605: `967`,
    1606: `967`,
    1607: `968`,
    1608: `969`,
    1609: `969`,
    161: `20`,
    1610: `970`,
    1611: `971`,
    1612: `971`,
    1613: `972`,
    1614: `973`,
    1615: `974`,
    1616: `974`,
    1617: `975`,
    1618: `976`,
    1619: `976`,
    162: `20`,
    1620: `977`,
    1621: `978`,
    1622: `978`,
    1623: `979`,
    1624: `980`,
    1625: `981`,
    1626: `982`,
    1627: `982`,
    1628: `983`,
    1629: `987`,
    163: `20`,
    1630: `987`,
    1631: `988`,
    1632: `989`,
    1633: `989`,
    1634: `990`,
    1635: `991`,
    1636: `991`,
    1637: `992`,
    1638: `993`,
    1639: `994`,
    164: `20`,
    1640: `995`,
    1641: `995`,
    1642: `995`,
    1643: `996`,
    1644: `996`,
    1645: `996`,
    1646: `997`,
    1647: `998`,
    1648: `998`,
    1649: `999`,
    165: `20`,
    1650: `999`,
    1651: `999`,
    1652: `999`,
    1653: `999`,
    1654: `999`,
    1655: `999`,
    1656: `999`,
    1657: `999`,
    1658: `999`,
    1659: `1000`,
    166: `20`,
    1660: `1000`,
    1661: `1001`,
    1662: `1002`,
    1663: `1003`,
    1664: `1003`,
    1665: `1004`,
    1666: `1004`,
    1667: `1005`,
    1668: `1006`,
    1669: `1006`,
    167: `20`,
    1670: `1007`,
    1671: `1008`,
    1672: `1009`,
    1673: `1010`,
    1674: `1014`,
    1675: `1014`,
    1676: `1015`,
    1677: `1015`,
    1678: `1015`,
    1679: `1016`,
    168: `20`,
    1680: `1017`,
    1681: `1021`,
    1682: `1022`,
    1683: `1022`,
    1684: `1023`,
    1685: `1023`,
    1686: `1023`,
    1687: `1023`,
    1688: `1023`,
    1689: `1023`,
    169: `20`,
    1690: `1023`,
    1691: `1023`,
    1692: `1023`,
    1693: `1023`,
    1694: `1024`,
    1695: `1024`,
    1696: `1025`,
    1697: `1026`,
    1698: `1026`,
    1699: `1026`,
    17: `2`,
    170: `20`,
    1700: `1027`,
    1701: `1028`,
    1702: `1029`,
    1703: `1029`,
    1704: `1030`,
    1705: `1031`,
    1706: `1031`,
    1707: `1031`,
    1708: `1032`,
    1709: `1032`,
    171: `20`,
    1710: `1033`,
    1711: `1033`,
    1712: `1034`,
    1713: `1034`,
    1714: `1034`,
    1715: `1035`,
    1716: `1035`,
    1717: `1036`,
    1718: `1036`,
    1719: `1036`,
    172: `20`,
    1720: `1037`,
    1721: `1038`,
    1722: `1038`,
    1723: `1039`,
    1724: `1039`,
    1725: `1039`,
    1726: `1040`,
    1727: `1041`,
    1728: `1041`,
    1729: `1042`,
    173: `20`,
    1730: `1042`,
    1731: `1043`,
    1732: `1044`,
    1733: `1044`,
    1734: `1045`,
    1735: `1046`,
    1736: `1047`,
    1737: `1048`,
    1738: `1048`,
    1739: `1049`,
    174: `20`,
    1740: `1049`,
    1741: `1050`,
    1742: `1050`,
    1743: `1051`,
    1744: `1051`,
    1745: `1051`,
    1746: `1053`,
    1747: `1053`,
    1748: `1054`,
    1749: `1054`,
    175: `20`,
    1750: `1054`,
    1751: `1055`,
    1752: `1055`,
    1753: `1056`,
    1754: `1056`,
    1755: `1057`,
    1756: `1057`,
    1757: `1058`,
    1758: `1059`,
    1759: `1059`,
    176: `20`,
    1760: `1060`,
    1761: `1061`,
    1762: `1063`,
    1763: `1064`,
    1764: `1065`,
    1765: `1066`,
    1766: `1067`,
    1767: `1067`,
    1768: `1068`,
    1769: `1069`,
    177: `20`,
    1770: `1069`,
    1771: `1069`,
    1772: `1070`,
    1773: `1070`,
    1774: `1070`,
    1775: `1071`,
    1776: `1072`,
    1777: `1072`,
    1778: `1073`,
    1779: `1073`,
    178: `20`,
    1780: `1074`,
    1781: `1074`,
    1782: `1075`,
    1783: `1076`,
    1784: `1081`,
    1785: `1081`,
    1786: `1083`,
    1787: `1083`,
    1788: `1085`,
    1789: `1085`,
    179: `20`,
    1790: `1086`,
    1791: `1086`,
    1792: `1086`,
    1793: `1087`,
    1794: `1088`,
    1795: `1089`,
    1796: `1089`,
    1797: `1090`,
    1798: `1091`,
    1799: `1091`,
    18: `2`,
    180: `22`,
    1800: `1092`,
    1801: `1092`,
    1802: `1093`,
    1803: `1094`,
    1804: `1095`,
    1805: `1095`,
    1806: `1095`,
    1807: `1096`,
    1808: `1097`,
    1809: `1097`,
    181: `24`,
    1810: `1098`,
    1811: `1099`,
    1812: `1100`,
    1813: `1101`,
    1814: `1101`,
    1815: `1102`,
    1816: `1102`,
    1817: `1103`,
    1818: `1104`,
    1819: `1104`,
    182: `24`,
    1820: `1105`,
    1821: `1106`,
    1822: `1106`,
    1823: `1107`,
    1824: `1108`,
    1825: `1108`,
    1826: `1109`,
    1827: `1110`,
    1828: `1111`,
    1829: `1111`,
    183: `24`,
    1830: `1112`,
    1831: `1113`,
    1832: `1114`,
    1833: `1114`,
    1834: `1115`,
    1835: `1115`,
    1836: `1116`,
    1837: `1116`,
    1838: `1117`,
    1839: `1117`,
    184: `25`,
    1840: `1119`,
    1841: `1119`,
    1842: `1120`,
    1843: `1120`,
    1844: `1121`,
    1845: `1121`,
    1846: `1122`,
    1847: `1122`,
    1848: `1123`,
    1849: `1123`,
    185: `25`,
    1850: `1124`,
    1851: `1125`,
    1852: `1125`,
    1853: `1126`,
    1854: `1127`,
    1855: `1128`,
    1856: `1128`,
    1857: `1129`,
    1858: `1130`,
    1859: `1130`,
    186: `27`,
    1860: `1131`,
    1861: `1132`,
    1862: `1132`,
    1863: `1133`,
    1864: `1134`,
    1865: `1135`,
    1866: `1136`,
    1867: `1136`,
    1868: `1137`,
    1869: `1141`,
    187: `28`,
    1870: `1141`,
    1871: `1142`,
    1872: `1143`,
    1873: `1143`,
    1874: `1144`,
    1875: `1145`,
    1876: `1145`,
    1877: `1146`,
    1878: `1147`,
    1879: `1148`,
    188: `29`,
    1880: `1149`,
    1881: `1149`,
    1882: `1149`,
    1883: `1150`,
    1884: `1150`,
    1885: `1150`,
    1886: `1151`,
    1887: `1152`,
    1888: `1152`,
    1889: `1153`,
    189: `30`,
    1890: `1153`,
    1891: `1153`,
    1892: `1153`,
    1893: `1153`,
    1894: `1153`,
    1895: `1153`,
    1896: `1153`,
    1897: `1153`,
    1898: `1153`,
    1899: `1154`,
    19: `2`,
    190: `30`,
    1900: `1154`,
    1901: `1155`,
    1902: `1156`,
    1903: `1157`,
    1904: `1157`,
    1905: `1158`,
    1906: `1158`,
    1907: `1159`,
    1908: `1160`,
    1909: `1160`,
    191: `31`,
    1910: `1161`,
    1911: `1162`,
    1912: `1163`,
    1913: `1164`,
    1914: `1168`,
    1915: `1168`,
    1916: `1169`,
    1917: `1169`,
    1918: `1169`,
    1919: `1170`,
    192: `32`,
    1920: `1171`,
    1921: `1175`,
    1922: `1176`,
    1923: `1176`,
    1924: `1177`,
    1925: `1177`,
    1926: `1177`,
    1927: `1177`,
    1928: `1177`,
    1929: `1177`,
    193: `32`,
    1930: `1177`,
    1931: `1177`,
    1932: `1177`,
    1933: `1177`,
    1934: `1178`,
    1935: `1178`,
    1936: `1179`,
    1937: `1180`,
    1938: `1180`,
    1939: `1180`,
    194: `33`,
    1940: `1181`,
    1941: `1182`,
    1942: `1183`,
    1943: `1183`,
    1944: `1184`,
    1945: `1185`,
    1946: `1185`,
    1947: `1185`,
    1948: `1186`,
    1949: `1186`,
    195: `34`,
    1950: `1187`,
    1951: `1187`,
    1952: `1188`,
    1953: `1188`,
    1954: `1188`,
    1955: `1189`,
    1956: `1189`,
    1957: `1190`,
    1958: `1190`,
    1959: `1190`,
    196: `35`,
    1960: `1191`,
    1961: `1192`,
    1962: `1192`,
    1963: `1193`,
    1964: `1193`,
    1965: `1193`,
    1966: `1194`,
    1967: `1195`,
    1968: `1195`,
    1969: `1196`,
    197: `36`,
    1970: `1196`,
    1971: `1197`,
    1972: `1198`,
    1973: `1198`,
    1974: `1199`,
    1975: `1200`,
    1976: `1201`,
    1977: `1202`,
    1978: `1202`,
    1979: `1203`,
    198: `36`,
    1980: `1203`,
    1981: `1204`,
    1982: `1204`,
    1983: `1205`,
    1984: `1205`,
    1985: `1205`,
    1986: `1207`,
    1987: `1207`,
    1988: `1208`,
    1989: `1208`,
    199: `38`,
    1990: `1208`,
    1991: `1209`,
    1992: `1209`,
    1993: `1210`,
    1994: `1210`,
    1995: `1211`,
    1996: `1211`,
    1997: `1211`,
    1998: `1212`,
    1999: `1212`,
    2: `2`,
    20: `2`,
    200: `38`,
    2000: `1213`,
    2001: `1213`,
    2002: `1214`,
    2003: `1214`,
    2004: `1215`,
    2005: `1216`,
    2006: `1216`,
    2007: `1218`,
    2008: `1219`,
    2009: `1220`,
    201: `39`,
    2010: `1221`,
    2011: `1222`,
    2012: `1222`,
    2013: `1223`,
    2014: `1224`,
    2015: `1224`,
    2016: `1224`,
    2017: `1225`,
    2018: `1226`,
    2019: `1226`,
    202: `39`,
    2020: `1227`,
    2021: `1228`,
    2022: `1229`,
    2023: `1230`,
    2024: `1231`,
    2025: `1237`,
    2026: `1238`,
    2027: `1239`,
    2028: `1240`,
    2029: `1241`,
    203: `40`,
    2030: `1241`,
    2031: `1242`,
    2032: `1243`,
    2033: `1243`,
    2034: `1243`,
    2035: `1244`,
    2036: `1245`,
    2037: `1246`,
    2038: `1247`,
    2039: `1248`,
    204: `41`,
    2040: `1253`,
    2041: `1253`,
    2042: `1254`,
    2043: `1254`,
    2044: `1255`,
    2045: `1256`,
    2046: `1256`,
    2047: `1258`,
    2048: `1259`,
    2049: `1260`,
    205: `42`,
    2050: `1261`,
    2051: `1262`,
    2052: `1262`,
    2053: `1263`,
    2054: `1264`,
    2055: `1265`,
    2056: `1265`,
    2057: `1265`,
    2058: `1266`,
    2059: `1267`,
    206: `42`,
    2060: `1267`,
    2061: `1268`,
    2062: `1269`,
    2063: `1270`,
    2064: `1271`,
    2065: `1272`,
    2066: `1277`,
    2067: `1278`,
    2068: `1279`,
    2069: `1279`,
    207: `42`,
    2070: `1280`,
    2071: `1280`,
    2072: `1280`,
    2073: `1281`,
    2074: `1282`,
    2075: `1282`,
    2076: `1283`,
    2077: `1283`,
    2078: `1284`,
    2079: `1284`,
    208: `43`,
    2080: `1285`,
    2081: `1286`,
    2082: `1291`,
    2083: `1292`,
    2084: `1293`,
    2085: `1293`,
    2086: `1294`,
    2087: `1294`,
    2088: `1294`,
    2089: `1295`,
    209: `43`,
    2090: `1296`,
    2091: `1296`,
    2092: `1297`,
    2093: `1297`,
    2094: `1298`,
    2095: `1298`,
    2096: `1299`,
    2097: `1300`,
    2098: `1305`,
    2099: `1306`,
    21: `2`,
    210: `44`,
    2100: `1307`,
    2101: `1307`,
    2102: `1308`,
    2103: `1309`,
    2104: `1309`,
    2105: `1310`,
    2106: `1310`,
    2107: `1311`,
    2108: `1312`,
    2109: `1313`,
    211: `45`,
    2110: `1313`,
    2111: `1313`,
    2112: `1314`,
    2113: `1315`,
    2114: `1316`,
    2115: `1316`,
    2116: `1317`,
    2117: `1318`,
    2118: `1319`,
    2119: `1320`,
    212: `46`,
    2120: `1321`,
    2121: `1322`,
    2122: `1323`,
    2123: `1324`,
    2124: `1324`,
    2125: `1325`,
    2126: `1326`,
    2127: `1326`,
    2128: `1326`,
    2129: `1327`,
    213: `46`,
    2130: `1327`,
    2131: `1327`,
    2132: `1328`,
    2133: `1329`,
    2134: `1329`,
    2135: `1330`,
    2136: `1331`,
    2137: `1332`,
    2138: `1332`,
    2139: `1332`,
    214: `47`,
    2140: `1333`,
    2141: `1333`,
    2142: `1334`,
    2143: `1335`,
    2144: `1335`,
    2145: `1336`,
    2146: `1337`,
    2147: `1338`,
    2148: `1338`,
    2149: `1339`,
    215: `47`,
    2150: `1339`,
    2151: `1340`,
    2152: `1341`,
    2153: `1342`,
    2154: `1342`,
    2155: `1342`,
    2156: `1343`,
    2157: `1344`,
    2158: `1344`,
    2159: `1345`,
    216: `48`,
    2160: `1345`,
    2161: `1345`,
    2162: `1345`,
    2163: `1345`,
    2164: `1345`,
    2165: `1345`,
    2166: `1345`,
    2167: `1345`,
    2168: `1345`,
    2169: `1346`,
    217: `48`,
    2170: `1346`,
    2171: `1347`,
    2172: `1348`,
    2173: `1348`,
    2174: `1348`,
    2175: `1349`,
    2176: `1350`,
    2177: `1351`,
    2178: `1351`,
    2179: `1352`,
    218: `48`,
    2180: `1353`,
    2181: `1353`,
    2182: `1353`,
    2183: `1354`,
    2184: `1354`,
    2185: `1355`,
    2186: `1355`,
    2187: `1356`,
    2188: `1356`,
    2189: `1357`,
    219: `49`,
    2190: `1357`,
    2191: `1357`,
    2192: `1359`,
    2193: `1359`,
    2194: `1360`,
    2195: `1360`,
    2196: `1361`,
    2197: `1362`,
    2198: `1365`,
    2199: `1365`,
    22: `2`,
    220: `49`,
    2200: `1365`,
    2201: `1366`,
    2202: `1367`,
    2203: `1369`,
    2204: `1370`,
    2205: `1371`,
    2206: `1372`,
    2207: `1373`,
    2208: `1373`,
    2209: `1374`,
    221: `50`,
    2210: `1374`,
    2211: `1375`,
    2212: `1376`,
    2213: `1377`,
    2214: `1378`,
    2215: `1378`,
    2216: `1378`,
    2217: `1379`,
    2218: `1379`,
    2219: `1379`,
    222: `50`,
    2220: `1380`,
    2221: `1380`,
    2222: `1382`,
    2223: `1382`,
    2224: `1383`,
    2225: `1384`,
    2226: `1385`,
    2227: `1387`,
    2228: `1387`,
    2229: `1387`,
    223: `50`,
    2230: `1389`,
    2231: `1389`,
    2232: `1390`,
    2233: `1390`,
    2234: `1391`,
    2235: `1392`,
    2236: `1395`,
    2237: `1395`,
    2238: `1395`,
    2239: `1396`,
    224: `50`,
    2240: `1397`,
    2241: `1399`,
    2242: `1400`,
    2243: `1401`,
    2244: `1402`,
    2245: `1403`,
    2246: `1403`,
    2247: `1404`,
    2248: `1405`,
    2249: `1405`,
    225: `50`,
    2250: `1405`,
    2251: `1406`,
    2252: `1406`,
    2253: `1406`,
    2254: `1407`,
    2255: `1407`,
    2256: `1408`,
    2257: `1408`,
    2258: `1408`,
    2259: `1410`,
    226: `50`,
    2260: `1410`,
    2261: `1411`,
    2262: `1411`,
    2263: `1412`,
    2264: `1413`,
    2265: `1416`,
    2266: `1416`,
    2267: `1416`,
    2268: `1417`,
    2269: `1417`,
    227: `51`,
    2270: `1418`,
    2271: `1418`,
    2272: `1418`,
    2273: `1419`,
    2274: `1419`,
    2275: `1420`,
    2276: `1420`,
    2277: `1420`,
    2278: `1421`,
    2279: `1422`,
    228: `51`,
    2280: `1422`,
    2281: `1423`,
    2282: `1423`,
    2283: `1423`,
    2284: `1424`,
    2285: `1425`,
    2286: `1425`,
    2287: `1426`,
    2288: `1426`,
    2289: `1426`,
    229: `52`,
    2290: `1427`,
    2291: `1428`,
    2292: `1428`,
    2293: `1429`,
    2294: `1429`,
    2295: `1429`,
    2296: `1431`,
    2297: `1431`,
    2298: `1432`,
    2299: `1432`,
    23: `2`,
    230: `53`,
    2300: `1433`,
    2301: `1434`,
    2302: `1437`,
    2303: `1437`,
    2304: `1437`,
    2305: `1438`,
    2306: `1438`,
    2307: `1439`,
    2308: `1439`,
    2309: `1439`,
    231: `54`,
    2310: `1440`,
    2311: `1440`,
    2312: `1441`,
    2313: `1441`,
    2314: `1441`,
    2315: `1443`,
    2316: `1443`,
    2317: `1444`,
    2318: `1445`,
    2319: `1445`,
    232: `54`,
    2320: `1446`,
    2321: `1446`,
    2322: `1446`,
    2323: `1446`,
    2324: `1446`,
    2325: `1446`,
    2326: `1447`,
    2327: `1447`,
    2328: `1448`,
    2329: `1449`,
    233: `55`,
    2330: `1450`,
    2331: `1452`,
    2332: `1452`,
    2333: `1453`,
    2334: `1453`,
    2335: `1453`,
    2336: `1455`,
    2337: `1455`,
    2338: `1456`,
    2339: `1457`,
    234: `56`,
    2340: `1458`,
    2341: `1458`,
    2342: `1459`,
    2343: `1459`,
    2344: `1459`,
    2345: `1461`,
    2346: `1462`,
    2347: `1462`,
    2348: `1463`,
    2349: `1464`,
    235: `58`,
    2350: `1466`,
    2351: `1466`,
    2352: `1467`,
    2353: `1468`,
    2354: `1469`,
    2355: `1469`,
    2356: `1470`,
    2357: `1470`,
    2358: `1471`,
    2359: `1472`,
    236: `58`,
    2360: `1473`,
    2361: `1473`,
    2362: `1474`,
    2363: `1474`,
    2364: `1475`,
    2365: `1475`,
    2366: `1476`,
    2367: `1477`,
    2368: `1477`,
    2369: `1478`,
    237: `59`,
    2370: `1478`,
    2371: `1478`,
    2372: `1478`,
    2373: `1478`,
    2374: `1478`,
    2375: `1479`,
    2376: `1479`,
    2377: `1480`,
    2378: `1481`,
    2379: `1482`,
    238: `59`,
    2380: `1482`,
    2381: `1483`,
    2382: `1484`,
    2383: `1485`,
    2384: `1485`,
    2385: `1486`,
    2386: `1487`,
    2387: `1488`,
    2388: `1490`,
    2389: `1490`,
    239: `59`,
    2390: `1491`,
    2391: `1491`,
    2392: `1491`,
    2393: `1492`,
    2394: `1492`,
    2395: `1493`,
    2396: `1493`,
    2397: `1493`,
    2398: `1494`,
    2399: `1496`,
    24: `2`,
    240: `60`,
    2400: `1496`,
    2401: `1497`,
    2402: `1497`,
    2403: `1498`,
    2404: `1498`,
    2405: `1498`,
    2406: `1499`,
    2407: `1500`,
    2408: `1500`,
    2409: `1501`,
    241: `60`,
    2410: `1502`,
    2411: `1502`,
    2412: `1503`,
    2413: `1504`,
    2414: `1505`,
    2415: `1506`,
    2416: `1506`,
    2417: `1507`,
    2418: `1507`,
    2419: `1508`,
    242: `61`,
    2420: `1509`,
    2421: `1509`,
    2422: `1510`,
    2423: `1511`,
    2424: `1511`,
    2425: `1512`,
    2426: `1513`,
    2427: `1513`,
    2428: `1514`,
    2429: `1515`,
    243: `62`,
    2430: `1516`,
    2431: `1516`,
    2432: `1517`,
    2433: `1518`,
    2434: `1519`,
    2435: `1519`,
    2436: `1520`,
    2437: `1520`,
    2438: `1521`,
    2439: `1521`,
    244: `63`,
    2440: `1522`,
    2441: `1522`,
    2442: `1524`,
    2443: `1524`,
    2444: `1525`,
    2445: `1525`,
    2446: `1525`,
    2447: `1525`,
    2448: `1525`,
    2449: `1525`,
    245: `63`,
    2450: `1526`,
    2451: `1526`,
    2452: `1527`,
    2453: `1527`,
    2454: `1528`,
    2455: `1529`,
    2456: `1529`,
    2457: `1530`,
    2458: `1531`,
    2459: `1532`,
    246: `63`,
    2460: `1532`,
    2461: `1533`,
    2462: `1536`,
    2463: `1536`,
    2464: `1537`,
    2465: `1538`,
    2466: `1538`,
    2467: `1539`,
    2468: `1540`,
    2469: `1540`,
    247: `63`,
    2470: `1541`,
    2471: `1542`,
    2472: `1543`,
    2473: `1544`,
    2474: `1544`,
    2475: `1544`,
    2476: `1545`,
    2477: `1545`,
    2478: `1545`,
    2479: `1546`,
    248: `63`,
    2480: `1547`,
    2481: `1547`,
    2482: `1548`,
    2483: `1548`,
    2484: `1548`,
    2485: `1548`,
    2486: `1548`,
    2487: `1548`,
    2488: `1548`,
    2489: `1548`,
    249: `63`,
    2490: `1548`,
    2491: `1548`,
    2492: `1549`,
    2493: `1549`,
    2494: `1550`,
    2495: `1551`,
    2496: `1552`,
    2497: `1552`,
    2498: `1553`,
    2499: `1553`,
    25: `2`,
    250: `63`,
    2500: `1554`,
    2501: `1555`,
    2502: `1555`,
    2503: `1556`,
    2504: `1557`,
    2505: `1558`,
    2506: `1559`,
    2507: `1562`,
    2508: `1562`,
    2509: `1563`,
    251: `63`,
    2510: `1563`,
    2511: `1563`,
    2512: `1564`,
    2513: `1565`,
    2514: `1568`,
    2515: `1568`,
    2516: `1569`,
    2517: `1569`,
    2518: `1570`,
    2519: `1571`,
    252: `63`,
    2520: `1571`,
    2521: `1572`,
    2522: `1573`,
    2523: `1574`,
    2524: `1575`,
    2525: `1576`,
    2526: `1577`,
    2527: `1577`,
    2528: `1578`,
    2529: `1578`,
    253: `63`,
    2530: `1579`,
    2531: `1579`,
    2532: `1580`,
    2533: `1580`,
    2534: `1580`,
    2535: `1582`,
    2536: `1582`,
    2537: `1582`,
    2538: `1583`,
    2539: `1583`,
    254: `63`,
    2540: `1584`,
    2541: `1584`,
    2542: `1584`,
    2543: `1585`,
    2544: `1585`,
    2545: `1585`,
    2546: `1586`,
    2547: `1586`,
    2548: `1587`,
    2549: `1587`,
    255: `63`,
    2550: `1587`,
    2551: `1589`,
    2552: `1589`,
    2553: `1589`,
    2554: `1590`,
    2555: `1590`,
    2556: `1590`,
    2557: `1591`,
    2558: `1591`,
    2559: `1592`,
    256: `63`,
    2560: `1592`,
    2561: `1592`,
    2562: `1594`,
    2563: `1594`,
    2564: `1594`,
    2565: `1595`,
    2566: `1595`,
    2567: `1595`,
    2568: `1596`,
    2569: `1596`,
    257: `63`,
    2570: `1597`,
    2571: `1597`,
    2572: `1597`,
    2573: `1599`,
    2574: `1600`,
    2575: `1600`,
    2576: `1601`,
    2577: `1602`,
    2578: `1603`,
    2579: `1603`,
    258: `63`,
    2580: `1604`,
    2581: `1604`,
    2582: `1605`,
    2583: `1606`,
    2584: `1607`,
    2585: `1608`,
    2586: `1608`,
    2587: `1609`,
    2588: `1610`,
    2589: `1611`,
    259: `63`,
    2590: `1612`,
    2591: `1612`,
    2592: `1613`,
    2593: `1614`,
    2594: `1615`,
    2595: `1615`,
    2596: `1615`,
    2597: `1616`,
    2598: `1616`,
    2599: `1617`,
    26: `2`,
    260: `64`,
    2600: `1618`,
    2601: `1619`,
    2602: `1620`,
    2603: `1620`,
    2604: `1620`,
    2605: `1622`,
    2606: `1622`,
    2607: `1622`,
    2608: `1623`,
    2609: `1623`,
    261: `64`,
    2610: `1623`,
    2611: `1624`,
    2612: `1624`,
    2613: `1625`,
    2614: `1625`,
    2615: `1626`,
    2616: `1626`,
    2617: `1626`,
    2618: `1628`,
    2619: `1628`,
    262: `64`,
    2620: `1628`,
    2621: `1629`,
    2622: `1629`,
    2623: `1630`,
    2624: `1630`,
    2625: `1630`,
    2626: `1632`,
    2627: `1632`,
    2628: `1633`,
    2629: `1633`,
    263: `66`,
    2630: `1633`,
    2631: `1634`,
    2632: `1634`,
    2633: `1635`,
    2634: `1635`,
    2635: `1635`,
    2636: `1637`,
    2637: `1637`,
    2638: `1638`,
    2639: `1638`,
    264: `66`,
    2640: `1638`,
    2641: `1639`,
    2642: `1639`,
    2643: `1640`,
    2644: `1640`,
    2645: `1640`,
    2646: `1642`,
    2647: `1642`,
    2648: `1643`,
    2649: `1643`,
    265: `66`,
    2650: `1643`,
    2651: `1644`,
    2652: `1644`,
    2653: `1645`,
    2654: `1645`,
    2655: `1645`,
    2656: `1647`,
    2657: `1647`,
    2658: `1648`,
    2659: `1648`,
    266: `67`,
    2660: `1648`,
    2661: `1649`,
    2662: `1649`,
    2663: `1650`,
    2664: `1650`,
    2665: `1650`,
    2666: `1652`,
    2667: `1652`,
    2668: `1653`,
    2669: `1653`,
    267: `67`,
    2670: `1653`,
    2671: `1654`,
    2672: `1654`,
    2673: `1655`,
    2674: `1655`,
    2675: `1655`,
    2676: `1657`,
    2677: `1657`,
    2678: `1658`,
    2679: `1658`,
    268: `67`,
    2680: `1658`,
    2681: `1659`,
    2682: `1659`,
    2683: `1660`,
    2684: `1660`,
    2685: `1660`,
    2686: `1663`,
    2687: `1664`,
    2688: `1665`,
    2689: `1666`,
    269: `68`,
    2690: `1667`,
    2691: `1667`,
    2692: `1668`,
    2693: `1669`,
    2694: `1669`,
    2695: `1669`,
    2696: `1670`,
    2697: `1671`,
    2698: `1672`,
    2699: `1672`,
    27: `2`,
    270: `69`,
    2700: `1672`,
    2701: `1673`,
    2702: `1674`,
    2703: `1675`,
    2704: `1675`,
    2705: `1676`,
    2706: `1677`,
    2707: `1678`,
    2708: `1679`,
    2709: `1679`,
    271: `69`,
    2710: `1679`,
    2711: `1681`,
    2712: `1681`,
    2713: `1682`,
    2714: `1683`,
    2715: `1683`,
    2716: `1684`,
    2717: `1684`,
    2718: `1685`,
    2719: `1686`,
    272: `70`,
    2720: `1687`,
    2721: `1688`,
    2722: `1688`,
    2723: `1689`,
    2724: `1690`,
    2725: `1690`,
    2726: `1690`,
    2727: `1691`,
    2728: `1692`,
    2729: `1692`,
    273: `70`,
    2730: `1693`,
    2731: `1694`,
    2732: `1695`,
    2733: `1696`,
    2734: `1696`,
    2735: `1697`,
    2736: `1697`,
    2737: `1698`,
    2738: `1699`,
    2739: `1699`,
    274: `72`,
    2740: `1700`,
    2741: `1701`,
    2742: `1701`,
    2743: `1702`,
    2744: `1703`,
    2745: `1703`,
    2746: `1704`,
    2747: `1705`,
    2748: `1706`,
    2749: `1706`,
    275: `73`,
    2750: `1707`,
    2751: `1708`,
    2752: `1709`,
    2753: `1709`,
    2754: `1710`,
    2755: `1710`,
    2756: `1711`,
    2757: `1711`,
    2758: `1712`,
    2759: `1712`,
    276: `74`,
    2760: `1714`,
    2761: `1714`,
    2762: `1715`,
    2763: `1715`,
    2764: `1716`,
    2765: `1716`,
    2766: `1717`,
    2767: `1717`,
    2768: `1718`,
    2769: `1719`,
    277: `74`,
    2770: `1719`,
    2771: `1720`,
    2772: `1721`,
    2773: `1722`,
    2774: `1722`,
    2775: `1723`,
    2776: `1724`,
    2777: `1724`,
    2778: `1725`,
    2779: `1726`,
    278: `75`,
    2780: `1726`,
    2781: `1727`,
    2782: `1728`,
    2783: `1729`,
    2784: `1729`,
    2785: `1730`,
    2786: `1734`,
    2787: `1734`,
    2788: `1735`,
    2789: `1736`,
    279: `75`,
    2790: `1736`,
    2791: `1737`,
    2792: `1738`,
    2793: `1738`,
    2794: `1739`,
    2795: `1740`,
    2796: `1741`,
    2797: `1742`,
    2798: `1742`,
    2799: `1742`,
    28: `2`,
    280: `76`,
    2800: `1743`,
    2801: `1743`,
    2802: `1743`,
    2803: `1744`,
    2804: `1745`,
    2805: `1745`,
    2806: `1746`,
    2807: `1746`,
    2808: `1746`,
    2809: `1746`,
    281: `76`,
    2810: `1746`,
    2811: `1746`,
    2812: `1746`,
    2813: `1746`,
    2814: `1746`,
    2815: `1746`,
    2816: `1747`,
    2817: `1747`,
    2818: `1748`,
    2819: `1749`,
    282: `77`,
    2820: `1750`,
    2821: `1750`,
    2822: `1751`,
    2823: `1751`,
    2824: `1752`,
    2825: `1753`,
    2826: `1753`,
    2827: `1754`,
    2828: `1755`,
    2829: `1756`,
    283: `78`,
    2830: `1757`,
    2831: `1761`,
    2832: `1761`,
    2833: `1762`,
    2834: `1762`,
    2835: `1762`,
    2836: `1763`,
    2837: `1764`,
    2838: `1768`,
    2839: `1769`,
    284: `79`,
    2840: `1769`,
    2841: `1770`,
    2842: `1770`,
    2843: `1770`,
    2844: `1770`,
    2845: `1770`,
    2846: `1770`,
    2847: `1770`,
    2848: `1770`,
    2849: `1770`,
    285: `80`,
    2850: `1770`,
    2851: `1771`,
    2852: `1771`,
    2853: `1772`,
    2854: `1773`,
    2855: `1773`,
    2856: `1773`,
    2857: `1774`,
    2858: `1775`,
    2859: `1776`,
    286: `80`,
    2860: `1776`,
    2861: `1777`,
    2862: `1778`,
    2863: `1778`,
    2864: `1778`,
    2865: `1779`,
    2866: `1779`,
    2867: `1780`,
    2868: `1780`,
    2869: `1781`,
    287: `81`,
    2870: `1781`,
    2871: `1782`,
    2872: `1782`,
    2873: `1782`,
    2874: `1785`,
    2875: `1785`,
    2876: `1786`,
    2877: `1787`,
    2878: `1787`,
    2879: `1788`,
    288: `82`,
    2880: `1788`,
    2881: `1789`,
    2882: `1790`,
    2883: `1791`,
    2884: `1792`,
    2885: `1792`,
    2886: `1793`,
    2887: `1794`,
    2888: `1794`,
    2889: `1794`,
    289: `83`,
    2890: `1795`,
    2891: `1796`,
    2892: `1796`,
    2893: `1797`,
    2894: `1798`,
    2895: `1799`,
    2896: `1800`,
    2897: `1800`,
    2898: `1801`,
    2899: `1801`,
    29: `2`,
    290: `83`,
    2900: `1802`,
    2901: `1803`,
    2902: `1803`,
    2903: `1804`,
    2904: `1805`,
    2905: `1805`,
    2906: `1806`,
    2907: `1807`,
    2908: `1807`,
    2909: `1808`,
    291: `84`,
    2910: `1809`,
    2911: `1810`,
    2912: `1810`,
    2913: `1811`,
    2914: `1812`,
    2915: `1813`,
    2916: `1813`,
    2917: `1814`,
    2918: `1814`,
    2919: `1815`,
    292: `84`,
    2920: `1815`,
    2921: `1816`,
    2922: `1816`,
    2923: `1818`,
    2924: `1818`,
    2925: `1819`,
    2926: `1819`,
    2927: `1820`,
    2928: `1820`,
    2929: `1821`,
    293: `84`,
    2930: `1821`,
    2931: `1822`,
    2932: `1823`,
    2933: `1823`,
    2934: `1824`,
    2935: `1825`,
    2936: `1826`,
    2937: `1826`,
    2938: `1827`,
    2939: `1828`,
    294: `86`,
    2940: `1828`,
    2941: `1829`,
    2942: `1830`,
    2943: `1830`,
    2944: `1831`,
    2945: `1832`,
    2946: `1833`,
    2947: `1833`,
    2948: `1834`,
    2949: `1838`,
    295: `86`,
    2950: `1838`,
    2951: `1839`,
    2952: `1840`,
    2953: `1840`,
    2954: `1841`,
    2955: `1842`,
    2956: `1842`,
    2957: `1843`,
    2958: `1844`,
    2959: `1845`,
    296: `86`,
    2960: `1846`,
    2961: `1846`,
    2962: `1846`,
    2963: `1847`,
    2964: `1847`,
    2965: `1847`,
    2966: `1848`,
    2967: `1849`,
    2968: `1849`,
    2969: `1850`,
    297: `87`,
    2970: `1850`,
    2971: `1850`,
    2972: `1850`,
    2973: `1850`,
    2974: `1850`,
    2975: `1850`,
    2976: `1850`,
    2977: `1850`,
    2978: `1850`,
    2979: `1851`,
    298: `87`,
    2980: `1851`,
    2981: `1852`,
    2982: `1853`,
    2983: `1854`,
    2984: `1854`,
    2985: `1855`,
    2986: `1855`,
    2987: `1856`,
    2988: `1857`,
    2989: `1857`,
    299: `87`,
    2990: `1858`,
    2991: `1859`,
    2992: `1860`,
    2993: `1861`,
    2994: `1865`,
    2995: `1865`,
    2996: `1866`,
    2997: `1866`,
    2998: `1866`,
    2999: `1867`,
    3: `2`,
    30: `2`,
    300: `88`,
    3000: `1868`,
    3001: `1872`,
    3002: `1873`,
    3003: `1873`,
    3004: `1874`,
    3005: `1874`,
    3006: `1874`,
    3007: `1874`,
    3008: `1874`,
    3009: `1874`,
    301: `88`,
    3010: `1874`,
    3011: `1874`,
    3012: `1874`,
    3013: `1874`,
    3014: `1875`,
    3015: `1875`,
    3016: `1876`,
    3017: `1877`,
    3018: `1877`,
    3019: `1877`,
    302: `88`,
    3020: `1878`,
    3021: `1879`,
    3022: `1880`,
    3023: `1880`,
    3024: `1881`,
    3025: `1882`,
    3026: `1882`,
    3027: `1882`,
    3028: `1883`,
    3029: `1883`,
    303: `89`,
    3030: `1884`,
    3031: `1884`,
    3032: `1885`,
    3033: `1885`,
    3034: `1886`,
    3035: `1886`,
    3036: `1886`,
    3037: `1889`,
    3038: `1889`,
    3039: `1890`,
    304: `90`,
    3040: `1891`,
    3041: `1891`,
    3042: `1892`,
    3043: `1892`,
    3044: `1893`,
    3045: `1894`,
    3046: `1895`,
    3047: `1896`,
    3048: `1896`,
    3049: `1897`,
    305: `90`,
    3050: `1898`,
    3051: `1898`,
    3052: `1898`,
    3053: `1899`,
    3054: `1900`,
    3055: `1900`,
    3056: `1901`,
    3057: `1902`,
    3058: `1903`,
    3059: `1904`,
    306: `91`,
    3060: `1904`,
    3061: `1905`,
    3062: `1905`,
    3063: `1906`,
    3064: `1907`,
    3065: `1907`,
    3066: `1908`,
    3067: `1909`,
    3068: `1909`,
    3069: `1910`,
    307: `91`,
    3070: `1911`,
    3071: `1911`,
    3072: `1912`,
    3073: `1913`,
    3074: `1914`,
    3075: `1914`,
    3076: `1915`,
    3077: `1916`,
    3078: `1917`,
    3079: `1917`,
    308: `92`,
    3080: `1918`,
    3081: `1918`,
    3082: `1919`,
    3083: `1919`,
    3084: `1920`,
    3085: `1920`,
    3086: `1922`,
    3087: `1922`,
    3088: `1923`,
    3089: `1923`,
    309: `92`,
    3090: `1924`,
    3091: `1924`,
    3092: `1925`,
    3093: `1925`,
    3094: `1926`,
    3095: `1927`,
    3096: `1927`,
    3097: `1928`,
    3098: `1929`,
    3099: `1930`,
    31: `2`,
    310: `94`,
    3100: `1930`,
    3101: `1931`,
    3102: `1932`,
    3103: `1932`,
    3104: `1933`,
    3105: `1934`,
    3106: `1934`,
    3107: `1935`,
    3108: `1936`,
    3109: `1937`,
    311: `95`,
    3110: `1937`,
    3111: `1938`,
    3112: `1942`,
    3113: `1942`,
    3114: `1943`,
    3115: `1944`,
    3116: `1944`,
    3117: `1945`,
    3118: `1946`,
    3119: `1946`,
    312: `96`,
    3120: `1947`,
    3121: `1948`,
    3122: `1949`,
    3123: `1950`,
    3124: `1950`,
    3125: `1950`,
    3126: `1951`,
    3127: `1951`,
    3128: `1951`,
    3129: `1952`,
    313: `96`,
    3130: `1953`,
    3131: `1953`,
    3132: `1954`,
    3133: `1954`,
    3134: `1954`,
    3135: `1954`,
    3136: `1954`,
    3137: `1954`,
    3138: `1954`,
    3139: `1954`,
    314: `97`,
    3140: `1954`,
    3141: `1954`,
    3142: `1955`,
    3143: `1955`,
    3144: `1956`,
    3145: `1957`,
    3146: `1958`,
    3147: `1958`,
    3148: `1959`,
    3149: `1959`,
    315: `97`,
    3150: `1960`,
    3151: `1961`,
    3152: `1961`,
    3153: `1962`,
    3154: `1963`,
    3155: `1964`,
    3156: `1965`,
    3157: `1969`,
    3158: `1969`,
    3159: `1970`,
    316: `98`,
    3160: `1970`,
    3161: `1970`,
    3162: `1971`,
    3163: `1972`,
    3164: `1976`,
    3165: `1977`,
    3166: `1977`,
    3167: `1978`,
    3168: `1978`,
    3169: `1978`,
    317: `98`,
    3170: `1978`,
    3171: `1978`,
    3172: `1978`,
    3173: `1978`,
    3174: `1978`,
    3175: `1978`,
    3176: `1978`,
    3177: `1979`,
    3178: `1979`,
    3179: `1980`,
    318: `99`,
    3180: `1981`,
    3181: `1981`,
    3182: `1981`,
    3183: `1982`,
    3184: `1983`,
    3185: `1984`,
    3186: `1984`,
    3187: `1985`,
    3188: `1986`,
    3189: `1986`,
    319: `100`,
    3190: `1986`,
    3191: `1987`,
    3192: `1987`,
    3193: `1988`,
    3194: `1988`,
    3195: `1989`,
    3196: `1989`,
    3197: `1990`,
    3198: `1990`,
    3199: `1990`,
    32: `2`,
    320: `100`,
    3200: `1992`,
    3201: `1993`,
    3202: `1994`,
    3203: `1995`,
    3204: `1996`,
    3205: `1998`,
    3206: `1999`,
    3207: `1999`,
    3208: `2000`,
    3209: `2000`,
    321: `101`,
    3210: `2001`,
    3211: `2001`,
    3212: `2002`,
    3213: `2002`,
    3214: `2003`,
    3215: `2003`,
    3216: `2004`,
    3217: `2004`,
    3218: `2005`,
    3219: `2006`,
    322: `102`,
    3220: `2008`,
    3221: `2009`,
    3222: `2009`,
    3223: `2010`,
    3224: `2011`,
    3225: `2011`,
    3226: `2012`,
    3227: `2012`,
    3228: `2013`,
    3229: `2013`,
    323: `103`,
    3230: `2014`,
    3231: `2015`,
    3232: `2017`,
    3233: `2017`,
    3234: `2017`,
    3235: `2019`,
    3236: `2019`,
    3237: `2019`,
    3238: `2021`,
    3239: `2021`,
    324: `104`,
    3240: `2021`,
    3241: `2023`,
    3242: `2024`,
    3243: `2026`,
    3244: `2027`,
    3245: `2028`,
    3246: `2029`,
    3247: `2029`,
    3248: `2030`,
    3249: `2030`,
    325: `105`,
    3250: `2031`,
    3251: `2031`,
    3252: `2031`,
    3253: `2032`,
    3254: `2034`,
    3255: `2035`,
    3256: `2036`,
    3257: `2036`,
    3258: `2036`,
    3259: `2037`,
    326: `105`,
    3260: `2038`,
    3261: `2038`,
    3262: `2041`,
    3263: `2041`,
    3264: `2042`,
    3265: `2042`,
    3266: `2043`,
    3267: `2044`,
    3268: `2045`,
    3269: `2046`,
    327: `106`,
    3270: `2046`,
    3271: `2047`,
    3272: `2048`,
    3273: `2048`,
    3274: `2049`,
    3275: `2049`,
    3276: `2050`,
    3277: `2050`,
    3278: `2051`,
    3279: `2052`,
    328: `106`,
    3280: `2053`,
    3281: `2053`,
    3282: `2054`,
    3283: `2055`,
    3284: `2056`,
    3285: `2057`,
    3286: `2057`,
    3287: `2058`,
    3288: `2059`,
    3289: `2060`,
    329: `106`,
    3290: `2062`,
    3291: `2062`,
    3292: `2063`,
    3293: `2063`,
    3294: `2064`,
    3295: `2065`,
    3296: `2067`,
    3297: `2067`,
    3298: `2067`,
    3299: `2069`,
    33: `2`,
    330: `108`,
    3300: `2070`,
    3301: `2070`,
    3302: `2071`,
    3303: `2071`,
    3304: `2072`,
    3305: `2072`,
    3306: `2072`,
    3307: `2073`,
    3308: `2073`,
    3309: `2073`,
    331: `108`,
    3310: `2075`,
    3311: `2076`,
    3312: `2077`,
    3313: `2078`,
    3314: `2078`,
    3315: `2078`,
    3316: `2079`,
    3317: `2079`,
    3318: `2080`,
    3319: `2081`,
    332: `108`,
    3320: `2082`,
    3321: `2084`,
    3322: `2085`,
    3323: `2086`,
    3324: `2087`,
    3325: `2087`,
    3326: `2087`,
    3327: `2088`,
    3328: `2088`,
    3329: `2089`,
    333: `109`,
    3330: `2089`,
    3331: `2089`,
    3332: `2090`,
    3333: `2090`,
    3334: `2090`,
    3335: `2092`,
    3336: `2093`,
    3337: `2093`,
    3338: `2093`,
    3339: `2094`,
    334: `109`,
    3340: `2095`,
    3341: `2096`,
    3342: `2097`,
    3343: `2098`,
    3344: `2100`,
    3345: `2101`,
    3346: `2102`,
    3347: `2103`,
    3348: `2103`,
    3349: `2104`,
    335: `109`,
    3350: `2105`,
    3351: `2106`,
    3352: `2107`,
    3353: `2107`,
    3354: `2108`,
    3355: `2109`,
    3356: `2110`,
    3357: `2111`,
    3358: `2111`,
    3359: `2112`,
    336: `110`,
    3360: `2112`,
    3361: `2112`,
    3362: `2113`,
    3363: `2113`,
    3364: `2114`,
    3365: `2116`,
    3366: `2117`,
    3367: `2117`,
    3368: `2118`,
    3369: `2120`,
    337: `111`,
    3370: `2121`,
    3371: `2122`,
    3372: `2123`,
    3373: `2124`,
    3374: `2124`,
    3375: `2125`,
    3376: `2126`,
    3377: `2127`,
    3378: `2128`,
    3379: `2130`,
    338: `111`,
    3380: `2130`,
    3381: `2131`,
    3382: `2132`,
    3383: `2132`,
    3384: `2133`,
    3385: `2135`,
    3386: `2136`,
    3387: `2136`,
    3388: `2136`,
    3389: `2138`,
    339: `112`,
    3390: `2138`,
    3391: `2139`,
    3392: `2139`,
    3393: `2140`,
    3394: `2141`,
    3395: `2142`,
    3396: `2142`,
    3397: `2142`,
    3398: `2143`,
    3399: `2143`,
    34: `2`,
    340: `112`,
    3400: `2143`,
    3401: `2145`,
    3402: `2146`,
    3403: `2146`,
    3404: `2146`,
    3405: `2148`,
    3406: `2149`,
    3407: `2149`,
    3408: `2150`,
    341: `114`,
    342: `115`,
    343: `116`,
    344: `116`,
    345: `117`,
    346: `117`,
    347: `118`,
    348: `118`,
    349: `119`,
    35: `2`,
    350: `120`,
    351: `121`,
    352: `122`,
    353: `122`,
    354: `123`,
    355: `124`,
    356: `125`,
    357: `125`,
    358: `126`,
    359: `126`,
    36: `2`,
    360: `126`,
    361: `128`,
    362: `128`,
    363: `128`,
    364: `129`,
    365: `129`,
    366: `129`,
    367: `130`,
    368: `131`,
    369: `131`,
    37: `2`,
    370: `132`,
    371: `132`,
    372: `134`,
    373: `135`,
    374: `136`,
    375: `136`,
    376: `136`,
    377: `137`,
    378: `137`,
    379: `138`,
    38: `2`,
    380: `138`,
    381: `139`,
    382: `140`,
    383: `141`,
    384: `142`,
    385: `142`,
    386: `143`,
    387: `144`,
    388: `145`,
    389: `145`,
    39: `2`,
    390: `146`,
    391: `146`,
    392: `146`,
    393: `148`,
    394: `148`,
    395: `148`,
    396: `149`,
    397: `149`,
    398: `149`,
    399: `150`,
    4: `2`,
    40: `2`,
    400: `151`,
    401: `151`,
    402: `152`,
    403: `152`,
    404: `154`,
    405: `155`,
    406: `156`,
    407: `156`,
    408: `156`,
    409: `157`,
    41: `2`,
    410: `157`,
    411: `158`,
    412: `158`,
    413: `159`,
    414: `160`,
    415: `161`,
    416: `162`,
    417: `162`,
    418: `163`,
    419: `164`,
    42: `2`,
    420: `165`,
    421: `165`,
    422: `166`,
    423: `166`,
    424: `166`,
    425: `168`,
    426: `168`,
    427: `168`,
    428: `169`,
    429: `169`,
    43: `2`,
    430: `169`,
    431: `170`,
    432: `170`,
    433: `170`,
    434: `171`,
    435: `172`,
    436: `172`,
    437: `173`,
    438: `173`,
    439: `174`,
    44: `2`,
    440: `174`,
    441: `176`,
    442: `177`,
    443: `178`,
    444: `178`,
    445: `178`,
    446: `179`,
    447: `179`,
    448: `180`,
    449: `180`,
    45: `2`,
    450: `181`,
    451: `182`,
    452: `182`,
    453: `183`,
    454: `184`,
    455: `185`,
    456: `186`,
    457: `187`,
    458: `187`,
    459: `188`,
    46: `2`,
    460: `188`,
    461: `188`,
    462: `190`,
    463: `190`,
    464: `191`,
    465: `191`,
    466: `191`,
    467: `192`,
    468: `192`,
    469: `193`,
    47: `2`,
    470: `193`,
    471: `194`,
    472: `194`,
    473: `195`,
    474: `195`,
    475: `195`,
    476: `196`,
    477: `197`,
    478: `202`,
    479: `203`,
    48: `2`,
    480: `203`,
    481: `204`,
    482: `205`,
    483: `206`,
    484: `207`,
    485: `207`,
    486: `208`,
    487: `208`,
    488: `209`,
    489: `210`,
    49: `2`,
    490: `210`,
    491: `211`,
    492: `212`,
    493: `212`,
    494: `213`,
    495: `214`,
    496: `214`,
    497: `215`,
    498: `216`,
    499: `217`,
    5: `2`,
    50: `2`,
    500: `217`,
    501: `218`,
    502: `219`,
    503: `220`,
    504: `220`,
    505: `221`,
    506: `221`,
    507: `222`,
    508: `222`,
    509: `223`,
    51: `2`,
    510: `223`,
    511: `225`,
    512: `225`,
    513: `226`,
    514: `226`,
    515: `226`,
    516: `226`,
    517: `226`,
    518: `226`,
    519: `227`,
    52: `2`,
    520: `227`,
    521: `228`,
    522: `228`,
    523: `229`,
    524: `230`,
    525: `230`,
    526: `231`,
    527: `232`,
    528: `233`,
    529: `233`,
    53: `2`,
    530: `234`,
    531: `235`,
    532: `235`,
    533: `236`,
    534: `240`,
    535: `240`,
    536: `241`,
    537: `242`,
    538: `242`,
    539: `243`,
    54: `2`,
    540: `244`,
    541: `244`,
    542: `245`,
    543: `246`,
    544: `247`,
    545: `248`,
    546: `248`,
    547: `248`,
    548: `249`,
    549: `249`,
    55: `2`,
    550: `249`,
    551: `250`,
    552: `251`,
    553: `251`,
    554: `252`,
    555: `252`,
    556: `252`,
    557: `252`,
    558: `252`,
    559: `252`,
    56: `2`,
    560: `252`,
    561: `252`,
    562: `252`,
    563: `252`,
    564: `253`,
    565: `253`,
    566: `254`,
    567: `255`,
    568: `256`,
    569: `256`,
    57: `4`,
    570: `257`,
    571: `257`,
    572: `258`,
    573: `259`,
    574: `259`,
    575: `260`,
    576: `261`,
    577: `262`,
    578: `263`,
    579: `267`,
    58: `4`,
    580: `267`,
    581: `268`,
    582: `268`,
    583: `268`,
    584: `269`,
    585: `270`,
    586: `274`,
    587: `275`,
    588: `275`,
    589: `276`,
    59: `5`,
    590: `276`,
    591: `276`,
    592: `276`,
    593: `276`,
    594: `276`,
    595: `276`,
    596: `276`,
    597: `276`,
    598: `276`,
    599: `277`,
    6: `2`,
    60: `5`,
    600: `277`,
    601: `278`,
    602: `279`,
    603: `279`,
    604: `279`,
    605: `280`,
    606: `281`,
    607: `282`,
    608: `282`,
    609: `283`,
    61: `5`,
    610: `284`,
    611: `284`,
    612: `284`,
    613: `285`,
    614: `285`,
    615: `286`,
    616: `286`,
    617: `287`,
    618: `287`,
    619: `287`,
    62: `6`,
    620: `288`,
    621: `288`,
    622: `289`,
    623: `290`,
    624: `290`,
    625: `291`,
    626: `291`,
    627: `291`,
    628: `292`,
    629: `293`,
    63: `7`,
    630: `293`,
    631: `294`,
    632: `294`,
    633: `294`,
    634: `295`,
    635: `296`,
    636: `296`,
    637: `297`,
    638: `297`,
    639: `298`,
    64: `8`,
    640: `298`,
    641: `301`,
    642: `301`,
    643: `302`,
    644: `303`,
    645: `303`,
    646: `304`,
    647: `305`,
    648: `306`,
    649: `306`,
    65: `9`,
    650: `307`,
    651: `308`,
    652: `308`,
    653: `309`,
    654: `310`,
    655: `310`,
    656: `311`,
    657: `311`,
    658: `313`,
    659: `313`,
    66: `10`,
    660: `314`,
    661: `314`,
    662: `315`,
    663: `316`,
    664: `317`,
    665: `317`,
    666: `317`,
    667: `318`,
    668: `319`,
    669: `320`,
    67: `11`,
    670: `320`,
    671: `321`,
    672: `322`,
    673: `322`,
    674: `323`,
    675: `324`,
    676: `325`,
    677: `326`,
    678: `326`,
    679: `327`,
    68: `11`,
    680: `328`,
    681: `329`,
    682: `331`,
    683: `331`,
    684: `331`,
    685: `333`,
    686: `333`,
    687: `334`,
    688: `334`,
    689: `334`,
    69: `12`,
    690: `336`,
    691: `336`,
    692: `336`,
    693: `336`,
    694: `336`,
    695: `336`,
    696: `337`,
    697: `337`,
    698: `338`,
    699: `339`,
    7: `2`,
    70: `13`,
    700: `341`,
    701: `342`,
    702: `344`,
    703: `344`,
    704: `345`,
    705: `345`,
    706: `345`,
    707: `346`,
    708: `346`,
    709: `347`,
    71: `14`,
    710: `347`,
    711: `348`,
    712: `348`,
    713: `349`,
    714: `350`,
    715: `350`,
    716: `352`,
    717: `353`,
    718: `354`,
    719: `355`,
    72: `14`,
    720: `356`,
    721: `356`,
    722: `357`,
    723: `358`,
    724: `358`,
    725: `358`,
    726: `359`,
    727: `360`,
    728: `361`,
    729: `361`,
    73: `15`,
    730: `361`,
    731: `362`,
    732: `363`,
    733: `364`,
    734: `364`,
    735: `365`,
    736: `366`,
    737: `367`,
    738: `368`,
    739: `368`,
    74: `16`,
    740: `368`,
    741: `370`,
    742: `371`,
    743: `372`,
    744: `373`,
    745: `374`,
    746: `374`,
    747: `375`,
    748: `376`,
    749: `376`,
    75: `18`,
    750: `376`,
    751: `377`,
    752: `378`,
    753: `379`,
    754: `379`,
    755: `379`,
    756: `380`,
    757: `381`,
    758: `382`,
    759: `382`,
    76: `18`,
    760: `383`,
    761: `384`,
    762: `385`,
    763: `386`,
    764: `386`,
    765: `386`,
    766: `388`,
    767: `388`,
    768: `389`,
    769: `390`,
    77: `18`,
    770: `390`,
    771: `391`,
    772: `391`,
    773: `392`,
    774: `393`,
    775: `394`,
    776: `395`,
    777: `395`,
    778: `396`,
    779: `397`,
    78: `18`,
    780: `397`,
    781: `397`,
    782: `398`,
    783: `399`,
    784: `399`,
    785: `400`,
    786: `401`,
    787: `402`,
    788: `403`,
    789: `403`,
    79: `18`,
    790: `404`,
    791: `404`,
    792: `405`,
    793: `406`,
    794: `406`,
    795: `407`,
    796: `408`,
    797: `408`,
    798: `409`,
    799: `410`,
    8: `2`,
    80: `18`,
    800: `410`,
    801: `411`,
    802: `412`,
    803: `413`,
    804: `413`,
    805: `414`,
    806: `415`,
    807: `416`,
    808: `416`,
    809: `417`,
    81: `18`,
    810: `417`,
    811: `418`,
    812: `418`,
    813: `419`,
    814: `419`,
    815: `421`,
    816: `421`,
    817: `422`,
    818: `422`,
    819: `423`,
    82: `18`,
    820: `423`,
    821: `424`,
    822: `424`,
    823: `425`,
    824: `426`,
    825: `426`,
    826: `427`,
    827: `428`,
    828: `429`,
    829: `429`,
    83: `18`,
    830: `430`,
    831: `431`,
    832: `431`,
    833: `432`,
    834: `433`,
    835: `433`,
    836: `434`,
    837: `435`,
    838: `436`,
    839: `436`,
    84: `18`,
    840: `437`,
    841: `441`,
    842: `441`,
    843: `442`,
    844: `443`,
    845: `443`,
    846: `444`,
    847: `445`,
    848: `445`,
    849: `446`,
    85: `18`,
    850: `447`,
    851: `448`,
    852: `449`,
    853: `449`,
    854: `449`,
    855: `450`,
    856: `450`,
    857: `450`,
    858: `451`,
    859: `452`,
    86: `18`,
    860: `452`,
    861: `453`,
    862: `453`,
    863: `453`,
    864: `453`,
    865: `453`,
    866: `453`,
    867: `453`,
    868: `453`,
    869: `453`,
    87: `18`,
    870: `453`,
    871: `454`,
    872: `454`,
    873: `455`,
    874: `456`,
    875: `457`,
    876: `457`,
    877: `458`,
    878: `458`,
    879: `459`,
    88: `18`,
    880: `460`,
    881: `460`,
    882: `461`,
    883: `462`,
    884: `463`,
    885: `464`,
    886: `468`,
    887: `468`,
    888: `469`,
    889: `469`,
    89: `18`,
    890: `469`,
    891: `470`,
    892: `471`,
    893: `475`,
    894: `476`,
    895: `476`,
    896: `477`,
    897: `477`,
    898: `477`,
    899: `477`,
    9: `2`,
    90: `18`,
    900: `477`,
    901: `477`,
    902: `477`,
    903: `477`,
    904: `477`,
    905: `477`,
    906: `478`,
    907: `478`,
    908: `479`,
    909: `480`,
    91: `18`,
    910: `480`,
    911: `480`,
    912: `481`,
    913: `482`,
    914: `483`,
    915: `483`,
    916: `484`,
    917: `485`,
    918: `485`,
    919: `485`,
    92: `18`,
    920: `486`,
    921: `486`,
    922: `487`,
    923: `487`,
    924: `488`,
    925: `488`,
    926: `489`,
    927: `489`,
    928: `489`,
    929: `491`,
    93: `18`,
    930: `491`,
    931: `492`,
    932: `492`,
    933: `492`,
    934: `493`,
    935: `493`,
    936: `494`,
    937: `494`,
    938: `495`,
    939: `495`,
    94: `18`,
    940: `496`,
    941: `497`,
    942: `497`,
    943: `499`,
    944: `500`,
    945: `501`,
    946: `502`,
    947: `503`,
    948: `503`,
    949: `504`,
    95: `18`,
    950: `505`,
    951: `505`,
    952: `505`,
    953: `506`,
    954: `507`,
    955: `507`,
    956: `508`,
    957: `509`,
    958: `510`,
    959: `511`,
    96: `18`,
    960: `512`,
    961: `517`,
    962: `518`,
    963: `519`,
    964: `519`,
    965: `520`,
    966: `520`,
    967: `520`,
    968: `521`,
    969: `522`,
    97: `18`,
    970: `522`,
    971: `523`,
    972: `523`,
    973: `524`,
    974: `524`,
    975: `525`,
    976: `526`,
    977: `531`,
    978: `532`,
    979: `533`,
    98: `18`,
    980: `533`,
    981: `534`,
    982: `535`,
    983: `535`,
    984: `536`,
    985: `536`,
    986: `537`,
    987: `538`,
    988: `539`,
    989: `539`,
    99: `18`,
    990: `539`,
    991: `541`,
    992: `542`,
    993: `543`,
    994: `543`,
    995: `544`,
    996: `545`,
    997: `546`,
    998: `547`,
    999: `548`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 13,
  warnings: [`Step 1 calls a remote object at /app/index.rsh:78:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:114:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:146:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:195:28:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:213:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:239:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:262:32:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:273:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:91:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Alice": Alice,
  "C_grant": C_grant,
  "Deployer": Deployer,
  "U1_approve": U1_approve,
  "U1_transfer": U1_transfer,
  "U1_transferFrom": U1_transferFrom,
  "U2_deposit": U2_deposit,
  "U2_withdraw": U2_withdraw,
  "U3_transferFrom": U3_transferFrom
  };
export const _APIs = {
  C: {
    grant: C_grant
    },
  U1: {
    approve: U1_approve,
    transfer: U1_transfer,
    transferFrom: U1_transferFrom
    },
  U2: {
    deposit: U2_deposit,
    withdraw: U2_withdraw
    },
  U3: {
    transferFrom: U3_transferFrom
    }
  };
