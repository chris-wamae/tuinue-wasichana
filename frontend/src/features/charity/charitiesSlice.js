import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL = "https://tuinue-waichana-backend.onrender.com/";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    charitiesList: [],
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

export const fetchSingleCharity = createAsyncThunk("charities/fetchSingleCharity", async (id) =>{
    const response = await axios.get(`${BASE_URL}/${id}`)
    return [response.data]
})



const charitiesSlice = createSlice({
    name: "charities",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCharities.fulfilled, (state, action) => {
                state.charitiesList = action.payload
            })
            .addCase(fetchSingleCharity.fulfilled,(state,action)=>{
                state.charitiesList = action.payload
            })
    },
});

export const selectCharities = (state) => state.charities.charitiesList

export default charitiesSlice.reducer;

