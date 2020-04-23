import { createStore, combineReducers } from 'redux';
import profileReducer from 'redux/profileReducer';
import dialogsReducer from 'redux/dialogsReducer';
import sidebarReducer from 'redux/sidebarReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
