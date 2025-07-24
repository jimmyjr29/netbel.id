"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

export default function TentangKami() {
  return (
    <section id="about" className="py-20 px-4">
      <Navbar />

      <div className="mt-20 max-w-screen-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tentang NetBel</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">NetBel adalah mitra digital Anda dari Belitung. Kami hadir untuk membantu UMKM, bisnis lokal, dan personal branding agar tampil profesional dan dipercaya secara online.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Google Maps */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31807.697010131674!2d107.6006935!3d-2.7435966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22a09a5d42a00b%3A0x9d3bb01340b3b041!2sTanjung%20Pandan%2C%20Belitung%20Regency%2C%20Bangka%20Belitung%20Islands!5e0!3m2!1sen!2sid!4v1712757777721!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          {/* Isi Visi Misi */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold mb-4">Visi</h2>
            <p className="text-muted-foreground mb-6">Menjadi penyedia solusi digital terpercaya yang mengangkat potensi lokal ke level global.</p>

            <Separator className="my-4" />

            <h2 className="text-2xl font-semibold mb-4">Misi</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Membuat website profesional yang mudah dan terjangkau.</li>
              <li>Mengedukasi pelaku usaha tentang pentingnya kehadiran digital.</li>
              <li>Memberikan pelayanan cepat, ramah, dan solutif.</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
