// ==================== Internationalization ====================
const translations = {
  zh: {
    title: '在线工具箱 - 图片、音频、视频处理',
    h1: '在线工具箱',
    subtitle: '免费在线图片、音频、视频处理工具，无需上传，即时处理',
    catImage: '图片处理',
    catAudio: '音频处理',
    catVideo: '视频处理',
    dropHint: '点击或拖拽图片到这里',
    audioDropHint: '点击或拖拽音频文件到这里',
    videoDropHint: '点击或拖拽视频文件到这里',
    supportedFormats: '支持 JPG, PNG, WebP, GIF',
    supportedFormatsCompress: '支持 JPG, PNG, WebP',
    audioFormats: '支持 MP3, WAV, OGG, WebM',
    videoFormats: '支持 MP4, WebM, MOV',
    targetFormat: '目标格式',
    convertBtn: '转换格式',
    compressQuality: '压缩质量',
    compressBtn: '压缩图片',
    commonSizes: '常用尺寸',
    customSize: '自定义尺寸',
    maintainAspect: '保持宽高比',
    resizeBtn: '处理图片',
    downloadBtn: '下载',
    privacyNotice: '所有文件处理在本地完成，不会上传到服务器，保护隐私',
    originalFile: '原文件',
    convertedFile: '新文件',
    compressedFile: '压缩后',
    reducedBy: '减小',
    originalSize: '原尺寸',
    newSize: '新尺寸',
    placeholder: '宽度',
    placeholderHeight: '高度',
    rotateAngle: '旋转角度',
    customRotate: '自定义角度',
    flipDirection: '翻转方向',
    flipHorizontal: '水平翻转',
    flipVertical: '垂直翻转',
    rotateBtn: '应用旋转',
    grayscaleLevel: '灰度强度',
    grayscaleBtn: '应用灰度',
    brightness: '亮度',
    contrast: '对比度',
    adjustBtn: '应用调整',
    watermarkText: '水印文字',
    watermarkPlaceholder: '输入水印文字',
    fontSize: '字体大小',
    opacity: '透明度',
    watermarkPosition: '水印位置',
    watermarkBtn: '添加水印',
    blurLevel: '模糊强度',
    blurBtn: '应用模糊',
    cornerRadius: '圆角半径',
    roundBtn: '应用圆角',
    collageHint: '点击或拖拽多张图片到这里',
    collageCount: '已选择',
    collageLayout: '拼接布局',
    collageBtn: '生成拼图',
    tabConvert: '格式转换',
    tabCompress: '图片压缩',
    tabResize: '裁剪/缩放',
    tabRotate: '旋转/翻转',
    tabGrayscale: '灰度处理',
    tabAdjust: '亮度/对比度',
    tabWatermark: '添加水印',
    tabBlur: '模糊效果',
    tabRound: '圆角处理',
    tabCollage: '图片拼接',
    tabVolume: '音量调节',
    tabAudioTrim: '音频剪辑',
    tabMerge: '合并音频',
    tabWaveform: '波形图',
    tabVideoGif: '视频转GIF',
    tabVideoCompress: '视频压缩',
    tabVideoTrim: '视频剪辑',
    tabThumb: '提取缩略图',
    volumeLevel: '音量',
    volumeBtn: '调节音量',
    startTime: '开始时间',
    endTime: '结束时间',
    trimBtn: '剪辑音频',
    mergeHint: '点击或拖拽多个音频文件到这里',
    mergeCount: '已选择',
    mergeBtn: '合并音频',
    waveformColor: '波形颜色',
    generateBtn: '生成',
    downloadWaveformBtn: '下载波形图',
    duration: '时长',
    gifSize: '输出尺寸',
    convertToGifBtn: '转换为GIF',
    videoQuality: '视频质量',
    compressVideoBtn: '压缩视频',
    trimVideoBtn: '剪辑视频',
    captureTime: '截取时间',
    thumbSize: '输出尺寸',
    captureBtn: '截取缩略图'
  },
  en: {
    title: 'Online Toolbox - Image, Audio, Video Tools',
    h1: 'Online Toolbox',
    subtitle: 'Free online image, audio, video tools. No upload required, instant results.',
    catImage: 'Image',
    catAudio: 'Audio',
    catVideo: 'Video',
    dropHint: 'Click or drag image here',
    audioDropHint: 'Click or drag audio file here',
    videoDropHint: 'Click or drag video file here',
    supportedFormats: 'Supports JPG, PNG, WebP, GIF',
    supportedFormatsCompress: 'Supports JPG, PNG, WebP',
    audioFormats: 'Supports MP3, WAV, OGG, WebM',
    videoFormats: 'Supports MP4, WebM, MOV',
    targetFormat: 'Target Format',
    convertBtn: 'Convert',
    compressQuality: 'Quality',
    compressBtn: 'Compress',
    commonSizes: 'Common Sizes',
    customSize: 'Custom Size',
    maintainAspect: 'Maintain Aspect Ratio',
    resizeBtn: 'Process',
    downloadBtn: 'Download',
    privacyNotice: 'All processing done locally. Files never uploaded to server.',
    originalFile: 'Original',
    convertedFile: 'Converted',
    compressedFile: 'Compressed',
    reducedBy: 'Reduced',
    originalSize: 'Original',
    newSize: 'New',
    placeholder: 'Width',
    placeholderHeight: 'Height',
    rotateAngle: 'Rotate Angle',
    customRotate: 'Custom Angle',
    flipDirection: 'Flip Direction',
    flipHorizontal: 'Flip H',
    flipVertical: 'Flip V',
    rotateBtn: 'Apply Rotate',
    grayscaleLevel: 'Grayscale',
    grayscaleBtn: 'Apply Grayscale',
    brightness: 'Brightness',
    contrast: 'Contrast',
    adjustBtn: 'Apply',
    watermarkText: 'Watermark Text',
    watermarkPlaceholder: 'Enter watermark text',
    fontSize: 'Font Size',
    opacity: 'Opacity',
    watermarkPosition: 'Position',
    watermarkBtn: 'Add Watermark',
    blurLevel: 'Blur Level',
    blurBtn: 'Apply Blur',
    cornerRadius: 'Corner Radius',
    roundBtn: 'Apply Rounded',
    collageHint: 'Click or drag multiple images here',
    collageCount: 'Selected',
    collageLayout: 'Layout',
    collageBtn: 'Create Collage',
    tabConvert: 'Convert',
    tabCompress: 'Compress',
    tabResize: 'Resize',
    tabRotate: 'Rotate',
    tabGrayscale: 'Grayscale',
    tabAdjust: 'Adjust',
    tabWatermark: 'Watermark',
    tabBlur: 'Blur',
    tabRound: 'Rounded',
    tabCollage: 'Collage',
    tabVolume: 'Volume',
    tabAudioTrim: 'Trim',
    tabMerge: 'Merge',
    tabWaveform: 'Waveform',
    tabVideoGif: 'Video to GIF',
    tabVideoCompress: 'Compress',
    tabVideoTrim: 'Trim',
    tabThumb: 'Thumbnail',
    volumeLevel: 'Volume',
    volumeBtn: 'Adjust Volume',
    startTime: 'Start',
    endTime: 'End',
    trimBtn: 'Trim Audio',
    mergeHint: 'Click or drag multiple audio files here',
    mergeCount: 'Selected',
    mergeBtn: 'Merge Audio',
    waveformColor: 'Waveform Color',
    generateBtn: 'Generate',
    downloadWaveformBtn: 'Download Waveform',
    duration: 'Duration',
    gifSize: 'Output Size',
    convertToGifBtn: 'Convert to GIF',
    videoQuality: 'Quality',
    compressVideoBtn: 'Compress Video',
    trimVideoBtn: 'Trim Video',
    captureTime: 'Capture Time',
    thumbSize: 'Output Size',
    captureBtn: 'Capture Thumbnail'
  }
};

// Detect language
function detectLanguage() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const chinaTimezones = ['Asia/Shanghai', 'Asia/Hong_Kong', 'Asia/Macau', 'Asia/Taipei', 'Asia/Chongqing', 'Asia/Harbin', 'Asia/Urumqi', 'Asia/Kashgar'];
  if (chinaTimezones.includes(timezone)) return 'zh';
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('zh')) return 'zh';
  return 'en';
}

let currentLang = detectLanguage();

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
  document.getElementById('img-resize-width').placeholder = translations[lang].placeholder;
  document.getElementById('img-resize-height').placeholder = translations[lang].placeholderHeight;
  document.getElementById('img-watermark-text').placeholder = translations[lang].watermarkPlaceholder;
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
const storedLang = localStorage.getItem('lang');
if (storedLang && translations[storedLang]) setLanguage(storedLang); else setLanguage(currentLang);

// ==================== Category Navigation ====================
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.category-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.category + '-section').classList.add('active');
  });
});

// ==================== Tab Navigation ====================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.category-section');
    section.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    section.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    section.querySelector('#' + btn.dataset.tab).classList.add('active');
  });
});

// ==================== Utility Functions ====================
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function t(key) { return translations[currentLang][key] || key; }

function createCanvas(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas;
}

function fileToBlob(canvas, mimeType, quality = 0.92) {
  return new Promise(resolve => canvas.toBlob(resolve, mimeType, quality));
}

function blobToUrl(blob) { return URL.createObjectURL(blob); }

// ==================== Image Upload Area Setup ====================
function setupImageUpload(uploadArea, inputEl, previewEl, clearBtn, onFileSelect) {
  inputEl.addEventListener('change', e => { const file = e.target.files[0]; if (file) loadImage(file, previewEl, onFileSelect); });
  uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => { e.preventDefault(); uploadArea.classList.remove('dragover'); const file = e.dataTransfer.files[0]; if (file && file.type.startsWith('image/')) loadImage(file, previewEl, onFileSelect); });
  clearBtn.addEventListener('click', e => { e.stopPropagation(); inputEl.value = ''; previewEl.src = ''; showImgPlaceholder(uploadArea, previewEl); });
}

function loadImage(file, previewEl, onFileSelect) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => { previewEl.src = e.target.result; showImgPreview(previewEl); if (onFileSelect) onFileSelect(img, file); };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showImgPreview(previewEl) {
  previewEl.classList.remove('hidden');
  previewEl.parentElement.classList.remove('hidden');
  previewEl.parentElement.previousElementSibling.classList.add('hidden');
}

function showImgPlaceholder(uploadArea, previewEl) {
  previewEl.classList.add('hidden');
  previewEl.parentElement.classList.add('hidden');
  previewEl.parentElement.previousElementSibling.classList.remove('hidden');
}

function showResult(resultArea, sizeSpan, downloadBtn, blob, filename) {
  sizeSpan.textContent = `${t('originalFile')}: ${formatFileSize(blob.size)}`;
  downloadBtn.href = blobToUrl(blob);
  downloadBtn.download = filename;
  resultArea.classList.remove('hidden');
}

// ==================== Image Tools (abbreviated - same logic as before) ====================
// We'll register all image tools with their own IDs using a loop approach for brevity

// Helper: image upload + process + download
function registerImageTool(config) {
  const { uploadId, inputId, previewId, clearId, btnId, resultId, sizeId, downloadId, filename, processFn } = config;
  const upload = document.getElementById(uploadId);
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  const clearBtn = document.getElementById(clearId);
  const btn = document.getElementById(btnId);
  const result = document.getElementById(resultId);
  const sizeSpan = document.getElementById(sizeId);
  const downloadBtn = document.getElementById(downloadId);
  let currentImg = null, currentFile = null;

  setupImageUpload(upload, input, preview, clearBtn, (img, file) => { currentImg = img; currentFile = file; });
  btn.addEventListener('click', async () => {
    if (!currentImg) return;
    const blob = await processFn(currentImg, currentFile);
    showResult(result, sizeSpan, downloadBtn, blob, filename);
  });
}

// ==================== IMAGE: Convert ====================
let imgConvertImg = null, imgConvertFile = null;
setupImageUpload(document.getElementById('img-convert-upload'), document.getElementById('img-convert-input'), document.getElementById('img-convert-preview'), document.getElementById('img-convert-clear'), (img, file) => { imgConvertImg = img; imgConvertFile = file; });
let imgConvertFormat = 'image/jpeg';
document.querySelectorAll('#img-convert .format-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#img-convert .format-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); imgConvertFormat = btn.dataset.format; });
});
document.getElementById('img-convert-btn').addEventListener('click', async () => {
  if (!imgConvertImg) return;
  const canvas = createCanvas(imgConvertImg);
  const blob = await fileToBlob(canvas, imgConvertFormat);
  showResult(document.getElementById('img-convert-result'), document.getElementById('img-convert-size'), document.getElementById('img-convert-download'), blob, `converted.${imgConvertFormat.split('/')[1]}`);
});

// ==================== IMAGE: Compress ====================
let imgCompressImg = null, imgCompressFile = null;
setupImageUpload(document.getElementById('img-compress-upload'), document.getElementById('img-compress-input'), document.getElementById('img-compress-preview'), document.getElementById('img-compress-clear'), (img, file) => { imgCompressImg = img; imgCompressFile = file; });
document.getElementById('img-quality-slider').addEventListener('input', e => document.getElementById('img-quality-value').textContent = e.target.value);
document.getElementById('img-compress-btn').addEventListener('click', async () => {
  if (!imgCompressImg) return;
  const quality = parseInt(document.getElementById('img-quality-slider').value) / 100;
  const canvas = createCanvas(imgCompressImg);
  const blob = await fileToBlob(canvas, 'image/jpeg', quality);
  document.getElementById('img-compress-ratio').textContent = `${t('reducedBy')} ${((1 - blob.size / imgCompressFile.size) * 100).toFixed(1)}%`;
  showResult(document.getElementById('img-compress-result'), document.getElementById('img-compress-size'), document.getElementById('img-compress-download'), blob, 'compressed.jpg');
});

// ==================== IMAGE: Resize ====================
let imgResizeImg = null, imgResizeFile = null;
setupImageUpload(document.getElementById('img-resize-upload'), document.getElementById('img-resize-input'), document.getElementById('img-resize-preview'), document.getElementById('img-resize-clear'), (img, file) => { imgResizeImg = img; imgResizeFile = file; });
document.querySelectorAll('#img-resize .preset-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#img-resize .preset-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); document.getElementById('img-resize-width').value = btn.dataset.width; document.getElementById('img-resize-height').value = btn.dataset.height; }); });
let imgResizeRatio = 1;
document.getElementById('img-resize-width').addEventListener('input', () => {
  if (document.getElementById('img-maintain-aspect').checked && imgResizeImg) { imgResizeRatio = imgResizeImg.naturalWidth / imgResizeImg.naturalHeight; document.getElementById('img-resize-height').value = Math.round(document.getElementById('img-resize-width').value / imgResizeRatio); }
});
document.getElementById('img-resize-btn').addEventListener('click', async () => {
  if (!imgResizeImg) return;
  const w = parseInt(document.getElementById('img-resize-width').value) || imgResizeImg.naturalWidth;
  const h = parseInt(document.getElementById('img-resize-height').value) || imgResizeImg.naturalHeight;
  const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
  canvas.getContext('2d').drawImage(imgResizeImg, 0, 0, w, h);
  document.getElementById('img-resize-size').textContent = `${t('originalSize')}: ${imgResizeImg.naturalWidth}×${imgResizeImg.naturalHeight} → ${t('newSize')}: ${w}×${h}`;
  const blob = await fileToBlob(canvas, 'image/jpeg');
  const url = blobToUrl(blob);
  document.getElementById('img-resize-download').href = url;
  document.getElementById('img-resize-download').download = 'resized.jpg';
  document.getElementById('img-resize-result').classList.remove('hidden');
});

// ==================== IMAGE: Rotate ====================
let imgRotateImg = null, imgRotateFile = null, imgRotateDeg = 0, imgFlipH = false, imgFlipV = false;
setupImageUpload(document.getElementById('img-rotate-upload'), document.getElementById('img-rotate-input'), document.getElementById('img-rotate-preview'), document.getElementById('img-rotate-clear'), (img, file) => { imgRotateImg = img; imgRotateFile = file; imgRotateDeg = 0; imgFlipH = false; imgFlipV = false; document.getElementById('img-rotate-slider').value = 0; document.getElementById('img-rotate-value').textContent = 0; });
document.getElementById('img-rotate-slider').addEventListener('input', e => { document.getElementById('img-rotate-value').textContent = e.target.value; imgRotateDeg = parseInt(e.target.value); });
document.querySelectorAll('#img-rotate .rotate-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#img-rotate .rotate-preset-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); imgRotateDeg = parseInt(btn.dataset.deg); document.getElementById('img-rotate-slider').value = imgRotateDeg; document.getElementById('img-rotate-value').textContent = imgRotateDeg; }); });
document.getElementById('img-flip-h').addEventListener('click', () => imgFlipH = !imgFlipH);
document.getElementById('img-flip-v').addEventListener('click', () => imgFlipV = !imgFlipV);
document.getElementById('img-rotate-btn').addEventListener('click', async () => {
  if (!imgRotateImg) return;
  const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d');
  if (imgRotateDeg === 90 || imgRotateDeg === 270) { canvas.width = imgRotateImg.naturalHeight; canvas.height = imgRotateImg.naturalWidth; }
  else { canvas.width = imgRotateImg.naturalWidth; canvas.height = imgRotateImg.naturalHeight; }
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((imgRotateDeg * Math.PI) / 180);
  ctx.scale(imgFlipH ? -1 : 1, imgFlipV ? -1 : 1);
  ctx.drawImage(imgRotateImg, -imgRotateImg.naturalWidth / 2, -imgRotateImg.naturalHeight / 2);
  const blob = await fileToBlob(canvas, 'image/jpeg');
  document.getElementById('img-rotate-size').textContent = `${t('originalSize')}: ${imgRotateImg.naturalWidth}×${imgRotateImg.naturalHeight}`;
  document.getElementById('img-rotate-download').href = blobToUrl(blob);
  document.getElementById('img-rotate-download').download = 'rotated.jpg';
  document.getElementById('img-rotate-result').classList.remove('hidden');
});

// ==================== IMAGE: Grayscale ====================
let imgGrayscaleImg = null, imgGrayscaleFile = null;
setupImageUpload(document.getElementById('img-grayscale-upload'), document.getElementById('img-grayscale-input'), document.getElementById('img-grayscale-preview'), document.getElementById('img-grayscale-clear'), (img, file) => { imgGrayscaleImg = img; imgGrayscaleFile = file; });
document.getElementById('img-grayscale-slider').addEventListener('input', e => document.getElementById('img-grayscale-value').textContent = e.target.value);
document.getElementById('img-grayscale-btn').addEventListener('click', async () => {
  if (!imgGrayscaleImg) return;
  const canvas = createCanvas(imgGrayscaleImg); const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height); const data = imageData.data;
  const level = parseInt(document.getElementById('img-grayscale-slider').value) / 100;
  for (let i = 0; i < data.length; i += 4) { const avg = (data[i] + data[i + 1] + data[i + 2]) / 3; data[i] = data[i] * (1 - level) + avg * level; data[i + 1] = data[i + 1] * (1 - level) + avg * level; data[i + 2] = data[i + 2] * (1 - level) + avg * level; }
  ctx.putImageData(imageData, 0, 0);
  const blob = await fileToBlob(canvas, 'image/jpeg');
  showResult(document.getElementById('img-grayscale-result'), document.getElementById('img-grayscale-size'), document.getElementById('img-grayscale-download'), blob, 'grayscale.jpg');
});

// ==================== IMAGE: Adjust ====================
let imgAdjustImg = null, imgAdjustFile = null;
setupImageUpload(document.getElementById('img-adjust-upload'), document.getElementById('img-adjust-input'), document.getElementById('img-adjust-preview'), document.getElementById('img-adjust-clear'), (img, file) => { imgAdjustImg = img; imgAdjustFile = file; });
document.getElementById('img-brightness-slider').addEventListener('input', e => document.getElementById('img-brightness-value').textContent = e.target.value);
document.getElementById('img-contrast-slider').addEventListener('input', e => document.getElementById('img-contrast-value').textContent = e.target.value);
document.getElementById('img-adjust-btn').addEventListener('click', async () => {
  if (!imgAdjustImg) return;
  const canvas = createCanvas(imgAdjustImg); const ctx = canvas.getContext('2d');
  const brightness = parseInt(document.getElementById('img-brightness-slider').value);
  const contrast = parseInt(document.getElementById('img-contrast-slider').value);
  ctx.filter = `brightness(${100 + brightness}%) contrast(${100 + contrast}%)`;
  const temp = document.createElement('canvas'); temp.width = canvas.width; temp.height = canvas.height;
  temp.getContext('2d').filter = ctx.filter; temp.getContext('2d').drawImage(imgAdjustImg, 0, 0);
  ctx.filter = 'none'; ctx.drawImage(temp, 0, 0);
  const blob = await fileToBlob(canvas, 'image/jpeg');
  showResult(document.getElementById('img-adjust-result'), document.getElementById('img-adjust-size'), document.getElementById('img-adjust-download'), blob, 'adjusted.jpg');
});

// ==================== IMAGE: Watermark ====================
let imgWatermarkImg = null, imgWatermarkFile = null;
setupImageUpload(document.getElementById('img-watermark-upload'), document.getElementById('img-watermark-input'), document.getElementById('img-watermark-preview'), document.getElementById('img-watermark-clear'), (img, file) => { imgWatermarkImg = img; imgWatermarkFile = file; });
document.getElementById('img-watermark-size').addEventListener('input', e => document.getElementById('img-wm-size-val').textContent = e.target.value);
document.getElementById('img-watermark-opacity').addEventListener('input', e => document.getElementById('img-wm-opacity-val').textContent = e.target.value);
document.querySelectorAll('#img-watermark .wm-pos-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#img-watermark .wm-pos-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }); });
document.getElementById('img-watermark-btn').addEventListener('click', async () => {
  if (!imgWatermarkImg) return;
  const text = document.getElementById('img-watermark-text').value || 'Watermark';
  const fontSize = parseInt(document.getElementById('img-watermark-size').value);
  const opacity = parseInt(document.getElementById('img-watermark-opacity').value) / 100;
  const canvas = createCanvas(imgWatermarkImg); const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px Arial`; ctx.fillStyle = `rgba(255,255,255,${opacity})`; ctx.strokeStyle = `rgba(0,0,0,${opacity * 0.5})`; ctx.lineWidth = fontSize / 15; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.strokeText(text, canvas.width / 2, canvas.height / 2); ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const blob = await fileToBlob(canvas, 'image/jpeg');
  showResult(document.getElementById('img-watermark-result'), document.getElementById('img-watermark-size-info'), document.getElementById('img-watermark-download'), blob, 'watermarked.jpg');
});

// ==================== IMAGE: Blur ====================
let imgBlurImg = null, imgBlurFile = null;
setupImageUpload(document.getElementById('img-blur-upload'), document.getElementById('img-blur-input'), document.getElementById('img-blur-preview'), document.getElementById('img-blur-clear'), (img, file) => { imgBlurImg = img; imgBlurFile = file; });
document.getElementById('img-blur-slider').addEventListener('input', e => document.getElementById('img-blur-value').textContent = e.target.value);
document.getElementById('img-blur-btn').addEventListener('click', async () => {
  if (!imgBlurImg) return;
  const blurLevel = parseInt(document.getElementById('img-blur-slider').value);
  const canvas = createCanvas(imgBlurImg); const ctx = canvas.getContext('2d');
  ctx.filter = `blur(${blurLevel}px)`;
  const temp = document.createElement('canvas'); temp.width = canvas.width; temp.height = canvas.height;
  temp.getContext('2d').filter = ctx.filter; temp.getContext('2d').drawImage(imgBlurImg, 0, 0);
  ctx.filter = 'none'; ctx.drawImage(temp, 0, 0);
  const blob = await fileToBlob(canvas, 'image/jpeg');
  showResult(document.getElementById('img-blur-result'), document.getElementById('img-blur-size'), document.getElementById('img-blur-download'), blob, 'blurred.jpg');
});

// ==================== IMAGE: Rounded ====================
let imgRoundImg = null, imgRoundFile = null;
setupImageUpload(document.getElementById('img-round-upload'), document.getElementById('img-round-input'), document.getElementById('img-round-preview'), document.getElementById('img-round-clear'), (img, file) => { imgRoundImg = img; imgRoundFile = file; });
document.getElementById('img-round-slider').addEventListener('input', e => document.getElementById('img-round-value').textContent = e.target.value);
document.getElementById('img-round-btn').addEventListener('click', async () => {
  if (!imgRoundImg) return;
  const radius = parseInt(document.getElementById('img-round-slider').value);
  const canvas = document.createElement('canvas'); canvas.width = imgRoundImg.naturalWidth; canvas.height = imgRoundImg.naturalHeight; const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(radius, 0); ctx.lineTo(canvas.width - radius, 0); ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
  ctx.lineTo(canvas.width, canvas.height - radius); ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height);
  ctx.lineTo(radius, canvas.height); ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
  ctx.lineTo(0, radius); ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath(); ctx.clip(); ctx.drawImage(imgRoundImg, 0, 0);
  const blob = await fileToBlob(canvas, 'image/png');
  showResult(document.getElementById('img-round-result'), document.getElementById('img-round-size'), document.getElementById('img-round-download'), blob, 'rounded.png');
});

// ==================== IMAGE: Collage ====================
let collageImages = [];
document.getElementById('img-collage-input').addEventListener('change', e => {
  const files = Array.from(e.target.files); collageImages = [];
  document.getElementById('img-collage-count').textContent = files.length;
  document.getElementById('img-collage-thumbnails').innerHTML = '';
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => { collageImages.push({ img, file }); const div = document.createElement('div'); div.className = 'collage-thumb'; div.innerHTML = `<img src="${ev.target.result}" alt=""><span class="remove-thumb">×</span>`; document.getElementById('img-collage-thumbnails').appendChild(div); };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
  if (files.length > 0) { document.getElementById('img-collage-preview-area').classList.remove('hidden'); document.querySelector('#img-collage-upload .upload-placeholder').classList.add('hidden'); }
});
document.getElementById('img-collage-clear').addEventListener('click', () => { collageImages = []; document.getElementById('img-collage-input').value = ''; document.getElementById('img-collage-count').textContent = '0'; document.getElementById('img-collage-preview-area').classList.add('hidden'); document.querySelector('#img-collage-upload .upload-placeholder').classList.remove('hidden'); document.getElementById('img-collage-thumbnails').innerHTML = ''; });
document.querySelectorAll('#img-collage .collage-layout-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#img-collage .collage-layout-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }); });
document.getElementById('img-collage-btn').addEventListener('click', async () => {
  if (collageImages.length < 2) return;
  const layout = document.querySelector('#img-collage .collage-layout-btn.active').dataset.layout;
  let cols = 2, rows = 1;
  if (layout === '2col') cols = 2;
  else if (layout === '3col') cols = 3;
  else if (layout === '2row') { rows = 2; cols = Math.ceil(collageImages.length / 2); rows = Math.ceil(collageImages.length / cols); }
  const w = collageImages[0].img.naturalWidth, h = collageImages[0].img.naturalHeight;
  const canvas = document.createElement('canvas'); canvas.width = w * cols; canvas.height = h * rows; const ctx = canvas.getContext('2d');
  collageImages.slice(0, cols * rows).forEach((item, i) => { ctx.drawImage(item.img, (i % cols) * w, Math.floor(i / cols) * h, w, h); });
  const blob = await fileToBlob(canvas, 'image/jpeg');
  document.getElementById('img-collage-size').textContent = `${collageImages.length} ${t('originalFile')} → ${formatFileSize(blob.size)}`;
  document.getElementById('img-collage-download').href = blobToUrl(blob);
  document.getElementById('img-collage-download').download = 'collage.jpg';
  document.getElementById('img-collage-result').classList.remove('hidden');
});

// ==================== AUDIO: Volume ====================
let audioVolumeFile = null;
document.getElementById('audio-volume-input').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  audioVolumeFile = file;
  const url = URL.createObjectURL(file);
  document.getElementById('audio-volume-player').src = url;
  document.getElementById('audio-volume-preview-area') ? null : document.querySelector('#audio-volume-upload .preview-area').classList.remove('hidden');
  document.querySelector('#audio-volume-upload .upload-placeholder').classList.add('hidden');
});
document.getElementById('audio-volume-clear').addEventListener('click', () => { document.getElementById('audio-volume-input').value = ''; audioVolumeFile = null; document.getElementById('audio-volume-player').src = ''; document.querySelector('#audio-volume-upload .preview-area').classList.add('hidden'); document.querySelector('#audio-volume-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('audio-volume-slider').addEventListener('input', e => document.getElementById('audio-volume-value').textContent = e.target.value);
document.getElementById('audio-volume-btn').addEventListener('click', async () => {
  if (!audioVolumeFile) return;
  const volume = parseInt(document.getElementById('audio-volume-slider').value) / 100;
  const audioContext = new AudioContext();
  const arrayBuffer = await audioVolumeFile.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  const newBuffer = audioContext.createBuffer(audioBuffer.numberOfChannels, audioBuffer.length, audioBuffer.sampleRate);
  for (let c = 0; c < audioBuffer.numberOfChannels; c++) { const old = audioBuffer.getChannelData(c); const ni = newBuffer.getChannelData(c); for (let i = 0; i < old.length; i++) ni[i] = old[i] * volume; }
  const wavBlob = audioBufferToWav(newBuffer);
  document.getElementById('audio-volume-size').textContent = `${t('originalFile')}: ${formatFileSize(audioVolumeFile.size)} → ${formatFileSize(wavBlob.size)}`;
  document.getElementById('audio-volume-result-player').src = blobToUrl(wavBlob);
  document.getElementById('audio-volume-download').href = blobToUrl(wavBlob);
  document.getElementById('audio-volume-download').download = 'volume_adjusted.wav';
  document.getElementById('audio-volume-result').classList.remove('hidden');
});

function audioBufferToWav(buffer) {
  const numChannels = buffer.numberOfChannels, sampleRate = buffer.sampleRate, format = 1, bitDepth = 16;
  const bytesPerSample = bitDepth / 8, blockAlign = numChannels * bytesPerSample;
  const data = new Int16Array(buffer.length * numChannels);
  for (let c = 0; c < numChannels; c++) { const ch = buffer.getChannelData(c); for (let i = 0; i < ch.length; i++) data[i * numChannels + c] = Math.max(-32768, Math.min(32768, ch[i] * 32768)); }
  const dataArray = new Uint8Array(44 + data.byteLength);
  const view = new DataView(dataArray);
  writeString(view, 0, 'RIFF'); view.setUint32(4, 36 + data.byteLength, true); writeString(view, 8, 'WAVE'); writeString(view, 12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, format, true); view.setUint16(22, numChannels, true); view.setUint32(24, sampleRate, true); view.setUint32(28, sampleRate * blockAlign, true); view.setUint16(32, blockAlign, true); view.setUint16(34, bitDepth, true); writeString(view, 36, 'data'); view.setUint32(40, data.byteLength, true);
  const dataBytes = new Int16Array(dataArray.buffer, 44); dataBytes.set(data);
  return new Blob([dataArray], { type: 'audio/wav' });
}

function writeString(view, offset, string) { for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i)); }

// ==================== AUDIO: Trim ====================
let audioTrimFile = null, audioTrimDuration = 0;
document.getElementById('audio-trim-input').addEventListener('change', async e => {
  const file = e.target.files[0]; if (!file) return;
  audioTrimFile = file;
  const url = URL.createObjectURL(file);
  document.getElementById('audio-trim-player').src = url;
  const audioContext = new AudioContext();
  const arrayBuffer = await file.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  audioTrimDuration = audioBuffer.duration;
  document.getElementById('audio-trim-start').max = audioTrimDuration;
  document.getElementById('audio-trim-end').max = audioTrimDuration;
  document.getElementById('audio-trim-end').value = audioTrimDuration;
  document.getElementById('audio-trim-end-val').textContent = audioTrimDuration.toFixed(1);
  document.querySelector('#audio-trim-upload .preview-area').classList.remove('hidden');
  document.querySelector('#audio-trim-upload .upload-placeholder').classList.add('hidden');
});
document.getElementById('audio-trim-start').addEventListener('input', e => document.getElementById('audio-trim-start-val').textContent = parseFloat(e.target.value).toFixed(1));
document.getElementById('audio-trim-end').addEventListener('input', e => document.getElementById('audio-trim-end-val').textContent = parseFloat(e.target.value).toFixed(1));
document.getElementById('audio-trim-clear').addEventListener('click', () => { document.getElementById('audio-trim-input').value = ''; audioTrimFile = null; document.getElementById('audio-trim-player').src = ''; document.querySelector('#audio-trim-upload .preview-area').classList.add('hidden'); document.querySelector('#audio-trim-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('audio-trim-btn').addEventListener('click', async () => {
  if (!audioTrimFile) return;
  const audioContext = new AudioContext();
  const arrayBuffer = await audioTrimFile.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  const start = parseFloat(document.getElementById('audio-trim-start').value);
  const end = parseFloat(document.getElementById('audio-trim-end').value);
  const newBuffer = audioContext.createBuffer(audioBuffer.numberOfChannels, Math.floor((end - start) * audioBuffer.sampleRate), audioBuffer.sampleRate);
  for (let c = 0; c < audioBuffer.numberOfChannels; c++) { newBuffer.getChannelData(c).set(audioBuffer.getChannelData(c).slice(Math.floor(start * audioBuffer.sampleRate), Math.floor(end * audioBuffer.sampleRate))); }
  const wavBlob = audioBufferToWav(newBuffer);
  document.getElementById('audio-trim-size').textContent = `${t('originalFile')}: ${formatFileSize(audioTrimFile.size)} → ${formatFileSize(wavBlob.size)}`;
  document.getElementById('audio-trim-result-player').src = blobToUrl(wavBlob);
  document.getElementById('audio-trim-download').href = blobToUrl(wavBlob);
  document.getElementById('audio-trim-download').download = 'trimmed.wav';
  document.getElementById('audio-trim-result').classList.remove('hidden');
});

// ==================== AUDIO: Merge ====================
let mergeAudioBuffers = [];
document.getElementById('audio-merge-input').addEventListener('change', async e => {
  const files = Array.from(e.target.files); mergeAudioBuffers = [];
  document.getElementById('audio-merge-count').textContent = files.length;
  document.getElementById('audio-merge-list').innerHTML = '';
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = async ev => {
      const audioContext = new AudioContext();
      const arrayBuffer = await file.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      mergeAudioBuffers.push(audioBuffer);
      const div = document.createElement('div'); div.className = 'merge-item'; div.textContent = file.name; document.getElementById('audio-merge-list').appendChild(div);
    };
    reader.readAsArrayBuffer(file);
  }
  if (files.length > 0) { document.getElementById('audio-merge-preview-area').classList.remove('hidden'); document.querySelector('#audio-merge-upload .upload-placeholder').classList.add('hidden'); }
});
document.getElementById('audio-merge-clear').addEventListener('click', () => { mergeAudioBuffers = []; document.getElementById('audio-merge-input').value = ''; document.getElementById('audio-merge-count').textContent = '0'; document.getElementById('audio-merge-preview-area').classList.add('hidden'); document.querySelector('#audio-merge-upload .upload-placeholder').classList.remove('hidden'); document.getElementById('audio-merge-list').innerHTML = ''; });
document.getElementById('audio-merge-btn').addEventListener('click', async () => {
  if (mergeAudioBuffers.length < 2) return;
  const audioContext = new AudioContext();
  const totalLength = mergeAudioBuffers.reduce((sum, b) => sum + b.length, 0);
  const sampleRate = mergeAudioBuffers[0].sampleRate;
  const numChannels = mergeAudioBuffers[0].numberOfChannels;
  const newBuffer = audioContext.createBuffer(numChannels, totalLength, sampleRate);
  let offset = 0;
  for (const buf of mergeAudioBuffers) { for (let c = 0; c < numChannels; c++) { newBuffer.getChannelData(c).set(buf.getChannelData(c), offset); } offset += buf.length; }
  const wavBlob = audioBufferToWav(newBuffer);
  document.getElementById('audio-merge-size').textContent = `${mergeAudioBuffers.length} ${t('originalFile')} → ${formatFileSize(wavBlob.size)}`;
  document.getElementById('audio-merge-result-player').src = blobToUrl(wavBlob);
  document.getElementById('audio-merge-download').href = blobToUrl(wavBlob);
  document.getElementById('audio-merge-download').download = 'merged.wav';
  document.getElementById('audio-merge-result').classList.remove('hidden');
});

// ==================== AUDIO: Waveform ====================
let audioWaveformFile = null;
document.getElementById('audio-waveform-input').addEventListener('change', async e => {
  const file = e.target.files[0]; if (!file) return;
  audioWaveformFile = file;
  const url = URL.createObjectURL(file);
  document.getElementById('audio-waveform-player').src = url;
  document.querySelector('#audio-waveform-upload .preview-area').classList.remove('hidden');
  document.querySelector('#audio-waveform-upload .upload-placeholder').classList.add('hidden');
});
document.getElementById('audio-waveform-color').addEventListener('input', e => document.getElementById('audio-waveform-color-val').textContent = e.target.value);
document.getElementById('audio-waveform-clear').addEventListener('click', () => { document.getElementById('audio-waveform-input').value = ''; audioWaveformFile = null; document.getElementById('audio-waveform-player').src = ''; document.querySelector('#audio-waveform-upload .preview-area').classList.add('hidden'); document.querySelector('#audio-waveform-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('audio-waveform-btn').addEventListener('click', async () => {
  if (!audioWaveformFile) return;
  const audioContext = new AudioContext();
  const arrayBuffer = await audioWaveformFile.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  const canvas = document.getElementById('audio-waveform-canvas');
  const ctx = canvas.getContext('2d');
  const color = document.getElementById('audio-waveform-color').value;
  const data = audioBuffer.getChannelData(0);
  const step = Math.ceil(data.length / canvas.width);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  for (let i = 0; i < canvas.width; i++) {
    let min = 1.0, max = -1.0;
    for (let j = 0; j < step; j++) { const d = data[i * step + j] || 0; if (d < min) min = d; if (d > max) max = d; }
    const y1 = ((min + 1) / 2) * canvas.height; const y2 = ((max + 1) / 2) * canvas.height;
    ctx.fillRect(i, y1, 1, Math.max(1, y2 - y1));
  }
  document.getElementById('audio-waveform-result').classList.remove('hidden');
});
document.getElementById('audio-waveform-download-btn').addEventListener('click', () => {
  const canvas = document.getElementById('audio-waveform-canvas');
  canvas.toBlob(blob => { const url = blobToUrl(blob); document.getElementById('audio-waveform-download').href = url; document.getElementById('audio-waveform-download').click(); });
});
document.getElementById('audio-waveform-download').addEventListener('click', () => {
  const canvas = document.getElementById('audio-waveform-canvas');
  canvas.toBlob(blob => { document.getElementById('audio-waveform-download').href = blobToUrl(blob); });
});

// ==================== VIDEO: to GIF ====================
let videoGifFile = null, videoGifDuration = 0;
document.getElementById('video-gif-input').addEventListener('change', async e => {
  const file = e.target.files[0]; if (!file) return;
  videoGifFile = file;
  const url = URL.createObjectURL(file);
  document.getElementById('video-gif-player').src = url;
  document.getElementById('video-gif-player').onloadedmetadata = () => { videoGifDuration = document.getElementById('video-gif-player').duration; document.getElementById('video-gif-start').max = videoGifDuration; document.getElementById('video-gif-duration').max = Math.min(10, videoGifDuration); };
  document.querySelector('#video-gif-upload .preview-area').classList.remove('hidden');
  document.querySelector('#video-gif-upload .upload-placeholder').classList.add('hidden');
});
document.getElementById('video-gif-start').addEventListener('input', e => document.getElementById('video-gif-start-val').textContent = parseFloat(e.target.value).toFixed(1));
document.getElementById('video-gif-duration').addEventListener('input', e => document.getElementById('video-gif-duration-val').textContent = e.target.value);
document.getElementById('video-gif-size').addEventListener('input', e => document.getElementById('video-gif-size-val').textContent = e.target.value);
document.getElementById('video-gif-clear').addEventListener('click', () => { document.getElementById('video-gif-input').value = ''; videoGifFile = null; document.getElementById('video-gif-player').src = ''; document.querySelector('#video-gif-upload .preview-area').classList.add('hidden'); document.querySelector('#video-gif-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('video-gif-btn').addEventListener('click', async () => {
  if (!videoGifFile) return;
  const startTime = parseFloat(document.getElementById('video-gif-start').value);
  const duration = parseFloat(document.getElementById('video-gif-duration').value);
  const size = parseInt(document.getElementById('video-gif-size').value);
  const player = document.getElementById('video-gif-player');
  player.currentTime = startTime;
  player.pause();
  const canvas = document.createElement('canvas'); canvas.width = size; canvas.height = size * (player.videoHeight / player.videoWidth);
  const ctx = canvas.getContext('2d');
  // Simple frame capture for GIF - capture a few frames
  const frames = [];
  for (let i = 0; i < 10; i++) {
    player.currentTime = startTime + (duration / 10) * i;
    await new Promise(r => setTimeout(r, 100));
    ctx.drawImage(player, 0, 0, canvas.width, canvas.height);
    frames.push(canvas.toDataURL('image/png'));
  }
  // For GIF, we need a GIF encoder library. For now, output first frame as preview
  // A full GIF implementation would use gif.js or similar
  document.getElementById('video-gif-info').textContent = `Captured ${frames.length} frames. Use canvas output for GIF encoding.`;
  document.getElementById('video-gif-result').classList.remove('hidden');
});

// ==================== VIDEO: Compress ====================
let videoCompressFile = null;
document.getElementById('video-compress-input').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  videoCompressFile = file;
  document.getElementById('video-compress-player').src = URL.createObjectURL(file);
  document.querySelector('#video-compress-upload .preview-area').classList.remove('hidden');
  document.querySelector('#video-compress-upload .upload-placeholder').classList.add('hidden');
});
document.querySelectorAll('#video-compress .vc-quality-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#video-compress .vc-quality-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); document.getElementById('video-compress-quality-val').textContent = btn.textContent; }); });
document.getElementById('video-compress-clear').addEventListener('click', () => { document.getElementById('video-compress-input').value = ''; videoCompressFile = null; document.getElementById('video-compress-player').src = ''; document.querySelector('#video-compress-upload .preview-area').classList.add('hidden'); document.querySelector('#video-compress-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('video-compress-btn').addEventListener('click', async () => {
  if (!videoCompressFile) return;
  // Video compression using MediaRecorder
  const stream = document.getElementById('video-compress-player').captureStream();
  const quality = document.querySelector('#video-compress .vc-quality-btn.active').dataset.quality;
  const videoBitsPerSecond = quality === 'high' ? 5000000 : quality === 'medium' ? 2000000 : 1000000;
  const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond });
  const chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    document.getElementById('video-compress-original').textContent = `${t('originalFile')}: ${formatFileSize(videoCompressFile.size)}`;
    document.getElementById('video-compress-compressed').textContent = `${t('compressedFile')}: ${formatFileSize(blob.size)} (${((1 - blob.size / videoCompressFile.size) * 100).toFixed(1)}% ${t('reducedBy')})`;
    document.getElementById('video-compress-download').href = blobToUrl(blob);
    document.getElementById('video-compress-download').download = 'compressed.webm';
    document.getElementById('video-compress-result').classList.remove('hidden');
  };
  recorder.start();
  document.getElementById('video-compress-player').play();
  setTimeout(() => { recorder.stop(); document.getElementById('video-compress-player').pause(); }, 3000);
});

// ==================== VIDEO: Trim ====================
let videoTrimFile = null, videoTrimDuration = 0;
document.getElementById('video-trim-input').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  videoTrimFile = file;
  const url = URL.createObjectURL(file);
  const player = document.getElementById('video-trim-player');
  player.src = url;
  player.onloadedmetadata = () => { videoTrimDuration = player.duration; document.getElementById('video-trim-start').max = videoTrimDuration; document.getElementById('video-trim-end').max = videoTrimDuration; document.getElementById('video-trim-end').value = videoTrimDuration; document.getElementById('video-trim-end-val').textContent = videoTrimDuration.toFixed(1); };
  document.querySelector('#video-trim-upload .preview-area').classList.remove('hidden');
  document.querySelector('#video-trim-upload .upload-placeholder').classList.add('hidden');
});
document.getElementById('video-trim-start').addEventListener('input', e => document.getElementById('video-trim-start-val').textContent = parseFloat(e.target.value).toFixed(1));
document.getElementById('video-trim-end').addEventListener('input', e => document.getElementById('video-trim-end-val').textContent = parseFloat(e.target.value).toFixed(1));
document.getElementById('video-trim-clear').addEventListener('click', () => { document.getElementById('video-trim-input').value = ''; videoTrimFile = null; document.getElementById('video-trim-player').src = ''; document.querySelector('#video-trim-upload .preview-area').classList.add('hidden'); document.querySelector('#video-trim-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('video-trim-btn').addEventListener('click', async () => {
  if (!videoTrimFile) return;
  const startTime = parseFloat(document.getElementById('video-trim-start').value);
  const endTime = parseFloat(document.getElementById('video-trim-end').value);
  const player = document.getElementById('video-trim-player');
  player.currentTime = startTime;
  player.play();
  const stream = player.captureStream();
  const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
  const chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    document.getElementById('video-trim-size').textContent = `${t('originalFile')}: ${formatFileSize(videoTrimFile.size)} → ${formatFileSize(blob.size)}`;
    document.getElementById('video-trim-download').href = blobToUrl(blob);
    document.getElementById('video-trim-download').download = 'trimmed.webm';
    document.getElementById('video-trim-result').classList.remove('hidden');
  };
  recorder.start();
  setTimeout(() => { recorder.stop(); player.pause(); }, (endTime - startTime) * 1000);
});

// ==================== VIDEO: Thumbnail ====================
let videoThumbFile = null;
document.getElementById('video-thumb-input').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  videoThumbFile = file;
  const url = URL.createObjectURL(file);
  const player = document.getElementById('video-thumb-player');
  player.src = url;
  player.onloadedmetadata = () => { document.getElementById('video-thumb-time').max = player.duration; };
  document.querySelector('#video-thumb-upload .preview-area').classList.remove('hidden');
  document.querySelector('#video-thumb-upload .upload-placeholder').classList.add('hidden');
});
document.getElementById('video-thumb-time').addEventListener('input', e => { document.getElementById('video-thumb-time-val').textContent = parseFloat(e.target.value).toFixed(1); });
document.querySelectorAll('#video-thumb .thumb-size-btn').forEach(btn => {
  btn.addEventListener('click', () => { document.querySelectorAll('#video-thumb .thumb-size-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }); });
document.getElementById('video-thumb-clear').addEventListener('click', () => { document.getElementById('video-thumb-input').value = ''; videoThumbFile = null; document.getElementById('video-thumb-player').src = ''; document.querySelector('#video-thumb-upload .preview-area').classList.add('hidden'); document.querySelector('#video-thumb-upload .upload-placeholder').classList.remove('hidden'); });
document.getElementById('video-thumb-btn').addEventListener('click', async () => {
  if (!videoThumbFile) return;
  const time = parseFloat(document.getElementById('video-thumb-time').value);
  const sizeBtn = document.querySelector('#video-thumb .thumb-size-btn.active');
  const w = parseInt(sizeBtn.dataset.width), h = parseInt(sizeBtn.dataset.height);
  const player = document.getElementById('video-thumb-player');
  player.currentTime = time;
  player.pause();
  const canvas = document.getElementById('video-thumb-canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(player, 0, 0, w, h);
  const blob = await fileToBlob(canvas, 'image/png');
  document.getElementById('video-thumb-size').textContent = `${formatFileSize(videoThumbFile.size)} → ${formatFileSize(blob.size)}`;
  document.getElementById('video-thumb-download').href = blobToUrl(blob);
  document.getElementById('video-thumb-download').download = 'thumbnail.png';
  document.getElementById('video-thumb-result').classList.remove('hidden');
});