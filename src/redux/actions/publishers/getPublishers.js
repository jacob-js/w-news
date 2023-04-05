import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPublishers = createAsyncThunk('publishers/get', async() =>{
    const res = await axios.get(`/top-headlines/sources`);
    return res.data?.sources
});

export default getPublishers;