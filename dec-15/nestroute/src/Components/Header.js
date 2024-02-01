import {NavLink} from 'react-router-dom'
import HomePage from './Homepage'
import Userpage from './Userpage'
let Header=()=>{

    return (
        <div>

            <nav>

                <NavLink to='/' element={<HomePage />}> Home  </NavLink>
                <NavLink to='/user' element={<Userpage />}>User </NavLink>
                

            </nav>



        </div>
    )
}
export default Header