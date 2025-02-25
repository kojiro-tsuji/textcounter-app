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
  title: "文字数カウンター | オンラインで簡単テキストカウント",
  description: "無料で使える文字数カウントツール。文章の文字数を瞬時にカウント。全角・半角の区別、スペースのカウントに対応。SNSの投稿、レポート作成、文章校正に最適。",
  keywords: "文字数カウンター, テキストカウント, 文字カウント, 文字数チェック, 全角半角, オンラインツール, 無料, リアルタイム, SNS, Twitter, 校正",
  alternates: {
    canonical: "https://textcounter-app.vercel.app",
  },
  openGraph: {
    title: "文字数カウンター | オンラインで簡単テキストカウント",
    description: "無料で使える文字数カウントツール。文章の文字数を瞬時にカウント。全角・半角の区別、スペースのカウントに対応。SNSの投稿、レポート作成、文章校正に最適。",
    url: "https://textcounter-app.vercel.app",
    siteName: "文字数カウンター",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://textcounter-app.vercel.app/ogp.png", // 後でOGP画像を追加する予定
        width: 1200,
        height: 630,
        alt: "文字数カウンター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "文字数カウンター | オンラインで簡単テキストカウント",
    description: "無料の文字数カウントツール。全角・半角対応、スペースカウント機能付き。",
    images: ["https://textcounter-app.vercel.app/ogp.png"], // 後でOGP画像を追加する予定
  },
  verification: {
    google: "hSY2Ivsx0GO1nEL-xymnRIaw0696E8vQsOO2IZp0ylk",
  },
  category: "tools",
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
