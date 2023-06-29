// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    minBal: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:5:23:decimal', stdlib.UInt_max, '100000');})()
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc1, ctc2]);
  return {
    claim: [ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Object({
    closed: ctc3,
    constructor: ctc4,
    providerCount: ctc5,
    providerCounter: ctc5,
    safeAmount: ctc5,
    safeSize: ctc5,
    subscriberCount: ctc5,
    subscriberCounter: ctc5,
    token: ctc0,
    tokenAmount: ctc5
    });
  const ctc7 = stdlib.T_Struct([['periodCount', ctc5], ['periodAmount', ctc5], ['periodLength', ctc5], ['subscriberCount', ctc5], ['subscriberCounter', ctc5], ['referenceID', ctc5]]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc9 = stdlib.T_Struct([['constructor', ctc4], ['token', ctc0], ['tokenAmount', ctc5], ['providerCount', ctc5], ['providerCounter', ctc5], ['subscriberCount', ctc5], ['subscriberCounter', ctc5], ['safeAmount', ctc5], ['safeSize', ctc5]]);
  const ctc10 = stdlib.T_Struct([['remaining', ctc5], ['lastTime', ctc5], ['active', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc4]);
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Data({
    None: ctc12,
    Some: ctc7
    });
  const ctc14 = stdlib.T_Data({
    None: ctc12,
    Some: ctc10
    });
  const map0_ctc = ctc13;
  
  const map1_ctc = ctc14;
  
  
  const _providerService = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2305, v2306, v2310, v2313, v2314, v2327] = svs;
      return (await ((async (_v2372, _v2373 ) => {
          const v2372 = stdlib.protect(ctc4, _v2372, null);
          const v2373 = stdlib.protect(ctc4, _v2373, null);
        
        const v2374 = [v2372, v2373];
        const v2375 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc8, v2374, ctc7), null);
        const v2376 = {
          periodAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          periodCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          periodLength: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          referenceID: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2377 = stdlib.fromSome(v2375, v2376);
        
        return v2377;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2305, v2306, v2310, v2313, v2314, v2327] = svs;
      return (await ((async () => {
        
        const v2361 = v2327.constructor;
        const v2362 = v2327.token;
        const v2363 = v2327.tokenAmount;
        const v2364 = v2327.providerCount;
        const v2365 = v2327.providerCounter;
        const v2366 = v2327.subscriberCount;
        const v2367 = v2327.subscriberCounter;
        const v2368 = v2327.safeAmount;
        const v2369 = v2327.safeSize;
        const v2370 = {
          constructor: v2361,
          providerCount: v2364,
          providerCounter: v2365,
          safeAmount: v2368,
          safeSize: v2369,
          subscriberCount: v2366,
          subscriberCounter: v2367,
          token: v2362,
          tokenAmount: v2363
          };
        
        return v2370;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _subscription = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2305, v2306, v2310, v2313, v2314, v2327] = svs;
      return (await ((async (_v2378, _v2379, _v2380 ) => {
          const v2378 = stdlib.protect(ctc4, _v2378, null);
          const v2379 = stdlib.protect(ctc4, _v2379, null);
          const v2380 = stdlib.protect(ctc4, _v2380, null);
        
        const v2381 = [v2378, v2379, v2380];
        const v2382 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2381, ctc10), null);
        const v2383 = {
          active: false,
          lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2384 = stdlib.fromSome(v2382, v2383);
        
        return v2384;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      providerService: {
        decode: _providerService,
        dom: [ctc4, ctc4],
        rng: ctc7
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc9
        },
      subscription: {
        decode: _subscription,
        dom: [ctc4, ctc4, ctc4],
        rng: ctc10
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc0, ctc0, ctc1, ctc2, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc3, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function _A_deleteProvider4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_deleteProvider4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_deleteProvider4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc12,
    A_deleteSubscription0_249: ctc13,
    C_close0_249: ctc8,
    C_grant0_249: ctc14,
    U1_announce0_249: ctc15,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc12
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2534 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:447:52:application call to [unknown function] (defined at: ./index.rsh:447:52:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteProvider0_249" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'A_deleteProvider'
    });
  const v2535 = v2534[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2536 = v2534[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2539 = v2327.subscriberCount;
  const v2540 = stdlib.eq(v2539, stdlib.checkedBigNumberify('./index.rsh:448:34:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2540, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:448:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:447:52:application call to [unknown function] (defined at: ./index.rsh:447:52:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteProvider0_249" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'not empty',
    who: 'A_deleteProvider'
    });
  const v2542 = [v2535, v2536];
  const v2543 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v2542, ctc2), null);
  const v2544 = {
    None: 0,
    Some: 1
    }[v2543[0]];
  const v2545 = stdlib.eq(v2544, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2545, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:449:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:447:52:application call to [unknown function] (defined at: ./index.rsh:447:52:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteProvider0_249" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'invalid provider',
    who: 'A_deleteProvider'
    });
  let v2549;
  switch (v2543[0]) {
    case 'None': {
      const v2550 = v2543[1];
      v2549 = false;
      
      break;
      }
    case 'Some': {
      const v2551 = v2543[1];
      const v2552 = v2551.subscriberCount;
      const v2553 = stdlib.eq(v2552, stdlib.checkedBigNumberify('./index.rsh:454:39:decimal', stdlib.UInt_max, '0'));
      v2549 = v2553;
      
      break;
      }
    }
  stdlib.assert(v2549, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:450:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:447:52:application call to [unknown function] (defined at: ./index.rsh:447:52:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteProvider0_249" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'has subscribers',
    who: 'A_deleteProvider'
    });
  let v2557;
  switch (v2543[0]) {
    case 'None': {
      const v2558 = v2543[1];
      v2557 = false;
      
      break;
      }
    case 'Some': {
      const v2559 = v2543[1];
      const v2560 = v2559.subscriberCounter;
      const v2561 = stdlib.eq(v2560, stdlib.checkedBigNumberify('./index.rsh:462:41:decimal', stdlib.UInt_max, '0'));
      const v2562 = v2561 ? false : true;
      v2557 = v2562;
      
      break;
      }
    }
  stdlib.assert(v2557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:458:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:447:52:application call to [unknown function] (defined at: ./index.rsh:447:52:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteProvider0_249" (defined at: ./index.rsh:447:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'no subscribers',
    who: 'A_deleteProvider'
    });
  const v2571 = ['A_deleteProvider0_249', v2534];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2571],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:447:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deleteProvider"
            });
          ;
          const v2633 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
          const v2634 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '1')];
          const v2635 = v2327.subscriberCount;
          const v2638 = [v2633, v2634];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v2638, ctc2), null);
          await stdlib.simMapSet(sim_r, 0, ctc12, v2638, ctc2, undefined /* Nothing */);
          const v2663 = true;
          const v2664 = await txn1.getOutput('A_deleteProvider', 'v2663', ctc4, v2663);
          
          const v2675 = [v2310, v2306, v2633];
          const v2676 = ['DeleteProvider', v2675];
          const v2677 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2305,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v2677', ctc18, v2677);
          const v2687 = v2327.closed;
          const v2688 = v2327.constructor;
          const v2689 = v2327.providerCount;
          const v2690 = v2327.providerCounter;
          const v2691 = v2327.safeAmount;
          const v2692 = v2327.safeSize;
          const v2694 = v2327.subscriberCounter;
          const v2695 = v2327.token;
          const v2696 = v2327.tokenAmount;
          const v2698 = stdlib.safeSub(v2689, stdlib.checkedBigNumberify('./index.rsh:476:60:decimal', stdlib.UInt_max, '1'));
          const v2699 = {
            closed: v2687,
            constructor: v2688,
            providerCount: v2698,
            providerCounter: v2690,
            safeAmount: v2691,
            safeSize: v2692,
            subscriberCount: v2635,
            subscriberCounter: v2694,
            token: v2695,
            tokenAmount: v2696
            };
          const v16674 = v2699;
          const v16676 = v2699.closed;
          if (v16676) {
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
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          
          break;
          }
        case 'C_close0_249': {
          const v3921 = v2618[1];
          
          break;
          }
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          
          break;
          }
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          
          break;
          }
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          
          break;
          }
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v2633 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
      const v2634 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '1')];
      const v2635 = v2327.subscriberCount;
      const v2636 = stdlib.eq(v2635, stdlib.checkedBigNumberify('./index.rsh:448:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2636, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:448:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
        msg: 'not empty',
        who: 'A_deleteProvider'
        });
      const v2638 = [v2633, v2634];
      const v2639 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v2638, ctc2), null);
      const v2640 = {
        None: 0,
        Some: 1
        }[v2639[0]];
      const v2641 = stdlib.eq(v2640, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2641, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:449:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
        msg: 'invalid provider',
        who: 'A_deleteProvider'
        });
      let v2645;
      switch (v2639[0]) {
        case 'None': {
          const v2646 = v2639[1];
          v2645 = false;
          
          break;
          }
        case 'Some': {
          const v2647 = v2639[1];
          const v2648 = v2647.subscriberCount;
          const v2649 = stdlib.eq(v2648, stdlib.checkedBigNumberify('./index.rsh:454:39:decimal', stdlib.UInt_max, '0'));
          v2645 = v2649;
          
          break;
          }
        }
      stdlib.assert(v2645, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:450:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
        msg: 'has subscribers',
        who: 'A_deleteProvider'
        });
      let v2653;
      switch (v2639[0]) {
        case 'None': {
          const v2654 = v2639[1];
          v2653 = false;
          
          break;
          }
        case 'Some': {
          const v2655 = v2639[1];
          const v2656 = v2655.subscriberCounter;
          const v2657 = stdlib.eq(v2656, stdlib.checkedBigNumberify('./index.rsh:462:41:decimal', stdlib.UInt_max, '0'));
          const v2658 = v2657 ? false : true;
          v2653 = v2658;
          
          break;
          }
        }
      stdlib.assert(v2653, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:458:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
        msg: 'no subscribers',
        who: 'A_deleteProvider'
        });
      await stdlib.mapSet(map0, ctc12, v2638, ctc2, undefined /* Nothing */);
      const v2663 = true;
      const v2664 = await txn1.getOutput('A_deleteProvider', 'v2663', ctc4, v2663);
      if (v1399) {
        stdlib.protect(ctc0, await interact.out(v2621, v2664), {
          at: './index.rsh:447:11:application',
          fs: ['at ./index.rsh:447:11:application call to [unknown function] (defined at: ./index.rsh:447:11:function exp)', 'at ./index.rsh:469:12:application call to "k" (defined at: ./index.rsh:467:13:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'out',
          who: 'A_deleteProvider'
          });
        }
      else {
        }
      
      const v2675 = [v2310, v2306, v2633];
      const v2676 = ['DeleteProvider', v2675];
      const v2677 = undefined /* Remote */;
      const v2678 = await txn1.getOutput('internal', 'v2677', ctc18, v2677);
      const v2680 = v2678[stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '0')];
      const v2681 = v2678[stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '1')];
      const v2686 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2680);
      stdlib.assert(v2686, {
        at: './index.rsh:471:26:application',
        fs: ['at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
        msg: 'remote bill check',
        who: 'A_deleteProvider'
        });
      stdlib.assert(v2681, {
        at: './index.rsh:470:18:application',
        fs: ['at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
        msg: 'Child app rejected deleteProvider',
        who: 'A_deleteProvider'
        });
      const v2687 = v2327.closed;
      const v2688 = v2327.constructor;
      const v2689 = v2327.providerCount;
      const v2690 = v2327.providerCounter;
      const v2691 = v2327.safeAmount;
      const v2692 = v2327.safeSize;
      const v2694 = v2327.subscriberCounter;
      const v2695 = v2327.token;
      const v2696 = v2327.tokenAmount;
      const v2698 = stdlib.safeSub(v2689, stdlib.checkedBigNumberify('./index.rsh:476:60:decimal', stdlib.UInt_max, '1'));
      const v2699 = {
        closed: v2687,
        constructor: v2688,
        providerCount: v2698,
        providerCounter: v2690,
        safeAmount: v2691,
        safeSize: v2692,
        subscriberCount: v2635,
        subscriberCounter: v2694,
        token: v2695,
        tokenAmount: v2696
        };
      const v16674 = v2699;
      const v16676 = v2699.closed;
      if (v16676) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      return;
      break;
      }
    case 'C_close0_249': {
      const v3921 = v2618[1];
      return;
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      return;
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      return;
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      return;
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
      return;
      break;
      }
    }
  
  
  };
export async function _A_deleteSubscription4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _A_deleteSubscription4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _A_deleteSubscription4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc13,
    A_deleteSubscription0_249: ctc12,
    C_close0_249: ctc8,
    C_grant0_249: ctc14,
    U1_announce0_249: ctc15,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc13
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2489 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:393:70:application call to [unknown function] (defined at: ./index.rsh:393:70:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteSubscription0_249" (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'A_deleteSubscription'
    });
  const v2490 = v2489[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2491 = v2489[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2492 = v2489[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2496 = [v2490, v2491];
  const v2497 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc13, v2496, ctc2), null);
  const v2498 = {
    None: 0,
    Some: 1
    }[v2497[0]];
  const v2499 = stdlib.eq(v2498, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2499, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:394:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:70:application call to [unknown function] (defined at: ./index.rsh:393:70:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteSubscription0_249" (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'invalid provider',
    who: 'A_deleteSubscription'
    });
  const v2501 = [v2490, v2491, v2492];
  const v2502 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2501, ctc5), null);
  const v2503 = {
    None: 0,
    Some: 1
    }[v2502[0]];
  const v2504 = stdlib.eq(v2503, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2504, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:398:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:70:application call to [unknown function] (defined at: ./index.rsh:393:70:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteSubscription0_249" (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'not subscribed',
    who: 'A_deleteSubscription'
    });
  const v2508 = {
    active: false,
    lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v2509 = stdlib.fromSome(v2502, v2508);
  const v2510 = v2509.remaining;
  const v2511 = stdlib.eq(v2510, stdlib.checkedBigNumberify('./index.rsh:403:72:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2511, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:70:application call to [unknown function] (defined at: ./index.rsh:393:70:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteSubscription0_249" (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'not empty',
    who: 'A_deleteSubscription'
    });
  let v2515;
  switch (v2497[0]) {
    case 'None': {
      const v2516 = v2497[1];
      v2515 = false;
      
      break;
      }
    case 'Some': {
      const v2517 = v2497[1];
      const v2518 = v2517.subscriberCount;
      const v2519 = stdlib.gt(v2518, stdlib.checkedBigNumberify('./index.rsh:410:38:decimal', stdlib.UInt_max, '0'));
      v2515 = v2519;
      
      break;
      }
    }
  stdlib.assert(v2515, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:406:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:393:70:application call to [unknown function] (defined at: ./index.rsh:393:70:function exp)', 'at ./index.rsh:159:29:application call to "runA_deleteSubscription0_249" (defined at: ./index.rsh:393:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'no subscribers',
    who: 'A_deleteSubscription'
    });
  const v2530 = ['A_deleteSubscription0_249', v2489];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2530],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:393:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "A_deleteSubscription"
            });
          ;
          const v3353 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '0')];
          const v3354 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '1')];
          const v3355 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '2')];
          const v3356 = [v3353, v3354];
          const v3357 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc13, v3356, ctc2), null);
          const v3361 = [v3353, v3354, v3355];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v3361, ctc5), null);
          await stdlib.simMapSet(sim_r, 1, ctc12, v3361, ctc5, undefined /* Nothing */);
          switch (v3357[0]) {
            case 'None': {
              const v3387 = v3357[1];
              const v3392 = [v2310, v2306, v3353, v3355];
              const v3393 = ['DeleteSubscription', v3392];
              const v3394 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2305,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v3394', ctc18, v3394);
              const v3404 = true;
              const v3405 = await txn1.getOutput('A_deleteSubscription', 'v3404', ctc4, v3404);
              
              const v3413 = v2327.closed;
              const v3414 = v2327.constructor;
              const v3415 = v2327.providerCount;
              const v3416 = v2327.providerCounter;
              const v3417 = v2327.safeAmount;
              const v3418 = v2327.safeSize;
              const v3419 = v2327.subscriberCount;
              const v3420 = v2327.subscriberCounter;
              const v3421 = v2327.token;
              const v3422 = v2327.tokenAmount;
              const v3424 = stdlib.safeSub(v3419, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
              const v3425 = {
                closed: v3413,
                constructor: v3414,
                providerCount: v3415,
                providerCounter: v3416,
                safeAmount: v3417,
                safeSize: v3418,
                subscriberCount: v3424,
                subscriberCounter: v3420,
                token: v3421,
                tokenAmount: v3422
                };
              const v16714 = v3425;
              const v16716 = v3425.closed;
              if (v16716) {
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
              const v3428 = v3357[1];
              const v3430 = v3428.periodCount;
              const v3431 = v3428.periodAmount;
              const v3432 = v3428.periodLength;
              const v3433 = v3428.referenceID;
              const v3434 = v3428.subscriberCounter;
              const v3435 = v3428.subscriberCount;
              const v3436 = stdlib.safeSub(v3435, stdlib.checkedBigNumberify('./index.rsh:428:70:decimal', stdlib.UInt_max, '1'));
              const v3437 = {
                periodAmount: v3431,
                periodCount: v3430,
                periodLength: v3432,
                referenceID: v3433,
                subscriberCount: v3436,
                subscriberCounter: v3434
                };
              await stdlib.simMapSet(sim_r, 0, ctc13, v3356, ctc2, v3437);
              const v3442 = [v2310, v2306, v3353, v3355];
              const v3443 = ['DeleteSubscription', v3442];
              const v3444 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2305,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v3444', ctc18, v3444);
              const v3454 = true;
              const v3455 = await txn1.getOutput('A_deleteSubscription', 'v3454', ctc4, v3454);
              
              const v3463 = v2327.closed;
              const v3464 = v2327.constructor;
              const v3465 = v2327.providerCount;
              const v3466 = v2327.providerCounter;
              const v3467 = v2327.safeAmount;
              const v3468 = v2327.safeSize;
              const v3469 = v2327.subscriberCount;
              const v3470 = v2327.subscriberCounter;
              const v3471 = v2327.token;
              const v3472 = v2327.tokenAmount;
              const v3474 = stdlib.safeSub(v3469, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
              const v3475 = {
                closed: v3463,
                constructor: v3464,
                providerCount: v3465,
                providerCounter: v3466,
                safeAmount: v3467,
                safeSize: v3468,
                subscriberCount: v3474,
                subscriberCounter: v3470,
                token: v3471,
                tokenAmount: v3472
                };
              const v16718 = v3475;
              const v16720 = v3475.closed;
              if (v16720) {
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
        case 'C_close0_249': {
          const v3921 = v2618[1];
          
          break;
          }
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          
          break;
          }
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          
          break;
          }
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          
          break;
          }
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v3353 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '0')];
      const v3354 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '1')];
      const v3355 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '2')];
      const v3356 = [v3353, v3354];
      const v3357 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc13, v3356, ctc2), null);
      const v3358 = {
        None: 0,
        Some: 1
        }[v3357[0]];
      const v3359 = stdlib.eq(v3358, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3359, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:394:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
        msg: 'invalid provider',
        who: 'A_deleteSubscription'
        });
      const v3361 = [v3353, v3354, v3355];
      const v3362 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3361, ctc5), null);
      const v3363 = {
        None: 0,
        Some: 1
        }[v3362[0]];
      const v3364 = stdlib.eq(v3363, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3364, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:398:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
        msg: 'not subscribed',
        who: 'A_deleteSubscription'
        });
      const v3368 = {
        active: false,
        lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3369 = stdlib.fromSome(v3362, v3368);
      const v3370 = v3369.remaining;
      const v3371 = stdlib.eq(v3370, stdlib.checkedBigNumberify('./index.rsh:403:72:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3371, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
        msg: 'not empty',
        who: 'A_deleteSubscription'
        });
      let v3375;
      switch (v3357[0]) {
        case 'None': {
          const v3376 = v3357[1];
          v3375 = false;
          
          break;
          }
        case 'Some': {
          const v3377 = v3357[1];
          const v3378 = v3377.subscriberCount;
          const v3379 = stdlib.gt(v3378, stdlib.checkedBigNumberify('./index.rsh:410:38:decimal', stdlib.UInt_max, '0'));
          v3375 = v3379;
          
          break;
          }
        }
      stdlib.assert(v3375, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:406:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
        msg: 'no subscribers',
        who: 'A_deleteSubscription'
        });
      await stdlib.mapSet(map1, ctc12, v3361, ctc5, undefined /* Nothing */);
      switch (v3357[0]) {
        case 'None': {
          const v3387 = v3357[1];
          const v3392 = [v2310, v2306, v3353, v3355];
          const v3393 = ['DeleteSubscription', v3392];
          const v3394 = undefined /* Remote */;
          const v3395 = await txn1.getOutput('internal', 'v3394', ctc18, v3394);
          const v3397 = v3395[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0')];
          const v3398 = v3395[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '1')];
          const v3403 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3397);
          stdlib.assert(v3403, {
            at: './index.rsh:432:26:application',
            fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSubscription'
            });
          stdlib.assert(v3398, {
            at: './index.rsh:431:18:application',
            fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
            msg: 'Child app rejected deleteSubscription',
            who: 'A_deleteSubscription'
            });
          const v3404 = true;
          const v3405 = await txn1.getOutput('A_deleteSubscription', 'v3404', ctc4, v3404);
          if (v1399) {
            stdlib.protect(ctc0, await interact.out(v3271, v3405), {
              at: './index.rsh:393:11:application',
              fs: ['at ./index.rsh:393:11:application call to [unknown function] (defined at: ./index.rsh:393:11:function exp)', 'at ./index.rsh:442:12:application call to "k" (defined at: ./index.rsh:415:13:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSubscription'
              });
            }
          else {
            }
          
          const v3413 = v2327.closed;
          const v3414 = v2327.constructor;
          const v3415 = v2327.providerCount;
          const v3416 = v2327.providerCounter;
          const v3417 = v2327.safeAmount;
          const v3418 = v2327.safeSize;
          const v3419 = v2327.subscriberCount;
          const v3420 = v2327.subscriberCounter;
          const v3421 = v2327.token;
          const v3422 = v2327.tokenAmount;
          const v3424 = stdlib.safeSub(v3419, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
          const v3425 = {
            closed: v3413,
            constructor: v3414,
            providerCount: v3415,
            providerCounter: v3416,
            safeAmount: v3417,
            safeSize: v3418,
            subscriberCount: v3424,
            subscriberCounter: v3420,
            token: v3421,
            tokenAmount: v3422
            };
          const v16714 = v3425;
          const v16716 = v3425.closed;
          if (v16716) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v3428 = v3357[1];
          const v3430 = v3428.periodCount;
          const v3431 = v3428.periodAmount;
          const v3432 = v3428.periodLength;
          const v3433 = v3428.referenceID;
          const v3434 = v3428.subscriberCounter;
          const v3435 = v3428.subscriberCount;
          const v3436 = stdlib.safeSub(v3435, stdlib.checkedBigNumberify('./index.rsh:428:70:decimal', stdlib.UInt_max, '1'));
          const v3437 = {
            periodAmount: v3431,
            periodCount: v3430,
            periodLength: v3432,
            referenceID: v3433,
            subscriberCount: v3436,
            subscriberCounter: v3434
            };
          await stdlib.mapSet(map0, ctc13, v3356, ctc2, v3437);
          const v3442 = [v2310, v2306, v3353, v3355];
          const v3443 = ['DeleteSubscription', v3442];
          const v3444 = undefined /* Remote */;
          const v3445 = await txn1.getOutput('internal', 'v3444', ctc18, v3444);
          const v3447 = v3445[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0')];
          const v3448 = v3445[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '1')];
          const v3453 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3447);
          stdlib.assert(v3453, {
            at: './index.rsh:432:26:application',
            fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
            msg: 'remote bill check',
            who: 'A_deleteSubscription'
            });
          stdlib.assert(v3448, {
            at: './index.rsh:431:18:application',
            fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
            msg: 'Child app rejected deleteSubscription',
            who: 'A_deleteSubscription'
            });
          const v3454 = true;
          const v3455 = await txn1.getOutput('A_deleteSubscription', 'v3454', ctc4, v3454);
          if (v1399) {
            stdlib.protect(ctc0, await interact.out(v3271, v3455), {
              at: './index.rsh:393:11:application',
              fs: ['at ./index.rsh:393:11:application call to [unknown function] (defined at: ./index.rsh:393:11:function exp)', 'at ./index.rsh:442:12:application call to "k" (defined at: ./index.rsh:415:13:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'out',
              who: 'A_deleteSubscription'
              });
            }
          else {
            }
          
          const v3463 = v2327.closed;
          const v3464 = v2327.constructor;
          const v3465 = v2327.providerCount;
          const v3466 = v2327.providerCounter;
          const v3467 = v2327.safeAmount;
          const v3468 = v2327.safeSize;
          const v3469 = v2327.subscriberCount;
          const v3470 = v2327.subscriberCounter;
          const v3471 = v2327.token;
          const v3472 = v2327.tokenAmount;
          const v3474 = stdlib.safeSub(v3469, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
          const v3475 = {
            closed: v3463,
            constructor: v3464,
            providerCount: v3465,
            providerCounter: v3466,
            safeAmount: v3467,
            safeSize: v3468,
            subscriberCount: v3474,
            subscriberCounter: v3470,
            token: v3471,
            tokenAmount: v3472
            };
          const v16718 = v3475;
          const v16720 = v3475.closed;
          if (v16720) {
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
    case 'C_close0_249': {
      const v3921 = v2618[1];
      return;
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      return;
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      return;
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      return;
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
      return;
      break;
      }
    }
  
  
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Object({
    ctc: ctc7,
    token: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc11,
    A_deleteSubscription0_249: ctc12,
    C_close0_249: ctc13,
    C_grant0_249: ctc14,
    U1_announce0_249: ctc15,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc11
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc6;
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
  const {data: [], secs: v2296, time: v2295, didSend: v22, from: v2294 } = txn1;
  ;
  const v2299 = stdlib.protect(ctc8, await interact.getParams(), {
    at: './index.rsh:129:57:application',
    fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)'],
    msg: 'getParams',
    who: 'Alice'
    });
  const v2300 = v2299.ctc;
  const v2301 = v2299.token;
  
  const txn2 = await (ctc.sendrecv({
    args: [v2300, v2301],
    evt_cnt: 2,
    funcNum: 1,
    lct: v2295,
    onlyIf: true,
    out_tys: [ctc7, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:131:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2305, v2306], secs: v2308, time: v2307, didSend: v36, from: v2304 } = txn2;
      
      ;
      
      const v2310 = await ctc.getContractInfo();
      const v2313 = [];
      const v2314 = [v2310, v2306];
      const v2315 = ['Ready', v2314];
      const v2316 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2305,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:139:18:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:139:18:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
      await txn2.getOutput('internal', 'v2316', ctc9, v2316);
      const v2326 = {
        closed: false,
        constructor: v2304,
        providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        token: v2306,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2327 = v2326;
      const v2328 = v2307;
      
      if (await (async () => {
        const v2359 = v2327.closed;
        const v2360 = v2359 ? false : true;
        
        return v2360;})()) {
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
    tys: [ctc7, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2305, v2306], secs: v2308, time: v2307, didSend: v36, from: v2304 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:132:19:application',
    fs: ['at ./index.rsh:132:19:application call to [unknown function] (defined at: ./index.rsh:132:19:function exp)', 'at ./index.rsh:132:19:application call to "liftedInteract" (defined at: ./index.rsh:132:19:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v2310 = await ctc.getContractInfo();
  const v2313 = [];
  const v2314 = [v2310, v2306];
  const v2315 = ['Ready', v2314];
  const v2316 = undefined /* Remote */;
  const v2317 = await txn2.getOutput('internal', 'v2316', ctc9, v2316);
  const v2319 = v2317[stdlib.checkedBigNumberify('./index.rsh:139:18:application', stdlib.UInt_max, '0')];
  const v2320 = v2317[stdlib.checkedBigNumberify('./index.rsh:139:18:application', stdlib.UInt_max, '1')];
  const v2325 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2319);
  stdlib.assert(v2325, {
    at: './index.rsh:139:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Alice'
    });
  stdlib.assert(v2320, {
    at: './index.rsh:138:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Alice'
    });
  const v2326 = {
    closed: false,
    constructor: v2304,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    token: v2306,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2327 = v2326;
  let v2328 = v2307;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2359 = v2327.closed;
    const v2360 = v2359 ? false : true;
    
    return v2360;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn4;
    switch (v2618[0]) {
      case 'A_deleteProvider0_249': {
        const v2621 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v2633 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
        const v2634 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '1')];
        const v2635 = v2327.subscriberCount;
        const v2636 = stdlib.eq(v2635, stdlib.checkedBigNumberify('./index.rsh:448:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2636, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:448:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'not empty',
          who: 'Alice'
          });
        const v2638 = [v2633, v2634];
        const v2639 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v2638, ctc2), null);
        const v2640 = {
          None: 0,
          Some: 1
          }[v2639[0]];
        const v2641 = stdlib.eq(v2640, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2641, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:449:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        let v2645;
        switch (v2639[0]) {
          case 'None': {
            const v2646 = v2639[1];
            v2645 = false;
            
            break;
            }
          case 'Some': {
            const v2647 = v2639[1];
            const v2648 = v2647.subscriberCount;
            const v2649 = stdlib.eq(v2648, stdlib.checkedBigNumberify('./index.rsh:454:39:decimal', stdlib.UInt_max, '0'));
            v2645 = v2649;
            
            break;
            }
          }
        stdlib.assert(v2645, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:450:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'has subscribers',
          who: 'Alice'
          });
        let v2653;
        switch (v2639[0]) {
          case 'None': {
            const v2654 = v2639[1];
            v2653 = false;
            
            break;
            }
          case 'Some': {
            const v2655 = v2639[1];
            const v2656 = v2655.subscriberCounter;
            const v2657 = stdlib.eq(v2656, stdlib.checkedBigNumberify('./index.rsh:462:41:decimal', stdlib.UInt_max, '0'));
            const v2658 = v2657 ? false : true;
            v2653 = v2658;
            
            break;
            }
          }
        stdlib.assert(v2653, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:458:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'no subscribers',
          who: 'Alice'
          });
        await stdlib.mapSet(map0, ctc11, v2638, ctc2, undefined /* Nothing */);
        const v2663 = true;
        await txn4.getOutput('A_deleteProvider', 'v2663', ctc4, v2663);
        const v2675 = [v2310, v2306, v2633];
        const v2676 = ['DeleteProvider', v2675];
        const v2677 = undefined /* Remote */;
        const v2678 = await txn4.getOutput('internal', 'v2677', ctc9, v2677);
        const v2680 = v2678[stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '0')];
        const v2681 = v2678[stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '1')];
        const v2686 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2680);
        stdlib.assert(v2686, {
          at: './index.rsh:471:26:application',
          fs: ['at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v2681, {
          at: './index.rsh:470:18:application',
          fs: ['at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'Child app rejected deleteProvider',
          who: 'Alice'
          });
        const v2687 = v2327.closed;
        const v2688 = v2327.constructor;
        const v2689 = v2327.providerCount;
        const v2690 = v2327.providerCounter;
        const v2691 = v2327.safeAmount;
        const v2692 = v2327.safeSize;
        const v2694 = v2327.subscriberCounter;
        const v2695 = v2327.token;
        const v2696 = v2327.tokenAmount;
        const v2698 = stdlib.safeSub(v2689, stdlib.checkedBigNumberify('./index.rsh:476:60:decimal', stdlib.UInt_max, '1'));
        const v2699 = {
          closed: v2687,
          constructor: v2688,
          providerCount: v2698,
          providerCounter: v2690,
          safeAmount: v2691,
          safeSize: v2692,
          subscriberCount: v2635,
          subscriberCounter: v2694,
          token: v2695,
          tokenAmount: v2696
          };
        const cv2327 = v2699;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSubscription0_249': {
        const v3271 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v3353 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '0')];
        const v3354 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '1')];
        const v3355 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '2')];
        const v3356 = [v3353, v3354];
        const v3357 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v3356, ctc2), null);
        const v3358 = {
          None: 0,
          Some: 1
          }[v3357[0]];
        const v3359 = stdlib.eq(v3358, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3359, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:394:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        const v3361 = [v3353, v3354, v3355];
        const v3362 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v3361, ctc5), null);
        const v3363 = {
          None: 0,
          Some: 1
          }[v3362[0]];
        const v3364 = stdlib.eq(v3363, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3364, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:398:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'not subscribed',
          who: 'Alice'
          });
        const v3368 = {
          active: false,
          lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3369 = stdlib.fromSome(v3362, v3368);
        const v3370 = v3369.remaining;
        const v3371 = stdlib.eq(v3370, stdlib.checkedBigNumberify('./index.rsh:403:72:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3371, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'not empty',
          who: 'Alice'
          });
        let v3375;
        switch (v3357[0]) {
          case 'None': {
            const v3376 = v3357[1];
            v3375 = false;
            
            break;
            }
          case 'Some': {
            const v3377 = v3357[1];
            const v3378 = v3377.subscriberCount;
            const v3379 = stdlib.gt(v3378, stdlib.checkedBigNumberify('./index.rsh:410:38:decimal', stdlib.UInt_max, '0'));
            v3375 = v3379;
            
            break;
            }
          }
        stdlib.assert(v3375, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:406:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'no subscribers',
          who: 'Alice'
          });
        await stdlib.mapSet(map1, ctc12, v3361, ctc5, undefined /* Nothing */);
        switch (v3357[0]) {
          case 'None': {
            const v3387 = v3357[1];
            const v3392 = [v2310, v2306, v3353, v3355];
            const v3393 = ['DeleteSubscription', v3392];
            const v3394 = undefined /* Remote */;
            const v3395 = await txn4.getOutput('internal', 'v3394', ctc9, v3394);
            const v3397 = v3395[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0')];
            const v3398 = v3395[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '1')];
            const v3403 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3397);
            stdlib.assert(v3403, {
              at: './index.rsh:432:26:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v3398, {
              at: './index.rsh:431:18:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Alice'
              });
            const v3404 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3404', ctc4, v3404);
            const v3413 = v2327.closed;
            const v3414 = v2327.constructor;
            const v3415 = v2327.providerCount;
            const v3416 = v2327.providerCounter;
            const v3417 = v2327.safeAmount;
            const v3418 = v2327.safeSize;
            const v3419 = v2327.subscriberCount;
            const v3420 = v2327.subscriberCounter;
            const v3421 = v2327.token;
            const v3422 = v2327.tokenAmount;
            const v3424 = stdlib.safeSub(v3419, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
            const v3425 = {
              closed: v3413,
              constructor: v3414,
              providerCount: v3415,
              providerCounter: v3416,
              safeAmount: v3417,
              safeSize: v3418,
              subscriberCount: v3424,
              subscriberCounter: v3420,
              token: v3421,
              tokenAmount: v3422
              };
            const cv2327 = v3425;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3428 = v3357[1];
            const v3430 = v3428.periodCount;
            const v3431 = v3428.periodAmount;
            const v3432 = v3428.periodLength;
            const v3433 = v3428.referenceID;
            const v3434 = v3428.subscriberCounter;
            const v3435 = v3428.subscriberCount;
            const v3436 = stdlib.safeSub(v3435, stdlib.checkedBigNumberify('./index.rsh:428:70:decimal', stdlib.UInt_max, '1'));
            const v3437 = {
              periodAmount: v3431,
              periodCount: v3430,
              periodLength: v3432,
              referenceID: v3433,
              subscriberCount: v3436,
              subscriberCounter: v3434
              };
            await stdlib.mapSet(map0, ctc11, v3356, ctc2, v3437);
            const v3442 = [v2310, v2306, v3353, v3355];
            const v3443 = ['DeleteSubscription', v3442];
            const v3444 = undefined /* Remote */;
            const v3445 = await txn4.getOutput('internal', 'v3444', ctc9, v3444);
            const v3447 = v3445[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0')];
            const v3448 = v3445[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '1')];
            const v3453 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3447);
            stdlib.assert(v3453, {
              at: './index.rsh:432:26:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v3448, {
              at: './index.rsh:431:18:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Alice'
              });
            const v3454 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3454', ctc4, v3454);
            const v3463 = v2327.closed;
            const v3464 = v2327.constructor;
            const v3465 = v2327.providerCount;
            const v3466 = v2327.providerCounter;
            const v3467 = v2327.safeAmount;
            const v3468 = v2327.safeSize;
            const v3469 = v2327.subscriberCount;
            const v3470 = v2327.subscriberCounter;
            const v3471 = v2327.token;
            const v3472 = v2327.tokenAmount;
            const v3474 = stdlib.safeSub(v3469, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
            const v3475 = {
              closed: v3463,
              constructor: v3464,
              providerCount: v3465,
              providerCounter: v3466,
              safeAmount: v3467,
              safeSize: v3468,
              subscriberCount: v3474,
              subscriberCounter: v3470,
              token: v3471,
              tokenAmount: v3472
              };
            const cv2327 = v3475;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_249': {
        const v3921 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v4129 = v2327.providerCounter;
        const v4130 = stdlib.eq(v4129, stdlib.checkedBigNumberify('./index.rsh:482:34:decimal', stdlib.UInt_max, '0'));
        const v4131 = v4130 ? false : true;
        stdlib.assert(v4131, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:482:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'no providers',
          who: 'Alice'
          });
        const v4133 = v2327.subscriberCounter;
        const v4134 = stdlib.eq(v4133, stdlib.checkedBigNumberify('./index.rsh:483:36:decimal', stdlib.UInt_max, '0'));
        const v4135 = v4134 ? false : true;
        stdlib.assert(v4135, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'no subscribers',
          who: 'Alice'
          });
        const v4137 = v2327.providerCount;
        const v4138 = stdlib.eq(v4137, stdlib.checkedBigNumberify('./index.rsh:484:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4138, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'providers not empty',
          who: 'Alice'
          });
        const v4140 = v2327.subscriberCount;
        const v4141 = stdlib.eq(v4140, stdlib.checkedBigNumberify('./index.rsh:485:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4141, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'subscribers not empty',
          who: 'Alice'
          });
        const v4148 = ['Close', v2314];
        const v4149 = undefined /* Remote */;
        const v4150 = await txn4.getOutput('internal', 'v4149', ctc9, v4149);
        const v4152 = v4150[stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '0')];
        const v4153 = v4150[stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '1')];
        const v4158 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4152);
        stdlib.assert(v4158, {
          at: './index.rsh:489:26:application',
          fs: ['at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4153, {
          at: './index.rsh:488:18:application',
          fs: ['at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Alice'
          });
        const v4159 = true;
        await txn4.getOutput('C_close', 'v4159', ctc4, v4159);
        const v4166 = v2327.constructor;
        const v4169 = v2327.safeAmount;
        const v4170 = v2327.safeSize;
        const v4173 = v2327.token;
        const v4174 = v2327.tokenAmount;
        const v4175 = {
          closed: true,
          constructor: v4166,
          providerCount: v4137,
          providerCounter: v4129,
          safeAmount: v4169,
          safeSize: v4170,
          subscriberCount: v4140,
          subscriberCounter: v4133,
          token: v4173,
          tokenAmount: v4174
          };
        const cv2327 = v4175;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_249': {
        const v4571 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v4829 = v4571[stdlib.checkedBigNumberify('./index.rsh:497:10:spread', stdlib.UInt_max, '0')];
        const v4830 = v2327.constructor;
        const v4831 = stdlib.addressEq(v2617, v4830);
        stdlib.assert(v4831, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:498:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Alice'
          });
        const v4838 = [v2310, v2306, v4829];
        const v4839 = ['Grant', v4838];
        const v4840 = undefined /* Remote */;
        const v4841 = await txn4.getOutput('internal', 'v4840', ctc9, v4840);
        const v4843 = v4841[stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '0')];
        const v4844 = v4841[stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '1')];
        const v4849 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4843);
        stdlib.assert(v4849, {
          at: './index.rsh:502:26:application',
          fs: ['at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v4844, {
          at: './index.rsh:501:18:application',
          fs: ['at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Alice'
          });
        const v4850 = true;
        await txn4.getOutput('C_grant', 'v4850', ctc4, v4850);
        const v4857 = v2327.closed;
        const v4859 = v2327.providerCount;
        const v4860 = v2327.providerCounter;
        const v4861 = v2327.safeAmount;
        const v4862 = v2327.safeSize;
        const v4863 = v2327.subscriberCount;
        const v4864 = v2327.subscriberCounter;
        const v4865 = v2327.token;
        const v4866 = v2327.tokenAmount;
        const v4867 = {
          closed: v4857,
          constructor: v4829,
          providerCount: v4859,
          providerCounter: v4860,
          safeAmount: v4861,
          safeSize: v4862,
          subscriberCount: v4863,
          subscriberCounter: v4864,
          token: v4865,
          tokenAmount: v4866
          };
        const cv2327 = v4867;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_249': {
        const v5221 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v5521 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '0')];
        const v5522 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '1')];
        const v5523 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '2')];
        const v5524 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '3')];
        const v5525 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '4')];
        const v5526 = [v2617, v5521];
        const v5527 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v5526, ctc2), null);
        const v5528 = {
          None: 0,
          Some: 1
          }[v5527[0]];
        const v5529 = stdlib.eq(v5528, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5529, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'provider already exists',
          who: 'Alice'
          });
        const v5537 = {
          periodAmount: v5523,
          periodCount: v5522,
          periodLength: v5524,
          referenceID: v5525,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, ctc11, v5526, ctc2, v5537);
        const v5542 = [v2310, v2306, v2617, v5521, v5522, v5523, v5524, v5525];
        const v5543 = ['Announce', v5542];
        const v5544 = undefined /* Remote */;
        const v5545 = await txn4.getOutput('internal', 'v5544', ctc9, v5544);
        const v5547 = v5545[stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '0')];
        const v5548 = v5545[stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '1')];
        const v5553 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5547);
        stdlib.assert(v5553, {
          at: './index.rsh:222:28:application',
          fs: ['at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v5548, {
          at: './index.rsh:221:20:application',
          fs: ['at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'Child app rejected announcement',
          who: 'Alice'
          });
        const v5554 = true;
        await txn4.getOutput('U1_announce', 'v5554', ctc4, v5554);
        const v5565 = v2327.closed;
        const v5566 = v2327.constructor;
        const v5567 = v2327.providerCount;
        const v5568 = v2327.providerCounter;
        const v5569 = v2327.safeAmount;
        const v5570 = v2327.safeSize;
        const v5571 = v2327.subscriberCount;
        const v5572 = v2327.subscriberCounter;
        const v5573 = v2327.token;
        const v5574 = v2327.tokenAmount;
        const v5576 = stdlib.safeAdd(v5567, stdlib.checkedBigNumberify('./index.rsh:240:50:decimal', stdlib.UInt_max, '1'));
        const v5578 = stdlib.safeAdd(v5568, stdlib.checkedBigNumberify('./index.rsh:241:54:decimal', stdlib.UInt_max, '1'));
        const v5579 = {
          closed: v5565,
          constructor: v5566,
          providerCount: v5576,
          providerCounter: v5578,
          safeAmount: v5569,
          safeSize: v5570,
          subscriberCount: v5571,
          subscriberCounter: v5572,
          token: v5573,
          tokenAmount: v5574
          };
        const cv2327 = v5579;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_claim0_249': {
        const v5871 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v6233 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
        const v6234 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
        const v6235 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '2')];
        const v6236 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '3')];
        const v6237 = [v6233, v6234, v6235];
        const v6238 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v6237, ctc5), null);
        const v6239 = {
          None: 0,
          Some: 1
          }[v6238[0]];
        const v6240 = stdlib.eq(v6239, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6240, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'not subscribed',
          who: 'Alice'
          });
        const v6242 = [v6233, v6234];
        const v6243 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v6242, ctc2), null);
        let v6244;
        switch (v6243[0]) {
          case 'None': {
            const v6245 = v6243[1];
            v6244 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6246 = v6243[1];
            const v6247 = v6246.periodAmount;
            const v6248 = stdlib.safeMul(v6247, v6236);
            v6244 = v6248;
            
            break;
            }
          }
        const v6251 = {
          active: false,
          lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6252 = stdlib.fromSome(v6238, v6251);
        const v6253 = v6252.remaining;
        const v6254 = stdlib.le(v6244, v6253);
        stdlib.assert(v6254, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Alice'
          });
        const v6265 = v6252.lastTime;
        let v6269;
        switch (v6243[0]) {
          case 'None': {
            const v6270 = v6243[1];
            v6269 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6271 = v6243[1];
            const v6272 = v6271.periodLength;
            const v6273 = stdlib.safeMul(v6236, v6272);
            v6269 = v6273;
            
            break;
            }
          }
        const v6274 = stdlib.safeAdd(v6265, v6269);
        const v6275 = stdlib.ge(v2619, v6274);
        stdlib.assert(v6275, {
          at: './index.rsh:346:18:application',
          fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Alice'
          });
        const v6276 = await ctc.getContractAddress();
        const v6277 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6235];
        const v6278 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6233];
        const v6279 = [v6235, v6276];
        const v6280 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6279];
        let v6283;
        switch (v6243[0]) {
          case 'None': {
            const v6284 = v6243[1];
            v6283 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6285 = v6243[1];
            const v6286 = v6285.periodAmount;
            const v6287 = stdlib.safeMul(v6286, v6236);
            v6283 = v6287;
            
            break;
            }
          }
        const v6291 = undefined /* Remote */;
        const v6292 = await txn4.getOutput('internal', 'v6291', ctc9, v6291);
        const v6294 = v6292[stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '0')];
        const v6295 = v6292[stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '1')];
        const v6300 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6294);
        stdlib.assert(v6300, {
          at: './index.rsh:364:15:application',
          fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'remote bill check',
          who: 'Alice'
          });
        stdlib.assert(v6295, {
          at: './index.rsh:355:18:application',
          fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'transfer failed',
          who: 'Alice'
          });
        const v6302 = [v2310, v2306, v6233, v6234, v6235, v6236];
        null;
        let v6306;
        switch (v6243[0]) {
          case 'None': {
            const v6307 = v6243[1];
            v6306 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6308 = v6243[1];
            const v6309 = v6308.periodAmount;
            const v6310 = stdlib.safeMul(v6309, v6236);
            v6306 = v6310;
            
            break;
            }
          }
        const v6311 = stdlib.safeSub(v6253, v6306);
        let v6314;
        switch (v6243[0]) {
          case 'None': {
            const v6315 = v6243[1];
            v6314 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6316 = v6243[1];
            const v6317 = v6316.periodLength;
            const v6318 = stdlib.safeMul(v6236, v6317);
            v6314 = v6318;
            
            break;
            }
          }
        const v6319 = stdlib.safeAdd(v6265, v6314);
        const v6320 = {
          active: true,
          lastTime: v6319,
          remaining: v6311
          };
        await stdlib.mapSet(map1, ctc12, v6237, ctc5, v6320);
        const v6321 = true;
        await txn4.getOutput('U2_claim', 'v6321', ctc4, v6321);
        const v6331 = v2327.closed;
        const v6332 = v2327.constructor;
        const v6333 = v2327.providerCount;
        const v6334 = v2327.providerCounter;
        const v6335 = v2327.safeAmount;
        const v6336 = v2327.safeSize;
        const v6337 = v2327.subscriberCount;
        const v6338 = v2327.subscriberCounter;
        const v6339 = v2327.token;
        const v6340 = v2327.tokenAmount;
        let v6344;
        switch (v6243[0]) {
          case 'None': {
            const v6345 = v6243[1];
            v6344 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6346 = v6243[1];
            const v6347 = v6346.periodAmount;
            const v6348 = stdlib.safeMul(v6347, v6236);
            v6344 = v6348;
            
            break;
            }
          }
        const v6349 = stdlib.safeSub(v6335, v6344);
        const v6350 = {
          closed: v6331,
          constructor: v6332,
          providerCount: v6333,
          providerCounter: v6334,
          safeAmount: v6349,
          safeSize: v6336,
          subscriberCount: v6337,
          subscriberCounter: v6338,
          token: v6339,
          tokenAmount: v6340
          };
        const cv2327 = v6350;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_subscribe0_249': {
        const v6521 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v7004 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
        const v7005 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
        const v7006 = [v7004, v7005, v2617];
        const v7007 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v7006, ctc5), null);
        const v7008 = {
          None: 0,
          Some: 1
          }[v7007[0]];
        const v7009 = stdlib.eq(v7008, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7009, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
          msg: 'already subscribed',
          who: 'Alice'
          });
        const v7011 = [v7004, v7005];
        const v7012 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc11, v7011, ctc2), null);
        const v7013 = {
          None: 0,
          Some: 1
          }[v7012[0]];
        const v7014 = stdlib.eq(v7013, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v7014, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
          msg: 'invalid provider',
          who: 'Alice'
          });
        let v7019;
        switch (v7012[0]) {
          case 'None': {
            const v7022 = v7012[1];
            v7019 = stdlib.checkedBigNumberify('./index.rsh:254:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v7023 = v7012[1];
            const v7024 = v7023.periodCount;
            const v7025 = v7023.periodAmount;
            const v7026 = stdlib.safeMul(v7025, v7024);
            v7019 = v7026;
            
            break;
            }
          }
        const v7028 = {
          active: true,
          lastTime: v2619,
          remaining: v7019
          };
        await stdlib.mapSet(map1, ctc12, v7006, ctc5, v7028);
        switch (v7012[0]) {
          case 'None': {
            const v7031 = v7012[1];
            const v7036 = [v2310, v2306, v7004, v7005, v2617];
            const v7037 = ['Subscribe', v7036];
            const v7038 = undefined /* Remote */;
            const v7039 = await txn4.getOutput('internal', 'v7038', ctc9, v7038);
            const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0')];
            const v7042 = v7039[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '1')];
            const v7047 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7041);
            stdlib.assert(v7047, {
              at: './index.rsh:289:26:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v7042, {
              at: './index.rsh:288:18:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Alice'
              });
            const v7048 = true;
            await txn4.getOutput('U2_subscribe', 'v7048', ctc4, v7048);
            const v7056 = v2327.closed;
            const v7057 = v2327.constructor;
            const v7058 = v2327.providerCount;
            const v7059 = v2327.providerCounter;
            const v7060 = v2327.safeAmount;
            const v7061 = v2327.safeSize;
            const v7062 = v2327.subscriberCount;
            const v7063 = v2327.subscriberCounter;
            const v7064 = v2327.token;
            const v7065 = v2327.tokenAmount;
            const v7067 = stdlib.safeAdd(v7062, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v7069 = stdlib.safeAdd(v7063, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
            const v7091 = stdlib.gt(v7061, v7060);
            const v7092 = v7091 ? v7061 : v7060;
            const v7093 = {
              closed: v7056,
              constructor: v7057,
              providerCount: v7058,
              providerCounter: v7059,
              safeAmount: v7060,
              safeSize: v7092,
              subscriberCount: v7067,
              subscriberCounter: v7069,
              token: v7064,
              tokenAmount: v7065
              };
            const cv2327 = v7093;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v7096 = v7012[1];
            const v7098 = v7096.periodCount;
            const v7099 = v7096.periodAmount;
            const v7100 = v7096.periodLength;
            const v7101 = v7096.referenceID;
            const v7102 = v7096.subscriberCounter;
            const v7103 = stdlib.safeAdd(v7102, stdlib.checkedBigNumberify('./index.rsh:284:74:decimal', stdlib.UInt_max, '1'));
            const v7104 = v7096.subscriberCount;
            const v7105 = stdlib.safeAdd(v7104, stdlib.checkedBigNumberify('./index.rsh:285:70:decimal', stdlib.UInt_max, '1'));
            const v7106 = {
              periodAmount: v7099,
              periodCount: v7098,
              periodLength: v7100,
              referenceID: v7101,
              subscriberCount: v7105,
              subscriberCounter: v7103
              };
            await stdlib.mapSet(map0, ctc11, v7011, ctc2, v7106);
            const v7111 = [v2310, v2306, v7004, v7005, v2617];
            const v7112 = ['Subscribe', v7111];
            const v7113 = undefined /* Remote */;
            const v7114 = await txn4.getOutput('internal', 'v7113', ctc9, v7113);
            const v7116 = v7114[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0')];
            const v7117 = v7114[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '1')];
            const v7122 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7116);
            stdlib.assert(v7122, {
              at: './index.rsh:289:26:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'remote bill check',
              who: 'Alice'
              });
            stdlib.assert(v7117, {
              at: './index.rsh:288:18:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Alice'
              });
            const v7123 = true;
            await txn4.getOutput('U2_subscribe', 'v7123', ctc4, v7123);
            const v7131 = v2327.closed;
            const v7132 = v2327.constructor;
            const v7133 = v2327.providerCount;
            const v7134 = v2327.providerCounter;
            const v7135 = v2327.safeAmount;
            const v7136 = v2327.safeSize;
            const v7137 = v2327.subscriberCount;
            const v7138 = v2327.subscriberCounter;
            const v7139 = v2327.token;
            const v7140 = v2327.tokenAmount;
            const v7142 = stdlib.safeAdd(v7137, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v7144 = stdlib.safeAdd(v7138, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
            const v7151 = v7106.periodCount;
            const v7152 = v7106.periodAmount;
            const v7153 = stdlib.safeMul(v7152, v7151);
            const v7154 = stdlib.safeAdd(v7135, v7153);
            const v7166 = stdlib.gt(v7136, v7154);
            const v7167 = v7166 ? v7136 : v7154;
            const v7168 = {
              closed: v7131,
              constructor: v7132,
              providerCount: v7133,
              providerCounter: v7134,
              safeAmount: v7154,
              safeSize: v7167,
              subscriberCount: v7142,
              subscriberCounter: v7144,
              token: v7139,
              tokenAmount: v7140
              };
            const cv2327 = v7168;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _C_close4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _C_close4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _C_close4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc12,
    A_deleteSubscription0_249: ctc13,
    C_close0_249: ctc8,
    C_grant0_249: ctc14,
    U1_announce0_249: ctc15,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc12
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2575 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:481:25:application call to [unknown function] (defined at: ./index.rsh:481:25:function exp)', 'at ./index.rsh:159:29:application call to "runC_close0_249" (defined at: ./index.rsh:481:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'C_close'
    });
  const v2576 = v2327.providerCounter;
  const v2577 = stdlib.eq(v2576, stdlib.checkedBigNumberify('./index.rsh:482:34:decimal', stdlib.UInt_max, '0'));
  const v2578 = v2577 ? false : true;
  stdlib.assert(v2578, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:482:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:25:application call to [unknown function] (defined at: ./index.rsh:481:25:function exp)', 'at ./index.rsh:159:29:application call to "runC_close0_249" (defined at: ./index.rsh:481:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'no providers',
    who: 'C_close'
    });
  const v2580 = v2327.subscriberCounter;
  const v2581 = stdlib.eq(v2580, stdlib.checkedBigNumberify('./index.rsh:483:36:decimal', stdlib.UInt_max, '0'));
  const v2582 = v2581 ? false : true;
  stdlib.assert(v2582, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:483:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:25:application call to [unknown function] (defined at: ./index.rsh:481:25:function exp)', 'at ./index.rsh:159:29:application call to "runC_close0_249" (defined at: ./index.rsh:481:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'no subscribers',
    who: 'C_close'
    });
  const v2584 = v2327.providerCount;
  const v2585 = stdlib.eq(v2584, stdlib.checkedBigNumberify('./index.rsh:484:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2585, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:25:application call to [unknown function] (defined at: ./index.rsh:481:25:function exp)', 'at ./index.rsh:159:29:application call to "runC_close0_249" (defined at: ./index.rsh:481:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'providers not empty',
    who: 'C_close'
    });
  const v2587 = v2327.subscriberCount;
  const v2588 = stdlib.eq(v2587, stdlib.checkedBigNumberify('./index.rsh:485:34:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2588, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:25:application call to [unknown function] (defined at: ./index.rsh:481:25:function exp)', 'at ./index.rsh:159:29:application call to "runC_close0_249" (defined at: ./index.rsh:481:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'subscribers not empty',
    who: 'C_close'
    });
  const v2593 = ['C_close0_249', v2575];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2593],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:481:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          
          break;
          }
        case 'C_close0_249': {
          const v3921 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_close"
            });
          ;
          const v4129 = v2327.providerCounter;
          const v4133 = v2327.subscriberCounter;
          const v4137 = v2327.providerCount;
          const v4140 = v2327.subscriberCount;
          const v4148 = ['Close', v2314];
          const v4149 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2305,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4149', ctc18, v4149);
          const v4159 = true;
          const v4160 = await txn1.getOutput('C_close', 'v4159', ctc4, v4159);
          
          const v4166 = v2327.constructor;
          const v4169 = v2327.safeAmount;
          const v4170 = v2327.safeSize;
          const v4173 = v2327.token;
          const v4174 = v2327.tokenAmount;
          const v4175 = {
            closed: true,
            constructor: v4166,
            providerCount: v4137,
            providerCounter: v4129,
            safeAmount: v4169,
            safeSize: v4170,
            subscriberCount: v4140,
            subscriberCounter: v4133,
            token: v4173,
            tokenAmount: v4174
            };
          const v16758 = v4175;
          const v16760 = v4175.closed;
          if (v16760) {
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
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          
          break;
          }
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          
          break;
          }
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          
          break;
          }
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      return;
      break;
      }
    case 'C_close0_249': {
      const v3921 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v4129 = v2327.providerCounter;
      const v4130 = stdlib.eq(v4129, stdlib.checkedBigNumberify('./index.rsh:482:34:decimal', stdlib.UInt_max, '0'));
      const v4131 = v4130 ? false : true;
      stdlib.assert(v4131, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:482:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
        msg: 'no providers',
        who: 'C_close'
        });
      const v4133 = v2327.subscriberCounter;
      const v4134 = stdlib.eq(v4133, stdlib.checkedBigNumberify('./index.rsh:483:36:decimal', stdlib.UInt_max, '0'));
      const v4135 = v4134 ? false : true;
      stdlib.assert(v4135, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:483:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
        msg: 'no subscribers',
        who: 'C_close'
        });
      const v4137 = v2327.providerCount;
      const v4138 = stdlib.eq(v4137, stdlib.checkedBigNumberify('./index.rsh:484:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4138, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
        msg: 'providers not empty',
        who: 'C_close'
        });
      const v4140 = v2327.subscriberCount;
      const v4141 = stdlib.eq(v4140, stdlib.checkedBigNumberify('./index.rsh:485:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4141, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
        msg: 'subscribers not empty',
        who: 'C_close'
        });
      const v4148 = ['Close', v2314];
      const v4149 = undefined /* Remote */;
      const v4150 = await txn1.getOutput('internal', 'v4149', ctc18, v4149);
      const v4152 = v4150[stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '0')];
      const v4153 = v4150[stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '1')];
      const v4158 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4152);
      stdlib.assert(v4158, {
        at: './index.rsh:489:26:application',
        fs: ['at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_close'
        });
      stdlib.assert(v4153, {
        at: './index.rsh:488:18:application',
        fs: ['at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
        msg: 'Child app rejected close',
        who: 'C_close'
        });
      const v4159 = true;
      const v4160 = await txn1.getOutput('C_close', 'v4159', ctc4, v4159);
      if (v1399) {
        stdlib.protect(ctc0, await interact.out(v3921, v4160), {
          at: './index.rsh:481:11:application',
          fs: ['at ./index.rsh:481:11:application call to [unknown function] (defined at: ./index.rsh:481:11:function exp)', 'at ./index.rsh:492:12:application call to "k" (defined at: ./index.rsh:487:13:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'out',
          who: 'C_close'
          });
        }
      else {
        }
      
      const v4166 = v2327.constructor;
      const v4169 = v2327.safeAmount;
      const v4170 = v2327.safeSize;
      const v4173 = v2327.token;
      const v4174 = v2327.tokenAmount;
      const v4175 = {
        closed: true,
        constructor: v4166,
        providerCount: v4137,
        providerCounter: v4129,
        safeAmount: v4169,
        safeSize: v4170,
        subscriberCount: v4140,
        subscriberCounter: v4133,
        token: v4173,
        tokenAmount: v4174
        };
      const v16758 = v4175;
      const v16760 = v4175.closed;
      if (v16760) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      return;
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      return;
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      return;
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
      return;
      break;
      }
    }
  
  
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc13,
    A_deleteSubscription0_249: ctc14,
    C_close0_249: ctc8,
    C_grant0_249: ctc12,
    U1_announce0_249: ctc15,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc13
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2595 = ctc.selfAddress();
  const v2597 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:497:29:application call to [unknown function] (defined at: ./index.rsh:497:29:function exp)', 'at ./index.rsh:159:29:application call to "runC_grant0_249" (defined at: ./index.rsh:497:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'C_grant'
    });
  const v2600 = v2327.constructor;
  const v2601 = stdlib.addressEq(v2595, v2600);
  stdlib.assert(v2601, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:498:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:497:29:application call to [unknown function] (defined at: ./index.rsh:497:29:function exp)', 'at ./index.rsh:159:29:application call to "runC_grant0_249" (defined at: ./index.rsh:497:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'C_grant'
    });
  const v2608 = ['C_grant0_249', v2597];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2608],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:497:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          
          break;
          }
        case 'C_close0_249': {
          const v3921 = v2618[1];
          
          break;
          }
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "C_grant"
            });
          ;
          const v4829 = v4571[stdlib.checkedBigNumberify('./index.rsh:497:10:spread', stdlib.UInt_max, '0')];
          const v4838 = [v2310, v2306, v4829];
          const v4839 = ['Grant', v4838];
          const v4840 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2305,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v4840', ctc18, v4840);
          const v4850 = true;
          const v4851 = await txn1.getOutput('C_grant', 'v4850', ctc4, v4850);
          
          const v4857 = v2327.closed;
          const v4859 = v2327.providerCount;
          const v4860 = v2327.providerCounter;
          const v4861 = v2327.safeAmount;
          const v4862 = v2327.safeSize;
          const v4863 = v2327.subscriberCount;
          const v4864 = v2327.subscriberCounter;
          const v4865 = v2327.token;
          const v4866 = v2327.tokenAmount;
          const v4867 = {
            closed: v4857,
            constructor: v4829,
            providerCount: v4859,
            providerCounter: v4860,
            safeAmount: v4861,
            safeSize: v4862,
            subscriberCount: v4863,
            subscriberCounter: v4864,
            token: v4865,
            tokenAmount: v4866
            };
          const v16798 = v4867;
          const v16800 = v4867.closed;
          if (v16800) {
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
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          
          break;
          }
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          
          break;
          }
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      return;
      break;
      }
    case 'C_close0_249': {
      const v3921 = v2618[1];
      return;
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v4829 = v4571[stdlib.checkedBigNumberify('./index.rsh:497:10:spread', stdlib.UInt_max, '0')];
      const v4830 = v2327.constructor;
      const v4831 = stdlib.addressEq(v2617, v4830);
      stdlib.assert(v4831, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:498:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'C_grant'
        });
      const v4838 = [v2310, v2306, v4829];
      const v4839 = ['Grant', v4838];
      const v4840 = undefined /* Remote */;
      const v4841 = await txn1.getOutput('internal', 'v4840', ctc18, v4840);
      const v4843 = v4841[stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '0')];
      const v4844 = v4841[stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '1')];
      const v4849 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4843);
      stdlib.assert(v4849, {
        at: './index.rsh:502:26:application',
        fs: ['at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
        msg: 'remote bill check',
        who: 'C_grant'
        });
      stdlib.assert(v4844, {
        at: './index.rsh:501:18:application',
        fs: ['at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
        msg: 'Child app rejected grant',
        who: 'C_grant'
        });
      const v4850 = true;
      const v4851 = await txn1.getOutput('C_grant', 'v4850', ctc4, v4850);
      if (v1399) {
        stdlib.protect(ctc0, await interact.out(v4571, v4851), {
          at: './index.rsh:497:11:application',
          fs: ['at ./index.rsh:497:11:application call to [unknown function] (defined at: ./index.rsh:497:11:function exp)', 'at ./index.rsh:505:12:application call to "k" (defined at: ./index.rsh:500:13:function exp)', 'at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'out',
          who: 'C_grant'
          });
        }
      else {
        }
      
      const v4857 = v2327.closed;
      const v4859 = v2327.providerCount;
      const v4860 = v2327.providerCounter;
      const v4861 = v2327.safeAmount;
      const v4862 = v2327.safeSize;
      const v4863 = v2327.subscriberCount;
      const v4864 = v2327.subscriberCounter;
      const v4865 = v2327.token;
      const v4866 = v2327.tokenAmount;
      const v4867 = {
        closed: v4857,
        constructor: v4829,
        providerCount: v4859,
        providerCounter: v4860,
        safeAmount: v4861,
        safeSize: v4862,
        subscriberCount: v4863,
        subscriberCounter: v4864,
        token: v4865,
        tokenAmount: v4866
        };
      const v16798 = v4867;
      const v16800 = v4867.closed;
      if (v16800) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      return;
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      return;
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
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
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc9, ctc9, ctc9]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([ctc9, ctc1, ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc9, ctc9, ctc9, ctc1]);
  const ctc16 = stdlib.T_Data({
    A_deleteProvider0_249: ctc10,
    A_deleteSubscription0_249: ctc11,
    C_close0_249: ctc12,
    C_grant0_249: ctc13,
    U1_announce0_249: ctc14,
    U2_claim0_249: ctc15,
    U2_subscribe0_249: ctc10
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:126:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:126:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2296, time: v2295, didSend: v22, from: v2294 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2296, time: v2295, didSend: v22, from: v2294 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc7, ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2305, v2306], secs: v2308, time: v2307, didSend: v36, from: v2304 } = txn2;
  ;
  const v2310 = await ctc.getContractInfo();
  const v2313 = [];
  const v2314 = [v2310, v2306];
  const v2315 = ['Ready', v2314];
  const v2316 = undefined /* Remote */;
  const v2317 = await txn2.getOutput('internal', 'v2316', ctc8, v2316);
  const v2319 = v2317[stdlib.checkedBigNumberify('./index.rsh:139:18:application', stdlib.UInt_max, '0')];
  const v2320 = v2317[stdlib.checkedBigNumberify('./index.rsh:139:18:application', stdlib.UInt_max, '1')];
  const v2325 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2319);
  stdlib.assert(v2325, {
    at: './index.rsh:139:18:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  stdlib.assert(v2320, {
    at: './index.rsh:138:10:application',
    fs: [],
    msg: 'Child app not announced as ready',
    who: 'Deployer'
    });
  const v2326 = {
    closed: false,
    constructor: v2304,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    token: v2306,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2327 = v2326;
  let v2328 = v2307;
  
  let txn3 = txn2;
  while (await (async () => {
    const v2359 = v2327.closed;
    const v2360 = v2359 ? false : true;
    
    return v2360;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn4;
    switch (v2618[0]) {
      case 'A_deleteProvider0_249': {
        const v2621 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v2633 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '0')];
        const v2634 = v2621[stdlib.checkedBigNumberify('./index.rsh:447:10:spread', stdlib.UInt_max, '1')];
        const v2635 = v2327.subscriberCount;
        const v2636 = stdlib.eq(v2635, stdlib.checkedBigNumberify('./index.rsh:448:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2636, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:448:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'not empty',
          who: 'Deployer'
          });
        const v2638 = [v2633, v2634];
        const v2639 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2638, ctc2), null);
        const v2640 = {
          None: 0,
          Some: 1
          }[v2639[0]];
        const v2641 = stdlib.eq(v2640, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2641, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:449:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v2645;
        switch (v2639[0]) {
          case 'None': {
            const v2646 = v2639[1];
            v2645 = false;
            
            break;
            }
          case 'Some': {
            const v2647 = v2639[1];
            const v2648 = v2647.subscriberCount;
            const v2649 = stdlib.eq(v2648, stdlib.checkedBigNumberify('./index.rsh:454:39:decimal', stdlib.UInt_max, '0'));
            v2645 = v2649;
            
            break;
            }
          }
        stdlib.assert(v2645, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:450:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'has subscribers',
          who: 'Deployer'
          });
        let v2653;
        switch (v2639[0]) {
          case 'None': {
            const v2654 = v2639[1];
            v2653 = false;
            
            break;
            }
          case 'Some': {
            const v2655 = v2639[1];
            const v2656 = v2655.subscriberCounter;
            const v2657 = stdlib.eq(v2656, stdlib.checkedBigNumberify('./index.rsh:462:41:decimal', stdlib.UInt_max, '0'));
            const v2658 = v2657 ? false : true;
            v2653 = v2658;
            
            break;
            }
          }
        stdlib.assert(v2653, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:458:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc10, v2638, ctc2, undefined /* Nothing */);
        const v2663 = true;
        await txn4.getOutput('A_deleteProvider', 'v2663', ctc4, v2663);
        const v2675 = [v2310, v2306, v2633];
        const v2676 = ['DeleteProvider', v2675];
        const v2677 = undefined /* Remote */;
        const v2678 = await txn4.getOutput('internal', 'v2677', ctc8, v2677);
        const v2680 = v2678[stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '0')];
        const v2681 = v2678[stdlib.checkedBigNumberify('./index.rsh:471:26:application', stdlib.UInt_max, '1')];
        const v2686 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2680);
        stdlib.assert(v2686, {
          at: './index.rsh:471:26:application',
          fs: ['at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v2681, {
          at: './index.rsh:470:18:application',
          fs: ['at ./index.rsh:467:13:application call to [unknown function] (defined at: ./index.rsh:467:13:function exp)'],
          msg: 'Child app rejected deleteProvider',
          who: 'Deployer'
          });
        const v2687 = v2327.closed;
        const v2688 = v2327.constructor;
        const v2689 = v2327.providerCount;
        const v2690 = v2327.providerCounter;
        const v2691 = v2327.safeAmount;
        const v2692 = v2327.safeSize;
        const v2694 = v2327.subscriberCounter;
        const v2695 = v2327.token;
        const v2696 = v2327.tokenAmount;
        const v2698 = stdlib.safeSub(v2689, stdlib.checkedBigNumberify('./index.rsh:476:60:decimal', stdlib.UInt_max, '1'));
        const v2699 = {
          closed: v2687,
          constructor: v2688,
          providerCount: v2698,
          providerCounter: v2690,
          safeAmount: v2691,
          safeSize: v2692,
          subscriberCount: v2635,
          subscriberCounter: v2694,
          token: v2695,
          tokenAmount: v2696
          };
        const cv2327 = v2699;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'A_deleteSubscription0_249': {
        const v3271 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v3353 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '0')];
        const v3354 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '1')];
        const v3355 = v3271[stdlib.checkedBigNumberify('./index.rsh:393:10:spread', stdlib.UInt_max, '2')];
        const v3356 = [v3353, v3354];
        const v3357 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3356, ctc2), null);
        const v3358 = {
          None: 0,
          Some: 1
          }[v3357[0]];
        const v3359 = stdlib.eq(v3358, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3359, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:394:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        const v3361 = [v3353, v3354, v3355];
        const v3362 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3361, ctc5), null);
        const v3363 = {
          None: 0,
          Some: 1
          }[v3362[0]];
        const v3364 = stdlib.eq(v3363, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3364, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:398:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v3368 = {
          active: false,
          lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v3369 = stdlib.fromSome(v3362, v3368);
        const v3370 = v3369.remaining;
        const v3371 = stdlib.eq(v3370, stdlib.checkedBigNumberify('./index.rsh:403:72:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3371, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:402:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'not empty',
          who: 'Deployer'
          });
        let v3375;
        switch (v3357[0]) {
          case 'None': {
            const v3376 = v3357[1];
            v3375 = false;
            
            break;
            }
          case 'Some': {
            const v3377 = v3357[1];
            const v3378 = v3377.subscriberCount;
            const v3379 = stdlib.gt(v3378, stdlib.checkedBigNumberify('./index.rsh:410:38:decimal', stdlib.UInt_max, '0'));
            v3375 = v3379;
            
            break;
            }
          }
        stdlib.assert(v3375, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:406:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc11, v3361, ctc5, undefined /* Nothing */);
        switch (v3357[0]) {
          case 'None': {
            const v3387 = v3357[1];
            const v3392 = [v2310, v2306, v3353, v3355];
            const v3393 = ['DeleteSubscription', v3392];
            const v3394 = undefined /* Remote */;
            const v3395 = await txn4.getOutput('internal', 'v3394', ctc8, v3394);
            const v3397 = v3395[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0')];
            const v3398 = v3395[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '1')];
            const v3403 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3397);
            stdlib.assert(v3403, {
              at: './index.rsh:432:26:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v3398, {
              at: './index.rsh:431:18:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Deployer'
              });
            const v3404 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3404', ctc4, v3404);
            const v3413 = v2327.closed;
            const v3414 = v2327.constructor;
            const v3415 = v2327.providerCount;
            const v3416 = v2327.providerCounter;
            const v3417 = v2327.safeAmount;
            const v3418 = v2327.safeSize;
            const v3419 = v2327.subscriberCount;
            const v3420 = v2327.subscriberCounter;
            const v3421 = v2327.token;
            const v3422 = v2327.tokenAmount;
            const v3424 = stdlib.safeSub(v3419, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
            const v3425 = {
              closed: v3413,
              constructor: v3414,
              providerCount: v3415,
              providerCounter: v3416,
              safeAmount: v3417,
              safeSize: v3418,
              subscriberCount: v3424,
              subscriberCounter: v3420,
              token: v3421,
              tokenAmount: v3422
              };
            const cv2327 = v3425;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v3428 = v3357[1];
            const v3430 = v3428.periodCount;
            const v3431 = v3428.periodAmount;
            const v3432 = v3428.periodLength;
            const v3433 = v3428.referenceID;
            const v3434 = v3428.subscriberCounter;
            const v3435 = v3428.subscriberCount;
            const v3436 = stdlib.safeSub(v3435, stdlib.checkedBigNumberify('./index.rsh:428:70:decimal', stdlib.UInt_max, '1'));
            const v3437 = {
              periodAmount: v3431,
              periodCount: v3430,
              periodLength: v3432,
              referenceID: v3433,
              subscriberCount: v3436,
              subscriberCounter: v3434
              };
            await stdlib.mapSet(map0, ctc10, v3356, ctc2, v3437);
            const v3442 = [v2310, v2306, v3353, v3355];
            const v3443 = ['DeleteSubscription', v3442];
            const v3444 = undefined /* Remote */;
            const v3445 = await txn4.getOutput('internal', 'v3444', ctc8, v3444);
            const v3447 = v3445[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '0')];
            const v3448 = v3445[stdlib.checkedBigNumberify('./index.rsh:432:26:application', stdlib.UInt_max, '1')];
            const v3453 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3447);
            stdlib.assert(v3453, {
              at: './index.rsh:432:26:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v3448, {
              at: './index.rsh:431:18:application',
              fs: ['at ./index.rsh:415:13:application call to [unknown function] (defined at: ./index.rsh:415:13:function exp)'],
              msg: 'Child app rejected deleteSubscription',
              who: 'Deployer'
              });
            const v3454 = true;
            await txn4.getOutput('A_deleteSubscription', 'v3454', ctc4, v3454);
            const v3463 = v2327.closed;
            const v3464 = v2327.constructor;
            const v3465 = v2327.providerCount;
            const v3466 = v2327.providerCounter;
            const v3467 = v2327.safeAmount;
            const v3468 = v2327.safeSize;
            const v3469 = v2327.subscriberCount;
            const v3470 = v2327.subscriberCounter;
            const v3471 = v2327.token;
            const v3472 = v2327.tokenAmount;
            const v3474 = stdlib.safeSub(v3469, stdlib.checkedBigNumberify('./index.rsh:443:64:decimal', stdlib.UInt_max, '1'));
            const v3475 = {
              closed: v3463,
              constructor: v3464,
              providerCount: v3465,
              providerCounter: v3466,
              safeAmount: v3467,
              safeSize: v3468,
              subscriberCount: v3474,
              subscriberCounter: v3470,
              token: v3471,
              tokenAmount: v3472
              };
            const cv2327 = v3475;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      case 'C_close0_249': {
        const v3921 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v4129 = v2327.providerCounter;
        const v4130 = stdlib.eq(v4129, stdlib.checkedBigNumberify('./index.rsh:482:34:decimal', stdlib.UInt_max, '0'));
        const v4131 = v4130 ? false : true;
        stdlib.assert(v4131, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:482:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'no providers',
          who: 'Deployer'
          });
        const v4133 = v2327.subscriberCounter;
        const v4134 = stdlib.eq(v4133, stdlib.checkedBigNumberify('./index.rsh:483:36:decimal', stdlib.UInt_max, '0'));
        const v4135 = v4134 ? false : true;
        stdlib.assert(v4135, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:483:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        const v4137 = v2327.providerCount;
        const v4138 = stdlib.eq(v4137, stdlib.checkedBigNumberify('./index.rsh:484:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4138, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:484:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'providers not empty',
          who: 'Deployer'
          });
        const v4140 = v2327.subscriberCount;
        const v4141 = stdlib.eq(v4140, stdlib.checkedBigNumberify('./index.rsh:485:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4141, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:485:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'subscribers not empty',
          who: 'Deployer'
          });
        const v4148 = ['Close', v2314];
        const v4149 = undefined /* Remote */;
        const v4150 = await txn4.getOutput('internal', 'v4149', ctc8, v4149);
        const v4152 = v4150[stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '0')];
        const v4153 = v4150[stdlib.checkedBigNumberify('./index.rsh:489:26:application', stdlib.UInt_max, '1')];
        const v4158 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4152);
        stdlib.assert(v4158, {
          at: './index.rsh:489:26:application',
          fs: ['at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4153, {
          at: './index.rsh:488:18:application',
          fs: ['at ./index.rsh:487:13:application call to [unknown function] (defined at: ./index.rsh:487:13:function exp)'],
          msg: 'Child app rejected close',
          who: 'Deployer'
          });
        const v4159 = true;
        await txn4.getOutput('C_close', 'v4159', ctc4, v4159);
        const v4166 = v2327.constructor;
        const v4169 = v2327.safeAmount;
        const v4170 = v2327.safeSize;
        const v4173 = v2327.token;
        const v4174 = v2327.tokenAmount;
        const v4175 = {
          closed: true,
          constructor: v4166,
          providerCount: v4137,
          providerCounter: v4129,
          safeAmount: v4169,
          safeSize: v4170,
          subscriberCount: v4140,
          subscriberCounter: v4133,
          token: v4173,
          tokenAmount: v4174
          };
        const cv2327 = v4175;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'C_grant0_249': {
        const v4571 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v4829 = v4571[stdlib.checkedBigNumberify('./index.rsh:497:10:spread', stdlib.UInt_max, '0')];
        const v4830 = v2327.constructor;
        const v4831 = stdlib.addressEq(v2617, v4830);
        stdlib.assert(v4831, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:498:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v4838 = [v2310, v2306, v4829];
        const v4839 = ['Grant', v4838];
        const v4840 = undefined /* Remote */;
        const v4841 = await txn4.getOutput('internal', 'v4840', ctc8, v4840);
        const v4843 = v4841[stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '0')];
        const v4844 = v4841[stdlib.checkedBigNumberify('./index.rsh:502:26:application', stdlib.UInt_max, '1')];
        const v4849 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4843);
        stdlib.assert(v4849, {
          at: './index.rsh:502:26:application',
          fs: ['at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v4844, {
          at: './index.rsh:501:18:application',
          fs: ['at ./index.rsh:500:13:application call to [unknown function] (defined at: ./index.rsh:500:13:function exp)'],
          msg: 'Child app rejected grant',
          who: 'Deployer'
          });
        const v4850 = true;
        await txn4.getOutput('C_grant', 'v4850', ctc4, v4850);
        const v4857 = v2327.closed;
        const v4859 = v2327.providerCount;
        const v4860 = v2327.providerCounter;
        const v4861 = v2327.safeAmount;
        const v4862 = v2327.safeSize;
        const v4863 = v2327.subscriberCount;
        const v4864 = v2327.subscriberCounter;
        const v4865 = v2327.token;
        const v4866 = v2327.tokenAmount;
        const v4867 = {
          closed: v4857,
          constructor: v4829,
          providerCount: v4859,
          providerCounter: v4860,
          safeAmount: v4861,
          safeSize: v4862,
          subscriberCount: v4863,
          subscriberCounter: v4864,
          token: v4865,
          tokenAmount: v4866
          };
        const cv2327 = v4867;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U1_announce0_249': {
        const v5221 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v5521 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '0')];
        const v5522 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '1')];
        const v5523 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '2')];
        const v5524 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '3')];
        const v5525 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '4')];
        const v5526 = [v2617, v5521];
        const v5527 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v5526, ctc2), null);
        const v5528 = {
          None: 0,
          Some: 1
          }[v5527[0]];
        const v5529 = stdlib.eq(v5528, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5529, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'provider already exists',
          who: 'Deployer'
          });
        const v5537 = {
          periodAmount: v5523,
          periodCount: v5522,
          periodLength: v5524,
          referenceID: v5525,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        await stdlib.mapSet(map0, ctc10, v5526, ctc2, v5537);
        const v5542 = [v2310, v2306, v2617, v5521, v5522, v5523, v5524, v5525];
        const v5543 = ['Announce', v5542];
        const v5544 = undefined /* Remote */;
        const v5545 = await txn4.getOutput('internal', 'v5544', ctc8, v5544);
        const v5547 = v5545[stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '0')];
        const v5548 = v5545[stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '1')];
        const v5553 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5547);
        stdlib.assert(v5553, {
          at: './index.rsh:222:28:application',
          fs: ['at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v5548, {
          at: './index.rsh:221:20:application',
          fs: ['at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'Child app rejected announcement',
          who: 'Deployer'
          });
        const v5554 = true;
        await txn4.getOutput('U1_announce', 'v5554', ctc4, v5554);
        const v5565 = v2327.closed;
        const v5566 = v2327.constructor;
        const v5567 = v2327.providerCount;
        const v5568 = v2327.providerCounter;
        const v5569 = v2327.safeAmount;
        const v5570 = v2327.safeSize;
        const v5571 = v2327.subscriberCount;
        const v5572 = v2327.subscriberCounter;
        const v5573 = v2327.token;
        const v5574 = v2327.tokenAmount;
        const v5576 = stdlib.safeAdd(v5567, stdlib.checkedBigNumberify('./index.rsh:240:50:decimal', stdlib.UInt_max, '1'));
        const v5578 = stdlib.safeAdd(v5568, stdlib.checkedBigNumberify('./index.rsh:241:54:decimal', stdlib.UInt_max, '1'));
        const v5579 = {
          closed: v5565,
          constructor: v5566,
          providerCount: v5576,
          providerCounter: v5578,
          safeAmount: v5569,
          safeSize: v5570,
          subscriberCount: v5571,
          subscriberCounter: v5572,
          token: v5573,
          tokenAmount: v5574
          };
        const cv2327 = v5579;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_claim0_249': {
        const v5871 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v6233 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
        const v6234 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
        const v6235 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '2')];
        const v6236 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '3')];
        const v6237 = [v6233, v6234, v6235];
        const v6238 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v6237, ctc5), null);
        const v6239 = {
          None: 0,
          Some: 1
          }[v6238[0]];
        const v6240 = stdlib.eq(v6239, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6240, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v6242 = [v6233, v6234];
        const v6243 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v6242, ctc2), null);
        let v6244;
        switch (v6243[0]) {
          case 'None': {
            const v6245 = v6243[1];
            v6244 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6246 = v6243[1];
            const v6247 = v6246.periodAmount;
            const v6248 = stdlib.safeMul(v6247, v6236);
            v6244 = v6248;
            
            break;
            }
          }
        const v6251 = {
          active: false,
          lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6252 = stdlib.fromSome(v6238, v6251);
        const v6253 = v6252.remaining;
        const v6254 = stdlib.le(v6244, v6253);
        stdlib.assert(v6254, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Deployer'
          });
        const v6265 = v6252.lastTime;
        let v6269;
        switch (v6243[0]) {
          case 'None': {
            const v6270 = v6243[1];
            v6269 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6271 = v6243[1];
            const v6272 = v6271.periodLength;
            const v6273 = stdlib.safeMul(v6236, v6272);
            v6269 = v6273;
            
            break;
            }
          }
        const v6274 = stdlib.safeAdd(v6265, v6269);
        const v6275 = stdlib.ge(v2619, v6274);
        stdlib.assert(v6275, {
          at: './index.rsh:346:18:application',
          fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Deployer'
          });
        const v6276 = await ctc.getContractAddress();
        const v6277 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6235];
        const v6278 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6233];
        const v6279 = [v6235, v6276];
        const v6280 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6279];
        let v6283;
        switch (v6243[0]) {
          case 'None': {
            const v6284 = v6243[1];
            v6283 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6285 = v6243[1];
            const v6286 = v6285.periodAmount;
            const v6287 = stdlib.safeMul(v6286, v6236);
            v6283 = v6287;
            
            break;
            }
          }
        const v6291 = undefined /* Remote */;
        const v6292 = await txn4.getOutput('internal', 'v6291', ctc8, v6291);
        const v6294 = v6292[stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '0')];
        const v6295 = v6292[stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '1')];
        const v6300 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6294);
        stdlib.assert(v6300, {
          at: './index.rsh:364:15:application',
          fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v6295, {
          at: './index.rsh:355:18:application',
          fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'transfer failed',
          who: 'Deployer'
          });
        const v6302 = [v2310, v2306, v6233, v6234, v6235, v6236];
        null;
        let v6306;
        switch (v6243[0]) {
          case 'None': {
            const v6307 = v6243[1];
            v6306 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6308 = v6243[1];
            const v6309 = v6308.periodAmount;
            const v6310 = stdlib.safeMul(v6309, v6236);
            v6306 = v6310;
            
            break;
            }
          }
        const v6311 = stdlib.safeSub(v6253, v6306);
        let v6314;
        switch (v6243[0]) {
          case 'None': {
            const v6315 = v6243[1];
            v6314 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6316 = v6243[1];
            const v6317 = v6316.periodLength;
            const v6318 = stdlib.safeMul(v6236, v6317);
            v6314 = v6318;
            
            break;
            }
          }
        const v6319 = stdlib.safeAdd(v6265, v6314);
        const v6320 = {
          active: true,
          lastTime: v6319,
          remaining: v6311
          };
        await stdlib.mapSet(map1, ctc11, v6237, ctc5, v6320);
        const v6321 = true;
        await txn4.getOutput('U2_claim', 'v6321', ctc4, v6321);
        const v6331 = v2327.closed;
        const v6332 = v2327.constructor;
        const v6333 = v2327.providerCount;
        const v6334 = v2327.providerCounter;
        const v6335 = v2327.safeAmount;
        const v6336 = v2327.safeSize;
        const v6337 = v2327.subscriberCount;
        const v6338 = v2327.subscriberCounter;
        const v6339 = v2327.token;
        const v6340 = v2327.tokenAmount;
        let v6344;
        switch (v6243[0]) {
          case 'None': {
            const v6345 = v6243[1];
            v6344 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6346 = v6243[1];
            const v6347 = v6346.periodAmount;
            const v6348 = stdlib.safeMul(v6347, v6236);
            v6344 = v6348;
            
            break;
            }
          }
        const v6349 = stdlib.safeSub(v6335, v6344);
        const v6350 = {
          closed: v6331,
          constructor: v6332,
          providerCount: v6333,
          providerCounter: v6334,
          safeAmount: v6349,
          safeSize: v6336,
          subscriberCount: v6337,
          subscriberCounter: v6338,
          token: v6339,
          tokenAmount: v6340
          };
        const cv2327 = v6350;
        const cv2328 = v2619;
        
        v2327 = cv2327;
        v2328 = cv2328;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'U2_subscribe0_249': {
        const v6521 = v2618[1];
        undefined /* setApiDetails */;
        ;
        const v7004 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
        const v7005 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
        const v7006 = [v7004, v7005, v2617];
        const v7007 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v7006, ctc5), null);
        const v7008 = {
          None: 0,
          Some: 1
          }[v7007[0]];
        const v7009 = stdlib.eq(v7008, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7009, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
          msg: 'already subscribed',
          who: 'Deployer'
          });
        const v7011 = [v7004, v7005];
        const v7012 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v7011, ctc2), null);
        const v7013 = {
          None: 0,
          Some: 1
          }[v7012[0]];
        const v7014 = stdlib.eq(v7013, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v7014, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v7019;
        switch (v7012[0]) {
          case 'None': {
            const v7022 = v7012[1];
            v7019 = stdlib.checkedBigNumberify('./index.rsh:254:20:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v7023 = v7012[1];
            const v7024 = v7023.periodCount;
            const v7025 = v7023.periodAmount;
            const v7026 = stdlib.safeMul(v7025, v7024);
            v7019 = v7026;
            
            break;
            }
          }
        const v7028 = {
          active: true,
          lastTime: v2619,
          remaining: v7019
          };
        await stdlib.mapSet(map1, ctc11, v7006, ctc5, v7028);
        switch (v7012[0]) {
          case 'None': {
            const v7031 = v7012[1];
            const v7036 = [v2310, v2306, v7004, v7005, v2617];
            const v7037 = ['Subscribe', v7036];
            const v7038 = undefined /* Remote */;
            const v7039 = await txn4.getOutput('internal', 'v7038', ctc8, v7038);
            const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0')];
            const v7042 = v7039[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '1')];
            const v7047 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7041);
            stdlib.assert(v7047, {
              at: './index.rsh:289:26:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v7042, {
              at: './index.rsh:288:18:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Deployer'
              });
            const v7048 = true;
            await txn4.getOutput('U2_subscribe', 'v7048', ctc4, v7048);
            const v7056 = v2327.closed;
            const v7057 = v2327.constructor;
            const v7058 = v2327.providerCount;
            const v7059 = v2327.providerCounter;
            const v7060 = v2327.safeAmount;
            const v7061 = v2327.safeSize;
            const v7062 = v2327.subscriberCount;
            const v7063 = v2327.subscriberCounter;
            const v7064 = v2327.token;
            const v7065 = v2327.tokenAmount;
            const v7067 = stdlib.safeAdd(v7062, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v7069 = stdlib.safeAdd(v7063, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
            const v7091 = stdlib.gt(v7061, v7060);
            const v7092 = v7091 ? v7061 : v7060;
            const v7093 = {
              closed: v7056,
              constructor: v7057,
              providerCount: v7058,
              providerCounter: v7059,
              safeAmount: v7060,
              safeSize: v7092,
              subscriberCount: v7067,
              subscriberCounter: v7069,
              token: v7064,
              tokenAmount: v7065
              };
            const cv2327 = v7093;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Some': {
            const v7096 = v7012[1];
            const v7098 = v7096.periodCount;
            const v7099 = v7096.periodAmount;
            const v7100 = v7096.periodLength;
            const v7101 = v7096.referenceID;
            const v7102 = v7096.subscriberCounter;
            const v7103 = stdlib.safeAdd(v7102, stdlib.checkedBigNumberify('./index.rsh:284:74:decimal', stdlib.UInt_max, '1'));
            const v7104 = v7096.subscriberCount;
            const v7105 = stdlib.safeAdd(v7104, stdlib.checkedBigNumberify('./index.rsh:285:70:decimal', stdlib.UInt_max, '1'));
            const v7106 = {
              periodAmount: v7099,
              periodCount: v7098,
              periodLength: v7100,
              referenceID: v7101,
              subscriberCount: v7105,
              subscriberCounter: v7103
              };
            await stdlib.mapSet(map0, ctc10, v7011, ctc2, v7106);
            const v7111 = [v2310, v2306, v7004, v7005, v2617];
            const v7112 = ['Subscribe', v7111];
            const v7113 = undefined /* Remote */;
            const v7114 = await txn4.getOutput('internal', 'v7113', ctc8, v7113);
            const v7116 = v7114[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0')];
            const v7117 = v7114[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '1')];
            const v7122 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7116);
            stdlib.assert(v7122, {
              at: './index.rsh:289:26:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            stdlib.assert(v7117, {
              at: './index.rsh:288:18:application',
              fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'Child app rejected subscription',
              who: 'Deployer'
              });
            const v7123 = true;
            await txn4.getOutput('U2_subscribe', 'v7123', ctc4, v7123);
            const v7131 = v2327.closed;
            const v7132 = v2327.constructor;
            const v7133 = v2327.providerCount;
            const v7134 = v2327.providerCounter;
            const v7135 = v2327.safeAmount;
            const v7136 = v2327.safeSize;
            const v7137 = v2327.subscriberCount;
            const v7138 = v2327.subscriberCounter;
            const v7139 = v2327.token;
            const v7140 = v2327.tokenAmount;
            const v7142 = stdlib.safeAdd(v7137, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
            const v7144 = stdlib.safeAdd(v7138, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
            const v7151 = v7106.periodCount;
            const v7152 = v7106.periodAmount;
            const v7153 = stdlib.safeMul(v7152, v7151);
            const v7154 = stdlib.safeAdd(v7135, v7153);
            const v7166 = stdlib.gt(v7136, v7154);
            const v7167 = v7166 ? v7136 : v7154;
            const v7168 = {
              closed: v7131,
              constructor: v7132,
              providerCount: v7133,
              providerCounter: v7134,
              safeAmount: v7154,
              safeSize: v7167,
              subscriberCount: v7142,
              subscriberCounter: v7144,
              token: v7139,
              tokenAmount: v7140
              };
            const cv2327 = v7168;
            const cv2328 = v2619;
            
            v2327 = cv2327;
            v2328 = cv2328;
            
            txn3 = txn4;
            continue;
            break;
            }
          }
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _U1_announce4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U1_announce4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U1_announce4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc13,
    A_deleteSubscription0_249: ctc14,
    C_close0_249: ctc8,
    C_grant0_249: ctc15,
    U1_announce0_249: ctc12,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc13
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2385 = ctc.selfAddress();
  const v2387 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:205:76:application call to [unknown function] (defined at: ./index.rsh:205:76:function exp)', 'at ./index.rsh:159:29:application call to "runU1_announce0_249" (defined at: ./index.rsh:203:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'U1_announce'
    });
  const v2388 = v2387[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2398 = [v2385, v2388];
  const v2399 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc13, v2398, ctc2), null);
  const v2400 = {
    None: 0,
    Some: 1
    }[v2399[0]];
  const v2401 = stdlib.eq(v2400, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:205:76:application call to [unknown function] (defined at: ./index.rsh:205:76:function exp)', 'at ./index.rsh:159:29:application call to "runU1_announce0_249" (defined at: ./index.rsh:203:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'provider already exists',
    who: 'U1_announce'
    });
  const v2416 = ['U1_announce0_249', v2387];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2416],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:203:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          
          break;
          }
        case 'C_close0_249': {
          const v3921 = v2618[1];
          
          break;
          }
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          
          break;
          }
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U1_announce"
            });
          ;
          const v5521 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '0')];
          const v5522 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '1')];
          const v5523 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '2')];
          const v5524 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '3')];
          const v5525 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '4')];
          const v5526 = [v2617, v5521];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc13, v5526, ctc2), null);
          const v5537 = {
            periodAmount: v5523,
            periodCount: v5522,
            periodLength: v5524,
            referenceID: v5525,
            subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await stdlib.simMapSet(sim_r, 0, ctc13, v5526, ctc2, v5537);
          const v5542 = [v2310, v2306, v2617, v5521, v5522, v5523, v5524, v5525];
          const v5543 = ['Announce', v5542];
          const v5544 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2305,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v5544', ctc18, v5544);
          const v5554 = true;
          const v5555 = await txn1.getOutput('U1_announce', 'v5554', ctc4, v5554);
          
          const v5565 = v2327.closed;
          const v5566 = v2327.constructor;
          const v5567 = v2327.providerCount;
          const v5568 = v2327.providerCounter;
          const v5569 = v2327.safeAmount;
          const v5570 = v2327.safeSize;
          const v5571 = v2327.subscriberCount;
          const v5572 = v2327.subscriberCounter;
          const v5573 = v2327.token;
          const v5574 = v2327.tokenAmount;
          const v5576 = stdlib.safeAdd(v5567, stdlib.checkedBigNumberify('./index.rsh:240:50:decimal', stdlib.UInt_max, '1'));
          const v5578 = stdlib.safeAdd(v5568, stdlib.checkedBigNumberify('./index.rsh:241:54:decimal', stdlib.UInt_max, '1'));
          const v5579 = {
            closed: v5565,
            constructor: v5566,
            providerCount: v5576,
            providerCounter: v5578,
            safeAmount: v5569,
            safeSize: v5570,
            subscriberCount: v5571,
            subscriberCounter: v5572,
            token: v5573,
            tokenAmount: v5574
            };
          const v16838 = v5579;
          const v16840 = v5579.closed;
          if (v16840) {
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
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          
          break;
          }
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      return;
      break;
      }
    case 'C_close0_249': {
      const v3921 = v2618[1];
      return;
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      return;
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v5521 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '0')];
      const v5522 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '1')];
      const v5523 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '2')];
      const v5524 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '3')];
      const v5525 = v5221[stdlib.checkedBigNumberify('./index.rsh:203:10:spread', stdlib.UInt_max, '4')];
      const v5526 = [v2617, v5521];
      const v5527 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc13, v5526, ctc2), null);
      const v5528 = {
        None: 0,
        Some: 1
        }[v5527[0]];
      const v5529 = stdlib.eq(v5528, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5529, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
        msg: 'provider already exists',
        who: 'U1_announce'
        });
      const v5537 = {
        periodAmount: v5523,
        periodCount: v5522,
        periodLength: v5524,
        referenceID: v5525,
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.mapSet(map0, ctc13, v5526, ctc2, v5537);
      const v5542 = [v2310, v2306, v2617, v5521, v5522, v5523, v5524, v5525];
      const v5543 = ['Announce', v5542];
      const v5544 = undefined /* Remote */;
      const v5545 = await txn1.getOutput('internal', 'v5544', ctc18, v5544);
      const v5547 = v5545[stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '0')];
      const v5548 = v5545[stdlib.checkedBigNumberify('./index.rsh:222:28:application', stdlib.UInt_max, '1')];
      const v5553 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5547);
      stdlib.assert(v5553, {
        at: './index.rsh:222:28:application',
        fs: ['at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
        msg: 'remote bill check',
        who: 'U1_announce'
        });
      stdlib.assert(v5548, {
        at: './index.rsh:221:20:application',
        fs: ['at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
        msg: 'Child app rejected announcement',
        who: 'U1_announce'
        });
      const v5554 = true;
      const v5555 = await txn1.getOutput('U1_announce', 'v5554', ctc4, v5554);
      if (v1399) {
        stdlib.protect(ctc0, await interact.out(v5221, v5555), {
          at: './index.rsh:204:7:application',
          fs: ['at ./index.rsh:204:7:application call to [unknown function] (defined at: ./index.rsh:204:7:function exp)', 'at ./index.rsh:236:14:application call to "k" (defined at: ./index.rsh:211:15:function exp)', 'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)'],
          msg: 'out',
          who: 'U1_announce'
          });
        }
      else {
        }
      
      const v5565 = v2327.closed;
      const v5566 = v2327.constructor;
      const v5567 = v2327.providerCount;
      const v5568 = v2327.providerCounter;
      const v5569 = v2327.safeAmount;
      const v5570 = v2327.safeSize;
      const v5571 = v2327.subscriberCount;
      const v5572 = v2327.subscriberCounter;
      const v5573 = v2327.token;
      const v5574 = v2327.tokenAmount;
      const v5576 = stdlib.safeAdd(v5567, stdlib.checkedBigNumberify('./index.rsh:240:50:decimal', stdlib.UInt_max, '1'));
      const v5578 = stdlib.safeAdd(v5568, stdlib.checkedBigNumberify('./index.rsh:241:54:decimal', stdlib.UInt_max, '1'));
      const v5579 = {
        closed: v5565,
        constructor: v5566,
        providerCount: v5576,
        providerCounter: v5578,
        safeAmount: v5569,
        safeSize: v5570,
        subscriberCount: v5571,
        subscriberCounter: v5572,
        token: v5573,
        tokenAmount: v5574
        };
      const v16838 = v5579;
      const v16840 = v5579.closed;
      if (v16840) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      return;
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_claim4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_claim4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_claim4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc14,
    A_deleteSubscription0_249: ctc13,
    C_close0_249: ctc8,
    C_grant0_249: ctc15,
    U1_announce0_249: ctc16,
    U2_claim0_249: ctc12,
    U2_subscribe0_249: ctc14
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1, ctc10]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc1, ctc14]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2446 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:329:63:application call to [unknown function] (defined at: ./index.rsh:329:63:function exp)', 'at ./index.rsh:159:29:application call to "runU2_claim0_249" (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'U2_claim'
    });
  const v2447 = v2446[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2448 = v2446[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2449 = v2446[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2450 = v2446[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v2455 = [v2447, v2448, v2449];
  const v2456 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2455, ctc5), null);
  const v2457 = {
    None: 0,
    Some: 1
    }[v2456[0]];
  const v2458 = stdlib.eq(v2457, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2458, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:329:63:application call to [unknown function] (defined at: ./index.rsh:329:63:function exp)', 'at ./index.rsh:159:29:application call to "runU2_claim0_249" (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'not subscribed',
    who: 'U2_claim'
    });
  const v2460 = [v2447, v2448];
  const v2461 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc14, v2460, ctc2), null);
  let v2462;
  switch (v2461[0]) {
    case 'None': {
      const v2463 = v2461[1];
      v2462 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v2464 = v2461[1];
      const v2465 = v2464.periodAmount;
      const v2466 = stdlib.safeMul(v2465, v2450);
      v2462 = v2466;
      
      break;
      }
    }
  const v2469 = {
    active: false,
    lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  const v2470 = stdlib.fromSome(v2456, v2469);
  const v2471 = v2470.remaining;
  const v2472 = stdlib.le(v2462, v2471);
  stdlib.assert(v2472, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:329:63:application call to [unknown function] (defined at: ./index.rsh:329:63:function exp)', 'at ./index.rsh:159:29:application call to "runU2_claim0_249" (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'not enough remaining',
    who: 'U2_claim'
    });
  const v2485 = ['U2_claim0_249', v2446];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2485],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:329:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          
          break;
          }
        case 'C_close0_249': {
          const v3921 = v2618[1];
          
          break;
          }
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          
          break;
          }
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          
          break;
          }
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_claim"
            });
          ;
          const v6233 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
          const v6234 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
          const v6235 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '2')];
          const v6236 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '3')];
          const v6237 = [v6233, v6234, v6235];
          const v6238 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v6237, ctc5), null);
          const v6242 = [v6233, v6234];
          const v6243 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc14, v6242, ctc2), null);
          const v6251 = {
            active: false,
            lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6252 = stdlib.fromSome(v6238, v6251);
          const v6253 = v6252.remaining;
          const v6265 = v6252.lastTime;
          const v6276 = await ctc.getContractAddress();
          const v6277 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6235];
          const v6278 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6233];
          const v6279 = [v6235, v6276];
          const v6280 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6279];
          let v6283;
          switch (v6243[0]) {
            case 'None': {
              const v6284 = v6243[1];
              v6283 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v6285 = v6243[1];
              const v6286 = v6285.periodAmount;
              const v6287 = stdlib.safeMul(v6286, v6236);
              v6283 = v6287;
              
              break;
              }
            }
          const v6291 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v2306,
              remote: ({
                accs: [v6235, v6233],
                apps: [v2306],
                bills: stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc19, v6277], [ctc19, v6278], [ctc20, v6280]],
                fees: stdlib.checkedBigNumberify('./index.rsh:357:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v6291', ctc18, v6291);
          const v6302 = [v2310, v2306, v6233, v6234, v6235, v6236];
          null;
          let v6306;
          switch (v6243[0]) {
            case 'None': {
              const v6307 = v6243[1];
              v6306 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v6308 = v6243[1];
              const v6309 = v6308.periodAmount;
              const v6310 = stdlib.safeMul(v6309, v6236);
              v6306 = v6310;
              
              break;
              }
            }
          const v6311 = stdlib.safeSub(v6253, v6306);
          let v6314;
          switch (v6243[0]) {
            case 'None': {
              const v6315 = v6243[1];
              v6314 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v6316 = v6243[1];
              const v6317 = v6316.periodLength;
              const v6318 = stdlib.safeMul(v6236, v6317);
              v6314 = v6318;
              
              break;
              }
            }
          const v6319 = stdlib.safeAdd(v6265, v6314);
          const v6320 = {
            active: true,
            lastTime: v6319,
            remaining: v6311
            };
          await stdlib.simMapSet(sim_r, 1, ctc13, v6237, ctc5, v6320);
          const v6321 = true;
          const v6322 = await txn1.getOutput('U2_claim', 'v6321', ctc4, v6321);
          
          const v6331 = v2327.closed;
          const v6332 = v2327.constructor;
          const v6333 = v2327.providerCount;
          const v6334 = v2327.providerCounter;
          const v6335 = v2327.safeAmount;
          const v6336 = v2327.safeSize;
          const v6337 = v2327.subscriberCount;
          const v6338 = v2327.subscriberCounter;
          const v6339 = v2327.token;
          const v6340 = v2327.tokenAmount;
          let v6344;
          switch (v6243[0]) {
            case 'None': {
              const v6345 = v6243[1];
              v6344 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v6346 = v6243[1];
              const v6347 = v6346.periodAmount;
              const v6348 = stdlib.safeMul(v6347, v6236);
              v6344 = v6348;
              
              break;
              }
            }
          const v6349 = stdlib.safeSub(v6335, v6344);
          const v6350 = {
            closed: v6331,
            constructor: v6332,
            providerCount: v6333,
            providerCounter: v6334,
            safeAmount: v6349,
            safeSize: v6336,
            subscriberCount: v6337,
            subscriberCounter: v6338,
            token: v6339,
            tokenAmount: v6340
            };
          const v16878 = v6350;
          const v16880 = v6350.closed;
          if (v16880) {
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
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      return;
      break;
      }
    case 'C_close0_249': {
      const v3921 = v2618[1];
      return;
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      return;
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      return;
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v6233 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '0')];
      const v6234 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '1')];
      const v6235 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '2')];
      const v6236 = v5871[stdlib.checkedBigNumberify('./index.rsh:329:10:spread', stdlib.UInt_max, '3')];
      const v6237 = [v6233, v6234, v6235];
      const v6238 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v6237, ctc5), null);
      const v6239 = {
        None: 0,
        Some: 1
        }[v6238[0]];
      const v6240 = stdlib.eq(v6239, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6240, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
        msg: 'not subscribed',
        who: 'U2_claim'
        });
      const v6242 = [v6233, v6234];
      const v6243 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc14, v6242, ctc2), null);
      let v6244;
      switch (v6243[0]) {
        case 'None': {
          const v6245 = v6243[1];
          v6244 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6246 = v6243[1];
          const v6247 = v6246.periodAmount;
          const v6248 = stdlib.safeMul(v6247, v6236);
          v6244 = v6248;
          
          break;
          }
        }
      const v6251 = {
        active: false,
        lastTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        remaining: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6252 = stdlib.fromSome(v6238, v6251);
      const v6253 = v6252.remaining;
      const v6254 = stdlib.le(v6244, v6253);
      stdlib.assert(v6254, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
        msg: 'not enough remaining',
        who: 'U2_claim'
        });
      const v6265 = v6252.lastTime;
      let v6269;
      switch (v6243[0]) {
        case 'None': {
          const v6270 = v6243[1];
          v6269 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6271 = v6243[1];
          const v6272 = v6271.periodLength;
          const v6273 = stdlib.safeMul(v6236, v6272);
          v6269 = v6273;
          
          break;
          }
        }
      const v6274 = stdlib.safeAdd(v6265, v6269);
      const v6275 = stdlib.ge(v2619, v6274);
      stdlib.assert(v6275, {
        at: './index.rsh:346:18:application',
        fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
        msg: 'not enough time has passed',
        who: 'U2_claim'
        });
      const v6276 = await ctc.getContractAddress();
      const v6277 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6235];
      const v6278 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6233];
      const v6279 = [v6235, v6276];
      const v6280 = [v2306, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6279];
      let v6283;
      switch (v6243[0]) {
        case 'None': {
          const v6284 = v6243[1];
          v6283 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6285 = v6243[1];
          const v6286 = v6285.periodAmount;
          const v6287 = stdlib.safeMul(v6286, v6236);
          v6283 = v6287;
          
          break;
          }
        }
      const v6291 = undefined /* Remote */;
      const v6292 = await txn1.getOutput('internal', 'v6291', ctc18, v6291);
      const v6294 = v6292[stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '0')];
      const v6295 = v6292[stdlib.checkedBigNumberify('./index.rsh:364:15:application', stdlib.UInt_max, '1')];
      const v6300 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6294);
      stdlib.assert(v6300, {
        at: './index.rsh:364:15:application',
        fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
        msg: 'remote bill check',
        who: 'U2_claim'
        });
      stdlib.assert(v6295, {
        at: './index.rsh:355:18:application',
        fs: ['at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
        msg: 'transfer failed',
        who: 'U2_claim'
        });
      const v6302 = [v2310, v2306, v6233, v6234, v6235, v6236];
      null;
      let v6306;
      switch (v6243[0]) {
        case 'None': {
          const v6307 = v6243[1];
          v6306 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6308 = v6243[1];
          const v6309 = v6308.periodAmount;
          const v6310 = stdlib.safeMul(v6309, v6236);
          v6306 = v6310;
          
          break;
          }
        }
      const v6311 = stdlib.safeSub(v6253, v6306);
      let v6314;
      switch (v6243[0]) {
        case 'None': {
          const v6315 = v6243[1];
          v6314 = stdlib.checkedBigNumberify('./index.rsh:324:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6316 = v6243[1];
          const v6317 = v6316.periodLength;
          const v6318 = stdlib.safeMul(v6236, v6317);
          v6314 = v6318;
          
          break;
          }
        }
      const v6319 = stdlib.safeAdd(v6265, v6314);
      const v6320 = {
        active: true,
        lastTime: v6319,
        remaining: v6311
        };
      await stdlib.mapSet(map1, ctc13, v6237, ctc5, v6320);
      const v6321 = true;
      const v6322 = await txn1.getOutput('U2_claim', 'v6321', ctc4, v6321);
      if (v1399) {
        stdlib.protect(ctc0, await interact.out(v5871, v6322), {
          at: './index.rsh:329:11:application',
          fs: ['at ./index.rsh:329:11:application call to [unknown function] (defined at: ./index.rsh:329:11:function exp)', 'at ./index.rsh:381:12:application call to "k" (defined at: ./index.rsh:340:13:function exp)', 'at ./index.rsh:340:13:application call to [unknown function] (defined at: ./index.rsh:340:13:function exp)'],
          msg: 'out',
          who: 'U2_claim'
          });
        }
      else {
        }
      
      const v6331 = v2327.closed;
      const v6332 = v2327.constructor;
      const v6333 = v2327.providerCount;
      const v6334 = v2327.providerCounter;
      const v6335 = v2327.safeAmount;
      const v6336 = v2327.safeSize;
      const v6337 = v2327.subscriberCount;
      const v6338 = v2327.subscriberCounter;
      const v6339 = v2327.token;
      const v6340 = v2327.tokenAmount;
      let v6344;
      switch (v6243[0]) {
        case 'None': {
          const v6345 = v6243[1];
          v6344 = stdlib.checkedBigNumberify('./index.rsh:319:55:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6346 = v6243[1];
          const v6347 = v6346.periodAmount;
          const v6348 = stdlib.safeMul(v6347, v6236);
          v6344 = v6348;
          
          break;
          }
        }
      const v6349 = stdlib.safeSub(v6335, v6344);
      const v6350 = {
        closed: v6331,
        constructor: v6332,
        providerCount: v6333,
        providerCounter: v6334,
        safeAmount: v6349,
        safeSize: v6336,
        subscriberCount: v6337,
        subscriberCounter: v6338,
        token: v6339,
        tokenAmount: v6340
        };
      const v16878 = v6350;
      const v16880 = v6350.closed;
      if (v16880) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
      return;
      break;
      }
    }
  
  
  };
export async function _U2_subscribe4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _U2_subscribe4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _U2_subscribe4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['periodCount', ctc1], ['periodAmount', ctc1], ['periodLength', ctc1], ['subscriberCount', ctc1], ['subscriberCounter', ctc1], ['referenceID', ctc1]]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['remaining', ctc1], ['lastTime', ctc1], ['active', ctc4]]);
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    constructor: ctc10,
    providerCount: ctc1,
    providerCounter: ctc1,
    safeAmount: ctc1,
    safeSize: ctc1,
    subscriberCount: ctc1,
    subscriberCounter: ctc1,
    token: ctc7,
    tokenAmount: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc1, ctc1, ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10, ctc10, ctc10, ctc1]);
  const ctc17 = stdlib.T_Data({
    A_deleteProvider0_249: ctc12,
    A_deleteSubscription0_249: ctc13,
    C_close0_249: ctc8,
    C_grant0_249: ctc14,
    U1_announce0_249: ctc15,
    U2_claim0_249: ctc16,
    U2_subscribe0_249: ctc12
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc4]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc6;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2305, v2306, v2310, v2313, v2314, v2327] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11]);
  const v2418 = ctc.selfAddress();
  const v2420 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:261:48:application call to [unknown function] (defined at: ./index.rsh:261:48:function exp)', 'at ./index.rsh:159:29:application call to "runU2_subscribe0_249" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'in',
    who: 'U2_subscribe'
    });
  const v2421 = v2420[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2422 = v2420[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2425 = [v2421, v2422, v2418];
  const v2426 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2425, ctc5), null);
  const v2427 = {
    None: 0,
    Some: 1
    }[v2426[0]];
  const v2428 = stdlib.eq(v2427, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2428, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:48:application call to [unknown function] (defined at: ./index.rsh:261:48:function exp)', 'at ./index.rsh:159:29:application call to "runU2_subscribe0_249" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'already subscribed',
    who: 'U2_subscribe'
    });
  const v2430 = [v2421, v2422];
  const v2431 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v2430, ctc2), null);
  const v2432 = {
    None: 0,
    Some: 1
    }[v2431[0]];
  const v2433 = stdlib.eq(v2432, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2433, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:48:application call to [unknown function] (defined at: ./index.rsh:261:48:function exp)', 'at ./index.rsh:159:29:application call to "runU2_subscribe0_249" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:159:29:application call to [unknown function] (defined at: ./index.rsh:159:29:function exp)'],
    msg: 'invalid provider',
    who: 'U2_subscribe'
    });
  const v2442 = ['U2_subscribe0_249', v2420];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2305, v2306, v2310, v2313, v2314, v2327, v2442],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
      
      switch (v2618[0]) {
        case 'A_deleteProvider0_249': {
          const v2621 = v2618[1];
          
          break;
          }
        case 'A_deleteSubscription0_249': {
          const v3271 = v2618[1];
          
          break;
          }
        case 'C_close0_249': {
          const v3921 = v2618[1];
          
          break;
          }
        case 'C_grant0_249': {
          const v4571 = v2618[1];
          
          break;
          }
        case 'U1_announce0_249': {
          const v5221 = v2618[1];
          
          break;
          }
        case 'U2_claim0_249': {
          const v5871 = v2618[1];
          
          break;
          }
        case 'U2_subscribe0_249': {
          const v6521 = v2618[1];
          sim_r.txns.push({
            kind: 'api',
            who: "U2_subscribe"
            });
          ;
          const v7004 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
          const v7005 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
          const v7006 = [v7004, v7005, v2617];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v7006, ctc5), null);
          const v7011 = [v7004, v7005];
          const v7012 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc12, v7011, ctc2), null);
          let v7019;
          switch (v7012[0]) {
            case 'None': {
              const v7022 = v7012[1];
              v7019 = stdlib.checkedBigNumberify('./index.rsh:254:20:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v7023 = v7012[1];
              const v7024 = v7023.periodCount;
              const v7025 = v7023.periodAmount;
              const v7026 = stdlib.safeMul(v7025, v7024);
              v7019 = v7026;
              
              break;
              }
            }
          const v7028 = {
            active: true,
            lastTime: v2619,
            remaining: v7019
            };
          await stdlib.simMapSet(sim_r, 1, ctc13, v7006, ctc5, v7028);
          switch (v7012[0]) {
            case 'None': {
              const v7031 = v7012[1];
              const v7036 = [v2310, v2306, v7004, v7005, v2617];
              const v7037 = ['Subscribe', v7036];
              const v7038 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2305,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v7038', ctc18, v7038);
              const v7048 = true;
              const v7049 = await txn1.getOutput('U2_subscribe', 'v7048', ctc4, v7048);
              
              const v7056 = v2327.closed;
              const v7057 = v2327.constructor;
              const v7058 = v2327.providerCount;
              const v7059 = v2327.providerCounter;
              const v7060 = v2327.safeAmount;
              const v7061 = v2327.safeSize;
              const v7062 = v2327.subscriberCount;
              const v7063 = v2327.subscriberCounter;
              const v7064 = v2327.token;
              const v7065 = v2327.tokenAmount;
              const v7067 = stdlib.safeAdd(v7062, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
              const v7069 = stdlib.safeAdd(v7063, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
              const v7091 = stdlib.gt(v7061, v7060);
              const v7092 = v7091 ? v7061 : v7060;
              const v7093 = {
                closed: v7056,
                constructor: v7057,
                providerCount: v7058,
                providerCounter: v7059,
                safeAmount: v7060,
                safeSize: v7092,
                subscriberCount: v7067,
                subscriberCounter: v7069,
                token: v7064,
                tokenAmount: v7065
                };
              const v16918 = v7093;
              const v16920 = v7093.closed;
              if (v16920) {
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
              const v7096 = v7012[1];
              const v7098 = v7096.periodCount;
              const v7099 = v7096.periodAmount;
              const v7100 = v7096.periodLength;
              const v7101 = v7096.referenceID;
              const v7102 = v7096.subscriberCounter;
              const v7103 = stdlib.safeAdd(v7102, stdlib.checkedBigNumberify('./index.rsh:284:74:decimal', stdlib.UInt_max, '1'));
              const v7104 = v7096.subscriberCount;
              const v7105 = stdlib.safeAdd(v7104, stdlib.checkedBigNumberify('./index.rsh:285:70:decimal', stdlib.UInt_max, '1'));
              const v7106 = {
                periodAmount: v7099,
                periodCount: v7098,
                periodLength: v7100,
                referenceID: v7101,
                subscriberCount: v7105,
                subscriberCounter: v7103
                };
              await stdlib.simMapSet(sim_r, 0, ctc12, v7011, ctc2, v7106);
              const v7111 = [v2310, v2306, v7004, v7005, v2617];
              const v7112 = ['Subscribe', v7111];
              const v7113 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2305,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v7113', ctc18, v7113);
              const v7123 = true;
              const v7124 = await txn1.getOutput('U2_subscribe', 'v7123', ctc4, v7123);
              
              const v7131 = v2327.closed;
              const v7132 = v2327.constructor;
              const v7133 = v2327.providerCount;
              const v7134 = v2327.providerCounter;
              const v7135 = v2327.safeAmount;
              const v7136 = v2327.safeSize;
              const v7137 = v2327.subscriberCount;
              const v7138 = v2327.subscriberCounter;
              const v7139 = v2327.token;
              const v7140 = v2327.tokenAmount;
              const v7142 = stdlib.safeAdd(v7137, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
              const v7144 = stdlib.safeAdd(v7138, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
              const v7151 = v7106.periodCount;
              const v7152 = v7106.periodAmount;
              const v7153 = stdlib.safeMul(v7152, v7151);
              const v7154 = stdlib.safeAdd(v7135, v7153);
              const v7166 = stdlib.gt(v7136, v7154);
              const v7167 = v7166 ? v7136 : v7154;
              const v7168 = {
                closed: v7131,
                constructor: v7132,
                providerCount: v7133,
                providerCounter: v7134,
                safeAmount: v7154,
                safeSize: v7167,
                subscriberCount: v7142,
                subscriberCounter: v7144,
                token: v7139,
                tokenAmount: v7140
                };
              const v16922 = v7168;
              const v16924 = v7168.closed;
              if (v16924) {
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
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc8, ctc9, ctc11, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2618], secs: v2620, time: v2619, didSend: v1399, from: v2617 } = txn1;
  switch (v2618[0]) {
    case 'A_deleteProvider0_249': {
      const v2621 = v2618[1];
      return;
      break;
      }
    case 'A_deleteSubscription0_249': {
      const v3271 = v2618[1];
      return;
      break;
      }
    case 'C_close0_249': {
      const v3921 = v2618[1];
      return;
      break;
      }
    case 'C_grant0_249': {
      const v4571 = v2618[1];
      return;
      break;
      }
    case 'U1_announce0_249': {
      const v5221 = v2618[1];
      return;
      break;
      }
    case 'U2_claim0_249': {
      const v5871 = v2618[1];
      return;
      break;
      }
    case 'U2_subscribe0_249': {
      const v6521 = v2618[1];
      undefined /* setApiDetails */;
      ;
      const v7004 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
      const v7005 = v6521[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
      const v7006 = [v7004, v7005, v2617];
      const v7007 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v7006, ctc5), null);
      const v7008 = {
        None: 0,
        Some: 1
        }[v7007[0]];
      const v7009 = stdlib.eq(v7008, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7009, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
        msg: 'already subscribed',
        who: 'U2_subscribe'
        });
      const v7011 = [v7004, v7005];
      const v7012 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc12, v7011, ctc2), null);
      const v7013 = {
        None: 0,
        Some: 1
        }[v7012[0]];
      const v7014 = stdlib.eq(v7013, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7014, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
        msg: 'invalid provider',
        who: 'U2_subscribe'
        });
      let v7019;
      switch (v7012[0]) {
        case 'None': {
          const v7022 = v7012[1];
          v7019 = stdlib.checkedBigNumberify('./index.rsh:254:20:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v7023 = v7012[1];
          const v7024 = v7023.periodCount;
          const v7025 = v7023.periodAmount;
          const v7026 = stdlib.safeMul(v7025, v7024);
          v7019 = v7026;
          
          break;
          }
        }
      const v7028 = {
        active: true,
        lastTime: v2619,
        remaining: v7019
        };
      await stdlib.mapSet(map1, ctc13, v7006, ctc5, v7028);
      switch (v7012[0]) {
        case 'None': {
          const v7031 = v7012[1];
          const v7036 = [v2310, v2306, v7004, v7005, v2617];
          const v7037 = ['Subscribe', v7036];
          const v7038 = undefined /* Remote */;
          const v7039 = await txn1.getOutput('internal', 'v7038', ctc18, v7038);
          const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0')];
          const v7042 = v7039[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '1')];
          const v7047 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7041);
          stdlib.assert(v7047, {
            at: './index.rsh:289:26:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: 'remote bill check',
            who: 'U2_subscribe'
            });
          stdlib.assert(v7042, {
            at: './index.rsh:288:18:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: 'Child app rejected subscription',
            who: 'U2_subscribe'
            });
          const v7048 = true;
          const v7049 = await txn1.getOutput('U2_subscribe', 'v7048', ctc4, v7048);
          if (v1399) {
            stdlib.protect(ctc0, await interact.out(v6521, v7049), {
              at: './index.rsh:261:11:application',
              fs: ['at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)', 'at ./index.rsh:300:12:application call to "k" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'out',
              who: 'U2_subscribe'
              });
            }
          else {
            }
          
          const v7056 = v2327.closed;
          const v7057 = v2327.constructor;
          const v7058 = v2327.providerCount;
          const v7059 = v2327.providerCounter;
          const v7060 = v2327.safeAmount;
          const v7061 = v2327.safeSize;
          const v7062 = v2327.subscriberCount;
          const v7063 = v2327.subscriberCounter;
          const v7064 = v2327.token;
          const v7065 = v2327.tokenAmount;
          const v7067 = stdlib.safeAdd(v7062, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
          const v7069 = stdlib.safeAdd(v7063, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
          const v7091 = stdlib.gt(v7061, v7060);
          const v7092 = v7091 ? v7061 : v7060;
          const v7093 = {
            closed: v7056,
            constructor: v7057,
            providerCount: v7058,
            providerCounter: v7059,
            safeAmount: v7060,
            safeSize: v7092,
            subscriberCount: v7067,
            subscriberCounter: v7069,
            token: v7064,
            tokenAmount: v7065
            };
          const v16918 = v7093;
          const v16920 = v7093.closed;
          if (v16920) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v7096 = v7012[1];
          const v7098 = v7096.periodCount;
          const v7099 = v7096.periodAmount;
          const v7100 = v7096.periodLength;
          const v7101 = v7096.referenceID;
          const v7102 = v7096.subscriberCounter;
          const v7103 = stdlib.safeAdd(v7102, stdlib.checkedBigNumberify('./index.rsh:284:74:decimal', stdlib.UInt_max, '1'));
          const v7104 = v7096.subscriberCount;
          const v7105 = stdlib.safeAdd(v7104, stdlib.checkedBigNumberify('./index.rsh:285:70:decimal', stdlib.UInt_max, '1'));
          const v7106 = {
            periodAmount: v7099,
            periodCount: v7098,
            periodLength: v7100,
            referenceID: v7101,
            subscriberCount: v7105,
            subscriberCounter: v7103
            };
          await stdlib.mapSet(map0, ctc12, v7011, ctc2, v7106);
          const v7111 = [v2310, v2306, v7004, v7005, v2617];
          const v7112 = ['Subscribe', v7111];
          const v7113 = undefined /* Remote */;
          const v7114 = await txn1.getOutput('internal', 'v7113', ctc18, v7113);
          const v7116 = v7114[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '0')];
          const v7117 = v7114[stdlib.checkedBigNumberify('./index.rsh:289:26:application', stdlib.UInt_max, '1')];
          const v7122 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7116);
          stdlib.assert(v7122, {
            at: './index.rsh:289:26:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: 'remote bill check',
            who: 'U2_subscribe'
            });
          stdlib.assert(v7117, {
            at: './index.rsh:288:18:application',
            fs: ['at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
            msg: 'Child app rejected subscription',
            who: 'U2_subscribe'
            });
          const v7123 = true;
          const v7124 = await txn1.getOutput('U2_subscribe', 'v7123', ctc4, v7123);
          if (v1399) {
            stdlib.protect(ctc0, await interact.out(v6521, v7124), {
              at: './index.rsh:261:11:application',
              fs: ['at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)', 'at ./index.rsh:300:12:application call to "k" (defined at: ./index.rsh:268:13:function exp)', 'at ./index.rsh:268:13:application call to [unknown function] (defined at: ./index.rsh:268:13:function exp)'],
              msg: 'out',
              who: 'U2_subscribe'
              });
            }
          else {
            }
          
          const v7131 = v2327.closed;
          const v7132 = v2327.constructor;
          const v7133 = v2327.providerCount;
          const v7134 = v2327.providerCounter;
          const v7135 = v2327.safeAmount;
          const v7136 = v2327.safeSize;
          const v7137 = v2327.subscriberCount;
          const v7138 = v2327.subscriberCounter;
          const v7139 = v2327.token;
          const v7140 = v2327.tokenAmount;
          const v7142 = stdlib.safeAdd(v7137, stdlib.checkedBigNumberify('./index.rsh:304:52:decimal', stdlib.UInt_max, '1'));
          const v7144 = stdlib.safeAdd(v7138, stdlib.checkedBigNumberify('./index.rsh:305:56:decimal', stdlib.UInt_max, '1'));
          const v7151 = v7106.periodCount;
          const v7152 = v7106.periodAmount;
          const v7153 = stdlib.safeMul(v7152, v7151);
          const v7154 = stdlib.safeAdd(v7135, v7153);
          const v7166 = stdlib.gt(v7136, v7154);
          const v7167 = v7166 ? v7136 : v7154;
          const v7168 = {
            closed: v7131,
            constructor: v7132,
            providerCount: v7133,
            providerCounter: v7134,
            safeAmount: v7154,
            safeSize: v7167,
            subscriberCount: v7142,
            subscriberCounter: v7144,
            token: v7139,
            tokenAmount: v7140
            };
          const v16922 = v7168;
          const v16924 = v7168.closed;
          if (v16924) {
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
    }
  
  
  };
export async function A_deleteProvider(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_deleteProvider expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_deleteProvider expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_deleteProvider4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function A_deleteSubscription(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A_deleteSubscription expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A_deleteSubscription expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _A_deleteSubscription4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function C_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for C_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for C_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _C_close4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
export async function U1_announce(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U1_announce expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U1_announce expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U1_announce4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_claim4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function U2_subscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for U2_subscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for U2_subscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _U2_subscribe4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`A_deleteProvider(address,address)byte`, `A_deleteSubscription(address,address,address)byte`, `C_close()byte`, `C_grant(address)byte`, `U1_announce(address,uint64,uint64,uint64,uint64)byte`, `U2_claim(address,address,address,uint64)byte`, `U2_subscribe(address,address)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[104])))void`],
    pure: [`providerService(address,address)(uint64,uint64,uint64,uint64,uint64,uint64)`, `state()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `subscription(address,address,address)(uint64,uint64,byte)`],
    sigs: [`A_deleteProvider(address,address)byte`, `A_deleteSubscription(address,address,address)byte`, `C_close()byte`, `C_grant(address)byte`, `U1_announce(address,uint64,uint64,uint64,uint64)byte`, `U2_claim(address,address,address,uint64)byte`, `U2_subscribe(address,address)byte`, `_reachp_0((uint64))void`, `_reachp_1((uint64,uint64,uint64))void`, `_reachp_3((uint64,(byte,byte[104])))void`, `providerService(address,address)(uint64,uint64,uint64,uint64,uint64,uint64)`, `state()(address,uint64,uint64,uint64,uint64,uint64,uint64,uint64,uint64)`, `subscription(address,address,address)(uint64,uint64,byte)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAWAAgBBjARKEEExI0CEBhISSEg1KwBMSloiQE5JgsABWFwcElEBAf/QV4IAAAAAAAAAAEBAQEAAQQBAwEFAQYBBzEYQQhNKGRJIls1ASNbNQInBWQnBGRQgg0EDEaPgAQSJqAiBDtLWmUETH4KegRywsaaBHbW8zUEf4XqmASXo/YYBLGccKUEwZStmQTCth2DBOHrBAAE6DCPEDYaAI4NB8MP5ABcAQ8P1ACBAU0Hzg/hB7EA+QF5AAEANhoBNhoCNQs1DCOvJwU0DDQLUFAhBq9QUDULIQg0ARJEiBAkNAsiWzUMNAtXCGk1DYAE+sekWjQMFlA0DVCwNAyIECk0DSJVjQcPZw9xB6AHowemB7AHukL/pDYaATYaAjYaAzULNQw1DSOvJwQ0DTQMUDQLUFAjr1BQNQtC/5uAcQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/yM2GgE1CyOvJwc0C1AhDK9QUDULQv8NNhoBNhoCFzYaAxc2GgQXNhoFFzULNQw1DTUONQ8jrycGNA80DhZQNA0WUDQMFlA0CxZQUCEGr1BQNQtC/s82GgE2GgI2GgM2GgQXNQs1DDUNNQ4jrycINA40DVA0DFA0CxZQUFA1C0L+ozYaATYaAjULNQwjrycJNAw0C1BQIQavUFA1C0L+hTQLVwAgNRU0DyEHW0k1DSISRDQVNAtXICBQNQwoIQSvI680DFABiA5nSTUWIlUkEkQ0FiJVjQIGWwZhQv4rNAtXACA1FTQLVyAgNQ00C1dAIDUMNBU0DVA1FyghBK8jrzQXUAGIDilJNRYiVSQSRDQVNA1QNAxQNQsoIQWvKzQLUAGIDgtJNQ0iVSQSRCEFrzQNiA4UIlsiEkQ0FiJVjQIHEwcZQv3CNA8hEltJNRZENA8hDVtJNRVENA8hDltJNQ0iEkQ0DyEHW0k1DCISRCk0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshgqshqAAQI0EFAhE69QshqzMgpgNAkJNAoXCRa3AD5XBABQNReACAAAAAAAABA1NBdQsDQXNQsiNAsiWxJENAtXCAEXRCQ1C4AIAAAAAAAAED80CxZRBwhQsDQLFlEHCDUEJwQ0D1cBIFA0DRZQNBYWUDQPVzEIUDQPVzkIUDQMFlA0FRZQNA9XUQhQNA9XWQhQMgY1DjUPNA9XAAEXQQxsMRmBBRJEiA1HIjIKMgmIDWA0A0AACoAEFR98dTQEULAkQzQNVwEgNQsxADQPVwEgEkQpNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYKrIaJwg0EhY0ExZQNAtQUCEMr1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DYAIAAAAAAAAEug0DVCwNA01DCI0DCJbEkQ0DFcIARdEJDUMgAgAAAAAAAAS8jQMFlEHCFCwNAwWUQcINQQ0D1cAATQLUDQPVyEIUDQPVykIUDQPVzEIUDQPVzkIUDQPV0EIUDQPV0kIUDQPV1EIUDQPV1kIUDIGNQ41D0L++jQLVwAgNRc0CyEPWzUWNAshBls1FTQLIQRbNQ00C4E4WzUMMQA0F1A1CyghBK8jrzQLUAGIC8siVSISRCEJI680C1ABNBYWNBUWUDQNFlAjr1Ajr1A0DBZQiAuxKTQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGCqyGicFNBIWNBMWUDEAUDQXUDQWFlA0FRZQNA0WUDQMFlBQI69QshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAABWoNAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAAFbI0CxZRBwhQsDQLFlEHCDUENA9XAAE0D1cBIFA0DyEOWyQIFlA0DyESWyQIFlA0D1cxCFA0D1c5CFA0D1dBCFA0D1dJCFA0D1dRCFA0D1dZCFAyBjUONQ9C/bg0C1cAIDUWNAtXICA1FTQLV0AgNQ00C4FgWzUMNBY0FVA0DVA1GighBa8rNBpQAYgKjkk1GCJVJBJEKCEEryOvNBY0FVBQAYgKdkk1GSJVjQIFrwW1QvpBNAtXACA1DTQLVyAgNQw0DTQMUDEAUDUYKCEFrys0GFABiApEIlUiEkQ0DTQMUDUWKCEEryOvNBZQAYgKK0k1FSJVJBJENBUiVY0CB1AHVkL57zQBIQgSRIgKLyEEryghBK8jrzQMNAtQUAGICfqIChA1BDEZIhJEQv0ENAEhCBJEiAoGNA9XASA0D1dRCFA0D1dZCFA0D1chCFA0D1cpCFA0D1dBCFA0D1dJCFA0D1cxCFA0D1c5CFA1BEL/tTQBIQgSRIgJwyEFryghBa8rNA00DFA0C1BQAYgJjIgJojUEQv+PNAsXNQyABILEYf40DBZQsDQMiAm2IRSvJDIGNQI1AScFSwFXAH9nJwRMV38KZyg0ARY0AhZQZzEZIhJEiAmWQvxUJDQBEkQ0CyJbNQw0CyNbNRQ0CyEKWzUTgATN+aSUNAwWUDQUFlA0ExZQsDQMiAlZMRg1Eig1ETQSFjQTFlA1ECk0FBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQUshgqshonCTQQUCETr1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAACQw0DFCwNAw1CyI0CyJbEkQ0C1cIARdEJwUxAFAjr1Ajr1Ajr1Ajr1Ajr1Ajr1A0ExZQI69QMgY1DjUPQvtuiAi2gaCNBogI1DYaATULQv7giAikNhoBNQtC/xeICJk2GgE1C0L4QyIxNBJEgQMxNRJEIjE2EkQiMTcSRIgIeSEUryIiQv7FQvpCQvtLNA1XAUA1C0L8HDQNVwFoNQtC/VQ0DVcBQDULQv2iNAtENBYiVY0CAPUA+0L30yI1C0L/6jQWVwEwIQtbIhI1C0L/2zQLRCEJI680DFABiAg0JDULgAgAAAAAAAAKZzQLFlEHCFCwNAsWUQcINQQpNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYKrIaJwc0EhY0ExZQNBVQUCEMr1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAACnU0C1CwNAs1DCI0DCJbEkQ0DFcIARdENA9XAAE0D1cBIFA0DyEOWyQJFlA0D1cpCFA0D1cxCFA0D1c5CFA0DRZQNA9XSQhQNA9XUQhQNA9XWQhQMgY1DjUPQvoAIjULQv8dNBZXATAhD1siEzULQv8ONA1EIRArNAtQAYgHQzQWIlWNAgAYAOxC9rIiNQ1C/+A0FlcBMCELWyINNQ1C/9EpNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYKrIaJwY0EhY0ExZQNBVQNAxQUCEGr1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAADUI0C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAANTDQLFlEHCFCwNAsWUQcINQQ0D1cAATQPVwEgUDQPVyEIUDQPVykIUDQPVzEIUDQPVzkIUDQPIQdbJAkWUDQPV0kIUDQPV1EIUDQPV1kIUDIGNQ41D0L46DQWVwEwNQshCSOvNBdQATQLVwAINAtXCAhQNAtXEAhQNAshC1skCRZQNAtXIAhQNAtXKAhQiAXDKTQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGCqyGicGNBIWNBMWUDQVUDQMUFAhBq9QshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAA10NAtQsDQLNQwiNAwiWxJENAxXCAEXRCQ1C4AIAAAAAAAADX40CxZRBwhQsDQLFlEHCDUENA9XAAE0D1cBIFA0D1chCFA0D1cpCFA0D1cxCFA0D1c5CFA0DyEHWyQJFlA0D1dJCFA0D1dRCFA0D1dZCFAyBjUONQ9C99whBa80GIgE9Uk1CyJbNRg0FzQYDkQ0CyNbNRc0GSJVjQIALgA0QvSVIjUXQv/SNBlXATAjWzQMCzUXQv/DMgY0FzQLCA9ENBkiVY0CALwAwkL0aiI1C0L/5DQMNBlXATAhClsLNQtC/9QpNBMWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0E7IYgARYN5+hsho0DUmyHLIaNBZJshyyGjQLFrIaNBOyMrMyCmA0CQk0ChcJFrcAPlcEAFA1G4AIAAAAAAAAGJM0G1CwNBs1CyI0CyJbEkQ0C1cIARdENBIWNBMWUDQWUDQVUDQNUDQMFlA1C4AEgccL7zQLULA0GSJVjQIAJQArQvOxIjULQv9XNBlXATAjWzQMCzULQv9INBkiVY0CAFwAYkLzjyI1DUL/7TQZVwEwI1s0DAs1DUL/3iEQKzQaUAE0GDQNCRY0FzQLCBZQJwRQiAOSJDULgAgAAAAAAAAYsTQLFlEHCFCwNAsWUQcINQQ0GSJVjQIAYQBnQvM2IjULQv+2NAw0GVcBMCEKWws1C0L/pjQPVwABNA9XASBQNA9XIQhQNA9XKQhQNA8hEVs0CwkWUDQPVzkIUDQPV0EIUDQPV0kIUDQPV1EIUDQPV1kIUDIGNQ41D0L19yI1C0L/sjQZVwEwI1s0DAs1C0L/oyEQKzQYUAE0FxYyBhZQJwRQiALhNBUiVY0CAB0BB0LyoiI1F0L/2TQVVwEwSTULI1s0CyJbCzUXQv/FKTQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNBSyGCqyGicKNBIWNBMWUDQNUDQMUDEAUFAjr1CyGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAG340C1CwNAs1DCI0DCJbEkQ0DFcIARdEJDULgAgAAAAAAAAbiDQLFlEHCFCwNAsWUQcINQQ0DyERWzUMNA8hFVs1CzQPVwABNA9XASBQNA9XIQhQNA9XKQhQNAwWUDQMNAtJNAwNTRZQNA8hB1skCBZQNA8hDVskCBZQNA9XUQhQNA9XWQhQMgY1DjUPQvS9NBVXATBJNQtXAAg0C1cICFA0C1cQCFA0CyELWyQIFlA0CyEPWyQIFlA0C1coCFA1FSEJI680FlABNBWIAZIpNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0FLIYKrIaJwo0EhY0ExZQNA1QNAxQMQBQUCOvULIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAbyTQLULA0CzUMIjQMIlsSRDQMVwgBF0QkNQuACAAAAAAAABvTNAsWUQcIULA0CxZRBwg1BDQPIRVbNQw0DyERWzQVI1s0FSJbCwg1CzQPVwABNA9XASBQNA9XIQhQNA9XKQhQNAsWUDQLNAxJNAsNTRZQNA8hB1skCBZQNA8hDVskCBZQNA9XUQhQNA9XWQhQMgY1DjUPQvOLNBQWNBMWUDQSFlA0EVA0EFA0D1AhCDIGQvcPSEy/SIkisgEkshCyB7IIs4k0DVcBQDULQvHNNA1XAWA1C0LyATYaATYaAjULNQxC9jBC9lY2GgE2GgI2GgM1CzUMNQ1C9odIiUwJSTUGMgmIAJOJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJvkkWUQcIRQRNUIlMSb1A/3dLA4gAUkL/b0lXAQBMIlVNiUkiWzUUSSNbNRNJIQpbNRJJSCg1EUlXGBA1EFcoYTUPiSQ1A4lJIhJMNAISEUSJNAY0B0oPQf93Qv9/vCJOAk00Bwg1B4k0Bgg1BomxQv8bsbIJQv8V`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `492`,
    1001: `493`,
    1002: `495`,
    1003: `495`,
    1004: `495`,
    1005: `497`,
    1006: `498`,
    1007: `498`,
    1008: `499`,
    1009: `499`,
    101: `21`,
    1010: `500`,
    1011: `500`,
    1012: `500`,
    1013: `502`,
    1014: `502`,
    1015: `503`,
    1016: `503`,
    1017: `503`,
    1018: `505`,
    1019: `505`,
    102: `21`,
    1020: `505`,
    1021: `505`,
    1022: `505`,
    1023: `505`,
    1024: `506`,
    1025: `506`,
    1026: `507`,
    1027: `508`,
    1028: `510`,
    1029: `511`,
    103: `21`,
    1030: `513`,
    1031: `513`,
    1032: `514`,
    1033: `514`,
    1034: `514`,
    1035: `515`,
    1036: `515`,
    1037: `516`,
    1038: `516`,
    1039: `517`,
    104: `21`,
    1040: `517`,
    1041: `518`,
    1042: `518`,
    1043: `518`,
    1044: `519`,
    1045: `520`,
    1046: `525`,
    1047: `526`,
    1048: `526`,
    1049: `527`,
    105: `21`,
    1050: `528`,
    1051: `529`,
    1052: `530`,
    1053: `530`,
    1054: `531`,
    1055: `531`,
    1056: `532`,
    1057: `533`,
    1058: `533`,
    1059: `534`,
    106: `21`,
    1060: `535`,
    1061: `535`,
    1062: `536`,
    1063: `537`,
    1064: `537`,
    1065: `538`,
    1066: `539`,
    1067: `540`,
    1068: `540`,
    1069: `541`,
    107: `21`,
    1070: `542`,
    1071: `543`,
    1072: `543`,
    1073: `544`,
    1074: `545`,
    1075: `545`,
    1076: `546`,
    1077: `546`,
    1078: `548`,
    1079: `548`,
    108: `21`,
    1080: `549`,
    1081: `550`,
    1082: `550`,
    1083: `551`,
    1084: `551`,
    1085: `552`,
    1086: `552`,
    1087: `553`,
    1088: `554`,
    1089: `554`,
    109: `21`,
    1090: `555`,
    1091: `556`,
    1092: `557`,
    1093: `557`,
    1094: `558`,
    1095: `559`,
    1096: `560`,
    1097: `560`,
    1098: `561`,
    1099: `562`,
    11: `2`,
    110: `21`,
    1100: `563`,
    1101: `563`,
    1102: `564`,
    1103: `568`,
    1104: `568`,
    1105: `569`,
    1106: `570`,
    1107: `570`,
    1108: `571`,
    1109: `572`,
    111: `21`,
    1110: `572`,
    1111: `573`,
    1112: `574`,
    1113: `575`,
    1114: `576`,
    1115: `576`,
    1116: `576`,
    1117: `577`,
    1118: `577`,
    1119: `577`,
    112: `21`,
    1120: `578`,
    1121: `579`,
    1122: `579`,
    1123: `580`,
    1124: `580`,
    1125: `580`,
    1126: `580`,
    1127: `580`,
    1128: `580`,
    1129: `580`,
    113: `21`,
    1130: `580`,
    1131: `580`,
    1132: `580`,
    1133: `581`,
    1134: `581`,
    1135: `582`,
    1136: `583`,
    1137: `584`,
    1138: `584`,
    1139: `585`,
    114: `21`,
    1140: `585`,
    1141: `586`,
    1142: `587`,
    1143: `587`,
    1144: `588`,
    1145: `589`,
    1146: `590`,
    1147: `591`,
    1148: `595`,
    1149: `595`,
    115: `21`,
    1150: `596`,
    1151: `596`,
    1152: `596`,
    1153: `597`,
    1154: `598`,
    1155: `602`,
    1156: `603`,
    1157: `603`,
    1158: `604`,
    1159: `604`,
    116: `21`,
    1160: `604`,
    1161: `604`,
    1162: `604`,
    1163: `604`,
    1164: `604`,
    1165: `604`,
    1166: `604`,
    1167: `604`,
    1168: `605`,
    1169: `605`,
    117: `21`,
    1170: `606`,
    1171: `607`,
    1172: `607`,
    1173: `607`,
    1174: `608`,
    1175: `609`,
    1176: `610`,
    1177: `610`,
    1178: `611`,
    1179: `612`,
    118: `21`,
    1180: `612`,
    1181: `612`,
    1182: `613`,
    1183: `613`,
    1184: `614`,
    1185: `614`,
    1186: `615`,
    1187: `615`,
    1188: `615`,
    1189: `616`,
    119: `21`,
    1190: `616`,
    1191: `617`,
    1192: `618`,
    1193: `618`,
    1194: `619`,
    1195: `619`,
    1196: `619`,
    1197: `620`,
    1198: `621`,
    1199: `621`,
    12: `2`,
    120: `21`,
    1200: `622`,
    1201: `622`,
    1202: `622`,
    1203: `623`,
    1204: `624`,
    1205: `624`,
    1206: `625`,
    1207: `625`,
    1208: `625`,
    1209: `626`,
    121: `21`,
    1210: `627`,
    1211: `627`,
    1212: `628`,
    1213: `628`,
    1214: `628`,
    1215: `629`,
    1216: `630`,
    1217: `630`,
    1218: `631`,
    1219: `631`,
    122: `21`,
    1220: `631`,
    1221: `632`,
    1222: `633`,
    1223: `633`,
    1224: `634`,
    1225: `634`,
    1226: `634`,
    1227: `635`,
    1228: `636`,
    1229: `636`,
    123: `21`,
    1230: `637`,
    1231: `637`,
    1232: `637`,
    1233: `638`,
    1234: `639`,
    1235: `639`,
    1236: `640`,
    1237: `640`,
    1238: `640`,
    1239: `641`,
    124: `21`,
    1240: `642`,
    1241: `642`,
    1242: `643`,
    1243: `643`,
    1244: `644`,
    1245: `644`,
    1246: `645`,
    1247: `645`,
    1248: `645`,
    1249: `647`,
    125: `21`,
    1250: `647`,
    1251: `648`,
    1252: `648`,
    1253: `648`,
    1254: `649`,
    1255: `649`,
    1256: `650`,
    1257: `650`,
    1258: `651`,
    1259: `651`,
    126: `21`,
    1260: `652`,
    1261: `653`,
    1262: `653`,
    1263: `654`,
    1264: `654`,
    1265: `655`,
    1266: `655`,
    1267: `656`,
    1268: `657`,
    1269: `657`,
    127: `21`,
    1270: `658`,
    1271: `658`,
    1272: `659`,
    1273: `659`,
    1274: `660`,
    1275: `661`,
    1276: `661`,
    1277: `662`,
    1278: `662`,
    1279: `663`,
    128: `21`,
    1280: `663`,
    1281: `664`,
    1282: `665`,
    1283: `665`,
    1284: `666`,
    1285: `666`,
    1286: `667`,
    1287: `667`,
    1288: `668`,
    1289: `669`,
    129: `21`,
    1290: `669`,
    1291: `671`,
    1292: `672`,
    1293: `672`,
    1294: `673`,
    1295: `674`,
    1296: `675`,
    1297: `676`,
    1298: `676`,
    1299: `677`,
    13: `2`,
    130: `21`,
    1300: `678`,
    1301: `679`,
    1302: `679`,
    1303: `679`,
    1304: `680`,
    1305: `681`,
    1306: `682`,
    1307: `683`,
    1308: `684`,
    1309: `689`,
    131: `21`,
    1310: `689`,
    1311: `690`,
    1312: `691`,
    1313: `692`,
    1314: `692`,
    1315: `693`,
    1316: `694`,
    1317: `695`,
    1318: `695`,
    1319: `696`,
    132: `21`,
    1320: `697`,
    1321: `697`,
    1322: `698`,
    1323: `699`,
    1324: `700`,
    1325: `700`,
    1326: `701`,
    1327: `702`,
    1328: `703`,
    1329: `704`,
    133: `21`,
    1330: `705`,
    1331: `706`,
    1332: `707`,
    1333: `708`,
    1334: `709`,
    1335: `709`,
    1336: `710`,
    1337: `711`,
    1338: `712`,
    1339: `712`,
    134: `21`,
    1340: `712`,
    1341: `713`,
    1342: `714`,
    1343: `714`,
    1344: `715`,
    1345: `716`,
    1346: `717`,
    1347: `718`,
    1348: `718`,
    1349: `719`,
    135: `21`,
    1350: `719`,
    1351: `720`,
    1352: `721`,
    1353: `721`,
    1354: `722`,
    1355: `723`,
    1356: `723`,
    1357: `724`,
    1358: `725`,
    1359: `725`,
    136: `21`,
    1360: `726`,
    1361: `727`,
    1362: `728`,
    1363: `728`,
    1364: `729`,
    1365: `730`,
    1366: `731`,
    1367: `731`,
    1368: `732`,
    1369: `733`,
    137: `21`,
    1370: `733`,
    1371: `734`,
    1372: `734`,
    1373: `736`,
    1374: `736`,
    1375: `737`,
    1376: `738`,
    1377: `738`,
    1378: `739`,
    1379: `739`,
    138: `21`,
    1380: `740`,
    1381: `740`,
    1382: `741`,
    1383: `742`,
    1384: `742`,
    1385: `743`,
    1386: `744`,
    1387: `745`,
    1388: `745`,
    1389: `746`,
    139: `21`,
    1390: `747`,
    1391: `747`,
    1392: `748`,
    1393: `749`,
    1394: `749`,
    1395: `750`,
    1396: `751`,
    1397: `752`,
    1398: `752`,
    1399: `753`,
    14: `2`,
    140: `21`,
    1400: `754`,
    1401: `755`,
    1402: `755`,
    1403: `756`,
    1404: `757`,
    1405: `758`,
    1406: `758`,
    1407: `759`,
    1408: `760`,
    1409: `761`,
    141: `21`,
    1410: `762`,
    1411: `763`,
    1412: `764`,
    1413: `765`,
    1414: `765`,
    1415: `766`,
    1416: `770`,
    1417: `770`,
    1418: `771`,
    1419: `772`,
    142: `21`,
    1420: `772`,
    1421: `773`,
    1422: `774`,
    1423: `774`,
    1424: `775`,
    1425: `776`,
    1426: `777`,
    1427: `778`,
    1428: `778`,
    1429: `778`,
    143: `21`,
    1430: `779`,
    1431: `779`,
    1432: `779`,
    1433: `780`,
    1434: `781`,
    1435: `781`,
    1436: `782`,
    1437: `782`,
    1438: `782`,
    1439: `782`,
    144: `21`,
    1440: `782`,
    1441: `782`,
    1442: `782`,
    1443: `782`,
    1444: `782`,
    1445: `782`,
    1446: `783`,
    1447: `783`,
    1448: `784`,
    1449: `785`,
    145: `21`,
    1450: `786`,
    1451: `786`,
    1452: `787`,
    1453: `787`,
    1454: `788`,
    1455: `789`,
    1456: `789`,
    1457: `790`,
    1458: `791`,
    1459: `792`,
    146: `21`,
    1460: `793`,
    1461: `797`,
    1462: `797`,
    1463: `798`,
    1464: `798`,
    1465: `798`,
    1466: `799`,
    1467: `800`,
    1468: `804`,
    1469: `805`,
    147: `21`,
    1470: `805`,
    1471: `806`,
    1472: `806`,
    1473: `806`,
    1474: `806`,
    1475: `806`,
    1476: `806`,
    1477: `806`,
    1478: `806`,
    1479: `806`,
    148: `21`,
    1480: `806`,
    1481: `807`,
    1482: `807`,
    1483: `808`,
    1484: `809`,
    1485: `809`,
    1486: `809`,
    1487: `810`,
    1488: `811`,
    1489: `812`,
    149: `21`,
    1490: `812`,
    1491: `813`,
    1492: `814`,
    1493: `814`,
    1494: `814`,
    1495: `815`,
    1496: `815`,
    1497: `816`,
    1498: `816`,
    1499: `817`,
    15: `2`,
    150: `21`,
    1500: `817`,
    1501: `817`,
    1502: `818`,
    1503: `818`,
    1504: `819`,
    1505: `819`,
    1506: `819`,
    1507: `820`,
    1508: `821`,
    1509: `821`,
    151: `21`,
    1510: `822`,
    1511: `822`,
    1512: `823`,
    1513: `824`,
    1514: `825`,
    1515: `826`,
    1516: `827`,
    1517: `828`,
    1518: `828`,
    1519: `829`,
    152: `21`,
    1520: `829`,
    1521: `830`,
    1522: `831`,
    1523: `832`,
    1524: `833`,
    1525: `834`,
    1526: `835`,
    1527: `835`,
    1528: `836`,
    1529: `836`,
    153: `21`,
    1530: `836`,
    1531: `837`,
    1532: `838`,
    1533: `838`,
    1534: `839`,
    1535: `839`,
    1536: `839`,
    1537: `840`,
    1538: `841`,
    1539: `841`,
    154: `21`,
    1540: `842`,
    1541: `842`,
    1542: `842`,
    1543: `843`,
    1544: `844`,
    1545: `844`,
    1546: `845`,
    1547: `845`,
    1548: `845`,
    1549: `846`,
    155: `21`,
    1550: `847`,
    1551: `847`,
    1552: `848`,
    1553: `848`,
    1554: `848`,
    1555: `849`,
    1556: `850`,
    1557: `850`,
    1558: `851`,
    1559: `851`,
    156: `21`,
    1560: `851`,
    1561: `852`,
    1562: `853`,
    1563: `853`,
    1564: `854`,
    1565: `854`,
    1566: `855`,
    1567: `855`,
    1568: `856`,
    1569: `856`,
    157: `22`,
    1570: `856`,
    1571: `858`,
    1572: `858`,
    1573: `859`,
    1574: `859`,
    1575: `859`,
    1576: `860`,
    1577: `860`,
    1578: `861`,
    1579: `861`,
    158: `22`,
    1580: `862`,
    1581: `862`,
    1582: `862`,
    1583: `863`,
    1584: `863`,
    1585: `864`,
    1586: `864`,
    1587: `865`,
    1588: `865`,
    1589: `865`,
    159: `22`,
    1590: `866`,
    1591: `866`,
    1592: `867`,
    1593: `867`,
    1594: `868`,
    1595: `868`,
    1596: `869`,
    1597: `870`,
    1598: `870`,
    1599: `871`,
    16: `2`,
    160: `23`,
    1600: `871`,
    1601: `872`,
    1602: `872`,
    1603: `873`,
    1604: `874`,
    1605: `874`,
    1606: `875`,
    1607: `876`,
    1608: `876`,
    1609: `878`,
    161: `23`,
    1610: `879`,
    1611: `879`,
    1612: `880`,
    1613: `881`,
    1614: `882`,
    1615: `882`,
    1616: `883`,
    1617: `884`,
    1618: `885`,
    1619: `885`,
    162: `23`,
    1620: `885`,
    1621: `886`,
    1622: `887`,
    1623: `887`,
    1624: `888`,
    1625: `889`,
    1626: `890`,
    1627: `891`,
    1628: `892`,
    1629: `898`,
    163: `23`,
    1630: `899`,
    1631: `899`,
    1632: `900`,
    1633: `901`,
    1634: `902`,
    1635: `903`,
    1636: `903`,
    1637: `904`,
    1638: `904`,
    1639: `905`,
    164: `23`,
    1640: `906`,
    1641: `907`,
    1642: `908`,
    1643: `908`,
    1644: `908`,
    1645: `909`,
    1646: `910`,
    1647: `910`,
    1648: `911`,
    1649: `912`,
    165: `23`,
    1650: `913`,
    1651: `913`,
    1652: `913`,
    1653: `913`,
    1654: `913`,
    1655: `913`,
    1656: `914`,
    1657: `914`,
    1658: `914`,
    1659: `916`,
    166: `23`,
    1660: `916`,
    1661: `917`,
    1662: `917`,
    1663: `917`,
    1664: `918`,
    1665: `918`,
    1666: `919`,
    1667: `919`,
    1668: `920`,
    1669: `920`,
    167: `23`,
    1670: `920`,
    1671: `921`,
    1672: `921`,
    1673: `922`,
    1674: `922`,
    1675: `923`,
    1676: `923`,
    1677: `924`,
    1678: `925`,
    1679: `925`,
    168: `23`,
    1680: `926`,
    1681: `927`,
    1682: `927`,
    1683: `929`,
    1684: `930`,
    1685: `930`,
    1686: `931`,
    1687: `932`,
    1688: `933`,
    1689: `933`,
    169: `23`,
    1690: `934`,
    1691: `935`,
    1692: `936`,
    1693: `936`,
    1694: `936`,
    1695: `937`,
    1696: `938`,
    1697: `939`,
    1698: `940`,
    1699: `941`,
    17: `2`,
    170: `23`,
    1700: `946`,
    1701: `946`,
    1702: `947`,
    1703: `947`,
    1704: `948`,
    1705: `949`,
    1706: `949`,
    1707: `951`,
    1708: `952`,
    1709: `952`,
    171: `23`,
    1710: `953`,
    1711: `954`,
    1712: `955`,
    1713: `956`,
    1714: `956`,
    1715: `957`,
    1716: `958`,
    1717: `959`,
    1718: `959`,
    1719: `959`,
    172: `23`,
    1720: `960`,
    1721: `961`,
    1722: `961`,
    1723: `962`,
    1724: `963`,
    1725: `964`,
    1726: `965`,
    1727: `966`,
    1728: `971`,
    1729: `971`,
    173: `23`,
    1730: `972`,
    1731: `973`,
    1732: `974`,
    1733: `974`,
    1734: `974`,
    1735: `974`,
    1736: `974`,
    1737: `974`,
    1738: `975`,
    1739: `975`,
    174: `23`,
    1740: `975`,
    1741: `977`,
    1742: `977`,
    1743: `978`,
    1744: `978`,
    1745: `979`,
    1746: `980`,
    1747: `983`,
    1748: `983`,
    1749: `983`,
    175: `23`,
    1750: `984`,
    1751: `984`,
    1752: `985`,
    1753: `987`,
    1754: `988`,
    1755: `988`,
    1756: `989`,
    1757: `990`,
    1758: `991`,
    1759: `992`,
    176: `23`,
    1760: `992`,
    1761: `993`,
    1762: `993`,
    1763: `994`,
    1764: `995`,
    1765: `996`,
    1766: `997`,
    1767: `997`,
    1768: `997`,
    1769: `998`,
    177: `23`,
    1770: `998`,
    1771: `998`,
    1772: `999`,
    1773: `999`,
    1774: `1001`,
    1775: `1001`,
    1776: `1002`,
    1777: `1003`,
    1778: `1004`,
    1779: `1006`,
    178: `23`,
    1780: `1006`,
    1781: `1006`,
    1782: `1008`,
    1783: `1008`,
    1784: `1009`,
    1785: `1009`,
    1786: `1010`,
    1787: `1011`,
    1788: `1014`,
    1789: `1014`,
    179: `23`,
    1790: `1014`,
    1791: `1015`,
    1792: `1015`,
    1793: `1016`,
    1794: `1016`,
    1795: `1016`,
    1796: `1017`,
    1797: `1017`,
    1798: `1018`,
    1799: `1018`,
    18: `2`,
    180: `23`,
    1800: `1018`,
    1801: `1019`,
    1802: `1020`,
    1803: `1020`,
    1804: `1021`,
    1805: `1021`,
    1806: `1021`,
    1807: `1022`,
    1808: `1023`,
    1809: `1023`,
    181: `23`,
    1810: `1024`,
    1811: `1024`,
    1812: `1024`,
    1813: `1025`,
    1814: `1026`,
    1815: `1026`,
    1816: `1027`,
    1817: `1027`,
    1818: `1027`,
    1819: `1028`,
    182: `23`,
    1820: `1029`,
    1821: `1029`,
    1822: `1030`,
    1823: `1030`,
    1824: `1030`,
    1825: `1031`,
    1826: `1032`,
    1827: `1032`,
    1828: `1033`,
    1829: `1033`,
    183: `23`,
    1830: `1033`,
    1831: `1034`,
    1832: `1035`,
    1833: `1035`,
    1834: `1036`,
    1835: `1036`,
    1836: `1036`,
    1837: `1037`,
    1838: `1038`,
    1839: `1038`,
    184: `23`,
    1840: `1039`,
    1841: `1039`,
    1842: `1039`,
    1843: `1040`,
    1844: `1041`,
    1845: `1041`,
    1846: `1042`,
    1847: `1042`,
    1848: `1042`,
    1849: `1044`,
    185: `23`,
    1850: `1044`,
    1851: `1045`,
    1852: `1045`,
    1853: `1046`,
    1854: `1047`,
    1855: `1050`,
    1856: `1050`,
    1857: `1050`,
    1858: `1051`,
    1859: `1051`,
    186: `23`,
    1860: `1052`,
    1861: `1054`,
    1862: `1055`,
    1863: `1055`,
    1864: `1056`,
    1865: `1057`,
    1866: `1058`,
    1867: `1058`,
    1868: `1059`,
    1869: `1059`,
    187: `23`,
    1870: `1060`,
    1871: `1061`,
    1872: `1061`,
    1873: `1062`,
    1874: `1063`,
    1875: `1064`,
    1876: `1065`,
    1877: `1065`,
    1878: `1065`,
    1879: `1066`,
    188: `25`,
    1880: `1066`,
    1881: `1066`,
    1882: `1067`,
    1883: `1067`,
    1884: `1068`,
    1885: `1068`,
    1886: `1068`,
    1887: `1070`,
    1888: `1070`,
    1889: `1071`,
    189: `27`,
    1890: `1072`,
    1891: `1072`,
    1892: `1073`,
    1893: `1073`,
    1894: `1073`,
    1895: `1073`,
    1896: `1073`,
    1897: `1073`,
    1898: `1074`,
    1899: `1074`,
    19: `2`,
    190: `27`,
    1900: `1075`,
    1901: `1076`,
    1902: `1077`,
    1903: `1079`,
    1904: `1079`,
    1905: `1080`,
    1906: `1080`,
    1907: `1080`,
    1908: `1082`,
    1909: `1082`,
    191: `27`,
    1910: `1083`,
    1911: `1084`,
    1912: `1085`,
    1913: `1085`,
    1914: `1087`,
    1915: `1087`,
    1916: `1088`,
    1917: `1088`,
    1918: `1089`,
    1919: `1089`,
    192: `28`,
    1920: `1090`,
    1921: `1090`,
    1922: `1091`,
    1923: `1091`,
    1924: `1091`,
    1925: `1092`,
    1926: `1093`,
    1927: `1093`,
    1928: `1094`,
    1929: `1095`,
    193: `28`,
    1930: `1095`,
    1931: `1095`,
    1932: `1096`,
    1933: `1097`,
    1934: `1098`,
    1935: `1098`,
    1936: `1099`,
    1937: `1100`,
    1938: `1100`,
    1939: `1101`,
    194: `28`,
    1940: `1102`,
    1941: `1103`,
    1942: `1104`,
    1943: `1104`,
    1944: `1105`,
    1945: `1106`,
    1946: `1107`,
    1947: `1109`,
    1948: `1109`,
    1949: `1109`,
    195: `29`,
    1950: `1110`,
    1951: `1110`,
    1952: `1110`,
    1953: `1112`,
    1954: `1113`,
    1955: `1113`,
    1956: `1114`,
    1957: `1115`,
    1958: `1117`,
    1959: `1117`,
    196: `29`,
    1960: `1118`,
    1961: `1119`,
    1962: `1120`,
    1963: `1120`,
    1964: `1121`,
    1965: `1121`,
    1966: `1122`,
    1967: `1123`,
    1968: `1124`,
    1969: `1124`,
    197: `30`,
    1970: `1125`,
    1971: `1125`,
    1972: `1126`,
    1973: `1126`,
    1974: `1127`,
    1975: `1128`,
    1976: `1128`,
    1977: `1129`,
    1978: `1129`,
    1979: `1129`,
    198: `30`,
    1980: `1129`,
    1981: `1129`,
    1982: `1129`,
    1983: `1130`,
    1984: `1130`,
    1985: `1131`,
    1986: `1132`,
    1987: `1133`,
    1988: `1133`,
    1989: `1134`,
    199: `32`,
    1990: `1135`,
    1991: `1136`,
    1992: `1136`,
    1993: `1137`,
    1994: `1138`,
    1995: `1139`,
    1996: `1141`,
    1997: `1141`,
    1998: `1142`,
    1999: `1142`,
    2: `2`,
    20: `2`,
    200: `33`,
    2000: `1142`,
    2001: `1143`,
    2002: `1143`,
    2003: `1144`,
    2004: `1144`,
    2005: `1145`,
    2006: `1146`,
    2007: `1146`,
    2008: `1147`,
    2009: `1147`,
    201: `34`,
    2010: `1148`,
    2011: `1149`,
    2012: `1149`,
    2013: `1150`,
    2014: `1151`,
    2015: `1152`,
    2016: `1152`,
    2017: `1153`,
    2018: `1154`,
    2019: `1154`,
    202: `34`,
    2020: `1155`,
    2021: `1156`,
    2022: `1157`,
    2023: `1158`,
    2024: `1158`,
    2025: `1159`,
    2026: `1159`,
    2027: `1160`,
    2028: `1161`,
    2029: `1161`,
    203: `35`,
    2030: `1162`,
    2031: `1163`,
    2032: `1163`,
    2033: `1164`,
    2034: `1165`,
    2035: `1165`,
    2036: `1166`,
    2037: `1167`,
    2038: `1168`,
    2039: `1168`,
    204: `35`,
    2040: `1169`,
    2041: `1170`,
    2042: `1171`,
    2043: `1171`,
    2044: `1172`,
    2045: `1173`,
    2046: `1173`,
    2047: `1174`,
    2048: `1174`,
    2049: `1176`,
    205: `36`,
    2050: `1176`,
    2051: `1177`,
    2052: `1178`,
    2053: `1178`,
    2054: `1179`,
    2055: `1179`,
    2056: `1180`,
    2057: `1180`,
    2058: `1181`,
    2059: `1182`,
    206: `36`,
    2060: `1182`,
    2061: `1183`,
    2062: `1184`,
    2063: `1185`,
    2064: `1185`,
    2065: `1186`,
    2066: `1189`,
    2067: `1189`,
    2068: `1190`,
    2069: `1191`,
    207: `37`,
    2070: `1191`,
    2071: `1192`,
    2072: `1193`,
    2073: `1193`,
    2074: `1194`,
    2075: `1195`,
    2076: `1196`,
    2077: `1197`,
    2078: `1197`,
    2079: `1197`,
    208: `38`,
    2080: `1198`,
    2081: `1198`,
    2082: `1198`,
    2083: `1199`,
    2084: `1200`,
    2085: `1200`,
    2086: `1201`,
    2087: `1201`,
    2088: `1201`,
    2089: `1201`,
    209: `39`,
    2090: `1201`,
    2091: `1201`,
    2092: `1201`,
    2093: `1201`,
    2094: `1201`,
    2095: `1201`,
    2096: `1202`,
    2097: `1202`,
    2098: `1203`,
    2099: `1204`,
    21: `2`,
    210: `39`,
    2100: `1205`,
    2101: `1205`,
    2102: `1206`,
    2103: `1206`,
    2104: `1207`,
    2105: `1208`,
    2106: `1208`,
    2107: `1209`,
    2108: `1210`,
    2109: `1211`,
    211: `40`,
    2110: `1212`,
    2111: `1215`,
    2112: `1215`,
    2113: `1216`,
    2114: `1216`,
    2115: `1216`,
    2116: `1217`,
    2117: `1218`,
    2118: `1221`,
    2119: `1221`,
    212: `41`,
    2120: `1222`,
    2121: `1222`,
    2122: `1223`,
    2123: `1224`,
    2124: `1225`,
    2125: `1226`,
    2126: `1227`,
    2127: `1228`,
    2128: `1229`,
    2129: `1230`,
    213: `42`,
    2130: `1231`,
    2131: `1232`,
    2132: `1233`,
    2133: `1234`,
    2134: `1235`,
    2135: `1236`,
    2136: `1237`,
    2137: `1238`,
    2138: `1239`,
    2139: `1240`,
    214: `43`,
    2140: `1241`,
    2141: `1242`,
    2142: `1242`,
    2143: `1243`,
    2144: `1244`,
    2145: `1245`,
    2146: `1246`,
    2147: `1247`,
    2148: `1248`,
    2149: `1248`,
    215: `43`,
    2150: `1249`,
    2151: `1249`,
    2152: `1250`,
    2153: `1250`,
    2154: `1251`,
    2155: `1251`,
    2156: `1251`,
    2157: `1253`,
    2158: `1253`,
    2159: `1253`,
    216: `45`,
    2160: `1254`,
    2161: `1254`,
    2162: `1254`,
    2163: `1254`,
    2164: `1255`,
    2165: `1255`,
    2166: `1255`,
    2167: `1256`,
    2168: `1256`,
    2169: `1256`,
    217: `45`,
    2170: `1257`,
    2171: `1257`,
    2172: `1258`,
    2173: `1258`,
    2174: `1258`,
    2175: `1260`,
    2176: `1260`,
    2177: `1260`,
    2178: `1261`,
    2179: `1261`,
    218: `46`,
    2180: `1261`,
    2181: `1262`,
    2182: `1262`,
    2183: `1263`,
    2184: `1263`,
    2185: `1263`,
    2186: `1265`,
    2187: `1265`,
    2188: `1265`,
    2189: `1266`,
    219: `46`,
    2190: `1266`,
    2191: `1266`,
    2192: `1267`,
    2193: `1267`,
    2194: `1268`,
    2195: `1268`,
    2196: `1268`,
    2197: `1270`,
    2198: `1271`,
    2199: `1271`,
    22: `2`,
    220: `47`,
    2200: `1272`,
    2201: `1273`,
    2202: `1274`,
    2203: `1274`,
    2204: `1275`,
    2205: `1275`,
    2206: `1276`,
    2207: `1277`,
    2208: `1278`,
    2209: `1279`,
    221: `48`,
    2210: `1279`,
    2211: `1280`,
    2212: `1281`,
    2213: `1282`,
    2214: `1283`,
    2215: `1283`,
    2216: `1284`,
    2217: `1285`,
    2218: `1286`,
    2219: `1286`,
    222: `49`,
    2220: `1286`,
    2221: `1287`,
    2222: `1287`,
    2223: `1288`,
    2224: `1289`,
    2225: `1290`,
    2226: `1291`,
    2227: `1291`,
    2228: `1291`,
    2229: `1293`,
    223: `49`,
    2230: `1293`,
    2231: `1293`,
    2232: `1295`,
    2233: `1295`,
    2234: `1295`,
    2235: `1297`,
    2236: `1297`,
    2237: `1298`,
    2238: `1298`,
    2239: `1298`,
    224: `49`,
    2240: `1299`,
    2241: `1299`,
    2242: `1300`,
    2243: `1300`,
    2244: `1300`,
    2245: `1302`,
    2246: `1302`,
    2247: `1303`,
    2248: `1303`,
    2249: `1303`,
    225: `50`,
    2250: `1304`,
    2251: `1304`,
    2252: `1305`,
    2253: `1305`,
    2254: `1305`,
    2255: `1307`,
    2256: `1307`,
    2257: `1308`,
    2258: `1308`,
    2259: `1308`,
    226: `50`,
    2260: `1309`,
    2261: `1309`,
    2262: `1310`,
    2263: `1310`,
    2264: `1310`,
    2265: `1312`,
    2266: `1312`,
    2267: `1313`,
    2268: `1318`,
    2269: `1318`,
    227: `51`,
    2270: `1319`,
    2271: `1320`,
    2272: `1321`,
    2273: `1321`,
    2274: `1321`,
    2275: `1321`,
    2276: `1321`,
    2277: `1321`,
    2278: `1322`,
    2279: `1322`,
    228: `52`,
    2280: `1322`,
    2281: `1324`,
    2282: `1325`,
    2283: `1325`,
    2284: `1326`,
    2285: `1326`,
    2286: `1326`,
    2287: `1328`,
    2288: `1328`,
    2289: `1329`,
    229: `53`,
    2290: `1329`,
    2291: `1329`,
    2292: `1330`,
    2293: `1330`,
    2294: `1331`,
    2295: `1332`,
    2296: `1333`,
    2297: `1334`,
    2298: `1334`,
    2299: `1335`,
    23: `2`,
    230: `53`,
    2300: `1335`,
    2301: `1335`,
    2302: `1337`,
    2303: `1337`,
    2304: `1338`,
    2305: `1343`,
    2306: `1343`,
    2307: `1344`,
    2308: `1345`,
    2309: `1346`,
    231: `54`,
    2310: `1346`,
    2311: `1347`,
    2312: `1348`,
    2313: `1349`,
    2314: `1349`,
    2315: `1349`,
    2316: `1350`,
    2317: `1351`,
    2318: `1351`,
    2319: `1352`,
    232: `54`,
    2320: `1352`,
    2321: `1352`,
    2322: `1352`,
    2323: `1352`,
    2324: `1352`,
    2325: `1352`,
    2326: `1352`,
    2327: `1352`,
    2328: `1352`,
    2329: `1353`,
    233: `55`,
    2330: `1353`,
    2331: `1354`,
    2332: `1355`,
    2333: `1355`,
    2334: `1355`,
    2335: `1356`,
    2336: `1357`,
    2337: `1358`,
    2338: `1358`,
    2339: `1359`,
    234: `55`,
    2340: `1360`,
    2341: `1360`,
    2342: `1360`,
    2343: `1361`,
    2344: `1361`,
    2345: `1362`,
    2346: `1363`,
    2347: `1363`,
    2348: `1364`,
    2349: `1365`,
    235: `55`,
    2350: `1366`,
    2351: `1367`,
    2352: `1367`,
    2353: `1368`,
    2354: `1368`,
    2355: `1369`,
    2356: `1370`,
    2357: `1370`,
    2358: `1371`,
    2359: `1372`,
    236: `56`,
    2360: `1372`,
    2361: `1373`,
    2362: `1374`,
    2363: `1374`,
    2364: `1375`,
    2365: `1376`,
    2366: `1377`,
    2367: `1377`,
    2368: `1378`,
    2369: `1379`,
    237: `56`,
    2370: `1380`,
    2371: `1380`,
    2372: `1381`,
    2373: `1382`,
    2374: `1382`,
    2375: `1383`,
    2376: `1383`,
    2377: `1385`,
    2378: `1385`,
    2379: `1386`,
    238: `57`,
    2380: `1387`,
    2381: `1387`,
    2382: `1388`,
    2383: `1388`,
    2384: `1389`,
    2385: `1389`,
    2386: `1390`,
    2387: `1391`,
    2388: `1391`,
    2389: `1392`,
    239: `57`,
    2390: `1393`,
    2391: `1394`,
    2392: `1394`,
    2393: `1395`,
    2394: `1396`,
    2395: `1397`,
    2396: `1397`,
    2397: `1398`,
    2398: `1399`,
    2399: `1400`,
    24: `2`,
    240: `57`,
    2400: `1400`,
    2401: `1401`,
    2402: `1405`,
    2403: `1405`,
    2404: `1406`,
    2405: `1407`,
    2406: `1407`,
    2407: `1408`,
    2408: `1409`,
    2409: `1409`,
    241: `57`,
    2410: `1410`,
    2411: `1411`,
    2412: `1412`,
    2413: `1413`,
    2414: `1413`,
    2415: `1413`,
    2416: `1414`,
    2417: `1414`,
    2418: `1414`,
    2419: `1415`,
    242: `57`,
    2420: `1416`,
    2421: `1416`,
    2422: `1417`,
    2423: `1417`,
    2424: `1417`,
    2425: `1417`,
    2426: `1417`,
    2427: `1417`,
    2428: `1417`,
    2429: `1417`,
    243: `57`,
    2430: `1417`,
    2431: `1417`,
    2432: `1418`,
    2433: `1418`,
    2434: `1419`,
    2435: `1420`,
    2436: `1421`,
    2437: `1421`,
    2438: `1422`,
    2439: `1422`,
    244: `58`,
    2440: `1423`,
    2441: `1424`,
    2442: `1424`,
    2443: `1425`,
    2444: `1426`,
    2445: `1427`,
    2446: `1428`,
    2447: `1432`,
    2448: `1432`,
    2449: `1433`,
    245: `58`,
    2450: `1433`,
    2451: `1433`,
    2452: `1434`,
    2453: `1435`,
    2454: `1439`,
    2455: `1439`,
    2456: `1440`,
    2457: `1440`,
    2458: `1440`,
    2459: `1441`,
    246: `59`,
    2460: `1441`,
    2461: `1442`,
    2462: `1442`,
    2463: `1442`,
    2464: `1443`,
    2465: `1444`,
    2466: `1444`,
    2467: `1445`,
    2468: `1445`,
    2469: `1446`,
    247: `60`,
    2470: `1447`,
    2471: `1448`,
    2472: `1449`,
    2473: `1450`,
    2474: `1451`,
    2475: `1451`,
    2476: `1452`,
    2477: `1452`,
    2478: `1452`,
    2479: `1453`,
    248: `61`,
    2480: `1454`,
    2481: `1454`,
    2482: `1455`,
    2483: `1455`,
    2484: `1455`,
    2485: `1456`,
    2486: `1457`,
    2487: `1457`,
    2488: `1458`,
    2489: `1458`,
    249: `61`,
    2490: `1458`,
    2491: `1459`,
    2492: `1460`,
    2493: `1460`,
    2494: `1461`,
    2495: `1462`,
    2496: `1463`,
    2497: `1463`,
    2498: `1464`,
    2499: `1464`,
    25: `2`,
    250: `62`,
    2500: `1464`,
    2501: `1465`,
    2502: `1466`,
    2503: `1466`,
    2504: `1467`,
    2505: `1467`,
    2506: `1467`,
    2507: `1468`,
    2508: `1469`,
    2509: `1469`,
    251: `63`,
    2510: `1470`,
    2511: `1470`,
    2512: `1470`,
    2513: `1471`,
    2514: `1472`,
    2515: `1472`,
    2516: `1473`,
    2517: `1473`,
    2518: `1474`,
    2519: `1474`,
    252: `65`,
    2520: `1475`,
    2521: `1475`,
    2522: `1475`,
    2523: `1477`,
    2524: `1478`,
    2525: `1478`,
    2526: `1479`,
    2527: `1479`,
    2528: `1479`,
    2529: `1481`,
    253: `65`,
    2530: `1481`,
    2531: `1482`,
    2532: `1482`,
    2533: `1482`,
    2534: `1483`,
    2535: `1483`,
    2536: `1484`,
    2537: `1485`,
    2538: `1486`,
    2539: `1487`,
    254: `66`,
    2540: `1487`,
    2541: `1488`,
    2542: `1488`,
    2543: `1488`,
    2544: `1490`,
    2545: `1490`,
    2546: `1491`,
    2547: `1496`,
    2548: `1496`,
    2549: `1497`,
    255: `66`,
    2550: `1498`,
    2551: `1498`,
    2552: `1499`,
    2553: `1500`,
    2554: `1501`,
    2555: `1501`,
    2556: `1501`,
    2557: `1502`,
    2558: `1502`,
    2559: `1503`,
    256: `66`,
    2560: `1504`,
    2561: `1505`,
    2562: `1505`,
    2563: `1505`,
    2564: `1505`,
    2565: `1505`,
    2566: `1505`,
    2567: `1506`,
    2568: `1506`,
    2569: `1506`,
    257: `67`,
    2570: `1508`,
    2571: `1509`,
    2572: `1509`,
    2573: `1510`,
    2574: `1510`,
    2575: `1510`,
    2576: `1512`,
    2577: `1512`,
    2578: `1513`,
    2579: `1513`,
    258: `67`,
    2580: `1513`,
    2581: `1514`,
    2582: `1514`,
    2583: `1515`,
    2584: `1516`,
    2585: `1517`,
    2586: `1518`,
    2587: `1518`,
    2588: `1519`,
    2589: `1519`,
    259: `68`,
    2590: `1519`,
    2591: `1521`,
    2592: `1522`,
    2593: `1522`,
    2594: `1523`,
    2595: `1524`,
    2596: `1525`,
    2597: `1526`,
    2598: `1526`,
    2599: `1527`,
    26: `2`,
    260: `69`,
    2600: `1527`,
    2601: `1528`,
    2602: `1529`,
    2603: `1529`,
    2604: `1530`,
    2605: `1531`,
    2606: `1531`,
    2607: `1532`,
    2608: `1533`,
    2609: `1533`,
    261: `70`,
    2610: `1534`,
    2611: `1535`,
    2612: `1536`,
    2613: `1536`,
    2614: `1537`,
    2615: `1538`,
    2616: `1539`,
    2617: `1539`,
    2618: `1540`,
    2619: `1541`,
    262: `70`,
    2620: `1541`,
    2621: `1542`,
    2622: `1542`,
    2623: `1544`,
    2624: `1544`,
    2625: `1545`,
    2626: `1546`,
    2627: `1546`,
    2628: `1547`,
    2629: `1547`,
    263: `70`,
    2630: `1548`,
    2631: `1548`,
    2632: `1549`,
    2633: `1550`,
    2634: `1550`,
    2635: `1551`,
    2636: `1552`,
    2637: `1553`,
    2638: `1553`,
    2639: `1554`,
    264: `70`,
    2640: `1555`,
    2641: `1555`,
    2642: `1556`,
    2643: `1557`,
    2644: `1558`,
    2645: `1558`,
    2646: `1559`,
    2647: `1560`,
    2648: `1561`,
    2649: `1561`,
    265: `70`,
    2650: `1562`,
    2651: `1566`,
    2652: `1566`,
    2653: `1567`,
    2654: `1568`,
    2655: `1568`,
    2656: `1569`,
    2657: `1570`,
    2658: `1570`,
    2659: `1571`,
    266: `70`,
    2660: `1572`,
    2661: `1573`,
    2662: `1574`,
    2663: `1574`,
    2664: `1574`,
    2665: `1575`,
    2666: `1575`,
    2667: `1575`,
    2668: `1576`,
    2669: `1577`,
    267: `70`,
    2670: `1577`,
    2671: `1578`,
    2672: `1578`,
    2673: `1578`,
    2674: `1578`,
    2675: `1578`,
    2676: `1578`,
    2677: `1578`,
    2678: `1578`,
    2679: `1578`,
    268: `70`,
    2680: `1578`,
    2681: `1579`,
    2682: `1579`,
    2683: `1580`,
    2684: `1581`,
    2685: `1582`,
    2686: `1582`,
    2687: `1583`,
    2688: `1583`,
    2689: `1584`,
    269: `70`,
    2690: `1585`,
    2691: `1585`,
    2692: `1586`,
    2693: `1587`,
    2694: `1588`,
    2695: `1589`,
    2696: `1593`,
    2697: `1593`,
    2698: `1594`,
    2699: `1594`,
    27: `2`,
    270: `70`,
    2700: `1594`,
    2701: `1595`,
    2702: `1596`,
    2703: `1600`,
    2704: `1601`,
    2705: `1601`,
    2706: `1602`,
    2707: `1602`,
    2708: `1602`,
    2709: `1602`,
    271: `70`,
    2710: `1602`,
    2711: `1602`,
    2712: `1602`,
    2713: `1602`,
    2714: `1602`,
    2715: `1602`,
    2716: `1603`,
    2717: `1603`,
    2718: `1604`,
    2719: `1605`,
    272: `70`,
    2720: `1605`,
    2721: `1605`,
    2722: `1606`,
    2723: `1607`,
    2724: `1608`,
    2725: `1608`,
    2726: `1609`,
    2727: `1610`,
    2728: `1610`,
    2729: `1610`,
    273: `70`,
    2730: `1611`,
    2731: `1611`,
    2732: `1612`,
    2733: `1612`,
    2734: `1613`,
    2735: `1613`,
    2736: `1613`,
    2737: `1614`,
    2738: `1614`,
    2739: `1615`,
    274: `70`,
    2740: `1615`,
    2741: `1615`,
    2742: `1616`,
    2743: `1617`,
    2744: `1617`,
    2745: `1618`,
    2746: `1618`,
    2747: `1618`,
    2748: `1619`,
    2749: `1620`,
    275: `70`,
    2750: `1620`,
    2751: `1621`,
    2752: `1621`,
    2753: `1621`,
    2754: `1622`,
    2755: `1623`,
    2756: `1623`,
    2757: `1624`,
    2758: `1624`,
    2759: `1624`,
    276: `70`,
    2760: `1625`,
    2761: `1626`,
    2762: `1626`,
    2763: `1627`,
    2764: `1627`,
    2765: `1627`,
    2766: `1628`,
    2767: `1629`,
    2768: `1629`,
    2769: `1630`,
    277: `71`,
    2770: `1630`,
    2771: `1631`,
    2772: `1632`,
    2773: `1633`,
    2774: `1634`,
    2775: `1635`,
    2776: `1636`,
    2777: `1636`,
    2778: `1637`,
    2779: `1637`,
    278: `71`,
    2780: `1637`,
    2781: `1638`,
    2782: `1639`,
    2783: `1639`,
    2784: `1640`,
    2785: `1640`,
    2786: `1640`,
    2787: `1641`,
    2788: `1642`,
    2789: `1642`,
    279: `71`,
    2790: `1643`,
    2791: `1643`,
    2792: `1643`,
    2793: `1644`,
    2794: `1645`,
    2795: `1645`,
    2796: `1646`,
    2797: `1646`,
    2798: `1647`,
    2799: `1647`,
    28: `2`,
    280: `73`,
    2800: `1648`,
    2801: `1648`,
    2802: `1648`,
    2803: `1650`,
    2804: `1650`,
    2805: `1651`,
    2806: `1651`,
    2807: `1651`,
    2808: `1652`,
    2809: `1652`,
    281: `73`,
    2810: `1653`,
    2811: `1653`,
    2812: `1654`,
    2813: `1655`,
    2814: `1656`,
    2815: `1656`,
    2816: `1657`,
    2817: `1658`,
    2818: `1659`,
    2819: `1659`,
    282: `73`,
    2820: `1660`,
    2821: `1660`,
    2822: `1660`,
    2823: `1661`,
    2824: `1661`,
    2825: `1662`,
    2826: `1662`,
    2827: `1662`,
    2828: `1663`,
    2829: `1664`,
    283: `74`,
    2830: `1664`,
    2831: `1665`,
    2832: `1665`,
    2833: `1665`,
    2834: `1666`,
    2835: `1667`,
    2836: `1667`,
    2837: `1668`,
    2838: `1668`,
    2839: `1669`,
    284: `74`,
    2840: `1670`,
    2841: `1671`,
    2842: `1672`,
    2843: `1673`,
    2844: `1674`,
    2845: `1674`,
    2846: `1675`,
    2847: `1675`,
    2848: `1675`,
    2849: `1676`,
    285: `74`,
    2850: `1677`,
    2851: `1677`,
    2852: `1678`,
    2853: `1678`,
    2854: `1678`,
    2855: `1679`,
    2856: `1680`,
    2857: `1680`,
    2858: `1680`,
    2859: `1681`,
    286: `75`,
    2860: `1682`,
    2861: `1682`,
    2862: `1683`,
    2863: `1684`,
    2864: `1685`,
    2865: `1686`,
    2866: `1686`,
    2867: `1687`,
    2868: `1687`,
    2869: `1688`,
    287: `75`,
    2870: `1689`,
    2871: `1689`,
    2872: `1690`,
    2873: `1691`,
    2874: `1691`,
    2875: `1692`,
    2876: `1693`,
    2877: `1693`,
    2878: `1694`,
    2879: `1695`,
    288: `75`,
    2880: `1696`,
    2881: `1696`,
    2882: `1697`,
    2883: `1698`,
    2884: `1699`,
    2885: `1699`,
    2886: `1700`,
    2887: `1701`,
    2888: `1701`,
    2889: `1702`,
    289: `76`,
    2890: `1702`,
    2891: `1704`,
    2892: `1704`,
    2893: `1705`,
    2894: `1706`,
    2895: `1706`,
    2896: `1707`,
    2897: `1707`,
    2898: `1708`,
    2899: `1708`,
    29: `2`,
    290: `76`,
    2900: `1709`,
    2901: `1710`,
    2902: `1710`,
    2903: `1711`,
    2904: `1712`,
    2905: `1713`,
    2906: `1713`,
    2907: `1714`,
    2908: `1715`,
    2909: `1715`,
    291: `77`,
    2910: `1716`,
    2911: `1717`,
    2912: `1718`,
    2913: `1718`,
    2914: `1719`,
    2915: `1720`,
    2916: `1721`,
    2917: `1721`,
    2918: `1722`,
    2919: `1726`,
    292: `77`,
    2920: `1726`,
    2921: `1727`,
    2922: `1728`,
    2923: `1728`,
    2924: `1729`,
    2925: `1730`,
    2926: `1730`,
    2927: `1731`,
    2928: `1732`,
    2929: `1733`,
    293: `78`,
    2930: `1734`,
    2931: `1734`,
    2932: `1734`,
    2933: `1735`,
    2934: `1735`,
    2935: `1735`,
    2936: `1736`,
    2937: `1737`,
    2938: `1737`,
    2939: `1738`,
    294: `78`,
    2940: `1738`,
    2941: `1738`,
    2942: `1738`,
    2943: `1738`,
    2944: `1738`,
    2945: `1738`,
    2946: `1738`,
    2947: `1738`,
    2948: `1738`,
    2949: `1739`,
    295: `80`,
    2950: `1739`,
    2951: `1740`,
    2952: `1741`,
    2953: `1742`,
    2954: `1742`,
    2955: `1743`,
    2956: `1743`,
    2957: `1744`,
    2958: `1745`,
    2959: `1745`,
    296: `81`,
    2960: `1746`,
    2961: `1747`,
    2962: `1748`,
    2963: `1749`,
    2964: `1753`,
    2965: `1753`,
    2966: `1754`,
    2967: `1754`,
    2968: `1754`,
    2969: `1755`,
    297: `82`,
    2970: `1756`,
    2971: `1760`,
    2972: `1761`,
    2973: `1761`,
    2974: `1762`,
    2975: `1762`,
    2976: `1762`,
    2977: `1762`,
    2978: `1762`,
    2979: `1762`,
    298: `82`,
    2980: `1762`,
    2981: `1762`,
    2982: `1762`,
    2983: `1762`,
    2984: `1763`,
    2985: `1763`,
    2986: `1764`,
    2987: `1765`,
    2988: `1765`,
    2989: `1765`,
    299: `83`,
    2990: `1766`,
    2991: `1767`,
    2992: `1768`,
    2993: `1768`,
    2994: `1769`,
    2995: `1770`,
    2996: `1770`,
    2997: `1770`,
    2998: `1771`,
    2999: `1771`,
    3: `2`,
    30: `2`,
    300: `83`,
    3000: `1772`,
    3001: `1772`,
    3002: `1773`,
    3003: `1773`,
    3004: `1773`,
    3005: `1774`,
    3006: `1774`,
    3007: `1775`,
    3008: `1775`,
    3009: `1775`,
    301: `84`,
    3010: `1776`,
    3011: `1777`,
    3012: `1777`,
    3013: `1778`,
    3014: `1778`,
    3015: `1778`,
    3016: `1779`,
    3017: `1780`,
    3018: `1780`,
    3019: `1781`,
    302: `84`,
    3020: `1781`,
    3021: `1781`,
    3022: `1782`,
    3023: `1783`,
    3024: `1783`,
    3025: `1784`,
    3026: `1784`,
    3027: `1784`,
    3028: `1785`,
    3029: `1786`,
    303: `85`,
    3030: `1786`,
    3031: `1787`,
    3032: `1787`,
    3033: `1787`,
    3034: `1788`,
    3035: `1789`,
    3036: `1789`,
    3037: `1790`,
    3038: `1790`,
    3039: `1791`,
    304: `86`,
    3040: `1792`,
    3041: `1793`,
    3042: `1794`,
    3043: `1795`,
    3044: `1796`,
    3045: `1796`,
    3046: `1797`,
    3047: `1797`,
    3048: `1797`,
    3049: `1798`,
    305: `86`,
    3050: `1799`,
    3051: `1799`,
    3052: `1800`,
    3053: `1800`,
    3054: `1800`,
    3055: `1801`,
    3056: `1802`,
    3057: `1802`,
    3058: `1803`,
    3059: `1803`,
    306: `87`,
    3060: `1803`,
    3061: `1804`,
    3062: `1805`,
    3063: `1805`,
    3064: `1806`,
    3065: `1806`,
    3066: `1807`,
    3067: `1807`,
    3068: `1808`,
    3069: `1808`,
    307: `88`,
    3070: `1808`,
    3071: `1810`,
    3072: `1810`,
    3073: `1811`,
    3074: `1812`,
    3075: `1812`,
    3076: `1813`,
    3077: `1813`,
    3078: `1813`,
    3079: `1814`,
    308: `89`,
    3080: `1815`,
    3081: `1815`,
    3082: `1816`,
    3083: `1817`,
    3084: `1818`,
    3085: `1818`,
    3086: `1819`,
    3087: `1819`,
    3088: `1820`,
    3089: `1820`,
    309: `90`,
    3090: `1821`,
    3091: `1822`,
    3092: `1827`,
    3093: `1827`,
    3094: `1828`,
    3095: `1829`,
    3096: `1830`,
    3097: `1830`,
    3098: `1831`,
    3099: `1831`,
    31: `2`,
    310: `91`,
    3100: `1832`,
    3101: `1833`,
    3102: `1834`,
    3103: `1834`,
    3104: `1834`,
    3105: `1834`,
    3106: `1834`,
    3107: `1834`,
    3108: `1835`,
    3109: `1835`,
    311: `92`,
    3110: `1835`,
    3111: `1837`,
    3112: `1838`,
    3113: `1838`,
    3114: `1839`,
    3115: `1839`,
    3116: `1839`,
    3117: `1841`,
    3118: `1841`,
    3119: `1842`,
    312: `93`,
    3120: `1842`,
    3121: `1842`,
    3122: `1843`,
    3123: `1844`,
    3124: `1845`,
    3125: `1845`,
    3126: `1846`,
    3127: `1847`,
    3128: `1847`,
    3129: `1848`,
    313: `93`,
    3130: `1848`,
    3131: `1848`,
    3132: `1850`,
    3133: `1850`,
    3134: `1851`,
    3135: `1851`,
    3136: `1852`,
    3137: `1852`,
    3138: `1853`,
    3139: `1854`,
    314: `94`,
    3140: `1855`,
    3141: `1859`,
    3142: `1859`,
    3143: `1860`,
    3144: `1861`,
    3145: `1862`,
    3146: `1862`,
    3147: `1862`,
    3148: `1862`,
    3149: `1862`,
    315: `94`,
    3150: `1862`,
    3151: `1863`,
    3152: `1863`,
    3153: `1863`,
    3154: `1865`,
    3155: `1866`,
    3156: `1866`,
    3157: `1867`,
    3158: `1867`,
    3159: `1867`,
    316: `94`,
    3160: `1869`,
    3161: `1869`,
    3162: `1870`,
    3163: `1870`,
    3164: `1871`,
    3165: `1871`,
    3166: `1871`,
    3167: `1872`,
    3168: `1872`,
    3169: `1873`,
    317: `97`,
    3170: `1874`,
    3171: `1875`,
    3172: `1875`,
    3173: `1876`,
    3174: `1876`,
    3175: `1876`,
    3176: `1878`,
    3177: `1879`,
    3178: `1879`,
    3179: `1880`,
    318: `97`,
    3180: `1881`,
    3181: `1882`,
    3182: `1883`,
    3183: `1883`,
    3184: `1884`,
    3185: `1884`,
    3186: `1885`,
    3187: `1886`,
    3188: `1886`,
    3189: `1887`,
    319: `97`,
    3190: `1888`,
    3191: `1888`,
    3192: `1889`,
    3193: `1890`,
    3194: `1890`,
    3195: `1891`,
    3196: `1892`,
    3197: `1893`,
    3198: `1893`,
    3199: `1894`,
    32: `2`,
    320: `97`,
    3200: `1895`,
    3201: `1896`,
    3202: `1896`,
    3203: `1897`,
    3204: `1898`,
    3205: `1898`,
    3206: `1899`,
    3207: `1899`,
    3208: `1901`,
    3209: `1901`,
    321: `97`,
    3210: `1902`,
    3211: `1902`,
    3212: `1902`,
    3213: `1902`,
    3214: `1902`,
    3215: `1902`,
    3216: `1903`,
    3217: `1903`,
    3218: `1904`,
    3219: `1904`,
    322: `97`,
    3220: `1906`,
    3221: `1907`,
    3222: `1907`,
    3223: `1908`,
    3224: `1908`,
    3225: `1909`,
    3226: `1909`,
    3227: `1911`,
    3228: `1912`,
    3229: `1912`,
    323: `97`,
    3230: `1913`,
    3231: `1913`,
    3232: `1914`,
    3233: `1914`,
    3234: `1915`,
    3235: `1916`,
    3236: `1916`,
    3237: `1920`,
    3238: `1920`,
    3239: `1921`,
    324: `97`,
    3240: `1921`,
    3241: `1922`,
    3242: `1926`,
    3243: `1926`,
    3244: `1927`,
    3245: `1928`,
    3246: `1928`,
    3247: `1929`,
    3248: `1930`,
    3249: `1930`,
    325: `97`,
    3250: `1931`,
    3251: `1932`,
    3252: `1933`,
    3253: `1934`,
    3254: `1934`,
    3255: `1934`,
    3256: `1935`,
    3257: `1935`,
    3258: `1935`,
    3259: `1936`,
    326: `97`,
    3260: `1937`,
    3261: `1937`,
    3262: `1938`,
    3263: `1938`,
    3264: `1938`,
    3265: `1938`,
    3266: `1938`,
    3267: `1938`,
    3268: `1938`,
    3269: `1938`,
    327: `97`,
    3270: `1938`,
    3271: `1938`,
    3272: `1939`,
    3273: `1939`,
    3274: `1940`,
    3275: `1941`,
    3276: `1942`,
    3277: `1942`,
    3278: `1943`,
    3279: `1943`,
    328: `97`,
    3280: `1944`,
    3281: `1945`,
    3282: `1945`,
    3283: `1946`,
    3284: `1947`,
    3285: `1948`,
    3286: `1949`,
    3287: `1953`,
    3288: `1953`,
    3289: `1954`,
    329: `97`,
    3290: `1954`,
    3291: `1954`,
    3292: `1955`,
    3293: `1956`,
    3294: `1960`,
    3295: `1960`,
    3296: `1961`,
    3297: `1962`,
    3298: `1962`,
    3299: `1963`,
    33: `2`,
    330: `97`,
    3300: `1964`,
    3301: `1965`,
    3302: `1965`,
    3303: `1966`,
    3304: `1967`,
    3305: `1967`,
    3306: `1968`,
    3307: `1969`,
    3308: `1969`,
    3309: `1970`,
    331: `97`,
    3310: `1971`,
    3311: `1971`,
    3312: `1972`,
    3313: `1973`,
    3314: `1974`,
    3315: `1974`,
    3316: `1975`,
    3317: `1975`,
    3318: `1975`,
    3319: `1975`,
    332: `97`,
    3320: `1975`,
    3321: `1975`,
    3322: `1976`,
    3323: `1976`,
    3324: `1977`,
    3325: `1978`,
    3326: `1980`,
    3327: `1980`,
    3328: `1981`,
    3329: `1982`,
    333: `97`,
    3330: `1983`,
    3331: `1983`,
    3332: `1983`,
    3333: `1983`,
    3334: `1983`,
    3335: `1983`,
    3336: `1984`,
    3337: `1984`,
    3338: `1984`,
    3339: `1986`,
    334: `97`,
    3340: `1987`,
    3341: `1987`,
    3342: `1988`,
    3343: `1988`,
    3344: `1988`,
    3345: `1990`,
    3346: `1990`,
    3347: `1991`,
    3348: `1991`,
    3349: `1991`,
    335: `97`,
    3350: `1992`,
    3351: `1993`,
    3352: `1994`,
    3353: `1994`,
    3354: `1995`,
    3355: `1996`,
    3356: `1996`,
    3357: `1997`,
    3358: `1997`,
    3359: `1997`,
    336: `97`,
    3360: `1999`,
    3361: `1999`,
    3362: `2000`,
    3363: `2001`,
    3364: `2002`,
    3365: `2002`,
    3366: `2002`,
    3367: `2002`,
    3368: `2002`,
    3369: `2002`,
    337: `97`,
    3370: `2003`,
    3371: `2003`,
    3372: `2003`,
    3373: `2005`,
    3374: `2006`,
    3375: `2006`,
    3376: `2007`,
    3377: `2007`,
    3378: `2007`,
    3379: `2009`,
    338: `97`,
    3380: `2009`,
    3381: `2010`,
    3382: `2010`,
    3383: `2010`,
    3384: `2011`,
    3385: `2012`,
    3386: `2013`,
    3387: `2013`,
    3388: `2014`,
    3389: `2015`,
    339: `97`,
    3390: `2015`,
    3391: `2016`,
    3392: `2016`,
    3393: `2016`,
    3394: `2018`,
    3395: `2018`,
    3396: `2019`,
    3397: `2020`,
    3398: `2020`,
    3399: `2021`,
    34: `2`,
    340: `97`,
    3400: `2022`,
    3401: `2023`,
    3402: `2023`,
    3403: `2024`,
    3404: `2024`,
    3405: `2025`,
    3406: `2026`,
    3407: `2027`,
    3408: `2027`,
    3409: `2028`,
    341: `97`,
    3410: `2028`,
    3411: `2029`,
    3412: `2030`,
    3413: `2031`,
    3414: `2032`,
    3415: `2032`,
    3416: `2033`,
    3417: `2034`,
    3418: `2034`,
    3419: `2034`,
    342: `97`,
    3420: `2035`,
    3421: `2036`,
    3422: `2036`,
    3423: `2037`,
    3424: `2037`,
    3425: `2037`,
    3426: `2037`,
    3427: `2037`,
    3428: `2037`,
    3429: `2037`,
    343: `97`,
    3430: `2037`,
    3431: `2037`,
    3432: `2037`,
    3433: `2038`,
    3434: `2038`,
    3435: `2039`,
    3436: `2040`,
    3437: `2040`,
    3438: `2040`,
    3439: `2041`,
    344: `97`,
    3440: `2042`,
    3441: `2043`,
    3442: `2043`,
    3443: `2044`,
    3444: `2045`,
    3445: `2045`,
    3446: `2045`,
    3447: `2046`,
    3448: `2046`,
    3449: `2047`,
    345: `97`,
    3450: `2047`,
    3451: `2048`,
    3452: `2049`,
    3453: `2050`,
    3454: `2050`,
    3455: `2050`,
    3456: `2050`,
    3457: `2050`,
    3458: `2050`,
    3459: `2051`,
    346: `97`,
    3460: `2051`,
    3461: `2051`,
    3462: `2053`,
    3463: `2054`,
    3464: `2054`,
    3465: `2055`,
    3466: `2055`,
    3467: `2055`,
    3468: `2057`,
    3469: `2057`,
    347: `97`,
    3470: `2058`,
    3471: `2058`,
    3472: `2059`,
    3473: `2059`,
    3474: `2059`,
    3475: `2060`,
    3476: `2060`,
    3477: `2061`,
    3478: `2062`,
    3479: `2063`,
    348: `97`,
    3480: `2063`,
    3481: `2064`,
    3482: `2064`,
    3483: `2064`,
    3484: `2066`,
    3485: `2066`,
    3486: `2067`,
    3487: `2067`,
    3488: `2067`,
    3489: `2068`,
    349: `97`,
    3490: `2068`,
    3491: `2069`,
    3492: `2069`,
    3493: `2069`,
    3494: `2070`,
    3495: `2071`,
    3496: `2071`,
    3497: `2072`,
    3498: `2072`,
    3499: `2072`,
    35: `2`,
    350: `97`,
    3500: `2073`,
    3501: `2074`,
    3502: `2074`,
    3503: `2075`,
    3504: `2075`,
    3505: `2075`,
    3506: `2076`,
    3507: `2077`,
    3508: `2077`,
    3509: `2078`,
    351: `97`,
    3510: `2078`,
    3511: `2079`,
    3512: `2080`,
    3513: `2080`,
    3514: `2081`,
    3515: `2082`,
    3516: `2083`,
    3517: `2084`,
    3518: `2084`,
    3519: `2085`,
    352: `97`,
    3520: `2085`,
    3521: `2085`,
    3522: `2086`,
    3523: `2087`,
    3524: `2087`,
    3525: `2088`,
    3526: `2088`,
    3527: `2088`,
    3528: `2089`,
    3529: `2090`,
    353: `97`,
    3530: `2090`,
    3531: `2091`,
    3532: `2091`,
    3533: `2091`,
    3534: `2092`,
    3535: `2093`,
    3536: `2093`,
    3537: `2094`,
    3538: `2094`,
    3539: `2094`,
    354: `97`,
    3540: `2095`,
    3541: `2096`,
    3542: `2096`,
    3543: `2097`,
    3544: `2097`,
    3545: `2097`,
    3546: `2098`,
    3547: `2099`,
    3548: `2099`,
    3549: `2100`,
    355: `97`,
    3550: `2100`,
    3551: `2101`,
    3552: `2101`,
    3553: `2102`,
    3554: `2102`,
    3555: `2102`,
    3556: `2104`,
    3557: `2105`,
    3558: `2105`,
    3559: `2106`,
    356: `97`,
    3560: `2106`,
    3561: `2106`,
    3562: `2108`,
    3563: `2108`,
    3564: `2109`,
    3565: `2109`,
    3566: `2109`,
    3567: `2110`,
    3568: `2111`,
    3569: `2112`,
    357: `97`,
    3570: `2112`,
    3571: `2113`,
    3572: `2114`,
    3573: `2114`,
    3574: `2115`,
    3575: `2115`,
    3576: `2115`,
    3577: `2117`,
    3578: `2117`,
    3579: `2118`,
    358: `97`,
    3580: `2119`,
    3581: `2119`,
    3582: `2120`,
    3583: `2121`,
    3584: `2122`,
    3585: `2122`,
    3586: `2123`,
    3587: `2124`,
    3588: `2124`,
    3589: `2125`,
    359: `97`,
    3590: `2126`,
    3591: `2127`,
    3592: `2127`,
    3593: `2128`,
    3594: `2129`,
    3595: `2129`,
    3596: `2129`,
    3597: `2130`,
    3598: `2130`,
    3599: `2131`,
    36: `2`,
    360: `97`,
    3600: `2132`,
    3601: `2133`,
    3602: `2133`,
    3603: `2133`,
    3604: `2133`,
    3605: `2133`,
    3606: `2133`,
    3607: `2134`,
    3608: `2134`,
    3609: `2134`,
    361: `97`,
    3610: `2136`,
    3611: `2137`,
    3612: `2137`,
    3613: `2138`,
    3614: `2138`,
    3615: `2138`,
    3616: `2140`,
    3617: `2140`,
    3618: `2141`,
    3619: `2141`,
    362: `97`,
    3620: `2141`,
    3621: `2142`,
    3622: `2143`,
    3623: `2143`,
    3624: `2144`,
    3625: `2145`,
    3626: `2146`,
    3627: `2146`,
    3628: `2147`,
    3629: `2148`,
    363: `97`,
    3630: `2149`,
    3631: `2150`,
    3632: `2150`,
    3633: `2151`,
    3634: `2151`,
    3635: `2151`,
    3636: `2153`,
    3637: `2154`,
    3638: `2154`,
    3639: `2155`,
    364: `97`,
    3640: `2156`,
    3641: `2157`,
    3642: `2158`,
    3643: `2158`,
    3644: `2159`,
    3645: `2159`,
    3646: `2160`,
    3647: `2161`,
    3648: `2161`,
    3649: `2162`,
    365: `97`,
    3650: `2163`,
    3651: `2163`,
    3652: `2164`,
    3653: `2165`,
    3654: `2165`,
    3655: `2166`,
    3656: `2167`,
    3657: `2168`,
    3658: `2168`,
    3659: `2169`,
    366: `97`,
    3660: `2170`,
    3661: `2171`,
    3662: `2171`,
    3663: `2172`,
    3664: `2173`,
    3665: `2173`,
    3666: `2174`,
    3667: `2174`,
    3668: `2176`,
    3669: `2176`,
    367: `97`,
    3670: `2177`,
    3671: `2178`,
    3672: `2178`,
    3673: `2179`,
    3674: `2179`,
    3675: `2180`,
    3676: `2180`,
    3677: `2181`,
    3678: `2182`,
    3679: `2182`,
    368: `97`,
    3680: `2183`,
    3681: `2184`,
    3682: `2185`,
    3683: `2185`,
    3684: `2186`,
    3685: `2187`,
    3686: `2187`,
    3687: `2188`,
    3688: `2189`,
    3689: `2189`,
    369: `97`,
    3690: `2190`,
    3691: `2191`,
    3692: `2192`,
    3693: `2193`,
    3694: `2194`,
    3695: `2195`,
    3696: `2195`,
    3697: `2196`,
    3698: `2200`,
    3699: `2200`,
    37: `2`,
    370: `97`,
    3700: `2201`,
    3701: `2202`,
    3702: `2202`,
    3703: `2203`,
    3704: `2204`,
    3705: `2204`,
    3706: `2205`,
    3707: `2206`,
    3708: `2207`,
    3709: `2208`,
    371: `97`,
    3710: `2208`,
    3711: `2208`,
    3712: `2209`,
    3713: `2209`,
    3714: `2209`,
    3715: `2210`,
    3716: `2211`,
    3717: `2211`,
    3718: `2212`,
    3719: `2212`,
    372: `97`,
    3720: `2212`,
    3721: `2212`,
    3722: `2212`,
    3723: `2212`,
    3724: `2212`,
    3725: `2212`,
    3726: `2212`,
    3727: `2212`,
    3728: `2213`,
    3729: `2213`,
    373: `97`,
    3730: `2214`,
    3731: `2215`,
    3732: `2216`,
    3733: `2216`,
    3734: `2217`,
    3735: `2217`,
    3736: `2218`,
    3737: `2219`,
    3738: `2219`,
    3739: `2220`,
    374: `97`,
    3740: `2221`,
    3741: `2222`,
    3742: `2223`,
    3743: `2227`,
    3744: `2227`,
    3745: `2228`,
    3746: `2228`,
    3747: `2228`,
    3748: `2229`,
    3749: `2230`,
    375: `97`,
    3750: `2234`,
    3751: `2235`,
    3752: `2235`,
    3753: `2236`,
    3754: `2236`,
    3755: `2236`,
    3756: `2236`,
    3757: `2236`,
    3758: `2236`,
    3759: `2236`,
    376: `97`,
    3760: `2236`,
    3761: `2236`,
    3762: `2236`,
    3763: `2237`,
    3764: `2237`,
    3765: `2238`,
    3766: `2239`,
    3767: `2239`,
    3768: `2239`,
    3769: `2240`,
    377: `97`,
    3770: `2241`,
    3771: `2242`,
    3772: `2242`,
    3773: `2243`,
    3774: `2244`,
    3775: `2244`,
    3776: `2244`,
    3777: `2245`,
    3778: `2245`,
    3779: `2246`,
    378: `97`,
    3780: `2246`,
    3781: `2247`,
    3782: `2247`,
    3783: `2248`,
    3784: `2249`,
    3785: `2249`,
    3786: `2250`,
    3787: `2250`,
    3788: `2251`,
    3789: `2251`,
    379: `97`,
    3790: `2252`,
    3791: `2253`,
    3792: `2253`,
    3793: `2254`,
    3794: `2254`,
    3795: `2255`,
    3796: `2255`,
    3797: `2255`,
    3798: `2256`,
    3799: `2256`,
    38: `2`,
    380: `97`,
    3800: `2257`,
    3801: `2257`,
    3802: `2257`,
    3803: `2258`,
    3804: `2259`,
    3805: `2259`,
    3806: `2260`,
    3807: `2260`,
    3808: `2260`,
    3809: `2261`,
    381: `97`,
    3810: `2262`,
    3811: `2262`,
    3812: `2263`,
    3813: `2263`,
    3814: `2263`,
    3815: `2264`,
    3816: `2265`,
    3817: `2265`,
    3818: `2266`,
    3819: `2267`,
    382: `97`,
    3820: `2268`,
    3821: `2268`,
    3822: `2269`,
    3823: `2269`,
    3824: `2270`,
    3825: `2271`,
    3826: `2271`,
    3827: `2272`,
    3828: `2273`,
    3829: `2274`,
    383: `97`,
    3830: `2275`,
    3831: `2276`,
    3832: `2276`,
    3833: `2277`,
    3834: `2277`,
    3835: `2278`,
    3836: `2279`,
    3837: `2280`,
    3838: `2281`,
    3839: `2282`,
    384: `97`,
    3840: `2283`,
    3841: `2283`,
    3842: `2284`,
    3843: `2284`,
    3844: `2285`,
    3845: `2286`,
    3846: `2287`,
    3847: `2288`,
    3848: `2289`,
    3849: `2290`,
    385: `97`,
    3850: `2290`,
    3851: `2291`,
    3852: `2291`,
    3853: `2291`,
    3854: `2292`,
    3855: `2293`,
    3856: `2293`,
    3857: `2294`,
    3858: `2294`,
    3859: `2294`,
    386: `97`,
    3860: `2295`,
    3861: `2296`,
    3862: `2296`,
    3863: `2297`,
    3864: `2297`,
    3865: `2298`,
    3866: `2298`,
    3867: `2299`,
    3868: `2299`,
    3869: `2299`,
    387: `97`,
    3870: `2301`,
    3871: `2301`,
    3872: `2302`,
    3873: `2302`,
    3874: `2302`,
    3875: `2303`,
    3876: `2304`,
    3877: `2304`,
    3878: `2305`,
    3879: `2305`,
    388: `97`,
    3880: `2305`,
    3881: `2306`,
    3882: `2306`,
    3883: `2307`,
    3884: `2307`,
    3885: `2307`,
    3886: `2308`,
    3887: `2309`,
    3888: `2309`,
    3889: `2310`,
    389: `97`,
    3890: `2310`,
    3891: `2310`,
    3892: `2311`,
    3893: `2312`,
    3894: `2312`,
    3895: `2313`,
    3896: `2313`,
    3897: `2314`,
    3898: `2315`,
    3899: `2316`,
    39: `2`,
    390: `97`,
    3900: `2317`,
    3901: `2318`,
    3902: `2319`,
    3903: `2319`,
    3904: `2320`,
    3905: `2320`,
    3906: `2321`,
    3907: `2322`,
    3908: `2323`,
    3909: `2324`,
    391: `97`,
    3910: `2325`,
    3911: `2326`,
    3912: `2326`,
    3913: `2327`,
    3914: `2327`,
    3915: `2327`,
    3916: `2328`,
    3917: `2329`,
    3918: `2329`,
    3919: `2330`,
    392: `97`,
    3920: `2330`,
    3921: `2331`,
    3922: `2332`,
    3923: `2333`,
    3924: `2333`,
    3925: `2334`,
    3926: `2335`,
    3927: `2336`,
    3928: `2336`,
    3929: `2337`,
    393: `97`,
    3930: `2337`,
    3931: `2337`,
    3932: `2338`,
    3933: `2339`,
    3934: `2339`,
    3935: `2340`,
    3936: `2341`,
    3937: `2342`,
    3938: `2343`,
    3939: `2343`,
    394: `97`,
    3940: `2344`,
    3941: `2344`,
    3942: `2345`,
    3943: `2346`,
    3944: `2346`,
    3945: `2347`,
    3946: `2348`,
    3947: `2348`,
    3948: `2349`,
    3949: `2350`,
    395: `97`,
    3950: `2350`,
    3951: `2351`,
    3952: `2352`,
    3953: `2353`,
    3954: `2353`,
    3955: `2354`,
    3956: `2355`,
    3957: `2356`,
    3958: `2356`,
    3959: `2357`,
    396: `97`,
    3960: `2358`,
    3961: `2358`,
    3962: `2359`,
    3963: `2359`,
    3964: `2361`,
    3965: `2361`,
    3966: `2362`,
    3967: `2363`,
    3968: `2363`,
    3969: `2364`,
    397: `97`,
    3970: `2364`,
    3971: `2365`,
    3972: `2365`,
    3973: `2366`,
    3974: `2367`,
    3975: `2367`,
    3976: `2368`,
    3977: `2369`,
    3978: `2370`,
    3979: `2370`,
    398: `97`,
    3980: `2371`,
    3981: `2372`,
    3982: `2372`,
    3983: `2373`,
    3984: `2374`,
    3985: `2374`,
    3986: `2375`,
    3987: `2376`,
    3988: `2377`,
    3989: `2378`,
    399: `97`,
    3990: `2379`,
    3991: `2380`,
    3992: `2380`,
    3993: `2381`,
    3994: `2385`,
    3995: `2385`,
    3996: `2386`,
    3997: `2387`,
    3998: `2387`,
    3999: `2388`,
    4: `2`,
    40: `2`,
    400: `97`,
    4000: `2389`,
    4001: `2389`,
    4002: `2390`,
    4003: `2391`,
    4004: `2392`,
    4005: `2393`,
    4006: `2393`,
    4007: `2393`,
    4008: `2394`,
    4009: `2394`,
    401: `97`,
    4010: `2394`,
    4011: `2395`,
    4012: `2396`,
    4013: `2396`,
    4014: `2397`,
    4015: `2397`,
    4016: `2397`,
    4017: `2397`,
    4018: `2397`,
    4019: `2397`,
    402: `97`,
    4020: `2397`,
    4021: `2397`,
    4022: `2397`,
    4023: `2397`,
    4024: `2398`,
    4025: `2398`,
    4026: `2399`,
    4027: `2400`,
    4028: `2401`,
    4029: `2401`,
    403: `97`,
    4030: `2402`,
    4031: `2402`,
    4032: `2403`,
    4033: `2404`,
    4034: `2404`,
    4035: `2405`,
    4036: `2406`,
    4037: `2407`,
    4038: `2408`,
    4039: `2412`,
    404: `97`,
    4040: `2412`,
    4041: `2413`,
    4042: `2413`,
    4043: `2413`,
    4044: `2414`,
    4045: `2415`,
    4046: `2419`,
    4047: `2420`,
    4048: `2420`,
    4049: `2421`,
    405: `97`,
    4050: `2421`,
    4051: `2421`,
    4052: `2421`,
    4053: `2421`,
    4054: `2421`,
    4055: `2421`,
    4056: `2421`,
    4057: `2421`,
    4058: `2421`,
    4059: `2422`,
    406: `97`,
    4060: `2422`,
    4061: `2423`,
    4062: `2424`,
    4063: `2424`,
    4064: `2424`,
    4065: `2425`,
    4066: `2426`,
    4067: `2427`,
    4068: `2427`,
    4069: `2428`,
    407: `97`,
    4070: `2429`,
    4071: `2429`,
    4072: `2429`,
    4073: `2430`,
    4074: `2430`,
    4075: `2431`,
    4076: `2431`,
    4077: `2432`,
    4078: `2432`,
    4079: `2433`,
    408: `97`,
    4080: `2434`,
    4081: `2434`,
    4082: `2435`,
    4083: `2435`,
    4084: `2436`,
    4085: `2436`,
    4086: `2437`,
    4087: `2438`,
    4088: `2438`,
    4089: `2439`,
    409: `97`,
    4090: `2440`,
    4091: `2441`,
    4092: `2441`,
    4093: `2442`,
    4094: `2443`,
    4095: `2444`,
    4096: `2445`,
    4097: `2446`,
    4098: `2446`,
    4099: `2447`,
    41: `2`,
    410: `97`,
    4100: `2447`,
    4101: `2448`,
    4102: `2448`,
    4103: `2448`,
    4104: `2449`,
    4105: `2449`,
    4106: `2450`,
    4107: `2450`,
    4108: `2450`,
    4109: `2451`,
    411: `97`,
    4110: `2452`,
    4111: `2452`,
    4112: `2453`,
    4113: `2453`,
    4114: `2453`,
    4115: `2454`,
    4116: `2455`,
    4117: `2455`,
    4118: `2456`,
    4119: `2456`,
    412: `97`,
    4120: `2456`,
    4121: `2457`,
    4122: `2458`,
    4123: `2458`,
    4124: `2459`,
    4125: `2460`,
    4126: `2461`,
    4127: `2461`,
    4128: `2462`,
    4129: `2462`,
    413: `97`,
    4130: `2463`,
    4131: `2464`,
    4132: `2464`,
    4133: `2465`,
    4134: `2466`,
    4135: `2467`,
    4136: `2468`,
    4137: `2469`,
    4138: `2469`,
    4139: `2470`,
    414: `97`,
    4140: `2470`,
    4141: `2471`,
    4142: `2472`,
    4143: `2473`,
    4144: `2474`,
    4145: `2475`,
    4146: `2476`,
    4147: `2476`,
    4148: `2477`,
    4149: `2477`,
    415: `97`,
    4150: `2478`,
    4151: `2479`,
    4152: `2480`,
    4153: `2481`,
    4154: `2482`,
    4155: `2483`,
    4156: `2483`,
    4157: `2484`,
    4158: `2484`,
    4159: `2484`,
    416: `97`,
    4160: `2485`,
    4161: `2486`,
    4162: `2486`,
    4163: `2487`,
    4164: `2487`,
    4165: `2487`,
    4166: `2488`,
    4167: `2489`,
    4168: `2489`,
    4169: `2490`,
    417: `97`,
    4170: `2490`,
    4171: `2491`,
    4172: `2491`,
    4173: `2492`,
    4174: `2492`,
    4175: `2492`,
    4176: `2495`,
    4177: `2495`,
    4178: `2496`,
    4179: `2497`,
    418: `97`,
    4180: `2497`,
    4181: `2498`,
    4182: `2499`,
    4183: `2500`,
    4184: `2500`,
    4185: `2501`,
    4186: `2502`,
    4187: `2503`,
    4188: `2503`,
    4189: `2504`,
    419: `97`,
    4190: `2505`,
    4191: `2505`,
    4192: `2506`,
    4193: `2507`,
    4194: `2507`,
    4195: `2508`,
    4196: `2509`,
    4197: `2509`,
    4198: `2510`,
    4199: `2510`,
    42: `2`,
    420: `97`,
    4200: `2511`,
    4201: `2511`,
    4202: `2511`,
    4203: `2513`,
    4204: `2514`,
    4205: `2515`,
    4206: `2516`,
    4207: `2517`,
    4208: `2519`,
    4209: `2520`,
    421: `97`,
    4210: `2520`,
    4211: `2521`,
    4212: `2522`,
    4213: `2522`,
    4214: `2523`,
    4215: `2523`,
    4216: `2524`,
    4217: `2524`,
    4218: `2525`,
    4219: `2526`,
    422: `97`,
    4220: `2528`,
    4221: `2528`,
    4222: `2529`,
    4223: `2529`,
    4224: `2529`,
    4225: `2530`,
    4226: `2530`,
    4227: `2531`,
    4228: `2531`,
    4229: `2531`,
    423: `97`,
    4230: `2533`,
    4231: `2533`,
    4232: `2534`,
    4233: `2534`,
    4234: `2534`,
    4235: `2535`,
    4236: `2535`,
    4237: `2536`,
    4238: `2536`,
    4239: `2536`,
    424: `97`,
    4240: `2538`,
    4241: `2538`,
    4242: `2538`,
    4243: `2539`,
    4244: `2539`,
    4245: `2539`,
    4246: `2540`,
    4247: `2540`,
    4248: `2541`,
    4249: `2541`,
    425: `97`,
    4250: `2542`,
    4251: `2542`,
    4252: `2542`,
    4253: `2544`,
    4254: `2544`,
    4255: `2544`,
    4256: `2546`,
    4257: `2546`,
    4258: `2546`,
    4259: `2547`,
    426: `97`,
    4260: `2547`,
    4261: `2547`,
    4262: `2548`,
    4263: `2548`,
    4264: `2548`,
    4265: `2549`,
    4266: `2549`,
    4267: `2550`,
    4268: `2550`,
    4269: `2551`,
    427: `97`,
    4270: `2551`,
    4271: `2552`,
    4272: `2552`,
    4273: `2552`,
    4274: `2554`,
    4275: `2555`,
    4276: `2557`,
    4277: `2558`,
    4278: `2559`,
    4279: `2560`,
    428: `97`,
    4280: `2560`,
    4281: `2561`,
    4282: `2561`,
    4283: `2562`,
    4284: `2562`,
    4285: `2562`,
    4286: `2563`,
    4287: `2565`,
    4288: `2566`,
    4289: `2567`,
    429: `97`,
    4290: `2567`,
    4291: `2567`,
    4292: `2568`,
    4293: `2569`,
    4294: `2569`,
    4295: `2572`,
    4296: `2572`,
    4297: `2573`,
    4298: `2573`,
    4299: `2574`,
    43: `2`,
    430: `97`,
    4300: `2575`,
    4301: `2576`,
    4302: `2577`,
    4303: `2577`,
    4304: `2578`,
    4305: `2579`,
    4306: `2579`,
    4307: `2580`,
    4308: `2580`,
    4309: `2581`,
    431: `97`,
    4310: `2581`,
    4311: `2582`,
    4312: `2583`,
    4313: `2584`,
    4314: `2584`,
    4315: `2585`,
    4316: `2586`,
    4317: `2587`,
    4318: `2588`,
    4319: `2588`,
    432: `98`,
    4320: `2589`,
    4321: `2590`,
    4322: `2591`,
    4323: `2593`,
    4324: `2594`,
    4325: `2595`,
    4326: `2596`,
    4327: `2596`,
    4328: `2596`,
    4329: `2597`,
    433: `98`,
    4330: `2597`,
    4331: `2598`,
    4332: `2599`,
    4333: `2600`,
    4334: `2602`,
    4335: `2603`,
    4336: `2604`,
    4337: `2605`,
    4338: `2605`,
    4339: `2605`,
    434: `99`,
    4340: `2606`,
    4341: `2606`,
    4342: `2607`,
    4343: `2607`,
    4344: `2607`,
    4345: `2608`,
    4346: `2608`,
    4347: `2608`,
    4348: `2610`,
    4349: `2611`,
    435: `99`,
    4350: `2611`,
    4351: `2611`,
    4352: `2612`,
    4353: `2613`,
    4354: `2614`,
    4355: `2615`,
    4356: `2616`,
    4357: `2618`,
    4358: `2619`,
    4359: `2620`,
    436: `99`,
    4360: `2621`,
    4361: `2621`,
    4362: `2622`,
    4363: `2623`,
    4364: `2624`,
    4365: `2625`,
    4366: `2625`,
    4367: `2626`,
    4368: `2627`,
    4369: `2627`,
    437: `101`,
    4370: `2628`,
    4371: `2629`,
    4372: `2629`,
    4373: `2630`,
    4374: `2631`,
    4375: `2632`,
    4376: `2633`,
    4377: `2633`,
    4378: `2634`,
    4379: `2635`,
    438: `101`,
    4380: `2635`,
    4381: `2635`,
    4382: `2636`,
    4383: `2636`,
    4384: `2637`,
    4385: `2637`,
    4386: `2637`,
    4387: `2638`,
    4388: `2638`,
    4389: `2639`,
    439: `101`,
    4390: `2641`,
    4391: `2642`,
    4392: `2642`,
    4393: `2643`,
    4394: `2645`,
    4395: `2646`,
    4396: `2647`,
    4397: `2648`,
    4398: `2649`,
    4399: `2649`,
    44: `2`,
    440: `102`,
    4400: `2650`,
    4401: `2651`,
    4402: `2652`,
    4403: `2653`,
    4404: `2655`,
    4405: `2655`,
    4406: `2656`,
    4407: `2656`,
    4408: `2657`,
    4409: `2658`,
    441: `102`,
    4410: `2659`,
    4411: `2659`,
    4412: `2659`,
    4413: `2660`,
    4414: `2660`,
    4415: `2660`,
    4416: `2662`,
    4417: `2663`,
    4418: `2664`,
    4419: `2664`,
    442: `104`,
    4420: `2665`,
    4421: `2667`,
    4422: `2667`,
    4423: `2668`,
    4424: `2669`,
    4425: `2669`,
    4426: `2670`,
    4427: `2672`,
    4428: `2672`,
    4429: `2673`,
    443: `105`,
    4430: `2674`,
    4431: `2674`,
    4432: `2675`,
    4433: `2677`,
    4434: `2678`,
    4435: `2678`,
    4436: `2678`,
    4437: `2680`,
    4438: `2681`,
    4439: `2681`,
    444: `106`,
    4440: `2682`,
    445: `106`,
    446: `107`,
    447: `107`,
    448: `108`,
    449: `109`,
    45: `2`,
    450: `109`,
    451: `110`,
    452: `111`,
    453: `112`,
    454: `113`,
    455: `113`,
    456: `114`,
    457: `114`,
    458: `114`,
    459: `116`,
    46: `2`,
    460: `116`,
    461: `116`,
    462: `117`,
    463: `117`,
    464: `117`,
    465: `118`,
    466: `119`,
    467: `119`,
    468: `119`,
    469: `120`,
    47: `2`,
    470: `121`,
    471: `121`,
    472: `121`,
    473: `122`,
    474: `123`,
    475: `123`,
    476: `123`,
    477: `124`,
    478: `125`,
    479: `125`,
    48: `2`,
    480: `126`,
    481: `126`,
    482: `127`,
    483: `127`,
    484: `128`,
    485: `128`,
    486: `129`,
    487: `129`,
    488: `131`,
    489: `132`,
    49: `2`,
    490: `133`,
    491: `133`,
    492: `134`,
    493: `134`,
    494: `135`,
    495: `135`,
    496: `136`,
    497: `137`,
    498: `138`,
    499: `138`,
    5: `2`,
    50: `2`,
    500: `139`,
    501: `140`,
    502: `141`,
    503: `141`,
    504: `142`,
    505: `143`,
    506: `144`,
    507: `144`,
    508: `145`,
    509: `146`,
    51: `2`,
    510: `147`,
    511: `148`,
    512: `148`,
    513: `149`,
    514: `150`,
    515: `151`,
    516: `152`,
    517: `152`,
    518: `153`,
    519: `153`,
    52: `2`,
    520: `153`,
    521: `155`,
    522: `155`,
    523: `155`,
    524: `156`,
    525: `156`,
    526: `156`,
    527: `157`,
    528: `157`,
    529: `157`,
    53: `2`,
    530: `158`,
    531: `158`,
    532: `158`,
    533: `159`,
    534: `160`,
    535: `160`,
    536: `161`,
    537: `161`,
    538: `162`,
    539: `162`,
    54: `2`,
    540: `163`,
    541: `163`,
    542: `165`,
    543: `166`,
    544: `167`,
    545: `167`,
    546: `168`,
    547: `168`,
    548: `169`,
    549: `169`,
    55: `2`,
    550: `170`,
    551: `171`,
    552: `171`,
    553: `172`,
    554: `173`,
    555: `173`,
    556: `174`,
    557: `175`,
    558: `176`,
    559: `177`,
    56: `2`,
    560: `178`,
    561: `178`,
    562: `179`,
    563: `179`,
    564: `179`,
    565: `181`,
    566: `181`,
    567: `181`,
    568: `182`,
    569: `182`,
    57: `2`,
    570: `182`,
    571: `183`,
    572: `183`,
    573: `184`,
    574: `184`,
    575: `186`,
    576: `187`,
    577: `188`,
    578: `188`,
    579: `189`,
    58: `2`,
    580: `189`,
    581: `190`,
    582: `190`,
    583: `191`,
    584: `192`,
    585: `193`,
    586: `193`,
    587: `194`,
    588: `195`,
    589: `196`,
    59: `2`,
    590: `197`,
    591: `197`,
    592: `198`,
    593: `198`,
    594: `198`,
    595: `200`,
    596: `200`,
    597: `201`,
    598: `201`,
    599: `201`,
    6: `2`,
    60: `2`,
    600: `202`,
    601: `202`,
    602: `203`,
    603: `203`,
    604: `204`,
    605: `204`,
    606: `205`,
    607: `206`,
    608: `207`,
    609: `207`,
    61: `2`,
    610: `208`,
    611: `209`,
    612: `210`,
    613: `215`,
    614: `215`,
    615: `216`,
    616: `216`,
    617: `217`,
    618: `217`,
    619: `217`,
    62: `2`,
    620: `218`,
    621: `219`,
    622: `219`,
    623: `221`,
    624: `222`,
    625: `222`,
    626: `223`,
    627: `224`,
    628: `225`,
    629: `226`,
    63: `2`,
    630: `226`,
    631: `227`,
    632: `228`,
    633: `229`,
    634: `229`,
    635: `229`,
    636: `230`,
    637: `231`,
    638: `231`,
    639: `232`,
    64: `2`,
    640: `233`,
    641: `234`,
    642: `235`,
    643: `236`,
    644: `241`,
    645: `241`,
    646: `242`,
    647: `243`,
    648: `244`,
    649: `244`,
    65: `2`,
    650: `244`,
    651: `244`,
    652: `244`,
    653: `244`,
    654: `245`,
    655: `245`,
    656: `245`,
    657: `247`,
    658: `247`,
    659: `248`,
    66: `2`,
    660: `248`,
    661: `248`,
    662: `249`,
    663: `249`,
    664: `250`,
    665: `250`,
    666: `251`,
    667: `251`,
    668: `251`,
    669: `252`,
    67: `4`,
    670: `252`,
    671: `253`,
    672: `253`,
    673: `254`,
    674: `254`,
    675: `254`,
    676: `255`,
    677: `255`,
    678: `256`,
    679: `256`,
    68: `4`,
    680: `257`,
    681: `257`,
    682: `258`,
    683: `259`,
    684: `259`,
    685: `261`,
    686: `262`,
    687: `262`,
    688: `263`,
    689: `264`,
    69: `5`,
    690: `265`,
    691: `266`,
    692: `266`,
    693: `267`,
    694: `268`,
    695: `269`,
    696: `269`,
    697: `269`,
    698: `270`,
    699: `271`,
    7: `2`,
    70: `5`,
    700: `271`,
    701: `272`,
    702: `273`,
    703: `274`,
    704: `275`,
    705: `276`,
    706: `281`,
    707: `281`,
    708: `282`,
    709: `282`,
    71: `5`,
    710: `283`,
    711: `284`,
    712: `284`,
    713: `285`,
    714: `286`,
    715: `286`,
    716: `288`,
    717: `289`,
    718: `289`,
    719: `290`,
    72: `6`,
    720: `291`,
    721: `292`,
    722: `292`,
    723: `293`,
    724: `294`,
    725: `295`,
    726: `295`,
    727: `295`,
    728: `296`,
    729: `297`,
    73: `7`,
    730: `297`,
    731: `298`,
    732: `299`,
    733: `300`,
    734: `301`,
    735: `302`,
    736: `307`,
    737: `307`,
    738: `308`,
    739: `309`,
    74: `8`,
    740: `309`,
    741: `310`,
    742: `310`,
    743: `310`,
    744: `311`,
    745: `312`,
    746: `313`,
    747: `314`,
    748: `315`,
    749: `320`,
    75: `9`,
    750: `320`,
    751: `321`,
    752: `322`,
    753: `323`,
    754: `323`,
    755: `323`,
    756: `323`,
    757: `323`,
    758: `323`,
    759: `324`,
    76: `10`,
    760: `324`,
    761: `324`,
    762: `326`,
    763: `326`,
    764: `327`,
    765: `327`,
    766: `328`,
    767: `329`,
    768: `330`,
    769: `330`,
    77: `11`,
    770: `331`,
    771: `336`,
    772: `336`,
    773: `337`,
    774: `337`,
    775: `338`,
    776: `339`,
    777: `340`,
    778: `340`,
    779: `341`,
    78: `11`,
    780: `346`,
    781: `346`,
    782: `347`,
    783: `347`,
    784: `348`,
    785: `349`,
    786: `350`,
    787: `350`,
    788: `351`,
    789: `352`,
    79: `12`,
    790: `353`,
    791: `358`,
    792: `358`,
    793: `359`,
    794: `359`,
    795: `360`,
    796: `361`,
    797: `362`,
    798: `362`,
    799: `363`,
    8: `2`,
    80: `13`,
    800: `364`,
    801: `365`,
    802: `370`,
    803: `371`,
    804: `371`,
    805: `372`,
    806: `373`,
    807: `374`,
    808: `375`,
    809: `375`,
    81: `14`,
    810: `376`,
    811: `376`,
    812: `377`,
    813: `378`,
    814: `378`,
    815: `379`,
    816: `380`,
    817: `380`,
    818: `381`,
    819: `382`,
    82: `14`,
    820: `382`,
    821: `383`,
    822: `384`,
    823: `385`,
    824: `385`,
    825: `386`,
    826: `387`,
    827: `388`,
    828: `388`,
    829: `389`,
    83: `15`,
    830: `390`,
    831: `390`,
    832: `391`,
    833: `391`,
    834: `393`,
    835: `393`,
    836: `394`,
    837: `395`,
    838: `395`,
    839: `396`,
    84: `15`,
    840: `396`,
    841: `396`,
    842: `397`,
    843: `397`,
    844: `398`,
    845: `399`,
    846: `399`,
    847: `400`,
    848: `401`,
    849: `402`,
    85: `16`,
    850: `402`,
    851: `403`,
    852: `407`,
    853: `407`,
    854: `408`,
    855: `409`,
    856: `409`,
    857: `410`,
    858: `411`,
    859: `411`,
    86: `17`,
    860: `412`,
    861: `413`,
    862: `414`,
    863: `415`,
    864: `415`,
    865: `415`,
    866: `416`,
    867: `416`,
    868: `416`,
    869: `417`,
    87: `17`,
    870: `418`,
    871: `418`,
    872: `419`,
    873: `419`,
    874: `419`,
    875: `419`,
    876: `419`,
    877: `419`,
    878: `419`,
    879: `419`,
    88: `18`,
    880: `419`,
    881: `419`,
    882: `420`,
    883: `420`,
    884: `421`,
    885: `422`,
    886: `423`,
    887: `423`,
    888: `424`,
    889: `424`,
    89: `19`,
    890: `425`,
    891: `426`,
    892: `426`,
    893: `427`,
    894: `428`,
    895: `429`,
    896: `430`,
    897: `434`,
    898: `434`,
    899: `435`,
    9: `2`,
    90: `21`,
    900: `435`,
    901: `435`,
    902: `436`,
    903: `437`,
    904: `441`,
    905: `442`,
    906: `442`,
    907: `443`,
    908: `443`,
    909: `443`,
    91: `21`,
    910: `443`,
    911: `443`,
    912: `443`,
    913: `443`,
    914: `443`,
    915: `443`,
    916: `443`,
    917: `444`,
    918: `444`,
    919: `445`,
    92: `21`,
    920: `446`,
    921: `446`,
    922: `446`,
    923: `447`,
    924: `448`,
    925: `449`,
    926: `449`,
    927: `450`,
    928: `451`,
    929: `451`,
    93: `21`,
    930: `451`,
    931: `452`,
    932: `452`,
    933: `453`,
    934: `453`,
    935: `454`,
    936: `454`,
    937: `455`,
    938: `455`,
    939: `455`,
    94: `21`,
    940: `456`,
    941: `457`,
    942: `457`,
    943: `458`,
    944: `459`,
    945: `460`,
    946: `460`,
    947: `461`,
    948: `462`,
    949: `463`,
    95: `21`,
    950: `463`,
    951: `464`,
    952: `464`,
    953: `464`,
    954: `465`,
    955: `466`,
    956: `466`,
    957: `467`,
    958: `467`,
    959: `467`,
    96: `21`,
    960: `468`,
    961: `469`,
    962: `469`,
    963: `470`,
    964: `471`,
    965: `472`,
    966: `472`,
    967: `473`,
    968: `474`,
    969: `475`,
    97: `21`,
    970: `475`,
    971: `476`,
    972: `476`,
    973: `476`,
    974: `477`,
    975: `478`,
    976: `478`,
    977: `479`,
    978: `479`,
    979: `479`,
    98: `21`,
    980: `480`,
    981: `481`,
    982: `481`,
    983: `482`,
    984: `482`,
    985: `483`,
    986: `483`,
    987: `485`,
    988: `485`,
    989: `486`,
    99: `21`,
    990: `486`,
    991: `486`,
    992: `487`,
    993: `488`,
    994: `488`,
    995: `488`,
    996: `490`,
    997: `490`,
    998: `491`,
    999: `491`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 2,
  stateKeys: 2,
  stateSize: 137,
  unsupported: [],
  version: 13,
  warnings: [`API U2_claim may use up to 9 transaction references, but the limit is 8. API U2_claim starts at /app/index.rsh:159:29:application.`, `Step 1 calls a remote object at /app/index.rsh:139:18:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:222:28:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:289:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:364:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:432:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:471:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:489:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:502:26:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 may use up to 9 transaction references, but the limit is 8. Step 3 starts at /app/index.rsh:159:29:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:127:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:515:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:159:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "A_deleteProvider": A_deleteProvider,
  "A_deleteSubscription": A_deleteSubscription,
  "Alice": Alice,
  "C_close": C_close,
  "C_grant": C_grant,
  "Deployer": Deployer,
  "U1_announce": U1_announce,
  "U2_claim": U2_claim,
  "U2_subscribe": U2_subscribe
  };
export const _APIs = {
  A: {
    deleteProvider: A_deleteProvider,
    deleteSubscription: A_deleteSubscription
    },
  C: {
    close: C_close,
    grant: C_grant
    },
  U1: {
    announce: U1_announce
    },
  U2: {
    claim: U2_claim,
    subscribe: U2_subscribe
    }
  };
