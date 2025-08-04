import React from "react";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "Company Profile Interior",
    image: "/image/portofolios/company-profile.png",
    link: "/.",
  },
  {
    id: 2,
    title: "Open Trip",
    image: "/image/portofolios/opentrip.png",
    link: "/",
  },
  {
    id: 3,
    title: "Company Profile Kontraktor",
    image: "/image/portofolios/kontraktor.png",
    link: "/",
  },
  {
    id: 4,
    title: "Rental Mobil",
    image: "/image/portofolios/rencar.png",
    link: "/",
  },
  {
    id: 5,
    title: "Travel Agensi",
    image: "/image/portofolios/travel.png",
    link: "/",
  },
  {
    id: 6,
    title: "Undangan Online",
    image: "/image/portofolios/undangan.png",
    link: "/",
  },
];

const Portfolio = () => {
  return (
    <div id="portofolio" className="py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Portofolio Kami</h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[10%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[10%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:25s]">
          <PortfolioList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-5 [--duration:25s]">
          <PortfolioList />
        </Marquee>
      </div>
    </div>
  );
};

const PortfolioList = () =>
  portfolios.map((item) => (
    <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="group relative m-2 min-w-[320px] max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-md hover:scale-[1.05] transition-transform">
      <div className="relative w-full h-48">
        {/* <Image src={item.image} alt={item.title} className="w-full h-full object-cover" /> */}
        <Image src={item.image} alt={item.title} width={400} height={300} className="object-cover rounded-lg" unoptimized />

        {/* Overlay text with glass effect */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-background/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">{item.title}</h3>
        </div>
      </div>
    </a>
  ));

export default Portfolio;
