const initialState = {
    notes: []
}

const reducer = (previousState = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_NOTE":
            return {
                ...previousState,
                notes: [...previousState.notes, payload]
            }
        
        default:
            return previousState
    }
}

export default reducer