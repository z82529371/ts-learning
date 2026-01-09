// TypeScript 泛型 Generic Types

// 泛型：定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性

// 不指定泛型函式：缺點是無法推斷出具體的型別
function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, "x"); // ['x', 'x', 'x'

// 指定泛型函式：可以推斷出具體的型別
function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray2<string>(3, "x"); // ['x', 'x', 'x']

// 多個泛型參數：定義函式時，可以使用多個泛型參數
// 記住多個未知型別，再把它們的型別「安全地轉換」
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([1, "one"]); // ['one', 1]

// 泛型約束：定義函式時，可以使用泛型約束來限制泛型參數的型別

// 錯誤範例：泛型 T 未必有包含 length 屬性
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 正確範例：泛型 T 必須有包含 length 屬性
function loggingIdentity2<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity2("abc");
loggingIdentity2([1, 2, 3]);
loggingIdentity2(7); // 錯誤，number 型別沒有 length 屬性

// 多個泛型參數的泛型約束
function getLonger<T extends { length: number }, U extends { length: number }>(
  a: T,
  b: U
) {
  return a.length > b.length ? a : b;
}

getLonger("hello", [1, 2, 3]); // OK
getLonger([1, 2], { length: 10 }); // OK

getLonger(123, 456); // 錯誤：number 沒有 length

// 泛型介面：定義函式時，可以使用泛型介面
// 可以使用含有泛型的介面來定義函式的形狀
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray1: CreateArrayFunc;
createArray1 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

// 泛型引數提前綁定，定義函式時，可以使用泛型引數
interface CreateArrayFuncn<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFuncn<any>;
createArray3 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray(3, "x"); // ['x', 'x', 'x']

createArray(3, "x"); // ['x', 'x', 'x']

// 泛型類別：定義函式時，可以使用泛型類別
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

// 使用
let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 泛型引數的預設型別
function createArray5<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
