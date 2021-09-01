import { NICKNAME_SET, NICKNAME_LISTEN } from "./actionTypes";

export function nickNameSet(nickName) {
    return ({
        type: NICKNAME_SET,
        nickName
    })
}

export function nickNameListen(nickName) {
    return ({
        type: NICKNAME_LISTEN,
        nickName
    })
}