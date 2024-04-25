/* Array 
 such as numbers or strings, in a contiguous memory location. Each 
  An array is a data structure that stores a collection of elements, 
 element in the array is accessed by its index, which represents its 
 position in the sequence. Arrays are commonly used for organizing 
 and manipulating data in computer programs, providing efficient 
 storage and retrieval of information.*/

const names = ['HEERA','SAMIR','SIMRAN','SATYAM']
console.log(names[0])
// but we can chage the values as well
names[0]= 'JEERA'
console.log(names[0])
// we can manipulate the values inside of array but cannot reinitialize
// the array because of const .

// To add some more values in the end if the array 
names.push('Alex')
console.log(names)

// In javascript we can store anything in array 
const array = [1, true, false, "Hello world", 23.5, "😎"];
console.log(array)
// Amazing 🤯🤯🤯
  
// to get the index value 
console.log(names.push("SIMRAN"))