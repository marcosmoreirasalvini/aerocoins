import axios from 'axios';

const instance = axios.create({
  // this must be a ENV
  baseURL: 'https://coding-challenge-api.aerolab.co/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDdhMDE2MWJlY2E0ZjAwNmNjYjMxZDEiLCJpYXQiOjE1NjgyNzY4MzN9.QVyLB1jwrT5XMqLiq5YQbMyhIpCdNKQrB7yk8x2LOHI';
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
