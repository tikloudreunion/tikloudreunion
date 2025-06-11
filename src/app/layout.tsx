import type { Metadata } from "next";
import "@/app/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MaterialUIWrapper from "@/app/MaterialUIWrapper";

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
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <MaterialUIWrapper>
          {children}
        </MaterialUIWrapper>‰
      </body>
    </html>
  );
}
