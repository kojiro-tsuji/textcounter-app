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
  title: "便利ツール集 | 文字数カウント・パスワード生成・PDF変換",
  description: "無料で使える便利なオンラインツールコレクション。文字数カウンター、安全なパスワード生成、PDF変換を簡単に利用できます。シンプルな操作性と高機能を兼ね備えたツール群。",
  keywords: "オンラインツール, 文字数カウンター, パスワード生成, PDF変換, 無料ツール, テキスト解析, ファイル変換",
  alternates: {
    canonical: "https://textcounter-app.vercel.app",
  },
  openGraph: {
    title: "便利ツール集 | 文字数カウント・パスワード生成・PDF変換",
    description: "無料で使える便利なオンラインツールコレクション。文字数カウンター、パスワード生成、PDF変換などを簡単に利用できます。",
    url: "https://textcounter-app.vercel.app",
    siteName: "便利ツール集",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://textcounter-app.vercel.app/home-ogp.png", // ホーム用OGP画像
        width: 1200,
        height: 630,
        alt: "便利ツール集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "便利ツール集 | 文字数カウント・パスワード生成・PDF変換",
    description: "無料で使える便利なオンラインツールコレクション。",
    images: ["https://textcounter-app.vercel.app/home-ogp.png"],
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
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
