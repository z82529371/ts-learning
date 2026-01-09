// TypeScript 元組 Tuple Types

// 元組類型允許表示一個已知元素數量和類型的陣列，各元素的類型不必相同

let tom: [string, number] = ["Tom", 25];

tom[0] = "Tom";
tom[1] = 25;

tom[0].slice(1); // 正確
tom[1].toFixed(2); // 正確

tom = ["Tom"]; // 錯誤，缺少元素

tom.push("male"); // 正確，可以使用 push 方法添加元素
tom.push(true); // 錯誤，類型不匹配
