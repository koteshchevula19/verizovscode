import { EmployeeSal } from "./EmpSalCalculator";
export class Employee{
    empName: string
    empId: number
    empSal: number
    constructor(empName:string,empId:number,empSal:number){
        this.empName=empName;
        this.empId=empId;
        this.empSal=empSal;
    }
    calculateSalary(empsal:number){
        if(empsal>50000)
        return empsal*1.1;
    else
    return empsal*1.05;
    }
}