import { useState, useMemo, useEffect, useCallback } from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";
import TextInputBase from "../TextInputBase/index.tsx";
import { useWallet } from "@txnlab/use-wallet";
import ARC200Service from "../../services/ARC200Service.ts";
import { makeStdLib } from "../../utils/reach.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const paramsTemplate = {
  zeroAddress: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ", // 58 chars
  managerAddress: "", // 58 chars
  enableZeroAddressBurn: true, // true|false
  meta: {
    name: "", // 0-32 chars
    symbol: "", // 0-8 chars
    decimals: -1, // 0-19
    totalSupply: -1, // log10(UInt.max)
  },
};

const stdlib = makeStdLib();
const bn = stdlib.bigNumberify;
const fc = stdlib.formatCurrency;
const bn2n = stdlib.bigNumberToNumber;
const fawd = stdlib.formatWithDecimals;

function MintForm({
  token,
  tokens,
  setToken,
  setTokenAmount,
  setAccountAddress,
}) {
  const navigate = useNavigate();
  const { activeAccount, providers } = useWallet();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [decimals, setDecimals] = useState(0);
  const [totalSupply, setTotalSupply] = useState(1);
  const [managerAddress, setManagerAddress] = useState("");
  const [doSubmit, setDoSubmit] = useState(false);
  const [ctcInfo, setCtcInfo] = useState();
  const [progress, setProgress] = useState(false);
  const [step, setStep] = useState(0);
  console.log({ name, symbol, decimals, totalSupply, step });
  const isValid = useMemo(() => {
    return true; // TODO implement me
  }, [name, symbol, decimals, totalSupply, managerAddress]);
  const handleMint = useCallback(() => {
    if (!activeAccount) {
      providers
        .filter((el) => el.metadata.id === activeAccount.providerId)[0]
        .connect();
    }
    setDoSubmit(true);
  }, [
    activeAccount,
    providers,
    name,
    symbol,
    decimals,
    totalSupply,
    managerAddress,
    isValid,
  ]);
  useEffect(() => {
    if (!doSubmit) return;
    (async () => {
      setProgress(true);
      try {
        console.log(`${name} ${symbol} ${decimals} ${totalSupply}`);
        const params = {
          ...paramsTemplate,
          managerAddress: activeAccount.address,
          ...{
            meta: {
              name,
              symbol,
              decimals,
              totalSupply: stdlib.parseCurrency(totalSupply, Number(decimals)),
            },
          },
        };
        const ctcInfo = await ARC200Service.launch(
          activeAccount.address,
          params
        );
        //setCtcInfo(ctcInfo);
        const tokens = JSON.parse(
          localStorage.getItem("tokens") ?? "[249906631]"
        );
        localStorage.setItem(
          "tokens",
          JSON.stringify([...tokens, bn2n(ctcInfo)])
        );
        toast(
          <div>
            Mint successful!
            <br />
            {totalSupply} {symbol} sent to {activeAccount.address.slice(0, 4)}
            ...{activeAccount.address.slice(-4)}
          </div>
        );
        navigate("/");
      } catch (e) {
        console.log(e);
      } finally {
        setDoSubmit(false);
        setProgress(false);
      }
    })();
  }, [doSubmit]);
  return (
    <div className="MintForm" style={{ textAlign: "left" }}>
      {ctcInfo ? (
        <div>{bn2n(ctcInfo)}</div>
      ) : progress ? (
        <Stack
          gap={5}
          direction="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
          <Typography variant="h6">Transaction pending...</Typography>
        </Stack>
      ) : step === 0 ? (
        <Stack spacing={2} style={{ textAlign: "left" }}>
          {[
            {
              name: "meta.name",
              label: "Name",
              type: "text",
              value: name,
              onChange: (e) => setName(e.target.value),
            },
            {
              name: "meta.symbol",
              label: "Symbol",
              type: "text",
              value: symbol,
              onChange: (e) => setSymbol(e.target.value),
            },
            {
              name: "meta.decimals",
              id: "decimals",
              label: "Decimals",
              type: "number",
              value: decimals,
              onChange: (e) => setDecimals(e.target.value),
            },
            {
              name: "meta.totalSupply",
              label: "Total Supply",
              type: "number",
              value: totalSupply,
              onChange: (e) => {
                const newValue = e.target.value;
                try {
                  const numStr = stdlib.formatWithDecimals(
                    stdlib.parseCurrency(e.target.value, Number(decimals)),
                    Number(decimals)
                  );
                  setTotalSupply(numStr);
                } catch (e) {
                  //console.log(e);
                }
              },
            },
          ].map(({ name, label, type, value, onChange }) => (
            <TextInputBase
              value={value}
              type={type}
              onChange={onChange}
              label={label}
            />
          ))}
          <Button
            variant="text"
            onClick={() => {
              setStep(1);
            }}
          >
            Next
            <ArrowRightIcon />
          </Button>
        </Stack>
      ) : (
        step === 1 && (
          <Stack spacing={2} style={{ textAlign: "left", height: "408px" }}>
            <table>
              <tablebody>
                {[
                  {
                    name: "meta.name",
                    label: "Name",
                    type: "text",
                    disabled: true,
                    value: name,
                  },
                  {
                    name: "meta.symbol",
                    label: "Symbol",
                    type: "text",
                    disabled: true,
                    value: symbol,
                  },
                  {
                    name: "meta.decimals",
                    id: "decimals",
                    label: "Decimals",
                    type: "number",
                    disabled: true,
                    value: decimals,
                  },
                  {
                    name: "meta.totalSupply",
                    label: "Total Supply",
                    type: "number",
                    disabled: true,
                    value: totalSupply,
                  },
                ].map(({ label, value }) => (
                  <tr>
                    <td style={{ width: "100px", textAlign: "left" }}>
                      {label}:
                    </td>
                    <td style={{ width: "300px", textAlign: "right" }}>
                      {value}
                    </td>
                  </tr>
                ))}
              </tablebody>
            </table>
            <ButtonGroup fullWidth>
              <Button
                variant="text"
                onClick={() => {
                  setStep(0);
                }}
              >
                <ArrowLeftIcon />
                Back
              </Button>
              <Button color="success" variant="contained" onClick={handleMint}>
                Mint
              </Button>
            </ButtonGroup>
          </Stack>
        )
      )}
    </div>
  );
}

export default MintForm;
