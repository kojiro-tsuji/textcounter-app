import type { NextConfig } from "next";

const securityHeaders = [
  // 他サイトのiframeへの埋め込みを禁止（クリックジャッキング対策）
  { key: "X-Frame-Options", value: "DENY" },
  // MIMEタイプのスニッフィングを禁止
  { key: "X-Content-Type-Options", value: "nosniff" },
  // 外部サイトへ送るリファラ情報を最小限に
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // 使用しないブラウザ機能を無効化
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
