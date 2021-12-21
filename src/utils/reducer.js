export default function reducer (state =[], action) {
  switch (action.type){
    case "addFirebaseData":
      state = action.payload
      return state.sort((a,b) => (a.created < b.created ? 1: -1))
    default:
      return state;
  }
}