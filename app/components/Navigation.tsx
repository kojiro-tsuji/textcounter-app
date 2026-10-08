'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tools } from './tools';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-pop border-b-2 border-ink">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-x-7 gap-y-3">
        <Link href="/" className="text-xl font-black">
          便利ツール集
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm font-bold">
          {tools.map((tool) => {
            const active = pathname === tool.href;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                aria-current={active ? 'page' : undefined}
                className={`px-3.5 py-2.5 rounded-full border-2 border-ink transition-colors ${
                  active ? 'bg-ink text-white' : 'bg-white hover:bg-ink hover:text-white'
                }`}
              >
                {tool.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
