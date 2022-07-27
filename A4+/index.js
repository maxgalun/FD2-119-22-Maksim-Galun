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

   return str[0] == str[str.length - 1]
      ? palindrome(str.substring(1, str.length - 1))
      : false;
}

console.log(
   `А роза упала на лапу Азора - ${
      palindrome(format("А роза упала на лапу Азора"))
         ? "палиндром"
         : "не палиндром"
   }`
);

console.log(
   `Лёша на полке клопа нашёл - ${
      palindrome(format("Лёша на полке клопа нашёл"))
         ? "палиндром"
         : "не палиндром"
   }`
);

console.log(
   `Я иду съ мечемъ судия - ${
      palindrome(format("Я иду съ мечемъ судия")) ? "палиндром" : "не палиндром"
   }`
);

console.log(
   `Я — арка края - ${
      palindrome(format("Я — арка края")) ? "палиндром" : "не палиндром"
   }`
);

console.log(
   `Саша на полке клопа нашёл - ${
      palindrome(format("Саша на полке клопа нашёл"))
         ? "палиндром"
         : "не палиндром"
   }`
);
