// app/blog/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const blogs = [
  {
    slug: "manfaat-blog-di-website-bisnis",
    title: "Kenapa Website Bisnis Perlu Punya Blog?",
    excerpt: "Banyak pemilik bisnis menganggap blog hanya cocok untuk penulis atau influencer. Padahal, blog di website .......",
    date: "2 Agustus 2025",
    image: "/image/blog/blog1.png",
  },
  {
    slug: "kenapa-website-bisnis",
    title: "Kenapa Bisnis Lokal Butuh Website Profesional?",
    excerpt: "Di era digital, website bukan hanya etalase online. Ia adalah fondasi kepercayaan pelanggan dan kekuatan pemasaran...",
    date: "19 Juli 2025",
    image: "/image/blog/blog1.png",
  },
  {
    slug: "ciri-website-bagus",
    title: "5 Ciri Website yang Membuat Pelanggan Betah",
    excerpt: "Desain menarik saja tidak cukup. Ini 5 hal penting yang membuat pengunjung nyaman dan mau kembali...",
    date: "10 Juli 2025",
    image: "/image/blog/blog2.png",
  },
  {
    slug: "penjualan-dari-website",
    title: "Cara Meningkatkan Penjualan Lewat Website",
    excerpt: "Website yang baik bukan cuma tampil cantik, tapi juga bisa mendatangkan cuan. Simak tips-tipsnya di sini...",
    date: "3 Juli 2025",
    image: "/image/blog/blog3.png",
  },
  {
    slug: "seo-untuk-umkm",
    title: "Panduan SEO untuk UMKM Pemula",
    excerpt: "SEO bukan hanya untuk perusahaan besar. UMKM juga bisa meraih halaman pertama Google dengan strategi tepat...",
    date: "25 Juni 2025",
    image: "/image/blog/blog4.png",
  },
  {
    slug: "perbedaan-website-dan-sosmed",
    title: "Website vs Sosial Media: Mana yang Lebih Penting?",
    excerpt: "Banyak pemilik bisnis bertanya, apakah cukup hanya dengan Instagram? Simak perbedaan, kelebihan, dan cara menggabungkan keduanya.",
    date: "15 Juni 2025",
    image: "/image/blog/blog5.png",
  },
];

export default function BlogPage() {
  return (
    <section id="blog" className="py-20 px-4">
      <Navbar />

      <div className="mt-10 max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Blog & Artikel</h2>
        <p className="mt-2 text-muted-foreground">Tips, insight, dan inspirasi seputar dunia website & digital presence.</p>
      </div>

      <div className="max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={`/blog/${blog.slug}`} className="block">
              <Image src={blog.image} alt={blog.title} width={600} height={300} className="w-full h-48 object-cover" unoptimized />
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{blog.date}</p>
                <h3 className="text-lg font-semibold group-hover:text-primary transition text-foreground">{blog.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Footer />
    </section>
  );
}
