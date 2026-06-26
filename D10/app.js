// app.js
const express = require("express");
const cors = require("cors");
const app = express();
const membersRouter = require("./routes/member"); // 引入路由模組
// === 請依正確順序掛載 Middleware ===
app.use(cors());
app.use(express.json());

// ==================================

// === 掛載 members 路由（引入並指定前綴）===
// 將 membersRouter 掛載到 /members 前綴
app.use("/members", membersRouter);
// ==========================================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
