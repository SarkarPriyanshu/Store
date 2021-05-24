import React from "react";
import SignIn from "../../Components/signin/signin.component";
import SignUp from "../../Components/signup/signup.component";

const SignIn_SignUp = () => {
  return (
    <>
      <div className="sign-in-and-sign-up ">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignIn_SignUp;
