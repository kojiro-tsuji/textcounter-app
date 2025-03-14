"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const len = Number(length) || 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let generated = "";
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generated += charset[randomIndex];
    }
    setPassword(generated);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">ランダムパスワード生成</h1>
      <div className="w-full max-w-md space-y-4">
        <div>
          <label
            htmlFor="password-length"
            className="block text-sm font-medium text-gray-700"
          >
            パスワードの長さ
          </label>
          <input
            id="password-length"
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <input
          type="text"
          readOnly
          value={password}
          placeholder="ここにパスワードが表示されます"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={generatePassword}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          パスワードを生成
        </button>
      </div>
    </div>
  );
};


