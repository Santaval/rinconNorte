import axios from "axios";

const apiv1 = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});
export default apiv1;
