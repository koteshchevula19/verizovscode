import Crud from "./crud"
import User2 from "./customer"
import {Link} from 'react-router-dom'

let Header=()=>{
    return(
        <div>
            <nav>
                <Link to='/' element={<Crud />} className="navitem active">Crud</Link>
                <Link to='/user' element={<User2 />} className="navitem">User</Link>
            </nav>
        </div>
    )
}
export default Header