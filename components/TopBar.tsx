import { getCookies, setCookie } from "std/http/cookie.ts";
import { WalletConnect, WalletDisconnect } from "components/buttons";
import AccountSelect from "../components/AccountSelect.tsx";

interface Props {
  web3Allowed: boolean;
  web3Account: string | undefined;
}

export function TopBar({ web3Account, web3Allowed }: Props) {
  return (
    <div className="bg-gray-300 p-4 h-16">
      <div className="flex">
        {web3Allowed
          ? (
            <>
              <AccountSelect selectedAccount={web3Account} />
              <WalletDisconnect />
            </>
          )
          : <WalletConnect />}
      </div>
    </div>
  );
}
