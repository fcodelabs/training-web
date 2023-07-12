import React, { ReactElement } from 'react';
import SigninCard from "../../components/SigninCard/SigninCard";
import LogoImage from '../../img/logo1.png';

function Signin(): ReactElement {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <img src={LogoImage} alt="Logo" style={{ width: '500px', height: '150px' }} />
      </div>
      <SigninCard  />
    </div>
  );
}

export default Signin;