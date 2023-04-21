import {configureStore} from "@reduxjs/toolkit"
import charitiesSlice from "../features/charity/charitiesSlice";
import donorsSlice from "../features/donor/donorsSlice";
import beneficiariesSlice from "../features/beneficiaries/beneficiariesSlice";
import authenticationSlice from "../features/authentication/authenticationSlice";

const store = configureStore({
    name:"tuinue-wasichana",
    reducer:{
    charities: charitiesSlice,
    donors:donorsSlice,
    beneficiaries:beneficiariesSlice,
    login:authenticationSlice
    }
})

export default store;
