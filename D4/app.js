const dotenv = require("dotenv");
const result = dotenv.config().parsed;
console.log(result);

const serverPort = result.PORT || 3000;

const http = require("http");

// 1. 建立伺服器，傳入一個 Callback 函式處理每一次的連線
const server = http.createServer((req, res) => {
  // 設定 HTTP 回傳狀態碼為 200 (成功)，並指定回傳內容是純文字或 HTML
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // 寫入要丟回給瀏覽器的內容
  res.write("<h2>歡迎來到我的第一個 Node.js 網站！</h2>");

  // 必須呼叫 end()，否則瀏覽器會認為資料還沒傳完，網頁會一直轉圈圈卡死
  res.end();
});

// 2. 讓伺服器監聽 3000 Port
server.listen(serverPort, () => {
  console.log(
    `[系統] 伺服器已啟動！請打開瀏覽器輸入：http://localhost:${serverPort}`,
  );
});
