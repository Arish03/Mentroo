import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentroo | Discover Your Career Path",
  description:
    "Discover careers, get expert guidance, and build your future with Mentroo.",
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