
import axios from "axios";
import { environment } from "../environment";

export const getAllBuyByCoinTool = (body) => {
    return axios.post(environment.baseUrl + 'buybycoin',body)
}

export const getWallet = (id) => {
    return axios.post(environment.baseUrl + 'buybycoin',id)
}

export const getSearch = (body) => {
    return axios.post(environment.baseUrl+'coins',body)
}