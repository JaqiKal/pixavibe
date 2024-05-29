import axios from "axios";

// Setting the base URL for all axios requests to the API endpoint
axios.defaults.baseURL = "https://pixavibe-api-1b79caa01d4f.herokuapp.com/";
// Setting the default Content-Type header for POST requests
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// Allowing axios to include credentials (such as cookies) in requests
axios.defaults.withCredentials = true;