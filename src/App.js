import React, { Component } from 'react';
import './App.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './css/style.css';
import './css/bootstrap.css';

import Avatar from './Avatar';

// IMPORTING LOGIN COMPONENT
import Login from './Login';



class Home extends Component {

  constructor(props)
  {
    super(props)
    this.state = {

      showall: false

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
          <Login />
        );
    }
    else {

    return (
      <div className="App">

       

        <div className="w3ls-pos" style={{width: 700}}>

          <h1>Meet A Developer!</h1>
          <div className="alert alert-warning" role="alert">
            {/*<h4 className="alert-heading">Hello There!</h4>*/}
            <p>Don’t treat a Semi Colon as an end of line but rather as a possibility of a new beginning.Inspirational right? LOL;</p>
          </div>
            <button type="button" onClick={this.showAll} className="btn btn-info">Manage Users</button>
          <br/>

            <Avatar />


          </div>



      </div>
      
    );}
  }
}

export default Home;
