import axios from "axios";
import { environment } from "../environment";

export const getFAQ = (body) => {
        return axios.post(environment.baseUrl + 'frequently-asked',body)
}

export const getCQ = (body) => {
        return axios.post(environment.baseUrl + 'community-question',body)
}

export const submitQuestion = (body) => {
        return axios.post(environment.baseUrl + 'ask-us-anything-create',body)
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
