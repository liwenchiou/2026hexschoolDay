// app.js
const http = require("http");

const server = http.createServer((req, res) => {
  // === 請在此處撰寫你的路由判斷程式碼 ===
  // 1. 路由：首頁 (GET /)
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("「歡迎來到健身房系統」");
    return; // 記得 return，否則程式會繼續往下跑
  }

  // 2. 路由：取得教練列表 (GET /coaches)
  if (req.method === "GET" && req.url === "/api/v1/packages") {
    res.writeHead(200, { "Content-Type": "application/json" });
    // 後端回傳 JSON 資料時，必須先用 JSON.stringify 轉為字串
    const coaches = [{ status: "success", data: "方案列表" }];
    res.end(JSON.stringify(coaches));
    return;
  }

  // 3. 404 防呆：當以上路由都不符合時
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("路由不存在");

  // ==================================
});

// 監聽 3000 port
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
