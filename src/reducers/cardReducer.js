import * as type from '../types';

const initialState={
  
    cards:[]
  };
  
  
export default function cardReducer (state=initialState,action){
          if(action.type==="ADD_CARD"){
              return {...state, cards:action.payload};
              
          }
      
          return state;
      };