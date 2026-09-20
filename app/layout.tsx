import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DN Studios — Devam Namera | Founder & Lead Developer",
  description: "DN Studios is an independent digital studio creating premium websites, applications and custom software.",
  applicationName: "DN Studios",
  keywords: ["DN Studios","Devam Namera","web development","mobile applications","web applications","e-commerce","custom software"],
  authors: [{ name: "Devam Namera" }],
  creator: "Devam Namera",
  metadataBase: new URL("https://dnstudios.site"),
  openGraph: {
    title: "DN Studios — Private Digital Works",
    description: "Premium websites, applications and custom software by DN Studios.",
    url: "https://dnstudios.site",
    siteName: "DN Studios",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}