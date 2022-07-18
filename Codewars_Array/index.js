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
