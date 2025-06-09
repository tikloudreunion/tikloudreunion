import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ti Kloud Réunion",
  description: "Ti Kloud Réunion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
