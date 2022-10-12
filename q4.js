/*
Q4. Carefully check the example below:
*/

const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
    for(let i=0; i<arr.length; i++){
        fn(arr[i]);
    }
}
function argFn (name){
    console.log("Hello " + name );
}
useFunction(names,argFn);

/*
a)What will be the output of this program ?
Ans:
Hello John
Hello Tina
Hello Kale
Hello Max

b)Which function is a Higher Order function here ?
Ans:  useFunction is a Higher Order function.
*/

