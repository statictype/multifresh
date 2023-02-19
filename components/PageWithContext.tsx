import { Head } from "$fresh/runtime.ts";
import type { PageProps } from "$fresh/server.ts";
import { NavBar } from "../components/NavBar.tsx";
import { TopBar } from "../components/TopBar.tsx";
import { ComponentChildren } from "preact";
import { State } from "../types/index.ts";
import { AppContextProvider } from "./AppContext.tsx";

interface Props extends PageProps<State> {
  children?: ComponentChildren;
}

export function PageWithContext({ children, ...props }: Props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="global.css" />
      </Head>
      <AppContextProvider {...props}>
        <div className="grid gap-4 h-full">
          <TopBar />
          <NavBar />
          {children}
        </div>
      </AppContextProvider>
    </>
  );
}
