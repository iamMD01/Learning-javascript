//  supported datatypes and operators in javascript
// 1.Numbers            +
// 2.Strings                -
// 3.Booleans            *
// 4.NULL                   /
// 5.Undefined
// 6.Objects
console.log("this is day 2");

// 1.Numbers
//  In javascript there is only num thing for for all kind of
//  numbers related stuff. No int,double,or etc.
let num = 3;
let num2 = 5.2342;
console.log(num);
//  some basic operation through operators
console.log(num + num2);
console.log(num + num2 + 100);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);

// 2.Strings
const firstName = "MD";
const lastName = "Aaftab Alam";
console.log(firstName + lastName);
// for adding spaces in between them
console.log(firstName + "", lastName);

// 3.Booleans
//  it is basically true and false things or
//  true = 1
//  false = 0
let isLoggedIn = true;
console.log(isLoggedIn);
console.log(isLoggedIn + 50);
//  it will give 51 as true + 50 = 1 + 50 = 51

let isLoggedIn1 = false;
console.log(isLoggedIn1);
console.log(isLoggedIn1 + 50);
//  it will give 50 as false + 50 = 0 + 50 = 50
//  wow amazing 😎

// 4.Null
//  when we don't want to put any values but it's datatypes is anything

let isLastLoggedIn = null;
console.log(isLastLoggedIn);

// 5.Undefined
//  when we want to do nothing with it , it does not have any spaces used
let isLastLoggedIn2 = undefined;
console.log(isLastLoggedIn2);

// 6.Objects
//  in objects we store key value pairs
const person = {
  age: 21,
  firstName: "MD",
  Gender: "Male",
  isLoggedIn: false,
  isLastLoggedIn: null,
};
console.log(person);
// for exessing single property then
console.log(person.age);

// some more interesting things in javascript 😎
// let say there is a string '1'+ '1'
//  what  should be the output of this
//  11 because string concatenate at + but

let a = "1";
let b = "2";
let c = 3;
console.log(a + b);
//  so it concatenated but
console.log("1" + 1);
//  still concatenating and the datatype is string 😁, but
console.log("1" * 1);
console.log("176" * 1);
// now it is become an number , wow
// but
console.log("a" * 1);
// it will give NaN

//  finding types of the datatypes
console.log(typeof person)
//  it will give object
