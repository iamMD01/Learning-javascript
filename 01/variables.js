//  in javascript we have three ways to declare variables in javascript
//  var, let & const
var age = 50;
console.log(age);

var age = "dcs"
console.log(age);

//  some cool property of var 
//  scope of var is global
if (true){
    var Vname = "MD"
    // so the name variable should be inside the if statement like
    console.log(Vname)
    // but we know that var have global scope so we can print this 
    // variable outside of the statement like
}
console.log(Vname)
// likethat
//  soo in var we can 
//  1 . it is global
//  2 . it cab be reassign 

// let  it is 
// 1. it is local 
//  2. it can be also reassign


if (true){
    let a= 500
    console.log(a)
    //  we can reassign that as well like
    a = 20
    console.log(a)
}

//  cost = i guess its stands for constant
//  we can do things like that in const
// 1. it is local
// 2. it  cannot be reassigned
//  we have to initialize the value in first step

if (true){
    const d = 30
    console.log(d)
}