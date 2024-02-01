import {useState} from 'react'
import './Funcounter.css'
let FunCounter=()=>{
    const[count,setCount] =useState(0)

   let IncCount=()=>{
        setCount(prevCount=>prevCount+1)
    }
   let  DecCount=(prevCount)=>{
        setCount(prevCount=>prevCount-1)
    }
    let IncCount3=()=>{
       IncCount();
       IncCount();
       IncCount();
    }

    return(
        <div>
            <h1 id="count">value={count}</h1>
            <button className="btn btn-success " onClick={IncCount}>Click Me for Increment</button>
            <button className="btn btn-danger " onClick={DecCount}>Click Me for Decrement</button><br /><br />
            <button className="btn btn-warning " onClick={IncCount3}>Click Me for Increment 3</button>
        </div>
    )

}
export default FunCounter