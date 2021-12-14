

// const cardReducer = (state = {}, action) => {
//     switch (action.type) {
//       case "ADD_CARD": {
//         console.log("Added a card");
//         return state;
//       }
//       case "ADD_CARD_ERR": {
//         console.log("An error occurred");
//         return state;
//       }
      
//       default:
//         return state;
//     }
//   };
  
  //export default cardReducer;

//   const initState ={
//       cards:[
//           {id:'1',title:"asdfgh",description:"sdfghjkghj"},
//           {id:'2',title:"dffgh",description:"sdfghjkghj"},
//       ]
//   }

//   const cardReducer =(state = initState, action)=>{
//       return state
//   }

//   export default cardReducer;
import {createStore} from 'redux';

const initialState={
  title:'',
  description:'',
  cards:[]
};


  function cardReducer (state=initialState,action){
        if(action.type==="ADD_CARD"){
            return [...state, action.payload];
            
        }
    
        return state;
    };
       
    export const store = createStore(cardReducer);
    export const getAllCards= (state)=>state.cards;