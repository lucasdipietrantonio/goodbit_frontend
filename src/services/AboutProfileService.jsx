import axios from "axios";
import { environment } from "../environment";

export const getProfiles = () => {
        return axios.post(environment.baseUrl + 'admin-profile')
}
