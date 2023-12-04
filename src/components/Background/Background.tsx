import React, { ReactNode } from 'react';
import './Background.css';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className='background-container'>
      {children}
    </div>
  );
};

export default Background;
