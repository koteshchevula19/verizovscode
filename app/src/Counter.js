import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {

        return (
            <div>
                <h1><mark>{this.state.count}</mark></h1>
                <br />
                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button> */}
                <button onClick={() => this.Incre()}>Increment</button>
                <button onClick={() => this.Decre()}>Decrement</button>
                <button onClick={() => this.Incre3()}>Increment by 3</button>
                <button onClick={() => this.setState({ count: 0 })}>Reset</button>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Left</button>npm
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
            </div>
        );

    }

    Decre = () => {
        this.setState(prevState => ({
            count: prevState.count - 1

        }),
            () => {

                console.log("Call back for Decreement Value " + this.state.count);

            });


    }
    Incre = () => {
        //  this.setState({ count: this.state.count + 1 },

        //     () => {
        //         console.log("call back"+this.state.count);

        //     });
        this.setState(prevState => ({
            count: prevState.count + 1

        }),
            () => {

                console.log("Call back for Inrement " + this.state.count);

            });

    }


    Incre3() {
        this.Incre();
        this.Incre();
        this.Incre();
    }

}

export default Counter;