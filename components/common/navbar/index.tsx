import Link from "next/link";
import { Logo } from "../logo";
import { navbarItems } from "./navbarItems";
import { Button } from "@/components/ui/button";
import { SelectLanguage } from "../select-language";

export const Navbar = () => {
  return (
    <nav className="flex w-full h-20 bg-white sticky top-0 z-50 justify-between items-center px-10">
      <div className="flex items-center gap-4">
        <Logo className="bg-primary-700" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">ISE Consulting</h1>
          <h2 className="text-sm font-normal">
            International Impact & Social Economy Consulting
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-0">
        {navbarItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <Button variant="link" className="text-base">
              {item.label}
            </Button>
          </Link>
        ))}
        <SelectLanguage />
      </div>
    </nav>
  );
};
