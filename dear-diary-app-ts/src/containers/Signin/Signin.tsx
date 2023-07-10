import React, { ReactElement } from 'react';
import SigninCard from "../../components/SigninCard";

interface SigninProps {
  nameHandler: (name: string) => void;
}

function Signin({ nameHandler }: SigninProps): ReactElement {
  return (
    <div>
      <SigninCard nameHandler={nameHandler} />
    </div>
  );
}

export default Signin;