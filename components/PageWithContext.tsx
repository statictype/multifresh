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
      <AppContextProvider {...props.data}>
        <div className="grid grid-cols-12 grid-rows-12 gap-4 min-h-screen">
          <div className="row-span-1 col-span-12">
            <TopBar />
          </div>
          <div className="row-span-1 col-span-12 bg-blue-100">
            <NavBar />
          </div>
          <div className="row-span-5 col-span-10 col-start-2 bg-blue-100">
            {children}
          </div>
        </div>
      </AppContextProvider>
    </>
  );
}
