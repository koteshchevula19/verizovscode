import ImageSlide from "./Imageslide";
import { useState } from "react";

let Toggle=()=>{
    const [toggle,setToggle]=useState(false);

    let toggleButton=()=>{
        setToggle(!toggle)
    }

    return(
        <div>
            <button onClick={toggleButton}>{toggle?"Hide":"Show"}</button>
            {toggle?<ImageSlide />:<h3>Nothing to show</h3>}
        </div>
    )


}
export default Toggle