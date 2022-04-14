import axios from "axios";

const accesToken = '692832'
const apiUrl =  'https://api.petsalva.com/api/v1/';

const API = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${accesToken}`
      }
})

export default API;
