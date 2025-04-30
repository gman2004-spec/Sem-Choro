import axios from "axios";

export const apiDragonBall = axios.create({
  baseURL: "https://www.dragonball-api.com/api"
});

export default apiDragonBall;
