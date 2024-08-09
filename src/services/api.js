import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getData = () => {
    return axios.get(`${API_URL}/data`);
};

export const postData = (data) => {
    return axios.post(`${API_URL}/data`, data);
};

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is connected!' });
});