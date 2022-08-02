"use strict";

function format(str) {
   return str
      .toLowerCase()
      .replaceAll(/[—.,;:?!-"()\s]/g, "")
      .replaceAll("ё", "е")
      .replaceAll("ъ", "ь");
}

function palindrome(str) {
   if (str.length < 2) return true;

   return str[0] == str[str.length - 1] ? palindrome(str.slice(1, -1)) : false;
}

let str1 = "А роза упала на лапу Азора";
let str2 = "Лёша на полке клопа нашёл";
let str3 = "Я иду съ мечемъ судия";
let str4 = "Я — арка края";
let str5 = "Саша на полке клопа нашёл";

console.log(
   `${str1} - ${palindrome(format(str1)) ? "палиндром" : "не палиндром"}`
);

console.log(
   `${str2} - ${palindrome(format(str2)) ? "палиндром" : "не палиндром"}`
);

console.log(
   `${str3} - ${palindrome(format(str3)) ? "палиндром" : "не палиндром"}`
);

console.log(
   `${str4} - ${palindrome(format(str4)) ? "палиндром" : "не палиндром"}`
);

console.log(
   `${str5} - ${palindrome(format(str5)) ? "палиндром" : "не палиндром"}`
);
