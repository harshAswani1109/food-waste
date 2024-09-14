import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/navbar";


export const metadata: Metadata = {
  title: "Food Waste Management",
  description: "By Pritam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-400">
        <Navbar/>
        <div className="p-12 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
