import axios from "axios";

const temp = process.env.NEXT_PUBLIC_API_BASE_URL;

const request = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "development"
      ? "https://aaatest.abplus.ir:8083"
      : "https://paneldev.abplus.ir/api"
  }`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic b2FwX3dlYl9hcHA6UCFzaGtoQG4zQG9hcA==",
  },
});

// document.addEventListener("refreshTokenRecieved", () => {
//   request.interceptors.request.use(
//     function (config) {
//       const conf = { ...config };
//       conf.headers.Authorization = `Bearer ${getToken()}`;

//       return conf;
//     },
//     function (error) {
//       return promise.reject(error);
//     }
//   );
// });

// axios.interceptors.response.use(
//   (res) => res,
//   (err) => err
// );
export default request;
