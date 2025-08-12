import Link from "next/link";
import { Logo } from "../logo";
import { navbarItems } from "./navbarItems";
import { Button } from "@/components/ui/button";
import { SelectLanguage } from "../select-language";
import { useTranslation } from "react-i18next";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const LogoWithTitle = () => (
    <div className="flex items-center gap-4">
      <Logo className="bg-primary-700" />
      <div className="flex flex-col">
        <h1 className="text-xl lg:text-2xl font-semibold">ISE Consulting</h1>
        <h2 className="text-xs lg:text-sm font-normal">
          International Impact & Social Economy Consulting
        </h2>
      </div>
    </div>
  );

  return (
    <nav className="flex w-full h-20 backdrop-blur-xl bg-white/80 sticky top-0 z-50 justify-between items-center lg:px-10 px-4 border-b border-neutral-200">
      <LogoWithTitle />
      <div className="items-center gap-0 hidden lg:flex">
        {navbarItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <Button variant="link" className="text-base">
              {t(item.label)}
            </Button>
          </Link>
        ))}
        <SelectLanguage className="ml-8" />
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <Button variant="ghost" onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon className="min-w-8 min-h-8" />
        </Button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute left-0 top-0 w-full h-dvh bg-transparent z-10"
            onClick={() => setShowMenu(false)}
          >
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 w-full h-full bg-white z-10 border-b border-neutral-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4 p-4">
                {navbarItems.map((item) => (
                  <Link href={item.href} key={item.label}>
                    <Button
                      variant="link"
                      className="text-base active:text-primary-500 w-full active:bg-primary-100 rounded-md justify-start"
                      onClick={() => setShowMenu(false)}
                    >
                      {t(item.label)}
                    </Button>
                  </Link>
                ))}
                <SelectLanguage className="" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
