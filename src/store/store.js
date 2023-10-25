import { configureStore } from "@reduxjs/toolkit";
import counterReeduser from './slices/counterSlice';
import langReducer from './slices/langSlice';

const store = configureStore({
    reducer: {
            counter: counterReeduser,
            lang: langReducer
    }
});

export default store