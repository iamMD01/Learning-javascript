//  Learning about conditional statements and switch cases
// conditional statements
//  this is  basically if and else this

const age = 29;
if (age >= 80) {
  console.log("You are not eligible for voting cuz u are an sinior citizen");
} else if (age >= 18) {
  console.log("You are eligible for voting");
}
// we can use multiple else if here
// there will be only one else and one if
// inside it there can be any amount of else if
else {
  console.log("You are not eligible for voting");
}

// ternary operator
// if we have exactly two condition like true or
// false then we can use ternary operator
// for an example if we have
const age1 = 18;
if (age1 >= 18) {
  console.log("yes");
} else {
  console.log("no");
}
// but we can do it like
age1 >= 18 ? console.log("yes") : console.log("no");
//         |-> this is ternary  |--> this is else
// this type of operator is useful when we have
// exac yes or no

// switch statement
// you know, when we call on some helpline no. then
// we get some options like change laguages , talk
// about other options and so on .
// So behind we use switch statements like things
//  for example :-

const option = 1;
switch (option) {
  case 1:
    {
      console.log("You are in case 1");
    }
    break;
  // if breake is not there then switch
  // will print all the things after the
  // passed options
  case 2:
    {
      console.log("You are in case 2");
    }
    break;
  case 3:
    console.log("You are in case 3");
    break;
  //this default selection is for if we enter those cases which is not there
  //then we can get something like that , if default is not used then it will
  //print nothing .
  default:
    console.log("Invalid option");
}

const a = 20;
let opt = "-";
const b = 50;

switch (opt) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
  // and so on
}
