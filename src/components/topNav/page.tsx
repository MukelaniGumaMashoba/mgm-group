import React from 'react'
import { NavigationMenuDemo } from '../Navigation/navbar'
import Image from 'next/image'
import { SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from "@headlessui/react";
  import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
  import { cn } from "@/lib/utils";
export default function TopNav() {

    const navigation = [
        { name: "Home", href: "#", current: true },
        { name: "Team", href: "#partners", current: false },
        { name: "About Us", href: "#about", current: false },
        { name: "Education", href: "/education", current: false },
      ];

  return (
    <div>
      <Disclosure as="nav" className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          {/* <div className="px-2 sm:px-6 lg:px-8"> */}
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-row items-center justify-evenly sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={cn(
                        item.current
                          ? "text-gray-900 hover:bg-black hover:text-white"
                          : "text-gray-900 hover:bg-black hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))} */}
                  <NavigationMenuDemo />
                </div>
              </div>
            </div>

            <div className="items-center">
              <Image
                alt="mgm"
                src="/images/logo.png"
                width={210}
                height={220}
                className="-ml-0 h-24 w-32 rounded-3xl bg-white md:-ml-20 md:h-28 md:w-60"
              />
            </div>

            <div className="flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-black text-white"
                >
                  Contact
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={cn(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

    </div>
  )
}
