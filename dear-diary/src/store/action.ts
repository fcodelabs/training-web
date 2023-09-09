export const SET_USER_NAME = "SET_USER_NAME";

interface SetNameAction {
  type: typeof SET_USER_NAME;
  payload: string;
}

export function setUserName(name: string): SetNameAction {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
}
