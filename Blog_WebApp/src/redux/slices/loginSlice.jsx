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

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        user: null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user_data");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.jwtToken;
            })
    }
})

export const { logout } = loginSlice.actions

export default loginSlice.reducer