"use strict";

function myTrim(str) {
   let startIndex;
   let endIndex;
   let pos = -1;

   while (~str.indexOf(" ", pos + 1)) {
      if (str.indexOf(" ", pos + 1) - pos > 1) break;
      pos = str.indexOf(" ", pos + 1);
   }
   startIndex = ++pos;

   pos = str.length;
   while (~str.lastIndexOf(" ", pos - 1)) {
      if (pos - str.lastIndexOf(" ", pos - 1) > 1) break;
      pos = str.lastIndexOf(" ", pos - 1);
   }
   endIndex = pos;

   return str.substring(startIndex, endIndex);
}

console.log("$" + myTrim("  string srting string         ") + "$");
