import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackend-production-ac9e.up.railway.app//api"
});

export default API;
