import React,{useEffect} from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'

const Body = () => {
  const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
      {
          path:"/",
          element:<Login/>
      },
      {
          path:"/browse",
          element:<Browse/>
      }
    ]);

    // sign in and sign out 
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName,photoURL} = user.uid;
          dispatch(addUser({uid:uid, email:email,displayName:displayName}));
        } 
        else {
          // User is signed out
          dispatch(removeUser());
        }
      });
    },[]);


  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body