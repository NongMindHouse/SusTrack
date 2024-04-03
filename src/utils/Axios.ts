import axios from "axios";

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://next-api-ashen.vercel.app",
  // withCredentials: true,
});
