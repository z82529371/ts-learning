// TypeScript 類別與介面

// implements 實現：class 用 implements，表示「保證照介面的規格做」
interface Alarm {
  alert(): void;
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}

class Car implements Alarm {
  alert() {
    console.log("Car alert");
  }
}

// implements 多個介面：類別可以實現多個介面
interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car1 implements Alarm, Light {
  alert() {
    console.log("Car alert");
  }
  lightOn() {
    console.log("Car light on");
  }
  lightOff() {
    console.log("Car light off");
  }
}

// 介面繼承介面：介面可以擴充另一個介面，規格疊加
interface Alarm {
  alert(): void;
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

// 介面繼承類別：只是「拿類別的型別結構」，不是拿實作
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
