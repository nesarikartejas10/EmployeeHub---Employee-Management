import axios from "axios";

const api = axios.create({
  baseURL: "https://697ed532d1548030ab648da2.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
