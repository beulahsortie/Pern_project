import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:4050/api";

export default axios.create({
  baseURL,
});