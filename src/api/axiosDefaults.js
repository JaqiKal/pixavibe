import axios from "axios";

// Setting the base URL for all axios requests to the API endpoint (Heroku)
axios.defaults.baseURL = "https://pixavibe-api-1b79caa01d4f.herokuapp.com/";
// axios.defaults.baseURL = "https://8000-jaqikal-pixavibeapi-42l9hzltclf.ws.codeinstitute-ide.net"

// Setting the default Content-Type header for POST requests
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// Allowing axios to include credentials (such as cookies) in requests
axios.defaults.withCredentials = true;

// Creating a new axios instance for making requests
export const axiosReq = axios.create();
// Creating a new axios instance for handling responses
export const axiosRes = axios.create();