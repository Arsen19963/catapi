import { configureStore } from "@reduxjs/toolkit";
import { catsSlice } from "../services/catsSlice";
import {categoriesSlice } from "../services/categoriesSlice";


const store = configureStore({
    reducer: {
        // [catsSlice.reducerPath]: catsSlice.reducer,
        categories: categoriesSlice
    },
    // middleware: getDefaultMiddleware => {
    //     getDefaultMiddleware().concat(catsSlice.middleware)
    // }
})
export default store;

