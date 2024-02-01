import { useState } from "react";

const User2 = () => {
    // const [name,setName]=useState(" ");
    // const [id,setId]=useState(" ");
    // const [empType,setEmpType]=useState(" ");
    const [myForm, setMyForm] = useState({
        name: " ",
        id: " ",
        empType: " ",
        gender: " ",
        language: []
    })
    // const [lang,seLang]=useState({rlang:[]})
    // const arr=["red","green","yellow"];
    // const[one,two,three] = arr;  // object destructuring one:"red" and two:"green" and three:"
    const lang = [];
    const handleSubmit = (e) => {
        e.preventDefault();
        // let name = e.target.uName.value;
        // let id = e.target.uId.value;
        // let empType = e.target.empType.value;
        // setName(name);
        // setId(id);
        // setEmpType(empType);
        // console.log(name,id,empType);
        setMyForm({
            name: e.target.uName.value,
            id: e.target.uId.value,
            empType: e.target.empType.value,
            gender: e.target.gender.value,
            language: lang,
        })
        // console.log(e.target.lang);

    }

    let lChange = (e) => {
        //seLang(lang,{[e.target.name]:e.target.value})
        let isChecked = e.target.checked
        if (isChecked) {
            let arrval = e.target.value
            if (!(arrval.includes(lang))) {
                lang.push(e.target.value);
            }
        }
        console.log(lang);
    }

    return (
        <div>

            <fieldset>
                <legend>Employee Details</legend>
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Enter Name:</td><td></td>
                                <td>
                                    <input type="text" name="uName" placeholder="Enter name" /></td></tr>
                            <tr>
                                <td>User Id:</td><td></td>
                                <td>
                                    <input type="text" name="uId" placeholder="Enter id" /></td> </tr>
                            <tr> <td>Select an Option</td><td></td>
                                <td><select name="empType" >
                                    <option>Select an option</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Student">Student</option>
                                    <option value="Full Time">Full time</option>
                                </select></td></tr>
                            <tr>

                                <td><label>Languages Known</label></td><td></td>

                                <td><input type="checkbox" name="rlang" value="English" onChange={lChange} />English
                                    <input type="checkbox" name="rlang" value="Tamil" onChange={lChange} />Tamil
                                    <input type="checkbox" name="rlang" value="Telugu" onChange={lChange} />Telugu</td>
                            </tr>
                            <tr>

                                <td>Select Gender :</td>
                                <td id="radio1">
                                    <input type="radio" name="gender" value="male" />Male
                                    <input type="radio" name="gender" value="female" />Female
                                </td>
                            </tr>
                            <tr >
                                <td colSpan={5}>
                                    <input type="submit" value="Submit" class="btn btn-success" /></td>
                            </tr>
                        </tbody>
                    </table>

                </form >
            </fieldset>
            {/* <h2>Your name is :{myForm.name}</h2>
            <h2>Your id is :{myForm.id}</h2>
            <h2>Your empType:{myForm.empType}</h2>
            <h2>Your Gender :{myForm.gender}</h2>
            <h2>Your Languages :{myForm.language}</h2> */}
        </div>
    )

}
export default User2;