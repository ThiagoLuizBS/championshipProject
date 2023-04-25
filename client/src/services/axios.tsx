import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://championship-project-9hyg.vercel.app/api",
  headers: {
    "Content-type": "application/json",
  },
});
