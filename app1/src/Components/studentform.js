import {useState} from 'react'
let Student=() => {
    const [name,setName]=useState("John Doe")
    let onChangeName=() => {
        setName("John Abraham")


    }
    return(
        <div>
            <h1>Student Details {name}</h1>
            <input type="text" onChange={onChangeName} form='fcontrol'>Student Details</input>
        </div>
    )
    
}
export default Student