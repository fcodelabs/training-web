const reducer = (state = [], action) => {
    if (action.payload) {
        state = [...state, action.payload];
    }
    return state;
}

export default reducer;