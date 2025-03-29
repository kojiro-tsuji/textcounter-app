import type {Metadata} from "next";
import Layout from '../components/Layout';
import SnapPDF from '../components/SnapPDF';

export const metadata: Metadata = {
    title: "PDF変換ツール | 画像やドキュメントを簡単PDF化",
    description: "無料のオンラインPDF変換ツール。画像、Word、Excel、テキストファイルなど様々な形式からPDFへ簡単変換。ドラッグ＆ドロップでスピーディーに変換可能。",
    keywords: "PDF変換, 画像をPDF, WordをPDF, ExcelをPDF, オンライン変換, ファイル変換ツール, 無料, ドラッグ＆ドロップ",
    alternates: {
      canonical: "https://textcounter-app.vercel.app/pdf",
    },
    openGraph: {
      title: "PDF変換ツール | 画像やドキュメントを簡単PDF化",
      description: "無料のオンラインPDF変換ツール。画像、Word、Excelなど様々な形式からPDFへ簡単変換。",
      url: "https://textcounter-app.vercel.app/pdf",
      siteName: "PDF変換ツール",
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: "https://textcounter-app.vercel.app/pdf-ogp.png", // PDF用OGP画像
          width: 1200,
          height: 630,
          alt: "PDF変換ツール",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PDF変換ツール | 画像やドキュメントを簡単PDF化",
      description: "無料のオンラインPDF変換ツール。画像、Word、Excelなど様々な形式からPDFへ変換。",
      images: ["https://textcounter-app.vercel.app/pdf-ogp.png"],
    },
    category: "tools",
  };

export default function snapPDF() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className='flex justify-center'>
          <div className='w-full max-w-4xl px-4'>
            <div className="py-16">
              <SnapPDF/>
            </div>
            
            {/* 使い方セクション */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold text-center mb-6">ファイル → PDF変換ツールの使い方</h2>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  当ツールは、様々な形式のファイルを簡単にPDFに変換できる無料オンラインサービスです。
                  画像、テキスト、Word文書、Excel表計算、CSVデータなど、複数のファイルを1つのPDFにまとめることができます。
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
                    ファイルを選択
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>画面中央の点線エリアをクリックして、ファイルを選択</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>または、ファイルをドラッグ＆ドロップ</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>複数のファイルを同時に選択可能</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <span className="bg-green-100 flex items-center justify-center h-8 w-8 rounded-full mr-2 text-green-600 font-bold">2</span>
                    PDFに変換して保存
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>選択したファイルのプレビューを確認</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>「PDFとして保存」ボタンをクリック</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>変換されたPDFがダウンロードされます</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">対応ファイル形式</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">🖼️</span>
                    <div>
                      <p className="font-medium">画像ファイル</p>
                      <p className="text-sm text-gray-600">JPG, PNG, GIF など</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📝</span>
                    <div>
                      <p className="font-medium">テキストファイル</p>
                      <p className="text-sm text-gray-600">TXT, RTF など</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📄</span>
                    <div>
                      <p className="font-medium">PDFファイル</p>
                      <p className="text-sm text-gray-600">複数のPDFの結合</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📘</span>
                    <div>
                      <p className="font-medium">Word文書</p>
                      <p className="text-sm text-gray-600">DOCX, DOC</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📊</span>
                    <div>
                      <p className="font-medium">Excel表計算</p>
                      <p className="text-sm text-gray-600">XLSX, XLS</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-2">📈</span>
                    <div>
                      <p className="font-medium">CSVデータ</p>
                      <p className="text-sm text-gray-600">カンマ区切りテキスト</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">活用シーン</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">ビジネス文書の統合</h4>
                    <p className="text-sm text-gray-700">
                      提案書、報告書、請求書など異なる形式の文書を1つのPDFにまとめて、取引先に送付する際に便利です。複数の添付ファイルを送る手間が省けます。
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">学術・研究資料の作成</h4>
                    <p className="text-sm text-gray-700">
                      論文や研究レポートに、図表や参考資料を追加してPDF形式でまとめることができます。学術的な資料は広く閲覧されるため、互換性の高いPDF形式が最適です。
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">写真アルバムの作成</h4>
                    <p className="text-sm text-gray-700">
                      複数の写真を選択してアップロードすれば、すぐにPDFアルバムが作成できます。旅行の思い出やイベント写真をまとめて共有するのに便利です。
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium mb-2">データ分析レポート</h4>
                    <p className="text-sm text-gray-700">
                      ExcelやCSVのデータ分析結果を、テキスト解説や図表と一緒にPDFレポートとしてまとめることができます。見やすく、編集されない形式で情報を共有できます。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">プライバシーについて</h3>
                <p className="text-gray-700">
                  当ツールはブラウザ上で動作し、アップロードされたファイルはお使いのデバイス内でのみ処理されます。ファイルがサーバーに保存されたり、送信されたりすることはありません。安心してご利用ください。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">よくある質問</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">ファイルサイズに制限はありますか？</h4>
                    <p className="text-sm text-gray-700">
                      ブラウザの処理能力に依存しますが、一般的には1ファイルあたり20MB以下を推奨しています。大きなファイルは処理に時間がかかる場合があります。
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">変換したPDFを編集することはできますか？</h4>
                    <p className="text-sm text-gray-700">
                      当ツールでは生成されたPDFの編集機能は提供していません。PDF編集が必要な場合は、Adobe Acrobat などの専用ソフトウェアをご利用ください。
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">複数のファイルがどのような順序でPDFに変換されますか？</h4>
                    <p className="text-sm text-gray-700">
                      ファイルは選択された順序でPDFに変換されます。順序を変更したい場合は、一度ファイルを削除して、希望の順序で再度アップロードしてください。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Wordファイルの書式は保持されますか？</h4>
                    <p className="text-sm text-gray-700">
                      基本的なテキスト内容は保持されますが、複雑な書式、フォント、レイアウトは完全に再現されない場合があります。正確な書式が必要な場合は、Word自体の「PDFとして保存」機能を使用することをお勧めします。
                    </p>
                  </div>
                </div>
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
      </div>
    </Layout>
  );
}