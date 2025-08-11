import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import { Toaster } from "react-hot-toast";
import LanguageProvider from "./languageProvider";

const font = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISE Consulting",
  description: "International Impact & Social Economy Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LanguageProvider>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
