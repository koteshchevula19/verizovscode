import { useNavigate } from "react-router-dom"

let Product = () => {

    const navigateToEdit=useNavigate()
    const navigateToInfo=useNavigate()
    const navigateToDel=useNavigate()

    return (
        <div>

            <div className="container-fluid">

                <div className="row">

                    {/* <div className="col"> */}
                        <table>
                            <thead><th colSpan={3}>Products Table</th></thead>
                            <tbody>
                                <tr><th>Name</th>
                                <th>Product-Id</th>
                                <th>Actions</th>
                                </tr>
                                <tr>
                                    <td>---</td>
                                    <td>101</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>102</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>103</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>104</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>105</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>106</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>107</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>108</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>109</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                                <tr>
                                    <td>---</td>
                                    <td>110</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=>navigateToEdit('/edit')}>Edit</button>
                                    <button type="button" class="btn btn-info" onClick={()=>navigateToInfo('/info')}>Info</button>
                                    <button type="button" class="btn btn-danger" onClick={()=>navigateToDel('/del')}>Delete</button></td>
                                </tr>
                                
                            </tbody>

                        </table>

                    {/* </div> */}
                </div>
            </div>




        </div>
    )
}
export default Product