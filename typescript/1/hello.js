"use strict";
function greet(person, date) {
    console.log("\u00A1Hola " + person + ", hoy es " + date.toDateString() + " y ma\u00F1ana " + date + "!");
}
greet("Brendan Fraser", new Date());
var user = {
    name: "Daniel",
    age: 26,
};
console.log(user.name, ", tiene: ", user.age, " años"); // returns undefined
