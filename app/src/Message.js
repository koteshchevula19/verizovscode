import React from 'react';
class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message:" Kotesh",
            age:"21"
        }
    }
    render() {

        return (
            <div>
                <h1>My Name is :{this.state.message}</h1>
                <h1>My Age is :{this.state.age}</h1>
                <button onClick={()=>this.setState({message:"Thank You"})}>Change Name</button>
                <button onClick={()=>this.onAgeChange()}>Change Age</button>
            </div>
        );
    }
    onAgeChange() {
        this.setState({age:"25"})
    }
}
export default Message;