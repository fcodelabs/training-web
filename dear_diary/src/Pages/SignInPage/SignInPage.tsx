import React from "react";
import "./SignInPage.css";
import SignIn from "./SignIn/SignIn";
import LayoutBackground from "../../Components/LayoutBackground/LayoutBackground";

function SignInPage() {
  return (
    <LayoutBackground>
        <SignIn />
    </LayoutBackground>    
  );
}

export default SignInPage;