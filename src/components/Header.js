import React from 'react'
import usericon from '../images/userIcon.png'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {removeUser} from '../utils/userSlice'

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className='header'>
        <img
            className='netflix-logo'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt='logo'
        />

        {user ?
          <div className='user-sign-out-btn'>
          <img 
          className="user-icon"
            alt="userIcon"
            src={usericon}
          />
          <div> 
          <button className="sign-out-btn" onClick={handleSignOut}>Sign out</button>
          </div>
        </div> : null }
    </div>
  )
}

export default Header