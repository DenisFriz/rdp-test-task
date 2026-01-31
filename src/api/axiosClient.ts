import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://api.sp-crm.store/public/v1",
  headers: {
    "X-Affiliate-Token": "oflrhajucckq",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClient;
