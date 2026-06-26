// routes/members.js
const express = require("express");
const router = express.Router();

// GET /
router.get("/", (req, res) => {
  // === 請在此處撰寫你的程式碼 ===
  res.status(200).json({ status: "success", message: "所有會員列表" });
  // ============================
});

// GET /:id
router.get("/:id", (req, res) => {
  // === 請在此處撰寫你的程式碼 ===
  const { id } = req.params;
  res.status(200).json({ status: "success", memberId: `取出的 ${id} 值` });
  // ============================
});

// 匯出 router
// === 請在此處撰寫你的程式碼 ===
module.exports = router; // 匯出路由實例
// ============================
