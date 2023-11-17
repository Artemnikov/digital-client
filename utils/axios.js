import axios from 'axios';

const API_URL = process.env.API_URL

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

instance.defaults.headers.common['Authorization'] = `Bearer ${typeof window !== "undefined" && localStorage.getItem("access_token")}`;

export default instance;
