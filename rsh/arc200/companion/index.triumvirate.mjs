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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc0]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc2,
    HarvestA: ctc3,
    HarvestB: ctc3,
    Kill: ctc4,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc4,
    Rewards: ctc0
    });
  const ctc10 = stdlib.T_Tuple([ctc0, ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Data({
    ProposeEvent: ctc10,
    RegisterEvent: ctc11
    });
  return {
    Event: [ctc12]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc1], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc2,
    HarvestA: ctc3,
    HarvestB: ctc3,
    Kill: ctc4,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc4,
    Rewards: ctc1
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc1,
    protoFee: ctc5,
    totFee: ctc5
    });
  const ctc12 = stdlib.T_Object({
    closed: ctc6,
    cmds: ctc10,
    info: ctc11,
    umvirs: ctc8
    });
  const ctc13 = stdlib.T_UInt;
  const ctc14 = stdlib.T_Struct([['umvirs', ctc8], ['cmds', ctc10], ['protoInfo', ctc7]]);
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v80950, v80967, v80971] = svs;
      return (await ((async () => {
        
        const v81018 = v80967.umvirs;
        const v81019 = v80967.cmds;
        const v81020 = v80967.info;
        const v81021 = v81020.protoFee;
        const v81022 = v81020.lpFee;
        const v81023 = v81020.totFee;
        const v81024 = v81020.protoAddr;
        const v81025 = v81020.locked;
        const v81026 = {
          locked: v81025,
          lpFee: v81022,
          protoAddr: v81024,
          protoFee: v81021,
          totFee: v81023
          };
        const v81027 = {
          cmds: v81019,
          protoInfo: v81026,
          umvirs: v81018
          };
        
        return v81027;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc14
        }
      },
    views: {
      3: [ctc9, ctc12, ctc13]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt256;
  const ctc1 = stdlib.T_Object({
    lpFee: ctc0,
    protoFee: ctc0,
    totFee: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc4 = stdlib.T_Object({
    info: ctc1,
    umvirs: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc6, ctc2, ctc6, ctc6, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc6, ctc2, ctc6, ctc2]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc2], ['locked', ctc9]]);
  const ctc11 = stdlib.T_Data({
    Harvest: ctc7,
    HarvestA: ctc8,
    HarvestB: ctc8,
    Kill: ctc5,
    NewInfo: ctc10,
    NewUmvirs: ctc3,
    NoOp: ctc5,
    Rewards: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_UInt;
  const ctc14 = stdlib.T_Tuple([ctc13, ctc11]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc6, ctc6]);
  const ctc16 = stdlib.T_Data({
    Umvir_propose0_79211: ctc12,
    Umvir_support0_79211: ctc14,
    register0_79211: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc13]);
  const ctc19 = stdlib.T_Tuple([ctc13, ctc18]);
  
  
  const v80901 = stdlib.protect(ctc4, interact.params, 'for Deployer\'s interact field params');
  const v80902 = v80901.info;
  const v80903 = v80901.umvirs;
  const v80904 = v80902.lpFee;
  const v80905 = v80902.protoFee;
  const v80906 = v80902.totFee;
  
  const v80917 = stdlib.lt256(v80905, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v80918 = stdlib.lt256(v80904, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v80919 = v80917 ? v80918 : false;
  let v80920;
  if (v80919) {
    const v80921 = stdlib.safeAdd256(v80904, v80905);
    const v80922 = stdlib.eq256(v80906, v80921);
    v80920 = v80922;
    }
  else {
    v80920 = false;
    }
  const v80923 = stdlib.lt256(v80906, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v80924 = v80920 ? v80923 : false;
  const v80925 = stdlib.gt256(v80906, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v80926 = v80924 ? v80925 : false;
  stdlib.assert(v80926, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid protocol info',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v80903, v80902],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:409:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:409:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80929, v80930], secs: v80932, time: v80931, didSend: v79042, from: v80928 } = txn1;
      
      const v80933 = v80930.protoFee;
      const v80934 = v80930.lpFee;
      const v80935 = v80930.totFee;
      ;
      const v80947 = await ctc.getContractInfo();
      
      const v80950 = ['NoOp', null];
      const v80956 = [v80950, v80950, v80950];
      const v80960 = await ctc.getContractAddress();
      const v80965 = {
        locked: false,
        lpFee: v80934,
        protoAddr: v80960,
        protoFee: v80933,
        totFee: v80935
        };
      const v80966 = {
        closed: false,
        cmds: v80956,
        info: v80965,
        umvirs: v80929
        };
      const v80967 = v80966;
      const v80968 = v80931;
      const v80971 = stdlib.checkedBigNumberify('./index.rsh:405:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v81016 = v80967.closed;
        const v81017 = v81016 ? false : true;
        
        return v81017;})()) {
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
    tys: [ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v80929, v80930], secs: v80932, time: v80931, didSend: v79042, from: v80928 } = txn1;
  const v80933 = v80930.protoFee;
  const v80934 = v80930.lpFee;
  const v80935 = v80930.totFee;
  const v80936 = stdlib.lt256(v80933, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v80937 = stdlib.lt256(v80934, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v80938 = v80936 ? v80937 : false;
  let v80939;
  if (v80938) {
    const v80940 = stdlib.safeAdd256(v80934, v80933);
    const v80941 = stdlib.eq256(v80935, v80940);
    v80939 = v80941;
    }
  else {
    v80939 = false;
    }
  const v80942 = stdlib.lt256(v80935, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v80943 = v80939 ? v80942 : false;
  const v80944 = stdlib.gt256(v80935, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v80945 = v80943 ? v80944 : false;
  stdlib.assert(v80945, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:410:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid protocol info',
    who: 'Deployer'
    });
  ;
  const v80947 = await ctc.getContractInfo();
  stdlib.protect(ctc5, await interact.ready(v80947), {
    at: './index.rsh:412:21:application',
    fs: ['at ./index.rsh:412:21:application call to [unknown function] (defined at: ./index.rsh:412:21:function exp)', 'at ./index.rsh:412:21:application call to "liftedInteract" (defined at: ./index.rsh:412:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v80950 = ['NoOp', null];
  const v80956 = [v80950, v80950, v80950];
  const v80960 = await ctc.getContractAddress();
  const v80965 = {
    locked: false,
    lpFee: v80934,
    protoAddr: v80960,
    protoFee: v80933,
    totFee: v80935
    };
  const v80966 = {
    closed: false,
    cmds: v80956,
    info: v80965,
    umvirs: v80929
    };
  let v80967 = v80966;
  let v80968 = v80931;
  let v80971 = stdlib.checkedBigNumberify('./index.rsh:405:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v81016 = v80967.closed;
    const v81017 = v81016 ? false : true;
    
    return v81017;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn3;
    switch (v81348[0]) {
      case 'Umvir_propose0_79211': {
        const v81351 = v81348[1];
        undefined /* setApiDetails */;
        const v81356 = v81351[stdlib.checkedBigNumberify('./index.rsh:485:12:spread', stdlib.UInt_max, '0')];
        let v81357;
        switch (v81356[0]) {
          case 'Harvest': {
            const v81358 = v81356[1];
            v81357 = true;
            
            break;
            }
          case 'HarvestA': {
            const v81359 = v81356[1];
            v81357 = true;
            
            break;
            }
          case 'HarvestB': {
            const v81360 = v81356[1];
            v81357 = true;
            
            break;
            }
          case 'Kill': {
            const v81361 = v81356[1];
            v81357 = true;
            
            break;
            }
          case 'NewInfo': {
            const v81362 = v81356[1];
            const v81363 = v81362.protoFee;
            const v81364 = v81362.lpFee;
            const v81365 = v81362.totFee;
            const v81366 = stdlib.lt256(v81363, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v81367 = stdlib.lt256(v81364, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v81368 = v81366 ? v81367 : false;
            let v81369;
            if (v81368) {
              const v81370 = stdlib.safeAdd256(v81364, v81363);
              const v81371 = stdlib.eq256(v81365, v81370);
              v81369 = v81371;
              }
            else {
              v81369 = false;
              }
            const v81372 = stdlib.lt256(v81365, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v81373 = v81369 ? v81372 : false;
            const v81374 = stdlib.gt256(v81365, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v81375 = v81373 ? v81374 : false;
            v81357 = v81375;
            
            break;
            }
          case 'NewUmvirs': {
            const v81376 = v81356[1];
            v81357 = true;
            
            break;
            }
          case 'NoOp': {
            const v81377 = v81356[1];
            v81357 = true;
            
            break;
            }
          case 'Rewards': {
            const v81378 = v81356[1];
            v81357 = true;
            
            break;
            }
          }
        stdlib.assert(v81357, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:486:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v81380 = v80967.umvirs;
        const v81381 = ['None', null];
        const v81382 = await stdlib.Array_asyncReduce([v81380], v81381, async([v81384], v81383, v81385) => {
          const v81386 = {
            None: 0,
            Some: 1
            }[v81383[0]];
          const v81387 = stdlib.eq(v81386, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v81388 = stdlib.addressEq(v81347, v81384);
          const v81389 = v81387 ? v81388 : false;
          const v81390 = ['Some', v81385];
          const v81391 = v81389 ? v81390 : v81383;
          
          return v81391;})
        const v81392 = {
          None: 0,
          Some: 1
          }[v81382[0]];
        const v81393 = stdlib.eq(v81392, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v81393, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        ;
        let v81409;
        switch (v81356[0]) {
          case 'Harvest': {
            const v81410 = v81356[1];
            v81409 = true;
            
            break;
            }
          case 'HarvestA': {
            const v81411 = v81356[1];
            v81409 = true;
            
            break;
            }
          case 'HarvestB': {
            const v81412 = v81356[1];
            v81409 = true;
            
            break;
            }
          case 'Kill': {
            const v81413 = v81356[1];
            v81409 = true;
            
            break;
            }
          case 'NewInfo': {
            const v81414 = v81356[1];
            const v81415 = v81414.protoFee;
            const v81416 = v81414.lpFee;
            const v81417 = v81414.totFee;
            const v81418 = stdlib.lt256(v81415, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v81419 = stdlib.lt256(v81416, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v81420 = v81418 ? v81419 : false;
            let v81421;
            if (v81420) {
              const v81422 = stdlib.safeAdd256(v81416, v81415);
              const v81423 = stdlib.eq256(v81417, v81422);
              v81421 = v81423;
              }
            else {
              v81421 = false;
              }
            const v81424 = stdlib.lt256(v81417, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v81425 = v81421 ? v81424 : false;
            const v81426 = stdlib.gt256(v81417, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v81427 = v81425 ? v81426 : false;
            v81409 = v81427;
            
            break;
            }
          case 'NewUmvirs': {
            const v81428 = v81356[1];
            v81409 = true;
            
            break;
            }
          case 'NoOp': {
            const v81429 = v81356[1];
            v81409 = true;
            
            break;
            }
          case 'Rewards': {
            const v81430 = v81356[1];
            v81409 = true;
            
            break;
            }
          }
        stdlib.assert(v81409, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:486:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:491:15:application call to [unknown function] (defined at: ./index.rsh:491:15:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v81434 = await stdlib.Array_asyncReduce([v81380], v81381, async([v81436], v81435, v81437) => {
          const v81438 = {
            None: 0,
            Some: 1
            }[v81435[0]];
          const v81439 = stdlib.eq(v81438, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v81440 = stdlib.addressEq(v81347, v81436);
          const v81441 = v81439 ? v81440 : false;
          const v81442 = ['Some', v81437];
          const v81443 = v81441 ? v81442 : v81435;
          
          return v81443;})
        const v81444 = {
          None: 0,
          Some: 1
          }[v81434[0]];
        const v81445 = stdlib.eq(v81444, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v81445, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:491:15:application call to [unknown function] (defined at: ./index.rsh:491:15:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v81447 = stdlib.fromSome(v81434, stdlib.checkedBigNumberify('./index.rsh:478:33:decimal', stdlib.UInt_max, '0'));
        const v81448 = v80967.cmds;
        const v81450 = stdlib.Array_set(v81448, v81447, v81356);
        const v81452 = true;
        await txn3.getOutput('Umvir_propose', 'v81452', ctc9, v81452);
        const v81546 = [v81347, v81356];
        const v81547 = ['ProposeEvent', v81546];
        null;
        const v81548 = v80967.closed;
        const v81550 = v80967.info;
        const v81552 = {
          closed: v81548,
          cmds: v81450,
          info: v81550,
          umvirs: v81380
          };
        const cv80967 = v81552;
        const cv80968 = v81349;
        const cv80971 = v80971;
        
        v80967 = cv80967;
        v80968 = cv80968;
        v80971 = cv80971;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Umvir_support0_79211': {
        const v81911 = v81348[1];
        undefined /* setApiDetails */;
        ;
        const v82116 = v81911[stdlib.checkedBigNumberify('./index.rsh:574:12:spread', stdlib.UInt_max, '0')];
        const v82117 = v81911[stdlib.checkedBigNumberify('./index.rsh:574:12:spread', stdlib.UInt_max, '1')];
        let v82118;
        switch (v82117[0]) {
          case 'Harvest': {
            const v82119 = v82117[1];
            v82118 = true;
            
            break;
            }
          case 'HarvestA': {
            const v82120 = v82117[1];
            v82118 = true;
            
            break;
            }
          case 'HarvestB': {
            const v82121 = v82117[1];
            v82118 = true;
            
            break;
            }
          case 'Kill': {
            const v82122 = v82117[1];
            v82118 = true;
            
            break;
            }
          case 'NewInfo': {
            const v82123 = v82117[1];
            const v82124 = v82123.protoFee;
            const v82125 = v82123.lpFee;
            const v82126 = v82123.totFee;
            const v82127 = stdlib.lt256(v82124, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v82128 = stdlib.lt256(v82125, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v82129 = v82127 ? v82128 : false;
            let v82130;
            if (v82129) {
              const v82131 = stdlib.safeAdd256(v82125, v82124);
              const v82132 = stdlib.eq256(v82126, v82131);
              v82130 = v82132;
              }
            else {
              v82130 = false;
              }
            const v82133 = stdlib.lt256(v82126, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v82134 = v82130 ? v82133 : false;
            const v82135 = stdlib.gt256(v82126, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v82136 = v82134 ? v82135 : false;
            v82118 = v82136;
            
            break;
            }
          case 'NewUmvirs': {
            const v82137 = v82117[1];
            v82118 = true;
            
            break;
            }
          case 'NoOp': {
            const v82138 = v82117[1];
            v82118 = true;
            
            break;
            }
          case 'Rewards': {
            const v82139 = v82117[1];
            v82118 = true;
            
            break;
            }
          }
        stdlib.assert(v82118, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:575:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v82141 = v80967.umvirs;
        const v82142 = stdlib.lt(v82116, stdlib.checkedBigNumberify('./index.rsh:576:30:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v82142, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:576:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
          msg: 'illegal idx',
          who: 'Deployer'
          });
        const v82145 = ['None', null];
        const v82146 = await stdlib.Array_asyncReduce([v82141], v82145, async([v82148], v82147, v82149) => {
          const v82150 = {
            None: 0,
            Some: 1
            }[v82147[0]];
          const v82151 = stdlib.eq(v82150, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v82152 = stdlib.addressEq(v81347, v82148);
          const v82153 = v82151 ? v82152 : false;
          const v82154 = ['Some', v82149];
          const v82155 = v82153 ? v82154 : v82147;
          
          return v82155;})
        const v82156 = {
          None: 0,
          Some: 1
          }[v82146[0]];
        const v82157 = stdlib.eq(v82156, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v82157, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:577:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v82159 = stdlib.fromSome(v82146, stdlib.checkedBigNumberify('./index.rsh:478:33:decimal', stdlib.UInt_max, '0'));
        const v82160 = stdlib.eq(v82116, v82159);
        const v82161 = v82160 ? false : true;
        stdlib.assert(v82161, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:578:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
          msg: 'cannot support self',
          who: 'Deployer'
          });
        const v82163 = v80967.cmds;
        const v82165 = v82163[v82116];
        const v82166 = stdlib.digest([ctc11], [v82117]);
        const v82167 = stdlib.digest([ctc11], [v82165]);
        const v82168 = stdlib.digestEq(v82166, v82167);
        stdlib.assert(v82168, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:580:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
          msg: 'command switched',
          who: 'Deployer'
          });
        const v82173 = stdlib.Array_set(v82163, v82116, v80950);
        const v82176 = true;
        await txn3.getOutput('Umvir_support', 'v82176', ctc9, v82176);
        switch (v82117[0]) {
          case 'Harvest': {
            const v82213 = v82117[1];
            const v82214 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '0')];
            const v82215 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '1')];
            const v82216 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '2')];
            const v82217 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '3')];
            const v82218 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '4')];
            const v82219 = [v82216, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82215];
            const v82220 = [v82216, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82218];
            const v82221 = [v82217, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82215];
            const v82222 = [v82217, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82218];
            const v82223 = v80967.info;
            const v82224 = v82223.protoFee;
            const v82225 = v82223.lpFee;
            const v82226 = v82223.totFee;
            const v82227 = v82223.protoAddr;
            const v82228 = v82223.locked;
            const v82231 = [];
            const v82242 = {
              locked: v82228,
              lpFee: v82225,
              protoAddr: v82227,
              protoFee: v82224,
              totFee: v82226
              };
            const v82243 = undefined /* Remote */;
            const v82244 = await txn3.getOutput('internal', 'v82243', ctc19, v82243);
            const v82246 = v82244[stdlib.checkedBigNumberify('./index.rsh:534:17:application', stdlib.UInt_max, '0')];
            const v82255 = stdlib.add(v80971, v82246);
            const v82256 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82246);
            stdlib.assert(v82256, {
              at: './index.rsh:534:17:application',
              fs: ['at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:523:58:function exp)', 'at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:519:20:function exp)', 'at ./index.rsh:586:57:application call to "evalCommand" (defined at: ./index.rsh:518:35:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v82260 = v80967.closed;
            const v82261 = {
              closed: v82260,
              cmds: v82173,
              info: v82223,
              umvirs: v82141
              };
            const cv80967 = v82261;
            const cv80968 = v81349;
            const cv80971 = v82255;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'HarvestA': {
            const v82264 = v82117[1];
            const v82265 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '0')];
            const v82266 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '1')];
            const v82267 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '2')];
            const v82268 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '3')];
            const v82269 = [v82267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82266];
            const v82270 = [v82267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82268];
            const v82271 = v80967.info;
            const v82272 = v82271.protoFee;
            const v82273 = v82271.lpFee;
            const v82274 = v82271.totFee;
            const v82275 = v82271.protoAddr;
            const v82276 = v82271.locked;
            const v82279 = [];
            const v82290 = {
              locked: v82276,
              lpFee: v82273,
              protoAddr: v82275,
              protoFee: v82272,
              totFee: v82274
              };
            const v82291 = undefined /* Remote */;
            const v82292 = await txn3.getOutput('internal', 'v82291', ctc19, v82291);
            const v82294 = v82292[stdlib.checkedBigNumberify('./index.rsh:546:17:application', stdlib.UInt_max, '0')];
            const v82303 = stdlib.add(v80971, v82294);
            const v82304 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82294);
            stdlib.assert(v82304, {
              at: './index.rsh:546:17:application',
              fs: ['at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:537:53:function exp)', 'at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:519:20:function exp)', 'at ./index.rsh:586:57:application call to "evalCommand" (defined at: ./index.rsh:518:35:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v82308 = v80967.closed;
            const v82309 = {
              closed: v82308,
              cmds: v82173,
              info: v82271,
              umvirs: v82141
              };
            const cv80967 = v82309;
            const cv80968 = v81349;
            const cv80971 = v82303;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'HarvestB': {
            const v82312 = v82117[1];
            const v82313 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '0')];
            const v82314 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '1')];
            const v82315 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '2')];
            const v82316 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '3')];
            const v82317 = [v82315, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82314];
            const v82318 = [v82315, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82316];
            const v82319 = v80967.info;
            const v82320 = v82319.protoFee;
            const v82321 = v82319.lpFee;
            const v82322 = v82319.totFee;
            const v82323 = v82319.protoAddr;
            const v82324 = v82319.locked;
            const v82327 = [];
            const v82338 = {
              locked: v82324,
              lpFee: v82321,
              protoAddr: v82323,
              protoFee: v82320,
              totFee: v82322
              };
            const v82339 = undefined /* Remote */;
            const v82340 = await txn3.getOutput('internal', 'v82339', ctc19, v82339);
            const v82342 = v82340[stdlib.checkedBigNumberify('./index.rsh:558:17:application', stdlib.UInt_max, '0')];
            const v82351 = stdlib.add(v80971, v82342);
            const v82352 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82342);
            stdlib.assert(v82352, {
              at: './index.rsh:558:17:application',
              fs: ['at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:549:53:function exp)', 'at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:519:20:function exp)', 'at ./index.rsh:586:57:application call to "evalCommand" (defined at: ./index.rsh:518:35:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v82356 = v80967.closed;
            const v82357 = {
              closed: v82356,
              cmds: v82173,
              info: v82319,
              umvirs: v82141
              };
            const cv80967 = v82357;
            const cv80968 = v81349;
            const cv80971 = v82351;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Kill': {
            const v82360 = v82117[1];
            const v82363 = v80967.info;
            const v82365 = {
              closed: true,
              cmds: v82163,
              info: v82363,
              umvirs: v82141
              };
            const v82368 = v82365.info;
            const v82369 = v82365.umvirs;
            const v82370 = v82365.closed;
            const v82371 = {
              closed: v82370,
              cmds: v82173,
              info: v82368,
              umvirs: v82369
              };
            const cv80967 = v82371;
            const cv80968 = v81349;
            const cv80971 = v80971;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewInfo': {
            const v82374 = v82117[1];
            const v82375 = v80967.closed;
            const v82379 = v82374.locked;
            const v82380 = v82374.lpFee;
            const v82381 = v82374.protoAddr;
            const v82382 = v82374.protoFee;
            const v82383 = v82374.totFee;
            const v82384 = {
              locked: v82379,
              lpFee: v82380,
              protoAddr: v82381,
              protoFee: v82382,
              totFee: v82383
              };
            const v82385 = {
              closed: v82375,
              cmds: v82163,
              info: v82384,
              umvirs: v82141
              };
            const v82389 = v82385.info;
            const v82390 = v82385.umvirs;
            const v82391 = v82385.closed;
            const v82392 = {
              closed: v82391,
              cmds: v82173,
              info: v82389,
              umvirs: v82390
              };
            const cv80967 = v82392;
            const cv80968 = v81349;
            const cv80971 = v80971;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewUmvirs': {
            const v82395 = v82117[1];
            const v82396 = v80967.closed;
            const v82398 = v80967.info;
            const v82400 = {
              closed: v82396,
              cmds: v82163,
              info: v82398,
              umvirs: v82395
              };
            const v82403 = v82400.info;
            const v82404 = v82400.umvirs;
            const v82405 = v82400.closed;
            const v82406 = {
              closed: v82405,
              cmds: v82173,
              info: v82403,
              umvirs: v82404
              };
            const cv80967 = v82406;
            const cv80968 = v81349;
            const cv80971 = v80971;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NoOp': {
            const v82409 = v82117[1];
            const v82411 = v80967.info;
            const v82413 = v80967.closed;
            const v82414 = {
              closed: v82413,
              cmds: v82173,
              info: v82411,
              umvirs: v82141
              };
            const cv80967 = v82414;
            const cv80968 = v81349;
            const cv80971 = v80971;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Rewards': {
            const v82417 = v82117[1];
            const v82419 = (stdlib.le(await ctc.getBalance(), v80971) ? stdlib.checkedBigNumberify('./index.rsh:562:43:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v80971));
            const v82420 = stdlib.safeAdd(v82419, v80971);
            const v82424 = stdlib.sub(v82420, v82419);
            ;
            const v82426 = v80967.info;
            const v82428 = v80967.closed;
            const v82429 = {
              closed: v82428,
              cmds: v82173,
              info: v82426,
              umvirs: v82141
              };
            const cv80967 = v82429;
            const cv80968 = v81349;
            const cv80971 = v82424;
            
            v80967 = cv80967;
            v80968 = cv80968;
            v80971 = cv80971;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_79211': {
        const v82471 = v81348[1];
        undefined /* setApiDetails */;
        const v82521 = v82471[stdlib.checkedBigNumberify('./index.rsh:460:12:spread', stdlib.UInt_max, '0')];
        const v82525 = stdlib.ctcAddrEq(v82521, v81347);
        stdlib.assert(v82525, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:447:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:461:15:application call to "chkCtc" (defined at: ./index.rsh:446:39:function exp)', 'at ./index.rsh:460:50:application call to [unknown function] (defined at: ./index.rsh:460:50:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:460:50:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
          msg: 'not contract',
          who: 'Deployer'
          });
        ;
        const v83002 = v80967.info;
        const v83003 = v83002.protoFee;
        const v83004 = v83002.lpFee;
        const v83005 = v83002.totFee;
        const v83006 = v83002.protoAddr;
        const v83007 = v83002.locked;
        const v83008 = {
          locked: v83007,
          lpFee: v83004,
          protoAddr: v83006,
          protoFee: v83003,
          totFee: v83005
          };
        await txn3.getOutput('register', 'v83008', ctc10, v83008);
        const cv80967 = v80967;
        const cv80968 = v81349;
        const cv80971 = v80971;
        
        v80967 = cv80967;
        v80968 = cv80968;
        v80971 = cv80971;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Umvir_propose3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Umvir_propose3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Umvir_propose3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc1], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc2,
    HarvestA: ctc3,
    HarvestB: ctc3,
    Kill: ctc4,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc4,
    Rewards: ctc1
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc1,
    protoFee: ctc5,
    totFee: ctc5
    });
  const ctc12 = stdlib.T_Object({
    closed: ctc6,
    cmds: ctc10,
    info: ctc11,
    umvirs: ctc8
    });
  const ctc13 = stdlib.T_UInt;
  const ctc14 = stdlib.T_Tuple([ctc9]);
  const ctc15 = stdlib.T_Tuple([ctc13, ctc9]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc17 = stdlib.T_Data({
    Umvir_propose0_79211: ctc14,
    Umvir_support0_79211: ctc15,
    register0_79211: ctc16
    });
  
  
  const [v80950, v80967, v80971] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc12, ctc13]);
  const v81053 = ctc.selfAddress();
  const v81055 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_propose0_79211" (defined at: ./index.rsh:485:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'in',
    who: 'Umvir_propose'
    });
  const v81056 = v81055[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v81087;
  switch (v81056[0]) {
    case 'Harvest': {
      const v81088 = v81056[1];
      v81087 = true;
      
      break;
      }
    case 'HarvestA': {
      const v81089 = v81056[1];
      v81087 = true;
      
      break;
      }
    case 'HarvestB': {
      const v81090 = v81056[1];
      v81087 = true;
      
      break;
      }
    case 'Kill': {
      const v81091 = v81056[1];
      v81087 = true;
      
      break;
      }
    case 'NewInfo': {
      const v81092 = v81056[1];
      const v81093 = v81092.protoFee;
      const v81094 = v81092.lpFee;
      const v81095 = v81092.totFee;
      const v81096 = stdlib.lt256(v81093, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81097 = stdlib.lt256(v81094, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81098 = v81096 ? v81097 : false;
      let v81099;
      if (v81098) {
        const v81100 = stdlib.safeAdd256(v81094, v81093);
        const v81101 = stdlib.eq256(v81095, v81100);
        v81099 = v81101;
        }
      else {
        v81099 = false;
        }
      const v81102 = stdlib.lt256(v81095, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81103 = v81099 ? v81102 : false;
      const v81104 = stdlib.gt256(v81095, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v81105 = v81103 ? v81104 : false;
      v81087 = v81105;
      
      break;
      }
    case 'NewUmvirs': {
      const v81106 = v81056[1];
      v81087 = true;
      
      break;
      }
    case 'NoOp': {
      const v81107 = v81056[1];
      v81087 = true;
      
      break;
      }
    case 'Rewards': {
      const v81108 = v81056[1];
      v81087 = true;
      
      break;
      }
    }
  stdlib.assert(v81087, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:486:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_propose0_79211" (defined at: ./index.rsh:485:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_propose'
    });
  const v81110 = v80967.umvirs;
  const v81111 = ['None', null];
  const v81112 = await stdlib.Array_asyncReduce([v81110], v81111, async([v81114], v81113, v81115) => {
    const v81116 = {
      None: 0,
      Some: 1
      }[v81113[0]];
    const v81117 = stdlib.eq(v81116, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v81118 = stdlib.addressEq(v81053, v81114);
    const v81119 = v81117 ? v81118 : false;
    const v81120 = ['Some', v81115];
    const v81121 = v81119 ? v81120 : v81113;
    
    return v81121;})
  const v81122 = {
    None: 0,
    Some: 1
    }[v81112[0]];
  const v81123 = stdlib.eq(v81122, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v81123, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_propose0_79211" (defined at: ./index.rsh:485:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_propose'
    });
  const v81163 = ['Umvir_propose0_79211', v81055];
  
  let v81297;
  switch (v81056[0]) {
    case 'Harvest': {
      const v81298 = v81056[1];
      v81297 = true;
      
      break;
      }
    case 'HarvestA': {
      const v81299 = v81056[1];
      v81297 = true;
      
      break;
      }
    case 'HarvestB': {
      const v81300 = v81056[1];
      v81297 = true;
      
      break;
      }
    case 'Kill': {
      const v81301 = v81056[1];
      v81297 = true;
      
      break;
      }
    case 'NewInfo': {
      const v81302 = v81056[1];
      const v81303 = v81302.protoFee;
      const v81304 = v81302.lpFee;
      const v81305 = v81302.totFee;
      const v81306 = stdlib.lt256(v81303, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81307 = stdlib.lt256(v81304, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81308 = v81306 ? v81307 : false;
      let v81309;
      if (v81308) {
        const v81310 = stdlib.safeAdd256(v81304, v81303);
        const v81311 = stdlib.eq256(v81305, v81310);
        v81309 = v81311;
        }
      else {
        v81309 = false;
        }
      const v81312 = stdlib.lt256(v81305, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81313 = v81309 ? v81312 : false;
      const v81314 = stdlib.gt256(v81305, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v81315 = v81313 ? v81314 : false;
      v81297 = v81315;
      
      break;
      }
    case 'NewUmvirs': {
      const v81316 = v81056[1];
      v81297 = true;
      
      break;
      }
    case 'NoOp': {
      const v81317 = v81056[1];
      v81297 = true;
      
      break;
      }
    case 'Rewards': {
      const v81318 = v81056[1];
      v81297 = true;
      
      break;
      }
    }
  stdlib.assert(v81297, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:486:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_propose'
    });
  const v81322 = await stdlib.Array_asyncReduce([v81110], v81111, async([v81324], v81323, v81325) => {
    const v81326 = {
      None: 0,
      Some: 1
      }[v81323[0]];
    const v81327 = stdlib.eq(v81326, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v81328 = stdlib.addressEq(v81053, v81324);
    const v81329 = v81327 ? v81328 : false;
    const v81330 = ['Some', v81325];
    const v81331 = v81329 ? v81330 : v81323;
    
    return v81331;})
  const v81332 = {
    None: 0,
    Some: 1
    }[v81322[0]];
  const v81333 = stdlib.eq(v81332, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v81333, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v80950, v80967, v80971, v81163],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:490:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn1;
      
      switch (v81348[0]) {
        case 'Umvir_propose0_79211': {
          const v81351 = v81348[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Umvir_propose"
            });
          const v81356 = v81351[stdlib.checkedBigNumberify('./index.rsh:485:12:spread', stdlib.UInt_max, '0')];
          const v81380 = v80967.umvirs;
          const v81381 = ['None', null];
          ;
          const v81434 = await stdlib.Array_asyncReduce([v81380], v81381, async([v81436], v81435, v81437) => {
            const v81438 = {
              None: 0,
              Some: 1
              }[v81435[0]];
            const v81439 = stdlib.eq(v81438, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v81440 = stdlib.addressEq(v81347, v81436);
            const v81441 = v81439 ? v81440 : false;
            const v81442 = ['Some', v81437];
            const v81443 = v81441 ? v81442 : v81435;
            
            return v81443;})
          const v81447 = stdlib.fromSome(v81434, stdlib.checkedBigNumberify('./index.rsh:478:33:decimal', stdlib.UInt_max, '0'));
          const v81448 = v80967.cmds;
          const v81450 = stdlib.Array_set(v81448, v81447, v81356);
          const v81452 = true;
          const v81453 = await txn1.getOutput('Umvir_propose', 'v81452', ctc6, v81452);
          
          const v81546 = [v81347, v81356];
          const v81547 = ['ProposeEvent', v81546];
          null;
          const v81548 = v80967.closed;
          const v81550 = v80967.info;
          const v81552 = {
            closed: v81548,
            cmds: v81450,
            info: v81550,
            umvirs: v81380
            };
          const v90166 = v81552;
          const v90168 = v80971;
          const v90169 = v81552.closed;
          if (v90169) {
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
        case 'Umvir_support0_79211': {
          const v81911 = v81348[1];
          
          break;
          }
        case 'register0_79211': {
          const v82471 = v81348[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc12, ctc13, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn1;
  switch (v81348[0]) {
    case 'Umvir_propose0_79211': {
      const v81351 = v81348[1];
      undefined /* setApiDetails */;
      const v81356 = v81351[stdlib.checkedBigNumberify('./index.rsh:485:12:spread', stdlib.UInt_max, '0')];
      let v81357;
      switch (v81356[0]) {
        case 'Harvest': {
          const v81358 = v81356[1];
          v81357 = true;
          
          break;
          }
        case 'HarvestA': {
          const v81359 = v81356[1];
          v81357 = true;
          
          break;
          }
        case 'HarvestB': {
          const v81360 = v81356[1];
          v81357 = true;
          
          break;
          }
        case 'Kill': {
          const v81361 = v81356[1];
          v81357 = true;
          
          break;
          }
        case 'NewInfo': {
          const v81362 = v81356[1];
          const v81363 = v81362.protoFee;
          const v81364 = v81362.lpFee;
          const v81365 = v81362.totFee;
          const v81366 = stdlib.lt256(v81363, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v81367 = stdlib.lt256(v81364, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v81368 = v81366 ? v81367 : false;
          let v81369;
          if (v81368) {
            const v81370 = stdlib.safeAdd256(v81364, v81363);
            const v81371 = stdlib.eq256(v81365, v81370);
            v81369 = v81371;
            }
          else {
            v81369 = false;
            }
          const v81372 = stdlib.lt256(v81365, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v81373 = v81369 ? v81372 : false;
          const v81374 = stdlib.gt256(v81365, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v81375 = v81373 ? v81374 : false;
          v81357 = v81375;
          
          break;
          }
        case 'NewUmvirs': {
          const v81376 = v81356[1];
          v81357 = true;
          
          break;
          }
        case 'NoOp': {
          const v81377 = v81356[1];
          v81357 = true;
          
          break;
          }
        case 'Rewards': {
          const v81378 = v81356[1];
          v81357 = true;
          
          break;
          }
        }
      stdlib.assert(v81357, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:486:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_propose'
        });
      const v81380 = v80967.umvirs;
      const v81381 = ['None', null];
      const v81382 = await stdlib.Array_asyncReduce([v81380], v81381, async([v81384], v81383, v81385) => {
        const v81386 = {
          None: 0,
          Some: 1
          }[v81383[0]];
        const v81387 = stdlib.eq(v81386, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v81388 = stdlib.addressEq(v81347, v81384);
        const v81389 = v81387 ? v81388 : false;
        const v81390 = ['Some', v81385];
        const v81391 = v81389 ? v81390 : v81383;
        
        return v81391;})
      const v81392 = {
        None: 0,
        Some: 1
        }[v81382[0]];
      const v81393 = stdlib.eq(v81392, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v81393, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:485:34:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:485:34:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_propose'
        });
      ;
      let v81409;
      switch (v81356[0]) {
        case 'Harvest': {
          const v81410 = v81356[1];
          v81409 = true;
          
          break;
          }
        case 'HarvestA': {
          const v81411 = v81356[1];
          v81409 = true;
          
          break;
          }
        case 'HarvestB': {
          const v81412 = v81356[1];
          v81409 = true;
          
          break;
          }
        case 'Kill': {
          const v81413 = v81356[1];
          v81409 = true;
          
          break;
          }
        case 'NewInfo': {
          const v81414 = v81356[1];
          const v81415 = v81414.protoFee;
          const v81416 = v81414.lpFee;
          const v81417 = v81414.totFee;
          const v81418 = stdlib.lt256(v81415, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v81419 = stdlib.lt256(v81416, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v81420 = v81418 ? v81419 : false;
          let v81421;
          if (v81420) {
            const v81422 = stdlib.safeAdd256(v81416, v81415);
            const v81423 = stdlib.eq256(v81417, v81422);
            v81421 = v81423;
            }
          else {
            v81421 = false;
            }
          const v81424 = stdlib.lt256(v81417, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v81425 = v81421 ? v81424 : false;
          const v81426 = stdlib.gt256(v81417, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v81427 = v81425 ? v81426 : false;
          v81409 = v81427;
          
          break;
          }
        case 'NewUmvirs': {
          const v81428 = v81356[1];
          v81409 = true;
          
          break;
          }
        case 'NoOp': {
          const v81429 = v81356[1];
          v81409 = true;
          
          break;
          }
        case 'Rewards': {
          const v81430 = v81356[1];
          v81409 = true;
          
          break;
          }
        }
      stdlib.assert(v81409, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:486:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:491:15:application call to [unknown function] (defined at: ./index.rsh:491:15:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_propose'
        });
      const v81434 = await stdlib.Array_asyncReduce([v81380], v81381, async([v81436], v81435, v81437) => {
        const v81438 = {
          None: 0,
          Some: 1
          }[v81435[0]];
        const v81439 = stdlib.eq(v81438, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v81440 = stdlib.addressEq(v81347, v81436);
        const v81441 = v81439 ? v81440 : false;
        const v81442 = ['Some', v81437];
        const v81443 = v81441 ? v81442 : v81435;
        
        return v81443;})
      const v81444 = {
        None: 0,
        Some: 1
        }[v81434[0]];
      const v81445 = stdlib.eq(v81444, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v81445, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:487:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:491:15:application call to [unknown function] (defined at: ./index.rsh:491:15:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_propose'
        });
      const v81447 = stdlib.fromSome(v81434, stdlib.checkedBigNumberify('./index.rsh:478:33:decimal', stdlib.UInt_max, '0'));
      const v81448 = v80967.cmds;
      const v81450 = stdlib.Array_set(v81448, v81447, v81356);
      const v81452 = true;
      const v81453 = await txn1.getOutput('Umvir_propose', 'v81452', ctc6, v81452);
      if (v80242) {
        stdlib.protect(ctc4, await interact.out(v81351, v81453), {
          at: './index.rsh:485:13:application',
          fs: ['at ./index.rsh:485:13:application call to [unknown function] (defined at: ./index.rsh:485:13:function exp)', 'at ./index.rsh:492:14:application call to "k" (defined at: ./index.rsh:491:15:function exp)', 'at ./index.rsh:491:15:application call to [unknown function] (defined at: ./index.rsh:491:15:function exp)'],
          msg: 'out',
          who: 'Umvir_propose'
          });
        }
      else {
        }
      
      const v81546 = [v81347, v81356];
      const v81547 = ['ProposeEvent', v81546];
      null;
      const v81548 = v80967.closed;
      const v81550 = v80967.info;
      const v81552 = {
        closed: v81548,
        cmds: v81450,
        info: v81550,
        umvirs: v81380
        };
      const v90166 = v81552;
      const v90168 = v80971;
      const v90169 = v81552.closed;
      if (v90169) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Umvir_support0_79211': {
      const v81911 = v81348[1];
      return;
      break;
      }
    case 'register0_79211': {
      const v82471 = v81348[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Umvir_support3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Umvir_support3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Umvir_support3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc1], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc2,
    HarvestA: ctc3,
    HarvestB: ctc3,
    Kill: ctc4,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc4,
    Rewards: ctc1
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc1,
    protoFee: ctc5,
    totFee: ctc5
    });
  const ctc12 = stdlib.T_Object({
    closed: ctc6,
    cmds: ctc10,
    info: ctc11,
    umvirs: ctc8
    });
  const ctc13 = stdlib.T_UInt;
  const ctc14 = stdlib.T_Tuple([ctc13, ctc9]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc17 = stdlib.T_Data({
    Umvir_propose0_79211: ctc15,
    Umvir_support0_79211: ctc14,
    register0_79211: ctc16
    });
  const ctc18 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc19 = stdlib.T_Tuple([ctc18, ctc13]);
  const ctc20 = stdlib.T_Tuple([ctc13, ctc19]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc13, ctc1]);
  
  
  const [v80950, v80967, v80971] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc12, ctc13]);
  const v81165 = ctc.selfAddress();
  const v81167 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:574:40:application call to [unknown function] (defined at: ./index.rsh:574:40:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_support0_79211" (defined at: ./index.rsh:574:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'in',
    who: 'Umvir_support'
    });
  const v81168 = v81167[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v81169 = v81167[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  let v81201;
  switch (v81169[0]) {
    case 'Harvest': {
      const v81202 = v81169[1];
      v81201 = true;
      
      break;
      }
    case 'HarvestA': {
      const v81203 = v81169[1];
      v81201 = true;
      
      break;
      }
    case 'HarvestB': {
      const v81204 = v81169[1];
      v81201 = true;
      
      break;
      }
    case 'Kill': {
      const v81205 = v81169[1];
      v81201 = true;
      
      break;
      }
    case 'NewInfo': {
      const v81206 = v81169[1];
      const v81207 = v81206.protoFee;
      const v81208 = v81206.lpFee;
      const v81209 = v81206.totFee;
      const v81210 = stdlib.lt256(v81207, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81211 = stdlib.lt256(v81208, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81212 = v81210 ? v81211 : false;
      let v81213;
      if (v81212) {
        const v81214 = stdlib.safeAdd256(v81208, v81207);
        const v81215 = stdlib.eq256(v81209, v81214);
        v81213 = v81215;
        }
      else {
        v81213 = false;
        }
      const v81216 = stdlib.lt256(v81209, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v81217 = v81213 ? v81216 : false;
      const v81218 = stdlib.gt256(v81209, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v81219 = v81217 ? v81218 : false;
      v81201 = v81219;
      
      break;
      }
    case 'NewUmvirs': {
      const v81220 = v81169[1];
      v81201 = true;
      
      break;
      }
    case 'NoOp': {
      const v81221 = v81169[1];
      v81201 = true;
      
      break;
      }
    case 'Rewards': {
      const v81222 = v81169[1];
      v81201 = true;
      
      break;
      }
    }
  stdlib.assert(v81201, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:575:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:40:application call to [unknown function] (defined at: ./index.rsh:574:40:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_support0_79211" (defined at: ./index.rsh:574:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_support'
    });
  const v81224 = v80967.umvirs;
  const v81225 = stdlib.lt(v81168, stdlib.checkedBigNumberify('./index.rsh:576:30:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v81225, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:576:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:40:application call to [unknown function] (defined at: ./index.rsh:574:40:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_support0_79211" (defined at: ./index.rsh:574:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'illegal idx',
    who: 'Umvir_support'
    });
  const v81228 = ['None', null];
  const v81229 = await stdlib.Array_asyncReduce([v81224], v81228, async([v81231], v81230, v81232) => {
    const v81233 = {
      None: 0,
      Some: 1
      }[v81230[0]];
    const v81234 = stdlib.eq(v81233, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v81235 = stdlib.addressEq(v81165, v81231);
    const v81236 = v81234 ? v81235 : false;
    const v81237 = ['Some', v81232];
    const v81238 = v81236 ? v81237 : v81230;
    
    return v81238;})
  const v81239 = {
    None: 0,
    Some: 1
    }[v81229[0]];
  const v81240 = stdlib.eq(v81239, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v81240, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:577:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:574:40:application call to [unknown function] (defined at: ./index.rsh:574:40:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_support0_79211" (defined at: ./index.rsh:574:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_support'
    });
  const v81242 = stdlib.fromSome(v81229, stdlib.checkedBigNumberify('./index.rsh:478:33:decimal', stdlib.UInt_max, '0'));
  const v81243 = stdlib.eq(v81168, v81242);
  const v81244 = v81243 ? false : true;
  stdlib.assert(v81244, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:578:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:40:application call to [unknown function] (defined at: ./index.rsh:574:40:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_support0_79211" (defined at: ./index.rsh:574:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'cannot support self',
    who: 'Umvir_support'
    });
  const v81246 = v80967.cmds;
  const v81248 = v81246[v81168];
  const v81249 = stdlib.digest([ctc9], [v81169]);
  const v81250 = stdlib.digest([ctc9], [v81248]);
  const v81251 = stdlib.digestEq(v81249, v81250);
  stdlib.assert(v81251, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:580:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:574:40:application call to [unknown function] (defined at: ./index.rsh:574:40:function exp)', 'at ./index.rsh:424:31:application call to "runUmvir_support0_79211" (defined at: ./index.rsh:574:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'command switched',
    who: 'Umvir_support'
    });
  const v81293 = ['Umvir_support0_79211', v81167];
  
  const txn1 = await (ctc.sendrecv({
    args: [v80950, v80967, v80971, v81293],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:574:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn1;
      
      switch (v81348[0]) {
        case 'Umvir_propose0_79211': {
          const v81351 = v81348[1];
          
          break;
          }
        case 'Umvir_support0_79211': {
          const v81911 = v81348[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Umvir_support"
            });
          ;
          const v82116 = v81911[stdlib.checkedBigNumberify('./index.rsh:574:12:spread', stdlib.UInt_max, '0')];
          const v82117 = v81911[stdlib.checkedBigNumberify('./index.rsh:574:12:spread', stdlib.UInt_max, '1')];
          const v82141 = v80967.umvirs;
          const v82163 = v80967.cmds;
          const v82173 = stdlib.Array_set(v82163, v82116, v80950);
          const v82176 = true;
          const v82177 = await txn1.getOutput('Umvir_support', 'v82176', ctc6, v82176);
          
          switch (v82117[0]) {
            case 'Harvest': {
              const v82213 = v82117[1];
              const v82214 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '0')];
              const v82215 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '1')];
              const v82216 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '2')];
              const v82217 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '3')];
              const v82218 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '4')];
              const v82219 = [v82216, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82215];
              const v82220 = [v82216, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82218];
              const v82221 = [v82217, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82215];
              const v82222 = [v82217, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82218];
              const v82223 = v80967.info;
              const v82224 = v82223.protoFee;
              const v82225 = v82223.lpFee;
              const v82226 = v82223.totFee;
              const v82227 = v82223.protoAddr;
              const v82228 = v82223.locked;
              const v82231 = [];
              const v82242 = {
                locked: v82228,
                lpFee: v82225,
                protoAddr: v82227,
                protoFee: v82224,
                totFee: v82226
                };
              const v82243 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v82214,
                  remote: ({
                    accs: [v82218],
                    apps: [v82214, v82216, v82217],
                    bills: stdlib.checkedBigNumberify('./index.rsh:534:17:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc21, v82219], [ctc21, v82220], [ctc21, v82221], [ctc21, v82222]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:526:23:decimal', stdlib.UInt_max, '3'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:534:17:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc19.defaultValue /* simReturnVal */];})();
              const v82244 = await txn1.getOutput('internal', 'v82243', ctc20, v82243);
              const v82246 = v82244[stdlib.checkedBigNumberify('./index.rsh:534:17:application', stdlib.UInt_max, '0')];
              const v82255 = stdlib.add(v80971, v82246);
              const v82260 = v80967.closed;
              const v82261 = {
                closed: v82260,
                cmds: v82173,
                info: v82223,
                umvirs: v82141
                };
              const v90221 = v82261;
              const v90223 = v82255;
              const v90224 = v82261.closed;
              if (v90224) {
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
            case 'HarvestA': {
              const v82264 = v82117[1];
              const v82265 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '0')];
              const v82266 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '1')];
              const v82267 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '2')];
              const v82268 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '3')];
              const v82269 = [v82267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82266];
              const v82270 = [v82267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82268];
              const v82271 = v80967.info;
              const v82272 = v82271.protoFee;
              const v82273 = v82271.lpFee;
              const v82274 = v82271.totFee;
              const v82275 = v82271.protoAddr;
              const v82276 = v82271.locked;
              const v82279 = [];
              const v82290 = {
                locked: v82276,
                lpFee: v82273,
                protoAddr: v82275,
                protoFee: v82272,
                totFee: v82274
                };
              const v82291 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v82265,
                  remote: ({
                    accs: [v82268],
                    apps: [v82265, v82267],
                    bills: stdlib.checkedBigNumberify('./index.rsh:546:17:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc21, v82269], [ctc21, v82270]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:540:23:decimal', stdlib.UInt_max, '2'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:546:17:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc19.defaultValue /* simReturnVal */];})();
              const v82292 = await txn1.getOutput('internal', 'v82291', ctc20, v82291);
              const v82294 = v82292[stdlib.checkedBigNumberify('./index.rsh:546:17:application', stdlib.UInt_max, '0')];
              const v82303 = stdlib.add(v80971, v82294);
              const v82308 = v80967.closed;
              const v82309 = {
                closed: v82308,
                cmds: v82173,
                info: v82271,
                umvirs: v82141
                };
              const v90226 = v82309;
              const v90228 = v82303;
              const v90229 = v82309.closed;
              if (v90229) {
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
            case 'HarvestB': {
              const v82312 = v82117[1];
              const v82313 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '0')];
              const v82314 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '1')];
              const v82315 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '2')];
              const v82316 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '3')];
              const v82317 = [v82315, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82314];
              const v82318 = [v82315, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82316];
              const v82319 = v80967.info;
              const v82320 = v82319.protoFee;
              const v82321 = v82319.lpFee;
              const v82322 = v82319.totFee;
              const v82323 = v82319.protoAddr;
              const v82324 = v82319.locked;
              const v82327 = [];
              const v82338 = {
                locked: v82324,
                lpFee: v82321,
                protoAddr: v82323,
                protoFee: v82320,
                totFee: v82322
                };
              const v82339 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v82313,
                  remote: ({
                    accs: [v82316],
                    apps: [v82313, v82315],
                    bills: stdlib.checkedBigNumberify('./index.rsh:558:17:application', stdlib.UInt_max, '0'),
                    boxes: [[ctc21, v82317], [ctc21, v82318]],
                    fees: stdlib.checkedBigNumberify('./index.rsh:552:23:decimal', stdlib.UInt_max, '2'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:558:17:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc19.defaultValue /* simReturnVal */];})();
              const v82340 = await txn1.getOutput('internal', 'v82339', ctc20, v82339);
              const v82342 = v82340[stdlib.checkedBigNumberify('./index.rsh:558:17:application', stdlib.UInt_max, '0')];
              const v82351 = stdlib.add(v80971, v82342);
              const v82356 = v80967.closed;
              const v82357 = {
                closed: v82356,
                cmds: v82173,
                info: v82319,
                umvirs: v82141
                };
              const v90231 = v82357;
              const v90233 = v82351;
              const v90234 = v82357.closed;
              if (v90234) {
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
            case 'Kill': {
              const v82360 = v82117[1];
              const v82363 = v80967.info;
              const v82365 = {
                closed: true,
                cmds: v82163,
                info: v82363,
                umvirs: v82141
                };
              const v82368 = v82365.info;
              const v82369 = v82365.umvirs;
              const v82370 = v82365.closed;
              const v82371 = {
                closed: v82370,
                cmds: v82173,
                info: v82368,
                umvirs: v82369
                };
              const v90236 = v82371;
              const v90238 = v80971;
              const v90239 = v82371.closed;
              if (v90239) {
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
            case 'NewInfo': {
              const v82374 = v82117[1];
              const v82375 = v80967.closed;
              const v82379 = v82374.locked;
              const v82380 = v82374.lpFee;
              const v82381 = v82374.protoAddr;
              const v82382 = v82374.protoFee;
              const v82383 = v82374.totFee;
              const v82384 = {
                locked: v82379,
                lpFee: v82380,
                protoAddr: v82381,
                protoFee: v82382,
                totFee: v82383
                };
              const v82385 = {
                closed: v82375,
                cmds: v82163,
                info: v82384,
                umvirs: v82141
                };
              const v82389 = v82385.info;
              const v82390 = v82385.umvirs;
              const v82391 = v82385.closed;
              const v82392 = {
                closed: v82391,
                cmds: v82173,
                info: v82389,
                umvirs: v82390
                };
              const v90241 = v82392;
              const v90243 = v80971;
              const v90244 = v82392.closed;
              if (v90244) {
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
            case 'NewUmvirs': {
              const v82395 = v82117[1];
              const v82396 = v80967.closed;
              const v82398 = v80967.info;
              const v82400 = {
                closed: v82396,
                cmds: v82163,
                info: v82398,
                umvirs: v82395
                };
              const v82403 = v82400.info;
              const v82404 = v82400.umvirs;
              const v82405 = v82400.closed;
              const v82406 = {
                closed: v82405,
                cmds: v82173,
                info: v82403,
                umvirs: v82404
                };
              const v90246 = v82406;
              const v90248 = v80971;
              const v90249 = v82406.closed;
              if (v90249) {
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
            case 'NoOp': {
              const v82409 = v82117[1];
              const v82411 = v80967.info;
              const v82413 = v80967.closed;
              const v82414 = {
                closed: v82413,
                cmds: v82173,
                info: v82411,
                umvirs: v82141
                };
              const v90251 = v82414;
              const v90253 = v80971;
              const v90254 = v82414.closed;
              if (v90254) {
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
            case 'Rewards': {
              const v82417 = v82117[1];
              const v82419 = (stdlib.le(await ctc.getBalance(), v80971) ? stdlib.checkedBigNumberify('./index.rsh:562:43:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v80971));
              const v82420 = stdlib.safeAdd(v82419, v80971);
              const v82424 = stdlib.sub(v82420, v82419);
              sim_r.txns.push({
                kind: 'from',
                to: v82417,
                tok: undefined /* Nothing */
                });
              const v82426 = v80967.info;
              const v82428 = v80967.closed;
              const v82429 = {
                closed: v82428,
                cmds: v82173,
                info: v82426,
                umvirs: v82141
                };
              const v90256 = v82429;
              const v90258 = v82424;
              const v90259 = v82429.closed;
              if (v90259) {
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
        case 'register0_79211': {
          const v82471 = v81348[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc12, ctc13, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn1;
  switch (v81348[0]) {
    case 'Umvir_propose0_79211': {
      const v81351 = v81348[1];
      return;
      break;
      }
    case 'Umvir_support0_79211': {
      const v81911 = v81348[1];
      undefined /* setApiDetails */;
      ;
      const v82116 = v81911[stdlib.checkedBigNumberify('./index.rsh:574:12:spread', stdlib.UInt_max, '0')];
      const v82117 = v81911[stdlib.checkedBigNumberify('./index.rsh:574:12:spread', stdlib.UInt_max, '1')];
      let v82118;
      switch (v82117[0]) {
        case 'Harvest': {
          const v82119 = v82117[1];
          v82118 = true;
          
          break;
          }
        case 'HarvestA': {
          const v82120 = v82117[1];
          v82118 = true;
          
          break;
          }
        case 'HarvestB': {
          const v82121 = v82117[1];
          v82118 = true;
          
          break;
          }
        case 'Kill': {
          const v82122 = v82117[1];
          v82118 = true;
          
          break;
          }
        case 'NewInfo': {
          const v82123 = v82117[1];
          const v82124 = v82123.protoFee;
          const v82125 = v82123.lpFee;
          const v82126 = v82123.totFee;
          const v82127 = stdlib.lt256(v82124, stdlib.checkedBigNumberify('./index.rsh:326:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v82128 = stdlib.lt256(v82125, stdlib.checkedBigNumberify('./index.rsh:327:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v82129 = v82127 ? v82128 : false;
          let v82130;
          if (v82129) {
            const v82131 = stdlib.safeAdd256(v82125, v82124);
            const v82132 = stdlib.eq256(v82126, v82131);
            v82130 = v82132;
            }
          else {
            v82130 = false;
            }
          const v82133 = stdlib.lt256(v82126, stdlib.checkedBigNumberify('./index.rsh:329:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v82134 = v82130 ? v82133 : false;
          const v82135 = stdlib.gt256(v82126, stdlib.checkedBigNumberify('./index.rsh:330:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v82136 = v82134 ? v82135 : false;
          v82118 = v82136;
          
          break;
          }
        case 'NewUmvirs': {
          const v82137 = v82117[1];
          v82118 = true;
          
          break;
          }
        case 'NoOp': {
          const v82138 = v82117[1];
          v82118 = true;
          
          break;
          }
        case 'Rewards': {
          const v82139 = v82117[1];
          v82118 = true;
          
          break;
          }
        }
      stdlib.assert(v82118, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:575:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_support'
        });
      const v82141 = v80967.umvirs;
      const v82142 = stdlib.lt(v82116, stdlib.checkedBigNumberify('./index.rsh:576:30:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v82142, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:576:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
        msg: 'illegal idx',
        who: 'Umvir_support'
        });
      const v82145 = ['None', null];
      const v82146 = await stdlib.Array_asyncReduce([v82141], v82145, async([v82148], v82147, v82149) => {
        const v82150 = {
          None: 0,
          Some: 1
          }[v82147[0]];
        const v82151 = stdlib.eq(v82150, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v82152 = stdlib.addressEq(v81347, v82148);
        const v82153 = v82151 ? v82152 : false;
        const v82154 = ['Some', v82149];
        const v82155 = v82153 ? v82154 : v82147;
        
        return v82155;})
      const v82156 = {
        None: 0,
        Some: 1
        }[v82146[0]];
      const v82157 = stdlib.eq(v82156, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v82157, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:477:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:577:29:application call to "chkUmvir" (defined at: ./index.rsh:475:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_support'
        });
      const v82159 = stdlib.fromSome(v82146, stdlib.checkedBigNumberify('./index.rsh:478:33:decimal', stdlib.UInt_max, '0'));
      const v82160 = stdlib.eq(v82116, v82159);
      const v82161 = v82160 ? false : true;
      stdlib.assert(v82161, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:578:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
        msg: 'cannot support self',
        who: 'Umvir_support'
        });
      const v82163 = v80967.cmds;
      const v82165 = v82163[v82116];
      const v82166 = stdlib.digest([ctc9], [v82117]);
      const v82167 = stdlib.digest([ctc9], [v82165]);
      const v82168 = stdlib.digestEq(v82166, v82167);
      stdlib.assert(v82168, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:580:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
        msg: 'command switched',
        who: 'Umvir_support'
        });
      const v82173 = stdlib.Array_set(v82163, v82116, v80950);
      const v82176 = true;
      const v82177 = await txn1.getOutput('Umvir_support', 'v82176', ctc6, v82176);
      if (v80242) {
        stdlib.protect(ctc4, await interact.out(v81911, v82177), {
          at: './index.rsh:574:13:application',
          fs: ['at ./index.rsh:574:13:application call to [unknown function] (defined at: ./index.rsh:574:13:function exp)', 'at ./index.rsh:584:14:application call to "k" (defined at: ./index.rsh:583:15:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
          msg: 'out',
          who: 'Umvir_support'
          });
        }
      else {
        }
      
      switch (v82117[0]) {
        case 'Harvest': {
          const v82213 = v82117[1];
          const v82214 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '0')];
          const v82215 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '1')];
          const v82216 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '2')];
          const v82217 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '3')];
          const v82218 = v82213[stdlib.checkedBigNumberify('./index.rsh:523:23:array', stdlib.UInt_max, '4')];
          const v82219 = [v82216, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82215];
          const v82220 = [v82216, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82218];
          const v82221 = [v82217, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82215];
          const v82222 = [v82217, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82218];
          const v82223 = v80967.info;
          const v82224 = v82223.protoFee;
          const v82225 = v82223.lpFee;
          const v82226 = v82223.totFee;
          const v82227 = v82223.protoAddr;
          const v82228 = v82223.locked;
          const v82231 = [];
          const v82242 = {
            locked: v82228,
            lpFee: v82225,
            protoAddr: v82227,
            protoFee: v82224,
            totFee: v82226
            };
          const v82243 = undefined /* Remote */;
          const v82244 = await txn1.getOutput('internal', 'v82243', ctc20, v82243);
          const v82246 = v82244[stdlib.checkedBigNumberify('./index.rsh:534:17:application', stdlib.UInt_max, '0')];
          const v82255 = stdlib.add(v80971, v82246);
          const v82256 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82246);
          stdlib.assert(v82256, {
            at: './index.rsh:534:17:application',
            fs: ['at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:523:58:function exp)', 'at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:519:20:function exp)', 'at ./index.rsh:586:57:application call to "evalCommand" (defined at: ./index.rsh:518:35:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
            msg: 'remote bill check',
            who: 'Umvir_support'
            });
          const v82260 = v80967.closed;
          const v82261 = {
            closed: v82260,
            cmds: v82173,
            info: v82223,
            umvirs: v82141
            };
          const v90221 = v82261;
          const v90223 = v82255;
          const v90224 = v82261.closed;
          if (v90224) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'HarvestA': {
          const v82264 = v82117[1];
          const v82265 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '0')];
          const v82266 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '1')];
          const v82267 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '2')];
          const v82268 = v82264[stdlib.checkedBigNumberify('./index.rsh:537:24:array', stdlib.UInt_max, '3')];
          const v82269 = [v82267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82266];
          const v82270 = [v82267, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82268];
          const v82271 = v80967.info;
          const v82272 = v82271.protoFee;
          const v82273 = v82271.lpFee;
          const v82274 = v82271.totFee;
          const v82275 = v82271.protoAddr;
          const v82276 = v82271.locked;
          const v82279 = [];
          const v82290 = {
            locked: v82276,
            lpFee: v82273,
            protoAddr: v82275,
            protoFee: v82272,
            totFee: v82274
            };
          const v82291 = undefined /* Remote */;
          const v82292 = await txn1.getOutput('internal', 'v82291', ctc20, v82291);
          const v82294 = v82292[stdlib.checkedBigNumberify('./index.rsh:546:17:application', stdlib.UInt_max, '0')];
          const v82303 = stdlib.add(v80971, v82294);
          const v82304 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82294);
          stdlib.assert(v82304, {
            at: './index.rsh:546:17:application',
            fs: ['at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:537:53:function exp)', 'at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:519:20:function exp)', 'at ./index.rsh:586:57:application call to "evalCommand" (defined at: ./index.rsh:518:35:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
            msg: 'remote bill check',
            who: 'Umvir_support'
            });
          const v82308 = v80967.closed;
          const v82309 = {
            closed: v82308,
            cmds: v82173,
            info: v82271,
            umvirs: v82141
            };
          const v90226 = v82309;
          const v90228 = v82303;
          const v90229 = v82309.closed;
          if (v90229) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'HarvestB': {
          const v82312 = v82117[1];
          const v82313 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '0')];
          const v82314 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '1')];
          const v82315 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '2')];
          const v82316 = v82312[stdlib.checkedBigNumberify('./index.rsh:549:24:array', stdlib.UInt_max, '3')];
          const v82317 = [v82315, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82314];
          const v82318 = [v82315, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82316];
          const v82319 = v80967.info;
          const v82320 = v82319.protoFee;
          const v82321 = v82319.lpFee;
          const v82322 = v82319.totFee;
          const v82323 = v82319.protoAddr;
          const v82324 = v82319.locked;
          const v82327 = [];
          const v82338 = {
            locked: v82324,
            lpFee: v82321,
            protoAddr: v82323,
            protoFee: v82320,
            totFee: v82322
            };
          const v82339 = undefined /* Remote */;
          const v82340 = await txn1.getOutput('internal', 'v82339', ctc20, v82339);
          const v82342 = v82340[stdlib.checkedBigNumberify('./index.rsh:558:17:application', stdlib.UInt_max, '0')];
          const v82351 = stdlib.add(v80971, v82342);
          const v82352 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v82342);
          stdlib.assert(v82352, {
            at: './index.rsh:558:17:application',
            fs: ['at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:549:53:function exp)', 'at ./index.rsh:519:20:application call to [unknown function] (defined at: ./index.rsh:519:20:function exp)', 'at ./index.rsh:586:57:application call to "evalCommand" (defined at: ./index.rsh:518:35:function exp)', 'at ./index.rsh:583:15:application call to [unknown function] (defined at: ./index.rsh:583:15:function exp)'],
            msg: 'remote bill check',
            who: 'Umvir_support'
            });
          const v82356 = v80967.closed;
          const v82357 = {
            closed: v82356,
            cmds: v82173,
            info: v82319,
            umvirs: v82141
            };
          const v90231 = v82357;
          const v90233 = v82351;
          const v90234 = v82357.closed;
          if (v90234) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Kill': {
          const v82360 = v82117[1];
          const v82363 = v80967.info;
          const v82365 = {
            closed: true,
            cmds: v82163,
            info: v82363,
            umvirs: v82141
            };
          const v82368 = v82365.info;
          const v82369 = v82365.umvirs;
          const v82370 = v82365.closed;
          const v82371 = {
            closed: v82370,
            cmds: v82173,
            info: v82368,
            umvirs: v82369
            };
          const v90236 = v82371;
          const v90238 = v80971;
          const v90239 = v82371.closed;
          if (v90239) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NewInfo': {
          const v82374 = v82117[1];
          const v82375 = v80967.closed;
          const v82379 = v82374.locked;
          const v82380 = v82374.lpFee;
          const v82381 = v82374.protoAddr;
          const v82382 = v82374.protoFee;
          const v82383 = v82374.totFee;
          const v82384 = {
            locked: v82379,
            lpFee: v82380,
            protoAddr: v82381,
            protoFee: v82382,
            totFee: v82383
            };
          const v82385 = {
            closed: v82375,
            cmds: v82163,
            info: v82384,
            umvirs: v82141
            };
          const v82389 = v82385.info;
          const v82390 = v82385.umvirs;
          const v82391 = v82385.closed;
          const v82392 = {
            closed: v82391,
            cmds: v82173,
            info: v82389,
            umvirs: v82390
            };
          const v90241 = v82392;
          const v90243 = v80971;
          const v90244 = v82392.closed;
          if (v90244) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NewUmvirs': {
          const v82395 = v82117[1];
          const v82396 = v80967.closed;
          const v82398 = v80967.info;
          const v82400 = {
            closed: v82396,
            cmds: v82163,
            info: v82398,
            umvirs: v82395
            };
          const v82403 = v82400.info;
          const v82404 = v82400.umvirs;
          const v82405 = v82400.closed;
          const v82406 = {
            closed: v82405,
            cmds: v82173,
            info: v82403,
            umvirs: v82404
            };
          const v90246 = v82406;
          const v90248 = v80971;
          const v90249 = v82406.closed;
          if (v90249) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NoOp': {
          const v82409 = v82117[1];
          const v82411 = v80967.info;
          const v82413 = v80967.closed;
          const v82414 = {
            closed: v82413,
            cmds: v82173,
            info: v82411,
            umvirs: v82141
            };
          const v90251 = v82414;
          const v90253 = v80971;
          const v90254 = v82414.closed;
          if (v90254) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Rewards': {
          const v82417 = v82117[1];
          const v82419 = (stdlib.le(await ctc.getBalance(), v80971) ? stdlib.checkedBigNumberify('./index.rsh:562:43:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v80971));
          const v82420 = stdlib.safeAdd(v82419, v80971);
          const v82424 = stdlib.sub(v82420, v82419);
          ;
          const v82426 = v80967.info;
          const v82428 = v80967.closed;
          const v82429 = {
            closed: v82428,
            cmds: v82173,
            info: v82426,
            umvirs: v82141
            };
          const v90256 = v82429;
          const v90258 = v82424;
          const v90259 = v82429.closed;
          if (v90259) {
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
    case 'register0_79211': {
      const v82471 = v81348[1];
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
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc0, ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc1], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc2,
    HarvestA: ctc3,
    HarvestB: ctc3,
    Kill: ctc4,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc4,
    Rewards: ctc1
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc1,
    protoFee: ctc5,
    totFee: ctc5
    });
  const ctc12 = stdlib.T_Object({
    closed: ctc6,
    cmds: ctc10,
    info: ctc11,
    umvirs: ctc8
    });
  const ctc13 = stdlib.T_UInt;
  const ctc14 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Tuple([ctc13, ctc9]);
  const ctc17 = stdlib.T_Data({
    Umvir_propose0_79211: ctc15,
    Umvir_support0_79211: ctc16,
    register0_79211: ctc14
    });
  
  
  const [v80950, v80967, v80971] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc12, ctc13]);
  const v81030 = ctc.selfAddress();
  const v81032 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:460:50:application call to [unknown function] (defined at: ./index.rsh:460:50:function exp)', 'at ./index.rsh:424:31:application call to "runregister0_79211" (defined at: ./index.rsh:460:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v81033 = v81032[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v81040 = stdlib.ctcAddrEq(v81033, v81030);
  stdlib.assert(v81040, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:447:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:461:15:application call to "chkCtc" (defined at: ./index.rsh:446:39:function exp)', 'at ./index.rsh:460:50:application call to [unknown function] (defined at: ./index.rsh:460:50:function exp)', 'at ./index.rsh:424:31:application call to "runregister0_79211" (defined at: ./index.rsh:460:12:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v81051 = ['register0_79211', v81032];
  
  const txn1 = await (ctc.sendrecv({
    args: [v80950, v80967, v80971, v81051],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:463:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn1;
      
      switch (v81348[0]) {
        case 'Umvir_propose0_79211': {
          const v81351 = v81348[1];
          
          break;
          }
        case 'Umvir_support0_79211': {
          const v81911 = v81348[1];
          
          break;
          }
        case 'register0_79211': {
          const v82471 = v81348[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          ;
          const v83002 = v80967.info;
          const v83003 = v83002.protoFee;
          const v83004 = v83002.lpFee;
          const v83005 = v83002.totFee;
          const v83006 = v83002.protoAddr;
          const v83007 = v83002.locked;
          const v83008 = {
            locked: v83007,
            lpFee: v83004,
            protoAddr: v83006,
            protoFee: v83003,
            totFee: v83005
            };
          const v83009 = await txn1.getOutput('register', 'v83008', ctc7, v83008);
          
          const v90311 = v80967;
          const v90313 = v80971;
          const v90314 = v80967.closed;
          if (v90314) {
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
    tys: [ctc9, ctc12, ctc13, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v81348], secs: v81350, time: v81349, didSend: v80242, from: v81347 } = txn1;
  switch (v81348[0]) {
    case 'Umvir_propose0_79211': {
      const v81351 = v81348[1];
      return;
      break;
      }
    case 'Umvir_support0_79211': {
      const v81911 = v81348[1];
      return;
      break;
      }
    case 'register0_79211': {
      const v82471 = v81348[1];
      undefined /* setApiDetails */;
      const v82521 = v82471[stdlib.checkedBigNumberify('./index.rsh:460:12:spread', stdlib.UInt_max, '0')];
      const v82525 = stdlib.ctcAddrEq(v82521, v81347);
      stdlib.assert(v82525, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:447:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:461:15:application call to "chkCtc" (defined at: ./index.rsh:446:39:function exp)', 'at ./index.rsh:460:50:application call to [unknown function] (defined at: ./index.rsh:460:50:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:460:50:function exp)', 'at ./index.rsh:424:31:application call to [unknown function] (defined at: ./index.rsh:424:31:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v83002 = v80967.info;
      const v83003 = v83002.protoFee;
      const v83004 = v83002.lpFee;
      const v83005 = v83002.totFee;
      const v83006 = v83002.protoAddr;
      const v83007 = v83002.locked;
      const v83008 = {
        locked: v83007,
        lpFee: v83004,
        protoAddr: v83006,
        protoFee: v83003,
        totFee: v83005
        };
      const v83009 = await txn1.getOutput('register', 'v83008', ctc7, v83008);
      if (v80242) {
        stdlib.protect(ctc4, await interact.out(v82471, v83009), {
          at: './index.rsh:460:13:application',
          fs: ['at ./index.rsh:460:13:application call to [unknown function] (defined at: ./index.rsh:460:13:function exp)', 'at ./index.rsh:465:14:application call to "k" (defined at: ./index.rsh:464:15:function exp)', 'at ./index.rsh:464:15:application call to [unknown function] (defined at: ./index.rsh:464:15:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v90311 = v80967;
      const v90313 = v80971;
      const v90314 = v80967.closed;
      if (v90314) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Umvir_propose(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Umvir_propose expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Umvir_propose expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Umvir_propose3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Umvir_support(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Umvir_support expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Umvir_support expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Umvir_support3(ctcTop, interact);}
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
const _ALGO = {
  ABI: {
    impure: [`Umvir_propose((byte,byte[129]))byte`, `Umvir_support(uint64,(byte,byte[129]))byte`, `_reachp_0((uint64,address[3],(uint256,uint256,uint256)))void`, `_reachp_2((uint64,(byte,byte[138])))void`, `register(uint64,uint64,uint64)(uint256,uint256,uint256,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[129])[3],(uint256,uint256,uint256,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[129])[3],(uint256,uint256,uint256,address,byte))`, `Umvir_propose((byte,byte[129]))byte`, `Umvir_support(uint64,(byte,byte[129]))byte`, `_reachp_0((uint64,address[3],(uint256,uint256,uint256)))void`, `_reachp_2((uint64,(byte,byte[138])))void`, `register(uint64,uint64,uint64)(uint256,uint256,uint256,address,byte)`]
    },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAGHA4EBCAMgiARgggGGAygGfwkmCSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAEBAQAABWFwcElEAQIBAwEEAQUxGEEDBytkSSJbNQEhBFs1AipkKWRQJwVkUCcGZFAnB2RQJwhkUIIGBE5v3YIEZuR8pgRqw/UiBNUKsX4E52GF8ATzxUotNhoAjgYAAQKqAFAClgCbCeMANAEhBRJEiApQNBMkJVg1CzQTIQchCFg0EyMhClhQNAtXQSA0C1cBIFA0C1dhIFA0C1chIFA0C1cAAVBQNQQxGSISRIAEFR98dTQEULAjQzYaATULIQSvKjQLUCEEr1BQNQshBTQBEkSICe40CyJbNQw0C1cIizUQgATatm2MNAwWUDQQULA0DIgJuzQQIlWNAwk7CT4JSEL/ZTYaARc2GgI1CzUMIQSvKTQMFjQLUFBQNQtC/6w0EFcBgkk1DCJVjQgCtAK6AsACxgLMAxIDGAMeQv8qNAsiWzUYNAtXCIJJNRciVY0IBM8E1QTbBOEE5wUtBTMFOUL/BScENBBXARhXAAhQAzEAEkQ0EyQlWEk1DFdBIDQMVwEgUDQMV2EgUDQMVyEgUDQMVwABUDULgAgAAAAAAAFEQDQLULA0CzUEMgY1EjQTVwABF0EIaDEZgQUSRIgI3yIyCjIJiAkQNANA/ulC/twhBK8nBTQNFjQMFlA0CxZQUIFyr1BQNQtC/uA0CyJbNQw0C1cIYDUONAtXaGA1D4AEVMIG2jQMFlA0DlA0D1CwNAyICJo0D1cgIDUNNA9XACA1DDQPV0AgNQs0DSikNAwopBBBBG80CzQMNA2giAhRqDUPNA80CyikEDQLMgOlEESAggEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANRQqNBRJUDQUUFAqNAxQMgpQNA1QNAtQUDQOUDIGIjURNRI1E0L+sIgHmoGgjQY0Bgg1BjYaATULQv7ZiAeGNhoBNQtC/a4iMTQSRIEHMTUSRCIxNhJEIjE3EkSIB2aB8gWvIiI1AjUBKksBVwB/ZylLAVd/f2cnBUsBV/5/ZycGSwGB/QIhDVhnJwdLAYH8AyENWGcnCEyB+wSBd1hnKzQBFjQCFlBnMRkiEkSIBxlC/j80GkQ0EyEHIQhYNRghDq9JNRA1CyI1FTQYIQY0FQshBlg1FjQLKTQVFlA0CyJVIhIxADQWEhBNNQs0FSMISTUVIQUMQP/RNAsiVSMSRDQMIlWNCAEWARwBIgEoAS4BdAF6AYBC/HkjNRpC/5QjNRpC/44jNRpC/4gjNRpC/4I0DFcBgUk1C1cAIDUZNAtXICA1GDQLV0AgNRA0GSikNBgopBBBADE0EDQYNBmgiAZZqDULNAs0ECikEDQQMgOlEDUaQv88IzUaQv82IzUaQv8wIzUaQv8qIjULQv/WNBlENBA1CyI1DTQYIQY0DQshBlg1DjQLKTQNFlA0CyJVIhIxADQOEhBNNQs0DSMISTUNIQUMQP/RNAsiVSMSRCM1DYAIAAAAAAABPiw0DRZRBwhQsDQNFlEHCDUEKjEANAxQUDUNgAQ7YWIpNA1QsDQTVwABNBMjIQpYIQSvNAuIBdEXIQkLNAxdUDQTJCVYUDQYUDIGNRI1E0L8rCM1GUL/XSM1GUL/VyM1GUL/USM1GUL/SzQMVwGBSTULVwAgNRc0C1cgIDUWNAtXQCA1FTQXKKQ0FiikEEEAMTQVNBY0F6CIBUaoNQs0CzQVKKQQNBUyA6UQNRlC/wUjNRlC/v8jNRlC/vkjNRlC/vMiNQtC/9Y0FkQ0EyEHIQhYNQw0GCEFDEQhDq81CyI1DTQMIQY0DQshBlg1DjQLKTQNFlA0CyJVIhIxADQOEhBNNQs0DSMISTUNIQUMQP/RNAsiVSMSRDQYIQSvNAuIBOcXE0Q0EyMhClg1DTQXATQNIQk0GAshCVgBEkQ0DTQYIQkLNBRdNQsjNQ6ACAAAAAAAAUEANA4WUQcIULA0DhZRBwg1BDQXIlWNCAB/AVsCJQLvAxwDbAOgA7pC+jkjNRZC/0MjNRZC/z0jNRZC/zcjNRZC/zE0F1cBgUk1C1cAIDUVNAtXICA1EDQLV0AgNQw0FSikNBAopBBBADE0DDQQNBWgiAQZqDULNAs0DCikEDQMMgOlEDUWQv7rIzUWQv7lIzUWQv7fIzUWQv7ZIjULQv/WIjUPQvuYNBdXAVhJNQ0iWzUWNA1XCCA1FTQNIQtbNRA0DYEwWzUPNA1XOCA1DjQTJCVYNRcnBDQWFlADNQgyCng1CSsyCmA0CQkWNQqxIrIBIQyyEDQWshiABODZW7WyGjQOSbIcsho0F1dBIDQXVwEgUDQXV2EgUDQXVyEgUDQXVwABULIaNBayMjQQsjI0D7IyszIKYDQJCTQKFwkWtwA+VwQAUDUNgAgAAAAAAAFBQzQNULA0DUk1DiJbNQ0iNA0SRDQTVwABNAtQNBdQNAxQMgY0ETQNCDURNRI1E0L6JzQXVwFQSTUNIls1FjQNIQtbNRU0DVcwIDUQNBMkJVg1DycENBYWUAM1CDIKeDUJKzIKYDQJCRY1CrEisgEhDLIQNBayGIAEuu4yzLIaNBBJshyyGjQPV0EgNA9XASBQNA9XYSBQNA9XISBQNA9XAAFQsho0FrIyNBWyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DoAIAAAAAAABQXM0DlCwNA5JNQ0iWzUOIjQOEkQ0E1cAATQLUDQPUDQMUDIGNBE0Dgg1ETUSNRNC+V00F1cBUEk1DSJbNRY0DSELWzUVNA1XMCA1EDQTJCVYNQ8nBDQWFlADNQgyCng1CSsyCmA0CQkWNQqxIrIBIQyyEDQWshiABGNgpMKyGjQQSbIcsho0D1dBIDQPVwEgUDQPV2EgUDQPVyEgUDQPVwABULIaNBayMjQVsjKzMgpgNAkJNAoXCRa3AD5XBABQNQ6ACAAAAAAAAUGjNA5QsDQOSTUNIls1DiI0DhJENBNXAAE0C1A0D1A0DFAyBjQRNA4INRE1EjUTQviTKTQNUDQTJCVYUDQMUEk1DlcAATQLUDQOJCVYUDQOIQchCFhQMgY1EjUTQvhmNBdXAYE1DjQTVwABNA1QNA5XgAE0DlcgIFA0DldgIFA0DlcAIFA0DldAIFBQNAxQSTUPVwABNAtQNA8kJVhQNA8hByEIWFAyBjUSNRNC+BY0E1cAATQNUDQTJCVYUDQXVwFgUEk1DFcAATQLUDQMJCVYUDQMIQchCFhQMgY1EjUTQvfiNBNXAAE0C1A0EyQlWFA0DFAyBjUSNRNC98gyCmAyCngJNBEJSTUNNBdXASCIALA0E1cAATQLUDQTJCVYUDQMUDIGNA00EQg0DQk1ETUSNRNC9480FDQTUDQRFlAhBTIGQvkMIrIBI7IQsgeyCLOJQvbhNBBXAYo1C0L29kL3GDYaARc2GgIXNhoDFzULNQw1DUL3cEiJTAlJNQYyCYgAP4kJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIlJFSEGTAmvTFCJIzUDiTQGNAdKD0H/ukL/wrFC/4BJIhJMNAISEUSJSVcBAEwiVU2JSVcAgjUUSSEJgegEWDUTgeoFWzURibGyCUL/UQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `460`,
    1001: `460`,
    1002: `461`,
    1003: `462`,
    1004: `462`,
    1005: `463`,
    1006: `464`,
    1007: `465`,
    1008: `465`,
    1009: `466`,
    101: `21`,
    1010: `467`,
    1011: `468`,
    1012: `469`,
    1013: `470`,
    1014: `470`,
    1015: `471`,
    1016: `471`,
    1017: `472`,
    1018: `473`,
    1019: `474`,
    102: `22`,
    1020: `475`,
    1021: `475`,
    1022: `476`,
    1023: `476`,
    1024: `477`,
    1025: `478`,
    1026: `479`,
    1027: `480`,
    1028: `480`,
    1029: `481`,
    103: `23`,
    1030: `481`,
    1031: `482`,
    1032: `483`,
    1033: `483`,
    1034: `483`,
    1035: `485`,
    1036: `485`,
    1037: `486`,
    1038: `487`,
    1039: `488`,
    104: `23`,
    1040: `489`,
    1041: `490`,
    1042: `498`,
    1043: `498`,
    1044: `499`,
    1045: `500`,
    1046: `501`,
    1047: `501`,
    1048: `501`,
    1049: `501`,
    105: `24`,
    1050: `501`,
    1051: `501`,
    1052: `501`,
    1053: `501`,
    1054: `501`,
    1055: `501`,
    1056: `501`,
    1057: `501`,
    1058: `501`,
    1059: `501`,
    106: `25`,
    1060: `501`,
    1061: `501`,
    1062: `501`,
    1063: `501`,
    1064: `502`,
    1065: `502`,
    1066: `502`,
    1067: `504`,
    1068: `505`,
    1069: `505`,
    107: `26`,
    1070: `506`,
    1071: `506`,
    1072: `506`,
    1073: `508`,
    1074: `509`,
    1075: `509`,
    1076: `510`,
    1077: `510`,
    1078: `510`,
    1079: `512`,
    108: `26`,
    1080: `513`,
    1081: `513`,
    1082: `514`,
    1083: `514`,
    1084: `514`,
    1085: `516`,
    1086: `517`,
    1087: `517`,
    1088: `518`,
    1089: `518`,
    109: `27`,
    1090: `518`,
    1091: `520`,
    1092: `520`,
    1093: `521`,
    1094: `521`,
    1095: `521`,
    1096: `522`,
    1097: `523`,
    1098: `523`,
    1099: `524`,
    11: `2`,
    110: `28`,
    1100: `524`,
    1101: `524`,
    1102: `525`,
    1103: `525`,
    1104: `526`,
    1105: `526`,
    1106: `527`,
    1107: `527`,
    1108: `527`,
    1109: `528`,
    111: `29`,
    1110: `528`,
    1111: `529`,
    1112: `529`,
    1113: `530`,
    1114: `530`,
    1115: `530`,
    1116: `531`,
    1117: `531`,
    1118: `532`,
    1119: `532`,
    112: `29`,
    1120: `533`,
    1121: `534`,
    1122: `535`,
    1123: `535`,
    1124: `536`,
    1125: `537`,
    1126: `538`,
    1127: `539`,
    1128: `539`,
    1129: `539`,
    113: `30`,
    1130: `540`,
    1131: `540`,
    1132: `541`,
    1133: `541`,
    1134: `542`,
    1135: `542`,
    1136: `543`,
    1137: `544`,
    1138: `544`,
    1139: `544`,
    114: `31`,
    1140: `545`,
    1141: `546`,
    1142: `546`,
    1143: `548`,
    1144: `548`,
    1145: `549`,
    1146: `549`,
    1147: `550`,
    1148: `551`,
    1149: `552`,
    115: `33`,
    1150: `553`,
    1151: `553`,
    1152: `554`,
    1153: `554`,
    1154: `555`,
    1155: `556`,
    1156: `557`,
    1157: `557`,
    1158: `558`,
    1159: `558`,
    116: `33`,
    1160: `558`,
    1161: `560`,
    1162: `561`,
    1163: `561`,
    1164: `562`,
    1165: `562`,
    1166: `562`,
    1167: `564`,
    1168: `565`,
    1169: `565`,
    117: `33`,
    1170: `566`,
    1171: `566`,
    1172: `566`,
    1173: `568`,
    1174: `569`,
    1175: `569`,
    1176: `570`,
    1177: `570`,
    1178: `570`,
    1179: `572`,
    118: `33`,
    1180: `573`,
    1181: `573`,
    1182: `574`,
    1183: `574`,
    1184: `574`,
    1185: `576`,
    1186: `576`,
    1187: `577`,
    1188: `582`,
    1189: `582`,
    119: `33`,
    1190: `583`,
    1191: `583`,
    1192: `584`,
    1193: `585`,
    1194: `585`,
    1195: `588`,
    1196: `588`,
    1197: `589`,
    1198: `589`,
    1199: `590`,
    12: `2`,
    120: `33`,
    1200: `590`,
    1201: `591`,
    1202: `592`,
    1203: `592`,
    1204: `593`,
    1205: `594`,
    1206: `594`,
    1207: `595`,
    1208: `595`,
    1209: `596`,
    121: `33`,
    1210: `597`,
    1211: `597`,
    1212: `598`,
    1213: `599`,
    1214: `600`,
    1215: `600`,
    1216: `601`,
    1217: `602`,
    1218: `603`,
    1219: `604`,
    122: `33`,
    1220: `605`,
    1221: `605`,
    1222: `606`,
    1223: `606`,
    1224: `607`,
    1225: `608`,
    1226: `609`,
    1227: `610`,
    1228: `610`,
    1229: `611`,
    123: `33`,
    1230: `611`,
    1231: `612`,
    1232: `613`,
    1233: `614`,
    1234: `615`,
    1235: `615`,
    1236: `616`,
    1237: `616`,
    1238: `617`,
    1239: `618`,
    124: `33`,
    1240: `618`,
    1241: `618`,
    1242: `620`,
    1243: `620`,
    1244: `621`,
    1245: `622`,
    1246: `623`,
    1247: `624`,
    1248: `625`,
    1249: `631`,
    125: `33`,
    1250: `632`,
    1251: `632`,
    1252: `633`,
    1253: `633`,
    1254: `633`,
    1255: `633`,
    1256: `633`,
    1257: `633`,
    1258: `633`,
    1259: `633`,
    126: `33`,
    1260: `633`,
    1261: `633`,
    1262: `634`,
    1263: `634`,
    1264: `635`,
    1265: `636`,
    1266: `636`,
    1267: `636`,
    1268: `637`,
    1269: `638`,
    127: `33`,
    1270: `639`,
    1271: `639`,
    1272: `640`,
    1273: `641`,
    1274: `641`,
    1275: `641`,
    1276: `642`,
    1277: `642`,
    1278: `643`,
    1279: `644`,
    128: `33`,
    1280: `644`,
    1281: `645`,
    1282: `645`,
    1283: `646`,
    1284: `647`,
    1285: `648`,
    1286: `648`,
    1287: `649`,
    1288: `649`,
    1289: `649`,
    129: `33`,
    1290: `649`,
    1291: `649`,
    1292: `649`,
    1293: `650`,
    1294: `650`,
    1295: `651`,
    1296: `652`,
    1297: `654`,
    1298: `654`,
    1299: `655`,
    13: `2`,
    130: `33`,
    1300: `655`,
    1301: `655`,
    1302: `656`,
    1303: `656`,
    1304: `657`,
    1305: `658`,
    1306: `658`,
    1307: `659`,
    1308: `660`,
    1309: `660`,
    131: `33`,
    1310: `661`,
    1311: `662`,
    1312: `662`,
    1313: `663`,
    1314: `663`,
    1315: `663`,
    1316: `664`,
    1317: `665`,
    1318: `665`,
    1319: `666`,
    132: `33`,
    1320: `667`,
    1321: `667`,
    1322: `668`,
    1323: `669`,
    1324: `670`,
    1325: `670`,
    1326: `671`,
    1327: `672`,
    1328: `673`,
    1329: `674`,
    133: `33`,
    1330: `675`,
    1331: `675`,
    1332: `676`,
    1333: `677`,
    1334: `677`,
    1335: `678`,
    1336: `678`,
    1337: `679`,
    1338: `679`,
    1339: `680`,
    134: `33`,
    1340: `680`,
    1341: `680`,
    1342: `682`,
    1343: `683`,
    1344: `683`,
    1345: `684`,
    1346: `684`,
    1347: `684`,
    1348: `686`,
    1349: `687`,
    135: `33`,
    1350: `687`,
    1351: `688`,
    1352: `688`,
    1353: `688`,
    1354: `690`,
    1355: `691`,
    1356: `691`,
    1357: `692`,
    1358: `692`,
    1359: `692`,
    136: `33`,
    1360: `694`,
    1361: `695`,
    1362: `695`,
    1363: `696`,
    1364: `696`,
    1365: `696`,
    1366: `698`,
    1367: `698`,
    1368: `699`,
    1369: `699`,
    137: `33`,
    1370: `699`,
    1371: `700`,
    1372: `701`,
    1373: `701`,
    1374: `702`,
    1375: `702`,
    1376: `702`,
    1377: `703`,
    1378: `703`,
    1379: `704`,
    138: `33`,
    1380: `704`,
    1381: `705`,
    1382: `705`,
    1383: `705`,
    1384: `706`,
    1385: `706`,
    1386: `707`,
    1387: `707`,
    1388: `708`,
    1389: `708`,
    139: `33`,
    1390: `708`,
    1391: `709`,
    1392: `709`,
    1393: `710`,
    1394: `710`,
    1395: `711`,
    1396: `712`,
    1397: `713`,
    1398: `713`,
    1399: `714`,
    14: `2`,
    140: `33`,
    1400: `715`,
    1401: `716`,
    1402: `717`,
    1403: `717`,
    1404: `717`,
    1405: `718`,
    1406: `718`,
    1407: `719`,
    1408: `719`,
    1409: `720`,
    141: `33`,
    1410: `720`,
    1411: `721`,
    1412: `722`,
    1413: `722`,
    1414: `722`,
    1415: `723`,
    1416: `724`,
    1417: `724`,
    1418: `726`,
    1419: `726`,
    142: `33`,
    1420: `727`,
    1421: `727`,
    1422: `728`,
    1423: `729`,
    1424: `730`,
    1425: `731`,
    1426: `731`,
    1427: `732`,
    1428: `732`,
    1429: `733`,
    143: `33`,
    1430: `734`,
    1431: `735`,
    1432: `735`,
    1433: `736`,
    1434: `736`,
    1435: `736`,
    1436: `738`,
    1437: `739`,
    1438: `739`,
    1439: `740`,
    144: `33`,
    1440: `740`,
    1441: `740`,
    1442: `742`,
    1443: `743`,
    1444: `743`,
    1445: `744`,
    1446: `744`,
    1447: `744`,
    1448: `746`,
    1449: `747`,
    145: `33`,
    1450: `747`,
    1451: `748`,
    1452: `748`,
    1453: `748`,
    1454: `750`,
    1455: `751`,
    1456: `751`,
    1457: `752`,
    1458: `752`,
    1459: `752`,
    146: `33`,
    1460: `754`,
    1461: `754`,
    1462: `755`,
    1463: `760`,
    1464: `760`,
    1465: `761`,
    1466: `761`,
    1467: `762`,
    1468: `762`,
    1469: `763`,
    147: `34`,
    1470: `764`,
    1471: `764`,
    1472: `765`,
    1473: `765`,
    1474: `766`,
    1475: `766`,
    1476: `767`,
    1477: `768`,
    1478: `773`,
    1479: `773`,
    148: `34`,
    1480: `774`,
    1481: `775`,
    1482: `775`,
    1483: `776`,
    1484: `777`,
    1485: `777`,
    1486: `780`,
    1487: `780`,
    1488: `781`,
    1489: `781`,
    149: `34`,
    1490: `782`,
    1491: `782`,
    1492: `783`,
    1493: `784`,
    1494: `784`,
    1495: `785`,
    1496: `786`,
    1497: `786`,
    1498: `787`,
    1499: `787`,
    15: `2`,
    150: `35`,
    1500: `788`,
    1501: `789`,
    1502: `789`,
    1503: `790`,
    1504: `791`,
    1505: `792`,
    1506: `792`,
    1507: `793`,
    1508: `794`,
    1509: `795`,
    151: `35`,
    1510: `796`,
    1511: `797`,
    1512: `797`,
    1513: `798`,
    1514: `798`,
    1515: `799`,
    1516: `800`,
    1517: `801`,
    1518: `802`,
    1519: `802`,
    152: `35`,
    1520: `803`,
    1521: `803`,
    1522: `804`,
    1523: `805`,
    1524: `806`,
    1525: `807`,
    1526: `807`,
    1527: `808`,
    1528: `808`,
    1529: `809`,
    153: `35`,
    1530: `810`,
    1531: `810`,
    1532: `810`,
    1533: `812`,
    1534: `812`,
    1535: `813`,
    1536: `814`,
    1537: `815`,
    1538: `816`,
    1539: `817`,
    154: `35`,
    1540: `823`,
    1541: `823`,
    1542: `824`,
    1543: `824`,
    1544: `825`,
    1545: `826`,
    1546: `826`,
    1547: `827`,
    1548: `827`,
    1549: `827`,
    155: `35`,
    1550: `828`,
    1551: `829`,
    1552: `830`,
    1553: `835`,
    1554: `835`,
    1555: `836`,
    1556: `837`,
    1557: `837`,
    1558: `838`,
    1559: `839`,
    156: `35`,
    1560: `839`,
    1561: `840`,
    1562: `840`,
    1563: `841`,
    1564: `842`,
    1565: `842`,
    1566: `843`,
    1567: `843`,
    1568: `844`,
    1569: `844`,
    157: `35`,
    1570: `845`,
    1571: `846`,
    1572: `846`,
    1573: `847`,
    1574: `848`,
    1575: `849`,
    1576: `850`,
    1577: `855`,
    1578: `855`,
    1579: `856`,
    158: `35`,
    1580: `856`,
    1581: `857`,
    1582: `857`,
    1583: `858`,
    1584: `859`,
    1585: `859`,
    1586: `860`,
    1587: `861`,
    1588: `861`,
    1589: `862`,
    159: `35`,
    1590: `863`,
    1591: `863`,
    1592: `864`,
    1593: `864`,
    1594: `864`,
    1595: `864`,
    1596: `864`,
    1597: `864`,
    1598: `864`,
    1599: `864`,
    16: `2`,
    160: `35`,
    1600: `864`,
    1601: `864`,
    1602: `865`,
    1603: `865`,
    1604: `866`,
    1605: `867`,
    1606: `867`,
    1607: `867`,
    1608: `868`,
    1609: `869`,
    161: `35`,
    1610: `870`,
    1611: `870`,
    1612: `871`,
    1613: `872`,
    1614: `872`,
    1615: `872`,
    1616: `873`,
    1617: `873`,
    1618: `874`,
    1619: `874`,
    162: `35`,
    1620: `875`,
    1621: `876`,
    1622: `877`,
    1623: `877`,
    1624: `877`,
    1625: `877`,
    1626: `877`,
    1627: `877`,
    1628: `877`,
    1629: `877`,
    163: `35`,
    1630: `877`,
    1631: `877`,
    1632: `877`,
    1633: `877`,
    1634: `877`,
    1635: `877`,
    1636: `877`,
    1637: `877`,
    1638: `877`,
    1639: `877`,
    164: `37`,
    1640: `878`,
    1641: `878`,
    1642: `878`,
    1643: `880`,
    1644: `881`,
    1645: `881`,
    1646: `882`,
    1647: `882`,
    1648: `882`,
    1649: `884`,
    165: `40`,
    1650: `885`,
    1651: `885`,
    1652: `886`,
    1653: `886`,
    1654: `886`,
    1655: `888`,
    1656: `889`,
    1657: `889`,
    1658: `890`,
    1659: `890`,
    166: `40`,
    1660: `890`,
    1661: `892`,
    1662: `893`,
    1663: `893`,
    1664: `894`,
    1665: `894`,
    1666: `894`,
    1667: `896`,
    1668: `896`,
    1669: `897`,
    167: `41`,
    1670: `897`,
    1671: `897`,
    1672: `898`,
    1673: `899`,
    1674: `899`,
    1675: `900`,
    1676: `900`,
    1677: `900`,
    1678: `901`,
    1679: `901`,
    168: `41`,
    1680: `902`,
    1681: `902`,
    1682: `903`,
    1683: `903`,
    1684: `903`,
    1685: `904`,
    1686: `904`,
    1687: `905`,
    1688: `905`,
    1689: `906`,
    169: `42`,
    1690: `906`,
    1691: `906`,
    1692: `907`,
    1693: `907`,
    1694: `908`,
    1695: `908`,
    1696: `909`,
    1697: `910`,
    1698: `911`,
    1699: `911`,
    17: `2`,
    170: `43`,
    1700: `912`,
    1701: `913`,
    1702: `914`,
    1703: `915`,
    1704: `915`,
    1705: `915`,
    1706: `916`,
    1707: `916`,
    1708: `917`,
    1709: `917`,
    171: `46`,
    1710: `918`,
    1711: `918`,
    1712: `919`,
    1713: `920`,
    1714: `920`,
    1715: `920`,
    1716: `921`,
    1717: `922`,
    1718: `922`,
    1719: `924`,
    172: `46`,
    1720: `924`,
    1721: `925`,
    1722: `925`,
    1723: `926`,
    1724: `927`,
    1725: `928`,
    1726: `929`,
    1727: `929`,
    1728: `930`,
    1729: `930`,
    173: `46`,
    1730: `931`,
    1731: `932`,
    1732: `933`,
    1733: `933`,
    1734: `934`,
    1735: `934`,
    1736: `934`,
    1737: `936`,
    1738: `937`,
    1739: `937`,
    174: `47`,
    1740: `938`,
    1741: `938`,
    1742: `938`,
    1743: `940`,
    1744: `941`,
    1745: `941`,
    1746: `942`,
    1747: `942`,
    1748: `942`,
    1749: `944`,
    175: `47`,
    1750: `945`,
    1751: `945`,
    1752: `946`,
    1753: `946`,
    1754: `946`,
    1755: `948`,
    1756: `949`,
    1757: `949`,
    1758: `950`,
    1759: `950`,
    176: `48`,
    1760: `950`,
    1761: `952`,
    1762: `953`,
    1763: `953`,
    1764: `954`,
    1765: `954`,
    1766: `954`,
    1767: `956`,
    1768: `956`,
    1769: `957`,
    177: `49`,
    1770: `957`,
    1771: `957`,
    1772: `958`,
    1773: `959`,
    1774: `959`,
    1775: `960`,
    1776: `961`,
    1777: `962`,
    1778: `962`,
    1779: `963`,
    178: `50`,
    1780: `963`,
    1781: `964`,
    1782: `964`,
    1783: `964`,
    1784: `965`,
    1785: `965`,
    1786: `966`,
    1787: `966`,
    1788: `967`,
    1789: `967`,
    179: `51`,
    1790: `968`,
    1791: `969`,
    1792: `969`,
    1793: `970`,
    1794: `970`,
    1795: `971`,
    1796: `971`,
    1797: `972`,
    1798: `973`,
    1799: `973`,
    18: `2`,
    180: `51`,
    1800: `974`,
    1801: `974`,
    1802: `975`,
    1803: `975`,
    1804: `975`,
    1805: `976`,
    1806: `976`,
    1807: `977`,
    1808: `977`,
    1809: `978`,
    181: `52`,
    1810: `979`,
    1811: `980`,
    1812: `981`,
    1813: `981`,
    1814: `982`,
    1815: `982`,
    1816: `983`,
    1817: `983`,
    1818: `984`,
    1819: `985`,
    182: `52`,
    1820: `986`,
    1821: `987`,
    1822: `987`,
    1823: `988`,
    1824: `988`,
    1825: `989`,
    1826: `990`,
    1827: `990`,
    1828: `991`,
    1829: `992`,
    183: `53`,
    1830: `992`,
    1831: `993`,
    1832: `994`,
    1833: `994`,
    1834: `995`,
    1835: `996`,
    1836: `997`,
    1837: `997`,
    1838: `998`,
    1839: `999`,
    184: `53`,
    1840: `1000`,
    1841: `1000`,
    1842: `1001`,
    1843: `1001`,
    1844: `1002`,
    1845: `1002`,
    1846: `1003`,
    1847: `1003`,
    1848: `1005`,
    1849: `1005`,
    185: `54`,
    1850: `1006`,
    1851: `1006`,
    1852: `1006`,
    1853: `1006`,
    1854: `1006`,
    1855: `1006`,
    1856: `1007`,
    1857: `1007`,
    1858: `1008`,
    1859: `1008`,
    186: `54`,
    1860: `1010`,
    1861: `1011`,
    1862: `1011`,
    1863: `1012`,
    1864: `1012`,
    1865: `1013`,
    1866: `1013`,
    1867: `1014`,
    1868: `1014`,
    1869: `1014`,
    187: `55`,
    1870: `1015`,
    1871: `1015`,
    1872: `1016`,
    1873: `1016`,
    1874: `1016`,
    1875: `1017`,
    1876: `1018`,
    1877: `1018`,
    1878: `1019`,
    1879: `1019`,
    188: `56`,
    1880: `1019`,
    1881: `1020`,
    1882: `1021`,
    1883: `1021`,
    1884: `1022`,
    1885: `1022`,
    1886: `1022`,
    1887: `1023`,
    1888: `1024`,
    1889: `1024`,
    189: `56`,
    1890: `1025`,
    1891: `1025`,
    1892: `1025`,
    1893: `1026`,
    1894: `1027`,
    1895: `1027`,
    1896: `1032`,
    1897: `1032`,
    1898: `1033`,
    1899: `1033`,
    19: `2`,
    190: `57`,
    1900: `1035`,
    1901: `1035`,
    1902: `1036`,
    1903: `1036`,
    1904: `1038`,
    1905: `1038`,
    1906: `1039`,
    1907: `1039`,
    1908: `1040`,
    1909: `1047`,
    191: `58`,
    1910: `1047`,
    1911: `1048`,
    1912: `1049`,
    1913: `1049`,
    1914: `1050`,
    1915: `1051`,
    1916: `1051`,
    1917: `1052`,
    1918: `1053`,
    1919: `1054`,
    192: `58`,
    1920: `1055`,
    1921: `1055`,
    1922: `1055`,
    1923: `1056`,
    1924: `1056`,
    1925: `1056`,
    1926: `1057`,
    1927: `1058`,
    1928: `1058`,
    1929: `1059`,
    193: `59`,
    1930: `1059`,
    1931: `1059`,
    1932: `1059`,
    1933: `1059`,
    1934: `1059`,
    1935: `1059`,
    1936: `1059`,
    1937: `1059`,
    1938: `1059`,
    1939: `1060`,
    194: `60`,
    1940: `1060`,
    1941: `1061`,
    1942: `1062`,
    1943: `1063`,
    1944: `1063`,
    1945: `1064`,
    1946: `1065`,
    1947: `1065`,
    1948: `1066`,
    1949: `1067`,
    195: `61`,
    1950: `1068`,
    1951: `1068`,
    1952: `1069`,
    1953: `1070`,
    1954: `1070`,
    1955: `1071`,
    1956: `1072`,
    1957: `1079`,
    1958: `1079`,
    1959: `1080`,
    196: `61`,
    1960: `1080`,
    1961: `1080`,
    1962: `1081`,
    1963: `1081`,
    1964: `1082`,
    1965: `1083`,
    1966: `1083`,
    1967: `1084`,
    1968: `1085`,
    1969: `1085`,
    197: `62`,
    1970: `1086`,
    1971: `1087`,
    1972: `1087`,
    1973: `1088`,
    1974: `1088`,
    1975: `1089`,
    1976: `1089`,
    1977: `1090`,
    1978: `1091`,
    1979: `1091`,
    198: `62`,
    1980: `1092`,
    1981: `1092`,
    1982: `1093`,
    1983: `1093`,
    1984: `1094`,
    1985: `1094`,
    1986: `1094`,
    1987: `1096`,
    1988: `1096`,
    1989: `1097`,
    199: `62`,
    1990: `1097`,
    1991: `1097`,
    1992: `1098`,
    1993: `1099`,
    1994: `1099`,
    1995: `1100`,
    1996: `1101`,
    1997: `1102`,
    1998: `1102`,
    1999: `1103`,
    2: `2`,
    20: `2`,
    200: `63`,
    2000: `1103`,
    2001: `1104`,
    2002: `1104`,
    2003: `1105`,
    2004: `1106`,
    2005: `1106`,
    2006: `1107`,
    2007: `1107`,
    2008: `1108`,
    2009: `1108`,
    201: `63`,
    2010: `1108`,
    2011: `1109`,
    2012: `1109`,
    2013: `1110`,
    2014: `1110`,
    2015: `1111`,
    2016: `1112`,
    2017: `1113`,
    2018: `1114`,
    2019: `1114`,
    202: `64`,
    2020: `1115`,
    2021: `1115`,
    2022: `1116`,
    2023: `1116`,
    2024: `1117`,
    2025: `1118`,
    2026: `1119`,
    2027: `1120`,
    2028: `1120`,
    2029: `1121`,
    203: `64`,
    2030: `1121`,
    2031: `1122`,
    2032: `1123`,
    2033: `1123`,
    2034: `1124`,
    2035: `1125`,
    2036: `1125`,
    2037: `1126`,
    2038: `1127`,
    2039: `1127`,
    204: `64`,
    2040: `1128`,
    2041: `1129`,
    2042: `1130`,
    2043: `1130`,
    2044: `1131`,
    2045: `1132`,
    2046: `1133`,
    2047: `1133`,
    2048: `1134`,
    2049: `1134`,
    205: `65`,
    2050: `1135`,
    2051: `1135`,
    2052: `1136`,
    2053: `1136`,
    2054: `1138`,
    2055: `1138`,
    2056: `1139`,
    2057: `1139`,
    2058: `1139`,
    2059: `1139`,
    206: `66`,
    2060: `1139`,
    2061: `1139`,
    2062: `1140`,
    2063: `1140`,
    2064: `1141`,
    2065: `1141`,
    2066: `1143`,
    2067: `1144`,
    2068: `1144`,
    2069: `1145`,
    207: `66`,
    2070: `1145`,
    2071: `1146`,
    2072: `1146`,
    2073: `1147`,
    2074: `1147`,
    2075: `1147`,
    2076: `1148`,
    2077: `1148`,
    2078: `1149`,
    2079: `1149`,
    208: `67`,
    2080: `1149`,
    2081: `1150`,
    2082: `1151`,
    2083: `1151`,
    2084: `1152`,
    2085: `1152`,
    2086: `1152`,
    2087: `1153`,
    2088: `1154`,
    2089: `1154`,
    209: `67`,
    2090: `1155`,
    2091: `1155`,
    2092: `1155`,
    2093: `1156`,
    2094: `1157`,
    2095: `1157`,
    2096: `1158`,
    2097: `1158`,
    2098: `1158`,
    2099: `1159`,
    21: `2`,
    210: `67`,
    2100: `1160`,
    2101: `1160`,
    2102: `1163`,
    2103: `1163`,
    2104: `1164`,
    2105: `1164`,
    2106: `1166`,
    2107: `1166`,
    2108: `1167`,
    2109: `1167`,
    211: `68`,
    2110: `1168`,
    2111: `1175`,
    2112: `1175`,
    2113: `1176`,
    2114: `1177`,
    2115: `1177`,
    2116: `1178`,
    2117: `1179`,
    2118: `1179`,
    2119: `1180`,
    212: `69`,
    2120: `1181`,
    2121: `1182`,
    2122: `1183`,
    2123: `1183`,
    2124: `1183`,
    2125: `1184`,
    2126: `1184`,
    2127: `1184`,
    2128: `1185`,
    2129: `1186`,
    213: `69`,
    2130: `1186`,
    2131: `1187`,
    2132: `1187`,
    2133: `1187`,
    2134: `1187`,
    2135: `1187`,
    2136: `1187`,
    2137: `1187`,
    2138: `1187`,
    2139: `1187`,
    214: `70`,
    2140: `1187`,
    2141: `1188`,
    2142: `1188`,
    2143: `1189`,
    2144: `1190`,
    2145: `1191`,
    2146: `1191`,
    2147: `1192`,
    2148: `1193`,
    2149: `1193`,
    215: `70`,
    2150: `1194`,
    2151: `1195`,
    2152: `1196`,
    2153: `1196`,
    2154: `1197`,
    2155: `1198`,
    2156: `1198`,
    2157: `1199`,
    2158: `1200`,
    2159: `1207`,
    216: `70`,
    2160: `1207`,
    2161: `1208`,
    2162: `1208`,
    2163: `1208`,
    2164: `1209`,
    2165: `1209`,
    2166: `1210`,
    2167: `1211`,
    2168: `1211`,
    2169: `1212`,
    217: `71`,
    2170: `1213`,
    2171: `1213`,
    2172: `1214`,
    2173: `1215`,
    2174: `1215`,
    2175: `1216`,
    2176: `1216`,
    2177: `1217`,
    2178: `1217`,
    2179: `1218`,
    218: `72`,
    2180: `1219`,
    2181: `1219`,
    2182: `1220`,
    2183: `1220`,
    2184: `1221`,
    2185: `1221`,
    2186: `1222`,
    2187: `1222`,
    2188: `1222`,
    2189: `1224`,
    219: `72`,
    2190: `1224`,
    2191: `1225`,
    2192: `1225`,
    2193: `1225`,
    2194: `1226`,
    2195: `1227`,
    2196: `1227`,
    2197: `1228`,
    2198: `1229`,
    2199: `1230`,
    22: `2`,
    220: `73`,
    2200: `1230`,
    2201: `1231`,
    2202: `1231`,
    2203: `1232`,
    2204: `1232`,
    2205: `1233`,
    2206: `1234`,
    2207: `1234`,
    2208: `1235`,
    2209: `1235`,
    221: `73`,
    2210: `1236`,
    2211: `1236`,
    2212: `1236`,
    2213: `1237`,
    2214: `1237`,
    2215: `1238`,
    2216: `1238`,
    2217: `1239`,
    2218: `1240`,
    2219: `1241`,
    222: `73`,
    2220: `1242`,
    2221: `1242`,
    2222: `1243`,
    2223: `1243`,
    2224: `1244`,
    2225: `1244`,
    2226: `1245`,
    2227: `1246`,
    2228: `1247`,
    2229: `1248`,
    223: `74`,
    2230: `1248`,
    2231: `1249`,
    2232: `1249`,
    2233: `1250`,
    2234: `1251`,
    2235: `1251`,
    2236: `1252`,
    2237: `1253`,
    2238: `1253`,
    2239: `1254`,
    224: `75`,
    2240: `1255`,
    2241: `1255`,
    2242: `1256`,
    2243: `1257`,
    2244: `1258`,
    2245: `1258`,
    2246: `1259`,
    2247: `1260`,
    2248: `1261`,
    2249: `1261`,
    225: `76`,
    2250: `1262`,
    2251: `1262`,
    2252: `1263`,
    2253: `1263`,
    2254: `1264`,
    2255: `1264`,
    2256: `1266`,
    2257: `1266`,
    2258: `1267`,
    2259: `1267`,
    226: `76`,
    2260: `1267`,
    2261: `1267`,
    2262: `1267`,
    2263: `1267`,
    2264: `1268`,
    2265: `1268`,
    2266: `1269`,
    2267: `1269`,
    2268: `1271`,
    2269: `1272`,
    227: `78`,
    2270: `1272`,
    2271: `1273`,
    2272: `1273`,
    2273: `1274`,
    2274: `1274`,
    2275: `1275`,
    2276: `1275`,
    2277: `1275`,
    2278: `1276`,
    2279: `1276`,
    228: `78`,
    2280: `1277`,
    2281: `1277`,
    2282: `1277`,
    2283: `1278`,
    2284: `1279`,
    2285: `1279`,
    2286: `1280`,
    2287: `1280`,
    2288: `1280`,
    2289: `1281`,
    229: `79`,
    2290: `1282`,
    2291: `1282`,
    2292: `1283`,
    2293: `1283`,
    2294: `1283`,
    2295: `1284`,
    2296: `1285`,
    2297: `1285`,
    2298: `1286`,
    2299: `1286`,
    23: `2`,
    230: `80`,
    2300: `1286`,
    2301: `1287`,
    2302: `1288`,
    2303: `1288`,
    2304: `1291`,
    2305: `1291`,
    2306: `1292`,
    2307: `1292`,
    2308: `1294`,
    2309: `1294`,
    231: `81`,
    2310: `1295`,
    2311: `1295`,
    2312: `1296`,
    2313: `1303`,
    2314: `1303`,
    2315: `1304`,
    2316: `1305`,
    2317: `1305`,
    2318: `1306`,
    2319: `1307`,
    232: `84`,
    2320: `1307`,
    2321: `1308`,
    2322: `1309`,
    2323: `1310`,
    2324: `1311`,
    2325: `1311`,
    2326: `1311`,
    2327: `1312`,
    2328: `1312`,
    2329: `1312`,
    233: `84`,
    2330: `1313`,
    2331: `1314`,
    2332: `1314`,
    2333: `1315`,
    2334: `1315`,
    2335: `1315`,
    2336: `1315`,
    2337: `1315`,
    2338: `1315`,
    2339: `1315`,
    234: `84`,
    2340: `1315`,
    2341: `1315`,
    2342: `1315`,
    2343: `1316`,
    2344: `1316`,
    2345: `1317`,
    2346: `1318`,
    2347: `1319`,
    2348: `1319`,
    2349: `1320`,
    235: `84`,
    2350: `1321`,
    2351: `1321`,
    2352: `1322`,
    2353: `1323`,
    2354: `1324`,
    2355: `1324`,
    2356: `1325`,
    2357: `1326`,
    2358: `1326`,
    2359: `1327`,
    236: `84`,
    2360: `1328`,
    2361: `1335`,
    2362: `1335`,
    2363: `1336`,
    2364: `1336`,
    2365: `1336`,
    2366: `1337`,
    2367: `1337`,
    2368: `1338`,
    2369: `1339`,
    237: `84`,
    2370: `1339`,
    2371: `1340`,
    2372: `1341`,
    2373: `1341`,
    2374: `1342`,
    2375: `1343`,
    2376: `1343`,
    2377: `1344`,
    2378: `1344`,
    2379: `1345`,
    238: `85`,
    2380: `1345`,
    2381: `1346`,
    2382: `1347`,
    2383: `1347`,
    2384: `1348`,
    2385: `1348`,
    2386: `1349`,
    2387: `1349`,
    2388: `1350`,
    2389: `1350`,
    239: `85`,
    2390: `1350`,
    2391: `1352`,
    2392: `1353`,
    2393: `1353`,
    2394: `1354`,
    2395: `1355`,
    2396: `1355`,
    2397: `1356`,
    2398: `1357`,
    2399: `1358`,
    24: `2`,
    240: `86`,
    2400: `1359`,
    2401: `1360`,
    2402: `1360`,
    2403: `1361`,
    2404: `1362`,
    2405: `1363`,
    2406: `1363`,
    2407: `1364`,
    2408: `1364`,
    2409: `1364`,
    241: `87`,
    2410: `1365`,
    2411: `1365`,
    2412: `1366`,
    2413: `1367`,
    2414: `1367`,
    2415: `1368`,
    2416: `1369`,
    2417: `1370`,
    2418: `1371`,
    2419: `1372`,
    242: `89`,
    2420: `1372`,
    2421: `1373`,
    2422: `1373`,
    2423: `1374`,
    2424: `1374`,
    2425: `1375`,
    2426: `1376`,
    2427: `1377`,
    2428: `1377`,
    2429: `1378`,
    243: `90`,
    2430: `1378`,
    2431: `1379`,
    2432: `1379`,
    2433: `1380`,
    2434: `1380`,
    2435: `1380`,
    2436: `1382`,
    2437: `1382`,
    2438: `1383`,
    2439: `1383`,
    244: `92`,
    2440: `1383`,
    2441: `1384`,
    2442: `1384`,
    2443: `1385`,
    2444: `1385`,
    2445: `1386`,
    2446: `1386`,
    2447: `1386`,
    2448: `1387`,
    2449: `1387`,
    245: `92`,
    2450: `1388`,
    2451: `1389`,
    2452: `1389`,
    2453: `1390`,
    2454: `1390`,
    2455: `1390`,
    2456: `1391`,
    2457: `1391`,
    2458: `1392`,
    2459: `1392`,
    246: `92`,
    2460: `1392`,
    2461: `1393`,
    2462: `1394`,
    2463: `1394`,
    2464: `1395`,
    2465: `1395`,
    2466: `1395`,
    2467: `1396`,
    2468: `1397`,
    2469: `1397`,
    247: `93`,
    2470: `1398`,
    2471: `1398`,
    2472: `1398`,
    2473: `1399`,
    2474: `1400`,
    2475: `1400`,
    2476: `1401`,
    2477: `1401`,
    2478: `1401`,
    2479: `1402`,
    248: `93`,
    2480: `1403`,
    2481: `1404`,
    2482: `1404`,
    2483: `1405`,
    2484: `1406`,
    2485: `1407`,
    2486: `1407`,
    2487: `1408`,
    2488: `1408`,
    2489: `1408`,
    249: `95`,
    2490: `1409`,
    2491: `1409`,
    2492: `1410`,
    2493: `1411`,
    2494: `1411`,
    2495: `1412`,
    2496: `1413`,
    2497: `1414`,
    2498: `1415`,
    2499: `1416`,
    25: `2`,
    250: `95`,
    2500: `1416`,
    2501: `1417`,
    2502: `1417`,
    2503: `1418`,
    2504: `1418`,
    2505: `1419`,
    2506: `1420`,
    2507: `1421`,
    2508: `1421`,
    2509: `1422`,
    251: `96`,
    2510: `1422`,
    2511: `1423`,
    2512: `1423`,
    2513: `1424`,
    2514: `1424`,
    2515: `1424`,
    2516: `1426`,
    2517: `1426`,
    2518: `1427`,
    2519: `1427`,
    252: `97`,
    2520: `1427`,
    2521: `1428`,
    2522: `1428`,
    2523: `1429`,
    2524: `1430`,
    2525: `1430`,
    2526: `1431`,
    2527: `1432`,
    2528: `1433`,
    2529: `1434`,
    253: `98`,
    2530: `1435`,
    2531: `1435`,
    2532: `1436`,
    2533: `1436`,
    2534: `1436`,
    2535: `1437`,
    2536: `1438`,
    2537: `1439`,
    2538: `1439`,
    2539: `1440`,
    254: `98`,
    2540: `1440`,
    2541: `1440`,
    2542: `1441`,
    2543: `1441`,
    2544: `1442`,
    2545: `1443`,
    2546: `1443`,
    2547: `1444`,
    2548: `1445`,
    2549: `1446`,
    255: `99`,
    2550: `1447`,
    2551: `1448`,
    2552: `1448`,
    2553: `1449`,
    2554: `1449`,
    2555: `1450`,
    2556: `1450`,
    2557: `1451`,
    2558: `1452`,
    2559: `1453`,
    256: `100`,
    2560: `1453`,
    2561: `1454`,
    2562: `1454`,
    2563: `1455`,
    2564: `1455`,
    2565: `1456`,
    2566: `1456`,
    2567: `1456`,
    2568: `1458`,
    2569: `1458`,
    257: `100`,
    2570: `1459`,
    2571: `1459`,
    2572: `1459`,
    2573: `1460`,
    2574: `1460`,
    2575: `1461`,
    2576: `1462`,
    2577: `1462`,
    2578: `1463`,
    2579: `1464`,
    258: `101`,
    2580: `1465`,
    2581: `1466`,
    2582: `1467`,
    2583: `1467`,
    2584: `1468`,
    2585: `1469`,
    2586: `1469`,
    2587: `1470`,
    2588: `1470`,
    2589: `1471`,
    259: `102`,
    2590: `1471`,
    2591: `1472`,
    2592: `1472`,
    2593: `1472`,
    2594: `1474`,
    2595: `1474`,
    2596: `1475`,
    2597: `1476`,
    2598: `1476`,
    2599: `1477`,
    26: `2`,
    260: `103`,
    2600: `1478`,
    2601: `1479`,
    2602: `1479`,
    2603: `1480`,
    2604: `1482`,
    2605: `1483`,
    2606: `1483`,
    2607: `1485`,
    2608: `1485`,
    2609: `1486`,
    261: `104`,
    2610: `1486`,
    2611: `1486`,
    2612: `1487`,
    2613: `1487`,
    2614: `1487`,
    2615: `1488`,
    2616: `1488`,
    2617: `1489`,
    2618: `1489`,
    2619: `1489`,
    262: `104`,
    2620: `1490`,
    2621: `1490`,
    2622: `1491`,
    2623: `1492`,
    2624: `1492`,
    2625: `1493`,
    2626: `1494`,
    2627: `1495`,
    2628: `1496`,
    2629: `1497`,
    263: `106`,
    2630: `1497`,
    2631: `1498`,
    2632: `1499`,
    2633: `1499`,
    2634: `1500`,
    2635: `1500`,
    2636: `1501`,
    2637: `1501`,
    2638: `1502`,
    2639: `1503`,
    264: `106`,
    2640: `1503`,
    2641: `1504`,
    2642: `1505`,
    2643: `1505`,
    2644: `1506`,
    2645: `1506`,
    2646: `1507`,
    2647: `1507`,
    2648: `1508`,
    2649: `1508`,
    265: `107`,
    2650: `1508`,
    2651: `1511`,
    2652: `1511`,
    2653: `1512`,
    2654: `1512`,
    2655: `1513`,
    2656: `1514`,
    2657: `1514`,
    2658: `1515`,
    2659: `1516`,
    266: `107`,
    2660: `1517`,
    2661: `1517`,
    2662: `1518`,
    2663: `1518`,
    2664: `1519`,
    2665: `1519`,
    2666: `1519`,
    2667: `1521`,
    2668: `1522`,
    2669: `1522`,
    267: `108`,
    2670: `1523`,
    2671: `1524`,
    2672: `1524`,
    2673: `1525`,
    2674: `1525`,
    2675: `1526`,
    2676: `1526`,
    2677: `1527`,
    2678: `1528`,
    2679: `1530`,
    268: `109`,
    2680: `1530`,
    2681: `1530`,
    2682: `1532`,
    2683: `1532`,
    2684: `1533`,
    2685: `1533`,
    2686: `1533`,
    2687: `1534`,
    2688: `1534`,
    2689: `1535`,
    269: `110`,
    2690: `1535`,
    2691: `1535`,
    2692: `1537`,
    2693: `1537`,
    2694: `1537`,
    2695: `1539`,
    2696: `1539`,
    2697: `1539`,
    2698: `1540`,
    2699: `1541`,
    27: `2`,
    270: `110`,
    2700: `1541`,
    2701: `1541`,
    2702: `1542`,
    2703: `1543`,
    2704: `1543`,
    2705: `1543`,
    2706: `1544`,
    2707: `1545`,
    2708: `1545`,
    2709: `1546`,
    271: `110`,
    2710: `1546`,
    2711: `1547`,
    2712: `1547`,
    2713: `1548`,
    2714: `1548`,
    2715: `1548`,
    2716: `1550`,
    2717: `1551`,
    2718: `1553`,
    2719: `1554`,
    272: `111`,
    2720: `1555`,
    2721: `1556`,
    2722: `1556`,
    2723: `1557`,
    2724: `1557`,
    2725: `1558`,
    2726: `1558`,
    2727: `1558`,
    2728: `1559`,
    2729: `1561`,
    273: `111`,
    2730: `1562`,
    2731: `1563`,
    2732: `1563`,
    2733: `1563`,
    2734: `1564`,
    2735: `1565`,
    2736: `1565`,
    2737: `1568`,
    2738: `1568`,
    2739: `1569`,
    274: `112`,
    2740: `1569`,
    2741: `1570`,
    2742: `1571`,
    2743: `1572`,
    2744: `1573`,
    2745: `1573`,
    2746: `1574`,
    2747: `1575`,
    2748: `1575`,
    2749: `1576`,
    275: `113`,
    2750: `1576`,
    2751: `1577`,
    2752: `1577`,
    2753: `1578`,
    2754: `1579`,
    2755: `1580`,
    2756: `1580`,
    2757: `1581`,
    2758: `1582`,
    2759: `1583`,
    276: `114`,
    2760: `1584`,
    2761: `1584`,
    2762: `1585`,
    2763: `1586`,
    2764: `1587`,
    2765: `1589`,
    2766: `1590`,
    2767: `1591`,
    2768: `1591`,
    2769: `1592`,
    277: `114`,
    2770: `1593`,
    2771: `1594`,
    2772: `1595`,
    2773: `1596`,
    2774: `1597`,
    2775: `1599`,
    2776: `1600`,
    2777: `1600`,
    2778: `1601`,
    2779: `1603`,
    278: `115`,
    2780: `1603`,
    2781: `1604`,
    2782: `1604`,
    2783: `1605`,
    2784: `1606`,
    2785: `1607`,
    2786: `1607`,
    2787: `1607`,
    2788: `1608`,
    2789: `1608`,
    279: `115`,
    2790: `1608`,
    2791: `1610`,
    2792: `1611`,
    2793: `1611`,
    2794: `1611`,
    2795: `1613`,
    2796: `1614`,
    2797: `1615`,
    2798: `1616`,
    2799: `1617`,
    28: `2`,
    280: `116`,
    2800: `1617`,
    2801: `1618`,
    2802: `1619`,
    2803: `1620`,
    2804: `1621`,
    2805: `1623`,
    2806: `1624`,
    2807: `1624`,
    2808: `1624`,
    2809: `1625`,
    281: `116`,
    2810: `1626`,
    2811: `1627`,
    2812: `1628`,
    2813: `1629`,
    2814: `1631`,
    2815: `1632`,
    2816: `1632`,
    2817: `1632`,
    2818: `1633`,
    2819: `1633`,
    282: `116`,
    2820: `1634`,
    2821: `1635`,
    2822: `1635`,
    2823: `1636`,
    2824: `1636`,
    2825: `1636`,
    2826: `1637`,
    2827: `1638`,
    2828: `1638`,
    2829: `1639`,
    283: `117`,
    2830: `1639`,
    2831: `1639`,
    2832: `1640`,
    2833: `1641`,
    2834: `1641`,
    2835: `1642`,
    2836: `1644`,
    2837: `1645`,
    2838: `1645`,
    2839: `1646`,
    284: `117`,
    285: `118`,
    286: `118`,
    287: `118`,
    288: `118`,
    289: `118`,
    29: `2`,
    290: `118`,
    291: `119`,
    292: `119`,
    293: `120`,
    294: `121`,
    295: `122`,
    296: `122`,
    297: `123`,
    298: `124`,
    299: `126`,
    3: `2`,
    30: `2`,
    300: `126`,
    301: `127`,
    302: `127`,
    303: `127`,
    304: `128`,
    305: `128`,
    306: `129`,
    307: `130`,
    308: `131`,
    309: `131`,
    31: `2`,
    310: `131`,
    311: `131`,
    312: `131`,
    313: `131`,
    314: `131`,
    315: `131`,
    316: `132`,
    317: `132`,
    318: `132`,
    319: `134`,
    32: `2`,
    320: `134`,
    321: `134`,
    322: `135`,
    323: `136`,
    324: `136`,
    325: `136`,
    326: `137`,
    327: `137`,
    328: `138`,
    329: `138`,
    33: `2`,
    330: `140`,
    331: `140`,
    332: `141`,
    333: `142`,
    334: `143`,
    335: `143`,
    336: `144`,
    337: `145`,
    338: `145`,
    339: `146`,
    34: `2`,
    340: `147`,
    341: `148`,
    342: `149`,
    343: `149`,
    344: `150`,
    345: `150`,
    346: `150`,
    347: `152`,
    348: `152`,
    349: `153`,
    35: `2`,
    350: `153`,
    351: `153`,
    352: `154`,
    353: `155`,
    354: `155`,
    355: `156`,
    356: `157`,
    357: `158`,
    358: `158`,
    359: `158`,
    36: `2`,
    360: `158`,
    361: `158`,
    362: `158`,
    363: `158`,
    364: `158`,
    365: `158`,
    366: `158`,
    367: `158`,
    368: `158`,
    369: `158`,
    37: `2`,
    370: `158`,
    371: `158`,
    372: `158`,
    373: `158`,
    374: `158`,
    375: `159`,
    376: `159`,
    377: `159`,
    378: `161`,
    379: `161`,
    38: `2`,
    380: `162`,
    381: `163`,
    382: `164`,
    383: `164`,
    384: `165`,
    385: `165`,
    386: `166`,
    387: `166`,
    388: `166`,
    389: `167`,
    39: `2`,
    390: `168`,
    391: `168`,
    392: `169`,
    393: `170`,
    394: `171`,
    395: `171`,
    396: `171`,
    397: `171`,
    398: `171`,
    399: `171`,
    4: `2`,
    40: `2`,
    400: `171`,
    401: `171`,
    402: `171`,
    403: `171`,
    404: `171`,
    405: `171`,
    406: `171`,
    407: `171`,
    408: `171`,
    409: `171`,
    41: `2`,
    410: `171`,
    411: `171`,
    412: `172`,
    413: `172`,
    414: `172`,
    415: `174`,
    416: `174`,
    417: `175`,
    418: `175`,
    419: `176`,
    42: `2`,
    420: `176`,
    421: `176`,
    422: `177`,
    423: `177`,
    424: `177`,
    425: `178`,
    426: `179`,
    427: `180`,
    428: `180`,
    429: `181`,
    43: `2`,
    430: `182`,
    431: `190`,
    432: `190`,
    433: `191`,
    434: `192`,
    435: `193`,
    436: `194`,
    437: `195`,
    438: `195`,
    439: `196`,
    44: `2`,
    440: `196`,
    441: `196`,
    442: `197`,
    443: `197`,
    444: `198`,
    445: `198`,
    446: `198`,
    447: `199`,
    448: `200`,
    449: `200`,
    45: `2`,
    450: `201`,
    451: `201`,
    452: `201`,
    453: `202`,
    454: `203`,
    455: `203`,
    456: `204`,
    457: `204`,
    458: `204`,
    459: `205`,
    46: `2`,
    460: `206`,
    461: `206`,
    462: `207`,
    463: `207`,
    464: `207`,
    465: `208`,
    466: `209`,
    467: `209`,
    468: `210`,
    469: `210`,
    47: `2`,
    470: `210`,
    471: `210`,
    472: `210`,
    473: `210`,
    474: `210`,
    475: `210`,
    476: `210`,
    477: `210`,
    478: `211`,
    479: `211`,
    48: `2`,
    480: `212`,
    481: `213`,
    482: `214`,
    483: `214`,
    484: `215`,
    485: `215`,
    486: `216`,
    487: `216`,
    488: `217`,
    489: `217`,
    49: `2`,
    490: `219`,
    491: `219`,
    492: `220`,
    493: `220`,
    494: `220`,
    495: `221`,
    496: `222`,
    497: `222`,
    498: `222`,
    499: `224`,
    5: `2`,
    50: `2`,
    500: `224`,
    501: `225`,
    502: `225`,
    503: `226`,
    504: `227`,
    505: `229`,
    506: `229`,
    507: `229`,
    508: `231`,
    509: `232`,
    51: `2`,
    510: `232`,
    511: `233`,
    512: `233`,
    513: `234`,
    514: `234`,
    515: `234`,
    516: `236`,
    517: `236`,
    518: `237`,
    519: `237`,
    52: `2`,
    520: `237`,
    521: `238`,
    522: `238`,
    523: `238`,
    524: `240`,
    525: `240`,
    526: `241`,
    527: `242`,
    528: `242`,
    529: `243`,
    53: `2`,
    530: `243`,
    531: `244`,
    532: `245`,
    533: `245`,
    534: `246`,
    535: `247`,
    536: `248`,
    537: `248`,
    538: `249`,
    539: `250`,
    54: `2`,
    540: `251`,
    541: `252`,
    542: `252`,
    543: `253`,
    544: `254`,
    545: `255`,
    546: `256`,
    547: `256`,
    548: `257`,
    549: `257`,
    55: `2`,
    550: `257`,
    551: `259`,
    552: `259`,
    553: `260`,
    554: `261`,
    555: `262`,
    556: `262`,
    557: `263`,
    558: `263`,
    559: `264`,
    56: `2`,
    560: `264`,
    561: `264`,
    562: `265`,
    563: `265`,
    564: `266`,
    565: `266`,
    566: `267`,
    567: `267`,
    568: `267`,
    569: `268`,
    57: `2`,
    570: `268`,
    571: `269`,
    572: `269`,
    573: `269`,
    574: `269`,
    575: `269`,
    576: `269`,
    577: `270`,
    578: `270`,
    579: `271`,
    58: `2`,
    580: `272`,
    581: `273`,
    582: `273`,
    583: `274`,
    584: `275`,
    585: `275`,
    586: `276`,
    587: `277`,
    588: `279`,
    589: `279`,
    59: `2`,
    590: `280`,
    591: `280`,
    592: `280`,
    593: `281`,
    594: `281`,
    595: `282`,
    596: `282`,
    597: `282`,
    598: `283`,
    599: `283`,
    6: `2`,
    60: `2`,
    600: `284`,
    601: `284`,
    602: `285`,
    603: `285`,
    604: `285`,
    605: `286`,
    606: `286`,
    607: `287`,
    608: `287`,
    609: `288`,
    61: `2`,
    610: `288`,
    611: `288`,
    612: `289`,
    613: `289`,
    614: `290`,
    615: `290`,
    616: `291`,
    617: `292`,
    618: `293`,
    619: `293`,
    62: `2`,
    620: `294`,
    621: `295`,
    622: `296`,
    623: `297`,
    624: `297`,
    625: `297`,
    626: `298`,
    627: `298`,
    628: `299`,
    629: `299`,
    63: `2`,
    630: `300`,
    631: `300`,
    632: `301`,
    633: `302`,
    634: `302`,
    635: `302`,
    636: `303`,
    637: `304`,
    638: `304`,
    639: `306`,
    64: `2`,
    640: `306`,
    641: `307`,
    642: `307`,
    643: `308`,
    644: `309`,
    645: `310`,
    646: `311`,
    647: `311`,
    648: `312`,
    649: `312`,
    65: `2`,
    650: `313`,
    651: `314`,
    652: `315`,
    653: `319`,
    654: `319`,
    655: `319`,
    656: `319`,
    657: `319`,
    658: `319`,
    659: `319`,
    66: `2`,
    660: `319`,
    661: `319`,
    662: `319`,
    663: `319`,
    664: `319`,
    665: `319`,
    666: `319`,
    667: `319`,
    668: `319`,
    669: `319`,
    67: `2`,
    670: `319`,
    671: `319`,
    672: `319`,
    673: `319`,
    674: `319`,
    675: `319`,
    676: `319`,
    677: `319`,
    678: `319`,
    679: `319`,
    68: `2`,
    680: `319`,
    681: `319`,
    682: `319`,
    683: `319`,
    684: `319`,
    685: `319`,
    686: `319`,
    687: `319`,
    688: `319`,
    689: `319`,
    69: `2`,
    690: `319`,
    691: `319`,
    692: `319`,
    693: `319`,
    694: `319`,
    695: `319`,
    696: `319`,
    697: `319`,
    698: `319`,
    699: `319`,
    7: `2`,
    70: `2`,
    700: `319`,
    701: `319`,
    702: `319`,
    703: `319`,
    704: `319`,
    705: `319`,
    706: `319`,
    707: `319`,
    708: `319`,
    709: `319`,
    71: `2`,
    710: `319`,
    711: `319`,
    712: `319`,
    713: `319`,
    714: `319`,
    715: `319`,
    716: `319`,
    717: `319`,
    718: `319`,
    719: `319`,
    72: `2`,
    720: `319`,
    721: `319`,
    722: `319`,
    723: `319`,
    724: `319`,
    725: `319`,
    726: `319`,
    727: `319`,
    728: `319`,
    729: `319`,
    73: `2`,
    730: `319`,
    731: `319`,
    732: `319`,
    733: `319`,
    734: `319`,
    735: `319`,
    736: `319`,
    737: `319`,
    738: `319`,
    739: `319`,
    74: `2`,
    740: `319`,
    741: `319`,
    742: `319`,
    743: `319`,
    744: `319`,
    745: `319`,
    746: `319`,
    747: `319`,
    748: `319`,
    749: `319`,
    75: `2`,
    750: `319`,
    751: `319`,
    752: `319`,
    753: `319`,
    754: `319`,
    755: `319`,
    756: `319`,
    757: `319`,
    758: `319`,
    759: `319`,
    76: `2`,
    760: `319`,
    761: `319`,
    762: `319`,
    763: `319`,
    764: `319`,
    765: `319`,
    766: `319`,
    767: `319`,
    768: `319`,
    769: `319`,
    77: `4`,
    770: `319`,
    771: `319`,
    772: `319`,
    773: `319`,
    774: `319`,
    775: `319`,
    776: `319`,
    777: `319`,
    778: `319`,
    779: `319`,
    78: `4`,
    780: `319`,
    781: `319`,
    782: `319`,
    783: `319`,
    784: `319`,
    785: `319`,
    786: `320`,
    787: `320`,
    788: `321`,
    789: `322`,
    79: `5`,
    790: `322`,
    791: `323`,
    792: `324`,
    793: `325`,
    794: `325`,
    795: `326`,
    796: `327`,
    797: `328`,
    798: `329`,
    799: `329`,
    8: `2`,
    80: `5`,
    800: `330`,
    801: `331`,
    802: `331`,
    803: `332`,
    804: `333`,
    805: `333`,
    806: `334`,
    807: `335`,
    808: `335`,
    809: `336`,
    81: `5`,
    810: `337`,
    811: `338`,
    812: `338`,
    813: `339`,
    814: `340`,
    815: `340`,
    816: `341`,
    817: `342`,
    818: `342`,
    819: `343`,
    82: `6`,
    820: `343`,
    821: `344`,
    822: `344`,
    823: `345`,
    824: `345`,
    825: `345`,
    826: `347`,
    827: `347`,
    828: `347`,
    829: `348`,
    83: `7`,
    830: `348`,
    831: `348`,
    832: `348`,
    833: `350`,
    834: `350`,
    835: `351`,
    836: `352`,
    837: `352`,
    838: `353`,
    839: `353`,
    84: `8`,
    840: `353`,
    841: `354`,
    842: `354`,
    843: `355`,
    844: `355`,
    845: `355`,
    846: `357`,
    847: `357`,
    848: `357`,
    849: `358`,
    85: `9`,
    850: `358`,
    851: `358`,
    852: `359`,
    853: `359`,
    854: `360`,
    855: `360`,
    856: `360`,
    857: `362`,
    858: `363`,
    859: `363`,
    86: `10`,
    860: `364`,
    861: `365`,
    862: `366`,
    863: `366`,
    864: `367`,
    865: `367`,
    866: `368`,
    867: `369`,
    868: `370`,
    869: `371`,
    87: `11`,
    870: `371`,
    871: `372`,
    872: `373`,
    873: `374`,
    874: `375`,
    875: `375`,
    876: `376`,
    877: `377`,
    878: `378`,
    879: `378`,
    88: `11`,
    880: `378`,
    881: `379`,
    882: `379`,
    883: `379`,
    884: `380`,
    885: `381`,
    886: `382`,
    887: `384`,
    888: `384`,
    889: `385`,
    89: `12`,
    890: `385`,
    891: `386`,
    892: `387`,
    893: `387`,
    894: `388`,
    895: `388`,
    896: `388`,
    897: `389`,
    898: `390`,
    899: `391`,
    9: `2`,
    90: `12`,
    900: `391`,
    901: `392`,
    902: `392`,
    903: `392`,
    904: `393`,
    905: `394`,
    906: `394`,
    907: `395`,
    908: `395`,
    909: `396`,
    91: `13`,
    910: `396`,
    911: `396`,
    912: `397`,
    913: `398`,
    914: `398`,
    915: `399`,
    916: `399`,
    917: `400`,
    918: `400`,
    919: `400`,
    92: `14`,
    920: `401`,
    921: `401`,
    922: `402`,
    923: `403`,
    924: `404`,
    925: `404`,
    926: `405`,
    927: `405`,
    928: `406`,
    929: `406`,
    93: `14`,
    930: `406`,
    931: `407`,
    932: `407`,
    933: `408`,
    934: `409`,
    935: `410`,
    936: `410`,
    937: `411`,
    938: `412`,
    939: `412`,
    94: `15`,
    940: `412`,
    941: `413`,
    942: `413`,
    943: `414`,
    944: `415`,
    945: `416`,
    946: `417`,
    947: `417`,
    948: `418`,
    949: `419`,
    95: `16`,
    950: `419`,
    951: `420`,
    952: `421`,
    953: `422`,
    954: `423`,
    955: `423`,
    956: `424`,
    957: `425`,
    958: `426`,
    959: `428`,
    96: `17`,
    960: `428`,
    961: `428`,
    962: `429`,
    963: `429`,
    964: `429`,
    965: `431`,
    966: `431`,
    967: `432`,
    968: `439`,
    969: `439`,
    97: `18`,
    970: `440`,
    971: `440`,
    972: `441`,
    973: `441`,
    974: `442`,
    975: `443`,
    976: `443`,
    977: `444`,
    978: `444`,
    979: `445`,
    98: `19`,
    980: `446`,
    981: `447`,
    982: `447`,
    983: `448`,
    984: `448`,
    985: `449`,
    986: `450`,
    987: `450`,
    988: `453`,
    989: `453`,
    99: `20`,
    990: `454`,
    991: `454`,
    992: `455`,
    993: `455`,
    994: `456`,
    995: `457`,
    996: `457`,
    997: `458`,
    998: `459`,
    999: `459`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 6,
  stateSize: 754,
  unsupported: [],
  version: 13,
  warnings: [`API Umvir_support may use up to 9 transaction references, but the limit is 8. API Umvir_support starts at /app/index.rsh:424:31:application.`, `Step 2 calls a remote object at /app/index.rsh:534:17:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:546:17:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:558:17:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 9 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:424:31:dot.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:599:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:424:31:after expr stmt semicolon',
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
  "Umvir_propose": Umvir_propose,
  "Umvir_support": Umvir_support,
  "register": register
  };
export const _APIs = {
  Umvir: {
    propose: Umvir_propose,
    support: Umvir_support
    },
  register: register
  };
