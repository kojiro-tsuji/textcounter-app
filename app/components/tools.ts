import { Type, Lock, FileImage, type LucideIcon } from "lucide-react";

export interface Tool {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tileColor: string;
}

export const tools: Tool[] = [
  {
    title: "文字数カウンター",
    description: "貼り付けるだけで文字数がわかります。スペースや全角・半角を数えるかも切り替えOK。",
    href: "/counter",
    icon: Type,
    tileColor: "bg-sky",
  },
  {
    title: "パスワード生成",
    description: "長さと使う文字を選んで、推測されにくいパスワードを作ります。コピーもワンタップ。",
    href: "/password",
    icon: Lock,
    tileColor: "bg-mint",
  },
  {
    title: "画像→PDF",
    description: "写真やスクショを何枚でも1つのPDFに。ページの順番も並べ替えできます。",
    href: "/snapPDF",
    icon: FileImage,
    tileColor: "bg-pink",
  },
];
