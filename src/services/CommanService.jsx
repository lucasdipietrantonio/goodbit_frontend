import axios from "axios";
import { environment } from "../environment";
export const saveNewsLatterEmail = (body) => {
    return axios.post(environment.baseUrl + 'newslatter',body)
}

export const showToaster = (type,msg) => {
    let myToaster = new CustomEvent("showToast", {
        detail: {
         type:type,
         msg:msg,
         isShowToast:true
        }
    });
    document.dispatchEvent(myToaster);
}