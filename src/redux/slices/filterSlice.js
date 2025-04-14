import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:{
        area:'',
        category:'',
    },
    reducers:{
        setArea:(action, state)=>{
            state.area = action.payload;
        },
        setCategory:(action, state)=>{
            state.category = action.payload;
        },
    }
})
export const {setArea, setCategory} = filterSlice.actions;
export default filterSlice.reducer;