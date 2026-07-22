import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground"
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
