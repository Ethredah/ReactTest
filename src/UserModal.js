import React from 'react';


// Modal Component

const UserModal = ({ handleClose, show, children }) => {
  const container = show ? "modal display-block" : "modal display-none";

		  return (
		    <div className={container} >
		      <section className="modal-main">
		        {children}
		      </section>
		    </div>
		  );
		};



export default UserModal;