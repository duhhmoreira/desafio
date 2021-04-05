import { axiosClient } from "./config";

export const TOKEN_KEY = "token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('sellerId')
};


export const registerUser = async (newUser, history) => {
  try {
    axiosClient.post('/users', newUser).then(() => {
      history.push('/');
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const login = async (user, history) => {
  try {
    await axiosClient.post('/auth/login', user).then(resp => {
      localStorage.setItem('token', resp.data.access_token);
      localStorage.setItem('sellerId', resp.data.seller_id);
      history.push('/home');
    });

  } catch (error) {
    return error;
  }
};



