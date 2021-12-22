import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { userContext } from "../../App";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        //history.replace(from);
        history.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div>
      <h1>This is SignUp</h1>
      <button onClick={handleSignIn}>Google Sign In</button>
    </div>
  );
};

export default SignUp;
