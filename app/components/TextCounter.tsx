'use client';

import { useState, useCallback } from 'react';

interface CountOptions {
  countSpaces: boolean;
  countFullWidth: boolean;
  countHalfWidth: boolean;
}

export default function TextCounter() {
  const [text, setText] = useState('');
  const [countOptions, setCountOptions] = useState<CountOptions>({
    countSpaces: false,
    countFullWidth: true,
    countHalfWidth: true,
  });

  const getCharacterCount = useCallback(() => {
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
    navigator.clipboard.writeText(`文字数: ${getCharacterCount()}\nテキスト:\n${text}`);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">文字数カウンター</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={countOptions.countSpaces}
              onChange={(e) => setCountOptions(prev => ({ ...prev, countSpaces: e.target.checked }))}
              className="form-checkbox"
            />
            <span>スペースを含める</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={countOptions.countFullWidth}
              onChange={(e) => setCountOptions(prev => ({ ...prev, countFullWidth: e.target.checked }))}
              className="form-checkbox"
            />
            <span>全角文字</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={countOptions.countHalfWidth}
              onChange={(e) => setCountOptions(prev => ({ ...prev, countHalfWidth: e.target.checked }))}
              className="form-checkbox"
            />
            <span>半角文字</span>
          </label>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="ここにテキストを入力してください..."
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">
            文字数: {getCharacterCount()}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              コピー
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              クリア
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 