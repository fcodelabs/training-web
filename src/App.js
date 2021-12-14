import './App.css';
import DiaryHome from './pages/diaryHome/DiaryHome';

function App() {
  const list =[
    {title:"Test 1", name:"Udith", color:"#b9e9ff", description:"222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222"},
  ]
  return (
    <div className="App">
      <section>
        <DiaryHome/>
      </section>
    </div>
  );
}

export default App;
