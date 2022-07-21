function inter(s1, s2) {
   const s3 = new Set();

   for (let value of s1) {
      if (s2.has(value)) s3.add(value);
   }

   return s3;
}

console.log(inter(new Set([1, 2]), new Set([2, 3])));

console.log(/*------------------------------------------------------------------*/);
/*--------------------------------------------------------------------------------------*/

function divCon(x) {
   return x.reduce(
      (result, current) =>
         typeof current == "string" ? result - current : result + current,
      0
   );
}

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

console.log(
   "------------------------------------------------------------------"
);
/*--------------------------------------------------------------------------------------*/

function findOdd(A) {
   let result;

   A.some((element) => {
      if (A.filter((item) => item == element).length % 2) {
         result = element;
         return true;
      }
   });

   return result;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

console.log(
   "------------------------------------------------------------------"
);
/*--------------------------------------------------------------------------------------*/
