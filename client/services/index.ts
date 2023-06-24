import axios from 'axios';
import { API } from '../shared/constants';

const api = axios.create({
  baseURL: `${API.API_URL}${API.prefix}`,
});

export const getStats = async () => {
  try {
    const response = await api.get('/users/stats');
    return {
      success: true,
      data: response.data.data,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};
