let initial_state = {itemsArray:[]};
export default (state=initial_state,action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return {...state,itemsArray:[...state.itemsArray,...action.payload]};
        case 'CREATE_ITEM':
            return {...state,itemsArray:[...state.itemsArray,action.payload]};
        default:
            return state;
    }
}
