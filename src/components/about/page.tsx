"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

function AboutPage() {
  const mailtoHref =
    "mailto:mukelanilastborn@gmail.com?subject=SendMail&body=Description";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
      <div>
        <Image
          src="/images/animated.gif"
          alt="wololo"
          width={300}
          height={300}
          className="h-4/5 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="mb-4">MGM Group is the about conglomerate.</p>
        <p className="w-full">
          MGM Group, we collaborate with businesses and organizations across a
          wide range of sectors, including education, logistics, and more. Our
          recent partnership with NMA Logistics, a company specializing in bike
          rentals for Uber Eats drivers, exemplifies our commitment to creating
          innovative solutions that benefit communities.
          <span className="hidden md:block">
            We believe that success is built through strong partnerships, and we
            approach every collaboration with fairness, transparency, and mutual
            respect. Our goal is to foster innovation and drive progress
            together. Let's break boundaries and achieve more as a collective.
            Contact us to let work together to create meaningful impact.
          </span>
        </p>

        <div className="mt-4 flex justify-center">
          <Button>
            <Link href="#">.</Link>
            Send us email
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
