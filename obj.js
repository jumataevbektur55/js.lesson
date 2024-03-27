// let user = {
//   name: "Rayann",
//   age: 18,
//   adres: {
//     street: "Gagarina",
//     region: "chuy",
//   },
//   "motion Web": "academy",
// };
// let user = { Ширин: "1000", Айжан: "500", Атай: "200" };
// console.log(user["motion Web"]);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.keys(user.adres));
// console.log(Object.values(user.adres));
// console.log(Object.entries(user));
// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj).length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент
//  с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(obj.c);
// console.log(obj["c"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
//  Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// console.log(obj.Атай);
// console.log(obj.Ширин);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
// Атай: '200'}. Измените зарплату Атая на 500.
// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Атай = "500";
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
//  Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Медет = "1500";
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
//  Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(obj.Атай.salary);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера
// дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let obj = {
//   1: "Понидельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
// };
// console.log(obj[5]);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
//  Выведите день недели, соответствующий значению переменной day.
// let obj = {
//   1: "Понидельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
// };
// let day = 4;
// console.log(obj[day]);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
//  Атай: {salary: '500'}. Получите все ключи объекта.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.keys(obj));
// console.log(Object.keys(obj.Атай));

//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
//  Атай: {salary: '500'}. Получите все значения объекта.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.values(obj));
// console.log(Object.values(obj.Атай));

//         11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500',
//  Атай: {salary: '500'}. Выведите все entries объекта.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.entries(obj));

//             12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1,
// если длина ключа name нечетная, 0 если четная.
// let task = (obj) => {
//   if (obj.name.length % 2 === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// console.log(task({ name: "Igor" }));

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
//  Выведите все id в консоль через map.
// function p(arr) {
//   arr.map((obj) => console.log(obj.id));
// }
// let arr1 = [{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }];
// p(arr1);

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25.
// Поменяйте значение name на Azat.
// function task14(obj) {
//   obj.name = "Azat";
//   obj.age = 25;
//   return obj;
// }
// console.log(task14({ name: "Igor" }));
// >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 1 баарынын атын чыгарасынар
// 2 жашы 18 чон object чыксын
// 3 каждый 2 элементке хобби: спорт деген ключ кошуу
// 4 именно Dastan деген атты Almazга озгортуп калгандары как обычно чыксын

// let user = [
//   {
//     id: 1,
//     name: "Ilgiz",
//     age: 15,
//     job: "Developer",
//   },
//   {
//     id: 2,
//     name: "Aziret",
//     age: 18,
//     job: "Developer",
//   },
//   {
//     id: 3,
//     name: "Ainura",
//     age: 28,
//     job: "Developer",
//   },
//   {
//     id: 4,
//     name: "Makmal",
//     age: 19,
//     job: "Developer",
//   },
//   {
//     id: 5,
//     name: "Daniel",
//     age: 16,
//     job: "Developer",
//   },
//   {
//     id: 6,
//     name: "Dastan",
//     age: 18,
//     job: "Developer",
//   },
//   {
//     id: 7,
//     name: "Elzar",
//     age: 15,
//     job: "Developer",
//   },
// ];
// console.log(
//   user.map((el) => {
//     return el.name;
//   })
// );
// console.log(
//   user.filter((el) => {
//     return el.age >= 18;
//   })
// );
// console.log(
//   user.map((el) => {
//     return el.name.replaceAll("Dastan", "Almaz");
//   })
// );
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(Object.entries(user));

// >>>>>><<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ##################################@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AbortController
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!#######################################################################
// for (let i = 0; i <= 20; i++) {
//   if (i === 9) {
//     break;
//   }
//   console.log(i);
// }
// Копирование массива:
// let arr = [1, 2, 3];
// let result = [...arr];
// console.log(result.sort((a, b) => b - a));
// console.log(arr);

// Объединение массивов:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(array1.concat(array2));

// Добавление элементов в массив:
// const originalArray = [1, 2, 3];
// const tatr = [1, 2, 3, 4, 5];
// console.log(originalArray.concat(tatr));

// Копирование объекта:
// let obj = { name: "John", age: 30 };
// let res = { ...obj };
// console.log(res.sort((b, a) => a - b));
// console.log(obj);

// Добавление свойств к объекту:
// const obj1 = { name: "John" };
// const obj2 = { name: "John", age: 30 };

// console.log(Object.keys((obj1)));
// console.log(Object.keys(obj1(name: "John", age: 30 )));
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.keys(obj));
// console.log(Object.keys(obj.Атай));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function task(a, b, ...c) {
//   console.log();
//   return a + b + c;
// }
// console.log(task(5, 3, 4, 2, 8, 6));
// for (let i = 0; i < 20; i++) {
//   if (i === 8) {
//     break;
//   }
//   console.log(i);
// }
// hjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

// задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')
// let auto = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// console.log(
//   year.join().filter((el) => {
//     return el.year > 2007;
//   })
// );

// Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?```
// "apple ban" --> ["apple 5", "ban 3"]
// let arr = ["ajdddfghjklkjhgfdsdfghd", "banulihyiu"];
// arr.forEach((arr) => {
//   console.log(` "${arr} ${arr.length}"   `);
// });

// 3
// 98703798137398720739809129890748 ==> 001010000100010

// let arr = "8632789087?65432345678909876543234567";

// function task(str) {
//   return str.split("").map((el) => {
//     if (el >= 5) {
//       return 1;
//     } else if (el <= 5) {
//       return 0;
//     }
//   });
// }
// console.log(
//   task(
//     " 34564444444444444444444444444444444444444444444444447899876543212345678998765432123456"
//   )
// );
// #
// ##
// ###
// ####
// #####
// ######
// #######
// let arr = [];
// for (i = 0; i < 6; i++) {
//   arr.push("#");
//   console.log(arr);
// }
