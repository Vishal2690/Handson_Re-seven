import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../Features/StudentSlice"

export default configureStore({
    reducer:{
        student:StudentReducer

    }
})