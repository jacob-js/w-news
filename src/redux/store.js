import { configureStore } from "@reduxjs/toolkit";
import articles from "./features/articles";

export default configureStore({
    reducer: {
        articles
    }
});