import React from 'react';
import './App.css';
import SignIn from './pages/SignIn/index';
import Home from './pages/DairyHome/index';
import AddingForm from './components/AddingForm/index';
import DiaryCard from './components/DiaryCard';


function App() {
  return (
    <div className="App">
       {/* <DiaryCard title='Hi' description='Explanation: As we can see from the above code Child1 component is calling the multiple props using method 1, by creating a separate method and the child2 component is calling the multiple props by creating an anonymous method.' name='Piyumi'  /> */}
       <Home name = 'Piyumi'/>
    </div>
    
  );
}

export default App;
