const initialState = {
    cards: []
}


export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "STORE_CARDS":
            return {
                ...state,
                cards: action.payload
            }
        case "ADD_NEW_CARD": 
        return {
            ...state,
            cards: [...state.cards, {...action.payload}]
        }
        default:
            return state;
    }
}