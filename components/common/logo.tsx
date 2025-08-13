/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={logo.src}
      alt="logo"
      className={cn("size-10 min-w-10 bg-slate-100 rounded-full", className)}
    />
  );
};
