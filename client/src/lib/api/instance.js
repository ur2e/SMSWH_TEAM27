import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://ec2-18-218-203-237.us-east-2.compute.amazonaws.com:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
