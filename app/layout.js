import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarProvider } from "@/context/NavbarChange";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

const PPNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/montreal-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/montreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/montreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/montreal-thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Captain - Your Stress-Free Mover",
  description: "Making moving easy and efficient",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PPNeueMontreal.className}>
        <SmoothScroll>
          <NavbarProvider>{children}</NavbarProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
