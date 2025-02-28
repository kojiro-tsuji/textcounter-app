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
            
            {/* 説明セクション */}
            <div className="mb-16 space-y-8">
              {/* 使い方セクション */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">使い方</h2>
                <div className="space-y-4">
                  <p>
                    テキストエリアに文章を入力するだけで、即座に文字数をカウント。
                    SNSの投稿、レポート作成、文章校正に最適です。
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>全角・半角の文字をそれぞれカウント</li>
                    <li>スペースを含めるかどうかを選択可能</li>
                    <li>文章を簡単にコピー＆クリア</li>
                  </ul>
                </div>
              </section>

              {/* 活用シーンセクション */}
              <section className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">活用シーン</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">SNS投稿</h3>
                    <p>Twitter、Instagramなどの文字数制限を簡単にチェック。</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">レポート作成</h3>
                    <p>課題やビジネス文書の文字数を正確にカウント。</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">ブログ執筆</h3>
                    <p>SEOに最適な文字数を確認しながら執筆可能。</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">文章校正</h3>
                    <p>原稿の文字数を確認しながら編集作業が可能。</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
