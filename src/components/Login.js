import React, { useRef, useState } from 'react'
import Header from './Header'
import {cheackValidSignIn, cheackValidSignUp} from "./../utils/Validate"

const Login = () => {
  const [errorMessage,setErrorMessage]=useState(null);
  const [isSignInForm,setIsSignInForm]=useState(true);
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };
  const handleButtonClick=()=>{
    // validate the form data
     
    // console.log(email.current.value)
    // console.log(paslidSigsword.current.value);
    const message=isSignInForm?cheackValidSignIn(email.current.value,password.current.value):cheackValidSignUp(name.current.value,email.current.value,password.current.value);
    setErrorMessage(message);

    //signIn/ signUp

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