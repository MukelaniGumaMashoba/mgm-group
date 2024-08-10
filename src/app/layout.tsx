import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MGM Group",
  description:
    "MGM group innovation company designed to help businesses and solve solution using technology and combining creative mind as they say creative minds think alike. For more information please contact us.",
  creator: "Mukelani Guma Mashoba",
  applicationName: "MGM Group",
  keywords: ["Technology", "MGM", "Group", "mgm group", "mukelani mashoba"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
