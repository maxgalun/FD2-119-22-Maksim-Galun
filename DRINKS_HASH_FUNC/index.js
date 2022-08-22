function HashStorageFunc() {
   this.hash = {};

   this.addValue = function (key, value) {
      this.hash[key] = value;
   };
   this.getValue = function (key) {
      return this.hash[key];
   };
   this.deleteValue = function (key) {
      return delete this.hash[key];
   };

   this.getKeys = function () {
      return Object.keys(this.hash);
   };
}

const drinkStorage = new HashStorageFunc();

function addDrink() {
   const name = prompt("Укажите название напитка");
   const alco = confirm("Напиток алкогольный?");
   const recipe = prompt("Укажите рецепт приготовления");
   drinkStorage.addValue(name, {
      alco,
      recipe,
   });
}

function getDrink(key) {
   // const alco = this.hash[key]["alco"];
   // const recipe = this.hash[key]["recipe"];
   // console.log(`напиток: ${key}
   // алкогольный: ${alco ? "да" : "нет"}
   // рецепт приготовления: ${recipe}`);
}
