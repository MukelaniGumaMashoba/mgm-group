import Image from "next/image";
import React from "react";

export function Partners() {
  const partners = [
    {
      name: "MG mobile",
      logo: "/images/icon.png",
    },
    {
      name: "BM IT",
      logo: "/images/BM IT.jpg",
    },
    {
      name: "NMA Logistics",
      logo: "/images/wololo.jpg",
    },
    // {
    //   name: "MG",
    //   logo: "/images/wololo.jpg",
    // },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h4 className="mb-10 text-center text-2xl font-semibold">
          Our Partners
        </h4>
        <div className="flex w-full flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grid h-28 grid-cols-1 items-center justify-center rounded-md border-2 bg-black p-2 lg:grid lg:w-auto lg:grid-cols-1"
              
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="mb-4 h-24 w-24 rounded-full object-contain"
                width={100}
                height={100}
              />
              <div className="hidden lg:block">
                <p className="text-center font-medium">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
