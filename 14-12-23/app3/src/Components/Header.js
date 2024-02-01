import About from "./About"
import Homepage from "./Homepage"
import Userpage from "./User"
import { NavLink } from 'react-router-dom'

let Header=()=>{

    const applyStyle=({isActive})=>{

        return{
            color:isActive ?"red":"yellow"
            // padding:isActive ?"auto":"red
           
        }

        



    }

    return(
        <div>
  
    <nav>
        {/*<Link to='/' element={<Homepage />} class="navitem">Homepage</Link>
        <Link to='/user' element={<Userpage />}class="navitem">Userpage</Link> */}
        <ul>
            
             <NavLink style={applyStyle} to='/' element={<Homepage />} class="navitem">Home</NavLink>
            <NavLink  style={applyStyle}to='/user' element={<Userpage />} class="navitem">User</NavLink>
            <NavLink  style={applyStyle}to='/about' element={<About />} class="navitem">About</NavLink>
            
        </ul>
    </nav>

    </div>
    )

   
}
export default Header