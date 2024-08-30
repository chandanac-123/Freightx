import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inte_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "FreightX",
  description: "Cargo Shipping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inte_tight.className}>{children}</body>
    </html>
  );
}
