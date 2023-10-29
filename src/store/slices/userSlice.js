import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from '../../api';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUssers`, async (arg, thunkAPI) => {
    
    try{
        console.log(arg)
        const {data: users} =  await API.getUsers();

        return users;
    }catch (error){
        console.log(error);

        return thunkAPI.rejectWithValue(error.message);
    }
})

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });

        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    },
        
    
})

export {getUsers};

export default userSlice.reducer;
