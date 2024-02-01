import { Component} from 'react'
class Employee extends Component {
   render() {
     return (
       <div>
         <h1>EmployeeName:{this.props.ename}</h1>
         <h1>Employee Id:{this.props.eid}</h1>
         <h1>Employee Age:{this.props.eage}</h1>
       </div>
     );
     }
}
export default Employee;