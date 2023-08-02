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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3, ctc1, ctc0]);
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc0], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc4,
    Kill: ctc2,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc2,
    Rewards: ctc0
    });
  const ctc10 = stdlib.T_Tuple([ctc0, ctc9]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc3, ctc1]);
  const ctc12 = stdlib.T_UInt;
  const ctc13 = stdlib.T_Tuple([ctc0, ctc12, ctc9]);
  const ctc14 = stdlib.T_Data({
    ProposeEvent: ctc10,
    RegisterEvent: ctc11,
    SupportEvent: ctc13
    });
  return {
    Event: [ctc14]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc3]);
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc3], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc4,
    Kill: ctc1,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc1,
    Rewards: ctc3
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc3,
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
      const [v1841, v1858, v1862] = svs;
      return (await ((async () => {
        
        const v1907 = v1858.umvirs;
        const v1908 = v1858.cmds;
        const v1909 = v1858.info;
        const v1910 = v1909.protoFee;
        const v1911 = v1909.lpFee;
        const v1912 = v1909.totFee;
        const v1913 = v1909.protoAddr;
        const v1914 = v1909.locked;
        const v1915 = {
          locked: v1914,
          lpFee: v1911,
          protoAddr: v1913,
          protoFee: v1910,
          totFee: v1912
          };
        const v1916 = {
          cmds: v1908,
          protoInfo: v1915,
          umvirs: v1907
          };
        
        return v1916;}))(...args));
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
  const ctc7 = stdlib.T_Data({
    None: ctc5,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc6, ctc7, ctc6, ctc2]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Struct([['protoFee', ctc0], ['lpFee', ctc0], ['totFee', ctc0], ['protoAddr', ctc2], ['locked', ctc9]]);
  const ctc11 = stdlib.T_Data({
    Harvest: ctc8,
    Kill: ctc5,
    NewInfo: ctc10,
    NewUmvirs: ctc3,
    NoOp: ctc5,
    Rewards: ctc2
    });
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_UInt;
  const ctc14 = stdlib.T_Tuple([ctc13, ctc11]);
  const ctc15 = stdlib.T_Tuple([ctc6, ctc7, ctc6]);
  const ctc16 = stdlib.T_Data({
    Umvir_propose0_269: ctc12,
    Umvir_support0_269: ctc14,
    register0_269: ctc15
    });
  const ctc17 = stdlib.T_Struct([['A', ctc0], ['B', ctc0]]);
  const ctc18 = stdlib.T_Tuple([ctc17, ctc13]);
  const ctc19 = stdlib.T_Tuple([ctc13, ctc18]);
  
  
  const v1792 = stdlib.protect(ctc4, interact.params, 'for Deployer\'s interact field params');
  const v1793 = v1792.info;
  const v1794 = v1792.umvirs;
  const v1795 = v1793.lpFee;
  const v1796 = v1793.protoFee;
  const v1797 = v1793.totFee;
  
  const v1808 = stdlib.lt256(v1796, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1809 = stdlib.lt256(v1795, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1810 = v1808 ? v1809 : false;
  let v1811;
  if (v1810) {
    const v1812 = stdlib.safeAdd256(v1795, v1796);
    const v1813 = stdlib.eq256(v1797, v1812);
    v1811 = v1813;
    }
  else {
    v1811 = false;
    }
  const v1814 = stdlib.lt256(v1797, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1815 = v1811 ? v1814 : false;
  const v1816 = stdlib.gt256(v1797, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1817 = v1815 ? v1816 : false;
  stdlib.assert(v1817, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:400:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid protocol info',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1794, v1793],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:399:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:399:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1820, v1821], secs: v1823, time: v1822, didSend: v104, from: v1819 } = txn1;
      
      const v1824 = v1821.protoFee;
      const v1825 = v1821.lpFee;
      const v1826 = v1821.totFee;
      ;
      const v1838 = await ctc.getContractInfo();
      
      const v1841 = ['NoOp', null];
      const v1847 = [v1841, v1841, v1841];
      const v1851 = await ctc.getContractAddress();
      const v1856 = {
        locked: false,
        lpFee: v1825,
        protoAddr: v1851,
        protoFee: v1824,
        totFee: v1826
        };
      const v1857 = {
        closed: false,
        cmds: v1847,
        info: v1856,
        umvirs: v1820
        };
      const v1858 = v1857;
      const v1859 = v1822;
      const v1862 = stdlib.checkedBigNumberify('./index.rsh:395:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1905 = v1858.closed;
        const v1906 = v1905 ? false : true;
        
        return v1906;})()) {
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
  const {data: [v1820, v1821], secs: v1823, time: v1822, didSend: v104, from: v1819 } = txn1;
  const v1824 = v1821.protoFee;
  const v1825 = v1821.lpFee;
  const v1826 = v1821.totFee;
  const v1827 = stdlib.lt256(v1824, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1828 = stdlib.lt256(v1825, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1829 = v1827 ? v1828 : false;
  let v1830;
  if (v1829) {
    const v1831 = stdlib.safeAdd256(v1825, v1824);
    const v1832 = stdlib.eq256(v1826, v1831);
    v1830 = v1832;
    }
  else {
    v1830 = false;
    }
  const v1833 = stdlib.lt256(v1826, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
  const v1834 = v1830 ? v1833 : false;
  const v1835 = stdlib.gt256(v1826, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1836 = v1834 ? v1835 : false;
  stdlib.assert(v1836, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:400:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid protocol info',
    who: 'Deployer'
    });
  ;
  const v1838 = await ctc.getContractInfo();
  stdlib.protect(ctc5, await interact.ready(v1838), {
    at: './index.rsh:402:21:application',
    fs: ['at ./index.rsh:402:21:application call to [unknown function] (defined at: ./index.rsh:402:21:function exp)', 'at ./index.rsh:402:21:application call to "liftedInteract" (defined at: ./index.rsh:402:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1841 = ['NoOp', null];
  const v1847 = [v1841, v1841, v1841];
  const v1851 = await ctc.getContractAddress();
  const v1856 = {
    locked: false,
    lpFee: v1825,
    protoAddr: v1851,
    protoFee: v1824,
    totFee: v1826
    };
  const v1857 = {
    closed: false,
    cmds: v1847,
    info: v1856,
    umvirs: v1820
    };
  let v1858 = v1857;
  let v1859 = v1822;
  let v1862 = stdlib.checkedBigNumberify('./index.rsh:395:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v1905 = v1858.closed;
    const v1906 = v1905 ? false : true;
    
    return v1906;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn3;
    switch (v2205[0]) {
      case 'Umvir_propose0_269': {
        const v2208 = v2205[1];
        undefined /* setApiDetails */;
        const v2213 = v2208[stdlib.checkedBigNumberify('./index.rsh:475:12:spread', stdlib.UInt_max, '0')];
        let v2214;
        switch (v2213[0]) {
          case 'Harvest': {
            const v2215 = v2213[1];
            v2214 = true;
            
            break;
            }
          case 'Kill': {
            const v2216 = v2213[1];
            v2214 = true;
            
            break;
            }
          case 'NewInfo': {
            const v2217 = v2213[1];
            const v2218 = v2217.protoFee;
            const v2219 = v2217.lpFee;
            const v2220 = v2217.totFee;
            const v2221 = stdlib.lt256(v2218, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2222 = stdlib.lt256(v2219, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2223 = v2221 ? v2222 : false;
            let v2224;
            if (v2223) {
              const v2225 = stdlib.safeAdd256(v2219, v2218);
              const v2226 = stdlib.eq256(v2220, v2225);
              v2224 = v2226;
              }
            else {
              v2224 = false;
              }
            const v2227 = stdlib.lt256(v2220, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2228 = v2224 ? v2227 : false;
            const v2229 = stdlib.gt256(v2220, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v2230 = v2228 ? v2229 : false;
            v2214 = v2230;
            
            break;
            }
          case 'NewUmvirs': {
            const v2231 = v2213[1];
            v2214 = true;
            
            break;
            }
          case 'NoOp': {
            const v2232 = v2213[1];
            v2214 = true;
            
            break;
            }
          case 'Rewards': {
            const v2233 = v2213[1];
            v2214 = true;
            
            break;
            }
          }
        stdlib.assert(v2214, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:476:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v2235 = v1858.umvirs;
        const v2236 = ['None', null];
        const v2237 = await stdlib.Array_asyncReduce([v2235], v2236, async([v2239], v2238, v2240) => {
          const v2241 = {
            None: 0,
            Some: 1
            }[v2238[0]];
          const v2242 = stdlib.eq(v2241, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2243 = stdlib.addressEq(v2204, v2239);
          const v2244 = v2242 ? v2243 : false;
          const v2245 = ['Some', v2240];
          const v2246 = v2244 ? v2245 : v2238;
          
          return v2246;})
        const v2247 = {
          None: 0,
          Some: 1
          }[v2237[0]];
        const v2248 = stdlib.eq(v2247, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2248, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:477:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        ;
        let v2299;
        switch (v2213[0]) {
          case 'Harvest': {
            const v2300 = v2213[1];
            v2299 = true;
            
            break;
            }
          case 'Kill': {
            const v2301 = v2213[1];
            v2299 = true;
            
            break;
            }
          case 'NewInfo': {
            const v2302 = v2213[1];
            const v2303 = v2302.protoFee;
            const v2304 = v2302.lpFee;
            const v2305 = v2302.totFee;
            const v2306 = stdlib.lt256(v2303, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2307 = stdlib.lt256(v2304, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2308 = v2306 ? v2307 : false;
            let v2309;
            if (v2308) {
              const v2310 = stdlib.safeAdd256(v2304, v2303);
              const v2311 = stdlib.eq256(v2305, v2310);
              v2309 = v2311;
              }
            else {
              v2309 = false;
              }
            const v2312 = stdlib.lt256(v2305, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
            const v2313 = v2309 ? v2312 : false;
            const v2314 = stdlib.gt256(v2305, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
            const v2315 = v2313 ? v2314 : false;
            v2299 = v2315;
            
            break;
            }
          case 'NewUmvirs': {
            const v2316 = v2213[1];
            v2299 = true;
            
            break;
            }
          case 'NoOp': {
            const v2317 = v2213[1];
            v2299 = true;
            
            break;
            }
          case 'Rewards': {
            const v2318 = v2213[1];
            v2299 = true;
            
            break;
            }
          }
        stdlib.assert(v2299, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:476:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:15:application call to [unknown function] (defined at: ./index.rsh:481:15:function exp)'],
          msg: 'invalid command',
          who: 'Deployer'
          });
        const v2322 = await stdlib.Array_asyncReduce([v2235], v2236, async([v2324], v2323, v2325) => {
          const v2326 = {
            None: 0,
            Some: 1
            }[v2323[0]];
          const v2327 = stdlib.eq(v2326, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2328 = stdlib.addressEq(v2204, v2324);
          const v2329 = v2327 ? v2328 : false;
          const v2330 = ['Some', v2325];
          const v2331 = v2329 ? v2330 : v2323;
          
          return v2331;})
        const v2332 = {
          None: 0,
          Some: 1
          }[v2322[0]];
        const v2333 = stdlib.eq(v2332, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2333, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:477:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:481:15:application call to [unknown function] (defined at: ./index.rsh:481:15:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v2335 = stdlib.fromSome(v2322, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
        const v2336 = v1858.cmds;
        const v2338 = stdlib.Array_set(v2336, v2335, v2213);
        const v2340 = true;
        await txn3.getOutput('Umvir_propose', 'v2340', ctc9, v2340);
        const v2365 = v1858.closed;
        const v2367 = v1858.info;
        const v2369 = {
          closed: v2365,
          cmds: v2338,
          info: v2367,
          umvirs: v2235
          };
        const cv1858 = v2369;
        const cv1859 = v2206;
        const cv1862 = v1862;
        
        v1858 = cv1858;
        v1859 = cv1859;
        v1862 = cv1862;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Umvir_support0_269': {
        const v2595 = v2205[1];
        undefined /* setApiDetails */;
        const v2642 = v2595[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '0')];
        const v2643 = v2595[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '1')];
        const v2644 = v1858.umvirs;
        const v2645 = stdlib.lt(v2642, stdlib.checkedBigNumberify('./index.rsh:532:30:dot', stdlib.UInt_max, '3'));
        stdlib.assert(v2645, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:532:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'illegal idx',
          who: 'Deployer'
          });
        const v2648 = ['None', null];
        const v2649 = await stdlib.Array_asyncReduce([v2644], v2648, async([v2651], v2650, v2652) => {
          const v2653 = {
            None: 0,
            Some: 1
            }[v2650[0]];
          const v2654 = stdlib.eq(v2653, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2655 = stdlib.addressEq(v2204, v2651);
          const v2656 = v2654 ? v2655 : false;
          const v2657 = ['Some', v2652];
          const v2658 = v2656 ? v2657 : v2650;
          
          return v2658;})
        const v2659 = {
          None: 0,
          Some: 1
          }[v2649[0]];
        const v2660 = stdlib.eq(v2659, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2660, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:533:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v2662 = stdlib.fromSome(v2649, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
        const v2663 = stdlib.eq(v2642, v2662);
        const v2664 = v2663 ? false : true;
        stdlib.assert(v2664, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:534:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'cannot support self',
          who: 'Deployer'
          });
        const v2666 = v1858.cmds;
        const v2668 = v2666[v2642];
        const v2669 = stdlib.digest([ctc11], [v2643]);
        const v2670 = stdlib.digest([ctc11], [v2668]);
        const v2671 = stdlib.digestEq(v2669, v2670);
        stdlib.assert(v2671, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:536:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'command switched',
          who: 'Deployer'
          });
        ;
        const v2767 = await stdlib.Array_asyncReduce([v2644], v2648, async([v2769], v2768, v2770) => {
          const v2771 = {
            None: 0,
            Some: 1
            }[v2768[0]];
          const v2772 = stdlib.eq(v2771, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2773 = stdlib.addressEq(v2204, v2769);
          const v2774 = v2772 ? v2773 : false;
          const v2775 = ['Some', v2770];
          const v2776 = v2774 ? v2775 : v2768;
          
          return v2776;})
        const v2777 = {
          None: 0,
          Some: 1
          }[v2767[0]];
        const v2778 = stdlib.eq(v2777, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2778, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:533:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
          msg: 'not umvir',
          who: 'Deployer'
          });
        const v2780 = stdlib.fromSome(v2767, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
        const v2781 = stdlib.eq(v2642, v2780);
        const v2782 = v2781 ? false : true;
        stdlib.assert(v2782, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:534:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
          msg: 'cannot support self',
          who: 'Deployer'
          });
        const v2794 = stdlib.Array_set(v2666, v2642, v1841);
        const v2797 = true;
        await txn3.getOutput('Umvir_support', 'v2797', ctc9, v2797);
        switch (v2668[0]) {
          case 'Harvest': {
            const v2823 = v2668[1];
            const v2824 = v2823[stdlib.checkedBigNumberify('./index.rsh:515:23:array', stdlib.UInt_max, '0')];
            const v2827 = v2823[stdlib.checkedBigNumberify('./index.rsh:515:23:array', stdlib.UInt_max, '3')];
            const v2828 = v1858.info;
            const v2829 = v2828.protoFee;
            const v2830 = v2828.lpFee;
            const v2831 = v2828.totFee;
            const v2832 = v2828.protoAddr;
            const v2833 = v2828.locked;
            const v2836 = [];
            const v2847 = {
              locked: v2833,
              lpFee: v2830,
              protoAddr: v2832,
              protoFee: v2829,
              totFee: v2831
              };
            const v2848 = undefined /* Remote */;
            const v2849 = await txn3.getOutput('internal', 'v2848', ctc19, v2848);
            const v2851 = v2849[stdlib.checkedBigNumberify('./index.rsh:517:41:application', stdlib.UInt_max, '0')];
            const v2860 = stdlib.add(v1862, v2851);
            const v2861 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2851);
            stdlib.assert(v2861, {
              at: './index.rsh:517:41:application',
              fs: ['at ./index.rsh:511:20:application call to [unknown function] (defined at: ./index.rsh:515:50:function exp)', 'at ./index.rsh:511:20:application call to [unknown function] (defined at: ./index.rsh:511:20:function exp)', 'at ./index.rsh:543:57:application call to "evalCommand" (defined at: ./index.rsh:510:35:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v2865 = v1858.closed;
            const v2866 = {
              closed: v2865,
              cmds: v2794,
              info: v2828,
              umvirs: v2644
              };
            const cv1858 = v2866;
            const cv1859 = v2206;
            const cv1862 = v2860;
            
            v1858 = cv1858;
            v1859 = cv1859;
            v1862 = cv1862;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Kill': {
            const v2869 = v2668[1];
            const v2872 = v1858.info;
            const v2874 = {
              closed: true,
              cmds: v2666,
              info: v2872,
              umvirs: v2644
              };
            const v2877 = v2874.info;
            const v2878 = v2874.umvirs;
            const v2879 = v2874.closed;
            const v2880 = {
              closed: v2879,
              cmds: v2794,
              info: v2877,
              umvirs: v2878
              };
            const cv1858 = v2880;
            const cv1859 = v2206;
            const cv1862 = v1862;
            
            v1858 = cv1858;
            v1859 = cv1859;
            v1862 = cv1862;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewInfo': {
            const v2883 = v2668[1];
            const v2884 = v1858.closed;
            const v2888 = v2883.locked;
            const v2889 = v2883.lpFee;
            const v2890 = v2883.protoAddr;
            const v2891 = v2883.protoFee;
            const v2892 = v2883.totFee;
            const v2893 = {
              locked: v2888,
              lpFee: v2889,
              protoAddr: v2890,
              protoFee: v2891,
              totFee: v2892
              };
            const v2894 = {
              closed: v2884,
              cmds: v2666,
              info: v2893,
              umvirs: v2644
              };
            const v2898 = v2894.info;
            const v2899 = v2894.umvirs;
            const v2900 = v2894.closed;
            const v2901 = {
              closed: v2900,
              cmds: v2794,
              info: v2898,
              umvirs: v2899
              };
            const cv1858 = v2901;
            const cv1859 = v2206;
            const cv1862 = v1862;
            
            v1858 = cv1858;
            v1859 = cv1859;
            v1862 = cv1862;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NewUmvirs': {
            const v2904 = v2668[1];
            const v2905 = v1858.closed;
            const v2907 = v1858.info;
            const v2909 = {
              closed: v2905,
              cmds: v2666,
              info: v2907,
              umvirs: v2904
              };
            const v2912 = v2909.info;
            const v2913 = v2909.umvirs;
            const v2914 = v2909.closed;
            const v2915 = {
              closed: v2914,
              cmds: v2794,
              info: v2912,
              umvirs: v2913
              };
            const cv1858 = v2915;
            const cv1859 = v2206;
            const cv1862 = v1862;
            
            v1858 = cv1858;
            v1859 = cv1859;
            v1862 = cv1862;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'NoOp': {
            const v2918 = v2668[1];
            const v2920 = v1858.info;
            const v2922 = v1858.closed;
            const v2923 = {
              closed: v2922,
              cmds: v2794,
              info: v2920,
              umvirs: v2644
              };
            const cv1858 = v2923;
            const cv1859 = v2206;
            const cv1862 = v1862;
            
            v1858 = cv1858;
            v1859 = cv1859;
            v1862 = cv1862;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Rewards': {
            const v2926 = v2668[1];
            const v2928 = (stdlib.le(await ctc.getBalance(), v1862) ? stdlib.checkedBigNumberify('./index.rsh:521:48:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1862));
            const v2929 = stdlib.safeAdd(v2928, v1862);
            const v2933 = stdlib.sub(v2929, v2928);
            ;
            const v2935 = v1858.info;
            const v2937 = v1858.closed;
            const v2938 = {
              closed: v2937,
              cmds: v2794,
              info: v2935,
              umvirs: v2644
              };
            const cv1858 = v2938;
            const cv1859 = v2206;
            const cv1862 = v2933;
            
            v1858 = cv1858;
            v1859 = cv1859;
            v1862 = cv1862;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'register0_269': {
        const v2982 = v2205[1];
        undefined /* setApiDetails */;
        const v3065 = v2982[stdlib.checkedBigNumberify('./index.rsh:450:12:spread', stdlib.UInt_max, '0')];
        const v3069 = stdlib.ctcAddrEq(v3065, v2204);
        stdlib.assert(v3069, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:437:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:451:15:application call to "chkCtc" (defined at: ./index.rsh:436:39:function exp)', 'at ./index.rsh:450:51:application call to [unknown function] (defined at: ./index.rsh:450:51:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:450:51:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
          msg: 'not contract',
          who: 'Deployer'
          });
        ;
        const v3338 = v1858.info;
        const v3339 = v3338.protoFee;
        const v3340 = v3338.lpFee;
        const v3341 = v3338.totFee;
        const v3342 = v3338.protoAddr;
        const v3343 = v3338.locked;
        const v3344 = {
          locked: v3343,
          lpFee: v3340,
          protoAddr: v3342,
          protoFee: v3339,
          totFee: v3341
          };
        await txn3.getOutput('register', 'v3344', ctc10, v3344);
        const cv1858 = v1858;
        const cv1859 = v2206;
        const cv1862 = v1862;
        
        v1858 = cv1858;
        v1859 = cv1859;
        v1862 = cv1862;
        
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc3]);
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc3], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc4,
    Kill: ctc1,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc1,
    Rewards: ctc3
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc3,
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
  const ctc16 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc17 = stdlib.T_Data({
    Umvir_propose0_269: ctc14,
    Umvir_support0_269: ctc15,
    register0_269: ctc16
    });
  
  
  const [v1841, v1858, v1862] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc12, ctc13]);
  const v1946 = ctc.selfAddress();
  const v1948 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_propose0_269" (defined at: ./index.rsh:475:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'in',
    who: 'Umvir_propose'
    });
  const v1949 = v1948[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v1969;
  switch (v1949[0]) {
    case 'Harvest': {
      const v1970 = v1949[1];
      v1969 = true;
      
      break;
      }
    case 'Kill': {
      const v1971 = v1949[1];
      v1969 = true;
      
      break;
      }
    case 'NewInfo': {
      const v1972 = v1949[1];
      const v1973 = v1972.protoFee;
      const v1974 = v1972.lpFee;
      const v1975 = v1972.totFee;
      const v1976 = stdlib.lt256(v1973, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1977 = stdlib.lt256(v1974, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1978 = v1976 ? v1977 : false;
      let v1979;
      if (v1978) {
        const v1980 = stdlib.safeAdd256(v1974, v1973);
        const v1981 = stdlib.eq256(v1975, v1980);
        v1979 = v1981;
        }
      else {
        v1979 = false;
        }
      const v1982 = stdlib.lt256(v1975, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v1983 = v1979 ? v1982 : false;
      const v1984 = stdlib.gt256(v1975, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v1985 = v1983 ? v1984 : false;
      v1969 = v1985;
      
      break;
      }
    case 'NewUmvirs': {
      const v1986 = v1949[1];
      v1969 = true;
      
      break;
      }
    case 'NoOp': {
      const v1987 = v1949[1];
      v1969 = true;
      
      break;
      }
    case 'Rewards': {
      const v1988 = v1949[1];
      v1969 = true;
      
      break;
      }
    }
  stdlib.assert(v1969, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:476:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_propose0_269" (defined at: ./index.rsh:475:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_propose'
    });
  const v1990 = v1858.umvirs;
  const v1991 = ['None', null];
  const v1992 = await stdlib.Array_asyncReduce([v1990], v1991, async([v1994], v1993, v1995) => {
    const v1996 = {
      None: 0,
      Some: 1
      }[v1993[0]];
    const v1997 = stdlib.eq(v1996, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v1998 = stdlib.addressEq(v1946, v1994);
    const v1999 = v1997 ? v1998 : false;
    const v2000 = ['Some', v1995];
    const v2001 = v1999 ? v2000 : v1993;
    
    return v2001;})
  const v2002 = {
    None: 0,
    Some: 1
    }[v1992[0]];
  const v2003 = stdlib.eq(v2002, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2003, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:477:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_propose0_269" (defined at: ./index.rsh:475:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_propose'
    });
  const v2032 = ['Umvir_propose0_269', v1948];
  
  let v2121;
  switch (v1949[0]) {
    case 'Harvest': {
      const v2122 = v1949[1];
      v2121 = true;
      
      break;
      }
    case 'Kill': {
      const v2123 = v1949[1];
      v2121 = true;
      
      break;
      }
    case 'NewInfo': {
      const v2124 = v1949[1];
      const v2125 = v2124.protoFee;
      const v2126 = v2124.lpFee;
      const v2127 = v2124.totFee;
      const v2128 = stdlib.lt256(v2125, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2129 = stdlib.lt256(v2126, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2130 = v2128 ? v2129 : false;
      let v2131;
      if (v2130) {
        const v2132 = stdlib.safeAdd256(v2126, v2125);
        const v2133 = stdlib.eq256(v2127, v2132);
        v2131 = v2133;
        }
      else {
        v2131 = false;
        }
      const v2134 = stdlib.lt256(v2127, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
      const v2135 = v2131 ? v2134 : false;
      const v2136 = stdlib.gt256(v2127, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2137 = v2135 ? v2136 : false;
      v2121 = v2137;
      
      break;
      }
    case 'NewUmvirs': {
      const v2138 = v1949[1];
      v2121 = true;
      
      break;
      }
    case 'NoOp': {
      const v2139 = v1949[1];
      v2121 = true;
      
      break;
      }
    case 'Rewards': {
      const v2140 = v1949[1];
      v2121 = true;
      
      break;
      }
    }
  stdlib.assert(v2121, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:476:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'invalid command',
    who: 'Umvir_propose'
    });
  const v2144 = await stdlib.Array_asyncReduce([v1990], v1991, async([v2146], v2145, v2147) => {
    const v2148 = {
      None: 0,
      Some: 1
      }[v2145[0]];
    const v2149 = stdlib.eq(v2148, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2150 = stdlib.addressEq(v1946, v2146);
    const v2151 = v2149 ? v2150 : false;
    const v2152 = ['Some', v2147];
    const v2153 = v2151 ? v2152 : v2145;
    
    return v2153;})
  const v2154 = {
    None: 0,
    Some: 1
    }[v2144[0]];
  const v2155 = stdlib.eq(v2154, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2155, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:477:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_propose'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1841, v1858, v1862, v2032],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:480:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn1;
      
      switch (v2205[0]) {
        case 'Umvir_propose0_269': {
          const v2208 = v2205[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Umvir_propose"
            });
          const v2213 = v2208[stdlib.checkedBigNumberify('./index.rsh:475:12:spread', stdlib.UInt_max, '0')];
          const v2235 = v1858.umvirs;
          const v2236 = ['None', null];
          ;
          const v2322 = await stdlib.Array_asyncReduce([v2235], v2236, async([v2324], v2323, v2325) => {
            const v2326 = {
              None: 0,
              Some: 1
              }[v2323[0]];
            const v2327 = stdlib.eq(v2326, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v2328 = stdlib.addressEq(v2204, v2324);
            const v2329 = v2327 ? v2328 : false;
            const v2330 = ['Some', v2325];
            const v2331 = v2329 ? v2330 : v2323;
            
            return v2331;})
          const v2335 = stdlib.fromSome(v2322, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
          const v2336 = v1858.cmds;
          const v2338 = stdlib.Array_set(v2336, v2335, v2213);
          const v2340 = true;
          const v2341 = await txn1.getOutput('Umvir_propose', 'v2340', ctc6, v2340);
          
          const v2365 = v1858.closed;
          const v2367 = v1858.info;
          const v2369 = {
            closed: v2365,
            cmds: v2338,
            info: v2367,
            umvirs: v2235
            };
          const v8914 = v2369;
          const v8916 = v1862;
          const v8917 = v2369.closed;
          if (v8917) {
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
        case 'Umvir_support0_269': {
          const v2595 = v2205[1];
          
          break;
          }
        case 'register0_269': {
          const v2982 = v2205[1];
          
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
  const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn1;
  switch (v2205[0]) {
    case 'Umvir_propose0_269': {
      const v2208 = v2205[1];
      undefined /* setApiDetails */;
      const v2213 = v2208[stdlib.checkedBigNumberify('./index.rsh:475:12:spread', stdlib.UInt_max, '0')];
      let v2214;
      switch (v2213[0]) {
        case 'Harvest': {
          const v2215 = v2213[1];
          v2214 = true;
          
          break;
          }
        case 'Kill': {
          const v2216 = v2213[1];
          v2214 = true;
          
          break;
          }
        case 'NewInfo': {
          const v2217 = v2213[1];
          const v2218 = v2217.protoFee;
          const v2219 = v2217.lpFee;
          const v2220 = v2217.totFee;
          const v2221 = stdlib.lt256(v2218, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2222 = stdlib.lt256(v2219, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2223 = v2221 ? v2222 : false;
          let v2224;
          if (v2223) {
            const v2225 = stdlib.safeAdd256(v2219, v2218);
            const v2226 = stdlib.eq256(v2220, v2225);
            v2224 = v2226;
            }
          else {
            v2224 = false;
            }
          const v2227 = stdlib.lt256(v2220, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2228 = v2224 ? v2227 : false;
          const v2229 = stdlib.gt256(v2220, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2230 = v2228 ? v2229 : false;
          v2214 = v2230;
          
          break;
          }
        case 'NewUmvirs': {
          const v2231 = v2213[1];
          v2214 = true;
          
          break;
          }
        case 'NoOp': {
          const v2232 = v2213[1];
          v2214 = true;
          
          break;
          }
        case 'Rewards': {
          const v2233 = v2213[1];
          v2214 = true;
          
          break;
          }
        }
      stdlib.assert(v2214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:476:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_propose'
        });
      const v2235 = v1858.umvirs;
      const v2236 = ['None', null];
      const v2237 = await stdlib.Array_asyncReduce([v2235], v2236, async([v2239], v2238, v2240) => {
        const v2241 = {
          None: 0,
          Some: 1
          }[v2238[0]];
        const v2242 = stdlib.eq(v2241, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2243 = stdlib.addressEq(v2204, v2239);
        const v2244 = v2242 ? v2243 : false;
        const v2245 = ['Some', v2240];
        const v2246 = v2244 ? v2245 : v2238;
        
        return v2246;})
      const v2247 = {
        None: 0,
        Some: 1
        }[v2237[0]];
      const v2248 = stdlib.eq(v2247, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2248, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:477:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:475:34:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:475:34:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_propose'
        });
      ;
      let v2299;
      switch (v2213[0]) {
        case 'Harvest': {
          const v2300 = v2213[1];
          v2299 = true;
          
          break;
          }
        case 'Kill': {
          const v2301 = v2213[1];
          v2299 = true;
          
          break;
          }
        case 'NewInfo': {
          const v2302 = v2213[1];
          const v2303 = v2302.protoFee;
          const v2304 = v2302.lpFee;
          const v2305 = v2302.totFee;
          const v2306 = stdlib.lt256(v2303, stdlib.checkedBigNumberify('./index.rsh:320:22:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2307 = stdlib.lt256(v2304, stdlib.checkedBigNumberify('./index.rsh:321:19:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2308 = v2306 ? v2307 : false;
          let v2309;
          if (v2308) {
            const v2310 = stdlib.safeAdd256(v2304, v2303);
            const v2311 = stdlib.eq256(v2305, v2310);
            v2309 = v2311;
            }
          else {
            v2309 = false;
            }
          const v2312 = stdlib.lt256(v2305, stdlib.checkedBigNumberify('./index.rsh:323:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '100'));
          const v2313 = v2309 ? v2312 : false;
          const v2314 = stdlib.gt256(v2305, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2315 = v2313 ? v2314 : false;
          v2299 = v2315;
          
          break;
          }
        case 'NewUmvirs': {
          const v2316 = v2213[1];
          v2299 = true;
          
          break;
          }
        case 'NoOp': {
          const v2317 = v2213[1];
          v2299 = true;
          
          break;
          }
        case 'Rewards': {
          const v2318 = v2213[1];
          v2299 = true;
          
          break;
          }
        }
      stdlib.assert(v2299, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:476:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:481:15:application call to [unknown function] (defined at: ./index.rsh:481:15:function exp)'],
        msg: 'invalid command',
        who: 'Umvir_propose'
        });
      const v2322 = await stdlib.Array_asyncReduce([v2235], v2236, async([v2324], v2323, v2325) => {
        const v2326 = {
          None: 0,
          Some: 1
          }[v2323[0]];
        const v2327 = stdlib.eq(v2326, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2328 = stdlib.addressEq(v2204, v2324);
        const v2329 = v2327 ? v2328 : false;
        const v2330 = ['Some', v2325];
        const v2331 = v2329 ? v2330 : v2323;
        
        return v2331;})
      const v2332 = {
        None: 0,
        Some: 1
        }[v2322[0]];
      const v2333 = stdlib.eq(v2332, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2333, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:477:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:481:15:application call to [unknown function] (defined at: ./index.rsh:481:15:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_propose'
        });
      const v2335 = stdlib.fromSome(v2322, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
      const v2336 = v1858.cmds;
      const v2338 = stdlib.Array_set(v2336, v2335, v2213);
      const v2340 = true;
      const v2341 = await txn1.getOutput('Umvir_propose', 'v2340', ctc6, v2340);
      if (v1352) {
        stdlib.protect(ctc1, await interact.out(v2208, v2341), {
          at: './index.rsh:475:13:application',
          fs: ['at ./index.rsh:475:13:application call to [unknown function] (defined at: ./index.rsh:475:13:function exp)', 'at ./index.rsh:482:14:application call to "k" (defined at: ./index.rsh:481:15:function exp)', 'at ./index.rsh:481:15:application call to [unknown function] (defined at: ./index.rsh:481:15:function exp)'],
          msg: 'out',
          who: 'Umvir_propose'
          });
        }
      else {
        }
      
      const v2365 = v1858.closed;
      const v2367 = v1858.info;
      const v2369 = {
        closed: v2365,
        cmds: v2338,
        info: v2367,
        umvirs: v2235
        };
      const v8914 = v2369;
      const v8916 = v1862;
      const v8917 = v2369.closed;
      if (v8917) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Umvir_support0_269': {
      const v2595 = v2205[1];
      return;
      break;
      }
    case 'register0_269': {
      const v2982 = v2205[1];
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc3]);
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc3], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc4,
    Kill: ctc1,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc1,
    Rewards: ctc3
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc3,
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
  const ctc16 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc17 = stdlib.T_Data({
    Umvir_propose0_269: ctc15,
    Umvir_support0_269: ctc14,
    register0_269: ctc16
    });
  const ctc18 = stdlib.T_Struct([['A', ctc5], ['B', ctc5]]);
  const ctc19 = stdlib.T_Tuple([ctc18, ctc13]);
  const ctc20 = stdlib.T_Tuple([ctc13, ctc19]);
  
  
  const [v1841, v1858, v1862] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc12, ctc13]);
  const v2034 = ctc.selfAddress();
  const v2036 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_support0_269" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'in',
    who: 'Umvir_support'
    });
  const v2037 = v2036[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2038 = v2036[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2059 = v1858.umvirs;
  const v2060 = stdlib.lt(v2037, stdlib.checkedBigNumberify('./index.rsh:532:30:dot', stdlib.UInt_max, '3'));
  stdlib.assert(v2060, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:532:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_support0_269" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'illegal idx',
    who: 'Umvir_support'
    });
  const v2063 = ['None', null];
  const v2064 = await stdlib.Array_asyncReduce([v2059], v2063, async([v2066], v2065, v2067) => {
    const v2068 = {
      None: 0,
      Some: 1
      }[v2065[0]];
    const v2069 = stdlib.eq(v2068, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2070 = stdlib.addressEq(v2034, v2066);
    const v2071 = v2069 ? v2070 : false;
    const v2072 = ['Some', v2067];
    const v2073 = v2071 ? v2072 : v2065;
    
    return v2073;})
  const v2074 = {
    None: 0,
    Some: 1
    }[v2064[0]];
  const v2075 = stdlib.eq(v2074, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2075, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:533:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_support0_269" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_support'
    });
  const v2077 = stdlib.fromSome(v2064, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
  const v2078 = stdlib.eq(v2037, v2077);
  const v2079 = v2078 ? false : true;
  stdlib.assert(v2079, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:534:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_support0_269" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'cannot support self',
    who: 'Umvir_support'
    });
  const v2081 = v1858.cmds;
  const v2083 = v2081[v2037];
  const v2084 = stdlib.digest([ctc9], [v2038]);
  const v2085 = stdlib.digest([ctc9], [v2083]);
  const v2086 = stdlib.digestEq(v2084, v2085);
  stdlib.assert(v2086, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:536:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to "runUmvir_support0_269" (defined at: ./index.rsh:531:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'command switched',
    who: 'Umvir_support'
    });
  const v2117 = ['Umvir_support0_269', v2036];
  
  const v2169 = await stdlib.Array_asyncReduce([v2059], v2063, async([v2171], v2170, v2172) => {
    const v2173 = {
      None: 0,
      Some: 1
      }[v2170[0]];
    const v2174 = stdlib.eq(v2173, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2175 = stdlib.addressEq(v2034, v2171);
    const v2176 = v2174 ? v2175 : false;
    const v2177 = ['Some', v2172];
    const v2178 = v2176 ? v2177 : v2170;
    
    return v2178;})
  const v2179 = {
    None: 0,
    Some: 1
    }[v2169[0]];
  const v2180 = stdlib.eq(v2179, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2180, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:533:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'not umvir',
    who: 'Umvir_support'
    });
  const v2182 = stdlib.fromSome(v2169, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
  const v2183 = stdlib.eq(v2037, v2182);
  const v2184 = v2183 ? false : true;
  stdlib.assert(v2184, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:534:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'cannot support self',
    who: 'Umvir_support'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1841, v1858, v1862, v2117],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:539:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn1;
      
      switch (v2205[0]) {
        case 'Umvir_propose0_269': {
          const v2208 = v2205[1];
          
          break;
          }
        case 'Umvir_support0_269': {
          const v2595 = v2205[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Umvir_support"
            });
          const v2642 = v2595[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '0')];
          const v2644 = v1858.umvirs;
          const v2666 = v1858.cmds;
          const v2668 = v2666[v2642];
          ;
          const v2794 = stdlib.Array_set(v2666, v2642, v1841);
          const v2797 = true;
          const v2798 = await txn1.getOutput('Umvir_support', 'v2797', ctc6, v2797);
          
          switch (v2668[0]) {
            case 'Harvest': {
              const v2823 = v2668[1];
              const v2824 = v2823[stdlib.checkedBigNumberify('./index.rsh:515:23:array', stdlib.UInt_max, '0')];
              const v2827 = v2823[stdlib.checkedBigNumberify('./index.rsh:515:23:array', stdlib.UInt_max, '3')];
              const v2828 = v1858.info;
              const v2829 = v2828.protoFee;
              const v2830 = v2828.lpFee;
              const v2831 = v2828.totFee;
              const v2832 = v2828.protoAddr;
              const v2833 = v2828.locked;
              const v2836 = [];
              const v2847 = {
                locked: v2833,
                lpFee: v2830,
                protoAddr: v2832,
                protoFee: v2829,
                totFee: v2831
                };
              const v2848 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v2824,
                  remote: ({
                    accs: [v2827],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:517:41:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:517:41:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc19.defaultValue /* simReturnVal */];})();
              const v2849 = await txn1.getOutput('internal', 'v2848', ctc20, v2848);
              const v2851 = v2849[stdlib.checkedBigNumberify('./index.rsh:517:41:application', stdlib.UInt_max, '0')];
              const v2860 = stdlib.add(v1862, v2851);
              const v2865 = v1858.closed;
              const v2866 = {
                closed: v2865,
                cmds: v2794,
                info: v2828,
                umvirs: v2644
                };
              const v8959 = v2866;
              const v8961 = v2860;
              const v8962 = v2866.closed;
              if (v8962) {
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
              const v2869 = v2668[1];
              const v2872 = v1858.info;
              const v2874 = {
                closed: true,
                cmds: v2666,
                info: v2872,
                umvirs: v2644
                };
              const v2877 = v2874.info;
              const v2878 = v2874.umvirs;
              const v2879 = v2874.closed;
              const v2880 = {
                closed: v2879,
                cmds: v2794,
                info: v2877,
                umvirs: v2878
                };
              const v8964 = v2880;
              const v8966 = v1862;
              const v8967 = v2880.closed;
              if (v8967) {
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
              const v2883 = v2668[1];
              const v2884 = v1858.closed;
              const v2888 = v2883.locked;
              const v2889 = v2883.lpFee;
              const v2890 = v2883.protoAddr;
              const v2891 = v2883.protoFee;
              const v2892 = v2883.totFee;
              const v2893 = {
                locked: v2888,
                lpFee: v2889,
                protoAddr: v2890,
                protoFee: v2891,
                totFee: v2892
                };
              const v2894 = {
                closed: v2884,
                cmds: v2666,
                info: v2893,
                umvirs: v2644
                };
              const v2898 = v2894.info;
              const v2899 = v2894.umvirs;
              const v2900 = v2894.closed;
              const v2901 = {
                closed: v2900,
                cmds: v2794,
                info: v2898,
                umvirs: v2899
                };
              const v8969 = v2901;
              const v8971 = v1862;
              const v8972 = v2901.closed;
              if (v8972) {
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
              const v2904 = v2668[1];
              const v2905 = v1858.closed;
              const v2907 = v1858.info;
              const v2909 = {
                closed: v2905,
                cmds: v2666,
                info: v2907,
                umvirs: v2904
                };
              const v2912 = v2909.info;
              const v2913 = v2909.umvirs;
              const v2914 = v2909.closed;
              const v2915 = {
                closed: v2914,
                cmds: v2794,
                info: v2912,
                umvirs: v2913
                };
              const v8974 = v2915;
              const v8976 = v1862;
              const v8977 = v2915.closed;
              if (v8977) {
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
              const v2918 = v2668[1];
              const v2920 = v1858.info;
              const v2922 = v1858.closed;
              const v2923 = {
                closed: v2922,
                cmds: v2794,
                info: v2920,
                umvirs: v2644
                };
              const v8979 = v2923;
              const v8981 = v1862;
              const v8982 = v2923.closed;
              if (v8982) {
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
              const v2926 = v2668[1];
              const v2928 = (stdlib.le(await ctc.getBalance(), v1862) ? stdlib.checkedBigNumberify('./index.rsh:521:48:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1862));
              const v2929 = stdlib.safeAdd(v2928, v1862);
              const v2933 = stdlib.sub(v2929, v2928);
              sim_r.txns.push({
                kind: 'from',
                to: v2926,
                tok: undefined /* Nothing */
                });
              const v2935 = v1858.info;
              const v2937 = v1858.closed;
              const v2938 = {
                closed: v2937,
                cmds: v2794,
                info: v2935,
                umvirs: v2644
                };
              const v8984 = v2938;
              const v8986 = v2933;
              const v8987 = v2938.closed;
              if (v8987) {
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
        case 'register0_269': {
          const v2982 = v2205[1];
          
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
  const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn1;
  switch (v2205[0]) {
    case 'Umvir_propose0_269': {
      const v2208 = v2205[1];
      return;
      break;
      }
    case 'Umvir_support0_269': {
      const v2595 = v2205[1];
      undefined /* setApiDetails */;
      const v2642 = v2595[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '0')];
      const v2643 = v2595[stdlib.checkedBigNumberify('./index.rsh:531:12:spread', stdlib.UInt_max, '1')];
      const v2644 = v1858.umvirs;
      const v2645 = stdlib.lt(v2642, stdlib.checkedBigNumberify('./index.rsh:532:30:dot', stdlib.UInt_max, '3'));
      stdlib.assert(v2645, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:532:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'illegal idx',
        who: 'Umvir_support'
        });
      const v2648 = ['None', null];
      const v2649 = await stdlib.Array_asyncReduce([v2644], v2648, async([v2651], v2650, v2652) => {
        const v2653 = {
          None: 0,
          Some: 1
          }[v2650[0]];
        const v2654 = stdlib.eq(v2653, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2655 = stdlib.addressEq(v2204, v2651);
        const v2656 = v2654 ? v2655 : false;
        const v2657 = ['Some', v2652];
        const v2658 = v2656 ? v2657 : v2650;
        
        return v2658;})
      const v2659 = {
        None: 0,
        Some: 1
        }[v2649[0]];
      const v2660 = stdlib.eq(v2659, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2660, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:533:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_support'
        });
      const v2662 = stdlib.fromSome(v2649, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
      const v2663 = stdlib.eq(v2642, v2662);
      const v2664 = v2663 ? false : true;
      stdlib.assert(v2664, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:534:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'cannot support self',
        who: 'Umvir_support'
        });
      const v2666 = v1858.cmds;
      const v2668 = v2666[v2642];
      const v2669 = stdlib.digest([ctc9], [v2643]);
      const v2670 = stdlib.digest([ctc9], [v2668]);
      const v2671 = stdlib.digestEq(v2669, v2670);
      stdlib.assert(v2671, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:536:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:531:40:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:531:40:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'command switched',
        who: 'Umvir_support'
        });
      ;
      const v2767 = await stdlib.Array_asyncReduce([v2644], v2648, async([v2769], v2768, v2770) => {
        const v2771 = {
          None: 0,
          Some: 1
          }[v2768[0]];
        const v2772 = stdlib.eq(v2771, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2773 = stdlib.addressEq(v2204, v2769);
        const v2774 = v2772 ? v2773 : false;
        const v2775 = ['Some', v2770];
        const v2776 = v2774 ? v2775 : v2768;
        
        return v2776;})
      const v2777 = {
        None: 0,
        Some: 1
        }[v2767[0]];
      const v2778 = stdlib.eq(v2777, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2778, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:467:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:533:29:application call to "chkUmvir" (defined at: ./index.rsh:465:32:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
        msg: 'not umvir',
        who: 'Umvir_support'
        });
      const v2780 = stdlib.fromSome(v2767, stdlib.checkedBigNumberify('./index.rsh:468:33:decimal', stdlib.UInt_max, '0'));
      const v2781 = stdlib.eq(v2642, v2780);
      const v2782 = v2781 ? false : true;
      stdlib.assert(v2782, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:534:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
        msg: 'cannot support self',
        who: 'Umvir_support'
        });
      const v2794 = stdlib.Array_set(v2666, v2642, v1841);
      const v2797 = true;
      const v2798 = await txn1.getOutput('Umvir_support', 'v2797', ctc6, v2797);
      if (v1352) {
        stdlib.protect(ctc1, await interact.out(v2595, v2798), {
          at: './index.rsh:531:13:application',
          fs: ['at ./index.rsh:531:13:application call to [unknown function] (defined at: ./index.rsh:531:13:function exp)', 'at ./index.rsh:541:14:application call to "k" (defined at: ./index.rsh:540:15:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
          msg: 'out',
          who: 'Umvir_support'
          });
        }
      else {
        }
      
      switch (v2668[0]) {
        case 'Harvest': {
          const v2823 = v2668[1];
          const v2824 = v2823[stdlib.checkedBigNumberify('./index.rsh:515:23:array', stdlib.UInt_max, '0')];
          const v2827 = v2823[stdlib.checkedBigNumberify('./index.rsh:515:23:array', stdlib.UInt_max, '3')];
          const v2828 = v1858.info;
          const v2829 = v2828.protoFee;
          const v2830 = v2828.lpFee;
          const v2831 = v2828.totFee;
          const v2832 = v2828.protoAddr;
          const v2833 = v2828.locked;
          const v2836 = [];
          const v2847 = {
            locked: v2833,
            lpFee: v2830,
            protoAddr: v2832,
            protoFee: v2829,
            totFee: v2831
            };
          const v2848 = undefined /* Remote */;
          const v2849 = await txn1.getOutput('internal', 'v2848', ctc20, v2848);
          const v2851 = v2849[stdlib.checkedBigNumberify('./index.rsh:517:41:application', stdlib.UInt_max, '0')];
          const v2860 = stdlib.add(v1862, v2851);
          const v2861 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2851);
          stdlib.assert(v2861, {
            at: './index.rsh:517:41:application',
            fs: ['at ./index.rsh:511:20:application call to [unknown function] (defined at: ./index.rsh:515:50:function exp)', 'at ./index.rsh:511:20:application call to [unknown function] (defined at: ./index.rsh:511:20:function exp)', 'at ./index.rsh:543:57:application call to "evalCommand" (defined at: ./index.rsh:510:35:function exp)', 'at ./index.rsh:540:15:application call to [unknown function] (defined at: ./index.rsh:540:15:function exp)'],
            msg: 'remote bill check',
            who: 'Umvir_support'
            });
          const v2865 = v1858.closed;
          const v2866 = {
            closed: v2865,
            cmds: v2794,
            info: v2828,
            umvirs: v2644
            };
          const v8959 = v2866;
          const v8961 = v2860;
          const v8962 = v2866.closed;
          if (v8962) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Kill': {
          const v2869 = v2668[1];
          const v2872 = v1858.info;
          const v2874 = {
            closed: true,
            cmds: v2666,
            info: v2872,
            umvirs: v2644
            };
          const v2877 = v2874.info;
          const v2878 = v2874.umvirs;
          const v2879 = v2874.closed;
          const v2880 = {
            closed: v2879,
            cmds: v2794,
            info: v2877,
            umvirs: v2878
            };
          const v8964 = v2880;
          const v8966 = v1862;
          const v8967 = v2880.closed;
          if (v8967) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NewInfo': {
          const v2883 = v2668[1];
          const v2884 = v1858.closed;
          const v2888 = v2883.locked;
          const v2889 = v2883.lpFee;
          const v2890 = v2883.protoAddr;
          const v2891 = v2883.protoFee;
          const v2892 = v2883.totFee;
          const v2893 = {
            locked: v2888,
            lpFee: v2889,
            protoAddr: v2890,
            protoFee: v2891,
            totFee: v2892
            };
          const v2894 = {
            closed: v2884,
            cmds: v2666,
            info: v2893,
            umvirs: v2644
            };
          const v2898 = v2894.info;
          const v2899 = v2894.umvirs;
          const v2900 = v2894.closed;
          const v2901 = {
            closed: v2900,
            cmds: v2794,
            info: v2898,
            umvirs: v2899
            };
          const v8969 = v2901;
          const v8971 = v1862;
          const v8972 = v2901.closed;
          if (v8972) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NewUmvirs': {
          const v2904 = v2668[1];
          const v2905 = v1858.closed;
          const v2907 = v1858.info;
          const v2909 = {
            closed: v2905,
            cmds: v2666,
            info: v2907,
            umvirs: v2904
            };
          const v2912 = v2909.info;
          const v2913 = v2909.umvirs;
          const v2914 = v2909.closed;
          const v2915 = {
            closed: v2914,
            cmds: v2794,
            info: v2912,
            umvirs: v2913
            };
          const v8974 = v2915;
          const v8976 = v1862;
          const v8977 = v2915.closed;
          if (v8977) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'NoOp': {
          const v2918 = v2668[1];
          const v2920 = v1858.info;
          const v2922 = v1858.closed;
          const v2923 = {
            closed: v2922,
            cmds: v2794,
            info: v2920,
            umvirs: v2644
            };
          const v8979 = v2923;
          const v8981 = v1862;
          const v8982 = v2923.closed;
          if (v8982) {
            return;
            }
          else {
            return;
            }
          break;
          }
        case 'Rewards': {
          const v2926 = v2668[1];
          const v2928 = (stdlib.le(await ctc.getBalance(), v1862) ? stdlib.checkedBigNumberify('./index.rsh:521:48:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1862));
          const v2929 = stdlib.safeAdd(v2928, v1862);
          const v2933 = stdlib.sub(v2929, v2928);
          ;
          const v2935 = v1858.info;
          const v2937 = v1858.closed;
          const v2938 = {
            closed: v2937,
            cmds: v2794,
            info: v2935,
            umvirs: v2644
            };
          const v8984 = v2938;
          const v8986 = v2933;
          const v8987 = v2938.closed;
          if (v8987) {
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
    case 'register0_269': {
      const v2982 = v2205[1];
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc3]);
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Struct([['protoFee', ctc5], ['lpFee', ctc5], ['totFee', ctc5], ['protoAddr', ctc3], ['locked', ctc6]]);
  const ctc8 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc9 = stdlib.T_Data({
    Harvest: ctc4,
    Kill: ctc1,
    NewInfo: ctc7,
    NewUmvirs: ctc8,
    NoOp: ctc1,
    Rewards: ctc3
    });
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Object({
    locked: ctc6,
    lpFee: ctc5,
    protoAddr: ctc3,
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
  const ctc14 = stdlib.T_Tuple([ctc0, ctc2, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Tuple([ctc13, ctc9]);
  const ctc17 = stdlib.T_Data({
    Umvir_propose0_269: ctc15,
    Umvir_support0_269: ctc16,
    register0_269: ctc14
    });
  
  
  const [v1841, v1858, v1862] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc9, ctc12, ctc13]);
  const v1919 = ctc.selfAddress();
  const v1921 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:450:51:application call to [unknown function] (defined at: ./index.rsh:450:51:function exp)', 'at ./index.rsh:414:31:application call to "runregister0_269" (defined at: ./index.rsh:450:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v1922 = v1921[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1931 = stdlib.ctcAddrEq(v1922, v1919);
  stdlib.assert(v1931, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:437:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:451:15:application call to "chkCtc" (defined at: ./index.rsh:436:39:function exp)', 'at ./index.rsh:450:51:application call to [unknown function] (defined at: ./index.rsh:450:51:function exp)', 'at ./index.rsh:414:31:application call to "runregister0_269" (defined at: ./index.rsh:450:12:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
    msg: 'not contract',
    who: 'register'
    });
  const v1944 = ['register0_269', v1921];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1841, v1858, v1862, v1944],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./index.rsh:453:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn1;
      
      switch (v2205[0]) {
        case 'Umvir_propose0_269': {
          const v2208 = v2205[1];
          
          break;
          }
        case 'Umvir_support0_269': {
          const v2595 = v2205[1];
          
          break;
          }
        case 'register0_269': {
          const v2982 = v2205[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          ;
          const v3338 = v1858.info;
          const v3339 = v3338.protoFee;
          const v3340 = v3338.lpFee;
          const v3341 = v3338.totFee;
          const v3342 = v3338.protoAddr;
          const v3343 = v3338.locked;
          const v3344 = {
            locked: v3343,
            lpFee: v3340,
            protoAddr: v3342,
            protoFee: v3339,
            totFee: v3341
            };
          const v3345 = await txn1.getOutput('register', 'v3344', ctc7, v3344);
          
          const v9029 = v1858;
          const v9031 = v1862;
          const v9032 = v1858.closed;
          if (v9032) {
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
  const {data: [v2205], secs: v2207, time: v2206, didSend: v1352, from: v2204 } = txn1;
  switch (v2205[0]) {
    case 'Umvir_propose0_269': {
      const v2208 = v2205[1];
      return;
      break;
      }
    case 'Umvir_support0_269': {
      const v2595 = v2205[1];
      return;
      break;
      }
    case 'register0_269': {
      const v2982 = v2205[1];
      undefined /* setApiDetails */;
      const v3065 = v2982[stdlib.checkedBigNumberify('./index.rsh:450:12:spread', stdlib.UInt_max, '0')];
      const v3069 = stdlib.ctcAddrEq(v3065, v2204);
      stdlib.assert(v3069, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:437:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:451:15:application call to "chkCtc" (defined at: ./index.rsh:436:39:function exp)', 'at ./index.rsh:450:51:application call to [unknown function] (defined at: ./index.rsh:450:51:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:450:51:function exp)', 'at ./index.rsh:414:31:application call to [unknown function] (defined at: ./index.rsh:414:31:function exp)'],
        msg: 'not contract',
        who: 'register'
        });
      ;
      const v3338 = v1858.info;
      const v3339 = v3338.protoFee;
      const v3340 = v3338.lpFee;
      const v3341 = v3338.totFee;
      const v3342 = v3338.protoAddr;
      const v3343 = v3338.locked;
      const v3344 = {
        locked: v3343,
        lpFee: v3340,
        protoAddr: v3342,
        protoFee: v3339,
        totFee: v3341
        };
      const v3345 = await txn1.getOutput('register', 'v3344', ctc7, v3344);
      if (v1352) {
        stdlib.protect(ctc1, await interact.out(v2982, v3345), {
          at: './index.rsh:450:13:application',
          fs: ['at ./index.rsh:450:13:application call to [unknown function] (defined at: ./index.rsh:450:13:function exp)', 'at ./index.rsh:455:14:application call to "k" (defined at: ./index.rsh:454:15:function exp)', 'at ./index.rsh:454:15:application call to [unknown function] (defined at: ./index.rsh:454:15:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v9029 = v1858;
      const v9031 = v1862;
      const v9032 = v1858.closed;
      if (v9032) {
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
    impure: [`Umvir_propose((byte,byte[129]))byte`, `Umvir_support(uint64,(byte,byte[129]))byte`, `_reachp_0((uint64,address[3],(uint256,uint256,uint256)))void`, `_reachp_2((uint64,(byte,byte[138])))void`, `register(uint64,(byte,byte[8]),uint64)(uint256,uint256,uint256,address,byte)`],
    pure: [`Info()(address[3],(byte,byte[129])[3],(uint256,uint256,uint256,address,byte))`],
    sigs: [`Info()(address[3],(byte,byte[129])[3],(uint256,uint256,uint256,address,byte))`, `Umvir_propose((byte,byte[129]))byte`, `Umvir_support(uint64,(byte,byte[129]))byte`, `_reachp_0((uint64,address[3],(uint256,uint256,uint256)))void`, `_reachp_2((uint64,(byte,byte[138])))void`, `register(uint64,(byte,byte[8]),uint64)(uint256,uint256,uint256,address,byte)`]
    },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAGHA4EBIAgDiARgggEGhgMJBX8mCSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAEBAQAAAQIBAwEEAQUFYXBwSUQxGEEELytkSSJbNQFJIQVbNQKBEFs1BSpkKWRQJwRkUCcFZFAnBmRQJwdkUIIGBE5v3YIEZuR8pgRqw/UiBK1DxSEE1QqxfgTnYYXwNhoAjgYAAQPMAFAH9gOcAJsANAEhBhJEiAhiNBYkJVg1CzQWIQchCFg0FiMhC1hQNAtXQSA0C1cBIFA0C1dhIFA0C1chIFA0C1cAAVBQNQQxGSISRIAEFR98dTQEULAjQzYaATULIQWvKjQLUCEFr1BQNQshBjQBEkSICAA0CyJbNQw0C1cIizUTgATatm2MNAwWUDQTULA0DIgH1jQTIlWNAwdOB1EHW0L/ZTYaARc2GgI1CzUMIQWvKTQMFjQLUFBQNQtC/6w0E1cBgkk1DCJVjQYD3QPjA+kELwQ1BDtC/y6xIrIBIQqyEDQFshizNAsiWzUZNBYhByEIWDUYNBkhBgxEIQyvSTUTNQwiNRA0GCEENBALIQRYNRE0DCk0EBZQNAwiVSISMQA0ERIQTTUMNBAjCEk1ECEGDED/0TQMIlUjEkQ0GSEFrzQMiAcGFxNENBYjIQtYSTUQIQk0GQshCVg1DDQLVwiCATQMARJENBM1CyI1DTQYIQQ0DQshBFg1DjQLKTQNFlA0CyJVIhIxADQOEhBNNQs0DSMISTUNIQYMQP/RNAsiVSMSRDQZIQWvNAuIBp4XE0Q0EDQZIQkLNBddNQsjNQ2ACAAAAAAAAArtNA0WUQcIULA0DRZRBwg1BDQMIlWNBgQlBNsFCAVYBYwFpkL+GCcINBNXARlXAAhQAzEAEkQ0FiQlWEk1DFdBIDQMVwEgUDQMV2EgUDQMVyEgUDQMVwABUDULgAgAAAAAAAANEDQLULA0CzUEMgY1FTQWVwABF0EFiDEZIQ0SRLEisgEhCrIQNAWyGCENshmzgaCNBjQHCDUHiAXzIjIKMgmIBhs0A0D94kL91SEFrycENA0WNAxQNAsWUFCBca9QUDULQv3aNAsiWzUMNAtXCGA1DjQLV2hgNQ+ABFTCBto0DBZQNA5QNA9QsDQMiAWvNA9XICA1DTQPVwAgNQw0D1dAIDULNA0opDQMKKQQQQUANAs0DDQNoIgFXag1DzQPNAsopBA0CzIDpRBEgIIBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUXKjQXSVA0F1BQKjQMUDIKUDQNUDQLUFA0DlAyBiI1FDUVNRZC/peIBK+BwJoMNAYINQaxIrIBIQqyEIAGCDEAMgkSsh6AAQiyH7O0PTUFNhoBNQtC/r2IBH82GgE1C0L8jCIxNBJEgQcxNRJEIjE2EkQiMTcSRCI1BYgEXIHyBa8iIjUCNQEqSwFXAH9nKUsBV39/ZycESwFX/n9nJwVLAYH9AiEOWGcnBksBgfwDIQ5YZycHTIH7BIF3WGcrNAEWNAIWUDQFFlBnMRkiEkSIBAtC/h00GkQ0FiEHIQhYNRghDK9JNRM1CyI1EDQYIQQ0EAshBFg1ETQLKTQQFlA0CyJVIhIxADQREhBNNQs0ECMISTUQIQYMQP/RNAsiVSMSRDQMIlWNBgD3AP0BAwFJAU8BVUL7VCM1GkL/mCM1GkL/kjQMVwGBSTULVwAgNRk0C1cgIDUYNAtXQCA1EzQZKKQ0GCikEEEAMTQTNBg0GaCIA1KoNQs0CzQTKKQQNBMyA6UQNRpC/0wjNRpC/0YjNRpC/0AjNRpC/zoiNQtC/9Y0GUQ0EzULIjUNNBghBDQNCyEEWDUONAspNA0WUDQLIlUiEjEANA4SEE01CzQNIwhJNQ0hBgxA/9E0CyJVIxJEIzUNgAgAAAAAAAAJJDQNFlEHCFCwNA0WUQcINQQ0FlcAATQWIyELWCEFrzQLiAK/FyEJCzQMXVA0FiQlWFA0GFAyBjUVNRZC/JMjNRlC/3AjNRlC/2o0DFcBgUk1C1cAIDUSNAtXICA1ETQLV0AgNRA0EiikNBEopBBBADE0EDQRNBKgiAJeqDULNAs0ECikEDQQMgOlEDUZQv8kIzUZQv8eIzUZQv8YIzUZQv8SIjULQv/WNAxXATk1DTQWJCVYNQ4nCDQNVwAIUAM1CDIKeDUJKzIKYDQJCRY1CrEisgEhCrIQNA0iW7IYgATg2Vu1sho0DVcZIEmyHLIaNA5XQSA0DlcBIFA0DldhIFA0DlchIFA0DlcAAVCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAACyA0DFCwNAxJNQ0iWzUMIjQMEkQ0FlcAATQLUDQOUDQYUDIGNBQ0DAg1FDUVNRZC+3MpNBBQNBYkJVhQNBhQSTUMVwABNAtQNAwkJVhQNAwhByEIWFAyBjUVNRZC+0Y0DFcBgTUNNBZXAAE0EFA0DVeAATQNVyAgUDQNV2AgUDQNVwAgUDQNV0AgUFA0GFBJNQxXAAE0C1A0DCQlWFA0DCEHIQhYUDIGNRU1FkL69jQWVwABNBBQNBYkJVhQNAxXAWBQSTUNVwABNAtQNA0kJVhQNA0hByEIWFAyBjUVNRZC+sI0FlcAATQLUDQWJCVYUDQYUDIGNRU1FkL6qDIKYDIKeAk0FAlJNQ00DFcBIIgAvjQWVwABNAtQNBYkJVhQNBhQMgY0DTQUCDQNCTUUNRU1FkL6bzQXNBZQNBQWUCEGMgZC/CQiNQ9C+wcisgEjshCyB7IIs4lC+M40E1cBijULQvjfQvnyNhoBFzYaAjYaAxc1CzUMNQ1C+mVIiUwJSTUGMgmIAEiJCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSRUhBEwJr0xQiUlXAQBMIlVNiSM1A4k0BjQHSg9B/7FC/7mxQv94SSISTDQCEhFEiUlXAII1F0khCYHoBFg1FoHqBVs1FImxsglC/1I=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `19`,
    1000: `548`,
    1001: `548`,
    1002: `548`,
    1003: `548`,
    1004: `548`,
    1005: `548`,
    1006: `548`,
    1007: `548`,
    1008: `548`,
    1009: `548`,
    101: `20`,
    1010: `548`,
    1011: `548`,
    1012: `548`,
    1013: `548`,
    1014: `548`,
    1015: `548`,
    1016: `548`,
    1017: `548`,
    1018: `548`,
    1019: `548`,
    102: `21`,
    1020: `548`,
    1021: `548`,
    1022: `548`,
    1023: `548`,
    1024: `548`,
    1025: `548`,
    1026: `548`,
    1027: `548`,
    1028: `548`,
    1029: `548`,
    103: `22`,
    1030: `548`,
    1031: `548`,
    1032: `548`,
    1033: `548`,
    1034: `548`,
    1035: `548`,
    1036: `548`,
    1037: `548`,
    1038: `548`,
    1039: `548`,
    104: `23`,
    1040: `548`,
    1041: `548`,
    1042: `548`,
    1043: `548`,
    1044: `548`,
    1045: `548`,
    1046: `548`,
    1047: `548`,
    1048: `548`,
    1049: `548`,
    105: `24`,
    1050: `548`,
    1051: `548`,
    1052: `548`,
    1053: `548`,
    1054: `549`,
    1055: `549`,
    1056: `550`,
    1057: `551`,
    1058: `551`,
    1059: `552`,
    106: `24`,
    1060: `553`,
    1061: `554`,
    1062: `554`,
    1063: `555`,
    1064: `556`,
    1065: `557`,
    1066: `558`,
    1067: `558`,
    1068: `559`,
    1069: `560`,
    107: `25`,
    1070: `560`,
    1071: `561`,
    1072: `562`,
    1073: `562`,
    1074: `563`,
    1075: `564`,
    1076: `564`,
    1077: `565`,
    1078: `566`,
    1079: `567`,
    108: `26`,
    1080: `567`,
    1081: `568`,
    1082: `569`,
    1083: `569`,
    1084: `570`,
    1085: `571`,
    1086: `571`,
    1087: `572`,
    1088: `572`,
    1089: `573`,
    109: `27`,
    1090: `573`,
    1091: `574`,
    1092: `574`,
    1093: `574`,
    1094: `576`,
    1095: `576`,
    1096: `576`,
    1097: `577`,
    1098: `577`,
    1099: `577`,
    11: `2`,
    110: `27`,
    1100: `577`,
    1101: `579`,
    1102: `579`,
    1103: `580`,
    1104: `581`,
    1105: `581`,
    1106: `583`,
    1107: `584`,
    1108: `585`,
    1109: `585`,
    111: `28`,
    1110: `586`,
    1111: `586`,
    1112: `587`,
    1113: `587`,
    1114: `589`,
    1115: `589`,
    1116: `589`,
    1117: `589`,
    1118: `589`,
    1119: `589`,
    112: `29`,
    1120: `589`,
    1121: `589`,
    1122: `590`,
    1123: `590`,
    1124: `591`,
    1125: `591`,
    1126: `591`,
    1127: `592`,
    1128: `592`,
    1129: `593`,
    113: `30`,
    1130: `595`,
    1131: `595`,
    1132: `596`,
    1133: `596`,
    1134: `598`,
    1135: `598`,
    1136: `598`,
    1137: `599`,
    1138: `599`,
    1139: `600`,
    114: `30`,
    1140: `600`,
    1141: `600`,
    1142: `602`,
    1143: `602`,
    1144: `602`,
    1145: `604`,
    1146: `604`,
    1147: `604`,
    1148: `605`,
    1149: `605`,
    115: `31`,
    1150: `606`,
    1151: `606`,
    1152: `606`,
    1153: `608`,
    1154: `609`,
    1155: `609`,
    1156: `610`,
    1157: `611`,
    1158: `612`,
    1159: `612`,
    116: `32`,
    1160: `613`,
    1161: `613`,
    1162: `614`,
    1163: `615`,
    1164: `616`,
    1165: `617`,
    1166: `617`,
    1167: `618`,
    1168: `619`,
    1169: `620`,
    117: `33`,
    1170: `621`,
    1171: `621`,
    1172: `622`,
    1173: `623`,
    1174: `624`,
    1175: `625`,
    1176: `625`,
    1177: `626`,
    1178: `626`,
    1179: `626`,
    118: `33`,
    1180: `627`,
    1181: `627`,
    1182: `627`,
    1183: `628`,
    1184: `629`,
    1185: `630`,
    1186: `632`,
    1187: `632`,
    1188: `633`,
    1189: `633`,
    119: `34`,
    1190: `634`,
    1191: `635`,
    1192: `635`,
    1193: `636`,
    1194: `636`,
    1195: `636`,
    1196: `637`,
    1197: `638`,
    1198: `639`,
    1199: `639`,
    12: `2`,
    120: `35`,
    1200: `640`,
    1201: `640`,
    1202: `640`,
    1203: `641`,
    1204: `642`,
    1205: `642`,
    1206: `643`,
    1207: `643`,
    1208: `644`,
    1209: `644`,
    121: `37`,
    1210: `644`,
    1211: `645`,
    1212: `646`,
    1213: `646`,
    1214: `647`,
    1215: `647`,
    1216: `648`,
    1217: `648`,
    1218: `648`,
    1219: `649`,
    122: `37`,
    1220: `649`,
    1221: `650`,
    1222: `651`,
    1223: `652`,
    1224: `652`,
    1225: `653`,
    1226: `653`,
    1227: `654`,
    1228: `654`,
    1229: `654`,
    123: `37`,
    1230: `655`,
    1231: `655`,
    1232: `656`,
    1233: `657`,
    1234: `658`,
    1235: `658`,
    1236: `659`,
    1237: `660`,
    1238: `660`,
    1239: `660`,
    124: `37`,
    1240: `661`,
    1241: `661`,
    1242: `662`,
    1243: `663`,
    1244: `664`,
    1245: `665`,
    1246: `665`,
    1247: `666`,
    1248: `667`,
    1249: `667`,
    125: `37`,
    1250: `668`,
    1251: `669`,
    1252: `670`,
    1253: `670`,
    1254: `671`,
    1255: `672`,
    1256: `673`,
    1257: `674`,
    1258: `674`,
    1259: `675`,
    126: `37`,
    1260: `676`,
    1261: `677`,
    1262: `679`,
    1263: `679`,
    1264: `679`,
    1265: `680`,
    1266: `680`,
    1267: `680`,
    1268: `682`,
    1269: `682`,
    127: `37`,
    1270: `683`,
    1271: `690`,
    1272: `690`,
    1273: `691`,
    1274: `691`,
    1275: `692`,
    1276: `692`,
    1277: `693`,
    1278: `694`,
    1279: `694`,
    128: `37`,
    1280: `695`,
    1281: `695`,
    1282: `696`,
    1283: `697`,
    1284: `698`,
    1285: `698`,
    1286: `699`,
    1287: `699`,
    1288: `700`,
    1289: `701`,
    129: `37`,
    1290: `701`,
    1291: `704`,
    1292: `704`,
    1293: `705`,
    1294: `705`,
    1295: `706`,
    1296: `706`,
    1297: `707`,
    1298: `708`,
    1299: `708`,
    13: `2`,
    130: `37`,
    1300: `709`,
    1301: `710`,
    1302: `710`,
    1303: `711`,
    1304: `711`,
    1305: `712`,
    1306: `713`,
    1307: `713`,
    1308: `714`,
    1309: `715`,
    131: `37`,
    1310: `716`,
    1311: `716`,
    1312: `717`,
    1313: `718`,
    1314: `719`,
    1315: `720`,
    1316: `721`,
    1317: `721`,
    1318: `722`,
    1319: `722`,
    132: `37`,
    1320: `723`,
    1321: `724`,
    1322: `725`,
    1323: `726`,
    1324: `726`,
    1325: `727`,
    1326: `727`,
    1327: `728`,
    1328: `729`,
    1329: `730`,
    133: `37`,
    1330: `731`,
    1331: `731`,
    1332: `732`,
    1333: `732`,
    1334: `733`,
    1335: `734`,
    1336: `734`,
    1337: `734`,
    1338: `736`,
    1339: `736`,
    134: `37`,
    1340: `737`,
    1341: `738`,
    1342: `739`,
    1343: `740`,
    1344: `741`,
    1345: `749`,
    1346: `749`,
    1347: `750`,
    1348: `751`,
    1349: `752`,
    135: `37`,
    1350: `752`,
    1351: `752`,
    1352: `752`,
    1353: `752`,
    1354: `752`,
    1355: `752`,
    1356: `752`,
    1357: `752`,
    1358: `752`,
    1359: `752`,
    136: `37`,
    1360: `752`,
    1361: `752`,
    1362: `752`,
    1363: `753`,
    1364: `753`,
    1365: `753`,
    1366: `755`,
    1367: `756`,
    1368: `756`,
    1369: `757`,
    137: `37`,
    1370: `757`,
    1371: `757`,
    1372: `759`,
    1373: `760`,
    1374: `760`,
    1375: `761`,
    1376: `761`,
    1377: `761`,
    1378: `763`,
    1379: `763`,
    138: `37`,
    1380: `764`,
    1381: `764`,
    1382: `764`,
    1383: `765`,
    1384: `766`,
    1385: `766`,
    1386: `767`,
    1387: `767`,
    1388: `767`,
    1389: `768`,
    139: `37`,
    1390: `768`,
    1391: `769`,
    1392: `769`,
    1393: `770`,
    1394: `770`,
    1395: `770`,
    1396: `771`,
    1397: `771`,
    1398: `772`,
    1399: `772`,
    14: `2`,
    140: `37`,
    1400: `773`,
    1401: `773`,
    1402: `773`,
    1403: `774`,
    1404: `774`,
    1405: `775`,
    1406: `775`,
    1407: `776`,
    1408: `777`,
    1409: `778`,
    141: `37`,
    1410: `778`,
    1411: `779`,
    1412: `780`,
    1413: `781`,
    1414: `782`,
    1415: `782`,
    1416: `782`,
    1417: `783`,
    1418: `783`,
    1419: `784`,
    142: `37`,
    1420: `784`,
    1421: `785`,
    1422: `785`,
    1423: `786`,
    1424: `787`,
    1425: `787`,
    1426: `787`,
    1427: `788`,
    1428: `789`,
    1429: `789`,
    143: `37`,
    1430: `791`,
    1431: `791`,
    1432: `792`,
    1433: `792`,
    1434: `793`,
    1435: `794`,
    1436: `795`,
    1437: `796`,
    1438: `796`,
    1439: `797`,
    144: `37`,
    1440: `797`,
    1441: `798`,
    1442: `799`,
    1443: `800`,
    1444: `800`,
    1445: `801`,
    1446: `801`,
    1447: `801`,
    1448: `803`,
    1449: `804`,
    145: `37`,
    1450: `804`,
    1451: `805`,
    1452: `805`,
    1453: `805`,
    1454: `807`,
    1455: `808`,
    1456: `808`,
    1457: `809`,
    1458: `809`,
    1459: `809`,
    146: `37`,
    1460: `811`,
    1461: `812`,
    1462: `812`,
    1463: `813`,
    1464: `813`,
    1465: `813`,
    1466: `815`,
    1467: `816`,
    1468: `816`,
    1469: `817`,
    147: `37`,
    1470: `817`,
    1471: `817`,
    1472: `819`,
    1473: `819`,
    1474: `820`,
    1475: `825`,
    1476: `825`,
    1477: `826`,
    1478: `826`,
    1479: `827`,
    148: `37`,
    1480: `828`,
    1481: `828`,
    1482: `831`,
    1483: `831`,
    1484: `832`,
    1485: `832`,
    1486: `833`,
    1487: `833`,
    1488: `834`,
    1489: `835`,
    149: `37`,
    1490: `835`,
    1491: `836`,
    1492: `837`,
    1493: `837`,
    1494: `838`,
    1495: `838`,
    1496: `839`,
    1497: `840`,
    1498: `840`,
    1499: `841`,
    15: `2`,
    150: `37`,
    1500: `842`,
    1501: `843`,
    1502: `843`,
    1503: `844`,
    1504: `845`,
    1505: `846`,
    1506: `847`,
    1507: `848`,
    1508: `848`,
    1509: `849`,
    151: `37`,
    1510: `849`,
    1511: `850`,
    1512: `851`,
    1513: `852`,
    1514: `853`,
    1515: `853`,
    1516: `854`,
    1517: `854`,
    1518: `855`,
    1519: `856`,
    152: `37`,
    1520: `857`,
    1521: `858`,
    1522: `858`,
    1523: `859`,
    1524: `859`,
    1525: `860`,
    1526: `861`,
    1527: `861`,
    1528: `861`,
    1529: `863`,
    153: `38`,
    1530: `863`,
    1531: `864`,
    1532: `865`,
    1533: `866`,
    1534: `867`,
    1535: `868`,
    1536: `874`,
    1537: `875`,
    1538: `875`,
    1539: `876`,
    154: `38`,
    1540: `876`,
    1541: `876`,
    1542: `876`,
    1543: `876`,
    1544: `876`,
    1545: `876`,
    1546: `876`,
    1547: `876`,
    1548: `876`,
    1549: `877`,
    155: `38`,
    1550: `877`,
    1551: `878`,
    1552: `879`,
    1553: `879`,
    1554: `879`,
    1555: `880`,
    1556: `881`,
    1557: `882`,
    1558: `882`,
    1559: `883`,
    156: `39`,
    1560: `884`,
    1561: `884`,
    1562: `884`,
    1563: `885`,
    1564: `885`,
    1565: `886`,
    1566: `886`,
    1567: `887`,
    1568: `887`,
    1569: `887`,
    157: `39`,
    1570: `888`,
    1571: `888`,
    1572: `889`,
    1573: `890`,
    1574: `890`,
    1575: `891`,
    1576: `892`,
    1577: `892`,
    1578: `893`,
    1579: `894`,
    158: `39`,
    1580: `894`,
    1581: `895`,
    1582: `895`,
    1583: `895`,
    1584: `896`,
    1585: `897`,
    1586: `897`,
    1587: `898`,
    1588: `899`,
    1589: `899`,
    159: `39`,
    1590: `900`,
    1591: `901`,
    1592: `902`,
    1593: `902`,
    1594: `903`,
    1595: `904`,
    1596: `905`,
    1597: `906`,
    1598: `907`,
    1599: `907`,
    16: `2`,
    160: `39`,
    1600: `908`,
    1601: `909`,
    1602: `909`,
    1603: `910`,
    1604: `910`,
    1605: `911`,
    1606: `911`,
    1607: `912`,
    1608: `912`,
    1609: `912`,
    161: `39`,
    1610: `914`,
    1611: `915`,
    1612: `915`,
    1613: `916`,
    1614: `916`,
    1615: `916`,
    1616: `918`,
    1617: `919`,
    1618: `919`,
    1619: `920`,
    162: `39`,
    1620: `920`,
    1621: `920`,
    1622: `922`,
    1623: `922`,
    1624: `923`,
    1625: `923`,
    1626: `923`,
    1627: `924`,
    1628: `925`,
    1629: `925`,
    163: `39`,
    1630: `926`,
    1631: `926`,
    1632: `926`,
    1633: `927`,
    1634: `927`,
    1635: `928`,
    1636: `928`,
    1637: `929`,
    1638: `929`,
    1639: `929`,
    164: `39`,
    1640: `930`,
    1641: `930`,
    1642: `931`,
    1643: `931`,
    1644: `932`,
    1645: `932`,
    1646: `932`,
    1647: `933`,
    1648: `933`,
    1649: `934`,
    165: `39`,
    1650: `934`,
    1651: `935`,
    1652: `936`,
    1653: `937`,
    1654: `937`,
    1655: `938`,
    1656: `939`,
    1657: `940`,
    1658: `941`,
    1659: `941`,
    166: `39`,
    1660: `941`,
    1661: `942`,
    1662: `942`,
    1663: `943`,
    1664: `943`,
    1665: `944`,
    1666: `944`,
    1667: `945`,
    1668: `946`,
    1669: `946`,
    167: `39`,
    1670: `946`,
    1671: `947`,
    1672: `948`,
    1673: `948`,
    1674: `950`,
    1675: `950`,
    1676: `951`,
    1677: `951`,
    1678: `952`,
    1679: `953`,
    168: `39`,
    1680: `954`,
    1681: `955`,
    1682: `955`,
    1683: `956`,
    1684: `956`,
    1685: `957`,
    1686: `958`,
    1687: `959`,
    1688: `959`,
    1689: `960`,
    169: `39`,
    1690: `960`,
    1691: `960`,
    1692: `962`,
    1693: `963`,
    1694: `963`,
    1695: `964`,
    1696: `964`,
    1697: `964`,
    1698: `966`,
    1699: `967`,
    17: `2`,
    170: `41`,
    1700: `967`,
    1701: `968`,
    1702: `968`,
    1703: `968`,
    1704: `970`,
    1705: `971`,
    1706: `971`,
    1707: `972`,
    1708: `972`,
    1709: `972`,
    171: `46`,
    1710: `974`,
    1711: `975`,
    1712: `975`,
    1713: `976`,
    1714: `976`,
    1715: `976`,
    1716: `978`,
    1717: `978`,
    1718: `979`,
    1719: `979`,
    172: `46`,
    1720: `979`,
    1721: `980`,
    1722: `980`,
    1723: `981`,
    1724: `981`,
    1725: `982`,
    1726: `983`,
    1727: `984`,
    1728: `985`,
    1729: `985`,
    173: `47`,
    1730: `986`,
    1731: `986`,
    1732: `987`,
    1733: `987`,
    1734: `988`,
    1735: `988`,
    1736: `988`,
    1737: `989`,
    1738: `990`,
    1739: `991`,
    174: `47`,
    1740: `991`,
    1741: `992`,
    1742: `992`,
    1743: `993`,
    1744: `994`,
    1745: `994`,
    1746: `995`,
    1747: `996`,
    1748: `996`,
    1749: `997`,
    175: `48`,
    1750: `998`,
    1751: `998`,
    1752: `999`,
    1753: `1000`,
    1754: `1001`,
    1755: `1001`,
    1756: `1002`,
    1757: `1003`,
    1758: `1004`,
    1759: `1004`,
    176: `49`,
    1760: `1005`,
    1761: `1005`,
    1762: `1006`,
    1763: `1006`,
    1764: `1007`,
    1765: `1007`,
    1766: `1008`,
    1767: `1009`,
    1768: `1011`,
    1769: `1011`,
    177: `52`,
    1770: `1012`,
    1771: `1012`,
    1772: `1012`,
    1773: `1012`,
    1774: `1012`,
    1775: `1012`,
    1776: `1013`,
    1777: `1013`,
    1778: `1014`,
    1779: `1014`,
    178: `52`,
    1780: `1015`,
    1781: `1015`,
    1782: `1015`,
    1783: `1017`,
    1784: `1018`,
    1785: `1018`,
    1786: `1019`,
    1787: `1019`,
    1788: `1020`,
    1789: `1020`,
    179: `52`,
    1790: `1021`,
    1791: `1021`,
    1792: `1021`,
    1793: `1022`,
    1794: `1022`,
    1795: `1023`,
    1796: `1023`,
    1797: `1023`,
    1798: `1024`,
    1799: `1025`,
    18: `2`,
    180: `53`,
    1800: `1025`,
    1801: `1026`,
    1802: `1026`,
    1803: `1026`,
    1804: `1027`,
    1805: `1028`,
    1806: `1028`,
    1807: `1029`,
    1808: `1029`,
    1809: `1029`,
    181: `53`,
    1810: `1030`,
    1811: `1031`,
    1812: `1031`,
    1813: `1032`,
    1814: `1032`,
    1815: `1032`,
    1816: `1033`,
    1817: `1034`,
    1818: `1034`,
    1819: `1035`,
    182: `54`,
    1820: `1042`,
    1821: `1042`,
    1822: `1043`,
    1823: `1044`,
    1824: `1044`,
    1825: `1045`,
    1826: `1046`,
    1827: `1046`,
    1828: `1047`,
    1829: `1048`,
    183: `55`,
    1830: `1049`,
    1831: `1050`,
    1832: `1050`,
    1833: `1050`,
    1834: `1051`,
    1835: `1051`,
    1836: `1051`,
    1837: `1052`,
    1838: `1053`,
    1839: `1053`,
    184: `56`,
    1840: `1054`,
    1841: `1054`,
    1842: `1054`,
    1843: `1054`,
    1844: `1054`,
    1845: `1054`,
    1846: `1054`,
    1847: `1054`,
    1848: `1054`,
    1849: `1054`,
    185: `57`,
    1850: `1055`,
    1851: `1055`,
    1852: `1056`,
    1853: `1057`,
    1854: `1058`,
    1855: `1058`,
    1856: `1059`,
    1857: `1060`,
    1858: `1060`,
    1859: `1061`,
    186: `57`,
    1860: `1062`,
    1861: `1063`,
    1862: `1063`,
    1863: `1064`,
    1864: `1065`,
    1865: `1065`,
    1866: `1066`,
    1867: `1067`,
    1868: `1074`,
    1869: `1074`,
    187: `58`,
    1870: `1075`,
    1871: `1075`,
    1872: `1075`,
    1873: `1076`,
    1874: `1076`,
    1875: `1077`,
    1876: `1078`,
    1877: `1078`,
    1878: `1079`,
    1879: `1080`,
    188: `58`,
    1880: `1080`,
    1881: `1081`,
    1882: `1082`,
    1883: `1082`,
    1884: `1083`,
    1885: `1083`,
    1886: `1084`,
    1887: `1084`,
    1888: `1085`,
    1889: `1086`,
    189: `59`,
    1890: `1086`,
    1891: `1087`,
    1892: `1087`,
    1893: `1088`,
    1894: `1088`,
    1895: `1089`,
    1896: `1089`,
    1897: `1089`,
    1898: `1091`,
    1899: `1092`,
    19: `2`,
    190: `59`,
    1900: `1092`,
    1901: `1093`,
    1902: `1094`,
    1903: `1094`,
    1904: `1095`,
    1905: `1096`,
    1906: `1097`,
    1907: `1098`,
    1908: `1099`,
    1909: `1099`,
    191: `60`,
    1910: `1100`,
    1911: `1101`,
    1912: `1102`,
    1913: `1102`,
    1914: `1103`,
    1915: `1103`,
    1916: `1103`,
    1917: `1104`,
    1918: `1104`,
    1919: `1105`,
    192: `60`,
    1920: `1106`,
    1921: `1106`,
    1922: `1107`,
    1923: `1108`,
    1924: `1109`,
    1925: `1110`,
    1926: `1111`,
    1927: `1111`,
    1928: `1112`,
    1929: `1112`,
    193: `61`,
    1930: `1113`,
    1931: `1113`,
    1932: `1114`,
    1933: `1115`,
    1934: `1116`,
    1935: `1116`,
    1936: `1117`,
    1937: `1117`,
    1938: `1118`,
    1939: `1118`,
    194: `62`,
    1940: `1119`,
    1941: `1119`,
    1942: `1119`,
    1943: `1121`,
    1944: `1121`,
    1945: `1122`,
    1946: `1122`,
    1947: `1122`,
    1948: `1123`,
    1949: `1123`,
    195: `62`,
    1950: `1124`,
    1951: `1124`,
    1952: `1125`,
    1953: `1125`,
    1954: `1125`,
    1955: `1126`,
    1956: `1126`,
    1957: `1127`,
    1958: `1128`,
    1959: `1128`,
    196: `63`,
    1960: `1129`,
    1961: `1129`,
    1962: `1129`,
    1963: `1130`,
    1964: `1130`,
    1965: `1131`,
    1966: `1131`,
    1967: `1131`,
    1968: `1132`,
    1969: `1133`,
    197: `64`,
    1970: `1133`,
    1971: `1134`,
    1972: `1134`,
    1973: `1134`,
    1974: `1135`,
    1975: `1136`,
    1976: `1136`,
    1977: `1137`,
    1978: `1137`,
    1979: `1137`,
    198: `64`,
    1980: `1138`,
    1981: `1139`,
    1982: `1139`,
    1983: `1140`,
    1984: `1140`,
    1985: `1140`,
    1986: `1141`,
    1987: `1142`,
    1988: `1143`,
    1989: `1143`,
    199: `65`,
    1990: `1144`,
    1991: `1145`,
    1992: `1146`,
    1993: `1146`,
    1994: `1147`,
    1995: `1147`,
    1996: `1147`,
    1997: `1148`,
    1998: `1148`,
    1999: `1149`,
    2: `2`,
    20: `2`,
    200: `66`,
    2000: `1150`,
    2001: `1150`,
    2002: `1151`,
    2003: `1152`,
    2004: `1153`,
    2005: `1154`,
    2006: `1155`,
    2007: `1155`,
    2008: `1156`,
    2009: `1156`,
    201: `67`,
    2010: `1157`,
    2011: `1157`,
    2012: `1158`,
    2013: `1159`,
    2014: `1160`,
    2015: `1160`,
    2016: `1161`,
    2017: `1161`,
    2018: `1162`,
    2019: `1162`,
    202: `67`,
    2020: `1163`,
    2021: `1163`,
    2022: `1163`,
    2023: `1165`,
    2024: `1165`,
    2025: `1166`,
    2026: `1166`,
    2027: `1166`,
    2028: `1167`,
    2029: `1167`,
    203: `68`,
    2030: `1168`,
    2031: `1169`,
    2032: `1169`,
    2033: `1170`,
    2034: `1171`,
    2035: `1172`,
    2036: `1173`,
    2037: `1174`,
    2038: `1174`,
    2039: `1175`,
    204: `68`,
    2040: `1175`,
    2041: `1175`,
    2042: `1176`,
    2043: `1177`,
    2044: `1178`,
    2045: `1178`,
    2046: `1179`,
    2047: `1179`,
    2048: `1179`,
    2049: `1180`,
    205: `68`,
    2050: `1180`,
    2051: `1181`,
    2052: `1182`,
    2053: `1182`,
    2054: `1183`,
    2055: `1184`,
    2056: `1185`,
    2057: `1186`,
    2058: `1187`,
    2059: `1187`,
    206: `69`,
    2060: `1188`,
    2061: `1188`,
    2062: `1189`,
    2063: `1189`,
    2064: `1190`,
    2065: `1191`,
    2066: `1192`,
    2067: `1192`,
    2068: `1193`,
    2069: `1193`,
    207: `69`,
    2070: `1194`,
    2071: `1194`,
    2072: `1195`,
    2073: `1195`,
    2074: `1195`,
    2075: `1197`,
    2076: `1197`,
    2077: `1198`,
    2078: `1198`,
    2079: `1198`,
    208: `70`,
    2080: `1199`,
    2081: `1199`,
    2082: `1200`,
    2083: `1201`,
    2084: `1201`,
    2085: `1202`,
    2086: `1203`,
    2087: `1204`,
    2088: `1205`,
    2089: `1206`,
    209: `70`,
    2090: `1206`,
    2091: `1207`,
    2092: `1208`,
    2093: `1208`,
    2094: `1209`,
    2095: `1209`,
    2096: `1210`,
    2097: `1210`,
    2098: `1211`,
    2099: `1211`,
    21: `2`,
    210: `70`,
    2100: `1211`,
    2101: `1213`,
    2102: `1213`,
    2103: `1214`,
    2104: `1215`,
    2105: `1215`,
    2106: `1216`,
    2107: `1217`,
    2108: `1218`,
    2109: `1218`,
    211: `71`,
    2110: `1219`,
    2111: `1221`,
    2112: `1222`,
    2113: `1222`,
    2114: `1224`,
    2115: `1224`,
    2116: `1225`,
    2117: `1225`,
    2118: `1225`,
    2119: `1226`,
    212: `72`,
    2120: `1226`,
    2121: `1226`,
    2122: `1227`,
    2123: `1227`,
    2124: `1228`,
    2125: `1228`,
    2126: `1228`,
    2127: `1229`,
    2128: `1229`,
    2129: `1230`,
    213: `72`,
    2130: `1231`,
    2131: `1231`,
    2132: `1232`,
    2133: `1233`,
    2134: `1234`,
    2135: `1235`,
    2136: `1236`,
    2137: `1236`,
    2138: `1237`,
    2139: `1238`,
    214: `73`,
    2140: `1238`,
    2141: `1239`,
    2142: `1239`,
    2143: `1240`,
    2144: `1240`,
    2145: `1241`,
    2146: `1242`,
    2147: `1242`,
    2148: `1243`,
    2149: `1244`,
    215: `73`,
    2150: `1244`,
    2151: `1245`,
    2152: `1245`,
    2153: `1246`,
    2154: `1246`,
    2155: `1247`,
    2156: `1247`,
    2157: `1247`,
    2158: `1250`,
    2159: `1250`,
    216: `73`,
    2160: `1251`,
    2161: `1251`,
    2162: `1252`,
    2163: `1253`,
    2164: `1253`,
    2165: `1254`,
    2166: `1255`,
    2167: `1256`,
    2168: `1256`,
    2169: `1257`,
    217: `74`,
    2170: `1257`,
    2171: `1258`,
    2172: `1258`,
    2173: `1258`,
    2174: `1260`,
    2175: `1261`,
    2176: `1261`,
    2177: `1262`,
    2178: `1262`,
    2179: `1262`,
    218: `75`,
    2180: `1264`,
    2181: `1265`,
    2182: `1265`,
    2183: `1266`,
    2184: `1267`,
    2185: `1267`,
    2186: `1268`,
    2187: `1268`,
    2188: `1269`,
    2189: `1269`,
    219: `75`,
    2190: `1270`,
    2191: `1271`,
    2192: `1273`,
    2193: `1273`,
    2194: `1273`,
    2195: `1275`,
    2196: `1275`,
    2197: `1276`,
    2198: `1276`,
    2199: `1276`,
    22: `2`,
    220: `76`,
    2200: `1277`,
    2201: `1277`,
    2202: `1278`,
    2203: `1278`,
    2204: `1278`,
    2205: `1280`,
    2206: `1280`,
    2207: `1280`,
    2208: `1283`,
    2209: `1283`,
    221: `76`,
    2210: `1283`,
    2211: `1284`,
    2212: `1285`,
    2213: `1285`,
    2214: `1285`,
    2215: `1286`,
    2216: `1286`,
    2217: `1286`,
    2218: `1287`,
    2219: `1288`,
    222: `76`,
    2220: `1288`,
    2221: `1289`,
    2222: `1289`,
    2223: `1290`,
    2224: `1290`,
    2225: `1291`,
    2226: `1291`,
    2227: `1291`,
    2228: `1293`,
    2229: `1294`,
    223: `77`,
    2230: `1296`,
    2231: `1297`,
    2232: `1298`,
    2233: `1299`,
    2234: `1299`,
    2235: `1300`,
    2236: `1300`,
    2237: `1301`,
    2238: `1301`,
    2239: `1301`,
    224: `78`,
    2240: `1302`,
    2241: `1304`,
    2242: `1305`,
    2243: `1306`,
    2244: `1306`,
    2245: `1306`,
    2246: `1307`,
    2247: `1308`,
    2248: `1308`,
    2249: `1311`,
    225: `78`,
    2250: `1311`,
    2251: `1312`,
    2252: `1312`,
    2253: `1313`,
    2254: `1314`,
    2255: `1315`,
    2256: `1316`,
    2257: `1316`,
    2258: `1317`,
    2259: `1318`,
    226: `79`,
    2260: `1318`,
    2261: `1319`,
    2262: `1319`,
    2263: `1320`,
    2264: `1320`,
    2265: `1321`,
    2266: `1322`,
    2267: `1323`,
    2268: `1323`,
    2269: `1324`,
    227: `79`,
    2270: `1325`,
    2271: `1326`,
    2272: `1327`,
    2273: `1327`,
    2274: `1328`,
    2275: `1329`,
    2276: `1330`,
    2277: `1332`,
    2278: `1333`,
    2279: `1334`,
    228: `79`,
    2280: `1334`,
    2281: `1335`,
    2282: `1336`,
    2283: `1337`,
    2284: `1338`,
    2285: `1339`,
    2286: `1340`,
    2287: `1342`,
    2288: `1343`,
    2289: `1343`,
    229: `80`,
    2290: `1343`,
    2291: `1344`,
    2292: `1345`,
    2293: `1346`,
    2294: `1347`,
    2295: `1348`,
    2296: `1350`,
    2297: `1351`,
    2298: `1351`,
    2299: `1352`,
    23: `2`,
    230: `81`,
    2300: `1354`,
    2301: `1354`,
    2302: `1355`,
    2303: `1355`,
    2304: `1356`,
    2305: `1357`,
    2306: `1358`,
    2307: `1358`,
    2308: `1358`,
    2309: `1359`,
    231: `82`,
    2310: `1359`,
    2311: `1359`,
    2312: `1361`,
    2313: `1362`,
    2314: `1362`,
    2315: `1362`,
    2316: `1364`,
    2317: `1365`,
    2318: `1366`,
    2319: `1367`,
    232: `82`,
    2320: `1368`,
    2321: `1368`,
    2322: `1369`,
    2323: `1370`,
    2324: `1371`,
    2325: `1372`,
    2326: `1374`,
    2327: `1375`,
    2328: `1375`,
    2329: `1375`,
    233: `84`,
    2330: `1376`,
    2331: `1376`,
    2332: `1377`,
    2333: `1378`,
    2334: `1378`,
    2335: `1379`,
    2336: `1379`,
    2337: `1379`,
    2338: `1380`,
    2339: `1381`,
    234: `84`,
    2340: `1381`,
    2341: `1382`,
    2342: `1382`,
    2343: `1382`,
    2344: `1383`,
    2345: `1384`,
    2346: `1384`,
    2347: `1385`,
    2348: `1387`,
    2349: `1388`,
    235: `85`,
    2350: `1388`,
    2351: `1389`,
    236: `86`,
    237: `87`,
    238: `90`,
    239: `90`,
    24: `2`,
    240: `90`,
    241: `90`,
    242: `90`,
    243: `90`,
    244: `91`,
    245: `91`,
    246: `92`,
    247: `93`,
    248: `95`,
    249: `96`,
    25: `2`,
    250: `99`,
    251: `99`,
    252: `99`,
    253: `100`,
    254: `100`,
    255: `103`,
    256: `103`,
    257: `104`,
    258: `105`,
    259: `106`,
    26: `2`,
    260: `106`,
    261: `107`,
    262: `108`,
    263: `108`,
    264: `109`,
    265: `110`,
    266: `111`,
    267: `112`,
    268: `112`,
    269: `115`,
    27: `2`,
    270: `115`,
    271: `116`,
    272: `116`,
    273: `117`,
    274: `118`,
    275: `119`,
    276: `119`,
    277: `119`,
    278: `120`,
    279: `120`,
    28: `2`,
    280: `121`,
    281: `122`,
    282: `123`,
    283: `123`,
    284: `124`,
    285: `124`,
    286: `125`,
    287: `125`,
    288: `125`,
    289: `126`,
    29: `2`,
    290: `126`,
    291: `127`,
    292: `127`,
    293: `127`,
    294: `127`,
    295: `127`,
    296: `127`,
    297: `128`,
    298: `128`,
    299: `129`,
    3: `2`,
    30: `2`,
    300: `130`,
    301: `131`,
    302: `131`,
    303: `132`,
    304: `133`,
    305: `135`,
    306: `135`,
    307: `136`,
    308: `136`,
    309: `136`,
    31: `2`,
    310: `137`,
    311: `137`,
    312: `138`,
    313: `139`,
    314: `140`,
    315: `140`,
    316: `140`,
    317: `140`,
    318: `140`,
    319: `140`,
    32: `2`,
    320: `140`,
    321: `140`,
    322: `141`,
    323: `141`,
    324: `141`,
    325: `144`,
    326: `144`,
    327: `144`,
    328: `145`,
    329: `146`,
    33: `2`,
    330: `146`,
    331: `146`,
    332: `147`,
    333: `147`,
    334: `148`,
    335: `148`,
    336: `151`,
    337: `151`,
    338: `152`,
    339: `153`,
    34: `2`,
    340: `154`,
    341: `154`,
    342: `155`,
    343: `156`,
    344: `156`,
    345: `157`,
    346: `158`,
    347: `159`,
    348: `160`,
    349: `160`,
    35: `2`,
    350: `161`,
    351: `161`,
    352: `161`,
    353: `164`,
    354: `164`,
    355: `165`,
    356: `165`,
    357: `165`,
    358: `166`,
    359: `167`,
    36: `2`,
    360: `167`,
    361: `168`,
    362: `169`,
    363: `170`,
    364: `170`,
    365: `170`,
    366: `170`,
    367: `170`,
    368: `170`,
    369: `170`,
    37: `2`,
    370: `170`,
    371: `170`,
    372: `170`,
    373: `170`,
    374: `170`,
    375: `170`,
    376: `170`,
    377: `171`,
    378: `171`,
    379: `171`,
    38: `2`,
    380: `175`,
    381: `176`,
    382: `177`,
    383: `177`,
    384: `178`,
    385: `178`,
    386: `179`,
    387: `179`,
    388: `180`,
    389: `180`,
    39: `2`,
    390: `181`,
    391: `181`,
    392: `182`,
    393: `184`,
    394: `184`,
    395: `185`,
    396: `186`,
    397: `187`,
    398: `187`,
    399: `188`,
    4: `2`,
    40: `2`,
    400: `188`,
    401: `189`,
    402: `189`,
    403: `190`,
    404: `190`,
    405: `191`,
    406: `192`,
    407: `192`,
    408: `193`,
    409: `193`,
    41: `2`,
    410: `194`,
    411: `194`,
    412: `195`,
    413: `196`,
    414: `203`,
    415: `203`,
    416: `204`,
    417: `205`,
    418: `206`,
    419: `206`,
    42: `2`,
    420: `207`,
    421: `207`,
    422: `208`,
    423: `209`,
    424: `209`,
    425: `212`,
    426: `212`,
    427: `213`,
    428: `213`,
    429: `214`,
    43: `2`,
    430: `214`,
    431: `215`,
    432: `216`,
    433: `216`,
    434: `217`,
    435: `218`,
    436: `218`,
    437: `219`,
    438: `219`,
    439: `220`,
    44: `2`,
    440: `221`,
    441: `221`,
    442: `222`,
    443: `223`,
    444: `224`,
    445: `224`,
    446: `225`,
    447: `226`,
    448: `227`,
    449: `228`,
    45: `2`,
    450: `229`,
    451: `229`,
    452: `230`,
    453: `230`,
    454: `231`,
    455: `232`,
    456: `233`,
    457: `234`,
    458: `234`,
    459: `235`,
    46: `2`,
    460: `235`,
    461: `236`,
    462: `237`,
    463: `238`,
    464: `239`,
    465: `239`,
    466: `240`,
    467: `240`,
    468: `241`,
    469: `242`,
    47: `2`,
    470: `242`,
    471: `242`,
    472: `244`,
    473: `244`,
    474: `245`,
    475: `246`,
    476: `247`,
    477: `248`,
    478: `249`,
    479: `257`,
    48: `2`,
    480: `257`,
    481: `258`,
    482: `258`,
    483: `259`,
    484: `260`,
    485: `260`,
    486: `261`,
    487: `261`,
    488: `261`,
    489: `262`,
    49: `2`,
    490: `263`,
    491: `264`,
    492: `271`,
    493: `271`,
    494: `272`,
    495: `273`,
    496: `273`,
    497: `274`,
    498: `275`,
    499: `276`,
    5: `2`,
    50: `2`,
    500: `276`,
    501: `277`,
    502: `277`,
    503: `278`,
    504: `278`,
    505: `279`,
    506: `280`,
    507: `280`,
    508: `281`,
    509: `282`,
    51: `2`,
    510: `282`,
    511: `283`,
    512: `283`,
    513: `284`,
    514: `284`,
    515: `284`,
    516: `285`,
    517: `286`,
    518: `286`,
    519: `287`,
    52: `2`,
    520: `288`,
    521: `289`,
    522: `296`,
    523: `296`,
    524: `297`,
    525: `297`,
    526: `298`,
    527: `299`,
    528: `299`,
    529: `302`,
    53: `2`,
    530: `302`,
    531: `303`,
    532: `303`,
    533: `304`,
    534: `304`,
    535: `305`,
    536: `306`,
    537: `306`,
    538: `307`,
    539: `308`,
    54: `2`,
    540: `308`,
    541: `309`,
    542: `309`,
    543: `310`,
    544: `311`,
    545: `311`,
    546: `312`,
    547: `313`,
    548: `314`,
    549: `314`,
    55: `2`,
    550: `315`,
    551: `316`,
    552: `317`,
    553: `318`,
    554: `319`,
    555: `319`,
    556: `320`,
    557: `320`,
    558: `321`,
    559: `322`,
    56: `2`,
    560: `323`,
    561: `324`,
    562: `324`,
    563: `325`,
    564: `325`,
    565: `326`,
    566: `327`,
    567: `328`,
    568: `329`,
    569: `329`,
    57: `2`,
    570: `330`,
    571: `330`,
    572: `331`,
    573: `332`,
    574: `332`,
    575: `332`,
    576: `334`,
    577: `334`,
    578: `335`,
    579: `336`,
    58: `2`,
    580: `337`,
    581: `338`,
    582: `339`,
    583: `345`,
    584: `345`,
    585: `346`,
    586: `346`,
    587: `347`,
    588: `348`,
    589: `348`,
    59: `2`,
    590: `349`,
    591: `349`,
    592: `349`,
    593: `350`,
    594: `351`,
    595: `352`,
    596: `357`,
    597: `357`,
    598: `358`,
    599: `358`,
    6: `2`,
    60: `2`,
    600: `359`,
    601: `359`,
    602: `360`,
    603: `361`,
    604: `361`,
    605: `362`,
    606: `363`,
    607: `363`,
    608: `364`,
    609: `365`,
    61: `2`,
    610: `365`,
    611: `366`,
    612: `366`,
    613: `366`,
    614: `366`,
    615: `366`,
    616: `366`,
    617: `366`,
    618: `366`,
    619: `366`,
    62: `2`,
    620: `366`,
    621: `367`,
    622: `367`,
    623: `368`,
    624: `369`,
    625: `369`,
    626: `369`,
    627: `370`,
    628: `371`,
    629: `372`,
    63: `2`,
    630: `372`,
    631: `373`,
    632: `374`,
    633: `374`,
    634: `374`,
    635: `375`,
    636: `375`,
    637: `376`,
    638: `376`,
    639: `377`,
    64: `2`,
    640: `378`,
    641: `379`,
    642: `379`,
    643: `379`,
    644: `379`,
    645: `379`,
    646: `379`,
    647: `379`,
    648: `379`,
    649: `379`,
    65: `2`,
    650: `379`,
    651: `379`,
    652: `379`,
    653: `379`,
    654: `379`,
    655: `380`,
    656: `380`,
    657: `380`,
    658: `383`,
    659: `383`,
    66: `2`,
    660: `384`,
    661: `384`,
    662: `385`,
    663: `385`,
    664: `385`,
    665: `386`,
    666: `386`,
    667: `386`,
    668: `387`,
    669: `388`,
    67: `2`,
    670: `389`,
    671: `389`,
    672: `390`,
    673: `391`,
    674: `399`,
    675: `399`,
    676: `400`,
    677: `401`,
    678: `402`,
    679: `403`,
    68: `2`,
    680: `404`,
    681: `404`,
    682: `405`,
    683: `405`,
    684: `405`,
    685: `406`,
    686: `406`,
    687: `407`,
    688: `407`,
    689: `407`,
    69: `2`,
    690: `408`,
    691: `409`,
    692: `409`,
    693: `410`,
    694: `410`,
    695: `410`,
    696: `411`,
    697: `412`,
    698: `412`,
    699: `413`,
    7: `2`,
    70: `2`,
    700: `413`,
    701: `413`,
    702: `414`,
    703: `415`,
    704: `415`,
    705: `416`,
    706: `416`,
    707: `416`,
    708: `417`,
    709: `418`,
    71: `2`,
    710: `418`,
    711: `419`,
    712: `419`,
    713: `419`,
    714: `419`,
    715: `419`,
    716: `419`,
    717: `419`,
    718: `419`,
    719: `419`,
    72: `2`,
    720: `419`,
    721: `420`,
    722: `420`,
    723: `421`,
    724: `422`,
    725: `423`,
    726: `423`,
    727: `424`,
    728: `424`,
    729: `425`,
    73: `2`,
    730: `425`,
    731: `426`,
    732: `426`,
    733: `429`,
    734: `429`,
    735: `430`,
    736: `430`,
    737: `430`,
    738: `431`,
    739: `432`,
    74: `2`,
    740: `432`,
    741: `432`,
    742: `435`,
    743: `435`,
    744: `436`,
    745: `436`,
    746: `437`,
    747: `438`,
    748: `441`,
    749: `442`,
    75: `2`,
    750: `443`,
    751: `443`,
    752: `444`,
    753: `444`,
    754: `445`,
    755: `445`,
    756: `446`,
    757: `446`,
    758: `447`,
    759: `447`,
    76: `2`,
    760: `448`,
    761: `448`,
    762: `449`,
    763: `449`,
    764: `450`,
    765: `452`,
    766: `452`,
    767: `452`,
    768: `452`,
    769: `454`,
    77: `4`,
    770: `454`,
    771: `455`,
    772: `456`,
    773: `456`,
    774: `457`,
    775: `457`,
    776: `457`,
    777: `459`,
    778: `460`,
    779: `460`,
    78: `4`,
    780: `461`,
    781: `461`,
    782: `462`,
    783: `462`,
    784: `462`,
    785: `464`,
    786: `464`,
    787: `465`,
    788: `465`,
    789: `465`,
    79: `5`,
    790: `466`,
    791: `466`,
    792: `466`,
    793: `469`,
    794: `469`,
    795: `470`,
    796: `471`,
    797: `471`,
    798: `472`,
    799: `472`,
    8: `2`,
    80: `5`,
    800: `473`,
    801: `474`,
    802: `474`,
    803: `475`,
    804: `476`,
    805: `476`,
    806: `477`,
    807: `478`,
    808: `479`,
    809: `480`,
    81: `5`,
    810: `480`,
    811: `481`,
    812: `482`,
    813: `483`,
    814: `484`,
    815: `484`,
    816: `485`,
    817: `485`,
    818: `485`,
    819: `488`,
    82: `6`,
    820: `488`,
    821: `489`,
    822: `490`,
    823: `491`,
    824: `491`,
    825: `492`,
    826: `492`,
    827: `493`,
    828: `493`,
    829: `493`,
    83: `7`,
    830: `494`,
    831: `494`,
    832: `495`,
    833: `495`,
    834: `496`,
    835: `496`,
    836: `496`,
    837: `497`,
    838: `497`,
    839: `498`,
    84: `8`,
    840: `498`,
    841: `498`,
    842: `498`,
    843: `498`,
    844: `498`,
    845: `499`,
    846: `499`,
    847: `500`,
    848: `501`,
    849: `502`,
    85: `9`,
    850: `502`,
    851: `503`,
    852: `504`,
    853: `504`,
    854: `505`,
    855: `506`,
    856: `508`,
    857: `508`,
    858: `509`,
    859: `509`,
    86: `10`,
    860: `509`,
    861: `510`,
    862: `510`,
    863: `511`,
    864: `511`,
    865: `511`,
    866: `512`,
    867: `512`,
    868: `513`,
    869: `513`,
    87: `11`,
    870: `514`,
    871: `514`,
    872: `514`,
    873: `515`,
    874: `515`,
    875: `516`,
    876: `516`,
    877: `517`,
    878: `517`,
    879: `517`,
    88: `11`,
    880: `518`,
    881: `518`,
    882: `519`,
    883: `519`,
    884: `520`,
    885: `521`,
    886: `522`,
    887: `522`,
    888: `523`,
    889: `524`,
    89: `12`,
    890: `525`,
    891: `526`,
    892: `526`,
    893: `526`,
    894: `527`,
    895: `527`,
    896: `528`,
    897: `528`,
    898: `529`,
    899: `529`,
    9: `2`,
    90: `13`,
    900: `530`,
    901: `531`,
    902: `531`,
    903: `531`,
    904: `532`,
    905: `533`,
    906: `533`,
    907: `535`,
    908: `535`,
    909: `536`,
    91: `13`,
    910: `536`,
    911: `537`,
    912: `538`,
    913: `539`,
    914: `540`,
    915: `540`,
    916: `541`,
    917: `541`,
    918: `542`,
    919: `543`,
    92: `14`,
    920: `544`,
    921: `548`,
    922: `548`,
    923: `548`,
    924: `548`,
    925: `548`,
    926: `548`,
    927: `548`,
    928: `548`,
    929: `548`,
    93: `15`,
    930: `548`,
    931: `548`,
    932: `548`,
    933: `548`,
    934: `548`,
    935: `548`,
    936: `548`,
    937: `548`,
    938: `548`,
    939: `548`,
    94: `15`,
    940: `548`,
    941: `548`,
    942: `548`,
    943: `548`,
    944: `548`,
    945: `548`,
    946: `548`,
    947: `548`,
    948: `548`,
    949: `548`,
    95: `16`,
    950: `548`,
    951: `548`,
    952: `548`,
    953: `548`,
    954: `548`,
    955: `548`,
    956: `548`,
    957: `548`,
    958: `548`,
    959: `548`,
    96: `16`,
    960: `548`,
    961: `548`,
    962: `548`,
    963: `548`,
    964: `548`,
    965: `548`,
    966: `548`,
    967: `548`,
    968: `548`,
    969: `548`,
    97: `17`,
    970: `548`,
    971: `548`,
    972: `548`,
    973: `548`,
    974: `548`,
    975: `548`,
    976: `548`,
    977: `548`,
    978: `548`,
    979: `548`,
    98: `18`,
    980: `548`,
    981: `548`,
    982: `548`,
    983: `548`,
    984: `548`,
    985: `548`,
    986: `548`,
    987: `548`,
    988: `548`,
    989: `548`,
    99: `18`,
    990: `548`,
    991: `548`,
    992: `548`,
    993: `548`,
    994: `548`,
    995: `548`,
    996: `548`,
    997: `548`,
    998: `548`,
    999: `548`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Umvir_support2: 1
    },
  extraPages: 1,
  stateKeys: 6,
  stateSize: 754,
  unsupported: [],
  version: 13,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:517:41:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:556:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:414:31:after expr stmt semicolon',
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
