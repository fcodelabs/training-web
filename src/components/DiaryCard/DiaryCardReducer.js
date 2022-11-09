

const initialState={
    description1:'',
    description2:'',
    dot:'',
    expandMore:'none'
}
const reducer=(state=initialState,action)=>{
    let newState={...state};
    switch(action.type){

        case "description1":
             newState.description1=action.value
             break; 

        case "description2":
            newState.description2=action.value
            break; 
         case "dot":
             newState.dot=action.value
             break; 

        case "expandMore":
            newState.expandMore=action.value
            break; 

            default:
                break;
    }
    return newState;
}
export default reducer;