import { useNavigate } from "react-router-dom"

let Homepage=()=>{

        const navigate=useNavigate();
                        

        

    return(
        <div>
            <h4>You are in the Home Page</h4>
            <button onClick={()=>navigate('/about')}>Click Me to Know more </button>
        </div>
    )
}

    export default Homepage