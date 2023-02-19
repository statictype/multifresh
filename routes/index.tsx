import type { Handlers, PageProps } from "$fresh/server.ts";
import { AppState } from "../types/index.ts";
import { PageWithContext } from "../components/PageWithContext.tsx";
import { useAppContext } from "../components/AppContext.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render!(ctx.state);
  },
};
function Consumer() {
  const { web3Account } = useAppContext();

  return <span>Connected Account: {web3Account}</span>;
}
export default function Home(props: PageProps<AppState>) {
  return (
    <PageWithContext {...props}>
      <div className="grid place-content-center bg-white h-full">
        <Consumer />
      </div>
    </PageWithContext>
  );
}
