import { createHashRouter } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails";
import Home from "./pages/Home";
import PublisherArticles from "./pages/PublisherArticles";
import withNavBar from "./partials/NavBar";

export default createHashRouter([
    {
        path: '/',
        element: withNavBar(Home)
    },
    {
        path: '/article/:id',
        element: withNavBar(ArticleDetails)
    },
    {
        path: '/publisher/:id',
        element: withNavBar(PublisherArticles)
    }
])