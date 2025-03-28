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
            <div className="min-h-screen bg-gray-50">
                <div className='flex justify-center'>
                    <div className='w-full max-w-4xl px-4'>
                        <div className="py-16">
                         <PasswordGenerator/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}