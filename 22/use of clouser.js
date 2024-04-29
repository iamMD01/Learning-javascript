function adder(num){
    function add(b){
        console.log(num+b)
    }
    return add
}
const addto5 = adder(5)
const addto20 = adder(20)

// when we addto(some munber) it will add it to 5 
addto5(10) /* it will give 15 */
addto5(90)
addto20(1)