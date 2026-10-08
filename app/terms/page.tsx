import type { Metadata } from "next";
import Link from 'next/link';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: "利用規約 | 便利ツール集",
  alternates: {
    canonical: "https://textcounter-app.vercel.app/terms",
  },
};

export default function Terms() {
  return (
    <Layout>
      <main className="max-w-[800px] mx-auto px-6 pt-14 pb-[88px] leading-loose">
        <h1 className="text-[40px] font-black mb-8">利用規約</h1>

        <p className="mb-10">
          この利用規約（以下「本規約」）は、便利ツール集（以下「当サイト」）の利用条件を定めるものです。当サイトを利用した時点で、本規約に同意したものとみなします。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第1条（サービスの内容）</h2>
          <p>当サイトは、次のツールを無料で提供します。</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>文字数カウンター：</strong>入力した文章の文字数を数える機能</li>
            <li><strong>パスワード生成：</strong>指定した長さと文字の種類でランダムなパスワードを作る機能</li>
            <li><strong>画像→PDF：</strong>画像ファイル（JPG・PNG・GIF・WEBP・BMP）を1つのPDFにまとめる機能</li>
          </ul>
          <p className="mt-2">インターネットへの接続にかかる通信料は、利用者の負担となります。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第2条（データの取り扱い）</h2>
          <p>
            ツールに入力・選択したデータは、利用者のブラウザの中だけで処理され、運営者のサーバーには送信・保存されません。そのため、運営者はこれらのデータを復元することができません。必要なデータは、利用者ご自身で保存してください。詳しくは
            <Link href="/privacy" className="font-bold underline">プライバシーポリシー</Link>
            をご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第3条（作成したものの利用）</h2>
          <p>
            利用者がツールで作成したPDFやパスワード、入力した文章の権利は、利用者に帰属します。個人・商用を問わず、自由に利用できます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第4条（知的財産権）</h2>
          <p>
            当サイトの文章、デザイン、ロゴなどの著作権は、運営者に帰属します。当サイトのソースコードの利用条件は、公開リポジトリに記載したライセンスに従います。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第5条（禁止事項）</h2>
          <p>利用者は、次の行為をしてはなりません。</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>法令または公序良俗に反する行為</li>
            <li>第三者の権利を侵害する行為</li>
            <li>大量の自動アクセスなど、当サイトのサーバーに過度な負担をかける行為</li>
            <li>当サイトの文章やデザインを無断で転載し、または当サイトを自分のサービスであるかのように見せる行為</li>
            <li>当サイトの運営を妨げる行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第6条（サービスの変更・中断・終了）</h2>
          <p>
            運営者は、保守や不具合の対応、天災などやむを得ない事情があるときは、事前の通知なく、当サイトの内容を変更し、または提供を中断・終了することがあります。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第7条（免責事項）</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>運営者は、ツールの結果（文字数、パスワード、PDFなど）が正確であること、利用者の目的に合うこと、不具合がないことを保証しません。</li>
            <li>当サイトの利用、または第6条による変更・中断・終了によって利用者に損害が生じても、運営者は責任を負いません。</li>
            <li>当サイトに掲載された広告や、リンク先の外部サイトの内容について、運営者は責任を負いません。</li>
          </ul>
          <p className="mt-2">
            ただし、運営者の故意または重大な過失による損害については、この限りではありません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第8条（広告の掲載）</h2>
          <p>
            当サイトには、第三者が配信する広告が表示されることがあります。広告の内容に関する責任は、広告主が負います。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第9条（規約の変更）</h2>
          <p>
            運営者は、必要に応じて本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点から効力を生じます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">第10条（準拠法・管轄裁判所）</h2>
          <p>
            本規約は日本法に従って解釈します。当サイトに関して紛争が生じた場合は、運営者の住所地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">お問い合わせ先</h2>
          <p>
            運営者：辻 恒次朗<br />
            メール：gongbenhui23@gmail.com
          </p>
        </section>

        <p className="text-sm text-sub">
          制定日：2025年3月28日<br />
          最終改定日：2026年10月8日
        </p>
      </main>
    </Layout>
  );
}
