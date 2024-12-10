"use client";

import React from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <div className="bg-white h-screen w-screen px-32">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
