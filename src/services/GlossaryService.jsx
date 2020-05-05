import axios from "axios";
import { environment } from "../environment";

export const getGlossaryData = () => {
    return axios.post(environment.baseUrl+'glossary').then((res) => {
        environment.glossaryData = res.data.result;
       })
       .catch((error) => {
           console.error('getGlossaryData =>', error)
       });
}
export const getGlossary = () => {
    return axios.post(environment.baseUrl+'glossary');
}
export const searchGlossaryData = (body) => {
    return axios.post(environment.baseUrl+'search',body);
}
export const getGlossaryDataAtoZ = () => {
    return axios.post(environment.baseUrl+'glossary-atoz');
}