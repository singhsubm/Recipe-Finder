import { createSlice } from "@reduxjs/toolkit";

const viewMore = createSlice({
    name: "viewMore",
    initialState: {
        viewMore: false,
    },
    reducers: {
        setViewMore:(state,action)=>{
            state.viewMore = action.payload;
        },
    },
})
export const {setViewMore} = viewMore.actions;
export default viewMore.reducer;