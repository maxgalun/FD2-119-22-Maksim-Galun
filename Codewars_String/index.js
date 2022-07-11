function disemvowel(str) {
   const vowels = "aeiou";
   let result = "";
   for (i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) result += str[i];
   }
   return result;
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(
   disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel("What are you, a communist?"));

/*-----------------------------------------------------------------------------------*/

function accum(s) {
   let result = "";

   for (i = 0; i < s.length; i++) {
      result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
   }

   return result.substring(0, result.length - 1);
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));

/*-----------------------------------------------------------------------------------*/

function highAndLow(numbers) {
   numbers = numbers.split(" ").sort((a, b) => b - a);
   return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));

/*-----------------------------------------------------------------------------------*/

function isIsogram(str) {
   for (let i = 0; i < str.length; i++) {
      if (str.toLowerCase().includes(str[i].toLowerCase(), i + 1)) {
         return false;
      }
   }
   return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));

/*-----------------------------------------------------------------------------------*/

function calc(x) {}

console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
console.log(calc("jfmgklf8hglbe"));
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
