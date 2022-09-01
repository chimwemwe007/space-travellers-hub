import { configureStore } from '@reduxjs/toolkit';
// import axios from 'axios';
import fetchRockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    books: fetchRockets,
  },
});

export default store;
