import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // レイアウトの基本クラス
    'hidden',
    'xl:block',
    'fixed',
    'sticky',
    'top-4',
    'left-0',
    'right-0',
    'bottom-0',
    'w-[160px]',
    'h-screen',
    
    // 背景とスペース
    'bg-gray-50',
    'bg-gray-100',
    'p-4',
    'pb-24',
    'pt-16',
    'pb-32',
    'px-4',
    'py-4',
    
    // フレックスボックス
    'flex',
    'flex-1',
    'items-center',
    'justify-center',
    'justify-between',
    'flex-col',
    'sm:flex-row',
    'flex-wrap',
    'gap-4',
    
    // サイズと位置
    'w-full',
    'max-w-4xl',
    'max-w-[728px]',
    'min-h-screen',
    'h-64',
    'mx-auto',
    'relative',
    
    // ボーダーとシャドウ
    'border-2',
    'border-dashed',
    'border-gray-300',
    'border-b',
    'rounded-lg',
    'shadow-lg',
    
    // テキスト
    'text-gray-500',
    'text-sm',
    'text-center',
    'text-3xl',
    'font-bold',
    
    // マージンとパディング
    'mb-4',
    'mb-6',
    'space-x-2',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
