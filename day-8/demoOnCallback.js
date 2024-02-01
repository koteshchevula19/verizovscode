let sayHello = (name)=>{
    console.log("Hello"+" "+name);
}

let callSayHello = (Hello)=>{
    let myName = "Kotesh"
   Hello(myName);
}

callSayHello(sayHello);

let evenfunction=(checkeven)=>{
    let number1=14;
    checkeven(number1)
}
evenfunction(number=>console.log((number%2==0?"even":"odd")));
    // if(number%2==0){
    //     console.log(number+" is even");
    // }else{
    //     console.log(number+" is odd");
    // }
    
// });

let fact=number=>{
    if(number==0){
        return 1;
    }
    return number*fact(number-1);  
}
console.log("The factorial of  "+fact(6));

let power=(number,power)=>{
    let value=1
    for(let i=1;i<=power;i++){
       value=value* number;
    }
    console.log(value);
}
power(2,5)
