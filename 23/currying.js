// Currying in JavaScript
/* */

function add(a, b, c) {
  return a + b + c;
}
console.log(add(2, 5, 6));

// so from the above example we can see that there are
// parameter to be solved to get the final output.

// 🔴🔴🔴 but what if there is a situation where we have to
// solve all the parameters then give the output like automated
// email server. where we have to put recivers address,
// subjects and body. without one of then the program will
// not work .

// 🟢🟢🟢 thats where currying comes for the help.

function add1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add1(2)(5)(7));

// here we have curryed a,b and c until we get there
// parameter to solve .

// 🚀🚀🚀 here is one one of the real world example.
// for sending automated emails

function sendautoemail(to) {
  return function (subject) {
    return function (body) {
      console.log(`Sending email to ${to} with subject ${subject}: ${body}`);
    };
  };
}
let step1 = sendautoemail("test@gmail.com");
let step2 = step1("New order confirmed");

step2("Hey there, order confirmed");
