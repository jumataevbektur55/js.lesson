// let str = "MOTION VEB ";
// str1 = "ACADEMI";
// console.log(str + str1); Стараканы кошот
// console.log(str.length);
// console.log(str[10]);
// console.log(str[str.length - 9]);
// console.log(str.length / 2);/
// console.log(str[Math.floor(str.length / 2)]); Страканын ортосун табат
// !  методы
// let str = "Bishkek";
// let str = "motion web academy";

// console.log(str.link("https://github.com/ymankulov"));
// console.log(str.big());
// console.log(str.sub());
// console.log(str.sup());
// console.log(str.slice(-4));
// console.log(str.slice(4, 6));
// console.log(str.substring(9));
// console.log(str.substr(/4));
// console.log("It", str);
// console.log(str.trim(1));
// console.log(str.trimEnd());
// console.log(str.trimStart(""));
// console.log(str.trimLeft());
// console.log(str.trimRight());
// let str2 = " city";
// console.log(str.concat(str2))/;
// console.log(str + str2);
// console.log(str.replace("m", "t"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.repeat(19));
// console.log(str.charAt("1"));
// console.log(str.indexOf("m"));
// console.log(str.indexOf("e"));
// console.log(str.indexOf("b"));
// console.log(str.indexOf("е"));
// console.log(str.lastIndexOf("t"));
// console.log(str.includes("e"));
// console.log(str.includes("e"));
// console.log(str.typeof(str));

// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str = "Привет, Мир!";
// console.log(str);

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let str = (str1 = "Привет, ");
// let str2 = "Мир!";
// console.log(str1 + str2);

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.

// let str = " *bektur*!";
// console.log(`Привет ${str} `);

// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let str = "90";
// console.log(`Мне ${str} лет! `);
// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// const day = 365;
// const name = "Земля";
// let count = "7 млрд.";
// let sun = "Солнце";
// console.log(
//   `В нашем году ${day} дней. Днём у нас светит ${sun}  Население планеты Земля составляет примерно ${count} человек. `
// );

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// let str = "Nevis ITDB TECH";
// console.log(str.slice(0, 5).length);

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// let str = "Максимально УЖАСНО";
// console.log(str.slice(-6));

// 3. Вам дана переменная str =  'Максимально УЖАСНО'. Выведите в консоль слово максимально,
// let str = "Максимально УЖАСНО";
// console.log(str.slice(0.5).toLocaleUpperCase());

// только верхним регистром.
// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',

// используя метод slice.
// let str = "Максимально Ужасно";
// console.log(str.slice(5));
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// let str = "Максимально Ужасно";
// console.log(str.charAt(12));

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// let str = "Максимально";
// let str2 = "  Ужасно";
// console.log(str.concat(str2));

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно"

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// let str = "макСИМАЛЬНО ужаСНО";
// console.log(str.slice(0, 1));
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// let str = "Максимально Ужасно";
// console.log(str.slice(1, 2));
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// let str = "Максимально Ужасно";
// console.log();
// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = "aaa bbb ccc";
// console.log(str.slice(3, 7));
// console.log(str.substr(3, 5));
// console.log(str.substring(3, 7));

// let num = 'sdf';
// console.log(num.length);
