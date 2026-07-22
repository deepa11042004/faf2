import type { Metadata } from "next";
import { Inter, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins" 
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Family Anchor Facilities Pvt. Ltd. | Trusted Security Solutions",
  description: "Your Trusted Partner in Comprehensive Security & Facilities. Delivering advanced surveillance systems, fire safety, access control, and professional security services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${bebas.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
