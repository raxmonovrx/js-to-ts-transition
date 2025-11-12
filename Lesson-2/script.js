"strict mode";
// 1.1 Operators (arifmetik, mantiqiy, taqqoslash, bitwise)
// 1.2 Conditionals (if, else, else if, switch-case)
// 1.3 Ternary operator (? :)
// 1.4 Logical operators (&&, ||, !)

// #1 OPERATORLAR
// #1.1 Arifmetik Operatorlar
// Asosiy arifmetik amallar
// let a = 10;
// let b = 3;

// console.log(a + b); // 13 => qo'shish
// console.log(a - b); // 7 => ayirish
// console.log(a * b); // 30 => ko'paytirish
// console.log(a / b); // 3.333... => bo'lish
// console.log(a % b); // 1 => qoldiqni topish (10 / 3 = 3 qoldiq 1)
// console.log(a ** b); // 1000 => darajaga ko'tarish (10³)

// Increment va Decrement
// let x = 5;
// x++; // 6
// console.log(x);
// x-- // 4
// console.log(x);

// Pre va Post increment farqi
// let y = 5;
// console.log(y++); // 5 (avval qiymatni ko'rsatadi, keyin oshiradi)
// console.log(y); // 6

// let z = 5;
// console.log(++z); // 6 (avval oshiradi, keyin ko'rsatadi)

// #1.2 Taqqoslash Operatorlari
// let num1 = 10;
// let num2 = "10";

// // Oddiy taqqoslash (faqat qiymat)
// console.log(num1 == num2); // true (qiymat bir xil)

// // Qatiy taqqoslash qiymat va tur
// console.log(num1 === num2); // false (tur har xil)

// // Teng emas
// console.log(num1 != num2); // false
// console.log(num1 !== num2); // true (tur har xil)

// // Katta-kichiklik
// console.log(5 > 3); // true
// console.log(5 < 3); // false
// console.log(5 >= 5); // true
// console.log(5 <= 4); // false

// Doim === va !== ishlatishga harakat qilish kerak, chunki ular xavfsizroq!

// #1.3 Mantiqiy Operatorlar (Logical Operators)
// // AND (&&) - hammasi true bo'lishi kerak
// let yosh = 20;
// let haydovchilikGuvohnomasi = true;

// if (yosh >= 18 && haydovchilikGuvohnomasi) {
//   console.log("Mashina haydashingiz mumkin");
// }

// // OR (||) - kamida bittasi true bo'lsa kifoya
// let hafta_oxi = false;
// let bayram = true;

// if (hafta_oxi || bayram) {
//   console.log("Dam olish kuni!");
// }

// // NOT (!) - qiymatni teskari qiladi
// let yomgir = false;
// if (!yomgir) {
//   console.log("Sayrga chiqishimiz mumkin");
// }

// true && true   // true
// true && false  // false
// false && false // false

// true || true   // true
// true || false  // true
// false || false // false

// !true   // false
// !false  // true

// // QO'SHISH (+)
// let narx = 50000;
// let yetkazish = 10000;
// let jami = narx + yetkazish;
// console.log(jami); // 60000

// // AYIRISH (-)
// let pulim = 100000;
// let sarfladim = 35000;
// let qoldi = pulim - sarfladim;
// console.log(qoldi); // 65000

// // KO'PAYTIRISH (*)
// let mahsulot_narxi = 15000;
// let soni = 4;
// let umumiy = mahsulot_narxi * soni;
// console.log(umumiy); // 60000

// // BO'LISH (/)
// let umumiy_narx = 120000;
// let kishilar = 4;
// let har_biriga = umumiy_narx / kishilar;
// console.log(har_biriga); // 30000

// // QOLDIQ (%) - juda foydali!
// let son = 17;
// let qoldiq = son % 5; // 17 ni 5 ga bo'lsak, qoldiq 2
// console.log(qoldiq); // 2

// // DARAJA (**)
// let kvadrat = 5 ** 2; // 5 ning kvadrati
// console.log(kvadrat); // 25

// Chegirma hisoblash
// let product_price = 500000; // 500 000 uzs
// let discount = 15; // 15%

// let discount_price = (product_price * discount) / 1000;
// let final_amount = product_price - discount_price;

// console.log(`Chegirma: ${discount_price} sum`); // 7500 uzs
// console.log(`To'lash kerak: ${final_amount} sum`); // 492 500 uzs

// Taqoslash operatorlari
// TENG (==) - faqat qiymatni tekshiradi
// console.log(5 == "5"); // true (ikkalasi ham 5)
// console.log(5 == 5); // true

// // QATIY TENG (===) - qiymat VA turni tekshiradi
// console.log(5 === "5"); // false (biri raqam, biri matn)
// console.log(5 === 5); // true

// // TENG EMAS (!=) va (!==)
// console.log(5 != "5"); // false
// console.log(5 !== "5"); // true

// // KATTA/KICHIK
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 10); // true
// console.log(10 <= 9); // false
// Doim === va !== ishlatish yaxshiroq! Chunki == kutilmagan xatolarga olib kelishi mumkin.

// Yomon misol
// console.log(0 == false);  // true (bu noto'g'ri!)
// console.log("" == false); // true (bu ham!)

// To'g'ri yondashuv
// console.log(0 === false);  // false
// console.log("" === false); // false

// #MANTIQIY OPERATORLAR (Logical Operators)
// bu bir nechta shartlarni birga tekshirish uchun kerak boladi

// #1 AND (&&) - "VA" ma'nosida
// !!! Barcha shartlar true bo'lishi kerak
// let yosh = 20;
// let prava = true;

// if (yosh >= 18 && prava) {
//   console.log("Mashina haydashingiz mumkin");
// } else {
//   console.log("Talablarga javob bermaysiz");
// }

// Real misol
// let pass_length = 8;
// let includes_num = true;
// let includes_let = true;

// if (pass_length >= 8 && includes_num && includes_let) {
//   console.log("✅ Parol kuchli");
// } else {
//   console.log("❌ Parol zaif");
// }

// #2 OR (||) - "YOKI" ma'nosida
// !!! Kamida bitta shart true bo'lsa kifoya
// let is_weekend = true;
// let holiday = false;

// if (is_weekend || holiday) {
//   console.log("Dam olish kuni!");
// }
// // Faqat bittasi true bo'lsa ham - dam olish!

// Real misol - To'lov usuli:
// let naqd_pul = true;
// let karta = false;

// if (naqd_pul || karta) {
//   console.log("To'lashingiz mumkin");
// } else {
//   console.log("To'lov vositasi yo'q");
// }

// ✅ NOT (!) - "EMAS" ma'nosida
// Qoida: Qiymatni teskari qiladi
// let rain = false;

// if (!rain) {
//   console.log("Sayrga chiqamiz!");
// } else {
//   console.log("Uyda o'tirrrr!");
// }
// // yomg'ir false, !false = true bo'ladi

// Mantiq jadvali
// // AND (&&)
// true && true; // true
// true && false; // false
// false && false; // false

// // OR (||)
// true || true; // true
// true || false; // true
// false || false; // false

// // NOT (!)
// !true; // false
// !false; // true

// Misol
// let mahsulot_bor = true;
// let balans = 150000;
// let mahsulot_narxi = 100000;
// let yetkazish_mumkin = true;

// if (mahsulot_bor && balans >= mahsulot_narxi && yetkazish_mumkin) {
//   console.log("✅ Buyurtma muvaffaqiyatli!");
// } else {
//   console.log("❌ Buyurtma berib bo'lmadi");
// }

// # SHARTLI OPERATORLAR (Conditionals)
// Dasturga qaror qabul qilishni o'rgatish uchun. "Agar... bo'lsa, ... qil" mantiqida.

//  IF-ELSE
// let havo = 30; // 30 Gradus

// if (havo > 36) {
//   console.log("Juda issiq, konditsioner yoqing");
// } else if (havo > 25) {
//   console.log("Issiq, yengil kiyining");
// } else if (havo > 15) {
//   console.log("Iliq, normal kiyining");
// } else {
//   console.log("Sovuq, issiq kiyining");
// }

// misol bank
// let oylik_maosh = 5000000; // uzs
// let kredit_tarixi = "yaxshi";
// let yosh = 28;

// if (yosh < 21) {
//   console.log("❌ Yoshingiz yetarli emas");
// } else if (kredit_tarixi === "yomon") {
//   console.log("❌ Kredit tarixingiz yomon");
// } else if (oylik_maosh < 3000000) {
//   console.log("❌ Daromadingiz kam");
// } else {
//   console.log("✅ Kredit olishingiz mumkin!");
// }

// SWITCH-CASE
// Qachon ishlatiladi? Ko'p variantlarni tekshirish kerak bo'lganda.
// const day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("Hafta boshi, ko'p ish bor");
//     break;
//   case "Friday":
//     console.log("Hafta oxiri yaqin!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Dam olish kuni!");
//     break;
//   default:
//     console.log("Oddiy ish kuni");
//     break;
// }

// misol restoran
// let buyurtma = "lagmon";
// let narx = 0;

// switch (buyurtma) {
//   case "osh":
//     narx = 25000;
//     console.log(`Osh ${narx} sum`);
//     break;
//   case "lagmon":
//     narx = 22000;
//     console.log(`Lag'mon ${narx} sum`);
//     break;
//   case "shashlik":
//     narx = 15000;
//     console.log(`Shashlik ${narx} sum`);
//     break;
//   case "somsa":
//     narx = 5000;
//     console.log(`Somsa ${narx} sum`);
//     break;
//   default:
//     console.log("Bu taom menyuda yo'q");
// }

// #TERNARY OPERATOR (? :)
// Kerakligi? Qisqa if-else yozish uchun. Bitta qatorda shart tekshirish.
// Sintaksis: "shart ? true_bo'lsa : false_bo'lsa"

// // Uzun yozuv
// let yosh = 20;
// let statusAge;

// if (yosh >= 18) {
//   statusAge = "Katta";
// } else {
//   statusAge = "Kichik";
// }

// // Qisqa yozuv
// let yosh2 = 20;
// let statusAge2 = yosh2 >= 18 ? "Katta" : "Kichik";
// console.log(statusAge2); // "Katta"

// // 1️⃣ Chegirma berish
// let xarid_summasi = 500000;
// let chegirma = xarid_summasi > 300000 ? 10 : 0;
// console.log("Chegirma: " + chegirma + "%");

// // 2️⃣ Toq yoki juft?
// let son = 7;
// let tur = son % 2 === 0 ? "Juft" : "Toq";
// console.log(tur); // "Toq"

// // 3️⃣ Online/Offline status
// let internetBor = true;
// let holat = internetBor ? "🟢 Online" : "🔴 Offline";
// console.log(holat);

// // 4️⃣ Mahsulot mavjudligi
// let stokda = 0;
// let xabar = stokda > 0 ? "✅ Sotuvda" : "❌ Tugagan";
// console.log(xabar);

// Ichma-ich ternary (murakkab):
// let ball = 85;

// let baho = ball >= 90 ? "A'lo" :
//            ball >= 70 ? "Yaxshi" :
//            ball >= 50 ? "Qoniqarli" : "Qoniqarsiz";

// console.log(baho); // "Yaxshi"

// 🔐 LOGIN TIZIMI
// let username = "javhir";
// let password = "12478";
// let yosh = 22;
// let akkount_aktiv = true;
// let urinishlar = 0;
// let maksimal_urinish = 3;

// console.log("=== LOGIN TIZIMIGA XUSH KELIBSIZ ===\n");

// // 1️⃣ Yosh tekshirish
// if (yosh < 18) {
//   console.log("❌ Yoshingiz 18dan kichik. Kirish mumkin emas!");
// } else {
//   console.log("✅ Yosh tekshiruvi o'tdi");

//   // 2️⃣ Akkount aktiv mi?
//   let akkount_holati = akkount_aktiv ? "Aktiv" : "Bloklangan";
//   console.log("Akkount holati: " + akkount_holati);

//   if (!akkount_aktiv) {
//     console.log("❌ Akkountingiz bloklangan!");
//   } else {
//     console.log("✅ Akkount aktiv");

//     // 3️⃣ Username tekshirish
//     let username_togri = username === "javohir";
//     let parol_togri = password.length >= 8;

//     if (username_togri && parol_togri) {
//       console.log("\n🎉 XU SH KELIBSIZ, " + username.toUpperCase() + "!");

//       // 4️⃣ Foydalanuvchi roli aniqlash
//       let rol =
//         username === "admin"
//           ? "Administrator"
//           : yosh >= 21
//           ? "Premium foydalanuvchi"
//           : "Oddiy foydalanuvchi";

//       console.log("Sizning rolingiz: " + rol);

//       // 5️⃣ Kun bo'yicha xabar
//       let hozir_soat = 14; // 14:00
//       let salomlashma;

//       if (hozir_soat < 12) {
//         salomlashma = "Xayrli tong!";
//       } else if (hozir_soat < 18) {
//         salomlashma = "Xayrli kun!";
//       } else {
//         salomlashma = "Xayrli kech!";
//       }

//       console.log(salomlashma);
//     } else {
//       urinishlar++;
//       let qolgan = maksimal_urinish - urinishlar;
//       console.log("❌ Login yoki parol xato!");
//       console.log("Qolgan urinishlar: " + qolgan);

//       if (qolgan === 0) {
//         console.log("🔒 Akkount 30 daqiqaga bloklandi!");
//       }
//     }
//   }
// }
