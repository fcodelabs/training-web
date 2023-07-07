import React from 'react';
import SigninCard from "../components/SigninCard";


function Signin({pageHandler,nameHandler}) {
  return (
    <div>
      <SigninCard pageHandler={pageHandler} nameHandler={nameHandler} />
    </div>
   
  )
}

export default Signin
