import { NICKNAME_SET } from "./actioTypes";

const init = {
    nickName: "asdasd",
}

export default function loginReducer(state = init, action) {

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