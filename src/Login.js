import React, { Component } from 'react';

import App from './App';

import Users from './Users';

import GoogleLogin from 'react-google-login';

class Login extends Component {

constructor(props)
{
	super(props)
	this.state = {
		showhome:false,
    showadmin:false,
    loggedin:false,
    email:'',
    password:'',

    isAuthenticated: false,
    user: null, 
    token: ''

	};

}

backHome = () => {
    this.setState({
      showhome:true
    });
     console.log(this.state.showhome);

  }


  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

handleSubmit = event => {
    event.preventDefault();



    
    
    if (this.state.email==="admin@test.com" && this.state.password==="iamroot") {

      this.setState({
      showadmin:true,
      loggedin:true
    });

      console.log("Logged In");
      // console.log(this.state);
    }
    else{

    alert("Wrong Credentials");
  }
    

  }


 googleResponse = (response) => {
        // const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        // const options = {
        //     method: 'POST',
        //     body: tokenBlob,
        //     mode: 'cors',
        //     cache: 'default'
        // };
        // fetch('http://localhost:3000/api/v1/auth/google', options).then(r => {
        //     const token = r.headers.get('x-auth-token');
        //     r.json().then(user => {
        //         if (token) {
        //             this.setState({isAuthenticated: true, user, token})
        //         }
        //     });
        // })
    }






render()
{

	if (this.state.showhome) {
      return(
          <App />
        );
    }

    

  else


    if (this.state.isAuthenticated) {
      return <Users name={this.state.user.profileObj.name} email={this.state.user.profileObj.email} image={this.state.user.profileObj.imageUrl} />
    }

    if (this.state.loggedin) {
      return <Users email={this.state.email} image='./user.png' />
    }

const responseGoogle = (response) => {
     
      const user = response;

          this.setState({ user });
          console.log(this.state);
          console.log(this.state.user.profileObj.name)


  this.setState({
      showadmin:true,
      loggedin:true,
      isAuthenticated:true
    });

  
  console.log(response);
}







const onFailure = (error) => {
      alert("Oops..Looks like there's something wrong with Google Authentication at the moment!");
    };




	return (
        <div className="w3ls-pos">
        <h3>LOGIN TO PROCEED</h3>
        <br />
        <br />
       <form onSubmit={this.handleSubmit}>
              <div className="w3ls-login">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted"> (someone@example.com) </small>
              </div>
              <div className="w3ls-login">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" required placeholder="Password" />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
            <hr/>
            
              <GoogleLogin
              clientId="499848895015-vka5qu9nr75e1uqebpru98aodqc3a7vm.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={onFailure}
            />

		<br />

		<button type="button" onClick={this.backHome} className="btn btn-warning" style={{float:'right'}}>Back Home</button>

          </div>

        )

	
}



}


export default Login;
