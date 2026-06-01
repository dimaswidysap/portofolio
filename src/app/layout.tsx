import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import SmoothScroll from "@/providers/SmoothScroll";
import "./globals.css";
import NavBar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Widy — Illustrator & Front-End Developer",
  description: "Portfolio Widy, seorang illustrator dan front-end developer dari Indonesia.",
  openGraph: {
    title: "Widy — Illustrator & Front-End Developer",
    description: "Portfolio Widy, illustrator & front-end developer.",
    url: "https://widyy.vercel.app",
    siteName: "Widy Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Widy — Illustrator & Front-End Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={montserrat.className}>
        <SmoothScroll>
          <NavBar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
