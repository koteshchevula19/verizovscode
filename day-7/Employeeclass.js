class Employee{
    constructor(ename,eage,eid,esal){
        this.ename=ename;
        this.eage=eage;
        this.eid=eid;   
        this.esal=esal;
    }
}
//     display(){
//         console.log(this.ename,this.eage,this.eid,this.esal);
//     }

//     show(){
//         console.log("Hey This is "+this.ename,this.eage,this.eid,this.esal);
        
//     }
    
// }
// const employee=new Employee("Kotesh",24,101,100000)
// employee.display();
// employee.show();
// console.log("EmpName : "+employee.ename);
// function getDetails(params) {
//     document.write("<h4> Employee Name :</h4>"+employee.ename);
//     document.write("<h4> Employee Name :</h4>"+employee.eage);
//     document.write("<h4> Employee Name :</h4>"+employee.eid);
//     document.write("<h4> Employee Name :</h4>"+employee.esal);
//     document.write(`<h3> Employee Name :</h3>`)
//     document.write(`<h4> Employee Name :</h4>"+employee`)
//     document.write(`<h3> Employee Name :</h3>${employee.ename}`)
//     document.write(`<h4> Employee Name :</h4>${employee.ename}`)
// }
function showemployee(name,id,sal){
    console.log(name);
    console.log(id);
    console.log(sal);
}
function insertEmp(name,id,sal) {
    this.name = name
    this.id = id
    this.sal = sal
    showemployee(name,id,sal)
}
