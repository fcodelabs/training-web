import * as type from '../types';

const initialState={
  card:null,
  
  

  };
  
  
export default function addCards (state=initialState,action){
  switch(action.type){
    case type.ADD_CARD:
      console.log('aa');
        return{
         ...state,
         card:action.card,
        }
    default:
      return state;
  }

         
};

