import TextCounter from './components/TextCounter';
import AdBanner from './components/AdBanner';
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
        <div className="flex justify-center relative">
          {/* 左サイド広告 */}
          <div className="hidden xl:block w-[160px] fixed left-0 top-0 h-screen">
            <div className="pt-4">
              <AdBanner
                position="left"
                width={160}
                height={600}
                className="sticky top-4"
              />
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="w-full max-w-4xl px-4">
            <div className="pt-16 pb-32">
              <TextCounter />
            </div>
          </div>

          {/* 右サイド広告 */}
          <div className="hidden xl:block w-[160px] fixed right-0 top-0 h-screen">
            <div className="pt-4">
              <AdBanner
                position="right"
                width={160}
                height={600}
                className="sticky top-4"
              />
            </div>
          </div>
        </div>

        {/* フッター広告 */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-50 py-4">
          <div className="max-w-[728px] mx-auto px-4">
            <AdBanner
              position="footer"
              width={728}
              height={90}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
