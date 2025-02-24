# 文字数カウンターアプリ

シンプルで使いやすい文字数カウンターアプリケーションです。

## 機能

- リアルタイムな文字数カウント
- 全角・半角文字のカウント設定
- スペースのカウント設定
- コピー機能
- クリア機能

## 技術スタック

- Next.js
- TypeScript
- Tailwind CSS
- Google AdSense

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/textcounter-app.git

# プロジェクトディレクトリに移動
cd textcounter-app

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=your-adsense-client-id
```

## デプロイ

このアプリケーションは[Vercel](https://vercel.com)にデプロイすることを推奨します。

```bash
# Vercelへのデプロイ
vercel
```

## ライセンス

MIT

## 作者

[Your Name]
