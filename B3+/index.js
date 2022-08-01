"use strict";

function calc(exp) {
   const operatorList = ["*/", "+-"];

   console.log("exp " + exp);
   debugger;

   /*------------------------------------разбор на элементы------------------------------------*/
   let expArr = [];

   for (let i = 0, flag = false; i < exp.length; i++) {
      if (exp[i] == "-") {
         expArr.push(exp[i]);
         !isNaN(+exp[i - 1]) ? (flag = false) : (flag = true);
         continue;
      }

      if (!isNaN(+exp[i]) || exp[i] == ".") {
         if (flag) {
            expArr[expArr.length - 1] += exp[i];
         } else {
            expArr.push(exp[i]);
            flag = true;
         }
      } else {
         expArr.push(exp[i]);
         flag = false;
      }
   }

   console.log(expArr);

   /*------------------------------------вычисления в скобках------------------------------------*/

   if (expArr.includes(")")) {
      let posBracketEnd = expArr.indexOf(")");
      let posBracketStart = expArr.lastIndexOf("(", posBracketEnd);

      return calc(
         expArr.slice(0, posBracketStart).join("") +
            calc(expArr.slice(posBracketStart + 1, posBracketEnd).join("")) +
            expArr.slice(posBracketEnd + 1).join("")
      );
   }

   /*------------------------------------вычисления операций в порядке приоритета------------------------------------*/

   let operatorPos;

   operatorList.some((item) => {
      return ~(operatorPos = expArr.findIndex((element) =>
         item.includes(element)
      ));
   });

   if (expArr.length > 3) {
      console.log("operatorPos " + operatorPos);

      return calc(
         expArr.slice(0, operatorPos - 1).join("") +
            calc(expArr.slice(operatorPos - 1, operatorPos + 2).join("")) +
            expArr.slice(operatorPos + 2).join("")
      );
   }

   /*------------------------------------математические операции------------------------------------*/

   if (~operatorPos) {
      let operator = expArr[operatorPos];
      let leftOperand = +expArr[operatorPos - 1];
      let rightOperand = +expArr[operatorPos + 1];
      switch (operator) {
         case "*":
            return leftOperand * rightOperand;
         case "/":
            return leftOperand / rightOperand;
         case "+":
            return leftOperand + rightOperand;
         case "-":
            return leftOperand - rightOperand;
      }
   } else {
      return expArr;
   }
}

console.log(calc("-2+(((33.2+1*5)+(-7-1))-4*2)+5"));
// console.log("ответ " + calc("-2+8-8"));
// console.log("ответ " + calc("-3--4+(-1*5.5)+2"));
