
import axios from "axios";
import { environment } from "../environment";

export const getAllWallet = (body) => {
        return axios.post(environment.baseUrl + 'wallet',body)
}

export const getWallet = (id) => {
    return axios.post(environment.baseUrl + 'wallet',id)
}

export const getSearch = (body) => {
    return axios.post(environment.baseUrl+'coins',body)
}