import axios from "axios";

import { api } from "../utils/config";

let token;
if (typeof window !== "undefined") {
  token = sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : null;
}
console.log(token);
const Axios = axios.create({
  baseURL: api.main,
  // timeout: 6000,
  headers: {
    // Accept: "application/vnd.GitHub.v3+json",
    Authorization: `Bearer ${token}`,
  },
});

export default Axios;
