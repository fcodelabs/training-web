export default function reducer (state =[], action) {
  switch (action.type){
    case "addNewCard":
      return [
        ...state, action.payload
      ]
    default:
      return state;
  }
}