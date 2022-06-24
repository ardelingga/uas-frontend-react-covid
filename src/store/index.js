import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../feature/covidSlice";

// Buat store
const store = configureStore({
    reducer: {
        covidStatus: covidReducer,
    }
});

export default store;