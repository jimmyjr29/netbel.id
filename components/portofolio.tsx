import React from "react";
import Marquee from "@/components/ui/marquee";

const portfolios = [
  {
    id: 1,
    title: "Sistem Informasi Sekolah",
    image: "https://s3-alpha.figma.com/hub/file/2221064461889239304/resized/1200x720/7ca66cc0-af2f-4051-bba9-111e8c7912dd-cover.png",
    link: "https://example.com/project-1",
  },
  {
    id: 2,
    title: "Website Pariwisata Belitung",
    image: "https://s3-alpha.figma.com/hub/file/2970166630/resized/800x480/10e2b48f-45ea-496d-a209-486ee212bff5-cover.png",
    link: "https://example.com/project-2",
  },
  {
    id: 3,
    title: "Landing Page UMKM Lokal",
    image: "https://s3-alpha.figma.com/hub/file/2224354844914769031/b64a41ed-ad02-4486-a2eb-6bc5ea0312de-cover.png",
    link: "https://example.com/project-3",
  },
  {
    id: 4,
    title: "Company Profile Kontraktor",
    image: "https://s3-alpha.figma.com/hub/file/3677930348/e3421eb5-3604-412d-8fff-96a0d304880e-cover.png",
    link: "https://example.com/project-4",
  },
  {
    id: 5,
    title: "Toko Online Fashion",
    image: "https://s3-alpha.figma.com/hub/file/5999957204/dd434a82-8a1b-45b3-a5e0-84057a10ba17-cover.png",
    link: "https://example.com/project-5",
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
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        {/* Overlay text with glass effect */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-background/50 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">{item.title}</h3>
        </div>
      </div>
    </a>
  ));

export default Portfolio;
