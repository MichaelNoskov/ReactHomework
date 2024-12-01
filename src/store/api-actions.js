import { URLs } from "../components/const";
import axios from "axios";

export const getNewsListAction = async function(){
    let response = await axios.get(URLs.news);
    return await response.data
}

export const getServicesListAction = async function(id='') {
    let response = await axios.get(`${URLs.services}/${id}`);
    return response.data
}