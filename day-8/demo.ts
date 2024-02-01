console.log("Starting");
let myName="Kotesh";
console.log(myName);
console.log(typeof myName);

let arr=[1,2,3,4,5,6,7,8,9];

console.log(arr);
arr.shift()
console.log(arr);
// arr[0]="Kotesh";
let object={
    name:"Kotesh",
    age:20,
    esal:50000
}
console.log(object.age, object.name, object.esal);
// object.mobile=true;


function method1(num:number) {
    console.log(10*num);
    
}

method1(10);

let method2=(a,b)=>{
    console.log(a+b);
}

method2(10,20);

let x="Kotesh";
console.log(typeof x);
