import { configureStore } from "@reduxjs/toolkit";
import counterReeduser from './slices/counterSlice';

const store = configureStore({
    reducer: counterReeduser
});

export default store