// TypeScript 字串字面量型別 String Literal Types

// 在 TypeScript 中，字串字面量型別是一種特殊的型別，用來表示一組固定的字串值。

// 定義一個字串字面量型別 "EventNames"，// 它只能取 "click"、"scroll" 或 "mousemove" 這三個字串值之一
type EventNames = "click" | "scroll" | "mousemove";

function handleEvent(ele: Element, event: EventNames) {
  // ...
}

handleEvent(document.getElementById("hello")!, "scroll"); // 正確
handleEvent(document.getElementById("world")!, "dbclick"); // 錯誤，因為 'dbclick' 不是 EventNames 型別允許的值
