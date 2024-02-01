import { useParams } from "react-router-dom"

let Userinfo=()=>{

    const params=useParams()
    const userId=params.userId
    return<div>
            <p>This is user-{userId}</p>
    </div>

}
export default Userinfo