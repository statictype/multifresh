import type { Handlers, PageProps } from "$fresh/server.ts";
import { AppState } from "../types/index.ts";
import { PageWithContext } from "../components/PageWithContext.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render!(ctx.state);
  },
};

export default function Home(props: PageProps<AppState>) {
  return <PageWithContext {...props}></PageWithContext>;
}
