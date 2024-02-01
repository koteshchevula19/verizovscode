// function calls and variable declarations is going to move to te top

//let x,test()

// console.log(x);
// let x=10;
const y=10;
function test(){
    
    var x=10    ;
    while(x>=1){
        let z=2;
        console.log(x);
        // console.log(z);
        --x;
    }
    console.log(z);
    console.log("hey hello");
    console.log(x);  //10
   
    console.log(y);

}
function rep(){
    console.log("Hey Whats'up");
}
test();
rep();