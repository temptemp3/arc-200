import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  ButtonGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import TokenBox from "../TokenBox";
import ChildService from "../../services/ChildService.ts";
import AssetService from "../../services/AssetService.ts";
import SubscriptionService, {
  decodeSubscription,
} from "../../services/SubscriptionService.ts";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import { zeroAddress } from "../../utils/algorand";
const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const bn2n = stdlib.bigNumberToNumber;
const fa = stdlib.formatAddress;
function SubscriptionSubscribers() {
  const { activeAccount } = useWallet();
  const [subscriptions, setSubscriptions] = useState(
    JSON.parse(localStorage.getItem(`subscription-subscribers`) ?? "{}")
  );
  const reloadSubscriptions = useCallback(async () => {
    if (!activeAccount) return;

    let deleteEvents = [];
    do {
      const eventName = "delete";
      const eventStorageKey = `event-${eventName}`;
      const storedEvents = JSON.parse(
        localStorage.getItem(eventStorageKey) ?? "{}"
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
        eventStorageKey,
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      deleteEvents = newEvents;
    } while (0);
    const deletedProviderAppIds = deleteEvents
      .filter((el) => el.what[0][0] === "DeleteProvider")
      .map((el) => bn2n(el.what[0][1][0]));
    /*
    const deletedSubscriptions = deleteEvents
      .filter(
        (el) =>
          el.what[0][0] === "DeleteSubscription" &&
          deletedProviderAppIds.includes(bn2n(el.what[0][1][0]))
      )
      .map((el) => el.what[0][1]);
    */

    let subscribeEvents = [];
    do {
      const eventName = "subscribe";
      const eventStorageKey = `event-${eventName}`;
      const storedEvents = JSON.parse(
        localStorage.getItem(eventStorageKey) ?? "{}"
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
        eventStorageKey,
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      subscribeEvents = newEvents;
    } while (0);

    const subscriptions = [];
    const hash = {};
    let time = bn(0);
    for (const event of subscribeEvents) {
      const eventName = "subscribe";
      const {
        appId,
        assetId: assetAppId,
        providerAddress,
        subscriberAddress,
      } = SubscriptionService.Master.decodeEvent(eventName)(event);

      const subscriptionKey = `${appId}-${assetAppId}-${providerAddress}-${subscriberAddress}`;

      if (deletedProviderAppIds.includes(bn2n(appId))) continue;
      if (hash[subscriptionKey]) continue;
      if (subscriberAddress !== activeAccount.address) continue;

      const { remaining, lastTime, active } = decodeSubscription(
        await SubscriptionService.Child.subscription(
          appId,
          providerAddress,
          subscriberAddress
        )
      );
      if (!active) continue;

      time = lastTime;

      const { token: tokenBn } = fromSome(
        await ChildService.state({ appId: assetAppId }),
        {}
      );
      const assetId = bn2n(tokenBn);
      const asset = await AssetService.getAsset(assetId);
      const {
        params: { decimals, name, ["unit-name"]: symbol },
      } = asset;
      subscriptions.push({
        appId,
        assetAppId,
        assetId,
        decimals,
        symbol,
        providerAddress,
        subscriberAddress,
        time: bn2n(time),
        remaining,
      });
      hash[subscriptionKey] = 1;
      localStorage.setItem(
        `subscription-subscribers`,
        JSON.stringify({ time, subscriptions })
      );
      setSubscriptions({ time, subscriptions });
    }
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
      {(subscriptions?.subscriptions ?? []).length === 0 ? (
        "No subscriptions"
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contract ID</TableCell>
              <TableCell>Token Contract ID</TableCell>
              <TableCell>Token ID</TableCell>
              <TableCell>Provider Address</TableCell>
              <TableCell>Remaining</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscriptions?.subscriptions?.map((el) => (
              <TableRow key={el.appId}>
                <TableCell>{el.appId}</TableCell>
                <TableCell>{el.assetAppId}</TableCell>
                <TableCell>{el.assetId}</TableCell>
                <TableCell>{el.providerAddress.slice(0, 4)}...</TableCell>
                <TableCell>
                  {el.remaining}&nbsp;{el.symbol}
                </TableCell>
                <TableCell>
                  <ButtonGroup>
                    {[
                      {
                        label: "S",
                        desciption: "Subscribe",
                        onClick: async () => {
                          const { algosdk } = stdlib;
                          console.log([
                            { appId: el.assetAppId },
                            activeAccount.address,
                            `${Number(el.providerCount) * el.providerAmount}.`,
                          ]);
                          await ChildService.approve(
                            { appId: el.assetAppId, decimals: el.decimals },
                            activeAccount.address,
                            algosdk.getApplicationAddress(el.appId),
                            `${Number(el.providerCount) * el.providerAmount}`
                          );
                          await SubscriptionService.Child.subscribe(
                            activeAccount.address,
                            el.appId,
                            el.providerAddress
                          );
                        },
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

export default SubscriptionSubscribers;
