const vowels = new Map([
  ["a", "a"],
  ["e", "e"],
  ["i", "i"],
  ["o", "o"],
  ["u", "u"],
]);
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/*
Me parecio lo mas correcto usar un mapa que un objeto como el de de este ejemplo
const vowels = { a: "a", e: "e", i: "i", o: "o", u: "u" };*/
module.exports = { vowels, numbers };
