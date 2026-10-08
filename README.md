# 便利ツール集

ブラウザだけで使える、小さな無料ツールのサイトです。入力した文字や画像はサーバーに送られず、すべて利用者のブラウザの中で処理されます。

**サイト：** https://textcounter-app.vercel.app

## ツール

| ツール | パス | できること |
| --- | --- | --- |
| 文字数カウンター | `/counter` | 文字数をリアルタイムで数える。スペース・改行、全角、半角を数えるかどうかを切り替えられる |
| パスワード生成 | `/password` | 長さ（4〜32文字）と文字の種類を選んでパスワードを作る。乱数には `crypto.getRandomValues()` を使用 |
| 画像→PDF | `/snapPDF` | JPG・PNG・GIF・WEBP・BMP の画像を1つのPDFにまとめる。ページの並べ替えができる |

## 技術スタック

- [Next.js](https://nextjs.org/) 16（App Router、全ページ静的生成）
- React 19 / TypeScript
- Tailwind CSS 3
- [jsPDF](https://github.com/parallax/jsPDF)（PDF生成）
- [Lucide](https://lucide.dev/)（アイコン）
- ホスティング：Vercel

サーバー側の処理や API はなく、環境変数も不要です。

## ローカルで動かす

Node.js 20 以上が必要です。

```bash
git clone https://github.com/kojiro-tsuji/textcounter-app.git
cd textcounter-app
npm install
npm run dev
```

http://localhost:3000 で開けます。

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用にビルド |
| `npm run start` | ビルドしたものを起動 |
| `npm run lint` | ESLint を実行 |

## ディレクトリ構成

```
app/
├── page.tsx            トップページ
├── counter/            文字数カウンター
├── password/           パスワード生成
├── snapPDF/            画像→PDF
├── privacy/ terms/     プライバシーポリシー・利用規約
├── components/
│   ├── Layout.tsx      ヘッダー・フッターを含む共通レイアウト
│   ├── tools.ts        ツールの一覧（ナビ・トップ・関連リンクで共有）
│   └── ...             各ツールの本体
├── robots.ts / sitemap.ts
└── layout.tsx          フォントとサイト全体のメタ情報
```

ツールを追加するときは、ページを作ったうえで `app/components/tools.ts` と `app/sitemap.ts` に追記してください。ヘッダーやトップの一覧には `tools.ts` から自動で反映されます。

## セキュリティ

`next.config.ts` で次のレスポンスヘッダーを付けています。

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

脆弱性に気づいた場合は、Issue ではなく下記のメールアドレスまでご連絡ください。

## ライセンス

[MIT](LICENSE)

## 運営者

辻 恒次朗（gongbenhui23@gmail.com）
