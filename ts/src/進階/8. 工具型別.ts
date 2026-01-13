/**
 * 8. 工具型別 (Utility Types)
 *
 * TypeScript 提供了一些內建的工具型別，用來方便地操作型別。
 */

/**
 * ------------------------------------------------------------------
 * 1. 篩選與變形 (操作 Key)
 *
 * 這三個是用來改變「物件形狀」最常用的工具。
 *
 * ┌──────────────┬────────────────────┬────────────────────────────────────────────────┐
 * │ 工具型別      │ 口訣               │ 用途                                           │
 * ├──────────────┼────────────────────┼────────────────────────────────────────────────┤
 * │ Pick<T, K>   │ 弱水三千，只取一瓢 │ 從大物件中「挑選」出幾個你要的屬性。           │
 * │ Omit<T, K>   │ 去蕪存菁           │ 從大物件中「剔除」掉幾個你不要的屬性。         │
 * │ Record<K, T> │ 萬能置物櫃         │ 定義一個 Key-Value 的對應表 (Map/Dictionary)。 │
 * └──────────────┴────────────────────┴────────────────────────────────────────────────┘
 */

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}

// 1. Pick: 只以此建立預覽資訊 (只要 id 和 name)
type UserPreview = Pick<User, "id" | "name">;
// 結果: { id: number; name: string; }

// 2. Omit: 建立表單輸入資料 (不要 id 和 isAdmin，因為那些是系統生成的)
type UserInput = Omit<User, "id" | "isAdmin">;
// 結果: { name: string; email: string; age: number; }

// 3. Record: 建立一個 ID 對照表，Key 是 ID (字串)，Value 是 User 物件
const userMap: Record<string, User> = {
  u001: {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 25,
    isAdmin: false,
  },
  u002: {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 30,
    isAdmin: true,
  },
};

/**
 * ------------------------------------------------------------------
 * 2. 屬性修飾 (操作 ? 與 readonly)
 *
 * 這三個是用來控制屬性「是否必填」或「是否可寫」。
 *
 * ┌─────────────┬────────────────┬───────────────────────────────────────────────────────────────────┐
 * │ 工具型別    │ 口訣           │ 用途                                                              │
 * ├─────────────┼────────────────┼───────────────────────────────────────────────────────────────────┤
 * │ Partial<T>  │ 全部變問號 (?) │ 將所有屬性變為「可選的」(Optional)。常用於 Patch API 或搜尋條件。 │
 * │ Required<T> │ 全部拔掉問號   │ 將所有屬性變為「必填的」。常用於補全預設設定 (Config)。           │
 * │ Readonly<T> │ 只能看，不能改 │ 將所有屬性變為「唯讀」。常用於保護 Redux State 或常數資料。       │
 * └─────────────┴────────────────┴───────────────────────────────────────────────────────────────────┘
 */

interface Config {
  theme?: string; //原本是選填
  timeout?: number; //原本是選填
}

// 1. Partial: 更新資料時，我可能只改 theme，不改 timeout
function updateConfig(newConfig: Partial<Config>) {
  console.log("Updating config:", newConfig);
}

// 2. Required: 程式內部，我確保合併預設值後，每個屬性一定都有值
const finalConfig: Required<Config> = {
  theme: "dark",
  timeout: 5000,
};

// 3. Readonly: 防止不小心改到資料
const safeConfig: Readonly<Config> = { theme: "light" };
// safeConfig.theme = "dark"; // ❌ Error: 唯讀屬性不可修改

/**
 * ------------------------------------------------------------------
 * 3. 推斷與擷取 (偷懶專用)
 *
 * 當你不想手寫型別，想直接從現有的程式碼「反推」出來時使用。
 *
 * ┌───────────────┬────────────────┬────────────────────────────────────────────────────┐
 * │ 工具型別      │ 口訣           │ 用途                                               │
 * ├───────────────┼────────────────┼────────────────────────────────────────────────────┤
 * │ ReturnType<T> │ 問函式回傳什麼 │ 取得函式回傳值的型別。常用於第三方套件沒給介面時。 │
 * │ Parameters<T> │ 問函式接收什麼 │ 取得函式參數的型別 (回傳一個 Tuple 陣列)。         │
 * └───────────────┴────────────────┴────────────────────────────────────────────────────┘
 */

// 假設這是一個第三方套件的函式，我不知道它回傳的物件長怎樣
function getSystemInfo() {
  return {
    os: "Linux",
    version: "1.0.0",
    uptime: 12345,
  };
}

// 1. ReturnType: 自動產出 { os: string; version: string; uptime: number; }
type SystemInfo = ReturnType<typeof getSystemInfo>;

// 2. Parameters: 假設有個函式 (id: string, debug: boolean) => void
function myFunction(id: string, debug: boolean) {
  console.log(id, debug);
}

type Params = Parameters<typeof myFunction>;
// 結果: [string, boolean]
