import { createSlice } from "@reduxjs/toolkit";
import getArticles from "../actions/articles/getArticles";
import initialStates from "../initialStates";

const articlesSlice = createSlice({
    name: "articles",
    initialState: initialStates.articles,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getArticles.pending, (state) =>{
            return {...state, articles: {...state.articles, loading: true, error: null}}
        });
        builder.addCase(getArticles.fulfilled, (state, action) =>{
            return {...state, articles: {...state.articles, data: action.payload, loading: false, error: null}}
        })
    }
});

export default articlesSlice.reducer