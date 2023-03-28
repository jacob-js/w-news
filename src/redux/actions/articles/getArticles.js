import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getArticles = createAsyncThunk('articles/get', async(pageSize=10, page=1) =>{
    const res = await axios.get(`/everything?pageSize=${pageSize}&page=${page}`);
    return res.data?.articles
});

export default getArticles;