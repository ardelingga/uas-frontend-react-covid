import { createSlice } from "@reduxjs/toolkit";


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
        ]
    },
    reducers: {
        setCovidStatus(state, action){
            state.covidStatus = action.payload;
        }
    }
})

const covidReducer = covidSlice.reducer;
const { setCovidStatus } = covidSlice.actions;

export default covidReducer;
export {
    setCovidStatus
};