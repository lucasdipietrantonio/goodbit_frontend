import axios from "axios";
import { environment } from "../environment";

export const getSearch = (body) => {
        return axios.post(environment.baseUrl + 'ask-us-anything-search',body)
}

// export const login = request => {
//     return axios
//         .post(environemnt.BASE_API + environemnt.LOGIN, request)
//         .then(function(response) {
//             return response.data;
//         })
//         .catch(function(error) {
//             return error.response.data;
//         });
// };

// export const socialLogin = request => {
//     return axios
//         .post(environemnt.BASE_API + environemnt.SOCIAL_LOGIN, request)
//         .then(function(response) {
//             return response.data;
//         })
//         .catch(function(error) {
//             return error.response.data;
//         });
// };
