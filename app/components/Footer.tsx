import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-5xl mx-auto px-6 py-9 flex flex-wrap justify-between gap-x-8 gap-y-3 text-sm">
        <div>運営：辻 恒次朗 ／ お問い合わせ：gongbenhui23@gmail.com</div>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:underline">利用規約</Link>
          <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  );
}
