import axios from 'axios';
import { API } from '../shared/constants';

const api = axios.create({
  baseURL: `${API.API_URL}${API.prefix}`,
});
