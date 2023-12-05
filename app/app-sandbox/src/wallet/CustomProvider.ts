import {
  PROVIDER_ID,
  Metadata,
  CustomProvider,
  Wallet,
} from "@txnlab/use-wallet";
import type _algosdk from "algosdk";

export class MyCustomProvider implements CustomProvider {
  algosdk: typeof _algosdk;

  constructor(algosdk: typeof _algosdk) {
    this.algosdk = algosdk;
  }

  async connect(metadata: any): Promise<Wallet> {
    // connect to wallet
    const algorand = (window as any).algorand;
    if (!algorand) {
      throw new Error("no wallets are installed!");
    }
    const { genesisHash } = metadata;
    const wallet = await algorand.enable({ genesisHash });
    return {
      accounts: [
        {
          providerId: PROVIDER_ID.CUSTOM,
          name: "kibisis",
          address: wallet.accounts[0].address,
        },
      ],
    };
  }

  async disconnect(): Promise<void> {
    return;
  }

  async reconnect(metadata: Metadata): Promise<Wallet | null> {
    // reconnect to wallet
  }

  async signTransactions(
    connectedAccounts: string[],
    txnGroups: Uint8Array[] | Uint8Array[][],
    indexesToSign?: number[] | undefined,
    returnGroup?: boolean | undefined
  ): Promise<Uint8Array[]> {
    // sign transactions
  }
}
