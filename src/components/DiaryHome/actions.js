export const addNote = ({ id, tittle, description, userName }) => {
    return {
        type: 'ADD_NOTE',
        payload: { id, tittle, description, userName }
    }
}