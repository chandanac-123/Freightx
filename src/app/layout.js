import Footer from "@/components/footer/footer";
import { Inter_Tight, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import StripHeader from "@/components/layout/stripHeader/StripHeader";

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  title: "FreightX",
  description: "Cargo Shipping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.ico" sizes="any" />
      </head>
      <body className={`${inter_tight.variable} ${sora.variable}`}>
        {/* <StripHeader /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
