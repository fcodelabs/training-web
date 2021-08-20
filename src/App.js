import React, {useState} from "react";
import DiaryHome from "./components/DiaryHome";
import './App.css';
import AppMenuBar from "./components/layouts/AppMenuBar";
import DiaryCardContainer from "./components/DiaryCardContainer";

/*Context*/
export const Context = React.createContext('');

/*Temp Array*/
let tempData = [];

function App() {
    //states
    const [data, setData] = useState();

    return (
        <div className="App">
            <Context.Provider value={[data, setData, tempData]}>
                <AppMenuBar/>
                <DiaryHome/>
                <DiaryCardContainer/>
            </Context.Provider>
        </div>
    );
}

export default App;
