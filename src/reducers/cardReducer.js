import * as type from '../types';

const initialState={
  cards:[],
  loading:false,
  error:null

  };
  
  
export default function cardReducer (state=initialState,action){
  switch(action.type){
    case "ADD_CARD":
      return{...state,loading:true};
    // case "ADD_CARD_FAILED":
    //   return{...state,loading:false,error:action.message};
    default:
      return state;
  }
         
};

export default cards;