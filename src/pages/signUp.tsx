import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import LogInForm from "src/components/LogInForm";

const SignUp = () => {
  const { user } = useAuth();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      // await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };

  const getEmail = (e: any) =>
    setData({
      ...data,
      email: e.target.value,
    });

  return (
    <div className="justify-center flex my-52 h-full w-full">
      <form action="/">
        {/* <LogInForm
          setTitle={"Email"}
          setName={"email"}
          setValue={data.email}
          setOnChange={getEmail}
        ></LogInForm>
        <LogInForm
          setTitle={"Email"}
          setName={"email"}
          setValue={data.email}
          setOnChange={getEmail}
        ></LogInForm> */}
      </form>
    </div>
  );
};
