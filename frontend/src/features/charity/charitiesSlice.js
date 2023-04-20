import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL = "https://tuinue-waichana-backend.onrender.com/";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    charities: [],
    status: "idle",
    error: null,
};

export const fetchCharities = createAsyncThunk(
    "charities/fetchCharities",
    async () => {
        const response = await axios.get(BASE_URL)
        return [...response.data]
    }
);

const charitiesSlice = createSlice({
    name: "charities",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCharities.fulfilled, (state, action) => {
                state.charities = action.payload
            })
    },
});

export const selectCharities = (state) => state.charities

export default charitiesSlice.reducer;

