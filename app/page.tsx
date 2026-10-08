import Link from "next/link";
import Layout from "./components/Layout";
import { tools } from "./components/tools";

export default function HomePage() {
  return (
    <Layout>
      <section className="bg-pop border-b-2 border-ink">
        <div className="max-w-5xl mx-auto px-6 pt-14 pb-20 md:pt-[72px] md:pb-[88px]">
          <h1 className="text-[32px] sm:text-[36px] md:text-[56px] leading-[1.3] font-black">
            ちょっとした作業を、<br />ブラウザだけで。
          </h1>
          <p className="mt-6 text-lg leading-loose max-w-xl">
            入力した文字やファイルは、この端末の外には送られません。インストールも会員登録もいりません。
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-[72px]">
        <h2 className="text-2xl font-black mb-7">ツール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col gap-3.5 border-2 border-ink rounded-2xl p-6 bg-white shadow-hard transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <span className={`w-14 h-14 border-2 border-ink rounded-[14px] flex items-center justify-center ${tool.tileColor}`}>
                <tool.icon size={28} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span className="text-[21px] font-black">{tool.title}</span>
              <p className="text-[15px] leading-relaxed text-sub">{tool.description}</p>
              <span className="mt-auto self-start px-4 py-2 border-2 border-ink rounded-full bg-pop font-bold text-sm group-hover:bg-ink group-hover:text-white transition-colors">
                使ってみる
              </span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
