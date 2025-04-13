// public/js/api.js

export const BASE_URL = 'http://localhost:5000/api';

export const endpoints = {
  register: `${BASE_URL}/auth/register`,
  login: `${BASE_URL}/auth/login`,
  addFood: `${BASE_URL}/food/add`,
  getFoodByDate: (userId, date) => `${BASE_URL}/food/${userId}/${date}`,
  getSummary: (userId, date) => `${BASE_URL}/summary/${userId}/${date}`
};
