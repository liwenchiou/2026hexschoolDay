// app.js
const express = require("express"); // 引入 Express 框架
const cors = require("cors"); // 引入 CORS 跨網域套件，允許前端跨網域請求 API
const app = express(); // 建立 Express 應用程式實例

// 掛載 Middleware 與路由
const memberRouter = require("./routes/member"); // 引入會員相關的路由模組

// 使用 CORS middleware，允許所有跨域請求
app.use(cors());

// 解析傳入的 JSON 格式請求本體 (req.body)
app.use(express.json());

// 將 /members 開頭的請求路由，都交由 memberRouter 處理
app.use("/members", memberRouter);

const PORT = 3000; // 定義伺服器監聽的埠號
// 啟動伺服器並開始監聽指定埠號
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
