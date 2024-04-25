const myarray = [2.3, 2, true, false, "🤯", "Hello world"];
console.log(myarray[0]);
// This is simple array

// now some cool things
myarray.forEach((val) => console.log(val + " d"));

myarray.map((val) => console.log(val));
// .map return a new array each time

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((val) => console.log(val * 2));
// but in .map
numbers.map((val) => console.log(val * 2));

// now make a new array
let newarr = [];
numbers.forEach((num) => newarr.push(num * 2));
console.log(newarr);

// more eazy one

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
function double(n) {
  return n * 2;
}
// let newarr1 = numbers1.forEach(double)
// but this for each will not return anything

// to return it
let newarr2 = numbers1.map(double);
console.log(newarr2);


// filter even number 
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const newarr3 = numbers2.filter((num) => num%2 ===0)
console.log(newarr3)