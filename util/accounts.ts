import { InjectedWindow } from "@polkadot/extension-inject/types";

const injectedWindow = window as Window & InjectedWindow;

export async function getInjectedAccounts() {
  const pjsWallet = injectedWindow?.injectedWeb3?.["polkadot-js"];
  if (pjsWallet && typeof pjsWallet.enable === "function") {
    const extension = await pjsWallet.enable(
      "Multisig",
    );
    return await extension.accounts.get();
  }
  return [];
}

export async function maybeInjectedAccounts() {
  if (!injectedWindow.injectedWeb3) throw new Error();
  return await getInjectedAccounts();
}
