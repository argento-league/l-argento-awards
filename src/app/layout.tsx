import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EmotionRegistry from "./registry";
import { Typography } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Argento Awards",
  description: "Sistema de votación para los premios de L'Argento League",
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
        style={{backgroundColor: "#003B57", minHeight: "100vh"}}
      >
        <div
          style={{ width: "100%", height: "80px", backgroundColor: "#00334A", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="h4" style={{color: "#ffffff"}}>
            L&apos; Argento Awards
          </Typography>
        </div>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#003B57", padding: "8px" }}
        >
          <EmotionRegistry>{children}</EmotionRegistry>
        </div>
      </body>
    </html>
  );
}
