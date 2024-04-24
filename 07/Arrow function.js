// Here is the simlpe function
function hii() {
  console.log("Greet humans");
}
hii();

// but if we want to make this in arrow function then

const hii1 = () => {/* This is the arrow function */
  console.log("Greet again");
};
hii1();

// to set the arguments, then 
const add = (a,b) =>{
    return a+b
}
console.log(add(2123,231))

// one liner function and we use it when we have one line in the body of the function
const add2 = (a,b) => a+b;
console.log(add2(2,6))
 
// Hoisting in javascript (only possible in normal function)

say();
function say(){
    console.log("hii")
}

// as we can see that we calll the function first then make a function
// and it runs perfectly, this is because javascript save the function
// in the memory first then we do what we needed.


// but this is not in the arrow function 

// This keyword
//  in normal function
const obj = {
    value: "sam",
    myfunction:function(){
        console.log(this.value)
    }
}
obj.myfunction()

// so it will print, This function is used for taking things inside of objects

// but in arrow function it's not the case, because arrow function's scope is global function
// by nature so it will take things from the open window of the app or website
 