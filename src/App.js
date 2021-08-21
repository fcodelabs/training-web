// import DiaryCard from './components/diary-card/diary-card';
import './App.css';
import AddForm from './components/add-form/add-form';
import { useState } from 'react';

function App() {

  const [state, setState] = useState([]);
  const [input, setInput] = useState({
    title: '',
    description: ''
  });

  const handleChange = (event) => {
    setInput(({
      ...input, [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = () => {

    console.log("Inputs")
    console.log(input)
    setState([...state, input]);
    
    setInput({
      title: '',
      description: ''
    })
  };

  return (
    <div className="App">
      <AddForm
        input={input}
        handleChange={(event) => handleChange(event)}
        handleSubmit={() => handleSubmit()} />
    </div>
  );
}

export default App;
