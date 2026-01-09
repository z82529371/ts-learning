// TypeScript 物件的型別——介面 Interface

// 一般首字母大寫來命名介面，以區別於其他型別
// 定義一個介面 Person，描述物件的結構
interface Person {
  name: string;
  age: number;
}

// 賦值時，物件的形狀必須與介面定義的形狀相符
// 正確範例：符合 Person 介面的結構
let tom: Person = {
  name: "Tom",
  age: 25,
};

// 錯誤範例：缺少 age 屬性
let tom1: Person = {
  name: "Tom",
};

// 錯誤範例：多了一個未定義的屬性
let tom2: Person = {
  name: "Tom",
  age: 25,
  gender: "male",
};

// 可選屬性：使用 ? 標記屬性為可選
interface Person1 {
  name: string;
  age?: number; // age 屬性是可選的
}

// 正確範例：age 屬性可以省略
let jerry: Person1 = {
  name: "Jerry",
};

// 正確範例：age 屬性可以存在
let jerry1: Person1 = {
  name: "Jerry",
  age: 30,
};

// 錯誤範例：多餘的屬性會報錯
let jerry2: Person1 = {
  name: "Jerry",
  age: 30,
  gender: "male", // 錯誤：多餘的屬性
};

// 任意屬性：使用索引簽名來描述物件可以有任意數量的屬性
interface Person2 {
  name: string;
  [propName: string]: any;
}

// 正確範例：可以有任意數量的其他屬性
let tom3: Person2 = {
  name: "Tom",
  age: 25,
  gender: "male",
};

// 錯誤範例：任意屬性的值類型不匹配
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom4: Person = {
  name: "Tom",
  age: 25,
  gender: "male",
};

// 唯獨屬性：使用 readonly 關鍵字來定義唯獨屬性
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

// 正確範例：可以有任意數量的其他屬性
let tom5: Person3 = {
  id: 89757,
  name: "Tom",
  gender: "male",
};

// 錯誤範例：不能修改唯讀屬性
tom5.id = 9527; // 錯誤：id 屬性是唯讀的，不能被修改

// 錯誤範例：缺少唯讀屬性
let tom6: Person3 = {
  name: "Tom",
  gender: "male",
};

// 錯誤範例：不能修改唯讀屬性
tom6.id = 9527; // 錯誤：id 屬性是唯讀的，不能被修改
