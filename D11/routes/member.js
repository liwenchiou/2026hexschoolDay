// routes/members.js
const express = require("express");
const router = express.Router(); // 建立 Express Router 實例，用來定義模組化的路由

// 模擬資料庫的會員列表陣列
let members = [
  { id: 1, name: "王小明" },
  { id: 2, name: "李小花" },
];

// 記錄下一個新增會員時要使用的 ID（因為目前已有 id 1, 2，所以下一個是 3）
let nextId = 3;

/**
 * 輔助函式：根據 ID 尋找陣列中的特定項目
 * @param {Array} list - 要搜尋的陣列
 * @param {String|Number} id - 欲尋找的 ID（從網址列抓下來通常是字串，所以需轉型為 Number）
 * @returns {Object|undefined} 找到的項目，找不到則回傳 undefined
 */
function findById(list, id) {
  return list.find((item) => item.id === Number(id));
}

/**
 * 輔助函式：驗證請求本體 (body) 是否缺少必填欄位
 * @param {Object} body - 請求的 body 物件
 * @param {Array} requiredFields - 必填欄位的名稱陣列
 * @returns {Array} 缺少的欄位名稱陣列
 */
function validateFields(body, requiredFields) {
  return requiredFields.filter((field) => !body[field]);
}

// 取得所有會員列表 (GET /members/)
router.get("/", (req, res) => {
  // 回傳 HTTP 狀態碼 200 (OK)，並回傳目前的會員陣列
  res.status(200).json({ status: "success", data: members });
});

// 新增會員 (POST /members/)
router.post("/", (req, res) => {
  // 檢查是否有傳入必填的 'name' 欄位
  const missingFields = validateFields(req.body, ["name"]);
  
  // 若有缺少必填欄位，回傳 400 (Bad Request) 錯誤
  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "error",
      message: `缺少必填欄位：${missingFields.join(", ")}`,
    });
  }

  // 建立新的會員物件，並指派當前的 nextId 作為其 id
  const newMember = { id: nextId, name: req.body.name };
  members.push(newMember); // 將新會員加入陣列
  nextId++; // 將 nextId 加 1，供下一位新會員使用

  // 回傳 201 (Created) 表示新增成功，並回傳更新後的會員陣列
  res.status(201).json({ status: "success", data: members });
});

// 更新特定會員資料 (PUT /members/:id)
router.put("/:id", (req, res) => {
  // 根據網址參數中的 id 尋找會員
  const member = findById(members, req.params.id);
  
  // 若找不到對應的會員，回傳 404 (Not Found) 錯誤
  if (!member) {
    return res.status(404).json({ status: "error", message: "找不到此會員" });
  }

  // 檢查欲更新的資料是否包含必填的 'name' 欄位
  const missingFields = validateFields(req.body, ["name"]);
  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "error",
      message: `缺少必填欄位：${missingFields.join(", ")}`,
    });
  }

  // 更新該會員的名稱
  member.name = req.body.name;
  
  // 回傳 200 (OK) 表示更新成功，並回傳更新後的會員陣列
  res.status(200).json({ status: "success", data: members });
});

// 刪除特定會員 (DELETE /members/:id)
router.delete("/:id", (req, res) => {
  // 尋找目標會員在陣列中的索引位置 (index)
  const index = members.findIndex((item) => item.id === Number(req.params.id));
  
  // 若找不到該會員 (index 為 -1)，回傳 404 (Not Found) 錯誤
  if (index === -1) {
    return res.status(404).json({ status: "error", message: "找不到此會員" });
  }

  // 使用 splice 將該會員從陣列中移除
  members.splice(index, 1);
  
  // 回傳 204 (No Content) 表示刪除成功且無回傳內容，並結束此請求
  res.status(204).end();
});

module.exports = router; // 匯出 router 供 app.js 使用
