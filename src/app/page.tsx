import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
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
import { Component } from "@/components/footer/footer";
import { Partners } from "@/components/partners/partners";
import AboutPage from "@/components/about/page";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Team", href: "#partners", current: false },
  { name: "About Us", href: "#about", current: false },
];

export default function Home() {
  return (
    <Sheet>
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
                  {navigation.map((item) => (
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
                  ))}
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

      {/* <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[black] to-[#15162c] p-24 text-white"> */}
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-6 bg-white p-24">
        <div className="flex flex-col items-center justify-between gap-7">
          <div className="justify-items-center rounded-md">
            <h4 className="text-center text-2xl md:text-5xl">
              Enhance Client Loyalt
            </h4>
          </div>
          <p className="text-center text-black md:text-xl">
            Lets Connect and Work as one team. MGM helps businesses
            <br /> all over to succeed. We provide online tools to help them
            interact better
            <br />
            <span className="text-center"> with clients</span>
          </p>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-1/3 bg-black p-1 text-white shadow-lg shadow-slate-400 transition duration-700 ease-in-out md:w-1/4"
            >
              Contact
            </Button>
          </SheetTrigger>
        </div>

        {/* <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
        <div className="mb-10 mt-10 w-full">
          <Image
            className="h-1/5 w-full rounded-3xl"
            src="/images/unity.jpg"
            alt="Next.js Logo"
            width={800}
            height={750}
            priority
          />
        </div>

        <div className="mb-32 grid gap-2 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <Link
            href="#/dashboard"
            className="group rounded-lg border border-transparent bg-black px-5 py-4 text-white transition-colors duration-700 ease-in-out hover:border-2 hover:border-gray-500 hover:bg-white hover:text-black hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              CRM sotware tools{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              With MGM,you get the information you need about event,notes, and
              pipeline data
            </p>
          </Link>

          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border-2 border-black border-transparent px-5 py-4 transition-colors duration-700 ease-in-out hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Software Tools{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Our proffesional technicians can help you with software tools to
              enhance&nbsp;communication with customers!
            </p>
          </Link>

          <Link
            href="#/"
            className="roup rounded-lg border border-transparent bg-black px-5 py-4 text-white transition-colors duration-700 ease-in-out hover:border-2 hover:border-gray-500 hover:bg-white hover:text-black hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Partneship{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore our partnership agreements and contracts with our
              partners.
            </p>
          </Link>

          <Link
            href="#partners"
            className="group rounded-lg border-2 border-black border-transparent px-5 py-4 transition-colors duration-700 ease-in-out hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Community{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly become a part of our community by sending us email.
            </p>
          </Link>
          <p className="block w-full border-2 border-b-black lg:hidden"></p>
        </div>

        <div className="mt-10" id="about">
          <h4 className="mb-10 text-center text-2xl font-semibold">
            Our Company
          </h4>
          <AboutPage />
        </div>

        <div id="partners">
          <Partners />
        </div>
      </main>

      <footer>
        <Component />
      </footer>

      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Contact Us</SheetTitle>
          <SheetDescription>
            Make change. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 items-center justify-center gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              email
            </Label>
            <Input
              id="email"
              placeholder="kWZpX@example.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Message" className="text-right">
              Message
            </Label>
            <Input
              type="textarea"
              id="Message"
              placeholder="Enquire a message"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" variant="default">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
