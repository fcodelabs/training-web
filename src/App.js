import DiaryHome from './pages/diary-page/diary-page';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './utils/state/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <DiaryHome name="Jhon Doe" />
      </Provider>
    </div>
  );
}

export default App;
