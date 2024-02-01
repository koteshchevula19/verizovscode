import React from 'react';
 class Counter extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                count:props.counter
                
            }
        }
        increment=()=>{
            this.setState({count:this.state.count+1})   
        }

        decrement=()=>{
            this.setState({count:this.state.count-1})   
        }

    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

            </div>
        )




    }

}
export default Counter