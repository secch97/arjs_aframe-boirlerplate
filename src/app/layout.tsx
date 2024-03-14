import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
      <script src="https://aframe.io/releases/1.5.0/aframe.min.js" async></script>

      </header>
      <body className={montserrat.className}>
        <div className="arvr-research">
          {children}
        </div>
      </body>
    </html>
  );
}
