import { InjectedAccount } from "@polkadot/extension-inject/types";
import { Signal } from "@preact/signals-core";

export interface AppState extends State {
  accounts: Signal<InjectedAccount[]>;
}
export interface State {
  web3Allowed: boolean;
  web3Account: string | undefined;
}
