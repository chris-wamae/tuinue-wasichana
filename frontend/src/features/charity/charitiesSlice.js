import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const POSTS_URL = "https://tuinue-waichana-backend.onrender.com/";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    charitiesList: [],
    status: "idle",
    error: null,
    beneficiaries:[],
    singleCharityId:undefined
};

export const fetchCharities = createAsyncThunk(
    "charities/fetchCharities",
    async () => {
        const response = await axios.get(POSTS_URL)
        return [...response.data]
    }
);

export const fetchSingleCharity = createAsyncThunk("charities/fetchSingleCharity", async (id) =>{
    const response = await axios.get(`${POSTS_URL}/${id}`)
    return [response.data]
})

export const createCharity = createAsyncThunk("charities/createCharity", async (data) =>{
    const response = await axios.post(POSTS_URL,data)
    return [response.data]
})

export const updateCharity = createAsyncThunk("charities/updateCharity", async ({id,data}) =>{
    const response = await axios.patch(`${POSTS_URL}/${id}`,data)
    return [response.data]
} )


export const deleteCharity = createAsyncThunk("charities/deleteCharity", async ({id}) => {
   const deleteRequest = await axios.delete(`${POSTS_URL}/${id}`)
   return deleteRequest.status
})

const charitiesSlice = createSlice({
    name: "charities",
    initialState,
    reducers: {
        changeSingleCharityId: (state,action) => {
         state.singleCharityId = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCharities.fulfilled, (state, action) => {
                state.charitiesList = action.payload
            })
            .addCase(fetchSingleCharity.fulfilled,(state,action)=>{
                state.charitiesList = action.payload
            })
            .addCase(createCharity.fulfilled,(state,action)=>{
                state.charitiesList = action.payload
            })
            .addCase(updateCharity.fulfilled,(state,action) =>{
                state.charitiesList = action.payload
            })
            .addCase(deleteCharity.fulfilled,(state,action) =>{
             console.log(action.payload)
            })
    },
});

export const selectCharities = (state) => state.charities.charitiesList
export const selectSingleCharityId  = (state) => state.charities.singleCharityId
export const  {changeSingleCharityId} = charitiesSlice.actions;

export default charitiesSlice.reducer;

