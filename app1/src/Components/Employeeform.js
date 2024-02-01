import { Component } from 'react'
import './Employeeform.css'
class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eName: "",
            ePassword: "",
            ecnfpassword: "",
            eMail: "",
            eId: "",
            eSal: "",
            eGender: "",
            ePhone: "",
            eDesignation: "",
            // eSkills: []

        }

    }

    Selecting = (event) => {
        this.setState({
            eDesignation: event.target.value
        },
            () => {
                console.log("Designation " + this.state.eDesignation);
            });
    }

    Submitting = (event) => {
        event.preventDefault();
        alert("Designation " + this.state.eDesignation)
    }

    render() {

        return (
            <div>
                <fieldset className="fieldset">
                    <legend>Employee Details</legend>
                    <form onSubmit={this.Submitting}>
                        <table>
                            {/* <tr>
                                <td>Employee Name</td>
                                <td><input type="text" value={this.state.eName} onChange={this.onChangeName} autoFocus /></td>
                            </tr> */}
                            {/* <tr>
                                <td>Employee Password</td>
                                <td><input type="password" value={this.state.ePassword} onChange={this.onChangePassword} /></td>
                            </tr>
                            <tr>
                                <td>Confirm Password</td>
                                <td><input type="password" value={this.state.ecnfpassword} /></td>
                            </tr>
                            <tr>
                                <td>Employee Email</td>
                                <td><input type="email" value={this.state.eMail} onChange={this.onChangeEmail} /></td>
                            </tr>
                            <tr>
                                <td>Employee ID</td>
                                <td><input type="text" value={this.state.eId} onChange={this.onChangeId} /></td>
                            </tr>
                            <tr>
                                <td>Employee Salary</td>
                                <td><input type="text" value={this.state.eSal} onChange={this.onChangeSalary} /></td>
                            </tr>

                            <tr>
                                <td>Employee Gender</td>
                                <td><input type="radio" name="gender" value={this.state.eGender} onChange={this.onChangeGender} id="male" required />Male</td>
                                <td><input type="radio" name="gender" value={this.state.eGender} onChange={this.onChangeGender} id="female" required />Female</td>
                            </tr>

                            <tr>
                                <td>Employee Phone</td>
                                <td><input type="tel" value={this.state.ePhone} onChange={this.onChangePhone} pattern='[6-9]{1}[0-9]{9}' name="ephone" /></td>
                            </tr> */}

                            <tr>
                                <td>Employee Designation</td>
                                <td><select >
                                    <option>Select an option</option>
                                    <option value={this.state.eDesignation} onChange={this.Selecting} >Developer</option>
                                    <option value={this.state.eDesignation} onChange={this.Selecting} >HR</option>
                                    <option value={this.state.eDesignation} onChange={this.Selecting}>L&D</option>
                                </select></td>

                            </tr>
                            <tr>
                                <td>Skillset</td>
                                <td><input type="checkbox" name="skills" value="Java">Java</input></td>
                                <td><input type="checkbox" name="skills" value="C++">C++</input></td>
                                <td><input type="checkbox" name="skills" value="Oracle">Oracle</input></td>
                            </tr>


                            <tr>
                                <td>
                                    <input id="button" className='btn' type="submit" value="Submit" />
                                </td>
                            </tr>

                        </table>
                    </form>


                </fieldset>
            </div>
        )




    }

}
export default Employee