import axios from 'axios';

const API_URL = process.env.API_URL || "http://localhost:8080/"

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

instance.defaults.headers.common['Authorization'] = `Bearer ${typeof window !== "undefined" && localStorage.getItem("access_token")}`;

export default instance;
