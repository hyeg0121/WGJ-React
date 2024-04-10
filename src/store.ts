import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import { UserData } from './types/user';

export interface RootState {
  user: UserData | null;
}

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;