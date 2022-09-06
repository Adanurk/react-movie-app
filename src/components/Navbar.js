import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const currentUser = {displayName: "Kübra"}

  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <Link to={"/"} className="navbar-brand text-white">
            <h4>Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            <h5 className='mb-0 text-capitalize'>{currentUser?.displayName}</h5>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar