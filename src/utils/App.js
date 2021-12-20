import './App.css';
import DiaryHome from '../Pages/diaryHome/DiaryHome';
import FirstPage from '../Pages/firstPage/FirstPage'
import {Route, Routes } from 'react-router-dom'

function App() {
  const list =[
    {title:"Test 1", name:"Udith", color:"#b9e9ff", description:"222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222"},
  ]
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path='/diaryHome' element={<DiaryHome/>}/>
          <Route path='/' element={<FirstPage/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
