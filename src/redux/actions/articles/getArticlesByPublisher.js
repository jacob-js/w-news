import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getArticlesByPublisher =  createAsyncThunk('articles/getByPublisher', async({source, pageSize=10, page=1}) =>{
    console.log(source, pageSize);
    const res = await axios.get(`/top-headlines?sources=${source}&pageSize=${pageSize}&page=${page}`);
    return res.data?.articles
});

export default getArticlesByPublisher;