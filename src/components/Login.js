import React, { useRef, useState } from 'react'
import Header from './Header'
import {cheackValidSignIn, cheackValidSignUp} from "./../utils/Validate"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import userIcon from "../images/userIcon.png"


const Login = () => {
  const [errorMessage,setErrorMessage]=useState(null);
  const [isSignInForm,setIsSignInForm]=useState(true);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };
  const handleButtonClick=()=>{
    // validate the form data
     
    // console.log(email.current.value)
    // console.log(paslidSigsword.current.value);
    const message=isSignInForm?cheackValidSignIn(email.current.value,password.current.value)
    :cheackValidSignUp(name.current.value,email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return; //message!=null (invaild)

    // sign in / sign up logic
    if(!isSignInForm){
      // for sign up form
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          //const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value ,
            photoURL:{userIcon}
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({
              uid:uid, 
              email:email,
              displayName:displayName,
              photoURL:photoURL
            }));
            // navigate to next page 
             navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" "+errorMessage);
          // ..
        });

    }
    else{
      // sign in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          //const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" "+errorMessage);
        });
    }

    
  }

  return (
    <div>
        <Header/>
        <div className='login-bg'>
        {/* <img
            src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg'
            alt='backgroundImage'
        /> */}
        </div>
        
        <form onSubmit={(e)=>e.preventDefault()}
        className='login-form'>
        <h1 style={{color: "white", marginBottom:"20px"}}>{isSignInForm ? "Sign In":"Sign Up"}</h1>
          {isSignInForm ? 
            null: 
            <input ref={name} type='text' placeholder='Your username' className='login-ip'/>
          }
          <input ref={email} type='text' placeholder='Email Address' className='login-ip'/>
          <input ref={password} type='password' placeholder='Password' className='login-ip' />
          <p style={{color:"red"}}>{errorMessage}</p>
          <button className='login-button' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
          <p 
            style={{color:"white" , marginTop:"20px" , cursor:"pointer"
            }}
            onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix-GPT? Sign Up Now":"Already a Registered? Sign In"}
          </p>
        </form>
        
        
    </div>
  )
}

export default Login