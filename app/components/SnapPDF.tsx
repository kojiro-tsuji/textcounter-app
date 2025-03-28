'use client';

import { useState, useCallback } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import * as mammoth from 'mammoth';
// 修正1: require() 形式のインポートを変更
const Papa = require('papaparse');

import * as XLSX from 'xlsx';
import Image from 'next/image'; // Image コンポーネントをインポート

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
  const getFileType = (file: File): string => {
    const type = file.type.toLowerCase();
    if (type.startsWith('image/')) return 'image';
    if (type === 'application/pdf') return 'pdf';
    if (type === 'text/plain') return 'text';
    if (type.includes('word') || type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'word';
    if (type.includes('excel') || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') return 'excel';
    if (type === 'text/csv') return 'csv';
    if (type.includes('powerpoint') || type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') return 'powerpoint';
    return 'other';
  };

  // 修正2: generatePreview 関数を useCallback でラップ
  const generatePreview = useCallback(async (file: File): Promise<string> => {
    const fileType = getFileType(file);
    
    if (fileType === 'image') {
      return URL.createObjectURL(file);
    }
    
    // 非画像ファイルはタイプに応じたアイコン表示用のデータURIを返す
    return `/api/placeholder/200/200?text=${fileTypeIcons[fileType]}%20${file.name}`;
  }, [fileTypeIcons]); // 依存配列に fileTypeIcons を追加

  const handleDrop = useCallback(async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    
    const types = droppedFiles.map(file => getFileType(file));
    setFileTypes(types);
    
    const previews = await Promise.all(droppedFiles.map(file => generatePreview(file)));
    setPreviewUrls(previews);
  }, [generatePreview, getFileType]);
  
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
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    const htmlResult = await mammoth.convertToHtml({ arrayBuffer });
    return { text: result.value, html: htmlResult.value };
  };
  
  // ExcelシートからテキストとHTMLテーブルを生成する関数
  const extractFromExcel = async (file: File): Promise<FileData> => {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    let text = '';
    let html = '<div>';
    
    workbook.SheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
      
      text += `Sheet: ${sheetName}\n`;
      html += `<h3>Sheet: ${sheetName}</h3><table border="1">`;
      
      jsonData.forEach(row => {
        text += row.join('\t') + '\n';
        html += '<tr>';
        if (Array.isArray(row)) {
          row.forEach(cell => {
            html += `<td>${cell}</td>`;
          });
        }
        html += '</tr>';
      });
      
      html += '</table><br/>';
      text += '\n';
    });
    
    html += '</div>';
    return { text, html };
  };
  
  // CSVファイルからテキストとHTMLテーブルを生成する関数
  const extractFromCSV = async (file: File): Promise<FileData> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const csvText = event.target.result as string;
          Papa.parse(csvText, {
            header: false,
            skipEmptyLines: true,
            complete: (results: CSVResult) => {
              let text = '';
              let html = '<table border="1">';
              
              results.data.forEach(row => {
                text += row.join('\t') + '\n';
                html += '<tr>';
                row.forEach(cell => {
                  html += `<td>${cell}</td>`;
                });
                html += '</tr>';
              });
              
              html += '</table>';
              resolve({ text, html });
            },
            error: (error: Error) => {
              reject(error);
            }
          });
        }
      };
      reader.readAsText(file);
    });
  };
  
  // テキストファイルを処理する関数
  const extractFromText = async (file: File): Promise<FileData> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const text = event.target.result as string;
          const html = `<pre>${text}</pre>`;
          resolve({ text, html });
        }
      };
      reader.onerror = () => reject(new Error('Failed to read text file'));
      reader.readAsText(file);
    });
  };

  const handleDownloadPDF = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const pdfDoc = await PDFDocument.create();
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = fileTypes[i];
        
        switch (fileType) {
          case 'image': {
            const imgBytes = await file.arrayBuffer();
            let img;
            
            if (file.type === 'image/png') {
              img = await pdfDoc.embedPng(imgBytes);
            } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
              img = await pdfDoc.embedJpg(imgBytes);
            } else {
              // 他の画像形式は単純にテキストとして扱う
              const page = pdfDoc.addPage();
              page.drawText(`Unsupported image format: ${file.type}`, {
                x: 50,
                y: page.getHeight() - 50,
                size: 12,
              });
              continue;
            }
            
            const dims = img.scale(1);
            const page = pdfDoc.addPage([dims.width, dims.height]);
            page.drawImage(img, {
              x: 0,
              y: 0,
              width: dims.width,
              height: dims.height,
            });
            break;
          }
          
          case 'pdf': {
            // PDFファイルを既存のPDFに追加
            const pdfBytes = await file.arrayBuffer();
            const externalPdfDoc = await PDFDocument.load(pdfBytes);
            const copiedPages = await pdfDoc.copyPages(externalPdfDoc, externalPdfDoc.getPageIndices());
            copiedPages.forEach(page => pdfDoc.addPage(page));
            break;
          }
          
          case 'word': {
            try {
              // 修正3: 未使用の変数 html を削除
              const { text } = await extractFromWord(file);
              const page = pdfDoc.addPage();
              const fontSize = 12;
              const lineHeight = fontSize * 1.2;
              const margin = 50;
              const width = page.getWidth() - margin * 2;
              const maxLinesPerPage = Math.floor((page.getHeight() - margin * 2) / lineHeight);
              
              // テキストを行に分割
              const lines = [];
              let currentLine = '';
              const words = text.split(' ');
              
              for (const word of words) {
                const testLine = currentLine + (currentLine ? ' ' : '') + word;
                // 簡易的な行の長さチェック（正確なフォント幅計測ではない）
                if (testLine.length * fontSize/2 > width) {
                  lines.push(currentLine);
                  currentLine = word;
                } else {
                  currentLine = testLine;
                }
              }
              if (currentLine) lines.push(currentLine);
              
              // 複数ページに分割して描画
              let currentPage = page;
              let y = currentPage.getHeight() - margin;
              
              for (let i = 0; i < lines.length; i++) {
                if (i > 0 && i % maxLinesPerPage === 0) {
                  currentPage = pdfDoc.addPage();
                  y = currentPage.getHeight() - margin;
                }
                
                currentPage.drawText(lines[i], {
                  x: margin,
                  y: y - (i % maxLinesPerPage) * lineHeight,
                  size: fontSize,
                  color: rgb(0, 0, 0),
                });
              }
            } catch (e) {
              console.error('Word処理中のエラー:', e);
              const page = pdfDoc.addPage();
              page.drawText(`Failed to process Word document: ${file.name}`, {
                x: 50,
                y: page.getHeight() - 50,
                size: 12,
              });
            }
            break;
          }
          
          case 'excel':
          case 'csv': {
            try {
              let data;
              if (fileType === 'excel') {
                data = await extractFromExcel(file);
              } else {
                data = await extractFromCSV(file);
              }
              
              const page = pdfDoc.addPage();
              const fontSize = 10;
              const lineHeight = fontSize * 1.2;
              const margin = 50;
              const maxLinesPerPage = Math.floor((page.getHeight() - margin * 2) / lineHeight);
              
              // テキストを行に分割
              const lines = data.text.split('\n');
              
              // 複数ページに分割して描画
              let currentPage = page;
              let y = currentPage.getHeight() - margin;
              
              // タイトルを表示
              currentPage.drawText(`${file.name}`, {
                x: margin,
                y: y,
                size: fontSize + 2,
                color: rgb(0, 0, 0),
              });
              
              y -= lineHeight * 2;
              
              for (let i = 0; i < lines.length; i++) {
                if (i > 0 && (i % maxLinesPerPage === 0 || y - lineHeight < margin)) {
                  currentPage = pdfDoc.addPage();
                  y = currentPage.getHeight() - margin;
                }
                
                currentPage.drawText(lines[i], {
                  x: margin,
                  y: y,
                  size: fontSize,
                  color: rgb(0, 0, 0),
                });
                
                y -= lineHeight;
              }
            } catch (e) {
              console.error('表計算処理中のエラー:', e);
              const page = pdfDoc.addPage();
              page.drawText(`Failed to process spreadsheet: ${file.name}`, {
                x: 50,
                y: page.getHeight() - 50,
                size: 12,
              });
            }
            break;
          }
          
          case 'text': {
            try {
              // 修正3: 未使用の変数 html を削除
              const { text } = await extractFromText(file);
              const page = pdfDoc.addPage();
              const fontSize = 11;
              const lineHeight = fontSize * 1.2;
              const margin = 50;
              const maxLinesPerPage = Math.floor((page.getHeight() - margin * 2) / lineHeight);
              
              // テキストを行に分割
              const lines = text.split('\n');
              
              // 複数ページに分割して描画
              let currentPage = page;
              let y = currentPage.getHeight() - margin;
              
              for (let i = 0; i < lines.length; i++) {
                if (i > 0 && i % maxLinesPerPage === 0) {
                  currentPage = pdfDoc.addPage();
                  y = currentPage.getHeight() - margin;
                }
                
                currentPage.drawText(lines[i], {
                  x: margin,
                  y: y - (i % maxLinesPerPage) * lineHeight,
                  size: fontSize,
                  color: rgb(0, 0, 0),
                });
              }
            } catch (e) {
              console.error('テキスト処理中のエラー:', e);
              const page = pdfDoc.addPage();
              page.drawText(`Failed to process text file: ${file.name}`, {
                x: 50,
                y: page.getHeight() - 50,
                size: 12,
              });
            }
            break;
          }
          
          default: {
            // サポートされていないファイル形式
            const page = pdfDoc.addPage();
            page.drawText(`Unsupported file type: ${file.type}`, {
              x: 50,
              y: page.getHeight() - 50,
              size: 12,
            });
          }
        }
      }
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted_document.pdf';
      link.click();
      URL.revokeObjectURL(url);
      
    } catch (err) {
      console.error('PDF生成中のエラー:', err);
      setError('PDFの生成中にエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };
  
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
                      // 修正4: img タグの代わりに Next.js の Image コンポーネントを使用
                      <div className="absolute top-0 left-0 w-full h-full">
                        <Image
                          src={previewUrls[index]}
                          alt={`preview-${index}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl">
                        {fileTypeIcons[fileTypes[index]]}
                      </div>
                    )}
                    <button
                      onClick={() => removeFile(index)}
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