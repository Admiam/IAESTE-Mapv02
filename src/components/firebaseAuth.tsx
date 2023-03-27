import { FunctionComponent, useState, useEffect } from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOption: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessfulUrl: "/",
};
const FirebaseAuth: FunctionComponent = () => {
  return <div className="mt-16">idk</div>;
};
