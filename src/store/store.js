import { configureStore } from "@reduxjs/toolkit";
import counterReeduser from './slices/counterSlice';
import langReducer from './slices/langSlice';
import themeReducer from './slices/themeSlice';
import userReduser from './slices/userSlice'

const store = configureStore({
    reducer: {
            counter: counterReeduser,
            lang: langReducer,
            theme: themeReducer,
            users: userReduser
    }
});

export default store;