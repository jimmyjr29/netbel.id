"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp } from "lucide-react";
import { motion } from "framer-motion";

// const plans = [
//   // (Data sama seperti sebelumnya, dipotong untuk ringkas)
// ];
const plans = [
  {
    name: "Starter",
    price: 1500000,
    description: "Paket hemat untuk UMKM dan portofolio pribadi. Website cepat dan fungsional.",
    features: [
      { title: "1–3 Halaman Website" },
      { title: "Desain Responsif (Mobile Friendly)" },
      {
        title: "Gratis Domain .my.id",
        tooltip: "Domain Indonesia untuk identitas personal atau UMKM.",
      },
      { title: "Hosting 1GB (1 Tahun)" },
      {
        title: "SEO Dasar & Google Index",
        tooltip: "Website mudah ditemukan di Google.",
      },
    ],
    buttonText: "Pesan Paket Starter",
  },
  {
    name: "Advanced",
    price: 3000000,
    description: "Cocok untuk bisnis berkembang yang butuh tampilan profesional dan fitur lebih lengkap.",
    features: [
      { title: "Hingga 5 Halaman Website" },
      { title: "Desain Premium + Responsive" },
      {
        title: "Domain .com / .co.id (1 Tahun)",
        tooltip: "Domain profesional untuk bisnis dan perusahaan.",
      },
      {
        title: "Hosting 3GB + SSL (1 Tahun)",
        tooltip: "Lebih cepat dan aman dengan SSL (https).",
      },
      { title: "Integrasi WhatsApp & Google Maps" },
    ],
    buttonText: "Pesan Paket Advanced",
  },
  {
    name: "Premium",
    price: 5500000,
    isPopular: true,
    description: "Paket lengkap untuk perusahaan dan brand yang butuh kustomisasi dan performa tinggi.",
    features: [
      { title: "Unlimited Halaman (Landing/Profil/Produk)" },
      { title: "Desain Kustom & Animasi Ringan" },
      { title: "Domain + Hosting 10GB (1 Tahun)" },
      {
        title: "Formulir, Galeri, Blog, atau Produk",
        tooltip: "Kami buatkan sesuai kebutuhan kontenmu.",
      },
      {
        title: "CMS (Kelola Konten Sendiri)",
        tooltip: "Update teks, gambar, blog, atau produk melalui dashboard sendiri tanpa perlu kontak developer.",
      },
      { title: "Integrasi Google Analytics & SEO Lanjut" },
    ],
    buttonText: "Pesan Paket Premium",
  },
  {
    name: "Custom",
    price: null,
    description: "Butuh sistem khusus, e-commerce, booking, dashboard, atau integrasi API? Konsultasikan gratis sekarang.",
    features: [
      {
        title: "Sesuai Kebutuhan Anda",
        tooltip: "Fitur dan tampilan akan disesuaikan sepenuhnya dengan kebutuhan Anda.",
      },
      {
        title: "Analisa & Desain Khusus",
        tooltip: "Kami bantu menyusun kebutuhan dan mendesain sistem sesuai tujuan Anda.",
      },
      {
        title: "Estimasi Harga Setelah Diskusi",
        tooltip: "Harga akan ditentukan setelah sesi konsultasi dan analisa kebutuhan.",
      },
      {
        title: "Cocok untuk Startup & Instansi",
        tooltip: "Solusi fleksibel untuk perusahaan rintisan, lembaga, dan proyek digital skala besar.",
      },
      {
        title: "Konsultasi Gratis via WhatsApp",
        tooltip: "Langsung terhubung dengan tim NetBel tanpa biaya.",
      },
    ],
    buttonText: "Diskusikan Sekarang",
  },
];

const Pricing = () => {
  return (
    <TooltipProvider>
      <div id="pricing" className="flex flex-col items-center justify-center py-12 xs:py-20 px-6">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
          Pilihan Paket
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-4 text-center text-muted-foreground max-w-xl">
          Pilih paket yang sesuai dengan kebutuhan bisnismu. Semua paket sudah termasuk domain & hosting 1 tahun.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-12 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: index * 0.4 }}
              className={cn("relative border rounded-xl p-6 bg-background/50", {
                "border-[2px] border-primary bg-background py-10": plan.isPopular,
              })}
            >
              {plan.isPopular && <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">Paling Diminati</Badge>}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-primary">{plan.price ? `Rp${plan.price.toLocaleString("id-ID")}` : "Kustom"}</p>
              <p className="mt-4 font-medium text-muted-foreground">{plan.description}</p>
              <a href={`https://wa.me/+6285121137807?text=${encodeURIComponent(`Halo NetBel! Saya tertarik dengan paket *${plan.name}*. Mohon info lebih lanjut ya.`)}`} target="_blank" rel="noopener noreferrer">
                <Button variant={plan.isPopular ? "default" : "outline"} size="lg" className="w-full mt-6 text-base">
                  {plan.buttonText}
                </Button>
              </a>

              <Separator className="my-8" />

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-2">
                    <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                    <span className="flex items-start gap-1">
                      {feature.title}
                      {feature.tooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CircleHelp className="h-4 w-4 text-muted-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>{feature.tooltip}</TooltipContent>
                        </Tooltip>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </TooltipProvider>
  );
};

export default Pricing;
