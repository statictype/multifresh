import { InjectedAccount } from "@polkadot/extension-inject/types";
import { Signal } from "@preact/signals-core";

export interface AppState {
  web3Allowed: boolean;
  accounts: Signal<InjectedAccount[]>;
  web3Account: string | undefined;
}
