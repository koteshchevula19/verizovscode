// function sayHello() {
//     console.log("Hello world");
// }
// sayHello()
let myName=function() {
    console.log("Hello world!!!!");
}
myName();
let hello=a=>{
    console.log(9*a);
}
let world=b=>9*b;
console.log(world(3));
hello(5);

let sum=(a,b)=>{

    return a+b;
}   
console.log(sum(12,13));

let sub=(a,b)=>{
    return a-b;
}

console.log(sub(12,13));
let mul=(a,b)=>{    
    return a*b;
}

console.log(mul(12,13));
let div=(a,b)=>{
    return a/b;
}

console.log(" Division"+div(12,13));

let max=(a,b)=>a>b?a:b
console.log(max(12,13));
function linearsearch(search) {
    
}
let arr=[1,2,3,4,5,"6",7,8,9,10,11];

console.log(arr);
console.log(typeof arr);

console.log(arr.length);
var search=6;
// for(let i=0; i<arr.length; i++){

//     if(arr[i]===search){
//     console.log(" Element is found at "+ i+" index");
//     break;
//     }
//     else 
//     {
//         if(i==arr.length-1)
//         {
//             console.log("Not Found");
//         break;
//         }
//     }
//     console.log();
// }
console.log(arr.push(search));