import { configureStore } from "@reduxjs/toolkit";
import jwtReducer from "../features/token/tokenSlice";

export const store = configureStore({
    reducer: {
        jwt: jwtReducer
    },
})