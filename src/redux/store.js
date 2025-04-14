import { configureStore } from "@reduxjs/toolkit";
import filterSlice from './slices/filterSlice'
import searchSlice from './slices/searchSlice'
import viewMore from './slices/features/viewMore'
import selectedRecepie from './slices/features/selectedRecepie'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        filter: filterSlice,
        viewMore: viewMore,
        selectedRecepie: selectedRecepie,
    }
})