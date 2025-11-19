import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import { Analytics } from "@vercel/analytics/next";
import GAListener from "@/components/GAListener";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dharshan M",
  description:
    "Frontend Developer specializing in React, TypeScript, and modern web development. Creating exceptional digital experiences with clean code and thoughtful design.",
  keywords: [
    "Dharshan",
    "Dharshan M",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "JavaScript",
    "HTML",
    "CSS",
    "Portfolio",
  ],
  authors: [{ name: "Dharshan" }],

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE || "",
  },
  openGraph: {
    title: "Dharshan M",
    description:
      "Passionate frontend developer creating exceptional digital experiences with React, TypeScript, and modern web technologies.",
    url: "https://dharshanm.vercel.app",
    siteName: "Dharshan M",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Dharshan M | Frontend Developer",
    description: "Portfolio of Dharshan M — React & Next.js developer.",
  },

  icons: {
    icon: "/D.png",
    shortcut: "/D.png",
    apple: "/D.png",
    other: [
      { rel: "icon", sizes: "16x16", url: "/D.png" },
      { rel: "icon", sizes: "32x32", url: "/D.png" },
      { rel: "icon", sizes: "48x48", url: "/D.png" },
      { rel: "icon", sizes: "64x64", url: "/D.png" },
      { rel: "mask-icon", color: "#000000", url: "/D.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        <Schema />
        <Analytics />
        <GAListener />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
