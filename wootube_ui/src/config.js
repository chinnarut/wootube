import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://wootube-api.onrender.com/api"
});