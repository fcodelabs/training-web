import React from 'react';
import SigninCard from "../components/SigninCard";


function Signin({nameHandler}) {
  return (
    <div>
      <SigninCard nameHandler={nameHandler} />
    </div>
   
  )
}

export default Signin