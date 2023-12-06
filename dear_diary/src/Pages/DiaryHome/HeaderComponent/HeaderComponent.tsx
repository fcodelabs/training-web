import "./HeaderComponent.css";
import Logo from "./Logo.png";
import Box from '@mui/material/Box';

function HeaderComponent() {
  return (
    <div className="header">
      <Box>
      <img src={Logo} alt="icon" className="logo" />
      </Box>

      <div className="title">
        Dear Diary
      </div>
      
    </div>
  );
}

export default HeaderComponent;