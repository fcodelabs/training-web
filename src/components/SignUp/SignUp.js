import React, { useState } from "react";
import Box from '@mui/material/Box';
import './SignUp.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Todo from "../todo/Todo";
import { Link } from "react-router-dom";

const nameData = ["nar",
"An",
"Alfr",
"Alvi",
"Ari",
"Arinbjorn",
"Arngeir",
"Arngrim",
"Arnfinn",
"Asgeirr",
"Askell",
"Asvald",
"Bard",
"Baror",
"Bersi",
"Borkr",
"Bjarni",
"Bjorn",
"Brand",
"Brandr",
"Cairn",
"Canute",
"Dar",
"Einarr",
"Eirik",
"Egill",
"Engli",
"Eyvindr",
"Erik",
"Eyvind",
"Finnr",
"Floki",
"Fromund",
"Geirmundr",
"Geirr",
"Geri",
"Gisli",
"Gizzur",
"Gjafvaldr",
"Glumr",
"Gorm",
"Grmir",
"Gunnarr",
"Guomundr",
"Hak",
"Halbjorn",
"Halfdan",
"Hallvard",
"Hamal",
"Hamundr",
"Harald",
"Harek",
"Hedinn",
"Helgi",
"Henrik",
"Herbjorn",
"Herjolfr",
"Hildir",
"Hogni",
"Hrani",
"Ivarr",
"Hrolf",
"Jimmy",
"Jon",
"Jorund",
"Kalf",
"Ketil",
"Kheldar",
"Klaengr",
"Knut",
"Kolbeinn",
"Kolli",
"Kollr",
"Lambi",
"Magnus",
"Moldof",
"Mursi",
"Njall",
"Oddr",
"Olaf",
"Orlyg",
"Ormr",
"Ornolf",
"Osvald",
"Ozurr",
"Poror",
"Prondir",
"Ragi",
"Ragnvald",
"Refr",
"Runolf",
"Saemund",
"Siegfried",
"Sigmundr",
"Sigurd",
"Sigvat",
"Skeggi",
"Skomlr",
"Slode",
"Snorri",
"Sokkolf",
"Solvi",
"Surt",
"Sven",
"Thangbrand",
"Thjodoft",
"Thorod",
"Thorgest",
"Thorvald",
"Thrain",
"Throst",
"Torfi",
"Torix",
"Tryfing",
"Ulf",
"Valgaror",
"Vali",
"Vifil",
"Vigfus",
"Vika",
"Waltheof"

  

  
]

const getRandomName = () => {
  return nameData[Math.floor(Math.random() * nameData.length)];
};


function SignUp(){

const [researchName, setResearchName] = useState(getRandomName());
const [name,setname] = useState(
);



    const handleChange = (e) => {
      const name = e.target.name;
       const value= e.target.value;
  
          setname((prev) => {
            return { ...prev,[name]: value};
            }
       );
          }


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name);
      
  
     }

  const handleClick = () => {
    const randomResearchTitle = getRandomName();
   setResearchName(randomResearchTitle);
   //setname = researchName

   const name = researchName;
 
  
  setname(name);
    //console.log(name)
  };





return(
    <div>
      <form onSubmit={handleSubmit}>
      <Box
      sx={{
        width: 500,
        height: 200,
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: 10,
        color: 'text.secondary',
        opacity: '0.6'
      }}>

        <p className="headertext">SignUp</p>
        <p className="nametext">Name</p>


        <form >
        <TextField
          required
          id="filled-required"
          label={researchName}        
          variant="filled"
          fullWidth
          name='Name'
          type='text'
          onChange = {handleChange}
         

        />
        </form>
        <div>
          
        <Button sx = {{ m:1}}  onClick={handleClick} >Random</Button>
           <Button type = 'submit' >
          <Link to="/todo">continue</Link> 
         {/* continue */}
          </Button>
        </div>
        </Box>

      </form>
        
    

    </div>
)

}

export default SignUp;