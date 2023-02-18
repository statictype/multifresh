import { useAppContext } from "../components/AppContext.tsx";

export default function AccountSelect() {
  const { accounts, web3Account } = useAppContext();

  return (
    <>
      <form method="post" action="/api/wallet/setAccount" className="mr-6">
        <select name="selectedAccount" className="mr-3">
          {accounts.value.map(({ address }) => {
            return (
              <option selected={address === web3Account}>
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
