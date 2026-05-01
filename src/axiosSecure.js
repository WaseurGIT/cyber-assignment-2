import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // this sends the cookie to the server
});

export default axiosSecure;