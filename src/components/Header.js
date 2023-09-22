import React, { useEffect } from "react";
import usericon from "../images/userIcon.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

    // sign in and sign out
    useEffect(() => {
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const { uid, email, displayName, photoURL } = user.uid;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      
      // unsubscribe when component unmounts
      return ()=> unsubscribe();
    }, []);



  return (
    <div className="header">
      <img
        className="netflix-logo"
        src={LOGO}
        alt="logo"
      />

      {user ? (
        <div className="user-sign-out-btn">
          <img className="user-icon" alt="userIcon" src={usericon} />
          <div>
            <button className="sign-out-btn" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
