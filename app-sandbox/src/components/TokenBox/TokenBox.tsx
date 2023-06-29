import React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import MasterService from "../../services/MasterService.ts";
import AssetService from "../../services/AssetService.ts";
import { zeroAddress } from "../../utils/algorand";

const stdlib = makeStdLib();

const bn2n = stdlib.bigNumberToNumber;

interface TokenBoxProps {
  onChange: any;
}

export default function TokenBox(props: TokenBoxProps) {
  alert("TokenBox");
  const { activeAccount } = useWallet();
  // TODO use events from context or hoc
  const [events, setEvents] = useState<any>(
    JSON.parse(localStorage.getItem("event-ready") ?? "{}")?.events ?? []
  );
  const [options, setOptions] = useState<any>(null);
  useEffect(() => {
    (async () => {
      // -------------------------------------------
      // use stored ready events and seek if needed
      // -------------------------------------------
      const storedEvents = JSON.parse(
        localStorage.getItem("event-ready") ?? "{}"
      );
      const events = !storedEvents.time
        ? await MasterService.getReadyEvents(
            activeAccount?.address ?? zeroAddress
          )
        : await MasterService.getReadyEvents(
            activeAccount?.address ?? zeroAddress,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      localStorage.setItem(
        "event-ready",
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      setEvents(newEvents);
      // -------------------------------------------
    })();
  }, [activeAccount]);
  useEffect(() => {
    if (!events) return;
    (async () => {
      const options: any = [];
      for (const e of events) {
        const { what, when } = e;
        const [[appIdBn, assetIdBn]] = what;
        const appId = bn2n(appIdBn);
        const assetId = bn2n(assetIdBn);
        const time = bn2n(when);
        const asset = await AssetService.getAsset(assetId);
        const option = [time, appId, assetId, asset.params];
        options.push(option);
      }
      setOptions(options);
    })();
  }, [events]);
  return (
    options && (
      <Autocomplete
        disabled={!options}
        onChange={props.onChange}
        disablePortal
        id="combo-box-demo"
        options={
          options &&
          options?.map((evt: any) => ({
            label: `${evt[2]}: ${evt[3]?.name || ""}`,
            time: Number(evt[0]),
            appId: Number(evt[1]),
            assetId: Number(evt[2]),
            decimals: Number(evt[3]?.decimals),
            assetParams: Number(evt[3]),
          }))
        }
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={events ? "Tokens" : "Loading..."} />
        )}
      />
    )
  );
}
