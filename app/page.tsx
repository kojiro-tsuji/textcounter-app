import TextCounter from './components/TextCounter';
import Layout from './components/Layout';
import Script from 'next/script';

export default function Home() {
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
            "url": "https://textcounter-app.vercel.app",
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

      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center">
          {/* メインコンテンツ */}
          <div className="w-full max-w-4xl px-4">
            <div className="py-16">
              <TextCounter />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
