/*import logo from './logo.svg';*/
import './App.css';

import logo from "../src/images/logo.png";
//import {genName} from "./signin";
import {useState} from 'react';

function App() {
  const [randomName, setRandomName]=useState(null)
  const genName=()=>{
    const num=Math.floor(Math.random() * 5)
        let name
        let nameArr =['Nimal','Kamal','Peter','Saman','Jhon']
        setRandomName(nameArr[num])
  }
   /*const getRandomVale=()=>
  {
   // console.log("ghjk")
   const [num, setNum] = useState(0);
   function genNumber(){
    return Math.floor(Math.random() * 5)
   }
    //return genName
   const click=()=>{
    setNum(genNumber());
   }
  }*/
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         This is the test app
        </a>
      </header> */}

      <div className="contain">
      <div className="image">
          <img src={logo} width="50px" height="50px"></img>
        </div>
        <div className="dh2">
          <h2>Dear Diary</h2>
        </div>
        <div className="table">
        <h1 id="sh1" text-align="center">Sign In</h1>
        <input type="text" id="txt1" placeholder="Enter" value={randomName}></input>
        <input type="Button" id="btn1" value="RANDOM" onClick={genName}></input><br></br>
        <input type="Button" id="btn2" value="Continue"  disabled={randomName===null}></input>
        </div>
      </div>


    </div>
  );
}

export default App;
