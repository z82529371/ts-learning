// TypeScript 聯合型別 Union Types

// 宣告變數時可以指定多個型別 (使用 | 符號分隔)，表示該變數可以是這些型別中的任意一種：
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;

let myFavoriteString: string | number;
myFavoriteString = true; // 錯誤，不能賦值為 boolean 型別

// 聯合型別的變數只能調用所有型別共有的方法：
function getLength(something: string | number): number {
  return something.length; // 錯誤，number 型別沒有 length 屬性
}

function getString(something: string | number): string {
  return something.toString(); // 正確，string 和 number 型別都有 toString() 方法
}

// 使用聯合型別時，TypeScript 會根據上下文自動推斷出具體的型別：
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = "seven";
console.log(myFavoriteNumber2.length); // 正確，string 型別有 length 屬性
myFavoriteNumber2 = 7;
console.log(myFavoriteNumber2.length); // 錯誤，number 型別沒有 length 屬性
