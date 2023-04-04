import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getArticlesByPublisher =  createAsyncThunk('articles/getByPublisher', async(source) =>{
    const res = await axios.get(`/top-headlines?sources=${source}`);
    return res.data?.articles
});

export default getArticlesByPublisher;