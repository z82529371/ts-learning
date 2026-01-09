// 原生 JavaScript Class 類別
// 定義一個 JS 類別 Animal
class Animal {
  // 定義一個屬性 name 並在建構函式中初始化
  constructor(name) {
    this.name = name;
  }
  // 定義一個方法 sayHi
  sayHi() {
    return `Hi, I'm ${this.name}`;
  }
}

let a = new Animal("Jack"); // 建立一個 Animal 的實例
console.log(a.sayHi()); // Hi, I'm Jack

// 使用 extends 繼承類別，並使用 super 呼叫父類別的建構函式和方法
class cat extends Animal {
  constructor(name) {
    super(name); // 呼叫父類別的建構函式
    console.log(this.name);
  }
  sayHi() {
    return `Meow, ${super.sayHi()}`; // 呼叫父類別的方法
  }
}

let c = new cat("Kitty"); // 建立一個 cat 的實例
console.log(c.sayHi()); // Meow, Hi, I'm Kitty

// 使用 getter 和 setter 定義屬性
class Animal1 {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    console.log("setter: " + value);
  }
}

let a1 = new Animal1("Tom"); // 建立一個 Animal1 的實例
a1.name = "Jerry"; // setter 設定 name 屬性
console.log(a1.name); // getter 取得 name 屬性 => setter: Jerry

// 使用 static 定義靜態屬性和方法，不需要實例化類別即可使用
class Animal2 {
  static isAnimal(a) {
    return a instanceof Animal2;
  }
}

let dog = new Animal2(); // 建立一個 Animal2 的實例
Animal2.isAnimal(dog); // true
dog.isAnimal(dog); // Error: dog.isAnimal is not a function

// TypeScript 類別 class
// 實例屬性：TypeScript  可以省略 this 直接定義屬性
class Animal3 {
  name = "Dog";

  constructor() {
    // ...
  }
}

let a2 = new Animal3();
console.log(a2.name); // Dog

// 靜態屬性：TypeScript  可以直接在類別中定義 static 屬性
class Animal4 {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal4.num); // 42

// public / private / protected 修飾符
// public (預設)：TypeScript 預設所有屬性和方法都是 public，可以顯式使用 public 修飾符
class Animal5 {
  public name: string; // name: string

  // constructor(name: string)
  public constructor(name: string) {
    this.name = name;
  }
}

let a3 = new Animal5("Cat");
console.log(a3.name); // Cat
a3.name = "Dog"; // 可以修改 public 屬性
console.log(a3.name); // Dog

// private : 私有屬性和方法，僅能在類別內部存取
class Animal6 {
  private name: string; // private 修飾符

  constructor(name: string) {
    this.name = name;
  }
}

let a4 = new Animal6("Jack");
console.log(a4.name); // Jack
a4.name = "Tom";

// 使用 private 修飾符的屬性和方法，無法在子類別中存取
class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
}

// protected : 保護屬性和方法，僅能在類別和子類別內部存取
class Animal7 {
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }
}

class Cat1 extends Animal7 {
  constructor(name: string) {
    super(name);
    console.log(this.name); // 可以在子類別中存取
  }
}

const c = new Cat1("Tom"); // 建立一個 Cat1 的實例
console.log(c.name); // 無法在類別外部存取

// readonly 修飾符：只讀屬性，無法修改
class Animal8 {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const a5 = new Animal8("Cat");
console.log(a5.name); // Cat
a5.name = "Dog";

// abstract：abstract 類別是一個抽象類別，無法直接實例化，abstract 方法必須被子類別實現
abstract class Animal9 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract sayHi(): string;
}

const a6 = new Animal9("Cat"); // 錯誤：無法直接實例化抽象類別

class Lion extends Animal9 {
  constructor(name: string) {
    super(name);
  }
  // 錯誤：abstract 方法必須被子類別實現
}

// 正確的實現
class Dog extends Animal9 {
  constructor(name: string) {
    super(name);
  }

  sayHi(): string {
    return `Woof, I'm ${this.name}`; // 呼叫父類別的方法
  }
}

const d = new Dog("Tom");
console.log(d.sayHi()); // Woof, I'm Tom
