import type { Metadata } from "next";
import TextCounter from '../components/TextCounter';
import Layout from '../components/Layout';
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

      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center">
          {/* メインコンテンツ */}
          <div className="w-full max-w-4xl px-4">
            <div className="py-16">
              <TextCounter />
            </div>
            
            {/* この文字数カウンターの下に追加するセクション */}
            <section className="w-full max-w-4xl mx-auto mt-12 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">文字数カウンターの使い方と活用シーン</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">基本的な使い方</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>上部のテキストエリアに文章を入力またはコピー＆ペーストしてください。</li>
                    <li>文字数が自動的にカウントされ、下部に表示されます。</li>
                    <li>「スペースを含める」「全角文字」「半角文字」のオプションを切り替えて、より細かくカウントを調整できます。</li>
                    <li>「コピー」ボタンでテキストをクリップボードにコピーできます。</li>
                    <li>「クリア」ボタンでテキストをリセットできます。</li>
                  </ol>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">便利な機能</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>スペースのカウント切替：</strong>「スペースを含める」のチェックボックスをオン/オフすることで、スペースを文字数に含めるかどうかを選択できます。</li>
                    <li><strong>文字種別カウント：</strong>「全角文字」と「半角文字」のチェックボックスを使って、特定の種類の文字だけをカウントすることができます。</li>
                    <li><strong>コピー機能：</strong>編集したテキストを簡単にコピーして他の場所で利用できます。</li>
                    <li><strong>リアルタイムカウント：</strong>入力中も文字数が即座に更新されます。</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">活用シーン</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-2">📝 SNS投稿の作成</h4>
                      <p>Twitter（X）やInstagramなど、文字数制限のあるSNSへの投稿を作成する際に便利です。スペースを含めるかどうかの設定も、プラットフォームごとの文字数カウント方法に合わせて調整できます。</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-2">📊 SEO記事の最適化</h4>
                      <p>ブログ記事やWebコンテンツのSEO最適化において、適切な文字数を維持するために活用できます。検索エンジンが好む2,000〜3,000文字の記事を書く際の目安として使えます。</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-2">📚 レポートや論文の作成</h4>
                      <p>学校や大学のレポート、論文などで指定された文字数に合わせて執筆する際に役立ちます。全角/半角の設定を使って、より正確に日本語の文字数を把握できます。</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-2">✍️ 履歴書・職務経歴書の作成</h4>
                      <p>就職・転職活動での履歴書や職務経歴書の自己PRや志望動機を書く際に、適切な文字数に収めるのに役立ちます。字数制限がある場合でも、このツールで効率的に管理できます。</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-2">📱 メールや問い合わせフォーム</h4>
                      <p>文字数制限のあるお問い合わせフォームやメールを作成する際に、制限内に収まっているか確認できます。ビジネスメールでは簡潔さが重要ですが、このツールで適切な長さを保てます。</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-medium mb-2">🎓 小論文・エッセイの執筆</h4>
                      <p>入試や資格試験の小論文、エッセイコンテストなどで指定された文字数内で作品を仕上げる際に最適です。執筆中に随時文字数を確認しながら作業できます。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-bold mb-6 text-center">よくある質問</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Q: 全角と半角の違いは何ですか？</h3>
                    <p>A: 全角文字は主に日本語の漢字、ひらがな、カタカナなどで、一文字が正方形の領域を占めます。半角文字は英数字や記号など、全角の半分の幅を持つ文字です。このツールでは両方を個別にカウントする機能があります。</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Q: 句読点や改行も文字数にカウントされますか？</h3>
                    <p>A: はい、デフォルト設定では句読点や改行も1文字としてカウントされます。多くの文章制限では、これらも文字数に含まれるためです。</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Q: 文字数の目安はどのくらいですか？</h3>
                    <p>A: 用途によって異なりますが、一般的な目安は以下の通りです：</p>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Twitterの投稿：最大280文字</li>
                      <li>ブログ記事の見出し：10〜60文字程度</li>
                      <li>SEO最適化された記事：2,000〜3,000文字</li>
                      <li>履歴書の自己PR：200〜400文字程度</li>
                      <li>小論文：800〜1,200文字程度</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Q: オフラインでも使用できますか？</h3>
                    <p>A: このツールはブラウザ上で動作しますが、一度ページを読み込んだ後はインターネット接続がなくても使用可能です。入力したテキストがサーバーに送信されることはなく、すべての処理はお使いのデバイス内で完結します。</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}