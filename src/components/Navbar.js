import React, { useContext,useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut, auth } from '../auth/firebase';
import { AuthContext } from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  console.log(currentUser);

  useLayoutEffect(()=> {
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            setCurrentUser(currentUser);

        }else{
            // user signed out
            setCurrentUser(null);
        }
    });
    setTimeout(() => {setLoading(false)}, 1000)
    // userObserver(setCurrentUser)
}, [])
// we use it in useEffect so it works in first time we run the app


  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <Link to={"/"} className="navbar-brand text-white">
            <h4>Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">

         {loading ? <div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div> : currentUser ? <><h5 className='mb-0 text-capitalize'>{currentUser?.displayName}</h5><button className='ms-2 btn btn-outline-light' onClick={() => logOut()}>Logout</button></> : <><button className='ms-2 btn btn-outline-light' onClick={() => navigate("/login")}>Login</button><button className='ms-2 btn btn-outline-light' onClick={() => navigate("/register")}>Register</button></>
}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar