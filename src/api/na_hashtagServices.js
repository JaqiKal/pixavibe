/**
 * Customized to cater for fetching hashtags data.
 * This module provides functionality to fetch hashtags from the Pixavibe API.
 */
import axios from "axios";

const BASE_URL = "https://pixavibe-api-1b79caa01d4f.herokuapp.com/hashtags/";

// This function sends a GET request to the base URL of the Pixavibe API
// to retrieve a list of hashtags.
export const getHashtags = () => {
  return axios.get(BASE_URL);
};
