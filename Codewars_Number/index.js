function squares(x, n) {
   if (n <= 0) return [];

   let array = [x];

   for (let i = 1; i < n; i++) {
      array.push(Math.pow(array[i - 1], 2));
   }

   return array;
}

console.log(squares(2, 5));
console.log(squares(3, 3));
console.log(squares(5, 3));
console.log(squares(10, 4));
console.log(squares(2, 0));
console.log(squares(2, -5));

console.log("-------------------------------------------------------------");

/* ---------------------------------------------------------------------------*/

function checkConcatenatedSum(number, n) {
   console.log(
      number
         .toString()
         .split("")
         .map((item) => item.repeat(n))
         .reduce((sum, current) => sum + Number(current), 0)
   );
}

console.log(checkConcatenatedSum(2997, 3));
console.log(checkConcatenatedSum(-2997, 3));
