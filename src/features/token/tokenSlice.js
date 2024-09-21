import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

export const jwtSlice = createSlice({
    name: 'token',
    initialState,
    
})

export default jwtSlice.reducer