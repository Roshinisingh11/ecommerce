import "./globals.css";
import type { Metadata } from "next";
import { poppinsRegularFont } from "fonts";
import Providers from "@/shared/Providers";
import { IChildren } from "types";
import MobileVersion from "@/components/mobile";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body className={`${poppinsRegularFont.className} `}>
        {}
        <div className="hidden flex-col min-h-screen xl:flex">
          <Providers>{children}</Providers>
        </div>
        <MobileVersion />
      </body>
    </html>
  );
}
