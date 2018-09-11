import React, { Component } from 'react';
import './App.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './css/style.css';
import './css/bootstrap.css';

import Avatar from './Avatar';

// IMPORTING ALL USERS
import Users from './Users';

// import Particles from 'react-particles-js';

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)




class App extends Component {

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

          {/*<div className="copy-wthree">
            <p>© 2018 All Rights Reserved | Developed by
              <a href="http://ethredah.github.io" target="_blank">Ethredah Chao</a>
            </p>
          </div>
*/}

      </div>
      
    );}
  }
}

export default App;
