'use client';

import { useState, useMemo } from 'react';

interface CountOptions {
  countSpaces: boolean;
  countFullWidth: boolean;
  countHalfWidth: boolean;
}

const OPTION_LABELS: { key: keyof CountOptions; label: string }[] = [
  { key: 'countSpaces', label: 'スペース・改行も数える' },
  { key: 'countFullWidth', label: '全角を数える' },
  { key: 'countHalfWidth', label: '半角を数える' },
];

export default function TextCounter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [countOptions, setCountOptions] = useState<CountOptions>({
    countSpaces: false,
    countFullWidth: true,
    countHalfWidth: true,
  });

  const characterCount = useMemo(() => {
    let count = 0;
    let processedText = text;

    if (!countOptions.countSpaces) {
      processedText = processedText.replace(/\s/g, '');
    }

    for (let i = 0; i < processedText.length; i++) {
      const char = processedText.charAt(i);
      if (countOptions.countFullWidth && char.match(/[^\x01-\x7E]/)) {
        count++;
      }
      if (countOptions.countHalfWidth && char.match(/[\x01-\x7E]/)) {
        count++;
      }
    }

    return count;
  }, [text, countOptions]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <section className="border-2 border-ink rounded-[20px] shadow-[6px_6px_0_#111111] overflow-hidden bg-white">
      <div className="bg-sky border-b-2 border-ink px-6 py-5 flex flex-wrap items-end justify-between gap-4">
        <div aria-live="polite">
          <div className="text-sm font-bold">文字数</div>
          <div className="text-5xl font-black leading-none mt-1">
            {characterCount.toLocaleString()}
            <span className="text-lg font-bold ml-1">文字</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!text}
            className="h-12 px-5 border-2 border-ink bg-ink text-white rounded-xl font-bold disabled:bg-transparent disabled:text-ink/40 disabled:border-ink/40"
          >
            {copied ? 'コピーしました' : 'コピー'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={!text}
            className="h-12 px-5 border-2 border-ink bg-white rounded-xl font-bold disabled:bg-transparent disabled:text-ink/40 disabled:border-ink/40"
          >
            クリア
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-5">
        <label htmlFor="counter-text" className="sr-only">数えたい文章</label>
        <textarea
          id="counter-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-72 p-4 border-2 border-ink rounded-xl text-base leading-relaxed resize-y focus:outline-none focus:ring-4 focus:ring-pop"
          placeholder="ここに文章を貼り付けるか、入力してください"
        />

        <fieldset>
          <legend className="font-bold mb-3">数え方</legend>
          <div className="flex flex-wrap gap-2.5">
            {OPTION_LABELS.map(({ key, label }) => (
              <label
                key={key}
                className={`flex items-center gap-2.5 min-h-[48px] px-4 border-2 border-ink rounded-xl font-bold cursor-pointer transition-colors ${
                  countOptions[key] ? 'bg-pop' : 'bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={countOptions[key]}
                  onChange={(e) => setCountOptions((prev) => ({ ...prev, [key]: e.target.checked }))}
                  className="w-[18px] h-[18px] accent-ink"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
}
