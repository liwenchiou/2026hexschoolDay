// app.js
require("dotenv").config();
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  // === 請在此處撰寫你的程式碼 ===
  // 簽發 Token
  // 使用 jwt.sign 方法產生 JWT token
  // 第一個參數：payload，準備放入 token 中的資料 (通常不放機密資料)
  // 第二個參數：secretOrPrivateKey，從環境變數取得的密鑰
  // 第三個參數：options，設定一些額外選項，這裡設定 expiresIn 為 '7d' 表示 7 天後過期
  const token = jwt.sign(user, SECRET, { expiresIn: '7d' });
  return token;
  // ============================
}

// 測試執行
const token = generateToken({ id: 1, email: "member@gym.com" });
console.log("簽發的 Token：", token);
