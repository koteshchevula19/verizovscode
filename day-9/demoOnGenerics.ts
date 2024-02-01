import { Employee } from "./Employee";
let sayHello=()=>{
    console.log("hello");
    
}

let printParameter=(para:string)=>{
    console.log(para);
}

let printParameter1=(para:string)=>{
    console.log(para);
    
}

function printName<T>(arg:T):T{
    return arg;
}
console.log(printName<string>("Kotesh"));
console.log(printName<number>(12));
console.log(printName<boolean>(true));
console.log(printName<any>(false));
let emp1=new Employee("kotesh",101,234090);
console.log(printName<Employee>(emp1));

class MyClass<Type>{

    arg:Type
    printArg<Type>(arg:Type):void{
        console.log(arg);
    }
}

let StringClass:MyClass<string>=new MyClass<string>();
StringClass.printArg<string>("kotesh");


let NumClass:MyClass<number>=new MyClass<number>();
NumClass.printArg<number>(123);


let EmpClass:MyClass<Employee>=new MyClass<Employee>();
EmpClass.printArg<Employee>(emp1);



