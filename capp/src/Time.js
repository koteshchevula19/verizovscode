import React, { Component } from 'react'

var timer=new Date().toLocaleTimeString()
var x;
export default class Time extends Component {

    constructor(props) {
        super(props)
           
        this.state = {
            time: timer,
            stop: x
            
        }
    }

    componentDidMount() {
        // console.log(new Date().toLocaleTimeString);
        // this.setState({time:this.state.time})

        this.state.stop=setInterval(() => this.setState({time:new Date().toLocaleTimeString()}),1000)

       
    }
    
    // componentWillUnmount() {
    //     setTimeout(() => {
    //         clearInterval(x)
    //         console.log("Clearing interval.....")
    //     }, 6000)
    // }

    // componentDidUpdate() {
    //     // this.state.x = setInterval(() => {
    //     //     // document.writeln(new Date().toLocaleTimeString)
    //     //     this.setState({ time:timer})
    //     // }, 1000)
    //     console.log("Entering into did update method");
    //     setTimeout(() => {
    //         console.log("Stopping the time");
    //     clearInterval(this.state.stop)
    //     },10000)
    // }

    clearingInterval=()=>{
        console.log("Stopping the time");
        setTimeout(() => {clearInterval(this.state.stop)},10000)
        
    }
        
    componentDidUpdate() {

        console.log("Updating...")
    }


    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <button onClick={this.clearingInterval}>Clearing Interval</button>
            </div>
        )
    }
}

