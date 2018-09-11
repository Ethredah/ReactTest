import React, {Component} from 'react';
import axios from 'axios';

import './css/bootstrap.css';



class Avatar extends Component 
{

  constructor(props)
  {
    super(props)
    // Initial state of pictures
    this.state = {
      users: {
        data: [],
        page: [],
        per_page: []
      }
    };

    this.apiUrl  = 'https://reqres.in/api/users';
  }


  

  componentDidMount()
  {
    // Make Http Request with Axios
    axios.get(this.apiUrl)
    .then((res) => {
      // Set State with results
      const users = res.data;

          this.setState({ users });
          // console.log(this.state);

    })
      .catch(function (error) {
        console.log(error);
      });


  }



  render()
  {

      const style = 
      {
        width: '100px',
        height: '100px'
      };

      // const data = this.state;
      const person = this.state.users.data.map(user => 

            <div key={user.id}>
             <div className="col-md-4 w3ls-bot" title={user.first_name} >
                <img src={user.avatar} alt="img" style={style} />
             </div>
            </div>
      
      );


      return (
        <div>
        {person}
        </div>
        )

    }

          



  }




export default Avatar;