import Logo from "./Logo.png";
import Box from '@mui/material/Box';

function HeaderComponent() {
  return (
    <div 
      style={{
        position: "absolute",
        top: "60px",
        left: "36px",
        right: "1142px",
        bottom: "932px",
        padding: "24px",
        width: "742px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Box>
      <img src={Logo} alt="icon" className="logo" />
      </Box>

      <div className="title"
      style={{
        color: "#4B465C",
        fontFeatureSettings: "'clig' off, 'liga' off",
        fontFamily: "Public Sans, sans-serif",
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "24px",
        fontStyle: "normal",
       }}
      
      >
        Dear Diary
      </div>
      
    </div>
  );
}

export default HeaderComponent;