import type {Metadata} from "next";
import Layout from '../components/Layout';
import ImagePDFConverter from '../components/SnapPDF';
import OtherTools from '../components/OtherTools';

export const metadata: Metadata = {
    title: "画像PDF変換ツール | 写真やイラストを簡単PDF化",
    description: "無料のオンラインPDF変換ツール。JPG、PNG、GIFなどの画像ファイルをPDFへ簡単変換。ドラッグ＆ドロップでスピーディーに変換可能。",
    keywords: "PDF変換, 画像をPDF, 写真をPDF, JPG to PDF, PNG to PDF, 画像結合, オンライン変換, 無料, ドラッグ＆ドロップ",
    alternates: {
      canonical: "https://textcounter-app.vercel.app/snapPDF",
    },
    openGraph: {
      title: "画像PDF変換ツール | 写真やイラストを簡単PDF化",
      description: "無料のオンラインPDF変換ツール。JPG、PNG、GIFなどの画像ファイルをPDFへ簡単変換。",
      url: "https://textcounter-app.vercel.app/snapPDF",
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

const faqs = [
  {
    q: "1ページに何枚入りますか？",
    a: "画像1枚につき1ページです。縦横比はそのままで、A4縦に収まるように縮小します。",
  },
  {
    q: "大きい画像や枚数が多くても大丈夫？",
    a: "処理は端末の性能しだいです。重いと感じたら、何回かに分けて変換してください。",
  },
  {
    q: "GIFアニメはどうなりますか？",
    a: "最初のコマだけが静止画として入ります。",
  },
  {
    q: "画像はアップロードされますか？",
    a: "いいえ。変換はブラウザの中だけで行い、画像はどこにも送られません。",
  },
];

export default function ImagePDFPage() {
  return (
    <Layout>
      <main className="max-w-[800px] mx-auto px-6 pt-14 pb-[88px]">
        <h1 className="text-[40px] font-black">画像→PDF</h1>
        <p className="mt-3.5 mb-9 text-[17px] leading-loose text-sub">
          写真やスクショを選ぶだけで、1つのPDFにまとめます。画像はこのブラウザの中で処理され、どこにも送られません。
        </p>

        <ImagePDFConverter />

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-ink rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">使い方</h2>
            <ol className="list-decimal pl-5 space-y-2.5 text-[15px] leading-relaxed">
              <li>画像をドロップするか、クリックして選ぶ。</li>
              <li>並び順を確認。上から順にページになるので、矢印で入れ替えます。</li>
              <li>「PDFにしてダウンロード」を押せば完成です。</li>
            </ol>
          </div>
          <div className="border-2 border-ink rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">こんなときに</h2>
            <ul className="list-disc pl-5 space-y-2.5 text-[15px] leading-relaxed">
              <li>スマホで撮った書類を、1つのファイルにして提出</li>
              <li>スクショを並べて、手順書や報告資料に</li>
              <li>レシートや領収書の写真をまとめて保存</li>
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

        <OtherTools current="/snapPDF" />
      </main>
    </Layout>
  );
}
