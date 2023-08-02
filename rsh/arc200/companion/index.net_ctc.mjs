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
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc0,
    lptBals: ctc6,
    name: ctc1,
    poolBals: ctc6,
    protoBals: ctc6,
    protoInfo: ctc8,
    symbol: ctc2,
    tokA: ctc9,
    tokB: ctc10,
    totalSupply: ctc5,
    zeroAddress: ctc7
    });
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc10, ctc0, ctc7]);
  const ctc14 = stdlib.T_Struct([['lptBals', ctc6], ['poolBals', ctc6], ['protoInfo', ctc8], ['protoBals', ctc6], ['tokB', ctc10], ['tokA', ctc9]]);
  const ctc15 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc16 = stdlib.T_Data({
    None: ctc9,
    Some: ctc5
    });
  const map0_ctc = ctc16;
  
  const map1_ctc = ctc16;
  
  
  const _Info = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async () => {
        
        const v26478 = v6829.lptBals;
        const v26479 = v6829.poolBals;
        const v26480 = v6829.protoInfo;
        const v26481 = v6829.protoBals;
        const v26482 = v6829.tokB;
        const v26483 = v6829.tokA;
        const v26484 = {
          lptBals: v26478,
          poolBals: v26479,
          protoBals: v26481,
          protoInfo: v26480,
          tokA: v26483,
          tokB: v26482
          };
        
        return v26484;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async () => {
        
        const v6879 = v6829.lptBals;
        const v6880 = v6829.poolBals;
        const v6881 = v6829.protoInfo;
        const v6882 = v6829.protoBals;
        const v6883 = v6829.tokB;
        const v6884 = v6829.tokA;
        const v6885 = {
          lptBals: v6879,
          poolBals: v6880,
          protoBals: v6882,
          protoInfo: v6881,
          tokA: v6884,
          tokB: v6883
          };
        
        return v6885;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async (_v26473, _v26474 ) => {
          const v26473 = stdlib.protect(ctc7, _v26473, null);
          const v26474 = stdlib.protect(ctc7, _v26474, null);
        
        const v26475 = [v26473, v26474];
        const v26476 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc15, v26475, ctc5), null);
        const v26477 = stdlib.fromSome(v26476, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v26477;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async (_v6874, _v6875 ) => {
          const v6874 = stdlib.protect(ctc7, _v6874, null);
          const v6875 = stdlib.protect(ctc7, _v6875, null);
        
        const v6876 = [v6874, v6875];
        const v6877 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc15, v6876, ctc5), null);
        const v6878 = stdlib.fromSome(v6877, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v6878;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async (_v26470 ) => {
          const v26470 = stdlib.protect(ctc7, _v26470, null);
        
        const v26471 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc7, v26470, ctc5), null);
        const v26472 = stdlib.fromSome(v26471, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v26472;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async (_v6871 ) => {
          const v6871 = stdlib.protect(ctc7, _v6871, null);
        
        const v6872 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc7, v6871, ctc5), null);
        const v6873 = stdlib.fromSome(v6872, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v6873;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async () => {
        
        
        return v6749;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async () => {
        
        
        return v6749;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async () => {
        
        const v6813 = v6748.name;
        
        return v6813;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async () => {
        
        const v6813 = v6748.name;
        
        return v6813;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async () => {
        
        const v6814 = v6748.symbol;
        
        return v6814;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async () => {
        
        const v6814 = v6748.symbol;
        
        return v6814;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_exactSwapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapAForB = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _v_swapBForA = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v6748, v6749, v6829, v6833] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        decode: _Info,
        dom: [],
        rng: ctc14
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
      2: [ctc3, ctc0, ctc11, ctc0],
      4: [ctc3, ctc0, ctc7, ctc10, ctc12, ctc7, ctc13, ctc6, ctc11, ctc0, ctc6, ctc5, ctc5]
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
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Object({
    proto: ctc7,
    tokA: ctc0,
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
  const ctc14 = stdlib.T_Tuple([ctc3, ctc11]);
  const ctc15 = stdlib.T_Tuple([ctc9, ctc12]);
  const ctc16 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc17 = stdlib.T_Tuple([ctc16, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc16]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc9, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc9, ctc9]);
  const ctc22 = stdlib.T_Tuple([ctc9]);
  const ctc23 = stdlib.T_Tuple([]);
  const ctc24 = stdlib.T_Tuple([ctc9, ctc9, ctc1]);
  const ctc25 = stdlib.T_Data({
    Protocol_harvest0_386: ctc15,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc19,
    Trader_exactSwapBForA0_386: ctc19,
    Trader_swapAForB0_386: ctc19,
    Trader_swapBForA0_386: ctc19,
    approve0_386: ctc20,
    deleteAllowanceBox0_386: ctc21,
    deleteBalanceBox0_386: ctc22,
    destroy0_386: ctc23,
    transfer0_386: ctc20,
    transferFrom0_386: ctc24
    });
  const ctc26 = stdlib.T_Tuple([ctc16, ctc3]);
  const ctc27 = stdlib.T_Tuple([ctc7, ctc3, ctc9]);
  
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
  
  
  const v6722 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  const v6723 = v6722.meta;
  const v6726 = v6723.decimals;
  
  const v6739 = stdlib.le(v6726, stdlib.checkedBigNumberify('./index.rsh:620:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v6739, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:724:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:738:19:application call to "checkInput" (defined at: ./index.rsh:721:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v6722],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:735:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:736:12:decimal', stdlib.UInt_max, '28500'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v6742], secs: v6744, time: v6743, didSend: v140, from: v6741 } = txn1;
      
      const v6748 = v6742.meta;
      const v6749 = v6748.decimals;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:736:12:decimal', stdlib.UInt_max, '28500'),
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v6754 = v6742.zeroAddress;
      const v6755 = v6742.swap;
      const v6756 = v6755.tokA;
      const v6757 = v6755.tokB;
      const v6758 = v6755.proto;
      const v6760 = await ctc.getContractInfo();
      const v6763 = [];
      const v6764 = ['None', null];
      const v6765 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v6758,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:755:71:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:755:71:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
      const v6766 = await txn1.getOutput('internal', 'v6765', ctc13, v6765);
      const v6768 = v6766[stdlib.checkedBigNumberify('./index.rsh:755:71:application', stdlib.UInt_max, '0')];
      const v6769 = v6766[stdlib.checkedBigNumberify('./index.rsh:755:71:application', stdlib.UInt_max, '1')];
      const v6770 = v6769.protoFee;
      const v6771 = v6769.lpFee;
      const v6772 = v6769.totFee;
      const v6786 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:735:7:dot', stdlib.UInt_max, '28500'), v6768);
      const v6788 = await ctc.getContractAddress();
      const v6790 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6788];
      const v6795 = stdlib.sub(v6786, stdlib.checkedBigNumberify('./index.rsh:766:32:decimal', stdlib.UInt_max, '28500'));
      const v6797 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v6757,
          remote: ({
            accs: [v6788],
            apps: [v6757],
            bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
            boxes: [[ctc27, v6790], [ctc27, v6790]],
            fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
            pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '1'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
      const v6798 = await txn1.getOutput('internal', 'v6797', ctc14, v6797);
      const v6800 = v6798[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v6805 = stdlib.add(v6795, v6800);
      await stdlib.simMapSet(sim_r, 0, ctc9, v6788, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
      await stdlib.simMapSet(sim_r, 0, ctc9, v6754, ctc1, stdlib.checkedBigNumberify('./index.rsh:779:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v6809 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
      null;
      
      const v6817 = v6748.name;
      const v6818 = v6748.symbol;
      const v6822 = v6769.protoAddr;
      const v6823 = v6769.locked;
      const v6824 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v6825 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v6827 = {
        locked: v6823,
        lpFee: v6771,
        protoAddr: v6822,
        protoFee: v6770,
        totFee: v6772
        };
      const v6828 = {
        closed: false,
        decimals: v6749,
        lptBals: v6824,
        name: v6817,
        poolBals: v6825,
        protoBals: v6825,
        protoInfo: v6827,
        symbol: v6818,
        tokA: v6756,
        tokB: v6757,
        totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
        zeroAddress: v6754
        };
      const v6829 = v6828;
      const v6830 = v6743;
      const v6833 = v6805;
      
      if (await (async () => {
        const v6869 = v6829.closed;
        const v6870 = v6869 ? false : true;
        
        return v6870;})()) {
        const v6888 = v6829.lptBals;
        const v6889 = v6888.A;
        const v6890 = v6888.B;
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
  const {data: [v6742], secs: v6744, time: v6743, didSend: v140, from: v6741 } = txn1;
  const v6748 = v6742.meta;
  const v6749 = v6748.decimals;
  const v6750 = stdlib.le(v6749, stdlib.checkedBigNumberify('./index.rsh:620:26:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v6750, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:724:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:738:19:application call to "checkInput" (defined at: ./index.rsh:721:28:function exp)'],
    msg: 'ARC200: Decimals must be less than max',
    who: 'Deployer'
    });
  ;
  const v6754 = v6742.zeroAddress;
  const v6755 = v6742.swap;
  const v6756 = v6755.tokA;
  const v6757 = v6755.tokB;
  const v6758 = v6755.proto;
  const v6760 = await ctc.getContractInfo();
  const v6763 = [];
  const v6764 = ['None', null];
  const v6765 = undefined /* Remote */;
  const v6766 = await txn1.getOutput('internal', 'v6765', ctc13, v6765);
  const v6768 = v6766[stdlib.checkedBigNumberify('./index.rsh:755:71:application', stdlib.UInt_max, '0')];
  const v6769 = v6766[stdlib.checkedBigNumberify('./index.rsh:755:71:application', stdlib.UInt_max, '1')];
  const v6770 = v6769.protoFee;
  const v6771 = v6769.lpFee;
  const v6772 = v6769.totFee;
  const v6773 = stdlib.lt256(v6770, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v6774 = stdlib.lt256(v6771, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v6775 = v6773 ? v6774 : false;
  let v6776;
  if (v6775) {
    const v6777 = stdlib.safeAdd256(v6771, v6770);
    const v6778 = stdlib.eq256(v6772, v6777);
    v6776 = v6778;
    }
  else {
    v6776 = false;
    }
  const v6779 = stdlib.lt256(v6772, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v6780 = v6776 ? v6779 : false;
  const v6781 = stdlib.gt256(v6772, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v6782 = v6780 ? v6781 : false;
  stdlib.assert(v6782, {
    at: './index.rsh:755:71:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v6786 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:735:7:dot', stdlib.UInt_max, '28500'), v6768);
  const v6787 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6768);
  stdlib.assert(v6787, {
    at: './index.rsh:755:71:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  const v6788 = await ctc.getContractAddress();
  const v6790 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6788];
  const v6795 = stdlib.sub(v6786, stdlib.checkedBigNumberify('./index.rsh:766:32:decimal', stdlib.UInt_max, '28500'));
  const v6797 = undefined /* Remote */;
  const v6798 = await txn1.getOutput('internal', 'v6797', ctc14, v6797);
  const v6800 = v6798[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
  const v6805 = stdlib.add(v6795, v6800);
  const v6806 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6800);
  stdlib.assert(v6806, {
    at: './index.rsh:598:5:application',
    fs: ['at ./index.rsh:766:25:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)'],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  await stdlib.mapSet(map0, ctc9, v6788, ctc1, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'));
  await stdlib.mapSet(map0, ctc9, v6754, ctc1, stdlib.checkedBigNumberify('./index.rsh:779:37:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v6809 = stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935');
  null;
  stdlib.protect(ctc0, await interact.ready(v6760), {
    at: './index.rsh:792:21:application',
    fs: ['at ./index.rsh:792:21:application call to [unknown function] (defined at: ./index.rsh:792:21:function exp)', 'at ./index.rsh:792:21:application call to "liftedInteract" (defined at: ./index.rsh:792:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v6817 = v6748.name;
  const v6818 = v6748.symbol;
  const v6822 = v6769.protoAddr;
  const v6823 = v6769.locked;
  const v6824 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v6825 = {
    A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v6827 = {
    locked: v6823,
    lpFee: v6771,
    protoAddr: v6822,
    protoFee: v6770,
    totFee: v6772
    };
  const v6828 = {
    closed: false,
    decimals: v6749,
    lptBals: v6824,
    name: v6817,
    poolBals: v6825,
    protoBals: v6825,
    protoInfo: v6827,
    symbol: v6818,
    tokA: v6756,
    tokB: v6757,
    totalSupply: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '115792089237316195423570985008687907853269984665640564039457584007913129639935'),
    zeroAddress: v6754
    };
  let v6829 = v6828;
  let v6830 = v6743;
  let v6833 = v6805;
  
  let txn2 = txn1;
  while (await (async () => {
    const v6869 = v6829.closed;
    const v6870 = v6869 ? false : true;
    
    return v6870;})()) {
    const v6888 = v6829.lptBals;
    const v6889 = v6888.A;
    const v6890 = v6888.B;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc25],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn3;
    switch (v7903[0]) {
      case 'Protocol_harvest0_386': {
        const v7906 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v8162 = v7906[stdlib.checkedBigNumberify('./index.rsh:1068:12:spread', stdlib.UInt_max, '0')];
        const v8163 = v7906[stdlib.checkedBigNumberify('./index.rsh:1068:12:spread', stdlib.UInt_max, '1')];
        const v8164 = v6829.protoInfo;
        const v8165 = v8164.protoAddr;
        const v8166 = stdlib.addressEq(v7902, v8165);
        stdlib.assert(v8166, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1069:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
          msg: 'Thou art not the Protocol',
          who: 'Deployer'
          });
        const v8168 = v8163.protoFee;
        const v8169 = v8163.lpFee;
        const v8170 = v8163.totFee;
        const v8171 = stdlib.lt256(v8168, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v8172 = stdlib.lt256(v8169, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v8173 = v8171 ? v8172 : false;
        let v8174;
        if (v8173) {
          const v8175 = stdlib.safeAdd256(v8169, v8168);
          const v8176 = stdlib.eq256(v8170, v8175);
          v8174 = v8176;
          }
        else {
          v8174 = false;
          }
        const v8177 = stdlib.lt256(v8170, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v8178 = v8174 ? v8177 : false;
        const v8179 = stdlib.gt256(v8170, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v8180 = v8178 ? v8179 : false;
        stdlib.assert(v8180, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:336:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1070:16:application call to "chkFees" (defined at: ./index.rsh:336:21:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v8182 = v8163.locked;
        const v8183 = v8182 ? false : false;
        const v8184 = v6829.poolBals;
        const v8185 = v8184.A;
        const v8186 = v8184.B;
        const v8187 = stdlib.eq256(v8185, stdlib.checkedBigNumberify('./index.rsh:852:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v8188 = stdlib.eq256(v8186, stdlib.checkedBigNumberify('./index.rsh:852:74:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v8189 = v8187 ? v8188 : false;
        const v8190 = v8183 ? v8189 : false;
        const v8194 = (stdlib.le(await ctc.getBalance(), v6833) ? stdlib.checkedBigNumberify('./index.rsh:1077:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6833));
        const v8195 = stdlib.safeAdd(v8194, v6833);
        const v8196 = v6829.protoBals;
        const v8197 = v8196.B;
        const v8199 = v8196.A;
        const v8203 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8162];
        const v8207 = undefined /* Remote */;
        const v8208 = await txn3.getOutput('internal', 'v8207', ctc14, v8207);
        const v8210 = v8208[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
        const v8215 = stdlib.add(v8195, v8210);
        const v8216 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8210);
        stdlib.assert(v8216, {
          at: './index.rsh:598:5:application',
          fs: ['at ./index.rsh:1083:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v8220 = {
          A: v8199,
          B: v8197
          };
        const v8221 = [v8220, v8194];
        await txn3.getOutput('Protocol_harvest', 'v8221', ctc26, v8221);
        const v8249 = v8163.protoAddr;
        const v8251 = {
          locked: v8182,
          lpFee: v8169,
          protoAddr: v8249,
          protoFee: v8168,
          totFee: v8170
          };
        const v8252 = [v8251];
        const v8253 = ['HarvestEvent', v8252];
        null;
        const v8255 = v6829.decimals;
        const v8257 = v6829.name;
        const v8261 = v6829.symbol;
        const v8262 = v6829.tokA;
        const v8263 = v6829.tokB;
        const v8264 = v6829.totalSupply;
        const v8265 = v6829.zeroAddress;
        const v8267 = {
          closed: v8190,
          decimals: v8255,
          lptBals: v6888,
          name: v8257,
          poolBals: v8184,
          protoBals: v6825,
          protoInfo: v8163,
          symbol: v8261,
          tokA: v8262,
          tokB: v8263,
          totalSupply: v8264,
          zeroAddress: v8265
          };
        const cv6829 = v8267;
        const cv6830 = v7904;
        const cv6833 = v8215;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_deposit0_386': {
        const v9334 = v7903[1];
        undefined /* setApiDetails */;
        const v9340 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '0')];
        const v9341 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '1')];
        const v9342 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '2')];
        const v9343 = v6829.protoInfo;
        const v9344 = v9343.locked;
        const v9345 = v9344 ? false : true;
        stdlib.assert(v9345, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v9347 = v6829.poolBals;
        let v9349;
        const v9350 = v9340.A;
        const v9351 = v9340.B;
        const v9355 = stdlib.eq256(v6890, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        if (v9355) {
          const v9356 = stdlib.safeMul256(v9350, v9351);
          const v9357 = stdlib.sqrt256(v9356);
          v9349 = v9357;
          }
        else {
          const v9358 = v9347.A;
          const v9359 = v9347.B;
          const v9360 = stdlib.safeMul256(v9350, v6890);
          const v9361 = stdlib.safeDiv256(v9360, v9358);
          const v9362 = stdlib.safeMul256(v9351, v6890);
          const v9363 = stdlib.safeDiv256(v9362, v9359);
          const v9364 = stdlib.lt256(v9361, v9363);
          const v9365 = v9364 ? v9361 : v9363;
          v9349 = v9365;
          }
        const v9366 = stdlib.le256(v9341, v9349);
        stdlib.assert(v9366, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v9370 = stdlib.addressEq(v7902, v6754);
        const v9371 = v9370 ? false : true;
        stdlib.assert(v9371, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:927:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v9373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v6788, ctc1), null);
        const v9374 = stdlib.fromSome(v9373, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9375 = stdlib.ge256(v9374, v9349);
        stdlib.assert(v9375, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v9378 = stdlib.cast("UInt256", "UInt", v9350, false, true);
        const v9379 = stdlib.safeAdd(v9378, v9342);
        const v9588 = stdlib.add(v6833, v9379);
        ;
        let v9709;
        if (v9355) {
          const v9716 = stdlib.safeMul256(v9350, v9351);
          const v9717 = stdlib.sqrt256(v9716);
          v9709 = v9717;
          }
        else {
          const v9718 = v9347.A;
          const v9719 = v9347.B;
          const v9720 = stdlib.safeMul256(v9350, v6890);
          const v9721 = stdlib.safeDiv256(v9720, v9718);
          const v9722 = stdlib.safeMul256(v9351, v6890);
          const v9723 = stdlib.safeDiv256(v9722, v9719);
          const v9724 = stdlib.lt256(v9721, v9723);
          const v9725 = v9724 ? v9721 : v9723;
          v9709 = v9725;
          }
        const v9726 = stdlib.le256(v9341, v9709);
        stdlib.assert(v9726, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v9735 = stdlib.ge256(v9374, v9709);
        stdlib.assert(v9735, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v9743 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
        const v9745 = [v7902, v6788];
        const v9746 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v9745];
        const v9750 = stdlib.sub(v9588, v9342);
        const v9752 = undefined /* Remote */;
        const v9753 = await txn3.getOutput('internal', 'v9752', ctc14, v9752);
        const v9755 = v9753[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
        const v9760 = stdlib.add(v9750, v9755);
        const v9761 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9755);
        stdlib.assert(v9761, {
          at: './index.rsh:613:5:application',
          fs: ['at ./index.rsh:1124:37:application call to "arc200_transferFrom" (defined at: ./index.rsh:600:60:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v9765 = stdlib.safeSub256(v9374, v9709);
        await stdlib.mapSet(map0, ctc9, v6788, ctc1, v9765);
        const v9766 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v7902, ctc1), null);
        const v9767 = stdlib.fromSome(v9766, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v9768 = stdlib.safeAdd256(v9767, v9709);
        await stdlib.mapSet(map0, ctc9, v7902, ctc1, v9768);
        null;
        await txn3.getOutput('Provider_deposit', 'v9709', ctc1, v9709);
        const v9780 = v6829.closed;
        const v9781 = v6829.decimals;
        const v9783 = v6829.name;
        const v9785 = v6829.protoBals;
        const v9787 = v6829.symbol;
        const v9788 = v6829.tokA;
        const v9789 = v6829.tokB;
        const v9790 = v6829.totalSupply;
        const v9791 = v6829.zeroAddress;
        const v9793 = v9347.A;
        const v9798 = stdlib.safeAdd256(v9793, v9350);
        const v9799 = v9347.B;
        const v9804 = stdlib.safeAdd256(v9799, v9351);
        const v9813 = stdlib.safeSub256(v6889, v9709);
        const v9817 = stdlib.safeAdd256(v6890, v9709);
        const v9820 = {
          A: v9813,
          B: v9817
          };
        const v9821 = {
          A: v9798,
          B: v9804
          };
        const v9822 = {
          closed: v9780,
          decimals: v9781,
          lptBals: v9820,
          name: v9783,
          poolBals: v9821,
          protoBals: v9785,
          protoInfo: v9343,
          symbol: v9787,
          tokA: v9788,
          tokB: v9789,
          totalSupply: v9790,
          zeroAddress: v9791
          };
        const cv6829 = v9822;
        const cv6830 = v7904;
        const cv6833 = v9760;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Provider_withdraw0_386': {
        const v10762 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v11256 = v10762[stdlib.checkedBigNumberify('./index.rsh:1157:12:spread', stdlib.UInt_max, '0')];
        const v11257 = v10762[stdlib.checkedBigNumberify('./index.rsh:1157:12:spread', stdlib.UInt_max, '1')];
        const v11258 = v6829.poolBals;
        const v11259 = v11258.A;
        const v11260 = v11258.B;
        const v11261 = stdlib.safeMul256(v11256, v11259);
        const v11262 = stdlib.safeDiv256(v11261, v6890);
        const v11263 = stdlib.safeMul256(v11256, v11260);
        const v11264 = stdlib.safeDiv256(v11263, v6890);
        const v11266 = v11257.A;
        const v11267 = stdlib.le256(v11266, v11262);
        stdlib.assert(v11267, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage A',
          who: 'Deployer'
          });
        const v11269 = v11257.B;
        const v11270 = stdlib.le256(v11269, v11264);
        stdlib.assert(v11270, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'Duoswap: Provider Withdraw Slippage B',
          who: 'Deployer'
          });
        const v11275 = stdlib.addressEq(v7902, v6754);
        const v11276 = v11275 ? false : true;
        stdlib.assert(v11276, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v11278 = stdlib.addressEq(v6788, v6754);
        const v11279 = v11278 ? false : true;
        stdlib.assert(v11279, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:955:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v11281 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v7902, ctc1), null);
        const v11282 = stdlib.fromSome(v11281, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11283 = stdlib.ge256(v11282, v11256);
        stdlib.assert(v11283, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:956:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v11285 = [v7902, v6788];
        const v11286 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v11285, ctc1), null);
        const v11287 = stdlib.fromSome(v11286, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11288 = stdlib.ge256(v11287, v11256);
        stdlib.assert(v11288, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:960:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v11296 = stdlib.safeSub256(v11282, v11256);
        await stdlib.mapSet(map0, ctc9, v7902, ctc1, v11296);
        const v11297 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v6788, ctc1), null);
        const v11298 = stdlib.fromSome(v11297, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v11299 = stdlib.safeAdd256(v11298, v11256);
        await stdlib.mapSet(map0, ctc9, v6788, ctc1, v11299);
        null;
        const v11304 = stdlib.safeSub256(v11287, v11256);
        await stdlib.mapSet(map1, ctc21, v11285, ctc1, v11304);
        null;
        const v11309 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
        const v11313 = undefined /* Remote */;
        const v11314 = await txn3.getOutput('internal', 'v11313', ctc14, v11313);
        const v11316 = v11314[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
        const v11321 = stdlib.add(v6833, v11316);
        const v11322 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11316);
        stdlib.assert(v11322, {
          at: './index.rsh:598:5:application',
          fs: ['at ./index.rsh:1167:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v11323 = {
          A: v11262,
          B: v11264
          };
        await txn3.getOutput('Provider_withdraw', 'v11323', ctc16, v11323);
        const v11335 = v6829.closed;
        const v11336 = v6829.decimals;
        const v11338 = v6829.name;
        const v11340 = v6829.protoBals;
        const v11341 = v6829.protoInfo;
        const v11342 = v6829.symbol;
        const v11343 = v6829.tokA;
        const v11344 = v6829.tokB;
        const v11345 = v6829.totalSupply;
        const v11346 = v6829.zeroAddress;
        const v11355 = stdlib.safeAdd256(v6889, v11256);
        const v11358 = stdlib.safeSub256(v6890, v11256);
        const v11365 = stdlib.safeSub256(v11259, v11262);
        const v11369 = stdlib.safeSub256(v11260, v11264);
        const v11371 = {
          A: v11355,
          B: v11358
          };
        const v11372 = {
          A: v11365,
          B: v11369
          };
        const v11373 = {
          closed: v11335,
          decimals: v11336,
          lptBals: v11371,
          name: v11338,
          poolBals: v11372,
          protoBals: v11340,
          protoInfo: v11341,
          symbol: v11342,
          tokA: v11343,
          tokB: v11344,
          totalSupply: v11345,
          zeroAddress: v11346
          };
        const cv6829 = v11373;
        const cv6830 = v7904;
        const cv6833 = v11321;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapAForB0_386': {
        const v12190 = v7903[1];
        undefined /* setApiDetails */;
        const v12238 = v12190[stdlib.checkedBigNumberify('./index.rsh:1347:12:spread', stdlib.UInt_max, '0')];
        const v12239 = v12190[stdlib.checkedBigNumberify('./index.rsh:1347:12:spread', stdlib.UInt_max, '1')];
        const v12241 = v6829.poolBals;
        const v12242 = v6829.protoInfo;
        const v12244 = v12241.A;
        const v12245 = v12241.B;
        const v12246 = v12242.protoFee;
        const v12247 = v12242.totFee;
        const v12248 = stdlib.safeSub256(v12245, v12239);
        const v12249 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v12247);
        const v12250 = stdlib.safeMul256(v12239, v12249);
        const v12251 = stdlib.safeMul256(v12248, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v12252 = stdlib.safeMul256(v12250, v12244);
        const v12253 = stdlib.safeDiv256(v12252, v12251);
        const v12254 = stdlib.safeAdd256(v12253, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v12255 = stdlib.ge256(v12238, v12254);
        stdlib.assert(v12255, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:145:20:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)', 'at ./index.rsh:170:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:143:3:function exp)', 'at ./index.rsh:253:19:application call to "computeSwap1" (defined at: ./index.rsh:166:3:function exp)', 'at ./index.rsh:1262:58:application call to "computeSwap" (defined at: ./index.rsh:249:3:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Deployer'
          });
        const v12257 = stdlib.safeSub256(v12238, v12254);
        const v12261 = stdlib.safeMul256(v12246, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v12262 = stdlib.safeDiv256(v12261, v12247);
        const v12263 = stdlib.safeMul256(v12244, v12254);
        const v12264 = stdlib.safeMul256(v12254, v12245);
        const v12265 = stdlib.safeDiv256(v12264, v12263);
        const v12266 = stdlib.safeSub256(v12265, v12239);
        const v12267 = stdlib.safeMul256(v12266, v12262);
        const v12268 = stdlib.safeDiv256(v12267, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v12269 = stdlib.safeMul256(v12254, v12246);
        const v12270 = stdlib.safeDiv256(v12269, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v12271 = stdlib.safeMul256(v12270, v12245);
        const v12272 = stdlib.safeDiv256(v12271, v12263);
        const v12273 = stdlib.gt256(v12272, v12268);
        const v12274 = [v12270, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v12275 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12268];
        const v12276 = v12273 ? v12274 : v12275;
        const v12278 = v12276[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
        const v12279 = v12276[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
        const v12284 = v12242.locked;
        const v12285 = v12284 ? false : true;
        stdlib.assert(v12285, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v12292 = stdlib.safeAdd256(v12244, v12238);
        const v12300 = stdlib.safeSub256(v12292, v12257);
        const v12307 = stdlib.safeSub256(v12300, v12278);
        const v12310 = stdlib.safeSub256(v12248, v12279);
        const v12324 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12257);
        const v12325 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12239);
        const v12326 = v12324 ? v12325 : false;
        stdlib.assert(v12326, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v12331 = stdlib.safeMul256(v12244, v12245);
        const v12332 = stdlib.safeMul256(v12307, v12310);
        const v12333 = stdlib.ge256(v12332, v12331);
        stdlib.assert(v12333, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v12338 = stdlib.cast("UInt256", "UInt", v12238, false, true);
        const v12444 = stdlib.add(v6833, v12338);
        ;
        const v12881 = v6829.protoBals;
        const v12882 = v12881.A;
        const v12886 = stdlib.safeAdd256(v12882, v12278);
        const v12887 = v12881.B;
        const v12891 = stdlib.safeAdd256(v12887, v12279);
        const v12911 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
        const v12915 = undefined /* Remote */;
        const v12916 = await txn3.getOutput('internal', 'v12915', ctc14, v12915);
        const v12918 = v12916[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
        const v12923 = stdlib.add(v12444, v12918);
        const v12924 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v12918);
        stdlib.assert(v12924, {
          at: './index.rsh:598:5:application',
          fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1349:51:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1349:47:application call to [unknown function] (defined at: ./index.rsh:1349:47:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v12925 = {
          A: v12257,
          B: v12239
          };
        await txn3.getOutput('Trader_exactSwapAForB', 'v12925', ctc16, v12925);
        const v12935 = {
          A: v12238,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v12937 = {
          A: v12307,
          B: v12310
          };
        const v12938 = [v7902, v12935, v12925, v12937];
        const v12939 = ['SwapEvent', v12938];
        null;
        const v12940 = v6829.closed;
        const v12941 = v6829.decimals;
        const v12943 = v6829.name;
        const v12947 = v6829.symbol;
        const v12948 = v6829.tokA;
        const v12949 = v6829.tokB;
        const v12950 = v6829.totalSupply;
        const v12951 = v6829.zeroAddress;
        const v12953 = {
          A: v12886,
          B: v12891
          };
        const v12954 = {
          closed: v12940,
          decimals: v12941,
          lptBals: v6888,
          name: v12943,
          poolBals: v12937,
          protoBals: v12953,
          protoInfo: v12242,
          symbol: v12947,
          tokA: v12948,
          tokB: v12949,
          totalSupply: v12950,
          zeroAddress: v12951
          };
        const cv6829 = v12954;
        const cv6830 = v7904;
        const cv6833 = v12923;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_exactSwapBForA0_386': {
        const v13618 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v14392 = v13618[stdlib.checkedBigNumberify('./index.rsh:1352:12:spread', stdlib.UInt_max, '0')];
        const v14393 = v13618[stdlib.checkedBigNumberify('./index.rsh:1352:12:spread', stdlib.UInt_max, '1')];
        const v14395 = v6829.poolBals;
        const v14396 = v6829.protoInfo;
        const v14398 = v14395.B;
        const v14399 = v14395.A;
        const v14400 = v14396.protoFee;
        const v14401 = v14396.totFee;
        const v14402 = stdlib.safeSub256(v14399, v14393);
        const v14403 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14401);
        const v14404 = stdlib.safeMul256(v14393, v14403);
        const v14405 = stdlib.safeMul256(v14402, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v14406 = stdlib.safeMul256(v14404, v14398);
        const v14407 = stdlib.safeDiv256(v14406, v14405);
        const v14408 = stdlib.safeAdd256(v14407, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v14409 = stdlib.ge256(v14392, v14408);
        stdlib.assert(v14409, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:145:20:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)', 'at ./index.rsh:170:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:143:3:function exp)', 'at ./index.rsh:269:19:application call to "computeSwap1" (defined at: ./index.rsh:166:3:function exp)', 'at ./index.rsh:1262:58:application call to "computeSwap" (defined at: ./index.rsh:249:3:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'provided enough funds to receive amt out',
          who: 'Deployer'
          });
        const v14411 = stdlib.safeSub256(v14392, v14408);
        const v14415 = stdlib.safeMul256(v14400, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v14416 = stdlib.safeDiv256(v14415, v14401);
        const v14417 = stdlib.safeMul256(v14398, v14408);
        const v14418 = stdlib.safeMul256(v14408, v14399);
        const v14419 = stdlib.safeDiv256(v14418, v14417);
        const v14420 = stdlib.safeSub256(v14419, v14393);
        const v14421 = stdlib.safeMul256(v14420, v14416);
        const v14422 = stdlib.safeDiv256(v14421, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v14423 = stdlib.safeMul256(v14408, v14400);
        const v14424 = stdlib.safeDiv256(v14423, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v14425 = stdlib.safeMul256(v14424, v14399);
        const v14426 = stdlib.safeDiv256(v14425, v14417);
        const v14427 = stdlib.gt256(v14426, v14422);
        const v14428 = [v14424, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v14429 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14422];
        const v14430 = v14427 ? v14428 : v14429;
        const v14432 = v14430[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
        const v14433 = v14430[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
        const v14438 = v14396.locked;
        const v14439 = v14438 ? false : true;
        stdlib.assert(v14439, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v14450 = stdlib.safeAdd256(v14398, v14392);
        const v14457 = stdlib.safeSub256(v14450, v14411);
        const v14461 = stdlib.safeSub256(v14402, v14433);
        const v14464 = stdlib.safeSub256(v14457, v14432);
        const v14466 = v6829.protoBals;
        const v14467 = v14466.A;
        const v14471 = stdlib.safeAdd256(v14467, v14433);
        const v14472 = v14466.B;
        const v14476 = stdlib.safeAdd256(v14472, v14432);
        const v14478 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14393);
        const v14479 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14411);
        const v14480 = v14478 ? v14479 : false;
        stdlib.assert(v14480, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v14485 = stdlib.safeMul256(v14399, v14398);
        const v14486 = stdlib.safeMul256(v14461, v14464);
        const v14487 = stdlib.ge256(v14486, v14485);
        stdlib.assert(v14487, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v14496 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
        const v14498 = [v7902, v6788];
        const v14499 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v14498];
        const v14503 = undefined /* Remote */;
        const v14504 = await txn3.getOutput('internal', 'v14503', ctc14, v14503);
        const v14506 = v14504[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
        const v14511 = stdlib.add(v6833, v14506);
        const v14512 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14506);
        stdlib.assert(v14512, {
          at: './index.rsh:613:5:application',
          fs: ['at ./index.rsh:1289:39:application call to "arc200_transferFrom" (defined at: ./index.rsh:600:60:function exp)', 'at ./index.rsh:1354:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v14519 = undefined /* Remote */;
        const v14520 = await txn3.getOutput('internal', 'v14519', ctc14, v14519);
        const v14522 = v14520[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
        const v14527 = stdlib.add(v14511, v14522);
        const v14528 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14522);
        stdlib.assert(v14528, {
          at: './index.rsh:598:5:application',
          fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1354:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v14529 = {
          A: v14393,
          B: v14411
          };
        await txn3.getOutput('Trader_exactSwapBForA', 'v14529', ctc16, v14529);
        const v14539 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v14392
          };
        const v14541 = {
          A: v14461,
          B: v14464
          };
        const v14542 = [v7902, v14539, v14529, v14541];
        const v14543 = ['SwapEvent', v14542];
        null;
        const v14544 = v6829.closed;
        const v14545 = v6829.decimals;
        const v14547 = v6829.name;
        const v14551 = v6829.symbol;
        const v14552 = v6829.tokA;
        const v14553 = v6829.tokB;
        const v14554 = v6829.totalSupply;
        const v14555 = v6829.zeroAddress;
        const v14557 = {
          A: v14471,
          B: v14476
          };
        const v14558 = {
          closed: v14544,
          decimals: v14545,
          lptBals: v6888,
          name: v14547,
          poolBals: v14541,
          protoBals: v14557,
          protoInfo: v14396,
          symbol: v14551,
          tokA: v14552,
          tokB: v14553,
          totalSupply: v14554,
          zeroAddress: v14555
          };
        const cv6829 = v14558;
        const cv6830 = v7904;
        const cv6833 = v14527;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapAForB0_386': {
        const v15046 = v7903[1];
        undefined /* setApiDetails */;
        const v15197 = v15046[stdlib.checkedBigNumberify('./index.rsh:1337:12:spread', stdlib.UInt_max, '0')];
        const v15198 = v15046[stdlib.checkedBigNumberify('./index.rsh:1337:12:spread', stdlib.UInt_max, '1')];
        const v15201 = v6829.poolBals;
        const v15202 = v6829.protoInfo;
        const v15204 = v15201.A;
        const v15205 = v15201.B;
        const v15206 = v15202.protoFee;
        const v15207 = v15202.totFee;
        const v15208 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15207);
        const v15209 = stdlib.safeMul256(v15197, v15208);
        const v15210 = stdlib.safeMul256(v15204, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v15211 = stdlib.safeAdd256(v15210, v15209);
        const v15212 = stdlib.safeMul256(v15209, v15205);
        const v15213 = stdlib.safeDiv256(v15212, v15211);
        const v15217 = stdlib.safeMul256(v15206, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v15218 = stdlib.safeDiv256(v15217, v15207);
        const v15219 = stdlib.safeMul256(v15204, v15197);
        const v15220 = stdlib.safeMul256(v15197, v15205);
        const v15221 = stdlib.safeDiv256(v15220, v15219);
        const v15222 = stdlib.safeSub256(v15221, v15213);
        const v15223 = stdlib.safeMul256(v15222, v15218);
        const v15224 = stdlib.safeDiv256(v15223, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v15225 = stdlib.safeMul256(v15197, v15206);
        const v15226 = stdlib.safeDiv256(v15225, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v15227 = stdlib.safeMul256(v15226, v15205);
        const v15228 = stdlib.safeDiv256(v15227, v15219);
        const v15229 = stdlib.gt256(v15228, v15224);
        const v15230 = [v15226, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v15231 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15224];
        const v15232 = v15229 ? v15230 : v15231;
        const v15234 = v15232[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
        const v15235 = v15232[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
        const v15240 = v15202.locked;
        const v15241 = v15240 ? false : true;
        stdlib.assert(v15241, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v15248 = stdlib.safeAdd256(v15204, v15197);
        const v15258 = stdlib.safeSub256(v15205, v15213);
        const v15262 = stdlib.safeSub256(v15248, v15234);
        const v15265 = stdlib.safeSub256(v15258, v15235);
        const v15279 = stdlib.le256(v15198, v15213);
        stdlib.assert(v15279, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v15284 = stdlib.safeMul256(v15204, v15205);
        const v15285 = stdlib.safeMul256(v15262, v15265);
        const v15286 = stdlib.ge256(v15285, v15284);
        stdlib.assert(v15286, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v15291 = stdlib.cast("UInt256", "UInt", v15197, false, true);
        const v15300 = stdlib.add(v6833, v15291);
        ;
        const v16066 = v6829.protoBals;
        const v16067 = v16066.A;
        const v16071 = stdlib.safeAdd256(v16067, v15234);
        const v16072 = v16066.B;
        const v16076 = stdlib.safeAdd256(v16072, v15235);
        const v16094 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
        const v16098 = undefined /* Remote */;
        const v16099 = await txn3.getOutput('internal', 'v16098', ctc14, v16098);
        const v16101 = v16099[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
        const v16106 = stdlib.add(v15300, v16101);
        const v16107 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16101);
        stdlib.assert(v16107, {
          at: './index.rsh:598:5:application',
          fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1339:51:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1339:47:application call to [unknown function] (defined at: ./index.rsh:1339:47:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v16108 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v15213
          };
        await txn3.getOutput('Trader_swapAForB', 'v16108', ctc16, v16108);
        const v16118 = {
          A: v15197,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v16120 = {
          A: v15262,
          B: v15265
          };
        const v16121 = [v7902, v16118, v16108, v16120];
        const v16122 = ['SwapEvent', v16121];
        null;
        const v16123 = v6829.closed;
        const v16124 = v6829.decimals;
        const v16126 = v6829.name;
        const v16130 = v6829.symbol;
        const v16131 = v6829.tokA;
        const v16132 = v6829.tokB;
        const v16133 = v6829.totalSupply;
        const v16134 = v6829.zeroAddress;
        const v16136 = {
          A: v16071,
          B: v16076
          };
        const v16137 = {
          closed: v16123,
          decimals: v16124,
          lptBals: v6888,
          name: v16126,
          poolBals: v16120,
          protoBals: v16136,
          protoInfo: v15202,
          symbol: v16130,
          tokA: v16131,
          tokB: v16132,
          totalSupply: v16133,
          zeroAddress: v16134
          };
        const cv6829 = v16137;
        const cv6830 = v7904;
        const cv6833 = v16106;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Trader_swapBForA0_386': {
        const v16474 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v17575 = v16474[stdlib.checkedBigNumberify('./index.rsh:1342:12:spread', stdlib.UInt_max, '0')];
        const v17576 = v16474[stdlib.checkedBigNumberify('./index.rsh:1342:12:spread', stdlib.UInt_max, '1')];
        const v17579 = v6829.poolBals;
        const v17580 = v6829.protoInfo;
        const v17582 = v17579.B;
        const v17583 = v17579.A;
        const v17584 = v17580.protoFee;
        const v17585 = v17580.totFee;
        const v17586 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v17585);
        const v17587 = stdlib.safeMul256(v17575, v17586);
        const v17588 = stdlib.safeMul256(v17582, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v17589 = stdlib.safeAdd256(v17588, v17587);
        const v17590 = stdlib.safeMul256(v17587, v17583);
        const v17591 = stdlib.safeDiv256(v17590, v17589);
        const v17595 = stdlib.safeMul256(v17584, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v17596 = stdlib.safeDiv256(v17595, v17585);
        const v17597 = stdlib.safeMul256(v17582, v17575);
        const v17598 = stdlib.safeMul256(v17575, v17583);
        const v17599 = stdlib.safeDiv256(v17598, v17597);
        const v17600 = stdlib.safeSub256(v17599, v17591);
        const v17601 = stdlib.safeMul256(v17600, v17596);
        const v17602 = stdlib.safeDiv256(v17601, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
        const v17603 = stdlib.safeMul256(v17575, v17584);
        const v17604 = stdlib.safeDiv256(v17603, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v17605 = stdlib.safeMul256(v17604, v17583);
        const v17606 = stdlib.safeDiv256(v17605, v17597);
        const v17607 = stdlib.gt256(v17606, v17602);
        const v17608 = [v17604, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v17609 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v17602];
        const v17610 = v17607 ? v17608 : v17609;
        const v17612 = v17610[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
        const v17613 = v17610[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
        const v17618 = v17580.locked;
        const v17619 = v17618 ? false : true;
        stdlib.assert(v17619, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v17630 = stdlib.safeAdd256(v17582, v17575);
        const v17634 = stdlib.safeSub256(v17583, v17591);
        const v17640 = stdlib.safeSub256(v17634, v17613);
        const v17643 = stdlib.safeSub256(v17630, v17612);
        const v17645 = v6829.protoBals;
        const v17646 = v17645.A;
        const v17650 = stdlib.safeAdd256(v17646, v17613);
        const v17651 = v17645.B;
        const v17655 = stdlib.safeAdd256(v17651, v17612);
        const v17657 = stdlib.le256(v17576, v17591);
        stdlib.assert(v17657, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
          msg: 'slippage',
          who: 'Deployer'
          });
        const v17663 = stdlib.safeMul256(v17583, v17582);
        const v17664 = stdlib.safeMul256(v17640, v17643);
        const v17665 = stdlib.ge256(v17664, v17663);
        stdlib.assert(v17665, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
          msg: 'constant product',
          who: 'Deployer'
          });
        const v17674 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
        const v17676 = [v7902, v6788];
        const v17677 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v17676];
        const v17681 = undefined /* Remote */;
        const v17682 = await txn3.getOutput('internal', 'v17681', ctc14, v17681);
        const v17684 = v17682[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
        const v17689 = stdlib.add(v6833, v17684);
        const v17690 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v17684);
        stdlib.assert(v17690, {
          at: './index.rsh:613:5:application',
          fs: ['at ./index.rsh:1289:39:application call to "arc200_transferFrom" (defined at: ./index.rsh:600:60:function exp)', 'at ./index.rsh:1344:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v17697 = undefined /* Remote */;
        const v17698 = await txn3.getOutput('internal', 'v17697', ctc14, v17697);
        const v17700 = v17698[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
        const v17705 = stdlib.add(v17689, v17700);
        const v17706 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v17700);
        stdlib.assert(v17706, {
          at: './index.rsh:598:5:application',
          fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1344:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v17707 = {
          A: v17591,
          B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        await txn3.getOutput('Trader_swapBForA', 'v17707', ctc16, v17707);
        const v17717 = {
          A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          B: v17575
          };
        const v17719 = {
          A: v17640,
          B: v17643
          };
        const v17720 = [v7902, v17717, v17707, v17719];
        const v17721 = ['SwapEvent', v17720];
        null;
        const v17722 = v6829.closed;
        const v17723 = v6829.decimals;
        const v17725 = v6829.name;
        const v17729 = v6829.symbol;
        const v17730 = v6829.tokA;
        const v17731 = v6829.tokB;
        const v17732 = v6829.totalSupply;
        const v17733 = v6829.zeroAddress;
        const v17735 = {
          A: v17650,
          B: v17655
          };
        const v17736 = {
          closed: v17722,
          decimals: v17723,
          lptBals: v6888,
          name: v17725,
          poolBals: v17719,
          protoBals: v17735,
          protoInfo: v17580,
          symbol: v17729,
          tokA: v17730,
          tokB: v17731,
          totalSupply: v17732,
          zeroAddress: v17733
          };
        const cv6829 = v17736;
        const cv6830 = v7904;
        const cv6833 = v17705;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'approve0_386': {
        const v17902 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v19174 = v17902[stdlib.checkedBigNumberify('./index.rsh:996:12:spread', stdlib.UInt_max, '0')];
        const v19175 = v17902[stdlib.checkedBigNumberify('./index.rsh:996:12:spread', stdlib.UInt_max, '1')];
        const v19177 = stdlib.addressEq(v7902, v6754);
        const v19178 = v19177 ? false : true;
        stdlib.assert(v19178, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:988:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:20:application call to "chkApprove_" (defined at: ./index.rsh:987:56:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v19180 = stdlib.addressEq(v19174, v6754);
        const v19181 = v19180 ? false : true;
        stdlib.assert(v19181, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:989:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:20:application call to "chkApprove_" (defined at: ./index.rsh:987:56:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v19185 = [v7902, v19174];
        await stdlib.mapSet(map1, ctc21, v19185, ctc1, v19175);
        null;
        const v19187 = true;
        await txn3.getOutput('approve', 'v19187', ctc11, v19187);
        const cv6829 = v6829;
        const cv6830 = v7904;
        const cv6833 = v6833;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_386': {
        const v19330 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v20625 = v19330[stdlib.checkedBigNumberify('./index.rsh:1030:12:spread', stdlib.UInt_max, '0')];
        const v20626 = v19330[stdlib.checkedBigNumberify('./index.rsh:1030:12:spread', stdlib.UInt_max, '1')];
        const v20627 = [v20625, v20626];
        const v20628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v20627, ctc1), null);
        const v20629 = {
          None: 0,
          Some: 1
          }[v20628[0]];
        const v20630 = stdlib.eq(v20629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v20630, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1031:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:15:application call to [unknown function] (defined at: ./index.rsh:1040:15:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v20634 = stdlib.fromSome(v20628, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v20635 = stdlib.eq256(v20634, stdlib.checkedBigNumberify('./index.rsh:1036:48:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v20635, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1035:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:15:application call to [unknown function] (defined at: ./index.rsh:1040:15:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc21, v20627, ctc1, undefined /* Nothing */);
        const v20640 = true;
        await txn3.getOutput('deleteAllowanceBox', 'v20640', ctc11, v20640);
        const cv6829 = v6829;
        const cv6830 = v7904;
        const cv6833 = v6833;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_386': {
        const v20758 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v22078 = v20758[stdlib.checkedBigNumberify('./index.rsh:1011:12:spread', stdlib.UInt_max, '0')];
        const v22079 = stdlib.addressEq(v22078, v6754);
        const v22080 = v22079 ? false : true;
        stdlib.assert(v22080, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1012:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v22082 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v22078, ctc1), null);
        const v22083 = {
          None: 0,
          Some: 1
          }[v22082[0]];
        const v22084 = stdlib.eq(v22083, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v22084, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1016:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v22087 = stdlib.fromSome(v22082, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v22088 = stdlib.eq256(v22087, stdlib.checkedBigNumberify('./index.rsh:1017:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v22088, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1017:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc9, v22078, ctc1, undefined /* Nothing */);
        const v22091 = true;
        await txn3.getOutput('deleteBalanceBox', 'v22091', ctc11, v22091);
        const cv6829 = v6829;
        const cv6830 = v7904;
        const cv6833 = v6833;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_386': {
        const v22186 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v23528 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v23529 = {
          None: 0,
          Some: 1
          }[v23528[0]];
        const v23530 = stdlib.eq(v23529, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v23530, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:1053:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1058:15:application call to [unknown function] (defined at: ./index.rsh:1058:15:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc9, v6754, ctc1, undefined /* Nothing */);
        const v23532 = null;
        await txn3.getOutput('destroy', 'v23532', ctc0, v23532);
        const cv6829 = v6829;
        const cv6830 = v7904;
        const cv6833 = v6833;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transfer0_386': {
        const v23614 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v24968 = v23614[stdlib.checkedBigNumberify('./index.rsh:938:12:spread', stdlib.UInt_max, '0')];
        const v24969 = v23614[stdlib.checkedBigNumberify('./index.rsh:938:12:spread', stdlib.UInt_max, '1')];
        const v24971 = stdlib.addressEq(v24968, v6754);
        const v24972 = v24971 ? false : true;
        stdlib.assert(v24972, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:927:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:939:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:941:15:application call to [unknown function] (defined at: ./index.rsh:941:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v24974 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v7902, ctc1), null);
        const v24975 = stdlib.fromSome(v24974, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v24976 = stdlib.ge256(v24975, v24969);
        stdlib.assert(v24976, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:939:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:941:15:application call to [unknown function] (defined at: ./index.rsh:941:15:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v24980 = true;
        await txn3.getOutput('transfer', 'v24980', ctc11, v24980);
        const v24990 = stdlib.safeSub256(v24975, v24969);
        await stdlib.mapSet(map0, ctc9, v7902, ctc1, v24990);
        const v24991 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v24968, ctc1), null);
        const v24992 = stdlib.fromSome(v24991, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v24993 = stdlib.safeAdd256(v24992, v24969);
        await stdlib.mapSet(map0, ctc9, v24968, ctc1, v24993);
        null;
        const cv6829 = v6829;
        const cv6830 = v7904;
        const cv6833 = v6833;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_386': {
        const v25042 = v7903[1];
        undefined /* setApiDetails */;
        ;
        const v26425 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '0')];
        const v26426 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '1')];
        const v26427 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '2')];
        const v26429 = stdlib.addressEq(v26425, v6754);
        const v26430 = v26429 ? false : true;
        stdlib.assert(v26430, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v26432 = stdlib.addressEq(v26426, v6754);
        const v26433 = v26432 ? false : true;
        stdlib.assert(v26433, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:955:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v26435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v26425, ctc1), null);
        const v26436 = stdlib.fromSome(v26435, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v26437 = stdlib.ge256(v26436, v26427);
        stdlib.assert(v26437, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:956:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v26439 = [v26425, v7902];
        const v26440 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc21, v26439, ctc1), null);
        const v26441 = stdlib.fromSome(v26440, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v26442 = stdlib.ge256(v26441, v26427);
        stdlib.assert(v26442, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:960:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v26449 = stdlib.safeSub256(v26436, v26427);
        await stdlib.mapSet(map0, ctc9, v26425, ctc1, v26449);
        const v26450 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc9, v26426, ctc1), null);
        const v26451 = stdlib.fromSome(v26450, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v26452 = stdlib.safeAdd256(v26451, v26427);
        await stdlib.mapSet(map0, ctc9, v26426, ctc1, v26452);
        null;
        const v26457 = stdlib.safeSub256(v26441, v26427);
        await stdlib.mapSet(map1, ctc21, v26439, ctc1, v26457);
        null;
        const v26460 = true;
        await txn3.getOutput('transferFrom', 'v26460', ctc11, v26460);
        const cv6829 = v6829;
        const cv6830 = v7904;
        const cv6833 = v6833;
        
        v6829 = cv6829;
        v6830 = cv6830;
        v6833 = cv6833;
        
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
    out_tys: [ctc23],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v26496], secs: v26498, time: v26497, didSend: v6693, from: v26495 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v26499 = null;
  await txn3.getOutput('Protocol_delete', 'v26499', ctc0, v26499);
  const v26505 = v6829.protoInfo;
  const v26506 = v26505.protoAddr;
  ;
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
    tokA: ctc0,
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
  
  
  const [v6748, v6749, v6829, v6833] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), [ctc6, ctc3, ctc12, ctc3]);
  const v26494 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1357:5:application',
    fs: ['at ./index.rsh:1357:5:application call to [unknown function] (defined at: ./index.rsh:1357:5:function exp)'],
    msg: 'in',
    who: 'Protocol_delete'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6829, v6833, v26494],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1357:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v26496], secs: v26498, time: v26497, didSend: v6693, from: v26495 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Protocol_delete"
        });
      ;
      const v26499 = null;
      const v26500 = await txn1.getOutput('Protocol_delete', 'v26499', ctc0, v26499);
      
      const v26505 = v6829.protoInfo;
      const v26506 = v26505.protoAddr;
      sim_r.txns.push({
        kind: 'from',
        to: v26506,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc12, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v26496], secs: v26498, time: v26497, didSend: v6693, from: v26495 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v26499 = null;
  const v26500 = await txn1.getOutput('Protocol_delete', 'v26499', ctc0, v26499);
  stdlib.protect(ctc0, await interact.out(v26496, v26500), {
    at: './index.rsh:1357:5:application',
    fs: ['at ./index.rsh:1357:5:application call to [unknown function] (defined at: ./index.rsh:1357:5:function exp)', 'at ./index.rsh:1358:6:application call to "k" (defined at: ./index.rsh:1357:5:function exp)'],
    msg: 'out',
    who: 'Protocol_delete'
    });
  
  const v26505 = v6829.protoInfo;
  const v26506 = v26505.protoAddr;
  ;
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc16 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc15,
    Provider_deposit0_386: ctc16,
    Provider_withdraw0_386: ctc17,
    Trader_exactSwapAForB0_386: ctc18,
    Trader_exactSwapBForA0_386: ctc18,
    Trader_swapAForB0_386: ctc18,
    Trader_swapBForA0_386: ctc18,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  const ctc25 = stdlib.T_Tuple([ctc11, ctc3]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7037 = ctc.selfAddress();
  const v7039 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1068:60:application call to [unknown function] (defined at: ./index.rsh:1068:60:function exp)', 'at ./index.rsh:827:31:application call to "runProtocol_harvest0_386" (defined at: ./index.rsh:1068:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Protocol_harvest'
    });
  const v7041 = v7039[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7042 = v7041.protoFee;
  const v7043 = v7041.lpFee;
  const v7044 = v7041.totFee;
  const v7045 = stdlib.lt256(v7042, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7046 = stdlib.lt256(v7043, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7047 = v7045 ? v7046 : false;
  let v7048;
  if (v7047) {
    const v7049 = stdlib.safeAdd256(v7043, v7042);
    const v7050 = stdlib.eq256(v7044, v7049);
    v7048 = v7050;
    }
  else {
    v7048 = false;
    }
  const v7051 = stdlib.lt256(v7044, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7052 = v7048 ? v7051 : false;
  const v7053 = stdlib.gt256(v7044, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v7054 = v7052 ? v7053 : false;
  stdlib.assert(v7054, {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1068:60:application call to [unknown function] (defined at: ./index.rsh:1068:60:function exp)', 'at ./index.rsh:827:31:application call to "runProtocol_harvest0_386" (defined at: ./index.rsh:1068:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v7057 = v6829.protoInfo;
  const v7058 = v7057.protoAddr;
  const v7059 = stdlib.addressEq(v7037, v7058);
  stdlib.assert(v7059, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1069:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1068:60:application call to [unknown function] (defined at: ./index.rsh:1068:60:function exp)', 'at ./index.rsh:827:31:application call to "runProtocol_harvest0_386" (defined at: ./index.rsh:1068:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'Thou art not the Protocol',
    who: 'Protocol_harvest'
    });
  let v7067;
  if (v7047) {
    const v7068 = stdlib.safeAdd256(v7043, v7042);
    const v7069 = stdlib.eq256(v7044, v7068);
    v7067 = v7069;
    }
  else {
    v7067 = false;
    }
  const v7071 = v7067 ? v7051 : false;
  const v7073 = v7071 ? v7053 : false;
  stdlib.assert(v7073, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:336:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1070:16:application call to "chkFees" (defined at: ./index.rsh:336:21:function exp)', 'at ./index.rsh:1068:60:application call to [unknown function] (defined at: ./index.rsh:1068:60:function exp)', 'at ./index.rsh:827:31:application call to "runProtocol_harvest0_386" (defined at: ./index.rsh:1068:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: null,
    who: 'Protocol_harvest'
    });
  const v7096 = ['Protocol_harvest0_386', v7039];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7096],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1068:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Protocol_harvest"
            });
          ;
          const v8162 = v7906[stdlib.checkedBigNumberify('./index.rsh:1068:12:spread', stdlib.UInt_max, '0')];
          const v8163 = v7906[stdlib.checkedBigNumberify('./index.rsh:1068:12:spread', stdlib.UInt_max, '1')];
          const v8168 = v8163.protoFee;
          const v8169 = v8163.lpFee;
          const v8170 = v8163.totFee;
          const v8182 = v8163.locked;
          const v8183 = v8182 ? false : false;
          const v8184 = v6829.poolBals;
          const v8185 = v8184.A;
          const v8186 = v8184.B;
          const v8187 = stdlib.eq256(v8185, stdlib.checkedBigNumberify('./index.rsh:852:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8188 = stdlib.eq256(v8186, stdlib.checkedBigNumberify('./index.rsh:852:74:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v8189 = v8187 ? v8188 : false;
          const v8190 = v8183 ? v8189 : false;
          const v8194 = (stdlib.le(await ctc.getBalance(), v6833) ? stdlib.checkedBigNumberify('./index.rsh:1077:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6833));
          const v8195 = stdlib.safeAdd(v8194, v6833);
          const v8196 = v6829.protoBals;
          const v8197 = v8196.B;
          const v8199 = v8196.A;
          const v8203 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8162];
          const v8207 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v8162],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v6790], [ctc10, v8203]],
                fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v8208 = await txn1.getOutput('internal', 'v8207', ctc24, v8207);
          const v8210 = v8208[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
          const v8215 = stdlib.add(v8195, v8210);
          const v8220 = {
            A: v8199,
            B: v8197
            };
          const v8221 = [v8220, v8194];
          const v8222 = await txn1.getOutput('Protocol_harvest', 'v8221', ctc25, v8221);
          
          const v8249 = v8163.protoAddr;
          const v8251 = {
            locked: v8182,
            lpFee: v8169,
            protoAddr: v8249,
            protoFee: v8168,
            totFee: v8170
            };
          const v8252 = [v8251];
          const v8253 = ['HarvestEvent', v8252];
          null;
          const v8255 = v6829.decimals;
          const v8257 = v6829.name;
          const v8261 = v6829.symbol;
          const v8262 = v6829.tokA;
          const v8263 = v6829.tokB;
          const v8264 = v6829.totalSupply;
          const v8265 = v6829.zeroAddress;
          const v8267 = {
            closed: v8190,
            decimals: v8255,
            lptBals: v6888,
            name: v8257,
            poolBals: v8184,
            protoBals: v6825,
            protoInfo: v8163,
            symbol: v8261,
            tokA: v8262,
            tokB: v8263,
            totalSupply: v8264,
            zeroAddress: v8265
            };
          const v37901 = v8267;
          const v37903 = v8215;
          const v37904 = v8267.closed;
          if (v37904) {
            sim_r.isHalt = false;
            }
          else {
            const v37906 = v8267.lptBals;
            const v37907 = v37906.A;
            const v37908 = v37906.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v8162 = v7906[stdlib.checkedBigNumberify('./index.rsh:1068:12:spread', stdlib.UInt_max, '0')];
      const v8163 = v7906[stdlib.checkedBigNumberify('./index.rsh:1068:12:spread', stdlib.UInt_max, '1')];
      const v8164 = v6829.protoInfo;
      const v8165 = v8164.protoAddr;
      const v8166 = stdlib.addressEq(v7902, v8165);
      stdlib.assert(v8166, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1069:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
        msg: 'Thou art not the Protocol',
        who: 'Protocol_harvest'
        });
      const v8168 = v8163.protoFee;
      const v8169 = v8163.lpFee;
      const v8170 = v8163.totFee;
      const v8171 = stdlib.lt256(v8168, stdlib.checkedBigNumberify('./index.rsh:330:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v8172 = stdlib.lt256(v8169, stdlib.checkedBigNumberify('./index.rsh:331:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v8173 = v8171 ? v8172 : false;
      let v8174;
      if (v8173) {
        const v8175 = stdlib.safeAdd256(v8169, v8168);
        const v8176 = stdlib.eq256(v8170, v8175);
        v8174 = v8176;
        }
      else {
        v8174 = false;
        }
      const v8177 = stdlib.lt256(v8170, stdlib.checkedBigNumberify('./index.rsh:333:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v8178 = v8174 ? v8177 : false;
      const v8179 = stdlib.gt256(v8170, stdlib.checkedBigNumberify('./index.rsh:334:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8180 = v8178 ? v8179 : false;
      stdlib.assert(v8180, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:336:29:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1070:16:application call to "chkFees" (defined at: ./index.rsh:336:21:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
        msg: null,
        who: 'Protocol_harvest'
        });
      const v8182 = v8163.locked;
      const v8183 = v8182 ? false : false;
      const v8184 = v6829.poolBals;
      const v8185 = v8184.A;
      const v8186 = v8184.B;
      const v8187 = stdlib.eq256(v8185, stdlib.checkedBigNumberify('./index.rsh:852:55:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8188 = stdlib.eq256(v8186, stdlib.checkedBigNumberify('./index.rsh:852:74:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v8189 = v8187 ? v8188 : false;
      const v8190 = v8183 ? v8189 : false;
      const v8194 = (stdlib.le(await ctc.getBalance(), v6833) ? stdlib.checkedBigNumberify('./index.rsh:1077:40:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v6833));
      const v8195 = stdlib.safeAdd(v8194, v6833);
      const v8196 = v6829.protoBals;
      const v8197 = v8196.B;
      const v8199 = v8196.A;
      const v8203 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8162];
      const v8207 = undefined /* Remote */;
      const v8208 = await txn1.getOutput('internal', 'v8207', ctc24, v8207);
      const v8210 = v8208[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v8215 = stdlib.add(v8195, v8210);
      const v8216 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v8210);
      stdlib.assert(v8216, {
        at: './index.rsh:598:5:application',
        fs: ['at ./index.rsh:1083:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
        msg: 'remote bill check',
        who: 'Protocol_harvest'
        });
      const v8220 = {
        A: v8199,
        B: v8197
        };
      const v8221 = [v8220, v8194];
      const v8222 = await txn1.getOutput('Protocol_harvest', 'v8221', ctc25, v8221);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v7906, v8222), {
          at: './index.rsh:1068:13:application',
          fs: ['at ./index.rsh:1068:13:application call to [unknown function] (defined at: ./index.rsh:1068:13:function exp)', 'at ./index.rsh:1091:14:application call to "k" (defined at: ./index.rsh:1076:15:function exp)', 'at ./index.rsh:1076:15:application call to [unknown function] (defined at: ./index.rsh:1076:15:function exp)'],
          msg: 'out',
          who: 'Protocol_harvest'
          });
        }
      else {
        }
      
      const v8249 = v8163.protoAddr;
      const v8251 = {
        locked: v8182,
        lpFee: v8169,
        protoAddr: v8249,
        protoFee: v8168,
        totFee: v8170
        };
      const v8252 = [v8251];
      const v8253 = ['HarvestEvent', v8252];
      null;
      const v8255 = v6829.decimals;
      const v8257 = v6829.name;
      const v8261 = v6829.symbol;
      const v8262 = v6829.tokA;
      const v8263 = v6829.tokB;
      const v8264 = v6829.totalSupply;
      const v8265 = v6829.zeroAddress;
      const v8267 = {
        closed: v8190,
        decimals: v8255,
        lptBals: v6888,
        name: v8257,
        poolBals: v8184,
        protoBals: v6825,
        protoInfo: v8163,
        symbol: v8261,
        tokA: v8262,
        tokB: v8263,
        totalSupply: v8264,
        zeroAddress: v8265
        };
      const v37901 = v8267;
      const v37903 = v8215;
      const v37904 = v8267.closed;
      if (v37904) {
        return;
        }
      else {
        const v37906 = v8267.lptBals;
        const v37907 = v37906.A;
        const v37908 = v37906.B;
        return;
        }
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc15,
    Provider_withdraw0_386: ctc17,
    Trader_exactSwapAForB0_386: ctc18,
    Trader_exactSwapBForA0_386: ctc18,
    Trader_swapAForB0_386: ctc18,
    Trader_swapBForA0_386: ctc18,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  const ctc25 = stdlib.T_Tuple([ctc8, ctc3, ctc20]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7098 = ctc.selfAddress();
  const v7100 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_deposit0_386" (defined at: ./index.rsh:1107:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Provider_deposit'
    });
  const v7101 = v7100[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7102 = v7100[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7103 = v7100[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v7104 = v7101.A;
  const v7105 = v7101.B;
  const v7109 = v6829.protoInfo;
  const v7110 = v7109.locked;
  const v7111 = v7110 ? false : true;
  stdlib.assert(v7111, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_deposit0_386" (defined at: ./index.rsh:1107:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'locked',
    who: 'Provider_deposit'
    });
  const v7113 = v6829.poolBals;
  let v7115;
  const v7121 = stdlib.eq256(v6890, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  if (v7121) {
    const v7122 = stdlib.safeMul256(v7104, v7105);
    const v7123 = stdlib.sqrt256(v7122);
    v7115 = v7123;
    }
  else {
    const v7124 = v7113.A;
    const v7125 = v7113.B;
    const v7126 = stdlib.safeMul256(v7104, v6890);
    const v7127 = stdlib.safeDiv256(v7126, v7124);
    const v7128 = stdlib.safeMul256(v7105, v6890);
    const v7129 = stdlib.safeDiv256(v7128, v7125);
    const v7130 = stdlib.lt256(v7127, v7129);
    const v7131 = v7130 ? v7127 : v7129;
    v7115 = v7131;
    }
  const v7132 = stdlib.le256(v7102, v7115);
  stdlib.assert(v7132, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_deposit0_386" (defined at: ./index.rsh:1107:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v7136 = stdlib.addressEq(v7098, v6754);
  const v7137 = v7136 ? false : true;
  stdlib.assert(v7137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:927:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_deposit0_386" (defined at: ./index.rsh:1107:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'Provider_deposit'
    });
  const v7139 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6788, ctc1), null);
  const v7140 = stdlib.fromSome(v7139, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v7141 = stdlib.ge256(v7140, v7115);
  stdlib.assert(v7141, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_deposit0_386" (defined at: ./index.rsh:1107:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'Provider_deposit'
    });
  const v7154 = ['Provider_deposit0_386', v7100];
  
  let v7664;
  if (v7121) {
    const v7671 = stdlib.safeMul256(v7104, v7105);
    const v7672 = stdlib.sqrt256(v7671);
    v7664 = v7672;
    }
  else {
    const v7673 = v7113.A;
    const v7674 = v7113.B;
    const v7675 = stdlib.safeMul256(v7104, v6890);
    const v7676 = stdlib.safeDiv256(v7675, v7673);
    const v7677 = stdlib.safeMul256(v7105, v6890);
    const v7678 = stdlib.safeDiv256(v7677, v7674);
    const v7679 = stdlib.lt256(v7676, v7678);
    const v7680 = v7679 ? v7676 : v7678;
    v7664 = v7680;
    }
  const v7681 = stdlib.le256(v7102, v7664);
  stdlib.assert(v7681, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'slippage',
    who: 'Provider_deposit'
    });
  const v7690 = stdlib.ge256(v7140, v7664);
  stdlib.assert(v7690, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'Provider_deposit'
    });
  const v7693 = stdlib.cast("UInt256", "UInt", v7104, false, true);
  const v7694 = stdlib.safeAdd(v7693, v7103);
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7154],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [v7694, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_deposit"
            });
          const v9340 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '0')];
          const v9342 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '2')];
          const v9343 = v6829.protoInfo;
          const v9347 = v6829.poolBals;
          const v9350 = v9340.A;
          const v9351 = v9340.B;
          const v9355 = stdlib.eq256(v6890, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9373 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v6788, ctc1), null);
          const v9374 = stdlib.fromSome(v9373, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9378 = stdlib.cast("UInt256", "UInt", v9350, false, true);
          const v9379 = stdlib.safeAdd(v9378, v9342);
          const v9588 = stdlib.add(v6833, v9379);
          sim_r.txns.push({
            amt: v9379,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          let v9709;
          if (v9355) {
            const v9716 = stdlib.safeMul256(v9350, v9351);
            const v9717 = stdlib.sqrt256(v9716);
            v9709 = v9717;
            }
          else {
            const v9718 = v9347.A;
            const v9719 = v9347.B;
            const v9720 = stdlib.safeMul256(v9350, v6890);
            const v9721 = stdlib.safeDiv256(v9720, v9718);
            const v9722 = stdlib.safeMul256(v9351, v6890);
            const v9723 = stdlib.safeDiv256(v9722, v9719);
            const v9724 = stdlib.lt256(v9721, v9723);
            const v9725 = v9724 ? v9721 : v9723;
            v9709 = v9725;
            }
          const v9743 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
          const v9745 = [v7902, v6788];
          const v9746 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v9745];
          const v9750 = stdlib.sub(v9588, v9342);
          const v9752 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902, v6788],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v9743], [ctc10, v6790], [ctc25, v9746]],
                fees: stdlib.checkedBigNumberify('./index.rsh:606:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '1'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v9753 = await txn1.getOutput('internal', 'v9752', ctc24, v9752);
          const v9755 = v9753[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
          const v9760 = stdlib.add(v9750, v9755);
          const v9765 = stdlib.safeSub256(v9374, v9709);
          await stdlib.simMapSet(sim_r, 0, ctc7, v6788, ctc1, v9765);
          const v9766 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v7902, ctc1), null);
          const v9767 = stdlib.fromSome(v9766, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v9768 = stdlib.safeAdd256(v9767, v9709);
          await stdlib.simMapSet(sim_r, 0, ctc7, v7902, ctc1, v9768);
          null;
          const v9770 = await txn1.getOutput('Provider_deposit', 'v9709', ctc1, v9709);
          
          const v9780 = v6829.closed;
          const v9781 = v6829.decimals;
          const v9783 = v6829.name;
          const v9785 = v6829.protoBals;
          const v9787 = v6829.symbol;
          const v9788 = v6829.tokA;
          const v9789 = v6829.tokB;
          const v9790 = v6829.totalSupply;
          const v9791 = v6829.zeroAddress;
          const v9793 = v9347.A;
          const v9798 = stdlib.safeAdd256(v9793, v9350);
          const v9799 = v9347.B;
          const v9804 = stdlib.safeAdd256(v9799, v9351);
          const v9813 = stdlib.safeSub256(v6889, v9709);
          const v9817 = stdlib.safeAdd256(v6890, v9709);
          const v9820 = {
            A: v9813,
            B: v9817
            };
          const v9821 = {
            A: v9798,
            B: v9804
            };
          const v9822 = {
            closed: v9780,
            decimals: v9781,
            lptBals: v9820,
            name: v9783,
            poolBals: v9821,
            protoBals: v9785,
            protoInfo: v9343,
            symbol: v9787,
            tokA: v9788,
            tokB: v9789,
            totalSupply: v9790,
            zeroAddress: v9791
            };
          const v38139 = v9822;
          const v38141 = v9760;
          const v38142 = v9822.closed;
          if (v38142) {
            sim_r.isHalt = false;
            }
          else {
            const v38144 = v9822.lptBals;
            const v38145 = v38144.A;
            const v38146 = v38144.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      undefined /* setApiDetails */;
      const v9340 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '0')];
      const v9341 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '1')];
      const v9342 = v9334[stdlib.checkedBigNumberify('./index.rsh:1107:12:spread', stdlib.UInt_max, '2')];
      const v9343 = v6829.protoInfo;
      const v9344 = v9343.locked;
      const v9345 = v9344 ? false : true;
      stdlib.assert(v9345, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'locked',
        who: 'Provider_deposit'
        });
      const v9347 = v6829.poolBals;
      let v9349;
      const v9350 = v9340.A;
      const v9351 = v9340.B;
      const v9355 = stdlib.eq256(v6890, stdlib.checkedBigNumberify('./index.rsh:320:27:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      if (v9355) {
        const v9356 = stdlib.safeMul256(v9350, v9351);
        const v9357 = stdlib.sqrt256(v9356);
        v9349 = v9357;
        }
      else {
        const v9358 = v9347.A;
        const v9359 = v9347.B;
        const v9360 = stdlib.safeMul256(v9350, v6890);
        const v9361 = stdlib.safeDiv256(v9360, v9358);
        const v9362 = stdlib.safeMul256(v9351, v6890);
        const v9363 = stdlib.safeDiv256(v9362, v9359);
        const v9364 = stdlib.lt256(v9361, v9363);
        const v9365 = v9364 ? v9361 : v9363;
        v9349 = v9365;
        }
      const v9366 = stdlib.le256(v9341, v9349);
      stdlib.assert(v9366, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v9370 = stdlib.addressEq(v7902, v6754);
      const v9371 = v9370 ? false : true;
      stdlib.assert(v9371, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:927:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'Provider_deposit'
        });
      const v9373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6788, ctc1), null);
      const v9374 = stdlib.fromSome(v9373, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9375 = stdlib.ge256(v9374, v9349);
      stdlib.assert(v9375, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1107:50:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1107:50:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'Provider_deposit'
        });
      const v9378 = stdlib.cast("UInt256", "UInt", v9350, false, true);
      const v9379 = stdlib.safeAdd(v9378, v9342);
      const v9588 = stdlib.add(v6833, v9379);
      ;
      let v9709;
      if (v9355) {
        const v9716 = stdlib.safeMul256(v9350, v9351);
        const v9717 = stdlib.sqrt256(v9716);
        v9709 = v9717;
        }
      else {
        const v9718 = v9347.A;
        const v9719 = v9347.B;
        const v9720 = stdlib.safeMul256(v9350, v6890);
        const v9721 = stdlib.safeDiv256(v9720, v9718);
        const v9722 = stdlib.safeMul256(v9351, v6890);
        const v9723 = stdlib.safeDiv256(v9722, v9719);
        const v9724 = stdlib.lt256(v9721, v9723);
        const v9725 = v9724 ? v9721 : v9723;
        v9709 = v9725;
        }
      const v9726 = stdlib.le256(v9341, v9709);
      stdlib.assert(v9726, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
        msg: 'slippage',
        who: 'Provider_deposit'
        });
      const v9735 = stdlib.ge256(v9374, v9709);
      stdlib.assert(v9735, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1111:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'Provider_deposit'
        });
      const v9743 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
      const v9745 = [v7902, v6788];
      const v9746 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v9745];
      const v9750 = stdlib.sub(v9588, v9342);
      const v9752 = undefined /* Remote */;
      const v9753 = await txn1.getOutput('internal', 'v9752', ctc24, v9752);
      const v9755 = v9753[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
      const v9760 = stdlib.add(v9750, v9755);
      const v9761 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9755);
      stdlib.assert(v9761, {
        at: './index.rsh:613:5:application',
        fs: ['at ./index.rsh:1124:37:application call to "arc200_transferFrom" (defined at: ./index.rsh:600:60:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_deposit'
        });
      const v9765 = stdlib.safeSub256(v9374, v9709);
      await stdlib.mapSet(map0, ctc7, v6788, ctc1, v9765);
      const v9766 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v7902, ctc1), null);
      const v9767 = stdlib.fromSome(v9766, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v9768 = stdlib.safeAdd256(v9767, v9709);
      await stdlib.mapSet(map0, ctc7, v7902, ctc1, v9768);
      null;
      const v9770 = await txn1.getOutput('Provider_deposit', 'v9709', ctc1, v9709);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v9334, v9770), {
          at: './index.rsh:1107:13:application',
          fs: ['at ./index.rsh:1107:13:application call to [unknown function] (defined at: ./index.rsh:1107:13:function exp)', 'at ./index.rsh:1132:14:application call to "k" (defined at: ./index.rsh:1114:15:function exp)', 'at ./index.rsh:1114:15:application call to [unknown function] (defined at: ./index.rsh:1114:15:function exp)'],
          msg: 'out',
          who: 'Provider_deposit'
          });
        }
      else {
        }
      
      const v9780 = v6829.closed;
      const v9781 = v6829.decimals;
      const v9783 = v6829.name;
      const v9785 = v6829.protoBals;
      const v9787 = v6829.symbol;
      const v9788 = v6829.tokA;
      const v9789 = v6829.tokB;
      const v9790 = v6829.totalSupply;
      const v9791 = v6829.zeroAddress;
      const v9793 = v9347.A;
      const v9798 = stdlib.safeAdd256(v9793, v9350);
      const v9799 = v9347.B;
      const v9804 = stdlib.safeAdd256(v9799, v9351);
      const v9813 = stdlib.safeSub256(v6889, v9709);
      const v9817 = stdlib.safeAdd256(v6890, v9709);
      const v9820 = {
        A: v9813,
        B: v9817
        };
      const v9821 = {
        A: v9798,
        B: v9804
        };
      const v9822 = {
        closed: v9780,
        decimals: v9781,
        lptBals: v9820,
        name: v9783,
        poolBals: v9821,
        protoBals: v9785,
        protoInfo: v9343,
        symbol: v9787,
        tokA: v9788,
        tokB: v9789,
        totalSupply: v9790,
        zeroAddress: v9791
        };
      const v38139 = v9822;
      const v38141 = v9760;
      const v38142 = v9822.closed;
      if (v38142) {
        return;
        }
      else {
        const v38144 = v9822.lptBals;
        const v38145 = v38144.A;
        const v38146 = v38144.B;
        return;
        }
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc17,
    Provider_deposit0_386: ctc18,
    Provider_withdraw0_386: ctc15,
    Trader_exactSwapAForB0_386: ctc19,
    Trader_exactSwapBForA0_386: ctc19,
    Trader_swapAForB0_386: ctc19,
    Trader_swapBForA0_386: ctc19,
    approve0_386: ctc20,
    deleteAllowanceBox0_386: ctc16,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc20,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7156 = ctc.selfAddress();
  const v7158 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Provider_withdraw'
    });
  const v7159 = v7158[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7160 = v7158[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7161 = v7160.A;
  const v7162 = v7160.B;
  const v7165 = v6829.poolBals;
  const v7166 = v7165.A;
  const v7167 = v7165.B;
  const v7168 = stdlib.safeMul256(v7159, v7166);
  const v7169 = stdlib.safeDiv256(v7168, v6890);
  const v7170 = stdlib.safeMul256(v7159, v7167);
  const v7171 = stdlib.safeDiv256(v7170, v6890);
  const v7174 = stdlib.le256(v7161, v7169);
  stdlib.assert(v7174, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage A',
    who: 'Provider_withdraw'
    });
  const v7177 = stdlib.le256(v7162, v7171);
  stdlib.assert(v7177, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'Duoswap: Provider Withdraw Slippage B',
    who: 'Provider_withdraw'
    });
  const v7182 = stdlib.addressEq(v7156, v6754);
  const v7183 = v7182 ? false : true;
  stdlib.assert(v7183, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'Provider_withdraw'
    });
  const v7185 = stdlib.addressEq(v6788, v6754);
  const v7186 = v7185 ? false : true;
  stdlib.assert(v7186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:955:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'Provider_withdraw'
    });
  const v7188 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v7156, ctc1), null);
  const v7189 = stdlib.fromSome(v7188, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v7190 = stdlib.ge256(v7189, v7159);
  stdlib.assert(v7190, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:956:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'Provider_withdraw'
    });
  const v7192 = [v7156, v6788];
  const v7193 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v7192, ctc1), null);
  const v7194 = stdlib.fromSome(v7193, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v7195 = stdlib.ge256(v7194, v7159);
  stdlib.assert(v7195, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:960:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1157:44:application call to [unknown function] (defined at: ./index.rsh:1157:44:function exp)', 'at ./index.rsh:827:31:application call to "runProvider_withdraw0_386" (defined at: ./index.rsh:1157:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'Provider_withdraw'
    });
  const v7206 = ['Provider_withdraw0_386', v7158];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7206],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1157:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Provider_withdraw"
            });
          ;
          const v11256 = v10762[stdlib.checkedBigNumberify('./index.rsh:1157:12:spread', stdlib.UInt_max, '0')];
          const v11258 = v6829.poolBals;
          const v11259 = v11258.A;
          const v11260 = v11258.B;
          const v11261 = stdlib.safeMul256(v11256, v11259);
          const v11262 = stdlib.safeDiv256(v11261, v6890);
          const v11263 = stdlib.safeMul256(v11256, v11260);
          const v11264 = stdlib.safeDiv256(v11263, v6890);
          const v11281 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v7902, ctc1), null);
          const v11282 = stdlib.fromSome(v11281, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v11285 = [v7902, v6788];
          const v11286 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc16, v11285, ctc1), null);
          const v11287 = stdlib.fromSome(v11286, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v11296 = stdlib.safeSub256(v11282, v11256);
          await stdlib.simMapSet(sim_r, 0, ctc7, v7902, ctc1, v11296);
          const v11297 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v6788, ctc1), null);
          const v11298 = stdlib.fromSome(v11297, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v11299 = stdlib.safeAdd256(v11298, v11256);
          await stdlib.simMapSet(sim_r, 0, ctc7, v6788, ctc1, v11299);
          null;
          const v11304 = stdlib.safeSub256(v11287, v11256);
          await stdlib.simMapSet(sim_r, 1, ctc16, v11285, ctc1, v11304);
          null;
          const v11309 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
          const v11313 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v6790], [ctc10, v11309]],
                fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v11314 = await txn1.getOutput('internal', 'v11313', ctc24, v11313);
          const v11316 = v11314[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
          const v11321 = stdlib.add(v6833, v11316);
          const v11323 = {
            A: v11262,
            B: v11264
            };
          const v11324 = await txn1.getOutput('Provider_withdraw', 'v11323', ctc11, v11323);
          
          const v11335 = v6829.closed;
          const v11336 = v6829.decimals;
          const v11338 = v6829.name;
          const v11340 = v6829.protoBals;
          const v11341 = v6829.protoInfo;
          const v11342 = v6829.symbol;
          const v11343 = v6829.tokA;
          const v11344 = v6829.tokB;
          const v11345 = v6829.totalSupply;
          const v11346 = v6829.zeroAddress;
          const v11355 = stdlib.safeAdd256(v6889, v11256);
          const v11358 = stdlib.safeSub256(v6890, v11256);
          const v11365 = stdlib.safeSub256(v11259, v11262);
          const v11369 = stdlib.safeSub256(v11260, v11264);
          const v11371 = {
            A: v11355,
            B: v11358
            };
          const v11372 = {
            A: v11365,
            B: v11369
            };
          const v11373 = {
            closed: v11335,
            decimals: v11336,
            lptBals: v11371,
            name: v11338,
            poolBals: v11372,
            protoBals: v11340,
            protoInfo: v11341,
            symbol: v11342,
            tokA: v11343,
            tokB: v11344,
            totalSupply: v11345,
            zeroAddress: v11346
            };
          const v38377 = v11373;
          const v38379 = v11321;
          const v38380 = v11373.closed;
          if (v38380) {
            sim_r.isHalt = false;
            }
          else {
            const v38382 = v11373.lptBals;
            const v38383 = v38382.A;
            const v38384 = v38382.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v11256 = v10762[stdlib.checkedBigNumberify('./index.rsh:1157:12:spread', stdlib.UInt_max, '0')];
      const v11257 = v10762[stdlib.checkedBigNumberify('./index.rsh:1157:12:spread', stdlib.UInt_max, '1')];
      const v11258 = v6829.poolBals;
      const v11259 = v11258.A;
      const v11260 = v11258.B;
      const v11261 = stdlib.safeMul256(v11256, v11259);
      const v11262 = stdlib.safeDiv256(v11261, v6890);
      const v11263 = stdlib.safeMul256(v11256, v11260);
      const v11264 = stdlib.safeDiv256(v11263, v6890);
      const v11266 = v11257.A;
      const v11267 = stdlib.le256(v11266, v11262);
      stdlib.assert(v11267, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage A',
        who: 'Provider_withdraw'
        });
      const v11269 = v11257.B;
      const v11270 = stdlib.le256(v11269, v11264);
      stdlib.assert(v11270, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'Duoswap: Provider Withdraw Slippage B',
        who: 'Provider_withdraw'
        });
      const v11275 = stdlib.addressEq(v7902, v6754);
      const v11276 = v11275 ? false : true;
      stdlib.assert(v11276, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'Provider_withdraw'
        });
      const v11278 = stdlib.addressEq(v6788, v6754);
      const v11279 = v11278 ? false : true;
      stdlib.assert(v11279, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:955:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'Provider_withdraw'
        });
      const v11281 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v7902, ctc1), null);
      const v11282 = stdlib.fromSome(v11281, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11283 = stdlib.ge256(v11282, v11256);
      stdlib.assert(v11283, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:956:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'Provider_withdraw'
        });
      const v11285 = [v7902, v6788];
      const v11286 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v11285, ctc1), null);
      const v11287 = stdlib.fromSome(v11286, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11288 = stdlib.ge256(v11287, v11256);
      stdlib.assert(v11288, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:960:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1161:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'Provider_withdraw'
        });
      const v11296 = stdlib.safeSub256(v11282, v11256);
      await stdlib.mapSet(map0, ctc7, v7902, ctc1, v11296);
      const v11297 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6788, ctc1), null);
      const v11298 = stdlib.fromSome(v11297, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v11299 = stdlib.safeAdd256(v11298, v11256);
      await stdlib.mapSet(map0, ctc7, v6788, ctc1, v11299);
      null;
      const v11304 = stdlib.safeSub256(v11287, v11256);
      await stdlib.mapSet(map1, ctc16, v11285, ctc1, v11304);
      null;
      const v11309 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
      const v11313 = undefined /* Remote */;
      const v11314 = await txn1.getOutput('internal', 'v11313', ctc24, v11313);
      const v11316 = v11314[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v11321 = stdlib.add(v6833, v11316);
      const v11322 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v11316);
      stdlib.assert(v11322, {
        at: './index.rsh:598:5:application',
        fs: ['at ./index.rsh:1167:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
        msg: 'remote bill check',
        who: 'Provider_withdraw'
        });
      const v11323 = {
        A: v11262,
        B: v11264
        };
      const v11324 = await txn1.getOutput('Provider_withdraw', 'v11323', ctc11, v11323);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v10762, v11324), {
          at: './index.rsh:1157:13:application',
          fs: ['at ./index.rsh:1157:13:application call to [unknown function] (defined at: ./index.rsh:1157:13:function exp)', 'at ./index.rsh:1172:14:application call to "k" (defined at: ./index.rsh:1163:15:function exp)', 'at ./index.rsh:1163:15:application call to [unknown function] (defined at: ./index.rsh:1163:15:function exp)'],
          msg: 'out',
          who: 'Provider_withdraw'
          });
        }
      else {
        }
      
      const v11335 = v6829.closed;
      const v11336 = v6829.decimals;
      const v11338 = v6829.name;
      const v11340 = v6829.protoBals;
      const v11341 = v6829.protoInfo;
      const v11342 = v6829.symbol;
      const v11343 = v6829.tokA;
      const v11344 = v6829.tokB;
      const v11345 = v6829.totalSupply;
      const v11346 = v6829.zeroAddress;
      const v11355 = stdlib.safeAdd256(v6889, v11256);
      const v11358 = stdlib.safeSub256(v6890, v11256);
      const v11365 = stdlib.safeSub256(v11259, v11262);
      const v11369 = stdlib.safeSub256(v11260, v11264);
      const v11371 = {
        A: v11355,
        B: v11358
        };
      const v11372 = {
        A: v11365,
        B: v11369
        };
      const v11373 = {
        closed: v11335,
        decimals: v11336,
        lptBals: v11371,
        name: v11338,
        poolBals: v11372,
        protoBals: v11340,
        protoInfo: v11341,
        symbol: v11342,
        tokA: v11343,
        tokB: v11344,
        totalSupply: v11345,
        zeroAddress: v11346
        };
      const v38377 = v11373;
      const v38379 = v11321;
      const v38380 = v11373.closed;
      if (v38380) {
        return;
        }
      else {
        const v38382 = v11373.lptBals;
        const v38383 = v38382.A;
        const v38384 = v38382.B;
        return;
        }
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc15,
    Trader_exactSwapBForA0_386: ctc15,
    Trader_swapAForB0_386: ctc15,
    Trader_swapBForA0_386: ctc15,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7427 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapAForB0_386" (defined at: ./index.rsh:1347:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapAForB'
    });
  const v7428 = v7427[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7429 = v7427[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7433 = v6829.poolBals;
  const v7434 = v6829.protoInfo;
  const v7436 = v7433.A;
  const v7437 = v7433.B;
  const v7438 = v7434.protoFee;
  const v7439 = v7434.totFee;
  const v7440 = stdlib.safeSub256(v7437, v7429);
  const v7441 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7439);
  const v7442 = stdlib.safeMul256(v7429, v7441);
  const v7443 = stdlib.safeMul256(v7440, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7444 = stdlib.safeMul256(v7442, v7436);
  const v7445 = stdlib.safeDiv256(v7444, v7443);
  const v7446 = stdlib.safeAdd256(v7445, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
  const v7447 = stdlib.ge256(v7428, v7446);
  stdlib.assert(v7447, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:145:20:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)', 'at ./index.rsh:170:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:143:3:function exp)', 'at ./index.rsh:253:19:application call to "computeSwap1" (defined at: ./index.rsh:166:3:function exp)', 'at ./index.rsh:1262:58:application call to "computeSwap" (defined at: ./index.rsh:249:3:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapAForB0_386" (defined at: ./index.rsh:1347:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapAForB'
    });
  const v7449 = stdlib.safeSub256(v7428, v7446);
  const v7453 = stdlib.safeMul256(v7438, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7454 = stdlib.safeDiv256(v7453, v7439);
  const v7455 = stdlib.safeMul256(v7436, v7446);
  const v7456 = stdlib.safeMul256(v7446, v7437);
  const v7457 = stdlib.safeDiv256(v7456, v7455);
  const v7458 = stdlib.safeSub256(v7457, v7429);
  const v7459 = stdlib.safeMul256(v7458, v7454);
  const v7460 = stdlib.safeDiv256(v7459, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7461 = stdlib.safeMul256(v7446, v7438);
  const v7462 = stdlib.safeDiv256(v7461, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7463 = stdlib.safeMul256(v7462, v7437);
  const v7464 = stdlib.safeDiv256(v7463, v7455);
  const v7465 = stdlib.gt256(v7464, v7460);
  const v7466 = [v7462, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v7467 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7460];
  const v7468 = v7465 ? v7466 : v7467;
  const v7470 = v7468[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
  const v7471 = v7468[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
  const v7476 = v7434.locked;
  const v7477 = v7476 ? false : true;
  stdlib.assert(v7477, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapAForB0_386" (defined at: ./index.rsh:1347:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapAForB'
    });
  const v7484 = stdlib.safeAdd256(v7436, v7428);
  const v7492 = stdlib.safeSub256(v7484, v7449);
  const v7499 = stdlib.safeSub256(v7492, v7470);
  const v7502 = stdlib.safeSub256(v7440, v7471);
  const v7516 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7449);
  const v7517 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7429);
  const v7518 = v7516 ? v7517 : false;
  stdlib.assert(v7518, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapAForB0_386" (defined at: ./index.rsh:1347:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapAForB'
    });
  const v7523 = stdlib.safeMul256(v7436, v7437);
  const v7524 = stdlib.safeMul256(v7499, v7502);
  const v7525 = stdlib.ge256(v7524, v7523);
  stdlib.assert(v7525, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapAForB0_386" (defined at: ./index.rsh:1347:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapAForB'
    });
  const v7537 = ['Trader_exactSwapAForB0_386', v7427];
  
  const v7797 = stdlib.cast("UInt256", "UInt", v7428, false, true);
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7537],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [v7797, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapAForB"
            });
          const v12238 = v12190[stdlib.checkedBigNumberify('./index.rsh:1347:12:spread', stdlib.UInt_max, '0')];
          const v12239 = v12190[stdlib.checkedBigNumberify('./index.rsh:1347:12:spread', stdlib.UInt_max, '1')];
          const v12241 = v6829.poolBals;
          const v12242 = v6829.protoInfo;
          const v12244 = v12241.A;
          const v12245 = v12241.B;
          const v12246 = v12242.protoFee;
          const v12247 = v12242.totFee;
          const v12248 = stdlib.safeSub256(v12245, v12239);
          const v12249 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v12247);
          const v12250 = stdlib.safeMul256(v12239, v12249);
          const v12251 = stdlib.safeMul256(v12248, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v12252 = stdlib.safeMul256(v12250, v12244);
          const v12253 = stdlib.safeDiv256(v12252, v12251);
          const v12254 = stdlib.safeAdd256(v12253, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v12257 = stdlib.safeSub256(v12238, v12254);
          const v12261 = stdlib.safeMul256(v12246, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v12262 = stdlib.safeDiv256(v12261, v12247);
          const v12263 = stdlib.safeMul256(v12244, v12254);
          const v12264 = stdlib.safeMul256(v12254, v12245);
          const v12265 = stdlib.safeDiv256(v12264, v12263);
          const v12266 = stdlib.safeSub256(v12265, v12239);
          const v12267 = stdlib.safeMul256(v12266, v12262);
          const v12268 = stdlib.safeDiv256(v12267, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v12269 = stdlib.safeMul256(v12254, v12246);
          const v12270 = stdlib.safeDiv256(v12269, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v12271 = stdlib.safeMul256(v12270, v12245);
          const v12272 = stdlib.safeDiv256(v12271, v12263);
          const v12273 = stdlib.gt256(v12272, v12268);
          const v12274 = [v12270, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v12275 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12268];
          const v12276 = v12273 ? v12274 : v12275;
          const v12278 = v12276[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
          const v12279 = v12276[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
          const v12292 = stdlib.safeAdd256(v12244, v12238);
          const v12300 = stdlib.safeSub256(v12292, v12257);
          const v12307 = stdlib.safeSub256(v12300, v12278);
          const v12310 = stdlib.safeSub256(v12248, v12279);
          const v12338 = stdlib.cast("UInt256", "UInt", v12238, false, true);
          const v12444 = stdlib.add(v6833, v12338);
          sim_r.txns.push({
            amt: v12338,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v12881 = v6829.protoBals;
          const v12882 = v12881.A;
          const v12886 = stdlib.safeAdd256(v12882, v12278);
          const v12887 = v12881.B;
          const v12891 = stdlib.safeAdd256(v12887, v12279);
          const v12911 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
          const v12915 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v6790], [ctc10, v12911]],
                fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v12916 = await txn1.getOutput('internal', 'v12915', ctc24, v12915);
          const v12918 = v12916[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
          const v12923 = stdlib.add(v12444, v12918);
          const v12925 = {
            A: v12257,
            B: v12239
            };
          const v12926 = await txn1.getOutput('Trader_exactSwapAForB', 'v12925', ctc11, v12925);
          
          const v12935 = {
            A: v12238,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v12937 = {
            A: v12307,
            B: v12310
            };
          const v12938 = [v7902, v12935, v12925, v12937];
          const v12939 = ['SwapEvent', v12938];
          null;
          const v12940 = v6829.closed;
          const v12941 = v6829.decimals;
          const v12943 = v6829.name;
          const v12947 = v6829.symbol;
          const v12948 = v6829.tokA;
          const v12949 = v6829.tokB;
          const v12950 = v6829.totalSupply;
          const v12951 = v6829.zeroAddress;
          const v12953 = {
            A: v12886,
            B: v12891
            };
          const v12954 = {
            closed: v12940,
            decimals: v12941,
            lptBals: v6888,
            name: v12943,
            poolBals: v12937,
            protoBals: v12953,
            protoInfo: v12242,
            symbol: v12947,
            tokA: v12948,
            tokB: v12949,
            totalSupply: v12950,
            zeroAddress: v12951
            };
          const v38615 = v12954;
          const v38617 = v12923;
          const v38618 = v12954.closed;
          if (v38618) {
            sim_r.isHalt = false;
            }
          else {
            const v38620 = v12954.lptBals;
            const v38621 = v38620.A;
            const v38622 = v38620.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      undefined /* setApiDetails */;
      const v12238 = v12190[stdlib.checkedBigNumberify('./index.rsh:1347:12:spread', stdlib.UInt_max, '0')];
      const v12239 = v12190[stdlib.checkedBigNumberify('./index.rsh:1347:12:spread', stdlib.UInt_max, '1')];
      const v12241 = v6829.poolBals;
      const v12242 = v6829.protoInfo;
      const v12244 = v12241.A;
      const v12245 = v12241.B;
      const v12246 = v12242.protoFee;
      const v12247 = v12242.totFee;
      const v12248 = stdlib.safeSub256(v12245, v12239);
      const v12249 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v12247);
      const v12250 = stdlib.safeMul256(v12239, v12249);
      const v12251 = stdlib.safeMul256(v12248, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v12252 = stdlib.safeMul256(v12250, v12244);
      const v12253 = stdlib.safeDiv256(v12252, v12251);
      const v12254 = stdlib.safeAdd256(v12253, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v12255 = stdlib.ge256(v12238, v12254);
      stdlib.assert(v12255, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:145:20:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)', 'at ./index.rsh:170:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:143:3:function exp)', 'at ./index.rsh:253:19:application call to "computeSwap1" (defined at: ./index.rsh:166:3:function exp)', 'at ./index.rsh:1262:58:application call to "computeSwap" (defined at: ./index.rsh:249:3:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapAForB'
        });
      const v12257 = stdlib.safeSub256(v12238, v12254);
      const v12261 = stdlib.safeMul256(v12246, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v12262 = stdlib.safeDiv256(v12261, v12247);
      const v12263 = stdlib.safeMul256(v12244, v12254);
      const v12264 = stdlib.safeMul256(v12254, v12245);
      const v12265 = stdlib.safeDiv256(v12264, v12263);
      const v12266 = stdlib.safeSub256(v12265, v12239);
      const v12267 = stdlib.safeMul256(v12266, v12262);
      const v12268 = stdlib.safeDiv256(v12267, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v12269 = stdlib.safeMul256(v12254, v12246);
      const v12270 = stdlib.safeDiv256(v12269, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v12271 = stdlib.safeMul256(v12270, v12245);
      const v12272 = stdlib.safeDiv256(v12271, v12263);
      const v12273 = stdlib.gt256(v12272, v12268);
      const v12274 = [v12270, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v12275 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12268];
      const v12276 = v12273 ? v12274 : v12275;
      const v12278 = v12276[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
      const v12279 = v12276[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
      const v12284 = v12242.locked;
      const v12285 = v12284 ? false : true;
      stdlib.assert(v12285, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapAForB'
        });
      const v12292 = stdlib.safeAdd256(v12244, v12238);
      const v12300 = stdlib.safeSub256(v12292, v12257);
      const v12307 = stdlib.safeSub256(v12300, v12278);
      const v12310 = stdlib.safeSub256(v12248, v12279);
      const v12324 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12257);
      const v12325 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v12239);
      const v12326 = v12324 ? v12325 : false;
      stdlib.assert(v12326, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapAForB'
        });
      const v12331 = stdlib.safeMul256(v12244, v12245);
      const v12332 = stdlib.safeMul256(v12307, v12310);
      const v12333 = stdlib.ge256(v12332, v12331);
      stdlib.assert(v12333, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1348:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1347:44:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1347:44:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapAForB'
        });
      const v12338 = stdlib.cast("UInt256", "UInt", v12238, false, true);
      const v12444 = stdlib.add(v6833, v12338);
      ;
      const v12881 = v6829.protoBals;
      const v12882 = v12881.A;
      const v12886 = stdlib.safeAdd256(v12882, v12278);
      const v12887 = v12881.B;
      const v12891 = stdlib.safeAdd256(v12887, v12279);
      const v12911 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
      const v12915 = undefined /* Remote */;
      const v12916 = await txn1.getOutput('internal', 'v12915', ctc24, v12915);
      const v12918 = v12916[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v12923 = stdlib.add(v12444, v12918);
      const v12924 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v12918);
      stdlib.assert(v12924, {
        at: './index.rsh:598:5:application',
        fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1349:51:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1349:47:application call to [unknown function] (defined at: ./index.rsh:1349:47:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_exactSwapAForB'
        });
      const v12925 = {
        A: v12257,
        B: v12239
        };
      const v12926 = await txn1.getOutput('Trader_exactSwapAForB', 'v12925', ctc11, v12925);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v12190, v12926), {
          at: './index.rsh:1347:13:application',
          fs: ['at ./index.rsh:1347:13:application call to [unknown function] (defined at: ./index.rsh:1347:13:function exp)', 'at ./index.rsh:1299:14:application call to "k" (defined at: ./index.rsh:1349:47:function exp)', 'at ./index.rsh:1349:51:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1349:47:application call to [unknown function] (defined at: ./index.rsh:1349:47:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapAForB'
          });
        }
      else {
        }
      
      const v12935 = {
        A: v12238,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v12937 = {
        A: v12307,
        B: v12310
        };
      const v12938 = [v7902, v12935, v12925, v12937];
      const v12939 = ['SwapEvent', v12938];
      null;
      const v12940 = v6829.closed;
      const v12941 = v6829.decimals;
      const v12943 = v6829.name;
      const v12947 = v6829.symbol;
      const v12948 = v6829.tokA;
      const v12949 = v6829.tokB;
      const v12950 = v6829.totalSupply;
      const v12951 = v6829.zeroAddress;
      const v12953 = {
        A: v12886,
        B: v12891
        };
      const v12954 = {
        closed: v12940,
        decimals: v12941,
        lptBals: v6888,
        name: v12943,
        poolBals: v12937,
        protoBals: v12953,
        protoInfo: v12242,
        symbol: v12947,
        tokA: v12948,
        tokB: v12949,
        totalSupply: v12950,
        zeroAddress: v12951
        };
      const v38615 = v12954;
      const v38617 = v12923;
      const v38618 = v12954.closed;
      if (v38618) {
        return;
        }
      else {
        const v38620 = v12954.lptBals;
        const v38621 = v38620.A;
        const v38622 = v38620.B;
        return;
        }
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc15,
    Trader_exactSwapBForA0_386: ctc15,
    Trader_swapAForB0_386: ctc15,
    Trader_swapBForA0_386: ctc15,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  const ctc25 = stdlib.T_Tuple([ctc8, ctc3, ctc20]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7541 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1352:44:application call to [unknown function] (defined at: ./index.rsh:1352:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapBForA0_386" (defined at: ./index.rsh:1352:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Trader_exactSwapBForA'
    });
  const v7542 = v7541[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7543 = v7541[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7547 = v6829.poolBals;
  const v7548 = v6829.protoInfo;
  const v7550 = v7547.B;
  const v7551 = v7547.A;
  const v7552 = v7548.protoFee;
  const v7553 = v7548.totFee;
  const v7554 = stdlib.safeSub256(v7551, v7543);
  const v7555 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7553);
  const v7556 = stdlib.safeMul256(v7543, v7555);
  const v7557 = stdlib.safeMul256(v7554, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7558 = stdlib.safeMul256(v7556, v7550);
  const v7559 = stdlib.safeDiv256(v7558, v7557);
  const v7560 = stdlib.safeAdd256(v7559, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
  const v7561 = stdlib.ge256(v7542, v7560);
  stdlib.assert(v7561, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:145:20:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)', 'at ./index.rsh:170:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:143:3:function exp)', 'at ./index.rsh:269:19:application call to "computeSwap1" (defined at: ./index.rsh:166:3:function exp)', 'at ./index.rsh:1262:58:application call to "computeSwap" (defined at: ./index.rsh:249:3:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1352:44:application call to [unknown function] (defined at: ./index.rsh:1352:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapBForA0_386" (defined at: ./index.rsh:1352:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'provided enough funds to receive amt out',
    who: 'Trader_exactSwapBForA'
    });
  const v7563 = stdlib.safeSub256(v7542, v7560);
  const v7567 = stdlib.safeMul256(v7552, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7568 = stdlib.safeDiv256(v7567, v7553);
  const v7569 = stdlib.safeMul256(v7550, v7560);
  const v7570 = stdlib.safeMul256(v7560, v7551);
  const v7571 = stdlib.safeDiv256(v7570, v7569);
  const v7572 = stdlib.safeSub256(v7571, v7543);
  const v7573 = stdlib.safeMul256(v7572, v7568);
  const v7574 = stdlib.safeDiv256(v7573, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7575 = stdlib.safeMul256(v7560, v7552);
  const v7576 = stdlib.safeDiv256(v7575, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7577 = stdlib.safeMul256(v7576, v7551);
  const v7578 = stdlib.safeDiv256(v7577, v7569);
  const v7579 = stdlib.gt256(v7578, v7574);
  const v7580 = [v7576, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v7581 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7574];
  const v7582 = v7579 ? v7580 : v7581;
  const v7584 = v7582[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
  const v7585 = v7582[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
  const v7590 = v7548.locked;
  const v7591 = v7590 ? false : true;
  stdlib.assert(v7591, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1352:44:application call to [unknown function] (defined at: ./index.rsh:1352:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapBForA0_386" (defined at: ./index.rsh:1352:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'locked',
    who: 'Trader_exactSwapBForA'
    });
  const v7602 = stdlib.safeAdd256(v7550, v7542);
  const v7609 = stdlib.safeSub256(v7602, v7563);
  const v7613 = stdlib.safeSub256(v7554, v7585);
  const v7616 = stdlib.safeSub256(v7609, v7584);
  const v7630 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7543);
  const v7631 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7563);
  const v7632 = v7630 ? v7631 : false;
  stdlib.assert(v7632, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1352:44:application call to [unknown function] (defined at: ./index.rsh:1352:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapBForA0_386" (defined at: ./index.rsh:1352:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_exactSwapBForA'
    });
  const v7637 = stdlib.safeMul256(v7551, v7550);
  const v7638 = stdlib.safeMul256(v7613, v7616);
  const v7639 = stdlib.ge256(v7638, v7637);
  stdlib.assert(v7639, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1352:44:application call to [unknown function] (defined at: ./index.rsh:1352:44:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_exactSwapBForA0_386" (defined at: ./index.rsh:1352:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_exactSwapBForA'
    });
  const v7651 = ['Trader_exactSwapBForA0_386', v7541];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7651],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1352:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_exactSwapBForA"
            });
          ;
          const v14392 = v13618[stdlib.checkedBigNumberify('./index.rsh:1352:12:spread', stdlib.UInt_max, '0')];
          const v14393 = v13618[stdlib.checkedBigNumberify('./index.rsh:1352:12:spread', stdlib.UInt_max, '1')];
          const v14395 = v6829.poolBals;
          const v14396 = v6829.protoInfo;
          const v14398 = v14395.B;
          const v14399 = v14395.A;
          const v14400 = v14396.protoFee;
          const v14401 = v14396.totFee;
          const v14402 = stdlib.safeSub256(v14399, v14393);
          const v14403 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14401);
          const v14404 = stdlib.safeMul256(v14393, v14403);
          const v14405 = stdlib.safeMul256(v14402, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v14406 = stdlib.safeMul256(v14404, v14398);
          const v14407 = stdlib.safeDiv256(v14406, v14405);
          const v14408 = stdlib.safeAdd256(v14407, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v14411 = stdlib.safeSub256(v14392, v14408);
          const v14415 = stdlib.safeMul256(v14400, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v14416 = stdlib.safeDiv256(v14415, v14401);
          const v14417 = stdlib.safeMul256(v14398, v14408);
          const v14418 = stdlib.safeMul256(v14408, v14399);
          const v14419 = stdlib.safeDiv256(v14418, v14417);
          const v14420 = stdlib.safeSub256(v14419, v14393);
          const v14421 = stdlib.safeMul256(v14420, v14416);
          const v14422 = stdlib.safeDiv256(v14421, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v14423 = stdlib.safeMul256(v14408, v14400);
          const v14424 = stdlib.safeDiv256(v14423, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v14425 = stdlib.safeMul256(v14424, v14399);
          const v14426 = stdlib.safeDiv256(v14425, v14417);
          const v14427 = stdlib.gt256(v14426, v14422);
          const v14428 = [v14424, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v14429 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14422];
          const v14430 = v14427 ? v14428 : v14429;
          const v14432 = v14430[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
          const v14433 = v14430[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
          const v14450 = stdlib.safeAdd256(v14398, v14392);
          const v14457 = stdlib.safeSub256(v14450, v14411);
          const v14461 = stdlib.safeSub256(v14402, v14433);
          const v14464 = stdlib.safeSub256(v14457, v14432);
          const v14466 = v6829.protoBals;
          const v14467 = v14466.A;
          const v14471 = stdlib.safeAdd256(v14467, v14433);
          const v14472 = v14466.B;
          const v14476 = stdlib.safeAdd256(v14472, v14432);
          const v14496 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
          const v14498 = [v7902, v6788];
          const v14499 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v14498];
          const v14503 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902, v6788],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v14496], [ctc10, v6790], [ctc25, v14499]],
                fees: stdlib.checkedBigNumberify('./index.rsh:606:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v14504 = await txn1.getOutput('internal', 'v14503', ctc24, v14503);
          const v14506 = v14504[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
          const v14511 = stdlib.add(v6833, v14506);
          const v14519 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v6790], [ctc10, v14496]],
                fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v14520 = await txn1.getOutput('internal', 'v14519', ctc24, v14519);
          const v14522 = v14520[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
          const v14527 = stdlib.add(v14511, v14522);
          const v14529 = {
            A: v14393,
            B: v14411
            };
          const v14530 = await txn1.getOutput('Trader_exactSwapBForA', 'v14529', ctc11, v14529);
          
          const v14539 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v14392
            };
          const v14541 = {
            A: v14461,
            B: v14464
            };
          const v14542 = [v7902, v14539, v14529, v14541];
          const v14543 = ['SwapEvent', v14542];
          null;
          const v14544 = v6829.closed;
          const v14545 = v6829.decimals;
          const v14547 = v6829.name;
          const v14551 = v6829.symbol;
          const v14552 = v6829.tokA;
          const v14553 = v6829.tokB;
          const v14554 = v6829.totalSupply;
          const v14555 = v6829.zeroAddress;
          const v14557 = {
            A: v14471,
            B: v14476
            };
          const v14558 = {
            closed: v14544,
            decimals: v14545,
            lptBals: v6888,
            name: v14547,
            poolBals: v14541,
            protoBals: v14557,
            protoInfo: v14396,
            symbol: v14551,
            tokA: v14552,
            tokB: v14553,
            totalSupply: v14554,
            zeroAddress: v14555
            };
          const v38853 = v14558;
          const v38855 = v14527;
          const v38856 = v14558.closed;
          if (v38856) {
            sim_r.isHalt = false;
            }
          else {
            const v38858 = v14558.lptBals;
            const v38859 = v38858.A;
            const v38860 = v38858.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v14392 = v13618[stdlib.checkedBigNumberify('./index.rsh:1352:12:spread', stdlib.UInt_max, '0')];
      const v14393 = v13618[stdlib.checkedBigNumberify('./index.rsh:1352:12:spread', stdlib.UInt_max, '1')];
      const v14395 = v6829.poolBals;
      const v14396 = v6829.protoInfo;
      const v14398 = v14395.B;
      const v14399 = v14395.A;
      const v14400 = v14396.protoFee;
      const v14401 = v14396.totFee;
      const v14402 = stdlib.safeSub256(v14399, v14393);
      const v14403 = stdlib.safeAdd256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v14401);
      const v14404 = stdlib.safeMul256(v14393, v14403);
      const v14405 = stdlib.safeMul256(v14402, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v14406 = stdlib.safeMul256(v14404, v14398);
      const v14407 = stdlib.safeDiv256(v14406, v14405);
      const v14408 = stdlib.safeAdd256(v14407, stdlib.checkedBigNumberify('./index.rsh:130:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v14409 = stdlib.ge256(v14392, v14408);
      stdlib.assert(v14409, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:145:20:function exp)', 'at ./index.rsh:144:25:application call to [unknown function] (defined at: ./index.rsh:144:25:function exp)', 'at ./index.rsh:170:63:application call to "computeAmtInAndOut" (defined at: ./index.rsh:143:3:function exp)', 'at ./index.rsh:269:19:application call to "computeSwap1" (defined at: ./index.rsh:166:3:function exp)', 'at ./index.rsh:1262:58:application call to "computeSwap" (defined at: ./index.rsh:249:3:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
        msg: 'provided enough funds to receive amt out',
        who: 'Trader_exactSwapBForA'
        });
      const v14411 = stdlib.safeSub256(v14392, v14408);
      const v14415 = stdlib.safeMul256(v14400, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v14416 = stdlib.safeDiv256(v14415, v14401);
      const v14417 = stdlib.safeMul256(v14398, v14408);
      const v14418 = stdlib.safeMul256(v14408, v14399);
      const v14419 = stdlib.safeDiv256(v14418, v14417);
      const v14420 = stdlib.safeSub256(v14419, v14393);
      const v14421 = stdlib.safeMul256(v14420, v14416);
      const v14422 = stdlib.safeDiv256(v14421, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v14423 = stdlib.safeMul256(v14408, v14400);
      const v14424 = stdlib.safeDiv256(v14423, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v14425 = stdlib.safeMul256(v14424, v14399);
      const v14426 = stdlib.safeDiv256(v14425, v14417);
      const v14427 = stdlib.gt256(v14426, v14422);
      const v14428 = [v14424, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v14429 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14422];
      const v14430 = v14427 ? v14428 : v14429;
      const v14432 = v14430[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
      const v14433 = v14430[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
      const v14438 = v14396.locked;
      const v14439 = v14438 ? false : true;
      stdlib.assert(v14439, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
        msg: 'locked',
        who: 'Trader_exactSwapBForA'
        });
      const v14450 = stdlib.safeAdd256(v14398, v14392);
      const v14457 = stdlib.safeSub256(v14450, v14411);
      const v14461 = stdlib.safeSub256(v14402, v14433);
      const v14464 = stdlib.safeSub256(v14457, v14432);
      const v14466 = v6829.protoBals;
      const v14467 = v14466.A;
      const v14471 = stdlib.safeAdd256(v14467, v14433);
      const v14472 = v14466.B;
      const v14476 = stdlib.safeAdd256(v14472, v14432);
      const v14478 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:26:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14393);
      const v14479 = stdlib.le256(stdlib.checkedBigNumberify('./index.rsh:69:41:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v14411);
      const v14480 = v14478 ? v14479 : false;
      stdlib.assert(v14480, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_exactSwapBForA'
        });
      const v14485 = stdlib.safeMul256(v14399, v14398);
      const v14486 = stdlib.safeMul256(v14461, v14464);
      const v14487 = stdlib.ge256(v14486, v14485);
      stdlib.assert(v14487, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1353:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_exactSwapBForA'
        });
      const v14496 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
      const v14498 = [v7902, v6788];
      const v14499 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v14498];
      const v14503 = undefined /* Remote */;
      const v14504 = await txn1.getOutput('internal', 'v14503', ctc24, v14503);
      const v14506 = v14504[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
      const v14511 = stdlib.add(v6833, v14506);
      const v14512 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14506);
      stdlib.assert(v14512, {
        at: './index.rsh:613:5:application',
        fs: ['at ./index.rsh:1289:39:application call to "arc200_transferFrom" (defined at: ./index.rsh:600:60:function exp)', 'at ./index.rsh:1354:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_exactSwapBForA'
        });
      const v14519 = undefined /* Remote */;
      const v14520 = await txn1.getOutput('internal', 'v14519', ctc24, v14519);
      const v14522 = v14520[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v14527 = stdlib.add(v14511, v14522);
      const v14528 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v14522);
      stdlib.assert(v14528, {
        at: './index.rsh:598:5:application',
        fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1354:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_exactSwapBForA'
        });
      const v14529 = {
        A: v14393,
        B: v14411
        };
      const v14530 = await txn1.getOutput('Trader_exactSwapBForA', 'v14529', ctc11, v14529);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v13618, v14530), {
          at: './index.rsh:1352:13:application',
          fs: ['at ./index.rsh:1352:13:application call to [unknown function] (defined at: ./index.rsh:1352:13:function exp)', 'at ./index.rsh:1299:14:application call to "k" (defined at: ./index.rsh:1354:21:function exp)', 'at ./index.rsh:1354:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1354:21:application call to [unknown function] (defined at: ./index.rsh:1354:21:function exp)'],
          msg: 'out',
          who: 'Trader_exactSwapBForA'
          });
        }
      else {
        }
      
      const v14539 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v14392
        };
      const v14541 = {
        A: v14461,
        B: v14464
        };
      const v14542 = [v7902, v14539, v14529, v14541];
      const v14543 = ['SwapEvent', v14542];
      null;
      const v14544 = v6829.closed;
      const v14545 = v6829.decimals;
      const v14547 = v6829.name;
      const v14551 = v6829.symbol;
      const v14552 = v6829.tokA;
      const v14553 = v6829.tokB;
      const v14554 = v6829.totalSupply;
      const v14555 = v6829.zeroAddress;
      const v14557 = {
        A: v14471,
        B: v14476
        };
      const v14558 = {
        closed: v14544,
        decimals: v14545,
        lptBals: v6888,
        name: v14547,
        poolBals: v14541,
        protoBals: v14557,
        protoInfo: v14396,
        symbol: v14551,
        tokA: v14552,
        tokB: v14553,
        totalSupply: v14554,
        zeroAddress: v14555
        };
      const v38853 = v14558;
      const v38855 = v14527;
      const v38856 = v14558.closed;
      if (v38856) {
        return;
        }
      else {
        const v38858 = v14558.lptBals;
        const v38859 = v38858.A;
        const v38860 = v38858.B;
        return;
        }
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc15,
    Trader_exactSwapBForA0_386: ctc15,
    Trader_swapAForB0_386: ctc15,
    Trader_swapBForA0_386: ctc15,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7210 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapAForB0_386" (defined at: ./index.rsh:1337:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapAForB'
    });
  const v7211 = v7210[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7212 = v7210[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7217 = v6829.poolBals;
  const v7218 = v6829.protoInfo;
  const v7220 = v7217.A;
  const v7221 = v7217.B;
  const v7222 = v7218.protoFee;
  const v7223 = v7218.totFee;
  const v7224 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7223);
  const v7225 = stdlib.safeMul256(v7211, v7224);
  const v7226 = stdlib.safeMul256(v7220, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7227 = stdlib.safeAdd256(v7226, v7225);
  const v7228 = stdlib.safeMul256(v7225, v7221);
  const v7229 = stdlib.safeDiv256(v7228, v7227);
  const v7233 = stdlib.safeMul256(v7222, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7234 = stdlib.safeDiv256(v7233, v7223);
  const v7235 = stdlib.safeMul256(v7220, v7211);
  const v7236 = stdlib.safeMul256(v7211, v7221);
  const v7237 = stdlib.safeDiv256(v7236, v7235);
  const v7238 = stdlib.safeSub256(v7237, v7229);
  const v7239 = stdlib.safeMul256(v7238, v7234);
  const v7240 = stdlib.safeDiv256(v7239, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7241 = stdlib.safeMul256(v7211, v7222);
  const v7242 = stdlib.safeDiv256(v7241, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7243 = stdlib.safeMul256(v7242, v7221);
  const v7244 = stdlib.safeDiv256(v7243, v7235);
  const v7245 = stdlib.gt256(v7244, v7240);
  const v7246 = [v7242, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v7247 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7240];
  const v7248 = v7245 ? v7246 : v7247;
  const v7250 = v7248[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
  const v7251 = v7248[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
  const v7256 = v7218.locked;
  const v7257 = v7256 ? false : true;
  stdlib.assert(v7257, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapAForB0_386" (defined at: ./index.rsh:1337:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapAForB'
    });
  const v7264 = stdlib.safeAdd256(v7220, v7211);
  const v7274 = stdlib.safeSub256(v7221, v7229);
  const v7278 = stdlib.safeSub256(v7264, v7250);
  const v7281 = stdlib.safeSub256(v7274, v7251);
  const v7295 = stdlib.le256(v7212, v7229);
  stdlib.assert(v7295, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapAForB0_386" (defined at: ./index.rsh:1337:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapAForB'
    });
  const v7300 = stdlib.safeMul256(v7220, v7221);
  const v7301 = stdlib.safeMul256(v7278, v7281);
  const v7302 = stdlib.ge256(v7301, v7300);
  stdlib.assert(v7302, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapAForB0_386" (defined at: ./index.rsh:1337:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapAForB'
    });
  const v7314 = ['Trader_swapAForB0_386', v7210];
  
  const v7894 = stdlib.cast("UInt256", "UInt", v7211, false, true);
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7314],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [v7894, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapAForB"
            });
          const v15197 = v15046[stdlib.checkedBigNumberify('./index.rsh:1337:12:spread', stdlib.UInt_max, '0')];
          const v15201 = v6829.poolBals;
          const v15202 = v6829.protoInfo;
          const v15204 = v15201.A;
          const v15205 = v15201.B;
          const v15206 = v15202.protoFee;
          const v15207 = v15202.totFee;
          const v15208 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15207);
          const v15209 = stdlib.safeMul256(v15197, v15208);
          const v15210 = stdlib.safeMul256(v15204, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v15211 = stdlib.safeAdd256(v15210, v15209);
          const v15212 = stdlib.safeMul256(v15209, v15205);
          const v15213 = stdlib.safeDiv256(v15212, v15211);
          const v15217 = stdlib.safeMul256(v15206, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v15218 = stdlib.safeDiv256(v15217, v15207);
          const v15219 = stdlib.safeMul256(v15204, v15197);
          const v15220 = stdlib.safeMul256(v15197, v15205);
          const v15221 = stdlib.safeDiv256(v15220, v15219);
          const v15222 = stdlib.safeSub256(v15221, v15213);
          const v15223 = stdlib.safeMul256(v15222, v15218);
          const v15224 = stdlib.safeDiv256(v15223, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v15225 = stdlib.safeMul256(v15197, v15206);
          const v15226 = stdlib.safeDiv256(v15225, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v15227 = stdlib.safeMul256(v15226, v15205);
          const v15228 = stdlib.safeDiv256(v15227, v15219);
          const v15229 = stdlib.gt256(v15228, v15224);
          const v15230 = [v15226, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v15231 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15224];
          const v15232 = v15229 ? v15230 : v15231;
          const v15234 = v15232[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
          const v15235 = v15232[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
          const v15248 = stdlib.safeAdd256(v15204, v15197);
          const v15258 = stdlib.safeSub256(v15205, v15213);
          const v15262 = stdlib.safeSub256(v15248, v15234);
          const v15265 = stdlib.safeSub256(v15258, v15235);
          const v15291 = stdlib.cast("UInt256", "UInt", v15197, false, true);
          const v15300 = stdlib.add(v6833, v15291);
          sim_r.txns.push({
            amt: v15291,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v16066 = v6829.protoBals;
          const v16067 = v16066.A;
          const v16071 = stdlib.safeAdd256(v16067, v15234);
          const v16072 = v16066.B;
          const v16076 = stdlib.safeAdd256(v16072, v15235);
          const v16094 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
          const v16098 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v6790], [ctc10, v16094]],
                fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v16099 = await txn1.getOutput('internal', 'v16098', ctc24, v16098);
          const v16101 = v16099[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
          const v16106 = stdlib.add(v15300, v16101);
          const v16108 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v15213
            };
          const v16109 = await txn1.getOutput('Trader_swapAForB', 'v16108', ctc11, v16108);
          
          const v16118 = {
            A: v15197,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v16120 = {
            A: v15262,
            B: v15265
            };
          const v16121 = [v7902, v16118, v16108, v16120];
          const v16122 = ['SwapEvent', v16121];
          null;
          const v16123 = v6829.closed;
          const v16124 = v6829.decimals;
          const v16126 = v6829.name;
          const v16130 = v6829.symbol;
          const v16131 = v6829.tokA;
          const v16132 = v6829.tokB;
          const v16133 = v6829.totalSupply;
          const v16134 = v6829.zeroAddress;
          const v16136 = {
            A: v16071,
            B: v16076
            };
          const v16137 = {
            closed: v16123,
            decimals: v16124,
            lptBals: v6888,
            name: v16126,
            poolBals: v16120,
            protoBals: v16136,
            protoInfo: v15202,
            symbol: v16130,
            tokA: v16131,
            tokB: v16132,
            totalSupply: v16133,
            zeroAddress: v16134
            };
          const v39091 = v16137;
          const v39093 = v16106;
          const v39094 = v16137.closed;
          if (v39094) {
            sim_r.isHalt = false;
            }
          else {
            const v39096 = v16137.lptBals;
            const v39097 = v39096.A;
            const v39098 = v39096.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      undefined /* setApiDetails */;
      const v15197 = v15046[stdlib.checkedBigNumberify('./index.rsh:1337:12:spread', stdlib.UInt_max, '0')];
      const v15198 = v15046[stdlib.checkedBigNumberify('./index.rsh:1337:12:spread', stdlib.UInt_max, '1')];
      const v15201 = v6829.poolBals;
      const v15202 = v6829.protoInfo;
      const v15204 = v15201.A;
      const v15205 = v15201.B;
      const v15206 = v15202.protoFee;
      const v15207 = v15202.totFee;
      const v15208 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v15207);
      const v15209 = stdlib.safeMul256(v15197, v15208);
      const v15210 = stdlib.safeMul256(v15204, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v15211 = stdlib.safeAdd256(v15210, v15209);
      const v15212 = stdlib.safeMul256(v15209, v15205);
      const v15213 = stdlib.safeDiv256(v15212, v15211);
      const v15217 = stdlib.safeMul256(v15206, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v15218 = stdlib.safeDiv256(v15217, v15207);
      const v15219 = stdlib.safeMul256(v15204, v15197);
      const v15220 = stdlib.safeMul256(v15197, v15205);
      const v15221 = stdlib.safeDiv256(v15220, v15219);
      const v15222 = stdlib.safeSub256(v15221, v15213);
      const v15223 = stdlib.safeMul256(v15222, v15218);
      const v15224 = stdlib.safeDiv256(v15223, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v15225 = stdlib.safeMul256(v15197, v15206);
      const v15226 = stdlib.safeDiv256(v15225, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v15227 = stdlib.safeMul256(v15226, v15205);
      const v15228 = stdlib.safeDiv256(v15227, v15219);
      const v15229 = stdlib.gt256(v15228, v15224);
      const v15230 = [v15226, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v15231 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v15224];
      const v15232 = v15229 ? v15230 : v15231;
      const v15234 = v15232[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '0')];
      const v15235 = v15232[stdlib.checkedBigNumberify('./index.rsh:252:29:array', stdlib.UInt_max, '1')];
      const v15240 = v15202.locked;
      const v15241 = v15240 ? false : true;
      stdlib.assert(v15241, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'locked',
        who: 'Trader_swapAForB'
        });
      const v15248 = stdlib.safeAdd256(v15204, v15197);
      const v15258 = stdlib.safeSub256(v15205, v15213);
      const v15262 = stdlib.safeSub256(v15248, v15234);
      const v15265 = stdlib.safeSub256(v15258, v15235);
      const v15279 = stdlib.le256(v15198, v15213);
      stdlib.assert(v15279, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapAForB'
        });
      const v15284 = stdlib.safeMul256(v15204, v15205);
      const v15285 = stdlib.safeMul256(v15262, v15265);
      const v15286 = stdlib.ge256(v15285, v15284);
      stdlib.assert(v15286, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1338:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1337:39:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:1337:39:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapAForB'
        });
      const v15291 = stdlib.cast("UInt256", "UInt", v15197, false, true);
      const v15300 = stdlib.add(v6833, v15291);
      ;
      const v16066 = v6829.protoBals;
      const v16067 = v16066.A;
      const v16071 = stdlib.safeAdd256(v16067, v15234);
      const v16072 = v16066.B;
      const v16076 = stdlib.safeAdd256(v16072, v15235);
      const v16094 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
      const v16098 = undefined /* Remote */;
      const v16099 = await txn1.getOutput('internal', 'v16098', ctc24, v16098);
      const v16101 = v16099[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v16106 = stdlib.add(v15300, v16101);
      const v16107 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v16101);
      stdlib.assert(v16107, {
        at: './index.rsh:598:5:application',
        fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1339:51:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1339:47:application call to [unknown function] (defined at: ./index.rsh:1339:47:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapAForB'
        });
      const v16108 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v15213
        };
      const v16109 = await txn1.getOutput('Trader_swapAForB', 'v16108', ctc11, v16108);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v15046, v16109), {
          at: './index.rsh:1337:13:application',
          fs: ['at ./index.rsh:1337:13:application call to [unknown function] (defined at: ./index.rsh:1337:13:function exp)', 'at ./index.rsh:1299:14:application call to "k" (defined at: ./index.rsh:1339:47:function exp)', 'at ./index.rsh:1339:51:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1339:47:application call to [unknown function] (defined at: ./index.rsh:1339:47:function exp)'],
          msg: 'out',
          who: 'Trader_swapAForB'
          });
        }
      else {
        }
      
      const v16118 = {
        A: v15197,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v16120 = {
        A: v15262,
        B: v15265
        };
      const v16121 = [v7902, v16118, v16108, v16120];
      const v16122 = ['SwapEvent', v16121];
      null;
      const v16123 = v6829.closed;
      const v16124 = v6829.decimals;
      const v16126 = v6829.name;
      const v16130 = v6829.symbol;
      const v16131 = v6829.tokA;
      const v16132 = v6829.tokB;
      const v16133 = v6829.totalSupply;
      const v16134 = v6829.zeroAddress;
      const v16136 = {
        A: v16071,
        B: v16076
        };
      const v16137 = {
        closed: v16123,
        decimals: v16124,
        lptBals: v6888,
        name: v16126,
        poolBals: v16120,
        protoBals: v16136,
        protoInfo: v15202,
        symbol: v16130,
        tokA: v16131,
        tokB: v16132,
        totalSupply: v16133,
        zeroAddress: v16134
        };
      const v39091 = v16137;
      const v39093 = v16106;
      const v39094 = v16137.closed;
      if (v39094) {
        return;
        }
      else {
        const v39096 = v16137.lptBals;
        const v39097 = v39096.A;
        const v39098 = v39096.B;
        return;
        }
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc15,
    Trader_exactSwapBForA0_386: ctc15,
    Trader_swapAForB0_386: ctc15,
    Trader_swapBForA0_386: ctc15,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
    });
  const ctc24 = stdlib.T_Tuple([ctc3, ctc12]);
  const ctc25 = stdlib.T_Tuple([ctc8, ctc3, ctc20]);
  
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7318 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1342:39:application call to [unknown function] (defined at: ./index.rsh:1342:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapBForA0_386" (defined at: ./index.rsh:1342:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'Trader_swapBForA'
    });
  const v7319 = v7318[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7320 = v7318[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7325 = v6829.poolBals;
  const v7326 = v6829.protoInfo;
  const v7328 = v7325.B;
  const v7329 = v7325.A;
  const v7330 = v7326.protoFee;
  const v7331 = v7326.totFee;
  const v7332 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v7331);
  const v7333 = stdlib.safeMul256(v7319, v7332);
  const v7334 = stdlib.safeMul256(v7328, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7335 = stdlib.safeAdd256(v7334, v7333);
  const v7336 = stdlib.safeMul256(v7333, v7329);
  const v7337 = stdlib.safeDiv256(v7336, v7335);
  const v7341 = stdlib.safeMul256(v7330, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7342 = stdlib.safeDiv256(v7341, v7331);
  const v7343 = stdlib.safeMul256(v7328, v7319);
  const v7344 = stdlib.safeMul256(v7319, v7329);
  const v7345 = stdlib.safeDiv256(v7344, v7343);
  const v7346 = stdlib.safeSub256(v7345, v7337);
  const v7347 = stdlib.safeMul256(v7346, v7342);
  const v7348 = stdlib.safeDiv256(v7347, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v7349 = stdlib.safeMul256(v7319, v7330);
  const v7350 = stdlib.safeDiv256(v7349, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
  const v7351 = stdlib.safeMul256(v7350, v7329);
  const v7352 = stdlib.safeDiv256(v7351, v7343);
  const v7353 = stdlib.gt256(v7352, v7348);
  const v7354 = [v7350, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v7355 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v7348];
  const v7356 = v7353 ? v7354 : v7355;
  const v7358 = v7356[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
  const v7359 = v7356[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
  const v7364 = v7326.locked;
  const v7365 = v7364 ? false : true;
  stdlib.assert(v7365, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1342:39:application call to [unknown function] (defined at: ./index.rsh:1342:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapBForA0_386" (defined at: ./index.rsh:1342:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'locked',
    who: 'Trader_swapBForA'
    });
  const v7376 = stdlib.safeAdd256(v7328, v7319);
  const v7380 = stdlib.safeSub256(v7329, v7337);
  const v7386 = stdlib.safeSub256(v7380, v7359);
  const v7389 = stdlib.safeSub256(v7376, v7358);
  const v7403 = stdlib.le256(v7320, v7337);
  stdlib.assert(v7403, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1342:39:application call to [unknown function] (defined at: ./index.rsh:1342:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapBForA0_386" (defined at: ./index.rsh:1342:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'slippage',
    who: 'Trader_swapBForA'
    });
  const v7409 = stdlib.safeMul256(v7329, v7328);
  const v7410 = stdlib.safeMul256(v7386, v7389);
  const v7411 = stdlib.ge256(v7410, v7409);
  stdlib.assert(v7411, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1342:39:application call to [unknown function] (defined at: ./index.rsh:1342:39:function exp)', 'at ./index.rsh:827:31:application call to "runTrader_swapBForA0_386" (defined at: ./index.rsh:1342:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'constant product',
    who: 'Trader_swapBForA'
    });
  const v7423 = ['Trader_swapBForA0_386', v7318];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7423],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1342:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Trader_swapBForA"
            });
          ;
          const v17575 = v16474[stdlib.checkedBigNumberify('./index.rsh:1342:12:spread', stdlib.UInt_max, '0')];
          const v17579 = v6829.poolBals;
          const v17580 = v6829.protoInfo;
          const v17582 = v17579.B;
          const v17583 = v17579.A;
          const v17584 = v17580.protoFee;
          const v17585 = v17580.totFee;
          const v17586 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v17585);
          const v17587 = stdlib.safeMul256(v17575, v17586);
          const v17588 = stdlib.safeMul256(v17582, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v17589 = stdlib.safeAdd256(v17588, v17587);
          const v17590 = stdlib.safeMul256(v17587, v17583);
          const v17591 = stdlib.safeDiv256(v17590, v17589);
          const v17595 = stdlib.safeMul256(v17584, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v17596 = stdlib.safeDiv256(v17595, v17585);
          const v17597 = stdlib.safeMul256(v17582, v17575);
          const v17598 = stdlib.safeMul256(v17575, v17583);
          const v17599 = stdlib.safeDiv256(v17598, v17597);
          const v17600 = stdlib.safeSub256(v17599, v17591);
          const v17601 = stdlib.safeMul256(v17600, v17596);
          const v17602 = stdlib.safeDiv256(v17601, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v17603 = stdlib.safeMul256(v17575, v17584);
          const v17604 = stdlib.safeDiv256(v17603, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v17605 = stdlib.safeMul256(v17604, v17583);
          const v17606 = stdlib.safeDiv256(v17605, v17597);
          const v17607 = stdlib.gt256(v17606, v17602);
          const v17608 = [v17604, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          const v17609 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v17602];
          const v17610 = v17607 ? v17608 : v17609;
          const v17612 = v17610[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
          const v17613 = v17610[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
          const v17630 = stdlib.safeAdd256(v17582, v17575);
          const v17634 = stdlib.safeSub256(v17583, v17591);
          const v17640 = stdlib.safeSub256(v17634, v17613);
          const v17643 = stdlib.safeSub256(v17630, v17612);
          const v17645 = v6829.protoBals;
          const v17646 = v17645.A;
          const v17650 = stdlib.safeAdd256(v17646, v17613);
          const v17651 = v17645.B;
          const v17655 = stdlib.safeAdd256(v17651, v17612);
          const v17674 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
          const v17676 = [v7902, v6788];
          const v17677 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v17676];
          const v17681 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902, v6788],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v17674], [ctc10, v6790], [ctc25, v17677]],
                fees: stdlib.checkedBigNumberify('./index.rsh:606:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v17682 = await txn1.getOutput('internal', 'v17681', ctc24, v17681);
          const v17684 = v17682[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
          const v17689 = stdlib.add(v6833, v17684);
          const v17697 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6757,
              remote: ({
                accs: [v7902],
                apps: [v6757],
                bills: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                boxes: [[ctc10, v6790], [ctc10, v17674]],
                fees: stdlib.checkedBigNumberify('./index.rsh:592:11:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
          const v17698 = await txn1.getOutput('internal', 'v17697', ctc24, v17697);
          const v17700 = v17698[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
          const v17705 = stdlib.add(v17689, v17700);
          const v17707 = {
            A: v17591,
            B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v17708 = await txn1.getOutput('Trader_swapBForA', 'v17707', ctc11, v17707);
          
          const v17717 = {
            A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            B: v17575
            };
          const v17719 = {
            A: v17640,
            B: v17643
            };
          const v17720 = [v7902, v17717, v17707, v17719];
          const v17721 = ['SwapEvent', v17720];
          null;
          const v17722 = v6829.closed;
          const v17723 = v6829.decimals;
          const v17725 = v6829.name;
          const v17729 = v6829.symbol;
          const v17730 = v6829.tokA;
          const v17731 = v6829.tokB;
          const v17732 = v6829.totalSupply;
          const v17733 = v6829.zeroAddress;
          const v17735 = {
            A: v17650,
            B: v17655
            };
          const v17736 = {
            closed: v17722,
            decimals: v17723,
            lptBals: v6888,
            name: v17725,
            poolBals: v17719,
            protoBals: v17735,
            protoInfo: v17580,
            symbol: v17729,
            tokA: v17730,
            tokB: v17731,
            totalSupply: v17732,
            zeroAddress: v17733
            };
          const v39329 = v17736;
          const v39331 = v17705;
          const v39332 = v17736.closed;
          if (v39332) {
            sim_r.isHalt = false;
            }
          else {
            const v39334 = v17736.lptBals;
            const v39335 = v39334.A;
            const v39336 = v39334.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v17575 = v16474[stdlib.checkedBigNumberify('./index.rsh:1342:12:spread', stdlib.UInt_max, '0')];
      const v17576 = v16474[stdlib.checkedBigNumberify('./index.rsh:1342:12:spread', stdlib.UInt_max, '1')];
      const v17579 = v6829.poolBals;
      const v17580 = v6829.protoInfo;
      const v17582 = v17579.B;
      const v17583 = v17579.A;
      const v17584 = v17580.protoFee;
      const v17585 = v17580.totFee;
      const v17586 = stdlib.safeSub256(stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'), v17585);
      const v17587 = stdlib.safeMul256(v17575, v17586);
      const v17588 = stdlib.safeMul256(v17582, stdlib.checkedBigNumberify('./index.rsh:13:30:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v17589 = stdlib.safeAdd256(v17588, v17587);
      const v17590 = stdlib.safeMul256(v17587, v17583);
      const v17591 = stdlib.safeDiv256(v17590, v17589);
      const v17595 = stdlib.safeMul256(v17584, stdlib.checkedBigNumberify('./index.rsh:180:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v17596 = stdlib.safeDiv256(v17595, v17585);
      const v17597 = stdlib.safeMul256(v17582, v17575);
      const v17598 = stdlib.safeMul256(v17575, v17583);
      const v17599 = stdlib.safeDiv256(v17598, v17597);
      const v17600 = stdlib.safeSub256(v17599, v17591);
      const v17601 = stdlib.safeMul256(v17600, v17596);
      const v17602 = stdlib.safeDiv256(v17601, stdlib.checkedBigNumberify('./index.rsh:187:64:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v17603 = stdlib.safeMul256(v17575, v17584);
      const v17604 = stdlib.safeDiv256(v17603, stdlib.checkedBigNumberify('./index.rsh:211:54:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v17605 = stdlib.safeMul256(v17604, v17583);
      const v17606 = stdlib.safeDiv256(v17605, v17597);
      const v17607 = stdlib.gt256(v17606, v17602);
      const v17608 = [v17604, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v17609 = [stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'), v17602];
      const v17610 = v17607 ? v17608 : v17609;
      const v17612 = v17610[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '0')];
      const v17613 = v17610[stdlib.checkedBigNumberify('./index.rsh:268:29:array', stdlib.UInt_max, '1')];
      const v17618 = v17580.locked;
      const v17619 = v17618 ? false : true;
      stdlib.assert(v17619, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1217:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
        msg: 'locked',
        who: 'Trader_swapBForA'
        });
      const v17630 = stdlib.safeAdd256(v17582, v17575);
      const v17634 = stdlib.safeSub256(v17583, v17591);
      const v17640 = stdlib.safeSub256(v17634, v17613);
      const v17643 = stdlib.safeSub256(v17630, v17612);
      const v17645 = v6829.protoBals;
      const v17646 = v17645.A;
      const v17650 = stdlib.safeAdd256(v17646, v17613);
      const v17651 = v17645.B;
      const v17655 = stdlib.safeAdd256(v17651, v17612);
      const v17657 = stdlib.le256(v17576, v17591);
      stdlib.assert(v17657, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1235:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
        msg: 'slippage',
        who: 'Trader_swapBForA'
        });
      const v17663 = stdlib.safeMul256(v17583, v17582);
      const v17664 = stdlib.safeMul256(v17640, v17643);
      const v17665 = stdlib.ge256(v17664, v17663);
      stdlib.assert(v17665, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1245:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1270:51:application call to "calcSwap" (defined at: ./index.rsh:1216:73:function exp)', 'at ./index.rsh:1343:25:application call to "doSwap" (defined at: ./index.rsh:1261:70:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
        msg: 'constant product',
        who: 'Trader_swapBForA'
        });
      const v17674 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7902];
      const v17676 = [v7902, v6788];
      const v17677 = [v6757, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v17676];
      const v17681 = undefined /* Remote */;
      const v17682 = await txn1.getOutput('internal', 'v17681', ctc24, v17681);
      const v17684 = v17682[stdlib.checkedBigNumberify('./index.rsh:613:5:application', stdlib.UInt_max, '0')];
      const v17689 = stdlib.add(v6833, v17684);
      const v17690 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v17684);
      stdlib.assert(v17690, {
        at: './index.rsh:613:5:application',
        fs: ['at ./index.rsh:1289:39:application call to "arc200_transferFrom" (defined at: ./index.rsh:600:60:function exp)', 'at ./index.rsh:1344:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapBForA'
        });
      const v17697 = undefined /* Remote */;
      const v17698 = await txn1.getOutput('internal', 'v17697', ctc24, v17697);
      const v17700 = v17698[stdlib.checkedBigNumberify('./index.rsh:598:5:application', stdlib.UInt_max, '0')];
      const v17705 = stdlib.add(v17689, v17700);
      const v17706 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v17700);
      stdlib.assert(v17706, {
        at: './index.rsh:598:5:application',
        fs: ['at ./index.rsh:1294:35:application call to "arc200_transfer" (defined at: ./index.rsh:586:49:function exp)', 'at ./index.rsh:1344:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
        msg: 'remote bill check',
        who: 'Trader_swapBForA'
        });
      const v17707 = {
        A: v17591,
        B: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v17708 = await txn1.getOutput('Trader_swapBForA', 'v17707', ctc11, v17707);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v16474, v17708), {
          at: './index.rsh:1342:13:application',
          fs: ['at ./index.rsh:1342:13:application call to [unknown function] (defined at: ./index.rsh:1342:13:function exp)', 'at ./index.rsh:1299:14:application call to "k" (defined at: ./index.rsh:1344:21:function exp)', 'at ./index.rsh:1344:25:application call to "c" (defined at: ./index.rsh:1276:22:function exp)', 'at ./index.rsh:1344:21:application call to [unknown function] (defined at: ./index.rsh:1344:21:function exp)'],
          msg: 'out',
          who: 'Trader_swapBForA'
          });
        }
      else {
        }
      
      const v17717 = {
        A: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        B: v17575
        };
      const v17719 = {
        A: v17640,
        B: v17643
        };
      const v17720 = [v7902, v17717, v17707, v17719];
      const v17721 = ['SwapEvent', v17720];
      null;
      const v17722 = v6829.closed;
      const v17723 = v6829.decimals;
      const v17725 = v6829.name;
      const v17729 = v6829.symbol;
      const v17730 = v6829.tokA;
      const v17731 = v6829.tokB;
      const v17732 = v6829.totalSupply;
      const v17733 = v6829.zeroAddress;
      const v17735 = {
        A: v17650,
        B: v17655
        };
      const v17736 = {
        closed: v17722,
        decimals: v17723,
        lptBals: v6888,
        name: v17725,
        poolBals: v17719,
        protoBals: v17735,
        protoInfo: v17580,
        symbol: v17729,
        tokA: v17730,
        tokB: v17731,
        totalSupply: v17732,
        zeroAddress: v17733
        };
      const v39329 = v17736;
      const v39331 = v17705;
      const v39332 = v17736.closed;
      if (v39332) {
        return;
        }
      else {
        const v39334 = v17736.lptBals;
        const v39335 = v39334.A;
        const v39336 = v39334.B;
        return;
        }
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc19,
    Trader_exactSwapBForA0_386: ctc19,
    Trader_swapAForB0_386: ctc19,
    Trader_swapBForA0_386: ctc19,
    approve0_386: ctc15,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc15,
    transferFrom0_386: ctc22
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v6953 = ctc.selfAddress();
  const v6955 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:996:43:application call to [unknown function] (defined at: ./index.rsh:996:43:function exp)', 'at ./index.rsh:827:31:application call to "runapprove0_386" (defined at: ./index.rsh:996:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v6956 = v6955[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6961 = stdlib.addressEq(v6953, v6754);
  const v6962 = v6961 ? false : true;
  stdlib.assert(v6962, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:988:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:20:application call to "chkApprove_" (defined at: ./index.rsh:987:56:function exp)', 'at ./index.rsh:996:43:application call to [unknown function] (defined at: ./index.rsh:996:43:function exp)', 'at ./index.rsh:827:31:application call to "runapprove0_386" (defined at: ./index.rsh:996:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'approve'
    });
  const v6964 = stdlib.addressEq(v6956, v6754);
  const v6965 = v6964 ? false : true;
  stdlib.assert(v6965, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:989:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:20:application call to "chkApprove_" (defined at: ./index.rsh:987:56:function exp)', 'at ./index.rsh:996:43:application call to [unknown function] (defined at: ./index.rsh:996:43:function exp)', 'at ./index.rsh:827:31:application call to "runapprove0_386" (defined at: ./index.rsh:996:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'approve'
    });
  const v6974 = ['approve0_386', v6955];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v6974],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:996:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v19174 = v17902[stdlib.checkedBigNumberify('./index.rsh:996:12:spread', stdlib.UInt_max, '0')];
          const v19175 = v17902[stdlib.checkedBigNumberify('./index.rsh:996:12:spread', stdlib.UInt_max, '1')];
          const v19185 = [v7902, v19174];
          await stdlib.simMapSet(sim_r, 1, ctc20, v19185, ctc1, v19175);
          null;
          const v19187 = true;
          const v19188 = await txn1.getOutput('approve', 'v19187', ctc12, v19187);
          
          const v39567 = v6829;
          const v39569 = v6833;
          const v39570 = v6829.closed;
          if (v39570) {
            sim_r.isHalt = false;
            }
          else {
            const v39572 = v6829.lptBals;
            const v39573 = v39572.A;
            const v39574 = v39572.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v19174 = v17902[stdlib.checkedBigNumberify('./index.rsh:996:12:spread', stdlib.UInt_max, '0')];
      const v19175 = v17902[stdlib.checkedBigNumberify('./index.rsh:996:12:spread', stdlib.UInt_max, '1')];
      const v19177 = stdlib.addressEq(v7902, v6754);
      const v19178 = v19177 ? false : true;
      stdlib.assert(v19178, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:988:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:20:application call to "chkApprove_" (defined at: ./index.rsh:987:56:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'approve'
        });
      const v19180 = stdlib.addressEq(v19174, v6754);
      const v19181 = v19180 ? false : true;
      stdlib.assert(v19181, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:989:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:997:20:application call to "chkApprove_" (defined at: ./index.rsh:987:56:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'approve'
        });
      const v19185 = [v7902, v19174];
      await stdlib.mapSet(map1, ctc20, v19185, ctc1, v19175);
      null;
      const v19187 = true;
      const v19188 = await txn1.getOutput('approve', 'v19187', ctc12, v19187);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v17902, v19188), {
          at: './index.rsh:996:13:application',
          fs: ['at ./index.rsh:996:13:application call to [unknown function] (defined at: ./index.rsh:996:13:function exp)', 'at ./index.rsh:1001:14:application call to "k" (defined at: ./index.rsh:999:15:function exp)', 'at ./index.rsh:999:15:application call to [unknown function] (defined at: ./index.rsh:999:15:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      const v39567 = v6829;
      const v39569 = v6833;
      const v39570 = v6829.closed;
      if (v39570) {
        return;
        }
      else {
        const v39572 = v6829.lptBals;
        const v39573 = v39572.A;
        const v39574 = v39572.B;
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteAllowanceBox4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteAllowanceBox4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteAllowanceBox4 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc19,
    Trader_exactSwapBForA0_386: ctc19,
    Trader_swapAForB0_386: ctc19,
    Trader_swapBForA0_386: ctc19,
    approve0_386: ctc20,
    deleteAllowanceBox0_386: ctc15,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc20,
    transferFrom0_386: ctc22
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7001 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1030:52:application call to [unknown function] (defined at: ./index.rsh:1030:52:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteAllowanceBox0_386" (defined at: ./index.rsh:1030:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v7002 = v7001[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7003 = v7001[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7006 = [v7002, v7003];
  const v7007 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v7006, ctc1), null);
  const v7008 = {
    None: 0,
    Some: 1
    }[v7007[0]];
  const v7009 = stdlib.eq(v7008, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v7009, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1031:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1030:52:application call to [unknown function] (defined at: ./index.rsh:1030:52:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteAllowanceBox0_386" (defined at: ./index.rsh:1030:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v7013 = stdlib.fromSome(v7007, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v7014 = stdlib.eq256(v7013, stdlib.checkedBigNumberify('./index.rsh:1036:48:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v7014, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1035:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1030:52:application call to [unknown function] (defined at: ./index.rsh:1030:52:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteAllowanceBox0_386" (defined at: ./index.rsh:1030:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v7023 = ['deleteAllowanceBox0_386', v7001];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7023],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1030:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v20625 = v19330[stdlib.checkedBigNumberify('./index.rsh:1030:12:spread', stdlib.UInt_max, '0')];
          const v20626 = v19330[stdlib.checkedBigNumberify('./index.rsh:1030:12:spread', stdlib.UInt_max, '1')];
          const v20627 = [v20625, v20626];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc15, v20627, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc15, v20627, ctc1, undefined /* Nothing */);
          const v20640 = true;
          const v20641 = await txn1.getOutput('deleteAllowanceBox', 'v20640', ctc12, v20640);
          
          const v39805 = v6829;
          const v39807 = v6833;
          const v39808 = v6829.closed;
          if (v39808) {
            sim_r.isHalt = false;
            }
          else {
            const v39810 = v6829.lptBals;
            const v39811 = v39810.A;
            const v39812 = v39810.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v20625 = v19330[stdlib.checkedBigNumberify('./index.rsh:1030:12:spread', stdlib.UInt_max, '0')];
      const v20626 = v19330[stdlib.checkedBigNumberify('./index.rsh:1030:12:spread', stdlib.UInt_max, '1')];
      const v20627 = [v20625, v20626];
      const v20628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc15, v20627, ctc1), null);
      const v20629 = {
        None: 0,
        Some: 1
        }[v20628[0]];
      const v20630 = stdlib.eq(v20629, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v20630, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1031:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:15:application call to [unknown function] (defined at: ./index.rsh:1040:15:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v20634 = stdlib.fromSome(v20628, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v20635 = stdlib.eq256(v20634, stdlib.checkedBigNumberify('./index.rsh:1036:48:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v20635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1035:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1040:15:application call to [unknown function] (defined at: ./index.rsh:1040:15:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc15, v20627, ctc1, undefined /* Nothing */);
      const v20640 = true;
      const v20641 = await txn1.getOutput('deleteAllowanceBox', 'v20640', ctc12, v20640);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v19330, v20641), {
          at: './index.rsh:1030:13:application',
          fs: ['at ./index.rsh:1030:13:application call to [unknown function] (defined at: ./index.rsh:1030:13:function exp)', 'at ./index.rsh:1042:14:application call to "k" (defined at: ./index.rsh:1040:15:function exp)', 'at ./index.rsh:1040:15:application call to [unknown function] (defined at: ./index.rsh:1040:15:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v39805 = v6829;
      const v39807 = v6833;
      const v39808 = v6829.closed;
      if (v39808) {
        return;
        }
      else {
        const v39810 = v6829.lptBals;
        const v39811 = v39810.A;
        const v39812 = v39810.B;
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleteBalanceBox4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleteBalanceBox4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleteBalanceBox4 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc19,
    Trader_exactSwapBForA0_386: ctc19,
    Trader_swapAForB0_386: ctc19,
    Trader_swapBForA0_386: ctc19,
    approve0_386: ctc20,
    deleteAllowanceBox0_386: ctc21,
    deleteBalanceBox0_386: ctc15,
    destroy0_386: ctc9,
    transfer0_386: ctc20,
    transferFrom0_386: ctc22
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v6978 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1011:40:application call to [unknown function] (defined at: ./index.rsh:1011:40:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteBalanceBox0_386" (defined at: ./index.rsh:1011:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v6979 = v6978[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6981 = stdlib.addressEq(v6979, v6754);
  const v6982 = v6981 ? false : true;
  stdlib.assert(v6982, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1012:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1011:40:application call to [unknown function] (defined at: ./index.rsh:1011:40:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteBalanceBox0_386" (defined at: ./index.rsh:1011:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v6984 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6979, ctc1), null);
  const v6985 = {
    None: 0,
    Some: 1
    }[v6984[0]];
  const v6986 = stdlib.eq(v6985, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v6986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1016:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1011:40:application call to [unknown function] (defined at: ./index.rsh:1011:40:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteBalanceBox0_386" (defined at: ./index.rsh:1011:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v6989 = stdlib.fromSome(v6984, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v6990 = stdlib.eq256(v6989, stdlib.checkedBigNumberify('./index.rsh:1017:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v6990, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1017:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1011:40:application call to [unknown function] (defined at: ./index.rsh:1011:40:function exp)', 'at ./index.rsh:827:31:application call to "rundeleteBalanceBox0_386" (defined at: ./index.rsh:1011:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v6997 = ['deleteBalanceBox0_386', v6978];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v6997],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1011:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v22078 = v20758[stdlib.checkedBigNumberify('./index.rsh:1011:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v22078, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc7, v22078, ctc1, undefined /* Nothing */);
          const v22091 = true;
          const v22092 = await txn1.getOutput('deleteBalanceBox', 'v22091', ctc12, v22091);
          
          const v40043 = v6829;
          const v40045 = v6833;
          const v40046 = v6829.closed;
          if (v40046) {
            sim_r.isHalt = false;
            }
          else {
            const v40048 = v6829.lptBals;
            const v40049 = v40048.A;
            const v40050 = v40048.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v22078 = v20758[stdlib.checkedBigNumberify('./index.rsh:1011:12:spread', stdlib.UInt_max, '0')];
      const v22079 = stdlib.addressEq(v22078, v6754);
      const v22080 = v22079 ? false : true;
      stdlib.assert(v22080, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1012:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v22082 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v22078, ctc1), null);
      const v22083 = {
        None: 0,
        Some: 1
        }[v22082[0]];
      const v22084 = stdlib.eq(v22083, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v22084, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1016:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v22087 = stdlib.fromSome(v22082, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v22088 = stdlib.eq256(v22087, stdlib.checkedBigNumberify('./index.rsh:1017:43:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v22088, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1017:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc7, v22078, ctc1, undefined /* Nothing */);
      const v22091 = true;
      const v22092 = await txn1.getOutput('deleteBalanceBox', 'v22091', ctc12, v22091);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v20758, v22092), {
          at: './index.rsh:1011:13:application',
          fs: ['at ./index.rsh:1011:13:application call to [unknown function] (defined at: ./index.rsh:1011:13:function exp)', 'at ./index.rsh:1021:14:application call to "k" (defined at: ./index.rsh:1019:15:function exp)', 'at ./index.rsh:1019:15:application call to [unknown function] (defined at: ./index.rsh:1019:15:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v40043 = v6829;
      const v40045 = v6833;
      const v40046 = v6829.closed;
      if (v40046) {
        return;
        }
      else {
        const v40048 = v6829.lptBals;
        const v40049 = v40048.A;
        const v40050 = v40048.B;
        return;
        }
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
      return;
      break;
      }
    }
  
  
  };
export async function _destroy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _destroy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _destroy4 expects to receive an interact object as its second argument.`));}
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
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc16 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc15,
    Provider_deposit0_386: ctc16,
    Provider_withdraw0_386: ctc17,
    Trader_exactSwapAForB0_386: ctc18,
    Trader_exactSwapBForA0_386: ctc18,
    Trader_swapAForB0_386: ctc18,
    Trader_swapBForA0_386: ctc18,
    approve0_386: ctc19,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc19,
    transferFrom0_386: ctc22
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v7027 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:1052:27:application call to [unknown function] (defined at: ./index.rsh:1052:27:function exp)', 'at ./index.rsh:827:31:application call to "rundestroy0_386" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v7028 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v7029 = {
    None: 0,
    Some: 1
    }[v7028[0]];
  const v7030 = stdlib.eq(v7029, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v7030, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:1053:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1052:27:application call to [unknown function] (defined at: ./index.rsh:1052:27:function exp)', 'at ./index.rsh:827:31:application call to "rundestroy0_386" (defined at: ./index.rsh:1052:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v7035 = ['destroy0_386', v7027];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v7035],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1052:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc7, v6754, ctc1, undefined /* Nothing */);
          const v23532 = null;
          const v23533 = await txn1.getOutput('destroy', 'v23532', ctc0, v23532);
          
          const v40281 = v6829;
          const v40283 = v6833;
          const v40284 = v6829.closed;
          if (v40284) {
            sim_r.isHalt = false;
            }
          else {
            const v40286 = v6829.lptBals;
            const v40287 = v40286.A;
            const v40288 = v40286.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v23528 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v23529 = {
        None: 0,
        Some: 1
        }[v23528[0]];
      const v23530 = stdlib.eq(v23529, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v23530, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:1053:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:1058:15:application call to [unknown function] (defined at: ./index.rsh:1058:15:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc7, v6754, ctc1, undefined /* Nothing */);
      const v23532 = null;
      const v23533 = await txn1.getOutput('destroy', 'v23532', ctc0, v23532);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v22186, v23533), {
          at: './index.rsh:1052:13:application',
          fs: ['at ./index.rsh:1052:13:application call to [unknown function] (defined at: ./index.rsh:1052:13:function exp)', 'at ./index.rsh:1060:14:application call to "k" (defined at: ./index.rsh:1058:15:function exp)', 'at ./index.rsh:1058:15:application call to [unknown function] (defined at: ./index.rsh:1058:15:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v40281 = v6829;
      const v40283 = v6833;
      const v40284 = v6829.closed;
      if (v40284) {
        return;
        }
      else {
        const v40286 = v6829.lptBals;
        const v40287 = v40286.A;
        const v40288 = v40286.B;
        return;
        }
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc17 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc21 = stdlib.T_Tuple([ctc7]);
  const ctc22 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc16,
    Provider_deposit0_386: ctc17,
    Provider_withdraw0_386: ctc18,
    Trader_exactSwapAForB0_386: ctc19,
    Trader_exactSwapBForA0_386: ctc19,
    Trader_swapAForB0_386: ctc19,
    Trader_swapBForA0_386: ctc19,
    approve0_386: ctc15,
    deleteAllowanceBox0_386: ctc20,
    deleteBalanceBox0_386: ctc21,
    destroy0_386: ctc9,
    transfer0_386: ctc15,
    transferFrom0_386: ctc22
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v6893 = ctc.selfAddress();
  const v6895 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:938:39:application call to [unknown function] (defined at: ./index.rsh:938:39:function exp)', 'at ./index.rsh:827:31:application call to "runtransfer0_386" (defined at: ./index.rsh:938:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'transfer'
    });
  const v6896 = v6895[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6897 = v6895[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v6901 = stdlib.addressEq(v6896, v6754);
  const v6902 = v6901 ? false : true;
  stdlib.assert(v6902, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:927:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:939:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:938:39:application call to [unknown function] (defined at: ./index.rsh:938:39:function exp)', 'at ./index.rsh:827:31:application call to "runtransfer0_386" (defined at: ./index.rsh:938:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transfer'
    });
  const v6904 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6893, ctc1), null);
  const v6905 = stdlib.fromSome(v6904, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v6906 = stdlib.ge256(v6905, v6897);
  stdlib.assert(v6906, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:939:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:938:39:application call to [unknown function] (defined at: ./index.rsh:938:39:function exp)', 'at ./index.rsh:827:31:application call to "runtransfer0_386" (defined at: ./index.rsh:938:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'transfer'
    });
  const v6915 = ['transfer0_386', v6895];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v6915],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:938:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transfer"
            });
          ;
          const v24968 = v23614[stdlib.checkedBigNumberify('./index.rsh:938:12:spread', stdlib.UInt_max, '0')];
          const v24969 = v23614[stdlib.checkedBigNumberify('./index.rsh:938:12:spread', stdlib.UInt_max, '1')];
          const v24974 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v7902, ctc1), null);
          const v24975 = stdlib.fromSome(v24974, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v24980 = true;
          const v24981 = await txn1.getOutput('transfer', 'v24980', ctc12, v24980);
          
          const v24990 = stdlib.safeSub256(v24975, v24969);
          await stdlib.simMapSet(sim_r, 0, ctc7, v7902, ctc1, v24990);
          const v24991 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v24968, ctc1), null);
          const v24992 = stdlib.fromSome(v24991, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v24993 = stdlib.safeAdd256(v24992, v24969);
          await stdlib.simMapSet(sim_r, 0, ctc7, v24968, ctc1, v24993);
          null;
          const v40519 = v6829;
          const v40521 = v6833;
          const v40522 = v6829.closed;
          if (v40522) {
            sim_r.isHalt = false;
            }
          else {
            const v40524 = v6829.lptBals;
            const v40525 = v40524.A;
            const v40526 = v40524.B;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v24968 = v23614[stdlib.checkedBigNumberify('./index.rsh:938:12:spread', stdlib.UInt_max, '0')];
      const v24969 = v23614[stdlib.checkedBigNumberify('./index.rsh:938:12:spread', stdlib.UInt_max, '1')];
      const v24971 = stdlib.addressEq(v24968, v6754);
      const v24972 = v24971 ? false : true;
      stdlib.assert(v24972, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:927:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:939:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:941:15:application call to [unknown function] (defined at: ./index.rsh:941:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transfer'
        });
      const v24974 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v7902, ctc1), null);
      const v24975 = stdlib.fromSome(v24974, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v24976 = stdlib.ge256(v24975, v24969);
      stdlib.assert(v24976, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:932:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:939:21:application call to "chkTransfer_" (defined at: ./index.rsh:926:51:function exp)', 'at ./index.rsh:941:15:application call to [unknown function] (defined at: ./index.rsh:941:15:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'transfer'
        });
      const v24980 = true;
      const v24981 = await txn1.getOutput('transfer', 'v24980', ctc12, v24980);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v23614, v24981), {
          at: './index.rsh:938:13:application',
          fs: ['at ./index.rsh:938:13:application call to [unknown function] (defined at: ./index.rsh:938:13:function exp)', 'at ./index.rsh:942:14:application call to "k" (defined at: ./index.rsh:941:15:function exp)', 'at ./index.rsh:941:15:application call to [unknown function] (defined at: ./index.rsh:941:15:function exp)'],
          msg: 'out',
          who: 'transfer'
          });
        }
      else {
        }
      
      const v24990 = stdlib.safeSub256(v24975, v24969);
      await stdlib.mapSet(map0, ctc7, v7902, ctc1, v24990);
      const v24991 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v24968, ctc1), null);
      const v24992 = stdlib.fromSome(v24991, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v24993 = stdlib.safeAdd256(v24992, v24969);
      await stdlib.mapSet(map0, ctc7, v24968, ctc1, v24993);
      null;
      const v40519 = v6829;
      const v40521 = v6833;
      const v40522 = v6829.closed;
      if (v40522) {
        return;
        }
      else {
        const v40524 = v6829.lptBals;
        const v40525 = v40524.A;
        const v40526 = v40524.B;
        return;
        }
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
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
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Object({
    decimals: ctc3,
    name: ctc4,
    symbol: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3, ctc7]);
  const ctc11 = stdlib.T_Struct([['A', ctc1], ['B', ctc1]]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Struct([['protoFee', ctc1], ['lpFee', ctc1], ['totFee', ctc1], ['protoAddr', ctc7], ['locked', ctc12]]);
  const ctc14 = stdlib.T_Object({
    closed: ctc12,
    decimals: ctc3,
    lptBals: ctc11,
    name: ctc4,
    poolBals: ctc11,
    protoBals: ctc11,
    protoInfo: ctc13,
    symbol: ctc5,
    tokA: ctc0,
    tokB: ctc8,
    totalSupply: ctc1,
    zeroAddress: ctc7
    });
  const ctc15 = stdlib.T_Tuple([ctc7, ctc7, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7, ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc7, ctc13]);
  const ctc18 = stdlib.T_Tuple([ctc11, ctc1, ctc3]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc11]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc21 = stdlib.T_Tuple([ctc7, ctc1]);
  const ctc22 = stdlib.T_Tuple([ctc7]);
  const ctc23 = stdlib.T_Data({
    Protocol_harvest0_386: ctc17,
    Provider_deposit0_386: ctc18,
    Provider_withdraw0_386: ctc19,
    Trader_exactSwapAForB0_386: ctc20,
    Trader_exactSwapBForA0_386: ctc20,
    Trader_swapAForB0_386: ctc20,
    Trader_swapBForA0_386: ctc20,
    approve0_386: ctc21,
    deleteAllowanceBox0_386: ctc16,
    deleteBalanceBox0_386: ctc22,
    destroy0_386: ctc9,
    transfer0_386: ctc21,
    transferFrom0_386: ctc15
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
  
  
  const [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1]);
  const v6917 = ctc.selfAddress();
  const v6919 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:972:50:application call to [unknown function] (defined at: ./index.rsh:972:50:function exp)', 'at ./index.rsh:827:31:application call to "runtransferFrom0_386" (defined at: ./index.rsh:972:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v6920 = v6919[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6921 = v6919[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v6922 = v6919[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v6927 = stdlib.addressEq(v6920, v6754);
  const v6928 = v6927 ? false : true;
  stdlib.assert(v6928, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:972:50:application call to [unknown function] (defined at: ./index.rsh:972:50:function exp)', 'at ./index.rsh:827:31:application call to "runtransferFrom0_386" (defined at: ./index.rsh:972:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'transferFrom'
    });
  const v6930 = stdlib.addressEq(v6921, v6754);
  const v6931 = v6930 ? false : true;
  stdlib.assert(v6931, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:955:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:972:50:application call to [unknown function] (defined at: ./index.rsh:972:50:function exp)', 'at ./index.rsh:827:31:application call to "runtransferFrom0_386" (defined at: ./index.rsh:972:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'transferFrom'
    });
  const v6933 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v6920, ctc1), null);
  const v6934 = stdlib.fromSome(v6933, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v6935 = stdlib.ge256(v6934, v6922);
  stdlib.assert(v6935, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:956:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:972:50:application call to [unknown function] (defined at: ./index.rsh:972:50:function exp)', 'at ./index.rsh:827:31:application call to "runtransferFrom0_386" (defined at: ./index.rsh:972:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'transferFrom'
    });
  const v6937 = [v6920, v6917];
  const v6938 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6937, ctc1), null);
  const v6939 = stdlib.fromSome(v6938, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v6940 = stdlib.ge256(v6939, v6922);
  stdlib.assert(v6940, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:960:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:972:50:application call to [unknown function] (defined at: ./index.rsh:972:50:function exp)', 'at ./index.rsh:827:31:application call to "runtransferFrom0_386" (defined at: ./index.rsh:972:12:function exp)', 'at ./index.rsh:827:31:application call to [unknown function] (defined at: ./index.rsh:827:31:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'transferFrom'
    });
  const v6951 = ['transferFrom0_386', v6919];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6748, v6749, v6754, v6757, v6763, v6788, v6790, v6825, v6829, v6833, v6888, v6889, v6890, v6951],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc23],
    pay: [stdlib.checkedBigNumberify('./index.rsh:972:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
      
      switch (v7903[0]) {
        case 'Protocol_harvest0_386': {
          const v7906 = v7903[1];
          
          break;
          }
        case 'Provider_deposit0_386': {
          const v9334 = v7903[1];
          
          break;
          }
        case 'Provider_withdraw0_386': {
          const v10762 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapAForB0_386': {
          const v12190 = v7903[1];
          
          break;
          }
        case 'Trader_exactSwapBForA0_386': {
          const v13618 = v7903[1];
          
          break;
          }
        case 'Trader_swapAForB0_386': {
          const v15046 = v7903[1];
          
          break;
          }
        case 'Trader_swapBForA0_386': {
          const v16474 = v7903[1];
          
          break;
          }
        case 'approve0_386': {
          const v17902 = v7903[1];
          
          break;
          }
        case 'deleteAllowanceBox0_386': {
          const v19330 = v7903[1];
          
          break;
          }
        case 'deleteBalanceBox0_386': {
          const v20758 = v7903[1];
          
          break;
          }
        case 'destroy0_386': {
          const v22186 = v7903[1];
          
          break;
          }
        case 'transfer0_386': {
          const v23614 = v7903[1];
          
          break;
          }
        case 'transferFrom0_386': {
          const v25042 = v7903[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v26425 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '0')];
          const v26426 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '1')];
          const v26427 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '2')];
          const v26435 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v26425, ctc1), null);
          const v26436 = stdlib.fromSome(v26435, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v26439 = [v26425, v7902];
          const v26440 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc16, v26439, ctc1), null);
          const v26441 = stdlib.fromSome(v26440, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v26449 = stdlib.safeSub256(v26436, v26427);
          await stdlib.simMapSet(sim_r, 0, ctc7, v26425, ctc1, v26449);
          const v26450 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc7, v26426, ctc1), null);
          const v26451 = stdlib.fromSome(v26450, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v26452 = stdlib.safeAdd256(v26451, v26427);
          await stdlib.simMapSet(sim_r, 0, ctc7, v26426, ctc1, v26452);
          null;
          const v26457 = stdlib.safeSub256(v26441, v26427);
          await stdlib.simMapSet(sim_r, 1, ctc16, v26439, ctc1, v26457);
          null;
          const v26460 = true;
          const v26461 = await txn1.getOutput('transferFrom', 'v26460', ctc12, v26460);
          
          const v40757 = v6829;
          const v40759 = v6833;
          const v40760 = v6829.closed;
          if (v40760) {
            sim_r.isHalt = false;
            }
          else {
            const v40762 = v6829.lptBals;
            const v40763 = v40762.A;
            const v40764 = v40762.B;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc7, ctc8, ctc9, ctc7, ctc10, ctc11, ctc14, ctc3, ctc11, ctc1, ctc1, ctc23],
    waitIfNotPresent: false
    }));
  const {data: [v7903], secs: v7905, time: v7904, didSend: v4595, from: v7902 } = txn1;
  switch (v7903[0]) {
    case 'Protocol_harvest0_386': {
      const v7906 = v7903[1];
      return;
      break;
      }
    case 'Provider_deposit0_386': {
      const v9334 = v7903[1];
      return;
      break;
      }
    case 'Provider_withdraw0_386': {
      const v10762 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapAForB0_386': {
      const v12190 = v7903[1];
      return;
      break;
      }
    case 'Trader_exactSwapBForA0_386': {
      const v13618 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapAForB0_386': {
      const v15046 = v7903[1];
      return;
      break;
      }
    case 'Trader_swapBForA0_386': {
      const v16474 = v7903[1];
      return;
      break;
      }
    case 'approve0_386': {
      const v17902 = v7903[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_386': {
      const v19330 = v7903[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_386': {
      const v20758 = v7903[1];
      return;
      break;
      }
    case 'destroy0_386': {
      const v22186 = v7903[1];
      return;
      break;
      }
    case 'transfer0_386': {
      const v23614 = v7903[1];
      return;
      break;
      }
    case 'transferFrom0_386': {
      const v25042 = v7903[1];
      undefined /* setApiDetails */;
      ;
      const v26425 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '0')];
      const v26426 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '1')];
      const v26427 = v25042[stdlib.checkedBigNumberify('./index.rsh:972:12:spread', stdlib.UInt_max, '2')];
      const v26429 = stdlib.addressEq(v26425, v6754);
      const v26430 = v26429 ? false : true;
      stdlib.assert(v26430, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:954:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'transferFrom'
        });
      const v26432 = stdlib.addressEq(v26426, v6754);
      const v26433 = v26432 ? false : true;
      stdlib.assert(v26433, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:955:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'transferFrom'
        });
      const v26435 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v26425, ctc1), null);
      const v26436 = stdlib.fromSome(v26435, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v26437 = stdlib.ge256(v26436, v26427);
      stdlib.assert(v26437, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:956:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'transferFrom'
        });
      const v26439 = [v26425, v7902];
      const v26440 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v26439, ctc1), null);
      const v26441 = stdlib.fromSome(v26440, stdlib.checkedBigNumberify('./index.rsh:836:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v26442 = stdlib.ge256(v26441, v26427);
      stdlib.assert(v26442, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:960:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:973:25:application call to "chkTransferFrom_" (defined at: ./index.rsh:953:65:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'transferFrom'
        });
      const v26449 = stdlib.safeSub256(v26436, v26427);
      await stdlib.mapSet(map0, ctc7, v26425, ctc1, v26449);
      const v26450 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc7, v26426, ctc1), null);
      const v26451 = stdlib.fromSome(v26450, stdlib.checkedBigNumberify('./index.rsh:831:42:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v26452 = stdlib.safeAdd256(v26451, v26427);
      await stdlib.mapSet(map0, ctc7, v26426, ctc1, v26452);
      null;
      const v26457 = stdlib.safeSub256(v26441, v26427);
      await stdlib.mapSet(map1, ctc16, v26439, ctc1, v26457);
      null;
      const v26460 = true;
      const v26461 = await txn1.getOutput('transferFrom', 'v26460', ctc12, v26460);
      if (v4595) {
        stdlib.protect(ctc0, await interact.out(v25042, v26461), {
          at: './index.rsh:972:13:application',
          fs: ['at ./index.rsh:972:13:application call to [unknown function] (defined at: ./index.rsh:972:13:function exp)', 'at ./index.rsh:977:14:application call to "k" (defined at: ./index.rsh:975:15:function exp)', 'at ./index.rsh:975:15:application call to [unknown function] (defined at: ./index.rsh:975:15:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      const v40757 = v6829;
      const v40759 = v6833;
      const v40760 = v6829.closed;
      if (v40760) {
        return;
        }
      else {
        const v40762 = v6829.lptBals;
        const v40763 = v40762.A;
        const v40764 = v40762.B;
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
export async function deleteAllowanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteAllowanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteAllowanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _deleteAllowanceBox4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleteBalanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleteBalanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleteBalanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _deleteBalanceBox4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function destroy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for destroy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for destroy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _destroy4(ctcTop, interact);}
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
    impure: [`Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256,uint64)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Trader_exactSwapAForB(uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,byte[0],uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `approve(address,uint256)byte`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`],
    pure: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,byte[0])`, `allowance(address,address)uint256`, `balanceOf(address)uint256`, `decimals()uint64`, `name()byte[32]`, `symbol()byte[8]`, `totalSupply()uint256`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`],
    sigs: [`Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,byte[0])`, `Protocol_delete()void`, `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`, `Provider_deposit((uint256,uint256),uint256,uint64)uint256`, `Provider_withdraw(uint256,(uint256,uint256))(uint256,uint256)`, `Trader_exactSwapAForB(uint256,uint256)(uint256,uint256)`, `Trader_exactSwapBForA(uint256,uint256)(uint256,uint256)`, `Trader_swapAForB(uint256,uint256)(uint256,uint256)`, `Trader_swapBForA(uint256,uint256)(uint256,uint256)`, `_reachp_0((uint64,((uint64,byte[32],byte[8]),(uint64,byte[0],uint64),address)))void`, `_reachp_2((uint64,()))void`, `_reachp_3((uint64,(byte,byte[161])))void`, `allowance(address,address)uint256`, `approve(address,uint256)byte`, `balanceOf(address)uint256`, `decimals()uint64`, `deleteAllowanceBox(address,address)byte`, `deleteBalanceBox(address)byte`, `destroy()void`, `name()byte[32]`, `symbol()byte[8]`, `totalSupply()uint256`, `transfer(address,uint256)byte`, `transferFrom(address,address,uint256)byte`, `v_exactSwapAForB(uint64)uint64`, `v_exactSwapBForA(uint64)uint64`, `v_swapAForB(uint64)uint64`, `v_swapBForA(uint64)uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAWAAgg1N4BBAEGAvICYeoC+gKaA0B/xNsBGAVBODC6AyYUAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQBWFwcElECAAAAAAAAAABAQIEcV/BRgTT7OMCBCiRiGEg//////////////////////////////////////////8BAQEDAQQBBQEGBACKcnIEGOCUYSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEIMRhBGYUoZEkiWzUBSSNbNQKBEFs1BSlkJwtkUCcGZFAnDGRQJw1kUCcOZFAnD2RQghwEAIpycgQN+OUwBBk6ARsEG2CazAQzuo93BDc3UNEEPRA/JQRLbhteBFZ844EEXYVNDgRsyzzCBG7MciQEcV/BRgRz5bcXBHn6tGUEg7rXzASPlRtZBI/8HC4EnIahhQSc1oVYBJ61XFwEofm/TAS4CFEEBLh3nucE2eMKwgTg2Vu1BPPQYRAE/am27zYaAI4cGvgYhBswGvIBgAEcAbwbORtCGLIa7xh5GwoARBr1GMwY1wFiGOwY5BhMGL8AARjUAZ4AugFEG0sANAEhBAxBGYI0ASEHEkSIG8U0E1cJQDQTV2lAUDQTV+mBUDQTV6lAUDQTIQgjWFA1BDEZIhJEgAQVH3x1NARQsCEFQyOvNQshBzQBEkSIG4Y0CyJbNQyABMUfw1c0DBZQsDQMiBvFKDULgAgAAAAAAABngzQLULA0CzUENBE0E1fpgVdgIIgbvzEZIRESRLEisgEhBrIQNAWyGCERshmzgaCNBogbm4gbjCIyCjIJiBukNANA/4pC/302GgE2GgI1CzUMI68pNAw0C1BQUDULIQQ0ARJEiBqmNAsiWzUMNAtXCKI1DYAErQu+RDQMFlA0DVCwNAyIGzM0DSJVjQ0YGBgiGCwYNhhAGEoYVBheGGgYnhihGKQYrkL+5DYaATYaAjYaAxc1CzUMNQ0jrycLNA00DFA0CxZQUIE5r1BQNQtC/4w2GgE2GgI1CzUMI68nBjQMNAtQUCESr1BQNQtC/242GgE2GgI1CzUMI68nDTQMNAtQUCEJr1BQNQtC/1A2GgE2GgI1CzUMI68nDDQMNAtQUCEJr1BQNQtC/zI2GgE2GgI1CzUMI68nDjQMNAtQUCEJr1BQNQtC/xQ2GgE2GgI1CzUMI68nDzQMNAtQUCEJr1BQNQtC/vY0C1cAIDUNNAtXIIE1DDEANBNX6YFXYCASRDQMVwAgNSE0DFcgIDUgNAxXQCA1HzQhKqQ0ICqkEEEXvDQfNCA0IaCIGTWoNQs0CzQfKqQQNB8yA6UQRDQMV4ABFzUeNBNXaUA1HTIKYDIKeAk0EQk1HDQTV6lASTUPVyAgNQ4nBDQYFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQayEDQYshgnB7IaNA1JshyyGjQOsho0GLIyszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAgDzQLULA0C0k1DSJbNQsiNAsSRDQPVwAgNA5QNBwWUDUNgAgAAAAAAAAgHTQNULA0DTUEJws0ITQgUDQfUDQMV2AgUDQeFlEHCFBQIQ6vUDUNJwg0DVCwNB4UIhA0HVcAIDIDqDQdVyAgMgOoEBAWUQcINBNXAQhQNBBQNBNXSSBQNB1QNBRQNAxQNBMhCiNYUDQTIQgjWFA0EyELJFhQNBMhDCRYUDIGNBw0EQg0Cwg1ETUSNRM0E1cAARdBFtE0GzQaFlA0E1A0ERZQgbgCr1AhBzIGNQI1ASlLAVcAf2cnC0sBV39/ZycGSwFX/n9nJwxLAYH9AiEOWGcnDUsBgfwDIQ5YZycOSwGB+wQhDlhnJw9MgfoFIRNYZyg0ARY0AhZQNAUWUGcxGSISRIgYWUL80ogYDzQLVwBANRA0C1dAIDUNNAuBYFs1DDQTV+mBSTUfV4ABFxRENBNXaUA1HjQQVwAgNRw0EFcgIDULNA4yA6hJNSBBFbE0HDQLo4gXJpaIFyI1HTQNNB2mRDEANBkTRDIDKDIDKTQWUIgXGogXDkk1EDQdp0Q0HEmTIQ0ORCEQWzQMCEk1IYgXljQgQRWbNBw0C6OIFt2WiBbZNR00DTQdpkQ0EDQdp0QnBDQYFlADNQgyCng1CSgyCmA0CQk0DAkWNQo0DDQIiBentiKyASEGshA0GLIYJxCyGjEASbIcsho0FkmyHLIaNAuyGjQYsjKzMgpgNAkJNAoXCRa3AT5XBABQNQ2ACAAAAAAAACYYNA1QsDQNSTUgIls1DSI0DRJEJSk0FlA0EDQdoYgWRYgWXyUpMQBQMgMoMgMpMQBQiBZDiBY3NB2giBYoiBZCJwk0FlAxAFA0HVCwgAgAAAAAAAAl7TQdULA0HTUENBNXAAE0E1cBCFA0DzQdoYgV9DQONB2giBXsUFA0E1dJIFA0HlcAIDQcoIgV2TQeVyAgNAugiBXOUFA0E1epQFA0H1A0EyEKI1hQNBMhCCNYUDQTIQskWFA0EyEMJFhQMgY0ETQhCDQMCTQNCDURNRI1E0L9oIgWLDQLVwAgNQ00C1cgQDUMNBNXaUBJNQtXACA1HTQLVyAgNRw0DTQdo4gVZDQOoogVXjUQNA00HKOIFVQ0DqKIFU41CzQMVwAgNBCmRDQMVyAgNAumRDEANBkTRDQWNBkTRDIDKDIDKTEAUIgVNIgVKEk1DDQNp0QxADQWUDUfMgMoMgMnBTQfUAGIFRWIFQlJNR40DadEJSkxAFA0DDQNoYgU7IgVBiUpNBZQMgMoMgMpNBZQiBTqiBTeNA2giBTPiBTpJwkxAFA0FlA0DVCwNB40DaGIFLg1DCEPJwU0H1ABNAyIFMYnETEAUDQWUDQMULAnBDQYFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQayEDQYshgnB7IaMQBJshyyGjQLsho0GLIyszIKYDQJCTQKFwkWtwA+VwQAUDUegAgAAAAAAAAsMTQeULA0Hkk1DCJbNR4iNB4SRDQQNAtQNQyACAAAAAAAACw7NAxQsDQMNQQ0E1cAATQTVwEIUDQPNA2giBQJNA40DaGIFAFQUDQTV0kgUDQdNBChiBPxNBw0C6GIE+lQUDQTV6lAUDQTV+mBUDQTIQojWFA0EyEII1hQNBMhCyRYUDQTIQwkWFAyBjQRNB4INRE1EjUTQvu+iBRKNAtXACA1DTQLVyAgNQw0E1dpQDULNBNX6YE1IjQLVwAgNQ80C1cgIDUONCJXACA1IDQiV0AgNR00DjQMoYgTbDULNAwrNB2giBNho4gTXTQPo4gTVzQLK6OIE1CiiBNMJxKgiBNGNRw0DTQcp0Q0DTQcoYgTNjUhNA80HKOIEyw1HzQcNA6jiBMiNB+iiBMcNAyhiBMWNCAqo4gTDzQdoogTCaOIEwUqoogTADUeNBw0IKOIEvYroogS8TUdMgM0HlA0HTIDUDQdNA6jiBLdNB+iiBLXNB6lTUk1HFcAIDUgNBxXICA1HzQiV4ABFxRENA80DaCIErQ0IaGIEq40IKGIEqg1HjQLNB+hiBKeNR0yAzQhpjIDNAymEEQ0HjQdo4gSiDQPNA6jiBKAp0Q0DUmTIQ0ORCEQW0k1HIgTGTQTV6lANQ8nBDQYFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQayEDQYshgnB7IaMQBJshyyGjQMsho0GLIyszIKYDQJCTQKFwkWtwA+VwQAUDUOgAgAAAAAAAAyczQOULA0Dkk1CyJbNQ4iNA4SRDQhNAxQNQuACAAAAAAAADJ9NAtQsDQLNQQ0HjQdUDUMJwYxADQNMgNQUDQLUDQMUFAyA1A1HScINB1QsDQTVwABNBNXAQhQNBBQNBNXSSBQNAxQNA9XACA0IKCIEaA0D1cgIDQfoIgRlVBQNCJQNBMhCiNYUDQTIQgjWFA0EyELJFhQNBMhDCRYUDIGNBE0HAg0Dgg1ETUSNRNC+XCIEfyIEfk0C1cAIDUNNAtXICA1DDQTV2lANQ80E1fpgTUiNA9XICA1DjQPVwAgNQs0IlcAIDUgNCJXQCA1HTQLNAyhiBEbNQ80DCs0HaCIERCjiBEMNA6jiBEGNA8ro4gQ/6KIEPsnEqCIEPU1HDQNNBynRDQNNByhiBDlNSE0DjQco4gQ2zUfNBw0C6OIENE0H6KIEMs0DKGIEMU0ICqjiBC+NB2iiBC4o4gQtCqiiBCvNR40HDQgo4gQpSuiiBCgNR0yAzQeUDQdMgNQNB00C6OIEIw0H6KIEIY0HqVNSTUcVwAgNSA0HFcgIDUfNCJXgAEXFEQ0DzQfoYgQYzUeNA40DaCIEFk0IaGIEFM0IKGIEE01HTQTV6lANRwyAzQMpjIDNCGmEEQ0HjQdo4gQMDQLNA6jiBAop0Q0GBYjr1AxAFA1CycENBgWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBrIQNBiyGCcQshoxAEmyHLIaNBZJshyyGjQNsho0GLIyszIKYDQJCTQKFwkWtwA+VwQAUDUPgAgAAAAAAAA4pzQPULA0D0k1DiJbNQ8iNA8SRCcENBgWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBrIQNBiyGCcHshoxAEmyHLIaNCGyGjQYsjKzMgpgNAkJNAoXCRa3AD5XBABQNQ6ACAAAAAAAADi3NA5QsDQOSTULIls1DiI0DhJENAw0IVA1C4AIAAAAAAAAOME0C1CwNAs1BDQeNB1QNQwnBjEAMgM0DVBQNAtQNAxQUDIDUDUdJwg0HVCwNBNXAAE0E1cBCFA0EFA0E1dJIFA0DFA0HFcAIDQfoIgO5jQcVyAgNCCgiA7bUFA0IlA0EyEKI1hQNBMhCCNYUDQTIQskWFA0EyEMJFhQMgY0ETQPCDQOCDURNRI1E0L2togPQjQLVwAgNSA0E1dpQDUMNBNX6YE1HzQMVwAgNR40DFcgIDUdNB9XACA1DDQfV0AgNQ00ICs0DaGIDmqjiA5mSTUONB2jiA5dNB4ro4gOVjQOoIgOUKKIDkw1HDQeNCCjiA5CNQ80IDQdo4gOODQPoogOMjQcoYgOLDQMKqOIDiU0DaKIDh+jiA4bKqKIDhY1DjQgNAyjiA4MK6KIDgc1DTIDNA5QNA0yA1A0DTQdo4gN8zQPoogN7TQOpU1JNQxXACA1DzQMVyAgNQ40H1eAARcURDQeNCCgiA3KNA+hiA3ENQ00HTQcoYgNujQOoYgNtDUMNAtXICA0HKZENA00DKOIDaE0HjQdo4gNmadENCBJkyENDkQhEFtJNSGIDjI0E1epQDUeJwQ0GBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEGshA0GLIYJweyGjEASbIcsho0HLIaNBiyMrMyCmA0CQk0ChcJFrcAPlcEAFA1HYAIAAAAAAAAPuI0HVCwNB1JNQsiWzUdIjQdEkQyAzQcUDULgAgAAAAAAAA+7DQLULA0CzUENA00DFA1HCcGMQA0IDIDUFA0C1A0HFBQMgNQNQwnCDQMULA0E1cAATQTVwEIUDQQUDQTV0kgUDQcUDQeVwAgNA+giAy5NB5XICA0DqCIDK5QUDQfUDQTIQojWFA0EyEII1hQNBMhCyRYUDQTIQwkWFAyBjQRNCEINB0INRE1EjUTQvSJiA0ViA0SNAtXACA1ITQTV2lANQw0E1fpgTUgNAxXICA1HzQMVwAgNR40IFcAIDUMNCBXQCA1DTQhKzQNoYgMOqOIDDZJNQ40HqOIDC00HyujiAwmNA6giAwgoogMHDUdNB80IaOIDBI1DzQhNB6jiAwINA+iiAwCNB2hiAv8NAwqo4gL9TQNoogL76OIC+sqoogL5jUONCE0DKOIC9wroogL1zUNMgM0DlA0DTIDUDQNNB6jiAvDNA+iiAu9NA6lTUk1DFcAIDUcNAxXICA1DzQgV4ABFxRENB40HaGIC5o0D6GIC5Q1DjQfNCGgiAuKNByhiAuENQ00E1epQDUMNAtXICA0HaZENA40DaOIC2o0HjQfo4gLYqdENBgWI69QMQBQNQsnBDQYFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQayEDQYshgnELIaMQBJshyyGjQWSbIcsho0IbIaNBiyMrMyCmA0CQk0ChcJFrcAPlcEAFA1H4AIAAAAAAAARRE0H1CwNB9JNR4iWzUfIjQfEkQnBDQYFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQayEDQYshgnB7IaMQBJshyyGjIDsho0GLIyszIKYDQJCTQKFwkWtwA+VwQAUDUegAgAAAAAAABFITQeULA0Hkk1CyJbNR4iNB4SRDQdMgNQNQuACAAAAAAAAEUrNAtQsDQLNQQ0DjQNUDUdJwYxADIDNCFQUDQLUDQdUFAyA1A1DScINA1QsDQTVwABNBNXAQhQNBBQNBNXSSBQNB1QNAxXACA0D6CICiA0DFcgIDQcoIgKFVBQNCBQNBMhCiNYUDQTIQgjWFA0EyELJFhQNBMhDCRYUDIGNBE0Hwg0Hgg1ETUSNRNC8fA0C1cAIDUNNAtXICA1DDEANBkTRDQNNBkTRCEPJwUxADQNUFABNAyICdQnETEAUDQNUDQMULAhBTULgAgAAAAAAABK8zQLFlEHCFCwNAsWUQcINQQyBjUSQvGVNAtXACA0C1cgIFA1DCgyAycFNAxQAYgJf0k1CyJVIQUSRDIDNAuICWYyA6hEIQ8nBTQMUAGICh0hBTULgAgAAAAAAABQoDQLFlEHCFCwNAsWUQcINQQyBjUSQvE4NA1XASBJNQs0GRNEKDIDKTQLUIgJJUk1DCJVIQUSRDIDNAyICQwyA6hEJSk0C1CICcYhBTULgAgAAAAAAABWSzQLFlEHCFCwNAsWUQcINQQyBjUSQvDhgCEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiVSEFEkQlKTQZUIgJcCg1C4AIAAAAAAAAW+w0C1CwNAs1BDIGNRJC8JQ0C1cAIDUNNAtXICA1DDQNNBkTRDIDKDIDKTEAUIgId4gIa0k1DjQMp0QhBTULgAgAAAAAAABhlDQLFlEHCFCwNAsWUQcINQQlKTEAUDQONAyhiAgwiAhKJSk0DVAyAygyAyk0DVCICC6ICCI0DKCICBOICC0nCTEAUDQNUDQMULAyBjUSQvAMNAtXACA1DjQLVyAgNQ00C1dAIDUMNA40GRNENA00GRNEMgMoMgMpNA5QiAfiiAfWSTUQNAynRDQOMQBQNQ8yAygyAycFNA9QAYgHw4gHt0k1CzQMp0QlKTQOUDQQNAyhiAeaiAe0JSk0DVAyAygyAyk0DVCIB5iIB4w0DKCIB32IB5cnCTQOUDQNUDQMULA0CzQMoYgHZjUNIQ8nBTQPUAE0DYgHdCcRNA5QMQBQNA1QsCEFNQuACAAAAAAAAGdcNAsWUQcIULA0CxZRBwg1BDIGNRJC7zU0ASEEDEEGaTQBIQcSRIgHmDIDKDIDJwU0DDQLUFABiAcWiAcKNQRC69ojr4ABBzQMNAtQUCEJr1BQNQtC7GM0ASEEDEEGTDQBIQcSRIgHWTIDKDIDKTQLUIgG3IgG0DUEQuugNAEhBAxBBkQ0ASEHEkSIBzQ0GhY1BELrhyOvJxM0DDQLUFAhCa9QUDULQuwRI6+AAQk0C1CBgQGvUFA1C0Lr/oCqAQAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC60w0ASEEDEEDYzQBIQcSRIgGQjQbVwggSTULNQRC6pA0ASEEDEEDWzQBIQcSRIgGJDQbVygISTULNQRC6nI0ASEEDEEDUzQBIQcSRIgGBicKNQRC6lojr4ABCzQMNAtQUCEJr1BQNQtC6uMjr4ABDDQNNAxQNAtQUCESr1BQNQtC6ssiRELqKCJEQuojIkRC6h4iRELqGTQMIls1DTQMVwhgNQuABG2shJ00DRZQNAtQsDQNiAXzNAtXADBJNRsiW0k1GoGAAg5EJYgFsTQLV0AgNRk0C1cwEEk1HCNbNRgoNRcnBDQcVwAIUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBrIQNBwiW7IYgAStQ8UhshoxGBayGoEJr7IaNBgWshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAABptNAxQsDQMSTULIls1EDQLVwiBSTUPVwAgNQ40D1cgIDUNNA9XQCA1DDQOKqQ0DSqkEEECNDQMNA00DqCIBFOoNQs0CzQMKqQQNAwyA6UQRCI0EBJEMgo1FjQYFiOvUDQWUDUVJwQ0GBZQAzUIMgp4NQkoMgpgNAkJJQkWNQolNAiIBQy2IrIBIQayEDQYshgnB7IaNBZJshyyGjIDsho0GLIyszIKYDQJCTQKFwkWtwE+VwQAUDULgAgAAAAAAAAajTQLULA0C0k1FCJbNQsiNAsSRCUpNBZQJwqIA9ElKTQZUDIDiAPHJwo1FCcJNBlQNBZQNBRQsCENrzUUKTQaFlCAQP//////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQNBtXCCBQNBRQNBRQNA40DVA0DFA0D1dgIFA0D1eAAVBQNBtXKAhQNBgWUCcKUDQZUDIGJTQQCCUJNAsINRE1EjUTQusXiAPPgcCaDIgD9rEisgEhBrIQgAYIMQAyCRKyHicTsh+ztD01BTYaATUMQv2giAOiNhoBNQtC58SIA5c2GgE1C0LoQSIxNBJEIzE1EkQiMTYSRCIxNxJEIjUFiAN1gbIGryIiQurQNhoBNhoCNQs1DEL7bzYaATYaAjULNQxC+4w2GgE1C0L7mUL7uzYaATYaAjULNQxC+8c2GgE1C0L700L74zQBIQQSRIgChzQbVwggSTULNQRC5y00ASEEEkSIAnE0G1coCEk1CzUEQucXNAEhBBJEiAJbJwo1BELnByI1C0L90zQNVwGhNQtC6J80DVcBaDULQuqbNA1XAWA1C0LsdDQNVwFANQtC7kw0DVcBQDULQvCQNA1XAUA1C0LzQDQNVwFANQtC9WM0DVcBQDULQvfyNA1XAUA1C0L4QzQBIQQSRIgB6zQTVwlANBNXaUBQNBNX6YFQNBNXqUBQNBMhCCNYUDUEQuZ7QvhxQvjFNA1XAUA1C0L5CDQNVwFgNQtC+YYiNQtC6Es0HDQOo4gBdTQeVwAgoogBbDUhNAs0DqOIAWI0HlcgIKKIAVlJNRA0IUk0EKRNNR1C6io0HDQOo4gBQjQeVwAgoogBOTUiNAs0DqOIAS80HlcgIKKIASZJNSA0Ikk0IKRNNR1C6kA0E1cJQEk1EFcAIDUPNBBXICA1DjQbNBoWUDQZUDQYFlA0F1A0FlA0FVA0FFA0E1A0ERZQNBBQNA9QNA5QIQQyBkLpAUhMv0iJIrIBIQWyELIHsgiJIrIBIQWyELIHsgiziTQBIQQSRIgA1zIDKDIDJwU0DDQLUFABiACtiAChNQRC5XE0ASEEEkSIALUyAygyAyk0C1CIAJCIAIQ1BELlVDQBIQQSRIgAmDQaFjUEQuVDQvqSQvqtQvrINhoBNhoCNhoDNQs1DDUNQvrjNhoBNhoCNQs1DEL6wUiJTAlJNQYyCYgBJYkJSUH/7kk1BogA0Yk2GgEXNQtC+sw2GgEXNQtC+sg2GgEXNQtC+sQ2GgEXNQtC+sBJFSRMCa9MUIlJVwEATCJVTYm+SRZRBwhFBE1QiUxJvUD/CksDiADQQv8CSVcAMDUbSSEUWzUaSVc4IDUZSYFYWzUYSUgoNRdJV2AgNRZJV4AwNRVJV7BANRRJgfABIRVYNRNJgaoFWzURSYGyBSENWDUQSYHyBSRYNQ+BkgYkWDUOiUlXADA1G0khFFs1GkkhEyEVWDUTgfIDWzURibEisgEhBrIQNAWyGLOJMRY0ACEFCEk1AAlHAjgHMgoSRDgQIQUSRDgIEkSJIQU1A4m8Ik4CTYgAF4lJIhJMNAISEUSJNAY0B0oPQf7aQv7iNAcINQeJsUL+RjQGCDUGibFC/jCxsglC/jY=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `371`,
    1001: `372`,
    1002: `372`,
    1003: `373`,
    1004: `374`,
    1005: `375`,
    1006: `376`,
    1007: `376`,
    1008: `376`,
    1009: `377`,
    101: `2`,
    1010: `377`,
    1011: `378`,
    1012: `378`,
    1013: `379`,
    1014: `379`,
    1015: `380`,
    1016: `381`,
    1017: `381`,
    1018: `381`,
    1019: `382`,
    102: `2`,
    1020: `383`,
    1021: `383`,
    1022: `385`,
    1023: `385`,
    1024: `386`,
    1025: `386`,
    1026: `387`,
    1027: `388`,
    1028: `389`,
    1029: `390`,
    103: `2`,
    1030: `390`,
    1031: `391`,
    1032: `391`,
    1033: `392`,
    1034: `393`,
    1035: `394`,
    1036: `400`,
    1037: `400`,
    1038: `401`,
    1039: `401`,
    104: `2`,
    1040: `401`,
    1041: `402`,
    1042: `403`,
    1043: `403`,
    1044: `404`,
    1045: `404`,
    1046: `405`,
    1047: `405`,
    1048: `405`,
    1049: `406`,
    105: `2`,
    1050: `406`,
    1051: `407`,
    1052: `407`,
    1053: `408`,
    1054: `409`,
    1055: `409`,
    1056: `410`,
    1057: `411`,
    1058: `412`,
    1059: `412`,
    106: `2`,
    1060: `413`,
    1061: `415`,
    1062: `415`,
    1063: `416`,
    1064: `416`,
    1065: `417`,
    1066: `417`,
    1067: `417`,
    1068: `418`,
    1069: `419`,
    107: `2`,
    1070: `419`,
    1071: `420`,
    1072: `420`,
    1073: `420`,
    1074: `421`,
    1075: `421`,
    1076: `422`,
    1077: `422`,
    1078: `423`,
    1079: `423`,
    108: `2`,
    1080: `424`,
    1081: `425`,
    1082: `426`,
    1083: `427`,
    1084: `427`,
    1085: `428`,
    1086: `428`,
    1087: `429`,
    1088: `430`,
    1089: `430`,
    109: `2`,
    1090: `431`,
    1091: `432`,
    1092: `432`,
    1093: `433`,
    1094: `434`,
    1095: `434`,
    1096: `435`,
    1097: `436`,
    1098: `437`,
    1099: `437`,
    11: `2`,
    110: `2`,
    1100: `438`,
    1101: `439`,
    1102: `440`,
    1103: `440`,
    1104: `441`,
    1105: `441`,
    1106: `442`,
    1107: `442`,
    1108: `443`,
    1109: `443`,
    111: `2`,
    1110: `445`,
    1111: `445`,
    1112: `446`,
    1113: `446`,
    1114: `447`,
    1115: `447`,
    1116: `448`,
    1117: `448`,
    1118: `450`,
    1119: `451`,
    112: `2`,
    1120: `451`,
    1121: `452`,
    1122: `452`,
    1123: `453`,
    1124: `453`,
    1125: `454`,
    1126: `454`,
    1127: `457`,
    1128: `457`,
    1129: `458`,
    113: `2`,
    1130: `458`,
    1131: `459`,
    1132: `464`,
    1133: `464`,
    1134: `465`,
    1135: `466`,
    1136: `466`,
    1137: `467`,
    1138: `468`,
    1139: `468`,
    114: `2`,
    1140: `469`,
    1141: `470`,
    1142: `471`,
    1143: `472`,
    1144: `472`,
    1145: `472`,
    1146: `473`,
    1147: `473`,
    1148: `473`,
    1149: `474`,
    115: `2`,
    1150: `475`,
    1151: `475`,
    1152: `476`,
    1153: `476`,
    1154: `476`,
    1155: `476`,
    1156: `476`,
    1157: `476`,
    1158: `476`,
    1159: `476`,
    116: `2`,
    1160: `476`,
    1161: `476`,
    1162: `477`,
    1163: `477`,
    1164: `478`,
    1165: `479`,
    1166: `480`,
    1167: `480`,
    1168: `481`,
    1169: `482`,
    117: `2`,
    1170: `482`,
    1171: `483`,
    1172: `484`,
    1173: `485`,
    1174: `485`,
    1175: `486`,
    1176: `487`,
    1177: `487`,
    1178: `488`,
    1179: `489`,
    118: `2`,
    1180: `494`,
    1181: `494`,
    1182: `495`,
    1183: `495`,
    1184: `495`,
    1185: `496`,
    1186: `496`,
    1187: `497`,
    1188: `498`,
    1189: `498`,
    119: `2`,
    1190: `499`,
    1191: `500`,
    1192: `501`,
    1193: `501`,
    1194: `502`,
    1195: `502`,
    1196: `502`,
    1197: `502`,
    1198: `502`,
    1199: `502`,
    12: `2`,
    120: `2`,
    1200: `502`,
    1201: `502`,
    1202: `502`,
    1203: `502`,
    1204: `503`,
    1205: `503`,
    1206: `504`,
    1207: `505`,
    1208: `506`,
    1209: `506`,
    121: `2`,
    1210: `507`,
    1211: `507`,
    1212: `508`,
    1213: `508`,
    1214: `509`,
    1215: `509`,
    1216: `510`,
    1217: `510`,
    1218: `511`,
    1219: `512`,
    122: `2`,
    1220: `512`,
    1221: `513`,
    1222: `514`,
    1223: `514`,
    1224: `515`,
    1225: `515`,
    1226: `515`,
    1227: `516`,
    1228: `517`,
    1229: `517`,
    123: `2`,
    1230: `518`,
    1231: `519`,
    1232: `519`,
    1233: `519`,
    1234: `520`,
    1235: `521`,
    1236: `522`,
    1237: `522`,
    1238: `523`,
    1239: `524`,
    124: `2`,
    1240: `525`,
    1241: `525`,
    1242: `526`,
    1243: `526`,
    1244: `527`,
    1245: `527`,
    1246: `528`,
    1247: `529`,
    1248: `531`,
    1249: `531`,
    125: `2`,
    1250: `532`,
    1251: `533`,
    1252: `534`,
    1253: `535`,
    1254: `535`,
    1255: `536`,
    1256: `536`,
    1257: `536`,
    1258: `537`,
    1259: `537`,
    126: `2`,
    1260: `538`,
    1261: `539`,
    1262: `539`,
    1263: `540`,
    1264: `540`,
    1265: `540`,
    1266: `541`,
    1267: `541`,
    1268: `542`,
    1269: `543`,
    127: `2`,
    1270: `544`,
    1271: `545`,
    1272: `546`,
    1273: `546`,
    1274: `546`,
    1275: `547`,
    1276: `547`,
    1277: `548`,
    1278: `548`,
    1279: `548`,
    128: `2`,
    1280: `549`,
    1281: `550`,
    1282: `550`,
    1283: `551`,
    1284: `552`,
    1285: `552`,
    1286: `553`,
    1287: `553`,
    1288: `553`,
    1289: `554`,
    129: `2`,
    1290: `555`,
    1291: `555`,
    1292: `556`,
    1293: `557`,
    1294: `557`,
    1295: `558`,
    1296: `559`,
    1297: `559`,
    1298: `560`,
    1299: `561`,
    13: `2`,
    130: `2`,
    1300: `561`,
    1301: `562`,
    1302: `562`,
    1303: `563`,
    1304: `564`,
    1305: `565`,
    1306: `566`,
    1307: `566`,
    1308: `567`,
    1309: `567`,
    131: `2`,
    1310: `568`,
    1311: `569`,
    1312: `570`,
    1313: `571`,
    1314: `571`,
    1315: `572`,
    1316: `572`,
    1317: `573`,
    1318: `574`,
    1319: `575`,
    132: `2`,
    1320: `576`,
    1321: `576`,
    1322: `577`,
    1323: `577`,
    1324: `578`,
    1325: `579`,
    1326: `580`,
    1327: `581`,
    1328: `581`,
    1329: `582`,
    133: `2`,
    1330: `582`,
    1331: `583`,
    1332: `583`,
    1333: `584`,
    1334: `585`,
    1335: `585`,
    1336: `586`,
    1337: `587`,
    1338: `587`,
    1339: `588`,
    134: `2`,
    1340: `588`,
    1341: `589`,
    1342: `589`,
    1343: `592`,
    1344: `592`,
    1345: `593`,
    1346: `593`,
    1347: `593`,
    1348: `594`,
    1349: `595`,
    135: `2`,
    1350: `595`,
    1351: `595`,
    1352: `597`,
    1353: `597`,
    1354: `598`,
    1355: `598`,
    1356: `599`,
    1357: `600`,
    1358: `601`,
    1359: `601`,
    136: `2`,
    1360: `602`,
    1361: `603`,
    1362: `603`,
    1363: `604`,
    1364: `605`,
    1365: `606`,
    1366: `606`,
    1367: `606`,
    1368: `607`,
    1369: `608`,
    137: `2`,
    1370: `609`,
    1371: `609`,
    1372: `610`,
    1373: `610`,
    1374: `612`,
    1375: `612`,
    1376: `613`,
    1377: `613`,
    1378: `614`,
    1379: `615`,
    138: `2`,
    1380: `615`,
    1381: `616`,
    1382: `616`,
    1383: `616`,
    1384: `617`,
    1385: `618`,
    1386: `618`,
    1387: `619`,
    1388: `619`,
    1389: `620`,
    139: `2`,
    1390: `620`,
    1391: `620`,
    1392: `621`,
    1393: `622`,
    1394: `622`,
    1395: `623`,
    1396: `623`,
    1397: `624`,
    1398: `624`,
    1399: `624`,
    14: `2`,
    140: `2`,
    1400: `625`,
    1401: `626`,
    1402: `626`,
    1403: `627`,
    1404: `627`,
    1405: `628`,
    1406: `628`,
    1407: `628`,
    1408: `629`,
    1409: `629`,
    141: `2`,
    1410: `630`,
    1411: `631`,
    1412: `632`,
    1413: `632`,
    1414: `633`,
    1415: `633`,
    1416: `634`,
    1417: `634`,
    1418: `634`,
    1419: `635`,
    142: `2`,
    1420: `635`,
    1421: `636`,
    1422: `637`,
    1423: `638`,
    1424: `638`,
    1425: `639`,
    1426: `639`,
    1427: `640`,
    1428: `640`,
    1429: `640`,
    143: `2`,
    1430: `641`,
    1431: `641`,
    1432: `642`,
    1433: `643`,
    1434: `644`,
    1435: `644`,
    1436: `645`,
    1437: `646`,
    1438: `646`,
    1439: `646`,
    144: `2`,
    1440: `647`,
    1441: `647`,
    1442: `648`,
    1443: `649`,
    1444: `650`,
    1445: `651`,
    1446: `651`,
    1447: `652`,
    1448: `653`,
    1449: `653`,
    145: `2`,
    1450: `654`,
    1451: `655`,
    1452: `656`,
    1453: `656`,
    1454: `657`,
    1455: `658`,
    1456: `659`,
    1457: `660`,
    1458: `660`,
    1459: `661`,
    146: `2`,
    1460: `662`,
    1461: `663`,
    1462: `665`,
    1463: `665`,
    1464: `665`,
    1465: `666`,
    1466: `666`,
    1467: `666`,
    1468: `669`,
    1469: `669`,
    147: `2`,
    1470: `669`,
    1471: `671`,
    1472: `671`,
    1473: `672`,
    1474: `672`,
    1475: `672`,
    1476: `673`,
    1477: `673`,
    1478: `674`,
    1479: `674`,
    148: `2`,
    1480: `675`,
    1481: `675`,
    1482: `675`,
    1483: `676`,
    1484: `676`,
    1485: `677`,
    1486: `677`,
    1487: `678`,
    1488: `678`,
    1489: `679`,
    149: `2`,
    1490: `680`,
    1491: `680`,
    1492: `681`,
    1493: `681`,
    1494: `682`,
    1495: `682`,
    1496: `682`,
    1497: `683`,
    1498: `684`,
    1499: `684`,
    15: `2`,
    150: `2`,
    1500: `685`,
    1501: `685`,
    1502: `685`,
    1503: `686`,
    1504: `687`,
    1505: `688`,
    1506: `695`,
    1507: `695`,
    1508: `696`,
    1509: `696`,
    151: `2`,
    1510: `696`,
    1511: `697`,
    1512: `697`,
    1513: `698`,
    1514: `698`,
    1515: `699`,
    1516: `699`,
    1517: `699`,
    1518: `700`,
    1519: `700`,
    152: `2`,
    1520: `701`,
    1521: `701`,
    1522: `702`,
    1523: `702`,
    1524: `702`,
    1525: `703`,
    1526: `703`,
    1527: `704`,
    1528: `704`,
    1529: `705`,
    153: `2`,
    1530: `705`,
    1531: `706`,
    1532: `707`,
    1533: `708`,
    1534: `708`,
    1535: `709`,
    1536: `709`,
    1537: `709`,
    1538: `710`,
    1539: `710`,
    154: `2`,
    1540: `711`,
    1541: `711`,
    1542: `712`,
    1543: `713`,
    1544: `713`,
    1545: `713`,
    1546: `714`,
    1547: `715`,
    1548: `715`,
    1549: `715`,
    155: `2`,
    1550: `716`,
    1551: `716`,
    1552: `718`,
    1553: `718`,
    1554: `719`,
    1555: `719`,
    1556: `720`,
    1557: `721`,
    1558: `728`,
    1559: `728`,
    156: `2`,
    1560: `729`,
    1561: `729`,
    1562: `730`,
    1563: `731`,
    1564: `739`,
    1565: `739`,
    1566: `741`,
    1567: `742`,
    1568: `742`,
    1569: `743`,
    157: `2`,
    1570: `744`,
    1571: `744`,
    1572: `745`,
    1573: `746`,
    1574: `746`,
    1575: `746`,
    1576: `747`,
    1577: `747`,
    1578: `747`,
    1579: `748`,
    158: `2`,
    1580: `749`,
    1581: `749`,
    1582: `750`,
    1583: `750`,
    1584: `751`,
    1585: `752`,
    1586: `760`,
    1587: `760`,
    1588: `762`,
    1589: `763`,
    159: `2`,
    1590: `764`,
    1591: `764`,
    1592: `765`,
    1593: `766`,
    1594: `767`,
    1595: `767`,
    1596: `768`,
    1597: `769`,
    1598: `769`,
    1599: `770`,
    16: `2`,
    160: `2`,
    1600: `771`,
    1601: `772`,
    1602: `772`,
    1603: `773`,
    1604: `773`,
    1605: `773`,
    1606: `776`,
    1607: `776`,
    1608: `777`,
    1609: `777`,
    161: `2`,
    1610: `777`,
    1611: `778`,
    1612: `778`,
    1613: `779`,
    1614: `779`,
    1615: `780`,
    1616: `781`,
    1617: `781`,
    1618: `781`,
    1619: `782`,
    162: `2`,
    1620: `783`,
    1621: `783`,
    1622: `783`,
    1623: `784`,
    1624: `784`,
    1625: `786`,
    1626: `786`,
    1627: `787`,
    1628: `787`,
    1629: `788`,
    163: `2`,
    1630: `789`,
    1631: `794`,
    1632: `794`,
    1633: `795`,
    1634: `795`,
    1635: `796`,
    1636: `797`,
    1637: `803`,
    1638: `803`,
    1639: `804`,
    164: `2`,
    1640: `804`,
    1641: `805`,
    1642: `806`,
    1643: `807`,
    1644: `808`,
    1645: `808`,
    1646: `809`,
    1647: `809`,
    1648: `810`,
    1649: `811`,
    165: `2`,
    1650: `811`,
    1651: `812`,
    1652: `813`,
    1653: `813`,
    1654: `814`,
    1655: `815`,
    1656: `815`,
    1657: `816`,
    1658: `817`,
    1659: `817`,
    166: `2`,
    1660: `818`,
    1661: `819`,
    1662: `820`,
    1663: `820`,
    1664: `821`,
    1665: `821`,
    1666: `822`,
    1667: `822`,
    1668: `823`,
    1669: `823`,
    167: `2`,
    1670: `823`,
    1671: `824`,
    1672: `825`,
    1673: `826`,
    1674: `826`,
    1675: `827`,
    1676: `827`,
    1677: `828`,
    1678: `828`,
    1679: `829`,
    168: `2`,
    1680: `829`,
    1681: `831`,
    1682: `831`,
    1683: `832`,
    1684: `832`,
    1685: `833`,
    1686: `833`,
    1687: `834`,
    1688: `834`,
    1689: `835`,
    169: `2`,
    1690: `836`,
    1691: `836`,
    1692: `837`,
    1693: `837`,
    1694: `838`,
    1695: `838`,
    1696: `840`,
    1697: `841`,
    1698: `841`,
    1699: `842`,
    17: `2`,
    170: `2`,
    1700: `842`,
    1701: `843`,
    1702: `843`,
    1703: `844`,
    1704: `844`,
    1705: `848`,
    1706: `848`,
    1707: `849`,
    1708: `849`,
    1709: `850`,
    171: `2`,
    1710: `855`,
    1711: `855`,
    1712: `856`,
    1713: `857`,
    1714: `857`,
    1715: `858`,
    1716: `859`,
    1717: `859`,
    1718: `860`,
    1719: `861`,
    172: `2`,
    1720: `862`,
    1721: `863`,
    1722: `863`,
    1723: `863`,
    1724: `864`,
    1725: `864`,
    1726: `864`,
    1727: `865`,
    1728: `866`,
    1729: `866`,
    173: `2`,
    1730: `867`,
    1731: `867`,
    1732: `867`,
    1733: `867`,
    1734: `867`,
    1735: `867`,
    1736: `867`,
    1737: `867`,
    1738: `867`,
    1739: `867`,
    174: `2`,
    1740: `868`,
    1741: `868`,
    1742: `869`,
    1743: `870`,
    1744: `871`,
    1745: `871`,
    1746: `872`,
    1747: `873`,
    1748: `873`,
    1749: `874`,
    175: `2`,
    1750: `875`,
    1751: `876`,
    1752: `876`,
    1753: `877`,
    1754: `878`,
    1755: `878`,
    1756: `879`,
    1757: `880`,
    1758: `885`,
    1759: `886`,
    176: `2`,
    1760: `887`,
    1761: `887`,
    1762: `888`,
    1763: `889`,
    1764: `889`,
    1765: `890`,
    1766: `890`,
    1767: `891`,
    1768: `892`,
    1769: `892`,
    177: `2`,
    1770: `892`,
    1771: `893`,
    1772: `893`,
    1773: `893`,
    1774: `895`,
    1775: `896`,
    1776: `897`,
    1777: `897`,
    1778: `898`,
    1779: `899`,
    178: `2`,
    1780: `899`,
    1781: `900`,
    1782: `901`,
    1783: `901`,
    1784: `902`,
    1785: `903`,
    1786: `903`,
    1787: `904`,
    1788: `905`,
    1789: `905`,
    179: `2`,
    1790: `905`,
    1791: `906`,
    1792: `906`,
    1793: `906`,
    1794: `907`,
    1795: `907`,
    1796: `908`,
    1797: `909`,
    1798: `909`,
    1799: `909`,
    18: `2`,
    180: `2`,
    1800: `910`,
    1801: `910`,
    1802: `910`,
    1803: `911`,
    1804: `911`,
    1805: `912`,
    1806: `912`,
    1807: `913`,
    1808: `914`,
    1809: `914`,
    181: `2`,
    1810: `915`,
    1811: `916`,
    1812: `916`,
    1813: `917`,
    1814: `918`,
    1815: `920`,
    1816: `920`,
    1817: `920`,
    1818: `920`,
    1819: `920`,
    182: `2`,
    1820: `920`,
    1821: `920`,
    1822: `920`,
    1823: `920`,
    1824: `920`,
    1825: `921`,
    1826: `921`,
    1827: `922`,
    1828: `923`,
    1829: `924`,
    183: `2`,
    1830: `924`,
    1831: `925`,
    1832: `925`,
    1833: `926`,
    1834: `926`,
    1835: `927`,
    1836: `927`,
    1837: `927`,
    1838: `928`,
    1839: `928`,
    184: `2`,
    1840: `929`,
    1841: `929`,
    1842: `929`,
    1843: `930`,
    1844: `931`,
    1845: `931`,
    1846: `932`,
    1847: `932`,
    1848: `933`,
    1849: `934`,
    185: `2`,
    1850: `934`,
    1851: `934`,
    1852: `935`,
    1853: `935`,
    1854: `936`,
    1855: `936`,
    1856: `937`,
    1857: `938`,
    1858: `938`,
    1859: `938`,
    186: `2`,
    1860: `939`,
    1861: `940`,
    1862: `941`,
    1863: `941`,
    1864: `942`,
    1865: `942`,
    1866: `942`,
    1867: `943`,
    1868: `944`,
    1869: `944`,
    187: `2`,
    1870: `945`,
    1871: `945`,
    1872: `945`,
    1873: `946`,
    1874: `946`,
    1875: `947`,
    1876: `948`,
    1877: `948`,
    1878: `948`,
    1879: `949`,
    188: `2`,
    1880: `949`,
    1881: `950`,
    1882: `950`,
    1883: `950`,
    1884: `951`,
    1885: `951`,
    1886: `952`,
    1887: `953`,
    1888: `953`,
    1889: `953`,
    189: `2`,
    1890: `954`,
    1891: `955`,
    1892: `956`,
    1893: `956`,
    1894: `957`,
    1895: `957`,
    1896: `957`,
    1897: `958`,
    1898: `959`,
    1899: `959`,
    19: `2`,
    190: `2`,
    1900: `960`,
    1901: `961`,
    1902: `961`,
    1903: `962`,
    1904: `962`,
    1905: `963`,
    1906: `964`,
    1907: `965`,
    1908: `966`,
    1909: `966`,
    191: `2`,
    1910: `967`,
    1911: `967`,
    1912: `968`,
    1913: `969`,
    1914: `970`,
    1915: `971`,
    1916: `971`,
    1917: `972`,
    1918: `972`,
    1919: `973`,
    192: `2`,
    1920: `974`,
    1921: `975`,
    1922: `976`,
    1923: `976`,
    1924: `977`,
    1925: `977`,
    1926: `978`,
    1927: `979`,
    1928: `980`,
    1929: `981`,
    193: `2`,
    1930: `981`,
    1931: `982`,
    1932: `982`,
    1933: `983`,
    1934: `983`,
    1935: `984`,
    1936: `985`,
    1937: `985`,
    1938: `986`,
    1939: `987`,
    194: `2`,
    1940: `987`,
    1941: `988`,
    1942: `989`,
    1943: `989`,
    1944: `990`,
    1945: `990`,
    1946: `991`,
    1947: `991`,
    1948: `992`,
    1949: `992`,
    195: `2`,
    1950: `992`,
    1951: `995`,
    1952: `995`,
    1953: `995`,
    1954: `997`,
    1955: `997`,
    1956: `998`,
    1957: `998`,
    1958: `998`,
    1959: `999`,
    196: `2`,
    1960: `999`,
    1961: `1000`,
    1962: `1000`,
    1963: `1001`,
    1964: `1001`,
    1965: `1001`,
    1966: `1002`,
    1967: `1002`,
    1968: `1003`,
    1969: `1003`,
    197: `2`,
    1970: `1004`,
    1971: `1004`,
    1972: `1004`,
    1973: `1005`,
    1974: `1006`,
    1975: `1006`,
    1976: `1007`,
    1977: `1007`,
    1978: `1007`,
    1979: `1008`,
    198: `2`,
    1980: `1008`,
    1981: `1009`,
    1982: `1009`,
    1983: `1010`,
    1984: `1010`,
    1985: `1010`,
    1986: `1011`,
    1987: `1011`,
    1988: `1012`,
    1989: `1012`,
    199: `2`,
    1990: `1013`,
    1991: `1013`,
    1992: `1014`,
    1993: `1015`,
    1994: `1015`,
    1995: `1015`,
    1996: `1016`,
    1997: `1016`,
    1998: `1017`,
    1999: `1018`,
    2: `2`,
    20: `2`,
    200: `2`,
    2000: `1018`,
    2001: `1018`,
    2002: `1019`,
    2003: `1019`,
    2004: `1020`,
    2005: `1020`,
    2006: `1021`,
    2007: `1021`,
    2008: `1022`,
    2009: `1023`,
    201: `2`,
    2010: `1023`,
    2011: `1023`,
    2012: `1024`,
    2013: `1024`,
    2014: `1025`,
    2015: `1026`,
    2016: `1026`,
    2017: `1026`,
    2018: `1027`,
    2019: `1027`,
    202: `2`,
    2020: `1028`,
    2021: `1028`,
    2022: `1029`,
    2023: `1029`,
    2024: `1029`,
    2025: `1030`,
    2026: `1030`,
    2027: `1031`,
    2028: `1032`,
    2029: `1037`,
    203: `2`,
    2030: `1037`,
    2031: `1038`,
    2032: `1038`,
    2033: `1038`,
    2034: `1039`,
    2035: `1039`,
    2036: `1040`,
    2037: `1041`,
    2038: `1046`,
    2039: `1046`,
    204: `2`,
    2040: `1047`,
    2041: `1047`,
    2042: `1048`,
    2043: `1049`,
    2044: `1055`,
    2045: `1055`,
    2046: `1056`,
    2047: `1056`,
    2048: `1057`,
    2049: `1058`,
    205: `2`,
    2050: `1064`,
    2051: `1064`,
    2052: `1066`,
    2053: `1067`,
    2054: `1067`,
    2055: `1068`,
    2056: `1069`,
    2057: `1069`,
    2058: `1070`,
    2059: `1071`,
    206: `2`,
    2060: `1071`,
    2061: `1071`,
    2062: `1072`,
    2063: `1072`,
    2064: `1072`,
    2065: `1073`,
    2066: `1074`,
    2067: `1074`,
    2068: `1075`,
    2069: `1075`,
    207: `2`,
    2070: `1076`,
    2071: `1077`,
    2072: `1083`,
    2073: `1083`,
    2074: `1084`,
    2075: `1084`,
    2076: `1085`,
    2077: `1086`,
    2078: `1086`,
    2079: `1087`,
    208: `2`,
    2080: `1087`,
    2081: `1089`,
    2082: `1090`,
    2083: `1090`,
    2084: `1091`,
    2085: `1091`,
    2086: `1092`,
    2087: `1092`,
    2088: `1093`,
    2089: `1094`,
    209: `2`,
    2090: `1095`,
    2091: `1095`,
    2092: `1095`,
    2093: `1096`,
    2094: `1096`,
    2095: `1096`,
    2096: `1097`,
    2097: `1098`,
    2098: `1098`,
    2099: `1099`,
    21: `2`,
    210: `2`,
    2100: `1099`,
    2101: `1100`,
    2102: `1101`,
    2103: `1107`,
    2104: `1108`,
    2105: `1109`,
    2106: `1109`,
    2107: `1110`,
    2108: `1111`,
    2109: `1111`,
    211: `2`,
    2110: `1112`,
    2111: `1112`,
    2112: `1113`,
    2113: `1114`,
    2114: `1114`,
    2115: `1114`,
    2116: `1115`,
    2117: `1115`,
    2118: `1115`,
    2119: `1117`,
    212: `2`,
    2120: `1118`,
    2121: `1119`,
    2122: `1119`,
    2123: `1120`,
    2124: `1121`,
    2125: `1121`,
    2126: `1122`,
    2127: `1123`,
    2128: `1123`,
    2129: `1124`,
    213: `2`,
    2130: `1125`,
    2131: `1125`,
    2132: `1126`,
    2133: `1127`,
    2134: `1127`,
    2135: `1127`,
    2136: `1128`,
    2137: `1128`,
    2138: `1128`,
    2139: `1129`,
    214: `2`,
    2140: `1129`,
    2141: `1130`,
    2142: `1131`,
    2143: `1131`,
    2144: `1131`,
    2145: `1132`,
    2146: `1132`,
    2147: `1132`,
    2148: `1133`,
    2149: `1133`,
    215: `2`,
    2150: `1134`,
    2151: `1134`,
    2152: `1135`,
    2153: `1136`,
    2154: `1136`,
    2155: `1137`,
    2156: `1138`,
    2157: `1138`,
    2158: `1139`,
    2159: `1140`,
    216: `2`,
    2160: `1142`,
    2161: `1142`,
    2162: `1143`,
    2163: `1143`,
    2164: `1144`,
    2165: `1145`,
    2166: `1145`,
    2167: `1145`,
    2168: `1146`,
    2169: `1146`,
    217: `2`,
    2170: `1147`,
    2171: `1147`,
    2172: `1148`,
    2173: `1148`,
    2174: `1149`,
    2175: `1149`,
    2176: `1150`,
    2177: `1151`,
    2178: `1152`,
    2179: `1152`,
    218: `2`,
    2180: `1153`,
    2181: `1153`,
    2182: `1153`,
    2183: `1154`,
    2184: `1154`,
    2185: `1155`,
    2186: `1155`,
    2187: `1156`,
    2188: `1157`,
    2189: `1157`,
    219: `2`,
    2190: `1158`,
    2191: `1159`,
    2192: `1159`,
    2193: `1160`,
    2194: `1161`,
    2195: `1163`,
    2196: `1163`,
    2197: `1164`,
    2198: `1164`,
    2199: `1165`,
    22: `2`,
    220: `2`,
    2200: `1166`,
    2201: `1167`,
    2202: `1168`,
    2203: `1168`,
    2204: `1169`,
    2205: `1169`,
    2206: `1170`,
    2207: `1171`,
    2208: `1171`,
    2209: `1172`,
    221: `2`,
    2210: `1173`,
    2211: `1173`,
    2212: `1174`,
    2213: `1175`,
    2214: `1175`,
    2215: `1176`,
    2216: `1177`,
    2217: `1178`,
    2218: `1178`,
    2219: `1179`,
    222: `2`,
    2220: `1180`,
    2221: `1181`,
    2222: `1181`,
    2223: `1182`,
    2224: `1182`,
    2225: `1183`,
    2226: `1183`,
    2227: `1184`,
    2228: `1184`,
    2229: `1186`,
    223: `2`,
    2230: `1186`,
    2231: `1187`,
    2232: `1187`,
    2233: `1188`,
    2234: `1188`,
    2235: `1189`,
    2236: `1189`,
    2237: `1190`,
    2238: `1191`,
    2239: `1191`,
    224: `2`,
    2240: `1192`,
    2241: `1192`,
    2242: `1193`,
    2243: `1193`,
    2244: `1194`,
    2245: `1194`,
    2246: `1197`,
    2247: `1197`,
    2248: `1198`,
    2249: `1198`,
    225: `4`,
    2250: `1199`,
    2251: `1204`,
    2252: `1204`,
    2253: `1205`,
    2254: `1206`,
    2255: `1206`,
    2256: `1207`,
    2257: `1208`,
    2258: `1208`,
    2259: `1209`,
    226: `4`,
    2260: `1210`,
    2261: `1211`,
    2262: `1212`,
    2263: `1212`,
    2264: `1212`,
    2265: `1213`,
    2266: `1213`,
    2267: `1213`,
    2268: `1214`,
    2269: `1215`,
    227: `5`,
    2270: `1215`,
    2271: `1216`,
    2272: `1216`,
    2273: `1216`,
    2274: `1216`,
    2275: `1216`,
    2276: `1216`,
    2277: `1216`,
    2278: `1216`,
    2279: `1216`,
    228: `5`,
    2280: `1216`,
    2281: `1217`,
    2282: `1217`,
    2283: `1218`,
    2284: `1219`,
    2285: `1220`,
    2286: `1220`,
    2287: `1221`,
    2288: `1222`,
    2289: `1222`,
    229: `5`,
    2290: `1223`,
    2291: `1224`,
    2292: `1225`,
    2293: `1225`,
    2294: `1226`,
    2295: `1227`,
    2296: `1227`,
    2297: `1228`,
    2298: `1229`,
    2299: `1234`,
    23: `2`,
    230: `6`,
    2300: `1234`,
    2301: `1235`,
    2302: `1235`,
    2303: `1236`,
    2304: `1237`,
    2305: `1237`,
    2306: `1238`,
    2307: `1238`,
    2308: `1238`,
    2309: `1238`,
    231: `7`,
    2310: `1238`,
    2311: `1238`,
    2312: `1238`,
    2313: `1238`,
    2314: `1238`,
    2315: `1238`,
    2316: `1239`,
    2317: `1239`,
    2318: `1240`,
    2319: `1241`,
    232: `8`,
    2320: `1242`,
    2321: `1242`,
    2322: `1243`,
    2323: `1243`,
    2324: `1244`,
    2325: `1244`,
    2326: `1245`,
    2327: `1245`,
    2328: `1245`,
    2329: `1246`,
    233: `9`,
    2330: `1246`,
    2331: `1247`,
    2332: `1247`,
    2333: `1247`,
    2334: `1248`,
    2335: `1249`,
    2336: `1249`,
    2337: `1250`,
    2338: `1250`,
    2339: `1251`,
    234: `10`,
    2340: `1252`,
    2341: `1252`,
    2342: `1252`,
    2343: `1253`,
    2344: `1253`,
    2345: `1254`,
    2346: `1254`,
    2347: `1255`,
    2348: `1256`,
    2349: `1256`,
    235: `11`,
    2350: `1256`,
    2351: `1257`,
    2352: `1258`,
    2353: `1259`,
    2354: `1259`,
    2355: `1260`,
    2356: `1260`,
    2357: `1260`,
    2358: `1261`,
    2359: `1262`,
    236: `11`,
    2360: `1262`,
    2361: `1263`,
    2362: `1263`,
    2363: `1264`,
    2364: `1265`,
    2365: `1265`,
    2366: `1265`,
    2367: `1266`,
    2368: `1266`,
    2369: `1267`,
    237: `12`,
    2370: `1267`,
    2371: `1268`,
    2372: `1269`,
    2373: `1269`,
    2374: `1269`,
    2375: `1270`,
    2376: `1271`,
    2377: `1272`,
    2378: `1272`,
    2379: `1273`,
    238: `13`,
    2380: `1273`,
    2381: `1273`,
    2382: `1274`,
    2383: `1275`,
    2384: `1275`,
    2385: `1276`,
    2386: `1276`,
    2387: `1276`,
    2388: `1277`,
    2389: `1278`,
    239: `14`,
    2390: `1278`,
    2391: `1279`,
    2392: `1279`,
    2393: `1280`,
    2394: `1281`,
    2395: `1282`,
    2396: `1283`,
    2397: `1283`,
    2398: `1284`,
    2399: `1284`,
    24: `2`,
    240: `15`,
    2400: `1285`,
    2401: `1286`,
    2402: `1287`,
    2403: `1288`,
    2404: `1288`,
    2405: `1289`,
    2406: `1289`,
    2407: `1290`,
    2408: `1291`,
    2409: `1292`,
    241: `15`,
    2410: `1293`,
    2411: `1293`,
    2412: `1294`,
    2413: `1294`,
    2414: `1295`,
    2415: `1296`,
    2416: `1297`,
    2417: `1298`,
    2418: `1298`,
    2419: `1299`,
    242: `16`,
    2420: `1299`,
    2421: `1300`,
    2422: `1300`,
    2423: `1301`,
    2424: `1302`,
    2425: `1302`,
    2426: `1303`,
    2427: `1303`,
    2428: `1304`,
    2429: `1304`,
    243: `16`,
    2430: `1305`,
    2431: `1305`,
    2432: `1305`,
    2433: `1308`,
    2434: `1308`,
    2435: `1308`,
    2436: `1310`,
    2437: `1310`,
    2438: `1311`,
    2439: `1311`,
    244: `17`,
    2440: `1311`,
    2441: `1312`,
    2442: `1312`,
    2443: `1313`,
    2444: `1313`,
    2445: `1314`,
    2446: `1314`,
    2447: `1314`,
    2448: `1315`,
    2449: `1315`,
    245: `18`,
    2450: `1316`,
    2451: `1316`,
    2452: `1317`,
    2453: `1317`,
    2454: `1317`,
    2455: `1318`,
    2456: `1318`,
    2457: `1319`,
    2458: `1319`,
    2459: `1320`,
    246: `18`,
    2460: `1320`,
    2461: `1320`,
    2462: `1321`,
    2463: `1321`,
    2464: `1322`,
    2465: `1322`,
    2466: `1323`,
    2467: `1323`,
    2468: `1323`,
    2469: `1324`,
    247: `19`,
    2470: `1324`,
    2471: `1325`,
    2472: `1325`,
    2473: `1326`,
    2474: `1326`,
    2475: `1326`,
    2476: `1327`,
    2477: `1327`,
    2478: `1328`,
    2479: `1328`,
    248: `20`,
    2480: `1329`,
    2481: `1329`,
    2482: `1329`,
    2483: `1330`,
    2484: `1330`,
    2485: `1331`,
    2486: `1331`,
    2487: `1332`,
    2488: `1332`,
    2489: `1332`,
    249: `21`,
    2490: `1333`,
    2491: `1333`,
    2492: `1334`,
    2493: `1334`,
    2494: `1335`,
    2495: `1335`,
    2496: `1336`,
    2497: `1337`,
    2498: `1337`,
    2499: `1337`,
    25: `2`,
    250: `21`,
    2500: `1338`,
    2501: `1338`,
    2502: `1339`,
    2503: `1339`,
    2504: `1340`,
    2505: `1341`,
    2506: `1341`,
    2507: `1342`,
    2508: `1343`,
    2509: `1343`,
    251: `22`,
    2510: `1343`,
    2511: `1344`,
    2512: `1345`,
    2513: `1345`,
    2514: `1345`,
    2515: `1346`,
    2516: `1346`,
    2517: `1347`,
    2518: `1348`,
    2519: `1348`,
    252: `23`,
    2520: `1348`,
    2521: `1349`,
    2522: `1349`,
    2523: `1350`,
    2524: `1351`,
    2525: `1352`,
    2526: `1352`,
    2527: `1352`,
    2528: `1353`,
    2529: `1354`,
    253: `24`,
    2530: `1354`,
    2531: `1354`,
    2532: `1355`,
    2533: `1355`,
    2534: `1356`,
    2535: `1357`,
    2536: `1357`,
    2537: `1357`,
    2538: `1358`,
    2539: `1358`,
    254: `24`,
    2540: `1359`,
    2541: `1359`,
    2542: `1360`,
    2543: `1360`,
    2544: `1361`,
    2545: `1362`,
    2546: `1375`,
    2547: `1375`,
    2548: `1376`,
    2549: `1376`,
    255: `25`,
    2550: `1377`,
    2551: `1378`,
    2552: `1378`,
    2553: `1378`,
    2554: `1379`,
    2555: `1379`,
    2556: `1380`,
    2557: `1380`,
    2558: `1381`,
    2559: `1381`,
    256: `26`,
    2560: `1382`,
    2561: `1383`,
    2562: `1383`,
    2563: `1383`,
    2564: `1384`,
    2565: `1384`,
    2566: `1385`,
    2567: `1385`,
    2568: `1386`,
    2569: `1386`,
    257: `27`,
    2570: `1387`,
    2571: `1388`,
    2572: `1388`,
    2573: `1388`,
    2574: `1389`,
    2575: `1389`,
    2576: `1390`,
    2577: `1391`,
    2578: `1391`,
    2579: `1391`,
    258: `27`,
    2580: `1392`,
    2581: `1392`,
    2582: `1393`,
    2583: `1394`,
    2584: `1394`,
    2585: `1394`,
    2586: `1395`,
    2587: `1395`,
    2588: `1396`,
    2589: `1397`,
    259: `28`,
    2590: `1398`,
    2591: `1398`,
    2592: `1398`,
    2593: `1399`,
    2594: `1399`,
    2595: `1400`,
    2596: `1401`,
    2597: `1401`,
    2598: `1401`,
    2599: `1402`,
    26: `2`,
    260: `29`,
    2600: `1403`,
    2601: `1403`,
    2602: `1403`,
    2603: `1404`,
    2604: `1405`,
    2605: `1406`,
    2606: `1406`,
    2607: `1406`,
    2608: `1407`,
    2609: `1407`,
    261: `30`,
    2610: `1408`,
    2611: `1408`,
    2612: `1409`,
    2613: `1409`,
    2614: `1410`,
    2615: `1411`,
    2616: `1411`,
    2617: `1411`,
    2618: `1412`,
    2619: `1413`,
    262: `30`,
    2620: `1414`,
    2621: `1414`,
    2622: `1414`,
    2623: `1415`,
    2624: `1415`,
    2625: `1416`,
    2626: `1416`,
    2627: `1417`,
    2628: `1417`,
    2629: `1418`,
    263: `31`,
    2630: `1419`,
    2631: `1419`,
    2632: `1420`,
    2633: `1420`,
    2634: `1421`,
    2635: `1422`,
    2636: `1422`,
    2637: `1423`,
    2638: `1423`,
    2639: `1424`,
    264: `32`,
    2640: `1425`,
    2641: `1425`,
    2642: `1425`,
    2643: `1426`,
    2644: `1426`,
    2645: `1427`,
    2646: `1428`,
    2647: `1428`,
    2648: `1428`,
    2649: `1429`,
    265: `33`,
    2650: `1429`,
    2651: `1430`,
    2652: `1431`,
    2653: `1432`,
    2654: `1433`,
    2655: `1433`,
    2656: `1434`,
    2657: `1434`,
    2658: `1434`,
    2659: `1435`,
    266: `33`,
    2660: `1435`,
    2661: `1436`,
    2662: `1436`,
    2663: `1437`,
    2664: `1437`,
    2665: `1437`,
    2666: `1438`,
    2667: `1438`,
    2668: `1439`,
    2669: `1439`,
    267: `34`,
    2670: `1440`,
    2671: `1440`,
    2672: `1440`,
    2673: `1441`,
    2674: `1442`,
    2675: `1443`,
    2676: `1452`,
    2677: `1452`,
    2678: `1453`,
    2679: `1453`,
    268: `35`,
    2680: `1454`,
    2681: `1455`,
    2682: `1455`,
    2683: `1455`,
    2684: `1456`,
    2685: `1456`,
    2686: `1457`,
    2687: `1458`,
    2688: `1458`,
    2689: `1458`,
    269: `36`,
    2690: `1459`,
    2691: `1459`,
    2692: `1460`,
    2693: `1461`,
    2694: `1461`,
    2695: `1461`,
    2696: `1462`,
    2697: `1462`,
    2698: `1463`,
    2699: `1463`,
    27: `2`,
    270: `36`,
    2700: `1464`,
    2701: `1464`,
    2702: `1465`,
    2703: `1466`,
    2704: `1466`,
    2705: `1466`,
    2706: `1467`,
    2707: `1467`,
    2708: `1468`,
    2709: `1468`,
    271: `37`,
    2710: `1469`,
    2711: `1469`,
    2712: `1470`,
    2713: `1471`,
    2714: `1471`,
    2715: `1472`,
    2716: `1472`,
    2717: `1473`,
    2718: `1474`,
    2719: `1475`,
    272: `38`,
    2720: `1484`,
    2721: `1484`,
    2722: `1485`,
    2723: `1485`,
    2724: `1486`,
    2725: `1487`,
    2726: `1487`,
    2727: `1487`,
    2728: `1488`,
    2729: `1488`,
    273: `40`,
    2730: `1489`,
    2731: `1489`,
    2732: `1490`,
    2733: `1491`,
    2734: `1491`,
    2735: `1491`,
    2736: `1492`,
    2737: `1493`,
    2738: `1502`,
    2739: `1502`,
    274: `40`,
    2740: `1504`,
    2741: `1505`,
    2742: `1506`,
    2743: `1506`,
    2744: `1507`,
    2745: `1508`,
    2746: `1509`,
    2747: `1509`,
    2748: `1510`,
    2749: `1511`,
    275: `40`,
    2750: `1512`,
    2751: `1512`,
    2752: `1513`,
    2753: `1513`,
    2754: `1513`,
    2755: `1516`,
    2756: `1516`,
    2757: `1517`,
    2758: `1517`,
    2759: `1517`,
    276: `40`,
    2760: `1518`,
    2761: `1518`,
    2762: `1519`,
    2763: `1519`,
    2764: `1520`,
    2765: `1520`,
    2766: `1521`,
    2767: `1522`,
    2768: `1523`,
    2769: `1524`,
    277: `40`,
    2770: `1524`,
    2771: `1525`,
    2772: `1525`,
    2773: `1526`,
    2774: `1527`,
    2775: `1527`,
    2776: `1528`,
    2777: `1529`,
    2778: `1529`,
    2779: `1530`,
    278: `40`,
    2780: `1531`,
    2781: `1531`,
    2782: `1532`,
    2783: `1533`,
    2784: `1534`,
    2785: `1534`,
    2786: `1535`,
    2787: `1536`,
    2788: `1537`,
    2789: `1537`,
    279: `40`,
    2790: `1538`,
    2791: `1538`,
    2792: `1539`,
    2793: `1539`,
    2794: `1540`,
    2795: `1540`,
    2796: `1542`,
    2797: `1542`,
    2798: `1543`,
    2799: `1543`,
    28: `2`,
    280: `40`,
    2800: `1544`,
    2801: `1544`,
    2802: `1545`,
    2803: `1545`,
    2804: `1546`,
    2805: `1547`,
    2806: `1547`,
    2807: `1548`,
    2808: `1548`,
    2809: `1549`,
    281: `40`,
    2810: `1549`,
    2811: `1550`,
    2812: `1550`,
    2813: `1553`,
    2814: `1553`,
    2815: `1554`,
    2816: `1554`,
    2817: `1555`,
    2818: `1561`,
    2819: `1561`,
    282: `40`,
    2820: `1562`,
    2821: `1563`,
    2822: `1563`,
    2823: `1564`,
    2824: `1565`,
    2825: `1565`,
    2826: `1566`,
    2827: `1567`,
    2828: `1568`,
    2829: `1569`,
    283: `40`,
    2830: `1569`,
    2831: `1569`,
    2832: `1570`,
    2833: `1570`,
    2834: `1570`,
    2835: `1571`,
    2836: `1572`,
    2837: `1572`,
    2838: `1573`,
    2839: `1573`,
    284: `40`,
    2840: `1573`,
    2841: `1573`,
    2842: `1573`,
    2843: `1573`,
    2844: `1573`,
    2845: `1573`,
    2846: `1573`,
    2847: `1573`,
    2848: `1574`,
    2849: `1574`,
    285: `40`,
    2850: `1575`,
    2851: `1576`,
    2852: `1577`,
    2853: `1577`,
    2854: `1578`,
    2855: `1579`,
    2856: `1579`,
    2857: `1580`,
    2858: `1581`,
    2859: `1582`,
    286: `40`,
    2860: `1582`,
    2861: `1583`,
    2862: `1584`,
    2863: `1584`,
    2864: `1585`,
    2865: `1586`,
    2866: `1592`,
    2867: `1592`,
    2868: `1593`,
    2869: `1593`,
    287: `40`,
    2870: `1594`,
    2871: `1595`,
    2872: `1595`,
    2873: `1596`,
    2874: `1596`,
    2875: `1596`,
    2876: `1596`,
    2877: `1596`,
    2878: `1596`,
    2879: `1596`,
    288: `40`,
    2880: `1596`,
    2881: `1596`,
    2882: `1596`,
    2883: `1597`,
    2884: `1597`,
    2885: `1598`,
    2886: `1599`,
    2887: `1600`,
    2888: `1600`,
    2889: `1601`,
    289: `40`,
    2890: `1601`,
    2891: `1602`,
    2892: `1602`,
    2893: `1603`,
    2894: `1603`,
    2895: `1604`,
    2896: `1605`,
    2897: `1605`,
    2898: `1606`,
    2899: `1606`,
    29: `2`,
    290: `40`,
    2900: `1607`,
    2901: `1607`,
    2902: `1608`,
    2903: `1608`,
    2904: `1609`,
    2905: `1609`,
    2906: `1610`,
    2907: `1611`,
    2908: `1612`,
    2909: `1612`,
    291: `40`,
    2910: `1613`,
    2911: `1614`,
    2912: `1614`,
    2913: `1615`,
    2914: `1616`,
    2915: `1617`,
    2916: `1617`,
    2917: `1618`,
    2918: `1619`,
    2919: `1619`,
    292: `40`,
    2920: `1620`,
    2921: `1620`,
    2922: `1621`,
    2923: `1621`,
    2924: `1622`,
    2925: `1623`,
    2926: `1625`,
    2927: `1625`,
    2928: `1626`,
    2929: `1626`,
    293: `40`,
    2930: `1626`,
    2931: `1627`,
    2932: `1627`,
    2933: `1628`,
    2934: `1628`,
    2935: `1628`,
    2936: `1629`,
    2937: `1630`,
    2938: `1630`,
    2939: `1631`,
    294: `40`,
    2940: `1632`,
    2941: `1632`,
    2942: `1633`,
    2943: `1633`,
    2944: `1633`,
    2945: `1634`,
    2946: `1635`,
    2947: `1635`,
    2948: `1636`,
    2949: `1637`,
    295: `40`,
    2950: `1637`,
    2951: `1638`,
    2952: `1638`,
    2953: `1638`,
    2954: `1639`,
    2955: `1639`,
    2956: `1640`,
    2957: `1641`,
    2958: `1641`,
    2959: `1641`,
    296: `40`,
    2960: `1642`,
    2961: `1642`,
    2962: `1643`,
    2963: `1643`,
    2964: `1643`,
    2965: `1644`,
    2966: `1644`,
    2967: `1645`,
    2968: `1646`,
    2969: `1646`,
    297: `40`,
    2970: `1646`,
    2971: `1647`,
    2972: `1648`,
    2973: `1649`,
    2974: `1649`,
    2975: `1650`,
    2976: `1651`,
    2977: `1651`,
    2978: `1652`,
    2979: `1652`,
    298: `40`,
    2980: `1653`,
    2981: `1654`,
    2982: `1655`,
    2983: `1656`,
    2984: `1656`,
    2985: `1657`,
    2986: `1657`,
    2987: `1658`,
    2988: `1659`,
    2989: `1660`,
    299: `40`,
    2990: `1661`,
    2991: `1661`,
    2992: `1662`,
    2993: `1662`,
    2994: `1663`,
    2995: `1664`,
    2996: `1665`,
    2997: `1666`,
    2998: `1666`,
    2999: `1667`,
    3: `2`,
    30: `2`,
    300: `40`,
    3000: `1667`,
    3001: `1668`,
    3002: `1669`,
    3003: `1670`,
    3004: `1671`,
    3005: `1671`,
    3006: `1672`,
    3007: `1672`,
    3008: `1673`,
    3009: `1673`,
    301: `40`,
    3010: `1674`,
    3011: `1675`,
    3012: `1675`,
    3013: `1676`,
    3014: `1677`,
    3015: `1677`,
    3016: `1678`,
    3017: `1678`,
    3018: `1679`,
    3019: `1679`,
    302: `40`,
    3020: `1680`,
    3021: `1680`,
    3022: `1680`,
    3023: `1683`,
    3024: `1683`,
    3025: `1683`,
    3026: `1684`,
    3027: `1684`,
    3028: `1684`,
    3029: `1687`,
    303: `40`,
    3030: `1687`,
    3031: `1688`,
    3032: `1688`,
    3033: `1688`,
    3034: `1689`,
    3035: `1689`,
    3036: `1690`,
    3037: `1690`,
    3038: `1691`,
    3039: `1691`,
    304: `40`,
    3040: `1691`,
    3041: `1692`,
    3042: `1692`,
    3043: `1693`,
    3044: `1693`,
    3045: `1694`,
    3046: `1694`,
    3047: `1694`,
    3048: `1695`,
    3049: `1695`,
    305: `40`,
    3050: `1696`,
    3051: `1696`,
    3052: `1697`,
    3053: `1697`,
    3054: `1697`,
    3055: `1698`,
    3056: `1698`,
    3057: `1699`,
    3058: `1699`,
    3059: `1700`,
    306: `40`,
    3060: `1700`,
    3061: `1700`,
    3062: `1701`,
    3063: `1701`,
    3064: `1702`,
    3065: `1702`,
    3066: `1703`,
    3067: `1703`,
    3068: `1703`,
    3069: `1704`,
    307: `40`,
    3070: `1704`,
    3071: `1705`,
    3072: `1705`,
    3073: `1706`,
    3074: `1706`,
    3075: `1706`,
    3076: `1707`,
    3077: `1707`,
    3078: `1708`,
    3079: `1708`,
    308: `40`,
    3080: `1709`,
    3081: `1709`,
    3082: `1709`,
    3083: `1710`,
    3084: `1710`,
    3085: `1711`,
    3086: `1711`,
    3087: `1712`,
    3088: `1712`,
    3089: `1713`,
    309: `40`,
    3090: `1714`,
    3091: `1714`,
    3092: `1714`,
    3093: `1715`,
    3094: `1715`,
    3095: `1716`,
    3096: `1716`,
    3097: `1717`,
    3098: `1718`,
    3099: `1718`,
    31: `2`,
    310: `40`,
    3100: `1719`,
    3101: `1720`,
    3102: `1720`,
    3103: `1720`,
    3104: `1721`,
    3105: `1722`,
    3106: `1722`,
    3107: `1722`,
    3108: `1723`,
    3109: `1723`,
    311: `40`,
    3110: `1724`,
    3111: `1725`,
    3112: `1725`,
    3113: `1725`,
    3114: `1726`,
    3115: `1726`,
    3116: `1727`,
    3117: `1728`,
    3118: `1729`,
    3119: `1729`,
    312: `40`,
    3120: `1729`,
    3121: `1730`,
    3122: `1731`,
    3123: `1731`,
    3124: `1731`,
    3125: `1732`,
    3126: `1732`,
    3127: `1733`,
    3128: `1734`,
    3129: `1734`,
    313: `40`,
    3130: `1734`,
    3131: `1735`,
    3132: `1735`,
    3133: `1736`,
    3134: `1736`,
    3135: `1737`,
    3136: `1737`,
    3137: `1738`,
    3138: `1739`,
    3139: `1750`,
    314: `40`,
    3140: `1750`,
    3141: `1751`,
    3142: `1751`,
    3143: `1752`,
    3144: `1753`,
    3145: `1753`,
    3146: `1753`,
    3147: `1754`,
    3148: `1754`,
    3149: `1755`,
    315: `40`,
    3150: `1755`,
    3151: `1756`,
    3152: `1756`,
    3153: `1757`,
    3154: `1758`,
    3155: `1758`,
    3156: `1758`,
    3157: `1759`,
    3158: `1759`,
    3159: `1760`,
    316: `40`,
    3160: `1760`,
    3161: `1761`,
    3162: `1761`,
    3163: `1762`,
    3164: `1763`,
    3165: `1763`,
    3166: `1763`,
    3167: `1764`,
    3168: `1764`,
    3169: `1765`,
    317: `40`,
    3170: `1766`,
    3171: `1766`,
    3172: `1766`,
    3173: `1767`,
    3174: `1767`,
    3175: `1768`,
    3176: `1769`,
    3177: `1769`,
    3178: `1769`,
    3179: `1770`,
    318: `40`,
    3180: `1770`,
    3181: `1771`,
    3182: `1772`,
    3183: `1773`,
    3184: `1773`,
    3185: `1773`,
    3186: `1774`,
    3187: `1774`,
    3188: `1775`,
    3189: `1776`,
    319: `40`,
    3190: `1776`,
    3191: `1776`,
    3192: `1777`,
    3193: `1778`,
    3194: `1778`,
    3195: `1778`,
    3196: `1779`,
    3197: `1780`,
    3198: `1781`,
    3199: `1781`,
    32: `2`,
    320: `40`,
    3200: `1781`,
    3201: `1782`,
    3202: `1782`,
    3203: `1783`,
    3204: `1783`,
    3205: `1784`,
    3206: `1784`,
    3207: `1785`,
    3208: `1786`,
    3209: `1786`,
    321: `40`,
    3210: `1786`,
    3211: `1787`,
    3212: `1788`,
    3213: `1789`,
    3214: `1789`,
    3215: `1789`,
    3216: `1790`,
    3217: `1790`,
    3218: `1791`,
    3219: `1791`,
    322: `40`,
    3220: `1792`,
    3221: `1792`,
    3222: `1793`,
    3223: `1794`,
    3224: `1794`,
    3225: `1795`,
    3226: `1795`,
    3227: `1796`,
    3228: `1797`,
    3229: `1797`,
    323: `40`,
    3230: `1798`,
    3231: `1798`,
    3232: `1799`,
    3233: `1800`,
    3234: `1800`,
    3235: `1800`,
    3236: `1801`,
    3237: `1801`,
    3238: `1802`,
    3239: `1803`,
    324: `40`,
    3240: `1803`,
    3241: `1803`,
    3242: `1804`,
    3243: `1804`,
    3244: `1805`,
    3245: `1806`,
    3246: `1807`,
    3247: `1808`,
    3248: `1808`,
    3249: `1809`,
    325: `40`,
    3250: `1809`,
    3251: `1809`,
    3252: `1810`,
    3253: `1810`,
    3254: `1811`,
    3255: `1811`,
    3256: `1812`,
    3257: `1812`,
    3258: `1812`,
    3259: `1813`,
    326: `40`,
    3260: `1813`,
    3261: `1814`,
    3262: `1814`,
    3263: `1815`,
    3264: `1815`,
    3265: `1815`,
    3266: `1816`,
    3267: `1817`,
    3268: `1818`,
    3269: `1825`,
    327: `40`,
    3270: `1825`,
    3271: `1826`,
    3272: `1826`,
    3273: `1827`,
    3274: `1828`,
    3275: `1828`,
    3276: `1828`,
    3277: `1829`,
    3278: `1829`,
    3279: `1830`,
    328: `40`,
    3280: `1830`,
    3281: `1831`,
    3282: `1831`,
    3283: `1832`,
    3284: `1833`,
    3285: `1833`,
    3286: `1833`,
    3287: `1834`,
    3288: `1834`,
    3289: `1835`,
    329: `40`,
    3290: `1836`,
    3291: `1836`,
    3292: `1836`,
    3293: `1837`,
    3294: `1837`,
    3295: `1838`,
    3296: `1839`,
    3297: `1839`,
    3298: `1839`,
    3299: `1840`,
    33: `2`,
    330: `40`,
    3300: `1840`,
    3301: `1841`,
    3302: `1841`,
    3303: `1842`,
    3304: `1842`,
    3305: `1842`,
    3306: `1843`,
    3307: `1843`,
    3308: `1844`,
    3309: `1844`,
    331: `40`,
    3310: `1845`,
    3311: `1845`,
    3312: `1846`,
    3313: `1847`,
    3314: `1847`,
    3315: `1848`,
    3316: `1848`,
    3317: `1849`,
    3318: `1850`,
    3319: `1851`,
    332: `40`,
    3320: `1858`,
    3321: `1858`,
    3322: `1859`,
    3323: `1859`,
    3324: `1860`,
    3325: `1861`,
    3326: `1861`,
    3327: `1861`,
    3328: `1862`,
    3329: `1862`,
    333: `40`,
    3330: `1863`,
    3331: `1863`,
    3332: `1864`,
    3333: `1865`,
    3334: `1865`,
    3335: `1865`,
    3336: `1866`,
    3337: `1867`,
    3338: `1874`,
    3339: `1874`,
    334: `40`,
    3340: `1875`,
    3341: `1876`,
    3342: `1877`,
    3343: `1878`,
    3344: `1879`,
    3345: `1879`,
    3346: `1880`,
    3347: `1881`,
    3348: `1881`,
    3349: `1882`,
    335: `40`,
    3350: `1882`,
    3351: `1883`,
    3352: `1883`,
    3353: `1884`,
    3354: `1885`,
    3355: `1886`,
    3356: `1887`,
    3357: `1887`,
    3358: `1888`,
    3359: `1888`,
    336: `40`,
    3360: `1889`,
    3361: `1890`,
    3362: `1890`,
    3363: `1891`,
    3364: `1892`,
    3365: `1892`,
    3366: `1893`,
    3367: `1894`,
    3368: `1894`,
    3369: `1895`,
    337: `40`,
    3370: `1896`,
    3371: `1897`,
    3372: `1897`,
    3373: `1898`,
    3374: `1899`,
    3375: `1900`,
    3376: `1900`,
    3377: `1901`,
    3378: `1901`,
    3379: `1902`,
    338: `40`,
    3380: `1902`,
    3381: `1903`,
    3382: `1903`,
    3383: `1905`,
    3384: `1905`,
    3385: `1906`,
    3386: `1906`,
    3387: `1907`,
    3388: `1907`,
    3389: `1908`,
    339: `40`,
    3390: `1908`,
    3391: `1909`,
    3392: `1910`,
    3393: `1910`,
    3394: `1911`,
    3395: `1911`,
    3396: `1912`,
    3397: `1912`,
    3398: `1914`,
    3399: `1915`,
    34: `2`,
    340: `40`,
    3400: `1915`,
    3401: `1916`,
    3402: `1916`,
    3403: `1917`,
    3404: `1917`,
    3405: `1918`,
    3406: `1918`,
    3407: `1922`,
    3408: `1922`,
    3409: `1923`,
    341: `40`,
    3410: `1923`,
    3411: `1924`,
    3412: `1930`,
    3413: `1930`,
    3414: `1931`,
    3415: `1932`,
    3416: `1932`,
    3417: `1933`,
    3418: `1934`,
    3419: `1934`,
    342: `40`,
    3420: `1935`,
    3421: `1936`,
    3422: `1937`,
    3423: `1938`,
    3424: `1938`,
    3425: `1938`,
    3426: `1939`,
    3427: `1939`,
    3428: `1939`,
    3429: `1940`,
    343: `40`,
    3430: `1941`,
    3431: `1941`,
    3432: `1942`,
    3433: `1942`,
    3434: `1942`,
    3435: `1942`,
    3436: `1942`,
    3437: `1942`,
    3438: `1942`,
    3439: `1942`,
    344: `40`,
    3440: `1942`,
    3441: `1942`,
    3442: `1943`,
    3443: `1943`,
    3444: `1944`,
    3445: `1945`,
    3446: `1946`,
    3447: `1946`,
    3448: `1947`,
    3449: `1948`,
    345: `40`,
    3450: `1948`,
    3451: `1949`,
    3452: `1950`,
    3453: `1951`,
    3454: `1951`,
    3455: `1952`,
    3456: `1953`,
    3457: `1953`,
    3458: `1954`,
    3459: `1955`,
    346: `40`,
    3460: `1961`,
    3461: `1961`,
    3462: `1962`,
    3463: `1962`,
    3464: `1963`,
    3465: `1964`,
    3466: `1965`,
    3467: `1966`,
    3468: `1966`,
    3469: `1967`,
    347: `40`,
    3470: `1967`,
    3471: `1968`,
    3472: `1969`,
    3473: `1969`,
    3474: `1970`,
    3475: `1971`,
    3476: `1971`,
    3477: `1972`,
    3478: `1973`,
    3479: `1973`,
    348: `40`,
    3480: `1974`,
    3481: `1975`,
    3482: `1976`,
    3483: `1976`,
    3484: `1977`,
    3485: `1978`,
    3486: `1979`,
    3487: `1979`,
    3488: `1980`,
    3489: `1980`,
    349: `40`,
    3490: `1981`,
    3491: `1981`,
    3492: `1982`,
    3493: `1982`,
    3494: `1983`,
    3495: `1983`,
    3496: `1984`,
    3497: `1984`,
    3498: `1985`,
    3499: `1985`,
    35: `2`,
    350: `40`,
    3500: `1986`,
    3501: `1986`,
    3502: `1987`,
    3503: `1988`,
    3504: `1988`,
    3505: `1989`,
    3506: `1989`,
    3507: `1990`,
    3508: `1990`,
    3509: `1991`,
    351: `40`,
    3510: `1991`,
    3511: `1992`,
    3512: `1992`,
    3513: `1993`,
    3514: `1993`,
    3515: `1994`,
    3516: `2000`,
    3517: `2000`,
    3518: `2001`,
    3519: `2002`,
    352: `40`,
    3520: `2002`,
    3521: `2003`,
    3522: `2004`,
    3523: `2004`,
    3524: `2005`,
    3525: `2006`,
    3526: `2007`,
    3527: `2008`,
    3528: `2008`,
    3529: `2008`,
    353: `40`,
    3530: `2009`,
    3531: `2009`,
    3532: `2009`,
    3533: `2010`,
    3534: `2011`,
    3535: `2011`,
    3536: `2012`,
    3537: `2012`,
    3538: `2012`,
    3539: `2012`,
    354: `40`,
    3540: `2012`,
    3541: `2012`,
    3542: `2012`,
    3543: `2012`,
    3544: `2012`,
    3545: `2012`,
    3546: `2013`,
    3547: `2013`,
    3548: `2014`,
    3549: `2015`,
    355: `40`,
    3550: `2016`,
    3551: `2016`,
    3552: `2017`,
    3553: `2018`,
    3554: `2018`,
    3555: `2019`,
    3556: `2020`,
    3557: `2021`,
    3558: `2021`,
    3559: `2022`,
    356: `40`,
    3560: `2023`,
    3561: `2023`,
    3562: `2024`,
    3563: `2025`,
    3564: `2031`,
    3565: `2031`,
    3566: `2032`,
    3567: `2032`,
    3568: `2033`,
    3569: `2034`,
    357: `40`,
    3570: `2034`,
    3571: `2035`,
    3572: `2035`,
    3573: `2035`,
    3574: `2035`,
    3575: `2035`,
    3576: `2035`,
    3577: `2035`,
    3578: `2035`,
    3579: `2035`,
    358: `40`,
    3580: `2035`,
    3581: `2036`,
    3582: `2036`,
    3583: `2037`,
    3584: `2038`,
    3585: `2039`,
    3586: `2039`,
    3587: `2040`,
    3588: `2040`,
    3589: `2041`,
    359: `40`,
    3590: `2041`,
    3591: `2042`,
    3592: `2042`,
    3593: `2043`,
    3594: `2044`,
    3595: `2044`,
    3596: `2045`,
    3597: `2045`,
    3598: `2046`,
    3599: `2046`,
    36: `2`,
    360: `40`,
    3600: `2047`,
    3601: `2047`,
    3602: `2048`,
    3603: `2048`,
    3604: `2049`,
    3605: `2050`,
    3606: `2051`,
    3607: `2051`,
    3608: `2052`,
    3609: `2053`,
    361: `40`,
    3610: `2053`,
    3611: `2054`,
    3612: `2055`,
    3613: `2056`,
    3614: `2056`,
    3615: `2057`,
    3616: `2058`,
    3617: `2058`,
    3618: `2059`,
    3619: `2059`,
    362: `40`,
    3620: `2060`,
    3621: `2060`,
    3622: `2061`,
    3623: `2062`,
    3624: `2064`,
    3625: `2064`,
    3626: `2065`,
    3627: `2065`,
    3628: `2065`,
    3629: `2066`,
    363: `40`,
    3630: `2066`,
    3631: `2067`,
    3632: `2067`,
    3633: `2067`,
    3634: `2068`,
    3635: `2069`,
    3636: `2069`,
    3637: `2070`,
    3638: `2071`,
    3639: `2071`,
    364: `40`,
    3640: `2072`,
    3641: `2072`,
    3642: `2072`,
    3643: `2073`,
    3644: `2074`,
    3645: `2074`,
    3646: `2075`,
    3647: `2076`,
    3648: `2076`,
    3649: `2077`,
    365: `40`,
    3650: `2077`,
    3651: `2077`,
    3652: `2078`,
    3653: `2078`,
    3654: `2079`,
    3655: `2080`,
    3656: `2080`,
    3657: `2080`,
    3658: `2081`,
    3659: `2081`,
    366: `40`,
    3660: `2082`,
    3661: `2082`,
    3662: `2082`,
    3663: `2083`,
    3664: `2083`,
    3665: `2084`,
    3666: `2085`,
    3667: `2085`,
    3668: `2085`,
    3669: `2086`,
    367: `40`,
    3670: `2087`,
    3671: `2088`,
    3672: `2088`,
    3673: `2089`,
    3674: `2090`,
    3675: `2090`,
    3676: `2091`,
    3677: `2091`,
    3678: `2092`,
    3679: `2093`,
    368: `40`,
    3680: `2094`,
    3681: `2095`,
    3682: `2095`,
    3683: `2096`,
    3684: `2096`,
    3685: `2097`,
    3686: `2098`,
    3687: `2099`,
    3688: `2100`,
    3689: `2100`,
    369: `40`,
    3690: `2101`,
    3691: `2101`,
    3692: `2102`,
    3693: `2103`,
    3694: `2104`,
    3695: `2105`,
    3696: `2105`,
    3697: `2106`,
    3698: `2106`,
    3699: `2107`,
    37: `2`,
    370: `40`,
    3700: `2108`,
    3701: `2109`,
    3702: `2110`,
    3703: `2110`,
    3704: `2111`,
    3705: `2111`,
    3706: `2112`,
    3707: `2112`,
    3708: `2113`,
    3709: `2114`,
    371: `40`,
    3710: `2114`,
    3711: `2115`,
    3712: `2116`,
    3713: `2116`,
    3714: `2117`,
    3715: `2117`,
    3716: `2118`,
    3717: `2118`,
    3718: `2119`,
    3719: `2119`,
    372: `40`,
    3720: `2119`,
    3721: `2122`,
    3722: `2122`,
    3723: `2122`,
    3724: `2124`,
    3725: `2124`,
    3726: `2125`,
    3727: `2125`,
    3728: `2125`,
    3729: `2126`,
    373: `40`,
    3730: `2126`,
    3731: `2127`,
    3732: `2127`,
    3733: `2128`,
    3734: `2128`,
    3735: `2128`,
    3736: `2129`,
    3737: `2129`,
    3738: `2130`,
    3739: `2130`,
    374: `40`,
    3740: `2131`,
    3741: `2131`,
    3742: `2131`,
    3743: `2132`,
    3744: `2132`,
    3745: `2133`,
    3746: `2133`,
    3747: `2134`,
    3748: `2134`,
    3749: `2134`,
    375: `40`,
    3750: `2135`,
    3751: `2135`,
    3752: `2136`,
    3753: `2136`,
    3754: `2137`,
    3755: `2137`,
    3756: `2137`,
    3757: `2138`,
    3758: `2138`,
    3759: `2139`,
    376: `40`,
    3760: `2139`,
    3761: `2140`,
    3762: `2140`,
    3763: `2140`,
    3764: `2141`,
    3765: `2141`,
    3766: `2142`,
    3767: `2142`,
    3768: `2143`,
    3769: `2143`,
    377: `40`,
    3770: `2143`,
    3771: `2144`,
    3772: `2144`,
    3773: `2145`,
    3774: `2145`,
    3775: `2146`,
    3776: `2147`,
    3777: `2147`,
    3778: `2148`,
    3779: `2149`,
    378: `40`,
    3780: `2149`,
    3781: `2149`,
    3782: `2150`,
    3783: `2151`,
    3784: `2151`,
    3785: `2151`,
    3786: `2152`,
    3787: `2153`,
    3788: `2153`,
    3789: `2154`,
    379: `40`,
    3790: `2154`,
    3791: `2155`,
    3792: `2156`,
    3793: `2156`,
    3794: `2156`,
    3795: `2157`,
    3796: `2157`,
    3797: `2158`,
    3798: `2159`,
    3799: `2160`,
    38: `2`,
    380: `40`,
    3800: `2160`,
    3801: `2160`,
    3802: `2161`,
    3803: `2161`,
    3804: `2162`,
    3805: `2163`,
    3806: `2163`,
    3807: `2163`,
    3808: `2164`,
    3809: `2165`,
    381: `40`,
    3810: `2165`,
    3811: `2165`,
    3812: `2166`,
    3813: `2166`,
    3814: `2167`,
    3815: `2167`,
    3816: `2168`,
    3817: `2168`,
    3818: `2169`,
    3819: `2170`,
    382: `40`,
    3820: `2170`,
    3821: `2170`,
    3822: `2171`,
    3823: `2171`,
    3824: `2172`,
    3825: `2172`,
    3826: `2173`,
    3827: `2173`,
    3828: `2174`,
    3829: `2175`,
    383: `40`,
    3830: `2175`,
    3831: `2175`,
    3832: `2176`,
    3833: `2176`,
    3834: `2177`,
    3835: `2178`,
    3836: `2178`,
    3837: `2178`,
    3838: `2179`,
    3839: `2179`,
    384: `40`,
    3840: `2180`,
    3841: `2181`,
    3842: `2181`,
    3843: `2181`,
    3844: `2182`,
    3845: `2182`,
    3846: `2183`,
    3847: `2184`,
    3848: `2185`,
    3849: `2185`,
    385: `40`,
    3850: `2185`,
    3851: `2186`,
    3852: `2186`,
    3853: `2187`,
    3854: `2188`,
    3855: `2188`,
    3856: `2188`,
    3857: `2189`,
    3858: `2190`,
    3859: `2190`,
    386: `40`,
    3860: `2190`,
    3861: `2191`,
    3862: `2192`,
    3863: `2193`,
    3864: `2193`,
    3865: `2193`,
    3866: `2194`,
    3867: `2194`,
    3868: `2195`,
    3869: `2195`,
    387: `40`,
    3870: `2196`,
    3871: `2196`,
    3872: `2197`,
    3873: `2198`,
    3874: `2198`,
    3875: `2198`,
    3876: `2199`,
    3877: `2200`,
    3878: `2201`,
    3879: `2201`,
    388: `40`,
    3880: `2201`,
    3881: `2202`,
    3882: `2202`,
    3883: `2203`,
    3884: `2203`,
    3885: `2204`,
    3886: `2204`,
    3887: `2205`,
    3888: `2206`,
    3889: `2206`,
    389: `40`,
    3890: `2207`,
    3891: `2207`,
    3892: `2208`,
    3893: `2209`,
    3894: `2209`,
    3895: `2210`,
    3896: `2210`,
    3897: `2211`,
    3898: `2212`,
    3899: `2212`,
    39: `2`,
    390: `40`,
    3900: `2212`,
    3901: `2213`,
    3902: `2213`,
    3903: `2214`,
    3904: `2215`,
    3905: `2215`,
    3906: `2215`,
    3907: `2216`,
    3908: `2216`,
    3909: `2217`,
    391: `40`,
    3910: `2218`,
    3911: `2219`,
    3912: `2220`,
    3913: `2220`,
    3914: `2221`,
    3915: `2221`,
    3916: `2221`,
    3917: `2222`,
    3918: `2222`,
    3919: `2223`,
    392: `40`,
    3920: `2223`,
    3921: `2224`,
    3922: `2224`,
    3923: `2224`,
    3924: `2225`,
    3925: `2225`,
    3926: `2226`,
    3927: `2226`,
    3928: `2227`,
    3929: `2227`,
    393: `40`,
    3930: `2227`,
    3931: `2228`,
    3932: `2229`,
    3933: `2230`,
    3934: `2239`,
    3935: `2239`,
    3936: `2240`,
    3937: `2240`,
    3938: `2241`,
    3939: `2242`,
    394: `40`,
    3940: `2242`,
    3941: `2242`,
    3942: `2243`,
    3943: `2243`,
    3944: `2244`,
    3945: `2245`,
    3946: `2245`,
    3947: `2245`,
    3948: `2246`,
    3949: `2246`,
    395: `40`,
    3950: `2247`,
    3951: `2247`,
    3952: `2248`,
    3953: `2248`,
    3954: `2249`,
    3955: `2250`,
    3956: `2250`,
    3957: `2250`,
    3958: `2251`,
    3959: `2251`,
    396: `40`,
    3960: `2252`,
    3961: `2253`,
    3962: `2253`,
    3963: `2253`,
    3964: `2254`,
    3965: `2254`,
    3966: `2255`,
    3967: `2255`,
    3968: `2256`,
    3969: `2256`,
    397: `40`,
    3970: `2256`,
    3971: `2257`,
    3972: `2257`,
    3973: `2258`,
    3974: `2259`,
    3975: `2268`,
    3976: `2268`,
    3977: `2269`,
    3978: `2269`,
    3979: `2270`,
    398: `40`,
    3980: `2271`,
    3981: `2271`,
    3982: `2271`,
    3983: `2272`,
    3984: `2272`,
    3985: `2273`,
    3986: `2273`,
    3987: `2274`,
    3988: `2275`,
    3989: `2275`,
    399: `40`,
    3990: `2275`,
    3991: `2276`,
    3992: `2277`,
    3993: `2286`,
    3994: `2286`,
    3995: `2288`,
    3996: `2289`,
    3997: `2290`,
    3998: `2290`,
    3999: `2291`,
    4: `2`,
    40: `2`,
    400: `40`,
    4000: `2292`,
    4001: `2293`,
    4002: `2293`,
    4003: `2294`,
    4004: `2295`,
    4005: `2296`,
    4006: `2296`,
    4007: `2297`,
    4008: `2297`,
    4009: `2297`,
    401: `40`,
    4010: `2300`,
    4011: `2300`,
    4012: `2301`,
    4013: `2301`,
    4014: `2301`,
    4015: `2302`,
    4016: `2302`,
    4017: `2303`,
    4018: `2303`,
    4019: `2304`,
    402: `40`,
    4020: `2304`,
    4021: `2305`,
    4022: `2306`,
    4023: `2307`,
    4024: `2308`,
    4025: `2308`,
    4026: `2309`,
    4027: `2309`,
    4028: `2310`,
    4029: `2311`,
    403: `40`,
    4030: `2311`,
    4031: `2312`,
    4032: `2313`,
    4033: `2313`,
    4034: `2314`,
    4035: `2315`,
    4036: `2315`,
    4037: `2316`,
    4038: `2317`,
    4039: `2318`,
    404: `40`,
    4040: `2318`,
    4041: `2319`,
    4042: `2320`,
    4043: `2321`,
    4044: `2321`,
    4045: `2322`,
    4046: `2322`,
    4047: `2323`,
    4048: `2323`,
    4049: `2324`,
    405: `40`,
    4050: `2324`,
    4051: `2326`,
    4052: `2326`,
    4053: `2327`,
    4054: `2327`,
    4055: `2328`,
    4056: `2328`,
    4057: `2329`,
    4058: `2329`,
    4059: `2330`,
    406: `40`,
    4060: `2331`,
    4061: `2331`,
    4062: `2332`,
    4063: `2332`,
    4064: `2333`,
    4065: `2333`,
    4066: `2334`,
    4067: `2334`,
    4068: `2337`,
    4069: `2337`,
    407: `40`,
    4070: `2338`,
    4071: `2338`,
    4072: `2339`,
    4073: `2345`,
    4074: `2345`,
    4075: `2346`,
    4076: `2347`,
    4077: `2347`,
    4078: `2348`,
    4079: `2349`,
    408: `40`,
    4080: `2349`,
    4081: `2350`,
    4082: `2351`,
    4083: `2352`,
    4084: `2353`,
    4085: `2353`,
    4086: `2353`,
    4087: `2354`,
    4088: `2354`,
    4089: `2354`,
    409: `40`,
    4090: `2355`,
    4091: `2356`,
    4092: `2356`,
    4093: `2357`,
    4094: `2357`,
    4095: `2357`,
    4096: `2357`,
    4097: `2357`,
    4098: `2357`,
    4099: `2357`,
    41: `2`,
    410: `40`,
    4100: `2357`,
    4101: `2357`,
    4102: `2357`,
    4103: `2358`,
    4104: `2358`,
    4105: `2359`,
    4106: `2360`,
    4107: `2361`,
    4108: `2361`,
    4109: `2362`,
    411: `40`,
    4110: `2363`,
    4111: `2363`,
    4112: `2364`,
    4113: `2365`,
    4114: `2366`,
    4115: `2366`,
    4116: `2367`,
    4117: `2368`,
    4118: `2368`,
    4119: `2369`,
    412: `40`,
    4120: `2370`,
    4121: `2376`,
    4122: `2376`,
    4123: `2377`,
    4124: `2377`,
    4125: `2378`,
    4126: `2379`,
    4127: `2379`,
    4128: `2380`,
    4129: `2380`,
    413: `40`,
    4130: `2380`,
    4131: `2380`,
    4132: `2380`,
    4133: `2380`,
    4134: `2380`,
    4135: `2380`,
    4136: `2380`,
    4137: `2380`,
    4138: `2381`,
    4139: `2381`,
    414: `40`,
    4140: `2382`,
    4141: `2383`,
    4142: `2384`,
    4143: `2384`,
    4144: `2385`,
    4145: `2385`,
    4146: `2386`,
    4147: `2386`,
    4148: `2387`,
    4149: `2387`,
    415: `41`,
    4150: `2388`,
    4151: `2389`,
    4152: `2389`,
    4153: `2390`,
    4154: `2390`,
    4155: `2391`,
    4156: `2391`,
    4157: `2392`,
    4158: `2392`,
    4159: `2393`,
    416: `41`,
    4160: `2393`,
    4161: `2394`,
    4162: `2395`,
    4163: `2396`,
    4164: `2396`,
    4165: `2397`,
    4166: `2398`,
    4167: `2398`,
    4168: `2399`,
    4169: `2400`,
    417: `41`,
    4170: `2401`,
    4171: `2401`,
    4172: `2402`,
    4173: `2403`,
    4174: `2403`,
    4175: `2404`,
    4176: `2404`,
    4177: `2405`,
    4178: `2405`,
    4179: `2406`,
    418: `42`,
    4180: `2407`,
    4181: `2409`,
    4182: `2409`,
    4183: `2410`,
    4184: `2410`,
    4185: `2410`,
    4186: `2411`,
    4187: `2411`,
    4188: `2412`,
    4189: `2412`,
    419: `42`,
    4190: `2412`,
    4191: `2413`,
    4192: `2414`,
    4193: `2414`,
    4194: `2415`,
    4195: `2416`,
    4196: `2416`,
    4197: `2417`,
    4198: `2417`,
    4199: `2417`,
    42: `2`,
    420: `42`,
    4200: `2418`,
    4201: `2419`,
    4202: `2419`,
    4203: `2420`,
    4204: `2421`,
    4205: `2421`,
    4206: `2422`,
    4207: `2422`,
    4208: `2422`,
    4209: `2423`,
    421: `42`,
    4210: `2423`,
    4211: `2424`,
    4212: `2425`,
    4213: `2425`,
    4214: `2425`,
    4215: `2426`,
    4216: `2426`,
    4217: `2427`,
    4218: `2427`,
    4219: `2427`,
    422: `42`,
    4220: `2428`,
    4221: `2428`,
    4222: `2429`,
    4223: `2430`,
    4224: `2430`,
    4225: `2430`,
    4226: `2431`,
    4227: `2432`,
    4228: `2433`,
    4229: `2433`,
    423: `42`,
    4230: `2434`,
    4231: `2435`,
    4232: `2435`,
    4233: `2436`,
    4234: `2436`,
    4235: `2437`,
    4236: `2438`,
    4237: `2439`,
    4238: `2440`,
    4239: `2440`,
    424: `42`,
    4240: `2441`,
    4241: `2441`,
    4242: `2442`,
    4243: `2443`,
    4244: `2444`,
    4245: `2445`,
    4246: `2445`,
    4247: `2446`,
    4248: `2446`,
    4249: `2447`,
    425: `42`,
    4250: `2448`,
    4251: `2449`,
    4252: `2450`,
    4253: `2450`,
    4254: `2451`,
    4255: `2451`,
    4256: `2452`,
    4257: `2453`,
    4258: `2454`,
    4259: `2455`,
    426: `42`,
    4260: `2455`,
    4261: `2456`,
    4262: `2456`,
    4263: `2457`,
    4264: `2457`,
    4265: `2458`,
    4266: `2459`,
    4267: `2459`,
    4268: `2460`,
    4269: `2461`,
    427: `42`,
    4270: `2461`,
    4271: `2462`,
    4272: `2462`,
    4273: `2463`,
    4274: `2463`,
    4275: `2464`,
    4276: `2464`,
    4277: `2464`,
    4278: `2467`,
    4279: `2467`,
    428: `42`,
    4280: `2467`,
    4281: `2468`,
    4282: `2468`,
    4283: `2468`,
    4284: `2471`,
    4285: `2471`,
    4286: `2472`,
    4287: `2472`,
    4288: `2472`,
    4289: `2473`,
    429: `42`,
    4290: `2473`,
    4291: `2474`,
    4292: `2474`,
    4293: `2475`,
    4294: `2475`,
    4295: `2475`,
    4296: `2476`,
    4297: `2476`,
    4298: `2477`,
    4299: `2477`,
    43: `2`,
    430: `42`,
    4300: `2478`,
    4301: `2478`,
    4302: `2478`,
    4303: `2479`,
    4304: `2479`,
    4305: `2480`,
    4306: `2480`,
    4307: `2481`,
    4308: `2481`,
    4309: `2481`,
    431: `42`,
    4310: `2482`,
    4311: `2482`,
    4312: `2483`,
    4313: `2483`,
    4314: `2484`,
    4315: `2484`,
    4316: `2484`,
    4317: `2485`,
    4318: `2485`,
    4319: `2486`,
    432: `42`,
    4320: `2486`,
    4321: `2487`,
    4322: `2487`,
    4323: `2487`,
    4324: `2488`,
    4325: `2488`,
    4326: `2489`,
    4327: `2489`,
    4328: `2490`,
    4329: `2490`,
    433: `42`,
    4330: `2490`,
    4331: `2491`,
    4332: `2491`,
    4333: `2492`,
    4334: `2492`,
    4335: `2493`,
    4336: `2494`,
    4337: `2494`,
    4338: `2495`,
    4339: `2496`,
    434: `42`,
    4340: `2496`,
    4341: `2496`,
    4342: `2497`,
    4343: `2498`,
    4344: `2498`,
    4345: `2498`,
    4346: `2499`,
    4347: `2500`,
    4348: `2500`,
    4349: `2501`,
    435: `42`,
    4350: `2501`,
    4351: `2502`,
    4352: `2503`,
    4353: `2503`,
    4354: `2503`,
    4355: `2504`,
    4356: `2504`,
    4357: `2505`,
    4358: `2506`,
    4359: `2507`,
    436: `42`,
    4360: `2507`,
    4361: `2507`,
    4362: `2508`,
    4363: `2508`,
    4364: `2509`,
    4365: `2510`,
    4366: `2510`,
    4367: `2510`,
    4368: `2511`,
    4369: `2512`,
    437: `42`,
    4370: `2512`,
    4371: `2512`,
    4372: `2513`,
    4373: `2513`,
    4374: `2514`,
    4375: `2514`,
    4376: `2515`,
    4377: `2515`,
    4378: `2516`,
    4379: `2517`,
    438: `42`,
    4380: `2517`,
    4381: `2517`,
    4382: `2518`,
    4383: `2518`,
    4384: `2519`,
    4385: `2519`,
    4386: `2520`,
    4387: `2520`,
    4388: `2521`,
    4389: `2522`,
    439: `42`,
    4390: `2522`,
    4391: `2522`,
    4392: `2523`,
    4393: `2523`,
    4394: `2524`,
    4395: `2525`,
    4396: `2525`,
    4397: `2525`,
    4398: `2526`,
    4399: `2526`,
    44: `2`,
    440: `42`,
    4400: `2527`,
    4401: `2528`,
    4402: `2528`,
    4403: `2528`,
    4404: `2529`,
    4405: `2529`,
    4406: `2530`,
    4407: `2531`,
    4408: `2532`,
    4409: `2532`,
    441: `42`,
    4410: `2532`,
    4411: `2533`,
    4412: `2533`,
    4413: `2534`,
    4414: `2535`,
    4415: `2535`,
    4416: `2535`,
    4417: `2536`,
    4418: `2537`,
    4419: `2537`,
    442: `42`,
    4420: `2537`,
    4421: `2538`,
    4422: `2539`,
    4423: `2540`,
    4424: `2540`,
    4425: `2540`,
    4426: `2541`,
    4427: `2541`,
    4428: `2542`,
    4429: `2542`,
    443: `42`,
    4430: `2543`,
    4431: `2543`,
    4432: `2544`,
    4433: `2545`,
    4434: `2545`,
    4435: `2545`,
    4436: `2546`,
    4437: `2547`,
    4438: `2548`,
    4439: `2548`,
    444: `42`,
    4440: `2548`,
    4441: `2549`,
    4442: `2549`,
    4443: `2550`,
    4444: `2550`,
    4445: `2551`,
    4446: `2551`,
    4447: `2552`,
    4448: `2553`,
    4449: `2553`,
    445: `42`,
    4450: `2554`,
    4451: `2554`,
    4452: `2555`,
    4453: `2556`,
    4454: `2556`,
    4455: `2557`,
    4456: `2557`,
    4457: `2558`,
    4458: `2559`,
    4459: `2559`,
    446: `42`,
    4460: `2559`,
    4461: `2560`,
    4462: `2560`,
    4463: `2561`,
    4464: `2562`,
    4465: `2562`,
    4466: `2562`,
    4467: `2563`,
    4468: `2563`,
    4469: `2564`,
    447: `42`,
    4470: `2565`,
    4471: `2566`,
    4472: `2567`,
    4473: `2567`,
    4474: `2568`,
    4475: `2568`,
    4476: `2568`,
    4477: `2569`,
    4478: `2569`,
    4479: `2570`,
    448: `42`,
    4480: `2570`,
    4481: `2571`,
    4482: `2571`,
    4483: `2571`,
    4484: `2572`,
    4485: `2572`,
    4486: `2573`,
    4487: `2573`,
    4488: `2574`,
    4489: `2574`,
    449: `42`,
    4490: `2574`,
    4491: `2575`,
    4492: `2576`,
    4493: `2577`,
    4494: `2584`,
    4495: `2584`,
    4496: `2585`,
    4497: `2585`,
    4498: `2586`,
    4499: `2587`,
    45: `2`,
    450: `42`,
    4500: `2587`,
    4501: `2587`,
    4502: `2588`,
    4503: `2588`,
    4504: `2589`,
    4505: `2590`,
    4506: `2590`,
    4507: `2590`,
    4508: `2591`,
    4509: `2591`,
    451: `42`,
    4510: `2592`,
    4511: `2592`,
    4512: `2593`,
    4513: `2593`,
    4514: `2594`,
    4515: `2595`,
    4516: `2595`,
    4517: `2595`,
    4518: `2596`,
    4519: `2596`,
    452: `42`,
    4520: `2597`,
    4521: `2598`,
    4522: `2598`,
    4523: `2598`,
    4524: `2599`,
    4525: `2599`,
    4526: `2600`,
    4527: `2600`,
    4528: `2601`,
    4529: `2601`,
    453: `42`,
    4530: `2601`,
    4531: `2602`,
    4532: `2602`,
    4533: `2603`,
    4534: `2603`,
    4535: `2604`,
    4536: `2604`,
    4537: `2604`,
    4538: `2605`,
    4539: `2605`,
    454: `42`,
    4540: `2606`,
    4541: `2607`,
    4542: `2614`,
    4543: `2614`,
    4544: `2615`,
    4545: `2615`,
    4546: `2616`,
    4547: `2617`,
    4548: `2617`,
    4549: `2617`,
    455: `42`,
    4550: `2618`,
    4551: `2618`,
    4552: `2619`,
    4553: `2619`,
    4554: `2620`,
    4555: `2621`,
    4556: `2621`,
    4557: `2621`,
    4558: `2622`,
    4559: `2623`,
    456: `42`,
    4560: `2630`,
    4561: `2630`,
    4562: `2631`,
    4563: `2632`,
    4564: `2633`,
    4565: `2634`,
    4566: `2635`,
    4567: `2635`,
    4568: `2636`,
    4569: `2637`,
    457: `42`,
    4570: `2637`,
    4571: `2638`,
    4572: `2638`,
    4573: `2639`,
    4574: `2639`,
    4575: `2640`,
    4576: `2641`,
    4577: `2642`,
    4578: `2643`,
    4579: `2643`,
    458: `42`,
    4580: `2644`,
    4581: `2644`,
    4582: `2645`,
    4583: `2646`,
    4584: `2646`,
    4585: `2647`,
    4586: `2648`,
    4587: `2648`,
    4588: `2649`,
    4589: `2650`,
    459: `42`,
    4590: `2650`,
    4591: `2651`,
    4592: `2652`,
    4593: `2653`,
    4594: `2653`,
    4595: `2654`,
    4596: `2655`,
    4597: `2656`,
    4598: `2656`,
    4599: `2657`,
    46: `2`,
    460: `42`,
    4600: `2657`,
    4601: `2658`,
    4602: `2658`,
    4603: `2659`,
    4604: `2659`,
    4605: `2661`,
    4606: `2661`,
    4607: `2662`,
    4608: `2662`,
    4609: `2663`,
    461: `42`,
    4610: `2663`,
    4611: `2664`,
    4612: `2664`,
    4613: `2665`,
    4614: `2666`,
    4615: `2666`,
    4616: `2667`,
    4617: `2667`,
    4618: `2668`,
    4619: `2668`,
    462: `42`,
    4620: `2670`,
    4621: `2671`,
    4622: `2671`,
    4623: `2672`,
    4624: `2672`,
    4625: `2673`,
    4626: `2673`,
    4627: `2674`,
    4628: `2674`,
    4629: `2678`,
    463: `42`,
    4630: `2678`,
    4631: `2679`,
    4632: `2679`,
    4633: `2680`,
    4634: `2686`,
    4635: `2686`,
    4636: `2687`,
    4637: `2688`,
    4638: `2688`,
    4639: `2689`,
    464: `42`,
    4640: `2690`,
    4641: `2690`,
    4642: `2691`,
    4643: `2692`,
    4644: `2693`,
    4645: `2694`,
    4646: `2694`,
    4647: `2694`,
    4648: `2695`,
    4649: `2695`,
    465: `42`,
    4650: `2695`,
    4651: `2696`,
    4652: `2697`,
    4653: `2697`,
    4654: `2698`,
    4655: `2698`,
    4656: `2698`,
    4657: `2698`,
    4658: `2698`,
    4659: `2698`,
    466: `42`,
    4660: `2698`,
    4661: `2698`,
    4662: `2698`,
    4663: `2698`,
    4664: `2699`,
    4665: `2699`,
    4666: `2700`,
    4667: `2701`,
    4668: `2702`,
    4669: `2702`,
    467: `42`,
    4670: `2703`,
    4671: `2704`,
    4672: `2704`,
    4673: `2705`,
    4674: `2706`,
    4675: `2707`,
    4676: `2707`,
    4677: `2708`,
    4678: `2709`,
    4679: `2709`,
    468: `42`,
    4680: `2710`,
    4681: `2711`,
    4682: `2717`,
    4683: `2717`,
    4684: `2718`,
    4685: `2718`,
    4686: `2719`,
    4687: `2720`,
    4688: `2721`,
    4689: `2722`,
    469: `42`,
    4690: `2722`,
    4691: `2723`,
    4692: `2723`,
    4693: `2724`,
    4694: `2725`,
    4695: `2725`,
    4696: `2726`,
    4697: `2727`,
    4698: `2727`,
    4699: `2728`,
    47: `2`,
    470: `42`,
    4700: `2729`,
    4701: `2729`,
    4702: `2730`,
    4703: `2731`,
    4704: `2732`,
    4705: `2732`,
    4706: `2733`,
    4707: `2734`,
    4708: `2735`,
    4709: `2735`,
    471: `42`,
    4710: `2736`,
    4711: `2736`,
    4712: `2737`,
    4713: `2737`,
    4714: `2738`,
    4715: `2738`,
    4716: `2739`,
    4717: `2739`,
    4718: `2740`,
    4719: `2740`,
    472: `42`,
    4720: `2741`,
    4721: `2741`,
    4722: `2742`,
    4723: `2742`,
    4724: `2743`,
    4725: `2744`,
    4726: `2744`,
    4727: `2745`,
    4728: `2745`,
    4729: `2746`,
    473: `42`,
    4730: `2746`,
    4731: `2747`,
    4732: `2747`,
    4733: `2748`,
    4734: `2748`,
    4735: `2749`,
    4736: `2749`,
    4737: `2750`,
    4738: `2756`,
    4739: `2756`,
    474: `42`,
    4740: `2757`,
    4741: `2758`,
    4742: `2758`,
    4743: `2759`,
    4744: `2760`,
    4745: `2760`,
    4746: `2761`,
    4747: `2762`,
    4748: `2763`,
    4749: `2764`,
    475: `42`,
    4750: `2764`,
    4751: `2764`,
    4752: `2765`,
    4753: `2765`,
    4754: `2765`,
    4755: `2766`,
    4756: `2767`,
    4757: `2767`,
    4758: `2768`,
    4759: `2768`,
    476: `44`,
    4760: `2768`,
    4761: `2768`,
    4762: `2768`,
    4763: `2768`,
    4764: `2768`,
    4765: `2768`,
    4766: `2768`,
    4767: `2768`,
    4768: `2769`,
    4769: `2769`,
    477: `49`,
    4770: `2770`,
    4771: `2771`,
    4772: `2772`,
    4773: `2772`,
    4774: `2773`,
    4775: `2774`,
    4776: `2774`,
    4777: `2775`,
    4778: `2776`,
    4779: `2777`,
    478: `49`,
    4780: `2777`,
    4781: `2778`,
    4782: `2779`,
    4783: `2779`,
    4784: `2780`,
    4785: `2781`,
    4786: `2787`,
    4787: `2787`,
    4788: `2788`,
    4789: `2788`,
    479: `50`,
    4790: `2789`,
    4791: `2790`,
    4792: `2790`,
    4793: `2791`,
    4794: `2791`,
    4795: `2791`,
    4796: `2791`,
    4797: `2791`,
    4798: `2791`,
    4799: `2791`,
    48: `2`,
    480: `50`,
    4800: `2791`,
    4801: `2791`,
    4802: `2791`,
    4803: `2792`,
    4804: `2792`,
    4805: `2793`,
    4806: `2794`,
    4807: `2795`,
    4808: `2795`,
    4809: `2796`,
    481: `51`,
    4810: `2796`,
    4811: `2797`,
    4812: `2797`,
    4813: `2798`,
    4814: `2798`,
    4815: `2799`,
    4816: `2800`,
    4817: `2800`,
    4818: `2801`,
    4819: `2801`,
    482: `52`,
    4820: `2802`,
    4821: `2802`,
    4822: `2803`,
    4823: `2803`,
    4824: `2804`,
    4825: `2804`,
    4826: `2805`,
    4827: `2806`,
    4828: `2807`,
    4829: `2807`,
    483: `52`,
    4830: `2808`,
    4831: `2809`,
    4832: `2809`,
    4833: `2810`,
    4834: `2811`,
    4835: `2812`,
    4836: `2812`,
    4837: `2813`,
    4838: `2814`,
    4839: `2814`,
    484: `52`,
    4840: `2815`,
    4841: `2815`,
    4842: `2816`,
    4843: `2816`,
    4844: `2817`,
    4845: `2818`,
    4846: `2820`,
    4847: `2820`,
    4848: `2821`,
    4849: `2821`,
    485: `53`,
    4850: `2821`,
    4851: `2822`,
    4852: `2822`,
    4853: `2823`,
    4854: `2823`,
    4855: `2823`,
    4856: `2824`,
    4857: `2825`,
    4858: `2825`,
    4859: `2826`,
    486: `53`,
    4860: `2827`,
    4861: `2827`,
    4862: `2828`,
    4863: `2828`,
    4864: `2828`,
    4865: `2829`,
    4866: `2830`,
    4867: `2830`,
    4868: `2831`,
    4869: `2832`,
    487: `54`,
    4870: `2832`,
    4871: `2833`,
    4872: `2833`,
    4873: `2833`,
    4874: `2834`,
    4875: `2834`,
    4876: `2835`,
    4877: `2836`,
    4878: `2836`,
    4879: `2836`,
    488: `54`,
    4880: `2837`,
    4881: `2837`,
    4882: `2838`,
    4883: `2838`,
    4884: `2838`,
    4885: `2839`,
    4886: `2839`,
    4887: `2840`,
    4888: `2841`,
    4889: `2841`,
    489: `55`,
    4890: `2841`,
    4891: `2842`,
    4892: `2843`,
    4893: `2844`,
    4894: `2844`,
    4895: `2845`,
    4896: `2846`,
    4897: `2846`,
    4898: `2847`,
    4899: `2847`,
    49: `2`,
    490: `56`,
    4900: `2848`,
    4901: `2849`,
    4902: `2850`,
    4903: `2851`,
    4904: `2851`,
    4905: `2852`,
    4906: `2852`,
    4907: `2853`,
    4908: `2854`,
    4909: `2855`,
    491: `59`,
    4910: `2856`,
    4911: `2856`,
    4912: `2857`,
    4913: `2857`,
    4914: `2858`,
    4915: `2859`,
    4916: `2860`,
    4917: `2861`,
    4918: `2861`,
    4919: `2862`,
    492: `59`,
    4920: `2862`,
    4921: `2863`,
    4922: `2864`,
    4923: `2865`,
    4924: `2866`,
    4925: `2866`,
    4926: `2867`,
    4927: `2867`,
    4928: `2868`,
    4929: `2868`,
    493: `59`,
    4930: `2869`,
    4931: `2870`,
    4932: `2870`,
    4933: `2871`,
    4934: `2872`,
    4935: `2872`,
    4936: `2873`,
    4937: `2873`,
    4938: `2874`,
    4939: `2874`,
    494: `60`,
    4940: `2875`,
    4941: `2875`,
    4942: `2875`,
    4943: `2878`,
    4944: `2878`,
    4945: `2879`,
    4946: `2879`,
    4947: `2879`,
    4948: `2880`,
    4949: `2880`,
    495: `60`,
    4950: `2881`,
    4951: `2881`,
    4952: `2882`,
    4953: `2882`,
    4954: `2882`,
    4955: `2883`,
    4956: `2883`,
    4957: `2884`,
    4958: `2884`,
    4959: `2885`,
    496: `61`,
    4960: `2885`,
    4961: `2886`,
    4962: `2887`,
    4963: `2893`,
    4964: `2893`,
    4965: `2894`,
    4966: `2894`,
    4967: `2895`,
    4968: `2896`,
    4969: `2903`,
    497: `61`,
    4970: `2903`,
    4971: `2904`,
    4972: `2904`,
    4973: `2905`,
    4974: `2905`,
    4975: `2906`,
    4976: `2906`,
    4977: `2907`,
    4978: `2908`,
    4979: `2909`,
    498: `61`,
    4980: `2910`,
    4981: `2910`,
    4982: `2911`,
    4983: `2911`,
    4984: `2911`,
    4985: `2912`,
    4986: `2912`,
    4987: `2913`,
    4988: `2913`,
    4989: `2914`,
    499: `62`,
    4990: `2915`,
    4991: `2915`,
    4992: `2916`,
    4993: `2917`,
    4994: `2917`,
    4995: `2918`,
    4996: `2919`,
    4997: `2921`,
    4998: `2921`,
    4999: `2922`,
    5: `2`,
    50: `2`,
    500: `62`,
    5000: `2922`,
    5001: `2923`,
    5002: `2923`,
    5003: `2923`,
    5004: `2923`,
    5005: `2923`,
    5006: `2923`,
    5007: `2923`,
    5008: `2923`,
    5009: `2923`,
    501: `63`,
    5010: `2923`,
    5011: `2924`,
    5012: `2924`,
    5013: `2925`,
    5014: `2926`,
    5015: `2926`,
    5016: `2926`,
    5017: `2927`,
    5018: `2928`,
    5019: `2929`,
    502: `63`,
    5020: `2929`,
    5021: `2930`,
    5022: `2931`,
    5023: `2931`,
    5024: `2931`,
    5025: `2932`,
    5026: `2932`,
    5027: `2933`,
    5028: `2933`,
    5029: `2934`,
    503: `63`,
    5030: `2934`,
    5031: `2935`,
    5032: `2935`,
    5033: `2935`,
    5034: `2938`,
    5035: `2938`,
    5036: `2939`,
    5037: `2939`,
    5038: `2939`,
    5039: `2940`,
    504: `64`,
    5040: `2940`,
    5041: `2941`,
    5042: `2941`,
    5043: `2941`,
    5044: `2942`,
    5045: `2943`,
    5046: `2943`,
    5047: `2945`,
    5048: `2946`,
    5049: `2946`,
    505: `65`,
    5050: `2947`,
    5051: `2947`,
    5052: `2948`,
    5053: `2948`,
    5054: `2949`,
    5055: `2950`,
    5056: `2951`,
    5057: `2951`,
    5058: `2951`,
    5059: `2952`,
    506: `65`,
    5060: `2953`,
    5061: `2953`,
    5062: `2954`,
    5063: `2955`,
    5064: `2956`,
    5065: `2956`,
    5066: `2957`,
    5067: `2958`,
    5068: `2963`,
    5069: `2963`,
    507: `66`,
    5070: `2964`,
    5071: `2964`,
    5072: `2965`,
    5073: `2965`,
    5074: `2965`,
    5075: `2966`,
    5076: `2966`,
    5077: `2967`,
    5078: `2968`,
    5079: `2973`,
    508: `66`,
    5080: `2973`,
    5081: `2974`,
    5082: `2974`,
    5083: `2975`,
    5084: `2975`,
    5085: `2976`,
    5086: `2977`,
    5087: `2978`,
    5088: `2978`,
    5089: `2978`,
    509: `66`,
    5090: `2979`,
    5091: `2979`,
    5092: `2980`,
    5093: `2980`,
    5094: `2981`,
    5095: `2981`,
    5096: `2981`,
    5097: `2981`,
    5098: `2981`,
    5099: `2981`,
    51: `2`,
    510: `67`,
    5100: `2981`,
    5101: `2981`,
    5102: `2981`,
    5103: `2981`,
    5104: `2982`,
    5105: `2982`,
    5106: `2983`,
    5107: `2984`,
    5108: `2984`,
    5109: `2984`,
    511: `68`,
    5110: `2985`,
    5111: `2986`,
    5112: `2987`,
    5113: `2987`,
    5114: `2988`,
    5115: `2989`,
    5116: `2989`,
    5117: `2989`,
    5118: `2990`,
    5119: `2990`,
    512: `68`,
    5120: `2991`,
    5121: `2991`,
    5122: `2992`,
    5123: `2992`,
    5124: `2993`,
    5125: `2993`,
    5126: `2993`,
    5127: `2996`,
    5128: `2996`,
    5129: `2997`,
    513: `69`,
    5130: `2997`,
    5131: `2997`,
    5132: `2998`,
    5133: `2999`,
    5134: `2999`,
    5135: `3000`,
    5136: `3000`,
    5137: `3001`,
    5138: `3002`,
    5139: `3008`,
    514: `69`,
    5140: `3009`,
    5141: `3009`,
    5142: `3010`,
    5143: `3011`,
    5144: `3011`,
    5145: `3012`,
    5146: `3013`,
    5147: `3013`,
    5148: `3013`,
    5149: `3014`,
    515: `69`,
    5150: `3015`,
    5151: `3015`,
    5152: `3016`,
    5153: `3017`,
    5154: `3018`,
    5155: `3018`,
    5156: `3019`,
    5157: `3020`,
    5158: `3025`,
    5159: `3025`,
    516: `70`,
    5160: `3026`,
    5161: `3026`,
    5162: `3027`,
    5163: `3027`,
    5164: `3027`,
    5165: `3028`,
    5166: `3028`,
    5167: `3029`,
    5168: `3030`,
    5169: `3035`,
    517: `71`,
    5170: `3036`,
    5171: `3037`,
    5172: `3037`,
    5173: `3038`,
    5174: `3039`,
    5175: `3039`,
    5176: `3039`,
    5177: `3040`,
    5178: `3040`,
    5179: `3041`,
    518: `71`,
    5180: `3041`,
    5181: `3042`,
    5182: `3042`,
    5183: `3042`,
    5184: `3042`,
    5185: `3042`,
    5186: `3042`,
    5187: `3042`,
    5188: `3042`,
    5189: `3042`,
    519: `72`,
    5190: `3042`,
    5191: `3043`,
    5192: `3043`,
    5193: `3044`,
    5194: `3045`,
    5195: `3045`,
    5196: `3045`,
    5197: `3046`,
    5198: `3047`,
    5199: `3048`,
    52: `2`,
    520: `72`,
    5200: `3048`,
    5201: `3049`,
    5202: `3050`,
    5203: `3050`,
    5204: `3050`,
    5205: `3051`,
    5206: `3051`,
    5207: `3052`,
    5208: `3052`,
    5209: `3053`,
    521: `73`,
    5210: `3053`,
    5211: `3054`,
    5212: `3054`,
    5213: `3054`,
    5214: `3057`,
    5215: `3057`,
    5216: `3057`,
    5217: `3057`,
    5218: `3057`,
    5219: `3057`,
    522: `74`,
    5220: `3057`,
    5221: `3057`,
    5222: `3057`,
    5223: `3057`,
    5224: `3057`,
    5225: `3057`,
    5226: `3057`,
    5227: `3057`,
    5228: `3057`,
    5229: `3057`,
    523: `75`,
    5230: `3057`,
    5231: `3057`,
    5232: `3057`,
    5233: `3057`,
    5234: `3057`,
    5235: `3057`,
    5236: `3057`,
    5237: `3057`,
    5238: `3057`,
    5239: `3057`,
    524: `76`,
    5240: `3057`,
    5241: `3057`,
    5242: `3057`,
    5243: `3057`,
    5244: `3057`,
    5245: `3057`,
    5246: `3057`,
    5247: `3057`,
    5248: `3057`,
    5249: `3058`,
    525: `76`,
    5250: `3059`,
    5251: `3060`,
    5252: `3060`,
    5253: `3061`,
    5254: `3062`,
    5255: `3068`,
    5256: `3069`,
    5257: `3070`,
    5258: `3070`,
    5259: `3071`,
    526: `78`,
    5260: `3072`,
    5261: `3072`,
    5262: `3072`,
    5263: `3073`,
    5264: `3074`,
    5265: `3074`,
    5266: `3075`,
    5267: `3075`,
    5268: `3075`,
    5269: `3075`,
    527: `78`,
    5270: `3075`,
    5271: `3075`,
    5272: `3075`,
    5273: `3075`,
    5274: `3075`,
    5275: `3075`,
    5276: `3076`,
    5277: `3076`,
    5278: `3077`,
    5279: `3078`,
    528: `79`,
    5280: `3079`,
    5281: `3079`,
    5282: `3080`,
    5283: `3080`,
    5284: `3081`,
    5285: `3081`,
    5286: `3082`,
    5287: `3082`,
    5288: `3083`,
    5289: `3083`,
    529: `80`,
    5290: `3083`,
    5291: `3086`,
    5292: `3086`,
    5293: `3087`,
    5294: `3087`,
    5295: `3087`,
    5296: `3088`,
    5297: `3088`,
    5298: `3089`,
    5299: `3089`,
    53: `2`,
    530: `81`,
    5300: `3090`,
    5301: `3090`,
    5302: `3090`,
    5303: `3091`,
    5304: `3091`,
    5305: `3092`,
    5306: `3092`,
    5307: `3093`,
    5308: `3093`,
    5309: `3094`,
    531: `84`,
    5310: `3095`,
    5311: `3101`,
    5312: `3101`,
    5313: `3103`,
    5314: `3104`,
    5315: `3104`,
    5316: `3105`,
    5317: `3106`,
    5318: `3106`,
    5319: `3107`,
    532: `84`,
    5320: `3108`,
    5321: `3108`,
    5322: `3108`,
    5323: `3109`,
    5324: `3109`,
    5325: `3109`,
    5326: `3110`,
    5327: `3111`,
    5328: `3111`,
    5329: `3112`,
    533: `84`,
    5330: `3112`,
    5331: `3113`,
    5332: `3114`,
    5333: `3120`,
    5334: `3120`,
    5335: `3121`,
    5336: `3121`,
    5337: `3122`,
    5338: `3122`,
    5339: `3122`,
    534: `84`,
    5340: `3122`,
    5341: `3122`,
    5342: `3122`,
    5343: `3122`,
    5344: `3122`,
    5345: `3122`,
    5346: `3122`,
    5347: `3123`,
    5348: `3123`,
    5349: `3124`,
    535: `84`,
    5350: `3125`,
    5351: `3125`,
    5352: `3125`,
    5353: `3126`,
    5354: `3127`,
    5355: `3128`,
    5356: `3128`,
    5357: `3129`,
    5358: `3130`,
    5359: `3130`,
    536: `84`,
    5360: `3130`,
    5361: `3131`,
    5362: `3131`,
    5363: `3132`,
    5364: `3133`,
    5365: `3134`,
    5366: `3134`,
    5367: `3135`,
    5368: `3136`,
    5369: `3136`,
    537: `85`,
    5370: `3137`,
    5371: `3137`,
    5372: `3138`,
    5373: `3139`,
    5374: `3139`,
    5375: `3139`,
    5376: `3140`,
    5377: `3140`,
    5378: `3140`,
    5379: `3142`,
    538: `85`,
    5380: `3143`,
    5381: `3144`,
    5382: `3144`,
    5383: `3145`,
    5384: `3146`,
    5385: `3146`,
    5386: `3147`,
    5387: `3148`,
    5388: `3148`,
    5389: `3149`,
    539: `86`,
    5390: `3150`,
    5391: `3150`,
    5392: `3151`,
    5393: `3152`,
    5394: `3152`,
    5395: `3152`,
    5396: `3153`,
    5397: `3153`,
    5398: `3153`,
    5399: `3154`,
    54: `2`,
    540: `87`,
    5400: `3154`,
    5401: `3155`,
    5402: `3156`,
    5403: `3156`,
    5404: `3156`,
    5405: `3157`,
    5406: `3157`,
    5407: `3157`,
    5408: `3158`,
    5409: `3158`,
    541: `89`,
    5410: `3159`,
    5411: `3159`,
    5412: `3160`,
    5413: `3161`,
    5414: `3161`,
    5415: `3162`,
    5416: `3163`,
    5417: `3163`,
    5418: `3164`,
    5419: `3165`,
    542: `89`,
    5420: `3167`,
    5421: `3167`,
    5422: `3168`,
    5423: `3168`,
    5424: `3169`,
    5425: `3169`,
    5426: `3169`,
    5427: `3172`,
    5428: `3172`,
    5429: `3173`,
    543: `90`,
    5430: `3173`,
    5431: `3173`,
    5432: `3174`,
    5433: `3174`,
    5434: `3175`,
    5435: `3175`,
    5436: `3176`,
    5437: `3176`,
    5438: `3176`,
    5439: `3177`,
    544: `95`,
    5440: `3177`,
    5441: `3178`,
    5442: `3178`,
    5443: `3179`,
    5444: `3179`,
    5445: `3179`,
    5446: `3180`,
    5447: `3180`,
    5448: `3181`,
    5449: `3181`,
    545: `96`,
    5450: `3182`,
    5451: `3182`,
    5452: `3183`,
    5453: `3184`,
    5454: `3190`,
    5455: `3190`,
    5456: `3191`,
    5457: `3191`,
    5458: `3192`,
    5459: `3193`,
    546: `97`,
    5460: `3199`,
    5461: `3199`,
    5462: `3201`,
    5463: `3202`,
    5464: `3202`,
    5465: `3203`,
    5466: `3204`,
    5467: `3204`,
    5468: `3205`,
    5469: `3206`,
    547: `97`,
    5470: `3206`,
    5471: `3206`,
    5472: `3207`,
    5473: `3207`,
    5474: `3207`,
    5475: `3208`,
    5476: `3209`,
    5477: `3209`,
    5478: `3210`,
    5479: `3210`,
    548: `100`,
    5480: `3211`,
    5481: `3212`,
    5482: `3218`,
    5483: `3218`,
    5484: `3219`,
    5485: `3219`,
    5486: `3220`,
    5487: `3221`,
    5488: `3221`,
    5489: `3222`,
    549: `100`,
    5490: `3222`,
    5491: `3224`,
    5492: `3225`,
    5493: `3225`,
    5494: `3226`,
    5495: `3226`,
    5496: `3227`,
    5497: `3227`,
    5498: `3228`,
    5499: `3229`,
    55: `2`,
    550: `101`,
    5500: `3230`,
    5501: `3230`,
    5502: `3230`,
    5503: `3231`,
    5504: `3231`,
    5505: `3231`,
    5506: `3232`,
    5507: `3233`,
    5508: `3233`,
    5509: `3234`,
    551: `101`,
    5510: `3234`,
    5511: `3235`,
    5512: `3236`,
    5513: `3242`,
    5514: `3243`,
    5515: `3244`,
    5516: `3244`,
    5517: `3245`,
    5518: `3246`,
    5519: `3246`,
    552: `102`,
    5520: `3247`,
    5521: `3247`,
    5522: `3248`,
    5523: `3249`,
    5524: `3249`,
    5525: `3249`,
    5526: `3250`,
    5527: `3250`,
    5528: `3250`,
    5529: `3252`,
    553: `103`,
    5530: `3253`,
    5531: `3254`,
    5532: `3254`,
    5533: `3255`,
    5534: `3256`,
    5535: `3256`,
    5536: `3257`,
    5537: `3258`,
    5538: `3258`,
    5539: `3259`,
    554: `104`,
    5540: `3260`,
    5541: `3260`,
    5542: `3261`,
    5543: `3262`,
    5544: `3262`,
    5545: `3262`,
    5546: `3263`,
    5547: `3263`,
    5548: `3263`,
    5549: `3264`,
    555: `104`,
    5550: `3264`,
    5551: `3265`,
    5552: `3266`,
    5553: `3266`,
    5554: `3266`,
    5555: `3267`,
    5556: `3267`,
    5557: `3267`,
    5558: `3268`,
    5559: `3268`,
    556: `104`,
    5560: `3269`,
    5561: `3269`,
    5562: `3270`,
    5563: `3271`,
    5564: `3271`,
    5565: `3272`,
    5566: `3273`,
    5567: `3273`,
    5568: `3274`,
    5569: `3275`,
    557: `105`,
    5570: `3277`,
    5571: `3277`,
    5572: `3278`,
    5573: `3278`,
    5574: `3279`,
    5575: `3280`,
    5576: `3280`,
    5577: `3280`,
    5578: `3281`,
    5579: `3281`,
    558: `105`,
    5580: `3282`,
    5581: `3282`,
    5582: `3283`,
    5583: `3283`,
    5584: `3284`,
    5585: `3284`,
    5586: `3285`,
    5587: `3286`,
    5588: `3287`,
    5589: `3287`,
    559: `106`,
    5590: `3288`,
    5591: `3288`,
    5592: `3288`,
    5593: `3289`,
    5594: `3289`,
    5595: `3290`,
    5596: `3290`,
    5597: `3291`,
    5598: `3292`,
    5599: `3292`,
    56: `2`,
    560: `107`,
    5600: `3293`,
    5601: `3294`,
    5602: `3294`,
    5603: `3295`,
    5604: `3296`,
    5605: `3298`,
    5606: `3298`,
    5607: `3299`,
    5608: `3299`,
    5609: `3300`,
    561: `108`,
    5610: `3300`,
    5611: `3300`,
    5612: `3300`,
    5613: `3300`,
    5614: `3300`,
    5615: `3300`,
    5616: `3300`,
    5617: `3300`,
    5618: `3300`,
    5619: `3301`,
    562: `108`,
    5620: `3301`,
    5621: `3302`,
    5622: `3303`,
    5623: `3303`,
    5624: `3303`,
    5625: `3304`,
    5626: `3305`,
    5627: `3306`,
    5628: `3306`,
    5629: `3307`,
    563: `109`,
    5630: `3308`,
    5631: `3308`,
    5632: `3308`,
    5633: `3309`,
    5634: `3309`,
    5635: `3310`,
    5636: `3310`,
    5637: `3311`,
    5638: `3311`,
    5639: `3312`,
    564: `109`,
    5640: `3312`,
    5641: `3312`,
    5642: `3315`,
    5643: `3315`,
    5644: `3316`,
    5645: `3316`,
    5646: `3317`,
    5647: `3318`,
    5648: `3318`,
    5649: `3318`,
    565: `109`,
    5650: `3319`,
    5651: `3319`,
    5652: `3320`,
    5653: `3320`,
    5654: `3321`,
    5655: `3322`,
    5656: `3325`,
    5657: `3325`,
    5658: `3325`,
    5659: `3326`,
    566: `109`,
    5660: `3326`,
    5661: `3328`,
    5662: `3329`,
    5663: `3329`,
    5664: `3330`,
    5665: `3330`,
    5666: `3331`,
    5667: `3331`,
    5668: `3332`,
    5669: `3332`,
    567: `109`,
    5670: `3333`,
    5671: `3334`,
    5672: `3335`,
    5673: `3336`,
    5674: `3336`,
    5675: `3336`,
    5676: `3337`,
    5677: `3337`,
    5678: `3337`,
    5679: `3338`,
    568: `109`,
    5680: `3338`,
    5681: `3339`,
    5682: `3339`,
    5683: `3339`,
    5684: `3342`,
    5685: `3343`,
    5686: `3344`,
    5687: `3344`,
    5688: `3344`,
    5689: `3345`,
    569: `110`,
    5690: `3345`,
    5691: `3346`,
    5692: `3346`,
    5693: `3347`,
    5694: `3348`,
    5695: `3349`,
    5696: `3349`,
    5697: `3350`,
    5698: `3351`,
    5699: `3352`,
    57: `2`,
    570: `110`,
    5700: `3353`,
    5701: `3353`,
    5702: `3354`,
    5703: `3354`,
    5704: `3354`,
    5705: `3357`,
    5706: `3357`,
    5707: `3358`,
    5708: `3358`,
    5709: `3359`,
    571: `111`,
    5710: `3360`,
    5711: `3360`,
    5712: `3360`,
    5713: `3361`,
    5714: `3361`,
    5715: `3362`,
    5716: `3362`,
    5717: `3363`,
    5718: `3364`,
    5719: `3367`,
    572: `112`,
    5720: `3367`,
    5721: `3367`,
    5722: `3368`,
    5723: `3368`,
    5724: `3370`,
    5725: `3371`,
    5726: `3371`,
    5727: `3372`,
    5728: `3373`,
    5729: `3373`,
    573: `113`,
    5730: `3374`,
    5731: `3375`,
    5732: `3375`,
    5733: `3375`,
    5734: `3376`,
    5735: `3376`,
    5736: `3376`,
    5737: `3377`,
    5738: `3377`,
    5739: `3378`,
    574: `115`,
    5740: `3378`,
    5741: `3378`,
    5742: `3381`,
    5743: `3381`,
    5744: `3382`,
    5745: `3382`,
    5746: `3383`,
    5747: `3384`,
    5748: `3384`,
    5749: `3384`,
    575: `115`,
    5750: `3385`,
    5751: `3385`,
    5752: `3386`,
    5753: `3386`,
    5754: `3387`,
    5755: `3388`,
    5756: `3391`,
    5757: `3391`,
    5758: `3391`,
    5759: `3392`,
    576: `116`,
    5760: `3392`,
    5761: `3393`,
    5762: `3394`,
    5763: `3394`,
    5764: `3395`,
    5765: `3395`,
    5766: `3395`,
    5767: `3398`,
    5768: `3399`,
    5769: `3400`,
    577: `116`,
    5770: `3400`,
    5771: `3401`,
    5772: `3401`,
    5773: `3402`,
    5774: `3402`,
    5775: `3403`,
    5776: `3404`,
    5777: `3405`,
    5778: `3405`,
    5779: `3406`,
    578: `116`,
    5780: `3407`,
    5781: `3408`,
    5782: `3409`,
    5783: `3409`,
    5784: `3410`,
    5785: `3410`,
    5786: `3410`,
    5787: `3413`,
    5788: `3414`,
    5789: `3415`,
    579: `119`,
    5790: `3415`,
    5791: `3415`,
    5792: `3416`,
    5793: `3416`,
    5794: `3417`,
    5795: `3418`,
    5796: `3418`,
    5797: `3418`,
    5798: `3419`,
    5799: `3420`,
    58: `2`,
    580: `120`,
    5800: `3421`,
    5801: `3422`,
    5802: `3422`,
    5803: `3423`,
    5804: `3423`,
    5805: `3423`,
    5806: `3426`,
    5807: `3426`,
    5808: `3426`,
    5809: `3426`,
    581: `120`,
    5810: `3426`,
    5811: `3426`,
    5812: `3426`,
    5813: `3426`,
    5814: `3426`,
    5815: `3426`,
    5816: `3426`,
    5817: `3426`,
    5818: `3426`,
    5819: `3426`,
    582: `121`,
    5820: `3426`,
    5821: `3426`,
    5822: `3426`,
    5823: `3426`,
    5824: `3426`,
    5825: `3426`,
    5826: `3426`,
    5827: `3426`,
    5828: `3426`,
    5829: `3426`,
    583: `121`,
    5830: `3426`,
    5831: `3426`,
    5832: `3426`,
    5833: `3426`,
    5834: `3426`,
    5835: `3426`,
    5836: `3426`,
    5837: `3426`,
    5838: `3426`,
    5839: `3426`,
    584: `121`,
    5840: `3426`,
    5841: `3426`,
    5842: `3426`,
    5843: `3426`,
    5844: `3426`,
    5845: `3426`,
    5846: `3426`,
    5847: `3426`,
    5848: `3426`,
    5849: `3426`,
    585: `121`,
    5850: `3426`,
    5851: `3426`,
    5852: `3426`,
    5853: `3426`,
    5854: `3426`,
    5855: `3426`,
    5856: `3426`,
    5857: `3426`,
    5858: `3426`,
    5859: `3426`,
    586: `121`,
    5860: `3426`,
    5861: `3426`,
    5862: `3426`,
    5863: `3426`,
    5864: `3426`,
    5865: `3426`,
    5866: `3426`,
    5867: `3426`,
    5868: `3426`,
    5869: `3426`,
    587: `121`,
    5870: `3426`,
    5871: `3426`,
    5872: `3426`,
    5873: `3426`,
    5874: `3426`,
    5875: `3426`,
    5876: `3426`,
    5877: `3426`,
    5878: `3426`,
    5879: `3426`,
    588: `121`,
    5880: `3426`,
    5881: `3426`,
    5882: `3426`,
    5883: `3426`,
    5884: `3426`,
    5885: `3426`,
    5886: `3426`,
    5887: `3426`,
    5888: `3426`,
    5889: `3426`,
    589: `121`,
    5890: `3426`,
    5891: `3426`,
    5892: `3426`,
    5893: `3426`,
    5894: `3426`,
    5895: `3426`,
    5896: `3426`,
    5897: `3426`,
    5898: `3426`,
    5899: `3426`,
    59: `2`,
    590: `121`,
    5900: `3426`,
    5901: `3426`,
    5902: `3426`,
    5903: `3426`,
    5904: `3426`,
    5905: `3426`,
    5906: `3426`,
    5907: `3426`,
    5908: `3426`,
    5909: `3426`,
    591: `121`,
    5910: `3426`,
    5911: `3426`,
    5912: `3426`,
    5913: `3426`,
    5914: `3426`,
    5915: `3426`,
    5916: `3426`,
    5917: `3426`,
    5918: `3426`,
    5919: `3426`,
    592: `122`,
    5920: `3426`,
    5921: `3426`,
    5922: `3426`,
    5923: `3426`,
    5924: `3426`,
    5925: `3426`,
    5926: `3426`,
    5927: `3426`,
    5928: `3426`,
    5929: `3426`,
    593: `122`,
    5930: `3426`,
    5931: `3426`,
    5932: `3426`,
    5933: `3426`,
    5934: `3426`,
    5935: `3426`,
    5936: `3426`,
    5937: `3426`,
    5938: `3426`,
    5939: `3426`,
    594: `123`,
    5940: `3426`,
    5941: `3426`,
    5942: `3426`,
    5943: `3426`,
    5944: `3426`,
    5945: `3426`,
    5946: `3426`,
    5947: `3426`,
    5948: `3426`,
    5949: `3426`,
    595: `124`,
    5950: `3426`,
    5951: `3426`,
    5952: `3426`,
    5953: `3426`,
    5954: `3426`,
    5955: `3426`,
    5956: `3426`,
    5957: `3426`,
    5958: `3426`,
    5959: `3426`,
    596: `125`,
    5960: `3426`,
    5961: `3426`,
    5962: `3426`,
    5963: `3426`,
    5964: `3426`,
    5965: `3426`,
    5966: `3426`,
    5967: `3426`,
    5968: `3426`,
    5969: `3426`,
    597: `125`,
    5970: `3426`,
    5971: `3426`,
    5972: `3426`,
    5973: `3426`,
    5974: `3426`,
    5975: `3426`,
    5976: `3426`,
    5977: `3426`,
    5978: `3426`,
    5979: `3427`,
    598: `126`,
    5980: `3427`,
    5981: `3428`,
    5982: `3428`,
    5983: `3428`,
    5984: `3431`,
    5985: `3431`,
    5986: `3432`,
    5987: `3432`,
    5988: `3433`,
    5989: `3434`,
    599: `126`,
    5990: `3434`,
    5991: `3434`,
    5992: `3435`,
    5993: `3435`,
    5994: `3436`,
    5995: `3436`,
    5996: `3437`,
    5997: `3438`,
    5998: `3441`,
    5999: `3441`,
    6: `2`,
    60: `2`,
    600: `127`,
    6000: `3441`,
    6001: `3442`,
    6002: `3442`,
    6003: `3443`,
    6004: `3443`,
    6005: `3443`,
    6006: `3444`,
    6007: `3445`,
    6008: `3445`,
    6009: `3446`,
    601: `127`,
    6010: `3446`,
    6011: `3447`,
    6012: `3447`,
    6013: `3447`,
    6014: `3450`,
    6015: `3450`,
    6016: `3451`,
    6017: `3451`,
    6018: `3452`,
    6019: `3453`,
    602: `129`,
    6020: `3453`,
    6021: `3453`,
    6022: `3454`,
    6023: `3454`,
    6024: `3455`,
    6025: `3455`,
    6026: `3456`,
    6027: `3457`,
    6028: `3460`,
    6029: `3460`,
    603: `129`,
    6030: `3460`,
    6031: `3461`,
    6032: `3461`,
    6033: `3462`,
    6034: `3462`,
    6035: `3462`,
    6036: `3463`,
    6037: `3464`,
    6038: `3464`,
    6039: `3465`,
    604: `130`,
    6040: `3465`,
    6041: `3466`,
    6042: `3466`,
    6043: `3466`,
    6044: `3469`,
    6045: `3469`,
    6046: `3470`,
    6047: `3470`,
    6048: `3471`,
    6049: `3472`,
    605: `130`,
    6050: `3472`,
    6051: `3472`,
    6052: `3473`,
    6053: `3473`,
    6054: `3474`,
    6055: `3474`,
    6056: `3475`,
    6057: `3476`,
    6058: `3479`,
    6059: `3479`,
    606: `130`,
    6060: `3479`,
    6061: `3480`,
    6062: `3480`,
    6063: `3481`,
    6064: `3481`,
    6065: `3482`,
    6066: `3482`,
    6067: `3482`,
    6068: `3485`,
    6069: `3486`,
    607: `131`,
    6070: `3487`,
    6071: `3487`,
    6072: `3487`,
    6073: `3488`,
    6074: `3488`,
    6075: `3489`,
    6076: `3489`,
    6077: `3490`,
    6078: `3491`,
    6079: `3492`,
    608: `131`,
    6080: `3492`,
    6081: `3493`,
    6082: `3494`,
    6083: `3495`,
    6084: `3496`,
    6085: `3496`,
    6086: `3497`,
    6087: `3497`,
    6088: `3497`,
    6089: `3500`,
    609: `131`,
    6090: `3501`,
    6091: `3502`,
    6092: `3502`,
    6093: `3502`,
    6094: `3503`,
    6095: `3503`,
    6096: `3504`,
    6097: `3504`,
    6098: `3505`,
    6099: `3506`,
    61: `2`,
    610: `132`,
    6100: `3506`,
    6101: `3507`,
    6102: `3508`,
    6103: `3509`,
    6104: `3509`,
    6105: `3510`,
    6106: `3511`,
    6107: `3512`,
    6108: `3513`,
    6109: `3513`,
    611: `132`,
    6110: `3514`,
    6111: `3514`,
    6112: `3514`,
    6113: `3517`,
    6114: `3518`,
    6115: `3521`,
    6116: `3521`,
    6117: `3521`,
    6118: `3524`,
    6119: `3525`,
    612: `132`,
    6120: `3528`,
    6121: `3528`,
    6122: `3528`,
    6123: `3531`,
    6124: `3532`,
    6125: `3535`,
    6126: `3535`,
    6127: `3535`,
    6128: `3538`,
    6129: `3539`,
    613: `135`,
    6130: `3542`,
    6131: `3542`,
    6132: `3542`,
    6133: `3545`,
    6134: `3545`,
    6135: `3546`,
    6136: `3547`,
    6137: `3548`,
    6138: `3548`,
    6139: `3549`,
    614: `135`,
    6140: `3549`,
    6141: `3550`,
    6142: `3550`,
    6143: `3550`,
    6144: `3551`,
    6145: `3551`,
    6146: `3552`,
    6147: `3552`,
    6148: `3552`,
    6149: `3552`,
    615: `136`,
    6150: `3552`,
    6151: `3552`,
    6152: `3553`,
    6153: `3553`,
    6154: `3554`,
    6155: `3555`,
    6156: `3556`,
    6157: `3556`,
    6158: `3557`,
    6159: `3558`,
    616: `136`,
    6160: `3560`,
    6161: `3560`,
    6162: `3561`,
    6163: `3561`,
    6164: `3561`,
    6165: `3562`,
    6166: `3562`,
    6167: `3563`,
    6168: `3563`,
    6169: `3563`,
    617: `137`,
    6170: `3564`,
    6171: `3565`,
    6172: `3565`,
    6173: `3566`,
    6174: `3567`,
    6175: `3568`,
    6176: `3569`,
    6177: `3569`,
    6178: `3570`,
    6179: `3570`,
    618: `138`,
    6180: `3570`,
    6181: `3571`,
    6182: `3572`,
    6183: `3577`,
    6184: `3578`,
    6185: `3578`,
    6186: `3578`,
    6187: `3581`,
    6188: `3581`,
    6189: `3582`,
    619: `141`,
    6190: `3582`,
    6191: `3582`,
    6192: `3583`,
    6193: `3583`,
    6194: `3584`,
    6195: `3584`,
    6196: `3585`,
    6197: `3585`,
    6198: `3585`,
    6199: `3586`,
    62: `2`,
    620: `142`,
    6200: `3587`,
    6201: `3587`,
    6202: `3588`,
    6203: `3589`,
    6204: `3590`,
    6205: `3590`,
    6206: `3591`,
    6207: `3592`,
    6208: `3592`,
    6209: `3593`,
    621: `143`,
    6210: `3593`,
    6211: `3594`,
    6212: `3594`,
    6213: `3595`,
    6214: `3595`,
    6215: `3595`,
    6216: `3596`,
    6217: `3597`,
    6218: `3598`,
    6219: `3598`,
    622: `143`,
    6220: `3599`,
    6221: `3599`,
    6222: `3600`,
    6223: `3601`,
    6224: `3601`,
    6225: `3602`,
    6226: `3603`,
    6227: `3603`,
    6228: `3604`,
    6229: `3605`,
    623: `144`,
    6230: `3605`,
    6231: `3606`,
    6232: `3607`,
    6233: `3608`,
    6234: `3608`,
    6235: `3609`,
    6236: `3610`,
    6237: `3611`,
    6238: `3611`,
    6239: `3612`,
    624: `144`,
    6240: `3612`,
    6241: `3613`,
    6242: `3613`,
    6243: `3614`,
    6244: `3614`,
    6245: `3615`,
    6246: `3616`,
    6247: `3618`,
    6248: `3618`,
    6249: `3619`,
    625: `145`,
    6250: `3619`,
    6251: `3619`,
    6252: `3619`,
    6253: `3619`,
    6254: `3619`,
    6255: `3620`,
    6256: `3620`,
    6257: `3621`,
    6258: `3621`,
    6259: `3622`,
    626: `145`,
    6260: `3623`,
    6261: `3623`,
    6262: `3624`,
    6263: `3624`,
    6264: `3625`,
    6265: `3626`,
    6266: `3626`,
    6267: `3627`,
    6268: `3627`,
    6269: `3628`,
    627: `146`,
    6270: `3629`,
    6271: `3629`,
    6272: `3630`,
    6273: `3633`,
    6274: `3633`,
    6275: `3634`,
    6276: `3635`,
    6277: `3635`,
    6278: `3636`,
    6279: `3637`,
    628: `146`,
    6280: `3637`,
    6281: `3638`,
    6282: `3639`,
    6283: `3640`,
    6284: `3641`,
    6285: `3641`,
    6286: `3641`,
    6287: `3642`,
    6288: `3642`,
    6289: `3642`,
    629: `147`,
    6290: `3643`,
    6291: `3644`,
    6292: `3644`,
    6293: `3645`,
    6294: `3645`,
    6295: `3645`,
    6296: `3645`,
    6297: `3645`,
    6298: `3645`,
    6299: `3645`,
    63: `2`,
    630: `147`,
    6300: `3645`,
    6301: `3645`,
    6302: `3645`,
    6303: `3646`,
    6304: `3646`,
    6305: `3647`,
    6306: `3648`,
    6307: `3649`,
    6308: `3649`,
    6309: `3650`,
    631: `148`,
    6310: `3651`,
    6311: `3651`,
    6312: `3652`,
    6313: `3653`,
    6314: `3654`,
    6315: `3654`,
    6316: `3655`,
    6317: `3655`,
    6318: `3656`,
    6319: `3656`,
    632: `148`,
    6320: `3656`,
    6321: `3657`,
    6322: `3658`,
    6323: `3658`,
    6324: `3659`,
    6325: `3659`,
    6326: `3659`,
    6327: `3660`,
    6328: `3660`,
    6329: `3661`,
    633: `149`,
    6330: `3661`,
    6331: `3662`,
    6332: `3662`,
    6333: `3662`,
    6334: `3663`,
    6335: `3663`,
    6336: `3664`,
    6337: `3664`,
    6338: `3665`,
    6339: `3665`,
    634: `149`,
    6340: `3665`,
    6341: `3666`,
    6342: `3666`,
    6343: `3667`,
    6344: `3667`,
    6345: `3668`,
    6346: `3669`,
    6347: `3670`,
    6348: `3670`,
    6349: `3671`,
    635: `150`,
    6350: `3672`,
    6351: `3673`,
    6352: `3674`,
    6353: `3674`,
    6354: `3674`,
    6355: `3675`,
    6356: `3675`,
    6357: `3676`,
    6358: `3676`,
    6359: `3677`,
    636: `152`,
    6360: `3677`,
    6361: `3678`,
    6362: `3679`,
    6363: `3679`,
    6364: `3679`,
    6365: `3680`,
    6366: `3681`,
    6367: `3681`,
    6368: `3683`,
    6369: `3683`,
    637: `152`,
    6370: `3684`,
    6371: `3684`,
    6372: `3685`,
    6373: `3686`,
    6374: `3687`,
    6375: `3688`,
    6376: `3688`,
    6377: `3689`,
    6378: `3689`,
    6379: `3690`,
    638: `152`,
    6380: `3691`,
    6381: `3692`,
    6382: `3695`,
    6383: `3696`,
    6384: `3696`,
    6385: `3697`,
    6386: `3698`,
    6387: `3701`,
    6388: `3701`,
    6389: `3702`,
    639: `152`,
    6390: `3702`,
    6391: `3703`,
    6392: `3703`,
    6393: `3704`,
    6394: `3705`,
    6395: `3706`,
    6396: `3707`,
    6397: `3708`,
    6398: `3708`,
    6399: `3709`,
    64: `2`,
    640: `153`,
    6400: `3710`,
    6401: `3710`,
    6402: `3711`,
    6403: `3711`,
    6404: `3712`,
    6405: `3712`,
    6406: `3713`,
    6407: `3714`,
    6408: `3715`,
    6409: `3716`,
    641: `153`,
    6410: `3716`,
    6411: `3717`,
    6412: `3717`,
    6413: `3718`,
    6414: `3719`,
    6415: `3719`,
    6416: `3720`,
    6417: `3721`,
    6418: `3721`,
    6419: `3722`,
    642: `153`,
    6420: `3723`,
    6421: `3723`,
    6422: `3724`,
    6423: `3725`,
    6424: `3726`,
    6425: `3727`,
    6426: `3728`,
    6427: `3728`,
    6428: `3729`,
    6429: `3730`,
    643: `154`,
    6430: `3730`,
    6431: `3731`,
    6432: `3731`,
    6433: `3731`,
    6434: `3732`,
    6435: `3733`,
    6436: `3734`,
    6437: `3734`,
    6438: `3735`,
    6439: `3735`,
    644: `154`,
    6440: `3736`,
    6441: `3736`,
    6442: `3737`,
    6443: `3737`,
    6444: `3739`,
    6445: `3739`,
    6446: `3740`,
    6447: `3740`,
    6448: `3741`,
    6449: `3741`,
    645: `154`,
    6450: `3742`,
    6451: `3742`,
    6452: `3744`,
    6453: `3745`,
    6454: `3745`,
    6455: `3746`,
    6456: `3746`,
    6457: `3747`,
    6458: `3747`,
    6459: `3748`,
    646: `156`,
    6460: `3748`,
    6461: `3750`,
    6462: `3750`,
    6463: `3751`,
    6464: `3751`,
    6465: `3752`,
    6466: `3756`,
    6467: `3756`,
    6468: `3757`,
    6469: `3758`,
    647: `157`,
    6470: `3758`,
    6471: `3759`,
    6472: `3760`,
    6473: `3760`,
    6474: `3761`,
    6475: `3762`,
    6476: `3763`,
    6477: `3764`,
    6478: `3764`,
    6479: `3764`,
    648: `157`,
    6480: `3765`,
    6481: `3765`,
    6482: `3765`,
    6483: `3766`,
    6484: `3767`,
    6485: `3767`,
    6486: `3768`,
    6487: `3768`,
    6488: `3768`,
    6489: `3768`,
    649: `158`,
    6490: `3768`,
    6491: `3768`,
    6492: `3768`,
    6493: `3768`,
    6494: `3768`,
    6495: `3768`,
    6496: `3769`,
    6497: `3769`,
    6498: `3770`,
    6499: `3771`,
    65: `2`,
    650: `158`,
    6500: `3772`,
    6501: `3772`,
    6502: `3773`,
    6503: `3774`,
    6504: `3774`,
    6505: `3775`,
    6506: `3776`,
    6507: `3777`,
    6508: `3777`,
    6509: `3778`,
    651: `159`,
    6510: `3779`,
    6511: `3779`,
    6512: `3780`,
    6513: `3781`,
    6514: `3786`,
    6515: `3787`,
    6516: `3788`,
    6517: `3788`,
    6518: `3789`,
    6519: `3790`,
    652: `159`,
    6520: `3790`,
    6521: `3791`,
    6522: `3791`,
    6523: `3791`,
    6524: `3793`,
    6525: `3794`,
    6526: `3795`,
    6527: `3795`,
    6528: `3796`,
    6529: `3797`,
    653: `159`,
    6530: `3797`,
    6531: `3798`,
    6532: `3798`,
    6533: `3798`,
    6534: `3799`,
    6535: `3799`,
    6536: `3800`,
    6537: `3800`,
    6538: `3801`,
    6539: `3801`,
    654: `161`,
    6540: `3802`,
    6541: `3802`,
    6542: `3803`,
    6543: `3804`,
    6544: `3804`,
    6545: `3805`,
    6546: `3806`,
    6547: `3806`,
    6548: `3807`,
    6549: `3808`,
    655: `161`,
    6550: `3810`,
    6551: `3810`,
    6552: `3811`,
    6553: `3812`,
    6554: `3812`,
    6555: `3813`,
    6556: `3814`,
    6557: `3814`,
    6558: `3815`,
    6559: `3816`,
    656: `162`,
    6560: `3817`,
    6561: `3817`,
    6562: `3817`,
    6563: `3817`,
    6564: `3817`,
    6565: `3817`,
    6566: `3817`,
    6567: `3817`,
    6568: `3817`,
    6569: `3817`,
    657: `162`,
    6570: `3817`,
    6571: `3817`,
    6572: `3817`,
    6573: `3817`,
    6574: `3817`,
    6575: `3817`,
    6576: `3817`,
    6577: `3817`,
    6578: `3817`,
    6579: `3817`,
    658: `162`,
    6580: `3817`,
    6581: `3817`,
    6582: `3817`,
    6583: `3817`,
    6584: `3817`,
    6585: `3817`,
    6586: `3817`,
    6587: `3817`,
    6588: `3817`,
    6589: `3817`,
    659: `163`,
    6590: `3817`,
    6591: `3817`,
    6592: `3817`,
    6593: `3817`,
    6594: `3817`,
    6595: `3817`,
    6596: `3817`,
    6597: `3817`,
    6598: `3817`,
    6599: `3817`,
    66: `2`,
    660: `163`,
    6600: `3817`,
    6601: `3817`,
    6602: `3817`,
    6603: `3817`,
    6604: `3817`,
    6605: `3817`,
    6606: `3817`,
    6607: `3817`,
    6608: `3817`,
    6609: `3817`,
    661: `163`,
    6610: `3817`,
    6611: `3817`,
    6612: `3817`,
    6613: `3817`,
    6614: `3817`,
    6615: `3817`,
    6616: `3817`,
    6617: `3817`,
    6618: `3817`,
    6619: `3817`,
    662: `166`,
    6620: `3817`,
    6621: `3817`,
    6622: `3817`,
    6623: `3817`,
    6624: `3817`,
    6625: `3817`,
    6626: `3818`,
    6627: `3819`,
    6628: `3819`,
    6629: `3820`,
    663: `166`,
    6630: `3820`,
    6631: `3820`,
    6632: `3821`,
    6633: `3822`,
    6634: `3822`,
    6635: `3823`,
    6636: `3824`,
    6637: `3824`,
    6638: `3825`,
    6639: `3826`,
    664: `166`,
    6640: `3826`,
    6641: `3827`,
    6642: `3827`,
    6643: `3828`,
    6644: `3829`,
    6645: `3829`,
    6646: `3830`,
    6647: `3831`,
    6648: `3831`,
    6649: `3832`,
    665: `167`,
    6650: `3832`,
    6651: `3832`,
    6652: `3833`,
    6653: `3834`,
    6654: `3834`,
    6655: `3835`,
    6656: `3835`,
    6657: `3835`,
    6658: `3836`,
    6659: `3837`,
    666: `167`,
    6660: `3838`,
    6661: `3838`,
    6662: `3839`,
    6663: `3839`,
    6664: `3839`,
    6665: `3840`,
    6666: `3841`,
    6667: `3841`,
    6668: `3842`,
    6669: `3843`,
    667: `167`,
    6670: `3844`,
    6671: `3844`,
    6672: `3845`,
    6673: `3846`,
    6674: `3846`,
    6675: `3847`,
    6676: `3848`,
    6677: `3848`,
    6678: `3849`,
    6679: `3850`,
    668: `168`,
    6680: `3850`,
    6681: `3851`,
    6682: `3852`,
    6683: `3853`,
    6684: `3854`,
    6685: `3854`,
    6686: `3855`,
    6687: `3856`,
    6688: `3856`,
    6689: `3857`,
    669: `168`,
    6690: `3857`,
    6691: `3858`,
    6692: `3858`,
    6693: `3859`,
    6694: `3859`,
    6695: `3859`,
    6696: `3861`,
    6697: `3861`,
    6698: `3861`,
    6699: `3862`,
    67: `2`,
    670: `169`,
    6700: `3862`,
    6701: `3862`,
    6702: `3862`,
    6703: `3863`,
    6704: `3863`,
    6705: `3863`,
    6706: `3865`,
    6707: `3866`,
    6708: `3867`,
    6709: `3867`,
    671: `169`,
    6710: `3868`,
    6711: `3868`,
    6712: `3869`,
    6713: `3869`,
    6714: `3871`,
    6715: `3871`,
    6716: `3871`,
    6717: `3871`,
    6718: `3871`,
    6719: `3871`,
    672: `172`,
    6720: `3871`,
    6721: `3871`,
    6722: `3872`,
    6723: `3872`,
    6724: `3873`,
    6725: `3873`,
    6726: `3874`,
    6727: `3874`,
    6728: `3875`,
    6729: `3877`,
    673: `173`,
    6730: `3877`,
    6731: `3878`,
    6732: `3878`,
    6733: `3880`,
    6734: `3880`,
    6735: `3880`,
    6736: `3881`,
    6737: `3881`,
    6738: `3882`,
    6739: `3882`,
    674: `174`,
    6740: `3882`,
    6741: `3884`,
    6742: `3884`,
    6743: `3884`,
    6744: `3886`,
    6745: `3886`,
    6746: `3886`,
    6747: `3887`,
    6748: `3887`,
    6749: `3888`,
    675: `175`,
    6750: `3888`,
    6751: `3888`,
    6752: `3890`,
    6753: `3890`,
    6754: `3890`,
    6755: `3892`,
    6756: `3892`,
    6757: `3892`,
    6758: `3893`,
    6759: `3893`,
    676: `175`,
    6760: `3894`,
    6761: `3894`,
    6762: `3894`,
    6763: `3896`,
    6764: `3897`,
    6765: `3897`,
    6766: `3898`,
    6767: `3899`,
    6768: `3900`,
    6769: `3901`,
    677: `176`,
    6770: `3901`,
    6771: `3902`,
    6772: `3903`,
    6773: `3904`,
    6774: `3905`,
    6775: `3905`,
    6776: `3906`,
    6777: `3907`,
    6778: `3908`,
    6779: `3909`,
    678: `176`,
    6780: `3909`,
    6781: `3910`,
    6782: `3911`,
    6783: `3912`,
    6784: `3913`,
    6785: `3913`,
    6786: `3914`,
    6787: `3914`,
    6788: `3914`,
    6789: `3915`,
    679: `177`,
    6790: `3915`,
    6791: `3915`,
    6792: `3916`,
    6793: `3917`,
    6794: `3918`,
    6795: `3919`,
    6796: `3919`,
    6797: `3919`,
    6798: `3922`,
    6799: `3922`,
    68: `2`,
    680: `178`,
    6800: `3922`,
    6801: `3923`,
    6802: `3923`,
    6803: `3923`,
    6804: `3924`,
    6805: `3924`,
    6806: `3925`,
    6807: `3925`,
    6808: `3926`,
    6809: `3926`,
    681: `179`,
    6810: `3926`,
    6811: `3929`,
    6812: `3929`,
    6813: `3929`,
    6814: `3930`,
    6815: `3930`,
    6816: `3930`,
    6817: `3931`,
    6818: `3931`,
    6819: `3932`,
    682: `180`,
    6820: `3932`,
    6821: `3933`,
    6822: `3933`,
    6823: `3933`,
    6824: `3936`,
    6825: `3936`,
    6826: `3936`,
    6827: `3937`,
    6828: `3937`,
    6829: `3938`,
    683: `180`,
    6830: `3938`,
    6831: `3938`,
    6832: `3941`,
    6833: `3941`,
    6834: `3941`,
    6835: `3944`,
    6836: `3944`,
    6837: `3944`,
    6838: `3945`,
    6839: `3945`,
    684: `183`,
    6840: `3945`,
    6841: `3946`,
    6842: `3946`,
    6843: `3947`,
    6844: `3947`,
    6845: `3948`,
    6846: `3948`,
    6847: `3948`,
    6848: `3951`,
    6849: `3951`,
    685: `183`,
    6850: `3951`,
    6851: `3952`,
    6852: `3952`,
    6853: `3953`,
    6854: `3953`,
    6855: `3953`,
    6856: `3956`,
    6857: `3956`,
    6858: `3956`,
    6859: `3958`,
    686: `184`,
    6860: `3958`,
    6861: `3959`,
    6862: `3959`,
    6863: `3960`,
    6864: `3961`,
    6865: `3964`,
    6866: `3964`,
    6867: `3964`,
    6868: `3965`,
    6869: `3965`,
    687: `184`,
    6870: `3966`,
    6871: `3966`,
    6872: `3966`,
    6873: `3967`,
    6874: `3968`,
    6875: `3968`,
    6876: `3969`,
    6877: `3969`,
    6878: `3970`,
    6879: `3970`,
    688: `185`,
    6880: `3970`,
    6881: `3972`,
    6882: `3972`,
    6883: `3973`,
    6884: `3973`,
    6885: `3974`,
    6886: `3975`,
    6887: `3978`,
    6888: `3978`,
    6889: `3978`,
    689: `186`,
    6890: `3979`,
    6891: `3979`,
    6892: `3980`,
    6893: `3980`,
    6894: `3980`,
    6895: `3981`,
    6896: `3982`,
    6897: `3982`,
    6898: `3983`,
    6899: `3983`,
    69: `2`,
    690: `187`,
    6900: `3984`,
    6901: `3984`,
    6902: `3984`,
    6903: `3986`,
    6904: `3986`,
    6905: `3987`,
    6906: `3987`,
    6907: `3988`,
    6908: `3989`,
    6909: `3992`,
    691: `187`,
    6910: `3992`,
    6911: `3992`,
    6912: `3993`,
    6913: `3993`,
    6914: `3994`,
    6915: `3994`,
    6916: `3995`,
    6917: `3995`,
    6918: `3995`,
    6919: `3997`,
    692: `187`,
    6920: `3998`,
    6921: `3998`,
    6922: `3999`,
    6923: `3999`,
    6924: `3999`,
    6925: `4001`,
    6926: `4001`,
    6927: `4002`,
    6928: `4002`,
    6929: `4002`,
    693: `188`,
    6930: `4003`,
    6931: `4003`,
    6932: `4004`,
    6933: `4004`,
    6934: `4004`,
    6935: `4006`,
    6936: `4006`,
    6937: `4007`,
    6938: `4007`,
    6939: `4007`,
    694: `188`,
    6940: `4008`,
    6941: `4008`,
    6942: `4009`,
    6943: `4009`,
    6944: `4009`,
    6945: `4011`,
    6946: `4011`,
    6947: `4012`,
    6948: `4012`,
    6949: `4012`,
    695: `189`,
    6950: `4013`,
    6951: `4013`,
    6952: `4014`,
    6953: `4014`,
    6954: `4014`,
    6955: `4016`,
    6956: `4016`,
    6957: `4017`,
    6958: `4017`,
    6959: `4017`,
    696: `190`,
    6960: `4018`,
    6961: `4018`,
    6962: `4019`,
    6963: `4019`,
    6964: `4019`,
    6965: `4021`,
    6966: `4021`,
    6967: `4022`,
    6968: `4022`,
    6969: `4022`,
    697: `191`,
    6970: `4023`,
    6971: `4023`,
    6972: `4024`,
    6973: `4024`,
    6974: `4024`,
    6975: `4026`,
    6976: `4026`,
    6977: `4027`,
    6978: `4027`,
    6979: `4027`,
    698: `191`,
    6980: `4028`,
    6981: `4028`,
    6982: `4029`,
    6983: `4029`,
    6984: `4029`,
    6985: `4031`,
    6986: `4031`,
    6987: `4032`,
    6988: `4032`,
    6989: `4032`,
    699: `192`,
    6990: `4033`,
    6991: `4033`,
    6992: `4034`,
    6993: `4034`,
    6994: `4034`,
    6995: `4036`,
    6996: `4036`,
    6997: `4037`,
    6998: `4037`,
    6999: `4037`,
    7: `2`,
    70: `2`,
    700: `192`,
    7000: `4038`,
    7001: `4038`,
    7002: `4039`,
    7003: `4039`,
    7004: `4039`,
    7005: `4041`,
    7006: `4041`,
    7007: `4042`,
    7008: `4042`,
    7009: `4042`,
    701: `193`,
    7010: `4043`,
    7011: `4043`,
    7012: `4044`,
    7013: `4044`,
    7014: `4044`,
    7015: `4046`,
    7016: `4046`,
    7017: `4047`,
    7018: `4047`,
    7019: `4048`,
    702: `193`,
    7020: `4049`,
    7021: `4052`,
    7022: `4052`,
    7023: `4052`,
    7024: `4053`,
    7025: `4053`,
    7026: `4054`,
    7027: `4054`,
    7028: `4054`,
    7029: `4055`,
    703: `193`,
    7030: `4055`,
    7031: `4056`,
    7032: `4056`,
    7033: `4056`,
    7034: `4057`,
    7035: `4058`,
    7036: `4058`,
    7037: `4059`,
    7038: `4059`,
    7039: `4059`,
    704: `194`,
    7040: `4060`,
    7041: `4061`,
    7042: `4061`,
    7043: `4062`,
    7044: `4062`,
    7045: `4062`,
    7046: `4063`,
    7047: `4064`,
    7048: `4064`,
    7049: `4065`,
    705: `194`,
    7050: `4065`,
    7051: `4066`,
    7052: `4067`,
    7053: `4068`,
    7054: `4069`,
    7055: `4069`,
    7056: `4070`,
    7057: `4070`,
    7058: `4070`,
    7059: `4072`,
    706: `195`,
    7060: `4072`,
    7061: `4072`,
    7062: `4074`,
    7063: `4074`,
    7064: `4074`,
    7065: `4076`,
    7066: `4076`,
    7067: `4077`,
    7068: `4077`,
    7069: `4077`,
    707: `195`,
    7070: `4078`,
    7071: `4078`,
    7072: `4079`,
    7073: `4079`,
    7074: `4079`,
    7075: `4081`,
    7076: `4081`,
    7077: `4082`,
    7078: `4082`,
    7079: `4082`,
    708: `195`,
    7080: `4083`,
    7081: `4083`,
    7082: `4084`,
    7083: `4084`,
    7084: `4084`,
    7085: `4086`,
    7086: `4087`,
    7087: `4087`,
    7088: `4088`,
    7089: `4088`,
    709: `195`,
    7090: `4088`,
    7091: `4090`,
    7092: `4090`,
    7093: `4091`,
    7094: `4091`,
    7095: `4092`,
    7096: `4093`,
    7097: `4093`,
    7098: `4093`,
    7099: `4094`,
    71: `2`,
    710: `195`,
    7100: `4094`,
    7101: `4095`,
    7102: `4095`,
    7103: `4095`,
    7104: `4096`,
    7105: `4097`,
    7106: `4097`,
    7107: `4097`,
    7108: `4098`,
    7109: `4098`,
    711: `195`,
    7110: `4099`,
    7111: `4099`,
    7112: `4100`,
    7113: `4100`,
    7114: `4101`,
    7115: `4102`,
    7116: `4102`,
    7117: `4102`,
    7118: `4103`,
    7119: `4103`,
    712: `196`,
    7120: `4104`,
    7121: `4104`,
    7122: `4104`,
    7123: `4105`,
    7124: `4106`,
    7125: `4106`,
    7126: `4106`,
    7127: `4107`,
    7128: `4108`,
    7129: `4108`,
    713: `196`,
    7130: `4109`,
    7131: `4109`,
    7132: `4110`,
    7133: `4111`,
    7134: `4111`,
    7135: `4112`,
    7136: `4113`,
    7137: `4114`,
    7138: `4114`,
    7139: `4115`,
    714: `197`,
    7140: `4115`,
    7141: `4115`,
    7142: `4117`,
    7143: `4117`,
    7144: `4118`,
    7145: `4118`,
    7146: `4119`,
    7147: `4120`,
    7148: `4120`,
    7149: `4120`,
    715: `198`,
    7150: `4121`,
    7151: `4121`,
    7152: `4122`,
    7153: `4122`,
    7154: `4122`,
    7155: `4123`,
    7156: `4124`,
    7157: `4124`,
    7158: `4124`,
    7159: `4125`,
    716: `199`,
    7160: `4125`,
    7161: `4126`,
    7162: `4126`,
    7163: `4127`,
    7164: `4127`,
    7165: `4128`,
    7166: `4129`,
    7167: `4129`,
    7168: `4129`,
    7169: `4130`,
    717: `199`,
    7170: `4130`,
    7171: `4131`,
    7172: `4131`,
    7173: `4131`,
    7174: `4132`,
    7175: `4133`,
    7176: `4133`,
    7177: `4133`,
    7178: `4134`,
    7179: `4135`,
    718: `200`,
    7180: `4135`,
    7181: `4136`,
    7182: `4136`,
    7183: `4137`,
    7184: `4138`,
    7185: `4138`,
    7186: `4139`,
    7187: `4140`,
    7188: `4141`,
    7189: `4141`,
    719: `201`,
    7190: `4142`,
    7191: `4142`,
    7192: `4142`,
    7193: `4144`,
    7194: `4144`,
    7195: `4145`,
    7196: `4145`,
    7197: `4145`,
    7198: `4146`,
    7199: `4147`,
    72: `2`,
    720: `203`,
    7200: `4147`,
    7201: `4148`,
    7202: `4148`,
    7203: `4148`,
    7204: `4149`,
    7205: `4149`,
    7206: `4150`,
    7207: `4150`,
    7208: `4151`,
    7209: `4151`,
    721: `203`,
    7210: `4151`,
    7211: `4152`,
    7212: `4152`,
    7213: `4154`,
    7214: `4154`,
    7215: `4155`,
    7216: `4155`,
    7217: `4156`,
    7218: `4157`,
    7219: `4158`,
    722: `204`,
    7220: `4158`,
    7221: `4159`,
    7222: `4160`,
    7223: `4160`,
    7224: `4161`,
    7225: `4162`,
    7226: `4163`,
    7227: `4163`,
    7228: `4164`,
    7229: `4165`,
    723: `204`,
    7230: `4165`,
    7231: `4166`,
    7232: `4167`,
    7233: `4167`,
    7234: `4168`,
    7235: `4169`,
    7236: `4169`,
    7237: `4170`,
    7238: `4171`,
    7239: `4171`,
    724: `204`,
    7240: `4172`,
    7241: `4173`,
    7242: `4173`,
    7243: `4174`,
    7244: `4175`,
    7245: `4176`,
    7246: `4176`,
    7247: `4177`,
    7248: `4178`,
    7249: `4178`,
    725: `205`,
    7250: `4179`,
    7251: `4180`,
    7252: `4180`,
    7253: `4181`,
    7254: `4182`,
    7255: `4182`,
    7256: `4183`,
    7257: `4183`,
    7258: `4184`,
    7259: `4184`,
    726: `205`,
    7260: `4184`,
    7261: `4186`,
    7262: `4187`,
    7263: `4188`,
    7264: `4189`,
    7265: `4190`,
    7266: `4192`,
    7267: `4193`,
    7268: `4193`,
    7269: `4194`,
    727: `206`,
    7270: `4194`,
    7271: `4195`,
    7272: `4195`,
    7273: `4196`,
    7274: `4196`,
    7275: `4197`,
    7276: `4197`,
    7277: `4198`,
    7278: `4200`,
    7279: `4201`,
    728: `207`,
    7280: `4201`,
    7281: `4202`,
    7282: `4202`,
    7283: `4203`,
    7284: `4203`,
    7285: `4204`,
    7286: `4204`,
    7287: `4205`,
    7288: `4205`,
    7289: `4206`,
    729: `208`,
    7290: `4207`,
    7291: `4209`,
    7292: `4209`,
    7293: `4210`,
    7294: `4210`,
    7295: `4211`,
    7296: `4212`,
    7297: `4215`,
    7298: `4215`,
    7299: `4215`,
    73: `2`,
    730: `208`,
    7300: `4216`,
    7301: `4216`,
    7302: `4218`,
    7303: `4219`,
    7304: `4219`,
    7305: `4220`,
    7306: `4220`,
    7307: `4221`,
    7308: `4221`,
    7309: `4222`,
    731: `208`,
    7310: `4222`,
    7311: `4223`,
    7312: `4224`,
    7313: `4225`,
    7314: `4226`,
    7315: `4226`,
    7316: `4226`,
    7317: `4227`,
    7318: `4227`,
    7319: `4227`,
    732: `208`,
    7320: `4228`,
    7321: `4228`,
    7322: `4229`,
    7323: `4229`,
    7324: `4229`,
    7325: `4231`,
    7326: `4231`,
    7327: `4232`,
    7328: `4232`,
    7329: `4233`,
    733: `208`,
    7330: `4234`,
    7331: `4237`,
    7332: `4237`,
    7333: `4237`,
    7334: `4238`,
    7335: `4238`,
    7336: `4240`,
    7337: `4241`,
    7338: `4241`,
    7339: `4242`,
    734: `208`,
    7340: `4243`,
    7341: `4243`,
    7342: `4244`,
    7343: `4245`,
    7344: `4245`,
    7345: `4245`,
    7346: `4246`,
    7347: `4246`,
    7348: `4246`,
    7349: `4247`,
    735: `208`,
    7350: `4247`,
    7351: `4248`,
    7352: `4248`,
    7353: `4248`,
    7354: `4250`,
    7355: `4250`,
    7356: `4251`,
    7357: `4251`,
    7358: `4252`,
    7359: `4253`,
    736: `208`,
    7360: `4256`,
    7361: `4256`,
    7362: `4256`,
    7363: `4257`,
    7364: `4257`,
    7365: `4258`,
    7366: `4259`,
    7367: `4259`,
    7368: `4260`,
    7369: `4260`,
    737: `208`,
    7370: `4260`,
    7371: `4263`,
    7372: `4263`,
    7373: `4263`,
    7374: `4266`,
    7375: `4266`,
    7376: `4266`,
    7377: `4269`,
    7378: `4269`,
    7379: `4269`,
    738: `208`,
    7380: `4272`,
    7381: `4272`,
    7382: `4272`,
    7383: `4273`,
    7384: `4273`,
    7385: `4273`,
    7386: `4274`,
    7387: `4274`,
    7388: `4274`,
    7389: `4275`,
    739: `208`,
    7390: `4275`,
    7391: `4276`,
    7392: `4276`,
    7393: `4277`,
    7394: `4277`,
    7395: `4278`,
    7396: `4278`,
    7397: `4278`,
    7398: `4281`,
    7399: `4281`,
    74: `2`,
    740: `208`,
    7400: `4281`,
    7401: `4282`,
    7402: `4282`,
    7403: `4282`,
    7404: `4283`,
    7405: `4283`,
    7406: `4284`,
    7407: `4284`,
    7408: `4285`,
    7409: `4285`,
    741: `208`,
    7410: `4285`,
    7411: `4287`,
    7412: `4288`,
    7413: `4290`,
    7414: `4291`,
    7415: `4292`,
    7416: `4293`,
    7417: `4293`,
    7418: `4294`,
    7419: `4294`,
    742: `208`,
    7420: `4295`,
    7421: `4295`,
    7422: `4295`,
    7423: `4296`,
    7424: `4298`,
    7425: `4299`,
    7426: `4300`,
    7427: `4300`,
    7428: `4300`,
    7429: `4301`,
    743: `208`,
    7430: `4302`,
    7431: `4302`,
    7432: `4303`,
    7433: `4303`,
    7434: `4303`,
    7435: `4304`,
    7436: `4307`,
    7437: `4307`,
    7438: `4307`,
    7439: `4308`,
    744: `208`,
    7440: `4309`,
    7441: `4309`,
    7442: `4310`,
    7443: `4310`,
    7444: `4310`,
    7445: `4313`,
    7446: `4313`,
    7447: `4313`,
    7448: `4314`,
    7449: `4315`,
    745: `208`,
    7450: `4315`,
    7451: `4316`,
    7452: `4316`,
    7453: `4316`,
    7454: `4319`,
    7455: `4319`,
    7456: `4319`,
    7457: `4320`,
    7458: `4321`,
    7459: `4321`,
    746: `208`,
    7460: `4322`,
    7461: `4322`,
    7462: `4322`,
    7463: `4325`,
    7464: `4325`,
    7465: `4325`,
    7466: `4326`,
    7467: `4327`,
    7468: `4327`,
    7469: `4328`,
    747: `208`,
    7470: `4328`,
    7471: `4328`,
    7472: `4330`,
    7473: `4331`,
    7474: `4332`,
    7475: `4333`,
    7476: `4334`,
    7477: `4335`,
    7478: `4336`,
    7479: `4337`,
    748: `208`,
    7480: `4338`,
    7481: `4340`,
    7482: `4341`,
    7483: `4341`,
    7484: `4341`,
    7485: `4342`,
    7486: `4343`,
    7487: `4344`,
    7488: `4345`,
    7489: `4346`,
    749: `208`,
    7490: `4348`,
    7491: `4349`,
    7492: `4350`,
    7493: `4351`,
    7494: `4351`,
    7495: `4351`,
    7496: `4352`,
    7497: `4352`,
    7498: `4353`,
    7499: `4354`,
    75: `2`,
    750: `208`,
    7500: `4355`,
    7501: `4357`,
    7502: `4358`,
    7503: `4359`,
    7504: `4360`,
    7505: `4360`,
    7506: `4360`,
    7507: `4361`,
    7508: `4361`,
    7509: `4362`,
    751: `208`,
    7510: `4362`,
    7511: `4362`,
    7512: `4363`,
    7513: `4363`,
    7514: `4363`,
    7515: `4365`,
    7516: `4366`,
    7517: `4366`,
    7518: `4366`,
    7519: `4367`,
    752: `208`,
    7520: `4367`,
    7521: `4368`,
    7522: `4369`,
    7523: `4369`,
    7524: `4370`,
    7525: `4371`,
    7526: `4371`,
    7527: `4372`,
    7528: `4373`,
    7529: `4373`,
    753: `208`,
    7530: `4373`,
    7531: `4374`,
    7532: `4374`,
    7533: `4375`,
    7534: `4376`,
    7535: `4376`,
    7536: `4377`,
    7537: `4378`,
    7538: `4378`,
    7539: `4379`,
    754: `208`,
    7540: `4380`,
    7541: `4381`,
    7542: `4382`,
    7543: `4382`,
    7544: `4383`,
    7545: `4384`,
    7546: `4384`,
    7547: `4384`,
    7548: `4385`,
    7549: `4385`,
    755: `208`,
    7550: `4386`,
    7551: `4387`,
    7552: `4387`,
    7553: `4387`,
    7554: `4388`,
    7555: `4388`,
    7556: `4389`,
    7557: `4390`,
    7558: `4390`,
    7559: `4390`,
    756: `208`,
    7560: `4391`,
    7561: `4391`,
    7562: `4392`,
    7563: `4393`,
    7564: `4393`,
    7565: `4393`,
    7566: `4394`,
    7567: `4394`,
    7568: `4395`,
    7569: `4396`,
    757: `209`,
    7570: `4396`,
    7571: `4397`,
    7572: `4398`,
    7573: `4398`,
    7574: `4398`,
    7575: `4399`,
    7576: `4400`,
    7577: `4400`,
    7578: `4401`,
    7579: `4402`,
    758: `209`,
    7580: `4402`,
    7581: `4402`,
    7582: `4403`,
    7583: `4403`,
    7584: `4404`,
    7585: `4405`,
    7586: `4405`,
    7587: `4406`,
    7588: `4407`,
    7589: `4407`,
    759: `209`,
    7590: `4407`,
    7591: `4408`,
    7592: `4409`,
    7593: `4410`,
    7594: `4410`,
    7595: `4411`,
    7596: `4411`,
    7597: `4411`,
    7598: `4412`,
    7599: `4413`,
    76: `2`,
    760: `212`,
    7600: `4414`,
    7601: `4414`,
    7602: `4415`,
    7603: `4417`,
    7604: `4418`,
    7605: `4418`,
    7606: `4418`,
    7607: `4419`,
    7608: `4419`,
    7609: `4420`,
    761: `212`,
    7610: `4421`,
    7611: `4421`,
    7612: `4422`,
    7613: `4423`,
    7614: `4423`,
    7615: `4424`,
    7616: `4425`,
    7617: `4425`,
    7618: `4426`,
    7619: `4426`,
    762: `212`,
    7620: `4427`,
    7621: `4428`,
    7622: `4428`,
    7623: `4429`,
    7624: `4429`,
    7625: `4429`,
    7626: `4430`,
    7627: `4431`,
    7628: `4431`,
    7629: `4432`,
    763: `213`,
    7630: `4434`,
    7631: `4435`,
    7632: `4436`,
    7633: `4436`,
    7634: `4437`,
    7635: `4437`,
    7636: `4438`,
    7637: `4438`,
    7638: `4439`,
    7639: `4439`,
    764: `213`,
    7640: `4440`,
    7641: `4440`,
    7642: `4441`,
    7643: `4442`,
    7644: `4445`,
    7645: `4445`,
    7646: `4446`,
    7647: `4446`,
    7648: `4447`,
    7649: `4447`,
    765: `213`,
    7650: `4448`,
    7651: `4449`,
    7652: `4450`,
    7653: `4450`,
    7654: `4451`,
    7655: `4452`,
    7656: `4452`,
    7657: `4453`,
    7658: `4453`,
    7659: `4454`,
    766: `214`,
    7660: `4454`,
    7661: `4455`,
    7662: `4456`,
    7663: `4457`,
    7664: `4457`,
    7665: `4458`,
    7666: `4458`,
    7667: `4459`,
    7668: `4460`,
    7669: `4461`,
    767: `214`,
    7670: `4461`,
    7671: `4462`,
    7672: `4463`,
    7673: `4464`,
    7674: `4466`,
    7675: `4466`,
    7676: `4467`,
    7677: `4467`,
    7678: `4468`,
    7679: `4470`,
    768: `214`,
    7680: `4471`,
    7681: `4472`,
    7682: `4472`,
    7683: `4473`,
    7684: `4474`,
    7685: `4474`,
    7686: `4474`,
    7687: `4475`,
    7688: `4477`,
    7689: `4478`,
    769: `215`,
    7690: `4479`,
    7691: `4480`,
    7692: `4481`,
    7693: `4481`,
    7694: `4482`,
    7695: `4483`,
    7696: `4484`,
    7697: `4485`,
    7698: `4487`,
    7699: `4487`,
    77: `2`,
    770: `216`,
    7700: `4488`,
    7701: `4488`,
    7702: `4489`,
    7703: `4490`,
    7704: `4491`,
    7705: `4491`,
    7706: `4491`,
    7707: `4492`,
    7708: `4492`,
    7709: `4492`,
    771: `216`,
    7710: `4494`,
    7711: `4494`,
    7712: `4495`,
    7713: `4496`,
    7714: `4496`,
    7715: `4497`,
    7716: `4499`,
    7717: `4500`,
    7718: `4500`,
    7719: `4500`,
    772: `217`,
    7720: `4502`,
    7721: `4502`,
    7722: `4503`,
    7723: `4504`,
    7724: `4504`,
    7725: `4505`,
    7726: `4507`,
    7727: `4508`,
    7728: `4508`,
    7729: `4508`,
    773: `217`,
    7730: `4510`,
    7731: `4511`,
    7732: `4511`,
    7733: `4512`,
    774: `218`,
    775: `218`,
    776: `221`,
    777: `222`,
    778: `223`,
    779: `223`,
    78: `2`,
    780: `224`,
    781: `224`,
    782: `225`,
    783: `225`,
    784: `226`,
    785: `227`,
    786: `227`,
    787: `228`,
    788: `229`,
    789: `230`,
    79: `2`,
    790: `231`,
    791: `231`,
    792: `232`,
    793: `233`,
    794: `234`,
    795: `235`,
    796: `235`,
    797: `236`,
    798: `236`,
    799: `236`,
    8: `2`,
    80: `2`,
    800: `239`,
    801: `239`,
    802: `239`,
    803: `240`,
    804: `240`,
    805: `240`,
    806: `241`,
    807: `241`,
    808: `242`,
    809: `242`,
    81: `2`,
    810: `245`,
    811: `246`,
    812: `247`,
    813: `247`,
    814: `248`,
    815: `248`,
    816: `249`,
    817: `249`,
    818: `250`,
    819: `251`,
    82: `2`,
    820: `252`,
    821: `252`,
    822: `253`,
    823: `254`,
    824: `255`,
    825: `256`,
    826: `256`,
    827: `257`,
    828: `257`,
    829: `257`,
    83: `2`,
    830: `260`,
    831: `260`,
    832: `260`,
    833: `261`,
    834: `261`,
    835: `261`,
    836: `262`,
    837: `262`,
    838: `263`,
    839: `263`,
    84: `2`,
    840: `266`,
    841: `267`,
    842: `268`,
    843: `268`,
    844: `269`,
    845: `269`,
    846: `270`,
    847: `270`,
    848: `271`,
    849: `272`,
    85: `2`,
    850: `273`,
    851: `273`,
    852: `274`,
    853: `275`,
    854: `276`,
    855: `277`,
    856: `277`,
    857: `278`,
    858: `278`,
    859: `278`,
    86: `2`,
    860: `281`,
    861: `281`,
    862: `281`,
    863: `282`,
    864: `282`,
    865: `282`,
    866: `283`,
    867: `283`,
    868: `284`,
    869: `284`,
    87: `2`,
    870: `287`,
    871: `288`,
    872: `289`,
    873: `289`,
    874: `290`,
    875: `290`,
    876: `291`,
    877: `291`,
    878: `292`,
    879: `293`,
    88: `2`,
    880: `294`,
    881: `294`,
    882: `295`,
    883: `296`,
    884: `297`,
    885: `298`,
    886: `298`,
    887: `299`,
    888: `299`,
    889: `299`,
    89: `2`,
    890: `302`,
    891: `302`,
    892: `302`,
    893: `303`,
    894: `303`,
    895: `303`,
    896: `304`,
    897: `304`,
    898: `305`,
    899: `305`,
    9: `2`,
    90: `2`,
    900: `308`,
    901: `309`,
    902: `310`,
    903: `310`,
    904: `311`,
    905: `311`,
    906: `312`,
    907: `312`,
    908: `313`,
    909: `314`,
    91: `2`,
    910: `315`,
    911: `315`,
    912: `316`,
    913: `317`,
    914: `318`,
    915: `319`,
    916: `319`,
    917: `320`,
    918: `320`,
    919: `320`,
    92: `2`,
    920: `323`,
    921: `323`,
    922: `323`,
    923: `324`,
    924: `324`,
    925: `324`,
    926: `325`,
    927: `325`,
    928: `326`,
    929: `326`,
    93: `2`,
    930: `329`,
    931: `330`,
    932: `331`,
    933: `331`,
    934: `332`,
    935: `332`,
    936: `333`,
    937: `333`,
    938: `334`,
    939: `335`,
    94: `2`,
    940: `336`,
    941: `336`,
    942: `337`,
    943: `338`,
    944: `339`,
    945: `340`,
    946: `340`,
    947: `341`,
    948: `341`,
    949: `341`,
    95: `2`,
    950: `344`,
    951: `344`,
    952: `345`,
    953: `345`,
    954: `345`,
    955: `346`,
    956: `346`,
    957: `347`,
    958: `347`,
    959: `348`,
    96: `2`,
    960: `348`,
    961: `348`,
    962: `349`,
    963: `349`,
    964: `350`,
    965: `350`,
    966: `351`,
    967: `351`,
    968: `352`,
    969: `352`,
    97: `2`,
    970: `352`,
    971: `353`,
    972: `353`,
    973: `353`,
    974: `354`,
    975: `355`,
    976: `360`,
    977: `360`,
    978: `361`,
    979: `361`,
    98: `2`,
    980: `361`,
    981: `362`,
    982: `362`,
    983: `363`,
    984: `363`,
    985: `364`,
    986: `364`,
    987: `364`,
    988: `365`,
    989: `365`,
    99: `2`,
    990: `366`,
    991: `366`,
    992: `367`,
    993: `367`,
    994: `367`,
    995: `368`,
    996: `368`,
    997: `369`,
    998: `369`,
    999: `370`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Provider_deposit3: 1,
    _api_Provider_withdraw3: 1,
    _api_Trader_exactSwapAForB3: 1,
    _api_Trader_exactSwapBForA3: 2,
    _api_Trader_swapAForB3: 1,
    _api_Trader_swapBForA3: 2
    },
  extraPages: 3,
  stateKeys: 7,
  stateSize: 818,
  unsupported: [],
  version: 13,
  warnings: [`Step 0 calls a remote object at /app/index.rsh:598:5:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 0 calls a remote object at /app/index.rsh:755:71:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:598:5:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 3 calls a remote object at /app/index.rsh:613:5:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:1356:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:1360:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:827:31:after expr stmt semicolon',
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
  "Provider_withdraw": Provider_withdraw,
  "Trader_exactSwapAForB": Trader_exactSwapAForB,
  "Trader_exactSwapBForA": Trader_exactSwapBForA,
  "Trader_swapAForB": Trader_swapAForB,
  "Trader_swapBForA": Trader_swapBForA,
  "approve": approve,
  "deleteAllowanceBox": deleteAllowanceBox,
  "deleteBalanceBox": deleteBalanceBox,
  "destroy": destroy,
  "transfer": transfer,
  "transferFrom": transferFrom
  };
export const _APIs = {
  Protocol_delete: Protocol_delete,
  Protocol_harvest: Protocol_harvest,
  Provider: {
    deposit: Provider_deposit,
    withdraw: Provider_withdraw
    },
  Trader: {
    exactSwapAForB: Trader_exactSwapAForB,
    exactSwapBForA: Trader_exactSwapBForA,
    swapAForB: Trader_swapAForB,
    swapBForA: Trader_swapBForA
    },
  approve: approve,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy,
  transfer: transfer,
  transferFrom: transferFrom
  };
