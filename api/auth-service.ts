import instance from './interceptors';
import { firebaseErrorMessages } from './firebaseErrorMessages';
import { AxiosError } from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const getErrorMessage = (error: unknown) => {
  let message = 'Произошла неизвестная ошибка';

  if (typeof error === 'string') {
    message = error;
  } else if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError<any>;
    const errorMessage = axiosError.response?.data?.error?.message || axiosError.message;
    message = firebaseErrorMessages[errorMessage] || 'Произошла неизвестная ошибка';
  }

  return message;
};

export const StatisticsService = {
  async createUser(email: string, password: string) {
    try {
      const response = await instance.post(`/accounts:signUp?key=${API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      });

      return response.data.idToken;
    } catch (error) {
      throw getErrorMessage(error);
    }
  },
  async login(email: string, password: string) {
    try {
      const response = await instance.post(`/accounts:signInWithPassword?key=${API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      });

      return response.data.idToken;
    } catch (error) {
      throw getErrorMessage(error);
    }
  },
};


/*
async function authenticate(mode, email, password) {
  //mode signUp or signInWithPassword
  const url = `/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}*/
