import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "@/styles/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metronic Testing NextJS APP",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Importante, el body incluye className "demo1"
  return (
    <html lang="en">
      <body className={`flex h-full demo1 sidebar-fixed header-fixed bg-[#fefefe] dark:bg-coal-500 ${inter.className}`}>{children}</body>
    </html>
  );
}
