import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todos'

const store = configureStore({
    reducer:{
     notes : todoSlice
    }
})
export default store