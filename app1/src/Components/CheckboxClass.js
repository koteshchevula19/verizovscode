import { Component } from "react";
class CheckBoxClass extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            skills:[]=[]
        }
    }

    nameChange=(event)=>{
        this.setState({
            name:event.target.value
           
        })
    }

    checkChange=(event)=>{
        const isChecked=event.target.checked
        if(isChecked)
        this.setState({
            skills:[...this.state.skills,event.target.value]
        })
        
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name+" "+this.state.skills)
       
      };
    render(){
    return (
        <form onSubmit={this.handleSubmit}>
          <div>
            Name:<input type="text" onChange={this.nameChange}></input>
            <label>Skills:</label>
            C<input name="skill" type="checkbox" value="C" onChange={this.checkChange}></input>
            C++<input name="skill"  type="checkbox" value="C++" onChange={this.checkChange}></input>
            Java<input name="skill"  type="checkbox" value="Java" onChange={this.checkChange}></input>
            Springboot<input type="checkbox" name="skill"  value="Springboot" onChange={this.checkChange}></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    }
}

export default CheckBoxClass