import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { ArrowUpRight } from "lucide-react";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Button className="w-full sm:hidden">
            <a href="https://wa.me/+6285121137807?text=Halo%20NetBel%2C%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website." target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
            <ArrowUpRight className="h-4! w-4!" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
