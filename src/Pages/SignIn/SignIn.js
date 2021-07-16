import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import styles from './signIn.module.css';

function SignIn() {
    const [nickName, setNickName] = useState("")
    const [error, setError] = useState()
    const onNickName = ()=>{
        console.log(nickName)
        if(!nickName){
            setError("Required*")
        }else{setError("")}
    }
    const submit = ()=>{
        if(nickName){
            localStorage.setItem("nickName",nickName)  
            history.push("/home")
            return
        }
        alert("Input All")
    }
    

    const random=()=>{
        let names = ["A","B","C","D","E","F"]
        setNickName(names[Math.floor((Math.random() * names.length) + 1)])
    }
    let history = useHistory();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>                
                <div className={styles.signInContainer}>
                <div className={styles.iconContainer}>
                    <img className={styles.img} src="/logo.svg" alt="icon"/>                    
                        <span style={{"color":"black",marginLeft:'15px'}}>Dear Diary</span>                   
                </div>
                    <div className={styles.txt}>                        
                            Sign In                        
                    </div>

                    <div  className={styles.textContainer}>
                        <div style={{width:'70%'}}>
                            <TextField
                            style={{width:'100%'}}
                            error={error}
                            id="outlined-error-helper-text"
                            label="Your Nickname*"
                            helperText={error}
                            variant="outlined"
                            placeholder="Your Nickname"
                            onBlur={onNickName}
                            value={nickName}
                            onChange={e=>{setNickName(e.target.value);onNickName()}}
                            />                            
                        </div>                        
                        <div style={{marginLeft:"20px"}}>
                            <div style={{width:"100px"}} className={styles.btn} onClick={random}>RANDOM</div>
                        </div>
                    </div>
                        
                    <div style={{textAlign:"center"}}>
                        <div className={styles.btn} onClick={submit}>CONTINUE</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SignIn
