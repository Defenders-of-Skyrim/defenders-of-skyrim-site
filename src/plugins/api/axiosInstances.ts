import axios from 'axios';

export const backendURL = 'http://localhost:10000';

export default axios.create({
  baseURL: `${backendURL}/api/`,
  timeout: 10000,
  headers: {
    Authorization: 'Bearer c7551a603d8ce7e774123a6c5911c4',
  },
});
