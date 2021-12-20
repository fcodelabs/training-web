export default function reducer (state =[], action) {
  switch (action.type){
    case "addFirebaseData":
      state = action.payload
      return state
    default:
      return state;
  }
}