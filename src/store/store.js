import { configureStore } from "@reduxjs/toolkit";
import counterReeduser from './slices/counterSlice';
import langReducer from './slices/langSlice';
import themeReducer from './slices/themeSlice'

const store = configureStore({
    reducer: {
            counter: counterReeduser,
            lang: langReducer,
            theme: themeReducer
    }
});

export default store;