import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

interface Data {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ isAllowed: cookies.web3Allowed === "true" });
  },
};

export default function Home({ data }: PageProps<Data>) {
  return (
    <div>
      <div>
         {data.isAllowed ? "you are connected" : "please connect wallet"}.
      </div>
    </div>
  );
}