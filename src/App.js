import './App.css';
import DiaryCard from './components/DiaryCard/DiaryCard';
import DiaryHome from './pages/diaryHome/DiaryHome';

function App() {
  const list =[
    {title:"Test 1", name:"Udith", color:"#b9e9ff", description:"222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222"},
  ]
  return (
    <div className="App">
      <section>
        <DiaryHome/>
        <div className="cardContainer"> 
          { list.map (p => 
            <DiaryCard props = {p}/>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
