import { SET_USER_NAME } from "./action";

export interface State {
  userName: string;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  userName: "",
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
}
