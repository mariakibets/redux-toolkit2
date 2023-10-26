import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";
const {THEMES} = CONSTANTS;

const initialState = THEMES.LIGHT;

const themeSlice = createSlice ({
    name: 'Theme',
    initialState,
    reducers: {
        setTheme: (state) => (state === THEMES.DARK ? THEMES.LIGHT: THEMES.DARK)
    }
});


export const { setTheme }  = themeSlice.actions;

export default themeSlice.reducer;
