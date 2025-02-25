import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // レイアウトの基本クラス
    'hidden',
    'fixed',
    'sticky',
    'top-4',
    'right-4',
    'z-40',
    'z-50',
    'inset-0',
    'pointer-events-none',
    
    // 背景とスペース
    'bg-gray-50',
    'bg-gray-100',
    'bg-white',
    'bg-black',
    'bg-opacity-50',
    'p-4',
    'py-16',
    'px-4',
    'space-y-2',
    
    // フレックスボックス
    'flex',
    'items-center',
    'justify-center',
    'flex-col',
    'sm:flex-row',
    'gap-4',
    
    // サイズと位置
    'w-full',
    'w-64',
    'w-6',
    'h-6',
    'max-w-4xl',
    'min-h-screen',
    'h-64',
    'mx-auto',
    'relative',
    
    // テキストとボーダー
    'text-gray-700',
    'text-blue-500',
    'text-sm',
    'text-lg',
    'text-3xl',
    'font-bold',
    'font-semibold',
    'rounded-lg',
    'shadow-lg',
    
    // フォーム要素
    'form-checkbox',
    
    // トランジション
    'transition-colors',
    'transition-opacity',
    'transition-transform',
    'duration-300',
    'opacity-0',
    'opacity-100',
    'translate-y-0',
    '-translate-y-2',
    'hover:bg-gray-100'
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
