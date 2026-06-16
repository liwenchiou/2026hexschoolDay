// app.js 結構參考
const dotenv = require("dotenv");
const result = dotenv.config().parsed;

function getUploadConfig() {
  // 提示：用 || 給預設值；MAX_FILE_SIZE_MB 是字串，記得使用 Number() 轉型
  console.log(result);
  return {
    uploadDir: result.UPLOAD_DIR || "",
    maxFileSize: Number(result.MAX_FILE_SIZE_MB) || 0,
    gymName: result.GYM_NAME,
  };
}

// 測試印出
console.log(getUploadConfig());
