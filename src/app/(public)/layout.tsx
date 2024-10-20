//"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import "@/styles/globals.css";

// componentes de Metronic
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchModal from "@/components/SearchModal";

// necesario para GlobaLInit
import dynamic from 'next/dynamic'

// agregar GlobalInit a la lista de componentes dinamicos
const GlobalInit = dynamic(() => import('@/components/GlobalInit'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metronic Testing NextJS APP (PUBLIC)",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Importante, el body incluye className "demo1"
  return (
    <html className="h-full light" data-theme="true" lang="en">
      <body className={`antialiased flex h-full demo1 sidebar-fixed header-fixed bg-[#fefefe] dark:bg-coal-500 ${inter.className}`}>
        
      <div className="flex grow">
        {/* <Sidebar /> */}
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>

      <SearchModal />
      <GlobalInit />


      </body>
    </html>
  );
}
