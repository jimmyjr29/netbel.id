import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "NetBel.id - Jasa Pembuatan Website Modern & Terjangkau",
//   description: "NetBel.id adalah layanan jasa pembuatan website profesional untuk UMKM, company profile, travel, wedding invitation, dan banyak lagi. Bangun kehadiran digitalmu dengan desain elegan dan harga terjangkau.",
//   keywords: [
//     "NetBel",
//     "NetBel.id",
//     "Jasa Pembuatan Website",
//     "Web UMKM",
//     "Web Travel",
//     "Web Company Profile",
//     "Web Open Trip",
//     "Web Fotografer",
//     "Web Rental Motor",
//     "Web Rental Mobil",
//     "Web Sistem Informasi",
//     "Web Undangan",
//     "Web Undangan Online",
//     "Landing Page Modern",
//     "Website Murah",
//     "Jasa Website Profesional",
//   ],
//   openGraph: {
//     type: "website",
//     siteName: "NetBel.id",
//     locale: "id_ID",
//     url: "https://netbel.my.id",
//     title: "NetBel.id - Jasa Pembuatan Website Modern & Terjangkau",
//     description: "NetBel.id melayani pembuatan website dengan desain elegan, harga bersahabat, dan pengerjaan cepat. Cocok untuk UMKM, personal brand, hingga perusahaan.",
//     images: [
//       {
//         url: "/og-netbel.png", // Gantilah dengan gambar Open Graph NetBel
//         width: 1200,
//         height: 630,
//         alt: "NetBel.id - Jasa Pembuatan Website",
//       },
//     ],
//   },
//   authors: [
//     {
//       name: "NetBel Team",
//       url: "https://netbel.my.id",
//     },
//   ],
//   creator: "NetBel Studio",
//   icons: [
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/logo-32.png",
//       sizes: "32x32",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/logo-16.png",
//       sizes: "16x16",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/logo-192.png",
//       sizes: "192x192",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/logo-512.png",
//       sizes: "512x512",
//     },
//   ],

//   robots: {
//     index: true,
//     follow: true,
//   },
//   manifest: "/site.webmanifest",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://netbel.my.id"),
  title: "NetBel.id - Jasa Pembuatan Website Modern & Terjangkau",
  description: "NetBel.id adalah layanan jasa pembuatan website profesional untuk UMKM, company profile, travel, wedding invitation, dan banyak lagi. Bangun kehadiran digitalmu dengan desain elegan dan harga terjangkau.",
  keywords: [
    "NetBel",
    "NetBel.id",
    "Jasa Pembuatan Website",
    "Web UMKM",
    "Web Travel",
    "Web Company Profile",
    "Web Open Trip",
    "Web Fotografer",
    "Web Rental Motor",
    "Web Rental Mobil",
    "Web Sistem Informasi",
    "Web Undangan",
    "Web Undangan Online",
    "Landing Page Modern",
    "Website Murah",
    "Jasa Website Profesional",
  ],
  openGraph: {
    type: "website",
    siteName: "NetBel.id",
    locale: "id_ID",
    url: "https://netbel.my.id",
    title: "NetBel.id - Jasa Pembuatan Website Modern & Terjangkau",
    description: "NetBel.id melayani pembuatan website dengan desain elegan, harga bersahabat, dan pengerjaan cepat. Cocok untuk UMKM, personal brand, hingga perusahaan.",
    images: [
      {
        url: "/og-netbel.png",
        width: 1200,
        height: 630,
        alt: "NetBel.id - Jasa Pembuatan Website",
      },
    ],
  },
  authors: [
    {
      name: "NetBel Team",
      url: "https://netbel.my.id",
    },
  ],
  creator: "NetBel Studio",
  icons: [
    { rel: "icon", type: "image/png", url: "/logo-32.png", sizes: "32x32" },
    { rel: "icon", type: "image/png", url: "/logo-16.png", sizes: "16x16" },
    { rel: "icon", type: "image/png", url: "/logo-192.png", sizes: "192x192" },
    { rel: "icon", type: "image/png", url: "/logo-512.png", sizes: "512x512" },
  ],
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
