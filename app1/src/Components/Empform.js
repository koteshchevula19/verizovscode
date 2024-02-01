import { Component } from 'react'
class EmployeeForm extends Component {
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
            eSkills: [] 
        }
    }
    onChecked=()=>{
        this.setState({
            eSkills: this.state.eSkills.concat(this.state.eSkills)
        })
    }

    submitForm=()=>{
        console.log(this.state.eSkills);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tr>
                            <td><mark>Skillset</mark></td>
                            <td><input type="checkbox" name="skills" value="Java" onChecked={this.onChecked}>Java</input></td>
                            <td><input type="checkbox" name="skills" value="C++" onChecked={this.onChecked}>C++</input></td>
                            <td><input type="checkbox" name="skills" value="React" onChange={this.onChecked}>React</input></td>
                        </tr>
                        <td><input type='submit' value="submit" /></td>
                    </table>
                </form>

            </div>
        )

    }

}

export default EmployeeForm