import {useNavigate} from 'react-router-dom'
let Delete=()=>{
    const navigateToDelete=useNavigate()
    return (
        <div>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                       <tr><td>EmpName</td>
                         <td>Emp Gender</td>
                         <td>EMp ID</td>
                         <td>Action</td>
                       
                       </tr>
                       <tr>
                         <td>----------------</td>
                        <td>-----------------</td>
                        <td>------------------</td>
                        <td><button className='btn btn-success' onClick={()=>navigateToDelete('/delete')}>Edit</button></td>
                       </tr> 
                    </tbody>
                </table>

        </div>

    )
}
export default Delete