"use client";

import { useState, useEffect } from "react";
import { Copy, Check, RefreshCw, Eye, EyeOff } from "lucide-react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [isGenerated, setIsGenerated] = useState(false);

  // パスワード生成関数
  const generatePassword = () => {
    let charset = "";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    // 文字種が選択されていない場合は小文字をデフォルトで使用
    if (charset === "") charset = "abcdefghijklmnopqrstuvwxyz";

    const len = Number(length) || 8;
    let generated = "";
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generated += charset[randomIndex];
    }
    setPassword(generated);
    setIsGenerated(true);
  };

  // パスワードの強度を計算
  useEffect(() => {
    if (!password) {
      setStrength(0);
      return;
    }

    let score = 0;
    
    // 長さによるスコア
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    
    // 文字種によるスコア
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^a-zA-Z0-9]/.test(password)) score += 1;
    
    // 最大10点中の評価
    setStrength(Math.min(score, 5));
  }, [password]);

  // クリップボードにコピー
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // パスワード強度のラベルと色
  const getStrengthLabel = () => {
    switch (strength) {
      case 0: return { label: "評価なし", color: "bg-gray-200" };
      case 1: return { label: "非常に弱い", color: "bg-red-500" };
      case 2: return { label: "弱い", color: "bg-orange-500" };
      case 3: return { label: "普通", color: "bg-yellow-500" };
      case 4: return { label: "強い", color: "bg-green-500" };
      case 5: return { label: "非常に強い", color: "bg-green-700" };
      default: return { label: "評価なし", color: "bg-gray-200" };
    }
  };

  const strengthInfo = getStrengthLabel();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <div className="mb-8">
          <div className="relative">
            <div className="flex items-center mb-3">
              <input
                type={showPassword ? "text" : "password"}
                readOnly
                value={password}
                placeholder="パスワードを生成するにはボタンをクリックしてください"
                className="w-full p-4 pr-24 border border-gray-300 rounded-lg bg-gray-50 text-xl font-mono"
              />
              <div className="absolute right-3 flex space-x-3">
                {isGenerated && (
                  <>
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label={showPassword ? "パスワードを隠す" : "パスワードを表示"}
                      disabled={!isGenerated}
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="クリップボードにコピー"
                      disabled={!isGenerated}
                    >
                      {copied ? <Check size={22} className="text-green-500" /> : <Copy size={22} />}
                    </button>
                  </>
                )}
              </div>
            </div>
            
            {isGenerated && (
              <div className="flex items-center">
                <div className="text-sm font-medium text-gray-700 mr-3 min-w-24">強度: {strengthInfo.label}</div>
                <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${strengthInfo.color} transition-all duration-300`} style={{ width: `${(strength / 5) * 100}%` }}></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="password-length" className="block text-sm font-medium text-gray-700 mb-2">
              パスワードの長さ: <span className="font-bold text-blue-600">{length}</span> 文字
            </label>
            <input
              id="password-length"
              type="range"
              min={4}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4</span>
              <span>12</span>
              <span>20</span>
              <span>32</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">含める文字</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>大文字 (A-Z)</span>
              </label>
              <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>小文字 (a-z)</span>
              </label>
              <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>数字 (0-9)</span>
              </label>
              <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>記号 (!@#$%...)</span>
              </label>
            </div>
          </div>

          <button
            onClick={generatePassword}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg shadow transition-colors font-medium text-lg"
          >
            <RefreshCw size={20} className="mr-2" />
            {isGenerated ? "新しいパスワードを生成" : "パスワードを生成"}
          </button>
        </div>
      </div>
    </div>
  );
}