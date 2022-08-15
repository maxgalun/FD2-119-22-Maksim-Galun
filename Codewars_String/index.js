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
   for (let i = 0; i < str.length - 1; i++) {
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
      if (map[i].includes("C")) positionCat = [i, map[i].indexOf("C")];
      if (map[i].includes("m")) positionMouse = [i, map[i].indexOf("m")];
   }

   let movesToMouse =
      Math.abs(positionMouse[0] - positionCat[0]) +
      Math.abs(positionMouse[1] - positionCat[1]);

   return movesToMouse <= moves ? "Caught!" : "Escaped!";
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

var map4 = `..............
..............
..............
..............
...........m..
..............
..............
..............
..............
C.............
..............
..............`;

console.log(catMouse(map1, 5));
console.log(catMouse(map2, 5));
console.log(catMouse(map3, 5));
console.log(catMouse(map4, 21));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function duplicateEncode(word) {
   let result = "";
   for (let i = 0; i < word.length; i++) {
      let checkСharacter = word.slice(0, i) + word.slice(i + 1);
      checkСharacter.toLowerCase().includes(word[i].toLowerCase())
         ? (result += ")")
         : (result += "(");
   }
   return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function firstNonRepeatingLetter(s) {
   let letter = "";

   [...s].every((element) => {
      if (
         [...s].filter((item) => item.toLowerCase() == element.toLowerCase())
            .length > 1
      )
         return true;
      letter = element;
      return false;
   });

   return letter;
}

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

var maxSequence = function (arr) {
   let maxSequence = 0;

   arr.forEach((element, index) => {
      if (element < 0) return;

      arr.slice(index).reduce((acc, current) => {
         acc += current;
         if (acc > maxSequence) maxSequence = acc;
         return acc;
      }, 0);
   });

   return maxSequence;
};

console.log(maxSequence([]));
console.log(maxSequence([-2, 4, -5, 2, 7]));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

var maxSequence2 = function (arr) {
   var currentSum = 0;
   return arr.reduce(function (maxSum, number) {
      console.log("currentSum " + currentSum);
      console.log("maxSum " + maxSum);
      console.log("number " + number);

      currentSum = Math.max(currentSum + number, 0);

      console.log("currentSum " + currentSum);
      console.log("------------------------------");

      return Math.max(currentSum, maxSum);
   }, 0);
};

console.log(maxSequence2([-2, 4, -5, 2, 7]));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function orderWeight(strng) {
   return strng
      .trim()
      .split(" ")
      .sort((a, b) => {
         const aInt = a.split("").reduce((acc, current) => +acc + +current);
         const bInt = b.split("").reduce((acc, current) => +acc + +current);
         if (aInt < bInt) return -1;
         if (aInt > bInt) return 1;
         if (a < b) return -1;
         if (a > b) return 1;
         return 0;
      })
      .join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(orderWeight("2000 103 123 4444 99"));

console.log(
   "-----------------------------------------------------------------------------------------------------"
);
/*-------------------------------------------------------------------------------------------------------------------*/

function mix(s1, s2) {
   s1 = [...s1].filter((element) => !!~element.search(/[a-z]/));
   const hash1 = {};
   s2 = [...s2].filter((element) => !!~element.search(/[a-z]/));
   const hash2 = {};
   let hash3 = {};

   new Set(s1).forEach((element) => {
      if (s1.filter((item) => item == element).length > 1)
         hash1[element] = s1.filter((item) => item == element).length;
   });

   new Set(s2).forEach((element) => {
      if (s2.filter((item) => item == element).length > 1)
         hash2[element] = s2.filter((item) => item == element).length;
   });

   console.log(s1);
   console.log(s2);
   console.log(hash1);
   console.log(hash2);

   function concatHash(hash1, hash2) {
      for (let key in hash2) {
         if (key in hash1) {
            if (hash2[key] > hash1[key]) {
               hash3[key.repeat(hash2[key])] = 2;
            }
            if (hash2[key] < hash1[key]) {
               hash3[key.repeat(hash1[key])] = 1;
            }
            if (hash2[key] == hash1[key]) {
               hash3[key.repeat(hash1[key])] = "=:";
            }
         } else {
            hash3[key.repeat(hash2[key])] = 2;
         }
      }
   }

   concatHash(hash1, hash2);
   concatHash(hash2, hash1);
   hash3 = Object.entries(hash3);
   console.log(hash3);

   hash3.sort((a, b) => {
      if (a[0].length > b[0].length) return -1;
      if (a[0].length < b[0].length) return 1;
      return 0;
   });

   console.log(hash3);
}

mix("Are they here ww", "yes, they are here");
