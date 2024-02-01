interface CalciInterface{
    // firstNum: number;
    // secondNum: number;
    add(f: number,s:number):number;
    sub(f: number,s:number):number;
}

let Calculator:CalciInterface={
    add(f,s){
        return f+s;
    },
   sub(f,s){
    return f-s;
   }
}
console.log(Calculator.add(12,13));
console.log(Calculator.sub(12,13));

