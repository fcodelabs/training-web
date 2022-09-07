import { Typography,TextField,Button,Grid,Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import {useState, useEffect} from "react";
import {db} from "./firebase";
import {collection,addDoc,onSnapshot} from "firebase/firestore"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(255, 255,255, 0.7)",
    textAlign: 'start',
    padding:"15px",
    border:"none",
    boxShadow:"none",
    borderRadius:"12px"
}));


export default function DiaryCard(){
    const [diaryCards,setDiaryCards] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const user = useSelector((state)=>state.user.name)
    let navigate = useNavigate();

    console.log(user);
    useEffect(()=>{
        if(!user){
            navigate("/");
            return;
        }
        onSnapshot(collection(db, "diarycards"), (snapshot) => {
            setDiaryCards(snapshot.docs.map((doc)=>({...doc.data()})))
        })
        console.log(diaryCards);
    },[])
    async function handleSubmit(e){
        e.preventDefault();
        if(title==="" && description===""){
            alert("error");
            return ;
        }
        const res = await addDoc(collection(db,"diarycards"),{
            user,title,description
        });
        console.log("data has been posted!",res);
        setTitle("");
        setDescription("");
    }
    return(
        <div style={{textAlign:"start",color:"white",padding:"20px",}}>
            <Typography variant="h4">Home</Typography>
            <form style={{marginTop:"20px",display:"flex",flexDirection:"column",gap:"15px"}}>
                <div style={{display:"flex", gap:"10px"}}>
                <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    label="Submit New" 
                    variant="outlined"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    />
                    <Button type="submit" onClick={(e)=>handleSubmit(e)} variant="contained">Submit</Button>
                </div>
                <TextField
                    fullWidth 
                    placeholder="Enter Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)} 
                />
            </form>
            <Grid container spacing={2} style={{marginTop:"20px"}}>
                {diaryCards && diaryCards.map((card,idx)=>
                    <Grid item lg={3} md={6} xs={12} key ={idx}>
                        <Item>
                            <p>
                                {card.title}
                            </p>
                            <p>
                                {card.user}
                            </p>
                            <Text description={card.description} />
                        </Item>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

function Text({description}){
    const [showMore,setShowMore] = useState(false);
    return (
        <div>
            <p>
                {showMore?description:description.substring(0,3)+"..."}
            </p>
            <button onClick={()=>setShowMore(!showMore)}>
                {showMore?"Show less":"Show more"}
            </button>
        </div>
    )
}