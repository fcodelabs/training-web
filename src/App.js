import DiaryCard from './components/diary-card/diary-card';
import './App.css';

function App() {
  return (
    <div className="App">
      <DiaryCard
        title="Resons Why Learning English Is So Important"
        name="Name"
        description="They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy." />
    </div>
  );
}

export default App;
