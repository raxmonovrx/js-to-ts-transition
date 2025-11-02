# 🎯 JavaScript Takrorlash Rejasi - 15 Kunlik

**Maqsad:** JavaScript asoslarini mustahkamlab, TypeScriptga tayyor bo'lish  
**Muddat:** 15 kun  
**Usul:** Kunlik nazariya + praktik mashqlar + takrorlash

---

## 📅 KUN-1: JavaScript Asoslari va Sintaksis

**Mavzu:** JavaScript nima, runtimes, interpreter, V8 engine

### 📚 Nazariya:

- JavaScript nima va qanday ishlaydi?
- Runtime, interpreter, V8 engine ishlash prinsiplari
- var, let, const — farqlari va ma'lumot turlari
- Type conversion (implicit va explicit)

### ✅ Kunlik Mashq:

```javascript
// 1. var, let, const bilan 10 ta o'zgaruvchi yarating (turli ma'lumot turlari)
// 2. Implicit va explicit conversion misollar yozing
// 3. 5 ta o'zgaruvchining tipini console.log() bilan tekshiring
// 4. Ma'lumot turlarini JSON.stringify() bilan ko'ring
```

### 🎯 Asosiy Maqsad:

Ma'lumot turlari va o'zgaruvchilarni ichki-ichki tushunish

---

## 📅 KUN-2: Operators va Conditionals

**Mavzu:** Operators va shartli operatorlar

### 📚 Nazariya:

- Operators (arifmetik, mantiqiy, taqqoslash, bitwise)
- Conditionals (if, else, else if, switch-case)
- Ternary operator (? :)
- Logical operators (&&, ||, !)

### ✅ Kunlik Mashq:

```javascript
// 1. Har bir operator turiga 3 ta misol yozing
// 2. if-else yordamida 5 ta shart yozing (oylik daromad, yosh, bal)
// 3. Switch-case bilan hafta kunlarini aniqlash
// 4. Nested conditionals bilan murakkab shart yozing
// 5. Ternary operator bilan qisqa shart yozing
```

### 🎯 Asosiy Maqsad:

Turli operatorlar va shartlarni professional tarzda ishlatish

---

## 📅 KUN-3: Loops (Sikllar)

**Mavzu:** Barcha loop turlari va maqsadli qo'llash

### 📚 Nazariya:

- for loop
- while va do...while
- for...of va for...in
- break va continue
- Nested loops

### ✅ Kunlik Mashq:

```javascript
// 1. for loop bilan 1-100 sonlar yig'indisini hisoblang
// 2. while loop bilan faktorialni hisoblang
// 3. for...of bilan array elementlarini chiqaring
// 4. for...in bilan object propertylarini chiqaring
// 5. Nested loops bilan multiplication table yarating
// 6. break va continue bilan misollar yozing
```

### 🎯 Asosiy Maqsad:

To'g'ri loop tanlash va samarali ishlatish

---

## 📅 KUN-4: Functions (Funksiyalar)

**Mavzu:** Funksiya deklaratsiya, ifodalar va arrow functions

### 📚 Nazariya:

- Function declarations
- Function expressions
- Arrow functions (ES6)
- Parameters va arguments
- Return statement

### ✅ Kunlik Mashq:

```javascript
// 1. Function declaration bilan 5 ta funksiya yozing
// 2. Function expression bilan 3 ta funksiya yozing
// 3. Arrow function bilan 3 ta funksiya yozing
// 4. Har xil parametr qabul qiluvchi funksiyalar
// 5. Recursive function yozing (fibonacci/faktorial)
// 6. Nested funksiyalar misolida yozing
```

### 🎯 Asosiy Maqsad:

Funksiya turlari orasidagi farqni tushunish va to'g'ri qo'llash

---

## 📅 KUN-5: Scope va Hoisting

**Mavzu:** Ko'rinish va ko'tarilish konseptlari

### 📚 Nazariya:

- Global scope
- Function scope
- Block scope (let, const)
- Hoisting (var vs let/const)
- Lexical scope

### ✅ Kunlik Mashq:

```javascript
// 1. Global, function va block scope misollari
// 2. Hoisting bilan bog'liq muammolarni yozing
// 3. let, const vs var taqqoslash kodlari
// 4. Closure misollariga tayyorlov (scope tushunish)
// 5. Lexical scope bilan ishlash
```

### 🎯 Asosiy Maqsad:

Scope qoidalarini mustahkam tushunish — OOP va closures asosi

---

## 📅 KUN-6: Arrays va Array Metodlari

**Mavzu:** Massivlar va professional metodlar

### 📚 Nazariya:

- Array yaratish va elementlarga kirish
- map, filter, reduce
- find, findIndex, some, every
- sort, splice, slice
- forEach vs map farqi

### ✅ Kunlik Mashq:

```javascript
// Ma'lum array (users, products, numbers...)
const products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Book", price: 20, category: "education" },
  // ... 10 ta element yarating
];

// 1. map — har bir narxni 10% ga oshiring
// 2. filter — electronics bo'lganlarni toping
// 3. reduce — umumiy summani hisoblang
// 4. find — 500 dan yuqori mahsulot toping
// 5. some/every — shartlarni tekshiring
// 6. sort — narx bo'yicha tartiblang
// 7. slice/splice — kesib olib, qo'shing
```

### 🎯 Asosiy Maqsad:

Array metodlarini professional darajada qo'llash

---

## 📅 KUN-7: Objects va Destructuring

**Mavzu:** Ob'ektlar va destrukturizatsiya

### 📚 Nazariya:

- Object yaratish (literal, constructor)
- Propertylar va metodlar
- Object.keys, Object.values, Object.entries
- Destructuring (array va object)
- Spread operator (...)
- Nested destructuring

### ✅ Kunlik Mashq:

```javascript
// 1. Object yarating — user profili (name, age, email, skills...)
// 2. Object.keys/values/entries bilan ishlash
// 3. Object destrukturizatsiya yozing
// 4. Array destrukturizatsiya yozing
// 5. Spread operator bilan object ni shallow copy qiling
// 6. Nested object destructuring
// 7. Rest operator bilan qolganlarini yig'ish
```

### 🎯 Asosiy Maqsad:

Destructuring bilan kodni qisqa va o'qiladigan qilish

---

## 📅 KUN-8: Spread, Rest, Template Literals

**Mavzu:** Zamonaviy sintaksis xususiyatlari

### 📚 Nazariya:

- Spread operator (...)
- Rest operator (...)
- Template literals (backticks, ${})
- Default parameters
- Named parameters (destructuring orqali)

### ✅ Kunlik Mashq:

```javascript
// 1. Spread bilan array/object birlashtirish
// 2. Rest bilan functionda cheksiz argumentlar qabul qilish
// 3. Template literals bilan formatlash
// 4. Default parameters bilan funksiyalar
// 5. Nested spread va rest kombinatsiyalari
// 6. Object.assign() vs spread farqi
```

### 🎯 Asosiy Maqsad:

Modern JavaScript sintaksisini avtomatlashtirish

---

## 📅 KUN-9: Higher-Order Functions va Closures

**Mavzu:** Yuqori darajadagi funktsional dasturlash tushunchalari

### 📚 Nazariya:

- Higher-order functions (callback, function returning function)
- Closures — qanday ishlaydi
- Closure misollar
- Private variables (closure orqali)
- IIFE (Immediately Invoked Function Expression)

### ✅ Kunlik Mashq:

```javascript
// 1. Callback funksiya bilan misollar
// 2. Function returning function misollari
// 3. Closure yordamida counter yarating
// 4. Closure bilan private variables yarating
// 5. IIFE bilan scope tashkil etish
// 6. Array metodlar bilan closure kombinatsiyasi
```

### 🎯 Asosiy Maqsad:

Closures va higher-order functions asosini mustahkamlash

---

## 📅 KUN-10: this, Call, Apply, Bind

**Mavzu:** `this` konteksti va funksiyalarni bog'lash

### 📚 Nazariya:

- `this` nima?
- `this` 4 xil kontekstda (global, object, method, event)
- Explicit binding: call, apply, bind
- Arrow functions va `this`
- Lexical `this` vs dynamic `this`

### ✅ Kunlik Mashq:

```javascript
// 1. 4 xil kontekstda this yozing
// 2. call, apply bilan misollar
// 3. bind bilan context bound qiling
// 4. Arrow functionda this farqi
// 5. Arrow function muammoli holat
// 6. Object method bilan this ishlash
```

### 🎯 Asosiy Maqsad:

`this` kontekstini qo'llarda yuritish

---

## 📅 KUN-11: Asynchronous JavaScript (Promises, async/await)

**Mavzu:** Asinxron dasturlash asosi

### 📚 Nazariya:

- Callback muammolari
- Promises — nima va qanday ishlaydi
- Promise states (pending, fulfilled, rejected)
- .then(), .catch(), .finally()
- async/await sintaksis
- Try-catch bilan async/await

### ✅ Kunlik Mashq:

```javascript
// 1. 3 ta mock API yarating (setTimeout bilan delay)
// 2. fetchUser(), fetchPosts(), fetchComments()

// 3. Promises bilan ketma-ket chaqirish
// 4. async/await bilan parallel chaqirish
// 5. Promise.all() bilan barcha so'rovlarni bajarish
// 6. Promise.race() misollari
// 7. Error handling — try-catch bilan
// 8. Custom error throwing
```

### 🎯 Asosiy Maqsad:

Asinxron kodlarni professional darajada yozish

---

## 📅 KUN-12: DOM Manipulation va Events

**Mavzu:** HTML bilan ishlash va event handling

### 📚 Nazariya:

- DOM nima?
- querySelector, querySelectorAll, getElementById
- Element yaratish va DOM ga qo'shish
- Style va attribute o'zgartirish
- classList (add, remove, toggle)
- addEventListener
- Event bubbling va delegation
- preventDefault() va stopPropagation()

### ✅ Kunlik Mashq:

```javascript
// 1. HTML element tanlab olish (10 ta)
// 2. Yangi element yaratish va qo'shish
// 3. InnerHTML va textContent farqi
// 4. Event listener qo'shish (click, input, submit)
// 5. Event delegation bilan dynamic list qo'shish
// 6. Form validation (input event)
// 7. Modal window yarating
// 8. Todo list (qo'shish, o'chirish, toggle)
```

### 🎯 Asosiy Maqsad:

Real loyihalar uchun DOM va Events bilan ishlash

---

## 📅 KUN-13: OOP va Classes

**Mavzu:** Ob'ektga yo'naltirilgan dasturlash

### 📚 Nazariya:

- Constructor functions
- Classes (ES6)
- Constructor vs Class farqi
- Inheritance — extends va super
- Prototypes va prototype chain
- Encapsulation, polymorphism
- Static methods va properties

### ✅ Kunlik Mashq:

```javascript
// 1. Constructor function bilan User class yarating
// 2. Class sintaksisi bilan Animal class
// 3. Inheritance — Dog extends Animal
// 4. Protected/Private fields (#)
// 5. Static methods — User.getCount()
// 6. Getter va Setter
// 7. Prototype chain tekshirish
// 8. Method overriding
```

### 🎯 Asosiy Maqsad:

OOP konsepsiyalarini yaxshi tushunish — TypeScript asosi

---

## 📅 KUN-14: ES6+ va Modern JavaScript

**Mavzu:** Eng so'nggi JavaScript xususiyatlari

### 📚 Nazariya:

- Optional chaining (?.)
- Nullish coalescing (??)
- Logical assignment (&&=, ||=, ??=)
- Module system (import/export)
- LocalStorage va SessionStorage
- JSON.stringify() va JSON.parse()
- Fetch API (real API bilan)

### ✅ Kunlik Mashq:

```javascript
// 1. Optional chaining bilan nested objectlar
// 2. Nullish coalescing bilan default values
// 3. Module yarating — export/import
// 4. LocalStorage bilan CRUD operatsiyalar
// 5. Fetch API bilan real API so'rov yuborish (JSONPlaceholder)
// 6. Async/await bilan ma'lumotlarni DOM ga chiqarish
// 7. Error handling bilan loading states
// 8. Custom hook pattern (functions qaytaruvchi)
```

### 🎯 Asosiy Maqsad:

Professional dastur yaratish uchun barcha qurollarni birlashtirish

---

## 📅 KUN-15: Takrorlash va Final Project

**Mavzu:** Barcha bilimlarni birlashtirib real loyiha

### 📚 Takrorlash:

- Barcha 14 kundagi mavzularni tezkor takrorlash
- Muammolarni aniqlash va hal qilish
- Clean code va best practices

### ✅ Final Project:

**Quyidagi loyihalardan birini yarating:**

#### Variant 1: Task Manager (Todo App)

```javascript
// Kerakli funksiyalar:
// - Task qo'shish (DOM)
// - Task o'chirish
// - Task toggle (checked/unchecked)
// - LocalStorage ga saqlash
// - Filter (all, active, completed)
// - Edit task
// - Clear completed
```

#### Variant 2: Weather App

```javascript
// Kerakli funksiyalar:
// - Fetch API bilan ob-havo ma'lumotlari
// - Async/await
// - Error handling
// - Loading states
// - DOM manipulation
// - Responsive design
```

#### Variant 3: Quiz App

```javascript
// Kerakli funksiyalar:
// - Questions array
// - Timer (setInterval)
// - Score calculation
// - Next/Previous navigation
// - Results screen
// - LocalStorage — high score
```

### 🎯 Asosiy Maqsad:

Barcha bilimlarni praktikada qo'llash va TypeScriptga tayyor bo'lish

---

## 🎓 Takrorlash Tartibi (Har Kuni)

**Har kuni 30 daqiqa avvalgi kunning bilimlarini takrorlang:**

### 📝 Takrorlash Metodi:

1. **10 daqiqa** — kecha yozilgan kodlarni qayta o'qing
2. **10 daqiqa** — muammolarni hal qiling (agar bo'lsa)
3. **10 daqiqa** — 1 ta qo'shimcha mashq yozing

### 📚 Haftalik Umumiy Tekst

- **Har yakshanba** — juma va shanbaning mavzularini takrorlash
- **Har yakshanba** — umumiy qaytarish test yozing

---

## 🏆 TypeScriptga O'tishdan Oldin Tekshiruv

**Quyidagi suallarga to'liq javob berishingiz kerak:**

### ✅ Bilim Tekshiruvi:

- [ ] Scope va hoisting nima? Farqlar?
- [ ] Closure nima va qanday ishlaydi?
- [ ] this nima va 4 xil kontekstda qanday ishlaydi?
- [ ] Promises va async/await farqi?
- [ ] OOP — class va inheritance qanday?
- [ ] Array metodlari — map, filter, reduce?
- [ ] DOM manipulation — querySelector va events?
- [ ] LocalStorage vs SessionStorage farqi?
- [ ] Module system — import/export qanday?
- [ ] Destructuring va spread operator?

### ✅ Kodlash Qobiliyati:

- [ ] To'g'ri scope va variable naming?
- [ ] Array metodlarini professional qo'llash?
- [ ] Async/await bilan muammosiz ishlash?
- [ ] DOM bilan interaktiv loyiha yaratish?
- [ ] OOP patternlar bilan kod tuzish?
- [ ] Error handling va debugging?

---

## 📚 Qo'shimcha Resurslar

### Kitoblar:

- "JavaScript: The Definitive Guide"
- "You Don't Know JS" (Kyle Simpson)

### Amaliyot:

- freeCodeCamp JavaScript algorithms
- LeetCode Easy darajadagi muammolar
- Frontend Mentor loyihalar

### Veb Saytlar:

- MDN Web Docs
- JavaScript.info
- TypeScript Handbook (keyingi bosqich)

---

## 🎯 TypeScriptga O'tish Shartlari

**Agar siz:**

1. ✅ Barcha 15 kunni tugalladingiz
2. ✅ Final project ni yakunladingiz
3. ✅ Bilim tekshiruvidan o'tdingiz
4. ✅ Kodlarda kam xatolar chiqmoqda
5. ✅ OOP va functions mustahkam

**U holda TypeScript uchun tayyor ekansiz! 🚀**

---

## 📞 Muhim Eslatmalar

### ⚠️ Ogohlantirishlar:

- **Kechkinda edashmasdan** — har kuni vaqt ajrating
- **Kodlarni yozmasdan ko'rganingiz yeterli emas** — faqat yozish bilan o'rganasiz
- **Muammolarni qo'ldan qo'lda hal qiling** — AI dan so'roq qilishga rush
- **Takrorlashni o'tkazib yubormang** — bilim mustahkam bo'lmasligi mumkin

### ✅ Yondashuv:

- **Har kuni 2-3 soat** ajrating
- **Notebook yarating** — muhim qoidalar uchun
- **Kodlar commit qiling** — Git yordamida progressni kuzating
- **Sukr qiling** — kichik muvaffaqiyatlarni qadrlang

---

## 🎬 Boshlanish

**Bugun KUN-1! JavaScript asoslarini boshlaymiz!**

**Omad! 🍀**
