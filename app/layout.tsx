import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brilla",
  description: "Improve your University learning experience",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  // Check if the current page is "/login" and skip the session check
  /* if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    if (!session && pathname !== "/login") {
      redirect("/login");
    }
  } */

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
