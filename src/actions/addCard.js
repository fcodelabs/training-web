import * as type  from '../types';

export function addCard(card){
    return{
        type:type.ADD_CARD,
        payload:card,
    }
   
    
}

    


