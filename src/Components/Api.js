import axios from "axios";

const baseURL = "https://fooddonation-backend.onrender.com";

export default axios.create({ baseURL: baseURL });
