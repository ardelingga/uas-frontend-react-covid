import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";


const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        covidStatus:[
            {
                status: "confirmed",
                total: 0,
            },
            {
                status: "recovered",
                total: 0,
            },
            {
                status: "deaths",
                total: 0,
            },
        ],
        provincesCovidStatus: data.provinces
    },
    reducers: {
        setCovidStatus(state, action){
            state.covidStatus = action.payload;
        },
        setProvincesStatus(state, action){
            state.provincesCovidStatus = action.payload;
        },
        addProvincesStatus(state, action){
            state.provincesCovidStatus.push(action.payload);
        },
        updateDataProvincesStatus(state, action){
            state.provincesCovidStatus[action.payload.index] = action.payload.data;
        },
    }
})

const covidReducer = covidSlice.reducer;
const { setCovidStatus, setProvincesStatus, addProvincesStatus, updateDataProvincesStatus } = covidSlice.actions;

export default covidReducer;
export {
    setCovidStatus,
    setProvincesStatus,
    addProvincesStatus,
    updateDataProvincesStatus
};