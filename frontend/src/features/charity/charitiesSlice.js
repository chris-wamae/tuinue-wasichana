import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CHARITIES_URL = "https://tuinue-wasichana-api.onrender.com/charities/"

const initialState = {
    charitiesList: [],
    status: "idle",
    error: null,
    beneficiaries: [],
    singleCharityId: undefined,
    singleCharity: undefined
};

export const fetchCharities = createAsyncThunk(
    "charities/fetchCharities",
    async () => {
        const response = await axios.get(CHARITIES_URL)
        return [...response.data]
    }
);

export const fetchSingleCharity = createAsyncThunk("charities/fetchSingleCharity", async (id) => {
    const response = await axios.get(`${CHARITIES_URL}/${id}`)
    return [response.data]
})

export const createCharity = createAsyncThunk("charities/createCharity", async (data) => {
    const response = await axios.post("https://tuinue-wasichana-api.onrender.com/users/", data)
    return [response.data]
})


export const updateCharity = createAsyncThunk("charities/updateCharity", async ({ id, data }) => {
    const response = await axios.patch(`${CHARITIES_URL}/${id}`, data)
    return [response.data]
})


export const deleteCharity = createAsyncThunk("charities/deleteCharity", async ({ id }) => {
    const deleteRequest = await axios.delete(`${CHARITIES_URL}/${id}`)
    return deleteRequest.status
})

const charitiesSlice = createSlice({
    name: "charities",
    initialState,
    reducers: {
        changeSingleCharityId: (state, action) => {
            state.singleCharityId = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCharities.fulfilled, (state, action) => {
                state.charitiesList = action.payload
            })
            .addCase(fetchSingleCharity.fulfilled, (state, action) => {
                state.singleCharity = action.payload
            })
            .addCase(createCharity.fulfilled, (state, action) => {
                state.charitiesList = action.payload
            })
            .addCase(updateCharity.fulfilled, (state, action) => {
                state.charitiesList = action.payload
            })
            .addCase(deleteCharity.fulfilled, (state, action) => {
                console.log(action.payload)
            })
    },
});

export const selectCharities = (state) => state.charities.charitiesList
export const selectSingleCharity = (state) => state.charities.singleCharity
export const selectSingleCharityId = (state) => state.charities.singleCharityId
export const { changeSingleCharityId } = charitiesSlice.actions;

export default charitiesSlice.reducer;

