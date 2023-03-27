import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import initialStates from "../initialStates";

export const getArticles = createAsyncThunk('articles/get', async(pageSize=10, page=1) =>{
    const res = await axios.get(`/everything?pageSize=${pageSize}&page=${page}`);
    return res.data?.articles
});

const articlesSlice = createSlice({
    name: "articles",
    initialState: initialStates.articles,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getArticles.pending, (state, action) =>{
            return {...state, articles: {...state.articles, loading: true, error: null}}
        });
        builder.addCase(getArticles.fulfilled, (state, action) =>{
            return {...state, articles: {...state.articles, data: action.payload, loading: false, error: null}}
        })
    }
});

export default articlesSlice.reducer