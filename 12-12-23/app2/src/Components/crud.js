import {useNavigate} from 'react-router-dom'

let Crud = () => {


        const navigateToCreate=useNavigate();
        const navigateToRead=useNavigate();
        const navigateToUpdate=useNavigate();
        const navigateToDelete=useNavigate();
        

    return (
        <div>
            <div class="d-grid gap-2">
                
                    <button class="btn btn-primary" type='button'   onClick={()=>navigateToCreate('/create')}>Create</button>
                    <button class="btn btn-success" type='button' onClick={()=>navigateToRead('/read')}>Read</button>
                    <button class="btn btn-danger"  type='button' onClick={()=>navigateToUpdate('/update')}>Update</button>
                    <button class="btn btn-warning" type='button' onClick={()=>navigateToDelete('/delete')}>Delete</button>
                   
            </div>
        </div>
    )
}

export default Crud