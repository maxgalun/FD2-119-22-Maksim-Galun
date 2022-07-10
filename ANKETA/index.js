"use strict";

const malePensionAge = 63;
const femalePensionAge = 58;
const ageLimit = 120;

function isEmptyStr(str) {
   return !str?.trim();
}

function proper(str) {
   return str.trim()[0].toUpperCase() + str.trim().substring(1).toLowerCase();
}

function getFIO(propStr) {
   let prop;
   for (;;) {
      prop = prompt(`Укажите ${propStr}`);
      if (!isEmptyStr(prop)) break;
   }
   return proper(prop);
}

function getAge() {
   let age;
   for (;;) {
      age = prompt("Укажите возраст");
      if (
         !isEmptyStr(age) &&
         !isNaN(age) &&
         Number.isInteger(+age) &&
         +age < ageLimit
      )
         break;
   }
   return +age;
}

function isPensioner(isMale, age) {
   return (isMale && age >= malePensionAge) ||
      (!isMale && age >= femalePensionAge)
      ? true
      : false;
}

const surname = getFIO("фамилию");
const name = getFIO("имя");
const patronymic = getFIO("отчество");
const age = getAge();
const isMale = confirm("Ваш пол - мужской?");

alert(`ваше ФИО: ${surname} ${name} ${patronymic}
ваш возраст в годах: ${age}
ваш возраст в днях: ${age * 365}
через 5 лет вам будет: ${age + 5}
ваш пол: ${isMale ? "мужской" : "женский"}
вы на пенсии: ${isPensioner() ? "да" : "нет"}`);