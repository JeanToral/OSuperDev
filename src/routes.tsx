import { createBrowserRouter } from "react-router-dom";
import react from 'react'
import Home from "./pages/home/home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);