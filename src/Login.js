import React, { Component } from 'react';

import App from './App';


class Login extends Component {

constructor(props)
{
	super(props)
	this.state = {
		showhome: false
	};

}

backHome = () => {
    this.setState({
      showhome:true
    });
     console.log(this.state.showhome);

  }


render()
{

	if (this.state.showhome) {
      return(
          <App />
        );
    }

    else


	{ 

	return (
        <div className="w3ls-pos">
        <h3>LOGIN TO PROCEED</h3>
        <br />
        <br />
       <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" required placeholder="Password" />
              </div>
              
              <button type="submit" className="btn btn-primary">Login</button>
            </form>

		<br />
		<button type="button" onClick={this.backHome} className="btn btn-warning" style={{float:'right'}}>Back Home</button>

          </div>

        )
}
	
}



}


export default Login;