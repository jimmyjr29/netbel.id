import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { TypographyH1 } from "@/components/ui/typography";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ HARUS async function!
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  // Simulasikan fetching data async
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mt-8 mx-auto px-4 py-20">
        <div className="mb-6 text-center">
          <TypographyH1 className="mb-2">{blog.title}</TypographyH1>
          <p className="text-muted-foreground">{blog.date}</p>
        </div>
        <Image src={blog.image} alt={blog.title} width={900} height={500} className="rounded-xl object-cover w-full h-auto shadow" unoptimized />
        <div className="prose prose-neutral dark:prose-invert m-2 max-w-none space-y-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <Link href="/blog" className="text-sm text-primary hover:underline">
          ← Kembali ke Blog
        </Link>
      </section>
      <Footer />
    </>
  );
}
