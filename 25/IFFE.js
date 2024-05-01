// IFFE - Immediately invoked function expression
(function add(a, b) {
  console.log(a + b);
})(3, 7);

// modern implimentation in js
(() => console.log("this is modern method "))();

//
const value = (() => 100)();
console.log(value);
// see mdn docs and  video 27
