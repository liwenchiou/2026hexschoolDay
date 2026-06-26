// app.js
const express = require("express");
const app = express();

// === 請在此處設計你的路由 ===
// 路由一：首頁
app.get("/", (req, res) => {
  res.status(200);
  res.json({ status: "success", message: "歡迎來到健身房 API" });
});

// 路由二：會員列表
app.get("/api/v1/members", (req, res) => {
  res.status(200);
  res.json({
    status: "success",
    data: [{ name: "王小明" }, { name: "李小花" }],
  });
});

// 路由三：404 防呆（app.use 會匹配所有未定義的路徑）
app.use((req, res) => {
  res.status(404);
  res.json({ status: "error", message: "路由不存在" });
});

// ==========================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
