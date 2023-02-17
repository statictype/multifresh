import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "std/http/cookie.ts";
import { WalletConnect } from "components/buttons";
import AccountSelect  from "../components/AccountSelect.tsx";

interface Web3Wallet {
  isAllowed: boolean
  providers: string[]
  accounts: string[]
  selectedAccount: string | undefined
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers)
    return ctx.render!({ isAllowed: cookies.web3Allowed === "true", selectedAccount: cookies.web3Account || undefined })
  },
};

export default function Home({ data }: PageProps<Web3Wallet>) {
  return (
    <div>
      <div>
         {data.isAllowed ? <AccountSelect selectedAccount={data.selectedAccount}/> : <WalletConnect />}.
      </div>
    </div>
  );
}