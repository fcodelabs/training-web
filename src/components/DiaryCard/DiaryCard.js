import React,{useState} from 'react'
import PropTypes from 'prop-types';
import styles from './DiaryCard.module.css';

function DiaryCard({title,subtitle,description,bgColor}) {

    const [showMore, setstate] = useState(false)

    const getDescription=()=>{
        if(description.length>100 && !showMore){
            let smallDescription=description.substring(0,20);
            return(
                <div>{smallDescription} ...</div>
            )
        }
        else{
            return<div>{description}</div>
        }
    }

    return (
        <div className={styles.container} style={{"background":bgColor}}>
            
            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.subtitle}>
                {subtitle}
            </div>

            <div className={styles.description}> 
                {getDescription()} 
            </div>

            {description.length>10 &&
                <div className={styles.showMore}>
                    {showMore?<div onClick={()=>setstate(false)}>SHOW LESS</div> : <div onClick={()=>setstate(true)}>SHOW MORE</div>}
                </div>
            }
        
        </div>
    )
}

DiaryCard.propTypes = {
    title: PropTypes.string,
    subtitle:PropTypes.string,
    description:PropTypes.string,
    bgColor:PropTypes.string
  };

export default DiaryCard
