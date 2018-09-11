import React, { Component } from 'react';
import axios from 'axios';

// import Pagination from "react-js-pagination";

// ADD USER MODAL
import Modal from './UserModal';


import App from './App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class Users extends Component {

constructor(props)
{
	super(props)
	this.state = {
	showhome: false,
	showmodal: false,
	showsuccess:false,
	users: {
        data: [],
        page: [],
        per_page: []
      },
    id: ''  ,
    first_name: '',
    last_name: '',
    avatar: '',
    activePage:1

	};

	this.apiUrl  = 'https://reqres.in/api/users';
	// this.handleDelete = this.handleDelete.bind(this);

}

 componentDidMount()
  {
    // Make Http Request with Axios
    axios.get(this.apiUrl)
    .then((res) => {
      // Set State with results
      const users = res.data;

          this.setState({ users });
          console.log(this.state);

    })
      .catch(function (error) {
        console.log(error);
      });


  }


   handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }



showModal = () => {
	 	this.setState({
	 		showmodal:true
	 	});
	 	// console.log(this.state.showmodal);
	 }




hideModal = () => {
	 	this.setState({
	 		showmodal:false
	 	});
	 }


backHome = () => {
    this.setState({
      showhome:true
    });
     console.log(this.state.showhome);

  }


  // HANDLE FIRST NAME CHANGE
  handleFNameChange = event => {
    this.setState({ first_name: event.target.value });
  }

   // HANDLE LAST NAME CHANGE
  handleLNameChange = event => {
    this.setState({ last_name: event.target.value });
  }

 // HANDLE AVATAR URL CHANGE
  handleAvatarChange = event => {
    this.setState({ avatar: event.target.value });
  }


  // POST DATA

 	handleSubmit = event => {
 		event.preventDefault();

 		const user = {
 			name: this.state.name,
 			email: this.state.email
 		};

 		axios.post(this.apiUrl, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

     this.setState({
	 		showmodal:false
	 	});
     this.setState({
	 		showsuccess:true
	 	});


 	}


 handleDelete = event => {
 	event.preventDefault();

  this.setState({
  	id: event.target.value
  });

    axios.delete(`https://reqres.in/api/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

 }

  
  



render ()
{

	
	if (this.state.showhome) {
      return(
          <App />
        );
    }

    else


	{ const persons = this.state.users.data.map(user => 

		 
		    <tr key={user.id}>
		      <th scope="row">{user.id}</th>
		      <td>{user.first_name}</td>
		      <td>{user.last_name}</td>
		      <td>

		      <img src="./bin.ico" style={{maxHeight:20, maxWidth:20}} name="id" onChange={this.handleDelete}
		      title="Delete" alt="Del" />

		      <img src="./pen.png" style={{maxHeight:20, maxWidth:20, float:'right'}} 
		      title="Edit" alt="Edit"  />

		      </td>
		    </tr>

		);



	return (
        <div className="w3ls-pos">

          <h1>VIEW ALL USERS</h1>
          <hr/>

        
            <button type="button" onClick={this.showModal} className="btn btn-info" style={{float:'right'}}>Add User</button>

            <Modal show={this.state.showmodal} >
	          

	          <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title">Add A New User</h5>
			      </div>
			      <div className="modal-body">
			        <p>Enter User Details Below:</p>	

			        <form onSubmit={this.handleSubmit}>

					  <div className="form-group">
					    <input type="text" className="form-control" id="first_name" onChange={this.handleFNameChange} placeholder=" First Name" required />
					  </div>

					  <div className="form-group">
					    <input type="text" className="form-control" id="last_name"  onChange={this.handleLNameChange} placeholder=" Last Name" required />
					  </div>

					  <div className="form-group small">
					    <input type="text" className="form-control" id="avatar"  onChange={this.handleAvatarChange} placeholder=" Image URL" required />
					  </div>


					  <button type="submit" className="btn btn-primary">Add User</button>
					  
					</form>

			      </div>
			      <div className="modal-footer">
			        
			        <button type="button" onClick={this.hideModal} className="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>


	        </Modal>


         <br />
         <br />

         <FontAwesomeIcon icon="stroopwafel" />

          <table className="table table-bordered">
		  <thead className="thead-light">
		    <tr>
		      <th scope="col">ID</th>
		      <th scope="col">First Name</th>
		      <th scope="col">Last Name</th>
		      <th scope="col">Action</th>
		    </tr>
		  </thead>
		  <tbody>

       		 {persons}

		  </tbody>
		</table>

		

		<br />
		<button type="button" onClick={this.backHome} className="btn btn-warning" style={{float:'right'}}>Back Home</button>

          </div>

        )

	}
}



}


export default Users;