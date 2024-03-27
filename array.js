// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ["a", "b", "c"];
// arr.push(1, 2, 3);
// console.log(arr);

// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1, 2, 3],
//   arr2 = [3, 5, 6];
// console.log(arr1.concat(arr2));

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ["js", "css", "jq"];
// console.log(arr[1]);

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний
// элемент.
// let arr = ["js", "css", "jq"];
// console.log(arr[2]);

// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));

// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите
//  в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(3,5));

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(0, 1);
// arr.splice(3, 1);
// console.log(arr);

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте
// из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// console.log(arr);

// true, "null", 99, " 073", "SSY", "SSY";
// let arr = [];
// arr.unshift("null");
// arr.unshift(99);
// arr.unshift(true);
// arr.push(" 073");
// arr.push("SSY");
// arr.push(null);

// console.log(arr);

// Самое длинное слова

// const str = "I am a Megalodon , oceans feeling like a pond";

// console.log(
//   str.split(" ").reduce((acc, el) => {
//     return el.length > acc.length ? el : acc;
//   })
// );
//  map
// filter
// sort
// forEach
// reduce
// splise
// slice
// el , index,array.
// console.log(arr.map(function(el,idx,array){
//     return ind
// }));
// const arr =["web", 'is']
// console.log(arr.map(el, idx, array) => {
//     return idx

// });
///
// filter

// const arr =[ "adam", "fifa", "didiarter" ]
// console.log(arr.filter((el)=>) {
//     return el.length > 3
// }

// Во всех задачах используйте только методы map, filter.

// 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
//  изменяющую букву а в каждом имени на я и выведите в консоль.
// let arr = ["Аскар", "Баяман", "Калмамат"];
// function arr(a) {
//   return a.map((el) => {
//     return a.tolowerCese().replece(/а/, "я");
//   });
// }
// console.log(arr(["Аскар", "Баяман", "Калмамат"]));

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
// которая выводит только те имена, где есть буква к и выведите в консоль.
// function arr(a) {
//   return a.filter((el) => {
//     return el.tolowerCese().includes("к");
//   });
// }
// console.log(arr(["Аскар", "Баяман", "Калмамат"]));
// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let arr = [4, 54, 49];
// console.log(
//   arr.map((el) => {
//     return el ** 2;
//   })
// );

// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// const arr = [3134, 4, -143, -245, -214];
// console.log(
//   arr.filter((el) => {
//     return el < 0;
//   })
// );
// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let arr = [3, 51, 30, 54, 60];
// console.log(
//   arr.filter((el) => {
//     return el % 2 !== 1;
//   })
// );
// 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только
//  те строки, длина которых больше 5-ти символов.
// let arr = ["Бегимай", "Баяман", "Калмамат"];
// console.log(
//   arr.filter((el) => {
//     return el.length > 5;
//   })
// );
// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [-13, 96, -41, -28, 40];
// console.log(
//   arr.filter((el) => {
//     return el < 0;
//   })
// );

// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
//  Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let arr = [3, 51, -30, -54, 60];
// console.log(
//   arr.filter((el) => {
//     return el > 30;
//   })
// );
// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию,
// которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
// function str(arr) {
//   return arr.filter((item) => {
//     return ![false, null, undefined, 0, -0, NaN, ""].includes(item);
//   });
// }

// const originalArray = [NaN, 0, 77, false, -17, "", undefined, 99, null];
// const cleanedArray = str(originalArray);

// console.log(cleanedArray);

// 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let arr = ["Бегимай", "Баяман", "Калмамат"];

// arr.forEach((arr) => {
//   console.log(` "${arr}" составляет ${arr.length} символов.`);
// });
// Запишите в переменную a число 1.5, а в переменную b - число 0.75.
// Найдите сумму значений этих переменных и выведите ее на экран.
// let a = 1.5;
// let b = 0.75;

// let sum = a * b;

// console.log(+sum);
// let a = 1.5;
// let b = 0.75;

// let sum = a * b;

// console.log(+sum);

// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ["a", "b", "c"];
// console.log(arr+(1, 2, 3));
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1, 2, 3],
//   arr1 = [4, 5, 6];
// console.log(arr.concat(arr1));
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push("4, 5, 6");
// console.log(arr);
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ["js", "css", "jq"];
// console.log(arr[0]);
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ["js", "css", "jq"];
// console.log(arr[2]);
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
// новый элементы [1, 2, 3].\
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
// элементы [4, 5].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));

// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
// массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
// новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(1, 3));

// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, "a", "b", "c");
// console.log(arr);

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
// сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// console.log(arr);
// / 1. Найти первый элемент в массиве, который больше 10.
// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// output: 40
// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// let res = arr.filter((el) => el > 10);
// console.log("find", res);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     console.log("for", arr[i]);
//     break; // Если вы хотите найти только первый элемент
//   }
// }

// 2. Проверить, все ли элементы массива являются положительными числами.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: false
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];

// let res = arr.every(function (el) {
//   return el >= 0;
// });

// console.log(res);
// 3. Проверить, есть ли в массиве хотя бы один элемент, равный 0.
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// output: true
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// let res = arr.every(function (el) {
//   return el >= false;
// });
// console.log(res);
// 4. Найти первое четное число в массиве.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: 44

// 5. Проверить, все ли строки в массиве содержат более 5 символов.
// let person = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
// output: false

// 6. Проверить, есть ли в массиве хотя бы одно отрицательное число.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true

// 7. Найти первую строку в массиве, которая начинается с буквы "M".
// let person = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
// output: Muradil

// 8. Проверить, все ли элементы массива являются четными числами.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: false

// 9. Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
// let person = ["Ilyaz", "Usman", "Ramazan", "Bilal", "Oroz", "Zeynep", "Erbol", "Kurmanbek", "Nurgul", "Muradil", "Bekzat"];
// output: false

// 10. Найти первый элемент массива, который делится на 3 без остатка.
// let arr = [5, 7, 1, 8, 9, 77, 44];
// output: 9

// 11. Проверить, все ли элементы массива больше 0.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true

// 12. Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
// let person = ["Ilyaz", "usman", "ramazan", "bilal", "oroz", "zeynep", "erbol", "kurmanbek", "nurgul", "muradil", "bekzat"];
// output: true

// let num = 40 // ! -40
// let num = -40 // ! 40
// 40
// -40

// let num = 40;
// if (num === `+${num}`) {
//   console.log(+num);
// } else {
//   console.log(-num);
// }
// вам дан массив["asdfghjhgfdsasd", "sdfghjgfds", "sfdgdsadf"]; самый длинние елемент на колсоль
// let arr = ["asdfgd", "sdfghhbgfdfghjkjjjjjjjjjjjjjjjjgfds", "sfdgdiurjdf"];

// let longestElement = arr.reduce((acc, el) => {
//   return el.length > acc.length ? el : acc;
// }, "");

// console.log(longestElement);
// for (let i = 0; i < arr poiuay.length; i++) {}

// while (condition) {}
