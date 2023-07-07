import React, { ReactElement } from 'react';
import Appbar from "../components/Appbar";
import TodoForm from "../components/Todo_Form";
interface MainProps {
  name: string;
}

function Main({ name }: MainProps): ReactElement {
  
  // component styles
  return (
    <div className="App">
      {/* top header component navigation */}
      <Appbar /> 
      
      {/* todo form component */}
      <TodoForm  />
    </div >
  );
}

export default Main