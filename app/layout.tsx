import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from './components/Header';
import "./globals.css";
import {AuthProvider} from "../lib/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avis DMS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
              <AuthProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Header/>

        <main className="container mx-auto p-4">{children}</main>
      </body>
      </AuthProvider>
    </html>
  );
}
