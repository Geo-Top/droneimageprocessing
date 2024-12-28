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
  title: "Geo Top",
  description: "معالجة صور الدرون من خلال Geo Top",
  icons: {
    icon: "/favicon.png", // المسار إلى الأيقونة
    shortcut: "/favicon.png", // خيار إضافي
    apple: "/favicon.png", // للأجهزة التي تدعم أيقونات Apple
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
