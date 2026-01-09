// TypeScript 型別別名

// 一般首字母大寫來命名型別別名

// 定義了一個型別別名 'Name'，它代表一個字串類型
type Name = string;

// 可以定義更複雜的型別別名
type NameResolver = () => string;

// 定義了一個名為 'NameOrResolver' 的型別別名
type NameOrResolver = Name | NameResolver;

// 使用型別別名來定義函式
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
