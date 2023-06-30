import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
export const api = instance;
