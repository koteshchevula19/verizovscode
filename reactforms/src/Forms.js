import React, { Component } from 'react';

export default class Forms extends Component{

    state ={
        name: 'Your name here',
        rememberMe: false,
        country: 'UAE'
    }

    // handleChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({name: event.target.value});
    // }

    // handleSelect = (event) => {
    //     this.setState({country: event.target.value});
    // }

    handleAll = (event, inputName, isChecked) =>{
this.setState({
[inputName] : isChecked 
            ? event.target.checked 
            : event.target.value
        });
    }  
    // 

    // handleAll = (event) =>{
    //     const isCheckBox = event.target.type === "checkbox";
    //     this.setState({
    //     [event.target.name] : isCheckBox 
    //                 ? event.target.checked 
    //                 : event.target.value
    //             });
    //         }  
    // for this handleAll we need not to pass any arguments in the input fileds see and observe te comparisions

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} action="#">
               <input 
               name="userName"
               value={this.state.name}
               type="text" 
               onChange={
                (event) => this.handleAll(event, "name")
                }/>

                <label>Skills</label>
                Java <input 
               type="checkbox" 
               checked={this.state.rememberMe} 
               value={this.state.rememberMe} 
               onChange={(event) => {
                this.handleAll(event, "rememberMe", true)
               }}
               />

            C++ <input 
               type="checkbox" 
               checked={this.state.rememberMe} 
               value={this.state.rememberMe} 
               onChange={(event) => {
                this.handleAll(event, "rememberMe", true)
               }}
               />

               <select 
               value={this.state.country} 
               onChange={
                event => {this.handleAll(event, "country")}
            }>
                <option>Select your country</option>
                <option>Sri Lanka</option>
                <option>UAE</option>
                <option>Russia</option>
               </select><br />
               <input type='submit' value="REGISTER"/>
               </form>
            </div>
        );
    }
}