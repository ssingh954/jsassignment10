/*
Q3. example of a Higher Order function and a call back function

*/

// calculator

function add(a,b){
    return a+b;
}
//console.log(add(5,6));

function subs(a,b){
    return Math.abs(a-b);
}
//console.log(subs(5,6));

function mult(a,b){
    return Math.abs(a*b);
}

//master function HOF
function calculator(num1,num2,operator){ // calculator is HOF
    return operator(num1,num2);
}

console.log(calculator(5,6,add)); // add is Callback functions
console.log(calculator(5,6,mult)); // mult is Callback functions