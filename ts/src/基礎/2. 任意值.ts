// TypeScript 任意值 any

// 如果是一個普通型別，在賦值過程中改變型別是不被允許的：
let myFavoriteNumber: string = "seven";
myFavoriteNumber = 7;

// 但是，如果是 any 型別，就允許賦值過程中改變型別：
let myFavoriteNumber2: any = "seven";
myFavoriteNumber2 = 7;

// any 型別的變數可以調用屬性：
let anyThing: any = "Hello";
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 也可以調用方法：
let anyThing2: any = "Tom";
anyThing2.setName("Jerry");
anyThing2.setName("Jerry").sayHello();
anyThing2.myName.setFirstName("Cat");

// 宣告變數如果不指定型別，則會被識別為 any 型別：
let something; //  默認型別為 any
something = "seven";
something = 7;
something = true;

something.setName("Tom");
