import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScreenHeightSetter from "./components/ScreenHeightSetter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "할래말래",
  description: "고민기록웹",
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
        <ScreenHeightSetter />
        {children}
      </body>
    </html>
  );
}
