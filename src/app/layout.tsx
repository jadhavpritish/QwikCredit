import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QwikCredit - Instant Personal Loans Up to ₹2 Lakhs",
  description: "Get instant personal loans with quick approval in 5 minutes. No paperwork, flexible repayment, and competitive interest rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}