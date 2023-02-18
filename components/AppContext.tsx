import { IS_BROWSER } from "$fresh/runtime.ts";
import type { PageProps } from "$fresh/server.ts";
import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";
import { AppState } from "../types/index.ts";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { signal } from "@preact/signals-core";
import { retry } from "../util/retry.ts";
import { maybeInjectedAccounts } from "../util/accounts.ts";

interface Props extends PageProps<AppState> {
  children?: ComponentChildren;
}

const accounts = signal<InjectedAccount[]>([]);

if (IS_BROWSER) {
  accounts.value = await retry(maybeInjectedAccounts, {
    retries: 3,
    retryIntervalMs: 300,
  });
}

const initial: AppState = {
  web3Allowed: false,
  accounts: accounts,
  web3Account: undefined,
};

const AppContext = createContext<AppState>(initial);

export function AppContextProvider({ children, data }: Props) {
  return (
    <AppContext.Provider value={{ ...data, accounts }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
