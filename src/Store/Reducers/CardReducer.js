
const initialState = {
    visible: false,
    cards: [],
    name:""
  

}

const reducerFunction = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'addNew':
            let newData = { title: action.sendTitle, description: action.sendDescription }
            return {
                ...state,
                cards: [...state.cards, newData],
            }
        case 'fetchCard':
            
            return {
                ...state,
                cards: action.data}

        case 'setName' :

            return {
                ...state,
                name:action.sendName
            } 

        default:
            return state

    }
}


export default reducerFunction;