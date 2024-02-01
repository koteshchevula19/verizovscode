const intervalId = setInterval(() => {
    console.log('This message is repeated every 2 seconds');
}, 2000);

// Clear the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval cleared after 12 seconds');
}, 20000);
console.log("IntervalId :"+intervalId);
let arr=[1,2,34.5,9];
// for(let i of arr){

//     console.log(i);
// }
let count=1
arr.forEach(val=>{
     console.log(val)
     console.log("count :"+ count++);

});

const intervalId1 = setInterval(() => {
    console.log('This message is repeated every 2 seconds');
}, 2000);

// Clear the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId1);
    console.log('Interval cleared after 12 seconds');
}, 20000);
console.log("intervalId1 :"+ intervalId1);