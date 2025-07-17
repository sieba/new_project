// services/signinService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

// signup
export const signupService = {
  signup : async (credentials) => {
    try {
      const res = await axios.post(`${BASE_URL}/signup`, credentials);
      return res.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
};



// login
export const signinService = {
  signin: async (credentials) => {
    try {
      const res = await axios.post(`${BASE_URL}/signin`, credentials, { withCredentials: true });
      return res.data;
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  }
};


// verify auth
export const getAuthenticatedUser = async () => {
  const res = await axios.get(`${BASE_URL}/verify`, { withCredentials: true });
  return res.data.user;
};