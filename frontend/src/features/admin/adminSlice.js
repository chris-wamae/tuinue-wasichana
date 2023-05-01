import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    state: "idle",
    error: null,
    reviewCharities: [],
    deleteCharities: []
}


const PENDING_CHARITIES = "https://tuinue-wasichana-api.onrender.com/admin/pending_charities";

export const approveCharity = createAsyncThunk("admin/approveCharity", async (id) => {
    const response = await axios.put(`https://tuinue-wasichana-api.onrender.com/admin/charities/${id}/approve`)
    return [...response.data]
})

export const rejectCharity = createAsyncThunk("admin/rejectCharity", async (id) => {
    const response = await axios.put(`https://tuinue-wasichana-api.onrender.com/admin/charities/${id}/reject`)
    return [response.data]
})

export const deleteCharity = createAsyncThunk("admin/deleteCharity", async(id) =>{
    const response = await axios.delete(`https://tuinue-wasichana-api.onrender.com/admin/charities/${id}`)
    return [response.data]
})


export const pendingCharities = createAsyncThunk("admin/pendingCharities", async() =>{
    const response = await axios.get(PENDING_CHARITIES)
    return [response.data]
})


export const approvedCharities = createAsyncThunk("admin/approveCharities", async() =>{
    const response = await axios.get("https://tuinue-wasichana-api.onrender.com/admin/approved_charities")
    return [response.data]
})


const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
    }, extraReducers(builder) {
        builder
            .addCase(approveCharity.fulfilled, (state, action) => {
                console.log(action.payload);
            })
            .addCase(rejectCharity.fulfilled, (state, action) => {
               console.log(action.payload)
            })
            .addCase(pendingCharities.fulfilled,(state,action) =>{
                state.reviewCharities = action.payload;
            })
            .addCase(approvedCharities.fulfilled,(state,action) =>{
                state.deleteCharities = action.payload;
            })
            .addCase(deleteCharity.fulfilled,(state,action) =>{
                console.log(action.payload)
            })
    }
})

export const selectDelete = (state) => (state.admin.deleteCharities)

export const selectPending = (state) => (state.donors.reviewCharities)


export default adminSlice.reducer;

