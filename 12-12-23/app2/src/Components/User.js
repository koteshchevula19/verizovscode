import React, { useState } from 'react';

let User = () => {

    const [myname, setName] = useState("")
    const [myid, setid] = useState("")
    const [mypassword, setpassword] = useState("")
    const [mymobile, setmobile] = useState("")
    const [myemail, setemail] = useState("")
    const [mylang, setlang] = useState({skill:""})
    const [mygender, setgender] = useState("")
    const [mystate, setstate] = useState("")
    let cName = (e) => {

        setName(e.target.value)
        console.log("entered Name " + myname);


    }
    let cId = (e) => {
        setid(e.target.value)
        console.log(myid);
    }
    let cPassword = (e) => {
        setpassword(e.target.value)
        console.log(mypassword);

    }
    let cMobile = (e) => {
        setmobile(e.target.value)
        console.log(mymobile);
    }



    let cEmail = (e) => {
        setemail(e.target.value)
        console.log(myemail);
    }

    let cLanguage = (e) => {
        setlang({...mylang, [e.target.name]: e.target.value})
        console.log(mylang);

    }

    let cGender = (e) => {
        let radio = e.target.value
        if (radio) {
            setgender(e.target.value)
            console.log(mygender);
        }
    }

    let cState = (e) => {

        setstate(e.target.value);
        console.log(mystate);
    }
    return (
        <div>
            <form>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="cname">Customer Name</label></td>
                            <td><input type='text' id="cname" value={myname} name="cname" onChange={cName} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="cid">CId</label></td>
                            <td><input type='number' id="cid" value={myid} onChange={cId} /></td>
                        </tr>

                        <tr>
                            <td>Password</td>
                            <td> <input type="password" id="password" value={mypassword} onChange={cPassword} /></td>
                        </tr>
        
                        <tr>
                            <td>Mobile : +91-</td>
                            <td><input type="number" id="cnum" value={mymobile} onChange={cMobile}></input></td>
                        </tr>
         
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="cemail" value={myemail} onChange={cEmail}></input></td>
                        </tr>


                        <tr>

                            <td> <label>Skills:</label></td>
                            <td>C<input name="skill" type="checkbox" value="C" onChange={cLanguage}></input>
                                C++<input name="skill" type="checkbox" value="C++" onChange={cLanguage}></input>
                                Java<input name="skill" type="checkbox" value="Java" onChange={cLanguage}></input>
                                Springboot<input type="checkbox" name="skill" value="Springboot" onChange={cLanguage}></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Gender :
                            </td>
                            <td>Male<input type="radio" name="gender" id="gender1" onClick={cGender} value="Male" />
                                Female<input type="radio" name="gender" id="gender2" onClick={cGender} value="FeMale" />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>Select a State</td>
                           <td>
                            <select id="state" name="state" onChange={cState}>
                                <option>None</option>
                                <option></option>
                                <option value="Telangana" >Telangana</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Tamilnadu" >Tamilnadu</option>
                                <option value="Punjab" >Punjab</option>
                                <option value="Ap" >Ap</option>
                            </select>
                           </td>

                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="submit" className='btn btn-success' />
                            </td>
                        </tr> 
                    </tbody>


                    <tfoot></tfoot>
                </table>
            </form>
        </div>
    )
}

export default User;