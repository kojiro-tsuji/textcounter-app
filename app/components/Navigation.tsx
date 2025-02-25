'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ハンバーガーメニューボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="メニュー"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* メニューオーバーレイ */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* メニュー本体 */}
      <nav
        className={`fixed top-16 right-4 z-40 bg-white rounded-lg shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-4 w-64">
          <div className="text-lg font-bold mb-4">メニュー</div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`block p-2 rounded hover:bg-gray-100 ${
                  pathname === '/' ? 'text-blue-500 font-semibold' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className={`block p-2 rounded hover:bg-gray-100 ${
                  pathname === '/terms' ? 'text-blue-500 font-semibold' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                利用規約
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className={`block p-2 rounded hover:bg-gray-100 ${
                  pathname === '/privacy' ? 'text-blue-500 font-semibold' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
} 