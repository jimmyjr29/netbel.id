// app/blog/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { blogs } from "@/lib/blogs";

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
