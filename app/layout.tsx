import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "文字数カウンター | 簡単テキストカウントツール",
  description: "日本語の文字数を簡単にカウント。全角・半角の区別、スペースのカウントなど、便利な機能を搭載した無料の文字数カウントツールです。",
  keywords: "文字数カウンター, テキストカウント, 文字カウント, 文字数チェック, 全角半角, オンラインツール",
  openGraph: {
    title: "文字数カウンター | 簡単テキストカウントツール",
    description: "日本語の文字数を簡単にカウント。全角・半角の区別、スペースのカウントなど、便利な機能を搭載した無料の文字数カウントツールです。",
    url: "https://textcounter-app.vercel.app",
    siteName: "文字数カウンター",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "文字数カウンター | 簡単テキストカウントツール",
    description: "日本語の文字数を簡単にカウント。全角・半角の区別、スペースのカウントなど、便利な機能を搭載。",
  },
  verification: {
    google: "hSY2Ivsx0GO1nEL-xymnRIaw0696E8vQsOO2IZp0ylk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
