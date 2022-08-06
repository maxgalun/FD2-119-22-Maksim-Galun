"use strict";

function buildWrapper(tag) {
   return function (str, property) {
      const mnemonics = {
         "&": "&amp;",
         "<": "&lt;",
         ">": "&gt;",
         "'": "&apos;",
         '"': "&quot;",
      };

      Object.entries(mnemonics).forEach((element) => {
         str = str.replaceAll(element[0], element[1]);
         Object.entries(property).forEach((item) => {
            property[item[0]] = item[1].replaceAll(element[0], element[1]);
         });
      });

      property = Object.entries(property)
         .reduce((acc, current) => acc + `${current[0]}='${current[1]}' `, "")
         .trim();

      return `<${tag} ${property}>${str}<${tag}>`;
   };
}

const wrapP = buildWrapper("P");
console.log(wrapP("СТИХИ", { align: "center", title: "M&M's" }));
