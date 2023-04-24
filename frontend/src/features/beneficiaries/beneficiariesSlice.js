import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    state: "idle",
    error: null,
    beneficiariesList: []
}


export const fetchBeneficiaries = createAsyncThunk("beneficiaries/fetchBeneficiaries", async () => {
    const response = await axios.get(`${USERS_URL}`)
    return [...response.data]
})

export const deleteBeneficiary = createAsyncThunk("beneficiaries/deleteBeneficiary", async (id) =>{
   const deleteRequest = await axios.delete(`${USERS_URL}/${id}`)
   return [deleteRequest.status]
})

export const updateBeneficiary =  createAsyncThunk("beneficiaries/updateBeneficiary", async ({id,data}) =>{
  const response = await axios.patch(`${USERS_URL}/${id}`,data)
  return [response.data]
})



const beneficiariesSlice = createSlice({
    name: "beneficiaries",
    initialState,
    reducers: {

    }, extraReducers(builder) {
        builder
        .addCase(fetchBeneficiaries.fulfilled, (state, action) => {
            state.beneficiariesList = action.payload
        })
        .addCase(deleteBeneficiary.fulfilled, (state,action) =>{
           console.log(action.payload)
        })
        .addCase(updateBeneficiary.fulfilled,(state,action) =>{
            state.beneficiariesList = action.payload
        })
    }

}

)

export const selectBeneficiaries = (state) => state.beneficiaries.beneficiariesList

export default beneficiariesSlice.reducer;





// })
