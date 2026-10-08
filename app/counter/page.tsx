import type { Metadata } from "next";
import TextCounter from '../components/TextCounter';
import Layout from '../components/Layout';
import OtherTools from '../components/OtherTools';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "文字数カウンター | オンラインで簡単テキストカウント",
  description: "無料で使える文字数カウントツール。文章の文字数を瞬時にカウント。全角・半角の区別、スペースのカウントに対応。SNSの投稿、レポート作成、文章校正に最適。",
  keywords: "文字数カウンター, テキストカウント, 文字カウント, 文字数チェック, 全角半角, オンラインツール, 無料, リアルタイム, SNS, Twitter, 校正",
  alternates: {
    canonical: "https://textcounter-app.vercel.app/counter",
  },
  openGraph: {
    title: "文字数カウンター | オンラインで簡単テキストカウント",
    description: "無料で使える文字数カウントツール。文章の文字数を瞬時にカウント。全角・半角の区別、スペースのカウントに対応。SNSの投稿、レポート作成、文章校正に最適。",
    url: "https://textcounter-app.vercel.app/counter",
    siteName: "文字数カウンター",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://textcounter-app.vercel.app/ogp.png", // 必要に応じてcounter専用のOGP画像パスに変更
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
    images: ["https://textcounter-app.vercel.app/ogp.png"], // 必要に応じてcounter専用のOGP画像パスに変更
  },
  category: "tools",
};

const faqs = [
  {
    q: "改行やスペースは数えますか？",
    a: "最初は数えない設定です。「スペース・改行も数える」をオンにすると、空白と改行も1文字ずつ数えます。",
  },
  {
    q: "句読点や記号は？",
    a: "「、」「。」「!」なども1文字として数えます。",
  },
  {
    q: "全角と半角はどう分けていますか？",
    a: "英数字と一般的な記号（ASCII）を半角、それ以外（日本語、全角英数字など）を全角として数えています。",
  },
  {
    q: "入力した文章は保存されますか？",
    a: "いいえ。数えるのはブラウザの中だけで、どこにも送られません。ページを閉じれば消えます。",
  },
];

export default function Counter() {
  return (
    <Layout>
      {/* 構造化データの追加 */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "文字数カウンター",
            "description": "無料で使える文字数カウントツール。文章の文字数を瞬時にカウント。全角・半角の区別、スペースのカウントに対応。",
            "url": "https://textcounter-app.vercel.app/counter",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "JPY"
            },
            "featureList": [
              "全角・半角文字のカウント",
              "スペースのカウント設定",
              "リアルタイムカウント",
              "コピー機能",
              "クリア機能"
            ]
          })
        }}
      />

      <main className="max-w-[800px] mx-auto px-6 pt-14 pb-[88px]">
        <h1 className="text-[40px] font-black">文字数カウンター</h1>
        <p className="mt-3.5 mb-9 text-[17px] leading-loose text-sub">
          文章を貼り付けると、その場で文字数を数えます。入力した文字はこのブラウザの外に出ません。
        </p>

        <TextCounter />

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-ink rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">使い方</h2>
            <ol className="list-decimal pl-5 space-y-2.5 text-[15px] leading-relaxed">
              <li>文章を貼り付けるか、そのまま入力する。数字はリアルタイムで変わります。</li>
              <li>数え方を選ぶ。提出先が「空白も含めて○字」なら、スペース・改行もオンに。</li>
              <li>書き直した文章は「コピー」でまとめて持っていけます。</li>
            </ol>
          </div>
          <div className="border-2 border-ink rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">こんなときに</h2>
            <ul className="list-disc pl-5 space-y-2.5 text-[15px] leading-relaxed">
              <li>レポートや小論文の字数チェック</li>
              <li>エントリーシートの「400字以内」に収める</li>
              <li>SNS投稿やメタディスクリプションの長さ調整</li>
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-black mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-2 border-ink rounded-[14px] px-5 py-[18px]">
                <h3 className="font-black mb-1.5">{faq.q}</h3>
                <p className="text-[15px] leading-relaxed text-sub">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <OtherTools current="/counter" />
      </main>
    </Layout>
  );
}
