/* Loops in javascript
 As it name suggests that loops are those things that helps us to do repetitive
 tasks in our code

 In javascript, at basic level we have 3 types of loops they are
 FOR - WHILE - DO WHILE
*/

/* FOR LOOPS:- if we exactly know that how many time we have to use that looping
//             than we will use for loops
    |------------------------| -> initializing the loop */
for (let i = 1; i <= 10; i = i + 1) 
/*       i = 1 -> start from 1
         i <= 10 -> upto 10
       i = i+1 -> add +1 every next time upto 10.
*/
{
  console.log("sam " + i);
}

// While loop
/* when we know the condition but we don't know the that how much iterations 
   it will take or time is unknown.
*/

/*
like for example if we had to go to the school or home, we know that we will stop
when we reach to the school or home, but we don't know that how many steps we 
requires to get there.
*/

let startposition = 0 /* our starting point is 0 */
let endposition = 15 /* let say our destination is 15 km away */

//    |--------------------------| -> 1. Condition 
while(startposition != endposition){
// |---------------------------| -> 2. Run the code
  startposition = startposition+1
  console.log("Step taken " + startposition)
}

// DO WHILE
/**
  Do while is  similar to while loop but there is only one thing is different
  and that is, in while we check the condition first then execute the code, but
  in Do while we run the code then we check the condition 
 */

do {
  startposition = startposition + 1;
  console.log("Step taken " + startposition);
} while (startposition <= endposition);