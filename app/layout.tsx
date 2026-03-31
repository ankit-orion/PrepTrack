import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "90-Day Interview Battle Plan",
  description: "DSA to Interview Ready — Daily Schedule & 30+ Target Companies",
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
