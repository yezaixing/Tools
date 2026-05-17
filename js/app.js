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
  // File input change
  inputEl.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) loadImage(file, previewEl, onFileSelect);
  });

  // Drag and drop
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

  // Clear button
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

// Format buttons
const formatBtns = document.querySelectorAll('.format-btn');
let selectedFormat = 'image/jpeg';

formatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formatBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedFormat = btn.dataset.format;
  });
});

// Convert button
document.getElementById('convert-btn').addEventListener('click', async () => {
  if (!convertCurrentImg) return;

  const canvas = createCanvas(convertCurrentImg);
  const blob = await fileToBlob(canvas, selectedFormat);
  const url = URL.createObjectURL(blob);

  const resultArea = document.getElementById('convert-result');
  const sizeSpan = document.getElementById('convert-size');
  const downloadBtn = document.getElementById('convert-download');

  sizeSpan.textContent = `原文件: ${formatFileSize(convertCurrentFile.size)} → 新文件: ${formatFileSize(blob.size)}`;
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

// Quality slider
const qualitySlider = document.getElementById('quality-slider');
const qualityValue = document.getElementById('quality-value');

qualitySlider.addEventListener('input', () => {
  qualityValue.textContent = qualitySlider.value;
});

// Compress button
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
  sizeSpan.textContent = `原文件: ${formatFileSize(compressCurrentFile.size)}`;
  ratioSpan.textContent = `压缩后: ${formatFileSize(blob.size)} (减小 ${ratio}%)`;
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

// Preset buttons
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

// Aspect ratio lock
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

// Resize button
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

  sizeSpan.textContent = `原尺寸: ${resizeCurrentImg.naturalWidth}×${resizeCurrentImg.naturalHeight} → 新尺寸: ${targetWidth}×${targetHeight}`;
  downloadBtn.href = url;
  downloadBtn.download = 'resized.jpg';
  resultArea.classList.remove('hidden');
});