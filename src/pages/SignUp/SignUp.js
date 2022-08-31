import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Todo from "../Todo/DiaryHome";
import { Link, useNavigate } from "react-router-dom";
import LowPriorityIcon from "@mui/icons-material/LowPriority";

const nameData = [
  "nar",
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
  "Waltheof",
];

const getRandomName = (props) => {
  return nameData[Math.floor(Math.random() * nameData.length)];
};

function SignUp() {
  const [name, setname] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.value;
    setname(name);
  };

  const handleSubmit = () => {
    console.log(name);
    if (name) {
      navigate("/todo", {
        state: { inputname: name },
      });
    }
  };

  const handleClick = () => {
    const randomResearchTitle = getRandomName();

    setname(randomResearchTitle);
    console.log(randomResearchTitle);
  };

  return (
    <div>
      <Box
        sx={{
          width: 500,
          height: 200,
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: 10,
          color: "text.secondary",
          opacity: "0.6",
        }}
      >
        <p className="headertext">
          {" "}
          <LowPriorityIcon />
          SignUp
        </p>
        Name
        <TextField
          required
          id="filled-required"
          variant="filled"
          value={name}
          fullWidth
          name="Name"
          type="text"
          onChange={handleChange}
        />
        <div>
          <Button sx={{ m: 1 }} onClick={handleClick} type="button">
            Random
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            {/* <Link to="/todo">continue</Link> */}
            continue
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default SignUp;
