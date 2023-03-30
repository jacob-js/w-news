import { createSlice } from "@reduxjs/toolkit";
import getArticles from "../actions/articles/getArticles";
import getArticlesByPublisher from "../actions/articles/getArticlesByPublisher";
import initialStates from "../initialStates";

const generateArticlesWithIds = (articles) => articles.map((article, index) => ({...article, id: index}));

const articlesSlice = createSlice({
    name: "articles",
    initialState: initialStates.articles,
    reducers: {
        getArticle: (state, {payload}) =>{
            const articleData = state.articles.data.find(art => art.id == payload)
            if(articleData) return {...state, article: {...state.article, data: articleData}};
            return {...state, article: {...state.article, error: "Article not found!"}}
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getArticles.pending, (state) =>{
            return {...state, articles: {...state.articles, loading: true, error: null}}
        });
        builder.addCase(getArticles.fulfilled, (state, action) =>{
            return {...state, articles: {...state.articles, data: generateArticlesWithIds(action.payload), loading: false, error: null}}
        });

        builder.addCase(getArticlesByPublisher.pending, (state) =>{
            return {...state, articlesByPublisher: {...state.articlesByPublisher, loading: true, error: null}}
        });
        builder.addCase(getArticlesByPublisher.fulfilled, (state, action) =>{
            return {...state, articlesByPublisher: {...state.articlesByPublisher, data: generateArticlesWithIds(action.payload), loading: false, error: null}}
        })
    }
});

export const {getArticle} = articlesSlice.actions;
export default articlesSlice.reducer