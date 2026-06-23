/**
 * 任務要求：

安裝並引入 express，建立應用程式實例，監聽 3000 Port。
設計以下 2 條路由：
路由一：GET /coaches/:id，從路徑中取出教練 ID，回傳狀態碼 200 與：{ "status": "success", "coachId": "取出的 id 值" }
路由二：GET /courses，從查詢字串取出 type 與 limit 兩個參數，回傳狀態碼 200 與：{ "status": "success", "filter": { "type": "取出的 type 值", "limit": "取出的 limit 值" } }
 */

// app.js
const express = require("express");
const app = express();

// 路由一：取得單一教練資料
app.get("/coaches/:id", (req, res) => {
  // === 請在此處撰寫你的程式碼 ===
  const { id } = req.params; // 解構取出多個參數
  res.status(200).json({ status: "success", coachId: id });
  // ============================
});

// 路由二：篩選課程列表
app.get("/courses", (req, res) => {
  // === 請在此處撰寫你的程式碼 ===
  const { type, limit } = req.query; // 一次解構取出 type 和 limit
  res
    .status(200)
    .json({ status: "success", filter: { type: type, limit: limit } });
  // ============================
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
