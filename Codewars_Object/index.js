function count(array) {
   const obj = {};

   new Set(array).forEach((element) => {
      obj[element] = array.filter((item) => item == element).length;
   });

   return obj;
}

console.log(count(["a", "a", "b", "b", "b"]));
