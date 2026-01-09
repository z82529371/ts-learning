// TypeScript 原始資料型別

// Boolean 布林值
const isDone: boolean = false;

// Number 數值
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;
const notANumber: number = NaN;
const infinityNumber: number = Infinity;

// String 字串
const myName: string = "Tom";
const myAge: number = 25;

const sentence: string = `Hello, my name is ${myName}. I'll be ${
  myAge + 1
} years old next month.`;

// Void 空值：代表沒有任何類型，通常用在函式沒有返回值時的情況
function alertName(): void {
  alert("My name is Tom");
}

// Null 和 Undefined：null 和 undefined 是所有類型的子類型，會搭配 union types 使用
let maybeNumber: number | undefined = undefined;
let maybeString: string | null = null;
