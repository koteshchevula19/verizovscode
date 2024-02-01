class Student{
    constructor(sname:string,marks:number,subid:number){
        this.sname=sname;
        this.marks=marks;
        this.subid=subid;
    }
   
    sname:string;
    marks:number;
    subid:number;

    

    

}

let s1=new Student("Kotesh",95,101);
let s2=new Student("Keerthi",99,102);
let s3=new Student("Ranjith",98,103);
let s4=new Student("Spandana",99,104);
let s5=new Student("Yasoda",98,105);
let s6=new Student("Rachel",99,106);
let s7=[s1,s2,s3,s4,s5,s6];

var sum=0;
function avgMarks(s7,sumMarks){
    var avg=sumMarks/s7.length;
    console.log("Avg Student Marks"+avg);   
}

function sumMarks(s7){
    for(var i=0;i<s7.length;i++){
        sum=sum+s7[i].marks;
    }
    console.log("Sum of the Marks is "+ sum);
    
    avgMarks(s7,sum);
}
sumMarks(s7);
