import axios from "axios";

export const api = axios.create({
    baseURL: "https://loan-system-api.onrender.com",
    timeout: 5000
});
