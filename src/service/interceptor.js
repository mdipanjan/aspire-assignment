import axios from 'axios';
import {BASE_URL} from '../constants/secret';

const requestHandler = async request => {
  return request;
};
const errorHandler = error => {
  return Promise.reject({...error});
};

const successHandler = response => {
  console.log(response, 'SUCCESS');
  return response;
};

export const API = axios.create({
  baseURL: BASE_URL,
});
API.interceptors.request.use(request => requestHandler(request));

API.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);
