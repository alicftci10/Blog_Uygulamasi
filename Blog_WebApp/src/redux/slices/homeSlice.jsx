import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const { } = homeSlice.actions

export default homeSlice.reducer