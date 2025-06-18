import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextLabs - The Future of AI",
  description: "The future of AI, with NextLM-2.1, NextLM-Image-1, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
