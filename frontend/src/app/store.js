import {configureStore} from "@reduxjs/toolkit"
import charitiesSlice from "../features/charity/charitiesSlice";
import donorsSlice from "../features/donor/donorsSlice";

const store = configureStore({
    name:"tuinue-wasichana",
    reducer:{
    charities: charitiesSlice,
    donors:donorsSlice
    }
})

export default store;
