const fs = require("fs/promises");

//抽離出一個 isValidPrice(price) 函式，專門檢查金額是否大於 0，並回傳布林值（true 或 false）。
function isValidPrice(price) {
  return price > 0;
}
//抽離出一個 writeOrderLog(id, price) 非同步函式，內含 try…catch，專門負責將訂單文字寫入檔案。
async function writeOrderLog(id, price) {
  try {
    const logContent = `訂單編號: ${id}, 金額: ${price}`;
    await fs.writeFile(`./order-${id}.txt`, logContent);
  } catch (err) {
    throw err;
  }
}

//重構 createOrder(orderData) 主流程函式，使其不直接處理驗證邏輯與檔案寫入語法，而是透過呼叫上面兩個拆分出來的函式來完成任務。
async function createOrder(orderData) {
  try {
    // 1. 檢查金額是否大於 0 (職責一)
    if (!isValidPrice(orderData.price)) {
      throw new Error("訂單金額不可小於或等於 0");
    }

    // 2. 建立訂單 Log 檔案 (職責二)
    await writeOrderLog(orderData.id, orderData.price);
    console.log("訂單儲存成功！");
  } catch (err) {
    console.error(`失敗: ${err.message}`);
  }
}

createOrder({ id: "A001", price: 500 });
