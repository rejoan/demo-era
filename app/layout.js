import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sharqia Development Authority",
  description: "Sharqia Development Authority"
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-gray-100">
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
