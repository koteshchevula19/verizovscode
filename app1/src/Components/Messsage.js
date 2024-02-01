import {useState} from 'react'
let FunMessage=()=>{
    const[msg,setMsg] =useState("Hello world!")
    return(
        <div>
            <h1>{msg}</h1>
            <button className="btn btn-success " onClick={()=>setMsg("Hey Wake up Man")}>Click Me</button>
        </div>
    )

}
export default FunMessage;