// TypeScript 型別斷言 Type Assertions

// 用於告訴編譯器某個值的具體型別，即使編譯器無法推斷出該型別

// 語法：<型別>值 或 值 as 型別

// 只能訪問此聯合型別的所有型別裡共有的屬性或方法
function getLength(something: string | number): number {
  return something.length;
}

// 有時需要訪問聯合型別的時候就訪問其中一個型別的屬性或方法
function getLength1(something: string | number): number {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
}

// 使用型別斷言來告訴編譯器具體的型別
function getLength2(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
