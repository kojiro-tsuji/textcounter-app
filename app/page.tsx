import type { Metadata } from "next";
import Link from "next/link";

export default function HomePage() {
  const tools = [
    {
      title: "文字数カウンター",
      description: "テキストの文字数、単語数、行数を瞬時にカウント。全角・半角の区別やスペースのカウントにも対応した高機能カウンターです。",
      icon: "📝",
      link: "/counter",
      color: "bg-blue-100 hover:bg-blue-200",
      textColor: "text-blue-800",
    },
    {
      title: "パスワード生成ツール",
      description: "安全で強力なパスワードを簡単に生成。長さや使用文字をカスタマイズして、セキュリティ性の高いパスワードを作成できます。",
      icon: "🔐",
      link: "/password",
      color: "bg-green-100 hover:bg-green-200",
      textColor: "text-green-800",
    },
    {
      title: "PDF変換ツール",
      description: "画像、テキスト、Word、Excelなど様々なファイルをPDFに変換。ドラッグ＆ドロップで簡単にファイルを変換できます。",
      icon: "📄",
      link: "/snapPDF",
      color: "bg-red-100 hover:bg-red-200",
      textColor: "text-red-800",
    },
  ];

  return (
    <main className="min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">便利ツール集</h1>
          <p className="text-xl text-gray-600 mb-6">
            シンプルで使いやすい無料のオンラインツール
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Link 
                href={tool.link} 
                key={index}
                className={`block p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 ${tool.color}`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tool.icon}</span>
                  <h2 className={`text-xl font-semibold ${tool.textColor}`}>
                    {tool.title}
                  </h2>
                </div>
                <p className="text-gray-700">{tool.description}</p>
                <div className="mt-4 flex justify-end">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${tool.textColor} bg-white`}>
                    使ってみる →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">ツールの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-medium mb-2">高速処理</h3>
              <p className="text-gray-600">
                すべてのツールはブラウザ上で動作し、サーバーとの通信なしで即座に結果を表示します。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-medium mb-2">プライバシー保護</h3>
              <p className="text-gray-600">
                入力データはあなたのデバイス内で処理され、サーバーに送信されることはありません。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-lg font-medium mb-2">完全無料</h3>
              <p className="text-gray-600">
                すべてのツールは無料で利用可能。登録や支払いは一切不要です。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">ご利用について</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              当サイトの全てのツールは、個人利用・商用利用を問わず無料でご利用いただけます。データはすべてブラウザ内で処理され、サーバーには保存されませんので、安心してご利用ください。
            </p>
            <p className="text-gray-700 mb-4">
              不具合や機能改善のご要望がありましたら、お気軽にフィードバックをお寄せください。より使いやすいツールを目指して改善を続けています。
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link href="/privacy" className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">運営者情報</h2>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-3">
                <div className="font-medium text-gray-700">サイト名</div>
                <div className="md:col-span-2">便利ツール集</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-3">
                <div className="font-medium text-gray-700">運営者</div>
                <div className="md:col-span-2">辻　恒次朗</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b pb-3">
                <div className="font-medium text-gray-700">メールアドレス</div>
                <div className="md:col-span-2">gongbenhui23@gmail.com</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="font-medium text-gray-700">事業内容</div>
                <div className="md:col-span-2">ウェブサイトの企画・開発・運営</div>
              </div>
            </div>
          </div>
        </section>        
      </div>
    </main>
  );
}