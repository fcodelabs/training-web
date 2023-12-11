// import "./LayoutBackground.css";
import React, { ReactNode } from 'react';




interface LayoutBackgroundProps {
    children: ReactNode; 
  }

function LayoutBackground({ children }: LayoutBackgroundProps) {
  return (
        <div className="layout_bg"
        style={{
          backgroundImage: `url(${require('./BackgroundImage.png')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position:"relative",
          backgroundAttachment: "fixed",
          overflowY: "scroll",
          height: "100vh",
        }}
       
        >{children}</div>
  );
}

export default LayoutBackground;