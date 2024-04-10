import { CommonData } from './base';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface UserData extends CommonData{
    name: string
    email: string
    bio: string
    spentAmount: number
}

export interface SignInUserData {
    email: string
    password: string
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: UserData;
  }
  
  export type UserActionTypes = LoginSuccessAction;