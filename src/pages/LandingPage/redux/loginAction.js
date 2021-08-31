import { NICKNAME_SET } from "./actioTypes";

export function nickNameSet(nickName) {
    return ({
        type: NICKNAME_SET,
        nickName
    })
}