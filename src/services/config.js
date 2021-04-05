import axios from 'axios';
import { TOKEN_KEY } from './auth';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/',
});


export const configHeader = {
  headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}` }
};

export const authToken = (token) => {
  if (token) {
    axiosClient.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosClient.defaults.headers.common['x-auth-token'];
  }
};
