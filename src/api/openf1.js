import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openf1.org/v1",
});

export default api;