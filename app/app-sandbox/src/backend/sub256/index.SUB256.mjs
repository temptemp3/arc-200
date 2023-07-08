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
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc3, ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc2, ctc2]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Data({
    AnnouncEvent: ctc4,
    ClaimEvent: ctc5,
    CloseEvent: ctc6,
    DeleteProvider: ctc7,
    DeleteSubscription: ctc8,
    GrantEvent: ctc7,
    ReadyEvent: ctc6,
    SubscribeEvent: ctc8
    });
  return {
    event: [ctc9]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    closed: ctc2,
    manager: ctc3,
    providerCount: ctc4,
    providerCounter: ctc4,
    safeAmount: ctc5,
    safeSize: ctc5,
    subscriberCount: ctc4,
    subscriberCounter: ctc4
    });
  const ctc7 = stdlib.T_Struct([['token', ctc0], ['periodCount', ctc4], ['periodAmount', ctc5], ['periodLength', ctc4], ['subscriberCount', ctc4], ['subscriberCounter', ctc4]]);
  const ctc8 = stdlib.T_Struct([['manager', ctc3], ['providerCount', ctc4], ['providerCounter', ctc4], ['subscriberCount', ctc4], ['subscriberCounter', ctc4], ['safeAmount', ctc5], ['safeSize', ctc5]]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc4, ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc7
    });
  const ctc13 = stdlib.T_Data({
    None: ctc11,
    Some: ctc9
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc13;
  
  
  const _providerService = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2638, v2640, v2643] = svs;
      return (await ((async (_v2682 ) => {
          const v2682 = stdlib.protect(ctc3, _v2682, null);
        
        const v2683 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc3, v2682, ctc7), null);
        const v2685 = {
          periodAmount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          periodCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          periodLength: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          token: v2638
          };
        const v2686 = stdlib.fromSome(v2683, v2685);
        
        return v2686;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2638, v2640, v2643] = svs;
      return (await ((async () => {
        
        const v2673 = v2643.manager;
        const v2674 = v2643.providerCount;
        const v2675 = v2643.providerCounter;
        const v2676 = v2643.subscriberCount;
        const v2677 = v2643.subscriberCounter;
        const v2678 = v2643.safeAmount;
        const v2679 = v2643.safeSize;
        const v2680 = {
          manager: v2673,
          providerCount: v2674,
          providerCounter: v2675,
          safeAmount: v2678,
          safeSize: v2679,
          subscriberCount: v2676,
          subscriberCounter: v2677
          };
        
        return v2680;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _subscription = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2638, v2640, v2643] = svs;
      return (await ((async (_v2687, _v2688 ) => {
          const v2687 = stdlib.protect(ctc3, _v2687, null);
          const v2688 = stdlib.protect(ctc3, _v2688, null);
        
        const v2689 = [v2687, v2688];
        const v2690 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc10, v2689, ctc9), null);
        const v2691 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v2692 = stdlib.fromSome(v2690, v2691);
        
        return v2692;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      providerService: {
        decode: _providerService,
        dom: [ctc3],
        rng: ctc7
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc8
        },
      subscription: {
        decode: _subscription,
        dom: [ctc3, ctc3],
        rng: ctc9
        }
      },
    views: {
      3: [ctc0, ctc1, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc5, ctc8]);
  return {
    mapDataTy: ctc9
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc15 = stdlib.T_Data({
    announce0_219: ctc9,
    claim0_219: ctc11,
    close0_219: ctc12,
    deleteProvider0_219: ctc13,
    deleteSubscription0_219: ctc14,
    grant0_219: ctc13,
    subscribe0_219: ctc13
    });
  const ctc16 = stdlib.T_Tuple([ctc2, ctc6]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:76:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v2637, time: v2636, didSend: v26, from: v2635 } = txn1;
      
      ;
      const v2638 = await ctc.getContractInfo();
      
      const v2640 = [];
      const v2641 = ['ReadyEvent', v2640];
      null;
      const v2642 = {
        closed: false,
        manager: v2635,
        providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        safeAmount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        safeSize: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2643 = v2642;
      const v2644 = v2636;
      
      if (await (async () => {
        const v2671 = v2643.closed;
        const v2672 = v2671 ? false : true;
        
        return v2672;})()) {
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2637, time: v2636, didSend: v26, from: v2635 } = txn1;
  ;
  const v2638 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2638), {
    at: './index.rsh:77:19:application',
    fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)', 'at ./index.rsh:77:19:application call to "liftedInteract" (defined at: ./index.rsh:77:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2640 = [];
  const v2641 = ['ReadyEvent', v2640];
  null;
  const v2642 = {
    closed: false,
    manager: v2635,
    providerCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    providerCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    safeAmount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    safeSize: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2643 = v2642;
  let v2644 = v2636;
  
  let txn2 = txn1;
  while (await (async () => {
    const v2671 = v2643.closed;
    const v2672 = v2671 ? false : true;
    
    return v2672;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn3;
    switch (v2926[0]) {
      case 'announce0_219': {
        const v2929 = v2926[1];
        undefined /* setApiDetails */;
        ;
        const v2966 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '0')];
        const v2967 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '1')];
        const v2968 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '2')];
        const v2969 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '3')];
        const v2970 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2925, ctc4), null);
        const v2971 = {
          None: 0,
          Some: 1
          }[v2970[0]];
        const v2972 = stdlib.eq(v2971, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2972, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)'],
          msg: 'provider already exists',
          who: 'Deployer'
          });
        const v2978 = {
          periodAmount: v2968,
          periodCount: v2967,
          periodLength: v2969,
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          token: v2966
          };
        await stdlib.mapSet(map0, ctc10, v2925, ctc4, v2978);
        const v2979 = [v2966, v2925, v2967, v2968, v2969];
        const v2980 = ['AnnouncEvent', v2979];
        null;
        const v2981 = true;
        await txn3.getOutput('announce', 'v2981', ctc6, v2981);
        const v2991 = v2643.closed;
        const v2992 = v2643.manager;
        const v2993 = v2643.providerCount;
        const v2994 = v2643.providerCounter;
        const v2995 = v2643.safeAmount;
        const v2996 = v2643.safeSize;
        const v2997 = v2643.subscriberCount;
        const v2998 = v2643.subscriberCounter;
        const v3000 = stdlib.safeAdd(v2993, stdlib.checkedBigNumberify('./index.rsh:154:48:decimal', stdlib.UInt_max, '1'));
        const v3002 = stdlib.safeAdd(v2994, stdlib.checkedBigNumberify('./index.rsh:155:52:decimal', stdlib.UInt_max, '1'));
        const v3003 = {
          closed: v2991,
          manager: v2992,
          providerCount: v3000,
          providerCounter: v3002,
          safeAmount: v2995,
          safeSize: v2996,
          subscriberCount: v2997,
          subscriberCounter: v2998
          };
        const cv2643 = v3003;
        const cv2644 = v2927;
        
        v2643 = cv2643;
        v2644 = cv2644;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'claim0_219': {
        const v3453 = v2926[1];
        undefined /* setApiDetails */;
        const v3459 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '0')];
        const v3460 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '1')];
        const v3461 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '2')];
        const v3462 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '3')];
        const v3463 = [v3459, v3460];
        const v3464 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3463, ctc7), null);
        const v3465 = {
          None: 0,
          Some: 1
          }[v3464[0]];
        const v3466 = stdlib.eq(v3465, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3466, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v3468 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3459, ctc4), null);
        let v3469;
        switch (v3468[0]) {
          case 'None': {
            const v3470 = v3468[1];
            v3469 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v3471 = v3468[1];
            const v3472 = v3471.periodAmount;
            const v3473 = stdlib.cast("UInt", "UInt256", v3461, false, true);
            const v3474 = stdlib.safeMul256(v3472, v3473);
            v3469 = v3474;
            
            break;
            }
          }
        const v3477 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v3478 = stdlib.fromSome(v3464, v3477);
        const v3479 = v3478[stdlib.checkedBigNumberify('./index.rsh:225:73:array ref', stdlib.UInt_max, '0')];
        const v3480 = stdlib.le256(v3469, v3479);
        stdlib.assert(v3480, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
          msg: 'not enough remaining',
          who: 'Deployer'
          });
        ;
        let v3541;
        switch (v3468[0]) {
          case 'None': {
            const v3542 = v3468[1];
            v3541 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v3543 = v3468[1];
            const v3544 = v3543.periodAmount;
            const v3545 = stdlib.cast("UInt", "UInt256", v3461, false, true);
            const v3546 = stdlib.safeMul256(v3544, v3545);
            v3541 = v3546;
            
            break;
            }
          }
        const v3552 = stdlib.le256(v3541, v3479);
        stdlib.assert(v3552, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
          msg: 'not enough remaining',
          who: 'Deployer'
          });
        const v3560 = {
          periodAmount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          periodCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          periodLength: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          token: v2638
          };
        const v3561 = stdlib.fromSome(v3468, v3560);
        const v3562 = v3561.token;
        const v3568 = v3478[stdlib.checkedBigNumberify('./index.rsh:233:17:array', stdlib.UInt_max, '1')];
        let v3572;
        switch (v3468[0]) {
          case 'None': {
            const v3573 = v3468[1];
            v3572 = stdlib.checkedBigNumberify('./index.rsh:217:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v3574 = v3468[1];
            const v3575 = v3574.periodLength;
            const v3576 = stdlib.safeMul(v3575, v3461);
            v3572 = v3576;
            
            break;
            }
          }
        const v3577 = stdlib.safeAdd(v3568, v3572);
        const v3578 = stdlib.ge(v2927, v3577);
        stdlib.assert(v3578, {
          at: './index.rsh:234:18:application',
          fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
          msg: 'not enough time has passed',
          who: 'Deployer'
          });
        const v3579 = await ctc.getContractAddress();
        const v3580 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3460];
        const v3581 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3459];
        const v3582 = [v3460, v3579];
        const v3583 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3582];
        let v3585;
        switch (v3468[0]) {
          case 'None': {
            const v3586 = v3468[1];
            v3585 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v3587 = v3468[1];
            const v3588 = v3587.periodAmount;
            const v3589 = stdlib.cast("UInt", "UInt256", v3461, false, true);
            const v3590 = stdlib.safeMul256(v3588, v3589);
            v3585 = v3590;
            
            break;
            }
          }
        const v3596 = undefined /* Remote */;
        const v3597 = await txn3.getOutput('internal', 'v3596', ctc16, v3596);
        const v3599 = v3597[stdlib.checkedBigNumberify('./index.rsh:251:15:application', stdlib.UInt_max, '0')];
        const v3600 = v3597[stdlib.checkedBigNumberify('./index.rsh:251:15:application', stdlib.UInt_max, '1')];
        const v3605 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3599);
        stdlib.assert(v3605, {
          at: './index.rsh:251:15:application',
          fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v3600, {
          at: './index.rsh:242:18:application',
          fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
          msg: 'transfer failed',
          who: 'Deployer'
          });
        const v3606 = [v3459, v3460, v3461, v3462];
        const v3607 = ['ClaimEvent', v3606];
        null;
        let v3610;
        switch (v3468[0]) {
          case 'None': {
            const v3611 = v3468[1];
            v3610 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v3612 = v3468[1];
            const v3613 = v3612.periodAmount;
            const v3614 = stdlib.cast("UInt", "UInt256", v3461, false, true);
            const v3615 = stdlib.safeMul256(v3613, v3614);
            v3610 = v3615;
            
            break;
            }
          }
        const v3616 = stdlib.safeSub256(v3479, v3610);
        let v3618;
        switch (v3468[0]) {
          case 'None': {
            const v3619 = v3468[1];
            v3618 = stdlib.checkedBigNumberify('./index.rsh:217:39:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v3620 = v3468[1];
            const v3621 = v3620.periodLength;
            const v3622 = stdlib.safeMul(v3621, v3461);
            v3618 = v3622;
            
            break;
            }
          }
        const v3623 = stdlib.safeAdd(v3568, v3618);
        const v3624 = [v3616, v3623, true];
        await stdlib.mapSet(map1, ctc14, v3463, ctc7, v3624);
        const v3625 = true;
        await txn3.getOutput('claim', 'v3625', ctc6, v3625);
        const v3635 = v2643.closed;
        const v3636 = v2643.manager;
        const v3637 = v2643.providerCount;
        const v3638 = v2643.providerCounter;
        const v3639 = v2643.safeAmount;
        const v3640 = v2643.safeSize;
        const v3641 = v2643.subscriberCount;
        const v3642 = v2643.subscriberCounter;
        let v3645;
        switch (v3468[0]) {
          case 'None': {
            const v3646 = v3468[1];
            v3645 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v3647 = v3468[1];
            const v3648 = v3647.periodAmount;
            const v3649 = stdlib.cast("UInt", "UInt256", v3461, false, true);
            const v3650 = stdlib.safeMul256(v3648, v3649);
            v3645 = v3650;
            
            break;
            }
          }
        const v3651 = stdlib.safeSub256(v3639, v3645);
        const v3652 = {
          closed: v3635,
          manager: v3636,
          providerCount: v3637,
          providerCounter: v3638,
          safeAmount: v3651,
          safeSize: v3640,
          subscriberCount: v3641,
          subscriberCounter: v3642
          };
        const cv2643 = v3652;
        const cv2644 = v2927;
        
        v2643 = cv2643;
        v2644 = cv2644;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'close0_219': {
        const v3977 = v2926[1];
        undefined /* setApiDetails */;
        ;
        const v4180 = v2643.providerCounter;
        const v4181 = stdlib.eq(v4180, stdlib.checkedBigNumberify('./index.rsh:336:34:decimal', stdlib.UInt_max, '0'));
        const v4182 = v4181 ? false : true;
        stdlib.assert(v4182, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
          msg: 'no providers',
          who: 'Deployer'
          });
        const v4184 = v2643.subscriberCounter;
        const v4185 = stdlib.eq(v4184, stdlib.checkedBigNumberify('./index.rsh:337:36:decimal', stdlib.UInt_max, '0'));
        const v4186 = v4185 ? false : true;
        stdlib.assert(v4186, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        const v4188 = v2643.providerCount;
        const v4189 = stdlib.eq(v4188, stdlib.checkedBigNumberify('./index.rsh:338:32:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4189, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
          msg: 'providers not empty',
          who: 'Deployer'
          });
        const v4191 = v2643.subscriberCount;
        const v4192 = stdlib.eq(v4191, stdlib.checkedBigNumberify('./index.rsh:339:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4192, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:339:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
          msg: 'subscribers not empty',
          who: 'Deployer'
          });
        const v4195 = ['CloseEvent', v2640];
        null;
        const v4196 = true;
        await txn3.getOutput('close', 'v4196', ctc6, v4196);
        const v4203 = v2643.manager;
        const v4206 = v2643.safeAmount;
        const v4207 = v2643.safeSize;
        const v4210 = {
          closed: true,
          manager: v4203,
          providerCount: v4188,
          providerCounter: v4180,
          safeAmount: v4206,
          safeSize: v4207,
          subscriberCount: v4191,
          subscriberCounter: v4184
          };
        const cv2643 = v4210;
        const cv2644 = v2927;
        
        v2643 = cv2643;
        v2644 = cv2644;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteProvider0_219': {
        const v4501 = v2926[1];
        undefined /* setApiDetails */;
        ;
        const v4738 = v4501[stdlib.checkedBigNumberify('./index.rsh:300:10:spread', stdlib.UInt_max, '0')];
        const v4739 = v2643.subscriberCount;
        const v4740 = stdlib.eq(v4739, stdlib.checkedBigNumberify('./index.rsh:301:34:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4740, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
          msg: 'not empty',
          who: 'Deployer'
          });
        const v4742 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v4738, ctc4), null);
        const v4743 = {
          None: 0,
          Some: 1
          }[v4742[0]];
        const v4744 = stdlib.eq(v4743, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4744, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:302:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v4747;
        switch (v4742[0]) {
          case 'None': {
            const v4748 = v4742[1];
            v4747 = false;
            
            break;
            }
          case 'Some': {
            const v4749 = v4742[1];
            const v4750 = v4749.subscriberCount;
            const v4751 = stdlib.eq(v4750, stdlib.checkedBigNumberify('./index.rsh:304:74:decimal', stdlib.UInt_max, '0'));
            v4747 = v4751;
            
            break;
            }
          }
        stdlib.assert(v4747, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
          msg: 'has subscribers',
          who: 'Deployer'
          });
        let v4754;
        switch (v4742[0]) {
          case 'None': {
            const v4755 = v4742[1];
            v4754 = false;
            
            break;
            }
          case 'Some': {
            const v4756 = v4742[1];
            const v4757 = v4756.subscriberCounter;
            const v4758 = stdlib.eq(v4757, stdlib.checkedBigNumberify('./index.rsh:308:76:decimal', stdlib.UInt_max, '0'));
            const v4759 = v4758 ? false : true;
            v4754 = v4759;
            
            break;
            }
          }
        stdlib.assert(v4754, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc10, v4738, ctc4, undefined /* Nothing */);
        const v4762 = true;
        await txn3.getOutput('deleteProvider', 'v4762', ctc6, v4762);
        const v4769 = [v4738];
        const v4770 = ['DeleteProvider', v4769];
        null;
        const v4771 = v2643.closed;
        const v4772 = v2643.manager;
        const v4773 = v2643.providerCount;
        const v4774 = v2643.providerCounter;
        const v4775 = v2643.safeAmount;
        const v4776 = v2643.safeSize;
        const v4778 = v2643.subscriberCounter;
        const v4780 = stdlib.safeSub(v4773, stdlib.checkedBigNumberify('./index.rsh:316:60:decimal', stdlib.UInt_max, '1'));
        const v4781 = {
          closed: v4771,
          manager: v4772,
          providerCount: v4780,
          providerCounter: v4774,
          safeAmount: v4775,
          safeSize: v4776,
          subscriberCount: v4739,
          subscriberCounter: v4778
          };
        const cv2643 = v4781;
        const cv2644 = v2927;
        
        v2643 = cv2643;
        v2644 = cv2644;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteSubscription0_219': {
        const v5025 = v2926[1];
        undefined /* setApiDetails */;
        ;
        const v5309 = v5025[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '0')];
        const v5310 = v5025[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '1')];
        const v5311 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v5309, ctc4), null);
        const v5312 = {
          None: 0,
          Some: 1
          }[v5311[0]];
        const v5313 = stdlib.eq(v5312, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5313, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        const v5315 = [v5309, v5310];
        const v5316 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v5315, ctc7), null);
        const v5317 = {
          None: 0,
          Some: 1
          }[v5316[0]];
        const v5318 = stdlib.eq(v5317, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5318, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
          msg: 'not subscribed',
          who: 'Deployer'
          });
        const v5322 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v5323 = stdlib.fromSome(v5316, v5322);
        const v5324 = v5323[stdlib.checkedBigNumberify('./index.rsh:273:48:array ref', stdlib.UInt_max, '0')];
        const v5325 = stdlib.eq256(v5324, stdlib.checkedBigNumberify('./index.rsh:273:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v5325, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
          msg: 'not empty',
          who: 'Deployer'
          });
        let v5328;
        switch (v5311[0]) {
          case 'None': {
            const v5329 = v5311[1];
            v5328 = false;
            
            break;
            }
          case 'Some': {
            const v5330 = v5311[1];
            const v5331 = v5330.subscriberCount;
            const v5332 = stdlib.gt(v5331, stdlib.checkedBigNumberify('./index.rsh:275:76:decimal', stdlib.UInt_max, '0'));
            v5328 = v5332;
            
            break;
            }
          }
        stdlib.assert(v5328, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
          msg: 'no subscribers',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc14, v5315, ctc7, undefined /* Nothing */);
        switch (v5311[0]) {
          case 'None': {
            const v5338 = v5311[1];
            const v5340 = ['DeleteSubscription', v5315];
            null;
            const v5341 = true;
            await txn3.getOutput('deleteSubscription', 'v5341', ctc6, v5341);
            const v5349 = v2643.closed;
            const v5350 = v2643.manager;
            const v5351 = v2643.providerCount;
            const v5352 = v2643.providerCounter;
            const v5353 = v2643.safeAmount;
            const v5354 = v2643.safeSize;
            const v5355 = v2643.subscriberCount;
            const v5356 = v2643.subscriberCounter;
            const v5358 = stdlib.safeSub(v5355, stdlib.checkedBigNumberify('./index.rsh:296:64:decimal', stdlib.UInt_max, '1'));
            const v5359 = {
              closed: v5349,
              manager: v5350,
              providerCount: v5351,
              providerCounter: v5352,
              safeAmount: v5353,
              safeSize: v5354,
              subscriberCount: v5358,
              subscriberCounter: v5356
              };
            const cv2643 = v5359;
            const cv2644 = v2927;
            
            v2643 = cv2643;
            v2644 = cv2644;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v5362 = v5311[1];
            const v5363 = v5362.token;
            const v5364 = v5362.periodCount;
            const v5365 = v5362.periodAmount;
            const v5366 = v5362.periodLength;
            const v5367 = v5362.subscriberCounter;
            const v5368 = v5362.subscriberCount;
            const v5369 = stdlib.safeSub(v5368, stdlib.checkedBigNumberify('./index.rsh:291:68:decimal', stdlib.UInt_max, '1'));
            const v5370 = {
              periodAmount: v5365,
              periodCount: v5364,
              periodLength: v5366,
              subscriberCount: v5369,
              subscriberCounter: v5367,
              token: v5363
              };
            await stdlib.mapSet(map0, ctc10, v5309, ctc4, v5370);
            const v5372 = ['DeleteSubscription', v5315];
            null;
            const v5373 = true;
            await txn3.getOutput('deleteSubscription', 'v5373', ctc6, v5373);
            const v5381 = v2643.closed;
            const v5382 = v2643.manager;
            const v5383 = v2643.providerCount;
            const v5384 = v2643.providerCounter;
            const v5385 = v2643.safeAmount;
            const v5386 = v2643.safeSize;
            const v5387 = v2643.subscriberCount;
            const v5388 = v2643.subscriberCounter;
            const v5390 = stdlib.safeSub(v5387, stdlib.checkedBigNumberify('./index.rsh:296:64:decimal', stdlib.UInt_max, '1'));
            const v5391 = {
              closed: v5381,
              manager: v5382,
              providerCount: v5383,
              providerCounter: v5384,
              safeAmount: v5385,
              safeSize: v5386,
              subscriberCount: v5390,
              subscriberCounter: v5388
              };
            const cv2643 = v5391;
            const cv2644 = v2927;
            
            v2643 = cv2643;
            v2644 = cv2644;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'grant0_219': {
        const v5549 = v2926[1];
        undefined /* setApiDetails */;
        ;
        const v5919 = v5549[stdlib.checkedBigNumberify('./index.rsh:320:10:spread', stdlib.UInt_max, '0')];
        const v5920 = v2643.manager;
        const v5921 = stdlib.addressEq(v2925, v5920);
        stdlib.assert(v5921, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:323:13:application call to [unknown function] (defined at: ./index.rsh:323:13:function exp)'],
          msg: 'Only constructor can grant',
          who: 'Deployer'
          });
        const v5924 = true;
        await txn3.getOutput('grant', 'v5924', ctc6, v5924);
        const v5931 = [v5919];
        const v5932 = ['GrantEvent', v5931];
        null;
        const v5933 = v2643.closed;
        const v5935 = v2643.providerCount;
        const v5936 = v2643.providerCounter;
        const v5937 = v2643.safeAmount;
        const v5938 = v2643.safeSize;
        const v5939 = v2643.subscriberCount;
        const v5940 = v2643.subscriberCounter;
        const v5941 = {
          closed: v5933,
          manager: v5919,
          providerCount: v5935,
          providerCounter: v5936,
          safeAmount: v5937,
          safeSize: v5938,
          subscriberCount: v5939,
          subscriberCounter: v5940
          };
        const cv2643 = v5941;
        const cv2644 = v2927;
        
        v2643 = cv2643;
        v2644 = cv2644;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'subscribe0_219': {
        const v6073 = v2926[1];
        undefined /* setApiDetails */;
        ;
        const v6469 = v6073[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
        const v6470 = [v6469, v2925];
        const v6471 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v6470, ctc7), null);
        const v6472 = {
          None: 0,
          Some: 1
          }[v6471[0]];
        const v6473 = stdlib.eq(v6472, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6473, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)'],
          msg: 'already subscribed',
          who: 'Deployer'
          });
        const v6475 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v6469, ctc4), null);
        const v6476 = {
          None: 0,
          Some: 1
          }[v6475[0]];
        const v6477 = stdlib.eq(v6476, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6477, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)'],
          msg: 'invalid provider',
          who: 'Deployer'
          });
        let v6481;
        switch (v6475[0]) {
          case 'None': {
            const v6483 = v6475[1];
            v6481 = stdlib.checkedBigNumberify('./index.rsh:166:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
            
            break;
            }
          case 'Some': {
            const v6484 = v6475[1];
            const v6485 = v6484.periodCount;
            const v6486 = v6484.periodAmount;
            const v6487 = stdlib.cast("UInt", "UInt256", v6485, false, true);
            const v6488 = stdlib.safeMul256(v6486, v6487);
            v6481 = v6488;
            
            break;
            }
          }
        const v6490 = [v6481, v2927, true];
        await stdlib.mapSet(map1, ctc14, v6470, ctc7, v6490);
        switch (v6475[0]) {
          case 'None': {
            const v6492 = v6475[1];
            const v6494 = ['SubscribeEvent', v6470];
            null;
            const v6495 = true;
            await txn3.getOutput('subscribe', 'v6495', ctc6, v6495);
            const v6502 = v2643.closed;
            const v6503 = v2643.manager;
            const v6504 = v2643.providerCount;
            const v6505 = v2643.providerCounter;
            const v6506 = v2643.safeAmount;
            const v6507 = v2643.safeSize;
            const v6508 = v2643.subscriberCount;
            const v6509 = v2643.subscriberCounter;
            const v6511 = stdlib.safeAdd(v6508, stdlib.checkedBigNumberify('./index.rsh:201:52:decimal', stdlib.UInt_max, '1'));
            const v6513 = stdlib.safeAdd(v6509, stdlib.checkedBigNumberify('./index.rsh:202:56:decimal', stdlib.UInt_max, '1'));
            const v6535 = stdlib.gt256(v6507, v6506);
            const v6536 = v6535 ? v6507 : v6506;
            const v6537 = {
              closed: v6502,
              manager: v6503,
              providerCount: v6504,
              providerCounter: v6505,
              safeAmount: v6506,
              safeSize: v6536,
              subscriberCount: v6511,
              subscriberCounter: v6513
              };
            const cv2643 = v6537;
            const cv2644 = v2927;
            
            v2643 = cv2643;
            v2644 = cv2644;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v6540 = v6475[1];
            const v6541 = v6540.token;
            const v6542 = v6540.periodCount;
            const v6543 = v6540.periodAmount;
            const v6544 = v6540.periodLength;
            const v6545 = v6540.subscriberCounter;
            const v6546 = stdlib.safeAdd(v6545, stdlib.checkedBigNumberify('./index.rsh:192:72:decimal', stdlib.UInt_max, '1'));
            const v6547 = v6540.subscriberCount;
            const v6548 = stdlib.safeAdd(v6547, stdlib.checkedBigNumberify('./index.rsh:193:68:decimal', stdlib.UInt_max, '1'));
            const v6549 = {
              periodAmount: v6543,
              periodCount: v6542,
              periodLength: v6544,
              subscriberCount: v6548,
              subscriberCounter: v6546,
              token: v6541
              };
            await stdlib.mapSet(map0, ctc10, v6469, ctc4, v6549);
            const v6551 = ['SubscribeEvent', v6470];
            null;
            const v6552 = true;
            await txn3.getOutput('subscribe', 'v6552', ctc6, v6552);
            const v6559 = v2643.closed;
            const v6560 = v2643.manager;
            const v6561 = v2643.providerCount;
            const v6562 = v2643.providerCounter;
            const v6563 = v2643.safeAmount;
            const v6564 = v2643.safeSize;
            const v6565 = v2643.subscriberCount;
            const v6566 = v2643.subscriberCounter;
            const v6568 = stdlib.safeAdd(v6565, stdlib.checkedBigNumberify('./index.rsh:201:52:decimal', stdlib.UInt_max, '1'));
            const v6570 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:202:56:decimal', stdlib.UInt_max, '1'));
            const v6576 = v6549.periodCount;
            const v6577 = v6549.periodAmount;
            const v6578 = stdlib.cast("UInt", "UInt256", v6576, false, true);
            const v6579 = stdlib.safeMul256(v6577, v6578);
            const v6580 = stdlib.safeAdd256(v6563, v6579);
            const v6592 = stdlib.gt256(v6564, v6580);
            const v6593 = v6592 ? v6564 : v6580;
            const v6594 = {
              closed: v6559,
              manager: v6560,
              providerCount: v6561,
              providerCounter: v6562,
              safeAmount: v6580,
              safeSize: v6593,
              subscriberCount: v6568,
              subscriberCounter: v6570
              };
            const cv2643 = v6594;
            const cv2644 = v2927;
            
            v2643 = cv2643;
            v2644 = cv2644;
            
            txn2 = txn3;
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
export async function _announce3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _announce3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _announce3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc12,
    claim0_219: ctc13,
    close0_219: ctc9,
    deleteProvider0_219: ctc14,
    deleteSubscription0_219: ctc15,
    grant0_219: ctc14,
    subscribe0_219: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2693 = ctc.selfAddress();
  const v2695 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:128:72:application call to [unknown function] (defined at: ./index.rsh:128:72:function exp)', 'at ./index.rsh:94:29:application call to "runannounce0_219" (defined at: ./index.rsh:128:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'announce'
    });
  const v2704 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2693, ctc4), null);
  const v2705 = {
    None: 0,
    Some: 1
    }[v2704[0]];
  const v2706 = stdlib.eq(v2705, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2706, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:128:72:application call to [unknown function] (defined at: ./index.rsh:128:72:function exp)', 'at ./index.rsh:94:29:application call to "runannounce0_219" (defined at: ./index.rsh:128:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'provider already exists',
    who: 'announce'
    });
  const v2719 = ['announce0_219', v2695];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2719],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:128:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "announce"
            });
          ;
          const v2966 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '0')];
          const v2967 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '1')];
          const v2968 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '2')];
          const v2969 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '3')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v2925, ctc4), null);
          const v2978 = {
            periodAmount: v2968,
            periodCount: v2967,
            periodLength: v2969,
            subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            token: v2966
            };
          await stdlib.simMapSet(sim_r, 0, ctc10, v2925, ctc4, v2978);
          const v2979 = [v2966, v2925, v2967, v2968, v2969];
          const v2980 = ['AnnouncEvent', v2979];
          null;
          const v2981 = true;
          const v2982 = await txn1.getOutput('announce', 'v2981', ctc6, v2981);
          
          const v2991 = v2643.closed;
          const v2992 = v2643.manager;
          const v2993 = v2643.providerCount;
          const v2994 = v2643.providerCounter;
          const v2995 = v2643.safeAmount;
          const v2996 = v2643.safeSize;
          const v2997 = v2643.subscriberCount;
          const v2998 = v2643.subscriberCounter;
          const v3000 = stdlib.safeAdd(v2993, stdlib.checkedBigNumberify('./index.rsh:154:48:decimal', stdlib.UInt_max, '1'));
          const v3002 = stdlib.safeAdd(v2994, stdlib.checkedBigNumberify('./index.rsh:155:52:decimal', stdlib.UInt_max, '1'));
          const v3003 = {
            closed: v2991,
            manager: v2992,
            providerCount: v3000,
            providerCounter: v3002,
            safeAmount: v2995,
            safeSize: v2996,
            subscriberCount: v2997,
            subscriberCounter: v2998
            };
          const v14528 = v3003;
          const v14530 = v3003.closed;
          if (v14530) {
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
        case 'claim0_219': {
          const v3453 = v2926[1];
          
          break;
          }
        case 'close0_219': {
          const v3977 = v2926[1];
          
          break;
          }
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          
          break;
          }
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          
          break;
          }
        case 'grant0_219': {
          const v5549 = v2926[1];
          
          break;
          }
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      undefined /* setApiDetails */;
      ;
      const v2966 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '0')];
      const v2967 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '1')];
      const v2968 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '2')];
      const v2969 = v2929[stdlib.checkedBigNumberify('./index.rsh:128:10:spread', stdlib.UInt_max, '3')];
      const v2970 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2925, ctc4), null);
      const v2971 = {
        None: 0,
        Some: 1
        }[v2970[0]];
      const v2972 = stdlib.eq(v2971, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2972, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)'],
        msg: 'provider already exists',
        who: 'announce'
        });
      const v2978 = {
        periodAmount: v2968,
        periodCount: v2967,
        periodLength: v2969,
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        token: v2966
        };
      await stdlib.mapSet(map0, ctc10, v2925, ctc4, v2978);
      const v2979 = [v2966, v2925, v2967, v2968, v2969];
      const v2980 = ['AnnouncEvent', v2979];
      null;
      const v2981 = true;
      const v2982 = await txn1.getOutput('announce', 'v2981', ctc6, v2981);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v2929, v2982), {
          at: './index.rsh:128:11:application',
          fs: ['at ./index.rsh:128:11:application call to [unknown function] (defined at: ./index.rsh:128:11:function exp)', 'at ./index.rsh:150:12:application call to "k" (defined at: ./index.rsh:131:13:function exp)', 'at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:13:function exp)'],
          msg: 'out',
          who: 'announce'
          });
        }
      else {
        }
      
      const v2991 = v2643.closed;
      const v2992 = v2643.manager;
      const v2993 = v2643.providerCount;
      const v2994 = v2643.providerCounter;
      const v2995 = v2643.safeAmount;
      const v2996 = v2643.safeSize;
      const v2997 = v2643.subscriberCount;
      const v2998 = v2643.subscriberCounter;
      const v3000 = stdlib.safeAdd(v2993, stdlib.checkedBigNumberify('./index.rsh:154:48:decimal', stdlib.UInt_max, '1'));
      const v3002 = stdlib.safeAdd(v2994, stdlib.checkedBigNumberify('./index.rsh:155:52:decimal', stdlib.UInt_max, '1'));
      const v3003 = {
        closed: v2991,
        manager: v2992,
        providerCount: v3000,
        providerCounter: v3002,
        safeAmount: v2995,
        safeSize: v2996,
        subscriberCount: v2997,
        subscriberCounter: v2998
        };
      const v14528 = v3003;
      const v14530 = v3003.closed;
      if (v14530) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      return;
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      return;
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      return;
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      return;
      break;
      }
    case 'grant0_219': {
      const v5549 = v2926[1];
      return;
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claim3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claim3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claim3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc10]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc14,
    claim0_219: ctc12,
    close0_219: ctc9,
    deleteProvider0_219: ctc15,
    deleteSubscription0_219: ctc13,
    grant0_219: ctc15,
    subscribe0_219: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc2, ctc6]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc2, ctc10]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc2, ctc13]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2744 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to "runclaim0_219" (defined at: ./index.rsh:222:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'claim'
    });
  const v2745 = v2744[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2746 = v2744[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2747 = v2744[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2748 = v2744[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v2753 = [v2745, v2746];
  const v2754 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2753, ctc7), null);
  const v2755 = {
    None: 0,
    Some: 1
    }[v2754[0]];
  const v2756 = stdlib.eq(v2755, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2756, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to "runclaim0_219" (defined at: ./index.rsh:222:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'not subscribed',
    who: 'claim'
    });
  const v2758 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2745, ctc4), null);
  let v2759;
  switch (v2758[0]) {
    case 'None': {
      const v2760 = v2758[1];
      v2759 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      
      break;
      }
    case 'Some': {
      const v2761 = v2758[1];
      const v2762 = v2761.periodAmount;
      const v2763 = stdlib.cast("UInt", "UInt256", v2747, false, true);
      const v2764 = stdlib.safeMul256(v2762, v2763);
      v2759 = v2764;
      
      break;
      }
    }
  const v2767 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2768 = stdlib.fromSome(v2754, v2767);
  const v2769 = v2768[stdlib.checkedBigNumberify('./index.rsh:225:73:array ref', stdlib.UInt_max, '0')];
  const v2770 = stdlib.le256(v2759, v2769);
  stdlib.assert(v2770, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to "runclaim0_219" (defined at: ./index.rsh:222:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'not enough remaining',
    who: 'claim'
    });
  const v2783 = ['claim0_219', v2744];
  
  let v2907;
  switch (v2758[0]) {
    case 'None': {
      const v2908 = v2758[1];
      v2907 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
      
      break;
      }
    case 'Some': {
      const v2909 = v2758[1];
      const v2910 = v2909.periodAmount;
      const v2911 = stdlib.cast("UInt", "UInt256", v2747, false, true);
      const v2912 = stdlib.safeMul256(v2910, v2911);
      v2907 = v2912;
      
      break;
      }
    }
  const v2918 = stdlib.le256(v2907, v2769);
  stdlib.assert(v2918, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'not enough remaining',
    who: 'claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2783],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v2748, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          
          break;
          }
        case 'claim0_219': {
          const v3453 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claim"
            });
          const v3459 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '0')];
          const v3460 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '1')];
          const v3461 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '2')];
          const v3462 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '3')];
          const v3463 = [v3459, v3460];
          const v3464 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v3463, ctc7), null);
          const v3468 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v3459, ctc4), null);
          const v3477 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
          const v3478 = stdlib.fromSome(v3464, v3477);
          const v3479 = v3478[stdlib.checkedBigNumberify('./index.rsh:225:73:array ref', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v3462,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3560 = {
            periodAmount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            periodCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            periodLength: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            token: v2638
            };
          const v3561 = stdlib.fromSome(v3468, v3560);
          const v3562 = v3561.token;
          const v3568 = v3478[stdlib.checkedBigNumberify('./index.rsh:233:17:array', stdlib.UInt_max, '1')];
          const v3579 = await ctc.getContractAddress();
          const v3580 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3460];
          const v3581 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3459];
          const v3582 = [v3460, v3579];
          const v3583 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3582];
          let v3585;
          switch (v3468[0]) {
            case 'None': {
              const v3586 = v3468[1];
              v3585 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              
              break;
              }
            case 'Some': {
              const v3587 = v3468[1];
              const v3588 = v3587.periodAmount;
              const v3589 = stdlib.cast("UInt", "UInt256", v3461, false, true);
              const v3590 = stdlib.safeMul256(v3588, v3589);
              v3585 = v3590;
              
              break;
              }
            }
          const v3596 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3562,
              remote: ({
                accs: [v3460, v3459],
                apps: [v3562],
                bills: stdlib.checkedBigNumberify('./index.rsh:251:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc18, v3580], [ctc18, v3581], [ctc19, v3583]],
                fees: stdlib.checkedBigNumberify('./index.rsh:244:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:251:15:application', stdlib.UInt_max, '1'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v3596', ctc17, v3596);
          const v3606 = [v3459, v3460, v3461, v3462];
          const v3607 = ['ClaimEvent', v3606];
          null;
          let v3610;
          switch (v3468[0]) {
            case 'None': {
              const v3611 = v3468[1];
              v3610 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              
              break;
              }
            case 'Some': {
              const v3612 = v3468[1];
              const v3613 = v3612.periodAmount;
              const v3614 = stdlib.cast("UInt", "UInt256", v3461, false, true);
              const v3615 = stdlib.safeMul256(v3613, v3614);
              v3610 = v3615;
              
              break;
              }
            }
          const v3616 = stdlib.safeSub256(v3479, v3610);
          let v3618;
          switch (v3468[0]) {
            case 'None': {
              const v3619 = v3468[1];
              v3618 = stdlib.checkedBigNumberify('./index.rsh:217:39:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v3620 = v3468[1];
              const v3621 = v3620.periodLength;
              const v3622 = stdlib.safeMul(v3621, v3461);
              v3618 = v3622;
              
              break;
              }
            }
          const v3623 = stdlib.safeAdd(v3568, v3618);
          const v3624 = [v3616, v3623, true];
          await stdlib.simMapSet(sim_r, 1, ctc13, v3463, ctc7, v3624);
          const v3625 = true;
          const v3626 = await txn1.getOutput('claim', 'v3625', ctc6, v3625);
          
          const v3635 = v2643.closed;
          const v3636 = v2643.manager;
          const v3637 = v2643.providerCount;
          const v3638 = v2643.providerCounter;
          const v3639 = v2643.safeAmount;
          const v3640 = v2643.safeSize;
          const v3641 = v2643.subscriberCount;
          const v3642 = v2643.subscriberCounter;
          let v3645;
          switch (v3468[0]) {
            case 'None': {
              const v3646 = v3468[1];
              v3645 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              
              break;
              }
            case 'Some': {
              const v3647 = v3468[1];
              const v3648 = v3647.periodAmount;
              const v3649 = stdlib.cast("UInt", "UInt256", v3461, false, true);
              const v3650 = stdlib.safeMul256(v3648, v3649);
              v3645 = v3650;
              
              break;
              }
            }
          const v3651 = stdlib.safeSub256(v3639, v3645);
          const v3652 = {
            closed: v3635,
            manager: v3636,
            providerCount: v3637,
            providerCounter: v3638,
            safeAmount: v3651,
            safeSize: v3640,
            subscriberCount: v3641,
            subscriberCounter: v3642
            };
          const v14568 = v3652;
          const v14570 = v3652.closed;
          if (v14570) {
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
        case 'close0_219': {
          const v3977 = v2926[1];
          
          break;
          }
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          
          break;
          }
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          
          break;
          }
        case 'grant0_219': {
          const v5549 = v2926[1];
          
          break;
          }
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      return;
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      undefined /* setApiDetails */;
      const v3459 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '0')];
      const v3460 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '1')];
      const v3461 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '2')];
      const v3462 = v3453[stdlib.checkedBigNumberify('./index.rsh:222:10:spread', stdlib.UInt_max, '3')];
      const v3463 = [v3459, v3460];
      const v3464 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3463, ctc7), null);
      const v3465 = {
        None: 0,
        Some: 1
        }[v3464[0]];
      const v3466 = stdlib.eq(v3465, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3466, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
        msg: 'not subscribed',
        who: 'claim'
        });
      const v3468 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v3459, ctc4), null);
      let v3469;
      switch (v3468[0]) {
        case 'None': {
          const v3470 = v3468[1];
          v3469 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          
          break;
          }
        case 'Some': {
          const v3471 = v3468[1];
          const v3472 = v3471.periodAmount;
          const v3473 = stdlib.cast("UInt", "UInt256", v3461, false, true);
          const v3474 = stdlib.safeMul256(v3472, v3473);
          v3469 = v3474;
          
          break;
          }
        }
      const v3477 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
      const v3478 = stdlib.fromSome(v3464, v3477);
      const v3479 = v3478[stdlib.checkedBigNumberify('./index.rsh:225:73:array ref', stdlib.UInt_max, '0')];
      const v3480 = stdlib.le256(v3469, v3479);
      stdlib.assert(v3480, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:222:51:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:222:51:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
        msg: 'not enough remaining',
        who: 'claim'
        });
      ;
      let v3541;
      switch (v3468[0]) {
        case 'None': {
          const v3542 = v3468[1];
          v3541 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          
          break;
          }
        case 'Some': {
          const v3543 = v3468[1];
          const v3544 = v3543.periodAmount;
          const v3545 = stdlib.cast("UInt", "UInt256", v3461, false, true);
          const v3546 = stdlib.safeMul256(v3544, v3545);
          v3541 = v3546;
          
          break;
          }
        }
      const v3552 = stdlib.le256(v3541, v3479);
      stdlib.assert(v3552, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
        msg: 'not enough remaining',
        who: 'claim'
        });
      const v3560 = {
        periodAmount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        periodCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        periodLength: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        subscriberCounter: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        token: v2638
        };
      const v3561 = stdlib.fromSome(v3468, v3560);
      const v3562 = v3561.token;
      const v3568 = v3478[stdlib.checkedBigNumberify('./index.rsh:233:17:array', stdlib.UInt_max, '1')];
      let v3572;
      switch (v3468[0]) {
        case 'None': {
          const v3573 = v3468[1];
          v3572 = stdlib.checkedBigNumberify('./index.rsh:217:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v3574 = v3468[1];
          const v3575 = v3574.periodLength;
          const v3576 = stdlib.safeMul(v3575, v3461);
          v3572 = v3576;
          
          break;
          }
        }
      const v3577 = stdlib.safeAdd(v3568, v3572);
      const v3578 = stdlib.ge(v2927, v3577);
      stdlib.assert(v3578, {
        at: './index.rsh:234:18:application',
        fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
        msg: 'not enough time has passed',
        who: 'claim'
        });
      const v3579 = await ctc.getContractAddress();
      const v3580 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3460];
      const v3581 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3459];
      const v3582 = [v3460, v3579];
      const v3583 = [v3562, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3582];
      let v3585;
      switch (v3468[0]) {
        case 'None': {
          const v3586 = v3468[1];
          v3585 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          
          break;
          }
        case 'Some': {
          const v3587 = v3468[1];
          const v3588 = v3587.periodAmount;
          const v3589 = stdlib.cast("UInt", "UInt256", v3461, false, true);
          const v3590 = stdlib.safeMul256(v3588, v3589);
          v3585 = v3590;
          
          break;
          }
        }
      const v3596 = undefined /* Remote */;
      const v3597 = await txn1.getOutput('internal', 'v3596', ctc17, v3596);
      const v3599 = v3597[stdlib.checkedBigNumberify('./index.rsh:251:15:application', stdlib.UInt_max, '0')];
      const v3600 = v3597[stdlib.checkedBigNumberify('./index.rsh:251:15:application', stdlib.UInt_max, '1')];
      const v3605 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3599);
      stdlib.assert(v3605, {
        at: './index.rsh:251:15:application',
        fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
        msg: 'remote bill check',
        who: 'claim'
        });
      stdlib.assert(v3600, {
        at: './index.rsh:242:18:application',
        fs: ['at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
        msg: 'transfer failed',
        who: 'claim'
        });
      const v3606 = [v3459, v3460, v3461, v3462];
      const v3607 = ['ClaimEvent', v3606];
      null;
      let v3610;
      switch (v3468[0]) {
        case 'None': {
          const v3611 = v3468[1];
          v3610 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          
          break;
          }
        case 'Some': {
          const v3612 = v3468[1];
          const v3613 = v3612.periodAmount;
          const v3614 = stdlib.cast("UInt", "UInt256", v3461, false, true);
          const v3615 = stdlib.safeMul256(v3613, v3614);
          v3610 = v3615;
          
          break;
          }
        }
      const v3616 = stdlib.safeSub256(v3479, v3610);
      let v3618;
      switch (v3468[0]) {
        case 'None': {
          const v3619 = v3468[1];
          v3618 = stdlib.checkedBigNumberify('./index.rsh:217:39:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v3620 = v3468[1];
          const v3621 = v3620.periodLength;
          const v3622 = stdlib.safeMul(v3621, v3461);
          v3618 = v3622;
          
          break;
          }
        }
      const v3623 = stdlib.safeAdd(v3568, v3618);
      const v3624 = [v3616, v3623, true];
      await stdlib.mapSet(map1, ctc13, v3463, ctc7, v3624);
      const v3625 = true;
      const v3626 = await txn1.getOutput('claim', 'v3625', ctc6, v3625);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v3453, v3626), {
          at: './index.rsh:222:11:application',
          fs: ['at ./index.rsh:222:11:application call to [unknown function] (defined at: ./index.rsh:222:11:function exp)', 'at ./index.rsh:260:12:application call to "k" (defined at: ./index.rsh:230:13:function exp)', 'at ./index.rsh:230:13:application call to [unknown function] (defined at: ./index.rsh:230:13:function exp)'],
          msg: 'out',
          who: 'claim'
          });
        }
      else {
        }
      
      const v3635 = v2643.closed;
      const v3636 = v2643.manager;
      const v3637 = v2643.providerCount;
      const v3638 = v2643.providerCounter;
      const v3639 = v2643.safeAmount;
      const v3640 = v2643.safeSize;
      const v3641 = v2643.subscriberCount;
      const v3642 = v2643.subscriberCounter;
      let v3645;
      switch (v3468[0]) {
        case 'None': {
          const v3646 = v3468[1];
          v3645 = stdlib.checkedBigNumberify('./index.rsh:212:47:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          
          break;
          }
        case 'Some': {
          const v3647 = v3468[1];
          const v3648 = v3647.periodAmount;
          const v3649 = stdlib.cast("UInt", "UInt256", v3461, false, true);
          const v3650 = stdlib.safeMul256(v3648, v3649);
          v3645 = v3650;
          
          break;
          }
        }
      const v3651 = stdlib.safeSub256(v3639, v3645);
      const v3652 = {
        closed: v3635,
        manager: v3636,
        providerCount: v3637,
        providerCounter: v3638,
        safeAmount: v3651,
        safeSize: v3640,
        subscriberCount: v3641,
        subscriberCounter: v3642
        };
      const v14568 = v3652;
      const v14570 = v3652.closed;
      if (v14570) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      return;
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      return;
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      return;
      break;
      }
    case 'grant0_219': {
      const v5549 = v2926[1];
      return;
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _close3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _close3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _close3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc12,
    claim0_219: ctc13,
    close0_219: ctc9,
    deleteProvider0_219: ctc14,
    deleteSubscription0_219: ctc15,
    grant0_219: ctc14,
    subscribe0_219: ctc14
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2875 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:335:23:application call to [unknown function] (defined at: ./index.rsh:335:23:function exp)', 'at ./index.rsh:94:29:application call to "runclose0_219" (defined at: ./index.rsh:335:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v2876 = v2643.providerCounter;
  const v2877 = stdlib.eq(v2876, stdlib.checkedBigNumberify('./index.rsh:336:34:decimal', stdlib.UInt_max, '0'));
  const v2878 = v2877 ? false : true;
  stdlib.assert(v2878, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:335:23:application call to [unknown function] (defined at: ./index.rsh:335:23:function exp)', 'at ./index.rsh:94:29:application call to "runclose0_219" (defined at: ./index.rsh:335:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'no providers',
    who: 'close'
    });
  const v2880 = v2643.subscriberCounter;
  const v2881 = stdlib.eq(v2880, stdlib.checkedBigNumberify('./index.rsh:337:36:decimal', stdlib.UInt_max, '0'));
  const v2882 = v2881 ? false : true;
  stdlib.assert(v2882, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:335:23:application call to [unknown function] (defined at: ./index.rsh:335:23:function exp)', 'at ./index.rsh:94:29:application call to "runclose0_219" (defined at: ./index.rsh:335:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'no subscribers',
    who: 'close'
    });
  const v2884 = v2643.providerCount;
  const v2885 = stdlib.eq(v2884, stdlib.checkedBigNumberify('./index.rsh:338:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2885, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:335:23:application call to [unknown function] (defined at: ./index.rsh:335:23:function exp)', 'at ./index.rsh:94:29:application call to "runclose0_219" (defined at: ./index.rsh:335:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'providers not empty',
    who: 'close'
    });
  const v2887 = v2643.subscriberCount;
  const v2888 = stdlib.eq(v2887, stdlib.checkedBigNumberify('./index.rsh:339:34:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2888, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:339:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:335:23:application call to [unknown function] (defined at: ./index.rsh:335:23:function exp)', 'at ./index.rsh:94:29:application call to "runclose0_219" (defined at: ./index.rsh:335:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'subscribers not empty',
    who: 'close'
    });
  const v2893 = ['close0_219', v2875];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2893],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:335:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          
          break;
          }
        case 'claim0_219': {
          const v3453 = v2926[1];
          
          break;
          }
        case 'close0_219': {
          const v3977 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v4180 = v2643.providerCounter;
          const v4184 = v2643.subscriberCounter;
          const v4188 = v2643.providerCount;
          const v4191 = v2643.subscriberCount;
          const v4195 = ['CloseEvent', v2640];
          null;
          const v4196 = true;
          const v4197 = await txn1.getOutput('close', 'v4196', ctc6, v4196);
          
          const v4203 = v2643.manager;
          const v4206 = v2643.safeAmount;
          const v4207 = v2643.safeSize;
          const v4210 = {
            closed: true,
            manager: v4203,
            providerCount: v4188,
            providerCounter: v4180,
            safeAmount: v4206,
            safeSize: v4207,
            subscriberCount: v4191,
            subscriberCounter: v4184
            };
          const v14608 = v4210;
          const v14610 = v4210.closed;
          if (v14610) {
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
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          
          break;
          }
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          
          break;
          }
        case 'grant0_219': {
          const v5549 = v2926[1];
          
          break;
          }
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      return;
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      return;
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      undefined /* setApiDetails */;
      ;
      const v4180 = v2643.providerCounter;
      const v4181 = stdlib.eq(v4180, stdlib.checkedBigNumberify('./index.rsh:336:34:decimal', stdlib.UInt_max, '0'));
      const v4182 = v4181 ? false : true;
      stdlib.assert(v4182, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
        msg: 'no providers',
        who: 'close'
        });
      const v4184 = v2643.subscriberCounter;
      const v4185 = stdlib.eq(v4184, stdlib.checkedBigNumberify('./index.rsh:337:36:decimal', stdlib.UInt_max, '0'));
      const v4186 = v4185 ? false : true;
      stdlib.assert(v4186, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
        msg: 'no subscribers',
        who: 'close'
        });
      const v4188 = v2643.providerCount;
      const v4189 = stdlib.eq(v4188, stdlib.checkedBigNumberify('./index.rsh:338:32:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4189, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
        msg: 'providers not empty',
        who: 'close'
        });
      const v4191 = v2643.subscriberCount;
      const v4192 = stdlib.eq(v4191, stdlib.checkedBigNumberify('./index.rsh:339:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4192, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:339:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
        msg: 'subscribers not empty',
        who: 'close'
        });
      const v4195 = ['CloseEvent', v2640];
      null;
      const v4196 = true;
      const v4197 = await txn1.getOutput('close', 'v4196', ctc6, v4196);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v3977, v4197), {
          at: './index.rsh:335:11:application',
          fs: ['at ./index.rsh:335:11:application call to [unknown function] (defined at: ./index.rsh:335:11:function exp)', 'at ./index.rsh:343:12:application call to "k" (defined at: ./index.rsh:341:13:function exp)', 'at ./index.rsh:341:13:application call to [unknown function] (defined at: ./index.rsh:341:13:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v4203 = v2643.manager;
      const v4206 = v2643.safeAmount;
      const v4207 = v2643.safeSize;
      const v4210 = {
        closed: true,
        manager: v4203,
        providerCount: v4188,
        providerCounter: v4180,
        safeAmount: v4206,
        safeSize: v4207,
        subscriberCount: v4191,
        subscriberCounter: v4184
        };
      const v14608 = v4210;
      const v14610 = v4210.closed;
      if (v14610) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      return;
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      return;
      break;
      }
    case 'grant0_219': {
      const v5549 = v2926[1];
      return;
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteProvider3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteProvider3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteProvider3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc13,
    claim0_219: ctc14,
    close0_219: ctc9,
    deleteProvider0_219: ctc12,
    deleteSubscription0_219: ctc15,
    grant0_219: ctc12,
    subscribe0_219: ctc12
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2826 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:300:36:application call to [unknown function] (defined at: ./index.rsh:300:36:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteProvider0_219" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'deleteProvider'
    });
  const v2827 = v2826[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2829 = v2643.subscriberCount;
  const v2830 = stdlib.eq(v2829, stdlib.checkedBigNumberify('./index.rsh:301:34:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2830, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:300:36:application call to [unknown function] (defined at: ./index.rsh:300:36:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteProvider0_219" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'not empty',
    who: 'deleteProvider'
    });
  const v2832 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2827, ctc4), null);
  const v2833 = {
    None: 0,
    Some: 1
    }[v2832[0]];
  const v2834 = stdlib.eq(v2833, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2834, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:302:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:300:36:application call to [unknown function] (defined at: ./index.rsh:300:36:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteProvider0_219" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'invalid provider',
    who: 'deleteProvider'
    });
  let v2837;
  switch (v2832[0]) {
    case 'None': {
      const v2838 = v2832[1];
      v2837 = false;
      
      break;
      }
    case 'Some': {
      const v2839 = v2832[1];
      const v2840 = v2839.subscriberCount;
      const v2841 = stdlib.eq(v2840, stdlib.checkedBigNumberify('./index.rsh:304:74:decimal', stdlib.UInt_max, '0'));
      v2837 = v2841;
      
      break;
      }
    }
  stdlib.assert(v2837, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:300:36:application call to [unknown function] (defined at: ./index.rsh:300:36:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteProvider0_219" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'has subscribers',
    who: 'deleteProvider'
    });
  let v2844;
  switch (v2832[0]) {
    case 'None': {
      const v2845 = v2832[1];
      v2844 = false;
      
      break;
      }
    case 'Some': {
      const v2846 = v2832[1];
      const v2847 = v2846.subscriberCounter;
      const v2848 = stdlib.eq(v2847, stdlib.checkedBigNumberify('./index.rsh:308:76:decimal', stdlib.UInt_max, '0'));
      const v2849 = v2848 ? false : true;
      v2844 = v2849;
      
      break;
      }
    }
  stdlib.assert(v2844, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:300:36:application call to [unknown function] (defined at: ./index.rsh:300:36:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteProvider0_219" (defined at: ./index.rsh:300:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'no subscribers',
    who: 'deleteProvider'
    });
  const v2856 = ['deleteProvider0_219', v2826];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2856],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:300:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          
          break;
          }
        case 'claim0_219': {
          const v3453 = v2926[1];
          
          break;
          }
        case 'close0_219': {
          const v3977 = v2926[1];
          
          break;
          }
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteProvider"
            });
          ;
          const v4738 = v4501[stdlib.checkedBigNumberify('./index.rsh:300:10:spread', stdlib.UInt_max, '0')];
          const v4739 = v2643.subscriberCount;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v4738, ctc4), null);
          await stdlib.simMapSet(sim_r, 0, ctc10, v4738, ctc4, undefined /* Nothing */);
          const v4762 = true;
          const v4763 = await txn1.getOutput('deleteProvider', 'v4762', ctc6, v4762);
          
          const v4769 = [v4738];
          const v4770 = ['DeleteProvider', v4769];
          null;
          const v4771 = v2643.closed;
          const v4772 = v2643.manager;
          const v4773 = v2643.providerCount;
          const v4774 = v2643.providerCounter;
          const v4775 = v2643.safeAmount;
          const v4776 = v2643.safeSize;
          const v4778 = v2643.subscriberCounter;
          const v4780 = stdlib.safeSub(v4773, stdlib.checkedBigNumberify('./index.rsh:316:60:decimal', stdlib.UInt_max, '1'));
          const v4781 = {
            closed: v4771,
            manager: v4772,
            providerCount: v4780,
            providerCounter: v4774,
            safeAmount: v4775,
            safeSize: v4776,
            subscriberCount: v4739,
            subscriberCounter: v4778
            };
          const v14648 = v4781;
          const v14650 = v4781.closed;
          if (v14650) {
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
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          
          break;
          }
        case 'grant0_219': {
          const v5549 = v2926[1];
          
          break;
          }
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      return;
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      return;
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      return;
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      undefined /* setApiDetails */;
      ;
      const v4738 = v4501[stdlib.checkedBigNumberify('./index.rsh:300:10:spread', stdlib.UInt_max, '0')];
      const v4739 = v2643.subscriberCount;
      const v4740 = stdlib.eq(v4739, stdlib.checkedBigNumberify('./index.rsh:301:34:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4740, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
        msg: 'not empty',
        who: 'deleteProvider'
        });
      const v4742 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v4738, ctc4), null);
      const v4743 = {
        None: 0,
        Some: 1
        }[v4742[0]];
      const v4744 = stdlib.eq(v4743, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4744, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:302:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
        msg: 'invalid provider',
        who: 'deleteProvider'
        });
      let v4747;
      switch (v4742[0]) {
        case 'None': {
          const v4748 = v4742[1];
          v4747 = false;
          
          break;
          }
        case 'Some': {
          const v4749 = v4742[1];
          const v4750 = v4749.subscriberCount;
          const v4751 = stdlib.eq(v4750, stdlib.checkedBigNumberify('./index.rsh:304:74:decimal', stdlib.UInt_max, '0'));
          v4747 = v4751;
          
          break;
          }
        }
      stdlib.assert(v4747, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
        msg: 'has subscribers',
        who: 'deleteProvider'
        });
      let v4754;
      switch (v4742[0]) {
        case 'None': {
          const v4755 = v4742[1];
          v4754 = false;
          
          break;
          }
        case 'Some': {
          const v4756 = v4742[1];
          const v4757 = v4756.subscriberCounter;
          const v4758 = stdlib.eq(v4757, stdlib.checkedBigNumberify('./index.rsh:308:76:decimal', stdlib.UInt_max, '0'));
          const v4759 = v4758 ? false : true;
          v4754 = v4759;
          
          break;
          }
        }
      stdlib.assert(v4754, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:307:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
        msg: 'no subscribers',
        who: 'deleteProvider'
        });
      await stdlib.mapSet(map0, ctc10, v4738, ctc4, undefined /* Nothing */);
      const v4762 = true;
      const v4763 = await txn1.getOutput('deleteProvider', 'v4762', ctc6, v4762);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v4501, v4763), {
          at: './index.rsh:300:11:application',
          fs: ['at ./index.rsh:300:11:application call to [unknown function] (defined at: ./index.rsh:300:11:function exp)', 'at ./index.rsh:314:12:application call to "k" (defined at: ./index.rsh:312:13:function exp)', 'at ./index.rsh:312:13:application call to [unknown function] (defined at: ./index.rsh:312:13:function exp)'],
          msg: 'out',
          who: 'deleteProvider'
          });
        }
      else {
        }
      
      const v4769 = [v4738];
      const v4770 = ['DeleteProvider', v4769];
      null;
      const v4771 = v2643.closed;
      const v4772 = v2643.manager;
      const v4773 = v2643.providerCount;
      const v4774 = v2643.providerCounter;
      const v4775 = v2643.safeAmount;
      const v4776 = v2643.safeSize;
      const v4778 = v2643.subscriberCounter;
      const v4780 = stdlib.safeSub(v4773, stdlib.checkedBigNumberify('./index.rsh:316:60:decimal', stdlib.UInt_max, '1'));
      const v4781 = {
        closed: v4771,
        manager: v4772,
        providerCount: v4780,
        providerCounter: v4774,
        safeAmount: v4775,
        safeSize: v4776,
        subscriberCount: v4739,
        subscriberCounter: v4778
        };
      const v14648 = v4781;
      const v14650 = v4781.closed;
      if (v14650) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      return;
      break;
      }
    case 'grant0_219': {
      const v5549 = v2926[1];
      return;
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteSubscription3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteSubscription3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteSubscription3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc10]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc13,
    claim0_219: ctc14,
    close0_219: ctc9,
    deleteProvider0_219: ctc15,
    deleteSubscription0_219: ctc12,
    grant0_219: ctc15,
    subscribe0_219: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2787 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:270:54:application call to [unknown function] (defined at: ./index.rsh:270:54:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteSubscription0_219" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'deleteSubscription'
    });
  const v2788 = v2787[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2789 = v2787[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2792 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2788, ctc4), null);
  const v2793 = {
    None: 0,
    Some: 1
    }[v2792[0]];
  const v2794 = stdlib.eq(v2793, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2794, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:54:application call to [unknown function] (defined at: ./index.rsh:270:54:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteSubscription0_219" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'invalid provider',
    who: 'deleteSubscription'
    });
  const v2796 = [v2788, v2789];
  const v2797 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2796, ctc7), null);
  const v2798 = {
    None: 0,
    Some: 1
    }[v2797[0]];
  const v2799 = stdlib.eq(v2798, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2799, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:54:application call to [unknown function] (defined at: ./index.rsh:270:54:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteSubscription0_219" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'not subscribed',
    who: 'deleteSubscription'
    });
  const v2803 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2804 = stdlib.fromSome(v2797, v2803);
  const v2805 = v2804[stdlib.checkedBigNumberify('./index.rsh:273:48:array ref', stdlib.UInt_max, '0')];
  const v2806 = stdlib.eq256(v2805, stdlib.checkedBigNumberify('./index.rsh:273:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2806, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:54:application call to [unknown function] (defined at: ./index.rsh:270:54:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteSubscription0_219" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'not empty',
    who: 'deleteSubscription'
    });
  let v2809;
  switch (v2792[0]) {
    case 'None': {
      const v2810 = v2792[1];
      v2809 = false;
      
      break;
      }
    case 'Some': {
      const v2811 = v2792[1];
      const v2812 = v2811.subscriberCount;
      const v2813 = stdlib.gt(v2812, stdlib.checkedBigNumberify('./index.rsh:275:76:decimal', stdlib.UInt_max, '0'));
      v2809 = v2813;
      
      break;
      }
    }
  stdlib.assert(v2809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:54:application call to [unknown function] (defined at: ./index.rsh:270:54:function exp)', 'at ./index.rsh:94:29:application call to "rundeleteSubscription0_219" (defined at: ./index.rsh:270:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'no subscribers',
    who: 'deleteSubscription'
    });
  const v2822 = ['deleteSubscription0_219', v2787];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2822],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:270:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          
          break;
          }
        case 'claim0_219': {
          const v3453 = v2926[1];
          
          break;
          }
        case 'close0_219': {
          const v3977 = v2926[1];
          
          break;
          }
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          
          break;
          }
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteSubscription"
            });
          ;
          const v5309 = v5025[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '0')];
          const v5310 = v5025[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '1')];
          const v5311 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v5309, ctc4), null);
          const v5315 = [v5309, v5310];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc12, v5315, ctc7), null);
          await stdlib.simMapSet(sim_r, 1, ctc12, v5315, ctc7, undefined /* Nothing */);
          switch (v5311[0]) {
            case 'None': {
              const v5338 = v5311[1];
              const v5340 = ['DeleteSubscription', v5315];
              null;
              const v5341 = true;
              const v5342 = await txn1.getOutput('deleteSubscription', 'v5341', ctc6, v5341);
              
              const v5349 = v2643.closed;
              const v5350 = v2643.manager;
              const v5351 = v2643.providerCount;
              const v5352 = v2643.providerCounter;
              const v5353 = v2643.safeAmount;
              const v5354 = v2643.safeSize;
              const v5355 = v2643.subscriberCount;
              const v5356 = v2643.subscriberCounter;
              const v5358 = stdlib.safeSub(v5355, stdlib.checkedBigNumberify('./index.rsh:296:64:decimal', stdlib.UInt_max, '1'));
              const v5359 = {
                closed: v5349,
                manager: v5350,
                providerCount: v5351,
                providerCounter: v5352,
                safeAmount: v5353,
                safeSize: v5354,
                subscriberCount: v5358,
                subscriberCounter: v5356
                };
              const v14688 = v5359;
              const v14690 = v5359.closed;
              if (v14690) {
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
              const v5362 = v5311[1];
              const v5363 = v5362.token;
              const v5364 = v5362.periodCount;
              const v5365 = v5362.periodAmount;
              const v5366 = v5362.periodLength;
              const v5367 = v5362.subscriberCounter;
              const v5368 = v5362.subscriberCount;
              const v5369 = stdlib.safeSub(v5368, stdlib.checkedBigNumberify('./index.rsh:291:68:decimal', stdlib.UInt_max, '1'));
              const v5370 = {
                periodAmount: v5365,
                periodCount: v5364,
                periodLength: v5366,
                subscriberCount: v5369,
                subscriberCounter: v5367,
                token: v5363
                };
              await stdlib.simMapSet(sim_r, 0, ctc10, v5309, ctc4, v5370);
              const v5372 = ['DeleteSubscription', v5315];
              null;
              const v5373 = true;
              const v5374 = await txn1.getOutput('deleteSubscription', 'v5373', ctc6, v5373);
              
              const v5381 = v2643.closed;
              const v5382 = v2643.manager;
              const v5383 = v2643.providerCount;
              const v5384 = v2643.providerCounter;
              const v5385 = v2643.safeAmount;
              const v5386 = v2643.safeSize;
              const v5387 = v2643.subscriberCount;
              const v5388 = v2643.subscriberCounter;
              const v5390 = stdlib.safeSub(v5387, stdlib.checkedBigNumberify('./index.rsh:296:64:decimal', stdlib.UInt_max, '1'));
              const v5391 = {
                closed: v5381,
                manager: v5382,
                providerCount: v5383,
                providerCounter: v5384,
                safeAmount: v5385,
                safeSize: v5386,
                subscriberCount: v5390,
                subscriberCounter: v5388
                };
              const v14692 = v5391;
              const v14694 = v5391.closed;
              if (v14694) {
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
        case 'grant0_219': {
          const v5549 = v2926[1];
          
          break;
          }
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      return;
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      return;
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      return;
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      return;
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      undefined /* setApiDetails */;
      ;
      const v5309 = v5025[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '0')];
      const v5310 = v5025[stdlib.checkedBigNumberify('./index.rsh:270:10:spread', stdlib.UInt_max, '1')];
      const v5311 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v5309, ctc4), null);
      const v5312 = {
        None: 0,
        Some: 1
        }[v5311[0]];
      const v5313 = stdlib.eq(v5312, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5313, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:271:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
        msg: 'invalid provider',
        who: 'deleteSubscription'
        });
      const v5315 = [v5309, v5310];
      const v5316 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v5315, ctc7), null);
      const v5317 = {
        None: 0,
        Some: 1
        }[v5316[0]];
      const v5318 = stdlib.eq(v5317, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5318, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:272:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
        msg: 'not subscribed',
        who: 'deleteSubscription'
        });
      const v5322 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
      const v5323 = stdlib.fromSome(v5316, v5322);
      const v5324 = v5323[stdlib.checkedBigNumberify('./index.rsh:273:48:array ref', stdlib.UInt_max, '0')];
      const v5325 = stdlib.eq256(v5324, stdlib.checkedBigNumberify('./index.rsh:273:63:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v5325, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
        msg: 'not empty',
        who: 'deleteSubscription'
        });
      let v5328;
      switch (v5311[0]) {
        case 'None': {
          const v5329 = v5311[1];
          v5328 = false;
          
          break;
          }
        case 'Some': {
          const v5330 = v5311[1];
          const v5331 = v5330.subscriberCount;
          const v5332 = stdlib.gt(v5331, stdlib.checkedBigNumberify('./index.rsh:275:76:decimal', stdlib.UInt_max, '0'));
          v5328 = v5332;
          
          break;
          }
        }
      stdlib.assert(v5328, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:274:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
        msg: 'no subscribers',
        who: 'deleteSubscription'
        });
      await stdlib.mapSet(map1, ctc12, v5315, ctc7, undefined /* Nothing */);
      switch (v5311[0]) {
        case 'None': {
          const v5338 = v5311[1];
          const v5340 = ['DeleteSubscription', v5315];
          null;
          const v5341 = true;
          const v5342 = await txn1.getOutput('deleteSubscription', 'v5341', ctc6, v5341);
          if (v1851) {
            stdlib.protect(ctc0, await interact.out(v5025, v5342), {
              at: './index.rsh:270:11:application',
              fs: ['at ./index.rsh:270:11:application call to [unknown function] (defined at: ./index.rsh:270:11:function exp)', 'at ./index.rsh:295:12:application call to "k" (defined at: ./index.rsh:279:13:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
              msg: 'out',
              who: 'deleteSubscription'
              });
            }
          else {
            }
          
          const v5349 = v2643.closed;
          const v5350 = v2643.manager;
          const v5351 = v2643.providerCount;
          const v5352 = v2643.providerCounter;
          const v5353 = v2643.safeAmount;
          const v5354 = v2643.safeSize;
          const v5355 = v2643.subscriberCount;
          const v5356 = v2643.subscriberCounter;
          const v5358 = stdlib.safeSub(v5355, stdlib.checkedBigNumberify('./index.rsh:296:64:decimal', stdlib.UInt_max, '1'));
          const v5359 = {
            closed: v5349,
            manager: v5350,
            providerCount: v5351,
            providerCounter: v5352,
            safeAmount: v5353,
            safeSize: v5354,
            subscriberCount: v5358,
            subscriberCounter: v5356
            };
          const v14688 = v5359;
          const v14690 = v5359.closed;
          if (v14690) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v5362 = v5311[1];
          const v5363 = v5362.token;
          const v5364 = v5362.periodCount;
          const v5365 = v5362.periodAmount;
          const v5366 = v5362.periodLength;
          const v5367 = v5362.subscriberCounter;
          const v5368 = v5362.subscriberCount;
          const v5369 = stdlib.safeSub(v5368, stdlib.checkedBigNumberify('./index.rsh:291:68:decimal', stdlib.UInt_max, '1'));
          const v5370 = {
            periodAmount: v5365,
            periodCount: v5364,
            periodLength: v5366,
            subscriberCount: v5369,
            subscriberCounter: v5367,
            token: v5363
            };
          await stdlib.mapSet(map0, ctc10, v5309, ctc4, v5370);
          const v5372 = ['DeleteSubscription', v5315];
          null;
          const v5373 = true;
          const v5374 = await txn1.getOutput('deleteSubscription', 'v5373', ctc6, v5373);
          if (v1851) {
            stdlib.protect(ctc0, await interact.out(v5025, v5374), {
              at: './index.rsh:270:11:application',
              fs: ['at ./index.rsh:270:11:application call to [unknown function] (defined at: ./index.rsh:270:11:function exp)', 'at ./index.rsh:295:12:application call to "k" (defined at: ./index.rsh:279:13:function exp)', 'at ./index.rsh:279:13:application call to [unknown function] (defined at: ./index.rsh:279:13:function exp)'],
              msg: 'out',
              who: 'deleteSubscription'
              });
            }
          else {
            }
          
          const v5381 = v2643.closed;
          const v5382 = v2643.manager;
          const v5383 = v2643.providerCount;
          const v5384 = v2643.providerCounter;
          const v5385 = v2643.safeAmount;
          const v5386 = v2643.safeSize;
          const v5387 = v2643.subscriberCount;
          const v5388 = v2643.subscriberCounter;
          const v5390 = stdlib.safeSub(v5387, stdlib.checkedBigNumberify('./index.rsh:296:64:decimal', stdlib.UInt_max, '1'));
          const v5391 = {
            closed: v5381,
            manager: v5382,
            providerCount: v5383,
            providerCounter: v5384,
            safeAmount: v5385,
            safeSize: v5386,
            subscriberCount: v5390,
            subscriberCounter: v5388
            };
          const v14692 = v5391;
          const v14694 = v5391.closed;
          if (v14694) {
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
    case 'grant0_219': {
      const v5549 = v2926[1];
      return;
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc13,
    claim0_219: ctc14,
    close0_219: ctc9,
    deleteProvider0_219: ctc12,
    deleteSubscription0_219: ctc15,
    grant0_219: ctc12,
    subscribe0_219: ctc12
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2858 = ctc.selfAddress();
  const v2860 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:320:27:application call to [unknown function] (defined at: ./index.rsh:320:27:function exp)', 'at ./index.rsh:94:29:application call to "rungrant0_219" (defined at: ./index.rsh:320:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2863 = v2643.manager;
  const v2864 = stdlib.addressEq(v2858, v2863);
  stdlib.assert(v2864, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:320:27:application call to [unknown function] (defined at: ./index.rsh:320:27:function exp)', 'at ./index.rsh:94:29:application call to "rungrant0_219" (defined at: ./index.rsh:320:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'Only constructor can grant',
    who: 'grant'
    });
  const v2871 = ['grant0_219', v2860];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2871],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:320:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          
          break;
          }
        case 'claim0_219': {
          const v3453 = v2926[1];
          
          break;
          }
        case 'close0_219': {
          const v3977 = v2926[1];
          
          break;
          }
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          
          break;
          }
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          
          break;
          }
        case 'grant0_219': {
          const v5549 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v5919 = v5549[stdlib.checkedBigNumberify('./index.rsh:320:10:spread', stdlib.UInt_max, '0')];
          const v5924 = true;
          const v5925 = await txn1.getOutput('grant', 'v5924', ctc6, v5924);
          
          const v5931 = [v5919];
          const v5932 = ['GrantEvent', v5931];
          null;
          const v5933 = v2643.closed;
          const v5935 = v2643.providerCount;
          const v5936 = v2643.providerCounter;
          const v5937 = v2643.safeAmount;
          const v5938 = v2643.safeSize;
          const v5939 = v2643.subscriberCount;
          const v5940 = v2643.subscriberCounter;
          const v5941 = {
            closed: v5933,
            manager: v5919,
            providerCount: v5935,
            providerCounter: v5936,
            safeAmount: v5937,
            safeSize: v5938,
            subscriberCount: v5939,
            subscriberCounter: v5940
            };
          const v14732 = v5941;
          const v14734 = v5941.closed;
          if (v14734) {
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
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      return;
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      return;
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      return;
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      return;
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      return;
      break;
      }
    case 'grant0_219': {
      const v5549 = v2926[1];
      undefined /* setApiDetails */;
      ;
      const v5919 = v5549[stdlib.checkedBigNumberify('./index.rsh:320:10:spread', stdlib.UInt_max, '0')];
      const v5920 = v2643.manager;
      const v5921 = stdlib.addressEq(v2925, v5920);
      stdlib.assert(v5921, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:323:13:application call to [unknown function] (defined at: ./index.rsh:323:13:function exp)'],
        msg: 'Only constructor can grant',
        who: 'grant'
        });
      const v5924 = true;
      const v5925 = await txn1.getOutput('grant', 'v5924', ctc6, v5924);
      if (v1851) {
        stdlib.protect(ctc0, await interact.out(v5549, v5925), {
          at: './index.rsh:320:11:application',
          fs: ['at ./index.rsh:320:11:application call to [unknown function] (defined at: ./index.rsh:320:11:function exp)', 'at ./index.rsh:324:12:application call to "k" (defined at: ./index.rsh:323:13:function exp)', 'at ./index.rsh:323:13:application call to [unknown function] (defined at: ./index.rsh:323:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v5931 = [v5919];
      const v5932 = ['GrantEvent', v5931];
      null;
      const v5933 = v2643.closed;
      const v5935 = v2643.providerCount;
      const v5936 = v2643.providerCounter;
      const v5937 = v2643.safeAmount;
      const v5938 = v2643.safeSize;
      const v5939 = v2643.subscriberCount;
      const v5940 = v2643.subscriberCounter;
      const v5941 = {
        closed: v5933,
        manager: v5919,
        providerCount: v5935,
        providerCounter: v5936,
        safeAmount: v5937,
        safeSize: v5938,
        subscriberCount: v5939,
        subscriberCounter: v5940
        };
      const v14732 = v5941;
      const v14734 = v5941.closed;
      if (v14734) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _subscribe3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _subscribe3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _subscribe3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Struct([['token', ctc1], ['periodCount', ctc2], ['periodAmount', ctc3], ['periodLength', ctc2], ['subscriberCount', ctc2], ['subscriberCounter', ctc2]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc2, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Object({
    closed: ctc6,
    manager: ctc10,
    providerCount: ctc2,
    providerCounter: ctc2,
    safeAmount: ctc3,
    safeSize: ctc3,
    subscriberCount: ctc2,
    subscriberCounter: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc10]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc10, ctc10, ctc2, ctc2]);
  const ctc16 = stdlib.T_Data({
    announce0_219: ctc14,
    claim0_219: ctc15,
    close0_219: ctc9,
    deleteProvider0_219: ctc12,
    deleteSubscription0_219: ctc13,
    grant0_219: ctc12,
    subscribe0_219: ctc12
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc8;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2638, v2640, v2643] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc9, ctc11]);
  const v2721 = ctc.selfAddress();
  const v2723 = stdlib.protect(ctc12, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:173:31:application call to [unknown function] (defined at: ./index.rsh:173:31:function exp)', 'at ./index.rsh:94:29:application call to "runsubscribe0_219" (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'in',
    who: 'subscribe'
    });
  const v2724 = v2723[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2726 = [v2724, v2721];
  const v2727 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2726, ctc7), null);
  const v2728 = {
    None: 0,
    Some: 1
    }[v2727[0]];
  const v2729 = stdlib.eq(v2728, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2729, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:31:application call to [unknown function] (defined at: ./index.rsh:173:31:function exp)', 'at ./index.rsh:94:29:application call to "runsubscribe0_219" (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'already subscribed',
    who: 'subscribe'
    });
  const v2731 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v2724, ctc4), null);
  const v2732 = {
    None: 0,
    Some: 1
    }[v2731[0]];
  const v2733 = stdlib.eq(v2732, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2733, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:31:application call to [unknown function] (defined at: ./index.rsh:173:31:function exp)', 'at ./index.rsh:94:29:application call to "runsubscribe0_219" (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:94:29:application call to [unknown function] (defined at: ./index.rsh:94:29:function exp)'],
    msg: 'invalid provider',
    who: 'subscribe'
    });
  const v2740 = ['subscribe0_219', v2723];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2638, v2640, v2643, v2740],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:173:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
      
      switch (v2926[0]) {
        case 'announce0_219': {
          const v2929 = v2926[1];
          
          break;
          }
        case 'claim0_219': {
          const v3453 = v2926[1];
          
          break;
          }
        case 'close0_219': {
          const v3977 = v2926[1];
          
          break;
          }
        case 'deleteProvider0_219': {
          const v4501 = v2926[1];
          
          break;
          }
        case 'deleteSubscription0_219': {
          const v5025 = v2926[1];
          
          break;
          }
        case 'grant0_219': {
          const v5549 = v2926[1];
          
          break;
          }
        case 'subscribe0_219': {
          const v6073 = v2926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "subscribe"
            });
          ;
          const v6469 = v6073[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
          const v6470 = [v6469, v2925];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v6470, ctc7), null);
          const v6475 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc10, v6469, ctc4), null);
          let v6481;
          switch (v6475[0]) {
            case 'None': {
              const v6483 = v6475[1];
              v6481 = stdlib.checkedBigNumberify('./index.rsh:166:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
              
              break;
              }
            case 'Some': {
              const v6484 = v6475[1];
              const v6485 = v6484.periodCount;
              const v6486 = v6484.periodAmount;
              const v6487 = stdlib.cast("UInt", "UInt256", v6485, false, true);
              const v6488 = stdlib.safeMul256(v6486, v6487);
              v6481 = v6488;
              
              break;
              }
            }
          const v6490 = [v6481, v2927, true];
          await stdlib.simMapSet(sim_r, 1, ctc13, v6470, ctc7, v6490);
          switch (v6475[0]) {
            case 'None': {
              const v6492 = v6475[1];
              const v6494 = ['SubscribeEvent', v6470];
              null;
              const v6495 = true;
              const v6496 = await txn1.getOutput('subscribe', 'v6495', ctc6, v6495);
              
              const v6502 = v2643.closed;
              const v6503 = v2643.manager;
              const v6504 = v2643.providerCount;
              const v6505 = v2643.providerCounter;
              const v6506 = v2643.safeAmount;
              const v6507 = v2643.safeSize;
              const v6508 = v2643.subscriberCount;
              const v6509 = v2643.subscriberCounter;
              const v6511 = stdlib.safeAdd(v6508, stdlib.checkedBigNumberify('./index.rsh:201:52:decimal', stdlib.UInt_max, '1'));
              const v6513 = stdlib.safeAdd(v6509, stdlib.checkedBigNumberify('./index.rsh:202:56:decimal', stdlib.UInt_max, '1'));
              const v6535 = stdlib.gt256(v6507, v6506);
              const v6536 = v6535 ? v6507 : v6506;
              const v6537 = {
                closed: v6502,
                manager: v6503,
                providerCount: v6504,
                providerCounter: v6505,
                safeAmount: v6506,
                safeSize: v6536,
                subscriberCount: v6511,
                subscriberCounter: v6513
                };
              const v14772 = v6537;
              const v14774 = v6537.closed;
              if (v14774) {
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
              const v6540 = v6475[1];
              const v6541 = v6540.token;
              const v6542 = v6540.periodCount;
              const v6543 = v6540.periodAmount;
              const v6544 = v6540.periodLength;
              const v6545 = v6540.subscriberCounter;
              const v6546 = stdlib.safeAdd(v6545, stdlib.checkedBigNumberify('./index.rsh:192:72:decimal', stdlib.UInt_max, '1'));
              const v6547 = v6540.subscriberCount;
              const v6548 = stdlib.safeAdd(v6547, stdlib.checkedBigNumberify('./index.rsh:193:68:decimal', stdlib.UInt_max, '1'));
              const v6549 = {
                periodAmount: v6543,
                periodCount: v6542,
                periodLength: v6544,
                subscriberCount: v6548,
                subscriberCounter: v6546,
                token: v6541
                };
              await stdlib.simMapSet(sim_r, 0, ctc10, v6469, ctc4, v6549);
              const v6551 = ['SubscribeEvent', v6470];
              null;
              const v6552 = true;
              const v6553 = await txn1.getOutput('subscribe', 'v6552', ctc6, v6552);
              
              const v6559 = v2643.closed;
              const v6560 = v2643.manager;
              const v6561 = v2643.providerCount;
              const v6562 = v2643.providerCounter;
              const v6563 = v2643.safeAmount;
              const v6564 = v2643.safeSize;
              const v6565 = v2643.subscriberCount;
              const v6566 = v2643.subscriberCounter;
              const v6568 = stdlib.safeAdd(v6565, stdlib.checkedBigNumberify('./index.rsh:201:52:decimal', stdlib.UInt_max, '1'));
              const v6570 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:202:56:decimal', stdlib.UInt_max, '1'));
              const v6576 = v6549.periodCount;
              const v6577 = v6549.periodAmount;
              const v6578 = stdlib.cast("UInt", "UInt256", v6576, false, true);
              const v6579 = stdlib.safeMul256(v6577, v6578);
              const v6580 = stdlib.safeAdd256(v6563, v6579);
              const v6592 = stdlib.gt256(v6564, v6580);
              const v6593 = v6592 ? v6564 : v6580;
              const v6594 = {
                closed: v6559,
                manager: v6560,
                providerCount: v6561,
                providerCounter: v6562,
                safeAmount: v6580,
                safeSize: v6593,
                subscriberCount: v6568,
                subscriberCounter: v6570
                };
              const v14776 = v6594;
              const v14778 = v6594.closed;
              if (v14778) {
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
    tys: [ctc1, ctc9, ctc11, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2926], secs: v2928, time: v2927, didSend: v1851, from: v2925 } = txn1;
  switch (v2926[0]) {
    case 'announce0_219': {
      const v2929 = v2926[1];
      return;
      break;
      }
    case 'claim0_219': {
      const v3453 = v2926[1];
      return;
      break;
      }
    case 'close0_219': {
      const v3977 = v2926[1];
      return;
      break;
      }
    case 'deleteProvider0_219': {
      const v4501 = v2926[1];
      return;
      break;
      }
    case 'deleteSubscription0_219': {
      const v5025 = v2926[1];
      return;
      break;
      }
    case 'grant0_219': {
      const v5549 = v2926[1];
      return;
      break;
      }
    case 'subscribe0_219': {
      const v6073 = v2926[1];
      undefined /* setApiDetails */;
      ;
      const v6469 = v6073[stdlib.checkedBigNumberify('./index.rsh:173:10:spread', stdlib.UInt_max, '0')];
      const v6470 = [v6469, v2925];
      const v6471 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v6470, ctc7), null);
      const v6472 = {
        None: 0,
        Some: 1
        }[v6471[0]];
      const v6473 = stdlib.eq(v6472, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6473, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)'],
        msg: 'already subscribed',
        who: 'subscribe'
        });
      const v6475 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc10, v6469, ctc4), null);
      const v6476 = {
        None: 0,
        Some: 1
        }[v6475[0]];
      const v6477 = stdlib.eq(v6476, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6477, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)'],
        msg: 'invalid provider',
        who: 'subscribe'
        });
      let v6481;
      switch (v6475[0]) {
        case 'None': {
          const v6483 = v6475[1];
          v6481 = stdlib.checkedBigNumberify('./index.rsh:166:28:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0');
          
          break;
          }
        case 'Some': {
          const v6484 = v6475[1];
          const v6485 = v6484.periodCount;
          const v6486 = v6484.periodAmount;
          const v6487 = stdlib.cast("UInt", "UInt256", v6485, false, true);
          const v6488 = stdlib.safeMul256(v6486, v6487);
          v6481 = v6488;
          
          break;
          }
        }
      const v6490 = [v6481, v2927, true];
      await stdlib.mapSet(map1, ctc13, v6470, ctc7, v6490);
      switch (v6475[0]) {
        case 'None': {
          const v6492 = v6475[1];
          const v6494 = ['SubscribeEvent', v6470];
          null;
          const v6495 = true;
          const v6496 = await txn1.getOutput('subscribe', 'v6495', ctc6, v6495);
          if (v1851) {
            stdlib.protect(ctc0, await interact.out(v6073, v6496), {
              at: './index.rsh:173:11:application',
              fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:197:12:application call to "k" (defined at: ./index.rsh:177:13:function exp)', 'at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)'],
              msg: 'out',
              who: 'subscribe'
              });
            }
          else {
            }
          
          const v6502 = v2643.closed;
          const v6503 = v2643.manager;
          const v6504 = v2643.providerCount;
          const v6505 = v2643.providerCounter;
          const v6506 = v2643.safeAmount;
          const v6507 = v2643.safeSize;
          const v6508 = v2643.subscriberCount;
          const v6509 = v2643.subscriberCounter;
          const v6511 = stdlib.safeAdd(v6508, stdlib.checkedBigNumberify('./index.rsh:201:52:decimal', stdlib.UInt_max, '1'));
          const v6513 = stdlib.safeAdd(v6509, stdlib.checkedBigNumberify('./index.rsh:202:56:decimal', stdlib.UInt_max, '1'));
          const v6535 = stdlib.gt256(v6507, v6506);
          const v6536 = v6535 ? v6507 : v6506;
          const v6537 = {
            closed: v6502,
            manager: v6503,
            providerCount: v6504,
            providerCounter: v6505,
            safeAmount: v6506,
            safeSize: v6536,
            subscriberCount: v6511,
            subscriberCounter: v6513
            };
          const v14772 = v6537;
          const v14774 = v6537.closed;
          if (v14774) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Some': {
          const v6540 = v6475[1];
          const v6541 = v6540.token;
          const v6542 = v6540.periodCount;
          const v6543 = v6540.periodAmount;
          const v6544 = v6540.periodLength;
          const v6545 = v6540.subscriberCounter;
          const v6546 = stdlib.safeAdd(v6545, stdlib.checkedBigNumberify('./index.rsh:192:72:decimal', stdlib.UInt_max, '1'));
          const v6547 = v6540.subscriberCount;
          const v6548 = stdlib.safeAdd(v6547, stdlib.checkedBigNumberify('./index.rsh:193:68:decimal', stdlib.UInt_max, '1'));
          const v6549 = {
            periodAmount: v6543,
            periodCount: v6542,
            periodLength: v6544,
            subscriberCount: v6548,
            subscriberCounter: v6546,
            token: v6541
            };
          await stdlib.mapSet(map0, ctc10, v6469, ctc4, v6549);
          const v6551 = ['SubscribeEvent', v6470];
          null;
          const v6552 = true;
          const v6553 = await txn1.getOutput('subscribe', 'v6552', ctc6, v6552);
          if (v1851) {
            stdlib.protect(ctc0, await interact.out(v6073, v6553), {
              at: './index.rsh:173:11:application',
              fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:11:function exp)', 'at ./index.rsh:197:12:application call to "k" (defined at: ./index.rsh:177:13:function exp)', 'at ./index.rsh:177:13:application call to [unknown function] (defined at: ./index.rsh:177:13:function exp)'],
              msg: 'out',
              who: 'subscribe'
              });
            }
          else {
            }
          
          const v6559 = v2643.closed;
          const v6560 = v2643.manager;
          const v6561 = v2643.providerCount;
          const v6562 = v2643.providerCounter;
          const v6563 = v2643.safeAmount;
          const v6564 = v2643.safeSize;
          const v6565 = v2643.subscriberCount;
          const v6566 = v2643.subscriberCounter;
          const v6568 = stdlib.safeAdd(v6565, stdlib.checkedBigNumberify('./index.rsh:201:52:decimal', stdlib.UInt_max, '1'));
          const v6570 = stdlib.safeAdd(v6566, stdlib.checkedBigNumberify('./index.rsh:202:56:decimal', stdlib.UInt_max, '1'));
          const v6576 = v6549.periodCount;
          const v6577 = v6549.periodAmount;
          const v6578 = stdlib.cast("UInt", "UInt256", v6576, false, true);
          const v6579 = stdlib.safeMul256(v6577, v6578);
          const v6580 = stdlib.safeAdd256(v6563, v6579);
          const v6592 = stdlib.gt256(v6564, v6580);
          const v6593 = v6592 ? v6564 : v6580;
          const v6594 = {
            closed: v6559,
            manager: v6560,
            providerCount: v6561,
            providerCounter: v6562,
            safeAmount: v6580,
            safeSize: v6593,
            subscriberCount: v6568,
            subscriberCounter: v6570
            };
          const v14776 = v6594;
          const v14778 = v6594.closed;
          if (v14778) {
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
export async function announce(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for announce expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for announce expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _announce3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _claim3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _close3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteProvider(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteProvider expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteProvider expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteProvider3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteSubscription(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteSubscription expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteSubscription expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleteSubscription3(ctcTop, interact);}
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
export async function subscribe(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for subscribe expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for subscribe expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _subscribe3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[80])))void`, `announce(uint64,uint64,uint256,uint64)byte`, `claim(address,address,uint64,uint64)byte`, `close()byte`, `deleteProvider(address)byte`, `deleteSubscription(address,address)byte`, `grant(address)byte`, `subscribe(address)byte`],
    pure: [`providerService(address)(uint64,uint64,uint256,uint64,uint64,uint64)`, `state()(address,uint64,uint64,uint64,uint64,uint256,uint256)`, `subscription(address,address)(uint256,uint64,byte)`],
    sigs: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[80])))void`, `announce(uint64,uint64,uint256,uint64)byte`, `claim(address,address,uint64,uint64)byte`, `close()byte`, `deleteProvider(address)byte`, `deleteSubscription(address,address)byte`, `grant(address)byte`, `providerService(address)(uint64,uint64,uint256,uint64,uint64,uint64)`, `state()(address,uint64,uint64,uint64,uint64,uint256,uint256)`, `subscribe(address)byte`, `subscription(address,address)(uint256,uint64,byte)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAUAAEIGClIMHE4A9TbAgYhQHnU9wEQBVggJgoAAQAESjV38AEBCAAAAAAAAAABAQQBBQEDAQYBBzEYQQWuKGRJIls1AUkkWzUCIRBbNQUpZCtkUIIMBAf/mi0EDaD2ngQPfgUpBBQkc2MEH1Q2UAQlSTtsBDiMMwAEPRW28ARWy5swBMGUrZkE301ZJQT2SaTmNhoAjgwFvQW6DAgFhwwbBcUF0gWhDBMFBAwQBTIANAsiWzUTNAskWzUSNAtXECA1DTQLIQZbNQwoIQWvKTEAUIgMGyJVIhJEIQopMQBQNBMWNBIWUDQNUDQMFlAkr1Akr1CIDBcpNBMWMQBQNBIWUDQNUDQMFlBQNQsqNAtQsCM1C4AIAAAAAAAAC6U0CxZRBwhQsDQLFlEHCDUENA9XAAE0D1cBIFA0DyEMWyMIFlA0DyEEWyMIFlA0D1cxIFA0D1dRIFA0D1dxCFA0D1d5CFAyBjUONQ80D1cAARdBCv8xGSEREkSxIrIBIQuyEDQFshghEbIZs4GgjQaIC7aIC6ciMgoyCYgL4DQDQAAKgAQVH3x1NARQsCNDsSKyASELshA0BbIYszQLVwAgNRM0C1cgIDUSNAshDVs1DTQLIQVbNQw0EzQSUDUXKCEErycENBdQAYgLB0k1FSJVIxJEKCEFryk0E1CICvRJNRYiVY0CBLoEwUL+pTQPIQRbSTUTRDQPIQ5bSTUSRDQPIQxbSTUNIhJENA8hB1tJNQwiEkSAAQI0EFAhEq9QNQsqNAtQsCM1C4AIAAAAAAAAEGQ0CxZRBwhQsDQLFlEHCDUEKzQPVwEgUDQNFlA0ExZQNA9XMSBQNA9XUSBQNAwWUDQSFlAyBjUONQ9C/t00DVcBIDULNA8hB1tJNQ0iEkQoIQWvKTQLUIgKR0k1EiJVIxJENBIiVY0CBmAGZkL98TQLVwAgNRIoIQWvKTQSUIgKIEk1DSJVIxJENBI0C1cgIFA1DCghBK8nBDQMUAGICgFJNQsiVSMSRCEErzQLiAoGVwAgMgOoRDQNIlWNAgbCBshC/Zw0DVcBIDULMQA0D1cBIBJEIzUMgAgAAAAAAAAXJDQMFlEHCFCwNAwWUQcINQQnBjQLUCEIr1A1DCo0DFCwNA9XAAE0C1A0D1chCFA0D1cpCFA0D1cxIFA0D1dRIFA0D1dxCFA0D1d5CFAyBjUONQ9C/eQ0DVcBIEk1CzEAUDUSKCEErycENBJQAYgJUSJVIhJEKCEFryk0C1CICUFJNQwiVSMSRDQMIlWNAgdKB1FC/Oskryk0DhY0DRZQNAxQNAsWUFAlr1BQNQshCTQBEkSICTc0CyJbNQw0C1cIUTUNgASiEnGGNAwWUDQNULA0DIgJKzQNIlWNBwiECI4ImAibAnACegJ9QvyTJK8rNA40DVA0DBZQNAsWUFBQNQtC/6mAWQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/0kkrycHNAtQIQavUFA1C0L/OCSvJwU0DDQLUFAhEK9QUDULQv8kJK8nBjQLUCEGr1BQNQtC/xM0ASEJEkSICEo0ERYkr1AyA1Akr1Akr1Akr1AoIQWvKTQLUIgIAYgIEzUEMRkiEkRC/KQ0ASEJEkSICBc0D1cBIDQPVyEIUDQPVykIUDQPV3EIUDQPV3kIUDQPVzEgUDQPV1EgUDUEQv/BJK8nCDQLUCEGr1BQNQtC/pg0ASEJEkSIB88hBK8oIQSvJwQ0DDQLUFABiAeQiAeiNQRC/4w0Cxc1DIAEgsRh/jQMFlCwNAyIB7MxGDURKDUQJwg0EFAhEq9QNQsqNAtQsCkxAFAkr1Akr1AyA1AyA1Akr1Akr1AyBjUONQ9C+7aIB3aBwJoMiAeYsSKyASELshCABggxADIJErIegAEIsh+ztD01BTYaATULQv+HiAdINhoBNQtC/fAiMTQSRCEJMTUSRCIxNhJEIjE3EkQiNQWIByWBiQGvIiI1AjUBKUsBVwB/ZytMV38KZyg0ARY0AhZQNAUWUGcxGSISRIgHB0L7ZTYaARc2GgIXNhoDNhoEFzULNQw1DTUOQv10NhoBNhoCNhoDFzYaBBc1CzUMNQ01DkL9s0L9xzYaATULQv4fNhoBNhoCNQs1DEL+IzYaATULQv4vNA1XAUA1C0L8K0L8fUL87CEErzQViAZkSTULVwAgNRU0FDQVpkQ0DIgGpzQWIlWNAgBWAF1C+e4yAzUUQv/RNBZXAUhXECAlrzQNFlCjiAYhNRRC/7o0FDQVpkQ0ERYkr1AyA1Akr1Akr1Akr1A0FogGCSJbNRk0CyETWzUUNBYiVY0CADcAPUL5mzIDNRRC/8Q0FlcBSFcQICWvNA0WUKOIBc41FEL/rTIGNBQ0CwgPRDQWIlWNAgDFAMxC+WciNQtC/+Q0FlcBSCEGWzQNCzULQv/UgAVhcHBJRDQZFlADNQgyCng1CSgyCmA0CQk0DAkWNQo0DDQIiAX8tiKyASELshA0GbIYgAQAinJysho0EkmyHLIaNBNJshyyGjQLsho0GbIyszIKYDQJCTQKFwkWtwE+VwQAUDUYgAgAAAAAAAAODDQYULA0GDULIjQLIlsSRDQLVwgBF0QrNBM0ElA0DRZQNAwWUFAkr1A1Cyo0C1CwNBYiVY0CAC4ANUL4pTIDNQtC/000FlcBSFcQICWvNA0WUKOIBNg1C0L/NjQWIlWNAgBnAG1C+HoyAzUMQv/sNBZXAUhXECAlrzQNFlCjiAStNQxC/9UhDycENBdQATQVNAyhiASYNBQ0CwgWUCtQiASfIzULgAgAAAAAAAAOKTQLFlEHCFCwNAsWUQcINQQ0FiJVjQIAVwBeQvgWIjULQv+0NBZXAUghBls0DQs1C0L/pDQPVwABNA9XASBQNA9XIQhQNA9XKQhQNA9XMSA0C6GIBCpQNA9XUSBQNA9XcQhQNA9XeQhQMgY1DjUPQvh8MgM1C0L/uzQWVwFIVxAgJa80DRZQo4gD9TULQv+kNAxENBIiVY0CAIoAkEL3lCI1DEL/6jQSVwFIIQhbIhI1DEL/2zQMRCEKKTQLUIgEECM1DIAIAAAAAAAAEpo0DBZRBwhQsDQMFlEHCDUEJwc0C1AhCK9QNQwqNAxQsDQPVwABNA9XASBQNA8hDFsjCRZQNA9XKQhQNA9XMSBQNA9XUSBQNA0WUDQPV3kIUDIGNQ41D0L3xyI1DEL/iDQSVwFIIQ1bIhM1DEL/eTQLRCEPJwQ0DFABiAOHNA0iVY0CABgAf0L23SI1C0L/3zQNVwFIIQhbIg01C0L/0CcFNAxQJa9QNQsqNAtQsCM1C4AIAAAAAAAAFN00CxZRBwhQsDQLFlEHCDUENA9XAAE0D1cBIFA0D1chCFA0D1cpCFA0D1cxIFA0D1dRIFA0DyEHWyMJFlA0D1d5CFAyBjUONQ9C9xs0DVcBSDULIQopNBJQNAtXAAg0C1cICFA0C1cQIFA0C1cwCFA0CyEIWyMJFlA0C1dACFCIAoonBTQMUCWvUDULKjQLULAjNQuACAAAAAAAABT9NAsWUQcIULA0CxZRBwg1BDQPVwABNA9XASBQNA9XIQhQNA9XKQhQNA9XMSBQNA9XUSBQNA8hB1sjCRZQNA9XeQhQMgY1DjUPQvZ+IQ8nBDQSUAE0EzIGFlArUIgCEDQMIlWNAgAmAJ9C9aQyAzUTQv/ZNAxXAUhJNQ1XECAlrzQNVwgIUKOIAdI1E0L/vScJNBJQJa9QNQsqNAtQsCM1C4AIAAAAAAAAGV80CxZRBwhQsDQLFlEHCDUENA9XMSA1DDQPV1EgNQs0D1cAATQPVwEgUDQPVyEIUDQPVykIUDQMUDQMNAtJNAylTVA0DyEHWyMIFlA0DyEOWyMIFlAyBjUONQ9C9cI0DFcBSEk1DVcACDQNVwgIUDQNVxAgUDQNVzAIUDQNIQhbIwgWUDQNIQ1bIwgWUDUMIQopNAtQNAyIASsnCTQSUCWvUDULKjQLULAjNQuACAAAAAAAABmYNAsWUQcIULA0CxZRBwg1BDQPV1EgNQ00D1cxIDQMVxAgJa80DFcICFCjiADPoIgAyzULNA9XAAE0D1cBIFA0D1chCFA0D1cpCFA0C1A0CzQNSTQLpU1QNA8hB1sjCBZQNA8hDlsjCBZQMgY1DjUPQvT4NBEWNBBQNA9QIQkyBkL5jEhMv0iJIrIBI7IQsgeyCIkisgEjshCyB7IIs4k0DVcBODULQvQJNA1XAVA1C0L0+0L1VkL11TYaATULQvgKQvg6NhoBNQtC+Gk2GgE2GgI1CzUMQvhtSIlMCUk1BjIJiACUiQlJQf/uSTUGiABsib5JFlEHCEUETVCJSRUhE0wJr0xQiUlXAQBMIlVNiUxJvUD/bUsDiAA8Qv9lSSJbNRFJSCg1EFcIgTUPiSM1A4lJIhJMNAISEUSJNAY0B0oPQf+WQv+eNAcINQeJvCJOAk2I//KJNAYINQaJMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEibFC/xaxsglC/xCxQv8B`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `25`,
    1000: `608`,
    1001: `609`,
    1002: `610`,
    1003: `610`,
    1004: `611`,
    1005: `611`,
    1006: `612`,
    1007: `612`,
    1008: `612`,
    1009: `613`,
    101: `25`,
    1010: `613`,
    1011: `614`,
    1012: `614`,
    1013: `614`,
    1014: `614`,
    1015: `614`,
    1016: `614`,
    1017: `615`,
    1018: `615`,
    1019: `616`,
    102: `25`,
    1020: `617`,
    1021: `618`,
    1022: `618`,
    1023: `619`,
    1024: `620`,
    1025: `622`,
    1026: `622`,
    1027: `623`,
    1028: `623`,
    1029: `623`,
    103: `25`,
    1030: `624`,
    1031: `624`,
    1032: `625`,
    1033: `626`,
    1034: `627`,
    1035: `627`,
    1036: `627`,
    1037: `627`,
    1038: `627`,
    1039: `627`,
    104: `25`,
    1040: `627`,
    1041: `627`,
    1042: `627`,
    1043: `627`,
    1044: `627`,
    1045: `627`,
    1046: `627`,
    1047: `627`,
    1048: `627`,
    1049: `627`,
    105: `25`,
    1050: `628`,
    1051: `628`,
    1052: `628`,
    1053: `631`,
    1054: `632`,
    1055: `633`,
    1056: `634`,
    1057: `634`,
    1058: `635`,
    1059: `635`,
    106: `25`,
    1060: `636`,
    1061: `637`,
    1062: `637`,
    1063: `638`,
    1064: `639`,
    1065: `640`,
    1066: `640`,
    1067: `641`,
    1068: `642`,
    1069: `643`,
    107: `25`,
    1070: `644`,
    1071: `645`,
    1072: `645`,
    1073: `646`,
    1074: `646`,
    1075: `646`,
    1076: `649`,
    1077: `649`,
    1078: `649`,
    1079: `649`,
    108: `25`,
    1080: `649`,
    1081: `649`,
    1082: `649`,
    1083: `649`,
    1084: `649`,
    1085: `649`,
    1086: `649`,
    1087: `649`,
    1088: `649`,
    1089: `649`,
    109: `25`,
    1090: `649`,
    1091: `649`,
    1092: `649`,
    1093: `649`,
    1094: `649`,
    1095: `649`,
    1096: `649`,
    1097: `649`,
    1098: `649`,
    1099: `649`,
    11: `2`,
    110: `25`,
    1100: `649`,
    1101: `649`,
    1102: `649`,
    1103: `649`,
    1104: `649`,
    1105: `649`,
    1106: `649`,
    1107: `649`,
    1108: `649`,
    1109: `649`,
    111: `25`,
    1110: `649`,
    1111: `649`,
    1112: `649`,
    1113: `649`,
    1114: `649`,
    1115: `649`,
    1116: `649`,
    1117: `649`,
    1118: `649`,
    1119: `649`,
    112: `25`,
    1120: `649`,
    1121: `649`,
    1122: `649`,
    1123: `649`,
    1124: `649`,
    1125: `649`,
    1126: `649`,
    1127: `649`,
    1128: `649`,
    1129: `649`,
    113: `25`,
    1130: `649`,
    1131: `649`,
    1132: `649`,
    1133: `649`,
    1134: `649`,
    1135: `649`,
    1136: `649`,
    1137: `649`,
    1138: `649`,
    1139: `649`,
    114: `25`,
    1140: `649`,
    1141: `649`,
    1142: `649`,
    1143: `649`,
    1144: `649`,
    1145: `649`,
    1146: `649`,
    1147: `649`,
    1148: `649`,
    1149: `649`,
    115: `25`,
    1150: `649`,
    1151: `649`,
    1152: `649`,
    1153: `649`,
    1154: `649`,
    1155: `649`,
    1156: `649`,
    1157: `649`,
    1158: `649`,
    1159: `649`,
    116: `25`,
    1160: `649`,
    1161: `649`,
    1162: `649`,
    1163: `649`,
    1164: `649`,
    1165: `649`,
    1166: `649`,
    1167: `650`,
    1168: `650`,
    1169: `651`,
    117: `25`,
    1170: `651`,
    1171: `651`,
    1172: `654`,
    1173: `655`,
    1174: `656`,
    1175: `656`,
    1176: `657`,
    1177: `657`,
    1178: `658`,
    1179: `659`,
    118: `25`,
    1180: `659`,
    1181: `660`,
    1182: `661`,
    1183: `662`,
    1184: `663`,
    1185: `663`,
    1186: `664`,
    1187: `664`,
    1188: `664`,
    1189: `667`,
    119: `25`,
    1190: `668`,
    1191: `669`,
    1192: `669`,
    1193: `670`,
    1194: `670`,
    1195: `671`,
    1196: `671`,
    1197: `672`,
    1198: `673`,
    1199: `674`,
    12: `2`,
    120: `25`,
    1200: `674`,
    1201: `675`,
    1202: `676`,
    1203: `677`,
    1204: `678`,
    1205: `678`,
    1206: `679`,
    1207: `679`,
    1208: `679`,
    1209: `682`,
    121: `25`,
    1210: `683`,
    1211: `684`,
    1212: `684`,
    1213: `685`,
    1214: `685`,
    1215: `686`,
    1216: `687`,
    1217: `687`,
    1218: `688`,
    1219: `689`,
    122: `25`,
    1220: `690`,
    1221: `691`,
    1222: `691`,
    1223: `692`,
    1224: `692`,
    1225: `692`,
    1226: `695`,
    1227: `695`,
    1228: `696`,
    1229: `696`,
    123: `25`,
    1230: `697`,
    1231: `698`,
    1232: `701`,
    1233: `701`,
    1234: `701`,
    1235: `702`,
    1236: `702`,
    1237: `703`,
    1238: `704`,
    1239: `705`,
    124: `25`,
    1240: `706`,
    1241: `707`,
    1242: `707`,
    1243: `708`,
    1244: `709`,
    1245: `710`,
    1246: `711`,
    1247: `712`,
    1248: `713`,
    1249: `714`,
    125: `25`,
    1250: `715`,
    1251: `716`,
    1252: `717`,
    1253: `719`,
    1254: `720`,
    1255: `720`,
    1256: `721`,
    1257: `722`,
    1258: `723`,
    1259: `723`,
    126: `25`,
    1260: `724`,
    1261: `725`,
    1262: `725`,
    1263: `725`,
    1264: `726`,
    1265: `726`,
    1266: `726`,
    1267: `727`,
    1268: `727`,
    1269: `729`,
    127: `25`,
    1270: `729`,
    1271: `730`,
    1272: `731`,
    1273: `732`,
    1274: `734`,
    1275: `734`,
    1276: `734`,
    1277: `737`,
    1278: `737`,
    1279: `738`,
    128: `25`,
    1280: `738`,
    1281: `739`,
    1282: `740`,
    1283: `743`,
    1284: `743`,
    1285: `743`,
    1286: `744`,
    1287: `744`,
    1288: `745`,
    1289: `745`,
    129: `25`,
    1290: `745`,
    1291: `746`,
    1292: `746`,
    1293: `747`,
    1294: `747`,
    1295: `747`,
    1296: `748`,
    1297: `749`,
    1298: `749`,
    1299: `750`,
    13: `2`,
    130: `25`,
    1300: `750`,
    1301: `750`,
    1302: `751`,
    1303: `752`,
    1304: `752`,
    1305: `753`,
    1306: `753`,
    1307: `753`,
    1308: `754`,
    1309: `755`,
    131: `25`,
    1310: `755`,
    1311: `756`,
    1312: `756`,
    1313: `756`,
    1314: `757`,
    1315: `758`,
    1316: `758`,
    1317: `759`,
    1318: `759`,
    1319: `759`,
    132: `25`,
    1320: `760`,
    1321: `761`,
    1322: `761`,
    1323: `762`,
    1324: `762`,
    1325: `762`,
    1326: `763`,
    1327: `764`,
    1328: `764`,
    1329: `765`,
    133: `25`,
    1330: `765`,
    1331: `765`,
    1332: `768`,
    1333: `769`,
    1334: `770`,
    1335: `770`,
    1336: `771`,
    1337: `771`,
    1338: `772`,
    1339: `773`,
    134: `25`,
    1340: `773`,
    1341: `774`,
    1342: `775`,
    1343: `776`,
    1344: `777`,
    1345: `777`,
    1346: `778`,
    1347: `778`,
    1348: `778`,
    1349: `781`,
    135: `25`,
    1350: `781`,
    1351: `782`,
    1352: `782`,
    1353: `783`,
    1354: `784`,
    1355: `787`,
    1356: `787`,
    1357: `787`,
    1358: `788`,
    1359: `788`,
    136: `25`,
    1360: `789`,
    1361: `791`,
    1362: `792`,
    1363: `792`,
    1364: `793`,
    1365: `794`,
    1366: `794`,
    1367: `795`,
    1368: `795`,
    1369: `796`,
    137: `25`,
    1370: `796`,
    1371: `797`,
    1372: `798`,
    1373: `799`,
    1374: `800`,
    1375: `800`,
    1376: `800`,
    1377: `801`,
    1378: `801`,
    1379: `801`,
    138: `25`,
    1380: `802`,
    1381: `802`,
    1382: `803`,
    1383: `803`,
    1384: `803`,
    1385: `806`,
    1386: `806`,
    1387: `807`,
    1388: `808`,
    1389: `808`,
    139: `25`,
    1390: `809`,
    1391: `809`,
    1392: `809`,
    1393: `809`,
    1394: `809`,
    1395: `809`,
    1396: `810`,
    1397: `810`,
    1398: `811`,
    1399: `812`,
    14: `2`,
    140: `25`,
    1400: `813`,
    1401: `815`,
    1402: `815`,
    1403: `816`,
    1404: `816`,
    1405: `816`,
    1406: `817`,
    1407: `817`,
    1408: `818`,
    1409: `818`,
    141: `25`,
    1410: `819`,
    1411: `820`,
    1412: `820`,
    1413: `821`,
    1414: `821`,
    1415: `822`,
    1416: `822`,
    1417: `823`,
    1418: `824`,
    1419: `824`,
    142: `25`,
    1420: `825`,
    1421: `826`,
    1422: `827`,
    1423: `827`,
    1424: `828`,
    1425: `829`,
    1426: `829`,
    1427: `830`,
    1428: `831`,
    1429: `833`,
    143: `25`,
    1430: `834`,
    1431: `834`,
    1432: `835`,
    1433: `836`,
    1434: `837`,
    1435: `838`,
    1436: `839`,
    1437: `840`,
    1438: `841`,
    1439: `842`,
    144: `25`,
    1440: `842`,
    1441: `843`,
    1442: `844`,
    1443: `844`,
    1444: `845`,
    1445: `846`,
    1446: `847`,
    1447: `848`,
    1448: `849`,
    1449: `850`,
    145: `25`,
    1450: `851`,
    1451: `852`,
    1452: `852`,
    1453: `853`,
    1454: `853`,
    1455: `854`,
    1456: `854`,
    1457: `855`,
    1458: `855`,
    1459: `855`,
    146: `25`,
    1460: `857`,
    1461: `857`,
    1462: `857`,
    1463: `858`,
    1464: `858`,
    1465: `858`,
    1466: `858`,
    1467: `859`,
    1468: `859`,
    1469: `859`,
    147: `26`,
    1470: `861`,
    1471: `862`,
    1472: `863`,
    1473: `863`,
    1474: `864`,
    1475: `864`,
    1476: `865`,
    1477: `865`,
    1478: `867`,
    1479: `867`,
    148: `26`,
    1480: `867`,
    1481: `867`,
    1482: `867`,
    1483: `867`,
    1484: `867`,
    1485: `867`,
    1486: `868`,
    1487: `868`,
    1488: `869`,
    1489: `869`,
    149: `26`,
    1490: `869`,
    1491: `870`,
    1492: `870`,
    1493: `871`,
    1494: `873`,
    1495: `873`,
    1496: `874`,
    1497: `874`,
    1498: `876`,
    1499: `876`,
    15: `2`,
    150: `27`,
    1500: `876`,
    1501: `877`,
    1502: `877`,
    1503: `878`,
    1504: `878`,
    1505: `878`,
    1506: `880`,
    1507: `880`,
    1508: `880`,
    1509: `882`,
    151: `27`,
    1510: `882`,
    1511: `882`,
    1512: `883`,
    1513: `883`,
    1514: `884`,
    1515: `884`,
    1516: `884`,
    1517: `886`,
    1518: `887`,
    1519: `887`,
    152: `27`,
    1520: `888`,
    1521: `889`,
    1522: `890`,
    1523: `890`,
    1524: `891`,
    1525: `891`,
    1526: `892`,
    1527: `893`,
    1528: `894`,
    1529: `895`,
    153: `27`,
    1530: `895`,
    1531: `896`,
    1532: `897`,
    1533: `898`,
    1534: `899`,
    1535: `899`,
    1536: `900`,
    1537: `901`,
    1538: `902`,
    1539: `903`,
    154: `27`,
    1540: `903`,
    1541: `904`,
    1542: `904`,
    1543: `904`,
    1544: `905`,
    1545: `905`,
    1546: `905`,
    1547: `906`,
    1548: `907`,
    1549: `908`,
    155: `27`,
    1550: `910`,
    1551: `910`,
    1552: `911`,
    1553: `911`,
    1554: `912`,
    1555: `913`,
    1556: `913`,
    1557: `914`,
    1558: `914`,
    1559: `914`,
    156: `27`,
    1560: `915`,
    1561: `916`,
    1562: `917`,
    1563: `918`,
    1564: `918`,
    1565: `918`,
    1566: `919`,
    1567: `920`,
    1568: `921`,
    1569: `921`,
    157: `27`,
    1570: `922`,
    1571: `923`,
    1572: `923`,
    1573: `924`,
    1574: `925`,
    1575: `926`,
    1576: `926`,
    1577: `927`,
    1578: `928`,
    1579: `929`,
    158: `27`,
    1580: `930`,
    1581: `930`,
    1582: `931`,
    1583: `932`,
    1584: `933`,
    1585: `935`,
    1586: `935`,
    1587: `935`,
    1588: `936`,
    1589: `936`,
    159: `27`,
    1590: `936`,
    1591: `939`,
    1592: `939`,
    1593: `939`,
    1594: `940`,
    1595: `941`,
    1596: `941`,
    1597: `941`,
    1598: `942`,
    1599: `943`,
    16: `2`,
    160: `27`,
    1600: `943`,
    1601: `943`,
    1602: `944`,
    1603: `944`,
    1604: `944`,
    1605: `945`,
    1606: `946`,
    1607: `946`,
    1608: `947`,
    1609: `947`,
    161: `27`,
    1610: `948`,
    1611: `948`,
    1612: `949`,
    1613: `949`,
    1614: `950`,
    1615: `950`,
    1616: `950`,
    1617: `953`,
    1618: `953`,
    1619: `953`,
    162: `27`,
    1620: `954`,
    1621: `954`,
    1622: `954`,
    1623: `955`,
    1624: `955`,
    1625: `955`,
    1626: `956`,
    1627: `957`,
    1628: `957`,
    1629: `957`,
    163: `27`,
    1630: `958`,
    1631: `959`,
    1632: `959`,
    1633: `960`,
    1634: `960`,
    1635: `961`,
    1636: `961`,
    1637: `962`,
    1638: `962`,
    1639: `963`,
    164: `27`,
    1640: `963`,
    1641: `963`,
    1642: `966`,
    1643: `966`,
    1644: `966`,
    1645: `969`,
    1646: `969`,
    1647: `969`,
    1648: `970`,
    1649: `970`,
    165: `27`,
    1650: `971`,
    1651: `971`,
    1652: `971`,
    1653: `974`,
    1654: `974`,
    1655: `974`,
    1656: `975`,
    1657: `975`,
    1658: `975`,
    1659: `976`,
    166: `27`,
    1660: `976`,
    1661: `977`,
    1662: `977`,
    1663: `978`,
    1664: `978`,
    1665: `978`,
    1666: `981`,
    1667: `981`,
    1668: `981`,
    1669: `982`,
    167: `27`,
    1670: `982`,
    1671: `983`,
    1672: `983`,
    1673: `983`,
    1674: `985`,
    1675: `985`,
    1676: `986`,
    1677: `986`,
    1678: `986`,
    1679: `987`,
    168: `27`,
    1680: `987`,
    1681: `988`,
    1682: `988`,
    1683: `988`,
    1684: `990`,
    1685: `990`,
    1686: `990`,
    1687: `992`,
    1688: `992`,
    1689: `992`,
    169: `27`,
    1690: `994`,
    1691: `994`,
    1692: `995`,
    1693: `996`,
    1694: `996`,
    1695: `997`,
    1696: `997`,
    1697: `997`,
    1698: `998`,
    1699: `999`,
    17: `2`,
    170: `27`,
    1700: `999`,
    1701: `1000`,
    1702: `1000`,
    1703: `1000`,
    1704: `1001`,
    1705: `1001`,
    1706: `1002`,
    1707: `1002`,
    1708: `1003`,
    1709: `1003`,
    171: `27`,
    1710: `1004`,
    1711: `1005`,
    1712: `1012`,
    1713: `1012`,
    1714: `1013`,
    1715: `1013`,
    1716: `1013`,
    1717: `1016`,
    1718: `1016`,
    1719: `1017`,
    172: `27`,
    1720: `1018`,
    1721: `1019`,
    1722: `1019`,
    1723: `1019`,
    1724: `1019`,
    1725: `1019`,
    1726: `1019`,
    1727: `1020`,
    1728: `1020`,
    1729: `1020`,
    173: `27`,
    1730: `1022`,
    1731: `1022`,
    1732: `1023`,
    1733: `1023`,
    1734: `1024`,
    1735: `1024`,
    1736: `1024`,
    1737: `1026`,
    1738: `1026`,
    1739: `1027`,
    174: `27`,
    1740: `1027`,
    1741: `1027`,
    1742: `1028`,
    1743: `1028`,
    1744: `1028`,
    1745: `1029`,
    1746: `1030`,
    1747: `1031`,
    1748: `1031`,
    1749: `1032`,
    175: `27`,
    1750: `1033`,
    1751: `1034`,
    1752: `1035`,
    1753: `1035`,
    1754: `1035`,
    1755: `1036`,
    1756: `1036`,
    1757: `1037`,
    1758: `1037`,
    1759: `1037`,
    176: `29`,
    1760: `1039`,
    1761: `1039`,
    1762: `1040`,
    1763: `1040`,
    1764: `1041`,
    1765: `1042`,
    1766: `1047`,
    1767: `1047`,
    1768: `1048`,
    1769: `1049`,
    177: `32`,
    1770: `1050`,
    1771: `1051`,
    1772: `1052`,
    1773: `1052`,
    1774: `1053`,
    1775: `1054`,
    1776: `1055`,
    1777: `1056`,
    1778: `1057`,
    1779: `1058`,
    178: `32`,
    1780: `1059`,
    1781: `1060`,
    1782: `1061`,
    1783: `1062`,
    1784: `1063`,
    1785: `1063`,
    1786: `1064`,
    1787: `1064`,
    1788: `1064`,
    1789: `1065`,
    179: `33`,
    1790: `1066`,
    1791: `1067`,
    1792: `1067`,
    1793: `1068`,
    1794: `1068`,
    1795: `1069`,
    1796: `1069`,
    1797: `1070`,
    1798: `1071`,
    1799: `1071`,
    18: `2`,
    180: `34`,
    1800: `1072`,
    1801: `1072`,
    1802: `1073`,
    1803: `1074`,
    1804: `1075`,
    1805: `1075`,
    1806: `1075`,
    1807: `1075`,
    1808: `1075`,
    1809: `1075`,
    181: `35`,
    1810: `1076`,
    1811: `1076`,
    1812: `1076`,
    1813: `1078`,
    1814: `1078`,
    1815: `1079`,
    1816: `1079`,
    1817: `1080`,
    1818: `1080`,
    1819: `1080`,
    182: `35`,
    1820: `1082`,
    1821: `1082`,
    1822: `1083`,
    1823: `1083`,
    1824: `1083`,
    1825: `1084`,
    1826: `1084`,
    1827: `1084`,
    1828: `1085`,
    1829: `1086`,
    183: `36`,
    1830: `1087`,
    1831: `1087`,
    1832: `1088`,
    1833: `1089`,
    1834: `1090`,
    1835: `1091`,
    1836: `1091`,
    1837: `1091`,
    1838: `1092`,
    1839: `1092`,
    184: `36`,
    1840: `1093`,
    1841: `1093`,
    1842: `1093`,
    1843: `1095`,
    1844: `1095`,
    1845: `1096`,
    1846: `1096`,
    1847: `1097`,
    1848: `1097`,
    1849: `1098`,
    185: `37`,
    1850: `1099`,
    1851: `1100`,
    1852: `1104`,
    1853: `1104`,
    1854: `1105`,
    1855: `1106`,
    1856: `1107`,
    1857: `1107`,
    1858: `1107`,
    1859: `1107`,
    186: `38`,
    1860: `1107`,
    1861: `1107`,
    1862: `1108`,
    1863: `1108`,
    1864: `1108`,
    1865: `1110`,
    1866: `1111`,
    1867: `1111`,
    1868: `1112`,
    1869: `1112`,
    187: `39`,
    1870: `1112`,
    1871: `1114`,
    1872: `1114`,
    1873: `1115`,
    1874: `1115`,
    1875: `1115`,
    1876: `1116`,
    1877: `1116`,
    1878: `1117`,
    1879: `1118`,
    188: `39`,
    1880: `1118`,
    1881: `1119`,
    1882: `1120`,
    1883: `1120`,
    1884: `1121`,
    1885: `1121`,
    1886: `1121`,
    1887: `1123`,
    1888: `1123`,
    1889: `1123`,
    189: `40`,
    1890: `1123`,
    1891: `1123`,
    1892: `1123`,
    1893: `1123`,
    1894: `1124`,
    1895: `1124`,
    1896: `1125`,
    1897: `1126`,
    1898: `1127`,
    1899: `1128`,
    19: `2`,
    190: `40`,
    1900: `1128`,
    1901: `1129`,
    1902: `1129`,
    1903: `1130`,
    1904: `1131`,
    1905: `1131`,
    1906: `1132`,
    1907: `1133`,
    1908: `1133`,
    1909: `1134`,
    191: `41`,
    1910: `1135`,
    1911: `1135`,
    1912: `1136`,
    1913: `1137`,
    1914: `1137`,
    1915: `1138`,
    1916: `1139`,
    1917: `1140`,
    1918: `1140`,
    1919: `1141`,
    192: `41`,
    1920: `1141`,
    1921: `1142`,
    1922: `1142`,
    1923: `1143`,
    1924: `1143`,
    1925: `1143`,
    1926: `1144`,
    1927: `1145`,
    1928: `1146`,
    1929: `1146`,
    193: `41`,
    1930: `1147`,
    1931: `1147`,
    1932: `1148`,
    1933: `1148`,
    1934: `1149`,
    1935: `1149`,
    1936: `1151`,
    1937: `1151`,
    1938: `1152`,
    1939: `1152`,
    194: `42`,
    1940: `1152`,
    1941: `1152`,
    1942: `1152`,
    1943: `1152`,
    1944: `1153`,
    1945: `1153`,
    1946: `1154`,
    1947: `1154`,
    1948: `1156`,
    1949: `1157`,
    195: `42`,
    1950: `1157`,
    1951: `1158`,
    1952: `1158`,
    1953: `1159`,
    1954: `1159`,
    1955: `1161`,
    1956: `1162`,
    1957: `1162`,
    1958: `1163`,
    1959: `1163`,
    196: `43`,
    1960: `1164`,
    1961: `1164`,
    1962: `1165`,
    1963: `1165`,
    1964: `1169`,
    1965: `1169`,
    1966: `1170`,
    1967: `1170`,
    1968: `1171`,
    1969: `1175`,
    197: `43`,
    1970: `1175`,
    1971: `1176`,
    1972: `1177`,
    1973: `1177`,
    1974: `1178`,
    1975: `1179`,
    1976: `1179`,
    1977: `1180`,
    1978: `1181`,
    1979: `1182`,
    198: `44`,
    1980: `1183`,
    1981: `1183`,
    1982: `1183`,
    1983: `1184`,
    1984: `1184`,
    1985: `1184`,
    1986: `1185`,
    1987: `1186`,
    1988: `1186`,
    1989: `1187`,
    199: `44`,
    1990: `1187`,
    1991: `1187`,
    1992: `1187`,
    1993: `1187`,
    1994: `1187`,
    1995: `1187`,
    1996: `1187`,
    1997: `1187`,
    1998: `1187`,
    1999: `1188`,
    2: `2`,
    20: `2`,
    200: `45`,
    2000: `1188`,
    2001: `1189`,
    2002: `1190`,
    2003: `1191`,
    2004: `1191`,
    2005: `1192`,
    2006: `1192`,
    2007: `1193`,
    2008: `1194`,
    2009: `1194`,
    201: `46`,
    2010: `1195`,
    2011: `1196`,
    2012: `1197`,
    2013: `1198`,
    2014: `1202`,
    2015: `1202`,
    2016: `1203`,
    2017: `1203`,
    2018: `1203`,
    2019: `1204`,
    202: `46`,
    2020: `1205`,
    2021: `1209`,
    2022: `1210`,
    2023: `1210`,
    2024: `1211`,
    2025: `1211`,
    2026: `1212`,
    2027: `1213`,
    2028: `1213`,
    2029: `1214`,
    203: `48`,
    2030: `1215`,
    2031: `1216`,
    2032: `1216`,
    2033: `1217`,
    2034: `1218`,
    2035: `1219`,
    2036: `1220`,
    2037: `1221`,
    2038: `1222`,
    2039: `1223`,
    204: `49`,
    2040: `1223`,
    2041: `1224`,
    2042: `1225`,
    2043: `1225`,
    2044: `1226`,
    2045: `1227`,
    2046: `1229`,
    2047: `1229`,
    2048: `1230`,
    2049: `1231`,
    205: `49`,
    2050: `1232`,
    2051: `1232`,
    2052: `1232`,
    2053: `1232`,
    2054: `1232`,
    2055: `1232`,
    2056: `1233`,
    2057: `1233`,
    2058: `1233`,
    2059: `1235`,
    206: `50`,
    2060: `1235`,
    2061: `1236`,
    2062: `1236`,
    2063: `1237`,
    2064: `1237`,
    2065: `1237`,
    2066: `1239`,
    2067: `1239`,
    2068: `1240`,
    2069: `1240`,
    207: `51`,
    2070: `1240`,
    2071: `1241`,
    2072: `1241`,
    2073: `1241`,
    2074: `1242`,
    2075: `1243`,
    2076: `1244`,
    2077: `1244`,
    2078: `1245`,
    2079: `1246`,
    208: `52`,
    2080: `1247`,
    2081: `1248`,
    2082: `1248`,
    2083: `1248`,
    2084: `1249`,
    2085: `1249`,
    2086: `1250`,
    2087: `1250`,
    2088: `1250`,
    2089: `1252`,
    209: `52`,
    2090: `1252`,
    2091: `1253`,
    2092: `1254`,
    2093: `1255`,
    2094: `1255`,
    2095: `1255`,
    2096: `1255`,
    2097: `1255`,
    2098: `1255`,
    2099: `1256`,
    21: `2`,
    210: `53`,
    2100: `1256`,
    2101: `1256`,
    2102: `1258`,
    2103: `1258`,
    2104: `1259`,
    2105: `1259`,
    2106: `1260`,
    2107: `1260`,
    2108: `1260`,
    2109: `1262`,
    211: `54`,
    2110: `1262`,
    2111: `1263`,
    2112: `1263`,
    2113: `1263`,
    2114: `1264`,
    2115: `1264`,
    2116: `1264`,
    2117: `1265`,
    2118: `1266`,
    2119: `1267`,
    212: `54`,
    2120: `1267`,
    2121: `1268`,
    2122: `1269`,
    2123: `1270`,
    2124: `1271`,
    2125: `1271`,
    2126: `1271`,
    2127: `1272`,
    2128: `1272`,
    2129: `1273`,
    213: `54`,
    2130: `1273`,
    2131: `1273`,
    2132: `1275`,
    2133: `1275`,
    2134: `1276`,
    2135: `1276`,
    2136: `1277`,
    2137: `1277`,
    2138: `1278`,
    2139: `1279`,
    214: `55`,
    2140: `1280`,
    2141: `1280`,
    2142: `1281`,
    2143: `1281`,
    2144: `1282`,
    2145: `1283`,
    2146: `1283`,
    2147: `1283`,
    2148: `1284`,
    2149: `1284`,
    215: `56`,
    2150: `1285`,
    2151: `1285`,
    2152: `1286`,
    2153: `1287`,
    2154: `1288`,
    2155: `1289`,
    2156: `1290`,
    2157: `1291`,
    2158: `1291`,
    2159: `1291`,
    216: `57`,
    2160: `1292`,
    2161: `1293`,
    2162: `1293`,
    2163: `1294`,
    2164: `1294`,
    2165: `1294`,
    2166: `1294`,
    2167: `1294`,
    2168: `1294`,
    2169: `1294`,
    217: `58`,
    2170: `1294`,
    2171: `1294`,
    2172: `1294`,
    2173: `1295`,
    2174: `1295`,
    2175: `1296`,
    2176: `1297`,
    2177: `1297`,
    2178: `1297`,
    2179: `1298`,
    218: `59`,
    2180: `1299`,
    2181: `1300`,
    2182: `1300`,
    2183: `1301`,
    2184: `1302`,
    2185: `1302`,
    2186: `1302`,
    2187: `1303`,
    2188: `1303`,
    2189: `1304`,
    219: `64`,
    2190: `1304`,
    2191: `1305`,
    2192: `1306`,
    2193: `1307`,
    2194: `1307`,
    2195: `1307`,
    2196: `1307`,
    2197: `1307`,
    2198: `1307`,
    2199: `1308`,
    22: `2`,
    220: `64`,
    2200: `1308`,
    2201: `1308`,
    2202: `1310`,
    2203: `1311`,
    2204: `1311`,
    2205: `1312`,
    2206: `1312`,
    2207: `1312`,
    2208: `1314`,
    2209: `1314`,
    221: `65`,
    2210: `1315`,
    2211: `1315`,
    2212: `1315`,
    2213: `1316`,
    2214: `1316`,
    2215: `1317`,
    2216: `1318`,
    2217: `1318`,
    2218: `1319`,
    2219: `1320`,
    222: `66`,
    2220: `1320`,
    2221: `1321`,
    2222: `1321`,
    2223: `1321`,
    2224: `1323`,
    2225: `1323`,
    2226: `1324`,
    2227: `1324`,
    2228: `1324`,
    2229: `1325`,
    223: `66`,
    2230: `1325`,
    2231: `1326`,
    2232: `1326`,
    2233: `1326`,
    2234: `1327`,
    2235: `1328`,
    2236: `1328`,
    2237: `1329`,
    2238: `1329`,
    2239: `1329`,
    224: `67`,
    2240: `1330`,
    2241: `1331`,
    2242: `1331`,
    2243: `1332`,
    2244: `1332`,
    2245: `1332`,
    2246: `1333`,
    2247: `1334`,
    2248: `1334`,
    2249: `1335`,
    225: `68`,
    2250: `1335`,
    2251: `1335`,
    2252: `1336`,
    2253: `1336`,
    2254: `1337`,
    2255: `1338`,
    2256: `1338`,
    2257: `1338`,
    2258: `1339`,
    2259: `1340`,
    226: `68`,
    2260: `1340`,
    2261: `1341`,
    2262: `1341`,
    2263: `1341`,
    2264: `1342`,
    2265: `1343`,
    2266: `1343`,
    2267: `1344`,
    2268: `1344`,
    2269: `1344`,
    227: `69`,
    2270: `1345`,
    2271: `1346`,
    2272: `1346`,
    2273: `1347`,
    2274: `1347`,
    2275: `1347`,
    2276: `1348`,
    2277: `1349`,
    2278: `1349`,
    2279: `1350`,
    228: `70`,
    2280: `1350`,
    2281: `1351`,
    2282: `1351`,
    2283: `1352`,
    2284: `1352`,
    2285: `1352`,
    2286: `1354`,
    2287: `1354`,
    2288: `1355`,
    2289: `1355`,
    229: `70`,
    2290: `1356`,
    2291: `1356`,
    2292: `1356`,
    2293: `1358`,
    2294: `1358`,
    2295: `1359`,
    2296: `1359`,
    2297: `1359`,
    2298: `1360`,
    2299: `1360`,
    23: `2`,
    230: `71`,
    2300: `1360`,
    2301: `1361`,
    2302: `1362`,
    2303: `1363`,
    2304: `1363`,
    2305: `1364`,
    2306: `1365`,
    2307: `1366`,
    2308: `1367`,
    2309: `1367`,
    231: `72`,
    2310: `1367`,
    2311: `1368`,
    2312: `1368`,
    2313: `1369`,
    2314: `1369`,
    2315: `1369`,
    2316: `1371`,
    2317: `1371`,
    2318: `1372`,
    2319: `1377`,
    232: `73`,
    2320: `1377`,
    2321: `1378`,
    2322: `1379`,
    2323: `1380`,
    2324: `1380`,
    2325: `1380`,
    2326: `1380`,
    2327: `1380`,
    2328: `1380`,
    2329: `1381`,
    233: `73`,
    2330: `1381`,
    2331: `1381`,
    2332: `1383`,
    2333: `1384`,
    2334: `1384`,
    2335: `1385`,
    2336: `1385`,
    2337: `1385`,
    2338: `1387`,
    2339: `1387`,
    234: `74`,
    2340: `1388`,
    2341: `1388`,
    2342: `1388`,
    2343: `1389`,
    2344: `1389`,
    2345: `1390`,
    2346: `1391`,
    2347: `1392`,
    2348: `1393`,
    2349: `1393`,
    235: `75`,
    2350: `1394`,
    2351: `1394`,
    2352: `1394`,
    2353: `1396`,
    2354: `1396`,
    2355: `1397`,
    2356: `1402`,
    2357: `1402`,
    2358: `1403`,
    2359: `1404`,
    236: `75`,
    2360: `1404`,
    2361: `1405`,
    2362: `1406`,
    2363: `1406`,
    2364: `1406`,
    2365: `1407`,
    2366: `1408`,
    2367: `1408`,
    2368: `1409`,
    2369: `1409`,
    237: `76`,
    2370: `1409`,
    2371: `1409`,
    2372: `1409`,
    2373: `1409`,
    2374: `1409`,
    2375: `1409`,
    2376: `1409`,
    2377: `1409`,
    2378: `1410`,
    2379: `1410`,
    238: `77`,
    2380: `1411`,
    2381: `1412`,
    2382: `1412`,
    2383: `1412`,
    2384: `1413`,
    2385: `1414`,
    2386: `1415`,
    2387: `1415`,
    2388: `1416`,
    2389: `1417`,
    239: `78`,
    2390: `1417`,
    2391: `1417`,
    2392: `1418`,
    2393: `1418`,
    2394: `1419`,
    2395: `1419`,
    2396: `1420`,
    2397: `1420`,
    2398: `1421`,
    2399: `1422`,
    24: `2`,
    240: `79`,
    2400: `1422`,
    2401: `1423`,
    2402: `1424`,
    2403: `1425`,
    2404: `1425`,
    2405: `1426`,
    2406: `1427`,
    2407: `1427`,
    2408: `1428`,
    2409: `1429`,
    241: `80`,
    2410: `1431`,
    2411: `1431`,
    2412: `1432`,
    2413: `1432`,
    2414: `1432`,
    2415: `1433`,
    2416: `1433`,
    2417: `1434`,
    2418: `1434`,
    2419: `1434`,
    242: `81`,
    2420: `1435`,
    2421: `1436`,
    2422: `1436`,
    2423: `1437`,
    2424: `1437`,
    2425: `1438`,
    2426: `1439`,
    2427: `1440`,
    2428: `1441`,
    2429: `1442`,
    243: `82`,
    2430: `1443`,
    2431: `1443`,
    2432: `1444`,
    2433: `1444`,
    2434: `1444`,
    2435: `1445`,
    2436: `1446`,
    2437: `1446`,
    2438: `1447`,
    2439: `1447`,
    244: `83`,
    2440: `1447`,
    2441: `1448`,
    2442: `1449`,
    2443: `1449`,
    2444: `1450`,
    2445: `1450`,
    2446: `1450`,
    2447: `1451`,
    2448: `1452`,
    2449: `1452`,
    245: `84`,
    2450: `1453`,
    2451: `1454`,
    2452: `1455`,
    2453: `1455`,
    2454: `1456`,
    2455: `1456`,
    2456: `1456`,
    2457: `1457`,
    2458: `1458`,
    2459: `1458`,
    246: `84`,
    2460: `1459`,
    2461: `1459`,
    2462: `1460`,
    2463: `1460`,
    2464: `1461`,
    2465: `1461`,
    2466: `1461`,
    2467: `1463`,
    2468: `1464`,
    2469: `1464`,
    247: `84`,
    2470: `1465`,
    2471: `1465`,
    2472: `1465`,
    2473: `1467`,
    2474: `1467`,
    2475: `1468`,
    2476: `1468`,
    2477: `1468`,
    2478: `1469`,
    2479: `1469`,
    248: `85`,
    2480: `1470`,
    2481: `1471`,
    2482: `1472`,
    2483: `1473`,
    2484: `1473`,
    2485: `1474`,
    2486: `1474`,
    2487: `1474`,
    2488: `1476`,
    2489: `1476`,
    249: `86`,
    2490: `1477`,
    2491: `1482`,
    2492: `1482`,
    2493: `1483`,
    2494: `1483`,
    2495: `1484`,
    2496: `1484`,
    2497: `1485`,
    2498: `1486`,
    2499: `1487`,
    25: `2`,
    250: `86`,
    2500: `1487`,
    2501: `1487`,
    2502: `1488`,
    2503: `1488`,
    2504: `1489`,
    2505: `1490`,
    2506: `1491`,
    2507: `1491`,
    2508: `1491`,
    2509: `1491`,
    251: `87`,
    2510: `1491`,
    2511: `1491`,
    2512: `1492`,
    2513: `1492`,
    2514: `1492`,
    2515: `1494`,
    2516: `1495`,
    2517: `1495`,
    2518: `1496`,
    2519: `1496`,
    252: `88`,
    2520: `1496`,
    2521: `1498`,
    2522: `1498`,
    2523: `1499`,
    2524: `1499`,
    2525: `1499`,
    2526: `1500`,
    2527: `1500`,
    2528: `1501`,
    2529: `1502`,
    253: `88`,
    2530: `1503`,
    2531: `1504`,
    2532: `1504`,
    2533: `1505`,
    2534: `1505`,
    2535: `1505`,
    2536: `1507`,
    2537: `1507`,
    2538: `1508`,
    2539: `1508`,
    254: `89`,
    2540: `1509`,
    2541: `1510`,
    2542: `1511`,
    2543: `1512`,
    2544: `1513`,
    2545: `1513`,
    2546: `1514`,
    2547: `1515`,
    2548: `1515`,
    2549: `1516`,
    255: `90`,
    2550: `1517`,
    2551: `1519`,
    2552: `1520`,
    2553: `1520`,
    2554: `1521`,
    2555: `1521`,
    2556: `1521`,
    2557: `1521`,
    2558: `1521`,
    2559: `1521`,
    256: `90`,
    2560: `1521`,
    2561: `1521`,
    2562: `1521`,
    2563: `1521`,
    2564: `1522`,
    2565: `1522`,
    2566: `1523`,
    2567: `1524`,
    2568: `1524`,
    2569: `1524`,
    257: `91`,
    2570: `1525`,
    2571: `1526`,
    2572: `1527`,
    2573: `1527`,
    2574: `1528`,
    2575: `1529`,
    2576: `1529`,
    2577: `1529`,
    2578: `1530`,
    2579: `1530`,
    258: `92`,
    2580: `1531`,
    2581: `1531`,
    2582: `1532`,
    2583: `1532`,
    2584: `1532`,
    2585: `1533`,
    2586: `1533`,
    2587: `1534`,
    2588: `1534`,
    2589: `1534`,
    259: `93`,
    2590: `1535`,
    2591: `1536`,
    2592: `1536`,
    2593: `1537`,
    2594: `1537`,
    2595: `1537`,
    2596: `1538`,
    2597: `1539`,
    2598: `1539`,
    2599: `1540`,
    26: `2`,
    260: `93`,
    2600: `1540`,
    2601: `1540`,
    2602: `1541`,
    2603: `1542`,
    2604: `1542`,
    2605: `1543`,
    2606: `1543`,
    2607: `1543`,
    2608: `1544`,
    2609: `1545`,
    261: `94`,
    2610: `1545`,
    2611: `1546`,
    2612: `1546`,
    2613: `1546`,
    2614: `1547`,
    2615: `1548`,
    2616: `1548`,
    2617: `1549`,
    2618: `1549`,
    2619: `1550`,
    262: `95`,
    2620: `1551`,
    2621: `1552`,
    2622: `1553`,
    2623: `1554`,
    2624: `1555`,
    2625: `1555`,
    2626: `1556`,
    2627: `1556`,
    2628: `1556`,
    2629: `1557`,
    263: `95`,
    2630: `1558`,
    2631: `1558`,
    2632: `1559`,
    2633: `1559`,
    2634: `1560`,
    2635: `1560`,
    2636: `1561`,
    2637: `1561`,
    2638: `1561`,
    2639: `1563`,
    264: `96`,
    2640: `1563`,
    2641: `1564`,
    2642: `1564`,
    2643: `1564`,
    2644: `1565`,
    2645: `1565`,
    2646: `1566`,
    2647: `1566`,
    2648: `1567`,
    2649: `1568`,
    265: `97`,
    2650: `1568`,
    2651: `1569`,
    2652: `1570`,
    2653: `1570`,
    2654: `1571`,
    2655: `1571`,
    2656: `1571`,
    2657: `1572`,
    2658: `1572`,
    2659: `1573`,
    266: `98`,
    2660: `1573`,
    2661: `1573`,
    2662: `1574`,
    2663: `1575`,
    2664: `1575`,
    2665: `1576`,
    2666: `1576`,
    2667: `1576`,
    2668: `1577`,
    2669: `1578`,
    267: `99`,
    2670: `1578`,
    2671: `1579`,
    2672: `1579`,
    2673: `1579`,
    2674: `1580`,
    2675: `1581`,
    2676: `1581`,
    2677: `1582`,
    2678: `1582`,
    2679: `1583`,
    268: `99`,
    2680: `1584`,
    2681: `1585`,
    2682: `1586`,
    2683: `1587`,
    2684: `1588`,
    2685: `1588`,
    2686: `1589`,
    2687: `1589`,
    2688: `1589`,
    2689: `1590`,
    269: `100`,
    2690: `1591`,
    2691: `1591`,
    2692: `1591`,
    2693: `1592`,
    2694: `1592`,
    2695: `1593`,
    2696: `1593`,
    2697: `1594`,
    2698: `1595`,
    2699: `1596`,
    27: `2`,
    270: `101`,
    2700: `1597`,
    2701: `1598`,
    2702: `1598`,
    2703: `1599`,
    2704: `1600`,
    2705: `1600`,
    2706: `1601`,
    2707: `1602`,
    2708: `1604`,
    2709: `1605`,
    271: `101`,
    2710: `1605`,
    2711: `1606`,
    2712: `1606`,
    2713: `1606`,
    2714: `1606`,
    2715: `1606`,
    2716: `1606`,
    2717: `1606`,
    2718: `1606`,
    2719: `1606`,
    272: `102`,
    2720: `1606`,
    2721: `1607`,
    2722: `1607`,
    2723: `1608`,
    2724: `1609`,
    2725: `1609`,
    2726: `1609`,
    2727: `1610`,
    2728: `1611`,
    2729: `1612`,
    273: `103`,
    2730: `1612`,
    2731: `1613`,
    2732: `1614`,
    2733: `1614`,
    2734: `1614`,
    2735: `1615`,
    2736: `1615`,
    2737: `1616`,
    2738: `1616`,
    2739: `1617`,
    274: `105`,
    2740: `1617`,
    2741: `1617`,
    2742: `1618`,
    2743: `1618`,
    2744: `1619`,
    2745: `1619`,
    2746: `1619`,
    2747: `1620`,
    2748: `1621`,
    2749: `1621`,
    275: `106`,
    2750: `1622`,
    2751: `1622`,
    2752: `1622`,
    2753: `1623`,
    2754: `1624`,
    2755: `1624`,
    2756: `1625`,
    2757: `1625`,
    2758: `1625`,
    2759: `1626`,
    276: `106`,
    2760: `1627`,
    2761: `1627`,
    2762: `1628`,
    2763: `1628`,
    2764: `1628`,
    2765: `1629`,
    2766: `1630`,
    2767: `1630`,
    2768: `1631`,
    2769: `1631`,
    277: `107`,
    2770: `1631`,
    2771: `1632`,
    2772: `1633`,
    2773: `1633`,
    2774: `1634`,
    2775: `1634`,
    2776: `1635`,
    2777: `1636`,
    2778: `1637`,
    2779: `1638`,
    278: `107`,
    2780: `1639`,
    2781: `1640`,
    2782: `1640`,
    2783: `1641`,
    2784: `1641`,
    2785: `1641`,
    2786: `1642`,
    2787: `1643`,
    2788: `1643`,
    2789: `1644`,
    279: `107`,
    2790: `1644`,
    2791: `1645`,
    2792: `1645`,
    2793: `1646`,
    2794: `1646`,
    2795: `1646`,
    2796: `1648`,
    2797: `1648`,
    2798: `1649`,
    2799: `1649`,
    28: `2`,
    280: `107`,
    2800: `1650`,
    2801: `1650`,
    2802: `1651`,
    2803: `1652`,
    2804: `1653`,
    2805: `1653`,
    2806: `1654`,
    2807: `1654`,
    2808: `1655`,
    2809: `1656`,
    281: `107`,
    2810: `1657`,
    2811: `1658`,
    2812: `1659`,
    2813: `1659`,
    2814: `1659`,
    2815: `1660`,
    2816: `1660`,
    2817: `1661`,
    2818: `1662`,
    2819: `1663`,
    282: `107`,
    2820: `1663`,
    2821: `1663`,
    2822: `1663`,
    2823: `1663`,
    2824: `1663`,
    2825: `1664`,
    2826: `1664`,
    2827: `1664`,
    2828: `1666`,
    2829: `1666`,
    283: `107`,
    2830: `1667`,
    2831: `1667`,
    2832: `1668`,
    2833: `1668`,
    2834: `1668`,
    2835: `1670`,
    2836: `1670`,
    2837: `1671`,
    2838: `1671`,
    2839: `1671`,
    284: `107`,
    2840: `1672`,
    2841: `1673`,
    2842: `1673`,
    2843: `1674`,
    2844: `1674`,
    2845: `1674`,
    2846: `1675`,
    2847: `1676`,
    2848: `1677`,
    2849: `1677`,
    285: `107`,
    2850: `1678`,
    2851: `1678`,
    2852: `1678`,
    2853: `1679`,
    2854: `1680`,
    2855: `1681`,
    2856: `1681`,
    2857: `1681`,
    2858: `1682`,
    2859: `1682`,
    286: `107`,
    2860: `1683`,
    2861: `1683`,
    2862: `1683`,
    2863: `1685`,
    2864: `1685`,
    2865: `1686`,
    2866: `1686`,
    2867: `1687`,
    2868: `1688`,
    2869: `1689`,
    287: `108`,
    2870: `1690`,
    2871: `1691`,
    2872: `1691`,
    2873: `1692`,
    2874: `1693`,
    2875: `1693`,
    2876: `1694`,
    2877: `1695`,
    2878: `1697`,
    2879: `1698`,
    288: `108`,
    2880: `1698`,
    2881: `1699`,
    2882: `1699`,
    2883: `1699`,
    2884: `1699`,
    2885: `1699`,
    2886: `1699`,
    2887: `1699`,
    2888: `1699`,
    2889: `1699`,
    289: `109`,
    2890: `1699`,
    2891: `1700`,
    2892: `1700`,
    2893: `1701`,
    2894: `1702`,
    2895: `1702`,
    2896: `1702`,
    2897: `1703`,
    2898: `1704`,
    2899: `1705`,
    29: `2`,
    290: `110`,
    2900: `1705`,
    2901: `1706`,
    2902: `1707`,
    2903: `1707`,
    2904: `1707`,
    2905: `1708`,
    2906: `1708`,
    2907: `1709`,
    2908: `1709`,
    2909: `1710`,
    291: `110`,
    2910: `1710`,
    2911: `1710`,
    2912: `1711`,
    2913: `1711`,
    2914: `1712`,
    2915: `1712`,
    2916: `1713`,
    2917: `1713`,
    2918: `1713`,
    2919: `1714`,
    292: `110`,
    2920: `1714`,
    2921: `1715`,
    2922: `1715`,
    2923: `1716`,
    2924: `1716`,
    2925: `1716`,
    2926: `1717`,
    2927: `1717`,
    2928: `1718`,
    2929: `1718`,
    293: `111`,
    2930: `1718`,
    2931: `1719`,
    2932: `1720`,
    2933: `1720`,
    2934: `1721`,
    2935: `1721`,
    2936: `1721`,
    2937: `1722`,
    2938: `1723`,
    2939: `1723`,
    294: `112`,
    2940: `1724`,
    2941: `1724`,
    2942: `1724`,
    2943: `1725`,
    2944: `1726`,
    2945: `1726`,
    2946: `1727`,
    2947: `1728`,
    2948: `1728`,
    2949: `1729`,
    295: `113`,
    2950: `1729`,
    2951: `1730`,
    2952: `1731`,
    2953: `1731`,
    2954: `1732`,
    2955: `1733`,
    2956: `1734`,
    2957: `1735`,
    2958: `1735`,
    2959: `1736`,
    296: `113`,
    2960: `1736`,
    2961: `1737`,
    2962: `1738`,
    2963: `1739`,
    2964: `1740`,
    2965: `1741`,
    2966: `1742`,
    2967: `1742`,
    2968: `1743`,
    2969: `1743`,
    297: `114`,
    2970: `1744`,
    2971: `1745`,
    2972: `1746`,
    2973: `1747`,
    2974: `1748`,
    2975: `1749`,
    2976: `1749`,
    2977: `1750`,
    2978: `1750`,
    2979: `1751`,
    298: `115`,
    2980: `1751`,
    2981: `1752`,
    2982: `1752`,
    2983: `1752`,
    2984: `1754`,
    2985: `1754`,
    2986: `1755`,
    2987: `1755`,
    2988: `1755`,
    2989: `1756`,
    299: `115`,
    2990: `1757`,
    2991: `1757`,
    2992: `1758`,
    2993: `1758`,
    2994: `1758`,
    2995: `1759`,
    2996: `1759`,
    2997: `1760`,
    2998: `1760`,
    2999: `1760`,
    3: `2`,
    30: `2`,
    300: `115`,
    3000: `1761`,
    3001: `1762`,
    3002: `1762`,
    3003: `1763`,
    3004: `1763`,
    3005: `1763`,
    3006: `1764`,
    3007: `1765`,
    3008: `1765`,
    3009: `1766`,
    301: `116`,
    3010: `1766`,
    3011: `1766`,
    3012: `1767`,
    3013: `1768`,
    3014: `1768`,
    3015: `1769`,
    3016: `1769`,
    3017: `1770`,
    3018: `1771`,
    3019: `1772`,
    302: `116`,
    3020: `1773`,
    3021: `1774`,
    3022: `1775`,
    3023: `1775`,
    3024: `1776`,
    3025: `1776`,
    3026: `1777`,
    3027: `1778`,
    3028: `1779`,
    3029: `1780`,
    303: `117`,
    3030: `1781`,
    3031: `1782`,
    3032: `1782`,
    3033: `1783`,
    3034: `1783`,
    3035: `1784`,
    3036: `1785`,
    3037: `1785`,
    3038: `1786`,
    3039: `1787`,
    304: `117`,
    3040: `1787`,
    3041: `1788`,
    3042: `1788`,
    3043: `1788`,
    3044: `1789`,
    3045: `1789`,
    3046: `1790`,
    3047: `1790`,
    3048: `1791`,
    3049: `1792`,
    305: `118`,
    3050: `1793`,
    3051: `1794`,
    3052: `1795`,
    3053: `1795`,
    3054: `1796`,
    3055: `1797`,
    3056: `1797`,
    3057: `1798`,
    3058: `1799`,
    3059: `1801`,
    306: `118`,
    3060: `1802`,
    3061: `1802`,
    3062: `1803`,
    3063: `1803`,
    3064: `1803`,
    3065: `1803`,
    3066: `1803`,
    3067: `1803`,
    3068: `1803`,
    3069: `1803`,
    307: `118`,
    3070: `1803`,
    3071: `1803`,
    3072: `1804`,
    3073: `1804`,
    3074: `1805`,
    3075: `1806`,
    3076: `1806`,
    3077: `1806`,
    3078: `1807`,
    3079: `1808`,
    308: `119`,
    3080: `1809`,
    3081: `1809`,
    3082: `1810`,
    3083: `1811`,
    3084: `1811`,
    3085: `1811`,
    3086: `1812`,
    3087: `1812`,
    3088: `1813`,
    3089: `1813`,
    309: `119`,
    3090: `1814`,
    3091: `1814`,
    3092: `1814`,
    3093: `1815`,
    3094: `1815`,
    3095: `1816`,
    3096: `1816`,
    3097: `1817`,
    3098: `1817`,
    3099: `1817`,
    31: `2`,
    310: `120`,
    3100: `1818`,
    3101: `1818`,
    3102: `1819`,
    3103: `1819`,
    3104: `1819`,
    3105: `1820`,
    3106: `1821`,
    3107: `1822`,
    3108: `1822`,
    3109: `1823`,
    311: `120`,
    3110: `1823`,
    3111: `1823`,
    3112: `1824`,
    3113: `1825`,
    3114: `1826`,
    3115: `1826`,
    3116: `1826`,
    3117: `1827`,
    3118: `1828`,
    3119: `1828`,
    312: `120`,
    3120: `1828`,
    3121: `1829`,
    3122: `1829`,
    3123: `1830`,
    3124: `1830`,
    3125: `1831`,
    3126: `1831`,
    3127: `1831`,
    3128: `1832`,
    3129: `1832`,
    313: `121`,
    3130: `1833`,
    3131: `1833`,
    3132: `1833`,
    3133: `1834`,
    3134: `1835`,
    3135: `1835`,
    3136: `1836`,
    3137: `1836`,
    3138: `1836`,
    3139: `1837`,
    314: `122`,
    3140: `1838`,
    3141: `1838`,
    3142: `1839`,
    3143: `1839`,
    3144: `1839`,
    3145: `1840`,
    3146: `1841`,
    3147: `1841`,
    3148: `1842`,
    3149: `1843`,
    315: `122`,
    3150: `1843`,
    3151: `1844`,
    3152: `1844`,
    3153: `1845`,
    3154: `1846`,
    3155: `1846`,
    3156: `1847`,
    3157: `1848`,
    3158: `1849`,
    3159: `1850`,
    316: `123`,
    3160: `1850`,
    3161: `1851`,
    3162: `1851`,
    3163: `1852`,
    3164: `1853`,
    3165: `1854`,
    3166: `1855`,
    3167: `1856`,
    3168: `1857`,
    3169: `1857`,
    317: `123`,
    3170: `1858`,
    3171: `1858`,
    3172: `1859`,
    3173: `1860`,
    3174: `1861`,
    3175: `1862`,
    3176: `1863`,
    3177: `1864`,
    3178: `1864`,
    3179: `1865`,
    318: `124`,
    3180: `1865`,
    3181: `1866`,
    3182: `1866`,
    3183: `1867`,
    3184: `1867`,
    3185: `1867`,
    3186: `1870`,
    3187: `1870`,
    3188: `1871`,
    3189: `1872`,
    319: `125`,
    3190: `1872`,
    3191: `1873`,
    3192: `1874`,
    3193: `1874`,
    3194: `1875`,
    3195: `1876`,
    3196: `1876`,
    3197: `1877`,
    3198: `1877`,
    3199: `1878`,
    32: `2`,
    320: `126`,
    3200: `1878`,
    3201: `1878`,
    3202: `1880`,
    3203: `1881`,
    3204: `1882`,
    3205: `1883`,
    3206: `1884`,
    3207: `1886`,
    3208: `1887`,
    3209: `1887`,
    321: `127`,
    3210: `1888`,
    3211: `1889`,
    3212: `1889`,
    3213: `1890`,
    3214: `1890`,
    3215: `1891`,
    3216: `1891`,
    3217: `1892`,
    3218: `1894`,
    3219: `1895`,
    322: `128`,
    3220: `1895`,
    3221: `1896`,
    3222: `1897`,
    3223: `1897`,
    3224: `1898`,
    3225: `1898`,
    3226: `1899`,
    3227: `1899`,
    3228: `1900`,
    3229: `1901`,
    323: `129`,
    3230: `1903`,
    3231: `1903`,
    3232: `1904`,
    3233: `1904`,
    3234: `1904`,
    3235: `1905`,
    3236: `1905`,
    3237: `1906`,
    3238: `1906`,
    3239: `1906`,
    324: `129`,
    3240: `1908`,
    3241: `1908`,
    3242: `1909`,
    3243: `1909`,
    3244: `1909`,
    3245: `1910`,
    3246: `1910`,
    3247: `1911`,
    3248: `1911`,
    3249: `1911`,
    325: `130`,
    3250: `1913`,
    3251: `1913`,
    3252: `1913`,
    3253: `1915`,
    3254: `1915`,
    3255: `1915`,
    3256: `1918`,
    3257: `1918`,
    3258: `1918`,
    3259: `1919`,
    326: `130`,
    3260: `1919`,
    3261: `1920`,
    3262: `1920`,
    3263: `1920`,
    3264: `1923`,
    3265: `1923`,
    3266: `1923`,
    3267: `1926`,
    3268: `1926`,
    3269: `1926`,
    327: `131`,
    3270: `1927`,
    3271: `1927`,
    3272: `1928`,
    3273: `1928`,
    3274: `1928`,
    3275: `1931`,
    3276: `1931`,
    3277: `1931`,
    3278: `1932`,
    3279: `1932`,
    328: `132`,
    3280: `1932`,
    3281: `1933`,
    3282: `1933`,
    3283: `1934`,
    3284: `1934`,
    3285: `1935`,
    3286: `1935`,
    3287: `1935`,
    3288: `1937`,
    3289: `1938`,
    329: `133`,
    3290: `1940`,
    3291: `1941`,
    3292: `1942`,
    3293: `1943`,
    3294: `1943`,
    3295: `1944`,
    3296: `1944`,
    3297: `1945`,
    3298: `1945`,
    3299: `1945`,
    33: `2`,
    330: `134`,
    3300: `1946`,
    3301: `1948`,
    3302: `1949`,
    3303: `1950`,
    3304: `1950`,
    3305: `1950`,
    3306: `1951`,
    3307: `1952`,
    3308: `1952`,
    3309: `1953`,
    331: `135`,
    3310: `1953`,
    3311: `1953`,
    3312: `1954`,
    3313: `1956`,
    3314: `1957`,
    3315: `1958`,
    3316: `1959`,
    3317: `1959`,
    3318: `1959`,
    3319: `1960`,
    332: `136`,
    3320: `1960`,
    3321: `1961`,
    3322: `1962`,
    3323: `1963`,
    3324: `1965`,
    3325: `1966`,
    3326: `1967`,
    3327: `1967`,
    3328: `1968`,
    3329: `1969`,
    333: `136`,
    3330: `1970`,
    3331: `1971`,
    3332: `1972`,
    3333: `1973`,
    3334: `1975`,
    3335: `1976`,
    3336: `1976`,
    3337: `1976`,
    3338: `1977`,
    3339: `1978`,
    334: `137`,
    3340: `1979`,
    3341: `1980`,
    3342: `1981`,
    3343: `1983`,
    3344: `1984`,
    3345: `1985`,
    3346: `1986`,
    3347: `1986`,
    3348: `1986`,
    3349: `1987`,
    335: `137`,
    3350: `1987`,
    3351: `1988`,
    3352: `1988`,
    3353: `1988`,
    3354: `1989`,
    3355: `1989`,
    3356: `1989`,
    3357: `1991`,
    3358: `1992`,
    3359: `1993`,
    336: `137`,
    3360: `1994`,
    3361: `1994`,
    3362: `1995`,
    3363: `1996`,
    3364: `1997`,
    3365: `1998`,
    3366: `1998`,
    3367: `1999`,
    3368: `1999`,
    3369: `1999`,
    337: `138`,
    3370: `2000`,
    3371: `2000`,
    3372: `2001`,
    3373: `2003`,
    3374: `2004`,
    3375: `2004`,
    3376: `2005`,
    3377: `2007`,
    3378: `2008`,
    3379: `2009`,
    338: `139`,
    3380: `2010`,
    3381: `2011`,
    3382: `2011`,
    3383: `2012`,
    3384: `2013`,
    3385: `2014`,
    3386: `2015`,
    3387: `2017`,
    3388: `2017`,
    3389: `2018`,
    339: `139`,
    3390: `2018`,
    3391: `2019`,
    3392: `2020`,
    3393: `2021`,
    3394: `2021`,
    3395: `2021`,
    3396: `2022`,
    3397: `2022`,
    3398: `2022`,
    3399: `2024`,
    34: `2`,
    340: `140`,
    3400: `2024`,
    3401: `2025`,
    3402: `2026`,
    3403: `2026`,
    3404: `2027`,
    3405: `2029`,
    3406: `2030`,
    3407: `2031`,
    3408: `2031`,
    3409: `2032`,
    341: `140`,
    3410: `2033`,
    3411: `2033`,
    3412: `2033`,
    3413: `2034`,
    3414: `2036`,
    3415: `2036`,
    3416: `2037`,
    3417: `2038`,
    3418: `2038`,
    3419: `2039`,
    342: `140`,
    3420: `2042`,
    3421: `2042`,
    3422: `2043`,
    3423: `2043`,
    3424: `2044`,
    3425: `2045`,
    3426: `2046`,
    3427: `2047`,
    3428: `2047`,
    3429: `2048`,
    343: `141`,
    3430: `2049`,
    3431: `2049`,
    3432: `2050`,
    3433: `2050`,
    3434: `2051`,
    3435: `2051`,
    3436: `2052`,
    3437: `2053`,
    3438: `2054`,
    3439: `2054`,
    344: `142`,
    3440: `2055`,
    3441: `2056`,
    3442: `2057`,
    3443: `2058`,
    3444: `2058`,
    3445: `2059`,
    3446: `2060`,
    3447: `2061`,
    3448: `2063`,
    3449: `2064`,
    345: `142`,
    3450: `2064`,
    3451: `2064`,
    3452: `2066`,
    3453: `2067`,
    3454: `2067`,
    3455: `2068`,
    3456: `2068`,
    3457: `2068`,
    3458: `2070`,
    3459: `2071`,
    346: `143`,
    347: `143`,
    348: `143`,
    349: `144`,
    35: `2`,
    350: `145`,
    351: `145`,
    352: `146`,
    353: `146`,
    354: `146`,
    355: `147`,
    356: `148`,
    357: `148`,
    358: `149`,
    359: `149`,
    36: `2`,
    360: `150`,
    361: `150`,
    362: `153`,
    363: `153`,
    364: `154`,
    365: `154`,
    366: `154`,
    367: `155`,
    368: `156`,
    369: `156`,
    37: `2`,
    370: `156`,
    371: `159`,
    372: `159`,
    373: `160`,
    374: `160`,
    375: `161`,
    376: `162`,
    377: `165`,
    378: `166`,
    379: `167`,
    38: `2`,
    380: `167`,
    381: `168`,
    382: `168`,
    383: `169`,
    384: `169`,
    385: `170`,
    386: `170`,
    387: `171`,
    388: `171`,
    389: `172`,
    39: `2`,
    390: `172`,
    391: `173`,
    392: `173`,
    393: `174`,
    394: `176`,
    395: `176`,
    396: `176`,
    397: `176`,
    398: `177`,
    399: `177`,
    4: `2`,
    40: `2`,
    400: `177`,
    401: `178`,
    402: `178`,
    403: `178`,
    404: `180`,
    405: `181`,
    406: `181`,
    407: `182`,
    408: `182`,
    409: `183`,
    41: `2`,
    410: `183`,
    411: `183`,
    412: `185`,
    413: `185`,
    414: `186`,
    415: `186`,
    416: `186`,
    417: `188`,
    418: `188`,
    419: `188`,
    42: `2`,
    420: `188`,
    421: `188`,
    422: `188`,
    423: `189`,
    424: `189`,
    425: `190`,
    426: `191`,
    427: `193`,
    428: `194`,
    429: `198`,
    43: `2`,
    430: `199`,
    431: `200`,
    432: `200`,
    433: `201`,
    434: `201`,
    435: `202`,
    436: `202`,
    437: `203`,
    438: `203`,
    439: `204`,
    44: `2`,
    440: `204`,
    441: `205`,
    442: `207`,
    443: `207`,
    444: `208`,
    445: `208`,
    446: `208`,
    447: `209`,
    448: `209`,
    449: `210`,
    45: `2`,
    450: `210`,
    451: `211`,
    452: `211`,
    453: `211`,
    454: `212`,
    455: `212`,
    456: `213`,
    457: `213`,
    458: `214`,
    459: `214`,
    46: `2`,
    460: `215`,
    461: `216`,
    462: `216`,
    463: `217`,
    464: `217`,
    465: `218`,
    466: `218`,
    467: `219`,
    468: `220`,
    469: `220`,
    47: `2`,
    470: `221`,
    471: `221`,
    472: `222`,
    473: `222`,
    474: `223`,
    475: `224`,
    476: `224`,
    477: `226`,
    478: `227`,
    479: `227`,
    48: `2`,
    480: `228`,
    481: `229`,
    482: `229`,
    483: `230`,
    484: `230`,
    485: `231`,
    486: `232`,
    487: `233`,
    488: `233`,
    489: `233`,
    49: `2`,
    490: `234`,
    491: `235`,
    492: `235`,
    493: `236`,
    494: `237`,
    495: `238`,
    496: `239`,
    497: `240`,
    498: `248`,
    499: `249`,
    5: `2`,
    50: `2`,
    500: `249`,
    501: `250`,
    502: `251`,
    503: `252`,
    504: `252`,
    505: `253`,
    506: `254`,
    507: `254`,
    508: `254`,
    509: `255`,
    51: `2`,
    510: `256`,
    511: `256`,
    512: `257`,
    513: `258`,
    514: `259`,
    515: `259`,
    516: `259`,
    517: `259`,
    518: `259`,
    519: `259`,
    52: `2`,
    520: `260`,
    521: `260`,
    522: `260`,
    523: `263`,
    524: `263`,
    525: `264`,
    526: `264`,
    527: `265`,
    528: `266`,
    529: `267`,
    53: `2`,
    530: `267`,
    531: `268`,
    532: `273`,
    533: `273`,
    534: `274`,
    535: `274`,
    536: `275`,
    537: `276`,
    538: `277`,
    539: `277`,
    54: `2`,
    540: `278`,
    541: `283`,
    542: `283`,
    543: `284`,
    544: `284`,
    545: `285`,
    546: `286`,
    547: `287`,
    548: `287`,
    549: `288`,
    55: `2`,
    550: `289`,
    551: `290`,
    552: `295`,
    553: `295`,
    554: `296`,
    555: `296`,
    556: `297`,
    557: `298`,
    558: `299`,
    559: `299`,
    56: `2`,
    560: `300`,
    561: `301`,
    562: `302`,
    563: `307`,
    564: `307`,
    565: `307`,
    566: `308`,
    567: `308`,
    568: `309`,
    569: `310`,
    57: `2`,
    570: `310`,
    571: `311`,
    572: `312`,
    573: `313`,
    574: `313`,
    575: `314`,
    576: `315`,
    577: `315`,
    578: `316`,
    579: `317`,
    58: `4`,
    580: `319`,
    581: `320`,
    582: `320`,
    583: `321`,
    584: `321`,
    585: `321`,
    586: `321`,
    587: `321`,
    588: `321`,
    589: `321`,
    59: `4`,
    590: `321`,
    591: `321`,
    592: `321`,
    593: `322`,
    594: `322`,
    595: `323`,
    596: `324`,
    597: `324`,
    598: `324`,
    599: `325`,
    6: `2`,
    60: `5`,
    600: `326`,
    601: `327`,
    602: `327`,
    603: `328`,
    604: `329`,
    605: `329`,
    606: `329`,
    607: `330`,
    608: `330`,
    609: `331`,
    61: `5`,
    610: `332`,
    611: `332`,
    612: `333`,
    613: `333`,
    614: `333`,
    615: `334`,
    616: `335`,
    617: `335`,
    618: `336`,
    619: `337`,
    62: `5`,
    620: `338`,
    621: `338`,
    622: `339`,
    623: `340`,
    624: `341`,
    625: `341`,
    626: `342`,
    627: `342`,
    628: `342`,
    629: `343`,
    63: `6`,
    630: `344`,
    631: `344`,
    632: `345`,
    633: `345`,
    634: `345`,
    635: `346`,
    636: `347`,
    637: `347`,
    638: `348`,
    639: `349`,
    64: `7`,
    640: `350`,
    641: `350`,
    642: `351`,
    643: `352`,
    644: `353`,
    645: `353`,
    646: `354`,
    647: `354`,
    648: `355`,
    649: `355`,
    65: `8`,
    650: `356`,
    651: `356`,
    652: `356`,
    653: `359`,
    654: `359`,
    655: `360`,
    656: `360`,
    657: `360`,
    658: `361`,
    659: `361`,
    66: `9`,
    660: `362`,
    661: `362`,
    662: `363`,
    663: `363`,
    664: `364`,
    665: `365`,
    666: `366`,
    667: `366`,
    668: `367`,
    669: `368`,
    67: `10`,
    670: `369`,
    671: `375`,
    672: `376`,
    673: `376`,
    674: `377`,
    675: `378`,
    676: `379`,
    677: `379`,
    678: `380`,
    679: `381`,
    68: `11`,
    680: `381`,
    681: `381`,
    682: `382`,
    683: `383`,
    684: `383`,
    685: `384`,
    686: `385`,
    687: `386`,
    688: `387`,
    689: `388`,
    69: `11`,
    690: `393`,
    691: `393`,
    692: `394`,
    693: `395`,
    694: `396`,
    695: `396`,
    696: `396`,
    697: `396`,
    698: `396`,
    699: `396`,
    7: `2`,
    70: `12`,
    700: `397`,
    701: `397`,
    702: `397`,
    703: `400`,
    704: `400`,
    705: `401`,
    706: `401`,
    707: `401`,
    708: `402`,
    709: `402`,
    71: `13`,
    710: `404`,
    711: `405`,
    712: `405`,
    713: `406`,
    714: `407`,
    715: `408`,
    716: `408`,
    717: `409`,
    718: `410`,
    719: `410`,
    72: `14`,
    720: `410`,
    721: `411`,
    722: `412`,
    723: `412`,
    724: `413`,
    725: `414`,
    726: `415`,
    727: `416`,
    728: `417`,
    729: `422`,
    73: `15`,
    730: `422`,
    731: `423`,
    732: `423`,
    733: `424`,
    734: `424`,
    735: `424`,
    736: `425`,
    737: `426`,
    738: `426`,
    739: `428`,
    74: `15`,
    740: `429`,
    741: `429`,
    742: `430`,
    743: `431`,
    744: `431`,
    745: `432`,
    746: `432`,
    747: `433`,
    748: `434`,
    749: `435`,
    75: `16`,
    750: `435`,
    751: `435`,
    752: `436`,
    753: `437`,
    754: `437`,
    755: `438`,
    756: `439`,
    757: `440`,
    758: `441`,
    759: `442`,
    76: `16`,
    760: `447`,
    761: `447`,
    762: `448`,
    763: `449`,
    764: `449`,
    765: `450`,
    766: `450`,
    767: `450`,
    768: `451`,
    769: `451`,
    77: `17`,
    770: `451`,
    771: `452`,
    772: `452`,
    773: `453`,
    774: `454`,
    775: `459`,
    776: `459`,
    777: `460`,
    778: `461`,
    779: `462`,
    78: `18`,
    780: `462`,
    781: `462`,
    782: `462`,
    783: `462`,
    784: `462`,
    785: `463`,
    786: `463`,
    787: `463`,
    788: `466`,
    789: `466`,
    79: `18`,
    790: `467`,
    791: `467`,
    792: `467`,
    793: `468`,
    794: `468`,
    795: `469`,
    796: `469`,
    797: `470`,
    798: `470`,
    799: `471`,
    8: `2`,
    80: `19`,
    800: `471`,
    801: `471`,
    802: `472`,
    803: `473`,
    804: `478`,
    805: `479`,
    806: `479`,
    807: `480`,
    808: `480`,
    809: `480`,
    81: `20`,
    810: `480`,
    811: `480`,
    812: `480`,
    813: `480`,
    814: `480`,
    815: `480`,
    816: `480`,
    817: `481`,
    818: `481`,
    819: `482`,
    82: `21`,
    820: `483`,
    821: `483`,
    822: `483`,
    823: `484`,
    824: `485`,
    825: `486`,
    826: `486`,
    827: `487`,
    828: `488`,
    829: `488`,
    83: `22`,
    830: `488`,
    831: `489`,
    832: `489`,
    833: `490`,
    834: `490`,
    835: `491`,
    836: `491`,
    837: `492`,
    838: `493`,
    839: `493`,
    84: `23`,
    840: `494`,
    841: `495`,
    842: `496`,
    843: `496`,
    844: `497`,
    845: `498`,
    846: `498`,
    847: `499`,
    848: `500`,
    849: `502`,
    85: `25`,
    850: `502`,
    851: `503`,
    852: `503`,
    853: `503`,
    854: `504`,
    855: `504`,
    856: `505`,
    857: `506`,
    858: `506`,
    859: `507`,
    86: `25`,
    860: `507`,
    861: `507`,
    862: `508`,
    863: `509`,
    864: `509`,
    865: `510`,
    866: `510`,
    867: `510`,
    868: `511`,
    869: `512`,
    87: `25`,
    870: `512`,
    871: `513`,
    872: `513`,
    873: `513`,
    874: `514`,
    875: `515`,
    876: `515`,
    877: `516`,
    878: `516`,
    879: `516`,
    88: `25`,
    880: `517`,
    881: `518`,
    882: `518`,
    883: `519`,
    884: `519`,
    885: `519`,
    886: `520`,
    887: `521`,
    888: `521`,
    889: `522`,
    89: `25`,
    890: `522`,
    891: `522`,
    892: `523`,
    893: `524`,
    894: `524`,
    895: `525`,
    896: `525`,
    897: `526`,
    898: `526`,
    899: `527`,
    9: `2`,
    90: `25`,
    900: `527`,
    901: `527`,
    902: `530`,
    903: `530`,
    904: `531`,
    905: `531`,
    906: `531`,
    907: `532`,
    908: `533`,
    909: `533`,
    91: `25`,
    910: `534`,
    911: `534`,
    912: `535`,
    913: `536`,
    914: `536`,
    915: `538`,
    916: `539`,
    917: `539`,
    918: `540`,
    919: `541`,
    92: `25`,
    920: `541`,
    921: `542`,
    922: `542`,
    923: `543`,
    924: `544`,
    925: `545`,
    926: `545`,
    927: `545`,
    928: `546`,
    929: `547`,
    93: `25`,
    930: `548`,
    931: `549`,
    932: `550`,
    933: `556`,
    934: `557`,
    935: `557`,
    936: `558`,
    937: `559`,
    938: `560`,
    939: `560`,
    94: `25`,
    940: `561`,
    941: `562`,
    942: `562`,
    943: `562`,
    944: `563`,
    945: `564`,
    946: `564`,
    947: `565`,
    948: `566`,
    949: `567`,
    95: `25`,
    950: `568`,
    951: `569`,
    952: `574`,
    953: `574`,
    954: `575`,
    955: `576`,
    956: `577`,
    957: `577`,
    958: `577`,
    959: `577`,
    96: `25`,
    960: `577`,
    961: `577`,
    962: `578`,
    963: `578`,
    964: `578`,
    965: `581`,
    966: `582`,
    967: `583`,
    968: `584`,
    969: `584`,
    97: `25`,
    970: `585`,
    971: `586`,
    972: `586`,
    973: `587`,
    974: `588`,
    975: `589`,
    976: `589`,
    977: `590`,
    978: `591`,
    979: `591`,
    98: `25`,
    980: `592`,
    981: `593`,
    982: `594`,
    983: `595`,
    984: `596`,
    985: `597`,
    986: `598`,
    987: `599`,
    988: `599`,
    989: `602`,
    99: `25`,
    990: `602`,
    991: `603`,
    992: `603`,
    993: `604`,
    994: `605`,
    995: `606`,
    996: `606`,
    997: `606`,
    998: `607`,
    999: `607`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_claim2: 1
    },
  extraPages: 1,
  stateKeys: 2,
  stateSize: 137,
  unsupported: [],
  version: 13,
  warnings: [`API claim may use up to 9 transaction references, but the limit is 8. API claim starts at /app/index.rsh:94:29:application.`, `Step 2 calls a remote object at /app/index.rsh:251:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 9 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:94:29:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:348:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:94:29:after expr stmt semicolon',
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
  "announce": announce,
  "claim": claim,
  "close": close,
  "deleteProvider": deleteProvider,
  "deleteSubscription": deleteSubscription,
  "grant": grant,
  "subscribe": subscribe
  };
export const _APIs = {
  announce: announce,
  claim: claim,
  close: close,
  deleteProvider: deleteProvider,
  deleteSubscription: deleteSubscription,
  grant: grant,
  subscribe: subscribe
  };
