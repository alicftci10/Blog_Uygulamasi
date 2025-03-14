import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const api_url = "https://localhost:7188/api"

export const loginUser = createAsyncThunk("login/loginUser", async (userData) => {
    const response = await axios.post(`${api_url}/LoginApi/Giris`, userData);
    const data = response.data;

    if (data && data.jwtToken) {
        localStorage.setItem("user_data", JSON.stringify(data));
    }
    return data;
});

export const logoutUser = createAsyncThunk("login/logoutUser", async () => {
    return localStorage.removeItem("user_data");
});

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        user: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            })
    }
})

export const { } = loginSlice.actions

export default loginSlice.reducer