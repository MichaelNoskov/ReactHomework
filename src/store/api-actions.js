import { URLs, API_AUTH_PATH } from "../components/const";
import axios from "axios";

export const getNewsListAction = async function(){
    let response = await axios.get(URLs.news);
    return await response.data
}

export const getServicesListAction = async function(id='') {
    let response = await axios.get(`${URLs.services}/${id}`);
    return response.data
}

export const logIn = async function(user) {
    const url = API_AUTH_PATH + '/login'
    let response = await axios.post(url, user, {headers: {'Content-Type': 'application/json'}})
    return response
}
