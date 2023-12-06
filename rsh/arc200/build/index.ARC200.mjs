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
    DeleteAllowanceBox: [ctc0, ctc0],
    DeleteBalanceBox: [ctc0],
    Destroy: [],
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    decimals: ctc2,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc5
    });
  const ctc7 = stdlib.T_Object({
    closed: ctc1,
    decimals: ctc2,
    enableZeroAddressBurn: ctc1,
    manager: ctc0,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc5,
    zeroAddress: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc9 = stdlib.T_Struct([['name', ctc3], ['symbol', ctc4], ['decimals', ctc2], ['totalSupply', ctc5], ['zeroAddress', ctc0], ['manager', ctc0], ['enableZeroAddressBurn', ctc1], ['closed', ctc1]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc5
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc11;
  
  
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async (_v1810, _v1811 ) => {
          const v1810 = stdlib.protect(ctc0, _v1810, null);
          const v1811 = stdlib.protect(ctc0, _v1811, null);
        
        const v1812 = [v1810, v1811];
        const v1813 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v1812, ctc5), null);
        const v1814 = stdlib.fromSome(v1813, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1814;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async (_v1807 ) => {
          const v1807 = stdlib.protect(ctc0, _v1807, null);
        
        const v1808 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1807, ctc5), null);
        const v1809 = stdlib.fromSome(v1808, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1809;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async () => {
        
        
        return v1782;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async () => {
        
        const v1789 = v1773.name;
        
        return v1789;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async () => {
        
        const v1790 = v1773.symbol;
        
        return v1790;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async () => {
        
        
        return v1779;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasAllowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async (_v1819, _v1820 ) => {
          const v1819 = stdlib.protect(ctc0, _v1819, null);
          const v1820 = stdlib.protect(ctc0, _v1820, null);
        
        const v1821 = [v1819, v1820];
        const v1822 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc8, v1821, ctc5), null);
        const v1823 = {
          None: 0,
          Some: 1
          }[v1822[0]];
        const v1824 = stdlib.eq(v1823, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1824;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBalance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async (_v1815 ) => {
          const v1815 = stdlib.protect(ctc0, _v1815, null);
        
        const v1816 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1815, ctc5), null);
        const v1817 = {
          None: 0,
          Some: 1
          }[v1816[0]];
        const v1818 = stdlib.eq(v1817, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v1818;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = svs;
      return (await ((async () => {
        
        const v1825 = v1798.name;
        const v1826 = v1798.symbol;
        const v1827 = v1798.decimals;
        const v1828 = v1798.totalSupply;
        const v1829 = v1798.zeroAddress;
        const v1830 = v1798.manager;
        const v1831 = v1798.enableZeroAddressBurn;
        const v1832 = v1798.closed;
        const v1833 = {
          closed: v1832,
          decimals: v1827,
          enableZeroAddressBurn: v1831,
          manager: v1830,
          name: v1825,
          symbol: v1826,
          totalSupply: v1828,
          zeroAddress: v1829
          };
        
        return v1833;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc0, ctc0],
        rng: ctc5
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc0],
        rng: ctc5
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc2
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc3
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc4
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc5
        },
      hasAllowance: {
        decode: _hasAllowance,
        dom: [ctc0, ctc0],
        rng: ctc1
        },
      hasBalance: {
        decode: _hasBalance,
        dom: [ctc0],
        rng: ctc1
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc9
        }
      },
    views: {
      3: [ctc0, ctc1, ctc6, ctc5, ctc2, ctc7, ctc2]
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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    manager: ctc4,
    meta: ctc8,
    zeroAddress: ctc4
    });
  const ctc10 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc4, ctc4, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc4, ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc10,
    arc200_transfer0_289: ctc10,
    arc200_transferFrom0_289: ctc11,
    deleteAllowanceBox0_289: ctc12,
    deleteBalanceBox0_289: ctc13,
    destroy0_289: ctc14,
    grant0_289: ctc13,
    touch0_289: ctc14
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
  
  
  const v1745 = stdlib.protect(ctc9, interact.params, 'for Deployer\'s interact field params');
  const v1746 = v1745.enableZeroAddressBurn;
  const v1747 = v1745.manager;
  const v1748 = v1745.meta;
  const v1749 = v1745.zeroAddress;
  const v1750 = v1748.decimals;
  const v1753 = v1748.totalSupply;
  
  const v1760 = stdlib.addressEq(v1749, v1747);
  const v1761 = v1760 ? false : true;
  stdlib.assert(v1761, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1764 = stdlib.gt256(v1753, stdlib.checkedBigNumberify('./index.rsh:90:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1764, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1767 = stdlib.le(v1750, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:93:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1749, v1747, v1746, v1748],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:84:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1770, v1771, v1772, v1773], secs: v1775, time: v1774, didSend: v146, from: v1769 } = txn1;
      
      const v1779 = v1773.totalSupply;
      const v1782 = v1773.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1771, ctc1, v1779);
      await stdlib.simMapSet(sim_r, 0, ctc4, v1770, ctc1, stdlib.checkedBigNumberify('./index.rsh:103:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      null;
      const v1787 = await ctc.getContractInfo();
      
      const v1794 = v1773.name;
      const v1795 = v1773.symbol;
      const v1797 = {
        closed: false,
        decimals: v1782,
        enableZeroAddressBurn: v1772,
        manager: v1771,
        name: v1794,
        symbol: v1795,
        totalSupply: v1779,
        zeroAddress: v1770
        };
      const v1798 = v1797;
      const v1799 = v1774;
      const v1802 = stdlib.checkedBigNumberify('./index.rsh:77:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1805 = v1798.closed;
        const v1806 = v1805 ? false : true;
        
        return v1806;})()) {
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
    tys: [ctc4, ctc4, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1770, v1771, v1772, v1773], secs: v1775, time: v1774, didSend: v146, from: v1769 } = txn1;
  const v1776 = stdlib.addressEq(v1770, v1771);
  const v1777 = v1776 ? false : true;
  stdlib.assert(v1777, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Zero address must not equal manager address',
    who: 'Deployer'
    });
  const v1779 = v1773.totalSupply;
  const v1780 = stdlib.gt256(v1779, stdlib.checkedBigNumberify('./index.rsh:90:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1780, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1782 = v1773.decimals;
  const v1783 = stdlib.le(v1782, stdlib.checkedBigNumberify('./index.rsh:3:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1783, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:93:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc4, v1771, ctc1, v1779);
  await stdlib.mapSet(map0, ctc4, v1770, ctc1, stdlib.checkedBigNumberify('./index.rsh:103:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  null;
  const v1787 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1787), {
    at: './index.rsh:106:19:application',
    fs: ['at ./index.rsh:106:19:application call to [unknown function] (defined at: ./index.rsh:106:19:function exp)', 'at ./index.rsh:106:19:application call to "liftedInteract" (defined at: ./index.rsh:106:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1794 = v1773.name;
  const v1795 = v1773.symbol;
  const v1797 = {
    closed: false,
    decimals: v1782,
    enableZeroAddressBurn: v1772,
    manager: v1771,
    name: v1794,
    symbol: v1795,
    totalSupply: v1779,
    zeroAddress: v1770
    };
  let v1798 = v1797;
  let v1799 = v1774;
  let v1802 = stdlib.checkedBigNumberify('./index.rsh:77:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v1805 = v1798.closed;
    const v1806 = v1805 ? false : true;
    
    return v1806;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn3;
    switch (v2015[0]) {
      case 'arc200_approve0_289': {
        const v2018 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v2031 = v2018[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '0')];
        const v2032 = v2018[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '1')];
        const v2033 = stdlib.addressEq(v2014, v1770);
        const v2034 = v2033 ? false : true;
        stdlib.assert(v2034, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v2036 = stdlib.addressEq(v2031, v1770);
        const v2037 = v2036 ? false : true;
        stdlib.assert(v2037, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v2041 = [v2014, v2031];
        await stdlib.mapSet(map1, ctc12, v2041, ctc1, v2032);
        null;
        const v2042 = true;
        await txn3.getOutput('arc200_approve', 'v2042', ctc3, v2042);
        const cv1798 = v1798;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_289': {
        const v2243 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v2277 = v2243[stdlib.checkedBigNumberify('./index.rsh:178:10:spread', stdlib.UInt_max, '0')];
        const v2278 = v2243[stdlib.checkedBigNumberify('./index.rsh:178:10:spread', stdlib.UInt_max, '1')];
        const v2279 = stdlib.addressEq(v2014, v2277);
        const v2280 = v2279 ? false : true;
        stdlib.assert(v2280, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v2282 = stdlib.addressEq(v2277, v1770);
        const v2283 = v2282 ? false : true;
        const v2284 = v1772 ? true : v2283;
        stdlib.assert(v2284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:180:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2286 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2014, ctc1), null);
        const v2287 = stdlib.fromSome(v2286, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2288 = stdlib.ge256(v2287, v2278);
        stdlib.assert(v2288, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2296 = stdlib.safeSub256(v2287, v2278);
        await stdlib.mapSet(map0, ctc4, v2014, ctc1, v2296);
        const v2297 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2277, ctc1), null);
        const v2298 = stdlib.fromSome(v2297, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2299 = stdlib.safeAdd256(v2298, v2278);
        await stdlib.mapSet(map0, ctc4, v2277, ctc1, v2299);
        null;
        const v2301 = true;
        await txn3.getOutput('arc200_transfer', 'v2301', ctc3, v2301);
        const cv1798 = v1798;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_289': {
        const v2468 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v2536 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
        const v2537 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
        const v2538 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '2')];
        const v2539 = stdlib.addressEq(v2536, v2537);
        const v2540 = v2539 ? false : true;
        stdlib.assert(v2540, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v2542 = stdlib.addressEq(v2536, v1770);
        const v2543 = v2542 ? false : true;
        stdlib.assert(v2543, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
          msg: 'ARC200: Transfer from zero address',
          who: 'Deployer'
          });
        const v2545 = stdlib.addressEq(v2537, v1770);
        const v2546 = v2545 ? false : true;
        stdlib.assert(v2546, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
          msg: 'ARC200: Transfer to zero address',
          who: 'Deployer'
          });
        const v2548 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2536, ctc1), null);
        const v2549 = stdlib.fromSome(v2548, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2550 = stdlib.ge256(v2549, v2538);
        stdlib.assert(v2550, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2552 = [v2536, v2014];
        const v2553 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2552, ctc1), null);
        const v2554 = stdlib.fromSome(v2553, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2555 = stdlib.ge256(v2554, v2538);
        stdlib.assert(v2555, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2564 = stdlib.safeSub256(v2549, v2538);
        await stdlib.mapSet(map0, ctc4, v2536, ctc1, v2564);
        const v2565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2537, ctc1), null);
        const v2566 = stdlib.fromSome(v2565, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2567 = stdlib.safeAdd256(v2566, v2538);
        await stdlib.mapSet(map0, ctc4, v2537, ctc1, v2567);
        null;
        const v2572 = stdlib.safeSub256(v2554, v2538);
        await stdlib.mapSet(map1, ctc12, v2552, ctc1, v2572);
        null;
        const v2574 = true;
        await txn3.getOutput('arc200_transferFrom', 'v2574', ctc3, v2574);
        const cv1798 = v1798;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteAllowanceBox0_289': {
        const v2693 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v2810 = v2693[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
        const v2811 = v2693[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
        const v2812 = [v2810, v2811];
        const v2813 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc12, v2812, ctc1), null);
        const v2814 = {
          None: 0,
          Some: 1
          }[v2813[0]];
        const v2815 = stdlib.eq(v2814, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2815, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
          msg: 'ARC200: Allowance box not found',
          who: 'Deployer'
          });
        const v2819 = stdlib.fromSome(v2813, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2820 = stdlib.eq256(v2819, stdlib.checkedBigNumberify('./index.rsh:267:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v2820, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
          msg: 'ARC200: Allowance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc12, v2812, ctc1, undefined /* Nothing */);
        null;
        const v2825 = null;
        await txn3.getOutput('deleteAllowanceBox', 'v2825', ctc0, v2825);
        const cv1798 = v1798;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleteBalanceBox0_289': {
        const v2918 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v3060 = v2918[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
        const v3061 = stdlib.addressEq(v3060, v1770);
        const v3062 = v3061 ? false : true;
        stdlib.assert(v3062, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
          msg: 'ARC200: Delete balance box to zero address',
          who: 'Deployer'
          });
        const v3064 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v3060, ctc1), null);
        const v3065 = {
          None: 0,
          Some: 1
          }[v3064[0]];
        const v3066 = stdlib.eq(v3065, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3066, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
          msg: 'ARC200: Balance box not found',
          who: 'Deployer'
          });
        const v3069 = stdlib.fromSome(v3064, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3070 = stdlib.eq256(v3069, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v3070, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
          msg: 'ARC200: Balance box not empty',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v3060, ctc1, undefined /* Nothing */);
        null;
        const v3073 = null;
        await txn3.getOutput('deleteBalanceBox', 'v3073', ctc0, v3073);
        const cv1798 = v1798;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'destroy0_289': {
        const v3143 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v3307 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
        const v3308 = {
          None: 0,
          Some: 1
          }[v3307[0]];
        const v3309 = stdlib.eq(v3308, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3309, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
          msg: 'ARC200: Zero address balance box not found',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc4, v1770, ctc1, undefined /* Nothing */);
        null;
        const v3311 = null;
        await txn3.getOutput('destroy', 'v3311', ctc0, v3311);
        const v3318 = v1798.decimals;
        const v3319 = v1798.enableZeroAddressBurn;
        const v3320 = v1798.manager;
        const v3321 = v1798.name;
        const v3322 = v1798.symbol;
        const v3323 = v1798.totalSupply;
        const v3324 = v1798.zeroAddress;
        const v3325 = {
          closed: true,
          decimals: v3318,
          enableZeroAddressBurn: v3319,
          manager: v3320,
          name: v3321,
          symbol: v3322,
          totalSupply: v3323,
          zeroAddress: v3324
          };
        const cv1798 = v3325;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'grant0_289': {
        const v3368 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v3554 = v3368[stdlib.checkedBigNumberify('./index.rsh:166:10:spread', stdlib.UInt_max, '0')];
        const v3555 = stdlib.addressEq(v3554, v1770);
        const v3556 = v3555 ? false : true;
        stdlib.assert(v3556, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'ARC200: Grant zero address',
          who: 'Deployer'
          });
        const v3559 = null;
        await txn3.getOutput('grant', 'v3559', ctc0, v3559);
        const v3566 = v1798.closed;
        const v3567 = v1798.decimals;
        const v3568 = v1798.enableZeroAddressBurn;
        const v3570 = v1798.name;
        const v3571 = v1798.symbol;
        const v3572 = v1798.totalSupply;
        const v3573 = v1798.zeroAddress;
        const v3574 = {
          closed: v3566,
          decimals: v3567,
          enableZeroAddressBurn: v3568,
          manager: v3554,
          name: v3570,
          symbol: v3571,
          totalSupply: v3572,
          zeroAddress: v3573
          };
        const cv1798 = v3574;
        const cv1799 = v2016;
        const cv1802 = v1802;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_289': {
        const v3593 = v2015[1];
        undefined /* setApiDetails */;
        ;
        const v3804 = (stdlib.le(await ctc.getBalance(), v1802) ? stdlib.checkedBigNumberify('./index.rsh:156:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1802));
        const v3805 = stdlib.safeAdd(v3804, v1802);
        const v3806 = v1798.manager;
        const v3810 = stdlib.sub(v3805, v3804);
        ;
        const v3811 = null;
        await txn3.getOutput('touch', 'v3811', ctc0, v3811);
        const cv1798 = v1798;
        const cv1799 = v2016;
        const cv1802 = v3810;
        
        v1798 = cv1798;
        v1799 = cv1799;
        v1802 = cv1802;
        
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc10,
    arc200_transfer0_289: ctc10,
    arc200_transferFrom0_289: ctc11,
    deleteAllowanceBox0_289: ctc12,
    deleteBalanceBox0_289: ctc13,
    destroy0_289: ctc14,
    grant0_289: ctc13,
    touch0_289: ctc14
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1923 = ctc.selfAddress();
  const v1925 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:227:47:application call to [unknown function] (defined at: ./index.rsh:227:47:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_approve0_289" (defined at: ./index.rsh:227:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v1926 = v1925[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1930 = stdlib.addressEq(v1923, v1770);
  const v1931 = v1930 ? false : true;
  stdlib.assert(v1931, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:227:47:application call to [unknown function] (defined at: ./index.rsh:227:47:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_approve0_289" (defined at: ./index.rsh:227:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v1933 = stdlib.addressEq(v1926, v1770);
  const v1934 = v1933 ? false : true;
  stdlib.assert(v1934, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:227:47:application call to [unknown function] (defined at: ./index.rsh:227:47:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_approve0_289" (defined at: ./index.rsh:227:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v1943 = ['arc200_approve0_289', v1925];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1943],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:227:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v2031 = v2018[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '0')];
          const v2032 = v2018[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '1')];
          const v2041 = [v2014, v2031];
          await stdlib.simMapSet(sim_r, 1, ctc12, v2041, ctc1, v2032);
          null;
          const v2042 = true;
          const v2043 = await txn1.getOutput('arc200_approve', 'v2042', ctc4, v2042);
          
          const v5260 = v1798;
          const v5262 = v1802;
          const v5263 = v1798.closed;
          if (v5263) {
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
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v2031 = v2018[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '0')];
      const v2032 = v2018[stdlib.checkedBigNumberify('./index.rsh:227:10:spread', stdlib.UInt_max, '1')];
      const v2033 = stdlib.addressEq(v2014, v1770);
      const v2034 = v2033 ? false : true;
      stdlib.assert(v2034, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:228:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v2036 = stdlib.addressEq(v2031, v1770);
      const v2037 = v2036 ? false : true;
      stdlib.assert(v2037, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:229:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v2041 = [v2014, v2031];
      await stdlib.mapSet(map1, ctc12, v2041, ctc1, v2032);
      null;
      const v2042 = true;
      const v2043 = await txn1.getOutput('arc200_approve', 'v2042', ctc4, v2042);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v2018, v2043), {
          at: './index.rsh:227:11:application',
          fs: ['at ./index.rsh:227:11:application call to [unknown function] (defined at: ./index.rsh:227:11:function exp)', 'at ./index.rsh:234:12:application call to "k" (defined at: ./index.rsh:231:13:function exp)', 'at ./index.rsh:231:13:application call to [unknown function] (defined at: ./index.rsh:231:13:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v5260 = v1798;
      const v5262 = v1802;
      const v5263 = v1798.closed;
      if (v5263) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc10,
    arc200_transfer0_289: ctc10,
    arc200_transferFrom0_289: ctc11,
    deleteAllowanceBox0_289: ctc12,
    deleteBalanceBox0_289: ctc13,
    destroy0_289: ctc14,
    grant0_289: ctc13,
    touch0_289: ctc14
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1858 = ctc.selfAddress();
  const v1860 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:178:43:application call to [unknown function] (defined at: ./index.rsh:178:43:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:178:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v1861 = v1860[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1862 = v1860[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1865 = stdlib.addressEq(v1858, v1861);
  const v1866 = v1865 ? false : true;
  stdlib.assert(v1866, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:43:application call to [unknown function] (defined at: ./index.rsh:178:43:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:178:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transfer'
    });
  const v1868 = stdlib.addressEq(v1861, v1770);
  const v1869 = v1868 ? false : true;
  const v1870 = v1772 ? true : v1869;
  stdlib.assert(v1870, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:180:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:43:application call to [unknown function] (defined at: ./index.rsh:178:43:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:178:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'arc200_transfer'
    });
  const v1872 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1858, ctc1), null);
  const v1873 = stdlib.fromSome(v1872, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1874 = stdlib.ge256(v1873, v1862);
  stdlib.assert(v1874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:43:application call to [unknown function] (defined at: ./index.rsh:178:43:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:178:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v1883 = ['arc200_transfer0_289', v1860];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1883],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:178:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v2277 = v2243[stdlib.checkedBigNumberify('./index.rsh:178:10:spread', stdlib.UInt_max, '0')];
          const v2278 = v2243[stdlib.checkedBigNumberify('./index.rsh:178:10:spread', stdlib.UInt_max, '1')];
          const v2286 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2014, ctc1), null);
          const v2287 = stdlib.fromSome(v2286, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2296 = stdlib.safeSub256(v2287, v2278);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2014, ctc1, v2296);
          const v2297 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2277, ctc1), null);
          const v2298 = stdlib.fromSome(v2297, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2299 = stdlib.safeAdd256(v2298, v2278);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2277, ctc1, v2299);
          null;
          const v2301 = true;
          const v2302 = await txn1.getOutput('arc200_transfer', 'v2301', ctc4, v2301);
          
          const v5305 = v1798;
          const v5307 = v1802;
          const v5308 = v1798.closed;
          if (v5308) {
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
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v2277 = v2243[stdlib.checkedBigNumberify('./index.rsh:178:10:spread', stdlib.UInt_max, '0')];
      const v2278 = v2243[stdlib.checkedBigNumberify('./index.rsh:178:10:spread', stdlib.UInt_max, '1')];
      const v2279 = stdlib.addressEq(v2014, v2277);
      const v2280 = v2279 ? false : true;
      stdlib.assert(v2280, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transfer'
        });
      const v2282 = stdlib.addressEq(v2277, v1770);
      const v2283 = v2282 ? false : true;
      const v2284 = v1772 ? true : v2283;
      stdlib.assert(v2284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:180:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'arc200_transfer'
        });
      const v2286 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2014, ctc1), null);
      const v2287 = stdlib.fromSome(v2286, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2288 = stdlib.ge256(v2287, v2278);
      stdlib.assert(v2288, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v2296 = stdlib.safeSub256(v2287, v2278);
      await stdlib.mapSet(map0, ctc3, v2014, ctc1, v2296);
      const v2297 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2277, ctc1), null);
      const v2298 = stdlib.fromSome(v2297, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2299 = stdlib.safeAdd256(v2298, v2278);
      await stdlib.mapSet(map0, ctc3, v2277, ctc1, v2299);
      null;
      const v2301 = true;
      const v2302 = await txn1.getOutput('arc200_transfer', 'v2301', ctc4, v2301);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v2243, v2302), {
          at: './index.rsh:178:11:application',
          fs: ['at ./index.rsh:178:11:application call to [unknown function] (defined at: ./index.rsh:178:11:function exp)', 'at ./index.rsh:191:12:application call to "k" (defined at: ./index.rsh:189:13:function exp)', 'at ./index.rsh:189:13:application call to [unknown function] (defined at: ./index.rsh:189:13:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v5305 = v1798;
      const v5307 = v1802;
      const v5308 = v1798.closed;
      if (v5308) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc12,
    arc200_transfer0_289: ctc12,
    arc200_transferFrom0_289: ctc10,
    deleteAllowanceBox0_289: ctc11,
    deleteBalanceBox0_289: ctc13,
    destroy0_289: ctc14,
    grant0_289: ctc13,
    touch0_289: ctc14
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1885 = ctc.selfAddress();
  const v1887 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:200:54:application call to [unknown function] (defined at: ./index.rsh:200:54:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v1888 = v1887[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1889 = v1887[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1890 = v1887[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1894 = stdlib.addressEq(v1888, v1889);
  const v1895 = v1894 ? false : true;
  stdlib.assert(v1895, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:54:application call to [unknown function] (defined at: ./index.rsh:200:54:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transferFrom'
    });
  const v1897 = stdlib.addressEq(v1888, v1770);
  const v1898 = v1897 ? false : true;
  stdlib.assert(v1898, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:54:application call to [unknown function] (defined at: ./index.rsh:200:54:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Transfer from zero address',
    who: 'arc200_transferFrom'
    });
  const v1900 = stdlib.addressEq(v1889, v1770);
  const v1901 = v1900 ? false : true;
  stdlib.assert(v1901, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:54:application call to [unknown function] (defined at: ./index.rsh:200:54:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Transfer to zero address',
    who: 'arc200_transferFrom'
    });
  const v1903 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1888, ctc1), null);
  const v1904 = stdlib.fromSome(v1903, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1905 = stdlib.ge256(v1904, v1890);
  stdlib.assert(v1905, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:54:application call to [unknown function] (defined at: ./index.rsh:200:54:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v1907 = [v1888, v1885];
  const v1908 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v1907, ctc1), null);
  const v1909 = stdlib.fromSome(v1908, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1910 = stdlib.ge256(v1909, v1890);
  stdlib.assert(v1910, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:54:application call to [unknown function] (defined at: ./index.rsh:200:54:function exp)', 'at ./index.rsh:121:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v1921 = ['arc200_transferFrom0_289', v1887];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1921],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:200:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v2536 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
          const v2537 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
          const v2538 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '2')];
          const v2548 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2536, ctc1), null);
          const v2549 = stdlib.fromSome(v2548, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2552 = [v2536, v2014];
          const v2553 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc11, v2552, ctc1), null);
          const v2554 = stdlib.fromSome(v2553, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2564 = stdlib.safeSub256(v2549, v2538);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2536, ctc1, v2564);
          const v2565 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2537, ctc1), null);
          const v2566 = stdlib.fromSome(v2565, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2567 = stdlib.safeAdd256(v2566, v2538);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2537, ctc1, v2567);
          null;
          const v2572 = stdlib.safeSub256(v2554, v2538);
          await stdlib.simMapSet(sim_r, 1, ctc11, v2552, ctc1, v2572);
          null;
          const v2574 = true;
          const v2575 = await txn1.getOutput('arc200_transferFrom', 'v2574', ctc4, v2574);
          
          const v5350 = v1798;
          const v5352 = v1802;
          const v5353 = v1798.closed;
          if (v5353) {
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
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v2536 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '0')];
      const v2537 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '1')];
      const v2538 = v2468[stdlib.checkedBigNumberify('./index.rsh:200:10:spread', stdlib.UInt_max, '2')];
      const v2539 = stdlib.addressEq(v2536, v2537);
      const v2540 = v2539 ? false : true;
      stdlib.assert(v2540, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transferFrom'
        });
      const v2542 = stdlib.addressEq(v2536, v1770);
      const v2543 = v2542 ? false : true;
      stdlib.assert(v2543, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:202:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
        msg: 'ARC200: Transfer from zero address',
        who: 'arc200_transferFrom'
        });
      const v2545 = stdlib.addressEq(v2537, v1770);
      const v2546 = v2545 ? false : true;
      stdlib.assert(v2546, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
        msg: 'ARC200: Transfer to zero address',
        who: 'arc200_transferFrom'
        });
      const v2548 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2536, ctc1), null);
      const v2549 = stdlib.fromSome(v2548, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2550 = stdlib.ge256(v2549, v2538);
      stdlib.assert(v2550, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v2552 = [v2536, v2014];
      const v2553 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2552, ctc1), null);
      const v2554 = stdlib.fromSome(v2553, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2555 = stdlib.ge256(v2554, v2538);
      stdlib.assert(v2555, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:208:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v2564 = stdlib.safeSub256(v2549, v2538);
      await stdlib.mapSet(map0, ctc3, v2536, ctc1, v2564);
      const v2565 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2537, ctc1), null);
      const v2566 = stdlib.fromSome(v2565, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2567 = stdlib.safeAdd256(v2566, v2538);
      await stdlib.mapSet(map0, ctc3, v2537, ctc1, v2567);
      null;
      const v2572 = stdlib.safeSub256(v2554, v2538);
      await stdlib.mapSet(map1, ctc11, v2552, ctc1, v2572);
      null;
      const v2574 = true;
      const v2575 = await txn1.getOutput('arc200_transferFrom', 'v2574', ctc4, v2574);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v2468, v2575), {
          at: './index.rsh:200:11:application',
          fs: ['at ./index.rsh:200:11:application call to [unknown function] (defined at: ./index.rsh:200:11:function exp)', 'at ./index.rsh:218:12:application call to "k" (defined at: ./index.rsh:213:13:function exp)', 'at ./index.rsh:213:13:application call to [unknown function] (defined at: ./index.rsh:213:13:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v5350 = v1798;
      const v5352 = v1802;
      const v5353 = v1798.closed;
      if (v5353) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc11,
    arc200_transfer0_289: ctc11,
    arc200_transferFrom0_289: ctc12,
    deleteAllowanceBox0_289: ctc10,
    deleteBalanceBox0_289: ctc13,
    destroy0_289: ctc14,
    grant0_289: ctc13,
    touch0_289: ctc14
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1970 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:261:50:application call to [unknown function] (defined at: ./index.rsh:261:50:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteAllowanceBox0_289" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'deleteAllowanceBox'
    });
  const v1971 = v1970[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1972 = v1970[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1975 = [v1971, v1972];
  const v1976 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v1975, ctc1), null);
  const v1977 = {
    None: 0,
    Some: 1
    }[v1976[0]];
  const v1978 = stdlib.eq(v1977, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1978, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:50:application call to [unknown function] (defined at: ./index.rsh:261:50:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteAllowanceBox0_289" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Allowance box not found',
    who: 'deleteAllowanceBox'
    });
  const v1982 = stdlib.fromSome(v1976, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1983 = stdlib.eq256(v1982, stdlib.checkedBigNumberify('./index.rsh:267:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:50:application call to [unknown function] (defined at: ./index.rsh:261:50:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteAllowanceBox0_289" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Allowance box not empty',
    who: 'deleteAllowanceBox'
    });
  const v1992 = ['deleteAllowanceBox0_289', v1970];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1992],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteAllowanceBox"
            });
          ;
          const v2810 = v2693[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
          const v2811 = v2693[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
          const v2812 = [v2810, v2811];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc10, v2812, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc10, v2812, ctc1, undefined /* Nothing */);
          null;
          const v2825 = null;
          const v2826 = await txn1.getOutput('deleteAllowanceBox', 'v2825', ctc0, v2825);
          
          const v5395 = v1798;
          const v5397 = v1802;
          const v5398 = v1798.closed;
          if (v5398) {
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
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v2810 = v2693[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
      const v2811 = v2693[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
      const v2812 = [v2810, v2811];
      const v2813 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc10, v2812, ctc1), null);
      const v2814 = {
        None: 0,
        Some: 1
        }[v2813[0]];
      const v2815 = stdlib.eq(v2814, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2815, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
        msg: 'ARC200: Allowance box not found',
        who: 'deleteAllowanceBox'
        });
      const v2819 = stdlib.fromSome(v2813, stdlib.checkedBigNumberify('./index.rsh:130:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2820 = stdlib.eq256(v2819, stdlib.checkedBigNumberify('./index.rsh:267:46:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v2820, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
        msg: 'ARC200: Allowance box not empty',
        who: 'deleteAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc10, v2812, ctc1, undefined /* Nothing */);
      null;
      const v2825 = null;
      const v2826 = await txn1.getOutput('deleteAllowanceBox', 'v2825', ctc0, v2825);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v2693, v2826), {
          at: './index.rsh:261:11:application',
          fs: ['at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)', 'at ./index.rsh:274:12:application call to "k" (defined at: ./index.rsh:271:13:function exp)', 'at ./index.rsh:271:13:application call to [unknown function] (defined at: ./index.rsh:271:13:function exp)'],
          msg: 'out',
          who: 'deleteAllowanceBox'
          });
        }
      else {
        }
      
      const v5395 = v1798;
      const v5397 = v1802;
      const v5398 = v1798.closed;
      if (v5398) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc11,
    arc200_transfer0_289: ctc11,
    arc200_transferFrom0_289: ctc12,
    deleteAllowanceBox0_289: ctc13,
    deleteBalanceBox0_289: ctc10,
    destroy0_289: ctc14,
    grant0_289: ctc10,
    touch0_289: ctc14
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1947 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:244:38:application call to [unknown function] (defined at: ./index.rsh:244:38:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'deleteBalanceBox'
    });
  const v1948 = v1947[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1950 = stdlib.addressEq(v1948, v1770);
  const v1951 = v1950 ? false : true;
  stdlib.assert(v1951, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:38:application call to [unknown function] (defined at: ./index.rsh:244:38:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Delete balance box to zero address',
    who: 'deleteBalanceBox'
    });
  const v1953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1948, ctc1), null);
  const v1954 = {
    None: 0,
    Some: 1
    }[v1953[0]];
  const v1955 = stdlib.eq(v1954, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1955, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:38:application call to [unknown function] (defined at: ./index.rsh:244:38:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Balance box not found',
    who: 'deleteBalanceBox'
    });
  const v1958 = stdlib.fromSome(v1953, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1959 = stdlib.eq256(v1958, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1959, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:38:application call to [unknown function] (defined at: ./index.rsh:244:38:function exp)', 'at ./index.rsh:121:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Balance box not empty',
    who: 'deleteBalanceBox'
    });
  const v1966 = ['deleteBalanceBox0_289', v1947];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1966],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:244:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleteBalanceBox"
            });
          ;
          const v3060 = v2918[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3060, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3060, ctc1, undefined /* Nothing */);
          null;
          const v3073 = null;
          const v3074 = await txn1.getOutput('deleteBalanceBox', 'v3073', ctc0, v3073);
          
          const v5440 = v1798;
          const v5442 = v1802;
          const v5443 = v1798.closed;
          if (v5443) {
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
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v3060 = v2918[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
      const v3061 = stdlib.addressEq(v3060, v1770);
      const v3062 = v3061 ? false : true;
      stdlib.assert(v3062, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:245:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
        msg: 'ARC200: Delete balance box to zero address',
        who: 'deleteBalanceBox'
        });
      const v3064 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3060, ctc1), null);
      const v3065 = {
        None: 0,
        Some: 1
        }[v3064[0]];
      const v3066 = stdlib.eq(v3065, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3066, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:246:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
        msg: 'ARC200: Balance box not found',
        who: 'deleteBalanceBox'
        });
      const v3069 = stdlib.fromSome(v3064, stdlib.checkedBigNumberify('./index.rsh:125:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3070 = stdlib.eq256(v3069, stdlib.checkedBigNumberify('./index.rsh:247:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v3070, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:247:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
        msg: 'ARC200: Balance box not empty',
        who: 'deleteBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v3060, ctc1, undefined /* Nothing */);
      null;
      const v3073 = null;
      const v3074 = await txn1.getOutput('deleteBalanceBox', 'v3073', ctc0, v3073);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v2918, v3074), {
          at: './index.rsh:244:11:application',
          fs: ['at ./index.rsh:244:11:application call to [unknown function] (defined at: ./index.rsh:244:11:function exp)', 'at ./index.rsh:252:12:application call to "k" (defined at: ./index.rsh:249:13:function exp)', 'at ./index.rsh:249:13:application call to [unknown function] (defined at: ./index.rsh:249:13:function exp)'],
          msg: 'out',
          who: 'deleteBalanceBox'
          });
        }
      else {
        }
      
      const v5440 = v1798;
      const v5442 = v1802;
      const v5443 = v1798.closed;
      if (v5443) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc11,
    arc200_transfer0_289: ctc11,
    arc200_transferFrom0_289: ctc12,
    deleteAllowanceBox0_289: ctc13,
    deleteBalanceBox0_289: ctc14,
    destroy0_289: ctc10,
    grant0_289: ctc14,
    touch0_289: ctc10
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1996 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:284:25:application call to [unknown function] (defined at: ./index.rsh:284:25:function exp)', 'at ./index.rsh:121:29:application call to "rundestroy0_289" (defined at: ./index.rsh:284:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1997 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
  const v1998 = {
    None: 0,
    Some: 1
    }[v1997[0]];
  const v1999 = stdlib.eq(v1998, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1999, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:284:25:application call to [unknown function] (defined at: ./index.rsh:284:25:function exp)', 'at ./index.rsh:121:29:application call to "rundestroy0_289" (defined at: ./index.rsh:284:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Zero address balance box not found',
    who: 'destroy'
    });
  const v2004 = ['destroy0_289', v1996];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v2004],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:284:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          await stdlib.simMapSet(sim_r, 0, ctc3, v1770, ctc1, undefined /* Nothing */);
          null;
          const v3311 = null;
          const v3312 = await txn1.getOutput('destroy', 'v3311', ctc0, v3311);
          
          const v3318 = v1798.decimals;
          const v3319 = v1798.enableZeroAddressBurn;
          const v3320 = v1798.manager;
          const v3321 = v1798.name;
          const v3322 = v1798.symbol;
          const v3323 = v1798.totalSupply;
          const v3324 = v1798.zeroAddress;
          const v3325 = {
            closed: true,
            decimals: v3318,
            enableZeroAddressBurn: v3319,
            manager: v3320,
            name: v3321,
            symbol: v3322,
            totalSupply: v3323,
            zeroAddress: v3324
            };
          const v5485 = v3325;
          const v5487 = v1802;
          const v5488 = v3325.closed;
          if (v5488) {
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
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v3307 = ['Some', stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      const v3308 = {
        None: 0,
        Some: 1
        }[v3307[0]];
      const v3309 = stdlib.eq(v3308, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3309, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
        msg: 'ARC200: Zero address balance box not found',
        who: 'destroy'
        });
      await stdlib.mapSet(map0, ctc3, v1770, ctc1, undefined /* Nothing */);
      null;
      const v3311 = null;
      const v3312 = await txn1.getOutput('destroy', 'v3311', ctc0, v3311);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v3143, v3312), {
          at: './index.rsh:284:11:application',
          fs: ['at ./index.rsh:284:11:application call to [unknown function] (defined at: ./index.rsh:284:11:function exp)', 'at ./index.rsh:293:12:application call to "k" (defined at: ./index.rsh:290:13:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v3318 = v1798.decimals;
      const v3319 = v1798.enableZeroAddressBurn;
      const v3320 = v1798.manager;
      const v3321 = v1798.name;
      const v3322 = v1798.symbol;
      const v3323 = v1798.totalSupply;
      const v3324 = v1798.zeroAddress;
      const v3325 = {
        closed: true,
        decimals: v3318,
        enableZeroAddressBurn: v3319,
        manager: v3320,
        name: v3321,
        symbol: v3322,
        totalSupply: v3323,
        zeroAddress: v3324
        };
      const v5485 = v3325;
      const v5487 = v1802;
      const v5488 = v3325.closed;
      if (v5488) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc11,
    arc200_transfer0_289: ctc11,
    arc200_transferFrom0_289: ctc12,
    deleteAllowanceBox0_289: ctc13,
    deleteBalanceBox0_289: ctc10,
    destroy0_289: ctc14,
    grant0_289: ctc10,
    touch0_289: ctc14
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1845 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:166:27:application call to [unknown function] (defined at: ./index.rsh:166:27:function exp)', 'at ./index.rsh:121:29:application call to "rungrant0_289" (defined at: ./index.rsh:166:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v1846 = v1845[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1848 = stdlib.addressEq(v1846, v1770);
  const v1849 = v1848 ? false : true;
  stdlib.assert(v1849, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:27:application call to [unknown function] (defined at: ./index.rsh:166:27:function exp)', 'at ./index.rsh:121:29:application call to "rungrant0_289" (defined at: ./index.rsh:166:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'ARC200: Grant zero address',
    who: 'grant'
    });
  const v1856 = ['grant0_289', v1845];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1856],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:166:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v3554 = v3368[stdlib.checkedBigNumberify('./index.rsh:166:10:spread', stdlib.UInt_max, '0')];
          const v3559 = null;
          const v3560 = await txn1.getOutput('grant', 'v3559', ctc0, v3559);
          
          const v3566 = v1798.closed;
          const v3567 = v1798.decimals;
          const v3568 = v1798.enableZeroAddressBurn;
          const v3570 = v1798.name;
          const v3571 = v1798.symbol;
          const v3572 = v1798.totalSupply;
          const v3573 = v1798.zeroAddress;
          const v3574 = {
            closed: v3566,
            decimals: v3567,
            enableZeroAddressBurn: v3568,
            manager: v3554,
            name: v3570,
            symbol: v3571,
            totalSupply: v3572,
            zeroAddress: v3573
            };
          const v5530 = v3574;
          const v5532 = v1802;
          const v5533 = v3574.closed;
          if (v5533) {
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
        case 'touch0_289': {
          const v3593 = v2015[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v3554 = v3368[stdlib.checkedBigNumberify('./index.rsh:166:10:spread', stdlib.UInt_max, '0')];
      const v3555 = stdlib.addressEq(v3554, v1770);
      const v3556 = v3555 ? false : true;
      stdlib.assert(v3556, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
        msg: 'ARC200: Grant zero address',
        who: 'grant'
        });
      const v3559 = null;
      const v3560 = await txn1.getOutput('grant', 'v3559', ctc0, v3559);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v3368, v3560), {
          at: './index.rsh:166:11:application',
          fs: ['at ./index.rsh:166:11:application call to [unknown function] (defined at: ./index.rsh:166:11:function exp)', 'at ./index.rsh:170:12:application call to "k" (defined at: ./index.rsh:169:13:function exp)', 'at ./index.rsh:169:13:application call to [unknown function] (defined at: ./index.rsh:169:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v3566 = v1798.closed;
      const v3567 = v1798.decimals;
      const v3568 = v1798.enableZeroAddressBurn;
      const v3570 = v1798.name;
      const v3571 = v1798.symbol;
      const v3572 = v1798.totalSupply;
      const v3573 = v1798.zeroAddress;
      const v3574 = {
        closed: v3566,
        decimals: v3567,
        enableZeroAddressBurn: v3568,
        manager: v3554,
        name: v3570,
        symbol: v3571,
        totalSupply: v3572,
        zeroAddress: v3573
        };
      const v5530 = v3574;
      const v5532 = v1802;
      const v5533 = v3574.closed;
      if (v5533) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1
    });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Data({
    arc200_approve0_289: ctc11,
    arc200_transfer0_289: ctc11,
    arc200_transferFrom0_289: ctc12,
    deleteAllowanceBox0_289: ctc13,
    deleteBalanceBox0_289: ctc14,
    destroy0_289: ctc10,
    grant0_289: ctc14,
    touch0_289: ctc10
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
  
  
  const [v1770, v1772, v1773, v1779, v1782, v1798, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]);
  const v1837 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:153:23:application call to [unknown function] (defined at: ./index.rsh:153:23:function exp)', 'at ./index.rsh:121:29:application call to "runtouch0_289" (defined at: ./index.rsh:153:10:function exp)', 'at ./index.rsh:121:29:application call to [unknown function] (defined at: ./index.rsh:121:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v1841 = ['touch0_289', v1837];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1770, v1772, v1773, v1779, v1782, v1798, v1802, v1841],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:153:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
      
      switch (v2015[0]) {
        case 'arc200_approve0_289': {
          const v2018 = v2015[1];
          
          break;
          }
        case 'arc200_transfer0_289': {
          const v2243 = v2015[1];
          
          break;
          }
        case 'arc200_transferFrom0_289': {
          const v2468 = v2015[1];
          
          break;
          }
        case 'deleteAllowanceBox0_289': {
          const v2693 = v2015[1];
          
          break;
          }
        case 'deleteBalanceBox0_289': {
          const v2918 = v2015[1];
          
          break;
          }
        case 'destroy0_289': {
          const v3143 = v2015[1];
          
          break;
          }
        case 'grant0_289': {
          const v3368 = v2015[1];
          
          break;
          }
        case 'touch0_289': {
          const v3593 = v2015[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v3804 = (stdlib.le(await ctc.getBalance(), v1802) ? stdlib.checkedBigNumberify('./index.rsh:156:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1802));
          const v3805 = stdlib.safeAdd(v3804, v1802);
          const v3806 = v1798.manager;
          const v3810 = stdlib.sub(v3805, v3804);
          sim_r.txns.push({
            kind: 'from',
            to: v3806,
            tok: undefined /* Nothing */
            });
          const v3811 = null;
          const v3812 = await txn1.getOutput('touch', 'v3811', ctc0, v3811);
          
          const v5575 = v1798;
          const v5577 = v3810;
          const v5578 = v1798.closed;
          if (v5578) {
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
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v2015], secs: v2017, time: v2016, didSend: v1203, from: v2014 } = txn1;
  switch (v2015[0]) {
    case 'arc200_approve0_289': {
      const v2018 = v2015[1];
      return;
      break;
      }
    case 'arc200_transfer0_289': {
      const v2243 = v2015[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_289': {
      const v2468 = v2015[1];
      return;
      break;
      }
    case 'deleteAllowanceBox0_289': {
      const v2693 = v2015[1];
      return;
      break;
      }
    case 'deleteBalanceBox0_289': {
      const v2918 = v2015[1];
      return;
      break;
      }
    case 'destroy0_289': {
      const v3143 = v2015[1];
      return;
      break;
      }
    case 'grant0_289': {
      const v3368 = v2015[1];
      return;
      break;
      }
    case 'touch0_289': {
      const v3593 = v2015[1];
      undefined /* setApiDetails */;
      ;
      const v3804 = (stdlib.le(await ctc.getBalance(), v1802) ? stdlib.checkedBigNumberify('./index.rsh:156:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1802));
      const v3805 = stdlib.safeAdd(v3804, v1802);
      const v3806 = v1798.manager;
      const v3810 = stdlib.sub(v3805, v3804);
      ;
      const v3811 = null;
      const v3812 = await txn1.getOutput('touch', 'v3811', ctc0, v3811);
      if (v1203) {
        stdlib.protect(ctc0, await interact.out(v3593, v3812), {
          at: './index.rsh:153:11:application',
          fs: ['at ./index.rsh:153:11:application call to [unknown function] (defined at: ./index.rsh:153:11:function exp)', 'at ./index.rsh:158:12:application call to "k" (defined at: ./index.rsh:155:13:function exp)', 'at ./index.rsh:155:13:application call to [unknown function] (defined at: ./index.rsh:155:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v5575 = v1798;
      const v5577 = v3810;
      const v5578 = v1798.closed;
      if (v5578) {
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
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `deleteAllowanceBox(address,address)void`, `deleteBalanceBox(address)void`, `destroy()void`, `grant(address)void`, `touch()void`],
    pure: [`arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `hasAllowance(address,address)byte`, `hasBalance(address)byte`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`],
    sigs: [`_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[96])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `deleteAllowanceBox(address,address)void`, `deleteBalanceBox(address)void`, `destroy()void`, `grant(address)void`, `hasAllowance(address,address)byte`, `hasBalance(address)byte`, `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`, `touch()void`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAHAAED1N4BCMTbAUAmBwEAAAgAAAAAAAAAAQEBAQIEeYPDXAQZafhlMRhBB7spZEkiWzUBIQRbNQIoZCtkUCcEZFCCEwQEuq/QBBxTeK0EV2Dl+gRkNtzgBGV9E+wEakO2BQR59bCNBILlc8QEnIahhQS2rholBLuzGfMEvDwVbwTLOkyRBNChzBUE4z2AUgTorFe4BOyZYEEE82tNvwT8MLakNhoAjhMHvwdyB7IHhweKBv0Hygd/B8cHjQdlBw8H0geTCE8H3weQB6UITAA0C1cAIDUNNAtXICA1DDEANBUTRDQNNBUTRCEFKjEANA1QUAE0DIgImicGMQBQNA1QNAxQsCM1C4AIAAAAAAAAB/o0CxZRBwhQsDQLFlEHCDUEMgY1DzQQVwABF0EHnTEZgQUSRIgIjCIyCjIJiAiaNANAAAqABBUffHU0BFCwI0M0C1cAIDUNNAtXICA1DDEANA0TRDQUNA00FRMRRDIDKTIDKDEAUIgH2IgIDUk1CzQMp0QlKDEAUDQLNAyhiAgQiAf/JSg0DVAyAykyAyg0DVCIB62IB+I0DKCIB/OIB+InBTEAUDQNUDQMULAjNQuACAAAAAAAAAj9NAsWUQcIULA0CxZRBwg1BDIGNQ9C/0U0C1cAIDUWNAtXICA1DTQLV0AgNQw0FjQNE0Q0FjQVE0Q0DTQVE0QyAykyAyg0FlCIBz6IB3NJNRg0DKdENBYxAFA1FzIDKTIDKjQXUAGIByCIB1VJNQs0DKdEJSg0FlA0GDQMoYgHWIgHRyUoNA1QMgMpMgMoNA1QiAb1iAcqNAygiAc7iAcqJwU0FlA0DVA0DFCwNAs0DKGIByQ1DSEFKjQXUAE0DYgHCCcGNBZQMQBQNA1QsCM1C4AIAAAAAAAACg40CxZRBwhQsDQLFlEHCDUEMgY1D0L+azQLVwAgNQ00C1cgIDUMNA00DFA1FikyAyo0FlABiAZ3STULIlUjEkQyAzQLiAagMgOoRCEFKjQWUAGIBrOABC6u9Ek0DVA0DFCwKTULgAgAAAAAAAALCTQLULA0CzUEMgY1D0L+BTQNVwEgSTULNBUTRCkyAyg0C1CIBhtJNQwiVSMSRDIDNAyIBkQyA6hEJSg0C1CIBlmABJRHbEo0C1CwKTULgAgAAAAAAAAMATQLULA0CzUEMgY1D0L9roAhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIlUjEkQlKDQVUIgGA4AETG2m8rApNQuACAAAAAAAAAzvNAtQsDQLNQQrNBBXAQhQNBBXCQFQNBBXCiBQNBBXKiBQNBBXSghQNBBXUiBQNBBXciBQMgY1DzUQQv0uNA1XASBJNQs0FRNEKTUMgAgAAAAAAAAN5zQMULA0DDUENBBXAAE0EFcBCFA0EFcJAVA0C1A0EFcqIFA0EFdKCFA0EFdSIFA0EFdyIFAyBjUPNRBC/NgyCmAyCngJNA4JSTUMNBBXCiCIBXMpNQuACAAAAAAAAA7jNAtQsDQLNQQyBjQMNA4INAwJNQ41D0L8nTQBJBJEiATMMgMpMgMqNAw0C1BQAYgEsYgE5jUEMRkiEkRC/JchBK8oNAw0C1BQMgNQUDULJDQBEkSIBJc0CyJbNQw0C1cIYTUNgATZHk3aNAwWUDQNULA0DIgE1DQNIlWNCAQBBAsEFQO6A8QDxwPKA81C+9A0ASQSRIgEVjIDKTIDKDQLUIgEP4gEdDUEQv+LNAEkEkSIBDo0ERY1BEL/ezQBJBJEiAQqNBNXCCA1BEL/aTQBJBJEiAQYNBNXKAg1BEL/VzQBJBJEiAQGNBI1BEL/SCEErys0DDQLUFAyA1BQNQtC/00hBK8nBDQNNAxQNAtQUFA1C0L/OSEEr4ABAzQMNAtQUDIDUFA1C0L/JCEEr4ABBDQLUCEGr1BQNQtC/xGAaQAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv6hIQSvgAEGNAtQIQavUFA1C0L+jjQBJBJEiAMlKTIDKjQMNAtQUAGIAwwiVSMSFlEHCDUEQv5TNAEkEkSIAwIpMgMoNAtQiALtIlUjEhZRBwg1BEL+NDQBJBJEiALjNBBXKiA0EFdKCFA0EFcBCFA0EFdSIFA0EFdyIFA0EFcKIFA0EFcJAVA0EFcAAVA1BEL9+IBpAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/aA0DCJbNQ00DFcIIDUVNAxXKCA1CzQMV0gBFzUUNAxXSVA1E4AE5Ep7MjQNFlA0FVA0C1A0FBZRBwhQNBNQsDQNiAJZNBU0CxNENBNXMCBJNRIyA6VENBMiW0k1EYGAAg5EJSg0C1A0EogCCiUoNBVQMgOIAgAnBTQVUDQLUDQSULAoNBEWUDQUFlEHCFA0C1A0E1cIIFA0E1coCFA0ElA0FVAyBiI1DjUPNRBC+VqIAeeBoI0GiAH6NhoBNQxC/0CIAdU2GgE1C0L81SIxNBJEgQQxNRJEIjE2EkQiMTcSRIgBtYGzAq8iIjUCNQEoSwFXAH9nK0sBV39/ZycETFf+NWcpNAEWNAIWUGcxGSISRIgBk0L5DDYaATYaAjULNQxC/Eg2GgE2GgI1CzUMQvxgNhoBNQtC/KlC/MJC/M9C/N5C/O02GgE2GgI2GgM1CzUMNQ1C/P02GgE2GgI1CzUMQvzdNhoBNhoCNQs1DEL89zYaATULQv0EQv0UNhoBNQtC/Xw2GgE2GgI1CzUMQv2CNhoBNQtC/Z00DVcBQDULQvn7QvpeQvqyQvsvQvuCNBU0FBZRBwhQNBNQNBJQNBEWUDQQUDQOFlAkMgZC/xtITL9IiSKyASOyELIHsgiziTQNVwFANQtC98k0DVcBQDULQvhANA1XAWA1C0L4xkL9VEL9jUiJTAlJNQYyCYgAqYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIm+SRZRBwhFBE1QiUlXACA1FUlXIAEXNRRJVyFQNRNJV3EgNRJJgZEBWzURSVeZkjUQgasCWzUOiUlXAQBMIlVNiUxJvUD/U0sDiAAyQv9LSRWBIEwJr0xQibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/1ZC/140Bgg1BomxQv8XsbIJQv8R`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `522`,
    1001: `523`,
    1002: `524`,
    1003: `524`,
    1004: `525`,
    1005: `525`,
    1006: `525`,
    1007: `526`,
    1008: `527`,
    1009: `527`,
    101: `24`,
    1010: `528`,
    1011: `528`,
    1012: `529`,
    1013: `529`,
    1014: `530`,
    1015: `530`,
    1016: `530`,
    1017: `532`,
    1018: `532`,
    1019: `533`,
    102: `24`,
    1020: `533`,
    1021: `533`,
    1022: `534`,
    1023: `535`,
    1024: `535`,
    1025: `536`,
    1026: `536`,
    1027: `537`,
    1028: `538`,
    1029: `543`,
    103: `24`,
    1030: `544`,
    1031: `544`,
    1032: `545`,
    1033: `545`,
    1034: `545`,
    1035: `545`,
    1036: `545`,
    1037: `545`,
    1038: `545`,
    1039: `545`,
    104: `24`,
    1040: `545`,
    1041: `545`,
    1042: `546`,
    1043: `546`,
    1044: `547`,
    1045: `548`,
    1046: `549`,
    1047: `549`,
    1048: `550`,
    1049: `550`,
    105: `24`,
    1050: `551`,
    1051: `551`,
    1052: `552`,
    1053: `552`,
    1054: `552`,
    1055: `553`,
    1056: `553`,
    1057: `554`,
    1058: `554`,
    1059: `554`,
    106: `24`,
    1060: `555`,
    1061: `556`,
    1062: `556`,
    1063: `557`,
    1064: `557`,
    1065: `557`,
    1066: `558`,
    1067: `559`,
    1068: `559`,
    1069: `560`,
    107: `24`,
    1070: `561`,
    1071: `561`,
    1072: `562`,
    1073: `562`,
    1074: `562`,
    1075: `563`,
    1076: `564`,
    1077: `564`,
    1078: `565`,
    1079: `565`,
    108: `24`,
    1080: `565`,
    1081: `566`,
    1082: `567`,
    1083: `567`,
    1084: `568`,
    1085: `568`,
    1086: `568`,
    1087: `569`,
    1088: `570`,
    1089: `570`,
    109: `24`,
    1090: `571`,
    1091: `571`,
    1092: `571`,
    1093: `572`,
    1094: `573`,
    1095: `573`,
    1096: `574`,
    1097: `574`,
    1098: `575`,
    1099: `575`,
    11: `2`,
    110: `24`,
    1100: `576`,
    1101: `576`,
    1102: `576`,
    1103: `578`,
    1104: `578`,
    1105: `579`,
    1106: `580`,
    1107: `580`,
    1108: `581`,
    1109: `582`,
    111: `24`,
    1110: `583`,
    1111: `583`,
    1112: `584`,
    1113: `586`,
    1114: `587`,
    1115: `587`,
    1116: `589`,
    1117: `589`,
    1118: `590`,
    1119: `590`,
    112: `24`,
    1120: `590`,
    1121: `591`,
    1122: `591`,
    1123: `591`,
    1124: `592`,
    1125: `593`,
    1126: `593`,
    1127: `594`,
    1128: `594`,
    1129: `594`,
    113: `24`,
    1130: `594`,
    1131: `594`,
    1132: `594`,
    1133: `594`,
    1134: `594`,
    1135: `594`,
    1136: `594`,
    1137: `595`,
    1138: `595`,
    1139: `596`,
    114: `24`,
    1140: `597`,
    1141: `598`,
    1142: `598`,
    1143: `599`,
    1144: `599`,
    1145: `600`,
    1146: `600`,
    1147: `601`,
    1148: `601`,
    1149: `602`,
    115: `24`,
    1150: `602`,
    1151: `603`,
    1152: `604`,
    1153: `604`,
    1154: `605`,
    1155: `606`,
    1156: `606`,
    1157: `607`,
    1158: `607`,
    1159: `608`,
    116: `24`,
    1160: `608`,
    1161: `608`,
    1162: `610`,
    1163: `610`,
    1164: `611`,
    1165: `612`,
    1166: `613`,
    1167: `616`,
    1168: `616`,
    1169: `616`,
    117: `24`,
    1170: `617`,
    1171: `617`,
    1172: `619`,
    1173: `620`,
    1174: `620`,
    1175: `621`,
    1176: `622`,
    1177: `622`,
    1178: `623`,
    1179: `623`,
    118: `24`,
    1180: `624`,
    1181: `625`,
    1182: `626`,
    1183: `627`,
    1184: `627`,
    1185: `627`,
    1186: `628`,
    1187: `628`,
    1188: `628`,
    1189: `629`,
    119: `24`,
    1190: `629`,
    1191: `631`,
    1192: `631`,
    1193: `632`,
    1194: `633`,
    1195: `634`,
    1196: `636`,
    1197: `636`,
    1198: `636`,
    1199: `638`,
    12: `2`,
    120: `24`,
    1200: `638`,
    1201: `639`,
    1202: `640`,
    1203: `641`,
    1204: `641`,
    1205: `642`,
    1206: `642`,
    1207: `643`,
    1208: `644`,
    1209: `645`,
    121: `24`,
    1210: `645`,
    1211: `646`,
    1212: `647`,
    1213: `648`,
    1214: `648`,
    1215: `650`,
    1216: `651`,
    1217: `651`,
    1218: `652`,
    1219: `653`,
    122: `24`,
    1220: `654`,
    1221: `654`,
    1222: `654`,
    1223: `655`,
    1224: `655`,
    1225: `656`,
    1226: `657`,
    1227: `658`,
    1228: `658`,
    1229: `659`,
    123: `24`,
    1230: `659`,
    1231: `660`,
    1232: `660`,
    1233: `660`,
    1234: `661`,
    1235: `661`,
    1236: `662`,
    1237: `662`,
    1238: `662`,
    1239: `662`,
    124: `24`,
    1240: `662`,
    1241: `662`,
    1242: `663`,
    1243: `663`,
    1244: `664`,
    1245: `665`,
    1246: `666`,
    1247: `666`,
    1248: `667`,
    1249: `668`,
    125: `24`,
    1250: `670`,
    1251: `670`,
    1252: `671`,
    1253: `671`,
    1254: `671`,
    1255: `672`,
    1256: `672`,
    1257: `673`,
    1258: `674`,
    1259: `675`,
    126: `24`,
    1260: `675`,
    1261: `675`,
    1262: `675`,
    1263: `675`,
    1264: `675`,
    1265: `675`,
    1266: `675`,
    1267: `675`,
    1268: `675`,
    1269: `675`,
    127: `24`,
    1270: `675`,
    1271: `675`,
    1272: `675`,
    1273: `675`,
    1274: `675`,
    1275: `675`,
    1276: `675`,
    1277: `676`,
    1278: `676`,
    1279: `676`,
    128: `24`,
    1280: `678`,
    1281: `678`,
    1282: `679`,
    1283: `680`,
    1284: `681`,
    1285: `684`,
    1286: `684`,
    1287: `684`,
    1288: `685`,
    1289: `685`,
    129: `24`,
    1290: `687`,
    1291: `688`,
    1292: `688`,
    1293: `689`,
    1294: `690`,
    1295: `690`,
    1296: `691`,
    1297: `692`,
    1298: `692`,
    1299: `692`,
    13: `2`,
    130: `24`,
    1300: `693`,
    1301: `693`,
    1302: `693`,
    1303: `694`,
    1304: `694`,
    1305: `695`,
    1306: `695`,
    1307: `695`,
    1308: `697`,
    1309: `697`,
    131: `24`,
    1310: `698`,
    1311: `699`,
    1312: `700`,
    1313: `703`,
    1314: `703`,
    1315: `703`,
    1316: `704`,
    1317: `704`,
    1318: `705`,
    1319: `706`,
    132: `24`,
    1320: `706`,
    1321: `707`,
    1322: `707`,
    1323: `707`,
    1324: `709`,
    1325: `709`,
    1326: `710`,
    1327: `711`,
    1328: `712`,
    1329: `715`,
    133: `24`,
    1330: `715`,
    1331: `715`,
    1332: `716`,
    1333: `716`,
    1334: `717`,
    1335: `717`,
    1336: `717`,
    1337: `718`,
    1338: `718`,
    1339: `719`,
    134: `24`,
    1340: `719`,
    1341: `719`,
    1342: `721`,
    1343: `721`,
    1344: `722`,
    1345: `723`,
    1346: `724`,
    1347: `727`,
    1348: `727`,
    1349: `727`,
    135: `24`,
    1350: `728`,
    1351: `728`,
    1352: `729`,
    1353: `729`,
    1354: `729`,
    1355: `730`,
    1356: `730`,
    1357: `731`,
    1358: `731`,
    1359: `731`,
    136: `24`,
    1360: `733`,
    1361: `733`,
    1362: `734`,
    1363: `735`,
    1364: `736`,
    1365: `739`,
    1366: `739`,
    1367: `739`,
    1368: `740`,
    1369: `740`,
    137: `24`,
    1370: `741`,
    1371: `741`,
    1372: `742`,
    1373: `742`,
    1374: `742`,
    1375: `744`,
    1376: `744`,
    1377: `745`,
    1378: `746`,
    1379: `747`,
    138: `24`,
    1380: `747`,
    1381: `748`,
    1382: `748`,
    1383: `749`,
    1384: `750`,
    1385: `751`,
    1386: `751`,
    1387: `752`,
    1388: `753`,
    1389: `754`,
    139: `24`,
    1390: `754`,
    1391: `755`,
    1392: `755`,
    1393: `755`,
    1394: `757`,
    1395: `757`,
    1396: `758`,
    1397: `759`,
    1398: `759`,
    1399: `760`,
    14: `2`,
    140: `24`,
    1400: `760`,
    1401: `761`,
    1402: `761`,
    1403: `762`,
    1404: `763`,
    1405: `763`,
    1406: `764`,
    1407: `765`,
    1408: `766`,
    1409: `767`,
    141: `24`,
    1410: `767`,
    1411: `768`,
    1412: `768`,
    1413: `768`,
    1414: `770`,
    1415: `770`,
    1416: `771`,
    1417: `772`,
    1418: `772`,
    1419: `772`,
    142: `24`,
    1420: `773`,
    1421: `773`,
    1422: `774`,
    1423: `774`,
    1424: `775`,
    1425: `776`,
    1426: `777`,
    1427: `777`,
    1428: `778`,
    1429: `779`,
    143: `24`,
    1430: `780`,
    1431: `780`,
    1432: `781`,
    1433: `781`,
    1434: `781`,
    1435: `783`,
    1436: `783`,
    1437: `784`,
    1438: `785`,
    1439: `785`,
    144: `24`,
    1440: `785`,
    1441: `786`,
    1442: `786`,
    1443: `787`,
    1444: `788`,
    1445: `788`,
    1446: `789`,
    1447: `790`,
    1448: `791`,
    1449: `792`,
    145: `24`,
    1450: `792`,
    1451: `793`,
    1452: `793`,
    1453: `793`,
    1454: `795`,
    1455: `795`,
    1456: `795`,
    1457: `795`,
    1458: `795`,
    1459: `795`,
    146: `24`,
    1460: `795`,
    1461: `795`,
    1462: `795`,
    1463: `795`,
    1464: `795`,
    1465: `795`,
    1466: `795`,
    1467: `795`,
    1468: `795`,
    1469: `795`,
    147: `24`,
    1470: `795`,
    1471: `795`,
    1472: `795`,
    1473: `795`,
    1474: `795`,
    1475: `795`,
    1476: `795`,
    1477: `795`,
    1478: `795`,
    1479: `795`,
    148: `24`,
    1480: `795`,
    1481: `795`,
    1482: `795`,
    1483: `795`,
    1484: `795`,
    1485: `795`,
    1486: `795`,
    1487: `795`,
    1488: `795`,
    1489: `795`,
    149: `24`,
    1490: `795`,
    1491: `795`,
    1492: `795`,
    1493: `795`,
    1494: `795`,
    1495: `795`,
    1496: `795`,
    1497: `795`,
    1498: `795`,
    1499: `795`,
    15: `2`,
    150: `24`,
    1500: `795`,
    1501: `795`,
    1502: `795`,
    1503: `795`,
    1504: `795`,
    1505: `795`,
    1506: `795`,
    1507: `795`,
    1508: `795`,
    1509: `795`,
    151: `24`,
    1510: `795`,
    1511: `795`,
    1512: `795`,
    1513: `795`,
    1514: `795`,
    1515: `795`,
    1516: `795`,
    1517: `795`,
    1518: `795`,
    1519: `795`,
    152: `24`,
    1520: `795`,
    1521: `795`,
    1522: `795`,
    1523: `795`,
    1524: `795`,
    1525: `795`,
    1526: `795`,
    1527: `795`,
    1528: `795`,
    1529: `795`,
    153: `24`,
    1530: `795`,
    1531: `795`,
    1532: `795`,
    1533: `795`,
    1534: `795`,
    1535: `795`,
    1536: `795`,
    1537: `795`,
    1538: `795`,
    1539: `795`,
    154: `24`,
    1540: `795`,
    1541: `795`,
    1542: `795`,
    1543: `795`,
    1544: `795`,
    1545: `795`,
    1546: `795`,
    1547: `795`,
    1548: `795`,
    1549: `795`,
    155: `24`,
    1550: `795`,
    1551: `795`,
    1552: `795`,
    1553: `795`,
    1554: `795`,
    1555: `795`,
    1556: `795`,
    1557: `795`,
    1558: `795`,
    1559: `795`,
    156: `24`,
    1560: `795`,
    1561: `796`,
    1562: `796`,
    1563: `797`,
    1564: `797`,
    1565: `797`,
    1566: `799`,
    1567: `799`,
    1568: `800`,
    1569: `801`,
    157: `24`,
    1570: `801`,
    1571: `801`,
    1572: `802`,
    1573: `802`,
    1574: `803`,
    1575: `804`,
    1576: `804`,
    1577: `805`,
    1578: `806`,
    1579: `807`,
    158: `24`,
    1580: `808`,
    1581: `808`,
    1582: `809`,
    1583: `809`,
    1584: `809`,
    1585: `811`,
    1586: `811`,
    1587: `812`,
    1588: `813`,
    1589: `814`,
    159: `24`,
    1590: `817`,
    1591: `817`,
    1592: `817`,
    1593: `819`,
    1594: `820`,
    1595: `820`,
    1596: `821`,
    1597: `822`,
    1598: `822`,
    1599: `823`,
    16: `2`,
    160: `24`,
    1600: `823`,
    1601: `824`,
    1602: `825`,
    1603: `826`,
    1604: `827`,
    1605: `827`,
    1606: `827`,
    1607: `828`,
    1608: `829`,
    1609: `830`,
    161: `24`,
    1610: `831`,
    1611: `832`,
    1612: `833`,
    1613: `833`,
    1614: `833`,
    1615: `834`,
    1616: `834`,
    1617: `835`,
    1618: `835`,
    1619: `835`,
    162: `24`,
    1620: `837`,
    1621: `837`,
    1622: `838`,
    1623: `839`,
    1624: `840`,
    1625: `843`,
    1626: `843`,
    1627: `843`,
    1628: `845`,
    1629: `846`,
    163: `24`,
    1630: `846`,
    1631: `847`,
    1632: `848`,
    1633: `848`,
    1634: `849`,
    1635: `850`,
    1636: `850`,
    1637: `850`,
    1638: `851`,
    1639: `852`,
    164: `24`,
    1640: `853`,
    1641: `854`,
    1642: `855`,
    1643: `856`,
    1644: `856`,
    1645: `856`,
    1646: `857`,
    1647: `857`,
    1648: `858`,
    1649: `858`,
    165: `25`,
    1650: `858`,
    1651: `860`,
    1652: `860`,
    1653: `861`,
    1654: `862`,
    1655: `863`,
    1656: `866`,
    1657: `866`,
    1658: `866`,
    1659: `867`,
    166: `25`,
    1660: `867`,
    1661: `868`,
    1662: `868`,
    1663: `868`,
    1664: `869`,
    1665: `869`,
    1666: `870`,
    1667: `870`,
    1668: `870`,
    1669: `871`,
    167: `25`,
    1670: `872`,
    1671: `872`,
    1672: `873`,
    1673: `873`,
    1674: `873`,
    1675: `874`,
    1676: `875`,
    1677: `875`,
    1678: `876`,
    1679: `876`,
    168: `26`,
    1680: `876`,
    1681: `877`,
    1682: `878`,
    1683: `878`,
    1684: `879`,
    1685: `879`,
    1686: `879`,
    1687: `880`,
    1688: `881`,
    1689: `881`,
    169: `26`,
    1690: `882`,
    1691: `882`,
    1692: `882`,
    1693: `883`,
    1694: `884`,
    1695: `884`,
    1696: `885`,
    1697: `885`,
    1698: `885`,
    1699: `886`,
    17: `2`,
    170: `26`,
    1700: `887`,
    1701: `887`,
    1702: `888`,
    1703: `888`,
    1704: `888`,
    1705: `889`,
    1706: `890`,
    1707: `890`,
    1708: `891`,
    1709: `891`,
    171: `26`,
    1710: `891`,
    1711: `893`,
    1712: `893`,
    1713: `893`,
    1714: `893`,
    1715: `893`,
    1716: `893`,
    1717: `893`,
    1718: `893`,
    1719: `893`,
    172: `26`,
    1720: `893`,
    1721: `893`,
    1722: `893`,
    1723: `893`,
    1724: `893`,
    1725: `893`,
    1726: `893`,
    1727: `893`,
    1728: `893`,
    1729: `893`,
    173: `26`,
    1730: `893`,
    1731: `893`,
    1732: `893`,
    1733: `893`,
    1734: `893`,
    1735: `893`,
    1736: `893`,
    1737: `893`,
    1738: `893`,
    1739: `893`,
    174: `26`,
    1740: `893`,
    1741: `893`,
    1742: `893`,
    1743: `893`,
    1744: `893`,
    1745: `893`,
    1746: `893`,
    1747: `893`,
    1748: `893`,
    1749: `893`,
    175: `26`,
    1750: `893`,
    1751: `893`,
    1752: `893`,
    1753: `893`,
    1754: `893`,
    1755: `893`,
    1756: `893`,
    1757: `893`,
    1758: `893`,
    1759: `893`,
    176: `26`,
    1760: `893`,
    1761: `893`,
    1762: `893`,
    1763: `893`,
    1764: `893`,
    1765: `893`,
    1766: `893`,
    1767: `893`,
    1768: `893`,
    1769: `893`,
    177: `26`,
    1770: `893`,
    1771: `893`,
    1772: `893`,
    1773: `893`,
    1774: `893`,
    1775: `893`,
    1776: `893`,
    1777: `893`,
    1778: `893`,
    1779: `893`,
    178: `26`,
    1780: `893`,
    1781: `893`,
    1782: `893`,
    1783: `893`,
    1784: `893`,
    1785: `893`,
    1786: `893`,
    1787: `893`,
    1788: `893`,
    1789: `893`,
    179: `26`,
    1790: `893`,
    1791: `893`,
    1792: `893`,
    1793: `893`,
    1794: `893`,
    1795: `893`,
    1796: `893`,
    1797: `893`,
    1798: `893`,
    1799: `893`,
    18: `2`,
    180: `26`,
    1800: `893`,
    1801: `893`,
    1802: `893`,
    1803: `893`,
    1804: `893`,
    1805: `893`,
    1806: `893`,
    1807: `893`,
    1808: `893`,
    1809: `893`,
    181: `26`,
    1810: `893`,
    1811: `893`,
    1812: `893`,
    1813: `893`,
    1814: `893`,
    1815: `893`,
    1816: `893`,
    1817: `893`,
    1818: `894`,
    1819: `894`,
    182: `26`,
    1820: `895`,
    1821: `895`,
    1822: `895`,
    1823: `897`,
    1824: `897`,
    1825: `898`,
    1826: `899`,
    1827: `900`,
    1828: `900`,
    1829: `901`,
    183: `26`,
    1830: `901`,
    1831: `902`,
    1832: `902`,
    1833: `902`,
    1834: `903`,
    1835: `903`,
    1836: `904`,
    1837: `904`,
    1838: `905`,
    1839: `905`,
    184: `26`,
    1840: `905`,
    1841: `906`,
    1842: `906`,
    1843: `907`,
    1844: `907`,
    1845: `908`,
    1846: `908`,
    1847: `908`,
    1848: `909`,
    1849: `910`,
    185: `26`,
    1850: `910`,
    1851: `911`,
    1852: `911`,
    1853: `912`,
    1854: `912`,
    1855: `912`,
    1856: `913`,
    1857: `913`,
    1858: `914`,
    1859: `914`,
    186: `26`,
    1860: `914`,
    1861: `914`,
    1862: `914`,
    1863: `914`,
    1864: `915`,
    1865: `915`,
    1866: `916`,
    1867: `917`,
    1868: `918`,
    1869: `918`,
    187: `26`,
    1870: `919`,
    1871: `920`,
    1872: `920`,
    1873: `921`,
    1874: `922`,
    1875: `922`,
    1876: `923`,
    1877: `924`,
    1878: `924`,
    1879: `924`,
    188: `26`,
    1880: `925`,
    1881: `926`,
    1882: `926`,
    1883: `927`,
    1884: `928`,
    1885: `930`,
    1886: `930`,
    1887: `931`,
    1888: `931`,
    1889: `931`,
    189: `26`,
    1890: `932`,
    1891: `932`,
    1892: `933`,
    1893: `933`,
    1894: `934`,
    1895: `935`,
    1896: `939`,
    1897: `939`,
    1898: `940`,
    1899: `940`,
    19: `2`,
    190: `26`,
    1900: `940`,
    1901: `941`,
    1902: `942`,
    1903: `942`,
    1904: `943`,
    1905: `943`,
    1906: `944`,
    1907: `945`,
    1908: `949`,
    1909: `949`,
    191: `26`,
    1910: `950`,
    1911: `951`,
    1912: `952`,
    1913: `953`,
    1914: `953`,
    1915: `954`,
    1916: `954`,
    1917: `954`,
    1918: `955`,
    1919: `956`,
    192: `26`,
    1920: `961`,
    1921: `962`,
    1922: `963`,
    1923: `963`,
    1924: `964`,
    1925: `965`,
    1926: `965`,
    1927: `966`,
    1928: `966`,
    1929: `966`,
    193: `26`,
    1930: `968`,
    1931: `969`,
    1932: `970`,
    1933: `970`,
    1934: `971`,
    1935: `972`,
    1936: `972`,
    1937: `973`,
    1938: `973`,
    1939: `973`,
    194: `26`,
    1940: `974`,
    1941: `974`,
    1942: `975`,
    1943: `975`,
    1944: `976`,
    1945: `977`,
    1946: `977`,
    1947: `978`,
    1948: `979`,
    1949: `979`,
    195: `26`,
    1950: `980`,
    1951: `981`,
    1952: `983`,
    1953: `984`,
    1954: `984`,
    1955: `985`,
    1956: `986`,
    1957: `987`,
    1958: `987`,
    1959: `988`,
    196: `26`,
    1960: `989`,
    1961: `989`,
    1962: `989`,
    1963: `990`,
    1964: `991`,
    1965: `991`,
    1966: `992`,
    1967: `993`,
    1968: `993`,
    1969: `994`,
    197: `26`,
    1970: `994`,
    1971: `994`,
    1972: `995`,
    1973: `996`,
    1974: `996`,
    1975: `997`,
    1976: `997`,
    1977: `997`,
    1978: `998`,
    1979: `999`,
    198: `26`,
    1980: `999`,
    1981: `1000`,
    1982: `1001`,
    1983: `1001`,
    1984: `1002`,
    1985: `1003`,
    1986: `1003`,
    1987: `1004`,
    1988: `1005`,
    1989: `1005`,
    199: `26`,
    1990: `1006`,
    1991: `1006`,
    1992: `1007`,
    1993: `1007`,
    1994: `1008`,
    1995: `1008`,
    1996: `1008`,
    1997: `1010`,
    1998: `1010`,
    1999: `1010`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `1011`,
    2001: `1011`,
    2002: `1011`,
    2003: `1011`,
    2004: `1012`,
    2005: `1012`,
    2006: `1012`,
    2007: `1013`,
    2008: `1013`,
    2009: `1013`,
    201: `26`,
    2010: `1014`,
    2011: `1014`,
    2012: `1015`,
    2013: `1015`,
    2014: `1015`,
    2015: `1017`,
    2016: `1017`,
    2017: `1017`,
    2018: `1018`,
    2019: `1018`,
    202: `26`,
    2020: `1018`,
    2021: `1019`,
    2022: `1019`,
    2023: `1020`,
    2024: `1020`,
    2025: `1020`,
    2026: `1022`,
    2027: `1023`,
    2028: `1023`,
    2029: `1024`,
    203: `26`,
    2030: `1025`,
    2031: `1026`,
    2032: `1026`,
    2033: `1027`,
    2034: `1027`,
    2035: `1028`,
    2036: `1029`,
    2037: `1030`,
    2038: `1031`,
    2039: `1031`,
    204: `26`,
    2040: `1032`,
    2041: `1033`,
    2042: `1034`,
    2043: `1035`,
    2044: `1035`,
    2045: `1036`,
    2046: `1037`,
    2047: `1038`,
    2048: `1038`,
    2049: `1038`,
    205: `26`,
    2050: `1039`,
    2051: `1039`,
    2052: `1039`,
    2053: `1040`,
    2054: `1041`,
    2055: `1042`,
    2056: `1044`,
    2057: `1044`,
    2058: `1045`,
    2059: `1045`,
    206: `26`,
    2060: `1046`,
    2061: `1047`,
    2062: `1047`,
    2063: `1048`,
    2064: `1048`,
    2065: `1048`,
    2066: `1049`,
    2067: `1050`,
    2068: `1051`,
    2069: `1051`,
    207: `26`,
    2070: `1052`,
    2071: `1052`,
    2072: `1052`,
    2073: `1053`,
    2074: `1054`,
    2075: `1054`,
    2076: `1055`,
    2077: `1056`,
    2078: `1056`,
    2079: `1056`,
    208: `28`,
    2080: `1057`,
    2081: `1058`,
    2082: `1059`,
    2083: `1059`,
    2084: `1060`,
    2085: `1061`,
    2086: `1061`,
    2087: `1062`,
    2088: `1063`,
    2089: `1064`,
    209: `30`,
    2090: `1065`,
    2091: `1065`,
    2092: `1066`,
    2093: `1067`,
    2094: `1068`,
    2095: `1070`,
    2096: `1070`,
    2097: `1070`,
    2098: `1071`,
    2099: `1071`,
    21: `2`,
    210: `30`,
    2100: `1071`,
    2101: `1073`,
    2102: `1073`,
    2103: `1073`,
    2104: `1074`,
    2105: `1074`,
    2106: `1074`,
    2107: `1075`,
    2108: `1075`,
    2109: `1076`,
    211: `31`,
    2110: `1076`,
    2111: `1077`,
    2112: `1077`,
    2113: `1077`,
    2114: `1079`,
    2115: `1079`,
    2116: `1079`,
    2117: `1080`,
    2118: `1080`,
    2119: `1080`,
    212: `31`,
    2120: `1081`,
    2121: `1081`,
    2122: `1082`,
    2123: `1082`,
    2124: `1083`,
    2125: `1083`,
    2126: `1083`,
    2127: `1085`,
    2128: `1085`,
    2129: `1085`,
    213: `31`,
    2130: `1086`,
    2131: `1086`,
    2132: `1087`,
    2133: `1087`,
    2134: `1087`,
    2135: `1089`,
    2136: `1089`,
    2137: `1089`,
    2138: `1091`,
    2139: `1091`,
    214: `32`,
    2140: `1091`,
    2141: `1093`,
    2142: `1093`,
    2143: `1093`,
    2144: `1095`,
    2145: `1095`,
    2146: `1095`,
    2147: `1097`,
    2148: `1097`,
    2149: `1097`,
    215: `32`,
    2150: `1098`,
    2151: `1098`,
    2152: `1098`,
    2153: `1099`,
    2154: `1099`,
    2155: `1099`,
    2156: `1100`,
    2157: `1100`,
    2158: `1101`,
    2159: `1101`,
    216: `33`,
    2160: `1102`,
    2161: `1102`,
    2162: `1103`,
    2163: `1103`,
    2164: `1103`,
    2165: `1105`,
    2166: `1105`,
    2167: `1105`,
    2168: `1106`,
    2169: `1106`,
    217: `33`,
    2170: `1106`,
    2171: `1107`,
    2172: `1107`,
    2173: `1108`,
    2174: `1108`,
    2175: `1109`,
    2176: `1109`,
    2177: `1109`,
    2178: `1111`,
    2179: `1111`,
    218: `34`,
    2180: `1111`,
    2181: `1112`,
    2182: `1112`,
    2183: `1112`,
    2184: `1113`,
    2185: `1113`,
    2186: `1114`,
    2187: `1114`,
    2188: `1115`,
    2189: `1115`,
    219: `34`,
    2190: `1115`,
    2191: `1117`,
    2192: `1117`,
    2193: `1117`,
    2194: `1118`,
    2195: `1118`,
    2196: `1119`,
    2197: `1119`,
    2198: `1119`,
    2199: `1121`,
    22: `2`,
    220: `34`,
    2200: `1121`,
    2201: `1121`,
    2202: `1123`,
    2203: `1123`,
    2204: `1123`,
    2205: `1124`,
    2206: `1124`,
    2207: `1125`,
    2208: `1125`,
    2209: `1125`,
    221: `35`,
    2210: `1127`,
    2211: `1127`,
    2212: `1127`,
    2213: `1128`,
    2214: `1128`,
    2215: `1128`,
    2216: `1129`,
    2217: `1129`,
    2218: `1130`,
    2219: `1130`,
    222: `35`,
    2220: `1131`,
    2221: `1131`,
    2222: `1131`,
    2223: `1133`,
    2224: `1133`,
    2225: `1133`,
    2226: `1134`,
    2227: `1134`,
    2228: `1135`,
    2229: `1135`,
    223: `36`,
    2230: `1135`,
    2231: `1137`,
    2232: `1137`,
    2233: `1138`,
    2234: `1138`,
    2235: `1138`,
    2236: `1139`,
    2237: `1139`,
    2238: `1140`,
    2239: `1140`,
    224: `36`,
    2240: `1140`,
    2241: `1142`,
    2242: `1142`,
    2243: `1142`,
    2244: `1144`,
    2245: `1144`,
    2246: `1144`,
    2247: `1146`,
    2248: `1146`,
    2249: `1146`,
    225: `37`,
    2250: `1148`,
    2251: `1148`,
    2252: `1148`,
    2253: `1151`,
    2254: `1151`,
    2255: `1152`,
    2256: `1152`,
    2257: `1153`,
    2258: `1154`,
    2259: `1154`,
    226: `37`,
    2260: `1154`,
    2261: `1155`,
    2262: `1156`,
    2263: `1156`,
    2264: `1157`,
    2265: `1158`,
    2266: `1158`,
    2267: `1159`,
    2268: `1160`,
    2269: `1160`,
    227: `38`,
    2270: `1161`,
    2271: `1162`,
    2272: `1163`,
    2273: `1163`,
    2274: `1164`,
    2275: `1165`,
    2276: `1165`,
    2277: `1166`,
    2278: `1167`,
    2279: `1168`,
    228: `39`,
    2280: `1169`,
    2281: `1169`,
    2282: `1170`,
    2283: `1170`,
    2284: `1170`,
    2285: `1172`,
    2286: `1173`,
    2287: `1174`,
    2288: `1175`,
    2289: `1176`,
    229: `44`,
    2290: `1178`,
    2291: `1179`,
    2292: `1179`,
    2293: `1180`,
    2294: `1181`,
    2295: `1181`,
    2296: `1182`,
    2297: `1182`,
    2298: `1183`,
    2299: `1183`,
    23: `2`,
    230: `44`,
    2300: `1184`,
    2301: `1185`,
    2302: `1187`,
    2303: `1187`,
    2304: `1188`,
    2305: `1188`,
    2306: `1188`,
    2307: `1189`,
    2308: `1189`,
    2309: `1190`,
    231: `45`,
    2310: `1190`,
    2311: `1190`,
    2312: `1192`,
    2313: `1192`,
    2314: `1193`,
    2315: `1193`,
    2316: `1193`,
    2317: `1194`,
    2318: `1194`,
    2319: `1195`,
    232: `45`,
    2320: `1195`,
    2321: `1195`,
    2322: `1197`,
    2323: `1197`,
    2324: `1198`,
    2325: `1198`,
    2326: `1198`,
    2327: `1199`,
    2328: `1199`,
    2329: `1200`,
    233: `46`,
    2330: `1200`,
    2331: `1200`,
    2332: `1202`,
    2333: `1202`,
    2334: `1202`,
    2335: `1204`,
    2336: `1204`,
    2337: `1204`,
    2338: `1206`,
    2339: `1207`,
    234: `47`,
    2340: `1209`,
    2341: `1210`,
    2342: `1211`,
    2343: `1212`,
    2344: `1212`,
    2345: `1213`,
    2346: `1213`,
    2347: `1214`,
    2348: `1214`,
    2349: `1214`,
    235: `53`,
    2350: `1215`,
    2351: `1217`,
    2352: `1218`,
    2353: `1219`,
    2354: `1219`,
    2355: `1219`,
    2356: `1220`,
    2357: `1221`,
    2358: `1221`,
    2359: `1224`,
    236: `53`,
    2360: `1224`,
    2361: `1225`,
    2362: `1225`,
    2363: `1226`,
    2364: `1227`,
    2365: `1228`,
    2366: `1229`,
    2367: `1229`,
    2368: `1230`,
    2369: `1231`,
    237: `54`,
    2370: `1231`,
    2371: `1232`,
    2372: `1232`,
    2373: `1233`,
    2374: `1233`,
    2375: `1234`,
    2376: `1235`,
    2377: `1236`,
    2378: `1236`,
    2379: `1237`,
    238: `55`,
    2380: `1238`,
    2381: `1239`,
    2382: `1240`,
    2383: `1240`,
    2384: `1241`,
    2385: `1242`,
    2386: `1243`,
    2387: `1245`,
    2388: `1246`,
    2389: `1247`,
    239: `55`,
    2390: `1248`,
    2391: `1248`,
    2392: `1248`,
    2393: `1249`,
    2394: `1249`,
    2395: `1250`,
    2396: `1251`,
    2397: `1252`,
    2398: `1254`,
    2399: `1255`,
    24: `2`,
    240: `56`,
    2400: `1255`,
    2401: `1255`,
    2402: `1256`,
    2403: `1256`,
    2404: `1257`,
    2405: `1258`,
    2406: `1258`,
    2407: `1258`,
    2408: `1259`,
    2409: `1260`,
    241: `56`,
    2410: `1260`,
    2411: `1261`,
    2412: `1262`,
    2413: `1262`,
    2414: `1262`,
    2415: `1263`,
    2416: `1263`,
    2417: `1264`,
    2418: `1265`,
    2419: `1265`,
    242: `57`,
    2420: `1265`,
    2421: `1266`,
    2422: `1266`,
    2423: `1267`,
    2424: `1268`,
    2425: `1268`,
    2426: `1268`,
    2427: `1269`,
    2428: `1270`,
    2429: `1270`,
    243: `58`,
    2430: `1271`,
    2431: `1272`,
    2432: `1272`,
    2433: `1272`,
    2434: `1273`,
    2435: `1273`,
    2436: `1274`,
    2437: `1274`,
    2438: `1274`,
    2439: `1275`,
    244: `59`,
    2440: `1276`,
    2441: `1276`,
    2442: `1277`,
    2443: `1279`,
    2444: `1280`,
    2445: `1280`,
    2446: `1280`,
    2447: `1281`,
    2448: `1282`,
    2449: `1283`,
    245: `60`,
    2450: `1284`,
    2451: `1285`,
    2452: `1287`,
    2453: `1288`,
    2454: `1289`,
    2455: `1290`,
    2456: `1290`,
    2457: `1290`,
    2458: `1291`,
    2459: `1291`,
    246: `60`,
    2460: `1292`,
    2461: `1292`,
    2462: `1292`,
    2463: `1293`,
    2464: `1293`,
    2465: `1293`,
    2466: `1295`,
    2467: `1296`,
    2468: `1297`,
    2469: `1297`,
    247: `61`,
    2470: `1298`,
    2471: `1299`,
    2472: `1300`,
    2473: `1301`,
    2474: `1302`,
    2475: `1303`,
    2476: `1305`,
    2477: `1306`,
    2478: `1307`,
    2479: `1307`,
    248: `61`,
    2480: `1308`,
    2481: `1310`,
    2482: `1310`,
    2483: `1311`,
    2484: `1312`,
    2485: `1312`,
    2486: `1313`,
    2487: `1315`,
    2488: `1316`,
    2489: `1316`,
    249: `61`,
    2490: `1317`,
    2491: `1319`,
    2492: `1320`,
    2493: `1321`,
    2494: `1322`,
    2495: `1323`,
    2496: `1323`,
    2497: `1324`,
    2498: `1325`,
    2499: `1326`,
    25: `2`,
    250: `62`,
    2500: `1327`,
    2501: `1329`,
    2502: `1329`,
    2503: `1330`,
    2504: `1330`,
    2505: `1331`,
    2506: `1332`,
    2507: `1333`,
    2508: `1333`,
    2509: `1333`,
    251: `62`,
    2510: `1334`,
    2511: `1334`,
    2512: `1334`,
    2513: `1336`,
    2514: `1336`,
    2515: `1337`,
    2516: `1338`,
    2517: `1338`,
    2518: `1339`,
    2519: `1341`,
    252: `63`,
    2520: `1342`,
    2521: `1342`,
    2522: `1342`,
    2523: `1344`,
    2524: `1345`,
    2525: `1345`,
    2526: `1346`,
    253: `63`,
    254: `64`,
    255: `65`,
    256: `65`,
    257: `66`,
    258: `67`,
    259: `67`,
    26: `2`,
    260: `68`,
    261: `69`,
    262: `71`,
    263: `72`,
    264: `72`,
    265: `73`,
    266: `73`,
    267: `73`,
    268: `73`,
    269: `73`,
    27: `2`,
    270: `73`,
    271: `73`,
    272: `73`,
    273: `73`,
    274: `73`,
    275: `74`,
    276: `74`,
    277: `75`,
    278: `76`,
    279: `76`,
    28: `2`,
    280: `76`,
    281: `77`,
    282: `78`,
    283: `79`,
    284: `79`,
    285: `80`,
    286: `81`,
    287: `81`,
    288: `81`,
    289: `82`,
    29: `2`,
    290: `82`,
    291: `83`,
    292: `83`,
    293: `84`,
    294: `84`,
    295: `86`,
    296: `86`,
    297: `87`,
    298: `87`,
    299: `87`,
    3: `2`,
    30: `2`,
    300: `88`,
    301: `89`,
    302: `89`,
    303: `89`,
    304: `91`,
    305: `91`,
    306: `92`,
    307: `92`,
    308: `93`,
    309: `94`,
    31: `2`,
    310: `96`,
    311: `96`,
    312: `96`,
    313: `98`,
    314: `99`,
    315: `99`,
    316: `100`,
    317: `100`,
    318: `101`,
    319: `101`,
    32: `2`,
    320: `101`,
    321: `103`,
    322: `103`,
    323: `104`,
    324: `104`,
    325: `104`,
    326: `106`,
    327: `106`,
    328: `106`,
    329: `106`,
    33: `2`,
    330: `106`,
    331: `106`,
    332: `107`,
    333: `107`,
    334: `108`,
    335: `109`,
    336: `111`,
    337: `112`,
    338: `114`,
    339: `114`,
    34: `2`,
    340: `115`,
    341: `115`,
    342: `115`,
    343: `116`,
    344: `116`,
    345: `117`,
    346: `117`,
    347: `118`,
    348: `118`,
    349: `118`,
    35: `2`,
    350: `119`,
    351: `119`,
    352: `120`,
    353: `120`,
    354: `121`,
    355: `121`,
    356: `122`,
    357: `123`,
    358: `128`,
    359: `128`,
    36: `2`,
    360: `129`,
    361: `129`,
    362: `130`,
    363: `130`,
    364: `131`,
    365: `132`,
    366: `133`,
    367: `138`,
    368: `138`,
    369: `140`,
    37: `2`,
    370: `141`,
    371: `141`,
    372: `142`,
    373: `143`,
    374: `143`,
    375: `144`,
    376: `145`,
    377: `145`,
    378: `145`,
    379: `146`,
    38: `2`,
    380: `146`,
    381: `146`,
    382: `147`,
    383: `148`,
    384: `148`,
    385: `149`,
    386: `149`,
    387: `150`,
    388: `151`,
    389: `156`,
    39: `2`,
    390: `157`,
    391: `158`,
    392: `158`,
    393: `159`,
    394: `160`,
    395: `160`,
    396: `161`,
    397: `161`,
    398: `162`,
    399: `163`,
    4: `2`,
    40: `2`,
    400: `163`,
    401: `163`,
    402: `164`,
    403: `164`,
    404: `164`,
    405: `166`,
    406: `167`,
    407: `168`,
    408: `168`,
    409: `169`,
    41: `2`,
    410: `170`,
    411: `170`,
    412: `171`,
    413: `172`,
    414: `172`,
    415: `173`,
    416: `174`,
    417: `174`,
    418: `175`,
    419: `176`,
    42: `4`,
    420: `176`,
    421: `176`,
    422: `177`,
    423: `177`,
    424: `177`,
    425: `178`,
    426: `178`,
    427: `179`,
    428: `180`,
    429: `180`,
    43: `4`,
    430: `180`,
    431: `181`,
    432: `181`,
    433: `181`,
    434: `182`,
    435: `182`,
    436: `183`,
    437: `183`,
    438: `184`,
    439: `185`,
    44: `5`,
    440: `185`,
    441: `186`,
    442: `187`,
    443: `187`,
    444: `188`,
    445: `189`,
    446: `191`,
    447: `192`,
    448: `192`,
    449: `193`,
    45: `5`,
    450: `193`,
    451: `193`,
    452: `193`,
    453: `193`,
    454: `193`,
    455: `193`,
    456: `193`,
    457: `193`,
    458: `193`,
    459: `194`,
    46: `5`,
    460: `194`,
    461: `195`,
    462: `196`,
    463: `196`,
    464: `196`,
    465: `197`,
    466: `198`,
    467: `199`,
    468: `199`,
    469: `200`,
    47: `6`,
    470: `201`,
    471: `201`,
    472: `201`,
    473: `202`,
    474: `202`,
    475: `203`,
    476: `203`,
    477: `204`,
    478: `204`,
    479: `205`,
    48: `7`,
    480: `205`,
    481: `205`,
    482: `207`,
    483: `207`,
    484: `208`,
    485: `208`,
    486: `208`,
    487: `209`,
    488: `209`,
    489: `210`,
    49: `8`,
    490: `210`,
    491: `211`,
    492: `211`,
    493: `211`,
    494: `212`,
    495: `212`,
    496: `213`,
    497: `213`,
    498: `214`,
    499: `214`,
    5: `2`,
    50: `9`,
    500: `214`,
    501: `215`,
    502: `215`,
    503: `216`,
    504: `216`,
    505: `217`,
    506: `217`,
    507: `218`,
    508: `219`,
    509: `224`,
    51: `10`,
    510: `224`,
    511: `225`,
    512: `225`,
    513: `226`,
    514: `227`,
    515: `232`,
    516: `232`,
    517: `233`,
    518: `233`,
    519: `234`,
    52: `11`,
    520: `235`,
    521: `240`,
    522: `240`,
    523: `242`,
    524: `243`,
    525: `243`,
    526: `244`,
    527: `245`,
    528: `245`,
    529: `246`,
    53: `11`,
    530: `247`,
    531: `247`,
    532: `247`,
    533: `248`,
    534: `248`,
    535: `248`,
    536: `249`,
    537: `250`,
    538: `250`,
    539: `251`,
    54: `12`,
    540: `251`,
    541: `252`,
    542: `253`,
    543: `258`,
    544: `258`,
    545: `259`,
    546: `259`,
    547: `260`,
    548: `261`,
    549: `261`,
    55: `12`,
    550: `262`,
    551: `262`,
    552: `264`,
    553: `265`,
    554: `265`,
    555: `266`,
    556: `267`,
    557: `267`,
    558: `268`,
    559: `269`,
    56: `13`,
    560: `270`,
    561: `270`,
    562: `270`,
    563: `271`,
    564: `271`,
    565: `271`,
    566: `272`,
    567: `273`,
    568: `273`,
    569: `274`,
    57: `14`,
    570: `274`,
    571: `275`,
    572: `276`,
    573: `281`,
    574: `282`,
    575: `283`,
    576: `283`,
    577: `284`,
    578: `285`,
    579: `285`,
    58: `14`,
    580: `286`,
    581: `286`,
    582: `287`,
    583: `288`,
    584: `288`,
    585: `288`,
    586: `289`,
    587: `289`,
    588: `289`,
    589: `291`,
    59: `15`,
    590: `292`,
    591: `293`,
    592: `293`,
    593: `294`,
    594: `295`,
    595: `295`,
    596: `296`,
    597: `297`,
    598: `297`,
    599: `298`,
    6: `2`,
    60: `16`,
    600: `299`,
    601: `299`,
    602: `300`,
    603: `301`,
    604: `301`,
    605: `301`,
    606: `302`,
    607: `302`,
    608: `302`,
    609: `303`,
    61: `17`,
    610: `303`,
    611: `304`,
    612: `305`,
    613: `305`,
    614: `305`,
    615: `306`,
    616: `306`,
    617: `306`,
    618: `307`,
    619: `307`,
    62: `18`,
    620: `308`,
    621: `308`,
    622: `309`,
    623: `310`,
    624: `310`,
    625: `311`,
    626: `312`,
    627: `312`,
    628: `313`,
    629: `314`,
    63: `19`,
    630: `316`,
    631: `316`,
    632: `317`,
    633: `317`,
    634: `318`,
    635: `319`,
    636: `319`,
    637: `319`,
    638: `320`,
    639: `320`,
    64: `20`,
    640: `321`,
    641: `321`,
    642: `322`,
    643: `323`,
    644: `323`,
    645: `324`,
    646: `325`,
    647: `326`,
    648: `326`,
    649: `327`,
    65: `20`,
    650: `327`,
    651: `327`,
    652: `328`,
    653: `328`,
    654: `329`,
    655: `329`,
    656: `330`,
    657: `331`,
    658: `331`,
    659: `332`,
    66: `21`,
    660: `333`,
    661: `333`,
    662: `334`,
    663: `335`,
    664: `337`,
    665: `338`,
    666: `338`,
    667: `339`,
    668: `339`,
    669: `339`,
    67: `22`,
    670: `339`,
    671: `339`,
    672: `339`,
    673: `339`,
    674: `339`,
    675: `339`,
    676: `339`,
    677: `340`,
    678: `340`,
    679: `341`,
    68: `24`,
    680: `342`,
    681: `342`,
    682: `342`,
    683: `343`,
    684: `344`,
    685: `345`,
    686: `345`,
    687: `346`,
    688: `347`,
    689: `347`,
    69: `24`,
    690: `347`,
    691: `348`,
    692: `348`,
    693: `349`,
    694: `349`,
    695: `350`,
    696: `350`,
    697: `351`,
    698: `351`,
    699: `351`,
    7: `2`,
    70: `24`,
    700: `353`,
    701: `353`,
    702: `354`,
    703: `354`,
    704: `354`,
    705: `355`,
    706: `355`,
    707: `356`,
    708: `356`,
    709: `357`,
    71: `24`,
    710: `357`,
    711: `357`,
    712: `358`,
    713: `358`,
    714: `359`,
    715: `359`,
    716: `360`,
    717: `360`,
    718: `361`,
    719: `362`,
    72: `24`,
    720: `362`,
    721: `364`,
    722: `365`,
    723: `365`,
    724: `366`,
    725: `367`,
    726: `367`,
    727: `368`,
    728: `369`,
    729: `370`,
    73: `24`,
    730: `370`,
    731: `370`,
    732: `371`,
    733: `372`,
    734: `372`,
    735: `373`,
    736: `374`,
    737: `375`,
    738: `376`,
    739: `377`,
    74: `24`,
    740: `382`,
    741: `382`,
    742: `383`,
    743: `383`,
    744: `384`,
    745: `384`,
    746: `384`,
    747: `385`,
    748: `385`,
    749: `386`,
    75: `24`,
    750: `387`,
    751: `392`,
    752: `392`,
    753: `393`,
    754: `394`,
    755: `394`,
    756: `395`,
    757: `396`,
    758: `397`,
    759: `397`,
    76: `24`,
    760: `397`,
    761: `398`,
    762: `398`,
    763: `398`,
    764: `398`,
    765: `398`,
    766: `398`,
    767: `399`,
    768: `399`,
    769: `400`,
    77: `24`,
    770: `401`,
    771: `401`,
    772: `402`,
    773: `403`,
    774: `405`,
    775: `406`,
    776: `406`,
    777: `407`,
    778: `407`,
    779: `407`,
    78: `24`,
    780: `407`,
    781: `407`,
    782: `407`,
    783: `407`,
    784: `407`,
    785: `407`,
    786: `407`,
    787: `408`,
    788: `408`,
    789: `409`,
    79: `24`,
    790: `410`,
    791: `411`,
    792: `411`,
    793: `412`,
    794: `412`,
    795: `413`,
    796: `413`,
    797: `414`,
    798: `414`,
    799: `415`,
    8: `2`,
    80: `24`,
    800: `415`,
    801: `415`,
    802: `417`,
    803: `417`,
    804: `418`,
    805: `418`,
    806: `418`,
    807: `419`,
    808: `420`,
    809: `420`,
    81: `24`,
    810: `421`,
    811: `421`,
    812: `422`,
    813: `423`,
    814: `429`,
    815: `430`,
    816: `430`,
    817: `431`,
    818: `432`,
    819: `432`,
    82: `24`,
    820: `433`,
    821: `434`,
    822: `434`,
    823: `434`,
    824: `435`,
    825: `436`,
    826: `436`,
    827: `437`,
    828: `438`,
    829: `439`,
    83: `24`,
    830: `440`,
    831: `441`,
    832: `446`,
    833: `446`,
    834: `447`,
    835: `447`,
    836: `448`,
    837: `448`,
    838: `448`,
    839: `449`,
    84: `24`,
    840: `449`,
    841: `450`,
    842: `451`,
    843: `456`,
    844: `457`,
    845: `458`,
    846: `458`,
    847: `459`,
    848: `460`,
    849: `460`,
    85: `24`,
    850: `460`,
    851: `461`,
    852: `461`,
    853: `461`,
    854: `461`,
    855: `461`,
    856: `461`,
    857: `462`,
    858: `462`,
    859: `463`,
    86: `24`,
    860: `464`,
    861: `466`,
    862: `467`,
    863: `467`,
    864: `468`,
    865: `468`,
    866: `468`,
    867: `468`,
    868: `468`,
    869: `468`,
    87: `24`,
    870: `468`,
    871: `468`,
    872: `468`,
    873: `468`,
    874: `469`,
    875: `469`,
    876: `470`,
    877: `471`,
    878: `472`,
    879: `472`,
    88: `24`,
    880: `473`,
    881: `473`,
    882: `474`,
    883: `474`,
    884: `475`,
    885: `475`,
    886: `476`,
    887: `476`,
    888: `476`,
    889: `478`,
    89: `24`,
    890: `478`,
    891: `478`,
    892: `478`,
    893: `478`,
    894: `478`,
    895: `478`,
    896: `478`,
    897: `478`,
    898: `478`,
    899: `478`,
    9: `2`,
    90: `24`,
    900: `478`,
    901: `478`,
    902: `478`,
    903: `478`,
    904: `478`,
    905: `478`,
    906: `478`,
    907: `478`,
    908: `478`,
    909: `478`,
    91: `24`,
    910: `478`,
    911: `478`,
    912: `478`,
    913: `478`,
    914: `478`,
    915: `478`,
    916: `478`,
    917: `478`,
    918: `478`,
    919: `478`,
    92: `24`,
    920: `478`,
    921: `478`,
    922: `478`,
    923: `478`,
    924: `479`,
    925: `480`,
    926: `481`,
    927: `482`,
    928: `483`,
    929: `489`,
    93: `24`,
    930: `490`,
    931: `491`,
    932: `491`,
    933: `492`,
    934: `493`,
    935: `493`,
    936: `493`,
    937: `494`,
    938: `494`,
    939: `494`,
    94: `24`,
    940: `494`,
    941: `494`,
    942: `494`,
    943: `495`,
    944: `497`,
    945: `498`,
    946: `498`,
    947: `499`,
    948: `499`,
    949: `499`,
    95: `24`,
    950: `499`,
    951: `499`,
    952: `499`,
    953: `499`,
    954: `499`,
    955: `499`,
    956: `499`,
    957: `500`,
    958: `500`,
    959: `501`,
    96: `24`,
    960: `502`,
    961: `503`,
    962: `503`,
    963: `504`,
    964: `504`,
    965: `505`,
    966: `506`,
    967: `506`,
    968: `507`,
    969: `507`,
    97: `24`,
    970: `507`,
    971: `508`,
    972: `509`,
    973: `509`,
    974: `510`,
    975: `510`,
    976: `510`,
    977: `511`,
    978: `512`,
    979: `512`,
    98: `24`,
    980: `513`,
    981: `513`,
    982: `513`,
    983: `514`,
    984: `515`,
    985: `515`,
    986: `516`,
    987: `516`,
    988: `516`,
    989: `517`,
    99: `24`,
    990: `518`,
    991: `518`,
    992: `519`,
    993: `519`,
    994: `519`,
    995: `520`,
    996: `521`,
    997: `521`,
    998: `522`,
    999: `522`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 307,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:298:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:121:29:after expr stmt semicolon',
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
  "deleteAllowanceBox": deleteAllowanceBox,
  "deleteBalanceBox": deleteBalanceBox,
  "destroy": destroy,
  "grant": grant,
  "touch": touch
  };
export const _APIs = {
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy,
  grant: grant,
  touch: touch
  };
