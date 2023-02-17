import { Handlers } from "$fresh/server.ts";
import { WalletDisconnect } from "components/buttons";
import { setCookie, getCookies } from "std/http/cookie.ts";

interface Props {
  selectedAccount?: string
}

const ACCOUNTS = ["Alice", "Bob", "Charlie"];

export default function AccountSelect({selectedAccount}:Props) {
  return (
    <>
    <form method="post" action="/api/wallet/setAccount">
      <select name="selectedAccount">
       { ACCOUNTS.map((name)=><option selected={name === selectedAccount}>{name}</option>)}
      </select>
      <button type="submit">switch</button>
    </form>
    <WalletDisconnect />
    </>
  );
}