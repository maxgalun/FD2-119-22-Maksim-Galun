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

function findOutlier(integers) {
   const isFindEven =
      integers
         .slice(0, 3)
         .reduce((sum, current) => sum + Math.abs(current % 2), 0) < 2
         ? true
         : false;

   let outlier;

   integers.every((element) => {
      outlier = element;
      return isFindEven ? !(element % 2) : !!(element % 2);
   });

   return outlier;
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
console.log(
   findOutlier([
      51411647, -130603937, 55416255, 75911203, -117228348, 183201669,
      189131867, -117177739, -163958425, -72874763, 30992813, -73388043,
      -166204817, 52213021, 133074187, -33564985, -162752317, 123543511,
      190188105, -171928543, -131664087, 6912061, -90891119, -140388457,
      107936189, -102327639, -117683611, 46170447, -173004419, -69489985,
      36704601,
   ])
);

console.log(
   "------------------------------------------------------------------"
);
/*--------------------------------------------------------------------------------------*/

function zipWith(fn, a0, a1) {
   const arr = [];

   for (i = 0; i < (a0.length < a1.length ? a0.length : a1.length); i++) {
      arr.push(fn(a0[i], a1[i]));
   }

   return arr;
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));

console.log(
   zipWith(
      function (a, b) {
         return a + b;
      },
      [0, 1, 2, 3],
      [0, 1, 2, 3]
   )
);

console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]));
