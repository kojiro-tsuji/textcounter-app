import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">1. はじめに</h2>
          <p>
            この利用規約（以下、「本規約」といいます。）は、当サイトが提供する文字数カウントサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">2. 利用規約の適用</h2>
          <p>
            本規約は、本サービスの利用に関する当サイトと利用者との間の権利義務関係を定めることを目的とし、利用者と当サイトとの間の本サービスの利用に関わる一切の関係に適用されます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">3. サービスの内容</h2>
          <p>
            本サービスは、テキストの文字数をカウントする機能を提供します。利用者は、テキストを入力することで、文字数のカウント結果を得ることができます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">4. 利用料金</h2>
          <p>
            本サービスは無料で提供されます。ただし、インターネット接続に必要な通信費用は利用者の負担となります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">5. 禁止事項</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>本サービスの運営を妨害する行為</li>
            <li>本サービスのシステムやネットワークに過度の負担をかける行為</li>
            <li>本サービスを通じて得た情報を商業的に利用する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">6. 免責事項</h2>
          <p>
            当サイトは、本サービスの内容の正確性、信頼性、完全性、有用性等について、いかなる保証も行いません。また、本サービスの利用により生じた損害について、一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">7. 規約の変更</h2>
          <p>
            当サイトは、必要と判断した場合には、利用者に通知することなく本規約を変更することができるものとします。変更後の利用規約は、当サイトに掲載された時点で効力を生じるものとします。
          </p>
        </section>

        <div className="text-sm text-gray-600 mt-12">
          最終更新日: 2024年2月21日
        </div>
      </div>
    </Layout>
  );
} 