import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import OurQueryProvider from "@/components/providers/OurQueryProvider";
import NavBar from "../components/NavBar";

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
                <NavBar />
                <OurQueryProvider>{children}</OurQueryProvider>
            </body>
        </html>
    );
}
