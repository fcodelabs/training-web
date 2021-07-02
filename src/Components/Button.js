import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    
    return (
        <div>
           
            <button 
            onClick={onClick}
            style={{backgroundColor:color , borderRadius: 8 ,color :'white' ,padding : 10 }}
            className='btn'>
                 {text}
            </button >
            
        </div>
    )
}


Button.defaultProps={
    color:'steelblue',
    text:"buton name"
}
Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button
