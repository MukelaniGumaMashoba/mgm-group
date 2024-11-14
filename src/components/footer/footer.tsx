"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltipPreview } from "../employees";

export function Component() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="mb-4 flex items-center sm:mb-0">
            <Image
              src="/images/logos.png"
              alt="Flowbite Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-lg font-semibold">mgm-group</span>
          </div>
          <div>
            <AnimatedTooltipPreview />
          </div>
          <ul className="flex space-x-4 text-sm">
            <li><Link href="#" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="#" className="hover:text-gray-400">Team</Link></li>
            <li><Link href="#" className="hover:text-gray-400">About</Link></li>
            <li><Link href="#" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          © 2024 MGM Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

