"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

function AboutPage() {
  const mailtoHref =
    "mailto:mukelanilastborn@gmail.com?subject=SendMail&body=Description";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <Image
          src="/images/wololo.jpg"
          alt="wololo"
          width={300}
          height={300}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="mb-4">MGM Group is the about conglomerate.</p>
        <p>
          We work along with businesses or organisations in many different
          sectors which include Education , Logistics and many more. Recently we
          have partner up with NMA Logistics which is based in offering bike
          rentals for Uber Eat drivers. Working together as companies to bring
          solutions to communities. Partnership with us is based on terms and
          conditions and we treat everyone equal. MGM Group is here to help
          innovation toward all of us, using Partnership as tool of success. Let
          not limit ourselves, let group work together. Contact us for more
          details.
        </p>

        <div className="mt-4">
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
