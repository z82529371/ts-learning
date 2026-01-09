// TypeScript 函式的型別 Function Types

// 函式宣告
function add(x, y) {
  return x + y;
}

// 正確範例：為函式參數和返回值指定型別
function addFunctionType(x: number, y: number): number {
  return x + y;
}

// 錯誤範例：多少參數不匹配
addFunctionType(1, 2, 3); // 錯誤：多餘的參數
addFunctionType(1); // 錯誤：參數不足

// 函式表達式
let myAdd = function (x, y) {
  return x + y;
};

// 正確範例：為函式表達式指定型別
let myAddFunctionType = function (x: number, y: number): number {
  return x + y;
};

// 介面表示函式型別
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 正確範例：為函式表達式指定型別
let mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 可選引數：在函式參數後加上 ? 表示該參數是可選的

// 正確範例：為可選引數指定型別
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName("Tom", "Cat");
let tom = buildName("Tom");

// 錯誤範例：可選引數必須放在必需引數之後
function buildName1(firstName?: string, lastName: string) {
  if (firstName) {
    return firstName + " " + lastName;
  } else {
    return lastName;
  }
}

let tomcat1 = buildName1("Tom", "Cat"); // 錯誤
let tom1 = buildName1(undefined, "Tom"); // 錯誤

// 預設引數：在函式參數後加上 = 並指定預設值

// 正確範例：為預設引數指定型別
function buildName2(firstName: string, lastName: string = "Smith") {
  return firstName + " " + lastName;
}

let tomcat2 = buildName2("Tom", "Cat");
let tom2 = buildName2("Tom");

// 正確範例：預設引數可以放在必需引數之前
function buildName3(firstName: string = "Tom", lastName: string) {
  return firstName + " " + lastName;
}

let tomcat3 = buildName3("Tom", "Cat");
let tom3 = buildName3(undefined, "Cat");

// 剩餘引數：使用 ... 來表示剩餘引數，將多個引數收集到一個陣列中
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// 正確範例：為剩餘引數指定型別
function pushFunctionType(array: number[], ...items: number[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

// 過載：為同一個函式名稱提供多個型別定義

// 正確範例：使用過載定義
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  } else {
    throw new Error("Invalid argument type");
  }
}

// 錯誤範例：沒有使用過載定義
function reverse1(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  } else {
    throw new Error("Invalid argument type");
  }
}
