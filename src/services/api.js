import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getData = () => {
  return axios.get(`${API_URL}/data`);
};

export const postData = (data) => {
  return axios.post(`${API_URL}/data`, data);
};

export const authTwitterPck = async () => {
  try {
    const res = await axios.get(`${API_URL}/test`);
    console.log(res.data);
  } catch (error) {
    console.error("Error", error);
  }
};

export const authAlpaca = async () => {
  try {
    const res = await axios.get(`${API_URL}/alpacaTest`);
    console.log(res.data);
  } catch (error) {
    console.error("Error", error);
  }
};
