"use strict";

function palindrome(str) {
   str = str
      .toLowerCase()
      .replaceAll(/[.,;:?!-—"()\s]/g, "")
      .replaceAll("ё", "е")
      .replaceAll("ъ", "ь");

   for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[str.length - 1 - i]) return false;
   }

   return true;
}

console.log(
   `А роза упала на лапу Азора - ${
      palindrome("А роза упала на лапу Азора") ? "палиндром" : "не палиндром"
   }`
);

console.log(
   `Лёша на полке клопа нашёл - ${
      palindrome("Лёша на полке клопа нашёл") ? "палиндром" : "не палиндром"
   }`
);

console.log(
   `Я иду съ мечемъ судия - ${
      palindrome("Я иду съ мечемъ судия") ? "палиндром" : "не палиндром"
   }`
);

console.log(
   `Я — арка края - ${
      palindrome("Я — арка края") ? "палиндром" : "не палиндром"
   }`
);
