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

  // let input = {
  //   title: '',
  //   description: ''
  // }

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

      {/* <DiaryCard
        title="Resons Why Learning English Is So Important"
        name="Name"
        description="They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy." /> */}
    </div>
  );
}

export default App;
