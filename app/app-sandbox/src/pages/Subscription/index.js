import * as React from "react";
import SubscriptionService from "../../services/SubscriptionService";
import ARC200Service from "../../services/ARC200Service";
import { useWallet } from "@txnlab/use-wallet";
import { makeStdLib } from "../../utils/reach";
import { fromSome } from "../../utils/common";
import { act } from "react-dom/test-utils";
import moment from "moment";

const stdlib = makeStdLib();

const fa = stdlib.formatAddress;
const fawd = stdlib.formatWithDecimals;
const bn2n = stdlib.bigNumberToNumber;
const bn = stdlib.bigNumberify;

function Page() {
  const { activeAccount } = useWallet();
  //const [loading, setLoading] = React.useState(true);
  const [subscribed, setSubscribed] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [subscription, setSubscription] = React.useState(null);
  const [allowance, setAllowance] = React.useState(null);
  const [providerService, setProviderService] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const appId = 253995654;
  const providerAddress =
    "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24";
  const subscriptionAddress = React.useMemo(
    () => SubscriptionService.getAddress(),
    []
  );
  React.useEffect(() => {
    (async () => {
      const res = await SubscriptionService.getEvents();
      console.log({ res });
    })();
  }, []);
  React.useEffect(() => {
    ARC200Service.getTokenMetadata(appId).then(setToken);
  }, [appId]);
  React.useEffect(() => {
    if (providerService) return;
    SubscriptionService.providerService(providerAddress).then(
      setProviderService
    );
  }, [providerService]);
  React.useEffect(() => {
    if (!activeAccount) return;
    ARC200Service.balanceOf(appId, activeAccount.address).then(setBalance);
  }, [activeAccount]);
  React.useEffect(() => {
    if (!activeAccount || !providerService) return;
    (async () => {
      const [remaining, lastTime, active] =
        await SubscriptionService.subscription(
          providerAddress,
          activeAccount.address
        );
      const elapsed = (await stdlib.getNetworkTime()).sub(lastTime);
      const amountClaimable = elapsed.div(providerService.periodLength);
      const subscription = {
        ...providerService,
        remaining,
        lastTime,
        active,
        elapsed,
        amountClaimable,
      };
      setSubscription(subscription);
    })();
  }, [activeAccount, providerService, subscription]);
  React.useEffect(() => {
    if (allowance) return;
    if (!activeAccount) return;
    ARC200Service.allowance(
      appId,
      activeAccount.address,
      subscriptionAddress
    ).then(setAllowance);
  }, [activeAccount, subscriptionAddress, allowance]);
  React.useEffect(() => {
    if (!activeAccount || !subscription || !allowance) return;
    //setLoading(false);
    console.log({ subscription, allowance });
    setSubscribed(subscription.active && !allowance.eq(bn(0)));
  }, [activeAccount, subscription, allowance]);
  const handleSubscribe = React.useCallback(async () => {
    if (!activeAccount || !subscription || !allowance) return;
    // check minimum balance
    try {
      // check subscription -> subscribe if no subscription
      if (!subscription.active) {
        console.log("No subscription! Subscribing...");
        await SubscriptionService.subscribe(
          activeAccount.address,
          "OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24"
        );
      }
      // check allowance -> approve if no allowance
      if (allowance.eq(bn(0))) {
        console.log("No allowance! Approving spender...");
        const token = await ARC200Service.getTokenMetadata(appId);
        const success = await ARC200Service.approve(
          { ...token, appId },
          activeAccount.address,
          subscriptionAddress,
          bn(token.totalSupply)
        );
        console.log({ success });
        setSubscription(null);
        setAllowance(null);
      }
    } catch (e) {
      console.log(e);
    }
  }, [activeAccount, subscription, allowance]);
  console.log({ subscribed });
  return !activeAccount ? (
    "Connect Wallet"
  ) : /*loading ||*/ !subscription || !allowance ? (
    "loading..."
  ) : !subscribed ? (
    <div>
      <h2>Subscriptions</h2>
      <h3>Provider Service Agreement</h3>
      <p>
        By subscribing, I agree to <br />
        send {fawd(subscription.periodAmount, token.decimals)} {token.symbol}{" "}
        every {bn2n(subscription.periodLength)} blocks.
      </p>
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  ) : (
    <div align="center">
      <h2>Golden</h2>
      <table>
        <tr>
          <td align="left">Balance:</td>
          <td align="right">
            {fawd(balance, token.decimals)} {token.symbol}
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td align="left">Due:</td>
          {subscription.amountClaimable.eq(bn(0)) ? (
            <>
              <td align="right">
                {fawd(subscription.periodAmount, token.decimals)} {token.symbol}{" "}
                due{" "}
                {moment()
                  .add(
                    bn2n(
                      subscription.periodLength
                        .sub(subscription.elapsed)
                        .mul(bn(4))
                    ),
                    "s"
                  )
                  .fromNow()}
              </td>
              <td>&nbsp;</td>
            </>
          ) : (
            <>
              <td align="right">
                {fawd(
                  subscription.amountClaimable.mul(subscription.periodAmount),
                  token.decimals
                )}{" "}
                {token.symbol}
              </td>
              <td>
                <button>Pay</button>
              </td>
            </>
          )}
        </tr>
      </table>
    </div>
  );
}

export default Page;
