import React, {Component} from 'react';

import './css/bootstrap.css';
import Users from './Users';


class Success extends Component
{


	constructor(props)
	{
		super(props)
		this.state = {
			show:true
		}
	}


	componentDidMount()
	{
		setTimeout(() => this.setState({ show: false }), 2000);
	}

	render()
	{

		if (this.state.show) {

			return (

				<div className="alert alert-success col-md-6" style={{float:"center"}} role="alert">
	            <h4 className="alert-heading">DONE!</h4>
	            <hr />
	            <p>User Details have been successfully added.</p>
	         	</div>

				);

		}

		return (

		<div>

          <Users />

         </div>


			);
	}


}

export default Success;