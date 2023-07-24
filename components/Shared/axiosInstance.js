// https://api.polypixstudios.com/api

const { default: axios } = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.polypixstudios.com/api",
});

export default axiosInstance;
