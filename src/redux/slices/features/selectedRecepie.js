import { createSlice } from "@reduxjs/toolkit";

const selectedRecepie = createSlice({
    name: "selectedRecepie",
    initialState:{
        selectedRecepie:null,
    },
    reducers: {
        setSelectedRecepie : (state,action)=> {
            state.selectedRecepie = action.payload;
        },
    },
})
export const {setSelectedRecepie} = selectedRecepie.actions;
export default selectedRecepie.reducer;