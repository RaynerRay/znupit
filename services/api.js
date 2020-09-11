import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://znupit.herokuapp.com/",
    withCredentials: false,
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
