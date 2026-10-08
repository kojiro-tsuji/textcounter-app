import type {Metadata} from "next";
import Layout from '../components/Layout';
import PasswordGenerator from '../components/password-gene';
import OtherTools from '../components/OtherTools';

export const metadata: Metadata = {
    title: "パスワード生成ツール | 安全なランダムパスワードを簡単作成",
    description: "高セキュリティの無料パスワード生成ツール。長さ、文字種類をカスタマイズして安全なパスワードを即時生成。ブラウザ内で完結し、パスワードはどこにも送信されません。",
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

const faqs = [
  {
    q: "作ったパスワードはどこかに保存されますか？",
    a: "いいえ。ページを閉じれば消えます。必要なものは自分で保存してください。",
  },
  {
    q: "本当にランダムですか？",
    a: "ブラウザに備わっている暗号用の乱数（crypto.getRandomValues）を使っています。",
  },
];

export default function PasswordPage() {
  return (
    <Layout>
      <main className="max-w-[800px] mx-auto px-6 pt-14 pb-[88px]">
        <h1 className="text-[40px] font-black">パスワード生成</h1>
        <p className="mt-3.5 mb-9 text-[17px] leading-loose text-sub">
          長さと文字の種類を選んで「生成する」を押すだけ。パスワードはこのブラウザの中で作られ、どこにも送られません。
        </p>

        <PasswordGenerator />

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-ink rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">使い方</h2>
            <ol className="list-decimal pl-5 space-y-2.5 text-[15px] leading-relaxed">
              <li>長さを決める。迷ったら16文字で十分です。</li>
              <li>使う文字を選ぶ。サイトに「記号は使えません」と言われたら、記号を外してください。</li>
              <li>「生成する」を押して、コピーして貼り付け。</li>
            </ol>
          </div>
          <div className="border-2 border-ink rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4">ちょっとしたコツ</h2>
            <ul className="list-disc pl-5 space-y-2.5 text-[15px] leading-relaxed">
              <li>同じパスワードを使い回さない。1か所漏れると、ほかも芋づる式に入られます。</li>
              <li>覚えようとせず、パスワード管理アプリに任せるのが楽です。</li>
              <li>メールや銀行は、2段階認証もオンにしておきましょう。</li>
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

        <OtherTools current="/password" />
      </main>
    </Layout>
  );
}
