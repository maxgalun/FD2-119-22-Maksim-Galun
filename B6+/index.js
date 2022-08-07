"use strict";

function formatNumber(n, f) {
   const format = {};
   const num = {};
   const result = {
      int: "",
      fract: "",
   };

   [format.int, format.fract] = String(f).split("."); //int - целая часть, fract - дробная
   [num.int, num.fract] = String(n).split(".");

   console.log(num.int);
   console.log(num.fract);

   num.fract = num.fract ?? "0";
   format.int = format.int.split("").reverse();
   num.int = num.int.split("").reverse();

   console.log(num.fract);

   result.fract = (num.fract / Math.pow(10, num.fract.length)).toFixed(
      format.fract.length
   );

   console.log(result.fract);

   let indexNum = 0;
   for (
      let indexFormat = 0;
      indexNum < num.int.length && format.int[indexFormat];
      indexFormat++
   ) {
      switch (format.int[indexFormat]) {
         case "#":
            result.int += num.int[indexNum++];
            break;
         case " ":
            result.int += " ";
            break;
         default:
            return "Ошибка формата";
      }
   }

   result.int += num.int.slice(indexNum).join("");
   result.int = result.int.split("").reverse().join("");

   return result.int + "." + String(result.fract).split(".")[1];
}

console.log(formatNumber(1234567421.0055687, "# ### ###.##"));
