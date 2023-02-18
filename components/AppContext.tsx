import { IS_BROWSER } from "$fresh/runtime.ts";
import type { PageProps } from "$fresh/server.ts";
import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";
import { AppState } from "../types/index.ts";
import {
  InjectedAccount,
  InjectedWindow,
} from "@polkadot/extension-inject/types";
import { signal } from "@preact/signals-core";

const injectedWindow = window as Window & InjectedWindow;

async function getInjectedAccounts() {
  const pjsWallet = injectedWindow?.injectedWeb3?.["polkadot-js"];
  if (pjsWallet && typeof pjsWallet.enable === "function") {
    const extension = await pjsWallet.enable(
      "Multisig",
    );
    return await extension.accounts.get();
  }
  return [];
}

interface Props extends PageProps<AppState> {
  children?: ComponentChildren;
}

const accounts = signal<InjectedAccount[]>([]);

const initial: AppState = {
  web3Allowed: false,
  accounts: accounts,
  web3Account: undefined,
};

const AppContext = createContext<AppState>(initial);

if (IS_BROWSER) {
  accounts.value = await getInjectedAccounts();
}

export function AppContextProvider({ children, data }: Props) {
  return (
    <AppContext.Provider value={{ ...data, accounts }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
