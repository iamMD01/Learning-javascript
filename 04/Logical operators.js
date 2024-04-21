// Learning about Logical operators
// Logical operators
// This is basically 3 LO they are AND - OR - NOT

// AND(&&):- Fulfill all the conditions like
//      we go to the shop and we had a list of multiple items
//      like take this and this and so on . Here we have to fulfill
//      all the conditions to get the job done.

// OR(||):- Fulfill atleast one conditions like
//      we go to the shop and we had a list of multiple items
//      like take this and this or if this item is not in the store
//      then take other one.

// NOT(!):- Making true to false and false to true.

// const store = "Grocery";
// const

const age = 20;
const gender = "male";
//                       |---> this is equal to
if (age >= 18 && gender == "male") {
  // |----> this is AND
  // know here && is used for when the both condition is being true
  console.log("You are adult male");
}
// but if only one is true then nothing will print in the console.

//  single = is used for assigning the value.
//  but == is used for checking the value is equal to or not.

const age1 = 20;
const gender1 = "male";
//                       |---> this is equal to
if (age >= 18 || gender == "female") {
  // |----> this is OR
  // know here || is used for when atleast one of them are true
  console.log("You are adult female");
}
// but if only one is true then nothing will print in the console.

const number = 5;
if (number % 2 != 0) {
  console.log("Odd");
}
// we can do it also like
// if (!(number % 2 == 0)) {
//   console.log("Even");
// }
