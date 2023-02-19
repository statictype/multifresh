import { useAppContext } from "../components/AppContext.tsx";
import { AppState } from "../types/index.ts";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";

{
  // <form method="post" action="/api/wallet/setAccount" className="mr-6">
  //   <select name="selectedAccount" className="mr-3 w-24">
  //     {accounts.value.length > 0
  //       ? accounts.value.map(({ address }) => {
  //         return (
  //           <option selected={address === web3Account}>
  //             {address}
  //           </option>
  //         );
  //       })
  //       : <option>{web3Account}</option>}
  //   </select>
  //   <button type="submit" className="px-4 px-2 bg-gray-700 text-white">
  //     use
  //   </button>
  // </form>
}

export default function AccountSelect(
  { web3Account }: Partial<AppState>,
) {
  const { accounts } = useAppContext();
  console.log("Accounts in island", accounts.value);
  const [selected, setSelected] = useState({
    name: web3Account,
    address: web3Account,
  });

  return (
    <div className="w-72 mr-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {accounts.value.map((acc) => (
                <Listbox.Option
                  key={acc.address}
                  className={({ active }: { active: boolean }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    }`}
                  value={acc}
                >
                  {({ selected }: { selected: boolean }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-bold" : "font-normal"
                        }`}
                      >
                        {acc.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
