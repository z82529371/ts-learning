// TypeScript 宣告合併

// 函式的合併
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

// 介面的合併
// 介面屬性合併：合併屬性的型別必須相同
interface Alarm {
  price: number;
}
interface Alarm {
  weight: number;
}

// 相當於
interface Alarm {
  price: number;
  weight: number;
}

// 介面方法合併：合併方法的型別必須相同
interface Alarm {
  price: number;
  alert(s: string): string;
}
interface Alarm {
  weight: number;
  alert(s: string, n: number): string;
}

// 相當於
interface Alarm {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}
