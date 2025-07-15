import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import OurQueryProvider from "@/app/providers/OurQueryProvider";
import NavBar from "../components/NavBar";
import queryClient from "../lib/react-query-client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MiniCommerce",
  description: "Order your dream furniture today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OurQueryProvider client={queryClient}>
          <NavBar />
          {children}
        </OurQueryProvider>
      </body>
    </html>
  );
}
