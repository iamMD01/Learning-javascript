const myarray = [2.3, 2, true, false, "🤯", "Hello world"];
console.log(myarray[0]);
// This is simple array

// now some cool things
myarray.forEach((val) => console.log(val +" d"));


myarray.map((val) => console.log(val))
// .map return a new array each time  

const numbers = [1,2,3,4,5,6,7]
numbers.forEach((val) => console.log(val*2))
// but in .map
numbers.map((val) => console.log(val*2)) 