import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost/wp-react/wp-json",
});

export default API;