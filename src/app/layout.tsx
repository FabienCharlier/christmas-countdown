import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const lastChristmasFont = localFont({
  src: "./fonts/LastChristmas.otf",
});

export const metadata: Metadata = {
  title: "Christmas coundown",
  description: "Counting the days before christmas ? We do too !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lastChristmasFont.className}>
      <body>{children}</body>
    </html>
  );
}
