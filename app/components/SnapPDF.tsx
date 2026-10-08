'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { ImagePlus, ArrowUp, ArrowDown, X } from 'lucide-react';

// jsPDF が扱える形式のみ（SVG・TIFF は非対応）
const SUPPORTED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
const SUPPORTED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];

export default function ImagePDFConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [processingFile, setProcessingFile] = useState<string | null>(null);

  // ファイル選択処理
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // 画像ファイルのみをフィルタリング
      const imageFiles = Array.from(event.target.files).filter(isImageFile);

      if (imageFiles.length === 0) {
        setError('対応している画像がありません。JPG・PNG・GIF・WEBP・BMPを選んでください。');
        return;
      }

      setFiles(imageFiles);
      setError(null);
    }
  };

  // ドラッグ&ドロップ処理
  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    
    // 画像ファイルのみをフィルタリング
    const imageFiles = Array.from(event.dataTransfer.files).filter(isImageFile);

    if (imageFiles.length === 0) {
      setError('対応している画像がありません。JPG・PNG・GIF・WEBP・BMPをドロップしてください。');
      return;
    }
    
    setFiles(imageFiles);
    setError(null);
  };

  // 対応画像かどうか（MIMEタイプ、なければ拡張子で判定）
  function isImageFile(file: File): boolean {
    if (file.type) return SUPPORTED_TYPES.includes(file.type);
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    return SUPPORTED_EXTENSIONS.includes(ext);
  }

  // ファイル削除処理
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // すべてのファイルを削除
  const clearAllFiles = () => {
    setFiles([]);
  };

  // ファイルサイズの表示
  const getFileSizeText = (size: number): string => {
    if (size === 0) return "0 バイト";
    if (size < 1024) return `${size} バイト`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  // 進捗更新関数
  const updateProgress = (current: number, total: number) => {
    const percentage = Math.round((current / total) * 100);
    setProgress(percentage);
  };

  // PDFに変換してダウンロード
  const handleConvertToPDF = async () => {
    if (files.length === 0) {
      setError('変換する画像ファイルがありません');
      return;
    }

    setLoading(true);
    setError(null);
    setProgress(0);

    try {
      // PDFインスタンス作成
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      let isFirstPage = true;
      const totalFiles = files.length;

      // 各ファイルを処理
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setProcessingFile(file.name);
        
        // 新しいページ(最初以外)
        if (!isFirstPage) {
          pdf.addPage();
        } else {
          isFirstPage = false;
        }

        // ファイル名をヘッダーとして追加（オプション）
        if (files.length > 1) {
          pdf.setFontSize(8);
          pdf.setTextColor(150, 150, 150);
          pdf.text(file.name, 5, 5);
        }
        
        // 画像処理
        await processImageFile(file, pdf, pageWidth, pageHeight);
        
        // 進捗更新
        updateProgress(i + 1, totalFiles);
      }

      // PDF保存（複数ファイルの場合は日付を含む）
      const now = new Date();
      const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
      const timeStr = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
      
      const filename = files.length === 1 
        ? `${files[0].name.split('.')[0]}.pdf` 
        : `images_${dateStr}_${timeStr}.pdf`;
      
      pdf.save(filename);
      setProcessingFile(null);
    } catch (err) {
      console.error('PDF変換中のエラー:', err);
      setError(err instanceof Error ? `変換中にエラーが発生しました: ${err.message}` : '変換中にエラーが発生しました');
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  // 画像ファイル処理
  const processImageFile = async (file: File, pdf: jsPDF, pageWidth: number, pageHeight: number) => {
    try {
      // 画像をデータURLとして読み込む
      const imageData = await readFileAsDataURL(file);

      // 画像サイズの設定
      const imgProps = pdf.getImageProperties(imageData);
      
      // ページサイズに合わせる（余白も考慮）
      const margin = 5; // 上下左右の余白
      const maxWidth = pageWidth - (margin * 2);
      const maxHeight = pageHeight - (margin * 2) - 10; // ヘッダー用に少し余白
      
      let imgWidth = maxWidth;
      let imgHeight = (imgProps.height * maxWidth) / imgProps.width;
      
      // 高さが範囲を超える場合は調整
      if (imgHeight > maxHeight) {
        imgHeight = maxHeight;
        imgWidth = (imgProps.width * maxHeight) / imgProps.height;
      }
      
      // 画像をPDFに追加（中央揃え）
      const xPos = (pageWidth - imgWidth) / 2;
      const yPos = ((pageHeight - imgHeight) / 2) + 5; // ヘッダーの分を考慮して少し下に
      
      pdf.addImage(imageData, 'JPEG', xPos, yPos, imgWidth, imgHeight);
      
      return true;
    } catch (err) {
      console.error('画像処理エラー:', err);
      pdf.setFontSize(12);
      pdf.setTextColor(255, 0, 0);
      pdf.text('この画像の処理に失敗しました', 10, 20);
      pdf.setFontSize(10);
      pdf.text(`エラー: ${err instanceof Error ? err.message : '不明なエラー'}`, 10, 30);
      return false;
    }
  };

  // ユーティリティ関数: ファイルをDataURLとして読み込む
  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          resolve(e.target.result);
        } else {
          reject(new Error('ファイルの読み込みに失敗しました'));
        }
      };
      reader.onerror = () => reject(new Error('ファイル読み込みエラー'));
      reader.readAsDataURL(file);
    });
  };

  // ファイルの順序を入れ替える
  const moveFile = (fromIndex: number, toIndex: number) => {
    if (fromIndex < 0 || fromIndex >= files.length || toIndex < 0 || toIndex >= files.length) {
      return;
    }
    
    const newFiles = [...files];
    const [movedFile] = newFiles.splice(fromIndex, 1);
    newFiles.splice(toIndex, 0, movedFile);
    setFiles(newFiles);
  };

  // ファイルを上に移動
  const moveFileUp = (index: number) => {
    if (index > 0) {
      moveFile(index, index - 1);
    }
  };

  // ファイルを下に移動
  const moveFileDown = (index: number) => {
    if (index < files.length - 1) {
      moveFile(index, index + 1);
    }
  };

  return (
    <section className="border-2 border-ink rounded-[20px] shadow-[6px_6px_0_#111111] overflow-hidden bg-white">
      {/* ファイル選択エリア */}
      <label
        htmlFor="file-input"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="block bg-pink border-b-2 border-ink px-6 py-12 text-center cursor-pointer hover:brightness-105"
      >
        <span className="mx-auto mb-4 w-16 h-16 border-2 border-ink rounded-2xl bg-white flex items-center justify-center">
          <ImagePlus size={32} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span className="block text-lg font-black">ここに画像をドロップ</span>
        <span className="block mt-1 text-sm font-bold">またはクリックして選ぶ（何枚でもOK）</span>
        <input
          id="file-input"
          type="file"
          multiple
          accept={SUPPORTED_TYPES.join(',')}
          onChange={handleFileSelect}
          className="sr-only"
        />
      </label>

      <div className="p-6 flex flex-col gap-5">
        {/* 選択ファイル */}
        {files.length > 0 ? (
          <div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-bold">選んだ画像（{files.length}枚）</p>
              <button type="button" onClick={clearAllFiles} className="text-sm font-bold underline">
                すべて外す
              </button>
            </div>

            <ol className="space-y-2 max-h-72 overflow-y-auto">
              {files.map((file, index) => (
                <li key={index} className="flex items-center gap-3 border-2 border-ink rounded-xl px-3 py-2">
                  <span className="w-8 shrink-0 text-center font-mono text-sm">{index + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-sm font-bold">{file.name}</div>
                    <div className="text-xs text-sub">{getFileSizeText(file.size)}</div>
                  </div>
                  {files.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => moveFileUp(index)}
                        disabled={index === 0}
                        aria-label={`${file.name}を上へ`}
                        className="w-9 h-9 border-2 border-ink rounded-lg flex items-center justify-center disabled:opacity-30"
                      >
                        <ArrowUp size={16} strokeWidth={2.4} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveFileDown(index)}
                        disabled={index === files.length - 1}
                        aria-label={`${file.name}を下へ`}
                        className="w-9 h-9 border-2 border-ink rounded-lg flex items-center justify-center disabled:opacity-30"
                      >
                        <ArrowDown size={16} strokeWidth={2.4} />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    aria-label={`${file.name}を外す`}
                    className="w-9 h-9 border-2 border-ink rounded-lg bg-ink text-white flex items-center justify-center"
                  >
                    <X size={16} strokeWidth={2.4} />
                  </button>
                </li>
              ))}
            </ol>
            {files.length > 1 && (
              <p className="text-xs text-sub mt-2">上から順にPDFのページになります。矢印で入れ替えできます。</p>
            )}
          </div>
        ) : (
          <p className="text-sm text-sub">対応形式：JPG・PNG・GIF・WEBP・BMP</p>
        )}

        {/* エラー表示 */}
        {error && (
          <div role="alert" className="border-2 border-ink bg-pop rounded-xl px-4 py-3 font-bold text-sm">
            {error}
          </div>
        )}

        {/* 進捗表示 */}
        {loading && (
          <div>
            <div className="flex justify-between text-sm font-bold mb-1.5">
              <span className="truncate">{processingFile ? `処理中：${processingFile}` : '変換中…'}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-3 border-2 border-ink rounded-full overflow-hidden">
              <div className="h-full bg-ink transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {/* 変換ボタン */}
        <button
          type="button"
          onClick={handleConvertToPDF}
          disabled={files.length === 0 || loading}
          className="btn-pop h-[60px] text-[19px]"
        >
          {loading ? '変換中…' : 'PDFにしてダウンロード'}
        </button>
      </div>
    </section>
  );
}
