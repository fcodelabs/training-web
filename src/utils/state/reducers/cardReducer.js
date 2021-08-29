const reducer = (state = [], action) => {
    if (action.payload) {
        state.push(action.payload);
    }
    return state;
}

export default reducer;