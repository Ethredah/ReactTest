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
      },
      users2: {
        data: [],
        page: [],
        per_page: []
      },
      users3: {
        data: [],
        page: [],
        per_page: []
      },
      users4: {
        data: [],
        page: [],
        per_page: []
      },
      loading: true

    };

    // const pageNumber = this.state.pagenumber;

    this.apiUrl  = 'https://reqres.in/api/users/';
  }


  

  // componentDidMount()
  // {

  //   for (var i = 1; i <=4; i++) {
  //      // Make Http Request with Axios
  //   axios.get('https://reqres.in/api/users/?page='+i)
  //   .then((res) => {
  //     // Set State with results
  //     const users = res.data;

  //         this.setState({ users });
  //         // console.log(this.state);

  //   })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   }
   


  // }



componentDidMount()
  {

       setTimeout(() => this.setState({ loading: false }), 1200);

       // Make Http Request with Axios
    axios.get('https://reqres.in/api/users/?page=1')
    .then((res) => {
      // Set State with results
      const users = res.data;

          this.setState({ users });
          // console.log(this.state);

    })
      .catch(function (error) {
        console.log(error);
      });
    

     axios.get('https://reqres.in/api/users/?page=2')
    .then((res) => {
      // Set State with results
      const users2 = res.data;

          this.setState({ users2 });
          // console.log(this.state);

    })
      .catch(function (error) {
        console.log(error);
      });
   

   axios.get('https://reqres.in/api/users/?page=3')
    .then((res) => {
      // Set State with results
      const users3 = res.data;

          this.setState({ users3 });
          // console.log(this.state);

    })
      .catch(function (error) {
        console.log(error);
      });


      axios.get('https://reqres.in/api/users/?page=4')
    .then((res) => {
      // Set State with results
      const users4 = res.data;

          this.setState({ users4 });
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
        width: '120px',
        height: '120px'
      };

      // const data = this.state;
      const row1 = this.state.users.data.map(user => 

            <div key={user.id} className="col-md-3">
             <div className="w3ls-bot" title={user.first_name} >
                <img src={user.avatar} alt="img" style={style} />
             </div>
            </div>
      
      );

      const row2 = this.state.users2.data.map(user => 

            <div key={user.id} className="col-md-3">
             <div className="w3ls-bot" title={user.first_name} >
                <img src={user.avatar} alt="img" style={style} />
             </div>
            </div>
      
      );

      const row3 = this.state.users3.data.map(user => 

            <div key={user.id} className="col-md-3">
             <div className="w3ls-bot" title={user.first_name} >
                <img src={user.avatar} alt="img" style={style} />
             </div>
            </div>
      
      );


      const row4 = this.state.users4.data.map(user => 

            <div key={user.id} className="col-md-3">
             <div className="w3ls-bot" title={user.first_name} >
                <img src={user.avatar} alt="img" style={style} />
             </div>
            </div>
      
      );


    const { loading } = this.state;
    
    if(loading) {
      return <img src="./load.gif" alt="loader"/> 
    }

      return (
        <div className="row">
        {row1}
        {row2}
        {row3}
        {row4}
        </div>
        )

    }

          



  }




export default Avatar;