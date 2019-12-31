import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:10000/api/',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer c7551a603d8ce7e774123a6c5911c4',
  },
});
