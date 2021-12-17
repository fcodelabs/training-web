export default function reducer (state =[], action) {
  switch (action.type){
    case "addNewCard":
      return [
        ...state, action.payload
      ]
    case "addFirebaseData":
      state = action.payload
      return state
    default:
      return state;
  }
}