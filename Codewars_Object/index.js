function count(array) {
   const obj = {};

   new Set(array).forEach((element) => {
      obj[element] = array.filter((item) => item == element).length;
   });

   return obj;
}

console.log(count(["a", "a", "b", "b", "b"]));

console.log("--------------------------------------------------------------");
/*----------------------------------------------------------------------------------*/

function killer(suspectInfo, dead) {
   for (let key in suspectInfo) {
      if (dead.every((element) => suspectInfo[key].includes(element)))
         return key;
   }
}

console.log(
   killer(
      {
         James: ["Jacob", "Bill", "Lucas"],
         Johnny: ["David", "Kyle", "Lucas"],
         Peter: ["Lucy", "Kyle"],
      },
      ["Lucas", "Bill"]
   )
);

console.log(killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]));
