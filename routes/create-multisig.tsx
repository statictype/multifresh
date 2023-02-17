import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { NavBar } from "../components/NavBar.tsx";
import { TopBar } from "../components/TopBar.tsx";

interface Web3Wallet {
  web3Allowed: boolean;
  providers: string[];
  accounts: string[];
  web3Account: string | undefined;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render!(ctx.state);
  },
};

export default function CreateMultisig({ data }: PageProps<Web3Wallet>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="global.css" />
      </Head>
      <div className="grid gap-4 h-full">
        <TopBar web3Allowed={data.web3Allowed} web3Account={data.web3Account} />
        <NavBar />
      </div>
    </>
  );
}
