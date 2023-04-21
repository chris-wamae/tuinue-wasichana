import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    state: "idle",
    error: null,
    donorsList: []
}

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchDonors = createAsyncThunk("donors/fetchDonors", async () => {
    const response = await axios.get(USERS_URL)
    return [...response.data]
})

export const createDonor = createAsyncThunk("donors/createDonor", async (data) => {
    const response = await axios.post(`${USERS_URL}`, data)
    return [response.data]
})

export const updateDonor = createAsyncThunk("donors/updateDonor", async({id,data}) =>{
    const response = await axios.patch(`${USERS_URL}/${id}`,data)
    return [response.data]
})


const donorsSlice = createSlice({
    name: "donors",
    initialState,
    reducers: {

    }, extraReducers(builder) {
        builder
            .addCase(fetchDonors.fulfilled, (state, action) => {
                state.donorsList = action.payload;
            })
            .addCase(createDonor.fulfilled, (state, action) => {
                state.donorsList = action.payload;
            })
            .addCase(updateDonor.fulfilled,(state,action) =>{
                state.donorsList = action.payload;
            })
    }
})

export const selectDonors = (state) => (state.donors.donorsList)

export default donorsSlice.reducer;