import React, { useEffect, useState } from "react";

import { useWallet } from "@txnlab/use-wallet";

import * as masterBackend from "../../backend/index.Master.mjs";
import * as childBackend from "../../backend/drop/index.Child.mjs";

import { loadStdlib } from "@reach-sh/stdlib";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { ALGO_MakeWalletConnect as MakeWalletConnect } from "@reach-sh/stdlib";

import { zeroAddress } from "../../utils/algorand.js";
import { fromSome } from "../../utils/common.js";

const { REACT_APP_CONTRACT_INFO_MASTER } = process.env;

const ctcInfoMaster = parseInt(REACT_APP_CONTRACT_INFO_MASTER);

export const makeStdLib = () => {
  const networkEnv = "ALGO-live";
  const networkProvider = "testnet";
  const stdlib = loadStdlib({
    REACH_CONNECTOR_MODE: networkEnv,
    //REACH_DEBUG: "1",
  });
  const providerEnv = {
    ALGO_TOKEN: "",
    ALGO_SERVER: `https://${networkProvider}-api.algonode.cloud`,
    ALGO_PORT: "",
    ALGO_NODE_WRITE_ONLY: "no",

    ALGO_INDEXER_TOKEN: "",
    ALGO_INDEXER_SERVER: `https://${networkProvider}-idx.algonode.cloud`,
    ALGO_INDEXER_PORT: "",
  };
  stdlib.setWalletFallback(
    stdlib.walletFallback({
      providerEnv,
      WalletConnect: MakeWalletConnect(WalletConnect, QRCodeModal),
    })
  );

  return stdlib;
};

const stdlib = makeStdLib();

const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;
const bn = stdlib.bigNumberify;

function Connect() {

  const { providers, activeAccount } = useWallet();

  const [acc, setAcc] = useState(null);
  const [inBal, setInBal] = useState("");
  const [bal, setBal] = useState("");
  const [state, setState] = useState(null);

  const [transferEvents, setTransferEvents] = useState([]);
  const [depositEvents, setDepositEvents] = useState([]);
  const [withdrawEvents, setWithdrawEvents] = useState([]);
  const [approveEvents, setApproveEvents] = useState([]);
  const [readyEvents, setReadyEvents] = useState([]);

  const [ctcInfoChild, setCtcInfoChild] = useState(bn(0));
  const [assets, setAssets] = useState({});

  // effect: get state on acc update
  useEffect(() => {
    if (!acc) return;
    if (ctcInfoChild.eq(bn(0))) return;
    const ctc = acc.contract(childBackend, ctcInfoChild);
    ctc.v.state().then(fromSome).then(setState);
  }, [acc, ctcInfoChild]);
  // effect: get acctive account handle
  useEffect(() => {
    if (!activeAccount) {
      stdlib.connectAccount({ addr: zeroAddress }).then(setAcc);
      return;
    }
    stdlib.connectAccount({ addr: activeAccount.address }).then(setAcc);
  }, [activeAccount])
  ;
  // effect: get asset info on ready event update
  useEffect(() => {
    if (!readyEvents.length) return;
    (async () => {
      const assets = {};
      const { indexer } = await stdlib.getProvider();
      for (const { what } of readyEvents) {
        const [, assetIdBn] = what;
        const assetId = bn2n(assetIdBn);
        const { asset } = await indexer.lookupAssetByID(assetId).do();
        assets[assetId] = asset;
      }
      return assets;
    })().then(setAssets);
  }, [readyEvents]);

  // get transfer events
  useEffect(() => {
    if (!acc) return;
    (async () => {
      const events = [];
      const ctc = acc.contract(masterBackend, ctcInfoMaster);
      while (true) {
        const evt = await Promise.race([
          ctc.e.transfer.next(),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        if (!evt) break;
        events.push({ type: "transfer", ...evt });
      }
      return events.reverse();
    })().then(setTransferEvents);
  }, [acc]);

  // get deposit events
  useEffect(() => {
    if (!acc) return;
    (async () => {
      const eventType = "deposit";
      const events = [];
      const ctc = acc.contract(masterBackend, ctcInfoMaster);
      while (true) {
        const evt = await Promise.race([
          ctc.e[eventType].next(),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        if (!evt) break;
        events.push({ type: eventType, ...evt });
      }
      return events.reverse();
    })().then(setDepositEvents);
  }, [acc]);

  // get withdraw events
  useEffect(() => {
    if (!acc) return;
    (async () => {
      const eventType = "withdraw";
      const events = [];
      const ctc = acc.contract(masterBackend, ctcInfoMaster);
      while (true) {
        const evt = await Promise.race([
          ctc.e[eventType].next(),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        if (!evt) break;
        events.push({ type: eventType, ...evt });
      }
      return events.reverse();
    })().then(setWithdrawEvents);
  }, [acc]);

  // get approve events
  useEffect(() => {
    if (!acc) return;
    (async () => {
      const eventType = "approve";
      const events = [];
      const ctc = acc.contract(masterBackend, ctcInfoMaster);
      while (true) {
        const evt = await Promise.race([
          ctc.e[eventType].next(),
          new Promise((resolve) => setTimeout(resolve, 1000)),
        ]);
        if (!evt) break;
        events.push({ type: eventType, ...evt });
      }
      return events.reverse();
    })().then(setApproveEvents);
  }, [acc]);

  // get ready events
  useEffect(() => {
    if (!acc) return;
    (async () => {
      const eventType = "ready";
      const events = [];
      const ctc = acc.contract(masterBackend, ctcInfoMaster);
      while (true) {
        const evt = await Promise.race([
          ctc.e.ready.next(),
          new Promise((resolve) => setTimeout(resolve, 1_000)),
        ]);
        if (!evt) break;
        events.push({ type: eventType, ...evt });
      }
      return events.reverse();
    })().then(setReadyEvents);
  }, [acc]);

  /*
  useEffect(() => {
    if (!acc) return;
    const ctc = acc.contract(masterBackend, ctcInfoMaster);
    ["ready"].map((evt) =>
      ctc.e[evt].monitor((evtd) => {
        switch (evt) {
          case "ready":
            setChildren(Array.from(new Set([...children, bn2n(evtd.what[0])])));
            break;
          default:
        }
      })
    );
  }, [acc]);
  */

  // effect:
  useEffect(() => {
    if (!acc) return;
    if (!state) return;
    const token = bn(state.token);
    acc.balanceOf(token).then(bn2n).then(setBal);
  }, [acc, state]);

  // effect: get balance on acc update
  useEffect(() => {
    if (!acc) return;
    if (ctcInfoChild.eq(bn(0))) return;
    const ctc = acc.contract(childBackend, ctcInfoChild);
    ctc.v.balanceOf(acc).then((x) => setInBal(bn2n(x[1])));
  }, [acc, ctcInfoChild]);

  // Map through the providers.
  // Render account information and "connect", "set active", and "disconnect" buttons.
  // Finally, map through the `accounts` property to render a dropdown for each connected account.
  return (
    <div>
      <h1>Sandbox</h1>
      <h2>Connect</h2>
      {providers?.map((provider) => (
        <div key={"provider-" + provider.metadata.id}>
          <h4>
            <img width={30} height={30} alt="" src={provider.metadata.icon} />
            {provider.metadata.name} {provider.isActive && "[active]"}
          </h4>
          <div>
            <button onClick={provider.connect} disabled={provider.isConnected}>
              Connect
            </button>
            <button
              onClick={provider.disconnect}
              disabled={!provider.isConnected}
            >
              Disconnect
            </button>
            <button
              onClick={provider.setActiveProvider}
              disabled={!provider.isConnected || provider.isActive}
            >
              Set Active
            </button>
            <div>
              {provider.isActive && provider.accounts.length && (
                <select
                  value={activeAccount?.address}
                  onChange={(e) => provider.setActiveAccount(e.target.value)}
                >
                  {provider.accounts.map((account) => (
                    <option key={account.address} value={account.address}>
                      {account.address}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      ))}
      <h2>Tokens</h2>
      {readyEvents.length > 0 && (
        <ul>
          {readyEvents.map((child) => (
            <li style={{ display: "inline-block" }}>
              {((assetId) => (
                <button
                  style={{ fontWeight: child.what[0] === ctcInfoChild && 900 }}
                  onClick={async () => {
                    const { indexer } = await stdlib.getProvider();
                    const assetInfo = await indexer
                      .lookupAssetByID(bn2n(child.what[1]))
                      .do();
                    setCtcInfoChild(child.what[0]);
                  }}
                >
                  {assetId in assets
                    ? assets[assetId].params["unit-name"]
                    : assetId}
                </button>
              ))(bn2n(child.what[1]))}
            </li>
          ))}
          <li style={{ display: "inline-block" }}>
            <button
              onClick={async () => {
                const token = window.prompt("Enter token id:");
                if (!token) return;
                const ctc = acc.contract(masterBackend, ctcInfoMaster);
                const ctcInfoChild = await ctc.a.Master.new();
                await ctc.a.Master.setup(ctcInfoChild);
                const ctcChild = acc.contract(childBackend, ctcInfoChild);
                await stdlib.withDisconnect(() =>
                  ctcChild.p.Alice({
                    getParams: () => ({
                      token: parseInt(token),
                      ctc: ctcInfoMaster,
                    }),
                    ready: () => {
                      stdlib.disconnect(null); // causes withDisconnect to immediately return null
                    },
                  })
                );
              }}
            >
              New
            </button>
          </li>
        </ul>
      )}
      <div>
        <span>Account: {activeAccount?.address}</span>
        <br />
        <br />
        {!ctcInfoChild.eq(bn(0)) && (
          <>
            <div>
              Bal: {bal}&nbsp;(In) Bal: {inBal}
            </div>
            <br />
          </>
        )}
        {acc &&
          [
            {
              name: "Optin",
              f: async () => {
                await stdlib.transfer(acc, acc, 0, state.token);
              },
            },
            {
              name: "Deposit",
              f: async () => {
                const ctc = acc.contract(childBackend, ctcInfoChild);
                await ctc.a.U2.deposit(acc, 1);
              },
            },
            {
              name: "Withdraw",
              f: async () => {
                const ctc = acc.contract(childBackend, ctcInfoChild);
                // TODO combine these two calls
                await acc.tokenAccept((await ctc.v.state())[1].token); // TODO use tokenAccepted
                await ctc.a.U2.withdraw(acc, 1);
              },
            },
            {
              name: "Transfer",
              f: async () => {
                const address = prompt("Enter address to transfer to");
                const ctc = acc.contract(childBackend, ctcInfoChild);
                await ctc.a.U1.transfer(address, 1);
              },
            },
            {
              name: "Approve",
              f: async () => {
                const address = prompt("Enter address to approve");
                const ctc = acc.contract(childBackend, ctcInfoChild);
                await ctc.a.U1.approve(address, 1);
              },
            },
          ].map(({ name, f }) => <button onClick={f}>{name}</button>)}
      </div>
      <h2>Transactions</h2>
      <table cellPadding={5} border={5} style={{ marginTop: "1em" }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Round</th>
            <th>CTC</th>
            <th>Token</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {((events) => {
            events.sort((a, b) => bn2n(b.when) - bn2n(a.when));
            return (
              events.length > 0 &&
              events.map((evt) => {
                const type = evt.type;
                const round = bn2n(evt.when);
                const ctc = evt.what[0] ? bn2n(evt.what[0]) : 0;
                const token = evt.what[1] ? bn2n(evt.what[1]) : 0;
                const from = evt.what[2] ? fa(evt.what[2]) : "";
                const to = evt.what[3] ? fa(evt.what[3]) : "";
                const amount = evt.what[4] ? bn2n(evt.what[4]) : 0;
                return (
                  <tr>
                    <td>{type}</td>
                    <td>{round}</td>
                    <td>{ctc}</td>
                    <td>{token}</td>
                    <td>
                      {from.slice(0, 4)}...{from.slice(-4)}
                    </td>
                    <td>
                      {to.slice(0, 4)}...{from.slice(-4)}
                    </td>
                    <td>{amount}</td>
                  </tr>
                );
              })
            );
          })([
            ...transferEvents,
            ...depositEvents,
            ...withdrawEvents,
            ...approveEvents,
            ...readyEvents,
          ])}
        </tbody>
      </table>
    </div>
  );
}

export default Connect;
