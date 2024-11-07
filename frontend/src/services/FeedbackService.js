import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const submitFeedback = (feedbackData) => {
  return axios.post(`${API_URL}/feedback`, feedbackData);
};

export const getFeedback = () => {
  return axios.get(`${API_URL}/feedback`);
};
