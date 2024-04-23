// Functions
//  A block of code that performs a particular task 
//  and it is isolated from the main code is known as function
//  making function of almost every thing in the production is 
// considered as good practice.

console.log("This is function")

//|-|> this is function keyword 
function sayhello(){
        //|-> this is the name of that function
    console.log("This code is a function and it is needed to call to get output")
    // |--> inside { we  write the code that we want as a function}
}
sayhello()
// |-> to use the function we need to call it.

// Let's make a function for adding two numbers

//           |-|--> these are the parameters that are going to be added 
function add(a,b){
    console.log(a+b)
}
//  |-|--> these will be auto alloted to a and b respectively
add(2,10)
// Now we have make a function that adds 2 numbers
// Now we can use it as many times as we want 🤯
add(100,2)
add(32874,7634) 
// 🚀🚀🚀 that's why we use functions, it helps in reducing code size ,clean code 
// or whatever you think about it 😆