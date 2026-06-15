// 1. 引入自訂模組
const fileManager = require('./fileManager.js');

async function main() {
  // 2. 執行寫入與讀取流程
  const filename="user.txt";
  let content="Hello Node.js!";
  await fileManager.saveData(filename, content);
  await fileManager.loadData(filename);
}

main();