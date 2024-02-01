import { NavLink } from "react-router-dom"
import Product from "./Product"
import Home from "./Home"
import Search from "./Search"

let Navbar=()=>{
    return (
        <div>
            <nav>
                <NavLink to='/' element={<Home />} className='home'>Home</NavLink>
                <NavLink to='/products' element={<Product /> } className='product'>Products</NavLink>
                {/* <NavLink to='' element={<P/>}></NavLink> */}
                <NavLink to='/search' element={<Search /> } className='search'> 
                <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form></NavLink>
              
            </nav>
        </div>
    )
}
export default Navbar