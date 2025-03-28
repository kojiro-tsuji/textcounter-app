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
                    </div>
                </div>
            </div>
        </Layout>
    )
}