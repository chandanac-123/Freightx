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
      <head>
        <link rel="icon" href="./icon.ico" sizes="any" />
      </head>
      <body className={inte_tight.className}>{children}</body>
    </html>
  );
}
