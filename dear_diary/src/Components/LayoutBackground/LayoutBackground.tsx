import "./LayoutBackground.css";
import React, { ReactNode } from 'react';



interface LayoutBackgroundProps {
    children: ReactNode; 
  }

function LayoutBackground({ children }: LayoutBackgroundProps) {
  return (
        <div className="layout_bg"
        // style={{
        //   backgroundImage: "url('./BackgroundImage.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   position: "absolute",
        //   top: "0",
        //   left: "0",
        //   width: "100%",
        //   height: "100%",
        // }}
        >{children}</div>
  );
}

export default LayoutBackground;