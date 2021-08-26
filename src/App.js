import DiaryHome from './page/diary-page/diary-page';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <DiaryHome name="Name" />
      </Provider>
    </div>
  );
}

export default App;
