import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DN Studios — Devam Namera | Founder & Lead Developer",
  description: "DN Studios — premium web, mobile applications, web applications, e-commerce and custom software by Devam Namera.",
  keywords: ["DN Studios", "Devam Namera", "Web Development", "Mobile Apps", "E-Commerce", "Custom Software", "Digital Products"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
