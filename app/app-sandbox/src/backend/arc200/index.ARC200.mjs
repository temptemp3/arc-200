// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = "0.1.13";
export const _versionHash = "0.1.13 (88e48902)";
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  return {
    DeleteAllowanceBox: [ctc0, ctc0],
    DeleteBalanceBox: [ctc0],
    Destroy: [],
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1],
  };
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc4 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Object({
    decimals: ctc2,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc5,
  });
  const ctc7 = stdlib.T_Object({
    closed: ctc1,
    decimals: ctc2,
    enableZeroAddressBurn: ctc1,
    manager: ctc0,
    name: ctc3,
    symbol: ctc4,
    totalSupply: ctc5,
    zeroAddress: ctc0,
  });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc9 = stdlib.T_Struct([
    ["name", ctc3],
    ["symbol", ctc4],
    ["decimals", ctc2],
    ["totalSupply", ctc5],
    ["zeroAddress", ctc0],
    ["manager", ctc0],
    ["enableZeroAddressBurn", ctc1],
    ["closed", ctc1],
  ]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc5,
  });
  const map0_ctc = ctc11;

  const map1_ctc = ctc11;

  const _arc200_allowance = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async (_v1696, _v1697) => {
        const v1696 = stdlib.protect(ctc0, _v1696, null);
        const v1697 = stdlib.protect(ctc0, _v1697, null);

        const v1698 = [v1696, v1697];
        const v1699 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, ctc8, v1698, ctc5),
          null
        );
        const v1700 = stdlib.fromSome(
          v1699,
          stdlib.checkedBigNumberify(
            "./index.rsh:128:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );

        return v1700;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async (_v1693) => {
        const v1693 = stdlib.protect(ctc0, _v1693, null);

        const v1694 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, ctc0, v1693, ctc5),
          null
        );
        const v1695 = stdlib.fromSome(
          v1694,
          stdlib.checkedBigNumberify(
            "./index.rsh:123:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );

        return v1695;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _arc200_decimals = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async () => {
        return v1668;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _arc200_name = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async () => {
        const v1675 = v1659.name;

        return v1675;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _arc200_symbol = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async () => {
        const v1676 = v1659.symbol;

        return v1676;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async () => {
        return v1665;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _hasAllowance = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async (_v1705, _v1706) => {
        const v1705 = stdlib.protect(ctc0, _v1705, null);
        const v1706 = stdlib.protect(ctc0, _v1706, null);

        const v1707 = [v1705, v1706];
        const v1708 = stdlib.protect(
          map1_ctc,
          await viewlib.viewMapRef(1, ctc8, v1707, ctc5),
          null
        );
        const v1709 = {
          None: 0,
          Some: 1,
        }[v1708[0]];
        const v1710 = stdlib.eq(
          v1709,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );

        return v1710;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _hasBalance = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async (_v1701) => {
        const v1701 = stdlib.protect(ctc0, _v1701, null);

        const v1702 = stdlib.protect(
          map0_ctc,
          await viewlib.viewMapRef(0, ctc0, v1701, ctc5),
          null
        );
        const v1703 = {
          None: 0,
          Some: 1,
        }[v1702[0]];
        const v1704 = stdlib.eq(
          v1703,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );

        return v1704;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  const _state = async (i, svs, args) => {
    if (
      stdlib.eq(
        i,
        stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")
      )
    ) {
      const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = svs;
      return await (async () => {
        const v1711 = v1684.name;
        const v1712 = v1684.symbol;
        const v1713 = v1684.decimals;
        const v1714 = v1684.totalSupply;
        const v1715 = v1684.zeroAddress;
        const v1716 = v1684.manager;
        const v1717 = v1684.enableZeroAddressBurn;
        const v1718 = v1684.closed;
        const v1719 = {
          closed: v1718,
          decimals: v1713,
          enableZeroAddressBurn: v1717,
          manager: v1716,
          name: v1711,
          symbol: v1712,
          totalSupply: v1714,
          zeroAddress: v1715,
        };

        return v1719;
      })(...args);
    }

    stdlib.assert(false, "illegal view");
  };
  return {
    infos: {
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc0, ctc0],
        rng: ctc5,
      },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc0],
        rng: ctc5,
      },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc2,
      },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc3,
      },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc4,
      },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc5,
      },
      hasAllowance: {
        decode: _hasAllowance,
        dom: [ctc0, ctc0],
        rng: ctc1,
      },
      hasBalance: {
        decode: _hasBalance,
        dom: [ctc0],
        rng: ctc1,
      },
      state: {
        decode: _state,
        dom: [],
        rng: ctc9,
      },
    },
    views: {
      3: [ctc0, ctc1, ctc6, ctc5, ctc2, ctc7, ctc2],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3,
  };
}
export async function Deployer(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for Deployer expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for Deployer expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    enableZeroAddressBurn: ctc3,
    manager: ctc4,
    meta: ctc8,
    zeroAddress: ctc4,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
  });

  const v1631 = stdlib.protect(
    ctc9,
    interact.params,
    "for Deployer's interact field params"
  );
  const v1632 = v1631.enableZeroAddressBurn;
  const v1633 = v1631.manager;
  const v1634 = v1631.meta;
  const v1635 = v1631.zeroAddress;
  const v1636 = v1634.decimals;
  const v1639 = v1634.totalSupply;

  const v1646 = stdlib.addressEq(v1635, v1633);
  const v1647 = v1646 ? false : true;
  stdlib.assert(v1647, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:83:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
    ],
    msg: "ARC200: Zero address must not equal manager address",
    who: "Deployer",
  });
  const v1650 = stdlib.gt256(
    v1639,
    stdlib.checkedBigNumberify(
      "./index.rsh:88:34:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  stdlib.assert(v1650, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:87:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
    ],
    msg: "ARC200: Total supply must be greater than zero",
    who: "Deployer",
  });
  const v1653 = stdlib.le(
    v1636,
    stdlib.checkedBigNumberify(
      "./index.rsh:3:22:decimal",
      stdlib.UInt_max,
      "256"
    )
  );
  stdlib.assert(v1653, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
    ],
    msg: "ARC200: Decimals must be less than 256",
    who: "Deployer",
  });

  const txn1 = await ctc.sendrecv({
    args: [v1635, v1633, v1632, v1634],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify(
      "./index.rsh:82:5:dot",
      stdlib.UInt_max,
      "0"
    ),
    onlyIf: true,
    out_tys: [ctc4, ctc4, ctc3, ctc8],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:82:5:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1656, v1657, v1658, v1659],
        secs: v1661,
        time: v1660,
        didSend: v146,
        from: v1655,
      } = txn1;

      const v1665 = v1659.totalSupply;
      const v1668 = v1659.decimals;
      await stdlib.simMapSet(sim_r, 0, ctc4, v1657, ctc1, v1665);
      await stdlib.simMapSet(
        sim_r,
        0,
        ctc4,
        v1656,
        ctc1,
        stdlib.checkedBigNumberify(
          "./index.rsh:101:35:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      null;
      const v1673 = await ctc.getContractInfo();

      const v1680 = v1659.name;
      const v1681 = v1659.symbol;
      const v1683 = {
        closed: false,
        decimals: v1668,
        enableZeroAddressBurn: v1658,
        manager: v1657,
        name: v1680,
        symbol: v1681,
        totalSupply: v1665,
        zeroAddress: v1656,
      };
      const v1684 = v1683;
      const v1685 = v1660;
      const v1688 = stdlib.checkedBigNumberify(
        "./index.rsh:75:9:after expr stmt semicolon",
        stdlib.UInt_max,
        "0"
      );

      if (
        await (async () => {
          const v1691 = v1684.closed;
          const v1692 = v1691 ? false : true;

          return v1692;
        })()
      ) {
        sim_r.isHalt = false;
      } else {
        sim_r.txns.push({
          kind: "halt",
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc3, ctc8],
    waitIfNotPresent: false,
  });
  const {
    data: [v1656, v1657, v1658, v1659],
    secs: v1661,
    time: v1660,
    didSend: v146,
    from: v1655,
  } = txn1;
  const v1662 = stdlib.addressEq(v1656, v1657);
  const v1663 = v1662 ? false : true;
  stdlib.assert(v1663, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:83:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
    ],
    msg: "ARC200: Zero address must not equal manager address",
    who: "Deployer",
  });
  const v1665 = v1659.totalSupply;
  const v1666 = stdlib.gt256(
    v1665,
    stdlib.checkedBigNumberify(
      "./index.rsh:88:34:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  stdlib.assert(v1666, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:87:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
    ],
    msg: "ARC200: Total supply must be greater than zero",
    who: "Deployer",
  });
  const v1668 = v1659.decimals;
  const v1669 = stdlib.le(
    v1668,
    stdlib.checkedBigNumberify(
      "./index.rsh:3:22:decimal",
      stdlib.UInt_max,
      "256"
    )
  );
  stdlib.assert(v1669, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:91:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
    ],
    msg: "ARC200: Decimals must be less than 256",
    who: "Deployer",
  });
  await stdlib.mapSet(map0, ctc4, v1657, ctc1, v1665);
  await stdlib.mapSet(
    map0,
    ctc4,
    v1656,
    ctc1,
    stdlib.checkedBigNumberify(
      "./index.rsh:101:35:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  null;
  const v1673 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1673), {
    at: "./index.rsh:104:19:application",
    fs: [
      "at ./index.rsh:104:19:application call to [unknown function] (defined at: ./index.rsh:104:19:function exp)",
      'at ./index.rsh:104:19:application call to "liftedInteract" (defined at: ./index.rsh:104:19:application)',
    ],
    msg: "ready",
    who: "Deployer",
  });

  const v1680 = v1659.name;
  const v1681 = v1659.symbol;
  const v1683 = {
    closed: false,
    decimals: v1668,
    enableZeroAddressBurn: v1658,
    manager: v1657,
    name: v1680,
    symbol: v1681,
    totalSupply: v1665,
    zeroAddress: v1656,
  };
  let v1684 = v1683;
  let v1685 = v1660;
  let v1688 = stdlib.checkedBigNumberify(
    "./index.rsh:75:9:after expr stmt semicolon",
    stdlib.UInt_max,
    "0"
  );

  let txn2 = txn1;
  while (
    await (async () => {
      const v1691 = v1684.closed;
      const v1692 = v1691 ? false : true;

      return v1692;
    })()
  ) {
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v1895],
      secs: v1897,
      time: v1896,
      didSend: v1131,
      from: v1894,
    } = txn3;
    switch (v1895[0]) {
      case "arc200_approve0_289": {
        const v1898 = v1895[1];
        undefined /* setApiDetails */;
        const v1911 =
          v1898[
            stdlib.checkedBigNumberify(
              "./index.rsh:222:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v1912 =
          v1898[
            stdlib.checkedBigNumberify(
              "./index.rsh:222:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        const v1913 = stdlib.addressEq(v1894, v1656);
        const v1914 = v1913 ? false : true;
        stdlib.assert(v1914, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)",
          ],
          msg: "ARC200: Approve this to zero address",
          who: "Deployer",
        });
        const v1916 = stdlib.addressEq(v1911, v1656);
        const v1917 = v1916 ? false : true;
        stdlib.assert(v1917, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)",
          ],
          msg: "ARC200: Approve to zero address",
          who: "Deployer",
        });
        const v1921 = [v1894, v1911];
        await stdlib.mapSet(map1, ctc12, v1921, ctc1, v1912);
        null;
        const v1922 = true;
        await txn3.getOutput("arc200_approve", "v1922", ctc3, v1922);
        const cv1684 = v1684;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "arc200_transfer0_289": {
        const v2113 = v1895[1];
        undefined /* setApiDetails */;
        const v2147 =
          v2113[
            stdlib.checkedBigNumberify(
              "./index.rsh:175:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2148 =
          v2113[
            stdlib.checkedBigNumberify(
              "./index.rsh:175:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        const v2149 = stdlib.addressEq(v2147, v1656);
        const v2150 = v2149 ? false : true;
        const v2151 = v1658 ? true : v2150;
        stdlib.assert(v2151, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)",
          ],
          msg: "ARC200: Transfer to zero address",
          who: "Deployer",
        });
        const v2153 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc4, v1894, ctc1),
          null
        );
        const v2154 = stdlib.fromSome(
          v2153,
          stdlib.checkedBigNumberify(
            "./index.rsh:123:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2155 = stdlib.ge256(v2154, v2148);
        stdlib.assert(v2155, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:180:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)",
          ],
          msg: "ARC200: Transfer amount must not be greater than balance",
          who: "Deployer",
        });
        const v2161 = stdlib.safeSub256(v2154, v2148);
        await stdlib.mapSet(map0, ctc4, v1894, ctc1, v2161);
        const v2162 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc4, v2147, ctc1),
          null
        );
        const v2163 = stdlib.fromSome(
          v2162,
          stdlib.checkedBigNumberify(
            "./index.rsh:123:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2164 = stdlib.safeAdd256(v2163, v2148);
        await stdlib.mapSet(map0, ctc4, v2147, ctc1, v2164);
        null;
        const v2166 = true;
        await txn3.getOutput("arc200_transfer", "v2166", ctc3, v2166);
        const cv1684 = v1684;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "arc200_transferFrom0_289": {
        const v2328 = v1895[1];
        undefined /* setApiDetails */;
        const v2391 =
          v2328[
            stdlib.checkedBigNumberify(
              "./index.rsh:196:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2392 =
          v2328[
            stdlib.checkedBigNumberify(
              "./index.rsh:196:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        const v2393 =
          v2328[
            stdlib.checkedBigNumberify(
              "./index.rsh:196:10:spread",
              stdlib.UInt_max,
              "2"
            )
          ];
        const v2394 = stdlib.addressEq(v2391, v1656);
        const v2395 = v2394 ? false : true;
        stdlib.assert(v2395, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
          ],
          msg: "ARC200: Transfer from zero address",
          who: "Deployer",
        });
        const v2397 = stdlib.addressEq(v2392, v1656);
        const v2398 = v2397 ? false : true;
        stdlib.assert(v2398, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
          ],
          msg: "ARC200: Transfer to zero address",
          who: "Deployer",
        });
        const v2400 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc4, v2391, ctc1),
          null
        );
        const v2401 = stdlib.fromSome(
          v2400,
          stdlib.checkedBigNumberify(
            "./index.rsh:123:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2402 = stdlib.ge256(v2401, v2393);
        stdlib.assert(v2402, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
          ],
          msg: "ARC200: Amount must not be greater than balance",
          who: "Deployer",
        });
        const v2404 = [v2391, v1894];
        const v2405 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, ctc12, v2404, ctc1),
          null
        );
        const v2406 = stdlib.fromSome(
          v2405,
          stdlib.checkedBigNumberify(
            "./index.rsh:128:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2407 = stdlib.ge256(v2406, v2393);
        stdlib.assert(v2407, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
          ],
          msg: "ARC200: Amount must not be greater than allowance",
          who: "Deployer",
        });
        const v2414 = stdlib.safeSub256(v2401, v2393);
        await stdlib.mapSet(map0, ctc4, v2391, ctc1, v2414);
        const v2415 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc4, v2392, ctc1),
          null
        );
        const v2416 = stdlib.fromSome(
          v2415,
          stdlib.checkedBigNumberify(
            "./index.rsh:123:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2417 = stdlib.safeAdd256(v2416, v2393);
        await stdlib.mapSet(map0, ctc4, v2392, ctc1, v2417);
        null;
        const v2422 = stdlib.safeSub256(v2406, v2393);
        await stdlib.mapSet(map1, ctc12, v2404, ctc1, v2422);
        null;
        const v2424 = true;
        await txn3.getOutput("arc200_transferFrom", "v2424", ctc3, v2424);
        const cv1684 = v1684;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "deleteAllowanceBox0_289": {
        const v2543 = v1895[1];
        undefined /* setApiDetails */;
        const v2650 =
          v2543[
            stdlib.checkedBigNumberify(
              "./index.rsh:256:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2651 =
          v2543[
            stdlib.checkedBigNumberify(
              "./index.rsh:256:10:spread",
              stdlib.UInt_max,
              "1"
            )
          ];
        const v2652 = [v2650, v2651];
        const v2653 = stdlib.protect(
          map1_ctc,
          await stdlib.mapRef(map1, ctc12, v2652, ctc1),
          null
        );
        const v2654 = {
          None: 0,
          Some: 1,
        }[v2653[0]];
        const v2655 = stdlib.eq(
          v2654,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v2655, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:257:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)",
          ],
          msg: "ARC200: Allowance box not found",
          who: "Deployer",
        });
        const v2659 = stdlib.fromSome(
          v2653,
          stdlib.checkedBigNumberify(
            "./index.rsh:128:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2660 = stdlib.eq256(
          v2659,
          stdlib.checkedBigNumberify(
            "./index.rsh:262:46:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        stdlib.assert(v2660, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)",
          ],
          msg: "ARC200: Allowance box not empty",
          who: "Deployer",
        });
        await stdlib.mapSet(map1, ctc12, v2652, ctc1, undefined /* Nothing */);
        null;
        const v2665 = null;
        await txn3.getOutput("deleteAllowanceBox", "v2665", ctc0, v2665);
        const cv1684 = v1684;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "deleteBalanceBox0_289": {
        const v2758 = v1895[1];
        undefined /* setApiDetails */;
        const v2890 =
          v2758[
            stdlib.checkedBigNumberify(
              "./index.rsh:239:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v2891 = stdlib.addressEq(v2890, v1656);
        const v2892 = v2891 ? false : true;
        stdlib.assert(v2892, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
          ],
          msg: "ARC200: Delete balance box to zero address",
          who: "Deployer",
        });
        const v2894 = stdlib.protect(
          map0_ctc,
          await stdlib.mapRef(map0, ctc4, v2890, ctc1),
          null
        );
        const v2895 = {
          None: 0,
          Some: 1,
        }[v2894[0]];
        const v2896 = stdlib.eq(
          v2895,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v2896, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
          ],
          msg: "ARC200: Balance box not found",
          who: "Deployer",
        });
        const v2899 = stdlib.fromSome(
          v2894,
          stdlib.checkedBigNumberify(
            "./index.rsh:123:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        const v2900 = stdlib.eq256(
          v2899,
          stdlib.checkedBigNumberify(
            "./index.rsh:242:40:decimal",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          )
        );
        stdlib.assert(v2900, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:242:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
          ],
          msg: "ARC200: Balance box not empty",
          who: "Deployer",
        });
        await stdlib.mapSet(map0, ctc4, v2890, ctc1, undefined /* Nothing */);
        null;
        const v2903 = null;
        await txn3.getOutput("deleteBalanceBox", "v2903", ctc0, v2903);
        const cv1684 = v1684;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "destroy0_289": {
        const v2973 = v1895[1];
        undefined /* setApiDetails */;
        const v3127 = [
          "Some",
          stdlib.checkedBigNumberify(
            "<builtin>",
            "115792089237316195423570985008687907853269984665640564039457584007913129639935",
            "0"
          ),
        ];
        const v3128 = {
          None: 0,
          Some: 1,
        }[v3127[0]];
        const v3129 = stdlib.eq(
          v3128,
          stdlib.checkedBigNumberify(
            "reach standard library:38:41:application",
            stdlib.UInt_max,
            "1"
          )
        );
        stdlib.assert(v3129, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:280:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)",
          ],
          msg: "ARC200: Zero address balance box not found",
          who: "Deployer",
        });
        await stdlib.mapSet(map0, ctc4, v1656, ctc1, undefined /* Nothing */);
        null;
        const v3131 = null;
        await txn3.getOutput("destroy", "v3131", ctc0, v3131);
        const v3138 = v1684.decimals;
        const v3139 = v1684.enableZeroAddressBurn;
        const v3140 = v1684.manager;
        const v3141 = v1684.name;
        const v3142 = v1684.symbol;
        const v3143 = v1684.totalSupply;
        const v3144 = v1684.zeroAddress;
        const v3145 = {
          closed: true,
          decimals: v3138,
          enableZeroAddressBurn: v3139,
          manager: v3140,
          name: v3141,
          symbol: v3142,
          totalSupply: v3143,
          zeroAddress: v3144,
        };
        const cv1684 = v3145;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "grant0_289": {
        const v3188 = v1895[1];
        undefined /* setApiDetails */;
        const v3364 =
          v3188[
            stdlib.checkedBigNumberify(
              "./index.rsh:163:10:spread",
              stdlib.UInt_max,
              "0"
            )
          ];
        const v3365 = stdlib.addressEq(v3364, v1656);
        const v3366 = v3365 ? false : true;
        stdlib.assert(v3366, {
          at: "reach standard library:57:5:application",
          fs: [
            'at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            "at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)",
          ],
          msg: "ARC200: Grant zero address",
          who: "Deployer",
        });
        const v3369 = null;
        await txn3.getOutput("grant", "v3369", ctc0, v3369);
        const v3376 = v1684.closed;
        const v3377 = v1684.decimals;
        const v3378 = v1684.enableZeroAddressBurn;
        const v3380 = v1684.name;
        const v3381 = v1684.symbol;
        const v3382 = v1684.totalSupply;
        const v3383 = v1684.zeroAddress;
        const v3384 = {
          closed: v3376,
          decimals: v3377,
          enableZeroAddressBurn: v3378,
          manager: v3364,
          name: v3380,
          symbol: v3381,
          totalSupply: v3382,
          zeroAddress: v3383,
        };
        const cv1684 = v3384;
        const cv1685 = v1896;
        const cv1688 = v1688;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
      case "touch0_289": {
        const v3403 = v1895[1];
        undefined /* setApiDetails */;
        const v3604 = stdlib.le(await ctc.getBalance(), v1688)
          ? stdlib.checkedBigNumberify(
              "./index.rsh:153:39:application",
              stdlib.UInt_max,
              "0"
            )
          : stdlib.safeSub(await ctc.getBalance(), v1688);
        const v3605 = stdlib.safeAdd(v3604, v1688);
        const v3606 = v1684.manager;
        const v3610 = stdlib.sub(v3605, v3604);
        const v3611 = null;
        await txn3.getOutput("touch", "v3611", ctc0, v3611);
        const cv1684 = v1684;
        const cv1685 = v1896;
        const cv1688 = v3610;

        v1684 = cv1684;
        v1685 = cv1685;
        v1688 = cv1688;

        txn2 = txn3;
        continue;
        break;
      }
    }
  }
  return;
}
export async function _arc200_approve3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _arc200_approve3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _arc200_approve3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1803 = ctc.selfAddress();
  const v1805 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:222:47:application call to [unknown function] (defined at: ./index.rsh:222:47:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_approve0_289" (defined at: ./index.rsh:222:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "arc200_approve",
  });
  const v1806 =
    v1805[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1810 = stdlib.addressEq(v1803, v1656);
  const v1811 = v1810 ? false : true;
  stdlib.assert(v1811, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:222:47:application call to [unknown function] (defined at: ./index.rsh:222:47:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_approve0_289" (defined at: ./index.rsh:222:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Approve this to zero address",
    who: "arc200_approve",
  });
  const v1813 = stdlib.addressEq(v1806, v1656);
  const v1814 = v1813 ? false : true;
  stdlib.assert(v1814, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:222:47:application call to [unknown function] (defined at: ./index.rsh:222:47:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_approve0_289" (defined at: ./index.rsh:222:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Approve to zero address",
    who: "arc200_approve",
  });
  const v1823 = ["arc200_approve0_289", v1805];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1823],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:222:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "arc200_approve",
          });
          const v1911 =
            v1898[
              stdlib.checkedBigNumberify(
                "./index.rsh:222:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v1912 =
            v1898[
              stdlib.checkedBigNumberify(
                "./index.rsh:222:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          const v1921 = [v1894, v1911];
          await stdlib.simMapSet(sim_r, 1, ctc12, v1921, ctc1, v1912);
          null;
          const v1922 = true;
          const v1923 = await txn1.getOutput(
            "arc200_approve",
            "v1922",
            ctc4,
            v1922
          );

          const v5060 = v1684;
          const v5062 = v1688;
          const v5063 = v1684.closed;
          if (v5063) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      undefined /* setApiDetails */;
      const v1911 =
        v1898[
          stdlib.checkedBigNumberify(
            "./index.rsh:222:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v1912 =
        v1898[
          stdlib.checkedBigNumberify(
            "./index.rsh:222:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      const v1913 = stdlib.addressEq(v1894, v1656);
      const v1914 = v1913 ? false : true;
      stdlib.assert(v1914, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:223:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)",
        ],
        msg: "ARC200: Approve this to zero address",
        who: "arc200_approve",
      });
      const v1916 = stdlib.addressEq(v1911, v1656);
      const v1917 = v1916 ? false : true;
      stdlib.assert(v1917, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:224:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)",
        ],
        msg: "ARC200: Approve to zero address",
        who: "arc200_approve",
      });
      const v1921 = [v1894, v1911];
      await stdlib.mapSet(map1, ctc12, v1921, ctc1, v1912);
      null;
      const v1922 = true;
      const v1923 = await txn1.getOutput(
        "arc200_approve",
        "v1922",
        ctc4,
        v1922
      );
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v1898, v1923), {
          at: "./index.rsh:222:11:application",
          fs: [
            "at ./index.rsh:222:11:application call to [unknown function] (defined at: ./index.rsh:222:11:function exp)",
            'at ./index.rsh:229:12:application call to "k" (defined at: ./index.rsh:226:13:function exp)',
            "at ./index.rsh:226:13:application call to [unknown function] (defined at: ./index.rsh:226:13:function exp)",
          ],
          msg: "out",
          who: "arc200_approve",
        });
      } else {
      }

      const v5060 = v1684;
      const v5062 = v1688;
      const v5063 = v1684.closed;
      if (v5063) {
        return;
      } else {
        return;
      }
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _arc200_transfer3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _arc200_transfer3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _arc200_transfer3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1744 = ctc.selfAddress();
  const v1746 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:175:43:application call to [unknown function] (defined at: ./index.rsh:175:43:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:175:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "arc200_transfer",
  });
  const v1747 =
    v1746[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1748 =
    v1746[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "1"
      )
    ];
  const v1751 = stdlib.addressEq(v1747, v1656);
  const v1752 = v1751 ? false : true;
  const v1753 = v1658 ? true : v1752;
  stdlib.assert(v1753, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:175:43:application call to [unknown function] (defined at: ./index.rsh:175:43:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:175:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Transfer to zero address",
    who: "arc200_transfer",
  });
  const v1755 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc3, v1744, ctc1),
    null
  );
  const v1756 = stdlib.fromSome(
    v1755,
    stdlib.checkedBigNumberify(
      "./index.rsh:123:40:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  const v1757 = stdlib.ge256(v1756, v1748);
  stdlib.assert(v1757, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:180:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:175:43:application call to [unknown function] (defined at: ./index.rsh:175:43:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transfer0_289" (defined at: ./index.rsh:175:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Transfer amount must not be greater than balance",
    who: "arc200_transfer",
  });
  const v1766 = ["arc200_transfer0_289", v1746];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1766],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:175:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "arc200_transfer",
          });
          const v2147 =
            v2113[
              stdlib.checkedBigNumberify(
                "./index.rsh:175:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v2148 =
            v2113[
              stdlib.checkedBigNumberify(
                "./index.rsh:175:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          const v2153 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc3, v1894, ctc1),
            null
          );
          const v2154 = stdlib.fromSome(
            v2153,
            stdlib.checkedBigNumberify(
              "./index.rsh:123:40:decimal",
              "115792089237316195423570985008687907853269984665640564039457584007913129639935",
              "0"
            )
          );
          const v2161 = stdlib.safeSub256(v2154, v2148);
          await stdlib.simMapSet(sim_r, 0, ctc3, v1894, ctc1, v2161);
          const v2162 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc3, v2147, ctc1),
            null
          );
          const v2163 = stdlib.fromSome(
            v2162,
            stdlib.checkedBigNumberify(
              "./index.rsh:123:40:decimal",
              "115792089237316195423570985008687907853269984665640564039457584007913129639935",
              "0"
            )
          );
          const v2164 = stdlib.safeAdd256(v2163, v2148);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2147, ctc1, v2164);
          null;
          const v2166 = true;
          const v2167 = await txn1.getOutput(
            "arc200_transfer",
            "v2166",
            ctc4,
            v2166
          );

          const v5105 = v1684;
          const v5107 = v1688;
          const v5108 = v1684.closed;
          if (v5108) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      undefined /* setApiDetails */;
      const v2147 =
        v2113[
          stdlib.checkedBigNumberify(
            "./index.rsh:175:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2148 =
        v2113[
          stdlib.checkedBigNumberify(
            "./index.rsh:175:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      const v2149 = stdlib.addressEq(v2147, v1656);
      const v2150 = v2149 ? false : true;
      const v2151 = v1658 ? true : v2150;
      stdlib.assert(v2151, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)",
        ],
        msg: "ARC200: Transfer to zero address",
        who: "arc200_transfer",
      });
      const v2153 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc3, v1894, ctc1),
        null
      );
      const v2154 = stdlib.fromSome(
        v2153,
        stdlib.checkedBigNumberify(
          "./index.rsh:123:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2155 = stdlib.ge256(v2154, v2148);
      stdlib.assert(v2155, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:180:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)",
        ],
        msg: "ARC200: Transfer amount must not be greater than balance",
        who: "arc200_transfer",
      });
      const v2161 = stdlib.safeSub256(v2154, v2148);
      await stdlib.mapSet(map0, ctc3, v1894, ctc1, v2161);
      const v2162 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc3, v2147, ctc1),
        null
      );
      const v2163 = stdlib.fromSome(
        v2162,
        stdlib.checkedBigNumberify(
          "./index.rsh:123:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2164 = stdlib.safeAdd256(v2163, v2148);
      await stdlib.mapSet(map0, ctc3, v2147, ctc1, v2164);
      null;
      const v2166 = true;
      const v2167 = await txn1.getOutput(
        "arc200_transfer",
        "v2166",
        ctc4,
        v2166
      );
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v2113, v2167), {
          at: "./index.rsh:175:11:application",
          fs: [
            "at ./index.rsh:175:11:application call to [unknown function] (defined at: ./index.rsh:175:11:function exp)",
            'at ./index.rsh:187:12:application call to "k" (defined at: ./index.rsh:185:13:function exp)',
            "at ./index.rsh:185:13:application call to [unknown function] (defined at: ./index.rsh:185:13:function exp)",
          ],
          msg: "out",
          who: "arc200_transfer",
        });
      } else {
      }

      const v5105 = v1684;
      const v5107 = v1688;
      const v5108 = v1684.closed;
      if (v5108) {
        return;
      } else {
        return;
      }
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _arc200_transferFrom3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _arc200_transferFrom3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _arc200_transferFrom3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1768 = ctc.selfAddress();
  const v1770 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:196:54:application call to [unknown function] (defined at: ./index.rsh:196:54:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:196:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "arc200_transferFrom",
  });
  const v1771 =
    v1770[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1772 =
    v1770[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "1"
      )
    ];
  const v1773 =
    v1770[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "2"
      )
    ];
  const v1777 = stdlib.addressEq(v1771, v1656);
  const v1778 = v1777 ? false : true;
  stdlib.assert(v1778, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:196:54:application call to [unknown function] (defined at: ./index.rsh:196:54:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:196:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Transfer from zero address",
    who: "arc200_transferFrom",
  });
  const v1780 = stdlib.addressEq(v1772, v1656);
  const v1781 = v1780 ? false : true;
  stdlib.assert(v1781, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:196:54:application call to [unknown function] (defined at: ./index.rsh:196:54:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:196:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Transfer to zero address",
    who: "arc200_transferFrom",
  });
  const v1783 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc3, v1771, ctc1),
    null
  );
  const v1784 = stdlib.fromSome(
    v1783,
    stdlib.checkedBigNumberify(
      "./index.rsh:123:40:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  const v1785 = stdlib.ge256(v1784, v1773);
  stdlib.assert(v1785, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:196:54:application call to [unknown function] (defined at: ./index.rsh:196:54:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:196:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Amount must not be greater than balance",
    who: "arc200_transferFrom",
  });
  const v1787 = [v1771, v1768];
  const v1788 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, ctc11, v1787, ctc1),
    null
  );
  const v1789 = stdlib.fromSome(
    v1788,
    stdlib.checkedBigNumberify(
      "./index.rsh:128:40:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  const v1790 = stdlib.ge256(v1789, v1773);
  stdlib.assert(v1790, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:196:54:application call to [unknown function] (defined at: ./index.rsh:196:54:function exp)",
      'at ./index.rsh:119:29:application call to "runarc200_transferFrom0_289" (defined at: ./index.rsh:196:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Amount must not be greater than allowance",
    who: "arc200_transferFrom",
  });
  const v1801 = ["arc200_transferFrom0_289", v1770];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1801],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:196:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "arc200_transferFrom",
          });
          const v2391 =
            v2328[
              stdlib.checkedBigNumberify(
                "./index.rsh:196:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v2392 =
            v2328[
              stdlib.checkedBigNumberify(
                "./index.rsh:196:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          const v2393 =
            v2328[
              stdlib.checkedBigNumberify(
                "./index.rsh:196:10:spread",
                stdlib.UInt_max,
                "2"
              )
            ];
          const v2400 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc3, v2391, ctc1),
            null
          );
          const v2401 = stdlib.fromSome(
            v2400,
            stdlib.checkedBigNumberify(
              "./index.rsh:123:40:decimal",
              "115792089237316195423570985008687907853269984665640564039457584007913129639935",
              "0"
            )
          );
          const v2404 = [v2391, v1894];
          const v2405 = stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, ctc11, v2404, ctc1),
            null
          );
          const v2406 = stdlib.fromSome(
            v2405,
            stdlib.checkedBigNumberify(
              "./index.rsh:128:40:decimal",
              "115792089237316195423570985008687907853269984665640564039457584007913129639935",
              "0"
            )
          );
          const v2414 = stdlib.safeSub256(v2401, v2393);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2391, ctc1, v2414);
          const v2415 = stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc3, v2392, ctc1),
            null
          );
          const v2416 = stdlib.fromSome(
            v2415,
            stdlib.checkedBigNumberify(
              "./index.rsh:123:40:decimal",
              "115792089237316195423570985008687907853269984665640564039457584007913129639935",
              "0"
            )
          );
          const v2417 = stdlib.safeAdd256(v2416, v2393);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2392, ctc1, v2417);
          null;
          const v2422 = stdlib.safeSub256(v2406, v2393);
          await stdlib.simMapSet(sim_r, 1, ctc11, v2404, ctc1, v2422);
          null;
          const v2424 = true;
          const v2425 = await txn1.getOutput(
            "arc200_transferFrom",
            "v2424",
            ctc4,
            v2424
          );

          const v5150 = v1684;
          const v5152 = v1688;
          const v5153 = v1684.closed;
          if (v5153) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      undefined /* setApiDetails */;
      const v2391 =
        v2328[
          stdlib.checkedBigNumberify(
            "./index.rsh:196:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2392 =
        v2328[
          stdlib.checkedBigNumberify(
            "./index.rsh:196:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      const v2393 =
        v2328[
          stdlib.checkedBigNumberify(
            "./index.rsh:196:10:spread",
            stdlib.UInt_max,
            "2"
          )
        ];
      const v2394 = stdlib.addressEq(v2391, v1656);
      const v2395 = v2394 ? false : true;
      stdlib.assert(v2395, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
        ],
        msg: "ARC200: Transfer from zero address",
        who: "arc200_transferFrom",
      });
      const v2397 = stdlib.addressEq(v2392, v1656);
      const v2398 = v2397 ? false : true;
      stdlib.assert(v2398, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
        ],
        msg: "ARC200: Transfer to zero address",
        who: "arc200_transferFrom",
      });
      const v2400 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc3, v2391, ctc1),
        null
      );
      const v2401 = stdlib.fromSome(
        v2400,
        stdlib.checkedBigNumberify(
          "./index.rsh:123:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2402 = stdlib.ge256(v2401, v2393);
      stdlib.assert(v2402, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:199:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
        ],
        msg: "ARC200: Amount must not be greater than balance",
        who: "arc200_transferFrom",
      });
      const v2404 = [v2391, v1894];
      const v2405 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, ctc11, v2404, ctc1),
        null
      );
      const v2406 = stdlib.fromSome(
        v2405,
        stdlib.checkedBigNumberify(
          "./index.rsh:128:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2407 = stdlib.ge256(v2406, v2393);
      stdlib.assert(v2407, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:203:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
        ],
        msg: "ARC200: Amount must not be greater than allowance",
        who: "arc200_transferFrom",
      });
      const v2414 = stdlib.safeSub256(v2401, v2393);
      await stdlib.mapSet(map0, ctc3, v2391, ctc1, v2414);
      const v2415 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc3, v2392, ctc1),
        null
      );
      const v2416 = stdlib.fromSome(
        v2415,
        stdlib.checkedBigNumberify(
          "./index.rsh:123:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2417 = stdlib.safeAdd256(v2416, v2393);
      await stdlib.mapSet(map0, ctc3, v2392, ctc1, v2417);
      null;
      const v2422 = stdlib.safeSub256(v2406, v2393);
      await stdlib.mapSet(map1, ctc11, v2404, ctc1, v2422);
      null;
      const v2424 = true;
      const v2425 = await txn1.getOutput(
        "arc200_transferFrom",
        "v2424",
        ctc4,
        v2424
      );
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v2328, v2425), {
          at: "./index.rsh:196:11:application",
          fs: [
            "at ./index.rsh:196:11:application call to [unknown function] (defined at: ./index.rsh:196:11:function exp)",
            'at ./index.rsh:213:12:application call to "k" (defined at: ./index.rsh:208:13:function exp)',
            "at ./index.rsh:208:13:application call to [unknown function] (defined at: ./index.rsh:208:13:function exp)",
          ],
          msg: "out",
          who: "arc200_transferFrom",
        });
      } else {
      }

      const v5150 = v1684;
      const v5152 = v1688;
      const v5153 = v1684.closed;
      if (v5153) {
        return;
      } else {
        return;
      }
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _deleteAllowanceBox3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _deleteAllowanceBox3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _deleteAllowanceBox3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1850 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:256:50:application call to [unknown function] (defined at: ./index.rsh:256:50:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteAllowanceBox0_289" (defined at: ./index.rsh:256:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "deleteAllowanceBox",
  });
  const v1851 =
    v1850[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1852 =
    v1850[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "1"
      )
    ];
  const v1855 = [v1851, v1852];
  const v1856 = stdlib.protect(
    map1_ctc,
    await stdlib.mapRef(map1, ctc10, v1855, ctc1),
    null
  );
  const v1857 = {
    None: 0,
    Some: 1,
  }[v1856[0]];
  const v1858 = stdlib.eq(
    v1857,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1858, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:257:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:256:50:application call to [unknown function] (defined at: ./index.rsh:256:50:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteAllowanceBox0_289" (defined at: ./index.rsh:256:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Allowance box not found",
    who: "deleteAllowanceBox",
  });
  const v1862 = stdlib.fromSome(
    v1856,
    stdlib.checkedBigNumberify(
      "./index.rsh:128:40:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  const v1863 = stdlib.eq256(
    v1862,
    stdlib.checkedBigNumberify(
      "./index.rsh:262:46:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  stdlib.assert(v1863, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:256:50:application call to [unknown function] (defined at: ./index.rsh:256:50:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteAllowanceBox0_289" (defined at: ./index.rsh:256:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Allowance box not empty",
    who: "deleteAllowanceBox",
  });
  const v1872 = ["deleteAllowanceBox0_289", v1850];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1872],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:256:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "deleteAllowanceBox",
          });
          const v2650 =
            v2543[
              stdlib.checkedBigNumberify(
                "./index.rsh:256:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v2651 =
            v2543[
              stdlib.checkedBigNumberify(
                "./index.rsh:256:10:spread",
                stdlib.UInt_max,
                "1"
              )
            ];
          const v2652 = [v2650, v2651];
          stdlib.protect(
            map1_ctc,
            await stdlib.simMapRef(sim_r, 1, ctc10, v2652, ctc1),
            null
          );
          await stdlib.simMapSet(
            sim_r,
            1,
            ctc10,
            v2652,
            ctc1,
            undefined /* Nothing */
          );
          null;
          const v2665 = null;
          const v2666 = await txn1.getOutput(
            "deleteAllowanceBox",
            "v2665",
            ctc0,
            v2665
          );

          const v5195 = v1684;
          const v5197 = v1688;
          const v5198 = v1684.closed;
          if (v5198) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      undefined /* setApiDetails */;
      const v2650 =
        v2543[
          stdlib.checkedBigNumberify(
            "./index.rsh:256:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2651 =
        v2543[
          stdlib.checkedBigNumberify(
            "./index.rsh:256:10:spread",
            stdlib.UInt_max,
            "1"
          )
        ];
      const v2652 = [v2650, v2651];
      const v2653 = stdlib.protect(
        map1_ctc,
        await stdlib.mapRef(map1, ctc10, v2652, ctc1),
        null
      );
      const v2654 = {
        None: 0,
        Some: 1,
      }[v2653[0]];
      const v2655 = stdlib.eq(
        v2654,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v2655, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:257:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)",
        ],
        msg: "ARC200: Allowance box not found",
        who: "deleteAllowanceBox",
      });
      const v2659 = stdlib.fromSome(
        v2653,
        stdlib.checkedBigNumberify(
          "./index.rsh:128:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2660 = stdlib.eq256(
        v2659,
        stdlib.checkedBigNumberify(
          "./index.rsh:262:46:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      stdlib.assert(v2660, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:261:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)",
        ],
        msg: "ARC200: Allowance box not empty",
        who: "deleteAllowanceBox",
      });
      await stdlib.mapSet(map1, ctc10, v2652, ctc1, undefined /* Nothing */);
      null;
      const v2665 = null;
      const v2666 = await txn1.getOutput(
        "deleteAllowanceBox",
        "v2665",
        ctc0,
        v2665
      );
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v2543, v2666), {
          at: "./index.rsh:256:11:application",
          fs: [
            "at ./index.rsh:256:11:application call to [unknown function] (defined at: ./index.rsh:256:11:function exp)",
            'at ./index.rsh:269:12:application call to "k" (defined at: ./index.rsh:266:13:function exp)',
            "at ./index.rsh:266:13:application call to [unknown function] (defined at: ./index.rsh:266:13:function exp)",
          ],
          msg: "out",
          who: "deleteAllowanceBox",
        });
      } else {
      }

      const v5195 = v1684;
      const v5197 = v1688;
      const v5198 = v1684.closed;
      if (v5198) {
        return;
      } else {
        return;
      }
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _deleteBalanceBox3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _deleteBalanceBox3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _deleteBalanceBox3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1827 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:239:38:application call to [unknown function] (defined at: ./index.rsh:239:38:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:239:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "deleteBalanceBox",
  });
  const v1828 =
    v1827[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1830 = stdlib.addressEq(v1828, v1656);
  const v1831 = v1830 ? false : true;
  stdlib.assert(v1831, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:239:38:application call to [unknown function] (defined at: ./index.rsh:239:38:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:239:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Delete balance box to zero address",
    who: "deleteBalanceBox",
  });
  const v1833 = stdlib.protect(
    map0_ctc,
    await stdlib.mapRef(map0, ctc3, v1828, ctc1),
    null
  );
  const v1834 = {
    None: 0,
    Some: 1,
  }[v1833[0]];
  const v1835 = stdlib.eq(
    v1834,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1835, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:239:38:application call to [unknown function] (defined at: ./index.rsh:239:38:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:239:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Balance box not found",
    who: "deleteBalanceBox",
  });
  const v1838 = stdlib.fromSome(
    v1833,
    stdlib.checkedBigNumberify(
      "./index.rsh:123:40:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  const v1839 = stdlib.eq256(
    v1838,
    stdlib.checkedBigNumberify(
      "./index.rsh:242:40:decimal",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    )
  );
  stdlib.assert(v1839, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:242:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:239:38:application call to [unknown function] (defined at: ./index.rsh:239:38:function exp)",
      'at ./index.rsh:119:29:application call to "rundeleteBalanceBox0_289" (defined at: ./index.rsh:239:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Balance box not empty",
    who: "deleteBalanceBox",
  });
  const v1846 = ["deleteBalanceBox0_289", v1827];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1846],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:239:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "deleteBalanceBox",
          });
          const v2890 =
            v2758[
              stdlib.checkedBigNumberify(
                "./index.rsh:239:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          stdlib.protect(
            map0_ctc,
            await stdlib.simMapRef(sim_r, 0, ctc3, v2890, ctc1),
            null
          );
          await stdlib.simMapSet(
            sim_r,
            0,
            ctc3,
            v2890,
            ctc1,
            undefined /* Nothing */
          );
          null;
          const v2903 = null;
          const v2904 = await txn1.getOutput(
            "deleteBalanceBox",
            "v2903",
            ctc0,
            v2903
          );

          const v5240 = v1684;
          const v5242 = v1688;
          const v5243 = v1684.closed;
          if (v5243) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      undefined /* setApiDetails */;
      const v2890 =
        v2758[
          stdlib.checkedBigNumberify(
            "./index.rsh:239:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v2891 = stdlib.addressEq(v2890, v1656);
      const v2892 = v2891 ? false : true;
      stdlib.assert(v2892, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
        ],
        msg: "ARC200: Delete balance box to zero address",
        who: "deleteBalanceBox",
      });
      const v2894 = stdlib.protect(
        map0_ctc,
        await stdlib.mapRef(map0, ctc3, v2890, ctc1),
        null
      );
      const v2895 = {
        None: 0,
        Some: 1,
      }[v2894[0]];
      const v2896 = stdlib.eq(
        v2895,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v2896, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:241:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
        ],
        msg: "ARC200: Balance box not found",
        who: "deleteBalanceBox",
      });
      const v2899 = stdlib.fromSome(
        v2894,
        stdlib.checkedBigNumberify(
          "./index.rsh:123:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      const v2900 = stdlib.eq256(
        v2899,
        stdlib.checkedBigNumberify(
          "./index.rsh:242:40:decimal",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        )
      );
      stdlib.assert(v2900, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:242:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
        ],
        msg: "ARC200: Balance box not empty",
        who: "deleteBalanceBox",
      });
      await stdlib.mapSet(map0, ctc3, v2890, ctc1, undefined /* Nothing */);
      null;
      const v2903 = null;
      const v2904 = await txn1.getOutput(
        "deleteBalanceBox",
        "v2903",
        ctc0,
        v2903
      );
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v2758, v2904), {
          at: "./index.rsh:239:11:application",
          fs: [
            "at ./index.rsh:239:11:application call to [unknown function] (defined at: ./index.rsh:239:11:function exp)",
            'at ./index.rsh:247:12:application call to "k" (defined at: ./index.rsh:244:13:function exp)',
            "at ./index.rsh:244:13:application call to [unknown function] (defined at: ./index.rsh:244:13:function exp)",
          ],
          msg: "out",
          who: "deleteBalanceBox",
        });
      } else {
      }

      const v5240 = v1684;
      const v5242 = v1688;
      const v5243 = v1684.closed;
      if (v5243) {
        return;
      } else {
        return;
      }
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _destroy3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _destroy3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _destroy3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1876 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:279:25:application call to [unknown function] (defined at: ./index.rsh:279:25:function exp)",
      'at ./index.rsh:119:29:application call to "rundestroy0_289" (defined at: ./index.rsh:279:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "destroy",
  });
  const v1877 = [
    "Some",
    stdlib.checkedBigNumberify(
      "<builtin>",
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
      "0"
    ),
  ];
  const v1878 = {
    None: 0,
    Some: 1,
  }[v1877[0]];
  const v1879 = stdlib.eq(
    v1878,
    stdlib.checkedBigNumberify(
      "reach standard library:38:41:application",
      stdlib.UInt_max,
      "1"
    )
  );
  stdlib.assert(v1879, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:280:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:279:25:application call to [unknown function] (defined at: ./index.rsh:279:25:function exp)",
      'at ./index.rsh:119:29:application call to "rundestroy0_289" (defined at: ./index.rsh:279:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Zero address balance box not found",
    who: "destroy",
  });
  const v1884 = ["destroy0_289", v1876];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1884],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:279:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "destroy",
          });
          await stdlib.simMapSet(
            sim_r,
            0,
            ctc3,
            v1656,
            ctc1,
            undefined /* Nothing */
          );
          null;
          const v3131 = null;
          const v3132 = await txn1.getOutput("destroy", "v3131", ctc0, v3131);

          const v3138 = v1684.decimals;
          const v3139 = v1684.enableZeroAddressBurn;
          const v3140 = v1684.manager;
          const v3141 = v1684.name;
          const v3142 = v1684.symbol;
          const v3143 = v1684.totalSupply;
          const v3144 = v1684.zeroAddress;
          const v3145 = {
            closed: true,
            decimals: v3138,
            enableZeroAddressBurn: v3139,
            manager: v3140,
            name: v3141,
            symbol: v3142,
            totalSupply: v3143,
            zeroAddress: v3144,
          };
          const v5285 = v3145;
          const v5287 = v1688;
          const v5288 = v3145.closed;
          if (v5288) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      undefined /* setApiDetails */;
      const v3127 = [
        "Some",
        stdlib.checkedBigNumberify(
          "<builtin>",
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
          "0"
        ),
      ];
      const v3128 = {
        None: 0,
        Some: 1,
      }[v3127[0]];
      const v3129 = stdlib.eq(
        v3128,
        stdlib.checkedBigNumberify(
          "reach standard library:38:41:application",
          stdlib.UInt_max,
          "1"
        )
      );
      stdlib.assert(v3129, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:280:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)",
        ],
        msg: "ARC200: Zero address balance box not found",
        who: "destroy",
      });
      await stdlib.mapSet(map0, ctc3, v1656, ctc1, undefined /* Nothing */);
      null;
      const v3131 = null;
      const v3132 = await txn1.getOutput("destroy", "v3131", ctc0, v3131);
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v2973, v3132), {
          at: "./index.rsh:279:11:application",
          fs: [
            "at ./index.rsh:279:11:application call to [unknown function] (defined at: ./index.rsh:279:11:function exp)",
            'at ./index.rsh:288:12:application call to "k" (defined at: ./index.rsh:285:13:function exp)',
            "at ./index.rsh:285:13:application call to [unknown function] (defined at: ./index.rsh:285:13:function exp)",
          ],
          msg: "out",
          who: "destroy",
        });
      } else {
      }

      const v3138 = v1684.decimals;
      const v3139 = v1684.enableZeroAddressBurn;
      const v3140 = v1684.manager;
      const v3141 = v1684.name;
      const v3142 = v1684.symbol;
      const v3143 = v1684.totalSupply;
      const v3144 = v1684.zeroAddress;
      const v3145 = {
        closed: true,
        decimals: v3138,
        enableZeroAddressBurn: v3139,
        manager: v3140,
        name: v3141,
        symbol: v3142,
        totalSupply: v3143,
        zeroAddress: v3144,
      };
      const v5285 = v3145;
      const v5287 = v1688;
      const v5288 = v3145.closed;
      if (v5288) {
        return;
      } else {
        return;
      }
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _grant3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _grant3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _grant3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc14,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1731 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:163:27:application call to [unknown function] (defined at: ./index.rsh:163:27:function exp)",
      'at ./index.rsh:119:29:application call to "rungrant0_289" (defined at: ./index.rsh:163:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "grant",
  });
  const v1732 =
    v1731[
      stdlib.checkedBigNumberify(
        "./index.rsh:1:23:application",
        stdlib.UInt_max,
        "0"
      )
    ];
  const v1734 = stdlib.addressEq(v1732, v1656);
  const v1735 = v1734 ? false : true;
  stdlib.assert(v1735, {
    at: "reach standard library:57:5:application",
    fs: [
      'at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      "at ./index.rsh:163:27:application call to [unknown function] (defined at: ./index.rsh:163:27:function exp)",
      'at ./index.rsh:119:29:application call to "rungrant0_289" (defined at: ./index.rsh:163:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "ARC200: Grant zero address",
    who: "grant",
  });
  const v1742 = ["grant0_289", v1731];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1742],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:163:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "grant",
          });
          const v3364 =
            v3188[
              stdlib.checkedBigNumberify(
                "./index.rsh:163:10:spread",
                stdlib.UInt_max,
                "0"
              )
            ];
          const v3369 = null;
          const v3370 = await txn1.getOutput("grant", "v3369", ctc0, v3369);

          const v3376 = v1684.closed;
          const v3377 = v1684.decimals;
          const v3378 = v1684.enableZeroAddressBurn;
          const v3380 = v1684.name;
          const v3381 = v1684.symbol;
          const v3382 = v1684.totalSupply;
          const v3383 = v1684.zeroAddress;
          const v3384 = {
            closed: v3376,
            decimals: v3377,
            enableZeroAddressBurn: v3378,
            manager: v3364,
            name: v3380,
            symbol: v3381,
            totalSupply: v3382,
            zeroAddress: v3383,
          };
          const v5330 = v3384;
          const v5332 = v1688;
          const v5333 = v3384.closed;
          if (v5333) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      undefined /* setApiDetails */;
      const v3364 =
        v3188[
          stdlib.checkedBigNumberify(
            "./index.rsh:163:10:spread",
            stdlib.UInt_max,
            "0"
          )
        ];
      const v3365 = stdlib.addressEq(v3364, v1656);
      const v3366 = v3365 ? false : true;
      stdlib.assert(v3366, {
        at: "reach standard library:57:5:application",
        fs: [
          'at ./index.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          "at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)",
        ],
        msg: "ARC200: Grant zero address",
        who: "grant",
      });
      const v3369 = null;
      const v3370 = await txn1.getOutput("grant", "v3369", ctc0, v3369);
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v3188, v3370), {
          at: "./index.rsh:163:11:application",
          fs: [
            "at ./index.rsh:163:11:application call to [unknown function] (defined at: ./index.rsh:163:11:function exp)",
            'at ./index.rsh:167:12:application call to "k" (defined at: ./index.rsh:166:13:function exp)',
            "at ./index.rsh:166:13:application call to [unknown function] (defined at: ./index.rsh:166:13:function exp)",
          ],
          msg: "out",
          who: "grant",
        });
      } else {
      }

      const v3376 = v1684.closed;
      const v3377 = v1684.decimals;
      const v3378 = v1684.enableZeroAddressBurn;
      const v3380 = v1684.name;
      const v3381 = v1684.symbol;
      const v3382 = v1684.totalSupply;
      const v3383 = v1684.zeroAddress;
      const v3384 = {
        closed: v3376,
        decimals: v3377,
        enableZeroAddressBurn: v3378,
        manager: v3364,
        name: v3380,
        symbol: v3381,
        totalSupply: v3382,
        zeroAddress: v3383,
      };
      const v5330 = v3384;
      const v5332 = v1688;
      const v5333 = v3384.closed;
      if (v5333) {
        return;
      } else {
        return;
      }
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      return;
      break;
    }
  }
}
export async function _touch3(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _touch3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for _touch3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1,
  });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "32")
  );
  const ctc7 = stdlib.T_Bytes(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "8")
  );
  const ctc8 = stdlib.T_Object({
    decimals: ctc5,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
  });
  const ctc9 = stdlib.T_Object({
    closed: ctc4,
    decimals: ctc5,
    enableZeroAddressBurn: ctc4,
    manager: ctc3,
    name: ctc6,
    symbol: ctc7,
    totalSupply: ctc1,
    zeroAddress: ctc3,
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
    touch0_289: ctc10,
  });

  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
  });

  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
  });

  const [v1656, v1658, v1659, v1665, v1668, v1684, v1688] = await ctc.getState(
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3"),
    [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5]
  );
  const v1723 = stdlib.protect(ctc10, await interact.in(), {
    at: "./index.rsh:1:23:application",
    fs: [
      "at ./index.rsh:150:23:application call to [unknown function] (defined at: ./index.rsh:150:23:function exp)",
      'at ./index.rsh:119:29:application call to "runtouch0_289" (defined at: ./index.rsh:150:10:function exp)',
      "at ./index.rsh:119:29:application call to [unknown function] (defined at: ./index.rsh:119:29:function exp)",
    ],
    msg: "in",
    who: "touch",
  });
  const v1727 = ["touch0_289", v1723];

  const txn1 = await ctc.sendrecv({
    args: [v1656, v1658, v1659, v1665, v1668, v1684, v1688, v1727],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "0"),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [
      stdlib.checkedBigNumberify(
        "./index.rsh:150:10:decimal",
        stdlib.UInt_max,
        "0"
      ),
      [],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);

      const {
        data: [v1895],
        secs: v1897,
        time: v1896,
        didSend: v1131,
        from: v1894,
      } = txn1;

      switch (v1895[0]) {
        case "arc200_approve0_289": {
          const v1898 = v1895[1];

          break;
        }
        case "arc200_transfer0_289": {
          const v2113 = v1895[1];

          break;
        }
        case "arc200_transferFrom0_289": {
          const v2328 = v1895[1];

          break;
        }
        case "deleteAllowanceBox0_289": {
          const v2543 = v1895[1];

          break;
        }
        case "deleteBalanceBox0_289": {
          const v2758 = v1895[1];

          break;
        }
        case "destroy0_289": {
          const v2973 = v1895[1];

          break;
        }
        case "grant0_289": {
          const v3188 = v1895[1];

          break;
        }
        case "touch0_289": {
          const v3403 = v1895[1];
          sim_r.txns.push({
            kind: "api",
            who: "touch",
          });
          const v3604 = stdlib.le(await ctc.getBalance(), v1688)
            ? stdlib.checkedBigNumberify(
                "./index.rsh:153:39:application",
                stdlib.UInt_max,
                "0"
              )
            : stdlib.safeSub(await ctc.getBalance(), v1688);
          const v3605 = stdlib.safeAdd(v3604, v1688);
          const v3606 = v1684.manager;
          const v3610 = stdlib.sub(v3605, v3604);
          sim_r.txns.push({
            kind: "from",
            to: v3606,
            tok: undefined /* Nothing */,
          });
          const v3611 = null;
          const v3612 = await txn1.getOutput("touch", "v3611", ctc0, v3611);

          const v5375 = v1684;
          const v5377 = v3610;
          const v5378 = v1684.closed;
          if (v5378) {
            sim_r.txns.push({
              kind: "halt",
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          } else {
            sim_r.isHalt = false;
          }
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc1, ctc5, ctc9, ctc5, ctc15],
    waitIfNotPresent: false,
  });
  const {
    data: [v1895],
    secs: v1897,
    time: v1896,
    didSend: v1131,
    from: v1894,
  } = txn1;
  switch (v1895[0]) {
    case "arc200_approve0_289": {
      const v1898 = v1895[1];
      return;
      break;
    }
    case "arc200_transfer0_289": {
      const v2113 = v1895[1];
      return;
      break;
    }
    case "arc200_transferFrom0_289": {
      const v2328 = v1895[1];
      return;
      break;
    }
    case "deleteAllowanceBox0_289": {
      const v2543 = v1895[1];
      return;
      break;
    }
    case "deleteBalanceBox0_289": {
      const v2758 = v1895[1];
      return;
      break;
    }
    case "destroy0_289": {
      const v2973 = v1895[1];
      return;
      break;
    }
    case "grant0_289": {
      const v3188 = v1895[1];
      return;
      break;
    }
    case "touch0_289": {
      const v3403 = v1895[1];
      undefined /* setApiDetails */;
      const v3604 = stdlib.le(await ctc.getBalance(), v1688)
        ? stdlib.checkedBigNumberify(
            "./index.rsh:153:39:application",
            stdlib.UInt_max,
            "0"
          )
        : stdlib.safeSub(await ctc.getBalance(), v1688);
      const v3605 = stdlib.safeAdd(v3604, v1688);
      const v3606 = v1684.manager;
      const v3610 = stdlib.sub(v3605, v3604);
      const v3611 = null;
      const v3612 = await txn1.getOutput("touch", "v3611", ctc0, v3611);
      if (v1131) {
        stdlib.protect(ctc0, await interact.out(v3403, v3612), {
          at: "./index.rsh:150:11:application",
          fs: [
            "at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)",
            'at ./index.rsh:155:12:application call to "k" (defined at: ./index.rsh:152:13:function exp)',
            "at ./index.rsh:152:13:application call to [unknown function] (defined at: ./index.rsh:152:13:function exp)",
          ],
          msg: "out",
          who: "touch",
        });
      } else {
      }

      const v5375 = v1684;
      const v5377 = v3610;
      const v5378 = v1684.closed;
      if (v5378) {
        return;
      } else {
        return;
      }
      break;
    }
  }
}
export async function arc200_approve(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for arc200_approve expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for arc200_approve expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _arc200_approve3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function arc200_transfer(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for arc200_transfer expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for arc200_transfer expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _arc200_transfer3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function arc200_transferFrom(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for arc200_transferFrom expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for arc200_transferFrom expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _arc200_transferFrom3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function deleteAllowanceBox(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for deleteAllowanceBox expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for deleteAllowanceBox expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _deleteAllowanceBox3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function deleteBalanceBox(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for deleteBalanceBox expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for deleteBalanceBox expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _deleteBalanceBox3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function destroy(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for destroy expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for destroy expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _destroy3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function grant(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for grant expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for grant expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _grant3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
export async function touch(ctcTop, interact) {
  if (typeof ctcTop !== "object" || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for touch expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== "object") {
    return Promise.reject(
      new Error(
        `The backend for touch expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _touch3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, "3")],
    stdlib.checkedBigNumberify("<builtin>", stdlib.UInt_max, step)
  );
}
const _ALGO = {
  ABI: {
    impure: [
      `_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`,
      `_reachp_2((uint64,(byte,byte[96])))void`,
      `arc200_approve(address,uint256)byte`,
      `arc200_transfer(address,uint256)byte`,
      `arc200_transferFrom(address,address,uint256)byte`,
      `deleteAllowanceBox(address,address)void`,
      `deleteBalanceBox(address)void`,
      `destroy()void`,
      `grant(address)void`,
      `touch()void`,
    ],
    pure: [
      `arc200_allowance(address,address)uint256`,
      `arc200_balanceOf(address)uint256`,
      `arc200_decimals()uint64`,
      `arc200_name()byte[32]`,
      `arc200_symbol()byte[8]`,
      `arc200_totalSupply()uint256`,
      `hasAllowance(address,address)byte`,
      `hasBalance(address)byte`,
      `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`,
    ],
    sigs: [
      `_reachp_0((uint64,address,address,byte,(uint64,byte[32],byte[8],uint256)))void`,
      `_reachp_2((uint64,(byte,byte[96])))void`,
      `arc200_allowance(address,address)uint256`,
      `arc200_approve(address,uint256)byte`,
      `arc200_balanceOf(address)uint256`,
      `arc200_decimals()uint64`,
      `arc200_name()byte[32]`,
      `arc200_symbol()byte[8]`,
      `arc200_totalSupply()uint256`,
      `arc200_transfer(address,uint256)byte`,
      `arc200_transferFrom(address,address,uint256)byte`,
      `deleteAllowanceBox(address,address)void`,
      `deleteBalanceBox(address)void`,
      `destroy()void`,
      `grant(address)void`,
      `hasAllowance(address,address)byte`,
      `hasBalance(address)byte`,
      `state()(byte[32],byte[8],uint64,uint256,address,address,byte,byte)`,
      `touch()void`,
    ],
  },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAHAAED1N4BCMTbAUAmBwEAAAgAAAAAAAAAAQEBAQIEeYPDXAQZafhlMRhBB7spZEkiWzUBIQRbNQIoZCtkUCcEZFCCEwQEuq/QBLVCISUEV2Dl+gSE7BPVBGV9E+wEakO2BQR59bCNBILlc8QEnIahhQS2rholBLuzGfMEvDwVbwTLOkyRBEqWj48E4z2AUgTorFe4BOyZYEEE2nAluQT8MLakNhoAjhMHvwdyB7IHhweKBv0Hygd/B8cHjQdlBw8H0geTCE8H3weQB6UITAA0C1cAIDUNNAtXICA1DDEANBUTRDQNNBUTRCEFKjEANA1QUAE0DIgImicGMQBQNA1QNAxQsCM1C4AIAAAAAAAAB4I0CxZRBwhQsDQLgQeQFlEHCDUEMgY1DzQQVwABF0EHmjEZgQUSRIgIiSIyCjIJiAiXNANAAAqABBUffHU0BFCwI0M0C1cAIDUNNAtXICA1DDQUNA00FRMRRDIDKTIDKDEAUIgH24gIEEk1CzQMp0QlKDEAUDQLNAyhiAgTiAgCJSg0DVAyAykyAyg0DVCIB7CIB+U0DKCIB/aIB+UnBTEAUDQNUDQMULAjNQuACAAAAAAAAAh2NAsWUQcIULA0C4EHkBZRBwg1BDIGNQ9C/0g0C1cAIDUWNAtXICA1DTQLV0AgNQw0FjQVE0Q0DTQVE0QyAykyAyg0FlCIB0SIB3lJNRg0DKdENBYxAFA1FzIDKTIDKjQXUAGIByaIB1tJNQs0DKdEJSg0FlA0GDQMoYgHXogHTSUoNA1QMgMpMgMoNA1QiAb7iAcwNAygiAdBiAcwJwU0FlA0DVA0DFCwNAs0DKGIByo1DSEFKjQXUAE0DYgHDicGNBZQMQBQNA1QsCM1C4AIAAAAAAAACXg0CxZRBwhQsDQLgQeQFlEHCDUEMgY1D0L+cTQLVwAgNQ00C1cgIDUMNA00DFA1FikyAyo0FlABiAZ6STULIlUjEkQyAzQLiAajMgOoRCEFKjQWUAGIBraABC6u9Ek0DVA0DFCwKTULgAgAAAAAAAAKaTQLULA0CzUEMgY1D0L+CzQNVwEgSTULNBUTRCkyAyg0C1CIBh5JNQwiVSMSRDIDNAyIBkcyA6hEJSg0C1CIBlyABJRHbEo0C1CwKTULgAgAAAAAAAALVzQLULA0CzUEMgY1D0L9tIAhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIlUjEkQlKDQVUIgGBoAETG2m8rApNQuACAAAAAAAAAw7NAtQsDQLNQQrNBBXAQhQNBBXCQFQNBBXCiBQNBBXKiBQNBBXSghQNBBXUiBQNBBXciBQMgY1DzUQQv00NA1XASBJNQs0FRNEKTUMgAgAAAAAAAANKTQMULA0DDUENBBXAAE0EFcBCFA0EFcJAVA0C1A0EFcqIFA0EFdKCFA0EFdSIFA0EFdyIFAyBjUPNRBC/N4yCmAyCngJNA4JSTUMNBBXCiCIBXYpNQuACAAAAAAAAA4bNAtQsDQLNQQyBjQMNA4INAwJNQ41D0L8ozQBJBJEiATPMgMpMgMqNAw0C1BQAYgEtIgE6TUEMRkiEkRC/J0hBK8oNAw0C1BQMgNQUDULJDQBEkSIBJo0CyJbNQw0C1cIYTUNgATZHk3aNAwWUDQNULA0DIgE1zQNIlWNCAQEBA4EGAO9A8cDygPNA9BC+9M0ASQSRIgEWTIDKTIDKDQLUIgEQogEdzUEQv+LNAEkEkSIBD00ERZXBwA1BEL/eDQBJBJEiAQqNBNXCCA1BEL/ZjQBJBJEiAQYNBNXKAg1BEL/VDQBJBJEiAQGNBI1BEL/RSEErys0DDQLUFAyA1BQNQtC/0ohBK8nBDQNNAxQNAtQUFA1C0L/NiEEr4ABAzQMNAtQUDIDUFA1C0L/ISEEr4ABBDQLUCEGr1BQNQtC/w6AaQAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv6eIQSvgAEGNAtQIQavUFA1C0L+izQBJBJEiAMlKTIDKjQMNAtQUAGIAwwiVSMSFlEHCDUEQv5QNAEkEkSIAwIpMgMoNAtQiALtIlUjEhZRBwg1BEL+MTQBJBJEiALjNBBXKiA0EFdKCFA0EFcBCFA0EFdSIFA0EFdyIFA0EFcKIFA0EFcJAVA0EFcAAVA1BEL99YBpAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/Z00DCJbNQ00DFcIIDUVNAxXKCA1CzQMV0gBFzUUNAxXSVA1E4AE5Ep7MjQNFlA0FVA0C1A0FBZRBwhQNBNQsDQNiAJZNBU0CxNENBNXMCBJNRIyA6VENBMiW0k1EYGAAg5EJSg0C1A0EogCCiUoNBVQMgOIAgAnBTQVUDQLUDQSULAoNBEWUDQUFlEHCFA0C1A0E1cIIFA0E1coCFA0ElA0FVAyBiI1DjUPNRBC+V2IAeeBoI0GiAH6NhoBNQxC/0CIAdU2GgE1C0L80iIxNBJEgQQxNRJEIjE2EkQiMTcSRIgBtYGzAq8iIjUCNQEoSwFXAH9nK0sBV39/ZycETFf+NWcpNAEWNAIWUGcxGSISRIgBk0L5DzYaATYaAjULNQxC/EU2GgE2GgI1CzUMQvxdNhoBNQtC/KZC/L9C/M9C/N5C/O02GgE2GgI2GgM1CzUMNQ1C/P02GgE2GgI1CzUMQvzdNhoBNhoCNQs1DEL89zYaATULQv0EQv0UNhoBNQtC/Xw2GgE2GgI1CzUMQv2CNhoBNQtC/Z00DVcBQDULQvn4QvpbQvqvQvssQvt/NBU0FBZRBwhQNBNQNBJQNBEWUDQQUDQOFlAkMgZC/xtITL9IiSKyASOyELIHsgiziTQNVwFANQtC98k0DVcBQDULQvhDNA1XAWA1C0L4xkL9VEL9jUiJTAlJNQYyCYgAqYkJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgORIm+SRZRBwhFBE1QiUlXACA1FUlXIAEXNRRJVyFQNRNJV3EgNRJJgZEBWzURSVeZkjUQgasCWzUOiUlXAQBMIlVNiUxJvUD/U0sDiAAyQv9LSRWBIEwJr0xQibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/1ZC/140Bgg1BomxQv8XsbIJQv8R`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `513`,
    1001: `513`,
    1002: `514`,
    1003: `514`,
    1004: `514`,
    1005: `516`,
    1006: `516`,
    1007: `517`,
    1008: `517`,
    1009: `517`,
    101: `24`,
    1010: `518`,
    1011: `519`,
    1012: `519`,
    1013: `520`,
    1014: `520`,
    1015: `521`,
    1016: `522`,
    1017: `527`,
    1018: `528`,
    1019: `528`,
    102: `24`,
    1020: `529`,
    1021: `529`,
    1022: `529`,
    1023: `529`,
    1024: `529`,
    1025: `529`,
    1026: `529`,
    1027: `529`,
    1028: `529`,
    1029: `529`,
    103: `24`,
    1030: `530`,
    1031: `530`,
    1032: `531`,
    1033: `532`,
    1034: `533`,
    1035: `533`,
    1036: `534`,
    1037: `534`,
    1038: `535`,
    1039: `535`,
    104: `24`,
    1040: `536`,
    1041: `536`,
    1042: `536`,
    1043: `537`,
    1044: `537`,
    1045: `538`,
    1046: `538`,
    1047: `538`,
    1048: `539`,
    1049: `540`,
    105: `24`,
    1050: `540`,
    1051: `541`,
    1052: `541`,
    1053: `541`,
    1054: `542`,
    1055: `543`,
    1056: `543`,
    1057: `544`,
    1058: `545`,
    1059: `545`,
    106: `24`,
    1060: `546`,
    1061: `546`,
    1062: `546`,
    1063: `547`,
    1064: `548`,
    1065: `548`,
    1066: `549`,
    1067: `549`,
    1068: `549`,
    1069: `550`,
    107: `24`,
    1070: `551`,
    1071: `551`,
    1072: `552`,
    1073: `552`,
    1074: `552`,
    1075: `553`,
    1076: `554`,
    1077: `554`,
    1078: `555`,
    1079: `555`,
    108: `24`,
    1080: `555`,
    1081: `556`,
    1082: `557`,
    1083: `557`,
    1084: `558`,
    1085: `558`,
    1086: `559`,
    1087: `559`,
    1088: `560`,
    1089: `560`,
    109: `24`,
    1090: `560`,
    1091: `562`,
    1092: `562`,
    1093: `563`,
    1094: `564`,
    1095: `564`,
    1096: `565`,
    1097: `566`,
    1098: `567`,
    1099: `567`,
    11: `2`,
    110: `24`,
    1100: `568`,
    1101: `570`,
    1102: `571`,
    1103: `571`,
    1104: `573`,
    1105: `573`,
    1106: `574`,
    1107: `574`,
    1108: `574`,
    1109: `575`,
    111: `24`,
    1110: `575`,
    1111: `575`,
    1112: `576`,
    1113: `577`,
    1114: `577`,
    1115: `578`,
    1116: `578`,
    1117: `578`,
    1118: `578`,
    1119: `578`,
    112: `24`,
    1120: `578`,
    1121: `578`,
    1122: `578`,
    1123: `578`,
    1124: `578`,
    1125: `579`,
    1126: `579`,
    1127: `580`,
    1128: `581`,
    1129: `582`,
    113: `24`,
    1130: `582`,
    1131: `583`,
    1132: `583`,
    1133: `584`,
    1134: `584`,
    1135: `585`,
    1136: `585`,
    1137: `586`,
    1138: `586`,
    1139: `587`,
    114: `24`,
    1140: `588`,
    1141: `588`,
    1142: `589`,
    1143: `590`,
    1144: `590`,
    1145: `591`,
    1146: `591`,
    1147: `592`,
    1148: `592`,
    1149: `592`,
    115: `24`,
    1150: `594`,
    1151: `594`,
    1152: `595`,
    1153: `596`,
    1154: `597`,
    1155: `600`,
    1156: `600`,
    1157: `600`,
    1158: `601`,
    1159: `601`,
    116: `24`,
    1160: `603`,
    1161: `604`,
    1162: `604`,
    1163: `605`,
    1164: `606`,
    1165: `606`,
    1166: `607`,
    1167: `607`,
    1168: `608`,
    1169: `609`,
    117: `24`,
    1170: `610`,
    1171: `611`,
    1172: `611`,
    1173: `611`,
    1174: `612`,
    1175: `612`,
    1176: `612`,
    1177: `613`,
    1178: `613`,
    1179: `615`,
    118: `24`,
    1180: `615`,
    1181: `616`,
    1182: `617`,
    1183: `618`,
    1184: `620`,
    1185: `620`,
    1186: `620`,
    1187: `622`,
    1188: `622`,
    1189: `623`,
    119: `24`,
    1190: `624`,
    1191: `625`,
    1192: `625`,
    1193: `626`,
    1194: `626`,
    1195: `627`,
    1196: `628`,
    1197: `629`,
    1198: `629`,
    1199: `630`,
    12: `2`,
    120: `24`,
    1200: `631`,
    1201: `632`,
    1202: `632`,
    1203: `634`,
    1204: `635`,
    1205: `635`,
    1206: `636`,
    1207: `637`,
    1208: `638`,
    1209: `638`,
    121: `24`,
    1210: `638`,
    1211: `639`,
    1212: `639`,
    1213: `640`,
    1214: `641`,
    1215: `642`,
    1216: `642`,
    1217: `643`,
    1218: `643`,
    1219: `644`,
    122: `24`,
    1220: `644`,
    1221: `644`,
    1222: `645`,
    1223: `645`,
    1224: `646`,
    1225: `646`,
    1226: `646`,
    1227: `646`,
    1228: `646`,
    1229: `646`,
    123: `24`,
    1230: `647`,
    1231: `647`,
    1232: `648`,
    1233: `649`,
    1234: `650`,
    1235: `650`,
    1236: `651`,
    1237: `652`,
    1238: `654`,
    1239: `654`,
    124: `24`,
    1240: `655`,
    1241: `655`,
    1242: `655`,
    1243: `656`,
    1244: `656`,
    1245: `657`,
    1246: `658`,
    1247: `659`,
    1248: `659`,
    1249: `659`,
    125: `24`,
    1250: `659`,
    1251: `659`,
    1252: `659`,
    1253: `659`,
    1254: `659`,
    1255: `659`,
    1256: `659`,
    1257: `659`,
    1258: `659`,
    1259: `659`,
    126: `24`,
    1260: `659`,
    1261: `659`,
    1262: `659`,
    1263: `659`,
    1264: `659`,
    1265: `660`,
    1266: `660`,
    1267: `660`,
    1268: `662`,
    1269: `662`,
    127: `24`,
    1270: `663`,
    1271: `664`,
    1272: `665`,
    1273: `668`,
    1274: `668`,
    1275: `668`,
    1276: `669`,
    1277: `669`,
    1278: `671`,
    1279: `672`,
    128: `24`,
    1280: `672`,
    1281: `673`,
    1282: `674`,
    1283: `674`,
    1284: `675`,
    1285: `676`,
    1286: `676`,
    1287: `676`,
    1288: `677`,
    1289: `677`,
    129: `24`,
    1290: `677`,
    1291: `678`,
    1292: `678`,
    1293: `679`,
    1294: `679`,
    1295: `679`,
    1296: `681`,
    1297: `681`,
    1298: `682`,
    1299: `683`,
    13: `2`,
    130: `24`,
    1300: `684`,
    1301: `687`,
    1302: `687`,
    1303: `687`,
    1304: `688`,
    1305: `688`,
    1306: `689`,
    1307: `690`,
    1308: `690`,
    1309: `691`,
    131: `24`,
    1310: `691`,
    1311: `691`,
    1312: `693`,
    1313: `693`,
    1314: `694`,
    1315: `695`,
    1316: `696`,
    1317: `699`,
    1318: `699`,
    1319: `699`,
    132: `24`,
    1320: `700`,
    1321: `700`,
    1322: `701`,
    1323: `701`,
    1324: `701`,
    1325: `702`,
    1326: `702`,
    1327: `703`,
    1328: `703`,
    1329: `703`,
    133: `24`,
    1330: `705`,
    1331: `705`,
    1332: `706`,
    1333: `707`,
    1334: `708`,
    1335: `711`,
    1336: `711`,
    1337: `711`,
    1338: `712`,
    1339: `712`,
    134: `24`,
    1340: `713`,
    1341: `713`,
    1342: `713`,
    1343: `714`,
    1344: `714`,
    1345: `715`,
    1346: `715`,
    1347: `715`,
    1348: `717`,
    1349: `717`,
    135: `24`,
    1350: `718`,
    1351: `719`,
    1352: `720`,
    1353: `723`,
    1354: `723`,
    1355: `723`,
    1356: `724`,
    1357: `724`,
    1358: `725`,
    1359: `725`,
    136: `24`,
    1360: `726`,
    1361: `726`,
    1362: `726`,
    1363: `728`,
    1364: `728`,
    1365: `729`,
    1366: `730`,
    1367: `731`,
    1368: `731`,
    1369: `732`,
    137: `24`,
    1370: `732`,
    1371: `733`,
    1372: `734`,
    1373: `735`,
    1374: `735`,
    1375: `736`,
    1376: `737`,
    1377: `738`,
    1378: `738`,
    1379: `739`,
    138: `24`,
    1380: `739`,
    1381: `739`,
    1382: `741`,
    1383: `741`,
    1384: `742`,
    1385: `743`,
    1386: `743`,
    1387: `744`,
    1388: `744`,
    1389: `745`,
    139: `24`,
    1390: `745`,
    1391: `746`,
    1392: `747`,
    1393: `747`,
    1394: `748`,
    1395: `749`,
    1396: `750`,
    1397: `751`,
    1398: `751`,
    1399: `752`,
    14: `2`,
    140: `24`,
    1400: `752`,
    1401: `752`,
    1402: `754`,
    1403: `754`,
    1404: `755`,
    1405: `756`,
    1406: `756`,
    1407: `756`,
    1408: `757`,
    1409: `757`,
    141: `24`,
    1410: `758`,
    1411: `758`,
    1412: `759`,
    1413: `760`,
    1414: `761`,
    1415: `761`,
    1416: `762`,
    1417: `763`,
    1418: `764`,
    1419: `764`,
    142: `24`,
    1420: `765`,
    1421: `765`,
    1422: `765`,
    1423: `767`,
    1424: `767`,
    1425: `768`,
    1426: `769`,
    1427: `769`,
    1428: `769`,
    1429: `770`,
    143: `24`,
    1430: `770`,
    1431: `771`,
    1432: `772`,
    1433: `772`,
    1434: `773`,
    1435: `774`,
    1436: `775`,
    1437: `776`,
    1438: `776`,
    1439: `777`,
    144: `24`,
    1440: `777`,
    1441: `777`,
    1442: `779`,
    1443: `779`,
    1444: `779`,
    1445: `779`,
    1446: `779`,
    1447: `779`,
    1448: `779`,
    1449: `779`,
    145: `24`,
    1450: `779`,
    1451: `779`,
    1452: `779`,
    1453: `779`,
    1454: `779`,
    1455: `779`,
    1456: `779`,
    1457: `779`,
    1458: `779`,
    1459: `779`,
    146: `24`,
    1460: `779`,
    1461: `779`,
    1462: `779`,
    1463: `779`,
    1464: `779`,
    1465: `779`,
    1466: `779`,
    1467: `779`,
    1468: `779`,
    1469: `779`,
    147: `24`,
    1470: `779`,
    1471: `779`,
    1472: `779`,
    1473: `779`,
    1474: `779`,
    1475: `779`,
    1476: `779`,
    1477: `779`,
    1478: `779`,
    1479: `779`,
    148: `24`,
    1480: `779`,
    1481: `779`,
    1482: `779`,
    1483: `779`,
    1484: `779`,
    1485: `779`,
    1486: `779`,
    1487: `779`,
    1488: `779`,
    1489: `779`,
    149: `24`,
    1490: `779`,
    1491: `779`,
    1492: `779`,
    1493: `779`,
    1494: `779`,
    1495: `779`,
    1496: `779`,
    1497: `779`,
    1498: `779`,
    1499: `779`,
    15: `2`,
    150: `24`,
    1500: `779`,
    1501: `779`,
    1502: `779`,
    1503: `779`,
    1504: `779`,
    1505: `779`,
    1506: `779`,
    1507: `779`,
    1508: `779`,
    1509: `779`,
    151: `24`,
    1510: `779`,
    1511: `779`,
    1512: `779`,
    1513: `779`,
    1514: `779`,
    1515: `779`,
    1516: `779`,
    1517: `779`,
    1518: `779`,
    1519: `779`,
    152: `24`,
    1520: `779`,
    1521: `779`,
    1522: `779`,
    1523: `779`,
    1524: `779`,
    1525: `779`,
    1526: `779`,
    1527: `779`,
    1528: `779`,
    1529: `779`,
    153: `24`,
    1530: `779`,
    1531: `779`,
    1532: `779`,
    1533: `779`,
    1534: `779`,
    1535: `779`,
    1536: `779`,
    1537: `779`,
    1538: `779`,
    1539: `779`,
    154: `24`,
    1540: `779`,
    1541: `779`,
    1542: `779`,
    1543: `779`,
    1544: `779`,
    1545: `779`,
    1546: `779`,
    1547: `779`,
    1548: `779`,
    1549: `780`,
    155: `24`,
    1550: `780`,
    1551: `781`,
    1552: `781`,
    1553: `781`,
    1554: `783`,
    1555: `783`,
    1556: `784`,
    1557: `785`,
    1558: `785`,
    1559: `785`,
    156: `24`,
    1560: `786`,
    1561: `786`,
    1562: `787`,
    1563: `788`,
    1564: `788`,
    1565: `789`,
    1566: `790`,
    1567: `791`,
    1568: `792`,
    1569: `792`,
    157: `24`,
    1570: `793`,
    1571: `793`,
    1572: `793`,
    1573: `795`,
    1574: `795`,
    1575: `796`,
    1576: `797`,
    1577: `798`,
    1578: `801`,
    1579: `801`,
    158: `24`,
    1580: `801`,
    1581: `803`,
    1582: `804`,
    1583: `804`,
    1584: `805`,
    1585: `806`,
    1586: `806`,
    1587: `807`,
    1588: `807`,
    1589: `808`,
    159: `24`,
    1590: `809`,
    1591: `810`,
    1592: `811`,
    1593: `811`,
    1594: `811`,
    1595: `812`,
    1596: `813`,
    1597: `814`,
    1598: `815`,
    1599: `816`,
    16: `2`,
    160: `24`,
    1600: `817`,
    1601: `817`,
    1602: `817`,
    1603: `818`,
    1604: `818`,
    1605: `819`,
    1606: `819`,
    1607: `819`,
    1608: `821`,
    1609: `821`,
    161: `24`,
    1610: `822`,
    1611: `823`,
    1612: `824`,
    1613: `827`,
    1614: `827`,
    1615: `827`,
    1616: `829`,
    1617: `830`,
    1618: `830`,
    1619: `831`,
    162: `24`,
    1620: `832`,
    1621: `832`,
    1622: `833`,
    1623: `834`,
    1624: `834`,
    1625: `834`,
    1626: `835`,
    1627: `836`,
    1628: `837`,
    1629: `838`,
    163: `24`,
    1630: `839`,
    1631: `840`,
    1632: `840`,
    1633: `840`,
    1634: `841`,
    1635: `841`,
    1636: `842`,
    1637: `842`,
    1638: `842`,
    1639: `844`,
    164: `24`,
    1640: `844`,
    1641: `845`,
    1642: `846`,
    1643: `847`,
    1644: `850`,
    1645: `850`,
    1646: `850`,
    1647: `851`,
    1648: `851`,
    1649: `852`,
    165: `25`,
    1650: `852`,
    1651: `852`,
    1652: `853`,
    1653: `853`,
    1654: `854`,
    1655: `854`,
    1656: `854`,
    1657: `855`,
    1658: `856`,
    1659: `856`,
    166: `25`,
    1660: `857`,
    1661: `857`,
    1662: `857`,
    1663: `858`,
    1664: `859`,
    1665: `859`,
    1666: `860`,
    1667: `860`,
    1668: `860`,
    1669: `861`,
    167: `25`,
    1670: `862`,
    1671: `862`,
    1672: `863`,
    1673: `863`,
    1674: `863`,
    1675: `864`,
    1676: `865`,
    1677: `865`,
    1678: `866`,
    1679: `866`,
    168: `26`,
    1680: `866`,
    1681: `867`,
    1682: `868`,
    1683: `868`,
    1684: `869`,
    1685: `869`,
    1686: `869`,
    1687: `870`,
    1688: `871`,
    1689: `871`,
    169: `26`,
    1690: `872`,
    1691: `872`,
    1692: `872`,
    1693: `873`,
    1694: `874`,
    1695: `874`,
    1696: `875`,
    1697: `875`,
    1698: `875`,
    1699: `877`,
    17: `2`,
    170: `26`,
    1700: `877`,
    1701: `877`,
    1702: `877`,
    1703: `877`,
    1704: `877`,
    1705: `877`,
    1706: `877`,
    1707: `877`,
    1708: `877`,
    1709: `877`,
    171: `26`,
    1710: `877`,
    1711: `877`,
    1712: `877`,
    1713: `877`,
    1714: `877`,
    1715: `877`,
    1716: `877`,
    1717: `877`,
    1718: `877`,
    1719: `877`,
    172: `26`,
    1720: `877`,
    1721: `877`,
    1722: `877`,
    1723: `877`,
    1724: `877`,
    1725: `877`,
    1726: `877`,
    1727: `877`,
    1728: `877`,
    1729: `877`,
    173: `26`,
    1730: `877`,
    1731: `877`,
    1732: `877`,
    1733: `877`,
    1734: `877`,
    1735: `877`,
    1736: `877`,
    1737: `877`,
    1738: `877`,
    1739: `877`,
    174: `26`,
    1740: `877`,
    1741: `877`,
    1742: `877`,
    1743: `877`,
    1744: `877`,
    1745: `877`,
    1746: `877`,
    1747: `877`,
    1748: `877`,
    1749: `877`,
    175: `26`,
    1750: `877`,
    1751: `877`,
    1752: `877`,
    1753: `877`,
    1754: `877`,
    1755: `877`,
    1756: `877`,
    1757: `877`,
    1758: `877`,
    1759: `877`,
    176: `26`,
    1760: `877`,
    1761: `877`,
    1762: `877`,
    1763: `877`,
    1764: `877`,
    1765: `877`,
    1766: `877`,
    1767: `877`,
    1768: `877`,
    1769: `877`,
    177: `26`,
    1770: `877`,
    1771: `877`,
    1772: `877`,
    1773: `877`,
    1774: `877`,
    1775: `877`,
    1776: `877`,
    1777: `877`,
    1778: `877`,
    1779: `877`,
    178: `26`,
    1780: `877`,
    1781: `877`,
    1782: `877`,
    1783: `877`,
    1784: `877`,
    1785: `877`,
    1786: `877`,
    1787: `877`,
    1788: `877`,
    1789: `877`,
    179: `26`,
    1790: `877`,
    1791: `877`,
    1792: `877`,
    1793: `877`,
    1794: `877`,
    1795: `877`,
    1796: `877`,
    1797: `877`,
    1798: `877`,
    1799: `877`,
    18: `2`,
    180: `26`,
    1800: `877`,
    1801: `877`,
    1802: `877`,
    1803: `877`,
    1804: `877`,
    1805: `877`,
    1806: `878`,
    1807: `878`,
    1808: `879`,
    1809: `879`,
    181: `26`,
    1810: `879`,
    1811: `881`,
    1812: `881`,
    1813: `882`,
    1814: `883`,
    1815: `884`,
    1816: `884`,
    1817: `885`,
    1818: `885`,
    1819: `886`,
    182: `26`,
    1820: `886`,
    1821: `886`,
    1822: `887`,
    1823: `887`,
    1824: `888`,
    1825: `888`,
    1826: `889`,
    1827: `889`,
    1828: `889`,
    1829: `890`,
    183: `26`,
    1830: `890`,
    1831: `891`,
    1832: `891`,
    1833: `892`,
    1834: `892`,
    1835: `892`,
    1836: `893`,
    1837: `894`,
    1838: `894`,
    1839: `895`,
    184: `26`,
    1840: `895`,
    1841: `896`,
    1842: `896`,
    1843: `896`,
    1844: `897`,
    1845: `897`,
    1846: `898`,
    1847: `898`,
    1848: `898`,
    1849: `898`,
    185: `26`,
    1850: `898`,
    1851: `898`,
    1852: `899`,
    1853: `899`,
    1854: `900`,
    1855: `901`,
    1856: `902`,
    1857: `902`,
    1858: `903`,
    1859: `904`,
    186: `26`,
    1860: `904`,
    1861: `905`,
    1862: `906`,
    1863: `906`,
    1864: `907`,
    1865: `908`,
    1866: `908`,
    1867: `908`,
    1868: `909`,
    1869: `910`,
    187: `26`,
    1870: `910`,
    1871: `911`,
    1872: `912`,
    1873: `914`,
    1874: `914`,
    1875: `915`,
    1876: `915`,
    1877: `915`,
    1878: `916`,
    1879: `916`,
    188: `26`,
    1880: `917`,
    1881: `917`,
    1882: `918`,
    1883: `919`,
    1884: `923`,
    1885: `923`,
    1886: `924`,
    1887: `924`,
    1888: `924`,
    1889: `925`,
    189: `26`,
    1890: `926`,
    1891: `926`,
    1892: `927`,
    1893: `927`,
    1894: `928`,
    1895: `929`,
    1896: `933`,
    1897: `933`,
    1898: `934`,
    1899: `935`,
    19: `2`,
    190: `26`,
    1900: `936`,
    1901: `937`,
    1902: `937`,
    1903: `938`,
    1904: `938`,
    1905: `938`,
    1906: `939`,
    1907: `940`,
    1908: `945`,
    1909: `946`,
    191: `26`,
    1910: `947`,
    1911: `947`,
    1912: `948`,
    1913: `949`,
    1914: `949`,
    1915: `950`,
    1916: `950`,
    1917: `950`,
    1918: `952`,
    1919: `953`,
    192: `26`,
    1920: `954`,
    1921: `954`,
    1922: `955`,
    1923: `956`,
    1924: `956`,
    1925: `957`,
    1926: `957`,
    1927: `957`,
    1928: `958`,
    1929: `958`,
    193: `26`,
    1930: `959`,
    1931: `959`,
    1932: `960`,
    1933: `961`,
    1934: `961`,
    1935: `962`,
    1936: `963`,
    1937: `963`,
    1938: `964`,
    1939: `965`,
    194: `26`,
    1940: `967`,
    1941: `968`,
    1942: `968`,
    1943: `969`,
    1944: `970`,
    1945: `971`,
    1946: `971`,
    1947: `972`,
    1948: `973`,
    1949: `973`,
    195: `26`,
    1950: `973`,
    1951: `974`,
    1952: `975`,
    1953: `975`,
    1954: `976`,
    1955: `977`,
    1956: `977`,
    1957: `978`,
    1958: `978`,
    1959: `978`,
    196: `26`,
    1960: `979`,
    1961: `980`,
    1962: `980`,
    1963: `981`,
    1964: `981`,
    1965: `981`,
    1966: `982`,
    1967: `983`,
    1968: `983`,
    1969: `984`,
    197: `26`,
    1970: `985`,
    1971: `985`,
    1972: `986`,
    1973: `987`,
    1974: `987`,
    1975: `988`,
    1976: `989`,
    1977: `989`,
    1978: `990`,
    1979: `990`,
    198: `26`,
    1980: `991`,
    1981: `991`,
    1982: `992`,
    1983: `992`,
    1984: `992`,
    1985: `994`,
    1986: `994`,
    1987: `994`,
    1988: `995`,
    1989: `995`,
    199: `26`,
    1990: `995`,
    1991: `995`,
    1992: `996`,
    1993: `996`,
    1994: `996`,
    1995: `997`,
    1996: `997`,
    1997: `997`,
    1998: `998`,
    1999: `998`,
    2: `2`,
    20: `2`,
    200: `26`,
    2000: `999`,
    2001: `999`,
    2002: `999`,
    2003: `1001`,
    2004: `1001`,
    2005: `1001`,
    2006: `1002`,
    2007: `1002`,
    2008: `1002`,
    2009: `1003`,
    201: `26`,
    2010: `1003`,
    2011: `1004`,
    2012: `1004`,
    2013: `1004`,
    2014: `1006`,
    2015: `1007`,
    2016: `1007`,
    2017: `1008`,
    2018: `1009`,
    2019: `1010`,
    202: `26`,
    2020: `1010`,
    2021: `1011`,
    2022: `1011`,
    2023: `1012`,
    2024: `1013`,
    2025: `1014`,
    2026: `1015`,
    2027: `1015`,
    2028: `1016`,
    2029: `1017`,
    203: `26`,
    2030: `1018`,
    2031: `1019`,
    2032: `1019`,
    2033: `1020`,
    2034: `1021`,
    2035: `1022`,
    2036: `1022`,
    2037: `1022`,
    2038: `1023`,
    2039: `1023`,
    204: `26`,
    2040: `1023`,
    2041: `1024`,
    2042: `1025`,
    2043: `1026`,
    2044: `1028`,
    2045: `1028`,
    2046: `1029`,
    2047: `1029`,
    2048: `1030`,
    2049: `1031`,
    205: `26`,
    2050: `1031`,
    2051: `1032`,
    2052: `1032`,
    2053: `1032`,
    2054: `1033`,
    2055: `1034`,
    2056: `1035`,
    2057: `1035`,
    2058: `1036`,
    2059: `1036`,
    206: `26`,
    2060: `1036`,
    2061: `1037`,
    2062: `1038`,
    2063: `1038`,
    2064: `1039`,
    2065: `1040`,
    2066: `1040`,
    2067: `1040`,
    2068: `1041`,
    2069: `1042`,
    207: `26`,
    2070: `1043`,
    2071: `1043`,
    2072: `1044`,
    2073: `1045`,
    2074: `1045`,
    2075: `1046`,
    2076: `1047`,
    2077: `1048`,
    2078: `1049`,
    2079: `1049`,
    208: `28`,
    2080: `1050`,
    2081: `1051`,
    2082: `1052`,
    2083: `1054`,
    2084: `1054`,
    2085: `1054`,
    2086: `1055`,
    2087: `1055`,
    2088: `1055`,
    2089: `1057`,
    209: `30`,
    2090: `1057`,
    2091: `1057`,
    2092: `1058`,
    2093: `1058`,
    2094: `1058`,
    2095: `1059`,
    2096: `1059`,
    2097: `1060`,
    2098: `1060`,
    2099: `1061`,
    21: `2`,
    210: `30`,
    2100: `1061`,
    2101: `1061`,
    2102: `1063`,
    2103: `1063`,
    2104: `1063`,
    2105: `1064`,
    2106: `1064`,
    2107: `1064`,
    2108: `1065`,
    2109: `1065`,
    211: `31`,
    2110: `1066`,
    2111: `1066`,
    2112: `1067`,
    2113: `1067`,
    2114: `1067`,
    2115: `1069`,
    2116: `1069`,
    2117: `1069`,
    2118: `1070`,
    2119: `1070`,
    212: `31`,
    2120: `1071`,
    2121: `1071`,
    2122: `1071`,
    2123: `1073`,
    2124: `1073`,
    2125: `1073`,
    2126: `1075`,
    2127: `1075`,
    2128: `1075`,
    2129: `1077`,
    213: `31`,
    2130: `1077`,
    2131: `1077`,
    2132: `1079`,
    2133: `1079`,
    2134: `1079`,
    2135: `1081`,
    2136: `1081`,
    2137: `1081`,
    2138: `1082`,
    2139: `1082`,
    214: `32`,
    2140: `1082`,
    2141: `1083`,
    2142: `1083`,
    2143: `1083`,
    2144: `1084`,
    2145: `1084`,
    2146: `1085`,
    2147: `1085`,
    2148: `1086`,
    2149: `1086`,
    215: `32`,
    2150: `1087`,
    2151: `1087`,
    2152: `1087`,
    2153: `1089`,
    2154: `1089`,
    2155: `1089`,
    2156: `1090`,
    2157: `1090`,
    2158: `1090`,
    2159: `1091`,
    216: `33`,
    2160: `1091`,
    2161: `1092`,
    2162: `1092`,
    2163: `1093`,
    2164: `1093`,
    2165: `1093`,
    2166: `1095`,
    2167: `1095`,
    2168: `1095`,
    2169: `1096`,
    217: `33`,
    2170: `1096`,
    2171: `1096`,
    2172: `1097`,
    2173: `1097`,
    2174: `1098`,
    2175: `1098`,
    2176: `1099`,
    2177: `1099`,
    2178: `1099`,
    2179: `1101`,
    218: `34`,
    2180: `1101`,
    2181: `1101`,
    2182: `1102`,
    2183: `1102`,
    2184: `1103`,
    2185: `1103`,
    2186: `1103`,
    2187: `1105`,
    2188: `1105`,
    2189: `1105`,
    219: `34`,
    2190: `1107`,
    2191: `1107`,
    2192: `1107`,
    2193: `1108`,
    2194: `1108`,
    2195: `1109`,
    2196: `1109`,
    2197: `1109`,
    2198: `1111`,
    2199: `1111`,
    22: `2`,
    220: `34`,
    2200: `1111`,
    2201: `1112`,
    2202: `1112`,
    2203: `1112`,
    2204: `1113`,
    2205: `1113`,
    2206: `1114`,
    2207: `1114`,
    2208: `1115`,
    2209: `1115`,
    221: `35`,
    2210: `1115`,
    2211: `1117`,
    2212: `1117`,
    2213: `1117`,
    2214: `1118`,
    2215: `1118`,
    2216: `1119`,
    2217: `1119`,
    2218: `1119`,
    2219: `1121`,
    222: `35`,
    2220: `1121`,
    2221: `1122`,
    2222: `1122`,
    2223: `1122`,
    2224: `1123`,
    2225: `1123`,
    2226: `1124`,
    2227: `1124`,
    2228: `1124`,
    2229: `1126`,
    223: `36`,
    2230: `1126`,
    2231: `1126`,
    2232: `1128`,
    2233: `1128`,
    2234: `1128`,
    2235: `1130`,
    2236: `1130`,
    2237: `1130`,
    2238: `1132`,
    2239: `1132`,
    224: `36`,
    2240: `1132`,
    2241: `1135`,
    2242: `1135`,
    2243: `1136`,
    2244: `1136`,
    2245: `1137`,
    2246: `1138`,
    2247: `1138`,
    2248: `1138`,
    2249: `1139`,
    225: `37`,
    2250: `1140`,
    2251: `1140`,
    2252: `1141`,
    2253: `1142`,
    2254: `1142`,
    2255: `1143`,
    2256: `1144`,
    2257: `1144`,
    2258: `1145`,
    2259: `1146`,
    226: `37`,
    2260: `1147`,
    2261: `1147`,
    2262: `1148`,
    2263: `1149`,
    2264: `1149`,
    2265: `1150`,
    2266: `1151`,
    2267: `1152`,
    2268: `1153`,
    2269: `1153`,
    227: `38`,
    2270: `1154`,
    2271: `1154`,
    2272: `1154`,
    2273: `1156`,
    2274: `1157`,
    2275: `1158`,
    2276: `1159`,
    2277: `1160`,
    2278: `1162`,
    2279: `1163`,
    228: `39`,
    2280: `1163`,
    2281: `1164`,
    2282: `1165`,
    2283: `1165`,
    2284: `1166`,
    2285: `1166`,
    2286: `1167`,
    2287: `1167`,
    2288: `1168`,
    2289: `1169`,
    229: `44`,
    2290: `1171`,
    2291: `1171`,
    2292: `1172`,
    2293: `1172`,
    2294: `1172`,
    2295: `1173`,
    2296: `1173`,
    2297: `1174`,
    2298: `1174`,
    2299: `1174`,
    23: `2`,
    230: `44`,
    2300: `1176`,
    2301: `1176`,
    2302: `1177`,
    2303: `1177`,
    2304: `1177`,
    2305: `1178`,
    2306: `1178`,
    2307: `1179`,
    2308: `1179`,
    2309: `1179`,
    231: `45`,
    2310: `1181`,
    2311: `1181`,
    2312: `1182`,
    2313: `1182`,
    2314: `1182`,
    2315: `1183`,
    2316: `1183`,
    2317: `1184`,
    2318: `1184`,
    2319: `1184`,
    232: `45`,
    2320: `1186`,
    2321: `1186`,
    2322: `1186`,
    2323: `1188`,
    2324: `1188`,
    2325: `1188`,
    2326: `1190`,
    2327: `1191`,
    2328: `1193`,
    2329: `1194`,
    233: `46`,
    2330: `1195`,
    2331: `1196`,
    2332: `1196`,
    2333: `1197`,
    2334: `1197`,
    2335: `1198`,
    2336: `1198`,
    2337: `1198`,
    2338: `1199`,
    2339: `1201`,
    234: `47`,
    2340: `1202`,
    2341: `1203`,
    2342: `1203`,
    2343: `1203`,
    2344: `1204`,
    2345: `1205`,
    2346: `1205`,
    2347: `1208`,
    2348: `1208`,
    2349: `1209`,
    235: `53`,
    2350: `1209`,
    2351: `1210`,
    2352: `1211`,
    2353: `1212`,
    2354: `1213`,
    2355: `1213`,
    2356: `1214`,
    2357: `1215`,
    2358: `1215`,
    2359: `1216`,
    236: `53`,
    2360: `1216`,
    2361: `1217`,
    2362: `1217`,
    2363: `1218`,
    2364: `1219`,
    2365: `1220`,
    2366: `1220`,
    2367: `1221`,
    2368: `1222`,
    2369: `1223`,
    237: `54`,
    2370: `1224`,
    2371: `1224`,
    2372: `1225`,
    2373: `1226`,
    2374: `1227`,
    2375: `1229`,
    2376: `1230`,
    2377: `1231`,
    2378: `1232`,
    2379: `1232`,
    238: `55`,
    2380: `1232`,
    2381: `1233`,
    2382: `1233`,
    2383: `1234`,
    2384: `1235`,
    2385: `1236`,
    2386: `1238`,
    2387: `1239`,
    2388: `1239`,
    2389: `1239`,
    239: `55`,
    2390: `1240`,
    2391: `1240`,
    2392: `1241`,
    2393: `1242`,
    2394: `1242`,
    2395: `1242`,
    2396: `1243`,
    2397: `1244`,
    2398: `1244`,
    2399: `1245`,
    24: `2`,
    240: `56`,
    2400: `1246`,
    2401: `1246`,
    2402: `1246`,
    2403: `1247`,
    2404: `1247`,
    2405: `1248`,
    2406: `1249`,
    2407: `1249`,
    2408: `1249`,
    2409: `1250`,
    241: `56`,
    2410: `1250`,
    2411: `1251`,
    2412: `1252`,
    2413: `1252`,
    2414: `1252`,
    2415: `1253`,
    2416: `1254`,
    2417: `1254`,
    2418: `1255`,
    2419: `1256`,
    242: `57`,
    2420: `1256`,
    2421: `1256`,
    2422: `1257`,
    2423: `1257`,
    2424: `1258`,
    2425: `1258`,
    2426: `1258`,
    2427: `1259`,
    2428: `1260`,
    2429: `1260`,
    243: `58`,
    2430: `1261`,
    2431: `1263`,
    2432: `1264`,
    2433: `1264`,
    2434: `1264`,
    2435: `1265`,
    2436: `1266`,
    2437: `1267`,
    2438: `1268`,
    2439: `1269`,
    244: `59`,
    2440: `1271`,
    2441: `1272`,
    2442: `1273`,
    2443: `1274`,
    2444: `1274`,
    2445: `1274`,
    2446: `1275`,
    2447: `1275`,
    2448: `1276`,
    2449: `1276`,
    245: `60`,
    2450: `1276`,
    2451: `1277`,
    2452: `1277`,
    2453: `1277`,
    2454: `1279`,
    2455: `1280`,
    2456: `1281`,
    2457: `1281`,
    2458: `1282`,
    2459: `1283`,
    246: `60`,
    2460: `1284`,
    2461: `1285`,
    2462: `1286`,
    2463: `1287`,
    2464: `1289`,
    2465: `1290`,
    2466: `1291`,
    2467: `1291`,
    2468: `1292`,
    2469: `1294`,
    247: `61`,
    2470: `1294`,
    2471: `1295`,
    2472: `1296`,
    2473: `1296`,
    2474: `1297`,
    2475: `1299`,
    2476: `1300`,
    2477: `1300`,
    2478: `1301`,
    2479: `1303`,
    248: `61`,
    2480: `1304`,
    2481: `1305`,
    2482: `1306`,
    2483: `1307`,
    2484: `1307`,
    2485: `1308`,
    2486: `1309`,
    2487: `1310`,
    2488: `1311`,
    2489: `1313`,
    249: `61`,
    2490: `1313`,
    2491: `1314`,
    2492: `1314`,
    2493: `1315`,
    2494: `1316`,
    2495: `1317`,
    2496: `1317`,
    2497: `1317`,
    2498: `1318`,
    2499: `1318`,
    25: `2`,
    250: `62`,
    2500: `1318`,
    2501: `1320`,
    2502: `1320`,
    2503: `1321`,
    2504: `1322`,
    2505: `1322`,
    2506: `1323`,
    2507: `1325`,
    2508: `1326`,
    2509: `1326`,
    251: `62`,
    2510: `1326`,
    2511: `1328`,
    2512: `1329`,
    2513: `1329`,
    2514: `1330`,
    252: `63`,
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
    357: `122`,
    358: `123`,
    359: `124`,
    36: `2`,
    360: `125`,
    361: `130`,
    362: `130`,
    363: `132`,
    364: `133`,
    365: `133`,
    366: `134`,
    367: `135`,
    368: `135`,
    369: `136`,
    37: `2`,
    370: `137`,
    371: `137`,
    372: `137`,
    373: `138`,
    374: `138`,
    375: `138`,
    376: `139`,
    377: `140`,
    378: `140`,
    379: `141`,
    38: `2`,
    380: `141`,
    381: `142`,
    382: `143`,
    383: `148`,
    384: `149`,
    385: `150`,
    386: `150`,
    387: `151`,
    388: `152`,
    389: `152`,
    39: `2`,
    390: `153`,
    391: `153`,
    392: `154`,
    393: `155`,
    394: `155`,
    395: `155`,
    396: `156`,
    397: `156`,
    398: `156`,
    399: `158`,
    4: `2`,
    40: `2`,
    400: `159`,
    401: `160`,
    402: `160`,
    403: `161`,
    404: `162`,
    405: `162`,
    406: `163`,
    407: `164`,
    408: `164`,
    409: `165`,
    41: `2`,
    410: `166`,
    411: `166`,
    412: `167`,
    413: `168`,
    414: `168`,
    415: `168`,
    416: `169`,
    417: `169`,
    418: `169`,
    419: `170`,
    42: `4`,
    420: `170`,
    421: `171`,
    422: `172`,
    423: `172`,
    424: `172`,
    425: `173`,
    426: `173`,
    427: `173`,
    428: `174`,
    429: `174`,
    43: `4`,
    430: `175`,
    431: `175`,
    432: `176`,
    433: `177`,
    434: `177`,
    435: `178`,
    436: `179`,
    437: `179`,
    438: `180`,
    439: `181`,
    44: `5`,
    440: `183`,
    441: `184`,
    442: `184`,
    443: `185`,
    444: `185`,
    445: `185`,
    446: `185`,
    447: `185`,
    448: `185`,
    449: `185`,
    45: `5`,
    450: `185`,
    451: `185`,
    452: `185`,
    453: `186`,
    454: `186`,
    455: `187`,
    456: `188`,
    457: `188`,
    458: `188`,
    459: `189`,
    46: `5`,
    460: `190`,
    461: `191`,
    462: `191`,
    463: `192`,
    464: `193`,
    465: `193`,
    466: `193`,
    467: `194`,
    468: `194`,
    469: `195`,
    47: `6`,
    470: `195`,
    471: `196`,
    472: `196`,
    473: `197`,
    474: `197`,
    475: `197`,
    476: `199`,
    477: `199`,
    478: `200`,
    479: `200`,
    48: `7`,
    480: `200`,
    481: `201`,
    482: `201`,
    483: `202`,
    484: `202`,
    485: `203`,
    486: `203`,
    487: `203`,
    488: `204`,
    489: `204`,
    49: `8`,
    490: `205`,
    491: `205`,
    492: `206`,
    493: `206`,
    494: `206`,
    495: `207`,
    496: `207`,
    497: `208`,
    498: `208`,
    499: `209`,
    5: `2`,
    50: `9`,
    500: `209`,
    501: `210`,
    502: `211`,
    503: `216`,
    504: `216`,
    505: `217`,
    506: `217`,
    507: `218`,
    508: `219`,
    509: `224`,
    51: `10`,
    510: `224`,
    511: `226`,
    512: `227`,
    513: `227`,
    514: `228`,
    515: `229`,
    516: `229`,
    517: `230`,
    518: `231`,
    519: `231`,
    52: `11`,
    520: `231`,
    521: `232`,
    522: `232`,
    523: `232`,
    524: `233`,
    525: `234`,
    526: `234`,
    527: `235`,
    528: `235`,
    529: `236`,
    53: `11`,
    530: `237`,
    531: `242`,
    532: `242`,
    533: `243`,
    534: `243`,
    535: `244`,
    536: `245`,
    537: `245`,
    538: `246`,
    539: `246`,
    54: `12`,
    540: `248`,
    541: `249`,
    542: `249`,
    543: `250`,
    544: `251`,
    545: `251`,
    546: `252`,
    547: `253`,
    548: `254`,
    549: `254`,
    55: `12`,
    550: `254`,
    551: `255`,
    552: `255`,
    553: `255`,
    554: `256`,
    555: `257`,
    556: `257`,
    557: `258`,
    558: `258`,
    559: `259`,
    56: `13`,
    560: `260`,
    561: `265`,
    562: `266`,
    563: `267`,
    564: `267`,
    565: `268`,
    566: `269`,
    567: `269`,
    568: `270`,
    569: `270`,
    57: `14`,
    570: `271`,
    571: `272`,
    572: `272`,
    573: `272`,
    574: `273`,
    575: `273`,
    576: `273`,
    577: `275`,
    578: `276`,
    579: `277`,
    58: `14`,
    580: `277`,
    581: `278`,
    582: `279`,
    583: `279`,
    584: `280`,
    585: `281`,
    586: `281`,
    587: `282`,
    588: `283`,
    589: `283`,
    59: `15`,
    590: `284`,
    591: `285`,
    592: `285`,
    593: `285`,
    594: `286`,
    595: `286`,
    596: `286`,
    597: `287`,
    598: `287`,
    599: `288`,
    6: `2`,
    60: `16`,
    600: `289`,
    601: `289`,
    602: `289`,
    603: `290`,
    604: `290`,
    605: `290`,
    606: `291`,
    607: `291`,
    608: `292`,
    609: `292`,
    61: `17`,
    610: `293`,
    611: `294`,
    612: `294`,
    613: `295`,
    614: `296`,
    615: `296`,
    616: `297`,
    617: `298`,
    618: `300`,
    619: `300`,
    62: `18`,
    620: `301`,
    621: `301`,
    622: `302`,
    623: `303`,
    624: `303`,
    625: `303`,
    626: `304`,
    627: `304`,
    628: `305`,
    629: `305`,
    63: `19`,
    630: `306`,
    631: `307`,
    632: `307`,
    633: `308`,
    634: `309`,
    635: `310`,
    636: `310`,
    637: `311`,
    638: `311`,
    639: `311`,
    64: `20`,
    640: `312`,
    641: `312`,
    642: `313`,
    643: `313`,
    644: `314`,
    645: `315`,
    646: `315`,
    647: `316`,
    648: `317`,
    649: `317`,
    65: `20`,
    650: `318`,
    651: `319`,
    652: `321`,
    653: `322`,
    654: `322`,
    655: `323`,
    656: `323`,
    657: `323`,
    658: `323`,
    659: `323`,
    66: `21`,
    660: `323`,
    661: `323`,
    662: `323`,
    663: `323`,
    664: `323`,
    665: `324`,
    666: `324`,
    667: `325`,
    668: `326`,
    669: `326`,
    67: `22`,
    670: `326`,
    671: `327`,
    672: `328`,
    673: `329`,
    674: `329`,
    675: `330`,
    676: `331`,
    677: `331`,
    678: `331`,
    679: `332`,
    68: `24`,
    680: `332`,
    681: `333`,
    682: `333`,
    683: `334`,
    684: `334`,
    685: `335`,
    686: `335`,
    687: `335`,
    688: `337`,
    689: `337`,
    69: `24`,
    690: `338`,
    691: `338`,
    692: `338`,
    693: `339`,
    694: `339`,
    695: `340`,
    696: `340`,
    697: `341`,
    698: `341`,
    699: `341`,
    7: `2`,
    70: `24`,
    700: `342`,
    701: `342`,
    702: `343`,
    703: `343`,
    704: `344`,
    705: `344`,
    706: `345`,
    707: `346`,
    708: `346`,
    709: `348`,
    71: `24`,
    710: `349`,
    711: `349`,
    712: `350`,
    713: `351`,
    714: `351`,
    715: `352`,
    716: `353`,
    717: `354`,
    718: `354`,
    719: `354`,
    72: `24`,
    720: `355`,
    721: `356`,
    722: `356`,
    723: `357`,
    724: `358`,
    725: `359`,
    726: `360`,
    727: `361`,
    728: `366`,
    729: `366`,
    73: `24`,
    730: `367`,
    731: `367`,
    732: `368`,
    733: `368`,
    734: `368`,
    735: `369`,
    736: `369`,
    737: `370`,
    738: `371`,
    739: `376`,
    74: `24`,
    740: `376`,
    741: `377`,
    742: `378`,
    743: `378`,
    744: `379`,
    745: `380`,
    746: `381`,
    747: `381`,
    748: `381`,
    749: `382`,
    75: `24`,
    750: `382`,
    751: `382`,
    752: `382`,
    753: `382`,
    754: `382`,
    755: `383`,
    756: `383`,
    757: `384`,
    758: `385`,
    759: `385`,
    76: `24`,
    760: `386`,
    761: `387`,
    762: `389`,
    763: `390`,
    764: `390`,
    765: `391`,
    766: `391`,
    767: `391`,
    768: `391`,
    769: `391`,
    77: `24`,
    770: `391`,
    771: `391`,
    772: `391`,
    773: `391`,
    774: `391`,
    775: `392`,
    776: `392`,
    777: `393`,
    778: `394`,
    779: `395`,
    78: `24`,
    780: `395`,
    781: `396`,
    782: `396`,
    783: `397`,
    784: `397`,
    785: `398`,
    786: `398`,
    787: `399`,
    788: `399`,
    789: `399`,
    79: `24`,
    790: `401`,
    791: `401`,
    792: `402`,
    793: `402`,
    794: `402`,
    795: `403`,
    796: `404`,
    797: `404`,
    798: `405`,
    799: `405`,
    8: `2`,
    80: `24`,
    800: `406`,
    801: `407`,
    802: `413`,
    803: `414`,
    804: `414`,
    805: `415`,
    806: `416`,
    807: `416`,
    808: `417`,
    809: `418`,
    81: `24`,
    810: `418`,
    811: `418`,
    812: `419`,
    813: `420`,
    814: `420`,
    815: `421`,
    816: `422`,
    817: `423`,
    818: `424`,
    819: `425`,
    82: `24`,
    820: `430`,
    821: `430`,
    822: `431`,
    823: `431`,
    824: `432`,
    825: `432`,
    826: `432`,
    827: `433`,
    828: `433`,
    829: `434`,
    83: `24`,
    830: `435`,
    831: `440`,
    832: `441`,
    833: `442`,
    834: `442`,
    835: `443`,
    836: `444`,
    837: `444`,
    838: `444`,
    839: `445`,
    84: `24`,
    840: `445`,
    841: `445`,
    842: `445`,
    843: `445`,
    844: `445`,
    845: `446`,
    846: `446`,
    847: `447`,
    848: `448`,
    849: `450`,
    85: `24`,
    850: `451`,
    851: `451`,
    852: `452`,
    853: `452`,
    854: `452`,
    855: `452`,
    856: `452`,
    857: `452`,
    858: `452`,
    859: `452`,
    86: `24`,
    860: `452`,
    861: `452`,
    862: `453`,
    863: `453`,
    864: `454`,
    865: `455`,
    866: `456`,
    867: `456`,
    868: `457`,
    869: `457`,
    87: `24`,
    870: `458`,
    871: `458`,
    872: `459`,
    873: `459`,
    874: `460`,
    875: `460`,
    876: `460`,
    877: `462`,
    878: `462`,
    879: `462`,
    88: `24`,
    880: `462`,
    881: `462`,
    882: `462`,
    883: `462`,
    884: `462`,
    885: `462`,
    886: `462`,
    887: `462`,
    888: `462`,
    889: `462`,
    89: `24`,
    890: `462`,
    891: `462`,
    892: `462`,
    893: `462`,
    894: `462`,
    895: `462`,
    896: `462`,
    897: `462`,
    898: `462`,
    899: `462`,
    9: `2`,
    90: `24`,
    900: `462`,
    901: `462`,
    902: `462`,
    903: `462`,
    904: `462`,
    905: `462`,
    906: `462`,
    907: `462`,
    908: `462`,
    909: `462`,
    91: `24`,
    910: `462`,
    911: `462`,
    912: `463`,
    913: `464`,
    914: `465`,
    915: `466`,
    916: `467`,
    917: `473`,
    918: `474`,
    919: `475`,
    92: `24`,
    920: `475`,
    921: `476`,
    922: `477`,
    923: `477`,
    924: `477`,
    925: `478`,
    926: `478`,
    927: `478`,
    928: `478`,
    929: `478`,
    93: `24`,
    930: `478`,
    931: `479`,
    932: `481`,
    933: `482`,
    934: `482`,
    935: `483`,
    936: `483`,
    937: `483`,
    938: `483`,
    939: `483`,
    94: `24`,
    940: `483`,
    941: `483`,
    942: `483`,
    943: `483`,
    944: `483`,
    945: `484`,
    946: `484`,
    947: `485`,
    948: `486`,
    949: `487`,
    95: `24`,
    950: `487`,
    951: `488`,
    952: `488`,
    953: `489`,
    954: `490`,
    955: `490`,
    956: `491`,
    957: `491`,
    958: `491`,
    959: `492`,
    96: `24`,
    960: `493`,
    961: `493`,
    962: `494`,
    963: `494`,
    964: `494`,
    965: `495`,
    966: `496`,
    967: `496`,
    968: `497`,
    969: `497`,
    97: `24`,
    970: `497`,
    971: `498`,
    972: `499`,
    973: `499`,
    974: `500`,
    975: `500`,
    976: `500`,
    977: `501`,
    978: `502`,
    979: `502`,
    98: `24`,
    980: `503`,
    981: `503`,
    982: `503`,
    983: `504`,
    984: `505`,
    985: `505`,
    986: `506`,
    987: `506`,
    988: `506`,
    989: `507`,
    99: `24`,
    990: `508`,
    991: `508`,
    992: `509`,
    993: `509`,
    994: `509`,
    995: `510`,
    996: `511`,
    997: `511`,
    998: `512`,
    999: `512`,
  },
  appClear: `CA==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 307,
  unsupported: [],
  version: 13,
  warnings: [
    `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`,
  ],
};
export const _stateSourceMap = {
  2: {
    at: "./index.rsh:293:11:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
  3: {
    at: "./index.rsh:119:29:after expr stmt semicolon",
    fs: [],
    msg: null,
    who: "Module",
  },
};
export const _Connectors = {
  ALGO: _ALGO,
};
export const _Participants = {
  Deployer: Deployer,
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy,
  grant: grant,
  touch: touch,
};
export const _APIs = {
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  deleteAllowanceBox: deleteAllowanceBox,
  deleteBalanceBox: deleteBalanceBox,
  destroy: destroy,
  grant: grant,
  touch: touch,
};
