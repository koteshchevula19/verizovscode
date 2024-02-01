let Edit=()=>{

    return (
        <div>
             <fieldset>
                <legend>Update Form</legend>
            <form>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="cname">Customer Name</label></td>
                            <td><input type='text' id="cname" value="" name="cname" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="cid">CId</label></td>
                            <td><input type='number' id="cid" value="" /></td>
                        </tr>

                        <tr>
                            <td>Password</td>
                            <td> <input type="password" id="password" value="" /></td>
                        </tr>
        
                        <tr>
                            <td>Mobile : +91-</td>
                            <td><input type="number" id="cnum" value=""></input></td>
                        </tr>
         
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="cemail" value=""></input></td>
                        </tr>


                        <tr>

                            <td> <label>Skills:</label></td>
                            <td>C<input name="skill" type="checkbox" value="C" ></input>
                                C++<input name="skill" type="checkbox" value="C++" ></input>
                                Java<input name="skill" type="checkbox" value="Java" ></input>
                                Springboot<input type="checkbox" name="skill" value="Springboot" ></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Gender :
                            </td>
                            <td>Male<input type="radio" name="gender" id="gender1" value="Male" />
                                Female<input type="radio" name="gender" id="gender2"  value="FeMale" />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>Select a State</td>
                           <td>
                            <select id="state" name="state" >
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
            </fieldset>
        </div>

    )

}
export default Edit