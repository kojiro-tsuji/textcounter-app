"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Eye, EyeOff } from "lucide-react";

const CHARSETS = [
  { key: "upper", label: "大文字 A-Z", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { key: "lower", label: "小文字 a-z", chars: "abcdefghijklmnopqrstuvwxyz" },
  { key: "number", label: "数字 0-9", chars: "0123456789" },
  { key: "symbol", label: "記号 !@#$", chars: "!@#$%^&*()_+-=[]{}|;:,.<>?" },
] as const;

type CharsetKey = (typeof CHARSETS)[number]["key"];

const STRENGTH_LABELS = ["", "とても弱い", "弱い", "ふつう", "強い", "とても強い"];

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [enabled, setEnabled] = useState<Record<CharsetKey, boolean>>({
    upper: true,
    lower: true,
    number: true,
    symbol: false,
  });
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  // パスワード生成関数
  const generatePassword = () => {
    let charset = CHARSETS.filter((c) => enabled[c.key]).map((c) => c.chars).join("");

    // 文字種が選択されていない場合は小文字をデフォルトで使用
    if (charset === "") charset = CHARSETS[1].chars;

    // 暗号論的に安全な乱数を使用（偏りを避けるため範囲外の値は棄却）
    const limit = Math.floor(0x100000000 / charset.length) * charset.length;
    const buf = new Uint32Array(1);
    let generated = "";
    while (generated.length < length) {
      crypto.getRandomValues(buf);
      if (buf[0] >= limit) continue;
      generated += charset[buf[0] % charset.length];
    }
    setPassword(generated);
    setCopied(false);
  };

  // パスワードの強度（0〜5）
  const strength = useMemo(() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^a-zA-Z0-9]/.test(password)) score += 1;
    return Math.min(score, 5);
  }, [password]);

  // クリップボードにコピー
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="border-2 border-ink rounded-[20px] shadow-[6px_6px_0_#111111] overflow-hidden bg-white">
      <div className="bg-mint border-b-2 border-ink p-6 flex flex-wrap items-center gap-3">
        <div
          className={`flex-[1_1_320px] min-w-0 font-mono text-2xl md:text-[28px] tracking-wide break-all ${
            password ? "" : "text-sub text-lg md:text-lg font-sans font-bold tracking-normal"
          }`}
          aria-live="polite"
        >
          {password ? (showPassword ? password : "•".repeat(password.length)) : "「生成する」を押すとここに出ます"}
        </div>
        {password && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "パスワードを隠す" : "パスワードを表示"}
              className="w-12 h-12 border-2 border-ink bg-white rounded-xl flex items-center justify-center"
            >
              {showPassword ? <EyeOff size={22} strokeWidth={2.2} /> : <Eye size={22} strokeWidth={2.2} />}
            </button>
            <button
              type="button"
              onClick={copyToClipboard}
              className="h-12 px-5 border-2 border-ink bg-ink text-white rounded-xl font-bold flex items-center gap-2"
            >
              {copied ? <Check size={18} strokeWidth={2.6} /> : <Copy size={18} strokeWidth={2.2} />}
              {copied ? "コピーしました" : "コピー"}
            </button>
          </div>
        )}
        {password && (
          <div className="basis-full text-sm font-bold">
            強さ：
            <span className="px-2.5 py-0.5 border-2 border-ink rounded-full bg-white">{STRENGTH_LABELS[strength]}</span>
          </div>
        )}
      </div>

      <div className="px-6 py-7 flex flex-col gap-7">
        <div>
          <div className="flex justify-between items-baseline mb-2.5">
            <label htmlFor="password-length" className="font-bold">長さ</label>
            <span className="text-[22px] font-black">
              {length}
              <span className="text-sm font-bold"> 文字</span>
            </span>
          </div>
          <input
            id="password-length"
            type="range"
            min={4}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-ink cursor-pointer"
          />
        </div>

        <fieldset>
          <legend className="font-bold mb-3">使う文字</legend>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {CHARSETS.map((c) => (
              <label
                key={c.key}
                className={`flex items-center gap-2.5 min-h-[52px] px-4 border-2 border-ink rounded-xl font-bold cursor-pointer transition-colors ${
                  enabled[c.key] ? "bg-pop" : "bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={enabled[c.key]}
                  onChange={(e) => setEnabled((prev) => ({ ...prev, [c.key]: e.target.checked }))}
                  className="w-[18px] h-[18px] accent-ink"
                />
                {c.label}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="button" onClick={generatePassword} className="btn-pop h-[60px] text-[19px]">
          {password ? "もう一度生成する" : "生成する"}
        </button>
      </div>
    </section>
  );
}
