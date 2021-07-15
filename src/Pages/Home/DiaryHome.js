import React,{useState,useEffect,useRef} from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { addCard,getCards } from '../Actions/diaryAction'
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import DiaryCard from '../../Components/DiaryCard/DiaryCard';
import styles from './DiaryHome.module.css';

function DiaryHome() {

    const dispatch = useDispatch()
    const cards = useSelector(state => state.cards)
    const history = useHistory();
    const node = useRef();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [collapse, setCollapse] = useState(false)

    const handleClickOutside = (e) => {
        if (node.current && node.current.contains(e.target)) {
            setCollapse(true)
          return;
        }
        setCollapse(false)
      };

    useEffect(() => {
        dispatch(getCards())
        document.addEventListener('mousedown', handleClickOutside);
        if(!localStorage.getItem("nickName")){
            history.push("/")
        }
    })    

    const submit=()=>{
        if(!title){
            alert("Missing title")
            console.log("Missing title")
        }
        if(!description){
            alert("Missing description")
            console.log("Missing description")
        }
        else{
            dispatch(addCard({"title":title,"description":description,"subtitle":localStorage.getItem("nickName")}))
            setTitle("")
            setDescription("")
        }
    }

    return (
        <div className={styles.container}>

            <h1 style={{"color":"#00606F","fontSize":"60px"}}>
                Home
            </h1>

            <div>
                <div style={{"marginTop":"10px"}} onClick={()=>setCollapse(true)} >
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Submit New"/>
                </div>

               
                <Collapse ref={node} onMouseOver={()=>setCollapse(true)} in={collapse} timeout={1000}> 
                    <div style={{"marginTop":"20px"}}>
                        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} rows="6" placeholder="Enter Description"/>
                    </div> 

                    <div style={{"marginTop":"20px"}} onClick={submit} className={styles.submitButton}>
                        <div>
                            <h3>SUBMIT</h3>
                        </div>
                    </div> 
                </Collapse>

            </div>

            <div>
                <div className={styles.cardContainer}>
                    <Grid justify="center" container spacing={0}>
                    {cards.map((card,index)=>{
                        return(
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>        
                                    <DiaryCard  title={card.title} subtitle={card.subtitle} description={card.description} bgColor="#b3e9fe"/>
                            </Grid>
                        )
                    })}
                    </Grid>
                </div>
            </div>
            
        </div>
    )
}

DiaryHome.propTypes = {
    cards:PropTypes.array,
    addCard:PropTypes.func
};

export default DiaryHome;