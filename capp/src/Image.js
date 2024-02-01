
import React, { Component } from 'react'

// import React, { Component } from 'react'

export default class Image extends Component {
    // countnextImg =0;
    // countprevImg=0;
    
    constructor(props) {
      super(props)
        
      this.state = {
        j:this.props.i,
        url: this.props.imageurl[0],
        imgArrayLength: props.imageurl.length,
        // countnextImg :0,
        // countprevImg:0
        
      }
    }
    NextImage=()=>{
       
        this.setState({j:this.state.j+1})
        this.setState({url:this.props.imageurl[this.state.j]})
        // console.log("You clicked prev image "+countnextImg++)
        
       
    }
    PrevImage=()=>{
        this.setState({j:this.state.j-1})
       this.setState({url:this.props.imageurl[this.state.j]})
    //    console.log("You clicked prev image "+countprevImg++);
    }

    render() {
    return (
      <div>
        {this.state.imgArrayLength-1>this.state.j ? <img src={this.state.url} alt="No Image" width={200} height={200}/> :<h1>Hey You Reached the Limit Please Click The neccessary Button</h1>}
        
        <button onClick={this.NextImage}>Next</button>
        <button onClick={this.PrevImage}>Prev</button>

      </div>
    )
  }
}
