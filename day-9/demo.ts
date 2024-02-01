let nums=[12,34,56,65,92,80]; // implicit type
console.log(nums);
nums.push(12);
// nums.push("Kotesh");
console.log(nums);

let names=["amit","bala","cherry","surin"];
console.log(names);
// names.push(78);

let mixedArray=["amit","bala","cherry","surin",23,45,65,92,80,true];
console.log(mixedArray);
mixedArray.push(12);
mixedArray.push("Kotesh");
console.log(mixedArray);
mixedArray.push(true)

let emp={
    ename:"kotesh",
    eId:101,
    eSal:500000
}
console.log(emp);
console.log("emp Id is"+emp["eId"]);
console.log(emp.ename+" "+emp.eId+" "+emp.eSal);



let name1:string="kotesh" ;  // explicit type of declaring variables 
// name1 = "Kotesh Chevula";
// name1 = 23;
let age1:number;
age1 =23;
// age1="Kotesh";
console.log(age1);

let flag:boolean;
flag = true;
console.log(flag);

let strArray:string[]; //declaration
// let strArray1:string[] =[] // declarations and initialization

strArray = ["amit","bala","cherry","surin","koti","pandu","dubbi","puppy","chnna"];

//  strArray[0]=23; Type 'number' is not assignable to type 'string'

console.log(strArray);
console.log(strArray[0]);
console.log(strArray[1]);
console.log(strArray[2]);
console.log(strArray[3]);

let newmixedArray1 :(string|number|boolean|null|undefined)[]=[];
newmixedArray1.push("Kotesh");
newmixedArray1.push(23);
newmixedArray1.push(true);
newmixedArray1.push(false);
newmixedArray1.push(null);
newmixedArray1.push("Chevula");

let id:(string|number|boolean);
id=false;
console.log(id);
id=121;
console.log(id);
id="Chevula Kotesh";
console.log(id);


let customer1:object;

customer1={

    customerName:"Kotesh",
    customerId:101,
    customerSal:500000,
    cMobile:"630373814"

}

let customer2:object;

customer2={

    customerName:"Kotesh",
    customerId:101,
    customerSal:500000,
    cMobile:"630373814"

}

let cu:object[]=[customer1, customer2];
console.log(cu);

let id1=121;
// id1="Bhava";

// Datatype any

let cusID:any;

cusID=121;
console.log(cusID);
cusID="Hey you";
console.log(cusID);

let anyArr:any[]=[];
anyArr.push(customer1);
anyArr.push(customer2);
anyArr.push(121);
anyArr.push("Hello");
console.log(anyArr);

let anyObj:{
    objName:any,
    objId:any,
    objSal:any
}

anyObj={objName:"Kotesh", objId:121,objSal:12345};

let obj2:any;
obj2={
    obj2Name:"Kotesh",
    obj2Id:121,
    obj2Sal:12345
}
obj2=121;
obj2="String";
console.log(obj2);









