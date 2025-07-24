"use client";

import { Blocks, Clock, MapPin, Settings2, ShieldCheck, Tag } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Blocks,
    title: "Desain Modern & Mobile Friendly",
    description: "Website tampil keren di semua perangkat — HP, tablet, dan laptop.",
  },
  {
    icon: Clock,
    title: "Proses Cepat & Terstruktur",
    description: "Rata-rata selesai 2-3 Minggu. Transparan & tanpa ribet.",
  },
  {
    icon: Settings2,
    title: "Bisa Custom Sesuai Kebutuhan",
    description: "Website UMKM, sekolah, Portofolio, Undangan Digital, Opentrip, Travel, Jasa Rental, Dan sebagainya, semua bisa kami bantu.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Cepat",
    description: "Hosting cepat + domain gratis tahun pertama (untuk paket tertentu).",
  },
  {
    icon: MapPin,
    title: "Support Lokal, dari Belitung",
    description: "Komunikasi mudah & bisa diskusi langsung dengan tim lokal.",
  },
  {
    icon: Tag,
    title: "Harga Terjangkau",
    description: "Harga terjangkau dan menyesuaikan kebutuhan. Bisa bayar bertahap!",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <div className="text-center">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">Kenapa Harus NetBel.id?</h2>
        <p className="mt-6 max-w-[80ch] mx-auto xs:text-lg">Solusi lengkap untuk Anda yang ingin punya website keren, cepat, dan sesuai kebutuhan.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.1 }} className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </motion.div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
