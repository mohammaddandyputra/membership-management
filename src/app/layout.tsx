import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider, ToastProvider } from "@/providers";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Membership Management",
  description:
    "A user-friendly PWA application designed to streamline membership management, track member activities, and provide seamless access to member benefits.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/icon-192x192.png" },
    { rel: "icon", url: "icons/icon-512x512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`antialiased`}>
        <NextUIProvider>
          <ToastProvider>
            {children}
            <ToastContainer />
          </ToastProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
