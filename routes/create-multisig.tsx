import type { Handlers, PageProps } from "$fresh/server.ts";
import { PageWithContext } from "../components/PageWithContext.tsx";
import { State } from "../types/index.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render!(ctx.state);
  },
};

export default function CreateMultisig(props: PageProps<State>) {
  return <PageWithContext {...props}></PageWithContext>;
}
