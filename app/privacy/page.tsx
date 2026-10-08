import type { Metadata } from "next";
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: "プライバシーポリシー | 便利ツール集",
  alternates: {
    canonical: "https://textcounter-app.vercel.app/privacy",
  },
};

const linkClass = "font-bold underline";

export default function Privacy() {
  return (
    <Layout>
      <main className="max-w-[800px] mx-auto px-6 pt-14 pb-[88px] leading-loose">
        <h1 className="text-[40px] font-black mb-8">プライバシーポリシー</h1>

        <p className="mb-10">
          便利ツール集（以下「当サイト」）の運営者（以下「運営者」）は、利用者の情報を次のとおり取り扱います。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">1. ツールで扱うデータ</h2>
          <p>
            文字数カウンターに入力した文章、パスワード生成ツールで作ったパスワード、画像→PDFで選んだ画像と作成したPDFは、すべて利用者のブラウザの中だけで処理されます。これらのデータが運営者のサーバーや第三者に送信・保存されることはありません。ページを閉じると、ブラウザ上のデータも消えます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">2. 当サイトが取得する情報</h2>
          <p>当サイトでは、次の情報を取得することがあります。</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>アクセスログ：</strong>
              当サイトのホスティング事業者（Vercel Inc.）のサーバーが、IPアドレス、ブラウザの種類、アクセス日時、閲覧したページなどを自動的に記録します。
            </li>
            <li>
              <strong>Cookie等の情報：</strong>
              広告配信（第4条）にともない、Googleが利用者のブラウザにCookie等を保存・参照することがあります。当サイト自体はCookieを使用していません。
            </li>
            <li>
              <strong>お問い合わせの内容：</strong>
              メールでお問い合わせいただいた場合の、お名前、メールアドレス、お問い合わせ内容。
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">3. 利用目的</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>当サイトの提供、維持、不具合の調査</li>
            <li>不正アクセスや迷惑行為の防止</li>
            <li>広告の配信</li>
            <li>お問い合わせへの回答</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">4. 広告について</h2>
          <p>
            当サイトでは、第三者配信の広告サービス「Google AdSense」を利用しています。Googleなどの第三者配信事業者は、Cookieを使用して、利用者が当サイトや他のサイトに過去にアクセスした際の情報に基づいて広告を配信します。
          </p>
          <p className="mt-4">
            パーソナライズ広告は、
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>Googleの広告設定</a>
            で無効にできます。また、
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className={linkClass}>www.aboutads.info</a>
            から、第三者配信事業者のCookieを無効にすることもできます。Googleによる情報の取り扱いについては、
            <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className={linkClass}>Googleの広告に関するポリシー</a>
            をご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">5. 外部に送信される情報</h2>
          <p>当サイトを閲覧すると、次の事業者に情報が送信されます。</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-2 border-ink text-sm">
              <thead className="bg-pop">
                <tr>
                  <th className="border-2 border-ink px-3 py-2 text-left">送信先</th>
                  <th className="border-2 border-ink px-3 py-2 text-left">送信される情報</th>
                  <th className="border-2 border-ink px-3 py-2 text-left">目的</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-ink px-3 py-2">Vercel Inc.</td>
                  <td className="border-2 border-ink px-3 py-2">IPアドレス、ブラウザの種類、閲覧ページ、アクセス日時</td>
                  <td className="border-2 border-ink px-3 py-2">ページの配信（ホスティング）</td>
                </tr>
                <tr>
                  <td className="border-2 border-ink px-3 py-2">Google LLC</td>
                  <td className="border-2 border-ink px-3 py-2">IPアドレス、ブラウザの種類、閲覧ページ、Cookie識別子</td>
                  <td className="border-2 border-ink px-3 py-2">広告の配信と効果測定</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-sub">
            ※ ツールに入力・選択したデータ（第1条）は、上記のどの送信先にも送られません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">6. 第三者への提供</h2>
          <p>
            運営者は、取得した個人情報を、次の場合を除き、本人の同意なく第三者に提供しません。
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要で、本人の同意を得ることが難しい場合</li>
            <li>国の機関や地方公共団体などが法令に定める事務を行うことに協力する必要がある場合</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">7. 開示・訂正・削除のご請求</h2>
          <p>
            お問い合わせでいただいた個人情報について、開示、訂正、利用停止、削除をご希望の場合は、下記の連絡先までご連絡ください。ご本人であることを確認したうえで、速やかに対応します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">8. このポリシーの変更</h2>
          <p>
            運営者は、必要に応じてこのポリシーを変更することがあります。変更後のポリシーは、当サイトに掲載した時点から効力を生じます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">9. お問い合わせ先</h2>
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
