import { configureStore } from "@reduxjs/toolkit";
import articles from "./features/articles";
import publishers from "./features/publishers";

export default configureStore({
    reducer: {
        articles,
        publishers
    }
});