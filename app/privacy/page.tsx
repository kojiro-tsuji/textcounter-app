import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. 基本方針</h2>
            <p>
              当サイト「便利ツール集」は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーでは、当サイトが提供する全てのツール（文字数カウンター、パスワード生成ツール、PDF変換ツールを含む）における個人情報の取り扱いについて説明します。
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
              <li>利用されたツールの種類と使用頻度</li>
            </ul>
            <p className="font-medium">
              重要なお知らせ：当サイトの各ツールで処理されるユーザーデータについて
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>文字数カウンター：</strong>入力されたテキストは、ブラウザ上でのみ処理され、サーバーに送信または保存されることはありません。</li>
              <li><strong>パスワード生成ツール：</strong>生成されたパスワードはブラウザ上でのみ処理され、サーバーに送信または保存されることはありません。</li>
              <li><strong>PDF変換ツール：</strong>アップロードされたファイルや変換されたPDFは、ブラウザ上でのみ処理され、サーバーに送信または保存されることはありません。変換処理はすべてユーザーのデバイス上で実行されます。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. 情報の利用目的</h2>
            <p>
              収集した情報は、以下の目的で利用されます：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>サービスの提供と改善</li>
              <li>ユーザーエクスペリエンスの向上</li>
              <li>利用状況の分析とツールの改善</li>
              <li>広告の配信</li>
              <li>不正アクセスの防止</li>
              <li>サービスに関する通知や連絡</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. データセキュリティ</h2>
            <p>
              当サイトでは、ユーザーデータのセキュリティを最優先に考え、以下の対策を実施しています：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>すべてのツールはクライアントサイド（ブラウザ内）で動作し、入力データはサーバーに送信されません</li>
              <li>PDF変換ツールで処理するファイルは、変換後に自動的にユーザーのデバイスにダウンロードされ、ブラウザメモリから削除されます</li>
              <li>パスワード生成ツールで生成されたパスワードは、ユーザーが明示的にコピーするまでブラウザ内に一時的に保存されるだけです</li>
              <li>通信はHTTPS（SSL）で暗号化されています</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. 広告について</h2>
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
            <h2 className="text-xl font-bold mb-4">6. アクセス解析ツール</h2>
            <p>
              当サイトでは、Googleアナリティクスを利用して、サイトの利用状況を分析しています。
              Googleアナリティクスは、Cookieを使用してデータを収集しますが、個人を特定する情報は収集しません。
              収集されるデータには、使用されたツールの種類、ページの閲覧時間、使用されたデバイスの情報などが含まれます。
            </p>
            <p className="mt-4">
              Googleによるデータの収集と処理の詳細については、
              <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Googleプライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. 情報の管理と第三者提供</h2>
            <p>
              収集した情報は、適切な安全管理措置を講じて管理し、以下の場合を除き、第三者に提供することはありません：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. ユーザーの権利</h2>
            <p>
              当サイトの利用者は、以下の権利を有します：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cookieの使用を制限または拒否する権利（ブラウザの設定から変更可能）</li>
              <li>広告のパーソナライズを無効にする権利</li>
            </ul>
            <p>
              また、ご自身の情報について質問や懸念がある場合は、お問い合わせフォームからご連絡ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">9. プライバシーポリシーの変更</h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当サイトに掲載された時点で効力を生じるものとします。
              重要な変更がある場合は、サイト上で通知します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">10. お問い合わせ</h2>
            <p>
              本プライバシーポリシーに関するご質問やご意見は、お問い合わせフォームからお寄せください。
            </p>
          </section>

          <div className="text-sm text-gray-600 mt-12">
            最終更新日: 2025年3月28日
          </div>
        </div>
      </div>
    </Layout>
  );
}