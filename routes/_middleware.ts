import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { State } from "../types/index.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const cookies = getCookies(req.headers);

  ctx.state = {
    web3Allowed: cookies.web3Allowed === "true",
    web3Account: cookies.web3Account || undefined,
  };

  return await ctx.next();
}
