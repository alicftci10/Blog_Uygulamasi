import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: {},
    loading: false
}

const api_url = "https://localhost:7188/api"

export const getUser = createAsyncThunk("getUser", async (model) => {
    const response = await axios.post(`${api_url}/LoginApi/Giris`, model);
    return response.data;
})

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
    }
})

export const { } = loginSlice.actions

export default loginSlice.reducer