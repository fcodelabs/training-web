export const addNote = ({ id, tittle, description, userName }) => {
    return {
        type: 'ADD_NOTE',
        payload: { id, tittle, description, userName }
    }
}

export const addName = ({ name }) => {
    return {
        type: "ADD_USER",
        payload: { name }
    }
}

export const getnoteList = (noteList) => {
    return {
        type: "GET_LIST",
        noteList
    }
}