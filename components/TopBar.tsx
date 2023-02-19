import { WalletConnect, WalletDisconnect } from "components/buttons";
import AccountSelect from "../islands/AccountSelect.tsx";
import { useAppContext } from "./AppContext.tsx";

export function TopBar({}: { web3Account?: string }) {
  const { web3Allowed, web3Account } = useAppContext();
  return (
    <div className="bg-gray-300 p-4 h-16">
      <div className="flex">
        {web3Allowed
          ? (
            <>
              <AccountSelect
                web3Account={web3Account}
              />
              <WalletDisconnect />
            </>
          )
          : <WalletConnect />}
      </div>
    </div>
  );
}
