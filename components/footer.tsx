import { Separator } from "@/components/ui/separator";
import { MessageCircleMore, MapPin, MailIcon, Instagram, Facebook, Globe } from "lucide-react";
import Link from "next/link";
import { Logo } from "./navbar/logo";

const footerLinks = [
  {
    title: "Fitur",
    href: "#features",
  },
  {
    title: "Pilihan Paket",
    href: "#pricing",
  },
  {
    title: "Portofolio",
    href: "#portofolio",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "Testimoni",
    href: "#testimonials",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Tentang Kami",
    href: "#about",
  },
];

const Footer = () => {
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            {/* Logo dari Navbar ajeee*/}
            <Logo />

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="text-muted-foreground hover:text-foreground">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          <div className="max-w-xs w-full">
            <h6 className="mb-2 font-semibold ">Tentang Kami</h6>
            <div className="mt-2 flex items-center gap-2">
              <MapPin size={14} /> <small> Jalan Masda Adisucipto, Tanjungpandan, Belitung</small>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <MailIcon size={14} /> <small> netbel.id@gmail.com</small>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <MessageCircleMore size={14} /> <small> +62 819-4942-7807</small>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              NetBel.id
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Globe className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
