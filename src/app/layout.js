import { Inter_Tight } from "next/font/google";
import "./globals.css";
import StripHeader from "@/components/layout/stripHeader/StripHeader";
import Header from "@/components/layout/header/Header";

const inte_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "FreightX",
  description: "Cargo Shipping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inte_tight.className}>
        <StripHeader />
        <Header />
        {children}
      </body>
    </html>
  );
}
