import * as type  from '../types';

export function getCards(cards){
    return{
        type:type.GET_CARDS_REQUESTED,
        payload:cards,
    }
}