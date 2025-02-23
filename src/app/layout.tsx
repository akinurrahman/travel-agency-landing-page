import type { Metadata } from "next";
import { Poppins, Volkhov, Open_Sans,  } from "next/font/google";

import "./globals.css";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const volkhov = Volkhov({
  weight : ["400",  "700"],
  subsets: ["latin"],
  variable: "--font-volkhov",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});



export const metadata: Metadata = {
  title: "Jadoo | Explore the World",
  description: "Discover amazing destinations and book your next trip effortlessly with Jadoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} ${volkhov.variable} ${openSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
