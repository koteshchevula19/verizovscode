import React from 'react';
import './UserClass.css'
class UserClass extends React.Component {

        constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
           
        }
        
        
        }

        onUserChangeName = (e) => {
            this.setState({
                name: e.target.value
            },()=>
            console.log(this.state.name))
          
        }
        onChangePassword=(e) => {

                        this.setState({
                password: e.target.value
            },()=>
            console.log(this.state.password))
        }
        onSumbitting = (e) => {
            e.preventDefault();
           alert("userName "+this.state.name,"userPassowrd"+this.state.password)
        }

    render() {
        return (

                <div>
                    <h1>User Form</h1>
                    UserName:<input type="text" value={this.state.name} onChange={this.onUserChangeName} /><br /><br />
                    password:<input type="password" value={this.state.password} onChange={this.onChangePassword} /><br /><br />
                    <input className="btn btn-success text-center" id='submit' type="submit" value="Login" onClick={this.onSumbitting} />
                </div>


        );
    }
}
export default UserClass;