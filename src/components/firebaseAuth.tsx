import { FunctionComponent, useState, useEffect, useRef } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
};

const FirebaseAuth: FunctionComponent = () => {
  const [renderAuth, setRenderAuth] = useState(false);

  useEffect(() => {
    setRenderAuth(true);
  }, []);

  return (
    <div className="mt-16">
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>

    // <div className="justify-center flex my-52 h-full w-full">
    //   <form action="/" onSubmit={handleSubmit}>
    //     <label className="block max-w-1/3 ">
    //       <span className="block text-sm font-medium text-slate-700">
    //         Email
    //       </span>
    //       <input
    //         type="email"
    //         name="email"
    //         onChange={onChange}
    //         className="mt-1 block w-full h-10 p-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    //         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    //         disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    //         invalid:border-pink-500 invalid:text-pink-600
    //         focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    //         "
    //       />
    //     </label>
    //     <label className="block mt-4 max-w-1/3">
    //       <span className="block text-sm font-medium text-slate-700">
    //         Passport
    //       </span>
    //       <input
    //         type="password"
    //         name="password"
    //         onChange={onChange}
    //         className="mt-1 block w-full h-10 p-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    //         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    //         disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    //         invalid:border-pink-500 invalid:text-pink-600
    //         focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    //       />
    //       <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
    //         Please provide a valid password address.
    //       </p>
    //     </label>
    //     <label className="block mt-4 max-w-1/3">
    //       <span className="block text-sm font-medium text-slate-700">
    //         Passport
    //       </span>
    //       <input
    //         type="password"
    //         name="confirmPassword"
    //         onChange={onChange}
    //         className="mt-1 block w-full h-10 p-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    //         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    //         disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    //         invalid:border-pink-500 invalid:text-pink-600
    //         focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    //       />
    //       <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
    //         Please provide a valid password address.
    //       </p>
    //     </label>
    //     <button
    //       type="submit"
    //       className="p-4 bg-blue-500 w-full text-white rounded-md text-sm"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
};
export default FirebaseAuth;
