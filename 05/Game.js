// Do while and while for real world test

let num = 10;
let guess = 0;

do {
  guess = parseInt(prompt("Guess the number"));
  if (guess == num) {
    alert("Winner");
    break;
  }
} while (guess != 0);

// this code will run because do while will run the code and then put the condition
// it

// Now lets see it in while

while (guess != 0) {
  guess = parseInt(prompt("Guess the number"));
  if (guess == num) {
    alert("Winner");
    break;
  }
}

// this code will never run because in while condition are checked first then 
// code runs. so, here in while the condition is 0 at the starting of the code 
// and the program will think that it is 0 and it will never run the code.