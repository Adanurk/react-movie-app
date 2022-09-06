import React, { useState } from 'react';
import { createUser } from '../auth/firebase';
import myImg from "./../cinema.avif";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
    console.log(firstName);
  }

  return (
    <div className='d-flex justify-content-center flex-wrap'>
      <div className='form-image'>
        <img src={myImg} alt="img"/>
      </div>
      <div className='register-form'>
        <h1 className='form-title display-3'>Register</h1>
        <form id='register' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="first-name" className='form-label'>First Name</label>
            <input type="text" className='form-control' id='first-name' placeholder='Enter your first name' onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="last-name" className='form-label'>Last Name</label>
            <input type="text" className='form-control' id='last-name' placeholder='Enter your last name' onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" className='form-control' id='email' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className='form-control' id='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <input type="submit" className="btn btn-primary form-control" value="Register"/>
        </form>

      </div>



    </div>
  )
}

export default Register