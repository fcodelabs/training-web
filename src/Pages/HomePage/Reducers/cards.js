import * as type from '../types';

const initialState={
  cards:[],
  loading:false,
  error:null

  };
  
  
export default function cards (state=initialState,action){
  switch(action.type){
    case type.GET_CARDS_REQUESTED:
      return{
        
        ...state,
        loading:true,
        cards:action.payload,
      }
   
    default:
      return state;
  }

         
};