import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Navigation/Header";
import { Footer } from "@/components/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Claritiy | Intelligent Operations. Human Excellence.",
  description: "Enterprise-grade BPO solutions powered by AI and human intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link 
          rel="preload" 
          href="/hero-poster.jpg" 
          as="image" 
          // @ts-ignore
          fetchpriority="high" 
        />
        <link 
          rel="preload" 
          href="/hero-video-optimized.mp4" 
          as="video" 
          type="video/mp4" 
          // @ts-ignore
          fetchpriority="high" 
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ 
        "--font-heading": spaceGrotesk.style.fontFamily,
        "--font-body": inter.style.fontFamily,
        "--font-mono": jetbrainsMono.style.fontFamily,
        "--font-accent": outfit.style.fontFamily,
      } as React.CSSProperties}>
        <Header />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
