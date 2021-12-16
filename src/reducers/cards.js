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
      case type.GET_CARDS_SUCCESS:
        return{
          ...state,
          loading:false,
          cards:action.cards,
        }
      case type.GET_CARDS_FAILED:
        return{
          ...state,
          loading:false,
          error:action.message,
        }
   
    default:
      return state;
  }
         
};

