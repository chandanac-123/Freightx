import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import StripHeader from "@/components/stripHeader/StripHeader";
import { Inter_Tight, Sora } from "next/font/google";
import "./globals.css";

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
        <StripHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
