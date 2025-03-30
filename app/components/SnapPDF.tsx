'use client';

import { useState, useCallback } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as mammoth from 'mammoth';
// require() 形式のインポートを維持
const Papa = require('papaparse');
import * as XLSX from 'xlsx';

interface FileData {
  text: string;
  html: string;
}

interface CSVResult {
  data: string[][];
  errors: unknown[];
  meta: unknown;
}

export default function FileConverter() {
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [fileTypes, setFileTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // ファイルタイプ別のアイコン表示用マッピング
  const fileTypeIcons: Record<string, string> = {
    'image': '🖼️',
    'pdf': '📄',
    'text': '📝',
    'word': '📘',
    'excel': '📊',
    'csv': '📈',
    'powerpoint': '📑',
    'other': '📁'
  };

  // ファイルタイプの判定
  const getFileType = useCallback((file: File): string => {
    const type = file.type.toLowerCase();
    if (type.startsWith('image/')) return 'image';
    if (type === 'application/pdf') return 'pdf';
    if (type === 'text/plain') return 'text';
    if (type.includes('word') || type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'word';
    if (type.includes('excel') || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') return 'excel';
    if (type === 'text/csv') return 'csv';
    if (type.includes('powerpoint') || type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') return 'powerpoint';
    return 'other';
  }, []);

  // クライアントサイドでプレースホルダー画像を生成する関数
  const createPlaceholderDataURI = (icon: string, filename: string): string => {
    // Canvas要素を作成
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return '';
    
    // 背景を描画
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // アイコンとファイル名を描画
    ctx.fillStyle = '#333333';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon, canvas.width / 2, canvas.height / 2 - 20);
    
    ctx.font = '16px Arial';
    
    // ファイル名が長い場合は省略
    let displayName = filename;
    if (displayName.length > 15) {
      displayName = displayName.substring(0, 12) + '...';
    }
    
    ctx.fillText(displayName, canvas.width / 2, canvas.height / 2 + 40);
    
    // DataURIとして返す
    return canvas.toDataURL('image/png');
  };
  
  // プレビュー生成関数
  const generatePreview = useCallback(async (file: File): Promise<string> => {
    const fileType = getFileType(file);
    
    if (fileType === 'image') {
      return URL.createObjectURL(file);
    }
    
    // 非画像ファイルはクライアントサイドで生成したプレースホルダー画像を使用
    return createPlaceholderDataURI(fileTypeIcons[fileType], file.name);
  }, [fileTypeIcons, getFileType]);

  // ドラッグ&ドロップ処理
  const handleDrop = useCallback(async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    
    const types = droppedFiles.map(file => getFileType(file));
    setFileTypes(types);
    
    const previews = await Promise.all(droppedFiles.map(file => generatePreview(file)));
    setPreviewUrls(previews);
  }, [generatePreview, getFileType]);
  
  // ファイル選択処理
  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles);
      
      const types = selectedFiles.map(file => getFileType(file));
      setFileTypes(types);
      
      const previews = await Promise.all(selectedFiles.map(file => generatePreview(file)));
      setPreviewUrls(previews);
    }
  }, [generatePreview, getFileType]);

  // WordドキュメントからテキストとHTMLを抽出する関数
  const extractFromWord = async (file: File): Promise<FileData> => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      const htmlResult = await mammoth.convertToHtml({ arrayBuffer });
      return { text: result.value, html: htmlResult.value };
    } catch (error) {
      console.error('Word文書の処理中にエラーが発生しました:', error);
      throw new Error('Word文書の処理に失敗しました');
    }
  };
  
  // ExcelシートからテキストとHTMLテーブルを生成する関数
  const extractFromExcel = async (file: File): Promise<FileData> => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      let text = '';
      let html = '<div>';
      
      workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
        
        text += `Sheet: ${sheetName}\n`;
        html += `<h3>Sheet: ${sheetName}</h3><table border="1">`;
        
        jsonData.forEach(row => {
          if (!Array.isArray(row)) return;
          
          const rowValues = row.map(cell => cell?.toString() || '');
          text += rowValues.join('\t') + '\n';
          
          html += '<tr>';
          rowValues.forEach(cell => {
            html += `<td>${cell}</td>`;
          });
          html += '</tr>';
        });
        
        html += '</table><br/>';
        text += '\n';
      });
      
      html += '</div>';
      return { text, html };
    } catch (error) {
      console.error('Excelファイルの処理中にエラーが発生しました:', error);
      throw new Error('Excelファイルの処理に失敗しました');
    }
  };
  
  // CSVファイルからテキストとHTMLテーブルを生成する関数
  const extractFromCSV = async (file: File): Promise<FileData> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (!event.target || !event.target.result) {
          reject(new Error('CSVファイルの読み込みに失敗しました'));
          return;
        }
        
        try {
          const csvText = event.target.result as string;
          Papa.parse(csvText, {
            header: false,
            skipEmptyLines: true,
            complete: (results: any) => {
              try {
                let text = '';
                let html = '<table border="1">';
                
                if (Array.isArray(results.data)) {
                  results.data.forEach((row: any[]) => {
                    if (!Array.isArray(row)) return;
                    
                    const rowValues = row.map(cell => cell?.toString() || '');
                    text += rowValues.join('\t') + '\n';
                    
                    html += '<tr>';
                    rowValues.forEach(cell => {
                      html += `<td>${cell}</td>`;
                    });
                    html += '</tr>';
                  });
                }
                
                html += '</table>';
                resolve({ text, html });
              } catch (error) {
                console.error('CSV解析結果の処理中にエラーが発生しました:', error);
                reject(new Error('CSVデータの処理に失敗しました'));
              }
            },
            error: (error: Error) => {
              console.error('CSVの解析中にエラーが発生しました:', error);
              reject(error);
            }
          });
        } catch (error) {
          console.error('CSVファイルの処理中にエラーが発生しました:', error);
          reject(new Error('CSVファイルの処理に失敗しました'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('CSVファイルの読み込みに失敗しました'));
      };
      
      reader.readAsText(file);
    });
  };
  
  // テキストファイルを処理する関数
  const extractFromText = async (file: File): Promise<FileData> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (!event.target || !event.target.result) {
          reject(new Error('テキストファイルの読み込みに失敗しました'));
          return;
        }
        
        try {
          const text = event.target.result as string;
          const html = `<pre>${text}</pre>`;
          resolve({ text, html });
        } catch (error) {
          console.error('テキストファイルの処理中にエラーが発生しました:', error);
          reject(new Error('テキストファイルの処理に失敗しました'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('テキストファイルの読み込みに失敗しました'));
      };
      
      reader.readAsText(file);
    });
  };

  // テキストをCanvasにレンダリングしてPDFに追加する関数
  const renderTextToPDF = async (pdfDoc: PDFDocument, text: string, title?: string) => {
    try {
      const pageWidth = 595;  // A4サイズの幅（ポイント）
      const pageHeight = 842; // A4サイズの高さ（ポイント）
      const margin = 50;
      const fontSize = 11;
      const lineHeight = fontSize * 1.5;
      
      // テキストを行に分割
      const lines = text.split('\n');
      
      // 先頭のページを作成
      let page = pdfDoc.addPage([pageWidth, pageHeight]);
      let y = pageHeight - margin;
      
      // Canvas要素を作成（テキストレンダリング用）
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas 2D context could not be created');
      
      canvas.width = pageWidth - 2 * margin;
      canvas.height = lineHeight;
      context.font = `${fontSize}px Arial, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, sans-serif`;
      context.fillStyle = 'black';
      context.textBaseline = 'top';
      
      // タイトルがある場合は追加（画像として）
      if (title) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = `bold ${fontSize + 2}px Arial, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, sans-serif`;
        context.fillText(title, 0, 0);
        
        const titleImageData = canvas.toDataURL('image/png');
        const titleImage = await pdfDoc.embedPng(titleImageData);
        
        page.drawImage(titleImage, {
          x: margin,
          y: y - lineHeight,
          width: canvas.width,
          height: lineHeight
        });
        
        y -= lineHeight * 2;
        
        // フォントを通常のサイズに戻す
        context.font = `${fontSize}px Arial, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, sans-serif`;
      }
      
      // 各行をキャンバスにレンダリングしてPDFに画像として埋め込む
      for (let i = 0; i < lines.length; i++) {
        // ページの下端に達したら新しいページを作成
        if (y < margin + lineHeight) {
          page = pdfDoc.addPage([pageWidth, pageHeight]);
          y = pageHeight - margin;
        }
        
        // キャンバスをクリアしてテキストを描画
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillText(lines[i] || ' ', 0, 0);
        
        // キャンバスの内容を画像として取得
        const lineImageData = canvas.toDataURL('image/png');
        const lineImage = await pdfDoc.embedPng(lineImageData);
        
        // 画像をPDFに追加
        page.drawImage(lineImage, {
          x: margin,
          y: y - lineHeight,
          width: canvas.width,
          height: lineHeight
        });
        
        // 次の行の位置に移動
        y -= lineHeight;
      }
    } catch (error) {
      console.error('PDFへのテキスト追加中にエラーが発生しました:', error);
      throw new Error('PDFへのテキスト追加に失敗しました');
    }
  };
  
  // Word文書の処理
  const processWordDocument = async (pdfDoc: PDFDocument, file: File) => {
    try {
      const { text } = await extractFromWord(file);
      await renderTextToPDF(pdfDoc, text, file.name);
    } catch (error) {
      console.error('Word文書の処理中にエラーが発生しました:', error);
      const page = pdfDoc.addPage();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      page.drawText(`Failed to process Word document: ${file.name}`, {
        x: 50,
        y: page.getHeight() - 50,
        size: 12,
        font: font,
        color: rgb(0, 0, 0),
      });
    }
  };

  // PDF変換処理
  const handleDownloadPDF = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = fileTypes[i];
        
        try {
          switch (fileType) {
            case 'image': {
              try {
                const imgBytes = await file.arrayBuffer();
                let img;
                
                if (file.type === 'image/png') {
                  img = await pdfDoc.embedPng(imgBytes);
                } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
                  img = await pdfDoc.embedJpg(imgBytes);
                } else {
                  // 他の画像形式は単純にテキストとして扱う
                  // エラーメッセージも画像として生成する
                  await renderTextToPDF(pdfDoc, `Unsupported image format: ${file.type}`);
                  continue;
                }
                
                // 画像サイズに基づいてページを作成
                const imgDims = img.scale(1);
                // あまりに大きい画像の場合はスケールダウン
                const maxWidth = 500;
                const maxHeight = 700;
                let scaleFactor = 1;
                
                if (imgDims.width > maxWidth || imgDims.height > maxHeight) {
                  const widthScale = maxWidth / imgDims.width;
                  const heightScale = maxHeight / imgDims.height;
                  scaleFactor = Math.min(widthScale, heightScale);
                }
                
                const finalWidth = imgDims.width * scaleFactor;
                const finalHeight = imgDims.height * scaleFactor;
                
                // ページサイズは画像より少し大きく
                const page = pdfDoc.addPage([
                  Math.max(finalWidth + 100, 595), // 少なくともA4の幅
                  Math.max(finalHeight + 100, 842) // 少なくともA4の高さ
                ]);
                
                // 中央に配置
                const x = (page.getWidth() - finalWidth) / 2;
                const y = (page.getHeight() - finalHeight) / 2;
                
                page.drawImage(img, {
                  x,
                  y,
                  width: finalWidth,
                  height: finalHeight,
                });
              } catch (error) {
                console.error('画像処理中のエラー:', error);
                await renderTextToPDF(pdfDoc, `Failed to process image: ${file.name}`);
              }
              break;
            }
            
            case 'pdf': {
              try {
                // PDFファイルを既存のPDFに追加
                const pdfBytes = await file.arrayBuffer();
                const externalPdfDoc = await PDFDocument.load(pdfBytes);
                const copiedPages = await pdfDoc.copyPages(externalPdfDoc, externalPdfDoc.getPageIndices());
                copiedPages.forEach(page => pdfDoc.addPage(page));
              } catch (error) {
                console.error('PDF処理中のエラー:', error);
                await renderTextToPDF(pdfDoc, `Failed to process PDF: ${file.name}`);
              }
              break;
            }
            
            case 'word': {
              await processWordDocument(pdfDoc, file);
              break;
            }
            
            case 'excel': {
              try {
                const { text } = await extractFromExcel(file);
                await renderTextToPDF(pdfDoc, text, file.name);
              } catch (error) {
                console.error('Excel処理中のエラー:', error);
                await renderTextToPDF(pdfDoc, `Failed to process Excel file: ${file.name}`);
              }
              break;
            }
            
            case 'csv': {
              try {
                const { text } = await extractFromCSV(file);
                await renderTextToPDF(pdfDoc, text, file.name);
              } catch (error) {
                console.error('CSV処理中のエラー:', error);
                await renderTextToPDF(pdfDoc, `Failed to process CSV file: ${file.name}`);
              }
              break;
            }
            
            case 'text': {
              try {
                const { text } = await extractFromText(file);
                await renderTextToPDF(pdfDoc, text, file.name);
              } catch (error) {
                console.error('テキスト処理中のエラー:', error);
                await renderTextToPDF(pdfDoc, `Failed to process text file: ${file.name}`);
              }
              break;
            }
            
            default: {
              // サポートされていないファイル形式
              await renderTextToPDF(pdfDoc, `Unsupported file type: ${file.type}`);
            }
          }
        } catch (error) {
          console.error(`ファイル処理中のエラー (${file.name}):`, error);
          await renderTextToPDF(pdfDoc, `Error processing file: ${file.name}`);
        }
      }
      
      // PDFファイルが空の場合（ページがない場合）は空のページを追加
      if (pdfDoc.getPageCount() === 0) {
        pdfDoc.addPage();
      }
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted_document.pdf';
      link.click();
      
      // メモリリーク防止のためURLを解放
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
      
    } catch (err) {
      console.error('PDF生成中のエラー:', err);
      setError('PDFの生成中にエラーが発生しました。詳細はコンソールを確認してください。');
    } finally {
      setLoading(false);
    }
  };
  
  // ファイル削除処理
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    setFileTypes(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">ファイル → PDF変換ツール</h2>
      <p className="text-center text-gray-600 mb-6">
        画像、テキスト、Word、Excel、CSV、PDFなど様々なファイルをPDFに変換できます
      </p>
      
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full h-64 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center rounded-md mb-4 text-gray-500 cursor-pointer"
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p>ここにファイルをドロップするか、クリックして選択</p>
        <p className="text-xs mt-2">対応形式: 画像、PDF、Word、Excel、CSV、テキストなど</p>
        <input
          id="fileInput"
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">選択されたファイル ({files.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-100 rounded shadow p-2 h-full flex flex-col">
                  <div className="relative pt-[100%] bg-white rounded mb-2 overflow-hidden">
                    {fileTypes[index] === 'image' ? (
                      <div className="absolute top-0 left-0 w-full h-full">
                        <img
                          src={previewUrls[index]}
                          alt={`preview-${index}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl">
                        {fileTypeIcons[fileTypes[index]]}
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // イベントの伝播を停止
                        removeFile(index);
                      }}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                  <div className="text-xs truncate" title={file.name}>
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleDownloadPDF}
          disabled={files.length === 0 || loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              変換中...
            </>
          ) : (
            'PDFとして保存'
          )}
        </button>
      </div>
    </div>
  );
}