import { createBrowserRouter } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails";
import Home from "./pages/Home";
import withNavBar from "./partials/NavBar";

export default createBrowserRouter([
    {
        path: '/',
        element: withNavBar(Home)
    },
    {
        path: '/article/:id',
        element: withNavBar(ArticleDetails)
    }
])