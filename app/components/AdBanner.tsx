'use client';

// AdSenseの型定義は現在使用していないため削除
interface AdBannerProps {
  className?: string;
  width: number;
  height: number;
  position: 'left' | 'right' | 'footer';
}

export default function AdBanner({ className = '', width, height, position }: AdBannerProps) {
  // 広告スペースの表示
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="text-gray-500 text-sm text-center">
        広告スペース<br />
        {position} ({width}x{height})
      </div>
    </div>
  );
} 