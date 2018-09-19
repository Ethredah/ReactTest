import React, { Component } from 'react';
import './App.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './css/style.css';
import './css/bootstrap.css';

import Avatar from './Avatar';

// IMPORTING ALL USERS
import Users from './Users';


// import Particles from 'react-particles-js';





class Home extends Component {

  constructor(props)
  {
    super(props)
    this.state = {

      showall: false,

    }
  }


showAll = () => {
    this.setState({
      showall:true
    });
     console.log(this.state.showall);

  };


  render() {

    if (this.state.showall) {
      return(
          <Users />
        );
    }
    else {

    return (
      <div className="App">

       

        <div className="w3ls-pos">

          <h1>USER MANAGEMENT</h1>
          <hr/>
            <button type="button" onClick={this.showAll} className="btn btn-info">Manage Users</button>
          <br/>

            <Avatar />

          </div>

         
      </div>
      
    );}
  }
}

export default Home;
