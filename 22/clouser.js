/* A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). In other 
words, a closure gives you access to an outer function's scope from an inner 
function. In JavaScript, closures are created every time a function is created, 
at function creation time. */

function init() {
  var name = "MD";
  function displayNmae() {
    console.log(name);
  }
  return displayNmae;
}
let a = init();

a();
a();
a();

