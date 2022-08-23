import { SUBMIT_BUTTON_CLICK } from "./type"

export const getDetails = () => {
    return{
        type:{SUBMIT_BUTTON_CLICK},
        payload:[{
            title:"Dummy 1",
            description: "Dummy description for caart funtion"
        }]

    }

}