import './App.css';
import DiaryHomePage from './Pages/DiaryHome/DiaryHomePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import LayoutBackground from './Components/LayoutBackground/LayoutBackground';
import FormToAddNewDiary from './Components/FormToAddNewDiary/FormToAddNewDiary';


function App() {
  return (
    <LayoutBackground>
    <DiaryHomePage/>
</LayoutBackground>
  );
}

export default App;
