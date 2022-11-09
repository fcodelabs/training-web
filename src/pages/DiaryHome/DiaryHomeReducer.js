

const initialState={
    descVisiility:'none',
    btnVisibility:'none',
    txtAreaStyle:'9rem',
    textFieldLength:'25rem',
    duration:'0s',
    title:'',
    description:'',
    description1:'',
    description2:'',
    card:[]

}
const reducer=(state=initialState,action)=>{
    let newState={...state};
    switch(action.type){

        case "descVisiility":
            newState.descVisiility=action.value
            break;
     
        case "btnVisibility":
            newState.btnVisibility=action.value
            break; 

        case "txtAreaStyle":
            newState.txtAreaStyle=action.value
            break; 

        case "textFieldLength":
            newState.textFieldLength=action.value
            break; 

        case "duration":
            newState.duration=action.value
            break; 

        case "title":
            newState.title=action.value
            break; 
            
        case "description":
            newState.description=action.value
            break; 
            
        case "description1":
            newState.description1=action.value
            break; 
   
        case "description2":
            newState.description2=action.value
            break; 

            case "card":
                newState.card =action.value
                break; 
            default:
                break;
    }
    return newState;
}
export default reducer;