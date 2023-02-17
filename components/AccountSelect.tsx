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
    <form method="post" action="/api/wallet/setAccount" className="mr-6">
      <select name="selectedAccount" className="mr-3">
       { ACCOUNTS.map((name)=><option selected={name === selectedAccount}>{name}</option>) }
      </select>
      <button type="submit" className="px-4 px-2 bg-white">switch</button>
    </form>
    </>
  );
}