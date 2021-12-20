import * as type from '../types';

const initialState={
  cards:[],
  card:[]
  // loading:false,
  // error:null

  };
  
  
export default function cards (state=initialState,action){
  switch(action.type){
    case type.ADD_CARD:
      console.log('aa');
        return{
         
         card:action.payload,
        }

    case type.GET_CARDS_REQUESTED:
      return{
        
        ...state,
        //loading:true,
        cards:action.payload,
      }
   
    default:
      return state;
  }

         
};

