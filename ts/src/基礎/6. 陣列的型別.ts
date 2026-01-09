// TypeScript 陣列的型別

// 型別 + 方括號：在元素型別後面加上 []
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 錯誤範例：陣列元素型別不符合宣告的型別
let fibonacci1: number[] = [1, "1", 2, 3, 5];

// 錯誤範例：嘗試將不同型別的值加入陣列
fibonacci1.push("8"); // 錯誤：將字串加入 number[] 陣列會報錯

// 泛型陣列：使用 Array<元素型別> 來表示陣列型別
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 介面表示陣列型別
interface NumberArray {
  [index: number]: number;
}

let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

// 任意型別陣列：使用 any 型別表示陣列中可以包含任意型別的元素
let list: any[] = [true, 123, "hello"];

// 類別陣列 (Array-like object) 不是陣列型別

// 錯誤範例：類別陣列不能直接賦值給陣列型別
function sum() {
  let args: number[] = arguments;
}

// 正確範例：使用介面來描述類別陣列的結構
function sumCorrectly() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 正確範例：使用 TS 內建的介面來描述類別陣列
function sumCorrectlyGeneric() {
  let args: IArguments = arguments; // IArguments 是內建的介面
}
