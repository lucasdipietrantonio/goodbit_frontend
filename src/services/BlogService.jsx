import axios from "axios";
import { environment } from "../environment";

export const getAllBlogs = (body) => {
        return axios.post(environment.baseUrl + 'blogs',body)
}
export const getBlog = (id) => {
    return axios.post(environment.baseUrl + 'blog',id)
}
export const getCategory = () => {
    return axios.post(environment.baseUrl + 'blogCategory')
}