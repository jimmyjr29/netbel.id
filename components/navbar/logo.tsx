import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" className="flex items-center space-x-1">
    <Image src="/logo.png" alt="NetBel Logo" width={32} height={32} className="object-contain" priority />
    <span className="text-xl font-bold text-black dark:text-white">NetBel.id</span>
  </Link>
);
