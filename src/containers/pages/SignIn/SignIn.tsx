import "./SignIn.css";
import Input from "../../../components/Input/Input";
import CustomizedButton from "../../../components/Button/CustomizedButton";
import Logo from "../../../components/Logo/Logo";

import Card from '@mui/material/Card';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


export default function SignIn() {
  return (
    <div className="sign-in-container">
    <Card className='card' sx={{boxShadow: '0px 4px 18px 0px #4B465C1A'}}>
      <Logo/>
      <div className="content">
        <div className="title">Sign In</div>
        <div className="wrapper">
          <Input label="Your Nickname*"/>
          <CustomizedButton
            label="Random"
            onClick={()=>{}}
            secondary
          />
        </div>
        <CustomizedButton
            label="Continue"
            onClick={()=>{}}
            icon={<ArrowRightAltIcon/>}
            
          />
      </div>
    </Card>
  </div>
  );
  
}
