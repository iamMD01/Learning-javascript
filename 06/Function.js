// Functions
//  A block of code that performs a particular task
//  and it is isolated from the main code is known as function
//  making function of almost every thing in the production is
// considered as good practice.

console.log("This is function");

//|-|> this is function keyword
function sayhello() {
  //|-> this is the name of that function
  console.log("This code is a function and it is needed to call to get output");
  // |--> inside { we  write the code that we want as a function}
}
sayhello();
// |-> to use the function we need to call it.

// Let's make a function for adding two numbers

//           |-|--> these are the arguments that are going to be added
function add(a, b) {
  console.log(a + b);
}
//  |-|--> these will be auto alloted to a and b respectively
add(2, 10); /* the value we put inside is parameters */

// Now we have make a function that adds 2 numbers
// Now we can use it as many times as we want 🤯
add(100, 2);
add(32874, 7634);
// 🚀🚀🚀 that's why we use functions, it helps in reducing code size ,clean code
// or whatever you think about it 😆

// function of multiplication
function multiple(a, b) {
  console.log(a * b);
}
multiple(243, 234);

// 🔴🔴🔴 but this is not a good practice in production at all
// for this to be more useful
function add1(a, b) {
  return a * b;
//   we will console log out side from the main block of code
}
let a = add1(231,232)
console.log("The addition of the numbers are",a)

//  🤚🤚🤚 or

function add2(a,b,c){
    let ans = a+b+c;
    return ans;
}
let b  = add2(12,123,3)
console.log("The addition of a,b,c is",b)
// or we can directly console.log like
console.log(b)

// 🟢🟢🟢 so this will be more useful for implementing in the production 
// we can do what we want like to print, to give it to user, because our
// function has computed the task and now it is upto us , what to od with it. 

// making  a function that adds infinite no. of arguments
function addmany(){
    let ans = 0
    // making a for loop for adding the arguments
    //          |-> length of the argument and then add by +1 each time(from indexing)
    for(i= 0;i<arguments.length;i++){
        // add ans to arguments of i 
        ans = ans+arguments[i]
    }
    return ans

}
let result = addmany(23,32,1,21,34,3434,54,523,443,53)
console.log(result)

