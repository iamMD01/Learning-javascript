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
