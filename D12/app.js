/**
 * 任務要求：

安裝並引入 bcrypt。
建立 hashPassword(password) 函式：
使用 bcrypt.genSalt(10) 產生 Salt。
使用 bcrypt.hash 對密碼進行雜湊，並回傳雜湊後的結果。
建立 verifyPassword(password, hash) 函式：
使用 bcrypt.compare 比對密碼與雜湊值，並回傳比對結果（true / false）。
在主程式依序執行：
呼叫 hashPassword('hello123') 並印出雜湊結果。
用正確密碼 'hello123' 呼叫 verifyPassword，印出比對結果。
用錯誤密碼 'wrongPass' 呼叫 verifyPassword，印出比對結果。
 */

// app.js
// 引入 bcrypt 套件，用於安全地將密碼雜湊與驗證
const bcrypt = require("bcrypt");

// 密碼雜湊函式
async function hashPassword(password) {
  // === 請在此處撰寫你的程式碼 ===
  // 1. 產生 Salt（鹽巴），cost factor 設為 10（運算 2^10 次），增強安全性
  const salt = await bcrypt.genSalt(10);
  // 2. 將明文密碼與生成的 salt 結合並進行雜湊運算，回傳雜湊值
  return await bcrypt.hash(password, salt);
  // ============================
}

// 密碼比對函式
async function verifyPassword(password, hash) {
  // === 請在此處撰寫你的程式碼 ===
  // 自動拆解 hash 字串中的 salt，並將傳入的 password 重新雜湊後進行比對
  // 若密碼正確回傳 true，錯誤則回傳 false
  return await bcrypt.compare(password, hash);
  // ============================
}

// 主程式流程
async function main() {
  // 1. 進行雜湊
  const hashed = await hashPassword("hello123");
  console.log("雜湊結果：", hashed);

  // 2. 用正確密碼測試比對，預期得到 true
  const correct = await verifyPassword("hello123", hashed);
  console.log("正確密碼比對：", correct);

  // 3. 用錯誤密碼測試比對，預期得到 false
  const wrong = await verifyPassword("wrongPass", hashed);
  console.log("錯誤密碼比對：", wrong);
}

// 執行主程式
main();
