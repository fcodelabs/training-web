import { NICKNAME_SET } from "./actionTypes";

const init = {
    nickName: "asdasd",
}

export default function reducer(state = init, action) {

    switch (action.type) {
        case NICKNAME_SET: {
            return {
                ...state,
                nickName: action.nickName
            }
        }
        default: {
            return state;
        }
    }

}