import { Montserrat } from "next/font/google";
import SmoothScroll from "@/providers/SmoothScroll";
import "./globals.css";

import NavBar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Pilih berat font yang dibutuhkan
  variable: "--font-montserrat", // Opsional: jika ingin menggunakan CSS Variable
});

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
