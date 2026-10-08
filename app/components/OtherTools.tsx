import Link from 'next/link';
import { tools } from './tools';

// ツールページ下部の「ほかのツール」リンク
export default function OtherTools({ current }: { current: string }) {
  return (
    <section className="mt-16">
      <h2 className="text-xl font-black mb-4">ほかのツール</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools
          .filter((tool) => tool.href !== current)
          .map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center gap-4 border-2 border-ink rounded-2xl p-4 hover:shadow-hard-sm transition-shadow"
            >
              <span className={`w-12 h-12 shrink-0 border-2 border-ink rounded-xl flex items-center justify-center ${tool.tileColor}`}>
                <tool.icon size={24} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span className="font-black">{tool.title}</span>
            </Link>
          ))}
      </div>
    </section>
  );
}
