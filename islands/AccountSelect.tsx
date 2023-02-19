import { useAppContext } from "../components/AppContext.tsx";
import { AppState } from "../types/index.ts";

export default function AccountSelect(
  { web3Account }: Partial<AppState>,
) {
  const { accounts } = useAppContext();

  return (
    <>
      <form method="post" action="/api/wallet/setAccount" className="mr-6">
        <select name="selectedAccount" className="mr-3 w-24">
          {accounts.value.length > 0
            ? accounts.value.map(({ address }) => {
              return (
                <option selected={address === web3Account}>
                  {address}
                </option>
              );
            })
            : <option>{web3Account}</option>}
        </select>
        <button type="submit" className="px-4 px-2 bg-white">switch</button>
      </form>
    </>
  );
}
