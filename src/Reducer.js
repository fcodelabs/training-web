

const Reducer =(cards=[],action)=>{
    if(action.type==="ADDCard"){
        return [...cards, action.payload];
    }

    return cards;
};
   
export default Reducer;

