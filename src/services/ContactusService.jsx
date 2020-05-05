import axios from "axios";
import { environment } from "../environment";

export const contactRequest = (body) => {
    return axios.post(environment.baseUrl + 'contactus',body)
}
