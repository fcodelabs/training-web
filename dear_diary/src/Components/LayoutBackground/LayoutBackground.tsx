import "./LayoutBackground.css";
import React, { ReactNode } from 'react';


interface LayoutBackgroundProps {
    children: ReactNode;
  }

function LayoutBackground({ children }: LayoutBackgroundProps) {
  return (
        <div className="layout_bg">{children}</div>
  );
}

export default LayoutBackground;