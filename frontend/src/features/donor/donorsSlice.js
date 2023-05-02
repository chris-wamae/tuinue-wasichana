import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    state: "idle",
    error: null,
    donorsList: [],
    donationAmount:0,
    namedDonors:[],
    anonymousDonors:[]
}

const USERS_URL = "https://tuinue-wasichana-api.onrender.com/users";

export const fetchNamedDonors = createAsyncThunk("donors/fetchNamedDonors", async (id) => {
    const response = await axios.get(`https://tuinue-wasichana-api.onrender.com/charities/${id}/donations/non_anonymous_donations`)
    return [...response.data.data]
})

export const fetchAnonymousDonors = createAsyncThunk("donors/fetchAnonymousDonors", async (id) => {
    const response = await axios.get(`https://tuinue-wasichana-api.onrender.com/charities/${id}/donations/anonymous_donations`)
    return [...response.data.data]
})

export const createDonor = createAsyncThunk("donors/createDonor", async (data) => {
    const response = await axios.post(`${USERS_URL}`, data)
    return [response.data]
})

export const updateDonor = createAsyncThunk("donors/updateDonor", async({id,data}) =>{
    const response = await axios.patch(`${USERS_URL}/${id}`,data)
    return [response.data]
})

export const deleteDonor = createAsyncThunk("donors/deleteDonor", async (id) => {
    const deleteRequest = await axios.delete(`${USERS_URL}/${id}`)
    return [deleteRequest.status]
})

export const createDonation = createAsyncThunk("donors/createDonation", async ({id,data}) => {
    const createDonation = await axios.post(`https://tuinue-wasichana-api.onrender.com/donors/${id}/donations/`,data)
    return [createDonation.data]
})

const donorsSlice = createSlice({
    name: "donors",
    initialState,
    reducers: {
    changeDonateAmount:(state,action) => void(state.donationAmount = action.payload)

    }, extraReducers(builder) {
        builder
            .addCase(fetchNamedDonors.fulfilled, (state, action) => {
                state.namedDonors = action.payload;
            })
            .addCase(fetchAnonymousDonors.fulfilled, (state, action) => {
                state.anonymousDonors = action.payload;
            })
            .addCase(createDonor.fulfilled, (state, action) => {
                state.donorsList = action.payload;
            })
            .addCase(updateDonor.fulfilled,(state,action) =>{
                state.donorsList = action.payload;
            })
            .addCase(deleteDonor.fulfilled,(state,action) =>{
                console.log(action.payload)
            })
            .addCase(createDonation.fulfilled,(state,action) =>{
                console.log(action.status)
            })
    }
})

export const selectNamedDonors = (state) => (state.donors.namedDonors)
export const selectAnonymousDonors = (state) => (state.donors.anonymousDonors)

export const selectDonationAmount = (state) => (state.donors.donationAmount)

export const {changeDonateAmount} = donorsSlice.actions;

export default donorsSlice.reducer;