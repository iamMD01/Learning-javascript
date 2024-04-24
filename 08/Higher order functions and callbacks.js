// A higher order function is a function that takes a function as an arguments.

//           |--|---|--> these are the arguments,
function add(a, b, cb) {
  const result = a + b;
  // |--> cb is the callback
  cb(result);
}
// These add function is a higher order function
add(3, 8, function (val) {
  console.log(val);
});

//          or we can do it like that
function add2(a, b, cb) {
  let result1 = a + b;
  cb(result1);
}

function showResult(result1) {
  console.log(result1);
}
add2(32, 234, showResult);

//      and like that as well in arrow function

function add3(a, b, cb) {
  let result1 = a + b;
  cb(result1);
}
add3(42, 234,(val)=>console.log(val));

// These things are used when our function will take some time to do it stuff 
// for that things we use callbacks as if the result is avialable and then we can 
// console.log it as well. 