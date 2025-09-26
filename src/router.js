import {createBrowserRouter} from "react-router-dom";
import Home from './pages/home'
import Accomodation from "./pages/accomodation";
import About from "./pages/about";
import loader from './loader.js'
import Error from "./pages/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />, // ajout route vers page erreur avec errorElement
    },
    {
        path: "/accomodation/:id",
        element: <Accomodation />,
        loader,
        errorElement: <Error />,

    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
    },

],
{
    // IMPORTANT pour GitHub Pages (CRA renseigne PUBLIC_URL à partir de `homepage`)
    basename: process.env.PUBLIC_URL,
});

export default router