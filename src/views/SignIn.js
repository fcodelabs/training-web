import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import styles from './SignIn.module.css';

function SignIn() {
    let history = useHistory();
    const [nickName, setNickName] = useState("")
    const [error, setError] = useState()
    const onClk = ()=>{
        console.log(nickName)
        if(!nickName){
            setError("required*")
        }else{setError("")}
    }
    const submit = ()=>{
        if(nickName){
            localStorage.setItem("nickName",nickName)  
            history.push("/home")
            return
        }
        alert("Input everything")
    }

    const random=()=>{
        let names = ["A","B","C","D","E","F","G","H"]
        setNickName(names[Math.floor((Math.random() * names.length) + 1)])
    }

	 return(
        <div className={styles.root}>
            <div className={styles.container}>
                {/* <div className={styles.imgContainer}>
                    <img className={styles.img} src="/icon.png" alt="APP Icon"/>
                    <div>
                        <span style={{"color":"white",marginLeft:'15px'}}>Dear Diary</span>
                    </div>
                </div> */}
                <div className={styles.signInContainer}>
                    <div className={styles.signInDiv}>
                        <span>
                            Sign In
                        </span>
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
                            onBlur={onClk}
                            value={nickName}
                            onChange={e=>{setNickName(e.target.value);onClk()}}
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



export default SignIn;