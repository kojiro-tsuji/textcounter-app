import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">1. 基本方針</h2>
          <p>
            当サイトは、利用者のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーでは、当サイトにおける個人情報の取り扱いについて説明します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">2. 収集する情報</h2>
          <p>
            当サイトでは、以下の情報を収集する場合があります：
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>アクセスログ（IPアドレス、ブラウザの種類、アクセス日時など）</li>
            <li>Cookieを通じて収集される情報</li>
            <li>広告配信のための情報</li>
          </ul>
          <p>
            なお、文字数カウント機能で入力されたテキストは、サーバーに保存されることはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">3. 情報の利用目的</h2>
          <p>
            収集した情報は、以下の目的で利用されます：
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>サービスの提供と改善</li>
            <li>利用状況の分析</li>
            <li>広告の配信</li>
            <li>不正アクセスの防止</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">4. 広告について</h2>
          <p>
            当サイトでは、第三者配信の広告サービス（Google AdSense）を利用しています。
            これらのサービスでは、ユーザーの興味に応じた商品やサービスの広告を表示するため、Cookieを使用しています。
          </p>
          <p className="mt-4">
            Cookieを無効にする方法やGoogleアドセンスに関する詳細は、
            <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Googleポリシーと規約
            </a>
            をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">5. アクセス解析ツール</h2>
          <p>
            当サイトでは、Googleアナリティクスを利用して、サイトの利用状況を分析しています。
            Googleアナリティクスは、Cookieを使用してデータを収集しますが、個人を特定する情報は収集しません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">6. 情報の管理</h2>
          <p>
            収集した情報は、適切な安全管理措置を講じて管理し、法令に基づく場合を除き、第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">7. プライバシーポリシーの変更</h2>
          <p>
            当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当サイトに掲載された時点で効力を生じるものとします。
          </p>
        </section>

        <div className="text-sm text-gray-600 mt-12">
          最終更新日: 2024年2月21日
        </div>
      </div>
    </Layout>
  );
} 