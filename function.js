// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// function task(str) {
//   return str.slice(0, 5).length;
// }
// console.log(task("Nevis ITDB TECH"));

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// function task(str) {
//   return str.slice(11);
// }
// console.log(task("Максимально УЖАСНО"));
// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// function task(str) {
//   return str.slice(0.9).toUpperCase();t
// }
// console.log(task("максимально УЖАСНО"));
// function task(str) {
//   return str.toUpperCase();
// }
// console.log(task("максимально УЖАСНО"));
// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// function task(str) {
//   return str.slice(5);
// }
// console.log(task("Максимально Ужасно"));
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// function task(str) {
//   return str.charAt(12);
// }
// console.log(task("Максимально Ужасно"));
// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// function task(a, b) {
//   return a.concat(b);
// }
// console.log(task("Максимально", "Ужасно"));

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно"
// function task(a) {
//   return a.indexOf("а");
// }
// console.log(task("Максимально Ужасно"));
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// function str(a) {
//   return a[0].toUpperCase() + a.toLowerCase().slice(1);
// }
// console.log(str("Максимально Ужасно"));
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// function task(a) {
//   return a.indexOf("");
// }
// console.log(task("Максимально Ужасно"));
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// function task(a) {
//   return a.lastIndexOf("");
// }
// console.log(task("Максимально Ужасно"));
// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// function task(a) {
//   return a.slice(3, 7);
//   return a.substr(3, 4);
//   return a.substring(3, 8);
// }
// console.log(task("aaa bbb ccc"));
// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// function str(a) {
//   if (a === 10) {
//     return "Верно";
//   } else {
//     return "Неверно";
//   }
// }
// console.log(str(10));
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться
// 'a больше b', 'a меньше b'.
// function str(a, b) {
//   if (a < b) {
//     return "a больше b";
//   } else {
//     return "a меньше b";
//   }
// }
// console.log(str(5, 100));
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если
//  число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.

// function task(a) {
//   if (a > 0) {
//     console.log("positive");
//   } else if (a == 0) {
//     console.log("равно");
//   } else if (a < 0) {
//     console.log("negative");
//   }
// }
// task([70]);

// function task(a) {
//   return a
//     .split("")
//     .map((el, index) => {
//       if (index % 2 === 0) {
//         return el.toUpperCase();
//       } else {
//         return el.toLowerCase();
//       }
//     })
//     .join("");
// }
// console.log(task("asdfghjkl"));

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль
// "Четное число", "Нечетное число".
// function task(num) {
//   if (num % 2 === 0) {
//     console.log("Четное число");
//   } else {
//     console.log("Нечетное число");
//   }
// }
// task(28);
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться
// консоль "Четное число", "Нечетное число".
// function task(num, b) {
//   if (num % b === 0) {
//     console.log("Четное число");
//   } else {
//     console.log("Нечетное число");
//   }
// }
// task(1909080, 2);

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой
// переменной - "boolean", "number", ""string.

// function task(s) {
//   if (typeof s === "boolean") {
//     console.log("boolean");
//   } else if (typeof s === "number") {
//     console.log("number");
//   } else if (typeof s === "string") {
//     console.log("string");
//   }
// }

// task(true)
