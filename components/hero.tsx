"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Badge className="hidden md:inline-block bg-primary rounded-full py-1 border-none">Bangun Website Profesional Untuk Bisnismu di NetBel.id 🚀</Badge>
          </motion.div>

          <motion.h1
            className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jasa Pembuatan Website Profesional
          </motion.h1>

          <motion.p className="mt-6 max-w-[60ch] xs:text-lg" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            NetBel menghadirkan solusi web profesional yang modern, cepat, dan terjangkau. Saatnya naik kelas di dunia digital!
          </motion.p>

          <motion.div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Button size="lg" className="w-full sm:w-auto rounded-full text-base">
              <a href="https://wa.me/681949427807?text=Halo%20NetBel%2C%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website." target="_blank" rel="noopener noreferrer">
                Konsultasi sekarang
              </a>
              <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <StatsSection />
      </motion.div>
    </div>
  );
};

export default Hero;
