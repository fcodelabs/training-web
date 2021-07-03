import DiaryCard from "./Components/DiaryCard";
import DiaryHome
 from "./Components/DiaryHome";
function App() {
  return (
    <div className="App">
      

      <DiaryCard title="Why English is so Important ?" subtitle="akash" color="#90caf9"
      description="Veniam occaecat minim Lorem magna sit pariatur dolore in cillum ad incididunt Lorem.Veniam occaecat minim Lorem magna sit pariatur dolore in cillum ad incididunt Lorem.
      Veniam occaecat minim Lorem magna sit pariatur dolore in cillum ad incididunt Lorem."
      />

      <DiaryHome/>
      
    </div>
  );
}

export default App;
