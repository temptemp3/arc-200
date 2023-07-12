// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    minBal: (() => {
      
      
      return stdlib.checkedBigNumberify('./index.rsh:4:23:decimal', stdlib.UInt_max, '100000');})()
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    inToken: ctc0,
    manager: ctc2,
    outToken: ctc1,
    tokenAmount: ctc3
    });
  const ctc5 = stdlib.T_Struct([['manager', ctc2], ['inToken', ctc0], ['outToken', ctc1], ['tokenAmount', ctc3]]);
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v387, v388, v398] = svs;
      return (await ((async () => {
        
        const v409 = v398.manager;
        const v410 = v398.inToken;
        const v411 = v398.outToken;
        const v412 = v398.tokenAmount;
        const v413 = {
          inToken: v410,
          manager: v409,
          outToken: v411,
          tokenAmount: v412
          };
        
        return v413;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        dom: [],
        rng: ctc5
        }
      },
    views: {
      3: [ctc0, ctc1, ctc4]
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Object({
    inToken: ctc0,
    outToken: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    deposit0_79: ctc5,
    withdraw0_79: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  
  
  const v379 = stdlib.protect(ctc2, interact.params, 'for Deployer\'s interact field params');
  const v380 = v379.inToken;
  const v381 = v379.outToken;
  
  const txn1 = await (ctc.sendrecv({
    args: [v380, v381],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v387, v388], secs: v390, time: v389, didSend: v32, from: v386 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v387
        });
      ;
      const v395 = await ctc.getContractInfo();
      
      const v397 = {
        inToken: v387,
        manager: v386,
        outToken: v388,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v398 = v397;
      const v399 = v389;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v387
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
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v387, v388], secs: v390, time: v389, didSend: v32, from: v386 } = txn1;
  ;
  ;
  const v395 = await ctc.getContractInfo();
  stdlib.protect(ctc3, await interact.ready(v395), {
    at: './index.rsh:36:19:application',
    fs: ['at ./index.rsh:36:19:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)', 'at ./index.rsh:36:19:application call to "liftedInteract" (defined at: ./index.rsh:36:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v397 = {
    inToken: v387,
    manager: v386,
    outToken: v388,
    tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v398 = v397;
  let v399 = v389;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v462], secs: v464, time: v463, didSend: v260, from: v461 } = txn3;
    switch (v462[0]) {
      case 'deposit0_79': {
        const v465 = v462[1];
        undefined /* setApiDetails */;
        const v470 = v465[stdlib.checkedBigNumberify('./index.rsh:55:10:spread', stdlib.UInt_max, '0')];
        ;
        ;
        const v500 = stdlib.cast("UInt", "UInt256", v470, false, true);
        const v503 = [];
        const v504 = undefined /* Remote */;
        const v505 = await txn3.getOutput('internal', 'v504', ctc8, v504);
        const v507 = v505[stdlib.checkedBigNumberify('./index.rsh:59:29:application', stdlib.UInt_max, '0')];
        const v508 = v505[stdlib.checkedBigNumberify('./index.rsh:59:29:application', stdlib.UInt_max, '1')];
        const v513 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v507);
        stdlib.assert(v513, {
          at: './index.rsh:59:29:application',
          fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v508, {
          at: './index.rsh:59:18:application',
          fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
          msg: 'ASA Bridge: Transfer failed in deposit',
          who: 'Deployer'
          });
        const v514 = true;
        await txn3.getOutput('deposit', 'v514', ctc7, v514);
        const v521 = v398.inToken;
        const v522 = v398.manager;
        const v523 = v398.outToken;
        const v524 = v398.tokenAmount;
        const v526 = stdlib.safeAdd(v524, v470);
        const v527 = {
          inToken: v521,
          manager: v522,
          outToken: v523,
          tokenAmount: v526
          };
        const cv398 = v527;
        const cv399 = v463;
        
        v398 = cv398;
        v399 = cv399;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'withdraw0_79': {
        const v559 = v462[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v625 = v559[stdlib.checkedBigNumberify('./index.rsh:70:10:spread', stdlib.UInt_max, '0')];
        const v626 = v398.tokenAmount;
        const v627 = stdlib.le(v625, v626);
        stdlib.assert(v627, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:71:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
          msg: 'ASA Bridge: Token amount insufficient for withdraw',
          who: 'Deployer'
          });
        const v630 = await ctc.getContractAddress();
        const v631 = stdlib.cast("UInt", "UInt256", v625, false, true);
        const v634 = [];
        const v635 = undefined /* Remote */;
        const v636 = await txn3.getOutput('internal', 'v635', ctc8, v635);
        const v638 = v636[stdlib.checkedBigNumberify('./index.rsh:74:33:application', stdlib.UInt_max, '0')];
        const v639 = v636[stdlib.checkedBigNumberify('./index.rsh:74:33:application', stdlib.UInt_max, '1')];
        const v644 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v638);
        stdlib.assert(v644, {
          at: './index.rsh:74:33:application',
          fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        stdlib.assert(v639, {
          at: './index.rsh:74:18:application',
          fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
          msg: 'ASA Brdige: Transfer failed in withdraw',
          who: 'Deployer'
          });
        const v645 = true;
        await txn3.getOutput('withdraw', 'v645', ctc7, v645);
        const cv398 = v398;
        const cv399 = v463;
        
        v398 = cv398;
        v399 = cv399;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    inToken: ctc0,
    manager: ctc2,
    outToken: ctc1,
    tokenAmount: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    deposit0_79: ctc5,
    withdraw0_79: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc7]);
  const ctc9 = stdlib.T_Null;
  
  
  const [v387, v388, v398] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc4]);
  const v417 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:55:28:application call to [unknown function] (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:47:29:application call to "rundeposit0_79" (defined at: ./index.rsh:55:10:function exp)', 'at ./index.rsh:47:29:application call to [unknown function] (defined at: ./index.rsh:47:29:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v418 = v417[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v425 = ['deposit0_79', v417];
  
  const txn1 = await (ctc.sendrecv({
    args: [v387, v388, v398, v425],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:10:decimal', stdlib.UInt_max, '0'), [[v418, v387]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v462], secs: v464, time: v463, didSend: v260, from: v461 } = txn1;
      
      switch (v462[0]) {
        case 'deposit0_79': {
          const v465 = v462[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v470 = v465[stdlib.checkedBigNumberify('./index.rsh:55:10:spread', stdlib.UInt_max, '0')];
          ;
          sim_r.txns.push({
            amt: v470,
            kind: 'to',
            tok: v387
            });
          const v500 = stdlib.cast("UInt", "UInt256", v470, false, true);
          const v503 = [];
          const v504 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v388,
              remote: ({
                accs: [v461],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:59:29:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:59:29:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v504', ctc8, v504);
          const v514 = true;
          const v515 = await txn1.getOutput('deposit', 'v514', ctc7, v514);
          
          const v521 = v398.inToken;
          const v522 = v398.manager;
          const v523 = v398.outToken;
          const v524 = v398.tokenAmount;
          const v526 = stdlib.safeAdd(v524, v470);
          const v527 = {
            inToken: v521,
            manager: v522,
            outToken: v523,
            tokenAmount: v526
            };
          const v844 = v527;
          sim_r.isHalt = false;
          
          break;
          }
        case 'withdraw0_79': {
          const v559 = v462[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v462], secs: v464, time: v463, didSend: v260, from: v461 } = txn1;
  switch (v462[0]) {
    case 'deposit0_79': {
      const v465 = v462[1];
      undefined /* setApiDetails */;
      const v470 = v465[stdlib.checkedBigNumberify('./index.rsh:55:10:spread', stdlib.UInt_max, '0')];
      ;
      ;
      const v500 = stdlib.cast("UInt", "UInt256", v470, false, true);
      const v503 = [];
      const v504 = undefined /* Remote */;
      const v505 = await txn1.getOutput('internal', 'v504', ctc8, v504);
      const v507 = v505[stdlib.checkedBigNumberify('./index.rsh:59:29:application', stdlib.UInt_max, '0')];
      const v508 = v505[stdlib.checkedBigNumberify('./index.rsh:59:29:application', stdlib.UInt_max, '1')];
      const v513 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v507);
      stdlib.assert(v513, {
        at: './index.rsh:59:29:application',
        fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
        msg: 'remote bill check',
        who: 'deposit'
        });
      stdlib.assert(v508, {
        at: './index.rsh:59:18:application',
        fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
        msg: 'ASA Bridge: Transfer failed in deposit',
        who: 'deposit'
        });
      const v514 = true;
      const v515 = await txn1.getOutput('deposit', 'v514', ctc7, v514);
      if (v260) {
        stdlib.protect(ctc9, await interact.out(v465, v515), {
          at: './index.rsh:55:11:application',
          fs: ['at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:11:function exp)', 'at ./index.rsh:60:12:application call to "k" (defined at: ./index.rsh:58:13:function exp)', 'at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:13:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v521 = v398.inToken;
      const v522 = v398.manager;
      const v523 = v398.outToken;
      const v524 = v398.tokenAmount;
      const v526 = stdlib.safeAdd(v524, v470);
      const v527 = {
        inToken: v521,
        manager: v522,
        outToken: v523,
        tokenAmount: v526
        };
      const v844 = v527;
      return;
      
      break;
      }
    case 'withdraw0_79': {
      const v559 = v462[1];
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    inToken: ctc0,
    manager: ctc2,
    outToken: ctc1,
    tokenAmount: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    deposit0_79: ctc5,
    withdraw0_79: ctc5
    });
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc7]);
  const ctc9 = stdlib.T_Null;
  
  
  const [v387, v388, v398] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc4]);
  const v429 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:70:29:application call to [unknown function] (defined at: ./index.rsh:70:29:function exp)', 'at ./index.rsh:47:29:application call to "runwithdraw0_79" (defined at: ./index.rsh:70:10:function exp)', 'at ./index.rsh:47:29:application call to [unknown function] (defined at: ./index.rsh:47:29:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v430 = v429[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v432 = v398.tokenAmount;
  const v433 = stdlib.le(v430, v432);
  stdlib.assert(v433, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:29:application call to [unknown function] (defined at: ./index.rsh:70:29:function exp)', 'at ./index.rsh:47:29:application call to "runwithdraw0_79" (defined at: ./index.rsh:70:10:function exp)', 'at ./index.rsh:47:29:application call to [unknown function] (defined at: ./index.rsh:47:29:function exp)'],
    msg: 'ASA Bridge: Token amount insufficient for withdraw',
    who: 'withdraw'
    });
  const v440 = ['withdraw0_79', v429];
  
  const txn1 = await (ctc.sendrecv({
    args: [v387, v388, v398, v440],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:54:14:decimal', stdlib.UInt_max, '0'), v387]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v462], secs: v464, time: v463, didSend: v260, from: v461 } = txn1;
      
      switch (v462[0]) {
        case 'deposit0_79': {
          const v465 = v462[1];
          
          break;
          }
        case 'withdraw0_79': {
          const v559 = v462[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          ;
          const v625 = v559[stdlib.checkedBigNumberify('./index.rsh:70:10:spread', stdlib.UInt_max, '0')];
          const v630 = await ctc.getContractAddress();
          const v631 = stdlib.cast("UInt", "UInt256", v625, false, true);
          const v634 = [];
          const v635 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v388,
              remote: ({
                accs: [v461, v630],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:74:33:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:74:33:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
          await txn1.getOutput('internal', 'v635', ctc8, v635);
          const v645 = true;
          const v646 = await txn1.getOutput('withdraw', 'v645', ctc7, v645);
          
          const v850 = v398;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v462], secs: v464, time: v463, didSend: v260, from: v461 } = txn1;
  switch (v462[0]) {
    case 'deposit0_79': {
      const v465 = v462[1];
      return;
      break;
      }
    case 'withdraw0_79': {
      const v559 = v462[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v625 = v559[stdlib.checkedBigNumberify('./index.rsh:70:10:spread', stdlib.UInt_max, '0')];
      const v626 = v398.tokenAmount;
      const v627 = stdlib.le(v625, v626);
      stdlib.assert(v627, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'ASA Bridge: Token amount insufficient for withdraw',
        who: 'withdraw'
        });
      const v630 = await ctc.getContractAddress();
      const v631 = stdlib.cast("UInt", "UInt256", v625, false, true);
      const v634 = [];
      const v635 = undefined /* Remote */;
      const v636 = await txn1.getOutput('internal', 'v635', ctc8, v635);
      const v638 = v636[stdlib.checkedBigNumberify('./index.rsh:74:33:application', stdlib.UInt_max, '0')];
      const v639 = v636[stdlib.checkedBigNumberify('./index.rsh:74:33:application', stdlib.UInt_max, '1')];
      const v644 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v638);
      stdlib.assert(v644, {
        at: './index.rsh:74:33:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'remote bill check',
        who: 'withdraw'
        });
      stdlib.assert(v639, {
        at: './index.rsh:74:18:application',
        fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
        msg: 'ASA Brdige: Transfer failed in withdraw',
        who: 'withdraw'
        });
      const v645 = true;
      const v646 = await txn1.getOutput('withdraw', 'v645', ctc7, v645);
      if (v260) {
        stdlib.protect(ctc9, await interact.out(v559, v646), {
          at: './index.rsh:70:11:application',
          fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:11:function exp)', 'at ./index.rsh:75:12:application call to "k" (defined at: ./index.rsh:73:13:function exp)', 'at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:13:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v850 = v398;
      return;
      
      break;
      }
    }
  
  
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
    impure: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_2((uint64,(byte,byte[8])))void`, `deposit(uint64)byte`, `withdraw(uint64)byte`],
    pure: [`state()(address,uint64,uint64,uint64)`],
    sigs: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_2((uint64,(byte,byte[8])))void`, `deposit(uint64)byte`, `state()(address,uint64,uint64,uint64)`, `withdraw(uint64)byte`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEIAwQGGDCgjQYmAwABAAVhcHBJRDEYQQLTKGRJIls1ASRbNQIpZIIFBAKYOW8EcuOr6QSTZPL1BKRxPJYEwsqE2jYaAI4FArwDLgLmAoECkQA0DSNbSTULNBExFjQAIwhJNQAJRwM4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEKjQQFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQQshiABHFfwUayGjEASbIcshohBq80CxZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAAAH4NA1QsDQNNQwiNAwiWxJENAxXCAEXRCM1DIAIAAAAAAAAAgI0DBZRBwhQsDQMFlEHCDUENA9XAAg0D1cIIFA0D1coCFA0DyEHWzQLCBZQMgY1DjUPNBEWNBAWUDQPUCUyBjUCNQEpTFcASGcoNAEWNAIWUGcxGSISRIgCOTQDQAAKgAQVH3x1NARQsCNDNA0jW0k1CzQPIQdbDkQqNBAWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNBCyGIAEAIpycrIaMQBJshyyGjIKSbIcshohBq80CxZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAJ7NAxQsDQMNQsiNAsiWxJENAtXCAEXRCM1C4AIAAAAAAAAAoU0CxZRBwhQsDQLFlEHCDUEMgY1DkL/HiSvKTQLFlBQNQslNAESRIgBgzQLIls1DDQLVwgJNQ2ABGxBSB00DBZQNA1QsDQMiAFZNA0iVY0CAOgA60L+BTQBJRJEiAFONA9XCCA0D1cACFA0D1coCFA0D1cwCFA1BDEZIhJEQv7jJK+AAQE0CxZQUDULQv+TNAsiWzUMNAskWzURNAuBEFs1EIAE93ETTTQMFlA0ERZQNBAWULA0DIgA6SEIiAD+IjQRMgqIAPw0ERYxAFA0EBZQJK9QMgY1DjUPQv5ZiACzIQiIANg2GgE1C0L/oogAozYaATULQv8qIjE0EkSBAjE1EkQiMTYSRCIxNxJEiACDgUivIiJC/is2GgEXNQtC/vcisgEhBLIQshSyEbISs4kisgEjshCyB7IIs4lC/R5C/i1C/xJIiUwJSTUGMgmIAHaJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJMRmBBRJEiAAYIjIKMgmIAERC/dQ2GgEXNQtC/u0jNQOJNAY0B0oPQf+nQv+vSSISTDQCEhFEiUkiWzURSSRbNRBXEDg1D4k0Bgg1BomxQv9asUL/ZbGyCUL/Xw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `35`,
    101: `36`,
    102: `37`,
    103: `37`,
    104: `38`,
    105: `39`,
    106: `39`,
    107: `40`,
    108: `40`,
    109: `41`,
    11: `2`,
    110: `41`,
    111: `42`,
    112: `43`,
    113: `44`,
    114: `44`,
    115: `45`,
    116: `45`,
    117: `46`,
    118: `47`,
    119: `48`,
    12: `2`,
    120: `48`,
    121: `49`,
    122: `49`,
    123: `50`,
    124: `51`,
    125: `52`,
    126: `52`,
    127: `53`,
    128: `54`,
    129: `57`,
    13: `2`,
    130: `58`,
    131: `58`,
    132: `59`,
    133: `60`,
    134: `61`,
    135: `62`,
    136: `62`,
    137: `63`,
    138: `63`,
    139: `64`,
    14: `2`,
    140: `65`,
    141: `65`,
    142: `66`,
    143: `67`,
    144: `67`,
    145: `68`,
    146: `69`,
    147: `69`,
    148: `70`,
    149: `71`,
    15: `2`,
    150: `72`,
    151: `72`,
    152: `73`,
    153: `74`,
    154: `75`,
    155: `75`,
    156: `76`,
    157: `76`,
    158: `77`,
    159: `77`,
    16: `2`,
    160: `78`,
    161: `78`,
    162: `80`,
    163: `80`,
    164: `81`,
    165: `81`,
    166: `81`,
    167: `81`,
    168: `81`,
    169: `81`,
    17: `2`,
    170: `82`,
    171: `82`,
    172: `83`,
    173: `83`,
    174: `84`,
    175: `85`,
    176: `85`,
    177: `86`,
    178: `86`,
    179: `87`,
    18: `2`,
    180: `87`,
    181: `88`,
    182: `89`,
    183: `89`,
    184: `90`,
    185: `91`,
    186: `92`,
    187: `92`,
    188: `93`,
    189: `97`,
    19: `2`,
    190: `97`,
    191: `98`,
    192: `99`,
    193: `99`,
    194: `100`,
    195: `101`,
    196: `101`,
    197: `102`,
    198: `103`,
    199: `104`,
    2: `2`,
    20: `2`,
    200: `105`,
    201: `105`,
    202: `105`,
    203: `106`,
    204: `106`,
    205: `106`,
    206: `107`,
    207: `108`,
    208: `108`,
    209: `109`,
    21: `2`,
    210: `109`,
    211: `109`,
    212: `109`,
    213: `109`,
    214: `109`,
    215: `109`,
    216: `109`,
    217: `109`,
    218: `109`,
    219: `110`,
    22: `2`,
    220: `110`,
    221: `111`,
    222: `112`,
    223: `113`,
    224: `113`,
    225: `114`,
    226: `114`,
    227: `115`,
    228: `116`,
    229: `116`,
    23: `2`,
    230: `117`,
    231: `118`,
    232: `119`,
    233: `120`,
    234: `124`,
    235: `124`,
    236: `125`,
    237: `125`,
    238: `125`,
    239: `126`,
    24: `2`,
    240: `127`,
    241: `131`,
    242: `132`,
    243: `132`,
    244: `133`,
    245: `133`,
    246: `133`,
    247: `133`,
    248: `133`,
    249: `133`,
    25: `4`,
    250: `133`,
    251: `133`,
    252: `133`,
    253: `133`,
    254: `134`,
    255: `134`,
    256: `135`,
    257: `136`,
    258: `136`,
    259: `136`,
    26: `4`,
    260: `137`,
    261: `138`,
    262: `139`,
    263: `139`,
    264: `140`,
    265: `141`,
    266: `141`,
    267: `141`,
    268: `142`,
    269: `142`,
    27: `5`,
    270: `143`,
    271: `143`,
    272: `144`,
    273: `144`,
    274: `144`,
    275: `145`,
    276: `145`,
    277: `146`,
    278: `146`,
    279: `146`,
    28: `5`,
    280: `147`,
    281: `148`,
    282: `148`,
    283: `149`,
    284: `149`,
    285: `149`,
    286: `150`,
    287: `151`,
    288: `151`,
    289: `152`,
    29: `5`,
    290: `152`,
    291: `153`,
    292: `154`,
    293: `154`,
    294: `155`,
    295: `156`,
    296: `157`,
    297: `158`,
    298: `158`,
    299: `159`,
    3: `2`,
    30: `6`,
    300: `159`,
    301: `160`,
    302: `160`,
    303: `163`,
    304: `163`,
    305: `164`,
    306: `165`,
    307: `165`,
    308: `166`,
    309: `167`,
    31: `7`,
    310: `168`,
    311: `168`,
    312: `169`,
    313: `170`,
    314: `171`,
    315: `171`,
    316: `173`,
    317: `173`,
    318: `174`,
    319: `174`,
    32: `8`,
    320: `175`,
    321: `176`,
    322: `177`,
    323: `177`,
    324: `177`,
    325: `178`,
    326: `179`,
    327: `180`,
    328: `180`,
    329: `181`,
    33: `9`,
    330: `182`,
    331: `182`,
    332: `183`,
    333: `184`,
    334: `185`,
    335: `186`,
    336: `186`,
    337: `187`,
    338: `188`,
    339: `189`,
    34: `10`,
    340: `191`,
    341: `191`,
    342: `191`,
    343: `193`,
    344: `193`,
    345: `194`,
    346: `194`,
    347: `194`,
    348: `196`,
    349: `196`,
    35: `11`,
    350: `196`,
    351: `196`,
    352: `196`,
    353: `196`,
    354: `197`,
    355: `197`,
    356: `198`,
    357: `199`,
    358: `201`,
    359: `202`,
    36: `11`,
    360: `204`,
    361: `204`,
    362: `205`,
    363: `206`,
    364: `207`,
    365: `208`,
    366: `208`,
    367: `209`,
    368: `209`,
    369: `210`,
    37: `12`,
    370: `210`,
    371: `211`,
    372: `212`,
    373: `213`,
    374: `218`,
    375: `219`,
    376: `219`,
    377: `220`,
    378: `221`,
    379: `222`,
    38: `13`,
    380: `223`,
    381: `223`,
    382: `224`,
    383: `224`,
    384: `225`,
    385: `226`,
    386: `226`,
    387: `227`,
    388: `228`,
    389: `228`,
    39: `14`,
    390: `229`,
    391: `230`,
    392: `230`,
    393: `231`,
    394: `232`,
    395: `233`,
    396: `233`,
    397: `234`,
    398: `235`,
    399: `236`,
    4: `2`,
    40: `14`,
    400: `236`,
    401: `237`,
    402: `237`,
    403: `238`,
    404: `238`,
    405: `239`,
    406: `239`,
    407: `241`,
    408: `241`,
    409: `242`,
    41: `15`,
    410: `242`,
    411: `242`,
    412: `242`,
    413: `242`,
    414: `242`,
    415: `243`,
    416: `243`,
    417: `244`,
    418: `244`,
    419: `245`,
    42: `16`,
    420: `246`,
    421: `246`,
    422: `247`,
    423: `247`,
    424: `248`,
    425: `248`,
    426: `250`,
    427: `251`,
    428: `251`,
    429: `252`,
    43: `18`,
    430: `252`,
    431: `253`,
    432: `253`,
    433: `254`,
    434: `255`,
    435: `255`,
    436: `256`,
    437: `257`,
    438: `258`,
    439: `258`,
    44: `18`,
    440: `259`,
    441: `263`,
    442: `263`,
    443: `264`,
    444: `265`,
    445: `265`,
    446: `266`,
    447: `267`,
    448: `267`,
    449: `268`,
    45: `18`,
    450: `269`,
    451: `270`,
    452: `271`,
    453: `271`,
    454: `271`,
    455: `272`,
    456: `272`,
    457: `272`,
    458: `273`,
    459: `274`,
    46: `18`,
    460: `274`,
    461: `275`,
    462: `275`,
    463: `275`,
    464: `275`,
    465: `275`,
    466: `275`,
    467: `275`,
    468: `275`,
    469: `275`,
    47: `18`,
    470: `275`,
    471: `276`,
    472: `276`,
    473: `277`,
    474: `278`,
    475: `279`,
    476: `279`,
    477: `280`,
    478: `280`,
    479: `281`,
    48: `18`,
    480: `282`,
    481: `282`,
    482: `283`,
    483: `284`,
    484: `285`,
    485: `286`,
    486: `290`,
    487: `290`,
    488: `291`,
    489: `291`,
    49: `18`,
    490: `291`,
    491: `292`,
    492: `293`,
    493: `297`,
    494: `298`,
    495: `298`,
    496: `299`,
    497: `299`,
    498: `299`,
    499: `299`,
    5: `2`,
    50: `18`,
    500: `299`,
    501: `299`,
    502: `299`,
    503: `299`,
    504: `299`,
    505: `299`,
    506: `300`,
    507: `300`,
    508: `301`,
    509: `302`,
    51: `18`,
    510: `302`,
    511: `302`,
    512: `303`,
    513: `304`,
    514: `305`,
    515: `305`,
    516: `306`,
    517: `307`,
    518: `307`,
    519: `307`,
    52: `18`,
    520: `308`,
    521: `308`,
    522: `309`,
    523: `309`,
    524: `310`,
    525: `310`,
    526: `311`,
    527: `311`,
    528: `311`,
    529: `313`,
    53: `18`,
    530: `314`,
    531: `315`,
    532: `316`,
    533: `316`,
    534: `317`,
    535: `318`,
    536: `319`,
    537: `320`,
    538: `320`,
    539: `322`,
    54: `18`,
    540: `323`,
    541: `323`,
    542: `324`,
    543: `325`,
    544: `326`,
    545: `326`,
    546: `326`,
    547: `327`,
    548: `327`,
    549: `328`,
    55: `18`,
    550: `329`,
    551: `330`,
    552: `330`,
    553: `331`,
    554: `331`,
    555: `332`,
    556: `332`,
    557: `332`,
    558: `333`,
    559: `333`,
    56: `18`,
    560: `334`,
    561: `334`,
    562: `334`,
    563: `334`,
    564: `334`,
    565: `334`,
    566: `335`,
    567: `335`,
    568: `336`,
    569: `337`,
    57: `18`,
    570: `338`,
    571: `338`,
    572: `339`,
    573: `340`,
    574: `342`,
    575: `342`,
    576: `343`,
    577: `343`,
    578: `343`,
    579: `344`,
    58: `18`,
    580: `344`,
    581: `345`,
    582: `346`,
    583: `347`,
    584: `347`,
    585: `347`,
    586: `347`,
    587: `347`,
    588: `347`,
    589: `348`,
    59: `18`,
    590: `348`,
    591: `348`,
    592: `350`,
    593: `350`,
    594: `351`,
    595: `352`,
    596: `353`,
    597: `356`,
    598: `356`,
    599: `356`,
    6: `2`,
    60: `18`,
    600: `357`,
    601: `357`,
    602: `358`,
    603: `358`,
    604: `358`,
    605: `359`,
    606: `359`,
    607: `360`,
    608: `360`,
    609: `360`,
    61: `18`,
    610: `361`,
    611: `362`,
    612: `362`,
    613: `363`,
    614: `363`,
    615: `363`,
    616: `364`,
    617: `365`,
    618: `365`,
    619: `366`,
    62: `18`,
    620: `366`,
    621: `366`,
    622: `367`,
    623: `368`,
    624: `368`,
    625: `370`,
    626: `370`,
    627: `371`,
    628: `372`,
    629: `373`,
    63: `18`,
    630: `375`,
    631: `375`,
    632: `375`,
    633: `377`,
    634: `378`,
    635: `379`,
    636: `379`,
    637: `379`,
    638: `380`,
    639: `380`,
    64: `18`,
    640: `381`,
    641: `382`,
    642: `383`,
    643: `384`,
    644: `384`,
    645: `385`,
    646: `385`,
    647: `385`,
    648: `387`,
    649: `387`,
    65: `18`,
    650: `388`,
    651: `389`,
    652: `390`,
    653: `390`,
    654: `391`,
    655: `391`,
    656: `392`,
    657: `393`,
    658: `394`,
    659: `394`,
    66: `18`,
    660: `395`,
    661: `395`,
    662: `396`,
    663: `396`,
    664: `397`,
    665: `398`,
    666: `398`,
    667: `399`,
    668: `399`,
    669: `399`,
    67: `18`,
    670: `399`,
    671: `399`,
    672: `399`,
    673: `400`,
    674: `400`,
    675: `401`,
    676: `402`,
    677: `403`,
    678: `403`,
    679: `404`,
    68: `18`,
    680: `405`,
    681: `406`,
    682: `406`,
    683: `407`,
    684: `408`,
    685: `409`,
    686: `411`,
    687: `411`,
    688: `412`,
    689: `412`,
    69: `18`,
    690: `412`,
    691: `413`,
    692: `413`,
    693: `414`,
    694: `414`,
    695: `414`,
    696: `415`,
    697: `417`,
    698: `417`,
    699: `418`,
    7: `2`,
    70: `19`,
    700: `418`,
    701: `419`,
    702: `419`,
    703: `419`,
    704: `420`,
    705: `420`,
    706: `421`,
    707: `422`,
    708: `422`,
    709: `423`,
    71: `19`,
    710: `424`,
    711: `424`,
    712: `425`,
    713: `426`,
    714: `427`,
    715: `428`,
    716: `429`,
    717: `430`,
    718: `430`,
    719: `431`,
    72: `19`,
    720: `431`,
    721: `432`,
    722: `432`,
    723: `433`,
    724: `433`,
    725: `433`,
    726: `435`,
    727: `435`,
    728: `435`,
    729: `436`,
    73: `20`,
    730: `436`,
    731: `437`,
    732: `437`,
    733: `437`,
    734: `438`,
    735: `438`,
    736: `438`,
    737: `439`,
    738: `439`,
    739: `440`,
    74: `20`,
    740: `440`,
    741: `440`,
    742: `442`,
    743: `442`,
    744: `442`,
    745: `443`,
    746: `443`,
    747: `443`,
    748: `444`,
    749: `444`,
    75: `20`,
    750: `445`,
    751: `445`,
    752: `445`,
    753: `447`,
    754: `448`,
    755: `448`,
    756: `449`,
    757: `450`,
    758: `451`,
    759: `451`,
    76: `20`,
    760: `452`,
    761: `452`,
    762: `453`,
    763: `454`,
    764: `455`,
    765: `456`,
    766: `456`,
    767: `457`,
    768: `458`,
    769: `459`,
    77: `20`,
    770: `460`,
    771: `460`,
    772: `461`,
    773: `462`,
    774: `463`,
    775: `463`,
    776: `463`,
    777: `464`,
    778: `464`,
    779: `465`,
    78: `20`,
    780: `466`,
    781: `467`,
    782: `468`,
    783: `468`,
    784: `468`,
    785: `470`,
    786: `470`,
    787: `470`,
    788: `471`,
    789: `472`,
    79: `20`,
    790: `472`,
    791: `473`,
    792: `473`,
    793: `473`,
    794: `475`,
    795: `476`,
    796: `476`,
    797: `477`,
    798: `477`,
    799: `478`,
    8: `2`,
    80: `20`,
    800: `478`,
    801: `479`,
    802: `479`,
    803: `480`,
    804: `480`,
    805: `481`,
    806: `481`,
    807: `482`,
    808: `483`,
    809: `485`,
    81: `20`,
    810: `486`,
    811: `486`,
    812: `487`,
    813: `488`,
    814: `488`,
    815: `489`,
    816: `489`,
    817: `490`,
    818: `490`,
    819: `491`,
    82: `20`,
    820: `492`,
    821: `494`,
    822: `494`,
    823: `494`,
    824: `496`,
    825: `496`,
    826: `496`,
    827: `498`,
    828: `498`,
    829: `498`,
    83: `20`,
    830: `500`,
    831: `501`,
    832: `503`,
    833: `504`,
    834: `505`,
    835: `506`,
    836: `506`,
    837: `507`,
    838: `507`,
    839: `508`,
    84: `20`,
    840: `508`,
    841: `508`,
    842: `509`,
    843: `511`,
    844: `512`,
    845: `513`,
    846: `513`,
    847: `513`,
    848: `514`,
    849: `515`,
    85: `22`,
    850: `515`,
    851: `518`,
    852: `518`,
    853: `519`,
    854: `519`,
    855: `520`,
    856: `521`,
    857: `522`,
    858: `523`,
    859: `523`,
    86: `24`,
    860: `524`,
    861: `525`,
    862: `525`,
    863: `526`,
    864: `526`,
    865: `527`,
    866: `527`,
    867: `528`,
    868: `529`,
    869: `530`,
    87: `24`,
    870: `530`,
    871: `531`,
    872: `532`,
    873: `533`,
    874: `534`,
    875: `534`,
    876: `535`,
    877: `536`,
    878: `537`,
    879: `539`,
    88: `25`,
    880: `539`,
    881: `540`,
    882: `540`,
    883: `541`,
    884: `542`,
    885: `544`,
    886: `544`,
    887: `544`,
    888: `546`,
    889: `547`,
    89: `26`,
    890: `547`,
    891: `548`,
    892: `548`,
    893: `549`,
    894: `549`,
    895: `549`,
    896: `550`,
    897: `550`,
    898: `550`,
    899: `552`,
    9: `2`,
    90: `27`,
    900: `552`,
    901: `552`,
    902: `553`,
    903: `554`,
    904: `554`,
    905: `555`,
    906: `555`,
    907: `555`,
    908: `557`,
    909: `558`,
    91: `28`,
    910: `558`,
    911: `559`,
    912: `561`,
    913: `561`,
    914: `562`,
    915: `562`,
    916: `563`,
    917: `564`,
    918: `565`,
    919: `565`,
    92: `28`,
    920: `565`,
    921: `566`,
    922: `566`,
    923: `566`,
    924: `568`,
    925: `569`,
    926: `570`,
    927: `571`,
    928: `572`,
    929: `572`,
    93: `29`,
    930: `573`,
    931: `574`,
    932: `575`,
    933: `576`,
    934: `578`,
    935: `579`,
    936: `580`,
    937: `581`,
    938: `581`,
    939: `582`,
    94: `29`,
    940: `583`,
    941: `584`,
    942: `585`,
    943: `585`,
    944: `586`,
    945: `586`,
    946: `586`,
    947: `587`,
    948: `587`,
    949: `588`,
    95: `32`,
    950: `590`,
    951: `590`,
    952: `591`,
    953: `592`,
    954: `592`,
    955: `593`,
    956: `595`,
    957: `596`,
    958: `596`,
    959: `596`,
    96: `32`,
    960: `598`,
    961: `599`,
    962: `599`,
    963: `599`,
    964: `601`,
    965: `602`,
    966: `602`,
    967: `603`,
    97: `33`,
    98: `33`,
    99: `34`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 13,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:59:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:74:33:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:47:29:after expr stmt semicolon',
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
  "deposit": deposit,
  "withdraw": withdraw
  };
export const _APIs = {
  deposit: deposit,
  withdraw: withdraw
  };
