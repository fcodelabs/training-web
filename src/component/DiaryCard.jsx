import { Typography,TextField,Button,Grid,Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import {useState, useEffect} from "react";
import {db} from "../db/firebase";
import {collection,addDoc} from "firebase/firestore"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getCards } from "../state/slices/cardSlice";

const Item = styled(Paper)(( ) => ({
    backgroundColor: "rgba(255, 255,255, 0.7)",
    textAlign: 'start',
    padding:"15px",
    border:"none",
    boxShadow:"none",
    borderRadius:"12px"
}));
export default function DiaryCard(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [isError,setIsError]=useState(false);

    const {user,cards} = useSelector((state)=>state)
    const dispatch = useDispatch();
    let navigate = useNavigate();
    
    console.log(cards);
    useEffect(()=>{
        if(!user?.name){
            navigate("/");
            return;
        }
        console.log("dispatch called")
        dispatch(getCards());
    },[])
    async function handleSubmit(e){
        e.preventDefault();
        if(title==="" || description===""){
            alert("Please provide both Title and Description!");
            setIsError(true);
            return ;
        }
        const res = await addDoc(collection(db,"diarycards"),{
            user:user.name,title,description
        });
        console.log("data has been posted!",res);
        dispatch(getCards());
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
                    error={isError}
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
                    error={isError}
                    placeholder="Enter Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)} 
                />
            </form>
            <Grid container spacing={2} style={{marginTop:"20px"}}>
                {cards && cards.map((card,idx)=>
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