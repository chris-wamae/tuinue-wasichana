import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

<<<<<<< HEAD
const LOGIN_URL = "http://127.0.0.1:3000/users/sign-in"
=======
const LOGIN_URL = "http://127.0.0.1:3000/users/sign_in"
>>>>>>> origin/Development

const LOGOUT_URL  = "https://jsonplaceholder.typicode.com/users/1"

const initialState = {
    state:"idle",
    error:null,
    loggedUser:undefined
}

export const loginUser = createAsyncThunk("authentication/loginUser", async (data) =>{
 const response = await axios.post(LOGIN_URL,data) 
 return [response.data]
})

export const logoutUser = createAsyncThunk("authentication/logoutUser", async () =>{
 const logoutRequest = await axios.delete(LOGOUT_URL)
 return [logoutRequest.status]
})

const authenticationSlice = createSlice(
    {
      name:"authentication",
      initialState,
      reducers:{

      },extraReducers(builder){
        builder
        .addCase(loginUser.fulfilled,(state,action) =>{
            state.loggedUser = action.payload
        })
        .addCase(logoutUser.fulfilled,(state,action) =>{
            state.loggedUser = action.payload
        })
      }
    })

export const selectUser = (state) => state.login.loggedUser


export default authenticationSlice.reducer;
