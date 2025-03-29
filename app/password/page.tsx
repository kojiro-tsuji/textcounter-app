import type {Metadata} from "next";
import Layout from '../components/Layout';
import PasswordGenerator from '../components/password-gene';

export const metadata: Metadata = {
    title: "パスワード生成ツール | 安全なランダムパスワードを簡単作成",
    description: "高セキュリティの無料パスワード生成ツール。長さ、文字種類をカスタマイズして安全なパスワードを即時生成。サイトごとの管理もできる便利なツール。",
    keywords: "パスワード生成, ランダムパスワード, パスワードジェネレーター, 強力パスワード, 安全なパスワード, オンラインツール, 無料, セキュリティ",
    alternates: {
      canonical: "https://textcounter-app.vercel.app/password",
    },
    openGraph: {
      title: "パスワード生成ツール | 安全なランダムパスワードを簡単作成",
      description: "高セキュリティの無料パスワード生成ツール。長さ、文字種類をカスタマイズして安全なパスワードを即時生成。",
      url: "https://textcounter-app.vercel.app/password",
      siteName: "パスワード生成ツール",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: "https://textcounter-app.vercel.app/password-ogp.png", // パスワード用OGP画像
          width: 1200,
          height: 630,
          alt: "パスワード生成ツール",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "パスワード生成ツール | 安全なランダムパスワードを簡単作成",
      description: "高セキュリティの無料パスワード生成ツール。長さ、文字種類をカスタマイズ可能。",
      images: ["https://textcounter-app.vercel.app/password-ogp.png"],
    },
    category: "tools",
  };

export default function password() {
return (
  <Layout>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* ヘッダーセクション - 中央揃え */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">パスワード生成ツール</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">安全なオンラインアカウントのための強力なパスワードを簡単に生成できます</p>
        </div>
        
        {/* メインコンテンツ - どんな画面サイズでも中央配置 */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <PasswordGenerator />
          </div>
        </div>

        {/* how to セクション　*/}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">パスワード生成ツールの使い方</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-gray-700">
                強力で安全なパスワードを生成するためのシンプルなステップをご紹介します。これに従って、オンラインアカウントのセキュリティを強化しましょう。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-bold mr-3">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">パスワードの長さを設定</h3>
                    <p className="text-gray-600 text-sm">
                      スライダーを動かして、生成するパスワードの長さを調整します。セキュリティ専門家は一般的に12文字以上を推奨しています。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-bold mr-3">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">含める文字種を選択</h3>
                    <p className="text-gray-600 text-sm">
                      大文字、小文字、数字、記号のチェックボックスを使って、パスワードに含める文字種を指定します。多くの種類を含めるほど、パスワードの強度は高まります。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-bold mr-3">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">パスワードを生成</h3>
                    <p className="text-gray-600 text-sm">
                      「パスワードを生成」ボタンをクリックして、設定に基づいた安全なランダムパスワードを作成します。必要に応じて何度でも再生成できます。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-bold mr-3">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">パスワードの強度を確認</h3>
                    <p className="text-gray-600 text-sm">
                      生成されたパスワードの下に表示される強度インジケーターで、セキュリティレベルを確認します。「強い」または「非常に強い」評価を目指しましょう。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-bold mr-3">5</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">パスワードの表示/非表示</h3>
                    <p className="text-gray-600 text-sm">
                      目のアイコンをクリックすると、生成されたパスワードを表示または非表示にできます。他人が見ている場合は非表示にしておくことをおすすめします。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-bold mr-3">6</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">パスワードをコピー</h3>
                    <p className="text-gray-600 text-sm">
                      クリップボードアイコンをクリックして、生成されたパスワードをコピーし、必要なサービスのサインアップやパスワード変更時に使用します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-yellow-800 mb-2">セキュリティに関する注意</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>生成されたパスワードはどこかに保存しておくか、パスワードマネージャーに登録しましょう</li>
                <li>重要なアカウント（メール、銀行、クラウドストレージなど）には特に強力なパスワードを使用してください</li>
                <li>パスワードは定期的に変更し、同じパスワードを複数のサービスで使い回さないようにしましょう</li>
                <li>可能な限り、2段階認証と組み合わせることでセキュリティをさらに強化できます</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">プライバシーについて</h3>
              <p className="text-gray-700 text-sm">
                このパスワード生成ツールはお使いのブラウザ内で実行され、生成されたパスワードやあなたの設定がサーバーに送信されることはありません。すべての処理はあなたのデバイス内で安全に行われます。
              </p>
            </div>
          </div>
        </div>  
        {/* 情報セクション - 2カラムレイアウト */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 左カラム */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">安全なパスワードの条件</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>長さは<strong>12文字以上</strong>が理想的</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>大文字と小文字を<strong>混在</strong>させる</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>数字</strong>を含める</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>特殊記号</strong>（!@#$%など）を含める</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>個人情報（誕生日、名前など）を<strong>避ける</strong></span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>複数のサービスで同じパスワードを<strong>再利用しない</strong></span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 右カラム */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">パスワード管理のヒント</h2>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  複数の強力なパスワードを管理するには、<strong>パスワードマネージャー</strong>の使用をおすすめします。一つのマスターパスワードだけを覚えておけば、残りのパスワードは安全に保存・自動入力できます。
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-semibold text-yellow-800 mb-2">セキュリティのヒント</h3>
                  <p className="text-gray-700">
                    このツールで生成されたパスワードはお使いのデバイス内で処理され、サーバーには送信されません。さらなるセキュリティのために、<strong>2段階認証</strong>の併用もおすすめします。
                  </p>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">おすすめの使い方</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>重要なアカウント（銀行、メールなど）には特に強力なパスワードを使用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>定期的にパスワードを更新（3〜6ヶ月ごと）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>不審なアクティビティに気づいたら、すぐにパスワードを変更</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 下部の追加情報セクション */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">パスワード管理のベストプラクティス</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="text-blue-600 text-3xl mb-3 flex justify-center">🔄</div>
              <h3 className="text-lg font-semibold mb-2 text-center">定期的な更新</h3>
              <p className="text-gray-600 text-sm">
                重要なアカウント（銀行、メールなど）のパスワードは、3〜6ヶ月ごとに更新することをおすすめします。
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="text-blue-600 text-3xl mb-3 flex justify-center">🔐</div>
              <h3 className="text-lg font-semibold mb-2 text-center">パスワードマネージャー</h3>
              <p className="text-gray-600 text-sm">
                複雑なパスワードを覚えるのは困難です。パスワードマネージャーを使用して、安全に保存しましょう。
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="text-blue-600 text-3xl mb-3 flex justify-center">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-center">2段階認証</h3>
              <p className="text-gray-600 text-sm">
                パスワードだけでなく、SMSや認証アプリを使った2段階認証を設定すると、さらにセキュリティが向上します。
              </p>
            </div>
          </div>
        </div>
        
        {/* 追加情報セクション */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">なぜパスワードの安全性が重要なのか</h2>
          <div className="prose prose-blue max-w-none text-gray-600">
            <p>
              デジタル時代において、強力なパスワードはオンラインでの個人情報やアカウントを守るための最初の防衛線です。サイバー攻撃者は日々、自動化されたツールを使って何百万ものパスワードを試行しています。
            </p>
            <p>
              最新の調査によると、世界中で毎秒約<strong>579件</strong>のパスワード侵害が発生しています。また、ユーザーの約<strong>51%</strong>が同じパスワードを複数のサービスで使い回しているというデータもあります。
            </p>
            <p>
              このツールを使って安全なパスワードを生成し、オンラインでの個人情報を守りましょう。覚えやすく、かつ強力なパスワードを使用することで、不正アクセスのリスクを大幅に低減できます。
            </p>
          </div>
        </div>
        
        {/* フッターCTA */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">他にも様々な便利ツールを提供しています</p>
          <a href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            他のツールを見る
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);  
}