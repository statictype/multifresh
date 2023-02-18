import { WalletConnect, WalletDisconnect } from "components/buttons";
import AccountSelect from "../islands/AccountSelect.tsx";
import { useAppContext } from "./AppContext.tsx";

export function TopBar() {
  const { web3Allowed } = useAppContext();
  return (
    <div className="bg-gray-300 p-4 h-16">
      <div className="flex">
        {web3Allowed
          ? (
            <>
              <AccountSelect />
              <WalletDisconnect />
            </>
          )
          : <WalletConnect />}
      </div>
    </div>
  );
}
