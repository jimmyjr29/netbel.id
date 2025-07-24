"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Kenapa Bisnis Lokal Butuh Website Profesional?",
    excerpt: "Di era digital, website bukan hanya etalase online. Ia adalah fondasi kepercayaan pelanggan dan kekuatan pemasaran...",
    image: "https://s3-alpha.figma.com/hub/file/3695993906/971184d8-1bfb-4352-b387-2b80fed0832e-cover.png",
    date: "19 Juli 2025",
    link: "/blog/kenapa-website-bisnis",
  },
  {
    id: 2,
    title: "5 Ciri Website yang Membuat Pelanggan Betah",
    excerpt: "Desain menarik saja tidak cukup. Ini 5 hal penting yang membuat pengunjung nyaman dan mau kembali...",
    image: "https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
    date: "10 Juli 2025",
    link: "/blog/ciri-website-bagus",
  },
  {
    id: 3,
    title: "Cara Meningkatkan Penjualan Lewat Website",
    excerpt: "Website yang baik bukan cuma tampil cantik, tapi juga bisa mendatangkan cuan. Simak tips-tipsnya di sini...",
    image: "https://s3-alpha.figma.com/hub/file/3695993906/971184d8-1bfb-4352-b387-2b80fed0832e-cover.png",
    date: "3 Juli 2025",
    link: "/blog/penjualan-dari-website",
  },
  {
    id: 4,
    title: "Kenapa Bisnis Lokal Butuh Website Profesional?",
    excerpt: "Di era digital, website bukan hanya etalase online. Ia adalah fondasi kepercayaan pelanggan dan kekuatan pemasaran...",
    image: "https://s3-alpha.figma.com/hub/file/3695993906/971184d8-1bfb-4352-b387-2b80fed0832e-cover.png",
    date: "19 Juli 2025",
    link: "/blog/kenapa-website-bisnis",
  },
  {
    id: 5,
    title: "5 Ciri Website yang Membuat Pelanggan Betah",
    excerpt: "Desain menarik saja tidak cukup. Ini 5 hal penting yang membuat pengunjung nyaman dan mau kembali...",
    image: "https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
    date: "10 Juli 2025",
    link: "/blog/ciri-website-bagus",
  },
  {
    id: 6,
    title: "Cara Meningkatkan Penjualan Lewat Website",
    excerpt: "Website yang baik bukan cuma tampil cantik, tapi juga bisa mendatangkan cuan. Simak tips-tipsnya di sini...",
    image: "https://s3-alpha.figma.com/hub/file/3695993906/971184d8-1bfb-4352-b387-2b80fed0832e-cover.png",
    date: "3 Juli 2025",
    link: "/blog/penjualan-dari-website",
  },
  {
    id: 7,
    title: "Kenapa Bisnis Lokal Butuh Website Profesional?",
    excerpt: "Di era digital, website bukan hanya etalase online. Ia adalah fondasi kepercayaan pelanggan dan kekuatan pemasaran...",
    image: "https://s3-alpha.figma.com/hub/file/3695993906/971184d8-1bfb-4352-b387-2b80fed0832e-cover.png",
    date: "19 Juli 2025",
    link: "/blog/kenapa-website-bisnis",
  },
  {
    id: 8,
    title: "5 Ciri Website yang Membuat Pelanggan Betah",
    excerpt: "Desain menarik saja tidak cukup. Ini 5 hal penting yang membuat pengunjung nyaman dan mau kembali...",
    image: "https://s3-alpha.figma.com/hub/file/3191449246/22f98b38-ccd9-4dbf-80c1-41d6ee983dc0-cover.png",
    date: "10 Juli 2025",
    link: "/blog/ciri-website-bagus",
  },
  {
    id: 9,
    title: "Cara Meningkatkan Penjualan Lewat Website",
    excerpt: "Website yang baik bukan cuma tampil cantik, tapi juga bisa mendatangkan cuan. Simak tips-tipsnya di sini...",
    image: "https://s3-alpha.figma.com/hub/file/3695993906/971184d8-1bfb-4352-b387-2b80fed0832e-cover.png",
    date: "3 Juli 2025",
    link: "/blog/penjualan-dari-website",
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
          <motion.a
            key={blog.id}
            href={blog.link}
            className="group block bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-1">{blog.date}</p>
              <h3 className="text-lg font-semibold group-hover:text-primary transition text-foreground">{blog.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <Footer />
    </section>
  );
}
