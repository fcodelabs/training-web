export const addName = ({ name }) => {
    return {
        type: "ADD_USER",
        payload: { name }
    }
}