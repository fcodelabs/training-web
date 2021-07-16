
const initialState = {
    notes: [],
    name: 'GUEST'
}



const reducer = (previousState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case "ADD_NOTE":
            return {
                ...previousState,
                notes: [...previousState.notes, payload]
            }

        case "GET_LIST":
            return {
                ...previousState,
                notes: action.noteList
            }
        case "ADD_USER":
            return {
                ...previousState,
                name: action.payload.name
            }

        default:
            return previousState
    }
}

export default reducer