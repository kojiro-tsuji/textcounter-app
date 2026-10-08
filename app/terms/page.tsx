import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="leading-loose">
          <h1 className="text-[40px] font-black mb-8">利用規約</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">1. はじめに</h2>
            <p>
              この利用規約（以下、「本規約」といいます。）は、当サイトが提供する便利ツール集（文字数カウンター、パスワード生成ツール、PDF変換ツールを含む、以下「本サービス」といいます。）の利用条件を定めるものです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">2. 利用規約の適用</h2>
            <p>
              本規約は、本サービスの利用に関する当サイトと利用者との間の権利義務関係を定めることを目的とし、利用者と当サイトとの間の本サービスの利用に関わる一切の関係に適用されます。
            </p>
            <p className="mt-2">
              利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">3. サービスの内容</h2>
            <p>
              本サービスは、以下の機能を提供します：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>文字数カウンター：</strong>テキストの文字数、単語数、行数をカウントする機能</li>
              <li><strong>パスワード生成ツール：</strong>安全で強力なパスワードを生成する機能</li>
              <li><strong>PDF変換ツール：</strong>画像、テキスト、Office文書などの各種ファイルをPDFに変換する機能</li>
            </ul>
            <p>
              利用者は、これらの機能をブラウザ上で利用することができます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">4. 利用料金</h2>
            <p>
              本サービスは無料で提供されます。ただし、インターネット接続に必要な通信費用は利用者の負担となります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">5. データの取り扱い</h2>
            <p>
              本サービスで処理されるデータ（入力テキスト、生成パスワード、変換ファイルなど）は、すべてブラウザ上で処理され、当サイトのサーバーには送信または保存されません。ただし、以下の点にご注意ください：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>PDF変換ツールでアップロードされたファイルの内容は、ブラウザのメモリ上でのみ処理されます</li>
              <li>パスワード生成ツールで生成されたパスワードは、ブラウザのセッション中のみ表示されます</li>
              <li>文字数カウンターに入力されたテキストは、ページを離れるとクリアされます</li>
            </ul>
            <p>
              利用者自身の責任において、重要なデータのバックアップを取ることをお勧めします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">6. 知的財産権</h2>
            <p>
              本サービスに関連するすべてのコンテンツ（テキスト、グラフィック、ロゴ、アイコン、画像、音声クリップ、デジタルダウンロード、データ編集、ソフトウェア）は、当サイトまたはそのコンテンツ提供者の財産であり、日本および国際的な著作権法により保護されています。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">7. 禁止事項</h2>
            <p>
              利用者は、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>本サービスの運営を妨害する行為</li>
              <li>本サービスのシステムやネットワークに過度の負担をかける行為</li>
              <li>本サービスを通じて得た情報を商業的に利用する行為</li>
              <li>本サービスのリバースエンジニアリング、逆コンパイル、逆アセンブルを行う行為</li>
              <li>本サービスを違法な目的で使用する行為</li>
              <li>第三者の権利を侵害する行為</li>
              <li>その他、当サイトが不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">8. サービスの変更・中断・終了</h2>
            <p>
              当サイトは、以下の場合には、利用者に事前に通知することなく、本サービスの全部または一部の提供を変更、中断、または終了することができるものとします：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>本サービスのシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電、天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当サイトが本サービスの提供が困難と判断した場合</li>
            </ul>
            <p>
              当サイトは、本サービスの提供の変更、中断、終了によって生じたいかなる損害についても、一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">9. 免責事項</h2>
            <p>
              当サイトは、本サービスに関して、以下の事項について一切の責任を負いません：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>本サービスの内容の正確性、信頼性、完全性、有用性</li>
              <li>本サービスが利用者の特定の目的に適合すること</li>
              <li>本サービスが中断なく提供されること</li>
              <li>本サービスにバグやエラーがないこと</li>
              <li>本サービスを通じて提供される情報が正確または最新であること</li>
              <li>PDF変換ツールでの変換結果が常に期待通りであること</li>
              <li>パスワード生成ツールで生成されたパスワードの安全性</li>
            </ul>
            <p>
              利用者は、自己の責任において本サービスを利用するものとし、本サービスの利用により生じたいかなる損害についても、当サイトは一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">10. 広告の掲載</h2>
            <p>
              当サイトは、本サービス内に第三者の広告を掲載することがあります。広告内容に関する責任は、広告主に帰属します。広告のクリックによって移動した先のサイトについては、当サイトは一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">11. プライバシー</h2>
            <p>
              当サイトのプライバシーポリシーは、本規約の一部を構成します。プライバシーポリシーについては、「プライバシーポリシー」のページをご確認ください。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">12. 規約の変更</h2>
            <p>
              当サイトは、必要と判断した場合には、利用者に通知することなく本規約を変更することができるものとします。変更後の利用規約は、当サイトに掲載された時点で効力を生じるものとします。継続して本サービスを利用することにより、利用者は変更後の規約に同意したものとみなされます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-black mb-4">13. 準拠法・管轄裁判所</h2>
            <p>
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <div className="text-sm text-sub mt-12">
            最終更新日: 2025年3月28日
          </div>
        </div>
      </div>
    </Layout>
  );
}