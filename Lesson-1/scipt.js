"strict mode";
// 1.1 Javascript nima va qanday ishlaydi?
// 1.2 Runtime, interpreter, ishlash prinsiplari
// 1.3 var, let, const — farqlari va ma'lumot turlari
// 1.4 Type conversion (implicit va explicit)

//  #1.1 Javascript nima va qanday ishlaydi?
/**
 * # Javascript nima?
 * JavaScript — bu interpreted, high-level, single-threaded, dynamically typed dasturlash tili bo‘lib,
 * asosan veb-sahifalarga interaktivlik qo‘shish uchun yaratilgan.
 *
 * Hozirgi kunda Javascript har joyda ishklaydi:
 *  - Frontend: React, Vue, Angular, Svelte, etc.
 *  - Backend: Node.js, Express, Nest.js
 *  - Mobile: React Native
 *  - Desctop: Electron.js, etc.
 *  - Hattoki AI va ML loyihalarida ham (TensorFlow.js, Brain.js)
 *
 * # Javascript qanday ishlaydi?
 *  Bu joy muhim: "Javascript qanday ishlaydi?" deganda biz uning ichki mexanizimi - engine va runtime haqida gapiramiz.
 *
 * #1 JS Engine (masalan Chrome'da V8)
 *  - Sen yozgan kodni oladi
 *  - Parsing => Compilation => Execution bosqichlarida bajaradi
 *  - Parsing => kodni o'qib, syntax errorlarini topadi
 *  - Compilation => kodni mashina tiliga o'giradi
 *  - Execution => kodni bajaradi
 *  - Yani u kodni "interpreter" sifatida o'qib bajaradi.
 * #2 JS Runtime (masalan Node.js)
 *  - JS Engine bilan birgalikda ishlaydi
 *  - Environment (global object, console, etc.)
 *  - Event Loop (async/await, callbacks, promises)
 *  - API (fetch, XMLHttpRequest, etc.)
 *
 * #3 Call Stack
 *  - Bu joyda barcha funksiyalar navbat bilan bajariladi.
 *  - Agar funksiya ichida funksiya bo'lsa, u holda avval tepada joylashgan funksiya bajariladi.
 *  - Javascript "single-tread" dasturlash tili bo'lgani uchun, barcha funksiyalar navbat bilan bajariladi.
 *  - Yani bir vaqtda faqat bitta funksiya bajariladi.
 *  - Single Tread ga miso:
 *      console.log("1");
 *      setTimeout(() => console.log("2"), 0);
 *      console.log("3");
 *
 * Output: 1 3 2
 *
 * #4 Web APIs va Event Loop
 *  - Asinxron kodlar (setTimeout, fetch, etc.) Web APIs orqali tashqarida bajariladi.
 *  - Keyin Event Loop ularni stack bo'yicha chaqiradi.
 *
 * ##JavaScript — bitta ipda ishlaydigan, lekin Web API va Event Loop yordamida ko‘p ishni parallel bajara oladigan til.
 */

// TODO: 1.2 Runtime, interpreter, ishlash prinsiplari
/**
 * #1.2 Runtime, interpreter, ishlash prinsiplari
 * - Runtime - bu kodingizni bajarish uchun zarur bo'lgan barcha komponentlar va API'larning to'plami.
 * -- Runtime tarkibi:
 * --- JavaScript Engine (V8, SpiderMonkey, JavaScriptCore)
 * --- Web APIs (brauzerda) yoki C++ APIs (Node.js'da)
 * --- Callback Queue (Task Queue)
 * --- Event Loop
 * ┌─────────────────────────────────┐
 * │         Call Stack              │
 * │  (JavaScript Engine ichida)     │
 * └─────────────────────────────────┘
 *              ↕
 * ┌─────────────────────────────────┐
 * │         Event Loop              │
 * └─────────────────────────────────┘
 *              ↕
 * ┌─────────────────────────────────┐
 * │      Callback Queue             │
 * └─────────────────────────────────┘
 *              ↑
 * ┌─────────────────────────────────┐
 * │   Web APIs / C++ APIs           │
 * │  (setTimeout, fetch, fs, etc)   │
 * └─────────────────────────────────┘
 *
 * # JavaScript Interpreter
 * - JavaScript aslida JIT (Just-In-Time) compiled til hisoblanadi, ya'ni interpret va kompilatsiya qilinadi.
 * - Ishlash jarayoni:
 * -- 1. Parsing - kod o'qiladi va AST (Abstract Syntax Tree) yaratiladi
 * -- 2. Interpretation - AST bytecode'ga aylantiriladi
 * -- 3. Compilation - "hot" kod (tez-tez ishlatiladigan) optimallashtirilgan machine code'ga aylanadi
 * -- 4. Execution - kod bajariladi
 */

// function heavyTask() {
//   // Bu kod optimallashtiriladi (TurboFan)
//   let sum = 0;
//   for (let i = 0; i < 1000000; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // Birinchi chaqiriq - Ignition
// console.time("first");
// heavyTask();
// console.timeEnd("first");

// // Ko'p marta chaqirsak - TurboFan optimallaydi
// for (let i = 0; i < 10; i++) {
//   heavyTask();
// }

// // Oxirgi chaqiriq - optimallashtirilgan
// console.time("optimized");
// heavyTask();
// console.timeEnd("optimized");

// TODO: 1.3 var, let, const — farqlari va ma'lumot turlari
/**
 * 1.1 var => bu eski usul, global scope da yaratiladi, qayta elon qilish mumkin. Va "var" dan foydalanish tavsiya etilmaydi.
 * 1.2 let => bu yangi usul, block scope da yaratiladi, qayta elon qilish mumkin. Va "let" dan foydalanish tavsiya etiladi.
 * 1.3 const => bu yangi usul, block scope da yaratiladi, qayta elon qilish mumkin. Va "const" dan foydalanish tavsiya etiladi.
 *
 * # Farqlar:
 *  - var global scope da yaratiladi, let va const block scope da yaratiladi.
 *  - var qayta elon qilish mumkin, let va const qayta elon qilish mumkin emas.
 *  - var global scope da yaratiladi, let va const block scope da yaratiladi.
 */

// ================================ var ================================
// 1.1 var
// // Function scope
// function testVar() {
//   if (true) {
//     var a = 10;
//   }
//   console.log(a); // 10 - if blokidan tashqarida ham mavjud
// }
// testVar();

// // Hoisting
// console.log(a); // undefined (xato emas!, chunki var declaration hoisting qilinadi)
// var a = 12;
// console.log(a); // 12

// // Yuqoridagi kod aslida shunday ishlaydi:
// var b;
// console.log(b); // undefined
// b = 4;
// console.log(b); // 4

// // Qayta elon qilish mumkin
// var nameA = "Ali";
// var nameA = "Vali";
// console.log(nameA); // Vali

// // Global obyektga qoshiladi
// var globalVar = "Global";
// console.log(window.globalVar); // Global

// ================================ let ================================
// 1.2 let (Zamonaviy, block scope)
// // Block scope
// function testLet() {
//   if (true) {
//     let x = 10;
//     console.log(x); // 10
//   }
//   console.log(x); // ReferenceError: x is not defined
// }

// // Temporal Dead Zone
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 5;

// // Qayta e'lon qilish mumkin emas
// let name = "Ali";
// let name = "Vali"; // SyntaxError: Identifier 'name' has already been declared

// // Lekin qayta qiymat berish mumkin
// let age = 20;
// age = 25; // OK
// console.log(age); // 25

// // Loop'da foydalanish
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Natija: 0, 1, 2 (har bir iteratsiya uchun yangi 'i')

// // var bilan taqqoslash
// for (var j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 100);
// }
// // Natija: 3, 3, 3 (bir xil 'j' ishlatiladi)

// ================================ const ================================
// 1.3 const (Zamonaviy, block scope)
// // Block scope
// function testConst() {
//   if (true) {
//     const c = 30;
//     console.log(c); // 30
//   }
//   console.log(c); // ReferenceError: c is not defined
// }
// testConst();

// // Hoisting
// console.log(c); // ReferenceError: c is not defined
// const c = 40;
// console.log(c); // 40

// // Qayta elon qilish mumkin
// const nameC = "Ali";
// const nameC = "Vali";
// console.log(nameC); // Vali

// Qiymati o'zgarmaydi
// const PI = 3.14;
// PI = 3.15; // TypeError: Assignment to constant variable.

// // Elon qilishda qiymat berish mujbur
// const a;
// const b = 10;

// Obyektlar bilan ishlash

// const person = {
//   age: 20,
//   name: "FarruXbek",
//   skills: ["HTML", "CSS", "JavaScript"],
//   isMarried: false,
// };

// console.log(person);
// person.age = 21; // OK boladi bu
// console.log(person);

// person.city = "Tashkent"; // OK boladi bu
// console.log(person);

// person.skills.push("Nest.js");
// console.log(person);

// person = {}; // TypeError - yangi obyekt biriktirib bo'lmaydi
// console.log(person);

// Array bilan ishlash

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// numbers.push(6); // OK
// console.log(numbers);

// numbers[0] = 20; // OK
// console.log(numbers);

// numbers = [5, 6, 7, 8]; // TypeError - yangi array biriktirib bo'lmaydi
// console.log(numbers);

// // Agar to'liq o'zgarmas obyekt kerak bolsa
// const frozenPerson = Object.freeze({
//   age: 20,
//   name: "FarruXbek",
//   skills: ["HTML", "CSS", "JavaScript"],
//   isMarried: false,
// });

// console.log(frozenPerson);

// frozenPerson.age = 21; // Ishlamaydi (strict mode'da xato)
// console.log(frozenPerson);

// frozenPerson.city = "Tashkent"; // Ishlamaydi (strict mode'da xato)
// console.log(frozenPerson);

// frozenPerson.skills.push("Nest.js"); // OK boladi bu o'zgarmas obyektning ichidagi array qiymatini o'zgartirish mumkin
// console.log(frozenPerson);

// ================================ Qay birni ishlatish kerak? ================================
// ✅ YAXShI AMALIYOT

// 1. Odatda const ishlatish (70-80% holatlarda)
// const MAX_SIZE = 100;
// const config = { timeout: 3000 };
// const getUserData = (id) => {
//   return { id, name: "FarruXbek", email: "farruxbek@gmail.com" };
// };
// getUserData(1);

// 2. O'zgaradigan qiymatlar uchun let
// let counter = 0;
// let userName = "";
// for (let i = 0; i < 10; i++) {
//   counter++;
// }
// console.log(counter);
// 3. var ishlatmaslik (faqat legacy kod uchun)
// ❌ YOMON
// var oldStyle = "avoid this";
// console.log(oldStyle);

// ================================ Malumot turlari ================================
/**
 * - Primitive tur:
 *  - Number
 *  - String
 *  - Boolean
 *  - Null
 *  - Undefined
 *  - Symbol
 *  - BigInt
 *
 * - Murakkab tur:
 *  - Object
 */

// ================================ Number ================================
// 1. Number
// Integer va Float bir xil turga tegishli
// Integer - butun sonlar
// Float - o'nli sonlar

// const int = 42;
// const float = 3.14;
// console.log(typeof int);
// console.log(typeof float);

// Maxsus qiymatlar
// const infinity = Infinity;
// const negativeInfinity = -Infinity;
// const nan = NaN;

// console.log(typeof infinity);
// console.log(typeof negativeInfinity);
// console.log(typeof nan);

// console.log(1 / 0); // infinity
// console.log("text" * 5); // NaN
// console.log(typeof NaN); // "number" (g'alati, lekin notog'ri)

// Xafli oraliq -(2^53 - 1) dan (2^53 - 1) gacha
// const max = Number.MAX_SAFE_INTEGER; // 9007199254740991
// const min = Number.MIN_SAFE_INTEGER; // -9007199254740991
// console.log(typeof max);
// console.log(typeof min);

// Amallar
// console.log(10 + 5); // 15
// console.log(10 - 5); // 5
// console.log(10 * 5); // 50
// console.log(10 / 5); // 2
// console.log(10 % 3); // 1 (qoldiq)
// console.log(2 ** 3); // 8 (daraja)

// ================================ BigInt ================================
// Katta sonlar
// const bigint = 1234567890123456789012345678901234567890n;
// console.log(typeof bigint)

// const anotherBigInt = BigInt("909090909090900008754");
// console.log(typeof anotherBigInt);

// console.log(bigint + 10n); // Ok
// console.log(anotherBigInt + 10); // TypeError - Cannot mix BigInt and other types, use explicit conversions

// Foydalanish
// const huge = 2n ** 10n;
// console.log(typeof huge); // BigInt => 1024n

// ================================ String ================================

// // 3 xil yozish usuli
// const single = 'Single quotes'; // <= 'Single quotes'
// const double = "Double quotes"; // <= "Double quotes"
// const backtick = `Backticks (template literals)`; // <= `Backtick`

// Template literals - eng kuchlisi
// const name = "FarruXbek";
// const age = 21;
// const message = `Salom mening ismim ${name}, yoshim ${age} da.`;
// console.log(message);

// Ko'p qatorli matn
// const multiline = `
//     Bu birinchi qator
//     Bu ikkinchi qator
//     Bu uchinchi qator
// `;
// console.log(multiline)

// const text = "JavaScript";

// console.log(text.length); // 10
// console.log(text.toLocaleLowerCase()); // javascript
// console.log(text.toUpperCase()); // JAVASCRIPT
// console.log(text.slice(0, 4)); // Java
// console.log(text.includes("Script")); // true
// console.log(text.split("")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

// Immutable (o'zgarmas)
// let str = "Hello";
// str[0] = "h"; // Ishlamaydi
// console.log(str); // "Hello"
// str = str.toLowerCase(); // Yangi string yaratish kerak
// console.log(str); // "hello"

// ================================ Boolean ================================
const isActive = true;
const isDeleted = false;

// Truthy va Falsy qiymatlar
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: qolgan barchasi truthy

// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

// console.log(Boolean(1));
// console.log(Boolean(" "));
// console.log(Boolean("hello"));
// console.log(Boolean([]));
// console.log(Boolean({}));

// // Amaliyotda
// if ("") {
//   console.log("Ishlamaydi chunki falsy. Sabab length 0 va bu false");
// }

// if (" ") {
//   console.log(
//     "Ishlaydi chunki truthy. Sabab ' ' buni length i 1 boladi va 1 true"
//   );
// }

// ================================ undefined ================================
// Elon qilingan lekin qiymat berilmagan qiymat
// let x;
// console.log(x); // undefined
// console.log(typeof x); // undefined

// funksiya return qilmasa
// function test() {
//   // return yoq
// }

// console.log(test());

// Obyektda mavjud bolmgan property
// const obj = { name: "FarruXbek" };
// console.log(obj.age); // undefined

// ================================ null ================================
// Ataylab yozilgan bosh qiymat
// let data = null;
// console.log(data); // null
// console.log(typeof data); // object (JavaScriptning xatosi)

// undefined va null farqi
// let a; // undefined =>  Elon qilingan lekin qiymat berilmagan o'zgaruvchi
// let b = null; // null => Elon qilingan va ataylab bosh qiymat berilgan o'zgaruvchi

// console.log(a == b); // true => qiymat tengligida
// console.log(a === b); // false => turlar farqli ekanligi

// ================================ Symbol ================================
// Har doim noyob
// const sym1 = Symbol("name");
// const sym2 = Symbol("name");
// console.log(sym1 == sym2); // qiymat teng emas garchi bir xil bolsa ham ikkisi har xil
// console.log(sym1);
// console.log(sym2);

// Obyektda yashirin property yaratish
// const obj = {
//   name: "Farruxbek",
//   age: 21,
//   [Symbol("isMarried")]: false,
// };

// console.log(Object.keys(obj)); // [ 'name', 'age' ] isMarried korinmaydi

// Global Symbol registry
// const globalSym1 = Symbol.for("app.id");
// const globalSym2 = Symbol.for("app.id");
// console.log(globalSym1 === globalSym2); // true
// console.log(globalSym1); // Symbol(app.id)

// ================================ Object (Murakkab tur) ================================
// Obyekt - key-value juftliklari
// const person = {
//   name: "FarruXbek",
//   age: 21,
//   city: "Namangan",
//   greet: function () {
//     console.log("Salom");
//   },
// };

// console.log(person.name);
// console.log(person["age"]);
// person.greet();

// Array - maxsus obyekt
// const numbers = [1, 2, 3, 4, 5];
// console.log(typeof numbers); // "object"
// console.log(Array.isArray(numbers)); // true

// Function - maxsus obyekt
// function add(a, b) {
//   return a + b;
// }
// console.log(typeof add); // "function"
// add.customProperty = "test"; // Xususiyat qo'shish mumkin!

// Date - maxsus obyekt
// const now = new Date();
// console.log(now); // Hozirgi sana va vaqt
// console.log(typeof now); // object

// RegExp - maxsus obyekt
// const pattern = /\d+/g;
// console.log(pattern.test("123")); // true

// ============================================================
// // typeof operatori
// console.log(typeof 42); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (xato!)
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"

// // Aniqroq tekshirish
// console.log(Array.isArray([])); // true
// console.log(null === null); // true

// // Type Conversion
// // String'ga
// const num = 123;
// console.log(String(num)); // "123"
// console.log(num.toString()); // "123"
// console.log(num + ""); // "123"

// // Number'ga
// const str = "456";
// console.log(Number(str)); // 456
// console.log(+str); // 456
// console.log(parseInt(str)); // 456
// console.log(parseFloat("3.14")); // 3.14

// // Boolean'ga
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(!!"hello"); // true

// ===================== Best Practices =======================
// // 1. Doimo const ishlatishga harakat qilish kerak
// const CONFIG = { apiUrl: "https://api.example.com" };

// // 2. O'zgaradigan qiymatlar uchun let
// let counter = 0;

// // 3. var ishlatmaslik
// // var oldWay = "no"; // ❌

// // 4. Descriptive nomlar
// const userAge = 25; // ✅
// const a = 25; // ❌

// // 5. Strict equality (===) ishlatish
// console.log(5 === "5"); // false ✅
// console.log(5 == "5"); // true ❌

// // 6. Typeof tekshirish
// if (typeof data !== "undefined") {
//   // ishlatish
// }
