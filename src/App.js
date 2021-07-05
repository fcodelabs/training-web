import React,{useState} from "react";
import DiaryCard from "./Components/DiaryCard";
import DiaryHome from "./Components/DiaryHome";


function App() {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [card,setCard] =useState(false);
 
  function onClick(e) {
    e.preventDefault();

      if(title.trim().length === 0 || description.trim().length ===0){
        console.log("Missing title or Missing Description");
      }
      else{
        setCard(true);
      }
   
  }

  return (
    <div className="App">
      
      <DiaryHome 
      onClick={onClick} 
      onChangeTitle={(e)=>{setTitle(e.target.value)}} 
      onChangeDescription={(e)=>{setDescription(e.target.value)}}
      title={title}
      description={description}/>

      {card ?  <DiaryCard title={title} description={description} subtitle="Akash" color="#e3f2fd"/> : <div></div>}
     
    </div>
  );
}

export default App;
