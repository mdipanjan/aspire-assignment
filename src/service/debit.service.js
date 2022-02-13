
import {API} from './interceptor';
import {BASE_URL} from '../constants/secret';

export const debitService= () => {
  return API.get(`${BASE_URL}/a185cff0-2c2e-466d-8825-68e45cf7a5aa`).then(response => response)
  .catch(err => err);
};