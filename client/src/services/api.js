import axios from "axios";

export default axios.create({
  baseURL: "https://task-tracker-backend-kvjl.onrender.com/api",
});