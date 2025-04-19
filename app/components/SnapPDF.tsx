'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

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
      const imageFiles = Array.from(event.target.files).filter(file => 
        file.type.startsWith('image/') || isImageByExtension(file.name)
      );
      
      if (imageFiles.length === 0) {
        setError('画像ファイルが選択されていません。JPG, PNG, GIF, WEBP, BMPなどの画像ファイルを選択してください。');
        return;
      }
      
      setFiles(imageFiles);
      setError(null);
    }
  };

  // ドラッグ&ドロップ処理
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    // 画像ファイルのみをフィルタリング
    const imageFiles = Array.from(event.dataTransfer.files).filter(file => 
      file.type.startsWith('image/') || isImageByExtension(file.name)
    );
    
    if (imageFiles.length === 0) {
      setError('画像ファイルが含まれていません。JPG, PNG, GIF, WEBP, BMPなどの画像ファイルをドロップしてください。');
      return;
    }
    
    setFiles(imageFiles);
    setError(null);
  };

  // 拡張子による画像ファイル判定
  const isImageByExtension = (filename: string): boolean => {
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'tif', 'svg'].includes(ext);
  };

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
      let totalFiles = files.length;

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

  // 画像ファイルかどうかを確認する関数
  const isImageFile = (file: File): boolean => {
    return file.type.startsWith('image/') || isImageByExtension(file.name);
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
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">画像用PDF変換ツール</h2>
      <p className="text-center text-gray-600 mb-6">JPG, PNG, GIF, WEBP, BMPなどの画像ファイルをPDFに変換します</p>
      
      {/* ファイル選択エリア */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <div className="text-3xl mb-3">🖼️</div>
        <p className="mb-2">ここに画像ファイルをドロップ、またはクリックして選択</p>
        <p className="text-xs text-gray-500">複数ファイル選択可能</p>
        <input
          id="file-input"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* 選択ファイル */}
      {files.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium">選択した画像 ({files.length}件):</p>
            <button 
              onClick={clearAllFiles}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              すべて削除
            </button>
          </div>
          
          <ul className="mt-2 space-y-2 max-h-64 overflow-y-auto border rounded-lg p-2">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded hover:bg-gray-100">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🖼️</span>
                  <div>
                    <span className="text-sm">{file.name}</span>
                    <span className="text-xs text-gray-500 ml-2">{getFileSizeText(file.size)}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  {files.length > 1 && (
                    <>
                      <button 
                        onClick={() => moveFileUp(index)}
                        disabled={index === 0}
                        className="text-gray-500 hover:text-gray-700 px-1 disabled:opacity-30"
                      >
                        ↑
                      </button>
                      <button 
                        onClick={() => moveFileDown(index)}
                        disabled={index === files.length - 1}
                        className="text-gray-500 hover:text-gray-700 px-1 disabled:opacity-30 mr-1"
                      >
                        ↓
                      </button>
                    </>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          {/* ページ順の説明 */}
          {files.length > 1 && (
            <p className="text-xs text-gray-500 mt-1">↑↓ボタンでPDFのページ順を変更できます</p>
          )}
        </div>
      )}

      {/* エラー表示 */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* 進捗表示 */}
      {loading && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>{processingFile ? `処理中: ${processingFile}` : '変換中...'}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* 変換ボタン */}
      <button
        onClick={handleConvertToPDF}
        disabled={files.length === 0 || loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        {loading ? '変換中...' : 'PDFに変換してダウンロード'}
      </button>
      
      {/* 機能説明 */}
      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">このツールでできること</h3>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• 複数の画像ファイルを1つのPDFに変換</li>
          <li>• ドラッグ&ドロップで簡単にファイル追加</li>
          <li>• ページ順の並べ替え</li>
          <li>• 画像サイズをPDFページに最適化</li>
        </ul>
      </div>
      
      {/* 注意事項 */}
      <div className="mt-3 text-xs text-gray-500">
        <p>※ 大きな画像ファイルの変換には時間がかかる場合があります</p>
        <p>※ 変換処理はブラウザ上で実行されるため、端末の性能に依存します</p>
      </div>
    </div>
  );
}