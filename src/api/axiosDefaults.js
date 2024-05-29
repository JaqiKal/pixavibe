import axios from "axios";

axios.defaults.baseURL = "https://pixavibe-api-1b79caa01d4f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;