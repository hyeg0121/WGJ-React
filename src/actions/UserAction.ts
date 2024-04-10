import { LOGIN_SUCCESS, UserData } from '../types/user';

export const loginSuccess = (user: UserData) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});