import { createSlice } from "@reduxjs/toolkit";
import initialStates from "../initialStates";

const articlesSlice = createSlice({
    name: "articles",
    initialState: initialStates.articles,
    reducers: {}
});

const {getArticlesReducer} = articlesSlice.actions;

getArticlesReducer({type: ""})