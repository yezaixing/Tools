// ==================== Internationalization ====================
const translations = {
  zh: {
    title: '图片工具箱 - 在线免费图片处理',
    h1: '图片工具箱',
    subtitle: '免费在线图片处理工具，无需上传，即时处理',
    tabConvert: '格式转换',
    tabCompress: '图片压缩',
    tabResize: '裁剪/缩放',
    tabRotate: '旋转/翻转',
    tabGrayscale: '灰度处理',
    tabAdjust: '亮度/对比度',
    dropHint: '点击或拖拽图片到这里',
    supportedFormats: '支持 JPG, PNG, WebP, GIF',
    supportedFormatsCompress: '支持 JPG, PNG, WebP',
    targetFormat: '目标格式',
    convertBtn: '转换格式',
    compressQuality: '压缩质量',
    compressBtn: '压缩图片',
    commonSizes: '常用尺寸',
    customSize: '自定义尺寸',
    maintainAspect: '保持宽高比',
    resizeBtn: '处理图片',
    downloadBtn: '下载图片',
    privacyNotice: '所有图片处理在本地完成，不会上传到服务器，保护隐私',
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
    adjustBtn: '应用调整'
  },
  en: {
    title: 'Image Toolbox - Free Online Image Processing',
    h1: 'Image Toolbox',
    subtitle: 'Free online image processing tools. No upload required, instant results.',
    tabConvert: 'Convert',
    tabCompress: 'Compress',
    tabResize: 'Resize',
    tabRotate: 'Rotate',
    tabGrayscale: 'Grayscale',
    tabAdjust: 'Brightness',
    dropHint: 'Click or drag image here',
    supportedFormats: 'Supports JPG, PNG, WebP, GIF',
    supportedFormatsCompress: 'Supports JPG, PNG, WebP',
    targetFormat: 'Target Format',
    convertBtn: 'Convert',
    compressQuality: 'Quality',
    compressBtn: 'Compress',
    commonSizes: 'Common Sizes',
    customSize: 'Custom Size',
    maintainAspect: 'Maintain Aspect Ratio',
    resizeBtn: 'Process',
    downloadBtn: 'Download',
    privacyNotice: 'All processing done locally. Images never uploaded to server.',
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
    adjustBtn: 'Apply'
  }
};

// Detect language: China = Chinese, else = English
function detectLanguage() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const chinaTimezones = [
    'Asia/Shanghai', 'Asia/Hong_Kong', 'Asia/Macau', 'Asia/Taipei',
    'Asia/Chongqing', 'Asia/Harbin', 'Asia/Urumqi', 'Asia/Kashgar'
  ];
  if (chinaTimezones.includes(timezone)) return 'zh';

  // Fallback: check accept-language header via navigator
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('zh')) return 'zh';

  return 'en';
}

let currentLang = detectLanguage();

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.getElementById('resize-width').placeholder = translations[lang].placeholder;
  document.getElementById('resize-height').placeholder = translations[lang].placeholderHeight;

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Persist choice
  localStorage.setItem('lang', lang);
}

// Language switcher buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Check stored preference
const storedLang = localStorage.getItem('lang');
if (storedLang && translations[storedLang]) {
  setLanguage(storedLang);
} else {
  setLanguage(currentLang);
}

// Bootstrap AdSense ads
(adsbygoogle = window.adsbygoogle || []).push({});

// ==================== Tab Navigation ====================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ==================== Utility Functions ====================
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function t(key) {
  return translations[currentLang][key] || key;
}

function createCanvas(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas;
}

function fileToBlob(canvas, mimeType, quality = 0.92) {
  return new Promise(resolve => {
    canvas.toBlob(resolve, mimeType, quality);
  });
}

// ==================== Upload Area Setup ====================
function setupUploadArea(uploadArea, inputEl, previewEl, clearBtn, onFileSelect) {
  inputEl.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) loadImage(file, previewEl, onFileSelect);
  });

  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
  });

  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      loadImage(file, previewEl, onFileSelect);
    }
  });

  clearBtn.addEventListener('click', e => {
    e.stopPropagation();
    clearImage(uploadArea, inputEl, previewEl, clearBtn);
  });
}

function loadImage(file, previewEl, onFileSelect) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      previewEl.src = e.target.result;
      showPreview(previewEl);
      if (onFileSelect) onFileSelect(img, file);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showPreview(previewEl) {
  previewEl.classList.remove('hidden');
  previewEl.parentElement.classList.remove('hidden');
  previewEl.parentElement.previousElementSibling.classList.add('hidden');
}

function showPlaceholder(previewEl) {
  previewEl.classList.add('hidden');
  previewEl.parentElement.classList.add('hidden');
  previewEl.parentElement.previousElementSibling.classList.remove('hidden');
}

function clearImage(uploadArea, inputEl, previewEl, clearBtn) {
  inputEl.value = '';
  previewEl.src = '';
  showPlaceholder(previewEl);
}

// ==================== Format Convert ====================
let convertCurrentImg = null;
let convertCurrentFile = null;

setupUploadArea(
  document.getElementById('convert-upload'),
  document.getElementById('convert-input'),
  document.getElementById('convert-preview'),
  document.getElementById('convert-clear'),
  (img, file) => {
    convertCurrentImg = img;
    convertCurrentFile = file;
  }
);

const formatBtns = document.querySelectorAll('.format-btn');
let selectedFormat = 'image/jpeg';

formatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formatBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedFormat = btn.dataset.format;
  });
});

document.getElementById('convert-btn').addEventListener('click', async () => {
  if (!convertCurrentImg) return;

  const canvas = createCanvas(convertCurrentImg);
  const blob = await fileToBlob(canvas, selectedFormat);
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('convert-result');
  const sizeSpan = document.getElementById('convert-size');
  const downloadBtn = document.getElementById('convert-download');

  sizeSpan.textContent = `${t('originalFile')}: ${formatFileSize(convertCurrentFile.size)} → ${t('convertedFile')}: ${formatFileSize(blob.size)}`;
  downloadBtn.href = url;
  downloadBtn.download = `converted.${selectedFormat.split('/')[1]}`;
  resultArea.classList.remove('hidden');
});

// ==================== Image Compress ====================
let compressCurrentImg = null;
let compressCurrentFile = null;

setupUploadArea(
  document.getElementById('compress-upload'),
  document.getElementById('compress-input'),
  document.getElementById('compress-preview'),
  document.getElementById('compress-clear'),
  (img, file) => {
    compressCurrentImg = img;
    compressCurrentFile = file;
  }
);

const qualitySlider = document.getElementById('quality-slider');
const qualityValue = document.getElementById('quality-value');

qualitySlider.addEventListener('input', () => {
  qualityValue.textContent = qualitySlider.value;
});

document.getElementById('compress-btn').addEventListener('click', async () => {
  if (!compressCurrentImg) return;

  const quality = parseInt(qualitySlider.value) / 100;
  const canvas = createCanvas(compressCurrentImg);
  const blob = await fileToBlob(canvas, 'image/jpeg', quality);
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('compress-result');
  const sizeSpan = document.getElementById('compress-size');
  const ratioSpan = document.getElementById('compress-ratio');
  const downloadBtn = document.getElementById('compress-download');

  const ratio = ((1 - blob.size / compressCurrentFile.size) * 100).toFixed(1);
  sizeSpan.textContent = `${t('originalFile')}: ${formatFileSize(compressCurrentFile.size)}`;
  ratioSpan.textContent = `${t('compressedFile')}: ${formatFileSize(blob.size)} (${t('reducedBy')} ${ratio}%)`;
  downloadBtn.href = url;
  downloadBtn.download = 'compressed.jpg';
  resultArea.classList.remove('hidden');
});

// ==================== Resize / Crop ====================
let resizeCurrentImg = null;
let resizeCurrentFile = null;

setupUploadArea(
  document.getElementById('resize-upload'),
  document.getElementById('resize-input'),
  document.getElementById('resize-preview'),
  document.getElementById('resize-clear'),
  (img, file) => {
    resizeCurrentImg = img;
    resizeCurrentFile = file;
  }
);

const presetBtns = document.querySelectorAll('.preset-btn');
const widthInput = document.getElementById('resize-width');
const heightInput = document.getElementById('resize-height');
const maintainAspect = document.getElementById('maintain-aspect');

presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    widthInput.value = btn.dataset.width;
    heightInput.value = btn.dataset.height;
  });
});

let aspectRatio = 1;

widthInput.addEventListener('input', () => {
  if (maintainAspect.checked && resizeCurrentImg) {
    aspectRatio = resizeCurrentImg.naturalWidth / resizeCurrentImg.naturalHeight;
    heightInput.value = Math.round(widthInput.value / aspectRatio);
  }
});

heightInput.addEventListener('input', () => {
  if (maintainAspect.checked && resizeCurrentImg) {
    aspectRatio = resizeCurrentImg.naturalHeight / resizeCurrentImg.naturalWidth;
    widthInput.value = Math.round(heightInput.value / aspectRatio);
  }
});

document.getElementById('resize-btn').addEventListener('click', async () => {
  if (!resizeCurrentImg) return;

  let targetWidth = parseInt(widthInput.value) || resizeCurrentImg.naturalWidth;
  let targetHeight = parseInt(heightInput.value) || resizeCurrentImg.naturalHeight;

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(resizeCurrentImg, 0, 0, targetWidth, targetHeight);

  const blob = await fileToBlob(canvas, 'image/jpeg');
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('resize-result');
  const sizeSpan = document.getElementById('resize-size');
  const downloadBtn = document.getElementById('resize-download');

  sizeSpan.textContent = `${t('originalSize')}: ${resizeCurrentImg.naturalWidth}×${resizeCurrentImg.naturalHeight} → ${t('newSize')}: ${targetWidth}×${targetHeight}`;
  downloadBtn.href = url;
  downloadBtn.download = 'resized.jpg';
  resultArea.classList.remove('hidden');
});

// ==================== Rotate / Flip ====================
let rotateCurrentImg = null;
let rotateCurrentFile = null;
let rotateCurrentDeg = 0;
let flipHorizontal = false;
let flipVertical = false;

setupUploadArea(
  document.getElementById('rotate-upload'),
  document.getElementById('rotate-input'),
  document.getElementById('rotate-preview'),
  document.getElementById('rotate-clear'),
  (img, file) => {
    rotateCurrentImg = img;
    rotateCurrentFile = file;
    rotateCurrentDeg = 0;
    flipHorizontal = false;
    flipVertical = false;
    document.getElementById('rotate-slider').value = 0;
    document.getElementById('rotate-value').textContent = 0;
  }
);

const rotateSlider = document.getElementById('rotate-slider');
const rotateValue = document.getElementById('rotate-value');

rotateSlider.addEventListener('input', () => {
  rotateValue.textContent = rotateSlider.value;
  rotateCurrentDeg = parseInt(rotateSlider.value);
});

document.querySelectorAll('.rotate-preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    rotateCurrentDeg = parseInt(btn.dataset.deg);
    rotateSlider.value = rotateCurrentDeg;
    rotateValue.textContent = rotateCurrentDeg;
  });
});

document.getElementById('flip-horizontal').addEventListener('click', () => {
  flipHorizontal = !flipHorizontal;
});

document.getElementById('flip-vertical').addEventListener('click', () => {
  flipVertical = !flipVertical;
});

document.getElementById('rotate-btn').addEventListener('click', async () => {
  if (!rotateCurrentImg) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (rotateCurrentDeg === 90 || rotateCurrentDeg === 270) {
    canvas.width = rotateCurrentImg.naturalHeight;
    canvas.height = rotateCurrentImg.naturalWidth;
  } else {
    canvas.width = rotateCurrentImg.naturalWidth;
    canvas.height = rotateCurrentImg.naturalHeight;
  }

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((rotateCurrentDeg * Math.PI) / 180);
  ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
  ctx.drawImage(rotateCurrentImg, -rotateCurrentImg.naturalWidth / 2, -rotateCurrentImg.naturalHeight / 2);

  const blob = await fileToBlob(canvas, 'image/jpeg');
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('rotate-result');
  const sizeSpan = document.getElementById('rotate-size');
  const downloadBtn = document.getElementById('rotate-download');

  sizeSpan.textContent = `${t('originalSize')}: ${rotateCurrentImg.naturalWidth}×${rotateCurrentImg.naturalHeight}`;
  downloadBtn.href = url;
  downloadBtn.download = 'rotated.jpg';
  resultArea.classList.remove('hidden');
});

// ==================== Grayscale ====================
let grayscaleCurrentImg = null;
let grayscaleCurrentFile = null;

setupUploadArea(
  document.getElementById('grayscale-upload'),
  document.getElementById('grayscale-input'),
  document.getElementById('grayscale-preview'),
  document.getElementById('grayscale-clear'),
  (img, file) => {
    grayscaleCurrentImg = img;
    grayscaleCurrentFile = file;
  }
);

const grayscaleSlider = document.getElementById('grayscale-slider');
const grayscaleValue = document.getElementById('grayscale-value');

grayscaleSlider.addEventListener('input', () => {
  grayscaleValue.textContent = grayscaleSlider.value;
});

document.getElementById('grayscale-btn').addEventListener('click', async () => {
  if (!grayscaleCurrentImg) return;

  const canvas = createCanvas(grayscaleCurrentImg);
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const level = parseInt(grayscaleSlider.value) / 100;

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i] * (1 - level) + avg * level;
    data[i + 1] = data[i + 1] * (1 - level) + avg * level;
    data[i + 2] = data[i + 2] * (1 - level) + avg * level;
  }

  ctx.putImageData(imageData, 0, 0);
  const blob = await fileToBlob(canvas, 'image/jpeg');
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('grayscale-result');
  const sizeSpan = document.getElementById('grayscale-size');
  const downloadBtn = document.getElementById('grayscale-download');

  sizeSpan.textContent = `${t('originalFile')}: ${formatFileSize(grayscaleCurrentFile.size)} → ${formatFileSize(blob.size)}`;
  downloadBtn.href = url;
  downloadBtn.download = 'grayscale.jpg';
  resultArea.classList.remove('hidden');
});

// ==================== Brightness / Contrast ====================
let adjustCurrentImg = null;
let adjustCurrentFile = null;

setupUploadArea(
  document.getElementById('adjust-upload'),
  document.getElementById('adjust-input'),
  document.getElementById('adjust-preview'),
  document.getElementById('adjust-clear'),
  (img, file) => {
    adjustCurrentImg = img;
    adjustCurrentFile = file;
  }
);

const brightnessSlider = document.getElementById('brightness-slider');
const brightnessValue = document.getElementById('brightness-value');
const contrastSlider = document.getElementById('contrast-slider');
const contrastValue = document.getElementById('contrast-value');

brightnessSlider.addEventListener('input', () => {
  brightnessValue.textContent = brightnessSlider.value;
});

contrastSlider.addEventListener('input', () => {
  contrastValue.textContent = contrastSlider.value;
});

document.getElementById('adjust-btn').addEventListener('click', async () => {
  if (!adjustCurrentImg) return;

  const canvas = createCanvas(adjustCurrentImg);
  const ctx = canvas.getContext('2d');
  const brightness = parseInt(brightnessSlider.value);
  const contrast = parseInt(contrastSlider.value);

  ctx.filter = `brightness(${100 + brightness}%) contrast(${100 + contrast}%)`;
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.filter = ctx.filter;
  tempCtx.drawImage(adjustCurrentImg, 0, 0);
  ctx.filter = 'none';
  ctx.drawImage(tempCanvas, 0, 0);

  const blob = await fileToBlob(canvas, 'image/jpeg');
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('adjust-result');
  const sizeSpan = document.getElementById('adjust-size');
  const downloadBtn = document.getElementById('adjust-download');

  sizeSpan.textContent = `${t('originalFile')}: ${formatFileSize(adjustCurrentFile.size)} → ${formatFileSize(blob.size)}`;
  downloadBtn.href = url;
  downloadBtn.download = 'adjusted.jpg';
  resultArea.classList.remove('hidden');
});