import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import ChildService from "../../services/ChildService.ts";
import AssetService from "../../services/AssetService.ts";
import SubscriptionService from "../../services/SubscriptionService.ts";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import { zeroAddress } from "../../utils/algorand";
const stdlib = makeStdLib();
const { algosdk } = stdlib;
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
function SubscriptionProviders() {
  const { activeAccount } = useWallet();
  const [subscriptions, setSubscriptions] = useState(
    JSON.parse(localStorage.getItem(`subscription-providers`) ?? "{}")
  );
  const handleSubscribe = useCallback(
    (el) => async () => {
      console.log({ el });
      console.log([
        { appId: el.assetAppId },
        activeAccount.address,
        `${Number(el.providerCount) * el.providerAmount}.`,
      ]);
      /*
      await ChildService.approve(
        { appId: el.assetAppId, decimals: el.decimals },
        activeAccount.address,
        algosdk.getApplicationAddress(el.appId),
        `${Number(el.periodCount) * el.periodAmount}`
      );
      */
      console.log({
        subscribeArgs: {
          activeAccount,
          appId: el.appId,
          providerAddress: el.providerAddress,
          reserveAddress: el.reserveAddress,
        },
      });
      await SubscriptionService.Child.subscribe(
        activeAccount.address,
        el.appId,
        el.providerAddress,
        el.reserveAddress
      );
    },
    [activeAccount]
  );
  const reloadSubscriptions = useCallback(async () => {
    if (!activeAccount) return;
    // -------------------------------------------
    // use stored ready events and seek if needed
    // -------------------------------------------

    let providerEvents;
    do {
      const eventName = "event";
      const eventKey = `event-${eventName}`;
      const storedEvents = JSON.parse(localStorage.getItem(eventKey) ?? "{}");
      const events = !storedEvents.time
        ? await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address
          )
        : await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      /*
      .filter(
        (el) => el.what[0][0] === "DeleteProvider"
      );
      */
      localStorage.setItem(
        eventKey,
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      console.log({ newEvents });
      providerEvents = newEvents;
    } while (0);
    console.log({ providerEvents });

    const announceEvents = providerEvents.filter(
      ({ what }) => what[0][0] === "Announce"
    );
    console.log({ announceEvents });

    const deleteEvents = providerEvents.filter(
      ({ what }) => what[0][0] === "DeleteProvider"
    );
    console.log({ deleteEvents });

    /*
    let deleteProviderEvents;
    do {
      const eventName = "delete";
      const storedEvents = JSON.parse(
        localStorage.getItem(`event-${eventName}-provider`) ?? "{}"
      );
      const events = !storedEvents.time
        ? await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address
          )
        : await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events].filter(
        (el) => el.what[0][0] === "DeleteProvider"
      );
      localStorage.setItem(
        `event-${eventName}-provider`,
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      console.log({ newEvents });
      deleteProviderEvents = newEvents;
    } while (0);
    */
    /*
    let announceProviderEvents;
    do {
      const eventName = "announce";
      const storedEvents = JSON.parse(
        localStorage.getItem(`event-${eventName}`) ?? "{}"
      );
      const events = !storedEvents.time
        ? await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address
          )
        : await SubscriptionService.Master.getEvents(eventName)(
            activeAccount.address,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      localStorage.setItem(
        `event-${eventName}`,
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      announceProviderEvents = newEvents;
    } while (0);
    */
    // -------------------------------------------
    // get tokens from events
    // and balances for active account
    // -------------------------------------------
    const deletedAppIds = []; //deleteEvents.map((el) => bn2n(el.what[0][1][0]));

    const subscriptions = [];
    let time = bn(0);
    for (const event of announceEvents) {
      const eventName = "Announce";
      const {
        time: lastTime,
        appId,
        assetId: assetAppId,
        providerAddress,
        reserveAddress,
        periodCount,
        periodAmount,
        periodLength,
        referenceID,
      } = SubscriptionService.Master.decodeEvent(eventName)(event);

      console.log({
        lastTime,
        appId,
        assetAppId,
        providerAddress,
        reserveAddress,
        periodCount,
        periodAmount,
        periodLength,
        referenceID,
      });

      if (deletedAppIds.includes(appId)) continue;

      const state = fromSome(
        await SubscriptionService.Child.state(appId, reserveAddress),
        {}
      );

      console.log({ state });

      const { token } = fromSome(
        await ChildService.state({ appId: assetAppId }),
        {}
      );
      const assetId = bn2n(token);

      console.log({ assetId });

      const asset = await AssetService.getAsset(assetId);
      const {
        params: { decimals, name, ["unit-name"]: symbol },
      } = asset;

      const { token: referenceTokenBn } = fromSome(
        await ChildService.state({ appId: referenceID })
      );
      const referenceToken = bn2n(referenceTokenBn);

      const referenceAsset = await AssetService.getAsset(referenceToken);
      const {
        params: { symbol: referenceSymbol },
      } = referenceAsset;

      time = lastTime;

      subscriptions.push({
        appId,
        assetAppId,
        assetId,
        providerAddress,
        reserveAddress,
        periodCount,
        periodAmount,
        periodLength,
        referenceID,
        referenceToken,
        referenceSymbol,
        decimals,
        name,
        symbol,
      });
    }
    console.log({ subscriptions });
    localStorage.setItem(
      `subscription-providers`,
      JSON.stringify({ time, subscriptions })
    );
    setSubscriptions({ time, subscriptions });
  }, [activeAccount]);
  // -------------------------------------------
  // effect: reload tokens on account change
  // -------------------------------------------
  useEffect(() => {
    reloadSubscriptions();
  }, [activeAccount]);
  // -------------------------------------------
  return (
    <div className="AccountBalances">
      {(subscriptions?.subscriptions ?? []).lenght === 0 ? (
        "No providers"
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contract ID</TableCell>
              <TableCell>Token Contract ID</TableCell>
              <TableCell>Token ID</TableCell>
              <TableCell>Reference ID</TableCell>
              <TableCell>Reference Token ID</TableCell>
              <TableCell>Provider Address</TableCell>
              <TableCell>Reserve Address</TableCell>
              <TableCell>Provider Count</TableCell>
              <TableCell>Provider Amount</TableCell>
              <TableCell>Provider Length</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptions?.subscriptions?.map((el, i) => (
              <TableRow key={i}>
                <TableCell>{el.appId}</TableCell>
                <TableCell>{el.assetAppId}</TableCell>
                <TableCell>{el.assetId}</TableCell>
                <TableCell>{el.referenceID}</TableCell>
                <TableCell>{el.referenceToken}</TableCell>
                <TableCell>{el.providerAddress.slice(0, 4)}...</TableCell>
                <TableCell>{el.reserveAddress.slice(0, 4)}...</TableCell>
                <TableCell>
                  {el.periodCount}&nbsp;time{el.providerCount > 1 && "s"}
                </TableCell>
                <TableCell>
                  {el.periodAmount}&nbsp;{el.symbol}
                </TableCell>
                <TableCell>
                  {el.periodLength}&nbsp;block{el.providerLength > 1 && "s"}
                </TableCell>
                <TableCell>
                  <ButtonGroup>
                    {[
                      {
                        label: "S",
                        desciption: "Subscribe",
                        onClick: handleSubscribe(el) /*} async () => {
                          const { algosdk } = stdlib;
                          console.log({ el });
                          console.log([
                            { appId: el.assetAppId },
                            activeAccount.address,
                            `${Number(el.providerCount) * el.providerAmount}.`,
                          ]);
                          await ChildService.approve(
                            { appId: el.assetAppId, decimals: el.decimals },
                            activeAccount.address,
                            algosdk.getApplicationAddress(el.appId),
                            `${Number(el.periodCount) * el.periodAmount}`
                          );
                          await SubscriptionService.Child.subscribe(
                            activeAccount.address,
                            el.appId,
                            el.providerAddress,
                            el.reserveAddress
                          );
                        },*/,
                      },
                      {
                        label: "C",
                        desciption: "Claim",
                        onClick: async () => {
                          const { algosdk } = stdlib;
                          /*
                        await ChildService.deposit(
                          { appId: el.assetAppId, decimals: el.decimals },
                          activeAccount.address,
                          el.providerAddress,
                          "0"
                        );
                        */
                          await SubscriptionService.Child.claim(
                            activeAccount.address,
                            el.appId,
                            el.providerAddress,
                            activeAccount.address,
                            1
                          );
                        },
                      },
                    ].map((el) => (
                      <Tooltip
                        key={el.label}
                        placement="top"
                        title={el.desciption}
                      >
                        <Button onClick={el.onClick}>
                          {el.icon || el.label}
                        </Button>
                      </Tooltip>
                    ))}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default SubscriptionProviders;
