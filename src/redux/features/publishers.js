import { createSlice } from "@reduxjs/toolkit";
import getPublishers from "../actions/publishers/getPublishers";
import initialStates from "../initialStates";

const publishersSlice = createSlice({
    name: 'publishers',
    initialState: initialStates.publishers,
    extraReducers: builder =>{
        builder.addCase(getPublishers.pending, (state) => ({...state, publishers: {...state.publishers, loading: true, error: null}})),
        builder.addCase(getPublishers.fulfilled, (state, {payload}) => ({...state, publishers: {...state.publishers, data: payload, error: null}}))
    }
});

export default publishersSlice.reducer;