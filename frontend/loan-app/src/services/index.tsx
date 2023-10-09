import axios from "axios";

export const api = axios.create({
    baseURL: "https://loan-system-api.onrender.com/api/",
    timeout: 10000
});
