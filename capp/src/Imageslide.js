import { useState } from "react"

const imgurl=['https://cdn.pixabay.com/photo/2023/09/14/15/54/bird-8253245_1280.jpg','https://cdn.pixabay.com/photo/2023/12/09/21/03/pineapple-8440180_640.jpg','https://cdn.pixabay.com/photo/2023/12/04/15/12/soap-8429699_1280.jpg']
let ImageSlide=()=>{

  
    var [imageindex,setImageIndex]=useState(0)
    const [togglebutton,setToggleButton]=useState(true)

   let nextImg=()=>{
        if(imgurl.length-1>imageindex)
        setImageIndex(imageindex+1)
    else
        setImageIndex(0)
    }
    let prevImg=()=>{
        if(imageindex>0)
        setImageIndex(imageindex-1)
        else
        setImageIndex(imgurl.length-1)
   
    }
   
    let toggle=()=>{
        setToggleButton(!togglebutton);
    }
    return (

        <div>
            {/* Show Image<input type="radio" onClick={toggle} checked={togglebutton} name="toggle" />   
             Hide Image<input type="radio" onClick={toggle} checked={!togglebutton} name="toggle" /> */}

             {/* <button onClick={toggle}>Click to change </button> */}
             <button onClick={toggle}>{togglebutton?"Hide":"Show"}</button>
             <br></br><hr></hr>
            
            
        {togglebutton ?
         <img src={imgurl[imageindex]}  width={200} height={200} /> 
          : <h1> Image is hidden</h1>}
         <br></br> 
        <button onClick={nextImg}>Next</button>
        <button onClick={prevImg}>Prev</button>
        </div>
    )
}
export default ImageSlide