import {createBrowserRouter} from "react-router-dom";
import Home from './pages/home'
import Accomodation from "./pages/accomodation";
import About from "./pages/about";
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
        errorElement: <Error />,

    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
    },

]);

export default router