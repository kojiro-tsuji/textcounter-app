import type {Metadata} from "next";
import Layout from '../components/Layout';
import ImagePDFConverter from '../components/SnapPDF';

export const metadata: Metadata = {
    title: "画像PDF変換ツール | 写真やイラストを簡単PDF化",
    description: "無料のオンラインPDF変換ツール。JPG、PNG、GIFなどの画像ファイルをPDFへ簡単変換。ドラッグ＆ドロップでスピーディーに変換可能。",
    keywords: "PDF変換, 画像をPDF, 写真をPDF, JPG to PDF, PNG to PDF, 画像結合, オンライン変換, 無料, ドラッグ＆ドロップ",
    alternates: {
      canonical: "https://textcounter-app.vercel.app/pdf",
    },
    openGraph: {
      title: "画像PDF変換ツール | 写真やイラストを簡単PDF化",
      description: "無料のオンラインPDF変換ツール。JPG、PNG、GIFなどの画像ファイルをPDFへ簡単変換。",
      url: "https://textcounter-app.vercel.app/pdf",
      siteName: "画像PDF変換ツール",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: "https://textcounter-app.vercel.app/pdf-ogp.png", // PDF用OGP画像
          width: 1200,
          height: 630,
          alt: "画像PDF変換ツール",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "画像PDF変換ツール | 写真やイラストを簡単PDF化",
      description: "無料のオンラインPDF変換ツール。JPG、PNG、GIFなどの画像ファイルをPDFへ変換。",
      images: ["https://textcounter-app.vercel.app/pdf-ogp.png"],
    },
    category: "tools",
  };

export default function imagePDF() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className='flex justify-center'>
          <div className='w-full max-w-4xl px-4'>
            <div className="py-16">
              <ImagePDFConverter/>
            </div>
            
            {/* 使い方セクション */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">画像PDF変換ツールの使い方</h2>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  当ツールは、様々な画像ファイルを簡単にPDFに変換できる無料オンラインサービスです。
                  JPG、PNG、GIF、WEBP、BMPなど一般的な画像形式に対応しており、複数の画像を1つのPDFにまとめることができます。
                </p>
                <p className="text-gray-700">
                  ブラウザ上で完結するため、インストール不要。アップロードされたファイルはお使いのデバイス内で処理され、
                  サーバーに保存されることはありませんので、安心してご利用いただけます。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="bg-blue-100 flex items-center justify-center h-8 w-8 rounded-full mr-2 text-blue-600 font-bold">1</span>
                    画像を選択
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>画面中央の点線エリアをクリックして、画像ファイルを選択</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>または、画像をドラッグ＆ドロップ</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>複数の画像を同時に選択可能</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <span className="bg-green-100 flex items-center justify-center h-8 w-8 rounded-full mr-2 text-green-600 font-bold">2</span>
                    PDFに変換してダウンロード
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>選択した画像のリストを確認</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>必要に応じて↑↓ボタンでページ順を変更</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>「PDFに変換してダウンロード」ボタンをクリック</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">対応画像形式</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📷</span>
                    <div>
                      <p className="font-medium">JPG/JPEG</p>
                      <p className="text-sm text-gray-600">写真向けフォーマット</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">🖼️</span>
                    <div>
                      <p className="font-medium">PNG</p>
                      <p className="text-sm text-gray-600">透過対応フォーマット</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">🎞️</span>
                    <div>
                      <p className="font-medium">GIF</p>
                      <p className="text-sm text-gray-600">アニメーション対応</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📱</span>
                    <div>
                      <p className="font-medium">WEBP</p>
                      <p className="text-sm text-gray-600">Webに最適化</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">🖌️</span>
                    <div>
                      <p className="font-medium">BMP</p>
                      <p className="text-sm text-gray-600">ビットマップ形式</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📐</span>
                    <div>
                      <p className="font-medium">SVG</p>
                      <p className="text-sm text-gray-600">ベクター形式</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">活用シーン</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">写真アルバムの作成</h4>
                    <p className="text-sm text-gray-700">
                      複数の写真を選択してアップロードすれば、すぐにPDFアルバムが作成できます。旅行の思い出やイベント写真をまとめて共有するのに便利です。
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">図面・設計書の配布</h4>
                    <p className="text-sm text-gray-700">
                      複数の図面や設計書の画像を1つのPDFにまとめて、関係者に配布することができます。印刷や共有がしやすいPDF形式が便利です。
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">商品カタログの作成</h4>
                    <p className="text-sm text-gray-700">
                      商品写真を順番に並べて、簡易的なカタログPDFを作成できます。商品紹介や販売促進資料として活用できます。
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">スクリーンショットのドキュメント化</h4>
                    <p className="text-sm text-gray-700">
                      複数のスクリーンショットを撮影して順番に並べれば、操作手順書や説明資料としてまとめることができます。視覚的なマニュアル作成に便利です。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">プライバシーについて</h3>
                <p className="text-gray-700">
                  当ツールはブラウザ上で動作し、アップロードされた画像はお使いのデバイス内でのみ処理されます。画像ファイルがサーバーに保存されたり、送信されたりすることはありません。安心してご利用ください。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">よくある質問</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">画像サイズに制限はありますか？</h4>
                    <p className="text-sm text-gray-700">
                      ブラウザの処理能力に依存しますが、一般的には1画像あたり20MB以下を推奨しています。大きな画像や多数の画像は処理に時間がかかる場合があります。
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">作成したPDFはどのような品質になりますか？</h4>
                    <p className="text-sm text-gray-700">
                      元の画像品質をできるだけ維持しつつ、PDFページサイズに最適化されます。画像は自動的にページ内に収まるようリサイズされますが、アスペクト比（縦横比）は保持されます。
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">複数の画像がどのような順序でPDFに変換されますか？</h4>
                    <p className="text-sm text-gray-700">
                      画像は選択された順序でPDFに変換されます。リスト上で↑↓ボタンを使用して順序を変更することができます。最初の画像がPDFの1ページ目になります。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">アニメーションGIFはどのように変換されますか？</h4>
                    <p className="text-sm text-gray-700">
                      アニメーションGIFは、最初のフレームのみが静止画像としてPDFに変換されます。PDFはアニメーションをサポートしていないため、動きのある部分は保持されません。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* フッターCTA */}
            <div className="max-w-4xl mx-auto text-center mb-12">
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
      </div>
    </Layout>
  );
}