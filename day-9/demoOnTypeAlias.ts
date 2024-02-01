type myType=string|number;

type objUser={userName:myType,password:myType}
let x:myType;
x="kotesh";
x=121;

// let we:string|number;
let we:myType;

// let xc:(string|number);
let xc:myType;



let user:objUser;

let myCredentials=(user:objUser)=>{
    // user.userName="kotesh";
    // user.password="Koteshqwerty";
    console.log("my credentials userName: "+user.userName+" password: "+user.password);
    
}
let user1={
    userName: "kotesh",
    password: "Koteshqwerty"

}
myCredentials(user1);