import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
