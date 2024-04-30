/* In functional programming, function composition is a powerful technique that allows developers to 
combine multiple functions into a single function. This compositional approach promotes code reuse, 
modularity, and readability. In JavaScript, the compose function plays a central role in enabling 
function composition.*/

// for example 🖐🏻🖐🏻🖐🏻 we have a function for adding 2 num. and then the result of that 2 nums. is to be
// sqaured

function add(a, b) {
  return a + b;
}
function squared(val) {
  return val * val;
}

function multiply(a, b) {
  return a * b;
}

const addresult = add(2, 4);
console.log(squared(addresult));

// let see it in compose function

function compose2function(fun1, fun2) {
  return function (a, b) {
    return fun2(fun1(a, b));
  };
}
const task = compose2function(multiply, squared);
console.log(task(2, 4));

// 🤯🤯🤯

// Modern js code for composition function

const c2f = (fun1, fun2) => (a, b) => fun2(fun1(a, b));
const task1 = compose2function(multiply, squared);
console.log(task1(6, 4));
// 😎😎😎

function multiply1(args) {
  return args[0] * args[1];
}

function squared1(val) {
  return val[0] * val[1];
}

// unlimited composed functions
//        |-----|--> this will take unlimited arguments
function unlimitedcompose(...fns) {
  return function (...values) {
    return fns.reduceRight((a, b) => b(a), values);
  };
}

// in mordern js format
const unlimitedcompose1 =
  (...fns) =>
  (...values) =>
    fns.reduceRight((a, b) => b(a), values);

const task2 = unlimitedcompose(multiply1);
console.log(task2(5, 7));

const task3 = unlimitedcompose1(multiply1);
console.log(task3(6, 6));
