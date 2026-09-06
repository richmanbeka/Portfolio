import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "richmanbeka",
  description:
    "Portfolio of Robera Mulgeta, a software developer passionate about building modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}