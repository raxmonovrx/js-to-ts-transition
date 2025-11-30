/**
- for loop
- while va do...while
- for...of va for...in
- break va continue
- Nested loops
 */

// #1 Loop(sikl) nima ozi?
/**
Loop — bu kodni bir necha marta takrorlab bajarish uchun ishlatiladigan mexanizm.

Oddiy misol:
Biz 100 marta salom yozmoqchi bo‘lsang, 100 ta console.log("salom") yozmaymiz.
Bitta loop yozamiz — u 100 marta o‘zi takrorlaydi.

Loop nima uchun kerak?

Hisoblashlar (sum, factorial)

Array elementlarini o‘qish

Object ichidagi ma’lumotlarga kirish

Takrorlanadigan jarayonlarni avtomatlashtirish

API dan kelgan ro‘yxatlar bilan ishlash

Loop — bu dasturchining "takroriy ishlarni avtomatlashtirish" quroli.
 */

// #1.1 for...loop
// Qachon ishlatiladi => Takrorlanish soni oldindan ma’lum bo‘lsa.
// for (boshlanish; shart; o‘zgarish) {
//   // kod
// }

for (let i = 1; i <= 100; i++) {
  console.log(`${i}. Hello World`);
}

// # 1.2 while loop
// Qachon ishlatiladi => Takrorlanish soni oldindan noma’lum bo‘lsa.
// while (shart) {
//   // kod
// }
let a = 1;
while (a <= 20) {
  console.log(`${a}. TS`);
  a++;
}

//1.3 do...while
// Farqi => Bunda kod birinchi marta albatta ishlaydi, keyin shart tekshiriladi.
let s = 1;
do {
  console.log("I Love JS");
  s++;
} while (s <= 2);

// 1.4 for...of => faqat arraylar uchun bu
// Arraylar uchun eng toza va qulay loop.
const fruits = ["apple", "banana", "orange"];

for (const item of fruits) {
  console.log(item);
}

// 1.5 for...in => faqat object uchun
// Objectlar uchun ishlatiladi.
const user = { name: "Farrux", age: 21 };

for (const key in user) {
  console.log(key, user[key]);
}

// 1.6 break va continue
// break — loopni to‘xtatadi
// continue — shu iteratsiyani co‘tkazib yuboradi
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // 5 ni o‘tkazadi
  if (i === 8) break; // 8 da to‘xtaydi
  console.log(i);
}

// HOMEWORK 1 dan 100 gacha bolgan sonlar yigindisini chiqarish
let sum = 0;
for (let n = 1; n <= 100; n++) {
  sum += n;
}
console.log(sum);

let n = 6;
let factorial = 1;
while (n > 1) {
  factorial *= n;
  n--;
}
console.log(factorial);

const fruitss = ["apple", "banana", "orange", "kiwi"];
for (const item of fruitss) {
  console.log(item);
}

const userr = {
  name: "Farrux",
  age: 20,
  role: "Developer",
};

for (const value in userr) {
  console.log(value, userr[value]);
}

for (let i = 1; i <= 10; i++) {
  let row = "";

  for (let j = 1; j <= 10; j++) {
    row += i * j + " ";
  }
  console.log(row);
}
