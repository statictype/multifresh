import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getCookies, setCookie } from "std/http/cookie.ts";
import { WalletConnect, WalletDisconnect } from "components/buttons";
import AccountSelect from "../components/AccountSelect.tsx";

interface Web3Wallet {
  isAllowed: boolean;
  providers: string[];
  accounts: string[];
  selectedAccount: string | undefined;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({
      isAllowed: cookies.web3Allowed === "true",
      selectedAccount: cookies.web3Account || undefined,
    });
  },
};

export default function Home({ data }: PageProps<Web3Wallet>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="global.css" />
      </Head>
      <div className="grid gap-4 h-full">
        <div className="bg-gray-300 p-4 h-16">
          <div className="flex">
            {data.isAllowed
              ? (
                <>
                  <AccountSelect selectedAccount={data.selectedAccount} />
                  <WalletDisconnect />
                </>
              )
              : <WalletConnect />}
          </div>
        </div>
        <div className="flex">
          <a href="/">All multisigs</a>
          <a href="/create-multisig">Create multisig</a>
        </div>
      </div>
    </>
  );
}
