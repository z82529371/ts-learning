// TypeScript 型別推論

// 如果宣告變數時沒有指定型別，會根據賦值自動推論出一個型別：
let myFavoriteNumber = "seven"; // 推論為 string 型別
myFavoriteNumber = 7;

// 如果沒有賦值，則會被推論為 any 型別：
let myFavoriteNumber2; // 推論為 any 型別
myFavoriteNumber2 = "seven";
myFavoriteNumber2 = 7;
