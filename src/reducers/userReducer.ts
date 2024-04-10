import { LOGIN_SUCCESS, UserActionTypes, UserData } from '../types/user';

const initialState: UserData | null = null;

const userReducer = (state = initialState, action: UserActionTypes): UserData | null => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;