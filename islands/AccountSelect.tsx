import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import {
  InjectedAccount,
  InjectedWindow,
} from "@polkadot/extension-inject/types";

interface Props {
  selectedAccount?: string;
}

const accounts = signal<InjectedAccount[]>([]);

async function getInjectedAccounts() {
  const injectedWindow = window as Window & InjectedWindow;
  const pjsWallet = injectedWindow?.injectedWeb3?.["polkadot-js"];
  if (pjsWallet && typeof pjsWallet.enable === "function") {
    const extension = await pjsWallet.enable(
      "Multisig",
    );
    return await extension.accounts.get();
  }
  return [];
}
if (IS_BROWSER) {
  accounts.value = await getInjectedAccounts();
}
export default function AccountSelect({ selectedAccount }: Props) {
  return (
    <>
      <form method="post" action="/api/wallet/setAccount" className="mr-6">
        <select name="selectedAccount" className="mr-3">
          {accounts.value.length > 0 &&
            accounts.value.map(({ address }) => {
              console.log(address);
              return (
                <option selected={address === selectedAccount}>
                  {address}
                </option>
              );
            })}
        </select>
        <button type="submit" className="px-4 px-2 bg-white">switch</button>
      </form>
    </>
  );
}
