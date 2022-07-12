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

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

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

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function highAndLow(numbers) {
   numbers = numbers.split(" ").sort((a, b) => b - a);
   return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

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

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function calc(x) {
   let total1 = 0;
   let total2 = 0;

   for (let i = 0; i < x.length; i++) {
      x[i]
         .charCodeAt()
         .toString()
         .split("")
         .forEach((element) => {
            total1 += +element;
            if (element == "7") element = 1;
            total2 += +element;
         });
   }

   return total1 - total2;
}

console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
console.log(calc("jfmgklf8hglbe"));
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function catMouse(map, moves) {
   if (!(map.includes("C") && map.includes("m"))) {
      return "boring without two animals";
   }

   let positionCat;
   let positionMouse;

   map = map.split("\n");

   for (let i = 0; i < map.length; i++) {
      if (map[i].includes("C")) positionCat = i + map[i].indexOf("C");
      if (map[i].includes("m")) positionMouse = i + map[i].indexOf("m");
   }

   return positionMouse - positionCat < moves ? "Caught!" : "Escaped!";
}

var map1 = `..C......
.........
....m....`;

var map2 = `.C.......
.........
......m..`;

var map3 = `..C......
.........
.........`;

console.log(catMouse(map1, 5));
console.log(catMouse(map2, 5));
console.log(catMouse(map3, 5));
