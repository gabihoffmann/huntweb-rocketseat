import axios from 'axios'

const urlApi = "http://rocketseat-node.herokuapp.com/api";

const api = axios.create({baseURL : urlApi});


export default api;