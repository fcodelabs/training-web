

const initialState={
    
    userName:'',
    disabled:false

}
const reducer=(state=initialState,action)=>{
    let newState={...state};
    switch(action.type){
       
     

        case "userName":
             newState.userName=action.value
             break; 

        case "disabled":
            newState.disabled=action.value
            break; 
            

            default:
                break;
    }
    return newState;
}
export default reducer;