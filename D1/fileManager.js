const fs = require('fs/promises');

// 1. 寫入檔案
async function saveData(fileName, content) {
  try {
  // 覆蓋寫入（建立新檔）
  await fs.writeFile(fileName, content);
  console.log(`${fileName} 檔案寫入成功`);
} catch (err) {
  console.error(`${fileName} 檔案寫入失敗`, err.message);
}
}

// 2. 讀取檔案
async function loadData(fileName) {
  try {
  const content = await fs.readFile(fileName, 'utf-8');
  console.log('檔案讀取成功內容為：\n', content);
} catch (err) {
  console.error('讀取檔案失敗：', err.message);
}
}

// 3. 匯出模組
module.exports = {
  saveData,loadData
};