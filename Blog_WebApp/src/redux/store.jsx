import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/slices/loginSlice';
import homeReducer from '../redux/slices/homeSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        home: homeReducer
    },
})