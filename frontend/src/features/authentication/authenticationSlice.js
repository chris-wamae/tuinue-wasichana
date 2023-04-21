import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOGIN_URL = "https://jsonplaceholder.typicode.com/users"

const initialState = {
    state:"idle",
    error:null,
    loggedUser:undefined
}

export const loginUser = createAsyncThunk("authentication/loginUser", async (data) =>{
 const response = await axios.post(LOGIN_URL,data) 
 return [response.data]
})

export const logoutUser = 

const authenticationSlice = createSlice(
    {
      name:"authentication",
      initialState,
      reducers:{

      },extraReducers(builder){
        builder.addCase(loginUser.fulfilled,(state,action) =>{
            state.loggedUser = action.payload
        })
      }
    })

export const selectUser = (state) => state.login.loggedUser


export default authenticationSlice.reducer;
