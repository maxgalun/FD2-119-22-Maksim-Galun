"use strict";

function calc(exp) {
   if (exp.includes(")")) {
      const posBracketEnd = exp.indexOf(")");
      const posBracketStart = exp.lastIndexOf("(", posBracketEnd);

      calc(
         exp.substring(0, posBracketStart) +
            calc(exp.substring(posBracketStart + 1, posBracketEnd)) +
            exp.substring(posBracketEnd + 1)
      );
   }

   return 5;
}

console.log(calc("2+(((33.2+1)+(7-1))-4*2)+5"));
