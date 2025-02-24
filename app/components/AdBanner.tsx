'use client';

import { useEffect, useState, useRef } from 'react';

// AdSenseの型定義の改善
declare global {
  interface Window {
    adsbygoogle: any[] | undefined;
  }
}

interface AdBannerProps {
  className?: string;
  adSlot: string;
  width: number;
  height: number;
  position: 'left' | 'right' | 'footer';
}

export default function AdBanner({ className = '', adSlot, width, height, position }: AdBannerProps) {
  const [isClient, setIsClient] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const isDevelopment = process.env.NODE_ENV === 'development';
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    // 本番環境でのみGoogle AdSenseスクリプトを読み込む
    if (!isDevelopment && typeof window !== 'undefined' && !window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => setIsScriptLoaded(true);
      document.head.appendChild(script);

      // AdSense配列の初期化
      window.adsbygoogle = [];
    } else if (!isDevelopment && window.adsbygoogle) {
      setIsScriptLoaded(true);
    }
  }, []);

  // 広告の初期化
  useEffect(() => {
    if (!isDevelopment && isClient && isScriptLoaded && adRef.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle as any[]).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [isClient, isDevelopment, isScriptLoaded]);

  // 開発環境用のプレースホルダー
  if (isDevelopment) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="text-gray-500 text-sm text-center">
          広告スペース<br />
          {position} ({width}x{height})
        </div>
      </div>
    );
  }

  // 本番環境用の広告表示
  if (!isClient) return null;

  return (
    <div className={className} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
} 