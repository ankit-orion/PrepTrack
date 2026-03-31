import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "90-Day Interview Battle Plan",
  description: "DSA to Interview Ready — Daily Roadmap with 247+ Targeted Problems",
  openGraph: {
     title: "90-Day Interview Battle Plan",
     description: "Master DSA, System Design, and Frontend in 90 Days. Personal tracking for you and your friends.",
     images: [
       {
         url: "/minimalist_banner.png",
         width: 1200,
         height: 630,
         alt: "PrepPlan Preview"
       }
     ],
     type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "90-Day Interview Battle Plan",
    images: ["/minimalist_banner.png"]
  }
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
