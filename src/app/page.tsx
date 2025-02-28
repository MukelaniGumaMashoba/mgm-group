import Image from "next/image";
import { Button } from "@/components/ui/button";
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

import { Component } from "@/components/footer/footer";
import { Partners } from "@/components/partners/partners";
import AboutPage from "@/components/about/page";
import { ContactUs } from "@/components/email/email";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import TopNav from "@/components/topNav/page";

export default function Home() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "great",
    },
    {
      text: "partnerships",
    },
    {
      text: "with",
    },
    {
      text: "mgm partners.",
    },
  ];

  return (
    <Sheet>

      <TopNav />

      {/* <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[black] to-[#15162c] p-24 text-white"> */}
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-6 bg-white p-5 md:p-24 lg:p-24">
        <div className="flex flex-col items-center justify-between gap-7">
          <div className="justify-items-center rounded-md">
            <h4 className="text-center text-2xl md:text-5xl">
              Enhance Client Loyalty
            </h4>
            <TypewriterEffectSmooth words={words} />
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
              Let's Talk
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
              Sotware Development{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              With MGM,you get the information you need for your solution and
              we can develop it for you.
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
          <h4 className="text-center text-2xl font-semibold">Our Company</h4>
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
        <ContactUs />
      </SheetContent>
    </Sheet>
  );
}
